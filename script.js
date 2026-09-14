// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuButton.classList.toggle("active");
    });

    // Fecha o menu ao clicar em algum link
    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            menuButton.classList.remove("active");
        });
    });
}


// ===============================
// HEADER AO ROLAR A PÁGINA
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// ANO AUTOMÁTICO NO FOOTER
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// EVITA PROBLEMAS COM MENU ABERTO
// ===============================

window.addEventListener("resize", () => {
    if (window.innerWidth > 850 && menu) {
        menu.classList.remove("open");

        if (menuButton) {
            menuButton.classList.remove("active");
        }
    }
});
