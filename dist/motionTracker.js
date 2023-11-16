
const trackingTypes = [
    'mouse',
    'face',
    'hand',
    'body',
]

class MotionTracker {
    name = 'MotionTracker'

    checkSetup = () => {
        console.log('trackingType', this.trackingType)


        if(trackingTypes.includes(this.trackingType) === false) {
            system.error(this.name, `trackingType must be set`, this.trackingType)
        }
        if(this.radius === undefined) {
            system.error(this.name, `radius must be set`, this.radius)
        }
        if(this.color === undefined) {
            system.error(this.name, `color must be set`, this.color)
        }
    }

    constructor(
        settings = {
            radius,
            color,
            trackingType,
        }) {
        this.radius = settings.radius
        this.color = settings.color
        this.trackingType = settings.trackingType
        
        this.checkSetup()
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
    }

    update = () => {
    }

    render = () => {
        if(this.x && this.y) {
            this.draw()
        }
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
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
