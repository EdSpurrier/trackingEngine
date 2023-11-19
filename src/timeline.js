/*
 * Timeline Module
 * Actions:
 * - Manage Timeline
 * - Manage Timeline Events
 * - Manage Timeline State
 * - Manage Timeline Data
*/


const ObjectiveType = {
    InOrder: 'InOrder',
    Simultaneous: 'Simultaneous',
};




class Scene {
    objectives = {
        inOrder: false,
        simultaneous: false,
    }
    settings = {
    }
    sceneEngine
    triggers = []
    state = {
        active: false,
        objectivesCompleted: false,
        triggered: [],
    }

    constructor({
        settings,
        sceneSettings,
        objectives,
        triggerZones,
        motionTrackers,
    }) {
        this.settings = settings;
        this.objectives = objectives;
        this.triggers = triggerZones;

        this.sceneEngine = new SceneEngine({
            sceneSettings,
            motionTrackers,
        });
    }

    start = () => {
        //  Create Scene
        this.sceneEngine.init(this);
    }

    update = () => {
        this.checkObjectives();
        if (this.objectivesCompleted) {
            timeline.next();
        }
    }

    trigger = (trigger) => {
        if (this.objectives.includes(ObjectiveType.InOrder)) {
            if (this.checkTriggerInOrder()) {
                trigger.trigger();

            };
        }
    }


    //  Check if this trigger can be triggered
    canTrigger = () => {
        if (this.objectives.includes(ObjectiveType.InOrder)) {
            return this.checkTriggerInOrder();
        } else {
            return true;
        }
    }


    checkTriggerInOrder = (trigger) => {
        if (this.state.triggered.length === 0) {
            this.state.triggered.push(trigger);
            return true;
        } else {
            const triggerPosition = this.triggers.indexOf(trigger);
            const totalTriggersTriggered = this.state.triggered.length;
            if (triggerPosition === totalTriggersTriggered) {
                this.state.triggered.push(trigger);
                return true;
            } else {
                return false;
            };
        }
    }

    checkAllTriggered = () => {
        if (this.state.triggered.length === this.triggers.length) {
            return true;
        } else {
            return false;
        }
    }

    checkObjectives = () => {
        if (this.objectives.includes(ObjectiveType.InOrder)) {
            this.objectivesCompleted = this.checkAllTriggered();
        } else {
            //  check all triggers are triggered
            this.objectivesCompleted = this.triggers.filter((trigger) => {
                return trigger.state.triggered;
            }).length === this.triggers.length;
        }
    }


}




class Screen {

    checkConstructor = () => {
        const className = 'Screen';
        const lesson = {
            name: 'Screen',
            task: 'Add a new screen to the timeline'
        }

        if (this.name === undefined) {
            system.error(className,  'Name', lesson);
        }
        if (this.settings === undefined) {
            system.error(className, 'Settings', lesson);
        }
        if (this.content === undefined) {
            system.error(className, 'Content', lesson);
        }
    }

    constructor({
        name,
        settings,
        content,
    }) {

        this.name = name;
        this.settings = settings;
        this.content = content;
        if (this.checkConstructor()) {
            return;
        };
        system.log('Screen Constructed')
    }

    settings = {
        backgroundColor: '#39FF14',
    }

    render = () => {
        system.log('Screen Render')
        system.domEngine.renderScreen(this);
    }

    init = () => {
        system.log('Screen Init')
        this.render();
    }
    

}

class Timeline {
    timeline = [];
    timelineStep = 0;
    state = {
        active: false,
        complete: false,
    }

    constructor() {
        system.log('Timeline Constructed')
    }

    addTimelineStep(step) {
        this.timeline.push(step);
        if(step instanceof Scene) {
            system.log('Timeline Add Scene')
        } else if (step instanceof Screen) {
            system.log('Timeline Add Screen')
        }
        
    }

    next() {
        if (this.timelineStep === this.timeline.length) {
            this.state.complete = true;
            system.log('Timeline Complete')
            return;
        }
        system.log('Timeline Next Step ' + this.timelineStep + ' of ' + this.timeline.length)
        this.timelineStep++;
        this.timeline[this.timelineStep].init();
    }

    start() {
        if (this.timeline.length === 0) {
            system.log('Timeline Empty')
            return;
        }
        this.timeline[0].init();
    }

}

