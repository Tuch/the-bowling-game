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
	
	
	var _index = __webpack_require__(21);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _styles = __webpack_require__(23);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _virtualDom = __webpack_require__(12);
	
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
	        style: 'red',
	        isOpen: false
	    };
	}
	
	function createGameFormState() {
	    return {
	        name: 'game-form',
	        style: 'green',
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	
	function roll(pins) {
	    return Math.round(Math.random() * 10 % pins);
	}
	
	function throwBall(pins) {
	    var _Math;
	
	    var values = [roll(pins)];
	
	    return (_Math = Math).max.apply(_Math, values);
	}
	
	function getInitialState(players) {
	    players = players || ['Player 1', 'Player 2'];
	
	    var frames = range(FRAMES_LENGTH).map(function (val) {
	        var frame = {
	            title: val + 1
	        };
	
	        players.reduce(function (acc, player, index) {
	            acc[index] = [];
	            acc[index].total = '';
	
	            return acc;
	        }, frame);
	
	        return frame;
	    });
	
	    var state = {
	        frames: frames,
	        players: players,
	        currentPlayer: 0,
	        currentFrame: 0,
	        startTime: new Date(),
	        diffTime: '00:00',
	        theEnd: false,
	        lastResult: ''
	    };
	
	    return state;
	}
	
	function prepareRows(state) {
	    var rows = [];
	    var row = {
	        isHead: true,
	        cols: state.frames.map(function (frame) {
	            return { text: frame.title };
	        })
	    };
	
	    row.cols.unshift({ text: state.diffTime, isLeft: true });
	
	    rows.push(row);
	
	    var pRows = state.players.map(function (player, index) {
	        var cols = state.frames.map(function (frame) {
	            var rolls = frame[index];
	            var cell = {
	                0: rolls[0] ? rolls[0].title : '',
	                1: rolls[1] ? rolls[1].title : '',
	                total: rolls.total
	            };
	
	            return cell;
	        });
	
	        cols.unshift({
	            text: player,
	            isLeft: true
	        });
	
	        return { cols: cols };
	    });
	
	    rows.push.apply(rows, _toConsumableArray(pRows));
	
	    return rows;
	}
	
	function prepareFinalResults(state) {
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
	    state.rows = prepareRows(state);
	    state.finalResults = prepareFinalResults(state);
	
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
	        rowsHTML: app.play.rows.map(_row2.default).join(''),
	        modalHTML: (0, _modal2.default)(app),
	        mainImageSrc: _ball2.default,
	        cn: _app2.default
	    });
	};
	
	var _row = __webpack_require__(11);

	var _row2 = _interopRequireDefault(_row);

	var _modal = __webpack_require__(10);

	var _modal2 = _interopRequireDefault(_modal);

	var _ball = __webpack_require__(20);

	var _ball2 = _interopRequireDefault(_ball);

	var _app = __webpack_require__(24);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(30);

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
	        cn: _cell2.default
	    });
	};
	
	var _cell = __webpack_require__(25);

	var _cell2 = _interopRequireDefault(_cell);

	var _cell3 = __webpack_require__(31);

	var _cell4 = _interopRequireDefault(_cell3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var _finalResults3 = __webpack_require__(32);

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

	var _gameForm3 = __webpack_require__(33);

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
	        cn: _modal2.default,
	        style: app.modal.style || 'info',
	        isOpen: app.modal.isOpen,
	        contentHTML: contentHTML
	    });
	};
	
	var _gameForm = __webpack_require__(9);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _finalResults = __webpack_require__(8);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _modal = __webpack_require__(28);

	var _modal2 = _interopRequireDefault(_modal);

	var _modal3 = __webpack_require__(34);

	var _modal4 = _interopRequireDefault(_modal3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var _row3 = __webpack_require__(35);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createVNodeFromNode = createVNodeFromNode;
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
	
	        switch (op.type) {
	            case 'SET':
	                node.setAttribute(name, op.val);
	                break;
	            case 'REMOVE':
	                node.removeAttribute(name);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: #E4E4E4;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".screen {\n    width: 720px;\n    margin: 0 auto 0 auto;\n}\n\n.main-image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button-wp {\n    position:relative;\n}\n\n.screen .head .cell-wp:first-child .cell {\n    border-radius: 10px 0 0 0;\n}\n\n.screen .head .cell-wp:last-child .cell {\n    border-radius: 0 10px 0 0;\n}\n\n.screen .player:last-child .cell-wp:first-child .cell {\n    border-radius: 0 0 0 10px;\n}\n\n.screen .player:last-child .cell-wp:last-child .cell {\n    border-radius: 0 0 10px 0;\n}\n\n.author {\n    padding: 0px 0px 30px 5px;\n    color: #ccc;\n    text-align: right;\n}\n\n.roll-button {\n    position: relative;\n    font-size: 250%;\n    margin: 50px auto;\n    display: block;\n    border-radius: 50%;\n    border: none;\n    color: #fff;\n    padding: 121px 20px 20px 20px;\n    width: 200px;\n    height: 200px;\n    cursor: pointer;\n    box-shadow: 0 2px rgba(243, 156, 18, 0.8);\n    text-transform: uppercase;\n    background: transparent;\n    -webkit-appearance: caret;\n}\n\n.roll-button:hover {\n    box-shadow: 0 2px #652801;\n    animation-duration: .5s;\n    animation-fill-mode: both;\n    animation-name: shake;\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell-wp {\n    width: 60px;\n    height: 60px;\n    float: left;\n}\n\n.cell-wp.left-col {\n    width: 120px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: #eee;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n}\n\n.cell-wp:last-child .cell {\n    border-right-width: 1px;\n}\n\n.player:last-child .cell {\n    border-bottom-width: 1px;\n}\n\n.cell-half {\n    float: left;\n    width: 50%;\n}\n\n.left-col {\n    line-height: 57px;\n    text-align: center;\n}\n\n.head .left-col .cell {\n    text-align: center;\n}\n\n.player .left-col .cell {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 0 10px;\n    text-transform: uppercase;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.player :not(.left-col) .cell {\n    font-size: 12px;\n}\n\n.cell-top {\n    color: rgba(131, 178, 186, 0.95);\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".final-results__name {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n.final-result__winner {\n    font-size:40px;\n    width: auto;\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".game-form { }\n\n.game-form__name {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n}\n\n.game-form__input {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.game-form__button {\n}\n\n.game-form__button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.game-form__row {\n    margin: 0 10px;\n}\n\n.game-form__row:first-child {\n    margin-top: 1px;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.modal__hidden {\n    display: none;\n}\n\n.modal__close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.modal__close:hover {\n    transform: rotate(90deg);\n}\n\n.modal__content {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.modal__info {\n    background: rgba(236, 240, 241, 0.8);\n}\n\n.modal__green {\n    background: rgba(39, 174, 96, 0.8);\n}\n\n.modal__orange {\n    background: rgba(243, 156, 18, 0.8);\n}\n\n.modal__red {\n    background: rgba(231, 76, 60, 0.8);\n}\n\n.modal_animation_bounceIn {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row {\n\n}\n\n.head.row {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc8b9065abd05d51e1be0dea8f0ef904.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./styles.css");
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
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./app.css");
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
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./cell.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./cell.css");
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
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./final-results.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./final-results.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./game-form.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./game-form.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal.css");
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./row.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./row.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> <div class="screen"> <div class="author">by Alex Afonin</div> <div> ', rowsHTML ,' </div> <div class="button-wp"> <img class="main-image" src="', mainImageSrc ,'"> <button class="roll-button" data-main="roll" ></button> </div> </div> <div> ', modalHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="cell-wp ', cell.isLeft ? 'left-col' : '' ,'"> <div class="cell"> '); if (cell.text) { 
	p.push(' ', cell.text ,' '); } else { 
	p.push(' <div class="cell-top clearfix"> <div class="cell-left cell-half">I</div> <div class="cell-right cell-half">II</div> </div> <div class="cell-mid clearfix"> '); if (cell[0] === 'X') { 
	p.push(' <div class="cell-full">X</div> '); } else { 
	p.push(' <div class="cell-left cell-half">', cell[0] ,'</div> <div class="cell-right cell-half">', cell[1] ,'</div> '); } 
	p.push(' </div> <div class="cell-bot"> <div class="cell-full">', cell.total ,'</div> </div> '); } 
	p.push(' </div> </div> ');}return p.join('');
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="final-results"> <div class="final-results__name final-result__winner">', finalResults[0].name ,' WON! - ', finalResults[0].scores ,'</div> <div class="final-results__row"> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="final-results__name">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="game-form"> <div class="game-form__name">BOWLING.JS</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="game-form__row"> <input class="game-form__input" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' <div class="form__row"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="modal modal__', style ,' modal_animation_bounceIn ', isOpen ? '' : 'modal__hidden' ,'"> <div data-modal="close" class="modal__close">×</div> <div class="modal__content"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', row.isHead ? 'head' : 'player' ,' row clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTY3YjUyZjNhYjkyMjg4MGNjNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpcnR1YWwtZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iYWxsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz9mNDkyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcz9iZGI3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzP2EzNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3M/MzUwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3M/ODhkNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzP2Q2NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzPzQwOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzdCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7S0FPTjtBQUNGLGNBREUsR0FD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Uiw0RkFBMkYsRUFBRSxFO0FBQzdGLG1HQUFrRztBQUNsRyxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsaUZBQWlGLDJDO0FBQzlKLHVKQUFzSixFQUFFLEU7QUFDeEosb0hBQW1IO0FBQ25ILEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSxrT0FBa087QUFDL1MsRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLG1HQUFtRztBQUNoTCxFIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTY3YjUyZjNhYjkyMjg4MGNjNTZcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAqIGFzIHZkb20gZnJvbSAnLi92aXJ0dWFsLWRvbS5qcyc7XG5cbi8vIHJlYWN0IHN0eWxlXG5pbXBvcnQgYXBwIGZyb20gJy4vdmlld3MvYXBwL2FwcC5qcyc7XG4vLyByZWR1eCBzdHlsZVxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUoc3RhdGUpXG4gICAgICAgICAgICAuaW5pdEFwcE5vZGUoKVxuICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgICAgICAuaW5pdEdhbWVUaW1lcigpXG4gICAgICAgICAgICAuYXNzaWduRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEFwcE5vZGUgKCkge1xuICAgICAgICB0aGlzLmFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEdhbWVUaW1lciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci50aWNrVGltZXIoKSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZWR1Y2VBY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkRvY3VtZW50Rm9jdXNPdXQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudENsaWNrIChlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1haW4nKSkge1xuICAgICAgICAgICAgdGhpcy5vblJvbGxDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWZvcm0nKSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVGb3JtQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5vbk1vZGFsQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmluYWwtcmVzdWx0cycpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRmluYWxSZXN1bHRzQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudEZvY3VzT3V0IChlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZUZvcm1Gb2N1c091dChrZXksIHtcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uR2FtZUZvcm1Gb2N1c091dCAoa2V5LCBkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci51cGRhdGVQbGF5ZXJOYW1lKGRhdGEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaW5hbFJlc3VsdHNDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIubmV3R2FtZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Sb2xsQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncm9sbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci50aHJvd0JhbGwoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGF5LnRoZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLmVuZEdhbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5wbGF5R2FtZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RhbENsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLmNsb3NlTW9kYWwoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpbGxOb2RlcygpIHtcbiAgICAgICAgdGhpcy50aW1lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZCAubGVmdC1jb2wgLmNlbGwnKVswXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm5ldyBBcHAocmVkdWNlcigpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgZ2FtZU1vZGFsUmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lTW9kYWxSZWR1Y2VyJztcbmltcG9ydCBnYW1lUGxheVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVBsYXlSZWR1Y2VyJztcblxubGV0IHR5cGVzID0ge1xuICAgIFRJQ0tfVElNRVI6ICdUSUNLX1RJTUVSJyxcbiAgICBUSFJPV19CQUxMOiAnVEhST1dfQkFMTCcsXG4gICAgQ0xPU0VfTU9EQUw6ICdDTE9TRV9NT0RBTCcsXG4gICAgUExBWV9HQU1FOiAnUExBWV9HQU1FJyxcbiAgICBORVdfR0FNRTogJ05FV19HQU1FJyxcbiAgICBFTkRfR0FNRTogJ0VORF9HQU1FJyxcbiAgICBVUERBVEVfUExBWUVSX05BTUU6ICdVUERBVEVfUExBWUVSX05BTUUnXG59O1xuXG5sZXQgZ2FtZU1vZGFsUmVkdWNlciA9IGdhbWVNb2RhbFJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcbmxldCBnYW1lUGxheVJlZHVjZXIgPSBnYW1lUGxheVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24gPSB7fSkge1xuICAgIHN0YXRlLnBsYXkgPSBnYW1lUGxheVJlZHVjZXIoc3RhdGUucGxheSwgYWN0aW9uKTtcbiAgICBzdGF0ZS5tb2RhbCA9IGdhbWVNb2RhbFJlZHVjZXIoc3RhdGUubW9kYWwsIGFjdGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmxldCBhY3Rpb25zID0ge307XG5cbmFjdGlvbnMudXBkYXRlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbn07XG5cbmFjdGlvbnMudGhyb3dCYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRIUk9XX0JBTExcbiAgICB9O1xufTtcblxuYWN0aW9ucy5wbGF5R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5QTEFZX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5uZXdHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLk5FV19HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMuZW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5FTkRfR0FNRVxuICAgIH07XG59O1xuXG5hY3Rpb25zLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0xPU0VfTU9EQUxcbiAgICB9O1xufTtcblxuYWN0aW9ucy50aWNrVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVElDS19USU1FUlxuICAgIH07XG59O1xuXG4vL09iamVjdC5hc3NpZ24ocmVkdWNlciwgdHlwZXMpO1xuT2JqZWN0LmFzc2lnbihyZWR1Y2VyLCBhY3Rpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzXG4gKiovIiwiZnVuY3Rpb24gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2ZpbmFsLXJlc3VsdHMnLFxuICAgICAgICBzdHlsZTogJ3JlZCcsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnZ3JlZW4nLFxuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIGxldCBzdGF0ZSA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoKTtcbiAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkNMT1NFX01PREFMOlxuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5FTkRfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5ORVdfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qc1xuICoqLyIsImNvbnN0IEZSQU1FU19MRU5HVEggPSAxMDtcblxuZnVuY3Rpb24gcmFuZ2UobGVuZ3RoKSB7XG4gICAgcmV0dXJuIEFycmF5KGxlbmd0aCkuam9pbignICcpLnNwbGl0KCcgJykubWFwKCh2LCBpKSA9PiBpKTtcbn1cblxuZnVuY3Rpb24gcGFkICh2YWx1ZSwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIGxlbmd0aCA9IGxlbmd0aCB8fCAyO1xuXG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY0RpZmZUaW1lIChzdGF0ZSkge1xuICAgIGxldCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKChuZXcgRGF0ZSgpIC0gc3RhdGUuc3RhcnRUaW1lKSAvIDEwMDApLFxuICAgICAgICByaWdodFNpZGUgPSB0b3RhbFNlY29uZHMgJSA2MCxcbiAgICAgICAgbGVmdFNpZGUgPSAodG90YWxTZWNvbmRzIC0gcmlnaHRTaWRlKSAvIDYwO1xuXG4gICAgc3RhdGUuZGlmZlRpbWUgPSBwYWQobGVmdFNpZGUsIDIpICsgJzonICsgcGFkKHJpZ2h0U2lkZSwgMik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGwgKHBpbnMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAgJSBwaW5zKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dCYWxsIChwaW5zKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtyb2xsKHBpbnMpXTtcblxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKHBsYXllcnMpIHtcbiAgICBwbGF5ZXJzID0gcGxheWVycyB8fCBbJ1BsYXllciAxJywgJ1BsYXllciAyJ107XG5cbiAgICBsZXQgZnJhbWVzID0gcmFuZ2UoRlJBTUVTX0xFTkdUSCkubWFwKCh2YWwpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lID0ge1xuICAgICAgICAgICAgdGl0bGU6IHZhbCArIDFcbiAgICAgICAgfTtcblxuICAgICAgICBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBhY2NbaW5kZXhdID0gW107XG4gICAgICAgICAgICBhY2NbaW5kZXhdLnRvdGFsID0gJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIGZyYW1lKTtcblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSk7XG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgICBwbGF5ZXJzOiBwbGF5ZXJzLFxuICAgICAgICBjdXJyZW50UGxheWVyOiAwLFxuICAgICAgICBjdXJyZW50RnJhbWU6IDAsXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgZGlmZlRpbWU6ICcwMDowMCcsXG4gICAgICAgIHRoZUVuZDogZmFsc2UsXG4gICAgICAgIGxhc3RSZXN1bHQ6ICcnXG4gICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVJvd3Moc3RhdGUpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCByb3cgPSB7XG4gICAgICAgIGlzSGVhZDogdHJ1ZSxcbiAgICAgICAgY29sczogc3RhdGUuZnJhbWVzLm1hcChmcmFtZSA9PiAoeyB0ZXh0OiBmcmFtZS50aXRsZSB9KSlcbiAgICB9O1xuXG4gICAgcm93LmNvbHMudW5zaGlmdCh7dGV4dDpzdGF0ZS5kaWZmVGltZSwgaXNMZWZ0OiB0cnVlfSk7XG5cbiAgICByb3dzLnB1c2gocm93KTtcblxuICAgIGxldCBwUm93cyA9IHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGxldCByb2xscyA9IGZyYW1lW2luZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBjb2xzIH07XG4gICAgfSk7XG5cbiAgICByb3dzLnB1c2goLi4ucFJvd3MpO1xuXG4gICAgcmV0dXJuIHJvd3M7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVGaW5hbFJlc3VsdHMoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcixcbiAgICAgICAgICAgIHNjb3Jlczogc3VtKHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lKSA9PiBmcmFtZVtpbmRleF0udG90YWwpKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmVzIC0gYS5zY29yZXM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVWaWV3KHN0YXRlKSB7XG4gICAgc3RhdGUucm93cyA9IHByZXBhcmVSb3dzKHN0YXRlKTtcbiAgICBzdGF0ZS5maW5hbFJlc3VsdHMgPSBwcmVwYXJlRmluYWxSZXN1bHRzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gc3VtKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQodmFsIHx8IDAsIDEwKTtcbiAgICB9LCAwKTtcbn1cblxuZnVuY3Rpb24gbmV4dFBsYXllcihzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS50aGVFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIgPSBwbGF5ZXIgPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA/IDAgOiBwbGF5ZXIgKyAxO1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRGcmFtZSA9IHN0YXRlLmN1cnJlbnRGcmFtZSA8IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxID8gc3RhdGUuY3VycmVudEZyYW1lICsgMSA6IHN0YXRlLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9udXNGcmFtZXMgKHN0YXRlKSB7XG4gICAgbGV0IGZyYW1lcyA9IHN0YXRlLmZyYW1lcy5zbGljZShNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50RnJhbWUgLSAyKSwgc3RhdGUuY3VycmVudEZyYW1lICsgMSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZnJhbWVbc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgfSk7XG5cbiAgICBsZXQgY3VyckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBmcmFtZXMubGVuZ3RoLS07XG5cbiAgICBsZXQgciA9IDIgLSBjdXJyRnJhbWUubGVuZ3RoO1xuICAgIGxldCBib251c0ZyYW1lcyA9IFtdO1xuXG4gICAgd2hpbGUgKHIgJiYgZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXMucG9wKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHIgPT09IDEgJiYgZnJhbWVbMF0udmFsdWUgPT09IDEwKSB8fFxuICAgICAgICAgICAgKHIgPT09IDIgJiYgKGZyYW1lLnRvdGFsID09PSAxMCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYm9udXNGcmFtZXMudW5zaGlmdChmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByIC09IGZyYW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9udXNGcmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdFBsYXllciAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID09PSBzdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RGcmFtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY3VycmVudEZyYW1lID09PSBGUkFNRVNfTEVOR1RIIC0gMTtcbn1cblxuZnVuY3Rpb24gb25UaWNrVGltZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGNhbGNEaWZmVGltZShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVGhyb3dCYWxsIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS50aGVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGxldCBmcmFtZSA9IHN0YXRlLmZyYW1lc1tzdGF0ZS5jdXJyZW50RnJhbWVdW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGxldCBwaW5zID0gRlJBTUVTX0xFTkdUSDtcblxuICAgIGlmIChmcmFtZVswXSAmJiBwaW5zICE9PSBmcmFtZVswXS52YWx1ZSkge1xuICAgICAgICBwaW5zIC09IGZyYW1lWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBib251c0ZyYW1lcyA9IGdldEJvbnVzRnJhbWVzKHN0YXRlKTtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heCh0aHJvd0JhbGwocGlucyksIHRocm93QmFsbChwaW5zKSk7XG5cbiAgICBib251c0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS50b3RhbCArPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSB9O1xuXG4gICAgZnJhbWUucHVzaChyb2xsKTtcblxuICAgIGxldCByb2xsc1N1bSA9IHN1bShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuXG4gICAgICAgICAgICBpZiAoIWlzTGFzdEZyYW1lKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoZnJhbWUudG90YWwgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdCA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25QbGF5R2FtZShzdGF0ZSkge1xuICAgIHJldHVybiBnZXRJbml0aWFsU3RhdGUoc3RhdGUucGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblBsYXlHYW1lKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USUNLX1RJTUVSOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRocm93QmFsbChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVwYXJlVmlldyhzdGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHJvdyBmcm9tICcuLi9yb3cvcm93LmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgbWFpbkltYWdlU3JjIGZyb20gJ2ZpbGUhaW1hZ2VzL2JhbGwucG5nJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogYXBwLnBsYXkucm93cy5tYXAocm93KS5qb2luKCcnKSxcbiAgICAgICAgbW9kYWxIVE1MOiBtb2RhbChhcHApLFxuICAgICAgICBtYWluSW1hZ2VTcmMsXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZmluYWwtcmVzdWx0cy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZmluYWwtcmVzdWx0cy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxheSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgZmluYWxSZXN1bHRzOiBwbGF5LmZpbmFsUmVzdWx0c1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBsYXkpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IHBsYXkucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuLi9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzJztcbmltcG9ydCBmaW5hbFJlc3VsdHMgZnJvbSAnLi4vZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RhbC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgbGV0IGNvbnRlbnRIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKGFwcC5tb2RhbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2dhbWUtZm9ybSc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGdhbWVGb3JtKGFwcC5wbGF5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMoYXBwLnBsYXkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHN0eWxlOiBhcHAubW9kYWwuc3R5bGUgfHwgJ2luZm8nLFxuICAgICAgICBpc09wZW46IGFwcC5tb2RhbC5pc09wZW4sXG4gICAgICAgIGNvbnRlbnRIVE1MXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4uL2NlbGwvY2VsbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9yb3cuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanNcbiAqKi8iLCJmdW5jdGlvbiBjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkge1xuICAgIGlmIChIVE1MLnRyaW0oKSA9PT0gJycpe1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoSFRNTCk7XG4gICAgfVxuXG4gICAgLy8gRXZlcnl0aGluZyBleGNlcHQgaU9TIDcgU2FmYXJpLCBJRSA4LzksIEFuZHJpb2QgQnJvd3NlciA0LjEvNDNcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgbGV0IGhlYWQgPSBkb2MuY2hpbGROb2Rlc1swXTtcbiAgICBsZXQgYm9keSA9IGRvYy5jaGlsZE5vZGVzWzFdO1xuICAgIGxldCBub2RlO1xuXG4gICAgaWYgKG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgPSBib2R5LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZSkge1xuICAgIGxldCB2Tm9kZSA9IHtcbiAgICAgICAgdHlwZTogbm9kZS5ub2RlVHlwZVxuICAgIH07XG5cbiAgICBpZiAodk5vZGUudHlwZSA9PT0gMykge1xuICAgICAgICB2Tm9kZS5jb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbnMgPSBbXTtcbiAgICAgICAgdk5vZGUuYXR0cnMgPSB7fTtcbiAgICAgICAgdk5vZGUudGFnID0gbm9kZS50YWdOYW1lO1xuXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbnMucHVzaChjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUuY2hpbGROb2Rlc1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IG5vZGUuYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSAnY2xhc3NOYW1lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdk5vZGUuYXR0cnNbbmFtZV0gPSBub2RlLmF0dHJpYnV0ZXNbaV0udmFsdWUucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZOb2RlO1xufVxuXG5mdW5jdGlvbiBqb2luQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1trZXldLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAga2V5ID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGAke2tleX09XCIke2F0dHJ9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MID0gJycpIHtcbiAgICBsZXQgYXR0cnMgPSBqb2luQXR0cnModk5vZGUuYXR0cnMpO1xuXG4gICAgc3dpdGNoKHZOb2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gYCR7aW5uZXJIVE1MfWA7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBgPCR7dk5vZGUudGFnfSAke2F0dHJzfT4ke2lubmVySFRNTH08LyR7dk5vZGUudGFnfT5gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySFRNTCh2Tm9kZSkge1xuICAgIGxldCBpbm5lckhUTUwgPSAnJztcblxuICAgIGlmICh2Tm9kZS50eXBlICE9PSAzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlubmVySFRNTCArPSByZW5kZXJIVE1MKHZOb2RlLmNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckhUTUwgPSB2Tm9kZS5jb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwpO1xufVxuXG5leHBvcnQgbGV0IGRpZmYgPSBmdW5jdGlvbiAodk5vZGUxLCB2Tm9kZTIpIHtcbiAgICBpZiAodk5vZGUxICYmICF2Tm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfTk9ERSdcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCF2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnQUREX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnRhZyAhPT0gdk5vZGUyLnRhZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1JFUExBQ0VfTk9ERScsXG4gICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2Tm9kZTEudHlwZSA9PT0gMyB8fCB2Tm9kZTIudHlwZSA9PT0gMykge1xuICAgICAgICBpZiAodk5vZGUxLmNvbnRlbnQgIT09IHZOb2RlMi5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXR0cnMgPSBbXTtcbiAgICAgICAgbGV0IHBhdGNoID0ge307XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMi5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMSkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyVmFsID0gYXR0cjIuam9pbignICcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIxVmFsICE9PSBhdHRyMlZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMlZhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMikge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUxLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSBjRGlmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZTIuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXZOb2RlMS5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY0RpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0Y2guYXR0cnMgPSBhdHRycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXRjaCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgb3ApIHtcbiAgICBzd2l0Y2gob3AudHlwZSkge1xuICAgICAgICBjYXNlICdBRERfTk9ERSc6XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChvcC52Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUkVNT1ZFX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSBuZXdOb2RlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyT3BzKG5vZGUsIG9wcykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBvcHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wID0gb3BzW2ldO1xuICAgICAgICBsZXQgbmFtZSA9IG9wLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIG9wLnZhbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JFTU9WRSc6XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA2MiwgODApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweCAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0U0RTRFNDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcmVlbiB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1pbWFnZSB7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDJweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmJ1dHRvbi13cCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uc2NyZWVuIC5oZWFkIC5jZWxsLXdwOmZpcnN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcXG59XFxuXFxuLnNjcmVlbiAuaGVhZCAuY2VsbC13cDpsYXN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMDtcXG59XFxuXFxuLnNjcmVlbiAucGxheWVyOmxhc3QtY2hpbGQgLmNlbGwtd3A6Zmlyc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xcbn1cXG5cXG4uc2NyZWVuIC5wbGF5ZXI6bGFzdC1jaGlsZCAuY2VsbC13cDpsYXN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcXG59XFxuXFxuLmF1dGhvciB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzBweCA1cHg7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnJvbGwtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDI1MCU7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMjFweCAyMHB4IDIwcHggMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjYXJldDtcXG59XFxuXFxuLnJvbGwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY1MjgwMTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIGZyb20sIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwtd3Age1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmNlbGwtd3AubGVmdC1jb2wge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsLXdwOmxhc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLnBsYXllcjpsYXN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbC1oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0LWNvbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkIC5sZWZ0LWNvbCAuY2VsbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllciAubGVmdC1jb2wgLmNlbGwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLnBsYXllciA6bm90KC5sZWZ0LWNvbCkgLmNlbGwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jZWxsLXRvcCB7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmluYWwtcmVzdWx0c19fbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmZpbmFsLXJlc3VsdF9fd2lubmVyIHtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtIHsgfVxcblxcbi5nYW1lLWZvcm1fX25hbWUge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZvcm1fX2lucHV0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ0LCA2MiwgODAsIDAuMTIpO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19idXR0b24ge1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19yb3cge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbF9faGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnQge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA5MHB4IDVweDtcXG59XFxuXFxuLm1vZGFsX19pbmZvIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfX2dyZWVuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMTU2LCAxOCwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19yZWQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfYW5pbWF0aW9uX2JvdW5jZUluIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3cge1xcblxcbn1cXG5cXG4uaGVhZC5yb3cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZjOGI5MDY1YWJkMDVkNTFlMWJlMGRlYThmMGVmOTA0LnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyIS4vc3JjL2ltYWdlcy9iYWxsLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NlbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZS1mb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dhbWUtZm9ybS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9kYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbW9kYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdj4gPGRpdiBjbGFzcz1cInNjcmVlblwiPiA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+YnkgQWxleCBBZm9uaW48L2Rpdj4gPGRpdj4gJywgcm93c0hUTUwgLCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJidXR0b24td3BcIj4gPGltZyBjbGFzcz1cIm1haW4taW1hZ2VcIiBzcmM9XCInLCBtYWluSW1hZ2VTcmMgLCdcIj4gPGJ1dHRvbiBjbGFzcz1cInJvbGwtYnV0dG9uXCIgZGF0YS1tYWluPVwicm9sbFwiID48L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8ZGl2PiAnLCBtb2RhbEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiY2VsbC13cCAnLCBjZWxsLmlzTGVmdCA/ICdsZWZ0LWNvbCcgOiAnJyAsJ1wiPiA8ZGl2IGNsYXNzPVwiY2VsbFwiPiAnKTsgaWYgKGNlbGwudGV4dCkgeyBcbnAucHVzaCgnICcsIGNlbGwudGV4dCAsJyAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC10b3AgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCBjZWxsLWhhbGZcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0IGNlbGwtaGFsZlwiPklJPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1taWQgY2xlYXJmaXhcIj4gJyk7IGlmIChjZWxsWzBdID09PSAnWCcpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0IGNlbGwtaGFsZlwiPicsIGNlbGxbMF0gLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgY2VsbC1oYWxmXCI+JywgY2VsbFsxXSAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNlbGwudG90YWwgLCc8L2Rpdj4gPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzXCI+IDxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzX19uYW1lIGZpbmFsLXJlc3VsdF9fd2lubmVyXCI+JywgZmluYWxSZXN1bHRzWzBdLm5hbWUgLCcgV09OISAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImZpbmFsLXJlc3VsdHNfX3Jvd1wiPiAnKTsgZmluYWxSZXN1bHRzLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzX19uYW1lXCI+JywgcGxheWVyLm5hbWUgLCcgLSAnLCBwbGF5ZXIuc2NvcmVzICwnPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8YnV0dG9uIGRhdGEtZmluYWwtcmVzdWx0cz1cIm5ld1wiIGNsYXNzPVwiZm9ybS1idXR0b25cIj5OZXcgZ2FtZTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cImdhbWUtZm9ybVwiPiA8ZGl2IGNsYXNzPVwiZ2FtZS1mb3JtX19uYW1lXCI+Qk9XTElORy5KUzwvZGl2PiAnKTsgcGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIGluZGV4KSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImdhbWUtZm9ybV9fcm93XCI+IDxpbnB1dCBjbGFzcz1cImdhbWUtZm9ybV9faW5wdXRcIiBkYXRhLWdhbWUtZm9ybT1cImlucHV0XCIgZGF0YS1pbmRleD1cIicsIGluZGV4ICwnXCIgdmFsdWU9XCInLCBwbGF5ZXIgLCdcIj4gPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IDxidXR0b24gZGF0YS1nYW1lLWZvcm09XCJwbGF5XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPlBsYXk8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwibW9kYWwgbW9kYWxfXycsIHN0eWxlICwnIG1vZGFsX2FuaW1hdGlvbl9ib3VuY2VJbiAnLCBpc09wZW4gPyAnJyA6ICdtb2RhbF9faGlkZGVuJyAsJ1wiPiA8ZGl2IGRhdGEtbW9kYWw9XCJjbG9zZVwiIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCI+w5c8L2Rpdj4gPGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCI+ICcsIGNvbnRlbnRIVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanN0XG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCByb3cuaXNIZWFkID8gJ2hlYWQnIDogJ3BsYXllcicgLCcgcm93IGNsZWFyZml4XCI+ICcsIGNlbGxzSFRNTCAsJyA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==