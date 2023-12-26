import { Directive } from '@angular/core';
import { NgxButtonDirective } from '../ngx-button/ngx-button.directive';
import * as i0 from "@angular/core";
export class SuccessButtonDirective extends NgxButtonDirective {
    constructor(element, renderer) {
        super(element, renderer);
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        switch (this.ngxType) {
            case 'primary': {
                this.renderer.setStyle(this.element.nativeElement, 'background-color', this.disabled ? '#30E87A' : '#5AF499');
                this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#18181B');
                break;
            }
            case 'default': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
                this.renderer.setStyle(this.element.nativeElement, 'border-color', '#5AF499');
                break;
            }
            case 'dashed': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
                this.renderer.setStyle(this.element.nativeElement, 'border-color', '#5AF499');
                break;
            }
            case 'text': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
                break;
            }
            case 'link': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#5AF499');
                break;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SuccessButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SuccessButtonDirective, selector: "[ngxSuccess]", host: { classAttribute: "ngx-success" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SuccessButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxSuccess]',
                    host: {
                        class: 'ngx-success',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVpLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9zdWNjZXNzLWJ1dHRvbi9zdWNjZXNzLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBUXhFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxrQkFBa0I7SUFFNUQsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUNsRSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFFcEUsQ0FBQztJQUVRLFFBQVE7UUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVRLFFBQVE7UUFFZixRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDcEIsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzFFLE1BQU07YUFDUDtZQUNELEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlFLE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlFLE1BQU07YUFDUDtZQUNELEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNO2FBQ1A7WUFDRCxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkUsTUFBTTthQUNQO1NBQ0Y7SUFDSCxDQUFDOytHQXJDVSxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFObEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxhQUFhO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL25neC1idXR0b24vbmd4LWJ1dHRvbi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U3VjY2Vzc10nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtc3VjY2VzcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN1Y2Nlc3NCdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBOZ3hCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVuZGVyZXIpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0U3R5bGUoKSB7XG4gICAgICBcbiAgICBzd2l0Y2ggKHRoaXMubmd4VHlwZSkge1xuICAgICAgY2FzZSAncHJpbWFyeSc6IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLmRpc2FibGVkID8gJyMzMEU4N0EnIDogJyM1QUY0OTknKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgJyMxODE4MUInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkZWZhdWx0Jzoge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY29sb3InLCAnIzVBRjQ5OScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYm9yZGVyLWNvbG9yJywgJyM1QUY0OTknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkYXNoZWQnOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsICcjNUFGNDk5Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdib3JkZXItY29sb3InLCAnIzVBRjQ5OScpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsICcjNUFGNDk5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbGluayc6IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgJyM1QUY0OTknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==