//  Lesson: Introduction to the Application Core                    
//  Task:   Create a new application                                
//  Task:   Add the meta data to the application         

//  Create a new Application
const app = new App({
    metaData : {
        name: 'Augmentd!',
        version: '9.1.2',
        description: 'This is the coolest',
        developer: 'Edweird',
        company: 'AR Us',
    },
    backgroundColor : '#4d0fb1',
    debug: true
});

// Create a new timeline
const timeline = new Timeline();


//-------------------------------//
// Add Timeline Steps Here

const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: 'pink',
    textColor: 'black',
    buttonColor: 'green',
    popupBackgroundColor: 'yellow',
    title: 'Screen Title',
    content: `
        <img src="https://placekitten.com/200/300" />
        <p>This is the screen content</p>
    `,
    buttonText: `Click Me!`,
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