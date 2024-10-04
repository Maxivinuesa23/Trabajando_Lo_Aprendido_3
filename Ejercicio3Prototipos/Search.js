const scc = require ('prompt-sync')();
const Pausa = require ('./Pausa.js');
const Tarea = require ('./Tarea.js');


function buscarTarea(){
    let arrayTareasSimilares = [];
    contador = 0;
    
    console.clear();
    console.log("-----------------------------------");
    console.log("¿Qué tarea desea buscar?");
    console.log("-----------------------------------");
    titulo = scc('');
    
    for (i=0; i<Tarea.length; i++){
        if (Tarea[i].titulo.toLowerCase().includes(titulo.toLowerCase())){
            arrayTareasSimilares.push(Tarea[i]);
            contador = contador + 1;
        }
    }

    if (contador == 0){
        console.log("No se encontraron tareas similares.");
        Pausa.pausa();
    }
    else{
        mostrarTareasSimilares(arrayTareasSimilares, contador);
    }
}

function mostrarTareasSimilares(arrayTareasSimilares, contador){
    console.clear();
    console.log("-----------------------------------");
    console.log(`Se encontraron ${contador} tareas similares.`);
    for (i=0; i<arrayTareasSimilares.length; i++){
        console.log(`[${i+1}] ${arrayTareasSimilares[i].titulo}`);
    }
    console.log("-----------------------------------");
    pausa();
    console.clear();
}

module.exports = {buscarTarea};