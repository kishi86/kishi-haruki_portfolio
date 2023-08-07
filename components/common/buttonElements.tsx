import styles from "@/styles/common/buttonElements.module.scss"
import React,{useEffect,useRef} from "react"
import gsap  from 'gsap'
import Link from "next/link"

export const ToProfile = () =>{
  return(
    <div className={styles.buttonElement}>
      <Link href="/profilePage" className={styles.button}>
        Profile
      </Link>
    </div>
  )
}
export const ToWorksList = () =>{
  return(
    <div className={styles.buttonElement}>
        <Link href={"/#works"} className={styles.button}>
          View all
        </Link>
    </div>
  )
}

