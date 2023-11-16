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
    new TargetPoint(
        700,
        500,
        50,
        '#0d1636',
        'green'
    )
)


const mouseTracker = new TrackingPoint(
    500,
    500,
    20,
    'red',
    'green'
)



window.addEventListener('pointermove', (event) => {
    mouseTracker.setPosition(
        event.clientX,
        event.clientY
    )
})


gameEngine.addGameObject(
    mouseTracker
)



gameEngine.addGameObject(
    mouseTracker
)




gameEngine.init();