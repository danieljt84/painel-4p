import { Photo } from "./photo";

export interface DataPhoto{
  brandName:string
  data:string;
  project:string;
  chainName:string;
  shopName:string;
  promoterName:string;
  photos:Photo[];
}
