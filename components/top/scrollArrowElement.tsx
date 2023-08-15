import styles from '@/styles/top/scrollArrowElement.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'

export const ScrollArrow = () =>{
  let scrollArrowRef = useRef<HTMLDivElement>(null);
  let arrowRef = useRef<HTMLImageElement>(null);
  let triangleRef = useRef<HTMLImageElement>(null);
  let textRef = useRef<HTMLDivElement>(null);
  let matchMedeia = gsap.matchMedia();
    useEffect(()=> {
      const scrollArrow = [triangleRef.current, arrowRef.current,  textRef.current]
      
      gsap.timeline()
      .add(gsap.from(
        scrollArrow, {
          autoAlpha: 0,
          delay: 2.8,
          y: -20,
          ease: "power2.out",
          stagger:{
            each: 0.2,
          }
        }
      ))

      matchMedeia.add("(min-width: 769px)" , ()=>{
        gsap.fromTo(
          scrollArrowRef.current, {
            delay: 3.5
          },{
            autoAlpha: 0,
            y: -100,
            duration: 1,
            ease: "power4.out",
            scrollTrigger:{
              start:'top 60%',
              trigger: scrollArrowRef.current,
              // markers:true
            },
          }
        )
      })
      
      matchMedeia.add("(max-width: 768px)" , ()=>{
        gsap.fromTo(
        scrollArrowRef.current, {
          delay: 3.5,
        },{
          autoAlpha: 0,
          y: -100,
          duration: 1,
          ease: "power4.out",
          scrollTrigger:{
            start:'top 70%',
            trigger: scrollArrowRef.current,
            // markers:true,
          },
        }
      )
      })
      
    })

  return(
    
    <div className={styles.scroll}>
      <div className={styles.arrow} ref={scrollArrowRef}>
        <img src="../images/common/triangle.svg" alt="" 
        ref={triangleRef}/>
        <img src="../images/common/arrow.svg" alt="" 
        ref={arrowRef}/>
        <div className={styles.text} ref={textRef}>Scroll</div>
      </div>
    </div>
  )
}
export default ScrollArrow;