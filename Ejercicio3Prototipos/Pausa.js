const scc = require('prompt-sync')();

function pausa(){
    scc('Presione ENTER para continuar.');
}

module.exports = {pausa};