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





class TrackingObject {
    constructor(
            image,
            position = {
                x: 0,
                y: 0,
            },
            size = {
                width: 0,
                height: 0,
            },
            physics = {
                weight: 0,
                gravity: {
                    x: 0,
                    y: 0,
                },
                velocity: {
                    x: 0,
                    y: 0,
                },
                acceleration: {
                    x: 0,
                    y: 0,
                },
            },
        ) {
        this.image = image;
        this.position = position;
        this.size = size;

        this.debug = {
            showBoundingRect: true,
            color: 'red',
            lineWidth: 1,
        };

        this.bounds = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        };

        this.physics = physics;
    }

    getCenterPoint() {
    }

    setPosition(x, y) {
        

    }

    updateBounds(x, y, width, height) {
        this.bounds = {
            x,
            y,
            width,
            height,
        };
    }

    draw() {
        console.log(this.ctx)
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);

        if (this.debug.showBoundingRect) {
            this.ctx.strokeStyle = this.debug.color;
            this.ctx.lineWidth = this.debug.lineWidth;
            this.ctx.strokeRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
        }
    }

    updatePhysics() {



        //  calculate new acceleration
        this.physics.acceleration.x = this.physics.weight * this.physics.gravity;
        this.physics.acceleration.y = this.physics.weight * this.physics.gravity;

        //  calculate new velocity
        this.physics.velocity.x += this.physics.acceleration.x;
        this.physics.velocity.y += this.physics.acceleration.y;

        
        //calculate new position
        this.position.x += this.physics.velocity.x;
        this.position.y += this.physics.velocity.y;

        //  update bounds
        this.updateBounds(this.position.x, this.position.y, this.width, this.height);
       
    }

    update() {
        this.updatePhysics();
        this.draw();
    }

    init(ctx, worldPhysics) {
        this.ctx = ctx;
        this.updateBounds(this.position.x, this.position.y, this.width, this.height);
        this.physics.gravity = worldPhysics.gravity;
        this.draw(ctx);
    }
}


class GameEngine {

    constructor(canvas, ctx, gameSettings, gameObjects) {
        console.log('GameEngine');
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameSettings = gameSettings;

        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.gameObjects = gameObjects;

        
    }


    calculateFps =  () => {
        //  calculate fps
        this.now = Date.now();
        this.delta = this.now - this.then;
        this.then = this.now;
        this.interval = 1000 / this.delta;
        this.fps = Math.round(this.interval);
    }


    //  if active show counter in bottom right of screen in green
    //  if not active hide counter
    updateFpsCounter = () => {
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

    loop = () => {
        //  calculate fps
        this.calculateFps();

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.gameObjects.forEach((gameObject) => {
            gameObject.update();
        });

        this.updateFpsCounter();

        requestAnimationFrame(this.loop);
        
    }


    init = () => {
        console.log('init');
        // initialize game objects
        this.gameObjects.forEach((gameObject) => {
            gameObject.init(this.ctx, this.gameSettings.physics);
        });

        this.loop();
    }
}



