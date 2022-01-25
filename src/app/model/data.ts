import { Pesquisa_data } from "./pesquisa_data";

export interface Data{
  empresa:string;
  ramo:string;
  rede:string;
  local:string;
  pesquisa_Data:Pesquisa_data[];
  expanded:boolean;
}
