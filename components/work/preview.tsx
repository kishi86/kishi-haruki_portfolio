
import { WorksPreviewDataProps } from "@/interface/works";
import Link from "next/link";
import Item3 from "../common/works_items/item3";
import Item2 from "../common/works_items/item2";
import styles from "@/styles/works/preview.module.scss"
import { useEffect, useRef } from "react";
import { scrollTriggerAnimation } from "@/js/fadeinAnimation";
import gsap  from 'gsap'

interface Props {
  data: WorksPreviewDataProps;
}

export const Preview = ({data}: Props) =>{
  let previewSectionRef = useRef<HTMLTableSectionElement>(null)
  useEffect(() => {
    scrollTriggerAnimation(
      previewSectionRef.current,
      40,
      1,
      0,
      "top 75%"
    )
  })
  return(
    <section className={styles.preview} ref={previewSectionRef}>
      <div className={styles.container}>
        <div className={styles.preview__thumbnail}>
          <div className={styles.preview__image}>
            {data.preview1}
          </div>
          <div className={styles.preview__image}>
            {data.preview2}
          </div>
        </div>
        <Link href={"/#works"} className={styles.preview__button}>
            View all
        </Link>
      </div>
    </section>
  )
}

export default Preview;