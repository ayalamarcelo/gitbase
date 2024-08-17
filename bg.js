document.addEventListener('DOMContentLoaded', () => {
    const galaxyBackground = document.querySelector('.galaxy-background');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
        galaxyBackground.appendChild(star);
    }
});
