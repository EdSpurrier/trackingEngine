
class BodyPart {
  name = 'BodyPart'
  tracking = false
  constructor(type, radius, color) {
    this.type = type
    this.radius = radius
    this.color = color
  }

  calculateCanvasPosition = () => {
    this.x = ((this.canvas.width/100) * this.percentageX) + this.radius/2
    this.y = ((this.canvas.height/100) * this.percentageY) + this.radius/2
  }

  setPosition = (
    percentageX, 
    percentageY
  ) => {
    this.percentageX = percentageX
    this.percentageY = percentageY
  }

  setTracking = (tracking) => {
    this.tracking = tracking
  }

  init = (ctx, canvas) => {
    this.ctx = ctx
    this.canvas = canvas
    this.calculateCanvasPosition()
  }
}