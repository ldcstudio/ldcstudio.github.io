'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b9fca9320ce7766b4d73f8ebd22b7205",
"assets/AssetManifest.bin.json": "06dc07d5a44d6336b3c2af5f48d2b01e",
"assets/AssetManifest.json": "73519557347ab2e3f8ab6b590121888c",
"assets/assets/logos/insta_icon.png": "e8e8e259fe3edf4cc59d997b0fc0e515",
"assets/assets/logos/ldc_icon.png": "5e7ed46fea7166f68f2f35fbfe0697c9",
"assets/assets/logos/revolut_icon.png": "dc2379e951454fbbf478631b66bcf54f",
"assets/assets/logos/yt_icon.png": "c2695e0a7ed64546e1b1b05daf7218a1",
"assets/assets/screenshots/checkin_mood_card_con.png": "0107cefca5b6e2c894832730edf56811",
"assets/assets/screenshots/checkin_mood_card_pro.png": "e9a8f590ef672b44da5394a582ce1e44",
"assets/assets/screenshots/checkin_mood_icon.png": "c646f4c57c60d6497206633d39e10e13",
"assets/assets/screenshots/figma_revolut_crypto_newly_added.png": "d0701d76675c2818c595d35d39e99981",
"assets/assets/screenshots/sc_colours.dart.PNG": "eb941d4dab661aef8ccb2fd9c17fbbc3",
"assets/assets/screenshots/sc_crypto_newly_added.dart-01.PNG": "094232ea01a639309d3ba44c05b0bba5",
"assets/assets/screenshots/sc_crypto_newly_added.dart-02.PNG": "32cc2548072c7c3024a4cca215f29577",
"assets/assets/screenshots/sc_crypto_newly_added.dart-03.PNG": "13093c61692c64a69c699cd9b6581f4f",
"assets/assets/screenshots/sc_crypto_newly_added.dart-04.PNG": "dbe405cd16bf2a8a4369efff7254393e",
"assets/assets/screenshots/sc_mood.dart.PNG": "4f1be97195c310154a0059129ab0702e",
"assets/assets/screenshots/sc_moods.dart.PNG": "f1e5ed7ba852caf4babe669264914e12",
"assets/assets/screenshots/sc_mood_card.dart-01.PNG": "023f08066b9050722fc17a855fb4a98f",
"assets/assets/screenshots/sc_mood_card.dart-02.PNG": "e0cf4c5f011b6cd01b5b86276f624e28",
"assets/assets/screenshots/sc_mood_card.dart-03.PNG": "9402e83c4cc73df327e32ab5eaeef0c5",
"assets/assets/screenshots/sc_mood_card.dart-04.PNG": "70e76afd059670649239010377bcbff3",
"assets/assets/screenshots/sc_mood_card.dart-05.PNG": "824ac4bc1847ebcf3e13bb383327b408",
"assets/assets/screenshots/sc_mood_card.dart-06.PNG": "43ed7233bdfa6c54c66f593e3ac14387",
"assets/assets/screenshots/sc_mood_helpers.dart.PNG": "64a3d4ceb46cf5be4679fb0dc064e990",
"assets/assets/screenshots/sc_mood_icon.dart-01.PNG": "bb8384e73bc03222abe7eb33eeff5201",
"assets/assets/screenshots/sc_mood_icon.dart-02.PNG": "086f347d7ec13d31291e72bc23c505cb",
"assets/assets/screenshots/sc_styles.dart.PNG": "2237354350f2d023869f234b3204f972",
"assets/assets/screenshots/sc_token.dart.PNG": "94c61c4d38cdc2f8cfd09b02743ed4bc",
"assets/assets/screenshots/sc_tokens.dart.PNG": "9f0d50183741b13a88891876f83090ba",
"assets/assets/screenshots/sc_token_item.dart-01.PNG": "e05de5217efe64cd88afa3bf01e3e2c8",
"assets/assets/screenshots/sc_token_item.dart-02.PNG": "b00fa01c4c8207f34c0c9b33b1dfa9e1",
"assets/assets/screenshots/sc_token_item.dart-03.PNG": "d86db468ec9b140172ebaab10c895488",
"assets/assets/screenshots/sc_token_item.dart-04.PNG": "e4a9fb8db3fd7f58b5e33b105f07dca0",
"assets/assets/screenshots/token_floki.png": "71a17e35977035e9ff92afa45295839c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "71b13651e4e388f7bd189a6c639cfc22",
"assets/NOTICES": "f020654d754654a14538f9e0c39f196a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "32e597ba75350f7150c85c85612d7b42",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "882ca094e38e5de6caecb25ad9aa221a",
"/": "882ca094e38e5de6caecb25ad9aa221a",
"main.dart.js": "85a8c61b6ad86acc1b86e86e422a6781",
"manifest.json": "ae5e0f16fcd48406c84610dcf99788b1",
"version.json": "2514b0601659649c890a50e20b8a0b75"};
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
