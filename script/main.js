
import BackGround from './game/background'

var context = canvas.getContext('2d');

export default class Main {
  /**
   * 构造方法
   */
  constructor() {
    this.restart()
  }

  restart() {
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

    this.bg = new BackGround(context)
  }

  /**
   * 循环
   */
  loop() {
    //console.log('loop')
    this.update()
    this.render()
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }

  /**
   * 数据更新
   */
  update()
  {
    
  }

  /**
   * 帧重绘
   */
  render() 
  {
    
  }
}


