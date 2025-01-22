class CuatroEnLinea {
    constructor() {
        this.jugadores = []; 
    }

    agregarJugador(enCondiciones, jugador) {
        if (enCondiciones) {
            this.jugadores.push(jugador);
            console.log("Jugadores actuales:", this.jugadores);
        }
    }

    mostrarJugadores() {  
        const contenedor = document.querySelector("#jugadores");  
        contenedor.innerHTML = ""; 
        this.jugadores.forEach(jugador => {  
            const jugadorDiv = document.createElement("div");  
            jugadorDiv.innerHTML = `${jugador.getNombreUsuario()} <img src="${jugador.getImagenSrc()}" alt="imagen de animal"/>`;  
            contenedor.appendChild(jugadorDiv);  
        });  
    }   
}
