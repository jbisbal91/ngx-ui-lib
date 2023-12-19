import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxButtonDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxType = 'default';
        this.disabled = false;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        this.disabled = this.elementRef.nativeElement.disabled;
        if (this.disabled) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'opacity', '0.65');
        }
        this.renderer2.setStyle(this.elementRef.nativeElement, 'padding', '8px 16px');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', '14px');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border-radius', '4px');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'cursor', this.disabled ? 'no-drop' : 'pointer');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px solid');
        switch (this.ngxType) {
            case 'primary': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.disabled ? '#DCDCDC' : '#1890FF');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#FFFFFF');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
                this.hover(this.disabled);
                break;
            }
            case 'default': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.hover(this.disabled);
                break;
            }
            case 'dashed': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px dashed');
                this.hover(this.disabled);
                break;
            }
            case 'text': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
                break;
            }
            case 'link': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#1890FF');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'border', 'none');
                break;
            }
        }
    }
    hover(disabled) {
        if (disabled) {
            return;
        }
        this.renderer2.listen(this.elementRef.nativeElement, 'mouseenter', () => {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1)');
        });
        this.renderer2.listen(this.elementRef.nativeElement, 'mouseleave', () => {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'box-shadow', '');
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NgxButtonDirective, selector: "[ngx-button]", inputs: { ngxType: "ngxType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-button]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL25neC1idXR0b24vbmd4LWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUtoRixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFGOUQsWUFBTyxHQUF1RCxTQUFTLENBQUM7UUFDakYsYUFBUSxHQUFXLEtBQUssQ0FBQztJQUV6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElB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USxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDdkcsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBL0RVLGtCQUFrQjttR0FBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjt5SEFHVSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4LWJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmd4VHlwZTogJ3ByaW1hcnknIHwgJ2RlZmF1bHQnIHwgJ2Rhc2hlZCcgfCAndGV4dCcgfCAnbGluaycgPSAnZGVmYXVsdCc7XG4gIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAuNjUnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdwYWRkaW5nJywgJzhweCAxNnB4Jyk7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb250LXNpemUnLCAnMTRweCcpO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyLXJhZGl1cycsICc0cHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsIHRoaXMuZGlzYWJsZWQgPyAnbm8tZHJvcCcgOiAncG9pbnRlcicpO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyJywgJzFweCBzb2xpZCcpO1xuXG4gICAgc3dpdGNoICh0aGlzLm5neFR5cGUpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuZGlzYWJsZWQgPyAnI0RDRENEQycgOiAnIzE4OTBGRicpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgJyNGRkZGRkYnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICB0aGlzLmhvdmVyKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2RlZmF1bHQnOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuICAgICAgICB0aGlzLmhvdmVyKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Rhc2hlZCc6IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyJywgJzFweCBkYXNoZWQnKTtcbiAgICAgICAgdGhpcy5ob3Zlcih0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2xpbmsnOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgJyMxODkwRkYnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBob3ZlcihkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZCkgeyByZXR1cm47IH1cbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3gtc2hhZG93JywgJzAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSknKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3gtc2hhZG93JywgJycpO1xuICAgIH0pO1xuICB9XG5cbn0iXX0=