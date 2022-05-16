import { Directive, HostListener, ElementRef, HostBinding, OnChanges, SimpleChanges, Input } from '@angular/core';

@Directive({
  selector: '[appPizzasDirective]'
})
export class PizzasDirective implements OnChanges {

  constructor(private el: ElementRef<HTMLElement>) {
    el.nativeElement.style.transition = 'all 400ms';
  }

  @Input()
  selected = false

  
  @HostBinding('style') style: any;

  ngOnChanges(): void {
    if (this.selected) {
      this.style = {
        width: "8%",
        backgroundColor: "#e60000"
      };
    }
    else {
      this.style = {};
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered(true)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered(false)
  }

  hovered(isHovered: boolean) {

    if (!this.selected) {
      this.el.nativeElement.style.width = isHovered ? "7%" : "";
      this.el.nativeElement.style.backgroundColor = isHovered ? "#ff7947" : "";
    }
  }



}
