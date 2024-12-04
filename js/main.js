// Add functionality to the search button
document.getElementById("search-button").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value.trim();
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
        // You can replace this alert with actual search functionality
    } else {
        alert("Please enter a search term.");
    }
});

// Optional: Clear the search bar after the search
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
});

// Validate and sanitize search input
function validateSearchInput(input) {
    const sanitizedInput = input.replace(/[<>\/]/g, ''); // Remove harmful characters
    return sanitizedInput;
}

document.querySelector(".search-bar input").addEventListener("input", (e) => {
    e.target.value = validateSearchInput(e.target.value);
});

function escapeHTML(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

const safeContent = escapeHTML(userInput);
document.querySelector("#output").innerHTML = safeContent;

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const projectContainer = document.querySelector('.project-container');

let currentIndex = 0; // Tracks the first visible project
const projectWidth = 300 + 20; // Adjust for the width and margin of each project

// Function to update the slider position
function updateSlider() {
    projectContainer.style.transform = `translateX(${-currentIndex * projectWidth}px)`;
}

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projectContainer.children.length;
    updateSlider();
});

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projectContainer.children.length) % projectContainer.children.length;
    updateSlider();
});


// Slide left
leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Slide right
rightBtn.addEventListener('click', () => {
    if (currentIndex < projectContainer.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});
