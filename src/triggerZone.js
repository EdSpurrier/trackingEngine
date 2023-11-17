
class TriggerZone {
    name = 'TriggerZone'

    checkSetup = () => {
        let error = false;
        if (this.percentageX > 100 || this.percentageX < 0) {
            system.error(this.name, `percentageX must be between 0 and 100`, this.percentageX)
            error = true;
        }

        if (this.percentageY > 100 || this.percentageY < 0) {
            system.error(this.name, `percentageY must be between 0 and 100`, this.percentageY)
            error = true;
        }
        if (this.radius === undefined) {
            system.error(this.name, `radius must be set`, this.radius)
            error = true;
        }
        if (this.inactiveColor === undefined) {
            system.error(this.name, `inactiveColor must be set`, this.inactiveColor)
            error = true;
        }
        if (this.activeColor === undefined) {
            system.error(this.name, `activeColor must be set`, this.activeColor)
            error = true;
        }
        if (this.color === undefined) {
            system.error(this.name, `color must be set`, this.color)
            error = true;
        }

        /* if (error) {
            teacher.pushLesson(this.name)
        } */
    }

    constructor(
        settings = {
            percentageX, percentageY, radius, inactiveColor, activeColor
        }) {
        this.percentageX = settings.percentageX
        this.percentageY = settings.percentageY
        this.radius = settings.radius
        this.inactiveColor = settings.inactiveColor
        this.color = settings.inactiveColor
        this.activeColor = settings.activeColor
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

    checkCollisions = (sceneObjects) => {
        sceneObjects.forEach((sceneObject) => {
            if (sceneObject instanceof MotionTracker) {
                let dx = sceneObject.x - this.x
                let dy = sceneObject.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < sceneObject.radius + this.radius) {
                    this.color = this.activeColor
                } else {
                    this.color = this.inactiveColor
                }
            }
        })
    }


    update = (sceneObjects) => {
        this.checkCollisions(sceneObjects)
        this.storePercentagePosition()
    }


    render = () => {
        this.draw()
    }

    draw = () => {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath()
    }

    init = (ctx, canvas) => {
        this.ctx = ctx
        this.canvas = canvas
        this.calculateCanvasPosition()
    }
}
