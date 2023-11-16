let gameSettings = {
    debug: {
        boundingBoxes: true,
        fps: true,
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


// Add this code 
const catImage = new Image();
catImage.src = 'cat.jpg';
catImage.width = 30;
catImage.height = 30;


let gameObjects = [
    new TrackingObject(
        catImage,
        position= {
            x:500,
            y: 500,
        },
        size = {
            width: 30,
            height: 30,
        },
        

        {
            gravity: 0,
            velocity: {
                x: 0,
                y: 0,
            },
            acceleration: {
                x: 0,
                y: 0,
            },
        },
    ),
];





let gameCanvas = document.getElementById('game-canvas');
let ctx = gameCanvas.getContext('2d');

//  #game-canvas
let gameEngine = new GameEngine(
    gameCanvas,
    ctx,
    gameSettings,
    gameObjects
);


gameEngine.addGameObject = (gameObject) => { 
    console.log('addGameObject');
    this.gameObjects.push(gameObject);
}




gameEngine.init();