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
	
	// like react
	
	
	// redux style
	
	
	var _index = __webpack_require__(13);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _styles = __webpack_require__(18);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _virtualDom = __webpack_require__(8);
	
	var vdom = _interopRequireWildcard(_virtualDom);
	
	var _calc = __webpack_require__(3);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _virtualDomMocks = __webpack_require__(14);
	
	var _virtualDomMocks2 = _interopRequireDefault(_virtualDomMocks);
	
	var _app = __webpack_require__(4);
	
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
	                _this.timerNode.innerHTML = _this.state.diffTime;
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
	
	            console.log('roll', this.state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = (0, _calc2.default)(this.state);
	            var HTML = (0, _app2.default)(state);
	            var vNode = vdom.fromHTML(HTML);
	
	            if (this.vNode && this.node) {
	                vdom.applyPatch(this.node, vdom.diff(this.vNode, vNode));
	            } else {
	                this.node = vdom.createElement(this.vNode = vNode);
	                this.appNode.innerHTML = '';
	                this.appNode.appendChild(this.node);
	            }
	
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
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (state) {
	    var rows = [];
	    var colsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	    var row = {
	        isHead: true,
	        cols: colsList.map(function (val, index) {
	            return { text: index + 1 };
	        })
	    };
	
	    row.cols.unshift({
	        isLeft: true,
	        text: state.timer || '00:00'
	    });
	
	    rows.push(row);
	
	    rows.push.apply(rows, state.players.map(function (player) {
	        var cols = [{
	            isLeft: true,
	            text: player.name
	        }];
	
	        cols = cols.concat(colsList.map(function (val, index) {
	            return {
	                strike: false,
	                first: 7,
	                second: 2,
	                total: 9
	            };
	        }));
	
	        return {
	            isHead: false,
	            cols: cols
	        };
	    }));
	
	    return {
	        rows: rows
	    };
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (app) {
	    return (0, _app4.default)({
	        headHTML: (0, _row2.default)(app.rows[0]),
	        playersHTML: app.rows.slice(1).map(_row2.default).join(''),
	        cn: _app2.default
	    });
	};
	
	var _row = __webpack_require__(6);

	var _row2 = _interopRequireDefault(_row);

	var _app = __webpack_require__(15);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(19);

	var _app4 = _interopRequireDefault(_app3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (col) {
	    return (0, _cell4.default)({
	        col: col,
	        cn: _cell2.default
	    });
	};
	
	var _cell = __webpack_require__(16);

	var _cell2 = _interopRequireDefault(_cell);

	var _cell3 = __webpack_require__(20);

	var _cell4 = _interopRequireDefault(_cell3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
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
	
	var _cell = __webpack_require__(5);

	var _cell2 = _interopRequireDefault(_cell);

	var _row = __webpack_require__(17);

	var _row2 = _interopRequireDefault(_row);

	var _row3 = __webpack_require__(21);

	var _row4 = _interopRequireDefault(_row3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	
	    return pad(leftSide, 2) + ':' + pad(rightSide, 2);
	}
	
	function roll() {
	    return Math.round(Math.random() * 10 % 10);
	}
	
	function throwBall() {
	    //luck mode ;)
	    return Math.max.apply(null, [roll(), roll(), roll()]);
	}
	
	function getInitialState() {
	    return {
	        players: [{
	            name: 'Player 1',
	            scores: []
	        }, {
	            name: 'Player 2',
	            scores: []
	        }],
	        currentPlayer: 0,
	        startTime: new Date(),
	        diffTime: '00:00'
	    };
	}
	
	var reducer = function reducer(state) {
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (!state) {
	        state = getInitialState();
	    }
	
	    switch (action.type) {
	        case reducer.TICK_TIMER:
	            state.diffTime = calcDiffTime(state);
	            break;
	        case reducer.THROW_BALL:
	            state.players[state.currentPlayer].scores.push(throwBall());
	            state.currentPlayer = state.currentPlayer === state.players.length - 1 ? 0 : state.currentPlayer + 1;
	            state.diffTime = calcDiffTime(state);
	            break;
	    }
	
	    return state;
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
	                return {};
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
	
	                if (Object.keys(childDiff).length) {
	                    patch[i] = childDiff;
	                }
	            }
	
	            patch.attrs = a;
	
	            return patch;
	        }
	    } else if (vNode2) {
	        return {
	            type: 'ADD_NODE',
	            vNode: vNode2
	        };
	    }
	
	    return [];
	};
	
	function applyPatchOp(parentNode, node, p) {
	    switch (p.type) {
	        case 'ADD_NODE':
	            parentNode.appendChild(createElement(p.vNode));
	            break;
	        case 'REMOVE_NODE':
	            parentNode && parentNode.removeChild(node);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".screen {\n    width: 720px;\n    background-color: #eee;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell-wp {\n    width: 60px;\n    height: 60px;\n    padding: 5px;\n    float: left;\n}\n\n.cell-wp.left-col {\n    width: 120px;\n}\n\n.cell {\n    width: 100%;\n    height: 100%;\n    background-color: #ccc;\n    text-align: center;\n}\n\n.cell-half {\n    float: left;\n    width: 50%;\n}\n\n.left-col {\n    line-height: 45px;\n    text-align: center;\n}\n\n.head .left-col .cell {\n    text-align: center;\n}\n\n.player .left-col .cell {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding: 0 10px;\n}\n\n.player :not(.left-col) .cell {\n    font-size: 12px;\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, ".row {\n\n}\n\n.head.row {\n    text-align: center;\n    line-height: 46px;\n    font-size: 31px;\n    color: #444;\n}\n", ""]);
	
	// exports


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

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"test1": {
			"vNode1": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test"
					]
				},
				"childrens": [
					{
						"type": 1,
						"tag": "div",
						"attrs": {
							"className": [
								"1",
								"2"
							],
							"id": [
								"id1"
							]
						},
						"childrens": []
					}
				]
			},
			"vNode2": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test test2"
					]
				},
				"childrens": [
					{
						"type": 1,
						"tag": "div",
						"attrs": {
							"className": [
								"1",
								"2"
							],
							"id": [
								"id2"
							]
						},
						"childrens": [
							{
								"type": 1,
								"tag": "div",
								"attrs": {
									"className": [
										"new-div"
									],
									"id": [
										"id3"
									]
								},
								"childrens": []
							}
						]
					}
				]
			}
		},
		"test2": {
			"vNode1": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test test2"
					]
				},
				"childrens": [
					{
						"type": 1,
						"tag": "div",
						"attrs": {
							"className": [
								"1",
								"2"
							],
							"id": [
								"id2"
							]
						},
						"childrens": [
							{
								"type": 1,
								"tag": "div",
								"attrs": {
									"className": [
										"new-div"
									],
									"id": [
										"id3"
									]
								},
								"childrens": []
							}
						]
					}
				]
			},
			"vNode2": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test"
					]
				},
				"childrens": [
					{
						"type": 1,
						"tag": "div",
						"attrs": {
							"className": [
								"1",
								"2"
							],
							"id": [
								"id1"
							]
						},
						"childrens": []
					}
				]
			}
		},
		"test3": {
			"vNode1": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test test2"
					]
				},
				"childrens": []
			},
			"vNode2": {
				"type": 1,
				"tag": "span",
				"attrs": {
					"className": [
						"test"
					]
				},
				"childrens": []
			}
		},
		"test4": {
			"vNode1": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test test2"
					]
				},
				"childrens": []
			},
			"vNode2": {
				"type": 1,
				"tag": "div",
				"attrs": {
					"className": [
						"test"
					]
				},
				"childrens": [
					{
						"type": 3,
						"content": "test text"
					}
				]
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
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
/* 19 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div> <div class="screen"> ', headHTML ,' ', playersHTML ,' </div> <button id="roll" style="padding:10px; font-size:200%;">Roll!</button> </div> ');}return p.join('');
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="cell-wp ', col.isLeft ? 'left-col' : '' ,'"> <div class="cell"> '); if (col.text) { 
	p.push(' ', col.text ,' '); } else { 
	p.push(' <div class="cell-top clearfix"> <div class="cell-left cell-half">I</div> <div class="cell-right cell-half">II</div> </div> <div class="cell-mid clearfix"> '); if (col.strike) { 
	p.push(' <div class="cell-full">', col.strike ,'</div> '); } else { 
	p.push(' <div class="cell-left cell-half">', col.first ,'</div> <div class="cell-right cell-half">', col.second ,'</div> '); } 
	p.push(' </div> <div class="cell-bot"> <div class="cell-full">', col.total ,'</div> </div> '); } 
	p.push(' </div> </div> ');}return p.join('');
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function anonymous(obj
	/**/) {
	obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="', row.isHead ? 'head' : 'player' ,' row clearfix"> ', cellsHTML ,' </div> ');}return p.join('');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTczNWIyYWFmNGZkMjc2OWU3ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NlbGwvY2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb3cvcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy92aXJ0dWFsLWRvbS5tb2Nrcy5qc29uIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuY3NzPzM2OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2VsbC9jZWxsLmNzcz9mOTA1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jvdy9yb3cuY3NzP2VhYTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjQ5MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzdCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuanN0Iiwi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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN0TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsaUhBQWlILGdCQUFnQiw0QkFBNEI7QUFDMU8sRTs7Ozs7O0FDSEE7QUFDQTtBQUNBLGNBQWEsMEJBQTBCLDRCQUE0QixVQUFVLHVGQUF1RixnQjtBQUNwSyw0QkFBMkIsRUFBRSxPO0FBQzdCLHdLQUF1SyxrQjtBQUN2SywyREFBMEQsRUFBRSxPO0FBQzVELDZIQUE0SCxFO0FBQzVILCtGQUE4RixFO0FBQzlGLDRCQUEyQjtBQUMzQixFOzs7Ozs7QUNUQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEIsNEJBQTRCLFVBQVUsbUdBQW1HO0FBQ2hMLEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxNzM1YjJhYWY0ZmQyNzY5ZTdlYlxuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4Lmh0bWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICogYXMgdmRvbSBmcm9tICcuL3ZpcnR1YWwtZG9tLmpzJztcbmltcG9ydCBjYWxjIGZyb20gJy4vY2FsYy5qcyc7XG5pbXBvcnQgbW9ja3MgZnJvbSAnLi92aXJ0dWFsLWRvbS5tb2Nrcy5qc29uJztcblxuXG4vLyBsaWtlIHJlYWN0XG5pbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmpzJztcblxuLy8gcmVkdXggc3R5bGVcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlci5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlKHN0YXRlKVxuICAgICAgICAgICAgLmluaXRBcHBOb2RlKClcbiAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICAgICAgLmZpbGxOb2RlcygpXG4gICAgICAgICAgICAuaW5pdEdhbWVUaW1lcigpXG4gICAgICAgICAgICAuYXNzaWduRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdFN0YXRlIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEFwcE5vZGUgKCkge1xuICAgICAgICB0aGlzLmFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW5pdEdhbWVUaW1lciAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2VBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHR5cGU6IHJlZHVjZXIuVElDS19USU1FUlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyTm9kZS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLmRpZmZUaW1lO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZWR1Y2VBY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnN0YXRlID0gcmVkdWNlcih0aGlzLnN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbkV2ZW50cyAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25Eb2N1bWVudENsaWNrIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3JvbGwnKSB7XG4gICAgICAgICAgICB0aGlzLm9uUm9sbENsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJvbGxDbGljayAoKSB7XG4gICAgICAgIHRoaXMucmVkdWNlQWN0aW9uKHtcbiAgICAgICAgICAgIHR5cGU6IHJlZHVjZXIuVEhST1dfQkFMTFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpLmZpbGxOb2RlcygpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb2xsJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSBjYWxjKHRoaXMuc3RhdGUpO1xuICAgICAgICBsZXQgSFRNTCA9IGFwcChzdGF0ZSk7XG4gICAgICAgIGxldCB2Tm9kZSA9IHZkb20uZnJvbUhUTUwoSFRNTCk7XG5cbiAgICAgICAgaWYgKHRoaXMudk5vZGUgJiYgdGhpcy5ub2RlKSB7XG4gICAgICAgICAgICB2ZG9tLmFwcGx5UGF0Y2godGhpcy5ub2RlLCB2ZG9tLmRpZmYodGhpcy52Tm9kZSwgdk5vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IHZkb20uY3JlYXRlRWxlbWVudCh0aGlzLnZOb2RlID0gdk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hcHBOb2RlLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmaWxsTm9kZXMoKSB7XG4gICAgICAgIHRoaXMudGltZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWQgLmxlZnQtY29sIC5jZWxsJylbMF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5uZXcgQXBwKHJlZHVjZXIoKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAuanNcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgY29sc0xpc3QgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTBdO1xuXG4gICAgbGV0IHJvdyA9IHtcbiAgICAgICAgaXNIZWFkOiB0cnVlLFxuICAgICAgICBjb2xzOiBjb2xzTGlzdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7dGV4dDogaW5kZXggKyAxfTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcm93LmNvbHMudW5zaGlmdCh7XG4gICAgICAgIGlzTGVmdDogdHJ1ZSxcbiAgICAgICAgdGV4dDogc3RhdGUudGltZXIgfHwgJzAwOjAwJ1xuICAgIH0pO1xuXG4gICAgcm93cy5wdXNoKHJvdyk7XG5cbiAgICByb3dzLnB1c2guYXBwbHkocm93cywgc3RhdGUucGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuICAgICAgICB2YXIgY29scyA9IFt7XG4gICAgICAgICAgICBpc0xlZnQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiBwbGF5ZXIubmFtZVxuICAgICAgICB9XTtcblxuICAgICAgICBjb2xzID0gY29scy5jb25jYXQoY29sc0xpc3QubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0cmlrZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmlyc3Q6IDcsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAyLFxuICAgICAgICAgICAgICAgIHRvdGFsOiA5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNIZWFkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbHNcbiAgICAgICAgfTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByb3dzXG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NhbGMuanNcbiAqKi8iLCJpbXBvcnQgcm93IGZyb20gJy4uL3Jvdy9yb3cuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vYXBwLmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hcHAuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIGhlYWRIVE1MOiByb3coYXBwLnJvd3NbMF0pLFxuICAgICAgICBwbGF5ZXJzSFRNTDogYXBwLnJvd3Muc2xpY2UoMSkubWFwKHJvdykuam9pbignJyksXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzXG4gKiovIiwiaW1wb3J0IGNuIGZyb20gJy4vY2VsbC5jc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY2VsbC5qc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29sKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlKHtcbiAgICAgICAgY29sOiBjb2wsXG4gICAgICAgIGNuOiBjblxuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuanNcbiAqKi8iLCJpbXBvcnQgY2VsbCBmcm9tICcuLi9jZWxsL2NlbGwuanMnO1xuaW1wb3J0IGNuIGZyb20gJy4vcm93LmNzcyc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb3cuanN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiB0ZW1wbGF0ZSh7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBjZWxsc0hUTUw6IHJvdy5jb2xzLm1hcChjZWxsKS5qb2luKCcnKSxcbiAgICAgICAgY246IGNuXG4gICAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3Jvdy9yb3cuanNcbiAqKi8iLCJmdW5jdGlvbiBwYWQgKHZhbHVlLCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDI7XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gJzAnICsgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjYWxjRGlmZlRpbWUgKHN0YXRlKSB7XG4gICAgbGV0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkgLSBzdGF0ZS5zdGFydFRpbWUpIC8gMTAwMCksXG4gICAgICAgIHJpZ2h0U2lkZSA9IHRvdGFsU2Vjb25kcyAlIDYwLFxuICAgICAgICBsZWZ0U2lkZSA9ICh0b3RhbFNlY29uZHMgLSByaWdodFNpZGUpIC8gNjA7XG5cbiAgICByZXR1cm4gcGFkKGxlZnRTaWRlLCAyKSArICc6JyArIHBhZChyaWdodFNpZGUsIDIpO1xufVxuXG5mdW5jdGlvbiByb2xsICgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAgJSAxMCk7XG59XG5cbmZ1bmN0aW9uIHRocm93QmFsbCAoKSB7XG4gICAgLy9sdWNrIG1vZGUgOylcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgW3JvbGwoKSwgcm9sbCgpLCByb2xsKCldKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1BsYXllciAxJyxcbiAgICAgICAgICAgICAgICBzY29yZXM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQbGF5ZXIgMicsXG4gICAgICAgICAgICAgICAgc2NvcmVzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBjdXJyZW50UGxheWVyOiAwLFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGRpZmZUaW1lOiAnMDA6MDAnXG4gICAgfTtcbn1cblxubGV0IHJlZHVjZXIgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSByZWR1Y2VyLlRJQ0tfVElNRVI6XG4gICAgICAgICAgICBzdGF0ZS5kaWZmVGltZSA9IGNhbGNEaWZmVGltZShzdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJlZHVjZXIuVEhST1dfQkFMTDpcbiAgICAgICAgICAgIHN0YXRlLnBsYXllcnNbc3RhdGUuY3VycmVudFBsYXllcl0uc2NvcmVzLnB1c2godGhyb3dCYWxsKCkpO1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudFBsYXllciA9IHN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IHN0YXRlLnBsYXllcnMubGVuZ3RoIC0gMSA/IDAgOiBzdGF0ZS5jdXJyZW50UGxheWVyICsgMTtcbiAgICAgICAgICAgIHN0YXRlLmRpZmZUaW1lID0gY2FsY0RpZmZUaW1lKHN0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5yZWR1Y2VyLlRJQ0tfVElNRVIgPSAnVElDS19USU1FUic7XG5yZWR1Y2VyLlRIUk9XX0JBTEwgPSAnVEhST1dfQkFMTCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2VyLmpzXG4gKiovIiwiZnVuY3Rpb24gY3JlYXRlTm9kZUZyb21IVE1MKEhUTUwpIHtcbiAgICAvLyBFdmVyeXRoaW5nIGV4Y2VwdCBpT1MgNyBTYWZhcmksIElFIDgvOSwgQW5kcmlvZCBCcm93c2VyIDQuMS80M1xuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgbGV0IGJvZHkgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKEhUTUwsICd0ZXh0L2h0bWwnKS5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXTtcbiAgICBsZXQgbm9kZSA9IGJvZHkuY2hpbGROb2Rlc1swXTtcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVk5vZGVGcm9tTm9kZShub2RlKSB7XG4gICAgbGV0IHZOb2RlID0ge1xuICAgICAgICB0eXBlOiBub2RlLm5vZGVUeXBlXG4gICAgfTtcblxuICAgIGlmICh2Tm9kZS50eXBlID09PSAzKSB7XG4gICAgICAgIHZOb2RlLmNvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVucyA9IFtdO1xuICAgICAgICB2Tm9kZS5hdHRycyA9IHt9O1xuICAgICAgICB2Tm9kZS50YWcgPSBub2RlLnRhZ05hbWU7XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVucy5wdXNoKGNyZWF0ZVZOb2RlRnJvbU5vZGUobm9kZS5jaGlsZE5vZGVzW2ldKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbm9kZS5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdjbGFzc05hbWUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Tm9kZS5hdHRyc1tuYW1lXSA9IG5vZGUuYXR0cmlidXRlc1tpXS52YWx1ZS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdk5vZGU7XG59XG5cbmZ1bmN0aW9uIGpvaW5BdHRycyhhdHRycykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgICBsZXQgYXR0ciA9IGF0dHJzW2tleV0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBrZXkgPSAnY2xhc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goYCR7a2V5fT1cIiR7YXR0cn1cImApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIVE1MVGFnKHZOb2RlLCBpbm5lckhUTUwgPSAnJykge1xuICAgIGxldCBhdHRycyA9IGpvaW5BdHRycyh2Tm9kZS5hdHRycyk7XG5cbiAgICBzd2l0Y2godk5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIDM6IHJldHVybiBgJHtpbm5lckhUTUx9YDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGA8JHt2Tm9kZS50YWd9ICR7YXR0cnN9PiR7aW5uZXJIVE1MfTwvJHt2Tm9kZS50YWd9PmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJIVE1MKHZOb2RlKSB7XG4gICAgbGV0IGlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHZOb2RlLnR5cGUgIT09IDMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5uZXJIVE1MICs9IHJlbmRlckhUTUwodk5vZGUuY2hpbGRyZW5zW2ldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCA9IHZOb2RlLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUhUTUxUYWcodk5vZGUsIGlubmVySFRNTCk7XG59XG5cbmV4cG9ydCBsZXQgZGlmZiA9IGZ1bmN0aW9uICh2Tm9kZTEsIHZOb2RlMikge1xuICAgIGlmICh2Tm9kZTEgJiYgdk5vZGUyKSB7XG4gICAgICAgIGlmICh2Tm9kZTIudGFnICE9PSB2Tm9kZTEudGFnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdSRVBMQUNFX05PREUnLFxuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUxLnR5cGUgPT09IDMgfHwgdk5vZGUyLnR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmICh2Tm9kZTIuY29udGVudCAhPT0gdk5vZGUxLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9OT0RFJyxcbiAgICAgICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlMlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB2Tm9kZTIuYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjEgPSB2Tm9kZTEuYXR0cnNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cjIgPSB2Tm9kZTIuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICghYXR0cjEpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWw6IGF0dHIyLmpvaW4oJyAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0cjFWYWwgPSBhdHRyMS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyMlZhbCA9IGF0dHIyLmpvaW4oJyAnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cjFWYWwgIT09IGF0dHIyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfQVRUUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogYXR0cjJWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdk5vZGUxLmF0dHJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIxID0gdk5vZGUxLmF0dHJzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IGF0dHIyID0gdk5vZGUyLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWF0dHIyKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX0FUVFInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXR0cjFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGF0Y2ggPSB7fTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHZOb2RlMS5jaGlsZHJlbnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZOb2RlMi5jaGlsZHJlbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVNT1ZFX05PREUnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdk5vZGUyLmNoaWxkcmVucy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZERpZmYgPSBkaWZmKHZOb2RlMS5jaGlsZHJlbnNbaV0sIHZOb2RlMi5jaGlsZHJlbnNbaV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNoaWxkRGlmZikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoW2ldID0gY2hpbGREaWZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGF0Y2guYXR0cnMgPSBhO1xuXG4gICAgICAgICAgICByZXR1cm4gcGF0Y2g7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZOb2RlMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0FERF9OT0RFJyxcbiAgICAgICAgICAgIHZOb2RlOiB2Tm9kZTJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59O1xuXG5mdW5jdGlvbiBhcHBseVBhdGNoT3AocGFyZW50Tm9kZSwgbm9kZSwgcCkge1xuICAgIHN3aXRjaChwLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX05PREUnOlxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHAudk5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9OT0RFJzpcbiAgICAgICAgICAgIHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1JFUExBQ0VfTk9ERSc6XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGNyZWF0ZUVsZW1lbnQocC52Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5ld05vZGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgbGV0IGFwcGx5UGF0Y2ggPSBmdW5jdGlvbiAobm9kZSwgcGF0Y2gsIGlkKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1tpZF07XG4gICAgfVxuXG4gICAgaWYgKCFwYXRjaCkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBpZiAocGF0Y2gudHlwZSkge1xuICAgICAgICBub2RlID0gYXBwbHlQYXRjaE9wKHBhcmVudE5vZGUsIG5vZGUsIHBhdGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGF0Y2gpIHtcbiAgICAgICAgICAgIGxldCBwID0gcGF0Y2hba2V5XTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJzJykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBwLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRyID0gcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChhdHRyLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NFVF9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyLnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1JFTU9WRV9BVFRSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkTm9kZXNba2V5XSA9IGFwcGx5UGF0Y2gobm9kZSwgcCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xufTtcblxuZXhwb3J0IGxldCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHZOb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVGcm9tSFRNTChyZW5kZXJIVE1MKHZOb2RlKSk7XG59O1xuXG5leHBvcnQgbGV0IGZyb21IVE1MID0gZnVuY3Rpb24gKEhUTUwpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGVGcm9tTm9kZShjcmVhdGVOb2RlRnJvbUhUTUwoSFRNTCkpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2NyZWVuIHtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsLXdwIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmNlbGwtd3AubGVmdC1jb2wge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2VsbC1oYWxmIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0LWNvbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkIC5sZWZ0LWNvbCAuY2VsbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllciAubGVmdC1jb2wgLmNlbGwge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4ucGxheWVyIDpub3QoLmxlZnQtY29sKSAuY2VsbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2NlbGwvY2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucm93IHtcXG5cXG59XFxuXFxuLmhlYWQucm93IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDZweDtcXG4gICAgZm9udC1zaXplOiAzMXB4O1xcbiAgICBjb2xvcjogIzQ0NDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3Jvdy9yb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlc3QxXCI6IHtcblx0XHRcInZOb2RlMVwiOiB7XG5cdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcImF0dHJzXCI6IHtcblx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFwidGVzdFwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImNoaWxkcmVuc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxuXHRcdFx0XHRcdFwiYXR0cnNcIjoge1xuXHRcdFx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcIjFcIixcblx0XHRcdFx0XHRcdFx0XCIyXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcImlkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJpZDFcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJjaGlsZHJlbnNcIjogW11cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0XCJ2Tm9kZTJcIjoge1xuXHRcdFx0XCJ0eXBlXCI6IDEsXG5cdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxuXHRcdFx0XCJhdHRyc1wiOiB7XG5cdFx0XHRcdFwiY2xhc3NOYW1lXCI6IFtcblx0XHRcdFx0XHRcInRlc3QgdGVzdDJcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJjaGlsZHJlbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IDEsXG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJkaXZcIixcblx0XHRcdFx0XHRcImF0dHJzXCI6IHtcblx0XHRcdFx0XHRcdFwiY2xhc3NOYW1lXCI6IFtcblx0XHRcdFx0XHRcdFx0XCIxXCIsXG5cdFx0XHRcdFx0XHRcdFwiMlwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJpZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwiaWQyXCJcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwiY2hpbGRyZW5zXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IDEsXG5cdFx0XHRcdFx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcdFx0XHRcdFwiYXR0cnNcIjoge1xuXHRcdFx0XHRcdFx0XHRcdFwiY2xhc3NOYW1lXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFwibmV3LWRpdlwiXG5cdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcImlkXCI6IFtcblx0XHRcdFx0XHRcdFx0XHRcdFwiaWQzXCJcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFwiY2hpbGRyZW5zXCI6IFtdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRcInRlc3QyXCI6IHtcblx0XHRcInZOb2RlMVwiOiB7XG5cdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcImF0dHJzXCI6IHtcblx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFwidGVzdCB0ZXN0MlwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImNoaWxkcmVuc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxuXHRcdFx0XHRcdFwiYXR0cnNcIjoge1xuXHRcdFx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcIjFcIixcblx0XHRcdFx0XHRcdFx0XCIyXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcImlkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJpZDJcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJjaGlsZHJlbnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFx0XHRcdFx0XCJ0YWdcIjogXCJkaXZcIixcblx0XHRcdFx0XHRcdFx0XCJhdHRyc1wiOiB7XG5cdFx0XHRcdFx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJuZXctZGl2XCJcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFwiaWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJpZDNcIlxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XCJjaGlsZHJlbnNcIjogW11cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdFwidk5vZGUyXCI6IHtcblx0XHRcdFwidHlwZVwiOiAxLFxuXHRcdFx0XCJ0YWdcIjogXCJkaXZcIixcblx0XHRcdFwiYXR0cnNcIjoge1xuXHRcdFx0XHRcImNsYXNzTmFtZVwiOiBbXG5cdFx0XHRcdFx0XCJ0ZXN0XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiY2hpbGRyZW5zXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiAxLFxuXHRcdFx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcdFx0XCJhdHRyc1wiOiB7XG5cdFx0XHRcdFx0XHRcImNsYXNzTmFtZVwiOiBbXG5cdFx0XHRcdFx0XHRcdFwiMVwiLFxuXHRcdFx0XHRcdFx0XHRcIjJcIlxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFwiaWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcImlkMVwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcImNoaWxkcmVuc1wiOiBbXVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRcInRlc3QzXCI6IHtcblx0XHRcInZOb2RlMVwiOiB7XG5cdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcImF0dHJzXCI6IHtcblx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFwidGVzdCB0ZXN0MlwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImNoaWxkcmVuc1wiOiBbXVxuXHRcdH0sXG5cdFx0XCJ2Tm9kZTJcIjoge1xuXHRcdFx0XCJ0eXBlXCI6IDEsXG5cdFx0XHRcInRhZ1wiOiBcInNwYW5cIixcblx0XHRcdFwiYXR0cnNcIjoge1xuXHRcdFx0XHRcImNsYXNzTmFtZVwiOiBbXG5cdFx0XHRcdFx0XCJ0ZXN0XCJcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdFwiY2hpbGRyZW5zXCI6IFtdXG5cdFx0fVxuXHR9LFxuXHRcInRlc3Q0XCI6IHtcblx0XHRcInZOb2RlMVwiOiB7XG5cdFx0XHRcInR5cGVcIjogMSxcblx0XHRcdFwidGFnXCI6IFwiZGl2XCIsXG5cdFx0XHRcImF0dHJzXCI6IHtcblx0XHRcdFx0XCJjbGFzc05hbWVcIjogW1xuXHRcdFx0XHRcdFwidGVzdCB0ZXN0MlwiXG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRcImNoaWxkcmVuc1wiOiBbXVxuXHRcdH0sXG5cdFx0XCJ2Tm9kZTJcIjoge1xuXHRcdFx0XCJ0eXBlXCI6IDEsXG5cdFx0XHRcInRhZ1wiOiBcImRpdlwiLFxuXHRcdFx0XCJhdHRyc1wiOiB7XG5cdFx0XHRcdFwiY2xhc3NOYW1lXCI6IFtcblx0XHRcdFx0XHRcInRlc3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0XCJjaGlsZHJlbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IDMsXG5cdFx0XHRcdFx0XCJjb250ZW50XCI6IFwidGVzdCB0ZXh0XCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpcnR1YWwtZG9tLm1vY2tzLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jZWxsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jZWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NlbGwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvY2VsbC9jZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcm93LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jvdy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9yb3cvcm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2PiA8ZGl2IGNsYXNzPVwic2NyZWVuXCI+ICcsIGhlYWRIVE1MICwnICcsIHBsYXllcnNIVE1MICwnIDwvZGl2PiA8YnV0dG9uIGlkPVwicm9sbFwiIHN0eWxlPVwicGFkZGluZzoxMHB4OyBmb250LXNpemU6MjAwJTtcIj5Sb2xsITwvYnV0dG9uPiA8L2Rpdj4gJyk7fXJldHVybiBwLmpvaW4oJycpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzdFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiY2VsbC13cCAnLCBjb2wuaXNMZWZ0ID8gJ2xlZnQtY29sJyA6ICcnICwnXCI+IDxkaXYgY2xhc3M9XCJjZWxsXCI+ICcpOyBpZiAoY29sLnRleHQpIHsgXG5wLnB1c2goJyAnLCBjb2wudGV4dCAsJyAnKTsgfSBlbHNlIHsgXG5wLnB1c2goJyA8ZGl2IGNsYXNzPVwiY2VsbC10b3AgY2xlYXJmaXhcIj4gPGRpdiBjbGFzcz1cImNlbGwtbGVmdCBjZWxsLWhhbGZcIj5JPC9kaXY+IDxkaXYgY2xhc3M9XCJjZWxsLXJpZ2h0IGNlbGwtaGFsZlwiPklJPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1taWQgY2xlYXJmaXhcIj4gJyk7IGlmIChjb2wuc3RyaWtlKSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNvbC5zdHJpa2UgLCc8L2Rpdj4gJyk7IH0gZWxzZSB7IFxucC5wdXNoKCcgPGRpdiBjbGFzcz1cImNlbGwtbGVmdCBjZWxsLWhhbGZcIj4nLCBjb2wuZmlyc3QgLCc8L2Rpdj4gPGRpdiBjbGFzcz1cImNlbGwtcmlnaHQgY2VsbC1oYWxmXCI+JywgY29sLnNlY29uZCAsJzwvZGl2PiAnKTsgfSBcbnAucHVzaCgnIDwvZGl2PiA8ZGl2IGNsYXNzPVwiY2VsbC1ib3RcIj4gPGRpdiBjbGFzcz1cImNlbGwtZnVsbFwiPicsIGNvbC50b3RhbCAsJzwvZGl2PiA8L2Rpdj4gJyk7IH0gXG5wLnB1c2goJyA8L2Rpdj4gPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvY2VsbC9jZWxsLmpzdFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhvYmpcbi8qKi8pIHtcbm9iaj1vYmp8fCB7fTt2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTt3aXRoKG9iail7cC5wdXNoKCc8ZGl2IGNsYXNzPVwiJywgcm93LmlzSGVhZCA/ICdoZWFkJyA6ICdwbGF5ZXInICwnIHJvdyBjbGVhcmZpeFwiPiAnLCBjZWxsc0hUTUwgLCcgPC9kaXY+ICcpO31yZXR1cm4gcC5qb2luKCcnKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcm93L3Jvdy5qc3RcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==