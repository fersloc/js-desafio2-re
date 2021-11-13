//////////////////////nuevas DOM configuraciones//////////////////////////

class ProductosBodega {
    constructor(id, title, price, stock, imagen){
        this.id = id;
        this.title=title;
        this.price = price;
        this.stock = stock;
        this.imagen = imagen;
    }

    descuento10(){
        precioDesc = Math.round(this.price * 0.9);
        return precioDesc
    }
}
const vaini = new ProductosBodega (1, 'Vainilla',100 , 10, '../media/img/ejerciciosJS/A.jpg');
const chocol = new ProductosBodega (2, 'Chocolate',200 , 8, '../media/img/ejerciciosJS/B.jpg');
const coco = new ProductosBodega (3, 'Coco',300 , 15, '../media/img/ejerciciosJS/C.jpg');
const truf = new ProductosBodega (4, 'Trufa',400 , 3, '../media/img/ejerciciosJS/D.jpg');
const naranja = new ProductosBodega (5, 'Naranja', 120, 32, '../media/img/ejerciciosJS/E.jpg');
const gluten = new ProductosBodega (6, 'Gluten', 256, 18, '../media/img/ejerciciosJS/F.jpg');


//array(productos), que contiene objetos
const productos = [
    vaini,
    chocol,
    coco,
    truf,
    naranja,
    gluten
];


//Adhiriendo productos...
    //se adhirió  escribiendo todo el object
productos.push({id:7, title:'Crema',price:300, stock:0, imagen:'../media/img/ejerciciosJS/J.jpg'});  

const aire = new ProductosBodega (8, 'Oxigeno', 559, 2, '../media/img/ejerciciosJS/K.jpg')
productos.push(aire);

//_______para observar los productos
console.log(productos);
console.log(gluten.price);

console.log('');

for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i].title}:  
        precio es ${productos[i].price} USD
        stock es ${productos[i].stock} unidades
        `);    
}//_______para observar los productos



const productsContainer = document.querySelector('.productos');

let vitrinaProductos = '<h2 class="text-primary">Productos</h2>';

productos.forEach(producto => {
    vitrinaProductos += `
    
        <div class="col-12 col-sm-6 col-lg-3 border-bottom producto-${producto.id}" >
            <img
            src="${producto.imagen}"
            alt="Tortas"
            class="img-fluid marketing__esquinas p-3"
            />
            
            <h2 class="text-primary text-center">${producto.title}</h2>
            <p>id: ${producto.id}</p>
            <h5 class='text-black-50'>$${producto.price} USD</h5>
            <p class="d-flex justify-content-center">
            
            <a class="btn btn-secondary text-white rounded-pill" href="#">Comprar</a>
            </p>
        </div>

    `;
})

productsContainer.innerHTML = vitrinaProductos;



////////////////desafio anterior: objects & arrays///////////////////////////////////////////
