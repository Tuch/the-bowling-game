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
	
	
	var _index = __webpack_require__(13);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _styles = __webpack_require__(18);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _virtualDom = __webpack_require__(8);
	
	var vdom = _interopRequireWildcard(_virtualDom);
	
	var _app = __webpack_require__(22);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _reducer = __webpack_require__(7);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	    function App(state) {
	        _classCallCheck(this, App);
	
	        this.initState(state).initAppNode().render().fillNodes().initGameTimer().assignEvents();
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
	                _this.reduceAction({
	                    type: _reducer2.default.TICK_TIMER
	                });
	                _this.render();
	            }, 1000);
	
	            return this;
	        }
	    }, {
	        key: 'reduceAction',
	        value: function reduceAction(action) {
	            this.state = (0, _reducer2.default)(this.state, action);
	
	            return this;
	        }
	    }, {
	        key: 'assignEvents',
	        value: function assignEvents() {
	            document.addEventListener('click', this.onDocumentClick.bind(this));
	
	            return this;
	        }
	    }, {
	        key: 'onDocumentClick',
	        value: function onDocumentClick(e) {
	            if (e.target.id === 'roll') {
	                this.onRollClick();
	            }
	        }
	    }, {
	        key: 'onRollClick',
	        value: function onRollClick() {
	            this.reduceAction({
	                type: _reducer2.default.THROW_BALL
	            });
	
	            this.render().fillNodes();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var HTML = (0, _app2.default)(this.state);
	            var vNode = vdom.fromHTML(HTML);
	
	            if (this.vNode && this.node) {
	                vdom.applyPatch(this.node, vdom.diff(this.vNode, vNode));
	            } else {
	                this.node = vdom.createElement(vNode);
	                this.appNode.innerHTML = '';
	                this.appNode.appendChild(this.node);
	            }
	
	            this.vNode = vNode;
	
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
	
	new App((0, _reducer2.default)());

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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	    return Math.max.apply(null, [roll(pins)]);
	}
	
	function getInitialState(players) {
	    var frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (val) {
	        var frame = {
	            title: val
	        };
	
	        players.reduce(function (acc, player, index) {
	            acc[index] = [];
	            acc[index].total = '';
	
	            return acc;
	        }, frame);
	
	        return frame;
	    });
	
	    return {
	        frames: frames,
	        players: players,
	        currentPlayer: 0,
	        currentFrame: 0,
	        startTime: new Date(),
	        diffTime: '00:00',
	        ended: false
	    };
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
	
	function nextMove(state) {
	    var player = state.currentPlayer;
	
	    state.currentPlayer = player = player === state.players.length - 1 ? 0 : player + 1;
	
	    if (player === 0) {
	        state.currentFrame = state.currentFrame < state.frames.length - 1 ? state.currentFrame + 1 : state.currentFrame;
	    }
	
	    return state;
	}
	
	function getLastRols() {}
	
	function onTickTimer(state) {
	    return calcDiffTime(state);
	}
	
	function onThrowBall(state) {
	    var frame = state.frames[state.currentFrame][state.currentPlayer],
	        prevFrame = undefined,
	        prevPrevFrame = undefined;
	    var pins = 10;
	
	    if (frame[0]) {
	        pins -= frame[0].value;
	    }
	
	    var value = throwBall(pins);
	
	    var roll = { value: value };
	
	    frame.push(roll);
	
	    var rollsSum = sum(frame.map(function (roll) {
	        return roll.value;
	    }));
	
	    if (frame.length === 1) {
	        if (roll.value === 10) {
	            roll.title = 'X';
	
	            frame.total = 10;
	            nextMove(state);
	        } else {
	            roll.title = roll.value;
	            frame.total = roll.value;
	        }
	    } else if (frame.length === 2) {
	        if (rollsSum === 10) {
	            roll.title = '/';
	            frame.total = 10;
	        } else {
	            roll.title = roll.value;
	            frame.total = rollsSum;
	        }
	
	        nextMove(state);
	    }
	
	    return state;
	}
	
	var reducer = function reducer(state) {
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (!state) {
	        state = getInitialState(['Player 1', 'Player 2']);
	    }
	
	    switch (action.type) {
	        case reducer.TICK_TIMER:
	            state = onTickTimer(state);
	            break;
	        case reducer.THROW_BALL:
	            state = onThrowBall(state);
	            break;
	    }
	
	    return calcRows(state);
	};
	
	exports.default = reducer;
	
	
	reducer.TICK_TIMER = 'TICK_TIMER';
	reducer.THROW_BALL = 'THROW_BALL';

/***/ },
/* 8 */
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
/* 9 */,
/* 10 */,
/* 11 */,
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

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    return (0, _app4.default)({
	        rowsHTML: app.rows.map(_row2.default).join(''),
	        cn: _app2.default
	    });
	};
	
	var _row = __webpack_require__(24);

	var _row2 = _interopRequireDefault(_row);

	var _app = __webpack_require__(28);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(31);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 23 */
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
	
	var _cell = __webpack_require__(29);

	var _cell2 = _interopRequireDefault(_cell);

	var _cell3 = __webpack_require__(32);

	var _cell4 = _interopRequireDefault(_cell3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 24 */
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
	
	var _cell = __webpack_require__(23);

	var _cell2 = _interopRequireDefault(_cell);

	var _row = __webpack_require__(30);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(33);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".screen {\n    width: 720px;\n    background-color: #eee;\n}\n", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell-wp {\n    width: 60px;\n    height: 60px;\n    padding: 5px;\n    float: left;\n}\n\n.cell-wp.left-col {\n    width: 120px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    background-color: #ccc;\n    text-align: center;\n}\n\n.cell-half {\n    float: left;\n    width: 50%;\n}\n\n.left-col {\n    line-height: 45px;\n    text-align: center;\n}\n\n.head .left-col .cell {\n    text-align: center;\n}\n\n.player .left-col .cell {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 0 10px;\n}\n\n.player :not(.left-col) .cell {\n    font-size: 12px;\n}\n", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row {\n\n}\n\n.head.row {\n    text-align: center;\n    line-height: 46px;\n    font-size: 31px;\n    color: #444;\n}\n", ""]);
	
	// exports


/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> <div class="screen"> ', rowsHTML ,' </div> <button id="roll" style="padding:10px; font-size:200%;">Roll!</button> </div> ');}return p.join('');
	}

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', row.isHead ? 'head' : 'player' ,' row clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E3MWM3OTFlZjhmMzExOWQzMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlydHVhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjQ5MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FwcC9hcHAuY3NzP2JkYjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5jc3M/YTM0NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3M/NDA5OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYXBwL2FwcC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Jvdy9yb3cuanN0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNm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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsK0ZBQStGLGdCQUFnQiw0QkFBNEI7QUFDeE4sRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHdGQUF3RixpQjtBQUNySyw2QkFBNEIsRUFBRSxPO0FBQzlCLHdLQUF1Syx1QjtBQUN2Syw0Q0FBMkMsRUFBRSxPO0FBQzdDLHdIQUF1SCxFO0FBQ3ZILGdHQUErRixFO0FBQy9GLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsbUdBQW1HO0FBQ2hMLEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYTcxYzc5MWVmOGYzMTE5ZDMyYlxuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICogYXMgdmRvbSBmcm9tICcuL3ZpcnR1YWwtZG9tLmpzJztcblxuLy8gcmVhY3Qgc3R5bGVcbmltcG9ydCBhcHAgZnJvbSAnLi92aWV3cy9hcHAvYXBwLmpzJztcbi8vIHJlZHV4IHN0eWxlXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXIuanMnO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChzdGF0ZSkge1xuICAgICAgICB0aGlzLmluaXRTdGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIC5pbml0QXBwTm9kZSgpXG4gICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgICAgIC5maWxsTm9kZXMoKVxuICAgICAgICAgICAgLmluaXRHYW1lVGltZXIoKVxuICAgICAgICAgICAgLmFzc2lnbkV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRTdGF0ZSAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRBcHBOb2RlICgpIHtcbiAgICAgICAgdGhpcy5hcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXRHYW1lVGltZXIgKCkge1xuICAgICAgICB0aGlzLmdhbWVUaW1lciAmJiBjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTtcblxuICAgICAgICB0aGlzLmdhbWVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHtcbiAgICAgICAgICAgICAgICB0eXBlOiByZWR1Y2VyLlRJQ0tfVElNRVJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVkdWNlQWN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ25FdmVudHMgKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uRG9jdW1lbnRDbGljayAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdyb2xsJykge1xuICAgICAgICAgICAgdGhpcy5vblJvbGxDbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Sb2xsQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnJlZHVjZUFjdGlvbih7XG4gICAgICAgICAgICB0eXBlOiByZWR1Y2VyLlRIUk9XX0JBTExcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKS5maWxsTm9kZXMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBIVE1MID0gYXBwKHRoaXMuc3RhdGUpO1xuICAgICAgICBsZXQgdk5vZGUgPSB2ZG9tLmZyb21IVE1MKEhUTUwpO1xuXG4gICAgICAgIGlmICh0aGlzLnZOb2RlICYmIHRoaXMubm9kZSkge1xuICAgICAgICAgICAgdmRvbS5hcHBseVBhdGNoKHRoaXMubm9kZSwgdmRvbS5kaWZmKHRoaXMudk5vZGUsIHZOb2RlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSB2ZG9tLmNyZWF0ZUVsZW1lbnQodk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZOb2RlID0gdk5vZGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmlsbE5vZGVzKCkge1xuICAgICAgICB0aGlzLnRpbWVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkIC5sZWZ0LWNvbCAuY2VsbCcpWzBdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubmV3IEFwcChyZWR1Y2VyKCkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHBhZCAodmFsdWUsIGxlbmd0aCkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgMjtcblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAnMCcgKyB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNEaWZmVGltZSAoc3RhdGUpIHtcbiAgICBsZXQgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcigobmV3IERhdGUoKSAtIHN0YXRlLnN0YXJ0VGltZSkgLyAxMDAwKSxcbiAgICAgICAgcmlnaHRTaWRlID0gdG90YWxTZWNvbmRzICUgNjAsXG4gICAgICAgIGxlZnRTaWRlID0gKHRvdGFsU2Vjb25kcyAtIHJpZ2h0U2lkZSkgLyA2MDtcblxuICAgIHN0YXRlLmRpZmZUaW1lID0gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByb2xsIChwaW5zKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwICUgcGlucyk7XG59XG5cbmZ1bmN0aW9uIHRocm93QmFsbCAocGlucykge1xuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBbcm9sbChwaW5zKV0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUgKHBsYXllcnMpIHtcbiAgICBsZXQgZnJhbWVzID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwXS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdmFsXG4gICAgICAgIH07XG5cbiAgICAgICAgcGxheWVycy5yZWR1Y2UoKGFjYywgcGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2luZGV4XSA9IFtdO1xuICAgICAgICAgICAgYWNjW2luZGV4XS50b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBmcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJhbWVzOiBmcmFtZXMsXG4gICAgICAgIHBsYXllcnM6IHBsYXllcnMsXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IDAsXG4gICAgICAgIGN1cnJlbnRGcmFtZTogMCxcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICBkaWZmVGltZTogJzAwOjAwJyxcbiAgICAgICAgZW5kZWQ6IGZhbHNlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY1Jvd3Moc3RhdGUpIHtcbiAgICBsZXQgcm93cyA9IHN0YXRlLnJvd3MgPSBbXTtcbiAgICBsZXQgcm93ID0ge1xuICAgICAgICBpc0hlYWQ6IHRydWUsXG4gICAgICAgIGNvbHM6IHN0YXRlLmZyYW1lcy5tYXAoZnJhbWUgPT4gKHsgdGV4dDogZnJhbWUudGl0bGUgfSkpXG4gICAgfTtcblxuICAgIHJvdy5jb2xzLnVuc2hpZnQoe3RleHQ6c3RhdGUuZGlmZlRpbWUsIGlzTGVmdDogdHJ1ZX0pO1xuXG4gICAgcm93cy5wdXNoKHJvdyk7XG5cbiAgICBsZXQgcFJvd3MgPSBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29scyA9IHN0YXRlLmZyYW1lcy5tYXAoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9sbHMgPSBmcmFtZVtpbmRleF07XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHtcbiAgICAgICAgICAgICAgICAwOiByb2xsc1swXSA/IHJvbGxzWzBdLnRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgMTogcm9sbHNbMV0gPyByb2xsc1sxXS50aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgIHRvdGFsOiByb2xscy50b3RhbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHMudW5zaGlmdCh7XG4gICAgICAgICAgICB0ZXh0OiBwbGF5ZXIsXG4gICAgICAgICAgICBpc0xlZnQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgY29scyB9O1xuICAgIH0pO1xuXG4gICAgcm93cy5wdXNoKC4uLnBSb3dzKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gc3VtKGFycikge1xuICAgIHJldHVybiBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsO1xuICAgIH0sIDApO1xufVxuXG5mdW5jdGlvbiBuZXh0TW92ZShzdGF0ZSkge1xuICAgIGxldCBwbGF5ZXIgPSBzdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgc3RhdGUuY3VycmVudFBsYXllciA9IHBsYXllciA9IHBsYXllciA9PT0gc3RhdGUucGxheWVycy5sZW5ndGggLSAxID8gMCA6IHBsYXllciArIDE7XG5cbiAgICBpZiAocGxheWVyID09PSAwKSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRGcmFtZSA9IHN0YXRlLmN1cnJlbnRGcmFtZSA8IHN0YXRlLmZyYW1lcy5sZW5ndGggLSAxID8gc3RhdGUuY3VycmVudEZyYW1lICsgMSA6IHN0YXRlLmN1cnJlbnRGcmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RSb2xzKCkge1xuXG59XG5cbmZ1bmN0aW9uIG9uVGlja1RpbWVyIChzdGF0ZSkge1xuICAgIHJldHVybiBjYWxjRGlmZlRpbWUoc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBvblRocm93QmFsbChzdGF0ZSkge1xuICAgIGxldCBmcmFtZSA9IHN0YXRlLmZyYW1lc1tzdGF0ZS5jdXJyZW50RnJhbWVdW3N0YXRlLmN1cnJlbnRQbGF5ZXJdLCBwcmV2RnJhbWUsIHByZXZQcmV2RnJhbWU7XG4gICAgbGV0IHBpbnMgPSAxMDtcblxuICAgIGlmIChmcmFtZVswXSkge1xuICAgICAgICBwaW5zIC09IGZyYW1lWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZSA9IHRocm93QmFsbChwaW5zKTtcblxuICAgIGxldCByb2xsID0geyB2YWx1ZSB9O1xuXG4gICAgZnJhbWUucHVzaChyb2xsKTtcblxuICAgIGxldCByb2xsc1N1bSA9IHN1bShmcmFtZS5tYXAocm9sbCA9PiByb2xsLnZhbHVlKSk7XG5cbiAgICBpZiAoZnJhbWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChyb2xsLnZhbHVlID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICdYJztcblxuICAgICAgICAgICAgZnJhbWUudG90YWwgPSAxMDtcbiAgICAgICAgICAgIG5leHRNb3ZlKHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvbGwudGl0bGUgPSByb2xsLnZhbHVlO1xuICAgICAgICAgICAgZnJhbWUudG90YWwgPSByb2xsLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmcmFtZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHJvbGxzU3VtID09PSAxMCkge1xuICAgICAgICAgICAgcm9sbC50aXRsZSA9ICcvJztcbiAgICAgICAgICAgIGZyYW1lLnRvdGFsID0gMTA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb2xsLnRpdGxlID0gcm9sbC52YWx1ZTtcbiAgICAgICAgICAgIGZyYW1lLnRvdGFsID0gcm9sbHNTdW07XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0TW92ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5sZXQgcmVkdWNlciA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgIHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKFsnUGxheWVyIDEnLCAnUGxheWVyIDInXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHJlZHVjZXIuVElDS19USU1FUjpcbiAgICAgICAgICAgIHN0YXRlID0gb25UaWNrVGltZXIoc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByZWR1Y2VyLlRIUk9XX0JBTEw6XG4gICAgICAgICAgICBzdGF0ZSA9IG9uVGhyb3dCYWxsKHN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNSb3dzKHN0YXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxucmVkdWNlci5USUNLX1RJTUVSID0gJ1RJQ0tfVElNRVInO1xucmVkdWNlci5USFJPV19CQUxMID0gJ1RIUk9XX0JBTEwnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlci5qc1xuICoqLyIsImZ1bmN0aW9uIGNyZWF0ZU5vZGVGcm9tSFRNTChIVE1MKSB7XG4gICAgaWYgKEhUTUwudHJpbSgpID09PSAnJyl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShIVE1MKTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeXRoaW5nIGV4Y2VwdCBpT1MgNyBTYWZhcmksIElFIDgvOSwgQW5kcmlvZCBCcm93c2VyIDQuMS80M1xuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgbGV0IGJvZHkgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZSA9IGJvZHkuY2hpbGROb2Rlc1swXTtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSB7XG4gICAgbGV0IHZOb2RlID0ge1xuICAgICAgICB0eXBlOiBub2RlLm5vZGVUeXBlXG4gICAgfTtcblxuICAgIGlmICh2Tm9kZS50eXBlID09PSAzKSB7XG4gICAgICAgIHZOb2RlLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVucyA9IFtdO1xuICAgICAgICB2Tm9kZS5hdHRycyA9IHt9O1xuICAgICAgICB2Tm9kZS50YWcgPSBub2RlLnRhZ05hbWU7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVucy5wdXNoKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjbGFzc05hbWUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Tm9kZS5hdHRyc1tuYW1lXSA9IG5vZGUuYXR0cmlidXRlc1tpXS52YWx1ZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdk5vZGU7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRycyhhdHRycykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBsZXQgYXR0ciA9IGF0dHJzW2tleV0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBrZXkgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fT1cIiR7YXR0cn1cImApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwgPSAnJykge1xuICAgIGxldCBhdHRycyA9IGpvaW5BdHRycyh2Tm9kZS5hdHRycyk7XG5cbiAgICBzd2l0Y2godk5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIDM6IHJldHVybiBgJHtpbm5lckhUTUx9YDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGA8JHt2Tm9kZS50YWd9ICR7YXR0cnN9PiR7aW5uZXJIVE1MfTwvJHt2Tm9kZS50YWd9PmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJIVE1MKHZOb2RlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgIT09IDMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIVE1MICs9IHJlbmRlckhUTUwodk5vZGUuY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCA9IHZOb2RlLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCk7XG59XG5cbmV4cG9ydCBsZXQgZGlmZiA9IGZ1bmN0aW9uICh2Tm9kZTEsIHZOb2RlMikge1xuICAgIGlmICh2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIGlmICh2Tm9kZTIudGFnICE9PSB2Tm9kZTEudGFnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmICh2Tm9kZTIuY29udGVudCAhPT0gdk5vZGUxLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjEgPSB2Tm9kZTEuYXR0cnNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cjFWYWwgIT09IGF0dHIyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIyKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0FUVFInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXR0cjFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGF0Y2ggPSB7fTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZOb2RlMi5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZERpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkRGlmZiAmJiBPYmplY3Qua2V5cyhjaGlsZERpZmYpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFtpXSA9IGNoaWxkRGlmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhdGNoLmF0dHJzID0gYTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGggPiAxIHx8IGEubGVuZ3RoID8gcGF0Y2ggOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm47XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcCkge1xuICAgIHN3aXRjaChwLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHAudk5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlICYmIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQocC52Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2gsIGlkKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1tpZF07XG4gICAgfVxuXG4gICAgaWYgKCFwYXRjaCkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2gudHlwZSkge1xuICAgICAgICBub2RlID0gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIHBhdGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2gpIHtcbiAgICAgICAgICAgIGxldCBwID0gcGF0Y2hba2V5XTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJzJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBwLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyID0gcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhdHRyLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NFVF9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyLnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JFTU9WRV9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkTm9kZXNba2V5XSA9IGFwcGx5UGF0Y2gobm9kZSwgcCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGxldCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVGcm9tSFRNTChyZW5kZXJIVE1MKHZOb2RlKSk7XG59O1xuXG5leHBvcnQgbGV0IGZyb21IVE1MID0gZnVuY3Rpb24gKEhUTUwpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGVGcm9tTm9kZShjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMuY3NzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHJvdyBmcm9tICcuLi9yb3cvcm93LmpzJztcbmltcG9ydCBjbiBmcm9tICcuL2FwcC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLmpzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICByb3dzSFRNTDogYXBwLnJvd3MubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlld3MvYXBwL2FwcC5qc1xuICoqLyIsImltcG9ydCBjbiBmcm9tICcuL2NlbGwuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NlbGwuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlbGwpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUoe1xuICAgICAgICBjZWxsOiBjZWxsLFxuICAgICAgICBjbjogY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc1xuICoqLyIsImltcG9ydCBjZWxsIGZyb20gJy4uL2NlbGwvY2VsbC5qcyc7XG5pbXBvcnQgY24gZnJvbSAnLi9yb3cuY3NzJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvdy5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgcm93OiByb3csXG4gICAgICAgIGNlbGxzSFRNTDogcm93LmNvbHMubWFwKGNlbGwpLmpvaW4oJycpLFxuICAgICAgICBjbjogY25cbiAgICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXdzL3Jvdy9yb3cuanNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4ge1xcbiAgICB3aWR0aDogNzIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvdmlld3MvYXBwL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VsbC13cCB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5jZWxsLXdwLmxlZnQtY29sIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNlbGwtaGFsZiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ubGVmdC1jb2wge1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZCAubGVmdC1jb2wgLmNlbGwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXIgLmxlZnQtY29sIC5jZWxsIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnBsYXllciA6bm90KC5sZWZ0LWNvbCkgLmNlbGwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb3cge1xcblxcbn1cXG5cXG4uaGVhZC5yb3cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xcbiAgICBmb250LXNpemU6IDMxcHg7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3ZpZXdzL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9hcHAvYXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NlbGwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NlbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2VsbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3MvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlld3Mvcm93L3Jvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdj4gPGRpdiBjbGFzcz1cInNjcmVlblwiPiAnLCByb3dzSFRNTCAsJyA8L2Rpdj4gPGJ1dHRvbiBpZD1cInJvbGxcIiBzdHlsZT1cInBhZGRpbmc6MTBweDsgZm9udC1zaXplOjIwMCU7XCI+Um9sbCE8L2J1dHRvbj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2FwcC9hcHAuanN0XG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYW5vbnltb3VzKG9ialxuLyoqLykge1xub2JqPW9ianx8IHt9O3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9O3dpdGgob2JqKXtwLnB1c2goJzxkaXYgY2xhc3M9XCJjZWxsLXdwICcsIGNlbGwuaXNMZWZ0ID8gJ2xlZnQtY29sJyA6ICcnICwnXCI+IDxkaXYgY2xhc3M9XCJjZWxsXCI+ICcpOyBpZiAoY2VsbC50ZXh0KSB7IFxucC5wdXNoKCcgJywgY2VsbC50ZXh0ICwnICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJjZWxsLXRvcCBjbGVhcmZpeFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1sZWZ0IGNlbGwtaGFsZlwiPkk8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgY2VsbC1oYWxmXCI+SUk8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLW1pZCBjbGVhcmZpeFwiPiAnKTsgaWYgKGNlbGxbMF0gPT09ICdYJykgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJjZWxsLWZ1bGxcIj5YPC9kaXY+ICcpOyB9IGVsc2UgeyBcbnAucHVzaCgnIDxkaXYgY2xhc3M9XCJjZWxsLWxlZnQgY2VsbC1oYWxmXCI+JywgY2VsbFswXSAsJzwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1yaWdodCBjZWxsLWhhbGZcIj4nLCBjZWxsWzFdICwnPC9kaXY+ICcpOyB9IFxucC5wdXNoKCcgPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLWJvdFwiPiA8ZGl2IGNsYXNzPVwiY2VsbC1mdWxsXCI+JywgY2VsbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXdzL2NlbGwvY2VsbC5qc3RcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhbm9ueW1vdXMob2JqXG4vKiovKSB7XG5vYmo9b2JqfHwge307dmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307d2l0aChvYmope3AucHVzaCgnPGRpdiBjbGFzcz1cIicsIHJvdy5pc0hlYWQgPyAnaGVhZCcgOiAncGxheWVyJyAsJyByb3cgY2xlYXJmaXhcIj4gJywgY2VsbHNIVE1MICwnIDwvZGl2PiAnKTt9cmV0dXJuIHAuam9pbignJyk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3cy9yb3cvcm93LmpzdFxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9