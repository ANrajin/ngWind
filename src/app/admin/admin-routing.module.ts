import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes, ElementRoutes, SettingRoutes } from './admin.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminAlertComponent } from './views/elements/alert/admin-alert.component';
import { ButtonsComponent } from './views/elements/buttons/buttons.component';
import { ElementsComponent } from './views/elements/elements.component';
import { EventsComponent } from './views/events/events.component';
import { TestComponent } from './views/events/test/test.component';
import { ProfileComponent } from './views/settings/profile/profile.component';
import { UsersComponent } from './views/settings/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AdminRoutes.Dashboard,
    pathMatch: 'full',
  },
  {
    title: 'Dashboard',
    path: AdminRoutes.Dashboard,
    component: DashboardComponent,
  },
  {
    title: 'Events',
    path: AdminRoutes.Events,
    component: EventsComponent,
    children: [
      {
        path: 'testing',
        component: TestComponent,
        outlet: 'test',
      },
    ],
  },
  {
    title: 'Elements',
    path: AdminRoutes.Elements,
    children: [
      {
        title: 'Alert',
        path: ElementRoutes.Alert,
        component: AdminAlertComponent,
      },
      {
        title: 'Modal',
        path: ElementRoutes.Modal,
        component: ElementsComponent,
      },
      {
        title: 'Buttons',
        path: ElementRoutes.Buttons,
        component: ButtonsComponent,
      },
    ],
  },
  {
    path: AdminRoutes.Settings,
    children: [
      {
        title: 'Settings',
        path: SettingRoutes.Profile,
        component: ProfileComponent,
      },
      {
        title: 'Users',
        path: SettingRoutes.Users,
        component: UsersComponent,
      },
    ],
  },
  { path: '**', component: AdminPageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
