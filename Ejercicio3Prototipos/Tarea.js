const scc = require ('prompt-sync')();

let titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad;

let pendiente = "🔴 Pendiente.";
let enCurso = "⏳ En curso.";
let terminado = "✅ Terminada.";
let opc;

//CONSTRUCTOR.
function Tarea(titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.creacion = creacion;
    this.ultimaModificacion = ultimaModificacion;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad;
}

/*
Tarea.prototype.setTitulo = function(titulo){
    this.titulo = titulo;
}
*/

let nuevaTarea = new Tarea("titulo", "descripcion", "estado", "creacion", "ultimaModificacion", "vencimiento", "dificultad");


//Seteo de valores.

function setTitulo(){
    console.clear();
    console.log("Ingrese el titulo de la tarea.");
    titulo = scc('');

    while (titulo === undefined){
        console.clear();
        console.log("Ingrese un titulo valido.");
        titulo = scc('');
    }

    return titulo;
}

function setDescripcion(){
    console.clear();
    console.log("Ingrese la descripción de la tarea.");
    descripcion = scc('');

    while (descripcion === undefined){
        console.clear();
        console.log("Ingrese una descripción valida.");
        descripcion = scc('');
    }

    return descripcion;
}

function setEstado(){
    console.clear();
    console.log("Ingrese el estado de la tarea.");
    console.log("--------------------");
    console.log("[P] Pendiente.");
    console.log("[C] En curso.");
    console.log("[T] Terminada.");
    estado = scc('');

    while (estado === undefined && estado !== 'P' && estado !== 'C' && estado !== 'T'){
        console.log("Ingrese un estado valido.");
        estado = scc('');
    }

    switch (estado){
        case 'p':
            estado = 'P';
            break;

        case 'c':
            estado = 'C';
            break;
    
        case 't':
            estado = 'T';
            break;
    }

    return estado;
}

function convertirEstado(estado){
    switch (estado){
        case 'P':
            estado = pendiente
            break;

        case 'C':
            estado = enCurso;
            break;

        case 'T':
            estado = terminado;
            break;
    }

    return estado;
}

function setCreacion(){
    let fecha = new Date();
    creacion = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

    return creacion;
}

function setUltimaModificacion(){

    if (banderaModifico === true){
        let FechaUltimaModificacion = new Date();
        ultimaModificacion = FechaUltimaModificacion.getDate() + "/" + (FechaUltimaModificacion.getMonth() + 1) + "/" + FechaUltimaModificacion.getFullYear();
    }

    return ultimaModificacion;
}

function setVencimiento(creacion){
    console.clear();
    console.log("--------------------");
    console.log("Recuerde que la misma debe ser mayor a la fecha actual.");
    console.log("--------------------");
    console.log("Ingrese el día de vencimiento de la tarea.");
    let dia = scc('');
    dia = parseInt(dia);
    console.log("Ingrese el mes de vencimiento de la tarea.");
    let mes = scc('');
    mes = parseInt(mes);
    console.log("Ingrese el año de vencimiento de la tarea.");
    let año = scc('');
    año = parseInt(año);

    vencimiento = new Date(año, mes - 1, dia);

    while ((dia === undefined || mes === undefined || año === undefined) && vencimiento < creacion){
        console.clear();
        console.log("--------------------");
        console.log("Ingrese una fecha valida.");
        console.log("Recuerde que la misma debe ser mayor a la fecha actual.");
        console.log("--------------------");
        console.log("Ingrese el día de vencimiento de la tarea.");
        dia = scc('');
        dia = parseInt(dia);
        console.log("Ingrese el mes de vencimiento de la tarea.");
        mes = scc('');
        mes = parseInt(mes);
        console.log("Ingrese el año de vencimiento de la tarea.");
        año = scc('');
        año = parseInt(año);
    }

    vencimiento = new Date(año, mes - 1, dia);

    return vencimiento;
}

function setDificultad(){
    console.clear();
    console.log("Ingrese la dificultad de la tarea.");
    console.log("--------------------");
    console.log("[F] Facil.");
    console.log("[M] Media.");
    console.log("[D] Dificil.");
    console.log("--------------------");
    dificultad = scc('');

    while (dificultad === undefined && dificultad !== 'F' && dificultad !== 'M' && dificultad !== 'D'){
        console.log("Ingrese una dificultad valida.");
        console.log("Ingrese la dificultad de la tarea.");
        console.log("--------------------");
        console.log("[F] Facil.");
        console.log("[M] Media.");
        console.log("[D] Dificil.");
        console.log("--------------------");
        dificultad = scc('');
    }

    switch (dificultad){
        case 'f':
            dificultad = 'F';
            break;

        case 'm':
            dificultad = 'M';
            break;

        case 'd':
            dificultad = 'D';
    }

    return dificultad;
}

function convertirDificultad(dificultad){
    switch (dificultad){
        case 'F':
            dificultad = "⭐";
            break;

        case 'M':
            dificultad = "⭐⭐";
            break;

        case 'D':
            dificultad = "⭐⭐⭐";
            break;
    }

    return dificultad;
}

module.exports = {Tarea, nuevaTarea, setTitulo, setDescripcion, setEstado, convertirEstado, setCreacion, setUltimaModificacion, setVencimiento, setDificultad, convertirDificultad};
