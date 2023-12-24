import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxButtonDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxType = 'default';
        this.disabled = false;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
    }
    hover(disabled) {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NgxButtonDirective, selector: "[ngx-button]", inputs: { ngxType: "ngxType" }, host: { properties: { "class.ngx-button-primary": "ngxType === \"primary\"", "class.ngx-button-default": "ngxType === \"default\"", "class.ngx-button-dashed": "ngxType === \"dashed\"", "class.ngx-button-text": "ngxType === \"text\"", "class.ngx-button-link": "ngxType === \"link\"" }, classAttribute: "ngx-button" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-button]',
                    host: {
                        class: 'ngx-button',
                        '[class.ngx-button-primary]': 'ngxType === "primary"',
                        '[class.ngx-button-default]': 'ngxType === "default"',
                        '[class.ngx-button-dashed]': 'ngxType === "dashed"',
                        '[class.ngx-button-text]': 'ngxType === "text"',
                        '[class.ngx-button-link]': 'ngxType === "link"',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL25neC1idXR0b24vbmd4LWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQWFoRixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIOUQsWUFBTyxHQUNkLFNBQVMsQ0FBQztRQUNaLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDZ0QsQ0FBQztJQUUzRSxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFpQjtJQUV2QixDQUFDOytHQWhCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjs7NEZBQWxCLGtCQUFrQjtrQkFYOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxZQUFZO3dCQUNuQiw0QkFBNEIsRUFBRSx1QkFBdUI7d0JBQ3JELDRCQUE0QixFQUFFLHVCQUF1Qjt3QkFDckQsMkJBQTJCLEVBQUUsc0JBQXNCO3dCQUNuRCx5QkFBeUIsRUFBRSxvQkFBb0I7d0JBQy9DLHlCQUF5QixFQUFFLG9CQUFvQjtxQkFDaEQ7aUJBQ0Y7eUhBRVUsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neC1idXR0b25dJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LWJ1dHRvbicsXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLXByaW1hcnldJzogJ25neFR5cGUgPT09IFwicHJpbWFyeVwiJyxcbiAgICAnW2NsYXNzLm5neC1idXR0b24tZGVmYXVsdF0nOiAnbmd4VHlwZSA9PT0gXCJkZWZhdWx0XCInLFxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi1kYXNoZWRdJzogJ25neFR5cGUgPT09IFwiZGFzaGVkXCInLFxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi10ZXh0XSc6ICduZ3hUeXBlID09PSBcInRleHRcIicsXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLWxpbmtdJzogJ25neFR5cGUgPT09IFwibGlua1wiJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4QnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmd4VHlwZTogJ3ByaW1hcnknIHwgJ2RlZmF1bHQnIHwgJ2Rhc2hlZCcgfCAndGV4dCcgfCAnbGluaycgPVxuICAgICdkZWZhdWx0JztcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgc2V0U3R5bGUoKSB7XG4gXG4gIH1cblxuICBob3ZlcihkaXNhYmxlZDogYm9vbGVhbikge1xuXG4gIH1cbn1cbiJdfQ==