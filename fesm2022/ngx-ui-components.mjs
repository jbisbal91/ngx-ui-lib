import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Input, ContentChildren, Directive, EventEmitter, Output } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subscription, Subject } from 'rxjs';

class NgxUiComponentsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxUiComponentsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxUiComponentsComponent, selector: "lib-ngx-ui-components", ngImport: i0, template: `
    <p>
      ngx-ui-components works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-ui-components', template: `
    <p>
      ngx-ui-components works!
    </p>
  ` }]
        }] });

class NgxUiComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsModule, declarations: [NgxUiComponentsComponent], exports: [NgxUiComponentsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxUiComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxUiComponentsComponent
                    ],
                    imports: [],
                    exports: [
                        NgxUiComponentsComponent
                    ]
                }]
        }] });

class TabComponent {
    constructor() {
        this.label = '';
        this.isActive = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabComponent, selector: "ngx-tab", inputs: { label: "label", disabled: "disabled" }, ngImport: i0, template: "<ng-content *ngIf=\"isActive\"></ng-content>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tab', template: "<ng-content *ngIf=\"isActive\"></ng-content>\n" }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class TabGroupComponent {
    constructor() {
        this.animationToLeft = false;
        this.animationToRigth = false;
        this.animationToCenter = false;
        this.subscription = new Subscription();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.selectTab(this.tabs.first);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    selectTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab === this.tabs.first) {
            return this.animationmoveToRight(tab);
        }
        if (tab === this.tabs.last) {
            return this.animationmoveToLeft(tab);
        }
        return this.animationmoveToLeft(tab);
    }
    animationmoveToLeft(tab) {
        this.animationToLeft = true;
        this.tabs.forEach((tab) => (tab.isActive = false));
        tab.isActive = true;
        setTimeout(() => {
            this.animationToLeft = false;
        }, 300);
    }
    animationmoveToRight(tab) {
        this.animationToRigth = true;
        this.tabs.forEach((tab) => (tab.isActive = false));
        tab.isActive = true;
        setTimeout(() => {
            this.animationToRigth = false;
        }, 300);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabGroupComponent, selector: "ngx-tab-group", queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: "<ul class=\"z-40 flex justify-around list-none m-0 relative w-full\">\n  <li\n    class=\"flex justify-center w-full font-normal cursor-pointer h-10 items-center\"\n    *ngFor=\"let tab of tabs\"\n    [ngClass]=\"{\n      'active font-bold opacity-100': tab.isActive,\n      'opacity-50 cursor-no-drop ': tab.disabled\n    }\"\n    (click)=\"selectTab(tab)\"\n  >\n    {{ tab.label }}\n  </li>\n</ul>\n\n<div\n  class=\"mt-2\"\n  [class.animation-center-left]=\"animationToLeft\"\n  [class.animation-left-center]=\"animationToRigth\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #e8eaed}.animation-right-center{position:relative;animation-name:animation-right-center-frames;animation-duration:.3s}@keyframes animation-right-center-frames{0%{left:100%;top:0}to{left:0;top:0}}.animation-center-left{position:relative;animation-name:animation-center-left-frames;animation-duration:.3s}@keyframes animation-center-left-frames{0%{right:0%;top:0}to{right:100%;top:0}}.animation-left-center{position:relative;animation-name:animation-left-center-frames;animation-duration:.3s}@keyframes animation-left-center-frames{0%{right:100%;top:0}to{right:0%;top:0}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tab-group', template: "<ul class=\"z-40 flex justify-around list-none m-0 relative w-full\">\n  <li\n    class=\"flex justify-center w-full font-normal cursor-pointer h-10 items-center\"\n    *ngFor=\"let tab of tabs\"\n    [ngClass]=\"{\n      'active font-bold opacity-100': tab.isActive,\n      'opacity-50 cursor-no-drop ': tab.disabled\n    }\"\n    (click)=\"selectTab(tab)\"\n  >\n    {{ tab.label }}\n  </li>\n</ul>\n\n<div\n  class=\"mt-2\"\n  [class.animation-center-left]=\"animationToLeft\"\n  [class.animation-left-center]=\"animationToRigth\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{width:100%}ul{padding:20px 10px 2px!important}ul li{border-bottom:2px solid transparent}ul li.active{border-bottom:2px solid #e8eaed}.animation-right-center{position:relative;animation-name:animation-right-center-frames;animation-duration:.3s}@keyframes animation-right-center-frames{0%{left:100%;top:0}to{left:0;top:0}}.animation-center-left{position:relative;animation-name:animation-center-left-frames;animation-duration:.3s}@keyframes animation-center-left-frames{0%{right:0%;top:0}to{right:100%;top:0}}.animation-left-center{position:relative;animation-name:animation-left-center-frames;animation-duration:.3s}@keyframes animation-left-center-frames{0%{right:100%;top:0}to{right:0%;top:0}}\n"] }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }] } });

class TabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TabModule, declarations: [TabComponent,
            TabGroupComponent], imports: [CommonModule], exports: [TabGroupComponent,
            TabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabComponent,
                        TabGroupComponent
                    ],
                    exports: [
                        TabGroupComponent,
                        TabComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class DialogComponent {
    constructor() {
        this.title = '';
        this.text = '';
        this.answeredSub = new Subject();
        this.answered$ = this.answeredSub.asObservable();
    }
    answerModal(confirmed) {
        console.log('ModalComponent answerModal', confirmed);
        this.answeredSub.next(confirmed);
    }
    ngOnDestroy() {
        // causes complete before childComponent recieves 'next'
        // this.answeredSub.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DialogComponent, selector: "ngx-dialog", inputs: { title: "title", text: "text" }, ngImport: i0, template: "<div class=\"modal-backdrop fixed top-0\"></div>\n<div class=\"modal\">\n  <h2 class=\"modal__title\">{{title}}</h2>\n  <p>{{text}}</p>\n  <div class=\"modal__buttons\">\n    <button class=\"modal__button\" (click)=\"answerModal(true)\">Yes</button>\n    <button class=\"modal__button\" (click)=\"answerModal(false)\">No</button>\n  </div>\n</div>\n", styles: [".modal-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.5);z-index:998;pointer-events:none}.modal{display:flex;flex-direction:column;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:999;background:white;padding:12px}.modal__buttons{display:flex;justify-content:flex-end;gap:12px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dialog', template: "<div class=\"modal-backdrop fixed top-0\"></div>\n<div class=\"modal\">\n  <h2 class=\"modal__title\">{{title}}</h2>\n  <p>{{text}}</p>\n  <div class=\"modal__buttons\">\n    <button class=\"modal__button\" (click)=\"answerModal(true)\">Yes</button>\n    <button class=\"modal__button\" (click)=\"answerModal(false)\">No</button>\n  </div>\n</div>\n", styles: [".modal-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.5);z-index:998;pointer-events:none}.modal{display:flex;flex-direction:column;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:999;background:white;padding:12px}.modal__buttons{display:flex;justify-content:flex-end;gap:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], text: [{
                type: Input
            }] } });

class DialogModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, declarations: [DialogComponent], imports: [CommonModule], exports: [DialogComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DialogComponent
                    ],
                    exports: [
                        DialogComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class NgxButtonDirective {
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
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#000000');
                this.hover(this.disabled);
                break;
            }
            case 'dashed': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#000000');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px dashed');
                this.hover(this.disabled);
                break;
            }
            case 'text': {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', '#000000');
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

class DangerButtonDirective extends NgxButtonDirective {
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
                this.renderer.setStyle(this.element.nativeElement, 'background-color', this.disabled ? '#FFC1C1' : '#FF4D4F');
                break;
            }
            case 'default': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
                this.renderer.setStyle(this.element.nativeElement, 'border-color', '#FF4D4F');
                break;
            }
            case 'dashed': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
                this.renderer.setStyle(this.element.nativeElement, 'border-color', '#FF4D4F');
                break;
            }
            case 'text': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
                break;
            }
            case 'link': {
                this.renderer.setStyle(this.element.nativeElement, 'color', '#FF4D4F');
                break;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DangerButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DangerButtonDirective, selector: "[ngxDanger]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DangerButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxDanger]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class BlockButtonDirective extends NgxButtonDirective {
    constructor(element, renderer) {
        super(element, renderer);
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BlockButtonDirective, selector: "[ngxBlock]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBlock]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class GhostButtonDirective extends NgxButtonDirective {
    constructor(element, renderer) {
        super(element, renderer);
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#FFFFFF');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#FFFFFF');
        switch (this.ngxType) {
            case 'primary': {
                this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#096dd9');
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid');
                this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#096dd9');
                break;
            }
            case 'text': {
                this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid');
                break;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GhostButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GhostButtonDirective, selector: "[ngxGhost]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GhostButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxGhost]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class SuccessButtonDirective extends NgxButtonDirective {
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SuccessButtonDirective, selector: "[ngxSuccess]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SuccessButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxSuccess]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

const directives = [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective];
class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, declarations: [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective], imports: [CommonModule], exports: [NgxButtonDirective, SuccessButtonDirective, DangerButtonDirective, GhostButtonDirective, BlockButtonDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [directives],
                    exports: [directives],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class DividerComponent {
    constructor() {
        this.ngxText = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DividerComponent, selector: "ngx-divider", inputs: { ngxText: "ngxText" }, ngImport: i0, template: "<ng-container>\r\n    <span *ngIf=\"ngxText \" class=\"px-2.5 text-base\">{{ngxText}}</span>\r\n</ng-container>", styles: [":host{display:flex;color:#6b727c;font-weight:500;font-size:16px;white-space:nowrap;text-align:center;border-top:0;border-top-color:#6b727c;align-items:center}:host:before,:host:after{position:relative;top:50%;width:50%;border-top:1px solid transparent;border-top-color:transparent;border-top-color:inherit;border-bottom:0;content:\"\"}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-divider', template: "<ng-container>\r\n    <span *ngIf=\"ngxText \" class=\"px-2.5 text-base\">{{ngxText}}</span>\r\n</ng-container>", styles: [":host{display:flex;color:#6b727c;font-weight:500;font-size:16px;white-space:nowrap;text-align:center;border-top:0;border-top-color:#6b727c;align-items:center}:host:before,:host:after{position:relative;top:50%;width:50%;border-top:1px solid transparent;border-top-color:transparent;border-top-color:inherit;border-bottom:0;content:\"\"}\n"] }]
        }], propDecorators: { ngxText: [{
                type: Input
            }] } });

class DividerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, declarations: [DividerComponent], imports: [CommonModule], exports: [DividerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DividerComponent
                    ],
                    exports: [
                        DividerComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class ExpansionPanelComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.id = '';
        this.disabled = false;
        this.expanded = false;
        this.label = '';
        this.ngxType = 'normal';
    }
    ngOnInit() {
        this.id = this.guid();
    }
    expand() {
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = this.expanded;
        expansionPanel.label = this.label;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.onClick.emit(expansionPanel);
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ExpansionPanelComponent, selector: "ngx-expansion-panel", inputs: { disabled: "disabled", label: "label", ngxType: "ngxType" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<div\r\n  class=\"card-epanel mb-4 p-4\"\r\n  [class.card-bg]=\"ngxType === 'card'\"\r\n  [ngClass]=\"{ 'rounded-lg box-shadow': ngxType === 'card' }\"\r\n>\r\n  <div\r\n    (click)=\"expand()\"\r\n    class=\"flex justify-between w-full text-lg font-semibold cursor-pointer h-10 items-center\"\r\n  >\r\n    <span>{{ label }}</span>\r\n    <span\r\n      class=\"arrow flex justify-center items-center\"\r\n      [ngClass]=\"expanded ? 'rotate' : 'no-rotate'\"\r\n    >\r\n      <svg\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        height=\"24\"\r\n        viewBox=\"0 -960 960 960\"\r\n        width=\"24\"\r\n      >\r\n        <path d=\"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z\" />\r\n      </svg>\r\n    </span>\r\n  </div>\r\n  <ng-content *ngIf=\"expanded\"></ng-content>\r\n  <ngx-divider class=\"mt-4\" *ngIf=\"ngxType === 'normal'\"></ngx-divider>\r\n</div>\r\n", styles: [":host{width:100%}.card-bg{background-color:var(--ngx-theme-bg-epanel)}.card-epanel{color:var(--ngx-theme-color-epanel)}.rotate{rotate:180deg;transition:rotate .2s ease-out}.no-rotate{rotate:0deg;transition:rotate .2s ease-out}.box-shadow{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.p-4{p:1rem}.arrow{filter:var(--ngx-theme-filter-epanel-arrow)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: DividerComponent, selector: "ngx-divider", inputs: ["ngxText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-expansion-panel', template: "<div\r\n  class=\"card-epanel mb-4 p-4\"\r\n  [class.card-bg]=\"ngxType === 'card'\"\r\n  [ngClass]=\"{ 'rounded-lg box-shadow': ngxType === 'card' }\"\r\n>\r\n  <div\r\n    (click)=\"expand()\"\r\n    class=\"flex justify-between w-full text-lg font-semibold cursor-pointer h-10 items-center\"\r\n  >\r\n    <span>{{ label }}</span>\r\n    <span\r\n      class=\"arrow flex justify-center items-center\"\r\n      [ngClass]=\"expanded ? 'rotate' : 'no-rotate'\"\r\n    >\r\n      <svg\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        height=\"24\"\r\n        viewBox=\"0 -960 960 960\"\r\n        width=\"24\"\r\n      >\r\n        <path d=\"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z\" />\r\n      </svg>\r\n    </span>\r\n  </div>\r\n  <ng-content *ngIf=\"expanded\"></ng-content>\r\n  <ngx-divider class=\"mt-4\" *ngIf=\"ngxType === 'normal'\"></ngx-divider>\r\n</div>\r\n", styles: [":host{width:100%}.card-bg{background-color:var(--ngx-theme-bg-epanel)}.card-epanel{color:var(--ngx-theme-color-epanel)}.rotate{rotate:180deg;transition:rotate .2s ease-out}.no-rotate{rotate:0deg;transition:rotate .2s ease-out}.box-shadow{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.p-4{p:1rem}.arrow{filter:var(--ngx-theme-filter-epanel-arrow)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], ngxType: [{
                type: Input
            }] } });

class AccordionComponent {
    constructor() {
        this.subscription = new Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        this.expansionPanels.forEach(ep => {
            this.subscription.add(ep.onClick.subscribe((value) => {
                this.expand(value);
            }));
        });
    }
    expand(component) {
        this.expansionPanels.forEach(ep => {
            if (ep.id === component.id) {
                ep.expanded = ep.expanded ? false : true;
            }
            else {
                ep.expanded = false;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionComponent, selector: "ngx-accordion", queries: [{ propertyName: "expansionPanels", predicate: ExpansionPanelComponent }], ngImport: i0, template: "<ng-container *ngFor=\"let expansionPanel of expansionPanels\">\n    <ng-content></ng-content>\n</ng-container>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-accordion', template: "<ng-container *ngFor=\"let expansionPanel of expansionPanels\">\n    <ng-content></ng-content>\n</ng-container>" }]
        }], propDecorators: { expansionPanels: [{
                type: ContentChildren,
                args: [ExpansionPanelComponent]
            }] } });

class ExpansionPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, declarations: [AccordionComponent,
            ExpansionPanelComponent], imports: [CommonModule,
            DividerModule], exports: [AccordionComponent,
            ExpansionPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, imports: [CommonModule,
            DividerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccordionComponent,
                        ExpansionPanelComponent
                    ],
                    exports: [
                        AccordionComponent,
                        ExpansionPanelComponent
                    ],
                    imports: [
                        CommonModule,
                        DividerModule
                    ]
                }]
        }] });

class IconDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxType = '';
        this.ngxTheme = "outline";
        this.paths = [
            { ngxType: 'step-backward', path: 'M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8' },
            { ngxType: 'step-forward', path: 'M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8' },
            { ngxType: '', path: '' },
            { ngxType: '', path: '' },
            { ngxType: '', path: '' },
            { ngxType: '', path: '' },
            { ngxType: '', path: '' },
        ];
    }
    ngOnInit() {
        // <svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="step-backward" aria-hidden="true"><path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8"></path></svg>
        if (this.elementRef.nativeElement.localName === 'span') {
            this.renderer2.addClass(this.elementRef.nativeElement, 'flex');
            this.renderer2.addClass(this.elementRef.nativeElement, 'justify-center');
            this.renderer2.addClass(this.elementRef.nativeElement, 'items-center');
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('height', '24');
            svg.setAttribute('width', '24');
            svg.setAttribute('viewBox', '0 0 1024 1024');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = this.paths.find(p => p?.ngxType === this.ngxType)?.path || '';
            path.setAttribute('d', d);
            svg.appendChild(path);
            this.elementRef.nativeElement.appendChild(svg);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: IconDirective, selector: "[ngx-icon]", inputs: { ngxType: "ngxType", ngxTheme: "ngxTheme" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-icon]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxType: [{
                type: Input
            }], ngxTheme: [{
                type: Input
            }] } });

class IconModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: IconModule, declarations: [IconDirective], imports: [CommonModule], exports: [IconDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconModule, providers: [
            { provide: Element, useValue: document.createElement('svg') }
        ], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: IconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IconDirective
                    ],
                    exports: [
                        IconDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        { provide: Element, useValue: document.createElement('svg') }
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, BlockButtonDirective, ButtonModule, DangerButtonDirective, DialogComponent, DialogModule, DividerComponent, DividerModule, ExpansionPanelComponent, ExpansionPanelModule, GhostButtonDirective, IconDirective, IconModule, NgxButtonDirective, NgxUiComponentsComponent, NgxUiComponentsModule, NgxUiComponentsService, SuccessButtonDirective, TabComponent, TabGroupComponent, TabModule };
//# sourceMappingURL=ngx-ui-components.mjs.map
