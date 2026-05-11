document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true
    });

    const hero = document.querySelector('.hero-card');
    
    // Movimiento ultra-suave
    document.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 120;
        let y = (window.innerHeight / 2 - e.pageY) / 120;
        
        if(hero) {
            hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        }
    });

    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
