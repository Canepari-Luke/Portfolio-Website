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
