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
        this.errorsEl = this.createDiv('errors', this.systemEl, ['hidden', 'bg-red-500', 'p-3', 'text-white', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-2']);

        this.lessonEl = this.createDiv('lesson', this.systemEl, ['z-100', 'text-center', 'hidden', 'bg-yellow-300', 'm-6', 'max-w-xl', 'text-black', 'text-sm', 'rounded-md', 'flex', 'flex-col', 'justify-center', 'items-center']);
    }

    lesson = (innerHTML) => {
        console.log('TeacherEngine lesson');

        this.lessonEl.innerHTML = innerHTML;
        this.lessonEl.classList.remove('hidden');
    }

    warnings = (message, data) => {
        this.warnings.push({message, ...data});
        console.warn(message, data);
    }

    error = (message, data) => {
        this.errors.push({message, data});
        console.error(message, data);
        this.updateElements();
    }

    updateElements = () => {
        console.log('SystemEngine updateElements');


        if (this.errors.length > 0) {
            this.errorsEl.classList.remove('hidden');
        } else {
            this.errorsEl.classList.add('hidden');
        }
        // update errors
        this.errorsEl.innerHTML = '<div class="font-bold">Errors</div>';
        this.errorsEl.innerHTML += this.errors.map(error => {
            return `<div>${error.message}</div>`;
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

class LessonPoint {
    constructor(
        name,
        description,
        hyperLink,
        checkLessonPoint,
    ) {
        this.name = name
        this.description = description
        this.hyperLink = hyperLink
        this.checkLessonPoint = checkLessonPoint
    }
}



const lessonPoints = [
    new LessonPoint(
        'GameObjects',
        'How to add a game object to the game engine',
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.length > 0) ? true : false },
    ),

    new LessonPoint(
        'TrackingPoints',
        'How to add a Tracking Point to the scene.\nTracking Points are used to track the position of the mouse or a finger on a touch screen. Tracking Points can be used to trigger events when the mouse or finger is over a specific area of the screen.',
        'https://sites.google.com/view/adm6002/home',
        (gameEngine) => { return (gameEngine.gameObjects.filter(
            (gameObject) => { return gameObject instanceof TrackingPoint }
        ).length > 0) ? true : false },
    ),

]






class TeacherEngine {
    constructor() {
        console.log('TeacherEngine Constructed')
    }

    showLesson = (lessonId, lessonPoint) => {
        const lessonHTML = `
            <div class="text-lg text-black border-2 bg-yellow-500 rounded-t-md border-yellow-600 w-full py-4">Lesson #${lessonId}: ${lessonPoint.name}</div>
            <div class="mx-6 my-8">${lessonPoint.description}</div>
            <button class="bg-slate-900 text-yellow-300 mb-10 py-3 px-6 rounded-md font-bold"><a href="${lessonPoint.hyperLink}" target="_blank">Read More</a></button>
        `
        system.lesson(lessonHTML)
    }


    checkLessonPoint = (gameEngine) => {
        let lessonId = 1;
        lessonPoints.forEach(lessonPoint => {
            if (!lessonPoint.checkLessonPoint(gameEngine)) {
                gameEngine.stop();
                this.showLesson(lessonId, lessonPoint);
                console.log('Lesson Point Not Checked')
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




    init = () => {
        console.log('TeacherEngine init')
    }
}

let teacher = new TeacherEngine();
teacher.init();

const userInterface = (() => {
  const uiElement = document.querySelector('#userInterface');

  const createDiv = (id, className) => {
    const div = document.createElement('div');
    div.id = id;
    div.className = className;
    uiElement.appendChild(div);
    return div;
  };

  const createActionBtn = (id, className, text, onClick) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    uiElement.appendChild(btn);
    return btn;
  };

  const createToggleBtn = (id, className, text, onToggle) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = className;
    btn.textContent = text;
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      onToggle(btn.classList.contains('active'));
    });
    uiElement.appendChild(btn);
    return btn;
  };

  const updateDiv = (id, className) => {
    const div = document.getElementById(id);
    div.className = className;
  };

  const updateUserInterface = () => {
    // TODO: update user interface elements as needed
  };

  return {
    createDiv,
    createActionBtn,
    createToggleBtn,
    updateDiv,
    updateUserInterface,
  };
})();


class TrackingPoint {
    name = 'TrackingPoint'
    constructor(radius, color) {
        this.radius = radius
        this.color = color
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
        this.canvas = canvas
        this.ctx = ctx
    }
}


class TargetPoint {
    name = 'TargetPoint'

    checkSetup = () => {
        if (this.percentageX > 100 || this.percentageX < 0) {
            system.error(`${this.name}: percentageX must be between 0 and 100`, this.percentageX)
        }
        if (this.percentageY > 100 || this.percentageY < 0) {
            system.error(`${this.name}: percentageY must be between 0 and 100`, this.percentageY)
        }
    }

    constructor(percentageX, percentageY, radius, inactiveColor, activeColor) {
        this.percentageX = percentageX
        this.percentageY = percentageY
        this.radius = radius
        this.inactiveColor = inactiveColor
        this.color = inactiveColor
        this.activeColor = activeColor
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

    checkCollisions = (gameObjects) => {
        gameObjects.forEach((gameObject) => {
            if (gameObject instanceof TrackingPoint) {
                let dx = gameObject.x - this.x
                let dy = gameObject.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < gameObject.radius + this.radius) {
                    this.color = this.activeColor
                } else {
                    this.color = this.inactiveColor
                }
            }
        })
    }


    update = (gameObjects) => {
        this.checkCollisions(gameObjects)
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
            this.canvas,
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
        teacher.checkLessonPoint(this);
        this.resizeCanvas();
        this.updateSystem();
        
        this.renderFrame();

        requestAnimationFrame(this.loop);
    }

    stop = () => {
        this.loop = () => {};
    }

    init = () => {
        console.log('init');
        this.loop();
    }
}



