//  Lesson: Introduction to the Application Core                    
//  Task:   Create a new application                                
//  Task:   Add the meta data to the application         

//  Create a new Application
const app = new App({
    metaData : {
        name: 'Cool App!',
        version: '9.1.2',
        description: 'This is the coolest',
        developer: 'Edweird',
        company: 'AR Us',
    },
    backgroundColor : '#1b1525',
    debug: true
});

// Create a new timeline
const timeline = new Timeline();


//-------------------------------//
// Add Timeline Steps Here


// Create a new screen
const screen = new Screen({
    name: 'Title Screen',
    backgroundColor: '#1f2518',
    textColor: '#fff',
    buttonColor: '#205dcf',
    popupBackgroundColor: '#003636',
    title: 'Screen Title',
    content: `This is the screen content`,
    buttonText: 'Click Me!',
});

// Add the screen as a step to the timeline
timeline.addTimelineStep(screen);



//  Create a new scene
const scene = new Scene({
    name: 'Simple Mouse Tracking Scene',
    backgroundColor: '#333',
});

//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'mouse',
});


// Add the motion tracker to the scene
scene.addSceneObject(motionTracker);

//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: 75,
    percentageY: 75,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'mouse',
});



// Add the trigger zone to the scene
scene.addSceneObject(triggerZone);



//  Create a new trigger zone
const triggerZone2 = new TriggerZone({
    percentageX: 25,
    percentageY: 25,
    radius: 30,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'mouse',
});



// Add the trigger zone to the scene
scene.addSceneObject(triggerZone2);



// Add the scene to the timeline
timeline.addTimelineStep(scene);





// Create a new screen
const finalScreen = new Screen({
    name: 'Congratulations!',
    backgroundColor: '#1f2518',
    textColor: '#fff',
    buttonColor: '#205dcf',
    popupBackgroundColor: '#003636',
    title: 'Screen Title',
    content: `This is the screen content`,
    buttonText: '',
});

// Add the screen as a step to the timeline
timeline.addTimelineStep(screen);


// Add the screen as a step to the timeline
timeline.addTimelineStep(finalScreen);








// End of Timeline Steps
//-------------------------------//





// Add the timeline to the application
app.addTimeline(timeline);

// Initialize application
app.init();