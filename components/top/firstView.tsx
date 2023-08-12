import styles from '@/styles/top/firstView.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import ScrollArrow from '@/components/top/scrollArrowElement'
import TitleImage from './titleImageElement'

export const FirstView = () =>{
  const titleRef = useRef<HTMLHeadingElement>(null);
  let matchMedeia = gsap.matchMedia();
  useEffect(()=> {
    // matchMedeia.add("(min-width: 769px)" , () => {
    //  gsap.fromTo(
    //   titleRef.current, {
    //     opacity: 1,
    //   },{
    //     opacity: 0,
    //     // fill:"red",
    //     ease: "power4.out",
    //     scrollTrigger:{
    //       start:"top 95%",
    //       trigger: titleRef.current,
    //       markers: true,
    //     },
    //   }
    //  )
    // })
    // matchMedeia.add("(max-width: 768px)" , () => {
    // })
    
  
    },[])

  return(
    <section className={styles.first_view}>
      <h1>
        <TitleImage />
        {/* <div className={styles.title} ref={titleRef}>
          <img src="../images/top/title_image.svg" alt="キシハルキ ポートフォリオ" />
        </div> */}
      </h1>
      <div className={styles.scroll}>
        <ScrollArrow />
      </div>
    </section>
  )
}
export default FirstView;