let gameSettings = {
    fps: true,
    backgroundColor: 'black',
    gravity: 10,
};

let gameCanvas = document.getElementById('game-canvas');
let ctx = gameCanvas.getContext('2d');

//  #game-canvas
let gameEngine = new GameEngine(
    gameCanvas,
    ctx,
    gameSettings,
);



gameEngine.addGameObject(
    new TriggerZone(
        {
            percentageX: 50,
            percentageY: 50,
            radius: 50,
            inactiveColor: '#0d1636',
            activeColor: 'green'
        }
    )
)


 
gameEngine.addGameObject(
    new MotionTracker(
        {
            radius: 20,
            color: 'red',
            trackingType: 'mouse',
        }
    )
    
)



//  Init gameEngine after all gameObjects have been added
gameEngine.init();