/**
 * 单个格子模型
 */

export default class CellInfo
 {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.isOpen = false;
    this.isMark = false;
    this.value = 0;/**-1为雷 0-n为空地*/
  }

  Open() {
    if (this.isOpen == false) {
      this.isOpen = true;
      if (this.value == -1)
      {
        return true
      }
    }
    return false;
  }
}