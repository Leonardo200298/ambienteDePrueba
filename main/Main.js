let fichaParaElegir1 = new Ficha('images/leon.jpeg');
let fichaParaElegir2 = new Ficha('images/lobo.jpeg');
let fichaParaElegir3 = new Ficha('images/carpincho.jpeg');
let fichaParaElegir4 = new Ficha('images/tigre.jpeg');

let jugador1 = new Jugador();
jugador1.agregarFicha(fichaParaElegir1);
jugador1.agregarFicha(fichaParaElegir2);
jugador1.agregarFicha(fichaParaElegir3);
jugador1.agregarFicha(fichaParaElegir4);

jugador1.mostrarFichas();


let juego = new CuatroEnLinea(3);


const botonAgregarJugador = document.querySelector("#btnAgregarJugador");
botonAgregarJugador.addEventListener("click", () => {
    jugador1.actualizarNombreDeUsuario(); // Asegúrate de actualizar el nombre
    console.log("usuario :", jugador1.getNombreUsuario());
    console.log("ficha:", jugador1.getImagenSrc());
    console.log("nn condiciones para agregar", jugador1.enCondicionesParaSerAgregadoAarregloDeJugadores());

    const enCondiciones = jugador1.enCondicionesParaSerAgregadoAarregloDeJugadores();

    if (enCondiciones) {
        juego.agregarJugador(enCondiciones, jugador1);
        juego.mostrarJugadores(); 
    } else {
        console.log("validacion erroronea despues hare algo para mostrar en DOM");
    }
});

