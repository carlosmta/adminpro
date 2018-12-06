import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ! componente principal
import { PagesComponent } from './pages.component';

// * componentes secundarios
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        PAGES_ROUTES ],
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})
export class PagesModule { }
