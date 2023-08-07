import styles from '@/styles/top/firstView.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import ScrollArrow from '@/components/top/scrollArrowElement'

export const FirstView = () =>{
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(()=> {
    gsap.to(
      titleRef.current,{
        opacity:1,
        duration:4,
        ease:"Power3.easeOut"
      })
  },[])

  return(
    <section className={styles.first_view}>
      <h1 className={styles.title} ref={titleRef}>
        <img src="../images/top/title_image.svg" alt="キシハルキ ポートフォリオ" />
        
      </h1>
      <div className={styles.scroll}>
        <ScrollArrow/>
      </div>
    </section>
  )
}
export default FirstView;