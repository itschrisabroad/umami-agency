webpackHotUpdate(6,{

/***/ "./node_modules/react-tabs/esm/components/TabPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var DEFAULT_CLASS = 'react-tabs__tab-panel';

var TabPanel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        forceRender = _props.forceRender,
        id = _props.id,
        selected = _props.selected,
        selectedClassName = _props.selectedClassName,
        tabId = _props.tabId,
        attributes = _objectWithoutProperties(_props, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", _extends({}, attributes, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

TabPanel.defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

TabPanel.propTypes =  true ? {
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object]),
  forceRender: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  id: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  // private
  selected: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  // private
  selectedClassName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  tabId: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string // private

} : {};
TabPanel.tabsRole = 'TabPanel';

/***/ }),

/***/ "./node_modules/react-tabs/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Tabs__ = __webpack_require__("./node_modules/react-tabs/esm/components/Tabs.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TabList__ = __webpack_require__("./node_modules/react-tabs/esm/components/TabList.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_TabList__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tab__ = __webpack_require__("./node_modules/react-tabs/esm/components/Tab.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__components_Tab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TabPanel__ = __webpack_require__("./node_modules/react-tabs/esm/components/TabPanel.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__components_TabPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_uuid__ = __webpack_require__("./node_modules/react-tabs/esm/helpers/uuid.js");
/* unused harmony reexport resetIdCounter */






/***/ }),

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
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Nav__["a" /* default */], {
        page: "/contact",
        theme: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageTitle, {
        className: "contact__pageTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["d" /* Tabs */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["b" /* TabList */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Coffee"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "In Person"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Phone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["a" /* Tab */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Email")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Beer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tabs__["c" /* TabPanel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Beer")));
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
//# sourceMappingURL=6.86b618073b76e01e447f.hot-update.js.map