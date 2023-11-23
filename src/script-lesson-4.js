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
    backgroundColor : '#3a00a7',
    debug: true
});

// Create a new timeline
const timeline = new Timeline();


//-------------------------------//
// Add Timeline Steps Here

// Create a new screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    textColor: 'black',
    buttonColor: 'green',
    popupBackgroundColor: 'yellow',
    title: 'Screen Title',
    content: `This is the screen content`,
    buttonText: 'Click Me!',
    debug: true,
});

// Add the screen as a step to the timeline
timeline.addTimelineStep(screen);





// End of Timeline Steps
//-------------------------------//





// Add the timeline to the application
app.addTimeline(timeline);

// Initialize application
app.init();