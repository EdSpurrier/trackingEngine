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
};






let gameCanvas = document.getElementById('game-canvas');
let ctx = gameCanvas.getContext('2d');

//  #game-canvas
let gameEngine = new GameEngine(
    gameCanvas,
    ctx,
    gameSettings,
);


gameEngine.init();