import styles from "@/styles/top/works.module.scss"
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import Link from "next/link"
import Item1 from "@/components/common/works_items/item1"
import Item2 from "@/components/common/works_items/item2"
import Item3 from "@/components/common/works_items/item3"
import Item4 from "../common/works_items/item4"
import ItemA from "@/components/common/works_items/itemA"
import Item5 from "../common/works_items/item5"
import Item0 from "../common/works_items/item0"

export const Works = () =>{

  return(
    <section className={styles.works}>
      <h2>Works</h2>
      <ul className={styles.works_list}>
          <li><Item5 /></li>
          <li><Item4 /></li>
          <li><Item3 /></li>
          <li><Item2 /></li>
          <li><Item1 /></li>
          <li><Item0 /></li>
          <li><ItemA /></li>
      </ul>
    </section>
  )
}
export default Works;
