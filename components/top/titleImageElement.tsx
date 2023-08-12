import styles from '@/styles/top/titleImageElement.module.scss'
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'

export const TitleImage = () =>{
  const ArrowRef = useRef<HTMLDivElement>(null);
  let matchMedeia = gsap.matchMedia();
    // useEffect(()=> {

    //   matchMedeia.add("(min-width: 769px)" , ()=>{
    //     gsap.fromTo(
    //     ArrowRef.current, {
    //       opacity: 1,
    //       y: 0
    //     }
    //     ,{
    //       opacity:0,
    //       y: -100,
    //       duration: 1,
    //       ease: "power4.out",
    //       scrollTrigger:{
    //         start:'top 60%',
    //         trigger: ArrowRef.current,
    //         markers:true,
    //       },
    //     }
    //   )
    //   })
    //   matchMedeia.add("(max-width: 768px)" , ()=>{
    //     gsap.fromTo(
    //     ArrowRef.current, {
    //       opacity: 1,
    //       y: 0
    //     }
    //     ,{
    //       opacity:0,
    //       y: -100,
    //       duration: 1,
    //       ease: "power4.out",
    //       scrollTrigger:{
    //         start:'top 60%',
    //         trigger: ArrowRef.current,
    //         // markers:true,
    //       },
    //     }
    //   )

    //   })
      
    // })

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