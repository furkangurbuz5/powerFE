import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";


@Injectable({
        providedIn: 'root',
})
export class AppServiceConfig {
        APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

        APP_CONFIG: AppConfig = {
                apiEndpoint: environment.apiEndpoint
        };
}


