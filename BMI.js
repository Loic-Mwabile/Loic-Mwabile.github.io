// script.js
document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid positive numbers for weight and height.');
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');
  
    bmiValue.textContent = bmi;
  
    if (bmi < 18.5) {
      bmiStatus.textContent = 'Underweight';
      bmiStatus.style.color = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus.textContent = 'Normal';
      bmiStatus.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus.textContent = 'Overweight';
      bmiStatus.style.color = 'orange';
    } else {
      bmiStatus.textContent = 'Obese';
      bmiStatus.style.color = 'red';
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
  setTimeout(showSlides, 5000); 
}
