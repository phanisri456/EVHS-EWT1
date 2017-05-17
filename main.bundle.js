webpackJsonp([2,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Maximizing the Efficiency of a Drought-Resistant Water Tank';
        this.tap1Speed = -0.5;
        this.tap2Speed = -0.8;
        this.tap3Speed = -1.5;
        this.allTapSpeed = 0;
        this.fillSppeds = {
            "-0.5": "Movie1.mp4",
            "-0.8": "Movie2.mp4",
            "-1.3": "Movie3.mp4",
            "-1.5": "Movie4.mp4",
            "-2": "Movie5.mp4",
            "-2.3": "Movie6.mp4",
            "-2.8": "Movie7.mp4"
        };
    }
    AppComponent.prototype.tapClick = function () {
        this.allTapSpeed = 0;
        if (this.tap1Switch) {
            this.allTapSpeed = this.allTapSpeed + this.tap1Speed;
        }
        if (this.tap2Switch) {
            this.allTapSpeed = this.allTapSpeed + this.tap2Speed;
        }
        if (this.tap3Switch) {
            this.allTapSpeed = this.allTapSpeed + this.tap3Speed;
        }
        if (this.allTapSpeed === -0.5) {
            this.videoSource = "Movie1.mp4";
        }
        else if (this.allTapSpeed === -0.8) {
            this.videoSource = "Movie2.mp4";
        }
        else if (this.allTapSpeed === -1.3) {
            this.videoSource = "Movie3.mp4";
        }
        else if (this.allTapSpeed === -1.5) {
            this.videoSource = "Movie4.mp4";
        }
        else if (this.allTapSpeed === -2) {
            this.videoSource = "Movie5.mp4";
        }
        else if (this.allTapSpeed === -2.3) {
            this.videoSource = "Movie6.mp4";
        }
        else if (this.allTapSpeed === -2.8) {
            this.videoSource = "Movie7.mp4";
        }
        if (this.tap1Switch || this.tap2Switch || this.tap3Switch) {
            this.videoplayer.nativeElement.load();
            this.videoplayer.nativeElement.play();
        }
        else {
            this.videoplayer.nativeElement.pause();
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoPlayer'),
    __metadata("design:type", Object)
], AppComponent.prototype, "videoplayer", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(232),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputSwitchModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".formula-cells{\n    padding-left : 20px;\n    padding-top : 10px;\n    line-height: 30px;\n    font-size:   15pt;\n    font-family: \"Times New Roman\", Georgia, Serif;\n    width :30%;\n}\n\n.formula-std{\n    line-height: 30px;\n    font-size:   15pt;\n    font-family: \"Times New Roman\", Georgia, Serif;\n    border-style: solid;\n    border-width: medium;\n}\n\n.tap-img{\n    padding-left: 50px;\n    padding-top : 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center\">\n  {{title}}\n</h1>\n<table>\n  <tr>\n    <td class=\"formula-std\">\n      V = &#8719;&nbsp;r&nbsp;<sup>2</sup>&nbsp;h<br/>\n      <span>r doen't change with respect to time, so it is a constant.</span><br/>\n      r = 50 meters<br/>\n      V = &#8719; ( 50 ) <sup>2</sup> h <br/>\n      V = 2500 &#8719; h <br/>\n      <sup>dV</sup>&frasl;<sub>dt</sub> = 2500 &#8719; <sup>dh</sup>&frasl;<sub>dt</sub>\n    </td>\n    <td colspan=2 style=\"text-align: right;\">\n      <video width=\"320\" height=\"240\" loop #videoPlayer>\n        <source src=\"assets/images/{{videoSource}}\" type=\"video/mp4\">\n      </video>\n    </td>\n  </tr>\n  <tr>\n    <td class=\"formula-cells\" class=\"tap-img\">\n      <img *ngIf=\"! tap1Switch\" src=\"assets/images/tap1.jpg\" height=\"100\" width=\"100\">\n      <img *ngIf=\"tap1Switch\" src=\"assets/images/tap1on.gif\" height=\"100\" width=\"100\">\n    </td>\n    <td class=\"formula-cells\" class=\"tap-img\">\n      <img *ngIf=\"! tap2Switch\" src=\"assets/images/tap2.jpg\" height=\"100\" width=\"100\">\n      <img *ngIf=\"tap2Switch\" src=\"assets/images/tap2on.gif\" height=\"100\" width=\"100\">\n    </td>\n    <td class=\"formula-cells\" class=\"tap-img\">\n      <img *ngIf=\"! tap3Switch\" src=\"assets/images/tap3.jpg\" height=\"100\" width=\"100\">\n      <img *ngIf=\"tap3Switch\" src=\"assets/images/tap3on.gif\" height=\"100\" width=\"100\">\n    </td>\n  </tr>\n  <tr>\n    <td class=\"formula-cells\">\n      Bathroom Tap: \n      <p-inputSwitch [(ngModel)]=\"tap1Switch\" (click)=\"tapClick()\"></p-inputSwitch><br/>\n    </td>\n    <td class=\"formula-cells\">\n      Kitchen Tap:\n      <p-inputSwitch [(ngModel)]=\"tap2Switch\" (click)=\"tapClick()\">></p-inputSwitch>\n    </td>\n    <td class=\"formula-cells\">\n      Shower Tap:\n      <p-inputSwitch [(ngModel)]=\"tap3Switch\" (click)=\"tapClick()\">></p-inputSwitch>\n    </td>\n  </tr>\n   <tr>\n    <td class=\"formula-cells\"> \n     <div *ngIf=\"tap1Switch\">\n        Given <sup>dh</sup>&frasl;<sub>dt</sub> for the tank = <sup>{{tap1Speed}}</sup>&frasl;<sub>2500 &#8719;</sub><sup>m</sup>&frasl;<sub>s</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = <sup>( 2500 * {{tap1Speed}} * &#8719; )</sup>&frasl;<sub>(2500 * &#8719;)</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = {{tap1Speed}} <sup>m <sup>3</sup></sup>&frasl;<sub>s</sub><br/>\n      </div>\n    </td>\n    <td class=\"formula-cells\">\n      <div *ngIf=\"tap2Switch\">\n        Given <sup>dh</sup>&frasl;<sub>dt</sub> for the tank = <sup>{{tap2Speed}}</sup>&frasl;<sub>2500 &#8719;</sub><sup>m</sup>&frasl;<sub>s</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = <sup>( 2500 * {{tap2Speed}} * &#8719; )</sup>&frasl;<sub>(2500 * &#8719;)</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = {{tap2Speed}} <sup>m <sup>3</sup></sup>&frasl;<sub>s</sub><br/>\n      </div>\n    </td>\n    <td class=\"formula-cells\">\n      <div *ngIf=\"tap3Switch\">\n        Given <sup>dh</sup>&frasl;<sub>dt</sub> for the tank = <sup>{{tap3Speed}}</sup>&frasl;<sub>2500 &#8719;</sub><sup>m</sup>&frasl;<sub>s</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = <sup>( 2500 * {{tap3Speed}} * &#8719; )</sup>&frasl;<sub>(2500 * &#8719;)</sub><br/>\n        <sup>dV</sup>&frasl;<sub>dt</sub> = {{tap3Speed}} <sup>m <sup>3</sup></sup>&frasl;<sub>s</sub><br/>\n      </div>\n      </td>\n  </tr>\n\n  <tr>\n    <td>&nbsp;</td>\n    <td style=\"padding-top: 20px; font-size: 25pt;\" class=\"formula-cells\">\n     <div  *ngIf=\"allTapSpeed!=0\" style=\"text-align:center\">\n         <sup>dV</sup>&frasl;<sub>dt</sub> = {{allTapSpeed}} <sup>m <sup>3</sup></sup>&frasl;<sub>s</sub><br/>\n      </div>\n    </td>\n     <td>&nbsp;</td>\n  </tr>\n</table>"

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.bundle.js.map