/* 
class SceneObject {
    name = 'SceneObject'
    object = null; // the object that is being rendered (TriggerZone or MotionTracker)
    layer = 0; // the layer that the object is rendered on
    constructor({
        name,
        object,
        layer,
    }) {
        this.name = name;
        this.object = object;
        this.layer = layer;
        this.init();
    }

    init = () => {
        system.log(`SceneObject ${this.name} init`);
        this.object.init();
    }

    update = () => {
        system.log(`SceneObject ${this.name} update`);
        this.object.update();
    }

    render = () => {
        system.log(`SceneObject ${this.name} render`);
        this.object.render();
    }

} */


class SceneEngine {
    fps = 0;


    constructor({
        sceneObjects,
        background,
        scene,
        debug,
    }) {

        this.background = background;
        this.sceneObjects = sceneObjects;
        this.scene = scene;
        this.debug = debug;


        const { canvas, ctx } = system.domEngine.getCanvas('scene');
        
        this.canvas = canvas;
        this.ctx = ctx;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        system.domEngine.onWindowResize(this.resizeCanvas);

        system.log('SceneEngine Constructed');
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
        if (this.debug) {
            // Add black background to text
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.canvas.width - 100, this.canvas.height - 40, 100, 40);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "green";
            this.ctx.textAlign = "center";            
            this.ctx.fillText(this.fps, this.canvas.width - 50, this.canvas.height - 10);
        } 
    }

    // On resize of canvas recalculate positions of objects
    resizeCanvas = () => {
        return;
        /* this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight; */
        this.canvas.relativeSize = {
            width: this.canvas.width / 100,
            height: this.canvas.height / 100,
        }
        this.canvas.center = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
        }

        this.canvas.ratio = this.canvas.width / this.canvas.height;



       /*  this.sceneObjects.forEach(sceneObject => {
            sceneObject.calculateCanvasPosition();
        }) */


    }

    refreshSceneObjects = () => {
        this.orderSceneObjects();
    }


    orderSceneObjects = () => {
        this.sceneObjects.sort((a, b) => {
            return a.layer - b.layer;
        })
    }

    addSceneObject = (sceneObject) => {
        sceneObject.init(
            this.ctx,
            this.canvas,
        )
        this.sceneObjects.push(sceneObject);
        this.refreshSceneObjects();
    }

    destroyObject = (objectName) => {
        this.sceneObjects.forEach((sceneObject, index) => {
            if (sceneObject.name === objectName) {
                sceneObject.destroy();
                this.sceneObjects.splice(index, 1);
            }
        })
        this.refreshSceneObjects();
    }

    renderBackground = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.background.color && this.background.color !== '') {
            this.ctx.fillStyle = this.background.color;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        if (this.background.image && this.background.image !== '') {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.background.image, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.background.image, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        };
        if (this.background.video && this.background.video !== '') {
            const imageCoverSize = system.domEngine.getImageCoverSize(this.background.video, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.background.video, imageCoverSize.x, imageCoverSize.y, imageCoverSize.width, imageCoverSize.height);
        };
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

        this.renderBackground();

        //  render sceneObjects in layer order
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.render();
        });
        
        this.renderFpsCounter();
    }

    loop = () => {
        this.resizeCanvas();
        this.updateSystem();
        
        this.renderFrame();
        this.scene.update();
        requestAnimationFrame(this.loop);
    }

    stop = () => {
        this.loop = () => {};
    }

    init = (scene) => {
        
        this.scene = scene;
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.init(
                this.ctx,
                this.canvas,
            )
        });
        this.loop();
        system.log('SceneEngine Initiated');
    }
}



//  Check after everyting in the whole site has finished loading and initiating and see if the sceneEngine is present
/* setTimeout(() => {
    teacher.lessonCheckState('sceneEngine', sceneEngineCreated && sceneEngineInit);
}, 2500);
 */

