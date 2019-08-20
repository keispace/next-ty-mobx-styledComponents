webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/mobx/stores/appStore.ts":
/*!*************************************!*\
  !*** ./lib/mobx/stores/appStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CounterStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");





var _class, _descriptor, _descriptor2, _descriptor3, _temp;


var CounterStore = (_class = (_temp = function CounterStore() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CounterStore);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "number", _descriptor, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "increase", _descriptor2, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "decrease", _descriptor3, this);
}, _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "number", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "increase", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return function () {
      _this.number++;
    };
  }
}), _descriptor3 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "decrease", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.number--;
    };
  }
})), _class);


/***/ })

})
//# sourceMappingURL=_app.js.3a00e8d392b212126f38.hot-update.js.map