// Function to setup cursor trail and other cursor effects
export function setupCursorEffects() {
  createCursorTrail();
  setupRandomCursorChanges();
}

// Create cursor trail effect
function createCursorTrail() {
  const trailContainer = document.createElement('div');
  trailContainer.id = 'cursor-trail';
  document.body.appendChild(trailContainer);
  
  const trailItems = [];
  const maxTrailItems = 20;
  
  // Mouse move event to create trail
  document.addEventListener('mousemove', (e) => {
    const trailItem = document.createElement('div');
    trailItem.className = 'cursor-trail-item';
    trailItem.style.left = `${e.clientX}px`;
    trailItem.style.top = `${e.clientY}px`;
    
    // Random color for each trail item
    trailItem.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    // Random size
    const size = Math.random() * 30 + 10;
    trailItem.style.width = `${size}px`;
    trailItem.style.height = `${size}px`;
    
    trailContainer.appendChild(trailItem);
    trailItems.push(trailItem);
    
    // Fade out effect
    setTimeout(() => {
      trailItem.style.opacity = '0';
      trailItem.style.transform = 'scale(0.5)';
      trailItem.style.transition = 'opacity 1s, transform 1s';
    }, 100);
    
    // Remove old trail items
    if (trailItems.length > maxTrailItems) {
      const oldItem = trailItems.shift();
      oldItem.remove();
    }
    
    // Remove this item after animation
    setTimeout(() => {
      trailItem.remove();
    }, 1100);
  });
}

// Setup random cursor changes
function setupRandomCursorChanges() {
  const cursors = [
    'default',
    'crosshair',
    'help',
    'move',
    'pointer',
    'progress',
    'text',
    'wait',
    'not-allowed',
    'grab',
    'zoom-in',
    'url("https://cur.cursors-4u.net/others/oth-8/oth704.cur"), auto',
    'url("https://cur.cursors-4u.net/nature/nat-10/nat951.cur"), auto',
    'url("https://cur.cursors-4u.net/symbols/sym-1/sym49.cur"), auto'
  ];
  
  // Change cursor randomly
  setInterval(() => {
    document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
  }, 3000);
  
  // Add click effect
  document.addEventListener('click', (e) => {
    const clickEffect = document.createElement('div');
    clickEffect.style.position = 'absolute';
    clickEffect.style.left = `${e.clientX - 25}px`;
    clickEffect.style.top = `${e.clientY - 25}px`;
    clickEffect.style.width = '50px';
    clickEffect.style.height = '50px';
    clickEffect.style.borderRadius = '50%';
    clickEffect.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    clickEffect.style.zIndex = '9999';
    clickEffect.style.pointerEvents = 'none';
    
    document.body.appendChild(clickEffect);
    
    // Animate and remove
    clickEffect.animate([
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(2)', opacity: 0 }
    ], {
      duration: 500,
      easing: 'ease-out'
    });
    
    setTimeout(() => {
      clickEffect.remove();
    }, 500);
  });
}