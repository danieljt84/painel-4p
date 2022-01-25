import { Injectable } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class EventEmiterService {

  private static emitters: {
    [nomeEvento: string]: EventEmitter
  } = {}
  constructor() { }

  static get(nomeEvento: string): EventEmitter {
    if (!this.emitters[nomeEvento])
      this.emitters[nomeEvento] = new EventEmitter();
    return this.emitters[nomeEvento];
  }
}
