// validar si podemos tener sw
if (navigator.serviceWorker){
    console.log("Si esta dispnoble el tranajo con el Service worked");
    //instalar el service worker
    navigator.serviceWorker.register('/sw.js');
}else
console.log("No esta diponible el tabajo con el service worked en este browser")
