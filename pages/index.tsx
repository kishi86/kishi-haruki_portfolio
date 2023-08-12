import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"

import Profile from "@/components/top/profile"
import FirstView from '@/components/top/firstView'
import Works from "@/components/top/works"
import hideStyle from "@/styles/common/hide.module.scss"

import React,{Ref, useEffect,useRef} from "react"
import { onScroll ,onScrollOnce} from "@/js/footerAnimation"

export const Index = () => {
  let contactRef = useRef<HTMLDivElement>(null!);
  let navigationRef = useRef<HTMLDivElement>(null!);
  let worksRef = useRef<HTMLDivElement>(null!);
  let targetRef = useRef<HTMLDivElement>(null!);
  let scrollAfter: number = 0;
  let scrollBefore: number = 0;
  let windowHeight: number;

  useEffect(() => {
    window.addEventListener("scroll",scroll);
    return()=>{
      window.removeEventListener("scroll",scroll);
      console.log("removeProf")
    }
  }, []);

  const scroll =(event:Event)=>{
    scrollAfter = window.scrollY;
    windowHeight = window.innerHeight;
    onScroll(contactRef,navigationRef,scrollAfter,scrollBefore);
    // onScrollOnce(targetRef,scrollAfter,scrollBefore,windowHeight);
    scrollBefore = scrollAfter;
    console.log("Y",window.scrollY)
    console.log("A",scrollAfter)
    console.log("h",window.innerHeight)
  }
  

  return (
    <>
    <DotAnimation />
    <div className={hideStyle.globalNavigation}
     ref={navigationRef} >
      <GlobalNavigation topFlag={true}/>
    </div>
    <div className={hideStyle.firstView} ref={targetRef}>
      <FirstView />
    </div>
    <main>
    <div className={hideStyle.profile}>
      <Profile />
    </div>
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