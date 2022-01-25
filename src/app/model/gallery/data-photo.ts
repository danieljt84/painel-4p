import { photo } from "./photo";

export interface DataPhoto{
  empresa:string
  data:string;
  ramo:string;
  rede:string;
  local:string;
  promotor:string;
  photos:photo[];
}
