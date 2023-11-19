


const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#000000',
});



const timeline = new Timeline();
/* 
//  Create new app screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    popupBackgroundColor: '#003636',
    buttonColor: '#c300ff',
    textColor: '#fff',
    content: {
        title: 'Screen Title',
        body: 'Screen Body',
        button: `Let's Go!`,
    }
});

// Add new app screen to timeline
timeline.addTimelineStep(screen);
 */


//  Create a new motion tracker
const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'mouse',
    settings: {
        hideCursor: false,
        alwaysDisplay: false,
    }
});

//  Create a new trigger zone
const triggerZone = new TriggerZone({
    percentageX: 50,
    percentageY: 50,
    radius: 40,
    inactiveColor: '#ff0000',
    activeColor: '#00ff00',
    triggerType: 'mouse',
});


//  Create a new scene
const scene = new Scene({
    name: 'Scene Name',
    background: {
        color: '#000000',
    },
    motionTrackers: [
        motionTracker,
    ],
    triggerZones: [
        triggerZone,
    ],
    debug: true,
});




// Add new scene to timeline
timeline.addTimelineStep(scene);





//  Create new app screen
const screen2 = new Screen({
    name: 'Screen Name',
    textColor: '#0d0053',
    backgroundColor: '#0d0053',
    popupBackgroundColor: '#00ff6a',
    buttonColor: '#000000',
    content: {
        title: 'Complete!',
        body: 'Well done thank you for using your app!',
        button: '',
    }
});

// Add new app screen to timeline
timeline.addTimelineStep(screen2);







// Add timeline to application
app.addTimeline(timeline);

// Initialize application
app.init();