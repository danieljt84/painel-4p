export class DataTable {
  datas:Data[]=[
    new Data('','PRAMESA','ATACADO','ATACADÃO','ATACADÃO NOVA','SEMANAL'),
    new Data('','PRAMESA','ATACADO','ATACADÃO','ATACADÃO VELHO','SEMANAL'),
    new Data('','PRAMESA','ATACADO','ASSAI','ASSAI VELHO','SEMANAL'),
    new Data('','PRAMESA','ATACADO','ASSAI','ASSAI NOVO','SEMANAL'),
    new Data('','PRAMESA','VAREJO','GUANABARA','GUANABARA NOVA','SEMANAL'),
    new Data('','PRAMESA','VAREJO','GUANABARA','GUANABARA VELHO','SEMANAL'),
    new Data('','PRAMESA','VAREJO','EXTRA','EXTRA NOVA','SEMANAL'),
    new Data('','PRAMESA','VAREJO','EXTRA','EXTRA VELHO','SEMANAL')
  ]
}

class Data{
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
