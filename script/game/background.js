import Sprite from '../js/base/sprite'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC = 'asset/image/rect_4.png'

/**
 * 游戏背景类
 */
export default class BackGround extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, screenWidth, screenHeight)

    ctx.fillStyle = '#555555';
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    //var image = wx.createImage()
    //image.onload = function () {
    //  console.log(image.width, image.height)
    //  ctx.drawImage(image, 0, 0,16,16)
    //}
    //image.src = 'asset/image/rect_4.png'
  }

  render(ctx) {
    // ctx.drawImage(
    //   this.img,
    //   0,
    //   0,
    //   this.width,
    //   this.height,
    // )
  }
}