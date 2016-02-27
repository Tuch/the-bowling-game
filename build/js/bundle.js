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
	
	var _main = __webpack_require__(24);
	
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
	        imageSrc: _ball2.default,
	        cn: _app2.default
	    });
	};
	
	var _table = __webpack_require__(12);

	var _table2 = _interopRequireDefault(_table);

	var _modal = __webpack_require__(10);

	var _modal2 = _interopRequireDefault(_modal);

	var _ball = __webpack_require__(23);

	var _ball2 = _interopRequireDefault(_ball);

	var _app = __webpack_require__(25);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(32);

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
	
	var _cell = __webpack_require__(26);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _cell3 = __webpack_require__(33);
	
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
	
	var _finalResults = __webpack_require__(27);

	var _finalResults2 = _interopRequireDefault(_finalResults);

	var _finalResults3 = __webpack_require__(34);

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
	
	var _gameForm = __webpack_require__(28);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(35);

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
	
	var _modal = __webpack_require__(29);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _modal3 = __webpack_require__(36);
	
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

	var _row = __webpack_require__(30);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(37);

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

	var _table = __webpack_require__(31);

	var _table2 = _interopRequireDefault(_table);

	var _table3 = __webpack_require__(38);

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
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n", "", {"version":3,"sources":["/./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;CACxC;;AAED;IACI,uBAAuB;CAC1B;;AAED;IACI,YAAY;IACZ,eAAe;IACf,YAAY;CACf;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,uCAAuC;IACvC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,0BAA0B;IAC1B,gBAAgB;IAChB,aAAa;CAChB;;AAED;IACI,sCAAsC;CACzC;;AAED;IACI,wBAAwB;IACxB,0BAA0B;CAC7B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE;IACE,WAAW;IACX,kCAAkC;GACnC;;EAED;IACE,WAAW;IACX,4BAA4B;GAC7B;CACF;;AAED;IACI;QACI,gCAAgC;KACnC;;IAED;QACI,mCAAmC;KACtC;;IAED;QACI,kCAAkC;KACrC;CACJ","file":"main.css","sourcesContent":["body {\n    font-family: 'Open Sans', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.form-button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.form-button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.animated {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    animation-name: bounceIn;\n}\n\n.shake {\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes shake {\n    from, to {\n        transform: translate3d(0, 0, 0);\n    }\n\n    30% {\n        transform: translate3d(-5px, 0, 0);\n    }\n\n    70% {\n        transform: translate3d(5px, 0, 0);\n    }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".app__root___3AvEu {\n    width: 720px;\n    margin: 0 auto 0 auto;\n}\n.app__image___6L2Cb {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.app__button__wp___3LXHk {\n    position:relative;\n}\n\n.app__author___1_siw {\n    padding: 0px 0px 30px 5px;\n    color: #ccc;\n    text-align: right;\n}\n\n.app__button___1LwDt {\n    position: relative;\n    font-size: 250%;\n    margin: 50px auto;\n    display: block;\n    border-radius: 50%;\n    border: none;\n    color: #fff;\n    padding: 121px 20px 20px 20px;\n    width: 200px;\n    height: 200px;\n    cursor: pointer;\n    box-shadow: 0 2px rgba(243, 156, 18, 0.8);\n    text-transform: uppercase;\n    background: transparent;\n    -webkit-appearance: caret;\n}\n\n.app__button___1LwDt:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: app__shake___1ldeC;\n}\n\n\n", "", {"version":3,"sources":["/./src/views/app/app.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;CACzB;AACD;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,0BAA0B;IAC1B,YAAY;IACZ,kBAAkB;CACrB;;AAED;IACI,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,0CAA0C;IAC1C,0BAA0B;IAC1B,wBAAwB;IACxB,0BAA0B;CAC7B;;AAED;IACI,0BAA0B;IAC1B,mCAAsB;CACzB","file":"app.css","sourcesContent":[".root {\n    width: 720px;\n    margin: 0 auto 0 auto;\n}\n.image {\n    margin: 50px auto 50px auto;\n    display: block;\n    position: absolute;\n    top: -42px;\n    left: 260px;\n    width: 200px;\n}\n\n.button__wp {\n    position:relative;\n}\n\n.author {\n    padding: 0px 0px 30px 5px;\n    color: #ccc;\n    text-align: right;\n}\n\n.button {\n    position: relative;\n    font-size: 250%;\n    margin: 50px auto;\n    display: block;\n    border-radius: 50%;\n    border: none;\n    color: #fff;\n    padding: 121px 20px 20px 20px;\n    width: 200px;\n    height: 200px;\n    cursor: pointer;\n    box-shadow: 0 2px rgba(243, 156, 18, 0.8);\n    text-transform: uppercase;\n    background: transparent;\n    -webkit-appearance: caret;\n}\n\n.button:hover {\n    box-shadow: 0 2px #652801;\n    animation-name: shake;\n}\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "app__root___3AvEu",
		"image": "app__image___6L2Cb",
		"button__wp": "app__button__wp___3LXHk",
		"author": "app__author___1_siw",
		"button": "app__button___1LwDt",
		"shake": "app__shake___1ldeC"
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell__root___2qM71 {\n    width: 60px;\n    height: 60px;\n    float: left;\n}\n\n.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-right-width: 1px;\n}\n\n.cell__is_bottom___2punu .cell__cell___3HQQJ {\n    border-bottom-width: 1px;\n}\n\n.cell__is_top___rIZil.cell__is_left___14Xzq .cell__cell___3HQQJ {\n    border-radius: 10px 0 0 0;\n}\n\n.cell__is_top___rIZil.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-radius: 0 10px 0 0;\n}\n\n.cell__is_bottom___2punu.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-radius: 0 0 0 10px;\n}\n\n.cell__is_bottom___2punu.cell__is_right___3vlXI .cell__cell___3HQQJ {\n    border-radius: 0 0 10px 0;\n}\n\n.cell__is_top___rIZil {\n    text-align: center;\n}\n\n.cell__is_left___14Xzq {\n    width: 120px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    color: rgba(131, 178, 186, 0.95);\n    line-height: 57px;\n    text-align: center;\n}\n\n.cell__is_scores___2sVPn {\n    font-size: 12px;\n}\n\n.cell__cell___3HQQJ {\n    width: 100%;\n    height: 100%;\n    border-color: #eee;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n}\n\n.cell__top___7pA_P {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.cell__half___3Yrnz {\n    float: left;\n    width: 50%;\n}\n\n.cell__full___11jK2 { }\n", "", {"version":3,"sources":["/./src/views/cell/cell.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;CACf;;AAED;IACI,wBAAwB;CAC3B;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,0BAA0B;IAC1B,iCAAiC;IACjC,kBAAkB;IAClB,mBAAmB;CACtB;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,0BAA0B;IAC1B,mBAAmB;CACtB;;AAED;IACI,iCAAiC;CACpC;;AAED;IACI,YAAY;IACZ,WAAW;CACd;;AAED,uBAAS","file":"cell.css","sourcesContent":[".root {\n    width: 60px;\n    height: 60px;\n    float: left;\n}\n\n.is_right .cell {\n    border-right-width: 1px;\n}\n\n.is_bottom .cell {\n    border-bottom-width: 1px;\n}\n\n.is_top.is_left .cell {\n    border-radius: 10px 0 0 0;\n}\n\n.is_top.is_right .cell {\n    border-radius: 0 10px 0 0;\n}\n\n.is_bottom.is_right .cell {\n    border-radius: 0 0 0 10px;\n}\n\n.is_bottom.is_right .cell {\n    border-radius: 0 0 10px 0;\n}\n\n.is_top {\n    text-align: center;\n}\n\n.is_left {\n    width: 120px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-transform: uppercase;\n    color: rgba(131, 178, 186, 0.95);\n    line-height: 57px;\n    text-align: center;\n}\n\n.is_scores {\n    font-size: 12px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: #eee;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n}\n\n.top {\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.half {\n    float: left;\n    width: 50%;\n}\n\n.full { }\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "cell__root___2qM71",
		"is_right": "cell__is_right___3vlXI",
		"cell": "cell__cell___3HQQJ",
		"is_bottom": "cell__is_bottom___2punu",
		"is_top": "cell__is_top___rIZil",
		"is_left": "cell__is_left___14Xzq",
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
	exports.push([module.id, ".final-results__final-results__name___2bAbK {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n.final-results__final-result__winner___181uH {\n    font-size:40px;\n    width: auto;\n}\n", "", {"version":3,"sources":["/./src/views/final-results/final-results.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;CACvB;AACD;IACI,eAAe;IACf,YAAY;CACf","file":"final-results.css","sourcesContent":[".final-results__name {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    margin: 0 auto;\n    display: block;\n    text-align: center;\n    margin-bottom: -1px;\n    margin-bottom: 30px;\n}\n.final-result__winner {\n    font-size:40px;\n    width: auto;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"final-results__name": "final-results__final-results__name___2bAbK",
		"final-result__winner": "final-results__final-result__winner___181uH"
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
	exports.push([module.id, ".modal__root___2oj79 {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.modal__close___1Otxo {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.modal__close___1Otxo:hover {\n    transform: rotate(90deg);\n}\n\n.modal__content___3-TyP {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.modal__style_info___1ik3J {\n    background: rgba(236, 240, 241, 0.8);\n}\n\n.modal__style_green___1jAZm {\n    background: rgba(39, 174, 96, 0.8);\n}\n\n.modal__style_orange___2VXMl {\n    background: rgba(243, 156, 18, 0.8);\n}\n\n.modal__style_red___1LPdx {\n    background: rgba(231, 76, 60, 0.8);\n}\n", "", {"version":3,"sources":["/./src/views/modal/modal.css"],"names":[],"mappings":"AAAA;IACI,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,YAAY;IACZ,aAAa;CAChB;;AAED;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;CACjB;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED;IACI,qCAAqC;CACxC;;AAED;IACI,mCAAmC;CACtC;;AAED;IACI,oCAAoC;CACvC;;AAED;IACI,mCAAmC;CACtC","file":"modal.css","sourcesContent":[".root {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.close:hover {\n    transform: rotate(90deg);\n}\n\n.content {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.style_info {\n    background: rgba(236, 240, 241, 0.8);\n}\n\n.style_green {\n    background: rgba(39, 174, 96, 0.8);\n}\n\n.style_orange {\n    background: rgba(243, 156, 18, 0.8);\n}\n\n.style_red {\n    background: rgba(231, 76, 60, 0.8);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"root": "modal__root___2oj79",
		"close": "modal__close___1Otxo",
		"content": "modal__content___3-TyP",
		"style_info": "modal__style_info___1ik3J",
		"style_green": "modal__style_green___1jAZm",
		"style_orange": "modal__style_orange___2VXMl",
		"style_red": "modal__style_red___1LPdx"
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

	module.exports = __webpack_require__.p + "src/images/ball.png";

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
/* 32 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.workspace ,'"> <div class="', cn.author ,'">by Alex Afonin</div> <div> ', tableHTML ,' </div> <div class="', cn.button__wp ,'"> <img class="', cn.image ,'" src="', imageSrc ,'"> <button class="', cn.button ,'" data-main="roll" ></button> </div> </div> <div> ', modalHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="final-results"> <div class="final-results__name final-result__winner">', finalResults[0].name ,' WON! - ', finalResults[0].scores ,'</div> <div class="final-results__row"> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="final-results__name">', player.name ,' - ', player.scores ,'</div> '); }); 
	p.push(' <button data-final-results="new" class="form-button">New game</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,'">BOWLING.JS</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="', cn.row ,'"> <input class="', cn.input ,'" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' <div class="', cn.row ,'"> <button data-game-form="play" class="form-button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn._root ,' animated bounceIn"> <div data-modal="close" class="', cn.close ,'">×</div> <div class="', cn.content ,'"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.row ,' clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> ', rowsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2VjYTMyYjI0ZTM1ODdkYWIwNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhbGwucG5nIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/ZTkyMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5jc3M/YTExZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcz9mZTYwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzP2EzZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzP2NlZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcz8zOTAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmNzcz85Njk3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3M/MmYxYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNoTCxpREFBZ0QsRUFBRSxPO0FBQ2xELGdJQUErSCxFO0FBQy9ILGdHQUErRixFO0FBQy9GLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsbU1BQW1NLGtEO0FBQ2hSLDRGQUEyRixFQUFFLEU7QUFDN0YsbUdBQWtHO0FBQ2xHLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSxtRkFBbUYsMkM7QUFDaEssbUpBQWtKLEVBQUUsRTtBQUNwSix1SEFBc0g7QUFDdEgsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLGlMQUFpTDtBQUM5UCxFOzs7Ozs7QUNIQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsdUVBQXVFO0FBQ3BKLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSx3Q0FBd0M7QUFDckgsRSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNlY2EzMmIyNGUzNTg3ZGFiMDYzXG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgY24gZnJvbSAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICogYXMgdmRvbSBmcm9tICcuL3ZpcnR1YWwtZG9tLmpzJztcblxuLy8gcmVhY3Qgc3R5bGVcbmltcG9ydCBhcHAgZnJvbSAnLi92aWV3cy9hcHAvYXBwLmpzJztcbi8vIHJlZHV4IHN0eWxlXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2FwcFJlZHVjZXIuanMnO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChzdGF0ZSkge1xuICAgICAgICB0aGlzLmluaXRTdGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIC5pbml0QXBwTm9kZSgpXG4gICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgICAgIC5pbml0R2FtZVRpbWVyKClcbiAgICAgICAgICAgIC5hc3NpZ25FdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0U3RhdGUgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0QXBwTm9kZSAoKSB7XG4gICAgICAgIHRoaXMuYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbml0R2FtZVRpbWVyICgpIHtcbiAgICAgICAgdGhpcy5nYW1lVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7XG5cbiAgICAgICAgdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnRpY2tUaW1lcigpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlZHVjZUFjdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXNzaWduRXZlbnRzICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uRG9jdW1lbnRGb2N1c091dC5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFpbicpKSB7XG4gICAgICAgICAgICB0aGlzLm9uUm9sbENsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZUZvcm1DbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kYWxDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1maW5hbC1yZXN1bHRzJykpIHtcbiAgICAgICAgICAgIHRoaXMub25GaW5hbFJlc3VsdHNDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Rm9jdXNPdXQgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1mb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25HYW1lRm9ybUZvY3VzT3V0KGtleSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybUZvY3VzT3V0IChrZXksIGRhdGEpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnVwZGF0ZVBsYXllck5hbWUoZGF0YSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbmFsUmVzdWx0c0NsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5uZXdHYW1lKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJvbGxDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdyb2xsJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnRocm93QmFsbCgpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBsYXkudGhlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIuZW5kR2FtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR2FtZUZvcm1DbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnBsYXlHYW1lKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIuY2xvc2VNb2RhbCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IEhUTUwgPSBhcHAodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBsZXQgdk5vZGUgPSB2ZG9tLnZOb2RlRnJvbUhUTUwoSFRNTCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZOb2RlICYmIHRoaXMubm9kZSkge1xuICAgICAgICAgICAgICAgIHZkb20uYXBwbHlQYXRjaCh0aGlzLm5vZGUsIHZkb20uZGlmZih0aGlzLnZOb2RlLCB2Tm9kZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSB2ZG9tLmNyZWF0ZUVsZW1lbnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwTm9kZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy52Tm9kZSA9IHZOb2RlO1xuICAgICAgICAgICAgdGhpcy5maWxsTm9kZXMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmlsbE5vZGVzKCkge1xuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkIC5sZWZ0LWNvbCAuY2VsbCcpWzBdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubmV3IEFwcChyZWR1Y2VyKCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBnYW1lTW9kYWxSZWR1Y2VyQ3JlYXRlciBmcm9tICcuL2dhbWVNb2RhbFJlZHVjZXInO1xuaW1wb3J0IGdhbWVQbGF5UmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lUGxheVJlZHVjZXInO1xuXG5sZXQgdHlwZXMgPSB7XG4gICAgVElDS19USU1FUjogJ1RJQ0tfVElNRVInLFxuICAgIFRIUk9XX0JBTEw6ICdUSFJPV19CQUxMJyxcbiAgICBDTE9TRV9NT0RBTDogJ0NMT1NFX01PREFMJyxcbiAgICBQTEFZX0dBTUU6ICdQTEFZX0dBTUUnLFxuICAgIE5FV19HQU1FOiAnTkVXX0dBTUUnLFxuICAgIEVORF9HQU1FOiAnRU5EX0dBTUUnLFxuICAgIFVQREFURV9QTEFZRVJfTkFNRTogJ1VQREFURV9QTEFZRVJfTkFNRSdcbn07XG5cbmxldCBnYW1lTW9kYWxSZWR1Y2VyID0gZ2FtZU1vZGFsUmVkdWNlckNyZWF0ZXIodHlwZXMpO1xubGV0IGdhbWVQbGF5UmVkdWNlciA9IGdhbWVQbGF5UmVkdWNlckNyZWF0ZXIodHlwZXMpO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbiA9IHt9KSB7XG4gICAgc3RhdGUucGxheSA9IGdhbWVQbGF5UmVkdWNlcihzdGF0ZS5wbGF5LCBhY3Rpb24pO1xuICAgIHN0YXRlLm1vZGFsID0gZ2FtZU1vZGFsUmVkdWNlcihzdGF0ZS5tb2RhbCwgYWN0aW9uKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxubGV0IGFjdGlvbnMgPSB7fTtcblxuYWN0aW9ucy51cGRhdGVQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUExBWUVSX05BTUUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcblxuYWN0aW9ucy50aHJvd0JhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVEhST1dfQkFMTFxuICAgIH07XG59O1xuXG5hY3Rpb25zLnBsYXlHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlBMQVlfR0FNRVxuICAgIH07XG59O1xuXG5hY3Rpb25zLm5ld0dhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5lbmRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkVORF9HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5hY3Rpb25zLnRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cbi8vT2JqZWN0LmFzc2lnbihyZWR1Y2VyLCB0eXBlcyk7XG5PYmplY3QuYXNzaWduKHJlZHVjZXIsIGFjdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBjcmVhdGVGaW5hbFJlc3VsdHNTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZmluYWwtcmVzdWx0cycsXG4gICAgICAgIHN0eWxlOiAncmVkJyxcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZ2FtZS1mb3JtJyxcbiAgICAgICAgc3R5bGU6ICdncmVlbicsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgbGV0IHN0YXRlID0gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpO1xuICAgIHN0YXRlLmlzT3BlbiA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCksIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuQ0xPU0VfTU9EQUw6XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkVORF9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLk5FV19HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gY3JlYXRlR2FtZUZvcm1TdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9nYW1lTW9kYWxSZWR1Y2VyLmpzXG4gKiovIiwiY29uc3QgRlJBTUVTX0xFTkdUSCA9IDEwO1xuXG5mdW5jdGlvbiByYW5nZShsZW5ndGgpIHtcbiAgICByZXR1cm4gQXJyYXkobGVuZ3RoKS5qb2luKCcgJykuc3BsaXQoJyAnKS5tYXAoKHYsIGkpID0+IGkpO1xufVxuXG5mdW5jdGlvbiBwYWQgKHZhbHVlLCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI7XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjYWxjRGlmZlRpbWUgKHN0YXRlKSB7XG4gICAgbGV0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBzdGF0ZS5zdGFydFRpbWUpIC8gMTAwMCksXG4gICAgICAgIHJpZ2h0U2lkZSA9IHRvdGFsU2Vjb25kcyAlIDYwLFxuICAgICAgICBsZWZ0U2lkZSA9ICh0b3RhbFNlY29uZHMgLSByaWdodFNpZGUpIC8gNjA7XG5cbiAgICBzdGF0ZS5kaWZmVGltZSA9IHBhZChsZWZ0U2lkZSwgMikgKyAnOicgKyBwYWQocmlnaHRTaWRlLCAyKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbCAocGlucykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCAlIHBpbnMpO1xufVxuXG5mdW5jdGlvbiB0aHJvd0JhbGwgKHBpbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gW3JvbGwocGlucyldO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSAocGxheWVycykge1xuICAgIHBsYXllcnMgPSBwbGF5ZXJzIHx8IFsnUGxheWVyIDEnLCAnUGxheWVyIDInXTtcblxuICAgIGxldCBmcmFtZXMgPSByYW5nZShGUkFNRVNfTEVOR1RIKS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdmFsICsgMVxuICAgICAgICB9O1xuXG4gICAgICAgIHBsYXllcnMucmVkdWNlKChhY2MsIHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGFjY1tpbmRleF0gPSBbXTtcbiAgICAgICAgICAgIGFjY1tpbmRleF0udG90YWwgPSAnJztcblxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgZnJhbWUpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9KTtcblxuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgZnJhbWVzOiBmcmFtZXMsXG4gICAgICAgIHBsYXllcnM6IHBsYXllcnMsXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IDAsXG4gICAgICAgIGN1cnJlbnRGcmFtZTogMCxcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICBkaWZmVGltZTogJzAwOjAwJyxcbiAgICAgICAgdGhlRW5kOiBmYWxzZSxcbiAgICAgICAgbGFzdFJlc3VsdDogJydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlUm93cyhzdGF0ZSkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHJvdyA9IHtcbiAgICAgICAgaXNIZWFkOiB0cnVlLFxuICAgICAgICBjb2xzOiBzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiBmcmFtZS50aXRsZSxcbiAgICAgICAgICAgIGlzUmlnaHQ6IGluZGV4ID09PSBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGlzVG9wOiB0cnVlXG4gICAgICAgIH0pKVxuICAgIH07XG5cbiAgICByb3cuY29scy51bnNoaWZ0KHt0ZXh0OnN0YXRlLmRpZmZUaW1lLCBpc0xlZnQ6IHRydWUsIGlzVG9wOiB0cnVlfSk7XG5cbiAgICByb3dzLnB1c2gocm93KTtcblxuICAgIGxldCBwUm93cyA9IHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIHBJbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29scyA9IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lLCBmSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCByb2xscyA9IGZyYW1lW3BJbmRleF07XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHtcbiAgICAgICAgICAgICAgICAwOiByb2xsc1swXSA/IHJvbGxzWzBdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgMTogcm9sbHNbMV0gPyByb2xsc1sxXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIHRvdGFsOiByb2xscy50b3RhbCxcbiAgICAgICAgICAgICAgICBpc1JpZ2h0OiBmSW5kZXggPT09IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGlzQm90dG9tOiBwSW5kZXggPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBpc1Njb3JlczogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHMudW5zaGlmdCh7XG4gICAgICAgICAgICB0ZXh0OiBwbGF5ZXIsXG4gICAgICAgICAgICBpc0xlZnQ6IHRydWUsXG4gICAgICAgICAgICBpc0JvdHRvbTogcEluZGV4ID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgY29scyB9O1xuICAgIH0pO1xuXG4gICAgcm93cy5wdXNoKC4uLnBSb3dzKTtcblxuICAgIHJldHVybiByb3dzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlRmluYWxSZXN1bHRzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBwbGF5ZXIsXG4gICAgICAgICAgICBzY29yZXM6IHN1bShzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSkgPT4gZnJhbWVbaW5kZXhdLnRvdGFsKSlcbiAgICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLnNjb3JlcyAtIGEuc2NvcmVzO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVmlldyhzdGF0ZSkge1xuICAgIHN0YXRlLnJvd3MgPSBwcmVwYXJlUm93cyhzdGF0ZSk7XG4gICAgc3RhdGUuZmluYWxSZXN1bHRzID0gcHJlcGFyZUZpbmFsUmVzdWx0cyhzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHN1bShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjYyArIHBhcnNlSW50KHZhbCB8fCAwLCAxMCk7XG4gICAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRQbGF5ZXIoc3RhdGUpIHtcbiAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIGlzTGFzdFBsYXllcihzdGF0ZSkpIHtcbiAgICAgICAgc3RhdGUudGhlRW5kID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGxheWVyID0gc3RhdGUuY3VycmVudFBsYXllcjtcblxuICAgICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gcGxheWVyID0gcGxheWVyID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPyAwIDogcGxheWVyICsgMTtcblxuICAgICAgICBpZiAocGxheWVyID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50RnJhbWUgPSBzdGF0ZS5jdXJyZW50RnJhbWUgPCBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSA/IHN0YXRlLmN1cnJlbnRGcmFtZSArIDEgOiBzdGF0ZS5jdXJyZW50RnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldEJvbnVzRnJhbWVzIChzdGF0ZSkge1xuICAgIGxldCBmcmFtZXMgPSBzdGF0ZS5mcmFtZXMuc2xpY2UoTWF0aC5tYXgoMCwgc3RhdGUuY3VycmVudEZyYW1lIC0gMiksIHN0YXRlLmN1cnJlbnRGcmFtZSArIDEpLm1hcCgoZnJhbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZyYW1lW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIH0pO1xuXG4gICAgbGV0IGN1cnJGcmFtZSA9IGZyYW1lc1tmcmFtZXMubGVuZ3RoIC0gMV07XG4gICAgZnJhbWVzLmxlbmd0aC0tO1xuXG4gICAgbGV0IHIgPSAyIC0gY3VyckZyYW1lLmxlbmd0aDtcbiAgICBsZXQgYm9udXNGcmFtZXMgPSBbXTtcblxuICAgIHdoaWxlIChyICYmIGZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGZyYW1lID0gZnJhbWVzLnBvcCgpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChyID09PSAxICYmIGZyYW1lWzBdLnZhbHVlID09PSAxMCkgfHxcbiAgICAgICAgICAgIChyID09PSAyICYmIChmcmFtZS50b3RhbCA9PT0gMTApKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGJvbnVzRnJhbWVzLnVuc2hpZnQoZnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgciAtPSBmcmFtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvbnVzRnJhbWVzO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RQbGF5ZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA9PT0gc3RhdGUuY3VycmVudFBsYXllcjtcbn1cblxuZnVuY3Rpb24gaXNMYXN0RnJhbWUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRGcmFtZSA9PT0gRlJBTUVTX0xFTkdUSCAtIDE7XG59XG5cbmZ1bmN0aW9uIG9uVGlja1RpbWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBjYWxjRGlmZlRpbWUoc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBvblRocm93QmFsbCAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUudGhlRW5kKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBsZXQgZnJhbWUgPSBzdGF0ZS5mcmFtZXNbc3RhdGUuY3VycmVudEZyYW1lXVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICBsZXQgcGlucyA9IEZSQU1FU19MRU5HVEg7XG5cbiAgICBpZiAoZnJhbWVbMF0gJiYgcGlucyAhPT0gZnJhbWVbMF0udmFsdWUpIHtcbiAgICAgICAgcGlucyAtPSBmcmFtZVswXS52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgYm9udXNGcmFtZXMgPSBnZXRCb251c0ZyYW1lcyhzdGF0ZSk7XG4gICAgbGV0IHZhbHVlID0gTWF0aC5tYXgodGhyb3dCYWxsKHBpbnMpLCB0aHJvd0JhbGwocGlucykpO1xuXG4gICAgYm9udXNGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgZnJhbWUudG90YWwgKz0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBsZXQgcm9sbCA9IHsgdmFsdWUgfTtcblxuICAgIGZyYW1lLnB1c2gocm9sbCk7XG5cbiAgICBsZXQgcm9sbHNTdW0gPSBzdW0oZnJhbWUubWFwKHJvbGwgPT4gcm9sbC52YWx1ZSkpO1xuICAgIGZyYW1lLnRvdGFsID0gcm9sbHNTdW07XG5cbiAgICBpZiAoZnJhbWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChyb2xsLnZhbHVlID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICdYJztcblxuICAgICAgICAgICAgaWYgKCFpc0xhc3RGcmFtZShzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKGZyYW1lLnRvdGFsID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICcvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGFzdEZyYW1lKHN0YXRlKSAmJiByb2xsc1N1bSA+PSAxMCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuXG4gICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHN0YXRlLmxhc3RSZXN1bHQgPSB2YWx1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBkYXRhKSB7XG4gICAgc3RhdGUucGxheWVyc1tkYXRhLmluZGV4XSA9IGRhdGEudmFsdWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uUGxheUdhbWUoc3RhdGUpIHtcbiAgICByZXR1cm4gZ2V0SW5pdGlhbFN0YXRlKHN0YXRlLnBsYXllcnMpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuUExBWV9HQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25QbGF5R2FtZShzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVElDS19USU1FUjpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGlja1RpbWVyKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USFJPV19CQUxMOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaHJvd0JhbGwoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QTEFZRVJfTkFNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVXBkYXRlUGxheWVyTmFtZShzdGF0ZSwgYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlcGFyZVZpZXcoc3RhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2dhbWVQbGF5UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB0YWJsZSBmcm9tICcuLi90YWJsZS90YWJsZS5qcyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwuanMnO1xuaW1wb3J0IGltYWdlU3JjIGZyb20gJ2ltYWdlcy9iYWxsLnBuZyc7XG5pbXBvcnQgY24gZnJvbSAnLi9hcHAuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgdGFibGVIVE1MOiB0YWJsZShhcHApLFxuICAgICAgICBtb2RhbEhUTUw6IG1vZGFsKGFwcCksXG4gICAgICAgIGltYWdlU3JjLFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwL2FwcC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2NlbGwuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NlbGwuanN0JztcblxuZnVuY3Rpb24gcHJlcGFyZUNOKHN0YXRlKSB7XG4gICAgbGV0IHJvb3QgPSBjbi5fcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChzdGF0ZS5pc0xlZnQpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2xlZnQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1JpZ2h0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19yaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzVG9wKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc190b3ApO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc0JvdHRvbSkge1xuICAgICAgICByb290LnB1c2goY24uaXNfYm90dG9tKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNTY29yZXMpIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX3Njb3Jlcyk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlbGwpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjZWxsOiBjZWxsLFxuICAgICAgICBjbjogcHJlcGFyZUNOKGNlbGwpXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9maW5hbC1yZXN1bHRzLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9maW5hbC1yZXN1bHRzLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwbGF5KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IGNuLFxuICAgICAgICBmaW5hbFJlc3VsdHM6IHBsYXkuZmluYWxSZXN1bHRzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9nYW1lLWZvcm0uY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2dhbWUtZm9ybS5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxheSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgcGxheWVyczogcGxheS5wbGF5ZXJzXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzXG4gKiovIiwiaW1wb3J0IGdhbWVGb3JtIGZyb20gJy4uL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMnO1xuaW1wb3J0IGZpbmFsUmVzdWx0cyBmcm9tICcuLi9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vbW9kYWwuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21vZGFsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gW2NuLnJvb3RdO1xuXG4gICAgaWYgKHN0YXRlLm1vZGFsLnN0eWxlKSB7XG4gICAgICAgIHJvb3QucHVzaChjblsnc3R5bGVfJyArIHN0YXRlLm1vZGFsLnN0eWxlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmluZm8pO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubW9kYWwuaXNPcGVuKSB7XG4gICAgICAgIHJvb3QucHVzaCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY24uX3Jvb3QgPSByb290LmpvaW4oJyAnKTtcblxuICAgIHJldHVybiBjbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIGxldCBjb250ZW50SFRNTCA9ICcnO1xuXG4gICAgc3dpdGNoIChhcHAubW9kYWwubmFtZSkge1xuICAgICAgICBjYXNlICdnYW1lLWZvcm0nOlxuICAgICAgICAgICAgY29udGVudEhUTUwgPSBnYW1lRm9ybShhcHAucGxheSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmaW5hbC1yZXN1bHRzJzpcbiAgICAgICAgICAgIGNvbnRlbnRIVE1MID0gZmluYWxSZXN1bHRzKGFwcC5wbGF5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY246IHByZXBhcmVDTihhcHApLFxuICAgICAgICBjb250ZW50SFRNTFxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanNcbiAqKi8iLCJpbXBvcnQgY2VsbCBmcm9tICcuLi9jZWxsL2NlbGwuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vcm93LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb3cuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjZWxsc0hUTUw6IHJvdy5jb2xzLm1hcChjZWxsKS5qb2luKCcnKSxcbiAgICAgICAgY246IGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmpzXG4gKiovIiwiaW1wb3J0IHJvdyBmcm9tICcuLi9yb3cvcm93LmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3RhYmxlLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90YWJsZS5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93c0hUTUw6IGFwcC5wbGF5LnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc1xuICoqLyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSB7XG4gICAgaWYgKEhUTUwudHJpbSgpID09PSAnJyl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShIVE1MKTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeXRoaW5nIGV4Y2VwdCBpT1MgNyBTYWZhcmksIElFIDgvOSwgQW5kcmlvZCBCcm93c2VyIDQuMS80M1xuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoSFRNTCwgJ3RleHQvaHRtbCcpLmRvY3VtZW50RWxlbWVudDtcbiAgICBsZXQgaGVhZCA9IGRvYy5jaGlsZE5vZGVzWzBdO1xuICAgIGxldCBib2R5ID0gZG9jLmNoaWxkTm9kZXNbMV07XG4gICAgbGV0IG5vZGU7XG5cbiAgICBpZiAobm9kZSA9IGhlYWQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICBoZWFkLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAobm9kZSA9IGJvZHkuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSB7XG4gICAgbGV0IHZOb2RlID0ge1xuICAgICAgICB0eXBlOiBub2RlLm5vZGVUeXBlXG4gICAgfTtcblxuICAgIGlmICh2Tm9kZS50eXBlID09PSAzKSB7XG4gICAgICAgIHZOb2RlLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVucyA9IFtdO1xuICAgICAgICB2Tm9kZS5hdHRycyA9IHt9O1xuICAgICAgICB2Tm9kZS50YWcgPSBub2RlLnRhZ05hbWU7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVucy5wdXNoKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjbGFzc05hbWUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Tm9kZS5hdHRyc1tuYW1lXSA9IG5vZGUuYXR0cmlidXRlc1tpXS52YWx1ZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdk5vZGU7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRycyhhdHRycykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBsZXQgYXR0ciA9IGF0dHJzW2tleV0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBrZXkgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fT1cIiR7YXR0cn1cImApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwgPSAnJykge1xuICAgIGxldCBhdHRycyA9IGpvaW5BdHRycyh2Tm9kZS5hdHRycyk7XG5cbiAgICBzd2l0Y2godk5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIDM6IHJldHVybiBgJHtpbm5lckhUTUx9YDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGA8JHt2Tm9kZS50YWd9ICR7YXR0cnN9PiR7aW5uZXJIVE1MfTwvJHt2Tm9kZS50YWd9PmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJIVE1MKHZOb2RlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgIT09IDMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIVE1MICs9IHJlbmRlckhUTUwodk5vZGUuY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCA9IHZOb2RlLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCk7XG59XG5cbmV4cG9ydCBsZXQgZGlmZiA9IGZ1bmN0aW9uICh2Tm9kZTEsIHZOb2RlMikge1xuICAgIGlmICh2Tm9kZTEgJiYgIXZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1JFTU9WRV9OT0RFJ1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXZOb2RlMSAmJiB2Tm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdBRERfTk9ERScsXG4gICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2Tm9kZTEudGFnICE9PSB2Tm9kZTIudGFnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZOb2RlMS50eXBlID09PSAzIHx8IHZOb2RlMi50eXBlID09PSAzKSB7XG4gICAgICAgIGlmICh2Tm9kZTEuY29udGVudCAhPT0gdk5vZGUyLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1JFUExBQ0VfTk9ERScsXG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhdHRycyA9IFtdO1xuICAgICAgICBsZXQgcGF0Y2ggPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUyLmF0dHJzKSB7XG4gICAgICAgICAgICBsZXQgYXR0cjEgPSB2Tm9kZTEuYXR0cnNba2V5XTtcbiAgICAgICAgICAgIGxldCBhdHRyMiA9IHZOb2RlMi5hdHRyc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoIWF0dHIxKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjIuam9pbignICcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhdHRyMVZhbCA9IGF0dHIxLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjJWYWwgPSBhdHRyMi5qb2luKCcgJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0cjFWYWwgIT09IGF0dHIyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyVmFsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTEuYXR0cnMpIHtcbiAgICAgICAgICAgIGxldCBhdHRyMiA9IHZOb2RlMi5hdHRyc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoIWF0dHIyKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdSRU1PVkUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZTEuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY0RpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoY0RpZmYpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNEaWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMi5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdk5vZGUxLmNoaWxkcmVuc1tpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjRGlmZiA9IGRpZmYodk5vZGUxLmNoaWxkcmVuc1tpXSwgdk5vZGUyLmNoaWxkcmVuc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY0RpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSBjRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRjaC5hdHRycyA9IGF0dHJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRjaDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGFwcGx5UGF0Y2hPcChwYXJlbnROb2RlLCBub2RlLCBvcCkge1xuICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KG9wLnZOb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdSRU1PVkVfTk9ERSc6XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUkVQTEFDRV9OT0RFJzpcbiAgICAgICAgICAgIHZhciBuZXdOb2RlID0gY3JlYXRlRWxlbWVudChvcC52Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBhcHBseUF0dHJPcHMobm9kZSwgb3BzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG9wcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3AgPSBvcHNbaV07XG4gICAgICAgIGxldCBuYW1lID0gb3AubmFtZTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKG9wLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NFVCc6XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgb3AudmFsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBsZXQgYXBwbHlQYXRjaCA9IGZ1bmN0aW9uIChub2RlLCBwYXRjaGVzLCBwYXJlbnROb2RlKSB7XG4gICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGlmIChwYXRjaGVzLnR5cGUpIHtcbiAgICAgICAgbm9kZSA9IGFwcGx5UGF0Y2hPcChwYXJlbnROb2RlLCBub2RlLCBwYXRjaGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBhdGNoZXMpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhdHRycycpIHtcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJPcHMobm9kZSwgcGF0Y2hlc1trZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbHlQYXRjaChjaGlsZE5vZGVzW2tleV0sIHBhdGNoZXNba2V5XSwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbmV4cG9ydCBsZXQgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlRnJvbUhUTUwocmVuZGVySFRNTCh2Tm9kZSkpO1xufTtcblxuZXhwb3J0IGxldCB2Tm9kZUZyb21IVE1MID0gZnVuY3Rpb24gKEhUTUwpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGVGcm9tTm9kZShjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkpO1xufTtcblxuZXhwb3J0IGxldCBhcHBseVZOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHZOb2RlKSB7XG4gICAgcmV0dXJuIGFwcGx5UGF0Y2gobm9kZSwgZGlmZihjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUpLCB2Tm9kZSkpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlydHVhbC1kb20uanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY2xlYXJmaXg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9ybS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDYyLCA4MCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTNweCAxNXB4IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJvdW5jZUluIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIGZyb20sIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHNDQUFzQztDQUN6Qzs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7R0FDbkM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0dBQzdCO0NBQ0Y7O0FBRUQ7SUFDSTtRQUNJLGdDQUFnQztLQUNuQzs7SUFFRDtRQUNJLG1DQUFtQztLQUN0Qzs7SUFFRDtRQUNJLGtDQUFrQztLQUNyQztDQUNKXCIsXCJmaWxlXCI6XCJtYWluLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA2MiwgODApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweCAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjc3KTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5ib3VuY2VJbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICBmcm9tLCB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDcwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwX19yb290X19fM0F2RXUge1xcbiAgICB3aWR0aDogNzIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG59XFxuLmFwcF9faW1hZ2VfX182TDJDYiB7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDJweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFwcF9fYnV0dG9uX193cF9fXzNMWEhrIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hcHBfX2F1dGhvcl9fXzFfc2l3IHtcXG4gICAgcGFkZGluZzogMHB4IDBweCAzMHB4IDVweDtcXG4gICAgY29sb3I6ICNjY2M7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uYXBwX19idXR0b25fX18xTHdEdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMTIxcHggMjBweCAyMHB4IDIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCByZ2JhKDI0MywgMTU2LCAxOCwgMC44KTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fXzFMd0R0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY1MjgwMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwcF9fc2hha2VfX18xbGRlQztcXG59XFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9hcHAvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsbUNBQXNCO0NBQ3pCXCIsXCJmaWxlXCI6XCJhcHAuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxufVxcbi5pbWFnZSB7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvIDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDJweDtcXG4gICAgbGVmdDogMjYwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmJ1dHRvbl9fd3Age1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLmF1dGhvciB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzBweCA1cHg7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMTIxcHggMjBweCAyMHB4IDIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCByZ2JhKDI0MywgMTU2LCAxOCwgMC44KTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAjNjUyODAxO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImFwcF9fcm9vdF9fXzNBdkV1XCIsXG5cdFwiaW1hZ2VcIjogXCJhcHBfX2ltYWdlX19fNkwyQ2JcIixcblx0XCJidXR0b25fX3dwXCI6IFwiYXBwX19idXR0b25fX3dwX19fM0xYSGtcIixcblx0XCJhdXRob3JcIjogXCJhcHBfX2F1dGhvcl9fXzFfc2l3XCIsXG5cdFwiYnV0dG9uXCI6IFwiYXBwX19idXR0b25fX18xTHdEdFwiLFxuXHRcInNoYWtlXCI6IFwiYXBwX19zaGFrZV9fXzFsZGVDXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvYXBwL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VsbF9fcm9vdF9fXzJxTTcxIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5jZWxsX19pc19yaWdodF9fXzN2bFhJIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fXzJwdW51IC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc190b3BfX19ySVppbC5jZWxsX19pc19sZWZ0X19fMTRYenEgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XFxufVxcblxcbi5jZWxsX19pc190b3BfX19ySVppbC5jZWxsX19pc19yaWdodF9fXzN2bFhJIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAwO1xcbn1cXG5cXG4uY2VsbF9faXNfYm90dG9tX19fMnB1bnUuY2VsbF9faXNfcmlnaHRfX18zdmxYSSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fXzJwdW51LmNlbGxfX2lzX3JpZ2h0X19fM3ZsWEkgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDA7XFxufVxcblxcbi5jZWxsX19pc190b3BfX19ySVppbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX2lzX2xlZnRfX18xNFh6cSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2VsbF9faXNfc2NvcmVzX19fMnNWUG4ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX3RvcF9fXzdwQV9QIHtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5jZWxsX19oYWxmX19fM1lybnoge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNlbGxfX2Z1bGxfX18xMWpLMiB7IH1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0NBQ2Q7O0FBRUQsdUJBQVNcIixcImZpbGVcIjpcImNlbGwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb290IHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5pc19yaWdodCAuY2VsbCB7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbn1cXG5cXG4uaXNfYm90dG9tIC5jZWxsIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uaXNfdG9wLmlzX2xlZnQgLmNlbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG4uaXNfdG9wLmlzX3JpZ2h0IC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMDtcXG59XFxuXFxuLmlzX2JvdHRvbS5pc19yaWdodCAuY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwcHg7XFxufVxcblxcbi5pc19ib3R0b20uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xcbn1cXG5cXG4uaXNfdG9wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXNfbGVmdCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbiAgICBsaW5lLWhlaWdodDogNTdweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXNfc2NvcmVzIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wIHtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblxcbi5oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5mdWxsIHsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImNlbGxfX3Jvb3RfX18ycU03MVwiLFxuXHRcImlzX3JpZ2h0XCI6IFwiY2VsbF9faXNfcmlnaHRfX18zdmxYSVwiLFxuXHRcImNlbGxcIjogXCJjZWxsX19jZWxsX19fM0hRUUpcIixcblx0XCJpc19ib3R0b21cIjogXCJjZWxsX19pc19ib3R0b21fX18ycHVudVwiLFxuXHRcImlzX3RvcFwiOiBcImNlbGxfX2lzX3RvcF9fX3JJWmlsXCIsXG5cdFwiaXNfbGVmdFwiOiBcImNlbGxfX2lzX2xlZnRfX18xNFh6cVwiLFxuXHRcImlzX3Njb3Jlc1wiOiBcImNlbGxfX2lzX3Njb3Jlc19fXzJzVlBuXCIsXG5cdFwidG9wXCI6IFwiY2VsbF9fdG9wX19fN3BBX1BcIixcblx0XCJoYWxmXCI6IFwiY2VsbF9faGFsZl9fXzNZcm56XCIsXG5cdFwiZnVsbFwiOiBcImNlbGxfX2Z1bGxfX18xMWpLMlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmluYWwtcmVzdWx0c19fZmluYWwtcmVzdWx0c19fbmFtZV9fXzJiQWJLIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZmluYWwtcmVzdWx0c19fZmluYWwtcmVzdWx0X193aW5uZXJfX18xODF1SCB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7Q0FDZlwiLFwiZmlsZVwiOlwiZmluYWwtcmVzdWx0cy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpbmFsLXJlc3VsdHNfX25hbWUge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5maW5hbC1yZXN1bHRfX3dpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTo0MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJmaW5hbC1yZXN1bHRzX19uYW1lXCI6IFwiZmluYWwtcmVzdWx0c19fZmluYWwtcmVzdWx0c19fbmFtZV9fXzJiQWJLXCIsXG5cdFwiZmluYWwtcmVzdWx0X193aW5uZXJcIjogXCJmaW5hbC1yZXN1bHRzX19maW5hbC1yZXN1bHRfX3dpbm5lcl9fXzE4MXVIXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lLWZvcm1fX3Jvb3RfX18xZHNUQSB7IH1cXG5cXG4uZ2FtZS1mb3JtX19uYW1lX19fMVp3aXIge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZvcm1fX2lucHV0X19fM3BsOUYge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzN0TFZQIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzN0TFZQOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUFTOztBQUVUO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiZ2FtZS1mb3JtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7IH1cXG5cXG4ubmFtZSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ0LCA2MiwgODAsIDAuMTIpO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5yb3c6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImdhbWUtZm9ybV9fcm9vdF9fXzFkc1RBXCIsXG5cdFwibmFtZVwiOiBcImdhbWUtZm9ybV9fbmFtZV9fXzFad2lyXCIsXG5cdFwiaW5wdXRcIjogXCJnYW1lLWZvcm1fX2lucHV0X19fM3BsOUZcIixcblx0XCJyb3dcIjogXCJnYW1lLWZvcm1fX3Jvd19fXzN0TFZQXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWxfX3Jvb3RfX18yb2o3OSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnRfX18zLVR5UCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2luZm9fX18xaWszSiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ncmVlbl9fXzFqQVptIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC44KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdENcIixcImZpbGVcIjpcIm1vZGFsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC44KTtcXG59XFxuXFxuLnN0eWxlX2dyZWVuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC44KTtcXG59XFxuXFxuLnN0eWxlX29yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC44KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcImNsb3NlXCI6IFwibW9kYWxfX2Nsb3NlX19fMU90eG9cIixcblx0XCJjb250ZW50XCI6IFwibW9kYWxfX2NvbnRlbnRfX18zLVR5UFwiLFxuXHRcInN0eWxlX2luZm9cIjogXCJtb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKXCIsXG5cdFwic3R5bGVfZ3JlZW5cIjogXCJtb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabVwiLFxuXHRcInN0eWxlX29yYW5nZVwiOiBcIm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbFwiLFxuXHRcInN0eWxlX3JlZFwiOiBcIm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3dfX3Jvd19fXzItbWgwLnJvd19faXNfaGVhZF9fXzFGNTdQIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9yb3cvcm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQ1wiLFwiZmlsZVwiOlwicm93LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm93LmlzX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvd1wiOiBcInJvd19fcm93X19fMi1taDBcIixcblx0XCJpc19oZWFkXCI6IFwicm93X19pc19oZWFkX19fMUY1N1BcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJ0YWJsZS5jc3NcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9iYWxsLnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1hZ2VzL2JhbGwucG5nXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPmJ5IEFsZXggQWZvbmluPC9kaXY+IDxkaXY+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmJ1dHRvbl9fd3AgLCdcIj4gPGltZyBjbGFzcz1cIicsIGNuLmltYWdlICwnXCIgc3JjPVwiJywgaW1hZ2VTcmMgLCdcIj4gPGJ1dHRvbiBjbGFzcz1cIicsIGNuLmJ1dHRvbiAsJ1wiIGRhdGEtbWFpbj1cInJvbGxcIiA+PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPGRpdj4gJywgbW9kYWxIVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwL2FwcC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5jZWxsICwnXCI+ICcpOyBpZiAoY2VsbC50ZXh0KSB7IFxucC5wdXNoKCcgJywgY2VsbC50ZXh0ICwnICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCB0b3AgLCcgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+STwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxkICwnXCI+SUk8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLW1pZCBjbGVhcmZpeFwiPiAnKTsgaWYgKGNlbGxbMF0gPT09ICdYJykgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5mdWxsICwnPlwiPlg8L2Rpdj4gJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFswXSAsJzwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFsxXSAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNlbGwudG90YWwgLCc8L2Rpdj4gPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzXCI+IDxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzX19uYW1lIGZpbmFsLXJlc3VsdF9fd2lubmVyXCI+JywgZmluYWxSZXN1bHRzWzBdLm5hbWUgLCcgV09OISAtICcsIGZpbmFsUmVzdWx0c1swXS5zY29yZXMgLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImZpbmFsLXJlc3VsdHNfX3Jvd1wiPiAnKTsgZmluYWxSZXN1bHRzLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKHBsYXllcikgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJmaW5hbC1yZXN1bHRzX19uYW1lXCI+JywgcGxheWVyLm5hbWUgLCcgLSAnLCBwbGF5ZXIuc2NvcmVzICwnPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8YnV0dG9uIGRhdGEtZmluYWwtcmVzdWx0cz1cIm5ld1wiIGNsYXNzPVwiZm9ybS1idXR0b25cIj5OZXcgZ2FtZTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvb3QgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCdcIj5CT1dMSU5HLkpTPC9kaXY+ICcpOyBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHBsYXllciwgaW5kZXgpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxpbnB1dCBjbGFzcz1cIicsIGNuLmlucHV0ICwnXCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBpbmRleCAsJ1wiIHZhbHVlPVwiJywgcGxheWVyICwnXCI+IDwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJ1wiPiA8YnV0dG9uIGRhdGEtZ2FtZS1mb3JtPVwicGxheVwiIGNsYXNzPVwiZm9ybS1idXR0b25cIj5QbGF5PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnIGFuaW1hdGVkIGJvdW5jZUluXCI+IDxkaXYgZGF0YS1tb2RhbD1cImNsb3NlXCIgY2xhc3M9XCInLCBjbi5jbG9zZSAsJ1wiPsOXPC9kaXY+IDxkaXYgY2xhc3M9XCInLCBjbi5jb250ZW50ICwnXCI+ICcsIGNvbnRlbnRIVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanN0XG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCcgY2xlYXJmaXhcIj4gJywgY2VsbHNIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmpzdFxuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2PiAnLCByb3dzSFRNTCAsJyA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuanN0XG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=