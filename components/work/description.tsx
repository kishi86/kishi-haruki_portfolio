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
    <section className={styles.description} >
        <ul className={styles.description_list} ref={descriptionListRef}>
          <li className={styles.description_item}>
            <h3>カテゴリ</h3>
            <p>{data.category}</p>
          </li>
          <li className={styles.description_item}>
            <h3>制作時間</h3>
            <p>{data.productionTime}</p>
          </li>
          <li className={styles.description_item}>
            <h3>制作部分</h3>
            <p>{data.productionPart}</p>
          </li>
          <li className={styles.description_item}>
            <h3>使用ツール</h3>
            <p>{data.tool}</p>
          </li>
        </ul>

        <div
         className={styles.description_text}
         dangerouslySetInnerHTML={{__html: data.productionSummary}}
         ref={textRef}
        />
        
      </section>
  )
}
export default Description;