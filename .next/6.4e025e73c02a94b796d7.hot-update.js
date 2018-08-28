webpackHotUpdate(6,{

/***/ "./pages/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tabs__ = __webpack_require__("./node_modules/react-tabs/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Nav__ = __webpack_require__("./components/Nav.jsx");
var _jsxFileName = "/Users/Chris/umami-agency/pages/contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PageWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "contact__PageWrapper",
  componentId: "b6g70s-0"
})(["width:100%;max-width:100vw;height:100%;min-height:100vh;box-sizing:border-box;padding-top:96px;"]);
var PageTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h1.withConfig({
  displayName: "contact__PageTitle",
  componentId: "b6g70s-1"
})(["font-size:5rem;font-weight:bold;color:#000;position:relative;text-align:center;display:flex;width:calc(100% - 32px);margin:auto;margin-bottom:24px;&::after{content:\"\";width:100%;height:8px;position:absolute;bottom:-8px;background:#000;left:0;right:0;}@media all and (max-width:880px){font-size:3.5rem;}@media all and (max-width:600px){font-size:2.5rem;}"]);
var TabsWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "contact__TabsWrapper",
  componentId: "b6g70s-2"
})(["& .contact__tabs{width:100%;padding:0 16px 16px;box-sizing:border-box;}& .contact__tabsTabList{width:100%;display:flex;flex-flow:row nowrap;padding:0;}& .contact__tabsTab{flex:1;list-style:none;display:inline-flex;text-align:center;background:#fff;color:#000;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;}& .contact__tabsTab.contact__tabsTab--selected{background:#000;color:#fff;}"]);

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageWrapper, {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Nav__["a" /* default */], {
        page: "/contact",
        theme: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageTitle, {
        className: "contact__pageTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["d" /* Tabs */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["b" /* TabList */], {
        className: "contact__tabsTabList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        selectedTabClassName: "contact__tabsTab--selected",
        className: "contact__tabsTab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        selectedTabClassName: "contact__tabsTab--selected",
        className: "contact__tabsTab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Coffee"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        selectedTabClassName: "contact__tabsTab--selected",
        className: "contact__tabsTab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "In Person"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        selectedTabClassName: "contact__tabsTab--selected",
        className: "contact__tabsTab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Phone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        selectedTabClassName: "contact__tabsTab--selected",
        className: "contact__tabsTab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Email")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Coffee"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "In Person"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Phone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "Email"))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.4e025e73c02a94b796d7.hot-update.js.map