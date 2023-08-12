import { log } from "console";
import { MutableRefObject, Ref, RefObject, useEffect,useRef } from "react";

export function setWindowWidth(
  targetRef: MutableRefObject<HTMLDivElement>
){
  let width = window.innerWidth;
  let style_width = String(width);

  if(targetRef.current){
    targetRef.current.style.width = style_width;
    console.log("100vw" , style_width + "px");
    // targetRef.current.style.opacity = '0' 
  }
}

//  export const setFillHeight = () => {
//     const vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   }
  
//   useEffect(() => {
//     setFillHeight();
//     let vw = window.innerWidth;
//     window.addEventListener('resize',() => {
//        if (vw === window.innerWidth) {
//       // 画面の横幅にサイズ変動がないので処理を終える
//         return;
//       }
//       // 画面の横幅のサイズ変動があった時のみ高さを再計算する
//       vw = window.innerWidth;
//       setFillHeight();
//     });

//     return () => {
//       window.removeEventListener('resize', setFillHeight);
//     };
//   }, []);


//const setFillHeight = () => {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }



// window.addEventListener('resize', () => {
//   if (vw === window.innerWidth) {
//   // 画面の横幅にサイズ変動がないので処理を終える
//     return;
//   }

//   // 画面の横幅のサイズ変動があった時のみ高さを再計算する
//   vw = window.innerWidth;
//   setFillHeight();
// });

// 初期化
// setFillHeight();