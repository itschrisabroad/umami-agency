module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/Chris/umami-agency/components/Nav.jsx";



var NavWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "Nav__NavWrapper",
  componentId: "s1t1rhnt-0"
})(["position:fixed;top:0;right:0;left:0;width:100vw;height:96px;background:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:16px 0;"]);
var NavLinks = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ul.withConfig({
  displayName: "Nav__NavLinks",
  componentId: "s1t1rhnt-1"
})(["padding:0;margin:0;display:flex;flex-flow:row nowrap;& a{text-decoration:none;", " ", "}"], function (props) {
  return props.theme === "white" && "color: #fff;";
}, function (props) {
  return props.theme === "black" && "color: #000;";
});
var NavLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.li.withConfig({
  displayName: "Nav__NavLink",
  componentId: "s1t1rhnt-2"
})(["list-style:none;font-size:1.25rem;font-weight:normal;margin-right:16px;&:last-of-type{margin-right:0;}"]);
var NavBrand = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a.withConfig({
  displayName: "Nav__NavBrand",
  componentId: "s1t1rhnt-3"
})(["height:100%;width:72px;background-size:cover;background-position:center;margin:0 16px;cursor:pointer;", " ", ""], function (props) {
  return props.theme === "white" && "background-image: url('/static/umami-agency-inverse.png');";
}, function (props) {
  return props.theme === "black" && "background-image: url('/static/umami-agency.png');";
});

var Nav = function Nav(_ref) {
  var page = _ref.page,
      theme = _ref.theme;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLinks, {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "Services"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/friends",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Friends")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavBrand, {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLinks, {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "About"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "Contact")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Nav__ = __webpack_require__("./components/Nav.jsx");
var _jsxFileName = "/Users/Chris/umami-agency/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var IndexWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "s1wbo52z-0"
})(["width:100%;max-width:100vw;min-width:100vw;height:100%;min-height:100vh;box-sizing:border-box;"]);
var SectionScroll = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__SectionScroll",
  componentId: "s1wbo52z-1"
})(["width:100%;height:100%;max-height:100vh;overflow-y:scroll;display:flex;flex-flow:column nowrap;scroll-snap-type:y mandatory;"]);
var Section = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.section.withConfig({
  displayName: "pages__Section",
  componentId: "s1wbo52z-2"
})(["width:100vw;height:100vh;min-height:100vh;box-sizing:border-box;display:flex;align-items:", ";justify-content:", ";flex-flow:column nowrap;scroll-snap-align:start;background-image:url(", ");background-size:cover;background-position:center;padding:96px 24px;box-sizing:border-box;"], function (props) {
  return props.align;
}, function (props) {
  return props.justify;
}, function (props) {
  return props.image;
});
var Hero = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__Hero",
  componentId: "s1wbo52z-3"
})(["display:inline-flex;flex-flow:column nowrap;"]);
var HeroTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h1.withConfig({
  displayName: "pages__HeroTitle",
  componentId: "s1wbo52z-4"
})(["font-size:5rem;font-weight:bold;color:#fff;text-align:left;margin:0;margin-bottom:24px;padding:0;@media all and (max-width:880px){font-size:3.5rem;}@media all and (max-width:600px){font-size:2.5rem;}"]);
var HeroButton = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
  displayName: "pages__HeroButton",
  componentId: "s1wbo52z-5"
})(["width:100%;border:none;border-radius:0;background:#fff;font-size:2rem;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:24px 0;cursor:pointer;transition:0.4s linear all;&:hover{color:#fff;background:#000;}@media all and (max-width:880px){font-size:1.5rem;}@media all and (max-width:600px){font-size:1.25rem;}"]);
var ServicesTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h2.withConfig({
  displayName: "pages__ServicesTitle",
  componentId: "s1wbo52z-6"
})(["font-size:3rem;font-weight:bold;color:#fff;margin:0;margin-bottom:48px;position:relative;&::after{content:\"\";width:100%;height:8px;position:absolute;bottom:-8px;background:#fff;left:0;right:0;}@media all and (max-width:1000px){margin-bottom:16px;}"]);
var ServicesCards = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__ServicesCards",
  componentId: "s1wbo52z-7"
})(["width:100%;display:flex;flex-flow:row nowrap;padding:16px 48px 0;box-sizing:border-box;@media all and (max-width:1200px){padding:16px 0;}@media all and (max-width:1000px){flex-flow:column nowrap;}"]);
var ServicesCard = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.article.withConfig({
  displayName: "pages__ServicesCard",
  componentId: "s1wbo52z-8"
})(["width:calc(33vw - 96px);height:calc(33vw - 96px);display:inline-flex;flex:1;flex-flow:column nowrap;align-items:center;justify-content:center;background:#fff;margin-right:48px;box-shadow:0 2px 8px -2px rgba(0,0,0,0.32);position:relative;cursor:pointer;transition:0.4s ease-in-out all;background-image:url(", ");background-size:cover;background-position:center;padding:24px;box-sizing:border-box;@media all and (max-width:1200px){margin-right:16px;width:calc(33vw - 32px);height:calc(33vw - 32px);}@media all and (max-width:1000px){height:calc(33vh - 96px);width:50vw;margin-right:0;margin-bottom:16px;}@media all and (max-width:750px){width:100%;&:hover .servicesCard--content{opacity:1;}&:hover .servicesCard--title{opacity:0;transform:none !important;}}&:hover{box-shadow:0 2px 12px 0px rgba(0,0,0,0.48);transform:scale(1.05);}&:hover .servicesCard--content{opacity:1;}&:hover .servicesCard--title{transform:translateY(-64px);}&::last-of-type{margin-right:0;margin-bottom:0;}"], function (props) {
  return props.image;
});
var ServicesCardTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h3.withConfig({
  displayName: "pages__ServicesCardTitle",
  componentId: "s1wbo52z-9"
})(["font-size:2rem;font-weight:bold;color:#fff;margin:0;transform:translateY(0);transition:0.4s ease all;"]);
var ServicesCardContent = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p.withConfig({
  displayName: "pages__ServicesCardContent",
  componentId: "s1wbo52z-10"
})(["font-size:1rem;font-weight:normal;color:#fff;margin:0;padding:0 24px;opacity:0;text-align:left;width:100%;transition:0.4s ease all;position:absolute;box-sizing:border-box;"]);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IndexWrapper, {
        className: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "Umami Agency | Creating Tasteful Presences")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Nav__["a" /* default */], {
        page: "/",
        theme: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SectionScroll, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, {
        className: "hero",
        align: "center",
        justify: "center",
        image: "https://images.unsplash.com/photo-1520284888530-ac9a909a1b62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eee52f9814cf480701fd59930a46da35&auto=format&fit=crop&w=1650&q=80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Spend your time", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), "pouring latte art, not", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }), "pouring over reviews."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroButton, {
        className: "hero--button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "See how we can handle that")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, {
        className: "about",
        align: "center",
        justify: "center",
        image: "https://images.unsplash.com/photo-1531318994313-daaafadd83e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef372d012c328c24677cb7357e8888b6&auto=format&fit=crop&w=1568&q=80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "We\u2019re a full-service consulting agency", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }), "based in Halifax, Nova Scotia,", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }), "specializing in presence management."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, {
        className: "services",
        align: "center",
        justify: "center",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0444373dd059057834eff6e6a3e5eaa7&auto=format&fit=crop&w=800&q=60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "What we do best"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCards, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCard, {
        image: "https://images.unsplash.com/photo-1512221684154-3a1f36dac982?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d397039338e0d94b24298ba19fdb0fa4&auto=format&fit=crop&w=1650&q=80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardTitle, {
        className: "servicesCard--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "Presence Management"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardContent, {
        className: "servicesCard--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCard, {
        image: "https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2897dbd1e879eadfb722d90401aa275f&auto=format&fit=crop&w=800&q=60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardTitle, {
        className: "servicesCard--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, "Customer Retention"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardContent, {
        className: "servicesCard--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCard, {
        image: "https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4b56a65f308795dadf3d7e6062e6fce&auto=format&fit=crop&w=800&q=60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardTitle, {
        className: "servicesCard--title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, "Content Creation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServicesCardContent, {
        className: "servicesCard--content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, "Your brand is present everywhere, from your website to the minds of your customers. See how we can make that a good thing."))))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map