// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.querySelector('.name-list');

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    console.log(nombreAmigo)
    
    if (nombreAmigo.trim() === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        //agregar al array
        amigos.push(nombreAmigo)
        console.log(amigos)
        //mostrar el nombre en pantalla
        //asignarTextoElemento('#listaAmigos',`${nombreAmigo}`,'black');
        
         // 1. Crear el nuevo elemento de la lista ('li')
        let nuevoElemento = document.createElement('li');

        // 2. Asignar el contenido de texto al nuevo elemento
        nuevoElemento.textContent = nombreAmigo;

        // 3. Agregar el nuevo elemento a la lista
        lista.style.color = 'black'
        lista.appendChild(nuevoElemento);
    }
    document.querySelector('#amigo').value = '';
    return;
}

function asignarTextoElemento(elemento, texto, color, estilo) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    elementoHTML.style.color = color;
    elementoHTML.style.fontWeight = estilo
    return;
}

function sortearAmigo() {
    let cantidadNombresLista = amigos.length;

    if (cantidadNombresLista > 0) {
        let indiceSorteado = Math.floor(Math.random()*cantidadNombresLista)

        console.log(indiceSorteado);
        lista.innerHTML = '';
        asignarTextoElemento('#listaAmigos','El amigo secreto sorteado es: '+amigos[indiceSorteado],'#39FF14','bold');
        return;
    } else {
        alert('La lista de nombres esta vacia.');
    }
}