
document.addEventListener("DOMContentLoaded", showAutos)

if ("serviceWorker" in navigator){
    console.log("si jala")
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker Registrado"))
            .catch(err => console.log("Service Worker No Registrado"))
    }

    );
}

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
            .then(res => {
                return res || fetch(fetchEvent.request) 
            })
    )
} )