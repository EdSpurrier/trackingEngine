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
    
    constructor() {
        this.time.start = new Date();
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

    error = (name, message, data) => {
        this.errorLog.push({
            name: name,
            message: message,
            data: data,
        })
        this.log(`ERROR: ${name} - ${message} - ${data}`)
    }

    start = () => {

    }

    systemReady = () => {
        this.log('System Ready');
        this.domEngine.loading(false, this.start());
    }

    isSystemReady = () => {
        if (this.domEngine) {
            return true;
        } else {
            return false;
        }
    }

    startSystemReadyCheck = () => {
        let systemReady = false;
        let systemReadyCheck = setInterval(() => {
            if (this.isSystemReady()) {
                systemReady = true;
                clearInterval(systemReadyCheck);
                this.systemReady();
            }
        }, 100);
    }

    init = () => {
        this.domEngine = new DomEngine();
        this.timeline = new Timeline();

        this.startSystemReadyCheck();
    }

}

system = new System();
system.init();