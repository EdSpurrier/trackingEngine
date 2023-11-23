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


//  Create a new scene
const scene = new Scene({
    name: 'Simple Mouse Tracking Scene',
    backgroundColor: '#1f1f22',
    motionTrackers: [],
    triggerZones: [],
});




// Add new scene to timeline
timeline.addTimelineStep(scene);










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





// End of Timeline Steps
//-------------------------------//





// Add the timeline to the application
app.addTimeline(timeline);

// Initialize application
app.init();