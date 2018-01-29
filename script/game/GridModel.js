import CellInfo from './CellInfo'
import Model from './model'

let instance
let model = new Model();

export default class GridModel {

  constructor() {
    if (instance) {
      return instance
    }

    instance = this
  }

  init(column, row) {
    this.cells = new Array();
    this.column = column;
    this.row = row;
    for (var i = 0; i < this.column; i++) {
      this.cells[i] = new Array();
      for (var j = 0; j < this.row; j++) {
        this.cells[i][j] = new CellInfo();
        this.cells[i][j].posX = i;
        this.cells[i][j].posY = j;
      }
    }

    this.initBomb(5)
  }

  initBomb(density = 5)
  {
    var bombNum = Math.ceil(this.column * this.row / density);
    console.log("bombNum " + bombNum);
    this.bombCells = new Array();
    while (bombNum > 0)
    {
      var randomX = Math.floor(Math.random() * this.column);
      var randomY = Math.floor(Math.random() * this.row);

      var findPos = true;
      for (var i = 0; i < this.bombCells.length; i++) {
        var cellInfo = this.bombCells[i];
        if (randomX == cellInfo.posX && randomY == cellInfo.posY)
        {
          findPos = false;
          break;
        }
      }

      if (findPos)
      {
        bombNum --;
        this.cells[randomX][randomY].value = -1;
        this.bombCells.push(this.cells[randomX][randomY]);
      }
    }
    
    this.initValue();
  }

  initValue()
  {
    for (var i = 0; i < this.column; i++) {
      for (var j = 0; j < this.row; j++) {
        var cellInfo = this.cells[i][j];
        if (cellInfo.value != -1) {
          var neighbors = this.getNeighbors(cellInfo);
          
          for (var n = 0; n < neighbors.length; n++) {
            var neighbor = neighbors[n];
            
            if (neighbor.value == -1)
            {
              
              cellInfo.value ++;
            }
          }
        }
      }
    }
  }

  getNeighbors(cellInfo)
  {
    var neighbors = new Array();
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        if (i == 0 && j == 0)
        {
          continue
        }
        var neighbor = this.getNeighbor(cellInfo, i, j);
        if (neighbor !== null) {
          neighbors.push(neighbor);
        }
      }
    }
    return neighbors;
  }

  getNeighbor(cellInfo,gapX,gapY) {
    var neighborX = cellInfo.posX + gapX;
    var neighborY = cellInfo.posY + gapY;
    
    if (neighborX < 0 || neighborX >= this.column || neighborY < 0 || neighborY >= this.row)
    {
      return null;
    }
    return this.cells[neighborX][neighborY];
  }

  touchGrid(touchX, touchY)
  {
    var touchCell = this.getCellByTouch(touchX, touchY);
    if (touchCell != null)
    {
      touchCell.Open();
    }
  }

  getCellByTouch(touchX, touchY)
  {
    var cellSize = model.getScaleCellSize();
    for (var i = 0; i < this.column; i++) {

      for (var j = 0; j < this.row; j++) {
        var cellInfo = this.cells[i][j];

        var viewx = model.getCellViewPosX(cellInfo.posX);
        var viewy = model.getCellViewPosY(cellInfo.posY);
        if (touchX > viewx && touchX < viewx + cellSize && touchY > viewy && touchY < viewy + cellSize)
        {
          return cellInfo;
        }
      }
    }

    return null;
  }
}