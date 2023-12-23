import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';
import * as i0 from "@angular/core";
export declare class DangerButtonDirective extends NgxButtonDirective implements OnInit {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    setStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DangerButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DangerButtonDirective, "[ngxDanger]", never, {}, {}, never, never, false, never>;
}
