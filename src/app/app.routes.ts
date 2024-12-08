import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BandComponent } from './pages/band/band.component';
import { CateringComponent } from './pages/catering/catering.component';
import { HallComponent } from './pages/hall/hall.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path: "band",
        component: BandComponent
    },
    {
        path: "catering",
        component: CateringComponent
    },
    {
        path: "hall",
        component: HallComponent
    },
    {
        path: "",
        component: DashboardComponent
    }




];
