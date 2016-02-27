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
	exports.push([module.id, ".app__root___3AvEu {\n}\n.app__image___6L2Cb {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___3LXHk {\n    position:relative;\n}\n\n.app__author___1_siw {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.app__author__top___3GHP1 { }\n\n.app__author__bottom___1l9p1 { }\n\n.app__button___1LwDt {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.app__button___1LwDt:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: app__shake___1ldeC;\n}\n\n.app__workspace___32Lgs {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n}\n\n.app__table___1dZrV {\n    width: 780px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n", "", {"version":3,"sources":["/./src/views/app/app.css"],"names":[],"mappings":"AAAA;CACC;AACD;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;IACT,WAAW;CACd;;;AAGD,6BAAgB;;AAEhB,gCAAmB;;AAEnB;IACI,mBAAmB;IACnB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0BAA0B;IAC1B,oBAAoB;CACvB;;AAED;IACI,0BAA0B;IAC1B,mCAAsB;CACzB;;AAED;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;CACd","file":"app.css","sourcesContent":[".root {\n}\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 10px 20px;\n    color: #FFFFFF;\n    text-align: right;\n    font-size: 14px;\n    font-weight: 100;\n    position: absolute;\n    right: 0;\n    top: -50px;\n}\n\n\n.author__top { }\n\n.author__bottom { }\n\n.button {\n    position: absolute;\n    top: -33px;\n    left:0;\n    right:0;\n    border-radius: 0 0 5px 5px;\n    font-size: 45px;\n    margin: 0px auto;\n    display: block;\n    border: none;\n    color: #fff;\n    width: 780px;\n    height: 100px;\n    cursor: pointer;\n    text-transform: uppercase;\n    background: #e74c3c;\n}\n\n.button:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: shake;\n}\n\n.workspace {\n    background-color: #4DA3DD;\n    margin-top: 100px;\n    position: relative;\n}\n\n.table {\n    width: 780px;\n    margin: 0 auto 0 auto;\n    position: relative;\n    top: -34px;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
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
	exports.push([module.id, ".cell__root___2qM71 {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___2punu .cell__cell___3HQQJ {\n    border-bottom-width: 1px;\n}\n\n.cell__is_left___14Xzq {\n    width: 120px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.cell__is_right___3vlXI {\n    width: 120px\n}\n\n.cell__is_top___rIZil {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.cell__is_scores___2sVPn {\n    font-size: 12px;\n}\n\n.cell__cell___3HQQJ {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n}\n\n.cell__is_top___rIZil .cell__cell___3HQQJ {\n    background-color: transparent;\n    font-weight: 600;\n}\n\n.cell__top___7pA_P {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.cell__half___3Yrnz {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___11jK2 { }\n", "", {"version":3,"sources":["/./src/views/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;IACI,YAAY;CACf;;AAED;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,YAAY;CACf;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;IACnB,0BAA0B;CAC7B;;AAED;IACI,8BAA8B;IAC9B,iBAAiB;CACpB;;AAED;IACI,iCAAiC;CACpC;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n    padding: 1px;\n    color: #fff;\n}\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_left {\n    width: 120px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    line-height: 57px;\n    text-align: center;\n}\n\n.is_right {\n    width: 120px\n}\n\n.is_top {\n    text-align: center;\n    line-height: 30px;\n    height: 47px;\n    font-size: 30px;\n    color: #fff;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n    background-color: #2980b9;\n}\n\n.is_top .cell {\n    background-color: transparent;\n    font-weight: 600;\n}\n\n.top {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n"],"sourceRoot":"webpack://"}]);
	
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
	p.push(' <div class="', cn.row ,'"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIxNjg0OTcxMzI4MjYwZTQ3YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzP2U5MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzP2ExMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3M/ZmU2MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcz9hM2VkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzcz9jZWVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3M/MzkwMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3M/OTY5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzPzJmMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFibGUvdGFibGUuanN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTIxNjg0OTcxMzI4MjYwZTQ3YTVcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBjbiBmcm9tICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgKiBhcyB2ZG9tIGZyb20gJy4vdmlydHVhbC1kb20uanMnO1xuXG4vLyByZWFjdCBzdHlsZVxuaW1wb3J0IGFwcCBmcm9tICcuL3ZpZXdzL2FwcC9hcHAuanMnO1xuLy8gcmVkdXggc3R5bGVcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXBwUmVkdWNlci5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlKHN0YXRlKVxuICAgICAgICAgICAgLmluaXRBcHBOb2RlKClcbiAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICAgICAgLmluaXRHYW1lVGltZXIoKVxuICAgICAgICAgICAgLmFzc2lnbkV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRTdGF0ZSAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRBcHBOb2RlICgpIHtcbiAgICAgICAgdGhpcy5hcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRHYW1lVGltZXIgKCkge1xuICAgICAgICB0aGlzLmdhbWVUaW1lciAmJiBjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTtcblxuICAgICAgICB0aGlzLmdhbWVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIudGlja1RpbWVyKCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVkdWNlQWN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ25FdmVudHMgKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25Eb2N1bWVudEZvY3VzT3V0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRDbGljayAoZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tYWluJykpIHtcbiAgICAgICAgICAgIHRoaXMub25Sb2xsQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1mb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25HYW1lRm9ybUNsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHRoaXMub25Nb2RhbENsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbmFsLXJlc3VsdHMnKSkge1xuICAgICAgICAgICAgdGhpcy5vbkZpbmFsUmVzdWx0c0NsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRGb2N1c091dCAoZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWZvcm0nKSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVGb3JtRm9jdXNPdXQoa2V5LCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtRm9jdXNPdXQgKGtleSwgZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIudXBkYXRlUGxheWVyTmFtZShkYXRhKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmluYWxSZXN1bHRzQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLm5ld0dhbWUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUm9sbENsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JvbGwnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIudGhyb3dCYWxsKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheS50aGVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5lbmRHYW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybUNsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIucGxheUdhbWUoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW9kYWxDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5jbG9zZU1vZGFsKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgSFRNTCA9IGFwcCh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIGxldCB2Tm9kZSA9IHZkb20udk5vZGVGcm9tSFRNTChIVE1MKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudk5vZGUgJiYgdGhpcy5ub2RlKSB7XG4gICAgICAgICAgICAgICAgdmRvbS5hcHBseVBhdGNoKHRoaXMubm9kZSwgdmRvbS5kaWZmKHRoaXMudk5vZGUsIHZOb2RlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZSA9IHZkb20uY3JlYXRlRWxlbWVudCh2Tm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwTm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZOb2RlID0gdk5vZGU7XG4gICAgICAgICAgICB0aGlzLmZpbGxOb2RlcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaWxsTm9kZXMoKSB7XG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWQgLmxlZnQtY29sIC5jZWxsJylbMF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5uZXcgQXBwKHJlZHVjZXIoKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAuanNcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGdhbWVNb2RhbFJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZU1vZGFsUmVkdWNlcic7XG5pbXBvcnQgZ2FtZVBsYXlSZWR1Y2VyQ3JlYXRlciBmcm9tICcuL2dhbWVQbGF5UmVkdWNlcic7XG5cbmxldCB0eXBlcyA9IHtcbiAgICBUSUNLX1RJTUVSOiAnVElDS19USU1FUicsXG4gICAgVEhST1dfQkFMTDogJ1RIUk9XX0JBTEwnLFxuICAgIENMT1NFX01PREFMOiAnQ0xPU0VfTU9EQUwnLFxuICAgIFBMQVlfR0FNRTogJ1BMQVlfR0FNRScsXG4gICAgTkVXX0dBTUU6ICdORVdfR0FNRScsXG4gICAgRU5EX0dBTUU6ICdFTkRfR0FNRScsXG4gICAgVVBEQVRFX1BMQVlFUl9OQU1FOiAnVVBEQVRFX1BMQVlFUl9OQU1FJ1xufTtcblxubGV0IGdhbWVNb2RhbFJlZHVjZXIgPSBnYW1lTW9kYWxSZWR1Y2VyQ3JlYXRlcih0eXBlcyk7XG5sZXQgZ2FtZVBsYXlSZWR1Y2VyID0gZ2FtZVBsYXlSZWR1Y2VyQ3JlYXRlcih0eXBlcyk7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKSwgYWN0aW9uID0ge30pIHtcbiAgICBzdGF0ZS5wbGF5ID0gZ2FtZVBsYXlSZWR1Y2VyKHN0YXRlLnBsYXksIGFjdGlvbik7XG4gICAgc3RhdGUubW9kYWwgPSBnYW1lTW9kYWxSZWR1Y2VyKHN0YXRlLm1vZGFsLCBhY3Rpb24pO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5sZXQgYWN0aW9ucyA9IHt9O1xuXG5hY3Rpb25zLnVwZGF0ZVBsYXllck5hbWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9QTEFZRVJfTkFNRSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH07XG59O1xuXG5hY3Rpb25zLnRocm93QmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USFJPV19CQUxMXG4gICAgfTtcbn07XG5cbmFjdGlvbnMucGxheUdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuUExBWV9HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMubmV3R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ORVdfR0FNRVxuICAgIH07XG59O1xuXG5hY3Rpb25zLmVuZEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRU5EX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5jbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkNMT1NFX01PREFMXG4gICAgfTtcbn07XG5cbmFjdGlvbnMudGlja1RpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRJQ0tfVElNRVJcbiAgICB9O1xufTtcblxuLy9PYmplY3QuYXNzaWduKHJlZHVjZXIsIHR5cGVzKTtcbk9iamVjdC5hc3NpZ24ocmVkdWNlciwgYWN0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qc1xuICoqLyIsImZ1bmN0aW9uIGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdmaW5hbC1yZXN1bHRzJyxcbiAgICAgICAgc3R5bGU6ICdibHVlJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZ2FtZS1mb3JtJyxcbiAgICAgICAgc3R5bGU6ICdibHVlJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICBsZXQgc3RhdGUgPSBjcmVhdGVHYW1lRm9ybVN0YXRlKCk7XG4gICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5DTE9TRV9NT0RBTDpcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuRU5EX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuTkVXX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBjcmVhdGVHYW1lRm9ybVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2dhbWVNb2RhbFJlZHVjZXIuanNcbiAqKi8iLCJjb25zdCBGUkFNRVNfTEVOR1RIID0gMTA7XG5cbmZ1bmN0aW9uIHJhbmdlKGxlbmd0aCkge1xuICAgIHJldHVybiBBcnJheShsZW5ndGgpLmpvaW4oJyAnKS5zcGxpdCgnICcpLm1hcCgodiwgaSkgPT4gaSk7XG59XG5cbmZ1bmN0aW9uIHBhZCAodmFsdWUsIGxlbmd0aCkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgMjtcblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNEaWZmVGltZSAoc3RhdGUpIHtcbiAgICBsZXQgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIHN0YXRlLnN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgICAgcmlnaHRTaWRlID0gdG90YWxTZWNvbmRzICUgNjAsXG4gICAgICAgIGxlZnRTaWRlID0gKHRvdGFsU2Vjb25kcyAtIHJpZ2h0U2lkZSkgLyA2MDtcblxuICAgIHN0YXRlLmRpZmZUaW1lID0gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByb2xsIChwaW5zKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwICUgcGlucyk7XG59XG5cbmZ1bmN0aW9uIHRocm93QmFsbCAocGlucykge1xuICAgIGxldCB2YWx1ZXMgPSBbcm9sbChwaW5zKV07XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlIChwbGF5ZXJzKSB7XG4gICAgcGxheWVycyA9IHBsYXllcnMgfHwgWydQbGF5ZXIgMScsICdQbGF5ZXIgMiddO1xuXG4gICAgbGV0IGZyYW1lcyA9IHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgcGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgICAgcGxheWVyczogcGxheWVycyxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICB0aGVFbmQ6IGZhbHNlLFxuICAgICAgICBsYXN0UmVzdWx0OiAnJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVSb3dzKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IGZyYW1lLnRpdGxlLFxuICAgICAgICAgICAgaXNSaWdodDogaW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZSwgaXNUb3A6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgcEluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjb2xzID0gc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGZJbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbcEluZGV4XTtcbiAgICAgICAgICAgIGxldCBjZWxsID0ge1xuICAgICAgICAgICAgICAgIDA6IHJvbGxzWzBdID8gcm9sbHNbMF0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAxOiByb2xsc1sxXSA/IHJvbGxzWzFdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgdG90YWw6IHJvbGxzLnRvdGFsLFxuICAgICAgICAgICAgICAgIGlzUmlnaHQ6IGZJbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzU2NvcmVzOiB0cnVlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29scy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHRleHQ6IHBsYXllcixcbiAgICAgICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBjb2xzIH07XG4gICAgfSk7XG5cbiAgICByb3dzLnB1c2goLi4ucFJvd3MpO1xuXG4gICAgcmV0dXJuIHJvd3M7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVGaW5hbFJlc3VsdHMoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHBsYXllcixcbiAgICAgICAgICAgIHNjb3Jlczogc3VtKHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lKSA9PiBmcmFtZVtpbmRleF0udG90YWwpKVxuICAgICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmVzIC0gYS5zY29yZXM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVWaWV3KHN0YXRlKSB7XG4gICAgc3RhdGUucm93cyA9IHByZXBhcmVSb3dzKHN0YXRlKTtcbiAgICBzdGF0ZS5maW5hbFJlc3VsdHMgPSBwcmVwYXJlRmluYWxSZXN1bHRzKHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gc3VtKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VJbnQodmFsIHx8IDAsIDEwKTtcbiAgICB9LCAwKTtcbn1cblxuZnVuY3Rpb24gbmV4dFBsYXllcihzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS50aGVFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIgPSBwbGF5ZXIgPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA/IDAgOiBwbGF5ZXIgKyAxO1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRGcmFtZSA9IHN0YXRlLmN1cnJlbnRGcmFtZSA8IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxID8gc3RhdGUuY3VycmVudEZyYW1lICsgMSA6IHN0YXRlLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9udXNGcmFtZXMgKHN0YXRlKSB7XG4gICAgbGV0IGZyYW1lcyA9IHN0YXRlLmZyYW1lcy5zbGljZShNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50RnJhbWUgLSAyKSwgc3RhdGUuY3VycmVudEZyYW1lICsgMSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZnJhbWVbc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgfSk7XG5cbiAgICBsZXQgY3VyckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBmcmFtZXMubGVuZ3RoLS07XG5cbiAgICBsZXQgciA9IDIgLSBjdXJyRnJhbWUubGVuZ3RoO1xuICAgIGxldCBib251c0ZyYW1lcyA9IFtdO1xuXG4gICAgd2hpbGUgKHIgJiYgZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXMucG9wKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHIgPT09IDEgJiYgZnJhbWVbMF0udmFsdWUgPT09IDEwKSB8fFxuICAgICAgICAgICAgKHIgPT09IDIgJiYgKGZyYW1lLnRvdGFsID09PSAxMCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYm9udXNGcmFtZXMudW5zaGlmdChmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByIC09IGZyYW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9udXNGcmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdFBsYXllciAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID09PSBzdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RGcmFtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY3VycmVudEZyYW1lID09PSBGUkFNRVNfTEVOR1RIIC0gMTtcbn1cblxuZnVuY3Rpb24gb25UaWNrVGltZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGNhbGNEaWZmVGltZShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVGhyb3dCYWxsIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS50aGVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGxldCBmcmFtZSA9IHN0YXRlLmZyYW1lc1tzdGF0ZS5jdXJyZW50RnJhbWVdW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGxldCBwaW5zID0gRlJBTUVTX0xFTkdUSDtcblxuICAgIGlmIChmcmFtZVswXSAmJiBwaW5zICE9PSBmcmFtZVswXS52YWx1ZSkge1xuICAgICAgICBwaW5zIC09IGZyYW1lWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBib251c0ZyYW1lcyA9IGdldEJvbnVzRnJhbWVzKHN0YXRlKTtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heCh0aHJvd0JhbGwocGlucyksIHRocm93QmFsbChwaW5zKSk7XG5cbiAgICBib251c0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS50b3RhbCArPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSB9O1xuXG4gICAgZnJhbWUucHVzaChyb2xsKTtcblxuICAgIGxldCByb2xsc1N1bSA9IHN1bShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuXG4gICAgICAgICAgICBpZiAoIWlzTGFzdEZyYW1lKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoZnJhbWUudG90YWwgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdCA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25QbGF5R2FtZShzdGF0ZSkge1xuICAgIHJldHVybiBnZXRJbml0aWFsU3RhdGUoc3RhdGUucGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblBsYXlHYW1lKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USUNLX1RJTUVSOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRocm93QmFsbChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVwYXJlVmlldyhzdGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHRhYmxlIGZyb20gJy4uL3RhYmxlL3RhYmxlLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9hcHAuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgdGFibGVIVE1MOiB0YWJsZShhcHApLFxuICAgICAgICBtb2RhbEhUTUw6IG1vZGFsKGFwcCksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04oc3RhdGUpIHtcbiAgICBsZXQgcm9vdCA9IGNuLl9yb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKHN0YXRlLmlzTGVmdCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfbGVmdCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzUmlnaHQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3JpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3RvcCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzQm90dG9tKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19ib3R0b20pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1Njb3Jlcykge1xuICAgICAgICByb290LnB1c2goY24uaXNfc2NvcmVzKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgIGNuOiBwcmVwYXJlQ04oY2VsbClcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2ZpbmFsLXJlc3VsdHMuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZpbmFsLXJlc3VsdHMuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBsYXkpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIGZpbmFsUmVzdWx0czogcGxheS5maW5hbFJlc3VsdHNcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2dhbWUtZm9ybS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ2FtZS1mb3JtLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwbGF5KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IGNuLFxuICAgICAgICBwbGF5ZXJzOiBwbGF5LnBsYXllcnNcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanNcbiAqKi8iLCJpbXBvcnQgZ2FtZUZvcm0gZnJvbSAnLi4vZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyc7XG5pbXBvcnQgZmluYWxSZXN1bHRzIGZyb20gJy4uL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9tb2RhbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUubW9kYWwuc3R5bGUpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuWydzdHlsZV8nICsgc3RhdGUubW9kYWwuc3R5bGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnB1c2goY24uaW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5tb2RhbC5pc09wZW4pIHtcbiAgICAgICAgcm9vdC5wdXNoKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjbi5fcm9vdCA9IHJvb3Quam9pbignICcpO1xuXG4gICAgcmV0dXJuIGNuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgbGV0IGNvbnRlbnRIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2ggKGFwcC5tb2RhbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2dhbWUtZm9ybSc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGdhbWVGb3JtKGFwcC5wbGF5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZpbmFsLXJlc3VsdHMnOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBmaW5hbFJlc3VsdHMoYXBwLnBsYXkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogcHJlcGFyZUNOKGFwcCksXG4gICAgICAgIGNvbnRlbnRIVE1MXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4uL2NlbGwvY2VsbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9yb3cuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4uL3Jvdy9yb3cuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vdGFibGUuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYmxlLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogYXBwLnBsYXkucm93cy5tYXAocm93KS5qb2luKCcnKSxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzXG4gKiovIiwiZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICBpZiAoSFRNTC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEhUTUwpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZXhjZXB0IGlPUyA3IFNhZmFyaSwgSUUgOC85LCBBbmRyaW9kIEJyb3dzZXIgNC4xLzQzXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhIVE1MLCAndGV4dC9odG1sJykuZG9jdW1lbnRFbGVtZW50O1xuICAgIGxldCBoZWFkID0gZG9jLmNoaWxkTm9kZXNbMF07XG4gICAgbGV0IGJvZHkgPSBkb2MuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGlmIChub2RlID0gaGVhZC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGhlYWQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlID0gYm9keS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgICBsZXQgdk5vZGUgPSB7XG4gICAgICAgIHR5cGU6IG5vZGUubm9kZVR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgdk5vZGUuY29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW5zID0gW107XG4gICAgICAgIHZOb2RlLmF0dHJzID0ge307XG4gICAgICAgIHZOb2RlLnRhZyA9IG5vZGUudGFnTmFtZTtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW5zLnB1c2goY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzTmFtZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZOb2RlLmF0dHJzW25hbWVdID0gbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2Tm9kZTtcbn1cblxuZnVuY3Rpb24gam9pbkF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGxldCBhdHRyID0gYXR0cnNba2V5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGtleSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHthdHRyfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCA9ICcnKSB7XG4gICAgbGV0IGF0dHJzID0gam9pbkF0dHJzKHZOb2RlLmF0dHJzKTtcblxuICAgIHN3aXRjaCh2Tm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIGAke2lubmVySFRNTH1gO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gYDwke3ZOb2RlLnRhZ30gJHthdHRyc30+JHtpbm5lckhUTUx9PC8ke3ZOb2RlLnRhZ30+YDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwodk5vZGUpIHtcbiAgICBsZXQgaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAodk5vZGUudHlwZSAhPT0gMykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbm5lckhUTUwgKz0gcmVuZGVySFRNTCh2Tm9kZS5jaGlsZHJlbnNbaV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJIVE1MID0gdk5vZGUuY29udGVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MKTtcbn1cblxuZXhwb3J0IGxldCBkaWZmID0gZnVuY3Rpb24gKHZOb2RlMSwgdk5vZGUyKSB7XG4gICAgaWYgKHZOb2RlMSAmJiAhdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdk5vZGUxICYmIHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50YWcgIT09IHZOb2RlMi50YWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKHZOb2RlMS5jb250ZW50ICE9PSB2Tm9kZTIuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGF0dHJzID0gW107XG4gICAgICAgIGxldCBwYXRjaCA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMSA9IHZOb2RlMS5hdHRyc1trZXldO1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMi5qb2luKCcgJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxVmFsID0gYXR0cjEuam9pbignICcpO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyMVZhbCAhPT0gYXR0cjJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMS5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cjIpIHtcbiAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFTU9WRScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2Tm9kZTEuY2hpbGRyZW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChjRGlmZikge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYXR0cnM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIG9wKSB7XG4gICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRVBMQUNFX05PREUnOlxuICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBjcmVhdGVFbGVtZW50KG9wLnZOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbmV3Tm9kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0ck9wcyhub2RlLCBvcHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gb3BzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcCA9IG9wc1tpXTtcbiAgICAgICAgbGV0IG5hbWUgPSBvcC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2gob3AudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnU0VUJzpcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBvcC52YWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdSRU1PVkUnOlxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGxldCBhcHBseVBhdGNoID0gZnVuY3Rpb24gKG5vZGUsIHBhdGNoZXMsIHBhcmVudE5vZGUpIHtcbiAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHBhdGNoZXMudHlwZSkge1xuICAgICAgICBub2RlID0gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIHBhdGNoZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2hlcykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJzJykge1xuICAgICAgICAgICAgICAgIGFwcGx5QXR0ck9wcyhub2RlLCBwYXRjaGVzW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseVBhdGNoKGNoaWxkTm9kZXNba2V5XSwgcGF0Y2hlc1trZXldLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGxldCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVGcm9tSFRNTChyZW5kZXJIVE1MKHZOb2RlKSk7XG59O1xuXG5leHBvcnQgbGV0IHZOb2RlRnJvbUhUTUwgPSBmdW5jdGlvbiAoSFRNTCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZUZyb21Ob2RlKGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSk7XG59O1xuXG5leHBvcnQgbGV0IGFwcGx5Vk5vZGUgPSBmdW5jdGlvbiAobm9kZSwgdk5vZGUpIHtcbiAgICByZXR1cm4gYXBwbHlQYXRjaChub2RlLCBkaWZmKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZSksIHZOb2RlKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aXJ0dWFsLWRvbS5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjYXJldDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA2MiwgODApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweCAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjc3KTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5ib3VuY2VJbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICBmcm9tLCB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDcwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHNDQUFzQztDQUN6Qzs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7R0FDbkM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCO0NBQ0Y7O0FBRUQ7SUFDSTtRQUNJLGdDQUFnQztLQUNuQzs7SUFFRDtRQUNJLG1DQUFtQztLQUN0Qzs7SUFFRDtRQUNJLGtDQUFrQztLQUNyQztDQUNKXCIsXCJmaWxlXCI6XCJtYWluLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4uY2xlYXJmaXg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDYyLCA4MCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTNweCAxNXB4IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJvdW5jZUluIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIGZyb20sIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vc3JjL2Nzcy9tYWluLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBfX3Jvb3RfX18zQXZFdSB7XFxufVxcbi5hcHBfX2ltYWdlX19fNkwyQ2Ige1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fd3BfX18zTFhIayB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwX19hdXRob3JfX18xX3NpdyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxufVxcblxcblxcbi5hcHBfX2F1dGhvcl9fdG9wX19fM0dIUDEgeyB9XFxuXFxuLmFwcF9fYXV0aG9yX19ib3R0b21fX18xbDlwMSB7IH1cXG5cXG4uYXBwX19idXR0b25fX18xTHdEdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDc4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fXzFMd0R0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY1MjgwMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fc2hha2VfX18xbGRlQztcXG59XFxuXFxuLmFwcF9fd29ya3NwYWNlX19fMzJMZ3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERBM0REO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwX190YWJsZV9fXzFkWnJWIHtcXG4gICAgd2lkdGg6IDc4MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzRweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9hcHAvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztDQUNkOzs7QUFHRCw2QkFBZ0I7O0FBRWhCLGdDQUFtQjs7QUFFbkI7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixtQ0FBc0I7Q0FDekI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZFwiLFwiZmlsZVwiOlwiYXBwLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxufVxcbi5pbWFnZSB7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDJweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmJ1dHRvbl9fd3Age1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmF1dGhvciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxufVxcblxcblxcbi5hdXRob3JfX3RvcCB7IH1cXG5cXG4uYXV0aG9yX19ib3R0b20geyB9XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDc4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAjNjUyODAxO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxufVxcblxcbi53b3Jrc3BhY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERBM0REO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFibGUge1xcbiAgICB3aWR0aDogNzgwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zNHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJhcHBfX3Jvb3RfX18zQXZFdVwiLFxuXHRcImltYWdlXCI6IFwiYXBwX19pbWFnZV9fXzZMMkNiXCIsXG5cdFwiYnV0dG9uX193cFwiOiBcImFwcF9fYnV0dG9uX193cF9fXzNMWEhrXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXBwX19hdXRob3JfX18xX3Npd1wiLFxuXHRcImF1dGhvcl9fdG9wXCI6IFwiYXBwX19hdXRob3JfX3RvcF9fXzNHSFAxXCIsXG5cdFwiYXV0aG9yX19ib3R0b21cIjogXCJhcHBfX2F1dGhvcl9fYm90dG9tX19fMWw5cDFcIixcblx0XCJidXR0b25cIjogXCJhcHBfX2J1dHRvbl9fXzFMd0R0XCIsXG5cdFwic2hha2VcIjogXCJhcHBfX3NoYWtlX19fMWxkZUNcIixcblx0XCJ3b3Jrc3BhY2VcIjogXCJhcHBfX3dvcmtzcGFjZV9fXzMyTGdzXCIsXG5cdFwidGFibGVcIjogXCJhcHBfX3RhYmxlX19fMWRaclZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9hcHAvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsX19yb290X19fMnFNNzEge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGxfX2lzX3JpZ2h0X19fM3ZsWEkgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbF9faXNfYm90dG9tX19fMnB1bnUgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2xlZnRfX18xNFh6cSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsX19pc19yaWdodF9fXzN2bFhJIHtcXG4gICAgd2lkdGg6IDEyMHB4XFxufVxcblxcbi5jZWxsX19pc190b3BfX19ySVppbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogNDdweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNlbGxfX2lzX3Njb3Jlc19fXzJzVlBuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fcklaaWwgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2VsbF9fdG9wX19fN3BBX1Age1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLmNlbGxfX2hhbGZfX18zWXJueiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY2VsbF9fZnVsbF9fXzExaksyIHsgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0NBQ2Q7O0FBRUQsdUJBQVNcIixcImZpbGVcIjpcImNlbGwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5pc19yaWdodCAuY2VsbCB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cXG4uaXNfYm90dG9tIC5jZWxsIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uaXNfbGVmdCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pc19yaWdodCB7XFxuICAgIHdpZHRoOiAxMjBweFxcbn1cXG5cXG4uaXNfdG9wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaXNfc2NvcmVzIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXG59XFxuXFxuLmlzX3RvcCAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5mdWxsIHsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImNlbGxfX3Jvb3RfX18ycU03MVwiLFxuXHRcImlzX3JpZ2h0XCI6IFwiY2VsbF9faXNfcmlnaHRfX18zdmxYSVwiLFxuXHRcImNlbGxcIjogXCJjZWxsX19jZWxsX19fM0hRUUpcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX18ycHVudVwiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fMTRYenFcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX19ySVppbFwiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fXzJzVlBuXCIsXG5cdFwidG9wXCI6IFwiY2VsbF9fdG9wX19fN3BBX1BcIixcblx0XCJoYWxmXCI6IFwiY2VsbF9faGFsZl9fXzNZcm56XCIsXG5cdFwiZnVsbFwiOiBcImNlbGxfX2Z1bGxfX18xMWpLMlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmluYWwtcmVzdWx0c19fbmFtZV9fXzJybFlzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVRzTjYge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtDQUNmXCIsXCJmaWxlXCI6XCJmaW5hbC1yZXN1bHRzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJuYW1lXCI6IFwiZmluYWwtcmVzdWx0c19fbmFtZV9fXzJybFlzXCIsXG5cdFwid2lubmVyXCI6IFwiZmluYWwtcmVzdWx0c19fd2lubmVyX19fMVRzTjZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtZm9ybV9fcm9vdF9fXzFkc1RBIHsgfVxcblxcbi5nYW1lLWZvcm1fX25hbWVfX18xWndpciB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtZm9ybV9faW5wdXRfX18zcGw5RiB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NCwgNjIsIDgwLCAwLjEyKTtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fM3RMVlAge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93X19fM3RMVlA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQVM7O0FBRVQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CXCIsXCJmaWxlXCI6XCJnYW1lLWZvcm0uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHsgfVxcblxcbi5uYW1lIHtcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5yb3cge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLnJvdzpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiZ2FtZS1mb3JtX19yb290X19fMWRzVEFcIixcblx0XCJuYW1lXCI6IFwiZ2FtZS1mb3JtX19uYW1lX19fMVp3aXJcIixcblx0XCJpbnB1dFwiOiBcImdhbWUtZm9ybV9faW5wdXRfX18zcGw5RlwiLFxuXHRcInJvd1wiOiBcImdhbWUtZm9ybV9fcm93X19fM3RMVlBcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbF9fcm9vdF9fXzJvajc5IHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbF9fY2xvc2VfX18xT3R4byB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5tb2RhbF9fY29udGVudF9fXzMtVHlQIHtcXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOTBweCA1cHg7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ncmVlbl9fXzFqQVptIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfb3JhbmdlX19fMlZYTWwge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMTU2LCAxOCwgMC45NSk7XFxufVxcblxcbi5tb2RhbF9fc3R5bGVfcmVkX19fMUxQZHgge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjk1KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ibHVlX19fMW9CQ0wge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC45NSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0NBQXNDO0NBQ3pDOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0kscUNBQXFDO0NBQ3hDXCIsXCJmaWxlXCI6XCJtb2RhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA5MHB4IDVweDtcXG59XFxuXFxuLnN0eWxlX2luZm8ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjk1KTtcXG59XFxuXFxuLnN0eWxlX29yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjk1KTtcXG59XFxuXFxuLnN0eWxlX3JlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOTUpO1xcbn1cXG5cXG4uc3R5bGVfYmx1ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjk1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcImNsb3NlXCI6IFwibW9kYWxfX2Nsb3NlX19fMU90eG9cIixcblx0XCJjb250ZW50XCI6IFwibW9kYWxfX2NvbnRlbnRfX18zLVR5UFwiLFxuXHRcInN0eWxlX2luZm9cIjogXCJtb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKXCIsXG5cdFwic3R5bGVfZ3JlZW5cIjogXCJtb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabVwiLFxuXHRcInN0eWxlX29yYW5nZVwiOiBcIm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbFwiLFxuXHRcInN0eWxlX3JlZFwiOiBcIm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeFwiLFxuXHRcInN0eWxlX2JsdWVcIjogXCJtb2RhbF9fc3R5bGVfYmx1ZV9fXzFvQkNMXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvd19fcm93X19fMi1taDAucm93X19pc19oZWFkX19fMUY1N1Age1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0NBQ3BDXCIsXCJmaWxlXCI6XCJyb3cuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb3cuaXNfaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm93XCI6IFwicm93X19yb3dfX18yLW1oMFwiLFxuXHRcImlzX2hlYWRcIjogXCJyb3dfX2lzX2hlYWRfX18xRjU3UFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRhYmxlLmNzc1wiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2FwcC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vY2VsbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vY2VsbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZmluYWwtcmVzdWx0cy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9nYW1lLWZvcm0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vbW9kYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb3cuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9yb3cuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vdGFibGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vdGFibGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ud29ya3NwYWNlICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5hdXRob3IgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvcl9fdG9wICwnXCI+YnkgQWxleCBBRk9OSU4gZm9yPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5hdXRob3JfX2JvdHRvbSAsJ1wiPkZsb3JpYW4gRkVJQ0hUSU5HRVI8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi50YWJsZSAsJ1wiPiAnLCB0YWJsZUhUTUwgLCcgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiJywgY24uYnV0dG9uX193cCAsJ1wiPiA8YnV0dG9uIGNsYXNzPVwiJywgY24uYnV0dG9uICwnXCIgZGF0YS1tYWluPVwicm9sbFwiPiBST0xMIEJBTEwhPC9idXR0b24+IDwvZGl2PiA8ZGl2PiAnLCBtb2RhbEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmNlbGwgLCdcIj4gJyk7IGlmIChjZWxsLnRleHQpIHsgXG5wLnB1c2goJyAnLCBjZWxsLnRleHQgLCcgJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIHRvcCAsJyBjbGVhcmZpeFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGQgLCdcIj5JSTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtbWlkIGNsZWFyZml4XCI+ICcpOyBpZiAoY2VsbFswXSA9PT0gJ1gnKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLmZ1bGwgLCc+XCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzBdICwnPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0ICcsIGNuLmhhbGYgLCdcIj4nLCBjZWxsWzFdICwnPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLWJvdFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+JywgY2VsbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCcgJywgY24ud2lubmVyICwnXCI+JywgZmluYWxSZXN1bHRzWzBdLm5hbWUgLCcgLSAnLCBmaW5hbFJlc3VsdHNbMF0uc2NvcmVzICwnPC9kaXY+IDxkaXY+ICcpOyBmaW5hbFJlc3VsdHMuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCdcIj4nLCBwbGF5ZXIubmFtZSAsJyAtICcsIHBsYXllci5zY29yZXMgLCc8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnIDxidXR0b24gZGF0YS1maW5hbC1yZXN1bHRzPVwibmV3XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPk5ldyBnYW1lPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzdFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPkJPV0xJTkcuSlM8L2Rpdj4gJyk7IHBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyLCBpbmRleCkgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGlucHV0IGNsYXNzPVwiJywgY24uaW5wdXQgLCdcIiBkYXRhLWdhbWUtZm9ybT1cImlucHV0XCIgZGF0YS1pbmRleD1cIicsIGluZGV4ICwnXCIgdmFsdWU9XCInLCBwbGF5ZXIgLCdcIj4gPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxidXR0b24gZGF0YS1nYW1lLWZvcm09XCJwbGF5XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPlBsYXk8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCcgYW5pbWF0ZWQgYm91bmNlSW5cIj4gPGRpdiBkYXRhLW1vZGFsPVwiY2xvc2VcIiBjbGFzcz1cIicsIGNuLmNsb3NlICwnXCI+w5c8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmNvbnRlbnQgLCdcIj4gJywgY29udGVudEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXY+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==