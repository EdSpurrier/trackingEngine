/*
 * Timeline Module
 * Actions:
 * - Manage Timeline
 * - Manage Timeline Events
 * - Manage Timeline State
 * - Manage Timeline Data
*/


class Timeline {
    timeline = [];
    timelineStep = 0;
    state = {
        active: false,
        complete: false,
    }

    constructor() {
        system.log('Timeline Constructed')
        system.domEngine.addEventListener('screen-button', 'click', ()=> { 
            this.next();
        });
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
        system.log('Timeline Start')
        if(
            !system.errorEngine.checkStates({
                classObject: this,
                lesson: 'Screen',
                states: [(this.timeline.length !== 0)],
            })
        ) {

            system.log('Timeline Error')
            return false;
        }

        system.log('Timeline Good')
        this.timeline[0].init();
    }

}

