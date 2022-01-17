export class Data{
  constructor(data: string,industria: string,ramo: string,rede: string,local: string,tipoPesquisa: string){
    this.data = data;
    this.industria = industria;
    this.ramo = ramo;
    this.rede = rede;
    this.local = local;
    this.tipoPesquisa = tipoPesquisa;
  }
  data:string;
  industria:string;
  ramo:string;
  rede:string;
  local:string;
  tipoPesquisa:string;
}
