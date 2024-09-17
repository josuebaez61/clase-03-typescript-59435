console.log("Hola mundo desde TS!");
console.log("Este log ha sido traducido de TS a JS!");
console.log("Nuevo log de consola, con el modo observador!");
console.log("Hola mundo");

let edad = 18;
let edadExplicito: number = 18;
let isLoading: boolean = false;
let precio: number | string = "$18";

let frutas: string[] = ["Manzana", "Pera", "Mandarina"];
let colores: Array<string> = ["Rojo", "Verde", "Azul"];

let numerosYLetras: (number | string)[] = [1, "H", 3, "J"];
let numerosYLetras2: Array<number | string> = [1, "H", 3, "J"];

function saludar(nombre: string): void {
  console.log(`Hola ${nombre.toUpperCase()}!`);
}

function enviarMensaje(mensaje: string = "Valor por defecto") {
  if (typeof mensaje === "string") {
    mensaje.toUpperCase();
  }
}

function sumar(a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => a - b;

// function despuesDe1Seg(accion: Function) {
function despuesDe1Seg(accion: (a: number) => void) {
  setTimeout(() => {
    accion(5);
  }, 1000);
}

despuesDe1Seg((a) => {
  console.log(`Hola, recibimos: ${a}`);
});

enviarMensaje();

saludar("Juan");

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

interface IAlumno {
  nombre: string;
  apellido: string;
  edad: number;
  email?: string;
  estudiar: () => void;
}

let alumnos2: IAlumno[] = [];

let alumnos: Array<IAlumno> = [
  { nombre: "Naruto", apellido: "Uzumaki", edad: 12, estudiar: () => {} },
  {
    nombre: "Sasuke",
    apellido: "Uchiha",
    edad: 12,
    email: "sasuke@gmail.com",
    estudiar: () => {},
  },
];

let sakura: IAlumno = {
  nombre: "Sakura",
  apellido: "Haruno",
  edad: 12,
  estudiar: () => {},
};

function actualizarAlumnoById(id: string, update: Partial<IAlumno>) {}

function saludarAlumno(alumnoSinEdad: Omit<IAlumno, "edad">) {}

export class Alumno {
  nombre: string;
  apellido: string;
  edad: number;
  email?: string;

  constructor(nombre: string, apellido: string, edad: number, email?: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }

  estudiar(): void {
    console.log(`Hola, soy ${this.nombre} y estoy estudianto!`);
  }
}

const rockLee = new Alumno("Rock", "Lee", 12, "rocklee@mail.com");
const peterParker = new Alumno("Peter", "Parker", 15, "peter@mail.com");

peterParker.estudiar();

class Producto {
  nombre: string;
  precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  productos: Producto[] = [];

  calcularTotal(): number {
    return this.productos.reduce((prev, next) => prev + next.precio, 0);
  }

  agregarAlCarrito(producto: Producto) {
    this.productos.push(producto);
  }
}

class MyEcommerce {
  productos: Producto[] = [];
  carrito: Carrito = new Carrito();

  constructor(productos: Producto[]) {
    this.productos = productos;
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.agregarAlCarrito(producto);
  }

  pagar() {}
}

const app = new MyEcommerce([new Producto('TV LED 42"', 9999)]);
