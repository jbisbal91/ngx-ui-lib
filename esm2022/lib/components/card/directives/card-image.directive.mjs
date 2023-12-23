import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CardImageDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'position', 'relative');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'box-sizing', 'border-box');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-repeat', 'no-repeat');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-position', 'center');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-size', 'cover');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardImageDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardImageDirective, selector: "[ngx-card-image]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-card-image]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pbWFnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9kaXJlY3RpdmVzL2NhcmQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDOztBQUt6RSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBRyxDQUFDO0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLFVBQVUsRUFDVixVQUFVLENBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsWUFBWSxFQUNaLFlBQVksQ0FDYixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixtQkFBbUIsRUFDbkIsV0FBVyxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLHFCQUFxQixFQUNyQixRQUFRLENBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsaUJBQWlCLEVBQ2pCLE9BQU8sQ0FDUixDQUFDO0lBQ0osQ0FBQzsrR0FqQ1Usa0JBQWtCO21HQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3gtY2FyZC1pbWFnZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgc2V0U3R5bGUoKSB7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICdwb3NpdGlvbicsXG4gICAgICAncmVsYXRpdmUnXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2JveC1zaXppbmcnLFxuICAgICAgJ2JvcmRlci1ib3gnXG4gICAgKTtcblxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAgICAgJ25vLXJlcGVhdCdcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbicsXG4gICAgICAnY2VudGVyJ1xuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICdiYWNrZ3JvdW5kLXNpemUnLFxuICAgICAgJ2NvdmVyJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==