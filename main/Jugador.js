class Jugador {
    constructor(miFicha, turno, elegiFichaYlleneUsuario) {
        this.nombreDeUsuario =document.querySelector("#inputUsuario").value;
        this.fichaParaSeleccionar = [];
        this.miFicha = miFicha;
        this.turno = turno;
        this.elegiFichaYlleneUsuario=elegiFichaYlleneUsuario
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
/*     mostrarFichas() {

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
       // this.fichaParaSeleccionar.splice(indice,1);
       // mostrarFichas() 

        imagenes[indice].classList.add("seleccionada");
        
    } */
        mostrarFichas() {
            const contenedor = document.querySelector("#imagenes");
            contenedor.innerHTML = "";

            this.fichaParaSeleccionar.forEach((ficha, index) => {
                const img = document.createElement("img");
                img.src = ficha.getImagen();
                img.alt = `Ficha ${index + 1}`;
                img.classList.add("ficha");

                img.addEventListener("click", () => {
                    this.seleccionarFicha(index);
                });
    
                contenedor.appendChild(img);
            });
        }
    
        seleccionarFicha(index) {
            const imagenes = document.querySelectorAll("#imagenes img");
            imagenes.forEach(img => img.classList.remove("seleccionada"));
            imagenes[index].classList.add("seleccionada");
            this.elegiFichaYlleneUsuario = true
            console.log();
            setImagen(imagenes[[index]].src)
            
           
        }
        enCondicionesParaSerAgregadoAarregloDeJugadores(){
            return this.elegiFichaYlleneUsuario && this.nombreDeUsuario != ""
        }
        setImagen(imagenSrc){
            this.miFicha = imagenSrc;
        }
        getImagenSrc(){
            this.miFicha;
        }
        getNombreUsuario(){
            this.nombreDeUsuario
        }
}