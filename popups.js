// Function to setup random popups and alerts
export function setupPopups() {
  createRandomPopups();
  setupElementPopups();
}

// Create random popups
function createRandomPopups() {
  const popupContainer = document.getElementById('popup-container');
  const popupMessages = [
    "CONGRATULATIONS! You've won a free virus!",
    "WARNING: Your computer has 1,337 viruses!",
    "ALERT: This website uses cookies... and might steal your identity!",
    "HEY! Don't click away! Subscribe to our newsletter!",
    "BREAKING NEWS: This website is intentionally ugly!",
    "DOWNLOAD NOW: Free cursor pack with 10,000 animated cursors!",
    "YOUR ATTENTION PLEASE: This site is best viewed with eyes closed!",
    "SURVEY: On a scale of 1-10, how much do you hate this website?"
  ];
  
  // Create initial popup after a short delay
  setTimeout(() => {
    showRandomPopup();
  }, 5000);
  
  // Show random popups at intervals
  setInterval(() => {
    showRandomPopup();
  }, 15000);
  
  function showRandomPopup() {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    // Random position
    popup.style.top = `${Math.random() * 70}vh`;
    popup.style.left = `${Math.random() * 70}vw`;
    
    // Random styling
    popup.style.backgroundColor = getRandomColor();
    popup.style.color = getRandomColor();
    popup.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    
    // Popup content
    const message = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    popup.innerHTML = `
      <span class="popup-close">&times;</span>
      <h3 style="margin-top: 0;">${message}</h3>
      <button class="popup-button">OK</button>
      <button class="popup-button">CANCEL</button>
      <button class="popup-button">MAYBE LATER</button>
    `;
    
    popupContainer.appendChild(popup);
    
    // Show with animation
    setTimeout(() => {
      popup.style.display = 'block';
      popup.animate([
        { transform: 'scale(0) rotate(0deg)' },
        { transform: `scale(1) rotate(${Math.random() * 10 - 5}deg)` }
      ], {
        duration: 500,
        easing: 'ease-out'
      });
    }, 100);
    
    // Setup close button
    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.addEventListener('click', () => {
      closePopup(popup);
    });
    
    // Setup buttons
    const buttons = popup.querySelectorAll('.popup-button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        closePopup(popup);
      });
      
      // Random styling for buttons
      button.style.backgroundColor = getRandomColor();
      button.style.color = getRandomColor();
      button.style.border = `2px ${getRandomBorderStyle()} ${getRandomColor()}`;
      button.style.margin = '5px';
      button.style.padding = '5px 10px';
      button.style.fontFamily = getRandomFont();
    });
  }
  
  function closePopup(popup) {
    popup.animate([
      { transform: `scale(1) rotate(${Math.random() * 10 - 5}deg)` },
      { transform: 'scale(0) rotate(0deg)' }
    ], {
      duration: 500,
      easing: 'ease-in'
    });
    
    setTimeout(() => {
      popup.remove();
    }, 500);
  }
}

// Setup popups on element interaction
function setupElementPopups() {
  // Random alerts on clicking elements
  const clickableElements = document.querySelectorAll('a, button, .logo, h1, .read-the-docs');
  const alertMessages = [
    "Why did you click that?!",
    "OUCH! That hurt!",
    "Please don't click anything else!",
    "You're making the website sad!",
    "Click here to download more RAM!",
    "ERROR 404: Good taste not found",
    "Are you enjoying this beautiful website?",
    "Your cursor has contracted a virus!"
  ];
  
  clickableElements.forEach(element => {
    let clickCount = 0;
    
    element.addEventListener('click', (e) => {
      clickCount++;
      
      // After a few legitimate clicks, start showing alerts
      if (clickCount > 2 && Math.random() > 0.5) {
        const message = alertMessages[Math.floor(Math.random() * alertMessages.length)];
        
        // Create a custom alert instead of using window.alert
        const customAlert = document.createElement('div');
        customAlert.style.position = 'fixed';
        customAlert.style.top = '50%';
        customAlert.style.left = '50%';
        customAlert.style.transform = 'translate(-50%, -50%)';
        customAlert.style.background = getRandomColor();
        customAlert.style.color = getRandomColor();
        customAlert.style.padding = '20px';
        customAlert.style.borderRadius = '10px';
        customAlert.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        customAlert.style.zIndex = '10000';
        customAlert.style.minWidth = '300px';
        customAlert.style.textAlign = 'center';
        
        customAlert.innerHTML = `
          <h3>${message}</h3>
          <button id="alert-ok">OK</button>
        `;
        
        document.body.appendChild(customAlert);
        
        // OK button
        document.getElementById('alert-ok').addEventListener('click', () => {
          customAlert.remove();
        });
        
        // Prevent default only sometimes to make navigation unpredictable
        if (Math.random() > 0.7) {
          e.preventDefault();
        }
      }
    });
  });
}

// Helper functions
function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function getRandomBorderStyle() {
  const styles = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
  return styles[Math.floor(Math.random() * styles.length)];
}

function getRandomFont() {
  const fonts = [
    '"Comic Sans MS", cursive',
    '"Times New Roman", serif',
    '"Impact", sans-serif',
    '"Courier New", monospace',
    '"Arial Black", sans-serif',
    '"Brush Script MT", cursive',
    '"Papyrus", fantasy',
    '"Wingdings", fantasy'
  ];
  return fonts[Math.floor(Math.random() * fonts.length)];
}