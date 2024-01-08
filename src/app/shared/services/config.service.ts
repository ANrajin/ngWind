import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

type AppEnv = typeof environment;

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor() {
  }

  get getEnvironment(): AppEnv {
    return environment;
  }

  get isProduction(): boolean {
    return environment.production;
  }

  get apiUrl(): string {
    return environment?.apiUrl ?? '';
  }
}
