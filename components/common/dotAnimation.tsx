import { Inter } from '@next/font/google'
import styles from '@/styles/common/dotAnimation.module.scss'
import React,{ useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import p5Types from 'p5'
import Circle from "@/js/circle"
import { clearTimeout } from 'timers'


const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false
})

const gridSize = 46;
let circles:Circle[] = [];
const inter = Inter({ subsets: ['latin'] });
let circle_ratio = [0.0005, 0.001, 0.002, 0.004, 0.01, 0.03, 0.02];
let circle_ratio_mini = [0.00008,0.0001,0.0005,0.0005, 0.002, 0.002];
let circle_size = [8, 6, 5, 4, 3, 2, 1];
let circle_size_mini = [5, 3, 2, 2, 1, 1];
let timer: any;


export const DotAnimation = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    // p5でいうsetupの処理を書く
    // p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.background(0);
    p5.colorMode(p5.RGB, p5.width, p5.height, 100);
    circles.forEach((circle)=>circle.kill())
    circleLocation(p5);
  };

  const draw = (p5: p5Types) => {
    // p5.clear();
    //グリッド
    p5.clear();
    p5.strokeWeight(0.5);
    p5.stroke(68,68,68,255*0.2);
    for(let i=1; i<=p5.windowHeight/gridSize; i++){
      p5.line(0, i*gridSize, p5.windowWidth, i*gridSize);
    }
    for(let i=1; i<=p5.windowWidth/gridSize; i++){
      p5.line(i*gridSize,0, i*gridSize,p5.windowHeight);
    }

    // 円
    
    for (let i=0; i<circles.length; i++) {
      circles[i].draw(p5, gridSize);
    }
    console.log("draw");
  };

  function _resize(p5: p5Types) {
    circles.forEach((circle)=>circle.kill())
    circles.length = 0
    p5.clear();
    circleLocation(p5)
    console.log("win");
  }

  let timer: number;
  function windowResized(p5: p5Types) {
    // コンポーネントのレスポンシブ化
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      _resize(p5);
    }, 500);
  }
  



  
  function makeCircles(p5: p5Types ,ratio: number, size: number): void {
    //ドットの位置決定
    let gridCountX = Math.floor(p5.windowWidth/gridSize);
    let gridCountY = Math.floor(p5.windowHeight/gridSize);
    let gridCount = gridCountX * gridCountY;

    //『circle』はclass『Circle』から1つの処理（値）を呼び出して使うための{オブジェクト}
    //『circles』はforでたくさん作った『circle』を入れる箱の[配列]
    for(let i=0; i<=gridCount*ratio; i++){
      //変数『circle』にclass『Circle』を代入
      let circle = new Circle(gridCountX, gridCountY, size);
      // 衝突判定
      let collision = true
      let count = 0;
      while (collision == true && count < 50) {
        collision = false
        for (let j=0; j<circles.length; j++) {
          // 既に作成済みの全ての円と衝突判定し、ぶつかっていたらフラグをセット
          if (circle.collisionCheck(circles[j]) == true) {
            collision = true
          }
        }
        // 衝突が発生してたら再配置
        if (collision == true) {
          circle.random()
        }
        count += 1;
      }
      circles.push(circle);
    }
  }

  const changeLocation = (i: number)=>{
    const circle = circles[i]
    circle.random()
    let collision = true
    while (collision == true) {
      collision = false
      for (let j=0; j<circles.length; j++) {
        if (j == i) continue
        // 既に作成済みの全ての円と衝突判定し、ぶつかっていたらフラグをセット
        if (circle.collisionCheck(circles[j]) == true) {
          collision = true
        }
      }
      // 衝突が発生してたら再配置
      if (collision == true) {
        circle.random()
      }
    }
    circle.scaleUp(i*0.07,()=>{
      changeLocation(i)
    })
  }

  // 連続で走ると重くなるので一回だけ動かしたい
  const circleLocation=(p5:p5Types)=>{
    circles = []
    if(window.innerWidth>767){
      for(let i = 0; i<circle_size.length; i++){
      makeCircles(p5, circle_ratio[i], circle_size[i])
      }
      circles.forEach((item, i)=>{
        circles[i].scaleUp(i*0.05,()=>{
          changeLocation(i)
        })
      })
    }
    else if(
      (window.innerWidth<768)&&(window.innerWidth>200 && window.innerHeight>400)
      ){
      for(let j = 0; j<circle_size_mini.length; j++){
      makeCircles(p5, circle_ratio_mini[j], circle_size_mini[j])
    }
    circles.forEach((item, j)=>{
      circles[j].scaleUp(j*0.05,()=>{
        changeLocation(j)
      })
    })
    }
    
  }
  

    
  return (
     <div className={styles.background}>
        <Sketch
          windowResized={windowResized}
          setup={setup}
          draw={draw} />
    </div>
  );
};
export default DotAnimation;