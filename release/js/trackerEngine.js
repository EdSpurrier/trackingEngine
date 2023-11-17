
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

.tracking-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#tracking-container {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  width: 250px;
  height: 200px;
}

.updatenote {
  padding: 5px;
  background: rgba(245, 147, 20, 0.25);
  color: white;
  display: flex;
  font-size: 10px;
}

#trackbutton{
  padding: 7px 10px;
  text-align: right;
  cursor: pointer;
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
            <canvas id="canvas" class="canvasbox"></canvas>
            <div class="tracking-controls">
            <div id="updatenote" class="updatenote"> loading model ..</div>
            <button onclick="toggleVideo()" id="trackbutton">
                <i class="fa-solid fa-camera" style="color: #ffac38;"></i>
            </button>
            </div>
        </div>
    </div>

    <div id="system" class="layer layer-top flex flex-col justify-center items-center w-full h-full bg-gray-900 bg-opacity-70 hidden"></div>

    <canvas id="scene-canvas" class="layer layer-bottom"></canvas>
`;


//  Add HTML to #scene-engine
const sceneEngineHTML = document.getElementById('scene-engine');

sceneEngineHTML.innerHTML = motionEngineHTML;



class SystemEngine {
    constructor() {
        this.systemEl = document.getElementById('system');
        console.log(`SystemEngine Connected #${this.systemEl.id}`);
        this.errors = [];
        this.warnings = [];
        this.createElements();
    }

    createDiv = (id, parent, classes) => {
        const div = document.createElement('div');
        
        classes.forEach(className => {
            div.classList.add(className);
        });
        
        div.id = id;
        parent.appendChild(div);
        return div;
    }


    createElements = () => {
        console.log('SystemEngine createElements');
        this.errorsEl = this.createDiv('errors', this.systemEl, ['absolute', 'top-0', 'z-100', 'hidden', 'bg-red-500', 'm-6', 'py-5', 'text-white', 'text-sm', 'max-w-md', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-4', 'w-full']);

        this.lessonEl = this.createDiv('lesson', this.systemEl, ['absolute', 'top-0', 'z-100', 'text-center', 'hidden', 'bg-yellow-300', 'm-10', 'max-w-xl', 'text-black', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center']);
    }

    lesson = (innerHTML) => {
        console.log('TeacherEngine lesson');

        this.lessonEl.innerHTML = innerHTML;
        if(this.errors.length > 0) {
            return;
        }
        this.lessonEl.classList.remove('hidden');
        this.systemEl.classList.remove('hidden');
    }

    warnings = (message, data) => {
        this.warnings.push({message, ...data});
        console.warn(message, data);
    }

    error = (className, message, data) => {
        this.errors.push({
            className: className, 
            message: message,          
            data: data, 
        });
        console.error(className, message, data);
        this.updateElements();
    }

    systemError = (data) => {
        this.errors.push({
            className: 'ERROR', 
            message: 'Please Check the Console in the Lower Left.<br />Remember ChatGPT is the best tool avaliable to solve your Errors.<br /><br /><a href="https://chat.openai.com/" class="underline" target="_blank">ChatGPT Click Here</a>',          
            data: data, 
        });
        this.updateElements();
    }

    updateElements = () => {
        console.log('SystemEngine updateElements');


        if (this.errors.length > 0) {
            this.errorsEl.classList.remove('hidden');
            this.systemEl.classList.remove('hidden');
            this.lessonEl.classList.add('hidden');
        } else {
            this.errorsEl.classList.add('hidden');
            this.systemEl.classList.add('hidden');
        }

        console.log(this.errors)
        // update errors
        this.errorsEl.innerHTML = '<div class="text-lg">Errors</div>';
        this.errorsEl.innerHTML += this.errors.map(error => {
            
            let html = `<div class="w-full p-2 border-y-2 border-slate-600 flex flex-col justify-center items-center gap-4 py-2">`;
            console.log(html)

            html += `<div class="text-bold underline">${error.className}</div>`;
            
            html += `<div>${error.message}</div>`;
            
            if (error.data) {
                html += `<div class="text-xs">DATA = ${JSON.stringify(error.data)}</div>`;
            }
            html += `</div>`;
            

            return html;

        }).join('');
        
    }


    alert = (message) => {
        alert(message);
    }

    popup = (message) => {
        console.log('SystemEngine popup');

        this.systemEl.innerHTML = message;
    }

    init = () => {
        console.log('SystemEngine init');
    }

}

let system = new SystemEngine();

system.init();


// capture every error in the console

window.onerror = function (message, url, lineNumber) {
    //   check if it is a serious error or can continue





    console.log(message, url, lineNumber);
    system.systemError([message, url, lineNumber]);
    return true;
};

class LessonPoint {
    constructor(
        lesson = {
            name,
            description,
            code,
            steps,
            checkLessonPoint,
        }
    ) {
        this.name = lesson.name
        this.description = lesson.description
        this.code = lesson.code
        this.steps = lesson.steps
        this.checkLessonPoint = lesson.checkLessonPoint
    }
}



const lessonPoints = [


    new LessonPoint({

        name: 'sceneEngine',
        description: `
            <b>How to create a SceneEngine</b><br />
            <br />
            The SceneEngine is the engine that runs the scene.<br />
            The SceneEngine is used to:<br />
            - Add SceneObjects to the scene<br />
            - Start and Stop the scene<br />
            - Render the scene<br />
            - Resize the scene<br />
            <br />
            The SceneEngine constructor takes in the sceneSettings.<br />
            <br />
            The sceneSettings are used to set the:<br />
            - background color<br />
            - fps(frames per second) counter<br />
            <br />
            The sceneSettings are passed into the SceneEngine constructor.<br />
            <br />
        `,

        code: [
            `<span class="text-green-500">let sceneEngine = new SceneEngine();`,
            ``,
            ``,
            `sceneEngine.init()</span>`
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `sceneEngine.init() should  <b>always be the last</b> function to call at the end of your <b>'JS'</b>`,
            `Then Save & Reload`,
            `A green screen should appear`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: () => { return (!sceneEngineCreated || !sceneEngineInit) },
    }),

    new LessonPoint({

        name: 'sceneSettings',
        description: `
            <b>When we create our Scene we must give it settings.<br /></b>
            <br />
            This is how to set the scene settings.<br />
            The scene settings are used to set the:<br />background color, and fps(frames per second) counter.<br />
            The scene settings are passed into the SceneEngine constructor.<br />
            <br />
        `,

        code: [
            `let sceneSettings = {`,
            `    fps: true,`,
            `    backgroundColor: 'black',`,
            `};`,
            ``,
            `let sceneEngine = new SceneEngine(`,
            `    sceneSettings,`,
            `);`,
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `The background color should change to black`,
            `The FPS counter should appear in the bottom left corner`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => { return (sceneEngine.sceneSettings.backgroundColor !== '#39FF14') ? true : false },
    }),

    new LessonPoint({
        name: 'MotionTracker',
        description: `
        How to add a Motion Tracker to the scene.\nMotion Trackers are used to track the position of a body part or point. Motion Trackers can be used to trigger events.
        `,

        code: [
            `sceneEngine.addSceneObject(`,
            `    new MotionTracker(`,
            `        {`,
            `            radius: 20,`,
            `            color: 'red',`,
            `            trackingType: 'mouse',`,
            `        }`,
            `    )`,
            `)`,
        ],

        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `A red circle should appear on the screen`,
            `and follow your mouse`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => {
            return (sceneEngine.sceneObjects.filter(
                (sceneObject) => { return sceneObject instanceof MotionTracker }
            ).length > 0) ? true : false
        },
    }),

    new LessonPoint({
        name: 'TriggerZone',
        description:  `
        Now we need to create a TriggerZone.<br/> A trigger zone is used to trigger an action by detecting when an object has entered its bounds.<br />
        We will be creating a Trigger Zone so that when out Motion Tracker enters the zone it will perform an action.<br />
        How to add a Trigger Zone to the scene.<br />Trigger Zone can be used to trigger events when a certain MotionTracker within the Collider Bounds of the Trigger Zone.`,

        code: [
            `<span class="text-warning">sceneEngine.addSceneObject</span>(`,
            `    new TriggerZone(`,
            `        {`,
            `            percentageX: 50,`,
            `            percentageY: 50,`,
            `            radius: 50,`,
            `            inactiveColor: '#0d1636',`,
            `            activeColor: 'green'`,
            `        }`,
            `    )`,
            `)`,
        ],
        steps: [
            `Make these changes in the <b>'JS' panel (on the left)</b>`,
            `Then Save & Reload`,
            `A blue circle should appear on the screen`,
            `And turn green when the MotionTracker enters it`,
            `Modify these as you wish`,
        ],
        checkLessonPoint: (sceneEngine) => {
            return (sceneEngine.sceneObjects.filter(
                (sceneObject) => { return sceneObject instanceof TriggerZone }
            ).length > 0) ? true : false
        },
        }),
]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    lessonActive = false

    showLesson = (lessonId, lessonPoint) => {
        this.lessonActive = true;
        if (app.sceneEngine) app.sceneEngine?.stop();
        

        let lessonHTML = `
            <div class="text-lg text-black border-2 bg-yellow-500 rounded-t-md border-yellow-600 w-full py-4">Lesson #${lessonId}: ${lessonPoint.name}</div>
            <div class="mx-6 mt-8 mb-2">${lessonPoint.description}</div>
        `

        if (lessonPoint.code !== null) {
            lessonHTML += `<div class="mx-4"><div class="text-lg text-black bg-yellow-500 rounded-t-lg mt-4 py-3">Code:</div><div class="bg-gray-900 text-yellow-300 rounded-b-lg p-8 text-left"><pre>${lessonPoint.code.join('\n')}</pre></div></div>`
        }


        lessonHTML += `<i><div class="text-slate-900 mb-10 py-6 px-6 mx-10 mt-8 bg-yellow-400 rounded-md text-left">`
        lessonHTML += `<div class="text-lg text-black rounded-t-md font-bold pb-2">Steps:</div><div class="flex flex-col gap-1">`
        let stepId = 1;
        lessonPoint.steps.forEach(step => {
            lessonHTML += `<div><b class="mb-3">${stepId}.</b>  ${step}</div>`
            stepId++;
        })

        lessonHTML += `</div></div></i>`


        /*   if (lessonHTML.hyperLink !== null) {
              lessonHTML += `<button class="bg-yellow-300 text-slate-900 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>`
          }
   */
        system.lesson(lessonHTML)
    }




    lessonCheckState = (id, state) => {
        if (!state) {
            this.showLesson(id, lessonPoints[id]);
        }
    }

    checkLessonPoint = (sceneEngine) => {
        let lessonId = 1;

        lessonPoints.forEach(lessonPoint => {
            if (this.lessonActive) return false;

            if (!lessonPoint.checkLessonPoint(sceneEngine)) {
                this.showLesson(lessonId, lessonPoint);
                console.log(lessonPoint.name, 'Lesson Point Not Done')
                console.log(
                    'Lesson Point Name: ' + lessonPoint.name,
                    'Lesson Point Description: ' + lessonPoint.description,
                    'Lesson Point Lesson: ' + lessonPoint.lesson,
                )
                return false;
            }

            lessonId++;
        })

        return true;

    }

    pushLesson = (lessonName) => {
        console.log('TeacherEngine pushLesson')
        this.lessonActive = true;
        sceneEngine.stop();
        const lessonPoint = lessons.find(lesson => lesson.name === lessonName);
        this.showLesson(lessonId, lessonPoint);
        console.log(lessonPoint.name, 'Lesson Point Not Done')
        console.log(
            'Lesson Point Name: ' + lessonPoint.name,
            'Lesson Point Description: ' + lessonPoint.description,
            'Lesson Point Lesson: ' + lessonPoint.lesson,
        )
    }

    getLessonButton = (lessonName) => {
        sceneEngine.stop();
        const lessonPoint = lessonPoints.find(lesson => lesson.name === lessonName);
        return `<button class="bg-yellow-300 text-slate-900 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>`
    }



    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();
// Manages all the tracking logic





const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}



class TrackingEngine {
    model = null

    constructor(
        canvas,
        ctx,
        videoInput,
        
    ) {


    }


    init = () => {
        this.loop();
    }

    loop = () => {
        this.updateSystem();
        this.renderFrame();
        requestAnimationFrame(this.loop);
    }
}

// Description: SceneEngine class
// Dependencies: SceneObjects, TriggerZone, MotionTracker
// Author: Ed Spurrier

// preset scenesettings for being added to in constructor
const presetSceneSettings = {
    boundingBoxes: false,
    fps: false,
    backgroundColor: '#39FF14',
};


let sceneEngineCreated = false;
let sceneEngineInit = false;
let app = {};


class SceneEngine {





    constructor(sceneSettings) {
        app.sceneEngine = this;
        sceneEngineCreated = true;
        console.log('SceneEngine Constructing');

        this.canvas = document.getElementById('scene-canvas');
        this.ctx = this.canvas.getContext('2d');

        //  merge the presetSceneSettings with the sceneSettings passed in
        this.sceneSettings = Object.assign(presetSceneSettings, sceneSettings);
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;

        this.sceneObjects = [];

        teacher.lessonCheckState(1, (this.sceneSettings.backgroundColor !== '#39FF14'));
    }

    

    calculateFps =  () => {
        //  calculate fps
        this.now = Date.now();
        this.delta = this.now - this.then;
        this.then = this.now;
        this.interval = 1000 / this.delta;
        this.fps = Math.round(this.interval);
    }


    renderFpsCounter = () => {
        if (this.sceneSettings.fps) {
            // Add black background to text
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.canvas.width - 100, this.canvas.height - 40, 100, 40);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "green";
            this.ctx.textAlign = "center";            
            this.ctx.fillText(this.fps, this.canvas.width - 50, this.canvas.height - 10);
        } 
    }


    resizeCanvas = () => {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }

    

    addSceneObject = (sceneObject) => {
        sceneObject.init(
            this.ctx,
            this.canvas,
        )
        this.sceneObjects.push(sceneObject);

    }


    updateSystem = () => {
        //  calculate fps
        this.calculateFps();

        //  update sceneObjects
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.update(this.sceneObjects);
        });
    }

    renderFrame = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.sceneSettings.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //  render sceneObjects
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.render();
        });
        

        this.renderFpsCounter();
    }

    loop = () => {
        teacher.lessonCheckState(2, lessonPoints[2].checkLessonPoint(this));
        teacher.lessonCheckState(3, lessonPoints[3].checkLessonPoint(this));
        this.resizeCanvas();
        this.updateSystem();
        
        this.renderFrame();

        requestAnimationFrame(this.loop);
    }

    stop = () => {
        this.loop = () => {};
    }

    init = () => {
        sceneEngineInit = true;
        console.log('init');
        this.loop();
    }
}



//  Check after everyting in the whole site has finished loading and initiating and see if the sceneEngine is present
setTimeout(() => {
    teacher.lessonCheckState(0, sceneEngineCreated && sceneEngineInit);
}, 2500);





const trackingTypes = [
    'mouse',
    'face',
    'hand',
    'body',
]

class MotionTracker {
    name = 'MotionTracker'

    checkSetup = () => {
        console.log('trackingType', this.trackingType)


        if(trackingTypes.includes(this.trackingType) === false) {
            system.error(this.name, `trackingType must be set`, this.trackingType)
        }
        if(this.radius === undefined) {
            system.error(this.name, `radius must be set`, this.radius)
        }
        if(this.color === undefined) {
            system.error(this.name, `color must be set`, this.color)
        }
    }

    constructor(
        settings = {
            radius,
            color,
            trackingType,
        }) {
        this.radius = settings.radius
        this.color = settings.color
        this.trackingType = settings.trackingType
        
        this.checkSetup()
    }


    


    calculateCanvasPosition = () => {
        this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }

    storePercentagePosition = () => {
        this.percentageX = this.x / (this.canvas.width/100)
        this.percentageY = this.y / (this.canvas.height/100)
    }

    setPosition = (
        x,
        y,
    ) => {
        this.x = x
        this.y = y
    }

    update = () => {
    }

    render = () => {
        if(this.x && this.y) {
            this.draw()
        }
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
    }

    init = (ctx, canvas) => {

        if(this.trackingType === 'mouse') {
            window.addEventListener('pointermove', (event) => {
                this.setPosition(
                    event.clientX,
                    event.clientY
                )
            })
        }

        this.canvas = canvas
        this.ctx = ctx
    }
}


class TriggerZone {
    name = 'TriggerZone'

    checkSetup = () => {
        let error = false;
        if (this.percentageX > 100 || this.percentageX < 0) {
            system.error(this.name, `percentageX must be between 0 and 100`, this.percentageX)
            error = true;
        }

        if (this.percentageY > 100 || this.percentageY < 0) {
            system.error(this.name, `percentageY must be between 0 and 100`, this.percentageY)
            error = true;
        }
        if (this.radius === undefined) {
            system.error(this.name, `radius must be set`, this.radius)
            error = true;
        }
        if (this.inactiveColor === undefined) {
            system.error(this.name, `inactiveColor must be set`, this.inactiveColor)
            error = true;
        }
        if (this.activeColor === undefined) {
            system.error(this.name, `activeColor must be set`, this.activeColor)
            error = true;
        }
        if (this.color === undefined) {
            system.error(this.name, `color must be set`, this.color)
            error = true;
        }

        /* if (error) {
            teacher.pushLesson(this.name)
        } */
    }

    constructor(
        settings = {
            percentageX, percentageY, radius, inactiveColor, activeColor
        }) {
        this.percentageX = settings.percentageX
        this.percentageY = settings.percentageY
        this.radius = settings.radius
        this.inactiveColor = settings.inactiveColor
        this.color = settings.inactiveColor
        this.activeColor = settings.activeColor
        this.checkSetup()
    }

    calculateCanvasPosition = () => {
        this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }

    storePercentagePosition = () => {
        this.percentageX = this.x / (this.canvas.width/100)
        this.percentageY = this.y / (this.canvas.height/100)
    }

    checkCollisions = (sceneObjects) => {
        sceneObjects.forEach((sceneObject) => {
            if (sceneObject instanceof MotionTracker) {
                let dx = sceneObject.x - this.x
                let dy = sceneObject.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < sceneObject.radius + this.radius) {
                    this.color = this.activeColor
                } else {
                    this.color = this.inactiveColor
                }
            }
        })
    }


    update = (sceneObjects) => {
        this.checkCollisions(sceneObjects)
        this.storePercentagePosition()
    }


    render = () => {
        this.draw()
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
    }

    init = (ctx, canvas) => {
        this.ctx = ctx
        this.canvas = canvas
        this.calculateCanvasPosition()
    }
}
