var cruz1 = document.getElementById('cruz1');
var numero1 = document.getElementById('numero1');

cruz1.addEventListener('mouseover', function () {
    if (numero1.classList.contains('texto-borde')) {
        numero1.classList.remove('texto-borde');
    } //else {

    // numero1.classList.add('texto-borde');

});
cruz1.addEventListener('mouseout', function () {
    if (numero1.classList.contains('hellenic')) {
        numero1.classList.add('texto-borde');

    }
});
