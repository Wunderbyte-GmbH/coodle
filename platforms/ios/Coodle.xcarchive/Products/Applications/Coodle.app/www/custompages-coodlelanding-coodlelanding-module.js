(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custompages-coodlelanding-coodlelanding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h1>{{'addon.local_coodle.landingpage' | translate}}</h1>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <core-user-menu-button></core-user-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isInit\">\n  <ion-grid *ngIf=\"!isAdvisor\">\n    <ion-row>\n      <ng-container *ngFor=\"let button of buttons\">\n        <ion-col [ngStyle]=\"{'background' : button.color}\" class=\"landingcol\" size=\"12\">\n          <ion-button class=\"gridbutton\" (click)=\"openHandler(button)\">\n            <ion-icon slot=\"start\" name=\"{{button.icon}}\"></ion-icon>\n            <!-- <ion-grid class=\"innergrid\"> -->\n            <!-- <ion-row>\n                <ion-col> -->\n            <ion-label>{{button.title | translate}}</ion-label>\n            <!-- </ion-col>\n              </ion-row> -->\n            <!-- <ion-row>\n                <ion-icon name=\"{{button.icon}}\"></ion-icon>\n              </ion-row> -->\n            <!-- </ion-grid> -->\n          </ion-button>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"isAdvisor\" class=\"advisorgrid\">\n    <ion-row>\n      <ng-container *ngFor=\"let button of advisorButtons\">\n        <ion-col [ngStyle]=\"{'background' : button.color}\" class=\"landingcol\" size=\"12\">\n          <ion-button class=\"gridbutton\" (click)=\"openHandler(button)\">\n            <ion-icon slot=\"start\" name=\"{{button.icon}}\"></ion-icon>\n            <!-- <ion-grid class=\"innergrid\"> -->\n            <!-- <ion-row>\n                <ion-col> -->\n            <ion-label>{{button.title | translate}}</ion-label>\n            <!-- </ion-col>\n              </ion-row> -->\n            <!-- <ion-row>\n                <ion-icon name=\"{{button.icon}}\"></ion-icon>\n              </ion-row> -->\n            <!-- </ion-grid> -->\n          </ion-button>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/custompages/coodlelanding/coodlelanding-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/custompages/coodlelanding/coodlelanding-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CoodlelandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoodlelandingPageRoutingModule", function() { return CoodlelandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coodlelanding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coodlelanding.page */ "./src/custompages/coodlelanding/coodlelanding.page.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");

// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




const routes = [
    {
        path: '',
        component: _coodlelanding_page__WEBPACK_IMPORTED_MODULE_3__["CoodlelandingPage"],
        children: [
            {
                path: 'dok1',
                redirectTo: '/main/more/siteplugins/content/local_coodle/view_files2/0',
            },
        ],
    },
];
/**
 *
 */
function buildRoutes(injector) {
    return [
        {
            path: '',
            component: _coodlelanding_page__WEBPACK_IMPORTED_MODULE_3__["CoodlelandingPage"],
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_4__["buildTabMainRoutes"])(injector, {
            redirectTo: 'list',
            pathMatch: 'full',
        }),
    ];
}
let CoodlelandingPageRoutingModule = class CoodlelandingPageRoutingModule {
};
CoodlelandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], CoodlelandingPageRoutingModule);



/***/ }),

/***/ "./src/custompages/coodlelanding/coodlelanding.module.ts":
/*!***************************************************************!*\
  !*** ./src/custompages/coodlelanding/coodlelanding.module.ts ***!
  \***************************************************************/
/*! exports provided: CoodlelandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoodlelandingPageModule", function() { return CoodlelandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _coodlelanding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coodlelanding-routing.module */ "./src/custompages/coodlelanding/coodlelanding-routing.module.ts");
/* harmony import */ var _coodlelanding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coodlelanding.page */ "./src/custompages/coodlelanding/coodlelanding.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");

// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.









let CoodlelandingPageModule = class CoodlelandingPageModule {
};
CoodlelandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _core_shared_module__WEBPACK_IMPORTED_MODULE_9__["CoreSharedModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuComponentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coodlelanding_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoodlelandingPageRoutingModule"],
        ],
        declarations: [_coodlelanding_page__WEBPACK_IMPORTED_MODULE_6__["CoodlelandingPage"]],
    })
], CoodlelandingPageModule);



/***/ }),

/***/ "./src/custompages/coodlelanding/coodlelanding.page.scss":
/*!***************************************************************!*\
  !*** ./src/custompages/coodlelanding/coodlelanding.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landingcol {\n  height: 14vh;\n  margin: 10px;\n  overflow: auto;\n}\n\n.gridbutton {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  --background: transparent;\n  margin: 0;\n}\n\nion-icon {\n  font-size: 1.9em;\n}\n\nion-row {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\nion-label {\n  font-size: 4.7vw;\n  white-space: normal;\n  line-height: initial;\n}\n\nion-grid {\n  overflow: visible;\n}\n\n.advisorgrid {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.innergrid {\n  display: flex;\n  justify-content: space-around;\n  /* align-items: flex-end; */\n  flex-direction: column;\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jdXN0b21wYWdlcy9jb29kbGVsYW5kaW5nL2Nvb2RsZWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBMEJBO0VBQ0ksWUFBQTtFQUNKLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQXZCQTs7QUEwQkE7RUFDSSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTBCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQXZCSjs7QUEyQkE7RUFDRSxpQkFBQTtBQXhCRjs7QUE0QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBekJKOztBQTRCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBekJKIiwiZmlsZSI6InNyYy9jdXN0b21wYWdlcy9jb29kbGVsYW5kaW5nL2Nvb2RsZWxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmdjb2wge1xuICAgIGhlaWdodDogMTR2aDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vIC5jb2wxIHtcbi8vICAgYmFja2dyb3VuZDogIzI2NDY1Mztcbi8vIH1cblxuLy8gLmNvbDIge1xuLy8gICBiYWNrZ3JvdW5kOiAjMkE5RDhGO1xuLy8gfVxuXG4vLyAuY29sMyB7XG4vLyAgICAgYmFja2dyb3VuZDogI0U5QzQ2QVxuLy8gfVxuXG4vLyAuY29sNCB7XG4vLyAgICAgYmFja2dyb3VuZDogI0Y0QTI2MTtcbi8vICAgfVxuXG4vLyAuY29sNSB7XG4vLyAgIGJhY2tncm91bmQ6ICNFNzZGNTE7XG4vLyB9XG5cbi8vIC5jb2w2IHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTc1MTUxO1xuLy8gfVxuXG4uZ3JpZGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5tYXJnaW46IDA7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuOWVtO1xufVxuXG5pb24tcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogNC43dnc7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAvLyBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuaW9uLWdyaWQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcblxufVxuXG4uYWR2aXNvcmdyaWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbm5lcmdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/custompages/coodlelanding/coodlelanding.page.ts":
/*!*************************************************************!*\
  !*** ./src/custompages/coodlelanding/coodlelanding.page.ts ***!
  \*************************************************************/
/*! exports provided: CoodlelandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoodlelandingPage", function() { return CoodlelandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_mainmenu_services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/services/mainmenu-delegate */ "./src/core/features/mainmenu/services/mainmenu-delegate.ts");
/* harmony import */ var _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");

// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.







let CoodlelandingPage = class CoodlelandingPage {
    constructor(router) {
        this.router = router;
        this.isAdvisor = false;
        this.isInit = false;
        this.buttons = [
            //! TODOS
            { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
                url: 'siteplugins/content/local_coodle/view_todos/0', color: 'rgb(238, 58, 47)' },
            //! WEGE
            { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
                url: 'siteplugins/content/local_coodle/view_address/0',
                color: 'rgb(163, 96, 239)' },
            //! Beratung
            { title: 'addon.local_coodle.dok3', icon: 'people-outline',
                url: 'siteplugins/content/local_coodle/view_files3/0', color: 'rgb(33, 181, 98)' },
            // { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
            //! Dokumente
            { title: 'addon.local_coodle.dok1', icon: 'document-text-outline',
                url: 'siteplugins/content/local_coodle/view_files1/0', color: 'rgb(94, 160, 242)' },
            //! Info
            { title: 'addon.local_coodle.viewinfo', icon: 'globe-outline',
                url: 'siteplugins/content/local_coodle/view_info/0', color: 'rgb(251, 135, 66)' },
        ];
        this.advisorButtons = [
            //! TODOS
            { title: 'addon.local_coodle.viewtodos', icon: 'checkbox-outline',
                url: 'siteplugins/content/local_coodle/view_todos/0', color: 'rgb(238, 58, 47)' },
            //! WEGE
            { title: 'addon.local_coodle.viewaddress', icon: 'trail-sign-outline',
                url: 'siteplugins/content/local_coodle/view_address/0',
                color: 'rgb(163, 96, 239)' },
            //! Beratung
            { title: 'addon.local_coodle.dok3', icon: 'people-outline',
                url: 'siteplugins/content/local_coodle/view_files3/0', color: 'rgb(33, 181, 98)' },
        ];
    }
    ngOnInit() {
        // Load the handlers.
        const site = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSite().then((site) => {
            console.warn('site', site);
        });
        // const user = CoreUser.setUserPreference('isCoodleAdmin', 'true');
        const usersetting = _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__["CoreUser"].getUserPreference('coodle_settings').then((setting) => {
            console.warn('setting', setting);
            if (setting) {
                const settings = JSON.parse(setting);
                if (settings.isadvisor === true) {
                    this.isAdvisor = true;
                }
            }
            this.isInit = true;
        });
        // const userPref = CoreUser.get
        this.subscription = _features_mainmenu_services_mainmenu_delegate__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuDelegate"].getHandlersObservable().subscribe((handlers) => {
            this.allHandlers = handlers;
            console.log('allHandlersCoodle', this.allHandlers);
            // this.initHandlers();
        });
        this.initHandlers();
    }
    initHandlers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // CoreNavigator.navigateToSitePath('siteplugins/content/local_coodle/view_files1/0', { params });
            this.customItems = yield _features_mainmenu_services_mainmenu__WEBPACK_IMPORTED_MODULE_7__["CoreMainMenu"].getCustomMenuItems();
            console.log('custom Items', this.customItems);
        });
    }
    openHandler(handlerClicked) {
        var _a;
        const selectedHandler = (_a = this.allHandlers) === null || _a === void 0 ? void 0 : _a.filter(handler => handler.page === handlerClicked.url)[0];
        console.log('selectedHandler', selectedHandler, handlerClicked, this.allHandlers);
        if (selectedHandler) {
            const params = selectedHandler.pageParams;
            _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].navigateToSitePath(selectedHandler.page, { params });
        }
    }
};
CoodlelandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CoodlelandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coodlelanding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coodlelanding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./coodlelanding.page.scss */ "./src/custompages/coodlelanding/coodlelanding.page.scss")).default]
    })
], CoodlelandingPage);



/***/ })

}]);
//# sourceMappingURL=custompages-coodlelanding-coodlelanding-module.js.map