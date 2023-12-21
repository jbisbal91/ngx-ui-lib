import { Component, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TabGroupComponent {
    constructor() {
        this.animationToLeft = false;
        this.animationToRigth = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWIvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFiL3RhYi1ncm91cC90YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVFwQyxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBT0Usb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7S0EwQ3pEO0lBeENDLGtCQUFrQjtRQUNoQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFRO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELG9CQUFvQixDQUFDLEdBQVE7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzsrR0E5Q1UsaUJBQWlCO21HQUFqQixpQkFBaUIsMEVBQ1gsWUFBWSw2QkNYL0IsaWtCQXFCQTs7NEZEWGEsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLGVBQWU7OEJBS2EsSUFBSTtzQkFBekMsZUFBZTt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuLi90YWIvdGFiLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10YWItZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQ29tcG9uZW50IHtcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHB1YmxpYyB0YWJzITogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XG4gIGFuaW1hdGlvblRvTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xuICBhbmltYXRpb25Ub1JpZ3RoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFRhYih0aGlzLnRhYnMuZmlyc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNlbGVjdFRhYih0YWI6IFRhYikge1xuICAgIGlmICh0YWIuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gdGhpcy50YWJzLmZpcnN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25tb3ZlVG9SaWdodCh0YWIpO1xuICAgIH1cbiAgICBpZiAodGFiID09PSB0aGlzLnRhYnMubGFzdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9ubW92ZVRvTGVmdCh0YWIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25tb3ZlVG9MZWZ0KHRhYik7XG4gIH1cblxuICBhbmltYXRpb25tb3ZlVG9MZWZ0KHRhYjogVGFiKSB7XG4gICAgdGhpcy5hbmltYXRpb25Ub0xlZnQgPSB0cnVlO1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+ICh0YWIuaXNBY3RpdmUgPSBmYWxzZSkpO1xuICAgIHRhYi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvblRvTGVmdCA9IGZhbHNlO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBhbmltYXRpb25tb3ZlVG9SaWdodCh0YWI6IFRhYikge1xuICAgIHRoaXMuYW5pbWF0aW9uVG9SaWd0aCA9IHRydWU7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4gKHRhYi5pc0FjdGl2ZSA9IGZhbHNlKSk7XG4gICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVG9SaWd0aCA9IGZhbHNlO1xuICAgIH0sIDMwMCk7XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cInotNDAgZmxleCBqdXN0aWZ5LWFyb3VuZCBsaXN0LW5vbmUgbS0wIHJlbGF0aXZlIHctZnVsbFwiPlxuICA8bGlcbiAgICBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGZvbnQtbm9ybWFsIGN1cnNvci1wb2ludGVyIGgtMTAgaXRlbXMtY2VudGVyXCJcbiAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICdhY3RpdmUgZm9udC1ib2xkIG9wYWNpdHktMTAwJzogdGFiLmlzQWN0aXZlLFxuICAgICAgJ29wYWNpdHktNTAgY3Vyc29yLW5vLWRyb3AgJzogdGFiLmRpc2FibGVkXG4gICAgfVwiXG4gICAgKGNsaWNrKT1cInNlbGVjdFRhYih0YWIpXCJcbiAgPlxuICAgIHt7IHRhYi5sYWJlbCB9fVxuICA8L2xpPlxuPC91bD5cblxuPGRpdlxuICBjbGFzcz1cIm10LTJcIlxuICBbY2xhc3MuYW5pbWF0aW9uLWNlbnRlci1sZWZ0XT1cImFuaW1hdGlvblRvTGVmdFwiXG4gIFtjbGFzcy5hbmltYXRpb24tbGVmdC1jZW50ZXJdPVwiYW5pbWF0aW9uVG9SaWd0aFwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19