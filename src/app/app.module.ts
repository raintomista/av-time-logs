import { ResourceService } from './services/resource.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { Routes, RouterModule } from '@angular/router';
// import { TimelogsComponent } from './components/timelogs/timelogs.component';
import { NetworkComponent } from './components/network/network.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/admin/view-all-users/view-all-users.component';
import { EmployeeMonitorComponent } from './components/admin/employee-monitor/employee-monitor.component';
import { OnlineUsersMonitorComponent } from './components/admin/employee-monitor/online-users-monitor/online-users-monitor.component';
import { OfflineUsersMonitorComponent } from './components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component';
import { UsersOnBreakMonitorComponent } from './components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component';
import { ViewAllUsersTableComponent } from './components/admin/view-all-users/view-all-users-table/view-all-users-table.component';
import { TimelogsComponent } from './components/admin/timelogs/timelogs.component';
import { TimelogsTableComponent } from './components/admin/timelogs/timelogs-table/timelogs-table.component';


const appRoutes: Routes = [
  { path: '', component: EmployeeMonitorComponent },
  { path: 'timelogs', component: TimelogsComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'view-all-users', component: ViewUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ServersComponent,
    NavbarComponent,
    TimelogsComponent,
    NetworkComponent,
    AddUserComponent,
    ViewUserComponent,
    EmployeeMonitorComponent,
    OnlineUsersMonitorComponent,
    OfflineUsersMonitorComponent,
    UsersOnBreakMonitorComponent,
    ViewAllUsersTableComponent,
    TimelogsTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
