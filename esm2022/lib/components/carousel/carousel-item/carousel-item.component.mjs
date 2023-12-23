import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CarouselItemComponent {
    constructor() {
        this.id = '';
        this.isActive = false;
        this.disabled = false;
    }
    ngOnInit() {
        this.id = this.guid();
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CarouselItemComponent, selector: "ngx-carousel-item", inputs: { disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-carousel-item\" [id]=\"id\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}.ngx-carousel-item{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-carousel-item', template: "<div class=\"ngx-carousel-item\" [id]=\"id\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}.ngx-carousel-item{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC1pdGVtL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBUXpELE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNUyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztLQWdCcEM7SUFkQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUk7UUFDRixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FDbkQsT0FBTyxFQUNQLFVBQVUsQ0FBQztZQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7K0dBbEJVLHFCQUFxQjttR0FBckIscUJBQXFCLDJGQ1JsQyxzRkFHQTs7NEZES2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLG1CQUFtQjs4QkFPcEIsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuLi9jYXJvdXNlbC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2Fyb3VzZWwtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBDYXJvdXNlbCwgT25Jbml0IHtcbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pZCA9IHRoaXMuZ3VpZCgpO1xuICB9XG5cbiAgZ3VpZCgpIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZShcbiAgICAgIC9beHldL2csXG4gICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWNhcm91c2VsLWl0ZW1cIiBbaWRdPVwiaWRcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=