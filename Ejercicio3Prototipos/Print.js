function mostrarTareas(){
    for (let i = 0; i < Tareas.length; i++){
        console.log("--------------------");
        console.log("Titulo: " + Tareas[i].titulo);
        console.log("Descripción: " + Tareas[i].descripcion);
        console.log("Estado: " + Tareas[i].estado);
        console.log("Creación: " + Tareas[i].creacion);
        console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
        console.log("Vencimiento: " + Tareas[i].vencimiento);
        console.log("Dificultad: " + Tareas[i].dificultad);
        console.log("--------------------");
    }
}

function mostrarEnCurso(){
    for (let i = 0; i< Tareas.length; i++){
        if (tareas[i].estado === enCurso){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

function mostrarPendientes(){
    for (let i=0; i<Tareas.length; i++){
        if ( estado === pendiente){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

function mostrarTerminadas(){
    for (let i=0; i<Tareas.length; i++){
        if (estado === terminado){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

module.exports = {mostrarTareas, mostrarEnCurso, mostrarPendientes, mostrarTerminadas};