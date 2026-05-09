document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS para todas las secciones
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out'
    });

    const heroCard = document.querySelector('.hero-container');
    
    // Movimiento suave y ultra-limitado (evita mareo)
    document.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 100; 
        let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        
        if(heroCard) {
            heroCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
        }
    });

    // Reset al salir
    document.addEventListener('mouseleave', () => {
        if(heroCard) heroCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});