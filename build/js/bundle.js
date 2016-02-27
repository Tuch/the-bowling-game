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
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', cn.root ,'"> <div class="', cn.name ,' ', cn.winner ,'">', finalResults[0].name ,' WON! - ', finalResults[0].scores ,'</div> <div> '); finalResults.slice(1).forEach(function (player) { 
	p.push(' <div class="', cn.name ,'">', player.name ,' - ', player.scores ,'</div> '); }); 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2ZhMjA2ODNjMDUwYzFkMjE3MDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhbGwucG5nIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/ZTkyMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5jc3M/YTExZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcz9mZTYwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzP2EzZWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzP2NlZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzcz8zOTAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmNzcz85Njk3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5jc3M/MmYxYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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aEwsaURBQWdELEVBQUUsTztBQUNsRCxnSUFBK0gsRTtBQUMvSCxnR0FBK0YsRTtBQUMvRiw0QkFBMkI7QUFDM0IsRTs7Ozs7O0FDVEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLDZKQUE2SixrRDtBQUMxTyxzRkFBcUYsRUFBRSxFO0FBQ3ZGLG1HQUFrRztBQUNsRyxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsbUZBQW1GLDJDO0FBQ2hLLG1KQUFrSixFQUFFLEU7QUFDcEosdUhBQXNIO0FBQ3RILEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSxpTEFBaUw7QUFDOVAsRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHVFQUF1RTtBQUNwSixFOzs7Ozs7QUNIQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsd0NBQXdDO0FBQ3JILEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzZmEyMDY4M2MwNTBjMWQyMTcwMFxuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuaW1wb3J0IGNuIGZyb20gJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAqIGFzIHZkb20gZnJvbSAnLi92aXJ0dWFsLWRvbS5qcyc7XG5cbi8vIHJlYWN0IHN0eWxlXG5pbXBvcnQgYXBwIGZyb20gJy4vdmlld3MvYXBwL2FwcC5qcyc7XG4vLyByZWR1eCBzdHlsZVxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUoc3RhdGUpXG4gICAgICAgICAgICAuaW5pdEFwcE5vZGUoKVxuICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgICAgICAuaW5pdEdhbWVUaW1lcigpXG4gICAgICAgICAgICAuYXNzaWduRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEFwcE5vZGUgKCkge1xuICAgICAgICB0aGlzLmFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEdhbWVUaW1lciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci50aWNrVGltZXIoKSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZWR1Y2VBY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkRvY3VtZW50Rm9jdXNPdXQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudENsaWNrIChlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1haW4nKSkge1xuICAgICAgICAgICAgdGhpcy5vblJvbGxDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lLWZvcm0nKSkge1xuICAgICAgICAgICAgdGhpcy5vbkdhbWVGb3JtQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5vbk1vZGFsQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmluYWwtcmVzdWx0cycpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRmluYWxSZXN1bHRzQ2xpY2soa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudEZvY3VzT3V0IChlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZUZvcm1Gb2N1c091dChrZXksIHtcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uR2FtZUZvcm1Gb2N1c091dCAoa2V5LCBkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci51cGRhdGVQbGF5ZXJOYW1lKGRhdGEpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaW5hbFJlc3VsdHNDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIubmV3R2FtZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Sb2xsQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncm9sbCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci50aHJvd0JhbGwoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGF5LnRoZUVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLmVuZEdhbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkdhbWVGb3JtQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24ocmVkdWNlci5wbGF5R2FtZSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RhbENsaWNrIChrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLmNsb3NlTW9kYWwoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgbGV0IHZOb2RlID0gdmRvbS52Tm9kZUZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpbGxOb2RlcygpIHtcbiAgICAgICAgdGhpcy50aW1lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZCAubGVmdC1jb2wgLmNlbGwnKVswXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm5ldyBBcHAocmVkdWNlcigpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgZ2FtZU1vZGFsUmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lTW9kYWxSZWR1Y2VyJztcbmltcG9ydCBnYW1lUGxheVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVBsYXlSZWR1Y2VyJztcblxubGV0IHR5cGVzID0ge1xuICAgIFRJQ0tfVElNRVI6ICdUSUNLX1RJTUVSJyxcbiAgICBUSFJPV19CQUxMOiAnVEhST1dfQkFMTCcsXG4gICAgQ0xPU0VfTU9EQUw6ICdDTE9TRV9NT0RBTCcsXG4gICAgUExBWV9HQU1FOiAnUExBWV9HQU1FJyxcbiAgICBORVdfR0FNRTogJ05FV19HQU1FJyxcbiAgICBFTkRfR0FNRTogJ0VORF9HQU1FJyxcbiAgICBVUERBVEVfUExBWUVSX05BTUU6ICdVUERBVEVfUExBWUVSX05BTUUnXG59O1xuXG5sZXQgZ2FtZU1vZGFsUmVkdWNlciA9IGdhbWVNb2RhbFJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcbmxldCBnYW1lUGxheVJlZHVjZXIgPSBnYW1lUGxheVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24gPSB7fSkge1xuICAgIHN0YXRlLnBsYXkgPSBnYW1lUGxheVJlZHVjZXIoc3RhdGUucGxheSwgYWN0aW9uKTtcbiAgICBzdGF0ZS5tb2RhbCA9IGdhbWVNb2RhbFJlZHVjZXIoc3RhdGUubW9kYWwsIGFjdGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmxldCBhY3Rpb25zID0ge307XG5cbmFjdGlvbnMudXBkYXRlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbn07XG5cbmFjdGlvbnMudGhyb3dCYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRIUk9XX0JBTExcbiAgICB9O1xufTtcblxuYWN0aW9ucy5wbGF5R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5QTEFZX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5uZXdHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLk5FV19HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMuZW5kR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5FTkRfR0FNRVxuICAgIH07XG59O1xuXG5hY3Rpb25zLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQ0xPU0VfTU9EQUxcbiAgICB9O1xufTtcblxuYWN0aW9ucy50aWNrVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVElDS19USU1FUlxuICAgIH07XG59O1xuXG4vL09iamVjdC5hc3NpZ24ocmVkdWNlciwgdHlwZXMpO1xuT2JqZWN0LmFzc2lnbihyZWR1Y2VyLCBhY3Rpb25zKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzXG4gKiovIiwiZnVuY3Rpb24gY3JlYXRlRmluYWxSZXN1bHRzU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2ZpbmFsLXJlc3VsdHMnLFxuICAgICAgICBzdHlsZTogJ3JlZCcsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVGb3JtU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ2dhbWUtZm9ybScsXG4gICAgICAgIHN0eWxlOiAnZ3JlZW4nLFxuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIGxldCBzdGF0ZSA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoKTtcbiAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyQ3JlYXRlKHR5cGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLkNMT1NFX01PREFMOlxuICAgICAgICAgICAgICAgIHN0YXRlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5FTkRfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNyZWF0ZUZpbmFsUmVzdWx0c1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5ORVdfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGNyZWF0ZUdhbWVGb3JtU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qc1xuICoqLyIsImNvbnN0IEZSQU1FU19MRU5HVEggPSAxMDtcblxuZnVuY3Rpb24gcmFuZ2UobGVuZ3RoKSB7XG4gICAgcmV0dXJuIEFycmF5KGxlbmd0aCkuam9pbignICcpLnNwbGl0KCcgJykubWFwKCh2LCBpKSA9PiBpKTtcbn1cblxuZnVuY3Rpb24gcGFkICh2YWx1ZSwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIGxlbmd0aCA9IGxlbmd0aCB8fCAyO1xuXG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY0RpZmZUaW1lIChzdGF0ZSkge1xuICAgIGxldCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKChuZXcgRGF0ZSgpIC0gc3RhdGUuc3RhcnRUaW1lKSAvIDEwMDApLFxuICAgICAgICByaWdodFNpZGUgPSB0b3RhbFNlY29uZHMgJSA2MCxcbiAgICAgICAgbGVmdFNpZGUgPSAodG90YWxTZWNvbmRzIC0gcmlnaHRTaWRlKSAvIDYwO1xuXG4gICAgc3RhdGUuZGlmZlRpbWUgPSBwYWQobGVmdFNpZGUsIDIpICsgJzonICsgcGFkKHJpZ2h0U2lkZSwgMik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGwgKHBpbnMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAgJSBwaW5zKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dCYWxsIChwaW5zKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtyb2xsKHBpbnMpXTtcblxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKHBsYXllcnMpIHtcbiAgICBwbGF5ZXJzID0gcGxheWVycyB8fCBbJ1BsYXllciAxJywgJ1BsYXllciAyJ107XG5cbiAgICBsZXQgZnJhbWVzID0gcmFuZ2UoRlJBTUVTX0xFTkdUSCkubWFwKCh2YWwpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lID0ge1xuICAgICAgICAgICAgdGl0bGU6IHZhbCArIDFcbiAgICAgICAgfTtcblxuICAgICAgICBwbGF5ZXJzLnJlZHVjZSgoYWNjLCBwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBhY2NbaW5kZXhdID0gW107XG4gICAgICAgICAgICBhY2NbaW5kZXhdLnRvdGFsID0gJyc7XG5cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIGZyYW1lKTtcblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSk7XG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGZyYW1lczogZnJhbWVzLFxuICAgICAgICBwbGF5ZXJzOiBwbGF5ZXJzLFxuICAgICAgICBjdXJyZW50UGxheWVyOiAwLFxuICAgICAgICBjdXJyZW50RnJhbWU6IDAsXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgZGlmZlRpbWU6ICcwMDowMCcsXG4gICAgICAgIHRoZUVuZDogZmFsc2UsXG4gICAgICAgIGxhc3RSZXN1bHQ6ICcnXG4gICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVJvd3Moc3RhdGUpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCByb3cgPSB7XG4gICAgICAgIGlzSGVhZDogdHJ1ZSxcbiAgICAgICAgY29sczogc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgdGV4dDogZnJhbWUudGl0bGUsXG4gICAgICAgICAgICBpc1JpZ2h0OiBpbmRleCA9PT0gc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICBpc1RvcDogdHJ1ZVxuICAgICAgICB9KSlcbiAgICB9O1xuXG4gICAgcm93LmNvbHMudW5zaGlmdCh7dGV4dDpzdGF0ZS5kaWZmVGltZSwgaXNMZWZ0OiB0cnVlLCBpc1RvcDogdHJ1ZX0pO1xuXG4gICAgcm93cy5wdXNoKHJvdyk7XG5cbiAgICBsZXQgcFJvd3MgPSBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBwSW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGNvbHMgPSBzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSwgZkluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9sbHMgPSBmcmFtZVtwSW5kZXhdO1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB7XG4gICAgICAgICAgICAgICAgMDogcm9sbHNbMF0gPyByb2xsc1swXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIDE6IHJvbGxzWzFdID8gcm9sbHNbMV0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICB0b3RhbDogcm9sbHMudG90YWwsXG4gICAgICAgICAgICAgICAgaXNSaWdodDogZkluZGV4ID09PSBzdGF0ZS5mcmFtZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBpc0JvdHRvbTogcEluZGV4ID09PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgaXNTY29yZXM6IHRydWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb2xzLnVuc2hpZnQoe1xuICAgICAgICAgICAgdGV4dDogcGxheWVyLFxuICAgICAgICAgICAgaXNMZWZ0OiB0cnVlLFxuICAgICAgICAgICAgaXNCb3R0b206IHBJbmRleCA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IGNvbHMgfTtcbiAgICB9KTtcblxuICAgIHJvd3MucHVzaCguLi5wUm93cyk7XG5cbiAgICByZXR1cm4gcm93cztcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZpbmFsUmVzdWx0cyhzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcGxheWVyLFxuICAgICAgICAgICAgc2NvcmVzOiBzdW0oc3RhdGUuZnJhbWVzLm1hcCgoZnJhbWUpID0+IGZyYW1lW2luZGV4XS50b3RhbCkpXG4gICAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5zY29yZXMgLSBhLnNjb3JlcztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVZpZXcoc3RhdGUpIHtcbiAgICBzdGF0ZS5yb3dzID0gcHJlcGFyZVJvd3Moc3RhdGUpO1xuICAgIHN0YXRlLmZpbmFsUmVzdWx0cyA9IHByZXBhcmVGaW5hbFJlc3VsdHMoc3RhdGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBzdW0oYXJyKSB7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2MgKyBwYXJzZUludCh2YWwgfHwgMCwgMTApO1xuICAgIH0sIDApO1xufVxuXG5mdW5jdGlvbiBuZXh0UGxheWVyKHN0YXRlKSB7XG4gICAgaWYgKGlzTGFzdEZyYW1lKHN0YXRlKSAmJiBpc0xhc3RQbGF5ZXIoc3RhdGUpKSB7XG4gICAgICAgIHN0YXRlLnRoZUVuZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICAgICAgaWYgKHBsYXllciA9PT0gMCkge1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEZyYW1lID0gc3RhdGUuY3VycmVudEZyYW1lIDwgc3RhdGUuZnJhbWVzLmxlbmd0aCAtIDEgPyBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxIDogc3RhdGUuY3VycmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBnZXRCb251c0ZyYW1lcyAoc3RhdGUpIHtcbiAgICBsZXQgZnJhbWVzID0gc3RhdGUuZnJhbWVzLnNsaWNlKE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnRGcmFtZSAtIDIpLCBzdGF0ZS5jdXJyZW50RnJhbWUgKyAxKS5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBmcmFtZVtzdGF0ZS5jdXJyZW50UGxheWVyXTtcbiAgICB9KTtcblxuICAgIGxldCBjdXJyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGZyYW1lcy5sZW5ndGgtLTtcblxuICAgIGxldCByID0gMiAtIGN1cnJGcmFtZS5sZW5ndGg7XG4gICAgbGV0IGJvbnVzRnJhbWVzID0gW107XG5cbiAgICB3aGlsZSAociAmJiBmcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBmcmFtZSA9IGZyYW1lcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAociA9PT0gMSAmJiBmcmFtZVswXS52YWx1ZSA9PT0gMTApIHx8XG4gICAgICAgICAgICAociA9PT0gMiAmJiAoZnJhbWUudG90YWwgPT09IDEwKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBib251c0ZyYW1lcy51bnNoaWZ0KGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHIgLT0gZnJhbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBib251c0ZyYW1lcztcbn1cblxuZnVuY3Rpb24gaXNMYXN0UGxheWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCAtIDEgPT09IHN0YXRlLmN1cnJlbnRQbGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdEZyYW1lIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RnJhbWUgPT09IEZSQU1FU19MRU5HVEggLSAxO1xufVxuXG5mdW5jdGlvbiBvblRpY2tUaW1lciAoc3RhdGUpIHtcbiAgICByZXR1cm4gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gb25UaHJvd0JhbGwgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLnRoZUVuZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgbGV0IGZyYW1lID0gc3RhdGUuZnJhbWVzW3N0YXRlLmN1cnJlbnRGcmFtZV1bc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgbGV0IHBpbnMgPSBGUkFNRVNfTEVOR1RIO1xuXG4gICAgaWYgKGZyYW1lWzBdICYmIHBpbnMgIT09IGZyYW1lWzBdLnZhbHVlKSB7XG4gICAgICAgIHBpbnMgLT0gZnJhbWVbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGJvbnVzRnJhbWVzID0gZ2V0Qm9udXNGcmFtZXMoc3RhdGUpO1xuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHRocm93QmFsbChwaW5zKSwgdGhyb3dCYWxsKHBpbnMpKTtcblxuICAgIGJvbnVzRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIGZyYW1lLnRvdGFsICs9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgbGV0IHJvbGwgPSB7IHZhbHVlIH07XG5cbiAgICBmcmFtZS5wdXNoKHJvbGwpO1xuXG4gICAgbGV0IHJvbGxzU3VtID0gc3VtKGZyYW1lLm1hcChyb2xsID0+IHJvbGwudmFsdWUpKTtcbiAgICBmcmFtZS50b3RhbCA9IHJvbGxzU3VtO1xuXG4gICAgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAocm9sbC52YWx1ZSA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnWCc7XG5cbiAgICAgICAgICAgIGlmICghaXNMYXN0RnJhbWUoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJhbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChmcmFtZS50b3RhbCA9PT0gMTApIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSAnLyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgcm9sbHNTdW0gPj0gMTApIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMykge1xuICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcblxuICAgICAgICBuZXh0UGxheWVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5sYXN0UmVzdWx0ID0gdmFsdWU7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIG9uVXBkYXRlUGxheWVyTmFtZShzdGF0ZSwgZGF0YSkge1xuICAgIHN0YXRlLnBsYXllcnNbZGF0YS5pbmRleF0gPSBkYXRhLnZhbHVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblBsYXlHYW1lKHN0YXRlKSB7XG4gICAgcmV0dXJuIGdldEluaXRpYWxTdGF0ZShzdGF0ZS5wbGF5ZXJzKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlBMQVlfR0FNRTpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uUGxheUdhbWUoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRJQ0tfVElNRVI6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRpY2tUaW1lcihzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVEhST1dfQkFMTDpcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG9uVGhyb3dCYWxsKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUExBWUVSX05BTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXBhcmVWaWV3KHN0YXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJDcmVhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9nYW1lUGxheVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgdGFibGUgZnJvbSAnLi4vdGFibGUvdGFibGUuanMnO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsLmpzJztcbmltcG9ydCBpbWFnZVNyYyBmcm9tICdpbWFnZXMvYmFsbC5wbmcnO1xuaW1wb3J0IGNuIGZyb20gJy4vYXBwLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hcHAuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIHRhYmxlSFRNTDogdGFibGUoYXBwKSxcbiAgICAgICAgbW9kYWxIVE1MOiBtb2RhbChhcHApLFxuICAgICAgICBpbWFnZVNyYyxcbiAgICAgICAgY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuanNcbiAqKi8iLCJpbXBvcnQgY24gZnJvbSAnLi9jZWxsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jZWxsLmpzdCc7XG5cbmZ1bmN0aW9uIHByZXBhcmVDTihzdGF0ZSkge1xuICAgIGxldCByb290ID0gY24uX3Jvb3QgPSBbY24ucm9vdF07XG5cbiAgICBpZiAoc3RhdGUuaXNMZWZ0KSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19sZWZ0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNSaWdodCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfcmlnaHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5pc1RvcCkge1xuICAgICAgICByb290LnB1c2goY24uaXNfdG9wKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaXNCb3R0b20pIHtcbiAgICAgICAgcm9vdC5wdXNoKGNuLmlzX2JvdHRvbSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmlzU2NvcmVzKSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pc19zY29yZXMpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgY246IHByZXBhcmVDTihjZWxsKVxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZmluYWwtcmVzdWx0cy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZmluYWwtcmVzdWx0cy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGxheSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgZmluYWxSZXN1bHRzOiBwbGF5LmZpbmFsUmVzdWx0c1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBsYXkpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IHBsYXkucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuLi9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzJztcbmltcG9ydCBmaW5hbFJlc3VsdHMgZnJvbSAnLi4vZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RhbC5qc3QnO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ04oc3RhdGUpIHtcbiAgICBsZXQgcm9vdCA9IFtjbi5yb290XTtcblxuICAgIGlmIChzdGF0ZS5tb2RhbC5zdHlsZSkge1xuICAgICAgICByb290LnB1c2goY25bJ3N0eWxlXycgKyBzdGF0ZS5tb2RhbC5zdHlsZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QucHVzaChjbi5pbmZvKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLm1vZGFsLmlzT3Blbikge1xuICAgICAgICByb290LnB1c2goJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGNuLl9yb290ID0gcm9vdC5qb2luKCcgJyk7XG5cbiAgICByZXR1cm4gY247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBsZXQgY29udGVudEhUTUwgPSAnJztcblxuICAgIHN3aXRjaCAoYXBwLm1vZGFsLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnZ2FtZS1mb3JtJzpcbiAgICAgICAgICAgIGNvbnRlbnRIVE1MID0gZ2FtZUZvcm0oYXBwLnBsYXkpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmluYWwtcmVzdWx0cyc6XG4gICAgICAgICAgICBjb250ZW50SFRNTCA9IGZpbmFsUmVzdWx0cyhhcHAucGxheSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBwcmVwYXJlQ04oYXBwKSxcbiAgICAgICAgY29udGVudEhUTUxcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzXG4gKiovIiwiaW1wb3J0IGNlbGwgZnJvbSAnLi4vY2VsbC9jZWxsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3Jvdy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb3cpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY2VsbHNIVE1MOiByb3cuY29scy5tYXAoY2VsbCkuam9pbignJyksXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc1xuICoqLyIsImltcG9ydCByb3cgZnJvbSAnLi4vcm93L3Jvdy5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi90YWJsZS5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGFibGUuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIHJvd3NIVE1MOiBhcHAucGxheS5yb3dzLm1hcChyb3cpLmpvaW4oJycpLFxuICAgICAgICBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuanNcbiAqKi8iLCJmdW5jdGlvbiBjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkge1xuICAgIGlmIChIVE1MLnRyaW0oKSA9PT0gJycpe1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoSFRNTCk7XG4gICAgfVxuXG4gICAgLy8gRXZlcnl0aGluZyBleGNlcHQgaU9TIDcgU2FmYXJpLCBJRSA4LzksIEFuZHJpb2QgQnJvd3NlciA0LjEvNDNcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgbGV0IGhlYWQgPSBkb2MuY2hpbGROb2Rlc1swXTtcbiAgICBsZXQgYm9keSA9IGRvYy5jaGlsZE5vZGVzWzFdO1xuICAgIGxldCBub2RlO1xuXG4gICAgaWYgKG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgPSBib2R5LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZSkge1xuICAgIGxldCB2Tm9kZSA9IHtcbiAgICAgICAgdHlwZTogbm9kZS5ub2RlVHlwZVxuICAgIH07XG5cbiAgICBpZiAodk5vZGUudHlwZSA9PT0gMykge1xuICAgICAgICB2Tm9kZS5jb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbnMgPSBbXTtcbiAgICAgICAgdk5vZGUuYXR0cnMgPSB7fTtcbiAgICAgICAgdk5vZGUudGFnID0gbm9kZS50YWdOYW1lO1xuXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbnMucHVzaChjcmVhdGVWTm9kZUZyb21Ob2RlKG5vZGUuY2hpbGROb2Rlc1tpXSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IG5vZGUuYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSAnY2xhc3NOYW1lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdk5vZGUuYXR0cnNbbmFtZV0gPSBub2RlLmF0dHJpYnV0ZXNbaV0udmFsdWUucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZOb2RlO1xufVxuXG5mdW5jdGlvbiBqb2luQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1trZXldLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAga2V5ID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGAke2tleX09XCIke2F0dHJ9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSFRNTFRhZyh2Tm9kZSwgaW5uZXJIVE1MID0gJycpIHtcbiAgICBsZXQgYXR0cnMgPSBqb2luQXR0cnModk5vZGUuYXR0cnMpO1xuXG4gICAgc3dpdGNoKHZOb2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gYCR7aW5uZXJIVE1MfWA7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBgPCR7dk5vZGUudGFnfSAke2F0dHJzfT4ke2lubmVySFRNTH08LyR7dk5vZGUudGFnfT5gO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySFRNTCh2Tm9kZSkge1xuICAgIGxldCBpbm5lckhUTUwgPSAnJztcblxuICAgIGlmICh2Tm9kZS50eXBlICE9PSAzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlubmVySFRNTCArPSByZW5kZXJIVE1MKHZOb2RlLmNoaWxkcmVuc1tpXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckhUTUwgPSB2Tm9kZS5jb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwpO1xufVxuXG5leHBvcnQgbGV0IGRpZmYgPSBmdW5jdGlvbiAodk5vZGUxLCB2Tm9kZTIpIHtcbiAgICBpZiAodk5vZGUxICYmICF2Tm9kZTIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdSRU1PVkVfTk9ERSdcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCF2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnQUREX05PREUnLFxuICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodk5vZGUxLnRhZyAhPT0gdk5vZGUyLnRhZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ1JFUExBQ0VfTk9ERScsXG4gICAgICAgICAgICB2Tm9kZTogdk5vZGUyXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh2Tm9kZTEudHlwZSA9PT0gMyB8fCB2Tm9kZTIudHlwZSA9PT0gMykge1xuICAgICAgICBpZiAodk5vZGUxLmNvbnRlbnQgIT09IHZOb2RlMi5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXR0cnMgPSBbXTtcbiAgICAgICAgbGV0IHBhdGNoID0ge307XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZOb2RlMi5hdHRycykge1xuICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMSkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyVmFsID0gYXR0cjIuam9pbignICcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIxVmFsICE9PSBhdHRyMlZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBhdHRyMlZhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCFhdHRyMikge1xuICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUxLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNEaWZmID0gZGlmZih2Tm9kZTEuY2hpbGRyZW5zW2ldLCB2Tm9kZTIuY2hpbGRyZW5zW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSBjRGlmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB2Tm9kZTIuY2hpbGRyZW5zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXZOb2RlMS5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY0RpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNEaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY0RpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGF0Y2guYXR0cnMgPSBhdHRycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXRjaCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgb3ApIHtcbiAgICBzd2l0Y2gob3AudHlwZSkge1xuICAgICAgICBjYXNlICdBRERfTk9ERSc6XG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChvcC52Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUkVNT1ZFX05PREUnOlxuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQob3Audk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSBuZXdOb2RlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyT3BzKG5vZGUsIG9wcykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBvcHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wID0gb3BzW2ldO1xuICAgICAgICBsZXQgbmFtZSA9IG9wLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChvcC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTRVQnOlxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIG9wLnZhbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JFTU9WRSc6XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2hlcywgcGFyZW50Tm9kZSkge1xuICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2hlcy50eXBlKSB7XG4gICAgICAgIG5vZGUgPSBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcGF0Y2hlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlBdHRyT3BzKG5vZGUsIHBhdGNoZXNba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGx5UGF0Y2goY2hpbGROb2Rlc1trZXldLCBwYXRjaGVzW2tleV0sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgbGV0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUZyb21IVE1MKHJlbmRlckhUTUwodk5vZGUpKTtcbn07XG5cbmV4cG9ydCBsZXQgdk5vZGVGcm9tSFRNTCA9IGZ1bmN0aW9uIChIVE1MKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlRnJvbU5vZGUoY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpKTtcbn07XG5cbmV4cG9ydCBsZXQgYXBwbHlWTm9kZSA9IGZ1bmN0aW9uIChub2RlLCB2Tm9kZSkge1xuICAgIHJldHVybiBhcHBseVBhdGNoKG5vZGUsIGRpZmYoY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSwgdk5vZGUpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xcbiAgICBjb2xvcjogcmdiKDQ0LCA2MiwgODApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IHJnYigyMjEsIDIyMSwgMjIxKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMTVweCAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDI0MCwgMjQxLCAwLjc3KTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5ib3VuY2VJbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICBmcm9tLCB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDcwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCOztBQUVEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0dBQ25DOztFQUVEO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtHQUM3QjtDQUNGOztBQUVEO0lBQ0k7UUFDSSxnQ0FBZ0M7S0FDbkM7O0lBRUQ7UUFDSSxtQ0FBbUM7S0FDdEM7O0lBRUQ7UUFDSSxrQ0FBa0M7S0FDckM7Q0FDSlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDogI2VjZjBmMTtcXG4gICAgY29sb3I6IHJnYig0NCwgNjIsIDgwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHggMTFweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC43Nyk7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uYm91bmNlSW4ge1xcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XFxufVxcblxcbi5zaGFrZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTUsIC45NSwgLjk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgZnJvbSwgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAzMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9zcmMvY3NzL21haW4uY3NzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcF9fcm9vdF9fXzNBdkV1IHtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxufVxcbi5hcHBfX2ltYWdlX19fNkwyQ2Ige1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hcHBfX2J1dHRvbl9fd3BfX18zTFhIayB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwX19hdXRob3JfX18xX3NpdyB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggMzBweCA1cHg7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmFwcF9fYnV0dG9uX19fMUx3RHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDEyMXB4IDIwcHggMjBweCAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggcmdiYSgyNDMsIDE1NiwgMTgsIDAuOCk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4uYXBwX19idXR0b25fX18xTHdEdDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4ICM2NTI4MDE7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcHBfX3NoYWtlX19fMWxkZUM7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvYXBwL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG1DQUFzQjtDQUN6QlwiLFwiZmlsZVwiOlwiYXBwLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG4uaW1hZ2Uge1xcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQycHg7XFxuICAgIGxlZnQ6IDI2MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5idXR0b25fX3dwIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IDMwcHggNXB4O1xcbiAgICBjb2xvcjogI2NjYztcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDEyMXB4IDIwcHggMjBweCAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggcmdiYSgyNDMsIDE1NiwgMTgsIDAuOCk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY1MjgwMTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJhcHBfX3Jvb3RfX18zQXZFdVwiLFxuXHRcImltYWdlXCI6IFwiYXBwX19pbWFnZV9fXzZMMkNiXCIsXG5cdFwiYnV0dG9uX193cFwiOiBcImFwcF9fYnV0dG9uX193cF9fXzNMWEhrXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXBwX19hdXRob3JfX18xX3Npd1wiLFxuXHRcImJ1dHRvblwiOiBcImFwcF9fYnV0dG9uX19fMUx3RHRcIixcblx0XCJzaGFrZVwiOiBcImFwcF9fc2hha2VfX18xbGRlQ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGxfX3Jvb3RfX18ycU03MSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uY2VsbF9faXNfcmlnaHRfX18zdmxYSSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxufVxcblxcbi5jZWxsX19pc19ib3R0b21fX18ycHVudSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fcklaaWwuY2VsbF9faXNfbGVmdF9fXzE0WHpxIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fcklaaWwuY2VsbF9faXNfcmlnaHRfX18zdmxYSSAuY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMDtcXG59XFxuXFxuLmNlbGxfX2lzX2JvdHRvbV9fXzJwdW51LmNlbGxfX2lzX3JpZ2h0X19fM3ZsWEkgLmNlbGxfX2NlbGxfX18zSFFRSiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwcHg7XFxufVxcblxcbi5jZWxsX19pc19ib3R0b21fX18ycHVudS5jZWxsX19pc19yaWdodF9fXzN2bFhJIC5jZWxsX19jZWxsX19fM0hRUUoge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xcbn1cXG5cXG4uY2VsbF9faXNfdG9wX19fcklaaWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsX19pc19sZWZ0X19fMTRYenEge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGxfX2lzX3Njb3Jlc19fXzJzVlBuIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uY2VsbF9fY2VsbF9fXzNIUVFKIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsX190b3BfX183cEFfUCB7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uY2VsbF9faGFsZl9fXzNZcm56IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jZWxsX19mdWxsX19fMTFqSzIgeyB9XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVztDQUNkOztBQUVELHVCQUFTXCIsXCJmaWxlXCI6XCJjZWxsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX2JvdHRvbSAuY2VsbCB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuXFxuLmlzX3RvcC5pc19sZWZ0IC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcXG59XFxuXFxuLmlzX3RvcC5pc19yaWdodCAuY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDA7XFxufVxcblxcbi5pc19ib3R0b20uaXNfcmlnaHQgLmNlbGwge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xcbn1cXG5cXG4uaXNfYm90dG9tLmlzX3JpZ2h0IC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcXG59XFxuXFxuLmlzX3RvcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX2xlZnQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlzX3Njb3JlcyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvcCB7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cXG4uaGFsZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZnVsbCB7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJjZWxsX19yb290X19fMnFNNzFcIixcblx0XCJpc19yaWdodFwiOiBcImNlbGxfX2lzX3JpZ2h0X19fM3ZsWElcIixcblx0XCJjZWxsXCI6IFwiY2VsbF9fY2VsbF9fXzNIUVFKXCIsXG5cdFwiaXNfYm90dG9tXCI6IFwiY2VsbF9faXNfYm90dG9tX19fMnB1bnVcIixcblx0XCJpc190b3BcIjogXCJjZWxsX19pc190b3BfX19ySVppbFwiLFxuXHRcImlzX2xlZnRcIjogXCJjZWxsX19pc19sZWZ0X19fMTRYenFcIixcblx0XCJpc19zY29yZXNcIjogXCJjZWxsX19pc19zY29yZXNfX18yc1ZQblwiLFxuXHRcInRvcFwiOiBcImNlbGxfX3RvcF9fXzdwQV9QXCIsXG5cdFwiaGFsZlwiOiBcImNlbGxfX2hhbGZfX18zWXJuelwiLFxuXHRcImZ1bGxcIjogXCJjZWxsX19mdWxsX19fMTFqSzJcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbmFsLXJlc3VsdHNfX25hbWVfX18ycmxZcyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmZpbmFsLXJlc3VsdHNfX3dpbm5lcl9fXzFUc042IHtcXG4gICAgZm9udC1zaXplOjQwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7Q0FDZlwiLFwiZmlsZVwiOlwiZmluYWwtcmVzdWx0cy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hbWUge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6NDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibmFtZVwiOiBcImZpbmFsLXJlc3VsdHNfX25hbWVfX18ycmxZc1wiLFxuXHRcIndpbm5lclwiOiBcImZpbmFsLXJlc3VsdHNfX3dpbm5lcl9fXzFUc042XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lLWZvcm1fX3Jvb3RfX18xZHNUQSB7IH1cXG5cXG4uZ2FtZS1mb3JtX19uYW1lX19fMVp3aXIge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZvcm1fX2lucHV0X19fM3BsOUYge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDQsIDYyLCA4MCwgMC4xMik7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzN0TFZQIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5nYW1lLWZvcm1fX3Jvd19fXzN0TFZQOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUFTOztBQUVUO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQlwiLFwiZmlsZVwiOlwiZ2FtZS1mb3JtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7IH1cXG5cXG4ubmFtZSB7XFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICBmb250LXNpemU6IDQxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ0LCA2MiwgODAsIDAuMTIpO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5yb3c6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImdhbWUtZm9ybV9fcm9vdF9fXzFkc1RBXCIsXG5cdFwibmFtZVwiOiBcImdhbWUtZm9ybV9fbmFtZV9fXzFad2lyXCIsXG5cdFwiaW5wdXRcIjogXCJnYW1lLWZvcm1fX2lucHV0X19fM3BsOUZcIixcblx0XCJyb3dcIjogXCJnYW1lLWZvcm1fX3Jvd19fXzN0TFZQXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWxfX3Jvb3RfX18yb2o3OSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlX19fMU90eG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZV9fXzFPdHhvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnRfX18zLVR5UCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX2luZm9fX18xaWszSiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9ncmVlbl9fXzFqQVptIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC44KTtcXG59XFxuXFxuLm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfX3N0eWxlX3JlZF9fXzFMUGR4IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC44KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdEM7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxtQ0FBbUM7Q0FDdENcIixcImZpbGVcIjpcIm1vZGFsLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTdweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDkwcHggNXB4O1xcbn1cXG5cXG4uc3R5bGVfaW5mbyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCAyNDAsIDI0MSwgMC44KTtcXG59XFxuXFxuLnN0eWxlX2dyZWVuIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC44KTtcXG59XFxuXFxuLnN0eWxlX29yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbn1cXG5cXG4uc3R5bGVfcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC44KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwibW9kYWxfX3Jvb3RfX18yb2o3OVwiLFxuXHRcImNsb3NlXCI6IFwibW9kYWxfX2Nsb3NlX19fMU90eG9cIixcblx0XCJjb250ZW50XCI6IFwibW9kYWxfX2NvbnRlbnRfX18zLVR5UFwiLFxuXHRcInN0eWxlX2luZm9cIjogXCJtb2RhbF9fc3R5bGVfaW5mb19fXzFpazNKXCIsXG5cdFwic3R5bGVfZ3JlZW5cIjogXCJtb2RhbF9fc3R5bGVfZ3JlZW5fX18xakFabVwiLFxuXHRcInN0eWxlX29yYW5nZVwiOiBcIm1vZGFsX19zdHlsZV9vcmFuZ2VfX18yVlhNbFwiLFxuXHRcInN0eWxlX3JlZFwiOiBcIm1vZGFsX19zdHlsZV9yZWRfX18xTFBkeFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3dfX3Jvd19fXzItbWgwLnJvd19faXNfaGVhZF9fXzFGNTdQIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTZweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9yb3cvcm93LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQ1wiLFwiZmlsZVwiOlwicm93LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm93LmlzX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvd1wiOiBcInJvd19fcm93X19fMi1taDBcIixcblx0XCJpc19oZWFkXCI6IFwicm93X19pc19oZWFkX19fMUY1N1BcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJ0YWJsZS5jc3NcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2ltYWdlcy9iYWxsLnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1hZ2VzL2JhbGwucG5nXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvbWFpbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vYXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2ZpbmFsLXJlc3VsdHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9maW5hbC1yZXN1bHRzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9maW5hbC1yZXN1bHRzL2ZpbmFsLXJlc3VsdHMuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL2dhbWUtZm9ybS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vZ2FtZS1mb3JtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL21vZGFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi9tb2RhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3Jvdy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwJm1vZHVsZXMmbG9jYWxJZGVudE5hbWU9W25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCZtb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XSEuL3RhYmxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAmbW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV0hLi90YWJsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvdGFibGUvdGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi53b3Jrc3BhY2UgLCdcIj4gPGRpdiBjbGFzcz1cIicsIGNuLmF1dGhvciAsJ1wiPmJ5IEFsZXggQWZvbmluPC9kaXY+IDxkaXY+ICcsIHRhYmxlSFRNTCAsJyA8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmJ1dHRvbl9fd3AgLCdcIj4gPGltZyBjbGFzcz1cIicsIGNuLmltYWdlICwnXCIgc3JjPVwiJywgaW1hZ2VTcmMgLCdcIj4gPGJ1dHRvbiBjbGFzcz1cIicsIGNuLmJ1dHRvbiAsJ1wiIGRhdGEtbWFpbj1cInJvbGxcIiA+PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPGRpdj4gJywgbW9kYWxIVE1MICwnIDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvYXBwL2FwcC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLl9yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5jZWxsICwnXCI+ICcpOyBpZiAoY2VsbC50ZXh0KSB7IFxucC5wdXNoKCcgJywgY2VsbC50ZXh0ICwnICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCB0b3AgLCcgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+STwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxkICwnXCI+SUk8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLW1pZCBjbGVhcmZpeFwiPiAnKTsgaWYgKGNlbGxbMF0gPT09ICdYJykgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5mdWxsICwnPlwiPlg8L2Rpdj4gJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImNlbGwtbGVmdCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFswXSAsJzwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCAnLCBjbi5oYWxmICwnXCI+JywgY2VsbFsxXSAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNlbGwudG90YWwgLCc8L2Rpdj4gPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCInLCBjbi5yb290ICwnXCI+IDxkaXYgY2xhc3M9XCInLCBjbi5uYW1lICwnICcsIGNuLndpbm5lciAsJ1wiPicsIGZpbmFsUmVzdWx0c1swXS5uYW1lICwnIFdPTiEgLSAnLCBmaW5hbFJlc3VsdHNbMF0uc2NvcmVzICwnPC9kaXY+IDxkaXY+ICcpOyBmaW5hbFJlc3VsdHMuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cIicsIGNuLm5hbWUgLCdcIj4nLCBwbGF5ZXIubmFtZSAsJyAtICcsIHBsYXllci5zY29yZXMgLCc8L2Rpdj4gJyk7IH0pOyBcbnAucHVzaCgnIDxidXR0b24gZGF0YS1maW5hbC1yZXN1bHRzPVwibmV3XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPk5ldyBnYW1lPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24ucm9vdCAsJ1wiPiA8ZGl2IGNsYXNzPVwiJywgY24ubmFtZSAsJ1wiPkJPV0xJTkcuSlM8L2Rpdj4gJyk7IHBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyLCBpbmRleCkgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCInLCBjbi5yb3cgLCdcIj4gPGlucHV0IGNsYXNzPVwiJywgY24uaW5wdXQgLCdcIiBkYXRhLWdhbWUtZm9ybT1cImlucHV0XCIgZGF0YS1pbmRleD1cIicsIGluZGV4ICwnXCIgdmFsdWU9XCInLCBwbGF5ZXIgLCdcIj4gPC9kaXY+ICcpOyB9KTsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiJywgY24ucm93ICwnXCI+IDxidXR0b24gZGF0YS1nYW1lLWZvcm09XCJwbGF5XCIgY2xhc3M9XCJmb3JtLWJ1dHRvblwiPlBsYXk8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzdFxuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgY24uX3Jvb3QgLCcgYW5pbWF0ZWQgYm91bmNlSW5cIj4gPGRpdiBkYXRhLW1vZGFsPVwiY2xvc2VcIiBjbGFzcz1cIicsIGNuLmNsb3NlICwnXCI+w5c8L2Rpdj4gPGRpdiBjbGFzcz1cIicsIGNuLmNvbnRlbnQgLCdcIj4gJywgY29udGVudEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIGNuLnJvdyAsJyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXY+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy90YWJsZS90YWJsZS5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==