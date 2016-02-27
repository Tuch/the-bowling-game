/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	// react style
	
	// redux style
	
	
	var _index = __webpack_require__(24);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(26);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _virtualDom = __webpack_require__(15);
	
	var vdom = _interopRequireWildcard(_virtualDom);
	
	var _app = __webpack_require__(8);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _appReducer = __webpack_require__(6);
	
	var _appReducer2 = _interopRequireDefault(_appReducer);
	
	var _actions = __webpack_require__(5);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	    function App(state) {
	        _classCallCheck(this, App);
	
	        this.initState(state).initAppNode().render().initGameTimer().assignEvents();
	    }
	
	    _createClass(App, [{
	        key: 'initState',
	        value: function initState(state) {
	            this.state = state;
	
	            return this;
	        }
	    }, {
	        key: 'initAppNode',
	        value: function initAppNode() {
	            this.appNode = document.getElementById('app');
	
	            return this;
	        }
	    }, {
	        key: 'initGameTimer',
	        value: function initGameTimer() {
	            var _this = this;
	
	            this.gameTimer && clearInterval(this.gameTimer);
	
	            this.gameTimer = setInterval(function () {
	                _this.reduceAction(actions.tickTimer());
	                _this.render();
	            }, 1000);
	
	            return this;
	        }
	    }, {
	        key: 'reduceAction',
	        value: function reduceAction(action) {
	            this.state = (0, _appReducer2.default)(this.state, action);
	
	            return this;
	        }
	    }, {
	        key: 'assignEvents',
	        value: function assignEvents() {
	            document.addEventListener('click', this.onDocumentClick.bind(this));
	            document.addEventListener('focusout', this.onDocumentFocusOut.bind(this));
	
	            return this;
	        }
	    }, {
	        key: 'onDocumentClick',
	        value: function onDocumentClick(e) {
	            var key = '';
	
	            if (key = e.target.getAttribute('data-main')) {
	                this.onRollClick(key);
	            } else if (key = e.target.getAttribute('data-game-form')) {
	                this.onGameFormClick(key);
	            } else if (key = e.target.getAttribute('data-modal')) {
	                this.onModalClick(key);
	            } else if (key = e.target.getAttribute('data-final-results')) {
	                this.onFinalResultsClick(key);
	            } else {
	                return;
	            }
	
	            this.render();
	        }
	    }, {
	        key: 'onDocumentFocusOut',
	        value: function onDocumentFocusOut(e) {
	            var key = '';
	
	            if (key = e.target.getAttribute('data-game-form')) {
	                this.onGameFormFocusOut(key, {
	                    index: parseInt(e.target.getAttribute('data-index')),
	                    value: e.target.value
	                });
	            } else {
	                return;
	            }
	
	            this.render();
	        }
	    }, {
	        key: 'onGameFormFocusOut',
	        value: function onGameFormFocusOut(key, data) {
	            switch (key) {
	                case 'input':
	                    this.reduceAction(actions.updatePlayerName(data));
	                    break;
	            }
	        }
	    }, {
	        key: 'onFinalResultsClick',
	        value: function onFinalResultsClick(key) {
	            switch (key) {
	                case 'new':
	                    this.reduceAction(actions.newGame());
	                    break;
	            }
	        }
	    }, {
	        key: 'onRollClick',
	        value: function onRollClick(key) {
	            switch (key) {
	                case 'roll':
	                    this.reduceAction(actions.throwBall());
	
	                    if (!this.state.game.inProgress) {
	                        this.reduceAction(actions.endGame());
	                    }
	                    break;
	            }
	        }
	    }, {
	        key: 'onGameFormClick',
	        value: function onGameFormClick(key) {
	            switch (key) {
	                case 'play':
	                    this.reduceAction(actions.playGame());
	                    break;
	            }
	        }
	    }, {
	        key: 'onModalClick',
	        value: function onModalClick(key) {
	            switch (key) {
	                case 'close':
	                    this.reduceAction(actions.closeModal());
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            requestAnimationFrame(function () {
	                var HTML = (0, _app2.default)(_this2.state);
	                var vNode = vdom.vNodeFromHTML(HTML);
	
	                if (_this2.vNode && _this2.node) {
	                    vdom.applyPatch(_this2.node, vdom.diff(_this2.vNode, vNode));
	                } else {
	                    _this2.node = vdom.createElement(vNode);
	                    _this2.appNode.innerHTML = '';
	                    _this2.appNode.appendChild(_this2.node);
	                }
	
	                _this2.vNode = vNode;
	                _this2.fillNodes();
	            });
	
	            return this;
	        }
	    }, {
	        key: 'fillNodes',
	        value: function fillNodes() {
	            this.timerNode = document.querySelectorAll('.head .left-col .cell')[0];
	
	            return this;
	        }
	    }]);
	
	    return App;
	}();
	
	new App((0, _appReducer2.default)());

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sumArray = sumArray;
	function sumArray(arr) {
	    return arr.reduce(function (acc, val) {
	        return acc + parseInt(val || 0, 10);
	    }, 0);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TICK_TIMER = exports.TICK_TIMER = 'TICK_TIMER';
	var THROW_BALL = exports.THROW_BALL = 'THROW_BALL';
	var CLOSE_MODAL = exports.CLOSE_MODAL = 'CLOSE_MODAL';
	var PLAY_GAME = exports.PLAY_GAME = 'PLAY_GAME';
	var NEW_GAME = exports.NEW_GAME = 'NEW_GAME';
	var END_GAME = exports.END_GAME = 'END_GAME';
	var UPDATE_PLAYER_NAME = exports.UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tickTimer = exports.closeModal = exports.endGame = exports.newGame = exports.playGame = exports.throwBall = exports.updatePlayerName = undefined;
	
	var _types = __webpack_require__(4);
	
	var types = _interopRequireWildcard(_types);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var updatePlayerName = exports.updatePlayerName = function updatePlayerName(data) {
	    return {
	        type: types.UPDATE_PLAYER_NAME,
	        data: data
	    };
	};
	
	var throwBall = exports.throwBall = function throwBall() {
	    return {
	        type: types.THROW_BALL
	    };
	};
	
	var playGame = exports.playGame = function playGame() {
	    return {
	        type: types.PLAY_GAME
	    };
	};
	
	var newGame = exports.newGame = function newGame() {
	    return {
	        type: types.NEW_GAME
	    };
	};
	
	var endGame = exports.endGame = function endGame() {
	    return {
	        type: types.END_GAME
	    };
	};
	
	var closeModal = exports.closeModal = function closeModal() {
	    return {
	        type: types.CLOSE_MODAL
	    };
	};
	
	var tickTimer = exports.tickTimer = function tickTimer() {
	    return {
	        type: types.TICK_TIMER
	    };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _types = __webpack_require__(4);
	
	var types = _interopRequireWildcard(_types);
	
	var _helpers = __webpack_require__(3);
	
	var _modalReducerCreater = __webpack_require__(41);
	
	var _modalReducerCreater2 = _interopRequireDefault(_modalReducerCreater);
	
	var _gameReducerCreater = __webpack_require__(7);
	
	var _gameReducerCreater2 = _interopRequireDefault(_gameReducerCreater);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var modalReducer = (0, _modalReducerCreater2.default)(types);
	var gameReducer = (0, _gameReducerCreater2.default)(types);
	
	function createTable(state) {
	    var rows = [];
	    var row = {
	        isHead: true,
	        cols: state.frames.map(function (frame, index) {
	            return {
	                text: frame.title,
	                isRight: index === state.frames.length - 1,
	                isTop: true
	            };
	        })
	    };
	
	    row.cols.unshift({ text: state.diffTime, isLeft: true, isTop: true });
	
	    rows.push(row);
	
	    var pRows = state.players.map(function (player, pIndex) {
	        var cols = state.frames.map(function (frame, fIndex) {
	            var rolls = frame[pIndex];
	            var cell = {
	                0: rolls[0] ? rolls[0].title : '',
	                1: rolls[1] ? rolls[1].title : '',
	                total: rolls.total,
	                isRight: fIndex === state.frames.length - 1,
	                isBottom: pIndex === state.players.length - 1,
	                isScores: true
	            };
	
	            return cell;
	        });
	
	        cols.unshift({
	            text: player,
	            isLeft: true,
	            isBottom: pIndex === state.players.length - 1
	        });
	
	        return { cols: cols };
	    });
	
	    rows.push.apply(rows, _toConsumableArray(pRows));
	
	    return { rows: rows };
	}
	
	function createFinalResults(state) {
	    return state.players.map(function (player, index) {
	        return {
	            name: player,
	            scores: (0, _helpers.sumArray)(state.frames.map(function (frame) {
	                return frame[index].total;
	            }))
	        };
	    }).sort(function (a, b) {
	        return b.scores - a.scores;
	    });
	}
	
	function getInitialState() {
	    return {};
	}
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? getInitialState() : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    state.game = gameReducer(state.game, action);
	
	    switch (action.type) {
	        case types.END_GAME:
	            state.finalResults = createFinalResults(state.game);
	            break;
	        default:
	            state.table = createTable(state.game);
	            break;
	    }
	
	    state = modalReducer(state, action);
	
	    return state;
	}
	
	exports.default = reducer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _names = __webpack_require__(25);
	
	var _names2 = _interopRequireDefault(_names);
	
	var _helpers = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FRAMES_LENGTH = 10;
	
	function range(length) {
	    return Array(length).join(' ').split(' ').map(function (v, i) {
	        return i;
	    });
	}
	
	function pad(value, length) {
	    value = String(value);
	    length = length || 2;
	
	    while (value.length < length) {
	        value = '0' + value;
	    }
	
	    return value;
	}
	
	function calcDiffTime(state) {
	    var totalSeconds = Math.floor((new Date() - state.startTime) / 1000),
	        rightSide = totalSeconds % 60,
	        leftSide = (totalSeconds - rightSide) / 60;
	
	    state.diffTime = pad(leftSide, 2) + ':' + pad(rightSide, 2);
	
	    return state;
	}
	
	function getRandomName() {
	    return _names2.default[rand(_names2.default.length - 1)];
	}
	
	function rand(max) {
	    return Math.round(Math.random() * max);
	}
	
	function throwBall(pins) {
	    var _Math;
	
	    var values = [rand(pins)];
	
	    return (_Math = Math).max.apply(_Math, values);
	}
	
	function getInitialState(players) {
	    var state = {
	        players: players || [getRandomName(), getRandomName()],
	        currentPlayer: 0,
	        currentFrame: 0,
	        startTime: new Date(),
	        diffTime: '00:00',
	        inProgress: true,
	        lastResult: ''
	    };
	
	    state.frames = createFrames(state);
	
	    return state;
	}
	
	function createFrames(state) {
	    return range(FRAMES_LENGTH).map(function (val) {
	        var frame = {
	            title: val + 1
	        };
	
	        state.players.reduce(function (acc, player, index) {
	            acc[index] = [];
	            acc[index].total = '';
	
	            return acc;
	        }, frame);
	
	        return frame;
	    });
	}
	
	function nextPlayer(state) {
	    if (isLastFrame(state) && isLastPlayer(state)) {
	        state.inProgress = false;
	    } else {
	        var player = state.currentPlayer;
	
	        state.currentPlayer = player = player === state.players.length - 1 ? 0 : player + 1;
	
	        if (player === 0) {
	            state.currentFrame = state.currentFrame < state.frames.length - 1 ? state.currentFrame + 1 : state.currentFrame;
	        }
	    }
	
	    return state;
	}
	
	function getBonusFrames(state) {
	    var frames = state.frames.slice(Math.max(0, state.currentFrame - 2), state.currentFrame + 1).map(function (frame) {
	        return frame[state.currentPlayer];
	    });
	
	    var currFrame = frames[frames.length - 1];
	    frames.length--;
	
	    var r = 2 - currFrame.length;
	    var bonusFrames = [];
	
	    while (r && frames.length) {
	        var frame = frames.pop();
	
	        if (r === 1 && frame[0].value === 10 || r === 2 && frame.total === 10) {
	            bonusFrames.unshift(frame);
	        }
	
	        r -= frame.length;
	    }
	
	    return bonusFrames;
	}
	
	function isLastPlayer(state) {
	    return state.players.length - 1 === state.currentPlayer;
	}
	
	function isLastFrame(state) {
	    return state.currentFrame === FRAMES_LENGTH - 1;
	}
	
	function onTickTimer(state) {
	    return calcDiffTime(state);
	}
	
	function onThrowBall(state) {
	    if (!state.inProgress) {
	        return state;
	    }
	
	    var frame = state.frames[state.currentFrame][state.currentPlayer];
	    var pins = FRAMES_LENGTH;
	
	    if (frame[0] && pins !== frame[0].value) {
	        pins -= frame[0].value;
	    }
	
	    var bonusFrames = getBonusFrames(state);
	    var value = Math.max(throwBall(pins), throwBall(pins));
	
	    bonusFrames.forEach(function (frame) {
	        frame.total += value;
	    });
	
	    var roll = { value: value };
	
	    frame.push(roll);
	
	    var rollsSum = (0, _helpers.sumArray)(frame.map(function (roll) {
	        return roll.value;
	    }));
	    frame.total = rollsSum;
	
	    if (frame.length === 1) {
	        if (roll.value === 10) {
	            roll.title = 'X';
	
	            if (!isLastFrame(state)) {
	                nextPlayer(state);
	            }
	        } else {
	            roll.title = roll.value;
	        }
	    } else if (frame.length === 2) {
	        if (frame.total === 10) {
	            roll.title = '/';
	        } else {
	            roll.title = roll.value;
	        }
	
	        if (isLastFrame(state) && rollsSum >= 10) {} else {
	            nextPlayer(state);
	        }
	    } else if (frame.length === 3) {
	        roll.title = roll.value;
	
	        nextPlayer(state);
	    }
	
	    state.lastResult = value;
	
	    return state;
	}
	
	function onUpdatePlayerName(state, data) {
	    state.players[data.index] = data.value;
	    state.players = state.players.filter(function (player) {
	        return player;
	    });
	
	    if (!state.players.length) {
	        state.players.push(getRandomName());
	    }
	
	    state.frames = createFrames(state);
	
	    return state;
	}
	
	function onPlayGame(state) {
	    return getInitialState(state.players);
	}
	
	function reducerCreate(types) {
	    return function (state) {
	        var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        if (!state) {
	            state = getInitialState();
	        }
	
	        switch (action.type) {
	            case types.PLAY_GAME:
	                state = onPlayGame(state);
	                break;
	            case types.TICK_TIMER:
	                state = onTickTimer(state);
	                break;
	            case types.THROW_BALL:
	                state = onThrowBall(state);
	                break;
	            case types.UPDATE_PLAYER_NAME:
	                state = onUpdatePlayerName(state, action.data);
	                break;
	        }
	
	        return state;
	    };
	}
	
	exports.default = reducerCreate;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    return (0, _app4.default)({
	        tableHTML: app.table ? (0, _table2.default)(app.table) : '',
	        modalHTML: app.modal ? (0, _modal2.default)(app.modal) : '',
	        cn: _app2.default
	    });
	};
	
	var _table = __webpack_require__(14);

	var _table2 = _interopRequireDefault(_table);

	var _modal = __webpack_require__(12);

	var _modal2 = _interopRequireDefault(_modal);

	var _app = __webpack_require__(27);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(34);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (cell) {
	    return (0, _cell4.default)({
	        cell: cell,
	        cn: prepareCN(cell)
	    });
	};
	
	var _cell = __webpack_require__(28);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _cell3 = __webpack_require__(35);
	
	var _cell4 = _interopRequireDefault(_cell3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(state) {
	    var root = _cell2.default._root = [_cell2.default.root];
	
	    if (state.isLeft) {
	        root.push(_cell2.default.is_left);
	    }
	
	    if (state.isRight) {
	        root.push(_cell2.default.is_right);
	    }
	
	    if (state.isTop) {
	        root.push(_cell2.default.is_top);
	    }
	
	    if (state.isBottom) {
	        root.push(_cell2.default.is_bottom);
	    }
	
	    if (state.isScores) {
	        root.push(_cell2.default.is_scores);
	    }
	
	    _cell2.default._root = root.join(' ');
	
	    return _cell2.default;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (game) {
	    return (0, _finalResults4.default)({
	        cn: _finalResults2.default,
	        finalResults: game.finalResults
	    });
	};
	
	var _finalResults = __webpack_require__(29);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _finalResults3 = __webpack_require__(36);

	var _finalResults4 = _interopRequireDefault(_finalResults3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (game) {
	    return (0, _gameForm4.default)({
	        cn: _gameForm2.default,
	        players: game.players
	    });
	};
	
	var _gameForm = __webpack_require__(30);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(37);

	var _gameForm4 = _interopRequireDefault(_gameForm3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (modal) {
	    var contentHTML = '';
	
	    switch (modal.name) {
	        case 'game-form':
	            contentHTML = (0, _gameForm2.default)(modal.data);
	            break;
	        case 'final-results':
	            contentHTML = (0, _finalResults2.default)(modal.data);
	            break;
	    }
	
	    return (0, _modal4.default)({
	        cn: prepareCN(modal),
	        contentHTML: contentHTML
	    });
	};
	
	var _gameForm = __webpack_require__(11);
	
	var _gameForm2 = _interopRequireDefault(_gameForm);
	
	var _finalResults = __webpack_require__(10);
	
	var _finalResults2 = _interopRequireDefault(_finalResults);
	
	var _modal = __webpack_require__(31);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _modal3 = __webpack_require__(38);
	
	var _modal4 = _interopRequireDefault(_modal3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(modal) {
	    var root = [_modal2.default.root];
	
	    if (modal.style) {
	        root.push(_modal2.default['style_' + modal.style]);
	    } else {
	        root.push(_modal2.default.info);
	    }
	
	    if (!modal.isOpen) {
	        root.push('hidden');
	    }
	
	    _modal2.default._root = root.join(' ');
	
	    return _modal2.default;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (row) {
	    return (0, _row4.default)({
	        row: row,
	        cellsHTML: row.cols.map(_cell2.default).join(''),
	        cn: _row2.default
	    });
	};
	
	var _cell = __webpack_require__(9);

	var _cell2 = _interopRequireDefault(_cell);

	var _row = __webpack_require__(32);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(39);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (table) {
	    return (0, _table4.default)({
	        rowsHTML: table.rows.map(_row2.default).join(''),
	        cn: _table2.default
	    });
	};
	
	var _row = __webpack_require__(13);

	var _row2 = _interopRequireDefault(_row);

	var _table = __webpack_require__(33);

	var _table2 = _interopRequireDefault(_table);

	var _table3 = __webpack_require__(40);

	var _table4 = _interopRequireDefault(_table3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createVNodeFromNode = createVNodeFromNode;
	var propNames = {
	    value: true
	};
	
	function createNodeFromHTML(HTML) {
	    if (HTML.trim() === '') {
	        return document.createTextNode(HTML);
	    }
	
	    // Everything except iOS 7 Safari, IE 8/9, Andriod Browser 4.1/43
	    var parser = new DOMParser();
	    var doc = parser.parseFromString(HTML, 'text/html').documentElement;
	    var head = doc.childNodes[0];
	    var body = doc.childNodes[1];
	    var node = undefined;
	
	    if (node = head.childNodes[0]) {
	        head.removeChild(node);
	    } else if (node = body.childNodes[0]) {
	        body.removeChild(node);
	    }
	
	    return node;
	}
	
	function createVNodeFromNode(node) {
	    var vNode = {
	        type: node.nodeType
	    };
	
	    if (vNode.type === 3) {
	        vNode.content = node.textContent;
	    } else {
	        vNode.childrens = [];
	        vNode.attrs = {};
	        vNode.tag = node.tagName;
	
	        if (node.childNodes) {
	            for (var i = 0, length = node.childNodes.length; i < length; i++) {
	                vNode.childrens.push(createVNodeFromNode(node.childNodes[i]));
	            }
	        }
	
	        for (var i = 0, length = node.attributes.length; i < length; i++) {
	            var name = node.attributes[i].name;
	
	            if (name === 'class') {
	                name = 'className';
	            }
	
	            vNode.attrs[name] = node.attributes[i].value.replace(/\s\s+/g, ' ').trim().split(' ');
	        }
	    }
	
	    return vNode;
	}
	
	function joinAttrs(attrs) {
	    var result = [];
	
	    for (var key in attrs) {
	        var attr = attrs[key].join(' ');
	
	        if (key === 'className') {
	            key = 'class';
	        }
	
	        result.push(key + '="' + attr + '"');
	    }
	
	    return result.join(' ');
	}
	
	function createHTMLTag(vNode) {
	    var innerHTML = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	    var attrs = joinAttrs(vNode.attrs);
	
	    switch (vNode.type) {
	        case 3:
	            return '' + innerHTML;
	        default:
	            return '<' + vNode.tag + ' ' + attrs + '>' + innerHTML + '</' + vNode.tag + '>';
	    }
	}
	
	function renderHTML(vNode) {
	    var innerHTML = '';
	
	    if (vNode.type !== 3) {
	        for (var i = 0, length = vNode.childrens.length; i < length; i++) {
	            innerHTML += renderHTML(vNode.childrens[i]);
	        }
	    } else {
	        innerHTML = vNode.content;
	    }
	
	    return createHTMLTag(vNode, innerHTML);
	}
	
	var diff = exports.diff = function diff(vNode1, vNode2) {
	    if (vNode1 && !vNode2) {
	        return {
	            type: 'REMOVE_NODE'
	        };
	    } else if (!vNode1 && vNode2) {
	        return {
	            type: 'ADD_NODE',
	            vNode: vNode2
	        };
	    } else if (vNode1.tag !== vNode2.tag) {
	        return {
	            type: 'REPLACE_NODE',
	            vNode: vNode2
	        };
	    } else if (vNode1.type === 3 || vNode2.type === 3) {
	        if (vNode1.content !== vNode2.content) {
	            return {
	                type: 'REPLACE_NODE',
	                vNode: vNode2
	            };
	        }
	    } else {
	        var attrs = [];
	        var patch = {};
	
	        for (var key in vNode2.attrs) {
	            var attr1 = vNode1.attrs[key];
	            var attr2 = vNode2.attrs[key];
	
	            if (!attr1) {
	                attrs.push({
	                    type: 'SET',
	                    name: key,
	                    val: attr2.join(' ')
	                });
	            } else {
	                var attr1Val = attr1.join(' ');
	                var attr2Val = attr2.join(' ');
	
	                if (attr1Val !== attr2Val) {
	                    attrs.push({
	                        type: 'SET',
	                        name: key,
	                        val: attr2Val
	                    });
	                }
	            }
	        }
	
	        for (var key in vNode1.attrs) {
	            var attr2 = vNode2.attrs[key];
	
	            if (!attr2) {
	                attrs.push({
	                    type: 'REMOVE',
	                    name: key
	                });
	            }
	        }
	
	        for (var i = 0, length = vNode1.childrens.length; i < length; i++) {
	            var cDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);
	
	            if (cDiff) {
	                patch[i] = cDiff;
	            }
	        }
	
	        for (var i = 0, length = vNode2.childrens.length; i < length; i++) {
	            if (!vNode1.childrens[i]) {
	                var cDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);
	
	                if (cDiff) {
	                    patch[i] = cDiff;
	                }
	            }
	        }
	
	        if (attrs.length) {
	            patch.attrs = attrs;
	        }
	
	        if (Object.keys(patch).length) {
	            return patch;
	        }
	    }
	};
	
	function applyPatchOp(parentNode, node, op) {
	    switch (op.type) {
	        case 'ADD_NODE':
	            if (parentNode) {
	                parentNode.appendChild(createElement(op.vNode));
	            }
	            break;
	        case 'REMOVE_NODE':
	            if (parentNode) {
	                parentNode.removeChild(node);
	            }
	            break;
	        case 'REPLACE_NODE':
	            var newNode = createElement(op.vNode);
	
	            if (parentNode) {
	                parentNode.insertBefore(newNode, node);
	                parentNode.removeChild(node);
	            }
	
	            node = newNode;
	            break;
	    }
	
	    return node;
	}
	
	function applyAttrOps(node, ops) {
	    for (var i = 0, length = ops.length; i < length; i++) {
	        var op = ops[i];
	        var name = op.name;
	
	        if (name === 'className') {
	            name = 'class';
	        }
	
	        var isProp = propNames[name];
	
	        switch (op.type) {
	            case 'SET':
	                if (isProp) {
	                    node[name] = op.val;
	                } else {
	                    node.setAttribute(name, op.val);
	                }
	                break;
	            case 'REMOVE':
	                if (isProp) {
	                    node[name] = '';
	                } else {
	                    node.removeAttribute(name);
	                }
	                break;
	        }
	    }
	
	    return node;
	}
	
	var applyPatch = exports.applyPatch = function applyPatch(node, patches, parentNode) {
	    parentNode = parentNode || node.parentNode;
	
	    if (!patches) {
	        return node;
	    }
	
	    if (patches.type) {
	        node = applyPatchOp(parentNode, node, patches);
	    } else {
	        var childNodes = Array.prototype.slice.call(node.childNodes);
	
	        for (var key in patches) {
	            if (key === 'attrs') {
	                applyAttrOps(node, patches[key]);
	            } else {
	                applyPatch(childNodes[key], patches[key], node);
	            }
	        }
	    }
	
	    return node;
	};
	
	var createElement = exports.createElement = function createElement(vNode) {
	    return createNodeFromHTML(renderHTML(vNode));
	};
	
	var vNodeFromHTML = exports.vNodeFromHTML = function vNodeFromHTML(HTML) {
	    return createVNodeFromNode(createNodeFromHTML(HTML));
	};
	
	var applyVNode = exports.applyVNode = function applyVNode(node, vNode) {
	    return applyPatch(node, diff(createVNodeFromNode(node), vNode));
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n", "", {"version":3,"sources":["/./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,UAAU;IACV,0BAA0B;CAC7B;;AAED;IACI,uBAAuB;CAC1B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;CACf;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,gBAAgB;IAChB,aAAa;CAChB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,wBAAwB;IACxB,0BAA0B;CAC7B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE;IACE,WAAW;IACX,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF;;AAED;IACI;QACI,gCAAgC;KACnC;;IAED;QACI,mCAAmC;KACtC;;IAED;QACI,kCAAkC;KACrC;CACJ","file":"main.css","sourcesContent":["body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".app__root___3AvEu {\n}\n.app__image___6L2Cb {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___3LXHk {\n    position:relative;\n}\n\n.app__author___1_siw {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.app__author__top___3GHP1 { }\n\n.app__author__bottom___1l9p1 { }\n\n.app__button___1LwDt {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.app__button___1LwDt:hover {\n    box-shadow: 0px 2px 0px 0px #226793;\n    animation-name: app__shake___1ldeC;\n}\n\n.app__workspace___32Lgs {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n    box-shadow: 0 5px #226793;\n}\n\n.app__table___1dZrV {\n    width: 940px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n", "", {"version":3,"sources":["/./src/views/app/app.css"],"names":[],"mappings":"AAAA;CACC;AACD;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;;AAGD,6BAAgB;;AAEhB,gCAAmB;;AAEnB;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,oBAAoB;CACvB;;AAED;IACI,oCAAoC;IACpC,mCAAsB;CACzB;;AAED;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd","file":"app.css","sourcesContent":[".root {\n}\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.author__top { }\n\n.author__bottom { }\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.button:hover {\n    box-shadow: 0px 2px 0px 0px #226793;\n    animation-name: shake;\n}\n\n.workspace {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n    box-shadow: 0 5px #226793;\n}\n\n.table {\n    width: 940px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "app__root___3AvEu",
		"image": "app__image___6L2Cb",
		"button__wp": "app__button__wp___3LXHk",
		"author": "app__author___1_siw",
		"author__top": "app__author__top___3GHP1",
		"author__bottom": "app__author__bottom___1l9p1",
		"button": "app__button___1LwDt",
		"shake": "app__shake___1ldeC",
		"workspace": "app__workspace___32Lgs",
		"table": "app__table___1dZrV"
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell__root___2qM71 {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___2punu .cell__cell___3HQQJ {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___14Xzq {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.cell__is_right___3vlXI,\n.cell__is_left___14Xzq {\n    width: 200px\n}\n\n.cell__is_top___rIZil {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.cell__is_scores___2sVPn {\n    font-size: 12px;\n}\n\n.cell__cell___3HQQJ {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n}\n\n.cell__is_top___rIZil .cell__cell___3HQQJ {\n    background-color: transparent;\n    font-weight: 600;\n}\n\n.cell__top___7pA_P {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.cell__half___3Yrnz {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___11jK2 { }\n", "", {"version":3,"sources":["/./src/views/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;CACf;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,8BAA8B;IAC9B,iBAAiB;CACpB;;AAED;IACI,iCAAiC;CACpC;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.is_right,\n.is_left {\n    width: 200px\n}\n\n.is_top {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n}\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n\n.top {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "cell__root___2qM71",
		"is_right": "cell__is_right___3vlXI",
		"cell": "cell__cell___3HQQJ",
		"is_bottom": "cell__is_bottom___2punu",
		"is_left": "cell__is_left___14Xzq",
		"is_top": "cell__is_top___rIZil",
		"is_scores": "cell__is_scores___2sVPn",
		"top": "cell__top___7pA_P",
		"half": "cell__half___3Yrnz",
		"full": "cell__full___11jK2"
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".final-results__name___2rlYs {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n\n.final-results__winner___1TsN6 {\n    font-size:40px;\n    width: auto;\n}\n", "", {"version":3,"sources":["/./src/views/final-results/final-results.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,YAAY;CACf","file":"final-results.css","sourcesContent":[".name {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n\n.winner {\n    font-size:40px;\n    width: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"name": "final-results__name___2rlYs",
		"winner": "final-results__winner___1TsN6"
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".game-form__root___1dsTA { }\n\n.game-form__name___1Zwir {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n}\n\n.game-form__input___3pl9F {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.game-form__row___3tLVP {\n    margin: 0 10px;\n}\n\n.game-form__row___3tLVP:first-child {\n    margin-top: 1px;\n}\n", "", {"version":3,"sources":["/./src/views/game-form/game-form.css"],"names":[],"mappings":"AAAA,4BAAS;;AAET;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;CACtB;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,oBAAoB;IACpB,yCAAyC;CAC5C;;AAED;IACI,eAAe;CAClB;;AAED;IACI,gBAAgB;CACnB","file":"game-form.css","sourcesContent":[".root { }\n\n.name {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n}\n\n.input {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.row {\n    margin: 0 10px;\n}\n\n.row:first-child {\n    margin-top: 1px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "game-form__root___1dsTA",
		"name": "game-form__name___1Zwir",
		"input": "game-form__input___3pl9F",
		"row": "game-form__row___3tLVP"
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal__root___2oj79 {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.modal__close___1Otxo {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.modal__close___1Otxo:hover {\n    transform: rotate(90deg);\n}\n\n.modal__content___3-TyP {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.modal__style_info___1ik3J {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.modal__style_green___1jAZm {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.modal__style_orange___2VXMl {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.modal__style_red___1LPdx {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.modal__style_blue___1oBCL {\n    background: rgba(52, 152, 219, 0.95);\n}\n", "", {"version":3,"sources":["/./src/views/modal/modal.css"],"names":[],"mappings":"AAAA;IACI,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;CACjB;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC","file":"modal.css","sourcesContent":[".root {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.close:hover {\n    transform: rotate(90deg);\n}\n\n.content {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.style_info {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.style_green {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.style_orange {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.style_red {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.style_blue {\n    background: rgba(52, 152, 219, 0.95);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "modal__root___2oj79",
		"close": "modal__close___1Otxo",
		"content": "modal__content___3-TyP",
		"style_info": "modal__style_info___1ik3J",
		"style_green": "modal__style_green___1jAZm",
		"style_orange": "modal__style_orange___2VXMl",
		"style_red": "modal__style_red___1LPdx",
		"style_blue": "modal__style_blue___1oBCL"
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row__row___2-mh0.row__is_head___1F57P {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n", "", {"version":3,"sources":["/./src/views/row/row.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;CACpC","file":"row.css","sourcesContent":[".row.is_head {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"row": "row__row___2-mh0",
		"is_head": "row__is_head___1F57P"
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"table.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = [
		"Amos Medina",
		"Sammy Stokes",
		"Juanita Peters",
		"Joe Harmon",
		"Lola Douglas",
		"Carla Bennett",
		"Jodi Guzman",
		"Silvia Cruz",
		"Terry Webster",
		"Brooke Jenkins",
		"Alicia Austin",
		"Matt Barber",
		"Mildred Warner",
		"Maureen Hall",
		"Marianne Pena",
		"Phyllis Gross",
		"Freddie Lawrence",
		"Julius Holland",
		"Shaun Miles",
		"Joann Schneider",
		"Clinton Cummings",
		"Dana Luna",
		"Bernice Morales",
		"Debbie Nunez",
		"Carlos Weaver",
		"Darlene Matthews",
		"Tony Holloway",
		"Vernon Nguyen",
		"Timmy Wagner",
		"Garrett Clayton",
		"Bob Pearson",
		"Karen Tucker",
		"Lucia Stevens",
		"Doug Figueroa",
		"Harry Love",
		"Ashley Neal",
		"Beulah Wilkerson",
		"Vincent Casey",
		"Manuel Butler",
		"Robin Morrison",
		"Jackie Cook",
		"Domingo Terry",
		"Marlene Clark",
		"Donnie Hardy",
		"Cynthia Steele",
		"Norma Griffith",
		"Patsy Tran",
		"Shirley Ball",
		"Carol Silva",
		"Jody Fletcher",
		"Hector Mclaughlin",
		"Lucy Drake",
		"Tammy Baker",
		"Sherri Gibson",
		"Allan Briggs",
		"Jesse Frazier",
		"Erick Swanson",
		"Gretchen Vega",
		"Ramona Andrews",
		"Stacey Schmidt",
		"Toni Russell",
		"Florence Wise",
		"Elena Herrera",
		"Alfonso Williamson",
		"Bruce Houston",
		"Lynda Barker",
		"Penny Nichols",
		"Jacquelyn Nash",
		"Grace Hines",
		"Tara Rivera",
		"Cecelia Stevenson",
		"Rochelle Wright",
		"Jeanne Duncan",
		"Terry Porter",
		"Kay Graham",
		"Rafael Wells",
		"Maria Morton",
		"Angela Bryan",
		"Stuart Nelson",
		"Ron Cole",
		"Howard Ingram",
		"Wanda Colon",
		"Paulette West",
		"Ann Bradley",
		"Nancy Snyder",
		"Malcolm Park",
		"Reginald Rios",
		"Shelia Warren",
		"Terence Moore",
		"Antonia Patton",
		"Jennifer Martinez",
		"Noel Brewer",
		"Natalie Huff",
		"Dianne Sandoval",
		"Nichole Dawson",
		"Brandon Lucas",
		"Jordan Christensen",
		"Leah Castro",
		"Tomas Bass",
		"Krista Abbott"
	];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./app.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./final-results.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./final-results.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./game-form.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./game-form.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./modal.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./modal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./table.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./table.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.workspace ,'"> <div class="', cn.author ,'"> <div class="', cn.author__top ,'">by Alex AFONIN for</div> <div class="', cn.author__bottom ,'">Florian FEICHTINGER</div> </div> <div class="', cn.table ,'"> ', tableHTML ,' </div> </div> <div class="', cn.button__wp ,'"> <button class="', cn.button ,'" data-main="roll"> ROLL BALL!</button> </div> <div> ', modalHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,'"> <div class="', cn.cell ,'"> '); if (cell.text) { 
	p.push(' ', cell.text ,' '); } else { 
	p.push(' <div class="', top ,' clearfix"> <div class="cell-left ', cn.half ,'">I</div> <div class="cell-right ', cn.hald ,'">II</div> </div> <div class="cell-mid clearfix"> '); if (cell[0] === 'X') { 
	p.push(' <div class="', cn.full ,'>">X</div> '); } else { 
	p.push(' <div class="cell-left ', cn.half ,'">', cell[0] ,'</div> <div class="cell-right ', cn.half ,'">', cell[1] ,'</div> '); } 
	p.push(' </div> <div class="cell-bot"> <div class="cell-full">', cell.total ,'</div> </div> '); } 
	p.push(' </div> </div> ');}return p.join('');
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,'">BOWLING.JS</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', players.length ,'" value=""> </div> <div class="', cn.row ,'"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated bounceIn"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.row ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function createFinalResultsState() {
	    return {
	        name: 'final-results',
	        style: 'blue',
	        isOpen: false
	    };
	}
	
	function createGameFormState() {
	    return {
	        name: 'game-form',
	        style: 'blue',
	        isOpen: false
	    };
	}
	
	function getInitialModal(state) {
	    var modal = createGameFormState();
	    modal.isOpen = true;
	    modal.data = state.game;
	
	    return modal;
	}
	
	function reducerCreate(types) {
	    return function (state) {
	        var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var modal = state.modal = state.modal || getInitialModal(state);
	
	        switch (action.type) {
	            case types.CLOSE_MODAL:
	                modal.isOpen = false;
	                break;
	            case types.PLAY_GAME:
	                modal.isOpen = false;
	                break;
	            case types.END_GAME:
	                modal.data = state.game;
	                modal.isOpen = true;
	                break;
	            case types.NEW_GAME:
	                modal.data = state.game;
	                modal.isOpen = true;
	                break;
	        }
	
	        return state;
	    };
	}
	
	exports.default = reducerCreate;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjVlNzI4NTNhNjg1MDRiMDE2YmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlydHVhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL25hbWVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcz9lOTIxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcz9hMTFlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzP2ZlNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3M/YTNlZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3M/Y2VlZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzPzM5MDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzPzk2OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcz8yZjFjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzdCIsIndlYnBhY2s6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QUFWLEVBQThCO2FBQWIsK0RBQVMsa0JBQUk7O0FBQ2pDLGFBQUksUUFBUSxNQUFNLEtBQU4sR0FBYyxNQUFNLEtBQU4sSUFBZSxnQkFBZ0IsS0FBaEIsQ0FBZixDQURPOztBQUdqQyxpQkFBUSxPQUFPLElBQVA7QUFDSixrQkFBSyxNQUFNLFdBQU47QUFDRCx1QkFBTSxNQUFOLEdBQWUsS0FBZixDQURKO0FBRUEsdUJBRkE7QUFESixrQkFJUyxNQUFNLFNBQU47QUFDRCx1QkFBTSxNQUFOLEdBQWUsS0FBZixDQURKO0FBRUEsdUJBRkE7QUFKSixrQkFPUyxNQUFNLFFBQU47QUFDRCx1QkFBTSxJQUFOLEdBQWEsTUFBTSxJQUFOLENBRGpCO0FBRUksdUJBQU0sTUFBTixHQUFlLElBQWYsQ0FGSjtBQUdBLHVCQUhBO0FBUEosa0JBV1MsTUFBTSxRQUFOO0FBQ0QsdUJBQU0sSUFBTixHQUFhLE1BQU0sSUFBTixDQURqQjtBQUVJLHVCQUFNLE1BQU4sR0FBZSxJQUFmLENBRko7QUFHQSx1QkFIQTtBQVhKLFVBSGlDOztBQW9CakMsZ0JBQU8sS0FBUCxDQXBCaUM7TUFBOUIsQ0FEbUI7RUFBOUI7O21CQXlCZSxjIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjVlNzI4NTNhNjg1MDRiMDE2YmFcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBjbiBmcm9tICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgKiBhcyB2ZG9tIGZyb20gJy4vdmlydHVhbC1kb20uanMnO1xuXG4vLyByZWFjdCBzdHlsZVxuaW1wb3J0IGFwcCBmcm9tICcuL3ZpZXdzL2FwcC9hcHAuanMnO1xuLy8gcmVkdXggc3R5bGVcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXBwUmVkdWNlci5qcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vcmVkdWNlcnMvYWN0aW9ucy5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlKHN0YXRlKVxuICAgICAgICAgICAgLmluaXRBcHBOb2RlKClcbiAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICAgICAgLmluaXRHYW1lVGltZXIoKVxuICAgICAgICAgICAgLmFzc2lnbkV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRTdGF0ZSAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRBcHBOb2RlICgpIHtcbiAgICAgICAgdGhpcy5hcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRHYW1lVGltZXIgKCkge1xuICAgICAgICB0aGlzLmdhbWVUaW1lciAmJiBjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTtcblxuICAgICAgICB0aGlzLmdhbWVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudGlja1RpbWVyKCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVkdWNlQWN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ25FdmVudHMgKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25Eb2N1bWVudEZvY3VzT3V0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRDbGljayAoZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tYWluJykpIHtcbiAgICAgICAgICAgIHRoaXMub25Sb2xsQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1mb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25HYW1lRm9ybUNsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb2RhbENsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbmFsLXJlc3VsdHMnKSkge1xuICAgICAgICAgICAgdGhpcy5vbkZpbmFsUmVzdWx0c0NsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRGb2N1c091dCAoZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWZvcm0nKSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVGb3JtRm9jdXNPdXQoa2V5LCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtRm9jdXNPdXQgKGtleSwgZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudXBkYXRlUGxheWVyTmFtZShkYXRhKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmluYWxSZXN1bHRzQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLm5ld0dhbWUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUm9sbENsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JvbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudGhyb3dCYWxsKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmdhbWUuaW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmVuZEdhbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5wbGF5R2FtZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RhbENsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmNsb3NlTW9kYWwoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpbGxOb2RlcygpIHtcbiAgICAgICAgdGhpcy50aW1lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZCAubGVmdC1jb2wgLmNlbGwnKVswXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm5ldyBBcHAocmVkdWNlcigpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc3VtQXJyYXkgKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQodmFsIHx8IDAsIDEwKTtcbiAgICB9LCAwKTtcbn1cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oZWxwZXJzLmpzXG4gKiovIiwiZXhwb3J0IGxldCBUSUNLX1RJTUVSID0gJ1RJQ0tfVElNRVInO1xuZXhwb3J0IGxldCBUSFJPV19CQUxMID0gJ1RIUk9XX0JBTEwnO1xuZXhwb3J0IGxldCBDTE9TRV9NT0RBTCA9ICdDTE9TRV9NT0RBTCc7XG5leHBvcnQgbGV0IFBMQVlfR0FNRSA9ICdQTEFZX0dBTUUnO1xuZXhwb3J0IGxldCBORVdfR0FNRSA9ICdORVdfR0FNRSc7XG5leHBvcnQgbGV0IEVORF9HQU1FID0gJ0VORF9HQU1FJztcbmV4cG9ydCBsZXQgVVBEQVRFX1BMQVlFUl9OQU1FID0gJ1VQREFURV9QTEFZRVJfTkFNRSc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy90eXBlcy5qc1xuICoqLyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgbGV0IHVwZGF0ZVBsYXllck5hbWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9QTEFZRVJfTkFNRSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHRocm93QmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USFJPV19CQUxMXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgcGxheUdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuUExBWV9HQU1FXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbmV3R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ORVdfR0FNRVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IGVuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRU5EX0dBTUVcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkNMT1NFX01PREFMXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgdGlja1RpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRJQ0tfVElNRVJcbiAgICB9O1xufTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgc3VtQXJyYXkgfSBmcm9tICdoZWxwZXJzJztcbmltcG9ydCBtb2RhbFJlZHVjZXJDcmVhdGVyIGZyb20gJy4vbW9kYWxSZWR1Y2VyQ3JlYXRlcic7XG5pbXBvcnQgZ2FtZVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVJlZHVjZXJDcmVhdGVyJztcblxubGV0IG1vZGFsUmVkdWNlciA9IG1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVSZWR1Y2VyID0gZ2FtZVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IGZyYW1lLnRpdGxlLFxuICAgICAgICAgICAgaXNSaWdodDogaW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZSwgaXNUb3A6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgcEluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGZJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbcEluZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsLFxuICAgICAgICAgICAgICAgIGlzUmlnaHQ6IGZJbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzU2NvcmVzOiB0cnVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBjb2xzIH07XG4gICAgfSk7XG5cbiAgICByb3dzLnB1c2goLi4ucFJvd3MpO1xuXG4gICAgcmV0dXJuIHsgcm93cyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXIsXG4gICAgICAgICAgICBzY29yZXM6IHN1bUFycmF5KHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lKSA9PiBmcmFtZVtpbmRleF0udG90YWwpKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmVzIC0gYS5zY29yZXM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4geyB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbiA9IHt9KSB7XG4gICAgc3RhdGUuZ2FtZSA9IGdhbWVSZWR1Y2VyKHN0YXRlLmdhbWUsIGFjdGlvbik7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuRU5EX0dBTUU6XG4gICAgICAgICAgICBzdGF0ZS5maW5hbFJlc3VsdHMgPSBjcmVhdGVGaW5hbFJlc3VsdHMoc3RhdGUuZ2FtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RhdGUudGFibGUgPSBjcmVhdGVUYWJsZShzdGF0ZS5nYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGUgPSBtb2RhbFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IG5hbWVzIGZyb20gJy4vbmFtZXMuanNvbic7XG5pbXBvcnQgeyBzdW1BcnJheSB9IGZyb20gJ2hlbHBlcnMnO1xuXG5jb25zdCBGUkFNRVNfTEVOR1RIID0gMTA7XG5cbmZ1bmN0aW9uIHJhbmdlIChsZW5ndGgpIHtcbiAgICByZXR1cm4gQXJyYXkobGVuZ3RoKS5qb2luKCcgJykuc3BsaXQoJyAnKS5tYXAoKHYsIGkpID0+IGkpO1xufVxuXG5mdW5jdGlvbiBwYWQgKHZhbHVlLCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI7XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjYWxjRGlmZlRpbWUgKHN0YXRlKSB7XG4gICAgbGV0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBzdGF0ZS5zdGFydFRpbWUpIC8gMTAwMCksXG4gICAgICAgIHJpZ2h0U2lkZSA9IHRvdGFsU2Vjb25kcyAlIDYwLFxuICAgICAgICBsZWZ0U2lkZSA9ICh0b3RhbFNlY29uZHMgLSByaWdodFNpZGUpIC8gNjA7XG5cbiAgICBzdGF0ZS5kaWZmVGltZSA9IHBhZChsZWZ0U2lkZSwgMikgKyAnOicgKyBwYWQocmlnaHRTaWRlLCAyKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tTmFtZSAoKSB7XG4gICAgcmV0dXJuIG5hbWVzW3JhbmQobmFtZXMubGVuZ3RoIC0gMSldO1xufVxuXG5mdW5jdGlvbiByYW5kIChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZnVuY3Rpb24gdGhyb3dCYWxsIChwaW5zKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtyYW5kKHBpbnMpXTtcblxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKHBsYXllcnMpIHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHBsYXllcnM6IHBsYXllcnMgfHwgW2dldFJhbmRvbU5hbWUoKSwgZ2V0UmFuZG9tTmFtZSgpXSxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICBpblByb2dyZXNzOiB0cnVlLFxuICAgICAgICBsYXN0UmVzdWx0OiAnJ1xuICAgIH07XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGUucGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0UGxheWVyIChzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS5pblByb2dyZXNzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEZyYW1lID0gc3RhdGUuY3VycmVudEZyYW1lIDwgc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEgPyBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxIDogc3RhdGUuY3VycmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRCb251c0ZyYW1lcyAoc3RhdGUpIHtcbiAgICBsZXQgZnJhbWVzID0gc3RhdGUuZnJhbWVzLnNsaWNlKE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpLCBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxKS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmFtZVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGZyYW1lcy5sZW5ndGgtLTtcblxuICAgIGxldCByID0gMiAtIGN1cnJGcmFtZS5sZW5ndGg7XG4gICAgbGV0IGJvbnVzRnJhbWVzID0gW107XG5cbiAgICB3aGlsZSAociAmJiBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAociA9PT0gMSAmJiBmcmFtZVswXS52YWx1ZSA9PT0gMTApIHx8XG4gICAgICAgICAgICAociA9PT0gMiAmJiAoZnJhbWUudG90YWwgPT09IDEwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib251c0ZyYW1lcy51bnNoaWZ0KGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIgLT0gZnJhbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBib251c0ZyYW1lcztcbn1cblxuZnVuY3Rpb24gaXNMYXN0UGxheWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdEZyYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RnJhbWUgPT09IEZSQU1FU19MRU5HVEggLSAxO1xufVxuXG5mdW5jdGlvbiBvblRpY2tUaW1lciAoc3RhdGUpIHtcbiAgICByZXR1cm4gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gb25UaHJvd0JhbGwgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5pblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBsZXQgZnJhbWUgPSBzdGF0ZS5mcmFtZXNbc3RhdGUuY3VycmVudEZyYW1lXVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICBsZXQgcGlucyA9IEZSQU1FU19MRU5HVEg7XG5cbiAgICBpZiAoZnJhbWVbMF0gJiYgcGlucyAhPT0gZnJhbWVbMF0udmFsdWUpIHtcbiAgICAgICAgcGlucyAtPSBmcmFtZVswXS52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgYm9udXNGcmFtZXMgPSBnZXRCb251c0ZyYW1lcyhzdGF0ZSk7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5tYXgodGhyb3dCYWxsKHBpbnMpLCB0aHJvd0JhbGwocGlucykpO1xuXG4gICAgYm9udXNGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgZnJhbWUudG90YWwgKz0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBsZXQgcm9sbCA9IHsgdmFsdWUgfTtcblxuICAgIGZyYW1lLnB1c2gocm9sbCk7XG5cbiAgICBsZXQgcm9sbHNTdW0gPSBzdW1BcnJheShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuXG4gICAgICAgICAgICBpZiAoIWlzTGFzdEZyYW1lKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoZnJhbWUudG90YWwgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdCA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblVwZGF0ZVBsYXllck5hbWUgKHN0YXRlLCBkYXRhKSB7XG4gICAgc3RhdGUucGxheWVyc1tkYXRhLmluZGV4XSA9IGRhdGEudmFsdWU7XG4gICAgc3RhdGUucGxheWVycyA9IHN0YXRlLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIpO1xuXG4gICAgaWYgKCFzdGF0ZS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICBzdGF0ZS5wbGF5ZXJzLnB1c2goZ2V0UmFuZG9tTmFtZSgpKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblBsYXlHYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBnZXRJbml0aWFsU3RhdGUoc3RhdGUucGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUgKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25QbGF5R2FtZShzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVElDS19USU1FUjpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGlja1RpbWVyKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USFJPV19CQUxMOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaHJvd0JhbGwoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QTEFZRVJfTkFNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVXBkYXRlUGxheWVyTmFtZShzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVJlZHVjZXJDcmVhdGVyLmpzXG4gKiovIiwiaW1wb3J0IHRhYmxlIGZyb20gJy4uL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9hcHAuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgdGFibGVIVE1MOiBhcHAudGFibGUgPyB0YWJsZShhcHAudGFibGUpIDogJycsXG4gICAgICAgIG1vZGFsSFRNTDogYXBwLm1vZGFsID8gbW9kYWwoYXBwLm1vZGFsKSA6ICcnLFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwL2FwcC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2NlbGwuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NlbGwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBjbi5fcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChzdGF0ZS5pc0xlZnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2xlZnQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1JpZ2h0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19yaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzVG9wKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc190b3ApO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc0JvdHRvbSkge1xuICAgICAgICByb290LnB1c2goY24uaXNfYm90dG9tKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNTY29yZXMpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3Njb3Jlcyk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlbGwpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjZWxsOiBjZWxsLFxuICAgICAgICBjbjogcHJlcGFyZUNOKGNlbGwpXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9maW5hbC1yZXN1bHRzLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9maW5hbC1yZXN1bHRzLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChnYW1lKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IGNuLFxuICAgICAgICBmaW5hbFJlc3VsdHM6IGdhbWUuZmluYWxSZXN1bHRzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9nYW1lLWZvcm0uY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dhbWUtZm9ybS5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ2FtZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgcGxheWVyczogZ2FtZS5wbGF5ZXJzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzXG4gKiovIiwiaW1wb3J0IGdhbWVGb3JtIGZyb20gJy4uL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMnO1xuaW1wb3J0IGZpbmFsUmVzdWx0cyBmcm9tICcuLi9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vbW9kYWwuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21vZGFsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihtb2RhbCkge1xuICAgIGxldCByb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKG1vZGFsLnN0eWxlKSB7XG4gICAgICAgIHJvb3QucHVzaChjblsnc3R5bGVfJyArIG1vZGFsLnN0eWxlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmluZm8pO1xuICAgIH1cblxuICAgIGlmICghbW9kYWwuaXNPcGVuKSB7XG4gICAgICAgIHJvb3QucHVzaCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1vZGFsKSB7XG4gICAgbGV0IGNvbnRlbnRIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKG1vZGFsLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnZ2FtZS1mb3JtJzpcbiAgICAgICAgICAgIGNvbnRlbnRIVE1MID0gZ2FtZUZvcm0obW9kYWwuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmaW5hbC1yZXN1bHRzJzpcbiAgICAgICAgICAgIGNvbnRlbnRIVE1MID0gZmluYWxSZXN1bHRzKG1vZGFsLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogcHJlcGFyZUNOKG1vZGFsKSxcbiAgICAgICAgY29udGVudEhUTUxcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzXG4gKiovIiwiaW1wb3J0IGNlbGwgZnJvbSAnLi4vY2VsbC9jZWxsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3Jvdy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb3cpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY2VsbHNIVE1MOiByb3cuY29scy5tYXAoY2VsbCkuam9pbignJyksXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc1xuICoqLyIsImltcG9ydCByb3cgZnJvbSAnLi4vcm93L3Jvdy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi90YWJsZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFibGUuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93c0hUTUw6IHRhYmxlLnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc1xuICoqLyIsImNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICB2YWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICBpZiAoSFRNTC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZXhjZXB0IGlPUyA3IFNhZmFyaSwgSUUgOC85LCBBbmRyaW9kIEJyb3dzZXIgNC4xLzQzXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhIVE1MLCAndGV4dC9odG1sJykuZG9jdW1lbnRFbGVtZW50O1xuICAgIGxldCBoZWFkID0gZG9jLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IGJvZHkgPSBkb2MuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGlmIChub2RlID0gaGVhZC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlID0gYm9keS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgdk5vZGUgPSB7XG4gICAgICAgIHR5cGU6IG5vZGUubm9kZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgdk5vZGUuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW5zID0gW107XG4gICAgICAgIHZOb2RlLmF0dHJzID0ge307XG4gICAgICAgIHZOb2RlLnRhZyA9IG5vZGUudGFnTmFtZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW5zLnB1c2goY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzTmFtZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZOb2RlLmF0dHJzW25hbWVdID0gbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2Tm9kZTtcbn1cblxuZnVuY3Rpb24gam9pbkF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGxldCBhdHRyID0gYXR0cnNba2V5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGtleSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHthdHRyfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCA9ICcnKSB7XG4gICAgbGV0IGF0dHJzID0gam9pbkF0dHJzKHZOb2RlLmF0dHJzKTtcblxuICAgIHN3aXRjaCh2Tm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIGAke2lubmVySFRNTH1gO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gYDwke3ZOb2RlLnRhZ30gJHthdHRyc30+JHtpbm5lckhUTUx9PC8ke3ZOb2RlLnRhZ30+YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwodk5vZGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodk5vZGUudHlwZSAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lckhUTUwgKz0gcmVuZGVySFRNTCh2Tm9kZS5jaGlsZHJlbnNbaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJIVE1MID0gdk5vZGUuY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MKTtcbn1cblxuZXhwb3J0IGxldCBkaWZmID0gZnVuY3Rpb24gKHZOb2RlMSwgdk5vZGUyKSB7XG4gICAgaWYgKHZOb2RlMSAmJiAhdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdk5vZGUxICYmIHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50YWcgIT09IHZOb2RlMi50YWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKHZOb2RlMS5jb250ZW50ICE9PSB2Tm9kZTIuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJzID0gW107XG4gICAgICAgIGxldCBwYXRjaCA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMSA9IHZOb2RlMS5hdHRyc1trZXldO1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMi5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxVmFsID0gYXR0cjEuam9pbignICcpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyMVZhbCAhPT0gYXR0cjJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMS5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjIpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2Tm9kZTEuY2hpbGRyZW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYXR0cnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIG9wKSB7XG4gICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRVBMQUNFX05PREUnOlxuICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBjcmVhdGVFbGVtZW50KG9wLnZOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0ck9wcyhub2RlLCBvcHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3BzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcCA9IG9wc1tpXTtcbiAgICAgICAgbGV0IG5hbWUgPSBvcC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNQcm9wID0gcHJvcE5hbWVzW25hbWVdO1xuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtuYW1lXSA9IG9wLnZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBvcC52YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbbmFtZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4uY2xlYXJmaXg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDYyLCA4MCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTNweCAxNXB4IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJvdW5jZUluIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIGZyb20sIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksc0NBQXNDO0NBQ3pDOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtFQUNFO0lBQ0UsV0FBVztJQUNYLGtDQUFrQztHQUNuQzs7RUFFRDtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7Q0FDRjs7QUFFRDtJQUNJO1FBQ0ksZ0NBQWdDO0tBQ25DOztJQUVEO1FBQ0ksbUNBQW1DO0tBQ3RDOztJQUVEO1FBQ0ksa0NBQWtDO0tBQ3JDO0NBQ0pcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxufVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcXG4gICAgY29sb3I6IHJnYig0NCwgNjIsIDgwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHggMTFweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC43Nyk7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uYm91bmNlSW4ge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbi5zaGFrZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgZnJvbSwgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcF9fcm9vdF9fXzNBdkV1IHtcXG59XFxuLmFwcF9faW1hZ2VfX182TDJDYiB7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDJweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFwcF9fYnV0dG9uX193cF9fXzNMWEhrIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hcHBfX2F1dGhvcl9fXzFfc2l3IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAtNTBweDtcXG59XFxuXFxuXFxuLmFwcF9fYXV0aG9yX190b3BfX18zR0hQMSB7IH1cXG5cXG4uYXBwX19hdXRob3JfX2JvdHRvbV9fXzFsOXAxIHsgfVxcblxcbi5hcHBfX2J1dHRvbl9fXzFMd0R0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zM3B4O1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogNzgwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG59XFxuXFxuLmFwcF9fYnV0dG9uX19fMUx3RHQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggIzIyNjc5MztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fc2hha2VfX18xbGRlQztcXG59XFxuXFxuLmFwcF9fd29ya3NwYWNlX19fMzJMZ3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERBM0REO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwIDVweCAjMjI2NzkzO1xcbn1cXG5cXG4uYXBwX190YWJsZV9fXzFkWnJWIHtcXG4gICAgd2lkdGg6IDk0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzRweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9hcHAvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztDQUNkOzs7QUFHRCw2QkFBZ0I7O0FBRWhCLGdDQUFtQjs7QUFFbkI7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9DQUFvQztJQUNwQyxtQ0FBc0I7Q0FDekI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2RcIixcImZpbGVcIjpcImFwcC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbn1cXG4uaW1hZ2Uge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5idXR0b25fX3dwIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC01MHB4O1xcbn1cXG5cXG5cXG4uYXV0aG9yX190b3AgeyB9XFxuXFxuLmF1dGhvcl9fYm90dG9tIHsgfVxcblxcbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA3ODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggMHB4ICMyMjY3OTM7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXG59XFxuXFxuLndvcmtzcGFjZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0REEzREQ7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMyMjY3OTM7XFxufVxcblxcbi50YWJsZSB7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM0cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImFwcF9fcm9vdF9fXzNBdkV1XCIsXG5cdFwiaW1hZ2VcIjogXCJhcHBfX2ltYWdlX19fNkwyQ2JcIixcblx0XCJidXR0b25fX3dwXCI6IFwiYXBwX19idXR0b25fX3dwX19fM0xYSGtcIixcblx0XCJhdXRob3JcIjogXCJhcHBfX2F1dGhvcl9fXzFfc2l3XCIsXG5cdFwiYXV0aG9yX190b3BcIjogXCJhcHBfX2F1dGhvcl9fdG9wX19fM0dIUDFcIixcblx0XCJhdXRob3JfX2JvdHRvbVwiOiBcImFwcF9fYXV0aG9yX19ib3R0b21fX18xbDlwMVwiLFxuXHRcImJ1dHRvblwiOiBcImFwcF9fYnV0dG9uX19fMUx3RHRcIixcblx0XCJzaGFrZVwiOiBcImFwcF9fc2hha2VfX18xbGRlQ1wiLFxuXHRcIndvcmtzcGFjZVwiOiBcImFwcF9fd29ya3NwYWNlX19fMzJMZ3NcIixcblx0XCJ0YWJsZVwiOiBcImFwcF9fdGFibGVfX18xZFpyVlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGxfX3Jvb3RfX18ycU03MSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbF9faXNfcmlnaHRfX18zdmxYSSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc19ib3R0b21fX18ycHVudSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbF9faXNfbGVmdF9fXzE0WHpxIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsX19pc19yaWdodF9fXzN2bFhJLFxcbi5jZWxsX19pc19sZWZ0X19fMTRYenEge1xcbiAgICB3aWR0aDogMjAwcHhcXG59XFxuXFxuLmNlbGxfX2lzX3RvcF9fX3JJWmlsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbF9faXNfc2NvcmVzX19fMnNWUG4ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxufVxcblxcbi5jZWxsX19pc190b3BfX19ySVppbCAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jZWxsX190b3BfX183cEFfUCB7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uY2VsbF9faGFsZl9fXzNZcm56IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jZWxsX19mdWxsX19fMTFqSzIgeyB9XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRCx1QkFBU1wiLFwiZmlsZVwiOlwiY2VsbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmlzX3JpZ2h0IC5jZWxsIHtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxufVxcblxcbi5pc19ib3R0b20gLmNlbGwge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5pc19sZWZ0IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pc19yaWdodCxcXG4uaXNfbGVmdCB7XFxuICAgIHdpZHRoOiAyMDBweFxcbn1cXG5cXG4uaXNfdG9wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaXNfc2NvcmVzIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuLmlzX3RvcCAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5mdWxsIHsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImNlbGxfX3Jvb3RfX18ycU03MVwiLFxuXHRcImlzX3JpZ2h0XCI6IFwiY2VsbF9faXNfcmlnaHRfX18zdmxYSVwiLFxuXHRcImNlbGxcIjogXCJjZWxsX19jZWxsX19fM0hRUUpcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX18ycHVudVwiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fMTRYenFcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX19ySVppbFwiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fXzJzVlBuXCIsXG5cdFwidG9wXCI6IFwiY2VsbF9fdG9wX19fN3BBX1BcIixcblx0XCJoYWxmXCI6IFwiY2VsbF9faGFsZl9fXzNZcm56XCIsXG5cdFwiZnVsbFwiOiBcImNlbGxfX2Z1bGxfX18xMWpLMlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmluYWwtcmVzdWx0c19fbmFtZV9fXzJybFlzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVRzTjYge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtDQUNmXCIsXCJmaWxlXCI6XCJmaW5hbC1yZXN1bHRzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJuYW1lXCI6IFwiZmluYWwtcmVzdWx0c19fbmFtZV9fXzJybFlzXCIsXG5cdFwid2lubmVyXCI6IFwiZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVRzTjZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtZm9ybV9fcm9vdF9fXzFkc1RBIHsgfVxcblxcbi5nYW1lLWZvcm1fX25hbWVfX18xWndpciB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZm9ybV9faW5wdXRfX18zcGw5RiB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fM3RMVlAge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fM3RMVlA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQVM7O0FBRVQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CXCIsXCJmaWxlXCI6XCJnYW1lLWZvcm0uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHsgfVxcblxcbi5uYW1lIHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5yb3cge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLnJvdzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiZ2FtZS1mb3JtX19yb290X19fMWRzVEFcIixcblx0XCJuYW1lXCI6IFwiZ2FtZS1mb3JtX19uYW1lX19fMVp3aXJcIixcblx0XCJpbnB1dFwiOiBcImdhbWUtZm9ybV9faW5wdXRfX18zcGw5RlwiLFxuXHRcInJvd1wiOiBcImdhbWUtZm9ybV9fcm93X19fM3RMVlBcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbF9fcm9vdF9fXzJvajc5IHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbF9fY2xvc2VfX18xT3R4byB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5tb2RhbF9fY29udGVudF9fXzMtVHlQIHtcXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOTBweCA1cHg7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ncmVlbl9fXzFqQVptIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWwge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMTU2LCAxOCwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfcmVkX19fMUxQZHgge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ibHVlX19fMW9CQ0wge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC45NSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0NBQXNDO0NBQ3pDOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA5MHB4IDVweDtcXG59XFxuXFxuLnN0eWxlX2luZm8ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjk1KTtcXG59XFxuXFxuLnN0eWxlX29yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjk1KTtcXG59XFxuXFxuLnN0eWxlX3JlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfYmx1ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjk1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcImNsb3NlXCI6IFwibW9kYWxfX2Nsb3NlX19fMU90eG9cIixcblx0XCJjb250ZW50XCI6IFwibW9kYWxfX2NvbnRlbnRfX18zLVR5UFwiLFxuXHRcInN0eWxlX2luZm9cIjogXCJtb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKXCIsXG5cdFwic3R5bGVfZ3JlZW5cIjogXCJtb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabVwiLFxuXHRcInN0eWxlX29yYW5nZVwiOiBcIm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbFwiLFxuXHRcInN0eWxlX3JlZFwiOiBcIm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeFwiLFxuXHRcInN0eWxlX2JsdWVcIjogXCJtb2RhbF9fc3R5bGVfYmx1ZV9fXzFvQkNMXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvd19fcm93X19fMi1taDAucm93X19pc19oZWFkX19fMUY1N1Age1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0NBQ3BDXCIsXCJmaWxlXCI6XCJyb3cuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb3cuaXNfaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm93XCI6IFwicm93X19yb3dfX18yLW1oMFwiLFxuXHRcImlzX2hlYWRcIjogXCJyb3dfX2lzX2hlYWRfX18xRjU3UFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRhYmxlLmNzc1wiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uYXV0aG9yX190b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvcl9fYm90dG9tICwnXCI+RmxvcmlhbiBGRUlDSFRJTkdFUjwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLnRhYmxlICwnXCI+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5idXR0b25fX3dwICwnXCI+IDxidXR0b24gY2xhc3M9XCInLCBjbi5idXR0b24gLCdcIiBkYXRhLW1haW49XCJyb2xsXCI+IFJPTEwgQkFMTCE8L2J1dHRvbj4gPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0XG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uY2VsbCAsJ1wiPiAnKTsgaWYgKGNlbGwudGV4dCkgeyBcbnAucHVzaCgnICcsIGNlbGwudGV4dCAsJyAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgdG9wICwnIGNsZWFyZml4XCI+IDxkaXYgY2xhc3M9XCJjZWxsLWxlZnQgJywgY24uaGFsZiAsJ1wiPkk8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgJywgY24uaGFsZCAsJ1wiPklJPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1taWQgY2xlYXJmaXhcIj4gJyk7IGlmIChjZWxsWzBdID09PSAnWCcpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24uZnVsbCAsJz5cIj5YPC9kaXY+ICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJjZWxsLWxlZnQgJywgY24uaGFsZiAsJ1wiPicsIGNlbGxbMF0gLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgJywgY24uaGFsZiAsJ1wiPicsIGNlbGxbMV0gLCc8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtYm90XCI+IDxkaXYgY2xhc3M9XCJjZWxsLWZ1bGxcIj4nLCBjZWxsLnRvdGFsICwnPC9kaXY+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJyAnLCBjbi53aW5uZXIgLCdcIj4nLCBmaW5hbFJlc3VsdHNbMF0ubmFtZSAsJyAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdj4gJyk7IGZpbmFsUmVzdWx0cy5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPicsIHBsYXllci5uYW1lICwnIC0gJywgcGxheWVyLnNjb3JlcyAsJzwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGJ1dHRvbiBkYXRhLWZpbmFsLXJlc3VsdHM9XCJuZXdcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+TmV3IGdhbWU8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0XG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+Qk9XTElORy5KUzwvZGl2PiAnKTsgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIGluZGV4KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgaW5kZXggLCdcIiB2YWx1ZT1cIicsIHBsYXllciAsJ1wiPiA8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGlucHV0IGNsYXNzPVwiJywgY24uaW5wdXQgLCdcIiBkYXRhLWdhbWUtZm9ybT1cImlucHV0XCIgZGF0YS1pbmRleD1cIicsIHBsYXllcnMubGVuZ3RoICwnXCIgdmFsdWU9XCJcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGJ1dHRvbiBkYXRhLWdhbWUtZm9ybT1cInBsYXlcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+UGxheTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0XG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBhbmltYXRlZCBib3VuY2VJblwiPiA8ZGl2IGRhdGEtbW9kYWw9XCJjbG9zZVwiIGNsYXNzPVwiJywgY24uY2xvc2UgLCdcIj7DlzwvZGl2PiA8ZGl2IGNsYXNzPVwiJywgY24uY29udGVudCAsJ1wiPiAnLCBjb250ZW50SFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnIGNsZWFyZml4XCI+ICcsIGNlbGxzSFRNTCAsJyA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdj4gJywgcm93c0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzdFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZmluYWwtcmVzdWx0cycsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxNb2RhbCAoc3RhdGUpIHtcbiAgICBsZXQgbW9kYWwgPSBjcmVhdGVHYW1lRm9ybVN0YXRlKCk7XG4gICAgbW9kYWwuaXNPcGVuID0gdHJ1ZTtcbiAgICBtb2RhbC5kYXRhID0gc3RhdGUuZ2FtZTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIGxldCBtb2RhbCA9IHN0YXRlLm1vZGFsID0gc3RhdGUubW9kYWwgfHwgZ2V0SW5pdGlhbE1vZGFsKHN0YXRlKTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkNMT1NFX01PREFMOlxuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBtb2RhbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5FTkRfR0FNRTpcbiAgICAgICAgICAgICAgICBtb2RhbC5kYXRhID0gc3RhdGUuZ2FtZTtcbiAgICAgICAgICAgICAgICBtb2RhbC5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIG1vZGFsLmRhdGEgPSBzdGF0ZS5nYW1lO1xuICAgICAgICAgICAgICAgIG1vZGFsLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9tb2RhbFJlZHVjZXJDcmVhdGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==