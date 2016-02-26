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
	
	
	var _index = __webpack_require__(19);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _styles = __webpack_require__(20);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _virtualDom = __webpack_require__(11);
	
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
	            this.gameTimer && clearInterval(this.gameTimer);
	
	            //this.gameTimer = setInterval(() => {
	            //this.reduceAction(reducer.tickTimer());
	            //this.render();
	            //}, 1000);
	
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
	        key: 'onRollClick',
	        value: function onRollClick(key) {
	            switch (key) {
	                case 'roll':
	                    this.reduceAction(_appReducer2.default.throwBall());
	
	                    if (this.state.play.theEnd) {
	                        this.reduceAction(_appReducer2.default.newGame());
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
	            var _this = this;
	
	            requestAnimationFrame(function () {
	                var HTML = (0, _app2.default)(_this.state);
	                var vNode = vdom.fromHTML(HTML);
	
	                if (_this.vNode && _this.node) {
	                    vdom.applyPatch(_this.node, vdom.diff(_this.vNode, vNode));
	                } else {
	                    _this.node = vdom.createElement(vNode);
	                    _this.appNode.innerHTML = '';
	                    _this.appNode.appendChild(_this.node);
	                }
	
	                _this.vNode = vNode;
	                _this.fillNodes();
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
	function getInitialState() {
	    return {
	        name: 'game-form',
	        style: 'green',
	        isOpen: true
	    };
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
	            case types.NEW_GAME:
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
	
	function calcRows(state) {
	    var rows = state.rows = [];
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
	
	    return state;
	}
	
	function sum(arr) {
	    return arr.reduce(function (acc, val) {
	        return acc + val;
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
	
	        return calcRows(state);
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
	        mainImageSrc: _main2.default,
	        cn: _app2.default
	    });
	};
	
	var _row = __webpack_require__(10);

	var _row2 = _interopRequireDefault(_row);

	var _modal = __webpack_require__(9);

	var _modal2 = _interopRequireDefault(_modal);

	var _main = __webpack_require__(18);

	var _main2 = _interopRequireDefault(_main);

	var _app = __webpack_require__(21);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(26);

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
	
	var _cell = __webpack_require__(22);

	var _cell2 = _interopRequireDefault(_cell);

	var _cell3 = __webpack_require__(27);

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
	    return (0, _gameForm4.default)({
	        cn: _gameForm2.default,
	        players: play.players
	    });
	};
	
	var _gameForm = __webpack_require__(23);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _gameForm3 = __webpack_require__(28);

	var _gameForm4 = _interopRequireDefault(_gameForm3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    var contentHTML = '';
	
	    if (app.modal.name === 'game-form') {
	        contentHTML = (0, _gameForm2.default)(app.play);
	    }
	
	    return (0, _modal4.default)({
	        cn: _modal2.default,
	        style: app.modal.style || 'info',
	        isOpen: app.modal.isOpen,
	        contentHTML: contentHTML
	    });
	};
	
	var _gameForm = __webpack_require__(8);

	var _gameForm2 = _interopRequireDefault(_gameForm);

	var _modal = __webpack_require__(24);

	var _modal2 = _interopRequireDefault(_modal);

	var _modal3 = __webpack_require__(29);

	var _modal4 = _interopRequireDefault(_modal3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
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

	var _row = __webpack_require__(25);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(30);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function createNodeFromHTML(HTML) {
	    if (HTML.trim() === '') {
	        return document.createTextNode(HTML);
	    }
	
	    // Everything except iOS 7 Safari, IE 8/9, Andriod Browser 4.1/43
	    var parser = new DOMParser();
	    var body = parser.parseFromString(HTML, 'text/html').documentElement.childNodes[1];
	    var node = body.childNodes[0];
	
	    body.removeChild(node);
	
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
	    if (vNode1 && vNode2) {
	        if (vNode2.tag !== vNode1.tag) {
	            return {
	                type: 'REPLACE_NODE',
	                vNode: vNode2
	            };
	        } else if (vNode1.type === 3 || vNode2.type === 3) {
	            if (vNode2.content !== vNode1.content) {
	                return {
	                    type: 'REPLACE_NODE',
	                    vNode: vNode2
	                };
	            } else {
	                return;
	            }
	        } else {
	            var a = [];
	
	            for (var key in vNode2.attrs) {
	                var attr1 = vNode1.attrs[key];
	                var attr2 = vNode2.attrs[key];
	
	                if (!attr1) {
	                    a.push({
	                        type: 'SET_ATTR',
	                        name: key,
	                        val: attr2.join(' ')
	                    });
	                } else {
	                    var attr1Val = attr1.join(' ');
	                    var attr2Val = attr2.join(' ');
	
	                    if (attr1Val !== attr2Val) {
	                        a.push({
	                            type: 'SET_ATTR',
	                            name: key,
	                            val: attr2Val
	                        });
	                    }
	                }
	            }
	
	            for (var key in vNode1.attrs) {
	                var attr1 = vNode1.attrs[key];
	                var attr2 = vNode2.attrs[key];
	
	                if (!attr2) {
	                    a.push({
	                        type: 'REMOVE_ATTR',
	                        name: attr1
	                    });
	                }
	            }
	
	            var patch = {};
	
	            for (var i = 0, length = vNode1.childrens.length; i < length; i++) {
	                if (!vNode2.childrens[i]) {
	                    patch[i] = {
	                        type: 'REMOVE_NODE'
	                    };
	                }
	            }
	
	            for (var i = 0, length = vNode2.childrens.length; i < length; i++) {
	                var childDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);
	
	                if (childDiff && Object.keys(childDiff).length) {
	                    patch[i] = childDiff;
	                }
	            }
	
	            patch.attrs = a;
	
	            return Object.keys(patch).length > 1 || a.length ? patch : undefined;
	        }
	    } else if (vNode2) {
	        return {
	            type: 'ADD_NODE',
	            vNode: vNode2
	        };
	    }
	
	    return;
	};
	
	function applyPatchOp(parentNode, node, p) {
	    switch (p.type) {
	        case 'ADD_NODE':
	            parentNode.appendChild(createElement(p.vNode));
	            break;
	        case 'REMOVE_NODE':
	            if (parentNode && node) {
	                parentNode.removeChild(node);
	            }
	            break;
	        case 'REPLACE_NODE':
	            var newNode = createElement(p.vNode);
	
	            if (parentNode) {
	                parentNode.insertBefore(newNode, node);
	                parentNode.removeChild(node);
	            }
	
	            node = newNode;
	            break;
	    }
	
	    return node;
	}
	
	var applyPatch = exports.applyPatch = function applyPatch(node, patch, id) {
	    var parentNode = node.parentNode;
	
	    if (id !== undefined) {
	        parentNode = node;
	        node = node.childNodes[id];
	    }
	
	    if (!patch) {
	        return node;
	    }
	
	    if (patch.type) {
	        node = applyPatchOp(parentNode, node, patch);
	    } else {
	        for (var key in patch) {
	            var p = patch[key];
	
	            if (key === 'attrs') {
	                for (var i = 0, length = p.length; i < length; i++) {
	                    var attr = p[i];
	                    var name = attr.name;
	
	                    if (name === 'className') {
	                        name = 'class';
	                    }
	
	                    switch (attr.type) {
	                        case 'SET_ATTR':
	                            node.setAttribute(name, attr.val);
	                            break;
	                        case 'REMOVE_ATTR':
	                            node.removeAttribute(name);
	                            break;
	                    }
	                }
	            } else {
	                node.childNodes[key] = applyPatch(node, p, key);
	            }
	        }
	    }
	
	    return node;
	};
	
	var createElement = exports.createElement = function createElement(vNode) {
	    return createNodeFromHTML(renderHTML(vNode));
	};
	
	var fromHTML = exports.fromHTML = function fromHTML(HTML) {
	    return createVNodeFromNode(createNodeFromHTML(HTML));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".screen {\n    width: 720px;\n    margin: 0 auto 0 auto;\n}\n\n.main-image {\n    width: 300px;\n    margin: 50px auto 50px auto;\n    display: block;\n}\n\n.screen .head .cell-wp:first-child .cell {\n    border-radius: 10px 0 0 0;\n}\n\n.screen .head .cell-wp:last-child .cell {\n    border-radius: 0 10px 0 0;\n}\n\n.screen .player:last-child .cell-wp:first-child .cell {\n    border-radius: 0 0 0 10px;\n}\n\n.screen .player:last-child .cell-wp:last-child .cell {\n    border-radius: 0 0 10px 0;\n}\n\n.roll-button {\n    font-size: 500%;\n    margin: 50px auto;\n    display: block;\n    border-radius: 50%;\n    border: none;\n    color: #fff;\n    padding: 20px;\n    width: 200px;\n    height: 200px;\n    cursor: pointer;\n    box-shadow: 0 2px #652801;\n    text-transform: uppercase;\n    background: #d35400;\n    -webkit-appearance: caret;\n}\n\n.roll-button:hover {\n    background: rgba(211, 84, 0, 0.73);\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell-wp {\n    width: 60px;\n    height: 60px;\n    float: left;\n}\n\n.cell-wp.left-col {\n    width: 120px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    border-color: #eee;\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    text-align: center;\n}\n\n.cell-wp:last-child .cell {\n    border-right-width: 1px;\n}\n\n.player:last-child .cell {\n    border-bottom-width: 1px;\n}\n\n.cell-half {\n    float: left;\n    width: 50%;\n}\n\n.left-col {\n    line-height: 57px;\n    text-align: center;\n}\n\n.head .left-col .cell {\n    text-align: center;\n}\n\n.player .left-col .cell {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 0 10px;\n    text-transform: uppercase;\n    color: rgba(131, 178, 186, 0.95);\n}\n\n.player :not(.left-col) .cell {\n    font-size: 12px;\n}\n\n.cell-top {\n    color: rgba(131, 178, 186, 0.95);\n}\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".game-form {\n    margin: 100px auto;\n    width: 600px;\n    background: #fff;\n    border-radius: 5px;\n    padding: 90px 5px;\n}\n\n.game-form__name {\n    color: #2c3e50;\n    font-size: 41px;\n    text-align: center;\n}\n\n.game-form__input {\n    font-weight: 100;\n    font-size: 16px;\n    width: 228px;\n    padding: 12px 20px;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: -1px;\n    border: 1px solid rgba(44, 62, 80, 0.12);\n}\n\n.game-form__button {\n    font-size: 14px;\n    font-weight: 600;\n    background: #ecf0f1;\n    color: rgb(44, 62, 80);\n    box-shadow: 0px 2px rgb(221, 221, 221);\n    display: block;\n    width: 228px;\n    margin: 0 auto 0 auto;\n    border-radius: 2px;\n    padding: 13px 15px 11px;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n}\n\n.game-form__button:hover {\n    background: rgba(236, 240, 241, 0.77);\n}\n\n.game-form__row {\n    margin: 0 10px;\n}\n\n.game-form__row:first-child {\n    margin-top: 1px;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n    top: 0;\n    left: 0;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.modal__hidden {\n    display: none;\n}\n\n.modal__close {\n    position: absolute;\n    top: -7px;\n    right: 15px;\n    font-size: 60px;\n    color: #fff;\n    cursor: pointer;\n    transition: all .3s ease;\n    transform: rotate(0);\n    display: none;\n}\n\n.modal__close:hover {\n    transform: rotate(90deg);\n}\n\n.modal__content {\n}\n\n.modal__info {\n    background: rgba(236, 240, 241, 0.8);\n}\n\n.modal__green {\n    background: rgba(39, 174, 96, 0.8);\n}\n\n.modal__orange {\n    background: rgba(243, 156, 18, 0.8);\n}\n\n.modal__red {\n    background: rgba(231, 76, 60, 0.8);\n}\n\n.modal_animation_bounceIn {\n    animation-duration: .5s;\n    animation-fill-mode: both;\n    animation-name: bounceIn;\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(.95, .95, .95);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row {\n\n}\n\n.head.row {\n    text-align: center;\n    line-height: 56px;\n    font-size: 19px;\n    color: rgba(131, 178, 186, 0.95);\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f7ff4cc8235ead8d28133956059fb49e.jpg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> <div class="screen"> <img class="main-image" src="', mainImageSrc ,'"> <div> ', rowsHTML ,' </div> </div> <button class="roll-button" data-main="roll" >GO</button> <div> ', modalHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 27 */
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
/* 28 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="game-form"> <div class="game-form__name">BOWLING.JS</div> '); players.forEach(function (player, index) { 
	p.push(' <div class="game-form__row"> <input class="game-form__input" data-game-form="input" data-index="', index ,'" value="', player ,'"> </div> '); }); 
	p.push(' <div class="form__row"> <button data-game-form="play" class="game-form__button">Play</button> </div> </div> ');}return p.join('');
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="modal modal__', style ,' modal_animation_bounceIn ', isOpen ? '' : 'modal__hidden' ,'"> <div data-modal="close" class="modal__close">×</div> <div class="modal__content"> ', contentHTML ,' </div> </div> ');}return p.join('');
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', row.isHead ? 'head' : 'player' ,' row clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGVlNGU1ZmY5M2MxMTM5ZGI2OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvYXBwUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZU1vZGFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jZWxsL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbWFpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjQ5MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5jc3M/YmRiNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcz9hMzQ2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzcz84OGQ0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5jc3M/ZDY0NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3M/NDA5OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uanN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tb2RhbC9tb2RhbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ3BDWTs7Ozs7Ozs7Ozs7Ozs7OztLQU9OO0FBQ0YsY0FERSxHQUNGLENBQWEsS0FBYixFQUFvQjsrQkFEbEIsS0FDa0I7O0FBQ2hCLGNBQUssU0FBTCxDQUFlLEtBQWYsRUFDSyxXQURMLEdBRUssTUFGTCxHQUdLLGFBSEwsR0FJSyxZQUpMLEdBRGdCO01BQXBCOztrQkFERTs7bUNBU1MsT0FBTztBQUNkLGtCQUFLLEtBQUwsR0FBYSxLQUFiLENBRGM7O0FBR2Qsb0JBQU8sSUFBUCxDQUhjOzs7O3VDQU1IO0FBQ1gsa0JBQUssT0FBTCxHQUFlLFNBQVMsY0FBVCxDQUF3QixLQUF4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O0FBQzdDLHdIQUF1SCxFO0FBQ3ZILGdHQUErRixFO0FBQy9GLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsaUZBQWlGLDJDO0FBQzlKLHVKQUFzSixFQUFFLEU7QUFDeEosMEhBQXlIO0FBQ3pILEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQiw0QkFBNEIsVUFBVSxrT0FBa087QUFDL1MsRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLG1HQUFtRztBQUNoTCxFIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZGVlNGU1ZmY5M2MxMTM5ZGI2OTdcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5odG1sJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAqIGFzIHZkb20gZnJvbSAnLi92aXJ0dWFsLWRvbS5qcyc7XG5cbi8vIHJlYWN0IHN0eWxlXG5pbXBvcnQgYXBwIGZyb20gJy4vdmlld3MvYXBwL2FwcC5qcyc7XG4vLyByZWR1eCBzdHlsZVxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hcHBSZWR1Y2VyLmpzJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUoc3RhdGUpXG4gICAgICAgICAgICAuaW5pdEFwcE5vZGUoKVxuICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgICAgICAuaW5pdEdhbWVUaW1lcigpXG4gICAgICAgICAgICAuYXNzaWduRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEFwcE5vZGUgKCkge1xuICAgICAgICB0aGlzLmFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEdhbWVUaW1lciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO1xuXG4gICAgICAgIC8vdGhpcy5nYW1lVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIudGlja1RpbWVyKCkpO1xuICAgICAgICAgICAgLy90aGlzLnJlbmRlcigpO1xuICAgICAgICAvL30sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlZHVjZUFjdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXNzaWduRXZlbnRzICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uRG9jdW1lbnRGb2N1c091dC5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFpbicpKSB7XG4gICAgICAgICAgICB0aGlzLm9uUm9sbENsaWNrKGtleSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUtZm9ybScpKSB7XG4gICAgICAgICAgICB0aGlzLm9uR2FtZUZvcm1DbGljayhrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kYWxDbGljayhrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvbkRvY3VtZW50Rm9jdXNPdXQgKGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChrZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2FtZS1mb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMub25HYW1lRm9ybUZvY3VzT3V0KGtleSwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgb25HYW1lRm9ybUZvY3VzT3V0IChrZXksIGRhdGEpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnVwZGF0ZVBsYXllck5hbWUoZGF0YSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJvbGxDbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdyb2xsJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnRocm93QmFsbCgpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBsYXkudGhlRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIubmV3R2FtZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uR2FtZUZvcm1DbGljayAoa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbihyZWR1Y2VyLnBsYXlHYW1lKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xpY2sgKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHJlZHVjZXIuY2xvc2VNb2RhbCgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IEhUTUwgPSBhcHAodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICBsZXQgdk5vZGUgPSB2ZG9tLmZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52Tm9kZSAmJiB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlID0gdmRvbS5jcmVhdGVFbGVtZW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlsbE5vZGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZpbGxOb2RlcygpIHtcbiAgICAgICAgdGhpcy50aW1lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZCAubGVmdC1jb2wgLmNlbGwnKVswXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm5ldyBBcHAocmVkdWNlcigpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgZ2FtZU1vZGFsUmVkdWNlckNyZWF0ZXIgZnJvbSAnLi9nYW1lTW9kYWxSZWR1Y2VyJztcbmltcG9ydCBnYW1lUGxheVJlZHVjZXJDcmVhdGVyIGZyb20gJy4vZ2FtZVBsYXlSZWR1Y2VyJztcblxubGV0IHR5cGVzID0ge1xuICAgIFRJQ0tfVElNRVI6ICdUSUNLX1RJTUVSJyxcbiAgICBUSFJPV19CQUxMOiAnVEhST1dfQkFMTCcsXG4gICAgQ0xPU0VfTU9EQUw6ICdDTE9TRV9NT0RBTCcsXG4gICAgUExBWV9HQU1FOiAnUExBWV9HQU1FJyxcbiAgICBORVdfR0FNRTogJ05FV19HQU1FJyxcbiAgICBVUERBVEVfUExBWUVSX05BTUU6ICdVUERBVEVfUExBWUVSX05BTUUnXG59O1xuXG5sZXQgZ2FtZU1vZGFsUmVkdWNlciA9IGdhbWVNb2RhbFJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcbmxldCBnYW1lUGxheVJlZHVjZXIgPSBnYW1lUGxheVJlZHVjZXJDcmVhdGVyKHR5cGVzKTtcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpLCBhY3Rpb24gPSB7fSkge1xuICAgIHN0YXRlLnBsYXkgPSBnYW1lUGxheVJlZHVjZXIoc3RhdGUucGxheSwgYWN0aW9uKTtcbiAgICBzdGF0ZS5tb2RhbCA9IGdhbWVNb2RhbFJlZHVjZXIoc3RhdGUubW9kYWwsIGFjdGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmxldCBhY3Rpb25zID0ge307XG5cbmFjdGlvbnMudXBkYXRlUGxheWVyTmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbn07XG5cbmFjdGlvbnMudGhyb3dCYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlRIUk9XX0JBTExcbiAgICB9O1xufTtcblxuYWN0aW9ucy5wbGF5R2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5QTEFZX0dBTUVcbiAgICB9O1xufTtcblxuYWN0aW9ucy5uZXdHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLk5FV19HQU1FXG4gICAgfTtcbn07XG5cbmFjdGlvbnMuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9NT0RBTFxuICAgIH07XG59O1xuXG5hY3Rpb25zLnRpY2tUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5USUNLX1RJTUVSXG4gICAgfTtcbn07XG5cbi8vT2JqZWN0LmFzc2lnbihyZWR1Y2VyLCB0eXBlcyk7XG5PYmplY3QuYXNzaWduKHJlZHVjZXIsIGFjdGlvbnMpO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2FwcFJlZHVjZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdnYW1lLWZvcm0nLFxuICAgICAgICBzdHlsZTogJ2dyZWVuJyxcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlckNyZWF0ZSh0eXBlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKSwgYWN0aW9uID0ge30pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5DTE9TRV9NT0RBTDpcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuTkVXX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlckNyZWF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL2dhbWVNb2RhbFJlZHVjZXIuanNcbiAqKi8iLCJjb25zdCBGUkFNRVNfTEVOR1RIID0gMTA7XG5cbmZ1bmN0aW9uIHJhbmdlKGxlbmd0aCkge1xuICAgIHJldHVybiBBcnJheShsZW5ndGgpLmpvaW4oJyAnKS5zcGxpdCgnICcpLm1hcCgodiwgaSkgPT4gaSk7XG59XG5cbmZ1bmN0aW9uIHBhZCAodmFsdWUsIGxlbmd0aCkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgMjtcblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNEaWZmVGltZSAoc3RhdGUpIHtcbiAgICBsZXQgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIHN0YXRlLnN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgICAgcmlnaHRTaWRlID0gdG90YWxTZWNvbmRzICUgNjAsXG4gICAgICAgIGxlZnRTaWRlID0gKHRvdGFsU2Vjb25kcyAtIHJpZ2h0U2lkZSkgLyA2MDtcblxuICAgIHN0YXRlLmRpZmZUaW1lID0gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByb2xsIChwaW5zKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwICUgcGlucyk7XG59XG5cbmZ1bmN0aW9uIHRocm93QmFsbCAocGlucykge1xuICAgIGxldCB2YWx1ZXMgPSBbcm9sbChwaW5zKV07XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlIChwbGF5ZXJzKSB7XG4gICAgcGxheWVycyA9IHBsYXllcnMgfHwgWydQbGF5ZXIgMScsICdQbGF5ZXIgMiddO1xuXG4gICAgbGV0IGZyYW1lcyA9IHJhbmdlKEZSQU1FU19MRU5HVEgpLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIGxldCBmcmFtZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB2YWwgKyAxXG4gICAgICAgIH07XG5cbiAgICAgICAgcGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBmcmFtZXM6IGZyYW1lcyxcbiAgICAgICAgcGxheWVyczogcGxheWVycyxcbiAgICAgICAgY3VycmVudFBsYXllcjogMCxcbiAgICAgICAgY3VycmVudEZyYW1lOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnLFxuICAgICAgICB0aGVFbmQ6IGZhbHNlLFxuICAgICAgICBsYXN0UmVzdWx0OiAnJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGNhbGNSb3dzKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBzdGF0ZS5yb3dzID0gW107XG4gICAgbGV0IHJvdyA9IHtcbiAgICAgICAgaXNIZWFkOiB0cnVlLFxuICAgICAgICBjb2xzOiBzdGF0ZS5mcmFtZXMubWFwKGZyYW1lID0+ICh7IHRleHQ6IGZyYW1lLnRpdGxlIH0pKVxuICAgIH07XG5cbiAgICByb3cuY29scy51bnNoaWZ0KHt0ZXh0OnN0YXRlLmRpZmZUaW1lLCBpc0xlZnQ6IHRydWV9KTtcblxuICAgIHJvd3MucHVzaChyb3cpO1xuXG4gICAgbGV0IHBSb3dzID0gc3RhdGUucGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGNvbHMgPSBzdGF0ZS5mcmFtZXMubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvbGxzID0gZnJhbWVbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB7XG4gICAgICAgICAgICAgICAgMDogcm9sbHNbMF0gPyByb2xsc1swXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIDE6IHJvbGxzWzFdID8gcm9sbHNbMV0udGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICB0b3RhbDogcm9sbHMudG90YWxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb2xzLnVuc2hpZnQoe1xuICAgICAgICAgICAgdGV4dDogcGxheWVyLFxuICAgICAgICAgICAgaXNMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IGNvbHMgfTtcbiAgICB9KTtcblxuICAgIHJvd3MucHVzaCguLi5wUm93cyk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHN1bShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbDtcbiAgICB9LCAwKTtcbn1cblxuZnVuY3Rpb24gbmV4dFBsYXllcihzdGF0ZSkge1xuICAgIGlmIChpc0xhc3RGcmFtZShzdGF0ZSkgJiYgaXNMYXN0UGxheWVyKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS50aGVFbmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIgPSBwbGF5ZXIgPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA/IDAgOiBwbGF5ZXIgKyAxO1xuXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRGcmFtZSA9IHN0YXRlLmN1cnJlbnRGcmFtZSA8IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxID8gc3RhdGUuY3VycmVudEZyYW1lICsgMSA6IHN0YXRlLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9udXNGcmFtZXMgKHN0YXRlKSB7XG4gICAgbGV0IGZyYW1lcyA9IHN0YXRlLmZyYW1lcy5zbGljZShNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50RnJhbWUgLSAyKSwgc3RhdGUuY3VycmVudEZyYW1lICsgMSkubWFwKChmcmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZnJhbWVbc3RhdGUuY3VycmVudFBsYXllcl07XG4gICAgfSk7XG5cbiAgICBsZXQgY3VyckZyYW1lID0gZnJhbWVzW2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBmcmFtZXMubGVuZ3RoLS07XG5cbiAgICBsZXQgciA9IDIgLSBjdXJyRnJhbWUubGVuZ3RoO1xuICAgIGxldCBib251c0ZyYW1lcyA9IFtdO1xuXG4gICAgd2hpbGUgKHIgJiYgZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXMucG9wKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHIgPT09IDEgJiYgZnJhbWVbMF0udmFsdWUgPT09IDEwKSB8fFxuICAgICAgICAgICAgKHIgPT09IDIgJiYgKGZyYW1lLnRvdGFsID09PSAxMCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYm9udXNGcmFtZXMudW5zaGlmdChmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByIC09IGZyYW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9udXNGcmFtZXM7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdFBsYXllciAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID09PSBzdGF0ZS5jdXJyZW50UGxheWVyO1xufVxuXG5mdW5jdGlvbiBpc0xhc3RGcmFtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY3VycmVudEZyYW1lID09PSBGUkFNRVNfTEVOR1RIIC0gMTtcbn1cblxuZnVuY3Rpb24gb25UaWNrVGltZXIgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGNhbGNEaWZmVGltZShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVGhyb3dCYWxsIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS50aGVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGxldCBmcmFtZSA9IHN0YXRlLmZyYW1lc1tzdGF0ZS5jdXJyZW50RnJhbWVdW3N0YXRlLmN1cnJlbnRQbGF5ZXJdO1xuICAgIGxldCBwaW5zID0gRlJBTUVTX0xFTkdUSDtcblxuICAgIGlmIChmcmFtZVswXSAmJiBwaW5zICE9PSBmcmFtZVswXS52YWx1ZSkge1xuICAgICAgICBwaW5zIC09IGZyYW1lWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBib251c0ZyYW1lcyA9IGdldEJvbnVzRnJhbWVzKHN0YXRlKTtcbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heCh0aHJvd0JhbGwocGlucyksIHRocm93QmFsbChwaW5zKSk7XG5cbiAgICBib251c0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS50b3RhbCArPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSB9O1xuXG4gICAgZnJhbWUucHVzaChyb2xsKTtcblxuICAgIGxldCByb2xsc1N1bSA9IHN1bShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG4gICAgZnJhbWUudG90YWwgPSByb2xsc1N1bTtcblxuICAgIGlmIChmcmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHJvbGwudmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJ1gnO1xuXG4gICAgICAgICAgICBpZiAoIWlzTGFzdEZyYW1lKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZyYW1lLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoZnJhbWUudG90YWwgPT09IDEwKSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gJy8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0RnJhbWUoc3RhdGUpICYmIHJvbGxzU3VtID49IDEwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRQbGF5ZXIoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcm9sbC50aXRsZSA9IHJvbGwudmFsdWU7XG5cbiAgICAgICAgbmV4dFBsYXllcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGUubGFzdFJlc3VsdCA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBvblVwZGF0ZVBsYXllck5hbWUoc3RhdGUsIGRhdGEpIHtcbiAgICBzdGF0ZS5wbGF5ZXJzW2RhdGEuaW5kZXhdID0gZGF0YS52YWx1ZTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gb25QbGF5R2FtZShzdGF0ZSkge1xuICAgIHJldHVybiBnZXRJbml0aWFsU3RhdGUoc3RhdGUucGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJDcmVhdGUodHlwZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5QTEFZX0dBTUU6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblBsYXlHYW1lKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlcy5USUNLX1RJTUVSOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBvblRocm93QmFsbChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BMQVlFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHN0YXRlID0gb25VcGRhdGVQbGF5ZXJOYW1lKHN0YXRlLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxjUm93cyhzdGF0ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQ3JlYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvZ2FtZVBsYXlSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHJvdyBmcm9tICcuLi9yb3cvcm93LmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbC5qcyc7XG5pbXBvcnQgbWFpbkltYWdlU3JjIGZyb20gJ2ZpbGUhaW1hZ2VzL21haW4uanBnJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogYXBwLnBsYXkucm93cy5tYXAocm93KS5qb2luKCcnKSxcbiAgICAgICAgbW9kYWxIVE1MOiBtb2RhbChhcHApLFxuICAgICAgICBtYWluSW1hZ2VTcmMsXG4gICAgICAgIGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VsbCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNlbGw6IGNlbGwsXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vZ2FtZS1mb3JtLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9nYW1lLWZvcm0uanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBsYXkpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjbjogY24sXG4gICAgICAgIHBsYXllcnM6IHBsYXkucGxheWVyc1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc1xuICoqLyIsImltcG9ydCBnYW1lRm9ybSBmcm9tICcuLi9nYW1lLWZvcm0vZ2FtZS1mb3JtLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL21vZGFsLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RhbC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgbGV0IGNvbnRlbnRIVE1MID0gJyc7XG5cbiAgICBpZiAoYXBwLm1vZGFsLm5hbWUgPT09ICdnYW1lLWZvcm0nKSB7XG4gICAgICAgIGNvbnRlbnRIVE1MID0gZ2FtZUZvcm0oYXBwLnBsYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGNuOiBjbixcbiAgICAgICAgc3R5bGU6IGFwcC5tb2RhbC5zdHlsZSB8fCAnaW5mbycsXG4gICAgICAgIGlzT3BlbjogYXBwLm1vZGFsLmlzT3BlbixcbiAgICAgICAgY29udGVudEhUTUxcbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzXG4gKiovIiwiaW1wb3J0IGNlbGwgZnJvbSAnLi4vY2VsbC9jZWxsLmpzJztcbmltcG9ydCBjbiBmcm9tICcuL3Jvdy5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyb3cpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY2VsbHNIVE1MOiByb3cuY29scy5tYXAoY2VsbCkuam9pbignJyksXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5qc1xuICoqLyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSB7XG4gICAgaWYgKEhUTUwudHJpbSgpID09PSAnJyl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShIVE1MKTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeXRoaW5nIGV4Y2VwdCBpT1MgNyBTYWZhcmksIElFIDgvOSwgQW5kcmlvZCBCcm93c2VyIDQuMS80M1xuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgbGV0IGJvZHkgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZSA9IGJvZHkuY2hpbGROb2Rlc1swXTtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSB7XG4gICAgbGV0IHZOb2RlID0ge1xuICAgICAgICB0eXBlOiBub2RlLm5vZGVUeXBlXG4gICAgfTtcblxuICAgIGlmICh2Tm9kZS50eXBlID09PSAzKSB7XG4gICAgICAgIHZOb2RlLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVucyA9IFtdO1xuICAgICAgICB2Tm9kZS5hdHRycyA9IHt9O1xuICAgICAgICB2Tm9kZS50YWcgPSBub2RlLnRhZ05hbWU7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVucy5wdXNoKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjbGFzc05hbWUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Tm9kZS5hdHRyc1tuYW1lXSA9IG5vZGUuYXR0cmlidXRlc1tpXS52YWx1ZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdk5vZGU7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRycyhhdHRycykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBsZXQgYXR0ciA9IGF0dHJzW2tleV0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBrZXkgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fT1cIiR7YXR0cn1cImApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwgPSAnJykge1xuICAgIGxldCBhdHRycyA9IGpvaW5BdHRycyh2Tm9kZS5hdHRycyk7XG5cbiAgICBzd2l0Y2godk5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIDM6IHJldHVybiBgJHtpbm5lckhUTUx9YDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGA8JHt2Tm9kZS50YWd9ICR7YXR0cnN9PiR7aW5uZXJIVE1MfTwvJHt2Tm9kZS50YWd9PmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJIVE1MKHZOb2RlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgIT09IDMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIVE1MICs9IHJlbmRlckhUTUwodk5vZGUuY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCA9IHZOb2RlLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCk7XG59XG5cbmV4cG9ydCBsZXQgZGlmZiA9IGZ1bmN0aW9uICh2Tm9kZTEsIHZOb2RlMikge1xuICAgIGlmICh2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIGlmICh2Tm9kZTIudGFnICE9PSB2Tm9kZTEudGFnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmICh2Tm9kZTIuY29udGVudCAhPT0gdk5vZGUxLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjEgPSB2Tm9kZTEuYXR0cnNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cjFWYWwgIT09IGF0dHIyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIyKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0FUVFInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXR0cjFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGF0Y2ggPSB7fTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZOb2RlMi5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZERpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRGlmZiAmJiBPYmplY3Qua2V5cyhjaGlsZERpZmYpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNoaWxkRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGggPiAxIHx8IGEubGVuZ3RoID8gcGF0Y2ggOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm47XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcCkge1xuICAgIHN3aXRjaChwLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHAudk5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlICYmIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQocC52Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2gsIGlkKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1tpZF07XG4gICAgfVxuXG4gICAgaWYgKCFwYXRjaCkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2gudHlwZSkge1xuICAgICAgICBub2RlID0gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIHBhdGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2gpIHtcbiAgICAgICAgICAgIGxldCBwID0gcGF0Y2hba2V5XTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJzJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBwLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyID0gcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhdHRyLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NFVF9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyLnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JFTU9WRV9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkTm9kZXNba2V5XSA9IGFwcGx5UGF0Y2gobm9kZSwgcCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGxldCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVGcm9tSFRNTChyZW5kZXJIVE1MKHZOb2RlKSk7XG59O1xuXG5leHBvcnQgbGV0IGZyb21IVE1MID0gZnVuY3Rpb24gKEhUTUwpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGVGcm9tTm9kZShjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcmVlbiB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1pbWFnZSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNjcmVlbiAuaGVhZCAuY2VsbC13cDpmaXJzdC1jaGlsZCAuY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XFxufVxcblxcbi5zY3JlZW4gLmhlYWQgLmNlbGwtd3A6bGFzdC1jaGlsZCAuY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDA7XFxufVxcblxcbi5zY3JlZW4gLnBsYXllcjpsYXN0LWNoaWxkIC5jZWxsLXdwOmZpcnN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcXG59XFxuXFxuLnNjcmVlbiAucGxheWVyOmxhc3QtY2hpbGQgLmNlbGwtd3A6bGFzdC1jaGlsZCAuY2VsbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDA7XFxufVxcblxcbi5yb2xsLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogNTAwJTtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAjNjUyODAxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZDM1NDAwO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGNhcmV0O1xcbn1cXG5cXG4ucm9sbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxMSwgODQsIDAsIDAuNzMpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwtd3Age1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmNlbGwtd3AubGVmdC1jb2wge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsLXdwOmxhc3QtY2hpbGQgLmNlbGwge1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG59XFxuXFxuLnBsYXllcjpsYXN0LWNoaWxkIC5jZWxsIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4uY2VsbC1oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0LWNvbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkIC5sZWZ0LWNvbCAuY2VsbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllciAubGVmdC1jb2wgLmNlbGwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogcmdiYSgxMzEsIDE3OCwgMTg2LCAwLjk1KTtcXG59XFxuXFxuLnBsYXllciA6bm90KC5sZWZ0LWNvbCkgLmNlbGwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5jZWxsLXRvcCB7XFxuICAgIGNvbG9yOiByZ2JhKDEzMSwgMTc4LCAxODYsIDAuOTUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1mb3JtIHtcXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOTBweCA1cHg7XFxufVxcblxcbi5nYW1lLWZvcm1fX25hbWUge1xcbiAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgZm9udC1zaXplOiA0MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWZvcm1fX2lucHV0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ0LCA2MiwgODAsIDAuMTIpO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxuICAgIGNvbG9yOiByZ2IoNDQsIDYyLCA4MCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggcmdiKDIyMSwgMjIxLCAyMjEpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogMTNweCAxNXB4IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuNzcpO1xcbn1cXG5cXG4uZ2FtZS1mb3JtX19yb3cge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLmdhbWUtZm9ybV9fcm93OmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL2dhbWUtZm9ybS9nYW1lLWZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tb2RhbF9faGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnQge1xcbn1cXG5cXG4ubW9kYWxfX2luZm8ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuOCk7XFxufVxcblxcbi5tb2RhbF9fZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfX29yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAxNTYsIDE4LCAwLjgpO1xcbn1cXG5cXG4ubW9kYWxfX3JlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuOCk7XFxufVxcblxcbi5tb2RhbF9hbmltYXRpb25fYm91bmNlSW4ge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvdyB7XFxuXFxufVxcblxcbi5oZWFkLnJvdyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgY29sb3I6IHJnYmEoMTMxLCAxNzgsIDE4NiwgMC45NSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjdmZjRjYzgyMzVlYWQ4ZDI4MTMzOTU2MDU5ZmI0OWUuanBnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXIhLi9zcmMvaW1hZ2VzL21haW4uanBnXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jZWxsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZS1mb3JtLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lLWZvcm0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZS1mb3JtLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9nYW1lLWZvcm0vZ2FtZS1mb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21vZGFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tb2RhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvbW9kYWwvbW9kYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcm93LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yb3cuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcm93LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2PiA8ZGl2IGNsYXNzPVwic2NyZWVuXCI+IDxpbWcgY2xhc3M9XCJtYWluLWltYWdlXCIgc3JjPVwiJywgbWFpbkltYWdlU3JjICwnXCI+IDxkaXY+ICcsIHJvd3NIVE1MICwnIDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiBjbGFzcz1cInJvbGwtYnV0dG9uXCIgZGF0YS1tYWluPVwicm9sbFwiID5HTzwvYnV0dG9uPiA8ZGl2PiAnLCBtb2RhbEhUTUwgLCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiY2VsbC13cCAnLCBjZWxsLmlzTGVmdCA/ICdsZWZ0LWNvbCcgOiAnJyAsJ1wiPiA8ZGl2IGNsYXNzPVwiY2VsbFwiPiAnKTsgaWYgKGNlbGwudGV4dCkgeyBcbnAucHVzaCgnICcsIGNlbGwudGV4dCAsJyAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC10b3AgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCBjZWxsLWhhbGZcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0IGNlbGwtaGFsZlwiPklJPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1taWQgY2xlYXJmaXhcIj4gJyk7IGlmIChjZWxsWzBdID09PSAnWCcpIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+WDwvZGl2PiAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0IGNlbGwtaGFsZlwiPicsIGNlbGxbMF0gLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgY2VsbC1oYWxmXCI+JywgY2VsbFsxXSAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNlbGwudG90YWwgLCc8L2Rpdj4gPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9jZWxsL2NlbGwuanN0XG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCJnYW1lLWZvcm1cIj4gPGRpdiBjbGFzcz1cImdhbWUtZm9ybV9fbmFtZVwiPkJPV0xJTkcuSlM8L2Rpdj4gJyk7IHBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyLCBpbmRleCkgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJnYW1lLWZvcm1fX3Jvd1wiPiA8aW5wdXQgY2xhc3M9XCJnYW1lLWZvcm1fX2lucHV0XCIgZGF0YS1nYW1lLWZvcm09XCJpbnB1dFwiIGRhdGEtaW5kZXg9XCInLCBpbmRleCAsJ1wiIHZhbHVlPVwiJywgcGxheWVyICwnXCI+IDwvZGl2PiAnKTsgfSk7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImZvcm1fX3Jvd1wiPiA8YnV0dG9uIGRhdGEtZ2FtZS1mb3JtPVwicGxheVwiIGNsYXNzPVwiZ2FtZS1mb3JtX19idXR0b25cIj5QbGF5PC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvZ2FtZS1mb3JtL2dhbWUtZm9ybS5qc3RcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIm1vZGFsIG1vZGFsX18nLCBzdHlsZSAsJyBtb2RhbF9hbmltYXRpb25fYm91bmNlSW4gJywgaXNPcGVuID8gJycgOiAnbW9kYWxfX2hpZGRlbicgLCdcIj4gPGRpdiBkYXRhLW1vZGFsPVwiY2xvc2VcIiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiPsOXPC9kaXY+IDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGVudFwiPiAnLCBjb250ZW50SFRNTCAsJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL21vZGFsL21vZGFsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgcm93LmlzSGVhZCA/ICdoZWFkJyA6ICdwbGF5ZXInICwnIHJvdyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0XG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=