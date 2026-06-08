document.addEventListener("DOMContentLoaded", () => {
    fetch("/ordinario-ftw/xml/catalogo_libros.xml")
        .then(response => response.text())
        .then(data => {
            const xmlDoc = new DOMParser().parseFromString(data, "text/xml");
            const libros = Array.from(xmlDoc.getElementsByTagName("libro"));
            
            // Sacamos los autores únicos
            const autores = [...new Set(libros.map(l => l.getElementsByTagName("autor")[0].textContent))];
            
            const contenedorAutores = document.getElementById("lista_autores");
            autores.sort().forEach(autor => {
                const btn = document.createElement("button");
                btn.className = "btn_accion";
                btn.textContent = autor;
                btn.onclick = () => mostrarLibrosAutor(autor, libros);
                contenedorAutores.appendChild(btn);
            });
        });
});

function mostrarLibrosAutor(autorSeleccionado, todosLosLibros) {
    const contenedorLibros = document.getElementById("libros_autor");
    const filtrados = todosLosLibros.filter(l => l.getElementsByTagName("autor")[0].textContent === autorSeleccionado);
    
    contenedorLibros.innerHTML = `<h2>Libros de ${autorSeleccionado}</h2>`;
    filtrados.forEach(l => {
        contenedorLibros.innerHTML += `<p>${l.getElementsByTagName("titulo")[0].textContent}</p>`;
    });
}