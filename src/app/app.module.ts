import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { Routes, RouterModule } from '@angular/router';
import { TimelogsComponent } from './components/timelogs/timelogs.component';
import { NetworkComponent } from './components/network/network.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { EmployeeMonitorComponent } from './components/admin/employee-monitor/employee-monitor.component';
import { OnlineUsersMonitorComponent } from './components/admin/employee-monitor/online-users-monitor/online-users-monitor.component';
import { OfflineUsersMonitorComponent } from './components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component';


const appRoutes: Routes = [
	{ path: '', component: EmployeeMonitorComponent},  
	{ path: 'admin', component: EmployeeMonitorComponent},
	{ path: 'timelogs', component: TimelogsComponent},
	{ path: 'network', component: NetworkComponent},
	{ path: 'add-user', component: AddUserComponent},
	{ path: 'view-users', component: ViewUserComponent}
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
    OfflineUsersMonitorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
