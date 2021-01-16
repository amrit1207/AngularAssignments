import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  private showHoverData=false
  constructor() { }

  @HostBinding('class.highlight')
  get getHighlight(){
    return this.showHoverData
  }

  @HostListener('mouseover')
  on(){
    this.showHoverData=true;
  }

  @HostListener('mouseout')
  out(){
    this.showHoverData=false;
  }

}
