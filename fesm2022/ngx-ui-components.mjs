import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Directive, Input, booleanAttribute, ChangeDetectionStrategy, ContentChildren, EventEmitter, Output, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subscription, Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

class BadgeDirective {
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
                    },
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

class BadgeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, declarations: [BadgeDirective], imports: [CommonModule], exports: [BadgeDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BadgeDirective],
                    exports: [BadgeDirective],
                    imports: [CommonModule],
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
    }
    hover(disabled) {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NgxButtonDirective, selector: "[ngx-button]", inputs: { ngxType: "ngxType" }, host: { properties: { "class.ngx-button-primary": "ngxType === \"primary\"", "class.ngx-button-default": "ngxType === \"default\"", "class.ngx-button-dashed": "ngxType === \"dashed\"", "class.ngx-button-text": "ngxType === \"text\"", "class.ngx-button-link": "ngxType === \"link\"" }, classAttribute: "ngx-button" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-button]',
                    host: {
                        class: 'ngx-button',
                        '[class.ngx-button-primary]': 'ngxType === "primary"',
                        '[class.ngx-button-default]': 'ngxType === "default"',
                        '[class.ngx-button-dashed]': 'ngxType === "dashed"',
                        '[class.ngx-button-text]': 'ngxType === "text"',
                        '[class.ngx-button-link]': 'ngxType === "link"',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxType: [{
                type: Input
            }] } });

class DangerButtonDirective extends NgxButtonDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DangerButtonDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DangerButtonDirective, selector: "[ngxDanger]", host: { classAttribute: "ngx-danger" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DangerButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxDanger]',
                    host: {
                        class: 'ngx-danger',
                    },
                }]
        }] });

class BlockButtonDirective extends NgxButtonDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BlockButtonDirective, selector: "[ngxBlock]", host: { classAttribute: "ngx-block" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BlockButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBlock]',
                    host: {
                        class: 'ngx-block',
                    },
                }]
        }] });

class GhostButtonDirective extends NgxButtonDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GhostButtonDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: GhostButtonDirective, selector: "[ngxGhost]", host: { classAttribute: "ngx-ghost" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GhostButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxGhost]',
                    host: {
                        class: 'ngx-ghost',
                    },
                }]
        }] });

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

const directives = [
    NgxButtonDirective,
    SuccessButtonDirective,
    DangerButtonDirective,
    GhostButtonDirective,
    BlockButtonDirective,
];
class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, declarations: [NgxButtonDirective,
            SuccessButtonDirective,
            DangerButtonDirective,
            GhostButtonDirective,
            BlockButtonDirective], imports: [CommonModule], exports: [NgxButtonDirective,
            SuccessButtonDirective,
            DangerButtonDirective,
            GhostButtonDirective,
            BlockButtonDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [directives],
                    exports: [directives],
                    imports: [CommonModule],
                }]
        }] });

class CarouselItemComponent {
    constructor() {
        this.id = '';
        this.isActive = false;
        this.disabled = false;
    }
    ngOnInit() {
        this.id = this.guid();
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CarouselItemComponent, selector: "ngx-carousel-item", inputs: { disabled: "disabled" }, ngImport: i0, template: "<div class=\"ngx-carousel-item\" [id]=\"id\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}.ngx-carousel-item{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-carousel-item', template: "<div class=\"ngx-carousel-item\" [id]=\"id\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}.ngx-carousel-item{display:flex;justify-content:center;flex-direction:column;max-width:-moz-fit-content;max-width:fit-content}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input
            }] } });

class CarouselComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.ngxAutoPlaySpeed = 3000;
    }
    ngAfterContentInit() {
        this.carouselItems.first.isActive = true;
        this.currentItem = this.carouselItems.first;
        this.cdr.markForCheck();
        if (this.ngxAutoPlay) {
            this.autoPlay();
        }
    }
    autoPlay(index = 0) {
        setTimeout(() => {
            this.onClick(this.carouselItems.get(index));
            index = index === this.carouselItems.length - 1 ? 0 : ++index;
            this.autoPlay(index);
        }, this.ngxAutoPlaySpeed);
    }
    onClick(carouselItem) {
        this.carouselItems?.forEach((ci) => {
            ci.isActive = ci.id === carouselItem.id ? true : false;
        });
        const element = document.getElementById(carouselItem.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: CarouselComponent, selector: "ngx-carousel", inputs: { ngxAutoPlay: ["ngxAutoPlay", "ngxAutoPlay", booleanAttribute], ngxAutoPlaySpeed: "ngxAutoPlaySpeed" }, queries: [{ propertyName: "carouselItems", predicate: CarouselItemComponent }], ngImport: i0, template: "<div class=\"ngx-carousel\">\r\n  <div class=\"slick-initialized slick-slider\">\r\n    <div class=\"slick-list\">\r\n      <div class=\"slick-track\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"slick-list slick-dots slick-dots-bottom\">\r\n      <li\r\n        [class.slick-active]=\"carouselItem.isActive\"\r\n        *ngFor=\"let carouselItem of carouselItems\"\r\n        (click)=\"onClick(carouselItem)\"\r\n      >\r\n        <button>{{ carouselItem.id }}</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";.ngx-carousel{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:\"tnum\";overflow:auto}.ngx-carousel .slick-slider{position:relative;display:block;box-sizing:border-box;touch-action:pan-y;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.ngx-carousel .slick-list{position:relative;display:block;margin:0;padding:0;overflow:hidden}.ngx-carousel .slick-list:focus{outline:none}.ngx-carousel .slick-list.dragging{cursor:pointer}.ngx-carousel .slick-list .slick-slide{pointer-events:none}.ngx-carousel .slick-list .slick-slide input.ant-radio-input,.ngx-carousel .slick-list .slick-slide input.ant-checkbox-input{visibility:hidden}.ngx-carousel .slick-list .slick-slide.slick-active{pointer-events:auto}.ngx-carousel .slick-list .slick-slide.slick-active input.ant-radio-input,.ngx-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input{visibility:visible}.ngx-carousel .slick-list .slick-slide>div>div{vertical-align:bottom}.ngx-carousel .slick-slider .slick-track,.ngx-carousel .slick-slider .slick-list{transform:translateZ(0);touch-action:pan-y}.ngx-carousel .slick-track{position:relative;top:0;left:0;display:flex}.ngx-carousel .slick-track:before,.ngx-carousel .slick-track:after{display:table;content:\"\"}.ngx-carousel .slick-track:after{clear:both}.slick-loading .ngx-carousel .slick-track{visibility:hidden}.ngx-carousel .slick-slide{display:none;float:left;height:100%;min-height:1px}.ngx-carousel .slick-slide img{display:block}.ngx-carousel .slick-slide.slick-loading img{display:none}.ngx-carousel .slick-slide.dragging img{pointer-events:none}.ngx-carousel .slick-initialized .slick-slide{display:block}.ngx-carousel .slick-loading .slick-slide{visibility:hidden}.ngx-carousel .slick-vertical .slick-slide{display:block;height:auto}.ngx-carousel .slick-arrow.slick-hidden{display:none}.ngx-carousel .slick-prev,.ngx-carousel .slick-next{top:50%;display:block;width:20px;height:20px;margin-top:-10px;padding:0;color:transparent;font-size:0;line-height:0;background:transparent;border:0;outline:none;cursor:pointer}.ngx-carousel .slick-prev:hover,.ngx-carousel .slick-next:hover,.ngx-carousel .slick-prev:focus,.ngx-carousel .slick-next:focus{color:transparent;background:transparent;outline:none}.ngx-carousel .slick-prev:hover:before,.ngx-carousel .slick-next:hover:before,.ngx-carousel .slick-prev:focus:before,.ngx-carousel .slick-next:focus:before{opacity:1}.ngx-carousel .slick-prev.slick-disabled:before,.ngx-carousel .slick-next.slick-disabled:before{opacity:.25}.ngx-carousel .slick-prev{left:-25px}.ngx-carousel .slick-prev:before{content:\"\\2190\"}.ngx-carousel .slick-next{right:-25px}.ngx-carousel .slick-next:before{content:\"\\2192\"}.ngx-carousel .slick-dots{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex!important;justify-content:center;margin-right:15%;margin-left:15%;padding-left:0;list-style:none}.ngx-carousel .slick-dots-bottom{bottom:12px}.ngx-carousel .slick-dots-top{top:12px;bottom:auto}.ngx-carousel .slick-dots li{position:relative;display:inline-block;flex:0 1 auto;box-sizing:content-box;width:16px;height:3px;margin:0 3px;padding:0;text-align:center;text-indent:-999px;vertical-align:top;transition:all .5s}.ngx-carousel .slick-dots li button{display:block;width:100%;height:3px;padding:0;color:transparent;font-size:0;background:#fff;border:0;border-radius:1px;outline:none;cursor:pointer;opacity:.3;transition:all .5s}.ngx-carousel .slick-dots li button:hover,.ngx-carousel .slick-dots li button:focus{opacity:.75}.ngx-carousel .slick-dots li.slick-active{width:24px}.ngx-carousel .slick-dots li.slick-active button{background:#fff;opacity:1}.ngx-carousel .slick-dots li.slick-active:hover,.ngx-carousel .slick-dots li.slick-active:focus{opacity:1}ngx-carousel{display:block;position:relative;overflow:hidden;width:100%;height:100%}.slick-dots{display:block}.slick-track{opacity:1}.slick-list{direction:ltr}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-carousel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-carousel\">\r\n  <div class=\"slick-initialized slick-slider\">\r\n    <div class=\"slick-list\">\r\n      <div class=\"slick-track\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"slick-list slick-dots slick-dots-bottom\">\r\n      <li\r\n        [class.slick-active]=\"carouselItem.isActive\"\r\n        *ngFor=\"let carouselItem of carouselItems\"\r\n        (click)=\"onClick(carouselItem)\"\r\n      >\r\n        <button>{{ carouselItem.id }}</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";.ngx-carousel{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:\"tnum\";overflow:auto}.ngx-carousel .slick-slider{position:relative;display:block;box-sizing:border-box;touch-action:pan-y;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.ngx-carousel .slick-list{position:relative;display:block;margin:0;padding:0;overflow:hidden}.ngx-carousel .slick-list:focus{outline:none}.ngx-carousel .slick-list.dragging{cursor:pointer}.ngx-carousel .slick-list .slick-slide{pointer-events:none}.ngx-carousel .slick-list .slick-slide input.ant-radio-input,.ngx-carousel .slick-list .slick-slide input.ant-checkbox-input{visibility:hidden}.ngx-carousel .slick-list .slick-slide.slick-active{pointer-events:auto}.ngx-carousel .slick-list .slick-slide.slick-active input.ant-radio-input,.ngx-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input{visibility:visible}.ngx-carousel .slick-list .slick-slide>div>div{vertical-align:bottom}.ngx-carousel .slick-slider .slick-track,.ngx-carousel .slick-slider .slick-list{transform:translateZ(0);touch-action:pan-y}.ngx-carousel .slick-track{position:relative;top:0;left:0;display:flex}.ngx-carousel .slick-track:before,.ngx-carousel .slick-track:after{display:table;content:\"\"}.ngx-carousel .slick-track:after{clear:both}.slick-loading .ngx-carousel .slick-track{visibility:hidden}.ngx-carousel .slick-slide{display:none;float:left;height:100%;min-height:1px}.ngx-carousel .slick-slide img{display:block}.ngx-carousel .slick-slide.slick-loading img{display:none}.ngx-carousel .slick-slide.dragging img{pointer-events:none}.ngx-carousel .slick-initialized .slick-slide{display:block}.ngx-carousel .slick-loading .slick-slide{visibility:hidden}.ngx-carousel .slick-vertical .slick-slide{display:block;height:auto}.ngx-carousel .slick-arrow.slick-hidden{display:none}.ngx-carousel .slick-prev,.ngx-carousel .slick-next{top:50%;display:block;width:20px;height:20px;margin-top:-10px;padding:0;color:transparent;font-size:0;line-height:0;background:transparent;border:0;outline:none;cursor:pointer}.ngx-carousel .slick-prev:hover,.ngx-carousel .slick-next:hover,.ngx-carousel .slick-prev:focus,.ngx-carousel .slick-next:focus{color:transparent;background:transparent;outline:none}.ngx-carousel .slick-prev:hover:before,.ngx-carousel .slick-next:hover:before,.ngx-carousel .slick-prev:focus:before,.ngx-carousel .slick-next:focus:before{opacity:1}.ngx-carousel .slick-prev.slick-disabled:before,.ngx-carousel .slick-next.slick-disabled:before{opacity:.25}.ngx-carousel .slick-prev{left:-25px}.ngx-carousel .slick-prev:before{content:\"\\2190\"}.ngx-carousel .slick-next{right:-25px}.ngx-carousel .slick-next:before{content:\"\\2192\"}.ngx-carousel .slick-dots{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex!important;justify-content:center;margin-right:15%;margin-left:15%;padding-left:0;list-style:none}.ngx-carousel .slick-dots-bottom{bottom:12px}.ngx-carousel .slick-dots-top{top:12px;bottom:auto}.ngx-carousel .slick-dots li{position:relative;display:inline-block;flex:0 1 auto;box-sizing:content-box;width:16px;height:3px;margin:0 3px;padding:0;text-align:center;text-indent:-999px;vertical-align:top;transition:all .5s}.ngx-carousel .slick-dots li button{display:block;width:100%;height:3px;padding:0;color:transparent;font-size:0;background:#fff;border:0;border-radius:1px;outline:none;cursor:pointer;opacity:.3;transition:all .5s}.ngx-carousel .slick-dots li button:hover,.ngx-carousel .slick-dots li button:focus{opacity:.75}.ngx-carousel .slick-dots li.slick-active{width:24px}.ngx-carousel .slick-dots li.slick-active button{background:#fff;opacity:1}.ngx-carousel .slick-dots li.slick-active:hover,.ngx-carousel .slick-dots li.slick-active:focus{opacity:1}ngx-carousel{display:block;position:relative;overflow:hidden;width:100%;height:100%}.slick-dots{display:block}.slick-track{opacity:1}.slick-list{direction:ltr}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { carouselItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }], ngxAutoPlay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxAutoPlaySpeed: [{
                type: Input
            }] } });

class CarouselModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, declarations: [CarouselComponent, CarouselItemComponent], imports: [CommonModule], exports: [CarouselComponent, CarouselItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CarouselComponent, CarouselItemComponent],
                    exports: [CarouselComponent, CarouselItemComponent],
                    imports: [CommonModule],
                }]
        }] });

class CardComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardComponent, selector: "ngx-card", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{background:var(--ngx-theme-bg-card);border-radius:.5rem;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;display:flex;flex-direction:column;box-sizing:border-box}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card', template: "<ng-content></ng-content>\n", styles: [":host{background:var(--ngx-theme-bg-card);border-radius:.5rem;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;display:flex;flex-direction:column;box-sizing:border-box}\n"] }]
        }] });

class CardHeaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardHeaderComponent, selector: "ngx-card-header", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;padding:1rem 1rem 0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card-header', template: "<ng-content></ng-content>\n", styles: [":host{display:flex;padding:1rem 1rem 0}\n"] }]
        }] });

class CardContentComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardContentComponent, selector: "ngx-card-content", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block;padding:0 1rem}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card-content', template: "<ng-content></ng-content>\n", styles: [":host{display:block;padding:0 1rem}\n"] }]
        }] });

class CardActionsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardActionsComponent, selector: "ngx-card-actions", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:3.25rem;padding:.5rem}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardActionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card-actions', template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:3.25rem;padding:.5rem}\n"] }]
        }] });

class CardAvatarDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        this.setStyle();
    }
    setStyle() {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', '2.5rem');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'width', '2.5rem');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'border-radius', '50%');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardAvatarDirective, selector: "[ngx-card-avatar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-card-avatar]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class CardImageDirective {
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

class CardModule {
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, declarations: [AccordionComponent, ExpansionPanelComponent], imports: [CommonModule, DividerModule], exports: [AccordionComponent, ExpansionPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, imports: [CommonModule, DividerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionComponent, ExpansionPanelComponent],
                    exports: [AccordionComponent, ExpansionPanelComponent],
                    imports: [CommonModule, DividerModule],
                }]
        }] });

class SwitchComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.ngxDisabled = false;
    }
    ngAfterContentInit() {
        this.ngxDisabled = this.ngxDisabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        console.log(fn);
        //this.onChange = fn;
    }
    registerOnTouched(fn) {
        //this.onTouched = fn;
        console.log(fn);
    }
    setDisabledState(disabled) {
        //this.cdr.markForCheck();
    }
    toggle() {
        this.writeValue(!this.isChecked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SwitchComponent, selector: "ngx-switch", inputs: { ngxDisabled: "ngxDisabled" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true,
            },
        ], ngImport: i0, template: "<button\r\n  [disabled]=\"ngxDisabled\"\r\n  class=\"ngx-switch\"\r\n  [class.ngx-switch-checked]=\"isChecked\"\r\n  (click)=\"toggle()\"\r\n>\r\n  <span class=\"ngx-switch-knob\"></span>\r\n  <span class=\"ngx-switch-inner\"></span>\r\n</button>\r\n", styles: [".ngx-switch{margin:0;padding:0;color:#000000d9;font-size:.875rem;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:\"tnum\";position:relative;display:inline-block;box-sizing:border-box;min-width:2.75rem;height:1.375rem;line-height:1.375rem;vertical-align:middle;background-image:linear-gradient(to right,rgba(0,0,0,.25),rgba(0,0,0,.25)),linear-gradient(to right,#fff,#fff);border:0;border-radius:100px;cursor:pointer;transition:all .2s;-webkit-user-select:none;user-select:none}.ngx-switch-knob{position:absolute;top:2px;left:2px;width:18px;height:18px;transition:all .2s ease-in-out}.ngx-switch-knob:before{position:absolute;inset:0;background-color:#fff;border-radius:9px;box-shadow:0 2px 4px #00230b33;transition:all .2s ease-in-out;content:\"\"}.ngx-switch-checked{background:#1890FF}.ngx-switch-checked .ngx-switch-knob{left:calc(100% - 20px)!important}.ngx-switch-inner{display:block;margin:0 7px 0 25px;color:#fff;font-size:12px;transition:margin .2s}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-switch', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true,
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\r\n  [disabled]=\"ngxDisabled\"\r\n  class=\"ngx-switch\"\r\n  [class.ngx-switch-checked]=\"isChecked\"\r\n  (click)=\"toggle()\"\r\n>\r\n  <span class=\"ngx-switch-knob\"></span>\r\n  <span class=\"ngx-switch-inner\"></span>\r\n</button>\r\n", styles: [".ngx-switch{margin:0;padding:0;color:#000000d9;font-size:.875rem;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:\"tnum\";position:relative;display:inline-block;box-sizing:border-box;min-width:2.75rem;height:1.375rem;line-height:1.375rem;vertical-align:middle;background-image:linear-gradient(to right,rgba(0,0,0,.25),rgba(0,0,0,.25)),linear-gradient(to right,#fff,#fff);border:0;border-radius:100px;cursor:pointer;transition:all .2s;-webkit-user-select:none;user-select:none}.ngx-switch-knob{position:absolute;top:2px;left:2px;width:18px;height:18px;transition:all .2s ease-in-out}.ngx-switch-knob:before{position:absolute;inset:0;background-color:#fff;border-radius:9px;box-shadow:0 2px 4px #00230b33;transition:all .2s ease-in-out;content:\"\"}.ngx-switch-checked{background:#1890FF}.ngx-switch-checked .ngx-switch-knob{left:calc(100% - 20px)!important}.ngx-switch-inner{display:block;margin:0 7px 0 25px;color:#fff;font-size:12px;transition:margin .2s}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxDisabled: [{
                type: Input
            }] } });

class SwitchModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, declarations: [SwitchComponent], imports: [CommonModule], exports: [SwitchComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SwitchComponent],
                    exports: [SwitchComponent],
                    imports: [CommonModule],
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TabModule, declarations: [TabComponent, TabGroupComponent], imports: [CommonModule], exports: [TabGroupComponent, TabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TabComponent, TabGroupComponent],
                    exports: [TabGroupComponent, TabComponent],
                    imports: [CommonModule],
                }]
        }] });

class TagComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngxMode = 'default';
        this.ngxChecked = false;
        this.ngxOnClose = new EventEmitter();
        this.ngxCheckedChange = new EventEmitter();
    }
    updateCheckedStatus() {
        if (this.ngxMode === 'checkable') {
            this.ngxChecked = !this.ngxChecked;
            this.ngxCheckedChange.emit(this.ngxChecked);
        }
    }
    closeTag(e) {
        this.ngxOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TagComponent, selector: "ngx-tag", inputs: { ngxMode: "ngxMode", ngxColor: "ngxColor", ngxChecked: "ngxChecked" }, outputs: { ngxOnClose: "ngxOnClose", ngxCheckedChange: "ngxCheckedChange" }, host: { listeners: { "click": "updateCheckedStatus()" }, properties: { "style.background-color": "ngxColor", "class.ngx-tag-has-color": "ngxColor? true : false", "class.ngx-tag-checkable": "ngxMode === 'checkable'", "class.ngx-tag-sync": "ngxMode === 'sync'", "class.ngx-tag-checkable-checked": "ngxChecked" }, classAttribute: "ngx-tag" }, ngImport: i0, template: "<svg\n  *ngIf=\"ngxMode === 'sync'\"\n  style=\"\n    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg)\n      brightness(110%) contrast(109%);\n  \"\n  class=\"ngx-tag-icon-sync\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  height=\"16\"\n  viewBox=\"0 -960 960 960\"\n  width=\"24\"\n>\n  <path\n    d=\"M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z\"\n  />\n</svg>\n\n<ng-content></ng-content>\n\n<svg\n  [ngStyle]=\"{\n    filter: ngxColor\n      ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg) brightness(110%) contrast(109%)'\n      : ''\n  }\"\n  class=\"ngx-tag-close\"\n  *ngIf=\"ngxMode === 'closeable'\"\n  (click)=\"closeTag($event)\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  height=\"14\"\n  viewBox=\"0 -960 960 960\"\n  width=\"14\"\n>\n  <path\n    d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"\n  />\n</svg>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tag', host: {
                        class: 'ngx-tag',
                        '[style.background-color]': 'ngxColor',
                        '[class.ngx-tag-has-color]': 'ngxColor? true : false',
                        '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
                        '[class.ngx-tag-sync]': `ngxMode === 'sync'`,
                        '[class.ngx-tag-checkable-checked]': `ngxChecked`,
                        '(click)': 'updateCheckedStatus()'
                    }, template: "<svg\n  *ngIf=\"ngxMode === 'sync'\"\n  style=\"\n    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg)\n      brightness(110%) contrast(109%);\n  \"\n  class=\"ngx-tag-icon-sync\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  height=\"16\"\n  viewBox=\"0 -960 960 960\"\n  width=\"24\"\n>\n  <path\n    d=\"M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z\"\n  />\n</svg>\n\n<ng-content></ng-content>\n\n<svg\n  [ngStyle]=\"{\n    filter: ngxColor\n      ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg) brightness(110%) contrast(109%)'\n      : ''\n  }\"\n  class=\"ngx-tag-close\"\n  *ngIf=\"ngxMode === 'closeable'\"\n  (click)=\"closeTag($event)\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  height=\"14\"\n  viewBox=\"0 -960 960 960\"\n  width=\"14\"\n>\n  <path\n    d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"\n  />\n</svg>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { ngxMode: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxChecked: [{
                type: Input
            }], ngxOnClose: [{
                type: Output
            }], ngxCheckedChange: [{
                type: Output
            }] } });

class TagModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TagModule, declarations: [TagComponent], imports: [CommonModule], exports: [TagComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TagComponent],
                    exports: [TagComponent],
                    imports: [CommonModule],
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

export { AccordionComponent, BadgeDirective, BadgeModule, BlockButtonDirective, ButtonModule, CardActionsComponent, CardAvatarDirective, CardComponent, CardContentComponent, CardHeaderComponent, CardImageDirective, CardModule, CarouselComponent, CarouselItemComponent, CarouselModule, DangerButtonDirective, DialogComponent, DialogModule, DividerComponent, DividerModule, ExpansionPanelComponent, ExpansionPanelModule, GhostButtonDirective, IconDirective, IconModule, NgxButtonDirective, NgxUiComponentsComponent, NgxUiComponentsModule, NgxUiComponentsService, SuccessButtonDirective, SwitchComponent, SwitchModule, TabComponent, TabGroupComponent, TabModule, TagComponent, TagModule };
//# sourceMappingURL=ngx-ui-components.mjs.map
