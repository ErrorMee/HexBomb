import Grid from './Grid'
import Model from './model'
import GridModel from './GridModel'
let model = new Model();
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let atlas = new Image()
atlas.src = 'images/Common.png'

let gridModel = new GridModel();

export default class MainView {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = new Grid(9, 9)
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
    
    ctx.drawImage(
      atlas,
      120, 6, 39, 24,
      model.resetBtnArea.startX - (100) * model.scale,
      model.resetBtnArea.startY,
      model.resetBtnArea.endX,
      model.resetBtnArea.endY,
    )
    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"
    ctx.fillText(
      gridModel.mode ? '插 旗' : '扫 雷',
      (model.REFER_CANVAS_WIDTH / 2) * model.scale - 24 - (100) * model.scale,
      (model.REFER_CANVAS_HEIGHT - 25) * model.scale
    )
  }
}
