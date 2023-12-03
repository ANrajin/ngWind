import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes, SettingRoutes} from './admin.routes';
import {AdminPageNotFoundComponent} from './views/admin-page-not-found/admin-page-not-found.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ElementsComponent} from './views/elements/elements.component';
import {EventsComponent} from './views/events/events.component';
import {ProfileComponent} from './views/settings/profile/profile.component';
import {UsersComponent} from './views/settings/users/users.component';
import {TestComponent} from "./views/events/test/test.component";

const routes: Routes = [
  {
      path: '',
      redirectTo: AdminRoutes.Dashboard,
      pathMatch: 'full'
  },
  {
      title: 'Dashboard',
      path: AdminRoutes.Dashboard,
      component: DashboardComponent
  },
  {
      title: 'Events',
      path: AdminRoutes.Events,
      component: EventsComponent,
      children: [
        {
          path: 'testing',
          component: TestComponent,
          outlet: 'test'
        },
      ]
  },
  {
      title: 'Elements',
      path: AdminRoutes.Elements,
      component: ElementsComponent
  },
  {
    path: AdminRoutes.Settings,
    children: [
        {
            title: 'Settings',
            path: SettingRoutes.Profile,
            component: ProfileComponent
        },
        {
            title: 'Users',
            path: SettingRoutes.Users,
            component: UsersComponent
        },
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
