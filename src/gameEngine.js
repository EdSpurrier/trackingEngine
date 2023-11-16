class GameSettings {
    // create settings
    settings = {
        debug: {
            boundingBoxes: false,
            fps: false,
        },
        game: {
            active: true,
        },
        background: {
            color: 'black',
        },
        physics: {
            gravity: {
                x: 0,
                y: 0,
            },
        },
    };

    constructor(settings) {
        // create settings and update them
        this.settings = {
            ...settings,
        };
    }


    updateSettings(settings)   {
        // update settings
        this.settings = {
            ...this.settings,
            ...settings,
        };
    }
}





class GameEngine {

    constructor(canvas, ctx, gameSettings) {
        console.log('GameEngine');
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameSettings = gameSettings;

        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
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
        if (this.gameSettings.debug.fps) {
            // Add black background to text
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.canvas.width - 100, this.canvas.height - 40, 100, 40);
            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "green";
            this.ctx.textAlign = "center";            
            this.ctx.fillText(this.fps, this.canvas.width - 50, this.canvas.height - 10);
        } 
    }




    

    renderDebug = () => {
        //  render debug
        rFpsCounter();
    }



    updateSystem = () => {
        //  calculate fps
        this.calculateFps();
    }

    renderFrame = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.gameSettings.background.color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderFpsCounter();
    }

    loop = () => {
        this.updateSystem();
        
        this.renderFrame();

        requestAnimationFrame(this.loop);
    }


    init = () => {
        console.log('init');
        this.loop();
    }
}



