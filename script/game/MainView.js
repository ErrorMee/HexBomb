import Grid from './Grid'
import Model from './model'
let model = new Model();
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let atlas = new Image()
atlas.src = 'images/Common.png'

export default class MainView {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = new Grid(9, 12)
  }

  render() {
    this.grid.drawToCanvas(this.ctx);

    this.renderUI(this.ctx)
  }

  renderUI(ctx)
  {
    
    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      model.resetBtnArea.startX,
      model.resetBtnArea.startY,
      model.resetBtnArea.endX,
      model.resetBtnArea.endY,
    )

    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"
    ctx.fillText(
      '重 置',
      (model.REFER_CANVAS_WIDTH / 2) * model.scale - 24,
      (model.REFER_CANVAS_HEIGHT - 25) * model.scale
    )
    
  }
}
