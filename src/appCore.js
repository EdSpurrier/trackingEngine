//  App Core 


// Create Class of AppCore
class App {

    metaData = {
        name: 'Application Name',
        version: '0.0.1',
        description: 'Description of the application',
        developer: 'Developer Name',
        company: 'Company Name',
    };
    

    
    constructor({
        metaData
    }) {
        this.metaData = metaData;
        system.log('App Core Constructed');
    }

    addTimeline = (timeline) => {
        this.timeline = timeline;
        system.log('Timeline Added');
    }

    init = () => {
        system.log('App Core Init');
    }


    start = () => {
        
        this.timeline.start();   
    }


}


