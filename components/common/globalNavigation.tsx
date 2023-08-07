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
          <Link href="/" onClick={onClickTop}>
            <div className={styles.to_top}>Top</div>
          </Link>
        </li>

        <li className={styles.menu_item}>
          <Link href="/profilePage">
            <div className={styles.to_profile}>Profile</div>
          </Link>
        </li>

        <li className={styles.menu_item}>
          <a href="/#works" onClick={onClickWorks}>
            <div className={styles.to_works}>Works</div>
          </a>
        </li>
        
        <li className={styles.menu_item}>
          <a href="mailto:kishi_haruki&#64;gmail.com">
            <div className={styles.to_contact}>Contact</div>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default GlobalNavigation;