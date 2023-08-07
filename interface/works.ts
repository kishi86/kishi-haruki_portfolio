import { HtmlProps } from "next/dist/shared/lib/html-context";

export interface WorksDescriptionDataProps {
  category:string;
  productionTime: string;
  productionPart: string;
  tool:string;
  productionSummary: string;
}

export interface WorksDetailDataProps {
  title: string;
  picturesList: string[];
}

export interface WorksPreviewDataProps {
  preview1:JSX.Element;
  preview2:JSX.Element;
}

