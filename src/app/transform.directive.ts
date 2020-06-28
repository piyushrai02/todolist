import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class TransformDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
    
  }
  changeColor(color:string){
    this.renderer.setStyle(this.el,'backgroundColor',color)

  }

}
