
let face = {
  x: 0,
  y: 0,
  radius: 0,
  color: 'red',
}


class Ball {
  constructor(ctx, x, y, radius, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
  
  update = () => {
    this.draw()
  }
  
  draw = () => {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
  }
}


class Collision {
  constructor(canvas, ctx, target) {
    this.canvas = canvas
    this.ctx = ctx
    this.target = target
    
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
  
    this.position = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    }
    this.pointer = null
    
    window.addEventListener('pointermove', (event) => {
      this.position.x = event.clientX
      this.position.y = event.clientY
    })
  }
  
  getDistance = (x1, y1, x2, y2) => {
    let xDistance = x2 - x1
    let yDistance = y2 - y1
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }
  
  loop = () => {
    requestAnimationFrame(this.loop)
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.target.update()
    this.pointer.update()
    
    this.pointer.x = this.position.x
    this.pointer.y = this.position.y
    
    if (this.getDistance(this.target.x, this.target.y, this.pointer.x, this.pointer.y) < this.target.radius + this.pointer.radius) {
      this.target.color = 'tomato'
    }
    else {
      this.target.color = "black"
    }
  }
  
  init = () => {
    this.pointer = new Ball(this.ctx, 0, 0, 20, 'blue')
    
    this.loop()
  }
}

const canvasPixi = document.querySelector('#canvas-pixi')
const ctx = canvasPixi.getContext('2d')
const target = new Ball(ctx, innerWidth / 2, innerHeight / 2, 100, 'black')

new Collision(canvasPixi, ctx, target).init()


const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("updatenote");

let isVideo = false;
let model = null;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            updateNote.innerText = "Video started. Now tracking"
            isVideo = true
            runDetection()
        } else {
            updateNote.innerText = "Please enable video"
        }
    });
}

function toggleVideo() {
    if (!isVideo) {
        updateNote.innerText = "Starting video"
        startVideo();
    } else {
        updateNote.innerText = "Stopping video"
        handTrack.stopVideo(video)
        isVideo = false;
        updateNote.innerText = "Video stopped"
    }
}

let handData = document.getElementById("handData");


function runDetection() {
    model.detect(video).then(predictions => {
       /*  console.log("Predictions: ", predictions); */
        model.renderPredictions(predictions, canvas, context, video);

        const htmlContent = predictions.map(p => 
          `<div>
            ${p.label} : ${p.landmarks} [${p.bbox[0] + p.bbox[2] / 2}, ${p.bbox[1] + p.bbox[3] / 2}]
          </div>`).join("");

          handData.innerHTML = htmlContent;
          
          predictions.forEach(p => {
            if (p.label !== 'face') return;
            
            const x = p.bbox[0] + p.bbox[2] / 2;
            const y = p.bbox[1] + p.bbox[3] / 2;
            const radius = p.bbox[2] / 2;
            const color = 'red';
            new Ball(ctx, x, y, radius, color).update();
            
          });
          
        if (isVideo) {
            requestAnimationFrame(runDetection);
        }

    });
}


/* "Predictions: " // [object Array] (1)
[// [object Object] 
{
  "bbox": [
    281.2685775756836,
    84.30981159210205,
    159.00283813476562,
    210.60346126556396
  ],
  "class": 5,
  "label": "face",
  "score": "0.82"
}] */

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    updateNote.innerText = "Loaded Model!"
    trackButton.disabled = false
});
