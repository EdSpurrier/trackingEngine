
  // Insert CSS
  const motionEngineCSS = `

  `;

  const style = document.createElement('style');
  style.innerHTML = motionEngineCSS;
  document.head.appendChild(style);



  //  Inject HTML
  const motionEngineHTML = `
      


  `;


  //  Add HTML to #scene-engine
  const sceneEngineHTML = document.getElementById('scene-engine');

  sceneEngineHTML.innerHTML = motionEngineHTML;
}
