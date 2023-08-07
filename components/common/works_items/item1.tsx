import Link from "next/link"
import styles from "@/styles/common/hoverThumbnail.module.scss"
import {WorksItem1} from "@/interface/worksAllText"
const data = WorksItem1;

export const Item1 = () =>{
  return(
    <div className={styles.works_item}>
        <Link href={data.linkTo}>
          <div className={styles.mask}>
            <img src={data.previewImage} alt="" />
            <div className={styles.works_title}>
              <h3>{data.title}</h3>
              <p>
                {data.category} / {data.productionTime} / {data.productionPart}
              </p>
            </div>
          </div>
        </Link>
    </div>
  )
  
}

export default Item1;