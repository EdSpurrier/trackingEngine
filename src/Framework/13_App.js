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
    backgroundColor = '#0a4100';
    

    
    constructor({
        metaData,
        backgroundColor,
    }) {
        this.metaData = metaData;
        this.backgroundColor = backgroundColor;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'App',
                properties: ['metaData', 'backgroundColor'],
            })
        ) {
            return false;
        };

        system.domEngine.setAppBackgroundColor(this.backgroundColor);
        system.log('App Core Constructed');
    }

    addTimeline = (timeline) => {
        this.timeline = timeline;
        system.log('Timeline Added');
    }



    init = () => {
        system.log('App Core Init');
        setTimeout(() => {
            system.setAppReady();
        }, 750);
    }


    start = () => {
        system.log('App Start');
        this.timeline.start();   
    }


}


