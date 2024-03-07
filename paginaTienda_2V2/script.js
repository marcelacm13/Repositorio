document.getElementById('cuentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const apodo = document.getElementById('apodo').value;
    const colorCabello = document.getElementById('colorCabello').value;
    const colorOjos = document.getElementById('colorOjos').value;
    const edad = document.getElementById('edad').value;
    const hobby = document.getElementById('hobby').value;

    const cuento = `Había una vez un(a) ${nombreCompleto} con el apodo de ${apodo}, que tenía el cabello de color ${colorCabello} y los ojos de color ${colorOjos}. Tenía ${edad} años. Su hobby favorito era ${hobby}.`;

    document.getElementById('cuentoResultado').style.display = 'block';
    document.getElementById('cuentoResultado').innerHTML = `<h2>Cuento:</h2><p>${cuento}</p>`;
});

function slideImages() {
    var images = document.querySelectorAll('.slider img');
    var currentImage = 0;
    var interval = setInterval(function() {
        images[currentImage].style.opacity = 0;
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
    }, 2000);
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cancelar').addEventListener('click', function() {
        window.location.href = "index.html"; // Cambia "index.html" por la página inicial
    });

    document.getElementById('solicitudForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores del formulario
        var nombreCompleto = document.getElementById('nombreCompleto').value;
        var correoElectronico = document.getElementById('correoElectronico').value;
        var numeroCelular = document.getElementById('numeroCelular').value;
        var servicioSolicitado = document.getElementById('servicioSolicitado').value;

        // Crear una URL con los datos del formulario
        var url = `mostrar_datos.html?nombreCompleto=${nombreCompleto}&correoElectronico=${correoElectronico}&numeroCelular=${numeroCelular}&servicioSolicitado=${servicioSolicitado}`;

        // Redireccionar a la página mostrar_datos.html
        window.location.href = url;
    });
});
window.onload = slideImages;