import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, Optional, Output, EventEmitter } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective implements OnInit {
  @Output('outsideClick') outsideClick = new EventEmitter<MouseEvent>();

  private subscription: Subscription;

  constructor(private element: ElementRef, @Optional() @Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    setTimeout(() => {
      this.subscription = fromEvent<MouseEvent>(this.document, 'click')
        .pipe(
          filter(event => {
            const clickTarget = event.target as HTMLElement;
            return !this.isOrContainsClickTarget(this.element.nativeElement, clickTarget);
          }),
        )
        .subscribe(event => this.outsideClick.emit(event));
    },0);
  }

  //Adicionei um exceção ao elemento clickado se ele tiver a classe "li"
  //Tendo em mente, o erro do click no li que não estava funcionando
  private isOrContainsClickTarget(element: HTMLElement, clickTarget: HTMLElement) {
    if(clickTarget.classList.contains('li')){
      return true;
    }
    return element == clickTarget || element.contains(clickTarget) || clickTarget.classList.contains('li');
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
