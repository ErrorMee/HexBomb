/**
 * 单个格子
 */

import Sprite from '../base/Sprite'
import Model from './model'

const CELL_IMG_0 = 'asset/image/cell01.png'
const CELL_IMG_1 = 'asset/image/cell02.png'
const CELL_IMG_2 = 'asset/image/cell03.png'

let model = new Model();
var cellSize = model.getScaleCellSize();

export default class Cell extends Sprite {
  constructor(posx = 0, posy = 0, celltype = 0) {
    super(CELL_IMG_0, cellSize, cellSize)
    this.celltype = 0;
    this.setPos(posx, posy)
    this.setType(celltype)
  }

  setPos(posx = 0, posy = 0)
  {
    this.posx = posx;
    this.posy = posy;
    this.x = ((model.REFER_CELL_GAP + model.REFER_CELL_SIZE) * this.posx + model.REFER_CELL_GAP) * model.scale + model.OFFX;
    this.y = ((model.REFER_CELL_GAP + model.REFER_CELL_SIZE) * this.posy + model.REFER_CELL_GAP) * model.scale + model.OFFY;
  }

  setType(celltype)
  {
    if (this.celltype == celltype)
    {
      return
    }
    this.celltype = celltype
    if (this.celltype == 0)
    {
      this.changeImage(CELL_IMG_0)
    }

    if (this.celltype == 1) {
      this.changeImage(CELL_IMG_1)
    }

    if (this.celltype == 2) {
      this.changeImage(CELL_IMG_2)
    }
  }

}