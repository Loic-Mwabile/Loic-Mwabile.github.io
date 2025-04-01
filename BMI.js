// script.js
document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    
    // Validation détaillée
    if (isNaN(weight) || isNaN(height)) {
      errorMessage.textContent = 'Please enter valid numbers for weight and height.';
      document.getElementById('bmiForm').appendChild(errorMessage);
      return;
    }
    
    if (weight <= 0) {
      errorMessage.textContent = 'Weight must be greater than 0.';
      document.getElementById('bmiForm').appendChild(errorMessage);
      return;
    }
    
    if (height <= 0) {
      errorMessage.textContent = 'Height must be greater than 0.';
      document.getElementById('bmiForm').appendChild(errorMessage);
      return;
    }
    
    if (weight > 500) {
      errorMessage.textContent = 'Weight seems too high. Please check your input.';
      document.getElementById('bmiForm').appendChild(errorMessage);
      return;
    }
    
    if (height > 3) {
      errorMessage.textContent = 'Height seems too high. Please check your input.';
      document.getElementById('bmiForm').appendChild(errorMessage);
      return;
    }
    
    // Supprimer les messages d'erreur précédents
    const previousErrors = document.getElementsByClassName('error-message');
    while(previousErrors.length > 0) {
      previousErrors[0].remove();
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');
    
    bmiValue.textContent = bmi;
    
    if (bmi < 18.5) {
      bmiStatus.textContent = 'Underweight';
      bmiStatus.style.color = '#4a90e2'; // Bleu plus doux
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus.textContent = 'Normal';
      bmiStatus.style.color = '#2ecc71'; // Vert plus doux
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus.textContent = 'Overweight';
      bmiStatus.style.color = '#f39c12'; // Orange plus doux
    } else {
      bmiStatus.textContent = 'Obese';
      bmiStatus.style.color = '#e74c3c'; // Rouge plus doux
    }
});

var def = document.getElementsByClassName("def");
var i;

for (i = 0; i < def.length; i++) {
  def[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let slideIndex = 0;
let slideTimer = null;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  
  // Réinitialiser le timer
  if (slideTimer) {
    clearTimeout(slideTimer);
  }
  slideTimer = setTimeout(showSlides, 6000);
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}