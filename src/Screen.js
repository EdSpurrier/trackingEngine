
class Screen {

    constructor({
        name,
        buttonColor,
        popupBackgroundColor,
        backgroundColor,
        content,
    }) {

        this.name = name;
        
        this.buttonColor = buttonColor,
        this.backgroundColor = backgroundColor,
        this.popupBackgroundColor = popupBackgroundColor,
        
        this.content = content;
        system.errorEngine.checkDefinedProperties({
            classObject: this,
            lesson: 'Screen',
            properties: ['name', 'content', 'buttonColor', 'backgroundColor', 'popupBackgroundColor'],
        });

        system.log('Screen Constructed')
    }

    
    backgroundColor= '#39FF14'
    buttonColor= '#c300ff'

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