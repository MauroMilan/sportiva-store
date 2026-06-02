const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Retraso escalonado para efecto cascada
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
      observer.unobserve(entry.target); // Solo anima una vez
    }
  });
}, { threshold: 0.2 }); // Se activa cuando el 20% es visible

document.querySelectorAll('.testimonial-card').forEach(card => {
  observer.observe(card);
});