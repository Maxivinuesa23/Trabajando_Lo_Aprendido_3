const scc = require ('prompt-sync')();
const Tarea = require ('./Tarea.js');
const Menu = require ('./Menu.js');
const Print = require ('./Print.js');
const Pausa =  require ('./Pausa.js');
let Tareas = [];

let titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad;

let pendiente = "🔴 Pendiente.";
let enCurso = "⏳ En curso.";
let terminado = "✅ Terminada.";
let opc;

let controlador, contador = 0;




do{
    console.clear();
    opc = Menu.menuPrincipal();

    switch(opc){

        case 1:

        if (controlador === 1){
            do{
                opc2 = Menu.menuTareas();

                switch (opc2){
                        
                        case 1:
                            console.clear();
                            Print.mostrarTareas();
                            break;

                        case 2:
                            console.log("Tareas pendientes. ");
                            Print.mostrarPendientes();
                            break;

                        case 3:
                            console.log("Tareas en curso. ");
                            Print.mostrarEnCurso();
                            break;

                        case 4:
                            console.log("Tareas terminadas. ");
                            Print.mostrarTerminadas();  
                            break;

                        default:
                            console.log("❌ Opcion no valida.");
                            break;
                }

            }while (opc2 != 0);

        }
        else{
            console.log("❌ No hay tareas para mostrar.");
        }

        break;


        case 2:
            Search.buscarTarea();
            break;
        
        case 3:
            controlador = 1;

            console.clear();
            titulo = Tarea.setTitulo();
            descripcion = Tarea.setDescripcion();
            estado = Tarea.setEstado();
            estado = Tarea.convertirEstado(estado);
            creacion = Tarea.setCreacion();
            // Creaar banderaModifico y programarlo.
            //ultimaModificacion = setUltimaModificacion();
            vencimiento = Tarea.setVencimiento(creacion);
            dificultad = Tarea.setDificultad();
            dificultad = Tarea.convertirDificultad(dificultad);

            nuevaTarea = new Tarea.Tarea(titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad);
            Tareas.push(nuevaTarea);
            console.log("Tarea agregada con exito. 🎉");

            break;

        case 0:
            break;

        default:
            console.log("❌ Opcion no valida.");
            break;
    }

}while (opc != 0);