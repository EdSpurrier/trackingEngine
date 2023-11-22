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
        debug
    }) {
        this.metaData = metaData;
        this.backgroundColor = backgroundColor;
        this.debug = debug;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'App',
                properties: ['metaData', 'backgroundColor', 'debug'],
            })
        ) {
            return false;
        };

        system.domEngine.set
        system.domEngine.setAppBackgroundColor(this.backgroundColor);
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Constructed`);
    }

    addTimeline = (timeline) => {
        this.timeline = timeline;
        system.debugConsoleLog(this.constructor.name, 'Timeline Added');
    }



    init = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Init`);
        setTimeout(() => {
            system.setAppReady(this);
        }, 750);
    }


    start = () => {
        system.debugConsoleLog(this.constructor.name, `App ${this.metaData.name} Start`);
        if (this.timeline) {
            this.timeline.start();
        }
    }


}


