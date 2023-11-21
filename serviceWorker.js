const staticAutos = "dev-auto-site-v1"

const assets = [
    "/",
    "/index.html",
    "/nosotros.html",
    "/producto.html",
    "/css/style.css",
    "/css/normalize.css",
    "/js/app.js",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/12.jpg",
    "/img/13.jpg",
    "/img/14.jpg",
    "/img/grafico1.jpg",
    "/img/grafico2.jpg",
    "/img/icono_1.png",
    "/img/icono_2.png",
    "/img/icono_3.png",
    "/img/icono_4.png",
    "/img/logo.png",
    "/img/nosotros.png",


]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticAutos).then(cache => {
            cache.addAll(assets)
        })
    )
})

