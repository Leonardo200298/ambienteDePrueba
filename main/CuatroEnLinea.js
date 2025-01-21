class CuatroEnLinea {
    constructor(xEnLineaNum) {
        this.xEnLineaNum = xEnLineaNum;
        this.jugadores = []
        this.botonAgregarJugador = document.querySelector("#btnAgregarJugador")
        this.contexto = document.querySelector("#canvasCuatroEnLinea");
    }

    agregarJugador(estaEncondiciones, jugador){
        if (estaEncondiciones == true) {
            
            this.botonAgregarJugador.addEventListener('click',()=>{
                this.jugadores.push(jugador)

            })
        }
    }
    
    mostrarJugadores(){
        this.jugadores.forEach((index)=>{
            document.querySelector("#jugadores").innerHTML += `${index}`
        })
    }

}