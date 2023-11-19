


const app = new App(
    metaData = {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    },
);



const timeline = new Timeline();

//  Create new app screen
const screen = new Screen({
    name: 'Screen Name',
    settings: {
        backgroundColor: '#39FF14',
    },
    content: {
        title: 'Screen Title',
        body: 'Screen Body',
        button: 'Screen Button',
    }
});

// Add new app screen to timeline
timeline.addTimelineStep(screen);


//  Create a new scene




// Add timeline to application
app.addTimeline(timeline);





// Initialize application
app.init();