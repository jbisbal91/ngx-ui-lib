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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: BadgeDirective, isStandalone: true, selector: "[ngxBadge]", inputs: { ngxBadge: "ngxBadge", ngxBadgePosition: "ngxBadgePosition", ngxBadgeSize: "ngxBadgeSize", hidden: ["ngxBadgeHidden", "hidden", booleanAttribute] }, host: { classAttribute: "ngx-badge" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBadge]',
                    host: {
                        class: 'ngx-badge',
                    },
                    standalone: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVpLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7O0FBU3ZCLE1BQU0sT0FBTyxjQUFjO0lBU3pCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQOUQscUJBQWdCLEdBQXVCLE9BQU8sQ0FBQztRQUMvQyxpQkFBWSxHQUFpQyxPQUFPLENBQUM7UUFFOUQsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixZQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVpQyxDQUFDO0lBRTNFLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQzsrR0FqQ1UsY0FBYzttR0FBZCxjQUFjLHVMQUlvQixnQkFBZ0I7OzRGQUpsRCxjQUFjO2tCQVAxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7cUJBQ25CO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt5SEFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVOLE1BQU07c0JBREwsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBib29sZWFuQXR0cmlidXRlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEJhZGdlXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1iYWRnZScsXG4gIH0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuZ3hCYWRnZTogYW55O1xuICBASW5wdXQoKSBuZ3hCYWRnZVBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBASW5wdXQoKSBuZ3hCYWRnZVNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZScgPSAnc21hbGwnO1xuICBASW5wdXQoeyBhbGlhczogJ25neEJhZGdlSGlkZGVuJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pXG4gIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydoaWRkZW4nXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1oaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1NwYW4udGV4dENvbnRlbnQgPSB0aGlzLm5neEJhZGdlO1xuICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1jb250ZW50Jyk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWJ0bicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5neEJhZGdlUG9zaXRpb24gPT0gJ2JlZm9yZScpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1iZWZvcmUnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sIGBuZ3gtYmFkZ2UtJHt0aGlzLm5neEJhZGdlU2l6ZX1gKTtcbiAgICB0aGlzLnJlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5uZXdTcGFuKTtcbiAgfVxufVxuIl19