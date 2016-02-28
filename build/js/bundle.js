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
	
	var _index = __webpack_require__(26);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(29);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _virtualDom = __webpack_require__(17);
	
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
	                'click': ['main', 'game-form', 'modal', 'final-results'],
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
	        value: function setState(state) {
	            this.state = Object.assign(this.state || {}, state);
	
	            this.render();
	
	            return this;
	        }
	    }, {
	        key: 'reduceAction',
	        value: function reduceAction(action) {
	            this.setState((0, _appReducer2.default)(this.state, action));
	
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
	
	            this.reduceAction(actions.throwBall()).startRollBallAnimation(function () {
	                if (!_this4.state.game.inProgress) {
	                    _this4.reduceAction(actions.endGame());
	                }
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
	        key: 'isAnimationInProgress',
	        value: function isAnimationInProgress() {
	            return this.state.$rollBallAnimation;
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
	
	var _names = __webpack_require__(28);
	
	var _names2 = _interopRequireDefault(_names);
	
	var _colors = __webpack_require__(27);
	
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
	
	exports.default = function (app) {
	    return (0, _app4.default)({
	        tableHTML: app.table ? (0, _table2.default)(app.table) : '',
	        modalHTML: app.modal ? (0, _modal2.default)(app.modal) : '',
	        rollBallAnimation: app.$rollBallAnimation,
	        lastResult: app.game.lastResult,
	        cn: _app2.default
	    });
	};
	
	var _table = __webpack_require__(16);

	var _table2 = _interopRequireDefault(_table);

	var _modal = __webpack_require__(13);

	var _modal2 = _interopRequireDefault(_modal);

	var _app = __webpack_require__(30);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(37);

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
	
	var _finalResults = __webpack_require__(31);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _finalResults3 = __webpack_require__(38);

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
	
	var _gameForm = __webpack_require__(32);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(39);

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
	
	var _modal = __webpack_require__(33);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _modal3 = __webpack_require__(40);
	
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
	
	exports.default = function (cell) {
	    return (0, _cell4.default)({
	        cell: cell,
	        cn: prepareCN(cell)
	    });
	};
	
	var _cell = __webpack_require__(34);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _cell3 = __webpack_require__(41);
	
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
/* 15 */
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
	
	var _cell = __webpack_require__(14);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _row = __webpack_require__(35);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _row3 = __webpack_require__(42);
	
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
/* 16 */
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
	
	var _row = __webpack_require__(15);

	var _row2 = _interopRequireDefault(_row);

	var _table = __webpack_require__(36);

	var _table2 = _interopRequireDefault(_table);

	var _table3 = __webpack_require__(43);

	var _table4 = _interopRequireDefault(_table3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n", "", {"version":3,"sources":["/./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,UAAU;IACV,0BAA0B;CAC7B;;AAED;IACI,uBAAuB;CAC1B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;CACf;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,gBAAgB;IAChB,aAAa;CAChB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,wBAAwB;IACxB,0BAA0B;CAC7B","file":"main.css","sourcesContent":["body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".app__root___3NnEH {\n}\n.app__image___wJnXN {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___26GfS {\n    position:relative;\n}\n\n.app__author___28TXt {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.app__author__top___3G1Ht { }\n\n.app__author__bottom___2SGHt { }\n\n.app__button___3eXCM {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.app__button___3eXCM:hover {\n    box-shadow: 0px 2px 0px 0px #226793;\n    animation-name: app__shake___QFSNO;\n    text-shadow: 2px 2px rgba(0, 0, 0, 0.29);\n}\n\n.app__workspace___mxalV {\n    background-color: #4DA3DD;\n    margin-top: 15%;\n    position: relative;\n    box-shadow: 0 5px #226793;\n}\n\n.app__rollball__animation___bN9m8 {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: app__rollBall___2SxWr;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.app__rollball__text___E5CSf {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: app__rollBallText___1OxlL;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes app__rollBall___2SxWr {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes app__rollBallText___1OxlL {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n", "", {"version":3,"sources":["/./src/views/app.css"],"names":[],"mappings":"AAAA;CACC;AACD;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;;AAGD,6BAAgB;;AAEhB,gCAAmB;;AAEnB;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,oBAAoB;CACvB;;AAED;IACI,oCAAoC;IACpC,mCAAsB;IACtB,yCAAyC;CAC5C;;AAED;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,sCAAyB;IACzB,yBAAyB;IACzB,0BAA0B;CAC7B;;AAED;IACI,OAAO;IACP,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,0CAA6B;IAC7B,4CAA4C;IAC5C,uBAAuB;IACvB,6BAA6B;IAC7B,0BAA0B;CAC7B;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,+BAA+B;GAChC;CACF;;AAED;EACE;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF","file":"app.css","sourcesContent":[".root {\n}\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.author__top { }\n\n.author__bottom { }\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.button:hover {\n    box-shadow: 0px 2px 0px 0px #226793;\n    animation-name: shake;\n    text-shadow: 2px 2px rgba(0, 0, 0, 0.29);\n}\n\n.workspace {\n    background-color: #4DA3DD;\n    margin-top: 15%;\n    position: relative;\n    box-shadow: 0 5px #226793;\n}\n\n.rollball__animation {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: rollBall;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.rollball__text {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: rollBallText;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes rollBall {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollBallText {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "app__root___3NnEH",
		"image": "app__image___wJnXN",
		"button__wp": "app__button__wp___26GfS",
		"author": "app__author___28TXt",
		"author__top": "app__author__top___3G1Ht",
		"author__bottom": "app__author__bottom___2SGHt",
		"button": "app__button___3eXCM",
		"shake": "app__shake___QFSNO",
		"workspace": "app__workspace___mxalV",
		"rollball__animation": "app__rollball__animation___bN9m8",
		"rollBall": "app__rollBall___2SxWr",
		"rollball__text": "app__rollball__text___E5CSf",
		"rollBallText": "app__rollBallText___1OxlL"
	};

/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell__root___shEu7 {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__cell___17nil {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n    transition: all 3s ease-out;\n}\n\n.cell__top___2HFoL {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.cell__half___2kG17 {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___1BDIZ { }\n\n.cell__is_right___2aSJT .cell__cell___17nil {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___pWO03 .cell__cell___17nil {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___10O8g {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.cell__is_right___2aSJT,\n.cell__is_left___10O8g {\n    width: 200px\n}\n\n.cell__is_top___3qzm6 {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.cell__is_scores___X5CzC {\n    font-size: 12px;\n}\n\n/*.is_current .cell {*/\n    /*background-color: #2c3e50;*/\n    /*color: #e67e22;*/\n/*}*/\n\n/*.is_current.is_left {*/\n    /*[>border-left: 5px solid #e67e22;<]*/\n    /*border-left: 5px solid transparent;*/\n/*}*/\n\n/*.is_current.is_right {*/\n    /*border-right: 5px solid transparent;*/\n/*}*/\n\n.cell__is_top___3qzm6 .cell__cell___17nil {\n    background-color: transparent;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/./src/views/table/row/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;IAC1B,4BAA4B;CAC/B;;AAED;IACI,iCAAiC;CACpC;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS;;AAET;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;CACf;;AAED;IACI,gBAAgB;CACnB;;AAED,uBAAuB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB,KAAK;;AAEL,yBAAyB;IACrB,uCAAuC;IACvC,uCAAuC;AAC3C,KAAK;;AAEL,0BAA0B;IACtB,wCAAwC;AAC5C,KAAK;;AAEL;IACI,8BAA8B;IAC9B,iBAAiB;CACpB","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n    transition: all 3s ease-out;\n}\n\n.top {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.is_right,\n.is_left {\n    width: 200px\n}\n\n.is_top {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n/*.is_current .cell {*/\n    /*background-color: #2c3e50;*/\n    /*color: #e67e22;*/\n/*}*/\n\n/*.is_current.is_left {*/\n    /*[>border-left: 5px solid #e67e22;<]*/\n    /*border-left: 5px solid transparent;*/\n/*}*/\n\n/*.is_current.is_right {*/\n    /*border-right: 5px solid transparent;*/\n/*}*/\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "cell__root___shEu7",
		"cell": "cell__cell___17nil",
		"top": "cell__top___2HFoL",
		"half": "cell__half___2kG17",
		"full": "cell__full___1BDIZ",
		"is_right": "cell__is_right___2aSJT",
		"is_bottom": "cell__is_bottom___pWO03",
		"is_left": "cell__is_left___10O8g",
		"is_top": "cell__is_top___3qzm6",
		"is_scores": "cell__is_scores___X5CzC"
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row__root___3-Olh {\n    border: 5px solid transparent;\n}\n\n.row__is_head___cTdPq {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.row__is_current___3jhIL {\n    border-color: rgb(34, 103, 147);\n}\n", "", {"version":3,"sources":["/./src/views/table/row/row.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;CACjC;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;CACpC;;AAED;IACI,gCAAgC;CACnC","file":"row.css","sourcesContent":[".root {\n    border: 5px solid transparent;\n}\n\n.is_head {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.is_current {\n    border-color: rgb(34, 103, 147);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "row__root___3-Olh",
		"is_head": "row__is_head___cTdPq",
		"is_current": "row__is_current___3jhIL"
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".table__root___12rmF {\n    width: 950px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -39px;\n}\n", "", {"version":3,"sources":["/./src/views/table/table.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd","file":"table.css","sourcesContent":[".root {\n    width: 950px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -39px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "table__root___12rmF"
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./cell.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./row.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
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
/* 37 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.workspace ,'"> <div class="', cn.author ,'"> <div class="', cn.author__top ,'">by Alex AFONIN for</div> <div class="', cn.author__bottom ,'">Florian FEICHTINGER</div> </div> <div class="', cn.table ,'"> ', tableHTML ,' </div> </div> <div class="', cn.button__wp ,'"> <button class="', cn.button ,'" data-main="roll"> ROLL BALL!</button> </div> <div> ', modalHTML ,' </div> '); if (rollBallAnimation) { 
	p.push(' <div class="', cn.rollball__animation ,'" style="background-color:', lastResult.color ,'"> <div class="', cn.rollball__text ,'"> ', lastResult.value ,' </div> </div> '); } 
	p.push(' </div> ');}return p.join('');
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDE0ZjRkOTUzMmFlNGZhMjU4YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2lnbi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlydHVhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvbG9ycy5qc29uIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/ZTkyMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmNzcz9iYzI4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzP2FkYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzP2ZmYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcz8zOTAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvY2VsbC9jZWxsLmNzcz9iODNhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvcm93LmNzcz9kNTMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3M/MmYxYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7S0FRQTs7Ozs7Ozs7S0FFTjtBQUNGLGNBREUsR0FDRixDQUFhLEtBQWIsRUFBb0I7K0JBRGxCLEtBQ2tCOztBQUNoQixjQUFLLFdBQUwsR0FDSyxRQURMLENBQ2MsS0FEZCxFQUVLLGFBRkwsR0FHSyxZQUhMLEdBRGdCO01BQXBCOztrQkFERTs7cUNBUVc7QUFDVCxvQkFBTztBQUNILDBCQUFTLENBQUUsTUFBRixFQUFVLFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0MsZUFBaEMsQ0FBVDtBQUNBLDZCQUFZLENBQUUsV0FBRixDQUFaO2NBRkosQ0FEUzs7Ozt3Q0FPRztBQUNaLHlDQUFhLElBQWIsRUFBbUIsS0FBSyxTQUFMLEVBQW5CLEVBRFk7O0FBR1osb0JBQU8sSUFBUCxDQUhZOzs7O3VDQU1EO0FBQ1gsa0JBQUssT0FBTCxHQUFlLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFmLENBRFc7O0FBR1gsb0JBQU8sSUFBUCxDQUhXOzs7O3lDQU1FOzs7QUFDYixrQkFBSyxTQUFMLElBQWtCLGNBQWMsS0FBSyxTQUFMLENBQWhDLENBRGE7O0FBR2Isa0JBQUssU0FBTCxHQUFpQixZQUFZLFlBQU07QUFDL0IsdUJBQUssWUFBTCxDQUFrQixRQUFRLFNBQVIsRUFBbEIsRUFEK0I7Y0FBTixFQUUxQixJQUZjLENBQWpCLENBSGE7O0FBT2Isb0JBQU8sSUFBUCxDQVBhOzs7O2dEQVVPLFVBQVU7OztBQUM5QixrQkFBSyxRQUFMLENBQWM7QUFDVixxQ0FBb0IsSUFBcEI7Y0FESixFQUQ4Qjs7QUFLOUIsd0JBQVcsWUFBTTtBQUNiLHdCQUFLLFFBQUwsQ0FBYztBQUNWLHlDQUFvQixLQUFwQjtrQkFESixFQURhOztBQUtiLDRCQUxhO2NBQU4sRUFNUixJQU5ILEVBTDhCOztBQWE5QixvQkFBTyxJQUFQLENBYjhCOzs7O2tDQWdCekIsT0FBTztBQUNaLGtCQUFLLEtBQUwsR0FBYSxPQUFPLE1BQVAsQ0FBYyxLQUFLLEtBQUwsSUFBYyxFQUFkLEVBQWtCLEtBQWhDLENBQWIsQ0FEWTs7QUFHWixrQkFBSyxNQUFMLEdBSFk7O0FBS1osb0JBQU8sSUFBUCxDQUxZOzs7O3NDQVFGLFFBQVE7QUFDbEIsa0JBQUssUUFBTCxDQUFjLDBCQUFRLEtBQUssS0FBTCxFQUFZLE1BQXBCLENBQWQsRUFEa0I7O0FBR2xCLG9CQUFPLElBQVAsQ0FIa0I7Ozs7a0NBTWI7OztBQUNMLG1DQUFzQixZQUFNO0FBQ3hCLHFCQUFJLE9BQU8sbUJBQUksT0FBSyxLQUFMLENBQVgsQ0FEb0I7QUFFeEIscUJBQUksUUFBUSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBUixDQUZvQjs7QUFJeEIscUJBQUksT0FBSyxLQUFMLElBQWMsT0FBSyxJQUFMLEVBQVc7QUFDekIsMEJBQUssVUFBTCxDQUFnQixPQUFLLElBQUwsRUFBVyxLQUFLLElBQUwsQ0FBVSxPQUFLLEtBQUwsRUFBWSxLQUF0QixDQUEzQixFQUR5QjtrQkFBN0IsTUFFTztBQUNILDRCQUFLLElBQUwsR0FBWSxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBWixDQURHO0FBRUgsNEJBQUssT0FBTCxDQUFhLFNBQWIsR0FBeUIsRUFBekIsQ0FGRztBQUdILDRCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE9BQUssSUFBTCxDQUF6QixDQUhHO2tCQUZQOztBQVFBLHdCQUFLLEtBQUwsR0FBYSxLQUFiLENBWndCO2NBQU4sQ0FBdEIsQ0FESzs7QUFnQkwsb0JBQU8sSUFBUCxDQWhCSzs7OztpREFtQmdCLEdBQUc7QUFDeEIsa0JBQUssWUFBTCxDQUFrQixRQUFRLGdCQUFSLENBQXlCO0FBQ3ZDLHdCQUFPLFNBQVMsRUFBRSxNQUFGLENBQVMsWUFBVCxDQUFzQixZQUF0QixDQUFULENBQVA7QUFDQSx3QkFBTyxFQUFFLE1BQUYsQ0FBUyxLQUFUO2NBRk8sQ0FBbEIsRUFEd0I7Ozs7a0RBT0Y7QUFDdEIsa0JBQUssWUFBTCxDQUFrQixRQUFRLE9BQVIsRUFBbEIsRUFEc0I7Ozs7MkNBSVA7OztBQUNmLGlCQUFJLEtBQUsscUJBQUwsRUFBSixFQUFrQztBQUM5Qix3QkFEOEI7Y0FBbEM7O0FBSUEsa0JBQUssWUFBTCxDQUFrQixRQUFRLFNBQVIsRUFBbEIsRUFDSyxzQkFETCxDQUM0QixZQUFNO0FBQzFCLHFCQUFJLENBQUMsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixFQUE0QjtBQUM3Qiw0QkFBSyxZQUFMLENBQWtCLFFBQVEsT0FBUixFQUFsQixFQUQ2QjtrQkFBakM7Y0FEb0IsQ0FENUIsQ0FMZTs7OzsrQ0FhSTtBQUNuQixrQkFBSyxZQUFMLENBQWtCLFFBQVEsUUFBUixFQUFsQixFQURtQjs7Ozs2Q0FJRjtBQUNqQixrQkFBSyxZQUFMLENBQWtCLFFBQVEsVUFBUixFQUFsQixFQURpQjs7OztpREFJSTtBQUNyQixvQkFBTyxLQUFLLEtBQUwsQ0FBVyxrQkFBWCxDQURjOzs7O1lBdEh2Qjs7O0FBMkhOLEtBQUksR0FBSixDQUFRLDJCQUFSLEU7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztTQ3ZQZ0I7U0FNQTtTQUlBO1NBSUE7QUFkVCxVQUFTLFFBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDM0IsWUFBTyxJQUFJLE1BQUosQ0FBVyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDNUIsZ0JBQU8sTUFBTSxTQUFTLE9BQU8sQ0FBUCxFQUFVLEVBQW5CLENBQU4sQ0FEcUI7TUFBZCxFQUVmLENBRkksQ0FBUCxDQUQyQjtFQUF4Qjs7QUFNQSxVQUFTLE9BQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDMUIsWUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsR0FBaEIsQ0FBbEIsQ0FEMEI7RUFBdkI7O0FBSUEsVUFBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ3pCLFlBQU8sSUFBSSxRQUFRLElBQUksTUFBSixHQUFhLENBQWIsQ0FBWixDQUFQLENBRHlCO0VBQXRCOztBQUlBLFVBQVMsTUFBVCxDQUFpQixHQUFqQixFQUFzQjtBQUN6QixXQUFNLE9BQU8sRUFBUCxDQURtQjs7QUFHekIsVUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLFVBQVUsVUFBVSxNQUFWLEVBQWtCLElBQUksT0FBSixFQUFhLEdBQXpELEVBQThEO0FBQzFELGFBQUksQ0FBQyxVQUFVLENBQVYsQ0FBRCxFQUFlO0FBQ2Ysc0JBRGU7VUFBbkI7O0FBSUEsYUFBSSxNQUFNLFVBQVUsQ0FBVixDQUFOLENBTHNEO0FBTTFELGFBQUksT0FBTyxPQUFPLElBQVAsQ0FBWSxHQUFaLENBQVAsQ0FOc0Q7O0FBUTFELGNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxVQUFVLEtBQUssTUFBTCxFQUFhLElBQUksT0FBSixFQUFhLEdBQXBELEVBQXlEO0FBQ3JELGlCQUFJLE1BQU0sS0FBSyxDQUFMLENBQU4sQ0FEaUQ7QUFFckQsaUJBQUksY0FBYyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsSUFBSSxHQUFKLENBQS9CLENBQWQsQ0FGaUQ7O0FBSXJELGlCQUFJLGdCQUFnQixpQkFBaEIsSUFBcUMsZ0JBQWdCLGdCQUFoQixFQUFrQztBQUN2RSxxQkFBSSxHQUFKLElBQVcsSUFBSSxHQUFKLE1BQWEsSUFBSSxHQUFKLGFBQW9CLEtBQXBCLEdBQTRCLEVBQTVCLEdBQWlDLEVBQWpDLENBQWIsQ0FENEQ7QUFFdkUscUJBQUksR0FBSixJQUFXLE9BQU8sSUFBSSxHQUFKLENBQVAsRUFBaUIsSUFBSSxHQUFKLENBQWpCLENBQVgsQ0FGdUU7Y0FBM0UsTUFHTztBQUNILHFCQUFJLEdBQUosSUFBVyxJQUFJLEdBQUosQ0FBWCxDQURHO2NBSFA7VUFKSjtNQVJKOztBQXFCQSxZQUFPLEdBQVAsQ0F4QnlCOzs7Ozs7Ozs7Ozs7QUNkdEIsS0FBSSxrQ0FBYSxZQUFiO0FBQ0osS0FBSSxrQ0FBYSxZQUFiO0FBQ0osS0FBSSxvQ0FBYyxhQUFkO0FBQ0osS0FBSSxnQ0FBWSxXQUFaO0FBQ0osS0FBSSw4QkFBVyxVQUFYO0FBQ0osS0FBSSw4QkFBVyxVQUFYO0FBQ0osS0FBSSxrREFBcUIsb0JBQXJCLEM7Ozs7Ozs7Ozs7O21CQ3VCYTtBQTdCeEIsVUFBUyxZQUFULENBQXVCLE1BQXZCLEVBQStCO0FBQzNCLFlBQU8sT0FBTyxPQUFQLENBQWUsU0FBZixFQUEwQixVQUFVLENBQVYsRUFBYTtBQUMxQyxnQkFBTyxFQUFFLENBQUYsRUFBSyxXQUFMLEVBQVAsQ0FEMEM7TUFBYixDQUFqQyxDQUQyQjtFQUEvQjs7QUFNQSxVQUFTLG1CQUFULENBQThCLE9BQTlCLEVBQXVDLFVBQXZDLEVBQW1EO0FBQy9DLFlBQU8sVUFBVSxDQUFWLEVBQWE7QUFDaEIsY0FBSyxJQUFJLFFBQUosSUFBZ0IsVUFBckIsRUFBaUM7QUFDN0IsaUJBQUksT0FBTyxXQUFXLFFBQVgsQ0FBUCxDQUR5QjtBQUU3QixpQkFBSSxPQUFPLEVBQUUsTUFBRixDQUFTLFVBQVQsQ0FBb0IsUUFBcEIsQ0FBUCxDQUZ5Qjs7QUFJN0IsaUJBQUksSUFBSixFQUFVO0FBQ04scUJBQUksU0FBUyxLQUFLLEtBQUwsQ0FEUDtBQUVOLHFCQUFJLGVBQWUsS0FBSyxhQUFMLENBQW1CLE1BQW5CLENBQWYsQ0FGRTs7QUFJTixxQkFBSSxDQUFDLFlBQUQsRUFBZTtBQUNmLG9DQUFlLEtBQUssYUFBTCxDQUFtQixNQUFuQixJQUE2QixxQkFBbUIsS0FBSyxTQUFMLFNBQWtCLGVBQVUsS0FBSyxTQUFMLENBQTVFLENBREE7a0JBQW5COztBQUlBLHFCQUFJLFFBQVEsWUFBUixDQUFKLEVBQTJCO0FBQ3ZCLDZCQUFRLFlBQVIsRUFBc0IsSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0MsQ0FBcEMsRUFEdUI7a0JBQTNCO0FBR0EsdUJBWE07Y0FBVjtVQUpKO01BREcsQ0FEd0M7RUFBbkQ7O0FBdUJlLFVBQVMsWUFBVCxDQUF1QixPQUF2QixFQUFnQyxNQUFoQyxFQUF3QztBQUNuRCxZQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLE9BQXBCLENBQTRCLFVBQUMsU0FBRCxFQUFlO0FBQ3ZDLGFBQUksYUFBYSxPQUFPLFNBQVAsRUFBa0IsTUFBbEIsQ0FBeUIsVUFBQyxHQUFELEVBQU0sU0FBTixFQUFvQjtBQUMxRCwyQkFBWSxTQUFaLElBQTJCLEVBQUUsb0JBQUYsRUFBYSxvQkFBYixFQUF3QixlQUFlLEVBQWYsRUFBbkQsQ0FEMEQ7O0FBRzFELG9CQUFPLEdBQVAsQ0FIMEQ7VUFBcEIsRUFJdkMsRUFKYyxDQUFiLENBRG1DOztBQU92QyxrQkFBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxvQkFBb0IsT0FBcEIsRUFBNkIsVUFBN0IsQ0FBckMsRUFQdUM7TUFBZixDQUE1QixDQURtRDs7Ozs7Ozs7Ozs7Ozs7OztLQzdCM0M7Ozs7QUFFTCxLQUFJLDhDQUFtQixTQUFuQixnQkFBbUIsQ0FBVSxJQUFWLEVBQWdCO0FBQzFDLFlBQU87QUFDSCxlQUFNLE1BQU0sa0JBQU47QUFDTixlQUFNLElBQU47TUFGSixDQUQwQztFQUFoQjs7QUFPdkIsS0FBSSxnQ0FBWSxTQUFaLFNBQVksR0FBWTtBQUMvQixZQUFPO0FBQ0gsZUFBTSxNQUFNLFVBQU47TUFEVixDQUQrQjtFQUFaOztBQU1oQixLQUFJLDhCQUFXLFNBQVgsUUFBVyxHQUFZO0FBQzlCLFlBQU87QUFDSCxlQUFNLE1BQU0sU0FBTjtNQURWLENBRDhCO0VBQVo7O0FBTWYsS0FBSSw0QkFBVSxTQUFWLE9BQVUsR0FBWTtBQUM3QixZQUFPO0FBQ0gsZUFBTSxNQUFNLFFBQU47TUFEVixDQUQ2QjtFQUFaOztBQU1kLEtBQUksNEJBQVUsU0FBVixPQUFVLEdBQVk7QUFDN0IsWUFBTztBQUNILGVBQU0sTUFBTSxRQUFOO01BRFYsQ0FENkI7RUFBWjs7QUFNZCxLQUFJLGtDQUFhLFNBQWIsVUFBYSxHQUFZO0FBQ2hDLFlBQU87QUFDSCxlQUFNLE1BQU0sV0FBTjtNQURWLENBRGdDO0VBQVo7O0FBTWpCLEtBQUksZ0NBQVksU0FBWixTQUFZLEdBQVk7QUFDL0IsWUFBTztBQUNILGVBQU0sTUFBTSxVQUFOO01BRFYsQ0FEK0I7RUFBWixDOzs7Ozs7Ozs7Ozs7OztLQ3ZDWDs7Ozs7Ozs7Ozs7Ozs7OztBQUlaLEtBQUksZUFBZSxtQ0FBb0IsS0FBcEIsQ0FBZjtBQUNKLEtBQUksY0FBYyxrQ0FBbUIsS0FBbkIsQ0FBZDs7QUFFSixVQUFTLFdBQVQsQ0FBc0IsS0FBdEIsRUFBNkI7QUFDekIsU0FBSSxPQUFPLEVBQVAsQ0FEcUI7QUFFekIsU0FBSSxNQUFNO0FBQ04saUJBQVEsSUFBUjtBQUNBLGVBQU0sTUFBTSxNQUFOLENBQWEsR0FBYixDQUFpQixVQUFDLEtBQUQsRUFBUSxLQUFSO29CQUFtQjtBQUN0Qyx1QkFBTSxNQUFNLEtBQU47QUFDTiwwQkFBUyxVQUFVLE1BQU0sTUFBTixDQUFhLE1BQWIsR0FBc0IsQ0FBdEI7QUFDbkIsd0JBQU8sSUFBUDs7VUFIbUIsQ0FBdkI7TUFGQSxDQUZxQjs7QUFXekIsU0FBSSxJQUFKLENBQVMsT0FBVCxDQUFpQixFQUFDLE1BQUssTUFBTSxRQUFOLEVBQWdCLFFBQVEsSUFBUixFQUFjLE9BQU8sSUFBUCxFQUFyRCxFQVh5Qjs7QUFhekIsVUFBSyxJQUFMLENBQVUsR0FBVixFQWJ5Qjs7QUFlekIsU0FBSSxRQUFRLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBa0IsVUFBQyxNQUFELEVBQVMsTUFBVCxFQUFvQjtBQUM5QyxhQUFJLE9BQU8sTUFBTSxNQUFOLENBQWEsR0FBYixDQUFpQixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzNDLGlCQUFJLFFBQVEsTUFBTSxNQUFOLENBQVIsQ0FEdUM7QUFFM0MsaUJBQUksT0FBTztBQUNQLG9CQUFHLE1BQU0sQ0FBTixJQUFXLE1BQU0sQ0FBTixFQUFTLEtBQVQsR0FBaUIsRUFBNUI7QUFDSCxvQkFBRyxNQUFNLENBQU4sSUFBVyxNQUFNLENBQU4sRUFBUyxLQUFULEdBQWlCLEVBQTVCO0FBQ0gsd0JBQU8sTUFBTSxLQUFOO0FBQ1AsMEJBQVMsV0FBVyxNQUFNLE1BQU4sQ0FBYSxNQUFiLEdBQXNCLENBQXRCO0FBQ3BCLDJCQUFVLFdBQVcsTUFBTSxPQUFOLENBQWMsTUFBZCxHQUF1QixDQUF2QjtBQUNyQiwyQkFBVSxJQUFWO0FBQ0EsNEJBQVcsV0FBVyxNQUFNLGFBQU47Y0FQdEIsQ0FGdUM7O0FBWTNDLG9CQUFPLElBQVAsQ0FaMkM7VUFBbkIsQ0FBeEIsQ0FEMEM7O0FBZ0I5QyxjQUFLLE9BQUwsQ0FBYTtBQUNULG1CQUFNLE1BQU47QUFDQSxxQkFBUSxJQUFSO0FBQ0EsdUJBQVUsV0FBVyxNQUFNLE9BQU4sQ0FBYyxNQUFkLEdBQXVCLENBQXZCO0FBQ3JCLHdCQUFXLFdBQVcsTUFBTSxhQUFOO1VBSjFCLEVBaEI4Qzs7QUF1QjlDLGdCQUFPO0FBQ0gsd0JBQVcsV0FBVyxNQUFNLGFBQU47QUFDdEIsdUJBRkc7VUFBUCxDQXZCOEM7TUFBcEIsQ0FBMUIsQ0FmcUI7O0FBNEN6QixVQUFLLElBQUwsZ0NBQWEsTUFBYixFQTVDeUI7O0FBOEN6QixZQUFPLEVBQUUsVUFBRixFQUFQLENBOUN5QjtFQUE3Qjs7QUFpREEsVUFBUyxPQUFULEdBQTBDO1NBQXpCLDhEQUFRLGtCQUFpQjtTQUFiLCtEQUFTLGtCQUFJOztBQUN0QyxXQUFNLElBQU4sR0FBYSxZQUFZLE1BQU0sSUFBTixFQUFZLE1BQXhCLENBQWIsQ0FEc0M7O0FBR3RDLGFBQVEsT0FBTyxJQUFQO0FBQ0o7QUFDSSxtQkFBTSxLQUFOLEdBQWMsWUFBWSxNQUFNLElBQU4sQ0FBMUIsQ0FESjtBQUVBLG1CQUZBO0FBREosTUFIc0M7O0FBU3RDLGFBQVEsYUFBYSxLQUFiLEVBQW9CLE1BQXBCLENBQVIsQ0FUc0M7O0FBV3RDLFlBQU8sS0FBUCxDQVhzQztFQUExQzs7bUJBY2UsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURmLEtBQU0sZ0JBQWdCLEVBQWhCOzs7O0FBRU4sVUFBUyxLQUFULENBQWdCLE1BQWhCLEVBQXdCO0FBQ3BCLFlBQU8sTUFBTSxNQUFOLEVBQWMsSUFBZCxDQUFtQixHQUFuQixFQUF3QixLQUF4QixDQUE4QixHQUE5QixFQUFtQyxHQUFuQyxDQUF1QyxVQUFDLENBQUQsRUFBSSxDQUFKO2dCQUFVO01BQVYsQ0FBOUMsQ0FEb0I7RUFBeEI7O0FBSUEsVUFBUyxHQUFULENBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QjtBQUN6QixhQUFRLE9BQU8sS0FBUCxDQUFSLENBRHlCO0FBRXpCLGNBQVMsVUFBVSxDQUFWLENBRmdCOztBQUl6QixZQUFPLE1BQU0sTUFBTixHQUFlLE1BQWYsRUFBdUI7QUFDMUIsaUJBQVEsTUFBTSxLQUFOLENBRGtCO01BQTlCOztBQUlBLFlBQU8sS0FBUCxDQVJ5QjtFQUE3Qjs7QUFXQSxVQUFTLFlBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDMUIsU0FBSSxlQUFlLEtBQUssS0FBTCxDQUFXLENBQUMsSUFBSSxJQUFKLEtBQWEsTUFBTSxTQUFOLENBQWQsR0FBaUMsSUFBakMsQ0FBMUI7U0FDQSxZQUFZLGVBQWUsRUFBZjtTQUNaLFdBQVcsQ0FBQyxlQUFlLFNBQWYsQ0FBRCxHQUE2QixFQUE3QixDQUhXOztBQUsxQixXQUFNLFFBQU4sR0FBaUIsSUFBSSxRQUFKLEVBQWMsQ0FBZCxJQUFtQixHQUFuQixHQUF5QixJQUFJLFNBQUosRUFBZSxDQUFmLENBQXpCLENBTFM7O0FBTzFCLFlBQU8sS0FBUCxDQVAwQjtFQUE5Qjs7QUFVQSxVQUFTLFFBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7OztBQUNyQixTQUFJLFNBQVMsQ0FBQyxzQkFBUSxJQUFSLENBQUQsQ0FBVCxDQURpQjs7QUFHckIsWUFBTyxlQUFLLEdBQUwsY0FBWSxNQUFaLENBQVAsQ0FIcUI7RUFBekI7O0FBTUEsVUFBUyxlQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQy9CLFNBQUksUUFBUTtBQUNSLGtCQUFTLFdBQVcsQ0FBQyxzQ0FBRCxFQUFpQixzQ0FBakIsQ0FBWDtBQUNULHdCQUFlLENBQWY7QUFDQSx1QkFBYyxDQUFkO0FBQ0Esb0JBQVcsSUFBSSxJQUFKLEVBQVg7QUFDQSxtQkFBVSxPQUFWO0FBQ0EscUJBQVksSUFBWjtBQUNBLHFCQUFZLEVBQVo7TUFQQSxDQUQyQjs7QUFXL0IsV0FBTSxNQUFOLEdBQWUsYUFBYSxLQUFiLENBQWYsQ0FYK0I7O0FBYS9CLFlBQU8sS0FBUCxDQWIrQjtFQUFuQzs7QUFnQkEsVUFBUyxZQUFULENBQXVCLEtBQXZCLEVBQThCO0FBQzFCLFlBQU8sTUFBTSxhQUFOLEVBQXFCLEdBQXJCLENBQXlCLFVBQUMsR0FBRCxFQUFTO0FBQ3JDLGFBQUksUUFBUTtBQUNSLG9CQUFPLE1BQU0sQ0FBTjtVQURQLENBRGlDOztBQUtyQyxlQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXFCLFVBQUMsR0FBRCxFQUFNLE1BQU4sRUFBYyxLQUFkLEVBQXdCO0FBQ3pDLGlCQUFJLEtBQUosSUFBYSxFQUFiLENBRHlDO0FBRXpDLGlCQUFJLEtBQUosRUFBVyxLQUFYLEdBQW1CLEVBQW5CLENBRnlDOztBQUl6QyxvQkFBTyxHQUFQLENBSnlDO1VBQXhCLEVBS2xCLEtBTEgsRUFMcUM7O0FBWXJDLGdCQUFPLEtBQVAsQ0FacUM7TUFBVCxDQUFoQyxDQUQwQjtFQUE5Qjs7QUFpQkEsVUFBUyxVQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQ3hCLFNBQUksWUFBWSxLQUFaLEtBQXNCLGFBQWEsS0FBYixDQUF0QixFQUEyQztBQUMzQyxlQUFNLFVBQU4sR0FBbUIsS0FBbkIsQ0FEMkM7TUFBL0MsTUFFTztBQUNILGFBQUksU0FBUyxNQUFNLGFBQU4sQ0FEVjs7QUFHSCxlQUFNLGFBQU4sR0FBc0IsU0FBUyxXQUFXLE1BQU0sT0FBTixDQUFjLE1BQWQsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FBdEMsR0FBMEMsU0FBUyxDQUFULENBSHRFOztBQUtILGFBQUksV0FBVyxDQUFYLEVBQWM7QUFDZCxtQkFBTSxZQUFOLEdBQXFCLE1BQU0sWUFBTixHQUFxQixNQUFNLE1BQU4sQ0FBYSxNQUFiLEdBQXNCLENBQXRCLEdBQTBCLE1BQU0sWUFBTixHQUFxQixDQUFyQixHQUF5QixNQUFNLFlBQU4sQ0FEL0U7VUFBbEI7TUFQSjs7QUFZQSxZQUFPLEtBQVAsQ0Fid0I7RUFBNUI7O0FBZ0JBLFVBQVMsY0FBVCxDQUF5QixLQUF6QixFQUFnQztBQUM1QixTQUFJLFNBQVMsTUFBTSxNQUFOLENBQWEsS0FBYixDQUFtQixLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxZQUFOLEdBQXFCLENBQXJCLENBQS9CLEVBQXdELE1BQU0sWUFBTixHQUFxQixDQUFyQixDQUF4RCxDQUFnRixHQUFoRixDQUFvRixVQUFDLEtBQUQsRUFBVztBQUN4RyxnQkFBTyxNQUFNLE1BQU0sYUFBTixDQUFiLENBRHdHO01BQVgsQ0FBN0YsQ0FEd0I7O0FBSzVCLFNBQUksWUFBWSxPQUFPLE9BQU8sTUFBUCxHQUFnQixDQUFoQixDQUFuQixDQUx3QjtBQU01QixZQUFPLE1BQVAsR0FONEI7O0FBUTVCLFNBQUksSUFBSSxJQUFJLFVBQVUsTUFBVixDQVJnQjtBQVM1QixTQUFJLGNBQWMsRUFBZCxDQVR3Qjs7QUFXNUIsWUFBTyxLQUFLLE9BQU8sTUFBUCxFQUFlO0FBQ3ZCLGFBQUksUUFBUSxPQUFPLEdBQVAsRUFBUixDQURtQjs7QUFHdkIsYUFDSSxDQUFDLEtBQU0sQ0FBTixJQUFXLE1BQU0sQ0FBTixFQUFTLEtBQVQsS0FBbUIsRUFBbkIsSUFDWCxNQUFNLENBQU4sSUFBWSxNQUFNLEtBQU4sS0FBZ0IsRUFBaEIsRUFDZjtBQUNFLHlCQUFZLE9BQVosQ0FBb0IsS0FBcEIsRUFERjtVQUhGOztBQU9BLGNBQUssTUFBTSxNQUFOLENBVmtCO01BQTNCOztBQWFBLFlBQU8sV0FBUCxDQXhCNEI7RUFBaEM7O0FBMkJBLFVBQVMsWUFBVCxDQUF1QixLQUF2QixFQUE4QjtBQUMxQixZQUFPLE1BQU0sT0FBTixDQUFjLE1BQWQsR0FBdUIsQ0FBdkIsS0FBNkIsTUFBTSxhQUFOLENBRFY7RUFBOUI7O0FBSUEsVUFBUyxXQUFULENBQXNCLEtBQXRCLEVBQTZCO0FBQ3pCLFlBQU8sTUFBTSxZQUFOLEtBQXVCLGdCQUFnQixDQUFoQixDQURMO0VBQTdCOztBQUlBLFVBQVMsV0FBVCxDQUFzQixLQUF0QixFQUE2QjtBQUN6QixZQUFPLGFBQWEsS0FBYixDQUFQLENBRHlCO0VBQTdCOztBQUlBLFVBQVMsV0FBVCxDQUFzQixLQUF0QixFQUE2QjtBQUN6QixTQUFJLENBQUMsTUFBTSxVQUFOLEVBQWtCO0FBQ25CLGdCQUFPLEtBQVAsQ0FEbUI7TUFBdkI7O0FBSUEsU0FBSSxRQUFRLE1BQU0sTUFBTixDQUFhLE1BQU0sWUFBTixDQUFiLENBQWlDLE1BQU0sYUFBTixDQUF6QyxDQUxxQjtBQU16QixTQUFJLE9BQU8sYUFBUCxDQU5xQjtBQU96QixTQUFJLGFBQWEsTUFBTSxPQUFOLENBQWMsTUFBTSxhQUFOLENBQTNCLENBUHFCOztBQVN6QixTQUFJLE1BQU0sQ0FBTixLQUFZLFNBQVMsTUFBTSxDQUFOLEVBQVMsS0FBVCxFQUFnQjtBQUNyQyxpQkFBUSxNQUFNLENBQU4sRUFBUyxLQUFULENBRDZCO01BQXpDOztBQUlBLFNBQUksY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQWJxQjtBQWN6QixTQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsU0FBUyxJQUFULENBQVQsRUFBeUIsU0FBUyxJQUFULENBQXpCLENBQVIsQ0FkcUI7O0FBZ0J6QixpQkFBWSxPQUFaLENBQW9CLFVBQUMsS0FBRCxFQUFXO0FBQzNCLGVBQU0sS0FBTixJQUFlLEtBQWYsQ0FEMkI7TUFBWCxDQUFwQixDQWhCeUI7O0FBb0J6QixTQUFJLE9BQU8sRUFBRSxZQUFGLEVBQVMsU0FBUyxFQUFULEVBQWhCLENBcEJxQjs7QUFzQnpCLFdBQU0sSUFBTixDQUFXLElBQVgsRUF0QnlCOztBQXdCekIsU0FBSSxXQUFXLHVCQUFTLE1BQU0sR0FBTixDQUFVO2dCQUFRLEtBQUssS0FBTDtNQUFSLENBQW5CLENBQVgsQ0F4QnFCO0FBeUJ6QixXQUFNLEtBQU4sR0FBYyxRQUFkLENBekJ5Qjs7QUEyQnpCLFNBQUksTUFBTSxNQUFOLEtBQWlCLENBQWpCLEVBQW9CO0FBQ3BCLGFBQUksS0FBSyxLQUFMLEtBQWUsRUFBZixFQUFtQjtBQUNuQixrQkFBSyxLQUFMLEdBQWEsR0FBYixDQURtQjtBQUVuQixrQkFBSyxPQUFMLEdBQWUsUUFBZixDQUZtQjs7QUFJbkIsaUJBQUksQ0FBQyxZQUFZLEtBQVosQ0FBRCxFQUFxQjtBQUNyQiw0QkFBVyxLQUFYLEVBRHFCO2NBQXpCO1VBSkosTUFPTztBQUNILGtCQUFLLEtBQUwsR0FBYSxLQUFLLEtBQUwsQ0FEVjtVQVBQO01BREosTUFXTyxJQUFJLE1BQU0sTUFBTixLQUFpQixDQUFqQixFQUFvQjtBQUMzQixhQUFJLE1BQU0sS0FBTixLQUFnQixFQUFoQixFQUFvQjtBQUNwQixrQkFBSyxLQUFMLEdBQWEsR0FBYixDQURvQjtBQUVwQixrQkFBSyxPQUFMLEdBQWUsT0FBZixDQUZvQjtVQUF4QixNQUdPO0FBQ0gsa0JBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxDQURWO1VBSFA7O0FBT0EsYUFBSSxZQUFZLEtBQVosS0FBc0IsWUFBWSxFQUFaLEVBQWdCLEVBQTFDLE1BRU87QUFDSCx3QkFBVyxLQUFYLEVBREc7VUFGUDtNQVJHLE1BYUEsSUFBSSxNQUFNLE1BQU4sS0FBaUIsQ0FBakIsRUFBb0I7QUFDM0IsY0FBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLENBRGM7O0FBRzNCLG9CQUFXLEtBQVgsRUFIMkI7TUFBeEI7O0FBTVAsV0FBTSxVQUFOLENBQWlCLEtBQWpCLEdBQTRCLGdCQUE1QixDQXpEeUI7QUEwRHpCLFdBQU0sVUFBTixDQUFpQixLQUFqQixHQUF5Qix1Q0FBekIsQ0ExRHlCOztBQTREekIsU0FBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGVBQU0sVUFBTixDQUFpQixLQUFqQixVQUE4QixLQUFLLE9BQUwsQ0FBYSxXQUFiLEVBQTlCLENBRGM7TUFBbEI7O0FBSUEsWUFBTyxLQUFQLENBaEV5QjtFQUE3Qjs7QUFtRUEsVUFBUyxrQkFBVCxDQUE2QixLQUE3QixFQUFvQyxJQUFwQyxFQUEwQztBQUN0QyxXQUFNLE9BQU4sQ0FBYyxLQUFLLEtBQUwsQ0FBZCxHQUE0QixLQUFLLEtBQUwsQ0FEVTtBQUV0QyxXQUFNLE9BQU4sR0FBZ0IsTUFBTSxPQUFOLENBQWMsTUFBZCxDQUFxQjtnQkFBVTtNQUFWLENBQXJDLENBRnNDOztBQUl0QyxTQUFJLENBQUMsTUFBTSxPQUFOLENBQWMsTUFBZCxFQUFzQjtBQUN2QixlQUFNLE9BQU4sQ0FBYyxJQUFkLENBQW1CLHNDQUFuQixFQUR1QjtNQUEzQjs7QUFJQSxXQUFNLE1BQU4sR0FBZSxhQUFhLEtBQWIsQ0FBZixDQVJzQzs7QUFVdEMsWUFBTyxLQUFQLENBVnNDO0VBQTFDOztBQWFBLFVBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE0QjtBQUN4QixZQUFPLGdCQUFnQixNQUFNLE9BQU4sQ0FBdkIsQ0FEd0I7RUFBNUI7O0FBSUEsVUFBUyxhQUFULENBQXdCLEtBQXhCLEVBQStCO0FBQzNCLFlBQU8sVUFBVSxLQUFWLEVBQThCO2FBQWIsK0RBQVMsa0JBQUk7O0FBQ2pDLGFBQUksQ0FBQyxLQUFELEVBQVE7QUFDUixxQkFBUSxpQkFBUixDQURRO1VBQVo7O0FBSUEsaUJBQVEsT0FBTyxJQUFQO0FBQ0osa0JBQUssTUFBTSxTQUFOO0FBQ0QseUJBQVEsV0FBVyxLQUFYLENBQVIsQ0FESjtBQUVBLHVCQUZBO0FBREosa0JBSVMsTUFBTSxVQUFOO0FBQ0QseUJBQVEsWUFBWSxLQUFaLENBQVIsQ0FESjtBQUVBLHVCQUZBO0FBSkosa0JBT1MsTUFBTSxVQUFOO0FBQ0QseUJBQVEsWUFBWSxLQUFaLENBQVIsQ0FESjtBQUVBLHVCQUZBO0FBUEosa0JBVVMsTUFBTSxrQkFBTjtBQUNELHlCQUFRLG1CQUFtQixLQUFuQixFQUEwQixPQUFPLElBQVAsQ0FBbEMsQ0FESjtBQUVBLHVCQUZBO0FBVkosVUFMaUM7O0FBb0JqQyxnQkFBTyxLQUFQLENBcEJpQztNQUE5QixDQURvQjtFQUEvQjs7bUJBeUJlLGM7Ozs7Ozs7Ozs7Ozs7O0FDNU9mLFVBQVMsc0JBQVQsQ0FBaUMsS0FBakMsRUFBd0M7QUFDcEMsU0FBSSxPQUFPLE1BQU0sSUFBTixDQUR5Qjs7QUFHcEMsWUFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7QUFDdkMsZ0JBQU87QUFDSCxtQkFBTSxNQUFOO0FBQ0EscUJBQVEsdUJBQVMsS0FBSyxNQUFMLENBQVksR0FBWixDQUFnQixVQUFDLEtBQUQ7d0JBQVcsTUFBTSxLQUFOLEVBQWEsS0FBYjtjQUFYLENBQXpCLENBQVI7VUFGSixDQUR1QztNQUFuQixDQUFqQixDQUtKLElBTEksQ0FLQyxVQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCO0FBQ3BCLGdCQUFPLEVBQUUsTUFBRixHQUFXLEVBQUUsTUFBRixDQURFO01BQWhCLENBTFIsQ0FIb0M7RUFBeEM7O0FBYUEsVUFBUyx1QkFBVCxDQUFpQyxLQUFqQyxFQUF1RDtTQUFmLCtEQUFTLG9CQUFNOztBQUNuRCxZQUFPO0FBQ0gsZUFBTSxlQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHVCQUhHO0FBSUgsZUFBTSx1QkFBdUIsS0FBdkIsQ0FBTjtNQUpKLENBRG1EO0VBQXZEOztBQVNBLFVBQVMsa0JBQVQsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDaEMsWUFBTyxNQUFNLElBQU4sQ0FEeUI7RUFBcEM7O0FBSUEsVUFBUyxtQkFBVCxDQUE2QixLQUE3QixFQUFtRDtTQUFmLCtEQUFTLG9CQUFNOztBQUMvQyxZQUFPO0FBQ0gsZUFBTSxXQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHVCQUhHO0FBSUgsZUFBTSxtQkFBbUIsS0FBbkIsQ0FBTjtNQUpKLENBRCtDO0VBQW5EOztBQVNBLFVBQVMsZUFBVCxDQUEwQixLQUExQixFQUFpQztBQUM3QixZQUFPLG9CQUFvQixLQUFwQixDQUFQLENBRDZCO0VBQWpDOztBQUlBLFVBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QjtBQUMxQixZQUFPLFVBQVUsS0FBVixFQUE4QjthQUFiLCtEQUFTLGtCQUFJOztBQUNqQyxlQUFNLEtBQU4sR0FBYyxNQUFNLEtBQU4sSUFBZSxnQkFBZ0IsS0FBaEIsQ0FBZixDQURtQjs7QUFHakMsaUJBQVEsT0FBTyxJQUFQO0FBQ0osa0JBQUssTUFBTSxXQUFOO0FBQ0QsdUJBQU0sS0FBTixDQUFZLE1BQVosR0FBcUIsS0FBckIsQ0FESjtBQUVBLHVCQUZBO0FBREosa0JBSVMsTUFBTSxTQUFOO0FBQ0QsdUJBQU0sS0FBTixDQUFZLE1BQVosR0FBcUIsS0FBckIsQ0FESjtBQUVBLHVCQUZBO0FBSkosa0JBT1MsTUFBTSxRQUFOO0FBQ0QsdUJBQU0sS0FBTixHQUFjLHdCQUF3QixLQUF4QixDQUFkLENBREo7QUFFQSx1QkFGQTtBQVBKLGtCQVVTLE1BQU0sUUFBTjtBQUNELHVCQUFNLEtBQU4sR0FBYyxvQkFBb0IsS0FBcEIsQ0FBZCxDQURKO0FBRUEsdUJBRkE7QUFWSixVQUhpQzs7QUFrQmpDLGdCQUFPLEtBQVAsQ0FsQmlDO01BQTlCLENBRG1CO0VBQTlCOzttQkF1QmUsYzs7Ozs7Ozs7Ozs7O21CQzNEQSxVQUFVLEdBQVYsRUFBZTtBQUMxQixZQUFPLG1CQUFTO0FBQ1osb0JBQVcsSUFBSSxLQUFKLEdBQVkscUJBQU0sSUFBSSxLQUFKLENBQWxCLEdBQStCLEVBQS9CO0FBQ1gsb0JBQVcsSUFBSSxLQUFKLEdBQVkscUJBQU0sSUFBSSxLQUFKLENBQWxCLEdBQStCLEVBQS9CO0FBQ1gsNEJBQW1CLElBQUksa0JBQUo7QUFDbkIscUJBQVksSUFBSSxJQUFKLENBQVMsVUFBVDtBQUNaLDBCQUxZO01BQVQsQ0FBUCxDQUQwQjtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDRkEsVUFBVSxZQUFWLEVBQXdCO0FBQ25DLFlBQU8sNEJBQVM7QUFDWixtQ0FEWTtBQUVaLG1DQUZZO01BQVQsQ0FBUCxDQURtQztFQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkNBQSxVQUFVLElBQVYsRUFBZ0I7QUFDM0IsWUFBTyx3QkFBUztBQUNaLCtCQURZO0FBRVosa0JBQVMsS0FBSyxPQUFMO01BRk4sQ0FBUCxDQUQyQjtFQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkNvQkEsVUFBVSxLQUFWLEVBQWlCO0FBQzVCLFNBQUksY0FBYyxFQUFkLENBRHdCOztBQUc1QixhQUFRLE1BQU0sSUFBTjtBQUNKLGNBQUssV0FBTDtBQUNJLDJCQUFjLHdCQUFTLE1BQU0sSUFBTixDQUF2QixDQURKO0FBRUEsbUJBRkE7QUFESixjQUlTLGVBQUw7QUFDSSwyQkFBYyw0QkFBYSxNQUFNLElBQU4sQ0FBM0IsQ0FESjtBQUVBLG1CQUZBO0FBSkosTUFINEI7O0FBWTVCLFlBQU8scUJBQVM7QUFDWixhQUFJLFVBQVUsS0FBVixDQUFKO0FBQ0EsaUNBRlk7TUFBVCxDQUFQLENBWjRCO0VBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxCZixVQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDdEIsU0FBSSxPQUFPLENBQUMsZ0JBQUcsSUFBSCxDQUFSLENBRGtCOztBQUd0QixTQUFJLE1BQU0sS0FBTixFQUFhO0FBQ2IsY0FBSyxJQUFMLENBQVUsZ0JBQUcsV0FBVyxNQUFNLEtBQU4sQ0FBeEIsRUFEYTtNQUFqQixNQUVPO0FBQ0gsY0FBSyxJQUFMLENBQVUsZ0JBQUcsSUFBSCxDQUFWLENBREc7TUFGUDs7QUFNQSxTQUFJLENBQUMsTUFBTSxNQUFOLEVBQWM7QUFDZixjQUFLLElBQUwsQ0FBVSxRQUFWLEVBRGU7TUFBbkI7O0FBSUEscUJBQUcsS0FBSCxHQUFXLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBWCxDQWJzQjs7QUFldEIsNEJBZnNCOzs7Ozs7Ozs7Ozs7O21CQzhCWCxVQUFVLElBQVYsRUFBZ0I7QUFDM0IsWUFBTyxvQkFBUztBQUNaLGVBQU0sSUFBTjtBQUNBLGFBQUksVUFBVSxJQUFWLENBQUo7TUFGRyxDQUFQLENBRDJCO0VBQWhCOzs7Ozs7Ozs7Ozs7QUFoQ2YsVUFBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQUksT0FBTyxlQUFHLEtBQUgsR0FBVyxDQUFDLGVBQUcsSUFBSCxDQUFaLENBRFc7O0FBR3RCLFNBQUksTUFBTSxNQUFOLEVBQWM7QUFDZCxjQUFLLElBQUwsQ0FBVSxlQUFHLE9BQUgsQ0FBVixDQURjO01BQWxCOztBQUlBLFNBQUksTUFBTSxPQUFOLEVBQWU7QUFDZixjQUFLLElBQUwsQ0FBVSxlQUFHLFFBQUgsQ0FBVixDQURlO01BQW5COztBQUlBLFNBQUksTUFBTSxLQUFOLEVBQWE7QUFDYixjQUFLLElBQUwsQ0FBVSxlQUFHLE1BQUgsQ0FBVixDQURhO01BQWpCOztBQUlBLFNBQUksTUFBTSxRQUFOLEVBQWdCO0FBQ2hCLGNBQUssSUFBTCxDQUFVLGVBQUcsU0FBSCxDQUFWLENBRGdCO01BQXBCOztBQUlBLFNBQUksTUFBTSxRQUFOLEVBQWdCO0FBQ2hCLGNBQUssSUFBTCxDQUFVLGVBQUcsU0FBSCxDQUFWLENBRGdCO01BQXBCOztBQUlBLFNBQUksTUFBTSxTQUFOLEVBQWlCO0FBQ2pCLGNBQUssSUFBTCxDQUFVLGVBQUcsVUFBSCxDQUFWLENBRGlCO01BQXJCOztBQUlBLG9CQUFHLEtBQUgsR0FBVyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQVgsQ0EzQnNCOztBQTZCdEIsMkJBN0JzQjs7Ozs7Ozs7Ozs7OzttQkNhWCxVQUFVLEdBQVYsRUFBZTtBQUMxQixZQUFPLG1CQUFTO0FBQ1osY0FBSyxHQUFMO0FBQ0Esb0JBQVcsSUFBSSxJQUFKLENBQVMsR0FBVCxpQkFBbUIsSUFBbkIsQ0FBd0IsRUFBeEIsQ0FBWDtBQUNBLGFBQUksVUFBVSxHQUFWLENBQUo7TUFIRyxDQUFQLENBRDBCO0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaZixVQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDdEIsU0FBSSxPQUFPLGNBQUcsS0FBSCxHQUFXLENBQUMsY0FBRyxJQUFILENBQVosQ0FEVzs7QUFHdEIsU0FBSSxNQUFNLFNBQU4sRUFBaUI7QUFDakIsY0FBSyxJQUFMLENBQVUsY0FBRyxVQUFILENBQVYsQ0FEaUI7TUFBckI7O0FBSUEsbUJBQUcsS0FBSCxHQUFXLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBWCxDQVBzQjs7QUFTdEIsMEJBVHNCOzs7Ozs7Ozs7Ozs7O21CQ0FYLFVBQVUsS0FBVixFQUFpQjtBQUM1QixZQUFPLHFCQUFTO0FBQ1osbUJBQVUsTUFBTSxJQUFOLENBQVcsR0FBWCxnQkFBb0IsSUFBcEIsQ0FBeUIsRUFBekIsQ0FBVjtBQUNBLDRCQUZZO01BQVQsQ0FBUCxDQUQ0QjtFQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQ3FCQztBQXpCaEIsS0FBTSxZQUFZO0FBQ2QsWUFBTyxJQUFQO0VBREU7O0FBSU4sVUFBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUM5QixTQUFJLEtBQUssSUFBTCxPQUFnQixFQUFoQixFQUFtQjtBQUNuQixnQkFBTyxTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBUCxDQURtQjtNQUF2Qjs7O0FBRDhCLFNBTTFCLFNBQVMsSUFBSSxTQUFKLEVBQVQsQ0FOMEI7QUFPOUIsU0FBSSxNQUFNLE9BQU8sZUFBUCxDQUF1QixJQUF2QixFQUE2QixXQUE3QixFQUEwQyxlQUExQyxDQVBvQjtBQVE5QixTQUFJLE9BQU8sSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFQLENBUjBCO0FBUzlCLFNBQUksT0FBTyxJQUFJLFVBQUosQ0FBZSxDQUFmLENBQVAsQ0FUMEI7QUFVOUIsU0FBSSxnQkFBSixDQVY4Qjs7QUFZOUIsU0FBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUFQLEVBQTJCO0FBQzNCLGNBQUssV0FBTCxDQUFpQixJQUFqQixFQUQyQjtNQUEvQixNQUVPLElBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUCxFQUEyQjtBQUNsQyxjQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFEa0M7TUFBL0I7O0FBSVAsWUFBTyxJQUFQLENBbEI4QjtFQUFsQzs7QUFxQk8sVUFBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQztBQUN0QyxTQUFJLFFBQVE7QUFDUixlQUFNLEtBQUssUUFBTDtNQUROLENBRGtDOztBQUt0QyxTQUFJLE1BQU0sSUFBTixLQUFlLENBQWYsRUFBa0I7QUFDbEIsZUFBTSxPQUFOLEdBQWdCLEtBQUssV0FBTCxDQURFO01BQXRCLE1BRU87QUFDSCxlQUFNLFNBQU4sR0FBa0IsRUFBbEIsQ0FERztBQUVILGVBQU0sS0FBTixHQUFjLEVBQWQsQ0FGRztBQUdILGVBQU0sR0FBTixHQUFZLEtBQUssT0FBTCxDQUhUOztBQUtILGFBQUksS0FBSyxVQUFMLEVBQWlCO0FBQ2pCLGtCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sU0FBUyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsSUFBSSxNQUFKLEVBQVksR0FBN0QsRUFBa0U7QUFDOUQsdUJBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixvQkFBb0IsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQXBCLENBQXJCLEVBRDhEO2NBQWxFO1VBREo7O0FBT0EsY0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLFNBQVMsS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLElBQUksTUFBSixFQUFZLEdBQTdELEVBQWtFO0FBQzlELGlCQUFJLE9BQU8sS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLElBQW5CLENBRG1EOztBQUc5RCxpQkFBSSxTQUFTLE9BQVQsRUFBa0I7QUFDbEIsd0JBQU8sV0FBUCxDQURrQjtjQUF0Qjs7QUFJQSxtQkFBTSxLQUFOLENBQVksSUFBWixJQUFvQixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBbkIsQ0FBeUIsT0FBekIsQ0FBaUMsUUFBakMsRUFBMkMsR0FBM0MsRUFBZ0QsSUFBaEQsR0FBdUQsS0FBdkQsQ0FBNkQsR0FBN0QsQ0FBcEIsQ0FQOEQ7VUFBbEU7TUFkSjs7QUF5QkEsWUFBTyxLQUFQLENBOUJzQztFQUFuQzs7QUFpQ1AsVUFBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQUksU0FBUyxFQUFULENBRGtCOztBQUd0QixVQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGFBQUksT0FBTyxNQUFNLEdBQU4sRUFBVyxJQUFYLENBQWdCLEdBQWhCLENBQVAsQ0FEZTs7QUFHbkIsYUFBSSxRQUFRLFdBQVIsRUFBcUI7QUFDckIsbUJBQU0sT0FBTixDQURxQjtVQUF6Qjs7QUFJQSxnQkFBTyxJQUFQLENBQWUsYUFBUSxVQUF2QixFQVBtQjtNQUF2Qjs7QUFVQSxZQUFPLE9BQU8sSUFBUCxDQUFZLEdBQVosQ0FBUCxDQWJzQjtFQUExQjs7QUFnQkEsVUFBUyxhQUFULENBQXVCLEtBQXZCLEVBQThDO1NBQWhCLGtFQUFZLGtCQUFJOztBQUMxQyxTQUFJLFFBQVEsVUFBVSxNQUFNLEtBQU4sQ0FBbEIsQ0FEc0M7O0FBRzFDLGFBQU8sTUFBTSxJQUFOO0FBQ0gsY0FBSyxDQUFMO0FBQVEseUJBQVUsU0FBVixDQUFSO0FBREo7QUFFYSwwQkFBVyxNQUFNLEdBQU4sU0FBYSxjQUFTLG1CQUFjLE1BQU0sR0FBTixNQUEvQyxDQUFUO0FBRkosTUFIMEM7RUFBOUM7O0FBU0EsVUFBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCO0FBQ3ZCLFNBQUksWUFBWSxFQUFaLENBRG1COztBQUd2QixTQUFJLE1BQU0sSUFBTixLQUFlLENBQWYsRUFBa0I7QUFDbEIsY0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLFNBQVMsTUFBTSxTQUFOLENBQWdCLE1BQWhCLEVBQXdCLElBQUksTUFBSixFQUFZLEdBQTdELEVBQWtFO0FBQzlELDBCQUFhLFdBQVcsTUFBTSxTQUFOLENBQWdCLENBQWhCLENBQVgsQ0FBYixDQUQ4RDtVQUFsRTtNQURKLE1BSU87QUFDSCxxQkFBWSxNQUFNLE9BQU4sQ0FEVDtNQUpQOztBQVFBLFlBQU8sY0FBYyxLQUFkLEVBQXFCLFNBQXJCLENBQVAsQ0FYdUI7RUFBM0I7O0FBY08sS0FBSSxzQkFBTyxTQUFQLElBQU8sQ0FBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO0FBQ3hDLFNBQUksVUFBVSxDQUFDLE1BQUQsRUFBUztBQUNuQixnQkFBTztBQUNILG1CQUFNLGFBQU47VUFESixDQURtQjtNQUF2QixNQUlPLElBQUksQ0FBQyxNQUFELElBQVcsTUFBWCxFQUFtQjtBQUMxQixnQkFBTztBQUNILG1CQUFNLFVBQU47QUFDQSxvQkFBTyxNQUFQO1VBRkosQ0FEMEI7TUFBdkIsTUFLQSxJQUFJLE9BQU8sR0FBUCxLQUFlLE9BQU8sR0FBUCxFQUFZO0FBQ2xDLGdCQUFPO0FBQ0gsbUJBQU0sY0FBTjtBQUNBLG9CQUFPLE1BQVA7VUFGSixDQURrQztNQUEvQixNQUtBLElBQUksT0FBTyxJQUFQLEtBQWdCLENBQWhCLElBQXFCLE9BQU8sSUFBUCxLQUFnQixDQUFoQixFQUFtQjtBQUMvQyxhQUFJLE9BQU8sT0FBUCxLQUFtQixPQUFPLE9BQVAsRUFBZ0I7QUFDbkMsb0JBQU87QUFDSCx1QkFBTSxjQUFOO0FBQ0Esd0JBQU8sTUFBUDtjQUZKLENBRG1DO1VBQXZDO01BREcsTUFPQTtBQUNILGFBQUksUUFBUSxFQUFSLENBREQ7QUFFSCxhQUFJLFFBQVEsRUFBUixDQUZEOztBQUlILGNBQUssSUFBSSxHQUFKLElBQVcsT0FBTyxLQUFQLEVBQWM7QUFDMUIsaUJBQUksUUFBUSxPQUFPLEtBQVAsQ0FBYSxHQUFiLENBQVIsQ0FEc0I7QUFFMUIsaUJBQUksUUFBUSxPQUFPLEtBQVAsQ0FBYSxHQUFiLENBQVIsQ0FGc0I7O0FBSTFCLGlCQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1IsdUJBQU0sSUFBTixDQUFXO0FBQ1AsMkJBQU0sS0FBTjtBQUNBLDJCQUFNLEdBQU47QUFDQSwwQkFBSyxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQUw7a0JBSEosRUFEUTtjQUFaLE1BTU87QUFDSCxxQkFBSSxXQUFXLE1BQU0sSUFBTixDQUFXLEdBQVgsQ0FBWCxDQUREO0FBRUgscUJBQUksV0FBVyxNQUFNLElBQU4sQ0FBVyxHQUFYLENBQVgsQ0FGRDs7QUFJSCxxQkFBSSxhQUFhLFFBQWIsRUFBdUI7QUFDdkIsMkJBQU0sSUFBTixDQUFXO0FBQ1AsK0JBQU0sS0FBTjtBQUNBLCtCQUFNLEdBQU47QUFDQSw4QkFBSyxRQUFMO3NCQUhKLEVBRHVCO2tCQUEzQjtjQVZKO1VBSko7O0FBd0JBLGNBQUssSUFBSSxHQUFKLElBQVcsT0FBTyxLQUFQLEVBQWM7QUFDMUIsaUJBQUksUUFBUSxPQUFPLEtBQVAsQ0FBYSxHQUFiLENBQVIsQ0FEc0I7O0FBRzFCLGlCQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1IsdUJBQU0sSUFBTixDQUFXO0FBQ1AsMkJBQU0sUUFBTjtBQUNBLDJCQUFNLEdBQU47a0JBRkosRUFEUTtjQUFaO1VBSEo7O0FBV0EsY0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLFNBQVMsT0FBTyxTQUFQLENBQWlCLE1BQWpCLEVBQXlCLElBQUksTUFBSixFQUFZLEdBQTlELEVBQW1FO0FBQy9ELGlCQUFJLFFBQVEsS0FBSyxPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsQ0FBTCxFQUEwQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsQ0FBMUIsQ0FBUixDQUQyRDs7QUFHL0QsaUJBQUksS0FBSixFQUFXO0FBQ1AsdUJBQU0sQ0FBTixJQUFXLEtBQVgsQ0FETztjQUFYO1VBSEo7O0FBUUEsY0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLFNBQVMsT0FBTyxTQUFQLENBQWlCLE1BQWpCLEVBQXlCLElBQUksTUFBSixFQUFZLEdBQTlELEVBQW1FO0FBQy9ELGlCQUFJLENBQUMsT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQUQsRUFBc0I7QUFDdEIscUJBQUksUUFBUSxLQUFLLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUFMLEVBQTBCLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUExQixDQUFSLENBRGtCOztBQUd0QixxQkFBSSxLQUFKLEVBQVc7QUFDUCwyQkFBTSxDQUFOLElBQVcsS0FBWCxDQURPO2tCQUFYO2NBSEo7VUFESjs7QUFVQSxhQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsbUJBQU0sS0FBTixHQUFjLEtBQWQsQ0FEYztVQUFsQjs7QUFJQSxhQUFJLE9BQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7QUFDM0Isb0JBQU8sS0FBUCxDQUQyQjtVQUEvQjtNQXBFRztFQWZPOztBQXlGbEIsVUFBUyxZQUFULENBQXNCLFVBQXRCLEVBQWtDLElBQWxDLEVBQXdDLEVBQXhDLEVBQTRDO0FBQ3hDLGFBQU8sR0FBRyxJQUFIO0FBQ0gsY0FBSyxVQUFMO0FBQ0ksaUJBQUksVUFBSixFQUFnQjtBQUNaLDRCQUFXLFdBQVgsQ0FBdUIsY0FBYyxHQUFHLEtBQUgsQ0FBckMsRUFEWTtjQUFoQjtBQUdKLG1CQUpBO0FBREosY0FNUyxhQUFMO0FBQ0ksaUJBQUksVUFBSixFQUFnQjtBQUNYLDRCQUFXLFdBQVgsQ0FBdUIsSUFBdkIsRUFEVztjQUFoQjtBQUdKLG1CQUpBO0FBTkosY0FXUyxjQUFMO0FBQ0ksaUJBQUksVUFBVSxjQUFjLEdBQUcsS0FBSCxDQUF4QixDQURSOztBQUdJLGlCQUFJLFVBQUosRUFBZ0I7QUFDWiw0QkFBVyxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLElBQWpDLEVBRFk7QUFFWiw0QkFBVyxXQUFYLENBQXVCLElBQXZCLEVBRlk7Y0FBaEI7O0FBS0Esb0JBQU8sT0FBUCxDQVJKO0FBU0EsbUJBVEE7QUFYSixNQUR3Qzs7QUF3QnhDLFlBQU8sSUFBUCxDQXhCd0M7RUFBNUM7O0FBMkJBLFVBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixHQUE1QixFQUFpQztBQUM3QixVQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sU0FBUyxJQUFJLE1BQUosRUFBWSxJQUFJLE1BQUosRUFBWSxHQUFqRCxFQUFzRDtBQUNsRCxhQUFJLEtBQUssSUFBSSxDQUFKLENBQUwsQ0FEOEM7QUFFbEQsYUFBSSxPQUFPLEdBQUcsSUFBSCxDQUZ1Qzs7QUFJbEQsYUFBSSxTQUFTLFdBQVQsRUFBc0I7QUFDdEIsb0JBQU8sT0FBUCxDQURzQjtVQUExQjs7QUFJQSxhQUFJLFNBQVMsVUFBVSxJQUFWLENBQVQsQ0FSOEM7O0FBVWxELGlCQUFPLEdBQUcsSUFBSDtBQUNILGtCQUFLLEtBQUw7QUFDSSxxQkFBSSxNQUFKLEVBQVk7QUFDUiwwQkFBSyxJQUFMLElBQWEsR0FBRyxHQUFILENBREw7a0JBQVosTUFFTztBQUNILDBCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsR0FBRyxHQUFILENBQXhCLENBREc7a0JBRlA7QUFLSix1QkFOQTtBQURKLGtCQVFTLFFBQUw7QUFDSSxxQkFBSSxNQUFKLEVBQVk7QUFDUiwwQkFBSyxJQUFMLElBQWEsRUFBYixDQURRO2tCQUFaLE1BRU87QUFDSCwwQkFBSyxlQUFMLENBQXFCLElBQXJCLEVBREc7a0JBRlA7QUFLSix1QkFOQTtBQVJKLFVBVmtEO01BQXREOztBQTRCQSxZQUFPLElBQVAsQ0E3QjZCO0VBQWpDOztBQWdDTyxLQUFJLGtDQUFhLFNBQWIsVUFBYSxDQUFVLElBQVYsRUFBZ0IsT0FBaEIsRUFBeUIsVUFBekIsRUFBcUM7QUFDekQsa0JBQWEsY0FBYyxLQUFLLFVBQUwsQ0FEOEI7O0FBR3pELFNBQUksQ0FBQyxPQUFELEVBQVU7QUFDVixnQkFBTyxJQUFQLENBRFU7TUFBZDs7QUFJQSxTQUFJLFFBQVEsSUFBUixFQUFjO0FBQ2QsZ0JBQU8sYUFBYSxVQUFiLEVBQXlCLElBQXpCLEVBQStCLE9BQS9CLENBQVAsQ0FEYztNQUFsQixNQUVPO0FBQ0gsYUFBSSxhQUFhLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixLQUFLLFVBQUwsQ0FBeEMsQ0FERDs7QUFHSCxjQUFLLElBQUksR0FBSixJQUFXLE9BQWhCLEVBQXlCO0FBQ3JCLGlCQUFJLFFBQVEsT0FBUixFQUFpQjtBQUNqQiw4QkFBYSxJQUFiLEVBQW1CLFFBQVEsR0FBUixDQUFuQixFQURpQjtjQUFyQixNQUVPO0FBQ0gsNEJBQVcsV0FBVyxHQUFYLENBQVgsRUFBNEIsUUFBUSxHQUFSLENBQTVCLEVBQTBDLElBQTFDLEVBREc7Y0FGUDtVQURKO01BTEo7O0FBY0EsWUFBTyxJQUFQLENBckJ5RDtFQUFyQzs7QUF3QmpCLEtBQUksd0NBQWdCLFNBQWhCLGFBQWdCLENBQVUsS0FBVixFQUFpQjtBQUN4QyxZQUFPLG1CQUFtQixXQUFXLEtBQVgsQ0FBbkIsQ0FBUCxDQUR3QztFQUFqQjs7QUFJcEIsS0FBSSx3Q0FBZ0IsU0FBaEIsYUFBZ0IsQ0FBVSxJQUFWLEVBQWdCO0FBQ3ZDLFlBQU8sb0JBQW9CLG1CQUFtQixJQUFuQixDQUFwQixDQUFQLENBRHVDO0VBQWhCOztBQUlwQixLQUFJLGtDQUFhLFNBQWIsVUFBYSxDQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUI7QUFDM0MsWUFBTyxXQUFXLElBQVgsRUFBaUIsS0FBSyxvQkFBb0IsSUFBcEIsQ0FBTCxFQUFnQyxLQUFoQyxDQUFqQixDQUFQLENBRDJDO0VBQXZCLEM7Ozs7OztBQ3JSeEI7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixnQ0FBZ0MsR0FBRyxPQUFPLDZCQUE2QixHQUFHLFlBQVksZ0NBQWdDLEdBQUcscUJBQXFCLG9CQUFvQixxQkFBcUIsa0JBQWtCLEdBQUcsYUFBYSwrQkFBK0IsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsNkJBQTZCLDZDQUE2QyxxQkFBcUIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsOEJBQThCLGdDQUFnQyxzQkFBc0IsbUJBQW1CLEdBQUcsd0JBQXdCLDRDQUE0QyxHQUFHLGVBQWUsOEJBQThCLGdDQUFnQyxHQUFHLFVBQVUsMEVBQTBFLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGtEQUFrRCwyQ0FBMkMsZ0JBQWdCLGdDQUFnQyxHQUFHLE9BQU8sNkJBQTZCLEdBQUcsWUFBWSxnQ0FBZ0MsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQixrQkFBa0IsR0FBRyxhQUFhLCtCQUErQixHQUFHLGtCQUFrQixzQkFBc0IsdUJBQXVCLDBCQUEwQiw2QkFBNkIsNkNBQTZDLHFCQUFxQixtQkFBbUIsNEJBQTRCLHlCQUF5Qiw4QkFBOEIsZ0NBQWdDLHNCQUFzQixtQkFBbUIsR0FBRyx3QkFBd0IsNENBQTRDLEdBQUcsZUFBZSw4QkFBOEIsZ0NBQWdDLEdBQUcsK0JBQStCOztBQUVockU7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUE4QyxHQUFHLHVCQUF1QixrQ0FBa0MscUJBQXFCLHlCQUF5QixpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRywwQkFBMEIseUJBQXlCLHFCQUFxQix3QkFBd0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsZUFBZSxpQkFBaUIsR0FBRyxpQ0FBaUMsRUFBRSxrQ0FBa0MsRUFBRSwwQkFBMEIseUJBQXlCLGlCQUFpQixhQUFhLGNBQWMsc0JBQXNCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLEdBQUcsZ0NBQWdDLDBDQUEwQyx5Q0FBeUMsK0NBQStDLEdBQUcsNkJBQTZCLGdDQUFnQyxzQkFBc0IseUJBQXlCLGdDQUFnQyxHQUFHLHVDQUF1QyxzQkFBc0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGdDQUFnQyw0Q0FBNEMsK0JBQStCLGdDQUFnQyxHQUFHLGtDQUFrQyxhQUFhLGdCQUFnQix5QkFBeUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsa0JBQWtCLGdEQUFnRCxrREFBa0QsNkJBQTZCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxzQ0FBc0MsUUFBUSxpQkFBaUIsS0FBSyxXQUFXLGlCQUFpQixLQUFLLFdBQVcsaUJBQWlCLGtDQUFrQyxLQUFLLFVBQVUsaUJBQWlCLHFDQUFxQyxLQUFLLEdBQUcsMENBQTBDLFFBQVEsaUJBQWlCLGtDQUFrQyxLQUFLLFdBQVcsd0NBQXdDLEtBQUssV0FBVyxpQkFBaUIsa0NBQWtDLEtBQUssV0FBVyxpQkFBaUIsa0NBQWtDLEtBQUssVUFBVSxpQkFBaUIsa0NBQWtDLEtBQUssR0FBRyxVQUFVLDJFQUEyRSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLGFBQWEsY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLGlEQUFpRCxHQUFHLFVBQVUsa0NBQWtDLHFCQUFxQix5QkFBeUIsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsYUFBYSx5QkFBeUIscUJBQXFCLHdCQUF3QixzQkFBc0IsdUJBQXVCLHlCQUF5QixlQUFlLGlCQUFpQixHQUFHLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGFBQWEseUJBQXlCLGlCQUFpQixhQUFhLGNBQWMsc0JBQXNCLHVCQUF1QixxQkFBcUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLEdBQUcsbUJBQW1CLDBDQUEwQyw0QkFBNEIsK0NBQStDLEdBQUcsZ0JBQWdCLGdDQUFnQyxzQkFBc0IseUJBQXlCLGdDQUFnQyxHQUFHLDBCQUEwQixzQkFBc0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGdDQUFnQywrQkFBK0IsK0JBQStCLGdDQUFnQyxHQUFHLHFCQUFxQixhQUFhLGdCQUFnQix5QkFBeUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsa0JBQWtCLG1DQUFtQyxrREFBa0QsNkJBQTZCLG1DQUFtQyxnQ0FBZ0MsR0FBRyx5QkFBeUIsUUFBUSxpQkFBaUIsS0FBSyxXQUFXLGlCQUFpQixLQUFLLFdBQVcsaUJBQWlCLGtDQUFrQyxLQUFLLFVBQVUsaUJBQWlCLHFDQUFxQyxLQUFLLEdBQUcsNkJBQTZCLFFBQVEsaUJBQWlCLGtDQUFrQyxLQUFLLFdBQVcsd0NBQXdDLEtBQUssV0FBVyxpQkFBaUIsa0NBQWtDLEtBQUssV0FBVyxpQkFBaUIsa0NBQWtDLEtBQUssVUFBVSxpQkFBaUIsa0NBQWtDLEtBQUssR0FBRywrQkFBK0I7O0FBRXQyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0QkE7QUFDQTs7O0FBR0E7QUFDQSx5REFBd0QsdUJBQXVCLHNCQUFzQixxQkFBcUIscUJBQXFCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLEdBQUcsb0NBQW9DLHFCQUFxQixrQkFBa0IsZ0NBQWdDLHVCQUF1QixxQkFBcUIsR0FBRyxVQUFVLHlHQUF5RyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsNERBQTRELHVCQUF1QixzQkFBc0IscUJBQXFCLHFCQUFxQix5QkFBeUIsMEJBQTBCLDBCQUEwQixHQUFHLGFBQWEscUJBQXFCLGtCQUFrQixnQ0FBZ0MsdUJBQXVCLHFCQUFxQixHQUFHLCtCQUErQjs7QUFFemdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWEE7QUFDQTs7O0FBR0E7QUFDQSxxREFBb0QsRUFBRSw4QkFBOEIscUJBQXFCLHNCQUFzQix5QkFBeUIsMkJBQTJCLEdBQUcsK0JBQStCLHVCQUF1QixzQkFBc0IsbUJBQW1CLHlCQUF5QixxQkFBcUIscUJBQXFCLDBCQUEwQiwrQ0FBK0MsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcseUNBQXlDLHNCQUFzQixHQUFHLFVBQVUsd0dBQXdHLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLHdEQUF3RCxFQUFFLFdBQVcscUJBQXFCLHNCQUFzQix5QkFBeUIsMkJBQTJCLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLG1CQUFtQix5QkFBeUIscUJBQXFCLHFCQUFxQiwwQkFBMEIsK0NBQStDLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsK0JBQStCOztBQUU1MEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDYkE7QUFDQTs7O0FBR0E7QUFDQSxpREFBZ0QsYUFBYSxjQUFjLHNCQUFzQixrQkFBa0IsbUJBQW1CLGlEQUFpRCxHQUFHLDJCQUEyQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixzQkFBc0Isa0JBQWtCLHNCQUFzQiwrQkFBK0IsMkJBQTJCLG9CQUFvQixHQUFHLGlDQUFpQywrQkFBK0IsR0FBRyw2QkFBNkIseUJBQXlCLG1CQUFtQix1QkFBdUIseUJBQXlCLHdCQUF3QixHQUFHLGdDQUFnQyw0Q0FBNEMsR0FBRyxpQ0FBaUMsMENBQTBDLEdBQUcsa0NBQWtDLDJDQUEyQyxHQUFHLCtCQUErQiwwQ0FBMEMsR0FBRyxnQ0FBZ0MsMkNBQTJDLEdBQUcsMkNBQTJDLFFBQVEsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxHQUFHLFlBQVksbUZBQW1GLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxtREFBbUQsYUFBYSxjQUFjLHNCQUFzQixrQkFBa0IsbUJBQW1CLGtDQUFrQyxHQUFHLFlBQVkseUJBQXlCLGdCQUFnQixrQkFBa0Isc0JBQXNCLGtCQUFrQixzQkFBc0IsK0JBQStCLDJCQUEyQixvQkFBb0IsR0FBRyxrQkFBa0IsK0JBQStCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsd0JBQXdCLEdBQUcsaUJBQWlCLDRDQUE0QyxHQUFHLGtCQUFrQiwwQ0FBMEMsR0FBRyxtQkFBbUIsMkNBQTJDLEdBQUcsZ0JBQWdCLDBDQUEwQyxHQUFHLGlCQUFpQiwyQ0FBMkMsR0FBRyw0QkFBNEIsUUFBUSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsaUNBQWlDOztBQUVub0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2xCQTtBQUNBOzs7QUFHQTtBQUNBLGdEQUErQyxrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MseUJBQXlCLGdDQUFnQyxrQ0FBa0MsR0FBRyx3QkFBd0IsdUNBQXVDLEdBQUcseUJBQXlCLGtCQUFrQixpQkFBaUIsR0FBRyx5QkFBeUIsRUFBRSxpREFBaUQsOEJBQThCLEdBQUcsa0RBQWtELCtCQUErQixHQUFHLDRCQUE0Qix1QkFBdUIsOEJBQThCLDBCQUEwQixnQ0FBZ0Msd0JBQXdCLHlCQUF5QixHQUFHLHNEQUFzRCxxQkFBcUIsMkJBQTJCLHlCQUF5Qix3QkFBd0IsbUJBQW1CLHNCQUFzQixrQkFBa0IsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcseUJBQXlCLG9DQUFvQyx5QkFBeUIsT0FBTyw2QkFBNkIsMkNBQTJDLCtDQUErQyxPQUFPLDhCQUE4Qiw4Q0FBOEMsT0FBTyxpREFBaUQsb0NBQW9DLHVCQUF1QixHQUFHLFVBQVUsMkZBQTJGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksYUFBYSxtREFBbUQsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLGtDQUFrQyxHQUFHLFVBQVUsdUNBQXVDLEdBQUcsV0FBVyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxFQUFFLHFCQUFxQiw4QkFBOEIsR0FBRyxzQkFBc0IsK0JBQStCLEdBQUcsY0FBYyx1QkFBdUIsOEJBQThCLDBCQUEwQixnQ0FBZ0Msd0JBQXdCLHlCQUF5QixHQUFHLDBCQUEwQixxQkFBcUIsYUFBYSx5QkFBeUIsd0JBQXdCLG1CQUFtQixzQkFBc0Isa0JBQWtCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLHlCQUF5QixvQ0FBb0MseUJBQXlCLE9BQU8sNkJBQTZCLDJDQUEyQywrQ0FBK0MsT0FBTyw4QkFBOEIsOENBQThDLE9BQU8scUJBQXFCLG9DQUFvQyx1QkFBdUIsR0FBRywrQkFBK0I7O0FBRTlwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBOEMsb0NBQW9DLEdBQUcsMkJBQTJCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHVDQUF1QyxHQUFHLDhCQUE4QixzQ0FBc0MsR0FBRyxVQUFVLHFGQUFxRixZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGtEQUFrRCxvQ0FBb0MsR0FBRyxjQUFjLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHVDQUF1QyxHQUFHLGlCQUFpQixzQ0FBc0MsR0FBRywrQkFBK0I7O0FBRTN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWkE7QUFDQTs7O0FBR0E7QUFDQSxpREFBZ0QsbUJBQW1CLDRCQUE0Qix5QkFBeUIsaUJBQWlCLEdBQUcsVUFBVSxtRkFBbUYsVUFBVSxZQUFZLGFBQWEsV0FBVyxtREFBbUQsbUJBQW1CLDRCQUE0Qix5QkFBeUIsaUJBQWlCLEdBQUcsK0JBQStCOztBQUVyYztBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNWQSx1RDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDckdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsOGFBQThhLHlCO0FBQzNmLG1MQUFrTCxFO0FBQ2xMLHFCQUFvQjtBQUNwQixFOzs7Ozs7QUNMQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsd0pBQXdKLGtEO0FBQ3JPLHNGQUFxRixFQUFFLEU7QUFDdkYsbUdBQWtHO0FBQ2xHLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSx5RkFBeUYsMkM7QUFDdEssbUpBQWtKLEVBQUUsRTtBQUNwSixhQUFZLDBCO0FBQ1osZ0pBQStJLEU7QUFDL0ksdUhBQXNIO0FBQ3RILEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSx3S0FBd0s7QUFDclAsRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLG9FQUFvRSxpQjtBQUNqSiw2QkFBNEIsRUFBRSxPO0FBQzlCLG9MQUFtTCx1QjtBQUNuTCxpREFBZ0QsRUFBRSxPO0FBQ2xELGdJQUErSCxFO0FBQy9ILGdHQUErRixFO0FBQy9GLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUseUVBQXlFO0FBQ3RKLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSw4REFBOEQ7QUFDM0ksRSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDQxNGY0ZDk1MzJhZTRmYTI1OGJkXG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgY24gZnJvbSAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICogYXMgdmRvbSBmcm9tICcuL3ZpcnR1YWwtZG9tLmpzJztcbmltcG9ydCBhc3NpZ25FdmVudHMgZnJvbSAnLi9hc3NpZ24tZXZlbnRzLmpzJztcblxuLy8gcmVhY3Qgc3R5bGU6XG5pbXBvcnQgYXBwIGZyb20gJy4vdmlld3MvYXBwLmpzJztcblxuLy8gcmVkdXggc3R5bGU6XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL3JlZHVjZXJzL2FjdGlvbnMuanMnO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChzdGF0ZSkge1xuICAgICAgICB0aGlzLmluaXRBcHBOb2RlKClcbiAgICAgICAgICAgIC5zZXRTdGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIC5pbml0R2FtZVRpbWVyKClcbiAgICAgICAgICAgIC5hc3NpZ25FdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXRFdmVudHMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NsaWNrJzogWyAnbWFpbicsICdnYW1lLWZvcm0nLCAnbW9kYWwnLCAnZmluYWwtcmVzdWx0cycgXSxcbiAgICAgICAgICAgICdmb2N1c291dCc6IFsgJ2dhbWUtZm9ybScgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGFzc2lnbkV2ZW50cyh0aGlzLCB0aGlzLmdldEV2ZW50cygpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0QXBwTm9kZSAoKSB7XG4gICAgICAgIHRoaXMuYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0R2FtZVRpbWVyICgpIHtcbiAgICAgICAgdGhpcy5nYW1lVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnRpY2tUaW1lcigpKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb2xsQmFsbEFuaW1hdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAkcm9sbEJhbGxBbmltYXRpb246IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAkcm9sbEJhbGxBbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSB8fCB7fSwgc3RhdGUpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVkdWNlQWN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShyZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybUlucHV0Rm9jdXNvdXQgKGUpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy51cGRhdGVQbGF5ZXJOYW1lKHtcbiAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSksXG4gICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG9uRmluYWxSZXN1bHRzTmV3Q2xpY2sgKCkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLm5ld0dhbWUoKSk7XG4gICAgfVxuXG4gICAgb25NYWluUm9sbENsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpb25JblByb2dyZXNzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudGhyb3dCYWxsKCkpXG4gICAgICAgICAgICAuc3RhcnRSb2xsQmFsbEFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmdhbWUuaW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmVuZEdhbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybVBsYXlDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMucGxheUdhbWUoKSk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmNsb3NlTW9kYWwoKSk7XG4gICAgfVxuXG4gICAgaXNBbmltYXRpb25JblByb2dyZXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuJHJvbGxCYWxsQW5pbWF0aW9uO1xuICAgIH1cbn1cblxubmV3IEFwcChyZWR1Y2VyKCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzdW1BcnJheSAoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2MgKyBwYXJzZUludCh2YWwgfHwgMCwgMTApO1xuICAgIH0sIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZE51bSAobWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kQXJyKGFycikge1xuICAgIHJldHVybiBhcnJbcmFuZE51bShhcnIubGVuZ3RoIC0gMSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kIChkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwge307XG5cbiAgICBmb3IgKGxldCBpID0gMSwgaUxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBqTGVuZ3RoID0ga2V5cy5sZW5ndGg7IGogPCBqTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgbGV0IHR5cGVPZlZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtrZXldKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVPZlZhbHVlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB0eXBlT2ZWYWx1ZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZHN0W2tleV0gfHwgKG9ialtrZXldIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGV4dGVuZChkc3Rba2V5XSwgb2JqW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2hlbHBlcnMuanNcbiAqKi8iLCJleHBvcnQgbGV0IFRJQ0tfVElNRVIgPSAnVElDS19USU1FUic7XG5leHBvcnQgbGV0IFRIUk9XX0JBTEwgPSAnVEhST1dfQkFMTCc7XG5leHBvcnQgbGV0IENMT1NFX01PREFMID0gJ0NMT1NFX01PREFMJztcbmV4cG9ydCBsZXQgUExBWV9HQU1FID0gJ1BMQVlfR0FNRSc7XG5leHBvcnQgbGV0IE5FV19HQU1FID0gJ05FV19HQU1FJztcbmV4cG9ydCBsZXQgRU5EX0dBTUUgPSAnRU5EX0dBTUUnO1xuZXhwb3J0IGxldCBVUERBVEVfUExBWUVSX05BTUUgPSAnVVBEQVRFX1BMQVlFUl9OQU1FJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL3R5cGVzLmpzXG4gKiovIiwiZnVuY3Rpb24gc25ha2VUb0NhbWVsIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhcXC1cXHcpL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIgKGNvbnRleHQsIGV2ZW50c0hhc2gpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gZXZlbnRzSGFzaCkge1xuICAgICAgICAgICAgbGV0IGhhc2ggPSBldmVudHNIYXNoW2F0dHJOYW1lXTtcbiAgICAgICAgICAgIGxldCBhdHRyID0gZS50YXJnZXQuYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyTmFtZSA9IGhhc2gubGlzdGVuZXJOYW1lc1thY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJOYW1lID0gaGFzaC5saXN0ZW5lck5hbWVzW2FjdGlvbl0gPSBzbmFrZVRvQ2FtZWwoYG9uLSR7aGFzaC5jb21wb25lbnR9LSR7YWN0aW9ufS0ke2hhc2guZXZlbnROYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0W2xpc3RlbmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFtsaXN0ZW5lck5hbWVdLmNhbGwoY29udGV4dCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25FdmVudHMgKGNvbnRleHQsIGV2ZW50cykge1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGxldCBldmVudHNIYXNoID0gZXZlbnRzW2V2ZW50TmFtZV0ucmVkdWNlKChhY2MsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgYWNjW2BkYXRhLSR7Y29tcG9uZW50fWBdID0geyBjb21wb25lbnQsIGV2ZW50TmFtZSwgbGlzdGVuZXJOYW1lczoge30gfTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjcmVhdGVFdmVudExpc3RlbmVyKGNvbnRleHQsIGV2ZW50c0hhc2gpKTtcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Fzc2lnbi1ldmVudHMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGxldCB1cGRhdGVQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUExBWUVSX05BTUUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCB0aHJvd0JhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVEhST1dfQkFMTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHBsYXlHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlBMQVlfR0FNRVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IG5ld0dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX0dBTUVcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBlbmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkVORF9HQU1FXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtb2RhbFJlZHVjZXJDcmVhdGVyIGZyb20gJy4vbW9kYWxSZWR1Y2VyQ3JlYXRlcic7XG5pbXBvcnQgZ2FtZVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVJlZHVjZXJDcmVhdGVyJztcblxubGV0IG1vZGFsUmVkdWNlciA9IG1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVSZWR1Y2VyID0gZ2FtZVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IGZyYW1lLnRpdGxlLFxuICAgICAgICAgICAgaXNSaWdodDogaW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZSwgaXNUb3A6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgcEluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGZJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbcEluZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsLFxuICAgICAgICAgICAgICAgIGlzUmlnaHQ6IGZJbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzU2NvcmVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0N1cnJlbnQ6IHBJbmRleCA9PT0gc3RhdGUuY3VycmVudFBsYXllcixcbiAgICAgICAgICAgIGNvbHNcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJvd3MucHVzaCguLi5wUm93cyk7XG5cbiAgICByZXR1cm4geyByb3dzIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pIHtcbiAgICBzdGF0ZS5nYW1lID0gZ2FtZVJlZHVjZXIoc3RhdGUuZ2FtZSwgYWN0aW9uKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlLnRhYmxlID0gY3JlYXRlVGFibGUoc3RhdGUuZ2FtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlID0gbW9kYWxSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qc1xuICoqLyIsIi8qICoqKlxuKiBUSElTIFJFRFVDRVIgSVMgUkVBRFkgRk9SIFNIQVJJTkcgQkwgVE8gT1RIRVIgUExBVEZPUk0uIChXSVRIIFJFQUNUIE5BVElWRSBGT1IgRVhBTVBMRSlcbioqKiAqL1xuXG5pbXBvcnQgbmFtZXMgZnJvbSAnLi9uYW1lcy5qc29uJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMuanNvbic7XG5pbXBvcnQgeyBzdW1BcnJheSwgcmFuZE51bSwgcmFuZEFyciB9IGZyb20gJ2hlbHBlcnMnO1xuXG5jb25zdCBGUkFNRVNfTEVOR1RIID0gMTA7XG5cbmZ1bmN0aW9uIHJhbmdlIChsZW5ndGgpIHtcbiAgICByZXR1cm4gQXJyYXkobGVuZ3RoKS5qb2luKCcgJykuc3BsaXQoJyAnKS5tYXAoKHYsIGkpID0+IGkpO1xufVxuXG5mdW5jdGlvbiBwYWQgKHZhbHVlLCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI7XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjYWxjRGlmZlRpbWUgKHN0YXRlKSB7XG4gICAgbGV0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBzdGF0ZS5zdGFydFRpbWUpIC8gMTAwMCksXG4gICAgICAgIHJpZ2h0U2lkZSA9IHRvdGFsU2Vjb25kcyAlIDYwLFxuICAgICAgICBsZWZ0U2lkZSA9ICh0b3RhbFNlY29uZHMgLSByaWdodFNpZGUpIC8gNjA7XG5cbiAgICBzdGF0ZS5kaWZmVGltZSA9IHBhZChsZWZ0U2lkZSwgMikgKyAnOicgKyBwYWQocmlnaHRTaWRlLCAyKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbEJhbGwgKHBpbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gW3JhbmROdW0ocGlucyldO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAocGxheWVycykge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgcGxheWVyczogcGxheWVycyB8fCBbcmFuZEFycihuYW1lcyksIHJhbmRBcnIobmFtZXMpXSxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICBpblByb2dyZXNzOiB0cnVlLFxuICAgICAgICBsYXN0UmVzdWx0OiB7fVxuICAgIH07XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGUucGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0UGxheWVyIChzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS5pblByb2dyZXNzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEZyYW1lID0gc3RhdGUuY3VycmVudEZyYW1lIDwgc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEgPyBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxIDogc3RhdGUuY3VycmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRCb251c0ZyYW1lcyAoc3RhdGUpIHtcbiAgICBsZXQgZnJhbWVzID0gc3RhdGUuZnJhbWVzLnNsaWNlKE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpLCBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxKS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmFtZVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGZyYW1lcy5sZW5ndGgtLTtcblxuICAgIGxldCByID0gMiAtIGN1cnJGcmFtZS5sZW5ndGg7XG4gICAgbGV0IGJvbnVzRnJhbWVzID0gW107XG5cbiAgICB3aGlsZSAociAmJiBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAociA9PT0gMSAmJiBmcmFtZVswXS52YWx1ZSA9PT0gMTApIHx8XG4gICAgICAgICAgICAociA9PT0gMiAmJiAoZnJhbWUudG90YWwgPT09IDEwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib251c0ZyYW1lcy51bnNoaWZ0KGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIgLT0gZnJhbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBib251c0ZyYW1lcztcbn1cblxuZnVuY3Rpb24gaXNMYXN0UGxheWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdEZyYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RnJhbWUgPT09IEZSQU1FU19MRU5HVEggLSAxO1xufVxuXG5mdW5jdGlvbiBvblRpY2tUaW1lciAoc3RhdGUpIHtcbiAgICByZXR1cm4gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gb25UaHJvd0JhbGwgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5pblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBsZXQgZnJhbWUgPSBzdGF0ZS5mcmFtZXNbc3RhdGUuY3VycmVudEZyYW1lXVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICBsZXQgcGlucyA9IEZSQU1FU19MRU5HVEg7XG4gICAgbGV0IHBsYXllck5hbWUgPSBzdGF0ZS5wbGF5ZXJzW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuXG4gICAgaWYgKGZyYW1lWzBdICYmIHBpbnMgIT09IGZyYW1lWzBdLnZhbHVlKSB7XG4gICAgICAgIHBpbnMgLT0gZnJhbWVbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGJvbnVzRnJhbWVzID0gZ2V0Qm9udXNGcmFtZXMoc3RhdGUpO1xuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHJvbGxCYWxsKHBpbnMpLCByb2xsQmFsbChwaW5zKSk7XG5cbiAgICBib251c0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS50b3RhbCArPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSwgc3BlY2lhbDogJycgfTtcblxuICAgIGZyYW1lLnB1c2gocm9sbCk7XG5cbiAgICBsZXQgcm9sbHNTdW0gPSBzdW1BcnJheShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuICAgICAgICAgICAgcm9sbC5zcGVjaWFsID0gJ3N0cmlrZSc7XG5cbiAgICAgICAgICAgIGlmICghaXNMYXN0RnJhbWUoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChmcmFtZS50b3RhbCA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnLyc7XG4gICAgICAgICAgICByb2xsLnNwZWNpYWwgPSAnc3BhcmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdC52YWx1ZSA9IGAke3ZhbHVlfSBwaW5zIWA7XG4gICAgc3RhdGUubGFzdFJlc3VsdC5jb2xvciA9IHJhbmRBcnIoY29sb3JzKTtcblxuICAgIGlmIChyb2xsLnNwZWNpYWwpIHtcbiAgICAgICAgc3RhdGUubGFzdFJlc3VsdC52YWx1ZSArPSBgICR7cm9sbC5zcGVjaWFsLnRvVXBwZXJDYXNlKCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uVXBkYXRlUGxheWVyTmFtZSAoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcbiAgICBzdGF0ZS5wbGF5ZXJzID0gc3RhdGUucGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllcik7XG5cbiAgICBpZiAoIXN0YXRlLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIHN0YXRlLnBsYXllcnMucHVzaChyYW5kQXJyKG5hbWVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGUuZnJhbWVzID0gY3JlYXRlRnJhbWVzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25QbGF5R2FtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0SW5pdGlhbFN0YXRlKHN0YXRlLnBsYXllcnMpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlICh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uUGxheUdhbWUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRJQ0tfVElNRVI6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRpY2tUaW1lcihzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVEhST1dfQkFMTDpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGhyb3dCYWxsKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUExBWUVSX05BTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qc1xuICoqLyIsImltcG9ydCB7IHN1bUFycmF5IH0gZnJvbSAnaGVscGVycyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbmFsUmVzdWx0c0RhdGEgKHN0YXRlKSB7XG4gICAgbGV0IGdhbWUgPSBzdGF0ZS5nYW1lO1xuXG4gICAgcmV0dXJuIGdhbWUucGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcixcbiAgICAgICAgICAgIHNjb3Jlczogc3VtQXJyYXkoZ2FtZS5mcmFtZXMubWFwKChmcmFtZSkgPT4gZnJhbWVbaW5kZXhdLnRvdGFsKSlcbiAgICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLnNjb3JlcyAtIGEuc2NvcmVzO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZShzdGF0ZSwgaXNPcGVuID0gdHJ1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdmaW5hbC1yZXN1bHRzJyxcbiAgICAgICAgc3R5bGU6ICdibHVlJyxcbiAgICAgICAgaXNPcGVuLFxuICAgICAgICBkYXRhOiBjcmVhdGVGaW5hbFJlc3VsdHNEYXRhKHN0YXRlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUZvcm1EYXRhIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5nYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lRm9ybVN0YXRlKHN0YXRlLCBpc09wZW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbixcbiAgICAgICAgZGF0YTogY3JlYXRlR2FtZUZvcm1EYXRhKHN0YXRlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE1vZGFsIChzdGF0ZSkge1xuICAgIHJldHVybiBjcmVhdGVHYW1lRm9ybVN0YXRlKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIHN0YXRlLm1vZGFsID0gc3RhdGUubW9kYWwgfHwgZ2V0SW5pdGlhbE1vZGFsKHN0YXRlKTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkNMT1NFX01PREFMOlxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGFsLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5FTkRfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbCA9IGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5ORVdfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbCA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qc1xuICoqLyIsImltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsL21vZGFsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICB0YWJsZUhUTUw6IGFwcC50YWJsZSA/IHRhYmxlKGFwcC50YWJsZSkgOiAnJyxcbiAgICAgICAgbW9kYWxIVE1MOiBhcHAubW9kYWwgPyBtb2RhbChhcHAubW9kYWwpIDogJycsXG4gICAgICAgIHJvbGxCYWxsQW5pbWF0aW9uOiBhcHAuJHJvbGxCYWxsQW5pbWF0aW9uLFxuICAgICAgICBsYXN0UmVzdWx0OiBhcHAuZ2FtZS5sYXN0UmVzdWx0LFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZmluYWwtcmVzdWx0cy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZmluYWwtcmVzdWx0cy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmluYWxSZXN1bHRzKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY24sXG4gICAgICAgIGZpbmFsUmVzdWx0c1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGdhbWUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IGdhbWUucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMnO1xuaW1wb3J0IGZpbmFsUmVzdWx0cyBmcm9tICcuL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9tb2RhbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKG1vZGFsKSB7XG4gICAgbGV0IHJvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAobW9kYWwuc3R5bGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuWydzdHlsZV8nICsgbW9kYWwuc3R5bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnB1c2goY24uaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKCFtb2RhbC5pc09wZW4pIHtcbiAgICAgICAgcm9vdC5wdXNoKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobW9kYWwpIHtcbiAgICBsZXQgY29udGVudEhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAobW9kYWwubmFtZSkge1xuICAgICAgICBjYXNlICdnYW1lLWZvcm0nOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBnYW1lRm9ybShtb2RhbC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMobW9kYWwuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBwcmVwYXJlQ04obW9kYWwpLFxuICAgICAgICBjb250ZW50SFRNTFxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9jZWxsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jZWxsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNMZWZ0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19sZWZ0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNSaWdodCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfcmlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1RvcCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfdG9wKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNCb3R0b20pIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2JvdHRvbSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzU2NvcmVzKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19zY29yZXMpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2N1cnJlbnQpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgY246IHByZXBhcmVDTihjZWxsKVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4vY2VsbC9jZWxsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3Jvdy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNDdXJyZW50KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19jdXJyZW50KTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogcHJlcGFyZUNOKHJvdylcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4vcm93L3Jvdy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi90YWJsZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFibGUuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93c0hUTUw6IHRhYmxlLnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc1xuICoqLyIsImNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICB2YWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICBpZiAoSFRNTC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZXhjZXB0IGlPUyA3IFNhZmFyaSwgSUUgOC85LCBBbmRyaW9kIEJyb3dzZXIgNC4xLzQzXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhIVE1MLCAndGV4dC9odG1sJykuZG9jdW1lbnRFbGVtZW50O1xuICAgIGxldCBoZWFkID0gZG9jLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IGJvZHkgPSBkb2MuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGlmIChub2RlID0gaGVhZC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlID0gYm9keS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgdk5vZGUgPSB7XG4gICAgICAgIHR5cGU6IG5vZGUubm9kZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgdk5vZGUuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW5zID0gW107XG4gICAgICAgIHZOb2RlLmF0dHJzID0ge307XG4gICAgICAgIHZOb2RlLnRhZyA9IG5vZGUudGFnTmFtZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW5zLnB1c2goY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzTmFtZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZOb2RlLmF0dHJzW25hbWVdID0gbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2Tm9kZTtcbn1cblxuZnVuY3Rpb24gam9pbkF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGxldCBhdHRyID0gYXR0cnNba2V5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGtleSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHthdHRyfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCA9ICcnKSB7XG4gICAgbGV0IGF0dHJzID0gam9pbkF0dHJzKHZOb2RlLmF0dHJzKTtcblxuICAgIHN3aXRjaCh2Tm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIGAke2lubmVySFRNTH1gO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gYDwke3ZOb2RlLnRhZ30gJHthdHRyc30+JHtpbm5lckhUTUx9PC8ke3ZOb2RlLnRhZ30+YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwodk5vZGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodk5vZGUudHlwZSAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lckhUTUwgKz0gcmVuZGVySFRNTCh2Tm9kZS5jaGlsZHJlbnNbaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJIVE1MID0gdk5vZGUuY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MKTtcbn1cblxuZXhwb3J0IGxldCBkaWZmID0gZnVuY3Rpb24gKHZOb2RlMSwgdk5vZGUyKSB7XG4gICAgaWYgKHZOb2RlMSAmJiAhdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdk5vZGUxICYmIHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50YWcgIT09IHZOb2RlMi50YWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKHZOb2RlMS5jb250ZW50ICE9PSB2Tm9kZTIuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJzID0gW107XG4gICAgICAgIGxldCBwYXRjaCA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMSA9IHZOb2RlMS5hdHRyc1trZXldO1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMi5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxVmFsID0gYXR0cjEuam9pbignICcpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyMVZhbCAhPT0gYXR0cjJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMS5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjIpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2Tm9kZTEuY2hpbGRyZW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYXR0cnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIG9wKSB7XG4gICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRVBMQUNFX05PREUnOlxuICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBjcmVhdGVFbGVtZW50KG9wLnZOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0ck9wcyhub2RlLCBvcHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3BzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcCA9IG9wc1tpXTtcbiAgICAgICAgbGV0IG5hbWUgPSBvcC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNQcm9wID0gcHJvcE5hbWVzW25hbWVdO1xuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtuYW1lXSA9IG9wLnZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBvcC52YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbbmFtZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4uY2xlYXJmaXg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDYyLCA4MCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTNweCAxNXB4IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHNDQUFzQztDQUN6Qzs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7Q0FDN0JcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxufVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcXG4gICAgY29sb3I6IHJnYig0NCwgNjIsIDgwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHggMTFweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC43Nyk7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vc3JjL2Nzcy9tYWluLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBfX3Jvb3RfX18zTm5FSCB7XFxufVxcbi5hcHBfX2ltYWdlX19fd0puWE4ge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fd3BfX18yNkdmUyB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwX19hdXRob3JfX18yOFRYdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxufVxcblxcblxcbi5hcHBfX2F1dGhvcl9fdG9wX19fM0cxSHQgeyB9XFxuXFxuLmFwcF9fYXV0aG9yX19ib3R0b21fX18yU0dIdCB7IH1cXG5cXG4uYXBwX19idXR0b25fX18zZVhDTSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXG59XFxuXFxuLmFwcF9fYnV0dG9uX19fM2VYQ006aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggIzIyNjc5MztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fc2hha2VfX19RRlNOTztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcXG59XFxuXFxuLmFwcF9fd29ya3NwYWNlX19fbXhhbFYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERBM0REO1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzIyNjc5MztcXG59XFxuXFxuLmFwcF9fcm9sbGJhbGxfX2FuaW1hdGlvbl9fX2JOOW04IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC0xNSU7XFxuICAgIGxlZnQ6IC0xNSU7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzU0MDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBfX3JvbGxCYWxsX19fMlN4V3I7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmFwcF9fcm9sbGJhbGxfX3RleHRfX19FNUNTZiB7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fcm9sbEJhbGxUZXh0X19fMU94bEw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzNDQ5NWU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwX19yb2xsQmFsbF9fXzJTeFdyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBfX3JvbGxCYWxsVGV4dF9fXzFPeGxMIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztDQUNkOzs7QUFHRCw2QkFBZ0I7O0FBRWhCLGdDQUFtQjs7QUFFbkI7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLG1DQUFzQjtJQUN0Qix5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixzQ0FBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwwQ0FBNkI7SUFDN0IsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0NBQzdCOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCOztFQUVEO0lBQ0UsV0FBVztJQUNYLCtCQUErQjtHQUNoQztDQUNGOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCOztFQUVEO0lBQ0Usa0NBQWtDO0dBQ25DOztFQUVEO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3Qjs7RUFFRDtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCO0NBQ0ZcIixcImZpbGVcIjpcImFwcC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbn1cXG4uaW1hZ2Uge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5idXR0b25fX3dwIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC01MHB4O1xcbn1cXG5cXG5cXG4uYXV0aG9yX190b3AgeyB9XFxuXFxuLmF1dGhvcl9fYm90dG9tIHsgfVxcblxcbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDk0MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggIzIyNjc5MztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjkpO1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzREQTNERDtcXG4gICAgbWFyZ2luLXRvcDogMTUlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICMyMjY3OTM7XFxufVxcblxcbi5yb2xsYmFsbF9fYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC0xNSU7XFxuICAgIGxlZnQ6IC0xNSU7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzU0MDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsQmFsbDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4ucm9sbGJhbGxfX3RleHQge1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsQmFsbFRleHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzNDQ5NWU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgcm9sbEJhbGwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxCYWxsVGV4dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgyLCAyLCAyKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJhcHBfX3Jvb3RfX18zTm5FSFwiLFxuXHRcImltYWdlXCI6IFwiYXBwX19pbWFnZV9fX3dKblhOXCIsXG5cdFwiYnV0dG9uX193cFwiOiBcImFwcF9fYnV0dG9uX193cF9fXzI2R2ZTXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXBwX19hdXRob3JfX18yOFRYdFwiLFxuXHRcImF1dGhvcl9fdG9wXCI6IFwiYXBwX19hdXRob3JfX3RvcF9fXzNHMUh0XCIsXG5cdFwiYXV0aG9yX19ib3R0b21cIjogXCJhcHBfX2F1dGhvcl9fYm90dG9tX19fMlNHSHRcIixcblx0XCJidXR0b25cIjogXCJhcHBfX2J1dHRvbl9fXzNlWENNXCIsXG5cdFwic2hha2VcIjogXCJhcHBfX3NoYWtlX19fUUZTTk9cIixcblx0XCJ3b3Jrc3BhY2VcIjogXCJhcHBfX3dvcmtzcGFjZV9fX214YWxWXCIsXG5cdFwicm9sbGJhbGxfX2FuaW1hdGlvblwiOiBcImFwcF9fcm9sbGJhbGxfX2FuaW1hdGlvbl9fX2JOOW04XCIsXG5cdFwicm9sbEJhbGxcIjogXCJhcHBfX3JvbGxCYWxsX19fMlN4V3JcIixcblx0XCJyb2xsYmFsbF9fdGV4dFwiOiBcImFwcF9fcm9sbGJhbGxfX3RleHRfX19FNUNTZlwiLFxuXHRcInJvbGxCYWxsVGV4dFwiOiBcImFwcF9fcm9sbEJhbGxUZXh0X19fMU94bExcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbmFsLXJlc3VsdHNfX25hbWVfX19NU2l3ZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5maW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmMzljMTI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCXCIsXCJmaWxlXCI6XCJmaW5hbC1yZXN1bHRzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZjM5YzEyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hbWVcIjogXCJmaW5hbC1yZXN1bHRzX19uYW1lX19fTVNpd2RcIixcblx0XCJ3aW5uZXJcIjogXCJmaW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZclwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtX19yb290X19fMVFUek4geyB9XFxuXFxuLmdhbWUtZm9ybV9fbmFtZV9fX0hFUmd5IHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9faW5wdXRfX18xa3BuYyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Yge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Y6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQVM7O0FBRVQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiZ2FtZS1mb3JtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7IH1cXG5cXG4ubmFtZSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4ucm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJnYW1lLWZvcm1fX3Jvb3RfX18xUVR6TlwiLFxuXHRcIm5hbWVcIjogXCJnYW1lLWZvcm1fX25hbWVfX19IRVJneVwiLFxuXHRcImlucHV0XCI6IFwiZ2FtZS1mb3JtX19pbnB1dF9fXzFrcG5jXCIsXG5cdFwicm93XCI6IFwiZ2FtZS1mb3JtX19yb3dfX18yZGxXZlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsX19yb290X19fMm9qNzkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnRfX18zLVR5UCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2luZm9fX18xaWszSiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX29yYW5nZV9fXzJWWE1sIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfYmx1ZV9fXzFvQkNMIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJDQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsV2luZG93O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ibHVlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsV2luZG93IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcIm1vZGFsV2luZG93XCI6IFwibW9kYWxfX21vZGFsV2luZG93X19fMkdoNEVcIixcblx0XCJjbG9zZVwiOiBcIm1vZGFsX19jbG9zZV9fXzFPdHhvXCIsXG5cdFwiY29udGVudFwiOiBcIm1vZGFsX19jb250ZW50X19fMy1UeVBcIixcblx0XCJzdHlsZV9pbmZvXCI6IFwibW9kYWxfX3N0eWxlX2luZm9fX18xaWszSlwiLFxuXHRcInN0eWxlX2dyZWVuXCI6IFwibW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm1cIixcblx0XCJzdHlsZV9vcmFuZ2VcIjogXCJtb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWxcIixcblx0XCJzdHlsZV9yZWRcIjogXCJtb2RhbF9fc3R5bGVfcmVkX19fMUxQZHhcIixcblx0XCJzdHlsZV9ibHVlXCI6IFwibW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsX19yb290X19fc2hFdTcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGxfX2NlbGxfX18xN25pbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2Utb3V0O1xcbn1cXG5cXG4uY2VsbF9fdG9wX19fMkhGb0wge1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLmNlbGxfX2hhbGZfX18ya0cxNyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY2VsbF9fZnVsbF9fXzFCRElaIHsgfVxcblxcbi5jZWxsX19pc19yaWdodF9fXzJhU0pUIC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fX3BXTzAzIC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc19sZWZ0X19fMTBPOGcge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fMmFTSlQsXFxuLmNlbGxfX2lzX2xlZnRfX18xME84ZyB7XFxuICAgIHdpZHRoOiAyMDBweFxcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fM3F6bTYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jZWxsX19pc19zY29yZXNfX19YNUN6QyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyouaXNfY3VycmVudCAuY2VsbCB7Ki9cXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwOyovXFxuICAgIC8qY29sb3I6ICNlNjdlMjI7Ki9cXG4vKn0qL1xcblxcbi8qLmlzX2N1cnJlbnQuaXNfbGVmdCB7Ki9cXG4gICAgLypbPmJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U2N2UyMjs8XSovXFxuICAgIC8qYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xcbi8qfSovXFxuXFxuLyouaXNfY3VycmVudC5pc19yaWdodCB7Ki9cXG4gICAgLypib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xcbi8qfSovXFxuXFxuLmNlbGxfX2lzX3RvcF9fXzNxem02IC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy90YWJsZS9yb3cvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRCx1QkFBUzs7QUFFVDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQsdUJBQXVCO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkIsS0FBSzs7QUFFTCx5QkFBeUI7SUFDckIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztBQUMzQyxLQUFLOztBQUVMLDBCQUEwQjtJQUN0Qix3Q0FBd0M7QUFDNUMsS0FBSzs7QUFFTDtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7Q0FDcEJcIixcImZpbGVcIjpcImNlbGwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1vdXQ7XFxufVxcblxcbi50b3Age1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLmhhbGYge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZ1bGwgeyB9XFxuXFxuLmlzX3JpZ2h0IC5jZWxsIHtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxufVxcblxcbi5pc19ib3R0b20gLmNlbGwge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5pc19sZWZ0IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pc19yaWdodCxcXG4uaXNfbGVmdCB7XFxuICAgIHdpZHRoOiAyMDBweFxcbn1cXG5cXG4uaXNfdG9wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaXNfc2NvcmVzIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4vKi5pc19jdXJyZW50IC5jZWxsIHsqL1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7Ki9cXG4gICAgLypjb2xvcjogI2U2N2UyMjsqL1xcbi8qfSovXFxuXFxuLyouaXNfY3VycmVudC5pc19sZWZ0IHsqL1xcbiAgICAvKls+Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTY3ZTIyOzxdKi9cXG4gICAgLypib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXFxuLyp9Ki9cXG5cXG4vKi5pc19jdXJyZW50LmlzX3JpZ2h0IHsqL1xcbiAgICAvKmJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXFxuLyp9Ki9cXG5cXG4uaXNfdG9wIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImNlbGxfX3Jvb3RfX19zaEV1N1wiLFxuXHRcImNlbGxcIjogXCJjZWxsX19jZWxsX19fMTduaWxcIixcblx0XCJ0b3BcIjogXCJjZWxsX190b3BfX18ySEZvTFwiLFxuXHRcImhhbGZcIjogXCJjZWxsX19oYWxmX19fMmtHMTdcIixcblx0XCJmdWxsXCI6IFwiY2VsbF9fZnVsbF9fXzFCRElaXCIsXG5cdFwiaXNfcmlnaHRcIjogXCJjZWxsX19pc19yaWdodF9fXzJhU0pUXCIsXG5cdFwiaXNfYm90dG9tXCI6IFwiY2VsbF9faXNfYm90dG9tX19fcFdPMDNcIixcblx0XCJpc19sZWZ0XCI6IFwiY2VsbF9faXNfbGVmdF9fXzEwTzhnXCIsXG5cdFwiaXNfdG9wXCI6IFwiY2VsbF9faXNfdG9wX19fM3F6bTZcIixcblx0XCJpc19zY29yZXNcIjogXCJjZWxsX19pc19zY29yZXNfX19YNUN6Q1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvd19fcm9vdF9fXzMtT2xoIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yb3dfX2lzX2hlYWRfX19jVGRQcSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5yb3dfX2lzX2N1cnJlbnRfX18zamhJTCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDM0LCAxMDMsIDE0Nyk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdGFibGUvcm93L3Jvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxnQ0FBZ0M7Q0FDbkNcIixcImZpbGVcIjpcInJvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlzX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uaXNfY3VycmVudCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDM0LCAxMDMsIDE0Nyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcInJvd19fcm9vdF9fXzMtT2xoXCIsXG5cdFwiaXNfaGVhZFwiOiBcInJvd19faXNfaGVhZF9fX2NUZFBxXCIsXG5cdFwiaXNfY3VycmVudFwiOiBcInJvd19faXNfY3VycmVudF9fXzNqaElMXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGVfX3Jvb3RfX18xMnJtRiB7XFxuICAgIHdpZHRoOiA5NTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM5cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztDQUNkXCIsXCJmaWxlXCI6XCJ0YWJsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB3aWR0aDogOTUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zOXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJ0YWJsZV9fcm9vdF9fXzEycm1GXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzFhYmM5Y1wiLFxuXHRcIiMzMWNkNzNcIixcblx0XCIjMzQ5OGRiXCIsXG5cdFwiIzliNTliNlwiLFxuXHRcIiMzNDQ5NWVcIixcblx0XCIjMTZhMDg1XCIsXG5cdFwiIzI3YWU2MFwiLFxuXHRcIiMyYjg0YmZcIixcblx0XCIjOGU0NGFkXCIsXG5cdFwiIzJjM2U1MFwiLFxuXHRcImYxYzQwZlwiLFxuXHRcIiNlNjdlMjJcIixcblx0XCIjZTc0YzNjXCIsXG5cdFwiI2YzOWMxMlwiLFxuXHRcIiNkMzU0MDBcIixcblx0XCIjYzAzOTJiXCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9jb2xvcnMuanNvblxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vY2VsbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uYXV0aG9yX190b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvcl9fYm90dG9tICwnXCI+RmxvcmlhbiBGRUlDSFRJTkdFUjwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLnRhYmxlICwnXCI+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5idXR0b25fX3dwICwnXCI+IDxidXR0b24gY2xhc3M9XCInLCBjbi5idXR0b24gLCdcIiBkYXRhLW1haW49XCJyb2xsXCI+IFJPTEwgQkFMTCE8L2J1dHRvbj4gPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gJyk7IGlmIChyb2xsQmFsbEFuaW1hdGlvbikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb2xsYmFsbF9fYW5pbWF0aW9uICwnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicsIGxhc3RSZXN1bHQuY29sb3IgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLnJvbGxiYWxsX190ZXh0ICwnXCI+ICcsIGxhc3RSZXN1bHQudmFsdWUgLCcgPC9kaXY+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAuanN0XG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnICcsIGNuLndpbm5lciAsJ1wiPicsIGZpbmFsUmVzdWx0c1swXS5uYW1lICwnIC0gJywgZmluYWxSZXN1bHRzWzBdLnNjb3JlcyAsJzwvZGl2PiA8ZGl2PiAnKTsgZmluYWxSZXN1bHRzLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+JywgcGxheWVyLm5hbWUgLCcgLSAnLCBwbGF5ZXIuc2NvcmVzICwnPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8YnV0dG9uIGRhdGEtZmluYWwtcmVzdWx0cz1cIm5ld1wiIGNsYXNzPVwiZm9ybS1idXR0b25cIj5OZXcgZ2FtZTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCdcIj5UaGUgQm93bGluZyBHYW1lPC9kaXY+ICcpOyBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllciwgaW5kZXgpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxpbnB1dCBjbGFzcz1cIicsIGNuLmlucHV0ICwnXCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBpbmRleCAsJ1wiIHZhbHVlPVwiJywgcGxheWVyICwnXCI+IDwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgJyk7IGlmIChwbGF5ZXJzLmxlbmd0aCA8IDUpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxpbnB1dCBjbGFzcz1cIicsIGNuLmlucHV0ICwnXCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBwbGF5ZXJzLmxlbmd0aCAsJ1wiIHZhbHVlPVwiXCI+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGJ1dHRvbiBkYXRhLWdhbWUtZm9ybT1cInBsYXlcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+UGxheTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0XG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBhbmltYXRlZFwiPiA8ZGl2IGRhdGEtbW9kYWw9XCJjbG9zZVwiIGNsYXNzPVwiJywgY24uY2xvc2UgLCdcIj7DlzwvZGl2PiA8ZGl2IGNsYXNzPVwiJywgY24uY29udGVudCAsJ1wiPiAnLCBjb250ZW50SFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmNlbGwgLCdcIj4gJyk7IGlmIChjZWxsLnRleHQpIHsgXG5wLnB1c2goJyAnLCBjZWxsLnRleHQgLCcgJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnRvcCAsJyBjbGVhcmZpeFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGQgLCdcIj5JSTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtbWlkIGNsZWFyZml4XCI+ICcpOyBpZiAoY2VsbFswXSA9PT0gJ1gnKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLmZ1bGwgLCc+XCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzBdICwnPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzFdICwnPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLWJvdFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+JywgY2VsbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==