"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
console.log("Hola mundo desde TS!");
console.log("Este log ha sido traducido de TS a JS!");
console.log("Nuevo log de consola, con el modo observador!");
console.log("Hola mundo");
let edad = 18;
let edadExplicito = 18;
let isLoading = false;
let precio = "$18";
let frutas = ["Manzana", "Pera", "Mandarina"];
let colores = ["Rojo", "Verde", "Azul"];
let numerosYLetras = [1, "H", 3, "J"];
let numerosYLetras2 = [1, "H", 3, "J"];
function saludar(nombre) {
    console.log(`Hola ${nombre.toUpperCase()}!`);
}
function enviarMensaje(mensaje = "Valor por defecto") {
    if (typeof mensaje === "string") {
        mensaje.toUpperCase();
    }
}
function sumar(a, b) {
    return a + b;
}
const restar = (a, b) => a - b;
// function despuesDe1Seg(accion: Function) {
function despuesDe1Seg(accion) {
    setTimeout(() => {
        accion(5);
    }, 1000);
}
despuesDe1Seg((a) => {
    console.log(`Hola, recibimos: ${a}`);
});
enviarMensaje();
saludar("Juan");
let alumnos2 = [];
let alumnos = [
    { nombre: "Naruto", apellido: "Uzumaki", edad: 12, estudiar: () => { } },
    {
        nombre: "Sasuke",
        apellido: "Uchiha",
        edad: 12,
        email: "sasuke@gmail.com",
        estudiar: () => { },
    },
];
let sakura = {
    nombre: "Sakura",
    apellido: "Haruno",
    edad: 12,
    estudiar: () => { },
};
function actualizarAlumnoById(id, update) { }
function saludarAlumno(alumnoSinEdad) { }
class Alumno {
    constructor(nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
    estudiar() {
        console.log(`Hola, soy ${this.nombre} y estoy estudianto!`);
    }
}
exports.Alumno = Alumno;
const rockLee = new Alumno("Rock", "Lee", 12, "rocklee@mail.com");
const peterParker = new Alumno("Peter", "Parker", 15, "peter@mail.com");
peterParker.estudiar();
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Carrito {
    constructor() {
        this.productos = [];
    }
    calcularTotal() {
        return this.productos.reduce((prev, next) => prev + next.precio, 0);
    }
    agregarAlCarrito(producto) {
        this.productos.push(producto);
    }
}
class MyEcommerce {
    constructor(productos) {
        this.productos = [];
        this.carrito = new Carrito();
        this.productos = productos;
    }
    agregarAlCarrito(producto) {
        this.carrito.agregarAlCarrito(producto);
    }
    pagar() { }
}
const app = new MyEcommerce([new Producto('TV LED 42"', 9999)]);
