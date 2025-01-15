let botonSiguiente = document.querySelector("#siguiente");
let botonAnterior = document.querySelector("#anterior");
let leon = new Card('Leon', 'ferocidad', 'images/leon.jpeg');
let conejo = new Card('Conejo', 'saltar', 'images/conejo.jpeg');
let zorro = new Card('Zorro', 'astucia', 'images/zorro.jpeg');
let lobo = new Card('Lobo', 'Trabajo en equipo', 'images/lobo.jpeg');
let caballo = new Card('Caballo', 'inteligencia', 'images/caballo.jpeg');
let tigre = new Card('Tigre', 'Camuflaje', 'images/tigre.jpeg');

let carrusel = new Carrousel();
carrusel.agregarCard(leon);
carrusel.agregarCard(conejo);
carrusel.agregarCard(zorro);
carrusel.agregarCard(lobo);
carrusel.agregarCard(caballo);
carrusel.agregarCard(tigre);

for (let index = 0; index < carrusel.cards.length; index++) {
    document.querySelector("#carruselInterno").innerHTML += `
        <div>
            <h1>${carrusel.cards[index].nombre}</h1>
            <img src="${carrusel.cards[index].imagen}" alt="${carrusel.cards[index].imagen}">
            <p>${carrusel.cards[index].atributo}</p>
        </div>`;
}

botonSiguiente.addEventListener("click", () => {
    carrusel.avanzarCarrusel();
});
botonAnterior.addEventListener("click", ()=>{
    carrusel.retrocederCarrusel();
})
