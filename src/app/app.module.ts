import { LoginGuard } from './_guards/login.guard';
import { AdminGuard } from './_guards/admin.guard';
import { UserGuard } from './_guards/user.guard';
import { AuthGuard } from './_guards/auth.guard';

import { ResourceService } from './services/resource.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MomentModule} from 'angular2-moment/moment.module';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { Routes, RouterModule } from '@angular/router';
// import { TimelogsComponent } from './components/timelogs/timelogs.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { ViewUserComponent } from './components/admin/view-all-users/view-all-users.component';
import { EmployeeMonitorComponent } from './components/admin/employee-monitor/employee-monitor.component';
import { OnlineUsersMonitorComponent } from './components/admin/employee-monitor/online-users-monitor/online-users-monitor.component';
import { OfflineUsersMonitorComponent } from './components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component';
import { UsersOnBreakMonitorComponent } from './components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component';
import { ViewAllUsersTableComponent } from './components/admin/view-all-users/view-all-users-table/view-all-users-table.component';
import { TimelogsComponent } from './components/admin/timelogs/view-all-timelogs/timelogs.component';
import { TimelogsTableComponent } from './components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component';
import { NetworkMonitorComponent } from './components/admin/network-monitor/network-monitor.component';
import { NetworkMonitorTableComponent } from './components/admin/network-monitor/network-monitor-table/network-monitor-table.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { LoaderComponent } from './components/_loader/loader.component';
import { AlertComponent } from './components/_alert/alert.component';
import { TimeloggingPanelComponent } from './components/timelogging-panel/timelogging-panel.component';
import { TimeInComponent } from './components/timelogging-panel/time-in/time-in.component';
import { TimeOutComponent } from './components/timelogging-panel/time-out/time-out.component';
import { ClockComponent } from './components/clock/clock.component';
import { ViewAllTimelogsByUserComponent } from './components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component';
import { TimelogsByUserTableComponent } from './components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component';
import { SaveNetworkComponent } from './components/admin/network-monitor/save-network/save-network.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { MyTimelogsComponent } from './components/user/my-timelogs/my-timelogs.component';
import { MyTimelogsTableComponent } from './components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component';
import { ExportComponent } from './components/export/export.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';

const appRoutes: Routes = [
  
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'admin', component: DashboardComponent, children: [
    { path: '', component: EmployeeMonitorComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: 'timelogs', component: TimelogsComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: 'timelogs/user/:username', component: ViewAllTimelogsByUserComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: 'network', component: NetworkMonitorComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: 'view-all-users', component: ViewUserComponent, canActivate: [AuthGuard, AdminGuard]},    
  ]},
  { path: '', component: UserDashboardComponent, children: [
    { path: '', component: TimeloggingPanelComponent, canActivate: [AuthGuard, UserGuard]},
    { path: 'my-timelogs', component: MyTimelogsComponent, canActivate: [AuthGuard, UserGuard]},    
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard, UserGuard]},    
    
  ]},
  { path: '', redirectTo: '/', pathMatch: 'full'}

  // { path: '', component: DashboardComponent,
  //   children: [ { path: '', component: TimeloggingPanelComponent, canActivate: [AuthGuard]},
  //               { path: 'timelogs', component: TimelogsComponent, canActivate: [AuthGuard]},
  //               { path: 'timelogs/user/:username', component: ViewAllTimelogsByUserComponent, canActivate: [AuthGuard]},
  //               { path: 'network', component: NetworkMonitorComponent, canActivate: [AuthGuard]},
  //               { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]},
  //               { path: 'view-all-users', component: ViewUserComponent, canActivate: [AuthGuard]},
  //               { path: 'user', component: TimeloggingPanelComponent, canActivate: [AuthGuard] }]
  // }
];

@NgModule({
  declarations: [ 
    AppComponent,
    SidebarComponent,
    ServersComponent,
    NavbarComponent,
    TimelogsComponent,
    AddUserComponent,
    ViewUserComponent,
    EmployeeMonitorComponent,
    OnlineUsersMonitorComponent,
    OfflineUsersMonitorComponent,
    UsersOnBreakMonitorComponent,
    ViewAllUsersTableComponent,
    TimelogsTableComponent,
    NetworkMonitorComponent,
    NetworkMonitorTableComponent,
    LoginComponent,
    UserDashboardComponent,    
    DashboardComponent,
    LoaderComponent,
    AlertComponent,
    TimeloggingPanelComponent,
    TimeInComponent,
    TimeOutComponent,
    ClockComponent,
    ViewAllTimelogsByUserComponent,
    TimelogsByUserTableComponent,
    SaveNetworkComponent,
    UserSidebarComponent,
    MyTimelogsComponent,
    MyTimelogsTableComponent,
    ExportComponent,
    UserProfileComponent,
    ContentLoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    NgxMyDatePickerModule,
    JsonpModule
  ],
  providers: [ResourceService, AuthGuard, UserGuard, AdminGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
