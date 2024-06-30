let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
   
    
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${Intentos} ${(Intentos === 1) ? "vez" : "veces"}`);
        document.getElementById ("reiniciar").removeAttribute("disabled");
    }else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ("p", "El numero secreto es menor");
        } else{
            asignarTextoElemento ("p", "El numero secreto es mayor"); 
        }
        Intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
     document.querySelector("#valorUsuario").value = "";
}
    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles"); 
    } else {
    // si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    //inicializar el numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();