const scc = require ('prompt-sync')();

function menuPrincipal(){
    console.log("--------------------");
    console.log("Menu de tareas");
    console.log("[1] Ver mis tareas.");
    console.log("[2] Buscar tarea.");
    console.log("[3] Agregar tarea.");
    console.log("[0] Salir.");
    console.log("--------------------");
    let opc = scc('');
    opc = parseInt(opc);

    return opc;
}

function menuTareas(){
    console.log("--------------------");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    console.log("--------------------");
    let opc2 = scc('');
    opc2 = parseInt(opc2);

    return opc2;
}

module.exports = {menuPrincipal, menuTareas};