let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "rgb(80, 80, 2)";
//           x    y width height
ctx.fillRect(10, 10, 55, 50);
ctx.fillStyle = "rgb(241, 241, 0)"
ctx.fillRect(15,15,55,50)

ctx.fillStyle = rgbaRandom()
ctx.beginPath();
//hare que varie de forma random la posicion del circulo
ctx.arc(Math.round(Math.random()*canvas.height),Math.round(Math.random()*canvas.width),30,0,Math.PI*2)
ctx.fill()
//opcional stroke que es para el trazo
//ctx.stroke()

function rgbaRandom(){
    return `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},255)`
}