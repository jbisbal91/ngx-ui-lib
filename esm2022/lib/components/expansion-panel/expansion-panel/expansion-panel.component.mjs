import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../divider/divider/divider.component";
export class ExpansionPanelComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.id = '';
        this.disabled = false;
        this.expanded = false;
        this.label = '';
        this.ngxType = 'normal';
    }
    ngOnInit() {
        this.id = this.guid();
    }
    expand() {
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = this.expanded;
        expansionPanel.label = this.label;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.onClick.emit(expansionPanel);
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ExpansionPanelComponent, selector: "ngx-expansion-panel", inputs: { disabled: "disabled", label: "label", ngxType: "ngxType" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<div class=\"mb-4\" [ngClass]=\"{'bg-white rounded-lg box-shadow':ngxType==='card'}\">\r\n    <div (click)=\"expand()\"\r\n        class=\"flex justify-between text-lg font-semibold text-black cursor-pointer items-center p-4\">\r\n        <span class=\"text-black\">{{label}}</span>\r\n        <svg [ngClass]=\"expanded?'rotate':'no-rotate'\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z\"/></svg>\r\n    </div>\r\n    <ng-container *ngIf=\"expanded\">\r\n        <ng-content></ng-content>\r\n    </ng-container>\r\n    <ngx-divider *ngIf=\"ngxType==='normal'\"></ngx-divider>\r\n</div>", styles: [":host{width:100%}.rotate{rotate:180deg;transition:rotate .2s ease-out}.no-rotate{rotate:0deg;transition:rotate .2s ease-out}.box-shadow{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.DividerComponent, selector: "ngx-divider", inputs: ["ngxText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-expansion-panel', template: "<div class=\"mb-4\" [ngClass]=\"{'bg-white rounded-lg box-shadow':ngxType==='card'}\">\r\n    <div (click)=\"expand()\"\r\n        class=\"flex justify-between text-lg font-semibold text-black cursor-pointer items-center p-4\">\r\n        <span class=\"text-black\">{{label}}</span>\r\n        <svg [ngClass]=\"expanded?'rotate':'no-rotate'\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z\"/></svg>\r\n    </div>\r\n    <ng-container *ngIf=\"expanded\">\r\n        <ng-content></ng-content>\r\n    </ng-container>\r\n    <ngx-divider *ngIf=\"ngxType==='normal'\"></ngx-divider>\r\n</div>", styles: [":host{width:100%}.rotate{rotate:180deg;transition:rotate .2s ease-out}.no-rotate{rotate:0deg;transition:rotate .2s ease-out}.box-shadow{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], ngxType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVEvRSxNQUFNLE9BQU8sdUJBQXVCO0lBVWxDO1FBUlUsWUFBTyxHQUEwQyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUVoRyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFzQixRQUFRLENBQUM7SUFFakMsQ0FBQztJQUVmLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sY0FBYyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQTtRQUNwRCxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2pDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUN2QyxjQUFjLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUk7UUFDRixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBL0JVLHVCQUF1QjttR0FBdkIsdUJBQXVCLGtLQ1JwQywwckJBVU07OzRGREZPLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSxxQkFBcUI7MEVBTXJCLE9BQU87c0JBQWhCLE1BQU07Z0JBR0UsUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhwYW5zaW9uUGFuZWwgfSBmcm9tICcuLi9leHBhbnNpb24tcGFuZWwuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWV4cGFuc2lvbi1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIEV4cGFuc2lvblBhbmVsLCBPbkluaXQge1xuXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFeHBhbnNpb25QYW5lbENvbXBvbmVudD4oKTtcbiAgXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG5neFR5cGU6ICdjYXJkJyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG4gXG4gIGNvbnN0cnVjdG9yKCl7fVxuIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlkID0gdGhpcy5ndWlkKCk7XG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgY29uc3QgZXhwYW5zaW9uUGFuZWwgPSBuZXcgRXhwYW5zaW9uUGFuZWxDb21wb25lbnQoKVxuICAgIGV4cGFuc2lvblBhbmVsLmV4cGFuZGVkID0gdGhpcy5leHBhbmRlZDtcbiAgICBleHBhbnNpb25QYW5lbC5sYWJlbCA9IHRoaXMubGFiZWxcbiAgICBleHBhbnNpb25QYW5lbC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRcbiAgICBleHBhbnNpb25QYW5lbC5pZCA9IHRoaXMuaWQ7XG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXhwYW5zaW9uUGFuZWwpO1xuICB9XG5cbiAgZ3VpZCgpIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1iLTRcIiBbbmdDbGFzc109XCJ7J2JnLXdoaXRlIHJvdW5kZWQtbGcgYm94LXNoYWRvdyc6bmd4VHlwZT09PSdjYXJkJ31cIj5cclxuICAgIDxkaXYgKGNsaWNrKT1cImV4cGFuZCgpXCJcclxuICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBwLTRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtYmxhY2tcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgPHN2ZyBbbmdDbGFzc109XCJleHBhbmRlZD8ncm90YXRlJzonbm8tcm90YXRlJ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiMjRcIj48cGF0aCBkPVwiTTQ4MC0zNDQgMjQwLTU4NGw1Ni01NiAxODQgMTg0IDE4NC0xODQgNTYgNTYtMjQwIDI0MFpcIi8+PC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRlZFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5neC1kaXZpZGVyICpuZ0lmPVwibmd4VHlwZT09PSdub3JtYWwnXCI+PC9uZ3gtZGl2aWRlcj5cclxuPC9kaXY+Il19