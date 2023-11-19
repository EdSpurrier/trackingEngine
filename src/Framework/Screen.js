
class Screen {

    constructor({
        name,
        buttonColor,
        textColor,
        popupBackgroundColor,
        backgroundColor,
        content,
    }) {

        this.name = name;
        
        this.textColor = textColor,
        this.buttonColor = buttonColor,
        this.backgroundColor = backgroundColor,
        this.popupBackgroundColor = popupBackgroundColor,
        this.content = content;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Screen',
                properties: ['name', 'textColor', 'content', 'buttonColor', 'backgroundColor', 'popupBackgroundColor'],
            })
        ) {
            return false;
        };
        
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