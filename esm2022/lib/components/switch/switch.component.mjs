import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class SwitchComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFlekUsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDakIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFFTyxDQUFDO0lBRTlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLHFCQUFxQjtJQUN2QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsMEJBQTBCO0lBQzVCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDOytHQWpDVSxlQUFlO21HQUFmLGVBQWUsNkVBVGY7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLDBCQ2JILDRQQVNBOzs0RkRPYSxlQUFlO2tCQWIzQixTQUFTOytCQUNFLFlBQVksYUFHWDt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0YsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07d0dBTXRDLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTd2l0Y2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSwgIFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XG4gIEBJbnB1dCgpIG5neERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5neERpc2FibGVkID0gdGhpcy5uZ3hEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coZm4pO1xuICAgIC8vdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIC8vdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICBjb25zb2xlLmxvZyhmbik7XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxidXR0b25cclxuICBbZGlzYWJsZWRdPVwibmd4RGlzYWJsZWRcIlxyXG4gIGNsYXNzPVwibmd4LXN3aXRjaFwiXHJcbiAgW2NsYXNzLm5neC1zd2l0Y2gtY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiXHJcbj5cclxuICA8c3BhbiBjbGFzcz1cIm5neC1zd2l0Y2gta25vYlwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cIm5neC1zd2l0Y2gtaW5uZXJcIj48L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=