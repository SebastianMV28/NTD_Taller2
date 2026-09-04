// ===========================
// ProgSphere JavaScript
// ===========================

// Modo oscuro y claro

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "🌑 Modo Oscuro";
    } else {
        themeBtn.textContent = "🌙 Modo Claro";
    }
});

// Efecto al cargar tarjetas

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "all .8s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 250);
});

// Mensaje de bienvenida

window.addEventListener("load", () => {
    console.log("Bienvenido a ProgSphere");
});
