
var context = canvas.getContext('2d');
//context.fillStyle = 'red';
//context.fillRect(0, 0, 100, 100);

export default class Start {
  constructor() {
    this.restart()
  }

  restart() {
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }

  loop() {
    console.log('loop')
    
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}


