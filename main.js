import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { createUglyElements } from './ugly-elements.js';
import { setupCursorEffects } from './cursor-effects.js';
import { setupPopups } from './popups.js';

// Initialize ugly page content
document.querySelector('#app').innerHTML = `
  <div class="ugly-container">
    <marquee class="marquee">
      <span class="marquee-content">WELCOME TO THE UGLIEST WEBSITE IN THE WORLD! ENJOY YOUR STAY! ☢️ ☠️ ☢️ ☠️ ☢️</span>
    </marquee>
    
    <h1>THE UGLIEST WEBSITE EVER!!</h1>
    
    <div class="logo-container">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    
    <div class="tilted-box">
      <h2 style="color: cyan; font-family: 'Brush Script MT', cursive; text-shadow: 3px 3px red;">Click counter below!</h2>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
    </div>
    
    <div id="visitor-counter">VISITORS: 13,337</div>
    
    <div class="color-section">
      <p style="font-family: 'Verdana', sans-serif; font-size: 24px; color: blue; background-color: yellow; padding: 10px;">
        This website is intentionally designed to break all principles of good web design.
        It features clashing colors, inconsistent typography, and annoying animations.
      </p>
    </div>
    
    <p class="read-the-docs">
      ✨ CLICK EVERYWHERE TO DISCOVER HIDDEN SURPRISES! ✨
    </p>
    
    <div id="random-elements-container"></div>
    
    <audio id="background-music" loop>
      <source src="https://www.soundjay.com/buttons/sounds/beep-1.mp3" type="audio/mpeg">
    </audio>
    
    <div id="popup-container"></div>
    
    <footer>
      <p>© 2025 The Ugliest Website Inc. - Designed to hurt your eyes!</p>
      <button id="play-music">PLAY ANNOYING SOUNDS</button>
    </footer>
  </div>
`;

// Setup counter
setupCounter(document.querySelector('#counter'));

// Initialize ugly elements
createUglyElements();

// Setup cursor trail effects
setupCursorEffects();

// Setup random popups
setupPopups();

// Setup annoying sound effects
document.getElementById('play-music').addEventListener('click', () => {
  const audio = document.getElementById('background-music');
  
  if (audio.paused) {
    audio.play();
    document.getElementById('play-music').textContent = 'STOP ANNOYING SOUNDS';
  } else {
    audio.pause();
    document.getElementById('play-music').textContent = 'PLAY ANNOYING SOUNDS';
  }
});

// Add random changing colors to texts
const texts = document.querySelectorAll('p, h1, h2, button');
texts.forEach(text => {
  setInterval(() => {
    text.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }, Math.random() * 2000 + 1000);
});

// Make some elements randomly move
const moveableElements = document.querySelectorAll('.card, .read-the-docs, h1');
moveableElements.forEach(element => {
  setInterval(() => {
    element.style.transform = `rotate(${Math.random() * 20 - 10}deg) translateX(${Math.random() * 20 - 10}px)`;
  }, Math.random() * 3000 + 2000);
});

// Create floating elements
for (let i = 0; i < 20; i++) {
  createFloatingElement();
}

function createFloatingElement() {
  const element = document.createElement('div');
  element.className = 'random-element';
  element.textContent = ['😵', '🤮', '💩', '👻', '🤡'][Math.floor(Math.random() * 5)];
  element.style.left = `${Math.random() * 100}vw`;
  element.style.top = `${Math.random() * 100}vh`;
  element.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  element.style.fontSize = `${Math.random() * 40 + 20}px`;
  element.style.animationDuration = `${Math.random() * 10 + 5}s`;
  
  document.body.appendChild(element);
  
  // Remove after some time and create a new one
  setTimeout(() => {
    element.remove();
    createFloatingElement();
  }, Math.random() * 10000 + 5000);
}