document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lista_favoritos");
    const favoritos = JSON.parse(localStorage.getItem("misFavoritos")) || [];

    if (favoritos.length === 0) {
        contenedor.innerHTML = "<p>No tienes libros favoritos aún.</p>";
    } else {
        favoritos.forEach(titulo => {
            const card = document.createElement("div");
            card.className = "tarjeta_favorito";
            card.innerHTML = `
                <h3>${titulo}</h3>
                <button class="btn_accion" onclick="eliminarFavorito('${titulo}')">Eliminar</button>
            `;
            contenedor.appendChild(card);
        });
    }
});

function eliminarFavorito(titulo) {
    let favoritos = JSON.parse(localStorage.getItem("misFavoritos"));
    favoritos = favoritos.filter(f => f !== titulo);
    localStorage.setItem("misFavoritos", JSON.stringify(favoritos));
    location.reload(); // Recarga la página para mostrar la lista actualizada
}
