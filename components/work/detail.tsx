import styles from "@/styles/works/detail.module.scss";
import { WorksDetailDataProps } from "@/interface/works";
import { RefObject, createRef, use, useEffect, useRef } from "react";
import { scrollTriggerAnimation } from "@/js/fadeinAnimation";
import Image from 'next/image'
import gsap  from 'gsap'


interface Props {
  data: WorksDetailDataProps
}

export const Detail = ({data}: Props) =>{
  let titleRef = useRef<HTMLHeadingElement>(null)
  let picturesListRef = useRef<RefObject<HTMLLIElement>[]>([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef()
  ])

  useEffect(()=>{
    const picturesList = picturesListRef.current.map( picturesList => picturesList.current)
  
    gsap.fromTo(titleRef.current,{
      autoAlpha: 0,
      y: 20
    },{
      autoAlpha: 1,
      y: 0,
      delay: 0.1,
      duration: 0.4,
      ease:"Power4.Out"
    })
    picturesList.forEach((picturesList)=>{
      scrollTriggerAnimation(
        picturesList,
        20,
        1,
        0,
        "top 80%"
      )
    })
  })
  return(
    <section className = {styles.worksDetail}>
        <h1 ref={titleRef}>{data.title}</h1>
        <ul className={styles.pictures_list}>
          {data.picturesList.map((imgPath: string, index: number)=>{
            return (
              <li className={styles.pictures} ref={picturesListRef.current[index]}>
                <Image
                  className={styles.images}
                  src={imgPath}
                  alt="" 
                  fill/>
              </li>
            )
          })}
          {/* mapで『List』から取ってきた要素の数だけreturnの中身の処理を返す（生成する） */}

        </ul>
      </section>
  )
}
export default Detail;