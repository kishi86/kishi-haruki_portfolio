import styles from "@/styles/common/footer.module.scss"
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import { scrollTriggerAnimation } from "@/js/fadeinAnimation"

export const Contact = () =>{
  let contactRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollTriggerAnimation(
      contactRef.current,
      40,
      1,
      0,
      "top 75%"
    )
  })
  return(
     <section className={styles.contact}>
      <div className={styles.back} ref={contactRef}>
        <div className={styles.contact_address}>
          <h2>Contact</h2>
          <div className={styles.triangle} >
            <img src="../images/common/triangle.svg" alt="" />
          </div>
          <a href="mailto:kishi_haruki&#64;gmail.com">
            jade.may.8617@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
export default Contact;

