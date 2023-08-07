import styles from "@/styles/works/detail.module.scss";
import { WorksDetailDataProps } from "@/interface/works";
import { useEffect, useRef } from "react";


interface Props {
  data: WorksDetailDataProps
}

export const Detail = ({data}: Props) =>{
  
  return(
    <section className = {styles.worksDetail}>
        {/* <h1>フリーペーパー　もじよみ</h1> */}
        <h1>{data.title}</h1>
        <ul className={styles.pictures_list}>
          {data.picturesList.map((imgPath: string, index: number)=>{
            return (
              <li className={styles.pictures}>
                <img src={imgPath} alt="" />
              </li>
            )
          })}
          {/* mapで『List』から取ってきた要素の数だけreturnの中身の処理を返す（生成する） */}

        </ul>
      </section>
  )
}
export default Detail;