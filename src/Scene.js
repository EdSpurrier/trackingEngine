

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



