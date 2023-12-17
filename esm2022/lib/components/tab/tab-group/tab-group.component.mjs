import { Component, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabGroupComponent {
    constructor() {
        this.animationToLeft = false;
        this.animationToRigth = false;
        this.animationToCenter = false;
        this.subscription = new Subscription();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.selectTab(this.tabs.first);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    selectTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab === this.tabs.first) {
            return this.animationmoveToRight(tab);
        }
        if (tab === this.tabs.last) {
            return this.animationmoveToLeft(tab);
        }
        return this.animationmoveToLeft(tab);
    }
    animationmoveToLeft(tab) {
        this.animationToLeft = true;
        this.tabs.forEach((tab) => (tab.isActive = false));
        tab.isActive = true;
        setTimeout(() => {
            this.animationToLeft = false;
        }, 300);
    }
    animationmoveToRight(tab) {
        this.animationToRigth = true;
        this.tabs.forEach((tab) => (tab.isActive = false));
        tab.isActive = true;
        setTimeout(() => {
            this.animationToRigth = false;
        }, 300);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabGroupComponent, selector: "ngx-tab-group", queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: "<ul class=\"z-40 flex justify-around list-none m-0 relative w-full\">\n  <li\n    class=\"flex justify-center w-full font-normal cursor-pointer h-10 items-center\"\n    *ngFor=\"let tab of tabs\"\n    [ngClass]=\"{\n      'active font-bold opacity-100': tab.isActive,\n      'opacity-50 cursor-no-drop ': tab.disabled\n    }\"\n    (click)=\"selectTab(tab)\"\n  >\n    {{ tab.label }}\n  </li>\n</ul>\n\n<div\n  class=\"mt-2\"\n  [class.animation-center-left]=\"animationToLeft\"\n  [class.animation-left-center]=\"animationToRigth\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #e8eaed}.animation-right-center{position:relative;animation-name:animation-right-center-frames;animation-duration:.3s}@keyframes animation-right-center-frames{0%{left:100%;top:0}to{left:0;top:0}}.animation-center-left{position:relative;animation-name:animation-center-left-frames;animation-duration:.3s}@keyframes animation-center-left-frames{0%{right:0%;top:0}to{right:100%;top:0}}.animation-left-center{position:relative;animation-name:animation-left-center-frames;animation-duration:.3s}@keyframes animation-left-center-frames{0%{right:100%;top:0}to{right:0%;top:0}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tab-group', template: "<ul class=\"z-40 flex justify-around list-none m-0 relative w-full\">\n  <li\n    class=\"flex justify-center w-full font-normal cursor-pointer h-10 items-center\"\n    *ngFor=\"let tab of tabs\"\n    [ngClass]=\"{\n      'active font-bold opacity-100': tab.isActive,\n      'opacity-50 cursor-no-drop ': tab.disabled\n    }\"\n    (click)=\"selectTab(tab)\"\n  >\n    {{ tab.label }}\n  </li>\n</ul>\n\n<div\n  class=\"mt-2\"\n  [class.animation-center-left]=\"animationToLeft\"\n  [class.animation-left-center]=\"animationToRigth\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #e8eaed}.animation-right-center{position:relative;animation-name:animation-right-center-frames;animation-duration:.3s}@keyframes animation-right-center-frames{0%{left:100%;top:0}to{left:0;top:0}}.animation-center-left{position:relative;animation-name:animation-center-left-frames;animation-duration:.3s}@keyframes animation-center-left-frames{0%{right:0%;top:0}to{right:100%;top:0}}.animation-left-center{position:relative;animation-name:animation-left-center-frames;animation-duration:.3s}@keyframes animation-left-center-frames{0%{right:100%;top:0}to{right:0%;top:0}}\n"] }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFiL3RhYi1ncm91cC90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVFwQyxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBT0Usb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUUzQixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBMEN6RDtJQXhDQyxrQkFBa0I7UUFDaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsR0FBUTtRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxHQUFRO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7K0dBL0NVLGlCQUFpQjttR0FBakIsaUJBQWlCLDBFQUNYLFlBQVksNkJDWC9CLGlrQkFxQkE7OzRGRFhhLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxlQUFlOzhCQUthLElBQUk7c0JBQXpDLGVBQWU7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi4vdGFiL3RhYi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGFiLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1ncm91cC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cENvbXBvbmVudCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSBwdWJsaWMgdGFicyE6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuICBhbmltYXRpb25Ub0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYW5pbWF0aW9uVG9SaWd0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRpb25Ub0NlbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZWxlY3RUYWIodGFiOiBUYWIpIHtcbiAgICBpZiAodGFiLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YWIgPT09IHRoaXMudGFicy5maXJzdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9ubW92ZVRvUmlnaHQodGFiKTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gdGhpcy50YWJzLmxhc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbm1vdmVUb0xlZnQodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9ubW92ZVRvTGVmdCh0YWIpO1xuICB9XG5cbiAgYW5pbWF0aW9ubW92ZVRvTGVmdCh0YWI6IFRhYikge1xuICAgIHRoaXMuYW5pbWF0aW9uVG9MZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiAodGFiLmlzQWN0aXZlID0gZmFsc2UpKTtcbiAgICB0YWIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25Ub0xlZnQgPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgYW5pbWF0aW9ubW92ZVRvUmlnaHQodGFiOiBUYWIpIHtcbiAgICB0aGlzLmFuaW1hdGlvblRvUmlndGggPSB0cnVlO1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+ICh0YWIuaXNBY3RpdmUgPSBmYWxzZSkpO1xuICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvblRvUmlndGggPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9XG59XG4iLCI8dWwgY2xhc3M9XCJ6LTQwIGZsZXgganVzdGlmeS1hcm91bmQgbGlzdC1ub25lIG0tMCByZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgPGxpXG4gICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBmb250LW5vcm1hbCBjdXJzb3ItcG9pbnRlciBoLTEwIGl0ZW1zLWNlbnRlclwiXG4gICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAnYWN0aXZlIGZvbnQtYm9sZCBvcGFjaXR5LTEwMCc6IHRhYi5pc0FjdGl2ZSxcbiAgICAgICdvcGFjaXR5LTUwIGN1cnNvci1uby1kcm9wICc6IHRhYi5kaXNhYmxlZFxuICAgIH1cIlxuICAgIChjbGljayk9XCJzZWxlY3RUYWIodGFiKVwiXG4gID5cbiAgICB7eyB0YWIubGFiZWwgfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxkaXZcbiAgY2xhc3M9XCJtdC0yXCJcbiAgW2NsYXNzLmFuaW1hdGlvbi1jZW50ZXItbGVmdF09XCJhbmltYXRpb25Ub0xlZnRcIlxuICBbY2xhc3MuYW5pbWF0aW9uLWxlZnQtY2VudGVyXT1cImFuaW1hdGlvblRvUmlndGhcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==