
class TargetPoint {
    name = 'TargetPoint'

    checkSetup = () => {
        if (this.percentageX > 100 || this.percentageX < 0) {
            system.error(`${this.name}: percentageX must be between 0 and 100`, this.percentageX)
        }
        if (this.percentageY > 100 || this.percentageY < 0) {
            system.error(`${this.name}: percentageY must be between 0 and 100`, this.percentageY)
        }
    }

    constructor(percentageX, percentageY, radius, inactiveColor, activeColor) {
        this.percentageX = percentageX
        this.percentageY = percentageY
        this.radius = radius
        this.inactiveColor = inactiveColor
        this.color = inactiveColor
        this.activeColor = activeColor
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

    checkCollisions = (gameObjects) => {
        gameObjects.forEach((gameObject) => {
            if (gameObject instanceof TrackingPoint) {
                let dx = gameObject.x - this.x
                let dy = gameObject.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < gameObject.radius + this.radius) {
                    this.color = this.activeColor
                } else {
                    this.color = this.inactiveColor
                }
            }
        })
    }


    update = (gameObjects) => {
        this.checkCollisions(gameObjects)
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
