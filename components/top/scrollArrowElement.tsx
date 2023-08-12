import styles from '@/styles/top/scrollArrowElement.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'

export const ScrollArrow = () =>{
  const ArrowRef = useRef<HTMLDivElement>(null);
  const TextRef = useRef<HTMLDivElement>(null);
  let matchMedeia = gsap.matchMedia();
    useEffect(()=> {
      gsap.fromTo(
        TextRef.current, {
          opacity: 0,
          y:-20,
          ease: "power4.out"
      },{
        delay:2.5,
        duration:0.4,
        opacity:1,
        y:0
      })
      matchMedeia.add("(min-width: 769px)" , ()=>{
        gsap.fromTo(
        ArrowRef.current, {
          opacity: 1,
          y: 0,
        }
        ,{
          opacity:0,
          y: -100,
          duration: 1,
          ease: "power4.out",
          scrollTrigger:{
            start:'top 60%',
            trigger: ArrowRef.current,
            markers:true
          },
        }
      )
      })
      matchMedeia.add("(max-width: 768px)" , ()=>{
        gsap.fromTo(
        ArrowRef.current, {
          opacity: 1,
          y: 0
        }
        ,{
          opacity:0,
          y: -100,
          duration: 1,
          ease: "power4.out",
          scrollTrigger:{
            start:'top 70%',
            trigger: ArrowRef.current,
            markers:true,
          },
        }
      )

      })
      
    })

  return(
    
    <div className={styles.scroll}>
        <div className={styles.arrow} ref={ArrowRef}>
          <img src="../images/common/triangle.svg" alt="" />
          <img src="../images/common/arrow.svg" alt="" />
          <div className={styles.text} ref={TextRef}>Scroll</div>
        </div>
        
      </div>
  )
}
export default ScrollArrow;