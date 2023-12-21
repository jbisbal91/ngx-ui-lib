import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';
import * as i0 from "@angular/core";
export declare class BlockButtonDirective extends NgxButtonDirective implements OnInit {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BlockButtonDirective, "[ngxBlock]", never, {}, {}, never, never, false, never>;
}
