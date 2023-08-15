import styles from "@/styles/top/works.module.scss"
import React,{RefObject, createRef, useEffect,useRef} from "react"
import gsap  from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link"
import Item1 from "@/components/common/works_items/item1"
import Item2 from "@/components/common/works_items/item2"
import Item3 from "@/components/common/works_items/item3"
import Item4 from "../common/works_items/item4"
import ItemA from "@/components/common/works_items/itemA"
import Item5 from "../common/works_items/item5"
import Item0 from "../common/works_items/item0"
// import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

export const Works = () =>{
  let worksSectionRef = useRef<HTMLTableSectionElement>(null);
  let sectionTitleRef = useRef<HTMLHeadingElement>(null);

  let itemRef = useRef<RefObject<HTMLLIElement >[]>([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ]);

  useEffect(()=> {
    const item = itemRef.current.map(item => item.current);
    const worksSectionElements = [worksSectionRef.current,sectionTitleRef.current]

    gsap.fromTo(worksSectionElements,{
      autoAlpha: 0,
      y: 40
    },{
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger:{
        trigger: sectionTitleRef.current,
        start:'top 90%',
        markers: true,
        }
    }
    )
    item.forEach((item)=>{
      gsap.fromTo(item,{
        autoAlpha: 0,
        y: 60
      },{
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger:{
          trigger: item,
          start:'top 75%',
          markers: true,
        }
      })
    })
    
    
    
    // gsap.fromTo(items,{
    //   autoAlpha:0
    // },{
    //   autoAlpha:1,
    //   scrollTrigger:{
    //     trigger :sectionTitleRef.current,
    //     start: 'top 75%'
    //   }
    // })

  })
  return(
    <section className={styles.works} ref={worksSectionRef}>
      <h2 ref={sectionTitleRef}>Works</h2>
      <ul className={styles.works_list}>
        <li ref={itemRef.current[0]}><Item5 /></li>
        <li ref={itemRef.current[1]}><Item4 /></li>
        <li ref={itemRef.current[2]}><Item3 /></li>
        <li ref={itemRef.current[3]}><Item2 /></li>
        <li ref={itemRef.current[4]}><Item1 /></li>
        <li ref={itemRef.current[5]}><Item0 /></li>
        <li ref={itemRef.current[6]}><ItemA /></li>
      </ul>
    </section>
  )
}
export default Works;
