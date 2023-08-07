import styles from "@/styles/top/profile.module.scss"
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link"

import { ToProfile } from "../common/buttonElements"

gsap.registerPlugin(ScrollTrigger);


export const Profile = () =>{
  const ProfileSectionRef =
  useRef<HTMLDivElement>(null);
  useEffect(()=> {
    gsap.fromTo(
      ProfileSectionRef.current, {
        opacity: 0,
        y:120,
      }
      ,{
        opacity:1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger:{
          start:'top 75%',
          trigger: ProfileSectionRef.current,
          // markers:true,
        },
      }
    )
  })
  
  return(
    <section className={styles.profile} ref={ProfileSectionRef}>
      <div className={styles.profile_text}>
        {/* <img src="../images/top/profile_text.svg" alt="" className={styles.pc}/> */}
        <div className={styles.text_wide}>
          <img src="../images/top/profile_text/profile_text0.svg" alt="" />
          <img src="../images/top/profile_text/profile_text1.svg" alt="" />
          <img src="../images/top/profile_text/profile_text2.svg" alt="" />
          <img src="../images/top/profile_text/profile_text3.svg" alt="" />
        </div>
        {/* <img src="../images/top/profile_text_sp.svg" alt="" className={styles.sp}/> */}
        <div className={styles.text_narrow}>
          <img src="../images/top/profile_text_narrow/narrow_profile_text0.svg" alt="" />
          <img src="../images/top/profile_text_narrow/narrow_profile_text1.svg" alt="" />
          <img src="../images/top/profile_text_narrow/narrow_profile_text2.svg" alt="" />
          <img src="../images/top/profile_text_narrow/narrow_profile_text3.svg" alt="" />
          <img src="../images/top/profile_text_narrow/narrow_profile_text4.svg" alt="" />
          <img src="../images/top/profile_text_narrow/narrow_profile_text5.svg" alt="" />
        </div>
      </div>
      <Link href="/profilePage" className={styles.profile_button}>
        Profile
      </Link>
      {/* <ToProfile /> */}
    </section>
  )
}
export default Profile;

