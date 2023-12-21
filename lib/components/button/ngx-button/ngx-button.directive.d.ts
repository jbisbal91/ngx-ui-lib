import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxButtonDirective implements OnInit {
    elementRef: ElementRef;
    private renderer2;
    ngxType: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    ngOnInit(): void;
    setStyle(): void;
    hover(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxButtonDirective, "[ngx-button]", never, { "ngxType": { "alias": "ngxType"; "required": false; }; }, {}, never, never, false, never>;
}
