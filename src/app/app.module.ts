import { ResourceService } from './services/resource.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { Routes, RouterModule } from '@angular/router';
// import { TimelogsComponent } from './components/timelogs/timelogs.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/admin/view-all-users/view-all-users.component';
import { EmployeeMonitorComponent } from './components/admin/employee-monitor/employee-monitor.component';
import { OnlineUsersMonitorComponent } from './components/admin/employee-monitor/online-users-monitor/online-users-monitor.component';
import { OfflineUsersMonitorComponent } from './components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component';
import { UsersOnBreakMonitorComponent } from './components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component';
import { ViewAllUsersTableComponent } from './components/admin/view-all-users/view-all-users-table/view-all-users-table.component';
import { TimelogsComponent } from './components/admin/timelogs/timelogs.component';
import { TimelogsTableComponent } from './components/admin/timelogs/timelogs-table/timelogs-table.component';
import { NetworkMonitorComponent } from './components/admin/network-monitor/network-monitor.component';
import { NetworkMonitorTableComponent } from './components/admin/network-monitor/network-monitor-table/network-monitor-table.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoaderComponent } from './components/_loader/loader.component';
import { AlertComponent } from './components/_alert/alert.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, 
    children: [ { path: '', component: EmployeeMonitorComponent },
                { path: 'timelogs', component: TimelogsComponent },
                { path: 'network', component: NetworkMonitorComponent },
                { path: 'add-user', component: AddUserComponent },
                { path: 'view-all-users', component: ViewUserComponent } ]
  }
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
    DashboardComponent,
    LoaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
