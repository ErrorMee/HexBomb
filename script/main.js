
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
    console.log("restart ");
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

    this.model = new Model()

    this.bg = new BackGround(context)
    this.mainView = new MainView(context);

    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }

  touchEventHandler(e) {
    e.preventDefault()
    let x = e.touches[0].clientX * this.model.scale;
    let y = e.touches[0].clientY * this.model.scale;
    
    let area = this.model.resetBtnArea
    console.log("click x " + x + " startX " + area.startX + " endX " + area.endX + " y " + y + " startY " + area.startY + " endX " + area.endY);
    if (x >= area.startX && x <= (area.startX + area.endX) && y >= area.startY && y <= (area.startY + area.endY))
    {
      this.restart()
    }
      
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


