import {TitleStrategy} from "@angular/router";
import {AppTitleStrategy} from "./AppTitleStrategy";

export const StrategyProviders: object[] = [
    {provide: TitleStrategy, useClass: AppTitleStrategy}
];
