import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxBadgePosition = 'after';
        this.ngxBadgeSize = 'small';
        this.ngxBadgeHidden = false;
        this.newSpan = document.createElement('span');
    }
    ngOnChanges(changes) {
        if (changes['ngxBadgeHidden']?.currentValue) {
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BadgeDirective, selector: "[ngxBadge]", inputs: { ngxBadge: "ngxBadge", ngxBadgePosition: "ngxBadgePosition", ngxBadgeSize: "ngxBadgeSize", ngxBadgeHidden: "ngxBadgeHidden" }, host: { classAttribute: "ngx-badge" }, usesOnChanges: true, ngImport: i0 }); }
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
            }], ngxBadgeHidden: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVpLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FNTixNQUFNLGVBQWUsQ0FBQzs7QUFRdkIsTUFBTSxPQUFPLGNBQWM7SUFTekIsWUFBbUIsVUFBc0IsRUFBVSxTQUFvQjtRQUFwRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVA5RCxxQkFBZ0IsR0FBdUIsT0FBTyxDQUFDO1FBQy9DLGlCQUFZLEdBQWlDLE9BQU8sQ0FBQztRQUU5RCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxZQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVpQyxDQUFDO0lBRTNFLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLEVBQUU7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDOytHQWpDVSxjQUFjO21HQUFkLGNBQWM7OzRGQUFkLGNBQWM7a0JBTjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsV0FBVztxQkFDbkI7aUJBQ0Y7eUhBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFTixjQUFjO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBib29sZWFuQXR0cmlidXRlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEJhZGdlXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1iYWRnZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG5neEJhZGdlOiBhbnk7XG4gIEBJbnB1dCgpIG5neEJhZGdlUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIEBJbnB1dCgpIG5neEJhZGdlU2l6ZTogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyA9ICdzbWFsbCc7XG4gIEBJbnB1dCgpXG4gIG5neEJhZGdlSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmV3U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ25neEJhZGdlSGlkZGVuJ10/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZXdTcGFuLnRleHRDb250ZW50ID0gdGhpcy5uZ3hCYWRnZTtcbiAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtY29udGVudCcpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1idG4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZ3hCYWRnZVBvc2l0aW9uID09ICdiZWZvcmUnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLm5ld1NwYW4sICduZ3gtYmFkZ2UtYmVmb3JlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCBgbmd4LWJhZGdlLSR7dGhpcy5uZ3hCYWRnZVNpemV9YCk7XG4gICAgdGhpcy5yZW5kZXJlcjIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmV3U3Bhbik7XG4gIH1cbn1cbiJdfQ==