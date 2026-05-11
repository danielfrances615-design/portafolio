document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaciones de scroll
    AOS.init({
        duration: 900,
        easing: 'ease-out-quad',
        once: true
    });

    const hero = document.querySelector('.hero-card');
    
    // Movimiento de tarjeta muy sutil para PC
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            let x = (window.innerWidth / 2 - e.pageX) / 100;
            let y = (window.innerHeight / 2 - e.pageY) / 100;
            
            if(hero) {
                hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
            }
        });
    }

    // Suavizado de anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
