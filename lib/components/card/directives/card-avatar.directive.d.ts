import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardAvatarDirective implements OnInit {
    elementRef: ElementRef;
    private renderer2;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    ngOnInit(): void;
    setStyle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardAvatarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CardAvatarDirective, "[ngx-card-avatar]", never, {}, {}, never, never, false, never>;
}
