import Grid from './Grid'

export default class MainView {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = new Grid(4, 4)
  }

  render() {
    this.grid.drawToCanvas(this.ctx);
  }
}
