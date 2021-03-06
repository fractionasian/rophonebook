var STATIC_CACHE_CONTAINER = "static_v1"
var STATIC_FILES = [
    "/",
    "/index.js",
    "/index.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(STATIC_CACHE_CONTAINER)
        .then(function(cache){
            cache.addAll(STATIC_FILES)
        })
    )
})

self.addEventListener('activate', function(event){
    console.log("service worker activated", event)
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response
            } 
        })
    )
})
