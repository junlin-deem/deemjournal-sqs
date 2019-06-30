/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _properjsResizecontroller = __webpack_require__(1);

var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);

var _properjsScrollcontroller = __webpack_require__(3);

var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);

var _Metrics = __webpack_require__(4);

var _Metrics2 = _interopRequireDefault(_Metrics);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _router = __webpack_require__(51);

var _router2 = _interopRequireDefault(_router);

var _intro = __webpack_require__(110);

var _intro2 = _interopRequireDefault(_intro);

var _navi = __webpack_require__(108);

var _navi2 = _interopRequireDefault(_navi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Load the SASS
__webpack_require__(111);

// Load the JS

/**
 *
 * @public
 * @class Deem
 * @classdesc This is everything!
 *
 */
var Deem = function () {
    function Deem() {
        _classCallCheck(this, Deem);

        this.metrics = new _Metrics2.default();
        this.core = core;
        this.intro = _intro2.default;
        this.navi = _navi2.default;
        this.router = _router2.default;
        this.resizer = new _properjsResizecontroller2.default();
        this.scroller = new _properjsScrollcontroller2.default();
        this.scrollBounce = 300;
        this.scrollTimeout = null;

        this.init();
        this.config();
    }

    _createClass(Deem, [{
        key: "config",
        value: function config() {
            if (core.env.isConfig()) {
                window.Y.Global.on("tweak:change", function () {
                    window.location.reload();
                });

                window.Y.Global.on("tweak:reset", function () {
                    window.location.reload();
                });
            }
        }
    }, {
        key: "init",
        value: function init() {
            var _this = this;

            this.core.detect.init();
            this.intro.init();
            this.navi.init();
            this.router.init();
            this.router.load().then(function () {
                _this.bind();
                _this.intro.teardown();
            }).catch(function (error) {
                _this.core.log("warn", error);
            });
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this2 = this;

            this.resizer.on("resize", function () {
                if (!_router2.default.frozen) {
                    core.emitter.fire("app--resize");
                }
            });

            this.scroller.on("scroll", function () {
                if (!_router2.default.frozen) {
                    core.emitter.fire("app--scroll", _this2.scroller.getScrollY());

                    core.dom.html.addClass("is-scrolling");

                    clearTimeout(_this2.scrollTimeout);

                    _this2.scrollTimeout = setTimeout(function () {
                        core.dom.html.removeClass("is-scrolling");
                    }, _this2.scrollBounce);
                }
            });

            this.scroller.on("scrollup", function () {
                if (!_router2.default.frozen) {
                    core.dom.html.removeClass("is-scroll-down").addClass("is-scroll-up");
                    core.emitter.fire("app--scrollup", _this2.scroller.getScrollY());
                }
            });

            this.scroller.on("scrolldown", function () {
                if (!_router2.default.frozen) {
                    var scrollY = _this2.scroller.getScrollY();

                    if (scrollY > 0) {
                        core.dom.html.removeClass("is-scroll-up").addClass("is-scroll-down");
                        core.emitter.fire("app--scrolldown", _this2.scroller.getScrollY());
                    }
                }
            });
        }
    }]);

    return Deem;
}();

// Create {app} instance


window.deem = new Deem();

// Export {app} instance
exports.default = window.deem;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Window resize / orientationchange event controller
 *
 * @ResizeController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    var Controller = __webpack_require__( 2 );

    /**
     *
     * Window resize / orientationchange event controller
     * @constructor ResizeController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires resize
     * @fires resizedown
     * @fires resizeup
     * @fires resizewidth
     * @fires resizeheight
     * @fires orientationchange
     * @fires orientationportrait
     * @fires orientationlandscape
     *
     */
    var ResizeController = function () {
        Controller.call( this );

        this.currentView = this.getViewport();
        this.hasOrientation = ("orientation" in window);

        this.start();
    };

    ResizeController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var currentView = self.getViewport(),
                isStill = (currentView.width === self.currentView.width && currentView.height === self.currentView.height),
                isResize = (currentView.width !== self.currentView.width || currentView.height !== self.currentView.height),
                isResizeUp = (currentView.width > self.currentView.width || currentView.height > self.currentView.height),
                isResizeDown = (currentView.width < self.currentView.width || currentView.height < self.currentView.height),
                isResizeWidth = (currentView.width !== self.currentView.width),
                isResizeHeight = (currentView.height !== self.currentView.height),
                isOrientation = (currentView.orient !== self.currentView.orient),
                isOrientationPortrait = (currentView.orient !== self.currentView.orient && currentView.orient !== 90),
                isOrientationLandscape = (currentView.orient !== self.currentView.orient && currentView.orient === 90);

            // Fire blanket resize event
            if ( isResize ) {
                /**
                 *
                 * @event resize
                 *
                 */
                self.fire( "resize" );
            }

            // Fire resizeup and resizedown
            if ( isResizeDown ) {
                /**
                 *
                 * @event resizedown
                 *
                 */
                self.fire( "resizedown" );

            } else if ( isResizeUp ) {
                /**
                 *
                 * @event resizeup
                 *
                 */
                self.fire( "resizeup" );
            }

            // Fire resizewidth and resizeheight
            if ( isResizeWidth ) {
                /**
                 *
                 * @event resizewidth
                 *
                 */
                self.fire( "resizewidth" );

            } else if ( isResizeHeight ) {
                /**
                 *
                 * @event resizeheight
                 *
                 */
                self.fire( "resizeheight" );
            }

            // Fire blanket orientationchange event
            if ( isOrientation ) {
                /**
                 *
                 * @event orientationchange
                 *
                 */
                self.fire( "orientationchange" );
            }

            // Fire orientationportrait and orientationlandscape
            if ( isOrientationPortrait ) {
                /**
                 *
                 * @event orientationportrait
                 *
                 */
                self.fire( "orientationportrait" );

            } else if ( isOrientationLandscape ) {
                /**
                 *
                 * @event orientationlandscape
                 *
                 */
                self.fire( "orientationlandscape" );
            }

            self.currentView = currentView;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window viewport specs
     * @memberof ResizeController
     * @method getViewport
     * @returns object
     *
     */
    ResizeController.prototype.getViewport = function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            orient: this.hasOrientation ? Math.abs( window.orientation ) : null
        };
    };

    /**
     *
     * Tells if the viewport is in protrait mode
     * @memberof ResizeController
     * @method isPortrait
     * @returns boolean
     *
     */
    ResizeController.prototype.isPortrait = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient !== 90);
    };

    /**
     *
     * Tells if the viewport is in landscape mode
     * @memberof ResizeController
     * @method isLandscape
     * @returns boolean
     *
     */
    ResizeController.prototype.isLandscape = function () {
        var orient = this.getViewport().orient;

        return (orient !== null && orient === 90);
    };


    return ResizeController;

});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Event / Animation cycle manager
 *
 * @Controller
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {
    // Private animation functions
    var raf = window.requestAnimationFrame,
        caf = window.cancelAnimationFrame,
    
    
    /**
     *
     * Event / Animation cycle manager
     * @constructor Controller
     * @requires raf
     * @memberof! <global>
     *
     */
    Controller = function () {
        return this.init.apply( this, arguments );
    };
    
    Controller.prototype = {
        constructor: Controller,
    
        /**
         *
         * Controller constructor method
         * @memberof Controller
         * @method Controller.init
         *
         */
        init: function () {
            /**
             *
             * Controller event handlers object
             * @memberof Controller
             * @member _handlers
             * @private
             *
             */
            this._handlers = {};
    
            /**
             *
             * Controller unique ID
             * @memberof Controller
             * @member _uid
             * @private
             *
             */
            this._uid = 0;
    
            /**
             *
             * Started iteration flag
             * @memberof Controller
             * @member _started
             * @private
             *
             */
            this._started = false;
    
            /**
             *
             * Paused flag
             * @memberof Controller
             * @member _paused
             * @private
             *
             */
            this._paused = false;
    
            /**
             *
             * Timeout reference
             * @memberof Controller
             * @member _cycle
             * @private
             *
             */
            this._cycle = null;
        },
    
        /**
         *
         * Controller go method to start frames
         * @memberof Controller
         * @method go
         *
         */
        go: function ( fn ) {
            if ( this._started && this._cycle ) {
                return this;
            }
    
            this._started = true;
    
            var self = this,
                anim = function () {
                    self._cycle = raf( anim );
    
                    if ( self._started ) {
                        if ( typeof fn === "function" ) {
                            fn();
                        }
                    }
                };
    
            anim();
        },
    
        /**
         *
         * Pause the cycle
         * @memberof Controller
         * @method pause
         *
         */
        pause: function () {
            this._paused = true;
    
            return this;
        },
    
        /**
         *
         * Play the cycle
         * @memberof Controller
         * @method play
         *
         */
        play: function () {
            this._paused = false;
    
            return this;
        },
    
        /**
         *
         * Stop the cycle
         * @memberof Controller
         * @method stop
         *
         */
        stop: function () {
            caf( this._cycle );
    
            this._paused = false;
            this._started = false;
            this._cycle = null;
    
            return this;
        },
    
        /**
         *
         * Controller add event handler
         * @memberof Controller
         * @method on
         * @param {string} event the event to listen for
         * @param {function} handler the handler to call
         *
         */
        on: function ( event, handler ) {
            var events = event.split( " " );
    
            // One unique ID per handler
            handler._jsControllerID = this.getUID();
    
            for ( var i = events.length; i--; ) {
                if ( typeof handler === "function" ) {
                    if ( !this._handlers[ events[ i ] ] ) {
                        this._handlers[ events[ i ] ] = [];
                    }
    
                    // Handler can be stored with multiple events
                    this._handlers[ events[ i ] ].push( handler );
                }
            }
    
            return this;
        },
    
        /**
         *
         * Controller remove event handler
         * @memberof Controller
         * @method off
         * @param {string} event the event to remove handler for
         * @param {function} handler the handler to remove
         *
         */
        off: function ( event, handler ) {
            if ( !this._handlers[ event ] ) {
                return this;
            }
    
            // Remove a single handler
            if ( handler ) {
                this._off( event, handler );
    
            // Remove all handlers for event
            } else {
                this._offed( event );
            }
    
            return this;
        },
    
        /**
         *
         * Controller fire an event
         * @memberof Controller
         * @method fire
         * @param {string} event the event to fire
         *
         */
        fire: function ( event ) {
            if ( !this._handlers[ event ] ) {
                return this;
            }
    
            var args = [].slice.call( arguments, 1 );
    
            for ( var i = this._handlers[ event ].length; i--; ) {
                this._handlers[ event ][ i ].apply( this, args );
            }
    
            return this;
        },
    
        /**
         *
         * Get a unique ID
         * @memberof Controller
         * @method getUID
         * @returns number
         *
         */
        getUID: function () {
            this._uid = (this._uid + 1);
    
            return this._uid;
        },
    
        /**
         *
         * Controller internal off method assumes event AND handler are good
         * @memberof Controller
         * @method _off
         * @param {string} event the event to remove handler for
         * @param {function} handler the handler to remove
         * @private
         *
         */
        _off: function ( event, handler ) {
            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
                    this._handlers[ event ].splice( i, 1 );
    
                    break;
                }
            }
        },
    
        /**
         *
         * Controller completely remove all handlers and an event type
         * @memberof Controller
         * @method _offed
         * @param {string} event the event to remove handler for
         * @private
         *
         */
        _offed: function ( event ) {
            for ( var i = this._handlers[ event ].length; i--; ) {
                this._handlers[ event ][ i ] = null;
            }
    
            delete this._handlers[ event ];
        }
    };

    return Controller;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Window scroll event controller
 *
 * @ScrollController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    var Controller = __webpack_require__( 2 );

    /**
     *
     * Window scroll event controller
     * @constructor ScrollController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires scroll
     * @fires scrolldown
     * @fires scrollup
     * @fires scrollmax
     * @fires scrollmin
     *
     */
    var ScrollController = function ( element ) {
        Controller.call( this );

        this.element = (element || window);
        this.current = null;
        this.isWindow = (this.element === window);

        this.start();
    };

    ScrollController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ScrollController
     * @method start
     *
     */
    ScrollController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var current = self.getScrollY(),
                isStill = (current === self.current),
                isScroll = (current !== self.current),
                isScrollUp = (current < self.current),
                isScrollDown = (current > self.current),
                isScrollMax = (current !== self.current && self.isScrollMax()),
                isScrollMin = (current !== self.current && self.isScrollMin());

            // Fire blanket scroll event
            if ( isScroll ) {
                /**
                 *
                 * @event scroll
                 *
                 */
                self.fire( "scroll" );
            }

            // Fire scrollup and scrolldown
            if ( isScrollDown ) {
                /**
                 *
                 * @event scrolldown
                 *
                 */
                self.fire( "scrolldown" );

            } else if ( isScrollUp ) {
                /**
                 *
                 * @event scrollup
                 *
                 */
                self.fire( "scrollup" );
            }

            // Fire scrollmax and scrollmin
            if ( isScrollMax ) {
                /**
                 *
                 * @event scrollmax
                 *
                 */
                self.fire( "scrollmax" );

            } else if ( isScrollMin ) {
                /**
                 *
                 * @event scrollmin
                 *
                 */
                self.fire( "scrollmin" );
            }

            self.current = current;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ScrollController
     * @method destroy
     *
     */
    ScrollController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window vertical scroll position
     * @memberof ScrollController
     * @method getScrollY
     * @returns number
     *
     */
    ScrollController.prototype.getScrollY = function () {
        return (this.isWindow ? window.scrollY : this.element.scrollTop);
    };

    /**
     *
     * Get the max document scrollable height
     * @memberof ScrollController
     * @method getScrollMax
     * @returns number
     *
     */
    ScrollController.prototype.getScrollMax = function () {
        var max = null;

        if ( this.isWindow ) {
            max = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

        } else {
            max = Math.max(
                this.element.scrollHeight,
                this.element.offsetHeight,
                this.element.clientHeight
            );
        }

        return (max - window.innerHeight);
    };

    /**
     *
     * Determines if scroll position is at maximum for document
     * @memberof ScrollController
     * @method isScrollMax
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMax = function () {
        return (this.getScrollY() >= this.getScrollMax());
    };

    /**
     *
     * Determines if scroll position is at minimum for document
     * @memberof ScrollController
     * @method isScrollMin
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMin = function () {
        return (this.getScrollY() <= 0);
    };


    return ScrollController;

});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _Store = __webpack_require__(49);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Singleton
var _instance = null;

/**
 *
 * @public
 * @class Metrics
 * @classdesc Handles Squarespace Metrics ( Analytics ).
 *
 */

var Metrics = function () {
    function Metrics() {
        _classCallCheck(this, Metrics);

        if (!_instance) {
            core.emitter.on("app--tracker", this.pushTrack.bind(this));

            _instance = this;
        }

        return _instance;
    }

    _createClass(Metrics, [{
        key: "pushTrack",
        value: function pushTrack(dom) {
            var mainTitle = dom.data.itemTitle || dom.data.collectionTitle;
            var websiteId = dom.data.websiteId;
            var mainData = dom.data.itemId ? { itemId: dom.data.itemId } : { collectionId: dom.data.collectionId };

            // Squarespace Metrics
            this.recordHit(websiteId, mainData, mainTitle).then(function () /*res*/{
                // core.log( "RecordHit", res );

            }).catch(function (error) {
                core.log("warn", error);
            });

            // Google Analytics
            if (window.ga) {
                window.ga("send", "pageview", window.location.href);
            }

            this.setDocumentTitle(mainTitle);
        }
    }, {
        key: "setDocumentTitle",
        value: function setDocumentTitle(title) {
            document.title = title;
        }

        /**
         *
         * @public
         * @method recordHit
         * @param {string} websiteId The site ID
         * @param {object} mainData IDs for either collection or item
         * @param {string} websiteTitle Page title for tracking
         * @memberof class.Analytics
         * @description Record sqs metrics for async page requests.
         *              Returned Promise resolves with a data {object}
         * @returns {Promise}
         *
         */

    }, {
        key: "recordHit",
        value: function recordHit(websiteId, mainData, websiteTitle) {
            var datas = {
                url: window.location.pathname,
                queryString: window.location.search,
                userAgent: window.navigator.userAgent,
                referrer: "",
                localStorageSupported: _Store2.default.isStorageSupported,
                viewportInnerHeight: window.innerHeight,
                viewportInnerWidth: window.innerWidth,
                screenHeight: window.screen.height,
                screenWidth: window.screen.width,
                title: websiteTitle,
                websiteId: websiteId,
                templateId: websiteId,
                website_locale: "en-US",
                clientDate: Date.now()
            };

            if (mainData.itemId) {
                datas.itemId = mainData.itemId;
            } else {
                datas.collectionId = mainData.collectionId;
            }

            return _properjsHobo2.default.ajax({
                url: "/api/census/RecordHit?crumb=" + _Store2.default.crumb,
                method: "POST",
                data: {
                    event: 1,
                    data: JSON.stringify(datas),
                    ss_cvr: _Store2.default.ss_cvr
                },
                dataType: "json",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
        }
    }]);

    return Metrics;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Metrics;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.emitter = exports.cache = exports.log = exports.env = exports.config = exports.util = exports.dom = exports.detect = undefined;

var _detect = __webpack_require__(6);

var _detect2 = _interopRequireDefault(_detect);

var _dom = __webpack_require__(7);

var _dom2 = _interopRequireDefault(_dom);

var _util = __webpack_require__(44);

var util = _interopRequireWildcard(_util);

var _config = __webpack_require__(42);

var _config2 = _interopRequireDefault(_config);

var _env = __webpack_require__(46);

var _env2 = _interopRequireDefault(_env);

var _log = __webpack_require__(47);

var _log2 = _interopRequireDefault(_log);

var _cache = __webpack_require__(48);

var _cache2 = _interopRequireDefault(_cache);

var _emitter = __webpack_require__(50);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import mediabox from "./mediabox";


/**
 *
 * @public
 * @namespace core
 * @description Holds the different core modules.
 *
 */
exports.detect = _detect2.default;
exports.dom = _dom2.default;
exports.util = util;
exports.config = _config2.default;
exports.env = _env2.default;
exports.log = _log2.default;
exports.cache = _cache2.default;
exports.emitter = _emitter2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(7);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ["Webkit", "Moz", "ms"];

/**
 *
 * @public
 * @namespace detect
 * @memberof core
 * @description Handles basic detection of touch devices.
 *
 */
var detect = {
    /**
     *
     * @public
     * @method init
     * @memberof core.detect
     * @description Initializes the detect module.
     *
     */
    init: function init() {
        this._isTouch = "ontouchstart" in window || "DocumentTouch" in window;
        this._isMobile = /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(window.navigator.userAgent);
        this._prefix = this.getPrefix();

        // Touch support mode
        if (this._isTouch) {
            _dom2.default.html.addClass("is-touchable");

            // Mouse support mode
        } else {
            _dom2.default.html.addClass("is-hoverable");
        }
    },


    /**
     *
     * @public
     * @method getPrefix
     * @memberof core.detect
     * @description Get the vendor prefix.
     * @returns {string}
     *
     */
    getPrefix: function getPrefix() {
        var i = vendors.length;

        if (document.body.style.transform === null) {
            for (i; i--;) {
                if (document.body.style[vendors[i] + "Transform"]) {
                    return vendors[i];
                }
            }
        }

        return "";
    },


    /**
     *
     * @public
     * @method getPrefixed
     * @param {string} property The property to be prefixed
     * @memberof core.detect
     * @description Get the vendor prefixed property.
     * @returns {string}
     *
     */
    getPrefixed: function getPrefixed(property) {
        var camelProp = property[0].toUpperCase() + property.slice(1);

        return this._prefix ? this._prefix + camelProp : property;
    },


    /**
     *
     * @public
     * @method isMobile
     * @memberof core.detect
     * @description Check for high-end mobile device user agents.
     * @returns {boolean}
     *
     */
    isMobile: function isMobile() {
        return this._isMobile;
    },


    /**
     *
     * @public
     * @method isTouch
     * @memberof core.detect
     * @description Check whether this is a touch device or not.
     * [See Modernizr]{@link https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js}
     * @returns {boolean}
     *
     */
    isTouch: function isTouch() {
        return this._isTouch;
    },


    /**
     *
     * @public
     * @method isDevice
     * @memberof core.detect
     * @description Must be `isMobile` and `isTouch`.
     * @returns {boolean}
     *
     */
    isDevice: function isDevice() {
        return this._isTouch && this._isMobile;
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = detect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _config = __webpack_require__(42);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace dom
 * @memberof core
 * @description Holds high-level cached Nodes.
 *
 */
var dom = {
  /**
   *
   * @public
   * @member doc
   * @memberof core.dom
   * @description The cached document.
   *
   */
  doc: (0, _properjsHobo2.default)(document),

  /**
   *
   * @public
   * @member html
   * @memberof core.dom
   * @description The cached documentElement node.
   *
   */
  html: (0, _properjsHobo2.default)(document.documentElement),

  /**
   *
   * @public
   * @member body
   * @memberof core.dom
   * @description The cached body node.
   *
   */
  body: (0, _properjsHobo2.default)(document.body),

  /**
   *
   * @public
   * @member main
   * @memberof core.dom
   * @description The cached main node.
   *
   */
  main: (0, _properjsHobo2.default)(_config2.default.mainSelector)
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = dom;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["hobo"] = __webpack_require__(10);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 *
 * Hobo
 * A very small, modular DOM utility for modern web apps.
 * @hobo-dist npm run build -- is eq not one next prev attr last first index parent filter detach append remove trigger prepend closest children removeAttr toggleClass
 *
 * @links
 * https://developer.mozilla.org/en-US/docs/Web/API/Node
 * https://developer.mozilla.org/en-US/docs/Web/API/Element
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://github.com/jakearchibald/es6-promise
 * http://www.html5rocks.com/en/tutorials/es6/promises/
 *
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    var Hobo = __webpack_require__( 11 ),
        utils = __webpack_require__( 12 );


    // Core Hobo methods:
    Hobo.prototype.on = __webpack_require__( 13 );
    Hobo.prototype.off = __webpack_require__( 15 );
    Hobo.prototype.data = __webpack_require__( 16 );
    Hobo.prototype.find = __webpack_require__( 17 );
    Hobo.prototype.addClass = __webpack_require__( 18 );
    Hobo.prototype.removeClass = __webpack_require__( 19 );


    // Extended Hobo methods:
    Hobo.prototype.is = __webpack_require__( 20 );
    Hobo.prototype.eq = __webpack_require__( 21 );
    Hobo.prototype.not = __webpack_require__( 22 );
    Hobo.prototype.one = __webpack_require__( 23 );
    Hobo.prototype.next = __webpack_require__( 24 );
    Hobo.prototype.prev = __webpack_require__( 25 );
    Hobo.prototype.attr = __webpack_require__( 26 );
    Hobo.prototype.last = __webpack_require__( 27 );
    Hobo.prototype.first = __webpack_require__( 28 );
    Hobo.prototype.index = __webpack_require__( 29 );
    Hobo.prototype.parent = __webpack_require__( 30 );
    Hobo.prototype.filter = __webpack_require__( 31 );
    Hobo.prototype.detach = __webpack_require__( 32 );
    Hobo.prototype.append = __webpack_require__( 33 );
    Hobo.prototype.remove = __webpack_require__( 34 );
    Hobo.prototype.trigger = __webpack_require__( 35 );
    Hobo.prototype.prepend = __webpack_require__( 36 );
    Hobo.prototype.closest = __webpack_require__( 37 );
    Hobo.prototype.children = __webpack_require__( 38 );
    Hobo.prototype.removeAttr = __webpack_require__( 39 );
    Hobo.prototype.toggleClass = __webpack_require__( 40 );


    /**
     *
     * @global
     * @public
     * @method hobo
     * @description Wrapper for `Hobo` instances.
     * @param {string} selector The parameter passed to `querySelectorAll`
     * @param {element} context The Element used to call `querySelectorAll`
     * @returns {Hobo}
     *
     */
    hobo = function ( selector, context ) {
        return new Hobo( selector, context );
    };


    // Attach Hobo utilities to `wrapper` method
    hobo.ajax = __webpack_require__( 41 );

    // Attach Hobo internal utils to `wrapper` method
    hobo.utils = utils;


    return hobo;

});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 ),
    array = [];


/**
 *
 * @class Hobo
 * @constructor
 * @classdesc A very small, modular DOM utility for modern web apps.
 * @param {string} selector The goods - String, Element, Collection.
 * @param {element} context The Element used to call `querySelectorAll`
 *
 */
var Hobo = function ( selector, context ) {
    // Hobo version?
    this._hobo = utils.version;

    // Hobo context
    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);

    // Hobo selector / elements
    // Hobo supports a mixed selector argument

    // Handle Window
    // Handle Document
    // Handle DOMElement
    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
        this._selector = "";
        selector = [ selector ];

    // Handle String
    } else if ( typeof selector === "string" ) {
        // Trim trailing whitespace from the string
        selector = utils.trimString( selector );

        // Handle string html => Element creation
        if ( utils.rTag.test( selector ) ) {
            // Then remove the doctype - `<!DOCTYPE html>`
            selector = selector.replace( utils.rDocType, "" );

            // Create a dummy `hobo` element
            // Dump the HTML payload in the `hobo` element
            // Extract the elements from the `hobo` element
            var el = document.createElement( "hobo" );
                el.innerHTML = selector;

            // Format elements as a true Array
            selector = utils.makeArray( el.children );

            el = null;

        // Handle string selector
        } else {
            this._selector = selector;
            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
        }

    // Handle Collection: NodeList, HTMLCollection, Array
    } else if ( selector.length !== undefined ) {
        this._selector = "";
        selector = utils.makeArray( selector );
    }

    // Hobo events?
    this._events = {};

    // Hobo length?
    this.length = selector.length;

    // Hobo elements?
    for ( var i = this.length; i--; ) {
        this[ i ] = selector[ i ];
    }

    // Initial mapping of each nodes data.
    // Transfer {DOMStringMap} => {hoboDataMap}
    this.forEach( utils.makeData );
};


// Shim Array-like presentation in console
Hobo.prototype.splice = array.splice;


/**
 *
 * @instance
 * @method each
 * @param {function} callback The method called on each iteration
 * @memberof Hobo
 * @description Make sure Hobo is iterable like an Array
 *
 */
Hobo.prototype.each = array.forEach;


/**
 *
 * @instance
 * @method forEach
 * @param {function} callback The method called on each iteration
 * @memberof Hobo
 * @description Make sure Hobo is iterable like an Array
 *
 */
Hobo.prototype.forEach = array.forEach;


/**
 *
 * @instance
 * @method push
 * @param {?} element element1, ..., elementN
 * @memberof Hobo
 * @description Make sure Hobo is pushable like an Array
 *
 */
Hobo.prototype.push = array.push;


/**
 *
 * @instance
 * @method map
 * @param {function} callback The method called for each element
 * @memberof Hobo
 * @description Make sure Hobo is mappable like an Array
 *
 */
Hobo.prototype.map = array.map;


// Export the main Hobo Class :D
module.exports = Hobo;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 *
 * @static
 * @memberof Hobo
 * @member utils
 * @description Utility methods used internally by Hobo
 *
 */
var version = "0.3.15",


    rData = /^data-/,


    rDigit = /\D/g,


    rDashAlpha = /-([\da-z])/gi,


    rTag = /^</,


    rJson = /^\[|\{/,


    rDocType = /^<\!DOCTYPE\shtml>/i,


    rFront2Back = /^\s+|\s+$/g,


    /**
     *
     * @public
     * @memberof utils
     * @method trimString
     * @description Trim leading and trailing whitespace
     * @param {string} str The string to trim
     * @returns {string}
     *
     */
    trimString = function ( str ) {
        return str.replace( rFront2Back, "" );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method camelCase
     * @description Camel case a string
     * @param {string} str The string to camel case
     * @returns {string}
     *
     */
    camelCase = function ( str ) {
        return str.replace( rDashAlpha, function ( all, letter ) {
            return letter.toUpperCase();
        });
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeId
     * @description Make a unique hobo ID string
     * @returns {string}
     *
     */
    makeId = function () {
        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeArray
     * @description Convert elements to a native Array
     * @param {elements} nodes The nodes to make into an array
     * @returns {array}
     *
     */
    makeArray = function ( nodes ) {
        return [].slice.call( nodes );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method makeData
     * @description Establish the hoboDataMap for a node
     * @param {element} node The node to map data on
     *
     */
    makeData = function ( node ) {
        if ( !node.hoboDataMap ) {
            node.hoboDataMap = {};
        }

        if ( node.dataset ) {
            _mapDataset( node );

        } else if ( node.attributes ) {
            _mapAttributes( node );
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method storeData
     * @description Store data in the hoboDataMap
     * @param {object} data The data to store
     * @param {element} node The node to store data with
     *
     */
    storeData = function ( data, node ) {
        var id,
            i;

        for ( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                id = camelCase( i );

                node.hoboDataMap[ id ] = data[ i ];
            }
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method mergeData
     * @description Merge
     * @param {object} data The data to mutate
     * @param {element} node The node to pull data from
     *
     */
    mergeData = function ( data, node ) {
        for ( var i in node.hoboDataMap ) {
            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
                data[ i ] = node.hoboDataMap[ i ];
            }
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method retrieveData
     * @description Get data from a node
     * @param {string} key The reference point for a data entry
     * @param {element} node The node to pull a data value from
     * @returns {mixed}
     *
     */
    retrieveData = function ( key, node ) {
        var ret = null;

        // All data mapped into Hobo will be camel-cased
        key = camelCase( key );

        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
            ret = node.hoboDataMap[ key ];
        }

        return ret;
    },


    /**
     *
     * @public
     * @memberof utils
     * @method removeData
     * @description Delete data from a nodes hoboDataMap
     * @param {string} key The reference point for a data entry
     * @param {element} node The node to delete a data value from
     *
     */
    removeData = function ( key, node ) {
        // All data mapped into Hobo will be camel-cased
        key = camelCase( key );

        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
            delete node.hoboDataMap[ key ];
        }
    },


    /**
     *
     * @public
     * @memberof utils
     * @method serializeData
     * @description Convert data into AJAXable querystring
     * @param {object} data The data to convert
     * @param {string} prefix The current iterations property name
     * @returns {string}
     *
     */
    serializeData = function ( data, prefix ) {
        var str = [],
            key,
            val,
            i;

        for ( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                key = prefix ? (prefix + "[" + i + "]") : i;
                val = data[ i ];

                if ( Array.isArray( val ) ) {
                    val.forEach(function ( v ) {
                        str.push( (encodeURIComponent( key ) + "[]" + "=" + encodeURIComponent( v )) );
                    });

                } else if ( typeof val === "object" ) {
                    str.push( serializeData( val, key ) );

                } else {
                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
                }
            }
        }

        return str.join( "&" );
    },


    /**
     *
     * @public
     * @memberof utils
     * @method getClass
     * @description Get the class string from a node
     * @param {Element} node The node to get `class` for
     * @returns {string}
     *
     */
    getClass = function ( node ) {
        return (node.getAttribute( "class" ) || "");
    },


    /**
     *
     * @public
     * @memberof utils
     * @method setClass
     * @description Set the class string for a node
     * @param {Element} node The node to set `class` on
     * @param {string} klass The class string to be applied
     *
     */
    setClass = function ( node, klass ) {
        node.setAttribute( "class", klass );
    },


    // DOMStringMap camel-cases data- attributes.
    // NamedNodeMap is a fallback which supports IE 10.
    // Data mapped through Hobo must camel-case as well.


    /**
     *
     * @private
     * @memberof utils
     * @method _getDataValue
     * @description Normalized parsing of JSON string into Object
     * @param {object} data The data to parse
     * @returns {object}
     *
     */
    _getDataValue = function ( data ) {
        if ( rJson.test( data ) ) {
            try {
                data = JSON.parse( data );

            } catch ( error ) {
                throw error;
            }
        }

        return data;
    },


    /**
     *
     * @private
     * @memberof utils
     * @method _mapAttributes
     * @description Migrate existing NamedNodeMap to a nodes hoboDataMap
     * @param {element} node The data to parse
     *
     */
    _mapAttributes = function ( node ) {
        var i = node.attributes.length;

        for ( i; i--; ) {
            if ( rData.test( node.attributes[ i ].name ) ) {
                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );

                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
            }
        }
    },


    /**
     *
     * @private
     * @memberof utils
     * @method _mapDataset
     * @description Migrate existing DOMStringMap to a nodes hoboDataMap
     * @param {element} node The data to parse
     *
     */
    _mapDataset = function ( node ) {
        for ( var i in node.dataset ) {
            if ( node.dataset.hasOwnProperty( i ) ) {
                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
            }
        }
    };


module.exports = {
    version: version,
    rData: rData,
    rDigit: rDigit,
    rTag: rTag,
    rJson: rJson,
    rDocType: rDocType,
    rFront2Back: rFront2Back,
    trimString: trimString,
    camelCase: camelCase,
    makeId: makeId,
    makeArray: makeArray,
    makeData: makeData,
    storeData: storeData,
    retrieveData: retrieveData,
    mergeData: mergeData,
    removeData: removeData,
    serializeData: serializeData,
    getClass: getClass,
    setClass: setClass
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var matchElement = __webpack_require__( 14 ),
    utils = __webpack_require__( 12 );


/**
 *
 * @private
 * @method bind
 * @description Bind a standard DOM Event.
 * @param {element} node
 * @param {string} event
 * @param {string} selector
 * @param {function} callback
 * @this {Hobo}
 *
 */
var bind = function ( node, event, selector, callback ) {
    // Unique ID for each node event
    var eventId = (utils.makeId() + "EVENT"),

        // The true event name
        eventType = event,

        // Normalize event handler with a small wrapper function
        eventHandler = function ( e ) {
            // Default context is `this` element
            var context = (selector ? matchElement( e.target, selector, true ) : this);

            // Handle `mouseenter` and `mouseleave`
            if ( event === "mouseenter" || event === "mouseleave" ) {
                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);

                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
                    callback.call( context, e );
                }

            // Fire callback if context element
            } else if ( context ) {
                callback.call( context, e );
            }
        };

    // Support `mouseenter` and `mouseleave`
    if ( event === "mouseenter" ) {
        eventType = "mouseover";

    } else if ( event === "mouseleave" ) {
        eventType = "mouseout";
    }

    // Each handler/callback pair gets stored in an `events` index
    this._events[ event ][ eventId ] = {
        id: eventId,
        type: eventType,
        node: node,
        handler: eventHandler,
        callback: callback
    };

    node.addEventListener( eventType, eventHandler, false );
};


/**
 *
 * @instance
 * @memberof Hobo
 * @method on
 * @description Bind a standard DOM Event. Honor delegation as a primary.
 * @param {string} events 
 * @param {string} selector 
 * @param {function} callback
 * @returns {Hobo}
 *
 */
module.exports = function ( events, selector, callback ) {
    var self = this;

    // Normalize `selector` and `callback`
    if ( !callback ) {
        callback = selector;
        selector = this._selector;
    }

    // Iterate over event(s)
    // Space separated event list is supported
    // Example: "DOMMouseScroll mousewheel"
    events.split( " " ).forEach(function ( event ) {
        // Does this event type have an index yet
        if ( !self._events[ event ] ) {
            self._events[ event ] = {};
        }

        self.forEach(function ( node ) {
            bind.call( self, node, event, selector, callback );
        });
    });

    return this;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Use native element selector matching
 *
 * @matchElement
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {

    /**
     *
     * Use native element selector matching
     * @memberof! <global>
     * @method matchElement
     * @param {object} el the element
     * @param {string} selector the selector to match
     * @param {boolean} walk should we walk the tree if el is not a match?
     * @returns element OR null
     *
     */
    var matchElement = function ( el, selector, walk ) {
        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
                                      "oMatchesSelector" : null;

        // Try testing the element against the selector
        // 0.1 => Method is not undefined
        // 0.2 => Element passes method call
        if ( method && el[ method ].call( el, selector ) ) {
            return el;

        // Keep walking up the DOM if we can - only if `walk` flag is `true`
        } else if ( walk && el !== document.documentElement && el.parentNode ) {
            return matchElement( el.parentNode, selector, walk );

        // Otherwise we should not execute an event
        } else {
            return null;
        }
    };


    return matchElement;

});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 *
 * @private
 * @method unbind
 * @description Unbind a standard DOM Event.
 * @param {element} node
 * @param {string} event
 * @param {function} callback
 * @this {Hobo}
 *
 */
var unbind = function ( node, event, callback ) {
    var type,
        evo,
        id;

    // Remove a single handler for an event type
    if ( callback ) {
        for ( id in this._events[ event ] ) {
            if ( this._events[ event ].hasOwnProperty( id ) ) {
                evo = this._events[ event ][ id ];

                // Match the nodes, Match the callback
                if ( evo.node === node && evo.callback === callback ) {
                    node.removeEventListener( evo.type, evo.handler, false );

                    delete this._events[ event ][ id ];
                }
            }
        }

    // Remove all handlers for an event type
    } else {
        for ( id in this._events[ event ] ) {
            if ( this._events[ event ].hasOwnProperty( id ) ) {
                evo = this._events[ event ][ id ];

                // Match the nodes
                if ( evo.node === node ) {
                    node.removeEventListener( evo.type, evo.handler, false );

                    delete this._events[ event ][ id ];
                }
            }
        }
    }
};


/**
 *
 * @private
 * @method teardown
 * @description Unbind all events for instance.
 * @param {element} node
 * @this {Hobo}
 *
 */
var teardown = function ( node ) {
    var type,
        evo,
        id;

    for ( type in this._events ) {
        if ( this._events.hasOwnProperty( type ) ) {
            for ( id in this._events[ type ] ) {
                if ( this._events[ type ].hasOwnProperty( id ) ) {
                    evo = this._events[ type ][ id ];

                    // Match the nodes
                    if ( evo.node === node ) {
                        node.removeEventListener( evo.type, evo.handler, false );

                        delete this._events[ type ][ id ];
                    }
                }
            }
        }
    }
};


/**
 *
 * @instance
 * @memberof Hobo
 * @method off
 * @description Un-Bind a standard DOM Event.
 * @param {string} events The event type
 * @param {function} callback The supplied callback
 * @returns {Hobo}
 *
 */
module.exports = function ( events, callback ) {
    var self = this;

    // Iterate over event(s)
    // Space separated event list is supported
    // Example: "DOMMouseScroll mousewheel"
    // off() can be called with no args, account for this and remove ALL events
    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
        self.forEach(function ( node ) {
            // Explicit `null` check for teardown
            if ( event === null ) {
                teardown.call( self, node );

            } else {
                unbind.call( self, node, event, callback );
            }
        });
    });

    return this;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method data
 * @description Get / set data values with nodes.
 * @param {string} key The access key
 * @param {string} value The value to be stored
 * @returns {mixed}
 *
 */
module.exports = function ( key, value ) {
    // Any `non-unique` data keys resolve to the first unique occurrence
    // Exactly how jQuery handles `.data( ... )` on multi-node collections

    var ret = this,
        obj = null;

    // Storing data from an Object
    if ( typeof key === "object" ) {
        obj = key;

        this.forEach(function ( node ) {
            utils.storeData( obj, node );
        });

    // Storing data as a `key:value` pair
    } else if ( value ) {
        obj = {};
        obj[ key ] = value;

        this.forEach(function ( node ) {
            utils.storeData( obj, node );
        });

    // Accessing data by `key`
    } else if ( key ) {
        this.forEach(function ( node ) {
            if ( obj !== null ) {
                return;
            }

            obj = utils.retrieveData( key, node );

        });

        ret = obj;

    // Accessing all data
    // Merges all `unique` data for a Hobo set
    } else {
        obj = {};

        // Object is mutated here by `mergeData`
        this.forEach(function ( node ) {
            utils.mergeData( obj, node );
        });

        ret = obj;
    }

    return ret;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method find
 * @description Query into a Hobo instance for new nodes.
 * @param {string} selector The selector to query for
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var ret = this;

    // If we are `finding` within a multi-node collection...
    // Here its probably faster to grab the nodes within each Node
    // and then just let the context be the document for the new instance. 
    if ( this.length > 1 ) {
        ret = [];

        this.forEach(function ( node ) {
            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
        });

        ret = new Hobo( ret, null );

    // Single node collection
    // Empty node collection
    } else {
        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
    }

    return ret;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method addClass
 * @description Add one or more classNames to the nodes.
 * @param {string} classes The space-separated classNames
 * @returns {Hobo}
 *
 */
module.exports = function ( classes ) {
    this.forEach(function ( element ) {
        var newClass = classes.split( " " ),
            elsClass = utils.getClass( element ).split( " " );

        newClass.forEach(function ( klass ) {
            if ( elsClass.indexOf( klass ) === -1 ) {
                elsClass.push( klass );
            }
        });

        utils.setClass( element, utils.trimString( elsClass.join( " " ) ) );
    });

    return this;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method removeClass
 * @description Remove one or more classNames from the nodes.
 * @param {string} classes The space-separated classNames
 * @returns {Hobo}
 *
 */
module.exports = function ( classes ) {
    this.forEach(function ( element ) {
        // Explicit check for `undefined`
        // Using `!classes` would be bad in this case
        // Calling `removeClass( "" )` should not wipe the entire className
        if ( classes === undefined ) {
            utils.setClass( element, "" );

        } else {
            var oldClass = classes.split( " " ),
                elsClass = utils.getClass( element ).split( " " );

            oldClass.forEach(function ( klass ) {
                if ( elsClass.indexOf( klass ) !== -1 ) {
                    elsClass.splice( elsClass.indexOf( klass ), 1 );
                }
            });

            utils.setClass( element, utils.trimString( elsClass.join( " " ) ) );
        }
    });

    return this;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method is
 * @param {string} selector The selector to match elements against
 * @description Determine if a node set is this selector.
 * @returns {boolean}
 *
 */
module.exports = function ( selector ) {
    return (matchElement( this[ 0 ], selector ) ? true : false);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method eq
 * @param {number} i The indexOf the element
 * @description Get the element at the index as a Hobo instance.
 * @returns {Hobo}
 *
 */
module.exports = function ( i ) {
    return i < this.length 
            ? new Hobo(
                this[ i ],
                this._context
            ) 
            : this;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var matchElement = __webpack_require__( 14 ),
    Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method not
 * @param {string} selector The selector to filter out elements
 * @description Filter out elements that are NOT this selector
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var keepers = new Hobo( [], this._context );

    // Hobo instance
    if ( selector instanceof Hobo ) {
        this.forEach(function ( node ) {
            var pushNode = true;

            selector.forEach(function ( elem ) {
                if ( node === elem ) {
                    pushNode = false;
                }
            });

            if ( pushNode ) {
                keepers.push( node );
            }
        });

    } else {
        this.forEach(function ( node, i ) {
            if ( typeof selector === "function" ) {
                if ( selector( i, node ) ) {
                    keepers.push( node );
                }

            } else if ( !matchElement( node, selector ) ) {
                keepers.push( node );
            }
        });
    }

    return keepers;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var matchElement = __webpack_require__( 14 ),
    utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method one
 * @description Bind a standard DOM Event only ONE time.
 * @param {string} event 
 * @param {string} selector 
 * @param {function} callback
 * @returns {Hobo}
 *
 */
module.exports = function ( event, selector, callback ) {
    var self = this;

    if ( !callback ) {
        callback = selector;
        selector = this._selector;
    }

    return this.on( event, selector, function once ( e ) {
        // Apply `this` - which is the Element context
        callback.call( this, e );

        self.off( event, once );
    });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );



/**
 *
 * @instance
 * @memberof Hobo
 * @method next
 * @param {string} selector Optional selector to match
 * @description Get the next sibling, test against selector
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var ret = [];

    this.forEach(function ( node ) {
        var nextNode = node.nextSibling;

        while ( nextNode && nextNode.nodeType !== 1 ) {
            nextNode = nextNode.nextSibling;
        }

        if ( nextNode && (!selector || (selector && matchElement( nextNode, selector ))) ) {
            ret.push( nextNode );
        }
    });

    return new Hobo( ret, this._context );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );



/**
 *
 * @instance
 * @memberof Hobo
 * @method prev
 * @param {string} selector Optional selector to match
 * @description Get the previous sibling, test against selector
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var ret = [];

    this.forEach(function ( node ) {
        var prevNode = node.previousSibling;

        while ( prevNode && prevNode.nodeType !== 1 ) {
            prevNode = prevNode.previousSibling;
        }

        if ( prevNode && (!selector || (selector && matchElement( prevNode, selector ))) ) {
            ret.push( prevNode );
        }
    });

    return new Hobo( ret, this._context );
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method addAttr
 * @param {element} node The element to set attribute on
 * @param {string} key The attribute
 * @param {mixed} value The value to set
 * @description Get or Set an attribute(s) on a DOM node
 * @returns {string}
 *
 */
var addAttr = function ( node, key, value ) {
    node.setAttribute( key, value );

    // Apply data()?
    if ( utils.rData.test( key ) ) {
        // storeData expects a {data object}
        var obj = {};

        obj[ key.replace( utils.rData, "" ) ] = value;

        utils.storeData( obj, node );
    }
};


/**
 *
 * @instance
 * @memberof Hobo
 * @method attr
 * @param {string} key The attribute
 * @param {mixed} value The value to set
 * @description Get or Set an attribute(s) on a DOM node
 * @returns {string}
 *
 */
module.exports = function ( key, value ) {
    var ret = this;

    // Value can be an {object}
    if ( typeof key === "object" ) {
        for ( var i in key ) {
            this.forEach(function ( node ) {
                addAttr( node, i, key[ i ] );
            });
        }

    // Value could possibly be "" or 0
    } else if ( value !== undefined ) {
        this.forEach(function ( node ) {
            addAttr( node, key, value );
        });

    } else {
        ret = this[ 0 ].getAttribute( key );
    }

    return ret;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method last
 * @description Get hobo instance of the last element.
 * @returns {Hobo}
 *
 */
module.exports = function () {
    return new Hobo( this[ (this.length - 1) ], this._context );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method first
 * @description Get hobo instance of the first element.
 * @returns {Hobo}
 *
 */
module.exports = function () {
    return new Hobo( this[ 0 ], this._context );
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 *
 * @instance
 * @memberof Hobo
 * @method index
 * @description Get the nodes index compared to its DOM siblings.
 *              Possibly this should be its index in the Hobo set?
 * @returns {number}
 *
 */
module.exports = function () {
    return [].indexOf.call(
        this[ 0 ].parentNode.children,
        this[ 0 ]
    );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method parent
 * @param {string} selector Optional selector to match
 * @description Get a Hobo instance of the parent node of this instance.
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var parents = [];

    this.forEach(function ( node ) {
        if ( !selector || (selector && matchElement( node.parentNode, selector )) ) {
            parents.push( node.parentNode );
        }
    });

    return new Hobo( parents, null );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method filter
 * @param {string} selector The selector to match elements against
 * @description Filter out the elements that match the selector.
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var filtered = [];

    this.forEach(function ( node ) {
        if ( matchElement( node, selector ) ) {
            filtered.push( node );
        }
    });

    return new Hobo( filtered, null );
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 *
 * @instance
 * @memberof Hobo
 * @method detach
 * @description Detach the nodes from the DOM
 *              This method does NOT remove events or data.
 * @returns {Hobo}
 *
 */
module.exports = function () {
    this.forEach(function ( node ) {
        if ( node.parentNode ) {
            node.parentNode.removeChild( node );
        }
    });

    return this;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method append
 * @param {mixed} appendage What to append? Hobo, Element...
 * @description Append the nodes to the DOM
 * @returns {Hobo}
 *
 */
module.exports = function ( appendage ) {
    // Selector string, wrap in new Hobo instance
    if ( typeof appendage === "string" ) {
        appendage = new Hobo( appendage );
    }

    this.forEach(function ( node ) {
        // Hobo instance OR Array OR Array-like object with forEach
        if ( appendage instanceof Hobo || (appendage.length && typeof appendage.forEach === "function") ) {
            appendage.forEach(function ( append ) {
                if ( append.nodeType && append.nodeType === 1 ) {
                    node.appendChild( append );
                }
            });

        } else if ( appendage.nodeType ) {
            node.appendChild( appendage );
        }
    });

    return this;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 *
 * @instance
 * @memberof Hobo
 * @method remove
 * @description Remove the nodes from the DOM
 *              This method will remove events and data.
 * @returns {Hobo}
 *
 */
module.exports = function () {
    // Remove Events
    this.off();

    this.forEach(function ( node ) {
        // Remove Data
        // Could this cause issues ?
        delete node.hoboDataMap;

        if ( node.parentNode ) {
            node.parentNode.removeChild( node );
        }
    });

    return this;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 *
 * @instance
 * @memberof Hobo
 * @method trigger
 * @description Dispatch a simulated event.
 * @param {string} event The event to dispatch
 * @returns {Hobo}
 *
 */
module.exports = function ( event ) {
    var self = this,
        evo,
        id;

    this.forEach(function ( node ) {
        for ( id in self._events[ event ] ) {
            if ( self._events[ event ].hasOwnProperty( id ) ) {
                evo = self._events[ event ][ id ];

                // Match the nodes
                if ( evo.node === node ) {
                    evo = document.createEvent( "Events" );

                    evo.initEvent( event, true, false );

                    node.dispatchEvent( evo );
                }
            }
        }
    });

    return this;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method prepend
 * @param {mixed} prependage What to prepend? Hobo, Element...
 * @description Append the nodes to the DOM
 * @returns {Hobo}
 *
 */
module.exports = function ( prependage ) {
    // Selector string, wrap in new Hobo instance
    if ( typeof prependage === "string" ) {
        prependage = new Hobo( prependage );
    }

    this.forEach(function ( node ) {
        // Hobo instance OR Array OR Array-like object with forEach
        if ( prependage instanceof Hobo || (prependage.length && typeof prependage.forEach === "function") ) {
            prependage.forEach(function ( prepend ) {
                if ( prepend.nodeType && prepend.nodeType === 1 ) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
                    // Context node inserts first element BEFORE second element
                    node.insertBefore( prepend, node.firstChild );
                }
            });

        } else if ( prependage.nodeType ) {
            node.insertBefore( prependage, node.firstChild );
        }
    });

    return this;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method closest
 * @param {string} selector The selector to try and match
 * @description Find the first ancestor element with this selector
 * @returns {Hobo}
 *
 */
module.exports = function ( selector ) {
    var closest = [];

    this.forEach(function ( node ) {
        var match = matchElement( node, selector, true );

        if ( match ) {
            closest.push( match );
        }
    });

    return new Hobo( closest, null );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    utils = __webpack_require__( 12 );



/**
 *
 * @instance
 * @memberof Hobo
 * @method children
 * @description Gather all child nodes that are NOT text nodes
 * @returns {Hobo}
 *
 */
module.exports = function () {
    var children = [],
        len,
        i;

    this.forEach(function ( node ) {
        i = 0;
        len = node.children.length;

        for ( i; i < len; i++ ) {
            children.push( node.children[ i ] );
        }
    });

    return new Hobo( children, this._context );
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method removeAttr
 * @param {string} attr The attribute to remove
 * @description Remove the specified attribute from each node in the set.
 * @returns {Hobo}
 *
 * @note This method needs to update data() in case we remove data-attr's
 *
 */
module.exports = function ( attr ) {
    this.forEach(function ( node ) {
        node.removeAttribute( attr );

        // Remove data()?
        if ( utils.rData.test( attr ) ) {
            utils.removeData( attr.replace( utils.rData, "" ), node );
        }
    });

    return this;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Hobo = __webpack_require__( 11 ),
    matchElement = __webpack_require__( 14 );


/**
 *
 * @instance
 * @memberof Hobo
 * @method toggleClass
 * @description Add or remove the specified classNames.
 * @param {string} classes The space-separated classNames
 * @returns {Hobo}
 *
 */
module.exports = function ( classes ) {
    classes = classes.split( " " );

    this.forEach(function ( node ) {
        classes.forEach(function ( klass ) {
            if ( matchElement( node, ("." + klass) ) ) {
                new Hobo( node, null ).removeClass( klass );

            } else {
                new Hobo( node, null ).addClass( klass );
            }
        });
    });

    return this;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__( 12 );
var AjaxPromise = function () {
    var self = this;

    this._promise = new Promise(function ( resolve, reject ) {
        self._resolve = resolve;
        self._reject = reject;
    });
};
AjaxPromise.prototype.then = function ( fn ) {
    this._then = fn;
    return this;
};
AjaxPromise.prototype.catch = function ( fn ) {
    this._catch = fn;
    return this;
};
AjaxPromise.prototype.resolve = function ( arg ) {
    if ( this._then ) {
        this._then( arg );
        this._resolve( arg );
    }

    return this;
};
AjaxPromise.prototype.reject = function ( err ) {
    if ( this._catch ) {
        this._catch( err );
        this._reject( err );
    }

    return this;
};
AjaxPromise.prototype.abort = function () {
    if ( this._xhr ) {
        this._reject( "Rejecting on XMLHttpRequest.abort()" );
        this._xhr.abort();
    }

    return this;
};


/**
 *
 * @static
 * @memberof Hobo
 * @method ajax
 * @description Perform standar XHR with a native Promise.
 *              dataType can be `html`, `json`, `jsonp`.
 * @param {object} config The ajax config object
 *                        url       => string, default: window.location.href
 *                        data      => object, default: null
 *                        dataType  => string, default: "html"
 *                        method    => string, default: "GET"
 *                        jsonp     => string, default: "callback"
 *                        headers   => object, default: null
 * @returns {Promise}
 *
 */
module.exports = function ( config ) {
    var params = (config.data || null),
        dataType = (config.dataType || "html"),
        method = (config.method || "GET").toUpperCase(),
        url = (config.url || window.location.href),
        headers = (config.headers || null),
        payload = (config.payload || null),
        ajaxPromise = new AjaxPromise();

    // Handle params
    // Params will be one of the following:
    // Serialized querystring
    // Instanceof FormData
    // Null
    if ( params && !(FormData && params instanceof FormData) ) {
        params = utils.serializeData( config.data );
    }

    // Handle JSON payloads
    if ( payload && typeof payload !== "string" ) {
        payload = JSON.stringify( payload );
    }

    // Handle params in GET URL
    if ( method === "GET" && params ) {
        url += ("?" + params);
    }

    // Normalize response handling
    var handleResponse = function ( response ) {
        if ( dataType === "json" ) {
            try {
                response = JSON.parse( response );

            } catch ( error ) {
                // ajaxPromise.reject( ("Rejecting on JSON.parse error : " + error) );
                ajaxPromise.reject( response );
            }
        }

        ajaxPromise.resolve( response );
    };

    // JSONP
    if ( dataType === "jsonp" ) {
        var jsonpCallbackValue = (utils.makeId() + "JSONP"),
            jsonpCallbackKey = (config.jsonp || "callback"),
            jsonpScript = document.createElement( "script" );

        jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);

        window[ jsonpCallbackValue ] = function ( response ) {
            document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
            jsonpScript = null;
            delete window[ jsonpCallbackValue ];

            handleResponse( response );
        };

        document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );

    // XHR
    } else {
        var xhr = new XMLHttpRequest();

        xhr.open( method, url, true );

        if ( headers ) {
            for ( var header in headers ) {
                if ( headers.hasOwnProperty( header ) ) {
                    xhr.setRequestHeader( header, headers[ header ] );
                }
            }
        }

        xhr.onreadystatechange = function ( e ) {
            if ( this.readyState === 4 ) {
                // Two-Hundo's are A-Okay with Hobo
                if ( /^20/.test( this.status ) ) {
                    handleResponse( this.responseText );

                } else {
                    // ajaxPromise.reject( ("Rejecting on server status code : " + this.status) );
                    ajaxPromise.reject( this.responseText );
                }
            }
        };

        xhr.send( (params || payload) );

        ajaxPromise._xhr = xhr;
    }

    return ajaxPromise;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsEasing = __webpack_require__(43);

var _properjsEasing2 = _interopRequireDefault(_properjsEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace config
 * @memberof core
 * @description Stores app-wide config values.
 *
 */
var config = {
  /**
   *
   * @public
   * @member homepage
   * @memberof core.config
   * @description The default homepage slug.
   *
   */
  homepage: "home",

  /**
   *
   * @public
   * @member defaultEasing
   * @memberof core.config
   * @description The default easing function for javascript Tweens.
   *
   */
  defaultEasing: _properjsEasing2.default.easeInOutCubic,

  /**
   *
   * @public
   * @member defaultDuration
   * @memberof core.config
   * @description The default duration for javascript Tweens.
   *
   */
  defaultDuration: 500,

  /**
   *
   * @public
   * @member defaultVideoChannel
   * @memberof core.config
   * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for video.
   *
   */
  defaultVideoChannel: "vid",

  /**
   *
   * @public
   * @member defaultAudioChannel
   * @memberof core.config
   * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for audio.
   *
   */
  defaultAudioChannel: "bgm",

  /**
   *
   * @public
   * @member mainSelector
   * @memberof core.config
   * @description The string selector used for <main> node.
   *
   */
  mainSelector: ".js-main",

  /**
   *
   * @public
   * @member introSelector
   * @memberof core.config
   * @description The string selector used for <intro> node.
   *
   */
  introSelector: ".js-intro",

  /**
   *
   * @public
   * @member naviSelector
   * @memberof core.config
   * @description The string selector used for <navi> node.
   *
   */
  naviSelector: ".js-navi",

  /**
   *
   * @public
   * @member lazyImageSelector
   * @memberof core.config
   * @description The string selector used for images deemed lazy-loadable.
   *
   */
  lazyImageSelector: ".js-lazy-image",
  mobileImageSelector: ".js-lazy-image[data-mobile]",
  mobileMediaHack: 640,
  lazyAnimSelector: ".js-lazy-anim",

  /**
   *
   * @public
   * @member lazyImageAttr
   * @memberof core.config
   * @description The string attribute for lazy image source URLs.
   *
   */
  lazyImageAttr: "data-img-src",

  /**
   *
   * @public
   * @member imageLoaderAttr
   * @memberof core.config
   * @description The string attribute ImageLoader gives loaded images.
   *
   */
  imageLoaderAttr: "data-imageloader"
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = config;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * A base set of easing methods
 * Most of which were found here:
 * https://gist.github.com/gre/1650294
 *
 * @Easing
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {

    /**
     *
     * Easing functions
     * @namespace Easing
     * @memberof! <global>
     *
     */
    var Easing = {
        /**
         *
         * Produce a linear ease
         * @method linear
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        linear: function ( t ) { return t; },
        
        /**
         *
         * Produce a swing ease like in jQuery
         * @method swing
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        swing: function ( t ) { return (1-Math.cos( t*Math.PI ))/2; },
        
        /**
         *
         * Accelerating from zero velocity
         * @method easeInQuad
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInQuad: function ( t ) { return t*t; },
        
        /**
         *
         * Decelerating to zero velocity
         * @method easeOutQuad
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeOutQuad: function ( t ) { return t*(2-t); },
        
        /**
         *
         * Acceleration until halfway, then deceleration
         * @method easeInOutQuad
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInOutQuad: function ( t ) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t; },
        
        /**
         *
         * Accelerating from zero velocity
         * @method easeInCubic
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInCubic: function ( t ) { return t*t*t; },
        
        /**
         *
         * Decelerating to zero velocity
         * @method easeOutCubic
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeOutCubic: function ( t ) { return (--t)*t*t+1; },
        
        /**
         *
         * Acceleration until halfway, then deceleration
         * @method easeInOutCubic
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInOutCubic: function ( t ) { return t<0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; },
        
        /**
         *
         * Accelerating from zero velocity
         * @method easeInQuart
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInQuart: function ( t ) { return t*t*t*t; },
        
        /**
         *
         * Decelerating to zero velocity
         * @method easeOutQuart
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeOutQuart: function ( t ) { return 1-(--t)*t*t*t; },
        
        /**
         *
         * Acceleration until halfway, then deceleration
         * @method easeInOutQuart
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInOutQuart: function ( t ) { return t<0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; },
        
        /**
         *
         * Accelerating from zero velocity
         * @method easeInQuint
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInQuint: function ( t ) { return t*t*t*t*t; },
        
        /**
         *
         * Decelerating to zero velocity
         * @method easeOutQuint
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeOutQuint: function ( t ) { return 1+(--t)*t*t*t*t; },
        
        /**
         *
         * Acceleration until halfway, then deceleration
         * @method easeInOutQuint
         * @param {number} t Difference in time
         * @memberof Easing
         * @returns a new t value
         *
         */
        easeInOutQuint: function ( t ) { return t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; }
    };
    
    
    return Easing;


});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClosestValue = exports.getOriginalDims = exports.getDefaultHammerOptions = exports.getElementsInView = exports.isElementVisible = exports.isElementLoadable = exports.rectsCollide = exports.translate3d = exports.formatTime = exports.loadImages = exports.noop = exports.px = undefined;

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _properjsImageloader = __webpack_require__(45);

var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);

var _dom = __webpack_require__(7);

var _dom2 = _interopRequireDefault(_dom);

var _config = __webpack_require__(42);

var _config2 = _interopRequireDefault(_config);

var _detect = __webpack_require__(6);

var _detect2 = _interopRequireDefault(_detect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Add pixel units when inline styling
 * @method px
 * @param {string} str The value to pixel-ify
 * @memberof util
 * @returns {string}
 *
 */
var px = function px(str) {
    return str + "px";
};

/**
 *
 * @description Apply a translate3d transform
 * @method translate3d
 * @param {object} el The element to transform
 * @param {string|number} x The x value
 * @param {string|number} y The y value
 * @param {string|number} z The z value
 * @memberof util
 *
 */
/**
 *
 * @public
 * @module util
 * @description Houses app-wide utility methods.
 *
 */

var translate3d = function translate3d(el, x, y, z) {
    el.style[_detect2.default.getPrefixed("transform")] = "translate3d( " + x + ", " + y + ", " + z + " )";
};

/**
 *
 * @description Module onImageLoadHander method, handles event
 * @method isElementLoadable
 * @param {object} el The DOMElement to check the offset of
 * @memberof core.util
 * @returns {boolean}
 *
 */
var isElementLoadable = function isElementLoadable(el) {
    var ret = false;

    if (el) {
        var bounds = el.getBoundingClientRect();

        ret = bounds.top < window.innerHeight * 2;
    }

    return ret;
};

/**
 *
 * @description Module isElementVisible method, handles element boundaries
 * @method isElementVisible
 * @param {object} el The DOMElement to check the offsets of
 * @memberof core.util
 * @returns {boolean}
 *
 */
var isElementVisible = function isElementVisible(el) {
    var ret = false;

    if (el) {
        var bounds = el.getBoundingClientRect();

        ret = bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    return ret;
};

/**
 *
 * @method getClosestValue
 * @memberof util
 * @param {array} arr The array to process
 * @param {number} closestTo The number to get close to
 * @description Get closest number value without going under
 * @returns {number}
 *
 */
var getClosestValue = function getClosestValue(arr, closestTo) {
    // Get the highest number in arr in case it matches nothing.
    var close = Math.max.apply(null, arr);
    var i = arr.length;

    for (i; i--;) {
        // Check if it's higher than your number, but lower than your closest value
        if (arr[i] >= closestTo && arr[i] < close) {
            close = arr[i];
        }
    }

    return close;
};

var getElementsInView = function getElementsInView($nodes) {
    var i = $nodes.length;
    var $ret = (0, _properjsHobo2.default)([]);

    for (i; i--;) {
        if (isElementVisible($nodes[i])) {
            $ret.push($nodes[i]);
        }
    }

    return $ret;
};

/**
 *
 * @description Fresh query to lazyload images on page
 * @method loadImages
 * @param {object} images Optional collection of images to load
 * @param {function} handler Optional handler for load conditions
 * @memberof util
 * @returns {instance}
 *
 */
var loadImages = function loadImages(images, handler) {
    // Normalize the handler
    handler = handler || isElementLoadable;

    // Normalize the images
    images = images || _dom2.default.main.find(_config2.default.lazyImageSelector);

    return new _properjsImageloader2.default({
        elements: images,
        property: _config2.default.lazyImageAttr,
        executor: handler
    });
};

/**
 *
 * @description All true all the time
 * @method noop
 * @memberof util
 * @returns {boolean}
 *
 */
var noop = function noop() {
    return true;
};

/**
 *
 * @public
 * @method getOriginalDims
 * @memberof util
 * @param {string} original The original image dims
 * @description Get an object reference to original dims.
 *              Format: "1600x1600"
 * @returns {object}
 *
 */
var getOriginalDims = function getOriginalDims(original) {
    var dims = original.split("x");

    return {
        width: parseInt(dims[0], 10),
        height: parseInt(dims[1], 10)
    };
};

var formatTime = function formatTime(time) {
    var minutes = parseInt(time / (1000 * 60), 10);
    var seconds = parseInt(time / 1000, 10) % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
};

/**
 *
 * Get 2D collision
 * Now `getBoundingClientRect` has x / y properties which mirror top / left
 * @method rectsCollide
 * @param {object} rect1 The client Rect
 * @param {object} rect2 The other client Rect
 * @memberof util
 * @returns {object}
 *
 */
var rectsCollide = function rectsCollide(rect1, rect2) {
    var ret = false;

    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
        // collision detected!
        ret = true;
    }

    return ret;
};

/**
 *
 * @method getDefaultHammerOptions
 * @memberof core.util
 * @description The default options for Hammer JS.
 *              Disables cssProps for non-touch experiences.
 * @returns {object}
 *
 */
var getDefaultHammerOptions = function getDefaultHammerOptions() {
    return _detect2.default.isDevice() ? {} : {
        cssProps: {
            contentZoomingString: false,
            tapHighlightColorString: false,
            touchCalloutString: false,
            touchSelectString: false,
            userDragString: false,
            userSelectString: false
        }
    };
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.px = px;
exports.noop = noop;
exports.loadImages = loadImages;
exports.formatTime = formatTime;
exports.translate3d = translate3d;
exports.rectsCollide = rectsCollide;
exports.isElementLoadable = isElementLoadable;
exports.isElementVisible = isElementVisible;
exports.getElementsInView = getElementsInView;
exports.getDefaultHammerOptions = getDefaultHammerOptions;
exports.getOriginalDims = getOriginalDims;
exports.getClosestValue = getClosestValue;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Handle lazy-loading images with contextual load conditions.
 *
 * @ImageLoader
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    var Controller = __webpack_require__( 2 );


    /**
     *
     * Handle lazy-loading images with unique callback conditions
     * @memberof! <global>
     * @requires raf
     * @constructor ImageLoader
     * @param {object} options Controller settings
     * <ul>
     * <li>elements - The collection of elements to load against</li>
     * <li>property - The property to pull the image source from</li>
     * <li>transitionDelay - The timeout before transition starts</li>
     * <li>transitionDuration - The length of the animation</li>
     * </ul>
     *
     */
    var ImageLoader = function ( options ) {
        var self = this;

        if ( !options ) {
            throw new Error( "ImageLoader Class requires options to be passed" );
        }

        // Up, up and away...
        Controller.call( this );

        /**
         *
         * The method to determine if an image should load itself
         * @memberof ImageLoader
         * @member _executor
         * @private
         *
         */
        this._executor = (options.executor || function ( elem ) {
            return elem;
        });

        /**
         *
         * The Collection to load against
         * @memberof ImageLoader
         * @member _elements
         * @private
         *
         */
        this._elements = options.elements;

        /**
         *
         * The property to get image source from
         * @memberof ImageLoader
         * @member _property
         * @private
         *
         */
        this._property = (options.property || "data-src");

        /**
         *
         * The way to load, async or sync
         * Using "sync" loading requires calling .start() on the instance
         * and the "handle" event will not be utilized, rather each image
         * will be loaded in succession as the previous finishes loading
         * @memberof ImageLoader
         * @member _loadType
         * @private
         *
         */
        this._loadType = (options.loadType || "async");

        /**
         *
         * The current amount of elements lazy loaded
         * @memberof ImageLoader
         * @member _numLoaded
         * @private
         *
         */
        this._numLoaded = 0;

        /**
         *
         * The total amount of elements to lazy load
         * @memberof ImageLoader
         * @member _num2Load
         * @private
         *
         */
        this._num2Load = (this._elements ? this._elements.length : 0);

        /**
         *
         * The delay to execute lazy loading on an element in ms
         * @memberof ImageLoader
         * @member _transitionDelay
         * @default 100
         * @private
         *
         */
        this._transitionDelay = (options.transitionDelay || 0);

        /**
         *
         * The duration on a lazy loaded elements fade in in ms
         * @memberof ImageLoader
         * @member _transitionDuration
         * @default 600
         * @private
         *
         */
        this._transitionDuration = (options.transitionDuration || 400);

        /**
         *
         * This flags that all elements have been loaded
         * @memberof ImageLoader
         * @member _resolved
         * @private
         *
         */
        this._resolved = false;

        // Break out if no elements in collection
        if ( !this._elements.length ) {
            return this;
        }

        // Only run animation frame for async loading
        if ( this._loadType === "async" ) {
            this.initAsync();

        } else {
            this.initSync();
        }
    };


    /**
     *
     * @extends Controller
     *
     */
    ImageLoader.prototype = Object.create( Controller.prototype );


    /**
     *
     * Support asynchronous loading of a set of images
     * @memberof ImageLoader
     * @method initAsync
     *
     */
    ImageLoader.prototype.initAsync = function () {
        var self = this;

        this.go(function () {
            if ( self._resolved ) {
                self.stop();

            } else {
                self.handle();
            }
        });
    };

    /**
     *
     * Support batch synchronous loading of a set of images
     * @memberof ImageLoader
     * @method initSync
     *
     */
    ImageLoader.prototype.initSync = function () {
        var self = this;

        function syncLoad() {
            var elem = self._elements[ self._numLoaded ];

            self._numLoaded++;

            self.load( elem, function ( error ) {
                if ( !error && !self._resolved ) {
                    syncLoad();
                }
            });
        }

        syncLoad();
    };

    /**
     *
     * Perform the image loading and set correct values on element
     * @method load
     * @memberof ImageLoader
     * @param {object} $elem element object
     * @param {function} callback optional callback for each load
     * @fires done
     *
     */
    ImageLoader.prototype.load = function ( element, callback ) {
        var self = this,
            image = null,
            timeout = null,
            isImage = (element.nodeName === "IMG"),
            source = element.getAttribute( this._property );

        element.setAttribute( "data-imageloader", true );

        if ( isImage ) {
            image = element;

        } else {
            image = new Image();
        }

        timeout = setTimeout(function () {
            clearTimeout( timeout );

            image.onload = function () {
                self.fire( "load", element );

                if ( !isImage ) {
                    element.style.backgroundImage = ("url(" + source + ")");

                    image = null;
                }

                timeout = setTimeout(function () {
                    clearTimeout( timeout );

                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
                        self._resolve( true );

                    } else if ( typeof callback === "function" ) {
                        // Errors first
                        callback( false );
                    }

                }, self._transitionDuration );
            };

            image.onerror = function () {
                self.fire( "error", element );

                if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
                    self._resolve( true );

                } else if ( typeof callback === "function" ) {
                    // Errors first
                    callback( true );
                }
            };

            image.src = source;

        }, this._transitionDelay );

        return this;
    };

    /**
     *
     * Handles element iterations and loading based on callbacks
     * @memberof ImageLoader
     * @method handle
     *
     */
    ImageLoader.prototype.handle = function () {
        var elems = this.getNotLoaded(),
            self = this;

        for ( var i = 0, len = elems.length; i < len; i++ ) {
            if ( self._executor( elems[ i ] ) ) {
                self._numLoaded++;

                self.load( elems[ i ] );
            }
        }
    };

    /**
     *
     * Get all images in the set that have yet to be loaded
     * @memberof ImageLoader
     * @method getNotLoaded
     *
     */
    ImageLoader.prototype.getNotLoaded = function () {
        var elems = [];

        for ( var i = 0, len = this._elements.length; i < len; i++ ) {
            if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
                elems.push( this._elements[ i ] );
            }
        }

        return elems;
    };

    /**
     *
     * Resolve an instance and remove it from the stack
     * @memberof ImageLoader
     * @method _resolve
     *
     */
    ImageLoader.prototype._resolve = function () {
        // Resolved state
        this._resolved = true;

        // Fires the predefined "done" event
        this.fire( "done" );
    };


    return ImageLoader;


});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEV = "development";
var PROD = "production";

/**
 *
 * @public
 * @namespace env
 * @memberof core
 * @description Set the app environment.
 *
 */
var env = {
  /**
   *
   * @member DEV
   * @memberof core.env
   * @description The development environment CONST.
   *
   */
  DEV: DEV,

  /**
   *
   * @member PROD
   * @memberof core.env
   * @description The production environment CONST.
   *
   */
  PROD: PROD,

  /**
   *
   * @member ENV
   * @memberof core.env
   * @description The applied environment ref.
   *
   */
  ENV: /^localhost|squarespace|^[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/g.test(document.domain) ? DEV : PROD,

  /**
   *
   * @method get
   * @memberof core.isDev
   * @description Returns the dev mode status.
   * @returns {boolean}
   *
   */
  isDev: function isDev() {
    return this.ENV === DEV;
  },


  /**
   *
   * @method get
   * @memberof core.isProd
   * @description Returns the dev mode status.
   * @returns {boolean}
   *
   */
  isProd: function isProd() {
    return this.ENV === PROD;
  },


  /**
   *
   * @method isConfig
   * @memberof core.env
   * @description Determine whether we are in Squarespace /config land or not.
   * @returns {boolean}
   *
   */
  isConfig: function isConfig() {
    return window.parent.location.pathname.indexOf("/config") !== -1;
  }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = env;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = __webpack_require__(46);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @method log
 * @memberof core
 * @description Normalized app console logger.
 *              If you want to use another console method like `info` or `warn`
 *              you can pass it as the first argument to the `log` method here.
 *              The default method that will be assumed is `console.log`.
 *
 *              Examples:
 *              log( "info", ...args )
 *              log( "warn", ...args )
 *              log( "trace", ...args )
 *              log( "debug", ...args )
 *
 */
var log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    // Only log for development environments
    if (!_env2.default.isDev() || !("console" in window)) {
        return;
    }

    var method = "log";

    // First arg can be another `console` method to call ?
    if (typeof console[args[0]] === "function") {
        method = args[0];
        args = args.slice(1, args.length);
    }

    // App recognition
    args.shift("Deem | ");

    window.console[method](args);
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = log;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = __webpack_require__(49);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace cache
 * @memberof core
 * @see {@link Store}
 * @description Return Singleton instances of the cache Store.
 *
 */
exports.default = new _Store2.default({
  // If TRUE the Store will use LocalStorage...
  enableStorage: false
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _log = __webpack_require__(47);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Singleton
var _instance = null;
var _initialized = false;

// Session Storage
var _cache = {};
var _access = "deem-cache";
var _session = window.sessionStorage;

/**
 *
 * @public
 * @class Store
 * @param {object} options The Store settings
 * @classdesc Handles how data / content is cached and stored for webapp.
 *
 */

var Store = function () {
    function Store(options) {
        _classCallCheck(this, Store);

        if (!_instance) {
            _instance = this;

            this._opts = options;
            this._init();
        }

        return _instance;
    }

    /**
     *
     * @private
     * @instance
     * @method _init
     * @memberof Store
     * @description One time Store initialization
     *
     */


    _createClass(Store, [{
        key: "_init",
        value: function _init() {
            if (_initialized) {
                return;
            }

            _initialized = true;

            this.flush();

            (0, _log2.default)("[Cache Store initialized]", this);
        }

        /**
         *
         * @public
         * @instance
         * @method flush
         * @memberof Store
         * @description Manually flush the Local Storage cache
         *
         */

    }, {
        key: "flush",
        value: function flush() {
            // New empty cache
            _cache = {};

            // Store the new cache object
            this.save();
        }

        /**
         *
         * @public
         * @instance
         * @method save
         * @memberof Store
         * @description Perform the actual synchronous write to Local Storage
         *
         */

    }, {
        key: "save",
        value: function save() {
            if (!this._opts.enableStorage || !Store.isStorageSupported) {
                (0, _log2.default)("[Cache Store::Not using SessionStorage]");
                return;
            }

            _session.setItem(_access, JSON.stringify(_cache));
        }

        /**
         *
         * @public
         * @instance
         * @method slug
         * @param {string} uri The string to slugify
         * @memberof Store
         * @description Slug a uri string
         * @returns {string}
         *
         */

    }, {
        key: "slug",
        value: function slug(uri) {
            uri = uri.replace(/^\/|\/$/g, "").replace(/\/|\?|&|=|\s/g, "-").toLowerCase();

            return uri;
        }

        /**
         *
         * @public
         * @instance
         * @method set
         * @param {string} id The index key
         * @param {mixed} val The value to store
         * @memberof Store
         * @description Set a key's value in the cache
         *
         */

    }, {
        key: "set",
        value: function set(id, val) {
            id = this.slug(id);

            _cache[id] = val;

            this.save();
        }

        /**
         *
         * @public
         * @instance
         * @method get
         * @param {string} id The index key
         * @memberof Store
         * @description Get a key's value from the cache
         * @returns {mixed}
         *
         */

    }, {
        key: "get",
        value: function get(id) {
            id = id && this.slug(id);

            return id ? this.getValue(_cache[id]) : _cache;
        }

        /**
         *
         * @public
         * @instance
         * @method getValue
         * @param {mixed} val The accessed value
         * @memberof Store
         * @description Get a value so cache is non-mutable from outside
         * @returns {mixed}
         *
         */

    }, {
        key: "getValue",
        value: function getValue(val) {
            var ret = val;

            return ret;
        }

        /**
         *
         * @public
         * @instance
         * @method remove
         * @param {string} id The index key
         * @memberof Store
         * @description Remove a key/val pair from the cache
         *
         */

    }, {
        key: "remove",
        value: function remove(id) {
            delete _cache[id];
        }
    }]);

    return Store;
}();

/**
 *
 * @public
 * @static
 * @member crumb
 * @memberof Store
 * @description Crumb CSRF token value for website
 *
 */


Store.crumb = function () {
    var ret = RegExp("(^|; )" + encodeURIComponent("crumb") + "=([^;]*)").exec(document.cookie);

    return ret ? ret[2] : null;
}();

/**
 *
 * @public
 * @static
 * @member ss_cvr
 * @memberof Store
 * @description ss_cvr Identify individual visitors and track each visitor's sessions on the site
 *
 */
Store.ss_cvr = function () {
    var ret = RegExp("(^|; )" + encodeURIComponent("ss_cvr") + "=([^;]*)").exec(document.cookie);

    return ret ? ret[2] : null;
}();

/**
 *
 * @public
 * @static
 * @member isStorageSupported
 * @memberof Store
 * @description Boolean to test local/session storage support
 *
 */
Store.isStorageSupported = function () {
    var ret = true;

    try {
        _session.setItem("deem-test", 1);
        _session.removeItem("deem-test");
    } catch (err) {
        ret = false;
    }

    return ret;
}();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = Store;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsController = __webpack_require__(2);

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Single app instanceof [Controller]{@link https://github.com/ProperJS/Controller} for arbitrary event emitting
 * @member emitter
 * @memberof core
 *
 */
var emitter = new _properjsController2.default();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = emitter;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _properjsPagecontroller = __webpack_require__(52);

var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);

var _Controllers = __webpack_require__(58);

var _Controllers2 = _interopRequireDefault(_Controllers);

var _ImageController = __webpack_require__(68);

var _ImageController2 = _interopRequireDefault(_ImageController);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _navi = __webpack_require__(108);

var _navi2 = _interopRequireDefault(_navi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace router
 * @description Handles the app window load and request lifecycles...
 *
 */
var router = {
    init: function init() {
        this.element = core.dom.body.find(".js-vr_").detach();
        this.duration = 500;
        this.resolved = false;
        this.frozen = true;
        this.resizeBounce = 300;
        this.controllers = new _Controllers2.default({
            el: core.dom.main
        });
        this.state = {
            now: null,
            future: null
        };

        this.bind();
    },
    defrost: function defrost() {
        this.frozen = false;
    },
    freeze: function freeze() {
        this.frozen = true;
    },
    bind: function bind() {
        core.dom.body.on("click", "[href^='#']", function (e) {
            return e.preventDefault();
        });
    },
    loadImages: function loadImages() {
        this.imageCtrl = new _ImageController2.default(this.images);

        return this.imageCtrl;
    },
    resolve: function resolve() {
        if (!this.resolved) {
            this.resolved = true;
            this._resolve();
        }
    },
    load: function load() {
        var _this = this;

        return new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
            _this.controller = new _properjsPagecontroller2.default({
                transitionTime: _this.duration,
                routerOptions: {
                    async: true
                }
            });
            _this.controller.setConfig(["/", ":view", ":view/:uid"]);
            _this.controller.on("page-controller-router-transition-out", _this.onTransitionOut.bind(_this));
            _this.controller.on("page-controller-router-refresh-document", _this.onRefreshDom.bind(_this));
            _this.controller.on("page-controller-router-transition-in", _this.onTransitionIn.bind(_this));

            // Initialize PageController
            _this.controller.on("page-controller-initialized-page", _this.onInitPage.bind(_this));
            _this.controller.initPage();
        });
    },
    onInitPage: function onInitPage(data) {
        this.setDom(data);
        this.setState("now", data);
        this.setState("future", null);
        this.setClass();
        _navi2.default.setActive(this.state.now.view);

        // split code here

        this.newPage();
    },
    route: function route(path) {
        this.controller.getRouter().trigger(path);
    },
    push: function push(path, cb) {
        this.controller.routeSilently(path, cb || core.util.noop);
    },
    zero: function zero() {
        window.scrollTo(0, 0);
    },
    onTransitionOut: function onTransitionOut(data) {
        this.freeze();
        this.setState("future", data);
        this.cleanClass();
        this.setClass();
        _navi2.default.setActive(this.state.future.view);
        _navi2.default.closeAll();
        core.dom.html.addClass("is-tranny");
    },
    onRefreshDom: function onRefreshDom(data) {
        this.setDom(data);
        this.setState("now", data);

        // split code here

        this.newPage();
    },
    onTransitionIn: function onTransitionIn() /*data*/{
        setTimeout(function () {
            return core.dom.html.removeClass("is-tranny");
        }, this.duration);
    },
    onImagesPreloaded: function onImagesPreloaded() {
        this.resolve();
        this.controllers.exec();
        _navi2.default.doResize();
        this.defrost();
    },
    newPage: function newPage() {
        var _this2 = this;

        // destroy controllers
        if (this.resolved) {
            this.controllers.destroy();
        }

        // navi cleanup / header cleanup / search cleanup
        if (this.resolved) {
            _navi2.default.clean();
        }

        // tracker?
        if (this.resolved) {
            core.emitter.fire("app--tracker", this.dom);
        }

        // pre-determine the DOM
        // this means set aspect ratios on "virtual" DOM
        this.preDetermineDom();

        // Dbug
        this.onImagesPreloaded();
        return;

        // pre-load & lazy-load images
        this.loadImages().on("preloaded", function () {
            _this2.onImagesPreloaded();
        }).on("preload", function (data) {
            data.element.style.paddingBottom = "0";
        }).on("lazyload", function (data) {
            data.element.style.paddingBottom = "0";
        });

        // debounce re-load images?
        // this.__appResize = debounce(() => {
        //     this.images.removeAttr( core.config.imageLoaderAttr );
        //     this.imageCtrl.destroy();
        //     this.imageCtrl = new ImageController( this.images );
        //
        // }, this.resizeBounce );
        //
        // core.emitter.on( "app--resize", this.__appResize );
    },
    preDetermineDom: function preDetermineDom() {
        this.dom.vr.find(".js-sqs-config-style").remove();
        this.dom.vr.find(".js-sqs-config-image").remove();

        this.preDetermineDomImages();
    },
    preDetermineDomImages: function preDetermineDomImages() {
        var _this3 = this;

        this.images = this.dom.vr.find(core.config.lazyImageSelector);
        this.images.forEach(function (el, i) {
            var image = _this3.images.eq(i);
            var data = image.data();

            // aspect
            if (data.originalSize) {
                _this3.preDetermineDomImageAspect(image, data);
            }

            // size
            // need to inject into the DOM first
            core.dom.main[0].innerHTML = _this3.dom.vr[0].innerHTML;
            _this3.zero();

            // Source width from image, parent or Window
            // http://developers.squarespace.com/using-the-imageloader/
            // {original/2500w, 1500w, 1000w, 750w, 500w, 300w, 100w}
            if (data.variants) {
                _this3.preDetermineDomImageVariant(image, data);
            }
        });
    },
    preDetermineDomImageAspect: function preDetermineDomImageAspect(image, data) {
        var dims = core.util.getOriginalDims(data.originalSize);
        var ratio = dims.height / dims.width * 100;

        if (ratio > 100) {
            image.addClass("image--tall").closest(".js-media").addClass("media--tall");
        } else if (ratio >= 75) {
            image.addClass("image--box");
        } else {
            image.addClass("image--wide");
        }

        image[0].style.paddingBottom = ratio + "%";

        if (core.env.isDev()) {
            image[0].style.backgroundColor = "black";
        }
    },
    preDetermineDomImageVariant: function preDetermineDomImageVariant(image, data) {
        var vars = data.variants.split(",").map(function (vnt) {
            return parseInt(vnt, 10);
        });
        var source = data.imgSrc.replace(/\?(.*)$/, "");
        var width = image[0].clientWidth || image[0].parentNode.clientWidth || window.innerWidth;
        var variant = core.util.getClosestValue(vars, width);

        // If the pixel density is higher, use a larger image
        if (window.devicePixelRatio > 1) {
            // Splice off the variant that was matched
            vars.splice(vars.indexOf(variant), 1);

            // Apply the new, larger variant as the format
            variant = core.util.getClosestValue(vars, variant);
        }

        image.attr(core.config.lazyImageAttr, source + "?format=" + variant + "w");
    },
    parseDom: function parseDom(html) {
        var dom = document.createElement("html");
        var vr = null;

        dom.innerHTML = html;
        dom = (0, _properjsHobo2.default)(dom);
        vr = dom.find(".js-vr_");

        return {
            dom: dom,
            vr: vr,
            // html: vr[ 0 ].innerHTML,
            data: vr.data()
        };
    },
    setDom: function setDom(data) {
        this.dom = this.parseDom(data.response);
    },
    setState: function setState(time, data) {
        this.state[time] = {
            raw: data && data || null,
            uid: data && data.request.params.uid || null,
            view: data ? data.request.params.view || core.config.homepage : null,
            cat: data && data.request.query.category || null,
            tag: data && data.request.query.tag || null
        };
    },
    setClass: function setClass() {
        if (this.state.future.view) {
            core.dom.html.addClass("is-" + this.state.future.view + "-page");
        }

        if (this.state.future.uid) {
            core.dom.html.addClass("is-uid-page");
        }

        if (this.state.future.cat) {
            core.dom.html.addClass("is-cat-page");
        }

        if (this.state.future.tag) {
            core.dom.html.addClass("is-tag-page");
        }
    },
    cleanClass: function cleanClass() {
        if (this.state.now.view !== this.state.future.view) {
            core.dom.html.removeClass("is-" + this.state.now.view + "-page");
        }

        if (this.state.now.uid && !this.state.future.uid) {
            core.dom.html.removeClass("is-uid-page");
        }

        if (this.state.now.cat && !this.state.future.cat) {
            core.dom.html.removeClass("is-cat-page");
        }

        if (this.state.now.tag && !this.state.future.tag) {
            core.dom.html.removeClass("is-tag-page");
        }
    }
};

/******************************************************************************
 * Export
*******************************************************************************/

// import debounce from "properjs-debounce";
exports.default = router;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Asynchronous webpage transitioning with pushstate management.
 *
 * @PageController
 * @author: kitajchuk
 *
 * @module
 * - init
 * - isActive
 * - onload
 * - unload
 *
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    // Useful stuff
    var Router = __webpack_require__( 53 ),
        Controller = __webpack_require__( 2 ),

        _router = null,
        _config = [],
        _modules = [],
        _synced = {
            active: [],
            inactive: []
        },
        _initialized = false,
        _timeBefore = null,
        _timeDelay = 0,
        _eventPrefix = "page-controller-",
        _currentRoute = null,
        _isFirstRoute = true,
        _currentQuery = null,
        _currentToString = null,
        _isSamePage = false,
        _silentMode = false,
        _silentCallback = null,
        _isRoutingActive = false,

        // Singleton
        _instance = null,


    // Private functions
    fire = function ( event, arg ) {
        if ( !_silentMode ) {
            _instance.fire( (_eventPrefix + event), arg );
        }
    },


    isFunction = function ( fn ) {
        return (typeof fn === "function");
    },


    isSameObject = function ( o1, o2 ) {
        return (JSON.stringify( o1 ) === JSON.stringify( o2 ));
    },


    execInit = function ( method ) {
        // One time module initialization
        for ( var i = _modules.length; i--; ) {
            if ( !_modules[ i ].__initialized && isFunction( _modules[ i ].init ) ) {
                _modules[ i ].__initialized = true;
                _modules[ i ].init();
            }
        }
    },


    execUnload = function () {
        if ( _silentMode ) {
            return;
        }

        // Unload currently active modules only
        for ( var i = _synced.active.length; i--; ) {
            if ( isFunction( _synced.active[ i ].unload ) ) {
                _synced.active[ i ].unload();
            }
        }
    },


    execOnload = function () {
        if ( _silentMode ) {
            return;
        }

        // Unload newly active modules only
        for ( var i = _synced.active.length; i--; ) {
            if ( isFunction( _synced.active[ i ].onload ) ) {
                _synced.active[ i ].onload();
            }
        }
    },


    getRouteDataToString = function ( data ) {
        var ret = data.uri,
            i;

        for ( i in data.query ) {
            ret += "-" + i + "-" + data.query[ i ];
        }

        for ( i in data.params ) {
            ret += "-" + i + "-" + data.params[ i ];
        }

        return ret;
    },


    /**
     * @fires page-controller-router-synced-modules
     */
    syncModules = function () {
        if ( _silentMode ) {
            return;
        }

        _synced.active = [];
        _synced.inactive = [];

        for ( var i = _modules.length; i--; ) {
            var module = _modules[ i ];

            if ( isFunction( module.isActive ) ) {
                // isActive method should rebuild module variables
                if ( module.isActive() ) {
                    _synced.active.push( module );

                } else {
                    _synced.inactive.push( module );
                }
            }
        }

        fire( "router-synced-modules", _synced );
    },


    onRouterResponse = function ( data ) {
        if ( _isRoutingActive ) {
            return;
        }

        _isRoutingActive = true;

        function __route() {
            if ( (Date.now() - _timeBefore) >= _instance._options.transitionTime ) {
                _instance.stop();

                handleRouterResponse( data );
            }
        }

        _instance.go( __route );
    },


    onPopGetRouter = function ( data ) {
        if ( _isRoutingActive ) {
            return;
        }

        onPreGetRouter( data.request );
    
        setTimeout( function () {
            handleRouterResponse( data );

        }, _instance._options.transitionTime );
    },


    /**
     * @fires page-controller-router-transition-out
     * @fires page-controller-router-samepage
     */
    onPreGetRouter = function ( data ) {
        if ( _isRoutingActive ) {
            return;
        }

        var isSameRequest = (_currentToString === getRouteDataToString( data ));

        if ( isSameRequest ) {
            fire( "router-samepage", {
                request: data
            });
            _isSamePage = true;
            return;
        }

        _timeBefore = Date.now();

        if ( !_isFirstRoute ) {
            fire( "router-transition-out", {
                request: data
            });
        }
    },


    /**
     * @fires page-controller-router-refresh-document
     * @fires page-controller-router-transition-in
     */
    handleRouterResponse = function ( res ) {
        if ( _isSamePage ) {
            _isSamePage = false;
            _isRoutingActive = false;
            return;
        }

        var data = {
            response: res.response.responseText,
            request: res.request,
            status: res.status
        };

        _currentRoute = data.request.uri;
        _currentQuery = data.request.query;
        _currentToString = getRouteDataToString( data.request );

        // Think of this as window.onload, happens once
        if ( _isFirstRoute ) {
            _isFirstRoute = false;
            _isRoutingActive = false;
            syncModules();
            execOnload();

            fire( "initialized-page", data );

        // All other Router sequences fall here
        } else {
            // Allow transition duration to take place
            setTimeout(function () {
                // 0.1 Sync modules and unload active ones
                syncModules();
                execUnload();

                // 0.2 Refresh the document content
                fire( "router-refresh-document", data );

                // 0.3 Sync modules and onload newly active ones
                syncModules();
                execOnload();

                // 0.4 Trigger transition of content to come back in
                fire( "router-transition-in", data );

                _isRoutingActive = false;

                // 0.5 Check `silent` mode
                if ( _silentMode ) {
                    _silentMode = false;

                    if ( isFunction( _silentCallback ) ) {
                        _silentCallback( data );
                        _silentCallback = null;
                    }
                }

            }, _instance._options.transitionTime );
        }
    };


    /**
     *
     * Page transition manager
     * @constructor PageController
     * @augments Controller
     * @requires Controller
     * @requires Router
     * @memberof! <global>
     * @param {object} options Settings for control features
     * <ul>
     * <li>transitionTime</li>
     * <li>routerOptions</li>
     * </ul>
     *
     */
    var PageController = function ( options ) {
        // Singleton
        if ( !_instance ) {
            _instance = this;

            /**
             *
             * The default options
             * @memberof _options
             * @member _routerOptions
             * @private
             *
             */
            this._options = {
                transitionTime: _timeDelay,
                routerOptions: {
                    pushStateOptions: {}
                }
            };

            // Normalize usage options passed in
            options = (options || {});

            // Merge usage options with defaults
            if ( options.transitionTime ) {
                this._options.transitionTime = options.transitionTime;
            }

            if ( options.routerOptions ) {
                for ( var i in options.routerOptions ) {
                    this._options.routerOptions[ i ] = options.routerOptions[ i ];
                }
            }
        }

        return _instance;
    };

    PageController.prototype = new Controller();

    /**
     *
     * Initialize controller on page
     * @memberof PageController
     * @method initPage
     *
     */
    PageController.prototype.initPage = function () {
        if ( _initialized ) {
            return;
        }

        _initialized = true;

        /**
         *
         * Instance of Router
         * @private
         *
         */
        _router = new Router( this._options.routerOptions );

        if ( _router._matcher.parse( window.location.href, _config ).matched ) {
            _router.bind();

            for ( var i = _config.length; i--; ) {
                _router.get( _config[ i ], onRouterResponse );
            }

            _router.on( "preget", onPreGetRouter );
            _router.on( "popget", onPopGetRouter );

            execInit();
        }
    };

    /**
     *
     * Trigger the router on a uri and run PageController `silently`, so no events fire.
     * @memberof PageController
     * @method routeSilently
     * @param {string} uri The route to trigger
     * @param {function} cb The optional callback to fire when done
     *
     */
    PageController.prototype.routeSilently = function ( uri, cb ) {
        _silentMode = true;
        _silentCallback = cb;
        _router.trigger( uri );
    };

    /**
     *
     * Set the Router configuration
     * @memberof PageController
     * @method setConfig
     * @param {object} config The config for MatchRoute
     *
     */
    PageController.prototype.setConfig = function ( config ) {
        _config = config;
    };

    /**
     *
     * Set the module configuration
     * @memberof PageController
     * @method setModules
     * @param {object} modules The array of module objects
     *
     */
    PageController.prototype.setModules = function ( modules ) {
        if ( !modules ) {
            return;
        }

        for ( var i = modules.length; i--; ) {
            this.addModule( modules[ i ] );
        }
    };

    /**
     *
     * Add to the module configuration
     * @memberof PageController
     * @method addModule
     * @param {object} module The module object to add
     *
     */
    PageController.prototype.addModule = function ( module ) {
        if ( _modules.indexOf( module ) === -1 && isFunction( module.isActive ) && isFunction( module.onload ) && isFunction( module.unload ) ) {
            _modules.push( module );

        } else {
            throw new Error( "PageController ERROR - All registered modules require isActive, onload and unload methods." );
        }
    };

    /**
     *
     * Returns the array of modules
     * @memberof PageController
     * @method getModules
     * @returns array
     *
     */
    PageController.prototype.getModules = function () {
        return _modules;
    };

    /**
     *
     * Returns the MatchRoute config
     * @memberof PageController
     * @method getConfig
     * @returns array
     *
     */
    PageController.prototype.getConfig = function () {
        return _config;
    };

    /**
     *
     * Returns the instances Router
     * @memberof PageController
     * @method getRouter
     * @returns Router
     *
     */
    PageController.prototype.getRouter = function () {
        return _router;
    };

    /**
     *
     * Returns the instances PushState
     * @memberof PageController
     * @method getPusher
     * @returns PushState
     *
     */
    PageController.prototype.getPusher = function () {
        return _router._pusher;
    };

    /**
     *
     * Returns the instances MatchRoute
     * @memberof PageController
     * @method getMatcher
     * @returns MatchRoute
     *
     */
    PageController.prototype.getMatcher = function () {
        return _router._matcher;
    };

    /**
     *
     * Returns the current route pathed
     * @memberof PageController
     * @method getRoute
     * @returns string
     *
     */
    PageController.prototype.getRoute = function () {
        return _currentRoute;
    };

    /**
     *
     * Returns the current query params object
     * @memberof PageController
     * @method getQuery
     * @returns string
     *
     */
    PageController.prototype.getQuery = function () {
        return _currentQuery;
    };

    return PageController;

});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Handles basic get routing
 *
 * @Router
 * @author: kitajchuk
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    var PushState = __webpack_require__( 54 ),
        MatchRoute = __webpack_require__( 55 ),
        matchElement = __webpack_require__( 57 ),
        _initDelay = 200,
        _triggerEl;


    /**
     *
     * A simple router Class
     * @constructor Router
     * @requires PushState
     * @requires MatchRoute
     * @requires matchElement
     * @memberof! <global>
     *
     */
    var Router = function () {
        return this.init.apply( this, arguments );
    };

    Router.prototype = {
        constructor: Router,

        /**
         *
         * Expression match http/https
         * @memberof Router
         * @member _rHTTPs
         * @private
         *
         */
        _rHTTPs: /^http[s]?:\/\/.*?\//,

        /**
         *
         * Expression match common file types...
         * @memberof Router
         * @member _rFiles
         * @private
         *
         */
        _rFiles: /\.(jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3)$/gi,

        /**
         *
         * Expression match this documents domain
         * @memberof Router
         * @member _rDomain
         * @private
         *
         */
        _rDomain: new RegExp( document.domain ),

        /**
         *
         * Flag routing state
         * @memberof Router
         * @member _isRouting
         * @private
         *
         */
        _isRouting: false,

        /**
         *
         * Router init constructor method
         * @memberof Router
         * @method init
         * @param {object} options Settings for PushState
         * <ul>
         * <li>options.caching</li>
         * <li>options.proxy</li>
         * <li>options.proxy.domain</li>
         * <li>options.handle404</li>
         * <li>options.handle500</li>
         * <li>options.pushStateOptions</li>
         * </ul>
         *
         * @fires preget
         * @fires popget
         * @fires get
         *
         */
        init: function ( options ) {
            /**
             *
             * Router Store user options
             * @memberof Router
             * @member _options
             * @private
             *
             */
            this._options = {
                async: true,
                proxy: false,
                caching: true,
                handle404: true,
                handle500: true,
                pushStateOptions: {}
            };

            // Normalize usage options passed in
            options = (options || {});

            // Merge usage options with defaults
            for ( var i in options ) {
                this._options[ i ] = options[ i ];
            }

            /**
             *
             * Internal MatchRoute instance
             * @memberof Router
             * @member _matcher
             * @private
             *
             */
            this._matcher = new MatchRoute();

            /**
             *
             * Internal PushState instance
             * @memberof Router
             * @member _pusher
             * @private
             *
             */
            this._pusher = new PushState( this._options.pushStateOptions );

            /**
             *
             * Event handling callbacks
             * @memberof Router
             * @member _callbacks
             * @private
             *
             */
            this._callbacks = {};

            /**
             *
             * Stored XHR responses
             * @memberof Router
             * @member _responses
             * @private
             *
             */
            this._responses = {};

            /**
             *
             * Router unique ID
             * @memberof Router
             * @member _uid
             * @private
             *
             */
            this._uid = 0;

            /**
             *
             * Router is READY status ?
             * @memberof Router
             * @member _ready
             * @private
             *
             */
            this._ready = false;
        },

        /**
         *
         * Create PushState instance and add event listener
         * @memberof Router
         * @method bind
         *
         */
        bind: function () {
            var self = this,
                // Ensure this first cache URL is clean as a whistle
                url = window.location.href.replace( window.location.hash, "" );

            // Bind GET requests to links
            document.addEventListener( "click", function ( e ) {
                self._handleClick( this, e );

            }, false );

            // Bind popstate event for history
            this._pusher.on( "popstate", function ( url, state ) {
                self._handlePopstate( url, state );
            });

            // Fire first route
            // Async this in order to allow .get() to work after instantiation
            if ( this._options.async && this._options.handle404 ) {
                this._route( url, function ( response, status ) {
                    self._ready = true;
                });

            // Shim a little and bypass true XHR here if not handling 404s
            } else {
                setTimeout(function () {
                    // https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer
                    var doc = new XMLSerializer().serializeToString( document );
                    var xhr = {
                        status: 200,
                        responseText: doc
                    };

                    self._fire( "get", url, xhr, xhr.status );
                    self._cache( url, xhr );
                    self._ready = true;

                }, _initDelay );
            }
        },

        /**
         *
         * Add an event listener
         * Binding "beforeget" and "afterget" wraps the XHR request
         * @memberof Router
         * @method on
         * @param {string} event The event to bind to
         * @param {function} callback The function to call
         *
         */
        on: function ( event, callback ) {
            this._bind( event, callback );
        },

        /**
         *
         * Remove an event listener
         * @memberof Router
         * @method off
         * @param {string} event The event to unbind
         * @param {function} callback The function to reference
         *
         */
        off: function ( event, callback ) {
            this._unbind( event, callback );
        },

        /**
         *
         * Support router triggers by url
         * @memberof Router
         * @method trigger
         * @param {string} url The url to route to
         *
         */
        trigger: function ( url ) {
            if ( !_triggerEl ) {
                _triggerEl = document.createElement( "a" );
            }

            _triggerEl.href = url;

            this._handleClick( _triggerEl, {
                target: _triggerEl
            });
        },

        /**
         *
         * Bind a GET request route
         * @memberof Router
         * @method get
         * @param {string} route route to match
         * @param {function} callback function to call when route is requested
         *
         */
        get: function ( route, callback ) {
            // Add route to matcher
            this._matcher.config( [route] );

            // Bind the route to the callback
            if ( callback._routerRoutes ) {
                callback._routerRoutes.push( route );

            } else {
                callback._routerRoutes = [route];
            }

            // When binding multiple routes to a single
            // callback, we need to make sure the callbacks
            // routes array is updated above but the callback
            // only gets added to the list once.
            if ( callback._routerRoutes.length === 1 ) {
                this._bind( "get", callback );
            }
        },

        /**
         *
         * Get a sanitized route for a url
         * @memberof Router
         * @method getRouteForUrl
         * @param {string} url The url to use
         * @returns {string}
         *
         */
        getRouteForUrl: function ( url ) {
            return this._matcher._cleanRoute( url );
        },

        /**
         *
         * Get the match data for a url against the routes config
         * @memberof Router
         * @method getRouteDataForUrl
         * @param {string} url The url to use
         * @returns {object}
         *
         */
        getRouteDataForUrl: function ( url ) {
            return this._matcher.parse( url, this._matcher.getRoutes() ).params;
        },

        /**
         *
         * Get a unique ID
         * @memberof Router
         * @method getUID
         * @returns number
         *
         */
        getUID: function () {
            this._uid = (this._uid + 1);

            return this._uid;
        },

        /**
         * Compatible event preventDefault
         * @memberof Router
         * @method _preventDefault
         * @param {object} e The event object
         * @private
         *
         */
        _preventDefault: function ( e ) {
            if ( e.preventDefault ) {
                e.preventDefault();

            } else {
                e.returnValue = false;
            }
        },

        /**
         * GET click event handler
         * @memberof Router
         * @method _handleClick
         * @param {object} el The event context element
         * @param {object} e The event object
         * @private
         *
         * @fires get
         *
         */
        _handleClick: function ( el, e ) {
            var elem = (matchElement( el, "a", true ) || matchElement( e.target, "a", true )),
                isMatched = elem && this._matcher.test( elem.href ),
                isDomain = elem && this._rDomain.test( elem.href ),
                isProxy = elem && this._options.proxy && this._options.proxy.domain,
                isHashed = elem && elem.href.indexOf( "#" ) !== -1,
                isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1,
                isMetaKey = elem && e.metaKey,
                isBlank = elem && elem.target === "_blank",
                isFile = elem && isDomain && elem.href.match( this._rFiles );

            // 0.1 => Ensure url passes MatchRoute config
            // 0.2 => Ensure url is on the Document's Domain
            // 0.X => Allow proxy domain's to go through this checkpoint
            if ( (isMatched && isDomain) || isProxy ) {
                // 0.3 => Ensure url is not a #hash
                // 0.4 => Ensure the element does not contain a `js-router--ignore` className
                // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
                // 0.6 => Ensure the element target is not for a new tab
                // 0.7 => Ensure url is not a file link on the same document domain
                if ( !isHashed && !isIgnore && !isMetaKey && !isBlank && !isFile ) {
                    this._preventDefault( e );

                    if ( !this._isRouting ) {
                        this._route( elem.href );
                    }
                }
            }
        },

        /**
         * Handle history popstate event from PushState
         * @memberof Router
         * @method _handlePopstate
         * @param {string} url The url popped to
         * @param {object} state The PushState state object
         * @private
         *
         * @fires get
         *
         */
        _handlePopstate: function ( url, state ) {
            // Hook around browsers firing popstate on pageload
            if ( this._ready ) {
                for ( var i = this._callbacks.get.length; i--; ) {
                    var dat = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );

                    if ( dat.matched ) {
                        break;
                    }
                }

                data = {
                    route: this._matcher._cleanRoute( url ),
                    response: this._responses[ url ],
                    request: dat,
                    status: this._responses[ url ].status
                };

                this._fire( "popget", url, data );

            } else {
                this._ready = true;
            }
        },

        /**
         * Execute the route
         * @memberof Router
         * @method _route
         * @param {string} url The url in question
         * @param {function} callback Optional, fired with done
         * @private
         *
         */
        _route: function ( url, callback ) {
            var self = this,
                urls = {
                    // For XHR
                    request: url,

                    // For pushState and Cache
                    original: url
                };

            this._isRouting = true;

            this._matchUrl( urls.original );

            // Handle proxy first since we modify the request URL
            // Basically, just piece together a URL that swaps this domain with proxy domain
            if ( this._options.proxy && this._options.proxy.domain ) {
                // Use window.location.host so it includes port for localhost
                urls.request = (this._options.proxy.domain + "/" + urls.request.replace( this._rHTTPs, "" ));
            }

            this._getUrl( urls, function ( response, status ) {
                self._isRouting = false;

                // Push the URL to window History
                self._pusher.push( urls.original );

                // Fire event for routing
                self._fire( "get", urls.original, response, status );

                if ( typeof callback === "function" ) {
                    callback( response, status );
                }
            });
        },

        /**
         * Match a URL and fire "preget"
         * @memberof Router
         * @method _matchUrl
         * @param {string} url The url in question
         * @private
         *
         */
        _matchUrl: function ( url ) {
            if ( !this._ready ) {
                return;
            }

            for ( var i = this._callbacks.get.length; i--; ) {
                var data = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );

                if ( data.matched ) {
                    this._fire( "preget", url, data );
                    break;
                }
            }
        },

        /**
         *
         * Request a url with an XMLHttpRequest
         * @memberof Router
         * @method _getUrl
         * @param {object} urls The urls to request / push / cache
         * @param {function} callback The function to call when done
         * @private
         *
         */
        _getUrl: function ( urls, callback ) {
            var handler = function ( res, stat ) {
                    try {
                        // Cache if option enabled
                        self._cache( urls.original, res );

                        if ( typeof callback === "function" ) {
                            callback( res, stat );
                        }

                    } catch ( error ) {}
                },
                xhr = null,
                self = this;

            // Cached response ?
            if ( this._responses[ urls.original ] ) {
                handler( this._responses[ urls.original ], this._responses[ urls.original ].status );

            // Fresh request ?
            } else if ( this._options.async ) {
                xhr = new XMLHttpRequest();

                xhr.open( "GET", urls.request, true );

                xhr.onreadystatechange = function ( e ) {
                    if ( this.readyState === 4 ) {
                        if ( this.status === 200 ) {
                            handler( this, 200 );

                        } else if ( this.status === 404 && self._options.handle404 ) {
                            handler( this, 404 );

                        } else if ( this.status === 500 && self._options.handle500 ) {
                            handler( this, 500 );
                        }
                    }
                };

                xhr.send();

            } else {
                handler( { responseText: "" }, 200 );
            }
        },

        /**
         *
         * Cache an XHR response object
         * @memberof Router
         * @method _cache
         * @param {string} url The url to cache for
         * @param {object} res The XHR object
         * @private
         *
         */
        _cache: function ( url, res ) {
            // Caching is enabled, Not currently cached yet
            if ( this._options.caching && !this._responses[ url ] ) {
                this._responses[ url ] = res;
            }
        },

        /**
         *
         * Bind an event to a callback
         * @memberof Router
         * @method _bind
         * @param {string} event what to bind on
         * @param {function} callback fired on event
         * @private
         *
         */
        _bind: function ( event, callback ) {
            if ( typeof callback === "function" ) {
                if ( !this._callbacks[ event ] ) {
                    this._callbacks[ event ] = [];
                }

                callback._jsRouterID = this.getUID();

                this._callbacks[ event ].push( callback );
            }
        },

        /**
         *
         * Unbind an event to a callback(s)
         * @memberof Router
         * @method _bind
         * @param {string} event what to bind on
         * @param {function} callback fired on event
         * @private
         *
         */
        _unbind: function ( event, callback ) {
            if ( !this._callbacks[ event ] ) {
                return this;
            }

            // Remove a single callback
            if ( callback ) {
                for ( var i = 0, len = this._callbacks[ event ].length; i < len; i++ ) {
                    if ( callback._jsRouterID === this._callbacks[ event ][ i ]._jsRouterID ) {
                        this._callbacks[ event ].splice( i, 1 );

                        break;
                    }
                }

            // Remove all callbacks for event
            } else {
                for ( var j = this._callbacks[ event ].length; j--; ) {
                    this._callbacks[ event ][ j ] = null;
                }

                delete this._callbacks[ event ];
            }
        },

        /**
         *
         * Fire an event to a callback
         * @memberof Router
         * @method _fire
         * @param {string} event what to bind on
         * @param {string} url fired on event
         * @param {string} response html from responseText
         * @param {number} status The request status
         * @private
         *
         */
        _fire: function ( event, url, response, status ) {
            var i;

            // GET events have routes and are special ;-P
            if ( event === "get" ) {
                for ( i = this._callbacks[ event ].length; i--; ) {
                    var data = this._matcher.parse( url, this._callbacks[ event ][ i ]._routerRoutes );

                    if ( data.matched ) {
                        this._callbacks[ event ][ i ].call( this, {
                            route: this._matcher._cleanRoute( url ),
                            response: response,
                            request: data,
                            status: status
                        });
                    }
                }

            // Fires basic timing events "preget", "popget"
            } else if ( this._callbacks[ event ] ) {
                for ( i = this._callbacks[ event ].length; i--; ) {
                    this._callbacks[ event ][ i ].call( this, response );
                }
            }
        }
    };


    return Router;

});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Handles history pushstate/popstate with async option
 * If history is not supported, falls back to hashbang!
 *
 * @PushState
 * @author: kitajchuk
 *
 */
(function ( factory ) {

    if ( true ) {
        module.exports = factory();

    } else {}

})(function () {

    /**
     *
     * A simple pushState Class
     * @constructor PushState
     * @memberof! <global>
     *
     */
    var PushState = function () {
        return this.init.apply( this, arguments );
    };

    PushState.prototype = {
        constructor: PushState,

        /**
         *
         * Flag whether pushState is enabled
         * @memberof PushState
         * @member _pushable
         * @private
         *
         */
        _pushable: ("history" in window && "pushState" in window.history),

        /**
         *
         * Fallback to hashchange if needed. Support:
         * <ul>
         * <li>Internet Explorer 8</li>
         * <li>Firefox 3.6</li>
         * <li>Chrome 5</li>
         * <li>Safari 5</li>
         * <li>Opera 10.6</li>
         * </ul>
         * @memberof PushState
         * @member _hashable
         * @private
         *
         */
        _hashable: ("onhashchange" in window),

        /**
         *
         * PushState init constructor method
         * @memberof PushState
         * @method PushState.init
         * @param {object} options Settings for PushState
         * <ul>
         * <li>options.forceHash</li>
         * </ul>
         *
         * @fires backstate
         * @fires forwardstate
         * @fires popstate
         *
         */
        init: function ( options ) {
            /**
             *
             * Ensure this first cache URL is clean as a whistle
             * @memberof PushState
             * @member _initUrl
             * @private
             *
             */
            this._initUrl = window.location.href.replace( window.location.hash, "" );

            /**
             *
             * User options for usage
             * @memberof PushState
             * @member _options
             * @private
             *
             */
            this._options = (options || {});

            /**
             *
             * Flag whether state is enabled
             * @memberof PushState
             * @member _enabled
             * @private
             *
             */
            this._enabled = false;

            /**
             *
             * Flag when hash is changed by PushState
             * This allows appropriate replication of popstate
             * @memberof PushState
             * @member _ishashpushed
             * @private
             *
             */
            this._ishashpushed = false;;

            /**
             *
             * Unique ID ticker
             * @memberof PushState
             * @member _uid
             * @private
             *
             */
            this._uid = 0;

            /**
             *
             * Stored state objects
             * @memberof PushState
             * @member _states
             * @private
             *
             */
            this._states = {};

            /**
             *
             * Event callbacks
             * @memberof PushState
             * @member _callbacks
             * @private
             *
             */
            this._callbacks = {};

            // Set initial state
            this._states[ this._initUrl ] = {
                uid: this.getUID()
            };

            // Enable popstate management
            this._stateEnable();
        },

        /**
         *
         * Bind a callback to an event
         * @memberof PushState
         * @method on
         * @param {string} event The event to bind to
         * @param {function} callback The function to call
         *
         */
        on: function ( event, callback ) {
            if ( typeof callback === "function" ) {
                if ( !this._callbacks[ event ] ) {
                    this._callbacks[ event ] = [];
                }

                callback._pushstateID = this.getUID();
                callback._pushstateType = event;

                this._callbacks[ event ].push( callback );
            }
        },

        /**
         *
         * Unbind a callback to an event
         * @memberof PushState
         * @method off
         * @param {string} event The event that was bound
         * @param {function} callback The function to remove
         *
         */
        off: function ( event, callback ) {
            if ( this._callbacks[ event ] ) {
                for ( var i = this._callbacks[ event ].length; i--; ) {
                    if ( this._callbacks[ event ][ i ]._pushstateID === callback._pushstateID ) {
                        this._callbacks[ event ].splice( i, 1 );
                        break;
                    }
                }
            }
        },

        /**
         *
         * Push onto the History state
         * @memberof PushState
         * @method push
         * @param {string} url address to push to history
         *
         */
        push: function ( url ) {
            // Dont push current URL
            if ( url === window.location.href ) {
                return;
            }

            this._push( url );

            this._states[ url ] = {
                uid: this.getUID()
            };
        },

        /**
         *
         * Manually go back in history state
         * @memberof PushState
         * @method goBack
         *
         * @fires backstate
         *
         */
        goBack: function () {
            window.history.back();

            this._fire( "backstate" );
        },

        /**
         *
         * Manually go forward in history state
         * @memberof PushState
         * @method goForward
         *
         * @fires forwardstate
         *
         */
        goForward: function () {
            window.history.forward();

            this._fire( "forwardstate" );
        },

        /**
         *
         * Get a unique ID
         * @memberof PushState
         * @method getUID
         * @returns number
         *
         */
        getUID: function () {
            this._uid = (this._uid + 1);

            return this._uid;
        },

        /**
         *
         * Calls window.history.pushState
         * @memberof PushState
         * @method _push
         * @param {string} url The url to push
         * @private
         *
         */
        _push: function ( url ) {
            if ( this._pushable && !this._options.forceHash ) {
                window.history.pushState( this._states[ url ], "", url );

            } else {
                // This replace ensures we get the following:
                // "/":         root
                // "/foo/bar/": uri path
                var hashUri = url.replace( window.location.origin, "" );

                // Fix for root hash uri.
                // Ensure we dont get the following:
                // "/foo/bar/#/foo/bar/"
                // Rather we would get the following:
                // "/foo/bar/#/"
                if ( hashUri === window.location.pathname ) {
                    hashUri = "/";
                }

                this._ishashpushed = true;

                window.location.hash = hashUri;
            }
        },

        /**
         *
         * Fire an events callbacks
         * @memberof PushState
         * @method _fire
         * @param {string} event The event to fire
         * @param {string} url The current url
         * @private
         *
         */
        _fire: function ( event, url ) {
            if ( this._callbacks[ event ] ) {
                for ( var i = this._callbacks[ event ].length; i--; ) {
                    this._callbacks[ event ][ i ].apply( this, [].slice.call( arguments, 1 ) );
                }
            }
        },

        /**
         *
         * Bind this instances state handler
         * @memberof PushState
         * @method _stateEnabled
         * @private
         *
         * @fires popstate
         *
         */
        _stateEnable: function () {
            if ( this._enabled ) {
                return this;
            }

            var self = this,
                handler = function () {
                    var url = window.location.href,
                        roots = ["#/", "#", ""];

                    // Ensure we clean out the hash for Router
                    // Example:
                    // Start:  http://localhost/foo/#/bar/
                    // Result: http://localhost/foo/bar/
                    if ( self._options.forceHash ) {
                        // Shave the hash from the end of the URL
                        url = url.replace( window.location.hash, "" );

                        // Shave the hash root from the end of the URL
                        url = url.replace( window.location.pathname, "" );

                        // Empty hash means we have gone back to root
                        if ( roots.indexOf( window.location.hash ) !== -1 ) {
                            // Append the hash root to the URL
                            url = (url + window.location.pathname);

                        } else {
                            // Append the applied hash pathname to the URL
                            url = (url + window.location.hash.replace( "#", "" ));
                        }
                    }

                    self._fire( "popstate", url, self._states[ url ] );
                };

            this._enabled = true;

            if ( this._pushable && !this._options.forceHash ) {
                window.addEventListener( "popstate", function ( e ) {
                    handler();

                }, false );

            } else if ( this._hashable ) {
                // For hashstate we should apply initial hash on page load
                this._push( this._initUrl );

                window.addEventListener( "hashchange", function ( e ) {
                    if ( !self._ishashpushed ) {
                        handler();

                    } else {
                        self._ishashpushed = false;
                    }

                }, false );
            }
        }
    };

    return PushState;

});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Handles wildcard route matching against urls with !num and !slug condition testing
 *
 * @MatchRoute
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {

    var paramalama = __webpack_require__( 56 ),

    /**
     *
     * Handles wildcard route matching against urls with !num and !slug condition testing
     * <ul>
     * <li>route = "/some/random/path/:myvar"</li>
     * <li>route = "/some/random/path/:myvar!num"</li>
     * <li>route = "/some/random/path/:myvar!slug"</li>
     * </ul>
     * @constructor MatchRoute
     * @memberof! <global>
     * @requires paramalama
     *
     */
    MatchRoute = function () {
        return this.init.apply( this, arguments );
    };
    
    MatchRoute.prototype = {
        constructor: MatchRoute,
        
        /**
         *
         * Expression match http/https
         * @memberof MatchRoute
         * @member _rHTTPs
         * @private
         *
         */
        _rHTTPs: /^http[s]?:\/\/.*?\//,
        
        /**
         *
         * Expression match trail slashes
         * @memberof MatchRoute
         * @member _rTrails
         * @private
         *
         */
        _rTrails: /^\/|\/$/g,
        
        /**
         *
         * Expression match hashbang/querystring
         * @memberof MatchRoute
         * @member _rHashQuery
         * @private
         *
         */
        _rHashQuery: /#.*$|\?.*$/g,
        
        /**
         *
         * Expression match wildcards
         * @memberof MatchRoute
         * @member _rWild
         * @private
         *
         */
        _rWild: /^:/,
        
        /**
         *
         * Expressions to match wildcards with supported conditions
         * @memberof MatchRoute
         * @member _wilders
         * @private
         *
         */
        _wilders: {
            num: /^[0-9]+$/,
            slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/
        },
        
        
        /**
         *
         * MatchRoute init constructor method
         * @memberof MatchRoute
         * @method init
         * @param {array} routes Config routes can be passed on instantiation
         *
         */
        init: function ( routes ) {
            /**
             *
             * The routes config array
             * @memberof MatchRoute
             * @member _routes
             * @private
             *
             */
            this._routes = ( routes ) ? this._cleanRoutes( routes ) : [];
        },
    
        /**
         *
         * Get the internal route array
         * @memberof MatchRoute
         * @method MatchRoute.getRoutes
         * @returns {array}
         *
         */
        getRoutes: function () {
            return this._routes;
        },
        
        /**
         *
         * Update routes config array
         * @memberof MatchRoute
         * @method config
         * @param {array} routes to match against
         *
         */
        config: function ( routes ) {
            // Force array on routes
            routes = ( typeof routes === "string" ) ? [ routes ] : routes;
    
            this._routes = this._routes.concat( this._cleanRoutes( routes ) );
            
            return this;
        },
        
        /**
         *
         * Test a url against a routes config for match validation
         * @memberof MatchRoute
         * @method test
         * @param {string} url to test against routes
         * @returns True or False
         *
         */
        test: function ( url ) {
            return this.parse( url, this._routes ).matched;
        },
        
        /**
         *
         * Match a url against a routes config for matches
         * @memberof MatchRoute
         * @method params
         * @param {string} url to test against routes
         * @returns Array of matching routes
         *
         */
        params: function ( url ) {
            return this.parse( url, this._routes ).params;
        },
        
        /**
         *
         * Compare a url against a specific route
         * @memberof MatchRoute
         * @method compare
         * @param {string} route compare route
         * @param {string} url compare url
         * @returns MatchRoute.parse()
         *
         */
        compare: function ( route, url ) {
            return this.parse( url, [route] );
        },
        
        /**
         *
         * Parse a url for matches against config array
         * @memberof MatchRoute
         * @method parse
         * @param {string} url to test against routes
         * @param {array} routes The routes to test against
         * @returns Object witch match bool and matches array
         *
         */
        parse: function ( url, routes ) {
            var segMatches,
                isStar,
                params,
                match,
                route = this._cleanRoute( url ),
                ruris,
                regex,
                cond,
                uris = route.split( "/" ),
                uLen = uris.length,
                iLen = routes.length,
                ret;
            
            for ( var i = 0; i < iLen; i++ ) {
                // Flag "*" route
                isStar = (routes[ i ] === "*");
                
                // Start fresh each iteration
                // Only one matched route allowed
                ret = {
                    matched: false,
                    route: null,
                    uri: [],
                    params: {},
                    query: paramalama( url )
                };
                
                ruris = routes[ i ].split( "/" );
                
                // Handle route === "/"
                if ( route === "/" && routes[ i ] === "/" ) {
                    ret.matched = true;
                    ret.route = routes[ i ];
                    ret.uri = "/";
                    
                    break;
                }
                
                // If the actual url doesn't match the route in segment length,
                // it cannot possibly be considered for matching so just skip it
                if ( ruris.length !== uris.length && !isStar ) {
                    continue;
                }
                
                segMatches = 0;
                
                for ( var j = 0; j < uLen; j++ ) {
                    // Matched a variable uri segment
                    if ( this._rWild.test( ruris[ j ] ) ) {
                        // Try to split on conditions
                        params = ruris[ j ].split( "!" );
                        
                        // The variable segment
                        match = params[ 0 ];
                        
                        // The match condition
                        cond = params[ 1 ];
                        
                        // With conditions
                        if ( cond ) {
                            // We support this condition
                            if ( this._wilders[ cond ] ) {
                                regex = this._wilders[ cond ];
                            }
                            
                            // Test against the condition
                            if ( regex && regex.test( uris[ j ] ) ) {
                                segMatches++;
                                
                                // Add the match to the config data
                                ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
                                ret.uri.push( uris[ j ] );
                            }
                        
                        // No conditions, anything goes   
                        } else {
                            segMatches++;
                            
                            // Add the match to the config data
                            ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
                            ret.uri.push( uris[ j ] );
                        }
                    
                    // Defined segment always goes   
                    } else {
                        if ( uris[ j ] === ruris[ j ] ) {
                            segMatches++;
                            
                            ret.uri.push( uris[ j ] );
                        }
                    }
                }
                
                // Handle a uri segment match OR "*" wildcard everything
                if ( segMatches === uris.length || isStar ) {
                    ret.matched = true;
                    ret.route = routes[ i ];
                    ret.uri = ( isStar ) ? route : ret.uri.join( "/" );
                    
                    break;
                }
            }
            
            return ret;
        },
        
        /**
         *
         * Clean a route string
         * If the route === "/" then it is returned as is
         * @memberof MatchRoute
         * @method _cleanRoute
         * @param {string} route the route to clean
         * @returns cleaned route string
         * @private
         *
         */
        _cleanRoute: function ( route ) {
            if ( route !== "/" ) {
                route = route.replace( this._rHTTPs, "" );
                route = route.replace( this._rTrails, "" );
                route = route.replace( this._rHashQuery, "" );
                route = route.replace( this._rTrails, "" );
            }
            
            if ( route === "" ) {
                route = "/";
            }
            
            return route;
        },
        
        /**
         *
         * Clean an array of route strings
         * @memberof MatchRoute
         * @method _cleanRoutes
         * @param {array} routes the routes to clean
         * @returns cleaned routes array
         * @private
         *
         */
        _cleanRoutes: function ( routes ) {
            for ( var i = routes.length; i--; ) {
                routes[ i ] = this._cleanRoute( routes[ i ] );
            }
            
            return routes;
        }
    };
    
    
    return MatchRoute;


});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Parse query string into object literal representation
 *
 * @compat: jQuery, Ender, Zepto
 * @author: @kitajchuk
 *
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {
    
    var paramalama = function ( str ) {
        var query = decodeURIComponent( str ).match( /[#|?].*$/g ),
            ret = {};
        
        if ( query ) {
            query = query[ 0 ].replace( /^\?|^#|^\/|\/$|\[|\]/g, "" );
            query = query.split( "&" );
            
            for ( var i = query.length; i--; ) {
                var pair = query[ i ].split( "=" ),
                    key = pair[ 0 ],
                    val = pair[ 1 ];
                
                if ( ret[ key ] ) {
                    // #2 https://github.com/kitajchuk/paramalama/issues/2
                    // This supposedly will work as of ECMA-262
                    // This works since we are not passing objects across frame boundaries
                    // and we are not considering Array-like objects. This WILL be an Array.
                    if ( {}.toString.call( ret[ key ] ) !== "[object Array]" ) {
                        ret[ key ] = [ ret[ key ] ];
                    }
                    
                    ret[ key ].push( val );
                    
                } else {
                    ret[ key ] = val;
                }
            }
        }
        
        return ret;
    };
    
    if ( typeof $ !== "undefined" ) {
        $.paramalama = paramalama;
    }

    return paramalama;
    
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Use native element selector matching
 *
 * @matchElement
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {

    /**
     *
     * Use native element selector matching
     * @memberof! <global>
     * @method matchElement
     * @param {object} el the element
     * @param {string} selector the selector to match
     * @param {boolean} walk should we walk the tree if el is not a match?
     * @returns element OR null
     *
     */
    var matchElement = function ( el, selector, walk ) {
        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
                                      "oMatchesSelector" : null;

        // Try testing the element against the selector
        // 0.1 => Method is not undefined
        // 0.2 => Element passes method call
        if ( method && el[ method ].call( el, selector ) ) {
            return el;

        // Keep walking up the DOM if we can - only if `walk` flag is `true`
        } else if ( walk && el !== document.documentElement && el.parentNode ) {
            return matchElement( el.parentNode, selector, walk );

        // Otherwise we should not execute an event
        } else {
            return null;
        }
    };


    return matchElement;

});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _BaseController = __webpack_require__(59);

var _BaseController2 = _interopRequireDefault(_BaseController);

var _Newsletter = __webpack_require__(60);

var _Newsletter2 = _interopRequireDefault(_Newsletter);

var _Search = __webpack_require__(64);

var _Search2 = _interopRequireDefault(_Search);

var _Video = __webpack_require__(69);

var _Video2 = _interopRequireDefault(_Video);

var _Annotation = __webpack_require__(76);

var _Annotation2 = _interopRequireDefault(_Annotation);

var _Audio = __webpack_require__(78);

var _Audio2 = _interopRequireDefault(_Audio);

var _Story = __webpack_require__(83);

var _Story2 = _interopRequireDefault(_Story);

var _CTA = __webpack_require__(85);

var _CTA2 = _interopRequireDefault(_CTA);

var _Slider = __webpack_require__(87);

var _Slider2 = _interopRequireDefault(_Slider);

var _Commerce = __webpack_require__(100);

var _Commerce2 = _interopRequireDefault(_Commerce);

var _Issue = __webpack_require__(105);

var _Issue2 = _interopRequireDefault(_Issue);

var _Cover = __webpack_require__(107);

var _Cover2 = _interopRequireDefault(_Cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Controllers
 * @classdesc Handle controller functions.
 * @param {object} options Optional config
 *
 */
var Controllers = function () {
    function Controllers(options) {
        _classCallCheck(this, Controllers);

        this.element = options.el;
        this.callback = options.cb;
        this.controllers = [];
    }

    _createClass(Controllers, [{
        key: "push",
        value: function push(id, elements, controller, component) {
            this.controllers.push({
                id: id,
                elements: elements,
                instance: null,
                Controller: controller,
                component: component
            });
        }
    }, {
        key: "init",
        value: function init() {
            this.controllers.forEach(function (controller) {
                if (controller.elements.length) {
                    controller.instance = new controller.Controller(controller.elements, controller.component);
                }
            });
        }
    }, {
        key: "kill",
        value: function kill() {
            this.controllers.forEach(function (controller) {
                if (controller.instance) {
                    controller.instance.destroy();
                }
            });

            this.controllers = [];
        }
    }, {
        key: "exec",
        value: function exec() {
            this.controllers = [];

            this.push("cover", this.element.find(".js-cover"), _BaseController2.default, _Cover2.default);
            this.push("issue", this.element.find(".js-issue"), _BaseController2.default, _Issue2.default);
            this.push("newsletter", this.element.find(".js-newsletter"), _BaseController2.default, _Newsletter2.default);
            this.push("search", this.element.find(".js-search"), _BaseController2.default, _Search2.default);
            this.push("audio", this.element.find(".js-audio"), _BaseController2.default, _Audio2.default);
            this.push("story", this.element.find(".js-story"), _BaseController2.default, _Story2.default);
            this.push("cta", this.element.find(".js-button_"), _BaseController2.default, _CTA2.default);
            this.push("slider", this.element.find(".js-slider"), _BaseController2.default, _Slider2.default);
            this.push("commerce", this.element.find(".js-shop, .js-product, #sqs-cart-root"), _BaseController2.default, _Commerce2.default);

            // Hinge on Squarespace selectors...
            this.push("video", this.element.find(".sqs-block-video"), _BaseController2.default, _Video2.default);
            this.push("annotation", this.element.find(".sqs-layout > .sqs-row > .col > .sqs-row > .col:nth-child(1) > .sqs-block-html:nth-child(1) > .sqs-block-content > blockquote:nth-child(1)"), _BaseController2.default, _Annotation2.default);

            this.init();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            core.emitter.off("app--resize", this.__appResize);

            this.kill();
        }
    }]);

    return Controllers;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Controllers;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @class BaseController
 * @param {Hobo} element The module element
 * @classdesc Handles basic module instantiation
 *
 */
var BaseController = function () {
    function BaseController(elements, component) {
        _classCallCheck(this, BaseController);

        this.elements = elements;
        this.component = component;
        this.instances = [];

        this.init();
    }

    _createClass(BaseController, [{
        key: "init",
        value: function init() {
            var _this = this;

            this.elements.forEach(function (el, i) {
                var elem = _this.elements.eq(i);
                var data = elem.data();

                _this.instances.push(new _this.component(elem, data, i));
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.instances.forEach(function (instance) {
                instance.destroy();
                instance = null;
            });
        }
    }]);

    return BaseController;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = BaseController;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _newsletter = __webpack_require__(61);

var _newsletter2 = _interopRequireDefault(_newsletter);

var _properjsDebounce = __webpack_require__(63);

var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Newsletter = function () {
    function Newsletter(element) {
        var _this = this;

        _classCallCheck(this, Newsletter);

        this.element = element;
        this.script = this.element.find("script").detach();
        this.blockJson = JSON.parse(this.script[0].textContent);
        this.pageId = "5cafe53bb208fcfd8dc661dd";
        this.data = {};
        this.waiting = 300;
        this.validators = {
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };

        this.load().then(function () {
            _this.bind();
        });
    }

    _createClass(Newsletter, [{
        key: "load",
        value: function load() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.element[0].innerHTML = (0, _newsletter2.default)(_this2);
                _this2.field = _this2.element.find(".js-newsletter-field");
                _this2.button = _this2.element.find(".js-newsletter-btn");
                resolve();
            });
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this3 = this;

            this.button.on("click", function () {
                if (_this3.validators.email.test(_this3.field[0].value)) {
                    _this3.gather();
                    _this3.send();
                } else {
                    _this3.alert = new window.Y.Squarespace.Widgets.Alert({
                        "strings.title": "Deem Journal",
                        "strings.message": "Please fill out a valid and complete Email Address."
                    });
                }
            });

            this.field.on("keyup", (0, _properjsDebounce2.default)(function () {
                if (!_this3.field[0].value) {
                    _this3.field.removeClass("is-invalid");
                    _this3.element.removeClass("is-valid");
                } else if (_this3.validators.email.test(_this3.field[0].value)) {
                    _this3.field.removeClass("is-invalid");
                    _this3.element.addClass("is-valid");
                } else {
                    _this3.field.addClass("is-invalid");
                    _this3.element.removeClass("is-valid");
                }
            }, this.waiting));
        }
    }, {
        key: "clear",
        value: function clear() {
            this.data = {};
            this.field.removeClass("is-error");
            this.field[0].value = "";
        }
    }, {
        key: "reset",
        value: function reset() {
            this.element.removeClass("is-success is-sending");
        }
    }, {
        key: "getKey",
        value: function getKey() {
            return _properjsHobo2.default.ajax({
                url: "/api/form/FormSubmissionKey",
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                dataType: "json"
            });
        }
    }, {
        key: "sendForm",
        value: function sendForm(key) {
            return _properjsHobo2.default.ajax({
                url: "/api/form/SaveFormSubmission",
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                dataType: "html",
                payload: {
                    collectionId: "",
                    contentSource: "c",
                    form: JSON.stringify(this.data),
                    formId: this.blockJson.formId,
                    key: key,
                    objectName: this.blockJson.objectName,
                    pageId: this.pageId,
                    pagePath: window.location.pathname,
                    pageTitle: document.title
                }
            });
        }
    }, {
        key: "gather",
        value: function gather() {
            this.data = {};
            this.data[this.field[0].name] = this.field[0].value;
        }
    }, {
        key: "handle",
        value: function handle(response) {
            this.element.removeClass("is-sending");

            try {
                response = JSON.parse(response);
            } catch (parseError) {
                core.log("warn", parseError);
            }

            if ((typeof response === "undefined" ? "undefined" : _typeof(response)) === "object" && response.errors) {
                for (var i in response.errors) {
                    if (response.errors.hasOwnProperty(i)) {
                        this.field.addClass("is-error");
                    }
                }
            } else {
                this.element.addClass("is-success");
            }
        }
    }, {
        key: "send",
        value: function send() {
            var _this4 = this;

            this.field.removeClass("is-error");
            this.element.addClass("is-sending");
            this.getKey().then(function (json) {
                _this4.sendForm(json.key).then(function (response) {
                    _this4.handle(response);
                }).catch(function (response) {
                    _this4.handle(response);
                });
            }).catch(function () {});
        }
    }, {
        key: "destroy",
        value: function destroy() {}
    }]);

    return Newsletter;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Newsletter;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (instance) {
    var blockJson = instance.blockJson;
    var svgRight = __webpack_require__(62);
    var placeHolder = (0, _properjsHobo2.default)(blockJson.description.html);
    var emailField = blockJson.form.parsedFields.find(function (field) {
        return field.type === "email";
    });

    return "\n        <div class=\"newsletter__label\">\n            <h5>" + blockJson.title + "</h5>\n        </div>\n        <div class=\"newsletter__form -exp\">\n            <div class=\"newsletter__entry\">\n                <input type=\"email\" class=\"newsletter__input inp js-newsletter-field\" name=\"" + emailField.id + "\" placeholder=\"" + placeHolder[0].innerText + "\" />\n                <button class=\"newsletter__btn js-newsletter-btn btn\">\n                    " + svgRight + "\n                </button>\n            </div>\n            <div class=\"newsletter__loading\">\n                <div class=\"lds-ellipsis\"><div></div></div>\n            </div>\n            <div class=\"newsletter__success\">\n                <p>" + blockJson.form.parsedSubmissionMessage.html + "</p>\n            </div>\n        </div>\n    ";
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--right\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 23\" style=\"enable-background:new 0 0 28 23;\"><path d=\"M27.5,10.4C27.5,10.4,27.5,10.4,27.5,10.4l-9.9-9.9c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l7.4,7.4H1.5C0.7,10,0,10.7,0,11.5S0.7,13,1.5,13h21.4l-7.4,7.4c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l9.9-9.9c0,0,0-0.1,0.1-0.1c0.3-0.3,0.4-0.6,0.4-1C28,11.1,27.8,10.7,27.5,10.4z\"></path></svg>"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 *
 * Debounce methods
 * Sourced from here:
 * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 *
 * @debounce
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( true ) {
        module.exports = factory();

    } else {}
    
})(function () {


    /**
     *
     * Limit method calls
     * @memberof! <global>
     * @method debounce
     * @param {function} callback The method handler
     * @param {number} threshold The timeout delay in ms
     * @param {boolean} execAsap Call function at beginning or end of detection period
     *
     */
    var debounce = function ( callback, threshold, execAsap ) {
        var timeout = null;
        
        return function debounced() {
            var args = arguments,
                context = this;
            
            function delayed() {
                if ( !execAsap ) {
                    callback.apply( context, args );
                }
                
                timeout = null;
            }
            
            if ( timeout ) {
                clearTimeout( timeout );
                
            } else if ( execAsap ) {
                callback.apply( context, args );
            }
            
            timeout = setTimeout( delayed, (threshold || 100) );
        };
    };
    
    
    return debounce;


});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _search = __webpack_require__(65);

var _search2 = _interopRequireDefault(_search);

var _searchTags = __webpack_require__(66);

var _searchTags2 = _interopRequireDefault(_searchTags);

var _searchResults = __webpack_require__(67);

var _searchResults2 = _interopRequireDefault(_searchResults);

var _Store = __webpack_require__(49);

var _Store2 = _interopRequireDefault(_Store);

var _properjsDebounce = __webpack_require__(63);

var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);

var _ImageController = __webpack_require__(68);

var _ImageController2 = _interopRequireDefault(_ImageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _searchBlock = core.dom.body.find(".js-search-block").detach();
var _searchScript = _searchBlock.find("script");
var _blockJson = JSON.parse(_searchScript[0].textContent);

var Search = function () {
    function Search(element, data) {
        var _this = this;

        _classCallCheck(this, Search);

        this.element = element;
        this.parent = this.element.parent();
        this.elemData = data;
        this.blockJson = _blockJson;
        this.element.data("instance", this);
        this.placeholders = {
            default: "Start typing to search",
            mobile: "Search"
        };
        this.data = {};
        this.ajax = null;
        this.waiting = 300;
        this.isFetch = false;
        this.isTag = false;

        this.load().then(function () {
            _this.bind();

            if (_this.elemData.results) {
                _this.bindResults();
            }
        });
    }

    _createClass(Search, [{
        key: "load",
        value: function load() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.element[0].innerHTML = (0, _search2.default)(_this2);
                _this2.search = _this2.element.find(".js-search-field");
                _this2.button = _this2.element.find(".js-search-btn");
                _this2.doResize();
                _this2.fetchTags();
                resolve();
            });
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this3 = this;

            this.button.on("click", function () {
                _this3.clear();

                if (_this3.isTag) {
                    _this3.clearTagged();
                }
            });

            this.search.on("keyup", function () {
                if (_this3.search[0].value) {
                    _this3.button.addClass("is-active");
                    _this3.parent.addClass("is-keytext");
                } else {
                    _this3.button.removeClass("is-active");
                    _this3.parent.removeClass("is-keytext");
                }
            });

            this.__appResize = this.doResize.bind(this);

            core.emitter.on("app--resize", this.__appResize);
        }
    }, {
        key: "bindResults",
        value: function bindResults() {
            var _this4 = this;

            this.results = this.parent.find(this.elemData.results);
            this.loader = this.results.find(".js-search-loader");
            this.display = this.results.find(".js-search-display");

            this.button.on("click", function () {
                _this4.emptyResults();
            });

            this.search.on("keyup", (0, _properjsDebounce2.default)(function () {
                // Abort existing request to start anew
                if (_this4.isFetch) {
                    _this4.ajax.abort();
                    _this4.isFetch = false;
                    _this4.fetch();

                    // Make a clean request starting from scratch
                } else if (!_this4.isFetch && _this4.search[0].value) {
                    _this4.fetch();
                }
            }, this.waiting));
        }
    }, {
        key: "bindTags",
        value: function bindTags() {
            var _this5 = this;

            this.tagsEl.on("click", ".js-tag", function (e) {
                var tag = (0, _properjsHobo2.default)(e.target);
                var data = tag.data();

                _this5.clear();
                _this5.search[0].placeholder = data.tag;
                _this5.search[0].blur();
                _this5.search[0].disabled = true;
                _this5.search.addClass("is-tagged");
                _this5.fetchTag(data.tag);
                _this5.parent.addClass("is-tagged");
                _this5.button.addClass("is-active");
                _this5.isTag = true;
            });
        }
    }, {
        key: "doResize",
        value: function doResize() {
            if (window.innerWidth <= core.config.mobileMediaHack) {
                this.search[0].placeholder = this.placeholders.mobile;
            } else {
                this.search[0].placeholder = this.placeholders.default;
            }
        }
    }, {
        key: "emptyResults",
        value: function emptyResults() {
            this.display.find(".js-search-grid").removeClass("is-active");
            this.display[0].innerHTML = "";
        }
    }, {
        key: "displayResults",
        value: function displayResults(json) {
            var _this6 = this;

            this.display[0].innerHTML = (0, _searchResults2.default)(json || { items: [] });
            this.imageController = new _ImageController2.default(this.display.find(core.config.lazyImageSelector));
            this.imageController.on("preloaded", function () {
                _this6.display.find(".js-search-grid").addClass("is-active");
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            this.search[0].blur();
            this.search[0].value = "";
            this.clearTagged();
            this.emptyResults();
            this.button.removeClass("is-active");
            this.loader.removeClass("is-active");
            this.tags.removeClass("is-active");
        }
    }, {
        key: "clear",
        value: function clear() {
            this.search[0].value = "";
            this.search[0].focus();
            this.button.removeClass("is-active");
            this.parent.removeClass("is-keytext");
            this.search.removeClass("is-tagged");
            this.parent.removeClass("is-tagged");
        }
    }, {
        key: "clearTagged",
        value: function clearTagged() {
            this.isTag = false;
            this.search[0].disabled = false;
            this.search.removeClass("is-tagged");
            this.parent.removeClass("is-tagged");
            this.doResize();
        }
    }, {
        key: "fetchTags",
        value: function fetchTags() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                _properjsHobo2.default.ajax({
                    url: "/stories/",
                    method: "GET",
                    dataType: "json",
                    data: {
                        format: "json"
                    }
                }).then(function (response) {
                    resolve(response);
                    _this7.filters = _this7.parent.find(".js-search-filters");
                    _this7.filters[0].innerHTML = (0, _searchTags2.default)(response);
                    _this7.tagsEl = _this7.filters.find(".js-tags");
                    _this7.tags = _this7.filters.find(".js-tag");
                    _this7.bindTags();
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: "fetchTag",
        value: function fetchTag(tag) {
            var _this8 = this;

            this.isFetch = true;
            this.loader.addClass("is-active");
            this.emptyResults();

            return new Promise(function (resolve, reject) {
                _properjsHobo2.default.ajax({
                    url: "/stories/",
                    method: "GET",
                    dataType: "json",
                    data: {
                        format: "json",
                        tag: tag
                    }

                }).then(function (response) {
                    resolve();
                    _this8.handle(response);
                }).catch(function (response) {
                    reject();
                    _this8.handle(response);
                });
            });
        }
    }, {
        key: "fetchQuery",
        value: function fetchQuery(query) {
            return _properjsHobo2.default.ajax({
                url: "/api/search/GeneralSearch",
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                dataType: "json",
                data: {
                    crumb: _Store2.default.crumb,
                    q: query,
                    p: 0,
                    size: 12,
                    f_collectionId: this.blockJson.collectionId
                }
            });
        }
    }, {
        key: "handle",
        value: function handle(response) {
            this.isFetch = false;
            this.loader.removeClass("is-active");

            if (response.serviceError) {
                this.displayResults(null);
            } else {
                this.displayResults(response);
            }
        }
    }, {
        key: "fetch",
        value: function fetch() {
            var _this9 = this;

            this.isFetch = true;
            this.loader.addClass("is-active");
            this.emptyResults();
            this.ajax = this.fetchQuery(this.search[0].value);
            this.ajax.then(function (response) {
                _this9.handle(response);
            }).catch(function (response) {
                _this9.handle(response);
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            core.emitter.off("app--resize", this.__appResize);

            if (this.imageController) {
                this.imageController.destroy();
            }
        }
    }]);

    return Search;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Search;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "\n        <div class=\"search__form\">\n            <div class=\"search__entry\">\n                <input type=\"text\" class=\"search__input inp js-search-field\" name=\"q\" placeholder=\"Start typing to search\" />\n                <button class=\"search__btn js-search-btn btn\">Clear</button>\n            </div>\n        </div>\n    ";
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (json) {
    var tags = json.collection.tags;

    return "<div class=\"tags js-tags\"><div class=\"tags__label h6\">Browse by tag:</div>" + tags.map(function (tag) {
        return "<div class=\"tags__tag h6\"><span class=\"js-tag\" data-tag=\"" + tag + "\">" + tag + "</span></div>";
    }).join("") + "</div>";
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (json) {
    var story = core.dom.main.find(".js-story");
    var items = json.items ? json.items.filter(function (item) {
        var ret = true;

        if (story.length) {
            ret = story.data().itemId !== item.id;
        }

        return ret;
    }) : [];

    return items.length ? "<div class=\"grid js-search-grid\">" + items.map(function (item) {
        return "\n            <div class=\"grid__item js-lazy-anim\">\n                <a class=\"grid__link grid__anim\" href=\"" + (item.itemUrl || item.fullUrl) + "\">\n                    <img class=\"grid__image image js-lazy-image\" data-img-src=\"" + (item.imageUrl || item.assetUrl) + "\" data-variants=\"100w,300w,500w,750w,1000w,1500w,2500w\" />\n                    <div class=\"grid__info\">\n                        <div class=\"grid__title\">" + item.title + (item.customContent && item.customContent.ctaTextValue ? ", <span>" + item.customContent.ctaTextValue + "</span>" : "") + "</div>\n                    </div>\n                </a>\n            </div>\n        ";
    }).join("") + "</div>" : "<div class=\"grid js-search-grid\"><div class=\"grid__item\"><p class=\"-grey\">no results</p></div></div>";
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(44);

var util = _interopRequireWildcard(_util);

var _log = __webpack_require__(47);

var _log2 = _interopRequireDefault(_log);

var _properjsController = __webpack_require__(2);

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @public
 * @class ImageController
 * @param {Hobo} $images The image collection to load
 * @classdesc Fires `preload` `preloaded` `lazyload` `lazyloaded` events
 * @memberof core
 *
 */
var ImageController = function (_Controller) {
    _inherits(ImageController, _Controller);

    function ImageController($images) {
        _classCallCheck(this, ImageController);

        var _this = _possibleConstructorReturn(this, (ImageController.__proto__ || Object.getPrototypeOf(ImageController)).call(this));

        _this.$preload = util.getElementsInView($images);
        _this.$lazyload = $images.not(_this.$preload);
        _this.loaders = {};

        if (_this.$preload.length) {
            _this.handleLoading(_this.$preload, "preload", util.noop);
        } else {
            setTimeout(function () {
                _this.fire("preloaded");
            }, 0);
        }

        if (_this.$lazyload.length) {
            _this.handleLoading(_this.$lazyload, "lazyload", util.isElementLoadable);
        }
        return _this;
    }

    /**
     *
     * @public
     * @method handleLoading
     * @param {Hobo} $images The batch to load
     * @param {string} event The event to fire
     * @param {function} handler The executor method to determine image loadability
     * @memberof core.ImageController
     * @description ImageLoader instance for loading a batch.
     *
     */


    _createClass(ImageController, [{
        key: "handleLoading",
        value: function handleLoading($images, event, handler) {
            var _this2 = this;

            (0, _log2.default)("ImageController " + event + " queue:", $images.length);

            var curr = 0;

            this.loaders[event] = util.loadImages($images, handler);
            this.loaders[event].on("load", function (elem) {
                curr++;

                _this2.fire(event, {
                    done: curr,
                    total: $images.length,
                    element: elem
                });
            });
            this.loaders[event].on("done", function () {
                (0, _log2.default)("ImageController " + event + "ed:", $images.length);

                _this2.fire(event + "ed");
            });
        }

        /**
         *
         * @public
         * @method destroy
         * @memberof core.ImageController
         * @description Stop and kill ImageLoader instances.
         *
         */

    }, {
        key: "destroy",
        value: function destroy() {
            var loader = null;

            for (loader in this.loaders) {
                if (this.loaders.hasOwnProperty(loader)) {
                    this.loaders[loader].stop();
                    this.loaders[loader] = null;

                    delete this.loaders[loader];
                }
            }
        }
    }]);

    return ImageController;
}(_properjsController2.default);

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = ImageController;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vimeo = __webpack_require__(70);

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _Youtube = __webpack_require__(73);

var _Youtube2 = _interopRequireDefault(_Youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Video
 * @classdesc Handle video logics.
 *
 * blockJson
 *      url
 *      resolvedBy
 *      imageJson
 *      height
 *      width
 *
 */
var Video = function () {
    function Video(element, data) {
        _classCallCheck(this, Video);

        if (data.blockJson.resolvedBy === "vimeo") {
            this.instance = new _Vimeo2.default(element, data);
        } else if (data.blockJson.resolvedBy === "youtube") {
            this.instance = new _Youtube2.default(element, data);
        }
    }

    _createClass(Video, [{
        key: "destroy",
        value: function destroy() {
            this.instance.destroy();
        }
    }]);

    return Video;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Video;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _vimeo = __webpack_require__(71);

var _vimeo2 = _interopRequireDefault(_vimeo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Local public instances hash ( resets )
var _instances = {};
var _onMessageInstance = function _onMessageInstance(message, instance) {
    // const title = instance.data.blockJson.html.match( /title\=\"(.*?)\"/ );
    var isSelf = message.player_id && message.player_id === instance.id;

    if (message.event === "ready" && isSelf) {
        instance.postEmbed("addEventListener", "play");
        instance.postEmbed("addEventListener", "pause");
        instance.postEmbed("addEventListener", "finish");
    } else if (message.event === "play" && isSelf) {
        instance.isPlaying = true;
        instance.element.addClass("is-embed-playing");
    } else if (message.event === "pause" && isSelf) {
        instance.isPlaying = false;

        if (message.data) {
            instance.setMetadata(message.data);
        }
    } else if (message.event === "finish" && isSelf) {
        instance.isPlaying = false;
        instance.element.removeClass("is-embed-playing");
    }
};

// Local public window.onmessage binding ( once )
window.addEventListener("message", function (e) {
    var message = JSON.parse(e.data);
    var instance = _instances[message.player_id];

    if (instance) {
        _onMessageInstance(message, instance);
    }
}, false);

/**
 *
 * @public
 * @global
 * @class Video
 * @classdesc Handle vimeo.
 *
 */

var Vimeo = function () {
    function Vimeo(element, data) {
        _classCallCheck(this, Vimeo);

        this.element = element;
        this.content = this.element.find(".sqs-block-content");
        this.data = data;
        this.isPlaying = false;

        this.bind();
        this.load();
        this.push();
    }

    _createClass(Vimeo, [{
        key: "push",
        value: function push() {
            if (!_instances[this.id]) {
                _instances[this.id] = this;
            }
        }
    }, {
        key: "load",
        value: function load() {
            this.image = this.element.find("img");
            this.data.imageJson = this.image.data();
            this.content[0].innerHTML = (0, _vimeo2.default)(this.data.blockJson, this.data.imageJson);
            this.iframe = this.element.find(".js-embed-iframe");
            this.metadata = this.element.find(".js-embed-metadata");
            this.id = this.iframe[0].id;
            this.iframe[0].src = this.iframe.data().src;
            core.util.loadImages(this.element.find(core.config.lazyImageSelector), core.util.noop);
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this = this;

            this.element.on("click", ".js-embed-playbtn", function () {
                if (!_this.isPlaying) {
                    _this.play();
                }
            });

            this.element.on("mouseenter", ".js-embed-playbtn", function () {
                _this.element.addClass("is-play-button");
            }).on("mouseleave", ".js-embed-playbtn", function () {
                _this.element.removeClass("is-play-button");
            });
        }
    }, {
        key: "setMetadata",
        value: function setMetadata(data) {
            var duration = core.util.formatTime(data.duration * 1000);

            this.metadata[0].innerHTML = duration;
        }
    }, {
        key: "postEmbed",
        value: function postEmbed(method, value) {
            var data = {
                method: method
            };

            if (value) {
                data.value = value;
            }

            var message = JSON.stringify(data);

            this.iframe[0].contentWindow.postMessage(message, "*");
        }
    }, {
        key: "play",
        value: function play() {
            this.postEmbed("play", "true");
            this.isPlaying = true;
            this.element.addClass("is-embed-playing");
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _instances = {};
        }
    }]);

    return Vimeo;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Vimeo;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (blockJson, imageJson) {
    var url = blockJson.url.replace(/\?.*?$/, "");
    var path = "https://player.vimeo.com/video/";
    var id = url.split("/").pop();
    var qrs = "?&wmode=opaque&api=1&loop=0&autoplay=1&player_id=" + id;
    var source = "" + path + id + qrs;
    var width = blockJson.width && blockJson.height ? blockJson.width : 16;
    var height = blockJson.height && blockJson.width ? blockJson.height : 9;
    var aspect = height / width * 100;
    var original = width + "x" + height;
    var svgIcon = __webpack_require__(72);

    return "\n        <div class=\"embed js-embed\">\n            <div class=\"embed__aspect\" style=\"padding-bottom:" + aspect + "%;\">\n                <iframe id=\"" + id + "\" class=\"embed__element js-embed-iframe js-media-node\" data-src=\"" + source + "\" data-original=\"" + original + "\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n                " + (blockJson.customThumb ? "\n                    <div class=\"embed__poster embed__overlay js-embed-poster js-lazy-image -cover -text--center\" data-img-src=\"" + imageJson.src + "?format=original\">\n                        <div class=\"embed__playbtn js-embed-playbtn\">\n                            " + svgIcon + "\n                        </div>\n                        <div class=\"embed__metadata js-embed-metadata h6\"></div>\n                    </div>\n                " : "") + "\n            </div>\n            " + (blockJson.description && blockJson.layout !== "caption-hidden" ? "\n                <div class=\"_cap\">\n                    <div class=\"m\">" + blockJson.description.html + "</div>\n                </div>\n            " : "") + "\n        </div>\n    ";
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--play\" x=\"0px\" y=\"0px\" viewBox=\"0 0 25 29\" style=\"enable-background:new 0 0 25 29;\"><path d=\"M23.9,12.7L3.7,0.5C3.3,0.3,3,0.2,2.6,0.2c-1.1,0-2,0.9-2,2l0,24.5c0,0.4,0.1,0.7,0.3,1c0.6,0.9,1.8,1.2,2.7,0.7l20.2-12.2c0.3-0.2,0.5-0.4,0.7-0.7C25.1,14.5,24.8,13.3,23.9,12.7z\"></path></svg>"

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fgLoadjs = __webpack_require__(74);

var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);

var _paramalama = __webpack_require__(56);

var _paramalama2 = _interopRequireDefault(_paramalama);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _youtube = __webpack_require__(75);

var _youtube2 = _interopRequireDefault(_youtube);

var _properjsController = __webpack_require__(2);

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _isYoutubeLoading = false;

/**
 *
 * @public
 * @global
 * @class Youtube
 * @classdesc Handle Youtube with JSAPI
 *
 */

var Youtube = function () {
    function Youtube(element, data) {
        _classCallCheck(this, Youtube);

        this.element = element;
        this.content = this.element.find(".sqs-block-content");
        this.data = data;
        this.isPlaying = false;
        this.params = (0, _paramalama2.default)(this.data.blockJson.url);
        this.id = this.params.v;
        this.buffer = new _properjsController2.default();

        this.load();
        this.bind();
    }

    _createClass(Youtube, [{
        key: "load",
        value: function load() {
            this.image = this.element.find("img");
            this.data.imageJson = this.image.data();
            this.content[0].innerHTML = (0, _youtube2.default)(this.data.blockJson, this.data.imageJson);
            this.iframe = this.element.find(".js-embed-iframe");
            this.youtubeLoad();
            core.util.loadImages(this.element.find(core.config.lazyImageSelector), core.util.noop);
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this = this;

            this.element.on("click", ".js-embed-playbtn", function () {
                if (!_this.isPlaying) {
                    _this.play();
                }
            });
        }
    }, {
        key: "play",
        value: function play() {
            var _this2 = this;

            this.buffer.go(function () {
                if (_this2.youtubePlayer && _this2.youtubePlayer.playVideo) {
                    _this2.buffer.stop();
                    _this2.youtubePlayer.playVideo();
                }
            });
        }
    }, {
        key: "pause",
        value: function pause() {
            this.youtubePlayer.pauseVideo();
        }
    }, {
        key: "bufferOnReady",
        value: function bufferOnReady() {
            var _this3 = this;

            this.buffer.go(function () {
                if (window.YT && !_isYoutubeLoading) {
                    _this3.buffer.stop();
                    _this3.youtubeOnReady();
                }
            });
        }
    }, {
        key: "youtubeOnReady",
        value: function youtubeOnReady() {
            var _this4 = this;

            var playerVars = {
                disablekb: 1,
                controls: 1,
                iv_load_policy: 3,
                loop: 0,
                modestbranding: 1,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                wmode: "opaque",
                autoplay: 0
            };

            if (this.data.minimal) {
                playerVars.playsinline = 1;
                playerVars.controls = 0;
            }

            this.youtubePlayer = new window.YT.Player(this.iframe[0], {
                height: this.data.blockJson.height || 9,
                width: this.data.blockJson.width || 16,
                videoId: this.id,
                playerVars: playerVars,
                events: {
                    onReady: function onReady() /*e*/{},
                    onStateChange: function onStateChange(e) {
                        /*
                            BUFFERING:3
                            CUED:5
                            ENDED:0
                            PAUSED:2
                            PLAYING:1
                            UNSTARTED:-1
                        */
                        if (e.data === window.YT.PlayerState.PLAYING) {
                            _this4.isPlaying = true;
                            _this4.element.addClass("is-embed-playing");
                        } else if (e.data === window.YT.PlayerState.PAUSED) {
                            _this4.isPlaying = false;
                        } else if (e.data === window.YT.PlayerState.ENDED) {
                            _this4.isPlaying = false;
                            _this4.element.removeClass("is-embed-playing");
                        }
                    }
                }
            });
        }
    }, {
        key: "youtubeLoad",
        value: function youtubeLoad() {
            var _this5 = this;

            if (!window.YT && !_isYoutubeLoading) {
                _isYoutubeLoading = true;
                window.onYouTubeIframeAPIReady = function () {
                    _isYoutubeLoading = false;
                    delete window.onYouTubeIframeAPIReady;

                    _this5.youtubeOnReady();
                };

                (0, _fgLoadjs2.default)("https://www.youtube.com/iframe_api");
            } else if (_isYoutubeLoading) {
                this.bufferOnReady();
            } else {
                this.youtubeOnReady();
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.buffer.stop();
        }
    }]);

    return Youtube;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Youtube;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
	var loadJS = function( src, cb ){
		"use strict";
		var ref = w.document.getElementsByTagName( "script" )[ 0 ];
		var script = w.document.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( true ){
		module.exports = loadJS;
	}
	else {}
}( typeof global !== "undefined" ? global : this ));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _paramalama = __webpack_require__(56);

var _paramalama2 = _interopRequireDefault(_paramalama);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (blockJson, imageJson) {
    var params = (0, _paramalama2.default)(blockJson.url);
    var id = params.v;
    var aspect = (blockJson.height || 9) / (blockJson.width || 16) * 100;
    var svgIcon = __webpack_require__(72);

    return "\n        <div class=\"embed js-embed\">\n            <div class=\"embed__aspect\" style=\"padding-bottom:" + aspect + "%;\">\n                <div id=\"" + id + "\" class=\"embed__element js-embed-iframe\"></div>\n                " + (blockJson.customThumb ? "\n                    <div class=\"embed__poster embed__overlay js-embed-poster js-lazy-image -cover -text--center\" data-img-src=\"" + imageJson.src + "?format=original\">\n                        <div class=\"embed__playbtn js-embed-playbtn\">\n                            " + svgIcon + "\n                        </div>\n                    </div>\n                " : "") + "\n            </div>\n            " + (blockJson.description && blockJson.layout !== "caption-hidden" ? "\n                <div class=\"_cap\">\n                    <div class=\"m\">" + blockJson.description.html + "</div>\n                </div>\n            " : "") + "\n        </div>\n    ";
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import * as core from "../../core";
// import $ from "properjs-hobo";


var _annotation = __webpack_require__(77);

var _annotation2 = _interopRequireDefault(_annotation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Annotation
 * @param {Element} element The element to work with
 * @classdesc Handle annotated text nodes.
 *
 */
var Annotation = function () {
    function Annotation(annotation, data, i) {
        _classCallCheck(this, Annotation);

        this.annotation = annotation;
        this.parent = this.annotation.closest(".sqs-row");
        this.text = this.parent.find(".col:nth-child(2) .sqs-block-content");
        this.media = this.parent.find(".js-media");
        this.prevSpace = this.parent.prev(".sqs-block-spacer");
        this.nextSpace = this.parent.next(".sqs-block-spacer");
        this.prevText = this.prevSpace.prev(".sqs-block-html");
        this.nextText = this.nextSpace.next(".sqs-block-html");
        this.data = data;
        this.i = i;

        this.init();
    }

    _createClass(Annotation, [{
        key: "init",
        value: function init() {
            this.parent[0].innerHTML = (0, _annotation2.default)(this);

            if (this.prevText.length && !this.media.length) {
                this.prevSpace.addClass("spacer-text");
            }

            if (this.nextText.length && !this.media.length) {
                this.nextSpace.addClass("spacer-text");
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {}
    }]);

    return Annotation;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Annotation;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (instance) {
    return "\n        <div class=\"annotation annotation--" + (instance.media.length ? "media" : "text") + " annotation--" + instance.i + "\">\n            <div class=\"annotation__wrap\">\n                <div class=\"annotation__note\">\n                    " + instance.annotation[0].outerHTML + "\n                </div>\n                " + (instance.media.length ? "\n                    <div class=\"annotation__media\">\n                        " + instance.media[0].outerHTML + "\n                    </div>\n                " : "\n                    <div class=\"annotation__text\">\n                        " + instance.text[0].innerHTML + "\n                    </div>\n                ") + "\n            </div>\n        </div>\n    ";
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _audio = __webpack_require__(79);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Audio
 * @param {Element} element The element to work with
 * @classdesc Handle annotated text nodes.
 *
 */
var Audio = function () {
    function Audio(element) {
        _classCallCheck(this, Audio);

        this.element = element;
        this.script = this.element.find("script").detach();
        this.parsed = JSON.parse(this.script[0].textContent);
        this.dropout = core.dom.body.find(".js-summary-v2");
        this.data = { blockJson: this.parsed };
        this.isPlaying = false;

        this.init();
        this.bind();
    }

    _createClass(Audio, [{
        key: "init",
        value: function init() {
            var _this = this;

            this.element[0].innerHTML = (0, _audio2.default)(this);
            this.global = this.element.find(".js-audio-global");
            this.audioStatus = this.element.find(".js-audio-status");
            this.audioState = this.element.find(".js-audio-state");
            this.audioPlayback = this.element.find(".js-audio-pp");
            this.audioSkipBackward = this.element.find(".js-audio-skipbackward");
            this.audioSkipForward = this.element.find(".js-audio-skipforward");
            this.audioNode = this.element.find(".js-audio-node");
            this.audioNode[0].src = this.data.blockJson.audioAssetUrl;
            this.audioStatus.forEach(function (el, i) {
                _this.audioStatus[i].innerHTML = core.util.formatTime(_this.data.blockJson.audioAssetDuration);
            });
        }
    }, {
        key: "doScroll",
        value: function doScroll() {
            var bounds = this.element[0].getBoundingClientRect();

            if (bounds.bottom < 0) {
                this.element.addClass("is-audio-offscreen");
            } else {
                this.element.removeClass("is-audio-offscreen");
            }

            if (this.dropout.length) {
                var collider = this.dropout[0].getBoundingClientRect();
                var globalBounds = this.global[0].getBoundingClientRect();

                if (collider.y < globalBounds.y) {
                    this.element.addClass("is-audio-collider");
                } else {
                    this.element.removeClass("is-audio-collider");
                }
            }
        }
    }, {
        key: "bind",
        value: function bind() {
            var _this2 = this;

            this.__appScroll = this.doScroll.bind(this);

            core.emitter.on("app--scroll", this.__appScroll);

            this.audioPlayback.on("click", function () {
                _this2.togglePP();
            });

            this.audioNode.on("ended", function () {
                _this2.pause();
                _this2.audioNode[0].currentTime = 0;
                _this2.audioStatus.forEach(function (el, i) {
                    _this2.audioStatus[i].innerHTML = core.util.formatTime(_this2.data.blockJson.audioAssetDuration);
                });
            });

            this.audioNode.on("timeupdate", function () {
                _this2.audioStatus.forEach(function (el, i) {
                    _this2.audioStatus[i].innerHTML = core.util.formatTime(_this2.audioNode[0].currentTime * 1000);
                });
            });

            this.audioSkipForward.on("click", function () {
                _this2.audioNode[0].pause();
                _this2.audioNode[0].currentTime = _this2.audioNode[0].currentTime + 15;
                _this2.audioNode[0].play();
            });

            this.audioSkipBackward.on("click", function () {
                _this2.audioNode[0].pause();
                _this2.audioNode[0].currentTime = _this2.audioNode[0].currentTime - 15 || 0;
                _this2.audioNode[0].play();
            });
        }
    }, {
        key: "play",
        value: function play() {
            var _this3 = this;

            this.isPlaying = true;
            this.element.addClass("is-audio-playing has-audio-played");
            this.audioNode[0].play();
            this.audioState.forEach(function (el, i) {
                _this3.audioState[i].style.width = el.getBoundingClientRect().width + "px";
            });
        }
    }, {
        key: "pause",
        value: function pause() {
            var _this4 = this;

            this.isPlaying = false;
            this.element.removeClass("is-audio-playing");
            this.audioNode[0].pause();
            this.audioState.forEach(function (el, i) {
                _this4.audioState[i].style.width = el.getBoundingClientRect().width + "px";
            });
        }
    }, {
        key: "togglePP",
        value: function togglePP() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            core.emitter.off("app--scroll", this.__appScroll);
        }
    }]);

    return Audio;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Audio;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () /*instance*/{
    var svgPlayIcon = __webpack_require__(72);
    var svgPauseIcon = __webpack_require__(80);
    var svgSkipBackwardIcon = __webpack_require__(81);
    var svgSkipForwardIcon = __webpack_require__(82);

    return "\n        <div class=\"_audio__station\">\n            <div class=\"_audio__controls _audio__controls--onboard js-audio-pp\">\n                <div class=\"_audio__pp\">\n                    " + svgPlayIcon + "\n                    " + svgPauseIcon + "\n                </div>\n                <div class=\"_audio__state js-audio-state h6\">\n                    <span>Listen</span>\n                    <span>Playing</span>\n                </div>\n            </div>\n            <div class=\"_audio__ellapsed h6\">\n                <span class=\"js-audio-status\">0:00</span>\n            </div>\n        </div>\n        <div class=\"_audio__global js-audio-global\">\n            <div class=\"_audio__controls _audio__controls--utility\">\n                <div class=\"_audio__skip js-audio-skipbackward\">\n                    " + svgSkipBackwardIcon + "\n                </div>\n                <div class=\"_audio__pp js-audio-pp\">\n                    " + svgPlayIcon + "\n                    " + svgPauseIcon + "\n                </div>\n                <div class=\"_audio__skip js-audio-skipforward\">\n                    " + svgSkipForwardIcon + "\n                </div>\n            </div>\n            <div class=\"_audio__controls _audio__controls--onboard js-audio-pp\">\n                <div class=\"_audio__pp\">\n                    " + svgPlayIcon + "\n                    " + svgPauseIcon + "\n                </div>\n                <div class=\"_audio__state js-audio-state h6\">\n                    <span>Listen</span>\n                    <span>Playing</span>\n                </div>\n            </div>\n            <div class=\"_audio__ellapsed h6\">\n                <span class=\"js-audio-status\">0:00</span>\n            </div>\n        </div>\n        <audio class=\"_audio__node js-audio-node\"></audio>\n    ";
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--pause\" x=\"0px\" y=\"0px\" viewBox=\"0 0 22 30\" style=\"enable-background:new 0 0 22 30;\"><path d=\"M5.6,0H2C0.9,0,0,0.9,0,2v25.1c0,1.1,0.9,2,2,2h3.6c1.1,0,2-0.9,2-2V2C7.6,0.9,6.7,0,5.6,0z\"></path><path d=\"M19.5,0h-3.6c-1.1,0-2,0.9-2,2v25.1c0,1.1,0.9,2,2,2h3.6c1.1,0,2-0.9,2-2V2C21.5,0.9,20.6,0,19.5,0z\"></path></svg>"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--skipbackward\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 33\" style=\"enable-background:new 0 0 28 33;\"><path d=\"M14,4.3h-1.2l2.1-2.2c0.4-0.5,0.4-1.2,0-1.7c-0.5-0.6-1.3-0.6-1.8-0.2L8.8,4.6c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.8,0.4,1l4.2,4.3c0,0,0,0,0.1,0.1c0.5,0.5,1.4,0.5,1.9-0.1c0.5-0.5,0.5-1.4-0.1-1.9L12.9,7H14c6.3,0,11.4,5.1,11.4,11.5c0,6.3-5.1,11.5-11.4,11.5S2.6,24.7,2.6,18.4c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3c0,7.8,6.3,14.1,14,14.1c7.7,0,14-6.3,14-14.1S21.7,4.3,14,4.3z\"></path></svg>"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--skipforward\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 33\" style=\"enable-background:new 0 0 28 33;\"><path d=\"M26.7,17.1c-0.7,0-1.3,0.6-1.3,1.3c0,6.3-5.1,11.5-11.4,11.5c-6.3,0-11.4-5.1-11.4-11.5C2.6,12.1,7.7,7,14,7h1.1L13.1,9c-0.5,0.5-0.6,1.3-0.1,1.9c0.5,0.5,1.3,0.6,1.9,0.1c0,0,0,0,0.1-0.1l4.2-4.3c0.3-0.3,0.4-0.6,0.4-1c0-0.4-0.1-0.8-0.4-1l-4.2-4.3c-0.6-0.5-1.4-0.4-1.8,0.2c-0.4,0.5-0.4,1.2,0,1.7l2.1,2.2H14c-7.7,0-14,6.3-14,14.1s6.3,14.1,14,14.1c7.7,0,14-6.3,14-14.1C28,17.7,27.4,17.1,26.7,17.1z\"></path></svg>"

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _searchResults = __webpack_require__(67);

var _searchResults2 = _interopRequireDefault(_searchResults);

var _tags = __webpack_require__(84);

var _tags2 = _interopRequireDefault(_tags);

var _ImageController = __webpack_require__(68);

var _ImageController2 = _interopRequireDefault(_ImageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Story
 * @param {Element} element The element to work with
 * @classdesc Handle CMS stories.
 *
 */
var Story = function () {
    function Story(element, data) {
        _classCallCheck(this, Story);

        this.element = element;
        this.coverRow = this.element.find(".sqs-layout > .sqs-row > .col > .sqs-row:first-child");
        this.bolders = this.element.find(".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > p");
        this.numerics = this.element.find(".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > p > em");
        this.listings = this.element.find(".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > ul, .sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > ol");
        this.summary = this.element.find(".js-summary-v2");
        this.capillary = this.element.find(".sqs-layout > .sqs-row > .col .sqs-block-gallery + .sqs-block-html > .sqs-block-content > blockquote:first-child ");
        this.tagcloud = this.element.find(".js-tagcloud");
        this.data = data;

        this.init();
    }

    _createClass(Story, [{
        key: "init",
        value: function init() {
            if (this.coverRow.length) {
                this.initCover();
            }

            if (this.bolders.length) {
                this.initBolders();
            }

            if (this.numerics.length) {
                this.initNumerics();
            }

            if (this.listings.length) {
                this.initListings();
            }

            if (this.capillary.length) {
                this.initCapillaries();
            }

            if (this.summary.length) {
                this.summary.find(".js-summary-v2-item--" + this.data.itemId).remove();
            }

            if (this.tagcloud.length) {
                this.initTagcloud();
            }
        }
    }, {
        key: "initCover",
        value: function initCover() {
            this.coverRow.find(".col > .sqs-block-html").parent().addClass("text-col");
            this.coverRow.find(".col > .sqs-block-image").parent().addClass("image-col");
        }
    }, {
        key: "initBolders",
        value: function initBolders() {
            var _this = this;

            this.bolders.forEach(function (el, i) {
                var elem = _this.bolders.eq(i);
                var strong = elem.find("strong");
                var em = elem.find("em");

                if (!em.length && strong.length) {
                    elem.addClass("p--boldline");
                }
            });
        }
    }, {
        key: "initNumerics",
        value: function initNumerics() {
            var _this2 = this;

            this.numerics.forEach(function (el, i) {
                var elem = _this2.numerics.eq(i);
                var number = parseInt(el.innerText, 10);

                if (Number.isInteger(number)) {
                    elem.addClass("ss");
                }
            });
        }
    }, {
        key: "initListings",
        value: function initListings() {
            var _this3 = this;

            this.listings.forEach(function (el, i) {
                var elem = _this3.listings.eq(i);
                var prev = elem.prev("p");

                if (prev.length) {
                    prev.addClass("p--listings");
                }
            });
        }
    }, {
        key: "initCapillaries",
        value: function initCapillaries() {
            var _this4 = this;

            this.capillary.forEach(function (el, i) {
                var gallery = _this4.capillary.eq(i).closest(".sqs-block-html").prev(".sqs-block-gallery");

                gallery.addClass("is-capillary").find(".sqs-block-content").append(el);
            });
        }
    }, {
        key: "initTagcloud",
        value: function initTagcloud() {
            var _this5 = this;

            this.tagcloudQuery = this.tagcloud.next(".js-tagcloud-query");
            this.tagcloudLabel = this.tagcloudQuery.find(".js-tagcloud-field");
            this.tagcloudLoader = this.tagcloudQuery.find(".js-tagcloud-loader");
            this.tagcloudDisplay = this.tagcloudQuery.find(".js-tagcloud-display");
            this.tagcloudClose = this.tagcloudQuery.find(".js-tagcloud-close");

            this.tags = this.data.tags.split(",");
            this.tagcloud[0].innerHTML = (0, _tags2.default)(this);

            this.tagcloud.on("click", ".js-tagcloud-link", function (e) {
                var target = (0, _properjsHobo2.default)(e.target);
                var elem = target.is(".js-tagcloud-link") ? target : target.parent();
                var data = elem.data();

                _this5.tagcloudQuery.addClass("is-active");
                _this5.tagcloudLoader.addClass("is-active");
                _this5.tagcloudLabel[0].placeholder = data.tag;
                _this5.tagcloudLabel[0].disabled = true;

                _this5.fetchStories(data.tag).then(_this5.handleStories.bind(_this5));
            });

            this.tagcloudClose.on("click", function () {
                _this5.tagcloudQuery.removeClass("is-active");

                setTimeout(_this5.handleTimeout.bind(_this5), core.config.defaultDuration);
            });
        }
    }, {
        key: "handleTimeout",
        value: function handleTimeout() {
            this.tagcloudLabel[0].placeholder = "";
            this.tagcloudDisplay[0].innerHTML = "";
            this.imageController.destroy();
            this.imageController = null;
        }
    }, {
        key: "handleStories",
        value: function handleStories(json) {
            var _this6 = this;

            this.tagcloudLoader.removeClass("is-active");
            this.tagcloudDisplay[0].innerHTML = (0, _searchResults2.default)(json);
            this.imageController = new _ImageController2.default(this.tagcloudDisplay.find(core.config.lazyImageSelector));
            this.imageController.on("preloaded", function () {
                _this6.tagcloudDisplay.find(".js-search-grid").addClass("is-active");
            });
        }
    }, {
        key: "fetchStories",
        value: function fetchStories(tag) {
            return new Promise(function (resolve, reject) {
                _properjsHobo2.default.ajax({
                    url: "/stories/",
                    method: "GET",
                    dataType: "json",
                    data: {
                        format: "json",
                        tag: tag
                    }
                }).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.imageController) {
                this.imageController.destroy();
            }
        }
    }]);

    return Story;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Story;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (instance) {
    return "\n        <div class=\"tagcloud__label h6\">Tags:</div>\n        <div class=\"tagcloud__list h6\">\n            " + instance.tags.map(function (tag) {
        return "<a class=\"tagcloud__link js-tagcloud-link\" href=\"#\" data-tag=\"" + tag + "\"><span>" + tag + "</span></a><br />";
    }).join("") + "\n        </div>\n    ";
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _cta = __webpack_require__(86);

var _cta2 = _interopRequireDefault(_cta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class CTA
 * @param {Element} element The element to work with
 * @classdesc Handle CTA button layouts.
 *
 */
var CTA = function () {
    function CTA(cta) {
        _classCallCheck(this, CTA);

        this.cta = cta;
        this.parent = this.cta.closest(".sqs-row");
        this.text = this.parent.find(".sqs-block-content > p");
        this.dropout = core.dom.body.find(".js-summary-v2");

        this.init();
        this.bind();
    }

    _createClass(CTA, [{
        key: "doScroll",
        value: function doScroll() {
            var bounds = this.parent[0].getBoundingClientRect();

            if (bounds.bottom < 0) {
                this.parent.addClass("is-cta-offscreen");
            } else {
                this.parent.removeClass("is-cta-offscreen");
            }

            if (this.dropout.length) {
                var collider = this.dropout[0].getBoundingClientRect();
                var ctaBounds = this.cta[0].getBoundingClientRect();

                if (collider.y < ctaBounds.y) {
                    this.parent.addClass("is-cta-collider");
                } else {
                    this.parent.removeClass("is-cta-collider");
                }
            }
        }
    }, {
        key: "bind",
        value: function bind() {
            this.__appScroll = this.doScroll.bind(this);

            core.emitter.on("app--scroll", this.__appScroll);
        }
    }, {
        key: "init",
        value: function init() {
            this.parent[0].innerHTML = (0, _cta2.default)(this);
            this.cta = this.parent.find(".js-cta");
        }
    }, {
        key: "destroy",
        value: function destroy() {
            core.emitter.off("app--scroll", this.__appScroll);
        }
    }]);

    return CTA;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = CTA;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (instance) {
    return "\n        <div class=\"cta cta--static\">\n            <div class=\"cta__wrap\">\n                <div class=\"cta__button\">\n                    " + instance.cta[0].outerHTML + "\n                </div>\n                <div class=\"cta__text\">\n                    " + instance.text[0].outerHTML + "\n                </div>\n            </div>\n        </div>\n        <div class=\"cta cta--global\">\n            <div class=\"cta__wrap\">\n                <div class=\"cta__button js-cta\">\n                    " + instance.cta[0].outerHTML + "\n                </div>\n                <div class=\"cta__text\">\n                    " + instance.text[0].outerHTML + "\n                </div>\n            </div>\n        </div>\n    ";
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _TweenMax = __webpack_require__(88);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Slider
 * @param {Element} element The element to work with
 * @classdesc Handle slider galleries.
 *
 */
var Slider = function () {
    function Slider(element, data) {
        _classCallCheck(this, Slider);

        this.element = element;
        this.belt = this.element.find(".js-slider-belt");
        this.items = this.element.find(".js-slider-item");
        this.length = this.items.length;
        this.data = data;
        this.time = 500;
        this.index = 0;

        this.init();
        this.bind();
    }

    _createClass(Slider, [{
        key: "bind",
        value: function bind() {
            var _this = this;

            this.element.on("click", ".js-slider-item", function (e) {
                var target = (0, _properjsHobo2.default)(e.target);

                _this.evaluate(target);
            });

            core.emitter.on("resize", function () {
                _this.evaluate(_this.items.eq(_this.index));
            });
        }
    }, {
        key: "evaluate",
        value: function evaluate(target) {
            var index = target.index();
            var targetBounds = target[0].getBoundingClientRect();
            var targetMargin = parseFloat(window.getComputedStyle(target[0])["margin-left"]);
            var isFirst = index === 0;
            var isLast = index === this.length - 1;
            var position = 0;
            var offset = 0;

            this.items.forEach(function (item, i) {
                if (i <= index) {
                    var bounds = item.getBoundingClientRect();
                    var margin = parseFloat(window.getComputedStyle(item)["margin-left"]);

                    offset += bounds.width + margin;
                }
            });

            if (isFirst) {
                // Position is zero

            } else if (isLast) {
                // First baseline right edge to left edge
                // position = ((-bounds.width - margin) * index) - (margin * (index - 1));
                position += -offset;

                // Next baseline to right edge
                position += window.innerWidth - targetMargin;
            } else {
                // First baseline to left edge
                position += -offset;

                // Next baseline left edge to center viewport axis
                position += window.innerWidth / 2;

                // Finally pull the element left of central axis by half its width
                position += targetBounds.width / 2;
            }

            this.index = index;
            this.move(position);
        }
    }, {
        key: "move",
        value: function move(position) {
            this.tween = new _TweenMax.TweenLite.to(this.belt[0], this.time / 1000, {
                x: position,
                ease: _TweenMax.Power3.easeOut
            });
        }
    }, {
        key: "init",
        value: function init() {}
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.resizer) {
                this.resizer.destroy();
            }
        }
    }]);

    return Slider;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Slider;

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony import */ var _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _EasePack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/












//the following two lines are designed to prevent tree shaking of the classes that were historically included with TweenMax (otherwise, folks would have to reference CSSPlugin, for example, to ensure their CSS-related animations worked)
const TweenMax = _TweenMaxBase_js__WEBPACK_IMPORTED_MODULE_1__["default"];
TweenMax._autoActivated = [_TimelineLite_js__WEBPACK_IMPORTED_MODULE_6__["default"], _TimelineMax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_2__["default"], _AttrPlugin_js__WEBPACK_IMPORTED_MODULE_3__["default"], _BezierPlugin_js__WEBPACK_IMPORTED_MODULE_8__["default"], _RoundPropsPlugin_js__WEBPACK_IMPORTED_MODULE_4__["default"], _DirectionalRotationPlugin_js__WEBPACK_IMPORTED_MODULE_5__["default"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Back"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Elastic"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Bounce"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["RoughEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SlowMo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["SteppedEase"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Circ"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Expo"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["Sine"], _EasePack_js__WEBPACK_IMPORTED_MODULE_9__["ExpoScaleEase"]];





/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set const TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
const _gsScope = (typeof(window) !== "undefined") ? window : (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : undefined || {};

const TweenLite = (function(window, moduleName) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							/*
							if (typeof(module) !== "undefined" && module.exports) { //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							} else if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							}
							*/
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) {
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
					return (_lagThreshold < 1 / _tinyNum);
				}
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
					_ticker.wake();
				}
				var t = setTimeout(_checkTimeout, 2000);
				if (t.unref) {
					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
					t.unref();
				}
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			var pauseTime, t;
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				pauseTime = this._pauseTime;
				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			t = this.timeline;
			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
				t._dirty = true;
				t.totalDuration();
				t = t.timeline;
			}
			return this;
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "2.0.1";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
				_doc = window.document;
			}
			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_relExp = /[\+-]=-?[\.\d]/,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
					a.end = null;
				}
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.data = "isStart";
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				startVars.onUpdate = v.onUpdate;
				startVars.onUpdateParams = v.onUpdateParams;
				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else if (target._gsTweenID) {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a || [];
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

		return TweenLite;

})(_gsScope, "TweenLite");

const gs = _gsScope.com.greensock;

const SimpleTimeline = gs.core.SimpleTimeline;
const Animation = gs.core.Animation;
const Ease = _gsScope.Ease;
const Linear = _gsScope.Linear;
const Power0 = Linear;
const Power1 = _gsScope.Power1;
const Power2 = _gsScope.Power2;
const Power3 = _gsScope.Power3;
const Power4 = _gsScope.Power4;
const TweenPlugin = _gsScope.TweenPlugin;
const EventDispatcher = gs.events.EventDispatcher;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(90)(module), __webpack_require__(9)))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMaxBase", function() { return TweenMaxBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			TweenMax = function(target, duration, vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, target, duration, vars);
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				if (this._repeat) {
					this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
				}
				this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			p = TweenMax.prototype = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to({}, 0.1, {}),
			_blankArray = [];

		TweenMax.version = "2.0.1";
		p.constructor = TweenMax;
		p.kill()._gc = false;
		TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].killTweensOf;
		TweenMax.getTweensOf = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf;
		TweenMax.lagSmoothing = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].lagSmoothing;
		TweenMax.ticker = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker;
		TweenMax.render = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].render;

		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._yoyoEase = null;
			this._uncache(true);
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.invalidate.call(this);
		};

		p.updateTo = function(vars, resetDuration) {
			var curRatio = this.ratio,
				immediate = this.vars.immediateRender || vars.immediateRender,
				p;
			if (resetDuration && this._startTime < this._timeline._time) {
				this._startTime = this._timeline._time;
				this._uncache(false);
				if (this._gc) {
					this._enabled(true, false);
				} else {
					this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			for (p in vars) {
				this.vars[p] = vars[p];
			}
			if (this._initted || immediate) {
				if (resetDuration) {
					this._initted = false;
					if (immediate) {
						this.render(0, true, true);
					}
				} else {
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._notifyPluginsOfEnabled && this._firstPT) {
						_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
					}
					if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
						var prevTime = this._totalTime;
						this.render(0, true, false);
						this._initted = false;
						this.render(prevTime, true, false);
					} else {
						this._initted = false;
						this._init();
						if (this._time > 0 || immediate) {
							var inv = 1 / (1 - curRatio),
								pt = this._firstPT, endValue;
							while (pt) {
								endValue = pt.s + pt.c;
								pt.c *= inv;
								pt.s = endValue - pt.c;
								pt = pt._next;
							}
						}
					}
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
				this.invalidate();
			}
			var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevTime = this._time,
				prevTotalTime = this._totalTime,
				prevCycle = this._cycle,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase;
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = totalDur;
				this._cycle = this._repeat;
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				} else {
					this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				}
				if (!this._reversed) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = this._cycle = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;
				if (this._repeat !== 0) {
					cycleDuration = duration + this._repeatDelay;
					this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
					if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
						this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
					}
					this._time = this._totalTime - (this._cycle * cycleDuration);
					if (this._yoyo) if ((this._cycle & 1) !== 0) {
						this._time = duration - this._time;
						yoyoEase = this._yoyoEase || this.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
						if (yoyoEase) {
							if (!this._yoyoEase) {
								if (yoyoEase === true && !this._initted) { //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
									yoyoEase = this.vars.ease;
									this._yoyoEase = yoyoEase = !yoyoEase ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : (typeof(yoyoEase) === "function") ? new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](yoyoEase, this.vars.easeParams) : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase] || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultEase;
								} else {
									this._yoyoEase = yoyoEase = (yoyoEase === true) ? this._ease : (yoyoEase instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? yoyoEase : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[yoyoEase];
								}
							}
							this.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - this._time) / duration) : 0;
						}
					}
					if (this._time > duration) {
						this._time = duration;
					} else if (this._time < 0) {
						this._time = 0;
					}
				}
				if (this._easeType && !yoyoEase) {
					r = this._time / duration;
					type = this._easeType;
					pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (this._time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else if (!yoyoEase) {
					this.ratio = this._ease.getRatio(this._time / duration);
				}

			}

			if (prevTime === this._time && !force && prevCycle === this._cycle) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
					this._time = prevTime;
					this._totalTime = prevTotalTime;
					this._rawPrevTime = prevRawPrevTime;
					this._cycle = prevCycle;
					TweenLiteInternals.lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete && !yoyoEase) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd && !yoyoEase) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) {
				this._lazy = false;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTotalTime === 0) {
				if (this._initted === 2 && time > 0) {
					//this.invalidate();
					this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
				}
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}

			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._totalTime !== prevTotalTime || callback) {
					this._callback("onUpdate");
				}
			}
			if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
				this._callback("onRepeat");
			}
			if (callback) if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

		TweenMax.to = function(target, duration, vars) {
			return new TweenMax(target, duration, vars);
		};

		TweenMax.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenMax(target, duration, vars);
		};

		TweenMax.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenMax(target, duration, toVars);
		};

		TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			stagger = stagger || 0;
			var delay = 0,
				a = [],
				finalComplete = function() {
					if (vars.onComplete) {
						vars.onComplete.apply(vars.onCompleteScope || this, arguments);
					}
					onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
				},
				cycle = vars.cycle,
				fromCycle = (vars.startAt && vars.startAt.cycle),
				l, copy, i, p;
			if (!_isArray(targets)) {
				if (typeof(targets) === "string") {
					targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
				}
				if (_isSelector(targets)) {
					targets = _slice(targets);
				}
			}
			targets = targets || [];
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			l = targets.length - 1;
			for (i = 0; i <= l; i++) {
				copy = {};
				for (p in vars) {
					copy[p] = vars[p];
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				if (fromCycle) {
					fromCycle = copy.startAt = {};
					for (p in vars.startAt) {
						fromCycle[p] = vars.startAt[p];
					}
					_applyCycle(copy.startAt, targets, i);
				}
				copy.delay = delay + (copy.delay || 0);
				if (i === l && onCompleteAll) {
					copy.onComplete = finalComplete;
				}
				a[i] = new TweenMax(targets[i], duration, copy);
				delay += stagger;
			}
			return a;
		};

		TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, useFrames:useFrames, overwrite:0});
		};

		TweenMax.set = function(target, vars) {
			return new TweenMax(target, 0, vars);
		};

		TweenMax.isTweening = function(target) {
			return (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target, true).length > 0);
		};

		var _getChildrenOf = function(timeline, includeTimelines) {
				var a = [],
					cnt = 0,
					tween = timeline._first;
				while (tween) {
					if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
						a[cnt++] = tween;
					} else {
						if (includeTimelines) {
							a[cnt++] = tween;
						}
						a = a.concat(_getChildrenOf(tween, includeTimelines));
						cnt = a.length;
					}
					tween = tween._next;
				}
				return a;
			},
			getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
				return _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline, includeTimelines).concat( _getChildrenOf(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline, includeTimelines) );
			};

		TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
			if (tweens == null) {
				tweens = true;
			}
			if (delayedCalls == null) {
				delayedCalls = true;
			}
			var a = getAllTweens((timelines != false)),
				l = a.length,
				allTrue = (tweens && delayedCalls && timelines),
				isDC, tween, i;
			for (i = 0; i < l; i++) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					if (complete) {
						tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
					} else {
						tween._enabled(false, false);
					}
				}
			}
		};

		TweenMax.killChildTweensOf = function(parent, complete) {
			if (parent == null) {
				return;
			}
			var tl = TweenLiteInternals.tweenLookup,
				a, curParent, p, i, l;
			if (typeof(parent) === "string") {
				parent = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(parent) || parent;
			}
			if (_isSelector(parent)) {
				parent = _slice(parent);
			}
			if (_isArray(parent)) {
				i = parent.length;
				while (--i > -1) {
					TweenMax.killChildTweensOf(parent[i], complete);
				}
				return;
			}
			a = [];
			for (p in tl) {
				curParent = tl[p].target.parentNode;
				while (curParent) {
					if (curParent === parent) {
						a = a.concat(tl[p].tweens);
					}
					curParent = curParent.parentNode;
				}
			}
			l = a.length;
			for (i = 0; i < l; i++) {
				if (complete) {
					a[i].totalTime(a[i].totalDuration());
				}
				a[i]._enabled(false, false);
			}
		};

		var _changePause = function(pause, tweens, delayedCalls, timelines) {
			tweens = (tweens !== false);
			delayedCalls = (delayedCalls !== false);
			timelines = (timelines !== false);
			var a = getAllTweens(timelines),
				allTrue = (tweens && delayedCalls && timelines),
				i = a.length,
				isDC, tween;
			while (--i > -1) {
				tween = a[i];
				if (allTrue || (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
					tween.paused(pause);
				}
			}
		};

		TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
			_changePause(true, tweens, delayedCalls, timelines);
		};

		TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
			_changePause(false, tweens, delayedCalls, timelines);
		};

		TweenMax.globalTimeScale = function(value) {
			var tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline,
				t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.time;
			if (!arguments.length) {
				return tl._timeScale;
			}
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline;
			t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
			tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
			tl._timeScale = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline._timeScale = value;
			return value;
		};


//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};

		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};

		p.duration = function(value) {
			if (!arguments.length) {
				return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.duration.call(this, value);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					//instead of Infinity, we use 999999999999 so that we can accommodate reverses
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
		};

		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};

		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};

		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};


		return TweenMax;

	}, true);

const TweenMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TweenMax;
const TweenMaxBase = TweenMax;




/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


	_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function() {

		/** @constructor **/
		var CSSPlugin = function() {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"]("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "1.20.5";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_dummyElement = {style:{}},
			_doc = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].document || {createElement: function() {return _dummyElement;}},
			_createElement = function(type, ns) {
				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].navigator || {}).userAgent || "",
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].console) {
					console.log(s);
				}
			},
			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}).getComputedStyle,

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					precise = (v === 1),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
					cache = _getComputedStyle(t).lineHeight;
					t.style.lineHeight = v;
					pix = parseFloat(_getComputedStyle(t).lineHeight);
					t.style.lineHeight = cache;
				} else if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
							style.position = "absolute";
						}
						cache = node._gsCache;
						time = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getCTM && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					return v + " ";
				}
				if (v == null || v === "") {
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
					i;
				if (a.length > 3 && !recObj) { //multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(a[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = "",
					i, color, temp;
				if (!colors.length) {
					return s;
				}
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + " " + a[1],
				toHSL;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str, p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = mpt.r(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = (v === 1) ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					} else {
						ba = ba.join(" ").split(",").join(", ").split(" ");
						ea = ea.join(" ").split(",").join(", ").split(" ");
					}
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i] + "";
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						temp = ev; //original string value so we can look for any prefix later.
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = _internals._registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement || {},
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
					}
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
					oldParent = this.parentNode,
					oldSibling = this.nextSibling,
					oldCSS = this.style.cssText,
					bbox;
				_docElement.appendChild(svg);
				svg.appendChild(this);
				this.style.display = "block";
				if (swapIfPossible) {
					try {
						bbox = this.getBBox();
						this._originalGetBBox = this.getBBox;
						this.getBBox = _getBBoxHack;
					} catch (e) { }
				} else if (this._originalGetBBox) {
					bbox = this._originalGetBBox();
				}
				if (oldSibling) {
					oldParent.insertBefore(this, oldSibling);
				} else {
					oldParent.appendChild(this);
				}
				_docElement.removeChild(svg);
				this.style.cssText = oldCSS;
				return bbox;
			},
			_getBBox = function(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (error) {
					return _getBBoxHack.call(e, true);
				}
			},
			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					style = e.style,
					isDefault, s, m, n, dec, none;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (_transformProp && ((none = (!_getComputedStyle(e) || _getComputedStyle(e).display === "none")) || !e.parentNode)) { //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
						n = style.display;
						style.display = "block";
					}
					if (!e.parentNode) {
						dec = 1; //flag
						_docElement.appendChild(e);
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (n) {
						style.display = n;
					} else if (none) {
						_removeProp(style, "display");
					}
					if (dec) {
						_docElement.removeChild(e);
					}
				}
				if (tm.svg || (e.getCTM && _isSVG(e))) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
						isDefault = 0;
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getCTM && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;
						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							t1 = a11*cos+a21*sin;
							t2 = a12*cos+a22*sin;
							t3 = a13*cos+a23*sin;
							a21 = a21*cos-a11*sin;
							a22 = a22*cos-a12*sin;
							a23 = a23*cos-a13*sin;
							a11 = t1;
							a12 = t2;
							a13 = t3;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}

						//skewX
						angle = Math.atan2(a12, a22);

						//scales
						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						a11 /= tm.scaleX;
						a12 /= tm.scaleY;
						a21 /= tm.scaleX;
						a22 /= tm.scaleY;
						if (Math.abs(angle) > min) {
							tm.skewX = angle * _RAD2DEG;
							a12 = 0; //unskews
							if (tm.skewType !== "simple") {
								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
							}

						} else {
							tm.skewX = 0;
						}

						/* //for testing purposes
						var transform = "matrix3d(",
							comma = ",",
							zero = "0";
						a13 /= tm.scaleZ;
						a23 /= tm.scaleZ;
						a31 /= tm.scaleX;
						a32 /= tm.scaleY;
						a33 /= tm.scaleZ;
						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
						console.log(transform);
						document.querySelector(".test").style[_transformProp] = transform;
						*/

						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
						if (invX) {
							tm.scaleX *= -1;
							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
						} else {
							tm.scaleY *= -1;
							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					skewY = t.skewY,
					skewX = t.skewX,
					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
					skewX += skewY;
					angle += skewY;
				}

				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew - skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (skewX) {
						angle -= skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS a[row][column]
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
				swapFunc;
			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
				swapFunc = vars[parsingProp];
				vars[parsingProp] = e;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1 = _getTransform(t, _cs, true, v.parseTransform),
				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
			cssp._transform = m1;
			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
					copy.width = _getStyle(t, "width");
					copy.height = _getStyle(t, "height");
				}
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
				}
				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (swapFunc) {
				vars[parsingProp] = swapFunc;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
			v += ""; //ensure it's a string
			return (v.substr(0,2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
		}});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				end = this.format(e).split(" "),
				esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween, index) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				if (typeof(es) === "function") {
					es = es(_index, _target);
				}
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);
				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
					continue;
				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = pt.r(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = pt.r(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function(lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof(lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
					pt.r = lookup[pt.p];
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["TweenPlugin"].activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

const CSSPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].CSSPlugin;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrPlugin", function() { return AttrPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttrPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 0.6.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */



const AttrPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
	propName: "attr",
	API: 2,
	version: "0.6.1",

	//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
	init: function(target, value, tween, index) {
		var p, end;
		if (typeof(target.setAttribute) !== "function") {
			return false;
		}
		for (p in value) {
			end = value[p];
			if (typeof(end) === "function") {
				end = end(index, target);
			}
			this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
			this._overwriteProps.push(p);
		}
		return true;
	}

});







/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPropsPlugin", function() { return RoundPropsPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getRoundFunc", function() { return _getRoundFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_roundLinkedList", function() { return _roundLinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundPropsPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 1.6.0
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


const RoundPropsPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
				propName: "roundProps",
				version: "1.7.0",
				priority: -1,
				API: 2,

				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._tween = tween;
					return true;
				}

			}),
			_getRoundFunc = function(v) { //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
				var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
				return function(n) {
					return ((Math.round(n / v) * v * p) | 0) / p;
				};
			},
			_roundLinkedList = function(node, mod) {
				while (node) {
					if (!node.f && !node.blob) {
						node.m = mod || Math.round;
					}
					node = node._next;
				}
			},
			p = RoundPropsPlugin.prototype;

		p._onInitAllProps = function() {
			var tween = this._tween,
				rp = tween.vars.roundProps,
				lookup = {},
				rpt = tween._propLookup.roundProps,
				pt, next, i, p;
			if (typeof(rp) === "object" && !rp.push) {
				for (p in rp) {
					lookup[p] = _getRoundFunc(rp[p]);
				}
			} else {
				if (typeof(rp) === "string") {
					rp = rp.split(",");
				}
				i = rp.length;
				while (--i > -1) {
					lookup[rp[i]] = Math.round;
				}
			}

			for (p in lookup) {
				pt = tween._firstPT;
				while (pt) {
					next = pt._next; //record here, because it may get removed
					if (pt.pg) {
						pt.t._mod(lookup);
					} else if (pt.n === p) {
						if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
							_roundLinkedList(pt.t._firstPT, lookup[p]);
						} else {
							this._add(pt.t, p, pt.s, pt.c, lookup[p]);
							//remove from linked list
							if (next) {
								next._prev = pt._prev;
							}
							if (pt._prev) {
								pt._prev._next = next;
							} else if (tween._firstPT === pt) {
								tween._firstPT = next;
							}
							pt._next = pt._prev = null;
							tween._propLookup[p] = rpt;
						}
					}
					pt = next;
				}
			}
			return false;
		};

		p._add = function(target, p, s, c, mod) {
			this._addTween(target, p, s, s + c, p, mod || Math.round);
			this._overwriteProps.push(p);
		};




/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalRotationPlugin", function() { return DirectionalRotationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectionalRotationPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 0.3.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/



const DirectionalRotationPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.3.1",
		API: 2,

		//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
		init: function(target, value, tween, index) {
			if (typeof(value) !== "object") {
				value = {rotation:value};
			}
			this.finals = {};
			var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
				min = 0.000001,
				p, v, start, end, dif, split;
			for (p in value) {
				if (p !== "useRadians") {
					end = value[p];
					if (typeof(end) === "function") {
						end = end(index, target);
					}
					split = (end + "").split("_");
					v = split[0];
					start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
					end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
					dif = end - start;
					if (split.length) {
						v = split.join("_");
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					if (dif > min || dif < -min) {
						this._addTween(target, p, start, start + dif, p);
						this._overwriteProps.push(p);
					}
				}
			}
			return true;
		},

		//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
		set: function(ratio) {
			var pt;
			if (ratio !== 1) {
				this._super.setRatio.call(this, ratio);
			} else {
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](this.finals[pt.p]);
					} else {
						pt.t[pt.p] = this.finals[pt.p];
					}
					pt = pt._next;
				}
			}
		}

	});

DirectionalRotationPlugin._autoCSS = true;



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return TimelineLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineLite; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function() {

		var TimelineLite = function(vars) {
				_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].call(this, vars);
				this._labels = {};
				this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
				this.smoothChildTiming = (this.vars.smoothChildTiming === true);
				this._sortChildren = true;
				this._onUpdate = this.vars.onUpdate;
				var v = this.vars,
					val, p;
				for (p in v) {
					val = v[p];
					if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
						v[p] = this._swapSelfInParams(val);
					}
				}
				if (_isArray(v.tweens)) {
					this.add(v.tweens, 0, v.align, v.stagger);
				}
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_internals = TimelineLite._internals = {},
			_isSelector = TweenLiteInternals.isSelector,
			_isArray = TweenLiteInternals.isArray,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_copy = function(vars) {
				var copy = {}, p;
				for (p in vars) {
					copy[p] = vars[p];
				}
				return copy;
			},
			_applyCycle = function(vars, targets, i) {
				var alt = vars.cycle,
					p, val;
				for (p in alt) {
					val = alt[p];
					vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
				}
				delete vars.cycle;
			},
			_pauseCallback = _internals.pauseCallback = function() {},
			_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			p = TimelineLite.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"]();

		TimelineLite.version = "2.0.1";
		p.constructor = TimelineLite;
		p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

		/* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

		p.to = function(target, duration, vars, position) {
			var Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
		};

		p.from = function(target, duration, vars, position) {
			return this.add( ((vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]).from(target, duration, vars), position);
		};

		p.fromTo = function(target, duration, fromVars, toVars, position) {
			var Engine = (toVars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"];
			return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
		};

		p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, callbackScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
				cycle = vars.cycle,
				copy, i;
			if (typeof(targets) === "string") {
				targets = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].selector(targets) || targets;
			}
			targets = targets || [];
			if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
				targets = _slice(targets);
			}
			stagger = stagger || 0;
			if (stagger < 0) {
				targets = _slice(targets);
				targets.reverse();
				stagger *= -1;
			}
			for (i = 0; i < targets.length; i++) {
				copy = _copy(vars);
				if (copy.startAt) {
					copy.startAt = _copy(copy.startAt);
					if (copy.startAt.cycle) {
						_applyCycle(copy.startAt, targets, i);
					}
				}
				if (cycle) {
					_applyCycle(copy, targets, i);
					if (copy.duration != null) {
						duration = copy.duration;
						delete copy.duration;
					}
				}
				tl.to(targets[i], duration, copy, i * stagger);
			}
			return this.add(tl, position);
		};

		p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			vars.immediateRender = (vars.immediateRender != false);
			vars.runBackwards = true;
			return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
		};

		p.call = function(callback, params, scope, position) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};

		p.set = function(target, vars, position) {
			position = this._parseTimeOrLabel(position, 0, true);
			if (vars.immediateRender == null) {
				vars.immediateRender = (position === this._time && !this._paused);
			}
			return this.add( new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"](target, 0, vars), position);
		};

		TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
			vars = vars || {};
			if (vars.smoothChildTiming == null) {
				vars.smoothChildTiming = true;
			}
			var tl = new TimelineLite(vars),
				root = tl._timeline,
				hasNegativeStart, time,	tween, next;
			if (ignoreDelayedCalls == null) {
				ignoreDelayedCalls = true;
			}
			root._remove(tl, true);
			tl._startTime = 0;
			tl._rawPrevTime = tl._time = tl._totalTime = root._time;
			tween = root._first;
			while (tween) {
				next = tween._next;
				if (!ignoreDelayedCalls || !(tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"] && tween.target === tween.vars.onComplete)) {
					time = tween._startTime - tween._delay;
					if (time < 0) {
						hasNegativeStart = 1;
					}
					tl.add(tween, time);
				}
				tween = next;
			}
			root.add(tl, 0);
			if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
				tl.totalDuration();
			}
			return tl;
		};

		p.add = function(value, position, align, stagger) {
			var curTime, l, i, child, tl, beforeRawTime;
			if (typeof(position) !== "number") {
				position = this._parseTimeOrLabel(position, 0, true, value);
			}
			if (!(value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"])) {
				if ((value instanceof Array) || (value && value.push && _isArray(value))) {
					align = align || "normal";
					stagger = stagger || 0;
					curTime = position;
					l = value.length;
					for (i = 0; i < l; i++) {
						if (_isArray(child = value[i])) {
							child = new TimelineLite({tweens:child});
						}
						this.add(child, curTime);
						if (typeof(child) !== "string" && typeof(child) !== "function") {
							if (align === "sequence") {
								curTime = child._startTime + (child.totalDuration() / child._timeScale);
							} else if (align === "start") {
								child._startTime -= child.delay();
							}
						}
						curTime += stagger;
					}
					return this._uncache(true);
				} else if (typeof(value) === "string") {
					return this.addLabel(value, position);
				} else if (typeof(value) === "function") {
					value = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, value);
				} else {
					throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
				}
			}

			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype.add.call(this, value, position);

			if (value._time) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
				value.render((this.rawTime() - value._startTime) * value._timeScale, false, false);
			}

			//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
			if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
				//in case any of the ancestors had completed but should now be enabled...
				tl = this;
				beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
				while (tl._timeline) {
					if (beforeRawTime && tl._timeline.smoothChildTiming) {
						tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
					} else if (tl._gc) {
						tl._enabled(true, false);
					}
					tl = tl._timeline;
				}
			}

			return this;
		};

		p.remove = function(value) {
			if (value instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]) {
				this._remove(value, false);
				var tl = value._timeline = value.vars.useFrames ? _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline : _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
				value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
				return this;
			} else if (value instanceof Array || (value && value.push && _isArray(value))) {
				var i = value.length;
				while (--i > -1) {
					this.remove(value[i]);
				}
				return this;
			} else if (typeof(value) === "string") {
				return this.removeLabel(value);
			}
			return this.kill(null, value);
		};

		p._remove = function(tween, skipDisable) {
			_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._remove.call(this, tween, skipDisable);
			var last = this._last;
			if (!last) {
				this._time = this._totalTime = this._duration = this._totalDuration = 0;
			} else if (this._time > this.duration()) {
				this._time = this._duration;
				this._totalTime = this._totalDuration;
			}
			return this;
		};

		p.append = function(value, offsetOrLabel) {
			return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
		};

		p.insert = p.insertMultiple = function(value, position, align, stagger) {
			return this.add(value, position || 0, align, stagger);
		};

		p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
			return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
		};

		p.addLabel = function(label, position) {
			this._labels[label] = this._parseTimeOrLabel(position);
			return this;
		};

		p.addPause = function(position, callback, params, scope) {
			var t = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, _pauseCallback, params, scope || this);
			t.vars.onComplete = t.vars.onReverseComplete = callback;
			t.data = "isPause";
			this._hasPause = true;
			return this.add(t, position);
		};

		p.removeLabel = function(label) {
			delete this._labels[label];
			return this;
		};

		p.getLabelTime = function(label) {
			return (this._labels[label] != null) ? this._labels[label] : -1;
		};

		p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
			var clippedDuration, i;
			//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
			if (ignore instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore.timeline === this) {
				this.remove(ignore);
			} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
				i = ignore.length;
				while (--i > -1) {
					if (ignore[i] instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"] && ignore[i].timeline === this) {
						this.remove(ignore[i]);
					}
				}
			}
			clippedDuration = (typeof(timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
			if (typeof(offsetOrLabel) === "string") {
				return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
			}
			offsetOrLabel = offsetOrLabel || 0;
			if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
				i = timeOrLabel.indexOf("=");
				if (i === -1) {
					if (this._labels[timeOrLabel] == null) {
						return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
					}
					return this._labels[timeOrLabel] + offsetOrLabel;
				}
				offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
				timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : clippedDuration;
			} else if (timeOrLabel == null) {
				timeOrLabel = clippedDuration;
			}
			return Number(timeOrLabel) + offsetOrLabel;
		};

		p.seek = function(position, suppressEvents) {
			return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
		};

		p.stop = function() {
			return this.paused(true);
		};

		p.gotoAndPlay = function(position, suppressEvents) {
			return this.play(position, suppressEvents);
		};

		p.gotoAndStop = function(position, suppressEvents) {
			return this.pause(position, suppressEvents);
		};

		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var prevTime = this._time,
				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				prevStart = this._startTime,
				prevTimeScale = this._timeScale,
				prevPaused = this._paused,
				tween, isComplete, next, callback, internalForce, pauseTween, curTime;
			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += this._time - prevTime;
			}
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = totalDur;
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
						internalForce = true;
						if (this._rawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}

			} else {

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					if (time >= prevTime) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

				this._totalTime = this._time = this._rawPrevTime = time;
			}
			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}

			if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0 || !this._duration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}

			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}

			if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};

		p._hasPausedChild = function() {
			var tween = this._first;
			while (tween) {
				if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
					return true;
				}
				tween = tween._next;
			}
			return false;
		};

		p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || -9999999999;
			var a = [],
				tween = this._first,
				cnt = 0;
			while (tween) {
				if (tween._startTime < ignoreBeforeTime) {
					//do nothing
				} else if (tween instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
					if (tweens !== false) {
						a[cnt++] = tween;
					}
				} else {
					if (timelines !== false) {
						a[cnt++] = tween;
					}
					if (nested !== false) {
						a = a.concat(tween.getChildren(true, tweens, timelines));
						cnt = a.length;
					}
				}
				tween = tween._next;
			}
			return a;
		};

		p.getTweensOf = function(target, nested) {
			var disabled = this._gc,
				a = [],
				cnt = 0,
				tweens, i;
			if (disabled) {
				this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
			}
			tweens = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTweensOf(target);
			i = tweens.length;
			while (--i > -1) {
				if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
					a[cnt++] = tweens[i];
				}
			}
			if (disabled) {
				this._enabled(false, true);
			}
			return a;
		};

		p.recent = function() {
			return this._recent;
		};

		p._contains = function(tween) {
			var tl = tween.timeline;
			while (tl) {
				if (tl === this) {
					return true;
				}
				tl = tl.timeline;
			}
			return false;
		};

		p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
			ignoreBeforeTime = ignoreBeforeTime || 0;
			var tween = this._first,
				labels = this._labels,
				p;
			while (tween) {
				if (tween._startTime >= ignoreBeforeTime) {
					tween._startTime += amount;
				}
				tween = tween._next;
			}
			if (adjustLabels) {
				for (p in labels) {
					if (labels[p] >= ignoreBeforeTime) {
						labels[p] += amount;
					}
				}
			}
			return this._uncache(true);
		};

		p._kill = function(vars, target) {
			if (!vars && !target) {
				return this._enabled(false, false);
			}
			var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
				i = tweens.length,
				changed = false;
			while (--i > -1) {
				if (tweens[i]._kill(vars, target)) {
					changed = true;
				}
			}
			return changed;
		};

		p.clear = function(labels) {
			var tweens = this.getChildren(false, true, true),
				i = tweens.length;
			this._time = this._totalTime = 0;
			while (--i > -1) {
				tweens[i]._enabled(false, false);
			}
			if (labels !== false) {
				this._labels = {};
			}
			return this._uncache(true);
		};

		p.invalidate = function() {
			var tween = this._first;
			while (tween) {
				tween.invalidate();
				tween = tween._next;
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.invalidate.call(this);;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (enabled === this._gc) {
				var tween = this._first;
				while (tween) {
					tween._enabled(enabled, true);
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["SimpleTimeline"].prototype._enabled.call(this, enabled, ignoreTimeline);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			this._forcingPlayhead = true;
			var val = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.totalTime.apply(this, arguments);
			this._forcingPlayhead = false;
			return val;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					this.totalDuration(); //just triggers recalculation
				}
				return this._duration;
			}
			if (this.duration() !== 0 && value !== 0) {
				this.timeScale(this._duration / value);
			}
			return this;
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					var max = 0,
						tween = this._last,
						prevStart = 999999999999,
						prev, end;
					while (tween) {
						prev = tween._prev; //record it here in case the tween changes position in the sequence...
						if (tween._dirty) {
							tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
						}
						if (tween._startTime > prevStart && this._sortChildren && !tween._paused && !this._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
							this._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
							this.add(tween, tween._startTime - tween._delay);
							this._calculatingDuration = 0;
						} else {
							prevStart = tween._startTime;
						}
						if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
							max -= tween._startTime;
							if (this._timeline.smoothChildTiming) {
								this._startTime += tween._startTime / this._timeScale;
								this._time -= tween._startTime;
								this._totalTime -= tween._startTime;
								this._rawPrevTime -= tween._startTime;
							}
							this.shiftChildren(-tween._startTime, false, -9999999999);
							prevStart = 0;
						}
						end = tween._startTime + (tween._totalDuration / tween._timeScale);
						if (end > max) {
							max = end;
						}
						tween = prev;
					}
					this._duration = this._totalDuration = max;
					this._dirty = false;
				}
				return this._totalDuration;
			}
			return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
		};

		p.paused = function(value) {
			if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
				var tween = this._first,
					time = this._time;
				while (tween) {
					if (tween._startTime === time && tween.data === "isPause") {
						tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
					}
					tween = tween._next;
				}
			}
			return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"].prototype.paused.apply(this, arguments);
		};

		p.usesFrames = function() {
			var tl = this._timeline;
			while (tl._timeline) {
				tl = tl._timeline;
			}
			return (tl === _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]._rootFramesTimeline);
		};

		p.rawTime = function(wrapRepeats) {
			return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
		};

		return TimelineLite;

	}, true);

const TimelineLite = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TimelineLite;



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return TimelineMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimelineMax; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/*!
 * VERSION: 2.0.1
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */




_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function() {
		
		var TimelineMax = function(vars) {
				_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, vars);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = (this.vars.yoyo === true);
				this._dirty = true;
			},
			_tinyNum = 0.0000000001,
			TweenLiteInternals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"]._internals,
			_lazyTweens = TweenLiteInternals.lazyTweens,
			_lazyRender = TweenLiteInternals.lazyRender,
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			_easeNone = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](null, null, 1, 0),
			p = TimelineMax.prototype = new _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			
		p.constructor = TimelineMax;
		p.kill()._gc = false;
		TimelineMax.version = "2.0.1";
		
		p.invalidate = function() {
			this._yoyo = (this.vars.yoyo === true);
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._uncache(true);
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};
		
		p.addCallback = function(callback, position, params, scope) {
			return this.add( _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"].delayedCall(0, callback, params, scope), position);
		};
		
		p.removeCallback = function(callback, position) {
			if (callback) {
				if (position == null) {
					this._kill(null, callback);
				} else {
					var a = this.getTweensOf(callback, false),
						i = a.length,
						time = this._parseTimeOrLabel(position);
					while (--i > -1) {
						if (a[i]._startTime === time) {
							a[i]._enabled(false, false);
						}
					}
				}
			}
			return this;
		};

		p.removePause = function(position) {
			return this.removeCallback(_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"]._internals.pauseCallback, position);
		};

		p.tweenTo = function(position, vars) {
			vars = vars || {};
			var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false, lazy:false},
				Engine = (vars.repeat && _globals.TweenMax) || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["default"],
				duration, p, t;
			for (p in vars) {
				copy[p] = vars[p];
			}
			copy.time = this._parseTimeOrLabel(position);
			duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
			t = new Engine(this, duration, copy);
			copy.onStart = function() {
				t.target.paused(true);
				if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
					t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale ).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
				}
				if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
					vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
				}
			};
			return t;
		};

		p.tweenFromTo = function(fromPosition, toPosition, vars) {
			vars = vars || {};
			fromPosition = this._parseTimeOrLabel(fromPosition);
			vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], callbackScope:this};
			vars.immediateRender = (vars.immediateRender !== false);
			var t = this.tweenTo(toPosition, vars);
			t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
			return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
		};
		
		p.render = function(time, suppressEvents, force) {
			if (this._gc) {
				this._enabled(true, false);
			}
			var prevTime = this._time,
				totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
				dur = this._duration,
				prevTotalTime = this._totalTime,
				prevStart = this._startTime, 
				prevTimeScale = this._timeScale, 
				prevRawPrevTime = this._rawPrevTime,
				prevPaused = this._paused, 
				prevCycle = this._cycle, 
				tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime;
			if (prevTime !== this._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
				time += this._time - prevTime;
			}
			if (time >= totalDur - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				if (!this._locked) {
					this._totalTime = totalDur;
					this._cycle = this._repeat;
				}
				if (!this._reversed) if (!this._hasPausedChild()) {
					isComplete = true;
					callback = "onComplete";
					internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					if (this._duration === 0) if ((time <= 0 && time >= -0.0000001) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
						internalForce = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
				}
				this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				if (this._yoyo && (this._cycle & 1) !== 0) {
					this._time = time = 0;
				} else {
					this._time = dur;
					time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
				}
				
			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				if (!this._locked) {
					this._totalTime = this._cycle = 0;
				}
				this._time = 0;
				if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (this._timeline.autoRemoveChildren && this._reversed) {
						internalForce = isComplete = true;
						callback = "onReverseComplete";
					} else if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
						internalForce = true;
					}
					this._rawPrevTime = time;
				} else {
					this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
						tween = this._first;
						while (tween && tween._startTime === 0) {
							if (!tween._duration) {
								isComplete = false;
							}
							tween = tween._next;
						}
					}
					time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
					if (!this._initted) {
						internalForce = true;
					}
				}
				
			} else {
				if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
					internalForce = true;
				}
				this._time = this._rawPrevTime = time;
				if (!this._locked) {
					this._totalTime = time;
					if (this._repeat !== 0) {
						cycleDuration = dur + this._repeatDelay;
						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - (this._cycle * cycleDuration);
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = dur - this._time;
						}
						if (this._time > dur) {
							this._time = dur;
							time = dur + 0.0001; //to avoid occasional floating point rounding error
						} else if (this._time < 0) {
							this._time = time = 0;
						} else {
							time = this._time;
						}
					}
				}

				if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
					time = this._time;
					if (time >= prevTime || (this._repeat && prevCycle !== this._cycle)) {
						tween = this._first;
						while (tween && tween._startTime <= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
								pauseTween = tween;
							}
							tween = tween._next;
						}
					} else {
						tween = this._last;
						while (tween && tween._startTime >= time && !pauseTween) {
							if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
								pauseTween = tween;
							}
							tween = tween._prev;
						}
					}
					if (pauseTween && pauseTween._startTime < dur) {
						this._time = time = pauseTween._startTime;
						this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
					}
				}

			}
			
			if (this._cycle !== prevCycle) if (!this._locked) {
				/*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example, 
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So 
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work. 
				*/
				var backwards = (this._yoyo && (prevCycle & 1) !== 0),
					wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
					recTotalTime = this._totalTime,
					recCycle = this._cycle,
					recRawPrevTime = this._rawPrevTime,
					recTime = this._time;
				
				this._totalTime = prevCycle * dur;
				if (this._cycle < prevCycle) {
					backwards = !backwards;
				} else {
					this._totalTime += dur;
				}
				this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
				
				this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
				this._cycle = prevCycle;
				this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
				prevTime = (backwards) ? 0 : dur;
				this.render(prevTime, suppressEvents, (dur === 0));
				if (!suppressEvents) if (!this._gc) {
					if (this.vars.onRepeat) {
						this._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
						this._locked = false;
						this._callback("onRepeat");
					}
				}
				if (prevTime !== this._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
					return;
				}
				if (wrap) {
					this._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
					this._locked = true;
					prevTime = (backwards) ? dur + 0.0001 : -0.0001;
					this.render(prevTime, true, false);
				}
				this._locked = false;
				if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
					return;
				}
				this._time = recTime;
				this._totalTime = recTotalTime;
				this._cycle = recCycle;
				this._rawPrevTime = recRawPrevTime;
			}

			if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
				if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
					this._callback("onUpdate");
				}
				return;
			} else if (!this._initted) {
				this._initted = true;
			}

			if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
				this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
			}
			
			if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0 || !this._totalDuration) if (!suppressEvents) {
				this._callback("onStart");
			}

			curTime = this._time;
			if (curTime >= prevTime) {
				tween = this._first;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			} else {
				tween = this._last;
				while (tween) {
					next = tween._prev; //record it here because the value could change after rendering...
					if (curTime !== this._time || (this._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
						break;
					} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
						if (pauseTween === tween) {
							pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
							while (pauseTween && pauseTween.endTime() > this._time) {
								pauseTween.render( (pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
								pauseTween = pauseTween._prev;
							}
							pauseTween = null;
							this.pause();
						}
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			}
			
			if (this._onUpdate) if (!suppressEvents) {
				if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
					_lazyRender();
				}
				this._callback("onUpdate");
			}
			if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
				if (isComplete) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
			}
		};
		
		p.getActive = function(nested, tweens, timelines) {
			if (nested == null) {
				nested = true;
			}
			if (tweens == null) {
				tweens = true;
			}
			if (timelines == null) {
				timelines = false;
			}
			var a = [], 
				all = this.getChildren(nested, tweens, timelines), 
				cnt = 0, 
				l = all.length,
				i, tween;
			for (i = 0; i < l; i++) {
				tween = all[i];
				if (tween.isActive()) {
					a[cnt++] = tween;
				}
			}
			return a;
		};
		
		
		p.getLabelAfter = function(time) {
			if (!time) if (time !== 0) { //faster than isNan()
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				l = labels.length,
				i;
			for (i = 0; i < l; i++) {
				if (labels[i].time > time) {
					return labels[i].name;
				}
			}
			return null;
		};
		
		p.getLabelBefore = function(time) {
			if (time == null) {
				time = this._time;
			}
			var labels = this.getLabelsArray(),
				i = labels.length;
			while (--i > -1) {
				if (labels[i].time < time) {
					return labels[i].name;
				}
			}
			return null;
		};
		
		p.getLabelsArray = function() {
			var a = [],
				cnt = 0,
				p;
			for (p in this._labels) {
				a[cnt++] = {time:this._labels[p], name:p};
			}
			a.sort(function(a,b) {
				return a.time - b.time;
			});
			return a;
		};

		p.invalidate = function() {
			this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
			return _TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.invalidate.call(this);
		};

		
//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
		
		p.progress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
		};
		
		p.totalProgress = function(value, suppressEvents) {
			return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime( this.totalDuration() * value, suppressEvents);
		};

		p.totalDuration = function(value) {
			if (!arguments.length) {
				if (this._dirty) {
					_TimelineLite_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.totalDuration.call(this); //just forces refresh
					//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
					this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
				}
				return this._totalDuration;
			}
			return (this._repeat === -1 || !value) ? this : this.timeScale( this.totalDuration() / value );
		};
		
		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			if (value > this._duration) {
				value = this._duration;
			}
			if (this._yoyo && (this._cycle & 1) !== 0) {
				value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
			} else if (this._repeat !== 0) {
				value += this._cycle * (this._duration + this._repeatDelay);
			}
			return this.totalTime(value, suppressEvents);
		};
		
		p.repeat = function(value) {
			if (!arguments.length) {
				return this._repeat;
			}
			this._repeat = value;
			return this._uncache(true);
		};
		
		p.repeatDelay = function(value) {
			if (!arguments.length) {
				return this._repeatDelay;
			}
			this._repeatDelay = value;
			return this._uncache(true);
		};
		
		p.yoyo = function(value) {
			if (!arguments.length) {
				return this._yoyo;
			}
			this._yoyo = value;
			return this;
		};
		
		p.currentLabel = function(value) {
			if (!arguments.length) {
				return this.getLabelBefore(this._time + 0.00000001);
			}
			return this.seek(value, true);
		};
		
		return TimelineMax;
		
	}, true);

const TimelineMax = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].TimelineMax;


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPlugin", function() { return BezierPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BezierPlugin; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


		var _RAD2DEG = 180 / Math.PI,
			_r1 = [],
			_r2 = [],
			_r3 = [],
			_corProps = {},
			_globals = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.globals,
			Segment = function(a, b, c, d) {
				if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
					c = d - (d - b) / 1000000;
				}
				if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
					b = a + (c - a) / 1000000;
				}
				this.a = a;
				this.b = b;
				this.c = c;
				this.d = d;
				this.da = d - a;
				this.ca = c - a;
				this.ba = b - a;
			},
			_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
			cubicToQuadratic = function(a, b, c, d) {
				var q1 = {a:a},
					q2 = {},
					q3 = {},
					q4 = {c:d},
					mab = (a + b) / 2,
					mbc = (b + c) / 2,
					mcd = (c + d) / 2,
					mabc = (mab + mbc) / 2,
					mbcd = (mbc + mcd) / 2,
					m8 = (mbcd - mabc) / 8;
				q1.b = mab + (a - mab) / 4;
				q2.b = mabc + m8;
				q1.c = q2.a = (q1.b + q2.b) / 2;
				q2.c = q3.a = (mabc + mbcd) / 2;
				q3.b = mbcd - m8;
				q4.b = mcd + (d - mcd) / 4;
				q3.c = q4.a = (q3.b + q4.b) / 2;
				return [q1, q2, q3, q4];
			},
			_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
				var l = a.length - 1,
					ii = 0,
					cp1 = a[0].a,
					i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
				for (i = 0; i < l; i++) {
					seg = a[ii];
					p1 = seg.a;
					p2 = seg.d;
					p3 = a[ii+1].d;

					if (correlate) {
						r1 = _r1[i];
						r2 = _r2[i];
						tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
						m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
						m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
						mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
					} else {
						m1 = p2 - (p2 - p1) * curviness * 0.5;
						m2 = p2 + (p3 - p2) * curviness * 0.5;
						mm = p2 - (m1 + m2) / 2;
					}
					m1 += mm;
					m2 += mm;

					seg.c = cp2 = m1;
					if (i !== 0) {
						seg.b = cp1;
					} else {
						seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
					}

					seg.da = p2 - p1;
					seg.ca = cp2 - p1;
					seg.ba = cp1 - p1;

					if (quad) {
						qb = cubicToQuadratic(p1, cp1, cp2, p2);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
						ii += 4;
					} else {
						ii++;
					}

					cp1 = m2;
				}
				seg = a[ii];
				seg.b = cp1;
				seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
				seg.da = seg.d - seg.a;
				seg.ca = seg.c - seg.a;
				seg.ba = cp1 - seg.a;
				if (quad) {
					qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
					a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
				}
			},
			_parseAnchors = function(values, p, correlate, prepend) {
				var a = [],
					l, i, p1, p2, p3, tmp;
				if (prepend) {
					values = [prepend].concat(values);
					i = values.length;
					while (--i > -1) {
						if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
							values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
						}
					}
				}
				l = values.length - 2;
				if (l < 0) {
					a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
					return a;
				}
				for (i = 0; i < l; i++) {
					p1 = values[i][p];
					p2 = values[i+1][p];
					a[i] = new Segment(p1, 0, 0, p2);
					if (correlate) {
						p3 = values[i+2][p];
						_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
						_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
					}
				}
				a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
				return a;
			},
			bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
				var obj = {},
					props = [],
					first = prepend || values[0],
					i, p, a, j, r, l, seamless, last;
				correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
				if (curviness == null) {
					curviness = 1;
				}
				for (p in values[0]) {
					props.push(p);
				}
				//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
				if (values.length > 1) {
					last = values[values.length - 1];
					seamless = true;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
							seamless = false;
							break;
						}
					}
					if (seamless) {
						values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
						if (prepend) {
							values.unshift(prepend);
						}
						values.push(values[1]);
						prepend = values[values.length - 3];
					}
				}
				_r1.length = _r2.length = _r3.length = 0;
				i = props.length;
				while (--i > -1) {
					p = props[i];
					_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
					obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
				}
				i = _r1.length;
				while (--i > -1) {
					_r1[i] = Math.sqrt(_r1[i]);
					_r2[i] = Math.sqrt(_r2[i]);
				}
				if (!basic) {
					i = props.length;
					while (--i > -1) {
						if (_corProps[p]) {
							a = obj[props[i]];
							l = a.length - 1;
							for (j = 0; j < l; j++) {
								r = (a[j+1].da / _r2[j] + a[j].da / _r1[j]) || 0;
								_r3[j] = (_r3[j] || 0) + r * r;
							}
						}
					}
					i = _r3.length;
					while (--i > -1) {
						_r3[i] = Math.sqrt(_r3[i]);
					}
				}
				i = props.length;
				j = quadratic ? 4 : 1;
				while (--i > -1) {
					p = props[i];
					a = obj[p];
					_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
					if (seamless) {
						a.splice(0, j);
						a.splice(a.length - j, j);
					}
				}
				return obj;
			},
			_parseBezierData = function(values, type, prepend) {
				type = type || "soft";
				var obj = {},
					inc = (type === "cubic") ? 3 : 2,
					soft = (type === "soft"),
					props = [],
					a, b, c, d, cur, i, j, l, p, cnt, tmp;
				if (soft && prepend) {
					values = [prepend].concat(values);
				}
				if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
				for (p in values[0]) {
					props.push(p);
				}
				i = props.length;
				while (--i > -1) {
					p = props[i];
					obj[p] = cur = [];
					cnt = 0;
					l = values.length;
					for (j = 0; j < l; j++) {
						a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
						if (soft) if (j > 1) if (j < l - 1) {
							cur[cnt++] = (a + cur[cnt-2]) / 2;
						}
						cur[cnt++] = a;
					}
					l = cnt - inc + 1;
					cnt = 0;
					for (j = 0; j < l; j += inc) {
						a = cur[j];
						b = cur[j+1];
						c = cur[j+2];
						d = (inc === 2) ? 0 : cur[j+3];
						cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
					}
					cur.length = cnt;
				}
				return obj;
			},
			_addCubicLengths = function(a, steps, resolution) {
				var inc = 1 / resolution,
					j = a.length,
					d, d1, s, da, ca, ba, p, i, inv, bez, index;
				while (--j > -1) {
					bez = a[j];
					s = bez.a;
					da = bez.d - s;
					ca = bez.c - s;
					ba = bez.b - s;
					d = d1 = 0;
					for (i = 1; i <= resolution; i++) {
						p = inc * i;
						inv = 1 - p;
						d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
						index = j * resolution + i - 1;
						steps[index] = (steps[index] || 0) + d * d;
					}
				}
			},
			_parseLengthData = function(obj, resolution) {
				resolution = resolution >> 0 || 6;
				var a = [],
					lengths = [],
					d = 0,
					total = 0,
					threshold = resolution - 1,
					segments = [],
					curLS = [], //current length segments array
					p, i, l, index;
				for (p in obj) {
					_addCubicLengths(obj[p], a, resolution);
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					d += Math.sqrt(a[i]);
					index = i % resolution;
					curLS[index] = d;
					if (index === threshold) {
						total += d;
						index = (i / resolution) >> 0;
						segments[index] = curLS;
						lengths[index] = total;
						d = 0;
						curLS = [];
					}
				}
				return {length:total, lengths:lengths, segments:segments};
			},



			BezierPlugin = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine.plugin({
					propName: "bezier",
					priority: -1,
					version: "1.3.8",
					API: 2,
					global:true,

					//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, vars, tween) {
						this._target = target;
						if (vars instanceof Array) {
							vars = {values:vars};
						}
						this._func = {};
						this._mod = {};
						this._props = [];
						this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
						var values = vars.values || [],
							first = {},
							second = values[0],
							autoRotate = vars.autoRotate || tween.vars.orientToBezier,
							p, isFunc, i, j, prepend;

						this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
						for (p in second) {
							this._props.push(p);
						}

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];

							this._overwriteProps.push(p);
							isFunc = this._func[p] = (typeof(target[p]) === "function");
							first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
							if (!prepend) if (first[p] !== values[0][p]) {
								prepend = first;
							}
						}
						this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
						this._segCount = this._beziers[p].length;

						if (this._timeRes) {
							var ld = _parseLengthData(this._beziers, this._timeRes);
							this._length = ld.length;
							this._lengths = ld.lengths;
							this._segments = ld.segments;
							this._l1 = this._li = this._s1 = this._si = 0;
							this._l2 = this._lengths[0];
							this._curSeg = this._segments[0];
							this._s2 = this._curSeg[0];
							this._prec = 1 / this._curSeg.length;
						}

						if ((autoRotate = this._autoRotate)) {
							this._initialRotations = [];
							if (!(autoRotate[0] instanceof Array)) {
								this._autoRotate = autoRotate = [autoRotate];
							}
							i = autoRotate.length;
							while (--i > -1) {
								for (j = 0; j < 3; j++) {
									p = autoRotate[i][j];
									this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
								}
								p = autoRotate[i][2];
								this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
								this._overwriteProps.push(p);
							}
						}
						this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
						return true;
					},

					//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
					set: function(v) {
						var segments = this._segCount,
							func = this._func,
							target = this._target,
							notStart = (v !== this._startRatio),
							curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
						if (!this._timeRes) {
							curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
							t = (v - (curIndex * (1 / segments))) * segments;
						} else {
							lengths = this._lengths;
							curSeg = this._curSeg;
							v *= this._length;
							i = this._li;
							//find the appropriate segment (if the currently cached one isn't correct)
							if (v > this._l2 && i < segments - 1) {
								l = segments - 1;
								while (i < l && (this._l2 = lengths[++i]) <= v) {	}
								this._l1 = lengths[i-1];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s2 = curSeg[(this._s1 = this._si = 0)];
							} else if (v < this._l1 && i > 0) {
								while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
								if (i === 0 && v < this._l1) {
									this._l1 = 0;
								} else {
									i++;
								}
								this._l2 = lengths[i];
								this._li = i;
								this._curSeg = curSeg = this._segments[i];
								this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
								this._s2 = curSeg[this._si];
							}
							curIndex = i;
							//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
							v -= this._l1;
							i = this._si;
							if (v > this._s2 && i < curSeg.length - 1) {
								l = curSeg.length - 1;
								while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
								this._s1 = curSeg[i-1];
								this._si = i;
							} else if (v < this._s1 && i > 0) {
								while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
								if (i === 0 && v < this._s1) {
									this._s1 = 0;
								} else {
									i++;
								}
								this._s2 = curSeg[i];
								this._si = i;
							}
							t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
						}
						inv = 1 - t;

						i = this._props.length;
						while (--i > -1) {
							p = this._props[i];
							b = this._beziers[p][curIndex];
							val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
							if (this._mod[p]) {
								val = this._mod[p](val, target);
							}
							if (func[p]) {
								target[p](val);
							} else {
								target[p] = val;
							}
						}

						if (this._autoRotate) {
							var ar = this._autoRotate,
								b2, x1, y1, x2, y2, add, conv;
							i = ar.length;
							while (--i > -1) {
								p = ar[i][2];
								add = ar[i][3] || 0;
								conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
								b = this._beziers[ar[i][0]];
								b2 = this._beziers[ar[i][1]];

								if (b && b2) { //in case one of the properties got overwritten.
									b = b[curIndex];
									b2 = b2[curIndex];

									x1 = b.a + (b.b - b.a) * t;
									x2 = b.b + (b.c - b.b) * t;
									x1 += (x2 - x1) * t;
									x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

									y1 = b2.a + (b2.b - b2.a) * t;
									y2 = b2.b + (b2.c - b2.b) * t;
									y1 += (y2 - y1) * t;
									y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

									val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

									if (this._mod[p]) {
										val = this._mod[p](val, target); //for modProps
									}

									if (func[p]) {
										target[p](val);
									} else {
										target[p] = val;
									}
								}
							}
						}
					}
			}),
			p = BezierPlugin.prototype;


		BezierPlugin.bezierThrough = bezierThrough;
		BezierPlugin.cubicToQuadratic = cubicToQuadratic;
		BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
		BezierPlugin.quadraticToCubic = function(a, b, c) {
			return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
		};

		BezierPlugin._cssRegister = function() {
			var CSSPlugin = _globals.CSSPlugin;
			if (!CSSPlugin) {
				return;
			}
			var _internals = CSSPlugin._internals,
				_parseToProxy = _internals._parseToProxy,
				_setPluginRatio = _internals._setPluginRatio,
				CSSPropTween = _internals.CSSPropTween;
			_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
				if (e instanceof Array) {
					e = {values:e};
				}
				plugin = new BezierPlugin();
				var values = e.values,
					l = values.length - 1,
					pluginValues = [],
					v = {},
					i, p, data;
				if (l < 0) {
					return pt;
				}
				for (i = 0; i <= l; i++) {
					data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
					pluginValues[i] = data.end;
				}
				for (p in e) {
					v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
				}
				v.values = pluginValues;
				pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
				pt.data = data;
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				if (v.autoRotate === 0) {
					v.autoRotate = true;
				}
				if (v.autoRotate && !(v.autoRotate instanceof Array)) {
					i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
					v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
				}
				if (v.autoRotate) {
					if (!cssp._transform) {
						cssp._enableTransforms(false);
					}
					data.autoRotate = cssp._target._gsTransform;
					data.proxy.rotation = data.autoRotate.rotation || 0;
					cssp._overwriteProps.push("rotation");
				}
				plugin._onInitTween(data.proxy, v, cssp._tween);
				return pt;
			}});
		};

		p._mod = function(lookup) {
			var op = this._overwriteProps,
				i = op.length,
				val;
			while (--i > -1) {
				val = lookup[op[i]];
				if (val && typeof(val) === "function") {
					this._mod[op[i]] = val;
				}
			}
		};

		p._kill = function(lookup) {
			var a = this._props,
				p, i;
			for (p in this._beziers) {
				if (p in lookup) {
					delete this._beziers[p];
					delete this._func[p];
					i = a.length;
					while (--i > -1) {
						if (a[i] === p) {
							a.splice(i, 1);
						}
					}
				}
			}
			a = this._autoRotate;
			if (a) {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i][2]]) {
						a.splice(i, 1);
					}
				}
			}
			return this._super._kill.call(this, lookup);
		};



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoughEase", function() { return RoughEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlowMo", function() { return SlowMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return Circ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpoScaleEase", function() { return ExpoScaleEase; });
/* harmony import */ var _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/*!
 * VERSION: 1.16.0
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/



_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]._gsDefine("easing.Back", ["easing.Ease"], function() {
		
		var w = (_TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].GreenSockGlobals || _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"]),
			gs = w.com.greensock,
			_2PI = Math.PI * 2,
			_HALF_PI = Math.PI / 2,
			_class = gs._class,
			_create = function(n, f) {
				var C = _class("easing." + n, function(){}, true),
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				return C;
			},
			_easeReg = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
			_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
				var C = _class("easing."+name, {
					easeOut:new EaseOut(),
					easeIn:new EaseIn(),
					easeInOut:new EaseInOut()
				}, true);
				_easeReg(C, name);
				return C;
			},
			EasePoint = function(time, value, next) {
				this.t = time;
				this.v = value;
				if (next) {
					this.next = next;
					next.prev = this;
					this.c = next.v - value;
					this.gap = next.t - time;
				}
			},

			//Back
			_createBack = function(n, f) {
				var C = _class("easing." + n, function(overshoot) {
						this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
						this._p2 = this._p1 * 1.525;
					}, true), 
					p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(overshoot) {
					return new C(overshoot);
				};
				return C;
			},

			Back = _wrap("Back",
				_createBack("BackOut", function(p) {
					return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
				}),
				_createBack("BackIn", function(p) {
					return p * p * ((this._p1 + 1) * p - this._p1);
				}),
				_createBack("BackInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
				})
			),


			//SlowMo
			SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
				power = (power || power === 0) ? power : 0.7;
				if (linearRatio == null) {
					linearRatio = 0.7;
				} else if (linearRatio > 1) {
					linearRatio = 1;
				}
				this._p = (linearRatio !== 1) ? power : 0;
				this._p1 = (1 - linearRatio) / 2;
				this._p2 = linearRatio;
				this._p3 = this._p1 + this._p2;
				this._calcEnd = (yoyoMode === true);
			}, true),
			p = SlowMo.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](),
			SteppedEase, ExpoScaleEase, RoughEase, _createElastic;
			
		p.constructor = SlowMo;
		p.getRatio = function(p) {
			var r = p + (0.5 - p) * this._p;
			if (p < this._p1) {
				return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
			} else if (p > this._p3) {
				return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
			}
			return this._calcEnd ? 1 : r;
		};
		SlowMo.ease = new SlowMo(0.7, 0.7);
		
		p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
			return new SlowMo(linearRatio, power, yoyoMode);
		};


		//SteppedEase
		SteppedEase = _class("easing.SteppedEase", function(steps, immediateStart) {
				steps = steps || 1;
				this._p1 = 1 / steps;
				this._p2 = steps + (immediateStart ? 0 : 1);
				this._p3 = immediateStart ? 1 : 0;
			}, true);
		p = SteppedEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();	
		p.constructor = SteppedEase;
		p.getRatio = function(p) {
			if (p < 0) {
				p = 0;
			} else if (p >= 1) {
				p = 0.999999999;
			}
			return (((this._p2 * p) | 0) + this._p3) * this._p1;
		};
		p.config = SteppedEase.config = function(steps, immediateStart) {
			return new SteppedEase(steps, immediateStart);
		};


		//ExpoScaleEase
		ExpoScaleEase = _class("easing.ExpoScaleEase", function(start, end, ease) {
			this._p1 = Math.log(end / start);
			this._p2 = end - start;
			this._p3 = start;
			this._ease = ease;
		}, true);
		p = ExpoScaleEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = ExpoScaleEase;
		p.getRatio = function(p) {
			if (this._ease) {
				p = this._ease.getRatio(p);
			}
			return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
		};
		p.config = ExpoScaleEase.config = function(start, end, ease) {
			return new ExpoScaleEase(start, end, ease);
		};


		//RoughEase
		RoughEase = _class("easing.RoughEase", function(vars) {
			vars = vars || {};
			var taper = vars.taper || "none",
				a = [],
				cnt = 0,
				points = (vars.points || 20) | 0,
				i = points,
				randomize = (vars.randomize !== false),
				clamp = (vars.clamp === true),
				template = (vars.template instanceof _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]) ? vars.template : null,
				strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
				x, y, bump, invX, obj, pnt;
			while (--i > -1) {
				x = randomize ? Math.random() : (1 / points) * i;
				y = template ? template.getRatio(x) : x;
				if (taper === "none") {
					bump = strength;
				} else if (taper === "out") {
					invX = 1 - x;
					bump = invX * invX * strength;
				} else if (taper === "in") {
					bump = x * x * strength;
				} else if (x < 0.5) {  //"both" (start)
					invX = x * 2;
					bump = invX * invX * 0.5 * strength;
				} else {				//"both" (end)
					invX = (1 - x) * 2;
					bump = invX * invX * 0.5 * strength;
				}
				if (randomize) {
					y += (Math.random() * bump) - (bump * 0.5);
				} else if (i % 2) {
					y += bump * 0.5;
				} else {
					y -= bump * 0.5;
				}
				if (clamp) {
					if (y > 1) {
						y = 1;
					} else if (y < 0) {
						y = 0;
					}
				}
				a[cnt++] = {x:x, y:y};
			}
			a.sort(function(a, b) {
				return a.x - b.x;
			});

			pnt = new EasePoint(1, 1, null);
			i = points;
			while (--i > -1) {
				obj = a[i];
				pnt = new EasePoint(obj.x, obj.y, pnt);
			}

			this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
		}, true);
		p = RoughEase.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
		p.constructor = RoughEase;
		p.getRatio = function(p) {
			var pnt = this._prev;
			if (p > pnt.t) {
				while (pnt.next && p >= pnt.t) {
					pnt = pnt.next;
				}
				pnt = pnt.prev;
			} else {
				while (pnt.prev && p <= pnt.t) {
					pnt = pnt.prev;
				}
			}
			this._prev = pnt;
			return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
		};
		p.config = function(vars) {
			return new RoughEase(vars);
		};
		RoughEase.ease = new RoughEase();


		//Bounce
		_wrap("Bounce",
			_create("BounceOut", function(p) {
				if (p < 1 / 2.75) {
					return 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				}
				return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
			}),
			_create("BounceIn", function(p) {
				if ((p = 1 - p) < 1 / 2.75) {
					return 1 - (7.5625 * p * p);
				} else if (p < 2 / 2.75) {
					return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
				} else if (p < 2.5 / 2.75) {
					return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
				}
				return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
			}),
			_create("BounceInOut", function(p) {
				var invert = (p < 0.5);
				if (invert) {
					p = 1 - (p * 2);
				} else {
					p = (p * 2) - 1;
				}
				if (p < 1 / 2.75) {
					p = 7.5625 * p * p;
				} else if (p < 2 / 2.75) {
					p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
				} else if (p < 2.5 / 2.75) {
					p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
				} else {
					p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}
				return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
			})
		);


		//CIRC
		_wrap("Circ",
			_create("CircOut", function(p) {
				return Math.sqrt(1 - (p = p - 1) * p);
			}),
			_create("CircIn", function(p) {
				return -(Math.sqrt(1 - (p * p)) - 1);
			}),
			_create("CircInOut", function(p) {
				return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
			})
		);


		//Elastic
		_createElastic = function(n, f, def) {
			var C = _class("easing." + n, function(amplitude, period) {
					this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
					this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
					this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
					this._p2 = _2PI / this._p2; //precalculate to optimize
				}, true),
				p = C.prototype = new _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]();
			p.constructor = C;
			p.getRatio = f;
			p.config = function(amplitude, period) {
				return new C(amplitude, period);
			};
			return C;
		};
		_wrap("Elastic",
			_createElastic("ElasticOut", function(p) {
				return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
			}, 0.3),
			_createElastic("ElasticIn", function(p) {
				return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
			}, 0.3),
			_createElastic("ElasticInOut", function(p) {
				return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
			}, 0.45)
		);


		//Expo
		_wrap("Expo",
			_create("ExpoOut", function(p) {
				return 1 - Math.pow(2, -10 * p);
			}),
			_create("ExpoIn", function(p) {
				return Math.pow(2, 10 * (p - 1)) - 0.001;
			}),
			_create("ExpoInOut", function(p) {
				return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
			})
		);


		//Sine
		_wrap("Sine",
			_create("SineOut", function(p) {
				return Math.sin(p * _HALF_PI);
			}),
			_create("SineIn", function(p) {
				return -Math.cos(p * _HALF_PI) + 1;
			}),
			_create("SineInOut", function(p) {
				return -0.5 * (Math.cos(Math.PI * p) - 1);
			})
		);

		_class("easing.EaseLookup", {
				find:function(s) {
					return _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["Ease"].map[s];
				}
			}, true);

		//register the non-standard eases
		_easeReg(w.SlowMo, "SlowMo", "ease,");
		_easeReg(RoughEase, "RoughEase", "ease,");
		_easeReg(SteppedEase, "SteppedEase", "ease,");
		
		return Back;
		
	}, true);

const Back = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Back;
const Elastic = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Elastic;
const Bounce = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Bounce;
const RoughEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].RoughEase;
const SlowMo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SlowMo;
const SteppedEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].SteppedEase;
const Circ = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Circ;
const Expo = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Expo;
const Sine = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].Sine;
const ExpoScaleEase = _TweenLite_js__WEBPACK_IMPORTED_MODULE_0__["_gsScope"].ExpoScaleEase;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _cart = __webpack_require__(101);

var _cart2 = _interopRequireDefault(_cart);

var _shop = __webpack_require__(103);

var _shop2 = _interopRequireDefault(_shop);

var _product = __webpack_require__(104);

var _product2 = _interopRequireDefault(_product);

var _Controllers = __webpack_require__(58);

var _Controllers2 = _interopRequireDefault(_Controllers);

var _Store = __webpack_require__(49);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Stack from "./Stack";


/**
 *
 * @public
 * @global
 * @class Commerce
 * @param {Element} element The element to work with
 * @classdesc Handle sqs Commerce.
 *
 */
var Commerce = function () {
    function Commerce(element) {
        _classCallCheck(this, Commerce);

        this.element = element;
        this.script = this.element.find("script").detach();
        this.parsed = this.script.length ? JSON.parse(this.script[0].textContent) : {};
        this.shop = this.element.is(".js-shop") ? this.element : [];
        this.product = this.element.is(".js-product") ? this.element : [];
        this.cart = this.element.is("#sqs-cart-root") ? this.element : [];
        this.view = this.shop.length ? _shop2.default : _product2.default;
        this.data = this.shop.length ? { items: this.parsed } : { item: this.parsed };
        this.cartData = {};

        this.init();
        this.exec();
        this.bind();
    }

    _createClass(Commerce, [{
        key: "bind",
        value: function bind() {
            var _this = this;

            this.element.on("click", ".js-button_", function () {
                var payload = {
                    sku: _this.data.item.structuredContent.variants[0].sku,
                    itemId: _this.data.item.id,
                    quantity: 1,
                    additionalFields: null
                };

                _this.addCart(payload, function () {
                    if (window.Y.Squarespace.Commerce.isExpressCheckout()) {
                        window.Y.Squarespace.Commerce.goToCheckoutPage();
                    } else {
                        _this.goToCartPage();
                    }
                });
            });
        }
    }, {
        key: "bindCart",
        value: function bindCart() {
            var _this2 = this;

            this.cart.on("click", ".js-cart-qty-min, .js-cart-qty-add", function (e) {
                var target = (0, _properjsHobo2.default)(e.target);
                var entry = target.closest(".js-cart-entry");
                var value = target.is(".js-cart-qty-min") ? target.next(".js-cart-qty-val") : target.prev(".js-cart-qty-val");
                var price = entry.find(".js-cart-price");
                var total = _this2.cart.find(".js-cart-subtotal");
                var entryData = entry.data();
                var item = _this2.cartData.shopJSON.items.find(function (itm) {
                    return itm.id === entryData.itemId;
                });
                var qtyMath = target.is(".js-cart-qty-min") ? -1 : 1;
                var qty = parseInt(value[0].innerText, 10);

                qty += qtyMath;

                value[0].innerText = qty;
                price[0].innerText = window.Y.Squarespace.Commerce.moneyString(item.structuredContent.variants[0].price * qty);

                _this2.qtyCart(qty, entryData.entryId).then(function (response) {
                    total[0].innerText = window.Y.Squarespace.Commerce.moneyString(response.grandTotal.value);

                    if (qty === 0) {
                        entry.remove();
                    }
                });
            });

            this.cart.on("click", ".js-cart-checkout", function () {
                window.Y.Squarespace.Commerce.goToCheckoutPage();
            });
        }
    }, {
        key: "exec",
        value: function exec() {
            this.controllers = new _Controllers2.default({
                el: this.element
            });
            this.controllers.exec();
        }
    }, {
        key: "init",
        value: function init() {
            var _this3 = this;

            if (this.cart.length) {
                window.Squarespace.initializeCartPage(window.Y);
                this.fetchShop().then(function (shopResponse) {
                    _this3.cartData.shopJSON = shopResponse;

                    _this3.fetchCart().then(function (cartResponse) {
                        _this3.cartData.cartJSON = cartResponse;
                        _this3.cart[0].innerHTML = (0, _cart2.default)(shopResponse, cartResponse);
                        core.util.loadImages(_this3.cart.find(core.config.lazyImageSelector), core.util.noop);
                        _this3.bindCart();
                    });
                });
            } else {
                window.Squarespace.initializeCommerce(window.Y);
                this.element[0].innerHTML = this.view(this);
                // this.stack = new Stack( this.element.find( ".js-stack" ) );
            }
        }
    }, {
        key: "goToCartPage",
        value: function goToCartPage() {
            window.location.href = window.location.protocol + "//" + window.location.host + "/cart/";
        }
    }, {
        key: "fetchShop",
        value: function fetchShop() {
            return new Promise(function (resolve, reject) {
                _properjsHobo2.default.ajax({
                    url: "/shop/",
                    method: "GET",
                    dataType: "json",
                    data: {
                        format: "json"
                    }
                }).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: "fetchCart",
        value: function fetchCart() {
            return _properjsHobo2.default.ajax({
                url: "/api/commerce/shopping-cart/?crumb=" + _Store2.default.crumb,
                method: "GET",
                dataType: "json"
            });
        }
    }, {
        key: "addCart",
        value: function addCart(payload, callback) {
            var _this4 = this;

            _properjsHobo2.default.ajax({
                url: "/api/commerce/shopping-cart/entries/?crumb=" + _Store2.default.crumb,
                payload: payload,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                dataType: "json"
            }).then(function (response) {
                if (response.crumbFail) {
                    _Store2.default.crumb = response.crumb;
                    core.log("warn", "Crumb fail. Trying again.");
                    _this4.addCart(payload, callback);
                } else if (callback) {
                    callback();
                }
            }).catch(function (response) {
                try {
                    response = JSON.parse(response);
                } catch (parseError) {
                    core.log("warn", parseError);
                }

                if ((typeof response === "undefined" ? "undefined" : _typeof(response)) === "object" && response.message) {
                    _this4.alert = new window.Y.Squarespace.Widgets.Alert({
                        "strings.title": "Deem Journal",
                        "strings.message": response.message
                    });
                }
            });
        }
    }, {
        key: "qtyCart",
        value: function qtyCart(qty, id) {
            return _properjsHobo2.default.ajax({
                url: "/api/commerce/cart/items/" + id + "?crumb=" + _Store2.default.crumb,
                payload: {
                    quantity: qty
                },
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                dataType: "json"
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.controllers.destroy();

            if (this.stack) {
                this.stack.destroy();
            }
        }
    }]);

    return Commerce;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Commerce;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (shopJSON, cartJSON) {
    var svgDown = __webpack_require__(102);
    var getAttributes = function getAttributes(item) {
        var attrs = [];

        for (var i in item.structuredContent.variants[0].attributes) {
            if (item.structuredContent.variants[0].attributes.hasOwnProperty(i)) {
                attrs.push("<div class=\"m\">" + item.structuredContent.variants[0].attributes[i] + "</div>");
            }
        }

        return attrs.join("");
    };

    return "\n        <div class=\"cart\">\n            " + (cartJSON.message ? "\n                <p>" + cartJSON.message + "</p>\n            " : "\n                <div class=\"cart__tabular\">\n                    <div>ITEM</div>\n                    <div>QTY</div>\n                    <div>PRICE</div>\n                </div>\n                " + cartJSON.entries.map(function (entry) {
        var item = shopJSON.items.find(function (itm) {
            return itm.id === entry.itemId;
        });

        return "\n                        <div class=\"cart__entry js-cart-entry\" data-item-id=\"" + item.id + "\" data-entry-id=\"" + entry.id + "\">\n                            <div class=\"cart__item\">\n                                <div class=\"cart__thumb\">\n                                    <div class=\"media js-media\">\n                                        <div class=\"media__wrap\">\n                                            <img class=\"media__node image js-lazy-image\" data-img-src=\"" + item.assetUrl + "\" data-variants=\"" + item.systemDataVariants + "\" data-original-size=\"" + item.originalSize + "\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"cart__desc\">\n                                    <div class=\"cart__title\">" + (item.isSubscribable ? item.title : item.excerpt || item.title) + "</div>\n                                    <div class=\"cart__attrs\">\n                                        " + getAttributes(item) + "\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"cart__qty js-cart-qty\">\n                                <div class=\"min js-cart-qty-min\">" + svgDown + "</div>\n                                <div class=\"h6 js-cart-qty-val\">" + entry.quantity + "</div>\n                                <div class=\"add js-cart-qty-add\">" + svgDown + "</div>\n                            </div>\n                            <div class=\"cart__price\">\n                                <h6 class=\"js-cart-price\">" + window.Y.Squarespace.Commerce.moneyString(entry.subTotal) + "</h6>\n                            </div>\n                        </div>\n                    ";
    }).join("") + "\n                <div class=\"cart__subtotal\">\n                    <div class=\"_button js-cart-checkout\">Checkout</div>\n                    <h6>Subtotal <span class=\"js-cart-subtotal\">" + window.Y.Squarespace.Commerce.moneyString(cartJSON.grandTotalCents) + "</span></h6>\n                </div>\n            ") + "\n        </div>\n    ";
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"_svg _svg--down\" x=\"0px\" y=\"0px\" viewBox=\"0 0 23 13\" style=\"enable-background:new 0 0 23 13;\"><path d=\"M22.5,0.5c-0.6-0.6-1.5-0.6-2.1,0l-8.9,8.9L2.6,0.5C2-0.1,1.1-0.1,0.5,0.5c-0.6,0.6-0.6,1.5,0,2.1l9.9,9.9c0.4,0.4,1.1,0.5,1.7,0.3c0.2-0.1,0.4-0.2,0.6-0.3l9.9-9.9C23.1,2,23.1,1,22.5,0.5z\"></path></svg>"

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (instance) {
    var items = instance.data.items.filter(function (item) {
        return !item.isSubscribable;
    });
    var subItem = instance.data.items.find(function (item) {
        return item.isSubscribable;
    });
    var isGridView = items.length >= 3;
    var getGridView = function getGridView() {
        return "<div class=\"grid js-shop-grid\">" + items.map(function (item) {
            return "\n                <div class=\"grid__item\">\n                    <a class=\"grid__link\" href=\"" + item.fullUrl + "\">\n                        <img class=\"grid__image image js-lazy-image\" data-img-src=\"" + item.assetUrl + "\" data-variants=\"" + item.systemDataVariants + "\" data-original-size=\"" + item.originalSize + "\" />\n                        <div class=\"grid__info\">\n                            <div class=\"grid__title\">\n                                " + item.title + ", <span>$" + item.structuredContent.variants[0].priceMoney.value.split(".")[0] + "</span>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            ";
        }).join("") + "</div>";
    };
    var getStackView = function getStackView() {
        return "" + items.map(function (item) {
            return "\n                <div class=\"stack stack--one\">\n                    <div class=\"stack__wrap\">\n                        <img class=\"stack__image js-lazy-image\" data-img-src=\"" + item.assetUrl + "\" data-variants=\"" + item.systemDataVariants + "\" data-original-size=\"" + item.originalSize + "\" />\n                        <div class=\"stack__info\">\n                            <h4 class=\"issue__title\">" + item.title + "</h4>\n                            <div class=\"issue__desc\">\n                                <a class=\"issue__button _button\" href=\"" + item.fullUrl + "\">" + item.structuredContent.customAddButtonText + "</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ";
        }).join("");
    };

    return "\n        " + (isGridView ? getGridView() : getStackView()) + "\n        " + (subItem ? "\n            <div class=\"stack stack--sub js-stack\" data-id=\"" + subItem.id + "\">\n                <style class=\"js-stack-style\">\n                    html.is-stack--" + subItem.id + " {\n                        background-color: " + window.Y.Squarespace.Template.getTweakValue("subModuleColor") + ";\n                    }\n                    .is-stack--" + subItem.id + " .navi__a {\n                        color: #fff;\n                    }\n                    .is-stack--" + subItem.id + " .navi__a.is-active,\n                    .is-stack--" + subItem.id + ".is-hoverable .navi__a:hover {\n                        border-bottom-color: #fff;\n                    }\n                    .is-stack--" + subItem.id + " ._svg--list,\n                    .is-stack--" + subItem.id + " ._svg--logo {\n                        fill: #fff;\n                    }\n                </style>\n                <div class=\"stack__wrap js-stack-wrap\">\n                    <img class=\"stack__image js-lazy-image\" data-img-src=\"" + subItem.assetUrl + "\" data-variants=\"" + subItem.systemDataVariants + "\" data-original-size=\"" + subItem.originalSize + "\" />\n                    <div class=\"stack__info\">\n                        <h4 class=\"issue__title\">" + subItem.title + "</h4>\n                        <h6 class=\"issue__desc\">" + subItem.excerpt + "</h6>\n                        <a class=\"issue__button _button _button--lit\" href=\"" + subItem.fullUrl + "\">" + subItem.structuredContent.customAddButtonText + "</a>\n                    </div>\n                </div>\n            </div>\n        " : "\n            <div class=\"stack stack--sub js-stack\" data-id=\"sub\">\n                <style class=\"js-stack-style\">\n                    html.is-stack--sub {\n                        background-color: " + window.Y.Squarespace.Template.getTweakValue("subModuleColor") + ";\n                    }\n                    .is-stack--sub .navi__a {\n                        color: #fff;\n                    }\n                    .is-stack--sub .navi__a.is-active,\n                    .is-stack--sub.is-hoverable .navi__a:hover {\n                        border-bottom-color: #fff;\n                    }\n                    .is-stack--sub ._svg--list,\n                    .is-stack--sub ._svg--logo {\n                        fill: #fff;\n                    }\n                </style>\n                <div class=\"stack__wrap js-stack-wrap\"></div>\n            </div>\n        ") + "\n    ";
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _router = __webpack_require__(51);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (instance) {
    var item = instance.data.item;
    var isOutOfStock = item.structuredContent.variants[0].qtyInStock === 0;
    var isActivateLiveShop = _router2.default.element.is(".activate-live-shop");
    var getAttributes = function getAttributes() {
        var attrs = [];

        for (var i in item.structuredContent.variants[0].attributes) {
            if (item.structuredContent.variants[0].attributes.hasOwnProperty(i)) {
                attrs.push("<h6>" + item.structuredContent.variants[0].attributes[i] + "</h6>");
            }
        }

        return attrs.join("");
    };

    return "\n        <div class=\"p1 " + (isOutOfStock ? "is-out-of-stock" : "") + "\">\n            <div class=\"text-col\">\n                <div class=\"p1__title\">\n                    <h4>" + item.title + "</h4>\n                </div>\n                <div class=\"p1__button sqs-row\">\n                    " + (isActivateLiveShop ? "<div class=\"_button js-button_\" data-block-json=\"\">" + item.structuredContent.customAddButtonText + "</div>" : "<div class=\"_button js-button_\" style=\"pointer-events:none;\" data-block-json=\"\">Coming soon</div>") + "\n                    <div class=\"sqs-block-content\">\n                        " + (isActivateLiveShop ? "<p class=\"h6\">$" + item.structuredContent.variants[0].priceMoney.value + "</p>" : "<p></p>") + "\n                    </div>\n                </div>\n                " + (isActivateLiveShop ? "\n                    <div class=\"p1__shipping\">\n                        <h6>Free standard <a href=\"#\" target=\"_blank\">domestic shipping</a></h6>\n                    </div>\n                    <div class=\"p1__attributes\">\n                        " + getAttributes() + "\n                    </div>\n                " : "") + "\n            </div>\n            <div class=\"image-col\">\n                <div class=\"media js-media\">\n                    <div class=\"media__wrap\">\n                        <img class=\"media__node image js-lazy-image\" data-img-src=\"" + item.assetUrl + "\" data-variants=\"" + item.systemDataVariants + "\" data-original-size=\"" + item.originalSize + "\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <article data-item-id=\"" + item.id + "\" class=\"story story--shop js-story\">\n            <div class=\"story__blocks\">\n                " + item.body + "\n            </div>\n        </div>\n    ";
}; // import * as core from "../core";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import $ from "properjs-hobo";


var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _issue = __webpack_require__(106);

var _issue2 = _interopRequireDefault(_issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Stack from "./Stack";

/**
 *
 * @public
 * @global
 * @class Issue
 * @param {Element} element The element to work with
 * @classdesc Handle product blocks for issue module.
 *
 */
var Issue = function () {
    function Issue(element) {
        _classCallCheck(this, Issue);

        this.element = element;
        this.script = this.element.find("script").detach();
        this.blockJson = JSON.parse(this.script[0].textContent);

        this.init();
    }

    _createClass(Issue, [{
        key: "init",
        value: function init() {
            this.element[0].innerHTML = (0, _issue2.default)(this);
            // this.stack = new Stack( this.element.find( ".js-stack" ) );
            core.util.loadImages(this.element.find(core.config.lazyImageSelector), core.util.noop);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.stack) {
                this.stack.destroy();
            }
        }
    }]);

    return Issue;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Issue;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// import $ from "properjs-hobo";


exports.default = function (instance) {
    var item = instance.blockJson.product;
    var image = item.items[1] || item.items[0];
    var color = window.Y.Squarespace.Template.getTweakValue("issueModuleColor");

    return "\n        <div class=\"stack stack--sub js-stack\" data-id=\"" + item.id + "\" id=\"stack-" + item.id + "\">\n            <style class=\"js-stack-style\">\n                html.is-stack--" + item.id + " {\n                    background-color: " + color + ";\n                }\n                .is-stack--" + item.id + " .navi__a {\n                    color: #fff;\n                }\n                .is-stack--" + item.id + " .navi__a.is-active,\n                .is-stack--" + item.id + ".is-hoverable .navi__a:hover {\n                    border-bottom-color: #fff;\n                }\n                .is-stack--" + item.id + " ._svg--list,\n                .is-stack--" + item.id + " ._svg--logo {\n                    fill: #fff;\n                }\n            </style>\n            <div class=\"stack__wrap js-stack-wrap\">\n                <img class=\"stack__image js-lazy-image\" data-img-src=\"" + image.assetUrl + "\" data-variants=\"" + image.systemDataVariants + "\" data-original-size=\"" + image.originalSize + "\" />\n                <div class=\"stack__info\">\n                    <h4 class=\"issue__title\">" + item.title + "</h4>\n                    <h6 class=\"issue__desc\">" + item.excerpt + "</h6>\n                    <a class=\"issue__button _button _button--lit\" href=\"" + item.fullUrl + "\">" + item.structuredContent.customAddButtonText + "</a>\n                </div>\n            </div>\n        </div>\n    ";
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _TweenMax = __webpack_require__(88);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @public
 * @global
 * @class Cover
 * @param {Element} element The element to work with
 * @classdesc Handle product blocks for issue module.
 *
 */
var Cover = function () {
    function Cover(element, data) {
        _classCallCheck(this, Cover);

        this.element = element;
        this.data = data;
        this.header = core.dom.body.find(".js-header");
        this.style = this.element.find(".js-colorway-style");
        this.fixer = this.element.find(".js-cover-fixer");
        this.hover = this.element.find(".js-cover-hover");
        this.parent = this.element.parent();
        this.mission = this.parent.find(".js-cover + .sqs-layout .sqs-block-html");
        this.summary = this.parent.find(".js-cover + .sqs-layout + .sqs-layout .sqs-block-summary-v2");
        this.tween = {};
        this.init();
        this.bind();
    }

    _createClass(Cover, [{
        key: "init",
        value: function init() {
            core.dom.html.addClass("is-coverpage");
            this.element.addClass("is-loaded");
            core.dom.html.removeClass("is-site-intro");
        }
    }, {
        key: "bind",
        value: function bind() {
            this.__appScroll = this.doScroll.bind(this);
            this.__appResize = this.doScroll.bind(this);

            core.emitter.on("app--scroll", this.__appScroll);
            core.emitter.on("app--resize", this.__appResize);

            this.doScroll();
        }
    }, {
        key: "doScroll",
        value: function doScroll() {
            var coverBounds = this.element[0].getBoundingClientRect();
            var headerBounds = this.header[0].getBoundingClientRect();
            var windowThird = window.innerHeight / 3;
            var windowCheck = window.innerHeight - windowThird;

            if (core.util.rectsCollide(coverBounds, headerBounds) && window.innerWidth > core.config.mobileMediaHack) {
                core.dom.html.addClass("is-coverpage--collider is-coverpage--" + this.data.id);
            } else {
                core.dom.html.removeClass("is-coverpage--collider is-coverpage--" + this.data.id);
            }

            if (this.fixer.length && core.util.isElementVisible(this.element[0])) {
                this.tweenFixer(coverBounds);
            } else {
                this.tweenFixer({
                    y: 0
                });
            }

            if (this.hover.length && core.util.isElementVisible(this.element[0])) {
                this.tweenHover(coverBounds);
            } else {
                this.tweenHover({
                    y: 0
                });
            }

            if (this.mission.length) {
                var missionBounds = this.mission[0].getBoundingClientRect();

                if (missionBounds.y <= windowCheck) {
                    this.mission.addClass("is-active");
                }
            }

            if (this.summary.length) {
                var summaryBounds = this.summary[0].getBoundingClientRect();

                if (summaryBounds.y <= windowCheck) {
                    this.summary.addClass("is-active");
                }
            }
        }
    }, {
        key: "tweenFixer",
        value: function tweenFixer(bounds) {
            if (this.tween.fixer) {
                this.tween.fixer.kill();
            }

            var speed = 1.25;
            var duration = 50 / 1000; // ms to sec
            var position = bounds.y * speed;

            this.tween.fixer = new _TweenMax.TweenLite.to(this.fixer[0], duration, {
                y: Math.max(-window.innerHeight, position),
                ease: _TweenMax.Power3.ease
            });
        }
    }, {
        key: "tweenHover",
        value: function tweenHover(bounds) {
            if (this.tween.hover) {
                this.tween.hover.kill();
            }

            var speed = 0.25;
            var duration = 50 / 1000; // ms to sec
            var position = bounds.y * speed;

            this.tween.hover = new _TweenMax.TweenLite.to(this.hover[0], duration, {
                y: Math.max(-window.innerHeight, position),
                opacity: 1 - Math.max(0, Math.abs(bounds.y / 1000 * 2)),
                ease: _TweenMax.Power3.ease
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.tween.fixer) {
                this.tween.fixer.kill();
            }

            if (this.tween.hover) {
                this.tween.hover.kill();
            }

            core.emitter.off("app--scroll", this.__appScroll);
            core.emitter.off("app--resize", this.__appResize);
            this.style.remove();
            core.dom.html.removeClass("is-coverpage is-coverpage--collider is-coverpage--" + this.data.id);
        }
    }]);

    return Cover;
}();

/******************************************************************************
 * Export
*******************************************************************************/


exports.default = Cover;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _properjsHobo = __webpack_require__(8);

var _properjsHobo2 = _interopRequireDefault(_properjsHobo);

var _TweenMax = __webpack_require__(88);

var _Search = __webpack_require__(64);

var _Search2 = _interopRequireDefault(_Search);

var _hammerjs = __webpack_require__(109);

var _hammerjs2 = _interopRequireDefault(_hammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @public
 * @namespace navi
 * @description Open tray, activate links.
 * @memberof menus
 *
 */
var navi = {
    init: function init() {
        this.time = 500;
        this.halfTime = this.time / 2;
        this.isOpen = false;
        this.isSearch = false;
        this.nav = core.dom.body.find(".js-navi");
        this.navItems = this.nav.find(".js-navi-a");
        this.navTrigger = core.dom.body.find(".js-navi-meni");
        this.menu = core.dom.body.find(".js-meni");
        this.menuItems = this.menu.find(".js-meni-a");
        this.menuAnims = this.menu.find(".js-meni-search, .js-meni-a, .js-meni-footer");
        this.menuSearch = this.menu.find(".js-meni-search");
        this.menuClose = this.menu.find(".js-meni-close");
        this.search = this.menu.find(".js-search");
        this.filters = this.menu.find(".js-search-filters");
        this.main = core.dom.main;
        this.header = core.dom.body.find(".js-header");
        this.searchComponent = new _Search2.default(this.search, this.search.data());
        this.bind();
        this.animMenuItems(0);
        this.animMenuSearch(0);
        this.animMenuClose(0);
    },
    clean: function clean() {
        core.dom.html.removeClass("is-header-small");
        this.closeAll();
    },
    bind: function bind() {
        var _this = this;

        this.navTrigger.on("click", function () {
            _this.toggleMenu();
        });

        this.menuSearch.on("click", function () {
            _this.toggleSearch();
        });

        this.menuClose.on("click", function () {
            _this.closeSearch();
        });

        this.swipe = new _hammerjs2.default(this.menu[0], core.util.getDefaultHammerOptions());
        this.swipe.on("tap", this.onTap.bind(this));
        this.swipe.on("swipe", this.onSwipe.bind(this));

        core.emitter.on("app--resize", this.doResize.bind(this));
        core.emitter.on("app--scrollup", this.onScrollUp.bind(this));
        core.emitter.on("app--scrolldown", this.onScrollDown.bind(this));
    },
    isNonInteractionTap: function isNonInteractionTap(target) {
        return !target.is(".js-navi-meni") && !target.is(".js-meni-a") && !target.is(".js-meni-search") && !target.is(".js-meni-ext") && !target.is(".js-meni-close");
    },
    handleHamEvent: function handleHamEvent(e) {
        var target = (0, _properjsHobo2.default)(e.target);

        if (this.isOpen && !this.isSearch) {
            if (this.isNonInteractionTap(target)) {
                e.srcEvent.preventDefault();
                e.srcEvent.stopPropagation();
                e.srcEvent.stopImmediatePropagation();
                this.closeMenu();
            }
        }
    },
    doResize: function doResize() {
        var rect = this.header[0].getBoundingClientRect();
        var paddy = core.dom.main.find(".js-paddy");

        this.main[0].style.paddingTop = rect.height + "px";

        if (paddy.length) {
            paddy[0].style.paddingTop = rect.height + "px";
        }
    },
    onTap: function onTap(e) {
        this.handleHamEvent(e);
    },
    onSwipe: function onSwipe(e) {
        if (e.direction === _hammerjs2.default.DIRECTION_RIGHT) {
            this.handleHamEvent(e);
        }
    },
    onScrollUp: function onScrollUp(scrollY) {
        this.handleScroll(scrollY);
    },
    onScrollDown: function onScrollDown(scrollY) {
        this.handleScroll(scrollY);
    },
    handleScroll: function handleScroll(scrollY) {
        if (scrollY > 0) {
            core.dom.html.addClass("is-header-small");
        } else {
            core.dom.html.removeClass("is-header-small");
        }
    },
    animMenuItems: function animMenuItems(binary) {
        this.tweenMenu = new _TweenMax.TweenLite.to(this.menuAnims, this.halfTime / 1000, {
            opacity: binary,
            y: binary ? 0 : 16,
            ease: _TweenMax.Power3.ease,
            delay: binary ? this.halfTime / 1000 : 0
        });
    },
    animMenuSearch: function animMenuSearch(binary) {
        this.tweenSearch = new _TweenMax.TweenLite.to([this.search[0], this.filters[0]], this.halfTime / 1000, {
            opacity: binary,
            y: binary ? 0 : 16,
            ease: _TweenMax.Power3.ease,
            delay: binary ? this.time / 1000 : 0
        });
    },
    animMenuClose: function animMenuClose(binary) {
        this.tweenClose = new _TweenMax.TweenLite.to(this.menuClose[0], this.halfTime / 1000, {
            opacity: binary,
            y: binary ? 0 : 16,
            ease: _TweenMax.Power3.ease,
            delay: binary ? this.time / 1000 : 0
        });
    },
    show: function show() {
        var _this2 = this;

        return new Promise(function (resolve) {
            _this2.menu[0].style.display = "block";
            setTimeout(function () {
                resolve();
            }, 1);
        });
    },
    hide: function hide() {
        var _this3 = this;

        setTimeout(function () {
            _this3.menu[0].style.display = "none";
        }, 1);
    },
    openMenu: function openMenu() {
        var _this4 = this;

        return new Promise(function (resolve) {
            _this4.isOpen = true;
            _this4.menu.addClass("is-active");
            core.dom.html.addClass("is-menu-open");
            _this4.animMenuItems(1);
            setTimeout(function () {
                _this4.menu.addClass("is-static");
                resolve();
            }, _this4.time);
        });
    },
    closeMenu: function closeMenu() {
        var _this5 = this;

        return new Promise(function (resolve) {
            _this5.isOpen = false;
            _this5.menu.removeClass("is-static");
            _this5.menu.addClass("is-closing");
            core.dom.html.removeClass("is-menu-open");
            _this5.animMenuItems(0);
            setTimeout(function () {
                _this5.menu.removeClass("is-static is-active is-closing");
                resolve();
            }, _this5.time);
        });
    },
    openSearch: function openSearch() {
        var _this6 = this;

        return new Promise(function (resolve) {
            _this6.isSearch = true;
            _this6.menu.addClass("is-search");
            core.dom.html.addClass("is-menu-search");
            _this6.searchComponent.clear();
            _this6.animMenuSearch(1);
            _this6.animMenuItems(0);
            _this6.animMenuClose(1);
            setTimeout(function () {
                resolve();
            }, _this6.time);
        });
    },
    closeSearch: function closeSearch() {
        var _this7 = this;

        return new Promise(function (resolve) {
            _this7.isSearch = false;
            _this7.menu.removeClass("is-search");
            core.dom.html.removeClass("is-menu-search");
            _this7.searchComponent.reset();
            _this7.animMenuSearch(0);
            _this7.animMenuItems(1);
            _this7.animMenuClose(0);
            setTimeout(function () {
                resolve();
            }, _this7.time);
        });
    },
    closeAll: function closeAll() {
        if (this.isSearch) {
            this.closeSearch();
            this.closeMenu();
        } else {
            this.closeMenu();
        }
    },
    setActive: function setActive(view) {
        this.navItems.removeClass("is-active");
        this.navItems.filter(".js-navi--" + view).addClass("is-active");
        this.menuItems.removeClass("is-active");
        this.menuItems.filter(".js-meni--" + view).addClass("is-active");
    },
    toggleMenu: function toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    },
    toggleSearch: function toggleSearch() {
        if (this.isSearch) {
            this.closeSearch();
        } else {
            this.openSearch();
        }
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = navi;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _router = __webpack_require__(51);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @public
 * @namespace intro
 * @description Performs the curtain effect.
 *
 */
var intro = {
    init: function init() {
        this.element = core.dom.body.find(".js-intro");
    },
    teardown: function teardown() {
        var _this = this;

        this.element.removeClass("is-active");
        core.emitter.fire("app--intro");

        if (_router2.default.state.now.view !== core.config.homepage) {
            core.dom.html.removeClass("is-site-intro");
        }

        setTimeout(function () {
            _this.element[0].style.display = "none";
        }, 500);
    }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = intro;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../styles/screen.css";

/***/ })
/******/ ]);
//# sourceMappingURL=deem.js.map