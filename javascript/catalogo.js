document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("contenido_tabla");
    const inputFiltro = document.getElementById("filtro");
    let listaLibros = [];

    
    fetch("../xml/catalogo_libros.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const libros = xmlDoc.getElementsByTagName("libro");

            for (let libro of libros) {
                const miLibro = {
                    titulo: libro.getElementsByTagName("titulo")[0].textContent,
                    autor: libro.getElementsByTagName("autor")[0].textContent,
                    categoria: libro.getElementsByTagName("categoria")[0].textContent,
                    anio: libro.getElementsByTagName("anio")[0].textContent
                };
                listaLibros.push(miLibro);
            }
            pintarTabla(listaLibros);
        });

    function pintarTabla(datos) {
    tabla.innerHTML = "";
    datos.forEach(l => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${l.titulo}</td>
            <td>${l.autor}</td>
            <td>${l.categoria}</td>
            <td>${l.anio}</td>
        `;
        fila.addEventListener("click", () => {
            localStorage.setItem("libroSeleccionado", l.titulo);
            window.location.href = "/html/libro.html"; 
        });
        tabla.appendChild(fila);
    });
}
    
    inputFiltro.addEventListener("keyup", () => {
        const busqueda = inputFiltro.value.toLowerCase();
        const filtrados = listaLibros.filter(l => 
            l.titulo.toLowerCase().includes(busqueda) || 
            l.autor.toLowerCase().includes(busqueda)
        );
        pintarTabla(filtrados);
    });
});