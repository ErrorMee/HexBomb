import Cell from './Cell'
import GridModel from './GridModel'
import Model from './model'
let model = new Model();
let gridModel = new GridModel();

export default class Grid {
  constructor(column = 8,row = 8) {
    gridModel.init(column, row);
    model.calculateOff(column, row);

    this.cellGenerate();
  }

  cellGenerate() {
    this.cells = new Array();
    for (var i = 0; i < gridModel.column; i++) {
      this.cells[i] = new Array();
      for (var j = 0; j < gridModel.row; j++) {
        this.cells[i][j] = new Cell(gridModel.cells[i][j]);
      }
    }
  }

  drawToCanvas(ctx) {
    for (var i = 0; i < gridModel.column; i++) {
      for (var j = 0; j < gridModel.row; j++) {
        this.cells[i][j].render(ctx);
      }
    }
  }
}
