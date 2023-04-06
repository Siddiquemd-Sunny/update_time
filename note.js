// // (HTML Codes)
// // <!DOCTYPE html>
// // <html>
// //   <head>
// //     <title>Digital Clock</title>
// //   </head>
// //   <body>
// //     <div id="clock"></div>
// //     <script src="./script.js"></script>
// //   </body>
// // </html>



// // (Javascript Codes)

// function updateClock() {
//     const clock = document.getElementById("clock");
//     const currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();
    
//     // Add leading zeros to single-digit hours, minutes, and seconds
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
    
//     // Format the time string
//     const timeString = hours + ":" + minutes + ":" + seconds;
    
//     // Update the clock display
//     clock.textContent = timeString;
//   }
  
//   // Call the updateClock function once to initialize the clock
//   updateClock();
  
//   // Update the clock display every second using setInterval()
//   setInterval(updateClock, 1000);
  