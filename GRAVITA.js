const particleContainer = document.querySelector('.particle-container');

function getRandomColor() {
  const colors = ['#FFF100', '#DDA0DD', 'white'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getRandomSize() {
  const minSize = 30;
  const maxSize = 100;
  return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.backgroundColor = getRandomColor();
  
  const size = getRandomSize();
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  particleContainer.appendChild(particle);

  let positionY = -100;

  function updatePosition() {
    positionY += 5;
    particle.style.transform = `translateY(${positionY}px)`;

    if (positionY < window.innerHeight) {
      requestAnimationFrame(updatePosition);
    } else {
      particle.remove();
    }
  }

  requestAnimationFrame(updatePosition);
}

setInterval(createParticle, 500);

