import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CardAvatarDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', '2.5rem');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'width', '2.5rem');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border-radius', '50%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardAvatarDirective, selector: "[ngx-card-avatar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-card-avatar]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hdmF0YXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVpLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvZGlyZWN0aXZlcy9jYXJkLWF2YXRhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7O0FBS3pFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBbUIsVUFBc0IsRUFBVSxTQUFvQjtRQUFwRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFFM0UsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixlQUFlLEVBQ2YsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOytHQWRVLG1CQUFtQjttR0FBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4LWNhcmQtYXZhdGFyXScsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBdmF0YXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgc2V0U3R5bGUoKSB7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMi41cmVtJyk7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcyLjVyZW0nKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2JvcmRlci1yYWRpdXMnLFxuICAgICAgJzUwJSdcbiAgICApO1xuICB9XG59XG4iXX0=