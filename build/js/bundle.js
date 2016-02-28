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
	
	// react style:
	
	// redux style:
	
	var _index = __webpack_require__(35);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(50);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _virtualDom = __webpack_require__(21);
	
	var vdom = _interopRequireWildcard(_virtualDom);
	
	var _assignEvents2 = __webpack_require__(5);
	
	var _assignEvents3 = _interopRequireDefault(_assignEvents2);
	
	var _app = __webpack_require__(10);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _appReducer = __webpack_require__(7);
	
	var _appReducer2 = _interopRequireDefault(_appReducer);
	
	var _actions = __webpack_require__(6);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	    function App(state) {
	        _classCallCheck(this, App);
	
	        this.initAppNode().setState(state).initGameTimer().assignEvents();
	    }
	
	    _createClass(App, [{
	        key: 'getEvents',
	        value: function getEvents() {
	            return {
	                'click': ['main', 'game-form', 'modal', 'final-results', 'author'],
	                'focusout': ['game-form']
	            };
	        }
	    }, {
	        key: 'assignEvents',
	        value: function assignEvents() {
	            (0, _assignEvents3.default)(this, this.getEvents());
	
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
	            }, 1000);
	
	            return this;
	        }
	    }, {
	        key: 'startRollBallAnimation',
	        value: function startRollBallAnimation(callback) {
	            var _this2 = this;
	
	            if (this.state.isDebugMode) {
	                callback();
	                return this;
	            }
	            this.setState({
	                $rollBallAnimation: true
	            });
	
	            setTimeout(function () {
	                _this2.setState({
	                    $rollBallAnimation: false
	                });
	
	                callback();
	            }, 1200);
	
	            return this;
	        }
	    }, {
	        key: 'setState',
	        value: function setState(state, noRender) {
	            this.state = Object.assign(this.state || {}, state);
	
	            !noRender && this.render();
	
	            return this;
	        }
	    }, {
	        key: 'reduceAction',
	        value: function reduceAction(action, noRender) {
	            this.setState((0, _appReducer2.default)(this.state, action), noRender);
	
	            return this;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            requestAnimationFrame(function () {
	                var HTML = (0, _app2.default)(_this3.state);
	                var vNode = vdom.vNodeFromHTML(HTML);
	
	                if (_this3.vNode && _this3.node) {
	                    vdom.applyPatch(_this3.node, vdom.diff(_this3.vNode, vNode));
	                } else {
	                    _this3.node = vdom.createElement(vNode);
	                    _this3.appNode.innerHTML = '';
	                    _this3.appNode.appendChild(_this3.node);
	                }
	
	                _this3.vNode = vNode;
	            });
	
	            return this;
	        }
	    }, {
	        key: 'isAnimationInProgress',
	        value: function isAnimationInProgress() {
	            return this.state.$rollBallAnimation;
	        }
	    }, {
	        key: 'onGameFormInputFocusout',
	        value: function onGameFormInputFocusout(e) {
	            this.reduceAction(actions.updatePlayerName({
	                index: parseInt(e.target.getAttribute('data-index')),
	                value: e.target.value
	            }));
	        }
	    }, {
	        key: 'onFinalResultsNewClick',
	        value: function onFinalResultsNewClick() {
	            this.reduceAction(actions.newGame());
	        }
	    }, {
	        key: 'onMainRollClick',
	        value: function onMainRollClick() {
	            var _this4 = this;
	
	            if (this.isAnimationInProgress()) {
	                return;
	            }
	
	            this.reduceAction(actions.throwBall(), true).startRollBallAnimation(function () {
	                if (!_this4.state.game.inProgress) {
	                    _this4.reduceAction(actions.endGame());
	                }
	
	                _this4.render();
	            });
	        }
	    }, {
	        key: 'onGameFormPlayClick',
	        value: function onGameFormPlayClick() {
	            this.reduceAction(actions.playGame());
	        }
	    }, {
	        key: 'onModalCloseClick',
	        value: function onModalCloseClick() {
	            this.reduceAction(actions.closeModal());
	        }
	    }, {
	        key: 'onAuthorDebugClick',
	        value: function onAuthorDebugClick() {
	            this.reduceAction(actions.debugMode());
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sumArray = sumArray;
	exports.randNum = randNum;
	exports.randArr = randArr;
	exports.extend = extend;
	function sumArray(arr) {
	    return arr.reduce(function (acc, val) {
	        return acc + parseInt(val || 0, 10);
	    }, 0);
	}
	
	function randNum(max) {
	    return Math.round(Math.random() * max);
	}
	
	function randArr(arr) {
	    return arr[randNum(arr.length - 1)];
	}
	
	function extend(dst) {
	    dst = dst || {};
	
	    for (var i = 1, iLength = arguments.length; i < iLength; i++) {
	        if (!arguments[i]) {
	            continue;
	        }
	
	        var obj = arguments[i];
	        var keys = Object.keys(obj);
	
	        for (var j = 0, jLength = keys.length; j < jLength; j++) {
	            var key = keys[j];
	            var typeOfValue = Object.prototype.toString.call(obj[key]);
	
	            if (typeOfValue === '[object Object]' || typeOfValue === '[object Array]') {
	                dst[key] = dst[key] || (obj[key] instanceof Array ? [] : {});
	                dst[key] = extend(dst[key], obj[key]);
	            } else {
	                dst[key] = obj[key];
	            }
	        }
	    }
	
	    return dst;
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
	var DEBUG_MODE = exports.DEBUG_MODE = 'DEBUG_MODE';

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = assignEvents;
	function snakeToCamel(string) {
	    return string.replace(/(\-\w)/g, function (m) {
	        return m[1].toUpperCase();
	    });
	}
	
	function createEventListener(context, eventsHash) {
	    return function (e) {
	        for (var attrName in eventsHash) {
	            var hash = eventsHash[attrName];
	            var attr = e.target.attributes[attrName];
	
	            if (attr) {
	                var action = attr.value;
	                var listenerName = hash.listenerNames[action];
	
	                if (!listenerName) {
	                    listenerName = hash.listenerNames[action] = snakeToCamel("on-" + hash.component + "-" + action + "-" + hash.eventName);
	                }
	
	                if (context[listenerName]) {
	                    context[listenerName].call(context, e);
	                }
	                break;
	            }
	        }
	    };
	}
	
	function assignEvents(context, events) {
	    Object.keys(events).forEach(function (eventName) {
	        var eventsHash = events[eventName].reduce(function (acc, component) {
	            acc["data-" + component] = { component: component, eventName: eventName, listenerNames: {} };
	
	            return acc;
	        }, {});
	
	        document.addEventListener(eventName, createEventListener(context, eventsHash));
	    });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.debugMode = exports.tickTimer = exports.closeModal = exports.endGame = exports.newGame = exports.playGame = exports.throwBall = exports.updatePlayerName = undefined;
	
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
	
	var debugMode = exports.debugMode = function debugMode() {
	    return {
	        type: types.DEBUG_MODE
	    };
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _types = __webpack_require__(4);
	
	var types = _interopRequireWildcard(_types);
	
	var _modalReducerCreater = __webpack_require__(9);
	
	var _modalReducerCreater2 = _interopRequireDefault(_modalReducerCreater);
	
	var _gameReducerCreater = __webpack_require__(8);
	
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
	                isScores: true,
	                isCurrent: pIndex === state.currentPlayer
	            };
	
	            return cell;
	        });
	
	        cols.unshift({
	            text: player,
	            isLeft: true,
	            isBottom: pIndex === state.players.length - 1,
	            isCurrent: pIndex === state.currentPlayer
	        });
	
	        return {
	            isCurrent: pIndex === state.currentPlayer,
	            cols: cols
	        };
	    });
	
	    rows.push.apply(rows, _toConsumableArray(pRows));
	
	    return { rows: rows };
	}
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    state.game = gameReducer(state.game, action);
	
	    switch (action.type) {
	        case types.DEBUG_MODE:
	            state.isDebugMode = !state.isDebugMode;
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _names = __webpack_require__(37);
	
	var _names2 = _interopRequireDefault(_names);
	
	var _colors = __webpack_require__(36);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _helpers = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FRAMES_LENGTH = 10; /* ***
	                        * THIS REDUCER IS READY FOR SHARING BL TO OTHER PLATFORM. (WITH REACT NATIVE FOR EXAMPLE)
	                        *** */
	
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
	
	function rollBall(pins) {
	    var _Math;
	
	    var values = [(0, _helpers.randNum)(pins)];
	
	    return (_Math = Math).max.apply(_Math, values);
	}
	
	function getInitialState(players) {
	    var state = {
	        players: players || [(0, _helpers.randArr)(_names2.default), (0, _helpers.randArr)(_names2.default)],
	        currentPlayer: 0,
	        currentFrame: 0,
	        startTime: new Date(),
	        diffTime: '00:00',
	        inProgress: true,
	        lastResult: {}
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
	    var playerName = state.players[state.currentPlayer];
	
	    if (frame[0] && pins !== frame[0].value) {
	        pins -= frame[0].value;
	    }
	
	    var bonusFrames = getBonusFrames(state);
	    var value = Math.max(rollBall(pins), rollBall(pins));
	
	    bonusFrames.forEach(function (frame) {
	        frame.total += value;
	    });
	
	    var roll = { value: value, special: '' };
	
	    frame.push(roll);
	
	    var rollsSum = (0, _helpers.sumArray)(frame.map(function (roll) {
	        return roll.value;
	    }));
	    frame.total = rollsSum;
	
	    if (frame.length === 1) {
	        if (roll.value === 10) {
	            roll.title = 'X';
	            roll.special = 'strike';
	
	            if (!isLastFrame(state)) {
	                nextPlayer(state);
	            }
	        } else {
	            roll.title = roll.value;
	        }
	    } else if (frame.length === 2) {
	        if (frame.total === 10) {
	            roll.title = '/';
	            roll.special = 'spare';
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
	
	    state.lastResult.value = value + ' pins!';
	    state.lastResult.color = (0, _helpers.randArr)(_colors2.default);
	
	    if (roll.special) {
	        state.lastResult.value += ' ' + roll.special.toUpperCase();
	    }
	
	    return state;
	}
	
	function onUpdatePlayerName(state, data) {
	    state.players[data.index] = data.value;
	    state.players = state.players.filter(function (player) {
	        return player;
	    });
	
	    if (!state.players.length) {
	        state.players.push((0, _helpers.randArr)(_names2.default));
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _helpers = __webpack_require__(3);
	
	function createFinalResultsData(state) {
	    var game = state.game;
	
	    return game.players.map(function (player, index) {
	        return {
	            name: player,
	            scores: (0, _helpers.sumArray)(game.frames.map(function (frame) {
	                return frame[index].total;
	            }))
	        };
	    }).sort(function (a, b) {
	        return b.scores - a.scores;
	    });
	}
	
	function createFinalResultsState(state) {
	    var isOpen = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    return {
	        name: 'final-results',
	        style: 'blue',
	        isOpen: isOpen,
	        data: createFinalResultsData(state)
	    };
	}
	
	function createGameFormData(state) {
	    return state.game;
	}
	
	function createGameFormState(state) {
	    var isOpen = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    return {
	        name: 'game-form',
	        style: 'blue',
	        isOpen: isOpen,
	        data: createGameFormData(state)
	    };
	}
	
	function getInitialModal(state) {
	    return createGameFormState(state);
	}
	
	function reducerCreate(types) {
	    return function (state) {
	        var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        state.modal = state.modal || getInitialModal(state);
	
	        switch (action.type) {
	            case types.CLOSE_MODAL:
	                state.modal.isOpen = false;
	                break;
	            case types.PLAY_GAME:
	                state.modal.isOpen = false;
	                break;
	            case types.END_GAME:
	                state.modal = createFinalResultsState(state);
	                break;
	            case types.NEW_GAME:
	                state.modal = createGameFormState(state);
	                break;
	        }
	
	        return state;
	    };
	}
	
	exports.default = reducerCreate;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (state) {
	    return (0, _app4.default)({
	        modalHTML: state.modal ? (0, _modal2.default)(state.modal) : '',
	        rollballAnimationHTML: state.$rollBallAnimation ? (0, _rollballAnimation2.default)(state.game.lastResult) : '',
	        workspaceHTML: (0, _workspace2.default)(state),
	        cn: _app2.default
	    });
	};
	
	var _workspace = __webpack_require__(20);

	var _workspace2 = _interopRequireDefault(_workspace);

	var _rollballAnimation = __webpack_require__(14);

	var _rollballAnimation2 = _interopRequireDefault(_rollballAnimation);

	var _modal = __webpack_require__(13);

	var _modal2 = _interopRequireDefault(_modal);

	var _app = __webpack_require__(39);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(51);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (finalResults) {
	    return (0, _finalResults4.default)({
	        cn: _finalResults2.default,
	        finalResults: finalResults
	    });
	};
	
	var _finalResults = __webpack_require__(40);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _finalResults3 = __webpack_require__(52);

	var _finalResults4 = _interopRequireDefault(_finalResults3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
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
	
	var _gameForm = __webpack_require__(41);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(53);

	var _gameForm4 = _interopRequireDefault(_gameForm3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
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
	
	var _gameForm = __webpack_require__(12);
	
	var _gameForm2 = _interopRequireDefault(_gameForm);
	
	var _finalResults = __webpack_require__(11);
	
	var _finalResults2 = _interopRequireDefault(_finalResults);
	
	var _modal = __webpack_require__(42);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _modal3 = __webpack_require__(54);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (lastResult) {
	    return (0, _rollballAnimation4.default)({
	        lastResult: lastResult,
	        cn: _rollballAnimation2.default
	    });
	};
	
	var _rollballAnimation = __webpack_require__(43);

	var _rollballAnimation2 = _interopRequireDefault(_rollballAnimation);

	var _rollballAnimation3 = __webpack_require__(55);

	var _rollballAnimation4 = _interopRequireDefault(_rollballAnimation3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (state) {
	    console.log(state);
	    return (0, _author4.default)({
	        imgSrc: _debugBugIcon2.default,
	        cn: prepareCN(state)
	    });
	};
	
	var _author = __webpack_require__(44);
	
	var _author2 = _interopRequireDefault(_author);
	
	var _author3 = __webpack_require__(56);
	
	var _author4 = _interopRequireDefault(_author3);
	
	var _debugBugIcon = __webpack_require__(34);
	
	var _debugBugIcon2 = _interopRequireDefault(_debugBugIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(state) {
	    var root = _author2.default._root = [_author2.default.root];
	
	    if (state.isDebugMode) {
	        root.push(_author2.default.id_debugmode);
	    }
	
	    _author2.default._root = root.join(' ');
	
	    return _author2.default;
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return (0, _button4.default)({
	        cn: _button2.default
	    });
	};
	
	var _button = __webpack_require__(45);

	var _button2 = _interopRequireDefault(_button);

	var _button3 = __webpack_require__(57);

	var _button4 = _interopRequireDefault(_button3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
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
	
	var _cell = __webpack_require__(46);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _cell3 = __webpack_require__(58);
	
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
	
	    if (state.isCurrent) {
	        root.push(_cell2.default.is_current);
	    }
	
	    _cell2.default._root = root.join(' ');
	
	    return _cell2.default;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (row) {
	    return (0, _row4.default)({
	        row: row,
	        cellsHTML: row.cols.map(_cell2.default).join(''),
	        cn: prepareCN(row)
	    });
	};
	
	var _cell = __webpack_require__(17);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _row = __webpack_require__(47);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _row3 = __webpack_require__(59);
	
	var _row4 = _interopRequireDefault(_row3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(state) {
	    var root = _row2.default._root = [_row2.default.root];
	
	    if (state.isCurrent) {
	        root.push(_row2.default.is_current);
	    }
	
	    _row2.default._root = root.join(' ');
	
	    return _row2.default;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (state) {
	    return (0, _table4.default)({
	        rowsHTML: state.rows.map(_row2.default).join(''),
	        cn: _table2.default
	    });
	};
	
	var _row = __webpack_require__(18);

	var _row2 = _interopRequireDefault(_row);

	var _table = __webpack_require__(48);

	var _table2 = _interopRequireDefault(_table);

	var _table3 = __webpack_require__(60);

	var _table4 = _interopRequireDefault(_table3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (state) {
	    return (0, _workspace4.default)({
	        authorHTML: state ? (0, _author2.default)(state) : '',
	        tableHTML: state ? (0, _table2.default)(state.table) : '',
	        buttonHTML: state ? (0, _button2.default)() : '',
	        cn: _workspace2.default
	    });
	};
	
	var _author = __webpack_require__(15);

	var _author2 = _interopRequireDefault(_author);

	var _table = __webpack_require__(19);

	var _table2 = _interopRequireDefault(_table);

	var _button = __webpack_require__(16);

	var _button2 = _interopRequireDefault(_button);

	var _workspace = __webpack_require__(49);

	var _workspace2 = _interopRequireDefault(_workspace);

	var _workspace3 = __webpack_require__(61);

	var _workspace4 = _interopRequireDefault(_workspace3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".app__root___3NnEH {\n    padding-top: 500px;\n}\n", "", {"version":3,"sources":["/./src/views/app.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;CACtB","file":"app.css","sourcesContent":[".root {\n    padding-top: 500px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "app__root___3NnEH"
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".final-results__name___MSiwd {\n    font-weight: 100;\n    font-size: 30px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n\n.final-results__winner___1ZqYr {\n    font-size:40px;\n    width: auto;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: #f39c12;\n}\n", "", {"version":3,"sources":["/./src/views/modal/final-results/final-results.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,iBAAiB;IACjB,eAAe;CAClB","file":"final-results.css","sourcesContent":[".name {\n    font-weight: 100;\n    font-size: 30px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n\n.winner {\n    font-size:40px;\n    width: auto;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: #f39c12;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"name": "final-results__name___MSiwd",
		"winner": "final-results__winner___1ZqYr"
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".game-form__root___1QTzN { }\n\n.game-form__name___HERgy {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n    padding-bottom: 30px;\n}\n\n.game-form__input___1kpnc {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.game-form__row___2dlWf {\n    margin: 0 10px;\n}\n\n.game-form__row___2dlWf:first-child {\n    margin-top: 1px;\n}\n", "", {"version":3,"sources":["/./src/views/modal/game-form/game-form.css"],"names":[],"mappings":"AAAA,4BAAS;;AAET;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;CACxB;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,oBAAoB;IACpB,yCAAyC;CAC5C;;AAED;IACI,eAAe;CAClB;;AAED;IACI,gBAAgB;CACnB","file":"game-form.css","sourcesContent":[".root { }\n\n.name {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n    padding-bottom: 30px;\n}\n\n.input {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.row {\n    margin: 0 10px;\n}\n\n.row:first-child {\n    margin-top: 1px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "game-form__root___1QTzN",
		"name": "game-form__name___HERgy",
		"input": "game-form__input___1kpnc",
		"row": "game-form__row___2dlWf"
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal__root___2oj79 {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    animation-name: modal__modalWindow___2Gh4E;\n}\n\n.modal__close___1Otxo {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.modal__close___1Otxo:hover {\n    transform: rotate(90deg);\n}\n\n.modal__content___3-TyP {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.modal__style_info___1ik3J {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.modal__style_green___1jAZm {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.modal__style_orange___2VXMl {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.modal__style_red___1LPdx {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.modal__style_blue___1oBCL {\n    background: rgba(52, 152, 219, 0.95);\n}\n\n@keyframes modal__modalWindow___2Gh4E {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/views/modal/modal.css"],"names":[],"mappings":"AAAA;IACI,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,2CAA4B;CAC/B;;AAED;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;CACjB;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;CACF","file":"modal.css","sourcesContent":[".root {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    animation-name: modalWindow;\n}\n\n.close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.close:hover {\n    transform: rotate(90deg);\n}\n\n.content {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.style_info {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.style_green {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.style_orange {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.style_red {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.style_blue {\n    background: rgba(52, 152, 219, 0.95);\n}\n\n@keyframes modalWindow {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "modal__root___2oj79",
		"modalWindow": "modal__modalWindow___2Gh4E",
		"close": "modal__close___1Otxo",
		"content": "modal__content___3-TyP",
		"style_info": "modal__style_info___1ik3J",
		"style_green": "modal__style_green___1jAZm",
		"style_orange": "modal__style_orange___2VXMl",
		"style_red": "modal__style_red___1LPdx",
		"style_blue": "modal__style_blue___1oBCL"
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".rollball-animation__root___34019 {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: rollball-animation__rollBall___182h7;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.rollball-animation__text___2ORa0 {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: rollball-animation__rollBallText___3ZO-P;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes rollball-animation__rollBall___182h7 {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollball-animation__rollBallText___3ZO-P {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n", "", {"version":3,"sources":["/./src/views/rollball-animation/rollball-animation.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,qDAAyB;IACzB,yBAAyB;IACzB,0BAA0B;CAC7B;;AAED;IACI,OAAO;IACP,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,yDAA6B;IAC7B,4CAA4C;IAC5C,uBAAuB;IACvB,6BAA6B;IAC7B,0BAA0B;CAC7B;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,+BAA+B;GAChC;CACF;;AAED;EACE;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF","file":"rollball-animation.css","sourcesContent":[".root {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: rollBall;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.text {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: rollBallText;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes rollBall {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollBallText {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "rollball-animation__root___34019",
		"rollBall": "rollball-animation__rollBall___182h7",
		"text": "rollball-animation__text___2ORa0",
		"rollBallText": "rollball-animation__rollBallText___3ZO-P"
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".author__root___259t4 {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n.author__top___2lDju { }\n\n.author__bottom___1M-j4 { }\n\n.author__image___1oFXl {\n    width: 30px;\n    margin-right: 50px;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.author__id_debugmode___2Fq5H .author__image___1oFXl {\n    border-bottom: 2px solid #f39c12;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/author/author.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;AAED,wBAAQ;;AAER,2BAAW;;AAEX;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;CACnB;;AAED;IACI,iCAAiC;CACpC","file":"author.css","sourcesContent":[".root {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n.top { }\n\n.bottom { }\n\n.image {\n    width: 30px;\n    margin-right: 50px;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.id_debugmode .image {\n    border-bottom: 2px solid #f39c12;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "author__root___259t4",
		"top": "author__top___2lDju",
		"bottom": "author__bottom___1M-j4",
		"image": "author__image___1oFXl",
		"id_debugmode": "author__id_debugmode___2Fq5H"
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".button__root___1UlWY {\n    position:relative;\n}\n\n.button__button___lRHlT {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background-color: #e67e22;\n}\n\n.button__button___lRHlT:hover {\n    background-color: rgb(237, 157, 87);\n}\n", "", {"version":3,"sources":["/./src/views/workspace/button/button.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,0BAA0B;CAC7B;;AAED;IACI,oCAAoC;CACvC","file":"button.css","sourcesContent":[".root {\n    position:relative;\n}\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background-color: #e67e22;\n}\n\n.button:hover {\n    background-color: rgb(237, 157, 87);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "button__root___1UlWY",
		"button": "button__button___lRHlT"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell__root___1xVkt {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__cell___3LONh {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n    transition: all 3s ease-out;\n}\n\n.cell__top___20yUB {\n    color: #fff;\n}\n\n.cell__half___2SUBn {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___3fivi { }\n\n.cell__is_right___10GKh .cell__cell___3LONh {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___2TzUA .cell__cell___3LONh {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___Xhdtc {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.cell__is_right___10GKh,\n.cell__is_left___Xhdtc {\n    width: 200px\n}\n\n.cell__is_top___1XTko {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.cell__is_scores___1tDSV {\n    font-size: 12px;\n}\n\n.cell__is_top___1XTko .cell__cell___3LONh {\n    background-color: transparent;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/table/row/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;IAC1B,4BAA4B;CAC/B;;AAED;IACI,YAAY;CACf;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS;;AAET;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,0BAA0B;IAC1B,wBAAwB;IACxB,mBAAmB;CACtB;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,8BAA8B;IAC9B,iBAAiB;CACpB","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n    transition: all 3s ease-out;\n}\n\n.top {\n    color: #fff;\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.is_right,\n.is_left {\n    width: 200px\n}\n\n.is_top {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "cell__root___1xVkt",
		"cell": "cell__cell___3LONh",
		"top": "cell__top___20yUB",
		"half": "cell__half___2SUBn",
		"full": "cell__full___3fivi",
		"is_right": "cell__is_right___10GKh",
		"is_bottom": "cell__is_bottom___2TzUA",
		"is_left": "cell__is_left___Xhdtc",
		"is_top": "cell__is_top___1XTko",
		"is_scores": "cell__is_scores___1tDSV"
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row__root___1YyKN {\n    border: 5px solid transparent;\n}\n\n.row__is_head___3P7N7 {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.row__is_current___4e2ni {\n    border-color: rgba(236, 240, 241, 0.46);\n}\n", "", {"version":3,"sources":["/./src/views/workspace/table/row/row.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;CACjC;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;CACpC;;AAED;IACI,wCAAwC;CAC3C","file":"row.css","sourcesContent":[".root {\n    border: 5px solid transparent;\n}\n\n.is_head {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.is_current {\n    border-color: rgba(236, 240, 241, 0.46);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "row__root___1YyKN",
		"is_head": "row__is_head___3P7N7",
		"is_current": "row__is_current___4e2ni"
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".table__root___17mUD {\n    width: 950px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -39px;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/table/table.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd","file":"table.css","sourcesContent":[".root {\n    width: 950px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -39px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "table__root___17mUD"
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".workspace__root___nnONa {\n    background-color: rgba(77, 163, 221, 0.47);\n    position: relative;\n    box-shadow: 0 5px #8098A7;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/workspace.css"],"names":[],"mappings":"AAAA;IACI,2CAA2C;IAC3C,mBAAmB;IACnB,0BAA0B;CAC7B","file":"workspace.css","sourcesContent":[".root {\n    background-color: rgba(77, 163, 221, 0.47);\n    position: relative;\n    box-shadow: 0 5px #8098A7;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "workspace__root___nnONa"
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2fb71a8d3fa16dd91d9da4acab7170a1.css";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "742b8928d44a3745a30aef9cf2af4f93.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = [
		"#1abc9c",
		"#31cd73",
		"#3498db",
		"#9b59b6",
		"#34495e",
		"#16a085",
		"#27ae60",
		"#2b84bf",
		"#8e44ad",
		"#2c3e50",
		"f1c40f",
		"#e67e22",
		"#e74c3c",
		"#f39c12",
		"#d35400",
		"#c0392b"
	];

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyleUrl(cssUrl) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("link");
		styleElement.rel = "stylesheet";
		styleElement.type = "text/css";
		styleElement.href = cssUrl;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if(false) {
			return function(cssUrl) {
				if(typeof cssUrl === "string") {
					styleElement.href = cssUrl;
				} else {
					head.removeChild(styleElement);
				}
			};
		}
	}

/***/ },
/* 39 */
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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./final-results.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./final-results.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./game-form.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./game-form.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./rollball-animation.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./rollball-animation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./author.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./author.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./button.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./button.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./table.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./table.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./workspace.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./workspace.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some reference to a css file to the DOM by adding a <link> tag
	var update = __webpack_require__(38)(
		__webpack_require__(33)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./main.css", function() {
			update(require("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./main.css"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div> ', workspaceHTML ,' </div> <div> ', modalHTML ,' </div> <div> ', rollballAnimationHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,'">The Bowling Game</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' '); if (players.length < 5) { 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', players.length ,'" value=""> </div> '); } 
	p.push(' <div class="', cn.row ,'"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'" style="background-color:', lastResult.color ,'"> <div class="', cn.text ,'"> ', lastResult.value ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,'"> <div class="', cn.top ,'">by Alex AFONIN for</div> <div class="', cn.bottom ,'">Florian FEICHTINGER</div> <img class="', cn.image ,'" src="', imgSrc ,'" data-author="debug"/> </div> ');}return p.join('');
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <button class="', cn.button ,'" data-main="roll"> ROLL BALL!</button> </div> ');}return p.join('');
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,'"> <div class="', cn.cell ,'"> '); if (cell.text) { 
	p.push(' ', cell.text ,' '); } else { 
	p.push(' <div class="', cn.top ,' clearfix"> <div class="cell-left ', cn.half ,'">I</div> <div class="cell-right ', cn.hald ,'">II</div> </div> <div class="cell-mid clearfix"> '); if (cell[0] === 'X') { 
	p.push(' <div class="', cn.full ,'>">X</div> '); } else { 
	p.push(' <div class="cell-left ', cn.half ,'">', cell[0] ,'</div> <div class="cell-right ', cn.half ,'">', cell[1] ,'</div> '); } 
	p.push(' </div> <div class="cell-bot"> <div class="cell-full">', cell.total ,'</div> </div> '); } 
	p.push(' </div> </div> ');}return p.join('');
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div> ', authorHTML ,' </div> <div> ', tableHTML ,' </div> <div> ', buttonHTML ,' </div> </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjA1MTI4ZTlhNWNkNjJlYWEzZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2lnbi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb2xsYmFsbC1hbmltYXRpb24vcm9sbGJhbGwtYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2Uvd29ya3NwYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvcm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2RlYnVnLWJ1Zy1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvY29sb3JzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL25hbWVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC5jc3M/YmMyOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcz9hZGJhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzcz9mZmJiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3M/MzkwMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3M/Y2Y2NSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2F1dGhvci9hdXRob3IuY3NzPzYxMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmNzcz9mZGQ1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3M/NzJjZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9yb3cuY3NzPzY3M2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5jc3M/ZTE2MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3M/NDhlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzP2VjNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3JvbGxiYWxsLWFuaW1hdGlvbi9yb2xsYmFsbC1hbmltYXRpb24uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9jZWxsL2NlbGwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS93b3Jrc3BhY2UuanN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDcENZOzs7Ozs7Ozs7Ozs7Ozs7O0tBUUE7Ozs7Ozs7O0tBRU47QUFDRixjQURFLEdBQ0YsQ0FBYSxLQUFiLEVBQW9COytCQURsQixLQUNrQjs7QUFDaEIsY0FBSyxXQUFMLEdBQ0ssUUFETCxDQUNjLEtBRGQsRUFFSyxhQUZMLEdBR0ssWUFITCxHQURnQjtNQUFwQjs7a0JBREU7O3FDQVFXO0FBQ1Qsb0JBQU87QUFDSCwwQkFBUyxDQUFFLE1BQUYsRUFBVSxXQUFWLEVBQXVCLE9BQXZCLEVBQWdDLGVBQWhDLEVBQWlELFFBQWpELENBQVQ7QUFDQSw2QkFBWSxDQUFFLFdB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QTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUseUVBQXlFO0FBQ3RKLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSw4REFBOEQ7QUFDM0ksRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHdJQUF3STtBQUNyTixFIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjA1MTI4ZTlhNWNkNjJlYWEzZmRcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBjbiBmcm9tICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgKiBhcyB2ZG9tIGZyb20gJy4vdmlydHVhbC1kb20uanMnO1xuaW1wb3J0IGFzc2lnbkV2ZW50cyBmcm9tICcuL2Fzc2lnbi1ldmVudHMuanMnO1xuXG4vLyByZWFjdCBzdHlsZTpcbmltcG9ydCBhcHAgZnJvbSAnLi92aWV3cy9hcHAuanMnO1xuXG4vLyByZWR1eCBzdHlsZTpcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXBwUmVkdWNlci5qcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vcmVkdWNlcnMvYWN0aW9ucy5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdEFwcE5vZGUoKVxuICAgICAgICAgICAgLnNldFN0YXRlKHN0YXRlKVxuICAgICAgICAgICAgLmluaXRHYW1lVGltZXIoKVxuICAgICAgICAgICAgLmFzc2lnbkV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldEV2ZW50cyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2xpY2snOiBbICdtYWluJywgJ2dhbWUtZm9ybScsICdtb2RhbCcsICdmaW5hbC1yZXN1bHRzJywgJ2F1dGhvcicgXSxcbiAgICAgICAgICAgICdmb2N1c291dCc6IFsgJ2dhbWUtZm9ybScgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGFzc2lnbkV2ZW50cyh0aGlzLCB0aGlzLmdldEV2ZW50cygpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0QXBwTm9kZSAoKSB7XG4gICAgICAgIHRoaXMuYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0R2FtZVRpbWVyICgpIHtcbiAgICAgICAgdGhpcy5nYW1lVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnRpY2tUaW1lcigpKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb2xsQmFsbEFuaW1hdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNEZWJ1Z01vZGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICRyb2xsQmFsbEFuaW1hdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICRyb2xsQmFsbEFuaW1hdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCAxMjAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZSwgbm9SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSB8fCB7fSwgc3RhdGUpO1xuXG4gICAgICAgICFub1JlbmRlciAmJiB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlZHVjZUFjdGlvbiAoYWN0aW9uLCBub1JlbmRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKSwgbm9SZW5kZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaXNBbmltYXRpb25JblByb2dyZXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuJHJvbGxCYWxsQW5pbWF0aW9uO1xuICAgIH1cblxuICAgIG9uR2FtZUZvcm1JbnB1dEZvY3Vzb3V0IChlKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudXBkYXRlUGxheWVyTmFtZSh7XG4gICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLFxuICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvbkZpbmFsUmVzdWx0c05ld0NsaWNrICgpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5uZXdHYW1lKCkpO1xuICAgIH1cblxuICAgIG9uTWFpblJvbGxDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW9uSW5Qcm9ncmVzcygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnRocm93QmFsbCgpLCB0cnVlKVxuICAgICAgICAgICAgLnN0YXJ0Um9sbEJhbGxBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5nYW1lLmluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5lbmRHYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtUGxheUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5wbGF5R2FtZSgpKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2VDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMuY2xvc2VNb2RhbCgpKTtcbiAgICB9XG5cbiAgICBvbkF1dGhvckRlYnVnQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmRlYnVnTW9kZSgpKTtcbiAgICB9XG59XG5cbm5ldyBBcHAocmVkdWNlcigpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc3VtQXJyYXkgKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQodmFsIHx8IDAsIDEwKTtcbiAgICB9LCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmROdW0gKG1heCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZEFycihhcnIpIHtcbiAgICByZXR1cm4gYXJyW3JhbmROdW0oYXJyLmxlbmd0aCAtIDEpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAoZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDEsIGlMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMCwgakxlbmd0aCA9IGtleXMubGVuZ3RoOyBqIDwgakxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIGxldCB0eXBlT2ZWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpba2V5XSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlT2ZWYWx1ZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgdHlwZU9mVmFsdWUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGRzdFtrZXldIHx8IChvYmpba2V5XSBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XG4gICAgICAgICAgICAgICAgZHN0W2tleV0gPSBleHRlbmQoZHN0W2tleV0sIG9ialtrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkc3Q7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oZWxwZXJzLmpzXG4gKiovIiwiZXhwb3J0IGxldCBUSUNLX1RJTUVSID0gJ1RJQ0tfVElNRVInO1xuZXhwb3J0IGxldCBUSFJPV19CQUxMID0gJ1RIUk9XX0JBTEwnO1xuZXhwb3J0IGxldCBDTE9TRV9NT0RBTCA9ICdDTE9TRV9NT0RBTCc7XG5leHBvcnQgbGV0IFBMQVlfR0FNRSA9ICdQTEFZX0dBTUUnO1xuZXhwb3J0IGxldCBORVdfR0FNRSA9ICdORVdfR0FNRSc7XG5leHBvcnQgbGV0IEVORF9HQU1FID0gJ0VORF9HQU1FJztcbmV4cG9ydCBsZXQgVVBEQVRFX1BMQVlFUl9OQU1FID0gJ1VQREFURV9QTEFZRVJfTkFNRSc7XG5leHBvcnQgbGV0IERFQlVHX01PREUgPSAnREVCVUdfTU9ERSc7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL3R5cGVzLmpzXG4gKiovIiwiZnVuY3Rpb24gc25ha2VUb0NhbWVsIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhcXC1cXHcpL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIgKGNvbnRleHQsIGV2ZW50c0hhc2gpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gZXZlbnRzSGFzaCkge1xuICAgICAgICAgICAgbGV0IGhhc2ggPSBldmVudHNIYXNoW2F0dHJOYW1lXTtcbiAgICAgICAgICAgIGxldCBhdHRyID0gZS50YXJnZXQuYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyTmFtZSA9IGhhc2gubGlzdGVuZXJOYW1lc1thY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJOYW1lID0gaGFzaC5saXN0ZW5lck5hbWVzW2FjdGlvbl0gPSBzbmFrZVRvQ2FtZWwoYG9uLSR7aGFzaC5jb21wb25lbnR9LSR7YWN0aW9ufS0ke2hhc2guZXZlbnROYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0W2xpc3RlbmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFtsaXN0ZW5lck5hbWVdLmNhbGwoY29udGV4dCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25FdmVudHMgKGNvbnRleHQsIGV2ZW50cykge1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGxldCBldmVudHNIYXNoID0gZXZlbnRzW2V2ZW50TmFtZV0ucmVkdWNlKChhY2MsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgYWNjW2BkYXRhLSR7Y29tcG9uZW50fWBdID0geyBjb21wb25lbnQsIGV2ZW50TmFtZSwgbGlzdGVuZXJOYW1lczoge30gfTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjcmVhdGVFdmVudExpc3RlbmVyKGNvbnRleHQsIGV2ZW50c0hhc2gpKTtcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Fzc2lnbi1ldmVudHMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGxldCB1cGRhdGVQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUExBWUVSX05BTUUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCB0aHJvd0JhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVEhST1dfQkFMTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHBsYXlHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlBMQVlfR0FNRVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IG5ld0dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX0dBTUVcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBlbmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkVORF9HQU1FXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgZGVidWdNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFQlVHX01PREVcbiAgICB9O1xufTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvYWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IG1vZGFsUmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9tb2RhbFJlZHVjZXJDcmVhdGVyJztcbmltcG9ydCBnYW1lUmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lUmVkdWNlckNyZWF0ZXInO1xuXG5sZXQgbW9kYWxSZWR1Y2VyID0gbW9kYWxSZWR1Y2VyQ3JlYXRlcih0eXBlcyk7XG5sZXQgZ2FtZVJlZHVjZXIgPSBnYW1lUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSAoc3RhdGUpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCByb3cgPSB7XG4gICAgICAgIGlzSGVhZDogdHJ1ZSxcbiAgICAgICAgY29sczogc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgdGV4dDogZnJhbWUudGl0bGUsXG4gICAgICAgICAgICBpc1JpZ2h0OiBpbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICBpc1RvcDogdHJ1ZVxuICAgICAgICB9KSlcbiAgICB9O1xuXG4gICAgcm93LmNvbHMudW5zaGlmdCh7dGV4dDpzdGF0ZS5kaWZmVGltZSwgaXNMZWZ0OiB0cnVlLCBpc1RvcDogdHJ1ZX0pO1xuXG4gICAgcm93cy5wdXNoKHJvdyk7XG5cbiAgICBsZXQgcFJvd3MgPSBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBwSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGNvbHMgPSBzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSwgZkluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9sbHMgPSBmcmFtZVtwSW5kZXhdO1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB7XG4gICAgICAgICAgICAgICAgMDogcm9sbHNbMF0gPyByb2xsc1swXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIDE6IHJvbGxzWzFdID8gcm9sbHNbMV0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICB0b3RhbDogcm9sbHMudG90YWwsXG4gICAgICAgICAgICAgICAgaXNSaWdodDogZkluZGV4ID09PSBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBpc0JvdHRvbTogcEluZGV4ID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNTY29yZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50OiBwSW5kZXggPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb2xzLnVuc2hpZnQoe1xuICAgICAgICAgICAgdGV4dDogcGxheWVyLFxuICAgICAgICAgICAgaXNMZWZ0OiB0cnVlLFxuICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNDdXJyZW50OiBwSW5kZXggPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyLFxuICAgICAgICAgICAgY29sc1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcm93cy5wdXNoKC4uLnBSb3dzKTtcblxuICAgIHJldHVybiB7IHJvd3MgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkge1xuICAgIHN0YXRlLmdhbWUgPSBnYW1lUmVkdWNlcihzdGF0ZS5nYW1lLCBhY3Rpb24pO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkRFQlVHX01PREU6XG4gICAgICAgICAgICBzdGF0ZS5pc0RlYnVnTW9kZSA9ICFzdGF0ZS5pc0RlYnVnTW9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdGF0ZS50YWJsZSA9IGNyZWF0ZVRhYmxlKHN0YXRlLmdhbWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZSA9IG1vZGFsUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanNcbiAqKi8iLCIvKiAqKipcbiogVEhJUyBSRURVQ0VSIElTIFJFQURZIEZPUiBTSEFSSU5HIEJMIFRPIE9USEVSIFBMQVRGT1JNLiAoV0lUSCBSRUFDVCBOQVRJVkUgRk9SIEVYQU1QTEUpXG4qKiogKi9cblxuaW1wb3J0IG5hbWVzIGZyb20gJy4vbmFtZXMuanNvbic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzLmpzb24nO1xuaW1wb3J0IHsgc3VtQXJyYXksIHJhbmROdW0sIHJhbmRBcnIgfSBmcm9tICdoZWxwZXJzJztcblxuY29uc3QgRlJBTUVTX0xFTkdUSCA9IDEwO1xuXG5mdW5jdGlvbiByYW5nZSAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIEFycmF5KGxlbmd0aCkuam9pbignICcpLnNwbGl0KCcgJykubWFwKCh2LCBpKSA9PiBpKTtcbn1cblxuZnVuY3Rpb24gcGFkICh2YWx1ZSwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIGxlbmd0aCA9IGxlbmd0aCB8fCAyO1xuXG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY0RpZmZUaW1lIChzdGF0ZSkge1xuICAgIGxldCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKChuZXcgRGF0ZSgpIC0gc3RhdGUuc3RhcnRUaW1lKSAvIDEwMDApLFxuICAgICAgICByaWdodFNpZGUgPSB0b3RhbFNlY29uZHMgJSA2MCxcbiAgICAgICAgbGVmdFNpZGUgPSAodG90YWxTZWNvbmRzIC0gcmlnaHRTaWRlKSAvIDYwO1xuXG4gICAgc3RhdGUuZGlmZlRpbWUgPSBwYWQobGVmdFNpZGUsIDIpICsgJzonICsgcGFkKHJpZ2h0U2lkZSwgMik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGxCYWxsIChwaW5zKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtyYW5kTnVtKHBpbnMpXTtcblxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKHBsYXllcnMpIHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHBsYXllcnM6IHBsYXllcnMgfHwgW3JhbmRBcnIobmFtZXMpLCByYW5kQXJyKG5hbWVzKV0sXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IDAsXG4gICAgICAgIGN1cnJlbnRGcmFtZTogMCxcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICBkaWZmVGltZTogJzAwOjAwJyxcbiAgICAgICAgaW5Qcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgbGFzdFJlc3VsdDoge31cbiAgICB9O1xuXG4gICAgc3RhdGUuZnJhbWVzID0gY3JlYXRlRnJhbWVzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWVzIChzdGF0ZSkge1xuICAgIHJldHVybiByYW5nZShGUkFNRVNfTEVOR1RIKS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdmFsICsgMVxuICAgICAgICB9O1xuXG4gICAgICAgIHN0YXRlLnBsYXllcnMucmVkdWNlKChhY2MsIHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGFjY1tpbmRleF0gPSBbXTtcbiAgICAgICAgICAgIGFjY1tpbmRleF0udG90YWwgPSAnJztcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgZnJhbWUpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbmV4dFBsYXllciAoc3RhdGUpIHtcbiAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIGlzTGFzdFBsYXllcihzdGF0ZSkpIHtcbiAgICAgICAgc3RhdGUuaW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIgPSBwbGF5ZXIgPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA/IDAgOiBwbGF5ZXIgKyAxO1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRGcmFtZSA9IHN0YXRlLmN1cnJlbnRGcmFtZSA8IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxID8gc3RhdGUuY3VycmVudEZyYW1lICsgMSA6IHN0YXRlLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9udXNGcmFtZXMgKHN0YXRlKSB7XG4gICAgbGV0IGZyYW1lcyA9IHN0YXRlLmZyYW1lcy5zbGljZShNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50RnJhbWUgLSAyKSwgc3RhdGUuY3VycmVudEZyYW1lICsgMSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZnJhbWVbc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgfSk7XG5cbiAgICBsZXQgY3VyckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBmcmFtZXMubGVuZ3RoLS07XG5cbiAgICBsZXQgciA9IDIgLSBjdXJyRnJhbWUubGVuZ3RoO1xuICAgIGxldCBib251c0ZyYW1lcyA9IFtdO1xuXG4gICAgd2hpbGUgKHIgJiYgZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXMucG9wKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHIgPT09IDEgJiYgZnJhbWVbMF0udmFsdWUgPT09IDEwKSB8fFxuICAgICAgICAgICAgKHIgPT09IDIgJiYgKGZyYW1lLnRvdGFsID09PSAxMCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYm9udXNGcmFtZXMudW5zaGlmdChmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByIC09IGZyYW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9udXNGcmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdFBsYXllciAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID09PSBzdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RGcmFtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY3VycmVudEZyYW1lID09PSBGUkFNRVNfTEVOR1RIIC0gMTtcbn1cblxuZnVuY3Rpb24gb25UaWNrVGltZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGNhbGNEaWZmVGltZShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVGhyb3dCYWxsIChzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuaW5Qcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgbGV0IGZyYW1lID0gc3RhdGUuZnJhbWVzW3N0YXRlLmN1cnJlbnRGcmFtZV1bc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgbGV0IHBpbnMgPSBGUkFNRVNfTEVOR1RIO1xuICAgIGxldCBwbGF5ZXJOYW1lID0gc3RhdGUucGxheWVyc1tzdGF0ZS5jdXJyZW50UGxheWVyXTtcblxuICAgIGlmIChmcmFtZVswXSAmJiBwaW5zICE9PSBmcmFtZVswXS52YWx1ZSkge1xuICAgICAgICBwaW5zIC09IGZyYW1lWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBib251c0ZyYW1lcyA9IGdldEJvbnVzRnJhbWVzKHN0YXRlKTtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heChyb2xsQmFsbChwaW5zKSwgcm9sbEJhbGwocGlucykpO1xuXG4gICAgYm9udXNGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgZnJhbWUudG90YWwgKz0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBsZXQgcm9sbCA9IHsgdmFsdWUsIHNwZWNpYWw6ICcnIH07XG5cbiAgICBmcmFtZS5wdXNoKHJvbGwpO1xuXG4gICAgbGV0IHJvbGxzU3VtID0gc3VtQXJyYXkoZnJhbWUubWFwKHJvbGwgPT4gcm9sbC52YWx1ZSkpO1xuICAgIGZyYW1lLnRvdGFsID0gcm9sbHNTdW07XG5cbiAgICBpZiAoZnJhbWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChyb2xsLnZhbHVlID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICdYJztcbiAgICAgICAgICAgIHJvbGwuc3BlY2lhbCA9ICdzdHJpa2UnO1xuXG4gICAgICAgICAgICBpZiAoIWlzTGFzdEZyYW1lKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoZnJhbWUudG90YWwgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJy8nO1xuICAgICAgICAgICAgcm9sbC5zcGVjaWFsID0gJ3NwYXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGFzdEZyYW1lKHN0YXRlKSAmJiByb2xsc1N1bSA+PSAxMCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuXG4gICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHN0YXRlLmxhc3RSZXN1bHQudmFsdWUgPSBgJHt2YWx1ZX0gcGlucyFgO1xuICAgIHN0YXRlLmxhc3RSZXN1bHQuY29sb3IgPSByYW5kQXJyKGNvbG9ycyk7XG5cbiAgICBpZiAocm9sbC5zcGVjaWFsKSB7XG4gICAgICAgIHN0YXRlLmxhc3RSZXN1bHQudmFsdWUgKz0gYCAke3JvbGwuc3BlY2lhbC50b1VwcGVyQ2FzZSgpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblVwZGF0ZVBsYXllck5hbWUgKHN0YXRlLCBkYXRhKSB7XG4gICAgc3RhdGUucGxheWVyc1tkYXRhLmluZGV4XSA9IGRhdGEudmFsdWU7XG4gICAgc3RhdGUucGxheWVycyA9IHN0YXRlLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBwbGF5ZXIpO1xuXG4gICAgaWYgKCFzdGF0ZS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICBzdGF0ZS5wbGF5ZXJzLnB1c2gocmFuZEFycihuYW1lcykpO1xuICAgIH1cblxuICAgIHN0YXRlLmZyYW1lcyA9IGNyZWF0ZUZyYW1lcyhzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uUGxheUdhbWUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldEluaXRpYWxTdGF0ZShzdGF0ZS5wbGF5ZXJzKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSAodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblBsYXlHYW1lKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USUNLX1RJTUVSOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRocm93QmFsbChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9nYW1lUmVkdWNlckNyZWF0ZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBzdW1BcnJheSB9IGZyb20gJ2hlbHBlcnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNEYXRhIChzdGF0ZSkge1xuICAgIGxldCBnYW1lID0gc3RhdGUuZ2FtZTtcblxuICAgIHJldHVybiBnYW1lLnBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXIsXG4gICAgICAgICAgICBzY29yZXM6IHN1bUFycmF5KGdhbWUuZnJhbWVzLm1hcCgoZnJhbWUpID0+IGZyYW1lW2luZGV4XS50b3RhbCkpXG4gICAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5zY29yZXMgLSBhLnNjb3JlcztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoc3RhdGUsIGlzT3BlbiA9IHRydWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZmluYWwtcmVzdWx0cycsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbixcbiAgICAgICAgZGF0YTogY3JlYXRlRmluYWxSZXN1bHRzRGF0YShzdGF0ZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtRGF0YSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZ2FtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUZvcm1TdGF0ZShzdGF0ZSwgaXNPcGVuID0gdHJ1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdnYW1lLWZvcm0nLFxuICAgICAgICBzdHlsZTogJ2JsdWUnLFxuICAgICAgICBpc09wZW4sXG4gICAgICAgIGRhdGE6IGNyZWF0ZUdhbWVGb3JtRGF0YShzdGF0ZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxNb2RhbCAoc3RhdGUpIHtcbiAgICByZXR1cm4gY3JlYXRlR2FtZUZvcm1TdGF0ZShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBzdGF0ZS5tb2RhbCA9IHN0YXRlLm1vZGFsIHx8IGdldEluaXRpYWxNb2RhbChzdGF0ZSk7XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5DTE9TRV9NT0RBTDpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kYWwuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuRU5EX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kYWwgPSBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuTkVXX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kYWwgPSBjcmVhdGVHYW1lRm9ybVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL21vZGFsUmVkdWNlckNyZWF0ZXIuanNcbiAqKi8iLCJpbXBvcnQgd29ya3NwYWNlIGZyb20gJy4vd29ya3NwYWNlL3dvcmtzcGFjZS5qcyc7XG5pbXBvcnQgcm9sbGJhbGxBbmltYXRpb24gZnJvbSAnLi9yb2xsYmFsbC1hbmltYXRpb24vcm9sbGJhbGwtYW5pbWF0aW9uLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsL21vZGFsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIG1vZGFsSFRNTDogc3RhdGUubW9kYWwgPyBtb2RhbChzdGF0ZS5tb2RhbCkgOiAnJyxcbiAgICAgICAgcm9sbGJhbGxBbmltYXRpb25IVE1MOiBzdGF0ZS4kcm9sbEJhbGxBbmltYXRpb24gPyByb2xsYmFsbEFuaW1hdGlvbihzdGF0ZS5nYW1lLmxhc3RSZXN1bHQpIDogJycsXG4gICAgICAgIHdvcmtzcGFjZUhUTUw6IHdvcmtzcGFjZShzdGF0ZSksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9hcHAuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9maW5hbC1yZXN1bHRzLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9maW5hbC1yZXN1bHRzLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmaW5hbFJlc3VsdHMpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbixcbiAgICAgICAgZmluYWxSZXN1bHRzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9nYW1lLWZvcm0uY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dhbWUtZm9ybS5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ2FtZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgcGxheWVyczogZ2FtZS5wbGF5ZXJzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzXG4gKiovIiwiaW1wb3J0IGdhbWVGb3JtIGZyb20gJy4vZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyc7XG5pbXBvcnQgZmluYWxSZXN1bHRzIGZyb20gJy4vZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RhbC5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04obW9kYWwpIHtcbiAgICBsZXQgcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChtb2RhbC5zdHlsZSkge1xuICAgICAgICByb290LnB1c2goY25bJ3N0eWxlXycgKyBtb2RhbC5zdHlsZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pbmZvKTtcbiAgICB9XG5cbiAgICBpZiAoIW1vZGFsLmlzT3Blbikge1xuICAgICAgICByb290LnB1c2goJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtb2RhbCkge1xuICAgIGxldCBjb250ZW50SFRNTCA9ICcnO1xuXG4gICAgc3dpdGNoIChtb2RhbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2dhbWUtZm9ybSc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGdhbWVGb3JtKG1vZGFsLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmluYWwtcmVzdWx0cyc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGZpbmFsUmVzdWx0cyhtb2RhbC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IHByZXBhcmVDTihtb2RhbCksXG4gICAgICAgIGNvbnRlbnRIVE1MXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm9sbGJhbGwtYW5pbWF0aW9uLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChsYXN0UmVzdWx0KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgbGFzdFJlc3VsdCxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3JvbGxiYWxsLWFuaW1hdGlvbi9yb2xsYmFsbC1hbmltYXRpb24uanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9hdXRob3IuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2F1dGhvci5qc3QnO1xuaW1wb3J0IGltZ1NyYyBmcm9tICdpbWFnZXMvZGVidWctYnVnLWljb24ucG5nJztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBjbi5fcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChzdGF0ZS5pc0RlYnVnTW9kZSkge1xuICAgICAgICByb290LnB1c2goY24uaWRfZGVidWdtb2RlKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBpbWdTcmMsXG4gICAgICAgIGNuOiBwcmVwYXJlQ04oc3RhdGUpXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2J1dHRvbi5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYnV0dG9uLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9jZWxsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jZWxsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNMZWZ0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19sZWZ0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNSaWdodCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfcmlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1RvcCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfdG9wKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNCb3R0b20pIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2JvdHRvbSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzU2NvcmVzKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19zY29yZXMpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2N1cnJlbnQpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgY246IHByZXBhcmVDTihjZWxsKVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9jZWxsL2NlbGwuanNcbiAqKi8iLCJpbXBvcnQgY2VsbCBmcm9tICcuL2NlbGwvY2VsbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9yb3cuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04oc3RhdGUpIHtcbiAgICBsZXQgcm9vdCA9IGNuLl9yb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKHN0YXRlLmlzQ3VycmVudCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfY3VycmVudCk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjZWxsc0hUTUw6IHJvdy5jb2xzLm1hcChjZWxsKS5qb2luKCcnKSxcbiAgICAgICAgY246IHByZXBhcmVDTihyb3cpXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qc1xuICoqLyIsImltcG9ydCByb3cgZnJvbSAnLi9yb3cvcm93LmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3RhYmxlLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWJsZS5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogc3RhdGUucm93cy5tYXAocm93KS5qb2luKCcnKSxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5qc1xuICoqLyIsImltcG9ydCBhdXRob3IgZnJvbSAnLi9hdXRob3IvYXV0aG9yLmpzJztcbmltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24vYnV0dG9uLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3dvcmtzcGFjZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vd29ya3NwYWNlLmpzdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgYXV0aG9ySFRNTDogc3RhdGUgPyBhdXRob3Ioc3RhdGUpIDogJycsXG4gICAgICAgIHRhYmxlSFRNTDogc3RhdGUgPyB0YWJsZShzdGF0ZS50YWJsZSkgOiAnJyxcbiAgICAgICAgYnV0dG9uSFRNTDogc3RhdGUgPyBidXR0b24oKSA6ICcnLFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5qc1xuICoqLyIsImNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICB2YWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICBpZiAoSFRNTC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZXhjZXB0IGlPUyA3IFNhZmFyaSwgSUUgOC85LCBBbmRyaW9kIEJyb3dzZXIgNC4xLzQzXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhIVE1MLCAndGV4dC9odG1sJykuZG9jdW1lbnRFbGVtZW50O1xuICAgIGxldCBoZWFkID0gZG9jLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IGJvZHkgPSBkb2MuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGlmIChub2RlID0gaGVhZC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlID0gYm9keS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgdk5vZGUgPSB7XG4gICAgICAgIHR5cGU6IG5vZGUubm9kZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgdk5vZGUuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW5zID0gW107XG4gICAgICAgIHZOb2RlLmF0dHJzID0ge307XG4gICAgICAgIHZOb2RlLnRhZyA9IG5vZGUudGFnTmFtZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW5zLnB1c2goY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzTmFtZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZOb2RlLmF0dHJzW25hbWVdID0gbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2Tm9kZTtcbn1cblxuZnVuY3Rpb24gam9pbkF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGxldCBhdHRyID0gYXR0cnNba2V5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGtleSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHthdHRyfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCA9ICcnKSB7XG4gICAgbGV0IGF0dHJzID0gam9pbkF0dHJzKHZOb2RlLmF0dHJzKTtcblxuICAgIHN3aXRjaCh2Tm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIGAke2lubmVySFRNTH1gO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gYDwke3ZOb2RlLnRhZ30gJHthdHRyc30+JHtpbm5lckhUTUx9PC8ke3ZOb2RlLnRhZ30+YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwodk5vZGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodk5vZGUudHlwZSAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lckhUTUwgKz0gcmVuZGVySFRNTCh2Tm9kZS5jaGlsZHJlbnNbaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJIVE1MID0gdk5vZGUuY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MKTtcbn1cblxuZXhwb3J0IGxldCBkaWZmID0gZnVuY3Rpb24gKHZOb2RlMSwgdk5vZGUyKSB7XG4gICAgaWYgKHZOb2RlMSAmJiAhdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdk5vZGUxICYmIHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50YWcgIT09IHZOb2RlMi50YWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKHZOb2RlMS5jb250ZW50ICE9PSB2Tm9kZTIuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJzID0gW107XG4gICAgICAgIGxldCBwYXRjaCA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMSA9IHZOb2RlMS5hdHRyc1trZXldO1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMi5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxVmFsID0gYXR0cjEuam9pbignICcpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyMVZhbCAhPT0gYXR0cjJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMS5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjIpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2Tm9kZTEuY2hpbGRyZW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYXR0cnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIG9wKSB7XG4gICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRVBMQUNFX05PREUnOlxuICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBjcmVhdGVFbGVtZW50KG9wLnZOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0ck9wcyhub2RlLCBvcHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3BzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcCA9IG9wc1tpXTtcbiAgICAgICAgbGV0IG5hbWUgPSBvcC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNQcm9wID0gcHJvcE5hbWVzW25hbWVdO1xuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtuYW1lXSA9IG9wLnZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBvcC52YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbbmFtZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwX19yb290X19fM05uRUgge1xcbiAgICBwYWRkaW5nLXRvcDogNTAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QlwiLFwiZmlsZVwiOlwiYXBwLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiYXBwX19yb290X19fM05uRUhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbmFsLXJlc3VsdHNfX25hbWVfX19NU2l3ZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5maW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmMzljMTI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCXCIsXCJmaWxlXCI6XCJmaW5hbC1yZXN1bHRzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZjM5YzEyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hbWVcIjogXCJmaW5hbC1yZXN1bHRzX19uYW1lX19fTVNpd2RcIixcblx0XCJ3aW5uZXJcIjogXCJmaW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZclwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtX19yb290X19fMVFUek4geyB9XFxuXFxuLmdhbWUtZm9ybV9fbmFtZV9fX0hFUmd5IHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9faW5wdXRfX18xa3BuYyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Yge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Y6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQVM7O0FBRVQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiZ2FtZS1mb3JtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7IH1cXG5cXG4ubmFtZSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4ucm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJnYW1lLWZvcm1fX3Jvb3RfX18xUVR6TlwiLFxuXHRcIm5hbWVcIjogXCJnYW1lLWZvcm1fX25hbWVfX19IRVJneVwiLFxuXHRcImlucHV0XCI6IFwiZ2FtZS1mb3JtX19pbnB1dF9fXzFrcG5jXCIsXG5cdFwicm93XCI6IFwiZ2FtZS1mb3JtX19yb3dfX18yZGxXZlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsX19yb290X19fMm9qNzkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnRfX18zLVR5UCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2luZm9fX18xaWszSiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX29yYW5nZV9fXzJWWE1sIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfYmx1ZV9fXzFvQkNMIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJDQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsV2luZG93O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ibHVlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsV2luZG93IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcIm1vZGFsV2luZG93XCI6IFwibW9kYWxfX21vZGFsV2luZG93X19fMkdoNEVcIixcblx0XCJjbG9zZVwiOiBcIm1vZGFsX19jbG9zZV9fXzFPdHhvXCIsXG5cdFwiY29udGVudFwiOiBcIm1vZGFsX19jb250ZW50X19fMy1UeVBcIixcblx0XCJzdHlsZV9pbmZvXCI6IFwibW9kYWxfX3N0eWxlX2luZm9fX18xaWszSlwiLFxuXHRcInN0eWxlX2dyZWVuXCI6IFwibW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm1cIixcblx0XCJzdHlsZV9vcmFuZ2VcIjogXCJtb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWxcIixcblx0XCJzdHlsZV9yZWRcIjogXCJtb2RhbF9fc3R5bGVfcmVkX19fMUxQZHhcIixcblx0XCJzdHlsZV9ibHVlXCI6IFwibW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb2xsYmFsbC1hbmltYXRpb25fX3Jvb3RfX18zNDAxOSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtMTUlO1xcbiAgICBsZWZ0OiAtMTUlO1xcbiAgICB3aWR0aDogMTMwJTtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbGJhbGwtYW5pbWF0aW9uX19yb2xsQmFsbF9fXzE4Mmg3O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5yb2xsYmFsbC1hbmltYXRpb25fX3RleHRfX18yT1JhMCB7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxiYWxsLWFuaW1hdGlvbl9fcm9sbEJhbGxUZXh0X19fM1pPLVA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzNDQ5NWU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgcm9sbGJhbGwtYW5pbWF0aW9uX19yb2xsQmFsbF9fXzE4Mmg3IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsVGV4dF9fXzNaTy1QIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixxREFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5REFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0NBQzdCOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCOztFQUVEO0lBQ0UsV0FBVztJQUNYLCtCQUErQjtHQUNoQztDQUNGOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCOztFQUVEO0lBQ0Usa0NBQWtDO0dBQ25DOztFQUVEO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3Qjs7RUFFRDtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCO0NBQ0ZcIixcImZpbGVcIjpcInJvbGxiYWxsLWFuaW1hdGlvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogLTE1JTtcXG4gICAgbGVmdDogLTE1JTtcXG4gICAgd2lkdGg6IDEzMCU7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNTQwMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxCYWxsO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbEJhbGxUZXh0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMzQ0OTVlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxCYWxsIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsQmFsbFRleHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMiwgMiwgMik7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicm9sbGJhbGwtYW5pbWF0aW9uX19yb290X19fMzQwMTlcIixcblx0XCJyb2xsQmFsbFwiOiBcInJvbGxiYWxsLWFuaW1hdGlvbl9fcm9sbEJhbGxfX18xODJoN1wiLFxuXHRcInRleHRcIjogXCJyb2xsYmFsbC1hbmltYXRpb25fX3RleHRfX18yT1JhMFwiLFxuXHRcInJvbGxCYWxsVGV4dFwiOiBcInJvbGxiYWxsLWFuaW1hdGlvbl9fcm9sbEJhbGxUZXh0X19fM1pPLVBcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9yb2xsYmFsbC1hbmltYXRpb24vcm9sbGJhbGwtYW5pbWF0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRob3JfX3Jvb3RfX18yNTl0NCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxufVxcblxcbi5hdXRob3JfX3RvcF9fXzJsRGp1IHsgfVxcblxcbi5hdXRob3JfX2JvdHRvbV9fXzFNLWo0IHsgfVxcblxcbi5hdXRob3JfX2ltYWdlX19fMW9GWGwge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hdXRob3JfX2lkX2RlYnVnbW9kZV9fXzJGcTVIIC5hdXRob3JfX2ltYWdlX19fMW9GWGwge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YzOWMxMjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztDQUNkOztBQUVELHdCQUFROztBQUVSLDJCQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDXCIsXCJmaWxlXCI6XCJhdXRob3IuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAtNTBweDtcXG59XFxuXFxuLnRvcCB7IH1cXG5cXG4uYm90dG9tIHsgfVxcblxcbi5pbWFnZSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlkX2RlYnVnbW9kZSAuaW1hZ2Uge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YzOWMxMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiYXV0aG9yX19yb290X19fMjU5dDRcIixcblx0XCJ0b3BcIjogXCJhdXRob3JfX3RvcF9fXzJsRGp1XCIsXG5cdFwiYm90dG9tXCI6IFwiYXV0aG9yX19ib3R0b21fX18xTS1qNFwiLFxuXHRcImltYWdlXCI6IFwiYXV0aG9yX19pbWFnZV9fXzFvRlhsXCIsXG5cdFwiaWRfZGVidWdtb2RlXCI6IFwiYXV0aG9yX19pZF9kZWJ1Z21vZGVfX18yRnE1SFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b25fX3Jvb3RfX18xVWxXWSB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYnV0dG9uX19idXR0b25fX19sUkhsVCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXG59XFxuXFxuLmJ1dHRvbl9fYnV0dG9uX19fbFJIbFQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAxNTcsIDg3KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDXCIsXCJmaWxlXCI6XCJidXR0b24uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDk0MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAxNTcsIDg3KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiYnV0dG9uX19yb290X19fMVVsV1lcIixcblx0XCJidXR0b25cIjogXCJidXR0b25fX2J1dHRvbl9fX2xSSGxUXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGxfX3Jvb3RfX18xeFZrdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbF9fY2VsbF9fXzNMT05oIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5jZWxsX190b3BfX18yMHlVQiB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbF9faGFsZl9fXzJTVUJuIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jZWxsX19mdWxsX19fM2ZpdmkgeyB9XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fMTBHS2ggLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbF9faXNfYm90dG9tX19fMlR6VUEgLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2xlZnRfX19YaGR0YyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2VsbF9faXNfcmlnaHRfX18xMEdLaCxcXG4uY2VsbF9faXNfbGVmdF9fX1hoZHRjIHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5jZWxsX19pc190b3BfX18xWFRrbyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDtcXG59XFxuXFxuLmNlbGxfX2lzX3Njb3Jlc19fXzF0RFNWIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fMVhUa28gLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRCx1QkFBUzs7QUFFVDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtDQUNwQlwiLFwiZmlsZVwiOlwiY2VsbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlLW91dDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGFsZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZnVsbCB7IH1cXG5cXG4uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2JvdHRvbSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2xlZnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX3JpZ2h0LFxcbi5pc19sZWZ0IHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5pc190b3Age1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwMDA7XFxufVxcblxcbi5pc19zY29yZXMge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5pc190b3AgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiY2VsbF9fcm9vdF9fXzF4Vmt0XCIsXG5cdFwiY2VsbFwiOiBcImNlbGxfX2NlbGxfX18zTE9OaFwiLFxuXHRcInRvcFwiOiBcImNlbGxfX3RvcF9fXzIweVVCXCIsXG5cdFwiaGFsZlwiOiBcImNlbGxfX2hhbGZfX18yU1VCblwiLFxuXHRcImZ1bGxcIjogXCJjZWxsX19mdWxsX19fM2ZpdmlcIixcblx0XCJpc19yaWdodFwiOiBcImNlbGxfX2lzX3JpZ2h0X19fMTBHS2hcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX18yVHpVQVwiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fWGhkdGNcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX18xWFRrb1wiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fXzF0RFNWXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvd19fcm9vdF9fXzFZeUtOIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yb3dfX2lzX2hlYWRfX18zUDdONyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5yb3dfX2lzX2N1cnJlbnRfX180ZTJuaSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjQ2KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSx3Q0FBd0M7Q0FDM0NcIixcImZpbGVcIjpcInJvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlzX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uaXNfY3VycmVudCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjQ2KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicm93X19yb290X19fMVl5S05cIixcblx0XCJpc19oZWFkXCI6IFwicm93X19pc19oZWFkX19fM1A3TjdcIixcblx0XCJpc19jdXJyZW50XCI6IFwicm93X19pc19jdXJyZW50X19fNGUybmlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGVfX3Jvb3RfX18xN21VRCB7XFxuICAgIHdpZHRoOiA5NTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM5cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZFwiLFwiZmlsZVwiOlwidGFibGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDk1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzlweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwidGFibGVfX3Jvb3RfX18xN21VRFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud29ya3NwYWNlX19yb290X19fbm5PTmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjMsIDIyMSwgMC40Nyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzgwOThBNztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2Uvd29ya3NwYWNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCXCIsXCJmaWxlXCI6XCJ3b3Jrc3BhY2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTYzLCAyMjEsIDAuNDcpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM4MDk4QTc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIndvcmtzcGFjZV9fcm9vdF9fX25uT05hXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmZiNzFhOGQzZmExNmRkOTFkOWRhNGFjYWI3MTcwYTEuY3NzXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXIhLi9+L2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzQyYjg5MjhkNDRhMzc0NWEzMGFlZjljZjJhZjRmOTMucG5nXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWFnZXMvZGVidWctYnVnLWljb24ucG5nXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzFhYmM5Y1wiLFxuXHRcIiMzMWNkNzNcIixcblx0XCIjMzQ5OGRiXCIsXG5cdFwiIzliNTliNlwiLFxuXHRcIiMzNDQ5NWVcIixcblx0XCIjMTZhMDg1XCIsXG5cdFwiIzI3YWU2MFwiLFxuXHRcIiMyYjg0YmZcIixcblx0XCIjOGU0NGFkXCIsXG5cdFwiIzJjM2U1MFwiLFxuXHRcImYxYzQwZlwiLFxuXHRcIiNlNjdlMjJcIixcblx0XCIjZTc0YzNjXCIsXG5cdFwiI2YzOWMxMlwiLFxuXHRcIiNkMzU0MDBcIixcblx0XCIjYzAzOTJiXCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9jb2xvcnMuanNvblxuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWRkU3R5bGVVcmwoY3NzVXJsKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHN0eWxlRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRzdHlsZUVsZW1lbnQuaHJlZiA9IGNzc1VybDtcclxuXHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0aWYobW9kdWxlLmhvdCkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzc1VybCkge1xyXG5cdFx0XHRpZih0eXBlb2YgY3NzVXJsID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50LmhyZWYgPSBjc3NVcmw7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGVhZC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZVVybC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb2xsYmFsbC1hbmltYXRpb24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb2xsYmFsbC1hbmltYXRpb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXV0aG9yLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXV0aG9yLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hdXRob3IuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9idXR0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9idXR0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2J1dHRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb3cuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi93b3Jrc3BhY2UuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi93b3Jrc3BhY2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3dvcmtzcGFjZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgcmVmZXJlbmNlIHRvIGEgY3NzIGZpbGUgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8bGluaz4gdGFnXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvVHVjaC9Qcm9qZWN0cy90aGUtYm93bGluZy1nYW1lL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVVcmwuanNcIikoXG5cdHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5jc3NcIilcbik7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LWxvYWRlci9saWIvZXh0cmFjdExvYWRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHVwZGF0ZShyZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LWxvYWRlci9saWIvZXh0cmFjdExvYWRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpKTtcblx0fSk7XG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXY+ICcsIHdvcmtzcGFjZUhUTUwgLCcgPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gPGRpdj4gJywgcm9sbGJhbGxBbmltYXRpb25IVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJyAnLCBjbi53aW5uZXIgLCdcIj4nLCBmaW5hbFJlc3VsdHNbMF0ubmFtZSAsJyAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdj4gJyk7IGZpbmFsUmVzdWx0cy5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPicsIHBsYXllci5uYW1lICwnIC0gJywgcGxheWVyLnNjb3JlcyAsJzwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGJ1dHRvbiBkYXRhLWZpbmFsLXJlc3VsdHM9XCJuZXdcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+TmV3IGdhbWU8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0XG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+VGhlIEJvd2xpbmcgR2FtZTwvZGl2PiAnKTsgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIGluZGV4KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgaW5kZXggLCdcIiB2YWx1ZT1cIicsIHBsYXllciAsJ1wiPiA8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnICcpOyBpZiAocGxheWVycy5sZW5ndGggPCA1KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgcGxheWVycy5sZW5ndGggLCdcIiB2YWx1ZT1cIlwiPiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxidXR0b24gZGF0YS1nYW1lLWZvcm09XCJwbGF5XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPlBsYXk8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdFxuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCcgYW5pbWF0ZWRcIj4gPGRpdiBkYXRhLW1vZGFsPVwiY2xvc2VcIiBjbGFzcz1cIicsIGNuLmNsb3NlICwnXCI+w5c8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmNvbnRlbnQgLCdcIj4gJywgY29udGVudEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JywgbGFzdFJlc3VsdC5jb2xvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24udGV4dCAsJ1wiPiAnLCBsYXN0UmVzdWx0LnZhbHVlICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi50b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmJvdHRvbSAsJ1wiPkZsb3JpYW4gRkVJQ0hUSU5HRVI8L2Rpdj4gPGltZyBjbGFzcz1cIicsIGNuLmltYWdlICwnXCIgc3JjPVwiJywgaW1nU3JjICwnXCIgZGF0YS1hdXRob3I9XCJkZWJ1Z1wiLz4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmpzdFxuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8YnV0dG9uIGNsYXNzPVwiJywgY24uYnV0dG9uICwnXCIgZGF0YS1tYWluPVwicm9sbFwiPiBST0xMIEJBTEwhPC9idXR0b24+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvYnV0dG9uL2J1dHRvbi5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5jZWxsICwnXCI+ICcpOyBpZiAoY2VsbC50ZXh0KSB7IFxucC5wdXNoKCcgJywgY2VsbC50ZXh0ICwnICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi50b3AgLCcgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+STwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxkICwnXCI+SUk8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLW1pZCBjbGVhcmZpeFwiPiAnKTsgaWYgKGNlbGxbMF0gPT09ICdYJykgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5mdWxsICwnPlwiPlg8L2Rpdj4gJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFswXSAsJzwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFsxXSAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNlbGwudG90YWwgLCc8L2Rpdj4gPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnIGNsZWFyZml4XCI+ICcsIGNlbGxzSFRNTCAsJyA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvdGFibGUuanN0XG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXY+ICcsIGF1dGhvckhUTUwgLCcgPC9kaXY+IDxkaXY+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPGRpdj4gJywgYnV0dG9uSFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS93b3Jrc3BhY2UuanN0XG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=