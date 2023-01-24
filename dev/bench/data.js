window.BENCHMARK_DATA = {
  "lastUpdate": 1674557397475,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52b70551b4dc317019c28715e56c9ab2b4460906",
          "message": "Stable diffusion example fixes (#831)\n\n* Add in fixes to huggingface_pipeline from main\r\n* Control SD model weights cache dir\r\n* Remove rerun from example requirements.txt\r\n* Remove reference to multiprocessing's requirements\r\n* Fix randn_tensor call\r\n* Fix comment in __call__\r\n* Improve prompt logging\r\n* Update default stable diffusion prompt",
          "timestamp": "2023-01-19T18:56:30+01:00",
          "tree_id": "630de2458589b76a1dc4ec98a7105a436a8f2fd3",
          "url": "https://github.com/rerun-io/rerun/commit/52b70551b4dc317019c28715e56c9ab2b4460906"
        },
        "date": 1674151228534,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565619,
            "range": "± 3521",
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
          "id": "cf68955e5fda622d9e2c3cfae424d769d433f963",
          "message": "Make visible history work for Point3D (#820)\n\n* Make visible history work for Point3D",
          "timestamp": "2023-01-19T22:32:24+01:00",
          "tree_id": "0e8d51e0101177cfa993fc9003b9d0851a2f62d5",
          "url": "https://github.com/rerun-io/rerun/commit/cf68955e5fda622d9e2c3cfae424d769d433f963"
        },
        "date": 1674164069878,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557837,
            "range": "± 6447",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "210fba86c979b4e11154bbaf30b9ebcdb82ffb20",
          "message": "Add time histogram crate (#657)\n\n* First commit\r\n\r\n* less memory use\r\n\r\n* Better naming, and add tree8 + simple iterator\r\n\r\n* Fix multi-threaded memory-measurement\r\n\r\n* Add range to the query\r\n\r\n* sparseness test\r\n\r\n* Implement contraction\r\n\r\n* Implement removal\r\n\r\n* Use absolute indexing\r\n\r\n* Remove the other implementations\r\n\r\n* Add more tests\r\n\r\n* Docs\r\n\r\n* cleanup\r\n\r\n* Remove misleading comments\r\n\r\n* Some better naming and docs\r\n\r\n* Cleanup\r\n\r\n* Replace shell script with just-script\r\n\r\n* Use Relaxed\r\n\r\n* Explain the thread-local memory counting\r\n\r\n* Motivate weird u64_key_from_i64_key\r\n\r\n* Call it `root`\r\n\r\n* Document cutoff_size==0\r\n\r\n* Move up constant\r\n\r\n* Better comment\r\n\r\n* move stack pop\r\n\r\n* Document how to improve `remove` in the future\r\n\r\n* Document constants, and add some static assertions\r\n\r\n* Tree -> Node\r\n\r\n* Use SmallVec\r\n\r\n* Silence clippy",
          "timestamp": "2023-01-20T07:59:42+01:00",
          "tree_id": "35ac60a9ac50dd8f5de643ed9a8ca68ea51938cc",
          "url": "https://github.com/rerun-io/rerun/commit/210fba86c979b4e11154bbaf30b9ebcdb82ffb20"
        },
        "date": 1674198271913,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573679,
            "range": "± 3596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "646a564a4ec7d5d075b00733a464b63db74d17ec",
          "message": "Dependency cleanup (#816)\n\n* Use workspace versions of wgpu and egui crates\r\n\r\n* Add document-features to re_renderer, re_query and re_tuid\r\n\r\n* Add a note about how we need to stop using patched crates\r\n\r\n* Clarify TODO",
          "timestamp": "2023-01-20T08:15:24+01:00",
          "tree_id": "a0a5fdd5aba7a539791895e3845d4af39b0ba7ba",
          "url": "https://github.com/rerun-io/rerun/commit/646a564a4ec7d5d075b00733a464b63db74d17ec"
        },
        "date": 1674199185417,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 582018,
            "range": "± 2405",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e649a5e963aeb444cab3cb18e9f8ecf0eb43535a",
          "message": "Python SDK: Add `rerun.spawn_and_connect` (#821)\n\n* Python SDK: Add rerun.spawn_and_connect\r\n\r\n* Update all examples\r\n\r\n* Better docs\r\n\r\n* Update changelog\r\n\r\n* Python linting\r\n\r\n* Set start_new_session=True\r\n\r\n* Unify how we setup logging across all crates\r\n\r\n* Graceful shutdown of client connection\r\n\r\n* Add separate spawn_viewer function\r\n\r\n* py-lint\r\n\r\n* Update changelog date",
          "timestamp": "2023-01-20T09:12:23+01:00",
          "tree_id": "a19e5e9740dd1acf82bf53caf7e83590f81dd32d",
          "url": "https://github.com/rerun-io/rerun/commit/e649a5e963aeb444cab3cb18e9f8ecf0eb43535a"
        },
        "date": 1674202474508,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572154,
            "range": "± 3784",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ad4848324d7660b7a5804acfa849994f0a87615",
          "message": "Remove all use of crate cgmath (#840)",
          "timestamp": "2023-01-20T11:25:49+01:00",
          "tree_id": "1add6b1b55c4c88d378f143596018cb3e7d715c0",
          "url": "https://github.com/rerun-io/rerun/commit/2ad4848324d7660b7a5804acfa849994f0a87615"
        },
        "date": 1674216195444,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566078,
            "range": "± 2155",
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
          "id": "aa09fe470b45864a8b7afee920ebcd2117a9bca1",
          "message": "Fix objects with transform only missing in arrow and selection history prune crash (#844)\n\n* Fix objects with transform only not being added to scenes in arrow\r\n* Fix selection history prune causing crashes",
          "timestamp": "2023-01-20T13:12:02+01:00",
          "tree_id": "d172d63e9b2a4d4303a834c3570f3a199c5a1aa4",
          "url": "https://github.com/rerun-io/rerun/commit/aa09fe470b45864a8b7afee920ebcd2117a9bca1"
        },
        "date": 1674216948783,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563321,
            "range": "± 4496",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ee3dfa362e204501e6e056c1e2ed498365ce4e1",
          "message": "Make `rr.init(\"my_app\", spawn_and_connect = True)` as a short form (#846)\n\n* Make `rr.init(\"my_app\", spawn_and_connect = True)` as a short form\r\n\r\n* Add dead simple example of how to use Rerun SDK\r\n\r\n* Update requirements files\r\n\r\n* pylint\r\n\r\n* make hello_world a main.py",
          "timestamp": "2023-01-20T13:33:09+01:00",
          "tree_id": "cf7db5d902f93927ef6d03a581a6a971418757dd",
          "url": "https://github.com/rerun-io/rerun/commit/8ee3dfa362e204501e6e056c1e2ed498365ce4e1"
        },
        "date": 1674218194510,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559926,
            "range": "± 4903",
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
          "id": "3b5f4f32a59b1c5eeef25da0b82ee139297bea9a",
          "message": "Fix deadlock when flushing messages (#843)\n\n* Drop msgs on their own thread\r\n\r\n* Relesae the GIL before flush\r\n\r\n* Better expect msg\r\n\r\n* clippy",
          "timestamp": "2023-01-20T13:56:37+01:00",
          "tree_id": "64fef631611fb168c97315def96696584183b2f7",
          "url": "https://github.com/rerun-io/rerun/commit/3b5f4f32a59b1c5eeef25da0b82ee139297bea9a"
        },
        "date": 1674220172509,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568925,
            "range": "± 4770",
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
          "id": "3918e839b072cd1c0a0a9b9822754425fb815363",
          "message": "Selected things are now highlighted (#838)\n\n* Selected things are now highlighted\r\n* flat shaded lines for 2d",
          "timestamp": "2023-01-20T14:15:52+01:00",
          "tree_id": "4f4cf8cf232184958f11a804969e82f19be21747",
          "url": "https://github.com/rerun-io/rerun/commit/3918e839b072cd1c0a0a9b9822754425fb815363"
        },
        "date": 1674220681157,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562857,
            "range": "± 3790",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6bb41f569a97d6748a6dbff40ca8834e7075a6b",
          "message": "Add profiling scopes to point3d scene population (#849)",
          "timestamp": "2023-01-20T14:31:14+01:00",
          "tree_id": "f683180d51a21e883d949497c68c7ec5eb2ecc22",
          "url": "https://github.com/rerun-io/rerun/commit/e6bb41f569a97d6748a6dbff40ca8834e7075a6b"
        },
        "date": 1674221608323,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581575,
            "range": "± 4003",
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
          "id": "931d059ce6b4da760d6671710bcabbbb4599977a",
          "message": "Native rerun-agnostic analytics SDK (#819)\n\n* bootstrap and identifying the gazillon edge cases\r\n\r\n* getting... somewhere\r\n\r\n* why is this in xdg_config\r\n\r\n* all the CLI stuff\r\n\r\n* first take at a disclaimer\r\n\r\n* stuff\r\n\r\n* persistent attributes\r\n\r\n* starting to split/abstract pipelines and sinks\r\n\r\n* handling historical data\r\n\r\n* default props and some random cleanup\r\n\r\n* proper handling of unexpected catchup thread shutdown\r\n\r\n* wip\r\n\r\n* cleanin up the noise\r\n\r\n* more cleanup, more error handling\r\n\r\n* format\r\n\r\n* get rid of openssl\r\n\r\n* dealing with denied deps\r\n\r\n* self review\r\n\r\n* first copy pass and add 'details' command\r\n\r\n* todo\r\n\r\n* addressing PR comments\r\n\r\n* missed that one",
          "timestamp": "2023-01-20T14:37:22+01:00",
          "tree_id": "319d0162d26bc279608b0cff2dc9e4aea0dbd8e3",
          "url": "https://github.com/rerun-io/rerun/commit/931d059ce6b4da760d6671710bcabbbb4599977a"
        },
        "date": 1674221997212,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561246,
            "range": "± 8179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa",
          "message": "Improve selection history UI (#848)\n\n* Document SelectionHistory\r\n* Nice selection history UI: drop-down on right-clicking buttons\r\n* Don't serialize selection history\r\n* Store one selection history per recording\r\n* Fix potential out-of-bound in selection history\r\n* Simplify selection history pruning\r\n* Keep the correct index",
          "timestamp": "2023-01-20T15:00:28+01:00",
          "tree_id": "411222a46d2ab99d4d1974959e7f2726724bfde2",
          "url": "https://github.com/rerun-io/rerun/commit/4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa"
        },
        "date": 1674223422047,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565637,
            "range": "± 6194",
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
          "id": "5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac",
          "message": "Slightly cleaner error handling for AddrInUse (#847)\n\n* Slightly cleaner error handling for AddrInUse\r\n* Return error code consistently on failure",
          "timestamp": "2023-01-20T15:26:21+01:00",
          "tree_id": "352fbb7e33ad2eaa4a9b9674768a8170e679d32d",
          "url": "https://github.com/rerun-io/rerun/commit/5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac"
        },
        "date": 1674224906786,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571825,
            "range": "± 7047",
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
          "id": "c9004877ab970d4bfcaeb725b2c14921b88dd245",
          "message": "Visible history all the types (#852)\n\n* Visible history all the types\r\n* Fix image layering on arrow",
          "timestamp": "2023-01-20T15:40:10+01:00",
          "tree_id": "b40ea11090229ffb94fd4e74a72688ccbab34b1b",
          "url": "https://github.com/rerun-io/rerun/commit/c9004877ab970d4bfcaeb725b2c14921b88dd245"
        },
        "date": 1674225739585,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564991,
            "range": "± 3187",
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
          "id": "ee29c1485487d6ae0fcc287c13c953494cbe90f3",
          "message": "Convert F16 -> F32 on log (#855)",
          "timestamp": "2023-01-20T16:06:47+01:00",
          "tree_id": "6b64039625c951f81c50469141bf9a3c3ff02720",
          "url": "https://github.com/rerun-io/rerun/commit/ee29c1485487d6ae0fcc287c13c953494cbe90f3"
        },
        "date": 1674227412429,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562405,
            "range": "± 1331",
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
          "id": "52feae25df85eecb1dc055c4ab28f1054df27632",
          "message": "Patch meter into ArrowTensor for the time being (#858)\n\n* Patch meter into ArrowTensor for the time being\r\n\r\n* Clarify meter constructions in tensor.py\r\n\r\n* cranky",
          "timestamp": "2023-01-20T17:30:47+01:00",
          "tree_id": "839dcb96cc9f1808761d61e2c0b40d9e3a333f3b",
          "url": "https://github.com/rerun-io/rerun/commit/52feae25df85eecb1dc055c4ab28f1054df27632"
        },
        "date": 1674232526875,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571511,
            "range": "± 2171",
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
          "id": "ff7ea25e4514fc29ad71447e43e8082508ba0ae0",
          "message": "move selection state into dedicated struct (#857)",
          "timestamp": "2023-01-20T17:58:13+01:00",
          "tree_id": "3f5385c28730ac40f284e0c3e3fc656cfd8f2003",
          "url": "https://github.com/rerun-io/rerun/commit/ff7ea25e4514fc29ad71447e43e8082508ba0ae0"
        },
        "date": 1674234022731,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573850,
            "range": "± 2286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e951da60d4542076c890bd976c4df1e3f18f5740",
          "message": "Very minor code cleanup (#863)\n\n* file rename: context -> annotation_context.rs\r\n\r\n* Better variable naming\r\n\r\n* Fix wrong hello_world app id",
          "timestamp": "2023-01-20T18:55:51+01:00",
          "tree_id": "236bdefad323ad38b1c59fae303a35f506c60ea3",
          "url": "https://github.com/rerun-io/rerun/commit/e951da60d4542076c890bd976c4df1e3f18f5740"
        },
        "date": 1674237566768,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 578514,
            "range": "± 2190",
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
          "id": "70600a2684b010954962f11714b8531c07669444",
          "message": "Make arrow the default storage (#823)\n\n* Make Arrow the default and update changelog\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>",
          "timestamp": "2023-01-20T19:52:11+01:00",
          "tree_id": "88b39a2e1a55c645b6cf4fef341876d7192bf236",
          "url": "https://github.com/rerun-io/rerun/commit/70600a2684b010954962f11714b8531c07669444"
        },
        "date": 1674240916095,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560191,
            "range": "± 4432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7343f41232cf65997d4c0d7f5f138c956a665567",
          "message": "Move Viewport/Event Log buttons to the \"View\" menu (#864)\n\n* Move Viewport/Event Log buttons to the \"View\" menu\r\n* Remove extra separator before the memory use\r\n* Remove unnecessary \"(none)\" label",
          "timestamp": "2023-01-20T23:53:20+01:00",
          "tree_id": "871e1ac1c2541458f4273acb797cb07800459f99",
          "url": "https://github.com/rerun-io/rerun/commit/7343f41232cf65997d4c0d7f5f138c956a665567"
        },
        "date": 1674255327843,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 569462,
            "range": "± 3088",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b94edb973db58b7e6253ed3a167bbec36994ac4c",
          "message": "Left-align headers, improve blueprint view (#856)\n\n* Left-align headers\r\n\r\n* Remove background color from small icon buttons\r\n\r\n* Simplify blueprint view\r\n\r\n* Better function name\r\n\r\n* Put blueprint and buttons on same row\r\n\r\n* clippy fix\r\n\r\n* Move selection undo/redo arrows to the right",
          "timestamp": "2023-01-22T17:32:37+01:00",
          "tree_id": "c097ee61905b8f355fea1bfafce0a755cafdb232",
          "url": "https://github.com/rerun-io/rerun/commit/b94edb973db58b7e6253ed3a167bbec36994ac4c"
        },
        "date": 1674405394462,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567444,
            "range": "± 6037",
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
          "id": "bf5e622834c9fffc656fa5679333cf828710fb16",
          "message": "Join threads when client is being dropped (#876)",
          "timestamp": "2023-01-23T15:44:23+01:00",
          "tree_id": "078eb6cb478a8104e8a3a42241965d9133e4584c",
          "url": "https://github.com/rerun-io/rerun/commit/bf5e622834c9fffc656fa5679333cf828710fb16"
        },
        "date": 1674485201956,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573849,
            "range": "± 5199",
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
          "id": "e7cce91b63abf2df4ba405ffbb1bd259f6663e71",
          "message": "simplify hover/select highlight distinction & wire up link buttons to hover state (#859)\n\n* wired up egui link buttons to hover state\r\n* simplify hover/select highlight logic by defining highlight types on a higher level",
          "timestamp": "2023-01-23T16:18:31+01:00",
          "tree_id": "6c3d34436149dd509f8a0da493930601ebd79f69",
          "url": "https://github.com/rerun-io/rerun/commit/e7cce91b63abf2df4ba405ffbb1bd259f6663e71"
        },
        "date": 1674487285415,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564623,
            "range": "± 7170",
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
          "id": "92416c287ea0f0c6e2d5bf227003cfa09352cb83",
          "message": "tweak point cloud point gradient to be less aggressive (#888)",
          "timestamp": "2023-01-23T20:46:29+01:00",
          "tree_id": "ab8fd6f18accb106adebefd9b5a1e54f80ea13ab",
          "url": "https://github.com/rerun-io/rerun/commit/92416c287ea0f0c6e2d5bf227003cfa09352cb83"
        },
        "date": 1674503541186,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562695,
            "range": "± 2070",
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
          "id": "3513a502c0e91a3b767ea0fa568ceb38465a5171",
          "message": "re_viewer: analytics integration (native only) (#839)\n\n* bootstrappin'\r\n\r\n* record 'em\r\n\r\n* dealing with tokio/reqwest shenanigans\r\n\r\n* dead code\r\n\r\n* hashing appid\r\n\r\n* start_method will come later, too painful for my tired mind\r\n\r\n* cleanup\r\n\r\n* some more stuff in 'analytics details'\r\n\r\n* always send update metadata\r\n\r\n* self-review\r\n\r\n* flake\r\n\r\n* add a newline at the end of file\r\n\r\n* hard gate everything web so we can move on before i completely lose it\r\n\r\n* xxx\r\n\r\n* analytics in debug only\r\n\r\n* xxx\r\n\r\n* git hash and cleaned up target triple\r\n\r\n* deterministic hashing\r\n\r\n* safer/less-error-prone way of identifying official examples\r\n\r\n* rebuild when HEAD changes\r\n\r\n* make the app path thing even nicererer for end users\r\n\r\n* happy pylint\r\n\r\n* ??? I did _not_ touch that\r\n\r\n* the linter is just having fun\r\n\r\n* shouldn't need pathlib no more?\r\n\r\n* use a sentinel file for official example detection\r\n\r\n* track git dirtiness\r\n\r\n* .rerun -> .rerun_examples",
          "timestamp": "2023-01-24T09:03:00+01:00",
          "tree_id": "8963ab2e45281af8622d36e33dea5289f76780d9",
          "url": "https://github.com/rerun-io/rerun/commit/3513a502c0e91a3b767ea0fa568ceb38465a5171"
        },
        "date": 1674547565902,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 575676,
            "range": "± 2243",
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
          "id": "08ad9f3876d58bbccd6f824a5dd34a8be399d243",
          "message": "Fix scale for 3D objects under pinhole camera (#886)",
          "timestamp": "2023-01-24T09:53:31+01:00",
          "tree_id": "b73d9ba3c8c17d3c83e75e0a6e5e8d3658d36c85",
          "url": "https://github.com/rerun-io/rerun/commit/08ad9f3876d58bbccd6f824a5dd34a8be399d243"
        },
        "date": 1674550548916,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576989,
            "range": "± 2954",
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
          "id": "1c3ab8c1cdd2c598bbbae2d27176649dc3526572",
          "message": "Tweak selection effects (#890)\n\n* smaller AUTO_LARGE size\r\n* selection highlight now interpolates toward highlight instead of taking over highlight color",
          "timestamp": "2023-01-24T10:55:16+01:00",
          "tree_id": "4410eb825717cc92ff0288f8fce933425682c69d",
          "url": "https://github.com/rerun-io/rerun/commit/1c3ab8c1cdd2c598bbbae2d27176649dc3526572"
        },
        "date": 1674554313818,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562868,
            "range": "± 3675",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efbbd16cd50c00f9f4c88c8ab2922e4ec1d5b23",
          "message": "Add some puffin profiling scopes (#891)",
          "timestamp": "2023-01-24T11:36:40+01:00",
          "tree_id": "a684655ec35d4869dfd9798dc6a95f7df684a274",
          "url": "https://github.com/rerun-io/rerun/commit/8efbbd16cd50c00f9f4c88c8ab2922e4ec1d5b23"
        },
        "date": 1674556871162,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561141,
            "range": "± 7703",
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
          "id": "6824669ba11a7e83a77b6cb036f11528033bce50",
          "message": "selecting/hovering groups causes now select/hover highlight (#893)",
          "timestamp": "2023-01-24T11:47:21+01:00",
          "tree_id": "99159fb6b3c6c0b72ebfd02fbbfa0c0252d8202a",
          "url": "https://github.com/rerun-io/rerun/commit/6824669ba11a7e83a77b6cb036f11528033bce50"
        },
        "date": 1674557396404,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552629,
            "range": "± 7221",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}