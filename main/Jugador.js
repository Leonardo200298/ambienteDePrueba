class Jugador {
    constructor(nombreDeUsuario) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.fichaParaSeleccionar = [];
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
    mostrarFichas(){
        this.fichaParaSeleccionar.map((index)=>{
            document.querySelector("#imagenes").innerHTML +=
            `  <img src="${index.getImagen()}" alt="">
              `
        })
    }
    reconocerImagenes(){
        console.log(this.fichaParaSeleccionar.length);
        
        let imagenes = document.querySelectorAll("#imagenes")
        let arregloDeElementosHTML = imagenes[0].children;
     

        
        
    }
}