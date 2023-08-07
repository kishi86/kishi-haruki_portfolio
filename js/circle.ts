import gsap  from 'gsap'
import p5Types from 'p5'

const colors = [
  "#00a78d",
  "#ea617b",
  "#f3ed5e",
  "#5fc1c7",
  "#f8b430",
  "#c04a88",
  "#c8de88",
  "#0050a4"
]

/**
 * 円のデータを管理するクラス
 */
export default class Circle {
  maxX: number
  maxY: number
  gridX: number = 0
  gridY: number = 0
  prevGridX: number = 0
  prevGridY: number = 0
  size: number = 0
  color: string
  tween?: gsap.core.Tween
  scaleValue ={
    value: 0
  }
  
  //コンストラクタ(class Circleで作った変数を引数にとして扱えるようにする)
  constructor(maxX: number, maxY: number, gridSize: number) {
    this.maxX = maxX
    this.maxY = maxY
    this.size = gridSize
    let i = Math.floor(Math.random() * colors.length)
    this.color = colors[i]
    this.random()
  }

  //衝突判定
  _collisionCheck(circle1:Circle, circle2:Circle) {
    // まったく同じ位置
    if (circle1.gridX == circle2.gridX && circle1.gridY == circle2.gridY) {
      return true
    }
    if (
      // X
      (
        // circle1の範囲内にcircle2の左端がかかっている
        (
          circle1.gridX - circle1.size / 2 < circle2.gridX - circle2.size / 2 && 
          circle1.gridX + circle1.size / 2 > circle2.gridX - circle2.size / 2
        ) ||
        // circle1の範囲内にcircle2の右端がかかっている
        (
          circle1.gridX - circle1.size / 2 < circle2.gridX + circle2.size / 2 && 
          circle1.gridX + circle1.size / 2 > circle2.gridX + circle2.size / 2
        ) ||
        circle1.gridX == circle2.gridX
      ) &&
      // Y
      (
        // circle1の範囲内にcircle2の上端がかかっている
        (
          circle1.gridY - circle1.size / 2 < circle2.gridY - circle2.size / 2 && 
          circle1.gridY + circle1.size / 2 > circle2.gridY - circle2.size / 2
        ) ||
        // circle1の範囲内にcircle2の下端がかかっている
        (
          circle1.gridY - circle1.size / 2 < circle2.gridY + circle2.size / 2 && 
          circle1.gridY + circle1.size / 2 > circle2.gridY + circle2.size / 2
        ) ||
        circle1.gridY == circle2.gridY
      )
    ) {
      return true
    }
    return false
  }

  collisionCheck(circle:Circle) {
    if (this._collisionCheck(this, circle) == true) {
      return true
    }
    if (this._collisionCheck(circle, this) == true) {
      return true
    }
    return false
  }

  //ランダムな配置・円の大きさが奇数の時の配置の調整
  random() {
    this.gridX = Math.floor(Math.random() * this.maxX)
    this.gridY = Math.floor(Math.random() * this.maxY)
    if (this.size % 2 != 0) {
      this.gridX = this.gridX + 0.5
      this.gridY = this.gridY + 0.5
    }
  }


  /**
   * 円を書く
   */
  draw(p5: p5Types, gridSize: number){
    p5.noStroke();
    p5.fill(this.color)
    const prevX = this.prevGridX * gridSize
    const prevY = this.prevGridY * gridSize
    const currentX = this.gridX * gridSize
    const currentY = this.gridY * gridSize
    // p5.circle(
    //   (currentX - prevX)* this.scaleValue.value + prevX,
    //   (currentY - prevY)* this.scaleValue.value + prevY,
    //   this.size * gridSize * this.scaleValue.value
    // );
    p5.circle(
      this.gridX * gridSize,
      this.gridY * gridSize,
      this.size * gridSize * this.scaleValue.value
    );
  }

  kill = ()=>{
    if (this.tween)this.tween.kill()
  }

  scaleUp(delay: number = 0,callback: ()=>void){
    // this.scaleValue.value = 1
    if (this.tween)this.tween.kill()
    this.tween = gsap.to(this.scaleValue,{
      value:1,
      duration:0.75,
      ease: "Power4.easeOut",
      delay: delay,
      repeat:1,
      yoyo: true,
      onComplete: ()=>{
        // アニメーション終了
        this.prevGridX = this.gridX
        this.prevGridY = this.gridY
        callback()
      }
    })
  }  

}
