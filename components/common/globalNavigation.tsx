import styles from '@/styles/common/globalNavigation.module.scss'
import React,{useEffect,useRef} from "react"
import Link from 'next/link'

interface GlobalNavigation {
  topFlag: boolean
}

export const GlobalNavigation = (props: GlobalNavigation) =>{

  const onClickTop = (e: any) => {
    if(e) e.preventDefault()
    // if(props.topFlg == false) return
    if(props.topFlag == true) {
      window.scroll(0,0);
      }else{
        window.location.href = '/'
      }
  }

  const onClickWorks = (e: any) => {
    if(e) e.preventDefault()
    // if(props.topFlg == false) return
    if(props.topFlag == true) {
      console.log("onClickWorks")
    let scroll = window.scrollY;
    let element = document.getElementById('works') as HTMLElement;
    let elementTop = element.getBoundingClientRect().top;
    let offset = window.pageYOffset + elementTop;
    console.log("clientRectTop----");
    console.log(scroll);
    console.log(elementTop);
    window.scroll(0,offset);
    }else{
      window.location.href = '/#works'
    }
  }

  return(
    <nav>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <Link href="/" onClick={onClickTop} className={styles.to_top}>
            Top
          </Link>
        </li>

        <li className={styles.menu_item}>
          <Link href="/profilePage" className={styles.to_profile}>
            Profile
          </Link>
        </li>

        <li className={styles.menu_item}>
          <a href="/#works" onClick={onClickWorks} className={styles.to_works}>
            Works
          </a>
        </li>
        <li className={styles.menu_item}>
          <a href="mailto:kishi_haruki&#64;gmail.com" className={styles.to_contact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default GlobalNavigation;