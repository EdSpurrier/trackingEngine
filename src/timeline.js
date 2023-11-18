/*
 * Timeline Module
 * Actions:
 * - Manage Timeline
 * - Manage Timeline Events
 * - Manage Timeline State
 * - Manage Timeline Data
*/




const StepType = {
    Scene: 'Scene',
    Screen: 'Screen',
};

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
        time: 60,
    }
    sceneObjects = []
    triggers = []
    state = {
        elapsedTime: 0,
        active: false,
        objectivesCompleted: false,
        complete: false,
        triggered: [],
    }

    constructor({
        type,
        settings,
        sceneObjects,
        objectives,
        triggers,
    }) {
        this.type = type;
        this.settings = settings;
        this.sceneObjects = sceneObjects;
        this.objectives = objectives;
        this.triggers = triggers;
        this.init();
    }

    init = () => {
        //  Attach SceneObject to Scene
        this.sceneObjects.forEach((sceneObject) => {
            //  Connect Triggers to canTrigger()
            sceneObject.init(this);
        });
    }

    update = () => {
        if (!this.state.active) {
            return;
        };

        this.checkObjectives();
        this.state.elapsedTime += system.time.elapsed;
        if (this.state.elapsedTime >= this.settings.time) {
            this.state.complete = true;
        };
        if (this.state.complete) {
            this.state.active = false;
            
            if (this.state.objectivesCompleted) {
                this.state.complete = true;
            } else {
                this.state.complete = false;
            }
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
    constructor({
        type,
        settings,
        sceneObjects,
        objectives,
        triggers,
    }) {
        this.type = type;
        this.settings = settings;
        this.sceneObjects = sceneObjects;
        this.objectives = objectives;
        this.triggers = triggers;
    }

    objectives = []
    settings = {
        time: 60,
    }
    sceneObjects = []
    triggers = []
    state = {
        elapsedTime: 0,
        active: false,
        objectivesCompleted: false,
        complete: false,
    }


}

class Timeline {
    timeline = [];

    constructor() {
        // ...
    }

    addTimelineStep(step) {
        this.timeline.push(step);
    }
}

const timeline = new Timeline();
const timelineStep = new TimelineStepScene();
timeline.addTimelineStep(timelineStep);
