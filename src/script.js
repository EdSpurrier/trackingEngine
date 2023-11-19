


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

//  Create new app screen
const screen = new Screen({
    name: 'Screen Name',
    backgroundColor: '#39FF14',
    popupBackgroundColor: '#003636',
    buttonColor: '#c300ff',
    content: {
        title: 'Screen Title',
        body: 'Screen Body',
        button: `Let's Go!`,
    }
});

// Add new app screen to timeline
timeline.addTimelineStep(screen);


//  Create a new scene

//  Create new app screen
const screen2 = new Screen({
    name: 'Screen Name',
    backgroundColor: '#0d0053',
    popupBackgroundColor: '#00ff6a',
    buttonColor: '#000000',
    content: {
        title: 'Screen 2',
        body: 'Screen Body',
        button: 'Screen Button',
    }
});

// Add new app screen to timeline
timeline.addTimelineStep(screen2);


// Add timeline to application
app.addTimeline(timeline);





// Initialize application
app.init();