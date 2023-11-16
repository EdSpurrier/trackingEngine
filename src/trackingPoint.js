
class TrackingPoint {
    name = 'TrackingPoint'
    constructor(radius, color) {
        this.radius = radius
        this.color = color
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
        this.canvas = canvas
        this.ctx = ctx
    }
}
