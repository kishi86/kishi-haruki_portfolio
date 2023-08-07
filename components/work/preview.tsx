
import { WorksPreviewDataProps } from "@/interface/works";
import Link from "next/link";
import Item3 from "../common/works_items/item3";
import Item2 from "../common/works_items/item2";
import styles from "@/styles/works/preview.module.scss"

interface Props {
  data: WorksPreviewDataProps;
}

export const Preview = ({data}: Props) =>{
  return(
    <section className={styles.preview}>
        <div className={styles.thumbnail}>
          <div className={styles.image}>
            {data.preview1}
          </div>
          <div className={styles.image}>
            {data.preview2}
          </div>
          {/* <Item2 />
          <Item3 /> */}
          <Link href={"/#works"} className={styles.button}>
            View all
          </Link>
        </div>
      </section>
  )
}

export default Preview;