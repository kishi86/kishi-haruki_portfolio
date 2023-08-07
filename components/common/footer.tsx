import styles from "@/styles/common/footer.module.scss"
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'

export const Contact = () =>{
  return(
     <section className={styles.contact}>
      <div className={styles.back}>
        <div className={styles.contact_address}>
          <h2>Contact</h2>
          <div className={styles.triangle} >
            <img src="../images/common/triangle.svg" alt="" />
          </div>
          <a href="mailto:kishi_haruki&#64;gmail.com">
            kishi.haruki05@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
export default Contact;

