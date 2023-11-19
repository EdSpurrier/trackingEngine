/*
 * System is used to manage the System
 * Actions:
 * - Manage Debug
 * - Manage Loading Screen
*/


class System {
    settings = {
        debug: true,
    };
    consoleLog = [];
    errorLog = [];
    time = {
        start: new Date(),
        current: new Date(),
        elapsed: 0,
        deltaTime: 0,
    };
    active = false;
    

    constructor() {
        this.time.start = new Date();
        this.log('System Constructed')
    }
    
    calculateTime = () => {
        this.time.current = new Date();
        this.time.elapsed = this.time.current - this.time.start;
        this.time.deltaTime = this.time.elapsed / 1000;
    }

    log = (message) => {
        if (this.settings.debug) {
            this.consoleLog.push(message);
            console.log(message);
        }
    }

    classError = (className, message) => {
        let errorColor = "color:#d63118; font-weight:bold;";
        let classColor = "color:#18d6d6;";
        let messageColor = "color:#d69d18;";
        console.log(`%cERROR  %c${className} %c${message}`, errorColor, classColor, messageColor);

    }

    error = (name, message, lesson) => {
        this.errorLog.push({
            name: name,
            message: message,
            lesson: lesson,
        })
        this.log(`ERROR: ${name} - ${message}`)
        
        if (lesson) {
            this.teacherEngine.setActiveLesson(lesson);
        }

        this.domEngine.showError(name, message, lesson);

    }

    start = () => {
        app.start();
    }

    trySystemStart = () => {
        if (this.active && this.appReady) {
            this.log('-----------------------------');
            this.start();
        }
    }

    systemReady = () => {
        this.log('System Ready');
        this.active = true;
        this.domEngine.loading(false, this.trySystemStart());
    }


    isSystemReady = () => {
        if (
            this.domEngine &&
            this.teacherEngine
            ) {
            this.systemReady();
        } else {
            setTimeout(() => {
                this.isSystemReady();
            }, 100);
        }
    }

    setAppReady = () => {
        this.log('App Ready');
        this.appReady = true; 
        this.trySystemStart();
    }


    init = () => {
        this.domEngine = new DomEngine();
        this.teacherEngine = new TeacherEngine({
            course: course,
        });
        this.errorEngine = new ErrorEngine();
        system.log('System Initialized');
        this.isSystemReady();

        this.log('-----------------------------');
    }



}

system = new System();
system.init();