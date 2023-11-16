
class TrackingPoint {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
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
