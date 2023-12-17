import { Component, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabGroupComponent {
    constructor() {
        this.subscription = new Subscription();
    }
    ngAfterContentInit() {
        this.selectTab(this.tabs.first);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    selectTab(tab) {
        if (tab.disabled) {
            return;
        }
        this.tabs.forEach(tab => tab.isActive = false);
        tab.isActive = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabGroupComponent, selector: "ngx-tab-group", queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: "<ul class=\"z-50 flex justify-around list-none m-0 relative w-full\">\n    <li class=\"flex justify-center w-full text-lg font-semibold text-black cursor-pointer h-10 items-center\"\n        *ngFor=\"let tab of tabs\"\n        [ngClass]=\"{'active text-blue-800 opacity-100':tab.isActive,'opacity-50 cursor-no-drop ':tab.disabled}\"\n        (click)=\"selectTab(tab)\">\n        {{tab.label}}\n    </li>\n</ul>\n\n<div class=\"mt-2\">\n    <ng-content></ng-content>\n</div>", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #3F51B5}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tab-group', template: "<ul class=\"z-50 flex justify-around list-none m-0 relative w-full\">\n    <li class=\"flex justify-center w-full text-lg font-semibold text-black cursor-pointer h-10 items-center\"\n        *ngFor=\"let tab of tabs\"\n        [ngClass]=\"{'active text-blue-800 opacity-100':tab.isActive,'opacity-50 cursor-no-drop ':tab.disabled}\"\n        (click)=\"selectTab(tab)\">\n        {{tab.label}}\n    </li>\n</ul>\n\n<div class=\"mt-2\">\n    <ng-content></ng-content>\n</div>", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #3F51B5}\n"] }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFiL3RhYi1ncm91cC90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVFwQyxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBU1UsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQWV6RDtJQWJDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQzlDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7K0dBbEJVLGlCQUFpQjttR0FBakIsaUJBQWlCLDBFQUVYLFlBQVksNkJDWi9CLDJkQVdNOzs0RkRETyxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsZUFBZTs4QkFNYSxJQUFJO3NCQUF6QyxlQUFlO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRhYiB9IGZyb20gJy4uL3RhYi90YWIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRhYi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItZ3JvdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cENvbXBvbmVudCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHB1YmxpYyB0YWJzITogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNlbGVjdFRhYih0YWI6IFRhYikge1xuICAgIGlmICh0YWIuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHRhYi5pc0FjdGl2ZSA9IGZhbHNlKVxuICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cInotNTAgZmxleCBqdXN0aWZ5LWFyb3VuZCBsaXN0LW5vbmUgbS0wIHJlbGF0aXZlIHctZnVsbFwiPlxuICAgIDxsaSBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIGgtMTAgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUgdGV4dC1ibHVlLTgwMCBvcGFjaXR5LTEwMCc6dGFiLmlzQWN0aXZlLCdvcGFjaXR5LTUwIGN1cnNvci1uby1kcm9wICc6dGFiLmRpc2FibGVkfVwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIodGFiKVwiPlxuICAgICAgICB7e3RhYi5sYWJlbH19XG4gICAgPC9saT5cbjwvdWw+XG5cbjxkaXYgY2xhc3M9XCJtdC0yXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19