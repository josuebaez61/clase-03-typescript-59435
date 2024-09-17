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

function saludar(nombre: string) {
  console.log(`Hola ${nombre.toUpperCase()}!`);
}

saludar("Juan");
