let instance

const REFER_CANVAS_WIDTH = 320
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

    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.scale = this.screenWidth / REFER_CANVAS_WIDTH;
    console.log("scale " + this.scale)
    this.REFER_CELL_SIZE = 32
    this.REFER_CELL_GAP = 2
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

  cellGenerate() {
    this.cells = new Array();
    for (var i = 0; i < this.column; i++) {
      this.cells[i] = new Array();
      for (var j = 0; j < this.row; j++) {
        var random = Math.floor(Math.random() * 4);
        this.cells[i][j] = new Cell(i, j, random);
      }
    }
  }
}