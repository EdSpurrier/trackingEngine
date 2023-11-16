// Description: GameEngine class
// Dependencies: gameObject.js
// Author: Ed Spurrier

// preset gamesettings for being added to in constructor

const presetGameSettings = {
    boundingBoxes: false,
    fps: false,
    backgroundColor: 'black',
    gravity: 10,
};


class GameEngine {

    constructor(canvas, ctx, gameSettings) {
        console.log('GameEngine');
        this.canvas = canvas;
        this.ctx = ctx;
        //  merge the presetGameSettings with the gameSettings passed in
        this.gameSettings = Object.assign(presetGameSettings, gameSettings);
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;

        this.gameObjects = [];

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
        if (this.gameSettings.fps) {
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

    

    addGameObject = (gameObject) => {
        gameObject.init(
            this.ctx,
        )
        this.gameObjects.push(gameObject);

    }


    updateSystem = () => {
        //  calculate fps
        this.calculateFps();

        //  update gameObjects
        this.gameObjects.forEach(gameObject => {
            gameObject.update(this.gameObjects);
        });
    }

    renderFrame = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.gameSettings.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //  render gameObjects
        this.gameObjects.forEach(gameObject => {
            gameObject.render();
        });
        

        this.renderFpsCounter();
    }

    loop = () => {
        this.resizeCanvas();
        this.updateSystem();
        
        this.renderFrame();

        requestAnimationFrame(this.loop);
    }



    init = () => {
        console.log('init');
        this.loop();
    }
}



