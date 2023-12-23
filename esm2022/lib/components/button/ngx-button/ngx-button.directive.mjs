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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL25neC1idXR0b24vbmd4LWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUtoRixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFGOUQsWUFBTyxHQUF1RCxTQUFTLENBQUM7UUFDakYsYUFBUSxHQUFXLEtBQUssQ0FBQztJQUV6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElB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LEVBQUUsR0FBRyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3ZHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQTlEVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjs7NEZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7eUhBR1UsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neC1idXR0b25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG5neFR5cGU6ICdwcmltYXJ5JyB8ICdkZWZhdWx0JyB8ICdkYXNoZWQnIHwgJ3RleHQnIHwgJ2xpbmsnID0gJ2RlZmF1bHQnO1xuICBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcwLjY1Jyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncGFkZGluZycsICc4cHggMTZweCcpO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9udC1zaXplJywgJzE0cHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JvcmRlci1yYWRpdXMnLCAnNHB4Jyk7XG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB0aGlzLmRpc2FibGVkID8gJ25vLWRyb3AnIDogJ3BvaW50ZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JvcmRlcicsICcxcHggc29saWQnKTtcblxuICAgIHN3aXRjaCAodGhpcy5uZ3hUeXBlKSB7XG4gICAgICBjYXNlICdwcmltYXJ5Jzoge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLmRpc2FibGVkID8gJyNEQ0RDREMnIDogJyMxODkwRkYnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsICcjRkZGRkZGJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyJywgJ25vbmUnKTtcbiAgICAgICAgdGhpcy5ob3Zlcih0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkZWZhdWx0Jzoge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgdGhpcy5ob3Zlcih0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkYXNoZWQnOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JvcmRlcicsICcxcHggZGFzaGVkJyk7XG4gICAgICAgIHRoaXMuaG92ZXIodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndGV4dCc6IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyJywgJ25vbmUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdsaW5rJzoge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBob3ZlcihkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZCkgeyByZXR1cm47IH1cbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3gtc2hhZG93JywgJzAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSknKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdib3gtc2hhZG93JywgJycpO1xuICAgIH0pO1xuICB9XG5cbn0iXX0=