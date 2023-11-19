

class Error {
    constructor({
        className,
        name,
        message,
        lesson,        
        conditions,
    }) {
        this.className = className;
        this.name = name;
        this.message = message;
        this.lesson = lesson;
        this.conditions = {
            defined: [],   //  List of properties that must be defined
        }
        
        system.log('Error Constructed')
    }

    check = () => {
        system.log('Error Check')
        system.errorEngine.checkError(this);
    }

}





class ErrorEngine {
    errors = []

    constructor() {
        system.log('ErrorEngine Constructed')
    }

    checkStates = ({
        classObject,
        lesson,
        states
    }) => {
        const className = classObject.constructor.name;
        system.log(`[ErrorEngine] Check States 🠪 (${className} ⇋ ${lesson})`)

        let noErrors = true;

        states.forEach((state) => {
            if (!state) {
                system.error(className, 'Incorrect Setup', lesson);
                noErrors = false;
            }
        });

        return noErrors;
    }


    checkDefinedProperties = ({
        classObject,
        lesson,
        properties
    }) => {
        const className = classObject.constructor.name;
        console.log(classObject)
        system.log(`[ErrorEngine] Check Defined Properties 🠪 (${className} ⇋ ${lesson})`)


        console.log(properties);
        let noErrors = true;

        properties.forEach((property) => {
            const definedState = classObject[property] !== undefined;
            system.log(`[ErrorEngine] Property (${property} ⇋ ${definedState})`);
            if (!definedState) {
                system.error(className, property, lesson);
                noErrors = false;
            }
        });

        return noErrors;
    }

}