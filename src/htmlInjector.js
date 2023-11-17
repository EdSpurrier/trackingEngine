
// Insert CSS
const motionEngineCSS = `
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100%;
  font-size: 12px;
  font-family: CurseCasual, Arial, Helvetica, sans-serif;
  background-color: rgb(31, 31, 31);
  color: #333;
  overflow: hidden;
  touch-action: none;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.layer-top {
  z-index: 100;

}

.layer-middle {
  z-index: 50;
}

.layer-back {
  z-index: 0;
}

#scene-canvas {
  height: 100vh;
  width: 100vw;
}

#system {
  overflow: auto;
  position: fixed;
}

.debug {
  border: 2px solid green;
}

.canvasbox {
    position: absolute;
    border-radius: 3px;
    width: 250px;
    height: 200px;
    box-shadow: 0 2px 3px 0 rgb(0, 0, 0), 0 4px 10px 0 #00000030;
    background: #333;
}


#tracking-container {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  width: 250px;
  height: 200px;
}



.outputData {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  background: rgba(0, 0, 0, 0.2);
}

`;

const style = document.createElement('style');
style.innerHTML = motionEngineCSS;
document.head.appendChild(style);



//  Inject HTML
const motionEngineHTML = `
    <div class="layer layer-middle">
        <div id="tracking-container">
            <video class="videobox canvasbox" autoplay="autoplay" id="webcam-video"></video>
            <canvas id="tracking-canvas" class="canvasbox"></canvas>
        </div>
    </div>

    <div id="system" class="layer layer-top flex flex-col justify-center items-center w-full h-full bg-gray-900 bg-opacity-70 hidden"></div>

    <canvas id="scene-canvas" class="layer layer-bottom"></canvas>
`;


//  Add HTML to #scene-engine
const sceneEngineHTML = document.getElementById('scene-engine');

sceneEngineHTML.innerHTML = motionEngineHTML;

