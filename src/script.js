//  Create a new Application
const app = new App({
    metaData : {
        name: 'Pose Tracker',
        version: '1.5.1',
        description: 'AR Pose Game',
        developer: 'Ed Spurrier',
        company: 'Slayd Tech',
    },
    backgroundColor : '#161111',
    debug: true
});





// Create a new Timeline
const timeline = new Timeline();


//  Create a new scene
const scene = new Scene({
    name: 'Simple Mouse Tracking Scene',
    backgroundColor: '#333',
});


const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'hand',
});

// Add the motion tracker to the scene
scene.addSceneObject(motionTracker);

const motionTracker2 = new MotionTracker({
    radius: 30,
    color: '#2600ff',
    trackingType: 'hand',
});

// Add the motion tracker to the scene
scene.addSceneObject(motionTracker2);



//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: 50,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'hand',
});


// Add the trigger zone to the scene
scene.addSceneObject(triggerZone);


// Add the scene to the timeline
timeline.addTimelineStep(scene);


//  Create new app screen
const finishScreen = new Screen({
    name: 'Complete',
    textColor: '#0d0053',
    backgroundColor: '#0d0053',
    popupBackgroundColor: '#0051ff',
    buttonColor: '#000000',
    title: 'Complete!',
    content: 'Well done thank you for using your app!',
    buttonText: '',
});

 
// Add new app screen to timeline
timeline.addTimelineStep(finishScreen);




// Add timeline to application
app.addTimeline(timeline);

// Initialize application
app.init();