import { log } from "console";
import { MutableRefObject, Ref, RefObject, useEffect,useRef } from "react";

let showFlag: boolean = true;
export function onScroll(
  clientRef: MutableRefObject<HTMLDivElement>,
  navigationRef: MutableRefObject<HTMLDivElement>,
  scrollAfter: number= 0,
  scrollBefore: number= 0
)
{
  let client: number;
  let clientRectTop: any;
  let clientRectHeight: any;

if(clientRef.current){
  clientRectTop = clientRef.current.getBoundingClientRect().top;
  clientRectHeight = clientRef.current.getBoundingClientRect().height;
}
    //  <div>で囲んだオブジェクトの高さ、y座標を使う
  client =  clientRectTop - clientRectHeight;
  if (navigationRef.current){
    if (showFlag == true &&
      (scrollAfter > scrollBefore || client < 200)) {
      navigationRef.current.style.opacity = '0';
      navigationRef.current.style.visibility = 'hidden';
      showFlag = false;
      // console.log("opa",navigationRef.current.style.opacity);
    }
    if (showFlag == false &&
      (scrollAfter < scrollBefore && client > 200)) {
      navigationRef.current.style.opacity = '1';
      navigationRef.current.style.visibility = 'visible';
      showFlag = true;
      // console.log("opa",navigationRef.current.style.opacity);
    }
}
}
let titleFlag: boolean = true;

export function onScrollOnce(
  targetRef: MutableRefObject<HTMLDivElement>,
  scrollAfter: number= 0,
  scrollBefore: number= 0,
  windowHeight: number
  ){
    if(targetRef.current){
      console.log("titleFlag",titleFlag)
      if(titleFlag == true &&
        (scrollAfter > scrollBefore / 3)){
          // console.log("A",scrollAfter,"B",scrollBefore)
          targetRef.current.style.opacity = '0';
          targetRef.current.style.visibility = 'hidden';
          titleFlag = false;
        }
        else if(titleFlag == false && (scrollAfter < windowHeight / 2)){
        targetRef.current.style.opacity = '1';
        targetRef.current.style.visibility = 'visible';
        titleFlag = true;
      }
    }
  }