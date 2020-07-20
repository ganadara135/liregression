define(["@grafana/data","@grafana/ui","d3","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./MyPanel.tsx":
/*!*********************!*\
  !*** ./MyPanel.tsx ***!
  \*********************/
/*! exports provided: MyPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPanel", function() { return MyPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);



 // import { useTheme } from '@grafana/ui';



var MyPanel = function MyPanel(_a) {
  // const theme = useTheme();
  // console.log(theme.palette.blue77);
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2),
      timeseries = _b[0],
      setTimeseries = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2),
      measure = _c[0],
      setMeasure = _c[1];

  var styles = getStyles();
  console.log(styles);
  var d3Container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(60000), 2),
      selectVal = _d[0],
      setSelectVal = _d[1];

  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), 2),
      fieldKeys = _e[0],
      setFieldKeys = _e[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // 1 days equales 86,400 seconds on Epoch time(UNIX)
    // 1 hours equals 3,600 seconds
    // 10 munites equals 600 seconds
    setFieldKeys([{
      label: '1 minute',
      description: 'Forcast 1 minutes',
      value: 60000
    }, {
      label: '10 minutes',
      description: 'Forcast 10 minutes',
      value: 600000
    }, {
      label: '60 minutes',
      description: 'Forcast 60 minutes',
      value: 3600000
    }]);
  }, []); // only call this initially, one time.

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _a, _b;

    console.log('selectVal : ', selectVal);
    console.log('timeseries?.length: ', (_a = timeseries) === null || _a === void 0 ? void 0 : _a.length);

    if (d3Container.current && ((_b = timeseries) === null || _b === void 0 ? void 0 : _b.length) > 0) {
      // console.log('options: ', options);
      // console.log('data: ', data);
      // console.log('toArray(): ', data.series[0]?.fields[0].values.toArray());
      var history_1 = timeseries.map(function (unix) {
        return {
          date: unix
        };
      });
      var currentHistory = measure.map(function (mea, index) {
        return {
          date: new Date(history_1[index].date),
          volume: mea
        };
      });
      var forcastTime = timeseries.map(function (unix) {
        var _a, _b; // let dyDate = new Date(unix);
        // let plusTime = dyDate.valueOf() + 600000; // 1분 플러스
        // console.log('getTime(): ', dyDate.getTime());


        var benchmark = timeseries[timeseries.length - 1]; // 최종 마지막 시간
        // let dyBenchdyDate = benchmark - dyDate.getTime();
        // // console.log('benchmark: ', benchmark);
        // console.log('기준시간: : ', new Date(benchmark));
        // console.log('dyDate.getTime(): ', dyDate.getTime());
        // // console.log("dyBenchdyDate: ", dyBenchdyDate)
        // console.log('차이값: ', dyBenchdyDate);
        // // let plusTime = benchmark + dyBenchdyDate + 60000;
        // console.log('체크: ', fieldKeys?.find(el => el.value === selectVal)?.value);
        // let plusTime = benchmark + dyBenchdyDate + fieldKeys?.find(el => el.value === selectVal)?.value;

        var plusTime = benchmark + ((_b = (_a = fieldKeys) === null || _a === void 0 ? void 0 : _a.find(function (el) {
          return el.value === selectVal;
        })) === null || _b === void 0 ? void 0 : _b.value);
        return {
          myDate: plusTime
        };
      }); // console.log('fotcastTime: ', forcastTime);

      var indexMeasure_1 = measure.map(function (elem, i) {
        return [i, elem];
      }); // console.log('indexMeasure: ', indexMeasure);

      var forecastResult = forcastTime.map(function (elem, i) {
        // console.log(elem.valueOf());
        var myDate = elem.myDate;
        return {
          // date: new Date(elem),
          date: new Date(myDate),
          volume: predict(indexMeasure_1, indexMeasure_1.length - 1 + i)
        };
      }); // console.log('timeseries : ', timeseries);
      // console.log('forecastResult : ', forecastResult);

      var attachedForecastResult = forecastResult.concat({
        date: new Date(timeseries[timeseries.length - 1]),
        volume: measure[measure.length - 1]
      }); // console.log('currenHistory: ', currentHistory);
      // console.log('attachedForecastResult: ', attachedForecastResult);
      // 화면 지우기
      // const svg = d3.select('svg');
      // svg.selectAll('svg > *').remove();
      // d3.selectAll('svg > g > *').remove();
      // d3.selectAll('svg > *').remove();    // 이것으로 화면 전체 grafana 의 svg 로 그려진 이미지 삭제함

      var chart = d3__WEBPACK_IMPORTED_MODULE_4__["select"]('#mychart');
      chart.select('svg > *').remove(); // 현재 선택된 캔버스에서의 svg 만 제거

      var margin = {
        top: 20,
        right: 5,
        bottom: 10,
        left: 5
      };
      var widthIn = width - margin.left - margin.right;
      var heightIn = height - margin.top - margin.bottom;
      var innerChart = chart.append('g').attr('transform', "translate(" + margin.left + " " + margin.top + ")");
      var x_1 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleTime"]().rangeRound([0, widthIn]);
      var y_1 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().rangeRound([heightIn, 0]);
      var line = d3__WEBPACK_IMPORTED_MODULE_4__["line"]().x(function (d) {
        var _a;

        return x_1((_a = d) === null || _a === void 0 ? void 0 : _a.date);
      }).y(function (d) {
        var _a;

        return y_1((_a = d) === null || _a === void 0 ? void 0 : _a.volume);
      });
      x_1.domain([d3__WEBPACK_IMPORTED_MODULE_4__["min"](currentHistory, function (d) {
        var _a;

        return d.date !== undefined ? (_a = d) === null || _a === void 0 ? void 0 : _a.date : null;
      }), d3__WEBPACK_IMPORTED_MODULE_4__["max"](attachedForecastResult, function (d) {
        var _a;

        return d.date !== undefined ? (_a = d) === null || _a === void 0 ? void 0 : _a.date : null;
      })]);
      y_1.domain([d3__WEBPACK_IMPORTED_MODULE_4__["min"](currentHistory, function (d) {
        var _a;

        return d.volume !== undefined ? (_a = d) === null || _a === void 0 ? void 0 : _a.volume : 0;
      }), d3__WEBPACK_IMPORTED_MODULE_4__["max"](currentHistory, function (d) {
        var _a;

        return d.volume !== undefined ? (_a = d) === null || _a === void 0 ? void 0 : _a.volume : 0;
      })]); // x 측 그려줌

      innerChart.append('g').attr('transform', "translate(0 " + heightIn + ")").call(d3__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](x_1)); // y측 그려줌

      innerChart.append('g').call(d3__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](y_1)).append('text').attr('fill', '#fff').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end').text('Target Value');
      innerChart.append('path').datum(currentHistory).attr('fill', 'none').attr('stroke', 'steelblue').attr('stroke-width', 4.5).attr('d', line);
      innerChart.append('path').datum(attachedForecastResult).attr('fill', 'none').attr('stroke', 'tomato').attr('stroke-dasharray', '10,7').attr('stroke-width', 5.5).attr('d', line);
    }
  }, [width, height, selectVal]);

  var onInput = function onInput(val) {
    var _a, _b;

    console.log('target value index : ', val);
    setSelectVal(val);
    setTimeseries((_a = data.series[0]) === null || _a === void 0 ? void 0 : _a.fields[0].values.toArray());
    setMeasure((_b = data.series[0]) === null || _b === void 0 ? void 0 : _b.fields[1].values.toArray());
  };

  console.log('width : ', width);
  console.log('height : ', height); // const clazz = css`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: column;
  //   background-color: yellow;
  //   text-align: left;
  // `;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    // className={clazz}
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, 'Select time interval what you want'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"] // value={fieldKeys}
  // options={myOptions}
  , {
    // value={fieldKeys}
    // options={myOptions}
    options: fieldKeys,
    placeholder: "Select time interval to forcast" // Select How much time you want to forcast
    ,
    onChange: function onChange(item) {
      return onInput(item.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    id: "mychart",
    width: width,
    height: height - 57,
    viewBox: "-" + 1 + " -" + 1 + " " + width + " " + (height + 10),
    ref: d3Container
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: 'red'
  })));
};

var predict = function predict(data, newX) {
  var round = function round(n) {
    return Math.round(n);
  }; // const round = (n: number) => Math.round(n * 1000) / 1000;


  var sum = data.reduce(function (acc, pair) {
    var x = pair[0];
    var y = pair[1];

    if (y !== null) {
      acc.x += x;
      acc.y += y;
      acc.squareX += x * x;
      acc.product += x * y;
      acc.len += 1;
    }

    return acc;
  }, {
    x: 0,
    y: 0,
    squareX: 0,
    product: 0,
    len: 0
  });
  var rise = sum.len * sum.product - sum.x * sum.y;
  var run = sum.len * sum.squareX - sum.x * sum.x;
  var gradient = run === 0 ? 0 : round(rise / run);
  var intercept = round(sum.y / sum.len - gradient * sum.x / sum.len);
  return round(gradient * newX + intercept);
};

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyPanel */ "./MyPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_MyPanel__WEBPACK_IMPORTED_MODULE_1__["MyPanel"]).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'text',
    name: 'Simple text option',
    description: 'Description of panel option',
    defaultValue: 'Default value of text input option'
  }).addBooleanSwitch({
    path: 'showSeriesCount',
    name: 'Show series counter',
    defaultValue: false
  }).addRadio({
    path: 'seriesCountSize',
    defaultValue: 'sm',
    name: 'Series counter size',
    settings: {
      options: [{
        value: 'sm',
        label: 'Small'
      }, {
        value: 'md',
        label: 'Medium'
      }, {
        value: 'lg',
        label: 'Large'
      }]
    },
    showIf: function showIf(config) {
      return config.showSeriesCount;
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map