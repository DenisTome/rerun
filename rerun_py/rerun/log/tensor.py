import logging
from typing import Any, Iterable, Optional, Protocol, Union

import numpy as np
import numpy.typing as npt
from rerun.log import EXP_ARROW
from rerun.log.error_utils import _send_warning

from rerun import bindings

__all__ = [
    "log_tensor",
]


class TorchTensorLike(Protocol):
    """Describes what is need from a Torch Tensor to be loggable to Rerun."""

    def numpy(self, force: bool) -> npt.NDArray[Any]:
        ...


Tensor = Union[npt.ArrayLike, TorchTensorLike]


def _to_numpy(tensor: Tensor) -> npt.NDArray[Any]:
    # isinstance is 4x faster than catching AttributeError
    if isinstance(tensor, np.ndarray):
        return tensor

    try:
        # Make available to the cpu
        return tensor.numpy(force=True)  # type: ignore[union-attr]
    except AttributeError:
        return np.array(tensor, copy=False)


def log_tensor(
    obj_path: str,
    tensor: npt.ArrayLike,
    names: Optional[Iterable[str]] = None,
    meter: Optional[float] = None,
    timeless: bool = False,
) -> None:
    _log_tensor(obj_path, tensor=_to_numpy(tensor), names=names, meter=meter, timeless=timeless)


def _log_tensor(
    obj_path: str,
    tensor: npt.NDArray[Any],
    names: Optional[Iterable[Optional[str]]] = None,
    meter: Optional[float] = None,
    meaning: bindings.TensorDataMeaning = None,
    timeless: bool = False,
) -> None:
    """Log a general tensor, perhaps with named dimensions."""
    if names is not None:
        names = list(names)

        if len(tensor.shape) != len(names):
            _send_warning(
                (
                    f"len(tensor.shape) = len({tensor.shape}) = {len(tensor.shape)} != "
                    + f"len(names) = len({names}) = {len(names)}. Dropping tensor dimension names."
                ),
                2,
            )
            names = None

    SUPPORTED_DTYPES: Any = [
        np.uint8,
        np.uint16,
        np.uint32,
        np.uint64,
        np.int8,
        np.int16,
        np.int32,
        np.int64,
        np.float16,
        np.float32,
        np.float64,
    ]

    if tensor.dtype not in SUPPORTED_DTYPES:
        _send_warning(f"Unsupported dtype: {tensor.dtype}. Expected a numeric type. Skipping this tensor.", 2)
        return

    if EXP_ARROW.classic_log_gate():
        bindings.log_tensor(obj_path, tensor, names, meter, meaning, timeless)

    if EXP_ARROW.arrow_log_gate():
        logging.warning("log_tensor() not yet implemented for Arrow.")