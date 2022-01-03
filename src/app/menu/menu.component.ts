import { Component, ElementRef,Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  windowSize: any;
  @ViewChild('mobilemenu') mobileMenu: any;
  @ViewChild('navlist') navList: any;
  navLinks: any;
  activeClass: string;

  constructor(private elementRef: ElementRef,private renderer:Renderer2) {
    const dom: HTMLElement = this.elementRef.nativeElement;
    this.navLinks = dom.querySelectorAll(".nav-list");
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    console.log(this.navLinks.length);
    /*this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
    */
  }

  handleClick() {
    console.log("oi");
    this.renderer
    this.renderer.addClass(this.navList.nativeElement, 'active');
    this.renderer.addClass(this.mobileMenu.nativeElement, 'active');
    this.animateLinks();
  }




}
