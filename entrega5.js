


// let i=0
// for (i, i<baseDeDatos.length, i++){

//     var stockPrompt = Number("Hola! cuantas remeras queres comprar");
//     var cantidadReme = stockPrompt

//    for (i=0, i<baseDeDatos,i++) {
//    if (i<cantidadReme){
//         alert("no hay stock, por favor elegir otra o menos")
//     }
// }
// }

let baseDeDatos = []

if (localStorage.getItem("carrito") !=null){
  baseDeDatos=JSON.parse.(localStorage.getItem("carrito"));
  Document.getElementById("contador").innerHTML=baseDeDatos.length;
}

class remeras {
    constructor ( modelo, precio, talle, colores, stockproducto) {

    this.modelo = modelo
    this.precio = precio
    this.talle = talle
    this.colores = colores
    this.stockproducto = stockproducto
}}

let remeAlf= new remeras("Alf", 560, "S", "gris gastado", 5)
let remeCapitan = new remeras("Capitan del espacio", 650, "L","rosa",2 )
let remeBazooka = new remeras("Bazooka", 450, "M","Blanca", 3)
let remeJorgito = new remeras("Jorgito", 600, "M", "Blanca", 4)
let remeBritney = new remeras("Britney", 450, "L", "amarilla", 10)
let remeBuzos = new remeras("Buzos", 700, "M", "Varios colores", 9)



const baseDeDatos = [remeCapitan, remeBazooka, remeJorgito, remeBritney, remeBuzos];

baseDeDatos.push(remeAlf);
baseDeDatos.push(remeCapitan);
baseDeDatos.push(remeBazooka);
baseDeDatos.push(remeJorgito);
baseDeDatos.push(remeBritney);
baseDeDatos.push(remeBuzos);


document.getElementById(remeras).innerHTML = aux;

// stock = prompt("Hola! cuantas remeras queres comprar?");
// Number(stock)
// var cantidadReme = stock
function agregarAlCarrito(remeras) {
  baseDeDatos.push(remeras);
  localStorage.setItem("carrito", JSON.stringify(baseDeDatos));

let aux = 0
for(let i=0; i<baseDeDatos.length;i++){
  {
    aux += baseDeDatos[i].precio;
  }
  
//   {
// if (baseDeDatos.stockproducto>stock){
//     alert("perfecto! Anda eligiendo tu reme")
// }
// else{
//         alert("No hay mas stock")
//     }}

    // function stock()

    

    if (localStorage.getItem("carrito") != null) {
        console.log("entra aca si funciona");
        let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
        baseDeDatos = valoresDelCarrito;
      }
      
      document.getElementById("contador").innerHTML = carrito.length;
      
      function borrarUnProducto() {
        const borroCarrito = [];
        for (let i = 0; i < baseDeDatos.length; i++) {
          if (i != 1) {
            borroCarrito.push(baseDeDatos[i]);
          }
        }
        localStorage.setItem("carrito", JSON.stringify(borroCarrito));
        baseDeDatos = borroCarrito;
      }
















// let carrito = [];

// class Producto {
//   constructor(nombreMarca, precioProducto, stockProducto, imagenProducto) {
//     this.nombre = nombreMarca;
//     this.precio = precioProducto;
//     this.stock = stockProducto;
//     this.imagen = imagenProducto;
//   }
// }

// let producto1 = new Producto(
//   "Zapatillas Airmax",
//   750,
//   3,
//   "https://soyunperro.com/wp-content/uploads/perrocontento.jpg"
// );
// let producto2 = new Producto(
//   "Zapatillas Jagguar",
//   7500,
//   "3",
//   "https://www.hola.com/imagenes/estar-bien/20190517141961/secretos-felicidad-perros-cs/0-678-903/xxx-m.jpg"
// );
// let producto3 = new Producto(
//   "Zapatillas Adidas",
//   700,
//   "3",
//   "https://cdn.redcanina.es/wp-content/uploads/2019/03/04122838/happy-dog-750x375.jpg"
// );
// let producto4 = new Producto(
//   "Zapatillas Mercurial",
//   830,
//   "3",
//   "https://www.caninosbogotanos.com/wp-content/uploads/2020/04/perro-feliz.jpg"
// );
// let producto5 = new Producto(
//   "Changlas Atr OFERTA",
//   10,
//   "3",
//   "https://soyunperro.com/wp-content/uploads/2019/10/perro-feliz.jpg"
// );
// let producto6 = new Producto(
//   "Changlas Atr OFERTA",
//   10,
//   0,
//   "https://soyunperro.com/wp-content/uploads/2019/10/perro-feliz.jpg"
// );

// let baseDeDatos = [
//   producto1,
//   producto2,
//   producto3,
//   producto4,
//   producto5,
//   producto6,
// ];
// // baseDeDatos.push(producto1);
// // baseDeDatos.push(producto2);
// // baseDeDatos.push(producto3);
// // baseDeDatos.push(producto4);
// // baseDeDatos.push(producto5);

// let aux = ``;
// for (let i = 0; i < baseDeDatos.length; i++) {
//   console.log(baseDeDatos[i]);
//   if (baseDeDatos[i].stock > 0) {
//     aux += `
//     <div class="col-lg-4 col-md-6 mb-4">
//     <div class="card h-100">
//     <a href="#"><img class="card-img-top" src="${
//       baseDeDatos[i].imagen
//     }" alt=""></a>
//     <div class="card-body d-flex" style="align-items:flex-end">
//     <div>
//     <h4 class="card-title">
//     <a href="#">${baseDeDatos[i].nombre}</a>
//     </h4>
//     <h5>$${baseDeDatos[i].precio}</h5>
//     </div>
//     </div>
//     <div class="card-footer">
//     <button class="btn btn-primary" style="width:100%" 
//     onclick='agregarAlCarrito(${JSON.stringify(
//       baseDeDatos[i]
//     )})'>Agregar al carrito</button>
//     </div>
//     </div>
//     </div>
//     `;
//   } else {
//     aux += `
//     <h2>No tenemos stock</h2>`;
//   }
// }

// document.getElementById("productos").innerHTML = aux;

// // const nuevoArray = [];
// // for (let i = 0; i < baseDeDatos.length; i++) {
// //   nuevoArray.push({
// //     nombre: baseDeDatos[i].nombre,
// //     precio: baseDeDatos[i].precio,
// //   });
// // }

// // let producto6 = new Producto("Chanclas ATR", 10, 0);

// // TODO Funcionamiento de carrito

// if (localStorage.getItem("carrito") != null) {
//   console.log("Entro a la validacion");
//   let valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"));
//   carrito = valoresDelCarrito;
// }

// function agregarAlCarrito(producto) {
//   carrito.push(producto);
//   console.log(carrito);
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   // precio-total
//   let aux = 0;
//   for (let i = 0; i < carrito.length; i++) {
//     aux += carrito[i].precio;
//   }
//   document.getElementById("precio-total").innerHTML = "U$S" +aux;
// }

// function borrarUnProducto() {
//   const nuevoCarrito = [];
//   for (let i = 0; i < carrito.length; i++) {
//     if (i != 1) {
//       nuevoCarrito.push(carrito[i]);
//     }
//   }
//   localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
//   carrito = nuevoCarrito;
// }


















