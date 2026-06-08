document.getElementById("formulario_registro").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    
    // Guardamos el usuario
    localStorage.setItem("usuarioRegistrado", nombre);
    
    document.getElementById("mensaje_registro").innerHTML = 
        `¡Bienvenido/a, <strong>${nombre}</strong>! Registro exitoso.`;
    
    this.reset();
});