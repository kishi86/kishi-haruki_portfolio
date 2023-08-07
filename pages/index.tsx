import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"

import Profile from "@/components/top/profile"
import FirstView from '@/components/top/firstView'
import Works from "@/components/top/works"
import styles from "@/styles/common/navigationStyle.module.scss"
import React,{Ref, useEffect,useRef} from "react"
import { onScroll } from "@/js/footerAnimation"

export const Index = () => {
  let contactRef = useRef<HTMLDivElement>(null!);
  let navigationRef = useRef<HTMLDivElement>(null!);
  let worksRef = useRef<HTMLDivElement>(null!);
  let scrollAfter: number = 0;
  let scrollBefore: number = 0;

  useEffect(() => {
    window.addEventListener("scroll",scroll);
    return()=>{
      window.removeEventListener("scroll",scroll);
      console.log("removeProf")
    }
  }, []);

  
  const scroll =(event:Event)=>{
    scrollAfter = window.scrollY;
    onScroll(contactRef,navigationRef,scrollAfter,scrollBefore);
    scrollBefore = scrollAfter;
  }
  
  return (
    <>
    <DotAnimation />
    <div className={styles.globalNavigation}
     ref={navigationRef} >
      <GlobalNavigation topFlag={true}/>
    </div>
    
    <FirstView />
    <main>
      <Profile />
      <div ref={worksRef} id="works">
        <Works />
      </div>
    </main>
    <div ref={contactRef} id="contact">
      <Contact />
    </div>
    </>
  );
};
export default Index;