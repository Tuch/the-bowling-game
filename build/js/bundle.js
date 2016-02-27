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
	
	
	var _index = __webpack_require__(22);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(23);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _virtualDom = __webpack_require__(13);
	
	var vdom = _interopRequireWildcard(_virtualDom);
	
	var _app = __webpack_require__(6);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _appReducer = __webpack_require__(3);
	
	var _appReducer2 = _interopRequireDefault(_appReducer);
	
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
	                _this.reduceAction(_appReducer2.default.tickTimer());
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
	                    this.reduceAction(_appReducer2.default.updatePlayerName(data));
	                    break;
	            }
	        }
	    }, {
	        key: 'onFinalResultsClick',
	        value: function onFinalResultsClick(key) {
	            switch (key) {
	                case 'new':
	                    this.reduceAction(_appReducer2.default.newGame());
	                    break;
	            }
	        }
	    }, {
	        key: 'onRollClick',
	        value: function onRollClick(key) {
	            switch (key) {
	                case 'roll':
	                    this.reduceAction(_appReducer2.default.throwBall());
	
	                    if (this.state.play.theEnd) {
	                        this.reduceAction(_appReducer2.default.endGame());
	                    }
	                    break;
	            }
	        }
	    }, {
	        key: 'onGameFormClick',
	        value: function onGameFormClick(key) {
	            switch (key) {
	                case 'play':
	                    this.reduceAction(_appReducer2.default.playGame());
	                    break;
	            }
	        }
	    }, {
	        key: 'onModalClick',
	        value: function onModalClick(key) {
	            switch (key) {
	                case 'close':
	                    this.reduceAction(_appReducer2.default.closeModal());
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _gameModalReducer = __webpack_require__(4);
	
	var _gameModalReducer2 = _interopRequireDefault(_gameModalReducer);
	
	var _gamePlayReducer = __webpack_require__(5);
	
	var _gamePlayReducer2 = _interopRequireDefault(_gamePlayReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var types = {
	    TICK_TIMER: 'TICK_TIMER',
	    THROW_BALL: 'THROW_BALL',
	    CLOSE_MODAL: 'CLOSE_MODAL',
	    PLAY_GAME: 'PLAY_GAME',
	    NEW_GAME: 'NEW_GAME',
	    END_GAME: 'END_GAME',
	    UPDATE_PLAYER_NAME: 'UPDATE_PLAYER_NAME'
	};
	
	var gameModalReducer = (0, _gameModalReducer2.default)(types);
	var gamePlayReducer = (0, _gamePlayReducer2.default)(types);
	
	function getInitialState() {
	    return {};
	}
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? getInitialState() : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    state.play = gamePlayReducer(state.play, action);
	    state.modal = gameModalReducer(state.modal, action);
	
	    return state;
	}
	
	var actions = {};
	
	actions.updatePlayerName = function (data) {
	    return {
	        type: types.UPDATE_PLAYER_NAME,
	        data: data
	    };
	};
	
	actions.throwBall = function () {
	    return {
	        type: types.THROW_BALL
	    };
	};
	
	actions.playGame = function () {
	    return {
	        type: types.PLAY_GAME
	    };
	};
	
	actions.newGame = function () {
	    return {
	        type: types.NEW_GAME
	    };
	};
	
	actions.endGame = function () {
	    return {
	        type: types.END_GAME
	    };
	};
	
	actions.closeModal = function () {
	    return {
	        type: types.CLOSE_MODAL
	    };
	};
	
	actions.tickTimer = function () {
	    return {
	        type: types.TICK_TIMER
	    };
	};
	
	//Object.assign(reducer, types);
	Object.assign(reducer, actions);
	
	exports.default = reducer;

/***/ },
/* 4 */
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
	
	function getInitialState() {
	    var state = createGameFormState();
	    state.isOpen = true;
	
	    return state;
	}
	
	function reducerCreate(types) {
	    return function () {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? getInitialState() : arguments[0];
	        var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        switch (action.type) {
	            case types.CLOSE_MODAL:
	                state.isOpen = false;
	                break;
	            case types.PLAY_GAME:
	                state.isOpen = false;
	                break;
	            case types.END_GAME:
	                state = createFinalResultsState();
	                state.isOpen = true;
	                break;
	            case types.NEW_GAME:
	                state = createGameFormState();
	                state.isOpen = true;
	                break;
	        }
	
	        return state;
	    };
	}
	
	exports.default = reducerCreate;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _names = __webpack_require__(38);
	
	var _names2 = _interopRequireDefault(_names);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	        players: players || [getRandomName(), getRandomName(), getRandomName(), getRandomName()],
	        currentPlayer: 0,
	        currentFrame: 0,
	        startTime: new Date(),
	        diffTime: '00:00',
	        theEnd: false,
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
	
	function createRows(state) {
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
	
	    return rows;
	}
	
	function createFinalResults(state) {
	    return state.players.map(function (player, index) {
	        return {
	            name: player,
	            scores: sum(state.frames.map(function (frame) {
	                return frame[index].total;
	            }))
	        };
	    }).sort(function (a, b) {
	        return b.scores - a.scores;
	    });
	}
	
	function prepareView(state) {
	    state.rows = createRows(state);
	    state.finalResults = createFinalResults(state);
	
	    return state;
	}
	
	function sum(arr) {
	    return arr.reduce(function (acc, val) {
	        return acc + parseInt(val || 0, 10);
	    }, 0);
	}
	
	function nextPlayer(state) {
	    if (isLastFrame(state) && isLastPlayer(state)) {
	        state.theEnd = true;
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
	    if (state.theEnd) {
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
	
	    var rollsSum = sum(frame.map(function (roll) {
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
	
	        return prepareView(state);
	    };
	}
	
	exports.default = reducerCreate;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    return (0, _app4.default)({
	        tableHTML: (0, _table2.default)(app),
	        modalHTML: (0, _modal2.default)(app),
	        cn: _app2.default
	    });
	};
	
	var _table = __webpack_require__(12);

	var _table2 = _interopRequireDefault(_table);

	var _modal = __webpack_require__(10);

	var _modal2 = _interopRequireDefault(_modal);

	var _app = __webpack_require__(24);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(31);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
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
	
	var _cell = __webpack_require__(25);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _cell3 = __webpack_require__(32);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (play) {
	    return (0, _finalResults4.default)({
	        cn: _finalResults2.default,
	        finalResults: play.finalResults
	    });
	};
	
	var _finalResults = __webpack_require__(26);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _finalResults3 = __webpack_require__(33);

	var _finalResults4 = _interopRequireDefault(_finalResults3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (play) {
	    return (0, _gameForm4.default)({
	        cn: _gameForm2.default,
	        players: play.players
	    });
	};
	
	var _gameForm = __webpack_require__(27);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(34);

	var _gameForm4 = _interopRequireDefault(_gameForm3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    var contentHTML = '';
	
	    switch (app.modal.name) {
	        case 'game-form':
	            contentHTML = (0, _gameForm2.default)(app.play);
	            break;
	        case 'final-results':
	            contentHTML = (0, _finalResults2.default)(app.play);
	            break;
	    }
	
	    return (0, _modal4.default)({
	        cn: prepareCN(app),
	        contentHTML: contentHTML
	    });
	};
	
	var _gameForm = __webpack_require__(9);
	
	var _gameForm2 = _interopRequireDefault(_gameForm);
	
	var _finalResults = __webpack_require__(8);
	
	var _finalResults2 = _interopRequireDefault(_finalResults);
	
	var _modal = __webpack_require__(28);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _modal3 = __webpack_require__(35);
	
	var _modal4 = _interopRequireDefault(_modal3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prepareCN(state) {
	    var root = [_modal2.default.root];
	
	    if (state.modal.style) {
	        root.push(_modal2.default['style_' + state.modal.style]);
	    } else {
	        root.push(_modal2.default.info);
	    }
	
	    if (!state.modal.isOpen) {
	        root.push('hidden');
	    }
	
	    _modal2.default._root = root.join(' ');
	
	    return _modal2.default;
	}

/***/ },
/* 11 */
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
	
	var _cell = __webpack_require__(7);

	var _cell2 = _interopRequireDefault(_cell);

	var _row = __webpack_require__(29);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(36);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    return (0, _table4.default)({
	        rowsHTML: app.play.rows.map(_row2.default).join(''),
	        cn: _table2.default
	    });
	};
	
	var _row = __webpack_require__(11);

	var _row2 = _interopRequireDefault(_row);

	var _table = __webpack_require__(30);

	var _table2 = _interopRequireDefault(_table);

	var _table3 = __webpack_require__(37);

	var _table4 = _interopRequireDefault(_table3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n", "", {"version":3,"sources":["/./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,UAAU;IACV,0BAA0B;CAC7B;;AAED;IACI,uBAAuB;CAC1B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;CACf;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,gBAAgB;IAChB,aAAa;CAChB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,wBAAwB;IACxB,0BAA0B;CAC7B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE;IACE,WAAW;IACX,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF;;AAED;IACI;QACI,gCAAgC;KACnC;;IAED;QACI,mCAAmC;KACtC;;IAED;QACI,kCAAkC;KACrC;CACJ","file":"main.css","sourcesContent":["body {\n    font-family: 'Open Sans', sans-serif;\n    margin: 0;\n    background-color: #2980b9;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    -webkit-appearance: caret;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".app__root___3AvEu {\n}\n.app__image___6L2Cb {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___3LXHk {\n    position:relative;\n}\n\n.app__author___1_siw {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.app__author__top___3GHP1 { }\n\n.app__author__bottom___1l9p1 { }\n\n.app__button___1LwDt {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.app__button___1LwDt:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: app__shake___1ldeC;\n}\n\n.app__workspace___32Lgs {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n}\n\n.app__table___1dZrV {\n    width: 940px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n", "", {"version":3,"sources":["/./src/views/app/app.css"],"names":[],"mappings":"AAAA;CACC;AACD;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;;AAGD,6BAAgB;;AAEhB,gCAAmB;;AAEnB;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,oBAAoB;CACvB;;AAED;IACI,0BAA0B;IAC1B,mCAAsB;CACzB;;AAED;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd","file":"app.css","sourcesContent":[".root {\n}\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.author__top { }\n\n.author__bottom { }\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.button:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: shake;\n}\n\n.workspace {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n}\n\n.table {\n    width: 940px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"table.css","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.workspace ,'"> <div class="', cn.author ,'"> <div class="', cn.author__top ,'">by Alex AFONIN for</div> <div class="', cn.author__bottom ,'">Florian FEICHTINGER</div> </div> <div class="', cn.table ,'"> ', tableHTML ,' </div> </div> <div class="', cn.button__wp ,'"> <button class="', cn.button ,'" data-main="roll"> ROLL BALL!</button> </div> <div> ', modalHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,'">BOWLING.JS</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', players.length ,'" value=""> </div> <div class="', cn.row ,'"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated bounceIn"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.row ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 38 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTI3ZGY1MWJiOWE0NjIxZWIxMjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzP2U5MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzP2ExMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3M/ZmU2MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcz9hM2VkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzcz9jZWVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3M/MzkwMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3M/OTY5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzPzJmMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvdGFibGUuanN0Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGUyN2RmNTFiYjlhNDYyMWViMTI2XG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgY24gZnJvbSAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICogYXMgdmRvbSBmcm9tICcuL3ZpcnR1YWwtZG9tLmpzJztcblxuLy8gcmVhY3Qgc3R5bGVcbmltcG9ydCBhcHAgZnJvbSAnLi92aWV3cy9hcHAvYXBwLmpzJztcbi8vIHJlZHV4IHN0eWxlXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMnO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChzdGF0ZSkge1xuICAgICAgICB0aGlzLmluaXRTdGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIC5pbml0QXBwTm9kZSgpXG4gICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgICAgIC5pbml0R2FtZVRpbWVyKClcbiAgICAgICAgICAgIC5hc3NpZ25FdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0U3RhdGUgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0QXBwTm9kZSAoKSB7XG4gICAgICAgIHRoaXMuYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0R2FtZVRpbWVyICgpIHtcbiAgICAgICAgdGhpcy5nYW1lVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnRpY2tUaW1lcigpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlZHVjZUFjdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXNzaWduRXZlbnRzICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uRG9jdW1lbnRGb2N1c091dC5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFpbicpKSB7XG4gICAgICAgICAgICB0aGlzLm9uUm9sbENsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZUZvcm1DbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kYWxDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maW5hbC1yZXN1bHRzJykpIHtcbiAgICAgICAgICAgIHRoaXMub25GaW5hbFJlc3VsdHNDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Rm9jdXNPdXQgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1mb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25HYW1lRm9ybUZvY3VzT3V0KGtleSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybUZvY3VzT3V0IChrZXksIGRhdGEpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnVwZGF0ZVBsYXllck5hbWUoZGF0YSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbmFsUmVzdWx0c0NsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5uZXdHYW1lKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJvbGxDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdyb2xsJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnRocm93QmFsbCgpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBsYXkudGhlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIuZW5kR2FtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR2FtZUZvcm1DbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnBsYXlHYW1lKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIuY2xvc2VNb2RhbCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IEhUTUwgPSBhcHAodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBsZXQgdk5vZGUgPSB2ZG9tLnZOb2RlRnJvbUhUTUwoSFRNTCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZOb2RlICYmIHRoaXMubm9kZSkge1xuICAgICAgICAgICAgICAgIHZkb20uYXBwbHlQYXRjaCh0aGlzLm5vZGUsIHZkb20uZGlmZih0aGlzLnZOb2RlLCB2Tm9kZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSB2ZG9tLmNyZWF0ZUVsZW1lbnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwTm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy52Tm9kZSA9IHZOb2RlO1xuICAgICAgICAgICAgdGhpcy5maWxsTm9kZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmlsbE5vZGVzKCkge1xuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkIC5sZWZ0LWNvbCAuY2VsbCcpWzBdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubmV3IEFwcChyZWR1Y2VyKCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBnYW1lTW9kYWxSZWR1Y2VyQ3JlYXRlciBmcm9tICcuL2dhbWVNb2RhbFJlZHVjZXInO1xuaW1wb3J0IGdhbWVQbGF5UmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lUGxheVJlZHVjZXInO1xuXG5sZXQgdHlwZXMgPSB7XG4gICAgVElDS19USU1FUjogJ1RJQ0tfVElNRVInLFxuICAgIFRIUk9XX0JBTEw6ICdUSFJPV19CQUxMJyxcbiAgICBDTE9TRV9NT0RBTDogJ0NMT1NFX01PREFMJyxcbiAgICBQTEFZX0dBTUU6ICdQTEFZX0dBTUUnLFxuICAgIE5FV19HQU1FOiAnTkVXX0dBTUUnLFxuICAgIEVORF9HQU1FOiAnRU5EX0dBTUUnLFxuICAgIFVQREFURV9QTEFZRVJfTkFNRTogJ1VQREFURV9QTEFZRVJfTkFNRSdcbn07XG5cbmxldCBnYW1lTW9kYWxSZWR1Y2VyID0gZ2FtZU1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVQbGF5UmVkdWNlciA9IGdhbWVQbGF5UmVkdWNlckNyZWF0ZXIodHlwZXMpO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbiA9IHt9KSB7XG4gICAgc3RhdGUucGxheSA9IGdhbWVQbGF5UmVkdWNlcihzdGF0ZS5wbGF5LCBhY3Rpb24pO1xuICAgIHN0YXRlLm1vZGFsID0gZ2FtZU1vZGFsUmVkdWNlcihzdGF0ZS5tb2RhbCwgYWN0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxubGV0IGFjdGlvbnMgPSB7fTtcblxuYWN0aW9ucy51cGRhdGVQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUExBWUVSX05BTUUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcblxuYWN0aW9ucy50aHJvd0JhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVEhST1dfQkFMTFxuICAgIH07XG59O1xuXG5hY3Rpb25zLnBsYXlHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlBMQVlfR0FNRVxuICAgIH07XG59O1xuXG5hY3Rpb25zLm5ld0dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5lbmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkVORF9HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5hY3Rpb25zLnRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cbi8vT2JqZWN0LmFzc2lnbihyZWR1Y2VyLCB0eXBlcyk7XG5PYmplY3QuYXNzaWduKHJlZHVjZXIsIGFjdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZmluYWwtcmVzdWx0cycsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnYmx1ZScsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgbGV0IHN0YXRlID0gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpO1xuICAgIHN0YXRlLmlzT3BlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuQ0xPU0VfTU9EQUw6XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkVORF9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9nYW1lTW9kYWxSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IG5hbWVzIGZyb20gJy4vbmFtZXMuanNvbic7XG5cbmNvbnN0IEZSQU1FU19MRU5HVEggPSAxMDtcblxuZnVuY3Rpb24gcmFuZ2UgKGxlbmd0aCkge1xuICAgIHJldHVybiBBcnJheShsZW5ndGgpLmpvaW4oJyAnKS5zcGxpdCgnICcpLm1hcCgodiwgaSkgPT4gaSk7XG59XG5cbmZ1bmN0aW9uIHBhZCAodmFsdWUsIGxlbmd0aCkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgMjtcblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNEaWZmVGltZSAoc3RhdGUpIHtcbiAgICBsZXQgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIHN0YXRlLnN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgICAgcmlnaHRTaWRlID0gdG90YWxTZWNvbmRzICUgNjAsXG4gICAgICAgIGxlZnRTaWRlID0gKHRvdGFsU2Vjb25kcyAtIHJpZ2h0U2lkZSkgLyA2MDtcblxuICAgIHN0YXRlLmRpZmZUaW1lID0gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21OYW1lICgpIHtcbiAgICByZXR1cm4gbmFtZXNbcmFuZChuYW1lcy5sZW5ndGggLSAxKV07XG59XG5cbmZ1bmN0aW9uIHJhbmQgKG1heCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5mdW5jdGlvbiB0aHJvd0JhbGwgKHBpbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gW3JhbmQocGlucyldO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAocGxheWVycykge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgcGxheWVyczogcGxheWVycyB8fCBbZ2V0UmFuZG9tTmFtZSgpLCBnZXRSYW5kb21OYW1lKCksIGdldFJhbmRvbU5hbWUoKSwgZ2V0UmFuZG9tTmFtZSgpXSxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICB0aGVFbmQ6IGZhbHNlLFxuICAgICAgICBsYXN0UmVzdWx0OiAnJ1xuICAgIH07XG5cbiAgICBzdGF0ZS5mcmFtZXMgPSBjcmVhdGVGcmFtZXMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZXMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGUucGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3dzIChzdGF0ZSkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHJvdyA9IHtcbiAgICAgICAgaXNIZWFkOiB0cnVlLFxuICAgICAgICBjb2xzOiBzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiBmcmFtZS50aXRsZSxcbiAgICAgICAgICAgIGlzUmlnaHQ6IGluZGV4ID09PSBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGlzVG9wOiB0cnVlXG4gICAgICAgIH0pKVxuICAgIH07XG5cbiAgICByb3cuY29scy51bnNoaWZ0KHt0ZXh0OnN0YXRlLmRpZmZUaW1lLCBpc0xlZnQ6IHRydWUsIGlzVG9wOiB0cnVlfSk7XG5cbiAgICByb3dzLnB1c2gocm93KTtcblxuICAgIGxldCBwUm93cyA9IHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIHBJbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29scyA9IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBmSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCByb2xscyA9IGZyYW1lW3BJbmRleF07XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHtcbiAgICAgICAgICAgICAgICAwOiByb2xsc1swXSA/IHJvbGxzWzBdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgMTogcm9sbHNbMV0gPyByb2xsc1sxXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIHRvdGFsOiByb2xscy50b3RhbCxcbiAgICAgICAgICAgICAgICBpc1JpZ2h0OiBmSW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBpc1Njb3JlczogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHMudW5zaGlmdCh7XG4gICAgICAgICAgICB0ZXh0OiBwbGF5ZXIsXG4gICAgICAgICAgICBpc0xlZnQ6IHRydWUsXG4gICAgICAgICAgICBpc0JvdHRvbTogcEluZGV4ID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgY29scyB9O1xuICAgIH0pO1xuXG4gICAgcm93cy5wdXNoKC4uLnBSb3dzKTtcblxuICAgIHJldHVybiByb3dzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHMgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXIsXG4gICAgICAgICAgICBzY29yZXM6IHN1bShzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSkgPT4gZnJhbWVbaW5kZXhdLnRvdGFsKSlcbiAgICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLnNjb3JlcyAtIGEuc2NvcmVzO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVmlldyAoc3RhdGUpIHtcbiAgICBzdGF0ZS5yb3dzID0gY3JlYXRlUm93cyhzdGF0ZSk7XG4gICAgc3RhdGUuZmluYWxSZXN1bHRzID0gY3JlYXRlRmluYWxSZXN1bHRzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gc3VtIChhcnIpIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KHZhbCB8fCAwLCAxMCk7XG4gICAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRQbGF5ZXIgKHN0YXRlKSB7XG4gICAgaWYgKGlzTGFzdEZyYW1lKHN0YXRlKSAmJiBpc0xhc3RQbGF5ZXIoc3RhdGUpKSB7XG4gICAgICAgIHN0YXRlLnRoZUVuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEZyYW1lID0gc3RhdGUuY3VycmVudEZyYW1lIDwgc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEgPyBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxIDogc3RhdGUuY3VycmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRCb251c0ZyYW1lcyAoc3RhdGUpIHtcbiAgICBsZXQgZnJhbWVzID0gc3RhdGUuZnJhbWVzLnNsaWNlKE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpLCBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxKS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmFtZVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGZyYW1lcy5sZW5ndGgtLTtcblxuICAgIGxldCByID0gMiAtIGN1cnJGcmFtZS5sZW5ndGg7XG4gICAgbGV0IGJvbnVzRnJhbWVzID0gW107XG5cbiAgICB3aGlsZSAociAmJiBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAociA9PT0gMSAmJiBmcmFtZVswXS52YWx1ZSA9PT0gMTApIHx8XG4gICAgICAgICAgICAociA9PT0gMiAmJiAoZnJhbWUudG90YWwgPT09IDEwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib251c0ZyYW1lcy51bnNoaWZ0KGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIgLT0gZnJhbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBib251c0ZyYW1lcztcbn1cblxuZnVuY3Rpb24gaXNMYXN0UGxheWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdEZyYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RnJhbWUgPT09IEZSQU1FU19MRU5HVEggLSAxO1xufVxuXG5mdW5jdGlvbiBvblRpY2tUaW1lciAoc3RhdGUpIHtcbiAgICByZXR1cm4gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gb25UaHJvd0JhbGwgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnRoZUVuZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgbGV0IGZyYW1lID0gc3RhdGUuZnJhbWVzW3N0YXRlLmN1cnJlbnRGcmFtZV1bc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgbGV0IHBpbnMgPSBGUkFNRVNfTEVOR1RIO1xuXG4gICAgaWYgKGZyYW1lWzBdICYmIHBpbnMgIT09IGZyYW1lWzBdLnZhbHVlKSB7XG4gICAgICAgIHBpbnMgLT0gZnJhbWVbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGJvbnVzRnJhbWVzID0gZ2V0Qm9udXNGcmFtZXMoc3RhdGUpO1xuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHRocm93QmFsbChwaW5zKSwgdGhyb3dCYWxsKHBpbnMpKTtcblxuICAgIGJvbnVzRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGZyYW1lLnRvdGFsICs9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgbGV0IHJvbGwgPSB7IHZhbHVlIH07XG5cbiAgICBmcmFtZS5wdXNoKHJvbGwpO1xuXG4gICAgbGV0IHJvbGxzU3VtID0gc3VtKGZyYW1lLm1hcChyb2xsID0+IHJvbGwudmFsdWUpKTtcbiAgICBmcmFtZS50b3RhbCA9IHJvbGxzU3VtO1xuXG4gICAgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAocm9sbC52YWx1ZSA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnWCc7XG5cbiAgICAgICAgICAgIGlmICghaXNMYXN0RnJhbWUoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChmcmFtZS50b3RhbCA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnLyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgcm9sbHNTdW0gPj0gMTApIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMykge1xuICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcblxuICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5sYXN0UmVzdWx0ID0gdmFsdWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uVXBkYXRlUGxheWVyTmFtZSAoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcbiAgICBzdGF0ZS5wbGF5ZXJzID0gc3RhdGUucGxheWVycy5maWx0ZXIocGxheWVyID0+IHBsYXllcik7XG5cbiAgICBpZiAoIXN0YXRlLnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIHN0YXRlLnBsYXllcnMucHVzaChnZXRSYW5kb21OYW1lKCkpO1xuICAgIH1cblxuICAgIHN0YXRlLmZyYW1lcyA9IGNyZWF0ZUZyYW1lcyhzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uUGxheUdhbWUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldEluaXRpYWxTdGF0ZShzdGF0ZS5wbGF5ZXJzKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSAodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblBsYXlHYW1lKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USUNLX1RJTUVSOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRocm93QmFsbChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVwYXJlVmlldyhzdGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHRhYmxlIGZyb20gJy4uL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9hcHAuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgdGFibGVIVE1MOiB0YWJsZShhcHApLFxuICAgICAgICBtb2RhbEhUTUw6IG1vZGFsKGFwcCksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04oc3RhdGUpIHtcbiAgICBsZXQgcm9vdCA9IGNuLl9yb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKHN0YXRlLmlzTGVmdCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfbGVmdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzUmlnaHQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3JpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3RvcCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzQm90dG9tKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19ib3R0b20pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1Njb3Jlcykge1xuICAgICAgICByb290LnB1c2goY24uaXNfc2NvcmVzKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgIGNuOiBwcmVwYXJlQ04oY2VsbClcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2ZpbmFsLXJlc3VsdHMuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZpbmFsLXJlc3VsdHMuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBsYXkpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIGZpbmFsUmVzdWx0czogcGxheS5maW5hbFJlc3VsdHNcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2dhbWUtZm9ybS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ2FtZS1mb3JtLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwbGF5KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IGNuLFxuICAgICAgICBwbGF5ZXJzOiBwbGF5LnBsYXllcnNcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanNcbiAqKi8iLCJpbXBvcnQgZ2FtZUZvcm0gZnJvbSAnLi4vZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyc7XG5pbXBvcnQgZmluYWxSZXN1bHRzIGZyb20gJy4uL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9tb2RhbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUubW9kYWwuc3R5bGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuWydzdHlsZV8nICsgc3RhdGUubW9kYWwuc3R5bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnB1c2goY24uaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5tb2RhbC5pc09wZW4pIHtcbiAgICAgICAgcm9vdC5wdXNoKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgbGV0IGNvbnRlbnRIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKGFwcC5tb2RhbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2dhbWUtZm9ybSc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGdhbWVGb3JtKGFwcC5wbGF5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMoYXBwLnBsYXkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogcHJlcGFyZUNOKGFwcCksXG4gICAgICAgIGNvbnRlbnRIVE1MXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4uL2NlbGwvY2VsbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9yb3cuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4uL3Jvdy9yb3cuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vdGFibGUuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYmxlLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogYXBwLnBsYXkucm93cy5tYXAocm93KS5qb2luKCcnKSxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzXG4gKiovIiwiY29uc3QgcHJvcE5hbWVzID0ge1xuICAgIHZhbHVlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkge1xuICAgIGlmIChIVE1MLnRyaW0oKSA9PT0gJycpe1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoSFRNTCk7XG4gICAgfVxuXG4gICAgLy8gRXZlcnl0aGluZyBleGNlcHQgaU9TIDcgU2FmYXJpLCBJRSA4LzksIEFuZHJpb2QgQnJvd3NlciA0LjEvNDNcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgbGV0IGhlYWQgPSBkb2MuY2hpbGROb2Rlc1swXTtcbiAgICBsZXQgYm9keSA9IGRvYy5jaGlsZE5vZGVzWzFdO1xuICAgIGxldCBub2RlO1xuXG4gICAgaWYgKG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgPSBib2R5LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZSkge1xuICAgIGxldCB2Tm9kZSA9IHtcbiAgICAgICAgdHlwZTogbm9kZS5ub2RlVHlwZVxuICAgIH07XG5cbiAgICBpZiAodk5vZGUudHlwZSA9PT0gMykge1xuICAgICAgICB2Tm9kZS5jb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbnMgPSBbXTtcbiAgICAgICAgdk5vZGUuYXR0cnMgPSB7fTtcbiAgICAgICAgdk5vZGUudGFnID0gbm9kZS50YWdOYW1lO1xuXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbnMucHVzaChjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUuY2hpbGROb2Rlc1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IG5vZGUuYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSAnY2xhc3NOYW1lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdk5vZGUuYXR0cnNbbmFtZV0gPSBub2RlLmF0dHJpYnV0ZXNbaV0udmFsdWUucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZOb2RlO1xufVxuXG5mdW5jdGlvbiBqb2luQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1trZXldLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAga2V5ID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGAke2tleX09XCIke2F0dHJ9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MID0gJycpIHtcbiAgICBsZXQgYXR0cnMgPSBqb2luQXR0cnModk5vZGUuYXR0cnMpO1xuXG4gICAgc3dpdGNoKHZOb2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gYCR7aW5uZXJIVE1MfWA7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBgPCR7dk5vZGUudGFnfSAke2F0dHJzfT4ke2lubmVySFRNTH08LyR7dk5vZGUudGFnfT5gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySFRNTCh2Tm9kZSkge1xuICAgIGxldCBpbm5lckhUTUwgPSAnJztcblxuICAgIGlmICh2Tm9kZS50eXBlICE9PSAzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlubmVySFRNTCArPSByZW5kZXJIVE1MKHZOb2RlLmNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckhUTUwgPSB2Tm9kZS5jb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwpO1xufVxuXG5leHBvcnQgbGV0IGRpZmYgPSBmdW5jdGlvbiAodk5vZGUxLCB2Tm9kZTIpIHtcbiAgICBpZiAodk5vZGUxICYmICF2Tm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfTk9ERSdcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCF2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnQUREX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnRhZyAhPT0gdk5vZGUyLnRhZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1JFUExBQ0VfTk9ERScsXG4gICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2Tm9kZTEudHlwZSA9PT0gMyB8fCB2Tm9kZTIudHlwZSA9PT0gMykge1xuICAgICAgICBpZiAodk5vZGUxLmNvbnRlbnQgIT09IHZOb2RlMi5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXR0cnMgPSBbXTtcbiAgICAgICAgbGV0IHBhdGNoID0ge307XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMi5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMSkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyVmFsID0gYXR0cjIuam9pbignICcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIxVmFsICE9PSBhdHRyMlZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMlZhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMikge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUxLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSBjRGlmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZTIuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXZOb2RlMS5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY0RpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0Y2guYXR0cnMgPSBhdHRycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXRjaCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgb3ApIHtcbiAgICBzd2l0Y2gob3AudHlwZSkge1xuICAgICAgICBjYXNlICdBRERfTk9ERSc6XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChvcC52Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUkVNT1ZFX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSBuZXdOb2RlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyT3BzKG5vZGUsIG9wcykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBvcHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wID0gb3BzW2ldO1xuICAgICAgICBsZXQgbmFtZSA9IG9wLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1Byb3AgPSBwcm9wTmFtZXNbbmFtZV07XG5cbiAgICAgICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NFVCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlW25hbWVdID0gb3AudmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIG9wLnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSRU1PVkUnOlxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtuYW1lXSA9ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBsZXQgYXBwbHlQYXRjaCA9IGZ1bmN0aW9uIChub2RlLCBwYXRjaGVzLCBwYXJlbnROb2RlKSB7XG4gICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGlmIChwYXRjaGVzLnR5cGUpIHtcbiAgICAgICAgbm9kZSA9IGFwcGx5UGF0Y2hPcChwYXJlbnROb2RlLCBub2RlLCBwYXRjaGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBhdGNoZXMpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhdHRycycpIHtcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJPcHMobm9kZSwgcGF0Y2hlc1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbHlQYXRjaChjaGlsZE5vZGVzW2tleV0sIHBhdGNoZXNba2V5XSwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbmV4cG9ydCBsZXQgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlRnJvbUhUTUwocmVuZGVySFRNTCh2Tm9kZSkpO1xufTtcblxuZXhwb3J0IGxldCB2Tm9kZUZyb21IVE1MID0gZnVuY3Rpb24gKEhUTUwpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGVGcm9tTm9kZShjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkpO1xufTtcblxuZXhwb3J0IGxldCBhcHBseVZOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHZOb2RlKSB7XG4gICAgcmV0dXJuIGFwcGx5UGF0Y2gobm9kZSwgZGlmZihjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpLCB2Tm9kZSkpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlydHVhbC1kb20uanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxufVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcXG4gICAgY29sb3I6IHJnYig0NCwgNjIsIDgwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHggMTFweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC43Nyk7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uYm91bmNlSW4ge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbi5zaGFrZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgZnJvbSwgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLFVBQVU7SUFDViwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0dBQ25DOztFQUVEO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3QjtDQUNGOztBQUVEO0lBQ0k7UUFDSSxnQ0FBZ0M7S0FDbkM7O0lBRUQ7UUFDSSxtQ0FBbUM7S0FDdEM7O0lBRUQ7UUFDSSxrQ0FBa0M7S0FDckM7Q0FDSlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjYXJldDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA2MiwgODApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweCAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjc3KTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5ib3VuY2VJbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICBmcm9tLCB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDcwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwX19yb290X19fM0F2RXUge1xcbn1cXG4uYXBwX19pbWFnZV9fXzZMMkNiIHtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC00MnB4O1xcbiAgICBsZWZ0OiAyNjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYXBwX19idXR0b25fX3dwX19fM0xYSGsge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmFwcF9fYXV0aG9yX19fMV9zaXcge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC01MHB4O1xcbn1cXG5cXG5cXG4uYXBwX19hdXRob3JfX3RvcF9fXzNHSFAxIHsgfVxcblxcbi5hcHBfX2F1dGhvcl9fYm90dG9tX19fMWw5cDEgeyB9XFxuXFxuLmFwcF9fYnV0dG9uX19fMUx3RHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA3ODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xcbn1cXG5cXG4uYXBwX19idXR0b25fX18xTHdEdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4ICM2NTI4MDE7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBfX3NoYWtlX19fMWxkZUM7XFxufVxcblxcbi5hcHBfX3dvcmtzcGFjZV9fXzMyTGdzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzREQTNERDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFwcF9fdGFibGVfX18xZFpyViB7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTM0cHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvYXBwL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQztBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7Q0FDZDs7O0FBR0QsNkJBQWdCOztBQUVoQixnQ0FBbUI7O0FBRW5CO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsbUNBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2RcIixcImZpbGVcIjpcImFwcC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbn1cXG4uaW1hZ2Uge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5idXR0b25fX3dwIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC01MHB4O1xcbn1cXG5cXG5cXG4uYXV0aG9yX190b3AgeyB9XFxuXFxuLmF1dGhvcl9fYm90dG9tIHsgfVxcblxcbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiA3ODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY1MjgwMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzREQTNERDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhYmxlIHtcXG4gICAgd2lkdGg6IDk0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzRweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiYXBwX19yb290X19fM0F2RXVcIixcblx0XCJpbWFnZVwiOiBcImFwcF9faW1hZ2VfX182TDJDYlwiLFxuXHRcImJ1dHRvbl9fd3BcIjogXCJhcHBfX2J1dHRvbl9fd3BfX18zTFhIa1wiLFxuXHRcImF1dGhvclwiOiBcImFwcF9fYXV0aG9yX19fMV9zaXdcIixcblx0XCJhdXRob3JfX3RvcFwiOiBcImFwcF9fYXV0aG9yX190b3BfX18zR0hQMVwiLFxuXHRcImF1dGhvcl9fYm90dG9tXCI6IFwiYXBwX19hdXRob3JfX2JvdHRvbV9fXzFsOXAxXCIsXG5cdFwiYnV0dG9uXCI6IFwiYXBwX19idXR0b25fX18xTHdEdFwiLFxuXHRcInNoYWtlXCI6IFwiYXBwX19zaGFrZV9fXzFsZGVDXCIsXG5cdFwid29ya3NwYWNlXCI6IFwiYXBwX193b3Jrc3BhY2VfX18zMkxnc1wiLFxuXHRcInRhYmxlXCI6IFwiYXBwX190YWJsZV9fXzFkWnJWXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvYXBwL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VsbF9fcm9vdF9fXzJxTTcxIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jZWxsX19pc19yaWdodF9fXzN2bFhJIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fXzJwdW51IC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc19sZWZ0X19fMTRYenEge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fM3ZsWEksXFxuLmNlbGxfX2lzX2xlZnRfX18xNFh6cSB7XFxuICAgIHdpZHRoOiAyMDBweFxcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fcklaaWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jZWxsX19pc19zY29yZXNfX18yc1ZQbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuLmNlbGxfX2lzX3RvcF9fX3JJWmlsIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNlbGxfX3RvcF9fXzdwQV9QIHtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5jZWxsX19oYWxmX19fM1lybnoge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNlbGxfX2Z1bGxfX18xMWpLMiB7IH1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0lBRUksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkOztBQUVELHVCQUFTXCIsXCJmaWxlXCI6XCJjZWxsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2JvdHRvbSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2xlZnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX3JpZ2h0LFxcbi5pc19sZWZ0IHtcXG4gICAgd2lkdGg6IDIwMHB4XFxufVxcblxcbi5pc190b3Age1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5pc19zY29yZXMge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbn1cXG5cXG4uaXNfdG9wIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b3Age1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLmhhbGYge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZ1bGwgeyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiY2VsbF9fcm9vdF9fXzJxTTcxXCIsXG5cdFwiaXNfcmlnaHRcIjogXCJjZWxsX19pc19yaWdodF9fXzN2bFhJXCIsXG5cdFwiY2VsbFwiOiBcImNlbGxfX2NlbGxfX18zSFFRSlwiLFxuXHRcImlzX2JvdHRvbVwiOiBcImNlbGxfX2lzX2JvdHRvbV9fXzJwdW51XCIsXG5cdFwiaXNfbGVmdFwiOiBcImNlbGxfX2lzX2xlZnRfX18xNFh6cVwiLFxuXHRcImlzX3RvcFwiOiBcImNlbGxfX2lzX3RvcF9fX3JJWmlsXCIsXG5cdFwiaXNfc2NvcmVzXCI6IFwiY2VsbF9faXNfc2NvcmVzX19fMnNWUG5cIixcblx0XCJ0b3BcIjogXCJjZWxsX190b3BfX183cEFfUFwiLFxuXHRcImhhbGZcIjogXCJjZWxsX19oYWxmX19fM1lybnpcIixcblx0XCJmdWxsXCI6IFwiY2VsbF9fZnVsbF9fXzExaksyXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maW5hbC1yZXN1bHRzX19uYW1lX19fMnJsWXMge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5maW5hbC1yZXN1bHRzX193aW5uZXJfX18xVHNONiB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0NBQ2ZcIixcImZpbGVcIjpcImZpbmFsLXJlc3VsdHMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hbWVcIjogXCJmaW5hbC1yZXN1bHRzX19uYW1lX19fMnJsWXNcIixcblx0XCJ3aW5uZXJcIjogXCJmaW5hbC1yZXN1bHRzX193aW5uZXJfX18xVHNONlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtX19yb290X19fMWRzVEEgeyB9XFxuXFxuLmdhbWUtZm9ybV9fbmFtZV9fXzFad2lyIHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19pbnB1dF9fXzNwbDlGIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ0LCA2MiwgODAsIDAuMTIpO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19yb3dfX18zdExWUCB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19yb3dfX18zdExWUDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBUzs7QUFFVDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkJcIixcImZpbGVcIjpcImdhbWUtZm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3QgeyB9XFxuXFxuLm5hbWUge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4ucm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJnYW1lLWZvcm1fX3Jvb3RfX18xZHNUQVwiLFxuXHRcIm5hbWVcIjogXCJnYW1lLWZvcm1fX25hbWVfX18xWndpclwiLFxuXHRcImlucHV0XCI6IFwiZ2FtZS1mb3JtX19pbnB1dF9fXzNwbDlGXCIsXG5cdFwicm93XCI6IFwiZ2FtZS1mb3JtX19yb3dfX18zdExWUFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsX19yb290X19fMm9qNzkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbF9fY2xvc2VfX18xT3R4bzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLm1vZGFsX19jb250ZW50X19fMy1UeVAge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA5MHB4IDVweDtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9pbmZvX19fMWlrM0oge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2dyZWVuX19fMWpBWm0ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOTUpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2JsdWVfX18xb0JDTCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjk1KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeENcIixcImZpbGVcIjpcIm1vZGFsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDE1NiwgMTgsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC45NSk7XFxufVxcblxcbi5zdHlsZV9ibHVlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuOTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJtb2RhbF9fcm9vdF9fXzJvajc5XCIsXG5cdFwiY2xvc2VcIjogXCJtb2RhbF9fY2xvc2VfX18xT3R4b1wiLFxuXHRcImNvbnRlbnRcIjogXCJtb2RhbF9fY29udGVudF9fXzMtVHlQXCIsXG5cdFwic3R5bGVfaW5mb1wiOiBcIm1vZGFsX19zdHlsZV9pbmZvX19fMWlrM0pcIixcblx0XCJzdHlsZV9ncmVlblwiOiBcIm1vZGFsX19zdHlsZV9ncmVlbl9fXzFqQVptXCIsXG5cdFwic3R5bGVfb3JhbmdlXCI6IFwibW9kYWxfX3N0eWxlX29yYW5nZV9fXzJWWE1sXCIsXG5cdFwic3R5bGVfcmVkXCI6IFwibW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4XCIsXG5cdFwic3R5bGVfYmx1ZVwiOiBcIm1vZGFsX19zdHlsZV9ibHVlX19fMW9CQ0xcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucm93X19yb3dfX18yLW1oMC5yb3dfX2lzX2hlYWRfX18xRjU3UCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQ0FBaUM7Q0FDcENcIixcImZpbGVcIjpcInJvdy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvdy5pc19oZWFkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb3dcIjogXCJyb3dfX3Jvd19fXzItbWgwXCIsXG5cdFwiaXNfaGVhZFwiOiBcInJvd19faXNfaGVhZF9fXzFGNTdQXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidGFibGUuY3NzXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uYXV0aG9yX190b3AgLCdcIj5ieSBBbGV4IEFGT05JTiBmb3I8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvcl9fYm90dG9tICwnXCI+RmxvcmlhbiBGRUlDSFRJTkdFUjwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLnRhYmxlICwnXCI+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5idXR0b25fX3dwICwnXCI+IDxidXR0b24gY2xhc3M9XCInLCBjbi5idXR0b24gLCdcIiBkYXRhLW1haW49XCJyb2xsXCI+IFJPTEwgQkFMTCE8L2J1dHRvbj4gPC9kaXY+IDxkaXY+ICcsIG1vZGFsSFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0XG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24uY2VsbCAsJ1wiPiAnKTsgaWYgKGNlbGwudGV4dCkgeyBcbnAucHVzaCgnICcsIGNlbGwudGV4dCAsJyAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgdG9wICwnIGNsZWFyZml4XCI+IDxkaXYgY2xhc3M9XCJjZWxsLWxlZnQgJywgY24uaGFsZiAsJ1wiPkk8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgJywgY24uaGFsZCAsJ1wiPklJPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1taWQgY2xlYXJmaXhcIj4gJyk7IGlmIChjZWxsWzBdID09PSAnWCcpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24uZnVsbCAsJz5cIj5YPC9kaXY+ICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJjZWxsLWxlZnQgJywgY24uaGFsZiAsJ1wiPicsIGNlbGxbMF0gLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgJywgY24uaGFsZiAsJ1wiPicsIGNlbGxbMV0gLCc8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtYm90XCI+IDxkaXYgY2xhc3M9XCJjZWxsLWZ1bGxcIj4nLCBjZWxsLnRvdGFsICwnPC9kaXY+IDwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJyAnLCBjbi53aW5uZXIgLCdcIj4nLCBmaW5hbFJlc3VsdHNbMF0ubmFtZSAsJyAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdj4gJyk7IGZpbmFsUmVzdWx0cy5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPicsIHBsYXllci5uYW1lICwnIC0gJywgcGxheWVyLnNjb3JlcyAsJzwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGJ1dHRvbiBkYXRhLWZpbmFsLXJlc3VsdHM9XCJuZXdcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+TmV3IGdhbWU8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0XG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnXCI+Qk9XTElORy5KUzwvZGl2PiAnKTsgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIGluZGV4KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8aW5wdXQgY2xhc3M9XCInLCBjbi5pbnB1dCAsJ1wiIGRhdGEtZ2FtZS1mb3JtPVwiaW5wdXRcIiBkYXRhLWluZGV4PVwiJywgaW5kZXggLCdcIiB2YWx1ZT1cIicsIHBsYXllciAsJ1wiPiA8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGlucHV0IGNsYXNzPVwiJywgY24uaW5wdXQgLCdcIiBkYXRhLWdhbWUtZm9ybT1cImlucHV0XCIgZGF0YS1pbmRleD1cIicsIHBsYXllcnMubGVuZ3RoICwnXCIgdmFsdWU9XCJcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGJ1dHRvbiBkYXRhLWdhbWUtZm9ybT1cInBsYXlcIiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+UGxheTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0XG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5fcm9vdCAsJyBhbmltYXRlZCBib3VuY2VJblwiPiA8ZGl2IGRhdGEtbW9kYWw9XCJjbG9zZVwiIGNsYXNzPVwiJywgY24uY2xvc2UgLCdcIj7DlzwvZGl2PiA8ZGl2IGNsYXNzPVwiJywgY24uY29udGVudCAsJ1wiPiAnLCBjb250ZW50SFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnIGNsZWFyZml4XCI+ICcsIGNlbGxzSFRNTCAsJyA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdj4gJywgcm93c0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0XCJBbW9zIE1lZGluYVwiLFxuXHRcIlNhbW15IFN0b2tlc1wiLFxuXHRcIkp1YW5pdGEgUGV0ZXJzXCIsXG5cdFwiSm9lIEhhcm1vblwiLFxuXHRcIkxvbGEgRG91Z2xhc1wiLFxuXHRcIkNhcmxhIEJlbm5ldHRcIixcblx0XCJKb2RpIEd1em1hblwiLFxuXHRcIlNpbHZpYSBDcnV6XCIsXG5cdFwiVGVycnkgV2Vic3RlclwiLFxuXHRcIkJyb29rZSBKZW5raW5zXCIsXG5cdFwiQWxpY2lhIEF1c3RpblwiLFxuXHRcIk1hdHQgQmFyYmVyXCIsXG5cdFwiTWlsZHJlZCBXYXJuZXJcIixcblx0XCJNYXVyZWVuIEhhbGxcIixcblx0XCJNYXJpYW5uZSBQZW5hXCIsXG5cdFwiUGh5bGxpcyBHcm9zc1wiLFxuXHRcIkZyZWRkaWUgTGF3cmVuY2VcIixcblx0XCJKdWxpdXMgSG9sbGFuZFwiLFxuXHRcIlNoYXVuIE1pbGVzXCIsXG5cdFwiSm9hbm4gU2NobmVpZGVyXCIsXG5cdFwiQ2xpbnRvbiBDdW1taW5nc1wiLFxuXHRcIkRhbmEgTHVuYVwiLFxuXHRcIkJlcm5pY2UgTW9yYWxlc1wiLFxuXHRcIkRlYmJpZSBOdW5lelwiLFxuXHRcIkNhcmxvcyBXZWF2ZXJcIixcblx0XCJEYXJsZW5lIE1hdHRoZXdzXCIsXG5cdFwiVG9ueSBIb2xsb3dheVwiLFxuXHRcIlZlcm5vbiBOZ3V5ZW5cIixcblx0XCJUaW1teSBXYWduZXJcIixcblx0XCJHYXJyZXR0IENsYXl0b25cIixcblx0XCJCb2IgUGVhcnNvblwiLFxuXHRcIkthcmVuIFR1Y2tlclwiLFxuXHRcIkx1Y2lhIFN0ZXZlbnNcIixcblx0XCJEb3VnIEZpZ3Vlcm9hXCIsXG5cdFwiSGFycnkgTG92ZVwiLFxuXHRcIkFzaGxleSBOZWFsXCIsXG5cdFwiQmV1bGFoIFdpbGtlcnNvblwiLFxuXHRcIlZpbmNlbnQgQ2FzZXlcIixcblx0XCJNYW51ZWwgQnV0bGVyXCIsXG5cdFwiUm9iaW4gTW9ycmlzb25cIixcblx0XCJKYWNraWUgQ29va1wiLFxuXHRcIkRvbWluZ28gVGVycnlcIixcblx0XCJNYXJsZW5lIENsYXJrXCIsXG5cdFwiRG9ubmllIEhhcmR5XCIsXG5cdFwiQ3ludGhpYSBTdGVlbGVcIixcblx0XCJOb3JtYSBHcmlmZml0aFwiLFxuXHRcIlBhdHN5IFRyYW5cIixcblx0XCJTaGlybGV5IEJhbGxcIixcblx0XCJDYXJvbCBTaWx2YVwiLFxuXHRcIkpvZHkgRmxldGNoZXJcIixcblx0XCJIZWN0b3IgTWNsYXVnaGxpblwiLFxuXHRcIkx1Y3kgRHJha2VcIixcblx0XCJUYW1teSBCYWtlclwiLFxuXHRcIlNoZXJyaSBHaWJzb25cIixcblx0XCJBbGxhbiBCcmlnZ3NcIixcblx0XCJKZXNzZSBGcmF6aWVyXCIsXG5cdFwiRXJpY2sgU3dhbnNvblwiLFxuXHRcIkdyZXRjaGVuIFZlZ2FcIixcblx0XCJSYW1vbmEgQW5kcmV3c1wiLFxuXHRcIlN0YWNleSBTY2htaWR0XCIsXG5cdFwiVG9uaSBSdXNzZWxsXCIsXG5cdFwiRmxvcmVuY2UgV2lzZVwiLFxuXHRcIkVsZW5hIEhlcnJlcmFcIixcblx0XCJBbGZvbnNvIFdpbGxpYW1zb25cIixcblx0XCJCcnVjZSBIb3VzdG9uXCIsXG5cdFwiTHluZGEgQmFya2VyXCIsXG5cdFwiUGVubnkgTmljaG9sc1wiLFxuXHRcIkphY3F1ZWx5biBOYXNoXCIsXG5cdFwiR3JhY2UgSGluZXNcIixcblx0XCJUYXJhIFJpdmVyYVwiLFxuXHRcIkNlY2VsaWEgU3RldmVuc29uXCIsXG5cdFwiUm9jaGVsbGUgV3JpZ2h0XCIsXG5cdFwiSmVhbm5lIER1bmNhblwiLFxuXHRcIlRlcnJ5IFBvcnRlclwiLFxuXHRcIktheSBHcmFoYW1cIixcblx0XCJSYWZhZWwgV2VsbHNcIixcblx0XCJNYXJpYSBNb3J0b25cIixcblx0XCJBbmdlbGEgQnJ5YW5cIixcblx0XCJTdHVhcnQgTmVsc29uXCIsXG5cdFwiUm9uIENvbGVcIixcblx0XCJIb3dhcmQgSW5ncmFtXCIsXG5cdFwiV2FuZGEgQ29sb25cIixcblx0XCJQYXVsZXR0ZSBXZXN0XCIsXG5cdFwiQW5uIEJyYWRsZXlcIixcblx0XCJOYW5jeSBTbnlkZXJcIixcblx0XCJNYWxjb2xtIFBhcmtcIixcblx0XCJSZWdpbmFsZCBSaW9zXCIsXG5cdFwiU2hlbGlhIFdhcnJlblwiLFxuXHRcIlRlcmVuY2UgTW9vcmVcIixcblx0XCJBbnRvbmlhIFBhdHRvblwiLFxuXHRcIkplbm5pZmVyIE1hcnRpbmV6XCIsXG5cdFwiTm9lbCBCcmV3ZXJcIixcblx0XCJOYXRhbGllIEh1ZmZcIixcblx0XCJEaWFubmUgU2FuZG92YWxcIixcblx0XCJOaWNob2xlIERhd3NvblwiLFxuXHRcIkJyYW5kb24gTHVjYXNcIixcblx0XCJKb3JkYW4gQ2hyaXN0ZW5zZW5cIixcblx0XCJMZWFoIENhc3Ryb1wiLFxuXHRcIlRvbWFzIEJhc3NcIixcblx0XCJLcmlzdGEgQWJib3R0XCJcbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZWR1Y2Vycy9uYW1lcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=