import {NOTYF, notyfFactory} from "./notyf.token";

export const UtilsProviders: object[] = [
    {provide: NOTYF, useFactory: notyfFactory},
]
