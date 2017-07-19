webpackJsonp([0],{

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

/***/ "../../../../../src/app/_guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('currentUser');
        if (JSON.parse(user).isAdmin === true) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/']);
        alert('403 Unauthorized');
        return false;
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], AdminGuard);

var _a;
//# sourceMappingURL=admin.guard.js.map

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('currentUser');
        if (user === null) {
            return true;
        }
        else {
            if (JSON.parse(user).hasOwnProperty('isAdmin') === true) {
                this.router.navigate(['/admin']);
            }
            else {
                this.router.navigate(['/']);
            }
            return false;
        }
        // not logged in so redirect to login page with the return url
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], LoginGuard);

var _a;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserGuard = (function () {
    function UserGuard(router) {
        this.router = router;
    }
    UserGuard.prototype.canActivate = function (route, state) {
        var user = localStorage.getItem('currentUser');
        if (JSON.parse(user).isAdmin === false) {
            return true;
        }
        this.router.navigate(['/admin']);
        alert('403 Unauthorized');
        return false;
    };
    return UserGuard;
}());
UserGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
], UserGuard);

var _a;
//# sourceMappingURL=user.guard.js.map

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

module.exports = "<router-outlet></router-outlet>\r\n"

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
    apiURL: 'https://av-timelogs-api.herokuapp.com',
    //  apiURL: 'http://localhost:8080',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/av-timelogs',
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_my_offsets_my_offsets_table_my_offsets_table_component__ = __webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_my_offsets_my_offsets_component__ = __webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__ = __webpack_require__("../../../../../src/app/_guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__ = __webpack_require__("../../../../../src/app/_guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__ = __webpack_require__("../../../../../src/app/_guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment_moment_module__ = __webpack_require__("../../../../angular2-moment/moment.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment_moment_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment_moment_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_mydatepicker__ = __webpack_require__("../../../../ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/components/admin/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_view_all_users_view_all_users_component__ = __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_employee_monitor_employee_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/employee-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_employee_monitor_online_users_monitor_online_users_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_employee_monitor_offline_users_monitor_offline_users_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_employee_monitor_users_on_break_monitor_users_on_break_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_view_all_users_view_all_users_table_view_all_users_table_component__ = __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_timelogs_view_all_timelogs_timelogs_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_timelogs_view_all_timelogs_timelogs_table_timelogs_table_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_network_monitor_network_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_admin_network_monitor_network_monitor_table_network_monitor_table_component__ = __webpack_require__("../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_user_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/_loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/_alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_timelogging_panel_timelogging_panel_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/timelogging-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_timelogging_panel_time_in_time_in_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/time-in/time-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_timelogging_panel_time_out_time_out_component__ = __webpack_require__("../../../../../src/app/components/timelogging-panel/time-out/time-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_clock_clock_component__ = __webpack_require__("../../../../../src/app/components/clock/clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_admin_timelogs_view_all_timelogs_by_user_view_all_timelogs_by_user_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_admin_timelogs_view_all_timelogs_by_user_timelogs_by_user_table_timelogs_by_user_table_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_admin_network_monitor_save_network_save_network_component__ = __webpack_require__("../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_user_user_sidebar_user_sidebar_component__ = __webpack_require__("../../../../../src/app/components/user/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_user_my_timelogs_my_timelogs_component__ = __webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_user_my_timelogs_my_timelogs_table_my_timelogs_table_component__ = __webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_export_export_component__ = __webpack_require__("../../../../../src/app/components/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_user_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_content_loader_content_loader_component__ = __webpack_require__("../../../../../src/app/components/content-loader/content-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_admin_offset_monitor_offset_monitor_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_admin_offset_monitor_offset_monitor_table_offset_monitor_table_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_admin_offset_monitor_by_user_offset_monitor_by_user_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_admin_offset_monitor_by_user_user_offsets_table_user_offsets_table_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_login_guard__["a" /* LoginGuard */]] },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_employee_monitor_employee_monitor_component__["a" /* EmployeeMonitorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'timelogs', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_timelogs_view_all_timelogs_timelogs_component__["a" /* TimelogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'timelogs/user/:username', component: __WEBPACK_IMPORTED_MODULE_37__components_admin_timelogs_view_all_timelogs_by_user_view_all_timelogs_by_user_component__["a" /* ViewAllTimelogsByUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'network', component: __WEBPACK_IMPORTED_MODULE_26__components_admin_network_monitor_network_monitor_component__["a" /* NetworkMonitorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'create-user', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_add_user_add_user_component__["a" /* AddUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'view-all-users', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_view_all_users_view_all_users_component__["a" /* ViewUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'offsets', component: __WEBPACK_IMPORTED_MODULE_46__components_admin_offset_monitor_offset_monitor_component__["a" /* OffsetMonitorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'offsets/user/:username', component: __WEBPACK_IMPORTED_MODULE_48__components_admin_offset_monitor_by_user_offset_monitor_by_user_component__["a" /* OffsetMonitorByUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_44__components_user_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */]] },
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_30__components_user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_33__components_timelogging_panel_timelogging_panel_component__["a" /* TimeloggingPanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__["a" /* UserGuard */]] },
            { path: 'my-timelogs', component: __WEBPACK_IMPORTED_MODULE_41__components_user_my_timelogs_my_timelogs_component__["a" /* MyTimelogsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__["a" /* UserGuard */]] },
            { path: 'my-offsets', component: __WEBPACK_IMPORTED_MODULE_1__components_user_my_offsets_my_offsets_component__["a" /* MyOffsetsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__["a" /* UserGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_44__components_user_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__["a" /* UserGuard */]] },
        ]
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_timelogs_view_all_timelogs_timelogs_component__["a" /* TimelogsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_add_user_add_user_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_view_all_users_view_all_users_component__["a" /* ViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_employee_monitor_employee_monitor_component__["a" /* EmployeeMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_employee_monitor_online_users_monitor_online_users_monitor_component__["a" /* OnlineUsersMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_employee_monitor_offline_users_monitor_offline_users_monitor_component__["a" /* OfflineUsersMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_employee_monitor_users_on_break_monitor_users_on_break_monitor_component__["a" /* UsersOnBreakMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_view_all_users_view_all_users_table_view_all_users_table_component__["a" /* ViewAllUsersTableComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_admin_timelogs_view_all_timelogs_timelogs_table_timelogs_table_component__["a" /* TimelogsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_admin_network_monitor_network_monitor_component__["a" /* NetworkMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_admin_network_monitor_network_monitor_table_network_monitor_table_component__["a" /* NetworkMonitorTableComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_timelogging_panel_timelogging_panel_component__["a" /* TimeloggingPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_timelogging_panel_time_in_time_in_component__["a" /* TimeInComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_timelogging_panel_time_out_time_out_component__["a" /* TimeOutComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_clock_clock_component__["a" /* ClockComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_admin_timelogs_view_all_timelogs_by_user_view_all_timelogs_by_user_component__["a" /* ViewAllTimelogsByUserComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_admin_timelogs_view_all_timelogs_by_user_timelogs_by_user_table_timelogs_by_user_table_component__["a" /* TimelogsByUserTableComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_admin_network_monitor_save_network_save_network_component__["a" /* SaveNetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_user_user_sidebar_user_sidebar_component__["a" /* UserSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_user_my_timelogs_my_timelogs_component__["a" /* MyTimelogsComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_user_my_timelogs_my_timelogs_table_my_timelogs_table_component__["a" /* MyTimelogsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_export_export_component__["a" /* ExportComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_user_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_content_loader_content_loader_component__["a" /* ContentLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_admin_offset_monitor_offset_monitor_component__["a" /* OffsetMonitorComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_admin_offset_monitor_offset_monitor_table_offset_monitor_table_component__["a" /* OffsetMonitorTableComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_admin_offset_monitor_by_user_offset_monitor_by_user_component__["a" /* OffsetMonitorByUserComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_admin_offset_monitor_by_user_user_offsets_table_user_offsets_table_component__["a" /* UserOffsetsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_user_my_offsets_my_offsets_component__["a" /* MyOffsetsComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_user_my_offsets_my_offsets_table_my_offsets_table_component__["a" /* MyOffsetsTableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_moment_moment_module__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_12_ngx_mydatepicker__["NgxMyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__guards_user_guard__["a" /* UserGuard */], __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__["a" /* LoginGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, "body {\r\n   height: 100%;\r\n   overflow: hidden;\r\n   background-color: white;\r\n}\r\n\r\n.blobs {\r\n   -webkit-filter: url(\"#goo\");\r\n   filter: url(\"#goo\");\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   bottom: 0;\r\n   right: 0;\r\n}\r\n\r\n.blob {\r\n   position: absolute;\r\n   margin: auto;\r\n   top: 0;\r\n   bottom: 0;\r\n   right: 0;\r\n   left: 0;\r\n   width: 50px;\r\n   height: 50px;\r\n   border-radius: 50%;\r\n   background-color: #ee2e3d;\r\n}\r\n\r\n.blob:nth-child(1) {\r\n   -webkit-animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n.blob:nth-child(2) {\r\n   -webkit-animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes blob-left-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(80px, 0);\r\n              transform: scale(0.55, 0.5) translate(80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@keyframes blob-left-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(80px, 0);\r\n              transform: scale(0.55, 0.5) translate(80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@-webkit-keyframes blob-right-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(-80px, 0);\r\n              transform: scale(0.55, 0.5) translate(-80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@keyframes blob-right-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(-80px, 0);\r\n              transform: scale(0.55, 0.5) translate(-80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@-webkit-keyframes apester {\r\n   0% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n   20% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 0;\r\n   }\r\n   40% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0;\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      opacity: 1;\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n}\r\n\r\n@keyframes apester {\r\n   0% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n   20% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 0;\r\n   }\r\n   40% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0;\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      opacity: 1;\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n}\r\n\r\n.apester {\r\n   position: absolute;\r\n   height: 28px;\r\n   width: 28px;\r\n   left: calc(50% - 14px);\r\n   top: calc(50% - 14px);\r\n   -webkit-animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n.apester svg {\r\n   height: 100%;\r\n   width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blobs\">\r\n   <div class=\"blob\"></div>\r\n   <div class=\"blob\"></div>\r\n   <div class=\"apester\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\"\r\n         viewBox=\"0 0 100 138\" style=\"enable-background:new 0 0 100 138;\" xml:space=\"preserve\">\r\n         <style type=\"text/css\">\r\n            .st0 {\r\n               fill: #FFFFFF;\r\n            }\r\n\r\n         </style>\r\n         <path class=\"st0\" d=\"M100,39.5L100,39.5V0.4L75,23.7L49.5,0.4L25,23.7L0,0.4v39.1v0.4v18.7v16.1v41.9v3.6v3.6  c0,7.6,6.2,13.8,13.9,13.8h0.3c7.6,0,13.8-6.2,13.8-13.8v-3.6v-3.6v-16.4h44v16.4v3.6v3.6c0,7.6,6.2,13.8,13.9,13.8h0.3  c7.7,0,13.9-6.2,13.9-13.8v-3.6v-3.6V74.7V58.6L100,39.5L100,39.5z M28,74.7V63.5c0-12.1,9.9-21.9,22-21.9s22,9.8,22,21.9v11.2  C72,74.7,28,74.7,28,74.7z\"\r\n         />\r\n      </svg>\r\n   </div>\r\n</div>\r\n\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n   <defs>\r\n      <filter id=\"goo\">\r\n         <feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" />\r\n         <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />\r\n         <feBlend in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" />\r\n      </filter>\r\n   </defs>\r\n</svg>\r\n"

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

/***/ "../../../../../src/app/components/admin/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[type=file] {\r\n   cursor: inherit;\r\n   display: block;\r\n   font-size: 999px;\r\n   filter: alpha(opacity=0);\r\n   min-height: 100%;\r\n   min-width: 100%;\r\n   opacity: 0;\r\n   position: absolute;\r\n   right: 0;\r\n   text-align: right;\r\n   top: 0;\r\n}\r\n\r\n.ui.small.image {\r\n   width: 150px;\r\n   height: 150px;\r\n   overflow: hidden;\r\n}\r\n\r\n.ui.right.floated.edit.button {\r\n   padding: 0px;\r\n   background-color: transparent;\r\n}\r\n\r\n.ui.segments.error {\r\n   border: 2.5px solid #dc354e;\r\n}\r\n\r\n.ui.segments.error #header-segment {\r\n   background-color: #dc354e;\r\n}\r\n\r\n.ui.segments {\r\n   border: 2.5px solid #2ec4b6;\r\n   border-radius: 24px 24px 20px 20px;\r\n}\r\n\r\n.ui.segments>.segment {\r\n   border-top: none;\r\n}\r\n\r\n.ui.segment#header-segment {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   border-radius: 20px 20px 0px 0px;\r\n   border-top: none;\r\n}\r\n\r\n.ui.segment#header-segment * {\r\n   display: inline;\r\n   vertical-align: middle;\r\n}\r\n\r\n.ui.segment#header-segment h4 {\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.secondary.segment {\r\n   background-color: transparent;\r\n}\r\n\r\n.ui.secondary.segment .ui.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n   margin-top: 2px;\r\n}\r\n\r\n.ui.form .fields .eight.wide.field {\r\n   padding-bottom: 0px;\r\n}\r\n\r\n.ui.form .field .ui.labeled.input .ui.label {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n   text-align: center;\r\n}\r\n\r\n.ui.form .field.error label {\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.labeled.input .ui.label {\r\n   background-color: #dc354e;\r\n}\r\n\r\n.ui.form .field .ui.input input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form .field.error .ui.input input {\r\n   /*background: rgba(255, 154, 154, 0.7);*/\r\n   border-color: #dc354e;\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form>.fields>.field,\r\n.ui.form>.field {\r\n   margin-bottom: 10px !important;\r\n}\r\n\r\n\r\n/*/*.ui.form .fields .field{\r\n    margin-bottom: 10px;\r\n}*/\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form .field.error .ui.input input::-webkit-input-placeholder {\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.input input:-ms-input-placeholder {\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.input input::placeholder {\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.input input::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.input input:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #dc354e;\r\n}\r\n\r\n.ui.form .field.error .ui.input input::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #dc354e;\r\n   opacity: 1;\r\n}\r\n\r\n.ui.form .field.error .ui.input input:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #dc354e;\r\n   opacity: 1;\r\n}\r\n\r\n.ui.form .field>label {\r\n   font-size: 1.042em;\r\n}\r\n\r\n.ui.form>.field {\r\n   margin-bottom: 10px !important;\r\n}\r\n\r\n.ui.form .field:last-child {\r\n   margin-bottom: 0px !important;\r\n}\r\n\r\n.field .ui.fluid.button {\r\n   margin-top: 15px !important;\r\n   margin-bottom: 0px !important;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   .ui.grid>.stackable.stackable.row>.column#profile-pic,\r\n   .ui.stackable.grid>.column.grid>.column#profile-pic,\r\n   .ui.stackable.grid>.column.row>.column#profile-pic,\r\n   .ui.stackable.grid>.column:not(.row)#profile-pic,\r\n   .ui.stackable.grid>.row>.column#profile-pic,\r\n   .ui.stackable.grid>.row>.wide.column#profile-pic,\r\n   .ui.stackable.grid>.wide.column#profile-pic {\r\n      padding-top: 0px !important;\r\n   }\r\n   .ui.eight.wide.column {\r\n      padding-top: 8px !important;\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid container\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">Create User</div>\n         </div>\n      </div>\n   </div>\n   <form class=\"ui row form\" [formGroup]=\"addUserForm\" (ngSubmit)=\"addUserForm.valid && addUser()\" novalidate>\n      <div class=\"ui eight wide column\" id=\"profile-pic\">\n         <div class=\"ui segments\">\n            <div class=\"ui segment\" id=\"header-segment\">\n               <h4>Profile Picture</h4>\n            </div>\n            <div class=\"ui center aligned padded secondary segment\">\n               <div class=\"ui grid\">\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <div class=\"ui circular small image\">\n                           <img [src]=\"image\" alt=\"\">\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <h2 class=\"ui header\">\n                           <div class=\"content\">\n                              {{addUserForm.controls.lastName.value || 'Talahib'}}, {{addUserForm.controls.firstName.value || 'Gregorio'}}\n                              <div class=\"sub header\">@{{addUserForm.controls.username.value || 'gregoriotalahib'}}</div>\n                           </div>\n                        </h2>\n                     </div>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <div class=\"ui grid container\">\n                           <div class=\"equal width row\">\n                              <div class=\"column\">\n                                 <div class=\"ui fluid button\">\n                                    Upload Profile Picture\n                                    <input type=\"file\" name=\"file\" (change)=\"fileEvent($event)\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n      <div class=\"ui eight wide column\">\n         <div class=\"ui grid\">\n            <div class=\"row\">\n               <div class=\"column\">\n                  <div class=\"ui segments\" [ngClass]=\"{'error': !addUserForm.pristine && addUserForm.touched && addUserForm.invalid}\">\n                     <div class=\"ui segment\" id=\"header-segment\">\n                        <h4>User Details</h4>\n                     </div>\n                     <div class=\"ui padded secondary segment\">\n                        <div class=\"ui form\">\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.username.invalid && addUserForm.controls.username.dirty }\">\n                              <label>{{usernameLabel}}</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\">\n                                    <span data-icon=\"&#xe005;\"></span>\n                                 </div>\n                                 <input type=\"text\" placeholder=\"Username\" value=\"rftomista\" formControlName=\"username\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.password.invalid && !addUserForm.controls.password.pristine }\">\n                              <label>{{passwordLabel}}</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\">\n                                    <span data-icon=\"&#xe08e;\"></span>\n                                 </div>\n                                 <input type=\"password\" placeholder=\"Password\" value=\"********\" formControlName=\"password\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.firstName.invalid && !addUserForm.controls.firstName.pristine }\">\n                              <label>{{firstNameLabel}}</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\"><span data-icon=\"&#xe028;\"></span>\n                                 </div>\n                                 <input type=\"text\" placeholder=\"First Name\" value=\"Rainier Francis\" formControlName=\"firstName\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.lastName.invalid && !addUserForm.controls.lastName.pristine }\">\n                              <label>{{lastNameLabel}}</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\"><span data-icon=\"&#xe028;\"></span></div>\n                                 <input type=\"text\" placeholder=\"Last Name\" value=\"Tomista\" formControlName=\"lastName\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.contactNumber.invalid && !addUserForm.controls.contactNumber.pristine }\">\n                              <label>Contact Number</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\">\n                                    <span data-icon=\"&#xe047;\"></span>\n                                 </div>\n                                 <input type=\"text\" placeholder=\"Contact Number\" formControlName=\"contactNumber\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\" [ngClass]=\"{'error': addUserForm.controls.email.invalid && !addUserForm.controls.email.pristine }\">\n                              <label>{{emailLabel}}</label>\n                              <div class=\"ui labeled input\">\n                                 <div class=\"ui label\">\n                                    <span data-icon=\"&#xe086;\"></span>\n                                 </div>\n                                 <input type=\"email\" placeholder=\"Email Address\" value=\"rftomista@gmail.com\" formControlName=\"email\">\n                              </div>\n                           </div>\n                           <div class=\"field\">\n                              <div class=\"ui checkbox\">\n                                 <input type=\"checkbox\" name=\"example\" formControlName=\"isAdmin\">\n                                 <label>Give administrator privileges</label>\n                              </div>\n                           </div>\n                           <div class=\"field\">\n                              <button class=\"ui fluid button\" [disabled]=\"!addUserForm.valid\">Create User</button>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function AddUserComponent(userService, resourceService, sanitizer) {
        this.userService = userService;
        this.resourceService = resourceService;
        this.sanitizer = sanitizer;
        this.image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDBAMAAADD/3z4AAAAMFBMVEW8vsDR09TFxsi/wcPn6OnX2NrMztDc3d7Hycve4OHKy83Bw8XP0NIAAAAAAAAAAAC0F+PNAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4Ae3av27TbBTHcdfBSUs6uCISQmXokJHBEl0qFgi/xHHaoYMH2BgqsUZQqWuHSqxIzdINpFwAQy8gErkwYruH10nsWg2vzxn6+wwk6YC+OrYf58/jEBERERERERERERERUaVXz18e2BZ8AxBeWhZsIfHOMqGD1KldwVNkRnYJT3DHLmEqCZ+sTwXLk+FcEsb2CW+ZYHog5pLgmyXcSsIv01tEou+YaUyQeu/Y6SJl9Y7hTTKG9Jr4mjwLDBJukn+2Y+BD8qR1rV/gLV+J81A/IcYg92rb4FblLd+iuwZXZgzgxBFNgzu2h4UokJc7BgtUvLwiNSbqY/BWV6RDGYPuEHq5P7hInNoNQZbqvskQhKv7vmFXhrA2hoFWwpkMIc/V/EDRlCHYjWEqQygaww/nESAi92JzX/6fhG1sbsgEJjCBCUx4DAnRxYPUkfDA/00tgQlMYEL7BaJ924QOFp5ZJnhIRIFhQgep73YJctM6sUto4Y5dwqEkXJolXEmCb5ZwZp8wLUxoBeYHojO2OB0Plr5zHBlelNIV6CW4yAxWdpSM9Rfo8crmopH6bSoMlo7DQqCVICuDv7abw1dMaHyehL/XfyIZKiRUbSEIDBMmslaZJWwhMzRIeL2yZAfqCY2bIH2A8NUTWrjOHsRQPSHO3kZP8VegnLALJGNo4z++YoIskmF2HMRQN0F+q5/nEiLNBFkS+y7yfM0EuRQ/Iq+nmXCEIpFmwjkK+XoJHor19BI6KBapJTRRxtdKuEKZnlKCi1KRUsItyvkqCY0Jyh2rJOzgHqFKQoz7zBQStnCvY61PU+XC+hOaqDCrPaGLCscK3y9UCOtOOEKlWc0JP/cq1ZbAX2WYwAQm2O9f4EYSJjCBCUxgQrX23ub2HSIiIiIiIiIiIiIiIiIiIiIiIiKif/MHRAD9DcnwUkAAAAAASUVORK5CYII=';
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addUserForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[^ @]*@[^ @]*"),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            ]),
            contactNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](),
            totalHours: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](),
            imgUrl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](),
            _timelog: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](),
            isAdmin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](false)
        });
        this.firstNameLabel = 'First Name';
        this.lastNameLabel = 'Last Name';
        this.emailLabel = 'Email Address';
        this.usernameLabel = 'Username';
        this.passwordLabel = 'Password';
        this.addUserForm.valueChanges.subscribe(function (form) {
            // Username Label
            if (_this.addUserForm.controls.username.valid || !_this.addUserForm.controls.username.dirty) {
                _this.usernameLabel = 'Username';
            }
            else if (_this.addUserForm.controls.username.dirty && _this.addUserForm.controls.username.errors.required) {
                _this.usernameLabel = 'Username is required';
            }
            if (_this.addUserForm.controls.password.valid || !_this.addUserForm.controls.password.dirty) {
                _this.passwordLabel = 'Password';
            }
            else if (_this.addUserForm.controls.password.errors) {
                _this.passwordLabel = 'Password must be 8 characters long';
            }
            // First Name Label
            if (_this.addUserForm.controls.firstName.valid || !_this.addUserForm.controls.firstName.dirty) {
                _this.firstNameLabel = 'First Name';
            }
            else if (_this.addUserForm.controls.firstName.dirty && _this.addUserForm.controls.firstName.errors.required) {
                _this.firstNameLabel = 'First Name is required';
            }
            // Last Name Label
            if (_this.addUserForm.controls.lastName.valid || !_this.addUserForm.controls.lastName.dirty) {
                _this.lastNameLabel = 'Last Name';
            }
            else if (_this.addUserForm.controls.lastName.dirty && _this.addUserForm.controls.lastName.errors.required) {
                _this.lastNameLabel = 'Last Name is required';
            }
            // Email Label
            if (_this.addUserForm.controls.email.valid || !_this.addUserForm.controls.email.dirty) {
                _this.emailLabel = 'Email Address';
            }
            else if (_this.addUserForm.controls.email.dirty && _this.addUserForm.controls.email.errors.required) {
                _this.emailLabel = 'Email Address is required';
            }
            else if (_this.addUserForm.controls.email.dirty && _this.addUserForm.controls.email.errors.pattern) {
                _this.emailLabel = 'Invalid Email Address';
            }
        });
    };
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        this.addUserForm.controls.imgUrl.setValue(this.image);
        if (this.addUserForm.valid) {
            this.userService.addUser(this.addUserForm.value).subscribe(function (data) {
                if (_this.addUserForm.controls.isAdmin.value) {
                    alert('Sucessfully Created Admin.');
                }
                else {
                    alert('Sucessfully Created User.');
                }
                _this.addUserForm.reset();
                _this.image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDBAMAAADD/3z4AAAAMFBMVEW8vsDR09TFxsi/wcPn6OnX2NrMztDc3d7Hycve4OHKy83Bw8XP0NIAAAAAAAAAAAC0F+PNAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4Ae3av27TbBTHcdfBSUs6uCISQmXokJHBEl0qFgi/xHHaoYMH2BgqsUZQqWuHSqxIzdINpFwAQy8gErkwYruH10nsWg2vzxn6+wwk6YC+OrYf58/jEBERERERERERERERUaVXz18e2BZ8AxBeWhZsIfHOMqGD1KldwVNkRnYJT3DHLmEqCZ+sTwXLk+FcEsb2CW+ZYHog5pLgmyXcSsIv01tEou+YaUyQeu/Y6SJl9Y7hTTKG9Jr4mjwLDBJukn+2Y+BD8qR1rV/gLV+J81A/IcYg92rb4FblLd+iuwZXZgzgxBFNgzu2h4UokJc7BgtUvLwiNSbqY/BWV6RDGYPuEHq5P7hInNoNQZbqvskQhKv7vmFXhrA2hoFWwpkMIc/V/EDRlCHYjWEqQygaww/nESAi92JzX/6fhG1sbsgEJjCBCUx4DAnRxYPUkfDA/00tgQlMYEL7BaJ924QOFp5ZJnhIRIFhQgep73YJctM6sUto4Y5dwqEkXJolXEmCb5ZwZp8wLUxoBeYHojO2OB0Plr5zHBlelNIV6CW4yAxWdpSM9Rfo8crmopH6bSoMlo7DQqCVICuDv7abw1dMaHyehL/XfyIZKiRUbSEIDBMmslaZJWwhMzRIeL2yZAfqCY2bIH2A8NUTWrjOHsRQPSHO3kZP8VegnLALJGNo4z++YoIskmF2HMRQN0F+q5/nEiLNBFkS+y7yfM0EuRQ/Iq+nmXCEIpFmwjkK+XoJHor19BI6KBapJTRRxtdKuEKZnlKCi1KRUsItyvkqCY0Jyh2rJOzgHqFKQoz7zBQStnCvY61PU+XC+hOaqDCrPaGLCscK3y9UCOtOOEKlWc0JP/cq1ZbAX2WYwAQm2O9f4EYSJjCBCUxgQrX23ub2HSIiIiIiIiIiIiIiIiIiIiIiIiKif/MHRAD9DcnwUkAAAAAASUVORK5CYII=';
            }, function (error) {
                alert('Error!');
            });
        }
    };
    AddUserComponent.prototype.fileEvent = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/components/admin/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/add-user/add-user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], AddUserComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">Employee Real-time Monitor</div>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui three column stackable row\">\n      <!-- Online Users -->\n      <div class=\"column\">\n         <online-users-monitor></online-users-monitor>\n      </div>\n\n      <!-- Users on Break -->\n      <div class=\"column\">\n         <users-on-break-monitor></users-on-break-monitor>\n      </div>\n\n      <!-- Offline Users -->\n      <div class=\"column\">\n         <offline-users-monitor></offline-users-monitor>\n      </div>\n   </div>\n</div>\n"

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
exports.push([module.i, "/* Offline Users */\r\n\r\n.ui.table#offline-users {\r\n   background-color: transparent;\r\n   border-color: #dc354e;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#offline-users thead {\r\n   background-color: #dc354e;\r\n   border-radius: 17px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-users thead tr th {\r\n   background-color: #dc354e;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#offline-users thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-users tbody tr td {\r\n   border-color: #dc354e;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#offline-users td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#offline-users tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n\r\n/* Horizontal Label */\r\n\r\n.ui.horizontal.label {\r\n   min-width: 18px;\r\n   background-color: white;\r\n   padding: 2px 3px;\r\n   font-family: 'Lato';\r\n   font-weight: bolder;\r\n   color: #dc354e;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled single line fixed table\" id=\"offline-users\">\n   <thead>\n      <tr>\n         <th>\n            Offline Users\n            <div class=\"ui horizontal label\">\n               {{offlineUsers.length}}\n            </div>\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <tr class=\"center aligned\" *ngIf=\"loading\">\n         <td>\n            <content-loader></content-loader>\n         </td>\n      </tr>\n      <tr *ngIf=\"offlineUsers?.length < 1 && !loading\">\n         <td>\n            No Offline Users\n         </td>\n      </tr>\n      <tr *ngFor=\"let user of offlineUsers\">\n         <td>\n            <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\"> {{user.lastName}}, {{user.firstName}}\n         </td>\n      </tr>\n   </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
        this.userService = userService;
        this.offlineUsers = [];
        this.loading = true;
        this.fetchData();
    }
    OfflineUsersMonitorComponent.prototype.ngOnInit = function () {
    };
    OfflineUsersMonitorComponent.prototype.fetchData = function () {
        var _this = this;
        this.userService.getOfflineUsers().subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.sort(function (a, b) {
                    return _this.compareStrings(a.lastName, b.lastName);
                });
            }
            _this.offlineUsers = response.data;
            _this.loading = false;
            _this.subscribeToData();
        });
    };
    OfflineUsersMonitorComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].timer(1000).first().subscribe(function () { return _this.fetchData(); });
    };
    OfflineUsersMonitorComponent.prototype.compareStrings = function (a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    };
    return OfflineUsersMonitorComponent;
}());
OfflineUsersMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'offline-users-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/employee-monitor/offline-users-monitor/offline-users-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], OfflineUsersMonitorComponent);

var _a;
//# sourceMappingURL=offline-users-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#online-user {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#online-user thead {\r\n   background-color: #2ec4b6;\r\n   border-radius: 17px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#online-user thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#online-user td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#online-user tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n\r\n/* Horizontal Label */\r\n\r\n.ui.horizontal.label {\r\n   min-width: 18px;\r\n   background-color: white;\r\n   padding: 2px 3px;\r\n   font-family: 'Lato';\r\n   font-weight: bolder;\r\n   color: #2ec4b6;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled single line fixed table\" id=\"online-user\">\n   <thead>\n      <tr>\n         <th>\n            Online Users\n            <div class=\"ui horizontal label\">\n               {{onlineUsers.length}}\n            </div>\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <tr class=\"center aligned\" *ngIf=\"loading\">\n         <td>\n            <content-loader></content-loader>\n         </td>\n      </tr>\n      <tr *ngIf=\"onlineUsers?.length < 1 && !loading\">\n         <td>\n            No Online Users\n         </td>\n      </tr>\n      <tr *ngFor=\"let user of onlineUsers\">\n         <td>\n            <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\"> {{user.lastName}}, {{user.firstName}}\n         </td>\n      </tr>\n   </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/online-users-monitor/online-users-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
        this.userService = userService;
        this.resource = resource;
        this.onlineUsers = [];
        this.loading = true;
        this.fetchData();
    }
    OnlineUsersMonitorComponent.prototype.ngOnInit = function () {
    };
    OnlineUsersMonitorComponent.prototype.fetchData = function () {
        var _this = this;
        this.userService.getOnlineUsers().subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.sort(function (a, b) {
                    return _this.compareStrings(a.lastName, b.lastName);
                });
            }
            _this.onlineUsers = response.data;
            _this.loading = false;
            _this.subscribeToData();
        });
    };
    OnlineUsersMonitorComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(1000).first().subscribe(function () { return _this.fetchData(); });
    };
    OnlineUsersMonitorComponent.prototype.compareStrings = function (a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
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
exports.push([module.i, "/* Users on Break */\r\n\r\n.ui.table#users-break {\r\n   background-color: transparent;\r\n   border-color: #00d277;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#users-break thead {\r\n   background-color: #00d277;\r\n   border-radius: 17px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#users-break thead tr th {\r\n   background-color: #00d277;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#users-break thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#users-break tbody tr td {\r\n   border-color: #00d277;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#users-break td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#users-break tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n/* Horizontal Label */\r\n\r\n.ui.horizontal.label {\r\n   min-width: 18px;\r\n   background-color: white;\r\n   padding: 2px 3px;\r\n   font-family: 'Lato';\r\n   font-weight: bolder;\r\n   color: #00d277;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled single line fixed table\" id=\"users-break\">\n   <thead>\n      <tr>\n         <th>\n            Users On Break\n            <div class=\"ui horizontal label\">\n               {{usersOnBreak.length}}\n            </div>\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <tr class=\"center aligned\" *ngIf=\"loading\">\n         <td>\n            <content-loader></content-loader>\n         </td>\n      </tr>\n      <tr *ngIf=\"usersOnBreak?.length < 1 && !loading\">\n         <td>\n            No Users On Break\n         </td>\n      </tr>\n      <tr *ngFor=\"let user of usersOnBreak\">\n         <td>\n            <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\"> {{user.lastName}}, {{user.firstName}}\n         </td>\n      </tr>\n   </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/employee-monitor/users-on-break-monitor/users-on-break-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
        this.userService = userService;
        this.usersOnBreak = [];
        this.loading = true;
        this.fetchData();
    }
    UsersOnBreakMonitorComponent.prototype.ngOnInit = function () {
    };
    UsersOnBreakMonitorComponent.prototype.fetchData = function () {
        var _this = this;
        this.userService.getUsersOnBreak().subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.sort(function (a, b) {
                    return _this.compareStrings(a.lastName, b.lastName);
                });
            }
            _this.usersOnBreak = response.data;
            _this.loading = false;
            _this.subscribeToData();
        });
    };
    UsersOnBreakMonitorComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(1000).first().subscribe(function () { return _this.fetchData(); });
    };
    UsersOnBreakMonitorComponent.prototype.compareStrings = function (a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
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
exports.push([module.i, ".ui.table#time-logs {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table#time-logs thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   /*font-size: 1.07142857rem;*/\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n.ui.massive.icon.button {\r\n   background: transparent;\r\n   padding: 0px;\r\n}\r\n\r\n.ui.massive.icon.button .toggle.on {\r\n   color: #dc354e;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor-table/network-monitor-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n   <div class=\"ui row\">\r\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\r\n         <table class=\"ui celled unstackable table\" id=\"time-logs\">\r\n            <thead>\r\n               <tr>\r\n                  <th class=\"center aligned fixed six wide\">Hostname</th>\r\n                  <th class=\"center aligned three wide\">Description</th>\r\n                  <th class=\"center aligned three wide\">Status</th>\r\n                  <th class=\"two wide\"></th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr class=\"center aligned\" *ngIf=\"loading\">\r\n                  <td colspan=\"4\">\r\n                     <content-loader></content-loader>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"networks?.length < 1 && !loading\">\r\n                  <td class=\"center aligned\" colspan=\"4\">No Networks Listed</td>\r\n               </tr>\r\n               <tr *ngFor=\"let network of networks\">\r\n                  <td class=\"center aligned\">{{network.hostname}}</td>\r\n                  <td class=\"center aligned\">{{network.description}}</td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"network.status == 1\">Whitelisted</span>\r\n                     <span *ngIf=\"network.status == 0\">Blacklisted</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <div class=\"ui massive icon button\" *ngIf=\"network.status == 1\" data-tooltip=\"Set as blacklisted\" data-inverted=\"\">\r\n                        <i class=\"toggle on icon\" (click)=\"blacklist(network)\"></i>\r\n                     </div>\r\n                     <div class=\"ui massive icon button\" *ngIf=\"network.status == 0\" data-tooltip=\"Set as whitelisted\" data-inverted=\"\">\r\n                        <i class=\"toggle off icon\" (click)=\"whitelist(network)\"></i>\r\n                     </div>\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

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
        this.loading = true;
        this.networkService.getNetworks().subscribe(function (result) {
            _this.networks = result.data;
            _this.loading = false;
        });
    }
    NetworkMonitorTableComponent.prototype.ngOnInit = function () {
    };
    NetworkMonitorTableComponent.prototype.blacklist = function (network) {
        this.networkService.blacklist(network._id).subscribe(function (response) {
            network.status = 0;
            alert(response.msg);
        });
    };
    NetworkMonitorTableComponent.prototype.whitelist = function (network) {
        this.networkService.whitelist(network._id).subscribe(function (response) {
            network.status = 1;
            alert(response.msg);
        });
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
exports.push([module.i, "@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n   .ui.ten.wide.computer.sixteen.wide.tablet.sixteen.wide.mobile.column {\r\n      padding-top: 1.5rem !important;\r\n   }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   .ui.four.wide.computer.five.wide.tablet.sixteen.wide.mobile.column {\r\n      padding: 0px !important;\r\n   }\r\n   .ui.six.wide.computer.sixteen.wide.tablet.sixteen.wide.mobile.column {\r\n      padding-top: 0px !important;\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/network-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid stackable container\" id=\"content\">\r\n   <div class=\"ui row\" id=\"breadcrumb-container\">\r\n      <div class=\"ui column\">\r\n         <div class=\"ui breadcrumb\">\r\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\r\n            <div class=\"divider\"> / </div>\r\n            <div class=\"active section\">Network Monitor</div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"ui row\">\r\n      <div class=\"ui six wide computer sixteen wide tablet sixteen wide mobile column\">\r\n         <save-network></save-network>\r\n      </div>\r\n      <div class=\"ui ten wide computer sixteen wide tablet sixteen wide mobile column\">\r\n         <network-monitor-table></network-monitor-table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.segments {\r\n   border: 2.5px solid #2ec4b6;\r\n   border-radius: 24px 24px 20px 20px;\r\n}\r\n\r\n.ui.segment#header-segment {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   border-radius: 20px 20px 0px 0px;\r\n}\r\n\r\n.ui.segment#header-segment h4 {\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.secondary.segment {\r\n   background-color: transparent;\r\n}\r\n\r\n.ui.secondary.segment .ui.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n   margin-top: 2px;\r\n}\r\n\r\n.ui.secondary.segment .ui.one.column.row {\r\n   padding: 10px 0px;\r\n}\r\n\r\n#hostname {\r\n   color: #dc354e;\r\n   font-weight: bold;\r\n   overflow: hidden;\r\n   white-space: nowrap;\r\n   text-overflow: ellipsis;\r\n}\r\n\r\n#hostname .rdns {\r\n   text-overflow: ellipsis;\r\n}\r\n\r\n#hostname .ui.horizontal.label {\r\n   background-color: #dc354e;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n#ip-address {\r\n   color: #aa67da;\r\n   font-weight: bold;\r\n   overflow: hidden;\r\n   white-space: nowrap;\r\n   text-overflow: ellipsis;\r\n}\r\n\r\n#ip-address span {\r\n   text-overflow: ellipsis;\r\n}\r\n\r\n#ip-address .ui.horizontal.label {\r\n   background-color: #aa67da !important;\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n#description input {\r\n   background-color: transparent;\r\n   border-radius: 20px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segments\">\r\n   <div class=\"ui segment\" id=\"header-segment\">\r\n      <h4>Current Network</h4>\r\n   </div>\r\n   <div class=\"ui secondary blurring segment\">\r\n      <div class=\"ui grid\">\r\n         <div class=\"ui one column row\">\r\n            <div class=\"ui column\">\r\n               <div class=\"ui divided selection list\">\r\n                  <a class=\"item\" id=\"hostname\">\r\n              <span class=\"ui horizontal label\" >Host Name</span>\r\n              <span *ngIf=\"!loading\" class=\"rdns\">{{client.rdns}}</span>\r\n              <span *ngIf=\"loading === true\" class=\"rdns\">Fetching host name...</span>\r\n            </a>\r\n                  <a class=\"item\" id=\"ip-address\">\r\n                     <div class=\"ui purple horizontal label\">IP Address</div>\r\n                     <span>{{client.ip}}</span>\r\n                  </a>\r\n                  <a class=\"item ui form\" id=\"description\">\r\n                     <div class=\"field\">\r\n                        <input type=\"text\" name=\"first-name\" placeholder=\"Description\" [(ngModel)]=\"description\">\r\n                     </div>\r\n                  </a>\r\n               </div>\r\n            </div>\r\n            <div class=\"ui center aligned column\">\r\n               <button class=\"ui button\" [disabled]=\"loading\" (click)=\"saveNetwork()\">Save to Database</button>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveNetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveNetworkComponent = (function () {
    function SaveNetworkComponent(networkService) {
        var _this = this;
        this.networkService = networkService;
        this.client = {};
        this.loading = true; //Indicates that RDNS is not yet done
        this.client.ip = localStorage.getItem('currentIP'); //Gets the Current IP Address
        this.networkService.getRDNS(this.client.ip).subscribe(function (response) {
            _this.client.rdns = response.data; //Reverse DNS Lookup
            _this.loading = false; //Indicate that RDNS is done
        });
    }
    SaveNetworkComponent.prototype.saveNetwork = function () {
        var _this = this;
        var network = {
            hostname: this.client.rdns,
            ip_address: this.client.ip,
            description: this.description
        };
        this.networkService.checkNetworkStatus(network.ip_address).subscribe(function (response) {
            if (response.data) {
                alert('Network already exists in Database.');
                _this.description = ''; //Resets description field
            }
            else {
                _this.networkService.saveNetwork(network).subscribe(function (response) {
                    alert(response.message);
                    _this.description = ''; //Resets description Field
                    window.location.reload();
                });
            }
        });
    };
    return SaveNetworkComponent;
}());
SaveNetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'save-network',
        template: __webpack_require__("../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/network-monitor/save-network/save-network.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object])
], SaveNetworkComponent);

var _a;
//# sourceMappingURL=save-network.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.row#breadcrumb-container {\r\n   padding-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <a class=\"section\" routerLink=\"/admin/offsets\">Offset Hours Monitor</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"section\">{{params}}</div>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui  stackable row\">\n      <div class=\"column\">\n         <user-offsets-table></user-offsets-table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_offsets_table_user_offsets_table_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsetMonitorByUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffsetMonitorByUserComponent = (function () {
    function OffsetMonitorByUserComponent(route, offsetService) {
        var _this = this;
        this.route = route;
        this.offsetService = offsetService;
        this.route.params.subscribe(function (response) {
            _this.params = response.username;
        });
        this.offsetService.getUserOffsets(this.params)
            .subscribe(function (response) {
            _this.table.setTotal(response.data.totalValidOffsetHrs);
            _this.table.setOffsets(response.data.offsets);
            _this.table.setUser(response.data.user);
        });
    }
    OffsetMonitorByUserComponent.prototype.ngOnInit = function () {
    };
    return OffsetMonitorByUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__user_offsets_table_user_offsets_table_component__["a" /* UserOffsetsTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_offsets_table_user_offsets_table_component__["a" /* UserOffsetsTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_offsets_table_user_offsets_table_component__["a" /* UserOffsetsTableComponent */]) === "function" && _a || Object)
], OffsetMonitorByUserComponent.prototype, "table", void 0);
OffsetMonitorByUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-offset-monitor-by-user',
        template: __webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/offset-monitor-by-user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */]) === "function" && _c || Object])
], OffsetMonitorByUserComponent);

var _a, _b, _c;
//# sourceMappingURL=offset-monitor-by-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n\r\n/* Table Headers */\r\n\r\n.ui.table thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Inherit Default font for Remarks Tooltip*/\r\n\r\n.ui.table td.remarks.field {\r\n   font-family: inherit;\r\n}\r\n\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table td.remarks.field input {\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Highlighting for Invalid Offset*/\r\n\r\n.ui.table tr.warning {\r\n   background-color: transparent !important;\r\n}\r\n\r\n.ui.table tr.warning td {\r\n   background-color: lightcoral !important;\r\n}\r\n\r\n\r\n/* Set Radius of Last Column of Table */\r\n\r\n.ui.table tr:last-child td:first-child {\r\n   border-radius: 0px 0px 0px 17px;\r\n}\r\n\r\n.ui.table tr:last-child td:last-child {\r\n   border-radius: 0px 0px 17px 0px;\r\n}\r\n\r\n\r\n/* Link to All User Offset Timelogs*/\r\n\r\n.ui.table tr td a.nameLink {\r\n   font-weight: bolder;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table tr td.remarks.field input {\r\n   background-color: transparent;\r\n   text-align: center;\r\n   border: 0px;\r\n}\r\n\r\n\r\n/* Validate Icon */\r\n\r\n.ui.validate.icon.button {\r\n   background-color: #aa67da;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n   <div class=\"ui row\">\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\n         <table class=\"ui celled unstackable single line table\">\n            <thead>\n               <tr>\n                  <th class=\"center aligned four wide\">Time In</th>\n                  <th class=\"center aligned four wide\">Time Out</th>\n                  <th class=\"center aligned three wide\">Total Hours</th>\n                  <th class=\"center aligned three wide\">Remarks</th>\n                  <th class=\"two wide\"></th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr class=\"center aligned\" *ngIf=\"loading\">\n                  <td colspan=\"5\" id=\"no-data\">\n                     <content-loader></content-loader>\n                  </td>\n               </tr>\n               <tr *ngIf=\"offsets.length < 1 && !loading\">\n                  <td colspan=\"5\" class=\"center aligned\" id=\"no-data\">No Offset Hours Timelogs Yet</td>\n               </tr>\n               <tr *ngFor=\"let offset of offsets\" [ngClass]=\"{ 'warning': !offset.isValid }\">\n                  <td class=\"center aligned\">{{offset.timeIn | date: 'MMM dd, hh:mm:ss a'}}</td>\n                  <td class=\"center aligned\">\n                     <span *ngIf=\"!offset.timeOut\">--</span>\n                     <span *ngIf=\"offset.timeOut\">{{offset.timeOut | date: 'MMM dd, hh:mm:ss a'}}</span>\n                  </td>\n                  <td class=\"center aligned\">{{offset.totalHrs}}</td>\n                  <td class=\"center aligned remarks field\">\n                     <span data-tooltip=\"Click to Set Remarks\" data-inverted=\"\">\n                <input type=\"text\" *ngIf=\"offset.remarks\" value=\"{{offset.remarks}}\" maxlength=\"18\" (blur)=\"updateRemarks($event, offset._id)\" >\n                <input type=\"text\" *ngIf=\"!offset.remarks\" placeholder=\"n/a\" maxlength=\"18\" (blur)=\"updateRemarks($event, offset._id)\">\n              </span>\n                  </td>\n                  <td class=\"center aligned\">\n                     <div class=\"ui validate icon button\" data-tooltip=\"Set to Valid\" data-inverted=\"\" *ngIf=\"!offset.isValid\" (click)=\"setValid(offset._id)\">\n                        <i class=\"add icon\"></i>\n                     </div>\n                     <div class=\"ui invalidate icon button\" data-tooltip=\"Set to Invalid\" data-inverted=\"\" *ngIf=\"offset.isValid\" (click)=\"setInvalid(offset._id)\">\n                        <i class=\"minus icon\"></i>\n                     </div>\n                  </td>\n               </tr>\n               <tr *ngIf=\"offsets.length > 0\">\n                  <td colspan=\"2\" class=\"center aligned\">Total Valid Offsets</td>\n                  <td class=\"center aligned\">{{total}}</td>\n                  <td colspan=\"2\"></td>\n               </tr>\n            </tbody>\n         </table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOffsetsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserOffsetsTableComponent = (function () {
    function UserOffsetsTableComponent(offsetService) {
        this.offsetService = offsetService;
        this.offsets = [];
        this.loading = true;
    }
    UserOffsetsTableComponent.prototype.ngOnInit = function () { };
    UserOffsetsTableComponent.prototype.setTotal = function (total) {
        this.total = total;
    };
    UserOffsetsTableComponent.prototype.setOffsets = function (offsets) {
        this.offsets = offsets;
    };
    UserOffsetsTableComponent.prototype.setUser = function (user) {
        this.user = user;
        this.loading = false;
    };
    UserOffsetsTableComponent.prototype.setValid = function (offsetId) {
        var _this = this;
        if (confirm('Are you sure you want to set this to valid?')) {
            this.offsetService.setOffsetValid(offsetId)
                .subscribe(function (response) {
                _this.update(_this.user.username).then(function (response) {
                    _this.total = response.data.totalValidOffsetHrs;
                    _this.offsets = response.data.offsets;
                    alert('Successfully set to valid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    UserOffsetsTableComponent.prototype.setInvalid = function (offsetId) {
        var _this = this;
        if (confirm('Are you sure you want to set this to valid?')) {
            this.offsetService.setOffsetInvalid(offsetId)
                .subscribe(function (response) {
                _this.update(_this.user.username).then(function (response) {
                    _this.total = response.data.totalValidOffsetHrs;
                    _this.offsets = response.data.offsets;
                    alert('Successfully set to invalid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    UserOffsetsTableComponent.prototype.update = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.offsetService.getUserOffsets(username).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    UserOffsetsTableComponent.prototype.updateRemarks = function (event, offsetId) {
        var _this = this;
        var data = {
            _id: offsetId,
            remarks: event.target.value
        };
        this.offsetService.setRemarks(data)
            .subscribe(function (response) {
            _this.update(_this.user.username).then(function (response) {
                _this.offsets = response.data.offsets;
                alert('Successfully set remarks.');
            });
        });
    };
    return UserOffsetsTableComponent;
}());
UserOffsetsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'user-offsets-table',
        template: __webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/offset-monitor-by-user/user-offsets-table/user-offsets-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_offset_service__["a" /* OffsetService */]) === "function" && _a || Object])
], UserOffsetsTableComponent);

var _a;
//# sourceMappingURL=user-offsets-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n/* Table Headers */\r\n\r\n.ui.table thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Inherit Default font for Remarks Tooltip*/\r\n\r\n.ui.table td.remarks.field {\r\n   font-family: inherit;\r\n}\r\n\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table td.remarks.field input {\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Highlighting for Invalid Offset*/\r\n\r\n.ui.table tr.warning {\r\n   background-color: transparent !important;\r\n}\r\n\r\n.ui.table tr.warning td {\r\n   background-color: lightcoral !important;\r\n}\r\n\r\n\r\n/* Set Radius of Last Column of Table */\r\n\r\n.ui.table tr:last-child td:first-child {\r\n   border-radius: 0px 0px 0px 17px;\r\n}\r\n\r\n.ui.table tr:last-child td:last-child {\r\n   border-radius: 0px 0px 17px 0px;\r\n}\r\n\r\n\r\n/* Link to All User Offset Timelogs*/\r\n\r\n.ui.table tr td a.nameLink {\r\n   font-weight: bolder;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table tr td.remarks.field input {\r\n   background-color: transparent;\r\n   text-align: center;\r\n   border: 0px;\r\n}\r\n\r\n/* Validate Icon */\r\n\r\n.ui.validate.icon.button {\r\n   background-color: #aa67da;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n   <div class=\"ui row\">\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\n         <table class=\"ui celled unstackable single line table\">\n            <thead>\n               <tr>\n                  <th class=\"center aligned four wide\">Online Users</th>\n                  <th class=\"center aligned\">Recent Time In</th>\n                  <th class=\"center aligned\">Recent Time Out</th>\n                  <th class=\"center aligned three wide\">Remarks</th>\n                  <th class=\"two wide\"></th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr class=\"center aligned\" *ngIf=\"loading\">\n                  <td colspan=\"6\" id=\"no-data\">\n                     <content-loader></content-loader>\n                  </td>\n               </tr>\n               <tr *ngIf=\"users?.length < 1 && !loading\">\n                  <td class=\"center aligned\" colspan=\"6\" id=\"no-data\">No Timelogs for the Day</td>\n               </tr>\n               <tr *ngFor=\"let user of users\" [ngClass]=\"{'warning': user._offset && !user._offset.isValid}\">\n                  <td>\n                     <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n                     <a [routerLink]=\"['/admin/offsets/user', user.username]\" class=\"nameLink\">{{user.lastName}}, {{user.firstName}}</a>\n                  </td>\n                  <td class=\"center aligned\">\n                     <span *ngIf=\"!user._offset || !user._offset.timeIn\">--</span>\n                     <span *ngIf=\"user._offset && user._offset.timeIn\">{{user._offset.timeIn | date:'MMM dd, hh:mm:ss a'}}</span>\n                  </td>\n                  <td class=\"center aligned\">\n                     <span *ngIf=\"!user._offset || !user._offset.timeOut\">--</span>\n                     <span *ngIf=\"user._offset && user._offset.timeOut\">{{user._offset.timeOut | date:'MMM dd, hh:mm:ss a'}}</span>\n                  </td>\n                  <td class=\"center aligned remarks field\">\n                     <input type=\"text\" placeholder=\"n/a\" [disabled]=\"!user._offset\" *ngIf=\"!user._offset\">\n                     <span data-tooltip=\"Click to Set Remarks\" data-inverted=\"\">\n                <input type=\"text\" *ngIf=\"user._offset && user._offset.remarks\" value=\"{{user._offset.remarks}}\" maxlength=\"18\" (blur)=\"updateRemarks($event, user)\" >\n                <input type=\"text\" *ngIf=\"user._offset && !user._offset.remarks\" placeholder=\"n/a\" maxlength=\"18\" (blur)=\"updateRemarks($event, user)\">\n              </span>\n                  </td>\n                  <td class=\"center aligned\">\n                     <button class=\"ui validate icon button\" data-inverted=\"\" *ngIf=\"!user._offset\" [disabled]=\"!user._offset\">\n                <i class=\"add icon\"></i>\n              </button>\n                     <div class=\"ui validate icon button\" data-tooltip=\"Set to Valid\" data-inverted=\"\" *ngIf=\"user._offset && !user._offset.isValid\"\n                        (click)=\"setValid(user)\">\n                        <i class=\"add icon\"></i>\n                     </div>\n                     <div class=\"ui invalidate icon button\" data-tooltip=\"Set to Invalid\" data-inverted=\"\" *ngIf=\"user._offset && user._offset.isValid\"\n                        (click)=\"setInvalid(user)\">\n                        <i class=\"minus icon\"></i>\n                     </div>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsetMonitorTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OffsetMonitorTableComponent = (function () {
    function OffsetMonitorTableComponent(offsetService, resourceService) {
        this.offsetService = offsetService;
        this.resourceService = resourceService;
        this.users = [];
        this.loading = true;
    }
    OffsetMonitorTableComponent.prototype.ngOnInit = function () { };
    OffsetMonitorTableComponent.prototype.setLoading = function (bool) {
        this.loading = bool;
    };
    OffsetMonitorTableComponent.prototype.getLoading = function () {
        return this.loading;
    };
    OffsetMonitorTableComponent.prototype.getUsers = function () {
        return this.users;
    };
    OffsetMonitorTableComponent.prototype.setUsers = function (users) {
        this.users = users;
        this.loading = false;
    };
    OffsetMonitorTableComponent.prototype.setValid = function (user) {
        var _this = this;
        if (confirm('Are you sure you want to set this to valid?')) {
            this.offsetService.setOffsetValid(user._offset._id)
                .subscribe(function (response) {
                _this.update().then(function (response) {
                    _this.users = response.data;
                    alert('Successfully set to valid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    OffsetMonitorTableComponent.prototype.setInvalid = function (user) {
        var _this = this;
        if (confirm('Are you sure you want to set this to invalid?')) {
            this.offsetService.setOffsetInvalid(user._offset._id)
                .subscribe(function (response) {
                _this.update().then(function (response) {
                    _this.users = response.data;
                    alert('Successfully set to invalid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    OffsetMonitorTableComponent.prototype.update = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.offsetService.getOffsets().subscribe(function (response) {
                if (response.data.length > 0) {
                    response.data.sort(function (a, b) { return _this.resourceService.compareStrings(a.lastName, b.lastName); });
                    resolve(response);
                }
            });
        });
    };
    OffsetMonitorTableComponent.prototype.updateRemarks = function (event, user) {
        var _this = this;
        var data = {
            _id: user._offset._id,
            remarks: event.target.value
        };
        this.offsetService.setRemarks(data)
            .subscribe(function (response) {
            _this.update().then(function (response) {
                _this.users = response.data;
                alert('Successfully set remarks.');
            });
        });
    };
    return OffsetMonitorTableComponent;
}());
OffsetMonitorTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'offset-monitor-table',
        template: __webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */], __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], OffsetMonitorTableComponent);

var _a, _b;
//# sourceMappingURL=offset-monitor-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">Offset Hours Monitor</div>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui  stackable row\">\n      <div class=\"column\">\n         <offset-monitor-table></offset-monitor-table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_monitor_table_offset_monitor_table_component__ = __webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor-table/offset-monitor-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsetMonitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffsetMonitorComponent = (function () {
    function OffsetMonitorComponent(offsetService, resourceService) {
        var _this = this;
        this.offsetService = offsetService;
        this.resourceService = resourceService;
        this.offsetService.getOffsets()
            .subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.sort(function (a, b) { return _this.resourceService.compareStrings(a.lastName, b.lastName); });
            }
            _this.table.setUsers(response.data);
        });
    }
    OffsetMonitorComponent.prototype.ngOnInit = function () { };
    return OffsetMonitorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__offset_monitor_table_offset_monitor_table_component__["a" /* OffsetMonitorTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__offset_monitor_table_offset_monitor_table_component__["a" /* OffsetMonitorTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__offset_monitor_table_offset_monitor_table_component__["a" /* OffsetMonitorTableComponent */]) === "function" && _a || Object)
], OffsetMonitorComponent.prototype, "table", void 0);
OffsetMonitorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'offset-monitor',
        template: __webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/offset-monitor/offset-monitor.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */], __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_offset_service__["a" /* OffsetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]) === "function" && _c || Object])
], OffsetMonitorComponent);

var _a, _b, _c;
//# sourceMappingURL=offset-monitor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table#time-logs thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n.ui.table td.warning,\r\n.ui.table tr.warning {\r\n   background-color: transparent !important;\r\n   color: #dc354e !important;\r\n   font-weight: bolder;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n   <div class=\"ui one column row\">\r\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\r\n         <table class=\"ui celled unstackable single line table\" id=\"time-logs\">\r\n            <thead>\r\n               <tr>\r\n                  <th class=\"center aligned four wide\">Date</th>\r\n                  <th class=\"center aligned three wide\">Time In</th>\r\n                  <th class=\"center aligned three wide\">Time Out</th>\r\n                  <th class=\"center aligned three wide\">Late Hours</th>\r\n                  <th class=\"center aligned three wide\">Total</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr class=\"center aligned\" *ngIf=\"loading\">\r\n                  <td colspan=\"6\">\r\n                     <content-loader></content-loader>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"timelogs?.length < 1 && !loading\">\r\n                  <td class=\"center aligned\" colspan=\"6\" id=\"no-data\">No Timelogs yet</td>\r\n               </tr>\r\n               <tr *ngFor=\"let timelog of timelogs\">\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeIn != null\">{{timelog.timeIn | date }}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeIn != null\">{{timelog.timeIn | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeOut == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeOut != null\">{{timelog.timeOut | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\" [ngClass]=\"{'warning': timelog != null && timelog.lateHrs != null}\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.lateHrs == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.lateHrs != null\">{{timelog.lateHrs}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.totalHrs == null)\">00:00:00</span>\r\n                     <span *ngIf=\"timelog != null && timelog.totalHrs != null\">{{timelog.totalHrs}}</span>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"total !== null && timelogs.length > 0\">\r\n                  <td colspan=\"3\">TOTAL</td>\r\n                  <td class=\"center aligned\">{{totalLate}}</td>\r\n                  <td class=\"center aligned\">{{total}}</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelogsByUserTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelogsByUserTableComponent = (function () {
    function TimelogsByUserTableComponent(timelogService, route, datePipe) {
        this.timelogService = timelogService;
        this.route = route;
        this.datePipe = datePipe;
        this.timelogs = [];
        this.loading = true;
    }
    TimelogsByUserTableComponent.prototype.ngOnInit = function () {
    };
    TimelogsByUserTableComponent.prototype.getParam = function () {
        return this.param;
    };
    TimelogsByUserTableComponent.prototype.setParam = function (param) {
        this.param = param;
    };
    TimelogsByUserTableComponent.prototype.getTimelogs = function () {
        return this.timelogs;
    };
    TimelogsByUserTableComponent.prototype.setTimelogs = function (timelogs) {
        this.timelogs = timelogs;
    };
    TimelogsByUserTableComponent.prototype.getLoading = function () {
        return this.loading;
    };
    TimelogsByUserTableComponent.prototype.setLoading = function (bool) {
        this.loading = bool;
    };
    TimelogsByUserTableComponent.prototype.getTotal = function () {
        return this.total;
    };
    TimelogsByUserTableComponent.prototype.setTotal = function (total) {
        this.total = total;
    };
    TimelogsByUserTableComponent.prototype.getTotalLate = function () {
        return this.totalLate;
    };
    TimelogsByUserTableComponent.prototype.setTotalLate = function (totalLate) {
        this.totalLate = totalLate;
    };
    return TimelogsByUserTableComponent;
}());
TimelogsByUserTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'timelogs-by-user-table',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */]) === "function" && _c || Object])
], TimelogsByUserTableComponent);

var _a, _b, _c;
//# sourceMappingURL=timelogs-by-user-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.export.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n}\r\n\r\n.ui.form>.fields>.label.field {\r\n   padding-right: 0px;\r\n}\r\n\r\n.ui.form>.fields>.label.field>.input.label {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#start-date .ui.fluid.button {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#start-date.ui.column {\r\n   /*padding: 0px;*/\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.seven.wide.mobile.column {\r\n   padding-right: 0px\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column {\r\n   padding-left: 0px;\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n#end-date .ui.fluid.button {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#end-date.ui.column {\r\n   /*padding: 0px;*/\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.seven.wide.mobile.column {\r\n   padding-right: 0px\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column {\r\n   padding-left: 0px;\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form>.fields>.three.wide.field {\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form>.fields input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   #header-container {\r\n      padding-bottom: 0px;\r\n   }\r\n}\r\n\r\n#header>* {\r\n   display: inline;\r\n   vertical-align: middle;\r\n}\r\n\r\n#header>export {\r\n   margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <a class=\"section\" routerLink=\"/admin/timelogs\">Timelogs Monitor</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">{{param}}</div>\n         </div>\n         <export></export>\n      </div>\n   </div>\n   <div class=\"ui stackable row\">\n      <div class=\"column\">\n         <form class=\"ui form stackable grid\" [formGroup]=\"dateRange\" novalidate>\n            <div class=\"ui equal width row\" id=\"date-range-selectors\">\n               <div id=\"start-date\" class=\"ui six wide column\">\n                  <div class=\"ui grid\">\n                     <div class=\"ui row\">\n                        <div class=\"ui eight wide computer eight wide tablet seven wide mobile column\">\n                           <div class=\"ui fluid button mobile only\" (click)=\"sd.toggleCalendar()\">Start</div>\n                           <div class=\"ui fluid button mobile hidden\" (click)=\"sd.toggleCalendar()\">Start Date</div>\n                        </div>\n                        <div class=\"ui eight wide computer eight wide tablet nine wide mobile column\">\n                           <input class=\"form-control\" style=\"float:none\" placeholder=\"{{defaultStart}}\" ngx-mydatepicker name=\"startDate\" formControlName=\"startDate\"\n                              [options]=\"myOptions\" #sd=\"ngx-mydatepicker\" (click)=\"sd.toggleCalendar()\" />\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <div id=\"end-date\" class=\"ui six wide column\">\n                  <div class=\"ui grid\">\n                     <div class=\"ui row\">\n                        <div class=\"ui eight wide computer eight wide tablet seven wide mobile column\">\n                           <div class=\"ui fluid button mobile only\" (click)=\"ed.toggleCalendar()\">End</div>\n                           <div class=\"ui fluid button mobile hidden\" (click)=\"ed.toggleCalendar()\">End Date</div>\n\n                        </div>\n                        <div class=\"ui eight wide computer eight wide tablet nine wide mobile column\">\n                           <input class=\"form-control\" style=\"float:none\" placeholder=\"{{defaultEnd}}\" ngx-mydatepicker name=\"endDate\" formControlName=\"endDate\"\n                              [options]=\"myOptions\" #ed=\"ngx-mydatepicker\" (click)=\"ed.toggleCalendar()\" />\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </form>\n         <timelogs-by-user-table></timelogs-by-user-table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timelogs_by_user_table_timelogs_by_user_table_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/timelogs-by-user-table/timelogs-by-user-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__export_export_component__ = __webpack_require__("../../../../../src/app/components/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAllTimelogsByUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ALL_TIMELOGS_OF_USER = 1;
var ViewAllTimelogsByUserComponent = (function () {
    function ViewAllTimelogsByUserComponent(route, timelogService, userService, datePipe) {
        var _this = this;
        this.route = route;
        this.timelogService = timelogService;
        this.userService = userService;
        this.datePipe = datePipe;
        this.myOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.endDateOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.route.params.subscribe(function (params) {
            _this.param = params['username'];
        });
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        this.dateRange = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormGroup */]({
            startDate: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormControl */]({ date: { year: y, month: m + 1, day: firstDay.getDate() } }),
            endDate: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormControl */]({ date: { year: y, month: m + 1, day: lastDay.getDate() } })
        });
        this.userService.getUser(this.param).subscribe(function (user) {
        });
        this.timelogService.getTimelogsByDateRange(this.param, this.datePipe.transform(firstDay, 'MMddyyyy'), this.datePipe.transform(lastDay, 'MMddyyyy')).subscribe(function (timelogs) {
            _this.table.setTimelogs(timelogs.data.timelogs);
            _this.table.setLoading(false);
            _this.table.setTotal(timelogs.data.totalHrs);
            _this.table.setTotalLate(timelogs.data.totalLateHrs);
            _this.exportBtn.data = timelogs.data.timelogs;
            _this.exportBtn.total = timelogs.data.totalHrs;
            _this.exportBtn.totalLate = timelogs.data.totalLateHrs;
            _this.exportBtn.user = timelogs.data.user;
            _this.exportBtn.type = ALL_TIMELOGS_OF_USER;
        });
        this.dateRange.valueChanges.subscribe(function (form) {
            _this.table.setLoading(true);
            _this.table.setTimelogs([]);
            _this.timelogService.getTimelogsByDateRange(_this.param, _this.formatDate(form.startDate.date), _this.formatDate(form.endDate.date)).subscribe(function (timelogs) {
                _this.table.setTimelogs(timelogs.data.timelogs);
                _this.table.setLoading(false);
                _this.table.setTotal(timelogs.data.totalHrs);
                _this.table.setTotalLate(timelogs.data.totalLateHrs);
                _this.exportBtn.data = timelogs.data.timelogs;
                _this.exportBtn.total = timelogs.data.totalHrs;
                _this.exportBtn.totalLate = timelogs.data.totalLateHrs;
                _this.exportBtn.user = timelogs.data.user;
                _this.exportBtn.type = ALL_TIMELOGS_OF_USER;
            });
        });
    }
    ViewAllTimelogsByUserComponent.prototype.getTotal = function (data) {
        var hours = 0, minutes = 0, seconds = 0;
        var hh = 0, mm = 0, ss = 0;
        data.forEach(function (timelog) {
            if (timelog.totalHrs !== null) {
                var temp = timelog.totalHrs.split(':');
                hours += parseInt(temp[0]);
                minutes += parseInt(temp[1]);
                seconds += parseInt(temp[2]);
            }
        });
        ss = seconds % 60;
        mm = (minutes % 60) + Math.floor(seconds / 60);
        hh = hours + Math.floor(minutes / 60);
        return this.padValue(hh) + ":" + this.padValue(mm) + ":" + this.padValue(ss);
    };
    ViewAllTimelogsByUserComponent.prototype.formatDate = function (date) {
        return "" + this.padValue(date.month) + this.padValue(date.day) + date.year;
    };
    ViewAllTimelogsByUserComponent.prototype.padValue = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    return ViewAllTimelogsByUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__export_export_component__["a" /* ExportComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__export_export_component__["a" /* ExportComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__export_export_component__["a" /* ExportComponent */]) === "function" && _a || Object)
], ViewAllTimelogsByUserComponent.prototype, "exportBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__timelogs_by_user_table_timelogs_by_user_table_component__["a" /* TimelogsByUserTableComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__timelogs_by_user_table_timelogs_by_user_table_component__["a" /* TimelogsByUserTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__timelogs_by_user_table_timelogs_by_user_table_component__["a" /* TimelogsByUserTableComponent */]) === "function" && _b || Object)
], ViewAllTimelogsByUserComponent.prototype, "table", void 0);
ViewAllTimelogsByUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'app-view-all-timelogs-by-user',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs-by-user/view-all-timelogs-by-user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */]) === "function" && _f || Object])
], ViewAllTimelogsByUserComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=view-all-timelogs-by-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n\r\n/* Table Headers */\r\n\r\n.ui.table thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Set Radius of Last Column of Table */\r\n\r\n.ui.table tr:last-child td:first-child {\r\n   border-radius: 0px 0px 0px 17px;\r\n}\r\n\r\n.ui.table tr:last-child td:last-child {\r\n   border-radius: 0px 0px 17px 0px;\r\n}\r\n\r\n\r\n/* Link to All User Offset Timelogs*/\r\n\r\n.ui.table tr td a.nameLink {\r\n   font-weight: bolder;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n\r\n\r\n/* Late Hours Highlighting */\r\n\r\n.ui.table tr td.center.aligned.warning {\r\n   background-color: transparent !important;\r\n   color: #dc354e !important;\r\n   font-weight: 900;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n   <div class=\"ui row\">\r\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\r\n         <table class=\"ui celled unstackable single line table\" id=\"time-logs\">\r\n            <thead>\r\n               <tr>\r\n                  <th class=\"center aligned four wide\">Online Users</th>\r\n                  <th class=\"center aligned two wide\">Date</th>\r\n                  <th class=\"center aligned three wide\">Time In</th>\r\n                  <th class=\"center aligned three wide\">Time Out</th>\r\n                  <th class=\"center aligned\">Late Hours</th>\r\n                  <th class=\"center aligned\">Work Hours</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr class=\"center aligned\" *ngIf=\"loading\">\r\n                  <td colspan=\"6\">\r\n                     <content-loader></content-loader>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"users?.length < 1 && !loading\">\r\n                  <td class=\"center aligned\" colspan=\"6\" id=\"no-data\">No Timelogs for the Day</td>\r\n               </tr>\r\n               <tr *ngFor=\"let user of users\">\r\n                  <td>\r\n                     <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\r\n                     <a [routerLink]=\"['/admin/timelogs/user', user.username]\" class=\"nameLink\">{{user.lastName}}, {{user.firstName}}</a>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"user._timelog != null && user._timelog.timeIn != null\">{{user._timelog.timeIn | date:'MMM dd' }}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"user._timelog != null && user._timelog.timeIn != null\">{{user._timelog.timeIn | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.timeOut == null)\">--</span>\r\n                     <span *ngIf=\"user._timelog != null && user._timelog.timeOut != null\">{{user._timelog.timeOut | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\" [ngClass]=\"{'warning': user._timelog != null && user._timelog.lateHrs != null}\">\r\n                     <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.lateHrs == null)\">--</span>\r\n                     <span *ngIf=\"user._timelog != null && user._timelog.lateHrs != null\">{{user._timelog.lateHrs}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user._timelog == null || (user._timelog != null && user._timelog.totalHrs == null)\">00:00:00</span>\r\n                     <span *ngIf=\"user._timelog != null && user._timelog.totalHrs != null\">{{user._timelog.totalHrs}}</span>\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.ts":
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
        this.timelogService = timelogService;
        this.loading = true;
    }
    TimelogsTableComponent.prototype.ngOnInit = function () {
    };
    TimelogsTableComponent.prototype.getLoading = function () {
        return this.loading;
    };
    TimelogsTableComponent.prototype.setLoading = function (bool) {
        this.loading = bool;
    };
    TimelogsTableComponent.prototype.getUsers = function () {
        return this.users;
    };
    TimelogsTableComponent.prototype.setUsers = function (users) {
        var _this = this;
        if (users.length > 0) {
            users.sort(function (a, b) {
                return _this.compareStrings(a.lastName, b.lastName);
            });
        }
        this.users = users;
    };
    TimelogsTableComponent.prototype.compareStrings = function (a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    };
    return TimelogsTableComponent;
}());
TimelogsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'admin-timelogs-table',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]) === "function" && _a || Object])
], TimelogsTableComponent);

var _a;
//# sourceMappingURL=timelogs-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.export.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n}\r\n\r\n#header>* {\r\n   display: inline;\r\n   vertical-align: middle;\r\n}\r\n\r\n#header>export {\r\n   margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">Timelogs Monitor</div>\n            <export></export>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui  stackable row\">\n      <div class=\"column\">\n         <admin-timelogs-table></admin-timelogs-table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timelogs_table_timelogs_table_component__ = __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs-table/timelogs-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__export_export_component__ = __webpack_require__("../../../../../src/app/components/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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




var ALL_USERS_RECENT = 0;
var TimelogsComponent = (function () {
    function TimelogsComponent(timelogService) {
        var _this = this;
        this.timelogService = timelogService;
        this.timelogService.getTimelogs().subscribe(function (users) {
            _this.table.setUsers(users.data);
            _this.table.setLoading(false);
            _this.exportBtn.data = users.data;
            _this.exportBtn.type = ALL_USERS_RECENT;
        });
    }
    TimelogsComponent.prototype.ngOnInit = function () {
    };
    return TimelogsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */]) === "function" && _a || Object)
], TimelogsComponent.prototype, "exportBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__timelogs_table_timelogs_table_component__["a" /* TimelogsTableComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__timelogs_table_timelogs_table_component__["a" /* TimelogsTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__timelogs_table_timelogs_table_component__["a" /* TimelogsTableComponent */]) === "function" && _b || Object)
], TimelogsComponent.prototype, "table", void 0);
TimelogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'admin-timelogs',
        template: __webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/timelogs/view-all-timelogs/timelogs.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */]) === "function" && _c || Object])
], TimelogsComponent);

var _a, _b, _c;
//# sourceMappingURL=timelogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs>tbody>tr>td {\r\n   /*overflow-wrap: break-word;*/\r\n}\r\n\r\n.ui.table#time-logs>tbody>tr>td.center.aligned.options {\r\n   overflow: visible;\r\n}\r\n\r\n.ui.table#time-logs thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table#time-logs thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n.ui.icon.unsuspend.button {\r\n   background-color: #aa67da;\r\n}\r\n\r\n/* Link to All User Offset Timelogs*/\r\n\r\n.ui.table tr td a.nameLink {\r\n   font-weight: bolder;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" style=\"overflow-y:auto;\">\r\n   <div class=\"ui one column row\">\r\n      <div class=\"column\">\r\n         <table class=\"ui celled unstackable fluid single line table\" id=\"time-logs\">\r\n            <thead>\r\n               <tr>\r\n                  <th class=\"center aligned four wide\">Full Name</th>\r\n                  <th class=\"center aligned\">Username</th>\r\n                  <th class=\"center aligned\">Contact #</th>\r\n                  <th class=\"center aligned\">Email Address</th>\r\n                  <th class=\"center aligned two wide\">Status</th>\r\n                  <th class=\"two wide\"></th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr class=\"center aligned\" *ngIf=\"loading\">\r\n                  <td colspan=\"6\">\r\n                     <content-loader></content-loader>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"users?.length < 1 && !loading\">\r\n                  <td class=\"center aligned\" colspan=\"6\" id=\"no-data\">No Users</td>\r\n               </tr>\r\n               <tr *ngFor=\"let user of users\">\r\n                  <td>\r\n                     <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\r\n                     <a [routerLink]=\"['/admin/timelogs/user', user.username]\" class=\"nameLink\">{{user.lastName}}, {{user.firstName}}</a>\r\n                  </td>\r\n                  <td class=\"center aligned\">{{user.username}}</td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user.contactNumber === null\">--</span>\r\n                     <span *ngIf=\"user.contactNumber !== null\">{{user.contactNumber}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">{{user.email}}</td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"user.status === 0 && !user.isSuspended\">Offline</span>\r\n                     <span *ngIf=\"user.status === 1 && !user.isSuspended\">Online</span>\r\n                     <span *ngIf=\"user.status === 2 && !user.isSuspended\">On Break</span>\r\n                     <span *ngIf=\"user.isSuspended\">Suspended</span>\r\n                  </td>\r\n                  <td class=\"center aligned options\">\r\n                     <div class=\"ui icon suspend button\" data-tooltip=\"Suspend User\" data-inverted=\"\" *ngIf=\"!user.isSuspended\">\r\n                        <i class=\"remove icon\" (click)=\"suspend(user)\"></i>\r\n                     </div>\r\n                     <div class=\"ui icon unsuspend button\" data-tooltip=\"Unsuspend User\" data-inverted=\"\" *ngIf=\"user.isSuspended\">\r\n                        <i class=\"check icon\" (click)=\"unsuspend(user)\"></i>\r\n                     </div>\r\n                  </td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function ViewAllUsersTableComponent(userService, router, timelogService, resourceService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.timelogService = timelogService;
        this.resourceService = resourceService;
        this.loading = true;
        this.userService.getUsers().subscribe(function (users) {
            if (users.data.length > 0) {
                users.data.sort(function (a, b) {
                    return _this.resourceService.compareStrings(a.lastName, b.lastName);
                });
            }
            _this.users = users.data;
            _this.loading = false;
        });
    }
    ViewAllUsersTableComponent.prototype.ngOnInit = function () {
    };
    ViewAllUsersTableComponent.prototype.suspend = function (user) {
        var _this = this;
        if (confirm("Do you want to suspend " + user.firstName + " " + user.lastName) == true) {
            this.userService.suspendUser(user.username).subscribe(function (users) {
                if (!user._timelog) {
                    alert("Successfully suspended " + user.firstName + " " + user.lastName);
                    user.isSuspended = true;
                }
                else {
                    if (user._timelog.timeOut === null) {
                        _this.timelogService.timeOut(user.username).subscribe(function (response) {
                            alert("Successfully suspended " + user.firstName + " " + user.lastName + " and timed out current session.");
                            user.isSuspended = true;
                        });
                    }
                    else if (user._offset.timeOut === null) {
                        _this.timelogService.timeOut(user.username).subscribe(function (response) {
                            alert("Successfully suspended " + user.firstName + " " + user.lastName + " and timed out current offset session.");
                            user.isSuspended = true;
                        });
                    }
                    else if (user._offset.timeOut !== null || user._timelog.timeOut !== null) {
                        alert("Successfully suspended " + user.firstName + " " + user.lastName + ".");
                        user.isSuspended = true;
                    }
                }
            });
        }
        else {
            alert('You pressed cancel');
        }
    };
    ViewAllUsersTableComponent.prototype.unsuspend = function (user) {
        if (confirm("Do you want to unsuspend " + user.firstName + " " + user.lastName) == true) {
            this.userService.unsuspendUser(user.username).subscribe(function (users) {
                alert("Successfully unsuspended " + user.firstName + " " + user.lastName);
                user.isSuspended = false;
            });
        }
        else {
            alert('You pressed cancel');
        }
    };
    return ViewAllUsersTableComponent;
}());
ViewAllUsersTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'view-all-users-table',
        template: __webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/view-all-users/view-all-users-table/view-all-users-table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */], __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_timelog_service__["a" /* TimelogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_resource_service__["a" /* ResourceService */]) === "function" && _d || Object])
], ViewAllUsersTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-all-users-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.search.icon.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/view-all-users/view-all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\r\n   <div class=\"ui row\" id=\"breadcrumb-container\">\r\n      <div class=\"ui column\">\r\n         <div class=\"ui breadcrumb\">\r\n            <a class=\"section\" routerLink=\"/admin\">Admin Dashboard</a>\r\n            <div class=\"divider\"> / </div>\r\n            <div class=\"active section\">View All Users</div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"ui  stackable row\">\r\n      <div class=\"column\">\r\n         <view-all-users-table></view-all-users-table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

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
exports.push([module.i, ".ui.four.wide.computer.five.wide.tablet.sixteen.wide.mobile.column {\r\n   white-space: nowrap;\r\n}\r\n\r\n#time {\r\n   font-family: 'Lato', sans-serif;\r\n   font-weight: 900;\r\n   font-size: 30px;\r\n}\r\n\r\n#date {\r\n   font-family: 'Lato', sans-serif;\r\n   font-size: 20px;\r\n   margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   .ui.four.wide.computer.five.wide.tablet.sixteen.wide.mobile.column {\r\n      white-space: normal;\r\n   }\r\n   .ui.four.wide.computer.five.wide.tablet.sixteen.wide.mobile.column * {\r\n      display: block;\r\n      padding: 1.5px 0px;\r\n   }\r\n   #date {\r\n      margin-left: 0px;\r\n   }\r\n   .ui.stackable.row>div.ui.four.wide.computer.five.wide.tablet.sixteen.wide.mobile.column {\r\n      padding: 0px !important;\r\n   }\r\n}\r\n\r\n@media only screen and (max-width: 991px) and (min-width: 768px) {\r\n   /*.ui.five.wide.computer.four.wide.tablet.sixteen.wide.mobile.column #date{\r\n        margin-left: -40px;\r\n    }*/\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n   /*.ui.five.wide.computer.four.wide.tablet.sixteen.wide.mobile.column #date{\r\n        margin-left: -50px;\r\n    }*/\r\n}\r\n", ""]);

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
    ClockComponent.prototype.ngOnDestroy = function () { };
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
        template: "\n    <div class=\"ui grid container\" id=\"content\">\n      <div class=\"ui stackable row\">\n        <div class=\"ui four wide computer five wide tablet sixteen wide mobile column\">\n            <span id=\"time\"><time>{{clock | amDateFormat: 'hh:mm:ss A'}}</time></span>\n            <span id=\"date\"><time>{{clock | amDateFormat: 'ddd, D MMM YY'}}</time></span>\n        </div>\n      </div>\n    </div>",
        styles: [__webpack_require__("../../../../../src/app/components/clock/clock.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ClockComponent);

//# sourceMappingURL=clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/content-loader/content-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n   width: 100%;\r\n   height: 50px;\r\n   position: relative;\r\n}\r\n\r\n.blobs {\r\n   -webkit-filter: url(\"#goo\");\r\n   filter: url(\"#goo\");\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   bottom: 0;\r\n   right: 0;\r\n}\r\n\r\n.blob {\r\n   position: absolute;\r\n   margin: auto;\r\n   top: 0;\r\n   bottom: 0;\r\n   right: 0;\r\n   left: 0;\r\n   width: 50px;\r\n   height: 50px;\r\n   border-radius: 50%;\r\n   background-color: #dc354e;\r\n}\r\n\r\n.blob:nth-child(1) {\r\n   -webkit-animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: blob-left-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n.blob:nth-child(2) {\r\n   -webkit-animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: blob-right-anim cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes blob-left-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(80px, 0);\r\n              transform: scale(0.55, 0.5) translate(80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@keyframes blob-left-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(80px, 0);\r\n              transform: scale(0.55, 0.5) translate(80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@-webkit-keyframes blob-right-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(-80px, 0);\r\n              transform: scale(0.55, 0.5) translate(-80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@keyframes blob-right-anim {\r\n   0% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n   33% {\r\n      -webkit-transform: scale(0.55, 0.5) translate(-80px, 0);\r\n              transform: scale(0.55, 0.5) translate(-80px, 0);\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8) translate(0, 0);\r\n              transform: scale(0.8) translate(0, 0);\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0) translate(0, 0);\r\n              transform: scale(1.0) translate(0, 0);\r\n   }\r\n}\r\n\r\n@-webkit-keyframes apester {\r\n   0% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n   20% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 0;\r\n   }\r\n   40% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0;\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      opacity: 1;\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n}\r\n\r\n@keyframes apester {\r\n   0% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n   20% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 0;\r\n   }\r\n   40% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0;\r\n   }\r\n   66% {\r\n      -webkit-transform: scale(0.8);\r\n              transform: scale(0.8);\r\n      opacity: 1;\r\n   }\r\n   100% {\r\n      -webkit-transform: scale(1.0);\r\n              transform: scale(1.0);\r\n      opacity: 1;\r\n   }\r\n}\r\n\r\n.apester {\r\n   position: absolute;\r\n   height: 28px;\r\n   width: 28px;\r\n   left: calc(50% - 14px);\r\n   top: calc(50% - 14px);\r\n   -webkit-animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n           animation: apester cubic-bezier(0.770, 0.000, 0.175, 1.000) 2s infinite;\r\n   background-image: url(" + __webpack_require__("../../../../../src/app/components/content-loader/loader.png") + ");\r\n   background-repeat: no-repeat;\r\n   background-size: contain;\r\n   background-position-y: center;\r\n}\r\n\r\n.apester svg {\r\n   height: 100%;\r\n   width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-loader/content-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n   <div class=\"blobs\">\n      <div class=\"blob\"></div>\n      <div class=\"blob\"></div>\n      <div class=\"apester\">\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/content-loader/content-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentLoaderComponent = (function () {
    function ContentLoaderComponent() {
    }
    ContentLoaderComponent.prototype.ngOnInit = function () {
    };
    return ContentLoaderComponent;
}());
ContentLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'content-loader',
        template: __webpack_require__("../../../../../src/app/components/content-loader/content-loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/content-loader/content-loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContentLoaderComponent);

//# sourceMappingURL=content-loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/content-loader/loader.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loader.10b6a080d992de0c3671.png";

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "user-sidebar.ui.fixed.left.vertical.inverted.labeled.borderless.menu.tablet.or.lower.hidden {\r\n   height: 100vh;\r\n   background-color: #2a2830;\r\n}\r\n\r\n.content {\r\n   padding: 30px 18px;\r\n   background-color: #d9d9d9;\r\n   min-height: 100vh;\r\n   height: auto;\r\n   margin-top: 54px;\r\n}\r\n\r\n\r\n/*// Semantic UI has these classes, however they're only applicable to\r\n// grids, containers, rows and columns.\r\n// plus, there isn't any `mobile hidden`, `X hidden` class.\r\n// this snippet is using the same class names and same approach\r\n// plus a bit more but to all elements.\r\n//\r\n// see https://github.com/Semantic-Org/Semantic-UI/issues/1114*/\r\n\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n   [class*=\"mobile hidden\"],\r\n   [class*=\"tablet only\"]:not(.mobile),\r\n   [class*=\"computer only\"]:not(.mobile),\r\n   [class*=\"large screen only\"]:not(.mobile),\r\n   [class*=\"widescreen only\"]:not(.mobile),\r\n   [class*=\"or lower hidden\"] {\r\n      display: none !important;\r\n   }\r\n}\r\n\r\n\r\n/* Tablet / iPad Portrait */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n   [class*=\"mobile only\"]:not(.tablet),\r\n   [class*=\"tablet hidden\"],\r\n   [class*=\"computer only\"]:not(.tablet),\r\n   [class*=\"large screen only\"]:not(.tablet),\r\n   [class*=\"widescreen only\"]:not(.tablet),\r\n   [class*=\"or lower hidden\"]:not(.mobile) {\r\n      display: none !important;\r\n   }\r\n}\r\n\r\n\r\n/* Computer / Desktop / iPad Landscape */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n   [class*=\"mobile only\"]:not(.computer),\r\n   [class*=\"tablet only\"]:not(.computer),\r\n   [class*=\"computer hidden\"],\r\n   [class*=\"large screen only\"]:not(.computer),\r\n   [class*=\"widescreen only\"]:not(.computer),\r\n   [class*=\"or lower hidden\"]:not(.tablet):not(.mobile) {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n\r\n\r\n/* Large Monitor */\r\n\r\n@media only screen and (min-width: 1200px) and (max-width: 1919px) {\r\n   [class*=\"mobile only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"tablet only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"computer only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"large screen hidden\"],\r\n   [class*=\"widescreen only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"or lower hidden\"]:not(.computer):not(.tablet):not(.mobile) {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n\r\n\r\n/* Widescreen Monitor */\r\n\r\n@media only screen and (min-width: 1920px) {\r\n   [class*=\"mobile only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"tablet only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"computer only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"large screen only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"widescreen hidden\"],\r\n   [class*=\"widescreen or lower hidden\"] {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<sidebar class=\"ui visible sidebar left vertical inverted labeled borderless menu tablet or lower hidden\"></sidebar>\r\n<div id=\"dashboard\" class=\"content-container\">\r\n   <navbar></navbar>\r\n   <div class=\"content\">\r\n      <clock></clock>\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n</div>\r\n<sidebar id=\"sidebar\" class=\"ui sidebar left vertical inverted labeled borderless menu\"></sidebar>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function DashboardComponent(networkService, authService) {
        this.networkService = networkService;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.checkNetwork();
        $('.ui.dropdown').dropdown();
        $('a.sidebar-toggle').click(function () {
            $('#sidebar').sidebar('toggle');
        });
        $('#sidebar a.item.link').click(function () {
            $('#sidebar').sidebar('toggle');
        });
    };
    DashboardComponent.prototype.checkNetwork = function () {
        this.networkService.getIPAddress().subscribe(function (network) {
            localStorage.setItem('currentIP', network.ip); //Get Current IP Address
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */], __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/export/export.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.horizontal.label {\r\n   background-color: #aa67da;\r\n   color: white;\r\n   padding: 8px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"ui horizontal label\" (click)=\"export()\" [disabled]=\"data && data.length < 1\" data-tooltip=\"Download as PDF\"\r\n   data-inverted=\"\"><span data-icon=\"&#xe083;\"></span> Download</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ALL_USERS_RECENT = 0;
var ALL_TIMELOGS_OF_USER = 1;
var ExportComponent = (function () {
    function ExportComponent(datePipe) {
        this.datePipe = datePipe;
        this.data = [];
        this.WIDTH = 612;
        this.HEIGHT = 792;
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent.prototype.getTotal = function (data) {
        var hours = 0, minutes = 0, seconds = 0;
        var hh = 0, mm = 0, ss = 0;
        data.forEach(function (timelog) {
            if (timelog.totalHrs !== null) {
                var temp = timelog.totalHrs.split(':');
                hours += parseInt(temp[0]);
                minutes += parseInt(temp[1]);
                seconds += parseInt(temp[2]);
            }
        });
        ss = seconds % 60;
        mm = (minutes % 60) + Math.floor(seconds / 60);
        hh = hours + Math.floor(minutes / 60);
        return this.padValue(hh) + ":" + this.padValue(mm) + ":" + this.padValue(ss);
    };
    ExportComponent.prototype.formatDate = function (date) {
        return "" + this.padValue(date.month) + this.padValue(date.day) + date.year;
    };
    ExportComponent.prototype.padValue = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    ExportComponent.prototype.export = function () {
        var _this = this;
        var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf__('p', 'pt', 'letter');
        var date = this.datePipe.transform(new Date(), 'MMMM dd, yyyy');
        this.addTemplate(doc, this.WIDTH, this.HEIGHT);
        var dataHeaders = [];
        switch (this.type) {
            case ALL_USERS_RECENT:
                dataHeaders = [];
                dataHeaders.push({ text: 'Employee Name', padding: 95 });
                dataHeaders.push({ text: 'Recent Time In', padding: 40 });
                dataHeaders.push({ text: 'Recent Time Out', padding: 30 });
                dataHeaders.push({ text: 'Late Hours', padding: 20 });
                dataHeaders.push({ text: 'Working Hours', padding: 20 });
                this.setTitle(doc, "All Users' Recent Timelog Activity as of " + date, 0, 70, 14, '');
                var row_width_1 = this.createHeaders(doc, dataHeaders, 100);
                var y_1 = 120;
                this.data.forEach(function (element, index) {
                    if (index % 30 == 0 && index != 0) {
                        y_1 = 120;
                        doc.addPage();
                        _this.addTemplate(doc, _this.WIDTH, _this.HEIGHT);
                        _this.createHeaders(doc, dataHeaders, 100);
                        _this.setTitle(doc, "All Users' Recent Timelog Activity as of " + date, 0, 70, 14, '');
                    }
                    var rowData = _this.createAllUsersRecentRow(element);
                    _this.createRow(doc, dataHeaders, rowData, (_this.WIDTH - row_width_1) / 2, y_1, row_width_1);
                    y_1 += 20;
                });
                break;
            case ALL_TIMELOGS_OF_USER:
                dataHeaders = [];
                dataHeaders.push({ text: 'Date', padding: 80 });
                dataHeaders.push({ text: 'Time In', padding: 40 });
                dataHeaders.push({ text: 'Date', padding: 80 });
                dataHeaders.push({ text: 'Time Out', padding: 40 });
                dataHeaders.push({ text: 'Late Hours', padding: 20 });
                dataHeaders.push({ text: 'Working Hours', padding: 20 });
                var start_1 = this.datePipe.transform(this.data[0].timeIn, 'MMMM dd, yyyy');
                var end_1 = this.datePipe.transform(this.data[this.data.length - 1].timeIn, 'MMMM dd, yyyy');
                this.setTitle(doc, this.user.firstName + " " + this.user.lastName + "'s Timelog Activities between " + start_1 + " and " + end_1, 0, 75, 13, '');
                row_width_1 = this.createHeaders(doc, dataHeaders, 110);
                y_1 = 130;
                this.data.forEach(function (element, index) {
                    if (index % 29 == 0 && index != 0) {
                        y_1 = 130;
                        doc.addPage();
                        _this.addTemplate(doc, _this.WIDTH, _this.HEIGHT);
                        _this.setTitle(doc, _this.user.firstName + " " + _this.user.lastName + "'s Timelog Activities between " + start_1 + " and " + end_1, 0, 75, 13, '');
                        row_width_1 = _this.createHeaders(doc, dataHeaders, 110);
                    }
                    var rowData = _this.createTimelogRow(element);
                    _this.createRow(doc, dataHeaders, rowData, (_this.WIDTH - row_width_1) / 2, y_1, row_width_1);
                    y_1 += 20;
                });
                if (y_1 === 710) {
                    doc.addPage();
                    this.addTemplate(doc, this.WIDTH, this.HEIGHT);
                    this.setTitle(doc, this.user.name + "'s Timelog Activities between " + start_1 + " and " + end_1, 0, 75, 13, '');
                    y_1 = 110;
                }
                //   let total = this.getTotal(this.data);
                this.createTotal(doc, dataHeaders, this.total, this.totalLate, (this.WIDTH - row_width_1) / 2, y_1, row_width_1);
                break;
        }
        doc.output('dataurlnewwindow');
    };
    ExportComponent.prototype.createAllUsersRecentRow = function (element) {
        var rowData = [];
        rowData.push(element.lastName + ", " + element.firstName);
        if (element._timelog === null) {
            rowData.push('--');
            rowData.push('--');
            rowData.push('--');
            rowData.push('--');
        }
        else {
            rowData.push(this.datePipe.transform(element._timelog.timeIn, 'MMM dd hh:mm:ss a') || '--');
            rowData.push(this.datePipe.transform(element._timelog.timeOut, 'MMM dd hh:mm:ss a') || '--');
            rowData.push(element._timelog.lateHrs || '00:00:00');
            rowData.push(element._timelog.totalHrs || '00:00:00');
        }
        return rowData;
    };
    ExportComponent.prototype.createTimelogRow = function (element) {
        var rowData = [];
        rowData.push(this.datePipe.transform(element.timeIn, 'MMMM dd, yyyy') || '--');
        rowData.push(this.datePipe.transform(element.timeIn, 'hh:mm:ss a') || '--');
        rowData.push(this.datePipe.transform(element.timeOut, 'MMMM dd, yyyy') || '--');
        rowData.push(this.datePipe.transform(element.timeOut, 'hh:mm:ss a') || '--');
        rowData.push(element.lateHrs || '00:00:00');
        rowData.push(element.totalHrs || '00:00:00');
        return rowData;
    };
    ExportComponent.prototype.addPage = function (doc, width, height) {
        var logo = 'data:image/png;base64,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Np6crj+pgtzwe/PLqulYbua1c5uqujhKndekX9WTjSemn/7d5o//p+Etrx7c8tLBN/1AdeGlmggvCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIACBo0vgUFR5baHs6G7CHq5s9MH3jx/4/Na7753+6Vf9tPqdsuElDxm2B0a0dVxbsLSyD+427B2udojtDYoto5oHGre1UlGkDmrKorYyKv5+lHRJj/xsbtXnTw9uf04j9/LaMKubu1/VQU1cwrahATpc7+IdDuTrdqePfqnZ3pQ7eocveMngzIVme10HSLA8YNlPKo3WyizczyJVWdGVgEgmK400P/KmCcfxtssqLgeJNy9T79U7e6tjUlM3D3OWb+1VB/PAZ+kYHJM7dJvNK3K77vDi86rbXtVsXhoMavM9vlLz1RueZToxkIYWn0+cqb78gekTX62P25VXw+d81/DO19QX7qnv/qtmTt4gAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAASOJoErv/U7m29414FdG3fxXuvWTB763OY73j3+43snH31GSpumqKieUuHU8qVWLE1VsneeTkBbUuw8Y7l16HMzPnrXrDTMnO3X9Dp/GWervDalyaRaO1afO6fPWO7N0NZH4xltW971W3inTzzabG5Ie3DLrVrf3VpX79bNlmyjsdqMk/GRccO0NVK/PFc+pGE/jLMRxN/MYu7UbXtNPdgEyvf1akDTDGt5hnMtz3Cup/XayekzX202rsj4+sRaffM909GGre/a4q4gkK1zuTbV6g315a/LkHrVzqhpTL76PvmR1uD0C1ae932DF/5gdcs3+24aEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACR4bAAb+XlxLvVZ5p4w9/aPMP3zO694vTDz0lFlrNNXfomqKoepr6rjWX0qOpHg5dw8p9721ptvNNur70Gw80xclYaOfSQq8rWWq3aUs9tK3yyi28o/q2C9Xx4/p1vPIy5VFT5TSRemi+K1febZcGRa/Bij6f+dlL5jtx68H5W/VRz1pg9lY6Xiqt5g5dMfO2xqT1lA8ZojfN6kAJEWraMMHKwVZwzaGf3Aa4+rnKoth37yCHU/lq3WEzqutj8hjqrelTX9R7i0dVffYFzcpatXlpau4hFn76auTmXZ1FDephNZ02X7u3mkit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Kpe8/dzd77n/w39w/4ffev8d9x/sJ+tNXpu4t43izYkfBr095W0WNZa3j9BN7NuH9ibQndV+k2S9e5PN9rN1fjL/vBM7n3/TDX/h1M7Lbr3xqezo3AgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhcZQER71UGHlv1D+6d/+07P/AHD9z1rrP3vPfCQ/PpPGN523DeIcRtaW7Oqob51me9uLcC4Db1JDijdeuVvcvJ/ktPnvnknZOvuO2TX3jTzasyfhMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcPkCIt7Lt3vK7/mOe27/jTs+8J/v+9Dde7v9Mc55mW6mVaY7pLx9pG8KJNlN6HuwXH7K9vHPv+W2z3vaJz3zlDG7T/nLxAkSIECAAAECBAgQIECAAAECBAgQIECAAAECBAhcUwER7zXlHuPBdg/2PnD2nt+/787/964/eff5B+c1ZjePcR6G9s4zjLfe4Juf5UtOnv6C2z7xeWduefbpm8Z4ptpMgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4PoXEPFe/310HbXwXff+2fvO3vuO++/6nXP3tSc2Tzens5ecufkFZ2557plb/sIZT2O+jjpLUwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBJ6SAiLep2S3OikCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBJ6aAnnorokAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIExiEg4h1HP2klAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEIiDidRkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAwP/Pnh3TAAAAIAzz73o6ltQBKXwQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIEBgGmWRAABAAElEQVSAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAIHYs2MaAAAAhGH+XU/HkjoghQ8CBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsc7vVlgAAQABJREFUBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILXssdQAAEAASURBVECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIBB7dkwDAACAMMy/6+lYUgek8EGAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIEAd9G1uAABAAElEQVSAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBGLPjmkAAAAQhvl3PR1L6oAUPggQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAleOdCgAAQABJREFUAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAQOzdf6w1dX0n8N2NadTaFANWl9XKqihWqK4NoKhLlYWq9UlFy+ZB2U1E3ITVav9RSXTbrisJyq6LVItZLSYuVrJWscFfhYJSFQUixZUq9deiIqsVsyZFJP3HfcMXv5nMOWfuuefc53I+z32ZJzj3nJk5n3l9PzPn3HmfmUuAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBFAyQcAAAEAASURBVMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg8AMG0wIc//OHpGTxLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAuC7zoRS/a5VfcnJf7pz/72c82pxqVECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMCEgBs1T+B4igABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApslIOLdrPFQDQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCYERLwTOJ4iQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAZgmIeDdrPFRDgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBCQER7wSOpwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILBZAiLezRoP1RAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBCQMQ7geMpAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIbJaAiHezxkM1BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQmBAQ8U7geIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbJSDi3azxUA0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQmBES8EzieIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGYJiHg3azxUQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQkBEe8EjqcIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwWQIi3s0aD9UQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgQkDEO4HjKQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGyWgIh3s8ZDNQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgQEPFO4HiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECmyUg4t2s8VANAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEJgREvBM4niJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMBmCYh4N2s8VEOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEJARHvBI6nCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsFkCIt7NGg/VECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYEJAxDuB4ykCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsloCId7PGQzUECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYEBDxTuB4igABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApslIOLdrPFQDQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCYERLwTOJ4iQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAZgmIeDdrPFRDgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBCQER7wSOpwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILBZAiLezRoP1RAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBCQMQ7geMpAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIbJaAiHezxkM1BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQmBAQ8U7geIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbJSDi3azxUA0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQmBES8EzieIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGYJiHg3azxUQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQkBEe8EjqcIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwWQIi3s0aD9UQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgQkDEO4HjKQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGyWgIh3s8ZDNQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgQEPFO4HiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECmyUg4t2s8VANAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEJgREvBM4niJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMBmCYh4N2s8VEOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEJARHvBI6nCBAgQIAAAQIECBAgQGAVgf/zrW9+/nOf+9EdP1xlYcsQIECAAAECBHZaIJ9MvvylL+30Wq2vvIBPrVWGML9ZZC/OeFUpWJ0EdkHgAbvwGl6CAAECBAgQIECAAAECBPaOwOWXXXbphz6U7X3gL/zC77/mNcc8+cmz2/6Gc87Jg4cffvgrX/3q2Wf38iPR+8J110XgBfv2Pf0Zz9jLFAdu29954YW333571n/ueecduFfZhTUfNBuyC1ZegsCEgLekCZzRU0Wtkgyd++Zzf3DHHdmcpxx9zGvPef1ou/xYXWDlzlzmU+tm4vRPjPtPP33uh+3NLHvlqvL9jAve/va7//Efs4b9L37xvlNPXXlVFtxkAR9utzs6It7tipmfAAECBAgQIECAAAECmyXw0jPOSEFHPPKRy+RV+fL7Oy66KPOfdOJvnvmKsw7Elnzk8svbanMW5iOXXTb3rNOt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Gzd85+Fu6+Vyh1eWLuV47TV/+IOpPfXIIw+bMqV9qiBNREAEOpuATLyd3b6qnQiIgAiIgAiIgAiIgAiIgAiIgAiIQD0E5j/33HXXXeeLthERXNR33HHHyb4bQaRHIiACIiACItAdCbCp64pvfmvpa68VKo8N+LNTp04+8MDClEogAiIgAlURkIm3KpKSIwIiIAIiIAIiIAIiIAIiIAIiIAIi0GkEuFrvoYcffmPVqsyKYdzdb9Ik+etkwlGkCIiACIiACHQGAbx1f3r//XYvQ7pGnPYxbuy4w6cc7t696TSKEQEREIFmEJCJtxlUJVMEREAEREAEREAEREAEREAEREAERKBzCNjJzAt/tdCrNHKXkQO2HfBXQ4d5jAIiIAIiIAIiIAKdTcBOZl67dp1Vc/DgHfpvs42O8ejsRlftRKCdCcjE286tI91EQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREYDMC79vsl36IgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MYH3t7FuUk0EREAEREAEREAEREAEREAEREAEREAEREAEShF4/NFHSde3b99dR48ulaG7JWpZBf/r5SUrfr0CPMN3Hr7V1h/ubpykb/cmsHrVm4tfWEwdBmw74K+GDktUhqc3XH/DmjW/HTZsx+NPPCHxtJKfLRtolWjbtkJ8GkHDmqbl+c89d/ddd61fv37//feffOCB6QrGe0g6ffeNqaQrPjBnzoMPPtirV68jpkwJX47eQIl5Pi99+2O84XvXL1nyUr9+Hzr+hOP15mr/9kJDH8uE99x77zp09m6c+b6oQ2B3zCITb3dsNeksAiIgAiIgAiIgAiIgAiIgAiIgAj2RAMudC3+1MF3zD2+91db9+9e3PJSW1gNjWFKn1uHib3eE8J3vfhe1h2y/fftXpD7gLavgQw889MDDPwPmqSefvKdMvF00GDBXNG7CnH3XXaNGfzRtKO2iOpUqFvuudfXJkz6W1vyKb35r6WuvIcj+2ziitE4tG2jport7DOaWJx9/Yv78+dY6iepss/XWw4YO3XfSpMgUjcnnyquuWv+nP5H3hptu6t2nT/rNHu8hiUK76idD781Vq/NKHzx4B6qWsK2mEzfeFflqAqNJBuxll13qts/MeT6SPq1eW8UwYdpr6z2vvcYsMeOSS9pKvbZShi+Qp596OlRpv8n7pSfbMAHheJdOJPaf4yeMT493hvn9P5nz1NNPv7Fqlaekt4/YccePH3BAesh7Gg8g4d/v+vdn5j2z5g9/8Mhef/EXI4bvfNRnjiqsi2fp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AiLQCgJ47h528MGUhDn2kssv597EPNsPpxNzY98bq1aReJuttz7+xBPi+j0yd9N5zvtN3i+esns9ve/e+0zhPXbfvXtpLm17OAHWzUfsuCMQGMWMZUZ0JhBmAOYBZgPborHXhAmRrQxp795MmYoUARFoNgHOTl/00kuUgnt9ZMym1WD/h1x401gU04UE1Ce7EH6bF62Dmtu8gaSeCIiACIiACIiACIiACIiACIiACIhAqwlg+Fm7dt0DD/+Mgvkvf/inDhw4cIstepsqHOa8YuVKs/cQg3333PPOtUd5/63wttq8IroknjV0O7qWNfTDpkzpEh1UqAjUTeBLp55y7XeuwQ7EcJ51xx13z549oH//YcM22H3537p1a5cvX25O6hbDbdOnTJtmYf1XBESgnQn88N9+aOoddOCB7ayndBMBERCBugnIxFs3OmUUAREQAREQAREQAREQAREQAREQARHoWAK45I7cZeQ9s2ebdYf/hmYer7bd2Ffov0t6v632oIMP8uwdEHjogYesFvtMjN1D3AE1VRU6kgCuUedfeCE7MLhRmxObMfTmDXY2MXxqypTJshV1ZD9QpTqOAM73ixa/QLV4TWv7Ucc1ryokAiKwiYBMvOoKIiACIiACIiACIiACIiACIiACIiACIpBBgHMd+eMCzqefejrttvuhfv3GjB691z4TyxznyFozfoH89e69BQdBZxTWbaOo0eRJH0P9Az4hN6lu24o9XnEsQPw9MGfOokWLEm67ePD36/ehsWN3k3G3x3eTagCwecgEDdh2QDUSJSWLwPLXl3PtPU8GD94h67niaiNAd7V3vXfg2vKnUlcuMFWCIkSgRxB47zvvvNMjKqpKioAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiED3J/C+7l8F1UAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEHh/T6mo6ikCIiACIiACIiACIiACIiACIiACIiACIiACItBMAtdcffVjTz215Qc+cPL//t+7jh7dpKJ+OmfOj++9941Vq5C/zdZbT/jrv556zDFNKitT7OpVbz76yKPP/fK5365ZY2qQ7C//4i8G9O+/3cCB++67b/PqnqmPItuWwI3XX49uI0eO3GPvvdtWSSnWcwhc/I1vLHrpJep72kkn1donn3j00fJZ/uvlJfOfm7969YZZequttt519K5/NXRYec7Msb+Y94tlr75qWRhBO+08fKutP5wn4cwzzmAqHrHjjud//et5abpj/Pznnnt+wYJ169ahPBj/auhftdvLJdRw0A477DZ2t0gzNbsJUGbgdgO7UIFmVzBT/nvfeeedzAeKFAEREAEREAEREAEREAEREAEREAEREAEREAEREIGSBP7jrrv/9c47LDFW3muvvbZkxpqSYd+98eabwyyDt9/+H/7xH8OY5oWxW9xx+x2/WDDfijCzroXX/O53v/vDHyxM9Q864MC/mXJE8zSR5G5B4JjPfQ49Pz5p0nEnnNAtFJaSHUwAu+m0M86kgnXMz7NuvXX2ffdhQ/3SKV+Km9CwBP/HPfe88tprCZJM1H9z6KGFRuLEHOtCmGzHjRkz9eipmaWbeiSe+e0rMhO4nPIBq0g8feTV02B23qf33T/H3ymuBruaPnPUUYUYPX0kQH/41reuCBMcPXVqeRNynoa7jdr1yE8fmWfR//u/+7uwxMLwR0eNKrmFi+qcf8HX1//xj5/927/9+IEHFkrumATy4u2YplRFREAEREAEREAEREAEREAEREAEREAEREAERKDLCKxd+7aXzTKrh6sNPPjQQyYQY8P22223evVv1q3f4OHUgv/hkfnThx+mIIoe/dHRe++zd9qWwLL+3LmP/mrxC1i7n3jqya985cx0mhaoqiJEQAREIEGAswcsZt8afcoxu8558EHy/vqNNxIyEz/DjT6JRxh9r77uumfmzTvltNMSj/wnO3h+8K//+sc//cljPEAkR0Q8v3Bh5hERu++5BxZoElPHqvbWLFy4MG2odn0KA3Vnx1R57TXXmrN1uhSclQsxpnNlxtz4/RsTFXz7rbcyU6Yjv3npZb7VKfGUeN6ARxx6WGZDJEpM5E3/PPHEsptjZt02yyziq958My2ng2Nk4u3gxlXVREAEREAEREAEREAEREAEREAEREAEREAERKBFBA74xIFP/ed/2sHFLO82qVRbIMZP6Ktnn9WkItJizduJonFEY8U5zz+JjDhX8Ud6lpsxSHzt7HPOmDatvF9UumjFiIAIiEAlBBYvXmxyMIjWJPB737vezK6fP+aYyJ6V0L7LVIn/5ZAhQyho5co3OdbebJbMir2vvz7TqT08oQE/4/Fjx3I+M9nfevvtZ3/xrBkUseF995/+6eKLvpFQgzkZ91bePhSUaVmsqb6W+MUlS+rI5Vnqzj5jxj/YaxRRvOmGDx/ev/+GE6qXLl3680cfNSsmGLe69daS7q2uUhhgN1KejTZMlhkO7bsJDe0bgN7CJifUbtDbGOGRt22oG9WBCTF0vEawhDK7S1gm3u7SUtJTBERABERABERABERABERABERABERABERABNqXAGvuV3z726y0brPtgJLLsnVXZqut/mfdeWvNiL3W1twPO+igkmvHoMBTbdyjj/7zDTd8e+ZMWXlrZa70IiAClRPAtxKZmEJrmp85A9k21uw1YULEYoen7933zEY+JyqnPTgxu/JqYD7E+MdZCB/bf7+EDkyz+O9aldMzLefuIv/qq7+D7RMbJ+6n6S0+w4YO5Wme82sdMFesXEmuurcT1ZedsyLMvksznXbaqSEl4PMC8iOp8VrGVB8mqKmOSPPWpGnwDC6ZHUu82YYxwyc8qhMa3nTrrV6EC79183sWPD4McJizdTkOfA7j88J0HsriKX2vvNdvnrRuF/++bqexFBYBERABERABERABERABERABERABERABERABEWhPAizp1r3o3J414sxM1tz/9lNHlrTvei1AgXGXnzf+y7+wBu3xCoiACIhAiwnMf+4588TFFFq+aD+iGXse9+BGMnJJuclP23ctl8+H/CRxQhRWW8uetu9aSl4r557796jBT0yMKJaQsPPOO1sMBsvEozp+It/02X777VqWnULtLgCqSWUz36S8hkBkKqUx1qFqrVnuvPtusmBMTdh3XY5riDEex26PLxmg+fysjkwCaTl+RPOB++9fMktaSPeNkYm3+7adNBcBERABERABERABERABERABERABERABERABEWgiAVaocQtjSb2+wz85ovmzf/u3WIhZg26ilhItAiIgAlECzy9YYM/dFBpNvulhySOaSW0uwhyT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6jvNhlO1pfJn551XzjNpXr5x8cWSVGr/mGOPMS/Pf+H1/+71YfPxV7761cJ8aTjhvFalveeXsbCMaefC0FWjGRcK+cru7VacSpDr/2zAxx5zTBiRrhdxLiPVuE79+GlaOTrbPMnyLsSFXA6GXjsI/eyzz8lOrhBpyvRDARU0y1q9Bs02cOunHp6uhNWlFRgyxNnfgtidRPt3R83vyv791WnknbcLizwu2PWoMRbuIbp5hmtEN8/4GhlT3SJRcnQTzO+G8PT2ARX0J6b8syTR031Yklonh78lc0REvYX3N99hA+8s6O4X/r7rj1fh9qKbWPjLHqLtNDvtAluefvrp0z4G4ocABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQ2OoEbrr/+7n/4B4Vx9DvfGQfjtccyVi4Lf/1v/1aSy5ct23/4rNm0rLDPPq++/rrrnv75z3V26HU//OE2S5bsvnSp9YaCng7/+Re/+NgTT6g6eI3uiScmAnF16623Wb36gB/feustt9327XXrdth227bBWF5lZTLO/NNPXn7llXrArTM2V77ylYmAVXfdZZcfXnvtc889d/+DD2ajlal137rk7HPPDc+sFW04JfXg1avjMB64//5rrr1WZoOAhn/pZZc989RTu+y6i+I3dyoof3Du5z6nsais8E484YSddk6PsrQpCNbkUQN/4a/92vIVc5uozGAgGfK7SnicdNKJiTuTHLWw8pWvkNOQDXrH296uatmC/CoAQRBMIdXY93nNaxKVQeLhC1/QvIT2k373d/d+RWrWxp6s4cRUqHYKl5erYlacd6xfr5g1X5v/akN7mEqmrrnwQgnI43vf/e540tXSGUCIU1r/7/HHdW1qYVx11VXZNawk6znnnLN+eMCpFsZpHz81O5UfO+Vj1990k2LWVfaWI48M9u1frSWN4tbh6tK/P7755u232669wLSqv/qVC758wQVhfrXM3vOf3mtGQmHiF3Jif1FVb7/tNk2Zhrzqtfttt9322bFrmjRfP3v8cS0STa5uTcnEaYX8+XnnhSk76vDDD1gqJboAACPFSURBVDrkELOjBXbPnet1owi6+k1GslAlqTvP/znrrHDX1W9B3vmud5l6KNjPC6T+9re9Vfe08v9tF9++ZF24Pfa5eBPvqsbXo+4h7etR+5vPOevsH918c9A9+aSTYkRjqgebukd9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';
        doc.addPage();
        doc.addImage(logo, 'png', 0, 0, width, height);
    };
    ExportComponent.prototype.addTemplate = function (doc, width, height) {
        var logo = 'data:image/png;base64,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Np6crj+pgtzwe/PLqulYbua1c5uqujhKndekX9WTjSemn/7d5o//p+Etrx7c8tLBN/1AdeGlmggvCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIACBo0vgUFR5baHs6G7CHq5s9MH3jx/4/Na7753+6Vf9tPqdsuElDxm2B0a0dVxbsLSyD+427B2udojtDYoto5oHGre1UlGkDmrKorYyKv5+lHRJj/xsbtXnTw9uf04j9/LaMKubu1/VQU1cwrahATpc7+IdDuTrdqePfqnZ3pQ7eocveMngzIVme10HSLA8YNlPKo3WyizczyJVWdGVgEgmK400P/KmCcfxtssqLgeJNy9T79U7e6tjUlM3D3OWb+1VB/PAZ+kYHJM7dJvNK3K77vDi86rbXtVsXhoMavM9vlLz1RueZToxkIYWn0+cqb78gekTX62P25VXw+d81/DO19QX7qnv/qtmTt4gAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAASOJoErv/U7m29414FdG3fxXuvWTB763OY73j3+43snH31GSpumqKieUuHU8qVWLE1VsneeTkBbUuw8Y7l16HMzPnrXrDTMnO3X9Dp/GWervDalyaRaO1afO6fPWO7N0NZH4xltW971W3inTzzabG5Ie3DLrVrf3VpX79bNlmyjsdqMk/GRccO0NVK/PFc+pGE/jLMRxN/MYu7UbXtNPdgEyvf1akDTDGt5hnMtz3Cup/XayekzX202rsj4+sRaffM909GGre/a4q4gkK1zuTbV6g315a/LkHrVzqhpTL76PvmR1uD0C1ae932DF/5gdcs3+24aEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACR4bAAb+XlxLvVZ5p4w9/aPMP3zO694vTDz0lFlrNNXfomqKoepr6rjWX0qOpHg5dw8p9721ptvNNur70Gw80xclYaOfSQq8rWWq3aUs9tK3yyi28o/q2C9Xx4/p1vPIy5VFT5TSRemi+K1febZcGRa/Bij6f+dlL5jtx68H5W/VRz1pg9lY6Xiqt5g5dMfO2xqT1lA8ZojfN6kAJEWraMMHKwVZwzaGf3Aa4+rnKoth37yCHU/lq3WEzqutj8hjqrelTX9R7i0dVffYFzcpatXlpau4hFn76auTmXZ1FDephNZ02X7u3mkit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Kpe8/dzd77n/w39w/4ffev8d9x/sJ+tNXpu4t43izYkfBr095W0WNZa3j9BN7NuH9ibQndV+k2S9e5PN9rN1fjL/vBM7n3/TDX/h1M7Lbr3xqezo3AgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhcZQER71UGHlv1D+6d/+07P/AHD9z1rrP3vPfCQ/PpPGN523DeIcRtaW7Oqob51me9uLcC4Db1JDijdeuVvcvJ/ktPnvnknZOvuO2TX3jTzasyfhMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcPkCIt7Lt3vK7/mOe27/jTs+8J/v+9Dde7v9Mc55mW6mVaY7pLx9pG8KJNlN6HuwXH7K9vHPv+W2z3vaJz3zlDG7T/nLxAkSIECAAAECBAgQIECAAAECBAgQIECAAAECBAhcUwER7zXlHuPBdg/2PnD2nt+/787/964/eff5B+c1ZjePcR6G9s4zjLfe4Juf5UtOnv6C2z7xeWduefbpm8Z4ptpMgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4PoXEPFe/310HbXwXff+2fvO3vuO++/6nXP3tSc2Tzens5ecufkFZ2557plb/sIZT2O+jjpLUwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBJ6SAiLep2S3OikCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBJ6aAnnorokAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIExiEg4h1HP2klAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEIiDidRkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl7XAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYjIOIdTVdpKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBES8rgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMRkDEO5qu0lACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIeF0DBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI2AiHc0XaWhBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEPG6BggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIDAaARHvaLpKQwkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDidQ0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgNAIi3tF0lYYSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBAxOsaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGgERLyj6SoNJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIjXNUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHRCIh4R9NVGkqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAERr2uAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECoxEQ8Y6mqzSUAAECBAgQIECAwP/Pnh3TAAAAIAzz73o6ltQBKXwQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIEBgGmWRAABAAElEQVSAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAIHYs2MaAAAAhGH+XU/HkjoghQ8CBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsc7vVlgAAQABJREFUBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILXssdQAAEAASURBVECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIBB7dkwDAACAMMy/6+lYUgek8EGAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIEAd9G1uAABAAElEQVSAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBGLPjmkAAAAQhvl3PR1L6oAUPggQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAleOdCgAAQABJREFUAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIODitQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsBFy8m6oEJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIvXBggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILARcPFuqhKUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECLl4bIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwEbAxbupSlACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAi4eG2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECGwEX76YqQQkQIECAAAECBAgQIECAAAECBAgQIECAQOzdf6w1dX0n8N2NadTaFANWl9XKqihWqK4NoKhLlYWq9UlFy+ZB2U1E3ITVav9RSXTbrisJyq6LVItZLSYuVrJWscFfhYJSFQUixZUq9deiIqsVsyZFJP3HfcMXv5nMOWfuuefc53I+z32ZJzj3nJk5n3l9PzPn3HmfmUuAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBFAyQcAAAEAASURBVMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiIePUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEygiIeMsMlUIJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAg4tUDBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQKCMg4i0zVAolQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQICAiFcPECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIyAiLfMUCmUAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECIl49QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTICIt4yQ6VQAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIiHj1AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBMoIiHjLDJVCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIOLVAwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECgjIOItM1QKJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgIhXDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCMgIi3zFAplAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiJePUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEyAiLeMkOlUAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECIh49QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTKCIh4ywyVQgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDi1QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoIyDiLTNUCiVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgICIVw8QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECgjICIt8xQKZQAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIiXj1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBMgIi3jJDpVACBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg8AMG0wIc//OHpGTxLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAuC7zoRS/a5VfcnJf7pz/72c82pxqVECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMCEgBs1T+B4igABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApslIOLdrPFQDQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCYERLwTOJ4iQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAZgmIeDdrPFRDgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBCQER7wSOpwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILBZAiLezRoP1RAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBCQMQ7geMpAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIbJaAiHezxkM1BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQmBAQ8U7geIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbJSDi3azxUA0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQmBES8EzieIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGYJiHg3azxUQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQkBEe8EjqcIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwWQIi3s0aD9UQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgQkDEO4HjKQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGyWgIh3s8ZDNQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgQEPFO4HiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECmyUg4t2s8VANAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEJgREvBM4niJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMBmCYh4N2s8VEOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEJARHvBI6nCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsFkCIt7NGg/VECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYEJAxDuB4ykCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsloCId7PGQzUECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYEBDxTuB4igABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApslIOLdrPFQDQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCYERLwTOJ4iQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAZgmIeDdrPFRDgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBCQER7wSOpwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILBZAiLezRoP1RAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBCQMQ7geMpAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIbJaAiHezxkM1BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQmBAQ8U7geIoAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKbJSDi3azxUA0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQmBES8EzieIkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwGYJiHg3azxUQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQkBEe8EjqcIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwWQIi3s0aD9UQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgQkDEO4HjKQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGyWgIh3s8ZDNQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgQEPFO4HiKAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECmyUg4t2s8VANAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEJgREvBM4niJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMBmCYh4N2s8VEOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEJARHvBI6nCBAgQIAAAQIECBAgQGAVgf/zrW9+/nOf+9EdP1xlYcsQIECAAAECBHZaIJ9MvvylL+30Wq2vvIBPrVWGML9ZZC/OeFUpWJ0EdkHgAbvwGl6CAAECBAgQIECAAAECBPaOwOWXXXbphz6U7X3gL/zC77/mNcc8+cmz2/6Gc87Jg4cffvgrX/3q2Wf38iPR+8J110XgBfv2Pf0Zz9jLFAdu29954YW333571n/ueecduFfZhTUfNBuyC1ZegsCEgLekCZzRU0Wtkgyd++Zzf3DHHdmcpxx9zGvPef1ou/xYXWDlzlzmU+tm4vRPjPtPP33uh+3NLHvlqvL9jAve/va7//Efs4b9L37xvlNPXXlVFtxkAR9utzs6It7tipmfAAECBAgQIECAAAECmyXw0jPOSEFHPPKRy+RV+fL7Oy66KPOfdOJvnvmKsw7Elnzk8svbanMW5iOXXTb3rNOt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Gzd85+Fu6+Vyh1eWLuV47TV/+IOpPfXIIw+bMqV9qiBNREAEOpuATLyd3b6qnQiIgAiIgAiIgAiIgAiIgAiIgAiIQD0E5j/33HXXXeeLthERXNR33HHHyb4bQaRHIiACIiACItAdCbCp64pvfmvpa68VKo8N+LNTp04+8MDClEogAiIgAlURkIm3KpKSIwIiIAIiIAIiIAIiIAIiIAIiIAIi0GkEuFrvoYcffmPVqsyKYdzdb9Ik+etkwlGkCIiACIiACHQGAbx1f3r//XYvQ7pGnPYxbuy4w6cc7t696TSKEQEREIFmEJCJtxlUJVMEREAEREAEREAEREAEREAEREAERKBzCNjJzAt/tdCrNHKXkQO2HfBXQ4d5jAIiIAIiIAIiIAKdTcBOZl67dp1Vc/DgHfpvs42O8ejsRlftRKCdCcjE286tI91EQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREYDMC79vsl36IgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MQGZeNu4caSaCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACGxOQCbezXnolwiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAi0MYH3t7FuUk0EREAEREAEREAEREAEREAEREAEREAEREAEShF4/NFHSde3b99dR48ulaG7JWpZBf/r5SUrfr0CPMN3Hr7V1h/ubpykb/cmsHrVm4tfWEwdBmw74K+GDktUhqc3XH/DmjW/HTZsx+NPPCHxtJKfLRtolWjbtkJ8GkHDmqbl+c89d/ddd61fv37//feffOCB6QrGe0g6ffeNqaQrPjBnzoMPPtirV68jpkwJX47eQIl5Pi99+2O84XvXL1nyUr9+Hzr+hOP15mr/9kJDH8uE99x77zp09m6c+b6oQ2B3zCITb3dsNeksAiIgAiIgAiIgAiIgAiIgAiIgAj2RAMudC3+1MF3zD2+91db9+9e3PJSW1gNjWFKn1uHib3eE8J3vfhe1h2y/fftXpD7gLavgQw889MDDPwPmqSefvKdMvF00GDBXNG7CnH3XXaNGfzRtKO2iOpUqFvuudfXJkz6W1vyKb35r6WuvIcj+2ziitE4tG2jport7DOaWJx9/Yv78+dY6iepss/XWw4YO3XfSpMgUjcnnyquuWv+nP5H3hptu6t2nT/rNHu8hiUK76idD781Vq/NKHzx4B6qWsK2mEzfeFflqAqNJBuxll13qts/MeT6SPq1eW8UwYdpr6z2vvcYsMeOSS9pKvbZShi+Qp596OlRpv8n7pSfbMAHheJdOJPaf4yeMT493hvn9P5nz1NNPv7Fqlaekt4/YccePH3BAesh7Gg8g4d/v+vdn5j2z5g9/8Mhef/EXI4bvfNRnjiqsi2fp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AiLQCgJ47h528MGUhDn2kssv597EPNsPpxNzY98bq1aReJuttz7+xBPi+j0yd9N5zvtN3i+esns9ve/e+0zhPXbfvXtpLm17OAHWzUfsuCMQGMWMZUZ0JhBmAOYBZgPborHXhAmRrQxp795MmYoUARFoNgHOTl/00kuUgnt9ZMym1WD/h1x401gU04UE1Ce7EH6bF62Dmtu8gaSeCIiACIiACIiACIiACIiACIiACIhAqwlg+Fm7dt0DD/+Mgvkvf/inDhw4cIstepsqHOa8YuVKs/cQg3333PPOtUd5/63wttq8IroknjV0O7qWNfTDpkzpEh1UqAjUTeBLp55y7XeuwQ7EcJ51xx13z549oH//YcM22H3537p1a5cvX25O6hbDbdOnTJtmYf1XBESgnQn88N9+aOoddOCB7ayndBMBERCBugnIxFs3OmUUAREQAREQAREQAREQAREQAREQARHoWAK45I7cZeQ9s2ebdYf/hmYer7bd2Ffov0t6v632oIMP8uwdEHjogYesFvtMjN1D3AE1VRU6kgCuUedfeCE7MLhRmxObMfTmDXY2MXxqypTJshV1ZD9QpTqOAM73ixa/QLV4TWv7Ucc1ryokAiKwiYBMvOoKIiACIiACIiACIiACIiACIiACIiACIpBBgHMd+eMCzqefejrttvuhfv3GjB691z4TyxznyFozfoH89e69BQdBZxTWbaOo0eRJH0P9Az4hN6lu24o9XnEsQPw9MGfOokWLEm67ePD36/ehsWN3k3G3x3eTagCwecgEDdh2QDUSJSWLwPLXl3PtPU8GD94h67niaiNAd7V3vXfg2vKnUlcuMFWCIkSgRxB47zvvvNMjKqpKioAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiED3J/C+7l8F1UAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEJCJt6e0tOopAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiLQAQRk4u2ARlQVREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEegoBmXh7SkurniIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAh1AQCbeDmhEVUEEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAEREAERKCnEHh/T6mo6ikCIiACIiACIiACIiACIiACIiACIiACIiACItBMAtdcffVjTz215Qc+cPL//t+7jh7dpKJ+OmfOj++9941Vq5C/zdZbT/jrv556zDFNKitT7OpVbz76yKPP/fK5365ZY2qQ7C//4i8G9O+/3cCB++67b/PqnqmPItuWwI3XX49uI0eO3GPvvdtWSSnWcwhc/I1vLHrpJep72kkn1donn3j00fJZ/uvlJfOfm7969YZZequttt519K5/NXRYec7Msb+Y94tlr75qWRhBO+08fKutP5wn4cwzzmAqHrHjjud//et5abpj/Pznnnt+wYJ169ahPBj/auhftdvLJdRw0A477DZ2t0gzNbsJUGbgdgO7UIFmVzBT/nvfeeedzAeKFAEREAEREAEREAEREAEREAEREAEREAEREAEREIGSBP7jrrv/9c47LDFW3muvvbZkxpqSYd+98eabwyyDt9/+H/7xH8OY5oWxW9xx+x2/WDDfijCzroXX/O53v/vDHyxM9Q864MC/mXJE8zSR5G5B4JjPfQ49Pz5p0nEnnNAtFJaSHUwAu+m0M86kgnXMz7NuvXX2ffdhQ/3SKV+Km9CwBP/HPfe88tprCZJM1H9z6KGFRuLEHOtCmGzHjRkz9eipmaWbeiSe+e0rMhO4nPIBq0g8feTV02B23qf33T/H3ymuBruaPnPUUYUYPX0kQH/41reuCBMcPXVqeRNynoa7jdr1yE8fmWfR//u/+7uwxMLwR0eNKrmFi+qcf8HX1//xj5/927/9+IEHFkrumATy4u2YplRFREAEREAEREAEREAEREAEREAEREAEREAERKDLCKxd+7aXzTKrh6sNPPjQQyYQY8P22223evVv1q3f4OHUgv/hkfnThx+mIIoe/dHRe++zd9qWwLL+3LmP/mrxC1i7n3jqya985cx0mhaoqiJEQAREIEGAswcsZt8afcoxu8558EHy/vqNNxIyEz/DjT6JRxh9r77uumfmzTvltNMSj/wnO3h+8K//+sc//cljPEAkR0Q8v3Bh5hERu++5BxZoElPHqvbWLFy4MG2odn0KA3Vnx1R57TXXmrN1uhSclQsxpnNlxtz4/RsTFXz7rbcyU6Yjv3npZb7VKfGUeN6ARxx6WGZDJEpM5E3/PPHEsptjZt02yyziq958My2ng2Nk4u3gxlXVREAEREAEREAEREAEREAEREAEREAEREAERKBFBA74xIFP/ed/2sHFLO82qVRbIMZP6Ktnn9WkItJizduJonFEY8U5zz+JjDhX8Ud6lpsxSHzt7HPOmDatvF9UumjFiIAIiEAlBBYvXmxyMIjWJPB737vezK6fP+aYyJ6V0L7LVIn/5ZAhQyho5co3OdbebJbMir2vvz7TqT08oQE/4/Fjx3I+M9nfevvtZ3/xrBkUseF995/+6eKLvpFQgzkZ91bePhSUaVmsqb6W+MUlS+rI5Vnqzj5jxj/YaxRRvOmGDx/ev/+GE6qXLl3680cfNSsmGLe69daS7q2uUhhgN1KejTZMlhkO7bsJDe0bgN7CJifUbtDbGOGRt22oG9WBCTF0vEawhDK7S1gm3u7SUtJTBERABERABERABERABERABERABERABERABNqXAGvuV3z726y0brPtgJLLsnVXZqut/mfdeWvNiL3W1twPO+igkmvHoMBTbdyjj/7zDTd8e+ZMWXlrZa70IiAClRPAtxKZmEJrmp85A9k21uw1YULEYoen7933zEY+JyqnPTgxu/JqYD7E+MdZCB/bf7+EDkyz+O9aldMzLefuIv/qq7+D7RMbJ+6n6S0+w4YO5Wme82sdMFesXEmuurcT1ZedsyLMvksznXbaqSEl4PMC8iOp8VrGVB8mqKmOSPPWpGnwDC6ZHUu82YYxwyc8qhMa3nTrrV6EC79183sWPD4McJizdTkOfA7j88J0HsriKX2vvNdvnrRuF/++bqexFBYBERABERABERABERABERABERABERABERABEWhPAizp1r3o3J414sxM1tz/9lNHlrTvei1AgXGXnzf+y7+wBu3xCoiACIhAiwnMf+4588TFFFq+aD+iGXse9+BGMnJJuclP23ctl8+H/CRxQhRWW8uetu9aSl4r557796jBT0yMKJaQsPPOO1sMBsvEozp+It/02X777VqWnULtLgCqSWUz36S8hkBkKqUx1qFqrVnuvPtusmBMTdh3XY5riDEex26PLxmg+fysjkwCaTl+RPOB++9fMktaSPeNkYm3+7adNBcBERABERABERABERABERABERABERABERABEWgiAVaocQtjSb2+wz85ovmzf/u3WIhZg26ilhItAiIgAlECzy9YYM/dFBpNvulhySOaSW0uwhyT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6jvNhlO1pfJn551XzjNpXr5x8cWSVGr/mGOPMS/Pf+H1/+71YfPxV7761cJ8aTjhvFalveeXsbCMaefC0FWjGRcK+cru7VacSpDr/2zAxx5zTBiRrhdxLiPVuE79+GlaOTrbPMnyLsSFXA6GXjsI/eyzz8lOrhBpyvRDARU0y1q9Bs02cOunHp6uhNWlFRgyxNnfgtidRPt3R83vyv791WnknbcLizwu2PWoMRbuIbp5hmtEN8/4GhlT3SJRcnQTzO+G8PT2ARX0J6b8syTR031Yklonh78lc0REvYX3N99hA+8s6O4X/r7rj1fh9qKbWPjLHqLtNDvtAluefvrp0z4G4ocABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQ2OoEbrr/+7n/4B4Vx9DvfGQfjtccyVi4Lf/1v/1aSy5ct23/4rNm0rLDPPq++/rrrnv75z3V26HU//OE2S5bsvnSp9YaCng7/+Re/+NgTT6g6eI3uiScmAnF16623Wb36gB/feustt9327XXrdth227bBWF5lZTLO/NNPXn7llXrArTM2V77ylYmAVXfdZZcfXnvtc889d/+DD2ajlal137rk7HPPDc+sFW04JfXg1avjMB64//5rrr1WZoOAhn/pZZc989RTu+y6i+I3dyoof3Du5z6nsais8E484YSddk6PsrQpCNbkUQN/4a/92vIVc5uozGAgGfK7SnicdNKJiTuTHLWw8pWvkNOQDXrH296uatmC/CoAQRBMIdXY93nNaxKVQeLhC1/QvIT2k373d/d+RWrWxp6s4cRUqHYKl5erYlacd6xfr5g1X5v/akN7mEqmrrnwQgnI43vf/e540tXSGUCIU1r/7/HHdW1qYVx11VXZNawk6znnnLN+eMCpFsZpHz81O5UfO+Vj1990k2LWVfaWI48M9u1frSWN4tbh6tK/P7755u232669wLSqv/qVC758wQVhfrXM3vOf3mtGQmHiF3Jif1FVb7/tNk2Zhrzqtfttt9322bFrmjRfP3v8cS0STa5uTcnEaYX8+XnnhSk76vDDD1gqJboAACPFSURBVDrkELOjBXbPnet1owi6+k1GslAlqTvP/znrrHDX1W9B3vmud5l6KNjPC6T+9re9Vfe08v9tF9++ZF24Pfa5eBPvqsbXo+4h7etR+5vPOevsH918c9A9+aSTYkRjqgebukd9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';
        doc.addImage(logo, 'png', 0, 0, width, height);
    };
    ExportComponent.prototype.getTextWidth = function (doc, text, size) {
        return doc.getStringUnitWidth(text) * size / doc.internal.scaleFactor;
    };
    ExportComponent.prototype.centerText = function (doc, text, size, textWidth, width, x, y) {
        var offset_x = (width - textWidth) / 2;
        doc.text(text, x + offset_x, y + (size + 2), null, null, '');
    };
    ExportComponent.prototype.getRowWidth = function (doc, data, size) {
        var _this = this;
        var width = 0;
        data.forEach(function (header) { return width += (_this.getTextWidth(doc, header.text, size) + header.padding); });
        return width;
    };
    ExportComponent.prototype.createTotal = function (doc, headers, total, totalLate, x, y, rowWidth) {
        var size = 11, offset_x = 0;
        var columnWidth = 0;
        doc.setFontStyle('bold');
        for (var i = 0; i < headers.length - 2; i++) {
            var text = headers[i].text, padding = headers[i].padding;
            columnWidth += this.getTextWidth(doc, text, size) + padding;
        }
        doc.rect(x + offset_x, y, columnWidth, 20);
        var textWidth = this.getTextWidth(doc, 'TOTAL HOURS', size);
        this.centerText(doc, 'TOTAL HOURS', size, textWidth, columnWidth, x + offset_x, y);
        offset_x += columnWidth;
        columnWidth = this.getTextWidth(doc, headers[headers.length - 2].text, size) + headers[headers.length - 2].padding;
        textWidth = this.getTextWidth(doc, total, size);
        doc.rect(x + offset_x, y, columnWidth, 20);
        this.centerText(doc, totalLate, size, textWidth, columnWidth, x + offset_x, y);
        offset_x += columnWidth;
        columnWidth = this.getTextWidth(doc, headers[headers.length - 1].text, size) + headers[headers.length - 1].padding;
        textWidth = this.getTextWidth(doc, total, size);
        doc.rect(x + offset_x, y, columnWidth, 20);
        this.centerText(doc, total, size, textWidth, columnWidth, x + offset_x, y);
    };
    ExportComponent.prototype.createRow = function (doc, headers, data, x, y, rowWidth) {
        var _this = this;
        var size = 11, offset_x = 0;
        headers.forEach(function (header, index) {
            var text = header.text, padding = header.padding;
            doc.setFontStyle('bold');
            var columnWidth = _this.getTextWidth(doc, text, size) + padding;
            var textWidth = _this.getTextWidth(doc, data[index], size);
            doc.rect(x + offset_x, y, columnWidth, 20);
            doc.setFontStyle('normal');
            _this.centerText(doc, data[index], size, textWidth, columnWidth, x + offset_x, y);
            offset_x += columnWidth;
        });
    };
    ExportComponent.prototype.createHeaders = function (doc, data, y) {
        var _this = this;
        var font = 'helvetica', style = 'bold', size = 11, offset_x = 0, table_width = 0;
        // Set Font
        doc.setFont(font);
        doc.setFontStyle(style);
        doc.setFontSize(size);
        // Get Table Headers Width
        table_width = this.getRowWidth(doc, data, size);
        var x = (this.WIDTH - table_width) / 2;
        data.forEach(function (header) {
            var text = header.text, padding = header.padding;
            var textWidth = _this.getTextWidth(doc, text, size);
            doc.rect(x + offset_x, y, textWidth + padding, 20);
            _this.centerText(doc, text, size, textWidth, textWidth + padding, x + offset_x, y);
            offset_x += (textWidth + padding);
        });
        return table_width;
    };
    ExportComponent.prototype.setTitle = function (doc, text, x, y, size, alignment) {
        doc.setFont('helvetica');
        doc.setFontStyle('bold');
        doc.setFontSize(size);
        this.centerText(doc, text, size, this.getTextWidth(doc, text, size), this.WIDTH, x, y);
    };
    return ExportComponent;
}());
ExportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'export',
        template: __webpack_require__("../../../../../src/app/components/export/export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/export/export.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* DatePipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* DatePipe */]) === "function" && _a || Object])
], ExportComponent);

var _a;
//# sourceMappingURL=export.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.button#login-btn {\r\n   background-color: #a566db;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n#login-container {\r\n   position: relative;\r\n   background: #212025;\r\n   overflow: hidden;\r\n   height: 100vh;\r\n   width: 100%;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   -webkit-box-orient: vertical;\r\n   -webkit-box-direction: normal;\r\n       -ms-flex-direction: column;\r\n           flex-direction: column;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n}\r\n\r\n#login-container:before {\r\n   content: ' ';\r\n   display: block;\r\n   position: absolute;\r\n   left: 0;\r\n   top: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   z-index: 1;\r\n   opacity: 0.1;\r\n   background-image: url(" + __webpack_require__("../../../../../src/assets/images/lauren-mancke-60627.jpg") + ");\r\n   background-repeat: no-repeat;\r\n   background-position: 50% 0;\r\n   -ms-background-size: cover;\r\n   background-size: cover;\r\n}\r\n\r\n.ui.form .field>input[type=text],\r\n.ui.form .field>input[type=password] {\r\n   background: rgba(225, 225, 225, 0.7);\r\n   border-radius: 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.form .field.error>input[type=text],\r\n.ui.form .field.error>input[type=password] {\r\n   background: rgba(255, 154, 154, 0.7);\r\n   border-color: #f43636;\r\n}\r\n\r\n.ui.form input[type=text]:focus,\r\n.ui.form input[type=password]:focus {\r\n   background: rgba(225, 225, 225, 0.7);\r\n   border-radius: 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #514b4c;\r\n   font-weight: 700;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #514b4c;\r\n   font-weight: 700;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #514b4c;\r\n   font-weight: 700;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #514b4c;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #514b4c;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: red;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: red;\r\n   opacity: 1;\r\n}\r\n\r\n.ui.centered.grid {\r\n   z-index: 2;\r\n   position: relative;\r\n}\r\n\r\n.ui.image.field {\r\n   margin-bottom: 30px;\r\n}\r\n\r\n.spinner {\r\n   -webkit-animation: rotate 600ms infinite linear;\r\n           animation: rotate 600ms infinite linear;\r\n   -webkit-transform: translateZ(0px);\r\n           transform: translateZ(0px);\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n   0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n   }\r\n   100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n   }\r\n}\r\n\r\n@keyframes rotate {\r\n   0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n   }\r\n   100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-container\">\r\n   <div class=\"ui centered middle aligned grid\">\r\n      <div class=\"ui row\">\r\n         <div class=\"eleven wide mobile seven wide tablet four wide computer column\">\r\n            <div class=\"ui basic segment\">\r\n               <form class=\"ui form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                  <div class=\"ui image field\">\r\n                     <img src=\"../../../assets/images/av_landscape_white.png\">\r\n                  </div>\r\n                  <div class=\"field\" [ngClass]=\"{ 'error' : f.submitted && !username.valid }\">\r\n                     <label style=\"color: red\"><alert></alert></label>\r\n                     <input type=\"text\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\r\n                  </div>\r\n                  <div class=\"field\" [ngClass]=\"{ 'error' : f.submitted && !password.valid }\">\r\n                     <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n                  </div>\r\n                  <div class=\"ui center aligned container\">\r\n                     <button [disabled]=\"loading || f.form.invalid\" class=\"ui button\" id=\"login-btn\">login</button>\r\n                     <svg class=\"spinner\" xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" *ngIf=\"loading\">\r\n                        <defs>\r\n                           <radialGradient id=\"a\" cx=\"100%\" r=\"74.064%\" fx=\"100%\" fy=\"50%\">\r\n                              <stop stop-color=\"#FFFFFF\" offset=\"0%\" />\r\n                              <stop stop-color=\"#FFFFFF\" stop-opacity=\".4\" offset=\"100%\" />\r\n                           </radialGradient>\r\n                        </defs>\r\n                        <path fill=\"url(#a)\" fill-opacity=\".8\" fill-rule=\"evenodd\" d=\"M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z\"\r\n                        />\r\n                     </svg>\r\n                  </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

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
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (response) {
            var user = response.data.user;
            if (!user.isAdmin) {
                console.log("Welcome User!");
                _this.router.navigate(['/']);
            }
            else {
                console.log("Hello Admin!");
                _this.router.navigate(['/admin']);
            }
            _this.loading = false;
            _this.storeSession(response.data);
        }, function (err) {
            _this.alertService.error(err.json().message);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.storeSession = function (data) {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        localStorage.setItem('x-access-token', data.token);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#current-user {\r\n   margin-left: 5px;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.inverted.top.borderless.fluid.menu {\r\n   border-radius: 0px;\r\n}\r\n\r\n.hamburger.item {\r\n   padding: 0px;\r\n}\r\n\r\n.hamburger.item>a {\r\n   height: 100%;\r\n   padding: 20px;\r\n}\r\n\r\n.right.item {\r\n   padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted top borderless fluid fixed menu\">\n   <div class=\"ui container\">\n      <div class=\"hamburger item\">\n         <a class=\"launch icon item sidebar-toggle screen tablet only\">\n        <i class=\"sidebar icon\"></i>\n      </a>\n         <a class=\"launch icon item sidebar-toggle screen mobile only\">\n        <i class=\"sidebar icon\"></i>\n      </a>\n      </div>\n      <div class=\"right item\">\n         <div class=\"ui dropdown item\">\n            <img class=\"ui avatar image\" src=\"{{user.imgUrl}}\">\n            <span id=\"current-user\">Hi, {{user.firstName}}!</span>\n            <i class=\"dropdown icon\"></i>\n            <div class=\"menu\">\n               <a class=\"item\" routerLink=\"/profile\" *ngIf=\"!user.isAdmin\">Profile</a>\n               <a class=\"item\" routerLink=\"/admin/profile\" *ngIf=\"user.isAdmin\">Admin Profile</a>\n               <a class=\"item\" (click)=\"logOut()\">Logout</a>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n"

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
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.ngAfterViewInit = function () { };
    NavbarComponent.prototype.logOut = function () {
        this.authenticationService.logout();
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

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n   <img src=\"../../assets/images/av_landscape_white.png\" alt=\"\">\r\n</div>\r\n<div class=\"filler item\"></div>\r\n<a class=\"item link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/admin\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe069;\"></span>\r\n  <span class=\"nav-label\">Home</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/admin/timelogs\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe081;\"></span>\r\n  <span class=\"nav-label\">Time Logs</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/admin/offsets\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe020;\"></span>\r\n  <span class=\"nav-label\">Offset Hours</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/admin/network\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe037;\"></span>\r\n  <span class=\"nav-label\">Network</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/admin/create-user\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe002;\"></span>\r\n  <span class=\"nav-label\">Add User</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/admin/view-all-users\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe001;\"></span>\r\n  <span class=\"nav-label\">View Users</span>\r\n</a>\r\n"

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
exports.push([module.i, ".ui.button {\r\n   color: #2ec4b6;\r\n   background-color: transparent;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.2rem;\r\n   padding: 20px;\r\n}\r\n\r\n.ui.disabled.button {\r\n   color: #69bcb3;\r\n   background-color: transparent;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.2rem;\r\n   padding: 20px;\r\n}\r\n\r\n.ui.table#online-user {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#online-user {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#online-user thead {\r\n   background-color: #2ec4b6;\r\n   border-radius: 17px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#online-user thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#online-user tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#online-user td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#online-user tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-in/time-in.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"online-user\">\n   <thead>\n      <tr>\n         <th>\n            Online Users\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <div class=\"ui fluid disabled button\" *ngIf=\"disabled\">Time In</div>\n      <div class=\"ui fluid button\" (click)=\"timeIn()\" *ngIf=\"!disabled\">Time In</div>\n   </tbody>\n</table>\n<table class=\"ui celled table\" id=\"online-user\">\n   <thead>\n      <tr>\n         <th>\n            Online Users\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <div class=\"ui fluid disabled button\" *ngIf=\"disabled\">Time In</div>\n      <div class=\"ui fluid button\" (click)=\"timeIn()\" *ngIf=\"!disabled\">Time In</div>\n   </tbody>\n</table>\n"

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
        this.disabled = false;
    }
    TimeInComponent.prototype.ngOnInit = function () {
    };
    TimeInComponent.prototype.timeIn = function () {
        var _this = this;
        this.disabled = true;
        var user = JSON.parse(window.localStorage.getItem('currentUser'));
        this.timelogService.timeIn(user.username).subscribe(function (response) {
            alert(response.message);
            user.status = 1;
            window.localStorage.setItem('currentUser', JSON.stringify(user));
            _this.disabled = false;
        });
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
exports.push([module.i, ".ui.button {\r\n   color: #dc354e;\r\n   background-color: transparent;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.2rem;\r\n   padding: 20px;\r\n}\r\n\r\n.ui.disabled.button {\r\n   color: #c44256;\r\n   background-color: transparent;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.2rem;\r\n   padding: 20px;\r\n}\r\n\r\n.ui.table#offline-user {\r\n   background-color: transparent;\r\n   border-color: #dc354e;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#offline-user thead {\r\n   background-color: #dc354e;\r\n   border-radius: 17px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-user thead tr th {\r\n   background-color: #dc354e;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#offline-user thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#offline-user tbody tr td {\r\n   border-color: #dc354e;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#offline-user td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#offline-user tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timelogging-panel/time-out/time-out.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled table\" id=\"offline-user\">\n   <thead>\n      <tr>\n         <th>\n            Offline Users\n         </th>\n      </tr>\n   </thead>\n   <tbody>\n      <div class=\"ui fluid disabled button\" *ngIf=\"disabled\">Time Out</div>\n      <div class=\"ui fluid button\" (click)=\"timeOut()\" *ngIf=\"!disabled\">Time Out</div>\n   </tbody>\n</table>\n"

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
        this.disabled = false;
    }
    TimeOutComponent.prototype.ngOnInit = function () {
    };
    TimeOutComponent.prototype.timeOut = function () {
        var _this = this;
        this.disabled = true;
        if (confirm('Are you sure you want to time out?') == true) {
            var user_1 = JSON.parse(window.localStorage.getItem('currentUser'));
            this.timelogService.timeOut(user_1.username).subscribe(function (response) {
                alert(response.message);
                user_1.status = 0;
                window.localStorage.setItem('currentUser', JSON.stringify(user_1));
                _this.disabled = false;
            });
        }
        else {
            alert('You pressed cancel!');
            this.disabled = false;
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

module.exports = "<div class=\"ui grid container\" id=\"content\">\r\n   <div class=\"ui row\" id=\"breadcrumb-container\">\r\n      <div class=\"ui column\">\r\n         <div class=\"ui breadcrumb\">\r\n            <a class=\"section\" routerLink=\"/\">User Dashboard</a>\r\n            <div class=\"divider\"> / </div>\r\n            <div class=\"active section\">Home</div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"ui three column stackable row\">\r\n      <!-- Online Users -->\r\n      <div class=\"column\">\r\n         <time-in *ngIf=\"checkStatus() === 0\"></time-in>\r\n         <time-out *ngIf=\"checkStatus() === 1\"></time-out>\r\n      </div>\r\n\r\n      <!-- Users on Break -->\r\n      <div class=\"column\">\r\n\r\n      </div>\r\n   </div>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n/* Table Headers */\r\n\r\n.ui.table thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n\r\n/* Inherit Default font for Remarks Tooltip*/\r\n\r\n.ui.table td.remarks.field {\r\n   font-family: inherit;\r\n}\r\n\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table td.remarks.field input {\r\n   font-family: 'Comfortaa', cursive;\r\n   font-weight: 600;\r\n}\r\n\r\n/* Highlighting for Invalid Offset*/\r\n\r\n.ui.table tr.warning {\r\n   background-color: transparent !important;\r\n}\r\n\r\n.ui.table tr.warning td {\r\n   background-color: lightcoral !important;\r\n}\r\n\r\n/* Set Radius of Last Column of Table */\r\n\r\n.ui.table tr:last-child td:first-child {\r\n   border-radius: 0px 0px 0px 17px;\r\n}\r\n\r\n.ui.table tr:last-child td:last-child {\r\n   border-radius: 0px 0px 17px 0px;\r\n}\r\n\r\n/* Link to All User Offset Timelogs*/\r\n\r\n.ui.table tr td a.nameLink {\r\n   font-weight: bolder;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n\r\n/* Remarks Field */\r\n\r\n.ui.table tr td.remarks.field input {\r\n   background-color: transparent;\r\n   text-align: center;\r\n   border: 0px;\r\n}\r\n\r\n/* Validate Icon */\r\n\r\n.ui.validate.icon.button {\r\n   background-color: #aa67da;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n   <div class=\"ui row\">\n      <div class=\"ui column\" style=\"overflow-y:auto;\">\n         <table class=\"ui celled unstackable single line table\">\n            <thead>\n               <tr>\n                  <th class=\"center aligned four wide\">Time In</th>\n                  <th class=\"center aligned four wide\">Time Out</th>\n                  <th class=\"center aligned three wide\">Total Hours</th>\n                  <th class=\"center aligned three wide\">Remarks</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr class=\"center aligned\" *ngIf=\"loading\">\n                  <td colspan=\"5\" id=\"no-data\">\n                     <content-loader></content-loader>\n                  </td>\n               </tr>\n               <tr *ngIf=\"offsets.length < 1 && !loading\">\n                  <td colspan=\"5\" class=\"center aligned\" id=\"no-data\">No Offset Hours Timelogs Yet</td>\n               </tr>\n               <tr *ngFor=\"let offset of offsets\" [ngClass]=\"{ 'warning': !offset.isValid }\">\n                  <td class=\"center aligned\">{{offset.timeIn | date: 'MMM dd, hh:mm:ss a'}}</td>\n                  <td class=\"center aligned\">\n                     <span *ngIf=\"!offset.timeOut\">--</span>\n                     <span *ngIf=\"offset.timeOut\">{{offset.timeOut | date: 'MMM dd, hh:mm:ss a'}}</span>\n                  </td>\n                  <td class=\"center aligned\">{{offset.totalHrs}}</td>\n                  <td class=\"center aligned remarks field\">\n                     <span data-tooltip=\"Click to Set Remarks\" data-inverted=\"\">\n                <input type=\"text\" *ngIf=\"offset.remarks\" value=\"{{offset.remarks}}\" maxlength=\"18\" (blur)=\"updateRemarks($event, offset._id)\" >\n                <input type=\"text\" *ngIf=\"!offset.remarks\" placeholder=\"n/a\" maxlength=\"18\" (blur)=\"updateRemarks($event, offset._id)\">\n              </span>\n                  </td>\n               </tr>\n               <tr *ngIf=\"offsets.length > 0\">\n                  <td colspan=\"2\" class=\"center aligned\">Total Valid Offsets</td>\n                  <td class=\"center aligned\">{{total}}</td>\n                  <td colspan=\"2\"></td>\n               </tr>\n            </tbody>\n         </table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOffsetsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyOffsetsTableComponent = (function () {
    function MyOffsetsTableComponent(offsetService) {
        this.offsetService = offsetService;
        this.offsets = [];
        this.loading = true;
    }
    MyOffsetsTableComponent.prototype.ngOnInit = function () { };
    MyOffsetsTableComponent.prototype.setTotal = function (total) {
        this.total = total;
    };
    MyOffsetsTableComponent.prototype.setOffsets = function (offsets) {
        this.offsets = offsets;
    };
    MyOffsetsTableComponent.prototype.setUser = function (user) {
        this.user = user;
        this.loading = false;
    };
    MyOffsetsTableComponent.prototype.setValid = function (offsetId) {
        var _this = this;
        if (confirm('Are you sure you want to set this to valid?')) {
            this.offsetService.setOffsetValid(offsetId)
                .subscribe(function (response) {
                _this.update(_this.user.username).then(function (response) {
                    _this.total = response.data.totalValidOffsetHrs;
                    _this.offsets = response.data.offsets;
                    alert('Successfully set to valid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    MyOffsetsTableComponent.prototype.setInvalid = function (offsetId) {
        var _this = this;
        if (confirm('Are you sure you want to set this to valid?')) {
            this.offsetService.setOffsetInvalid(offsetId)
                .subscribe(function (response) {
                _this.update(_this.user.username).then(function (response) {
                    _this.total = response.data.totalValidOffsetHrs;
                    _this.offsets = response.data.offsets;
                    alert('Successfully set to invalid.');
                });
            });
        }
        else {
            alert('You pressed cancel!');
        }
    };
    MyOffsetsTableComponent.prototype.update = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.offsetService.getUserOffsets(username).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    MyOffsetsTableComponent.prototype.updateRemarks = function (event, offsetId) {
        var _this = this;
        var data = {
            _id: offsetId,
            remarks: event.target.value
        };
        this.offsetService.setRemarks(data)
            .subscribe(function (response) {
            _this.update(_this.user.username).then(function (response) {
                _this.offsets = response.data.offsets;
                alert('Successfully set remarks.');
            });
        });
    };
    return MyOffsetsTableComponent;
}());
MyOffsetsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'my-offsets-table',
        template: __webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_offset_service__["a" /* OffsetService */]) === "function" && _a || Object])
], MyOffsetsTableComponent);

var _a;
//# sourceMappingURL=my-offsets-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.row#breadcrumb-container {\r\n   padding-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\" routerLink=\"/\">User Dashboard</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">My Offset Hours Monitor</div>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui  stackable row\">\n      <div class=\"column\">\n         <my-offsets-table></my-offsets-table>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/my-offsets/my-offsets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__export_export_component__ = __webpack_require__("../../../../../src/app/components/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_offsets_table_my_offsets_table_component__ = __webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets-table/my-offsets-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offset_service__ = __webpack_require__("../../../../../src/app/services/offset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOffsetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyOffsetsComponent = (function () {
    function MyOffsetsComponent(route, offsetService) {
        var _this = this;
        this.route = route;
        this.offsetService = offsetService;
        this.param = JSON.parse(window.localStorage.getItem('currentUser'));
        this.offsetService.getUserOffsets(this.param.username)
            .subscribe(function (response) {
            _this.table.setTotal(response.data.totalValidOffsetHrs);
            _this.table.setOffsets(response.data.offsets);
            _this.table.setUser(response.data.user);
        });
    }
    MyOffsetsComponent.prototype.ngOnInit = function () {
    };
    return MyOffsetsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__export_export_component__["a" /* ExportComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__export_export_component__["a" /* ExportComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__export_export_component__["a" /* ExportComponent */]) === "function" && _a || Object)
], MyOffsetsComponent.prototype, "exportBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__my_offsets_table_my_offsets_table_component__["a" /* MyOffsetsTableComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__my_offsets_table_my_offsets_table_component__["a" /* MyOffsetsTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__my_offsets_table_my_offsets_table_component__["a" /* MyOffsetsTableComponent */]) === "function" && _b || Object)
], MyOffsetsComponent.prototype, "table", void 0);
MyOffsetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-my-offsets',
        template: __webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/my-offsets/my-offsets.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_offset_service__["a" /* OffsetService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_offset_service__["a" /* OffsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_offset_service__["a" /* OffsetService */]) === "function" && _d || Object])
], MyOffsetsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=my-offsets.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.table#time-logs {\r\n   background-color: transparent;\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n   border-radius: 20px;\r\n}\r\n\r\n.ui.table#time-logs thead {\r\n   background-color: #2ec4b6;\r\n}\r\n\r\n.ui.table#time-logs thead tr th {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   letter-spacing: 0.3px;\r\n   padding: 14px 20px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:first-child {\r\n   border-radius: 17px 0px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr th:last-child {\r\n   border-radius: 0px 17px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs thead tr:first-child>th:only-child {\r\n   border-radius: 16px 16px 0px 0px;\r\n}\r\n\r\n.ui.table#time-logs tbody tr td {\r\n   border-color: #2ec4b6;\r\n   border-width: 2.5px;\r\n}\r\n\r\n.ui.table#time-logs td {\r\n   color: #38383b;\r\n   padding: 14px 20px;\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.07142857rem;\r\n   font-weight: 600;\r\n}\r\n\r\n.ui.table#time-logs tbody:last-child>td {\r\n   padding: 0px;\r\n}\r\n\r\n.ui.table td.warning,\r\n.ui.table tr.warning {\r\n   background-color: transparent !important;\r\n   color: #dc354e !important;\r\n   font-weight: bolder;\r\n}\r\n\r\n.ui.form>.fields>.label.field {\r\n   padding-right: 0px;\r\n}\r\n\r\n.ui.form>.fields>.label.field>.input.label {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n.ui.form>.fields>.three.wide.field {\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form>.fields input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid noMargin\" style=\"overflow-y:auto;white-space:nowrap;\">\r\n   <div class=\"ui one column row\">\r\n      <div class=\"column\" style=\"overflow-y:auto;\">\r\n         <table class=\"ui celled unstackable fluid single line table\" id=\"time-logs\">\r\n            <thead>\r\n               <tr>\r\n                  <th class=\"center aligned four wide\">Date</th>\r\n                  <th class=\"center aligned three wide\">Time In</th>\r\n                  <th class=\"center aligned three wide\">Time Out</th>\r\n                  <th class=\"center aligned three wide\">Late Hours</th>\r\n                  <th class=\"center aligned three wide\">Total</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr class=\"center aligned\" *ngIf=\"loading\">\r\n                  <td colspan=\"6\">\r\n                     <content-loader></content-loader>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"timelogs?.length < 1 && !loading\">\r\n                  <td class=\"center aligned\" colspan=\"6\" id=\"no-data\">No Timelogs yet</td>\r\n               </tr>\r\n               <tr *ngFor=\"let timelog of timelogs\">\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeIn != null\">{{timelog.timeIn | date }}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeIn == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeIn != null\">{{timelog.timeIn | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.timeOut == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.timeOut != null\">{{timelog.timeOut | date:'hh:mm:ss a'}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\" [ngClass]=\"{'warning': timelog != null && timelog.lateHrs != null}\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.lateHrs == null)\">--</span>\r\n                     <span *ngIf=\"timelog != null && timelog.lateHrs != null\">{{timelog.lateHrs}}</span>\r\n                  </td>\r\n                  <td class=\"center aligned\">\r\n                     <span *ngIf=\"timelog == null || (timelog != null && timelog.totalHrs == null)\">00:00:00</span>\r\n                     <span *ngIf=\"timelog != null && timelog.totalHrs != null\">{{timelog.totalHrs}}</span>\r\n                  </td>\r\n               </tr>\r\n               <tr *ngIf=\"total !== null && timelogs.length > 0\">\r\n                  <td colspan=\"3\">TOTAL</td>\r\n                  <td class=\"center aligned\">{{totalLate}}</td>\r\n                  <td class=\"center aligned\">{{total}}</td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimelogsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyTimelogsTableComponent = (function () {
    function MyTimelogsTableComponent() {
        this.timelogs = [];
        this.loading = true;
    }
    MyTimelogsTableComponent.prototype.getParam = function () {
        return this.param;
    };
    MyTimelogsTableComponent.prototype.setParam = function (param) {
        this.param = param;
    };
    MyTimelogsTableComponent.prototype.getTimelogs = function () {
        return this.timelogs;
    };
    MyTimelogsTableComponent.prototype.setTimelogs = function (timelogs) {
        this.timelogs = timelogs;
    };
    MyTimelogsTableComponent.prototype.getLoading = function () {
        return this.loading;
    };
    MyTimelogsTableComponent.prototype.setLoading = function (bool) {
        this.loading = bool;
    };
    MyTimelogsTableComponent.prototype.getTotal = function () {
        return this.total;
    };
    MyTimelogsTableComponent.prototype.setTotal = function (total) {
        this.total = total;
    };
    MyTimelogsTableComponent.prototype.getLate = function () {
        return this.totalLate;
    };
    MyTimelogsTableComponent.prototype.setLate = function (totalLate) {
        this.totalLate = totalLate;
    };
    return MyTimelogsTableComponent;
}());
MyTimelogsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-timelogs-table',
        template: __webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.css")],
    }),
    __metadata("design:paramtypes", [])
], MyTimelogsTableComponent);

//# sourceMappingURL=my-timelogs-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.export.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n}\r\n\r\n.ui.form>.fields>.label.field {\r\n   padding-right: 0px;\r\n}\r\n\r\n.ui.form>.fields>.label.field>.input.label {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#start-date .ui.fluid.button {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#start-date.ui.column {\r\n   /*padding: 0px;*/\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.seven.wide.mobile.column {\r\n   padding-right: 0px\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column {\r\n   padding-left: 0px;\r\n}\r\n\r\n#start-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n#end-date .ui.fluid.button {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   height: 40px;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n}\r\n\r\n#end-date.ui.column {\r\n   /*padding: 0px;*/\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.seven.wide.mobile.column {\r\n   padding-right: 0px\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column {\r\n   padding-left: 0px;\r\n}\r\n\r\n#end-date .ui.eight.wide.computer.eight.wide.tablet.nine.wide.mobile.column input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form>.fields>.three.wide.field {\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form>.fields input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n   text-align: center;\r\n   font-family: 'Lato';\r\n   font-weight: 900;\r\n   padding-left: 0px;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   #header-container {\r\n      padding-bottom: 0px;\r\n   }\r\n}\r\n\r\n#header>* {\r\n   display: inline;\r\n   vertical-align: middle;\r\n}\r\n\r\n#header>export {\r\n   margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid container\" id=\"content\">\r\n   <div class=\"ui row\" id=\"breadcrumb-container\">\r\n      <div class=\"ui column\">\r\n         <div class=\"ui breadcrumb\">\r\n            <a class=\"section\" routerLink=\"/\">User Dashboard</a>\r\n            <div class=\"divider\"> / </div>\r\n            <div class=\"active section\">My Timelogs</div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"ui  stackable row\">\r\n      <div class=\"column\">\r\n         <form class=\"ui form stackable grid\" [formGroup]=\"dateRange\" novalidate>\r\n            <div class=\"ui equal width row\" id=\"date-range-selectors\">\r\n               <div id=\"start-date\" class=\"ui six wide column\">\r\n                  <div class=\"ui grid\">\r\n                     <div class=\"ui row\">\r\n                        <div class=\"ui eight wide computer eight wide tablet seven wide mobile column\">\r\n                           <div class=\"ui fluid button mobile only\" (click)=\"sd.toggleCalendar()\">Start</div>\r\n                           <div class=\"ui fluid button mobile hidden\" (click)=\"sd.toggleCalendar()\">Start Date</div>\r\n                        </div>\r\n                        <div class=\"ui eight wide computer eight wide tablet nine wide mobile column\">\r\n                           <input class=\"form-control\" style=\"float:none\" placeholder=\"{{defaultStart}}\" ngx-mydatepicker name=\"startDate\" formControlName=\"startDate\"\r\n                              [options]=\"myOptions\" #sd=\"ngx-mydatepicker\" (click)=\"sd.toggleCalendar()\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <div id=\"end-date\" class=\"ui six wide column\">\r\n                  <div class=\"ui grid\">\r\n                     <div class=\"ui row\">\r\n                        <div class=\"ui eight wide computer eight wide tablet seven wide mobile column\">\r\n                           <div class=\"ui fluid button mobile only\" (click)=\"ed.toggleCalendar()\">End</div>\r\n                           <div class=\"ui fluid button mobile hidden\" (click)=\"ed.toggleCalendar()\">End Date</div>\r\n\r\n                        </div>\r\n                        <div class=\"ui eight wide computer eight wide tablet nine wide mobile column\">\r\n                           <input class=\"form-control\" style=\"float:none\" placeholder=\"{{defaultEnd}}\" ngx-mydatepicker name=\"endDate\" formControlName=\"endDate\"\r\n                              [options]=\"myOptions\" #ed=\"ngx-mydatepicker\" (click)=\"ed.toggleCalendar()\" />\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </form>\r\n         <my-timelogs-table></my-timelogs-table>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/my-timelogs/my-timelogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_timelogs_table_my_timelogs_table_component__ = __webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs-table/my-timelogs-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__export_export_component__ = __webpack_require__("../../../../../src/app/components/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__ = __webpack_require__("../../../../../src/app/services/timelog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimelogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ALL_TIMELOGS_OF_USER = 1;
var MyTimelogsComponent = (function () {
    function MyTimelogsComponent(route, timelogService, datePipe) {
        var _this = this;
        this.route = route;
        this.timelogService = timelogService;
        this.datePipe = datePipe;
        this.myOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.endDateOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.param = JSON.parse(window.localStorage.getItem('currentUser'));
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        this.dateRange = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormGroup */]({
            startDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormControl */]({ date: { year: y, month: m + 1, day: firstDay.getDate() } }),
            endDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormControl */]({ date: { year: y, month: m + 1, day: lastDay.getDate() } })
        });
        this.timelogService.getTimelogsByDateRange(this.param.username, this.datePipe.transform(firstDay, 'MMddyyyy'), this.datePipe.transform(lastDay, 'MMddyyyy'))
            .subscribe(function (response) {
            _this.table.setTimelogs(response.data.timelogs);
            _this.table.setTotal(response.data.totalHrs);
            _this.table.setLate(response.data.totalLateHrs);
            _this.table.setLoading(false);
            // this.exportBtn.data = timelogs.data;
            // this.exportBtn.user = timelogs.user;
            // this.exportBtn.type = ALL_TIMELOGS_OF_USER;
        });
        this.dateRange.valueChanges.subscribe(function (form) {
            _this.table.setLoading(true);
            _this.table.setTimelogs([]);
            _this.timelogService.getTimelogsByDateRange(_this.param.username, _this.formatDate(form.startDate.date), _this.formatDate(form.endDate.date))
                .subscribe(function (response) {
                _this.table.setTimelogs(response.data.timelogs);
                _this.table.setTotal(response.data.totalHrs);
                _this.table.setLate(response.data.totalLateHrs);
                _this.table.setLoading(false);
            });
        });
    }
    MyTimelogsComponent.prototype.getTotal = function (data) {
        var hours = 0, minutes = 0, seconds = 0;
        var hh = 0, mm = 0, ss = 0;
        data.forEach(function (timelog) {
            if (timelog.totalHrs !== null) {
                var temp = timelog.totalHrs.split(':');
                hours += parseInt(temp[0]);
                minutes += parseInt(temp[1]);
                seconds += parseInt(temp[2]);
            }
        });
        ss = seconds % 60;
        mm = (minutes % 60) + Math.floor(seconds / 60);
        hh = hours + Math.floor(minutes / 60);
        return this.padValue(hh) + ":" + this.padValue(mm) + ":" + this.padValue(ss);
    };
    MyTimelogsComponent.prototype.formatDate = function (date) {
        return "" + this.padValue(date.month) + this.padValue(date.day) + date.year;
    };
    MyTimelogsComponent.prototype.padValue = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    return MyTimelogsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */]) === "function" && _a || Object)
], MyTimelogsComponent.prototype, "exportBtn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__my_timelogs_table_my_timelogs_table_component__["a" /* MyTimelogsTableComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__my_timelogs_table_my_timelogs_table_component__["a" /* MyTimelogsTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__my_timelogs_table_my_timelogs_table_component__["a" /* MyTimelogsTableComponent */]) === "function" && _b || Object)
], MyTimelogsComponent.prototype, "table", void 0);
MyTimelogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-my-timelogs',
        template: __webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/my-timelogs/my-timelogs.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_timelog_service__["a" /* TimelogService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* DatePipe */]) === "function" && _e || Object])
], MyTimelogsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-timelogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "user-sidebar.ui.fixed.left.vertical.inverted.labeled.borderless.menu.tablet.or.lower.hidden {\r\n   height: 100vh;\r\n   background-color: #2a2830;\r\n}\r\n\r\n.content {\r\n   padding: 30px 18px;\r\n   background-color: #d9d9d9;\r\n   min-height: 100vh;\r\n   height: auto;\r\n   margin-top: 54px;\r\n}\r\n\r\n\r\n/*// Semantic UI has these classes, however they're only applicable to\r\n// grids, containers, rows and columns.\r\n// plus, there isn't any `mobile hidden`, `X hidden` class.\r\n// this snippet is using the same class names and same approach\r\n// plus a bit more but to all elements.\r\n//\r\n// see https://github.com/Semantic-Org/Semantic-UI/issues/1114*/\r\n\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n   [class*=\"mobile hidden\"],\r\n   [class*=\"tablet only\"]:not(.mobile),\r\n   [class*=\"computer only\"]:not(.mobile),\r\n   [class*=\"large screen only\"]:not(.mobile),\r\n   [class*=\"widescreen only\"]:not(.mobile),\r\n   [class*=\"or lower hidden\"] {\r\n      display: none !important;\r\n   }\r\n}\r\n\r\n\r\n/* Tablet / iPad Portrait */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n   [class*=\"mobile only\"]:not(.tablet),\r\n   [class*=\"tablet hidden\"],\r\n   [class*=\"computer only\"]:not(.tablet),\r\n   [class*=\"large screen only\"]:not(.tablet),\r\n   [class*=\"widescreen only\"]:not(.tablet),\r\n   [class*=\"or lower hidden\"]:not(.mobile) {\r\n      display: none !important;\r\n   }\r\n}\r\n\r\n\r\n/* Computer / Desktop / iPad Landscape */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n   [class*=\"mobile only\"]:not(.computer),\r\n   [class*=\"tablet only\"]:not(.computer),\r\n   [class*=\"computer hidden\"],\r\n   [class*=\"large screen only\"]:not(.computer),\r\n   [class*=\"widescreen only\"]:not(.computer),\r\n   [class*=\"or lower hidden\"]:not(.tablet):not(.mobile) {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n\r\n\r\n/* Large Monitor */\r\n\r\n@media only screen and (min-width: 1200px) and (max-width: 1919px) {\r\n   [class*=\"mobile only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"tablet only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"computer only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"large screen hidden\"],\r\n   [class*=\"widescreen only\"]:not([class*=\"large screen\"]),\r\n   [class*=\"or lower hidden\"]:not(.computer):not(.tablet):not(.mobile) {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n\r\n\r\n/* Widescreen Monitor */\r\n\r\n@media only screen and (min-width: 1920px) {\r\n   [class*=\"mobile only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"tablet only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"computer only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"large screen only\"]:not([class*=\"widescreen\"]),\r\n   [class*=\"widescreen hidden\"],\r\n   [class*=\"widescreen or lower hidden\"] {\r\n      display: none !important;\r\n   }\r\n   div#dashboard.content-container {\r\n      margin-left: 260px;\r\n      width: calc(100% - 260px);\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<user-sidebar class=\"ui visible sidebar left vertical inverted labeled borderless menu tablet or lower hidden\"></user-sidebar>\r\n<div id=\"dashboard\" class=\"content-container\">\r\n   <navbar></navbar>\r\n   <div class=\"content\">\r\n      <clock></clock>\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n</div>\r\n<user-sidebar id=\"sidebar\" class=\"ui sidebar left vertical inverted labeled borderless menu\"></user-sidebar>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDashboardComponent = (function () {
    function UserDashboardComponent(networkService, authService, userService) {
        this.networkService = networkService;
        this.authService = authService;
        this.userService = userService;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent.prototype.ngAfterViewInit = function () {
        this.checkNetwork();
        this.checkUser();
        $('.ui.dropdown').dropdown();
        $('a.sidebar-toggle').click(function () {
            $('#sidebar').sidebar('toggle');
        });
        $('#sidebar a.item.link').click(function () {
            $('#sidebar').sidebar('toggle');
        });
    };
    UserDashboardComponent.prototype.checkNetwork = function () {
        var _this = this;
        this.networkService.getIPAddress().subscribe(function (network) {
            localStorage.setItem('currentIP', network.ip); //Get Current IP Address
            _this.networkService.checkNetworkStatus(network.ip) //Check the IP Address in the Database
                .subscribe(function (response) {
                if (response.data === null) {
                    alert("Sorry but this network is not found in the database");
                    _this.authService.logout();
                }
                else if (response.data !== null && response.data.status === 0) {
                    alert("Sorry but this network is blacklisted.");
                    _this.authService.logout();
                }
            });
        });
    };
    UserDashboardComponent.prototype.checkUser = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getUser(currentUser.username).subscribe(function (response) {
            localStorage.setItem('currentUser', JSON.stringify(response.data[0]));
            if (currentUser.isSuspended) {
                alert("This account is suspended. Please contact administrator.");
                _this.authService.logout();
            }
        });
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'user-dashboard',
        template: __webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], UserDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=user-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[type=file] {\r\n   cursor: inherit;\r\n   display: block;\r\n   font-size: 999px;\r\n   filter: alpha(opacity=0);\r\n   min-height: 100%;\r\n   min-width: 100%;\r\n   opacity: 0;\r\n   position: absolute;\r\n   right: 0;\r\n   text-align: right;\r\n   top: 0;\r\n}\r\n\r\n.ui.right.floated.edit.button {\r\n   padding: 0px;\r\n   background-color: transparent;\r\n}\r\n\r\n.ui.small.image {\r\n   width: 150px;\r\n   height: 150px;\r\n   overflow: hidden;\r\n}\r\n\r\n.ui.segments {\r\n   border: 2.5px solid #2ec4b6;\r\n   border-radius: 24px 24px 20px 20px;\r\n}\r\n\r\n.ui.segments>.segment {\r\n   border-top: none;\r\n}\r\n\r\n.ui.segment#header-segment {\r\n   background-color: #2ec4b6;\r\n   color: white;\r\n   border-radius: 20px 20px 0px 0px;\r\n   border-top: none;\r\n}\r\n\r\n.ui.segment#header-segment * {\r\n   display: inline;\r\n   vertical-align: middle;\r\n}\r\n\r\n.ui.segment#header-segment h4 {\r\n   font-family: 'Comfortaa', cursive;\r\n}\r\n\r\n.ui.secondary.segment {\r\n   background-color: transparent;\r\n}\r\n\r\n.ui.secondary.segment .ui.button {\r\n   background-color: #aa67da;\r\n   color: white;\r\n   margin-top: 2px;\r\n}\r\n\r\n.ui.secondary.segment .ui.fluid.save.button {\r\n   background-color: #894bb6;\r\n   color: white;\r\n   margin-top: 2px;\r\n}\r\n\r\n.fields {\r\n   margin-bottom: 0px !important;\r\n}\r\n\r\n.ui.form .field .ui.labeled.input .ui.label {\r\n   background-color: #2ec4b6;\r\n   border-radius: 20px 0px 0px 20px;\r\n   color: white;\r\n   line-height: 40px;\r\n   padding: 0px 20px;\r\n   font-family: 'Comfortaa';\r\n   font-size: 1.03142857rem;\r\n   font-weight: 900;\r\n   text-align: center;\r\n}\r\n\r\n.ui.form .field .ui.input input {\r\n   background-color: transparent;\r\n   border-radius: 0px 20px 20px 0px;\r\n   border: 2px solid #2ec4b6;\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form .fields>.field {\r\n   padding-bottom: 10px;\r\n}\r\n\r\n.ui.form .fields>.field:last-child {\r\n   padding-bottom: 0px;\r\n}\r\n\r\n.ui.form input::-webkit-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input:-ms-input-placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n.ui.form input::placeholder {\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   /* Chrome */\r\n   color: #2ec4b6;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n   /* IE 10+ */\r\n   color: #2ec4b6;\r\n}\r\n\r\n::-moz-placeholder {\r\n   /* Firefox 19+ */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n:-moz-placeholder {\r\n   /* Firefox 4 - 18 */\r\n   color: #2ec4b6;\r\n   opacity: 1;\r\n}\r\n\r\n.ui.dimmer {\r\n   cursor: pointer;\r\n   cursor: hand;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n   .ui.grid>.stackable.stackable.row>.column#profile-pic,\r\n   .ui.stackable.grid>.column.grid>.column#profile-pic,\r\n   .ui.stackable.grid>.column.row>.column#profile-pic,\r\n   .ui.stackable.grid>.column:not(.row)#profile-pic,\r\n   .ui.stackable.grid>.row>.column#profile-pic,\r\n   .ui.stackable.grid>.row>.wide.column#profile-pic,\r\n   .ui.stackable.grid>.wide.column#profile-pic {\r\n      padding-top: 0px !important;\r\n   }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable grid container\">\n   <div class=\"ui row\" id=\"breadcrumb-container\">\n      <div class=\"ui column\">\n         <div class=\"ui breadcrumb\">\n            <a class=\"section\">Settings</a>\n            <div class=\"divider\"> / </div>\n            <div class=\"active section\">Profile</div>\n         </div>\n      </div>\n   </div>\n   <div class=\"ui centered row\">\n      <div class=\"ui seven wide column\" id=\"profile-pic\">\n         <div class=\"ui segments\">\n            <div class=\"ui segment\" id=\"header-segment\">\n               <h4>User Profile</h4>\n            </div>\n            <div class=\"ui center aligned padded secondary segment\">\n               <div class=\"ui grid\">\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <div class=\"ui circular small upload image\" *ngIf=\"allowEditing == true\">\n                           <div class=\"ui dimmer\">\n                              <div class=\"content\">\n                                 <div class=\"center\">\n                                    Upload\n                                    <input type=\"file\" name=\"file\" (change)=\"fileEvent($event)\">\n                                 </div>\n                              </div>\n                           </div>\n                           <img src=\"{{imgUrl}}\">\n                        </div>\n                        <div class=\"ui circular small image\" *ngIf=\"allowEditing == false\">\n                           <img src=\"{{imgUrl}}\">\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <h2 class=\"ui header\">\n                           <div class=\"content\">\n                              {{userDetailsForm.controls.lastName.value || getLastName()}}, {{userDetailsForm.controls.firstName.value || getFirstName()}}\n                              <div class=\"sub header\">@{{accountDetailsForm.controls.username.value || getUsername()}}</div>\n                           </div>\n                        </h2>\n                     </div>\n                  </div>\n                  <div class=\"row\">\n                     <div class=\"column\">\n                        <div class=\"ui grid container\">\n                           <div class=\"equal width row\">\n                              <div class=\"column\">\n                                 <div class=\"ui fluid button\" (click)=\"toggleFormEditing()\" *ngIf=\"!allowEditing\">\n                                    Edit Profile\n                                 </div>\n                                 <div class=\"ui fluid save button\" (click)=\"saveChanges()\" *ngIf=\"allowEditing\">\n                                    Save Changes\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n      <div class=\"ui nine wide column\">\n         <div class=\"ui grid\">\n            <div class=\"row\">\n               <div class=\"column\">\n                  <div class=\"ui segments\">\n                     <div class=\"ui segment\" id=\"header-segment\">\n                        <h4>Account Details</h4>\n                        <a class=\"ui right floated edit button\" data-tooltip=\"Click to Unlock\" data-inverted=\"\" *ngIf=\"accountDetailsFormLock == true && accountDetailsForm.pristine && allowEditing\"\n                           (click)=\"toggleAccountDetails()\">\n              <span class=\"nav-icon\" data-icon=\"&#xe08e;\"></span>\n            </a>\n                        <a class=\"ui right floated edit button\" data-tooltip=\"Click to Lock\" data-inverted=\"\" *ngIf=\"accountDetailsFormLock == false && accountDetailsForm.pristine && allowEditing\"\n                           (click)=\"toggleAccountDetails()\">\n              <span class=\"nav-icon\" data-icon=\"&#xe08f;\"></span>\n            </a>\n                     </div>\n                     <div class=\"ui center aligned padded secondary segment\">\n                        <form class=\"ui form\" [formGroup]=\"accountDetailsForm\">\n                           <div class=\"fields\">\n                              <div class=\"eight wide field\">\n                                 <div class=\"ui labeled input\" [ngClass]=\"{'disabled': accountDetailsFormLock}\">\n                                    <div class=\"ui label\">\n                                       <span data-icon=\"&#xe005;\"></span>\n                                    </div>\n                                    <input type=\"text\" placeholder=\"{{getUsername()}}\" formControlName=\"username\">\n                                 </div>\n                              </div>\n                              <div class=\"eight wide field\">\n                                 <div class=\"ui labeled input\" [ngClass]=\"{'disabled': accountDetailsFormLock}\">\n                                    <div class=\"ui label\">\n                                       <span data-icon=\"&#xe08e;\"></span>\n                                    </div>\n                                    <input type=\"password\" placeholder=\"********\" formControlName=\"password\">\n                                 </div>\n                              </div>\n                           </div>\n                        </form>\n                     </div>\n                  </div>\n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"column\">\n                  <div class=\"ui segments\">\n                     <div class=\"ui segment\" id=\"header-segment\">\n                        <h4>User Details</h4>\n                     </div>\n                     <div class=\"ui padded secondary segment\">\n                        <form class=\"ui form\" [formGroup]=\"userDetailsForm\">\n                           <div class=\"sixteen wide field\">\n                              <div class=\"ui labeled input\" [ngClass]=\"{'disabled': !allowEditing}\">\n                                 <div class=\"ui label\">\n                                    First Name\n                                 </div>\n                                 <input type=\"text\" placeholder=\"First Name\" formControlName=\"firstName\">\n                              </div>\n                           </div>\n                           <div class=\"sixteen wide field\">\n                              <div class=\"ui labeled input\" [ngClass]=\"{'disabled': !allowEditing}\">\n                                 <div class=\"ui label\">\n                                    Last Name\n                                 </div>\n                                 <input type=\"text\" placeholder=\"Last Name\" formControlName=\"lastName\">\n                              </div>\n                           </div>\n                           <div class=\"fields\">\n                              <div class=\"eight wide field\">\n                                 <div class=\"ui labeled input\" [ngClass]=\"{'disabled': !allowEditing}\">\n                                    <div class=\"ui label\">\n                                       <span data-icon=\"&#xe047;\"></span>\n                                    </div>\n                                    <input type=\"text\" placeholder=\"Contact Number\" formControlName=\"contactNumber\">\n                                 </div>\n                              </div>\n                              <div class=\"eight wide field\">\n                                 <div class=\"ui labeled input\" [ngClass]=\"{'disabled': !allowEditing}\">\n                                    <div class=\"ui label\">\n                                       <span data-icon=\"&#xe086;\"></span>\n                                    </div>\n                                    <input type=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\n                                 </div>\n                              </div>\n                           </div>\n                        </form>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.imgUrl = this.currentUser.imgUrl;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.accountDetailsFormLock = true;
        this.accountDetailsForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]),
            imgUrl: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](null, []),
        });
        this.allowEditing = false;
        this.userDetailsForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](this.currentUser.firstName, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](this.currentUser.lastName, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](this.currentUser.email, [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern("[^ @]*@[^ @]*"),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
            ]),
            contactNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](this.currentUser.contactNumber, []),
        });
    };
    UserProfileComponent.prototype.ngAfterViewChecked = function () {
        $('.upload.image')
            .dimmer({
            on: 'hover'
        });
    };
    UserProfileComponent.prototype.toggleAccountDetails = function () {
        this.accountDetailsFormLock = this.accountDetailsFormLock === true ? false : true;
    };
    UserProfileComponent.prototype.toggleFormEditing = function () {
        this.allowEditing = true;
    };
    UserProfileComponent.prototype.saveChanges = function () {
        var _this = this;
        var data = {};
        data.username = this.currentUser.username;
        data.firstName = this.userDetailsForm.controls.firstName.value;
        data.lastName = this.userDetailsForm.controls.lastName.value;
        data.contactNumber = this.userDetailsForm.controls.contactNumber.value;
        data.email = this.userDetailsForm.controls.email.value;
        if (this.accountDetailsForm.controls.username.value !== '') {
            data.newUsername = this.accountDetailsForm.controls.username.value;
        }
        if (this.accountDetailsForm.controls.password.value !== '') {
            data.password = this.accountDetailsForm.controls.password.value;
        }
        if (typeof this.accountDetailsForm.controls.imgUrl !== 'undefined') {
            data.imgUrl = this.accountDetailsForm.controls.imgUrl.value;
        }
        this.userService.editUser(data).subscribe(function (response) {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            _this.allowEditing = false;
            alert(response.message);
            window.location.reload();
        });
    };
    UserProfileComponent.prototype.getFirstName = function () {
        return JSON.parse(localStorage.getItem('currentUser')).firstName;
    };
    UserProfileComponent.prototype.getLastName = function () {
        return JSON.parse(localStorage.getItem('currentUser')).lastName;
    };
    UserProfileComponent.prototype.getUsername = function () {
        return JSON.parse(localStorage.getItem('currentUser')).username;
    };
    UserProfileComponent.prototype.fileEvent = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.accountDetailsForm.controls.imgUrl.setValue(reader.result);
            _this.imgUrl = reader.result;
        }, false);
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */]) === "function" && _c || Object])
], UserProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-sidebar/user-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n   <img src=\"../../assets/images/av_landscape_white.png\" alt=\"\">\r\n</div>\r\n<div class=\"filler item\"></div>\r\n<a class=\"item link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe069;\"></span>\r\n  <span class=\"nav-label\">Home</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/my-timelogs\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe081;\"></span>\r\n  <span class=\"nav-label\">My Time Logs</span>\r\n</a>\r\n<a class=\"item link\" routerLinkActive=\"active\" routerLink=\"/my-offsets\">\r\n  <span class=\"nav-icon\" data-icon=\"&#xe020;\"></span>\r\n  <span class=\"nav-label\">My Offset Hours</span>\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-sidebar/user-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSidebarComponent = (function () {
    function UserSidebarComponent() {
    }
    return UserSidebarComponent;
}());
UserSidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-sidebar',
        template: __webpack_require__("../../../../../src/app/components/user/user-sidebar/user-sidebar.component.html"),
    })
], UserSidebarComponent);

//# sourceMappingURL=user-sidebar.component.js.map

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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
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
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* appConfig */].apiURL + "/user/login", {
            data: {
                username: username,
                password: password
            }
        })
            .map(function (response) {
            return response.json();
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.router.navigate(['/login']);
        localStorage.clear();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */]) === "function" && _b || Object])
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
    function NetworkService(http, resource, jsonp) {
        this.http = http;
        this.resource = resource;
        this.jsonp = jsonp;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({
            'x-access-token': this.resource.getResource('x-access-token')
        });
    }
    NetworkService.prototype.getNetworks = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/host", { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.getRDNS = function (ip) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/network/" + ip + "/rdns", { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.getIPAddress = function () {
        return this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
            .map(function (res) {
            return res.json();
        });
    };
    NetworkService.prototype.getClientIP = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        return this.http.get('https://tools.keycdn.com/geo.json', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.checkNetworkStatus = function (ip) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/host/status", { ip: ip }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.saveNetwork = function (network) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/add_host", { data: network }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.blacklist = function (_id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/remove_host/" + _id, {}, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.whitelist = function (_id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/set_valid/" + _id, {}, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    NetworkService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return NetworkService;
}());
NetworkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Jsonp */]) === "function" && _c || Object])
], NetworkService);

var _a, _b, _c;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/offset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OffsetService = (function () {
    function OffsetService(http, resource) {
        this.http = http;
        this.resource = resource;
    }
    OffsetService.prototype.getOffsets = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/offset/all", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    OffsetService.prototype.getUserOffsets = function (username) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/offset/user/" + username, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    OffsetService.prototype.setRemarks = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/offset/" + data._id + "/add_remarks", { data: { remarks: data.remarks } }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    OffsetService.prototype.setOffsetValid = function (_id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/offset/" + _id + "/set_valid", {}, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    OffsetService.prototype.setOffsetInvalid = function (_id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/offset/" + _id + "/set_invalid", {}, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    OffsetService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return OffsetService;
}());
OffsetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
], OffsetService);

var _a, _b;
//# sourceMappingURL=offset.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
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
    ResourceService.prototype.compareStrings = function (a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    };
    ResourceService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
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
    ResourceService.prototype.upload = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* appConfig */].CLOUDINARY_URL + "/upload", params, { headers: headers }).map(function (response) { return response.json(); });
    };
    return ResourceService;
}());
ResourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ResourceService);

var _a;
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
    TimelogService.prototype.getTimelogsByUser = function (username) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/user/" + username, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TimelogService.prototype.getTimelogsByDateRange = function (username, startDate, endDate) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/timelogs/user/" + username + "/date/" + startDate + "/" + endDate, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TimelogService.prototype.timeIn = function (username) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/time-in", { data: { username: username } }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TimelogService.prototype.timeOut = function (username) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/time-out", { data: { username: username } }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    TimelogService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return TimelogService;
}());
TimelogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({
            'x-access-token': this.resource.getResource('x-access-token')
        });
    }
    UserService.prototype.addUser = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/create", { data: user }, { headers: this.getHeaders() })
            .map(function (response) {
        });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/edit", { data: user }, { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getUser = function (username) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/" + username, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
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
    UserService.prototype.suspendUser = function (username) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/suspend-user", { username: username }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.unsuspendUser = function (username) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* appConfig */].apiURL + "/users/unsuspend-user", { username: username }, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('x-access-token', this.resource.getResource('x-access-token'));
        return headers;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resource_service__["a" /* ResourceService */]) === "function" && _b || Object])
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