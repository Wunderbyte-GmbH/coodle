(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custompages-coodlelanding-coodlelanding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h1>Coodlelanding</h1>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <core-user-menu-button></core-user-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ng-container *ngFor=\"let button of buttons\">\n        <ion-col [ngStyle]=\"{'background' : button.color}\" class=\"landingcol\" size=\"5\">\n          <ion-button class=\"gridbutton\" [routerLink]=\"button.url\" routerDirection=\"forward\">\n            <ion-grid>\n              <ion-row>\n                <ion-label>{{button.title}}</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-icon name=\"{{button.icon}}\"></ion-icon>\n              </ion-row>\n            </ion-grid>\n          </ion-button>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n\n    <!-- <ion-row>\n      <ion-col class=\"landingcol col1\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/home/siteplugins/homecontent/local_coodle/view_address']\"\n          routerDirection=\"back\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Wegbeschreibung</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"archive-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col2\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/messages/group-conversations']\" routerDirection=\"back\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Nachrichten</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"landingcol col3\">\n        <ion-button class=\"gridbutton\"\n          [routerLink]=\"['/main/more/siteplugins/content/local_coodle/view_files/0?title=plugin.local_coodle.myfiles']\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Datein</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col4\">\n        <ion-button class=\"gridbutton\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Kontakt</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"person-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"landingcol col5\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/more/calendar/index']\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Kalender</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"calendar-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col6\">\n        <ion-button class=\"gridbutton\" router-link=\"/calendar\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Platzhalter</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"reorder-four-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n");

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




const routes = [
    {
        path: '',
        component: _coodlelanding_page__WEBPACK_IMPORTED_MODULE_3__["CoodlelandingPage"]
    }
];
let CoodlelandingPageRoutingModule = class CoodlelandingPageRoutingModule {
};
CoodlelandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".landingcol {\n  height: 200px;\n  margin: 10px;\n  overflow: auto;\n}\n\n.gridbutton {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  --background: transparent;\n  margin: 0;\n}\n\nion-icon {\n  font-size: 1.5em;\n}\n\nion-row {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\nion-label {\n  font-size: 0.8em;\n}\n\nion-grid {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jdXN0b21wYWdlcy9jb29kbGVsYW5kaW5nL2Nvb2RsZWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBMEJBO0VBQ0ksWUFBQTtFQUNKLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQXZCQTs7QUEwQkE7RUFDSSxnQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTBCQTtFQUNJLGdCQUFBO0FBdkJKOztBQTBCQTtFQUNFLGlCQUFBO0FBdkJGIiwiZmlsZSI6InNyYy9jdXN0b21wYWdlcy9jb29kbGVsYW5kaW5nL2Nvb2RsZWxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmdjb2wge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vLyAuY29sMSB7XG4vLyAgIGJhY2tncm91bmQ6ICMyNjQ2NTM7XG4vLyB9XG5cbi8vIC5jb2wyIHtcbi8vICAgYmFja2dyb3VuZDogIzJBOUQ4Rjtcbi8vIH1cblxuLy8gLmNvbDMge1xuLy8gICAgIGJhY2tncm91bmQ6ICNFOUM0NkFcbi8vIH1cblxuLy8gLmNvbDQge1xuLy8gICAgIGJhY2tncm91bmQ6ICNGNEEyNjE7XG4vLyAgIH1cblxuLy8gLmNvbDUge1xuLy8gICBiYWNrZ3JvdW5kOiAjRTc2RjUxO1xuLy8gfVxuXG4vLyAuY29sNiB7XG4vLyAgICAgYmFja2dyb3VuZDogI2U3NTE1MTtcbi8vIH1cblxuLmdyaWRidXR0b24ge1xuICAgIGhlaWdodDogMTAwJTtcbndpZHRoOiAxMDAlO1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xubWFyZ2luOiAwO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW9uLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5pb24tZ3JpZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuIl19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
        this.buttons = [
            { title: 'Wegbeschreibung', icon: 'home-outline',
                url: '/main/home/siteplugins/homecontent/local_coodle/view_address',
                color: '#264653' },
            { title: 'Nachrichten', icon: 'chatbox-ellipses-outline', url: '/main/messages/group-conversations', color: '#E9C46A' },
            { title: 'Dokumente', icon: 'file-tray-full-outline',
                url: '/main/more/siteplugins/content/local_coodle/view_files1/0', color: '#2A9D8F' },
            { title: 'Bewerbungsunterlagen', icon: 'folder-outline',
                url: '/main/more/siteplugins/content/local_coodle/view_files2/0', color: '#4664ba' },
            { title: 'Beratungsinhalt', icon: 'document-outline',
                url: '/main/more/siteplugins/content/local_coodle/view_files3/0', color: '#898989' },
            { title: 'Kalender', icon: 'calendar-outline', url: '/main/more/calendar/index', color: '#e75151' },
        ];
    }
    // navigate(url: string): void{
    //     this.router.navigateByUrl('main/more/siteplugins/content/local_coodle/view_files1/0');
    //     // console.log('bin im nav');
    //     // CoreNavigator.navigateToSitePath(url);
    //     // CoreNavigator.navigateToSitePath('/main/more/siteplugins/content/local_coodle/view_files1/0?title=plugin.local_coodle.Doks');
    // }
    ngOnInit() { }
};
CoodlelandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
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