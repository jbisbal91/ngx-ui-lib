import { Directive } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';
import * as i0 from "@angular/core";
export class BlockButtonDirective extends NgxButtonDirective {
    constructor(element, renderer) {
        super(element, renderer);
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BlockButtonDirective, selector: "[ngxBlock]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBlock]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYmxvY2stYnV0dG9uL2Jsb2NrLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBS3hFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxrQkFBa0I7SUFFMUQsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUNsRSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFFcEUsQ0FBQztJQUVRLFFBQVE7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEUsQ0FBQzsrR0FSVSxvQkFBb0I7bUdBQXBCLG9CQUFvQjs7NEZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuLi9uZ3gtYnV0dG9uL25neC1idXR0b24uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEJsb2NrXSdcbn0pXG5leHBvcnQgY2xhc3MgQmxvY2tCdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBOZ3hCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVuZGVyZXIpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcbiAgfVxufVxuIl19