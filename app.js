// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let element = document.getElementById('amigo').value;

    if (element == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(element);
    }
    limpiarCampo();
    mostrarAmigos()
    console.log(amigos);
}

function limpiarCampo() {
  const campo = document.getElementById('amigo');
  campo.value = ''; // Limpia el campo de texto
}


function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
      
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = '';

    amigos.forEach(amigo => {
    lista.innerHTML += `<li>${amigo}</li>`;
    });
}