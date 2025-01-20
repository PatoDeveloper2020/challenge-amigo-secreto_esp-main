// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del input
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim();

    // Verificar que el campo no esté vacío
    if (nombreAmigo !== "") {
        // Añadir el nuevo amigo al array
        amigos.push(nombreAmigo);

        // Mostrar los amigos en la lista
        mostrarAmigos();

        // Limpiar el campo de texto
        amigoInput.value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function mostrarAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    let listaResultado = document.getElementById('resultado');

    // Limpiar la lista antes de volver a llenarla
    listaResultado.innerHTML = "";

    // Añadir los amigos al HTML
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaResultado.appendChild(li);
    });
}

// Función para sortear (se puede completar luego)
function sortearAmigo() {
    if (amigos.length > 1) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        alert("¡Tu amigo secreto es: " + amigoSorteado + "!");
    } else {
        alert("Debe haber más de un amigo para sortear.");
    }
}