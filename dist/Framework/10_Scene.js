

class Scene {
    sceneEngine
    state = {
        active: false,
    }
    sceneError = false;


    constructor({
        name,
        backgroundColor,
        backgroundImage,
        triggerZones = [],
        motionTrackers = [],
        debug,
    }) {
        this.name = name;
        this.triggerZones = triggerZones;
        this.motionTrackers = motionTrackers;
        this.backgroundColor = backgroundColor;
        this.backgroundImage = backgroundImage;
        this.debug = debug;

        

        system.debugConsoleLog(this.constructor.name, `Scene ${this.name} Constructed`);
    }


    addSceneObject = (sceneObject) => {
        if (sceneObject instanceof TriggerZone) {
            this.triggerZones.push(sceneObject);
        } else if (sceneObject instanceof MotionTracker) {
            this.motionTrackers.push(sceneObject);
        }
    }


    checkAllTriggersTriggered = () => {
        return this.triggerZones.every((triggerZone) => {
            return triggerZone.triggered;
        });
    }

    update = () => {
        if (!this.state.active) {
            return;
        }

/*         if (this.countDownFrame > 0) {
            return;
        } */

        if(this.triggerZones.length === 0 || this.motionTrackers.length === 0) {
            return;
        }

        if (this.checkAllTriggersTriggered()) {
            this.state.active = false;
            this.complete();         
        }
    }

    complete = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Complete`)
        system.domEngine.hideScene(() => {
            this.timeline.next();
        });
    }
    
    render = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Render`)
        system.domEngine.showScene();
    }

    reset = () => {
        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Reset`)
        this.triggerZones.forEach((triggerZone) => {
            triggerZone.reset();
        });
        this.motionTrackers.forEach((motionTracker) => {
            motionTracker.reset();
        });
        this.state.active = true;
    }

    connectTimeline = (timeline) => {
        this.timeline = timeline;
    }

    countDownFrame = 0;

    

    init = () => {

        this.countDownFrame = 3;


        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Scene',
                properties: ['name', 'backgroundColor', 'triggerZones', 'motionTrackers'],
            })
        ) {
            this.sceneError = true;
            return false;
        };

        if(
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'TriggerZones',
                states: [(this.triggerZones !== 0)],
            }) ||
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'MotionTrackers',
                states: [(this.motionTrackers !== 0)],
            })
        ) {
            this.sceneError = true;
            return false;
        }

        const sceneObjects = [...this.motionTrackers, ...this.triggerZones];

        const backgroundImage = (this.backgroundImage)?this.backgroundImage:null;
        const backgroundColor = (this.backgroundColor)?this.backgroundColor:null;

        this.sceneEngine = new SceneEngine({
            sceneObjects,
            backgroundColor,
            backgroundImage,
            scene: this,
            debug,
        });

        if(this.sceneError) {
            return false;
        }

        system.teacherEngine.checkStage();

        system.debugConsoleLog(this.constructor.name, `Scene[${this.name}] Init`)
        this.render();
        this.sceneEngine.init(this);
    }


}



