(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chordbox"] = factory();
	else
		root["chordbox"] = factory();
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@svgdotjs/svg.js":
/*!***********************************!*\
  !*** external "@svgdotjs/svg.js" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@svgdotjs/svg.js");

/***/ }),

/***/ "svgdom":
/*!*************************!*\
  !*** external "svgdom" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("svgdom");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/chordbox.tsx ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "@svgdotjs/svg.js");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svgdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svgdom */ "svgdom");
/* harmony import */ var svgdom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svgdom__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* eslint-disable */

var window = (0,svgdom__WEBPACK_IMPORTED_MODULE_1__.createSVGWindow)();
var document = window.document;
(0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.registerWindow)(window, document);
/* eslint-enable */

// the things a user can configure
var ChordBoxOptionsDefaults = {
  title: 'Chord',
  frets: 3,
  baseFret: 1,
  dots: [],
  dotText: function dotText() {
    return '';
  },
  tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
  guages: [46, 36, 25, 17, 13, 10]
};
var CHORDBOX_DIMENSIONS = {
  // base
  width: 285,
  height: 350,
  padding: 5,
  radius: 5,
  borderFillColor: '#000',
  fillColor: '#fff',
  // title
  titleWidth: 275,
  titleHeight: 50,
  titleFillColor: '#000',
  titleFontSize: 24,
  titleFontColor: '#fff',
  fretLabelsWidth: 50,
  fretLabelsContainerFillColor: '#fff',
  fretLabelContainerFillColor: '#fff',
  fretLabelFontSize: 16,
  fretLabelFontColor: '#000',
  stringLabelsHeight: 50,
  stringLabelsContainerFillColor: '#fff',
  stringLabelContainerFillColor: '#fff',
  stringLabelFontSize: 16,
  stringLabelFontColor: '#000',
  bodyFillColor: '#fff',
  nutContainerPadding: 15,
  nutHeight: 10,
  nutRadius: 3,
  nutFillColor: '#000',
  fretsContainerFillColor: '#fff',
  fretMarkerHeight: 3,
  fretMarkerFillColor: '#C0C0C0',
  stringFillColor: '#E48C5D',
  dotSize: 30,
  dotFontSize: 12,
  dotFillColor: '#000'
};

var ChordBox = /*#__PURE__*/function () {
  function ChordBox(chordBoxOptions) {
    _classCallCheck(this, ChordBox);

    _defineProperty(this, "chordBoxOptions", ChordBoxOptionsDefaults);

    this.renderer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)(); // assign options

    this.chordBoxOptions = _objectSpread(_objectSpread({}, this.chordBoxOptions), chordBoxOptions);
    this.validateChordBoxOptions();
    return this;
  }

  _createClass(ChordBox, [{
    key: "validateChordBoxOptions",
    value: function validateChordBoxOptions() {
      if (this.chordBoxOptions.frets < 1 || this.chordBoxOptions.frets > 6) {
        throw new Error('frets must be between 1 and 6');
      }

      if (this.chordBoxOptions.baseFret < 1 || this.chordBoxOptions.baseFret > 24) {
        throw new Error('baseFret must be between 1 and 24');
      }

      if (this.chordBoxOptions.tunings.length !== 6) {
        throw new Error('tuning must present for 6 strings only');
      }

      if (this.chordBoxOptions.guages.length !== 6) {
        throw new Error('guages must present for 6 strings only');
      }
    }
  }, {
    key: "generateChordBoxBase",
    value: function generateChordBoxBase() {
      var chordBoxBaseGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var chordBoxBaseContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.width, CHORDBOX_DIMENSIONS.height).radius(CHORDBOX_DIMENSIONS.radius).fill(CHORDBOX_DIMENSIONS.borderFillColor);
      var chordBoxBase = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding).fill(CHORDBOX_DIMENSIONS.fillColor);
      chordBoxBaseGroup.add(chordBoxBaseContainer);
      chordBoxBaseGroup.add(chordBoxBase);
      chordBoxBaseContainer.back();
      chordBoxBase.front();
      chordBoxBase.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding);
      return chordBoxBaseGroup;
    }
  }, {
    key: "generateChordBoxTitle",
    value: function generateChordBoxTitle() {
      var chordBoxTitleGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var chordBoxTitleContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.titleWidth, CHORDBOX_DIMENSIONS.titleHeight).fill(CHORDBOX_DIMENSIONS.titleFillColor);
      var ChordBoxTitle = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().plain(this.chordBoxOptions.title).attr({
        'font-size': CHORDBOX_DIMENSIONS.titleFontSize,
        'font-family': 'Arial'
      }).fill(CHORDBOX_DIMENSIONS.titleFontColor).cx(CHORDBOX_DIMENSIONS.titleWidth / 2).cy(CHORDBOX_DIMENSIONS.titleHeight / 2);
      chordBoxTitleGroup.add(chordBoxTitleContainer);
      chordBoxTitleGroup.add(ChordBoxTitle);
      chordBoxTitleContainer.back();
      ChordBoxTitle.front();
      chordBoxTitleGroup.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding);
      return chordBoxTitleGroup;
    }
  }, {
    key: "generatechordBoxFretLabels",
    value: function generatechordBoxFretLabels() {
      var _this = this;

      var chordBoxFretLabelsGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var fretLabelsHeight = CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight;
      var fretLabelHeight = fretLabelsHeight / this.chordBoxOptions.frets;
      var chordBoxFretLabelsContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.fretLabelsWidth, fretLabelsHeight).fill(CHORDBOX_DIMENSIONS.fretLabelsContainerFillColor);
      var chordBoxFretboardLabels = Array.from(Array(this.chordBoxOptions.frets)).map(function (_, fretLabelIndex) {
        var chordBoxFretLabelGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
        var chordBoxFretLabelContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.fretLabelsWidth, fretLabelHeight).fill(CHORDBOX_DIMENSIONS.fretLabelContainerFillColor);
        var chordBoxFretLabelText = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().plain((_this.chordBoxOptions.baseFret + fretLabelIndex).toString()).attr({
          'font-size': CHORDBOX_DIMENSIONS.fretLabelFontSize,
          'font-family': 'Arial'
        }).fill(CHORDBOX_DIMENSIONS.fretLabelFontColor).cx(CHORDBOX_DIMENSIONS.fretLabelsWidth / 2).cy(fretLabelHeight / 2);
        chordBoxFretLabelGroup.add(chordBoxFretLabelContainer);
        chordBoxFretLabelGroup.add(chordBoxFretLabelText);
        chordBoxFretLabelContainer.back();
        chordBoxFretLabelText.front();
        chordBoxFretLabelGroup.move(0, fretLabelIndex * fretLabelHeight);
        return chordBoxFretLabelGroup;
      });
      chordBoxFretLabelsGroup.add(chordBoxFretLabelsContainer);
      chordBoxFretboardLabels.map(function (chordBoxFretLabel) {
        chordBoxFretLabelsGroup.add(chordBoxFretLabel);
      });
      chordBoxFretLabelsContainer.back();
      chordBoxFretLabelsGroup.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
      return chordBoxFretLabelsGroup;
    }
  }, {
    key: "generatechordBoxStringLabels",
    value: function generatechordBoxStringLabels() {
      var _this2 = this;

      var chordBoxStringLabelsGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var stringLabelsWidth = CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth;
      var stringLabelWidth = stringLabelsWidth / this.chordBoxOptions.tunings.length; // string count

      var chordBoxStringLabelsContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(stringLabelsWidth, CHORDBOX_DIMENSIONS.stringLabelsHeight).fill(CHORDBOX_DIMENSIONS.stringLabelsContainerFillColor);
      var chordBoxStringboardLabels = Array.from(Array(this.chordBoxOptions.tunings.length
      /* string count */
      )).map(function (_, stringLabelIndex) {
        var chordBoxStringLabelGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
        var chordBoxStringLabelContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(stringLabelWidth, CHORDBOX_DIMENSIONS.stringLabelsHeight).fill(CHORDBOX_DIMENSIONS.stringLabelContainerFillColor);
        var chordBoxStringLabelText = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().plain(_this2.chordBoxOptions.tunings[stringLabelIndex]).attr({
          'font-size': CHORDBOX_DIMENSIONS.stringLabelFontSize,
          'font-family': 'Arial'
        }).fill(CHORDBOX_DIMENSIONS.stringLabelFontColor).cx(stringLabelWidth / 2).cy(CHORDBOX_DIMENSIONS.stringLabelsHeight / 2);
        chordBoxStringLabelGroup.add(chordBoxStringLabelContainer);
        chordBoxStringLabelGroup.add(chordBoxStringLabelText);
        chordBoxStringLabelContainer.back();
        chordBoxStringLabelText.front();
        chordBoxStringLabelGroup.move(stringLabelIndex * stringLabelWidth, 0);
        return chordBoxStringLabelGroup;
      });
      chordBoxStringLabelsGroup.add(chordBoxStringLabelsContainer);
      chordBoxStringboardLabels.map(function (chordBoxStringLabel) {
        chordBoxStringLabelsGroup.add(chordBoxStringLabel);
      });
      chordBoxStringLabelsContainer.back();
      chordBoxStringLabelsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight);
      return chordBoxStringLabelsGroup;
    }
  }, {
    key: "generateChordboxBody",
    value: function generateChordboxBody() {
      var chordBoxBodyGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var chordBoxBody = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight).fill(CHORDBOX_DIMENSIONS.bodyFillColor);
      chordBoxBodyGroup.add(chordBoxBody);
      chordBoxBodyGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
      return chordBoxBodyGroup;
    }
  }, {
    key: "generatechordBoxNut",
    value: function generatechordBoxNut() {
      var chordBoxNutGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var chordBoxNutContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth - 2 * CHORDBOX_DIMENSIONS.nutContainerPadding, CHORDBOX_DIMENSIONS.nutHeight).fill('none') // hide by default
      .radius(CHORDBOX_DIMENSIONS.nutRadius); // the nut should only be visible if baseFret === 1

      if (this.chordBoxOptions.baseFret === 1) {
        chordBoxNutContainer.fill(CHORDBOX_DIMENSIONS.nutFillColor);
      }

      chordBoxNutGroup.add(chordBoxNutContainer);
      chordBoxNutGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth + CHORDBOX_DIMENSIONS.nutContainerPadding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
      return chordBoxNutGroup;
    }
  }, {
    key: "generatechordBoxFrets",
    value: function generatechordBoxFrets() {
      var chordBoxFretsGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var fretsWidth = CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth - 2 * CHORDBOX_DIMENSIONS.nutContainerPadding;
      var fretsHeight = CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
      var fretHeight = fretsHeight / this.chordBoxOptions.frets;
      var chordBoxFretsContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(fretsWidth, fretsHeight).fill(CHORDBOX_DIMENSIONS.fretsContainerFillColor);
      var chordBoxFretMarkers = Array.from(Array(this.chordBoxOptions.frets)).map(function (_, fretMarkerIndex) {
        var fretMarker = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(fretsWidth, CHORDBOX_DIMENSIONS.fretMarkerHeight).fill(CHORDBOX_DIMENSIONS.fretMarkerFillColor);
        fretMarker.move(0, fretMarkerIndex * fretHeight);
        return fretMarker;
      });
      chordBoxFretsGroup.add(chordBoxFretsContainer);
      chordBoxFretMarkers.map(function (fretMarker) {
        chordBoxFretsGroup.add(fretMarker);
      });
      chordBoxFretsGroup.back();
      chordBoxFretsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth + CHORDBOX_DIMENSIONS.nutContainerPadding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
      return chordBoxFretsGroup;
    }
  }, {
    key: "generateChordBoxStrings",
    value: function generateChordBoxStrings() {
      var _this3 = this;

      var chordBoxStringsGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var stringsWidth = CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth;
      var stringsHeight = CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
      var stringWidth = stringsWidth / this.chordBoxOptions.tunings.length;
      var stringGuageScaleFactor = 0.125;
      var chordBoxStringsContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(stringsWidth, stringsHeight).fill('none'); // so frets show through

      var chordBoxStrings = Array.from(Array(this.chordBoxOptions.tunings.length)).map(function (_, stringIndex) {
        var stringGuage = _this3.chordBoxOptions.guages[stringIndex] * stringGuageScaleFactor;
        var string = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(stringGuage, stringsHeight).fill(CHORDBOX_DIMENSIONS.stringFillColor);
        string.move(stringIndex * stringWidth + stringWidth / 2, 0);
        return string;
      });
      chordBoxStringsGroup.add(chordBoxStringsContainer);
      chordBoxStrings.map(function (string) {
        chordBoxStringsGroup.add(string);
      });
      chordBoxStringsGroup.back();
      chordBoxStringsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
      return chordBoxStringsGroup;
    }
  }, {
    key: "generateChordBoxDots",
    value: function generateChordBoxDots() {
      var _this4 = this;

      var chordBoxDotsGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
      var dotsWidth = CHORDBOX_DIMENSIONS.width - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.fretLabelsWidth;
      var dotsHeight = CHORDBOX_DIMENSIONS.height - 2 * CHORDBOX_DIMENSIONS.padding - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
      var dotWidth = dotsWidth / this.chordBoxOptions.tunings.length;
      var dotHeight = dotsHeight / this.chordBoxOptions.frets;
      var strings = this.chordBoxOptions.tunings.length;
      var guages = this.chordBoxOptions.guages;
      var stringGuageScaleFactor = 0.125;
      var optionsDots = this.chordBoxOptions.dots;
      var chordBoxDotsContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().rect(dotsWidth, dotsHeight).fill('none'); // so dots show through

      var chordBoxDots = Array.from(optionsDots).map(function (dot) {
        var dotGroup = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().group();
        var dotContainer = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().circle(CHORDBOX_DIMENSIONS.dotSize).fill(CHORDBOX_DIMENSIONS.dotFillColor);
        dotContainer.cx((strings - dot.string) * dotWidth + dotWidth / 2 + guages[strings - dot.string] * stringGuageScaleFactor / 2).cy((dot.fret - 1) * dotHeight + dotHeight / 2); // due to our container dimensions

        if (dot.fret === 1) {
          dotContainer.cy(dotHeight / 2 + CHORDBOX_DIMENSIONS.nutHeight / (2 * _this4.chordBoxOptions.frets));
        }

        var dotText = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().plain(_this4.chordBoxOptions.dotText(dot)).attr({
          'font-size': CHORDBOX_DIMENSIONS.dotFontSize,
          'font-family': 'Arial'
        }).fill('#fff');
        dotText.cx((strings - dot.string) * dotWidth + dotWidth / 2 + guages[strings - dot.string] * stringGuageScaleFactor / 2).cy((dot.fret - 1) * dotHeight + dotHeight / 2); // due to our container dimensions

        if (dot.fret === 1) {
          dotText.cy(dotHeight / 2 + CHORDBOX_DIMENSIONS.nutHeight / (2 * _this4.chordBoxOptions.frets));
        }

        dotGroup.add(dotContainer);
        dotGroup.add(dotText);
        dotContainer.back();
        dotText.front();
        return dotGroup;
      });
      chordBoxDotsGroup.add(chordBoxDotsContainer);
      chordBoxDots.map(function (dot) {
        chordBoxDotsGroup.add(dot);
      });
      chordBoxDotsGroup.back();
      chordBoxDotsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
      return chordBoxDotsGroup;
    }
  }, {
    key: "setDots",
    value: function setDots(dots) {
      this.chordBoxOptions.dots = dots;
      this.render();
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      // always clear the renderer
      this.renderer.clear(); // build it up in layers

      this.renderer.add(this.generateChordBoxBase());
      this.renderer.add(this.generateChordBoxTitle());
      this.renderer.add(this.generatechordBoxFretLabels());
      this.renderer.add(this.generatechordBoxStringLabels()); // // build the body parts

      this.renderer.add(this.generateChordboxBody());
      this.renderer.add(this.generatechordBoxNut());
      this.renderer.add(this.generatechordBoxFrets());
      this.renderer.add(this.generateChordBoxStrings());
      this.renderer.add(this.generateChordBoxDots()); // fixes chrome rendering issue

      this.renderer.attr({
        width: CHORDBOX_DIMENSIONS.width,
        height: CHORDBOX_DIMENSIONS.height
      });
      return this;
    }
  }, {
    key: "toSVG",
    value: function toSVG() {
      return this.renderer.svg();
    }
  }, {
    key: "toSVGBase64URI",
    value: function toSVGBase64URI() {
      return "data:image/svg+xml;base64,".concat(Buffer.from(this.renderer.svg()).toString("base64"));
    }
  }]);

  return ChordBox;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ChordBox: ChordBox
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDUTtRQUNKckQsS0FBSyxFQUFFRCxtQkFBbUIsQ0FBQ0MsS0FEdkI7UUFFSkMsTUFBTSxFQUFFRixtQkFBbUIsQ0FBQ0U7TUFGeEIsQ0FEUjtNQU1BLE9BQU8sSUFBUDtJQUNEOzs7V0FFRCxpQkFBUztNQUNQLE9BQU8sS0FBS2tDLFFBQUwsQ0FBYzZGLEdBQWQsRUFBUDtJQUNEOzs7V0FFRCwwQkFBa0I7TUFDaEIsMkNBQW9DQyxNQUFNLENBQUNuRSxJQUFQLENBQVksS0FBSzNCLFFBQUwsQ0FBYzZGLEdBQWQsRUFBWixFQUFpQzNELFFBQWpDLENBQTBDLFFBQTFDLENBQXBDO0lBQ0Q7Ozs7OztBQUdILGlFQUFlO0VBQUVwQyxRQUFRLEVBQVJBO0FBQUYsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvcmRib3gvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Nob3JkYm94L2V4dGVybmFsIGNvbW1vbmpzIFwiQHN2Z2RvdGpzL3N2Zy5qc1wiIiwid2VicGFjazovL2Nob3JkYm94L2V4dGVybmFsIGNvbW1vbmpzIFwic3ZnZG9tXCIiLCJ3ZWJwYWNrOi8vY2hvcmRib3gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hvcmRib3gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hvcmRib3gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nob3JkYm94L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hvcmRib3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaG9yZGJveC8uL3NyYy9jaG9yZGJveC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2hvcmRib3hcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2hvcmRib3hcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsICgpID0+IHtcbnJldHVybiAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3ZnZG90anMvc3ZnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN2Z2RvbVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU1ZHLCByZWdpc3RlcldpbmRvdyB9IGZyb20gXCJAc3ZnZG90anMvc3ZnLmpzXCJcbmltcG9ydCB7IGNyZWF0ZVNWR1dpbmRvdyB9IGZyb20gXCJzdmdkb21cIlxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qgd2luZG93ID0gY3JlYXRlU1ZHV2luZG93KClcbmNvbnN0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG5yZWdpc3RlcldpbmRvdyh3aW5kb3csIGRvY3VtZW50KVxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5pbXBvcnQge1xuICBDaG9yZEJveFJlbmRlcmVyLFxuICBDaG9yZEJveE9wdGlvbnMsXG4gIENob3JkQm94RG90XG59IGZyb20gJy4vdHlwZXMnXG5cbi8vIHRoZSB0aGluZ3MgYSB1c2VyIGNhbiBjb25maWd1cmVcbmNvbnN0IENob3JkQm94T3B0aW9uc0RlZmF1bHRzID0ge1xuICB0aXRsZTogJ0Nob3JkJyxcbiAgZnJldHM6IDMsXG4gIGJhc2VGcmV0OiAxLFxuICBkb3RzOiBbXSBhcyBDaG9yZEJveERvdFtdLFxuICBkb3RUZXh0OiAoKSA9PiAnJyxcbiAgdHVuaW5nczogWydFJywgJ0EnLCAnRCcsICdHJywgJ0InLCAnRSddLFxuICBndWFnZXM6IFs0NiwgMzYsIDI1LCAxNywgMTMsIDEwXSxcbn1cblxuY29uc3QgQ0hPUkRCT1hfRElNRU5TSU9OUyA9IHtcbiAgLy8gYmFzZVxuICB3aWR0aDogMjg1LFxuICBoZWlnaHQ6IDM1MCxcbiAgcGFkZGluZzogNSxcbiAgcmFkaXVzOiA1LFxuICBib3JkZXJGaWxsQ29sb3I6ICcjMDAwJyxcbiAgZmlsbENvbG9yOiAnI2ZmZicsXG5cbiAgLy8gdGl0bGVcbiAgdGl0bGVXaWR0aDogMjc1LFxuICB0aXRsZUhlaWdodDogNTAsXG4gIHRpdGxlRmlsbENvbG9yOiAnIzAwMCcsXG4gIHRpdGxlRm9udFNpemU6IDI0LFxuICB0aXRsZUZvbnRDb2xvcjogJyNmZmYnLFxuXG4gIGZyZXRMYWJlbHNXaWR0aDogNTAsXG4gIGZyZXRMYWJlbHNDb250YWluZXJGaWxsQ29sb3I6ICcjZmZmJyxcblxuICBmcmV0TGFiZWxDb250YWluZXJGaWxsQ29sb3I6ICcjZmZmJyxcbiAgZnJldExhYmVsRm9udFNpemU6IDE2LFxuICBmcmV0TGFiZWxGb250Q29sb3I6ICcjMDAwJyxcblxuICBzdHJpbmdMYWJlbHNIZWlnaHQ6IDUwLFxuICBzdHJpbmdMYWJlbHNDb250YWluZXJGaWxsQ29sb3I6ICcjZmZmJyxcblxuICBzdHJpbmdMYWJlbENvbnRhaW5lckZpbGxDb2xvcjogJyNmZmYnLFxuICBzdHJpbmdMYWJlbEZvbnRTaXplOiAxNixcbiAgc3RyaW5nTGFiZWxGb250Q29sb3I6ICcjMDAwJyxcblxuICBib2R5RmlsbENvbG9yOiAnI2ZmZicsXG5cbiAgbnV0Q29udGFpbmVyUGFkZGluZzogMTUsXG4gIG51dEhlaWdodDogMTAsXG4gIG51dFJhZGl1czogMyxcbiAgbnV0RmlsbENvbG9yOiAnIzAwMCcsXG5cbiAgZnJldHNDb250YWluZXJGaWxsQ29sb3I6ICcjZmZmJyxcbiAgXG4gIGZyZXRNYXJrZXJIZWlnaHQ6IDMsXG4gIGZyZXRNYXJrZXJGaWxsQ29sb3I6ICcjQzBDMEMwJyxcblxuICBzdHJpbmdGaWxsQ29sb3I6ICcjRTQ4QzVEJyxcblxuICBkb3RTaXplOiAzMCxcbiAgZG90Rm9udFNpemU6IDEyLFxuICBkb3RGaWxsQ29sb3I6ICcjMDAwJ1xufVxuY2xhc3MgQ2hvcmRCb3gge1xuXG4gIHByaXZhdGUgcmVuZGVyZXI6IENob3JkQm94UmVuZGVyZXJcblxuICBwcml2YXRlIGNob3JkQm94T3B0aW9uczogQ2hvcmRCb3hPcHRpb25zID0gQ2hvcmRCb3hPcHRpb25zRGVmYXVsdHNcblxuICBjb25zdHJ1Y3RvciAoY2hvcmRCb3hPcHRpb25zOiBDaG9yZEJveE9wdGlvbnMpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gU1ZHKClcblxuICAgIC8vIGFzc2lnbiBvcHRpb25zXG4gICAgdGhpcy5jaG9yZEJveE9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLmNob3JkQm94T3B0aW9ucyxcbiAgICAgIC4uLmNob3JkQm94T3B0aW9uc1xuICAgIH1cblxuICAgIHRoaXMudmFsaWRhdGVDaG9yZEJveE9wdGlvbnMoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVDaG9yZEJveE9wdGlvbnMgKCkge1xuICAgIGlmICh0aGlzLmNob3JkQm94T3B0aW9ucy5mcmV0cyA8IDEgfHwgdGhpcy5jaG9yZEJveE9wdGlvbnMuZnJldHMgPiA2KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyZXRzIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA2JylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaG9yZEJveE9wdGlvbnMuYmFzZUZyZXQgPCAxIHx8IHRoaXMuY2hvcmRCb3hPcHRpb25zLmJhc2VGcmV0ID4gMjQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYmFzZUZyZXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDI0JylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaG9yZEJveE9wdGlvbnMudHVuaW5ncy5sZW5ndGggIT09IDYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndHVuaW5nIG11c3QgcHJlc2VudCBmb3IgNiBzdHJpbmdzIG9ubHknKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNob3JkQm94T3B0aW9ucy5ndWFnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2d1YWdlcyBtdXN0IHByZXNlbnQgZm9yIDYgc3RyaW5ncyBvbmx5JylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQ2hvcmRCb3hCYXNlICgpIHtcbiAgICBjb25zdCBjaG9yZEJveEJhc2VHcm91cCA9IFNWRygpLmdyb3VwKClcblxuICAgIGNvbnN0IGNob3JkQm94QmFzZUNvbnRhaW5lciA9IFNWRygpXG4gICAgICAucmVjdChcbiAgICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy53aWR0aCxcbiAgICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5oZWlnaHQpXG4gICAgICAucmFkaXVzKENIT1JEQk9YX0RJTUVOU0lPTlMucmFkaXVzKVxuICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5ib3JkZXJGaWxsQ29sb3IpXG5cbiAgICBjb25zdCBjaG9yZEJveEJhc2UgPSAgU1ZHKClcbiAgICAgIC5yZWN0KFxuICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLndpZHRoLSgyKkNIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZyksXG4gICAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMuaGVpZ2h0LSgyKkNIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZykpXG4gICAgICAuZmlsbChDSE9SREJPWF9ESU1FTlNJT05TLmZpbGxDb2xvcilcblxuICAgIGNob3JkQm94QmFzZUdyb3VwLmFkZChjaG9yZEJveEJhc2VDb250YWluZXIpXG4gICAgY2hvcmRCb3hCYXNlR3JvdXAuYWRkKGNob3JkQm94QmFzZSlcblxuICAgIGNob3JkQm94QmFzZUNvbnRhaW5lci5iYWNrKClcbiAgICBjaG9yZEJveEJhc2UuZnJvbnQoKVxuXG4gICAgY2hvcmRCb3hCYXNlLm1vdmUoXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcsXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmdcbiAgICApXG5cbiAgICByZXR1cm4gY2hvcmRCb3hCYXNlR3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVDaG9yZEJveFRpdGxlICgpIHtcbiAgICBjb25zdCBjaG9yZEJveFRpdGxlR3JvdXAgPSBTVkcoKS5ncm91cCgpXG5cbiAgICBjb25zdCBjaG9yZEJveFRpdGxlQ29udGFpbmVyID0gU1ZHKClcbiAgICAgIC5yZWN0KFxuICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlV2lkdGgsXG4gICAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVIZWlnaHRcbiAgICAgIClcbiAgICAgIC5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVGaWxsQ29sb3IpXG5cbiAgICBjb25zdCBDaG9yZEJveFRpdGxlID0gU1ZHKClcbiAgICAgIC5wbGFpbih0aGlzLmNob3JkQm94T3B0aW9ucy50aXRsZSlcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6IENIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVGb250U2l6ZSxcbiAgICAgICAgJ2ZvbnQtZmFtaWx5JzogJ0FyaWFsJ1xuICAgICAgfSlcbiAgICAgIC5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVGb250Q29sb3IpXG4gICAgICAuY3goQ0hPUkRCT1hfRElNRU5TSU9OUy50aXRsZVdpZHRoLzIpXG4gICAgICAuY3koQ0hPUkRCT1hfRElNRU5TSU9OUy50aXRsZUhlaWdodC8yKVxuXG4gICAgY2hvcmRCb3hUaXRsZUdyb3VwLmFkZChjaG9yZEJveFRpdGxlQ29udGFpbmVyKVxuICAgIGNob3JkQm94VGl0bGVHcm91cC5hZGQoQ2hvcmRCb3hUaXRsZSlcblxuICAgIGNob3JkQm94VGl0bGVDb250YWluZXIuYmFjaygpXG4gICAgQ2hvcmRCb3hUaXRsZS5mcm9udCgpXG5cbiAgICBjaG9yZEJveFRpdGxlR3JvdXAubW92ZShcbiAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZyxcbiAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZ1xuICAgIClcblxuICAgIHJldHVybiBjaG9yZEJveFRpdGxlR3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVjaG9yZEJveEZyZXRMYWJlbHMgKCkge1xuICAgIGNvbnN0IGNob3JkQm94RnJldExhYmVsc0dyb3VwID0gU1ZHKCkuZ3JvdXAoKVxuXG4gICAgY29uc3QgZnJldExhYmVsc0hlaWdodCA9IENIT1JEQk9YX0RJTUVOU0lPTlMuaGVpZ2h0LSgyKkNIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZyktQ0hPUkRCT1hfRElNRU5TSU9OUy50aXRsZUhlaWdodC1DSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsc0hlaWdodFxuICAgIGNvbnN0IGZyZXRMYWJlbEhlaWdodCA9IGZyZXRMYWJlbHNIZWlnaHQvdGhpcy5jaG9yZEJveE9wdGlvbnMuZnJldHNcblxuICAgIGNvbnN0IGNob3JkQm94RnJldExhYmVsc0NvbnRhaW5lciA9IFNWRygpXG4gICAgICAucmVjdChcbiAgICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGgsXG4gICAgICAgIGZyZXRMYWJlbHNIZWlnaHRcbiAgICAgIClcbiAgICAgIC5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc0NvbnRhaW5lckZpbGxDb2xvcilcbiAgICBcbiAgICBjb25zdCBjaG9yZEJveEZyZXRib2FyZExhYmVscyA9IEFycmF5XG4gICAgICAuZnJvbShBcnJheSh0aGlzLmNob3JkQm94T3B0aW9ucy5mcmV0cykpXG4gICAgICAubWFwKChfLCBmcmV0TGFiZWxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaG9yZEJveEZyZXRMYWJlbEdyb3VwPSBTVkcoKS5ncm91cCgpXG5cbiAgICAgICAgY29uc3QgY2hvcmRCb3hGcmV0TGFiZWxDb250YWluZXIgPSBTVkcoKVxuICAgICAgICAgIC5yZWN0KFxuICAgICAgICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGgsXG4gICAgICAgICAgICBmcmV0TGFiZWxIZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxDb250YWluZXJGaWxsQ29sb3IpXG5cbiAgICAgICAgY29uc3QgY2hvcmRCb3hGcmV0TGFiZWxUZXh0ID0gU1ZHKClcbiAgICAgICAgICAucGxhaW4oKHRoaXMuY2hvcmRCb3hPcHRpb25zLmJhc2VGcmV0ICsgZnJldExhYmVsSW5kZXgpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IENIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsRm9udFNpemUsXG4gICAgICAgICAgICAnZm9udC1mYW1pbHknOiAnQXJpYWwnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsbChDSE9SREJPWF9ESU1FTlNJT05TLmZyZXRMYWJlbEZvbnRDb2xvcilcbiAgICAgICAgICAuY3goQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGgvMilcbiAgICAgICAgICAuY3koZnJldExhYmVsSGVpZ2h0LzIpXG5cbiAgICAgICAgY2hvcmRCb3hGcmV0TGFiZWxHcm91cC5hZGQoY2hvcmRCb3hGcmV0TGFiZWxDb250YWluZXIpXG4gICAgICAgIGNob3JkQm94RnJldExhYmVsR3JvdXAuYWRkKGNob3JkQm94RnJldExhYmVsVGV4dClcblxuICAgICAgICBjaG9yZEJveEZyZXRMYWJlbENvbnRhaW5lci5iYWNrKClcbiAgICAgICAgY2hvcmRCb3hGcmV0TGFiZWxUZXh0LmZyb250KClcblxuICAgICAgICBjaG9yZEJveEZyZXRMYWJlbEdyb3VwLm1vdmUoXG4gICAgICAgICAgMCxcbiAgICAgICAgICBmcmV0TGFiZWxJbmRleCpmcmV0TGFiZWxIZWlnaHRcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiBjaG9yZEJveEZyZXRMYWJlbEdyb3VwXG4gICAgICB9KVxuXG4gICAgY2hvcmRCb3hGcmV0TGFiZWxzR3JvdXAuYWRkKGNob3JkQm94RnJldExhYmVsc0NvbnRhaW5lcilcblxuICAgIGNob3JkQm94RnJldGJvYXJkTGFiZWxzXG4gICAgICAubWFwKGNob3JkQm94RnJldExhYmVsID0+IHtcbiAgICAgICAgY2hvcmRCb3hGcmV0TGFiZWxzR3JvdXAuYWRkKGNob3JkQm94RnJldExhYmVsKVxuICAgICAgfSlcblxuICAgIGNob3JkQm94RnJldExhYmVsc0NvbnRhaW5lci5iYWNrKClcblxuICAgIGNob3JkQm94RnJldExhYmVsc0dyb3VwLm1vdmUoXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcsXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcgKyBDSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0ICsgQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNIZWlnaHRcbiAgICApXG5cbiAgICByZXR1cm4gY2hvcmRCb3hGcmV0TGFiZWxzR3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVjaG9yZEJveFN0cmluZ0xhYmVscyAoKSB7XG4gICAgY29uc3QgY2hvcmRCb3hTdHJpbmdMYWJlbHNHcm91cCA9IFNWRygpLmdyb3VwKClcblxuICAgIGNvbnN0IHN0cmluZ0xhYmVsc1dpZHRoID0gQ0hPUkRCT1hfRElNRU5TSU9OUy53aWR0aC0oMipDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcpLUNIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoXG4gICAgY29uc3Qgc3RyaW5nTGFiZWxXaWR0aCA9IHN0cmluZ0xhYmVsc1dpZHRoL3RoaXMuY2hvcmRCb3hPcHRpb25zLnR1bmluZ3MubGVuZ3RoIC8vIHN0cmluZyBjb3VudFxuXG4gICAgY29uc3QgY2hvcmRCb3hTdHJpbmdMYWJlbHNDb250YWluZXIgPSBTVkcoKVxuICAgICAgLnJlY3QoXG4gICAgICAgIHN0cmluZ0xhYmVsc1dpZHRoLFxuICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsc0hlaWdodFxuICAgICAgKVxuICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNDb250YWluZXJGaWxsQ29sb3IpXG4gICAgXG4gICAgY29uc3QgY2hvcmRCb3hTdHJpbmdib2FyZExhYmVscyA9IEFycmF5XG4gICAgICAuZnJvbShBcnJheSh0aGlzLmNob3JkQm94T3B0aW9ucy50dW5pbmdzLmxlbmd0aCAvKiBzdHJpbmcgY291bnQgKi8pKVxuICAgICAgLm1hcCgoXywgc3RyaW5nTGFiZWxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaG9yZEJveFN0cmluZ0xhYmVsR3JvdXA9IFNWRygpLmdyb3VwKClcblxuICAgICAgICBjb25zdCBjaG9yZEJveFN0cmluZ0xhYmVsQ29udGFpbmVyID0gU1ZHKClcbiAgICAgICAgICAucmVjdChcbiAgICAgICAgICAgIHN0cmluZ0xhYmVsV2lkdGgsXG4gICAgICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsc0hlaWdodFxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsbChDSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsQ29udGFpbmVyRmlsbENvbG9yKVxuXG4gICAgICAgIGNvbnN0IGNob3JkQm94U3RyaW5nTGFiZWxUZXh0ID0gU1ZHKClcbiAgICAgICAgICAucGxhaW4odGhpcy5jaG9yZEJveE9wdGlvbnMudHVuaW5nc1tzdHJpbmdMYWJlbEluZGV4XSlcbiAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnZm9udC1zaXplJzogQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbEZvbnRTaXplLFxuICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogJ0FyaWFsJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbEZvbnRDb2xvcilcbiAgICAgICAgICAuY3goc3RyaW5nTGFiZWxXaWR0aC8yKVxuICAgICAgICAgIC5jeShDSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsc0hlaWdodC8yKVxuXG4gICAgICAgIGNob3JkQm94U3RyaW5nTGFiZWxHcm91cC5hZGQoY2hvcmRCb3hTdHJpbmdMYWJlbENvbnRhaW5lcilcbiAgICAgICAgY2hvcmRCb3hTdHJpbmdMYWJlbEdyb3VwLmFkZChjaG9yZEJveFN0cmluZ0xhYmVsVGV4dClcblxuICAgICAgICBjaG9yZEJveFN0cmluZ0xhYmVsQ29udGFpbmVyLmJhY2soKVxuICAgICAgICBjaG9yZEJveFN0cmluZ0xhYmVsVGV4dC5mcm9udCgpXG5cbiAgICAgICAgY2hvcmRCb3hTdHJpbmdMYWJlbEdyb3VwLm1vdmUoXG4gICAgICAgICAgc3RyaW5nTGFiZWxJbmRleCpzdHJpbmdMYWJlbFdpZHRoLFxuICAgICAgICAgIDAsXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gY2hvcmRCb3hTdHJpbmdMYWJlbEdyb3VwXG4gICAgICB9KVxuXG4gICAgY2hvcmRCb3hTdHJpbmdMYWJlbHNHcm91cC5hZGQoY2hvcmRCb3hTdHJpbmdMYWJlbHNDb250YWluZXIpXG5cbiAgICBjaG9yZEJveFN0cmluZ2JvYXJkTGFiZWxzXG4gICAgICAubWFwKGNob3JkQm94U3RyaW5nTGFiZWwgPT4ge1xuICAgICAgICBjaG9yZEJveFN0cmluZ0xhYmVsc0dyb3VwLmFkZChjaG9yZEJveFN0cmluZ0xhYmVsKVxuICAgICAgfSlcblxuICAgIGNob3JkQm94U3RyaW5nTGFiZWxzQ29udGFpbmVyLmJhY2soKVxuXG4gICAgY2hvcmRCb3hTdHJpbmdMYWJlbHNHcm91cC5tb3ZlKFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nICsgQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGgsXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcgKyBDSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0LFxuICAgIClcblxuICAgIHJldHVybiBjaG9yZEJveFN0cmluZ0xhYmVsc0dyb3VwXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQ2hvcmRib3hCb2R5ICgpIHtcbiAgICBjb25zdCBjaG9yZEJveEJvZHlHcm91cCA9IFNWRygpLmdyb3VwKClcblxuICAgIGNvbnN0IGNob3JkQm94Qm9keSA9IFNWRygpXG4gICAgICAucmVjdChcbiAgICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy53aWR0aC0oMipDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcpLUNIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoLFxuICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLmhlaWdodC0oMipDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcpLUNIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVIZWlnaHQtQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNIZWlnaHRcbiAgICAgIClcbiAgICAgIC5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMuYm9keUZpbGxDb2xvcilcblxuICAgIGNob3JkQm94Qm9keUdyb3VwLmFkZChjaG9yZEJveEJvZHkpXG5cbiAgICBjaG9yZEJveEJvZHlHcm91cC5tb3ZlKFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoLFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVIZWlnaHQrQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNIZWlnaHRcbiAgICApXG5cbiAgICByZXR1cm4gY2hvcmRCb3hCb2R5R3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVjaG9yZEJveE51dCAoKSB7XG4gICAgY29uc3QgY2hvcmRCb3hOdXRHcm91cCA9IFNWRygpLmdyb3VwKClcblxuICAgIGNvbnN0IGNob3JkQm94TnV0Q29udGFpbmVyID0gU1ZHKClcbiAgICAgIC5yZWN0KFxuICAgICAgICAoQ0hPUkRCT1hfRElNRU5TSU9OUy53aWR0aC0oMipDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcpLUNIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoKS0oMipDSE9SREJPWF9ESU1FTlNJT05TLm51dENvbnRhaW5lclBhZGRpbmcpLFxuICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLm51dEhlaWdodFxuICAgICAgKVxuICAgICAgLmZpbGwoJ25vbmUnKSAvLyBoaWRlIGJ5IGRlZmF1bHRcbiAgICAgIC5yYWRpdXMoQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRSYWRpdXMpXG4gICAgXG4gICAgLy8gdGhlIG51dCBzaG91bGQgb25seSBiZSB2aXNpYmxlIGlmIGJhc2VGcmV0ID09PSAxXG4gICAgaWYgKHRoaXMuY2hvcmRCb3hPcHRpb25zLmJhc2VGcmV0ID09PSAxKSB7XG4gICAgICBjaG9yZEJveE51dENvbnRhaW5lci5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMubnV0RmlsbENvbG9yKVxuICAgIH1cblxuICAgIGNob3JkQm94TnV0R3JvdXAuYWRkKGNob3JkQm94TnV0Q29udGFpbmVyKVxuXG4gICAgY2hvcmRCb3hOdXRHcm91cC5tb3ZlKFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoK0NIT1JEQk9YX0RJTUVOU0lPTlMubnV0Q29udGFpbmVyUGFkZGluZyxcbiAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZytDSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0K0NIT1JEQk9YX0RJTUVOU0lPTlMuc3RyaW5nTGFiZWxzSGVpZ2h0XG4gICAgKVxuXG4gICAgcmV0dXJuIGNob3JkQm94TnV0R3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVjaG9yZEJveEZyZXRzICgpIHtcbiAgICBjb25zdCBjaG9yZEJveEZyZXRzR3JvdXAgPSBTVkcoKS5ncm91cCgpXG5cbiAgICBjb25zdCBmcmV0c1dpZHRoID0gKENIT1JEQk9YX0RJTUVOU0lPTlMud2lkdGgtKDIqQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nKS1DSE9SREJPWF9ESU1FTlNJT05TLmZyZXRMYWJlbHNXaWR0aCktKDIqQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRDb250YWluZXJQYWRkaW5nKVxuICAgIGNvbnN0IGZyZXRzSGVpZ2h0ID0gQ0hPUkRCT1hfRElNRU5TSU9OUy5oZWlnaHQtKDIqQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nKS1DSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0LUNIT1JEQk9YX0RJTUVOU0lPTlMuc3RyaW5nTGFiZWxzSGVpZ2h0LUNIT1JEQk9YX0RJTUVOU0lPTlMubnV0SGVpZ2h0XG4gICAgY29uc3QgZnJldEhlaWdodCA9IGZyZXRzSGVpZ2h0L3RoaXMuY2hvcmRCb3hPcHRpb25zLmZyZXRzXG5cbiAgICBjb25zdCBjaG9yZEJveEZyZXRzQ29udGFpbmVyID0gU1ZHKClcbiAgICAgIC5yZWN0KFxuICAgICAgICBmcmV0c1dpZHRoLFxuICAgICAgICBmcmV0c0hlaWdodFxuICAgICAgKS5maWxsKENIT1JEQk9YX0RJTUVOU0lPTlMuZnJldHNDb250YWluZXJGaWxsQ29sb3IpXG5cbiAgICBjb25zdCBjaG9yZEJveEZyZXRNYXJrZXJzID0gQXJyYXlcbiAgICAgIC5mcm9tKEFycmF5KHRoaXMuY2hvcmRCb3hPcHRpb25zLmZyZXRzKSlcbiAgICAgIC5tYXAoKF8sIGZyZXRNYXJrZXJJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBmcmV0TWFya2VyID0gU1ZHKClcbiAgICAgICAgICAucmVjdChcbiAgICAgICAgICAgIGZyZXRzV2lkdGgsXG4gICAgICAgICAgICBDSE9SREJPWF9ESU1FTlNJT05TLmZyZXRNYXJrZXJIZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TWFya2VyRmlsbENvbG9yKVxuXG4gICAgICAgIGZyZXRNYXJrZXIubW92ZShcbiAgICAgICAgICAwLFxuICAgICAgICAgIGZyZXRNYXJrZXJJbmRleCpmcmV0SGVpZ2h0LFxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIGZyZXRNYXJrZXJcbiAgICAgIH0pXG5cbiAgICBjaG9yZEJveEZyZXRzR3JvdXAuYWRkKGNob3JkQm94RnJldHNDb250YWluZXIpXG5cbiAgICBjaG9yZEJveEZyZXRNYXJrZXJzLm1hcChmcmV0TWFya2VyID0+IHtcbiAgICAgIGNob3JkQm94RnJldHNHcm91cC5hZGQoZnJldE1hcmtlcilcbiAgICB9KVxuXG4gICAgY2hvcmRCb3hGcmV0c0dyb3VwLmJhY2soKVxuXG4gICAgY2hvcmRCb3hGcmV0c0dyb3VwLm1vdmUoXG4gICAgICBDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcrQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGgrQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRDb250YWluZXJQYWRkaW5nLFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVIZWlnaHQrQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNIZWlnaHQrQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRIZWlnaHRcbiAgICApXG5cbiAgICByZXR1cm4gY2hvcmRCb3hGcmV0c0dyb3VwXG4gIH1cbiAgXG4gIHByaXZhdGUgZ2VuZXJhdGVDaG9yZEJveFN0cmluZ3MgKCkge1xuICAgIGNvbnN0IGNob3JkQm94U3RyaW5nc0dyb3VwID0gU1ZHKCkuZ3JvdXAoKVxuXG4gICAgY29uc3Qgc3RyaW5nc1dpZHRoID0gQ0hPUkRCT1hfRElNRU5TSU9OUy53aWR0aC0oMipDSE9SREJPWF9ESU1FTlNJT05TLnBhZGRpbmcpLUNIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoXG4gICAgY29uc3Qgc3RyaW5nc0hlaWdodCA9IENIT1JEQk9YX0RJTUVOU0lPTlMuaGVpZ2h0LSgyKkNIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZyktQ0hPUkRCT1hfRElNRU5TSU9OUy50aXRsZUhlaWdodC1DSE9SREJPWF9ESU1FTlNJT05TLnN0cmluZ0xhYmVsc0hlaWdodC1DSE9SREJPWF9ESU1FTlNJT05TLm51dEhlaWdodFxuICAgIGNvbnN0IHN0cmluZ1dpZHRoID0gc3RyaW5nc1dpZHRoL3RoaXMuY2hvcmRCb3hPcHRpb25zLnR1bmluZ3MubGVuZ3RoXG4gICAgY29uc3Qgc3RyaW5nR3VhZ2VTY2FsZUZhY3RvciA9IDAuMTI1XG5cbiAgICBjb25zdCBjaG9yZEJveFN0cmluZ3NDb250YWluZXIgPSBTVkcoKVxuICAgICAgLnJlY3QoXG4gICAgICAgIHN0cmluZ3NXaWR0aCxcbiAgICAgICAgc3RyaW5nc0hlaWdodFxuICAgICAgKS5maWxsKCdub25lJykgLy8gc28gZnJldHMgc2hvdyB0aHJvdWdoXG5cbiAgICBjb25zdCBjaG9yZEJveFN0cmluZ3MgPSBBcnJheVxuICAgICAgLmZyb20oQXJyYXkodGhpcy5jaG9yZEJveE9wdGlvbnMudHVuaW5ncy5sZW5ndGgpKVxuICAgICAgLm1hcCgoXywgc3RyaW5nSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nR3VhZ2UgPSB0aGlzLmNob3JkQm94T3B0aW9ucy5ndWFnZXNbc3RyaW5nSW5kZXhdICogc3RyaW5nR3VhZ2VTY2FsZUZhY3RvclxuXG4gICAgICAgIGNvbnN0IHN0cmluZyA9IFNWRygpXG4gICAgICAgICAgLnJlY3Qoc3RyaW5nR3VhZ2UsIHN0cmluZ3NIZWlnaHQpXG4gICAgICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdGaWxsQ29sb3IpXG5cbiAgICAgICAgc3RyaW5nLm1vdmUoXG4gICAgICAgICAgc3RyaW5nSW5kZXgqc3RyaW5nV2lkdGggKyBzdHJpbmdXaWR0aC8yLFxuICAgICAgICAgIDAsXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gc3RyaW5nXG4gICAgICB9KVxuXG4gICAgY2hvcmRCb3hTdHJpbmdzR3JvdXAuYWRkKGNob3JkQm94U3RyaW5nc0NvbnRhaW5lcilcblxuICAgIGNob3JkQm94U3RyaW5ncy5tYXAoc3RyaW5nID0+IHtcbiAgICAgIGNob3JkQm94U3RyaW5nc0dyb3VwLmFkZChzdHJpbmcpXG4gICAgfSlcblxuICAgIGNob3JkQm94U3RyaW5nc0dyb3VwLmJhY2soKVxuXG4gICAgY2hvcmRCb3hTdHJpbmdzR3JvdXAubW92ZShcbiAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZytDSE9SREJPWF9ESU1FTlNJT05TLmZyZXRMYWJlbHNXaWR0aCxcbiAgICAgIENIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZytDSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0K0NIT1JEQk9YX0RJTUVOU0lPTlMuc3RyaW5nTGFiZWxzSGVpZ2h0K0NIT1JEQk9YX0RJTUVOU0lPTlMubnV0SGVpZ2h0XG4gICAgKVxuXG4gICAgcmV0dXJuIGNob3JkQm94U3RyaW5nc0dyb3VwXG4gIH1cbiAgcHJpdmF0ZSBnZW5lcmF0ZUNob3JkQm94RG90cyAoKSB7XG4gICAgY29uc3QgY2hvcmRCb3hEb3RzR3JvdXAgPSBTVkcoKS5ncm91cCgpXG5cbiAgICBjb25zdCBkb3RzV2lkdGggPSBDSE9SREJPWF9ESU1FTlNJT05TLndpZHRoLSgyKkNIT1JEQk9YX0RJTUVOU0lPTlMucGFkZGluZyktQ0hPUkRCT1hfRElNRU5TSU9OUy5mcmV0TGFiZWxzV2lkdGhcbiAgICBjb25zdCBkb3RzSGVpZ2h0ID0gQ0hPUkRCT1hfRElNRU5TSU9OUy5oZWlnaHQtKDIqQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nKS1DSE9SREJPWF9ESU1FTlNJT05TLnRpdGxlSGVpZ2h0LUNIT1JEQk9YX0RJTUVOU0lPTlMuc3RyaW5nTGFiZWxzSGVpZ2h0LUNIT1JEQk9YX0RJTUVOU0lPTlMubnV0SGVpZ2h0XG4gICAgY29uc3QgZG90V2lkdGggPSBkb3RzV2lkdGgvdGhpcy5jaG9yZEJveE9wdGlvbnMudHVuaW5ncy5sZW5ndGhcbiAgICBjb25zdCBkb3RIZWlnaHQgPSBkb3RzSGVpZ2h0L3RoaXMuY2hvcmRCb3hPcHRpb25zLmZyZXRzXG5cbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5jaG9yZEJveE9wdGlvbnMudHVuaW5ncy5sZW5ndGhcbiAgICBjb25zdCBndWFnZXMgPSB0aGlzLmNob3JkQm94T3B0aW9ucy5ndWFnZXNcbiAgICBjb25zdCBzdHJpbmdHdWFnZVNjYWxlRmFjdG9yID0gMC4xMjVcblxuICAgIGNvbnN0IG9wdGlvbnNEb3RzID0gdGhpcy5jaG9yZEJveE9wdGlvbnMuZG90c1xuXG4gICAgY29uc3QgY2hvcmRCb3hEb3RzQ29udGFpbmVyID0gU1ZHKClcbiAgICAgIC5yZWN0KFxuICAgICAgICBkb3RzV2lkdGgsXG4gICAgICAgIGRvdHNIZWlnaHRcbiAgICAgICkuZmlsbCgnbm9uZScpIC8vIHNvIGRvdHMgc2hvdyB0aHJvdWdoXG5cbiAgICBjb25zdCBjaG9yZEJveERvdHMgPSBBcnJheVxuICAgICAgLmZyb20ob3B0aW9uc0RvdHMpXG4gICAgICAubWFwKGRvdCA9PiB7XG4gICAgICAgIGNvbnN0IGRvdEdyb3VwID0gU1ZHKCkuZ3JvdXAoKVxuXG4gICAgICAgIGNvbnN0IGRvdENvbnRhaW5lciA9IFNWRygpXG4gICAgICAgICAgLmNpcmNsZShDSE9SREJPWF9ESU1FTlNJT05TLmRvdFNpemUpXG4gICAgICAgICAgLmZpbGwoQ0hPUkRCT1hfRElNRU5TSU9OUy5kb3RGaWxsQ29sb3IpXG5cbiAgICAgICAgZG90Q29udGFpbmVyXG4gICAgICAgICAgLmN4KCgoc3RyaW5ncyAtIGRvdC5zdHJpbmcpICogZG90V2lkdGggKyBkb3RXaWR0aC8yKSArIChndWFnZXNbc3RyaW5ncyAtIGRvdC5zdHJpbmddICogc3RyaW5nR3VhZ2VTY2FsZUZhY3RvcikgLyAyKVxuICAgICAgICAgIC5jeSgoZG90LmZyZXQtMSkgKiBkb3RIZWlnaHQgKyBkb3RIZWlnaHQvMilcblxuICAgICAgICAvLyBkdWUgdG8gb3VyIGNvbnRhaW5lciBkaW1lbnNpb25zXG4gICAgICAgIGlmIChkb3QuZnJldCA9PT0gMSkge1xuICAgICAgICAgIGRvdENvbnRhaW5lci5jeShkb3RIZWlnaHQvMiArIENIT1JEQk9YX0RJTUVOU0lPTlMubnV0SGVpZ2h0LygyKnRoaXMuY2hvcmRCb3hPcHRpb25zLmZyZXRzKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvdFRleHQgPSBTVkcoKVxuICAgICAgICAgIC5wbGFpbih0aGlzLmNob3JkQm94T3B0aW9ucy5kb3RUZXh0KGRvdCkpXG4gICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IENIT1JEQk9YX0RJTUVOU0lPTlMuZG90Rm9udFNpemUsXG4gICAgICAgICAgICAnZm9udC1mYW1pbHknOiAnQXJpYWwnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsbCgnI2ZmZicpXG5cbiAgICAgICAgZG90VGV4dFxuICAgICAgICAgIC5jeCgoKHN0cmluZ3MgLSBkb3Quc3RyaW5nKSAqIGRvdFdpZHRoICsgZG90V2lkdGgvMikgKyAoZ3VhZ2VzW3N0cmluZ3MgLSBkb3Quc3RyaW5nXSAqIHN0cmluZ0d1YWdlU2NhbGVGYWN0b3IpIC8gMilcbiAgICAgICAgICAuY3koKGRvdC5mcmV0LTEpICogZG90SGVpZ2h0ICsgZG90SGVpZ2h0LzIpXG5cbiAgICAgICAgLy8gZHVlIHRvIG91ciBjb250YWluZXIgZGltZW5zaW9uc1xuICAgICAgICBpZiAoZG90LmZyZXQgPT09IDEpIHtcbiAgICAgICAgICBkb3RUZXh0LmN5KGRvdEhlaWdodC8yICsgQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRIZWlnaHQvKDIqdGhpcy5jaG9yZEJveE9wdGlvbnMuZnJldHMpKVxuICAgICAgICB9XG5cbiAgICAgICAgZG90R3JvdXAuYWRkKGRvdENvbnRhaW5lcilcbiAgICAgICAgZG90R3JvdXAuYWRkKGRvdFRleHQpXG5cbiAgICAgICAgZG90Q29udGFpbmVyLmJhY2soKVxuICAgICAgICBkb3RUZXh0LmZyb250KClcblxuICAgICAgICByZXR1cm4gZG90R3JvdXBcbiAgICAgIH0pXG5cbiAgICBjaG9yZEJveERvdHNHcm91cC5hZGQoY2hvcmRCb3hEb3RzQ29udGFpbmVyKVxuXG4gICAgY2hvcmRCb3hEb3RzLm1hcChkb3QgPT4ge1xuICAgICAgY2hvcmRCb3hEb3RzR3JvdXAuYWRkKGRvdClcbiAgICB9KVxuXG4gICAgY2hvcmRCb3hEb3RzR3JvdXAuYmFjaygpXG5cbiAgICBjaG9yZEJveERvdHNHcm91cC5tb3ZlKFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMuZnJldExhYmVsc1dpZHRoLFxuICAgICAgQ0hPUkRCT1hfRElNRU5TSU9OUy5wYWRkaW5nK0NIT1JEQk9YX0RJTUVOU0lPTlMudGl0bGVIZWlnaHQrQ0hPUkRCT1hfRElNRU5TSU9OUy5zdHJpbmdMYWJlbHNIZWlnaHQrQ0hPUkRCT1hfRElNRU5TSU9OUy5udXRIZWlnaHRcbiAgICApXG5cbiAgICByZXR1cm4gY2hvcmRCb3hEb3RzR3JvdXBcbiAgfVxuXG4gIHByaXZhdGUgc2V0RG90cyAoZG90czogQ2hvcmRCb3hEb3RbXSkge1xuICAgIHRoaXMuY2hvcmRCb3hPcHRpb25zLmRvdHMgPSBkb3RzXG5cbiAgICB0aGlzLnJlbmRlcigpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIFxuICByZW5kZXIgKCkge1xuICAgIC8vIGFsd2F5cyBjbGVhciB0aGUgcmVuZGVyZXJcbiAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKClcblxuICAgIC8vIGJ1aWxkIGl0IHVwIGluIGxheWVyc1xuICAgIHRoaXMucmVuZGVyZXIuYWRkKHRoaXMuZ2VuZXJhdGVDaG9yZEJveEJhc2UoKSlcbiAgICB0aGlzLnJlbmRlcmVyLmFkZCh0aGlzLmdlbmVyYXRlQ2hvcmRCb3hUaXRsZSgpKVxuXG4gICAgdGhpcy5yZW5kZXJlci5hZGQodGhpcy5nZW5lcmF0ZWNob3JkQm94RnJldExhYmVscygpKVxuICAgIHRoaXMucmVuZGVyZXIuYWRkKHRoaXMuZ2VuZXJhdGVjaG9yZEJveFN0cmluZ0xhYmVscygpKVxuXG4gICAgLy8gLy8gYnVpbGQgdGhlIGJvZHkgcGFydHNcbiAgICB0aGlzLnJlbmRlcmVyLmFkZCh0aGlzLmdlbmVyYXRlQ2hvcmRib3hCb2R5KCkpXG4gICAgdGhpcy5yZW5kZXJlci5hZGQodGhpcy5nZW5lcmF0ZWNob3JkQm94TnV0KCkpXG4gICAgdGhpcy5yZW5kZXJlci5hZGQodGhpcy5nZW5lcmF0ZWNob3JkQm94RnJldHMoKSlcbiAgICB0aGlzLnJlbmRlcmVyLmFkZCh0aGlzLmdlbmVyYXRlQ2hvcmRCb3hTdHJpbmdzKCkpXG4gICAgdGhpcy5yZW5kZXJlci5hZGQodGhpcy5nZW5lcmF0ZUNob3JkQm94RG90cygpKVxuXG4gICAgLy8gZml4ZXMgY2hyb21lIHJlbmRlcmluZyBpc3N1ZVxuICAgIHRoaXMucmVuZGVyZXJcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgd2lkdGg6IENIT1JEQk9YX0RJTUVOU0lPTlMud2lkdGgsXG4gICAgICAgIGhlaWdodDogQ0hPUkRCT1hfRElNRU5TSU9OUy5oZWlnaHQsXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvU1ZHICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5zdmcoKVxuICB9XG5cbiAgdG9TVkdCYXNlNjRVUkkgKCkge1xuICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke0J1ZmZlci5mcm9tKHRoaXMucmVuZGVyZXIuc3ZnKCkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IENob3JkQm94IH0iXSwibmFtZXMiOlsiU1ZHIiwicmVnaXN0ZXJXaW5kb3ciLCJjcmVhdGVTVkdXaW5kb3ciLCJ3aW5kb3ciLCJkb2N1bWVudCIsIkNob3JkQm94T3B0aW9uc0RlZmF1bHRzIiwidGl0bGUiLCJmcmV0cyIsImJhc2VGcmV0IiwiZG90cyIsImRvdFRleHQiLCJ0dW5pbmdzIiwiZ3VhZ2VzIiwiQ0hPUkRCT1hfRElNRU5TSU9OUyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsInJhZGl1cyIsImJvcmRlckZpbGxDb2xvciIsImZpbGxDb2xvciIsInRpdGxlV2lkdGgiLCJ0aXRsZUhlaWdodCIsInRpdGxlRmlsbENvbG9yIiwidGl0bGVGb250U2l6ZSIsInRpdGxlRm9udENvbG9yIiwiZnJldExhYmVsc1dpZHRoIiwiZnJldExhYmVsc0NvbnRhaW5lckZpbGxDb2xvciIsImZyZXRMYWJlbENvbnRhaW5lckZpbGxDb2xvciIsImZyZXRMYWJlbEZvbnRTaXplIiwiZnJldExhYmVsRm9udENvbG9yIiwic3RyaW5nTGFiZWxzSGVpZ2h0Iiwic3RyaW5nTGFiZWxzQ29udGFpbmVyRmlsbENvbG9yIiwic3RyaW5nTGFiZWxDb250YWluZXJGaWxsQ29sb3IiLCJzdHJpbmdMYWJlbEZvbnRTaXplIiwic3RyaW5nTGFiZWxGb250Q29sb3IiLCJib2R5RmlsbENvbG9yIiwibnV0Q29udGFpbmVyUGFkZGluZyIsIm51dEhlaWdodCIsIm51dFJhZGl1cyIsIm51dEZpbGxDb2xvciIsImZyZXRzQ29udGFpbmVyRmlsbENvbG9yIiwiZnJldE1hcmtlckhlaWdodCIsImZyZXRNYXJrZXJGaWxsQ29sb3IiLCJzdHJpbmdGaWxsQ29sb3IiLCJkb3RTaXplIiwiZG90Rm9udFNpemUiLCJkb3RGaWxsQ29sb3IiLCJDaG9yZEJveCIsImNob3JkQm94T3B0aW9ucyIsInJlbmRlcmVyIiwidmFsaWRhdGVDaG9yZEJveE9wdGlvbnMiLCJFcnJvciIsImxlbmd0aCIsImNob3JkQm94QmFzZUdyb3VwIiwiZ3JvdXAiLCJjaG9yZEJveEJhc2VDb250YWluZXIiLCJyZWN0IiwiZmlsbCIsImNob3JkQm94QmFzZSIsImFkZCIsImJhY2siLCJmcm9udCIsIm1vdmUiLCJjaG9yZEJveFRpdGxlR3JvdXAiLCJjaG9yZEJveFRpdGxlQ29udGFpbmVyIiwiQ2hvcmRCb3hUaXRsZSIsInBsYWluIiwiYXR0ciIsImN4IiwiY3kiLCJjaG9yZEJveEZyZXRMYWJlbHNHcm91cCIsImZyZXRMYWJlbHNIZWlnaHQiLCJmcmV0TGFiZWxIZWlnaHQiLCJjaG9yZEJveEZyZXRMYWJlbHNDb250YWluZXIiLCJjaG9yZEJveEZyZXRib2FyZExhYmVscyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIl8iLCJmcmV0TGFiZWxJbmRleCIsImNob3JkQm94RnJldExhYmVsR3JvdXAiLCJjaG9yZEJveEZyZXRMYWJlbENvbnRhaW5lciIsImNob3JkQm94RnJldExhYmVsVGV4dCIsInRvU3RyaW5nIiwiY2hvcmRCb3hGcmV0TGFiZWwiLCJjaG9yZEJveFN0cmluZ0xhYmVsc0dyb3VwIiwic3RyaW5nTGFiZWxzV2lkdGgiLCJzdHJpbmdMYWJlbFdpZHRoIiwiY2hvcmRCb3hTdHJpbmdMYWJlbHNDb250YWluZXIiLCJjaG9yZEJveFN0cmluZ2JvYXJkTGFiZWxzIiwic3RyaW5nTGFiZWxJbmRleCIsImNob3JkQm94U3RyaW5nTGFiZWxHcm91cCIsImNob3JkQm94U3RyaW5nTGFiZWxDb250YWluZXIiLCJjaG9yZEJveFN0cmluZ0xhYmVsVGV4dCIsImNob3JkQm94U3RyaW5nTGFiZWwiLCJjaG9yZEJveEJvZHlHcm91cCIsImNob3JkQm94Qm9keSIsImNob3JkQm94TnV0R3JvdXAiLCJjaG9yZEJveE51dENvbnRhaW5lciIsImNob3JkQm94RnJldHNHcm91cCIsImZyZXRzV2lkdGgiLCJmcmV0c0hlaWdodCIsImZyZXRIZWlnaHQiLCJjaG9yZEJveEZyZXRzQ29udGFpbmVyIiwiY2hvcmRCb3hGcmV0TWFya2VycyIsImZyZXRNYXJrZXJJbmRleCIsImZyZXRNYXJrZXIiLCJjaG9yZEJveFN0cmluZ3NHcm91cCIsInN0cmluZ3NXaWR0aCIsInN0cmluZ3NIZWlnaHQiLCJzdHJpbmdXaWR0aCIsInN0cmluZ0d1YWdlU2NhbGVGYWN0b3IiLCJjaG9yZEJveFN0cmluZ3NDb250YWluZXIiLCJjaG9yZEJveFN0cmluZ3MiLCJzdHJpbmdJbmRleCIsInN0cmluZ0d1YWdlIiwic3RyaW5nIiwiY2hvcmRCb3hEb3RzR3JvdXAiLCJkb3RzV2lkdGgiLCJkb3RzSGVpZ2h0IiwiZG90V2lkdGgiLCJkb3RIZWlnaHQiLCJzdHJpbmdzIiwib3B0aW9uc0RvdHMiLCJjaG9yZEJveERvdHNDb250YWluZXIiLCJjaG9yZEJveERvdHMiLCJkb3QiLCJkb3RHcm91cCIsImRvdENvbnRhaW5lciIsImNpcmNsZSIsImZyZXQiLCJyZW5kZXIiLCJjbGVhciIsImdlbmVyYXRlQ2hvcmRCb3hCYXNlIiwiZ2VuZXJhdGVDaG9yZEJveFRpdGxlIiwiZ2VuZXJhdGVjaG9yZEJveEZyZXRMYWJlbHMiLCJnZW5lcmF0ZWNob3JkQm94U3RyaW5nTGFiZWxzIiwiZ2VuZXJhdGVDaG9yZGJveEJvZHkiLCJnZW5lcmF0ZWNob3JkQm94TnV0IiwiZ2VuZXJhdGVjaG9yZEJveEZyZXRzIiwiZ2VuZXJhdGVDaG9yZEJveFN0cmluZ3MiLCJnZW5lcmF0ZUNob3JkQm94RG90cyIsInN2ZyIsIkJ1ZmZlciJdLCJzb3VyY2VSb290IjoiIn0=