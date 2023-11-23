//  Create a new Application
const app = new App({
    metaData : {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
    backgroundColor : '#000000',
    debug: true
});





// Create a new Timeline
const timeline = new Timeline();




const motionTracker = new MotionTracker({
    radius: 30,
    color: '#00b7ff',
    trackingType: 'hand',
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
    triggerType: 'hand',
});





//  Create new app screen
const finishScreen = new Screen({
    name: 'Complete',
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
timeline.addTimelineStep(finishScreen);




// Add timeline to application
app.addTimeline(timeline);

// Initialize application
app.init();