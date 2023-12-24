import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerButtonDirective } from './danger-button/danger-button.directive';
import { NgxButtonDirective } from './ngx-button/ngx-button.directive';
import { BlockButtonDirective } from './block-button/block-button.directive';
import { GhostButtonDirective } from './ghost-button/ghost-button.directive';
import { SuccessButtonDirective } from './success-button/success-button.directive';
import * as i0 from "@angular/core";
const directives = [
    NgxButtonDirective,
    SuccessButtonDirective,
    DangerButtonDirective,
    GhostButtonDirective,
    BlockButtonDirective,
];
export class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, declarations: [NgxButtonDirective,
            SuccessButtonDirective,
            DangerButtonDirective,
            GhostButtonDirective,
            BlockButtonDirective], imports: [CommonModule], exports: [NgxButtonDirective,
            SuccessButtonDirective,
            DangerButtonDirective,
            GhostButtonDirective,
            BlockButtonDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [directives],
                    exports: [directives],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFbkYsTUFBTSxVQUFVLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNyQixDQUFDO0FBT0YsTUFBTSxPQUFPLFlBQVk7K0dBQVosWUFBWTtnSEFBWixZQUFZLGlCQVp2QixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsb0JBQW9CLGFBTVYsWUFBWSxhQVZ0QixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsb0JBQW9CO2dIQVFULFlBQVksWUFGYixZQUFZOzs0RkFFWCxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNyQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhbmdlckJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGFuZ2VyLWJ1dHRvbi9kYW5nZXItYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3hCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL25neC1idXR0b24vbmd4LWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQmxvY2tCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2Jsb2NrLWJ1dHRvbi9ibG9jay1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEdob3N0QnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9naG9zdC1idXR0b24vZ2hvc3QtYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWNjZXNzQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zdWNjZXNzLWJ1dHRvbi9zdWNjZXNzLWJ1dHRvbi5kaXJlY3RpdmUnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gW1xuICBOZ3hCdXR0b25EaXJlY3RpdmUsXG4gIFN1Y2Nlc3NCdXR0b25EaXJlY3RpdmUsXG4gIERhbmdlckJ1dHRvbkRpcmVjdGl2ZSxcbiAgR2hvc3RCdXR0b25EaXJlY3RpdmUsXG4gIEJsb2NrQnV0dG9uRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbZGlyZWN0aXZlc10sXG4gIGV4cG9ydHM6IFtkaXJlY3RpdmVzXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7fVxuIl19