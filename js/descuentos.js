//_______________________productos _________________________________
class ProductosB {
    
    constructor(sku,nombre, valor, cantidad,pais, stock ){
        this.sku=sku;
        this.nombre= nombre;
        this.valor=valor;
        this.cantidad=cantidad;
        this.pais= pais;
        this.stock= stock;        

        this.info= `Hola soy un ${this.esp}, tengo ${this.eda} y soy de color ${this.col}`;
    }
    
    mostrarInfo(){    
        return `
        Nombre:  ${this.nombre} 
        Valor:   ${this.valor} 
        Stock:   ${this.stock}        
        Desde:   ${this.pais}           
        `;
    }


}

const vainilla = new ProductosB('1','Veganilla','3 USD','300cc','Argentina','350 unidades');
const chocolate = new ProductosB(2,'Veg Chocolate','4 USD','150gr','Colombia','230 unidades');
const cocoa = new ProductosB(3,'Vegan Cocoa','5 USD','100gr','Perù','120 unidades'); 
const trufa = new ProductosB(4,'VegTrufa','10 USD','10gr','Bolivia','40 unidades');


// alert(1+ parseInt(vainilla.valor.slice(0,2)));

 console.log(vainilla.sku);
 console.log(vainilla.sku[0]);
 console.log(vainilla)

//esto para saber que info sacaba
//____________________info productos____________________________________



function infoProductos(comienzo ) {
    if (comienzo == (vainilla.sku)) {
        alert(vainilla.mostrarInfo());
    }else if(comienzo == (chocolate.sku)){
        alert(chocolate.mostrarInfo());
    }else if(comienzo == (cocoa.sku)){
        alert(cocoa.mostrarInfo());
    }else if(comienzo == (trufa.sku)){
        alert(trufa.mostrarInfo());
    }else{
        'Creo que hubo un error, inténtalo denuevo'
    }
   
}

let comienzo;

//_________________descuento _______________________________________


let cupones =['s','r','m','d',];
 function descuento(operacion) {

     switch (operacion) {
         case 's':
             return 0.9;
             break;
         case 'r':
             return 0.8;
             break;
         case 'm':
             return 0.7;
             break;
         case 'd':
             return 0.6;
             break;
         default:
             
             return true
             break;
     }
 }


//_________________comienzo_______________________________________

const holaNombre=prompt('Bienvenide!! ¿cual es tu nombre?')
 
while(comienzo !=='comprar' ){
    comienzo=prompt(`Hola ${holaNombre}, tenemos 4 productos.
Para ver caractristicas de alguno, anota el numero asociado a cada uno: 
    1 vainilla 
    2 chocolate 
    3 cocoa
    4 trufa   

Cuando desees ir a la compra, escribe "comprar"
    `);
 
 
    if (comienzo !== 'comprar' ) {
        let resultado = infoProductos(comienzo);
        
    }
 }


 let operacion;
 
 operacion=prompt(`¿Dispones de algun cupón de descuento? Anota tu cupon de descuento para aplicarlo.
 
(aca te regalo estos cupones, escribe alguna letra  s || r || m || d 
si la colocas mal no tendras descuento 😩)`);
 
 let descuentoOperativo = descuento(operacion); 


 
 while(comienzo =='comprar' ){
    
    comienzo=prompt(`¿Que producto quieres comprar?, escribe el numero:
    1 vainilla 
    2 chocolate 
    3 cocoa
    4 trufa
    
    o si quieres salir apreta cualquier cosa`);
 
        
    if (comienzo == '1' ) {
        nombreP=vainilla.nombre;
        precioInicial =vainilla.valor;
        precioFinal = parseInt(vainilla.valor.slice(0,2)) * descuentoOperativo;

        alert(`Has seleccionado ${vainilla.nombre} que cuesta ${vainilla.valor}
`+'El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + precioFinal + ' USD' );
    }
    else if (comienzo == '2' ) {
        nombreP=chocolate.nombre;
        precioInicial =chocolate.valor;
        precioFinal = parseInt(chocolate.valor.slice(0,2)) * descuentoOperativo;

        alert(`Has seleccionado ${chocolate.nombre} que cuesta ${chocolate.valor}
`+'El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + precioFinal + ' USD' );
    }
    else if (comienzo == '3' ) {
        nombreP=cocoa.nombre;
        precioInicial =cocoa.valor;
        precioFinal = parseInt(cocoa.valor.slice(0,2)) * descuentoOperativo;

        alert(`Has seleccionado ${cocoa.nombre} que cuesta ${cocoa.valor}
`+'El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + precioFinal + ' USD' );
    }
    else if (comienzo == '4' ) {
        nombreP=trufa.nombre;
        precioInicial =trufa.valor;
        precioFinal = parseInt(trufa.valor.slice(0,2)) * descuentoOperativo;

        alert(`Has seleccionado ${trufa.nombre} que cuesta ${trufa.valor}
`+'El precio se rebajó un ' + Math.round((1-descuentoOperativo)*100) + '% quedando en ' + precioFinal + ' USD' );

        
    }
    else {
        alert('No has comprado. Adios');
        precioFinal=0;
    }
 }


 console.log(precioFinal); 



 
 
 document.getElementById("descuento").innerHTML = (`Elegiste <b>${nombreP}</b> con precio de ${precioInicial}. <br>
 
 El precio se rebajó un ${Math.round((1-descuentoOperativo)*100)} %, quedando en <b>${precioFinal} USD.</b>`);
 
 
 document.getElementById("boton").addEventListener("click", function() {
     prompt(holaNombre + " escribe tu email para enviarte los datos de pago ya?");
     alert('algun dia te respondere');
   });


document.getElementById("prdcts1").innerHTML = (vainilla.mostrarInfo());

document.getElementById("prdcts2").innerHTML = (chocolate.mostrarInfo());

document.getElementById("prdcts3").innerHTML = (cocoa.mostrarInfo());

document.getElementById("prdcts4").innerHTML = (trufa.mostrarInfo());


