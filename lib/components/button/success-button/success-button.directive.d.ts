import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';
import * as i0 from "@angular/core";
export declare class SuccessButtonDirective extends NgxButtonDirective implements OnInit {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    setStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SuccessButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SuccessButtonDirective, "[ngxSuccess]", never, {}, {}, never, never, false, never>;
}
