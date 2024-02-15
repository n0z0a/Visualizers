document.addEventListener('DOMContentLoaded', function () {
   var videoElement = document.getElementById('myGif');
   var gif2Element = document.getElementById('myGif2');
   var convertingColorsRadialGradient = document.querySelector('.convertingColorsRadialGradient');
   convertingColorsRadialGradient.style.backgroundImage = 'radial-gradient(circle farthest-corner at center, rgba(255, 0, 0, 1) 50%, rgba(0, 0, 255, 1) 100%, rgba(255, 64, 255, 1) 100%)';
   var tintSquare = document.getElementById('tintSquare');

   // Apply CSS styles directly to the video element
   videoElement.style.position = 'fixed';
   videoElement.style.top = '0';
   videoElement.style.left = '0';
   videoElement.style.width = '100%';
   videoElement.style.height = '100%';
   videoElement.style.objectFit = 'cover';

   // Initial position of the square
   tintSquare.style.position = 'fixed';
   tintSquare.style.width = '100vw';
   tintSquare.style.height = '100vh';
   tintSquare.style.backgroundColor = 'rgba(255, 231, 158, 0.5)';
   tintSquare.style.display = 'none';
   tintSquare.style.zIndex = '1';
   tintSquare.style.top = '0';
   tintSquare.style.left = '0';

   // Function to toggle the visibility of the square rapidly for a flashing effect
   function toggleSquareVisibility() {
       tintSquare.style.display = (tintSquare.style.display === 'none') ? 'block' : 'none';
   }

   // Function to move the square up and down
   function moveSquare() {
       var currentPosition = parseInt(tintSquare.style.top);
       var targetPosition = (currentPosition === 0) ? window.innerHeight : 0;

       // Animate the square using CSS transition
       tintSquare.style.transition = 'top 1s ease-in-out';
       tintSquare.style.top = targetPosition + 'px';
   }

   // Set up an interval to toggle square visibility and move it periodically
   setInterval(function () {
       toggleSquareVisibility();
       setTimeout(moveSquare, 500); // Wait for the square to be visible before moving
   }, 1000); // Adjust the interval between square toggles for a flashing effect


   function slideGif2() {
      gif2Element.style.transition = 'left 2s linear'; // Use 'linear' for a constant speed
      gif2Element.style.left = '100%'; // Start off-screen on the left
      setTimeout(function () {
          gif2Element.style.left = '0'; // Slide in from left to right
      }, 100); // Adjust the delay as needed
  }
  // Set up an interval to slide the second gif periodically
  setInterval(function () {
      slideGif2();
  }, 2000); // Adjust the interval between slides
});