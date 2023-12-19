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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBcUJ2RSxNQUFNLE9BQU8sVUFBVTsrR0FBVixVQUFVO2dIQUFWLFVBQVUsaUJBakJuQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQixhQVVWLFlBQVksYUFQcEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7Z0hBSVQsVUFBVSxZQUZYLFlBQVk7OzRGQUVYLFVBQVU7a0JBbkJ0QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLWhlYWRlci9jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1jb250ZW50L2NhcmQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1hY3Rpb25zL2NhcmQtYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEF2YXRhckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYXJkLWF2YXRhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FyZEltYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhcmQtaW1hZ2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICAgIENhcmRDb250ZW50Q29tcG9uZW50LFxuICAgIENhcmRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhcmRBdmF0YXJEaXJlY3RpdmUsXG4gICAgQ2FyZEltYWdlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICAgIENhcmRDb250ZW50Q29tcG9uZW50LFxuICAgIENhcmRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhcmRBdmF0YXJEaXJlY3RpdmUsXG4gICAgQ2FyZEltYWdlRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1vZHVsZSB7fVxuIl19