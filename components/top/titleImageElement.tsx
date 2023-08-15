import styles from '@/styles/top/titleImageElement.module.scss'
import React,{RefObject, createRef, useEffect,useRef} from "react"
import gsap  from 'gsap'
import { start } from 'repl';
import { title } from 'process';
import { create } from 'domain';

export const TitleImage = () =>{
  let familyNameRef = useRef<RefObject<HTMLImageElement >[]>([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ]);
  let firstNameRef = useRef<RefObject<HTMLImageElement >[]>([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ]);
  let subTitleRef = useRef<RefObject<HTMLImageElement >[]>([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ]);


    useEffect(()=> {
      const familyName = familyNameRef.current.map(familyName => familyName.current);
      const firstName = firstNameRef.current.map(firstName => firstName.current);
      const name = [familyName, firstName];
      const subTitle = subTitleRef.current.map(subTitle => subTitle.current);

      gsap.timeline()
      .add(gsap.from(name,{
        y: -20,
        autoAlpha: 0,
        ease:'power1.out',
        stagger:{
          each:0.18
        }
      }))
      .add(gsap.from(subTitle,{
        scaleX: 0,
        x: -10,
        duration: 1,
        autoAlpha: 0,
      }))
    })

  return(
    <div className={styles.title} >
      <div className={styles.family_name} >
        <img src="../images/top/title_images/name_headK.svg" 
        ref={familyNameRef.current[0]}/>
        <img src="../images/top/title_images/name_i.svg" 
        ref={familyNameRef.current[1]}/>
        <img src="../images/top/title_images/name_s.svg" 
        ref={familyNameRef.current[2]}/>
        <img src="../images/top/title_images/name_h.svg" 
        ref={familyNameRef.current[3]}/>
        <img src="../images/top/title_images/name_i.svg" 
        ref={familyNameRef.current[4]}/>
      </div>
      <div className={styles.first_name}>
        <img src="../images/top/title_images/name_headH.svg" 
        ref={firstNameRef.current[0]}/>
        <img src="../images/top/title_images/name_a.svg" 
        ref={firstNameRef.current[1]}/>
        <img src="../images/top/title_images/name_r.svg" 
        ref={firstNameRef.current[2]}/>
        <img src="../images/top/title_images/name_u.svg" 
        ref={firstNameRef.current[3]}/>
        <img src="../images/top/title_images/name_k.svg" 
        ref={firstNameRef.current[4]}/>
        <img src="../images/top/title_images/name_i.svg" 
        ref={firstNameRef.current[5]}/>
      </div>
      <div className={styles.sub_title}>
        <img src="../images/top/title_images/sub_P.svg" 
        ref={subTitleRef.current[0]}/>
        <img src="../images/top/title_images/sub_O.svg" 
        ref={subTitleRef.current[1]}/>
        <img src="../images/top/title_images/sub_R.svg" 
        ref={subTitleRef.current[2]}/>
        <img src="../images/top/title_images/sub_T.svg" 
        ref={subTitleRef.current[3]}/>

        <img src="../images/top/title_images/sub_F.svg" 
        ref={subTitleRef.current[4]}/>
        <img src="../images/top/title_images/sub_O.svg" 
        ref={subTitleRef.current[5]}/>
        <img src="../images/top/title_images/sub_L.svg" 
        ref={subTitleRef.current[6]}/>
        <img src="../images/top/title_images/sub_I.svg" 
        ref={subTitleRef.current[7]}/>
        <img src="../images/top/title_images/sub_O.svg" 
        ref={subTitleRef.current[8]}/>
      </div>
    </div>
    
  )
}
export default TitleImage;