import React,{RefObject, createRef, useEffect,useRef} from "react"
import gsap  from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function scrollShowAnimation(
  target: any,
  fromY: number,
  duration: number
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
    scrollTrigger:{
      trigger: target,
      start:'top 75%',
      markers: true,
    }
  })
}