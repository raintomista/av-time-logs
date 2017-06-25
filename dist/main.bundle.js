webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<sidebar class=\"ui left vertical inverted labeled visible sidebar borderless menu\"></sidebar>-->\r\n\r\n<!-- the content -->\r\n<!--<div class=\"pusher\">\r\n  <navbar></navbar>\r\n    <router-outlet></router-outlet>\r\n</div>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiURL: 'https://av-timelogs-api.herokuapp.com'
    // apiURL: 'http://localhost:8080'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment_moment_module__ = __webpack_require__("../../../../angular2-moment/moment.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment_moment_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment_moment_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_servers_servers_component__ = __webpack_require__("../../../../../src/app/components/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_view_all_users_view_all_users_component__ = __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_employee_monitor_employee_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_employee_monitor_online_users_monitor_online_users_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_employee_monitor_offline_users_monitor_offline_users_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_employee_monitor_users_on_break_monitor_users_on_break_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_view_all_users_view_all_users_table_view_all_users_table_component__ = __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_timelogs_timelogs_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_timelogs_timelogs_table_timelogs_table_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_network_monitor_network_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_network_monitor_network_monitor_table_network_monitor_table_component__ = __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/_loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_timelogging_panel_timelogging_panel_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/timelogging-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_timelogging_panel_time_in_time_in_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/time-in/time-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_timelogging_panel_time_out_time_out_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/time-out/time-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_clock_clock_component__ = __webpack_require__("../../../../../src/app/components/clock/clock.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { TimelogsComponent } from './components/timelogs/timelogs.component';



















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_27__components_timelogging_panel_timelogging_panel_component__["a" /* TimeloggingPanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'timelogs', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_timelogs_timelogs_component__["a" /* TimelogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'network', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_network_monitor_network_monitor_component__["a" /* NetworkMonitorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'add-user', component: __WEBPACK_IMPORTED_MODULE_12__components_add_user_add_user_component__["a" /* AddUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'view-all-users', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_view_all_users_view_all_users_component__["a" /* ViewUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_27__components_timelogging_panel_timelogging_panel_component__["a" /* TimeloggingPanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_servers_servers_component__["a" /* ServersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_timelogs_timelogs_component__["a" /* TimelogsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_add_user_add_user_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_admin_view_all_users_view_all_users_component__["a" /* ViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_admin_employee_monitor_employee_monitor_component__["a" /* EmployeeMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_admin_employee_monitor_online_users_monitor_online_users_monitor_component__["a" /* OnlineUsersMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_admin_employee_monitor_offline_users_monitor_offline_users_monitor_component__["a" /* OfflineUsersMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_employee_monitor_users_on_break_monitor_users_on_break_monitor_component__["a" /* UsersOnBreakMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_view_all_users_view_all_users_table_view_all_users_table_component__["a" /* ViewAllUsersTableComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_timelogs_timelogs_table_timelogs_table_component__["a" /* TimelogsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_network_monitor_network_monitor_component__["a" /* NetworkMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_network_monitor_network_monitor_table_network_monitor_table_component__["a" /* NetworkMonitorTableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_timelogging_panel_timelogging_panel_component__["a" /* TimeloggingPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_timelogging_panel_time_in_time_in_component__["a" /* TimeInComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_timelogging_panel_time_out_time_out_component__["a" /* TimeOutComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_clock_clock_component__["a" /* ClockComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_moment_moment_module__["MomentModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/_alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/_alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/components/_alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_alert/alert.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/_loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tbackground-color: white;\r\n}\r\n.blobs {\r\n\t-webkit-filter: url(\"#goo\");\r\n\tfilter: url(\"#goo\");\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n}\r\n.blob {\r\n\tposition: absolute;\r\n\tmargin: auto;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tleft: 0;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #ee2e3d;\r\n}\r\n.blob:nth-child(1) {\r\n\t-webkit-animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n\t        animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n.blob:nth-child(2) {\r\n\t-webkit-animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n\t        animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes blob-left-anim {\r\n  0% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n  33% {-webkit-transform:scale(0.55, 0.5) translate(80px, 0);transform:scale(0.55, 0.5) translate(80px, 0);}\r\n  66% {-webkit-transform:scale(0.8) translate(0, 0);transform:scale(0.8) translate(0, 0);}\r\n  100% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n}\r\n\r\n@keyframes blob-left-anim {\r\n  0% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n  33% {-webkit-transform:scale(0.55, 0.5) translate(80px, 0);transform:scale(0.55, 0.5) translate(80px, 0);}\r\n  66% {-webkit-transform:scale(0.8) translate(0, 0);transform:scale(0.8) translate(0, 0);}\r\n  100% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n}\r\n\r\n@-webkit-keyframes blob-right-anim {\r\n  0% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n  33% {-webkit-transform:scale(0.55, 0.5) translate(-80px, 0);transform:scale(0.55, 0.5) translate(-80px, 0);}\r\n  66% {-webkit-transform:scale(0.8) translate(0, 0);transform:scale(0.8) translate(0, 0);}\r\n  100% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n}\r\n\r\n@keyframes blob-right-anim {\r\n  0% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n  33% {-webkit-transform:scale(0.55, 0.5) translate(-80px, 0);transform:scale(0.55, 0.5) translate(-80px, 0);}\r\n  66% {-webkit-transform:scale(0.8) translate(0, 0);transform:scale(0.8) translate(0, 0);}\r\n  100% {-webkit-transform:scale(1.0) translate(0, 0);transform:scale(1.0) translate(0, 0);}\r\n}\r\n\r\n@-webkit-keyframes apester {\r\n  0% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:1;}\r\n\t20% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:0;}\r\n  40% {-webkit-transform:scale(0.5);transform:scale(0.5); opacity:0;}\r\n  66% {-webkit-transform:scale(0.8);transform:scale(0.8); opacity:1;}\r\n  100% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:1;}\r\n}\r\n\r\n@keyframes apester {\r\n  0% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:1;}\r\n\t20% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:0;}\r\n  40% {-webkit-transform:scale(0.5);transform:scale(0.5); opacity:0;}\r\n  66% {-webkit-transform:scale(0.8);transform:scale(0.8); opacity:1;}\r\n  100% {-webkit-transform:scale(1.0);transform:scale(1.0); opacity:1;}\r\n}\r\n\r\n.apester {\r\n\t  position: absolute;\r\n    height: 28px;\r\n    width: 28px;\r\n    left: calc(50% - 14px);\r\n    top: calc(50% - 14px);\r\n\t-webkit-animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n\t        animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n.apester svg {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blobs\">\r\n\t<div class=\"blob\"></div>\r\n\t<div class=\"blob\"></div>\r\n  <div class=\"apester\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 138\" style=\"enable-background:new 0 0 100 138;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{fill:#FFFFFF;}\r\n</style>\r\n<path class=\"st0\" d=\"M100,39.5L100,39.5V0.4L75,23.7L49.5,0.4L25,23.7L0,0.4v39.1v0.4v18.7v16.1v41.9v3.6v3.6  c0,7.6,6.2,13.8,13.9,13.8h0.3c7.6,0,13.8-6.2,13.8-13.8v-3.6v-3.6v-16.4h44v16.4v3.6v3.6c0,7.6,6.2,13.8,13.9,13.8h0.3  c7.7,0,13.9-6.2,13.9-13.8v-3.6v-3.6V74.7V58.6L100,39.5L100,39.5z M28,74.7V63.5c0-12.1,9.9-21.9,22-21.9s22,9.8,22,21.9v11.2  C72,74.7,28,74.7,28,74.7z\"/>\r\n</svg></div>\r\n</div>\r\n\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t<defs>\r\n\t\t<filter id=\"goo\">\r\n\t\t\t<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" />\r\n\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />\r\n\t\t\t<feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" />\r\n\t\t</filter>\r\n\t</defs>\r\n</svg>"

/***/ }),

/***/ "../../../../../src/app/components/_loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/components/_loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddUserComponent = (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/components/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddUserComponent);

//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n  <div class=\"ui three column stackable row\">\n    <!-- Online Users -->\n    <div class=\"column\">\n      <online-users-monitor></online-users-monitor>\n    </div>\n\n    <!-- Users on Break -->\n    <div class=\"column\">\n      <users-on-break-monitor></users-on-break-monitor>\n    </div>\n\n    <!-- Offline Users -->\n    <div class=\"column\">\n      <offline-users-monitor></offline-users-monitor>\n    </div>  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeMonitorComponent = (function () {
    function EmployeeMonitorComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users.data;
        });
    }
    EmployeeMonitorComponent.prototype.ngOnInit = function () {
    };
    return EmployeeMonitorComponent;
}());
EmployeeMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'employee-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], EmployeeMonitorComponent);

var _a;
//# sourceMappingURL=employee-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Offline Users */\r\n\r\n.ui.table#offline-users{\r\n\tbackground-color: transparent;\r\n\tborder-color: #dc354e;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#offline-users thead{\r\n\tbackground-color: #dc354e;\r\n\tborder-radius: 17px 17px 0px 0px;\r\n\r\n}\r\n.ui.table#offline-users thead tr th{\r\n\tbackground-color: #dc354e;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n}\r\n\r\n.ui.table#offline-users thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-users tbody tr td{\r\n\tborder-color: #dc354e;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#offline-users td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#offline-users tbody:last-child > td{\r\n\tpadding: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"offline-users\">\n  <thead>\n    <tr>\n      <th>\n        Offline Users\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"offlineUsers?.length < 1\">\n      <td>\n        No Offline Users \n      </td>\n    </tr>\n    <tr *ngFor=\"let user of offlineUsers\">\n      <td>\n        <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n        {{user.name}}\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineUsersMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OfflineUsersMonitorComponent = (function () {
    function OfflineUsersMonitorComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getOfflineUsers().subscribe(function (users) {
            _this.offlineUsers = users.data;
        });
    }
    OfflineUsersMonitorComponent.prototype.ngOnInit = function () {
    };
    return OfflineUsersMonitorComponent;
}());
OfflineUsersMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'offline-users-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], OfflineUsersMonitorComponent);

var _a;
//# sourceMappingURL=offline-users-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#online-user{\r\n\tbackground-color: transparent;\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#online-user thead{\r\n\tbackground-color: #2ec4b6;\r\n\tborder-radius: 17px 17px 0px 0px;\r\n\r\n}\r\n.ui.table#online-user thead tr th{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n}\r\n\r\n.ui.table#online-user thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user tbody tr td{\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#online-user td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#online-user tbody:last-child > td{\r\n\tpadding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"online-user\">\n  <thead>\n    <tr>\n      <th>\n        Online Users\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"onlineUsers?.length < 1\">\n      <td>\n        No Online Users \n      </td>\n    </tr>\n    <tr *ngFor=\"let user of onlineUsers\">\n      <td>\n        <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n        {{user.name}}\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineUsersMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnlineUsersMonitorComponent = (function () {
    function OnlineUsersMonitorComponent(userService, resource) {
        var _this = this;
        this.userService = userService;
        this.resource = resource;
        this.userService.getOnlineUsers().subscribe(function (users) {
            _this.onlineUsers = users.data;
        });
    }
    OnlineUsersMonitorComponent.prototype.ngOnInit = function () {
    };
    return OnlineUsersMonitorComponent;
}());
OnlineUsersMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'online-users-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], OnlineUsersMonitorComponent);

var _a, _b;
//# sourceMappingURL=online-users-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Users on Break */\r\n\r\n.ui.table#users-break{\r\n\tbackground-color: transparent;\r\n\tborder-color: #00d277;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#users-break thead{\r\n\tbackground-color: #00d277;\r\n\tborder-radius: 17px 17px 0px 0px;\r\n\r\n}\r\n.ui.table#users-break thead tr th{\r\n\tbackground-color: #00d277;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n}\r\n\r\n.ui.table#users-break thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#users-break tbody tr td{\r\n\tborder-color: #00d277;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#users-break td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#users-break tbody:last-child > td{\r\n\tpadding: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"users-break\">\n  <thead>\n    <tr>\n      <th>\n        Users On Break\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"usersOnBreak?.length < 1\">\n      <td>\n        No Users On Break\n      </td>\n    </tr>\n    <tr *ngFor=\"let user of usersOnBreak\">\n      <td>\n        <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n        {{user.name}}\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersOnBreakMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersOnBreakMonitorComponent = (function () {
    function UsersOnBreakMonitorComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getUsersOnBreak().subscribe(function (users) {
            _this.usersOnBreak = users.data;
        });
    }
    UsersOnBreakMonitorComponent.prototype.ngOnInit = function () {
    };
    return UsersOnBreakMonitorComponent;
}());
UsersOnBreakMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'users-on-break-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersOnBreakMonitorComponent);

var _a;
//# sourceMappingURL=users-on-break-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs{\r\n\tbackground-color: transparent;\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead{\r\n\tbackground-color: #2ec4b6;\r\n}\r\n.ui.table#time-logs thead tr th{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child{\r\n\tborder-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child{\r\n\tborder-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td{\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#time-logs tbody:last-child > td{\r\n\tpadding: 0px;\r\n}\r\n\r\n\r\n.ui.massive.icon.button{\r\n\tbackground: transparent;\r\n\tpadding: 0px;\r\n}\r\n\r\n.ui.massive.icon.button .toggle.on{\r\n\tcolor: #dc354e;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"time-logs\">\n  <thead>\n    <tr>\n      <th class=\"center aligned\">Hostname</th>\n      <th class=\"center aligned\">Description</th>\n      <th class=\"center aligned\">Status</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"networks?.length < 1\">\n      <td class=\"center aligned\" colspan=\"4\">No Networks Listed</td>\n    </tr>\n    <tr *ngFor=\"let network of networks\">\n      <td class=\"center aligned\">{{network.hostname}}</td>\n      <td class=\"center aligned\">{{network.description}}</td>\n      <td class=\"center aligned\">\n        <span *ngIf=\"network.status == 1\">Whitelisted</span>\n        <span *ngIf=\"network.status == 0\">Blacklisted</span>\n      </td>\n      <td class=\"center aligned\">\n        <div class=\"ui massive icon button\" *ngIf=\"network.status == 1\" data-tooltip=\"Set as blacklisted\" data-inverted=\"\">\n          <i class=\"toggle on icon\"></i>\n        </div>\n        <div class=\"ui massive icon button\" *ngIf=\"network.status == 0\" data-tooltip=\"Set as whitelisted\" data-inverted=\"\">\n          <i class=\"toggle off icon\"></i>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkMonitorTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworkMonitorTableComponent = (function () {
    function NetworkMonitorTableComponent(networkService) {
        var _this = this;
        this.networkService = networkService;
        this.networkService.getNetworks().subscribe(function (result) {
            _this.networks = result.data;
        });
    }
    NetworkMonitorTableComponent.prototype.ngOnInit = function () {
    };
    return NetworkMonitorTableComponent;
}());
NetworkMonitorTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'network-monitor-table',
        template: __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object])
], NetworkMonitorTableComponent);

var _a;
//# sourceMappingURL=network-monitor-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.segments{\r\n\tborder: 2.5px solid #2ec4b6;\r\n\tborder-radius: 24px 24px 20px 20px;\r\n}\r\n\r\n.ui.segment#header-segment{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tborder-radius: 20px 20px 0px 0px;\r\n}\r\n\r\n.ui.segment#header-segment h4{\r\n\tfont-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.secondary.segment{\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.ui.secondary.segment .ui.button{\r\n\tbackground-color: #aa67da;\r\n\tcolor: white;\r\n\tmargin-top: 2px;\r\n}\r\n\r\n.ui.secondary.segment .ui.one.column.row{\r\n\tpadding: 10px 0px;\r\n}\r\n\r\n#hostname{\r\n\tcolor: #dc354e;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#hostname .ui.horizontal.label{\r\n\tbackground-color: #dc354e;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\r\n}\r\n\r\n#ip-address{\r\n\tcolor: #aa67da;\r\n\tfont-weight: bold;\r\n\r\n}\r\n\r\n#ip-address .ui.horizontal.label{\r\n\tbackground-color: #aa67da !important;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\r\n}\r\n\r\n\r\n#description input{\r\n\tbackground-color: transparent;\r\n    border-radius: 20px;\r\n    border: 2px solid #2ec4b6;\r\n    color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder{\r\n\tcolor: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder{\r\n\tcolor: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder{\r\n\tcolor: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome */\r\n  color: #2ec4b6;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: #2ec4b6;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: #2ec4b6;\r\n  opacity: 1;\r\n}\r\n:-moz-placeholder { /* Firefox 4 - 18 */\r\n  color: #2ec4b6;\r\n  opacity: 1;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n  <div class=\"ui row\">\n    <div class=\"ui six wide column\">\n      <div class=\"ui segments\">\n        <div class=\"ui segment\" id=\"header-segment\">\n          <h4>Current Network</h4>\n        </div>\n        <div class=\"ui secondary segment\">\n          <div class=\"ui grid\">\n            <div class=\"ui one column row\">\n              <div class=\"ui column\">\n                <div class=\"ui divided selection list\">\n                  <a class=\"item\" id=\"hostname\">\n                    <div class=\"ui horizontal label\" >Host Name</div>\n                    112.209.229.153.pldt.net\n                  </a>\n                  <a class=\"item\" id=\"ip-address\">\n                    <div class=\"ui purple horizontal label\">IP Address</div>\n                    112.209.229.153\n                  </a>\n                  <a class=\"item ui form\" id=\"description\">\n                    <div class=\"field\">\n                        <input type=\"text\" name=\"first-name\" placeholder=\"Description\">\n                      </div>\n                  </a>\n                </div>\n              </div>\n              <div class=\"ui center aligned column\">\n                <div class=\"ui button\">Save to Database</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ui ten wide column\">\n      <network-monitor-table></network-monitor-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkMonitorComponent = (function () {
    function NetworkMonitorComponent() {
    }
    NetworkMonitorComponent.prototype.ngOnInit = function () {
    };
    return NetworkMonitorComponent;
}());
NetworkMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'network-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NetworkMonitorComponent);

//# sourceMappingURL=network-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs{\r\n\tbackground-color: transparent;\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead{\r\n\tbackground-color: #2ec4b6;\r\n}\r\n.ui.table#time-logs thead tr th{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child{\r\n\tborder-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child{\r\n\tborder-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td{\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child > td{\r\n\tpadding: 0px;\r\n}\r\n\r\n.ui.table td.warning, .ui.table tr.warning{\r\n\tbackground-color: transparent !important; \r\n\tcolor: #dc354e !important;\r\n\tfont-weight: bolder;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"time-logs\">\n  <thead>\n    <tr>\n      <th>Online Users</th>\n      <th class=\"center aligned\">Recent Timelog Date</th>\n      <th class=\"center aligned\">Recent Time In</th>\n      <th class=\"center aligned\">Recent Time Out</th>\n      <th class=\"center aligned\">Late Hours</th>\n      <th class=\"center aligned\">Total</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"users?.length < 1\">\n      <td class=\"center aligned\" colspan=\"6\">No Timelogs for the Day</td>\n    </tr>\n    <tr *ngFor=\"let user of users\">\n      <td>\n        <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n        {{user.name}}\n      </td>\n      <td class=\"center aligned\">\n        <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeIn == null)\">--</span>        \n        <span *ngIf=\"user._timelog != null && user._timelog.timeIn != null\">{{user._timelog.timeIn | date }}</span>\n      </td>\n      <td class=\"center aligned\">\n        <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeIn == null)\">--</span>        \n        <span *ngIf=\"user._timelog != null && user._timelog.timeIn != null\">{{user._timelog.timeIn | date:'hh:mm:ss a'}}</span>\n      </td>\n      <td class=\"center aligned\">\n        <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeOut == null)\">--</span>        \n        <span *ngIf=\"user._timelog != null && user._timelog.timeOut != null\">{{user._timelog.timeOut | date:'hh:mm:ss a'}}</span>\n      </td>\n      <td class=\"center aligned\" [ngClass]=\"{'warning': user._timelog != null && user._timelog.lateHrs != null}\">\n        <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.lateHrs == null)\">--</span>        \n        <span *ngIf=\"user._timelog != null && user._timelog.lateHrs != null\">{{user._timelog.lateHrs}}</span>\n      </td>\n      <td class=\"center aligned\">\n        <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.totalHrs == null)\">00:00:00</span>        \n        <span *ngIf=\"user._timelog != null && user._timelog.totalHrs != null\">{{user._timelog.totalHrs}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelogsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelogsTableComponent = (function () {
    function TimelogsTableComponent(timelogService) {
        var _this = this;
        this.timelogService = timelogService;
        this.timelogService.getTimelogs().subscribe(function (users) {
            _this.users = users.data;
            console.log(_this.users);
        });
    }
    TimelogsTableComponent.prototype.ngOnInit = function () {
    };
    return TimelogsTableComponent;
}());
TimelogsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-timelogs-table',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs-table/timelogs-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]) === "function" && _a || Object])
], TimelogsTableComponent);

var _a;
//# sourceMappingURL=timelogs-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.export.button{\r\n\tbackground-color: #aa67da;\r\n\tcolor: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n\t<div class=\"ui row\">\n\t  <!--<div class=\"ui four wide column\">\n\t    <div class=\"ui form\">\n\t      <div class=\"field\">\n\t        <input type=\"text\" name=\"view-by-date\" placeholder=\"View by Date\">\n\t      </div>\n\t    </div>\n\t  </div>-->\n\t  <div class=\"ui three wide column\">\n\t    <div class=\"ui export button\">Export to CSV</div>\n\t  </div>\n\t</div>\n\t<div class=\"ui  stackable row\">\n\t  <div class=\"column\">\n      <admin-timelogs-table></admin-timelogs-table>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/timelogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelogsComponent = (function () {
    function TimelogsComponent() {
    }
    TimelogsComponent.prototype.ngOnInit = function () {
    };
    return TimelogsComponent;
}());
TimelogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-timelogs',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/timelogs.component.css")],
    }),
    __metadata("design:paramtypes", [])
], TimelogsComponent);

//# sourceMappingURL=timelogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs{\r\n\tbackground-color: transparent;\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead{\r\n\tbackground-color: #2ec4b6;\r\n}\r\n.ui.table#time-logs thead tr th{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child{\r\n\tborder-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child{\r\n\tborder-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td{\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child > td{\r\n\tpadding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"time-logs\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"center aligned\">Full Name</th>\r\n      <th class=\"center aligned\">Username</th>\r\n      <th class=\"center aligned\">Contact #</th>\r\n      <th class=\"center aligned\">Email Address</th>\r\n      <th class=\"center aligned\">Status</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngIf=\"users?.length < 1\">\r\n    <td class=\"center aligned\" colspan=\"5\">No Users</td>\r\n  </tr>\r\n  \r\n  <tr *ngFor=\"let user of users\">\r\n    <td>\r\n      <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\r\n      {{user.name}}\r\n    </td>\r\n    <td class=\"center aligned\">{{user.username}}</td>\r\n    <td class=\"center aligned\">{{\"0\" + user.contactNumber}}</td>\r\n    <td class=\"center aligned\">{{user.email}}</td>\r\n    <td class=\"center aligned\">\r\n      <span *ngIf=\"user.status === 0\">Offline</span>\r\n      <span *ngIf=\"user.status === 1\">Online</span>  \r\n      <span *ngIf=\"user.status === 2\">On Break</span>              \r\n    </td>\r\n    <td class=\"center aligned\">\r\n      <div class=\"ui icon button\" data-tooltip=\"Remove\" data-inverted=\"\">\r\n        <i class=\"remove icon\" (click)=\"test(user)\"></i>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAllUsersTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewAllUsersTableComponent = (function () {
    function ViewAllUsersTableComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getUsers().subscribe(function (users) {
            _this.users = users.data;
            console.log(users.data);
        });
    }
    ViewAllUsersTableComponent.prototype.ngOnInit = function () {
    };
    return ViewAllUsersTableComponent;
}());
ViewAllUsersTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'view-all-users-table',
        template: __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], ViewAllUsersTableComponent);

var _a;
//# sourceMappingURL=view-all-users-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.ui.search.icon.button{\r\n\tbackground-color: #aa67da;\r\n\tcolor: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\r\n  <div class=\"ui row\">\r\n    <div class=\"ui four wide column\">\r\n      <div class=\"ui form\">\r\n        <div class=\"field\">\r\n          <input type=\"text\" name=\"view-by-date\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui three wide column\">\r\n      <div class=\"ui search icon button\"><i class=\"search icon\"></i></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui  stackable row\">\r\n    <div class=\"column\">\r\n        <view-all-users-table></view-all-users-table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewUserComponent = (function () {
    function ViewUserComponent(userService) {
        this.userService = userService;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
    };
    return ViewUserComponent;
}());
ViewUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-user',
        template: __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], ViewUserComponent);

var _a;
//# sourceMappingURL=view-all-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/clock/clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,900);", ""]);

// module
exports.push([module.i, "#time{\r\n    font-weight: 900;\r\n    font-family: 'Lato';\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clock/clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockComponent = (function () {
    function ClockComponent() {
        this.clock = new Date();
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 1000);
        this.subscription = timer.subscribe(function (t) {
            _this.clock = new Date();
        });
    };
    ClockComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    ClockComponent.prototype.updateClock = function () {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();
        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";
        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        // Convert an hours component of "0" to "12"
        currentHours = (currentHours == 0) ? 12 : currentHours;
        // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
        return currentTimeString;
    };
    ClockComponent.prototype.getDate = function () {
        return new Date().toDateString();
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clock',
        template: "\n    <div class=\"ui grid container\" id=\"content\">\n      <div class=\"ui row\">\n        <div class=\"ui column\">\n            <span id=\"time\"><time>{{clock | amDateFormat: 'hh:mm:ss A'}}</time></span>\n            <span id=\"date\"><time>{{clock | amDateFormat: 'ddd, D MMM YY'}}</time></span>\n            \n        </div>\n      </div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/app/components/clock/clock.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ClockComponent);

//# sourceMappingURL=clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pusher{\r\n    margin-left: 260px;\r\n\twidth: calc(100% - 260px);\r\n}\r\n\r\n.content{\r\n    padding: 24px 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div class=\"pusher\">\r\n    <navbar></navbar>\r\n    <div class=\"content\">\r\n      <clock></clock>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <sidebar class=\"ui left vertical inverted labeled visible sidebar borderless menu\"></sidebar>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.button#login-btn{\r\n\tbackground-color: #a566db;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n}\r\n\r\n/*body{\r\n\tbackground-color: #212025;\r\n\tbackground-image: url(\"../../../assets/images/lauren-mancke-60627.jpg\");\r\n\tbackground-size: cover;\r\n}*/\r\n\r\n#login-container{\r\n\tposition: relative;\r\n    background: #212025;\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  \t-webkit-box-orient: vertical;\r\n  \t-webkit-box-direction: normal;\r\n  \t    -ms-flex-direction: column;\r\n  \t        flex-direction: column;\r\n  \t-webkit-box-pack: center;\r\n  \t    -ms-flex-pack: center;\r\n  \t        justify-content: center;\r\n}\r\n\r\n#login-container:before{\r\n\tcontent: ' ';\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0.1;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/lauren-mancke-60627.jpg") + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 0;\r\n    -ms-background-size: cover;\r\n    background-size: cover;\r\n}\r\n\r\n.ui.form .field > input[type=text], .ui.form .field > input[type=password]{\r\n\tbackground: rgba(225, 225, 225, 0.7);\r\n\tborder-radius: 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.form .field.error > input[type=text], .ui.form .field.error > input[type=password]{\r\n  background: rgba(255, 154, 154, 0.7);\r\n  border-color: #f43636;\r\n}\r\n.ui.form input[type=text]:focus, .ui.form input[type=password]:focus{\r\n\tbackground: rgba(225, 225, 225, 0.7);\r\n\tborder-radius: 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder{\r\n\tcolor: #514b4c;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder{\r\n\tcolor: #514b4c;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.ui.form input::placeholder{\r\n\tcolor: #514b4c;\r\n\tfont-weight: 700;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome */\r\n  color: #514b4c;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: #514b4c;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: red;\r\n  opacity: 1;\r\n}\r\n:-moz-placeholder { /* Firefox 4 - 18 */\r\n  color: red;\r\n  opacity: 1;\r\n}\r\n\r\n.ui.centered.grid{\r\n\tz-index: 2;\r\n    position: relative;\r\n}\r\n\r\n.ui.image.field{\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n\r\n.spinner {  \r\n  -webkit-animation: rotate 600ms infinite linear;  \r\n          animation: rotate 600ms infinite linear;\r\n  -webkit-transform:translateZ(0px);\r\n          transform:translateZ(0px);\r\n}\r\n\r\n@-webkit-keyframes rotate {  \r\n  0% {-webkit-transform:rotate(0deg);transform:rotate(0deg);}\r\n  100% {-webkit-transform:rotate(360deg);transform:rotate(360deg);} \r\n}\r\n\r\n@keyframes rotate {  \r\n  0% {-webkit-transform:rotate(0deg);transform:rotate(0deg);}\r\n  100% {-webkit-transform:rotate(360deg);transform:rotate(360deg);} \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-container\">\r\n  \t<div class=\"ui centered stackable middle aligned grid\">\r\n      <div class=\"ui row\">\r\n        <div class=\"ui four wide column\">\r\n          <div class=\"ui basic segment\">\r\n            <form class=\"ui form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n              <div class=\"ui image field\">\r\n                <img src=\"../../../assets/images/av_landscape_white.png\">\r\n              </div>\r\n              <div class=\"field\" [ngClass]=\"{ 'error' : f.submitted && !username.valid }\">\r\n                <label style=\"color: red\"><alert></alert></label>\r\n                <input type=\"text\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\r\n              </div>\r\n              <div class=\"field\" [ngClass]=\"{ 'error' : f.submitted && !password.valid }\">\r\n                <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n              </div>\r\n              <div class=\"ui center aligned container\" >\r\n                <button [disabled]=\"loading || f.form.invalid\" class=\"ui button\" id=\"login-btn\" >login</button>\r\n                <svg class=\"spinner\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" *ngIf=\"loading\">\r\n                  <defs>\r\n                    <radialGradient id=\"a\" cx=\"100%\" r=\"74.064%\" fx=\"100%\" fy=\"50%\">\r\n                      <stop stop-color=\"#FFFFFF\" offset=\"0%\" />\r\n                      <stop stop-color=\"#FFFFFF\" stop-opacity=\".4\" offset=\"100%\" />\r\n                    </radialGradient>\r\n                  </defs>\r\n                  <path fill=\"url(#a)\" fill-opacity=\".8\" fill-rule=\"evenodd\" d=\"M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z\"\r\n                  />\r\n                </svg>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \t</div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, route, router, alertService) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
            console.log(_this.returnUrl);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error("Invalid username/password.");
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#current-user{\r\n    margin-left: 5px;\r\n    font-weight: 600;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted top borderless menu\">\n  <div class=\"ui container\">\n    <div class=\"right item\">\n      <div class=\"ui dropdown item\">\n        <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n        <span id=\"current-user\">{{user.name}}</span>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n          <a class=\"item\" (click)=\"settings()\">Settings</a>\n          <a class=\"item\" (click)=\"logOut()\">Logout</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.user = {};
        this.user = JSON.parse(window.localStorage.getItem('currentUser'));
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        $('.ui.dropdown').dropdown();
    };
    NavbarComponent.prototype.logOut = function () {
        this.authenticationService.logout();
    };
    NavbarComponent.prototype.settings = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/servers/servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  servers works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-servers',
        template: __webpack_require__("../../../../../src/app/components/servers/servers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/servers/servers.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServersComponent);

//# sourceMappingURL=servers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n  <img src=\"../../assets/images/av_landscape_white.png\" alt=\"\">\r\n</div>\r\n<div class=\"filler item\"></div>\r\n<a class=\"item link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe069;\"></span>\r\n  <span class=\"nav-label\">Home</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/timelogs\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe081;\"></span>\r\n  <span class=\"nav-label\">Time Logs</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/network\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe037;\"></span>\r\n  <span class=\"nav-label\">Network</span>\r\n</a>\r\n<a class=\"item link\" id=\"add-user\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe002;\"></span>\r\n  <span class=\"nav-label\">Add User</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/view-all-users\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe001;\"></span>\r\n  <span class=\"nav-label\">View Users</span>\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-in/time-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.button{\r\n    color: #2ec4b6;  \r\n    background-color: transparent;\r\n    font-family: 'Comfortaa', cursive;\r\n    font-size: 1.2rem;\r\n    padding: 20px;\r\n}\r\n\r\n.ui.table#online-user{\r\n\tbackground-color: transparent;\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#online-user thead{\r\n\tbackground-color: #2ec4b6;\r\n\tborder-radius: 17px 17px 0px 0px;\r\n\r\n}\r\n.ui.table#online-user thead tr th{\r\n\tbackground-color: #2ec4b6;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n}\r\n\r\n.ui.table#online-user thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user tbody tr td{\r\n\tborder-color: #2ec4b6;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#online-user td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#online-user tbody:last-child > td{\r\n\tpadding: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-in/time-in.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"online-user\">\n  <thead>\n    <tr>\n      <th>\n        Online Users\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <div class=\"ui fluid button\" (click)=\"timeIn()\">Time In</div>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-in/time-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeInComponent = (function () {
    function TimeInComponent(timelogService) {
        this.timelogService = timelogService;
    }
    TimeInComponent.prototype.ngOnInit = function () {
    };
    TimeInComponent.prototype.timeIn = function () {
        var user = JSON.parse(window.localStorage.getItem('currentUser'));
        this.timelogService.timeIn(user.username).subscribe();
        alert("Successfully timed in");
        user.status = 1;
        window.localStorage.setItem('currentUser', JSON.stringify(user));
    };
    return TimeInComponent;
}());
TimeInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'time-in',
        template: __webpack_require__("../../../../../src/app/components/timelogging-panel/time-in/time-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timelogging-panel/time-in/time-in.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */]) === "function" && _a || Object])
], TimeInComponent);

var _a;
//# sourceMappingURL=time-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-out/time-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.button{\r\n    color: #dc354e;  \r\n    background-color: transparent;\r\n    font-family: 'Comfortaa', cursive;\r\n    font-size: 1.2rem;\r\n    padding: 20px;\r\n}\r\n\r\n.ui.table#offline-user{\r\n\tbackground-color: transparent;\r\n\tborder-color: #dc354e;\r\n\tborder-width: 2.5px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.table#offline-user thead{\r\n\tbackground-color: #dc354e;\r\n\tborder-radius: 17px 17px 0px 0px;\r\n\r\n}\r\n.ui.table#offline-user thead tr th{\r\n\tbackground-color: #dc354e;\r\n\tcolor: white;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tletter-spacing: 0.3px;\r\n\tpadding: 14px 20px;\r\n}\r\n\r\n.ui.table#offline-user thead tr:first-child>th:only-child{\r\n\tborder-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-user tbody tr td{\r\n\tborder-color: #dc354e;\r\n\tborder-width: 2.5px;\r\n}\r\n\r\n.ui.table#offline-user td{\r\n\tcolor: #38383b;\r\n\tpadding: 14px 20px;\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tfont-size: 1.07142857rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n.ui.table#offline-user tbody:last-child > td{\r\n\tpadding: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-out/time-out.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"offline-user\">\n  <thead>\n    <tr>\n      <th>\n        Offline Users\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <div class=\"ui fluid button\" (click)=\"timeOut()\">Time Out</div>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-out/time-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeOutComponent = (function () {
    function TimeOutComponent(timelogService) {
        this.timelogService = timelogService;
    }
    TimeOutComponent.prototype.ngOnInit = function () {
    };
    TimeOutComponent.prototype.timeOut = function () {
        if (confirm('Are you sure you want to time out?') == true) {
            var user = JSON.parse(window.localStorage.getItem('currentUser'));
            this.timelogService.timeOut(user.username).subscribe();
            alert('Successfully timed out');
            user.status = 0;
            window.localStorage.setItem('currentUser', JSON.stringify(user));
        }
        else {
            alert('You pressed cancel!');
        }
    };
    return TimeOutComponent;
}());
TimeOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'time-out',
        template: __webpack_require__("../../../../../src/app/components/timelogging-panel/time-out/time-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timelogging-panel/time-out/time-out.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_timelog_service__["a" /* TimelogService */]) === "function" && _a || Object])
], TimeOutComponent);

var _a;
//# sourceMappingURL=time-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/timelogging-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/timelogging-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n  <div class=\"ui three column stackable row\">\n    <!-- Online Users -->\n    <div class=\"column\">\n      <time-in *ngIf=\"checkStatus() === 0\"></time-in>\n      <time-out *ngIf=\"checkStatus() === 1\"></time-out>\n    </div>\n\n    <!-- Users on Break -->\n    <div class=\"column\">\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/timelogging-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeloggingPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeloggingPanelComponent = (function () {
    function TimeloggingPanelComponent() {
    }
    TimeloggingPanelComponent.prototype.ngOnInit = function () {
    };
    TimeloggingPanelComponent.prototype.checkStatus = function () {
        var status = JSON.parse(window.localStorage.getItem('currentUser')).status;
        return status;
    };
    return TimeloggingPanelComponent;
}());
TimeloggingPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'timelogging-panel',
        template: __webpack_require__("../../../../../src/app/components/timelogging-panel/timelogging-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/timelogging-panel/timelogging-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimeloggingPanelComponent);

//# sourceMappingURL=timelogging-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        console.log({ username: username, password: password });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* appConfig */].apiURL + "/user/login", { data: { username: username, password: password } })
            .map(function (response) {
            var user = response.json().data;
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('x-access-token', user.token);
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.router.navigate(['/login']);
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NetworkService = (function () {
    function NetworkService(http, resource) {
        this.http = http;
        this.resource = resource;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'x-access-token': this.resource.getResource('x-access-token')
        });
    }
    NetworkService.prototype.getNetworks = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/host", { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], NetworkService);

var _a, _b;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourceService = (function () {
    function ResourceService() {
    }
    ResourceService.prototype.cacheResource = function (resource, name) {
        window.localStorage.setItem(name, resource);
    };
    ResourceService.prototype.getResource = function (name) {
        return window.localStorage.getItem(name);
    };
    ResourceService.prototype.stringify = function (data) {
        return JSON.stringify(data);
    };
    ResourceService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append('x-access-token', this.getResource('x-access-token'));
        return headers;
    };
    ResourceService.prototype.updateClock = function () {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();
        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";
        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        // Convert an hours component of "0" to "12"
        currentHours = (currentHours == 0) ? 12 : currentHours;
        // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
        return currentTimeString;
    };
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResourceService);

//# sourceMappingURL=resource.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/timelog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelogService = (function () {
    function TimelogService(http, resource) {
        this.http = http;
        this.resource = resource;
    }
    TimelogService.prototype.getTimelogs = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/all", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TimelogService.prototype.timeIn = function (username) {
        console.log(username);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/time-in", { username: username }, { headers: this.getHeaders() });
    };
    TimelogService.prototype.timeOut = function (username) {
        console.log(username);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/time-out", { username: username }, { headers: this.getHeaders() });
    };
    TimelogService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return TimelogService;
}());
TimelogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], TimelogService);

var _a, _b;
//# sourceMappingURL=timelog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, resource) {
        this.http = http;
        this.resource = resource;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'x-access-token': this.resource.getResource('x-access-token')
        });
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/all", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getOfflineUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/status/0", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getOnlineUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/status/1", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersOnBreak = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/status/2", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/lauren-mancke-60627.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lauren-mancke-60627.7def61c8d5235a31702c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map