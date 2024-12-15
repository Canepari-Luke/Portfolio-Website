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

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function changeSlide(step) {
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);

// Button Events
prev.addEventListener("click", () => changeSlide(-1));
next.addEventListener("click", () => changeSlide(1));
