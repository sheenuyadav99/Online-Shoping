// JavaScript for additional interactivity

// Function to highlight current navigation menu item
document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.href;
    var menuItems = document.querySelectorAll('nav ul li a');
  
    menuItems.forEach(function(item) {
      if (item.href === currentLocation) {
        item.style.borderBottomColor = '#ff9800';
      }
    });
  });
  
  // Function to handle button click
  document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  });
  
  // Function to handle form submission
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  });