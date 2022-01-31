/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/common-iform/dist/cjs/src/component/form/Button.js":
/*!*************************************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/component/form/Button.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\nclass Button extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.$style = new common_iutils_1.IElement('style')\n            .setTextContent(`\n          .button {\n            height: 30px;\n            background: #00A6FF;\n            border: 0;\n            color: white;\n            transition: 0.2s;\n            cursor: pointer;\n            border-radius: 2px;\n            font-family : inherit;\n          }\n          .button.large {\n            height: 35px;\n          }\n          .button.small {\n            height: 25px;\n          }\n          \n          .button:hover {\n            background: #50C2FF;\n            color: white;\n          }\n        `)\n            .getElement();\n        this.$button = new common_iutils_1.IElement('input')\n            .setAttribute('class', 'button')\n            .setAttribute('type', 'button')\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$button);\n    }\n    static get observedAttributes() {\n        return ['name', 'size', 'style'];\n    }\n    // connectedCallback() {\n    //   this.setAttribute('size', 'normal');\n    // }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'name':\n                this.$button.setAttribute('value', newValue);\n                break;\n            case 'size':\n                if (newValue === 'large') {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.add('large');\n                }\n                else if (newValue === 'small') {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.add('small');\n                }\n                else {\n                    this.$button.classList.remove('large');\n                    this.$button.classList.remove('small');\n                }\n                break;\n        }\n    }\n    setName(name) {\n        this.setAttribute('name', name);\n        return this;\n    }\n    setSize(size) {\n        this.setAttribute('size', size);\n        return this;\n    }\n}\nexports[\"default\"] = Button;\ncustomElements.define('inte-button', Button);\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iform/dist/cjs/src/component/form/Button.js?");

/***/ }),

/***/ "./node_modules/common-iform/dist/cjs/src/component/form/Input.js":
/*!************************************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/component/form/Input.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\nclass Input extends HTMLInputElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.$input = document.createElement('input');\n        this.$style = new common_iutils_1.IElement('style')\n            .setTextContent(`\n        input {\n          height: 30px;\n          min-width: 120px;\n          border-radius: 2px;\n          border: 1px solid #00A6FF;\n        }\n      `)\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$input);\n    }\n    static get observedAttributes() {\n        return ['type', 'style'];\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'type':\n                this.$input.setAttribute('type', newValue);\n                break;\n        }\n    }\n}\nexports[\"default\"] = Input;\ncustomElements.define('inte-input', Input, { extends: 'input' });\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iform/dist/cjs/src/component/form/Input.js?");

/***/ }),

/***/ "./node_modules/common-iform/dist/cjs/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/common-iform/dist/cjs/src/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Input = exports.Button = void 0;\nconst Button_1 = __webpack_require__(/*! ./component/form/Button */ \"./node_modules/common-iform/dist/cjs/src/component/form/Button.js\");\nexports.Button = Button_1.default;\nconst Input_1 = __webpack_require__(/*! ./component/form/Input */ \"./node_modules/common-iform/dist/cjs/src/component/form/Input.js\");\nexports.Input = Input_1.default;\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iform/dist/cjs/src/index.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/IElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/IElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass IElement {\n    constructor(tag) {\n        this.$element = document.createElement(tag);\n    }\n    setAttribute(name, attribute) {\n        this.$element.setAttribute(name, attribute);\n        return this;\n    }\n    append(...nodes) {\n        this.$element.append(...nodes);\n        return this;\n    }\n    appendChild(node) {\n        this.$element.append(node);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n    clearChildren() {\n        this.$element.replaceChildren();\n        return this;\n    }\n    setParent(node) {\n        node.appendChild(this.$element);\n        return this;\n    }\n    setTextContent(text) {\n        this.$element.textContent = text;\n        return this;\n    }\n}\nexports[\"default\"] = IElement;\n;\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iutils/dist/cjs/utils/IElement.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/IStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/IStyle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass IStyle {\n    constructor($element) {\n        this.$element = $element;\n    }\n    width(value) {\n        this.$element.style.width = value;\n        return this;\n    }\n    height(value) {\n        this.$element.style.height = value;\n        return this;\n    }\n    color(value) {\n        this.$element.style.color = value;\n        return this;\n    }\n    left(value) {\n        this.$element.style.left = value;\n        return this;\n    }\n    right(value) {\n        this.$element.style.right = value;\n        return this;\n    }\n    top(value) {\n        this.$element.style.top = value;\n        return this;\n    }\n    bottom(value) {\n        this.$element.style.bottom = value;\n        return this;\n    }\n    transform(value) {\n        this.$element.style.transform = value;\n        return this;\n    }\n    opacity(value) {\n        this.$element.style.opacity = value;\n        return this;\n    }\n    background(value) {\n        this.$element.style.background = value;\n        return this;\n    }\n    display(value) {\n        this.$element.style.display = value;\n        return this;\n    }\n    flexDirection(value) {\n        this.$element.style.flexDirection = value;\n        return this;\n    }\n    justifyContent(value) {\n        this.$element.style.justifyContent = value;\n        return this;\n    }\n    alignItems(value) {\n        this.$element.style.alignItems = value;\n        return this;\n    }\n    margin(value) {\n        this.$element.style.margin = value;\n        return this;\n    }\n    marginTop(value) {\n        this.$element.style.marginTop = value;\n        return this;\n    }\n    marginBottom(value) {\n        this.$element.style.marginBottom = value;\n        return this;\n    }\n    marginLeft(value) {\n        this.$element.style.marginLeft = value;\n        return this;\n    }\n    marginRight(value) {\n        this.$element.style.marginRight = value;\n        return this;\n    }\n    padding(value) {\n        this.$element.style.padding = value;\n        return this;\n    }\n    paddingTop(value) {\n        this.$element.style.paddingTop = value;\n        return this;\n    }\n    paddingBottom(value) {\n        this.$element.style.paddingBottom = value;\n        return this;\n    }\n    paddingRight(value) {\n        this.$element.style.paddingRight = value;\n        return this;\n    }\n    paddingLeft(value) {\n        this.$element.style.paddingLeft = value;\n        return this;\n    }\n    border(value) {\n        this.$element.style.border = value;\n        return this;\n    }\n    borderTop(value) {\n        this.$element.style.borderTop = value;\n        return this;\n    }\n    borderBottom(value) {\n        this.$element.style.borderBottom = value;\n        return this;\n    }\n    borderRight(value) {\n        this.$element.style.borderRight = value;\n        return this;\n    }\n    borderLeft(value) {\n        this.$element.style.borderLeft = value;\n        return this;\n    }\n    borderRadius(value) {\n        this.$element.style.borderRadius = value;\n        return this;\n    }\n    transition(value) {\n        this.$element.style.transition = value;\n        return this;\n    }\n    position(value) {\n        this.$element.style.position = value;\n        return this;\n    }\n    minWidth(value) {\n        this.$element.style.minWidth = value;\n        return this;\n    }\n    minHeight(value) {\n        this.$element.style.minHeight = value;\n        return this;\n    }\n    boxShadow(value) {\n        this.$element.style.boxShadow = value;\n        return this;\n    }\n    transformOrigin(value) {\n        this.$element.style.transformOrigin = value;\n        return this;\n    }\n    cursor(value) {\n        this.$element.style.cursor = value;\n        return this;\n    }\n    whiteSpace(value) {\n        this.$element.style.whiteSpace = value;\n        return this;\n    }\n    setStyle(value) {\n        this.$element.setAttribute('style', value);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n}\nexports[\"default\"] = IStyle;\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iutils/dist/cjs/utils/IStyle.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IStyle = exports.IElement = void 0;\nconst IElement_1 = __webpack_require__(/*! ./IElement */ \"./node_modules/common-iutils/dist/cjs/utils/IElement.js\");\nexports.IElement = IElement_1.default;\nconst IStyle_1 = __webpack_require__(/*! ./IStyle */ \"./node_modules/common-iutils/dist/cjs/utils/IStyle.js\");\nexports.IStyle = IStyle_1.default;\n\n\n//# sourceURL=webpack://common-icard/./node_modules/common-iutils/dist/cjs/utils/index.js?");

/***/ }),

/***/ "./website/index.css":
/*!***************************!*\
  !*** ./website/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://common-icard/./website/index.css?");

/***/ }),

/***/ "./src/component/card/Card.ts":
/*!************************************!*\
  !*** ./src/component/card/Card.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\nclass Card extends HTMLElement {\n    constructor(props) {\n        var _a;\n        super();\n        this.attachShadow({ mode: \"open\" });\n        this.$style = document.createElement('style');\n        this.$slotHeader = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('slot')\n            .setAttribute('name', 'card-header-slot')\n            .getElement();\n        this.$slotBody = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('slot')\n            .setAttribute('name', 'card-body-slot')\n            .getElement();\n        this.$cardHeaderContent = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .appendChild(this.$slotHeader)\n            .setAttribute('class', 'card-header-content')\n            .getElement();\n        this.$cardBodyContent = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('span')\n            .appendChild(this.$slotBody)\n            .setAttribute('class', 'card-body-content')\n            .getElement();\n        this.$cardHeader = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .appendChild(this.$cardHeaderContent)\n            .setAttribute('class', 'card-header')\n            .getElement();\n        this.$cardBody = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .appendChild(this.$cardBodyContent)\n            .setAttribute('class', 'card-body')\n            .getElement();\n        this.$cardContainer = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .append(this.$cardHeader, this.$cardBody)\n            .setAttribute('class', 'card-container')\n            .getElement();\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.append(this.initStyle(), this.$cardContainer);\n        (props === null || props === void 0 ? void 0 : props.body) && this.setBody(props.body);\n        (props === null || props === void 0 ? void 0 : props.header) && this.setHeader(props.header);\n    }\n    static get observedAttributes() {\n        return ['style'];\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'style':\n                this.updateStyle(newValue);\n                break;\n        }\n    }\n    updateStyle(style) {\n        this.$style.textContent = this.$style.textContent + style;\n    }\n    initStyle() {\n        this.$style.textContent = `\n        .card-container {\n          width: 100%;\n          border-radius: 2px;\n\n          display: flex;\n          flex-direction: column;\n          border: 1px solid #eee;\n          background: white;\n        }\n\n        .card-header {\n            padding: 8px;\n            border-bottom: 1px solid #eee;\n        }\n        .card-header-content {\n        }\n        .card-body {\n            padding: 8px;\n        }\n        .card-body-content {\n          font-size: 14px;\n          color: #333;\n        }\n    `;\n        return this.$style;\n    }\n    get body() {\n        return this.$cardBodyContent;\n    }\n    setBody(content) {\n        this.$slotBody.replaceChildren();\n        new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .setAttribute('slot', 'card-body-slot')\n            .append(content)\n            .setParent(this.$slotBody)\n            .getElement();\n        return this;\n    }\n    get header() {\n        return this.$cardHeaderContent;\n    }\n    setHeader(content) {\n        this.$slotHeader.replaceChildren();\n        new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div')\n            .setAttribute('slot', 'card-header-slot')\n            .append(content)\n            .setParent(this.$slotHeader)\n            .getElement();\n        return this;\n    }\n}\ncustomElements.define('inte-card', Card);\n\n\n//# sourceURL=webpack://common-icard/./src/component/card/Card.ts?");

/***/ }),

/***/ "./website/app.ts":
/*!************************!*\
  !*** ./website/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./website/index.css\");\n/* harmony import */ var _cardExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardExample */ \"./website/cardExample.ts\");\n/* harmony import */ var common_iform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-iform */ \"./node_modules/common-iform/dist/cjs/src/index.js\");\n/* harmony import */ var _src_component_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/component/card/Card */ \"./src/component/card/Card.ts\");\n\n\n\n\nnew common_iform__WEBPACK_IMPORTED_MODULE_2__.Button();\nconst $cardWrapper = document.querySelector('.card-wrapper');\nconst $newCardButton = document.querySelector('#newCard');\nconst $setBodyButton = document.querySelector('#cardSetBody');\nconst $setHeaderButton = document.querySelector('#cardSetHeader');\nconst $card = new _src_component_card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n$newCardButton.addEventListener('click', () => {\n    $cardWrapper.append($card);\n});\n$setBodyButton.addEventListener('click', () => {\n    $card.setBody('JavaScript (JS)는 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다. 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만, Node.js, Apache CouchDB, Adobe Acrobat처럼 많은 비 브라우저 환경에서도 사용하고 있습니다.');\n});\n$setHeaderButton.addEventListener('click', () => {\n    $card.setHeader('I`m Header');\n});\n(0,_cardExample__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://common-icard/./website/app.ts?");

/***/ }),

/***/ "./website/cardExample.ts":
/*!********************************!*\
  !*** ./website/cardExample.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeCardExample)\n/* harmony export */ });\nfunction makeCardExample() {\n}\n\n\n//# sourceURL=webpack://common-icard/./website/cardExample.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./website/app.ts");
/******/ 	
/******/ })()
;