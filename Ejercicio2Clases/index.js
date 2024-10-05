"use strict";
//PROYECTO CALCULADORA CON CLASES   
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const scc = (0, prompt_sync_1.default)();
const valores = [];
class numeros {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    getNum1() {
        return this.num1;
    }
    getNum2() {
        return this.num2;
    }
    setNum1(num1) {
        this.num1 = num1;
    }
    setNum2(num2) {
        this.num2 = num2;
    }
}
class calculadora extends numeros {
    constructor(num1, num2, ...valores) {
        super(num1, num2);
        this.resultado = 0;
    }
    suma(...valores) {
        this.resultado = this.getNum1() + this.getNum2();
        for (let i = 0; i < valores.length; i++) {
            this.resultado += valores[i].getNum1();
        }
        return this.resultado;
    }
    resta(...valores) {
        this.resultado = this.getNum1() - this.getNum2();
        for (let i = 0; i < valores.length; i++) {
            this.resultado -= valores[i].getNum1();
        }
        return this.resultado;
    }
    multiplicacion(...valores) {
        this.resultado = this.getNum1() * this.getNum2();
        for (let i = 0; i < valores.length; i++) {
            this.resultado *= valores[i].getNum1();
        }
        return this.resultado;
    }
    division(...valores) {
        if (this.getNum2() === 0) {
            console.log("No se puede dividir entre 0.");
            return NaN;
        }
        this.resultado = this.getNum1() / this.getNum2();
        for (let i = 0; i < valores.length; i++) {
            this.resultado /= valores[i].getNum1();
            if (valores[i].getNum1() === 0) {
                console.log("No se puede dividir entre 0.");
                return NaN;
            }
        }
        return this.resultado;
    }
}
function pausa() {
    console.log("Presione una tecla para continuar...");
    scc('');
}
let opc;
do {
    let i = 3;
    console.clear();
    console.log("--------------------");
    console.log("Bienvenido a la calculadora.");
    console.log("Ingrese el primer número:");
    let num1 = parseInt(scc(''));
    console.log("Ingrese el segundo número:");
    let num2 = parseInt(scc(''));
    console.log("Desea agregar más números? [s/n]");
    let respuesta = scc('');
    while ((respuesta !== 's') && respuesta !== 'n') {
        console.clear();
        console.log("--------------------");
        console.log("Respuesta no válida. Ingrese nuevamente.");
        console.log("Desea agregar más números? [s/n]");
        console.log("--------------------");
        respuesta = scc('');
    }
    while (respuesta === 's') {
        let num3;
        console.log("Ingrese el número " + (i) + ":");
        num3 = parseInt(scc(''));
        valores.push(new numeros(num3, 0));
        i = i + 1;
        console.clear();
        console.log("Desea agregar más números? [s/n]");
        respuesta = scc('');
        while ((respuesta !== 's') && respuesta !== 'n') {
            console.clear();
            console.log("--------------------");
            console.log("Respuesta no válida. Ingrese nuevamente.");
            console.log("Desea agregar más números? [s/n]");
            console.log("--------------------");
            respuesta = scc('');
        }
    }
    console.log("--------------------");
    console.clear();
    console.log("--------------------");
    console.log("¿Que operación desea realizar?");
    console.log("[1] Suma");
    console.log("[2] Resta");
    console.log("[3] Multiplicación");
    console.log("[4] División");
    console.log("[0] Salir");
    console.log("--------------------");
    opc = parseInt(scc(''));
    switch (opc) {
        case 1:
            let suma = new calculadora(num1, num2, ...valores);
            console.log("El resultado de la suma es: " + suma.suma(...valores));
            pausa();
            break;
        case 2:
            let resta = new calculadora(num1, num2, ...valores);
            console.log("El resultado de la suma es: " + resta.resta(...valores));
            pausa();
            break;
        case 3:
            let multiplicacion = new calculadora(num1, num2, ...valores);
            console.log("El resultado de la suma es: " + multiplicacion.multiplicacion(...valores));
            pausa();
            break;
        case 4:
            let division = new calculadora(num1, num2, ...valores);
            console.log("El resultado de la suma es: " + division.division(...valores));
            pausa();
            break;
        case 0:
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
} while (opc !== 0);
