import { QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';
import * as i0 from "@angular/core";
export declare class TabGroupComponent {
    tabs: QueryList<TabComponent>;
    private subscription;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    selectTab(tab: Tab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupComponent, "ngx-tab-group", never, {}, {}, ["tabs"], ["*"], false, never>;
}
