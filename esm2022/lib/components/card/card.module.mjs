import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardActionsComponent } from './components/card-actions/card-actions.component';
import { CardAvatarDirective } from './directives/card-avatar.directive';
import { CardImageDirective } from './directives/card-image.directive';
import * as i0 from "@angular/core";
export class CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardModule, declarations: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective], imports: [CommonModule], exports: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CardComponent,
                        CardHeaderComponent,
                        CardContentComponent,
                        CardActionsComponent,
                        CardAvatarDirective,
                        CardImageDirective,
                    ],
                    exports: [
                        CardComponent,
                        CardHeaderComponent,
                        CardContentComponent,
                        CardActionsComponent,
                        CardAvatarDirective,
                        CardImageDirective,
                    ],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBcUJ2RSxNQUFNLE9BQU8sVUFBVTsrR0FBVixVQUFVO2dIQUFWLFVBQVUsaUJBakJuQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQixhQVVWLFlBQVksYUFQcEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7Z0hBSVQsVUFBVSxZQUZYLFlBQVk7OzRGQUVYLFVBQVU7a0JBbkJ0QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtaGVhZGVyL2NhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLWNvbnRlbnQvY2FyZC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLWFjdGlvbnMvY2FyZC1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQXZhdGFyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhcmQtYXZhdGFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYXJkSW1hZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FyZC1pbWFnZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gICAgQ2FyZEFjdGlvbnNDb21wb25lbnQsXG4gICAgQ2FyZEF2YXRhckRpcmVjdGl2ZSxcbiAgICBDYXJkSW1hZ2VEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gICAgQ2FyZEFjdGlvbnNDb21wb25lbnQsXG4gICAgQ2FyZEF2YXRhckRpcmVjdGl2ZSxcbiAgICBDYXJkSW1hZ2VEaXJlY3RpdmUsXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTW9kdWxlIHt9XG4iXX0=