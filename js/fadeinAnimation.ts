import React,{RefObject, createRef, useEffect,useRef} from "react"
import gsap  from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function scrollTriggerAnimation(
  target: any,
  fromY: number,
  duration: number,
  delay: number,
  start: string
)
{
  gsap.fromTo(target,{
    autoAlpha: 0,
    y: fromY
  },{
    autoAlpha: 1,
    y: 0,
    duration: duration,
    ease:  "power4.out",
    delay: delay,
    scrollTrigger:{
      trigger: target,
      start: start,
      markers: true,
    }
  })
}