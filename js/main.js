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

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach((card) => {
        const text = card.textContent.toLowerCase();

        if (text.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
