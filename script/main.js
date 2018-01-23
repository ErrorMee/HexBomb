
import BackGround from './game/background'
import MainView from './game/MainView'
import Model from './game/model'
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

    this.model = new Model()

    this.bg = new BackGround(context)
    this.mainView = new MainView(context);
  }

  /**
   * 帧循环
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
    context.clearRect(0, 0, canvas.width, canvas.height)
    this.bg.render();
    this.mainView.render();
  }
}


