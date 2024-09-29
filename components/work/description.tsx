import styles from "@/styles/works/description.module.scss"
import { WorksDescriptionDataProps } from "@/interface/works";
import { useEffect, useRef } from "react";
import { scrollTriggerAnimation } from "@/js/fadeinAnimation";

interface Props {
  data: WorksDescriptionDataProps
}

export const Description = ({data}: Props) =>{
  let descriptionListRef = useRef<HTMLUListElement>(null)
  let textRef = useRef<HTMLDivElement>(null)
  useEffect(() =>{
    const descriptions = [ descriptionListRef.current , textRef.current ]
    scrollTriggerAnimation(
      descriptions,
      40,
      1,
      0,
      "top 75%"
    )
  })
  return(
    <section className={styles.description}>
      <div className={styles.container}>
        <ul className={styles.description__list} ref={descriptionListRef}>
          <li className={styles.description__item}>
            <span className={styles.description__item__headline}>カテゴリ</span>
            <span className={styles.description__item__text}>{data.category}</span>
          </li>
          <li className={styles.description__item}>
            <span className={styles.description__item__headline}>制作時間</span>
            <span className={styles.description__item__text}>{data.productionTime}</span>
          </li>
          <li className={styles.description__item}>
            <span className={styles.description__item__headline}>制作部分</span>
            <span className={styles.description__item__text}>{data.productionPart}</span>
          </li>
          <li className={styles.description__item}>
            <span className={styles.description__item__headline}>使用ツール</span>
            <span className={styles.description__item__text}>{data.tool}</span>
          </li>
        </ul>
        <div
         className={styles.description__text}
         dangerouslySetInnerHTML={{__html: data.productionSummary}}
         ref={textRef}
        />
      </div>  
    </section>
  )
}
export default Description;