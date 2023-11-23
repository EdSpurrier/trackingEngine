
class Screen {

    constructor({
        name,
        buttonColor,
        textColor,
        popupBackgroundColor,
        backgroundColor,
        title,
        content,
        buttonText,
    }) {

        this.name = name;
        
        this.textColor = textColor,
        this.buttonColor = buttonColor,
        this.backgroundColor = backgroundColor,
        this.popupBackgroundColor = popupBackgroundColor,
        this.content = content;
        this.title = title;
        this.buttonText = buttonText;
        
        console.log('Screen', this);
        system.debugConsoleLog(this.constructor.name, `Screen ${this.name} Constructed`)
    }

    
    backgroundColor= '#39FF14'
    buttonColor= '#c300ff'

    screenStateActive = () => {
        system.log(this.constructor.name,`Screen[${this.name}] Active`)
    }


    complete = (callBack) => {
        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Complete`)
        system.domEngine.hideScreen(() => {
            callBack();
        });
    }

    reset = () => {
        system.log(this.constructor.name,`Screen[${this.name}] Reset`)

    }

    render = () => {
        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Render`)
        system.domEngine.renderScreen(this, this.screenStateActive);
    }

    init = () => {

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Screen',
                properties: ['name', 'title', 'textColor', 'content', 'buttonColor', 'backgroundColor', 'popupBackgroundColor', 'buttonText'],
            })
        ) {
            return false;
        };

        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Init`)
        this.render();
    }
    
}