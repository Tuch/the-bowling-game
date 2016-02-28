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
	
	var _main = __webpack_require__(37);
	
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

	var _app3 = __webpack_require__(38);

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

	var _finalResults3 = __webpack_require__(39);

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

	var _gameForm3 = __webpack_require__(40);

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
	
	var _modal3 = __webpack_require__(41);
	
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
	
	var _cell3 = __webpack_require__(42);
	
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
	
	var _row3 = __webpack_require__(43);
	
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

	var _table3 = __webpack_require__(44);

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
	exports.push([module.id, ".app__root___3NnEH {\n    padding-top: 500px;\n}\n\n.app__image___wJnXN {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___26GfS {\n    position:relative;\n}\n\n.app__author___28TXt {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.app__author__top___3G1Ht { }\n\n.app__author__bottom___2SGHt { }\n\n.app__button___3eXCM {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background-color: #e67e22;\n}\n\n.app__button___3eXCM:hover {\n    background-color: rgb(237, 157, 87);\n}\n\n.app__workspace___mxalV {\n    background-color: rgba(77, 163, 221, 0.47);\n    position: relative;\n    box-shadow: 0 5px #8098A7;\n}\n\n.app__rollball__animation___bN9m8 {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: app__rollBall___2SxWr;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.app__rollball__text___E5CSf {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: app__rollBallText___1OxlL;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes app__rollBall___2SxWr {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes app__rollBallText___1OxlL {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n", "", {"version":3,"sources":["/./src/views/app.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;CACtB;;AAED;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;;AAGD,6BAAgB;;AAEhB,gCAAmB;;AAEnB;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,0BAA0B;CAC7B;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,2CAA2C;IAC3C,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,sCAAyB;IACzB,yBAAyB;IACzB,0BAA0B;CAC7B;;AAED;IACI,OAAO;IACP,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,0CAA6B;IAC7B,4CAA4C;IAC5C,uBAAuB;IACvB,6BAA6B;IAC7B,0BAA0B;CAC7B;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,+BAA+B;GAChC;CACF;;AAED;EACE;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF","file":"app.css","sourcesContent":[".root {\n    padding-top: 500px;\n}\n\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.author__top { }\n\n.author__bottom { }\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 940px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background-color: #e67e22;\n}\n\n.button:hover {\n    background-color: rgb(237, 157, 87);\n}\n\n.workspace {\n    background-color: rgba(77, 163, 221, 0.47);\n    position: relative;\n    box-shadow: 0 5px #8098A7;\n}\n\n.rollball__animation {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    animation-name: rollBall;\n    animation-duration: 1.2s;\n    animation-fill-mode: both;\n}\n\n.rollball__text {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    animation-name: rollBallText;\n    background-color: rgba(255, 255, 255, 0.16);\n    animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    animation-fill-mode: both;\n}\n\n@keyframes rollBall {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollBallText {\n  0% {\n    opacity: 0;\n    transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "app__root___3NnEH",
		"image": "app__image___wJnXN",
		"button__wp": "app__button__wp___26GfS",
		"author": "app__author___28TXt",
		"author__top": "app__author__top___3G1Ht",
		"author__bottom": "app__author__bottom___2SGHt",
		"button": "app__button___3eXCM",
		"workspace": "app__workspace___mxalV",
		"rollball__animation": "app__rollball__animation___bN9m8",
		"rollBall": "app__rollBall___2SxWr",
		"rollball__text": "app__rollball__text___E5CSf",
		"rollBallText": "app__rollBallText___1OxlL"
	};

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell__root___shEu7 {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__cell___17nil {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n    transition: all 3s ease-out;\n}\n\n.cell__top___2HFoL {\n    color: #fff;\n}\n\n.cell__half___2kG17 {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___1BDIZ { }\n\n.cell__is_right___2aSJT .cell__cell___17nil {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___pWO03 .cell__cell___17nil {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___10O8g {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.cell__is_right___2aSJT,\n.cell__is_left___10O8g {\n    width: 200px\n}\n\n.cell__is_top___3qzm6 {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.cell__is_scores___X5CzC {\n    font-size: 12px;\n}\n\n.cell__is_top___3qzm6 .cell__cell___17nil {\n    background-color: transparent;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/./src/views/table/row/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;IAC1B,4BAA4B;CAC/B;;AAED;IACI,YAAY;CACf;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS;;AAET;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,0BAA0B;IAC1B,wBAAwB;IACxB,mBAAmB;CACtB;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,8BAA8B;IAC9B,iBAAiB;CACpB","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n    transition: all 3s ease-out;\n}\n\n.top {\n    color: #fff;\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.is_right,\n.is_left {\n    width: 200px\n}\n\n.is_top {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row__root___3-Olh {\n    border: 5px solid transparent;\n}\n\n.row__is_head___cTdPq {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.row__is_current___3jhIL {\n    border-color: rgba(236, 240, 241, 0.46);\n}\n", "", {"version":3,"sources":["/./src/views/table/row/row.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;CACjC;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iCAAiC;CACpC;;AAED;IACI,wCAAwC;CAC3C","file":"row.css","sourcesContent":[".root {\n    border: 5px solid transparent;\n}\n\n.is_head {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.is_current {\n    border-color: rgba(236, 240, 241, 0.46);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "row__root___3-Olh",
		"is_head": "row__is_head___cTdPq",
		"is_current": "row__is_current___3jhIL"
	};

/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2fb71a8d3fa16dd91d9da4acab7170a1.css";

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
/* 30 */
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
	var content = __webpack_require__(19);
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
	var content = __webpack_require__(20);
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
/* 34 */
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
	var content = __webpack_require__(23);
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
	var content = __webpack_require__(24);
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
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some reference to a css file to the DOM by adding a <link> tag
	var update = __webpack_require__(29)(
		__webpack_require__(25)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./main.css", function() {
			update(require("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./main.css"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.workspace ,'"> <div class="', cn.author ,'"> <div class="', cn.author__top ,'">by Alex AFONIN for</div> <div class="', cn.author__bottom ,'">Florian FEICHTINGER</div> </div> <div class="', cn.table ,'"> ', tableHTML ,' </div> </div> <div class="', cn.button__wp ,'"> <button class="', cn.button ,'" data-main="roll"> ROLL BALL!</button> </div> <div> ', modalHTML ,' </div> '); if (rollBallAnimation) { 
	p.push(' <div class="', cn.rollball__animation ,'" style="background-color:', lastResult.color ,'"> <div class="', cn.rollball__text ,'"> ', lastResult.value ,' </div> </div> '); } 
	p.push(' </div> ');}return p.join('');
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 40 */
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
/* 41 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2RiM2UwZjNkNmViNGRlOTVjMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2lnbi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlydHVhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS9yb3cvcm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvbG9ycy5qc29uIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlVXJsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAuY3NzP2JjMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3M/YWRiYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3M/ZmZiYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzPzM5MDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzP2I4M2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuY3NzP2Q1MzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcz8yZjFjIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/ZWM0NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7S0FRQTs7Ozs7Ozs7S0FFTjtBQUNGLGNBREUsR0FDRixDQUFhLEtBQWIsRUFBb0I7K0JBRGxCLEtBQ2tCOztBQUNoQixjQUFLLFdBQUwsR0FDSyxRQURMLENBQ2MsS0FEZCxFQUVLLGFBRkwsR0FHSyxZQUhMLEdBRGdCO01BQXBCOztrQkFERTs7cUNBUVc7QUFDVCxvQkFBTztBQUNILDBCQUFTLENBQUUsTUFBRixFQUFVLFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0MsZUFBaEMsQ0FBVDtBQUNBLDZCQUFZLENBQUUsV0FBRixDQUFaO2NBRkosQ0FEUzs7Ozt3Q0FPRztBQUNaLHlDQUFhLElBQWIsRUFBbUIsS0FBSyxTQUFMLEVBQW5CLEVBRFk7O0FBR1osb0JBQU8sSUFBUCxDQUhZOzs7O3VDQU1EO0FBQ1gsa0JBQUssT0FBTCxHQUFlLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFmLENBRFc7O0FBR1gsb0JBQU8sSUFBUCxDQUhXOzs7O3lD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cEIsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHdKQUF3SixrRDtBQUNyTyxzRkFBcUYsRUFBRSxFO0FBQ3ZGLG1HQUFrRztBQUNsRyxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUseUZBQXlGLDJDO0FBQ3RLLG1KQUFrSixFQUFFLEU7QUFDcEosYUFBWSwwQjtBQUNaLGdKQUErSSxFO0FBQy9JLHVIQUFzSDtBQUN0SCxFOzs7Ozs7QUNQQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsd0tBQXdLO0FBQ3JQLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSxvRUFBb0UsaUI7QUFDakosNkJBQTRCLEVBQUUsTztBQUM5QixvTEFBbUwsdUI7QUFDbkwsaURBQWdELEVBQUUsTztBQUNsRCxnSUFBK0gsRTtBQUMvSCxnR0FBK0YsRTtBQUMvRiw0QkFBMkI7QUFDM0IsRTs7Ozs7O0FDVEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHlFQUF5RTtBQUN0SixFOzs7Ozs7QUNIQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsOERBQThEO0FBQzNJLEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZGIzZTBmM2Q2ZWI0ZGU5NWMyZFxuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuaW1wb3J0IGNuIGZyb20gJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAqIGFzIHZkb20gZnJvbSAnLi92aXJ0dWFsLWRvbS5qcyc7XG5pbXBvcnQgYXNzaWduRXZlbnRzIGZyb20gJy4vYXNzaWduLWV2ZW50cy5qcyc7XG5cbi8vIHJlYWN0IHN0eWxlOlxuaW1wb3J0IGFwcCBmcm9tICcuL3ZpZXdzL2FwcC5qcyc7XG5cbi8vIHJlZHV4IHN0eWxlOlxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9yZWR1Y2Vycy9hY3Rpb25zLmpzJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0QXBwTm9kZSgpXG4gICAgICAgICAgICAuc2V0U3RhdGUoc3RhdGUpXG4gICAgICAgICAgICAuaW5pdEdhbWVUaW1lcigpXG4gICAgICAgICAgICAuYXNzaWduRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0RXZlbnRzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjbGljayc6IFsgJ21haW4nLCAnZ2FtZS1mb3JtJywgJ21vZGFsJywgJ2ZpbmFsLXJlc3VsdHMnIF0sXG4gICAgICAgICAgICAnZm9jdXNvdXQnOiBbICdnYW1lLWZvcm0nIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3NpZ25FdmVudHMgKCkge1xuICAgICAgICBhc3NpZ25FdmVudHModGhpcywgdGhpcy5nZXRFdmVudHMoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEFwcE5vZGUgKCkge1xuICAgICAgICB0aGlzLmFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEdhbWVUaW1lciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy50aWNrVGltZXIoKSk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0Um9sbEJhbGxBbmltYXRpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgJHJvbGxCYWxsQW5pbWF0aW9uOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgJHJvbGxCYWxsQW5pbWF0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sIDEyMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHN0YXRlLCBub1JlbmRlcikge1xuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlIHx8IHt9LCBzdGF0ZSk7XG5cbiAgICAgICAgIW5vUmVuZGVyICYmIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVkdWNlQWN0aW9uIChhY3Rpb24sIG5vUmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pLCBub1JlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IEhUTUwgPSBhcHAodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBsZXQgdk5vZGUgPSB2ZG9tLnZOb2RlRnJvbUhUTUwoSFRNTCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZOb2RlICYmIHRoaXMubm9kZSkge1xuICAgICAgICAgICAgICAgIHZkb20uYXBwbHlQYXRjaCh0aGlzLm5vZGUsIHZkb20uZGlmZih0aGlzLnZOb2RlLCB2Tm9kZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSB2ZG9tLmNyZWF0ZUVsZW1lbnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwTm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy52Tm9kZSA9IHZOb2RlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtSW5wdXRGb2N1c291dCAoZSkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnVwZGF0ZVBsYXllck5hbWUoe1xuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSxcbiAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgb25GaW5hbFJlc3VsdHNOZXdDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMubmV3R2FtZSgpKTtcbiAgICB9XG5cbiAgICBvbk1haW5Sb2xsQ2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5pc0FuaW1hdGlvbkluUHJvZ3Jlc3MoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy50aHJvd0JhbGwoKSwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdGFydFJvbGxCYWxsQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZ2FtZS5pblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMuZW5kR2FtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybVBsYXlDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMucGxheUdhbWUoKSk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLmNsb3NlTW9kYWwoKSk7XG4gICAgfVxuXG4gICAgaXNBbmltYXRpb25JblByb2dyZXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuJHJvbGxCYWxsQW5pbWF0aW9uO1xuICAgIH1cbn1cblxubmV3IEFwcChyZWR1Y2VyKCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzdW1BcnJheSAoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2MgKyBwYXJzZUludCh2YWwgfHwgMCwgMTApO1xuICAgIH0sIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZE51bSAobWF4KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kQXJyKGFycikge1xuICAgIHJldHVybiBhcnJbcmFuZE51bShhcnIubGVuZ3RoIC0gMSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kIChkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwge307XG5cbiAgICBmb3IgKGxldCBpID0gMSwgaUxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBqTGVuZ3RoID0ga2V5cy5sZW5ndGg7IGogPCBqTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgbGV0IHR5cGVPZlZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtrZXldKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVPZlZhbHVlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB0eXBlT2ZWYWx1ZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZHN0W2tleV0gfHwgKG9ialtrZXldIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGV4dGVuZChkc3Rba2V5XSwgb2JqW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRzdDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2hlbHBlcnMuanNcbiAqKi8iLCJleHBvcnQgbGV0IFRJQ0tfVElNRVIgPSAnVElDS19USU1FUic7XG5leHBvcnQgbGV0IFRIUk9XX0JBTEwgPSAnVEhST1dfQkFMTCc7XG5leHBvcnQgbGV0IENMT1NFX01PREFMID0gJ0NMT1NFX01PREFMJztcbmV4cG9ydCBsZXQgUExBWV9HQU1FID0gJ1BMQVlfR0FNRSc7XG5leHBvcnQgbGV0IE5FV19HQU1FID0gJ05FV19HQU1FJztcbmV4cG9ydCBsZXQgRU5EX0dBTUUgPSAnRU5EX0dBTUUnO1xuZXhwb3J0IGxldCBVUERBVEVfUExBWUVSX05BTUUgPSAnVVBEQVRFX1BMQVlFUl9OQU1FJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL3R5cGVzLmpzXG4gKiovIiwiZnVuY3Rpb24gc25ha2VUb0NhbWVsIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhcXC1cXHcpL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIgKGNvbnRleHQsIGV2ZW50c0hhc2gpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gZXZlbnRzSGFzaCkge1xuICAgICAgICAgICAgbGV0IGhhc2ggPSBldmVudHNIYXNoW2F0dHJOYW1lXTtcbiAgICAgICAgICAgIGxldCBhdHRyID0gZS50YXJnZXQuYXR0cmlidXRlc1thdHRyTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyTmFtZSA9IGhhc2gubGlzdGVuZXJOYW1lc1thY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJOYW1lID0gaGFzaC5saXN0ZW5lck5hbWVzW2FjdGlvbl0gPSBzbmFrZVRvQ2FtZWwoYG9uLSR7aGFzaC5jb21wb25lbnR9LSR7YWN0aW9ufS0ke2hhc2guZXZlbnROYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0W2xpc3RlbmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFtsaXN0ZW5lck5hbWVdLmNhbGwoY29udGV4dCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25FdmVudHMgKGNvbnRleHQsIGV2ZW50cykge1xuICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGxldCBldmVudHNIYXNoID0gZXZlbnRzW2V2ZW50TmFtZV0ucmVkdWNlKChhY2MsIGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgYWNjW2BkYXRhLSR7Y29tcG9uZW50fWBdID0geyBjb21wb25lbnQsIGV2ZW50TmFtZSwgbGlzdGVuZXJOYW1lczoge30gfTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjcmVhdGVFdmVudExpc3RlbmVyKGNvbnRleHQsIGV2ZW50c0hhc2gpKTtcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Fzc2lnbi1ldmVudHMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGxldCB1cGRhdGVQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUExBWUVSX05BTUUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCB0aHJvd0JhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVEhST1dfQkFMTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHBsYXlHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlBMQVlfR0FNRVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IG5ld0dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX0dBTUVcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBlbmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkVORF9HQU1FXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtb2RhbFJlZHVjZXJDcmVhdGVyIGZyb20gJy4vbW9kYWxSZWR1Y2VyQ3JlYXRlcic7XG5pbXBvcnQgZ2FtZVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVJlZHVjZXJDcmVhdGVyJztcblxubGV0IG1vZGFsUmVkdWNlciA9IG1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVSZWR1Y2VyID0gZ2FtZVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IGZyYW1lLnRpdGxlLFxuICAgICAgICAgICAgaXNSaWdodDogaW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZSwgaXNUb3A6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgcEluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGZJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbcEluZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsLFxuICAgICAgICAgICAgICAgIGlzUmlnaHQ6IGZJbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzU2NvcmVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0N1cnJlbnQ6IHBJbmRleCA9PT0gc3RhdGUuY3VycmVudFBsYXllcixcbiAgICAgICAgICAgIGNvbHNcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJvd3MucHVzaCguLi5wUm93cyk7XG5cbiAgICByZXR1cm4geyByb3dzIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pIHtcbiAgICBzdGF0ZS5nYW1lID0gZ2FtZVJlZHVjZXIoc3RhdGUuZ2FtZSwgYWN0aW9uKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0YXRlLnRhYmxlID0gY3JlYXRlVGFibGUoc3RhdGUuZ2FtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlID0gbW9kYWxSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qc1xuICoqLyIsIi8qICoqKlxuKiBUSElTIFJFRFVDRVIgSVMgUkVBRFkgRk9SIFNIQVJJTkcgQkwgVE8gT1RIRVIgUExBVEZPUk0uIChXSVRIIFJFQUNUIE5BVElWRSBGT1IgRVhBTVBMRSlcbioqKiAqL1xuXG5pbXBvcnQgbmFtZXMgZnJvbSAnLi9uYW1lcy5qc29uJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMuanNvbic7XG5pbXBvcnQgeyBzdW1BcnJheSwgcmFuZE51bSwgcmFuZEFyciB9IGZyb20gJ2hlbHBlcnMnO1xuXG5jb25zdCBGUkFNRVNfTEVOR1RIID0gMTA7XG5cbmZ1bmN0aW9uIHJhbmdlIChsZW5ndGgpIHtcbiAgICByZXR1cm4gQXJyYXkobGVuZ3RoKS5qb2luKCcgJykuc3BsaXQoJyAnKS5tYXAoKHYsIGkpID0+IGkpO1xufVxuXG5mdW5jdGlvbiBwYWQgKHZhbHVlLCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI7XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjYWxjRGlmZlRpbWUgKHN0YXRlKSB7XG4gICAgbGV0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBzdGF0ZS5zdGFydFRpbWUpIC8gMTAwMCksXG4gICAgICAgIHJpZ2h0U2lkZSA9IHRvdGFsU2Vjb25kcyAlIDYwLFxuICAgICAgICBsZWZ0U2lkZSA9ICh0b3RhbFNlY29uZHMgLSByaWdodFNpZGUpIC8gNjA7XG5cbiAgICBzdGF0ZS5kaWZmVGltZSA9IHBhZChsZWZ0U2lkZSwgMikgKyAnOicgKyBwYWQocmlnaHRTaWRlLCAyKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbEJhbGwgKHBpbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gW3JhbmROdW0ocGlucyldO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAocGxheWVycykge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgcGxheWVyczogcGxheWVycyB8fCBbcmFuZEFycihuYW1lcyksIHJhbmRBcnIobmFtZXMpXSxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICBpblByb2dyZXNzOiB0cnVlLFxuICAgICAgICBsYXN0UmVzdWx0OiB7fVxuICAgIH07XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGUucGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0UGxheWVyIChzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS5pblByb2dyZXNzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEZyYW1lID0gc3RhdGUuY3VycmVudEZyYW1lIDwgc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEgPyBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxIDogc3RhdGUuY3VycmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRCb251c0ZyYW1lcyAoc3RhdGUpIHtcbiAgICBsZXQgZnJhbWVzID0gc3RhdGUuZnJhbWVzLnNsaWNlKE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpLCBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxKS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmFtZVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGZyYW1lcy5sZW5ndGgtLTtcblxuICAgIGxldCByID0gMiAtIGN1cnJGcmFtZS5sZW5ndGg7XG4gICAgbGV0IGJvbnVzRnJhbWVzID0gW107XG5cbiAgICB3aGlsZSAociAmJiBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAociA9PT0gMSAmJiBmcmFtZVswXS52YWx1ZSA9PT0gMTApIHx8XG4gICAgICAgICAgICAociA9PT0gMiAmJiAoZnJhbWUudG90YWwgPT09IDEwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib251c0ZyYW1lcy51bnNoaWZ0KGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIgLT0gZnJhbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBib251c0ZyYW1lcztcbn1cblxuZnVuY3Rpb24gaXNMYXN0UGxheWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdEZyYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RnJhbWUgPT09IEZSQU1FU19MRU5HVEggLSAxO1xufVxuXG5mdW5jdGlvbiBvblRpY2tUaW1lciAoc3RhdGUpIHtcbiAgICByZXR1cm4gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gb25UaHJvd0JhbGwgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5pblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBsZXQgZnJhbWUgPSBzdGF0ZS5mcmFtZXNbc3RhdGUuY3VycmVudEZyYW1lXVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICBsZXQgcGlucyA9IEZSQU1FU19MRU5HVEg7XG4gICAgbGV0IHBsYXllck5hbWUgPSBzdGF0ZS5wbGF5ZXJzW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuXG4gICAgaWYgKGZyYW1lWzBdICYmIHBpbnMgIT09IGZyYW1lWzBdLnZhbHVlKSB7XG4gICAgICAgIHBpbnMgLT0gZnJhbWVbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGJvbnVzRnJhbWVzID0gZ2V0Qm9udXNGcmFtZXMoc3RhdGUpO1xuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHJvbGxCYWxsKHBpbnMpLCByb2xsQmFsbChwaW5zKSk7XG5cbiAgICBib251c0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS50b3RhbCArPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSwgc3BlY2lhbDogJycgfTtcblxuICAgIGZyYW1lLnB1c2gocm9sbCk7XG5cbiAgICBsZXQgcm9sbHNTdW0gPSBzdW1BcnJheShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuICAgICAgICAgICAgcm9sbC5zcGVjaWFsID0gJ3N0cmlrZSc7XG5cbiAgICAgICAgICAgIGlmICghaXNMYXN0RnJhbWUoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChmcmFtZS50b3RhbCA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnLyc7XG4gICAgICAgICAgICByb2xsLnNwZWNpYWwgPSAnc3BhcmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdC52YWx1ZSA9IGAke3ZhbHVlfSBwaW5zIWA7XG4gICAgc3RhdGUubGFzdFJlc3VsdC5jb2xvciA9IHJhbmRBcnIoY29sb3JzKTtcblxuICAgIGlmIChyb2xsLnNwZWNpYWwpIHtcbiAgICAgICAgc3RhdGUubGFzdFJlc3VsdC52YWx1ZSArPSBgICR7cm9sbC5zcGVjaWFsLnRvVXBwZXJDYXNlKCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uVXBkYXRlUGxheWVyTmFtZSAoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcbiAgICBzdGF0ZS5wbGF5ZXJzID0gc3RhdGUucGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllcik7XG5cbiAgICBpZiAoIXN0YXRlLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIHN0YXRlLnBsYXllcnMucHVzaChyYW5kQXJyKG5hbWVzKSk7XG4gICAgfVxuXG4gICAgc3RhdGUuZnJhbWVzID0gY3JlYXRlRnJhbWVzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25QbGF5R2FtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0SW5pdGlhbFN0YXRlKHN0YXRlLnBsYXllcnMpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlICh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uUGxheUdhbWUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRJQ0tfVElNRVI6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRpY2tUaW1lcihzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVEhST1dfQkFMTDpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGhyb3dCYWxsKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUExBWUVSX05BTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qc1xuICoqLyIsImltcG9ydCB7IHN1bUFycmF5IH0gZnJvbSAnaGVscGVycyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbmFsUmVzdWx0c0RhdGEgKHN0YXRlKSB7XG4gICAgbGV0IGdhbWUgPSBzdGF0ZS5nYW1lO1xuXG4gICAgcmV0dXJuIGdhbWUucGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcixcbiAgICAgICAgICAgIHNjb3Jlczogc3VtQXJyYXkoZ2FtZS5mcmFtZXMubWFwKChmcmFtZSkgPT4gZnJhbWVbaW5kZXhdLnRvdGFsKSlcbiAgICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLnNjb3JlcyAtIGEuc2NvcmVzO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZShzdGF0ZSwgaXNPcGVuID0gdHJ1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdmaW5hbC1yZXN1bHRzJyxcbiAgICAgICAgc3R5bGU6ICdibHVlJyxcbiAgICAgICAgaXNPcGVuLFxuICAgICAgICBkYXRhOiBjcmVhdGVGaW5hbFJlc3VsdHNEYXRhKHN0YXRlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUZvcm1EYXRhIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5nYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lRm9ybVN0YXRlKHN0YXRlLCBpc09wZW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbixcbiAgICAgICAgZGF0YTogY3JlYXRlR2FtZUZvcm1EYXRhKHN0YXRlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE1vZGFsIChzdGF0ZSkge1xuICAgIHJldHVybiBjcmVhdGVHYW1lRm9ybVN0YXRlKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIHN0YXRlLm1vZGFsID0gc3RhdGUubW9kYWwgfHwgZ2V0SW5pdGlhbE1vZGFsKHN0YXRlKTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkNMT1NFX01PREFMOlxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGFsLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5FTkRfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbCA9IGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5ORVdfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb2RhbCA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qc1xuICoqLyIsImltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsL21vZGFsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICB0YWJsZUhUTUw6IGFwcC50YWJsZSA/IHRhYmxlKGFwcC50YWJsZSkgOiAnJyxcbiAgICAgICAgbW9kYWxIVE1MOiBhcHAubW9kYWwgPyBtb2RhbChhcHAubW9kYWwpIDogJycsXG4gICAgICAgIHJvbGxCYWxsQW5pbWF0aW9uOiBhcHAuJHJvbGxCYWxsQW5pbWF0aW9uLFxuICAgICAgICBsYXN0UmVzdWx0OiBhcHAuZ2FtZS5sYXN0UmVzdWx0LFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZmluYWwtcmVzdWx0cy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZmluYWwtcmVzdWx0cy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmluYWxSZXN1bHRzKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY24sXG4gICAgICAgIGZpbmFsUmVzdWx0c1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGdhbWUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IGdhbWUucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMnO1xuaW1wb3J0IGZpbmFsUmVzdWx0cyBmcm9tICcuL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9tb2RhbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKG1vZGFsKSB7XG4gICAgbGV0IHJvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAobW9kYWwuc3R5bGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuWydzdHlsZV8nICsgbW9kYWwuc3R5bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnB1c2goY24uaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKCFtb2RhbC5pc09wZW4pIHtcbiAgICAgICAgcm9vdC5wdXNoKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobW9kYWwpIHtcbiAgICBsZXQgY29udGVudEhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAobW9kYWwubmFtZSkge1xuICAgICAgICBjYXNlICdnYW1lLWZvcm0nOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBnYW1lRm9ybShtb2RhbC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMobW9kYWwuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBwcmVwYXJlQ04obW9kYWwpLFxuICAgICAgICBjb250ZW50SFRNTFxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9jZWxsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jZWxsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNMZWZ0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19sZWZ0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNSaWdodCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfcmlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1RvcCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfdG9wKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNCb3R0b20pIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2JvdHRvbSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzU2NvcmVzKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19zY29yZXMpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2N1cnJlbnQpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgY246IHByZXBhcmVDTihjZWxsKVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4vY2VsbC9jZWxsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3Jvdy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNDdXJyZW50KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19jdXJyZW50KTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogcHJlcGFyZUNOKHJvdylcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4vcm93L3Jvdy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi90YWJsZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFibGUuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93c0hUTUw6IHRhYmxlLnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc1xuICoqLyIsImNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICB2YWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICBpZiAoSFRNTC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZXhjZXB0IGlPUyA3IFNhZmFyaSwgSUUgOC85LCBBbmRyaW9kIEJyb3dzZXIgNC4xLzQzXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhIVE1MLCAndGV4dC9odG1sJykuZG9jdW1lbnRFbGVtZW50O1xuICAgIGxldCBoZWFkID0gZG9jLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IGJvZHkgPSBkb2MuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGlmIChub2RlID0gaGVhZC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlID0gYm9keS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgdk5vZGUgPSB7XG4gICAgICAgIHR5cGU6IG5vZGUubm9kZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgdk5vZGUuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW5zID0gW107XG4gICAgICAgIHZOb2RlLmF0dHJzID0ge307XG4gICAgICAgIHZOb2RlLnRhZyA9IG5vZGUudGFnTmFtZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW5zLnB1c2goY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzTmFtZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZOb2RlLmF0dHJzW25hbWVdID0gbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2Tm9kZTtcbn1cblxuZnVuY3Rpb24gam9pbkF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGxldCBhdHRyID0gYXR0cnNba2V5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGtleSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHthdHRyfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCA9ICcnKSB7XG4gICAgbGV0IGF0dHJzID0gam9pbkF0dHJzKHZOb2RlLmF0dHJzKTtcblxuICAgIHN3aXRjaCh2Tm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIGAke2lubmVySFRNTH1gO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gYDwke3ZOb2RlLnRhZ30gJHthdHRyc30+JHtpbm5lckhUTUx9PC8ke3ZOb2RlLnRhZ30+YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwodk5vZGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodk5vZGUudHlwZSAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lckhUTUwgKz0gcmVuZGVySFRNTCh2Tm9kZS5jaGlsZHJlbnNbaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJIVE1MID0gdk5vZGUuY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MKTtcbn1cblxuZXhwb3J0IGxldCBkaWZmID0gZnVuY3Rpb24gKHZOb2RlMSwgdk5vZGUyKSB7XG4gICAgaWYgKHZOb2RlMSAmJiAhdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdk5vZGUxICYmIHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50YWcgIT09IHZOb2RlMi50YWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKHZOb2RlMS5jb250ZW50ICE9PSB2Tm9kZTIuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJzID0gW107XG4gICAgICAgIGxldCBwYXRjaCA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMSA9IHZOb2RlMS5hdHRyc1trZXldO1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMi5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxVmFsID0gYXR0cjEuam9pbignICcpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyMVZhbCAhPT0gYXR0cjJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMS5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjIpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2Tm9kZTEuY2hpbGRyZW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYXR0cnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIG9wKSB7XG4gICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRVBMQUNFX05PREUnOlxuICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBjcmVhdGVFbGVtZW50KG9wLnZOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0ck9wcyhub2RlLCBvcHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3BzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcCA9IG9wc1tpXTtcbiAgICAgICAgbGV0IG5hbWUgPSBvcC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNQcm9wID0gcHJvcE5hbWVzW25hbWVdO1xuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtuYW1lXSA9IG9wLnZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBvcC52YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbbmFtZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwX19yb290X19fM05uRUgge1xcbiAgICBwYWRkaW5nLXRvcDogNTAwcHg7XFxufVxcblxcbi5hcHBfX2ltYWdlX19fd0puWE4ge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fd3BfX18yNkdmUyB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwX19hdXRob3JfX18yOFRYdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxufVxcblxcblxcbi5hcHBfX2F1dGhvcl9fdG9wX19fM0cxSHQgeyB9XFxuXFxuLmFwcF9fYXV0aG9yX19ib3R0b21fX18yU0dIdCB7IH1cXG5cXG4uYXBwX19idXR0b25fX18zZVhDTSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXG59XFxuXFxuLmFwcF9fYnV0dG9uX19fM2VYQ006aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAxNTcsIDg3KTtcXG59XFxuXFxuLmFwcF9fd29ya3NwYWNlX19fbXhhbFYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjMsIDIyMSwgMC40Nyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzgwOThBNztcXG59XFxuXFxuLmFwcF9fcm9sbGJhbGxfX2FuaW1hdGlvbl9fX2JOOW04IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC0xNSU7XFxuICAgIGxlZnQ6IC0xNSU7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzU0MDA7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBfX3JvbGxCYWxsX19fMlN4V3I7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmFwcF9fcm9sbGJhbGxfX3RleHRfX19FNUNTZiB7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fcm9sbEJhbGxUZXh0X19fMU94bEw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzNDQ5NWU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwX19yb2xsQmFsbF9fXzJTeFdyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBfX3JvbGxCYWxsVGV4dF9fXzFPeGxMIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7OztBQUdELDZCQUFnQjs7QUFFaEIsZ0NBQW1COztBQUVuQjtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHNDQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksT0FBTztJQUNQLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBDQUE2QjtJQUM3Qiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsK0JBQStCO0dBQ2hDO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7O0VBRUQ7SUFDRSxrQ0FBa0M7R0FDbkM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCOztFQUVEO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3Qjs7RUFFRDtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7R0FDN0I7Q0FDRlwiLFwiZmlsZVwiOlwiYXBwLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHBhZGRpbmctdG9wOiA1MDBweDtcXG59XFxuXFxuLmltYWdlIHtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MnB4O1xcbiAgICBsZWZ0OiAyNjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYnV0dG9uX193cCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYXV0aG9yIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAtNTBweDtcXG59XFxuXFxuXFxuLmF1dGhvcl9fdG9wIHsgfVxcblxcbi5hdXRob3JfX2JvdHRvbSB7IH1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zM3B4O1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMTU3LCA4Nyk7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjMsIDIyMSwgMC40Nyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzgwOThBNztcXG59XFxuXFxuLnJvbGxiYWxsX19hbmltYXRpb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogLTE1JTtcXG4gICAgbGVmdDogLTE1JTtcXG4gICAgd2lkdGg6IDEzMCU7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNTQwMDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxCYWxsO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5yb2xsYmFsbF9fdGV4dCB7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxCYWxsVGV4dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIzM0NDk1ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyByb2xsQmFsbCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm9sbEJhbGxUZXh0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImFwcF9fcm9vdF9fXzNObkVIXCIsXG5cdFwiaW1hZ2VcIjogXCJhcHBfX2ltYWdlX19fd0puWE5cIixcblx0XCJidXR0b25fX3dwXCI6IFwiYXBwX19idXR0b25fX3dwX19fMjZHZlNcIixcblx0XCJhdXRob3JcIjogXCJhcHBfX2F1dGhvcl9fXzI4VFh0XCIsXG5cdFwiYXV0aG9yX190b3BcIjogXCJhcHBfX2F1dGhvcl9fdG9wX19fM0cxSHRcIixcblx0XCJhdXRob3JfX2JvdHRvbVwiOiBcImFwcF9fYXV0aG9yX19ib3R0b21fX18yU0dIdFwiLFxuXHRcImJ1dHRvblwiOiBcImFwcF9fYnV0dG9uX19fM2VYQ01cIixcblx0XCJ3b3Jrc3BhY2VcIjogXCJhcHBfX3dvcmtzcGFjZV9fX214YWxWXCIsXG5cdFwicm9sbGJhbGxfX2FuaW1hdGlvblwiOiBcImFwcF9fcm9sbGJhbGxfX2FuaW1hdGlvbl9fX2JOOW04XCIsXG5cdFwicm9sbEJhbGxcIjogXCJhcHBfX3JvbGxCYWxsX19fMlN4V3JcIixcblx0XCJyb2xsYmFsbF9fdGV4dFwiOiBcImFwcF9fcm9sbGJhbGxfX3RleHRfX19FNUNTZlwiLFxuXHRcInJvbGxCYWxsVGV4dFwiOiBcImFwcF9fcm9sbEJhbGxUZXh0X19fMU94bExcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbmFsLXJlc3VsdHNfX25hbWVfX19NU2l3ZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5maW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmMzljMTI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCXCIsXCJmaWxlXCI6XCJmaW5hbC1yZXN1bHRzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZjM5YzEyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hbWVcIjogXCJmaW5hbC1yZXN1bHRzX19uYW1lX19fTVNpd2RcIixcblx0XCJ3aW5uZXJcIjogXCJmaW5hbC1yZXN1bHRzX193aW5uZXJfX18xWnFZclwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtX19yb290X19fMVFUek4geyB9XFxuXFxuLmdhbWUtZm9ybV9fbmFtZV9fX0hFUmd5IHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9faW5wdXRfX18xa3BuYyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Yge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fMmRsV2Y6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQVM7O0FBRVQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiZ2FtZS1mb3JtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7IH1cXG5cXG4ubmFtZSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4ucm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJnYW1lLWZvcm1fX3Jvb3RfX18xUVR6TlwiLFxuXHRcIm5hbWVcIjogXCJnYW1lLWZvcm1fX25hbWVfX19IRVJneVwiLFxuXHRcImlucHV0XCI6IFwiZ2FtZS1mb3JtX19pbnB1dF9fXzFrcG5jXCIsXG5cdFwicm93XCI6IFwiZ2FtZS1mb3JtX19yb3dfX18yZGxXZlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsX19yb290X19fMm9qNzkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnRfX18zLVR5UCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2luZm9fX18xaWszSiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX29yYW5nZV9fXzJWWE1sIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfYmx1ZV9fXzFvQkNMIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJDQUE0QjtDQUMvQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsV2luZG93O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ibHVlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsV2luZG93IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcIm1vZGFsV2luZG93XCI6IFwibW9kYWxfX21vZGFsV2luZG93X19fMkdoNEVcIixcblx0XCJjbG9zZVwiOiBcIm1vZGFsX19jbG9zZV9fXzFPdHhvXCIsXG5cdFwiY29udGVudFwiOiBcIm1vZGFsX19jb250ZW50X19fMy1UeVBcIixcblx0XCJzdHlsZV9pbmZvXCI6IFwibW9kYWxfX3N0eWxlX2luZm9fX18xaWszSlwiLFxuXHRcInN0eWxlX2dyZWVuXCI6IFwibW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm1cIixcblx0XCJzdHlsZV9vcmFuZ2VcIjogXCJtb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWxcIixcblx0XCJzdHlsZV9yZWRcIjogXCJtb2RhbF9fc3R5bGVfcmVkX19fMUxQZHhcIixcblx0XCJzdHlsZV9ibHVlXCI6IFwibW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsX19yb290X19fc2hFdTcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGxfX2NlbGxfX18xN25pbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2Utb3V0O1xcbn1cXG5cXG4uY2VsbF9fdG9wX19fMkhGb0wge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGxfX2hhbGZfX18ya0cxNyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY2VsbF9fZnVsbF9fXzFCRElaIHsgfVxcblxcbi5jZWxsX19pc19yaWdodF9fXzJhU0pUIC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fX3BXTzAzIC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc19sZWZ0X19fMTBPOGcge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fMmFTSlQsXFxuLmNlbGxfX2lzX2xlZnRfX18xME84ZyB7XFxuICAgIHdpZHRoOiAyMDBweFxcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fM3F6bTYge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwMDA7XFxufVxcblxcbi5jZWxsX19pc19zY29yZXNfX19YNUN6QyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmNlbGxfX2lzX3RvcF9fXzNxem02IC5jZWxsX19jZWxsX19fMTduaWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy90YWJsZS9yb3cvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRCx1QkFBUzs7QUFFVDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtDQUNwQlwiLFwiZmlsZVwiOlwiY2VsbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlLW91dDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGFsZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZnVsbCB7IH1cXG5cXG4uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2JvdHRvbSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2xlZnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX3JpZ2h0LFxcbi5pc19sZWZ0IHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5pc190b3Age1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwMDA7XFxufVxcblxcbi5pc19zY29yZXMge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5pc190b3AgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiY2VsbF9fcm9vdF9fX3NoRXU3XCIsXG5cdFwiY2VsbFwiOiBcImNlbGxfX2NlbGxfX18xN25pbFwiLFxuXHRcInRvcFwiOiBcImNlbGxfX3RvcF9fXzJIRm9MXCIsXG5cdFwiaGFsZlwiOiBcImNlbGxfX2hhbGZfX18ya0cxN1wiLFxuXHRcImZ1bGxcIjogXCJjZWxsX19mdWxsX19fMUJESVpcIixcblx0XCJpc19yaWdodFwiOiBcImNlbGxfX2lzX3JpZ2h0X19fMmFTSlRcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX19wV08wM1wiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fMTBPOGdcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX18zcXptNlwiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fX1g1Q3pDXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucm93X19yb290X19fMy1PbGgge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJvd19faXNfaGVhZF9fX2NUZFBxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLnJvd19faXNfY3VycmVudF9fXzNqaElMIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNDYpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksd0NBQXdDO0NBQzNDXCIsXCJmaWxlXCI6XCJyb3cuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pc19oZWFkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLmlzX2N1cnJlbnQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC40Nik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcInJvd19fcm9vdF9fXzMtT2xoXCIsXG5cdFwiaXNfaGVhZFwiOiBcInJvd19faXNfaGVhZF9fX2NUZFBxXCIsXG5cdFwiaXNfY3VycmVudFwiOiBcInJvd19faXNfY3VycmVudF9fXzNqaElMXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGVfX3Jvb3RfX18xMnJtRiB7XFxuICAgIHdpZHRoOiA5NTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM5cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztDQUNkXCIsXCJmaWxlXCI6XCJ0YWJsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB3aWR0aDogOTUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zOXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJ0YWJsZV9fcm9vdF9fXzEycm1GXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJmYjcxYThkM2ZhMTZkZDkxZDlkYTRhY2FiNzE3MGExLmNzc1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyIS4vfi9leHRyYWN0LWxvYWRlci9saWIvZXh0cmFjdExvYWRlci5qcyEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzFhYmM5Y1wiLFxuXHRcIiMzMWNkNzNcIixcblx0XCIjMzQ5OGRiXCIsXG5cdFwiIzliNTliNlwiLFxuXHRcIiMzNDQ5NWVcIixcblx0XCIjMTZhMDg1XCIsXG5cdFwiIzI3YWU2MFwiLFxuXHRcIiMyYjg0YmZcIixcblx0XCIjOGU0NGFkXCIsXG5cdFwiIzJjM2U1MFwiLFxuXHRcImYxYzQwZlwiLFxuXHRcIiNlNjdlMjJcIixcblx0XCIjZTc0YzNjXCIsXG5cdFwiI2YzOWMxMlwiLFxuXHRcIiNkMzU0MDBcIixcblx0XCIjYzAzOTJiXCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9jb2xvcnMuanNvblxuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWRkU3R5bGVVcmwoY3NzVXJsKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHN0eWxlRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRzdHlsZUVsZW1lbnQuaHJlZiA9IGNzc1VybDtcclxuXHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0aWYobW9kdWxlLmhvdCkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzc1VybCkge1xyXG5cdFx0XHRpZih0eXBlb2YgY3NzVXJsID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50LmhyZWYgPSBjc3NVcmw7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGVhZC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZVVybC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vY2VsbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vY2VsbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvcm93L2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb3cuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vdGFibGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgcmVmZXJlbmNlIHRvIGEgY3NzIGZpbGUgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8bGluaz4gdGFnXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvVHVjaC9Qcm9qZWN0cy90aGUtYm93bGluZy1nYW1lL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVVcmwuanNcIikoXG5cdHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5jc3NcIilcbik7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LWxvYWRlci9saWIvZXh0cmFjdExvYWRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHVwZGF0ZShyZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9maWxlLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LWxvYWRlci9saWIvZXh0cmFjdExvYWRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpKTtcblx0fSk7XG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uYXV0aG9yX190b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvcl9fYm90dG9tICwnXCI+RmxvcmlhbiBGRUlDSFRJTkdFUjwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLnRhYmxlICwnXCI+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5idXR0b25fX3dwICwnXCI+IDxidXR0b24gY2xhc3M9XCInLCBjbi5idXR0b24gLCdcIiBkYXRhLW1haW49XCJyb2xsXCI+IFJPTEwgQkFMTCE8L2J1dHRvbj4gPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gJyk7IGlmIChyb2xsQmFsbEFuaW1hdGlvbikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb2xsYmFsbF9fYW5pbWF0aW9uICwnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicsIGxhc3RSZXN1bHQuY29sb3IgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLnJvbGxiYWxsX190ZXh0ICwnXCI+ICcsIGxhc3RSZXN1bHQudmFsdWUgLCcgPC9kaXY+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAuanN0XG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnICcsIGNuLndpbm5lciAsJ1wiPicsIGZpbmFsUmVzdWx0c1swXS5uYW1lICwnIC0gJywgZmluYWxSZXN1bHRzWzBdLnNjb3JlcyAsJzwvZGl2PiA8ZGl2PiAnKTsgZmluYWxSZXN1bHRzLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+JywgcGxheWVyLm5hbWUgLCcgLSAnLCBwbGF5ZXIuc2NvcmVzICwnPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8YnV0dG9uIGRhdGEtZmluYWwtcmVzdWx0cz1cIm5ld1wiIGNsYXNzPVwiZm9ybS1idXR0b25cIj5OZXcgZ2FtZTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCdcIj5UaGUgQm93bGluZyBHYW1lPC9kaXY+ICcpOyBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllciwgaW5kZXgpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxpbnB1dCBjbGFzcz1cIicsIGNuLmlucHV0ICwnXCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBpbmRleCAsJ1wiIHZhbHVlPVwiJywgcGxheWVyICwnXCI+IDwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgJyk7IGlmIChwbGF5ZXJzLmxlbmd0aCA8IDUpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxpbnB1dCBjbGFzcz1cIicsIGNuLmlucHV0ICwnXCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBwbGF5ZXJzLmxlbmd0aCAsJ1wiIHZhbHVlPVwiXCI+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGJ1dHRvbiBkYXRhLWdhbWUtZm9ybT1cInBsYXlcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+UGxheTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0XG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBhbmltYXRlZFwiPiA8ZGl2IGRhdGEtbW9kYWw9XCJjbG9zZVwiIGNsYXNzPVwiJywgY24uY2xvc2UgLCdcIj7DlzwvZGl2PiA8ZGl2IGNsYXNzPVwiJywgY24uY29udGVudCAsJ1wiPiAnLCBjb250ZW50SFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmNlbGwgLCdcIj4gJyk7IGlmIChjZWxsLnRleHQpIHsgXG5wLnB1c2goJyAnLCBjZWxsLnRleHQgLCcgJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnRvcCAsJyBjbGVhcmZpeFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGQgLCdcIj5JSTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtbWlkIGNsZWFyZml4XCI+ICcpOyBpZiAoY2VsbFswXSA9PT0gJ1gnKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLmZ1bGwgLCc+XCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzBdICwnPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzFdICwnPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLWJvdFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+JywgY2VsbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==