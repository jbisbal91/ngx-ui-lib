import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11aS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdWktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFPL0IsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFKUyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUM3QyxjQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU4sV0FBVyxDQUFDLFNBQWtCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVc7UUFDVCx3REFBd0Q7UUFDeEQsK0JBQStCO0lBQ2pDLENBQUM7K0dBZlUsZUFBZTttR0FBZixlQUFlLDRGQ1I1QiwrVkFTQTs7NEZERGEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZOzBFQUtiLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuICBwcml2YXRlIGFuc3dlcmVkU3ViID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgYW5zd2VyZWQkID0gdGhpcy5hbnN3ZXJlZFN1Yi5hc09ic2VydmFibGUoKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByb3RlY3RlZCBhbnN3ZXJNb2RhbChjb25maXJtZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLmxvZygnTW9kYWxDb21wb25lbnQgYW5zd2VyTW9kYWwnLCBjb25maXJtZWQpO1xuICAgIHRoaXMuYW5zd2VyZWRTdWIubmV4dChjb25maXJtZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY2F1c2VzIGNvbXBsZXRlIGJlZm9yZSBjaGlsZENvbXBvbmVudCByZWNpZXZlcyAnbmV4dCdcbiAgICAvLyB0aGlzLmFuc3dlcmVkU3ViLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmaXhlZCB0b3AtMFwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsXCI+XG4gIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiPnt7dGl0bGV9fTwvaDI+XG4gIDxwPnt7dGV4dH19PC9wPlxuICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvblwiIChjbGljayk9XCJhbnN3ZXJNb2RhbCh0cnVlKVwiPlllczwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uXCIgKGNsaWNrKT1cImFuc3dlck1vZGFsKGZhbHNlKVwiPk5vPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=