fetch("../xml/catalogo_libros.xml")
    .then(response => response.text())
    .then(data => {
        const xmlDoc = new DOMParser().parseFromString(data, "text/xml");
        const libros = Array.from(xmlDoc.getElementsByTagName("libro"));
        
        // Elegimos 3 libros al azar
        const destacados = libros.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        const contenedor = document.getElementById("contenedor_destacados");
        destacados.forEach(l => {
            const titulo = l.getElementsByTagName("titulo")[0].textContent;
            const img = l.getElementsByTagName("imagen")[0].textContent;
            
            contenedor.innerHTML += `
                <div class="tarjeta_libro">
                    <img src="${img}" alt="${titulo}">
                    <h3>${titulo}</h3>
                    <button class="btn_ver_mas" onclick="verDetalle('${titulo}')">Ver más</button>
                </div>
            `;
        });
    });

function verDetalle(tituloLibro) {
    // Guardamos el título del libro seleccionado
    localStorage.setItem("libroSeleccionado", tituloLibro);
    // Redirigimos a la página de detalles
    window.location.href = "../html/libro.html";
}
