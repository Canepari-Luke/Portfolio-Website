// Array of content for About Me page
const aboutContent = {
    whoAmI: {
        heading: "Who Am I?",
        content: "Hello! I'm Luke Canepari, a passionate writer and front end developer. Welcome to my portfolio!"
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
  
  // Data for the modal (could be expanded)
const modalData = [
    { title: 'Projects', content: 'I’m working on several projects that both involve my skill in writing and my newfound passion for coding. I’ve recently started working on the code for a video game that I started writing the story elements of over a year ago.' },
    { title: 'Education', content: 'I’m an English major with a minor in computer programming. It has been a unique and exciting challange to bridge the gap between these two academic persuits.' },
    { title: 'Career Goals', content: 'I’m constantly striving to improve my skills as a front-end developer and incorperate that knowledge with my abilities I have gained in my major. In the future, I aim to work in user interface and user experiance. Some day, I would love to work full time in game development.' },
    { title: '', content: '' },
];

function openModal() {
    const modalContainer = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    
    // Clear previous modal content
    modalDetails.innerHTML = '';
    
    // Add content dynamically
    modalData.forEach(item => {
        const detailElement = document.createElement('div');
        detailElement.classList.add('modal-detail');
        detailElement.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        modalDetails.appendChild(detailElement);
    });

    // Show the modal
    modalContainer.style.display = 'block';
}

function closeModal() {
    const modalContainer = document.getElementById('modal');
    modalContainer.style.display = 'none';
}

// Optional: close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modalContainer = document.getElementById('modal');
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
};
