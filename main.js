import { changeColorEnter } from "./fooderanimation.js";
import { changeColorLeave } from "./fooderanimation.js";

document.addEventListener("DOMContentLoaded", () => {
    changeColorEnter();
    changeColorLeave();

    const oferta = document.querySelector(".oferta");
    const descuento = document.querySelector(".descuento");

    // Animación oferta
    if (oferta) {
        oferta.addEventListener("mouseover", () => {
            oferta.classList.add("animada");
        });

        oferta.addEventListener("mouseout", () => {
            oferta.classList.remove("animada");
        });
    }

    // Animación descuento
    if (descuento) {
        descuento.addEventListener("mouseover", () => {
            descuento.classList.add("animado");
        });

        descuento.addEventListener("mouseout", () => {
            descuento.classList.remove("animado");
        });
    }

    const button = document.querySelector(".btn");
    const phoneInput = document.getElementById("phone");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        if (name.trim().length <= 15) {
            alert("Por favor, ingresa tu nombre completo.");
            return;
        }

        if (!regex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (phone.length !== 10) {
            alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
            return;
        }

        alert("¡Descuento aplicado! Gracias por registrarte.");
    }

    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "").slice(0, 10);
        });
    }

    if (button) {
        button.addEventListener("click", validateForm);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 150);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".testimonial-card").forEach((card) => {
        observer.observe(card);
    });
});