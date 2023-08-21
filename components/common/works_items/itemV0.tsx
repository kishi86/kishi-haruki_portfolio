import Link from "next/link"
import styles from "@/styles/common/hoverThumbnail.module.scss"
import { WorksItemV0 } from "@/interface/worksAllText"

const data = WorksItemV0;

export const ItemV0 = () =>{
  return(
    <div className={styles.works_item}>
        <Link href={data.linkTo}>
          <div className={styles.mask}>
            <img src={data.previewImage} alt="" />
            <div className={styles.works_title}>
              <h3>{data.title}</h3>
              <p>
                {data.category} / {data.productionPart}
              </p>
            </div>
          </div>
        </Link>
    </div>
  )
  
}

export default ItemV0;