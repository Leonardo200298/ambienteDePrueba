class Carrousel {
    constructor() {
        this.cards = [];    
        this.carruselInterno = document.querySelector("#carruselInterno");
        this.posicionDeAvance = 0; 
        this.carruselInterno.classList.add("avanceDeCarrusel"); 
    }

    agregarCard(card) {
        if (!this.cards.includes(card)) {
            this.cards.push(card);
        }
    }

    eliminarUltimaCard() {
        this.cards.pop();
    }

    devolverCards() {
        return [...this.cards];
    }

    avanzarCarrusel() {
        let tamanioCard = this.carruselInterno.clientWidth / this.cards.length;


        if (this.posicionDeAvance < this.carruselInterno.clientWidth - this.posicionDeAvance) {
            this.posicionDeAvance += tamanioCard;
            this.carruselInterno.style.transform = `translateX(-${this.posicionDeAvance}px)`;
          
            
        }
 
    }
    retrocederCarrusel(){
        let tamanioCard = this.carruselInterno.clientWidth / this.cards.length;
        if (this.posicionDeAvance > 0) {
            this.posicionDeAvance -= tamanioCard;
            if (this.posicionDeAvance < 0) {
                this.posicionDeAvance = 0;
            }
            this.carruselInterno.style.transform = `translateX(-${this.posicionDeAvance}px)`;
  
            
        }

        
    }
}
