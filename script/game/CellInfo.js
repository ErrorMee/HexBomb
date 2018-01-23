/**
 * 单个格子模型
 */

export default class CellInfo
 {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.isOpen = false;
    this.isBomb = false;
    this.isMark = false;
    this.value = 0;/**-1为雷 0-n为空地*/
  }

  

}