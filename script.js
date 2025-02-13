const floatingElements = document.querySelector('.floating-elements');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Heart emoji
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.bottom = '0'; // Start from the bottom
    floatingElements.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 500);
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '❤️'; // Rose emoji
    petal.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    petal.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration for falling
    floatingElements.appendChild(petal);

    // Remove the petal after the animation ends
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

// Create hearts and petals at regular intervals
setInterval(() => {
    createHeart(); // Add a heart
    createPetal(); // Add a petal
}, 500);