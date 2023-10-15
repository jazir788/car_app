import { List } from "postcss/lib/list";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
 }

 export interface SearchManuFacturerProps {
   manufacturer: string;
   setManuFacturer: (manufacturer: string) => void;
 }

 export interface CarProps {
   city_mpg?:number;
   class?:string;
   combination_mpg?:number;
   cylinders?:number;
   displacement?:number;
   drive?:string;
   fuel_type?:string;
   highway_mpg?:string;
   make?:string;
   model?:string;
   transmission?:string;
   year?:number;
}

export interface CustomFilterProps {
   title: string;
   options: optionProps[];
 }

 export interface optionProps{
  title:string;
  value:string;

 }

 export interface FilterProps {
   manufacturer?: string;
    model?: string;
    year?: number;
    fuel?: string;
    limit?: number;

 }