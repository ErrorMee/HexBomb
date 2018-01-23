
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

/**
 * 游戏背景类
 */
export default class BackGround {
  constructor(ctx) {
    this.ctx = ctx;
    console.log(screenWidth)
    console.log(screenHeight)
  }

  render(ctx) {
    this.ctx.fillStyle = '#555555';
    this.ctx.fillRect(0, 0, screenWidth, screenHeight);
  }
}