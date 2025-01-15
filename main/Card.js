class Card{
    constructor(nombre, atributo ,imagen){
        this.nombre = nombre;
        this.atributo = atributo;
        this.imagen = imagen;
    }
    getNombre(){
        return this.nombre;
    }
    getAtributo(){
        return this.atributo;
    }
    getImagen(){
        return this.imagen;
    }

}