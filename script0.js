function play1() {
    // Check if user has interacted with the page (click, touch, etc.)
    if (document.body.click) {  // Adjust event listener if needed (e.g., 'touchstart')
      var audio = document.getElementById("c"); // Assuming your audio element ID is "c"
      audio.play(); // Play the audio
    }
  }