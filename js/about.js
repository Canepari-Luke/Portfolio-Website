// Array of content for About Me page
const aboutContent = {
    whoAmI: {
        heading: "Who Am I?",
        content: "Hello! I'm Luke Canepari, a passionate front-end web developer with a love for creating beautiful and functional websites. Welcome to my portfolio!"
    },
    myJourney: {
        heading: "My Journey",
        content: "I started coding as a hobby and quickly realized it was my calling. From learning HTML and CSS to mastering JavaScript, I’ve enjoyed every step of my journey. I'm constantly growing and exploring new technologies."
    }
  };
  
  // Function to update the page content dynamically
  function updateAboutPageContent() {
    // Update the "Who Am I" section
    document.getElementById("who-am-i-heading").innerText = aboutContent.whoAmI.heading;
    document.getElementById("who-am-i-content").innerText = aboutContent.whoAmI.content;
  
    // Update the "My Journey" section
    document.getElementById("my-journey-heading").innerText = aboutContent.myJourney.heading;
    document.getElementById("my-journey-content").innerText = aboutContent.myJourney.content;
  }
  
  // Call the function to update the page when it loads
  document.addEventListener("DOMContentLoaded", updateAboutPageContent);
  