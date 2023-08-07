import styles from '@/styles/top/scrollArrowElement.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'

export const ScrollArrow = () =>{
  const ArrowRef =
    useRef<HTMLDivElement>(null);
    useEffect(()=> {
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
            start:'top 90%',
            trigger: ArrowRef.current,
            markers:true,
          },
        }
      )
    })

  return(
    
    <div className={styles.scroll}>
        <div className={styles.arrow} ref={ArrowRef}>
          <img src="../images/common/triangle.svg" alt="" />
          <img src="../images/common/arrow.svg" alt="" />
          <div className={styles.text}>Scroll</div>
        </div>
        
      </div>
  )
}
export default ScrollArrow;