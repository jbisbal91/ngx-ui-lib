import * as i0 from "@angular/core";
export declare class DialogComponent {
    title: string;
    text: string;
    private answeredSub;
    answered$: import("rxjs").Observable<boolean>;
    constructor();
    protected answerModal(confirmed: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogComponent, "ngx-dialog", never, { "title": { "alias": "title"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, never, false, never>;
}
