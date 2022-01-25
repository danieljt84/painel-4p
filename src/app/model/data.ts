import { Pesquisa_data } from "./pesquisa_data";

export interface Data{
  data:string;
  empresa:string;
  ramo:string;
  rede:string;
  local:string;
  tipoPesquisa:string;
  pesquisa_Data:Pesquisa_data[];
}
