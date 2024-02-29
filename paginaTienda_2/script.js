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
window.onload = slideImages;