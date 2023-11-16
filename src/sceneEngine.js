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

class SceneEngine {





    constructor(sceneSettings) {
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
}, 5000);



