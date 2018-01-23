import Cell from './Cell'
import Model from './model'

let model = new Model();

export default class Grid {
  constructor(column = 8,row = 8) {
    this.column = column;
    this.row = row;

    model.calculateOff(column, row);

    this.cellGenerate();
  }

  cellGenerate() {
    this.cells = new Array();
    for (var i = 0; i < this.column; i++) {
      this.cells[i] = new Array();
      for (var j = 0; j < this.row; j++) {
        var random = Math.floor(Math.random() * 3);
        this.cells[i][j] = new Cell(i, j, random);
      }
    }
  }

  drawToCanvas(ctx) {
    for (var i = 0; i < this.column; i++) {
      for (var j = 0; j < this.row; j++) {
        this.cells[i][j].drawToCanvas(ctx);
      }
    }
  }
}
