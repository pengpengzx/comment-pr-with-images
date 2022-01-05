/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 927:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 273:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var core = __nccwpck_require__(927);
var github = __nccwpck_require__(273);
try {
    var images = core.getInput('images');
    var imgArr = JSON.parse(images);
    var str_1 = '';
    if (Array.isArray(imgArr) && imgArr.length) {
        str_1 += "<strong>visual testing</strong>\n\n    | Actual | Diff | Expected |\n    |:------:|:----:|:--------:|\n    ";
        imgArr.forEach(function (_a) {
            var actual = _a.actual, diff = _a.diff, expected = _a.expected;
            str_1 += "| " + actual.name + " | " + diff.name + " | " + expected.name + " |\n    | ![" + actual.name + "](" + actual.link + ") | ![" + diff.name + "](" + diff.link + ") | ![" + expected.name + "](" + expected.link + ") |";
        });
        str_1 += '\n\n';
        str_1 = "\n    <details>\n    <p>\n    " + str_1 + "\n    </p>\n    </details>\n    ";
        var _a = github.context.repo, owner = _a.owner, repo = _a.repo;
        github.rest.issues.createComment({
            owner: owner,
            repo: repo,
            issue_number: 1,
            body: str_1
        });
    }
}
catch (error) {
    core.setFailed(error.message);
}

})();

module.exports = __webpack_exports__;
/******/ })()
;