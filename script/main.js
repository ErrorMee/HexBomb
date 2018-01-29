
import BackGround from './game/background'
import MainView from './game/MainView'
import Model from './game/model'
import GridModel from './game/GridModel'

var context = canvas.getContext('2d');

let gridModel = new GridModel();

export default class Main {
  /**
   * 构造方法
   */
  constructor() {
    this.init();
    this.restart()
  }

  init()
  {
    this.bg = new BackGround(context)
  }

  restart() {
    console.log("restart ");
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

    this.model = new Model()
    this.mainView = new MainView(context);

    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    )

    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }

  touchEventHandler(e) {
    e.preventDefault()
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    
    let area = this.model.resetBtnArea
    console.log("touch x " + x + " y " + y);
    if (x >= area.startX && x <= (area.startX + area.endX) && y >= area.startY && y <= (area.startY + area.endY))
    {
      this.restart()
    }else
    {
      gridModel.touchGrid(x, y);
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


