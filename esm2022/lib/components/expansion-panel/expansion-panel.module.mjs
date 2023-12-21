import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from '../divider/divider.module';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import * as i0 from "@angular/core";
export class ExpansionPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, declarations: [AccordionComponent, ExpansionPanelComponent], imports: [CommonModule, DividerModule], exports: [AccordionComponent, ExpansionPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, imports: [CommonModule, DividerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionComponent, ExpansionPanelComponent],
                    exports: [AccordionComponent, ExpansionPanelComponent],
                    imports: [CommonModule, DividerModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBT3JFLE1BQU0sT0FBTyxvQkFBb0I7K0dBQXBCLG9CQUFvQjtnSEFBcEIsb0JBQW9CLGlCQUpoQixrQkFBa0IsRUFBRSx1QkFBdUIsYUFFaEQsWUFBWSxFQUFFLGFBQWEsYUFEM0Isa0JBQWtCLEVBQUUsdUJBQXVCO2dIQUcxQyxvQkFBb0IsWUFGckIsWUFBWSxFQUFFLGFBQWE7OzRGQUUxQixvQkFBb0I7a0JBTGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7b0JBQzNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEaXZpZGVyTW9kdWxlIH0gZnJvbSAnLi4vZGl2aWRlci9kaXZpZGVyLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBFeHBhbnNpb25QYW5lbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FjY29yZGlvbkNvbXBvbmVudCwgRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERpdmlkZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uUGFuZWxNb2R1bGUge31cclxuIl19