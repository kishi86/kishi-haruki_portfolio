import Head from 'next/head'
import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"

import SelfIntroduction from "@/components/profile/introduction"
import Skills from "@/components/profile/skills"

import slit from "@/styles/profile/triangleSlit.module.scss"
import styles from "@/styles/common/hide.module.scss"
import React,{Ref, useEffect,useRef} from "react"
import { onScroll } from "@/js/hideAnimation"

export const ProfilePage = () => {
  let contactRef = useRef<HTMLDivElement>(null!);
  let navigationRef = useRef<HTMLDivElement>(null!);
  let scrollAfter: number = 0;
  let scrollBefore: number = 0;
  
  useEffect(() => {
    window.addEventListener("scroll",scroll);
    return()=>{
      window.removeEventListener("scroll",scroll);
    }
  }, []);

  const scroll =(event:Event)=>{
    scrollAfter = window.scrollY;
    onScroll(contactRef,navigationRef,scrollAfter,scrollBefore);
    scrollBefore = scrollAfter;
  }
  
  return (
    <>
    <Head>
      <title>Profile | KishiHaruki</title>
    </Head>
    <DotAnimation />
    <div className={styles.globalNavigation} ref={navigationRef} >
      <GlobalNavigation topFlag={false}/>
    </div>


    <main className={slit.slit_wrap}>
      <div className={slit.slit}>
        <img src="../images/profile/mask.svg" alt="" />
        {/* <rect className={styles.back}/> */}
      </div>
      <SelfIntroduction />
      <Skills />
    </main>
    
    <div ref={contactRef} id="contact">
      <Contact />
    </div>
    </>
  );
};
export default ProfilePage;