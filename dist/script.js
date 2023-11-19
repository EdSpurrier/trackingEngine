


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
timeline.addTimelineStep(
    new Screen({
/*         name: 'Screen Name',
        settings: {
            backgroundColor: '#39FF14',
        },
        content: {
            title: 'Screen Title',
            body: 'Screen Body',
            button: 'Screen Button',
        } */
    })
);


app.addTimeline(timeline);

app.init();