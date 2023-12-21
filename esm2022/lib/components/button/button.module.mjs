import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerButtonDirective } from './danger-button/danger-button.directive';
import { NgxButtonDirective } from './ngx-button/ngx-button.directive';
import { BlockButtonDirective } from './block-button/block-button.directive';
import { GhostButtonDirective } from './ghost-button/ghost-button.directive';
import { SuccessButtonDirective } from './success-button/success-button.directive';
import * as i0 from "@angular/core";
const directives = [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective];
export class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, declarations: [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective], imports: [CommonModule], exports: [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [directives],
                    exports: [directives],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFbkYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0FBU2pJLE1BQU0sT0FBTyxZQUFZOytHQUFaLFlBQVk7Z0hBQVosWUFBWSxpQkFUTCxrQkFBa0IsRUFBQyxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsYUFNNUgsWUFBWSxhQU5JLGtCQUFrQixFQUFDLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtnSEFTbkgsWUFBWSxZQUhyQixZQUFZOzs0RkFHSCxZQUFZO2tCQVB4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNyQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYW5nZXJCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2Rhbmdlci1idXR0b24vZGFuZ2VyLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4QnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtYnV0dG9uL25neC1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEJsb2NrQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ibG9jay1idXR0b24vYmxvY2stYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHaG9zdEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZ2hvc3QtYnV0dG9uL2dob3N0LWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3VjY2Vzc0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc3VjY2Vzcy1idXR0b24vc3VjY2Vzcy1idXR0b24uZGlyZWN0aXZlJztcblxuY29uc3QgZGlyZWN0aXZlcyA9IFtOZ3hCdXR0b25EaXJlY3RpdmUsU3VjY2Vzc0J1dHRvbkRpcmVjdGl2ZSwgRGFuZ2VyQnV0dG9uRGlyZWN0aXZlLCBHaG9zdEJ1dHRvbkRpcmVjdGl2ZSwgQmxvY2tCdXR0b25EaXJlY3RpdmVdXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW2RpcmVjdGl2ZXNdLFxuICBleHBvcnRzOiBbZGlyZWN0aXZlc10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUgeyB9XG4iXX0=