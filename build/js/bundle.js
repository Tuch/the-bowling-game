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
	
	            if (this.state.isSpeedMode) {
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
	        key: 'onAuthorSpeedmodeClick',
	        value: function onAuthorSpeedmodeClick() {
	            this.reduceAction(actions.speedMode());
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
	var SPEED_MODE = exports.SPEED_MODE = 'SPEED_MODE';

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
	exports.speedMode = exports.tickTimer = exports.closeModal = exports.endGame = exports.newGame = exports.playGame = exports.throwBall = exports.updatePlayerName = undefined;
	
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
	
	var speedMode = exports.speedMode = function speedMode() {
	    return {
	        type: types.SPEED_MODE
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
	        case types.SPEED_MODE:
	            state.isSpeedMode = !state.isSpeedMode;
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
	    return (0, _author4.default)({
	        imgSrc: _speedmodeIcon2.default,
	        cn: prepareCN(state)
	    });
	};
	
	var _author = __webpack_require__(44);
	
	var _author2 = _interopRequireDefault(_author);
	
	var _author3 = __webpack_require__(56);
	
	var _author4 = _interopRequireDefault(_author3);
	
	var _speedmodeIcon = __webpack_require__(34);
	
	var _speedmodeIcon2 = _interopRequireDefault(_speedmodeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(state) {
	    var root = _author2.default._root = [_author2.default.root];
	
	    if (state.isSpeedMode) {
	        root.push(_author2.default.id_speedmode);
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
	        tableHTML: state.table ? (0, _table2.default)(state.table) : '',
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
	
	    var node = document.createElement('div');
	    node.innerHTML = HTML;
	    node = node.childNodes[0];
	    node.parentNode.removeChild(node);
	
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
	exports.push([module.id, ".modal__root___2oj79 {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    -webkit-animation-name: modal__modalWindow___2Gh4E;\n            animation-name: modal__modalWindow___2Gh4E;\n}\n\n.modal__close___1Otxo {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    display: none;\n}\n\n.modal__close___1Otxo:hover {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.modal__content___3-TyP {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.modal__style_info___1ik3J {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.modal__style_green___1jAZm {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.modal__style_orange___2VXMl {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.modal__style_red___1LPdx {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.modal__style_blue___1oBCL {\n    background: rgba(52, 152, 219, 0.95);\n}\n\n@-webkit-keyframes modal__modalWindow___2Gh4E {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes modal__modalWindow___2Gh4E {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/views/modal/modal.css"],"names":[],"mappings":"AAAA;IACI,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mDAAoC;YAC5B,2CAA4B;CACvC;;AAED;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,iCAAiC;IACjC,yBAAyB;IACzB,6BAA6B;YACrB,qBAAqB;IAC7B,cAAc;CACjB;;AAED;IACI,iCAAiC;YACzB,yBAAyB;CACpC;;AAED;IACI,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,qCAAqC;CACxC;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;CACF;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;CACF","file":"modal.css","sourcesContent":[".root {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    -webkit-animation-name: modalWindow;\n            animation-name: modalWindow;\n}\n\n.close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n    display: none;\n}\n\n.close:hover {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.content {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.style_info {\n    background: rgba(236, 240, 241, 0.95);\n}\n\n.style_green {\n    background: rgba(39, 174, 96, 0.95);\n}\n\n.style_orange {\n    background: rgba(243, 156, 18, 0.95);\n}\n\n.style_red {\n    background: rgba(231, 76, 60, 0.95);\n}\n\n.style_blue {\n    background: rgba(52, 152, 219, 0.95);\n}\n\n@-webkit-keyframes modalWindow {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes modalWindow {\n  0% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n"],"sourceRoot":"webpack://"}]);
	
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
	exports.push([module.id, ".rollball-animation__root___34019 {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    -webkit-animation-name: rollball-animation__rollBall___182h7;\n            animation-name: rollball-animation__rollBall___182h7;\n    -webkit-animation-duration: 1.2s;\n            animation-duration: 1.2s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.rollball-animation__text___2ORa0 {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    -webkit-animation-name: rollball-animation__rollBallText___3ZO-P;\n            animation-name: rollball-animation__rollBallText___3ZO-P;\n    background-color: rgba(255, 255, 255, 0.16);\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n@-webkit-keyframes rollball-animation__rollBall___182h7 {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.8, .8, .8);\n            transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollball-animation__rollBall___182h7 {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.8, .8, .8);\n            transform: scale3d(.8, .8, .8);\n  }\n}\n\n@-webkit-keyframes rollball-animation__rollBallText___3ZO-P {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(2, 2, 2);\n            transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rollball-animation__rollBallText___3ZO-P {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(2, 2, 2);\n            transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n", "", {"version":3,"sources":["/./src/views/rollball-animation/rollball-animation.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,6DAAiC;YACzB,qDAAyB;IACjC,iCAAiC;YACzB,yBAAyB;IACjC,kCAAkC;YAC1B,0BAA0B;CACrC;;AAED;IACI,OAAO;IACP,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,iEAAqC;YAC7B,yDAA6B;IACrC,4CAA4C;IAC5C,+BAA+B;YACvB,uBAAuB;IAC/B,6BAA6B;IAC7B,kCAAkC;YAC1B,0BAA0B;CACrC;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,uCAAuC;YAC/B,+BAA+B;GACxC;CACF;;AAED;EACE;IACE,WAAW;GACZ;;EAED;IACE,WAAW;GACZ;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,uCAAuC;YAC/B,+BAA+B;GACxC;CACF;;AAED;EACE;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,0CAA0C;YAClC,kCAAkC;GAC3C;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;CACF;;AAED;EACE;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,0CAA0C;YAClC,kCAAkC;GAC3C;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;;EAED;IACE,WAAW;IACX,oCAAoC;YAC5B,4BAA4B;GACrC;CACF","file":"rollball-animation.css","sourcesContent":[".root {\n    position: fixed;\n    top: -15%;\n    left: -15%;\n    width: 130%;\n    height: 130%;\n    background-color: #d35400;\n    -webkit-animation-name: rollBall;\n            animation-name: rollBall;\n    -webkit-animation-duration: 1.2s;\n            animation-duration: 1.2s;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.text {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n    height: 230px;\n    line-height: 230px;\n    margin: auto;\n    text-align: center;\n    font-size: 150px;\n    color: #fff;\n    -webkit-animation-name: rollBallText;\n            animation-name: rollBallText;\n    background-color: rgba(255, 255, 255, 0.16);\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    text-shadow: 2px 2px #34495e;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n@-webkit-keyframes rollBall {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.8, .8, .8);\n            transform: scale3d(.8, .8, .8);\n  }\n}\n\n@keyframes rollBall {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(.8, .8, .8);\n            transform: scale3d(.8, .8, .8);\n  }\n}\n\n@-webkit-keyframes rollBallText {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(2, 2, 2);\n            transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rollBallText {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(2, 2, 2);\n            transform: scale3d(2, 2, 2);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	exports.push([module.id, ".author__root___259t4 {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n.author__top___2lDju { }\n\n.author__bottom___1M-j4 { }\n\n.author__image___1oFXl {\n    width: 30px;\n    margin-right: 50px;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.author__id_speedmode___TPrPy .author__image___1oFXl {\n    border-bottom: 2px solid #f39c12;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/author/author.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;AAED,wBAAQ;;AAER,2BAAW;;AAEX;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;CACnB;;AAED;IACI,iCAAiC;CACpC","file":"author.css","sourcesContent":[".root {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n.top { }\n\n.bottom { }\n\n.image {\n    width: 30px;\n    margin-right: 50px;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.id_speedmode .image {\n    border-bottom: 2px solid #f39c12;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "author__root___259t4",
		"top": "author__top___2lDju",
		"bottom": "author__bottom___1M-j4",
		"image": "author__image___1oFXl",
		"id_speedmode": "author__id_speedmode___TPrPy"
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
	exports.push([module.id, ".cell__root___1xVkt {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__cell___3LONh {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n}\n\n.cell__top___20yUB {\n    color: #fff;\n}\n\n.cell__half___2SUBn {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___3fivi { }\n\n.cell__is_right___10GKh .cell__cell___3LONh {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___2TzUA .cell__cell___3LONh {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___Xhdtc {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.cell__is_right___10GKh,\n.cell__is_left___Xhdtc {\n    width: 200px\n}\n\n.cell__is_top___1XTko {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.cell__is_scores___1tDSV {\n    font-size: 12px;\n}\n\n.cell__is_top___1XTko .cell__cell___3LONh {\n    background-color: transparent;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/./src/views/workspace/table/row/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,YAAY;CACf;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS;;AAET;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,0BAA0B;IAC1B,wBAAwB;IACxB,mBAAmB;CACtB;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,8BAA8B;IAC9B,iBAAiB;CACpB","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #e67e22;\n}\n\n.top {\n    color: #fff;\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 57px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-align: center;\n}\n\n.is_right,\n.is_left {\n    width: 200px\n}\n\n.is_top {\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 2px 2px #000;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n"],"sourceRoot":"webpack://"}]);
	
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

	module.exports = __webpack_require__.p + "8a97c38f9cb89e353057249fe874fa7b.css";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "aef7a6adae2726e23163e650900fbcb9.png";

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/autoprefixer-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/autoprefixer-loader/index.js!./app.css");
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./final-results.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./final-results.css");
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./game-form.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./game-form.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./modal.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./modal.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./rollball-animation.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./rollball-animation.css");
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./author.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./author.css");
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./button.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./button.css");
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
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../node_modules/autoprefixer-loader/index.js!./cell.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../../node_modules/autoprefixer-loader/index.js!./cell.css");
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/autoprefixer-loader/index.js!./row.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/autoprefixer-loader/index.js!./row.css");
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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./table.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/autoprefixer-loader/index.js!./table.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./workspace.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/autoprefixer-loader/index.js!./workspace.css");
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
		module.hot.accept("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/autoprefixer-loader/index.js!./main.css", function() {
			update(require("!!./../../node_modules/file-loader/index.js!./../../node_modules/extract-loader/lib/extractLoader.js!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/autoprefixer-loader/index.js!./main.css"));
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
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,'"> <div class="', cn.top ,'">by Alex AFONIN for</div> <div class="', cn.bottom ,'">Florian FEICHTINGER</div> <img title="Toggle speed mode" class="', cn.image ,'" src="', imgSrc ,'" data-author="speedmode"/> </div> ');}return p.join('');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWQ2MDJlN2Q0OTJmZjI4NGQ3MzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2lnbi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2dhbWVSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbW9kYWxSZWR1Y2VyQ3JlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb2xsYmFsbC1hbmltYXRpb24vcm9sbGJhbGwtYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2Uvd29ya3NwYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvcm93LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NwZWVkbW9kZS1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvY29sb3JzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL25hbWVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC5jc3M/ZDYwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcz9lODBhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzcz85NGMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3M/ZGU4YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3M/OGE4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL2F1dGhvci9hdXRob3IuY3NzP2NjMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmNzcz9mMzVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3M/YTJmZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9yb3cuY3NzPzdkNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5jc3M/YzAyOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3M/N2NiNyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzQ2MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3JvbGxiYWxsLWFuaW1hdGlvbi9yb2xsYmFsbC1hbmltYXRpb24uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvYXV0aG9yL2F1dGhvci5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9jZWxsL2NlbGwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS93b3Jrc3BhY2UuanN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDcENZOzs7Ozs7Ozs7Ozs7Ozs7O0tBUUE7Ozs7Ozs7O0tBRU47QUFDRixjQURFLEdBQ0YsQ0FBYSxLQUFiLEVBQW9COytCQURsQixLQUNrQjs7QUFDaEIsY0FBSyxXQUFMLEdBQ0ssUUFETCxDQUNjLEtBRGQsRUFFSyxhQUZMLEdBR0ssWUFITCxHQURnQjtNQUFwQjs7a0JBREU7O3FDQVFXO0FBQ1Qsb0JBQU87QUFDSCwwQkFBUyxDQUFFLE1BQUYsRUFBVSxXQUFWLEVBQXVCLE9BQXZCLEVBQWdDLGVBQWhDLEVBQWlELFFBQWpELENBQVQ7QUFDQSw2QkFBWSxDQUFFLFdB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LGdHQUErRixFO0FBQy9GLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUseUVBQXlFO0FBQ3RKLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSw4REFBOEQ7QUFDM0ksRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHdJQUF3STtBQUNyTixFIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYWQ2MDJlN2Q0OTJmZjI4NGQ3MzVcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBjbiBmcm9tICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgKiBhcyB2ZG9tIGZyb20gJy4vdmlydHVhbC1kb20uanMnO1xuaW1wb3J0IGFzc2lnbkV2ZW50cyBmcm9tICcuL2Fzc2lnbi1ldmVudHMuanMnO1xuXG4vLyByZWFjdCBzdHlsZTpcbmltcG9ydCBhcHAgZnJvbSAnLi92aWV3cy9hcHAuanMnO1xuXG4vLyByZWR1eCBzdHlsZTpcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXBwUmVkdWNlci5qcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vcmVkdWNlcnMvYWN0aW9ucy5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdEFwcE5vZGUoKVxuICAgICAgICAgICAgLnNldFN0YXRlKHN0YXRlKVxuICAgICAgICAgICAgLmluaXRHYW1lVGltZXIoKVxuICAgICAgICAgICAgLmFzc2lnbkV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldEV2ZW50cyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2xpY2snOiBbICdtYWluJywgJ2dhbWUtZm9ybScsICdtb2RhbCcsICdmaW5hbC1yZXN1bHRzJywgJ2F1dGhvcicgXSxcbiAgICAgICAgICAgICdmb2N1c291dCc6IFsgJ2dhbWUtZm9ybScgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGFzc2lnbkV2ZW50cyh0aGlzLCB0aGlzLmdldEV2ZW50cygpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0QXBwTm9kZSAoKSB7XG4gICAgICAgIHRoaXMuYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0R2FtZVRpbWVyICgpIHtcbiAgICAgICAgdGhpcy5nYW1lVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnRpY2tUaW1lcigpKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRSb2xsQmFsbEFuaW1hdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTcGVlZE1vZGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICRyb2xsQmFsbEFuaW1hdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICRyb2xsQmFsbEFuaW1hdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCAxMjAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZSwgbm9SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSB8fCB7fSwgc3RhdGUpO1xuXG4gICAgICAgICFub1JlbmRlciAmJiB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlZHVjZUFjdGlvbiAoYWN0aW9uLCBub1JlbmRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKSwgbm9SZW5kZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaXNBbmltYXRpb25JblByb2dyZXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuJHJvbGxCYWxsQW5pbWF0aW9uO1xuICAgIH1cblxuICAgIG9uR2FtZUZvcm1JbnB1dEZvY3Vzb3V0IChlKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMudXBkYXRlUGxheWVyTmFtZSh7XG4gICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLFxuICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvbkZpbmFsUmVzdWx0c05ld0NsaWNrICgpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5uZXdHYW1lKCkpO1xuICAgIH1cblxuICAgIG9uTWFpblJvbGxDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW9uSW5Qcm9ncmVzcygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihhY3Rpb25zLnRocm93QmFsbCgpLCB0cnVlKVxuICAgICAgICAgICAgLnN0YXJ0Um9sbEJhbGxBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5nYW1lLmluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5lbmRHYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtUGxheUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5wbGF5R2FtZSgpKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2VDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKGFjdGlvbnMuY2xvc2VNb2RhbCgpKTtcbiAgICB9XG5cbiAgICBvbkF1dGhvclNwZWVkbW9kZUNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oYWN0aW9ucy5zcGVlZE1vZGUoKSk7XG4gICAgfVxufVxuXG5uZXcgQXBwKHJlZHVjZXIoKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAuanNcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHN1bUFycmF5IChhcnIpIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KHZhbCB8fCAwLCAxMCk7XG4gICAgfSwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kTnVtIChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRBcnIoYXJyKSB7XG4gICAgcmV0dXJuIGFycltyYW5kTnVtKGFyci5sZW5ndGggLSAxKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCB7fTtcblxuICAgIGZvciAobGV0IGkgPSAxLCBpTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpMZW5ndGggPSBrZXlzLmxlbmd0aDsgaiA8IGpMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbal07XG4gICAgICAgICAgICBsZXQgdHlwZU9mVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2tleV0pO1xuXG4gICAgICAgICAgICBpZiAodHlwZU9mVmFsdWUgPT09ICdbb2JqZWN0IE9iamVjdF0nIHx8IHR5cGVPZlZhbHVlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgZHN0W2tleV0gPSBkc3Rba2V5XSB8fCAob2JqW2tleV0gaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xuICAgICAgICAgICAgICAgIGRzdFtrZXldID0gZXh0ZW5kKGRzdFtrZXldLCBvYmpba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRzdFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHN0O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGVscGVycy5qc1xuICoqLyIsImV4cG9ydCBsZXQgVElDS19USU1FUiA9ICdUSUNLX1RJTUVSJztcbmV4cG9ydCBsZXQgVEhST1dfQkFMTCA9ICdUSFJPV19CQUxMJztcbmV4cG9ydCBsZXQgQ0xPU0VfTU9EQUwgPSAnQ0xPU0VfTU9EQUwnO1xuZXhwb3J0IGxldCBQTEFZX0dBTUUgPSAnUExBWV9HQU1FJztcbmV4cG9ydCBsZXQgTkVXX0dBTUUgPSAnTkVXX0dBTUUnO1xuZXhwb3J0IGxldCBFTkRfR0FNRSA9ICdFTkRfR0FNRSc7XG5leHBvcnQgbGV0IFVQREFURV9QTEFZRVJfTkFNRSA9ICdVUERBVEVfUExBWUVSX05BTUUnO1xuZXhwb3J0IGxldCBTUEVFRF9NT0RFID0gJ1NQRUVEX01PREUnO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy90eXBlcy5qc1xuICoqLyIsImZ1bmN0aW9uIHNuYWtlVG9DYW1lbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oXFwtXFx3KS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyIChjb250ZXh0LCBldmVudHNIYXNoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIGV2ZW50c0hhc2gpIHtcbiAgICAgICAgICAgIGxldCBoYXNoID0gZXZlbnRzSGFzaFthdHRyTmFtZV07XG4gICAgICAgICAgICBsZXQgYXR0ciA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lck5hbWUgPSBoYXNoLmxpc3RlbmVyTmFtZXNbYWN0aW9uXTtcblxuICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyTmFtZSA9IGhhc2gubGlzdGVuZXJOYW1lc1thY3Rpb25dID0gc25ha2VUb0NhbWVsKGBvbi0ke2hhc2guY29tcG9uZW50fS0ke2FjdGlvbn0tJHtoYXNoLmV2ZW50TmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dFtsaXN0ZW5lck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRbbGlzdGVuZXJOYW1lXS5jYWxsKGNvbnRleHQsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduRXZlbnRzIChjb250ZXh0LCBldmVudHMpIHtcbiAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnRzSGFzaCA9IGV2ZW50c1tldmVudE5hbWVdLnJlZHVjZSgoYWNjLCBjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGFjY1tgZGF0YS0ke2NvbXBvbmVudH1gXSA9IHsgY29tcG9uZW50LCBldmVudE5hbWUsIGxpc3RlbmVyTmFtZXM6IHt9IH07XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY3JlYXRlRXZlbnRMaXN0ZW5lcihjb250ZXh0LCBldmVudHNIYXNoKSk7XG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hc3NpZ24tZXZlbnRzLmpzXG4gKiovIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBsZXQgdXBkYXRlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgdGhyb3dCYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRIUk9XX0JBTExcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBwbGF5R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5QTEFZX0dBTUVcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCBuZXdHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLk5FV19HQU1FXG4gICAgfTtcbn07XG5cbmV4cG9ydCBsZXQgZW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5FTkRfR0FNRVxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0xPU0VfTU9EQUxcbiAgICB9O1xufTtcblxuZXhwb3J0IGxldCB0aWNrVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVElDS19USU1FUlxuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IHNwZWVkTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5TUEVFRF9NT0RFXG4gICAgfTtcbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBtb2RhbFJlZHVjZXJDcmVhdGVyIGZyb20gJy4vbW9kYWxSZWR1Y2VyQ3JlYXRlcic7XG5pbXBvcnQgZ2FtZVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVJlZHVjZXJDcmVhdGVyJztcblxubGV0IG1vZGFsUmVkdWNlciA9IG1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVSZWR1Y2VyID0gZ2FtZVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IGZyYW1lLnRpdGxlLFxuICAgICAgICAgICAgaXNSaWdodDogaW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZSwgaXNUb3A6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgcEluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGZJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbcEluZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsLFxuICAgICAgICAgICAgICAgIGlzUmlnaHQ6IGZJbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzU2NvcmVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGlzQ3VycmVudDogcEluZGV4ID09PSBzdGF0ZS5jdXJyZW50UGxheWVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0N1cnJlbnQ6IHBJbmRleCA9PT0gc3RhdGUuY3VycmVudFBsYXllcixcbiAgICAgICAgICAgIGNvbHNcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJvd3MucHVzaCguLi5wUm93cyk7XG5cbiAgICByZXR1cm4geyByb3dzIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pIHtcbiAgICBzdGF0ZS5nYW1lID0gZ2FtZVJlZHVjZXIoc3RhdGUuZ2FtZSwgYWN0aW9uKTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5TUEVFRF9NT0RFOlxuICAgICAgICAgICAgc3RhdGUuaXNTcGVlZE1vZGUgPSAhc3RhdGUuaXNTcGVlZE1vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RhdGUudGFibGUgPSBjcmVhdGVUYWJsZShzdGF0ZS5nYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGUgPSBtb2RhbFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzXG4gKiovIiwiLyogKioqXG4qIFRISVMgUkVEVUNFUiBJUyBSRUFEWSBGT1IgU0hBUklORyBCTCBUTyBPVEhFUiBQTEFURk9STS4gKFdJVEggUkVBQ1QgTkFUSVZFIEZPUiBFWEFNUExFKVxuKioqICovXG5cbmltcG9ydCBuYW1lcyBmcm9tICcuL25hbWVzLmpzb24nO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycy5qc29uJztcbmltcG9ydCB7IHN1bUFycmF5LCByYW5kTnVtLCByYW5kQXJyIH0gZnJvbSAnaGVscGVycyc7XG5cbmNvbnN0IEZSQU1FU19MRU5HVEggPSAxMDtcblxuZnVuY3Rpb24gcmFuZ2UgKGxlbmd0aCkge1xuICAgIHJldHVybiBBcnJheShsZW5ndGgpLmpvaW4oJyAnKS5zcGxpdCgnICcpLm1hcCgodiwgaSkgPT4gaSk7XG59XG5cbmZ1bmN0aW9uIHBhZCAodmFsdWUsIGxlbmd0aCkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgMjtcblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNEaWZmVGltZSAoc3RhdGUpIHtcbiAgICBsZXQgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIHN0YXRlLnN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgICAgcmlnaHRTaWRlID0gdG90YWxTZWNvbmRzICUgNjAsXG4gICAgICAgIGxlZnRTaWRlID0gKHRvdGFsU2Vjb25kcyAtIHJpZ2h0U2lkZSkgLyA2MDtcblxuICAgIHN0YXRlLmRpZmZUaW1lID0gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByb2xsQmFsbCAocGlucykge1xuICAgIGxldCB2YWx1ZXMgPSBbcmFuZE51bShwaW5zKV07XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlIChwbGF5ZXJzKSB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBwbGF5ZXJzOiBwbGF5ZXJzIHx8IFtyYW5kQXJyKG5hbWVzKSwgcmFuZEFycihuYW1lcyldLFxuICAgICAgICBjdXJyZW50UGxheWVyOiAwLFxuICAgICAgICBjdXJyZW50RnJhbWU6IDAsXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgZGlmZlRpbWU6ICcwMDowMCcsXG4gICAgICAgIGluUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIGxhc3RSZXN1bHQ6IHt9XG4gICAgfTtcblxuICAgIHN0YXRlLmZyYW1lcyA9IGNyZWF0ZUZyYW1lcyhzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lcyAoc3RhdGUpIHtcbiAgICByZXR1cm4gcmFuZ2UoRlJBTUVTX0xFTkdUSCkubWFwKCh2YWwpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lID0ge1xuICAgICAgICAgICAgdGl0bGU6IHZhbCArIDFcbiAgICAgICAgfTtcblxuICAgICAgICBzdGF0ZS5wbGF5ZXJzLnJlZHVjZSgoYWNjLCBwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBhY2NbaW5kZXhdID0gW107XG4gICAgICAgICAgICBhY2NbaW5kZXhdLnRvdGFsID0gJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIGZyYW1lKTtcblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRQbGF5ZXIgKHN0YXRlKSB7XG4gICAgaWYgKGlzTGFzdEZyYW1lKHN0YXRlKSAmJiBpc0xhc3RQbGF5ZXIoc3RhdGUpKSB7XG4gICAgICAgIHN0YXRlLmluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGxheWVyID0gc3RhdGUuY3VycmVudFBsYXllcjtcblxuICAgICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyID0gcGxheWVyID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPyAwIDogcGxheWVyICsgMTtcblxuICAgICAgICBpZiAocGxheWVyID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50RnJhbWUgPSBzdGF0ZS5jdXJyZW50RnJhbWUgPCBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSA/IHN0YXRlLmN1cnJlbnRGcmFtZSArIDEgOiBzdGF0ZS5jdXJyZW50RnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldEJvbnVzRnJhbWVzIChzdGF0ZSkge1xuICAgIGxldCBmcmFtZXMgPSBzdGF0ZS5mcmFtZXMuc2xpY2UoTWF0aC5tYXgoMCwgc3RhdGUuY3VycmVudEZyYW1lIC0gMiksIHN0YXRlLmN1cnJlbnRGcmFtZSArIDEpLm1hcCgoZnJhbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyYW1lW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIH0pO1xuXG4gICAgbGV0IGN1cnJGcmFtZSA9IGZyYW1lc1tmcmFtZXMubGVuZ3RoIC0gMV07XG4gICAgZnJhbWVzLmxlbmd0aC0tO1xuXG4gICAgbGV0IHIgPSAyIC0gY3VyckZyYW1lLmxlbmd0aDtcbiAgICBsZXQgYm9udXNGcmFtZXMgPSBbXTtcblxuICAgIHdoaWxlIChyICYmIGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGZyYW1lID0gZnJhbWVzLnBvcCgpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChyID09PSAxICYmIGZyYW1lWzBdLnZhbHVlID09PSAxMCkgfHxcbiAgICAgICAgICAgIChyID09PSAyICYmIChmcmFtZS50b3RhbCA9PT0gMTApKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGJvbnVzRnJhbWVzLnVuc2hpZnQoZnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgciAtPSBmcmFtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvbnVzRnJhbWVzO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RQbGF5ZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA9PT0gc3RhdGUuY3VycmVudFBsYXllcjtcbn1cblxuZnVuY3Rpb24gaXNMYXN0RnJhbWUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gRlJBTUVTX0xFTkdUSCAtIDE7XG59XG5cbmZ1bmN0aW9uIG9uVGlja1RpbWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBjYWxjRGlmZlRpbWUoc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBvblRocm93QmFsbCAoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmluUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGxldCBmcmFtZSA9IHN0YXRlLmZyYW1lc1tzdGF0ZS5jdXJyZW50RnJhbWVdW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGxldCBwaW5zID0gRlJBTUVTX0xFTkdUSDtcbiAgICBsZXQgcGxheWVyTmFtZSA9IHN0YXRlLnBsYXllcnNbc3RhdGUuY3VycmVudFBsYXllcl07XG5cbiAgICBpZiAoZnJhbWVbMF0gJiYgcGlucyAhPT0gZnJhbWVbMF0udmFsdWUpIHtcbiAgICAgICAgcGlucyAtPSBmcmFtZVswXS52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgYm9udXNGcmFtZXMgPSBnZXRCb251c0ZyYW1lcyhzdGF0ZSk7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5tYXgocm9sbEJhbGwocGlucyksIHJvbGxCYWxsKHBpbnMpKTtcblxuICAgIGJvbnVzRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGZyYW1lLnRvdGFsICs9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgbGV0IHJvbGwgPSB7IHZhbHVlLCBzcGVjaWFsOiAnJyB9O1xuXG4gICAgZnJhbWUucHVzaChyb2xsKTtcblxuICAgIGxldCByb2xsc1N1bSA9IHN1bUFycmF5KGZyYW1lLm1hcChyb2xsID0+IHJvbGwudmFsdWUpKTtcbiAgICBmcmFtZS50b3RhbCA9IHJvbGxzU3VtO1xuXG4gICAgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAocm9sbC52YWx1ZSA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnWCc7XG4gICAgICAgICAgICByb2xsLnNwZWNpYWwgPSAnc3RyaWtlJztcblxuICAgICAgICAgICAgaWYgKCFpc0xhc3RGcmFtZShzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKGZyYW1lLnRvdGFsID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICcvJztcbiAgICAgICAgICAgIHJvbGwuc3BlY2lhbCA9ICdzcGFyZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgcm9sbHNTdW0gPj0gMTApIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMykge1xuICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcblxuICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5sYXN0UmVzdWx0LnZhbHVlID0gYCR7dmFsdWV9IHBpbnMhYDtcbiAgICBzdGF0ZS5sYXN0UmVzdWx0LmNvbG9yID0gcmFuZEFycihjb2xvcnMpO1xuXG4gICAgaWYgKHJvbGwuc3BlY2lhbCkge1xuICAgICAgICBzdGF0ZS5sYXN0UmVzdWx0LnZhbHVlICs9IGAgJHtyb2xsLnNwZWNpYWwudG9VcHBlckNhc2UoKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25VcGRhdGVQbGF5ZXJOYW1lIChzdGF0ZSwgZGF0YSkge1xuICAgIHN0YXRlLnBsYXllcnNbZGF0YS5pbmRleF0gPSBkYXRhLnZhbHVlO1xuICAgIHN0YXRlLnBsYXllcnMgPSBzdGF0ZS5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gcGxheWVyKTtcblxuICAgIGlmICghc3RhdGUucGxheWVycy5sZW5ndGgpIHtcbiAgICAgICAgc3RhdGUucGxheWVycy5wdXNoKHJhbmRBcnIobmFtZXMpKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblBsYXlHYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBnZXRJbml0aWFsU3RhdGUoc3RhdGUucGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUgKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25QbGF5R2FtZShzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVElDS19USU1FUjpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGlja1RpbWVyKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USFJPV19CQUxMOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaHJvd0JhbGwoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QTEFZRVJfTkFNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVXBkYXRlUGxheWVyTmFtZShzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVJlZHVjZXJDcmVhdGVyLmpzXG4gKiovIiwiaW1wb3J0IHsgc3VtQXJyYXkgfSBmcm9tICdoZWxwZXJzJztcblxuZnVuY3Rpb24gY3JlYXRlRmluYWxSZXN1bHRzRGF0YSAoc3RhdGUpIHtcbiAgICBsZXQgZ2FtZSA9IHN0YXRlLmdhbWU7XG5cbiAgICByZXR1cm4gZ2FtZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcGxheWVyLFxuICAgICAgICAgICAgc2NvcmVzOiBzdW1BcnJheShnYW1lLmZyYW1lcy5tYXAoKGZyYW1lKSA9PiBmcmFtZVtpbmRleF0udG90YWwpKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmVzIC0gYS5zY29yZXM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKHN0YXRlLCBpc09wZW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2ZpbmFsLXJlc3VsdHMnLFxuICAgICAgICBzdHlsZTogJ2JsdWUnLFxuICAgICAgICBpc09wZW4sXG4gICAgICAgIGRhdGE6IGNyZWF0ZUZpbmFsUmVzdWx0c0RhdGEoc3RhdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lRm9ybURhdGEgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmdhbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtU3RhdGUoc3RhdGUsIGlzT3BlbiA9IHRydWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZ2FtZS1mb3JtJyxcbiAgICAgICAgc3R5bGU6ICdibHVlJyxcbiAgICAgICAgaXNPcGVuLFxuICAgICAgICBkYXRhOiBjcmVhdGVHYW1lRm9ybURhdGEoc3RhdGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsTW9kYWwgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUdhbWVGb3JtU3RhdGUoc3RhdGUpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgc3RhdGUubW9kYWwgPSBzdGF0ZS5tb2RhbCB8fCBnZXRJbml0aWFsTW9kYWwoc3RhdGUpO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuQ0xPU0VfTU9EQUw6XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kYWwuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGFsLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkVORF9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGFsID0gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGFsID0gY3JlYXRlR2FtZUZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9tb2RhbFJlZHVjZXJDcmVhdGVyLmpzXG4gKiovIiwiaW1wb3J0IHdvcmtzcGFjZSBmcm9tICcuL3dvcmtzcGFjZS93b3Jrc3BhY2UuanMnO1xuaW1wb3J0IHJvbGxiYWxsQW5pbWF0aW9uIGZyb20gJy4vcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5qcyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9hcHAuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBtb2RhbEhUTUw6IHN0YXRlLm1vZGFsID8gbW9kYWwoc3RhdGUubW9kYWwpIDogJycsXG4gICAgICAgIHJvbGxiYWxsQW5pbWF0aW9uSFRNTDogc3RhdGUuJHJvbGxCYWxsQW5pbWF0aW9uID8gcm9sbGJhbGxBbmltYXRpb24oc3RhdGUuZ2FtZS5sYXN0UmVzdWx0KSA6ICcnLFxuICAgICAgICB3b3Jrc3BhY2VIVE1MOiB3b3Jrc3BhY2Uoc3RhdGUpLFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZmluYWwtcmVzdWx0cy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZmluYWwtcmVzdWx0cy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmluYWxSZXN1bHRzKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY24sXG4gICAgICAgIGZpbmFsUmVzdWx0c1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGdhbWUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IGdhbWUucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMnO1xuaW1wb3J0IGZpbmFsUmVzdWx0cyBmcm9tICcuL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9tb2RhbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKG1vZGFsKSB7XG4gICAgbGV0IHJvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAobW9kYWwuc3R5bGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuWydzdHlsZV8nICsgbW9kYWwuc3R5bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnB1c2goY24uaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKCFtb2RhbC5pc09wZW4pIHtcbiAgICAgICAgcm9vdC5wdXNoKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobW9kYWwpIHtcbiAgICBsZXQgY29udGVudEhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAobW9kYWwubmFtZSkge1xuICAgICAgICBjYXNlICdnYW1lLWZvcm0nOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBnYW1lRm9ybShtb2RhbC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMobW9kYWwuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBwcmVwYXJlQ04obW9kYWwpLFxuICAgICAgICBjb250ZW50SFRNTFxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9yb2xsYmFsbC1hbmltYXRpb24uY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3JvbGxiYWxsLWFuaW1hdGlvbi5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobGFzdFJlc3VsdCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGxhc3RSZXN1bHQsXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9yb2xsYmFsbC1hbmltYXRpb24vcm9sbGJhbGwtYW5pbWF0aW9uLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vYXV0aG9yLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hdXRob3IuanN0JztcbmltcG9ydCBpbWdTcmMgZnJvbSAnaW1hZ2VzL3NwZWVkbW9kZS1pY29uLnBuZyc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNTcGVlZE1vZGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlkX3NwZWVkbW9kZSk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgaW1nU3JjLFxuICAgICAgICBjbjogcHJlcGFyZUNOKHN0YXRlKVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL2F1dGhvci9hdXRob3IuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9idXR0b24uY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2J1dHRvbi5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04oc3RhdGUpIHtcbiAgICBsZXQgcm9vdCA9IGNuLl9yb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKHN0YXRlLmlzTGVmdCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfbGVmdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzUmlnaHQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3JpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3RvcCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzQm90dG9tKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19ib3R0b20pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1Njb3Jlcykge1xuICAgICAgICByb290LnB1c2goY24uaXNfc2NvcmVzKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNDdXJyZW50KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19jdXJyZW50KTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgIGNuOiBwcmVwYXJlQ04oY2VsbClcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmpzXG4gKiovIiwiaW1wb3J0IGNlbGwgZnJvbSAnLi9jZWxsL2NlbGwuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vcm93LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb3cuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBjbi5fcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChzdGF0ZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2N1cnJlbnQpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb3cpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY2VsbHNIVE1MOiByb3cuY29scy5tYXAoY2VsbCkuam9pbignJyksXG4gICAgICAgIGNuOiBwcmVwYXJlQ04ocm93KVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9yb3cuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4vcm93L3Jvdy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi90YWJsZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFibGUuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93c0hUTUw6IHN0YXRlLnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvdGFibGUuanNcbiAqKi8iLCJpbXBvcnQgYXV0aG9yIGZyb20gJy4vYXV0aG9yL2F1dGhvci5qcyc7XG5pbXBvcnQgdGFibGUgZnJvbSAnLi90YWJsZS90YWJsZS5qcyc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uL2J1dHRvbi5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi93b3Jrc3BhY2UuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3dvcmtzcGFjZS5qc3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGF1dGhvckhUTUw6IHN0YXRlID8gYXV0aG9yKHN0YXRlKSA6ICcnLFxuICAgICAgICB0YWJsZUhUTUw6IHN0YXRlLnRhYmxlID8gdGFibGUoc3RhdGUudGFibGUpIDogJycsXG4gICAgICAgIGJ1dHRvbkhUTUw6IHN0YXRlID8gYnV0dG9uKCkgOiAnJyxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS93b3Jrc3BhY2UuanNcbiAqKi8iLCJjb25zdCBwcm9wTmFtZXMgPSB7XG4gICAgdmFsdWU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSB7XG4gICAgaWYgKEhUTUwudHJpbSgpID09PSAnJyl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShIVE1MKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gSFRNTDtcbiAgICBub2RlID0gbm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSB7XG4gICAgbGV0IHZOb2RlID0ge1xuICAgICAgICB0eXBlOiBub2RlLm5vZGVUeXBlXG4gICAgfTtcblxuICAgIGlmICh2Tm9kZS50eXBlID09PSAzKSB7XG4gICAgICAgIHZOb2RlLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVucyA9IFtdO1xuICAgICAgICB2Tm9kZS5hdHRycyA9IHt9O1xuICAgICAgICB2Tm9kZS50YWcgPSBub2RlLnRhZ05hbWU7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVucy5wdXNoKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjbGFzc05hbWUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Tm9kZS5hdHRyc1tuYW1lXSA9IG5vZGUuYXR0cmlidXRlc1tpXS52YWx1ZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdk5vZGU7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRycyhhdHRycykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBsZXQgYXR0ciA9IGF0dHJzW2tleV0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBrZXkgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fT1cIiR7YXR0cn1cImApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwgPSAnJykge1xuICAgIGxldCBhdHRycyA9IGpvaW5BdHRycyh2Tm9kZS5hdHRycyk7XG5cbiAgICBzd2l0Y2godk5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIDM6IHJldHVybiBgJHtpbm5lckhUTUx9YDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGA8JHt2Tm9kZS50YWd9ICR7YXR0cnN9PiR7aW5uZXJIVE1MfTwvJHt2Tm9kZS50YWd9PmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJIVE1MKHZOb2RlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgIT09IDMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIVE1MICs9IHJlbmRlckhUTUwodk5vZGUuY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCA9IHZOb2RlLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCk7XG59XG5cbmV4cG9ydCBsZXQgZGlmZiA9IGZ1bmN0aW9uICh2Tm9kZTEsIHZOb2RlMikge1xuICAgIGlmICh2Tm9kZTEgJiYgIXZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9OT0RFJ1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXZOb2RlMSAmJiB2Tm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdBRERfTk9ERScsXG4gICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2Tm9kZTEudGFnICE9PSB2Tm9kZTIudGFnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50eXBlID09PSAzIHx8IHZOb2RlMi50eXBlID09PSAzKSB7XG4gICAgICAgIGlmICh2Tm9kZTEuY29udGVudCAhPT0gdk5vZGUyLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1JFUExBQ0VfTk9ERScsXG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhdHRycyA9IFtdO1xuICAgICAgICBsZXQgcGF0Y2ggPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUyLmF0dHJzKSB7XG4gICAgICAgICAgICBsZXQgYXR0cjEgPSB2Tm9kZTEuYXR0cnNba2V5XTtcbiAgICAgICAgICAgIGxldCBhdHRyMiA9IHZOb2RlMi5hdHRyc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoIWF0dHIxKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjIuam9pbignICcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMVZhbCA9IGF0dHIxLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjJWYWwgPSBhdHRyMi5qb2luKCcgJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0cjFWYWwgIT09IGF0dHIyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyVmFsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTEuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMiA9IHZOb2RlMi5hdHRyc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoIWF0dHIyKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdSRU1PVkUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZTEuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY0RpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoY0RpZmYpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMi5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdk5vZGUxLmNoaWxkcmVuc1tpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY0RpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSBjRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRjaC5hdHRycyA9IGF0dHJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRjaDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2hPcChwYXJlbnROb2RlLCBub2RlLCBvcCkge1xuICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KG9wLnZOb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRU1PVkVfTk9ERSc6XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUkVQTEFDRV9OT0RFJzpcbiAgICAgICAgICAgIHZhciBuZXdOb2RlID0gY3JlYXRlRWxlbWVudChvcC52Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBhcHBseUF0dHJPcHMobm9kZSwgb3BzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3AgPSBvcHNbaV07XG4gICAgICAgIGxldCBuYW1lID0gb3AubmFtZTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzUHJvcCA9IHByb3BOYW1lc1tuYW1lXTtcblxuICAgICAgICBzd2l0Y2gob3AudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnU0VUJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbbmFtZV0gPSBvcC52YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgb3AudmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JFTU9WRSc6XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlW25hbWVdID0gJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGxldCBhcHBseVBhdGNoID0gZnVuY3Rpb24gKG5vZGUsIHBhdGNoZXMsIHBhcmVudE5vZGUpIHtcbiAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHBhdGNoZXMudHlwZSkge1xuICAgICAgICBub2RlID0gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIHBhdGNoZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2hlcykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJzJykge1xuICAgICAgICAgICAgICAgIGFwcGx5QXR0ck9wcyhub2RlLCBwYXRjaGVzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseVBhdGNoKGNoaWxkTm9kZXNba2V5XSwgcGF0Y2hlc1trZXldLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGxldCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVGcm9tSFRNTChyZW5kZXJIVE1MKHZOb2RlKSk7XG59O1xuXG5leHBvcnQgbGV0IHZOb2RlRnJvbUhUTUwgPSBmdW5jdGlvbiAoSFRNTCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZUZyb21Ob2RlKGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSk7XG59O1xuXG5leHBvcnQgbGV0IGFwcGx5Vk5vZGUgPSBmdW5jdGlvbiAobm9kZSwgdk5vZGUpIHtcbiAgICByZXR1cm4gYXBwbHlQYXRjaChub2RlLCBkaWZmKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZSksIHZOb2RlKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aXJ0dWFsLWRvbS5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcF9fcm9vdF9fXzNObkVIIHtcXG4gICAgcGFkZGluZy10b3A6IDUwMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEJcIixcImZpbGVcIjpcImFwcC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBwYWRkaW5nLXRvcDogNTAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImFwcF9fcm9vdF9fXzNObkVIXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhLi9zcmMvdmlld3MvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maW5hbC1yZXN1bHRzX19uYW1lX19fTVNpd2Qge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVpxWXIge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZjM5YzEyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL21vZGFsL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQlwiLFwiZmlsZVwiOlwiZmluYWwtcmVzdWx0cy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hbWUge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2YzOWMxMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJuYW1lXCI6IFwiZmluYWwtcmVzdWx0c19fbmFtZV9fX01TaXdkXCIsXG5cdFwid2lubmVyXCI6IFwiZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVpxWXJcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL34vYXV0b3ByZWZpeGVyLWxvYWRlciEuL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtZm9ybV9fcm9vdF9fXzFRVHpOIHsgfVxcblxcbi5nYW1lLWZvcm1fX25hbWVfX19IRVJneSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5nYW1lLWZvcm1fX2lucHV0X19fMWtwbmMge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzJkbFdmIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzJkbFdmOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL21vZGFsL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUFTOztBQUVUO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkJcIixcImZpbGVcIjpcImdhbWUtZm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3QgeyB9XFxuXFxuLm5hbWUge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5yb3cge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLnJvdzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiZ2FtZS1mb3JtX19yb290X19fMVFUek5cIixcblx0XCJuYW1lXCI6IFwiZ2FtZS1mb3JtX19uYW1lX19fSEVSZ3lcIixcblx0XCJpbnB1dFwiOiBcImdhbWUtZm9ybV9faW5wdXRfX18xa3BuY1wiLFxuXHRcInJvd1wiOiBcImdhbWUtZm9ybV9fcm93X19fMmRsV2ZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL34vYXV0b3ByZWZpeGVyLWxvYWRlciEuL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbF9fcm9vdF9fXzJvajc5IHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBtb2RhbF9fbW9kYWxXaW5kb3dfX18yR2g0RTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbF9fY2xvc2VfX18xT3R4bzpob3ZlciB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLm1vZGFsX19jb250ZW50X19fMy1UeVAge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA5MHB4IDVweDtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9pbmZvX19fMWlrM0oge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm0ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjk1KTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1vZGFsX19tb2RhbFdpbmRvd19fXzJHaDRFIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb2RhbF9fbW9kYWxXaW5kb3dfX18yR2g0RSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtREFBb0M7WUFDNUIsMkNBQTRCO0NBQ3ZDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7WUFDckIscUJBQXFCO0lBQzdCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQ0FBaUM7WUFDekIseUJBQXlCO0NBQ3BDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNDQUFzQztDQUN6Qzs7QUFFRDtJQUNJLG9DQUFvQztDQUN2Qzs7QUFFRDtJQUNJLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLG9DQUFvQztDQUN2Qzs7QUFFRDtJQUNJLHFDQUFxQztDQUN4Qzs7QUFFRDtFQUNFO0lBQ0UsV0FBVztHQUNaOztFQUVEO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLFdBQVc7R0FDWjtDQUNGXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbW9kYWxXaW5kb3c7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG1vZGFsV2luZG93O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ibHVlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW9kYWxXaW5kb3cge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vZGFsV2luZG93IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcIm1vZGFsV2luZG93XCI6IFwibW9kYWxfX21vZGFsV2luZG93X19fMkdoNEVcIixcblx0XCJjbG9zZVwiOiBcIm1vZGFsX19jbG9zZV9fXzFPdHhvXCIsXG5cdFwiY29udGVudFwiOiBcIm1vZGFsX19jb250ZW50X19fMy1UeVBcIixcblx0XCJzdHlsZV9pbmZvXCI6IFwibW9kYWxfX3N0eWxlX2luZm9fX18xaWszSlwiLFxuXHRcInN0eWxlX2dyZWVuXCI6IFwibW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm1cIixcblx0XCJzdHlsZV9vcmFuZ2VcIjogXCJtb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWxcIixcblx0XCJzdHlsZV9yZWRcIjogXCJtb2RhbF9fc3R5bGVfcmVkX19fMUxQZHhcIixcblx0XCJzdHlsZV9ibHVlXCI6IFwibW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb2xsYmFsbC1hbmltYXRpb25fX3Jvb3RfX18zNDAxOSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtMTUlO1xcbiAgICBsZWZ0OiAtMTUlO1xcbiAgICB3aWR0aDogMTMwJTtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsX19fMTgyaDc7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxiYWxsLWFuaW1hdGlvbl9fcm9sbEJhbGxfX18xODJoNztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMnM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLnJvbGxiYWxsLWFuaW1hdGlvbl9fdGV4dF9fXzJPUmEwIHtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsVGV4dF9fXzNaTy1QO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsVGV4dF9fXzNaTy1QO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIzM0NDk1ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsX19fMTgyaDcge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxiYWxsLWFuaW1hdGlvbl9fcm9sbEJhbGxfX18xODJoNyB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsYmFsbC1hbmltYXRpb25fX3JvbGxCYWxsVGV4dF9fXzNaTy1QIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMiwgMiwgMik7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm9sbGJhbGwtYW5pbWF0aW9uX19yb2xsQmFsbFRleHRfX18zWk8tUCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgyLCAyLCAyKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3JvbGxiYWxsLWFuaW1hdGlvbi9yb2xsYmFsbC1hbmltYXRpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkRBQWlDO1lBQ3pCLHFEQUF5QjtJQUNqQyxpQ0FBaUM7WUFDekIseUJBQXlCO0lBQ2pDLGtDQUFrQztZQUMxQiwwQkFBMEI7Q0FDckM7O0FBRUQ7SUFDSSxPQUFPO0lBQ1AsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUVBQXFDO1lBQzdCLHlEQUE2QjtJQUNyQyw0Q0FBNEM7SUFDNUMsK0JBQStCO1lBQ3ZCLHVCQUF1QjtJQUMvQiw2QkFBNkI7SUFDN0Isa0NBQWtDO1lBQzFCLDBCQUEwQjtDQUNyQzs7QUFFRDtFQUNFO0lBQ0UsV0FBVztHQUNaOztFQUVEO0lBQ0UsV0FBVztHQUNaOztFQUVEO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztZQUM1Qiw0QkFBNEI7R0FDckM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsdUNBQXVDO1lBQy9CLCtCQUErQjtHQUN4QztDQUNGOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO1lBQzVCLDRCQUE0QjtHQUNyQzs7RUFFRDtJQUNFLFdBQVc7SUFDWCx1Q0FBdUM7WUFDL0IsK0JBQStCO0dBQ3hDO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxvQ0FBb0M7WUFDNUIsNEJBQTRCO0dBQ3JDOztFQUVEO0lBQ0UsMENBQTBDO1lBQ2xDLGtDQUFrQztHQUMzQzs7RUFFRDtJQUNFLFdBQVc7SUFDWCxvQ0FBb0M7WUFDNUIsNEJBQTRCO0dBQ3JDOztFQUVEO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztZQUM1Qiw0QkFBNEI7R0FDckM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO1lBQzVCLDRCQUE0QjtHQUNyQztDQUNGOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO1lBQzVCLDRCQUE0QjtHQUNyQzs7RUFFRDtJQUNFLDBDQUEwQztZQUNsQyxrQ0FBa0M7R0FDM0M7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsb0NBQW9DO1lBQzVCLDRCQUE0QjtHQUNyQzs7RUFFRDtJQUNFLFdBQVc7SUFDWCxvQ0FBb0M7WUFDNUIsNEJBQTRCO0dBQ3JDOztFQUVEO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztZQUM1Qiw0QkFBNEI7R0FDckM7Q0FDRlwiLFwiZmlsZVwiOlwicm9sbGJhbGwtYW5pbWF0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtMTUlO1xcbiAgICBsZWZ0OiAtMTUlO1xcbiAgICB3aWR0aDogMTMwJTtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsQmFsbDtcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcm9sbEJhbGw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMzBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsQmFsbFRleHQ7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxCYWxsVGV4dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzNDQ5NWU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbEJhbGwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxCYWxsIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxCYWxsVGV4dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgyLCAyLCAyKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxCYWxsVGV4dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDIsIDIsIDIpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgyLCAyLCAyKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJyb2xsYmFsbC1hbmltYXRpb25fX3Jvb3RfX18zNDAxOVwiLFxuXHRcInJvbGxCYWxsXCI6IFwicm9sbGJhbGwtYW5pbWF0aW9uX19yb2xsQmFsbF9fXzE4Mmg3XCIsXG5cdFwidGV4dFwiOiBcInJvbGxiYWxsLWFuaW1hdGlvbl9fdGV4dF9fXzJPUmEwXCIsXG5cdFwicm9sbEJhbGxUZXh0XCI6IFwicm9sbGJhbGwtYW5pbWF0aW9uX19yb2xsQmFsbFRleHRfX18zWk8tUFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vc3JjL3ZpZXdzL3JvbGxiYWxsLWFuaW1hdGlvbi9yb2xsYmFsbC1hbmltYXRpb24uY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmF1dGhvcl9fcm9vdF9fXzI1OXQ0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAtNTBweDtcXG59XFxuXFxuLmF1dGhvcl9fdG9wX19fMmxEanUgeyB9XFxuXFxuLmF1dGhvcl9fYm90dG9tX19fMU0tajQgeyB9XFxuXFxuLmF1dGhvcl9faW1hZ2VfX18xb0ZYbCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmF1dGhvcl9faWRfc3BlZWRtb2RlX19fVFByUHkgLmF1dGhvcl9faW1hZ2VfX18xb0ZYbCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjM5YzEyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7O0FBRUQsd0JBQVE7O0FBRVIsMkJBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcENcIixcImZpbGVcIjpcImF1dGhvci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC01MHB4O1xcbn1cXG5cXG4udG9wIHsgfVxcblxcbi5ib3R0b20geyB9XFxuXFxuLmltYWdlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWRfc3BlZWRtb2RlIC5pbWFnZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjM5YzEyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJhdXRob3JfX3Jvb3RfX18yNTl0NFwiLFxuXHRcInRvcFwiOiBcImF1dGhvcl9fdG9wX19fMmxEanVcIixcblx0XCJib3R0b21cIjogXCJhdXRob3JfX2JvdHRvbV9fXzFNLWo0XCIsXG5cdFwiaW1hZ2VcIjogXCJhdXRob3JfX2ltYWdlX19fMW9GWGxcIixcblx0XCJpZF9zcGVlZG1vZGVcIjogXCJhdXRob3JfX2lkX3NwZWVkbW9kZV9fX1RQclB5XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhLi9zcmMvdmlld3Mvd29ya3NwYWNlL2F1dGhvci9hdXRob3IuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbl9fcm9vdF9fXzFVbFdZIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5idXR0b25fX2J1dHRvbl9fX2xSSGxUIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zM3B4O1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xcbn1cXG5cXG4uYnV0dG9uX19idXR0b25fX19sUkhsVDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDE1NywgODcpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkNcIixcImZpbGVcIjpcImJ1dHRvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIG1hcmdpbjogMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDE1NywgODcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJidXR0b25fX3Jvb3RfX18xVWxXWVwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl9fYnV0dG9uX19fbFJIbFRcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL34vYXV0b3ByZWZpeGVyLWxvYWRlciEuL3NyYy92aWV3cy93b3Jrc3BhY2UvYnV0dG9uL2J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VsbF9fcm9vdF9fXzF4Vmt0IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jZWxsX19jZWxsX19fM0xPTmgge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XFxufVxcblxcbi5jZWxsX190b3BfX18yMHlVQiB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbF9faGFsZl9fXzJTVUJuIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jZWxsX19mdWxsX19fM2ZpdmkgeyB9XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fMTBHS2ggLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbF9faXNfYm90dG9tX19fMlR6VUEgLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2xlZnRfX19YaGR0YyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2VsbF9faXNfcmlnaHRfX18xMEdLaCxcXG4uY2VsbF9faXNfbGVmdF9fX1hoZHRjIHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5jZWxsX19pc190b3BfX18xWFRrbyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDtcXG59XFxuXFxuLmNlbGxfX2lzX3Njb3Jlc19fXzF0RFNWIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fMVhUa28gLmNlbGxfX2NlbGxfX18zTE9OaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkOztBQUVELHVCQUFTOztBQUVUO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0lBRUksWUFBWTtDQUNmOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0NBQ3BCXCIsXCJmaWxlXCI6XCJjZWxsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaGFsZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZnVsbCB7IH1cXG5cXG4uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2JvdHRvbSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2xlZnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX3JpZ2h0LFxcbi5pc19sZWZ0IHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5pc190b3Age1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwMDA7XFxufVxcblxcbi5pc19zY29yZXMge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5pc190b3AgLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiY2VsbF9fcm9vdF9fXzF4Vmt0XCIsXG5cdFwiY2VsbFwiOiBcImNlbGxfX2NlbGxfX18zTE9OaFwiLFxuXHRcInRvcFwiOiBcImNlbGxfX3RvcF9fXzIweVVCXCIsXG5cdFwiaGFsZlwiOiBcImNlbGxfX2hhbGZfX18yU1VCblwiLFxuXHRcImZ1bGxcIjogXCJjZWxsX19mdWxsX19fM2ZpdmlcIixcblx0XCJpc19yaWdodFwiOiBcImNlbGxfX2lzX3JpZ2h0X19fMTBHS2hcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX18yVHpVQVwiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fWGhkdGNcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX18xWFRrb1wiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fXzF0RFNWXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3Jvdy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvd19fcm9vdF9fXzFZeUtOIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yb3dfX2lzX2hlYWRfX18zUDdONyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5yb3dfX2lzX2N1cnJlbnRfX180ZTJuaSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjQ2KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSx3Q0FBd0M7Q0FDM0NcIixcImZpbGVcIjpcInJvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlzX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uaXNfY3VycmVudCB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjQ2KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicm93X19yb290X19fMVl5S05cIixcblx0XCJpc19oZWFkXCI6IFwicm93X19pc19oZWFkX19fM1A3TjdcIixcblx0XCJpc19jdXJyZW50XCI6IFwicm93X19pc19jdXJyZW50X19fNGUybmlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL34vYXV0b3ByZWZpeGVyLWxvYWRlciEuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGVfX3Jvb3RfX18xN21VRCB7XFxuICAgIHdpZHRoOiA5NTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM5cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZFwiLFwiZmlsZVwiOlwidGFibGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDk1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzlweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwidGFibGVfX3Jvb3RfX18xN21VRFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud29ya3NwYWNlX19yb290X19fbm5PTmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjMsIDIyMSwgMC40Nyk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggIzgwOThBNztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy93b3Jrc3BhY2Uvd29ya3NwYWNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCXCIsXCJmaWxlXCI6XCJ3b3Jrc3BhY2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTYzLCAyMjEsIDAuNDcpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM4MDk4QTc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIndvcmtzcGFjZV9fcm9vdF9fX25uT05hXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGE5N2MzOGY5Y2I4OWUzNTMwNTcyNDlmZTg3NGZhN2IuY3NzXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXIhLi9+L2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vYXV0b3ByZWZpeGVyLWxvYWRlciEuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWVmN2E2YWRhZTI3MjZlMjMxNjNlNjUwOTAwZmJjYjkucG5nXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWFnZXMvc3BlZWRtb2RlLWljb24ucG5nXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdFwiIzFhYmM5Y1wiLFxuXHRcIiMzMWNkNzNcIixcblx0XCIjMzQ5OGRiXCIsXG5cdFwiIzliNTliNlwiLFxuXHRcIiMzNDQ5NWVcIixcblx0XCIjMTZhMDg1XCIsXG5cdFwiIzI3YWU2MFwiLFxuXHRcIiMyYjg0YmZcIixcblx0XCIjOGU0NGFkXCIsXG5cdFwiIzJjM2U1MFwiLFxuXHRcImYxYzQwZlwiLFxuXHRcIiNlNjdlMjJcIixcblx0XCIjZTc0YzNjXCIsXG5cdFwiI2YzOWMxMlwiLFxuXHRcIiNkMzU0MDBcIixcblx0XCIjYzAzOTJiXCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9jb2xvcnMuanNvblxuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWRkU3R5bGVVcmwoY3NzVXJsKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHN0eWxlRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRzdHlsZUVsZW1lbnQuaHJlZiA9IGNzc1VybDtcclxuXHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0aWYobW9kdWxlLmhvdCkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzc1VybCkge1xyXG5cdFx0XHRpZih0eXBlb2YgY3NzVXJsID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50LmhyZWYgPSBjc3NVcmw7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGVhZC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZVVybC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vZ2FtZS1mb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2dhbWUtZm9ybS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vbW9kYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vbW9kYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vcm9sbGJhbGwtYW5pbWF0aW9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9hdXRob3IuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2F1dGhvci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9hdXRob3IuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9hdXRob3IvYXV0aG9yLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2J1dHRvbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vYnV0dG9uLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL2J1dHRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL2J1dHRvbi9idXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9yb3cuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9yb3cuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3RhYmxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi90YWJsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3RhYmxlL3RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3dvcmtzcGFjZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vd29ya3NwYWNlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL3dvcmtzcGFjZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgcmVmZXJlbmNlIHRvIGEgY3NzIGZpbGUgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8bGluaz4gdGFnXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvVHVjaC9Qcm9qZWN0cy90aGUtYm93bGluZy1nYW1lL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVVcmwuanNcIikoXG5cdHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKVxuKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZpbGUtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtbG9hZGVyL2xpYi9leHRyYWN0TG9hZGVyLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR1cGRhdGUocmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvZmlsZS1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC1sb2FkZXIvbGliL2V4dHJhY3RMb2FkZXIuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpKTtcblx0fSk7XG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXY+ICcsIHdvcmtzcGFjZUhUTUwgLCcgPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gPGRpdj4gJywgcm9sbGJhbGxBbmltYXRpb25IVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJyAnLCBjbi53aW5uZXIgLCdcIj4nLCBmaW5hbFJlc3VsdHNbMF0ubmFtZSAsJyAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdj4gJyk7IGZpbmFsUmVzdWx0cy5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPicsIHBsYXllci5uYW1lICwnIC0gJywgcGxheWVyLnNjb3JlcyAsJzwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGJ1dHRvbiBkYXRhLWZpbmFsLXJlc3VsdHM9XCJuZXdcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+TmV3IGdhbWU8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0XG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+VGhlIEJvd2xpbmcgR2FtZTwvZGl2PiAnKTsgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIGluZGV4KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgaW5kZXggLCdcIiB2YWx1ZT1cIicsIHBsYXllciAsJ1wiPiA8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnICcpOyBpZiAocGxheWVycy5sZW5ndGggPCA1KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgcGxheWVycy5sZW5ndGggLCdcIiB2YWx1ZT1cIlwiPiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxidXR0b24gZGF0YS1nYW1lLWZvcm09XCJwbGF5XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPlBsYXk8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdFxuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCcgYW5pbWF0ZWRcIj4gPGRpdiBkYXRhLW1vZGFsPVwiY2xvc2VcIiBjbGFzcz1cIicsIGNuLmNsb3NlICwnXCI+w5c8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmNvbnRlbnQgLCdcIj4gJywgY29udGVudEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JywgbGFzdFJlc3VsdC5jb2xvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24udGV4dCAsJ1wiPiAnLCBsYXN0UmVzdWx0LnZhbHVlICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm9sbGJhbGwtYW5pbWF0aW9uL3JvbGxiYWxsLWFuaW1hdGlvbi5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi50b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmJvdHRvbSAsJ1wiPkZsb3JpYW4gRkVJQ0hUSU5HRVI8L2Rpdj4gPGltZyB0aXRsZT1cIlRvZ2dsZSBzcGVlZCBtb2RlXCIgY2xhc3M9XCInLCBjbi5pbWFnZSAsJ1wiIHNyYz1cIicsIGltZ1NyYyAsJ1wiIGRhdGEtYXV0aG9yPVwic3BlZWRtb2RlXCIvPiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL2F1dGhvci9hdXRob3IuanN0XG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxidXR0b24gY2xhc3M9XCInLCBjbi5idXR0b24gLCdcIiBkYXRhLW1haW49XCJyb2xsXCI+IFJPTEwgQkFMTCE8L2J1dHRvbj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS9idXR0b24vYnV0dG9uLmpzdFxuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmNlbGwgLCdcIj4gJyk7IGlmIChjZWxsLnRleHQpIHsgXG5wLnB1c2goJyAnLCBjZWxsLnRleHQgLCcgJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnRvcCAsJyBjbGVhcmZpeFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGQgLCdcIj5JSTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtbWlkIGNsZWFyZml4XCI+ICcpOyBpZiAoY2VsbFswXSA9PT0gJ1gnKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLmZ1bGwgLCc+XCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzBdICwnPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzFdICwnPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLWJvdFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+JywgY2VsbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS9yb3cvY2VsbC9jZWxsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCcgY2xlYXJmaXhcIj4gJywgY2VsbHNIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy93b3Jrc3BhY2UvdGFibGUvcm93L3Jvdy5qc3RcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gJywgcm93c0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3dvcmtzcGFjZS90YWJsZS90YWJsZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gPGRpdj4gJywgYXV0aG9ySFRNTCAsJyA8L2Rpdj4gPGRpdj4gJywgdGFibGVIVE1MICwnIDwvZGl2PiA8ZGl2PiAnLCBidXR0b25IVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvd29ya3NwYWNlL3dvcmtzcGFjZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==