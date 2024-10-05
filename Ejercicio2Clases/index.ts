//PROYECTO CALCULADORA CON CLASES   

import { parse } from 'path';
import promptSync from 'prompt-sync';

const scc = promptSync();
const valores: numeros[] = [];

class numeros{

    private num1: number;
    private num2: number;

    public constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public getNum1(): number{
        return this.num1;
    }

    public getNum2(): number{
        return this.num2;
    }

    public setNum1(num1: number): void{
        this.num1 = num1;
    }

    public setNum2(num2: number): void{
        this.num2 = num2;
    }
}


class calculadora extends numeros{

    private resultado: number;

    public constructor(num1: number, num2:number, ...valores: numeros[]){
        super(num1, num2);
        this.resultado = 0;
    }

    public suma(...valores: numeros[]): number {
        this.resultado = this.getNum1() + this.getNum2();

        for (let i=0; i<valores.length; i++){
            this.resultado += valores[i].getNum1();
        }

        return this.resultado;
    }

    public resta (...valores: numeros[]): number{
        this.resultado = this.getNum1() - this.getNum2();

        for (let i=0; i<valores.length; i++){
            this.resultado -= valores[i].getNum1();
        }

        return this.resultado;
    }

    public multiplicacion(...valores: numeros[]): number{
        this.resultado = this.getNum1() * this.getNum2();

        for (let i=0; i<valores.length; i++){
            this.resultado *= valores[i].getNum1();
        }

        return this.resultado;
    }

    public division(...valores: numeros[]): number{

        if (this.getNum2() === 0){
            console.log("No se puede dividir entre 0.");
            return NaN;
        }

        this.resultado = this.getNum1() / this.getNum2();

        for (let i=0; i<valores.length; i++){
            this.resultado /= valores[i].getNum1();
            if (valores[i].getNum1() === 0){
                console.log("No se puede dividir entre 0.");
                return NaN;
            }
        }

        return this.resultado;
    }   

}

function pausa(): void{
    console.log("Presione una tecla para continuar...");
    scc('');  
}

let opc: number;


do{
    let i=3;
    console.clear();
    console.log("--------------------");
    console.log("Bienvenido a la calculadora.");
    console.log("Ingrese el primer número:");
    let num1 = parseInt(scc(''));
    console.log("Ingrese el segundo número:");
    let num2 = parseInt(scc(''));



    console.log("Desea agregar más números? [s/n]");
    let respuesta = scc('');

    while ( (respuesta !== 's') && respuesta !== 'n'){
        console.clear();
        console.log("--------------------");
        console.log("Respuesta no válida. Ingrese nuevamente.");
        console.log("Desea agregar más números? [s/n]");
        console.log("--------------------");
        respuesta = scc('');
    }

    while (respuesta === 's'){
        let num3: number;

        console.log("Ingrese el número " + (i) + ":");
        num3 = parseInt(scc(''));

        valores.push(new numeros(num3, 0));
        i = i + 1;

        console.clear();
        console.log("Desea agregar más números? [s/n]");
        respuesta = scc('');

        while ( (respuesta !== 's') && respuesta !== 'n'){
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

    switch (opc){

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


}while (opc !== 0);
