import { Directive, Input, booleanAttribute, } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxBadgePosition = 'after';
        this.ngxBadgeSize = 'small';
        this.hidden = false;
        this.newSpan = document.createElement('span');
    }
    ngOnChanges(changes) {
        if (changes['hidden']?.currentValue) {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-hidden');
        }
        else {
            this.renderer2.removeClass(this.newSpan, 'ngx-badge-hidden');
        }
    }
    ngOnInit() {
        this.newSpan.textContent = this.ngxBadge;
        this.renderer2.addClass(this.newSpan, 'ngx-badge-content');
        if (this.elementRef.nativeElement.tagName.toLowerCase() === 'button') {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-btn');
        }
        if (this.ngxBadgePosition == 'before') {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-before');
        }
        this.renderer2.addClass(this.newSpan, `ngx-badge-${this.ngxBadgeSize}`);
        this.renderer2.appendChild(this.elementRef.nativeElement, this.newSpan);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: BadgeDirective, selector: "[ngxBadge]", inputs: { ngxBadge: "ngxBadge", ngxBadgePosition: "ngxBadgePosition", ngxBadgeSize: "ngxBadgeSize", hidden: ["ngxBadgeHidden", "hidden", booleanAttribute] }, host: { classAttribute: "ngx-badge" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBadge]',
                    host: {
                        class: 'ngx-badge',
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxBadge: [{
                type: Input
            }], ngxBadgePosition: [{
                type: Input
            }], ngxBadgeSize: [{
                type: Input
            }], hidden: [{
                type: Input,
                args: [{ alias: 'ngxBadgeHidden', transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVpLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7O0FBUXZCLE1BQU0sT0FBTyxjQUFjO0lBU3pCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQOUQscUJBQWdCLEdBQXVCLE9BQU8sQ0FBQztRQUMvQyxpQkFBWSxHQUFpQyxPQUFPLENBQUM7UUFFOUQsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixZQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVpQyxDQUFDO0lBRTNFLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQzsrR0FqQ1UsY0FBYzttR0FBZCxjQUFjLG1LQUlvQixnQkFBZ0I7OzRGQUpsRCxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7cUJBQ25CO2lCQUNGO3lIQUVVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRU4sTUFBTTtzQkFETCxLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4QmFkZ2VdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LWJhZGdlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmd4QmFkZ2U6IGFueTtcbiAgQElucHV0KCkgbmd4QmFkZ2VQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgQElucHV0KCkgbmd4QmFkZ2VTaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnID0gJ3NtYWxsJztcbiAgQElucHV0KHsgYWxpYXM6ICduZ3hCYWRnZUhpZGRlbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KVxuICBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snaGlkZGVuJ10/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZXdTcGFuLnRleHRDb250ZW50ID0gdGhpcy5uZ3hCYWRnZTtcbiAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtY29udGVudCcpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1idG4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZ3hCYWRnZVBvc2l0aW9uID09ICdiZWZvcmUnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtYmVmb3JlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCBgbmd4LWJhZGdlLSR7dGhpcy5uZ3hCYWRnZVNpemV9YCk7XG4gICAgdGhpcy5yZW5kZXJlcjIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmV3U3Bhbik7XG4gIH1cbn1cbiJdfQ==