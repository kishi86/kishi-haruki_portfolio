import styles from "@/styles/profile/introduction.module.scss"
import { useEffect,useRef } from "react";
import gsap from "gsap";

export const SelfIntroduction = () =>{
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introductionRef = useRef<HTMLParagraphElement>(null);
  useEffect(()=> {
    gsap.fromTo(
      titleRef.current,{
        autoAlpha: 0,
        y:20
      },{
        autoAlpha: 1,
        y: 0,
        duration:0.5,
        delay:0.2,
        ease:"Power4.Out"
      })
    gsap.fromTo(
      introductionRef.current,{
        autoAlpha: 0,
        y:20
      },{
        autoAlpha: 1,
        y: 0,
        duration:0.5,
        delay:1,
        ease:"Power4.Out"
    })
  },[])

  return(
    <section className={styles.introduction_text}>
        <h2 ref={titleRef}>Profile</h2>
        <div className={styles.text} ref={introductionRef}>
          {/* <img src="../images/profile/introduction_text.svg" alt="" /> */}
          <div className={styles.text_wide}>
            <img src="../images/profile/introduction_text/name.svg" alt="" />
            <div className={styles.birth}>
              <img src="../images/profile/introduction_text/birth0.svg" alt="" />
              <img src="../images/profile/introduction_text/birth1.svg" alt="" />
            </div>
            <div className={styles.enrollment}>
              <img src="../images/profile/introduction_text/enrollment0.svg" alt="" />
              <img src="../images/profile/introduction_text/enrollment1.svg" alt="" />
            </div>
            <div className={styles.introduction}>
              <img src="../images/profile/introduction_text/text0.svg" alt="" />
              <img src="../images/profile/introduction_text/text1.svg" alt="" />
              <img src="../images/profile/introduction_text/text2.svg" alt="" />
              <img src="../images/profile/introduction_text/text3.svg" alt="" />
            </div>
          </div>
          <div className={styles.text_narrow}>
            <img src="../images/profile/introduction_text_narrow/name.svg" alt="" />
            <div className={styles.birth}>
              <img src="../images/profile/introduction_text_narrow/birth0.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/birth1.svg" alt="" />
            </div>
            <div className={styles.enrollment}>
              <img src="../images/profile/introduction_text_narrow/enrollment0.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/enrollment1.svg" alt="" />
            </div>
            <div className={styles.introduction}>
              <img src="../images/profile/introduction_text_narrow/text0.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/text1.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/text2.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/text3.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/text4.svg" alt="" />
              <img src="../images/profile/introduction_text_narrow/text5.svg" alt="" />
            </div>
          </div>
        </div>
     </section>
  )
}
export default SelfIntroduction;