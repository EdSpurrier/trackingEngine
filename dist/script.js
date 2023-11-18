let sceneSettings = {
    fps: true,
    backgroundColor: 'black',
};

let sceneEngine = new SceneEngine(
    sceneSettings,
);


sceneEngine.addSceneObject(
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

sceneEngine.addSceneObject(
    new MotionTracker(
        {
            radius: 20,
            color: 'red',
            trackingType: 'mouse',
        }
    )
)

/* sceneEngine.addSceneObject(
    new MotionTracker(
        {
            radius: 30,
            color: 'gold',
            trackingType: 'hand',
        }
    )
) */

//  Init sceneEngine after all sceneObjects have been added
sceneEngine.init();

let trackingEngine = new TrackingEngine();

trackingEngine.init();
