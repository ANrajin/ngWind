import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes, SettingRoutes } from './admin.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ElementsComponent } from './views/elements/elements.component';
import { EventsComponent } from './views/events/events.component';
import { ProfileComponent } from './views/settings/profile/profile.component';
import { UsersComponent } from './views/settings/users/users.component';

const routes: Routes = [
  { path: AdminRoutes.Dashboard, component: DashboardComponent },
  { path: '', redirectTo: AdminRoutes.Dashboard, pathMatch: 'full' },
  { path: AdminRoutes.Events, component: EventsComponent },
  { path: AdminRoutes.Elements, component: ElementsComponent },
  {
    path: AdminRoutes.Settings,
    children: [
      { path: SettingRoutes.Profile, component: ProfileComponent },
      { path: SettingRoutes.Users, component: UsersComponent },
    ]
  },
  { path: '**', component: AdminPageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
