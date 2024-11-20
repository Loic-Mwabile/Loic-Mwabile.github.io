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
  