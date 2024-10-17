window.BENCHMARK_DATA = {
  "lastUpdate": 1729190480411,
  "repoUrl": "https://github.com/sourcemeta/blaze",
  "entries": {
    "Benchmark (macos/llvm)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a39bf1e160169cf337421e363393d6d35ff41660",
          "message": "Bump JSON Toolkit to the latest version (#1)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T14:49:22-04:00",
          "tree_id": "0e7667765467f6f3cd2728d8254450e70fb67c1f",
          "url": "https://github.com/sourcemeta/blaze/commit/a39bf1e160169cf337421e363393d6d35ff41660"
        },
        "date": 1729018356718,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 3064438416.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2961190000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 842.8003111392679,
            "unit": "ns/iter",
            "extra": "iterations: 923702\ncpu: 815.5238377745198 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1077.8680337994178,
            "unit": "ns/iter",
            "extra": "iterations: 680841\ncpu: 1052.501244784025 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 169.02422002970803,
            "unit": "ns/iter",
            "extra": "iterations: 4331415\ncpu: 165.6368646273793 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 114.90699272685895,
            "unit": "ns/iter",
            "extra": "iterations: 5923569\ncpu: 112.44774898376298 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2674.1394183843036,
            "unit": "ns/iter",
            "extra": "iterations: 263301\ncpu: 2672.2382368468066 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.08613755926843,
            "unit": "ns/iter",
            "extra": "iterations: 28745544\ncpu: 23.076376637714738 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1281.4765491170992,
            "unit": "ns/iter",
            "extra": "iterations: 553412\ncpu: 1280.9227121927252 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1031.696009017858,
            "unit": "ns/iter",
            "extra": "iterations: 735433\ncpu: 1019.6877213831854 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1294.9775676872425,
            "unit": "ns/iter",
            "extra": "iterations: 544527\ncpu: 1294.789790037959 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 211.81333262767282,
            "unit": "ns/iter",
            "extra": "iterations: 3306550\ncpu: 211.79325883473714 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1369.5478201253513,
            "unit": "ns/iter",
            "extra": "iterations: 517805\ncpu: 1368.9728758895735 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.52482979277246,
            "unit": "ns/iter",
            "extra": "iterations: 6233137\ncpu: 104.49986900656907 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 404.5722679811599,
            "unit": "ns/iter",
            "extra": "iterations: 1732510\ncpu: 404.53907913951525 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 365.18062595834573,
            "unit": "ns/iter",
            "extra": "iterations: 1927796\ncpu: 365.1278454774259 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 768.2069354298047,
            "unit": "ns/iter",
            "extra": "iterations: 918876\ncpu: 768.0557550746779 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 169.38070631880555,
            "unit": "ns/iter",
            "extra": "iterations: 4151100\ncpu: 169.18045819180455 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1398.446081098158,
            "unit": "ns/iter",
            "extra": "iterations: 483439\ncpu: 1398.2943039349304 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8beccc8c11a9a796eb1598992658de96efeb40b1",
          "message": "Link to the website from the README (#2)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T19:05:20Z",
          "url": "https://github.com/sourcemeta/blaze/commit/8beccc8c11a9a796eb1598992658de96efeb40b1"
        },
        "date": 1729019192550,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 3954745707.999791,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3952039000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 992.7636017363963,
            "unit": "ns/iter",
            "extra": "iterations: 703072\ncpu: 969.3160871148339 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1087.7794894581666,
            "unit": "ns/iter",
            "extra": "iterations: 609862\ncpu: 1087.273842279073 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 194.42256599007507,
            "unit": "ns/iter",
            "extra": "iterations: 3542313\ncpu: 194.38090309918985 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 130.6729335296102,
            "unit": "ns/iter",
            "extra": "iterations: 5560145\ncpu: 130.61583825601707 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 3137.6806742822855,
            "unit": "ns/iter",
            "extra": "iterations: 183662\ncpu: 3137.5515893325824 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 33.39863495689716,
            "unit": "ns/iter",
            "extra": "iterations: 24246707\ncpu: 33.14359347848754 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1778.3260993785545,
            "unit": "ns/iter",
            "extra": "iterations: 439271\ncpu: 1692.570190155962 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1347.2832576652384,
            "unit": "ns/iter",
            "extra": "iterations: 618271\ncpu: 1236.2992927049806 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1481.1868744058083,
            "unit": "ns/iter",
            "extra": "iterations: 419501\ncpu: 1480.916612832864 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 248.77706316031197,
            "unit": "ns/iter",
            "extra": "iterations: 2814093\ncpu: 248.71850361732868 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1743.4638351648764,
            "unit": "ns/iter",
            "extra": "iterations: 322067\ncpu: 1743.1621370708588 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 153.8513516513382,
            "unit": "ns/iter",
            "extra": "iterations: 4730177\ncpu: 153.75323164439732 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 570.2668727244147,
            "unit": "ns/iter",
            "extra": "iterations: 1007484\ncpu: 553.0400482786838 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 437.2124166368394,
            "unit": "ns/iter",
            "extra": "iterations: 1665604\ncpu: 436.9802185873712 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 927.008006157344,
            "unit": "ns/iter",
            "extra": "iterations: 784771\ncpu: 926.813044824538 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 192.16482457988755,
            "unit": "ns/iter",
            "extra": "iterations: 3855772\ncpu: 191.80854054648378 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1575.6200037359845,
            "unit": "ns/iter",
            "extra": "iterations: 374730\ncpu: 1574.4989725935952 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8beccc8c11a9a796eb1598992658de96efeb40b1",
          "message": "Link to the website from the README (#2)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T15:05:20-04:00",
          "tree_id": "e93a092a42372d9d96622e6b593b64d812f8903f",
          "url": "https://github.com/sourcemeta/blaze/commit/8beccc8c11a9a796eb1598992658de96efeb40b1"
        },
        "date": 1729020188208,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2743149167.0000696,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2742867999.9999995 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 736.245972623849,
            "unit": "ns/iter",
            "extra": "iterations: 951488\ncpu: 736.2058165736199 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 933.3988811590391,
            "unit": "ns/iter",
            "extra": "iterations: 751492\ncpu: 933.2727427570743 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.9247368382772,
            "unit": "ns/iter",
            "extra": "iterations: 4669562\ncpu: 150.89016914220196 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.28591357838374,
            "unit": "ns/iter",
            "extra": "iterations: 6835604\ncpu: 102.28518211411914 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2592.7297511892507,
            "unit": "ns/iter",
            "extra": "iterations: 269522\ncpu: 2592.578713425993 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.38276848150369,
            "unit": "ns/iter",
            "extra": "iterations: 30622780\ncpu: 23.124680384994512 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1257.7279598621353,
            "unit": "ns/iter",
            "extra": "iterations: 551698\ncpu: 1254.7661945484633 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 993.8030907717068,
            "unit": "ns/iter",
            "extra": "iterations: 725644\ncpu: 972.4892647083146 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1359.771069525597,
            "unit": "ns/iter",
            "extra": "iterations: 527907\ncpu: 1320.1813955867217 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 228.40501796093955,
            "unit": "ns/iter",
            "extra": "iterations: 3243429\ncpu: 218.2730067468724 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1421.4447791243256,
            "unit": "ns/iter",
            "extra": "iterations: 513592\ncpu: 1382.6870356236104 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 113.86918634638319,
            "unit": "ns/iter",
            "extra": "iterations: 6591896\ncpu: 112.19670334604801 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 410.28651394297077,
            "unit": "ns/iter",
            "extra": "iterations: 1675182\ncpu: 406.7337160977144 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 365.304529472791,
            "unit": "ns/iter",
            "extra": "iterations: 1902164\ncpu: 365.12361710136577 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 758.2504161294779,
            "unit": "ns/iter",
            "extra": "iterations: 916782\ncpu: 758.163881926131 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 168.579710967086,
            "unit": "ns/iter",
            "extra": "iterations: 4160080\ncpu: 168.40926136035864 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1391.5955858186023,
            "unit": "ns/iter",
            "extra": "iterations: 505054\ncpu: 1391.1304533772623 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8963cd8de155de7581bf4679a1beb680c3f4bb68",
          "message": "Simplify interface member names (#4)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T15:39:31-04:00",
          "tree_id": "fdf4abe919a1322e9776ac6a7fc3eeccdfc9af83",
          "url": "https://github.com/sourcemeta/blaze/commit/8963cd8de155de7581bf4679a1beb680c3f4bb68"
        },
        "date": 1729021401156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 3250516542.000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3248612000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 802.7597832738912,
            "unit": "ns/iter",
            "extra": "iterations: 877237\ncpu: 802.5288491023521 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1041.7279214717737,
            "unit": "ns/iter",
            "extra": "iterations: 695189\ncpu: 1041.4649829039292 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 165.8791073040457,
            "unit": "ns/iter",
            "extra": "iterations: 4185927\ncpu: 165.85740745120495 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 113.65401652230801,
            "unit": "ns/iter",
            "extra": "iterations: 6366067\ncpu: 113.63986587008903 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2804.727929163468,
            "unit": "ns/iter",
            "extra": "iterations: 243602\ncpu: 2803.9835469331147 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 25.137024492327033,
            "unit": "ns/iter",
            "extra": "iterations: 28693228\ncpu: 25.131191234391675 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1384.6903507444524,
            "unit": "ns/iter",
            "extra": "iterations: 515874\ncpu: 1382.45579346895 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1040.5580011319216,
            "unit": "ns/iter",
            "extra": "iterations: 690771\ncpu: 1040.473615713456 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1382.1270513802576,
            "unit": "ns/iter",
            "extra": "iterations: 504843\ncpu: 1381.7543275830335 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 227.1656453416917,
            "unit": "ns/iter",
            "extra": "iterations: 3057303\ncpu: 227.15085812560991 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1439.5013317745766,
            "unit": "ns/iter",
            "extra": "iterations: 482439\ncpu: 1439.42342969785 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 118.23318631186618,
            "unit": "ns/iter",
            "extra": "iterations: 6207710\ncpu: 117.56557571149426 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 441.8648937622255,
            "unit": "ns/iter",
            "extra": "iterations: 1612420\ncpu: 441.82595105493556 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 401.8081781526711,
            "unit": "ns/iter",
            "extra": "iterations: 1762354\ncpu: 401.7904461873146 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 849.8403985152685,
            "unit": "ns/iter",
            "extra": "iterations: 716259\ncpu: 849.8057266994261 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 187.18995123957833,
            "unit": "ns/iter",
            "extra": "iterations: 3768425\ncpu: 187.19066984217477 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1520.0479935044532,
            "unit": "ns/iter",
            "extra": "iterations: 461875\ncpu: 1519.4479025710432 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa62a0844fb95a702554956958477bb116102c44",
          "message": "Fix WebAssembly setup (#3)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T15:51:38-04:00",
          "tree_id": "dbb59de567f9564c904a8673550008ecd22eef41",
          "url": "https://github.com/sourcemeta/blaze/commit/aa62a0844fb95a702554956958477bb116102c44"
        },
        "date": 1729022102085,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2805363124.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2804808000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 740.4579920514761,
            "unit": "ns/iter",
            "extra": "iterations: 945333\ncpu: 740.2174683418436 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 934.1125049153409,
            "unit": "ns/iter",
            "extra": "iterations: 742572\ncpu: 934.0494928437914 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 150.73411344970202,
            "unit": "ns/iter",
            "extra": "iterations: 4641017\ncpu: 150.7331259506268 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.37912677290176,
            "unit": "ns/iter",
            "extra": "iterations: 6841817\ncpu: 102.36213567243908 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2783.612407972784,
            "unit": "ns/iter",
            "extra": "iterations: 267312\ncpu: 2760.7926318309705 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.939205707436674,
            "unit": "ns/iter",
            "extra": "iterations: 29908778\ncpu: 24.910446023572092 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1393.2675290338777,
            "unit": "ns/iter",
            "extra": "iterations: 510610\ncpu: 1393.1356612678958 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 964.4656131153803,
            "unit": "ns/iter",
            "extra": "iterations: 732823\ncpu: 964.432066133294 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1285.2057829093585,
            "unit": "ns/iter",
            "extra": "iterations: 544501\ncpu: 1284.5596243165758 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 211.80456953817495,
            "unit": "ns/iter",
            "extra": "iterations: 3296088\ncpu: 211.78591105577323 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1335.1850308971132,
            "unit": "ns/iter",
            "extra": "iterations: 519951\ncpu: 1335.0546493804218 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.47389096835649,
            "unit": "ns/iter",
            "extra": "iterations: 6646474\ncpu: 104.46411134685836 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.5983736046989,
            "unit": "ns/iter",
            "extra": "iterations: 1733158\ncpu: 403.5939019985489 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 364.0917004363088,
            "unit": "ns/iter",
            "extra": "iterations: 1923077\ncpu: 364.0701854371942 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 766.1319482316414,
            "unit": "ns/iter",
            "extra": "iterations: 922339\ncpu: 764.5811355694608 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 170.02339671956085,
            "unit": "ns/iter",
            "extra": "iterations: 4018854\ncpu: 170.02011021052243 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1389.5561953774363,
            "unit": "ns/iter",
            "extra": "iterations: 504828\ncpu: 1389.3524130991168 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9bdcbbf93d8cd96f6c31f23d9769dab6bedbc7f",
          "message": "Move benchmark validate helper into `contrib/` (#5)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T16:15:51-04:00",
          "tree_id": "bb95dee17a27294badae7557697d4422b3c04c3b",
          "url": "https://github.com/sourcemeta/blaze/commit/d9bdcbbf93d8cd96f6c31f23d9769dab6bedbc7f"
        },
        "date": 1729023540546,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2750456167.0000386,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2750072000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 742.3085831434876,
            "unit": "ns/iter",
            "extra": "iterations: 951656\ncpu: 742.2240809704349 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 931.8611685320811,
            "unit": "ns/iter",
            "extra": "iterations: 752243\ncpu: 931.7295076192145 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.18707391652714,
            "unit": "ns/iter",
            "extra": "iterations: 4643603\ncpu: 151.15504060101603 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.3347545029653,
            "unit": "ns/iter",
            "extra": "iterations: 6842486\ncpu: 102.32728280335532 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2612.056942227598,
            "unit": "ns/iter",
            "extra": "iterations: 265023\ncpu: 2611.686532866965 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.66938813503674,
            "unit": "ns/iter",
            "extra": "iterations: 30789261\ncpu: 22.665565113758383 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1250.8398337583235,
            "unit": "ns/iter",
            "extra": "iterations: 557502\ncpu: 1250.686096193377 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 960.4698424308191,
            "unit": "ns/iter",
            "extra": "iterations: 735487\ncpu: 960.3731949035121 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1277.8945334410262,
            "unit": "ns/iter",
            "extra": "iterations: 550895\ncpu: 1277.8224525544767 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 211.35978919775718,
            "unit": "ns/iter",
            "extra": "iterations: 3308504\ncpu: 211.35534368403316 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1343.971561345312,
            "unit": "ns/iter",
            "extra": "iterations: 525060\ncpu: 1343.9111720565265 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 106.96271493371455,
            "unit": "ns/iter",
            "extra": "iterations: 6680664\ncpu: 106.93981915570055 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 408.5777321624906,
            "unit": "ns/iter",
            "extra": "iterations: 1631519\ncpu: 408.57139880074925 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 366.76789040901394,
            "unit": "ns/iter",
            "extra": "iterations: 1907237\ncpu: 366.75095963428026 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 764.9943602485355,
            "unit": "ns/iter",
            "extra": "iterations: 911565\ncpu: 763.767805916196 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 169.97121415974667,
            "unit": "ns/iter",
            "extra": "iterations: 4153292\ncpu: 169.95963683747703 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1416.5096311104853,
            "unit": "ns/iter",
            "extra": "iterations: 500150\ncpu: 1413.849845046485 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f77ec3bb8fb7002152d0cfa3d289d04b7cf9f62",
          "message": "Remove performance `unordered_map` related TODO (#7)\n\nWe tried and it didn't work better.\r\n\r\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-15T16:33:20-04:00",
          "tree_id": "c606c45d7d5e2b26d4df62077c8dd5c137e14752",
          "url": "https://github.com/sourcemeta/blaze/commit/4f77ec3bb8fb7002152d0cfa3d289d04b7cf9f62"
        },
        "date": 1729024628059,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 3163738666.9999614,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3163043000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 801.2428906241029,
            "unit": "ns/iter",
            "extra": "iterations: 836290\ncpu: 801.1096629159737 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 999.8623581654874,
            "unit": "ns/iter",
            "extra": "iterations: 701698\ncpu: 999.7862328238073 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 169.96388180672056,
            "unit": "ns/iter",
            "extra": "iterations: 4248939\ncpu: 169.9365418049069 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 110.31964797964181,
            "unit": "ns/iter",
            "extra": "iterations: 6085898\ncpu: 110.30007404001836 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2787.8820072063754,
            "unit": "ns/iter",
            "extra": "iterations: 250617\ncpu: 2787.0216306156417 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.71761868545152,
            "unit": "ns/iter",
            "extra": "iterations: 28596407\ncpu: 24.709922473826907 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1482.7700051550128,
            "unit": "ns/iter",
            "extra": "iterations: 506307\ncpu: 1482.2410118761916 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 1023.2408921488066,
            "unit": "ns/iter",
            "extra": "iterations: 684684\ncpu: 1023.1566678935114 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1475.0326236666197,
            "unit": "ns/iter",
            "extra": "iterations: 511132\ncpu: 1468.258688557947 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 249.66653487845633,
            "unit": "ns/iter",
            "extra": "iterations: 2951706\ncpu: 249.55872976509207 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1496.442711171967,
            "unit": "ns/iter",
            "extra": "iterations: 451362\ncpu: 1496.3111648743104 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 114.96406160220926,
            "unit": "ns/iter",
            "extra": "iterations: 5821545\ncpu: 114.4833545046888 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 460.86080873905536,
            "unit": "ns/iter",
            "extra": "iterations: 1379555\ncpu: 460.72247935022455 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 393.12391660572314,
            "unit": "ns/iter",
            "extra": "iterations: 1789284\ncpu: 393.0717538411984 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 814.28435694081,
            "unit": "ns/iter",
            "extra": "iterations: 850505\ncpu: 814.2480055966753 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 179.68353135398718,
            "unit": "ns/iter",
            "extra": "iterations: 3859109\ncpu: 179.50697946080234 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1494.565802651331,
            "unit": "ns/iter",
            "extra": "iterations: 464305\ncpu: 1494.2634690559019 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43cac42dc486be24addbc2cd0aa646d18e2000f5",
          "message": "Add a top-level `vendorpull` mask file (#10)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-16T09:38:36-04:00",
          "tree_id": "f25e688eff97c36df7d04edf295bb28830b442b8",
          "url": "https://github.com/sourcemeta/blaze/commit/43cac42dc486be24addbc2cd0aa646d18e2000f5"
        },
        "date": 1729086120566,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 3194156332.99991,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3193181000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 782.385217059703,
            "unit": "ns/iter",
            "extra": "iterations: 883559\ncpu: 782.2759996785729 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 975.366137919458,
            "unit": "ns/iter",
            "extra": "iterations: 721769\ncpu: 975.1762683074506 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 157.76939977231203,
            "unit": "ns/iter",
            "extra": "iterations: 4495594\ncpu: 157.74489422309938 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 107.32004159336641,
            "unit": "ns/iter",
            "extra": "iterations: 6218298\ncpu: 107.31376978073442 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2756.414754979021,
            "unit": "ns/iter",
            "extra": "iterations: 255141\ncpu: 2756.2053923124827 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.948261807909642,
            "unit": "ns/iter",
            "extra": "iterations: 29578923\ncpu: 23.941845347107513 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1330.2715660013303,
            "unit": "ns/iter",
            "extra": "iterations: 523799\ncpu: 1329.7028058472827 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 998.0105855490839,
            "unit": "ns/iter",
            "extra": "iterations: 689336\ncpu: 997.8776677846504 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1353.4665997730349,
            "unit": "ns/iter",
            "extra": "iterations: 507272\ncpu: 1353.2660978725428 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 223.07678564528416,
            "unit": "ns/iter",
            "extra": "iterations: 3132187\ncpu: 223.04798532143872 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1416.046299215055,
            "unit": "ns/iter",
            "extra": "iterations: 494868\ncpu: 1415.864432535545 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 110.68154072720435,
            "unit": "ns/iter",
            "extra": "iterations: 6353701\ncpu: 110.67769792755462 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 425.074544585951,
            "unit": "ns/iter",
            "extra": "iterations: 1672489\ncpu: 425.05630829260895 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 389.5722003569921,
            "unit": "ns/iter",
            "extra": "iterations: 1803980\ncpu: 389.5575338972709 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 807.9081884065042,
            "unit": "ns/iter",
            "extra": "iterations: 886424\ncpu: 807.8662130086718 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 179.77474529140244,
            "unit": "ns/iter",
            "extra": "iterations: 4012036\ncpu: 179.77356135388675 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1560.9252374463588,
            "unit": "ns/iter",
            "extra": "iterations: 476950\ncpu: 1552.3367229269281 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "43cac42dc486be24addbc2cd0aa646d18e2000f5",
          "message": "Add a top-level `vendorpull` mask file (#10)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-16T13:38:36Z",
          "url": "https://github.com/sourcemeta/blaze/commit/43cac42dc486be24addbc2cd0aa646d18e2000f5"
        },
        "date": 1729105484117,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2839266250.000037,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2829204000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 737.605867506464,
            "unit": "ns/iter",
            "extra": "iterations: 951307\ncpu: 737.5242692422108 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 933.1028575471629,
            "unit": "ns/iter",
            "extra": "iterations: 749104\ncpu: 933.082722826203 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.82502265472615,
            "unit": "ns/iter",
            "extra": "iterations: 4646933\ncpu: 151.76375471735858 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.49484971060625,
            "unit": "ns/iter",
            "extra": "iterations: 6844761\ncpu: 102.49152600068871 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2602.693786552985,
            "unit": "ns/iter",
            "extra": "iterations: 265537\ncpu: 2602.4923080399276 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.868245070601315,
            "unit": "ns/iter",
            "extra": "iterations: 30811758\ncpu: 22.866108451195792 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1258.7873256785897,
            "unit": "ns/iter",
            "extra": "iterations: 556085\ncpu: 1258.6151397718006 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 980.284582409077,
            "unit": "ns/iter",
            "extra": "iterations: 742509\ncpu: 979.5935133446189 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1285.6025587259812,
            "unit": "ns/iter",
            "extra": "iterations: 531749\ncpu: 1285.0724684014428 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.02978192506535,
            "unit": "ns/iter",
            "extra": "iterations: 3263053\ncpu: 212.00421813559282 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1349.9486149693623,
            "unit": "ns/iter",
            "extra": "iterations: 520891\ncpu: 1349.6451272915065 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.18261477058257,
            "unit": "ns/iter",
            "extra": "iterations: 6687493\ncpu: 105.18141850765305 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.46791459955523,
            "unit": "ns/iter",
            "extra": "iterations: 1726268\ncpu: 403.4611080087215 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 383.7527121673974,
            "unit": "ns/iter",
            "extra": "iterations: 1914797\ncpu: 383.687148037101 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 771.7129690663697,
            "unit": "ns/iter",
            "extra": "iterations: 854117\ncpu: 769.9483794374739 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 170.2876598559202,
            "unit": "ns/iter",
            "extra": "iterations: 4139587\ncpu: 170.27858093089935 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1436.0519579038819,
            "unit": "ns/iter",
            "extra": "iterations: 498288\ncpu: 1436.022942555309 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9de9e573e83ee8ba48407b12b97effdbcf4e8b6b",
          "message": "Add a simple `unevaluatedProperties` benchmark case (#12)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-16T17:52:47-04:00",
          "tree_id": "c6d76de3f03bd60b3362f6dc044e912601e87578",
          "url": "https://github.com/sourcemeta/blaze/commit/9de9e573e83ee8ba48407b12b97effdbcf4e8b6b"
        },
        "date": 1729115760805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2752638791.9999704,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2752164000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 734.6277872759504,
            "unit": "ns/iter",
            "extra": "iterations: 937609\ncpu: 734.6047232908388 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 931.9126812900553,
            "unit": "ns/iter",
            "extra": "iterations: 737906\ncpu: 931.736562651612 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.48049640886651,
            "unit": "ns/iter",
            "extra": "iterations: 4606203\ncpu: 151.47465276714914 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.55680045168975,
            "unit": "ns/iter",
            "extra": "iterations: 6630986\ncpu: 102.55186785193015 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2620.9787623799725,
            "unit": "ns/iter",
            "extra": "iterations: 265849\ncpu: 2620.8373926552263 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 22.89221331346582,
            "unit": "ns/iter",
            "extra": "iterations: 30696908\ncpu: 22.888950248669982 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1264.554715066305,
            "unit": "ns/iter",
            "extra": "iterations: 559727\ncpu: 1264.5235981112235 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 951.6507166669533,
            "unit": "ns/iter",
            "extra": "iterations: 724953\ncpu: 951.6299677358378 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1282.6147786097583,
            "unit": "ns/iter",
            "extra": "iterations: 550769\ncpu: 1282.3815428972946 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 268.7054056024623,
            "unit": "ns/iter",
            "extra": "iterations: 3304849\ncpu: 268.64949049109396 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1360.078486749053,
            "unit": "ns/iter",
            "extra": "iterations: 517667\ncpu: 1360.0654474787834 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.97332426758908,
            "unit": "ns/iter",
            "extra": "iterations: 6653613\ncpu: 104.9638745144932 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 405.1810795473159,
            "unit": "ns/iter",
            "extra": "iterations: 1732189\ncpu: 405.17345393603193 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 369.32735610041146,
            "unit": "ns/iter",
            "extra": "iterations: 1910360\ncpu: 369.2916518352569 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 768.6834160768362,
            "unit": "ns/iter",
            "extra": "iterations: 906818\ncpu: 768.5853170095883 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 168.06001452781405,
            "unit": "ns/iter",
            "extra": "iterations: 4156177\ncpu: 168.041447705428 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 827.3872172837451,
            "unit": "ns/iter",
            "extra": "iterations: 849350\ncpu: 827.2408312238771 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1400.7237727133736,
            "unit": "ns/iter",
            "extra": "iterations: 464154\ncpu: 1395.8276778827708 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6933f66b0aa0fbae21ecf57cdfdef69eda083588",
          "message": "Decouple `unevaluatedProperties` from annotations (#13)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T09:07:57-04:00",
          "tree_id": "b4b5102fb37f7b3b2e15e54809299bf0815b273a",
          "url": "https://github.com/sourcemeta/blaze/commit/6933f66b0aa0fbae21ecf57cdfdef69eda083588"
        },
        "date": 1729170733294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2865123583.0000134,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2864832000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 739.5054679987828,
            "unit": "ns/iter",
            "extra": "iterations: 950622\ncpu: 739.416929126404 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 951.5282234955187,
            "unit": "ns/iter",
            "extra": "iterations: 755523\ncpu: 951.5037927369505 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 152.7109477674703,
            "unit": "ns/iter",
            "extra": "iterations: 4600390\ncpu: 152.65944843806702 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.17338072870635,
            "unit": "ns/iter",
            "extra": "iterations: 6685322\ncpu: 104.8458099699611 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2598.576459348807,
            "unit": "ns/iter",
            "extra": "iterations: 264827\ncpu: 2597.5032757234007 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.826323435460836,
            "unit": "ns/iter",
            "extra": "iterations: 29252352\ncpu: 23.825571359185062 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1261.515686232746,
            "unit": "ns/iter",
            "extra": "iterations: 564954\ncpu: 1261.46907535835 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 972.8168885337268,
            "unit": "ns/iter",
            "extra": "iterations: 748271\ncpu: 967.4061937453162 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1278.1140241821802,
            "unit": "ns/iter",
            "extra": "iterations: 545358\ncpu: 1278.0063737948274 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.87257836837003,
            "unit": "ns/iter",
            "extra": "iterations: 3293389\ncpu: 212.84184771370795 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1331.812284270092,
            "unit": "ns/iter",
            "extra": "iterations: 527569\ncpu: 1331.5319891805618 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.33308913322281,
            "unit": "ns/iter",
            "extra": "iterations: 6631174\ncpu: 105.3267490794239 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 405.4706957181513,
            "unit": "ns/iter",
            "extra": "iterations: 1719015\ncpu: 405.42054606853293 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 366.9002672500855,
            "unit": "ns/iter",
            "extra": "iterations: 1937137\ncpu: 365.9178468017502 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 762.1229882559816,
            "unit": "ns/iter",
            "extra": "iterations: 869457\ncpu: 762.0790907428384 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 168.82261826172558,
            "unit": "ns/iter",
            "extra": "iterations: 4105090\ncpu: 168.79532482844488 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 621.51869356072,
            "unit": "ns/iter",
            "extra": "iterations: 1125655\ncpu: 621.5065894967839 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1406.9172687854318,
            "unit": "ns/iter",
            "extra": "iterations: 502531\ncpu: 1406.5719328757805 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2c5d132cee4e51da2fd309ed6725b31787e1c66",
          "message": "Update README Bowtie badges (#15)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T13:54:58-04:00",
          "tree_id": "6fcd1c4d30bb630dc2a2e5d4bab7afe05e87b20c",
          "url": "https://github.com/sourcemeta/blaze/commit/e2c5d132cee4e51da2fd309ed6725b31787e1c66"
        },
        "date": 1729187908291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2782097958.0000086,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2781111000 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 737.5245644693231,
            "unit": "ns/iter",
            "extra": "iterations: 949359\ncpu: 737.3870158707088 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 960.3912666288762,
            "unit": "ns/iter",
            "extra": "iterations: 727348\ncpu: 960.3119827097897 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 159.0639706248393,
            "unit": "ns/iter",
            "extra": "iterations: 4520825\ncpu: 159.06123329259577 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 105.20018918241901,
            "unit": "ns/iter",
            "extra": "iterations: 6441402\ncpu: 105.1977504276242 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2641.3446032389497,
            "unit": "ns/iter",
            "extra": "iterations: 264983\ncpu: 2641.3241604178365 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 23.805220758641152,
            "unit": "ns/iter",
            "extra": "iterations: 29502877\ncpu: 23.80439033115315 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1251.0334207381227,
            "unit": "ns/iter",
            "extra": "iterations: 563662\ncpu: 1250.916329289537 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 936.7980837233099,
            "unit": "ns/iter",
            "extra": "iterations: 750831\ncpu: 936.7154526118393 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1280.7097371719533,
            "unit": "ns/iter",
            "extra": "iterations: 542560\ncpu: 1280.525656148627 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.75837550625485,
            "unit": "ns/iter",
            "extra": "iterations: 3292398\ncpu: 212.74949140413736 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1337.0305798878787,
            "unit": "ns/iter",
            "extra": "iterations: 520342\ncpu: 1336.8880467077386 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.40482524585877,
            "unit": "ns/iter",
            "extra": "iterations: 6639413\ncpu: 105.35584998252101 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 406.2940950532586,
            "unit": "ns/iter",
            "extra": "iterations: 1731345\ncpu: 406.27777825909936 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 360.7304924961144,
            "unit": "ns/iter",
            "extra": "iterations: 1944239\ncpu: 360.1763980662864 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 761.9802532371893,
            "unit": "ns/iter",
            "extra": "iterations: 921113\ncpu: 761.9390889065722 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 168.85581718232237,
            "unit": "ns/iter",
            "extra": "iterations: 4147214\ncpu: 168.85118539819797 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 638.0342869681496,
            "unit": "ns/iter",
            "extra": "iterations: 1121184\ncpu: 637.8569440876813 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1386.9484124289265,
            "unit": "ns/iter",
            "extra": "iterations: 500450\ncpu: 1386.9277650114839 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3360d0630a5ba5689c52c14beaa5836fbb88c1e",
          "message": "Decouple `unevaluatedItems` from annotations (#14)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T14:05:42-04:00",
          "tree_id": "ba4ccf11d811ddbbadf8dd31dffc5ee74276ffef",
          "url": "https://github.com/sourcemeta/blaze/commit/e3360d0630a5ba5689c52c14beaa5836fbb88c1e"
        },
        "date": 1729188542158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2815484832.999914,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2814896999.9999995 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 756.4205350741106,
            "unit": "ns/iter",
            "extra": "iterations: 952653\ncpu: 754.072049319112 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 1009.1510170891206,
            "unit": "ns/iter",
            "extra": "iterations: 705887\ncpu: 992.5497990471576 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 151.88938696399387,
            "unit": "ns/iter",
            "extra": "iterations: 4624247\ncpu: 151.88051157301942 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 103.1405234913577,
            "unit": "ns/iter",
            "extra": "iterations: 6768975\ncpu: 103.13762423409759 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2633.9392893587074,
            "unit": "ns/iter",
            "extra": "iterations: 266576\ncpu: 2633.586669467619 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 24.955717127314145,
            "unit": "ns/iter",
            "extra": "iterations: 29131466\ncpu: 24.952949501408522 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1289.3210804520982,
            "unit": "ns/iter",
            "extra": "iterations: 515525\ncpu: 1288.9345812521233 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 978.6245835146709,
            "unit": "ns/iter",
            "extra": "iterations: 740122\ncpu: 978.5967718835537 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1318.4988215594003,
            "unit": "ns/iter",
            "extra": "iterations: 509996\ncpu: 1318.478968462497 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 212.5350745934184,
            "unit": "ns/iter",
            "extra": "iterations: 3236545\ncpu: 212.5028386751923 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1364.8486765140055,
            "unit": "ns/iter",
            "extra": "iterations: 525695\ncpu: 1364.4775012126815 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 105.42014398324079,
            "unit": "ns/iter",
            "extra": "iterations: 6628411\ncpu: 105.41063310648666 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 404.55919232212926,
            "unit": "ns/iter",
            "extra": "iterations: 1718804\ncpu: 404.4684559728742 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 366.26748914643633,
            "unit": "ns/iter",
            "extra": "iterations: 1906754\ncpu: 366.2465110863823 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 761.0244981216248,
            "unit": "ns/iter",
            "extra": "iterations: 920193\ncpu: 760.922980287829 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 171.6436774892693,
            "unit": "ns/iter",
            "extra": "iterations: 4158696\ncpu: 170.16223354628482 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 627.3365086005631,
            "unit": "ns/iter",
            "extra": "iterations: 1128304\ncpu: 627.274209787433 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1394.0752259076903,
            "unit": "ns/iter",
            "extra": "iterations: 504188\ncpu: 1394.067292359205 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e9f8ce5992b3a5fe1bc73ad1e5aaa8515b23c89",
          "message": "Don't store annotations in the `EvaluationContext` (#16)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T14:22:17-04:00",
          "tree_id": "ab47a6d0848c62be8fcb5718cdb1aa3c375bccc8",
          "url": "https://github.com/sourcemeta/blaze/commit/9e9f8ce5992b3a5fe1bc73ad1e5aaa8515b23c89"
        },
        "date": 1729189525225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2758407874.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2748027000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 740.4889171131022,
            "unit": "ns/iter",
            "extra": "iterations: 954264\ncpu: 739.3802972762262 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 938.6630234444265,
            "unit": "ns/iter",
            "extra": "iterations: 744396\ncpu: 938.6334692824787 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.27442055012463,
            "unit": "ns/iter",
            "extra": "iterations: 4685910\ncpu: 149.22821821161745 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 102.18730094868049,
            "unit": "ns/iter",
            "extra": "iterations: 6855016\ncpu: 102.18604887282522 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2619.252911002569,
            "unit": "ns/iter",
            "extra": "iterations: 268636\ncpu: 2619.183579267115 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 21.21912219293596,
            "unit": "ns/iter",
            "extra": "iterations: 33021516\ncpu: 21.217499523643944 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1251.4511608108955,
            "unit": "ns/iter",
            "extra": "iterations: 563830\ncpu: 1251.3151127112787 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 944.1271918818093,
            "unit": "ns/iter",
            "extra": "iterations: 741258\ncpu: 944.1139252460017 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1275.8614713892257,
            "unit": "ns/iter",
            "extra": "iterations: 550038\ncpu: 1275.5464167930181 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 210.82130574462815,
            "unit": "ns/iter",
            "extra": "iterations: 3320006\ncpu: 210.80624553088103 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1327.1941652100352,
            "unit": "ns/iter",
            "extra": "iterations: 525743\ncpu: 1327.1921832530325 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.0283859862718,
            "unit": "ns/iter",
            "extra": "iterations: 6714757\ncpu: 104.01567770806892 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 403.7975288265123,
            "unit": "ns/iter",
            "extra": "iterations: 1738850\ncpu: 403.7467291600769 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 367.331739095668,
            "unit": "ns/iter",
            "extra": "iterations: 1876550\ncpu: 367.2915723002313 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 758.9316175645234,
            "unit": "ns/iter",
            "extra": "iterations: 926232\ncpu: 757.9807218925733 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 166.54794209817354,
            "unit": "ns/iter",
            "extra": "iterations: 4223355\ncpu: 166.53466260828245 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 620.4224501391341,
            "unit": "ns/iter",
            "extra": "iterations: 1129944\ncpu: 620.2802970766693 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1385.667870028998,
            "unit": "ns/iter",
            "extra": "iterations: 504697\ncpu: 1385.625434666743 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03841f2a611ba1e4ada437535b5130ffdfc55e38",
          "message": "Simplify non-pure-annotation instructions (#17)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2024-10-17T14:38:00-04:00",
          "tree_id": "169832bebb0f58b0892167c9107da003036403ac",
          "url": "https://github.com/sourcemeta/blaze/commit/03841f2a611ba1e4ada437535b5130ffdfc55e38"
        },
        "date": 1729190478652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Compiler_Draft6_AdaptiveCard",
            "value": 2839408292.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2835638000.0000005 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Meta_1_No_Callback",
            "value": 743.5469590861595,
            "unit": "ns/iter",
            "extra": "iterations: 952148\ncpu: 743.5188647143088 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Required_Properties",
            "value": 923.5978188797426,
            "unit": "ns/iter",
            "extra": "iterations: 745030\ncpu: 923.574889601761 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Many_Optional_Properties_Minimal_Match",
            "value": 149.4064550628632,
            "unit": "ns/iter",
            "extra": "iterations: 4611543\ncpu: 149.40378957758807 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Few_Optional_Properties_Minimal_Match",
            "value": 101.3915693257818,
            "unit": "ns/iter",
            "extra": "iterations: 6916244\ncpu: 101.37785769270151 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Items_Schema",
            "value": 2610.7580294881486,
            "unit": "ns/iter",
            "extra": "iterations: 270752\ncpu: 2610.6621557735493 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Object",
            "value": 21.71149052074103,
            "unit": "ns/iter",
            "extra": "iterations: 33070033\ncpu: 21.707689254498177 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Optional",
            "value": 1261.668232284767,
            "unit": "ns/iter",
            "extra": "iterations: 555904\ncpu: 1261.4606119042153 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Closed",
            "value": 959.7799140351937,
            "unit": "ns/iter",
            "extra": "iterations: 747049\ncpu: 959.6639577859008 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Properties_Triad_Required",
            "value": 1290.1197895142004,
            "unit": "ns/iter",
            "extra": "iterations: 551676\ncpu: 1289.958236356122 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Non_Recursive_Ref",
            "value": 214.04803281972937,
            "unit": "ns/iter",
            "extra": "iterations: 3089117\ncpu: 214.04045233638033 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Pattern_Properties_True",
            "value": 1344.5487921371168,
            "unit": "ns/iter",
            "extra": "iterations: 521334\ncpu: 1344.5104290147967 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Ref_To_Single_Property",
            "value": 104.69173028271494,
            "unit": "ns/iter",
            "extra": "iterations: 6700616\ncpu: 104.68171881510602 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Additional_Properties_Type",
            "value": 407.8956475719329,
            "unit": "ns/iter",
            "extra": "iterations: 1717593\ncpu: 407.8504046069122 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft4_Nested_Oneof",
            "value": 364.4388417480949,
            "unit": "ns/iter",
            "extra": "iterations: 1908704\ncpu: 363.6823729609212 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft6_Property_Names",
            "value": 765.1850988491556,
            "unit": "ns/iter",
            "extra": "iterations: 925754\ncpu: 765.0704182752646 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_Draft7_If_Then_Else",
            "value": 166.7528249871194,
            "unit": "ns/iter",
            "extra": "iterations: 4236391\ncpu: 166.74995296704182 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2019_09_Unevaluated_Properties",
            "value": 626.7118433538344,
            "unit": "ns/iter",
            "extra": "iterations: 1125492\ncpu: 626.6379503363842 ns\nthreads: 1"
          },
          {
            "name": "Evaluator_2020_12_Dynamic_Ref",
            "value": 1415.1006504835768,
            "unit": "ns/iter",
            "extra": "iterations: 492864\ncpu: 1415.073935203219 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}