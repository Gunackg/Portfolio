// Detect when the user has scrolled
document.addEventListener("scroll", function () {
    // Get all skill bars
    var skillBars = document.querySelectorAll(".skill-bar");
  
    // Loop through each skill bar
    skillBars.forEach(function (bar) {
      // Check if the skill bar is in the viewport
      if (isElementInViewport(bar)) {
        // Animate the width based on the data-percent attribute
        bar.style.width = bar.getAttribute("data-percent") + "%";
      }
    });
  });
  
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Toggle the navigation bar on scroll
    let prevScrollPos = window.pageYOffset;
  
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      let navbar = document.getElementById("navbar");
  
      if (prevScrollPos > currentScrollPos) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
  
      prevScrollPos = currentScrollPos;
    };
  });
  // Get modal element
const modal = document.getElementById("resume-modal");

// Get button that opens the modal
const resumeButton = document.getElementById("resume-button");

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName(" close-button")[0];

// When the user clicks the button, open the modal 
resumeButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}