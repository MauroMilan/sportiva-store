const oferta = document.querySelector(".oferta");
const descuento = document.querySelector(".descuento");

// Animación oferta
// Animación cuando el cursor pasa por la caja
oferta.addEventListener('mouseover', () => {
    oferta.classList.add("animada");
}
);

// Cuando el cursor sale de la caja

oferta.addEventListener('mouseout', () => {
    oferta.classList.remove("animada");
}
);

// Animación descuento
// Animación cuando el cursor pasa por la caja
descuento.addEventListener('mouseover', () => {
    descuento.classList.add("animado");
}
);

// Cuando el cursor sale de la caja

descuento.addEventListener('mouseout', () => {
    descuento.classList.remove("animado");
}
);
