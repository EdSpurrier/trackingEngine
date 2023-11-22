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

//-------------------------------//
// Add Timeline Steps Here

// End of Timeline Steps
//-------------------------------//


// Add timeline to application
app.addTimeline(timeline);


// Initialize application
app.init();