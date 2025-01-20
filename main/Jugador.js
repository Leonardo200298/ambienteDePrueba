class Jugador {
    constructor(nombreDeUsuario, miFicha) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.fichaParaSeleccionar = [];
        this.miFicha = miFicha;
        /* this.imagenes = [] */
    }
/*      let imagenes = [
    'images/leon.jpeg',
    'images/aguila.jpeg',
    'images/lobo.jpeg',
    'images/panda.jpeg'
]  */
    agregarFicha(ficha){
        this.fichaParaSeleccionar.push(ficha)
    }
    mostrarFichas() {

        const contenedor = document.querySelector("#imagenes");
        contenedor.innerHTML = "";


        this.fichaParaSeleccionar.forEach((ficha, index) => {
            const img = document.createElement("img");
            img.src = ficha.getImagen();
            img.alt = `Ficha ${index + 1}`;
       


            img.addEventListener("click", () => {
                console.log("entre");
                this.seleccionarFicha(index);
                
            });

            contenedor.appendChild(img);
        });
    }
    seleccionarFicha(indice){
        const imagenes = document.querySelectorAll("#imagenes img");
        this.miFicha = this.fichaParaSeleccionar[indice];
       /*  this.fichaParaSeleccionar.splice(indice,1);
        mostrarFichas() */

        imagenes[indice].classList.add("seleccionada");
        
    }
}