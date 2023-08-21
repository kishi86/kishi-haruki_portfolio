import Link from "next/link"
import Image from 'next/image'
import styles from "@/styles/common/hoverThumbnail.module.scss"
import { WorksItemV1 } from "@/interface/worksAllText"

const data = WorksItemV1;

export const ItemV1 = () =>{
  return(
    <div className={styles.works_item}>
        <Link href={data.linkTo}>
          <div className={styles.mask}>
            <Image src={data.previewImage}
                alt={data.title}
                width={data.coverWith}
                height={data.coverHeight}/>
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

export default ItemV1;