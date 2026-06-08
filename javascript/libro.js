document.addEventListener("DOMContentLoaded", () => {
    const contenedorDetalle = document.getElementById("detalle_libro");
    const tituloBuscado = localStorage.getItem("libroSeleccionado");

    fetch("../xml/catalogo_libros.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const libros = xmlDoc.getElementsByTagName("libro");

            for (let libro of libros) {
                const titulo = libro.getElementsByTagName("titulo")[0].textContent;
                
                if (titulo === tituloBuscado) {
                    document.getElementById("titulo_libro").textContent = titulo;
                    document.getElementById("autor_libro").innerHTML = `<strong>Autor:</strong> ${libro.getElementsByTagName("autor")[0].textContent}`;
                    document.getElementById("precio_libro").innerHTML = `<strong>Precio:</strong> $${libro.getElementsByTagName("precio")[0].textContent}`;
                    document.getElementById("img_portada").src = libro.getElementsByTagName("imagen")[0].textContent;
                    // ...
                    break; 
                }
            }
        });
});

document.getElementById("btn_favorito").addEventListener("click", () => {
    const titulo = localStorage.getItem("libroSeleccionado");
    let favoritos = JSON.parse(localStorage.getItem("misFavoritos")) || [];

    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
        localStorage.setItem("misFavoritos", JSON.stringify(favoritos));
        alert("¡Libro agregado a favoritos!");
    } else {
        alert("Ya está en tu lista.");
    }
});