document.getElementById("formulario-registro").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombre").value;
    
    // Guardamos un pequeño mensaje en el localStorage para confirmar
    localStorage.setItem("usuarioRegistrado", nombre);
    
    document.getElementById("mensaje-registro").innerHTML = 
        `¡Bienvenido/a, <strong>${nombre}</strong>! Registro exitoso.`;
    
    // Limpiamos el formulario
    this.reset();
});