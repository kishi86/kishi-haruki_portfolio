import styles from '@/styles/top/titleImageElement.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import { start } from 'repl';

export const TitleImage = () =>{
  const NameRef = useRef<HTMLImageElement>(null);
  let matchMedeia = gsap.matchMedia();
    useEffect(()=> {
      gsap.from('img',{
        y: -50,
        autoAlpha: 0,
        ease: "power4.out",
        duration:1,
        stagger:{
          // ease: "PowerInOut",
          from: "start",
          each: 0.1,
        }
      })
    })

  return(
    <div className={styles.title} >
      <div className={styles.first_name}>
        <img src="../images/top/title_images/name_headK.svg" />
        <img src="../images/top/title_images/name_i.svg" />
        <img src="../images/top/title_images/name_s.svg" />
        <img src="../images/top/title_images/name_h.svg" />
        <img src="../images/top/title_images/name_i.svg" />
      </div>
      <div className={styles.family_name}>
        <img src="../images/top/title_images/name_headH.svg" />
        <img src="../images/top/title_images/name_a.svg" />
        <img src="../images/top/title_images/name_r.svg" />
        <img src="../images/top/title_images/name_u.svg" />
        <img src="../images/top/title_images/name_k.svg" />
        <img src="../images/top/title_images/name_i.svg" />
      </div>
      <div className={styles.sub_title}>
        <img src="../images/top/title_images/sub_P.svg" />
        <img src="../images/top/title_images/sub_O.svg" />
        <img src="../images/top/title_images/sub_R.svg" />
        <img src="../images/top/title_images/sub_T.svg" />

        <img src="../images/top/title_images/sub_F.svg" />
        <img src="../images/top/title_images/sub_O.svg" />
        <img src="../images/top/title_images/sub_L.svg" />
        <img src="../images/top/title_images/sub_I.svg" />
        <img src="../images/top/title_images/sub_O.svg" />
      </div>
    </div>
    
  )
}
export default TitleImage;