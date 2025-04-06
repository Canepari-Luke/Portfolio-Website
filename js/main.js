// Add functionality to the search bar  
document.querySelector(".search-bar input").addEventListener("input", (e) => {  
  e.target.value = validateSearchInput(e.target.value);  
});  
 
// Validate and sanitize search input   
function validateSearchInput(input) {   
  const sanitizedInput = input.replace(/[&lt;&gt;\/]/g, ''); // Remove harmful characters   
  return sanitizedInput;   
}   
 
// Slideshow functionality  
document.addEventListener('DOMContentLoaded', function() {  
  // Get the slideshow elements   
  const slideshow = document.getElementById('slideshow');   
  const slides = document.querySelectorAll('.slide');   
  const prevButton = document.querySelector('.prev-btn');   
  const nextButton = document.querySelector('.next-btn');   
 
  if (slides.length > 0) {  
     // Initialize the current slide index   
     let currentSlideIndex = 0;   
 
     // Show the first slide   
     slides[currentSlideIndex].classList.add('active');   
 
     // Function to navigate to the next slide   
     function nextSlide() {   
       // Hide the current slide   
       slides[currentSlideIndex].classList.remove('active');   
         
       // Increment the current slide index (wrap around to first slide if necessary)   
       currentSlideIndex = (currentSlideIndex + 1) % slides.length;   
         
       // Show the new current slide   
       slides[currentSlideIndex].classList.add('active');   
     }   
 
     // Function to navigate to the previous slide   
     function prevSlide() {   
       // Hide the current slide   
       slides[currentSlideIndex].classList.remove('active');   
         
       // Decrement the current slide index (wrap around to last slide if necessary)   
       currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;   
         
       // Show the new current slide   
       slides[currentSlideIndex].classList.add('active');   
     }   
 
     // Add event listeners to the navigation buttons   
     if (prevButton && nextButton) {  
       prevButton.addEventListener('click', prevSlide);   
       nextButton.addEventListener('click', nextSlide);   
     }  
  }  
});

// Secure Cookie Setting in JavaScript  
function setSecureCookie(name, value, expiryDays) {  
  const date = new Date();  
  date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));  
   
  // Secure cookie attributes  
  const secureAttributes = [  
     'Secure',       // Only transmitted over HTTPS  
     'HttpOnly',      // Prevents JavaScript access  
     'SameSite=Strict', // Prevents CSRF attacks  
     `expires=${date.toUTCString()}`,  
     'path=/'  
  ].join('; ');  
 
  // Set the cookie with secure attributes  
  document.cookie = `$${name}=$$ {encodeURIComponent(value)}; ${secureAttributes}`;  
}  
 
// Example usage  
setSecureCookie('sessionId', 'abc123', 7); // Sets cookie for 7 days  
 
// Function to get cookie value safely  
function getSecureCookie(name) {  
  const cookieValue = document.cookie  
     .split('; ')  
     .find(row => row.startsWith(name + '='));  
   
  if (cookieValue) {  
     return decodeURIComponent(cookieValue.split('=')[1]);  
  }  
  return null;  
}  
 
// Function to delete cookie  
function deleteSecureCookie(name) {  
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; HttpOnly; SameSite=Strict`;  
}  
 
// Cookie validation function  
function validateCookie(cookieValue) {  
  // Add your validation logic here  
  const maxLength = 100;  
  const validCharacters = /^[a-zA-Z0-9_-]+$/;  
   
  return cookieValue.length <= maxLength && validCharacters.test(cookieValue);  
}  
 
// Example of setting a cookie with validation  
function setValidatedCookie(name, value, expiryDays) {  
  if (validateCookie(value)) {  
     setSecureCookie(name, value, expiryDays);  
     return true;  
  }  
  console.error('Invalid cookie value');  
  return false;  
}

// Enhanced CSP configuration for game content  
const gameContentCSP = {  
  directives: {  
     defaultSrc: ["'self'"],  
      
     // Scripts - Game-specific JavaScript  
     scriptSrc: [  
       "'self'",  
       "'unsafe-inline'", // For game events  
       'https://game-cdn.logosanomaly.com', // Game CDN  
       'https://analytics.gamemetrics.com', // Game analytics  
       // Allow specific game script domains  
       'https://*.unity.com',  
       'https://*.gameengine.com'  
     ],  
      
     // Game Assets and Media  
     mediaSrc: [  
       "'self'",  
       'https://game-assets.logosanomaly.com',  
       'blob:', // For dynamic game content  
       'data:', // For embedded game assets  
       // Audio sources  
       'https://game-audio.logosanomaly.com',  
       // Video sources for cutscenes  
       'https://game-video.logosanomaly.com'  
     ],  
      
     // Game Images  
     imgSrc: [  
       "'self'",  
       'data:',  
       'blob:',  
       'https://game-images.logosanomaly.com',  
       // Character assets  
       'https://character-sprites.logosanomaly.com',  
       // Environment assets  
       'https://environment-assets.logosanomaly.com',  
       // UI elements  
       'https://ui-assets.logosanomaly.com'  
     ],  
      
     // WebGL and Canvas  
     childSrc: [  
       "'self'",  
       'blob:', // For WebGL content  
     ],  
      
     // Game Worker Scripts  
     workerSrc: [  
       "'self'",  
       'blob:', // For game workers  
       'https://game-workers.logosanomaly.com'  
     ],  
      
     // Game Styles  
     styleSrc: [  
       "'self'",  
       "'unsafe-inline'", // For dynamic game UI  
       'https://game-styles.logosanomaly.com',  
       // UI Framework  
       'https://game-ui.logosanomaly.com'  
     ],  
      
     // Game Data Connections  
     connectSrc: [  
       "'self'",  
       // Game API endpoints  
       'https://api.logosanomaly.com',  
       'wss://game-websocket.logosanomaly.com', // WebSocket  
       // Save game data  
       'https://save-data.logosanomaly.com',  
       // Multiplayer services  
       'https://multiplayer.logosanomaly.com',  
       // Analytics  
       'https://game-analytics.logosanomaly.com'  
     ],  
      
     // Game Fonts  
     fontSrc: [  
       "'self'",  
       'https://game-fonts.logosanomaly.com',  
       'data:', // For embedded fonts  
     ],  
      
     // Frame Security for Game Elements  
     frameSrc: [  
       "'self'",  
       // Mini-game iframes  
       'https://minigames.logosanomaly.com',  
       // External game content  
       'https://external-content.logosanomaly.com'  
     ],  
      
     // Manifest for PWA support  
     manifestSrc: ["'self'"],  
      
     // Specific Game Resource Types  
     resourceTypes: {  
       shaders: ["'self'", 'https://game-shaders.logosanomaly.com'],  
       textures: ["'self'", 'https://game-textures.logosanomaly.com'],  
       models: ["'self'", 'https://game-models.logosanomaly.com']  
     }  
  },  
   
  // Report violations  
  reportUri: '/csp-report',  
  reportTo: 'game-csp-endpoint',  
   
  // Additional Security Headers  
  extraHeaders: {  
     'Feature-Policy':  
       "microphone 'none'; " +  
       "camera 'none'; " +  
       "geolocation 'none'",  
     'Permissions-Policy':  
       'fullscreen=(), ' +  
       'gamepad=(), ' +  
       'accelerometer=()'  
  }  
};  
 
// Game-specific violation monitoring  
const GameSecurityMonitor = {  
  violationTypes: {  
     ASSET_LOADING: 'asset_loading',  
     SCRIPT_EXECUTION: 'script_execution',  
     API_CONNECTION: 'api_connection',  
     WEBSOCKET: 'websocket',  
     SHADER_LOADING: 'shader_loading'  
  },  
   
  monitorGameViolations(violation) {  
     const violationType = this.categorizeViolation(violation);  
     this.logGameViolation(violationType, violation);  
      
     // Check for critical violations  
     if (this.isCriticalViolation(violation)) {  
       this.handleCriticalViolation(violation);  
     }  
  },  
   
  categorizeViolation(violation) {  
     // Categorize based on violated directive  
     const directive = violation['violated-directive'];  
      
     if (directive.includes('script-src')) {  
       return this.violationTypes.SCRIPT_EXECUTION;  
     }  
     if (directive.includes('connect-src')) {  
       return this.violationTypes.API_CONNECTION;  
     }  
     // Add more categorizations...  
      
     return 'unknown';  
  },  
   
  logGameViolation(type, violation) {  
     console.log(`Game Security Violation [${type}]:`, {  
       timestamp: new Date().toISOString(),  
       type,  
       details: violation,  
       gameState: this.getCurrentGameState()  
     });  
  },  
   
  getCurrentGameState() {  
     // Get relevant game state for debugging  
     return {  
       level: 'current_level',  
       playerPosition: 'player_coords',  
       gameMode: 'current_mode'  
     };  
  },  
   
  isCriticalViolation(violation) {  
     // Define critical violation conditions  
     return violation['violated-directive'].includes('script-src') ||  
         violation['blocked-uri'].includes('eval');  
  },  
   
  handleCriticalViolation(violation) {  
     // Handle critical security issues  
     console.error('Critical game security violation detected!');  
     // Implement emergency procedures  
     this.emergencyProcedures(violation);  
  },  
   
  emergencyProcedures(violation) {  
     // Implement safety measures  
     // Save game state  
     // Alert administrators  
     // Log incident  
  }  
};  
 
// Implementation  
app.use(helmet.contentSecurityPolicy(gameContentCSP));  
 
// Enhanced violation reporting for game content  
app.post('/csp-report', express.json(), (req, res) => {  
  const violation = req.body['csp-report'];  
   
  // Monitor game-specific violations  
  GameSecurityMonitor.monitorGameViolations(violation);  
   
  res.status(204).end();  
});