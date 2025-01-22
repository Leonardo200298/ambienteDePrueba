class Jugador {
    constructor() {
        this.nombreDeUsuario = "";
        this.fichaParaSeleccionar = [];
        this.miFicha = "";
        this.elegiFichaYlleneUsuario = false;
    }

    agregarFicha(ficha) {
        this.fichaParaSeleccionar.push(ficha);
    }

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
        this.miFicha = this.fichaParaSeleccionar[index].getImagen();
        this.elegiFichaYlleneUsuario = true;

    }

    actualizarNombreDeUsuario() {
        const inputUsuario = document.querySelector("#inputUsuario");
        this.nombreDeUsuario = inputUsuario.value;
    }

    enCondicionesParaSerAgregadoAarregloDeJugadores() {
        return this.elegiFichaYlleneUsuario && this.nombreDeUsuario !== "";
    }

    getNombreUsuario() {
        return this.nombreDeUsuario;
    }

    getImagenSrc() {
        return this.miFicha;
    }
}
