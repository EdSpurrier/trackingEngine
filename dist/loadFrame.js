
// Define an array of JavaScript file paths to load
const jsFiles = [
  '/motionTracker.js',
  '/triggerZone.js',
  '/gameEngine.js'
];

// Loop through the array of file paths and create a script tag for each one
jsFiles.forEach(filePath => {
  const script = document.createElement('script');
  script.src = filePath;
  document.head.appendChild(script);
});



