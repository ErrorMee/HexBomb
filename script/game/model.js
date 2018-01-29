
let instance

const REFER_CANVAS_WIDTH = 320
const REFER_CANVAS_HEIGHT = 568
/**
 * 数据
 */
export default class Model {
  constructor() {
    if (instance)
    {
      return instance
    }

    instance = this
    this.REFER_CANVAS_WIDTH = 320
    this.REFER_CANVAS_HEIGHT = 568
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.scale = this.screenWidth / this.REFER_CANVAS_WIDTH;
    console.log("scale " + this.scale)
    this.REFER_CELL_SIZE = 32
    this.REFER_CELL_GAP = 1

    this.resetBtnArea = {
      startX: (this.REFER_CANVAS_WIDTH / 2 - 40) * this.scale,
      startY: (this.REFER_CANVAS_HEIGHT - 50) * this.scale,
      endX: (80) * this.scale,
      endY: (40) * this.scale
    }
  }

  getScaleCellSize()
  {
    return this.REFER_CELL_SIZE * this.scale;
  }

  calculateOff(column, row)
  {
    this.OFFX = (this.screenWidth - ((this.REFER_CELL_GAP + this.REFER_CELL_SIZE) * column + this.REFER_CELL_GAP) * this.scale) / 2;
    this.OFFY = (this.screenHeight - ((this.REFER_CELL_GAP + this.REFER_CELL_SIZE) * row + this.REFER_CELL_GAP) * this.scale) / 2;
  }

  getCellViewPosX(posx) {
    return ((this.REFER_CELL_GAP + this.REFER_CELL_SIZE) * posx + this.REFER_CELL_GAP) * this.scale + this.OFFX;
  }

  getCellViewPosY(posy) {
    return ((this.REFER_CELL_GAP + this.REFER_CELL_SIZE) * posy + this.REFER_CELL_GAP) * this.scale + this.OFFY;
  }

}