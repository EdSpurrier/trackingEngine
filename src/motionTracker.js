
const trackingTypes = [
    'mouse',
    'face',
    'hand',
    'body',
]

class MotionTracker {
    name = 'MotionTracker'
    settings = {
        hideCursor: false,
        alwaysDisplay: false,
    }
    tracked = false

    constructor({
        radius,
        color,
        trackingType,
        settings,
    }) {
        this.radius = radius,
        this.color = color,
        this.trackingType = trackingType,


        

        system.errorEngine.checkDefinedProperties({
            classObject: this,
            lesson: 'MotionTracker',
            properties: ['radius', 'color', 'trackingType', 'settings'],
        });

        this.settings = Object.assign(this.settings, settings)

        system.log('MotionTracker Constructed')
    }


    
    


    calculateCanvasPosition = () => {
        this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
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

    update = () => {
    }

    render = () => {
        if(this.x && this.y && this.tracked) {
            this.draw()
        }
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
        this.tracked = false
    }

    init = (ctx, canvas) => {

        if(this.trackingType === 'mouse') {
            window.addEventListener('pointermove', (event) => {
                this.setPosition(
                    event.clientX,
                    event.clientY
                )
            })
        }

        this.canvas = canvas
        this.ctx = ctx
    }
}
