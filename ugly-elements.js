// Function to create various ugly elements on the page
export function createUglyElements() {
  createRandomTextElements();
  createGlitterEffect();
  createSnowEffect();
}

// Create text elements with random styling
function createRandomTextElements() {
  const container = document.getElementById('random-elements-container');
  const phrases = [
    'UNDER CONSTRUCTION',
    'BEST VIEWED IN INTERNET EXPLORER 6',
    'HIT COUNTER BROKEN',
    'SIGN MY GUESTBOOK',
    'DOWNLOAD NOW',
    'FREE GIFT',
    'YOU ARE VISITOR #1337',
    'LAST UPDATED: 01/01/1999'
  ];

  phrases.forEach(phrase => {
    const element = document.createElement('div');
    element.className = 'text-effect';
    element.textContent = phrase;
    element.style.color = getRandomColor();
    element.style.backgroundColor = getRandomColor();
    element.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    element.style.padding = '10px';
    element.style.margin = '15px';
    element.style.borderRadius = `${Math.random() * 50}px`;
    element.style.border = `${Math.random() * 10}px ${getRandomBorderStyle()} ${getRandomColor()}`;
    
    // Random animation
    const animations = ['spin', 'shake', 'blink', 'float', 'zoomInOut', 'rainbowText'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    element.style.animation = `${randomAnimation} ${Math.random() * 5 + 1}s infinite`;
    
    container.appendChild(element);
  });
}

// Create glitter effect (random sparkles)
function createGlitterEffect() {
  setInterval(() => {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = `${Math.random() * 100}vw`;
    glitter.style.top = `${Math.random() * 100}vh`;
    glitter.style.background = getRandomColor();
    glitter.style.boxShadow = `0 0 ${Math.random() * 10}px ${getRandomColor()}`;
    document.body.appendChild(glitter);
    
    // Animate and remove
    setTimeout(() => {
      glitter.style.opacity = '0';
      setTimeout(() => {
        glitter.remove();
      }, 1000);
    }, Math.random() * 5000);
  }, 200);
}

// Create snow/confetti effect
function createSnowEffect() {
  setInterval(() => {
    const snow = document.createElement('div');
    snow.className = 'snow';
    snow.style.left = `${Math.random() * 100}vw`;
    snow.style.top = '-10px';
    snow.style.background = getRandomColor();
    document.body.appendChild(snow);
    
    // Animate falling
    const duration = Math.random() * 10000 + 5000;
    const leftOffset = Math.random() * 100 - 50;
    
    // Animate
    snow.animate([
      { top: '-10px', left: `${parseFloat(snow.style.left)}` },
      { top: '110vh', left: `calc(${parseFloat(snow.style.left)}px + ${leftOffset}px)` }
    ], {
      duration: duration,
      easing: 'linear'
    });
    
    // Remove after animation
    setTimeout(() => {
      snow.remove();
    }, duration);
  }, 300);
}

// Helper functions
function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function getRandomBorderStyle() {
  const styles = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
  return styles[Math.floor(Math.random() * styles.length)];
}