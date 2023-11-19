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
    clickState = false;

    constructor() {
        system.log('Timeline Constructed')

        //  Add screen-button event listener
        system.domEngine.addEventListener('screen-button', 'click', ()=> { 
            if (this.clickState) {
                return;
            }
            this.clickState = true;
            system.domEngine.hideScreen(this.next.bind(this));
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
        if (this.timelineStep === this.timeline.length) {
            this.state.complete = true;
            system.log('Timeline Complete')
            return;
        }
        this.clickState = false;
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
            return false;
        }

        system.log('Timeline Good')
        this.timeline[0].init();
    }

}

