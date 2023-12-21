import { QueryList } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import * as i0 from "@angular/core";
export declare class CarouselComponent {
    carouselItems: QueryList<CarouselItemComponent>;
    ngAfterContentInit(): void;
    selectItem(carouselItem: CarouselItemComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "ngx-carousel", never, {}, {}, ["carouselItems"], ["*"], false, never>;
}
