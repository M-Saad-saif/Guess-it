let CACHE_NAME = "guess-it-cache-v1";
let urlsToCache = [
  "./",
  "./index.html",
  "./guess it.css",
  "./guess it.js",
  "./game icon.png",
  "./guess it  game screen.png",
  "./guess it icon.ico",
  "./guess it mobile 2.png",
  "./guess it mobile bg.png",
  "./guess it pc bg.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
