/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });


    /* Fecha o menu quando clicar em algum link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const elements = document.querySelectorAll(
    ".section, .stat, .service-card, .project-card, .process-step, .advantage, .contact-content"
);

elements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {
    observer.observe(element);
});


/* =========================
   EFEITO PARALLAX NO HERO
========================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.innerWidth > 700) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================
   HEADER AO ROLAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(7, 7, 10, 0.94)";

    } else {

        navbar.style.background =
            "rgba(7, 7, 10, 0.78)";

    }

});


/* =========================
   ANO AUTOMÁTICO
========================= */

const yearText = document.querySelector(".footer-bottom span");

if (yearText) {

    yearText.textContent =
        `© ${new Date().getFullYear()} Biel Sites. Todos os direitos reservados.`;

}


/* =========================
   LINKS EXTERNOS
========================= */

const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);

externalLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Abrindo:",
            link.href
        );

    });

});
