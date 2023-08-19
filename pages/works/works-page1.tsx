import DotAnimation from "@/components/common/dotAnimation"
import GlobalNavigation from '@/components/common/globalNavigation'
import Contact from "@/components/common/footer"

import Item2 from "@/components/common/works_items/item2"
import Item3 from "@/components/common/works_items/item3"
import { WorksDescriptionDataProps, WorksDetailDataProps, WorksPreviewDataProps} from "@/interface/works"

import Detail from "@/components/work/detail"
import Description from "@/components/work/description"
import Preview from "@/components/work/preview"

import fade from "@/styles/common/hide.module.scss"
import React,{Ref, useEffect,useRef} from "react"
import { onScroll } from "@/js/hideAnimation"
import Link from "next/link"

import { WorksItem1 } from "@/interface/worksAllText"

const data = WorksItem1;
const WorksPreviewData:WorksPreviewDataProps = {
  preview1:<Item2 />,
  preview2:<Item3 />
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
    // for(let i=0; i<worksDetailData.picturesList.length; i++){
    //   console.log(document);
    //   pictures = document.createElement('li');
    //   pictures.innerHTML = "<img src=" + worksDetailData.picturesList[i] + ">";
    //   (document.getElementById('pictures_list') as HTMLUListElement).appendChild(pictures);
    // }
  
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