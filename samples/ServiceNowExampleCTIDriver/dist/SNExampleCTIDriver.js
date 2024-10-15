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

/***/ "./src/SNExampleCTIDriver.ts":
/*!***********************************!*\
  !*** ./src/SNExampleCTIDriver.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass SNExampleCTIDriver {\n    constructor(ccaaSSDKInstance) {\n        if (!ccaaSSDKInstance) {\n            throw new Error('ccaaSSDKInstance cannot be null or undefined');\n        }\n        this.ccaaSSDKInstance = ccaaSSDKInstance;\n    }\n    initialize() {\n        let isServiceNowPresent = typeof window.openFrameAPI !== 'undefined';\n        if (isServiceNowPresent === false) {\n            const openCTIurlPath = `/scripts/openframe/latest/openFrameAPI.min.js`;\n            const servicenoworgdomain = window.location.ancestorOrigins[0];\n            const source = `${servicenoworgdomain}${openCTIurlPath}`;\n            const sourceResult = SNExampleCTIDriver.loadScript(source);\n            return sourceResult;\n        }\n        return Promise.resolve(true);\n    }\n    setSoftPhonePanelWidth(width) {\n        window.openFrameAPI.setWidth(width);\n    }\n    setSoftPhonePanelHeight(height) {\n        window.openFrameAPI.setHeight(height);\n    }\n    setSoftPhonePanelVisibility(visible) {\n        if (visible) {\n            window.openFrameAPI.show();\n        }\n        else {\n            window.openFrameAPI.hide();\n        }\n    }\n    conversationReady(conversationData) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {\n                reject(new Error('Customer data for search is missing'));\n            }));\n        });\n    }\n    endConversation(conversationId) {\n        throw new Error('Method not implemented.');\n    }\n    onClickToDial(callbackFuntion) {\n        throw new Error('Method not implemented.');\n    }\n    static loadScript(source) {\n        return new Promise((resolve, reject) => {\n            const script = document.createElement('script');\n            script.type = 'text/javascript';\n            script.async = true;\n            script.src = source;\n            script.onload = function () {\n                resolve(true);\n            };\n            script.onerror = function () {\n                reject(new Error(`Error in loading ${source}`));\n            };\n            document.getElementsByTagName('head')[0].appendChild(script);\n        });\n    }\n}\nwindow.CCaaS = window.CCaaS || {};\nif (!window.CCaaS.CTIDriver) {\n    window.CCaaS.CTIDriver = SNExampleCTIDriver;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SNExampleCTIDriver);\n\n\n//# sourceURL=webpack://sn-example-ctidriver/./src/SNExampleCTIDriver.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/SNExampleCTIDriver.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;