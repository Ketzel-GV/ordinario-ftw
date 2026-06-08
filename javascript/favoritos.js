document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista_favoritos");
    const favoritos = JSON.parse(localStorage.getItem("misFavoritos")) || [];

    if (favoritos.length === 0) {
        lista.innerHTML = "<li>No tienes libros favoritos aún.</li>";
    } else {
        favoritos.forEach(titulo => {
            const li = document.createElement("li");
            li.textContent = titulo;
            lista.appendChild(li);
        });
    }
});
