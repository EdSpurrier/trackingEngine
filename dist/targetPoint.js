
class TargetPoint {
    constructor(x, y, radius, inactiveColor, activeColor) {
        this.x = x
        this.y = y
        this.radius = radius
        this.inactiveColor = inactiveColor
        this.color = inactiveColor
        this.activeColor = activeColor
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

    init = (ctx) => {
        this.ctx = ctx
    }
}
