
const trackingTypes = [
    'mouse',
    'face',
    'hand',
    'body',
]

class MotionTracker {
    name = 'MotionTracker'
    tracked = false

    constructor({
        radius,
        color,
        trackingType,
    }) {
        this.radius = radius,
        this.color = color,
        this.trackingType = trackingType;

        if(trackingType === 'hand' || trackingType === 'face') {
            system.setTrackingEngineActive();
        }

        system.debugConsoleLog(this.constructor.name, 'MotionTracker Constructed');
    }

    

    calculateCanvasPosition = () => {
        this.x = (((this.canvas.width/100) * this.percentageX) + this.radius/2)
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }


    calculateCanvasPosition = () => {
        this.x = (((this.canvas.width/100) * this.percentageX) + this.radius/2)
        this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
    }


    storePercentagePosition = () => {
        this.percentageX = this.x / (this.canvas.width/100)
        this.percentageY = this.y / (this.canvas.height/100)
    }


    setPosition = (
        x,
        y,
    ) => {
        this.x = x
        this.y = y
        this.tracked = true
    }

    setPercentagePosition = (
        x,
        y,
    ) => {
        this.percentageX = x
        this.percentageY = y
    }

    calculateDistance = (
        position1 = {
            x,
            y,
        },
        position2 = {
            x,
            y,
        }
        ) => {
        var deltaX = position2.x - position1.x;
        var deltaY = position2.y - position1.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }


    getClosestTrackedHand = () => {
        let closestHand = null;
        let closestDistance = 100000;

        if (system.trackingEngine.trackedBodyParts['hand-1'].tracked) {

         

            //  calculate the distance between the tracked body part center and the current position
            const distance = this.calculateDistance(system.trackingEngine.trackedBodyParts['hand-1'].percentagePosition, {
                x: this.percentageX,
                y: this.percentageY,
            });

            closestDistance = distance;
            closestHand = system.trackingEngine.trackedBodyParts['hand-1'];
            closestHand.otherHand = system.trackingEngine.trackedBodyParts['hand-2'];

        }

        if (system.trackingEngine.trackedBodyParts['hand-2'].tracked) {
            
            //  calculate the distance between the tracked body part center and the current position
            const distance = this.calculateDistance(system.trackingEngine.trackedBodyParts['hand-2'].percentagePosition, {
                x: this.percentageX,
                y: this.percentageY,
            });

            if (distance < closestDistance) {
                closestHand = system.trackingEngine.trackedBodyParts['hand-2'];
                closestHand.otherHand = system.trackingEngine.trackedBodyParts['hand-1'];
                closestDistance = distance;
            }
        }

        return closestHand;
    }

    smoothedX = null;
    smoothedY = null;

    smoothPosition = (
        x,
        y,
    ) => {

        if (this.smoothedX === null || this.smoothedY === null) {
            this.smoothedX = x;
            this.smoothedY = y;
        } else {
            this.smoothedX = (this.smoothedX + x) / 2;
            this.smoothedY = (this.smoothedY + y) / 2;
        }
        
        this.setPosition(
            this.smoothedX,
            this.smoothedY,
        )
    }
    

    lastHandTracked = null;

    getBodyPartTracking = () => {
        if (this.trackingType === 'face') {
            if (system.trackingEngine.trackedBodyParts['face'].tracked) {

                this.smoothPosition(
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.x * (this.canvas.width/100),
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.y * (this.canvas.height/100),
                )

                this.setPercentagePosition(
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.x,
                    system.trackingEngine.trackedBodyParts['face'].percentagePosition.y,
                )

                system.trackingEngine.trackedBodyParts['face'].tracked = false;
            }
        } else if (this.trackingType === 'hand') {
            if (system.trackingEngine.trackedBodyParts['hand-1'].tracked || system.trackingEngine.trackedBodyParts['hand-2'].tracked) {

                let closestHand = this.getClosestTrackedHand();
                
                if(!closestHand.motionTracker && closestHand.otherHand.motionTracker !== this) {
                    closestHand.motionTracker = this;
                } else if (closestHand.motionTracker !== this){
                    return;
                };


                


                if (closestHand !== null) {
                    this.smoothPosition(
                        closestHand.percentagePosition.x * (this.canvas.width/100),
                        closestHand.percentagePosition.y * (this.canvas.height/100),
                    )
    
                    this.setPercentagePosition(
                        closestHand.percentagePosition.x,
                        closestHand.percentagePosition.y,
                    )
                }

                
            }
        }

    }

    update = () => {
        this.getBodyPartTracking()
        this.render(); 
        this.storePercentagePosition()
    }


    render = () => {
        if (this.x === null || this.y === null || !this.tracked) {
            return;
        };
        this.draw()
    }


    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
        /* this.tracked = false */
    }

    initialized = false;

    reset = () => {
        this.tracked = false
        this.x = -1000;
        this.y = -1000;
        this.initialized = false;
    }

    init = (ctx, canvas, sceneEngine) => {
        this.sceneEngine = sceneEngine
        this.canvas = canvas
        this.ctx = ctx
        this.initialized = true;


        if (
            !system.errorEngine.checkDefinedProperties({
                classObject: this,
                lesson: 'MotionTracker',
                properties: ['radius', 'color', 'trackingType'],
            }) 
        ) {
            return false;
        };


        if(this.trackingType === 'mouse') {
            window.addEventListener('pointermove', (event) => {
                if (!this.initialized) {
                    return;
                }
                this.setPosition(
                    event.clientX,
                    event.clientY
                )
            })
        } 
            
    }
}
