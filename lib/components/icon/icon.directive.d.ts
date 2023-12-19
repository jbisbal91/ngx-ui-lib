import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconDirective implements OnInit {
    elementRef: ElementRef;
    private renderer2;
    ngxType: string;
    ngxTheme: string;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    ngOnInit(): void;
    paths: {
        ngxType: string;
        path: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<IconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IconDirective, "[ngx-icon]", never, { "ngxType": { "alias": "ngxType"; "required": false; }; "ngxTheme": { "alias": "ngxTheme"; "required": false; }; }, {}, never, never, false, never>;
}
