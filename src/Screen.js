
class Screen {

    constructor({
        name,
        settings,
        content,
    }) {

        this.name = name;
        this.settings = settings;
        this.content = content;
        system.errorEngine.checkDefinedProperties({
            classObject: this,
            lesson: 'Screen',
            properties: ['name', 'settings', 'content'],
        });
        system.log('Screen Constructed')
    }

    settings = {
        backgroundColor: '#39FF14',
    }

    screenStateActive = () => {
        system.log(`Screen[${this.name}] Active`)
    }

    render = () => {
        system.log(`Screen[${this.name}] Render`)
        system.domEngine.renderScreen(this, this.screenStateActive);
    }

    init = () => {
        system.log(`Screen[${this.name}] Init`)
        this.render();
    }
    

}