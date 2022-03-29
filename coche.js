class Coche{
    constructor(peso, potencia, marca){
        this.peso = peso;
        this.potencia = potencia;
        this.marca = marca;
    
    }
    setMarca(marca){
        this.marca = marca;
    }

    getMarca(marca){
       return this.marca;
}
};


const miCoche = new Coche(1500, 122,);
miCoche.setMarca("Audi");
miCoche.getMarca();
document.getElementById('car').innerHTML = 'El peso del coche es de ' + miCoche.peso + 'kg ' + 'y su potencia es de ' + miCoche.potencia +' CV. ' + 'La marca del coche es: ' + miCoche.marca + '.';


export default Coche; 
