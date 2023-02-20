window.BENCHMARK_DATA = {
  "lastUpdate": 1676898664099,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc7cfce8d45366f804d32bb9cbda57275e3ef088",
          "message": "Better feature defaults for rerun, re_sdk, rerun_py (#1273)\n\n* better defaults for rerun, re_sdk, rerun_py\r\n\r\n* remove explicit glam features\r\n\r\n* dont need image either",
          "timestamp": "2023-02-14T14:37:05+01:00",
          "tree_id": "215dbf212906e418a3e8df67719bb822e08b7a05",
          "url": "https://github.com/rerun-io/rerun/commit/cc7cfce8d45366f804d32bb9cbda57275e3ef088"
        },
        "date": 1676382399059,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548830,
            "range": "± 1597",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1730,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145798,
            "range": "± 3024",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45698139,
            "range": "± 809911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124685855,
            "range": "± 2918885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148627305,
            "range": "± 716286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322552656,
            "range": "± 1451792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173155768,
            "range": "± 758982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63096175,
            "range": "± 851215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234265983,
            "range": "± 1441748",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329925,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6248,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368493,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721276,
            "range": "± 2566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351881,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2000,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354666,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6033649003,
            "range": "± 22363727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1676746,
            "range": "± 9423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2640438,
            "range": "± 23724",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17949,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b08c62746a9e0ae1f8aa822643f47cbf7828a1d2",
          "message": "When loading an .rrd file, start rerun in Play-mode (#1277)\n\n* Refactor: apps always have a receiver\r\n\r\n* When loading an .rrd file, start rerun in Play-mode\r\n\r\n* Small fix in RELEASES.md",
          "timestamp": "2023-02-14T14:55:18+01:00",
          "tree_id": "5829b378d9c54b40e7ac36bdf31750b1a5bdfe11",
          "url": "https://github.com/rerun-io/rerun/commit/b08c62746a9e0ae1f8aa822643f47cbf7828a1d2"
        },
        "date": 1676383510686,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553587,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1750,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146125,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49287812,
            "range": "± 2008663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137576308,
            "range": "± 2154413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163375757,
            "range": "± 1034480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351625021,
            "range": "± 2429682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185628462,
            "range": "± 2145962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72838101,
            "range": "± 1023942",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255113139,
            "range": "± 2570123",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326914,
            "range": "± 1185",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6245,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 375568,
            "range": "± 1323",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 722599,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351218,
            "range": "± 6489",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2016,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354102,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7094142753,
            "range": "± 34800450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1705707,
            "range": "± 15170",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2641603,
            "range": "± 28542",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17943,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97fe5b7cc9b122f3770919e636cee6e53ca7dbb3",
          "message": "Rust crate readme: use explanation from the website (#1282)",
          "timestamp": "2023-02-14T15:22:53+01:00",
          "tree_id": "a83bd3d4ecdcf68331f701f48aee3a4af655c036",
          "url": "https://github.com/rerun-io/rerun/commit/97fe5b7cc9b122f3770919e636cee6e53ca7dbb3"
        },
        "date": 1676385453701,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548271,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 419,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146943,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49254845,
            "range": "± 927573",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136411241,
            "range": "± 2209335",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164126495,
            "range": "± 1186337",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350529556,
            "range": "± 1903051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182190681,
            "range": "± 1876602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72607443,
            "range": "± 1350755",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251281294,
            "range": "± 2527488",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322996,
            "range": "± 3166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6262,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361943,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724031,
            "range": "± 21831",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346943,
            "range": "± 5611",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2015,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356698,
            "range": "± 2717",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7038277128,
            "range": "± 23914509",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684313,
            "range": "± 28978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2596978,
            "range": "± 34189",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17649,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john@rerun.io",
            "name": "John Hughes",
            "username": "jondo2010"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3260bc6ecb5f7a9cfadd62dbd47d711419b276",
          "message": "Update `log_pinhole` docs. (#1274)\n\n* Update `log_pinhole` docs.",
          "timestamp": "2023-02-14T15:38:00+01:00",
          "tree_id": "c20cd0fc3c927d958e03ef23fbe4e955a75e8bd7",
          "url": "https://github.com/rerun-io/rerun/commit/3b3260bc6ecb5f7a9cfadd62dbd47d711419b276"
        },
        "date": 1676386078281,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 536757,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1727,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146665,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47678562,
            "range": "± 1394027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137149535,
            "range": "± 1271694",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161748328,
            "range": "± 1330739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347328932,
            "range": "± 1884121",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184692512,
            "range": "± 1038477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72448329,
            "range": "± 1287217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252407984,
            "range": "± 2063811",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329377,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359417,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715415,
            "range": "± 2508",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348624,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2001,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 344286,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7098434052,
            "range": "± 24583489",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667688,
            "range": "± 7413",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2624842,
            "range": "± 47441",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17984,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60461816e525acc70cdd1199aa7fa7ca4c599417",
          "message": "fix timeline switch edge case (#1283)\n\n* fixed switch timeline edge case\r\n\r\n* end if following, beginning otherwise",
          "timestamp": "2023-02-14T15:58:54+01:00",
          "tree_id": "eb7d754545f80583a9411d5c1a2e4ff80d17682c",
          "url": "https://github.com/rerun-io/rerun/commit/60461816e525acc70cdd1199aa7fa7ca4c599417"
        },
        "date": 1676387302569,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 536875,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1733,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145473,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44793469,
            "range": "± 702771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123307342,
            "range": "± 1210168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150043880,
            "range": "± 817651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318703828,
            "range": "± 1856305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174486076,
            "range": "± 965031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61165373,
            "range": "± 937423",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 232896849,
            "range": "± 1661851",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324969,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6259,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366868,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719192,
            "range": "± 2396",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346801,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1976,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352621,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5979480431,
            "range": "± 19316056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687764,
            "range": "± 13508",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2606885,
            "range": "± 23019",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17954,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d530a9e133a3b1ffc34efb41890b720fd40afb",
          "message": "Do some expectation management in main README.md (#1284)\n\n* Do some expectation management in main README.md\r\n\r\n* less typos and childish emojis\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-02-14T16:23:28+01:00",
          "tree_id": "c6124152b0b672d561fce3c6695f7a446fd2183c",
          "url": "https://github.com/rerun-io/rerun/commit/29d530a9e133a3b1ffc34efb41890b720fd40afb"
        },
        "date": 1676388804291,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549254,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1731,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145733,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48869943,
            "range": "± 1509406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135717734,
            "range": "± 1448330",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160398114,
            "range": "± 1769539",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345977198,
            "range": "± 2127087",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184299324,
            "range": "± 1104029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72702409,
            "range": "± 1083206",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253298042,
            "range": "± 2004618",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323755,
            "range": "± 1530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6270,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366895,
            "range": "± 1711",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715640,
            "range": "± 2464",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346189,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2007,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351955,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6848693801,
            "range": "± 22691806",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712263,
            "range": "± 11799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586873,
            "range": "± 23144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17966,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61abe228a515ae1d8e4db1e091ec824c66316c4b",
          "message": "Release 0.2.0-alpha.5 (#1292)\n\n* Release 0.2.0-alpha.5\r\n\r\n* Add `⛴ release` to labels\r\n\r\n* Say you need the `⛴ release` label on the PR",
          "timestamp": "2023-02-14T16:49:54+01:00",
          "tree_id": "8d02e84d74fc1433a1cdb5e1ba53263975e8d1b5",
          "url": "https://github.com/rerun-io/rerun/commit/61abe228a515ae1d8e4db1e091ec824c66316c4b"
        },
        "date": 1676390474981,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 558920,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1726,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 360,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146899,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46345898,
            "range": "± 1110850",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136101069,
            "range": "± 1642695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163008216,
            "range": "± 2155614",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349458857,
            "range": "± 2904754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184469766,
            "range": "± 1206268",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72112460,
            "range": "± 1355852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254330566,
            "range": "± 2346835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328761,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6100,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350890,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717700,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351379,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1995,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354140,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7024725717,
            "range": "± 24928443",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1690733,
            "range": "± 11801",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619676,
            "range": "± 54042",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17114,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john@rerun.io",
            "name": "John Hughes",
            "username": "jondo2010"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a7a3a2477a07fdde712bad9dfaa69058ba35da4",
          "message": "Update docs in bounding_box.py and transform.py (#1298)",
          "timestamp": "2023-02-14T17:59:56+01:00",
          "tree_id": "270cdee0b348f09f8d47794b4ec67dc6539ae688",
          "url": "https://github.com/rerun-io/rerun/commit/7a7a3a2477a07fdde712bad9dfaa69058ba35da4"
        },
        "date": 1676394597229,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543408,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1762,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147631,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51498668,
            "range": "± 552366",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137598729,
            "range": "± 1469881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166496739,
            "range": "± 2015467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354685498,
            "range": "± 2508299",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184742950,
            "range": "± 1668287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74233336,
            "range": "± 1137424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252878022,
            "range": "± 2019433",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332198,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6200,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350994,
            "range": "± 7268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711655,
            "range": "± 2653",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344698,
            "range": "± 7447",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2018,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355869,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7034372739,
            "range": "± 51416447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704658,
            "range": "± 14609",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623107,
            "range": "± 29427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17149,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d09a2817ce0cb43d2f4bb91c126484bd190a5f6",
          "message": "readme: link to troubleshooting page (#1297)\n\n* link to troubleshooting page\r\n\r\n* Update README.md\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* link to troubleshooting doc everywhere\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-14T18:38:42+01:00",
          "tree_id": "ede345ef6f5d6fa5749322f86d6fa269f30c7869",
          "url": "https://github.com/rerun-io/rerun/commit/1d09a2817ce0cb43d2f4bb91c126484bd190a5f6"
        },
        "date": 1676396919946,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550403,
            "range": "± 5680",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1747,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 418,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147366,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47180205,
            "range": "± 1606197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135462563,
            "range": "± 1457042",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160731290,
            "range": "± 889762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351288662,
            "range": "± 2206225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184301505,
            "range": "± 4721636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72251563,
            "range": "± 1370784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251379731,
            "range": "± 2143564",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330511,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6186,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353748,
            "range": "± 2276",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720297,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347393,
            "range": "± 907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2028,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353646,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7102383023,
            "range": "± 24505300",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1677055,
            "range": "± 14257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657653,
            "range": "± 12101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17084,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40389618ac19e34842b8ddff54d3cca08c214348",
          "message": "Doc fixes for set_time_seconds and set_time_nanos (#1288)\n\n* Doc fixes for set_time_seconds and set_time_nanos\r\n\r\n* doclinks and explain short time\r\n\r\n* fix doclinks\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-14T20:40:21+01:00",
          "tree_id": "95c54c3d981644b6092ac8f38945d65322b6c472",
          "url": "https://github.com/rerun-io/rerun/commit/40389618ac19e34842b8ddff54d3cca08c214348"
        },
        "date": 1676404235092,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557039,
            "range": "± 2218",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1750,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148948,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51607314,
            "range": "± 565921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137234803,
            "range": "± 1489448",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169804618,
            "range": "± 2870198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356421691,
            "range": "± 3502377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187994890,
            "range": "± 1369236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75054487,
            "range": "± 1083547",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257211304,
            "range": "± 1896158",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 337034,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371701,
            "range": "± 2051",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 737172,
            "range": "± 6094",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354717,
            "range": "± 2713",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2034,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 360733,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7174121070,
            "range": "± 42394063",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1761072,
            "range": "± 24253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2702539,
            "range": "± 93022",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17309,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b60db961801347d1ee699009f9d7af649541f57",
          "message": "Last fixes! (#1305)\n\n* Sleep longer waiting for the spawned viewer to start\r\n\r\n* Don't spam the same error",
          "timestamp": "2023-02-14T20:57:51+01:00",
          "tree_id": "48ddc99d55c886ef98bb1b68d8becef01afd42d0",
          "url": "https://github.com/rerun-io/rerun/commit/1b60db961801347d1ee699009f9d7af649541f57"
        },
        "date": 1676405263049,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570078,
            "range": "± 8662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1780,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147282,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44289695,
            "range": "± 1460893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133646763,
            "range": "± 1609691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160140805,
            "range": "± 1805665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345611545,
            "range": "± 28190744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181250396,
            "range": "± 2614833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70908870,
            "range": "± 1672633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248910246,
            "range": "± 3105995",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328951,
            "range": "± 4820",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6017,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364166,
            "range": "± 3542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711791,
            "range": "± 7576",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343607,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1959,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350782,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6850536575,
            "range": "± 14843141",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641234,
            "range": "± 17522",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2591680,
            "range": "± 83574",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16829,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90c160fc355d410bf7126e2212c89451fbc32b0e",
          "message": "Release 0.2.0 - The first public release of Rerun! (#1306)",
          "timestamp": "2023-02-14T21:26:35+01:00",
          "tree_id": "0248d7ebc8cbc2b9bf266fbcb47ffc3b6b326868",
          "url": "https://github.com/rerun-io/rerun/commit/90c160fc355d410bf7126e2212c89451fbc32b0e"
        },
        "date": 1676406991234,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552531,
            "range": "± 12390",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1742,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149904,
            "range": "± 3495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47269236,
            "range": "± 1386536",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135958438,
            "range": "± 1390204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161387282,
            "range": "± 999855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349615688,
            "range": "± 1704312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182462207,
            "range": "± 1932917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72026604,
            "range": "± 1487766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249347050,
            "range": "± 1934099",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324894,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6123,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351200,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707867,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347030,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2022,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353471,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6989584664,
            "range": "± 21497312",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691823,
            "range": "± 13459",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619615,
            "range": "± 7647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16630,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a15dc48ee1ff49632564bc14910da2252471fe4",
          "message": "Improve readme badges (#1307)\n\n* Fix RELEASES.md\r\n\r\n* Add badges for pypi and crates.io, and center the badges\r\n\r\n* Center badges and fix links",
          "timestamp": "2023-02-14T22:58:50+01:00",
          "tree_id": "f1e8da4b85e059555b3ebded63d14786b09aa5a6",
          "url": "https://github.com/rerun-io/rerun/commit/6a15dc48ee1ff49632564bc14910da2252471fe4"
        },
        "date": 1676412522895,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 538905,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1753,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148752,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46575484,
            "range": "± 538633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125045378,
            "range": "± 1291350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154981974,
            "range": "± 1033326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327683463,
            "range": "± 4208857",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175594686,
            "range": "± 1892893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64643283,
            "range": "± 739192",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238132656,
            "range": "± 1793598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325620,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6112,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354695,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716557,
            "range": "± 3529",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346069,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2056,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357583,
            "range": "± 1214",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6036668855,
            "range": "± 27846690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704415,
            "range": "± 40220",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2714365,
            "range": "± 58419",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16802,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a03da727aad5a2b22aba233c7eef27a0e2a5a29",
          "message": "Prevent wrap on 'Streams' text (#1308)\n\n* Prevent wrap on 'Streams' text\r\n\r\n* Use wrap = false instead",
          "timestamp": "2023-02-15T08:00:25+01:00",
          "tree_id": "95e8c4f1b6c2aaf022056ec12443c4136176332e",
          "url": "https://github.com/rerun-io/rerun/commit/3a03da727aad5a2b22aba233c7eef27a0e2a5a29"
        },
        "date": 1676445166426,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543890,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1851,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147842,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47922163,
            "range": "± 1671429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135199566,
            "range": "± 1272957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163408884,
            "range": "± 1812648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348650611,
            "range": "± 2177243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183061383,
            "range": "± 1190031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73411922,
            "range": "± 1565060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249752480,
            "range": "± 1837039",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326504,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353258,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706403,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348791,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1998,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353542,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7010972118,
            "range": "± 18602921",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1700172,
            "range": "± 8697",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2555203,
            "range": "± 7418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16426,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40140edbab4c98ee55f5f395d4f1ed92f5102f4f",
          "message": "Update to eframe 0.21.3 with fix for web text input (#1311)",
          "timestamp": "2023-02-15T13:31:25+01:00",
          "tree_id": "af4d3c9754e1c3cbfcd662e59dbedf85fc6ecf7b",
          "url": "https://github.com/rerun-io/rerun/commit/40140edbab4c98ee55f5f395d4f1ed92f5102f4f"
        },
        "date": 1676464882969,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548053,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1766,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147782,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45656825,
            "range": "± 1298376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133270024,
            "range": "± 1236597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162603331,
            "range": "± 837834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345696103,
            "range": "± 2131852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180607066,
            "range": "± 1102781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69850266,
            "range": "± 1245125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250317700,
            "range": "± 1920631",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322806,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6067,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349717,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 694741,
            "range": "± 3990",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346447,
            "range": "± 1483",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1962,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354782,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6771166453,
            "range": "± 62403433",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1643416,
            "range": "± 12970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582868,
            "range": "± 16683",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16531,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12f75bab68eabc1b3f22fac6851f41623d07cd33",
          "message": "Fix some links (#1314)\n\n* lint markdown files too\r\n\r\n* Github -> GitHub\r\n\r\n* Update links to our Python API docs",
          "timestamp": "2023-02-15T14:07:08+01:00",
          "tree_id": "42983f901623d5e123ce609f58f7597dd874861e",
          "url": "https://github.com/rerun-io/rerun/commit/12f75bab68eabc1b3f22fac6851f41623d07cd33"
        },
        "date": 1676467035356,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546573,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1730,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148240,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47787104,
            "range": "± 1577455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135162646,
            "range": "± 1465229",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164696397,
            "range": "± 1187583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348690843,
            "range": "± 1926746",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182958566,
            "range": "± 1049535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72281118,
            "range": "± 976901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251580555,
            "range": "± 1786321",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326320,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351875,
            "range": "± 1717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713906,
            "range": "± 3003",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345735,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2007,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351267,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6902761801,
            "range": "± 35428733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1692020,
            "range": "± 17774",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2665535,
            "range": "± 9079",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16641,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07fa09e7170c4b66fe7549975f8b44de293749f4",
          "message": "Add link to issue about long compile-times",
          "timestamp": "2023-02-15T14:29:35+01:00",
          "tree_id": "a70fc8c3221f0752b4100c7003642c538aa9b5ed",
          "url": "https://github.com/rerun-io/rerun/commit/07fa09e7170c4b66fe7549975f8b44de293749f4"
        },
        "date": 1676468352396,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552622,
            "range": "± 1993",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1750,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149375,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46393967,
            "range": "± 500001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124098494,
            "range": "± 3418385",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153143692,
            "range": "± 1078027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323301165,
            "range": "± 1358059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174759331,
            "range": "± 856562",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64210180,
            "range": "± 799573",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236423624,
            "range": "± 1509336",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327428,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6114,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357905,
            "range": "± 1339",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712306,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349022,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2017,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353894,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5981992416,
            "range": "± 41416185",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1698919,
            "range": "± 10019",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2629557,
            "range": "± 11175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16544,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b69ac8bbfdc0e8b0dfb38a2dc074d48294ac712",
          "message": "Only build wheels on push to main or when labeled with the wheel tag (#1319)",
          "timestamp": "2023-02-15T15:29:18+01:00",
          "tree_id": "734bd4b478aa01abd4baff86c0583608c03c985a",
          "url": "https://github.com/rerun-io/rerun/commit/4b69ac8bbfdc0e8b0dfb38a2dc074d48294ac712"
        },
        "date": 1676471932442,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553115,
            "range": "± 2507",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1769,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150331,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42058597,
            "range": "± 1021838",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121941691,
            "range": "± 1154877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 147410591,
            "range": "± 1037459",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318522191,
            "range": "± 1820246",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 171085584,
            "range": "± 1041445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62421793,
            "range": "± 874782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 228361492,
            "range": "± 1629106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327322,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6124,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353957,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701799,
            "range": "± 2650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344447,
            "range": "± 1041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2001,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351522,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6060108543,
            "range": "± 15434297",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1685634,
            "range": "± 7451",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623312,
            "range": "± 17548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16594,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af10ff3c24a3cb3939a3899c91fe49eea75c3b00",
          "message": "Trying to fix the matrix-setup if condition (#1321)\n\n* Trying to fix the matrix-setup if condition\r\n* Dump the github and job contexts",
          "timestamp": "2023-02-15T16:22:30+01:00",
          "tree_id": "9cd675b59e2fd096a26f27bdd876ec0a2bf94963",
          "url": "https://github.com/rerun-io/rerun/commit/af10ff3c24a3cb3939a3899c91fe49eea75c3b00"
        },
        "date": 1676475147982,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549692,
            "range": "± 3094",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1761,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149238,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44687568,
            "range": "± 1726759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134048091,
            "range": "± 1449567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157828634,
            "range": "± 1262202",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 344079959,
            "range": "± 2540036",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180644470,
            "range": "± 1239300",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70514982,
            "range": "± 1323602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247285145,
            "range": "± 2523098",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324398,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6124,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354683,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707275,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348663,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2014,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353351,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6923774402,
            "range": "± 12005511",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1694973,
            "range": "± 7025",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2592651,
            "range": "± 7560",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16761,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afb9caec5f17a24698829f9b4bbaff13bac97215",
          "message": "Add screenshot of minimal example",
          "timestamp": "2023-02-15T20:40:15+01:00",
          "tree_id": "e42dc3796b7069040e9c983f77147b1d0c495b85",
          "url": "https://github.com/rerun-io/rerun/commit/afb9caec5f17a24698829f9b4bbaff13bac97215"
        },
        "date": 1676490592422,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 547430,
            "range": "± 2954",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1748,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148609,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45149364,
            "range": "± 839058",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124918323,
            "range": "± 1119446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151483698,
            "range": "± 1592125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325515371,
            "range": "± 1877719",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174315158,
            "range": "± 821935",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63197718,
            "range": "± 913681",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237927905,
            "range": "± 1772589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325420,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6126,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353428,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704287,
            "range": "± 2763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347394,
            "range": "± 1214",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2002,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352381,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5971622692,
            "range": "± 24600582",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1670009,
            "range": "± 11002",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2607611,
            "range": "± 10051",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16782,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c2b291280676cfae2b6f1ff523753243d314cea",
          "message": "Allow controlling the graphics backend & power preference through standard wgpu env vars (#1332)\n\n* Control wgpu backend via standard environment variable\r\n* allow to configure gpu power preference through standard wgpu env var",
          "timestamp": "2023-02-16T17:52:03+01:00",
          "tree_id": "a914ca507f02bd4b8145095cbed0d537205a8bde",
          "url": "https://github.com/rerun-io/rerun/commit/6c2b291280676cfae2b6f1ff523753243d314cea"
        },
        "date": 1676566901843,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 542075,
            "range": "± 2135",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151060,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44393906,
            "range": "± 841219",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124004286,
            "range": "± 1174796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150148928,
            "range": "± 856983",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318953411,
            "range": "± 1828873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174140439,
            "range": "± 1420162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62815775,
            "range": "± 987807",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234945776,
            "range": "± 1825477",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320185,
            "range": "± 3306",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6033,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349604,
            "range": "± 2738",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702155,
            "range": "± 6691",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346729,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1955,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353363,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6001194736,
            "range": "± 21190424",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667082,
            "range": "± 9421",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2604618,
            "range": "± 10908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16558,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1184c20abf732308e8c85aee72b52a688bc7f19f",
          "message": "Document undocumented environment variables on help page. (#1335)",
          "timestamp": "2023-02-17T08:31:38+01:00",
          "tree_id": "2a854ac54dca6c826c2c75a2005d4fe287c7b7cc",
          "url": "https://github.com/rerun-io/rerun/commit/1184c20abf732308e8c85aee72b52a688bc7f19f"
        },
        "date": 1676619755601,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543732,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1770,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148925,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45766444,
            "range": "± 667434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123453410,
            "range": "± 1130471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151097276,
            "range": "± 826829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322333609,
            "range": "± 1704390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173611485,
            "range": "± 694170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63510920,
            "range": "± 697730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235069316,
            "range": "± 1457739",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325088,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6150,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354547,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703962,
            "range": "± 2397",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346762,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2031,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353949,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5949917133,
            "range": "± 15028800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1683406,
            "range": "± 11142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2627281,
            "range": "± 12276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16708,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eda4854cffd6f9be74b684fe220c3d91e7c0c203",
          "message": "Point users to our troubleshooting page on panic (#1338)",
          "timestamp": "2023-02-17T10:11:26+01:00",
          "tree_id": "fa2998694090821f5ff6b138b7cdd588f7d8598e",
          "url": "https://github.com/rerun-io/rerun/commit/eda4854cffd6f9be74b684fe220c3d91e7c0c203"
        },
        "date": 1676625840438,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548776,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1761,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 359,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151460,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50807424,
            "range": "± 832605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136213328,
            "range": "± 1620587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162471056,
            "range": "± 1690214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352702178,
            "range": "± 3153561",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182237370,
            "range": "± 1180529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75718444,
            "range": "± 1267535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256583566,
            "range": "± 2560090",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329841,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6149,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356339,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715182,
            "range": "± 3767",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350055,
            "range": "± 1460",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2036,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349053,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7022097143,
            "range": "± 39133685",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1695068,
            "range": "± 23339",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657177,
            "range": "± 92778",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16555,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e333e2c021b23b9de8efd71fc570487f65d58963",
          "message": "working paths debug build within workspace (#1341)",
          "timestamp": "2023-02-17T11:15:48+01:00",
          "tree_id": "fda2dbea87cde6a666beed884c113d2ea185de12",
          "url": "https://github.com/rerun-io/rerun/commit/e333e2c021b23b9de8efd71fc570487f65d58963"
        },
        "date": 1676629564001,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 551948,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1765,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149580,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49584371,
            "range": "± 909727",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136243566,
            "range": "± 1307667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164503790,
            "range": "± 1219695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353121555,
            "range": "± 1498272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183164672,
            "range": "± 884761",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74478398,
            "range": "± 1070390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255247192,
            "range": "± 1733356",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324669,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6185,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352961,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712605,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343561,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2025,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355265,
            "range": "± 898",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7050992884,
            "range": "± 22598620",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1670825,
            "range": "± 11378",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2574940,
            "range": "± 12710",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16728,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e4c194f64bc70dc89ef7d6badb3dfe078c6ae9b",
          "message": "Add signal handler on *nix with troubleshooting and stacktrace (#1340)\n\n* Add signal handler on *nix with troubleshooting and stacktrace\r\n\r\n* Add a way to segfault the app in the debug menu\r\n\r\n* Add debug->crash menu button to trigger a stack overflow",
          "timestamp": "2023-02-17T11:35:50+01:00",
          "tree_id": "188033b3194405c38334e2d62b0e6cdfae23a9a9",
          "url": "https://github.com/rerun-io/rerun/commit/3e4c194f64bc70dc89ef7d6badb3dfe078c6ae9b"
        },
        "date": 1676630760849,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 540725,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1755,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 353,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150206,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49609027,
            "range": "± 943220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136498653,
            "range": "± 2062401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162033433,
            "range": "± 1165883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351528716,
            "range": "± 2442649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184181248,
            "range": "± 938139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73907825,
            "range": "± 1050583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256444627,
            "range": "± 1828361",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325834,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6079,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358387,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708351,
            "range": "± 3107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349352,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2011,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355771,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7030803564,
            "range": "± 19043358",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1665206,
            "range": "± 13687",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2659189,
            "range": "± 15340",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16791,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6901c4fb8eceea9622c07f48be5b2febdf69750b",
          "message": "Switch ci_docker to a container based on ubuntu 20.04 (#1334)\n\n* Create a 20.04-based dockerfile with rust and all our required packages\r\n* Use the new docker container from ci jobs, including the wheel builder\r\n* Force manylinux_2_31\r\n* Install newer binaryen",
          "timestamp": "2023-02-17T10:09:50-05:00",
          "tree_id": "6e59edb512f66406592a4c76d2d1ee63832e3607",
          "url": "https://github.com/rerun-io/rerun/commit/6901c4fb8eceea9622c07f48be5b2febdf69750b"
        },
        "date": 1676647182213,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 558217,
            "range": "± 3053",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1793,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148385,
            "range": "± 1561",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47221976,
            "range": "± 1465270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136195440,
            "range": "± 1614877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162414955,
            "range": "± 1189441",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350379018,
            "range": "± 2174970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186044719,
            "range": "± 1512954",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72644867,
            "range": "± 1282815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256273222,
            "range": "± 2289841",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 338381,
            "range": "± 3477",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6220,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367090,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720022,
            "range": "± 5654",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346918,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2045,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353741,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6989480303,
            "range": "± 21458978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1732635,
            "range": "± 16162",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657545,
            "range": "± 30778",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16797,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df920dcd08f5af7a623e879569529a6f4d6a2f1a",
          "message": "Use python3 in the jobs that weren't tested in PR (#1348)",
          "timestamp": "2023-02-17T17:14:09+01:00",
          "tree_id": "e80373a7d057fdd3b3863f84cca991774f83cc66",
          "url": "https://github.com/rerun-io/rerun/commit/df920dcd08f5af7a623e879569529a6f4d6a2f1a"
        },
        "date": 1676651042561,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 539792,
            "range": "± 8460",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1808,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 415,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149024,
            "range": "± 2357",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46420869,
            "range": "± 1875993",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137791173,
            "range": "± 2037920",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159017079,
            "range": "± 1459779",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345731336,
            "range": "± 3042506",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183977447,
            "range": "± 2043266",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73461166,
            "range": "± 1424380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256863312,
            "range": "± 3280276",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328683,
            "range": "± 5446",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6286,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366717,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 725258,
            "range": "± 3867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348080,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2074,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 368887,
            "range": "± 6100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6959220528,
            "range": "± 37975131",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1698381,
            "range": "± 24206",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2769555,
            "range": "± 222222",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16976,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eltociear@gmail.com",
            "name": "Ikko Eltociear Ashimine",
            "username": "eltociear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96437ee8979a2b629526875b515684bebb2e69c6",
          "message": "Fix typo in buffered_client.rs (#1347)\n\nuntill -> until",
          "timestamp": "2023-02-17T18:14:07+01:00",
          "tree_id": "1b77068f823726c6e9525e307ee17e3ab02fafe8",
          "url": "https://github.com/rerun-io/rerun/commit/96437ee8979a2b629526875b515684bebb2e69c6"
        },
        "date": 1676654640703,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563724,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1796,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149726,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46719032,
            "range": "± 1904548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137478410,
            "range": "± 1668570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161753157,
            "range": "± 5188542",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349874593,
            "range": "± 2521500",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184719153,
            "range": "± 1625745",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73166990,
            "range": "± 1399405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254519335,
            "range": "± 2142192",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328052,
            "range": "± 5573",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6268,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367033,
            "range": "± 1573",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711300,
            "range": "± 8149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349155,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2005,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355303,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7037126675,
            "range": "± 30997466",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1702561,
            "range": "± 16835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2668694,
            "range": "± 21345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16548,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "548d269a61c115468aeb1b7f3e9fd49ecd08802c",
          "message": "Texture & buffer call now `destroy` on removal from pool (#1359)\n\nFixes #592",
          "timestamp": "2023-02-20T13:40:03+01:00",
          "tree_id": "699f7d4b09a8683e7cd8c0df16361f01ef2d6cf4",
          "url": "https://github.com/rerun-io/rerun/commit/548d269a61c115468aeb1b7f3e9fd49ecd08802c"
        },
        "date": 1676897371229,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562227,
            "range": "± 5000",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1835,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 433,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153144,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45934909,
            "range": "± 954488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124859394,
            "range": "± 1122795",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152120205,
            "range": "± 832273",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322750928,
            "range": "± 1610749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175393518,
            "range": "± 840170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64581240,
            "range": "± 884473",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237345731,
            "range": "± 2848358",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331144,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6299,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371276,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716954,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348583,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2058,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346709,
            "range": "± 1881",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6021744068,
            "range": "± 15125163",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1714409,
            "range": "± 8578",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2618441,
            "range": "± 10492",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16864,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd74ecd1499cbbf34934fa6230fb6d6fccd701f",
          "message": "Rename all instances of `frame_maintenance` to `begin_frame` (#1360)\n\nComments already indicated that it should be called at the beginning of a frame!",
          "timestamp": "2023-02-20T14:01:17+01:00",
          "tree_id": "00d4e86faacba5ad498b53f8b7e4e4a473da3e65",
          "url": "https://github.com/rerun-io/rerun/commit/afd74ecd1499cbbf34934fa6230fb6d6fccd701f"
        },
        "date": 1676898660876,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543855,
            "range": "± 5831",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1800,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149177,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46337485,
            "range": "± 463167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124442581,
            "range": "± 1114912",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150822654,
            "range": "± 974862",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324804552,
            "range": "± 2445228",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176947517,
            "range": "± 838515",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65099027,
            "range": "± 741626",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237573783,
            "range": "± 2239220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329864,
            "range": "± 2332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6292,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 374339,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 729442,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345266,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2058,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351915,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6001053877,
            "range": "± 10507801",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1723117,
            "range": "± 5184",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2624028,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16896,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}