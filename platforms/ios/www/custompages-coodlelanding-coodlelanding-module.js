(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custompages-coodlelanding-coodlelanding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/custompages/coodlelanding/coodlelanding.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <h1>Coodlelanding</h1>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <core-user-menu-button></core-user-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"landingcol col1\">\n        <ion-button class=\"gridbutton\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Wegbeschreibung</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"archive-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col2\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/messages/group-conversations']\" routerDirection=\"back\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Nachrichten</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"landingcol col3\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/notifications/private/root']\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Datein</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col4\">\n        <ion-button class=\"gridbutton\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Kontakt</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"person-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"landingcol col5\">\n        <ion-button class=\"gridbutton\" [routerLink]=\"['/main/more/calendar/index']\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Kalender</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"calendar-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"landingcol col6\">\n        <ion-button class=\"gridbutton\" router-link=\"/calendar\">\n          <ion-grid>\n            <ion-row>\n              <ion-label>Platzhalter</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-icon name=\"reorder-four-outline\"></ion-icon>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".landingcol {\n  height: 200px;\n  margin: 10px;\n  overflow: auto;\n}\n\n.col1 {\n  background: #264653;\n}\n\n.col2 {\n  background: #2A9D8F;\n}\n\n.col3 {\n  background: #E9C46A;\n}\n\n.col4 {\n  background: #F4A261;\n}\n\n.col5 {\n  background: #E76F51;\n}\n\n.col6 {\n  background: #e75151;\n}\n\n.gridbutton {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  --background: transparent;\n  margin: 0;\n}\n\nion-icon {\n  font-size: 2em;\n}\n\nion-row {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\nion-label {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jdXN0b21wYWdlcy9jb29kbGVsYW5kaW5nL2Nvb2RsZWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0osV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQ0E7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2N1c3RvbXBhZ2VzL2Nvb2RsZWxhbmRpbmcvY29vZGxlbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZ2NvbCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb2wxIHtcbiAgYmFja2dyb3VuZDogIzI2NDY1Mztcbn1cblxuLmNvbDIge1xuICBiYWNrZ3JvdW5kOiAjMkE5RDhGO1xufVxuXG4uY29sMyB7XG4gICAgYmFja2dyb3VuZDogI0U5QzQ2QVxufVxuXG4uY29sNCB7XG4gICAgYmFja2dyb3VuZDogI0Y0QTI2MTtcbiAgfVxuXG4uY29sNSB7XG4gIGJhY2tncm91bmQ6ICNFNzZGNTE7XG59XG5cbi5jb2w2IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTc1MTUxO1xufVxuXG4uZ3JpZGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5tYXJnaW46IDA7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuaW9uLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cbiJdfQ== */");

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
    }
    ngOnInit() {
    }
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