import { Directive, ElementRef, Renderer,HostListener, Input } from '@angular/core';
@Directive({
    selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {
    @Input() item:any;
    @Input('appHighlight') highlightColor: string;
    @Input('myCustomColor') myCustomColor: string;
    constructor(private el: ElementRef, private renderer: Renderer) {
        this.ChangeBgColor(this.myCustomColor);
    }

    @HostListener('click') onClick() {
        console.log("The actual count is====",this.item);
        if(this.item == 1){
            console.log("asfgasdjfbkfbnsd");
        }
        this.ChangeBgColor('blue');
    }
    ChangeBgColor(color: string) {
        console.log("Called in the change method");
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
}