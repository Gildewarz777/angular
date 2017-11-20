import { Directive, HostListener, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[mouseHoverDesc]'
})

export class mouseHoverDirective {
    constructor(private el: ElementRef, private renderer: Renderer){}

    @HostListener('mouseenter') onMouseEnter() {
        this.mouse("inline");
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.mouse("none");
    }

    private mouse(dis: string) {
        this.renderer.setElementStyle(this.el.nativeElement.lastElementChild, 'display', dis);
    }
}
