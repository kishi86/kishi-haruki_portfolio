import styles from "@/styles/top/works.module.scss"
import React,{RefObject, createRef, useEffect,useRef} from "react"
import gsap  from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link"
import ItemA from "@/components/common/works_items/itemA"
import Item0 from "@/components/common/works_items/item0"
import Item1 from "@/components/common/works_items/item1"
import Item2 from "@/components/common/works_items/item2"
import Item3 from "@/components/common/works_items/item3"
import Item4 from "@/components/common/works_items/item4"
import Item5 from "@/components/common/works_items/item5"
import Item6 from "../common/works_items/item6";
import { scrollTriggerAnimation } from "@/js/fadeinAnimation"
import ItemV0 from "../common/works_items/itemV0";
import ItemV1 from "../common/works_items/itemV1";
import Item7 from "../common/works_items/item7";

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
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ]);


  useEffect(()=> {
    const item = itemRef.current.map(item => item.current);
    const worksSectionElements = [worksSectionRef.current,sectionTitleRef.current]
    scrollTriggerAnimation(
      worksSectionElements,
      40,
      1,
      0,
      "top 80%"
    )
    
    item.forEach((item)=>{
      scrollTriggerAnimation(
        item,
        40,
        1,
        0,
        "top 75%"
      )
    })
    

  })
  return(
    <section className={styles.works} ref={worksSectionRef}>
      <div className={styles.container}>
      <h2 ref={sectionTitleRef}>Works</h2>
      <ul className={styles.works__list}>
        <li ref={itemRef.current[0]}><Item7 /></li>
        <li ref={itemRef.current[1]}><Item6 /></li>
        <li ref={itemRef.current[2]}><Item5 /></li>
        <li ref={itemRef.current[3]}><Item4 /></li>
        <li ref={itemRef.current[4]}><Item3 /></li>
        <li ref={itemRef.current[5]}><Item2 /></li>
        <li ref={itemRef.current[6]}><Item1 /></li>
        <li ref={itemRef.current[7]}><Item0 /></li>
        <li ref={itemRef.current[8]}><ItemV1 /></li>
        <li ref={itemRef.current[9]}><ItemV0 /></li>
        <li ref={itemRef.current[10]}><ItemA /></li>
      </ul>
      </div>
    </section>
  )
}
export default Works;
