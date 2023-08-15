import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"
import Profile from "@/components/top/profile"
import gsap  from 'gsap'
import Works from "@/components/top/works"
import hideStyle from "@/styles/common/hide.module.scss"
import styles from "@/styles/top/firstView.module.scss"
import React,{Ref, useEffect,useRef} from "react"
import { onScroll } from "@/js/hideAnimation"
import TitleImage from "@/components/top/titleImageElement"
import ScrollArrow from "@/components/top/scrollArrowElement"

export const Index = () => {
  let contactRef = useRef<HTMLDivElement>(null!);
  let navigationRef = useRef<HTMLDivElement>(null!);
  let worksRef = useRef<HTMLDivElement>(null!);
  let targetRef = useRef<HTMLDivElement>(null!);
  let firstViewRef = useRef<HTMLDivElement>(null!);
  let backGroundRef = useRef<HTMLDivElement>(null);

  let scrollAfter: number = 0;
  let scrollBefore: number = 0;
  let windowHeight: number;

  useEffect(() => {
    gsap.from(backGroundRef.current,{
      autoAlpha:0,
      delay:4.2,
      duration:1
    })

    window.addEventListener("scroll",scroll);
    return()=>{
      window.removeEventListener("scroll",scroll);
      console.log("removeProf")
    }
  }, []);

  const scroll = (event:Event)=>{
    scrollAfter = window.scrollY;
    windowHeight = window.innerHeight;
    onScroll(contactRef,navigationRef,scrollAfter,scrollBefore);scrollBefore = scrollAfter;
  }

  return (
    <>
    <div ref={backGroundRef}>
      <DotAnimation />
    </div>
    <div className={hideStyle.globalNavigation}
     ref={navigationRef} >
      <GlobalNavigation topFlag={true}/>
    </div>

    <div className={styles.firstView} ref={firstViewRef}>
      <div className={styles.title}>
        <TitleImage />
      </div>
      <div className={styles.scroll}>
        <ScrollArrow />
      </div>
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