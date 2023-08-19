import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"

import Item0 from "@/components/common/works_items/item0"
import ItemA from "@/components/common/works_items/itemA"
import { WorksDescriptionDataProps, WorksDetailDataProps, WorksPreviewDataProps} from "@/interface/works"

import Detail from "@/components/work/detail"
import Description from "@/components/work/description"
import Preview from "@/components/work/preview"

import fade from "@/styles/common/hide.module.scss"
import React,{Ref, useEffect,useRef} from "react"
import { onScroll } from "@/js/hideAnimation"
import Link from "next/link"

import { WorksItem7 } from "@/interface/worksAllText"


const data = WorksItem7;
const WorksPreviewData:WorksPreviewDataProps = {
  preview1:<ItemA />,
  preview2:<Item0 />
}

const worksDetailData:WorksDetailDataProps = {
  title: data.title,
  picturesList: data.picturesList

}
const worksDescriptionData:WorksDescriptionDataProps = {
  category: data.category,
  productionTime: data.productionTime,
  productionPart: data.productionPart,
  tool: data.tool,
  productionSummary: data.productionSummary
}




export const WorksPage = () => {
  let contactRef = useRef<HTMLDivElement>(null!);
  let navigationRef = useRef<HTMLDivElement>(null!);
  let scrollAfter: number = 0;
  let scrollBefore: number = 0;

  useEffect(() => {
    window.addEventListener("scroll",scroll);

    return()=>{
      window.removeEventListener("scroll",scroll);
    }
  }, []);

  const scroll =(event:Event)=>{
    scrollAfter = window.scrollY;
    onScroll(contactRef,navigationRef,scrollAfter,scrollBefore);
    scrollBefore = scrollAfter;
  }
  

  return (
    <>
    <DotAnimation />
    <div className={fade.globalNavigation} ref={navigationRef} >
      <GlobalNavigation topFlag={false}/>
    </div>
    
    <main>
      <Detail data={worksDetailData}/>
      <Description data={worksDescriptionData} />
      <Preview data={WorksPreviewData}/>
    </main>
    
    <div ref={contactRef} id="contact">
      <Contact />
    </div>
    </>
  );
};
export default WorksPage;