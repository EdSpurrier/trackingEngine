
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
        system.debugConsoleLog(this.constructor.name, `Screen[${this.name}] Init`)
        this.render();
    }
    
}