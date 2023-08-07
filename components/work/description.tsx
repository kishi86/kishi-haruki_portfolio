import styles from "@/styles/works/description.module.scss"
import { WorksDescriptionDataProps } from "@/interface/works";

interface Props {
  data: WorksDescriptionDataProps
}

export const Description = ({data}: Props) =>{
  return(
    <section className={styles.description}>
        <ul className={styles.description_list}>
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
        >
        </div>
      </section>
  )
}
export default Description;