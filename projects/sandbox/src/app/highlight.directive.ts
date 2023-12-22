import {Directive, HostBinding, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective{

  @HostBinding('style.backgroundColor')
  bgColor: string | undefined;

  @Input("default-color")
  defaultColor : string | undefined = "transparent";

  @Input("bg-color")
  bgHighLightColor = "yellow"
  constructor() {
  }
  ngAfterViewInit(){
    this.bgColor = this.defaultColor;
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.bgHighLightColor
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor = this.defaultColor
  }

}


