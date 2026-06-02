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


const button = document.querySelector('.btn');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name.trim().length <= 8) {
        alert('Por favor, ingresa tu nombre completo.');
        return;
    }
    if (!regex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (phone.length !== 10) {
        alert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
        return;
    }
    alert('¡Descuento aplicado! Gracias por registrarte.');
}

document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

button.addEventListener('click', validateForm);
