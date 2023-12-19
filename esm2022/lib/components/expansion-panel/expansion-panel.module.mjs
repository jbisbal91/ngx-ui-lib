import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from '../divider/divider.module';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import * as i0 from "@angular/core";
export class ExpansionPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, declarations: [AccordionComponent,
            ExpansionPanelComponent], imports: [CommonModule,
            DividerModule], exports: [AccordionComponent,
            ExpansionPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, imports: [CommonModule,
            DividerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccordionComponent,
                        ExpansionPanelComponent
                    ],
                    exports: [
                        AccordionComponent,
                        ExpansionPanelComponent
                    ],
                    imports: [
                        CommonModule,
                        DividerModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBaUJyRSxNQUFNLE9BQU8sb0JBQW9COytHQUFwQixvQkFBb0I7Z0hBQXBCLG9CQUFvQixpQkFaN0Isa0JBQWtCO1lBQ2xCLHVCQUF1QixhQU92QixZQUFZO1lBQ1osYUFBYSxhQUxiLGtCQUFrQjtZQUNsQix1QkFBdUI7Z0hBT2Qsb0JBQW9CLFlBSjdCLFlBQVk7WUFDWixhQUFhOzs0RkFHSixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGl2aWRlck1vZHVsZSB9IGZyb20gJy4uL2RpdmlkZXIvZGl2aWRlci5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcclxuICAgIEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBFeHBhbnNpb25QYW5lbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCAgICBcclxuICAgIERpdmlkZXJNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25QYW5lbE1vZHVsZSB7IH1cclxuIl19