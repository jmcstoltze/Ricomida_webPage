
// Plato seleccionado botones tooltip
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Botón enviar correo
$("#enviar").click(function () {
    alert("El correo fue enviado correctamente...");
});

// Cambiar color de las etiquetas con doble click
$("#receta h2").on("dblclick",function(){
    $(this).css({
        "color": "#DC3545"
    })
});

// Aparecer y desaparecer contenido tarjetas
$(".card-title").on("click", function () {
    $(".card-text").toggle("slow");
});