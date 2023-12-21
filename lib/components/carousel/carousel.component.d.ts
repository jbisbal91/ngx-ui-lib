import { AfterContentInit, QueryList } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements AfterContentInit {
    carouselItems: QueryList<CarouselItemComponent>;
    ngxAutoPlay: boolean;
    ngxAutoPlaySpeed: number;
    currentItem: CarouselItemComponent;
    constructor();
    ngAfterContentInit(): void;
    autoPlay(index?: number): void;
    onClick(carouselItem: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "ngx-carousel", never, { "ngxAutoPlay": { "alias": "ngxAutoPlay"; "required": false; }; "ngxAutoPlaySpeed": { "alias": "ngxAutoPlaySpeed"; "required": false; }; }, {}, ["carouselItems"], ["*"], false, never>;
    static ngAcceptInputType_ngxAutoPlay: unknown;
    static ngAcceptInputType_ngxAutoPlaySpeed: unknown;
}
