'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e95589c8e19513877f6ca442335b233f",
"assets/AssetManifest.bin.json": "578bf88da299abe3dfc3d8c1cf0cbae8",
"assets/AssetManifest.json": "fe02be117ad5dd5835719c6327a44ec2",
"assets/assets/fonts/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/Roboto-Regular.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/icons/archive.png": "6a64c7ab6c908bf80c4df684d5362164",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/drawer.png": "81f01977a7bc74d4b02ecf5e1f20bdd6",
"assets/assets/icons/error.png": "bd76463fb7e393e464305d22a7f7a0b8",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Game%2520Icon.svg": "116bd2707a410cf3a2e8559962e1c2a3",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/logo.png": "baa5c5e60dc50d8a9b2b53b796127332",
"assets/assets/icons/logo1.png": "47c95c127b43cf9301f58718de2e205c",
"assets/assets/icons/logom.png": "f55328ff3b10218b6b2938c25a149c94",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/images/cargo.png": "38e0eeeedd30749ea19705e5b7be318e",
"assets/assets/images/doma.png": "71fa6c4a69fe67ded478d05848224f8c",
"assets/assets/images/domaa.png": "4560ac341f60cdef274cde9e9b1ef388",
"assets/assets/images/fedex-express.png": "5c65ce272dc58c3dd0b416f0549f23e4",
"assets/assets/images/gb.png": "876b0eb0c91a93f337b09320a40b52b8",
"assets/assets/images/Image%2520Banner%25202.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/images/Image%2520Banner%25203.png": "ac22df8189dc403ff2e113489fb114b4",
"assets/assets/images/instruction/1.jpg": "c0453e52441785c6e73d45caf597fb8d",
"assets/assets/images/instruction/2.jpg": "403b6c2b173bacc39a59dba85e527b97",
"assets/assets/images/instruction/3.jpg": "3cf5e06bdf46970c6d3f695a93e66fda",
"assets/assets/images/instruction/4.jpg": "2d475170730109da4f7783f80f49e3ab",
"assets/assets/images/instruction/main.jpg": "1668c2c35c03ff9b25c42d8dffb8f7de",
"assets/assets/images/ru.png": "fd01a9f79863f315d3717824c81bd49a",
"assets/assets/images/shops/adidas.svg": "f9e5102dc6ce273fcd330fa942a10af5",
"assets/assets/images/shops/bershka.svg": "974547c0e2b22df573eb7edac6dc5444",
"assets/assets/images/shops/boyner.svg": "304a4e2ef94d051b80649e2a53e3906b",
"assets/assets/images/shops/calvin_klein.svg": "f63cdfab6c0361f2f792af5317ed67f9",
"assets/assets/images/shops/columbia.svg": "6453783a6a1da85f5f017ae8be8f1092",
"assets/assets/images/shops/defacto.svg": "b5bfd755c3a061cff31e7fa5d39f0256",
"assets/assets/images/shops/derimod.png": "d73b9990acb46b7331a6db8e2d6de43e",
"assets/assets/images/shops/elle.svg": "f7d19ee34c8b2310e274e37de31df9d9",
"assets/assets/images/shops/english_home.png": "52e3a0ca6f472736f1f637fc1989a6a0",
"assets/assets/images/shops/flo.svg": "5b490187bbd0a188ffaa46980d8f5df8",
"assets/assets/images/shops/gant.svg": "7d548898fe61c164ea1dc37d342347f5",
"assets/assets/images/shops/gap.svg": "7e79e7c8d63bb610e23ab9729b85615e",
"assets/assets/images/shops/hepsiburada.svg": "b89de7ef70daa889f8b431e6d7d766ce",
"assets/assets/images/shops/hummel.svg": "835d29f321e48aa23f867438f2b2f5b1",
"assets/assets/images/shops/in_street.svg": "d8c7feea6dbd41f755da9b2ad467ede5",
"assets/assets/images/shops/jack_jones.svg": "e2bb586304420d3812226e7fc38f67d3",
"assets/assets/images/shops/koton.svg": "ff40bd3b3c6d8b2254edc3949f6d4742",
"assets/assets/images/shops/lacoste.svg": "80360ec0aaa145399f3e255706aefe99",
"assets/assets/images/shops/lc_waikiki.svg": "ac3da335c733aaabb68a75594f87120b",
"assets/assets/images/shops/mango.svg": "7a13a27d392fbbaca9b52c24a1c389ac",
"assets/assets/images/shops/maraton.png": "d425ee4ea5c8c639132df3c3f29a35df",
"assets/assets/images/shops/massimo_dutti.svg": "fc02f97538f602cf3a8087bd49a1206f",
"assets/assets/images/shops/mavi.svg": "e28740e6ce44b9f0ee2b85a328c6b776",
"assets/assets/images/shops/n11.svg": "95c6d456cce31237b28b16b690e49ae9",
"assets/assets/images/shops/new_balance.svg": "7db740125962dff14a5c43cd37f85486",
"assets/assets/images/shops/nike.svg": "005ca88789946684bf2ec126c53dfbf5",
"assets/assets/images/shops/penti.svg": "240d3682cbe9d14269366d61af62f2fd",
"assets/assets/images/shops/pierre_cardin.svg": "18307c79fa572fc62a692f706a354041",
"assets/assets/images/shops/puma.svg": "5f312ac58a864828de4f1c955af5bac0",
"assets/assets/images/shops/skechers.svg": "c5831bf18d68b8ca301927c79a7e6a8d",
"assets/assets/images/shops/stradivarius.svg": "16b06ba6c022e41add82099d8fdc3fc3",
"assets/assets/images/shops/tamer_tanca.svg": "c738272c51d6434862a4da82df13b089",
"assets/assets/images/shops/tergan.svg": "00f572ec1b18407d77f866e5023bc327",
"assets/assets/images/shops/the_north_face.svg": "e3358e69f5959a5866116e3a6bb9dd50",
"assets/assets/images/shops/trendyol.svg": "661fa7b2c7998983ba4050319bb01562",
"assets/assets/images/shops/tudors.png": "0460964c8cf2414c84a98d7274bfc005",
"assets/assets/images/shops/under_armour.svg": "a45d3eb157a4ca309aaf77834e910a38",
"assets/assets/images/shops/us_polo_assn.png": "5b03dcaf7d13f58514610e39d43a8741",
"assets/assets/images/shops/zara.svg": "5e6e7040b3d1136306dea3c645bc4cad",
"assets/assets/images/splash.png": "3475207c9a690598ac55587beca87a07",
"assets/assets/images/tr.png": "29a9ef45811f4e8e9f64e7c0f7c6b574",
"assets/assets/images/uz.png": "72453e68ed835913c4b88108144f2d00",
"assets/assets/json/product_list.json": "6771ea9f180d6a62425cf34a4ed28c65",
"assets/FontManifest.json": "1680f614651614717625e5539c8e75cb",
"assets/fonts/MaterialIcons-Regular.otf": "363a32074ade5c2216f0a44d082295d4",
"assets/NOTICES": "c7f32102832d3143e6c9886695416abd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "467dd8d7629961184e38db90de60c21b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "066930412d4809f5b74b15d67dcb70bf",
"icons/Icon-192.png": "467dd8d7629961184e38db90de60c21b",
"icons/Icon-512.png": "467dd8d7629961184e38db90de60c21b",
"icons/Icon-maskable-192.png": "467dd8d7629961184e38db90de60c21b",
"icons/Icon-maskable-512.png": "467dd8d7629961184e38db90de60c21b",
"index.html": "383d4b06ffdae7d7ff914c29c4a88626",
"/": "383d4b06ffdae7d7ff914c29c4a88626",
"main.dart.js": "5937f1f95271229a744cd9d3dcb139e6",
"manifest.json": "f7258d94670707a1eb7cf91b037f6908",
"version.json": "a894774ce4fb826c8dc3ce5ce2027b5f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
