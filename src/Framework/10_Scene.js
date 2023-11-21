

class Scene {
    sceneEngine
    state = {
        active: false,
    }
    sceneError = false;

    constructor({
        background,
        triggerZones = [],
        motionTrackers = [],
        debug,
    }) {
        this.triggerZones = triggerZones;
        this.motionTrackers = motionTrackers;
        this.background = background;
        this.debug = debug;

        if(
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'Scene',
                properties: ['background', 'triggerZones', 'motionTrackers', 'debug'],
            })
        ) {
            this.sceneError = true;
            return false;
        };

        if(
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'TriggerZones',
                states: [(triggerZones !== 0)],
            }) ||
            !system.errorEngine.checkStates({
                classObject: null,
                lesson: 'MotionTrackers',
                states: [(motionTrackers !== 0)],
            })
        ) {
            this.sceneError = true;
            return false;
        }

        const sceneObjects = [...motionTrackers, ...triggerZones];

        this.sceneEngine = new SceneEngine({
            sceneObjects,
            background,
            scene: this,
            debug,
        });

        system.log('Scene Constructed');
    }


    checkAllTriggersTriggered = () => {
        return this.triggerZones.every((triggerZone) => {
            return triggerZone.triggered;
        });
    }

    update = () => {
        if (this.checkAllTriggersTriggered()) {
            this.sceneEngine.stop();

            console.log(this.timeline);
            system.domEngine.hideScene(() => {
                this.timeline.next();
            });
        }
    }
    
    render = () => {
        system.log(`Scene[${this.name}] Render`)
        system.domEngine.showScene();
    }

    init = () => {
        if(this.sceneError) {
            return false;
        }

        system.log(`Scene[${this.name}] Init`)
        this.render();
        this.sceneEngine.init(this);
    }


}



