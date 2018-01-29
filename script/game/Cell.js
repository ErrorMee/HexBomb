/**
 * 单个格子
 */

import Sprite from '../base/Sprite'
import Model from './model'

const CELL_OPEN = 'asset/image/cell01.png'
const CELL_CLOSE = 'asset/image/cell00.png'

let model = new Model();
var cellSize = model.getScaleCellSize();

export default class Cell extends Sprite {
  constructor(cellInfo) {
    super(CELL_OPEN, cellSize, cellSize)
    this.cellInfo = cellInfo;
    this.setPos(this.cellInfo.posX, this.cellInfo.posY)
    this.setOpen(this.cellInfo.isOpen)
  }

  setPos(posx = 0, posy = 0)
  {
    this.posx = posx;
    this.posy = posy;
    this.x = model.getCellViewPosX(this.posx);
    this.y = model.getCellViewPosY(this.posy);
  }

  setOpen(isOpen)
  {
    if (this.open != isOpen)
    {
      this.open != isOpen
    }else
    {
      return;
    }
    if (isOpen)
    {
      this.changeImage(CELL_OPEN)
    }else
    {
      this.changeImage(CELL_CLOSE)
    }
  }

  render(ctx)
  {
    this.drawToCanvas(ctx);
    if (this.cellInfo.isOpen) {
      this.setOpen(this.cellInfo.isOpen)
      ctx.fillStyle = this.cellInfo.value < 0 ? "#dd0000" : "#333333";
      ctx.font = this.cellInfo.value < 0 ? "24px Arial" : "20px Arial";
      var text = this.cellInfo.value < 0 ? '×' : '' + this.cellInfo.value;
      ctx.fillText(
        text,
        this.x + (model.REFER_CELL_SIZE - 8) / 2 * model.scale,
        this.y + (model.REFER_CELL_SIZE + 14) / 2 * model.scale,
      )
    }
    
  }

}