(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var zoid_frameworks_frame = createCommonjsModule(function (module, exports) {
    !function(root, factory) {
         module.exports = factory() ;
    }("undefined" != typeof self ? self : commonjsGlobal, (function() {
        return function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) return installedModules[moduleId].exports;
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: !1,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = !0;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                });
            };
            __webpack_require__.r = function(exports) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
            };
            __webpack_require__.t = function(value, mode) {
                1 & mode && (value = __webpack_require__(value));
                if (8 & mode) return value;
                if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, "default", {
                    enumerable: !0,
                    value: value
                });
                if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function() {
                    return module.default;
                } : function() {
                    return module;
                };
                __webpack_require__.d(getter, "a", getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return {}.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        }([ function(module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "PopupOpenError", (function() {
                return dom_PopupOpenError;
            }));
            __webpack_require__.d(__webpack_exports__, "create", (function() {
                return create;
            }));
            __webpack_require__.d(__webpack_exports__, "destroy", (function() {
                return component_destroy;
            }));
            __webpack_require__.d(__webpack_exports__, "destroyComponents", (function() {
                return destroyComponents;
            }));
            __webpack_require__.d(__webpack_exports__, "destroyAll", (function() {
                return destroyAll;
            }));
            __webpack_require__.d(__webpack_exports__, "PROP_TYPE", (function() {
                return PROP_TYPE;
            }));
            __webpack_require__.d(__webpack_exports__, "PROP_SERIALIZATION", (function() {
                return PROP_SERIALIZATION;
            }));
            __webpack_require__.d(__webpack_exports__, "CONTEXT", (function() {
                return CONTEXT;
            }));
            __webpack_require__.d(__webpack_exports__, "EVENT", (function() {
                return EVENT;
            }));
            function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
            }
            function _extends() {
                return (_extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
            }
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [];
            var possiblyUnhandledPromiseHandlers = [];
            var activeCount = 0;
            var flushPromise;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    this.resolved = void 0;
                    this.rejected = void 0;
                    this.errorHandled = void 0;
                    this.value = void 0;
                    this.error = void 0;
                    this.handlers = void 0;
                    this.dispatching = void 0;
                    this.stack = void 0;
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result;
                        var _error;
                        var resolved = !1;
                        var rejected = !1;
                        var isAsync = !1;
                        startActive();
                        try {
                            handler((function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }), (function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            }));
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                var _proto = ZalgoPromise.prototype;
                _proto.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                _proto.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout((function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout((function() {
                                    throw err;
                                }), 1);
                                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }), 1);
                    this.dispatch();
                    return this;
                };
                _proto.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                _proto.dispatch = function() {
                    var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!this.dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        var chain = function(firstPromise, secondPromise) {
                            return firstPromise.then((function(res) {
                                secondPromise.resolve(res);
                            }), (function(err) {
                                secondPromise.reject(err);
                            }));
                        };
                        for (var i = 0; i < handlers.length; i++) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                            var _result2 = void 0;
                            if (resolved) try {
                                _result2 = onSuccess ? onSuccess(this.value) : this.value;
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(this.error);
                                    continue;
                                }
                                try {
                                    _result2 = onError(this.error);
                                } catch (err) {
                                    promise.reject(err);
                                    continue;
                                }
                            }
                            if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                                _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error);
                                _result2.errorHandled = !0;
                            } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                        }
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                _proto.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise;
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                _proto.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                _proto.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then((function(result) {
                        return ZalgoPromise.try(onFinally).then((function() {
                            return result;
                        }));
                    }), (function(err) {
                        return ZalgoPromise.try(onFinally).then((function() {
                            throw err;
                        }));
                    }));
                };
                _proto.timeout = function(time, err) {
                    var _this3 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout((function() {
                        _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }), time);
                    return this.then((function(result) {
                        clearTimeout(timeout);
                        return result;
                    }));
                };
                _proto.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                        return value.then(resolve, reject);
                    })) : (new ZalgoPromise).resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return (new ZalgoPromise).reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return (new ZalgoPromise).asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise;
                    var count = promises.length;
                    var results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    var chain = function(i, firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            results[i] = res;
                            0 == (count -= 1) && promise.resolve(results);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < promises.length; i++) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                continue;
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            continue;
                        }
                        chain(i, ZalgoPromise.resolve(prom), promise);
                    }
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    var awaitPromises = [];
                    var _loop = function(key) {
                        if (promises.hasOwnProperty(key)) {
                            var value = promises[key];
                            utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                                result[key] = res;
                            }))) : result[key] = value;
                        }
                    };
                    for (var key in promises) _loop(key);
                    return ZalgoPromise.all(awaitPromises).then((function() {
                        return result;
                    }));
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise((function(resolve) {
                        setTimeout(resolve, _delay);
                    }));
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return function(Zalgo) {
                        var promise = flushPromise = flushPromise || new Zalgo;
                        flushActive();
                        return promise;
                    }(ZalgoPromise);
                };
                return ZalgoPromise;
            }();
            function isRegex(item) {
                return "[object RegExp]" === {}.toString.call(item);
            }
            var WINDOW_TYPE = {
                IFRAME: "iframe",
                POPUP: "popup"
            };
            var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isAboutProtocol(win) {
                void 0 === win && (win = window);
                return "about:" === win.location.protocol;
            }
            function utils_getParent(win) {
                void 0 === win && (win = window);
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener(win) {
                void 0 === win && (win = window);
                if (win && !utils_getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                void 0 === win && (win = window);
                var location = win.location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if ("file:" === protocol) return "file://";
                if ("about:" === protocol) {
                    var parent = utils_getParent(win);
                    return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                void 0 === win && (win = window);
                var domain = getActualDomain(win);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
            }
            function isSameDomain(win) {
                if (!function(win) {
                    try {
                        if (win === window) return !0;
                    } catch (err) {}
                    try {
                        var desc = Object.getOwnPropertyDescriptor(win, "location");
                        if (desc && !1 === desc.enumerable) return !1;
                    } catch (err) {}
                    try {
                        if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    } catch (err) {}
                    try {
                        if (getActualDomain(win) === getActualDomain(window)) return !0;
                    } catch (err) {}
                    return !1;
                }(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }
            function assertSameDomain(win) {
                if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                return win;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = utils_getParent(child);
                return childParent ? childParent === parent : -1 !== function(win) {
                    var result = [];
                    try {
                        for (;win.parent !== win; ) {
                            result.push(win.parent);
                            win = win.parent;
                        }
                    } catch (err) {}
                    return result;
                }(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [];
                var frames;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            function getAllChildFrames(win) {
                var result = [];
                for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
                    var frame = _getFrames2[_i3];
                    result.push(frame);
                    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) result.push(_getAllChildFrames2[_i5]);
                }
                return result;
            }
            function getTop(win) {
                void 0 === win && (win = window);
                try {
                    if (win.top) return win.top;
                } catch (err) {}
                if (utils_getParent(win) === win) return win;
                try {
                    if (isAncestorParent(window, win) && window.top) return window.top;
                } catch (err) {}
                try {
                    if (isAncestorParent(win, window) && window.top) return window.top;
                } catch (err) {}
                for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win); _i7 < _getAllChildFrames4.length; _i7++) {
                    var frame = _getAllChildFrames4[_i7];
                    try {
                        if (frame.top) return frame.top;
                    } catch (err) {}
                    if (utils_getParent(frame) === frame) return frame;
                }
            }
            function getAllFramesInWindow(win) {
                var top = getTop(win);
                if (!top) throw new Error("Can not determine top window");
                var result = [].concat(getAllChildFrames(top), [ top ]);
                -1 === result.indexOf(win) && (result = [].concat(result, [ win ], getAllChildFrames(win)));
                return result;
            }
            var iframeWindows = [];
            var iframeFrames = [];
            function isWindowClosed(win, allowMock) {
                void 0 === allowMock && (allowMock = !0);
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && function(frame) {
                        if (!frame.contentWindow) return !0;
                        if (!frame.parentNode) return !0;
                        var doc = frame.ownerDocument;
                        if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                            var parent = frame;
                            for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                            if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                        }
                        return !1;
                    }(frame)) return !0;
                }
                return !1;
            }
            function getAncestor(win) {
                void 0 === win && (win = window);
                return getOpener(win = win || window) || utils_getParent(win) || void 0;
            }
            function anyMatch(collection1, collection2) {
                for (var _i17 = 0; _i17 < collection1.length; _i17++) {
                    var item1 = collection1[_i17];
                    for (var _i19 = 0; _i19 < collection2.length; _i19++) if (item1 === collection2[_i19]) return !0;
                }
                return !1;
            }
            function getDistanceFromTop(win) {
                void 0 === win && (win = window);
                var distance = 0;
                var parent = win;
                for (;parent; ) (parent = utils_getParent(parent)) && (distance += 1);
                return distance;
            }
            function isSameTopWindow(win1, win2) {
                var top1 = getTop(win1) || win1;
                var top2 = getTop(win2) || win2;
                try {
                    if (top1 && top2) return top1 === top2;
                } catch (err) {}
                var allFrames1 = getAllFramesInWindow(win1);
                var allFrames2 = getAllFramesInWindow(win2);
                if (anyMatch(allFrames1, allFrames2)) return !0;
                var opener1 = getOpener(top1);
                var opener2 = getOpener(top2);
                return opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1),
                !1;
            }
            function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return "*" === pattern || origin === pattern;
                    if (isRegex(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some((function(subpattern) {
                    return matchDomain(subpattern, origin);
                })));
            }
            function getDomainFromUrl(url) {
                return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
            }
            function onCloseWindow(win, callback, delay, maxtime) {
                void 0 === delay && (delay = 1e3);
                void 0 === maxtime && (maxtime = 1 / 0);
                var timeout;
                !function check() {
                    if (isWindowClosed(win)) {
                        timeout && clearTimeout(timeout);
                        return callback();
                    }
                    if (maxtime <= 0) clearTimeout(timeout); else {
                        maxtime -= delay;
                        timeout = setTimeout(check, delay);
                    }
                }();
                return {
                    cancel: function() {
                        timeout && clearTimeout(timeout);
                    }
                };
            }
            function isWindow(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === {}.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
                } catch (err) {}
                return !1;
            }
            function closeWindow(win) {
                try {
                    win.close();
                } catch (err) {}
            }
            function util_safeIndexOf(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }
            var weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    this.name = void 0;
                    this.weakmap = void 0;
                    this.keys = void 0;
                    this.values = void 0;
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                    if (function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap;
                            var testKey = {};
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    }()) try {
                        this.weakmap = new WeakMap;
                    } catch (err) {}
                    this.keys = [];
                    this.values = [];
                }
                var _proto = CrossDomainSafeWeakMap.prototype;
                _proto._cleanupClosedWindows = function() {
                    var weakmap = this.weakmap;
                    var keys = this.keys;
                    for (var i = 0; i < keys.length; i++) {
                        var value = keys[i];
                        if (isWindow(value) && isWindowClosed(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {}
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                _proto.isSafeToReadWrite = function(key) {
                    return !isWindow(key);
                };
                _proto.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var name = this.name;
                        var entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                            value: [ key, value ],
                            writable: !0
                        });
                        return;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var values = this.values;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 === index) {
                        keys.push(key);
                        values.push(value);
                    } else values[index] = value;
                };
                _proto.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return entry && entry[0] === key ? entry[1] : void 0;
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var index = util_safeIndexOf(this.keys, key);
                    if (-1 !== index) return this.values[index];
                };
                _proto.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 !== index) {
                        keys.splice(index, 1);
                        this.values.splice(index, 1);
                    }
                };
                _proto.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return !0;
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    } catch (err) {}
                    this._cleanupClosedWindows();
                    return -1 !== util_safeIndexOf(this.keys, key);
                };
                _proto.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            function _getPrototypeOf(o) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                })(o);
            }
            function _setPrototypeOf(o, p) {
                return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                    o.__proto__ = p;
                    return o;
                })(o, p);
            }
            function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return !0;
                } catch (e) {
                    return !1;
                }
            }
            function construct_construct(Parent, args, Class) {
                return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
                    var a = [ null ];
                    a.push.apply(a, args);
                    var instance = new (Function.bind.apply(Parent, a));
                    Class && _setPrototypeOf(instance, Class.prototype);
                    return instance;
                }).apply(null, arguments);
            }
            function wrapNativeSuper_wrapNativeSuper(Class) {
                var _cache = "function" == typeof Map ? new Map : void 0;
                return (wrapNativeSuper_wrapNativeSuper = function(Class) {
                    if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
                    var fn;
                    if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== _cache) {
                        if (_cache.has(Class)) return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return _setPrototypeOf(Wrapper, Class);
                })(Class);
            }
            function getFunctionName(fn) {
                return fn.name || fn.__name__ || fn.displayName || "anonymous";
            }
            function setFunctionName(fn, name) {
                try {
                    delete fn.name;
                    fn.name = name;
                } catch (err) {}
                fn.__name__ = fn.displayName = name;
                return fn;
            }
            function base64encode(str) {
                if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                    return String.fromCharCode(parseInt(p1, 16));
                })));
                if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
                throw new Error("Can not find window.btoa or Buffer");
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, (function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            var objectIDs;
            function serializeArgs(args) {
                try {
                    return JSON.stringify([].slice.call(args), (function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + function(obj) {
                            objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                            if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                            var uid = objectIDs.get(obj);
                            if (!uid) {
                                uid = typeof obj + ":" + uniqueID();
                                objectIDs.set(obj, uid);
                            }
                            return uid;
                        }(val) + "]" : val;
                    }));
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function getEmptyObject() {
                return {};
            }
            var memoizeGlobalIndex = 0;
            var memoizeGlobalIndexValidFrom = 0;
            function memoize(method, options) {
                void 0 === options && (options = {});
                var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
                var simpleCache;
                var thisCache;
                var memoizeIndex = memoizeGlobalIndex;
                memoizeGlobalIndex += 1;
                var memoizedFunction = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                        simpleCache = null;
                        thisCache = null;
                        memoizeIndex = memoizeGlobalIndex;
                        memoizeGlobalIndex += 1;
                    }
                    var cache;
                    cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                    var cacheKey = serializeArgs(args);
                    var cacheResult = cache[cacheKey];
                    if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                        delete cache[cacheKey];
                        cacheResult = null;
                    }
                    if (cacheResult) return cacheResult.value;
                    var time = Date.now();
                    var value = method.apply(this, arguments);
                    cache[cacheKey] = {
                        time: time,
                        value: value
                    };
                    return value;
                };
                memoizedFunction.reset = function() {
                    simpleCache = null;
                    thisCache = null;
                };
                return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
            }
            memoize.clear = function() {
                memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
            };
            function memoizePromise(method) {
                var cache = {};
                function memoizedPromiseFunction() {
                    var _arguments = arguments, _this = this;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    var key = serializeArgs(args);
                    if (cache.hasOwnProperty(key)) return cache[key];
                    cache[key] = promise_ZalgoPromise.try((function() {
                        return method.apply(_this, _arguments);
                    })).finally((function() {
                        delete cache[key];
                    }));
                    return cache[key];
                }
                memoizedPromiseFunction.reset = function() {
                    cache = {};
                };
                return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
            }
            function inlineMemoize(method, logic, args) {
                void 0 === args && (args = []);
                var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
                var key = serializeArgs(args);
                return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
            }
            function src_util_noop() {}
            function once(method) {
                var called = !1;
                return setFunctionName((function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                }), getFunctionName(method) + "::once");
            }
            function stringifyError(err, level) {
                void 0 === level && (level = 1);
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack;
                        var message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            }
            function stringify(item) {
                return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item);
            }
            function extend(obj, source) {
                if (!source) return obj;
                if (Object.assign) return Object.assign(obj, source);
                for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            }
            memoize((function(obj) {
                if (Object.values) return Object.values(obj);
                var result = [];
                for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
                return result;
            }));
            function identity(item) {
                return item;
            }
            function safeInterval(method, time) {
                var timeout;
                !function loop() {
                    timeout = setTimeout((function() {
                        method();
                        loop();
                    }), time);
                }();
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            }
            function defineLazyProp(obj, key, getter) {
                if (Array.isArray(obj)) {
                    if ("number" != typeof key) throw new TypeError("Array key must be number");
                } else if ("object" == typeof obj && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        delete obj[key];
                        var value = getter();
                        obj[key] = value;
                        return value;
                    },
                    set: function(value) {
                        delete obj[key];
                        obj[key] = value;
                    }
                });
            }
            function arrayFrom(item) {
                return [].slice.call(item);
            }
            function isObjectObject(obj) {
                return "object" == typeof (item = obj) && null !== item && "[object Object]" === {}.toString.call(obj);
                var item;
            }
            function isPlainObject(obj) {
                if (!isObjectObject(obj)) return !1;
                var constructor = obj.constructor;
                if ("function" != typeof constructor) return !1;
                var prototype = constructor.prototype;
                return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
            }
            function replaceObject(item, replacer, fullKey) {
                void 0 === fullKey && (fullKey = "");
                if (Array.isArray(item)) {
                    var length = item.length;
                    var result = [];
                    var _loop2 = function(i) {
                        defineLazyProp(result, i, (function() {
                            var itemKey = fullKey ? fullKey + "." + i : "" + i;
                            var child = replacer(item[i], i, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        }));
                    };
                    for (var i = 0; i < length; i++) _loop2(i);
                    return result;
                }
                if (isPlainObject(item)) {
                    var _result = {};
                    var _loop3 = function(key) {
                        if (!item.hasOwnProperty(key)) return "continue";
                        defineLazyProp(_result, key, (function() {
                            var itemKey = fullKey ? fullKey + "." + key : "" + key;
                            var child = replacer(item[key], key, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        }));
                    };
                    for (var key in item) _loop3(key);
                    return _result;
                }
                throw new Error("Pass an object or array");
            }
            function isDefined(value) {
                return null != value;
            }
            function util_isRegex(item) {
                return "[object RegExp]" === {}.toString.call(item);
            }
            function util_getOrSet(obj, key, getter) {
                if (obj.hasOwnProperty(key)) return obj[key];
                var val = getter();
                obj[key] = val;
                return val;
            }
            function cleanup(obj) {
                var tasks = [];
                var cleaned = !1;
                var cleanErr;
                return {
                    set: function(name, item) {
                        if (!cleaned) {
                            obj[name] = item;
                            this.register((function() {
                                delete obj[name];
                            }));
                        }
                        return item;
                    },
                    register: function(method) {
                        cleaned ? method(cleanErr) : tasks.push(once((function() {
                            return method(cleanErr);
                        })));
                    },
                    all: function(err) {
                        cleanErr = err;
                        var results = [];
                        cleaned = !0;
                        for (;tasks.length; ) {
                            var task = tasks.shift();
                            results.push(task());
                        }
                        return promise_ZalgoPromise.all(results).then(src_util_noop);
                    }
                };
            }
            function assertExists(name, thing) {
                if (null == thing) throw new Error("Expected " + name + " to be present");
                return thing;
            }
            var util_ExtendableError = function(_Error) {
                _inheritsLoose(ExtendableError, _Error);
                function ExtendableError(message) {
                    var _this6;
                    (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
                    "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return self;
                    }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
                    return _this6;
                }
                return ExtendableError;
            }(wrapNativeSuper_wrapNativeSuper(Error));
            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            function isDocumentInteractive() {
                return Boolean(document.body) && "interactive" === document.readyState;
            }
            function urlEncode(str) {
                return str.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B");
            }
            memoize((function() {
                return new promise_ZalgoPromise((function(resolve) {
                    if (isDocumentReady() || isDocumentInteractive()) return resolve();
                    var interval = setInterval((function() {
                        if (isDocumentReady() || isDocumentInteractive()) {
                            clearInterval(interval);
                            return resolve();
                        }
                    }), 10);
                }));
            }));
            function parseQuery(queryString) {
                return inlineMemoize(parseQuery, (function() {
                    var params = {};
                    if (!queryString) return params;
                    if (-1 === queryString.indexOf("=")) return params;
                    for (var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++) {
                        var pair = _queryString$split2[_i2];
                        (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                    }
                    return params;
                }), [ queryString ]);
            }
            function extendQuery(originalQuery, props) {
                void 0 === props && (props = {});
                return props && Object.keys(props).length ? function(obj) {
                    void 0 === obj && (obj = {});
                    return Object.keys(obj).filter((function(key) {
                        return "string" == typeof obj[key];
                    })).map((function(key) {
                        return urlEncode(key) + "=" + urlEncode(obj[key]);
                    })).join("&");
                }(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
            }
            function appendChild(container, child) {
                container.appendChild(child);
            }
            function isElement(element) {
                return element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument;
            }
            function getElementSafe(id, doc) {
                void 0 === doc && (doc = document);
                return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
            }
            function elementReady(id) {
                return new promise_ZalgoPromise((function(resolve, reject) {
                    var name = stringify(id);
                    var el = getElementSafe(id);
                    if (el) return resolve(el);
                    if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                    var interval = setInterval((function() {
                        if (el = getElementSafe(id)) {
                            clearInterval(interval);
                            return resolve(el);
                        }
                        if (isDocumentReady()) {
                            clearInterval(interval);
                            return reject(new Error("Document is ready and element " + name + " does not exist"));
                        }
                    }), 10);
                }));
            }
            var dom_PopupOpenError = function(_ExtendableError) {
                _inheritsLoose(PopupOpenError, _ExtendableError);
                function PopupOpenError() {
                    return _ExtendableError.apply(this, arguments) || this;
                }
                return PopupOpenError;
            }(util_ExtendableError);
            var awaitFrameLoadPromises;
            function awaitFrameLoad(frame) {
                if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap).has(frame)) {
                    var _promise = awaitFrameLoadPromises.get(frame);
                    if (_promise) return _promise;
                }
                var promise = new promise_ZalgoPromise((function(resolve, reject) {
                    frame.addEventListener("load", (function() {
                        !function(frame) {
                            !function() {
                                for (var i = 0; i < iframeWindows.length; i++) {
                                    var closed = !1;
                                    try {
                                        closed = iframeWindows[i].closed;
                                    } catch (err) {}
                                    if (closed) {
                                        iframeFrames.splice(i, 1);
                                        iframeWindows.splice(i, 1);
                                    }
                                }
                            }();
                            if (frame && frame.contentWindow) try {
                                iframeWindows.push(frame.contentWindow);
                                iframeFrames.push(frame);
                            } catch (err) {}
                        }(frame);
                        resolve(frame);
                    }));
                    frame.addEventListener("error", (function(err) {
                        frame.contentWindow ? resolve(frame) : reject(err);
                    }));
                }));
                awaitFrameLoadPromises.set(frame, promise);
                return promise;
            }
            function awaitFrameWindow(frame) {
                return awaitFrameLoad(frame).then((function(loadedFrame) {
                    if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                    return loadedFrame.contentWindow;
                }));
            }
            function dom_iframe(options, container) {
                void 0 === options && (options = {});
                var style = options.style || {};
                var frame = function(tag, options, container) {
                    void 0 === tag && (tag = "div");
                    void 0 === options && (options = {});
                    tag = tag.toLowerCase();
                    var element = document.createElement(tag);
                    options.style && extend(element.style, options.style);
                    options.class && (element.className = options.class.join(" "));
                    options.id && element.setAttribute("id", options.id);
                    if (options.attributes) for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
                        var key = _Object$keys2[_i10];
                        element.setAttribute(key, options.attributes[key]);
                    }
                    options.styleSheet && function(el, styleText, doc) {
                        void 0 === doc && (doc = window.document);
                        el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
                    }(element, options.styleSheet);
                    if (options.html) {
                        if ("iframe" === tag) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                        element.innerHTML = options.html;
                    }
                    return element;
                }("iframe", {
                    attributes: _extends({
                        allowTransparency: "true"
                    }, options.attributes || {}),
                    style: _extends({
                        backgroundColor: "transparent",
                        border: "none"
                    }, style),
                    html: options.html,
                    class: options.class
                });
                var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
                frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
                awaitFrameLoad(frame);
                container && function(id, doc) {
                    void 0 === doc && (doc = document);
                    var element = getElementSafe(id, doc);
                    if (element) return element;
                    throw new Error("Can not find element: " + stringify(id));
                }(container).appendChild(frame);
                (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
                return frame;
            }
            function addEventListener(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener(event, handler);
                    }
                };
            }
            function showElement(element) {
                element.style.setProperty("display", "");
            }
            function hideElement(element) {
                element.style.setProperty("display", "none", "important");
            }
            function destroyElement(element) {
                element && element.parentNode && element.parentNode.removeChild(element);
            }
            function isElementClosed(el) {
                return !(el && el.parentNode && el.ownerDocument && el.ownerDocument.documentElement && el.ownerDocument.documentElement.contains(el));
            }
            function onResize(el, handler, _temp) {
                var _ref2 = void 0 === _temp ? {} : _temp, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win;
                var currentWidth = el.offsetWidth;
                var currentHeight = el.offsetHeight;
                var canceled = !1;
                handler({
                    width: currentWidth,
                    height: currentHeight
                });
                var check = function() {
                    if (!canceled && function(el) {
                        return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                    }(el)) {
                        var newWidth = el.offsetWidth;
                        var newHeight = el.offsetHeight;
                        (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                            width: newWidth,
                            height: newHeight
                        });
                        currentWidth = newWidth;
                        currentHeight = newHeight;
                    }
                };
                var observer;
                var timeout;
                win.addEventListener("resize", check);
                if (void 0 !== win.ResizeObserver) {
                    (observer = new win.ResizeObserver(check)).observe(el);
                    timeout = safeInterval(check, 10 * interval);
                } else if (void 0 !== win.MutationObserver) {
                    (observer = new win.MutationObserver(check)).observe(el, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !1
                    });
                    timeout = safeInterval(check, 10 * interval);
                } else timeout = safeInterval(check, interval);
                return {
                    cancel: function() {
                        canceled = !0;
                        observer.disconnect();
                        window.removeEventListener("resize", check);
                        timeout.cancel();
                    }
                };
            }
            function isShadowElement(element) {
                for (;element.parentNode; ) element = element.parentNode;
                return "[object ShadowRoot]" === element.toString();
            }
            var currentScript = "undefined" != typeof document ? document.currentScript : null;
            var getCurrentScript = memoize((function() {
                if (currentScript) return currentScript;
                if (currentScript = function() {
                    try {
                        var stack = function() {
                            try {
                                throw new Error("_");
                            } catch (err) {
                                return err.stack || "";
                            }
                        }();
                        var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                        var scriptLocation = stackDetails && stackDetails[1];
                        if (!scriptLocation) return;
                        for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                            var script = _Array$prototype$slic2[_i22];
                            if (script.src && script.src === scriptLocation) return script;
                        }
                    } catch (err) {}
                }()) return currentScript;
                throw new Error("Can not determine current script");
            }));
            var currentUID = uniqueID();
            memoize((function() {
                var script;
                try {
                    script = getCurrentScript();
                } catch (err) {
                    return currentUID;
                }
                var uid = script.getAttribute("data-uid");
                if (uid && "string" == typeof uid) return uid;
                if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
                uid = uniqueID();
                script.setAttribute("data-uid-auto", uid);
                return uid;
            }));
            function toPx(val) {
                return function(val) {
                    if ("number" == typeof val) return val;
                    var match = val.match(/^([0-9]+)(px|%)$/);
                    if (!match) throw new Error("Could not match css value from " + val);
                    return parseInt(match[1], 10);
                }(val) + "px";
            }
            function toCSS(val) {
                return "number" == typeof val ? toPx(val) : "string" == typeof (str = val) && /^[0-9]+%$/.test(str) ? val : toPx(val);
                var str;
            }
            function global_getGlobal(win) {
                void 0 === win && (win = window);
                var globalKey = "__post_robot_10_0_42__";
                return win !== window ? win[globalKey] : win[globalKey] = win[globalKey] || {};
            }
            var getObj = function() {
                return {};
            };
            function globalStore(key, defStore) {
                void 0 === key && (key = "store");
                void 0 === defStore && (defStore = getObj);
                return util_getOrSet(global_getGlobal(), key, (function() {
                    var store = defStore();
                    return {
                        has: function(storeKey) {
                            return store.hasOwnProperty(storeKey);
                        },
                        get: function(storeKey, defVal) {
                            return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
                        },
                        set: function(storeKey, val) {
                            store[storeKey] = val;
                            return val;
                        },
                        del: function(storeKey) {
                            delete store[storeKey];
                        },
                        getOrSet: function(storeKey, getter) {
                            return util_getOrSet(store, storeKey, getter);
                        },
                        reset: function() {
                            store = defStore();
                        },
                        keys: function() {
                            return Object.keys(store);
                        }
                    };
                }));
            }
            var WildCard = function() {};
            function getWildcard() {
                var global = global_getGlobal();
                global.WINDOW_WILDCARD = global.WINDOW_WILDCARD || new WildCard;
                return global.WINDOW_WILDCARD;
            }
            function windowStore(key, defStore) {
                void 0 === key && (key = "store");
                void 0 === defStore && (defStore = getObj);
                return globalStore("windowStore").getOrSet(key, (function() {
                    var winStore = new weakmap_CrossDomainSafeWeakMap;
                    var getStore = function(win) {
                        return winStore.getOrSet(win, defStore);
                    };
                    return {
                        has: function(win) {
                            return getStore(win).hasOwnProperty(key);
                        },
                        get: function(win, defVal) {
                            var store = getStore(win);
                            return store.hasOwnProperty(key) ? store[key] : defVal;
                        },
                        set: function(win, val) {
                            getStore(win)[key] = val;
                            return val;
                        },
                        del: function(win) {
                            delete getStore(win)[key];
                        },
                        getOrSet: function(win, getter) {
                            return util_getOrSet(getStore(win), key, getter);
                        }
                    };
                }));
            }
            function getInstanceID() {
                return globalStore("instance").getOrSet("instanceID", uniqueID);
            }
            function resolveHelloPromise(win, _ref) {
                var domain = _ref.domain;
                var helloPromises = windowStore("helloPromises");
                var existingPromise = helloPromises.get(win);
                existingPromise && existingPromise.resolve({
                    domain: domain
                });
                var newPromise = promise_ZalgoPromise.resolve({
                    domain: domain
                });
                helloPromises.set(win, newPromise);
                return newPromise;
            }
            function sayHello(win, _ref4) {
                return (0, _ref4.send)(win, "postrobot_hello", {
                    instanceID: getInstanceID()
                }, {
                    domain: "*",
                    timeout: -1
                }).then((function(_ref5) {
                    var origin = _ref5.origin, instanceID = _ref5.data.instanceID;
                    resolveHelloPromise(win, {
                        domain: origin
                    });
                    return {
                        win: win,
                        domain: origin,
                        instanceID: instanceID
                    };
                }));
            }
            function getWindowInstanceID(win, _ref6) {
                var send = _ref6.send;
                return windowStore("windowInstanceIDPromises").getOrSet(win, (function() {
                    return sayHello(win, {
                        send: send
                    }).then((function(_ref7) {
                        return _ref7.instanceID;
                    }));
                }));
            }
            function markWindowKnown(win) {
                windowStore("knownWindows").set(win, !0);
            }
            function isSerializedType(item) {
                return "object" == typeof item && null !== item && "string" == typeof item.__type__;
            }
            function determineType(val) {
                return void 0 === val ? "undefined" : null === val ? "null" : Array.isArray(val) ? "array" : "function" == typeof val ? "function" : "object" == typeof val ? val instanceof Error ? "error" : "function" == typeof val.then ? "promise" : "[object RegExp]" === {}.toString.call(val) ? "regex" : "[object Date]" === {}.toString.call(val) ? "date" : "object" : "string" == typeof val ? "string" : "number" == typeof val ? "number" : "boolean" == typeof val ? "boolean" : void 0;
            }
            function serializeType(type, val) {
                return {
                    __type__: type,
                    __val__: val
                };
            }
            var _SERIALIZER;
            var SERIALIZER = ((_SERIALIZER = {}).function = function() {}, _SERIALIZER.error = function(_ref) {
                return serializeType("error", {
                    message: _ref.message,
                    stack: _ref.stack,
                    code: _ref.code,
                    data: _ref.data
                });
            }, _SERIALIZER.promise = function() {}, _SERIALIZER.regex = function(val) {
                return serializeType("regex", val.source);
            }, _SERIALIZER.date = function(val) {
                return serializeType("date", val.toJSON());
            }, _SERIALIZER.array = function(val) {
                return val;
            }, _SERIALIZER.object = function(val) {
                return val;
            }, _SERIALIZER.string = function(val) {
                return val;
            }, _SERIALIZER.number = function(val) {
                return val;
            }, _SERIALIZER.boolean = function(val) {
                return val;
            }, _SERIALIZER.null = function(val) {
                return val;
            }, _SERIALIZER);
            var defaultSerializers = {};
            var _DESERIALIZER;
            var DESERIALIZER = ((_DESERIALIZER = {}).function = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER.error = function(_ref2) {
                var stack = _ref2.stack, code = _ref2.code, data = _ref2.data;
                var error = new Error(_ref2.message);
                error.code = code;
                data && (error.data = data);
                error.stack = stack + "\n\n" + error.stack;
                return error;
            }, _DESERIALIZER.promise = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER.regex = function(val) {
                return new RegExp(val);
            }, _DESERIALIZER.date = function(val) {
                return new Date(val);
            }, _DESERIALIZER.array = function(val) {
                return val;
            }, _DESERIALIZER.object = function(val) {
                return val;
            }, _DESERIALIZER.string = function(val) {
                return val;
            }, _DESERIALIZER.number = function(val) {
                return val;
            }, _DESERIALIZER.boolean = function(val) {
                return val;
            }, _DESERIALIZER.null = function(val) {
                return val;
            }, _DESERIALIZER);
            var defaultDeserializers = {};
            new promise_ZalgoPromise((function(resolve) {
                if (window.document && window.document.body) return resolve(window.document.body);
                var interval = setInterval((function() {
                    if (window.document && window.document.body) {
                        clearInterval(interval);
                        return resolve(window.document.body);
                    }
                }), 10);
            }));
            function cleanupProxyWindows() {
                var idToProxyWindow = globalStore("idToProxyWindow");
                for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(); _i2 < _idToProxyWindow$keys2.length; _i2++) {
                    var id = _idToProxyWindow$keys2[_i2];
                    idToProxyWindow.get(id).shouldClean() && idToProxyWindow.del(id);
                }
            }
            function getSerializedWindow(winPromise, _ref) {
                var send = _ref.send, _ref$id = _ref.id, id = void 0 === _ref$id ? uniqueID() : _ref$id;
                var windowNamePromise = winPromise.then((function(win) {
                    if (isSameDomain(win)) return assertSameDomain(win).name;
                }));
                var windowTypePromise = winPromise.then((function(window) {
                    if (isWindowClosed(window)) throw new Error("Window is closed, can not determine type");
                    return getOpener(window) ? WINDOW_TYPE.POPUP : WINDOW_TYPE.IFRAME;
                }));
                windowNamePromise.catch(src_util_noop);
                windowTypePromise.catch(src_util_noop);
                return {
                    id: id,
                    getType: function() {
                        return windowTypePromise;
                    },
                    getInstanceID: memoizePromise((function() {
                        return winPromise.then((function(win) {
                            return getWindowInstanceID(win, {
                                send: send
                            });
                        }));
                    })),
                    close: function() {
                        return winPromise.then(closeWindow);
                    },
                    getName: function() {
                        return winPromise.then((function(win) {
                            if (!isWindowClosed(win)) return isSameDomain(win) ? assertSameDomain(win).name : windowNamePromise;
                        }));
                    },
                    focus: function() {
                        return winPromise.then((function(win) {
                            win.focus();
                        }));
                    },
                    isClosed: function() {
                        return winPromise.then((function(win) {
                            return isWindowClosed(win);
                        }));
                    },
                    setLocation: function(href) {
                        return winPromise.then((function(win) {
                            var domain = window.location.protocol + "//" + window.location.host;
                            if (0 === href.indexOf("/")) href = "" + domain + href; else if (!href.match(/^https?:\/\//) && 0 !== href.indexOf(domain)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(href));
                            if (isSameDomain(win)) try {
                                if (win.location && "function" == typeof win.location.replace) {
                                    win.location.replace(href);
                                    return;
                                }
                            } catch (err) {}
                            win.location = href;
                        }));
                    },
                    setName: function(name) {
                        return winPromise.then((function(win) {
                            var sameDomain = isSameDomain(win);
                            var frame = function(win) {
                                if (isSameDomain(win)) return assertSameDomain(win).frameElement;
                                for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll("iframe"); _i21 < _document$querySelect2.length; _i21++) {
                                    var frame = _document$querySelect2[_i21];
                                    if (frame && frame.contentWindow && frame.contentWindow === win) return frame;
                                }
                            }(win);
                            if (!sameDomain) throw new Error("Can not set name for cross-domain window: " + name);
                            assertSameDomain(win).name = name;
                            frame && frame.setAttribute("name", name);
                            windowNamePromise = promise_ZalgoPromise.resolve(name);
                        }));
                    }
                };
            }
            var window_ProxyWindow = function() {
                function ProxyWindow(_ref2) {
                    var send = _ref2.send, win = _ref2.win, serializedWindow = _ref2.serializedWindow;
                    this.id = void 0;
                    this.isProxyWindow = !0;
                    this.serializedWindow = void 0;
                    this.actualWindow = void 0;
                    this.actualWindowPromise = void 0;
                    this.send = void 0;
                    this.name = void 0;
                    this.actualWindowPromise = new promise_ZalgoPromise;
                    this.serializedWindow = serializedWindow || getSerializedWindow(this.actualWindowPromise, {
                        send: send
                    });
                    globalStore("idToProxyWindow").set(this.getID(), this);
                    win && this.setWindow(win, {
                        send: send
                    });
                }
                var _proto = ProxyWindow.prototype;
                _proto.getID = function() {
                    return this.serializedWindow.id;
                };
                _proto.getType = function() {
                    return this.serializedWindow.getType();
                };
                _proto.isPopup = function() {
                    return this.getType().then((function(type) {
                        return type === WINDOW_TYPE.POPUP;
                    }));
                };
                _proto.setLocation = function(href) {
                    var _this = this;
                    return this.serializedWindow.setLocation(href).then((function() {
                        return _this;
                    }));
                };
                _proto.getName = function() {
                    return this.serializedWindow.getName();
                };
                _proto.setName = function(name) {
                    var _this2 = this;
                    return this.serializedWindow.setName(name).then((function() {
                        return _this2;
                    }));
                };
                _proto.close = function() {
                    var _this3 = this;
                    return this.serializedWindow.close().then((function() {
                        return _this3;
                    }));
                };
                _proto.focus = function() {
                    var _this4 = this;
                    var isPopupPromise = this.isPopup();
                    var getNamePromise = this.getName();
                    var reopenPromise = promise_ZalgoPromise.hash({
                        isPopup: isPopupPromise,
                        name: getNamePromise
                    }).then((function(_ref3) {
                        var name = _ref3.name;
                        _ref3.isPopup && name && window.open("", name);
                    }));
                    var focusPromise = this.serializedWindow.focus();
                    return promise_ZalgoPromise.all([ reopenPromise, focusPromise ]).then((function() {
                        return _this4;
                    }));
                };
                _proto.isClosed = function() {
                    return this.serializedWindow.isClosed();
                };
                _proto.getWindow = function() {
                    return this.actualWindow;
                };
                _proto.setWindow = function(win, _ref4) {
                    var send = _ref4.send;
                    this.actualWindow = win;
                    this.actualWindowPromise.resolve(this.actualWindow);
                    this.serializedWindow = getSerializedWindow(this.actualWindowPromise, {
                        send: send,
                        id: this.getID()
                    });
                    windowStore("winToProxyWindow").set(win, this);
                };
                _proto.awaitWindow = function() {
                    return this.actualWindowPromise;
                };
                _proto.matchWindow = function(win, _ref5) {
                    var _this5 = this;
                    var send = _ref5.send;
                    return promise_ZalgoPromise.try((function() {
                        return _this5.actualWindow ? win === _this5.actualWindow : promise_ZalgoPromise.hash({
                            proxyInstanceID: _this5.getInstanceID(),
                            knownWindowInstanceID: getWindowInstanceID(win, {
                                send: send
                            })
                        }).then((function(_ref6) {
                            var match = _ref6.proxyInstanceID === _ref6.knownWindowInstanceID;
                            match && _this5.setWindow(win, {
                                send: send
                            });
                            return match;
                        }));
                    }));
                };
                _proto.unwrap = function() {
                    return this.actualWindow || this;
                };
                _proto.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID();
                };
                _proto.shouldClean = function() {
                    return Boolean(this.actualWindow && isWindowClosed(this.actualWindow));
                };
                _proto.serialize = function() {
                    return this.serializedWindow;
                };
                ProxyWindow.unwrap = function(win) {
                    return ProxyWindow.isProxyWindow(win) ? win.unwrap() : win;
                };
                ProxyWindow.serialize = function(win, _ref7) {
                    var send = _ref7.send;
                    cleanupProxyWindows();
                    return ProxyWindow.toProxyWindow(win, {
                        send: send
                    }).serialize();
                };
                ProxyWindow.deserialize = function(serializedWindow, _ref8) {
                    var send = _ref8.send;
                    cleanupProxyWindows();
                    return globalStore("idToProxyWindow").get(serializedWindow.id) || new ProxyWindow({
                        serializedWindow: serializedWindow,
                        send: send
                    });
                };
                ProxyWindow.isProxyWindow = function(obj) {
                    return Boolean(obj && !isWindow(obj) && obj.isProxyWindow);
                };
                ProxyWindow.toProxyWindow = function(win, _ref9) {
                    var send = _ref9.send;
                    cleanupProxyWindows();
                    if (ProxyWindow.isProxyWindow(win)) return win;
                    var actualWindow = win;
                    return windowStore("winToProxyWindow").get(actualWindow) || new ProxyWindow({
                        win: actualWindow,
                        send: send
                    });
                };
                return ProxyWindow;
            }();
            function addMethod(id, val, name, source, domain) {
                var methodStore = windowStore("methodStore");
                var proxyWindowMethods = globalStore("proxyWindowMethods");
                if (window_ProxyWindow.isProxyWindow(source)) proxyWindowMethods.set(id, {
                    val: val,
                    name: name,
                    domain: domain,
                    source: source
                }); else {
                    proxyWindowMethods.del(id);
                    methodStore.getOrSet(source, (function() {
                        return {};
                    }))[id] = {
                        domain: domain,
                        name: name,
                        val: val,
                        source: source
                    };
                }
            }
            function lookupMethod(source, id) {
                var methodStore = windowStore("methodStore");
                var proxyWindowMethods = globalStore("proxyWindowMethods");
                return methodStore.getOrSet(source, (function() {
                    return {};
                }))[id] || proxyWindowMethods.get(id);
            }
            function function_serializeFunction(destination, domain, val, key, _ref3) {
                on = (_ref = {
                    on: _ref3.on,
                    send: _ref3.send
                }).on, send = _ref.send, globalStore("builtinListeners").getOrSet("functionCalls", (function() {
                    return on("postrobot_method", {
                        domain: "*"
                    }, (function(_ref2) {
                        var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
                        var id = data.id, name = data.name;
                        var meth = lookupMethod(source, id);
                        if (!meth) throw new Error("Could not find method '" + name + "' with id: " + data.id + " in " + getDomain(window));
                        var methodSource = meth.source, domain = meth.domain, val = meth.val;
                        return promise_ZalgoPromise.try((function() {
                            if (!matchDomain(domain, origin)) throw new Error("Method '" + data.name + "' domain " + JSON.stringify(util_isRegex(meth.domain) ? meth.domain.source : meth.domain) + " does not match origin " + origin + " in " + getDomain(window));
                            if (window_ProxyWindow.isProxyWindow(methodSource)) return methodSource.matchWindow(source, {
                                send: send
                            }).then((function(match) {
                                if (!match) throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + getDomain(window));
                            }));
                        })).then((function() {
                            return val.apply({
                                source: source,
                                origin: origin
                            }, data.args);
                        }), (function(err) {
                            return promise_ZalgoPromise.try((function() {
                                if (val.onError) return val.onError(err);
                            })).then((function() {
                                err.stack && (err.stack = "Remote call to " + name + "(" + function(args) {
                                    void 0 === args && (args = []);
                                    return arrayFrom(args).map((function(arg) {
                                        return "string" == typeof arg ? "'" + arg + "'" : void 0 === arg ? "undefined" : null === arg ? "null" : "boolean" == typeof arg ? arg.toString() : Array.isArray(arg) ? "[ ... ]" : "object" == typeof arg ? "{ ... }" : "function" == typeof arg ? "() => { ... }" : "<" + typeof arg + ">";
                                    })).join(", ");
                                }(data.args) + ") failed\n\n" + err.stack);
                                throw err;
                            }));
                        })).then((function(result) {
                            return {
                                result: result,
                                id: id,
                                name: name
                            };
                        }));
                    }));
                }));
                var _ref, on, send;
                var id = val.__id__ || uniqueID();
                destination = window_ProxyWindow.unwrap(destination);
                var name = val.__name__ || val.name || key;
                "string" == typeof name && "function" == typeof name.indexOf && 0 === name.indexOf("anonymous::") && (name = name.replace("anonymous::", key + "::"));
                if (window_ProxyWindow.isProxyWindow(destination)) {
                    addMethod(id, val, name, destination, domain);
                    destination.awaitWindow().then((function(win) {
                        addMethod(id, val, name, win, domain);
                    }));
                } else addMethod(id, val, name, destination, domain);
                return serializeType("cross_domain_function", {
                    id: id,
                    name: name
                });
            }
            function serializeMessage(destination, domain, obj, _ref) {
                var _serialize;
                var on = _ref.on, send = _ref.send;
                return function(obj, serializers) {
                    void 0 === serializers && (serializers = defaultSerializers);
                    var result = JSON.stringify(obj, (function(key) {
                        var val = this[key];
                        if (isSerializedType(this)) return val;
                        var type = determineType(val);
                        if (!type) return val;
                        var serializer = serializers[type] || SERIALIZER[type];
                        return serializer ? serializer(val, key) : val;
                    }));
                    return void 0 === result ? "undefined" : result;
                }(obj, ((_serialize = {}).promise = function(val, key) {
                    return function(destination, domain, val, key, _ref) {
                        return serializeType("cross_domain_zalgo_promise", {
                            then: function_serializeFunction(destination, domain, (function(resolve, reject) {
                                return val.then(resolve, reject);
                            }), key, {
                                on: _ref.on,
                                send: _ref.send
                            })
                        });
                    }(destination, domain, val, key, {
                        on: on,
                        send: send
                    });
                }, _serialize.function = function(val, key) {
                    return function_serializeFunction(destination, domain, val, key, {
                        on: on,
                        send: send
                    });
                }, _serialize.object = function(val) {
                    return isWindow(val) || window_ProxyWindow.isProxyWindow(val) ? serializeType("cross_domain_window", window_ProxyWindow.serialize(val, {
                        send: send
                    })) : val;
                }, _serialize));
            }
            function deserializeMessage(source, origin, message, _ref2) {
                var _deserialize;
                var send = _ref2.send;
                return function(str, deserializers) {
                    void 0 === deserializers && (deserializers = defaultDeserializers);
                    if ("undefined" !== str) return JSON.parse(str, (function(key, val) {
                        if (isSerializedType(this)) return val;
                        var type;
                        var value;
                        if (isSerializedType(val)) {
                            type = val.__type__;
                            value = val.__val__;
                        } else {
                            type = determineType(val);
                            value = val;
                        }
                        if (!type) return value;
                        var deserializer = deserializers[type] || DESERIALIZER[type];
                        return deserializer ? deserializer(value, key) : value;
                    }));
                }(message, ((_deserialize = {}).cross_domain_zalgo_promise = function(serializedPromise) {
                    return function(source, origin, _ref2) {
                        return new promise_ZalgoPromise(_ref2.then);
                    }(0, 0, serializedPromise);
                }, _deserialize.cross_domain_function = function(serializedFunction) {
                    return function(source, origin, _ref4, _ref5) {
                        var id = _ref4.id, name = _ref4.name;
                        var send = _ref5.send;
                        var getDeserializedFunction = function(opts) {
                            void 0 === opts && (opts = {});
                            function crossDomainFunctionWrapper() {
                                var _arguments = arguments;
                                return window_ProxyWindow.toProxyWindow(source, {
                                    send: send
                                }).awaitWindow().then((function(win) {
                                    var meth = lookupMethod(win, id);
                                    if (meth && meth.val !== crossDomainFunctionWrapper) return meth.val.apply({
                                        source: window,
                                        origin: getDomain()
                                    }, _arguments);
                                    var _args = [].slice.call(_arguments);
                                    return opts.fireAndForget ? send(win, "postrobot_method", {
                                        id: id,
                                        name: name,
                                        args: _args
                                    }, {
                                        domain: origin,
                                        fireAndForget: !0
                                    }) : send(win, "postrobot_method", {
                                        id: id,
                                        name: name,
                                        args: _args
                                    }, {
                                        domain: origin,
                                        fireAndForget: !1
                                    }).then((function(res) {
                                        return res.data.result;
                                    }));
                                })).catch((function(err) {
                                    throw err;
                                }));
                            }
                            crossDomainFunctionWrapper.__name__ = name;
                            crossDomainFunctionWrapper.__origin__ = origin;
                            crossDomainFunctionWrapper.__source__ = source;
                            crossDomainFunctionWrapper.__id__ = id;
                            crossDomainFunctionWrapper.origin = origin;
                            return crossDomainFunctionWrapper;
                        };
                        var crossDomainFunctionWrapper = getDeserializedFunction();
                        crossDomainFunctionWrapper.fireAndForget = getDeserializedFunction({
                            fireAndForget: !0
                        });
                        return crossDomainFunctionWrapper;
                    }(source, origin, serializedFunction, {
                        send: send
                    });
                }, _deserialize.cross_domain_window = function(serializedWindow) {
                    return window_ProxyWindow.deserialize(serializedWindow, {
                        send: send
                    });
                }, _deserialize));
            }
            var SEND_MESSAGE_STRATEGIES = {};
            SEND_MESSAGE_STRATEGIES.postrobot_post_message = function(win, serializedMessage, domain) {
                0 === domain.indexOf("file:") && (domain = "*");
                win.postMessage(serializedMessage, domain);
            };
            SEND_MESSAGE_STRATEGIES.postrobot_global = function(win, serializedMessage) {
                if (!function(win) {
                    return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
                }(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
                if (!isSameDomain(win)) throw new Error("Post message through global disabled between different domain windows");
                if (!1 !== isSameTopWindow(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                var foreignGlobal = global_getGlobal(win);
                if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
                foreignGlobal.receiveMessage({
                    source: window,
                    origin: getDomain(),
                    data: serializedMessage
                });
            };
            function send_sendMessage(win, domain, message, _ref2) {
                var on = _ref2.on, send = _ref2.send;
                return promise_ZalgoPromise.try((function() {
                    var domainBuffer = windowStore().getOrSet(win, (function() {
                        return {};
                    }));
                    domainBuffer.buffer = domainBuffer.buffer || [];
                    domainBuffer.buffer.push(message);
                    domainBuffer.flush = domainBuffer.flush || promise_ZalgoPromise.flush().then((function() {
                        if (isWindowClosed(win)) throw new Error("Window is closed");
                        var serializedMessage = serializeMessage(win, domain, ((_ref = {}).__post_robot_10_0_42__ = domainBuffer.buffer || [],
                        _ref), {
                            on: on,
                            send: send
                        });
                        var _ref;
                        delete domainBuffer.buffer;
                        var strategies = Object.keys(SEND_MESSAGE_STRATEGIES);
                        var errors = [];
                        for (var _i2 = 0; _i2 < strategies.length; _i2++) {
                            var strategyName = strategies[_i2];
                            try {
                                SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                            } catch (err) {
                                errors.push(err);
                            }
                        }
                        if (errors.length === strategies.length) throw new Error("All post-robot messaging strategies failed:\n\n" + errors.map((function(err, i) {
                            return i + ". " + stringifyError(err);
                        })).join("\n\n"));
                    }));
                    return domainBuffer.flush.then((function() {
                        delete domainBuffer.flush;
                    }));
                })).then(src_util_noop);
            }
            function getResponseListener(hash) {
                return globalStore("responseListeners").get(hash);
            }
            function deleteResponseListener(hash) {
                globalStore("responseListeners").del(hash);
            }
            function isResponseListenerErrored(hash) {
                return globalStore("erroredResponseListeners").has(hash);
            }
            function getRequestListener(_ref) {
                var name = _ref.name, win = _ref.win, domain = _ref.domain;
                var requestListeners = windowStore("requestListeners");
                "*" === win && (win = null);
                "*" === domain && (domain = null);
                if (!name) throw new Error("Name required to get request listener");
                for (var _i4 = 0, _ref3 = [ win, getWildcard() ]; _i4 < _ref3.length; _i4++) {
                    var winQualifier = _ref3[_i4];
                    if (winQualifier) {
                        var nameListeners = requestListeners.get(winQualifier);
                        if (nameListeners) {
                            var domainListeners = nameListeners[name];
                            if (domainListeners) {
                                if (domain && "string" == typeof domain) {
                                    if (domainListeners[domain]) return domainListeners[domain];
                                    if (domainListeners.__domain_regex__) for (var _i6 = 0, _domainListeners$__DO2 = domainListeners.__domain_regex__; _i6 < _domainListeners$__DO2.length; _i6++) {
                                        var _domainListeners$__DO3 = _domainListeners$__DO2[_i6], listener = _domainListeners$__DO3.listener;
                                        if (matchDomain(_domainListeners$__DO3.regex, domain)) return listener;
                                    }
                                }
                                if (domainListeners["*"]) return domainListeners["*"];
                            }
                        }
                    }
                }
            }
            function handleRequest(source, origin, message, _ref) {
                var on = _ref.on, send = _ref.send;
                var options = getRequestListener({
                    name: message.name,
                    win: source,
                    domain: origin
                });
                var logName = "postrobot_method" === message.name && message.data && "string" == typeof message.data.name ? message.data.name + "()" : message.name;
                function sendResponse(ack, data, error) {
                    return promise_ZalgoPromise.flush().then((function() {
                        if (!message.fireAndForget && !isWindowClosed(source)) try {
                            return send_sendMessage(source, origin, {
                                id: uniqueID(),
                                origin: getDomain(window),
                                type: "postrobot_message_response",
                                hash: message.hash,
                                name: message.name,
                                ack: ack,
                                data: data,
                                error: error
                            }, {
                                on: on,
                                send: send
                            });
                        } catch (err) {
                            throw new Error("Send response message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                        }
                    }));
                }
                return promise_ZalgoPromise.all([ promise_ZalgoPromise.flush().then((function() {
                    if (!message.fireAndForget && !isWindowClosed(source)) try {
                        return send_sendMessage(source, origin, {
                            id: uniqueID(),
                            origin: getDomain(window),
                            type: "postrobot_message_ack",
                            hash: message.hash,
                            name: message.name
                        }, {
                            on: on,
                            send: send
                        });
                    } catch (err) {
                        throw new Error("Send ack message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                    }
                })), promise_ZalgoPromise.try((function() {
                    if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!matchDomain(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                    return options.handler({
                        source: source,
                        origin: origin,
                        data: message.data
                    });
                })).then((function(data) {
                    return sendResponse("success", data);
                }), (function(error) {
                    return sendResponse("error", null, error);
                })) ]).then(src_util_noop).catch((function(err) {
                    if (options && options.handleError) return options.handleError(err);
                    throw err;
                }));
            }
            function handleAck(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    try {
                        if (!matchDomain(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                        if (source !== options.win) throw new Error("Ack source does not match registered window");
                    } catch (err) {
                        options.promise.reject(err);
                    }
                    options.ack = !0;
                }
            }
            function handleResponse(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!matchDomain(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + (pattern = options.domain,
                    Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString()));
                    var pattern;
                    if (source !== options.win) throw new Error("Response source does not match registered window");
                    deleteResponseListener(message.hash);
                    "error" === message.ack ? options.promise.reject(message.error) : "success" === message.ack && options.promise.resolve({
                        source: source,
                        origin: origin,
                        data: message.data
                    });
                }
            }
            function receive_receiveMessage(event, _ref2) {
                var on = _ref2.on, send = _ref2.send;
                var receivedMessages = globalStore("receivedMessages");
                try {
                    if (!window || window.closed || !event.source) return;
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin;
                var messages = function(message, source, origin, _ref) {
                    var on = _ref.on, send = _ref.send;
                    var parsedMessage;
                    try {
                        parsedMessage = deserializeMessage(source, origin, message, {
                            on: on,
                            send: send
                        });
                    } catch (err) {
                        return;
                    }
                    if (parsedMessage && "object" == typeof parsedMessage && null !== parsedMessage) {
                        var parseMessages = parsedMessage.__post_robot_10_0_42__;
                        if (Array.isArray(parseMessages)) return parseMessages;
                    }
                }(event.data, source, origin, {
                    on: on,
                    send: send
                });
                if (messages) {
                    markWindowKnown(source);
                    for (var _i2 = 0; _i2 < messages.length; _i2++) {
                        var message = messages[_i2];
                        if (receivedMessages.has(message.id)) return;
                        receivedMessages.set(message.id, !0);
                        if (isWindowClosed(source) && !message.fireAndForget) return;
                        0 === message.origin.indexOf("file:") && (origin = "file://");
                        try {
                            "postrobot_message_request" === message.type ? handleRequest(source, origin, message, {
                                on: on,
                                send: send
                            }) : "postrobot_message_response" === message.type ? handleResponse(source, origin, message) : "postrobot_message_ack" === message.type && handleAck(source, origin, message);
                        } catch (err) {
                            setTimeout((function() {
                                throw err;
                            }), 0);
                        }
                    }
                }
            }
            function on_on(name, options, handler) {
                if (!name) throw new Error("Expected name");
                if ("function" == typeof (options = options || {})) {
                    handler = options;
                    options = {};
                }
                if (!handler) throw new Error("Expected handler");
                (options = options || {}).name = name;
                options.handler = handler || options.handler;
                var win = options.window;
                var domain = options.domain;
                var requestListener = function addRequestListener(_ref4, listener) {
                    var name = _ref4.name, win = _ref4.win, domain = _ref4.domain;
                    var requestListeners = windowStore("requestListeners");
                    if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                    if (Array.isArray(win)) {
                        var listenersCollection = [];
                        for (var _i8 = 0, _win2 = win; _i8 < _win2.length; _i8++) listenersCollection.push(addRequestListener({
                            name: name,
                            domain: domain,
                            win: _win2[_i8]
                        }, listener));
                        return {
                            cancel: function() {
                                for (var _i10 = 0; _i10 < listenersCollection.length; _i10++) listenersCollection[_i10].cancel();
                            }
                        };
                    }
                    if (Array.isArray(domain)) {
                        var _listenersCollection = [];
                        for (var _i12 = 0, _domain2 = domain; _i12 < _domain2.length; _i12++) _listenersCollection.push(addRequestListener({
                            name: name,
                            win: win,
                            domain: _domain2[_i12]
                        }, listener));
                        return {
                            cancel: function() {
                                for (var _i14 = 0; _i14 < _listenersCollection.length; _i14++) _listenersCollection[_i14].cancel();
                            }
                        };
                    }
                    var existingListener = getRequestListener({
                        name: name,
                        win: win,
                        domain: domain
                    });
                    win && "*" !== win || (win = getWildcard());
                    domain = domain || "*";
                    if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === getWildcard() ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                    var nameListeners = requestListeners.getOrSet(win, (function() {
                        return {};
                    }));
                    var domainListeners = util_getOrSet(nameListeners, name, (function() {
                        return {};
                    }));
                    var strDomain = domain.toString();
                    var regexListeners;
                    var regexListener;
                    util_isRegex(domain) ? (regexListeners = util_getOrSet(domainListeners, "__domain_regex__", (function() {
                        return [];
                    }))).push(regexListener = {
                        regex: domain,
                        listener: listener
                    }) : domainListeners[strDomain] = listener;
                    return {
                        cancel: function() {
                            delete domainListeners[strDomain];
                            if (regexListener) {
                                regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                                regexListeners.length || delete domainListeners.__domain_regex__;
                            }
                            Object.keys(domainListeners).length || delete nameListeners[name];
                            win && !Object.keys(nameListeners).length && requestListeners.del(win);
                        }
                    };
                }({
                    name: name,
                    win: win,
                    domain: domain
                }, {
                    handler: options.handler,
                    handleError: options.errorHandler || function(err) {
                        throw err;
                    },
                    window: win,
                    domain: domain || "*",
                    name: name
                });
                return {
                    cancel: function() {
                        requestListener.cancel();
                    }
                };
            }
            var send_send = function send(win, name, data, options) {
                var domainMatcher = (options = options || {}).domain || "*";
                var responseTimeout = options.timeout || -1;
                var childTimeout = options.timeout || 5e3;
                var fireAndForget = options.fireAndForget || !1;
                return promise_ZalgoPromise.try((function() {
                    !function(name, win, domain) {
                        if (!name) throw new Error("Expected name");
                        if (domain && "string" != typeof domain && !Array.isArray(domain) && !util_isRegex(domain)) throw new TypeError("Can not send " + name + ". Expected domain " + JSON.stringify(domain) + " to be a string, array, or regex");
                        if (isWindowClosed(win)) throw new Error("Can not send " + name + ". Target window is closed");
                    }(name, win, domainMatcher);
                    if (function(parent, child) {
                        var actualParent = getAncestor(child);
                        if (actualParent) return actualParent === parent;
                        if (child === parent) return !1;
                        if (getTop(child) === child) return !1;
                        for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) if (_getFrames8[_i15] === child) return !0;
                        return !1;
                    }(window, win)) return function(win, timeout, name) {
                        void 0 === timeout && (timeout = 5e3);
                        void 0 === name && (name = "Window");
                        var promise = function(win) {
                            return windowStore("helloPromises").getOrSet(win, (function() {
                                return new promise_ZalgoPromise;
                            }));
                        }(win);
                        -1 !== timeout && (promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms")));
                        return promise;
                    }(win, childTimeout);
                })).then((function(_temp) {
                    return function(win, targetDomain, actualDomain, _ref) {
                        var send = _ref.send;
                        return promise_ZalgoPromise.try((function() {
                            return "string" == typeof targetDomain ? targetDomain : promise_ZalgoPromise.try((function() {
                                return actualDomain || sayHello(win, {
                                    send: send
                                }).then((function(_ref2) {
                                    return _ref2.domain;
                                }));
                            })).then((function(normalizedDomain) {
                                if (!matchDomain(targetDomain, targetDomain)) throw new Error("Domain " + stringify(targetDomain) + " does not match " + stringify(targetDomain));
                                return normalizedDomain;
                            }));
                        }));
                    }(win, domainMatcher, (void 0 === _temp ? {} : _temp).domain, {
                        send: send
                    });
                })).then((function(targetDomain) {
                    var domain = targetDomain;
                    var logName = "postrobot_method" === name && data && "string" == typeof data.name ? data.name + "()" : name;
                    var promise = new promise_ZalgoPromise;
                    var hash = name + "_" + uniqueID();
                    if (!fireAndForget) {
                        var responseListener = {
                            name: name,
                            win: win,
                            domain: domain,
                            promise: promise
                        };
                        !function(hash, listener) {
                            globalStore("responseListeners").set(hash, listener);
                        }(hash, responseListener);
                        var reqPromises = windowStore("requestPromises").getOrSet(win, (function() {
                            return [];
                        }));
                        reqPromises.push(promise);
                        promise.catch((function() {
                            !function(hash) {
                                globalStore("erroredResponseListeners").set(hash, !0);
                            }(hash);
                            deleteResponseListener(hash);
                        }));
                        var totalAckTimeout = function(win) {
                            return windowStore("knownWindows").get(win, !1);
                        }(win) ? 1e4 : 2e3;
                        var totalResTimeout = responseTimeout;
                        var ackTimeout = totalAckTimeout;
                        var resTimeout = totalResTimeout;
                        var interval = safeInterval((function() {
                            if (isWindowClosed(win)) return promise.reject(new Error("Window closed for " + name + " before " + (responseListener.ack ? "response" : "ack")));
                            if (responseListener.cancelled) return promise.reject(new Error("Response listener was cancelled for " + name));
                            ackTimeout = Math.max(ackTimeout - 500, 0);
                            -1 !== resTimeout && (resTimeout = Math.max(resTimeout - 500, 0));
                            return responseListener.ack || 0 !== ackTimeout ? 0 === resTimeout ? promise.reject(new Error("No response for postMessage " + logName + " in " + getDomain() + " in " + totalResTimeout + "ms")) : void 0 : promise.reject(new Error("No ack for postMessage " + logName + " in " + getDomain() + " in " + totalAckTimeout + "ms"));
                        }), 500);
                        promise.finally((function() {
                            interval.cancel();
                            reqPromises.splice(reqPromises.indexOf(promise, 1));
                        })).catch(src_util_noop);
                    }
                    return send_sendMessage(win, domain, {
                        id: uniqueID(),
                        origin: getDomain(window),
                        type: "postrobot_message_request",
                        hash: hash,
                        name: name,
                        data: data,
                        fireAndForget: fireAndForget
                    }, {
                        on: on_on,
                        send: send
                    }).then((function() {
                        return fireAndForget ? promise.resolve() : promise;
                    }), (function(err) {
                        throw new Error("Send request message failed for " + logName + " in " + getDomain() + "\n\n" + stringifyError(err));
                    }));
                }));
            };
            function setup_serializeMessage(destination, domain, obj) {
                return serializeMessage(destination, domain, obj, {
                    on: on_on,
                    send: send_send
                });
            }
            function setup_deserializeMessage(source, origin, message) {
                return deserializeMessage(source, origin, message, {
                    on: on_on,
                    send: send_send
                });
            }
            function setup_toProxyWindow(win) {
                return window_ProxyWindow.toProxyWindow(win, {
                    send: send_send
                });
            }
            function lib_global_getGlobal(win) {
                void 0 === win && (win = window);
                if (!isSameDomain(win)) throw new Error("Can not get global for window on different domain");
                win.__zoid_9_0_63__ || (win.__zoid_9_0_63__ = {});
                return win.__zoid_9_0_63__;
            }
            function getProxyObject(obj) {
                return {
                    get: function() {
                        var _this = this;
                        return promise_ZalgoPromise.try((function() {
                            if (_this.source && _this.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                            return obj;
                        }));
                    }
                };
            }
            var PROP_TYPE = {
                STRING: "string",
                OBJECT: "object",
                FUNCTION: "function",
                BOOLEAN: "boolean",
                NUMBER: "number",
                ARRAY: "array"
            };
            var PROP_SERIALIZATION = {
                JSON: "json",
                DOTIFY: "dotify",
                BASE64: "base64"
            };
            var CONTEXT = WINDOW_TYPE;
            var EVENT = {
                RENDER: "zoid-render",
                RENDERED: "zoid-rendered",
                DISPLAY: "zoid-display",
                ERROR: "zoid-error",
                CLOSE: "zoid-close",
                DESTROY: "zoid-destroy",
                PROPS: "zoid-props",
                RESIZE: "zoid-resize",
                FOCUS: "zoid-focus"
            };
            function normalizeChildProp(propsDef, props, key, value, helpers) {
                if (!propsDef.hasOwnProperty(key)) return value;
                var prop = propsDef[key];
                return "function" == typeof prop.childDecorate ? prop.childDecorate({
                    value: value,
                    uid: helpers.uid,
                    close: helpers.close,
                    focus: helpers.focus,
                    onError: helpers.onError,
                    onProps: helpers.onProps,
                    resize: helpers.resize,
                    getParent: helpers.getParent,
                    getParentDomain: helpers.getParentDomain,
                    show: helpers.show,
                    hide: helpers.hide
                }) : value;
            }
            function parseChildWindowName(windowName) {
                return inlineMemoize(parseChildWindowName, (function() {
                    if (!windowName) throw new Error("No window name");
                    var _windowName$split = windowName.split("__"), zoidcomp = _windowName$split[1], name = _windowName$split[2], encodedPayload = _windowName$split[3];
                    if ("zoid" !== zoidcomp) throw new Error("Window not rendered by zoid - got " + zoidcomp);
                    if (!name) throw new Error("Expected component name");
                    if (!encodedPayload) throw new Error("Expected encoded payload");
                    try {
                        return JSON.parse(function(str) {
                            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(str), (function(c) {
                                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                            })).join(""));
                            if ("undefined" != typeof Buffer) return Buffer.from(str, "base64").toString("utf8");
                            throw new Error("Can not find window.atob or Buffer");
                        }(encodedPayload));
                    } catch (err) {
                        throw new Error("Can not decode window name payload: " + encodedPayload + ": " + stringifyError(err));
                    }
                }), [ windowName ]);
            }
            function getChildPayload() {
                try {
                    return parseChildWindowName(window.name);
                } catch (err) {}
            }
            function child_focus() {
                return promise_ZalgoPromise.try((function() {
                    window.focus();
                }));
            }
            function child_destroy() {
                return promise_ZalgoPromise.try((function() {
                    window.close();
                }));
            }
            function props_getQueryParam(prop, key, value) {
                return promise_ZalgoPromise.try((function() {
                    return "function" == typeof prop.queryParam ? prop.queryParam({
                        value: value
                    }) : "string" == typeof prop.queryParam ? prop.queryParam : key;
                }));
            }
            function getQueryValue(prop, key, value) {
                return promise_ZalgoPromise.try((function() {
                    return "function" == typeof prop.queryValue && isDefined(value) ? prop.queryValue({
                        value: value
                    }) : value;
                }));
            }
            function parentComponent(options, overrides, parentWin) {
                void 0 === overrides && (overrides = {});
                void 0 === parentWin && (parentWin = window);
                var propsDef = options.propsDef, containerTemplate = options.containerTemplate, prerenderTemplate = options.prerenderTemplate, tag = options.tag, name = options.name, attributes = options.attributes, dimensions = options.dimensions, autoResize = options.autoResize, url = options.url, domainMatch = options.domain;
                var initPromise = new promise_ZalgoPromise;
                var handledErrors = [];
                var clean = cleanup();
                var state = {};
                var internalState = {
                    visible: !0
                };
                var event = overrides.event ? overrides.event : (triggered = {}, handlers = {},
                {
                    on: function(eventName, handler) {
                        var handlerList = handlers[eventName] = handlers[eventName] || [];
                        handlerList.push(handler);
                        var cancelled = !1;
                        return {
                            cancel: function() {
                                if (!cancelled) {
                                    cancelled = !0;
                                    handlerList.splice(handlerList.indexOf(handler), 1);
                                }
                            }
                        };
                    },
                    once: function(eventName, handler) {
                        var listener = this.on(eventName, (function() {
                            listener.cancel();
                            handler();
                        }));
                        return listener;
                    },
                    trigger: function(eventName) {
                        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                        var handlerList = handlers[eventName];
                        var promises = [];
                        if (handlerList) {
                            var _loop = function(_i2) {
                                var handler = handlerList[_i2];
                                promises.push(promise_ZalgoPromise.try((function() {
                                    return handler.apply(void 0, args);
                                })));
                            };
                            for (var _i2 = 0; _i2 < handlerList.length; _i2++) _loop(_i2);
                        }
                        return promise_ZalgoPromise.all(promises).then(src_util_noop);
                    },
                    triggerOnce: function(eventName) {
                        if (triggered[eventName]) return promise_ZalgoPromise.resolve();
                        triggered[eventName] = !0;
                        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                        return this.trigger.apply(this, [ eventName ].concat(args));
                    },
                    reset: function() {
                        handlers = {};
                    }
                });
                var triggered, handlers;
                var props = overrides.props ? overrides.props : {};
                var currentProxyWin;
                var currentProxyContainer;
                var childComponent;
                var onErrorOverride = overrides.onError;
                var getProxyContainerOverride = overrides.getProxyContainer;
                var showOverride = overrides.show;
                var hideOverride = overrides.hide;
                var closeOverride = overrides.close;
                var renderContainerOverride = overrides.renderContainer;
                var getProxyWindowOverride = overrides.getProxyWindow;
                var setProxyWinOverride = overrides.setProxyWin;
                var openFrameOverride = overrides.openFrame;
                var openPrerenderFrameOverride = overrides.openPrerenderFrame;
                var prerenderOverride = overrides.prerender;
                var openOverride = overrides.open;
                var openPrerenderOverride = overrides.openPrerender;
                var watchForUnloadOverride = overrides.watchForUnload;
                var getInternalStateOverride = overrides.getInternalState;
                var setInternalStateOverride = overrides.setInternalState;
                var getPropsForChild = function(domain) {
                    var result = {};
                    for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
                        var key = _Object$keys2[_i2];
                        var prop = propsDef[key];
                        prop && !1 === prop.sendToChild || prop && prop.sameDomain && !matchDomain(domain, getDomain(window)) || (result[key] = props[key]);
                    }
                    return promise_ZalgoPromise.hash(result);
                };
                var getInternalState = function() {
                    return promise_ZalgoPromise.try((function() {
                        return getInternalStateOverride ? getInternalStateOverride() : internalState;
                    }));
                };
                var setInternalState = function(newInternalState) {
                    return promise_ZalgoPromise.try((function() {
                        return setInternalStateOverride ? setInternalStateOverride(newInternalState) : internalState = _extends({}, internalState, newInternalState);
                    }));
                };
                var getProxyWindow = function() {
                    return getProxyWindowOverride ? getProxyWindowOverride() : promise_ZalgoPromise.try((function() {
                        var windowProp = props.window;
                        if (windowProp) {
                            var _proxyWin = setup_toProxyWindow(windowProp);
                            clean.register((function() {
                                return windowProp.close();
                            }));
                            return _proxyWin;
                        }
                        return new window_ProxyWindow({
                            send: send_send
                        });
                    }));
                };
                var getProxyContainer = function(container) {
                    return getProxyContainerOverride ? getProxyContainerOverride(container) : promise_ZalgoPromise.try((function() {
                        return elementReady(container);
                    })).then((function(containerElement) {
                        isShadowElement(containerElement) && (containerElement = function(element) {
                            var shadowHost = function(element) {
                                var shadowRoot = function(element) {
                                    for (;element.parentNode; ) element = element.parentNode;
                                    if (isShadowElement(element)) return element;
                                }(element);
                                if (shadowRoot.host) return shadowRoot.host;
                            }(element);
                            if (!shadowHost) throw new Error("Element is not in shadow dom");
                            if (isShadowElement(shadowHost)) throw new Error("Host element is also in shadow dom");
                            var slotName = "shadow-slot-" + uniqueID();
                            var slot = document.createElement("slot");
                            slot.setAttribute("name", slotName);
                            element.appendChild(slot);
                            var slotProvider = document.createElement("div");
                            slotProvider.setAttribute("slot", slotName);
                            shadowHost.appendChild(slotProvider);
                            return slotProvider;
                        }(containerElement));
                        return getProxyObject(containerElement);
                    }));
                };
                var setProxyWin = function(proxyWin) {
                    return setProxyWinOverride ? setProxyWinOverride(proxyWin) : promise_ZalgoPromise.try((function() {
                        currentProxyWin = proxyWin;
                    }));
                };
                var show = function() {
                    return showOverride ? showOverride() : promise_ZalgoPromise.hash({
                        setState: setInternalState({
                            visible: !0
                        }),
                        showElement: currentProxyContainer ? currentProxyContainer.get().then(showElement) : null
                    }).then(src_util_noop);
                };
                var hide = function() {
                    return hideOverride ? hideOverride() : promise_ZalgoPromise.hash({
                        setState: setInternalState({
                            visible: !1
                        }),
                        showElement: currentProxyContainer ? currentProxyContainer.get().then(hideElement) : null
                    }).then(src_util_noop);
                };
                var getUrl = function() {
                    return "function" == typeof url ? url({
                        props: props
                    }) : url;
                };
                var getAttributes = function() {
                    return "function" == typeof attributes ? attributes({
                        props: props
                    }) : attributes;
                };
                var getChildDomain = function() {
                    return domainMatch && "string" == typeof domainMatch ? domainMatch : getDomainFromUrl(getUrl());
                };
                var getDomainMatcher = function() {
                    return domainMatch && util_isRegex(domainMatch) ? domainMatch : getChildDomain();
                };
                var openFrame = function(context, _ref) {
                    var windowName = _ref.windowName;
                    return openFrameOverride ? openFrameOverride(context, {
                        windowName: windowName
                    }) : promise_ZalgoPromise.try((function() {
                        if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
                            attributes: _extends({
                                name: windowName,
                                title: name
                            }, getAttributes().iframe)
                        }));
                    }));
                };
                var openPrerenderFrame = function(context) {
                    return openPrerenderFrameOverride ? openPrerenderFrameOverride(context) : promise_ZalgoPromise.try((function() {
                        if (context === CONTEXT.IFRAME) return getProxyObject(dom_iframe({
                            attributes: _extends({
                                name: "__zoid_prerender_frame__" + name + "_" + uniqueID() + "__",
                                title: "prerender__" + name
                            }, getAttributes().iframe)
                        }));
                    }));
                };
                var openPrerender = function(context, proxyWin, proxyPrerenderFrame) {
                    return openPrerenderOverride ? openPrerenderOverride(context, proxyWin, proxyPrerenderFrame) : promise_ZalgoPromise.try((function() {
                        if (context === CONTEXT.IFRAME) {
                            if (!proxyPrerenderFrame) throw new Error("Expected proxy frame to be passed");
                            return proxyPrerenderFrame.get().then((function(prerenderFrame) {
                                clean.register((function() {
                                    return destroyElement(prerenderFrame);
                                }));
                                return awaitFrameWindow(prerenderFrame).then((function(prerenderFrameWindow) {
                                    return assertSameDomain(prerenderFrameWindow);
                                })).then((function(win) {
                                    return setup_toProxyWindow(win);
                                }));
                            }));
                        }
                        throw new Error("No render context available for " + context);
                    }));
                };
                var focus = function() {
                    return promise_ZalgoPromise.try((function() {
                        if (currentProxyWin) return promise_ZalgoPromise.all([ event.trigger(EVENT.FOCUS), currentProxyWin.focus() ]).then(src_util_noop);
                    }));
                };
                var getWindowRef = function(target, domain, uid, context) {
                    if (domain === getDomain(window)) {
                        var global = lib_global_getGlobal(window);
                        global.windows = global.windows || {};
                        global.windows[uid] = window;
                        clean.register((function() {
                            delete global.windows[uid];
                        }));
                        return {
                            type: "global",
                            uid: uid
                        };
                    }
                    return context === CONTEXT.POPUP ? {
                        type: "opener"
                    } : {
                        type: "parent",
                        distance: getDistanceFromTop(window)
                    };
                };
                var initChild = function(childExports) {
                    return promise_ZalgoPromise.try((function() {
                        childComponent = childExports;
                        initPromise.resolve();
                        clean.register((function() {
                            return childExports.close.fireAndForget().catch(src_util_noop);
                        }));
                    }));
                };
                var resize = function(_ref2) {
                    var width = _ref2.width, height = _ref2.height;
                    return promise_ZalgoPromise.try((function() {
                        event.trigger(EVENT.RESIZE, {
                            width: width,
                            height: height
                        });
                    }));
                };
                var destroy = function(err) {
                    return promise_ZalgoPromise.try((function() {
                        return event.trigger(EVENT.DESTROY);
                    })).catch(src_util_noop).then((function() {
                        return clean.all(err);
                    })).then((function() {
                        initPromise.asyncReject(err || new Error("Component destroyed"));
                    }));
                };
                var close = memoize((function(err) {
                    return promise_ZalgoPromise.try((function() {
                        if (closeOverride) {
                            if (isWindowClosed(closeOverride.__source__)) return;
                            return closeOverride();
                        }
                        return promise_ZalgoPromise.try((function() {
                            return event.trigger(EVENT.CLOSE);
                        })).then((function() {
                            return destroy(err || new Error("Component closed"));
                        }));
                    }));
                }));
                var open = function(context, _ref3) {
                    var proxyWin = _ref3.proxyWin, proxyFrame = _ref3.proxyFrame;
                    return openOverride ? openOverride(context, {
                        proxyWin: proxyWin,
                        proxyFrame: proxyFrame,
                        windowName: _ref3.windowName
                    }) : promise_ZalgoPromise.try((function() {
                        if (context === CONTEXT.IFRAME) {
                            if (!proxyFrame) throw new Error("Expected proxy frame to be passed");
                            return proxyFrame.get().then((function(frame) {
                                return awaitFrameWindow(frame).then((function(win) {
                                    clean.register((function() {
                                        return destroyElement(frame);
                                    }));
                                    clean.register((function() {
                                        return function(win) {
                                            for (var _i2 = 0, _requestPromises$get2 = windowStore("requestPromises").get(win, []); _i2 < _requestPromises$get2.length; _i2++) _requestPromises$get2[_i2].reject(new Error("Window " + (isWindowClosed(win) ? "closed" : "cleaned up") + " before response")).catch(src_util_noop);
                                        }(win);
                                    }));
                                    return win;
                                }));
                            }));
                        }
                        throw new Error("No render context available for " + context);
                    })).then((function(win) {
                        proxyWin.setWindow(win, {
                            send: send_send
                        });
                        return proxyWin;
                    }));
                };
                var watchForUnload = function() {
                    return promise_ZalgoPromise.try((function() {
                        var unloadWindowListener = addEventListener(window, "unload", once((function() {
                            destroy(new Error("Window navigated away"));
                        })));
                        var closeParentWindowListener = onCloseWindow(parentWin, destroy, 3e3);
                        clean.register(closeParentWindowListener.cancel);
                        clean.register(unloadWindowListener.cancel);
                        if (watchForUnloadOverride) return watchForUnloadOverride();
                    }));
                };
                var checkWindowClose = function(proxyWin) {
                    var closed = !1;
                    return proxyWin.isClosed().then((function(isClosed) {
                        if (isClosed) {
                            closed = !0;
                            return close(new Error("Detected component window close"));
                        }
                        return promise_ZalgoPromise.delay(200).then((function() {
                            return proxyWin.isClosed();
                        })).then((function(secondIsClosed) {
                            if (secondIsClosed) {
                                closed = !0;
                                return close(new Error("Detected component window close"));
                            }
                        }));
                    })).then((function() {
                        return closed;
                    }));
                };
                var onError = function(err) {
                    return onErrorOverride ? onErrorOverride(err) : promise_ZalgoPromise.try((function() {
                        if (-1 === handledErrors.indexOf(err)) {
                            handledErrors.push(err);
                            initPromise.asyncReject(err);
                            return event.trigger(EVENT.ERROR, err);
                        }
                    }));
                };
                initChild.onError = onError;
                var renderTemplate = function(renderer, _ref6) {
                    return renderer({
                        container: _ref6.container,
                        context: _ref6.context,
                        uid: _ref6.uid,
                        doc: _ref6.doc,
                        frame: _ref6.frame,
                        prerenderFrame: _ref6.prerenderFrame,
                        focus: focus,
                        close: close,
                        state: state,
                        props: props,
                        tag: tag,
                        dimensions: dimensions,
                        event: event
                    });
                };
                var prerender = function(proxyPrerenderWin, _ref7) {
                    var context = _ref7.context, uid = _ref7.uid;
                    return prerenderOverride ? prerenderOverride(proxyPrerenderWin, {
                        context: context,
                        uid: uid
                    }) : promise_ZalgoPromise.try((function() {
                        if (prerenderTemplate) {
                            var prerenderWindow = proxyPrerenderWin.getWindow();
                            if (prerenderWindow && isSameDomain(prerenderWindow) && function(win) {
                                try {
                                    if (!win.location.href) return !0;
                                    if ("about:blank" === win.location.href) return !0;
                                } catch (err) {}
                                return !1;
                            }(prerenderWindow)) {
                                var doc = (prerenderWindow = assertSameDomain(prerenderWindow)).document;
                                var el = renderTemplate(prerenderTemplate, {
                                    context: context,
                                    uid: uid,
                                    doc: doc
                                });
                                if (el) {
                                    if (el.ownerDocument !== doc) throw new Error("Expected prerender template to have been created with document from child window");
                                    !function(win, el) {
                                        var tag = el.tagName.toLowerCase();
                                        if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                                        var documentElement = win.document.documentElement;
                                        for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
                                        for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
                                    }(prerenderWindow, el);
                                    var _autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width, _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height, _autoResize$element = autoResize.element, element = void 0 === _autoResize$element ? "body" : _autoResize$element;
                                    if ((element = getElementSafe(element, doc)) && (width || height)) {
                                        var prerenderResizeListener = onResize(element, (function(_ref8) {
                                            resize({
                                                width: width ? _ref8.width : void 0,
                                                height: height ? _ref8.height : void 0
                                            });
                                        }), {
                                            width: width,
                                            height: height,
                                            win: prerenderWindow
                                        });
                                        event.on(EVENT.RENDERED, prerenderResizeListener.cancel);
                                    }
                                }
                            }
                        }
                    }));
                };
                var renderContainer = function(proxyContainer, _ref9) {
                    var proxyFrame = _ref9.proxyFrame, proxyPrerenderFrame = _ref9.proxyPrerenderFrame, context = _ref9.context, uid = _ref9.uid;
                    return renderContainerOverride ? renderContainerOverride(proxyContainer, {
                        proxyFrame: proxyFrame,
                        proxyPrerenderFrame: proxyPrerenderFrame,
                        context: context,
                        uid: uid
                    }) : promise_ZalgoPromise.hash({
                        container: proxyContainer.get(),
                        frame: proxyFrame ? proxyFrame.get() : null,
                        prerenderFrame: proxyPrerenderFrame ? proxyPrerenderFrame.get() : null,
                        internalState: getInternalState()
                    }).then((function(_ref10) {
                        var container = _ref10.container, visible = _ref10.internalState.visible;
                        var innerContainer = renderTemplate(containerTemplate, {
                            context: context,
                            uid: uid,
                            container: container,
                            frame: _ref10.frame,
                            prerenderFrame: _ref10.prerenderFrame,
                            doc: document
                        });
                        if (innerContainer) {
                            visible || hideElement(innerContainer);
                            appendChild(container, innerContainer);
                            var containerWatcher = function(element, handler) {
                                handler = once(handler);
                                var cancelled = !1;
                                var mutationObservers = [];
                                var interval;
                                var sacrificialFrame;
                                var sacrificialFrameWin;
                                var cancel = function() {
                                    cancelled = !0;
                                    for (var _i18 = 0; _i18 < mutationObservers.length; _i18++) mutationObservers[_i18].disconnect();
                                    interval && interval.cancel();
                                    sacrificialFrameWin && sacrificialFrameWin.removeEventListener("unload", elementClosed);
                                    sacrificialFrame && destroyElement(sacrificialFrame);
                                };
                                var elementClosed = function() {
                                    if (!cancelled) {
                                        handler();
                                        cancel();
                                    }
                                };
                                if (isElementClosed(element)) {
                                    elementClosed();
                                    return {
                                        cancel: cancel
                                    };
                                }
                                if (window.MutationObserver) {
                                    var mutationElement = element.parentElement;
                                    for (;mutationElement; ) {
                                        var mutationObserver = new window.MutationObserver((function() {
                                            isElementClosed(element) && elementClosed();
                                        }));
                                        mutationObserver.observe(mutationElement, {
                                            childList: !0
                                        });
                                        mutationObservers.push(mutationObserver);
                                        mutationElement = mutationElement.parentElement;
                                    }
                                }
                                (sacrificialFrame = document.createElement("iframe")).setAttribute("name", "__detect_close_" + uniqueID() + "__");
                                sacrificialFrame.style.display = "none";
                                awaitFrameWindow(sacrificialFrame).then((function(frameWin) {
                                    (sacrificialFrameWin = assertSameDomain(frameWin)).addEventListener("unload", elementClosed);
                                }));
                                element.appendChild(sacrificialFrame);
                                interval = safeInterval((function() {
                                    isElementClosed(element) && elementClosed();
                                }), 1e3);
                                return {
                                    cancel: cancel
                                };
                            }(innerContainer, (function() {
                                return close(new Error("Detected container element removed from DOM"));
                            }));
                            clean.register((function() {
                                return containerWatcher.cancel();
                            }));
                            clean.register((function() {
                                return destroyElement(innerContainer);
                            }));
                            return currentProxyContainer = getProxyObject(innerContainer);
                        }
                    }));
                };
                var getHelpers = function() {
                    return {
                        state: state,
                        event: event,
                        close: close,
                        focus: focus,
                        resize: resize,
                        onError: onError,
                        updateProps: updateProps,
                        show: show,
                        hide: hide
                    };
                };
                var setProps = function(newProps, isUpdate) {
                    void 0 === isUpdate && (isUpdate = !1);
                    var helpers = getHelpers();
                    !function(propsDef, props, inputProps, helpers, isUpdate) {
                        void 0 === isUpdate && (isUpdate = !1);
                        extend(props, inputProps = inputProps || {});
                        var propNames = isUpdate ? [] : [].concat(Object.keys(propsDef));
                        for (var _i2 = 0, _Object$keys2 = Object.keys(inputProps); _i2 < _Object$keys2.length; _i2++) {
                            var key = _Object$keys2[_i2];
                            -1 === propNames.indexOf(key) && propNames.push(key);
                        }
                        var aliases = [];
                        var state = helpers.state, close = helpers.close, focus = helpers.focus, event = helpers.event, onError = helpers.onError;
                        for (var _i4 = 0; _i4 < propNames.length; _i4++) {
                            var _key = propNames[_i4];
                            var propDef = propsDef[_key];
                            var value = inputProps[_key];
                            if (propDef) {
                                var alias = propDef.alias;
                                if (alias) {
                                    !isDefined(value) && isDefined(inputProps[alias]) && (value = inputProps[alias]);
                                    aliases.push(alias);
                                }
                                propDef.value && (value = propDef.value({
                                    props: props,
                                    state: state,
                                    close: close,
                                    focus: focus,
                                    event: event,
                                    onError: onError
                                }));
                                !isDefined(value) && propDef.default && (value = propDef.default({
                                    props: props,
                                    state: state,
                                    close: close,
                                    focus: focus,
                                    event: event,
                                    onError: onError
                                }));
                                if (isDefined(value) && ("array" === propDef.type ? !Array.isArray(value) : typeof value !== propDef.type)) throw new TypeError("Prop is not of type " + propDef.type + ": " + _key);
                                props[_key] = value;
                            }
                        }
                        for (var _i6 = 0; _i6 < aliases.length; _i6++) delete props[aliases[_i6]];
                        for (var _i8 = 0, _Object$keys4 = Object.keys(props); _i8 < _Object$keys4.length; _i8++) {
                            var _key2 = _Object$keys4[_i8];
                            var _propDef = propsDef[_key2];
                            var _value = props[_key2];
                            _propDef && isDefined(_value) && _propDef.decorate && (props[_key2] = _propDef.decorate({
                                value: _value,
                                props: props,
                                state: state,
                                close: close,
                                focus: focus,
                                event: event,
                                onError: onError
                            }));
                        }
                        for (var _i10 = 0, _Object$keys6 = Object.keys(propsDef); _i10 < _Object$keys6.length; _i10++) {
                            var _key3 = _Object$keys6[_i10];
                            if (!1 !== propsDef[_key3].required && !isDefined(props[_key3])) throw new Error('Expected prop "' + _key3 + '" to be defined');
                        }
                    }(propsDef, props, newProps, helpers, isUpdate);
                };
                var updateProps = function(newProps) {
                    setProps(newProps, !0);
                    return initPromise.then((function() {
                        var child = childComponent;
                        var proxyWin = currentProxyWin;
                        if (child && proxyWin) return getPropsForChild(getDomainMatcher()).then((function(childProps) {
                            return child.updateProps(childProps).catch((function(err) {
                                return checkWindowClose(proxyWin).then((function(closed) {
                                    if (!closed) throw err;
                                }));
                            }));
                        }));
                    }));
                };
                return {
                    init: function() {
                        !function() {
                            event.on(EVENT.RENDER, (function() {
                                return props.onRender();
                            }));
                            event.on(EVENT.DISPLAY, (function() {
                                return props.onDisplay();
                            }));
                            event.on(EVENT.RENDERED, (function() {
                                return props.onRendered();
                            }));
                            event.on(EVENT.CLOSE, (function() {
                                return props.onClose();
                            }));
                            event.on(EVENT.DESTROY, (function() {
                                return props.onDestroy();
                            }));
                            event.on(EVENT.RESIZE, (function() {
                                return props.onResize();
                            }));
                            event.on(EVENT.FOCUS, (function() {
                                return props.onFocus();
                            }));
                            event.on(EVENT.PROPS, (function(newProps) {
                                return props.onProps(newProps);
                            }));
                            event.on(EVENT.ERROR, (function(err) {
                                return props && props.onError ? props.onError(err) : initPromise.reject(err).then((function() {
                                    setTimeout((function() {
                                        throw err;
                                    }), 1);
                                }));
                            }));
                            clean.register(event.reset);
                        }();
                    },
                    render: function(target, container, context) {
                        return promise_ZalgoPromise.try((function() {
                            var uid = "zoid-" + tag + "-" + uniqueID();
                            var domain = getDomainMatcher();
                            var childDomain = getChildDomain();
                            !function(target, domain, container) {
                                if (target !== window) {
                                    if (!isSameTopWindow(window, target)) throw new Error("Can only renderTo an adjacent frame");
                                    var origin = getDomain();
                                    if (!matchDomain(domain, origin) && !isSameDomain(target)) throw new Error("Can not render remotely to " + domain.toString() + " - can only render to " + origin);
                                    if (container && "string" != typeof container) throw new Error("Container passed to renderTo must be a string selector, got " + typeof container + " }");
                                }
                            }(target, domain, container);
                            var delegatePromise = promise_ZalgoPromise.try((function() {
                                if (target !== window) return function(context, target) {
                                    var delegateProps = {};
                                    for (var _i4 = 0, _Object$keys4 = Object.keys(props); _i4 < _Object$keys4.length; _i4++) {
                                        var propName = _Object$keys4[_i4];
                                        var propDef = propsDef[propName];
                                        propDef && propDef.allowDelegate && (delegateProps[propName] = props[propName]);
                                    }
                                    var childOverridesPromise = send_send(target, "zoid_delegate_" + name, {
                                        overrides: {
                                            props: delegateProps,
                                            event: event,
                                            close: close,
                                            onError: onError,
                                            getInternalState: getInternalState,
                                            setInternalState: setInternalState
                                        }
                                    }).then((function(_ref11) {
                                        var parentComp = _ref11.data.parent;
                                        clean.register((function(err) {
                                            if (!isWindowClosed(target)) return parentComp.destroy(err);
                                        }));
                                        return parentComp.getDelegateOverrides();
                                    })).catch((function(err) {
                                        throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + stringifyError(err));
                                    }));
                                    getProxyContainerOverride = function() {
                                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.getProxyContainer.apply(childOverrides, args);
                                        }));
                                    };
                                    renderContainerOverride = function() {
                                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.renderContainer.apply(childOverrides, args);
                                        }));
                                    };
                                    showOverride = function() {
                                        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.show.apply(childOverrides, args);
                                        }));
                                    };
                                    hideOverride = function() {
                                        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.hide.apply(childOverrides, args);
                                        }));
                                    };
                                    watchForUnloadOverride = function() {
                                        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
                                        return childOverridesPromise.then((function(childOverrides) {
                                            return childOverrides.watchForUnload.apply(childOverrides, args);
                                        }));
                                    };
                                    if (context === CONTEXT.IFRAME) {
                                        getProxyWindowOverride = function() {
                                            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.getProxyWindow.apply(childOverrides, args);
                                            }));
                                        };
                                        openFrameOverride = function() {
                                            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) args[_key7] = arguments[_key7];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.openFrame.apply(childOverrides, args);
                                            }));
                                        };
                                        openPrerenderFrameOverride = function() {
                                            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) args[_key8] = arguments[_key8];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.openPrerenderFrame.apply(childOverrides, args);
                                            }));
                                        };
                                        prerenderOverride = function() {
                                            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) args[_key9] = arguments[_key9];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.prerender.apply(childOverrides, args);
                                            }));
                                        };
                                        openOverride = function() {
                                            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) args[_key10] = arguments[_key10];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.open.apply(childOverrides, args);
                                            }));
                                        };
                                        openPrerenderOverride = function() {
                                            for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) args[_key11] = arguments[_key11];
                                            return childOverridesPromise.then((function(childOverrides) {
                                                return childOverrides.openPrerender.apply(childOverrides, args);
                                            }));
                                        };
                                    }
                                    return childOverridesPromise;
                                }(context, target);
                            }));
                            var windowProp = props.window;
                            var watchForUnloadPromise = watchForUnload();
                            var buildUrlPromise = function(propsDef, props) {
                                var params = {};
                                var keys = Object.keys(props);
                                return promise_ZalgoPromise.all(keys.map((function(key) {
                                    var prop = propsDef[key];
                                    if (prop) return promise_ZalgoPromise.resolve().then((function() {
                                        var value = props[key];
                                        if (value && prop.queryParam) return value;
                                    })).then((function(value) {
                                        if (null != value) return promise_ZalgoPromise.all([ props_getQueryParam(prop, key, value), getQueryValue(prop, 0, value) ]).then((function(_ref) {
                                            var queryParam = _ref[0], queryValue = _ref[1];
                                            var result;
                                            if ("boolean" == typeof queryValue) result = queryValue.toString(); else if ("string" == typeof queryValue) result = queryValue.toString(); else if ("object" == typeof queryValue && null !== queryValue) {
                                                if (prop.serialization === PROP_SERIALIZATION.JSON) result = JSON.stringify(queryValue); else if (prop.serialization === PROP_SERIALIZATION.BASE64) result = btoa(JSON.stringify(queryValue)); else if (prop.serialization === PROP_SERIALIZATION.DOTIFY || !prop.serialization) {
                                                    result = function dotify(obj, prefix, newobj) {
                                                        void 0 === prefix && (prefix = "");
                                                        void 0 === newobj && (newobj = {});
                                                        prefix = prefix ? prefix + "." : prefix;
                                                        for (var key in obj) obj.hasOwnProperty(key) && null != obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every((function(val) {
                                                            return "object" != typeof val;
                                                        })) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" == typeof obj[key] ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = obj[key].toString());
                                                        return newobj;
                                                    }(queryValue, key);
                                                    for (var _i12 = 0, _Object$keys8 = Object.keys(result); _i12 < _Object$keys8.length; _i12++) {
                                                        var dotkey = _Object$keys8[_i12];
                                                        params[dotkey] = result[dotkey];
                                                    }
                                                    return;
                                                }
                                            } else "number" == typeof queryValue && (result = queryValue.toString());
                                            params[queryParam] = result;
                                        }));
                                    }));
                                }))).then((function() {
                                    return params;
                                }));
                            }(propsDef, props).then((function(query) {
                                return function(url, options) {
                                    var query = options.query || {};
                                    var hash = options.hash || {};
                                    var originalUrl;
                                    var originalHash;
                                    var _url$split = url.split("#");
                                    originalHash = _url$split[1];
                                    var _originalUrl$split = (originalUrl = _url$split[0]).split("?");
                                    originalUrl = _originalUrl$split[0];
                                    var queryString = extendQuery(_originalUrl$split[1], query);
                                    var hashString = extendQuery(originalHash, hash);
                                    queryString && (originalUrl = originalUrl + "?" + queryString);
                                    hashString && (originalUrl = originalUrl + "#" + hashString);
                                    return originalUrl;
                                }(function(url) {
                                    if (!(domain = getDomainFromUrl(url), 0 === domain.indexOf("mock:"))) return url;
                                    var domain;
                                    throw new Error("Mock urls not supported out of test mode");
                                }(getUrl()), {
                                    query: query
                                });
                            }));
                            var onRenderPromise = event.trigger(EVENT.RENDER);
                            var getProxyContainerPromise = getProxyContainer(container);
                            var getProxyWindowPromise = getProxyWindow();
                            var buildWindowNamePromise = getProxyWindowPromise.then((function(proxyWin) {
                                return function(_temp) {
                                    var _ref4 = void 0 === _temp ? {} : _temp, proxyWin = _ref4.proxyWin, childDomain = _ref4.childDomain, domain = _ref4.domain, context = (void 0 === _ref4.target && window,
                                    _ref4.context), uid = _ref4.uid;
                                    return function(proxyWin, childDomain, domain, uid) {
                                        return getPropsForChild(domain).then((function(childProps) {
                                            var value = setup_serializeMessage(proxyWin, domain, childProps);
                                            var propRef = childDomain === getDomain() ? {
                                                type: "uid",
                                                uid: uid
                                            } : {
                                                type: "raw",
                                                value: value
                                            };
                                            if ("uid" === propRef.type) {
                                                var global = lib_global_getGlobal(window);
                                                global.props = global.props || {};
                                                global.props[uid] = value;
                                                clean.register((function() {
                                                    delete global.props[uid];
                                                }));
                                            }
                                            return propRef;
                                        }));
                                    }(proxyWin, childDomain, domain, uid).then((function(propsRef) {
                                        return {
                                            uid: uid,
                                            context: context,
                                            tag: tag,
                                            version: "9_0_63",
                                            childDomain: childDomain,
                                            parentDomain: getDomain(window),
                                            parent: getWindowRef(0, childDomain, uid, context),
                                            props: propsRef,
                                            exports: setup_serializeMessage(proxyWin, domain, (win = proxyWin, {
                                                init: initChild,
                                                close: close,
                                                checkClose: function() {
                                                    return checkWindowClose(win);
                                                },
                                                resize: resize,
                                                onError: onError,
                                                show: show,
                                                hide: hide
                                            }))
                                        };
                                        var win;
                                    }));
                                }({
                                    proxyWin: (_ref5 = {
                                        proxyWin: proxyWin,
                                        childDomain: childDomain,
                                        domain: domain,
                                        target: target,
                                        context: context,
                                        uid: uid
                                    }).proxyWin,
                                    childDomain: _ref5.childDomain,
                                    domain: _ref5.domain,
                                    target: _ref5.target,
                                    context: _ref5.context,
                                    uid: _ref5.uid
                                }).then((function(childPayload) {
                                    return "__zoid__" + name + "__" + base64encode(JSON.stringify(childPayload)) + "__";
                                }));
                                var _ref5;
                            }));
                            var openFramePromise = buildWindowNamePromise.then((function(windowName) {
                                return openFrame(context, {
                                    windowName: windowName
                                });
                            }));
                            var openPrerenderFramePromise = openPrerenderFrame(context);
                            var renderContainerPromise = promise_ZalgoPromise.hash({
                                proxyContainer: getProxyContainerPromise,
                                proxyFrame: openFramePromise,
                                proxyPrerenderFrame: openPrerenderFramePromise
                            }).then((function(_ref12) {
                                return renderContainer(_ref12.proxyContainer, {
                                    context: context,
                                    uid: uid,
                                    proxyFrame: _ref12.proxyFrame,
                                    proxyPrerenderFrame: _ref12.proxyPrerenderFrame
                                });
                            })).then((function(proxyContainer) {
                                return proxyContainer;
                            }));
                            var openPromise = promise_ZalgoPromise.hash({
                                windowName: buildWindowNamePromise,
                                proxyFrame: openFramePromise,
                                proxyWin: getProxyWindowPromise
                            }).then((function(_ref13) {
                                var proxyWin = _ref13.proxyWin;
                                return windowProp ? proxyWin : open(context, {
                                    windowName: _ref13.windowName,
                                    proxyWin: proxyWin,
                                    proxyFrame: _ref13.proxyFrame
                                });
                            }));
                            var openPrerenderPromise = promise_ZalgoPromise.hash({
                                proxyWin: openPromise,
                                proxyPrerenderFrame: openPrerenderFramePromise
                            }).then((function(_ref14) {
                                return openPrerender(context, _ref14.proxyWin, _ref14.proxyPrerenderFrame);
                            }));
                            var setStatePromise = openPromise.then((function(proxyWin) {
                                currentProxyWin = proxyWin;
                                return setProxyWin(proxyWin);
                            }));
                            var prerenderPromise = promise_ZalgoPromise.hash({
                                proxyPrerenderWin: openPrerenderPromise,
                                state: setStatePromise
                            }).then((function(_ref15) {
                                return prerender(_ref15.proxyPrerenderWin, {
                                    context: context,
                                    uid: uid
                                });
                            }));
                            var setWindowNamePromise = promise_ZalgoPromise.hash({
                                proxyWin: openPromise,
                                windowName: buildWindowNamePromise
                            }).then((function(_ref16) {
                                if (windowProp) return _ref16.proxyWin.setName(_ref16.windowName);
                            }));
                            var loadUrlPromise = promise_ZalgoPromise.hash({
                                proxyWin: openPromise,
                                builtUrl: buildUrlPromise,
                                windowName: setWindowNamePromise,
                                prerender: prerenderPromise
                            }).then((function(_ref17) {
                                return _ref17.proxyWin.setLocation(_ref17.builtUrl);
                            }));
                            var watchForClosePromise = openPromise.then((function(proxyWin) {
                                !function watchForClose(proxyWin, context) {
                                    var cancelled = !1;
                                    clean.register((function() {
                                        cancelled = !0;
                                    }));
                                    return promise_ZalgoPromise.delay(2e3).then((function() {
                                        return proxyWin.isClosed();
                                    })).then((function(isClosed) {
                                        return isClosed ? close(new Error("Detected " + context + " close")) : cancelled ? void 0 : watchForClose(proxyWin, context);
                                    }));
                                }(proxyWin, context);
                            }));
                            var onDisplayPromise = promise_ZalgoPromise.hash({
                                container: renderContainerPromise,
                                prerender: prerenderPromise
                            }).then((function() {
                                return event.trigger(EVENT.DISPLAY);
                            }));
                            var openBridgePromise = openPromise.then((function(proxyWin) {}));
                            var runTimeoutPromise = loadUrlPromise.then((function() {
                                return promise_ZalgoPromise.try((function() {
                                    var timeout = props.timeout;
                                    if (timeout) return initPromise.timeout(timeout, new Error("Loading component timed out after " + timeout + " milliseconds"));
                                }));
                            }));
                            var onRenderedPromise = initPromise.then((function() {
                                return event.trigger(EVENT.RENDERED);
                            }));
                            return promise_ZalgoPromise.hash({
                                initPromise: initPromise,
                                buildUrlPromise: buildUrlPromise,
                                onRenderPromise: onRenderPromise,
                                getProxyContainerPromise: getProxyContainerPromise,
                                openFramePromise: openFramePromise,
                                openPrerenderFramePromise: openPrerenderFramePromise,
                                renderContainerPromise: renderContainerPromise,
                                openPromise: openPromise,
                                openPrerenderPromise: openPrerenderPromise,
                                setStatePromise: setStatePromise,
                                prerenderPromise: prerenderPromise,
                                loadUrlPromise: loadUrlPromise,
                                buildWindowNamePromise: buildWindowNamePromise,
                                setWindowNamePromise: setWindowNamePromise,
                                watchForClosePromise: watchForClosePromise,
                                onDisplayPromise: onDisplayPromise,
                                openBridgePromise: openBridgePromise,
                                runTimeoutPromise: runTimeoutPromise,
                                onRenderedPromise: onRenderedPromise,
                                delegatePromise: delegatePromise,
                                watchForUnloadPromise: watchForUnloadPromise
                            });
                        })).catch((function(err) {
                            return promise_ZalgoPromise.all([ onError(err), destroy(err) ]).then((function() {
                                throw err;
                            }), (function() {
                                throw err;
                            }));
                        })).then(src_util_noop);
                    },
                    destroy: destroy,
                    setProps: setProps,
                    getHelpers: getHelpers,
                    getDelegateOverrides: function() {
                        return promise_ZalgoPromise.try((function() {
                            return {
                                getProxyContainer: getProxyContainer,
                                show: show,
                                hide: hide,
                                renderContainer: renderContainer,
                                getProxyWindow: getProxyWindow,
                                watchForUnload: watchForUnload,
                                openFrame: openFrame,
                                openPrerenderFrame: openPrerenderFrame,
                                prerender: prerender,
                                open: open,
                                openPrerender: openPrerender,
                                setProxyWin: setProxyWin
                            };
                        }));
                    }
                };
            }
            var react = {
                register: function(tag, propsDef, init, _ref) {
                    var React = _ref.React, ReactDOM = _ref.ReactDOM;
                    return function(_React$Component) {
                        _inheritsLoose(_class, _React$Component);
                        function _class() {
                            return _React$Component.apply(this, arguments) || this;
                        }
                        var _proto = _class.prototype;
                        _proto.render = function() {
                            return React.createElement("div", null);
                        };
                        _proto.componentDidMount = function() {
                            var el = ReactDOM.findDOMNode(this);
                            var parent = init(extend({}, this.props));
                            parent.render(el, CONTEXT.IFRAME);
                            this.setState({
                                parent: parent
                            });
                        };
                        _proto.componentDidUpdate = function() {
                            this.state && this.state.parent && this.state.parent.updateProps(extend({}, this.props)).catch(src_util_noop);
                        };
                        return _class;
                    }(React.Component);
                }
            };
            var vue = {
                register: function(tag, propsDef, init, Vue) {
                    return Vue.component(tag, {
                        render: function(createElement) {
                            return createElement("div");
                        },
                        inheritAttrs: !1,
                        mounted: function() {
                            var el = this.$el;
                            this.parent = init(_extends({}, this.$attrs));
                            this.parent.render(el, CONTEXT.IFRAME);
                        },
                        watch: {
                            $attrs: {
                                handler: function() {
                                    this.parent && this.$attrs && this.parent.updateProps(_extends({}, this.$attrs)).catch(src_util_noop);
                                },
                                deep: !0
                            }
                        }
                    });
                }
            };
            var angular = {
                register: function(tag, propsDef, init, ng) {
                    return ng.module(tag, []).directive(tag.replace(/-([a-z])/g, (function(g) {
                        return g[1].toUpperCase();
                    })), (function() {
                        var scope = {};
                        for (var _i2 = 0, _Object$keys2 = Object.keys(propsDef); _i2 < _Object$keys2.length; _i2++) scope[_Object$keys2[_i2]] = "=";
                        scope.props = "=";
                        return {
                            scope: scope,
                            restrict: "E",
                            controller: [ "$scope", "$element", function($scope, $element) {
                                function safeApply() {
                                    if ("$apply" !== $scope.$root.$$phase && "$digest" !== $scope.$root.$$phase) try {
                                        $scope.$apply();
                                    } catch (err) {}
                                }
                                var getProps = function() {
                                    return replaceObject($scope.props, (function(item) {
                                        return "function" == typeof item ? function() {
                                            var result = item.apply(this, arguments);
                                            safeApply();
                                            return result;
                                        } : item;
                                    }));
                                };
                                var instance = init(getProps());
                                instance.render($element[0], CONTEXT.IFRAME);
                                $scope.$watch((function() {
                                    instance.updateProps(getProps()).catch(src_util_noop);
                                }));
                            } ]
                        };
                    }));
                }
            };
            var angular2 = {
                register: function(tag, propsDef, init, _ref) {
                    var NgModule = _ref.NgModule, ElementRef = _ref.ElementRef, NgZone = _ref.NgZone;
                    var getProps = function(component) {
                        return replaceObject(_extends({}, component.internalProps, component.props), (function(item) {
                            return "function" == typeof item ? function() {
                                var _arguments = arguments, _this = this;
                                return component.zone.run((function() {
                                    return item.apply(_this, _arguments);
                                }));
                            } : item;
                        }));
                    };
                    var ComponentInstance = (0, _ref.Component)({
                        selector: tag,
                        template: "<div></div>",
                        inputs: [ "props" ]
                    }).Class({
                        constructor: [ ElementRef, NgZone, function(elementRef, zone) {
                            this._props = {};
                            this.elementRef = elementRef;
                            this.zone = zone;
                        } ],
                        ngOnInit: function() {
                            var targetElement = this.elementRef.nativeElement;
                            this.parent = init(getProps(this));
                            this.parent.render(targetElement, CONTEXT.IFRAME);
                        },
                        ngDoCheck: function() {
                            if (this.parent && !function(obj1, obj2) {
                                var checked = {};
                                for (var key in obj1) if (obj1.hasOwnProperty(key)) {
                                    checked[key] = !0;
                                    if (obj1[key] !== obj2[key]) return !1;
                                }
                                for (var _key in obj2) if (!checked[_key]) return !1;
                                return !0;
                            }(this._props, this.props)) {
                                this._props = _extends({}, this.props);
                                this.parent.updateProps(getProps(this));
                            }
                        }
                    });
                    return NgModule({
                        declarations: [ ComponentInstance ],
                        exports: [ ComponentInstance ]
                    }).Class({
                        constructor: function() {}
                    });
                }
            };
            function defaultContainerTemplate(_ref) {
                var uid = _ref.uid, frame = _ref.frame, prerenderFrame = _ref.prerenderFrame, doc = _ref.doc, props = _ref.props, event = _ref.event, _ref$dimensions = _ref.dimensions, width = _ref$dimensions.width, height = _ref$dimensions.height;
                if (frame && prerenderFrame) {
                    var div = doc.createElement("div");
                    div.setAttribute("id", uid);
                    var style = doc.createElement("style");
                    props.cspNonce && style.setAttribute("nonce", props.cspNonce);
                    style.appendChild(doc.createTextNode("\n            #" + uid + " {\n                display: inline-block;\n                position: relative;\n                width: " + width + ";\n                height: " + height + ";\n            }\n\n            #" + uid + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + uid + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + uid + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "));
                    div.appendChild(frame);
                    div.appendChild(prerenderFrame);
                    div.appendChild(style);
                    prerenderFrame.classList.add("zoid-visible");
                    frame.classList.add("zoid-invisible");
                    event.on(EVENT.RENDERED, (function() {
                        prerenderFrame.classList.remove("zoid-visible");
                        prerenderFrame.classList.add("zoid-invisible");
                        frame.classList.remove("zoid-invisible");
                        frame.classList.add("zoid-visible");
                        setTimeout((function() {
                            destroyElement(prerenderFrame);
                        }), 1);
                    }));
                    event.on(EVENT.RESIZE, (function(_ref2) {
                        var newWidth = _ref2.width, newHeight = _ref2.height;
                        "number" == typeof newWidth && (div.style.width = toCSS(newWidth));
                        "number" == typeof newHeight && (div.style.height = toCSS(newHeight));
                    }));
                    return div;
                }
            }
            function defaultPrerenderTemplate(_ref) {
                var doc = _ref.doc, props = _ref.props;
                var html = doc.createElement("html");
                var body = doc.createElement("body");
                var style = doc.createElement("style");
                var spinner = doc.createElement("div");
                spinner.classList.add("spinner");
                props.cspNonce && style.setAttribute("nonce", props.cspNonce);
                html.appendChild(body);
                body.appendChild(spinner);
                body.appendChild(style);
                style.appendChild(doc.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "));
                return html;
            }
            var props_defaultNoop = function() {
                return src_util_noop;
            };
            var props_decorateOnce = function(_ref) {
                return once(_ref.value);
            };
            var cleanInstances = cleanup();
            var cleanZoid = cleanup();
            function component_component(opts) {
                var options = function(options) {
                    var tag = options.tag, url = options.url, domain = options.domain, bridgeUrl = options.bridgeUrl, _options$props = options.props, propsDef = void 0 === _options$props ? {} : _options$props, _options$dimensions = options.dimensions, dimensions = void 0 === _options$dimensions ? {} : _options$dimensions, _options$autoResize = options.autoResize, autoResize = void 0 === _options$autoResize ? {} : _options$autoResize, _options$allowedParen = options.allowedParentDomains, allowedParentDomains = void 0 === _options$allowedParen ? "*" : _options$allowedParen, _options$attributes = options.attributes, attributes = void 0 === _options$attributes ? {} : _options$attributes, _options$defaultConte = options.defaultContext, defaultContext = void 0 === _options$defaultConte ? CONTEXT.IFRAME : _options$defaultConte, _options$containerTem = options.containerTemplate, containerTemplate = void 0 === _options$containerTem ? defaultContainerTemplate : _options$containerTem, _options$prerenderTem = options.prerenderTemplate, prerenderTemplate = void 0 === _options$prerenderTem ? defaultPrerenderTemplate : _options$prerenderTem, validate = options.validate, _options$eligible = options.eligible, eligible = void 0 === _options$eligible ? function() {
                        return {
                            eligible: !0
                        };
                    } : _options$eligible, _options$logger = options.logger, logger = void 0 === _options$logger ? {
                        info: src_util_noop
                    } : _options$logger;
                    var name = tag.replace(/-/g, "_");
                    var _dimensions$width = dimensions.width, width = void 0 === _dimensions$width ? "300px" : _dimensions$width, _dimensions$height = dimensions.height, height = void 0 === _dimensions$height ? "150px" : _dimensions$height;
                    propsDef = _extends({}, {
                        window: {
                            type: "object",
                            sendToChild: !1,
                            required: !1,
                            allowDelegate: !0,
                            validate: function(_ref2) {
                                var value = _ref2.value;
                                if (!isWindow(value) && !window_ProxyWindow.isProxyWindow(value)) throw new Error("Expected Window or ProxyWindow");
                                if (isWindow(value)) {
                                    if (isWindowClosed(value)) throw new Error("Window is closed");
                                    if (!isSameDomain(value)) throw new Error("Window is not same domain");
                                }
                            },
                            decorate: function(_ref3) {
                                return setup_toProxyWindow(_ref3.value);
                            }
                        },
                        timeout: {
                            type: "number",
                            required: !1,
                            sendToChild: !1
                        },
                        close: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref4) {
                                return _ref4.close;
                            }
                        },
                        focus: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref5) {
                                return _ref5.focus;
                            }
                        },
                        resize: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref6) {
                                return _ref6.resize;
                            }
                        },
                        uid: {
                            type: "string",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref7) {
                                return _ref7.uid;
                            }
                        },
                        cspNonce: {
                            type: "string",
                            required: !1
                        },
                        getParent: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref8) {
                                return _ref8.getParent;
                            }
                        },
                        getParentDomain: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref9) {
                                return _ref9.getParentDomain;
                            }
                        },
                        show: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref10) {
                                return _ref10.show;
                            }
                        },
                        hide: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref11) {
                                return _ref11.hide;
                            }
                        },
                        onDisplay: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: props_defaultNoop,
                            decorate: props_decorateOnce
                        },
                        onRendered: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: props_defaultNoop,
                            decorate: props_decorateOnce
                        },
                        onRender: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: props_defaultNoop,
                            decorate: props_decorateOnce
                        },
                        onClose: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: props_defaultNoop,
                            decorate: props_decorateOnce
                        },
                        onDestroy: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: props_defaultNoop,
                            decorate: props_decorateOnce
                        },
                        onResize: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: props_defaultNoop
                        },
                        onFocus: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: props_defaultNoop
                        },
                        onError: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(_ref12) {
                                return _ref12.onError;
                            }
                        },
                        onProps: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: props_defaultNoop,
                            childDecorate: function(_ref13) {
                                return _ref13.onProps;
                            }
                        }
                    }, propsDef);
                    if (!containerTemplate) throw new Error("Container template required");
                    return {
                        name: name,
                        tag: tag,
                        url: url,
                        domain: domain,
                        bridgeUrl: bridgeUrl,
                        propsDef: propsDef,
                        dimensions: {
                            width: width,
                            height: height
                        },
                        autoResize: autoResize,
                        allowedParentDomains: allowedParentDomains,
                        attributes: attributes,
                        defaultContext: defaultContext,
                        containerTemplate: containerTemplate,
                        prerenderTemplate: prerenderTemplate,
                        validate: validate,
                        logger: logger,
                        eligible: eligible
                    };
                }(opts);
                var name = options.name, tag = options.tag, defaultContext = options.defaultContext, propsDef = options.propsDef, eligible = options.eligible;
                var global = lib_global_getGlobal();
                var driverCache = {};
                var instances = [];
                var isChild = function() {
                    var payload = getChildPayload();
                    return Boolean(payload && payload.tag === tag && payload.childDomain === getDomain());
                };
                var registerChild = memoize((function() {
                    if (isChild()) {
                        if (window.xprops) {
                            delete global.components[tag];
                            throw new Error("Can not register " + name + " as child - child already registered");
                        }
                        var child = function(options) {
                            var propsDef = options.propsDef, autoResize = options.autoResize, allowedParentDomains = options.allowedParentDomains;
                            var onPropHandlers = [];
                            var childPayload = getChildPayload();
                            var props;
                            if (!childPayload) throw new Error("No child payload found");
                            if ("9_0_63" !== childPayload.version) throw new Error("Parent window has zoid version " + childPayload.version + ", child window has version 9_0_63");
                            var uid = childPayload.uid, parentDomain = childPayload.parentDomain, exports = childPayload.exports, context = childPayload.context, propsRef = childPayload.props;
                            var parentComponentWindow = function(ref) {
                                var type = ref.type;
                                if ("opener" === type) return assertExists("opener", getOpener(window));
                                if ("parent" === type && "number" == typeof ref.distance) return assertExists("parent", function(win, n) {
                                    void 0 === n && (n = 1);
                                    return function(win, n) {
                                        void 0 === n && (n = 1);
                                        var parent = win;
                                        for (var i = 0; i < n; i++) {
                                            if (!parent) return;
                                            parent = utils_getParent(parent);
                                        }
                                        return parent;
                                    }(win, getDistanceFromTop(win) - n);
                                }(window, ref.distance));
                                if ("global" === type && ref.uid && "string" == typeof ref.uid) {
                                    var uid = ref.uid;
                                    var ancestor = getAncestor(window);
                                    if (!ancestor) throw new Error("Can not find ancestor window");
                                    for (var _i2 = 0, _getAllFramesInWindow2 = getAllFramesInWindow(ancestor); _i2 < _getAllFramesInWindow2.length; _i2++) {
                                        var frame = _getAllFramesInWindow2[_i2];
                                        if (isSameDomain(frame)) {
                                            var global = lib_global_getGlobal(frame);
                                            if (global && global.windows && global.windows[uid]) return global.windows[uid];
                                        }
                                    }
                                }
                                throw new Error("Unable to find " + type + " parent component window");
                            }(childPayload.parent);
                            var parent = setup_deserializeMessage(parentComponentWindow, parentDomain, exports);
                            var show = parent.show, hide = parent.hide, close = parent.close;
                            var getParent = function() {
                                return parentComponentWindow;
                            };
                            var getParentDomain = function() {
                                return parentDomain;
                            };
                            var onProps = function(handler) {
                                onPropHandlers.push(handler);
                            };
                            var onError = function(err) {
                                return promise_ZalgoPromise.try((function() {
                                    if (parent && parent.onError) return parent.onError(err);
                                    throw err;
                                }));
                            };
                            var resize = function(_ref2) {
                                return parent.resize.fireAndForget({
                                    width: _ref2.width,
                                    height: _ref2.height
                                });
                            };
                            var setProps = function(newProps, origin, isUpdate) {
                                void 0 === isUpdate && (isUpdate = !1);
                                var normalizedProps = function(parentComponentWindow, propsDef, props, origin, helpers, isUpdate) {
                                    void 0 === isUpdate && (isUpdate = !1);
                                    var result = {};
                                    for (var _i2 = 0, _Object$keys2 = Object.keys(props); _i2 < _Object$keys2.length; _i2++) {
                                        var key = _Object$keys2[_i2];
                                        var prop = propsDef[key];
                                        if (!prop || !prop.sameDomain || origin === getDomain(window) && isSameDomain(parentComponentWindow)) {
                                            var value = normalizeChildProp(propsDef, 0, key, props[key], helpers);
                                            result[key] = value;
                                            prop && prop.alias && !result[prop.alias] && (result[prop.alias] = value);
                                        }
                                    }
                                    if (!isUpdate) for (var _i4 = 0, _Object$keys4 = Object.keys(propsDef); _i4 < _Object$keys4.length; _i4++) {
                                        var _key = _Object$keys4[_i4];
                                        props.hasOwnProperty(_key) || (result[_key] = normalizeChildProp(propsDef, 0, _key, void 0, helpers));
                                    }
                                    return result;
                                }(parentComponentWindow, propsDef, newProps, origin, {
                                    show: show,
                                    hide: hide,
                                    close: close,
                                    focus: child_focus,
                                    onError: onError,
                                    resize: resize,
                                    onProps: onProps,
                                    getParent: getParent,
                                    getParentDomain: getParentDomain,
                                    uid: uid
                                }, isUpdate);
                                props ? extend(props, normalizedProps) : props = normalizedProps;
                                for (var _i4 = 0; _i4 < onPropHandlers.length; _i4++) (0, onPropHandlers[_i4])(props);
                            };
                            var updateProps = function(newProps) {
                                return promise_ZalgoPromise.try((function() {
                                    return setProps(newProps, parentDomain, !0);
                                }));
                            };
                            return {
                                init: function() {
                                    return promise_ZalgoPromise.try((function() {
                                        !function(allowedParentDomains, domain) {
                                            if (!matchDomain(allowedParentDomains, domain)) throw new Error("Can not be rendered by domain: " + domain);
                                        }(allowedParentDomains, parentDomain);
                                        markWindowKnown(parentComponentWindow);
                                        !function() {
                                            window.addEventListener("beforeunload", (function() {
                                                parent.checkClose.fireAndForget();
                                            }));
                                            window.addEventListener("unload", (function() {
                                                parent.checkClose.fireAndForget();
                                            }));
                                            onCloseWindow(parentComponentWindow, (function() {
                                                child_destroy();
                                            }));
                                        }();
                                        return parent.init({
                                            updateProps: updateProps,
                                            close: child_destroy
                                        });
                                    })).then((function() {
                                        return (_autoResize$width = autoResize.width, width = void 0 !== _autoResize$width && _autoResize$width,
                                        _autoResize$height = autoResize.height, height = void 0 !== _autoResize$height && _autoResize$height,
                                        _autoResize$element = autoResize.element, elementReady(void 0 === _autoResize$element ? "body" : _autoResize$element).catch(src_util_noop).then((function(element) {
                                            return {
                                                width: width,
                                                height: height,
                                                element: element
                                            };
                                        }))).then((function(_ref3) {
                                            var width = _ref3.width, height = _ref3.height, element = _ref3.element;
                                            element && (width || height) && context !== CONTEXT.POPUP && onResize(element, (function(_ref4) {
                                                resize({
                                                    width: width ? _ref4.width : void 0,
                                                    height: height ? _ref4.height : void 0
                                                });
                                            }), {
                                                width: width,
                                                height: height
                                            });
                                        }));
                                        var _autoResize$width, width, _autoResize$height, height, _autoResize$element;
                                    })).catch((function(err) {
                                        onError(err);
                                    }));
                                },
                                getProps: function() {
                                    if (props) return props;
                                    setProps(function(parentComponentWindow, domain, _ref) {
                                        var type = _ref.type, uid = _ref.uid;
                                        var props;
                                        if ("raw" === type) props = _ref.value; else if ("uid" === type) {
                                            if (!isSameDomain(parentComponentWindow)) throw new Error("Parent component window is on a different domain - expected " + getDomain() + " - can not retrieve props");
                                            var global = lib_global_getGlobal(parentComponentWindow);
                                            props = assertExists("props", global && global.props[uid]);
                                        }
                                        if (!props) throw new Error("Could not find props");
                                        return setup_deserializeMessage(parentComponentWindow, domain, props);
                                    }(parentComponentWindow, parentDomain, propsRef), parentDomain);
                                    return props;
                                }
                            };
                        }(options);
                        child.init();
                        return child;
                    }
                }));
                var init = function init(props) {
                    var instance;
                    var _eligible = eligible({
                        props: props = props || {}
                    }), eligibility = _eligible.eligible, reason = _eligible.reason;
                    var onDestroy = props.onDestroy;
                    props.onDestroy = function() {
                        instance && eligibility && instances.splice(instances.indexOf(instance), 1);
                        if (onDestroy) return onDestroy.apply(void 0, arguments);
                    };
                    var parent = parentComponent(options);
                    parent.init();
                    eligibility ? parent.setProps(props) : props.onDestroy && props.onDestroy();
                    cleanInstances.register((function(err) {
                        parent.destroy(err || new Error("zoid destroyed all components"));
                    }));
                    var _render = function(target, container, context) {
                        return promise_ZalgoPromise.try((function() {
                            if (!eligibility) {
                                var err = new Error(reason || name + " component is not eligible");
                                return parent.destroy(err).then((function() {
                                    throw err;
                                }));
                            }
                            if (!isWindow(target)) throw new Error("Must pass window to renderTo");
                            return function(props, context) {
                                return promise_ZalgoPromise.try((function() {
                                    if (props.window) return setup_toProxyWindow(props.window).getType();
                                    if (context) {
                                        if (context !== CONTEXT.IFRAME && context !== CONTEXT.POPUP) throw new Error("Unrecognized context: " + context);
                                        return context;
                                    }
                                    return defaultContext;
                                }));
                            }(props, context);
                        })).then((function(finalContext) {
                            container = function(context, container) {
                                if (container) {
                                    if ("string" != typeof container && !isElement(container)) throw new TypeError("Expected string or element selector to be passed");
                                    return container;
                                }
                                if (context === CONTEXT.POPUP) return "body";
                                throw new Error("Expected element to be passed to render iframe");
                            }(finalContext, container);
                            return parent.render(target, container, finalContext);
                        })).catch((function(err) {
                            return parent.destroy(err).then((function() {
                                throw err;
                            }));
                        }));
                    };
                    instance = _extends({}, parent.getHelpers(), {
                        isEligible: function() {
                            return eligibility;
                        },
                        clone: function(_temp) {
                            var _ref3$decorate = (void 0 === _temp ? {} : _temp).decorate;
                            return init((void 0 === _ref3$decorate ? identity : _ref3$decorate)(props));
                        },
                        render: function(container, context) {
                            return _render(window, container, context);
                        },
                        renderTo: function(target, container, context) {
                            return _render(target, container, context);
                        }
                    });
                    eligibility && instances.push(instance);
                    return instance;
                };
                registerChild();
                !function() {
                    var allowDelegateListener = on_on("zoid_allow_delegate_" + name, (function() {
                        return !0;
                    }));
                    var delegateListener = on_on("zoid_delegate_" + name, (function(_ref) {
                        return {
                            parent: parentComponent(options, _ref.data.overrides, _ref.source)
                        };
                    }));
                    cleanZoid.register(allowDelegateListener.cancel);
                    cleanZoid.register(delegateListener.cancel);
                }();
                global.components = global.components || {};
                if (global.components[tag]) throw new Error("Can not register multiple components with the same tag: " + tag);
                global.components[tag] = !0;
                return {
                    init: init,
                    instances: instances,
                    driver: function(driverName, dep) {
                        var drivers = {
                            react: react,
                            angular: angular,
                            vue: vue,
                            angular2: angular2
                        };
                        if (!drivers[driverName]) throw new Error("Could not find driver for framework: " + driverName);
                        driverCache[driverName] || (driverCache[driverName] = drivers[driverName].register(tag, propsDef, init, dep));
                        return driverCache[driverName];
                    },
                    isChild: isChild,
                    canRenderTo: function(win) {
                        return send_send(win, "zoid_allow_delegate_" + name).then((function(_ref2) {
                            return _ref2.data;
                        })).catch((function() {
                            return !1;
                        }));
                    },
                    registerChild: registerChild
                };
            }
            function create(options) {
                !function() {
                    if (!global_getGlobal().initialized) {
                        global_getGlobal().initialized = !0;
                        on = (_ref3 = {
                            on: on_on,
                            send: send_send
                        }).on, send = _ref3.send, (global = global_getGlobal()).receiveMessage = global.receiveMessage || function(message) {
                            return receive_receiveMessage(message, {
                                on: on,
                                send: send
                            });
                        };
                        !function(_ref5) {
                            var on = _ref5.on, send = _ref5.send;
                            globalStore().getOrSet("postMessageListener", (function() {
                                return addEventListener(window, "message", (function(event) {
                                    !function(event, _ref4) {
                                        var on = _ref4.on, send = _ref4.send;
                                        promise_ZalgoPromise.try((function() {
                                            var source = event.source || event.sourceElement;
                                            var origin = event.origin || event.originalEvent && event.originalEvent.origin;
                                            var data = event.data;
                                            "null" === origin && (origin = "file://");
                                            if (source) {
                                                if (!origin) throw new Error("Post message did not have origin domain");
                                                receive_receiveMessage({
                                                    source: source,
                                                    origin: origin,
                                                    data: data
                                                }, {
                                                    on: on,
                                                    send: send
                                                });
                                            }
                                        }));
                                    }(event, {
                                        on: on,
                                        send: send
                                    });
                                }));
                            }));
                        }({
                            on: on_on,
                            send: send_send
                        });
                        !function(_ref8) {
                            var on = _ref8.on, send = _ref8.send;
                            globalStore("builtinListeners").getOrSet("helloListener", (function() {
                                var listener = on("postrobot_hello", {
                                    domain: "*"
                                }, (function(_ref3) {
                                    resolveHelloPromise(_ref3.source, {
                                        domain: _ref3.origin
                                    });
                                    return {
                                        instanceID: getInstanceID()
                                    };
                                }));
                                var parent = getAncestor();
                                parent && sayHello(parent, {
                                    send: send
                                }).catch((function(err) {}));
                                return listener;
                            }));
                        }({
                            on: on_on,
                            send: send_send
                        });
                    }
                    var _ref3, on, send, global;
                }();
                var comp = component_component(options);
                var init = function(props) {
                    return comp.init(props);
                };
                init.driver = function(name, dep) {
                    return comp.driver(name, dep);
                };
                init.isChild = function() {
                    return comp.isChild();
                };
                init.canRenderTo = function(win) {
                    return comp.canRenderTo(win);
                };
                init.instances = comp.instances;
                var child = comp.registerChild();
                child && (window.xprops = init.xprops = child.getProps());
                return init;
            }
            function destroyComponents(err) {
                var destroyPromise = cleanInstances.all(err);
                cleanInstances = cleanup();
                return destroyPromise;
            }
            var destroyAll = destroyComponents;
            function component_destroy(err) {
                destroyAll();
                delete window.__zoid_9_0_63__;
                !function() {
                    !function() {
                        var responseListeners = globalStore("responseListeners");
                        for (var _i2 = 0, _responseListeners$ke2 = responseListeners.keys(); _i2 < _responseListeners$ke2.length; _i2++) {
                            var hash = _responseListeners$ke2[_i2];
                            var listener = responseListeners.get(hash);
                            listener && (listener.cancelled = !0);
                            responseListeners.del(hash);
                        }
                    }();
                    (listener = globalStore().get("postMessageListener")) && listener.cancel();
                    var listener;
                    delete window.__post_robot_10_0_42__;
                }();
                return cleanZoid.all(err);
            }
        } ]);
    }));
    });

    const getContainerCss = ({ uid }) => `
    #${uid} iframe.${uid}_prerender-frame {
        display: inline-block;
        position: absolute;

        /* loader frame size hardcoded intentionally*/
        width: 150px;
        height: 300px;

        /* center iframe inside parent relative */
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    #${uid} iframe {
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }

    #${uid} iframe.${uid}_invisible {
        opacity: 0;
        z-index: -1;
    }

    #${uid} iframe.${uid}_visible {
        opacity: 1;
    }
`;
    const getLoaderCSS = () => `
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
    }

    /* Active Animation */
    @-webkit-keyframes loader {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes loader {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }


    .ui.loader.active,
    .ui.loader.visible {
      display: block;
    }
    .ui.loader {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      text-align: center;
      z-index: 1000;
      transform: translateX(-50%) translateY(-50%);
    }

    .ui.loader:before {
      position: absolute;
      content: '';
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 500rem;
      border: .2em solid rgba(0,0,0,.1);
    }

    .ui.loader:before {
      border: 0;
    }

    .ui.loader:after {
      position: absolute;
      content: '';
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      animation: loader .6s linear;
      animation-iteration-count: infinite;
      border-radius: 500rem;
      border-color: #e25468 transparent transparent;
      border-style: solid;
      border-width: .2em;
      box-shadow: 0 0 0 1px transparent;
    }


    .ui.inverted.dimmer .ui.loader,
    .ui.loader {
      width: 2.28571429rem;
      height: 2.28571429rem;
      font-size: 1em;
    }

    .ui.inverted.dimmer .ui.big.loader,
    .ui.big.loader {
      width: 3.71428571rem;
      height: 3.71428571rem;
      font-size: 1.28571429em;
    }

    .ui.loader:after,
    .ui.loader:before {
      width: 2.28571429rem;
      height: 2.28571429rem;
      margin: 0 0 0 -1.14285714rem;
    }

    .ui.big.loader:after,
    .ui.big.loader:before {
      width: 3.71428571rem;
      height: 3.71428571rem;
      margin: 0 0 0 -1.85714286rem;
    }
`;

    const loaderComponentHtml = ({ nonce, text, }) => `
        <div class='preloader spinner'>
            <style ${nonce ? `nonce="${nonce}"` : ''}>
              ${getLoaderCSS()}
            </style>

            <div class='ui big active loader'>
              ${text
    ? `<div class='content'>
                      <div class='ui text loader'>
                        ${text}
                      </div>
                    </div>`
    : ''}
            </div>
        </div>
`;

    const getCSS = ({ uid, themeColor, height, width, allowFullscreen, }) => `
/* Modal Content/Box */
@keyframes ${uid}_fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

#${uid} {
  /* prevent container el from taking site space */
  height: 0;

  /* prevent special container cursors from leaking in*/
  cursor: default;
}

.${uid}_has-modal-visible {
  /* modal is opened/visible, prevent scrolling */
  overflow: hidden;
}

.${uid}_close:hover,
.${uid}_close:focus {
  color: white;
  background: #${themeColor};
  text-decoration: none;
  cursor: pointer;
}

.${uid}_modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5000000000;
  background: rgba(0, 0, 0, 0.7);
}

.${uid}_modal-container {
  /* center the modal content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.${uid}_modal {
  width: ${width};
  max-width: 500px;
  height: ${height};
  max-height: 100%;
  z-index: 100;
  background: white;
  border: none;
  border-radius: 10px;

  /* modal box-shadow */
  -webkit-box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  -moz-box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
}

/* dark theme */
.${uid}_modal.dark {
  background: #121212;
}

.${uid}_closed {
  display: none;
}

.${uid}_modal-content {
  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 10px;
}

.${uid}_modal .close-button {
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 20px;
  background: black;
  color: white;
  padding: 5px 10px;
  font-size: 1.3rem;
}

.${uid}_container {
    height: 100%;
    width: 100%;
    position: relative;
}

.${uid}_container iframe {
    height: 100%;
    width: 100%;
}

${allowFullscreen
    ? `
    /** when display is narrower that 500px (mobile device)
    open modal in full screen */
    @media screen and (max-width: 500px) {
      .${uid}_modal {
        height: 100%;
        width: 100%;
        border-radius: 0px;
      }
    }`
    : ''}
`;

    const getModalWrapper = (uid, theme) => `
<div class="${uid}_modal-overlay ${uid}_modal-container" id="${uid}_modal-overlay"/>
<div class="${uid}_modal ${theme}" id="${uid}_modal">
    <div class="${uid}_modal-content">
        <div class="${uid}_container"/>
    </div>
</div>
`;

    function openInCordovaInAppBrowser(url, target) {
        if (!cordova.InAppBrowser) {
            console.error("Tried to open a link in cordova.InAppBrowser, but it's undefined! " +
                "For the best experience, it's recommended to include plugin 'cordova-plugin-inappbrowser' in your build. " +
                'Falling back to window.open() instead. Url:', url);
            window.open(url, target);
            return null;
        }
        const inAppBrowserWindow = cordova.InAppBrowser.open(url, target);
        // inAppBrowser is actually defined only with '_blank' target
        return target === '_blank' ? inAppBrowserWindow : null;
    }

    function openOauthUrlInCordovaBrowser(url, onComplete) {
        const inAppBrowserWindow = openInCordovaInAppBrowser(url, '_blank');
        // track oauth result in navigation URL
        inAppBrowserWindow === null || inAppBrowserWindow === void 0 ? void 0 : inAppBrowserWindow.addEventListener('loadstop', (event) => {
            const { url } = event;
            const isPluggyOauthCallbackUrl = (url.startsWith('https://api.pluggy.ai/') ||
                url.startsWith('https://api.pluggy.dev/') ||
                url.startsWith('http://localhost:9090/')) &&
                url.includes('/oauthCallback.html');
            if (!isPluggyOauthCallbackUrl) {
                // not oauth result URL, ignore
                return;
            }
            const params = new URLSearchParams(url.split('?')[1]);
            const oauthResult = Object.fromEntries(params.entries());
            onComplete(oauthResult);
            inAppBrowserWindow.close();
        });
    }

    /**
     * Ensure given function can be called only once.
     * Source: https://stackoverflow.com/a/58084026/6279385
     *
     * @param fn
     */
    function once(fn) {
        let done = false;
        return function (...args) {
            if (done) {
                return void 0;
            }
            done = true;
            return fn.apply(this, args);
        };
    }

    /**
     * Helper to transform user-provided props values, to our own
     * adapted props object.
     * This is necessary to avoid collision with Zoid component props.
     *
     * @param props
     */
    function adaptPluggyConnectProps(props) {
        const { onError, onSuccess, onOpen, onClose, onEvent, onHide } = props;
        // clone object as-is, to explicitly delete unwanted props later
        const adaptedPropsBase = Object.assign({}, props);
        // remove onXX props as some of them collide with Zoid props,
        // assign them to different keys instead
        delete adaptedPropsBase.onError;
        delete adaptedPropsBase.onSuccess;
        delete adaptedPropsBase.onOpen;
        delete adaptedPropsBase.onClose;
        delete adaptedPropsBase.onEvent;
        delete adaptedPropsBase.onHide;
        // build adapted props object,
        // starting from props without the unneeded ones,
        // adding the ones we need.
        return Object.assign(Object.assign({}, adaptedPropsBase), { onErrorProp: onError, onSuccessProp: onSuccess, onOpenProp: onOpen, onCloseProp: onClose, onEventProp: onEvent, onHideProp: onHide });
    }

    // set project version to global window object.
    // This value must be updated manually to the *next* version, each time a new PR is submitted.
    // TODO: think of a way to auto-update this value in the build/prepublish process
    window.__PLUGGY_CONNECT_SDK_VERSION = '2.7.0';
    // use NPM modules package names as references for easier referenceability
    const REACT_PLUGGY_CONNECT_PACKAGE_NAME = 'react-pluggy-connect';
    const PLUGGY_CONNECT_PACKAGE_NAME = 'pluggy-connect-sdk';
    /**
     * Retrieve SDK versions from global window object
     *
     * @returns sdkVersion {string[]} - array of current sdks versions strings
     */
    function getSdkVersion() {
        const { __PLUGGY_CONNECT_SDK_VERSION, __REACT_PLUGGY_CONNECT_SDK_VERSION, } = window;
        const sdkVersion = [];
        if (__REACT_PLUGGY_CONNECT_SDK_VERSION) {
            const reactPluggyConnectSdkversion = `${REACT_PLUGGY_CONNECT_PACKAGE_NAME}@${__REACT_PLUGGY_CONNECT_SDK_VERSION}`;
            sdkVersion.push(reactPluggyConnectSdkversion);
        }
        const pluggyConnectSdkVersion = `${PLUGGY_CONNECT_PACKAGE_NAME}@${__PLUGGY_CONNECT_SDK_VERSION}`;
        sdkVersion.push(pluggyConnectSdkVersion);
        return sdkVersion;
    }

    // the URL where the widget component is being hosted
    const CONNECT_PRODUCTION_URL = 'https://connect.pluggy.ai';
    let zoidComponentInstance;
    // reference to the container uid, generated once it's rendered
    let pluggyConnectContainerUid;
    /**
     * Helper to wrap container class names with current container UID
     * @param className
     */
    function containerCssClassName(className) {
        return `${pluggyConnectContainerUid}_${className}`;
    }
    /**
     * Method to be executed from both the child and parent components, to execute the
     * handshake between both so the parent can render the child.
     *
     * @returns a singleton ZoidComponent reference, that will take care of
     * wrapping and rendering the actual ZoidComponentInstance (this
     * should be instantiated only once per page/context).
     */
    function initialize() {
        if (!zoidComponentInstance) {
            zoidComponentInstance = zoid_frameworks_frame.create({
                // The html tag used to render the component
                tag: 'pluggy-connect-widget',
                // The url of the page that will show in the iframe or popup, when someone includes the component on their site
                url: ({ props }) => {
                    const { url: urlByProp = CONNECT_PRODUCTION_URL } = props;
                    return urlByProp;
                },
                dimensions: {
                    width: '320px',
                    height: '568px',
                },
                props: {
                    connectToken: {
                        type: 'string',
                    },
                    url: {
                        type: 'string',
                        required: false,
                    },
                    includeSandbox: {
                        type: 'boolean',
                        required: false,
                    },
                    allowConnectInBackground: {
                        type: 'boolean',
                        required: false,
                    },
                    allowFullscreen: {
                        type: 'boolean',
                        required: false,
                    },
                    updateItem: {
                        type: 'string',
                        required: false,
                    },
                    connectorTypes: {
                        type: 'array',
                        required: false,
                    },
                    connectorIds: {
                        type: 'array',
                        required: false,
                    },
                    countries: {
                        type: 'array',
                        required: false,
                    },
                    selectedConnectorId: {
                        type: 'number',
                        required: false,
                    },
                    language: {
                        type: 'string',
                        required: false,
                    },
                    theme: {
                        type: 'string',
                        required: false,
                    },
                    moveSecurityData: {
                        type: 'string',
                        required: false,
                    },
                    products: {
                        type: 'array',
                        required: false,
                    },
                    sdkVersion: {
                        type: 'array',
                        required: false,
                        default: () => getSdkVersion(),
                    },
                    onSuccessProp: {
                        type: 'function',
                        required: false,
                    },
                    onErrorProp: {
                        type: 'function',
                        required: false,
                    },
                    onOpenProp: {
                        type: 'function',
                        required: false,
                    },
                    onHideProp: {
                        type: 'function',
                        required: false,
                    },
                    onCloseProp: {
                        type: 'function',
                        required: false,
                    },
                    onEventProp: {
                        type: 'function',
                        required: false,
                    },
                },
                attributes: {
                    iframe: {
                        scrolling: 'no',
                        title: 'Pluggy',
                    },
                    popup: {
                        scrolling: 'no',
                        title: 'Pluggy',
                    },
                },
                prerenderTemplate({ doc, props }) {
                    const htmlNew = doc.createElement('html');
                    htmlNew.innerHTML = loaderComponentHtml({
                        nonce: props.cspNonce,
                    });
                    return htmlNew;
                },
                containerTemplate({ doc, dimensions: { height, width }, close, uid, frame, prerenderFrame, event, props, }) {
                    if (!prerenderFrame || !frame) {
                        throw new Error('Unexpected state: prerenderFrame or frame not defined');
                    }
                    // set container uid global reference
                    pluggyConnectContainerUid = uid;
                    const container = doc.createElement('div');
                    const connectTheme = props.theme || 'light';
                    container.id = uid;
                    container.innerHTML = getModalWrapper(uid, connectTheme);
                    const frameContainer = container.querySelector(`.${uid}_container`);
                    if (!frameContainer) {
                        throw new Error('Unexpected state: not found frame container');
                    }
                    const visibleClassName = containerCssClassName('visible');
                    const invisibleClassName = containerCssClassName('invisible');
                    const prerenderFrameClassName = containerCssClassName('prerender-frame');
                    frameContainer.appendChild(frame);
                    frameContainer.appendChild(prerenderFrame);
                    // Add styles
                    const style = doc.createElement('style');
                    // if allowFullscreen is not defined, default to true
                    const allowFullscreenOrDefault = props.allowFullscreen !== undefined ? props.allowFullscreen : true;
                    style.innerHTML = [
                        getCSS({
                            uid,
                            themeColor: 'fafafa',
                            height,
                            width,
                            allowFullscreen: allowFullscreenOrDefault,
                        }),
                        getContainerCss({ uid }),
                    ].join('\n');
                    container.appendChild(style);
                    prerenderFrame.classList.add(prerenderFrameClassName);
                    prerenderFrame.classList.add(visibleClassName);
                    frame.classList.add(invisibleClassName);
                    event.on(zoid_frameworks_frame.EVENT.RENDERED, () => {
                        // hide prerender frame, display content frame
                        prerenderFrame.classList.remove(visibleClassName);
                        prerenderFrame.classList.add(invisibleClassName);
                        frame.classList.remove(invisibleClassName);
                        frame.classList.add(visibleClassName);
                    });
                    // Remove scrolling from document body when modal is open (ie. visible)
                    const modalVisibleClassName = containerCssClassName('has-modal-visible');
                    event.on(zoid_frameworks_frame.EVENT.DISPLAY, () => {
                        // modal displayed, add visible class & call onOpen callback
                        document.body.classList.add(modalVisibleClassName);
                        const { onOpenProp } = props;
                        onOpenProp === null || onOpenProp === void 0 ? void 0 : onOpenProp();
                    });
                    // Wrap onCloseProp to be called only once, per component instance, which is
                    // what we want to allow.
                    // This "hack" is necessary because Zoid may trigger 2 times EVENT.CLOSE event,
                    // for example when removing the container element from DOM and when explicitly
                    // calling close() handler at the same time.
                    // Each time a new container/component is rendered, the props are re-created from scratch,
                    // so this will work for all cases.
                    const onClosePropWrapper = props.onCloseProp
                        ? once(props.onCloseProp)
                        : null;
                    event.on(zoid_frameworks_frame.EVENT.CLOSE, () => {
                        // modal closed, remove visible class & call onClose callback
                        // Note: this callback may be called 2 times in some cases due to Zoid logic,
                        // for example when unmounting container component AND calling close() explicitly.
                        document.body.classList.remove(modalVisibleClassName);
                        onClosePropWrapper === null || onClosePropWrapper === void 0 ? void 0 : onClosePropWrapper();
                    });
                    // receive message from iframe
                    window.addEventListener('message', (event) => {
                        const { origin, data } = event;
                        const { url: connectWebappUrl = 'https://connect.pluggy.ai', } = props;
                        if (origin !== connectWebappUrl) {
                            // origin not matching, coming from another place -> ignore message
                            return;
                        }
                        let pluggyConnectMessage;
                        try {
                            pluggyConnectMessage = JSON.parse(data);
                        }
                        catch (_a) {
                            // could not parse, data is not a valid JSON string
                            return;
                        }
                        if (pluggyConnectMessage.type === 'OAUTH_OPEN') {
                            const { message: oauthUrl } = pluggyConnectMessage;
                            // in the case of pluggy-connect running in mobile native environment (ie. Cordova),
                            // we must handle the Oauth popup opening manually by explicitly managing a new iframe window
                            openOauthUrlInCordovaBrowser(oauthUrl, (payload) => { var _a; return (_a = frame.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(payload, '*'); });
                            return;
                        }
                        if (pluggyConnectMessage.type === 'LINK_OPEN') {
                            const { message: externalUrl } = pluggyConnectMessage;
                            // in the case of pluggy-connect running in mobile native environment (ie. Cordova),
                            // open the link specifically in the system browser,
                            // so the main app frame is not blocked, and the user can go back to the app easily
                            openInCordovaInAppBrowser(externalUrl, '_system');
                            return;
                        }
                        if (pluggyConnectMessage.type === 'CONTINUE_IN_BACKGROUND') {
                            // hide pluggy-connect, we remove the 'has-modal-visible' class to restore the scroll
                            document.body.classList.remove(modalVisibleClassName);
                            return;
                        }
                    }, false);
                    // Register modal close() on 'Escape' key button press
                    document.addEventListener('keydown', function escapeKeyCloseHandler(event) {
                        if (event.key !== 'Escape') {
                            return;
                        }
                        // escape key -> close (and remove 'keydown' listener)
                        close();
                        document.removeEventListener('keydown', escapeKeyCloseHandler);
                    });
                    return container;
                },
            });
        }
        return zoidComponentInstance;
    }
    class PluggyConnect {
        constructor(props) {
            this.zoidComponent = initialize();
            // extend component props with current wrapper props
            const extendedProps = Object.assign(Object.assign({}, props), { sdkVersion: getSdkVersion() });
            // adapt props to avoid collision with Zoid component props
            // assign to private variable for reusability by React wrapper
            this.componentPropsExtendedAdapted = adaptPluggyConnectProps(extendedProps);
        }
        /**
         * Render the component using the specified component props,
         * as a modal with an iframe, appended to the page body (or the DOM uppermost element).
         *
         * @param containerElement - parent element where component should be rendered at. If not specified, will render at body root element.
         * @returns promise that resolves when rendered successfully, or throws if failed.
         */
        init(containerElement) {
            const container = containerElement ||
                (document.getElementsByTagName('body') ||
                    document.getElementsByTagName('html') ||
                    document.getElementsByTagName('div'))[0];
            // initialize zoid componentInstance
            this.componentInstance = this.zoidComponent(this.componentPropsExtendedAdapted);
            return this.componentInstance.render(container).catch((error) => {
                console.error(`Failed to render <PluggyConnect /> component`, error);
                throw error;
            });
        }
        /**
         * Manually cleanup the component.
         * This is not recommended, you should create the component once
         * and re-render it as needed each new time to save resources.
         */
        destroy() {
            zoidComponentInstance = undefined;
            return zoid_frameworks_frame.destroy();
        }
        /**
         * If the component is minimized, re-open it.
         * @returns promise that resolves when re-opened successfully, or throws if failed.
         */
        show() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.componentInstance) {
                    throw new Error('Failed to show <PluggyConnect /> component: component not initialized');
                }
                try {
                    // open wrapper modal
                    yield this.componentInstance.show();
                    // add modal visible class
                    const modalVisibleClassName = containerCssClassName('has-modal-visible');
                    document.body.classList.add(modalVisibleClassName);
                }
                catch (error) {
                    console.error(`Failed to show <PluggyConnect /> component`, error);
                    throw error;
                }
            });
        }
        /**
         * Minimize the component.
         * Useful if you want to hide Connect widget after credentials have been submitted,
         * and you want to just continue connecting in background while still listening to
         * other callback events.
         */
        hide() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.componentInstance) {
                    throw new Error('Failed to hide <PluggyConnect /> component: component not initialized');
                }
                try {
                    // hide wrapper modal
                    yield this.componentInstance.hide();
                    // remove modal visible class
                    const modalVisibleClassName = containerCssClassName('has-modal-visible');
                    document.body.classList.remove(modalVisibleClassName);
                }
                catch (error) {
                    console.error(`Failed to hide <PluggyConnect /> component`, error);
                    throw error;
                }
            });
        }
    }

    exports.PluggyConnect = PluggyConnect;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy96b2lkL2Rpc3Qvem9pZC5mcmFtZXdvcmtzLmZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoXCJ6b2lkXCIsIFtdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLnpvaWQgPSBmYWN0b3J5KCkgOiByb290LnpvaWQgPSBmYWN0b3J5KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgICAgIGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgICAgICAgaTogbW9kdWxlSWQsXG4gICAgICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiAgICAgICAgICAgIG1vZHVsZS5sID0gITA7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiAgICAgICAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gICAgICAgICAgICAxICYgbW9kZSAmJiAodmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKSk7XG4gICAgICAgICAgICBpZiAoOCAmIG1vZGUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICg0ICYgbW9kZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKDIgJiBtb2RlICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIHZhbHVlKSBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVba2V5XTtcbiAgICAgICAgICAgIH0uYmluZChudWxsLCBrZXkpKTtcbiAgICAgICAgICAgIHJldHVybiBucztcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgXCJhXCIsIGdldHRlcik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0dGVyO1xuICAgICAgICB9O1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4gICAgfShbIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb3B1cE9wZW5FcnJvclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tX1BvcHVwT3BlbkVycm9yO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNyZWF0ZVwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlc3Ryb3lcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudF9kZXN0cm95O1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlc3Ryb3lDb21wb25lbnRzXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95Q29tcG9uZW50cztcbiAgICAgICAgfSkpO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZXN0cm95QWxsXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95QWxsO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBST1BfVFlQRVwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUFJPUF9UWVBFO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBST1BfU0VSSUFMSVpBVElPTlwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUFJPUF9TRVJJQUxJWkFUSU9OO1xuICAgICAgICB9KSk7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNPTlRFWFRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIENPTlRFWFQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRVZFTlRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIEVWRU5UO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICAgICAgICAgICAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICAgICAgICAgIHJldHVybiAoX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkgJiYgKHRhcmdldFtrZXldID0gc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsc19pc1Byb21pc2UoaXRlbSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgUHJvbWlzZSAmJiBpdGVtIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiB3aW5kb3cuV2luZG93ICYmIGl0ZW0gaW5zdGFuY2VvZiB3aW5kb3cuV2luZG93KSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHdpbmRvdy5jb25zdHJ1Y3RvciAmJiBpdGVtIGluc3RhbmNlb2Ygd2luZG93LmNvbnN0cnVjdG9yKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIF90b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChfdG9TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfdG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiW29iamVjdCBXaW5kb3ddXCIgPT09IG5hbWUgfHwgXCJbb2JqZWN0IGdsb2JhbF1cIiA9PT0gbmFtZSB8fCBcIltvYmplY3QgRE9NV2luZG93XVwiID09PSBuYW1lKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZW0udGhlbikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXNwYXRjaGVkRXJyb3JzID0gW107XG4gICAgICAgIHZhciBwb3NzaWJseVVuaGFuZGxlZFByb21pc2VIYW5kbGVycyA9IFtdO1xuICAgICAgICB2YXIgYWN0aXZlQ291bnQgPSAwO1xuICAgICAgICB2YXIgZmx1c2hQcm9taXNlO1xuICAgICAgICBmdW5jdGlvbiBmbHVzaEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZlQ291bnQgJiYgZmx1c2hQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmbHVzaFByb21pc2U7XG4gICAgICAgICAgICAgICAgZmx1c2hQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdGFydEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZW5kQWN0aXZlKCkge1xuICAgICAgICAgICAgYWN0aXZlQ291bnQgLT0gMTtcbiAgICAgICAgICAgIGZsdXNoQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2VfWmFsZ29Qcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBaYWxnb1Byb21pc2UoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gITE7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3RlZCA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVkID0gITE7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2Vycm9yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlamVjdGVkID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FzeW5jID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBc3luYykgX3RoaXMucmVzb2x2ZShyZXMpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdCA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jKSBfdGhpcy5yZWplY3QoZXJyKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuZEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID8gdGhpcy5yZXNvbHZlKF9yZXN1bHQpIDogcmVqZWN0ZWQgJiYgdGhpcy5yZWplY3QoX2Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3Byb3RvID0gWmFsZ29Qcm9taXNlLnByb3RvdHlwZTtcbiAgICAgICAgICAgIF9wcm90by5yZXNvbHZlID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2lzUHJvbWlzZShyZXN1bHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGFub3RoZXIgcHJvbWlzZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVkID0gITA7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2lzUHJvbWlzZShlcnJvcikpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVqZWN0IHByb21pc2Ugd2l0aCBhbm90aGVyIHByb21pc2VcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2VyciA9IGVycm9yICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZXJyb3IudG9TdHJpbmcgPyBlcnJvci50b1N0cmluZygpIDoge30udG9TdHJpbmcuY2FsbChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFwiRXhwZWN0ZWQgcmVqZWN0IHRvIGJlIGNhbGxlZCB3aXRoIEVycm9yLCBnb3QgXCIgKyBfZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3RlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlZCB8fCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmVycm9ySGFuZGxlZCB8fCBmdW5jdGlvbihlcnIsIHByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gZGlzcGF0Y2hlZEVycm9ycy5pbmRleE9mKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaGVkRXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvc3NpYmx5VW5oYW5kbGVkUHJvbWlzZUhhbmRsZXJzLmxlbmd0aDsgaisrKSBwb3NzaWJseVVuaGFuZGxlZFByb21pc2VIYW5kbGVyc1tqXShlcnIsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGVycm9yLCBfdGhpczIpO1xuICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmFzeW5jUmVqZWN0ID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVkLCByZWplY3RlZCA9IHRoaXMucmVqZWN0ZWQsIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycztcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGF0Y2hpbmcgJiYgKHJlc29sdmVkIHx8IHJlamVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoaW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFpbiA9IGZ1bmN0aW9uKGZpcnN0UHJvbWlzZSwgc2Vjb25kUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0UHJvbWlzZS50aGVuKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9oYW5kbGVycyRpID0gaGFuZGxlcnNbaV0sIG9uU3VjY2VzcyA9IF9oYW5kbGVycyRpLm9uU3VjY2Vzcywgb25FcnJvciA9IF9oYW5kbGVycyRpLm9uRXJyb3IsIHByb21pc2UgPSBfaGFuZGxlcnMkaS5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZXN1bHQyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQyID0gb25TdWNjZXNzID8gb25TdWNjZXNzKHRoaXMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Jlc3VsdDIgPSBvbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3Jlc3VsdDIgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgJiYgKF9yZXN1bHQyLnJlc29sdmVkIHx8IF9yZXN1bHQyLnJlamVjdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZXN1bHQyLnJlc29sdmVkID8gcHJvbWlzZS5yZXNvbHZlKF9yZXN1bHQyLnZhbHVlKSA6IHByb21pc2UucmVqZWN0KF9yZXN1bHQyLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVzdWx0Mi5lcnJvckhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB1dGlsc19pc1Byb21pc2UoX3Jlc3VsdDIpID8gX3Jlc3VsdDIgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgJiYgKF9yZXN1bHQyLnJlc29sdmVkIHx8IF9yZXN1bHQyLnJlamVjdGVkKSA/IF9yZXN1bHQyLnJlc29sdmVkID8gcHJvbWlzZS5yZXNvbHZlKF9yZXN1bHQyLnZhbHVlKSA6IHByb21pc2UucmVqZWN0KF9yZXN1bHQyLmVycm9yKSA6IGNoYWluKF9yZXN1bHQyLCBwcm9taXNlKSA6IHByb21pc2UucmVzb2x2ZShfcmVzdWx0Mik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBlbmRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbihvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb25TdWNjZXNzICYmICFvblN1Y2Nlc3MuY2FsbCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZS50aGVuIGV4cGVjdGVkIGEgZnVuY3Rpb24gZm9yIHN1Y2Nlc3MgaGFuZGxlclwiKTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvciAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIG9uRXJyb3IgJiYgIW9uRXJyb3IuY2FsbCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZS50aGVuIGV4cGVjdGVkIGEgZnVuY3Rpb24gZm9yIGVycm9yIGhhbmRsZXJcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzczogb25TdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmNhdGNoID0gZnVuY3Rpb24ob25FcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZmluYWxseSA9IGZ1bmN0aW9uKG9uRmluYWxseSkge1xuICAgICAgICAgICAgICAgIGlmIChvbkZpbmFsbHkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBvbkZpbmFsbHkgJiYgIW9uRmluYWxseS5jYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlLmZpbmFsbHkgZXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFphbGdvUHJvbWlzZS50cnkob25GaW5hbGx5KS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnRyeShvbkZpbmFsbHkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by50aW1lb3V0ID0gZnVuY3Rpb24odGltZSwgZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZWQgfHwgdGhpcy5yZWplY3RlZCkgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlc29sdmVkIHx8IF90aGlzMy5yZWplY3RlZCB8fCBfdGhpczMucmVqZWN0KGVyciB8fCBuZXcgRXJyb3IoXCJQcm9taXNlIHRpbWVkIG91dCBhZnRlciBcIiArIHRpbWUgKyBcIm1zXCIpKTtcbiAgICAgICAgICAgICAgICB9KSwgdGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbigoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnRvUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBQcm9taXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ291bGQgbm90IGZpbmQgUHJvbWlzZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBaYWxnb1Byb21pc2UgPyB2YWx1ZSA6IHV0aWxzX2lzUHJvbWlzZSh2YWx1ZSkgPyBuZXcgWmFsZ29Qcm9taXNlKChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KSkgOiAobmV3IFphbGdvUHJvbWlzZSkucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgWmFsZ29Qcm9taXNlKS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5hc3luY1JlamVjdCA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChuZXcgWmFsZ29Qcm9taXNlKS5hc3luY1JlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IHByb21pc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYWluID0gZnVuY3Rpb24oaSwgZmlyc3RQcm9taXNlLCBzZWNvbmRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdFByb21pc2UudGhlbigoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2ldID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSAoY291bnQgLT0gMSkgJiYgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbSA9IHByb21pc2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbSBpbnN0YW5jZW9mIFphbGdvUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb20ucmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2ldID0gcHJvbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF1dGlsc19pc1Byb21pc2UocHJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbaV0gPSBwcm9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoYWluKGksIFphbGdvUHJvbWlzZS5yZXNvbHZlKHByb20pLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMCA9PT0gY291bnQgJiYgcHJvbWlzZS5yZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5oYXNoID0gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgdmFyIGF3YWl0UHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb21pc2VzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsc19pc1Byb21pc2UodmFsdWUpID8gYXdhaXRQcm9taXNlcy5wdXNoKHZhbHVlLnRoZW4oKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSA6IHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9taXNlcykgX2xvb3Aoa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLmFsbChhd2FpdFByb21pc2VzKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLm1hcCA9IGZ1bmN0aW9uKGl0ZW1zLCBtZXRob2QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLmFsbChpdGVtcy5tYXAobWV0aG9kKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLm9uUG9zc2libHlVbmhhbmRsZWRFeGNlcHRpb24gPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRQcm9taXNlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRQcm9taXNlSGFuZGxlcnMuc3BsaWNlKHBvc3NpYmx5VW5oYW5kbGVkUHJvbWlzZUhhbmRsZXJzLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oaGFuZGxlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWmFsZ29Qcm9taXNlLnRyeSA9IGZ1bmN0aW9uKG1ldGhvZCwgY29udGV4dCwgYXJncykge1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBtZXRob2QgJiYgIW1ldGhvZC5jYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlLnRyeSBleHBlY3RlZCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgc3RhcnRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJncyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWmFsZ29Qcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBaYWxnb1Byb21pc2UuZGVsYXkgPSBmdW5jdGlvbihfZGVsYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFphbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIF9kZWxheSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFphbGdvUHJvbWlzZS5pc1Byb21pc2UgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFphbGdvUHJvbWlzZSkgfHwgdXRpbHNfaXNQcm9taXNlKHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBaYWxnb1Byb21pc2UuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oWmFsZ28pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmbHVzaFByb21pc2UgPSBmbHVzaFByb21pc2UgfHwgbmV3IFphbGdvO1xuICAgICAgICAgICAgICAgICAgICBmbHVzaEFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9KFphbGdvUHJvbWlzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFphbGdvUHJvbWlzZTtcbiAgICAgICAgfSgpO1xuICAgICAgICBmdW5jdGlvbiBpc1JlZ2V4KGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgUmVnRXhwXVwiID09PSB7fS50b1N0cmluZy5jYWxsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBXSU5ET1dfVFlQRSA9IHtcbiAgICAgICAgICAgIElGUkFNRTogXCJpZnJhbWVcIixcbiAgICAgICAgICAgIFBPUFVQOiBcInBvcHVwXCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIElFX1dJTl9BQ0NFU1NfRVJST1IgPSBcIkNhbGwgd2FzIHJlamVjdGVkIGJ5IGNhbGxlZS5cXHJcXG5cIjtcbiAgICAgICAgZnVuY3Rpb24gaXNBYm91dFByb3RvY29sKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICByZXR1cm4gXCJhYm91dDpcIiA9PT0gd2luLmxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHV0aWxzX2dldFBhcmVudCh3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgaWYgKHdpbikgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luLnBhcmVudCAmJiB3aW4ucGFyZW50ICE9PSB3aW4pIHJldHVybiB3aW4ucGFyZW50O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5lcih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgaWYgKHdpbiAmJiAhdXRpbHNfZ2V0UGFyZW50KHdpbikpIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5vcGVuZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FuUmVhZEZyb21XaW5kb3cod2luKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRBY3R1YWxEb21haW4od2luKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IHdpbiAmJiAod2luID0gd2luZG93KTtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcbiAgICAgICAgICAgIGlmICghbG9jYXRpb24pIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVhZCB3aW5kb3cgbG9jYXRpb25cIik7XG4gICAgICAgICAgICB2YXIgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgICAgIGlmICghcHJvdG9jb2wpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVhZCB3aW5kb3cgcHJvdG9jb2xcIik7XG4gICAgICAgICAgICBpZiAoXCJmaWxlOlwiID09PSBwcm90b2NvbCkgcmV0dXJuIFwiZmlsZTovL1wiO1xuICAgICAgICAgICAgaWYgKFwiYWJvdXQ6XCIgPT09IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHV0aWxzX2dldFBhcmVudCh3aW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQgJiYgY2FuUmVhZEZyb21XaW5kb3coKSA/IGdldEFjdHVhbERvbWFpbihwYXJlbnQpIDogXCJhYm91dDovL1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhvc3QgPSBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgaWYgKCFob3N0KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlYWQgd2luZG93IGhvc3RcIik7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldERvbWFpbih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgdmFyIGRvbWFpbiA9IGdldEFjdHVhbERvbWFpbih3aW4pO1xuICAgICAgICAgICAgcmV0dXJuIGRvbWFpbiAmJiB3aW4ubW9ja0RvbWFpbiAmJiAwID09PSB3aW4ubW9ja0RvbWFpbi5pbmRleE9mKFwibW9jazpcIikgPyB3aW4ubW9ja0RvbWFpbiA6IGRvbWFpbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1NhbWVEb21haW4od2luKSB7XG4gICAgICAgICAgICBpZiAoIWZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW4gPT09IHdpbmRvdykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luLCBcImxvY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYyAmJiAhMSA9PT0gZGVzYy5lbnVtZXJhYmxlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Fib3V0UHJvdG9jb2wod2luKSAmJiBjYW5SZWFkRnJvbVdpbmRvdygpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRBY3R1YWxEb21haW4od2luKSA9PT0gZ2V0QWN0dWFsRG9tYWluKHdpbmRvdykpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSh3aW4pKSByZXR1cm4gITE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh3aW4gPT09IHdpbmRvdykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIGlmIChpc0Fib3V0UHJvdG9jb2wod2luKSAmJiBjYW5SZWFkRnJvbVdpbmRvdygpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgaWYgKGdldERvbWFpbih3aW5kb3cpID09PSBnZXREb21haW4od2luKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFzc2VydFNhbWVEb21haW4od2luKSB7XG4gICAgICAgICAgICBpZiAoIWlzU2FtZURvbWFpbih3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB3aW5kb3cgdG8gYmUgc2FtZSBkb21haW5cIik7XG4gICAgICAgICAgICByZXR1cm4gd2luO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQW5jZXN0b3JQYXJlbnQocGFyZW50LCBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQgfHwgIWNoaWxkKSByZXR1cm4gITE7XG4gICAgICAgICAgICB2YXIgY2hpbGRQYXJlbnQgPSB1dGlsc19nZXRQYXJlbnQoY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUGFyZW50ID8gY2hpbGRQYXJlbnQgPT09IHBhcmVudCA6IC0xICE9PSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7d2luLnBhcmVudCAhPT0gd2luOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHdpbi5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luID0gd2luLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfShjaGlsZCkuaW5kZXhPZihwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEZyYW1lcyh3aW4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHZhciBmcmFtZXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZyYW1lcyA9IHdpbi5mcmFtZXM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmcmFtZXMgPSB3aW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGVuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZW4gPSBmcmFtZXMubGVuZ3RoO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgaWYgKDAgPT09IGxlbikgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCAxMDA7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IGZyYW1lc1tfaV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX2ZyYW1lKSByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKF9mcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEFsbENoaWxkRnJhbWVzKHdpbikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kzID0gMCwgX2dldEZyYW1lczIgPSBnZXRGcmFtZXMod2luKTsgX2kzIDwgX2dldEZyYW1lczIubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IF9nZXRGcmFtZXMyW19pM107XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZnJhbWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pNSA9IDAsIF9nZXRBbGxDaGlsZEZyYW1lczIgPSBnZXRBbGxDaGlsZEZyYW1lcyhmcmFtZSk7IF9pNSA8IF9nZXRBbGxDaGlsZEZyYW1lczIubGVuZ3RoOyBfaTUrKykgcmVzdWx0LnB1c2goX2dldEFsbENoaWxkRnJhbWVzMltfaTVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9wKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh3aW4udG9wKSByZXR1cm4gd2luLnRvcDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIGlmICh1dGlsc19nZXRQYXJlbnQod2luKSA9PT0gd2luKSByZXR1cm4gd2luO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBbmNlc3RvclBhcmVudCh3aW5kb3csIHdpbikgJiYgd2luZG93LnRvcCkgcmV0dXJuIHdpbmRvdy50b3A7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FuY2VzdG9yUGFyZW50KHdpbiwgd2luZG93KSAmJiB3aW5kb3cudG9wKSByZXR1cm4gd2luZG93LnRvcDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIGZvciAodmFyIF9pNyA9IDAsIF9nZXRBbGxDaGlsZEZyYW1lczQgPSBnZXRBbGxDaGlsZEZyYW1lcyh3aW4pOyBfaTcgPCBfZ2V0QWxsQ2hpbGRGcmFtZXM0Lmxlbmd0aDsgX2k3KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBfZ2V0QWxsQ2hpbGRGcmFtZXM0W19pN107XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lLnRvcCkgcmV0dXJuIGZyYW1lLnRvcDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzX2dldFBhcmVudChmcmFtZSkgPT09IGZyYW1lKSByZXR1cm4gZnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsRnJhbWVzSW5XaW5kb3cod2luKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gZ2V0VG9wKHdpbik7XG4gICAgICAgICAgICBpZiAoIXRvcCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBkZXRlcm1pbmUgdG9wIHdpbmRvd1wiKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXS5jb25jYXQoZ2V0QWxsQ2hpbGRGcmFtZXModG9wKSwgWyB0b3AgXSk7XG4gICAgICAgICAgICAtMSA9PT0gcmVzdWx0LmluZGV4T2Yod2luKSAmJiAocmVzdWx0ID0gW10uY29uY2F0KHJlc3VsdCwgWyB3aW4gXSwgZ2V0QWxsQ2hpbGRGcmFtZXMod2luKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWZyYW1lV2luZG93cyA9IFtdO1xuICAgICAgICB2YXIgaWZyYW1lRnJhbWVzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGlzV2luZG93Q2xvc2VkKHdpbiwgYWxsb3dNb2NrKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFsbG93TW9jayAmJiAoYWxsb3dNb2NrID0gITApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luID09PSB3aW5kb3cpIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW4pIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbi5jbG9zZWQpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZXJyIHx8IGVyci5tZXNzYWdlICE9PSBJRV9XSU5fQUNDRVNTX0VSUk9SO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsbG93TW9jayAmJiBpc1NhbWVEb21haW4od2luKSkgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luLm1vY2tjbG9zZWQpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW4ucGFyZW50IHx8ICF3aW4udG9wKSByZXR1cm4gITA7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICB2YXIgaWZyYW1lSW5kZXggPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0oaWZyYW1lV2luZG93cywgd2luKTtcbiAgICAgICAgICAgIGlmICgtMSAhPT0gaWZyYW1lSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBpZnJhbWVGcmFtZXNbaWZyYW1lSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZSAmJiBmdW5jdGlvbihmcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lLmNvbnRlbnRXaW5kb3cpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFtZS5wYXJlbnROb2RlKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2MgPSBmcmFtZS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQgJiYgIWRvYy5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtwYXJlbnQucGFyZW50Tm9kZSAmJiBwYXJlbnQucGFyZW50Tm9kZSAhPT0gcGFyZW50OyApIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQuaG9zdCB8fCAhZG9jLmRvY3VtZW50RWxlbWVudC5jb250YWlucyhwYXJlbnQuaG9zdCkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfShmcmFtZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRBbmNlc3Rvcih3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgcmV0dXJuIGdldE9wZW5lcih3aW4gPSB3aW4gfHwgd2luZG93KSB8fCB1dGlsc19nZXRQYXJlbnQod2luKSB8fCB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYW55TWF0Y2goY29sbGVjdGlvbjEsIGNvbGxlY3Rpb24yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTE3ID0gMDsgX2kxNyA8IGNvbGxlY3Rpb24xLmxlbmd0aDsgX2kxNysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0xID0gY29sbGVjdGlvbjFbX2kxN107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxOSA9IDA7IF9pMTkgPCBjb2xsZWN0aW9uMi5sZW5ndGg7IF9pMTkrKykgaWYgKGl0ZW0xID09PSBjb2xsZWN0aW9uMltfaTE5XSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldERpc3RhbmNlRnJvbVRvcCh3aW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gd2luICYmICh3aW4gPSB3aW5kb3cpO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB3aW47XG4gICAgICAgICAgICBmb3IgKDtwYXJlbnQ7ICkgKHBhcmVudCA9IHV0aWxzX2dldFBhcmVudChwYXJlbnQpKSAmJiAoZGlzdGFuY2UgKz0gMSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTYW1lVG9wV2luZG93KHdpbjEsIHdpbjIpIHtcbiAgICAgICAgICAgIHZhciB0b3AxID0gZ2V0VG9wKHdpbjEpIHx8IHdpbjE7XG4gICAgICAgICAgICB2YXIgdG9wMiA9IGdldFRvcCh3aW4yKSB8fCB3aW4yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodG9wMSAmJiB0b3AyKSByZXR1cm4gdG9wMSA9PT0gdG9wMjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIHZhciBhbGxGcmFtZXMxID0gZ2V0QWxsRnJhbWVzSW5XaW5kb3cod2luMSk7XG4gICAgICAgICAgICB2YXIgYWxsRnJhbWVzMiA9IGdldEFsbEZyYW1lc0luV2luZG93KHdpbjIpO1xuICAgICAgICAgICAgaWYgKGFueU1hdGNoKGFsbEZyYW1lczEsIGFsbEZyYW1lczIpKSByZXR1cm4gITA7XG4gICAgICAgICAgICB2YXIgb3BlbmVyMSA9IGdldE9wZW5lcih0b3AxKTtcbiAgICAgICAgICAgIHZhciBvcGVuZXIyID0gZ2V0T3BlbmVyKHRvcDIpO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5lcjEgJiYgYW55TWF0Y2goZ2V0QWxsRnJhbWVzSW5XaW5kb3cob3BlbmVyMSksIGFsbEZyYW1lczIpIHx8IG9wZW5lcjIgJiYgYW55TWF0Y2goZ2V0QWxsRnJhbWVzSW5XaW5kb3cob3BlbmVyMiksIGFsbEZyYW1lczEpLCBcbiAgICAgICAgICAgICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hdGNoRG9tYWluKHBhdHRlcm4sIG9yaWdpbikge1xuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3JpZ2luKSByZXR1cm4gXCIqXCIgPT09IHBhdHRlcm4gfHwgb3JpZ2luID09PSBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZ2V4KG9yaWdpbikpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW4pKSByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNSZWdleChwYXR0ZXJuKSA/IGlzUmVnZXgob3JpZ2luKSA/IHBhdHRlcm4udG9TdHJpbmcoKSA9PT0gb3JpZ2luLnRvU3RyaW5nKCkgOiAhQXJyYXkuaXNBcnJheShvcmlnaW4pICYmIEJvb2xlYW4ob3JpZ2luLm1hdGNoKHBhdHRlcm4pKSA6ICEhQXJyYXkuaXNBcnJheShwYXR0ZXJuKSAmJiAoQXJyYXkuaXNBcnJheShvcmlnaW4pID8gSlNPTi5zdHJpbmdpZnkocGF0dGVybikgPT09IEpTT04uc3RyaW5naWZ5KG9yaWdpbikgOiAhaXNSZWdleChvcmlnaW4pICYmIHBhdHRlcm4uc29tZSgoZnVuY3Rpb24oc3VicGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaERvbWFpbihzdWJwYXR0ZXJuLCBvcmlnaW4pO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXREb21haW5Gcm9tVXJsKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHVybC5tYXRjaCgvXihodHRwcz98bW9ja3xmaWxlKTpcXC9cXC8vKSA/IHVybC5zcGxpdChcIi9cIikuc2xpY2UoMCwgMykuam9pbihcIi9cIikgOiBnZXREb21haW4oKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbkNsb3NlV2luZG93KHdpbiwgY2FsbGJhY2ssIGRlbGF5LCBtYXh0aW1lKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGRlbGF5ICYmIChkZWxheSA9IDFlMyk7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG1heHRpbWUgJiYgKG1heHRpbWUgPSAxIC8gMCk7XG4gICAgICAgICAgICB2YXIgdGltZW91dDtcbiAgICAgICAgICAgICFmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luKSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXh0aW1lIDw9IDApIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heHRpbWUgLT0gZGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNoZWNrLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqID09PSB3aW5kb3cpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgJiYgZXJyLm1lc3NhZ2UgPT09IElFX1dJTl9BQ0NFU1NfRVJST1IpIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiW29iamVjdCBXaW5kb3ddXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwob2JqKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LldpbmRvdyAmJiBvYmogaW5zdGFuY2VvZiB3aW5kb3cuV2luZG93KSByZXR1cm4gITA7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICYmIGVyci5tZXNzYWdlID09PSBJRV9XSU5fQUNDRVNTX0VSUk9SKSByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLnNlbGYgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIG9iai5wYXJlbnQgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIG9iai50b3AgPT09IG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAmJiBlcnIubWVzc2FnZSA9PT0gSUVfV0lOX0FDQ0VTU19FUlJPUikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIFwiX191bmxpa2VseV92YWx1ZV9fXCIgPT09IG9iai5fX2Nyb3NzX2RvbWFpbl91dGlsc193aW5kb3dfY2hlY2tfXykgcmV0dXJuICExO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoXCJwb3N0TWVzc2FnZVwiIGluIG9iaiAmJiBcInNlbGZcIiBpbiBvYmogJiYgXCJsb2NhdGlvblwiIGluIG9iaikgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlV2luZG93KHdpbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3aW4uY2xvc2UoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsX3NhZmVJbmRleE9mKGNvbGxlY3Rpb24sIGl0ZW0pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbltpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlYWttYXBfQ3Jvc3NEb21haW5TYWZlV2Vha01hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gQ3Jvc3NEb21haW5TYWZlV2Vha01hcCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWFrbWFwID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBcIl9fd2Vha21hcF9cIiArICgxZTkgKiBNYXRoLnJhbmRvbSgpID4+PiAwKSArIFwiX19cIjtcbiAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBXZWFrTWFwKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IE9iamVjdC5mcmVlemUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0V2Vha01hcCA9IG5ldyBXZWFrTWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RLZXkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUodGVzdEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0V2Vha01hcC5zZXQodGVzdEtleSwgXCJfX3Rlc3R2YWx1ZV9fXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiX190ZXN0dmFsdWVfX1wiID09PSB0ZXN0V2Vha01hcC5nZXQodGVzdEtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSgpKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYWttYXAgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfcHJvdG8gPSBDcm9zc0RvbWFpblNhZmVXZWFrTWFwLnByb3RvdHlwZTtcbiAgICAgICAgICAgIF9wcm90by5fY2xlYW51cENsb3NlZFdpbmRvd3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93KHZhbHVlKSAmJiBpc1dpbmRvd0Nsb3NlZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ZWFrbWFwKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYWttYXAuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5pc1NhZmVUb1JlYWRXcml0ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNXaW5kb3coa2V5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2Vha21hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndlYWttYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2FmZVRvUmVhZFdyaXRlKGtleSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBrZXlbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkgPyBlbnRyeVsxXSA9IHZhbHVlIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KGtleSwgbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFsga2V5LCB2YWx1ZSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFudXBDbG9zZWRXaW5kb3dzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2Yoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoLTEgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHRocm93IG5ldyBFcnJvcihcIldlYWtNYXAgZXhwZWN0ZWQga2V5XCIpO1xuICAgICAgICAgICAgICAgIHZhciB3ZWFrbWFwID0gdGhpcy53ZWFrbWFwO1xuICAgICAgICAgICAgICAgIGlmICh3ZWFrbWFwKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Vha21hcC5oYXMoa2V5KSkgcmV0dXJuIHdlYWttYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndlYWttYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2FmZVRvUmVhZFdyaXRlKGtleSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMF0gPT09IGtleSA/IGVudHJ5WzFdIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwQ2xvc2VkV2luZG93cygpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2YodGhpcy5rZXlzLCBrZXkpO1xuICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gaW5kZXgpIHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmRlbGV0ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2Vha21hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTYWZlVG9SZWFkV3JpdGUoa2V5KSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ICYmIGVudHJ5WzBdID09PSBrZXkgJiYgKGVudHJ5WzBdID0gZW50cnlbMV0gPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwQ2xvc2VkV2luZG93cygpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHV0aWxfc2FmZUluZGV4T2Yoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICgha2V5KSB0aHJvdyBuZXcgRXJyb3IoXCJXZWFrTWFwIGV4cGVjdGVkIGtleVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2Vha21hcCA9IHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICBpZiAod2Vha21hcCkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdlYWttYXAuaGFzKGtleSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMud2Vha21hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTYWZlVG9SZWFkV3JpdGUoa2V5KSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhKCFlbnRyeSB8fCBlbnRyeVswXSAhPT0ga2V5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cENsb3NlZFdpbmRvd3MoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IHV0aWxfc2FmZUluZGV4T2YodGhpcy5rZXlzLCBrZXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRPclNldCA9IGZ1bmN0aW9uKGtleSwgZ2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldHRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gQ3Jvc3NEb21haW5TYWZlV2Vha01hcDtcbiAgICAgICAgfSgpO1xuICAgICAgICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgICAgICAgcmV0dXJuIChfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICAgICAgICAgIH0pKG8pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihvLCBwKSB7XG4gICAgICAgICAgICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfSkobywgcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExO1xuICAgICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIChmdW5jdGlvbigpIHt9KSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0X2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnN0cnVjdF9jb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgPyBSZWZsZWN0LmNvbnN0cnVjdCA6IGZ1bmN0aW9uKFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IFsgbnVsbCBdO1xuICAgICAgICAgICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKSk7XG4gICAgICAgICAgICAgICAgQ2xhc3MgJiYgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH0pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgICAgICAgICAgdmFyIF9jYWNoZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgTWFwID8gbmV3IE1hcCA6IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiAod3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uKENsYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IENsYXNzIHx8ICEoZm4gPSBDbGFzcywgLTEgIT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKSkgcmV0dXJuIENsYXNzO1xuICAgICAgICAgICAgICAgIHZhciBmbjtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBDbGFzcykgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IF9jYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgICAgICAgICAgIH0pKENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5uYW1lIHx8IGZuLl9fbmFtZV9fIHx8IGZuLmRpc3BsYXlOYW1lIHx8IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0RnVuY3Rpb25OYW1lKGZuLCBuYW1lKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmbi5uYW1lO1xuICAgICAgICAgICAgICAgIGZuLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgZm4uX19uYW1lX18gPSBmbi5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYmFzZTY0ZW5jb2RlKHN0cikge1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYnRvYSkgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgKGZ1bmN0aW9uKG0sIHAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQocDEsIDE2KSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEJ1ZmZlcikgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0ciwgXCJ1dGY4XCIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHdpbmRvdy5idG9hIG9yIEJ1ZmZlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1bmlxdWVJRCgpIHtcbiAgICAgICAgICAgIHZhciBjaGFycyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgICAgICAgICAgcmV0dXJuIFwieHh4eHh4eHh4eFwiLnJlcGxhY2UoLy4vZywgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9KSkgKyBcIl9cIiArIGJhc2U2NGVuY29kZSgobmV3IERhdGUpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMTEsIDE5KS5yZXBsYWNlKFwiVFwiLCBcIi5cIikpLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYmplY3RJRHM7XG4gICAgICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZUFyZ3MoYXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoW10uc2xpY2UuY2FsbChhcmdzKSwgKGZ1bmN0aW9uKHN1YmtleSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHZhbCA/IFwibWVtb2l6ZVtcIiArIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SURzID0gb2JqZWN0SURzIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBvYmogfHwgXCJvYmplY3RcIiAhPSB0eXBlb2Ygb2JqICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb2JqKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1aWQgPSBvYmplY3RJRHMuZ2V0KG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZCA9IHR5cGVvZiBvYmogKyBcIjpcIiArIHVuaXF1ZUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SURzLnNldChvYmosIHVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdWlkO1xuICAgICAgICAgICAgICAgICAgICB9KHZhbCkgKyBcIl1cIiA6IHZhbDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudHMgbm90IHNlcmlhbGl6YWJsZSAtLSBjYW4gbm90IGJlIHVzZWQgdG8gbWVtb2l6ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRFbXB0eU9iamVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWVtb2l6ZUdsb2JhbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIG1lbW9pemUobWV0aG9kLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG9wdGlvbnMgJiYgKG9wdGlvbnMgPSB7fSk7XG4gICAgICAgICAgICB2YXIgX29wdGlvbnMkdGhpc05hbWVzcGFjID0gb3B0aW9ucy50aGlzTmFtZXNwYWNlLCB0aGlzTmFtZXNwYWNlID0gdm9pZCAwICE9PSBfb3B0aW9ucyR0aGlzTmFtZXNwYWMgJiYgX29wdGlvbnMkdGhpc05hbWVzcGFjLCBjYWNoZVRpbWUgPSBvcHRpb25zLnRpbWU7XG4gICAgICAgICAgICB2YXIgc2ltcGxlQ2FjaGU7XG4gICAgICAgICAgICB2YXIgdGhpc0NhY2hlO1xuICAgICAgICAgICAgdmFyIG1lbW9pemVJbmRleCA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgICAgIG1lbW9pemVHbG9iYWxJbmRleCArPSAxO1xuICAgICAgICAgICAgdmFyIG1lbW9pemVkRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgaWYgKG1lbW9pemVJbmRleCA8IG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSkge1xuICAgICAgICAgICAgICAgICAgICBzaW1wbGVDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9pemVJbmRleCA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWVtb2l6ZUdsb2JhbEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjYWNoZTtcbiAgICAgICAgICAgICAgICBjYWNoZSA9IHRoaXNOYW1lc3BhY2UgPyAodGhpc0NhY2hlID0gdGhpc0NhY2hlIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXApLmdldE9yU2V0KHRoaXMsIGdldEVtcHR5T2JqZWN0KSA6IHNpbXBsZUNhY2hlID0gc2ltcGxlQ2FjaGUgfHwge307XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gc2VyaWFsaXplQXJncyhhcmdzKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVSZXN1bHQgPSBjYWNoZVtjYWNoZUtleV07XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlUmVzdWx0ICYmIGNhY2hlVGltZSAmJiBEYXRlLm5vdygpIC0gY2FjaGVSZXN1bHQudGltZSA8IGNhY2hlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVbY2FjaGVLZXldO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVJlc3VsdCkgcmV0dXJuIGNhY2hlUmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBjYWNoZVtjYWNoZUtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1lbW9pemVkRnVuY3Rpb24ucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzaW1wbGVDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKG1lbW9pemVkRnVuY3Rpb24sIChvcHRpb25zLm5hbWUgfHwgZ2V0RnVuY3Rpb25OYW1lKG1ldGhvZCkpICsgXCI6Om1lbW9pemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1lbW9pemVHbG9iYWxJbmRleFZhbGlkRnJvbSA9IG1lbW9pemVHbG9iYWxJbmRleDtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbWVtb2l6ZVByb21pc2UobWV0aG9kKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzLCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHNlcmlhbGl6ZUFyZ3MoYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiBjYWNoZVtrZXldO1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KF90aGlzLCBfYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9KSkuZmluYWxseSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUgPSB7fTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKG1lbW9pemVkUHJvbWlzZUZ1bmN0aW9uLCBnZXRGdW5jdGlvbk5hbWUobWV0aG9kKSArIFwiOjpwcm9taXNlTWVtb2l6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5saW5lTWVtb2l6ZShtZXRob2QsIGxvZ2ljLCBhcmdzKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFyZ3MgJiYgKGFyZ3MgPSBbXSk7XG4gICAgICAgICAgICB2YXIgY2FjaGUgPSBtZXRob2QuX19pbmxpbmVfbWVtb2l6ZV9jYWNoZV9fID0gbWV0aG9kLl9faW5saW5lX21lbW9pemVfY2FjaGVfXyB8fCB7fTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBzZXJpYWxpemVBcmdzKGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmhhc093blByb3BlcnR5KGtleSkgPyBjYWNoZVtrZXldIDogY2FjaGVba2V5XSA9IGxvZ2ljLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3JjX3V0aWxfbm9vcCgpIHt9XG4gICAgICAgIGZ1bmN0aW9uIG9uY2UobWV0aG9kKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGVkID0gITE7XG4gICAgICAgICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCBnZXRGdW5jdGlvbk5hbWUobWV0aG9kKSArIFwiOjpvbmNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ2lmeUVycm9yKGVyciwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gbGV2ZWwgJiYgKGxldmVsID0gMSk7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPj0gMykgcmV0dXJuIFwic3RyaW5naWZ5RXJyb3Igc3RhY2sgb3ZlcmZsb3dcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHJldHVybiBcIjx1bmtub3duIGVycm9yOiBcIiArIHt9LnRvU3RyaW5nLmNhbGwoZXJyKSArIFwiPlwiO1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlcnIpIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFjayA9IGVyciAmJiBlcnIuc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gZXJyICYmIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2sgJiYgbWVzc2FnZSkgcmV0dXJuIC0xICE9PSBzdGFjay5pbmRleE9mKG1lc3NhZ2UpID8gc3RhY2sgOiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2spIHJldHVybiBzdGFjaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyICYmIGVyci50b1N0cmluZyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGVyci50b1N0cmluZyA/IGVyci50b1N0cmluZygpIDoge30udG9TdHJpbmcuY2FsbChlcnIpO1xuICAgICAgICAgICAgfSBjYXRjaCAobmV3RXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3Igd2hpbGUgc3RyaW5naWZ5aW5nIGVycm9yOiBcIiArIHN0cmluZ2lmeUVycm9yKG5ld0VyciwgbGV2ZWwgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJpbmdpZnkoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGl0ZW0gPyBpdGVtIDogaXRlbSAmJiBpdGVtLnRvU3RyaW5nICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlbS50b1N0cmluZyA/IGl0ZW0udG9TdHJpbmcoKSA6IHt9LnRvU3RyaW5nLmNhbGwoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kKG9iaiwgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIGlmIChPYmplY3QuYXNzaWduKSByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHNvdXJjZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAob2JqW2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgICAgIG1lbW9pemUoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMpIHJldHVybiBPYmplY3QudmFsdWVzKG9iaik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiByZXN1bHQucHVzaChvYmpba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIGlkZW50aXR5KGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNhZmVJbnRlcnZhbChtZXRob2QsIHRpbWUpIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICAgICAgIWZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgICAgIH0pLCB0aW1lKTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lTGF6eVByb3Aob2JqLCBrZXksIGdldHRlcikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBrZXkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheSBrZXkgbXVzdCBiZSBudW1iZXJcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIG9iaiAmJiBudWxsICE9PSBvYmogJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2Yga2V5KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGtleSBtdXN0IGJlIHN0cmluZ1wiKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYXJyYXlGcm9tKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIChpdGVtID0gb2JqKSAmJiBudWxsICE9PSBpdGVtICYmIFwiW29iamVjdCBPYmplY3RdXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgICAgIHZhciBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgICAgICAgICBpZiAoIWlzT2JqZWN0T2JqZWN0KG9iaikpIHJldHVybiAhMTtcbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGNvbnN0cnVjdG9yKSByZXR1cm4gITE7XG4gICAgICAgICAgICB2YXIgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICAgICAgcmV0dXJuICEhaXNPYmplY3RPYmplY3QocHJvdG90eXBlKSAmJiAhIXByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShcImlzUHJvdG90eXBlT2ZcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZU9iamVjdChpdGVtLCByZXBsYWNlciwgZnVsbEtleSkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBmdWxsS2V5ICYmIChmdWxsS2V5ID0gXCJcIik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTGF6eVByb3AocmVzdWx0LCBpLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUtleSA9IGZ1bGxLZXkgPyBmdWxsS2V5ICsgXCIuXCIgKyBpIDogXCJcIiArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSByZXBsYWNlcihpdGVtW2ldLCBpLCBpdGVtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc1BsYWluT2JqZWN0KGNoaWxkKSB8fCBBcnJheS5pc0FycmF5KGNoaWxkKSkgJiYgKGNoaWxkID0gcmVwbGFjZU9iamVjdChjaGlsZCwgcmVwbGFjZXIsIGl0ZW1LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgX2xvb3AyKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgIHZhciBfcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wMyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTGF6eVByb3AoX3Jlc3VsdCwga2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUtleSA9IGZ1bGxLZXkgPyBmdWxsS2V5ICsgXCIuXCIgKyBrZXkgOiBcIlwiICsga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gcmVwbGFjZXIoaXRlbVtrZXldLCBrZXksIGl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGlzUGxhaW5PYmplY3QoY2hpbGQpIHx8IEFycmF5LmlzQXJyYXkoY2hpbGQpKSAmJiAoY2hpbGQgPSByZXBsYWNlT2JqZWN0KGNoaWxkLCByZXBsYWNlciwgaXRlbUtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaXRlbSkgX2xvb3AzKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzIGFuIG9iamVjdCBvciBhcnJheVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsICE9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHV0aWxfaXNSZWdleChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJbb2JqZWN0IFJlZ0V4cF1cIiA9PT0ge30udG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1dGlsX2dldE9yU2V0KG9iaiwga2V5LCBnZXR0ZXIpIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuIG9ialtrZXldO1xuICAgICAgICAgICAgdmFyIHZhbCA9IGdldHRlcigpO1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXAob2JqKSB7XG4gICAgICAgICAgICB2YXIgdGFza3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBjbGVhbmVkID0gITE7XG4gICAgICAgICAgICB2YXIgY2xlYW5FcnI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24obmFtZSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsZWFuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtuYW1lXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbmVkID8gbWV0aG9kKGNsZWFuRXJyKSA6IHRhc2tzLnB1c2gob25jZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kKGNsZWFuRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbDogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuRXJyID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbmVkID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO3Rhc2tzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGFzaygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhc3NlcnRFeGlzdHMobmFtZSwgdGhpbmcpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHRoaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBcIiArIG5hbWUgKyBcIiB0byBiZSBwcmVzZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1dGlsX0V4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uKF9FcnJvcikge1xuICAgICAgICAgICAgX2luaGVyaXRzTG9vc2UoRXh0ZW5kYWJsZUVycm9yLCBfRXJyb3IpO1xuICAgICAgICAgICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXM2O1xuICAgICAgICAgICAgICAgIChfdGhpczYgPSBfRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzKS5uYW1lID0gX3RoaXM2LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA/IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gc2VsZikgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgICAgICAgICB9KF90aGlzNiksIF90aGlzNi5jb25zdHJ1Y3RvcikgOiBfdGhpczYuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG4gICAgICAgIH0od3JhcE5hdGl2ZVN1cGVyX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuICAgICAgICBmdW5jdGlvbiBpc0RvY3VtZW50UmVhZHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudC5ib2R5KSAmJiBcImNvbXBsZXRlXCIgPT09IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNEb2N1bWVudEludGVyYWN0aXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuYm9keSkgJiYgXCJpbnRlcmFjdGl2ZVwiID09PSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVybEVuY29kZShzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFw/L2csIFwiJTNGXCIpLnJlcGxhY2UoLyYvZywgXCIlMjZcIikucmVwbGFjZSgvIy9nLCBcIiUyM1wiKS5yZXBsYWNlKC9cXCsvZywgXCIlMkJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbWVtb2l6ZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlKChmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpIHx8IGlzRG9jdW1lbnRJbnRlcmFjdGl2ZSgpKSByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpIHx8IGlzRG9jdW1lbnRJbnRlcmFjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgMTApO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnkocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVNZW1vaXplKHBhcnNlUXVlcnksIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgaWYgKCFxdWVyeVN0cmluZykgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgICAgICAgICBpZiAoLTEgPT09IHF1ZXJ5U3RyaW5nLmluZGV4T2YoXCI9XCIpKSByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9xdWVyeVN0cmluZyRzcGxpdDIgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7IF9pMiA8IF9xdWVyeVN0cmluZyRzcGxpdDIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFpciA9IF9xdWVyeVN0cmluZyRzcGxpdDJbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgKHBhaXIgPSBwYWlyLnNwbGl0KFwiPVwiKSlbMF0gJiYgcGFpclsxXSAmJiAocGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICAgICAgfSksIFsgcXVlcnlTdHJpbmcgXSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXh0ZW5kUXVlcnkob3JpZ2luYWxRdWVyeSwgcHJvcHMpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gcHJvcHMgJiYgKHByb3BzID0ge30pO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzICYmIE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPyBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IG9iaiAmJiAob2JqID0ge30pO1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICB9KSkubWFwKChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybEVuY29kZShrZXkpICsgXCI9XCIgKyB1cmxFbmNvZGUob2JqW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgIH0oX2V4dGVuZHMoe30sIHBhcnNlUXVlcnkob3JpZ2luYWxRdWVyeSksIHByb3BzKSkgOiBvcmlnaW5hbFF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkKGNvbnRhaW5lciwgY2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkVsZW1lbnQgfHwgbnVsbCAhPT0gZWxlbWVudCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlbGVtZW50ICYmIDEgPT09IGVsZW1lbnQubm9kZVR5cGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZWxlbWVudC5zdHlsZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0RWxlbWVudFNhZmUoaWQsIGRvYykge1xuICAgICAgICAgICAgdm9pZCAwID09PSBkb2MgJiYgKGRvYyA9IGRvY3VtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBpc0VsZW1lbnQoaWQpID8gaWQgOiBcInN0cmluZ1wiID09IHR5cGVvZiBpZCA/IGRvYy5xdWVyeVNlbGVjdG9yKGlkKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlbGVtZW50UmVhZHkoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2UoKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gc3RyaW5naWZ5KGlkKTtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBnZXRFbGVtZW50U2FmZShpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsKSByZXR1cm4gcmVzb2x2ZShlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpKSByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIkRvY3VtZW50IGlzIHJlYWR5IGFuZCBlbGVtZW50IFwiICsgbmFtZSArIFwiIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCA9IGdldEVsZW1lbnRTYWZlKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG9jdW1lbnRSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiRG9jdW1lbnQgaXMgcmVhZHkgYW5kIGVsZW1lbnQgXCIgKyBuYW1lICsgXCIgZG9lcyBub3QgZXhpc3RcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIDEwKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9tX1BvcHVwT3BlbkVycm9yID0gZnVuY3Rpb24oX0V4dGVuZGFibGVFcnJvcikge1xuICAgICAgICAgICAgX2luaGVyaXRzTG9vc2UoUG9wdXBPcGVuRXJyb3IsIF9FeHRlbmRhYmxlRXJyb3IpO1xuICAgICAgICAgICAgZnVuY3Rpb24gUG9wdXBPcGVuRXJyb3IoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9FeHRlbmRhYmxlRXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFBvcHVwT3BlbkVycm9yO1xuICAgICAgICB9KHV0aWxfRXh0ZW5kYWJsZUVycm9yKTtcbiAgICAgICAgdmFyIGF3YWl0RnJhbWVMb2FkUHJvbWlzZXM7XG4gICAgICAgIGZ1bmN0aW9uIGF3YWl0RnJhbWVMb2FkKGZyYW1lKSB7XG4gICAgICAgICAgICBpZiAoKGF3YWl0RnJhbWVMb2FkUHJvbWlzZXMgPSBhd2FpdEZyYW1lTG9hZFByb21pc2VzIHx8IG5ldyB3ZWFrbWFwX0Nyb3NzRG9tYWluU2FmZVdlYWtNYXApLmhhcyhmcmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Byb21pc2UgPSBhd2FpdEZyYW1lTG9hZFByb21pc2VzLmdldChmcmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9taXNlKSByZXR1cm4gX3Byb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBwcm9taXNlX1phbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlmcmFtZVdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkID0gaWZyYW1lV2luZG93c1tpXS5jbG9zZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lRnJhbWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZVdpbmRvd3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lICYmIGZyYW1lLmNvbnRlbnRXaW5kb3cpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lV2luZG93cy5wdXNoKGZyYW1lLmNvbnRlbnRXaW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICAgICAgfShmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5jb250ZW50V2luZG93ID8gcmVzb2x2ZShmcmFtZSkgOiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBhd2FpdEZyYW1lTG9hZFByb21pc2VzLnNldChmcmFtZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhd2FpdEZyYW1lV2luZG93KGZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXRGcmFtZUxvYWQoZnJhbWUpLnRoZW4oKGZ1bmN0aW9uKGxvYWRlZEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkZWRGcmFtZS5jb250ZW50V2luZG93KSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCB3aW5kb3cgaW4gaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZWRGcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRvbV9pZnJhbWUob3B0aW9ucywgY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG9wdGlvbnMgJiYgKG9wdGlvbnMgPSB7fSk7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBvcHRpb25zLnN0eWxlIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gZnVuY3Rpb24odGFnLCBvcHRpb25zLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHRhZyAmJiAodGFnID0gXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBvcHRpb25zICYmIChvcHRpb25zID0ge30pO1xuICAgICAgICAgICAgICAgIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc3R5bGUgJiYgZXh0ZW5kKGVsZW1lbnQuc3R5bGUsIG9wdGlvbnMuc3R5bGUpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY2xhc3MgJiYgKGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzcy5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5pZCAmJiBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIG9wdGlvbnMuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZXMpIGZvciAodmFyIF9pMTAgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKTsgX2kxMCA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTEwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5czJbX2kxMF07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0eWxlU2hlZXQgJiYgZnVuY3Rpb24oZWwsIHN0eWxlVGV4dCwgZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZG9jICYmIChkb2MgPSB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVNoZWV0ID8gZWwuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVUZXh0IDogZWwuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHN0eWxlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH0oZWxlbWVudCwgb3B0aW9ucy5zdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5odG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImlmcmFtZVwiID09PSB0YWcpIHRocm93IG5ldyBFcnJvcihcIklmcmFtZSBodG1sIGNhbiBub3QgYmUgd3JpdHRlbiB1bmxlc3MgY29udGFpbmVyIHByb3ZpZGVkIGFuZCBpZnJhbWUgaW4gRE9NXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuaHRtbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9KFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VHJhbnNwYXJlbmN5OiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fSksXG4gICAgICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9LCBzdHlsZSksXG4gICAgICAgICAgICAgICAgaHRtbDogb3B0aW9ucy5odG1sLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBvcHRpb25zLmNsYXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpc0lFID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUV8RWRnZS9pKTtcbiAgICAgICAgICAgIGZyYW1lLmhhc0F0dHJpYnV0ZShcImlkXCIpIHx8IGZyYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIHVuaXF1ZUlEKCkpO1xuICAgICAgICAgICAgYXdhaXRGcmFtZUxvYWQoZnJhbWUpO1xuICAgICAgICAgICAgY29udGFpbmVyICYmIGZ1bmN0aW9uKGlkLCBkb2MpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGRvYyAmJiAoZG9jID0gZG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudFNhZmUoaWQsIGRvYyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZmluZCBlbGVtZW50OiBcIiArIHN0cmluZ2lmeShpZCkpO1xuICAgICAgICAgICAgfShjb250YWluZXIpLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICAgICAgICAgIChvcHRpb25zLnVybCB8fCBpc0lFKSAmJiBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgb3B0aW9ucy51cmwgfHwgXCJhYm91dDpibGFua1wiKTtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG9iaiwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0VsZW1lbnRDbG9zZWQoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGVsICYmIGVsLnBhcmVudE5vZGUgJiYgZWwub3duZXJEb2N1bWVudCAmJiBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKGVsLCBoYW5kbGVyLCBfdGVtcCkge1xuICAgICAgICAgICAgdmFyIF9yZWYyID0gdm9pZCAwID09PSBfdGVtcCA/IHt9IDogX3RlbXAsIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsIHdpZHRoID0gdm9pZCAwID09PSBfcmVmMiR3aWR0aCB8fCBfcmVmMiR3aWR0aCwgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LCBoZWlnaHQgPSB2b2lkIDAgPT09IF9yZWYyJGhlaWdodCB8fCBfcmVmMiRoZWlnaHQsIF9yZWYyJGludGVydmFsID0gX3JlZjIuaW50ZXJ2YWwsIGludGVydmFsID0gdm9pZCAwID09PSBfcmVmMiRpbnRlcnZhbCA/IDEwMCA6IF9yZWYyJGludGVydmFsLCBfcmVmMiR3aW4gPSBfcmVmMi53aW4sIHdpbiA9IHZvaWQgMCA9PT0gX3JlZjIkd2luID8gd2luZG93IDogX3JlZjIkd2luO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY2FuY2VsZWQgPSAhMTtcbiAgICAgICAgICAgIGhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXJyZW50SGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQgJiYgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oZWwub2Zmc2V0V2lkdGggfHwgZWwub2Zmc2V0SGVpZ2h0IHx8IGVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9KGVsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgKHdpZHRoICYmIG5ld1dpZHRoICE9PSBjdXJyZW50V2lkdGggfHwgaGVpZ2h0ICYmIG5ld0hlaWdodCAhPT0gY3VycmVudEhlaWdodCkgJiYgaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcjtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2spO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gd2luLlJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgKG9ic2VydmVyID0gbmV3IHdpbi5SZXNpemVPYnNlcnZlcihjaGVjaykpLm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzYWZlSW50ZXJ2YWwoY2hlY2ssIDEwICogaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IHdpbi5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgKG9ic2VydmVyID0gbmV3IHdpbi5NdXRhdGlvbk9ic2VydmVyKGNoZWNrKSkub2JzZXJ2ZShlbCwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6ICExXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNhZmVJbnRlcnZhbChjaGVjaywgMTAgKiBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2UgdGltZW91dCA9IHNhZmVJbnRlcnZhbChjaGVjaywgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2hhZG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3IgKDtlbGVtZW50LnBhcmVudE5vZGU7ICkgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgU2hhZG93Um9vdF1cIiA9PT0gZWxlbWVudC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50U2NyaXB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0IDogbnVsbDtcbiAgICAgICAgdmFyIGdldEN1cnJlbnRTY3JpcHQgPSBtZW1vaXplKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2NyaXB0KSByZXR1cm4gY3VycmVudFNjcmlwdDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2NyaXB0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIl9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyLnN0YWNrIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrRGV0YWlscyA9IC8uKmF0IFteKF0qXFwoKC4qKTooLispOiguKylcXCkkL2dpLmV4ZWMoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NyaXB0TG9jYXRpb24gPSBzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNjcmlwdExvY2F0aW9uKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMjIgPSAwLCBfQXJyYXkkcHJvdG90eXBlJHNsaWMyID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucmV2ZXJzZSgpOyBfaTIyIDwgX0FycmF5JHByb3RvdHlwZSRzbGljMi5sZW5ndGg7IF9pMjIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IF9BcnJheSRwcm90b3R5cGUkc2xpYzJbX2kyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LnNyYyAmJiBzY3JpcHQuc3JjID09PSBzY3JpcHRMb2NhdGlvbikgcmV0dXJuIHNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgIH0oKSkgcmV0dXJuIGN1cnJlbnRTY3JpcHQ7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGRldGVybWluZSBjdXJyZW50IHNjcmlwdFwiKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgY3VycmVudFVJRCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIG1lbW9pemUoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gZ2V0Q3VycmVudFNjcmlwdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRVSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdWlkID0gc2NyaXB0LmdldEF0dHJpYnV0ZShcImRhdGEtdWlkXCIpO1xuICAgICAgICAgICAgaWYgKHVpZCAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB1aWQpIHJldHVybiB1aWQ7XG4gICAgICAgICAgICBpZiAoKHVpZCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVpZC1hdXRvXCIpKSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB1aWQpIHJldHVybiB1aWQ7XG4gICAgICAgICAgICB1aWQgPSB1bmlxdWVJRCgpO1xuICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtdWlkLWF1dG9cIiwgdWlkKTtcbiAgICAgICAgICAgIHJldHVybiB1aWQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgZnVuY3Rpb24gdG9QeCh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHZhbC5tYXRjaCgvXihbMC05XSspKHB4fCUpJC8pO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBtYXRjaCBjc3MgdmFsdWUgZnJvbSBcIiArIHZhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgICAgICAgICB9KHZhbCkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9DU1ModmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgdmFsID8gdG9QeCh2YWwpIDogXCJzdHJpbmdcIiA9PSB0eXBlb2YgKHN0ciA9IHZhbCkgJiYgL15bMC05XSslJC8udGVzdChzdHIpID8gdmFsIDogdG9QeCh2YWwpO1xuICAgICAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnbG9iYWxfZ2V0R2xvYmFsKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fXCI7XG4gICAgICAgICAgICByZXR1cm4gd2luICE9PSB3aW5kb3cgPyB3aW5bZ2xvYmFsS2V5XSA6IHdpbltnbG9iYWxLZXldID0gd2luW2dsb2JhbEtleV0gfHwge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdldE9iaiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnbG9iYWxTdG9yZShrZXksIGRlZlN0b3JlKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGtleSAmJiAoa2V5ID0gXCJzdG9yZVwiKTtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZGVmU3RvcmUgJiYgKGRlZlN0b3JlID0gZ2V0T2JqKTtcbiAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KGdsb2JhbF9nZXRHbG9iYWwoKSwga2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gZGVmU3RvcmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoYXM6IGZ1bmN0aW9uKHN0b3JlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuaGFzT3duUHJvcGVydHkoc3RvcmVLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHN0b3JlS2V5LCBkZWZWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5oYXNPd25Qcm9wZXJ0eShzdG9yZUtleSkgPyBzdG9yZVtzdG9yZUtleV0gOiBkZWZWYWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RvcmVLZXksIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVbc3RvcmVLZXldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsOiBmdW5jdGlvbihzdG9yZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3N0b3JlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3JTZXQ6IGZ1bmN0aW9uKHN0b3JlS2V5LCBnZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KHN0b3JlLCBzdG9yZUtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBkZWZTdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBXaWxkQ2FyZCA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIGZ1bmN0aW9uIGdldFdpbGRjYXJkKCkge1xuICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGdsb2JhbF9nZXRHbG9iYWwoKTtcbiAgICAgICAgICAgIGdsb2JhbC5XSU5ET1dfV0lMRENBUkQgPSBnbG9iYWwuV0lORE9XX1dJTERDQVJEIHx8IG5ldyBXaWxkQ2FyZDtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuV0lORE9XX1dJTERDQVJEO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd1N0b3JlKGtleSwgZGVmU3RvcmUpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0ga2V5ICYmIChrZXkgPSBcInN0b3JlXCIpO1xuICAgICAgICAgICAgdm9pZCAwID09PSBkZWZTdG9yZSAmJiAoZGVmU3RvcmUgPSBnZXRPYmopO1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0b3JlKFwid2luZG93U3RvcmVcIikuZ2V0T3JTZXQoa2V5LCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpblN0b3JlID0gbmV3IHdlYWttYXBfQ3Jvc3NEb21haW5TYWZlV2Vha01hcDtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0U3RvcmUgPSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblN0b3JlLmdldE9yU2V0KHdpbiwgZGVmU3RvcmUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzOiBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdG9yZSh3aW4pLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24od2luLCBkZWZWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IGdldFN0b3JlKHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSA/IHN0b3JlW2tleV0gOiBkZWZWYWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24od2luLCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0b3JlKHdpbilba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlbDogZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2V0U3RvcmUod2luKVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRPclNldDogZnVuY3Rpb24od2luLCBnZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsX2dldE9yU2V0KGdldFN0b3JlKHdpbiksIGtleSwgZ2V0dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VJRCgpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdG9yZShcImluc3RhbmNlXCIpLmdldE9yU2V0KFwiaW5zdGFuY2VJRFwiLCB1bmlxdWVJRCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZUhlbGxvUHJvbWlzZSh3aW4sIF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBkb21haW4gPSBfcmVmLmRvbWFpbjtcbiAgICAgICAgICAgIHZhciBoZWxsb1Byb21pc2VzID0gd2luZG93U3RvcmUoXCJoZWxsb1Byb21pc2VzXCIpO1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nUHJvbWlzZSA9IGhlbGxvUHJvbWlzZXMuZ2V0KHdpbik7XG4gICAgICAgICAgICBleGlzdGluZ1Byb21pc2UgJiYgZXhpc3RpbmdQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGVsbG9Qcm9taXNlcy5zZXQod2luLCBuZXdQcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNheUhlbGxvKHdpbiwgX3JlZjQpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX3JlZjQuc2VuZCkod2luLCBcInBvc3Ryb2JvdF9oZWxsb1wiLCB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJRDogZ2V0SW5zdGFuY2VJRCgpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZG9tYWluOiBcIipcIixcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAtMVxuICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gX3JlZjUub3JpZ2luLCBpbnN0YW5jZUlEID0gX3JlZjUuZGF0YS5pbnN0YW5jZUlEO1xuICAgICAgICAgICAgICAgIHJlc29sdmVIZWxsb1Byb21pc2Uod2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogb3JpZ2luXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlEOiBpbnN0YW5jZUlEXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwgX3JlZjYpIHtcbiAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjYuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dTdG9yZShcIndpbmRvd0luc3RhbmNlSURQcm9taXNlc1wiKS5nZXRPclNldCh3aW4sIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F5SGVsbG8od2luLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihfcmVmNykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjcuaW5zdGFuY2VJRDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFya1dpbmRvd0tub3duKHdpbikge1xuICAgICAgICAgICAgd2luZG93U3RvcmUoXCJrbm93bldpbmRvd3NcIikuc2V0KHdpbiwgITApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzU2VyaWFsaXplZFR5cGUoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGl0ZW0gJiYgbnVsbCAhPT0gaXRlbSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBpdGVtLl9fdHlwZV9fO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRldGVybWluZVR5cGUodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB2YWwgPyBcInVuZGVmaW5lZFwiIDogbnVsbCA9PT0gdmFsID8gXCJudWxsXCIgOiBBcnJheS5pc0FycmF5KHZhbCkgPyBcImFycmF5XCIgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHZhbCA/IFwiZnVuY3Rpb25cIiA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIHZhbCA/IHZhbCBpbnN0YW5jZW9mIEVycm9yID8gXCJlcnJvclwiIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiB2YWwudGhlbiA/IFwicHJvbWlzZVwiIDogXCJbb2JqZWN0IFJlZ0V4cF1cIiA9PT0ge30udG9TdHJpbmcuY2FsbCh2YWwpID8gXCJyZWdleFwiIDogXCJbb2JqZWN0IERhdGVdXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwodmFsKSA/IFwiZGF0ZVwiIDogXCJvYmplY3RcIiA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHZhbCA/IFwic3RyaW5nXCIgOiBcIm51bWJlclwiID09IHR5cGVvZiB2YWwgPyBcIm51bWJlclwiIDogXCJib29sZWFuXCIgPT0gdHlwZW9mIHZhbCA/IFwiYm9vbGVhblwiIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZVR5cGUodHlwZSwgdmFsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIF9fdHlwZV9fOiB0eXBlLFxuICAgICAgICAgICAgICAgIF9fdmFsX186IHZhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX1NFUklBTElaRVI7XG4gICAgICAgIHZhciBTRVJJQUxJWkVSID0gKChfU0VSSUFMSVpFUiA9IHt9KS5mdW5jdGlvbiA9IGZ1bmN0aW9uKCkge30sIF9TRVJJQUxJWkVSLmVycm9yID0gZnVuY3Rpb24oX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVR5cGUoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogX3JlZi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHN0YWNrOiBfcmVmLnN0YWNrLFxuICAgICAgICAgICAgICAgIGNvZGU6IF9yZWYuY29kZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBfcmVmLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5wcm9taXNlID0gZnVuY3Rpb24oKSB7fSwgX1NFUklBTElaRVIucmVnZXggPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwicmVnZXhcIiwgdmFsLnNvdXJjZSk7XG4gICAgICAgIH0sIF9TRVJJQUxJWkVSLmRhdGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiZGF0ZVwiLCB2YWwudG9KU09OKCkpO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5hcnJheSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfU0VSSUFMSVpFUi5zdHJpbmcgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9TRVJJQUxJWkVSLm51bWJlciA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIuYm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIubnVsbCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX1NFUklBTElaRVIpO1xuICAgICAgICB2YXIgZGVmYXVsdFNlcmlhbGl6ZXJzID0ge307XG4gICAgICAgIHZhciBfREVTRVJJQUxJWkVSO1xuICAgICAgICB2YXIgREVTRVJJQUxJWkVSID0gKChfREVTRVJJQUxJWkVSID0ge30pLmZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBzZXJpYWxpemF0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZDsgbm90aGluZyB0byBkZXNlcmlhbGl6ZVwiKTtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5lcnJvciA9IGZ1bmN0aW9uKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBfcmVmMi5zdGFjaywgY29kZSA9IF9yZWYyLmNvZGUsIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKF9yZWYyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gICAgICAgICAgICBkYXRhICYmIChlcnJvci5kYXRhID0gZGF0YSk7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHN0YWNrICsgXCJcXG5cXG5cIiArIGVycm9yLnN0YWNrO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSLnByb21pc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb21pc2Ugc2VyaWFsaXphdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQ7IG5vdGhpbmcgdG8gZGVzZXJpYWxpemVcIik7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIucmVnZXggPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHZhbCk7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuZGF0ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbCk7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuYXJyYXkgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSLnN0cmluZyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5udW1iZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sIF9ERVNFUklBTElaRVIuYm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSwgX0RFU0VSSUFMSVpFUi5udWxsID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9LCBfREVTRVJJQUxJWkVSKTtcbiAgICAgICAgdmFyIGRlZmF1bHREZXNlcmlhbGl6ZXJzID0ge307XG4gICAgICAgIG5ldyBwcm9taXNlX1phbGdvUHJvbWlzZSgoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuYm9keSkgcmV0dXJuIHJlc29sdmUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHdpbmRvdy5kb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgMTApO1xuICAgICAgICB9KSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXBQcm94eVdpbmRvd3MoKSB7XG4gICAgICAgICAgICB2YXIgaWRUb1Byb3h5V2luZG93ID0gZ2xvYmFsU3RvcmUoXCJpZFRvUHJveHlXaW5kb3dcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfaWRUb1Byb3h5V2luZG93JGtleXMyID0gaWRUb1Byb3h5V2luZG93LmtleXMoKTsgX2kyIDwgX2lkVG9Qcm94eVdpbmRvdyRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gX2lkVG9Qcm94eVdpbmRvdyRrZXlzMltfaTJdO1xuICAgICAgICAgICAgICAgIGlkVG9Qcm94eVdpbmRvdy5nZXQoaWQpLnNob3VsZENsZWFuKCkgJiYgaWRUb1Byb3h5V2luZG93LmRlbChpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VyaWFsaXplZFdpbmRvdyh3aW5Qcm9taXNlLCBfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWYuc2VuZCwgX3JlZiRpZCA9IF9yZWYuaWQsIGlkID0gdm9pZCAwID09PSBfcmVmJGlkID8gdW5pcXVlSUQoKSA6IF9yZWYkaWQ7XG4gICAgICAgICAgICB2YXIgd2luZG93TmFtZVByb21pc2UgPSB3aW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgcmV0dXJuIGFzc2VydFNhbWVEb21haW4od2luKS5uYW1lO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd1R5cGVQcm9taXNlID0gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luZG93KSkgdGhyb3cgbmV3IEVycm9yKFwiV2luZG93IGlzIGNsb3NlZCwgY2FuIG5vdCBkZXRlcm1pbmUgdHlwZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0T3BlbmVyKHdpbmRvdykgPyBXSU5ET1dfVFlQRS5QT1BVUCA6IFdJTkRPV19UWVBFLklGUkFNRTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHdpbmRvd05hbWVQcm9taXNlLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgd2luZG93VHlwZVByb21pc2UuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBnZXRUeXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1R5cGVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5zdGFuY2VJRDogbWVtb2l6ZVByb21pc2UoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbihjbG9zZVdpbmRvdyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXROYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93Q2xvc2VkKHdpbikpIHJldHVybiBpc1NhbWVEb21haW4od2luKSA/IGFzc2VydFNhbWVEb21haW4od2luKS5uYW1lIDogd2luZG93TmFtZVByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpblByb21pc2UudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1dpbmRvd0Nsb3NlZCh3aW4pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbjogZnVuY3Rpb24oaHJlZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luUHJvbWlzZS50aGVuKChmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBocmVmLmluZGV4T2YoXCIvXCIpKSBocmVmID0gXCJcIiArIGRvbWFpbiArIGhyZWY7IGVsc2UgaWYgKCFocmVmLm1hdGNoKC9eaHR0cHM/OlxcL1xcLy8pICYmIDAgIT09IGhyZWYuaW5kZXhPZihkb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB1cmwgdG8gYmUgaHR0cCBvciBodHRwcyB1cmwsIG9yIGFic29sdXRlIHBhdGgsIGdvdCBcIiArIEpTT04uc3RyaW5naWZ5KGhyZWYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luLmxvY2F0aW9uICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luLmxvY2F0aW9uLnJlcGxhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luLmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4ubG9jYXRpb24gPSBocmVmO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXROYW1lOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVEb21haW4gPSBpc1NhbWVEb21haW4od2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVEb21haW4od2luKSkgcmV0dXJuIGFzc2VydFNhbWVEb21haW4od2luKS5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyMSA9IDAsIF9kb2N1bWVudCRxdWVyeVNlbGVjdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpOyBfaTIxIDwgX2RvY3VtZW50JHF1ZXJ5U2VsZWN0Mi5sZW5ndGg7IF9pMjErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWUgPSBfZG9jdW1lbnQkcXVlcnlTZWxlY3QyW19pMjFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUgJiYgZnJhbWUuY29udGVudFdpbmRvdyAmJiBmcmFtZS5jb250ZW50V2luZG93ID09PSB3aW4pIHJldHVybiBmcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNhbWVEb21haW4pIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3Qgc2V0IG5hbWUgZm9yIGNyb3NzLWRvbWFpbiB3aW5kb3c6IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnRTYW1lRG9tYWluKHdpbikubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZSAmJiBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93TmFtZVByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2luZG93X1Byb3h5V2luZG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBQcm94eVdpbmRvdyhfcmVmMikge1xuICAgICAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjIuc2VuZCwgd2luID0gX3JlZjIud2luLCBzZXJpYWxpemVkV2luZG93ID0gX3JlZjIuc2VyaWFsaXplZFdpbmRvdztcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQcm94eVdpbmRvdyA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplZFdpbmRvdyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvdyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvd1Byb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbFdpbmRvd1Byb21pc2UgPSBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxpemVkV2luZG93ID0gc2VyaWFsaXplZFdpbmRvdyB8fCBnZXRTZXJpYWxpemVkV2luZG93KHRoaXMuYWN0dWFsV2luZG93UHJvbWlzZSwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmUoXCJpZFRvUHJveHlXaW5kb3dcIikuc2V0KHRoaXMuZ2V0SUQoKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgd2luICYmIHRoaXMuc2V0V2luZG93KHdpbiwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3Byb3RvID0gUHJveHlXaW5kb3cucHJvdG90eXBlO1xuICAgICAgICAgICAgX3Byb3RvLmdldElEID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5pZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZWRXaW5kb3cuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5pc1BvcHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSgpLnRoZW4oKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09IFdJTkRPV19UWVBFLlBPUFVQO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2V0TG9jYXRpb24gPSBmdW5jdGlvbihocmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkV2luZG93LnNldExvY2F0aW9uKGhyZWYpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5nZXROYW1lKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNldE5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5zZXROYW1lKG5hbWUpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkV2luZG93LmNsb3NlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczM7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBpc1BvcHVwUHJvbWlzZSA9IHRoaXMuaXNQb3B1cCgpO1xuICAgICAgICAgICAgICAgIHZhciBnZXROYW1lUHJvbWlzZSA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIHZhciByZW9wZW5Qcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlzUG9wdXA6IGlzUG9wdXBQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBnZXROYW1lUHJvbWlzZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgX3JlZjMuaXNQb3B1cCAmJiBuYW1lICYmIHdpbmRvdy5vcGVuKFwiXCIsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNQcm9taXNlID0gdGhpcy5zZXJpYWxpemVkV2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmFsbChbIHJlb3BlblByb21pc2UsIGZvY3VzUHJvbWlzZSBdKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmlzQ2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5pc0Nsb3NlZCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRXaW5kb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxXaW5kb3c7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNldFdpbmRvdyA9IGZ1bmN0aW9uKHdpbiwgX3JlZjQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY0LnNlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxXaW5kb3cgPSB3aW47XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxXaW5kb3dQcm9taXNlLnJlc29sdmUodGhpcy5hY3R1YWxXaW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsaXplZFdpbmRvdyA9IGdldFNlcmlhbGl6ZWRXaW5kb3codGhpcy5hY3R1YWxXaW5kb3dQcm9taXNlLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmdldElEKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3dTdG9yZShcIndpblRvUHJveHlXaW5kb3dcIikuc2V0KHdpbiwgdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLmF3YWl0V2luZG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsV2luZG93UHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8ubWF0Y2hXaW5kb3cgPSBmdW5jdGlvbih3aW4sIF9yZWY1KSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHNlbmQgPSBfcmVmNS5zZW5kO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1LmFjdHVhbFdpbmRvdyA/IHdpbiA9PT0gX3RoaXM1LmFjdHVhbFdpbmRvdyA6IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlJbnN0YW5jZUlEOiBfdGhpczUuZ2V0SW5zdGFuY2VJRCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAga25vd25XaW5kb3dJbnN0YW5jZUlEOiBnZXRXaW5kb3dJbnN0YW5jZUlEKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBfcmVmNi5wcm94eUluc3RhbmNlSUQgPT09IF9yZWY2Lmtub3duV2luZG93SW5zdGFuY2VJRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoICYmIF90aGlzNS5zZXRXaW5kb3cod2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdHVhbFdpbmRvdyB8fCB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wcm90by5nZXRJbnN0YW5jZUlEID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdy5nZXRJbnN0YW5jZUlEKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3Byb3RvLnNob3VsZENsZWFuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5hY3R1YWxXaW5kb3cgJiYgaXNXaW5kb3dDbG9zZWQodGhpcy5hY3R1YWxXaW5kb3cpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcHJvdG8uc2VyaWFsaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFdpbmRvdztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBQcm94eVdpbmRvdy51bndyYXAgPSBmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyh3aW4pID8gd2luLnVud3JhcCgpIDogd2luO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFByb3h5V2luZG93LnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKHdpbiwgX3JlZjcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY3LnNlbmQ7XG4gICAgICAgICAgICAgICAgY2xlYW51cFByb3h5V2luZG93cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm94eVdpbmRvdy50b1Byb3h5V2luZG93KHdpbiwge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSkuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cuZGVzZXJpYWxpemUgPSBmdW5jdGlvbihzZXJpYWxpemVkV2luZG93LCBfcmVmOCkge1xuICAgICAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjguc2VuZDtcbiAgICAgICAgICAgICAgICBjbGVhbnVwUHJveHlXaW5kb3dzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0b3JlKFwiaWRUb1Byb3h5V2luZG93XCIpLmdldChzZXJpYWxpemVkV2luZG93LmlkKSB8fCBuZXcgUHJveHlXaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkV2luZG93OiBzZXJpYWxpemVkV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKG9iaiAmJiAhaXNXaW5kb3cob2JqKSAmJiBvYmouaXNQcm94eVdpbmRvdyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyA9IGZ1bmN0aW9uKHdpbiwgX3JlZjkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY5LnNlbmQ7XG4gICAgICAgICAgICAgICAgY2xlYW51cFByb3h5V2luZG93cygpO1xuICAgICAgICAgICAgICAgIGlmIChQcm94eVdpbmRvdy5pc1Byb3h5V2luZG93KHdpbikpIHJldHVybiB3aW47XG4gICAgICAgICAgICAgICAgdmFyIGFjdHVhbFdpbmRvdyA9IHdpbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93U3RvcmUoXCJ3aW5Ub1Byb3h5V2luZG93XCIpLmdldChhY3R1YWxXaW5kb3cpIHx8IG5ldyBQcm94eVdpbmRvdyh7XG4gICAgICAgICAgICAgICAgICAgIHdpbjogYWN0dWFsV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFByb3h5V2luZG93O1xuICAgICAgICB9KCk7XG4gICAgICAgIGZ1bmN0aW9uIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCBzb3VyY2UsIGRvbWFpbikge1xuICAgICAgICAgICAgdmFyIG1ldGhvZFN0b3JlID0gd2luZG93U3RvcmUoXCJtZXRob2RTdG9yZVwiKTtcbiAgICAgICAgICAgIHZhciBwcm94eVdpbmRvd01ldGhvZHMgPSBnbG9iYWxTdG9yZShcInByb3h5V2luZG93TWV0aG9kc1wiKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3dfUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyhzb3VyY2UpKSBwcm94eVdpbmRvd01ldGhvZHMuc2V0KGlkLCB7XG4gICAgICAgICAgICAgICAgdmFsOiB2YWwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICAgICAgfSk7IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3h5V2luZG93TWV0aG9kcy5kZWwoaWQpO1xuICAgICAgICAgICAgICAgIG1ldGhvZFN0b3JlLmdldE9yU2V0KHNvdXJjZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbDogdmFsLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbG9va3VwTWV0aG9kKHNvdXJjZSwgaWQpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2RTdG9yZSA9IHdpbmRvd1N0b3JlKFwibWV0aG9kU3RvcmVcIik7XG4gICAgICAgICAgICB2YXIgcHJveHlXaW5kb3dNZXRob2RzID0gZ2xvYmFsU3RvcmUoXCJwcm94eVdpbmRvd01ldGhvZHNcIik7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kU3RvcmUuZ2V0T3JTZXQoc291cmNlLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSkpW2lkXSB8fCBwcm94eVdpbmRvd01ldGhvZHMuZ2V0KGlkKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmdW5jdGlvbl9zZXJpYWxpemVGdW5jdGlvbihkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwgX3JlZjMpIHtcbiAgICAgICAgICAgIG9uID0gKF9yZWYgPSB7XG4gICAgICAgICAgICAgICAgb246IF9yZWYzLm9uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IF9yZWYzLnNlbmRcbiAgICAgICAgICAgIH0pLm9uLCBzZW5kID0gX3JlZi5zZW5kLCBnbG9iYWxTdG9yZShcImJ1aWx0aW5MaXN0ZW5lcnNcIikuZ2V0T3JTZXQoXCJmdW5jdGlvbkNhbGxzXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb24oXCJwb3N0cm9ib3RfbWV0aG9kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBcIipcIlxuICAgICAgICAgICAgICAgIH0sIChmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gX3JlZjIuc291cmNlLCBvcmlnaW4gPSBfcmVmMi5vcmlnaW4sIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBkYXRhLmlkLCBuYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aCA9IGxvb2t1cE1ldGhvZChzb3VyY2UsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXRoKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBtZXRob2QgJ1wiICsgbmFtZSArIFwiJyB3aXRoIGlkOiBcIiArIGRhdGEuaWQgKyBcIiBpbiBcIiArIGdldERvbWFpbih3aW5kb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZFNvdXJjZSA9IG1ldGguc291cmNlLCBkb21haW4gPSBtZXRoLmRvbWFpbiwgdmFsID0gbWV0aC52YWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaERvbWFpbihkb21haW4sIG9yaWdpbikpIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCAnXCIgKyBkYXRhLm5hbWUgKyBcIicgZG9tYWluIFwiICsgSlNPTi5zdHJpbmdpZnkodXRpbF9pc1JlZ2V4KG1ldGguZG9tYWluKSA/IG1ldGguZG9tYWluLnNvdXJjZSA6IG1ldGguZG9tYWluKSArIFwiIGRvZXMgbm90IG1hdGNoIG9yaWdpbiBcIiArIG9yaWdpbiArIFwiIGluIFwiICsgZ2V0RG9tYWluKHdpbmRvdykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd19Qcm94eVdpbmRvdy5pc1Byb3h5V2luZG93KG1ldGhvZFNvdXJjZSkpIHJldHVybiBtZXRob2RTb3VyY2UubWF0Y2hXaW5kb3coc291cmNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgY2FsbCAnXCIgKyBkYXRhLm5hbWUgKyBcIicgZmFpbGVkIC0gcHJveHkgd2luZG93IGRvZXMgbm90IG1hdGNoIHNvdXJjZSBpbiBcIiArIGdldERvbWFpbih3aW5kb3cpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRhdGEuYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLm9uRXJyb3IpIHJldHVybiB2YWwub25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyci5zdGFjayAmJiAoZXJyLnN0YWNrID0gXCJSZW1vdGUgY2FsbCB0byBcIiArIG5hbWUgKyBcIihcIiArIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBhcmdzICYmIChhcmdzID0gW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlGcm9tKGFyZ3MpLm1hcCgoZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYXJnID8gXCInXCIgKyBhcmcgKyBcIidcIiA6IHZvaWQgMCA9PT0gYXJnID8gXCJ1bmRlZmluZWRcIiA6IG51bGwgPT09IGFyZyA/IFwibnVsbFwiIDogXCJib29sZWFuXCIgPT0gdHlwZW9mIGFyZyA/IGFyZy50b1N0cmluZygpIDogQXJyYXkuaXNBcnJheShhcmcpID8gXCJbIC4uLiBdXCIgOiBcIm9iamVjdFwiID09IHR5cGVvZiBhcmcgPyBcInsgLi4uIH1cIiA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYXJnID8gXCIoKSA9PiB7IC4uLiB9XCIgOiBcIjxcIiArIHR5cGVvZiBhcmcgKyBcIj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGRhdGEuYXJncykgKyBcIikgZmFpbGVkXFxuXFxuXCIgKyBlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBfcmVmLCBvbiwgc2VuZDtcbiAgICAgICAgICAgIHZhciBpZCA9IHZhbC5fX2lkX18gfHwgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uID0gd2luZG93X1Byb3h5V2luZG93LnVud3JhcChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHZhbC5fX25hbWVfXyB8fCB2YWwubmFtZSB8fCBrZXk7XG4gICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBuYW1lICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbmFtZS5pbmRleE9mICYmIDAgPT09IG5hbWUuaW5kZXhPZihcImFub255bW91czo6XCIpICYmIChuYW1lID0gbmFtZS5yZXBsYWNlKFwiYW5vbnltb3VzOjpcIiwga2V5ICsgXCI6OlwiKSk7XG4gICAgICAgICAgICBpZiAod2luZG93X1Byb3h5V2luZG93LmlzUHJveHlXaW5kb3coZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgYWRkTWV0aG9kKGlkLCB2YWwsIG5hbWUsIGRlc3RpbmF0aW9uLCBkb21haW4pO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmF3YWl0V2luZG93KCkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCB3aW4sIGRvbWFpbik7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIGFkZE1ldGhvZChpZCwgdmFsLCBuYW1lLCBkZXN0aW5hdGlvbiwgZG9tYWluKTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2VyaWFsaXplTWVzc2FnZShkZXN0aW5hdGlvbiwgZG9tYWluLCBvYmosIF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfc2VyaWFsaXplO1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZi5vbiwgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihvYmosIHNlcmlhbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdm9pZCAwID09PSBzZXJpYWxpemVycyAmJiAoc2VyaWFsaXplcnMgPSBkZWZhdWx0U2VyaWFsaXplcnMpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShvYmosIChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VyaWFsaXplZFR5cGUodGhpcykpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZGV0ZXJtaW5lVHlwZSh2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGUpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVyID0gc2VyaWFsaXplcnNbdHlwZV0gfHwgU0VSSUFMSVpFUlt0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIgPyBzZXJpYWxpemVyKHZhbCwga2V5KSA6IHZhbDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gcmVzdWx0ID8gXCJ1bmRlZmluZWRcIiA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0ob2JqLCAoKF9zZXJpYWxpemUgPSB7fSkucHJvbWlzZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBkb21haW4sIHZhbCwga2V5LCBfcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUeXBlKFwiY3Jvc3NfZG9tYWluX3phbGdvX3Byb21pc2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbjogZnVuY3Rpb25fc2VyaWFsaXplRnVuY3Rpb24oZGVzdGluYXRpb24sIGRvbWFpbiwgKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBfcmVmLm9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IF9yZWYuc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfShkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9zZXJpYWxpemUuZnVuY3Rpb24gPSBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbl9zZXJpYWxpemVGdW5jdGlvbihkZXN0aW5hdGlvbiwgZG9tYWluLCB2YWwsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9zZXJpYWxpemUub2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzV2luZG93KHZhbCkgfHwgd2luZG93X1Byb3h5V2luZG93LmlzUHJveHlXaW5kb3codmFsKSA/IHNlcmlhbGl6ZVR5cGUoXCJjcm9zc19kb21haW5fd2luZG93XCIsIHdpbmRvd19Qcm94eVdpbmRvdy5zZXJpYWxpemUodmFsLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KSkgOiB2YWw7XG4gICAgICAgICAgICB9LCBfc2VyaWFsaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlLCBfcmVmMikge1xuICAgICAgICAgICAgdmFyIF9kZXNlcmlhbGl6ZTtcbiAgICAgICAgICAgIHZhciBzZW5kID0gX3JlZjIuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzdHIsIGRlc2VyaWFsaXplcnMpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGRlc2VyaWFsaXplcnMgJiYgKGRlc2VyaWFsaXplcnMgPSBkZWZhdWx0RGVzZXJpYWxpemVycyk7XG4gICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHN0cikgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLCAoZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VyaWFsaXplZFR5cGUodGhpcykpIHJldHVybiB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NlcmlhbGl6ZWRUeXBlKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWwuX190eXBlX187XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbC5fX3ZhbF9fO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IGRldGVybWluZVR5cGUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVyID0gZGVzZXJpYWxpemVyc1t0eXBlXSB8fCBERVNFUklBTElaRVJbdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZXIgPyBkZXNlcmlhbGl6ZXIodmFsdWUsIGtleSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KG1lc3NhZ2UsICgoX2Rlc2VyaWFsaXplID0ge30pLmNyb3NzX2RvbWFpbl96YWxnb19wcm9taXNlID0gZnVuY3Rpb24oc2VyaWFsaXplZFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc291cmNlLCBvcmlnaW4sIF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2UoX3JlZjIudGhlbik7XG4gICAgICAgICAgICAgICAgfSgwLCAwLCBzZXJpYWxpemVkUHJvbWlzZSk7XG4gICAgICAgICAgICB9LCBfZGVzZXJpYWxpemUuY3Jvc3NfZG9tYWluX2Z1bmN0aW9uID0gZnVuY3Rpb24oc2VyaWFsaXplZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZSwgb3JpZ2luLCBfcmVmNCwgX3JlZjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX3JlZjQuaWQsIG5hbWUgPSBfcmVmNC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWY1LnNlbmQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnZXREZXNlcmlhbGl6ZWRGdW5jdGlvbiA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gb3B0cyAmJiAob3B0cyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyhzb3VyY2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmF3YWl0V2luZG93KCkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXRoID0gbG9va3VwTWV0aG9kKHdpbiwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0aCAmJiBtZXRoLnZhbCAhPT0gY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIpIHJldHVybiBtZXRoLnZhbC5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHdpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogZ2V0RG9tYWluKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2FyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJncyA9IFtdLnNsaWNlLmNhbGwoX2FyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmZpcmVBbmRGb3JnZXQgPyBzZW5kKHdpbiwgXCJwb3N0cm9ib3RfbWV0aG9kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBfYXJnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogc2VuZCh3aW4sIFwicG9zdHJvYm90X21ldGhvZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogX2FyZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlQW5kRm9yZ2V0OiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuX19uYW1lX18gPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuX19vcmlnaW5fXyA9IG9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyLl9fc291cmNlX18gPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc0RvbWFpbkZ1bmN0aW9uV3JhcHBlci5fX2lkX18gPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcm9zc0RvbWFpbkZ1bmN0aW9uV3JhcHBlcjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNyb3NzRG9tYWluRnVuY3Rpb25XcmFwcGVyID0gZ2V0RGVzZXJpYWxpemVkRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXIuZmlyZUFuZEZvcmdldCA9IGdldERlc2VyaWFsaXplZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NEb21haW5GdW5jdGlvbldyYXBwZXI7XG4gICAgICAgICAgICAgICAgfShzb3VyY2UsIG9yaWdpbiwgc2VyaWFsaXplZEZ1bmN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIF9kZXNlcmlhbGl6ZS5jcm9zc19kb21haW5fd2luZG93ID0gZnVuY3Rpb24oc2VyaWFsaXplZFdpbmRvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cuZGVzZXJpYWxpemUoc2VyaWFsaXplZFdpbmRvdywge1xuICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBfZGVzZXJpYWxpemUpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgU0VORF9NRVNTQUdFX1NUUkFURUdJRVMgPSB7fTtcbiAgICAgICAgU0VORF9NRVNTQUdFX1NUUkFURUdJRVMucG9zdHJvYm90X3Bvc3RfbWVzc2FnZSA9IGZ1bmN0aW9uKHdpbiwgc2VyaWFsaXplZE1lc3NhZ2UsIGRvbWFpbikge1xuICAgICAgICAgICAgMCA9PT0gZG9tYWluLmluZGV4T2YoXCJmaWxlOlwiKSAmJiAoZG9tYWluID0gXCIqXCIpO1xuICAgICAgICAgICAgd2luLnBvc3RNZXNzYWdlKHNlcmlhbGl6ZWRNZXNzYWdlLCBkb21haW4pO1xuICAgICAgICB9O1xuICAgICAgICBTRU5EX01FU1NBR0VfU1RSQVRFR0lFUy5wb3N0cm9ib3RfZ2xvYmFsID0gZnVuY3Rpb24od2luLCBzZXJpYWxpemVkTWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKCFmdW5jdGlvbih3aW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHdpbiA9IHdpbiB8fCB3aW5kb3cpLm5hdmlnYXRvci5tb2NrVXNlckFnZW50IHx8IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgfSh3aW5kb3cpLm1hdGNoKC9NU0lFfHJ2OjExfHRyaWRlbnR8ZWRnZVxcLzEyfGVkZ2VcXC8xMy9pKSkgdGhyb3cgbmV3IEVycm9yKFwiR2xvYmFsIG1lc3NhZ2luZyBub3QgbmVlZGVkIGZvciBicm93c2VyXCIpO1xuICAgICAgICAgICAgaWYgKCFpc1NhbWVEb21haW4od2luKSkgdGhyb3cgbmV3IEVycm9yKFwiUG9zdCBtZXNzYWdlIHRocm91Z2ggZ2xvYmFsIGRpc2FibGVkIGJldHdlZW4gZGlmZmVyZW50IGRvbWFpbiB3aW5kb3dzXCIpO1xuICAgICAgICAgICAgaWYgKCExICE9PSBpc1NhbWVUb3BXaW5kb3cod2luZG93LCB3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSB1c2UgZ2xvYmFsIHRvIGNvbW11bmljYXRlIGJldHdlZW4gdHdvIGRpZmZlcmVudCB3aW5kb3dzLCBub3QgYmV0d2VlbiBmcmFtZXNcIik7XG4gICAgICAgICAgICB2YXIgZm9yZWlnbkdsb2JhbCA9IGdsb2JhbF9nZXRHbG9iYWwod2luKTtcbiAgICAgICAgICAgIGlmICghZm9yZWlnbkdsb2JhbCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHBvc3RSb2JvdCBnbG9iYWwgb24gZm9yZWlnbiB3aW5kb3dcIik7XG4gICAgICAgICAgICBmb3JlaWduR2xvYmFsLnJlY2VpdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHdpbmRvdyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IGdldERvbWFpbigpLFxuICAgICAgICAgICAgICAgIGRhdGE6IHNlcmlhbGl6ZWRNZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gc2VuZF9zZW5kTWVzc2FnZSh3aW4sIGRvbWFpbiwgbWVzc2FnZSwgX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IF9yZWYyLm9uLCBzZW5kID0gX3JlZjIuc2VuZDtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21haW5CdWZmZXIgPSB3aW5kb3dTdG9yZSgpLmdldE9yU2V0KHdpbiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGRvbWFpbkJ1ZmZlci5idWZmZXIgPSBkb21haW5CdWZmZXIuYnVmZmVyIHx8IFtdO1xuICAgICAgICAgICAgICAgIGRvbWFpbkJ1ZmZlci5idWZmZXIucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBkb21haW5CdWZmZXIuZmx1c2ggPSBkb21haW5CdWZmZXIuZmx1c2ggfHwgcHJvbWlzZV9aYWxnb1Byb21pc2UuZmx1c2goKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93Q2xvc2VkKHdpbikpIHRocm93IG5ldyBFcnJvcihcIldpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVkTWVzc2FnZSA9IHNlcmlhbGl6ZU1lc3NhZ2Uod2luLCBkb21haW4sICgoX3JlZiA9IHt9KS5fX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fID0gZG9tYWluQnVmZmVyLmJ1ZmZlciB8fCBbXSwgXG4gICAgICAgICAgICAgICAgICAgIF9yZWYpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRvbWFpbkJ1ZmZlci5idWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJhdGVnaWVzID0gT2JqZWN0LmtleXMoU0VORF9NRVNTQUdFX1NUUkFURUdJRVMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHN0cmF0ZWdpZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmF0ZWd5TmFtZSA9IHN0cmF0ZWdpZXNbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VORF9NRVNTQUdFX1NUUkFURUdJRVNbc3RyYXRlZ3lOYW1lXSh3aW4sIHNlcmlhbGl6ZWRNZXNzYWdlLCBkb21haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gc3RyYXRlZ2llcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcIkFsbCBwb3N0LXJvYm90IG1lc3NhZ2luZyBzdHJhdGVnaWVzIGZhaWxlZDpcXG5cXG5cIiArIGVycm9ycy5tYXAoKGZ1bmN0aW9uKGVyciwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyBcIi4gXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlxcblxcblwiKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb21haW5CdWZmZXIuZmx1c2gudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkb21haW5CdWZmZXIuZmx1c2g7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2VMaXN0ZW5lcihoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RvcmUoXCJyZXNwb25zZUxpc3RlbmVyc1wiKS5nZXQoaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlUmVzcG9uc2VMaXN0ZW5lcihoYXNoKSB7XG4gICAgICAgICAgICBnbG9iYWxTdG9yZShcInJlc3BvbnNlTGlzdGVuZXJzXCIpLmRlbChoYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1Jlc3BvbnNlTGlzdGVuZXJFcnJvcmVkKGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdG9yZShcImVycm9yZWRSZXNwb25zZUxpc3RlbmVyc1wiKS5oYXMoaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmVxdWVzdExpc3RlbmVyKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLCB3aW4gPSBfcmVmLndpbiwgZG9tYWluID0gX3JlZi5kb21haW47XG4gICAgICAgICAgICB2YXIgcmVxdWVzdExpc3RlbmVycyA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdExpc3RlbmVyc1wiKTtcbiAgICAgICAgICAgIFwiKlwiID09PSB3aW4gJiYgKHdpbiA9IG51bGwpO1xuICAgICAgICAgICAgXCIqXCIgPT09IGRvbWFpbiAmJiAoZG9tYWluID0gbnVsbCk7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIk5hbWUgcmVxdWlyZWQgdG8gZ2V0IHJlcXVlc3QgbGlzdGVuZXJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwLCBfcmVmMyA9IFsgd2luLCBnZXRXaWxkY2FyZCgpIF07IF9pNCA8IF9yZWYzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgd2luUXVhbGlmaWVyID0gX3JlZjNbX2k0XTtcbiAgICAgICAgICAgICAgICBpZiAod2luUXVhbGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lTGlzdGVuZXJzID0gcmVxdWVzdExpc3RlbmVycy5nZXQod2luUXVhbGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW5MaXN0ZW5lcnMgPSBuYW1lTGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpbkxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW4gJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5MaXN0ZW5lcnNbZG9tYWluXSkgcmV0dXJuIGRvbWFpbkxpc3RlbmVyc1tkb21haW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluTGlzdGVuZXJzLl9fZG9tYWluX3JlZ2V4X18pIGZvciAodmFyIF9pNiA9IDAsIF9kb21haW5MaXN0ZW5lcnMkX19ETzIgPSBkb21haW5MaXN0ZW5lcnMuX19kb21haW5fcmVnZXhfXzsgX2k2IDwgX2RvbWFpbkxpc3RlbmVycyRfX0RPMi5sZW5ndGg7IF9pNisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RvbWFpbkxpc3RlbmVycyRfX0RPMyA9IF9kb21haW5MaXN0ZW5lcnMkX19ETzJbX2k2XSwgbGlzdGVuZXIgPSBfZG9tYWluTGlzdGVuZXJzJF9fRE8zLmxpc3RlbmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoRG9tYWluKF9kb21haW5MaXN0ZW5lcnMkX19ETzMucmVnZXgsIGRvbWFpbikpIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluTGlzdGVuZXJzW1wiKlwiXSkgcmV0dXJuIGRvbWFpbkxpc3RlbmVyc1tcIipcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChzb3VyY2UsIG9yaWdpbiwgbWVzc2FnZSwgX3JlZikge1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZi5vbiwgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgd2luOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgZG9tYWluOiBvcmlnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGxvZ05hbWUgPSBcInBvc3Ryb2JvdF9tZXRob2RcIiA9PT0gbWVzc2FnZS5uYW1lICYmIG1lc3NhZ2UuZGF0YSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBtZXNzYWdlLmRhdGEubmFtZSA/IG1lc3NhZ2UuZGF0YS5uYW1lICsgXCIoKVwiIDogbWVzc2FnZS5uYW1lO1xuICAgICAgICAgICAgZnVuY3Rpb24gc2VuZFJlc3BvbnNlKGFjaywgZGF0YSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuZmx1c2goKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmZpcmVBbmRGb3JnZXQgJiYgIWlzV2luZG93Q2xvc2VkKHNvdXJjZSkpIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZShzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1bmlxdWVJRCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogZ2V0RG9tYWluKHdpbmRvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IG1lc3NhZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZXNzYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNrOiBhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VuZCByZXNwb25zZSBtZXNzYWdlIGZhaWxlZCBmb3IgXCIgKyBsb2dOYW1lICsgXCIgaW4gXCIgKyBnZXREb21haW4oKSArIFwiXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5hbGwoWyBwcm9taXNlX1phbGdvUHJvbWlzZS5mbHVzaCgpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZS5maXJlQW5kRm9yZ2V0ICYmICFpc1dpbmRvd0Nsb3NlZChzb3VyY2UpKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZShzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVuaXF1ZUlEKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGdldERvbWFpbih3aW5kb3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9hY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IG1lc3NhZ2UuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lc3NhZ2UubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZW5kIGFjayBtZXNzYWdlIGZhaWxlZCBmb3IgXCIgKyBsb2dOYW1lICsgXCIgaW4gXCIgKyBnZXREb21haW4oKSArIFwiXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBoYW5kbGVyIGZvdW5kIGZvciBwb3N0IG1lc3NhZ2U6IFwiICsgbWVzc2FnZS5uYW1lICsgXCIgZnJvbSBcIiArIG9yaWdpbiArIFwiIGluIFwiICsgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hEb21haW4ob3B0aW9ucy5kb21haW4sIG9yaWdpbikpIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3Qgb3JpZ2luIFwiICsgb3JpZ2luICsgXCIgZG9lcyBub3QgbWF0Y2ggZG9tYWluIFwiICsgb3B0aW9ucy5kb21haW4udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJzdWNjZXNzXCIsIGRhdGEpO1xuICAgICAgICAgICAgfSksIChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJlcnJvclwiLCBudWxsLCBlcnJvcik7XG4gICAgICAgICAgICB9KSkgXSkudGhlbihzcmNfdXRpbF9ub29wKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oYW5kbGVFcnJvcikgcmV0dXJuIG9wdGlvbnMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQWNrKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVzcG9uc2VMaXN0ZW5lckVycm9yZWQobWVzc2FnZS5oYXNoKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBmb3VuZCBmb3IgcG9zdCBtZXNzYWdlIGFjayBmb3IgbWVzc2FnZTogXCIgKyBtZXNzYWdlLm5hbWUgKyBcIiBmcm9tIFwiICsgb3JpZ2luICsgXCIgaW4gXCIgKyB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaERvbWFpbihvcHRpb25zLmRvbWFpbiwgb3JpZ2luKSkgdGhyb3cgbmV3IEVycm9yKFwiQWNrIG9yaWdpbiBcIiArIG9yaWdpbiArIFwiIGRvZXMgbm90IG1hdGNoIGRvbWFpbiBcIiArIG9wdGlvbnMuZG9tYWluLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlICE9PSBvcHRpb25zLndpbikgdGhyb3cgbmV3IEVycm9yKFwiQWNrIHNvdXJjZSBkb2VzIG5vdCBtYXRjaCByZWdpc3RlcmVkIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmFjayA9ICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWlzUmVzcG9uc2VMaXN0ZW5lckVycm9yZWQobWVzc2FnZS5oYXNoKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0UmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBmb3VuZCBmb3IgcG9zdCBtZXNzYWdlIHJlc3BvbnNlIGZvciBtZXNzYWdlOiBcIiArIG1lc3NhZ2UubmFtZSArIFwiIGZyb20gXCIgKyBvcmlnaW4gKyBcIiBpbiBcIiArIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKG9wdGlvbnMuZG9tYWluLCBvcmlnaW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zZSBvcmlnaW4gXCIgKyBvcmlnaW4gKyBcIiBkb2VzIG5vdCBtYXRjaCBkb21haW4gXCIgKyAocGF0dGVybiA9IG9wdGlvbnMuZG9tYWluLCBcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHBhdHRlcm4pID8gXCIoXCIgKyBwYXR0ZXJuLmpvaW4oXCIgfCBcIikgKyBcIilcIiA6IGlzUmVnZXgocGF0dGVybikgPyBcIlJlZ0V4cChcIiArIHBhdHRlcm4udG9TdHJpbmcoKSA6IHBhdHRlcm4udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIHZhciBwYXR0ZXJuO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgIT09IG9wdGlvbnMud2luKSB0aHJvdyBuZXcgRXJyb3IoXCJSZXNwb25zZSBzb3VyY2UgZG9lcyBub3QgbWF0Y2ggcmVnaXN0ZXJlZCB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgZGVsZXRlUmVzcG9uc2VMaXN0ZW5lcihtZXNzYWdlLmhhc2gpO1xuICAgICAgICAgICAgICAgIFwiZXJyb3JcIiA9PT0gbWVzc2FnZS5hY2sgPyBvcHRpb25zLnByb21pc2UucmVqZWN0KG1lc3NhZ2UuZXJyb3IpIDogXCJzdWNjZXNzXCIgPT09IG1lc3NhZ2UuYWNrICYmIG9wdGlvbnMucHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlX3JlY2VpdmVNZXNzYWdlKGV2ZW50LCBfcmVmMikge1xuICAgICAgICAgICAgdmFyIG9uID0gX3JlZjIub24sIHNlbmQgPSBfcmVmMi5zZW5kO1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVkTWVzc2FnZXMgPSBnbG9iYWxTdG9yZShcInJlY2VpdmVkTWVzc2FnZXNcIik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93IHx8IHdpbmRvdy5jbG9zZWQgfHwgIWV2ZW50LnNvdXJjZSkgcmV0dXJuO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2ZW50LnNvdXJjZSwgb3JpZ2luID0gZXZlbnQub3JpZ2luO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gZnVuY3Rpb24obWVzc2FnZSwgc291cmNlLCBvcmlnaW4sIF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgb24gPSBfcmVmLm9uLCBzZW5kID0gX3JlZi5zZW5kO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRNZXNzYWdlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZE1lc3NhZ2UgPSBkZXNlcmlhbGl6ZU1lc3NhZ2Uoc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZE1lc3NhZ2UgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgcGFyc2VkTWVzc2FnZSAmJiBudWxsICE9PSBwYXJzZWRNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJzZU1lc3NhZ2VzID0gcGFyc2VkTWVzc2FnZS5fX3Bvc3Rfcm9ib3RfMTBfMF80Ml9fO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZU1lc3NhZ2VzKSkgcmV0dXJuIHBhcnNlTWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShldmVudC5kYXRhLCBzb3VyY2UsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcykge1xuICAgICAgICAgICAgICAgIG1hcmtXaW5kb3dLbm93bihzb3VyY2UpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1lc3NhZ2VzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc1tfaTJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZWRNZXNzYWdlcy5oYXMobWVzc2FnZS5pZCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRNZXNzYWdlcy5zZXQobWVzc2FnZS5pZCwgITApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQoc291cmNlKSAmJiAhbWVzc2FnZS5maXJlQW5kRm9yZ2V0KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIDAgPT09IG1lc3NhZ2Uub3JpZ2luLmluZGV4T2YoXCJmaWxlOlwiKSAmJiAob3JpZ2luID0gXCJmaWxlOi8vXCIpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXF1ZXN0XCIgPT09IG1lc3NhZ2UudHlwZSA/IGhhbmRsZVJlcXVlc3Qoc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBcInBvc3Ryb2JvdF9tZXNzYWdlX3Jlc3BvbnNlXCIgPT09IG1lc3NhZ2UudHlwZSA/IGhhbmRsZVJlc3BvbnNlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSA6IFwicG9zdHJvYm90X21lc3NhZ2VfYWNrXCIgPT09IG1lc3NhZ2UudHlwZSAmJiBoYW5kbGVBY2soc291cmNlLCBvcmlnaW4sIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbl9vbihuYW1lLCBvcHRpb25zLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG5hbWVcIik7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30pKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBoYW5kbGVyXCIpO1xuICAgICAgICAgICAgKG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9KS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIG9wdGlvbnMuaGFuZGxlciA9IGhhbmRsZXIgfHwgb3B0aW9ucy5oYW5kbGVyO1xuICAgICAgICAgICAgdmFyIHdpbiA9IG9wdGlvbnMud2luZG93O1xuICAgICAgICAgICAgdmFyIGRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3RMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZFJlcXVlc3RMaXN0ZW5lcihfcmVmNCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWY0Lm5hbWUsIHdpbiA9IF9yZWY0LndpbiwgZG9tYWluID0gX3JlZjQuZG9tYWluO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0TGlzdGVuZXJzID0gd2luZG93U3RvcmUoXCJyZXF1ZXN0TGlzdGVuZXJzXCIpO1xuICAgICAgICAgICAgICAgIGlmICghbmFtZSB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiBuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJOYW1lIHJlcXVpcmVkIHRvIGFkZCByZXF1ZXN0IGxpc3RlbmVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyc0NvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2k4ID0gMCwgX3dpbjIgPSB3aW47IF9pOCA8IF93aW4yLmxlbmd0aDsgX2k4KyspIGxpc3RlbmVyc0NvbGxlY3Rpb24ucHVzaChhZGRSZXF1ZXN0TGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luOiBfd2luMltfaThdXG4gICAgICAgICAgICAgICAgICAgIH0sIGxpc3RlbmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMTAgPSAwOyBfaTEwIDwgbGlzdGVuZXJzQ29sbGVjdGlvbi5sZW5ndGg7IF9pMTArKykgbGlzdGVuZXJzQ29sbGVjdGlvbltfaTEwXS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpc3RlbmVyc0NvbGxlY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxMiA9IDAsIF9kb21haW4yID0gZG9tYWluOyBfaTEyIDwgX2RvbWFpbjIubGVuZ3RoOyBfaTEyKyspIF9saXN0ZW5lcnNDb2xsZWN0aW9uLnB1c2goYWRkUmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW46IHdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbjogX2RvbWFpbjJbX2kxMl1cbiAgICAgICAgICAgICAgICAgICAgfSwgbGlzdGVuZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kxNCA9IDA7IF9pMTQgPCBfbGlzdGVuZXJzQ29sbGVjdGlvbi5sZW5ndGg7IF9pMTQrKykgX2xpc3RlbmVyc0NvbGxlY3Rpb25bX2kxNF0uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ0xpc3RlbmVyID0gZ2V0UmVxdWVzdExpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luICYmIFwiKlwiICE9PSB3aW4gfHwgKHdpbiA9IGdldFdpbGRjYXJkKCkpO1xuICAgICAgICAgICAgICAgIGRvbWFpbiA9IGRvbWFpbiB8fCBcIipcIjtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdMaXN0ZW5lcikgdGhyb3cgd2luICYmIGRvbWFpbiA/IG5ldyBFcnJvcihcIlJlcXVlc3QgbGlzdGVuZXIgYWxyZWFkeSBleGlzdHMgZm9yIFwiICsgbmFtZSArIFwiIG9uIGRvbWFpbiBcIiArIGRvbWFpbi50b1N0cmluZygpICsgXCIgZm9yIFwiICsgKHdpbiA9PT0gZ2V0V2lsZGNhcmQoKSA/IFwid2lsZGNhcmRcIiA6IFwic3BlY2lmaWVkXCIpICsgXCIgd2luZG93XCIpIDogd2luID8gbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lICsgXCIgZm9yIFwiICsgKHdpbiA9PT0gZ2V0V2lsZGNhcmQoKSA/IFwid2lsZGNhcmRcIiA6IFwic3BlY2lmaWVkXCIpICsgXCIgd2luZG93XCIpIDogZG9tYWluID8gbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lICsgXCIgb24gZG9tYWluIFwiICsgZG9tYWluLnRvU3RyaW5nKCkpIDogbmV3IEVycm9yKFwiUmVxdWVzdCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0cyBmb3IgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZUxpc3RlbmVycyA9IHJlcXVlc3RMaXN0ZW5lcnMuZ2V0T3JTZXQod2luLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdmFyIGRvbWFpbkxpc3RlbmVycyA9IHV0aWxfZ2V0T3JTZXQobmFtZUxpc3RlbmVycywgbmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBzdHJEb21haW4gPSBkb21haW4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhMaXN0ZW5lcnM7XG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4TGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgdXRpbF9pc1JlZ2V4KGRvbWFpbikgPyAocmVnZXhMaXN0ZW5lcnMgPSB1dGlsX2dldE9yU2V0KGRvbWFpbkxpc3RlbmVycywgXCJfX2RvbWFpbl9yZWdleF9fXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH0pKSkucHVzaChyZWdleExpc3RlbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICByZWdleDogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXJcbiAgICAgICAgICAgICAgICB9KSA6IGRvbWFpbkxpc3RlbmVyc1tzdHJEb21haW5dID0gbGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkb21haW5MaXN0ZW5lcnNbc3RyRG9tYWluXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdleExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhMaXN0ZW5lcnMuc3BsaWNlKHJlZ2V4TGlzdGVuZXJzLmluZGV4T2YocmVnZXhMaXN0ZW5lciwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4TGlzdGVuZXJzLmxlbmd0aCB8fCBkZWxldGUgZG9tYWluTGlzdGVuZXJzLl9fZG9tYWluX3JlZ2V4X187XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkb21haW5MaXN0ZW5lcnMpLmxlbmd0aCB8fCBkZWxldGUgbmFtZUxpc3RlbmVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbiAmJiAhT2JqZWN0LmtleXMobmFtZUxpc3RlbmVycykubGVuZ3RoICYmIHJlcXVlc3RMaXN0ZW5lcnMuZGVsKHdpbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICB3aW46IHdpbixcbiAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpblxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG9wdGlvbnMuaGFuZGxlcixcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcjogb3B0aW9ucy5lcnJvckhhbmRsZXIgfHwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpbmRvdzogd2luLFxuICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluIHx8IFwiKlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0TGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VuZF9zZW5kID0gZnVuY3Rpb24gc2VuZCh3aW4sIG5hbWUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBkb21haW5NYXRjaGVyID0gKG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9KS5kb21haW4gfHwgXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IC0xO1xuICAgICAgICAgICAgdmFyIGNoaWxkVGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCA1ZTM7XG4gICAgICAgICAgICB2YXIgZmlyZUFuZEZvcmdldCA9IG9wdGlvbnMuZmlyZUFuZEZvcmdldCB8fCAhMTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICFmdW5jdGlvbihuYW1lLCB3aW4sIGRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW4gJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZG9tYWluICYmICFBcnJheS5pc0FycmF5KGRvbWFpbikgJiYgIXV0aWxfaXNSZWdleChkb21haW4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FuIG5vdCBzZW5kIFwiICsgbmFtZSArIFwiLiBFeHBlY3RlZCBkb21haW4gXCIgKyBKU09OLnN0cmluZ2lmeShkb21haW4pICsgXCIgdG8gYmUgYSBzdHJpbmcsIGFycmF5LCBvciByZWdleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2luZG93Q2xvc2VkKHdpbikpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3Qgc2VuZCBcIiArIG5hbWUgKyBcIi4gVGFyZ2V0IHdpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgfShuYW1lLCB3aW4sIGRvbWFpbk1hdGNoZXIpO1xuICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWxQYXJlbnQgPSBnZXRBbmNlc3RvcihjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3R1YWxQYXJlbnQpIHJldHVybiBhY3R1YWxQYXJlbnQgPT09IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkID09PSBwYXJlbnQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFRvcChjaGlsZCkgPT09IGNoaWxkKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMTUgPSAwLCBfZ2V0RnJhbWVzOCA9IGdldEZyYW1lcyhwYXJlbnQpOyBfaTE1IDwgX2dldEZyYW1lczgubGVuZ3RoOyBfaTE1KyspIGlmIChfZ2V0RnJhbWVzOFtfaTE1XSA9PT0gY2hpbGQpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH0od2luZG93LCB3aW4pKSByZXR1cm4gZnVuY3Rpb24od2luLCB0aW1lb3V0LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdGltZW91dCAmJiAodGltZW91dCA9IDVlMyk7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gbmFtZSAmJiAobmFtZSA9IFwiV2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1N0b3JlKFwiaGVsbG9Qcm9taXNlc1wiKS5nZXRPclNldCh3aW4sIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KHdpbik7XG4gICAgICAgICAgICAgICAgICAgIC0xICE9PSB0aW1lb3V0ICYmIChwcm9taXNlID0gcHJvbWlzZS50aW1lb3V0KHRpbWVvdXQsIG5ldyBFcnJvcihuYW1lICsgXCIgZGlkIG5vdCBsb2FkIGFmdGVyIFwiICsgdGltZW91dCArIFwibXNcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgfSh3aW4sIGNoaWxkVGltZW91dCk7XG4gICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oX3RlbXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24od2luLCB0YXJnZXREb21haW4sIGFjdHVhbERvbWFpbiwgX3JlZikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VuZCA9IF9yZWYuc2VuZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdGFyZ2V0RG9tYWluID8gdGFyZ2V0RG9tYWluIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsRG9tYWluIHx8IHNheUhlbGxvKHdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmRvbWFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24obm9ybWFsaXplZERvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hEb21haW4odGFyZ2V0RG9tYWluLCB0YXJnZXREb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gXCIgKyBzdHJpbmdpZnkodGFyZ2V0RG9tYWluKSArIFwiIGRvZXMgbm90IG1hdGNoIFwiICsgc3RyaW5naWZ5KHRhcmdldERvbWFpbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkRG9tYWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSh3aW4sIGRvbWFpbk1hdGNoZXIsICh2b2lkIDAgPT09IF90ZW1wID8ge30gOiBfdGVtcCkuZG9tYWluLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbih0YXJnZXREb21haW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gdGFyZ2V0RG9tYWluO1xuICAgICAgICAgICAgICAgIHZhciBsb2dOYW1lID0gXCJwb3N0cm9ib3RfbWV0aG9kXCIgPT09IG5hbWUgJiYgZGF0YSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBkYXRhLm5hbWUgPyBkYXRhLm5hbWUgKyBcIigpXCIgOiBuYW1lO1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHByb21pc2VfWmFsZ29Qcm9taXNlO1xuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gbmFtZSArIFwiX1wiICsgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcmVBbmRGb3JnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlTGlzdGVuZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luOiB3aW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGhhc2gsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTdG9yZShcInJlc3BvbnNlTGlzdGVuZXJzXCIpLnNldChoYXNoLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH0oaGFzaCwgcmVzcG9uc2VMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXFQcm9taXNlcyA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdFByb21pc2VzXCIpLmdldE9yU2V0KHdpbiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuY2F0Y2goKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTdG9yZShcImVycm9yZWRSZXNwb25zZUxpc3RlbmVyc1wiKS5zZXQoaGFzaCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShoYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlc3BvbnNlTGlzdGVuZXIoaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsQWNrVGltZW91dCA9IGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1N0b3JlKFwia25vd25XaW5kb3dzXCIpLmdldCh3aW4sICExKTtcbiAgICAgICAgICAgICAgICAgICAgfSh3aW4pID8gMWU0IDogMmUzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxSZXNUaW1lb3V0ID0gcmVzcG9uc2VUaW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNrVGltZW91dCA9IHRvdGFsQWNrVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc1RpbWVvdXQgPSB0b3RhbFJlc1RpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHNhZmVJbnRlcnZhbCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQod2luKSkgcmV0dXJuIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIldpbmRvdyBjbG9zZWQgZm9yIFwiICsgbmFtZSArIFwiIGJlZm9yZSBcIiArIChyZXNwb25zZUxpc3RlbmVyLmFjayA/IFwicmVzcG9uc2VcIiA6IFwiYWNrXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VMaXN0ZW5lci5jYW5jZWxsZWQpIHJldHVybiBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSZXNwb25zZSBsaXN0ZW5lciB3YXMgY2FuY2VsbGVkIGZvciBcIiArIG5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFja1RpbWVvdXQgPSBNYXRoLm1heChhY2tUaW1lb3V0IC0gNTAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSByZXNUaW1lb3V0ICYmIChyZXNUaW1lb3V0ID0gTWF0aC5tYXgocmVzVGltZW91dCAtIDUwMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlTGlzdGVuZXIuYWNrIHx8IDAgIT09IGFja1RpbWVvdXQgPyAwID09PSByZXNUaW1lb3V0ID8gcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZm9yIHBvc3RNZXNzYWdlIFwiICsgbG9nTmFtZSArIFwiIGluIFwiICsgZ2V0RG9tYWluKCkgKyBcIiBpbiBcIiArIHRvdGFsUmVzVGltZW91dCArIFwibXNcIikpIDogdm9pZCAwIDogcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYWNrIGZvciBwb3N0TWVzc2FnZSBcIiArIGxvZ05hbWUgKyBcIiBpbiBcIiArIGdldERvbWFpbigpICsgXCIgaW4gXCIgKyB0b3RhbEFja1RpbWVvdXQgKyBcIm1zXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuZmluYWxseSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcVByb21pc2VzLnNwbGljZShyZXFQcm9taXNlcy5pbmRleE9mKHByb21pc2UsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZF9zZW5kTWVzc2FnZSh3aW4sIGRvbWFpbiwge1xuICAgICAgICAgICAgICAgICAgICBpZDogdW5pcXVlSUQoKSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBnZXREb21haW4od2luZG93KSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwb3N0cm9ib3RfbWVzc2FnZV9yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZpcmVBbmRGb3JnZXQ6IGZpcmVBbmRGb3JnZXRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiBvbl9vbixcbiAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyZUFuZEZvcmdldCA/IHByb21pc2UucmVzb2x2ZSgpIDogcHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZW5kIHJlcXVlc3QgbWVzc2FnZSBmYWlsZWQgZm9yIFwiICsgbG9nTmFtZSArIFwiIGluIFwiICsgZ2V0RG9tYWluKCkgKyBcIlxcblxcblwiICsgc3RyaW5naWZ5RXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBzZXR1cF9zZXJpYWxpemVNZXNzYWdlKGRlc3RpbmF0aW9uLCBkb21haW4sIG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZU1lc3NhZ2UoZGVzdGluYXRpb24sIGRvbWFpbiwgb2JqLCB7XG4gICAgICAgICAgICAgICAgb246IG9uX29uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBfZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzZXJpYWxpemVNZXNzYWdlKHNvdXJjZSwgb3JpZ2luLCBtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgb246IG9uX29uLFxuICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBfdG9Qcm94eVdpbmRvdyh3aW4pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dfUHJveHlXaW5kb3cudG9Qcm94eVdpbmRvdyh3aW4sIHtcbiAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHdpbikge1xuICAgICAgICAgICAgdm9pZCAwID09PSB3aW4gJiYgKHdpbiA9IHdpbmRvdyk7XG4gICAgICAgICAgICBpZiAoIWlzU2FtZURvbWFpbih3aW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGdldCBnbG9iYWwgZm9yIHdpbmRvdyBvbiBkaWZmZXJlbnQgZG9tYWluXCIpO1xuICAgICAgICAgICAgd2luLl9fem9pZF85XzBfNjNfXyB8fCAod2luLl9fem9pZF85XzBfNjNfXyA9IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB3aW4uX196b2lkXzlfMF82M19fO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFByb3h5T2JqZWN0KG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb3VyY2UgJiYgX3RoaXMuc291cmNlICE9PSB3aW5kb3cpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgY2FsbCBnZXQgb24gcHJveHkgb2JqZWN0IGZyb20gYSByZW1vdGUgd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFBST1BfVFlQRSA9IHtcbiAgICAgICAgICAgIFNUUklORzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIE9CSkVDVDogXCJvYmplY3RcIixcbiAgICAgICAgICAgIEZVTkNUSU9OOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICBCT09MRUFOOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIE5VTUJFUjogXCJudW1iZXJcIixcbiAgICAgICAgICAgIEFSUkFZOiBcImFycmF5XCJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIFBST1BfU0VSSUFMSVpBVElPTiA9IHtcbiAgICAgICAgICAgIEpTT046IFwianNvblwiLFxuICAgICAgICAgICAgRE9USUZZOiBcImRvdGlmeVwiLFxuICAgICAgICAgICAgQkFTRTY0OiBcImJhc2U2NFwiXG4gICAgICAgIH07XG4gICAgICAgIHZhciBDT05URVhUID0gV0lORE9XX1RZUEU7XG4gICAgICAgIHZhciBFVkVOVCA9IHtcbiAgICAgICAgICAgIFJFTkRFUjogXCJ6b2lkLXJlbmRlclwiLFxuICAgICAgICAgICAgUkVOREVSRUQ6IFwiem9pZC1yZW5kZXJlZFwiLFxuICAgICAgICAgICAgRElTUExBWTogXCJ6b2lkLWRpc3BsYXlcIixcbiAgICAgICAgICAgIEVSUk9SOiBcInpvaWQtZXJyb3JcIixcbiAgICAgICAgICAgIENMT1NFOiBcInpvaWQtY2xvc2VcIixcbiAgICAgICAgICAgIERFU1RST1k6IFwiem9pZC1kZXN0cm95XCIsXG4gICAgICAgICAgICBQUk9QUzogXCJ6b2lkLXByb3BzXCIsXG4gICAgICAgICAgICBSRVNJWkU6IFwiem9pZC1yZXNpemVcIixcbiAgICAgICAgICAgIEZPQ1VTOiBcInpvaWQtZm9jdXNcIlxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemVDaGlsZFByb3AocHJvcHNEZWYsIHByb3BzLCBrZXksIHZhbHVlLCBoZWxwZXJzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzRGVmLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHByb3AuY2hpbGREZWNvcmF0ZSA/IHByb3AuY2hpbGREZWNvcmF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHVpZDogaGVscGVycy51aWQsXG4gICAgICAgICAgICAgICAgY2xvc2U6IGhlbHBlcnMuY2xvc2UsXG4gICAgICAgICAgICAgICAgZm9jdXM6IGhlbHBlcnMuZm9jdXMsXG4gICAgICAgICAgICAgICAgb25FcnJvcjogaGVscGVycy5vbkVycm9yLFxuICAgICAgICAgICAgICAgIG9uUHJvcHM6IGhlbHBlcnMub25Qcm9wcyxcbiAgICAgICAgICAgICAgICByZXNpemU6IGhlbHBlcnMucmVzaXplLFxuICAgICAgICAgICAgICAgIGdldFBhcmVudDogaGVscGVycy5nZXRQYXJlbnQsXG4gICAgICAgICAgICAgICAgZ2V0UGFyZW50RG9tYWluOiBoZWxwZXJzLmdldFBhcmVudERvbWFpbixcbiAgICAgICAgICAgICAgICBzaG93OiBoZWxwZXJzLnNob3csXG4gICAgICAgICAgICAgICAgaGlkZTogaGVscGVycy5oaWRlXG4gICAgICAgICAgICB9KSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQ2hpbGRXaW5kb3dOYW1lKHdpbmRvd05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVNZW1vaXplKHBhcnNlQ2hpbGRXaW5kb3dOYW1lLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dOYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJObyB3aW5kb3cgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgX3dpbmRvd05hbWUkc3BsaXQgPSB3aW5kb3dOYW1lLnNwbGl0KFwiX19cIiksIHpvaWRjb21wID0gX3dpbmRvd05hbWUkc3BsaXRbMV0sIG5hbWUgPSBfd2luZG93TmFtZSRzcGxpdFsyXSwgZW5jb2RlZFBheWxvYWQgPSBfd2luZG93TmFtZSRzcGxpdFszXTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ6b2lkXCIgIT09IHpvaWRjb21wKSB0aHJvdyBuZXcgRXJyb3IoXCJXaW5kb3cgbm90IHJlbmRlcmVkIGJ5IHpvaWQgLSBnb3QgXCIgKyB6b2lkY29tcCk7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW1lKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBjb21wb25lbnQgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuY29kZWRQYXlsb2FkKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBlbmNvZGVkIHBheWxvYWRcIik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBhdG9iKSByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFtdLm1hcC5jYWxsKGF0b2Ioc3RyKSwgKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIlXCIgKyAoXCIwMFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEJ1ZmZlcikgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0ciwgXCJiYXNlNjRcIikudG9TdHJpbmcoXCJ1dGY4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBmaW5kIHdpbmRvdy5hdG9iIG9yIEJ1ZmZlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfShlbmNvZGVkUGF5bG9hZCkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGRlY29kZSB3aW5kb3cgbmFtZSBwYXlsb2FkOiBcIiArIGVuY29kZWRQYXlsb2FkICsgXCI6IFwiICsgc3RyaW5naWZ5RXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIFsgd2luZG93TmFtZSBdKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRDaGlsZFBheWxvYWQoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUNoaWxkV2luZG93TmFtZSh3aW5kb3cubmFtZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hpbGRfZm9jdXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGlsZF9kZXN0cm95KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHJvcHNfZ2V0UXVlcnlQYXJhbShwcm9wLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBwcm9wLnF1ZXJ5UGFyYW0gPyBwcm9wLnF1ZXJ5UGFyYW0oe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9KSA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHByb3AucXVlcnlQYXJhbSA/IHByb3AucXVlcnlQYXJhbSA6IGtleTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRRdWVyeVZhbHVlKHByb3AsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHByb3AucXVlcnlWYWx1ZSAmJiBpc0RlZmluZWQodmFsdWUpID8gcHJvcC5xdWVyeVZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJlbnRDb21wb25lbnQob3B0aW9ucywgb3ZlcnJpZGVzLCBwYXJlbnRXaW4pIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gb3ZlcnJpZGVzICYmIChvdmVycmlkZXMgPSB7fSk7XG4gICAgICAgICAgICB2b2lkIDAgPT09IHBhcmVudFdpbiAmJiAocGFyZW50V2luID0gd2luZG93KTtcbiAgICAgICAgICAgIHZhciBwcm9wc0RlZiA9IG9wdGlvbnMucHJvcHNEZWYsIGNvbnRhaW5lclRlbXBsYXRlID0gb3B0aW9ucy5jb250YWluZXJUZW1wbGF0ZSwgcHJlcmVuZGVyVGVtcGxhdGUgPSBvcHRpb25zLnByZXJlbmRlclRlbXBsYXRlLCB0YWcgPSBvcHRpb25zLnRhZywgbmFtZSA9IG9wdGlvbnMubmFtZSwgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcywgZGltZW5zaW9ucyA9IG9wdGlvbnMuZGltZW5zaW9ucywgYXV0b1Jlc2l6ZSA9IG9wdGlvbnMuYXV0b1Jlc2l6ZSwgdXJsID0gb3B0aW9ucy51cmwsIGRvbWFpbk1hdGNoID0gb3B0aW9ucy5kb21haW47XG4gICAgICAgICAgICB2YXIgaW5pdFByb21pc2UgPSBuZXcgcHJvbWlzZV9aYWxnb1Byb21pc2U7XG4gICAgICAgICAgICB2YXIgaGFuZGxlZEVycm9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIGNsZWFuID0gY2xlYW51cCgpO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgICAgICB2YXIgaW50ZXJuYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG92ZXJyaWRlcy5ldmVudCA/IG92ZXJyaWRlcy5ldmVudCA6ICh0cmlnZ2VyZWQgPSB7fSwgaGFuZGxlcnMgPSB7fSwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBoYW5kbGVyc1tldmVudE5hbWVdID0gaGFuZGxlcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckxpc3Quc3BsaWNlKGhhbmRsZXJMaXN0LmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLm9uKGV2ZW50TmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBoYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbihfaTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJMaXN0W19pMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaGFuZGxlckxpc3QubGVuZ3RoOyBfaTIrKykgX2xvb3AoX2kyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uY2U6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcmVkW2V2ZW50TmFtZV0pIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZFtldmVudE5hbWVdID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmFwcGx5KHRoaXMsIFsgZXZlbnROYW1lIF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyZWQsIGhhbmRsZXJzO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gb3ZlcnJpZGVzLnByb3BzID8gb3ZlcnJpZGVzLnByb3BzIDoge307XG4gICAgICAgICAgICB2YXIgY3VycmVudFByb3h5V2luO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQcm94eUNvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbXBvbmVudDtcbiAgICAgICAgICAgIHZhciBvbkVycm9yT3ZlcnJpZGUgPSBvdmVycmlkZXMub25FcnJvcjtcbiAgICAgICAgICAgIHZhciBnZXRQcm94eUNvbnRhaW5lck92ZXJyaWRlID0gb3ZlcnJpZGVzLmdldFByb3h5Q29udGFpbmVyO1xuICAgICAgICAgICAgdmFyIHNob3dPdmVycmlkZSA9IG92ZXJyaWRlcy5zaG93O1xuICAgICAgICAgICAgdmFyIGhpZGVPdmVycmlkZSA9IG92ZXJyaWRlcy5oaWRlO1xuICAgICAgICAgICAgdmFyIGNsb3NlT3ZlcnJpZGUgPSBvdmVycmlkZXMuY2xvc2U7XG4gICAgICAgICAgICB2YXIgcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPSBvdmVycmlkZXMucmVuZGVyQ29udGFpbmVyO1xuICAgICAgICAgICAgdmFyIGdldFByb3h5V2luZG93T3ZlcnJpZGUgPSBvdmVycmlkZXMuZ2V0UHJveHlXaW5kb3c7XG4gICAgICAgICAgICB2YXIgc2V0UHJveHlXaW5PdmVycmlkZSA9IG92ZXJyaWRlcy5zZXRQcm94eVdpbjtcbiAgICAgICAgICAgIHZhciBvcGVuRnJhbWVPdmVycmlkZSA9IG92ZXJyaWRlcy5vcGVuRnJhbWU7XG4gICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlckZyYW1lT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlblByZXJlbmRlckZyYW1lO1xuICAgICAgICAgICAgdmFyIHByZXJlbmRlck92ZXJyaWRlID0gb3ZlcnJpZGVzLnByZXJlbmRlcjtcbiAgICAgICAgICAgIHZhciBvcGVuT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlbjtcbiAgICAgICAgICAgIHZhciBvcGVuUHJlcmVuZGVyT3ZlcnJpZGUgPSBvdmVycmlkZXMub3BlblByZXJlbmRlcjtcbiAgICAgICAgICAgIHZhciB3YXRjaEZvclVubG9hZE92ZXJyaWRlID0gb3ZlcnJpZGVzLndhdGNoRm9yVW5sb2FkO1xuICAgICAgICAgICAgdmFyIGdldEludGVybmFsU3RhdGVPdmVycmlkZSA9IG92ZXJyaWRlcy5nZXRJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgICAgdmFyIHNldEludGVybmFsU3RhdGVPdmVycmlkZSA9IG92ZXJyaWRlcy5zZXRJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgICAgdmFyIGdldFByb3BzRm9yQ2hpbGQgPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCAmJiAhMSA9PT0gcHJvcC5zZW5kVG9DaGlsZCB8fCBwcm9wICYmIHByb3Auc2FtZURvbWFpbiAmJiAhbWF0Y2hEb21haW4oZG9tYWluLCBnZXREb21haW4od2luZG93KSkgfHwgKHJlc3VsdFtrZXldID0gcHJvcHNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGVPdmVycmlkZSA/IGdldEludGVybmFsU3RhdGVPdmVycmlkZSgpIDogaW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHNldEludGVybmFsU3RhdGUgPSBmdW5jdGlvbihuZXdJbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnRlcm5hbFN0YXRlT3ZlcnJpZGUgPyBzZXRJbnRlcm5hbFN0YXRlT3ZlcnJpZGUobmV3SW50ZXJuYWxTdGF0ZSkgOiBpbnRlcm5hbFN0YXRlID0gX2V4dGVuZHMoe30sIGludGVybmFsU3RhdGUsIG5ld0ludGVybmFsU3RhdGUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0UHJveHlXaW5kb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlXaW5kb3dPdmVycmlkZSA/IGdldFByb3h5V2luZG93T3ZlcnJpZGUoKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dQcm9wID0gcHJvcHMud2luZG93O1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm94eVdpbiA9IHNldHVwX3RvUHJveHlXaW5kb3cod2luZG93UHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Byb3AuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3dfUHJveHlXaW5kb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZDogc2VuZF9zZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0UHJveHlDb250YWluZXIgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlDb250YWluZXJPdmVycmlkZSA/IGdldFByb3h5Q29udGFpbmVyT3ZlcnJpZGUoY29udGFpbmVyKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50UmVhZHkoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpc1NoYWRvd0VsZW1lbnQoY29udGFpbmVyRWxlbWVudCkgJiYgKGNvbnRhaW5lckVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93SG9zdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93Um9vdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZWxlbWVudC5wYXJlbnROb2RlOyApIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NoYWRvd0VsZW1lbnQoZWxlbWVudCkpIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QuaG9zdCkgcmV0dXJuIHNoYWRvd1Jvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYWRvd0hvc3QpIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXMgbm90IGluIHNoYWRvdyBkb21cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaGFkb3dFbGVtZW50KHNoYWRvd0hvc3QpKSB0aHJvdyBuZXcgRXJyb3IoXCJIb3N0IGVsZW1lbnQgaXMgYWxzbyBpbiBzaGFkb3cgZG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsb3ROYW1lID0gXCJzaGFkb3ctc2xvdC1cIiArIHVuaXF1ZUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHNsb3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xvdFByb3ZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm92aWRlci5zZXRBdHRyaWJ1dGUoXCJzbG90XCIsIHNsb3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0hvc3QuYXBwZW5kQ2hpbGQoc2xvdFByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbG90UHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgIH0oY29udGFpbmVyRWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJveHlPYmplY3QoY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzZXRQcm94eVdpbiA9IGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFByb3h5V2luT3ZlcnJpZGUgPyBzZXRQcm94eVdpbk92ZXJyaWRlKHByb3h5V2luKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm94eVdpbiA9IHByb3h5V2luO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG93T3ZlcnJpZGUgPyBzaG93T3ZlcnJpZGUoKSA6IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZTogc2V0SW50ZXJuYWxTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnQ6IGN1cnJlbnRQcm94eUNvbnRhaW5lciA/IGN1cnJlbnRQcm94eUNvbnRhaW5lci5nZXQoKS50aGVuKHNob3dFbGVtZW50KSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KS50aGVuKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBoaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpZGVPdmVycmlkZSA/IGhpZGVPdmVycmlkZSgpIDogcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlOiBzZXRJbnRlcm5hbFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6ICExXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudDogY3VycmVudFByb3h5Q29udGFpbmVyID8gY3VycmVudFByb3h5Q29udGFpbmVyLmdldCgpLnRoZW4oaGlkZUVsZW1lbnQpIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldFVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHVybCA/IHVybCh7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICAgICAgICAgIH0pIDogdXJsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYXR0cmlidXRlcyA/IGF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICAgICAgICB9KSA6IGF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGdldENoaWxkRG9tYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbWFpbk1hdGNoICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIGRvbWFpbk1hdGNoID8gZG9tYWluTWF0Y2ggOiBnZXREb21haW5Gcm9tVXJsKGdldFVybCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZ2V0RG9tYWluTWF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb21haW5NYXRjaCAmJiB1dGlsX2lzUmVnZXgoZG9tYWluTWF0Y2gpID8gZG9tYWluTWF0Y2ggOiBnZXRDaGlsZERvbWFpbigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvcGVuRnJhbWUgPSBmdW5jdGlvbihjb250ZXh0LCBfcmVmKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd05hbWUgPSBfcmVmLndpbmRvd05hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5GcmFtZU92ZXJyaWRlID8gb3BlbkZyYW1lT3ZlcnJpZGUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiB3aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgfSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHJldHVybiBnZXRQcm94eU9iamVjdChkb21faWZyYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aW5kb3dOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnZXRBdHRyaWJ1dGVzKCkuaWZyYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvcGVuUHJlcmVuZGVyRnJhbWUgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5QcmVyZW5kZXJGcmFtZU92ZXJyaWRlID8gb3BlblByZXJlbmRlckZyYW1lT3ZlcnJpZGUoY29udGV4dCkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHJldHVybiBnZXRQcm94eU9iamVjdChkb21faWZyYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIl9fem9pZF9wcmVyZW5kZXJfZnJhbWVfX1wiICsgbmFtZSArIFwiX1wiICsgdW5pcXVlSUQoKSArIFwiX19cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJwcmVyZW5kZXJfX1wiICsgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2V0QXR0cmlidXRlcygpLmlmcmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHByb3h5V2luLCBwcm94eVByZXJlbmRlckZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5QcmVyZW5kZXJPdmVycmlkZSA/IG9wZW5QcmVyZW5kZXJPdmVycmlkZShjb250ZXh0LCBwcm94eVdpbiwgcHJveHlQcmVyZW5kZXJGcmFtZSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlQcmVyZW5kZXJGcmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcHJveHkgZnJhbWUgdG8gYmUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5UHJlcmVuZGVyRnJhbWUuZ2V0KCkudGhlbigoZnVuY3Rpb24ocHJlcmVuZGVyRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdEZyYW1lV2luZG93KHByZXJlbmRlckZyYW1lKS50aGVuKChmdW5jdGlvbihwcmVyZW5kZXJGcmFtZVdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXJ0U2FtZURvbWFpbihwcmVyZW5kZXJGcmFtZVdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXBfdG9Qcm94eVdpbmRvdyh3aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZW5kZXIgY29udGV4dCBhdmFpbGFibGUgZm9yIFwiICsgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFByb3h5V2luKSByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKFsgZXZlbnQudHJpZ2dlcihFVkVOVC5GT0NVUyksIGN1cnJlbnRQcm94eVdpbi5mb2N1cygpIF0pLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRXaW5kb3dSZWYgPSBmdW5jdGlvbih0YXJnZXQsIGRvbWFpbiwgdWlkLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbiA9PT0gZ2V0RG9tYWluKHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC53aW5kb3dzID0gZ2xvYmFsLndpbmRvd3MgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC53aW5kb3dzW3VpZF0gPSB3aW5kb3c7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwud2luZG93c1t1aWRdO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQgPT09IENPTlRFWFQuUE9QVVAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib3BlbmVyXCJcbiAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogZ2V0RGlzdGFuY2VGcm9tVG9wKHdpbmRvdylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpbml0Q2hpbGQgPSBmdW5jdGlvbihjaGlsZEV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSBjaGlsZEV4cG9ydHM7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkRXhwb3J0cy5jbG9zZS5maXJlQW5kRm9yZ2V0KCkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcihFVkVOVC5SRVNJWkUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZGVzdHJveSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQudHJpZ2dlcihFVkVOVC5ERVNUUk9ZKTtcbiAgICAgICAgICAgICAgICB9KSkuY2F0Y2goc3JjX3V0aWxfbm9vcCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhbi5hbGwoZXJyKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlLmFzeW5jUmVqZWN0KGVyciB8fCBuZXcgRXJyb3IoXCJDb21wb25lbnQgZGVzdHJveWVkXCIpKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNsb3NlID0gbWVtb2l6ZSgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZU92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3dDbG9zZWQoY2xvc2VPdmVycmlkZS5fX3NvdXJjZV9fKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3NlT3ZlcnJpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC50cmlnZ2VyKEVWRU5ULkNMT1NFKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc3Ryb3koZXJyIHx8IG5ldyBFcnJvcihcIkNvbXBvbmVudCBjbG9zZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBmdW5jdGlvbihjb250ZXh0LCBfcmVmMykge1xuICAgICAgICAgICAgICAgIHZhciBwcm94eVdpbiA9IF9yZWYzLnByb3h5V2luLCBwcm94eUZyYW1lID0gX3JlZjMucHJveHlGcmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3Blbk92ZXJyaWRlID8gb3Blbk92ZXJyaWRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBwcm94eUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBfcmVmMy53aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgfSkgOiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCA9PT0gQ09OVEVYVC5JRlJBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlGcmFtZSkgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcHJveHkgZnJhbWUgdG8gYmUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5RnJhbWUuZ2V0KCkudGhlbigoZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXRGcmFtZVdpbmRvdyhmcmFtZSkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9yZXF1ZXN0UHJvbWlzZXMkZ2V0MiA9IHdpbmRvd1N0b3JlKFwicmVxdWVzdFByb21pc2VzXCIpLmdldCh3aW4sIFtdKTsgX2kyIDwgX3JlcXVlc3RQcm9taXNlcyRnZXQyLmxlbmd0aDsgX2kyKyspIF9yZXF1ZXN0UHJvbWlzZXMkZ2V0MltfaTJdLnJlamVjdChuZXcgRXJyb3IoXCJXaW5kb3cgXCIgKyAoaXNXaW5kb3dDbG9zZWQod2luKSA/IFwiY2xvc2VkXCIgOiBcImNsZWFuZWQgdXBcIikgKyBcIiBiZWZvcmUgcmVzcG9uc2VcIikpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh3aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlbmRlciBjb250ZXh0IGF2YWlsYWJsZSBmb3IgXCIgKyBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5V2luLnNldFdpbmRvdyh3aW4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRfc2VuZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5V2luO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgd2F0Y2hGb3JVbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVubG9hZFdpbmRvd0xpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwidW5sb2FkXCIsIG9uY2UoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJveShuZXcgRXJyb3IoXCJXaW5kb3cgbmF2aWdhdGVkIGF3YXlcIikpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VQYXJlbnRXaW5kb3dMaXN0ZW5lciA9IG9uQ2xvc2VXaW5kb3cocGFyZW50V2luLCBkZXN0cm95LCAzZTMpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcihjbG9zZVBhcmVudFdpbmRvd0xpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKHVubG9hZFdpbmRvd0xpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXRjaEZvclVubG9hZE92ZXJyaWRlKSByZXR1cm4gd2F0Y2hGb3JVbmxvYWRPdmVycmlkZSgpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY2hlY2tXaW5kb3dDbG9zZSA9IGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb3NlZCA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eVdpbi5pc0Nsb3NlZCgpLnRoZW4oKGZ1bmN0aW9uKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Nsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VkID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2UobmV3IEVycm9yKFwiRGV0ZWN0ZWQgY29tcG9uZW50IHdpbmRvdyBjbG9zZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmRlbGF5KDIwMCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJveHlXaW4uaXNDbG9zZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKHNlY29uZElzQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Vjb25kSXNDbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2UobmV3IEVycm9yKFwiRGV0ZWN0ZWQgY29tcG9uZW50IHdpbmRvdyBjbG9zZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3JPdmVycmlkZSA/IG9uRXJyb3JPdmVycmlkZShlcnIpIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBoYW5kbGVkRXJyb3JzLmluZGV4T2YoZXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZEVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UHJvbWlzZS5hc3luY1JlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRyaWdnZXIoRVZFTlQuRVJST1IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW5pdENoaWxkLm9uRXJyb3IgPSBvbkVycm9yO1xuICAgICAgICAgICAgdmFyIHJlbmRlclRlbXBsYXRlID0gZnVuY3Rpb24ocmVuZGVyZXIsIF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBfcmVmNi5jb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9yZWY2LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHVpZDogX3JlZjYudWlkLFxuICAgICAgICAgICAgICAgICAgICBkb2M6IF9yZWY2LmRvYyxcbiAgICAgICAgICAgICAgICAgICAgZnJhbWU6IF9yZWY2LmZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZTogX3JlZjYucHJlcmVuZGVyRnJhbWUsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGNsb3NlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IGRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwcmVyZW5kZXIgPSBmdW5jdGlvbihwcm94eVByZXJlbmRlcldpbiwgX3JlZjcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IF9yZWY3LmNvbnRleHQsIHVpZCA9IF9yZWY3LnVpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlcmVuZGVyT3ZlcnJpZGUgPyBwcmVyZW5kZXJPdmVycmlkZShwcm94eVByZXJlbmRlcldpbiwge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgIH0pIDogcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXJlbmRlclRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJlcmVuZGVyV2luZG93ID0gcHJveHlQcmVyZW5kZXJXaW4uZ2V0V2luZG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlcmVuZGVyV2luZG93ICYmIGlzU2FtZURvbWFpbihwcmVyZW5kZXJXaW5kb3cpICYmIGZ1bmN0aW9uKHdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luLmxvY2F0aW9uLmhyZWYpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYWJvdXQ6YmxhbmtcIiA9PT0gd2luLmxvY2F0aW9uLmhyZWYpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcmVyZW5kZXJXaW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvYyA9IChwcmVyZW5kZXJXaW5kb3cgPSBhc3NlcnRTYW1lRG9tYWluKHByZXJlbmRlcldpbmRvdykpLmRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHJlbmRlclRlbXBsYXRlKHByZXJlbmRlclRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2M6IGRvY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwub3duZXJEb2N1bWVudCAhPT0gZG9jKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBwcmVyZW5kZXIgdGVtcGxhdGUgdG8gaGF2ZSBiZWVuIGNyZWF0ZWQgd2l0aCBkb2N1bWVudCBmcm9tIGNoaWxkIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKHdpbiwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJodG1sXCIgIT09IHRhZykgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZWxlbWVudCB0byBiZSBodG1sLCBnb3QgXCIgKyB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHdpbi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTYgPSAwLCBfYXJyYXlGcm9tMiA9IGFycmF5RnJvbShkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW4pOyBfaTYgPCBfYXJyYXlGcm9tMi5sZW5ndGg7IF9pNisrKSBkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX2FycmF5RnJvbTJbX2k2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTggPSAwLCBfYXJyYXlGcm9tNCA9IGFycmF5RnJvbShlbC5jaGlsZHJlbik7IF9pOCA8IF9hcnJheUZyb200Lmxlbmd0aDsgX2k4KyspIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChfYXJyYXlGcm9tNFtfaThdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcmVyZW5kZXJXaW5kb3csIGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hdXRvUmVzaXplJHdpZHRoID0gYXV0b1Jlc2l6ZS53aWR0aCwgd2lkdGggPSB2b2lkIDAgIT09IF9hdXRvUmVzaXplJHdpZHRoICYmIF9hdXRvUmVzaXplJHdpZHRoLCBfYXV0b1Jlc2l6ZSRoZWlnaHQgPSBhdXRvUmVzaXplLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSRoZWlnaHQgJiYgX2F1dG9SZXNpemUkaGVpZ2h0LCBfYXV0b1Jlc2l6ZSRlbGVtZW50ID0gYXV0b1Jlc2l6ZS5lbGVtZW50LCBlbGVtZW50ID0gdm9pZCAwID09PSBfYXV0b1Jlc2l6ZSRlbGVtZW50ID8gXCJib2R5XCIgOiBfYXV0b1Jlc2l6ZSRlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQgPSBnZXRFbGVtZW50U2FmZShlbGVtZW50LCBkb2MpKSAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXJlbmRlclJlc2l6ZUxpc3RlbmVyID0gb25SZXNpemUoZWxlbWVudCwgKGZ1bmN0aW9uKF9yZWY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoID8gX3JlZjgud2lkdGggOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8gX3JlZjguaGVpZ2h0IDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW46IHByZXJlbmRlcldpbmRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRU5ERVJFRCwgcHJlcmVuZGVyUmVzaXplTGlzdGVuZXIuY2FuY2VsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVuZGVyQ29udGFpbmVyID0gZnVuY3Rpb24ocHJveHlDb250YWluZXIsIF9yZWY5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3h5RnJhbWUgPSBfcmVmOS5wcm94eUZyYW1lLCBwcm94eVByZXJlbmRlckZyYW1lID0gX3JlZjkucHJveHlQcmVyZW5kZXJGcmFtZSwgY29udGV4dCA9IF9yZWY5LmNvbnRleHQsIHVpZCA9IF9yZWY5LnVpZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPyByZW5kZXJDb250YWluZXJPdmVycmlkZShwcm94eUNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBwcm94eUZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcm94eVByZXJlbmRlckZyYW1lOiBwcm94eVByZXJlbmRlckZyYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgIH0pIDogcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogcHJveHlDb250YWluZXIuZ2V0KCksXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lOiBwcm94eUZyYW1lID8gcHJveHlGcmFtZS5nZXQoKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByZXJlbmRlckZyYW1lOiBwcm94eVByZXJlbmRlckZyYW1lID8gcHJveHlQcmVyZW5kZXJGcmFtZS5nZXQoKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsU3RhdGU6IGdldEludGVybmFsU3RhdGUoKVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX3JlZjEwLmNvbnRhaW5lciwgdmlzaWJsZSA9IF9yZWYxMC5pbnRlcm5hbFN0YXRlLnZpc2libGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IHJlbmRlclRlbXBsYXRlKGNvbnRhaW5lclRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBfcmVmMTAuZnJhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZTogX3JlZjEwLnByZXJlbmRlckZyYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jOiBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlubmVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlIHx8IGhpZGVFbGVtZW50KGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKGNvbnRhaW5lciwgaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldhdGNoZXIgPSBmdW5jdGlvbihlbGVtZW50LCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UoaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FjcmlmaWNpYWxGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FjcmlmaWNpYWxGcmFtZVdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTE4ID0gMDsgX2kxOCA8IG11dGF0aW9uT2JzZXJ2ZXJzLmxlbmd0aDsgX2kxOCsrKSBtdXRhdGlvbk9ic2VydmVyc1tfaTE4XS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsICYmIGludGVydmFsLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWNyaWZpY2lhbEZyYW1lV2luICYmIHNhY3JpZmljaWFsRnJhbWVXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCBlbGVtZW50Q2xvc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FjcmlmaWNpYWxGcmFtZSAmJiBkZXN0cm95RWxlbWVudChzYWNyaWZpY2lhbEZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50Q2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRWxlbWVudENsb3NlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xvc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7bXV0YXRpb25FbGVtZW50OyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VsZW1lbnRDbG9zZWQoZWxlbWVudCkgJiYgZWxlbWVudENsb3NlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG11dGF0aW9uRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlcnMucHVzaChtdXRhdGlvbk9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uRWxlbWVudCA9IG11dGF0aW9uRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzYWNyaWZpY2lhbEZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIl9fZGV0ZWN0X2Nsb3NlX1wiICsgdW5pcXVlSUQoKSArIFwiX19cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FjcmlmaWNpYWxGcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRGcmFtZVdpbmRvdyhzYWNyaWZpY2lhbEZyYW1lKS50aGVuKChmdW5jdGlvbihmcmFtZVdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2FjcmlmaWNpYWxGcmFtZVdpbiA9IGFzc2VydFNhbWVEb21haW4oZnJhbWVXaW4pKS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsIGVsZW1lbnRDbG9zZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNhY3JpZmljaWFsRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gc2FmZUludGVydmFsKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbGVtZW50Q2xvc2VkKGVsZW1lbnQpICYmIGVsZW1lbnRDbG9zZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMWUzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGNhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGlubmVyQ29udGFpbmVyLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3NlKG5ldyBFcnJvcihcIkRldGVjdGVkIGNvbnRhaW5lciBlbGVtZW50IHJlbW92ZWQgZnJvbSBET01cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJXYXRjaGVyLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXN0cm95RWxlbWVudChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFByb3h5Q29udGFpbmVyID0gZ2V0UHJveHlPYmplY3QoaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBnZXRIZWxwZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZvY3VzLFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHJlc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvcHM6IHVwZGF0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2V0UHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcywgaXNVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGlzVXBkYXRlICYmIChpc1VwZGF0ZSA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVscGVycyA9IGdldEhlbHBlcnMoKTtcbiAgICAgICAgICAgICAgICAhZnVuY3Rpb24ocHJvcHNEZWYsIHByb3BzLCBpbnB1dFByb3BzLCBoZWxwZXJzLCBpc1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGlzVXBkYXRlICYmIChpc1VwZGF0ZSA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHByb3BzLCBpbnB1dFByb3BzID0gaW5wdXRQcm9wcyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZXMgPSBpc1VwZGF0ZSA/IFtdIDogW10uY29uY2F0KE9iamVjdC5rZXlzKHByb3BzRGVmKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhpbnB1dFByb3BzKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX09iamVjdCRrZXlzMltfaTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IHByb3BOYW1lcy5pbmRleE9mKGtleSkgJiYgcHJvcE5hbWVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBoZWxwZXJzLnN0YXRlLCBjbG9zZSA9IGhlbHBlcnMuY2xvc2UsIGZvY3VzID0gaGVscGVycy5mb2N1cywgZXZlbnQgPSBoZWxwZXJzLmV2ZW50LCBvbkVycm9yID0gaGVscGVycy5vbkVycm9yO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBwcm9wTmFtZXMubGVuZ3RoOyBfaTQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkgPSBwcm9wTmFtZXNbX2k0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wRGVmID0gcHJvcHNEZWZbX2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFByb3BzW19rZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxpYXMgPSBwcm9wRGVmLmFsaWFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQoaW5wdXRQcm9wc1thbGlhc10pICYmICh2YWx1ZSA9IGlucHV0UHJvcHNbYWxpYXNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXNlcy5wdXNoKGFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcERlZi52YWx1ZSAmJiAodmFsdWUgPSBwcm9wRGVmLnZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZvY3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGVmaW5lZCh2YWx1ZSkgJiYgcHJvcERlZi5kZWZhdWx0ICYmICh2YWx1ZSA9IHByb3BEZWYuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIChcImFycmF5XCIgPT09IHByb3BEZWYudHlwZSA/ICFBcnJheS5pc0FycmF5KHZhbHVlKSA6IHR5cGVvZiB2YWx1ZSAhPT0gcHJvcERlZi50eXBlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb3AgaXMgbm90IG9mIHR5cGUgXCIgKyBwcm9wRGVmLnR5cGUgKyBcIjogXCIgKyBfa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pNiA9IDA7IF9pNiA8IGFsaWFzZXMubGVuZ3RoOyBfaTYrKykgZGVsZXRlIHByb3BzW2FsaWFzZXNbX2k2XV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pOCA9IDAsIF9PYmplY3Qka2V5czQgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pOCA8IF9PYmplY3Qka2V5czQubGVuZ3RoOyBfaTgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkyID0gX09iamVjdCRrZXlzNFtfaThdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm9wRGVmID0gcHJvcHNEZWZbX2tleTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF92YWx1ZSA9IHByb3BzW19rZXkyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcm9wRGVmICYmIGlzRGVmaW5lZChfdmFsdWUpICYmIF9wcm9wRGVmLmRlY29yYXRlICYmIChwcm9wc1tfa2V5Ml0gPSBfcHJvcERlZi5kZWNvcmF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogZm9jdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTEwID0gMCwgX09iamVjdCRrZXlzNiA9IE9iamVjdC5rZXlzKHByb3BzRGVmKTsgX2kxMCA8IF9PYmplY3Qka2V5czYubGVuZ3RoOyBfaTEwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfa2V5MyA9IF9PYmplY3Qka2V5czZbX2kxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IHByb3BzRGVmW19rZXkzXS5yZXF1aXJlZCAmJiAhaXNEZWZpbmVkKHByb3BzW19rZXkzXSkpIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcHJvcCBcIicgKyBfa2V5MyArICdcIiB0byBiZSBkZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KHByb3BzRGVmLCBwcm9wcywgbmV3UHJvcHMsIGhlbHBlcnMsIGlzVXBkYXRlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdXBkYXRlUHJvcHMgPSBmdW5jdGlvbihuZXdQcm9wcykge1xuICAgICAgICAgICAgICAgIHNldFByb3BzKG5ld1Byb3BzLCAhMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZENvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3h5V2luID0gY3VycmVudFByb3h5V2luO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgcHJveHlXaW4pIHJldHVybiBnZXRQcm9wc0ZvckNoaWxkKGdldERvbWFpbk1hdGNoZXIoKSkudGhlbigoZnVuY3Rpb24oY2hpbGRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnVwZGF0ZVByb3BzKGNoaWxkUHJvcHMpLmNhdGNoKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tXaW5kb3dDbG9zZShwcm94eVdpbikudGhlbigoZnVuY3Rpb24oY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlJFTkRFUiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vblJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQub24oRVZFTlQuRElTUExBWSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlJFTkRFUkVELCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uUmVuZGVyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkNMT1NFLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkRFU1RST1ksIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25EZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRVNJWkUsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25SZXNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULkZPQ1VTLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm9uKEVWRU5ULlBST1BTLCAoZnVuY3Rpb24obmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25Qcm9wcyhuZXdQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5FUlJPUiwgKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcyAmJiBwcm9wcy5vbkVycm9yID8gcHJvcHMub25FcnJvcihlcnIpIDogaW5pdFByb21pc2UucmVqZWN0KGVycikudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW4ucmVnaXN0ZXIoZXZlbnQucmVzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKHRhcmdldCwgY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVpZCA9IFwiem9pZC1cIiArIHRhZyArIFwiLVwiICsgdW5pcXVlSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW4gPSBnZXREb21haW5NYXRjaGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGREb21haW4gPSBnZXRDaGlsZERvbWFpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKHRhcmdldCwgZG9tYWluLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NhbWVUb3BXaW5kb3cod2luZG93LCB0YXJnZXQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSByZW5kZXJUbyBhbiBhZGphY2VudCBmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGdldERvbWFpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKGRvbWFpbiwgb3JpZ2luKSAmJiAhaXNTYW1lRG9tYWluKHRhcmdldCkpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgcmVuZGVyIHJlbW90ZWx5IHRvIFwiICsgZG9tYWluLnRvU3RyaW5nKCkgKyBcIiAtIGNhbiBvbmx5IHJlbmRlciB0byBcIiArIG9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgY29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJDb250YWluZXIgcGFzc2VkIHRvIHJlbmRlclRvIG11c3QgYmUgYSBzdHJpbmcgc2VsZWN0b3IsIGdvdCBcIiArIHR5cGVvZiBjb250YWluZXIgKyBcIiB9XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGFyZ2V0LCBkb21haW4sIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGVQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB3aW5kb3cpIHJldHVybiBmdW5jdGlvbihjb250ZXh0LCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2k0ID0gMCwgX09iamVjdCRrZXlzNCA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2k0IDwgX09iamVjdCRrZXlzNC5sZW5ndGg7IF9pNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBfT2JqZWN0JGtleXM0W19pNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcERlZiA9IHByb3BzRGVmW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BEZWYgJiYgcHJvcERlZi5hbGxvd0RlbGVnYXRlICYmIChkZWxlZ2F0ZVByb3BzW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZSA9IHNlbmRfc2VuZCh0YXJnZXQsIFwiem9pZF9kZWxlZ2F0ZV9cIiArIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiBkZWxlZ2F0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRJbnRlcm5hbFN0YXRlOiBnZXRJbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVybmFsU3RhdGU6IHNldEludGVybmFsU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Q29tcCA9IF9yZWYxMS5kYXRhLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93Q2xvc2VkKHRhcmdldCkpIHJldHVybiBwYXJlbnRDb21wLmRlc3Ryb3koZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb21wLmdldERlbGVnYXRlT3ZlcnJpZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZGVsZWdhdGUgcmVuZGVyaW5nLiBQb3NzaWJseSB0aGUgY29tcG9uZW50IGlzIG5vdCBsb2FkZWQgaW4gdGhlIHRhcmdldCB3aW5kb3cuXFxuXFxuXCIgKyBzdHJpbmdpZnlFcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm94eUNvbnRhaW5lck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLmdldFByb3h5Q29udGFpbmVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5yZW5kZXJDb250YWluZXIuYXBwbHkoY2hpbGRPdmVycmlkZXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93T3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5zaG93LmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXMuaGlkZS5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy53YXRjaEZvclVubG9hZC5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0ID09PSBDT05URVhULklGUkFNRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJveHlXaW5kb3dPdmVycmlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLmdldFByb3h5V2luZG93LmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkZyYW1lT3ZlcnJpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuRnJhbWUuYXBwbHkoY2hpbGRPdmVycmlkZXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJlcmVuZGVyRnJhbWVPdmVycmlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2UudGhlbigoZnVuY3Rpb24oY2hpbGRPdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzLm9wZW5QcmVyZW5kZXJGcmFtZS5hcHBseShjaGlsZE92ZXJyaWRlcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXJlbmRlck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkT3ZlcnJpZGVzUHJvbWlzZS50aGVuKChmdW5jdGlvbihjaGlsZE92ZXJyaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXMucHJlcmVuZGVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSBhcmdzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblByZXJlbmRlck92ZXJyaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjExID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMTEpLCBfa2V5MTEgPSAwOyBfa2V5MTEgPCBfbGVuMTE7IF9rZXkxMSsrKSBhcmdzW19rZXkxMV0gPSBhcmd1bWVudHNbX2tleTExXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRPdmVycmlkZXNQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKGNoaWxkT3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlcy5vcGVuUHJlcmVuZGVyLmFwcGx5KGNoaWxkT3ZlcnJpZGVzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE92ZXJyaWRlc1Byb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShjb250ZXh0LCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd1Byb3AgPSBwcm9wcy53aW5kb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2F0Y2hGb3JVbmxvYWRQcm9taXNlID0gd2F0Y2hGb3JVbmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWlsZFVybFByb21pc2UgPSBmdW5jdGlvbihwcm9wc0RlZiwgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmFsbChrZXlzLm1hcCgoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHByb3AucXVlcnlQYXJhbSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IHZhbHVlKSByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuYWxsKFsgcHJvcHNfZ2V0UXVlcnlQYXJhbShwcm9wLCBrZXksIHZhbHVlKSwgZ2V0UXVlcnlWYWx1ZShwcm9wLCAwLCB2YWx1ZSkgXSkudGhlbigoZnVuY3Rpb24oX3JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtID0gX3JlZlswXSwgcXVlcnlWYWx1ZSA9IF9yZWZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJib29sZWFuXCIgPT0gdHlwZW9mIHF1ZXJ5VmFsdWUpIHJlc3VsdCA9IHF1ZXJ5VmFsdWUudG9TdHJpbmcoKTsgZWxzZSBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcXVlcnlWYWx1ZSkgcmVzdWx0ID0gcXVlcnlWYWx1ZS50b1N0cmluZygpOyBlbHNlIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBxdWVyeVZhbHVlICYmIG51bGwgIT09IHF1ZXJ5VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3Auc2VyaWFsaXphdGlvbiA9PT0gUFJPUF9TRVJJQUxJWkFUSU9OLkpTT04pIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5VmFsdWUpOyBlbHNlIGlmIChwcm9wLnNlcmlhbGl6YXRpb24gPT09IFBST1BfU0VSSUFMSVpBVElPTi5CQVNFNjQpIHJlc3VsdCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZSkpOyBlbHNlIGlmIChwcm9wLnNlcmlhbGl6YXRpb24gPT09IFBST1BfU0VSSUFMSVpBVElPTi5ET1RJRlkgfHwgIXByb3Auc2VyaWFsaXphdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZnVuY3Rpb24gZG90aWZ5KG9iaiwgcHJlZml4LCBuZXdvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHByZWZpeCAmJiAocHJlZml4ID0gXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBuZXdvYmogJiYgKG5ld29iaiA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSBwcmVmaXggPyBwcmVmaXggKyBcIi5cIiA6IHByZWZpeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBudWxsICE9IG9ialtrZXldICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygb2JqW2tleV0gJiYgKG9ialtrZXldICYmIEFycmF5LmlzQXJyYXkob2JqW2tleV0pICYmIG9ialtrZXldLmxlbmd0aCAmJiBvYmpba2V5XS5ldmVyeSgoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiICE9IHR5cGVvZiB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpID8gbmV3b2JqW1wiXCIgKyBwcmVmaXggKyBrZXkgKyBcIltdXCJdID0gb2JqW2tleV0uam9pbihcIixcIikgOiBvYmpba2V5XSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBvYmpba2V5XSA/IG5ld29iaiA9IGRvdGlmeShvYmpba2V5XSwgXCJcIiArIHByZWZpeCArIGtleSwgbmV3b2JqKSA6IG5ld29ialtcIlwiICsgcHJlZml4ICsga2V5XSA9IG9ialtrZXldLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHF1ZXJ5VmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTEyID0gMCwgX09iamVjdCRrZXlzOCA9IE9iamVjdC5rZXlzKHJlc3VsdCk7IF9pMTIgPCBfT2JqZWN0JGtleXM4Lmxlbmd0aDsgX2kxMisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvdGtleSA9IF9PYmplY3Qka2V5czhbX2kxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2RvdGtleV0gPSByZXN1bHRbZG90a2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBcIm51bWJlclwiID09IHR5cGVvZiBxdWVyeVZhbHVlICYmIChyZXN1bHQgPSBxdWVyeVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1txdWVyeVBhcmFtXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9wc0RlZiwgcHJvcHMpLnRoZW4oKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IG9wdGlvbnMuaGFzaCB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxIYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3VybCRzcGxpdCA9IHVybC5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSGFzaCA9IF91cmwkc3BsaXRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfb3JpZ2luYWxVcmwkc3BsaXQgPSAob3JpZ2luYWxVcmwgPSBfdXJsJHNwbGl0WzBdKS5zcGxpdChcIj9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVXJsID0gX29yaWdpbmFsVXJsJHNwbGl0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBleHRlbmRRdWVyeShfb3JpZ2luYWxVcmwkc3BsaXRbMV0sIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2hTdHJpbmcgPSBleHRlbmRRdWVyeShvcmlnaW5hbEhhc2gsIGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyAmJiAob3JpZ2luYWxVcmwgPSBvcmlnaW5hbFVybCArIFwiP1wiICsgcXVlcnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoU3RyaW5nICYmIChvcmlnaW5hbFVybCA9IG9yaWdpbmFsVXJsICsgXCIjXCIgKyBoYXNoU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGRvbWFpbiA9IGdldERvbWFpbkZyb21VcmwodXJsKSwgMCA9PT0gZG9tYWluLmluZGV4T2YoXCJtb2NrOlwiKSkpIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1vY2sgdXJscyBub3Qgc3VwcG9ydGVkIG91dCBvZiB0ZXN0IG1vZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShnZXRVcmwoKSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25SZW5kZXJQcm9taXNlID0gZXZlbnQudHJpZ2dlcihFVkVOVC5SRU5ERVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSA9IGdldFByb3h5Q29udGFpbmVyKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0UHJveHlXaW5kb3dQcm9taXNlID0gZ2V0UHJveHlXaW5kb3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWlsZFdpbmRvd05hbWVQcm9taXNlID0gZ2V0UHJveHlXaW5kb3dQcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKF90ZW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNCA9IHZvaWQgMCA9PT0gX3RlbXAgPyB7fSA6IF90ZW1wLCBwcm94eVdpbiA9IF9yZWY0LnByb3h5V2luLCBjaGlsZERvbWFpbiA9IF9yZWY0LmNoaWxkRG9tYWluLCBkb21haW4gPSBfcmVmNC5kb21haW4sIGNvbnRleHQgPSAodm9pZCAwID09PSBfcmVmNC50YXJnZXQgJiYgd2luZG93LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjQuY29udGV4dCksIHVpZCA9IF9yZWY0LnVpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb3h5V2luLCBjaGlsZERvbWFpbiwgZG9tYWluLCB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRQcm9wc0ZvckNoaWxkKGRvbWFpbikudGhlbigoZnVuY3Rpb24oY2hpbGRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNldHVwX3NlcmlhbGl6ZU1lc3NhZ2UocHJveHlXaW4sIGRvbWFpbiwgY2hpbGRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BSZWYgPSBjaGlsZERvbWFpbiA9PT0gZ2V0RG9tYWluKCkgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1aWRcIiA9PT0gcHJvcFJlZi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnbG9iYWwgPSBsaWJfZ2xvYmFsX2dldEdsb2JhbCh3aW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwucHJvcHMgPSBnbG9iYWwucHJvcHMgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5wcm9wc1t1aWRdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuLnJlZ2lzdGVyKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwucHJvcHNbdWlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcm94eVdpbiwgY2hpbGREb21haW4sIGRvbWFpbiwgdWlkKS50aGVuKChmdW5jdGlvbihwcm9wc1JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IFwiOV8wXzYzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IGNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudERvbWFpbjogZ2V0RG9tYWluKHdpbmRvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBnZXRXaW5kb3dSZWYoMCwgY2hpbGREb21haW4sIHVpZCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHByb3BzUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHNldHVwX3NlcmlhbGl6ZU1lc3NhZ2UocHJveHlXaW4sIGRvbWFpbiwgKHdpbiA9IHByb3h5V2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGluaXRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGNsb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1dpbmRvd0Nsb3NlKHdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogcmVzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogKF9yZWY1ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IGNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm94eVdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREb21haW46IF9yZWY1LmNoaWxkRG9tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IF9yZWY1LmRvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBfcmVmNS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9yZWY1LmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogX3JlZjUudWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oY2hpbGRQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIl9fem9pZF9fXCIgKyBuYW1lICsgXCJfX1wiICsgYmFzZTY0ZW5jb2RlKEpTT04uc3RyaW5naWZ5KGNoaWxkUGF5bG9hZCkpICsgXCJfX1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbkZyYW1lUHJvbWlzZSA9IGJ1aWxkV2luZG93TmFtZVByb21pc2UudGhlbigoZnVuY3Rpb24od2luZG93TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuRnJhbWUoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiB3aW5kb3dOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlblByZXJlbmRlckZyYW1lUHJvbWlzZSA9IG9wZW5QcmVyZW5kZXJGcmFtZShjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJDb250YWluZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlDb250YWluZXI6IGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBvcGVuRnJhbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5UHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJDb250YWluZXIoX3JlZjEyLnByb3h5Q29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBfcmVmMTIucHJveHlGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlQcmVyZW5kZXJGcmFtZTogX3JlZjEyLnByb3h5UHJlcmVuZGVyRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbihwcm94eUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eUNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuUHJvbWlzZSA9IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd05hbWU6IGJ1aWxkV2luZG93TmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlGcmFtZTogb3BlbkZyYW1lUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogZ2V0UHJveHlXaW5kb3dQcm9taXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChmdW5jdGlvbihfcmVmMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJveHlXaW4gPSBfcmVmMTMucHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Byb3AgPyBwcm94eVdpbiA6IG9wZW4oY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBfcmVmMTMud2luZG93TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IHByb3h5V2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eUZyYW1lOiBfcmVmMTMucHJveHlGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW5QcmVyZW5kZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlXaW46IG9wZW5Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5UHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVuUHJlcmVuZGVyKGNvbnRleHQsIF9yZWYxNC5wcm94eVdpbiwgX3JlZjE0LnByb3h5UHJlcmVuZGVyRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNldFN0YXRlUHJvbWlzZSA9IG9wZW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb3h5V2luID0gcHJveHlXaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFByb3h5V2luKHByb3h5V2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmVyZW5kZXJQcm9taXNlID0gcHJvbWlzZV9aYWxnb1Byb21pc2UuaGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlQcmVyZW5kZXJXaW46IG9wZW5QcmVyZW5kZXJQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzZXRTdGF0ZVByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmVyZW5kZXIoX3JlZjE1LnByb3h5UHJlcmVuZGVyV2luLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0V2luZG93TmFtZVByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93TmFtZTogYnVpbGRXaW5kb3dOYW1lUHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZnVuY3Rpb24oX3JlZjE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1Byb3ApIHJldHVybiBfcmVmMTYucHJveHlXaW4uc2V0TmFtZShfcmVmMTYud2luZG93TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZFVybFByb21pc2UgPSBwcm9taXNlX1phbGdvUHJvbWlzZS5oYXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eVdpbjogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbHRVcmw6IGJ1aWxkVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBzZXRXaW5kb3dOYW1lUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlclByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKF9yZWYxNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTcucHJveHlXaW4uc2V0TG9jYXRpb24oX3JlZjE3LmJ1aWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXRjaEZvckNsb3NlUHJvbWlzZSA9IG9wZW5Qcm9taXNlLnRoZW4oKGZ1bmN0aW9uKHByb3h5V2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uIHdhdGNoRm9yQ2xvc2UocHJveHlXaW4sIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhbi5yZWdpc3RlcigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UuZGVsYXkoMmUzKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eVdpbi5pc0Nsb3NlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbigoZnVuY3Rpb24oaXNDbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0Nsb3NlZCA/IGNsb3NlKG5ldyBFcnJvcihcIkRldGVjdGVkIFwiICsgY29udGV4dCArIFwiIGNsb3NlXCIpKSA6IGNhbmNlbGxlZCA/IHZvaWQgMCA6IHdhdGNoRm9yQ2xvc2UocHJveHlXaW4sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcm94eVdpbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25EaXNwbGF5UHJvbWlzZSA9IHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogcmVuZGVyQ29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlclByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC50cmlnZ2VyKEVWRU5ULkRJU1BMQVkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW5CcmlkZ2VQcm9taXNlID0gb3BlblByb21pc2UudGhlbigoZnVuY3Rpb24ocHJveHlXaW4pIHt9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnVuVGltZW91dFByb21pc2UgPSBsb2FkVXJsUHJvbWlzZS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkgcmV0dXJuIGluaXRQcm9taXNlLnRpbWVvdXQodGltZW91dCwgbmV3IEVycm9yKFwiTG9hZGluZyBjb21wb25lbnQgdGltZWQgb3V0IGFmdGVyIFwiICsgdGltZW91dCArIFwiIG1pbGxpc2Vjb25kc1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVuZGVyZWRQcm9taXNlID0gaW5pdFByb21pc2UudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRyaWdnZXIoRVZFTlQuUkVOREVSRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLmhhc2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQcm9taXNlOiBpbml0UHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZFVybFByb21pc2U6IGJ1aWxkVXJsUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmRlclByb21pc2U6IG9uUmVuZGVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm94eUNvbnRhaW5lclByb21pc2U6IGdldFByb3h5Q29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRnJhbWVQcm9taXNlOiBvcGVuRnJhbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2U6IG9wZW5QcmVyZW5kZXJGcmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyUHJvbWlzZTogcmVuZGVyQ29udGFpbmVyUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJvbWlzZTogb3BlblByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblByZXJlbmRlclByb21pc2U6IG9wZW5QcmVyZW5kZXJQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUHJvbWlzZTogc2V0U3RhdGVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXJlbmRlclByb21pc2U6IHByZXJlbmRlclByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFVybFByb21pc2U6IGxvYWRVcmxQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkV2luZG93TmFtZVByb21pc2U6IGJ1aWxkV2luZG93TmFtZVByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2luZG93TmFtZVByb21pc2U6IHNldFdpbmRvd05hbWVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yQ2xvc2VQcm9taXNlOiB3YXRjaEZvckNsb3NlUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRpc3BsYXlQcm9taXNlOiBvbkRpc3BsYXlQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5CcmlkZ2VQcm9taXNlOiBvcGVuQnJpZGdlUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5UaW1lb3V0UHJvbWlzZTogcnVuVGltZW91dFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW5kZXJlZFByb21pc2U6IG9uUmVuZGVyZWRQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlUHJvbWlzZTogZGVsZWdhdGVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkUHJvbWlzZTogd2F0Y2hGb3JVbmxvYWRQcm9taXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS5hbGwoWyBvbkVycm9yKGVyciksIGRlc3Ryb3koZXJyKSBdKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgICAgIHNldFByb3BzOiBzZXRQcm9wcyxcbiAgICAgICAgICAgICAgICBnZXRIZWxwZXJzOiBnZXRIZWxwZXJzLFxuICAgICAgICAgICAgICAgIGdldERlbGVnYXRlT3ZlcnJpZGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb3h5Q29udGFpbmVyOiBnZXRQcm94eUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU6IGhpZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyOiByZW5kZXJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJveHlXaW5kb3c6IGdldFByb3h5V2luZG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoRm9yVW5sb2FkOiB3YXRjaEZvclVubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRnJhbWU6IG9wZW5GcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUHJlcmVuZGVyRnJhbWU6IG9wZW5QcmVyZW5kZXJGcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXI6IHByZXJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5QcmVyZW5kZXI6IG9wZW5QcmVyZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJveHlXaW46IHNldFByb3h5V2luXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhY3QgPSB7XG4gICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24odGFnLCBwcm9wc0RlZiwgaW5pdCwgX3JlZikge1xuICAgICAgICAgICAgICAgIHZhciBSZWFjdCA9IF9yZWYuUmVhY3QsIFJlYWN0RE9NID0gX3JlZi5SZWFjdERPTTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfaW5oZXJpdHNMb29zZShfY2xhc3MsIF9SZWFjdCRDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcm90byA9IF9jbGFzcy5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGluaXQoZXh0ZW5kKHt9LCB0aGlzLnByb3BzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVuZGVyKGVsLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5wYXJlbnQgJiYgdGhpcy5zdGF0ZS5wYXJlbnQudXBkYXRlUHJvcHMoZXh0ZW5kKHt9LCB0aGlzLnByb3BzKSkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgICAgICAgICAgICAgfShSZWFjdC5Db21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdnVlID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIFZ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWdWUuY29tcG9uZW50KHRhZywge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbmhlcml0QXR0cnM6ICExLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuJGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBpbml0KF9leHRlbmRzKHt9LCB0aGlzLiRhdHRycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVuZGVyKGVsLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy4kYXR0cnMgJiYgdGhpcy5wYXJlbnQudXBkYXRlUHJvcHMoX2V4dGVuZHMoe30sIHRoaXMuJGF0dHJzKSkuY2F0Y2goc3JjX3V0aWxfbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVwOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhbmd1bGFyID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIG5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5nLm1vZHVsZSh0YWcsIFtdKS5kaXJlY3RpdmUodGFnLnJlcGxhY2UoLy0oW2Etel0pL2csIChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSkpLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29wZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMocHJvcHNEZWYpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHNjb3BlW19PYmplY3Qka2V5czJbX2kyXV0gPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMgPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsgXCIkc2NvcGVcIiwgXCIkZWxlbWVudFwiLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2FmZUFwcGx5KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIkYXBwbHlcIiAhPT0gJHNjb3BlLiRyb290LiQkcGhhc2UgJiYgXCIkZGlnZXN0XCIgIT09ICRzY29wZS4kcm9vdC4kJHBoYXNlKSB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZU9iamVjdCgkc2NvcGUucHJvcHMsIChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVtID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWZlQXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGluaXQoZ2V0UHJvcHMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UucmVuZGVyKCRlbGVtZW50WzBdLCBDT05URVhULklGUkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZVByb3BzKGdldFByb3BzKCkpLmNhdGNoKHNyY191dGlsX25vb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFuZ3VsYXIyID0ge1xuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKHRhZywgcHJvcHNEZWYsIGluaXQsIF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgTmdNb2R1bGUgPSBfcmVmLk5nTW9kdWxlLCBFbGVtZW50UmVmID0gX3JlZi5FbGVtZW50UmVmLCBOZ1pvbmUgPSBfcmVmLk5nWm9uZTtcbiAgICAgICAgICAgICAgICB2YXIgZ2V0UHJvcHMgPSBmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VPYmplY3QoX2V4dGVuZHMoe30sIGNvbXBvbmVudC5pbnRlcm5hbFByb3BzLCBjb21wb25lbnQucHJvcHMpLCAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlbSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzLCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC56b25lLnJ1bigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFwcGx5KF90aGlzLCBfYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIENvbXBvbmVudEluc3RhbmNlID0gKDAsIF9yZWYuQ29tcG9uZW50KSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB0YWcsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxkaXY+PC9kaXY+XCIsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0czogWyBcInByb3BzXCIgXVxuICAgICAgICAgICAgICAgIH0pLkNsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IFsgRWxlbWVudFJlZiwgTmdab25lLCBmdW5jdGlvbihlbGVtZW50UmVmLCB6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbmdPbkluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gaW5pdChnZXRQcm9wcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW5kZXIodGFyZ2V0RWxlbWVudCwgQ09OVEVYVC5JRlJBTUUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZ0RvQ2hlY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmICFmdW5jdGlvbihvYmoxLCBvYmoyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqMSkgaWYgKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkW2tleV0gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iajFba2V5XSAhPT0gb2JqMltrZXldKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gb2JqMikgaWYgKCFjaGVja2VkW19rZXldKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSh0aGlzLl9wcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC51cGRhdGVQcm9wcyhnZXRQcm9wcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTmdNb2R1bGUoe1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFsgQ29tcG9uZW50SW5zdGFuY2UgXSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogWyBDb21wb25lbnRJbnN0YW5jZSBdXG4gICAgICAgICAgICAgICAgfSkuQ2xhc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oKSB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0Q29udGFpbmVyVGVtcGxhdGUoX3JlZikge1xuICAgICAgICAgICAgdmFyIHVpZCA9IF9yZWYudWlkLCBmcmFtZSA9IF9yZWYuZnJhbWUsIHByZXJlbmRlckZyYW1lID0gX3JlZi5wcmVyZW5kZXJGcmFtZSwgZG9jID0gX3JlZi5kb2MsIHByb3BzID0gX3JlZi5wcm9wcywgZXZlbnQgPSBfcmVmLmV2ZW50LCBfcmVmJGRpbWVuc2lvbnMgPSBfcmVmLmRpbWVuc2lvbnMsIHdpZHRoID0gX3JlZiRkaW1lbnNpb25zLndpZHRoLCBoZWlnaHQgPSBfcmVmJGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGZyYW1lICYmIHByZXJlbmRlckZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB1aWQpO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgcHJvcHMuY3NwTm9uY2UgJiYgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgcHJvcHMuY3NwTm9uY2UpO1xuICAgICAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShcIlxcbiAgICAgICAgICAgICNcIiArIHVpZCArIFwiIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIiArIHdpZHRoICsgXCI7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIgKyBoZWlnaHQgKyBcIjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI1wiICsgdWlkICsgXCIgPiBpZnJhbWUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI1wiICsgdWlkICsgXCIgPiBpZnJhbWUuem9pZC1pbnZpc2libGUge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjXCIgKyB1aWQgKyBcIiA+IGlmcmFtZS56b2lkLXZpc2libGUge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgXCIpKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QuYWRkKFwiem9pZC12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJ6b2lkLWludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICBldmVudC5vbihFVkVOVC5SRU5ERVJFRCwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiem9pZC12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJGcmFtZS5jbGFzc0xpc3QuYWRkKFwiem9pZC1pbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b2lkLWludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcInpvaWQtdmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0cm95RWxlbWVudChwcmVyZW5kZXJGcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgZXZlbnQub24oRVZFTlQuUkVTSVpFLCAoZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gX3JlZjIud2lkdGgsIG5ld0hlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgbmV3V2lkdGggJiYgKGRpdi5zdHlsZS53aWR0aCA9IHRvQ1NTKG5ld1dpZHRoKSk7XG4gICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIG5ld0hlaWdodCAmJiAoZGl2LnN0eWxlLmhlaWdodCA9IHRvQ1NTKG5ld0hlaWdodCkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRQcmVyZW5kZXJUZW1wbGF0ZShfcmVmKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gX3JlZi5kb2MsIHByb3BzID0gX3JlZi5wcm9wcztcbiAgICAgICAgICAgIHZhciBodG1sID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2MuY3JlYXRlRWxlbWVudChcImJvZHlcIik7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgdmFyIHNwaW5uZXIgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZChcInNwaW5uZXJcIik7XG4gICAgICAgICAgICBwcm9wcy5jc3BOb25jZSAmJiBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBwcm9wcy5jc3BOb25jZSk7XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzcGlubmVyKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKFwiXFxuICAgICAgICAgICAgaHRtbCwgYm9keSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zcGlubmVyIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHZtaW47XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjB2bWluO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgzMywgMTI4LCAxOTIsIDAuOCk7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gLjdzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAgICAgICAgICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRvIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgzNTlkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wc19kZWZhdWx0Tm9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNyY191dGlsX25vb3A7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcm9wc19kZWNvcmF0ZU9uY2UgPSBmdW5jdGlvbihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gb25jZShfcmVmLnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNsZWFuSW5zdGFuY2VzID0gY2xlYW51cCgpO1xuICAgICAgICB2YXIgY2xlYW5ab2lkID0gY2xlYW51cCgpO1xuICAgICAgICBmdW5jdGlvbiBjb21wb25lbnRfY29tcG9uZW50KG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSBvcHRpb25zLnRhZywgdXJsID0gb3B0aW9ucy51cmwsIGRvbWFpbiA9IG9wdGlvbnMuZG9tYWluLCBicmlkZ2VVcmwgPSBvcHRpb25zLmJyaWRnZVVybCwgX29wdGlvbnMkcHJvcHMgPSBvcHRpb25zLnByb3BzLCBwcm9wc0RlZiA9IHZvaWQgMCA9PT0gX29wdGlvbnMkcHJvcHMgPyB7fSA6IF9vcHRpb25zJHByb3BzLCBfb3B0aW9ucyRkaW1lbnNpb25zID0gb3B0aW9ucy5kaW1lbnNpb25zLCBkaW1lbnNpb25zID0gdm9pZCAwID09PSBfb3B0aW9ucyRkaW1lbnNpb25zID8ge30gOiBfb3B0aW9ucyRkaW1lbnNpb25zLCBfb3B0aW9ucyRhdXRvUmVzaXplID0gb3B0aW9ucy5hdXRvUmVzaXplLCBhdXRvUmVzaXplID0gdm9pZCAwID09PSBfb3B0aW9ucyRhdXRvUmVzaXplID8ge30gOiBfb3B0aW9ucyRhdXRvUmVzaXplLCBfb3B0aW9ucyRhbGxvd2VkUGFyZW4gPSBvcHRpb25zLmFsbG93ZWRQYXJlbnREb21haW5zLCBhbGxvd2VkUGFyZW50RG9tYWlucyA9IHZvaWQgMCA9PT0gX29wdGlvbnMkYWxsb3dlZFBhcmVuID8gXCIqXCIgOiBfb3B0aW9ucyRhbGxvd2VkUGFyZW4sIF9vcHRpb25zJGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMgPSB2b2lkIDAgPT09IF9vcHRpb25zJGF0dHJpYnV0ZXMgPyB7fSA6IF9vcHRpb25zJGF0dHJpYnV0ZXMsIF9vcHRpb25zJGRlZmF1bHRDb250ZSA9IG9wdGlvbnMuZGVmYXVsdENvbnRleHQsIGRlZmF1bHRDb250ZXh0ID0gdm9pZCAwID09PSBfb3B0aW9ucyRkZWZhdWx0Q29udGUgPyBDT05URVhULklGUkFNRSA6IF9vcHRpb25zJGRlZmF1bHRDb250ZSwgX29wdGlvbnMkY29udGFpbmVyVGVtID0gb3B0aW9ucy5jb250YWluZXJUZW1wbGF0ZSwgY29udGFpbmVyVGVtcGxhdGUgPSB2b2lkIDAgPT09IF9vcHRpb25zJGNvbnRhaW5lclRlbSA/IGRlZmF1bHRDb250YWluZXJUZW1wbGF0ZSA6IF9vcHRpb25zJGNvbnRhaW5lclRlbSwgX29wdGlvbnMkcHJlcmVuZGVyVGVtID0gb3B0aW9ucy5wcmVyZW5kZXJUZW1wbGF0ZSwgcHJlcmVuZGVyVGVtcGxhdGUgPSB2b2lkIDAgPT09IF9vcHRpb25zJHByZXJlbmRlclRlbSA/IGRlZmF1bHRQcmVyZW5kZXJUZW1wbGF0ZSA6IF9vcHRpb25zJHByZXJlbmRlclRlbSwgdmFsaWRhdGUgPSBvcHRpb25zLnZhbGlkYXRlLCBfb3B0aW9ucyRlbGlnaWJsZSA9IG9wdGlvbnMuZWxpZ2libGUsIGVsaWdpYmxlID0gdm9pZCAwID09PSBfb3B0aW9ucyRlbGlnaWJsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxpZ2libGU6ICEwXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSA6IF9vcHRpb25zJGVsaWdpYmxlLCBfb3B0aW9ucyRsb2dnZXIgPSBvcHRpb25zLmxvZ2dlciwgbG9nZ2VyID0gdm9pZCAwID09PSBfb3B0aW9ucyRsb2dnZXIgPyB7XG4gICAgICAgICAgICAgICAgICAgIGluZm86IHNyY191dGlsX25vb3BcbiAgICAgICAgICAgICAgICB9IDogX29wdGlvbnMkbG9nZ2VyO1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGFnLnJlcGxhY2UoLy0vZywgXCJfXCIpO1xuICAgICAgICAgICAgICAgIHZhciBfZGltZW5zaW9ucyR3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGgsIHdpZHRoID0gdm9pZCAwID09PSBfZGltZW5zaW9ucyR3aWR0aCA/IFwiMzAwcHhcIiA6IF9kaW1lbnNpb25zJHdpZHRoLCBfZGltZW5zaW9ucyRoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwID09PSBfZGltZW5zaW9ucyRoZWlnaHQgPyBcIjE1MHB4XCIgOiBfZGltZW5zaW9ucyRoZWlnaHQ7XG4gICAgICAgICAgICAgICAgcHJvcHNEZWYgPSBfZXh0ZW5kcyh7fSwge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0RlbGVnYXRlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNXaW5kb3codmFsdWUpICYmICF3aW5kb3dfUHJveHlXaW5kb3cuaXNQcm94eVdpbmRvdyh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIFdpbmRvdyBvciBQcm94eVdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3codmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1dpbmRvd0Nsb3NlZCh2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihcIldpbmRvdyBpcyBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRG9tYWluKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKFwiV2luZG93IGlzIG5vdCBzYW1lIGRvbWFpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHVwX3RvUHJveHlXaW5kb3coX3JlZjMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNC5jbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY1LmZvY3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY2LnJlc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjcudWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjc3BOb25jZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY4LmdldFBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyZW50RG9tYWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmOS5nZXRQYXJlbnREb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGVjb3JhdGU6IGZ1bmN0aW9uKF9yZWYxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMTAuc2hvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYxMS5oaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkRpc3BsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uUmVuZGVyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHByb3BzX2RlZmF1bHROb29wLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGU6IHByb3BzX2RlY29yYXRlT25jZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvblJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvcmF0ZTogcHJvcHNfZGVjb3JhdGVPbmNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uRGVzdHJveToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEZWxlZ2F0ZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBwcm9wc19kZWZhdWx0Tm9vcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29yYXRlOiBwcm9wc19kZWNvcmF0ZU9uY2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25SZXNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RGVsZWdhdGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcHJvcHNfZGVmYXVsdE5vb3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRvQ2hpbGQ6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dEZWxlZ2F0ZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBwcm9wc19kZWZhdWx0Tm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kVG9DaGlsZDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERlY29yYXRlOiBmdW5jdGlvbihfcmVmMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjEyLm9uRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUb0NoaWxkOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHByb3BzX2RlZmF1bHROb29wLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREZWNvcmF0ZTogZnVuY3Rpb24oX3JlZjEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYxMy5vblByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgcHJvcHNEZWYpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyVGVtcGxhdGUpIHRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciB0ZW1wbGF0ZSByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VVcmw6IGJyaWRnZVVybCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNEZWY6IHByb3BzRGVmLFxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdXRvUmVzaXplOiBhdXRvUmVzaXplLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUGFyZW50RG9tYWluczogYWxsb3dlZFBhcmVudERvbWFpbnMsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb250ZXh0OiBkZWZhdWx0Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVGVtcGxhdGU6IGNvbnRhaW5lclRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBwcmVyZW5kZXJUZW1wbGF0ZTogcHJlcmVuZGVyVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIsXG4gICAgICAgICAgICAgICAgICAgIGVsaWdpYmxlOiBlbGlnaWJsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KG9wdHMpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsIHRhZyA9IG9wdGlvbnMudGFnLCBkZWZhdWx0Q29udGV4dCA9IG9wdGlvbnMuZGVmYXVsdENvbnRleHQsIHByb3BzRGVmID0gb3B0aW9ucy5wcm9wc0RlZiwgZWxpZ2libGUgPSBvcHRpb25zLmVsaWdpYmxlO1xuICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKCk7XG4gICAgICAgICAgICB2YXIgZHJpdmVyQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBpc0NoaWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBnZXRDaGlsZFBheWxvYWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbihwYXlsb2FkICYmIHBheWxvYWQudGFnID09PSB0YWcgJiYgcGF5bG9hZC5jaGlsZERvbWFpbiA9PT0gZ2V0RG9tYWluKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZWdpc3RlckNoaWxkID0gbWVtb2l6ZSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hpbGQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lnhwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbC5jb21wb25lbnRzW3RhZ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHJlZ2lzdGVyIFwiICsgbmFtZSArIFwiIGFzIGNoaWxkIC0gY2hpbGQgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wc0RlZiA9IG9wdGlvbnMucHJvcHNEZWYsIGF1dG9SZXNpemUgPSBvcHRpb25zLmF1dG9SZXNpemUsIGFsbG93ZWRQYXJlbnREb21haW5zID0gb3B0aW9ucy5hbGxvd2VkUGFyZW50RG9tYWlucztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvblByb3BIYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkUGF5bG9hZCA9IGdldENoaWxkUGF5bG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFBheWxvYWQpIHRocm93IG5ldyBFcnJvcihcIk5vIGNoaWxkIHBheWxvYWQgZm91bmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCI5XzBfNjNcIiAhPT0gY2hpbGRQYXlsb2FkLnZlcnNpb24pIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCB3aW5kb3cgaGFzIHpvaWQgdmVyc2lvbiBcIiArIGNoaWxkUGF5bG9hZC52ZXJzaW9uICsgXCIsIGNoaWxkIHdpbmRvdyBoYXMgdmVyc2lvbiA5XzBfNjNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdWlkID0gY2hpbGRQYXlsb2FkLnVpZCwgcGFyZW50RG9tYWluID0gY2hpbGRQYXlsb2FkLnBhcmVudERvbWFpbiwgZXhwb3J0cyA9IGNoaWxkUGF5bG9hZC5leHBvcnRzLCBjb250ZXh0ID0gY2hpbGRQYXlsb2FkLmNvbnRleHQsIHByb3BzUmVmID0gY2hpbGRQYXlsb2FkLnByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudENvbXBvbmVudFdpbmRvdyA9IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib3BlbmVyXCIgPT09IHR5cGUpIHJldHVybiBhc3NlcnRFeGlzdHMoXCJvcGVuZXJcIiwgZ2V0T3BlbmVyKHdpbmRvdykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInBhcmVudFwiID09PSB0eXBlICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIHJlZi5kaXN0YW5jZSkgcmV0dXJuIGFzc2VydEV4aXN0cyhcInBhcmVudFwiLCBmdW5jdGlvbih3aW4sIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBuICYmIChuID0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih3aW4sIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gbiAmJiAobiA9IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB1dGlsc19nZXRQYXJlbnQocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0od2luLCBnZXREaXN0YW5jZUZyb21Ub3Aod2luKSAtIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0od2luZG93LCByZWYuZGlzdGFuY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJnbG9iYWxcIiA9PT0gdHlwZSAmJiByZWYudWlkICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIHJlZi51aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVpZCA9IHJlZi51aWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IGdldEFuY2VzdG9yKHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYW5jZXN0b3IpIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZmluZCBhbmNlc3RvciB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9nZXRBbGxGcmFtZXNJbldpbmRvdzIgPSBnZXRBbGxGcmFtZXNJbldpbmRvdyhhbmNlc3Rvcik7IF9pMiA8IF9nZXRBbGxGcmFtZXNJbldpbmRvdzIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lID0gX2dldEFsbEZyYW1lc0luV2luZG93MltfaTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2FtZURvbWFpbihmcmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsID0gbGliX2dsb2JhbF9nZXRHbG9iYWwoZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWwgJiYgZ2xvYmFsLndpbmRvd3MgJiYgZ2xvYmFsLndpbmRvd3NbdWlkXSkgcmV0dXJuIGdsb2JhbC53aW5kb3dzW3VpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgXCIgKyB0eXBlICsgXCIgcGFyZW50IGNvbXBvbmVudCB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGNoaWxkUGF5bG9hZC5wYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHNldHVwX2Rlc2VyaWFsaXplTWVzc2FnZShwYXJlbnRDb21wb25lbnRXaW5kb3csIHBhcmVudERvbWFpbiwgZXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdyA9IHBhcmVudC5zaG93LCBoaWRlID0gcGFyZW50LmhpZGUsIGNsb3NlID0gcGFyZW50LmNsb3NlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFBhcmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb21wb25lbnRXaW5kb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFBhcmVudERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnREb21haW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUHJvcHMgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9wSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5vbkVycm9yKSByZXR1cm4gcGFyZW50Lm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzaXplID0gZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnJlc2l6ZS5maXJlQW5kRm9yZ2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IF9yZWYyLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF9yZWYyLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXRQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzLCBvcmlnaW4sIGlzVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBpc1VwZGF0ZSAmJiAoaXNVcGRhdGUgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRQcm9wcyA9IGZ1bmN0aW9uKHBhcmVudENvbXBvbmVudFdpbmRvdywgcHJvcHNEZWYsIHByb3BzLCBvcmlnaW4sIGhlbHBlcnMsIGlzVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gaXNVcGRhdGUgJiYgKGlzVXBkYXRlID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNEZWZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvcCB8fCAhcHJvcC5zYW1lRG9tYWluIHx8IG9yaWdpbiA9PT0gZ2V0RG9tYWluKHdpbmRvdykgJiYgaXNTYW1lRG9tYWluKHBhcmVudENvbXBvbmVudFdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBub3JtYWxpemVDaGlsZFByb3AocHJvcHNEZWYsIDAsIGtleSwgcHJvcHNba2V5XSwgaGVscGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wICYmIHByb3AuYWxpYXMgJiYgIXJlc3VsdFtwcm9wLmFsaWFzXSAmJiAocmVzdWx0W3Byb3AuYWxpYXNdID0gdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVcGRhdGUpIGZvciAodmFyIF9pNCA9IDAsIF9PYmplY3Qka2V5czQgPSBPYmplY3Qua2V5cyhwcm9wc0RlZik7IF9pNCA8IF9PYmplY3Qka2V5czQubGVuZ3RoOyBfaTQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9rZXkgPSBfT2JqZWN0JGtleXM0W19pNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYXNPd25Qcm9wZXJ0eShfa2V5KSB8fCAocmVzdWx0W19rZXldID0gbm9ybWFsaXplQ2hpbGRQcm9wKHByb3BzRGVmLCAwLCBfa2V5LCB2b2lkIDAsIGhlbHBlcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ocGFyZW50Q29tcG9uZW50V2luZG93LCBwcm9wc0RlZiwgbmV3UHJvcHMsIG9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBoaWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogY2xvc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiBjaGlsZF9mb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiByZXNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvcHM6IG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBhcmVudDogZ2V0UGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnREb21haW46IGdldFBhcmVudERvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpc1VwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPyBleHRlbmQocHJvcHMsIG5vcm1hbGl6ZWRQcm9wcykgOiBwcm9wcyA9IG5vcm1hbGl6ZWRQcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBvblByb3BIYW5kbGVycy5sZW5ndGg7IF9pNCsrKSAoMCwgb25Qcm9wSGFuZGxlcnNbX2k0XSkocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVQcm9wcyA9IGZ1bmN0aW9uKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRQcm9wcyhuZXdQcm9wcywgcGFyZW50RG9tYWluLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlX1phbGdvUHJvbWlzZS50cnkoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGFsbG93ZWRQYXJlbnREb21haW5zLCBkb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoRG9tYWluKGFsbG93ZWRQYXJlbnREb21haW5zLCBkb21haW4pKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGJlIHJlbmRlcmVkIGJ5IGRvbWFpbjogXCIgKyBkb21haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbGxvd2VkUGFyZW50RG9tYWlucywgcGFyZW50RG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtXaW5kb3dLbm93bihwYXJlbnRDb21wb25lbnRXaW5kb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoZWNrQ2xvc2UuZmlyZUFuZEZvcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGVja0Nsb3NlLmZpcmVBbmRGb3JnZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZVdpbmRvdyhwYXJlbnRDb21wb25lbnRXaW5kb3csIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvcHM6IHVwZGF0ZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBjaGlsZF9kZXN0cm95XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfYXV0b1Jlc2l6ZSR3aWR0aCA9IGF1dG9SZXNpemUud2lkdGgsIHdpZHRoID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSR3aWR0aCAmJiBfYXV0b1Jlc2l6ZSR3aWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXV0b1Jlc2l6ZSRoZWlnaHQgPSBhdXRvUmVzaXplLmhlaWdodCwgaGVpZ2h0ID0gdm9pZCAwICE9PSBfYXV0b1Jlc2l6ZSRoZWlnaHQgJiYgX2F1dG9SZXNpemUkaGVpZ2h0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hdXRvUmVzaXplJGVsZW1lbnQgPSBhdXRvUmVzaXplLmVsZW1lbnQsIGVsZW1lbnRSZWFkeSh2b2lkIDAgPT09IF9hdXRvUmVzaXplJGVsZW1lbnQgPyBcImJvZHlcIiA6IF9hdXRvUmVzaXplJGVsZW1lbnQpLmNhdGNoKHNyY191dGlsX25vb3ApLnRoZW4oKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkudGhlbigoZnVuY3Rpb24oX3JlZjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBfcmVmMy53aWR0aCwgaGVpZ2h0ID0gX3JlZjMuaGVpZ2h0LCBlbGVtZW50ID0gX3JlZjMuZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ICYmICh3aWR0aCB8fCBoZWlnaHQpICYmIGNvbnRleHQgIT09IENPTlRFWFQuUE9QVVAgJiYgb25SZXNpemUoZWxlbWVudCwgKGZ1bmN0aW9uKF9yZWY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGggPyBfcmVmNC53aWR0aCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8gX3JlZjQuaGVpZ2h0IDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYXV0b1Jlc2l6ZSR3aWR0aCwgd2lkdGgsIF9hdXRvUmVzaXplJGhlaWdodCwgaGVpZ2h0LCBfYXV0b1Jlc2l6ZSRlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcykgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyhmdW5jdGlvbihwYXJlbnRDb21wb25lbnRXaW5kb3csIGRvbWFpbiwgX3JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsIHVpZCA9IF9yZWYudWlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwicmF3XCIgPT09IHR5cGUpIHByb3BzID0gX3JlZi52YWx1ZTsgZWxzZSBpZiAoXCJ1aWRcIiA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTYW1lRG9tYWluKHBhcmVudENvbXBvbmVudFdpbmRvdykpIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjb21wb25lbnQgd2luZG93IGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiAtIGV4cGVjdGVkIFwiICsgZ2V0RG9tYWluKCkgKyBcIiAtIGNhbiBub3QgcmV0cmlldmUgcHJvcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdsb2JhbCA9IGxpYl9nbG9iYWxfZ2V0R2xvYmFsKHBhcmVudENvbXBvbmVudFdpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBhc3NlcnRFeGlzdHMoXCJwcm9wc1wiLCBnbG9iYWwgJiYgZ2xvYmFsLnByb3BzW3VpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcykgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgcHJvcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dXBfZGVzZXJpYWxpemVNZXNzYWdlKHBhcmVudENvbXBvbmVudFdpbmRvdywgZG9tYWluLCBwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ocGFyZW50Q29tcG9uZW50V2luZG93LCBwYXJlbnREb21haW4sIHByb3BzUmVmKSwgcGFyZW50RG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgX2VsaWdpYmxlID0gZWxpZ2libGUoe1xuICAgICAgICAgICAgICAgICAgICBwcm9wczogcHJvcHMgPSBwcm9wcyB8fCB7fVxuICAgICAgICAgICAgICAgIH0pLCBlbGlnaWJpbGl0eSA9IF9lbGlnaWJsZS5lbGlnaWJsZSwgcmVhc29uID0gX2VsaWdpYmxlLnJlYXNvbjtcbiAgICAgICAgICAgICAgICB2YXIgb25EZXN0cm95ID0gcHJvcHMub25EZXN0cm95O1xuICAgICAgICAgICAgICAgIHByb3BzLm9uRGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSAmJiBlbGlnaWJpbGl0eSAmJiBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkRlc3Ryb3kpIHJldHVybiBvbkRlc3Ryb3kuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHBhcmVudENvbXBvbmVudChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGVsaWdpYmlsaXR5ID8gcGFyZW50LnNldFByb3BzKHByb3BzKSA6IHByb3BzLm9uRGVzdHJveSAmJiBwcm9wcy5vbkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBjbGVhbkluc3RhbmNlcy5yZWdpc3RlcigoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5kZXN0cm95KGVyciB8fCBuZXcgRXJyb3IoXCJ6b2lkIGRlc3Ryb3llZCBhbGwgY29tcG9uZW50c1wiKSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBfcmVuZGVyID0gZnVuY3Rpb24odGFyZ2V0LCBjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VfWmFsZ29Qcm9taXNlLnRyeSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsaWdpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihyZWFzb24gfHwgbmFtZSArIFwiIGNvbXBvbmVudCBpcyBub3QgZWxpZ2libGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5kZXN0cm95KGVycikudGhlbigoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV2luZG93KHRhcmdldCkpIHRocm93IG5ldyBFcnJvcihcIk11c3QgcGFzcyB3aW5kb3cgdG8gcmVuZGVyVG9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLndpbmRvdykgcmV0dXJuIHNldHVwX3RvUHJveHlXaW5kb3cocHJvcHMud2luZG93KS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dCAhPT0gQ09OVEVYVC5JRlJBTUUgJiYgY29udGV4dCAhPT0gQ09OVEVYVC5QT1BVUCkgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGNvbnRleHQ6IFwiICsgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbihmaW5hbENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGNvbnRhaW5lciAmJiAhaXNFbGVtZW50KGNvbnRhaW5lcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgb3IgZWxlbWVudCBzZWxlY3RvciB0byBiZSBwYXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0ID09PSBDT05URVhULlBPUFVQKSByZXR1cm4gXCJib2R5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZWxlbWVudCB0byBiZSBwYXNzZWQgdG8gcmVuZGVyIGlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZmluYWxDb250ZXh0LCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5yZW5kZXIodGFyZ2V0LCBjb250YWluZXIsIGZpbmFsQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmRlc3Ryb3koZXJyKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gX2V4dGVuZHMoe30sIHBhcmVudC5nZXRIZWxwZXJzKCksIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFbGlnaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxpZ2liaWxpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbihfdGVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYzJGRlY29yYXRlID0gKHZvaWQgMCA9PT0gX3RlbXAgPyB7fSA6IF90ZW1wKS5kZWNvcmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0KCh2b2lkIDAgPT09IF9yZWYzJGRlY29yYXRlID8gaWRlbnRpdHkgOiBfcmVmMyRkZWNvcmF0ZSkocHJvcHMpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVuZGVyKHdpbmRvdywgY29udGFpbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG86IGZ1bmN0aW9uKHRhcmdldCwgY29udGFpbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlbmRlcih0YXJnZXQsIGNvbnRhaW5lciwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbGlnaWJpbGl0eSAmJiBpbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlZ2lzdGVyQ2hpbGQoKTtcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb3dEZWxlZ2F0ZUxpc3RlbmVyID0gb25fb24oXCJ6b2lkX2FsbG93X2RlbGVnYXRlX1wiICsgbmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZUxpc3RlbmVyID0gb25fb24oXCJ6b2lkX2RlbGVnYXRlX1wiICsgbmFtZSwgKGZ1bmN0aW9uKF9yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50Q29tcG9uZW50KG9wdGlvbnMsIF9yZWYuZGF0YS5vdmVycmlkZXMsIF9yZWYuc291cmNlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBjbGVhblpvaWQucmVnaXN0ZXIoYWxsb3dEZWxlZ2F0ZUxpc3RlbmVyLmNhbmNlbCk7XG4gICAgICAgICAgICAgICAgY2xlYW5ab2lkLnJlZ2lzdGVyKGRlbGVnYXRlTGlzdGVuZXIuY2FuY2VsKTtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIGdsb2JhbC5jb21wb25lbnRzID0gZ2xvYmFsLmNvbXBvbmVudHMgfHwge307XG4gICAgICAgICAgICBpZiAoZ2xvYmFsLmNvbXBvbmVudHNbdGFnXSkgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCByZWdpc3RlciBtdWx0aXBsZSBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgdGFnOiBcIiArIHRhZyk7XG4gICAgICAgICAgICBnbG9iYWwuY29tcG9uZW50c1t0YWddID0gITA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluaXQ6IGluaXQsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG4gICAgICAgICAgICAgICAgZHJpdmVyOiBmdW5jdGlvbihkcml2ZXJOYW1lLCBkZXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdDogcmVhY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyOiBhbmd1bGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdnVlOiB2dWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyMjogYW5ndWxhcjJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJzW2RyaXZlck5hbWVdKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkcml2ZXIgZm9yIGZyYW1ld29yazogXCIgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZHJpdmVyQ2FjaGVbZHJpdmVyTmFtZV0gfHwgKGRyaXZlckNhY2hlW2RyaXZlck5hbWVdID0gZHJpdmVyc1tkcml2ZXJOYW1lXS5yZWdpc3Rlcih0YWcsIHByb3BzRGVmLCBpbml0LCBkZXApKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlckNhY2hlW2RyaXZlck5hbWVdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXNDaGlsZDogaXNDaGlsZCxcbiAgICAgICAgICAgICAgICBjYW5SZW5kZXJUbzogZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kX3NlbmQod2luLCBcInpvaWRfYWxsb3dfZGVsZWdhdGVfXCIgKyBuYW1lKS50aGVuKChmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyQ2hpbGQ6IHJlZ2lzdGVyQ2hpbGRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbF9nZXRHbG9iYWwoKS5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxfZ2V0R2xvYmFsKCkuaW5pdGlhbGl6ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgb24gPSAoX3JlZjMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSkub24sIHNlbmQgPSBfcmVmMy5zZW5kLCAoZ2xvYmFsID0gZ2xvYmFsX2dldEdsb2JhbCgpKS5yZWNlaXZlTWVzc2FnZSA9IGdsb2JhbC5yZWNlaXZlTWVzc2FnZSB8fCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZV9yZWNlaXZlTWVzc2FnZShtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oX3JlZjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbiA9IF9yZWY1Lm9uLCBzZW5kID0gX3JlZjUuc2VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFN0b3JlKCkuZ2V0T3JTZXQoXCJwb3N0TWVzc2FnZUxpc3RlbmVyXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwibWVzc2FnZVwiLCAoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGV2ZW50LCBfcmVmNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gX3JlZjQub24sIHNlbmQgPSBfcmVmNC5zZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZV9aYWxnb1Byb21pc2UudHJ5KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZXZlbnQuc291cmNlIHx8IGV2ZW50LnNvdXJjZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbiB8fCBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bGxcIiA9PT0gb3JpZ2luICYmIChvcmlnaW4gPSBcImZpbGU6Ly9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9yaWdpbikgdGhyb3cgbmV3IEVycm9yKFwiUG9zdCBtZXNzYWdlIGRpZCBub3QgaGF2ZSBvcmlnaW4gZG9tYWluXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlX3JlY2VpdmVNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihfcmVmOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uID0gX3JlZjgub24sIHNlbmQgPSBfcmVmOC5zZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmUoXCJidWlsdGluTGlzdGVuZXJzXCIpLmdldE9yU2V0KFwiaGVsbG9MaXN0ZW5lclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gb24oXCJwb3N0cm9ib3RfaGVsbG9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGZ1bmN0aW9uKF9yZWYzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVIZWxsb1Byb21pc2UoX3JlZjMuc291cmNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW46IF9yZWYzLm9yaWdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSUQ6IGdldEluc3RhbmNlSUQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZ2V0QW5jZXN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgJiYgc2F5SGVsbG8ocGFyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZnVuY3Rpb24oZXJyKSB7fSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogb25fb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kOiBzZW5kX3NlbmRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfcmVmMywgb24sIHNlbmQsIGdsb2JhbDtcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHZhciBjb21wID0gY29tcG9uZW50X2NvbXBvbmVudChvcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBpbml0ID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcC5pbml0KHByb3BzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0LmRyaXZlciA9IGZ1bmN0aW9uKG5hbWUsIGRlcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wLmRyaXZlcihuYW1lLCBkZXApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGluaXQuaXNDaGlsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wLmlzQ2hpbGQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0LmNhblJlbmRlclRvID0gZnVuY3Rpb24od2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2FuUmVuZGVyVG8od2luKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0Lmluc3RhbmNlcyA9IGNvbXAuaW5zdGFuY2VzO1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY29tcC5yZWdpc3RlckNoaWxkKCk7XG4gICAgICAgICAgICBjaGlsZCAmJiAod2luZG93Lnhwcm9wcyA9IGluaXQueHByb3BzID0gY2hpbGQuZ2V0UHJvcHMoKSk7XG4gICAgICAgICAgICByZXR1cm4gaW5pdDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95Q29tcG9uZW50cyhlcnIpIHtcbiAgICAgICAgICAgIHZhciBkZXN0cm95UHJvbWlzZSA9IGNsZWFuSW5zdGFuY2VzLmFsbChlcnIpO1xuICAgICAgICAgICAgY2xlYW5JbnN0YW5jZXMgPSBjbGVhbnVwKCk7XG4gICAgICAgICAgICByZXR1cm4gZGVzdHJveVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlc3Ryb3lBbGwgPSBkZXN0cm95Q29tcG9uZW50cztcbiAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50X2Rlc3Ryb3koZXJyKSB7XG4gICAgICAgICAgICBkZXN0cm95QWxsKCk7XG4gICAgICAgICAgICBkZWxldGUgd2luZG93Ll9fem9pZF85XzBfNjNfXztcbiAgICAgICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAhZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUxpc3RlbmVycyA9IGdsb2JhbFN0b3JlKFwicmVzcG9uc2VMaXN0ZW5lcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9yZXNwb25zZUxpc3RlbmVycyRrZTIgPSByZXNwb25zZUxpc3RlbmVycy5rZXlzKCk7IF9pMiA8IF9yZXNwb25zZUxpc3RlbmVycyRrZTIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2ggPSBfcmVzcG9uc2VMaXN0ZW5lcnMka2UyW19pMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSByZXNwb25zZUxpc3RlbmVycy5nZXQoaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciAmJiAobGlzdGVuZXIuY2FuY2VsbGVkID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VMaXN0ZW5lcnMuZGVsKGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIChsaXN0ZW5lciA9IGdsb2JhbFN0b3JlKCkuZ2V0KFwicG9zdE1lc3NhZ2VMaXN0ZW5lclwiKSkgJiYgbGlzdGVuZXIuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuX19wb3N0X3JvYm90XzEwXzBfNDJfXztcbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHJldHVybiBjbGVhblpvaWQuYWxsKGVycik7XG4gICAgICAgIH1cbiAgICB9IF0pO1xufSkpOyJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxDQUFDLFNBQVMsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUN6QixLQUE4RCxpQkFBaUIsT0FBTyxFQUFFLENBQTBKLENBQUM7SUFDblAsQ0FBQyxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUdBLGNBQUksR0FBRyxXQUFXO0lBQ3hELElBQUksT0FBTyxTQUFTLE9BQU8sRUFBRTtJQUM3QixRQUFRLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLFFBQVEsU0FBUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDL0MsWUFBWSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RGLFlBQVksSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUc7SUFDdEQsZ0JBQWdCLENBQUMsRUFBRSxRQUFRO0lBQzNCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLGdCQUFnQixPQUFPLEVBQUUsRUFBRTtJQUMzQixhQUFhLENBQUM7SUFDZCxZQUFZLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hHLFlBQVksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixZQUFZLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxTQUFTO0lBQ1QsUUFBUSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3hDLFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBQ2pELFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLFNBQVMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDaEUsWUFBWSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN6RixnQkFBZ0IsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5QixnQkFBZ0IsR0FBRyxFQUFFLE1BQU07SUFDM0IsYUFBYSxDQUFDLENBQUM7SUFDZixTQUFTLENBQUM7SUFDVixRQUFRLG1CQUFtQixDQUFDLENBQUMsR0FBRyxTQUFTLE9BQU8sRUFBRTtJQUNsRCxZQUFZLFdBQVcsSUFBSSxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFDckgsZ0JBQWdCLEtBQUssRUFBRSxRQUFRO0lBQy9CLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7SUFDekQsZ0JBQWdCLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekIsYUFBYSxDQUFDLENBQUM7SUFDZixTQUFTLENBQUM7SUFDVixRQUFRLG1CQUFtQixDQUFDLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDdEQsWUFBWSxDQUFDLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdELFlBQVksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3ZDLFlBQVksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLEtBQUssQ0FBQztJQUNoRyxZQUFZLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsWUFBWSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsWUFBWSxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7SUFDakQsZ0JBQWdCLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDOUIsZ0JBQWdCLEtBQUssRUFBRSxLQUFLO0lBQzVCLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksUUFBUSxJQUFJLE9BQU8sS0FBSyxFQUFFLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQzFILGdCQUFnQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLFlBQVksT0FBTyxFQUFFLENBQUM7SUFDdEIsU0FBUyxDQUFDO0lBQ1YsUUFBUSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsU0FBUyxNQUFNLEVBQUU7SUFDakQsWUFBWSxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxXQUFXO0lBQ2xFLGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDdEMsYUFBYSxHQUFHLFdBQVc7SUFDM0IsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDO0lBQzlCLGFBQWEsQ0FBQztJQUNkLFlBQVksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsWUFBWSxPQUFPLE1BQU0sQ0FBQztJQUMxQixTQUFTLENBQUM7SUFDVixRQUFRLG1CQUFtQixDQUFDLENBQUMsR0FBRyxTQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDM0QsWUFBWSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RCxTQUFTLENBQUM7SUFDVixRQUFRLG1CQUFtQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkMsUUFBUSxPQUFPLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxLQUFLLENBQUMsRUFBRSxTQUFTLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtJQUVuRSxRQUFRLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25ELFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixHQUFHLFdBQVc7SUFDakYsWUFBWSxPQUFPLGtCQUFrQixDQUFDO0lBQ3RDLFNBQVMsRUFBRSxDQUFDO0lBQ1osUUFBUSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxHQUFHLFdBQVc7SUFDekUsWUFBWSxPQUFPLE1BQU0sQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBQztJQUNaLFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsR0FBRyxXQUFXO0lBQzFFLFlBQVksT0FBTyxpQkFBaUIsQ0FBQztJQUNyQyxTQUFTLEVBQUUsQ0FBQztJQUNaLFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixHQUFHLFdBQVc7SUFDcEYsWUFBWSxPQUFPLGlCQUFpQixDQUFDO0lBQ3JDLFNBQVMsRUFBRSxDQUFDO0lBQ1osUUFBUSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxHQUFHLFdBQVc7SUFDN0UsWUFBWSxPQUFPLFVBQVUsQ0FBQztJQUM5QixTQUFTLEVBQUUsQ0FBQztJQUNaLFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsR0FBRyxXQUFXO0lBQzVFLFlBQVksT0FBTyxTQUFTLENBQUM7SUFDN0IsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsR0FBRyxXQUFXO0lBQ3JGLFlBQVksT0FBTyxrQkFBa0IsQ0FBQztJQUN0QyxTQUFTLEVBQUUsQ0FBQztJQUNaLFFBQVEsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsR0FBRyxXQUFXO0lBQzFFLFlBQVksT0FBTyxPQUFPLENBQUM7SUFDM0IsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLEdBQUcsV0FBVztJQUN4RSxZQUFZLE9BQU8sS0FBSyxDQUFDO0lBQ3pCLFNBQVMsRUFBRSxDQUFDO0lBQ1osUUFBUSxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFO0lBQ3RELFlBQVksUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRSxZQUFZLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUN0RCxZQUFZLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQzVDLFNBQVM7SUFDVCxRQUFRLFNBQVMsUUFBUSxHQUFHO0lBQzVCLFlBQVksT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsTUFBTSxFQUFFO0lBQ2pFLGdCQUFnQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMzRCxvQkFBb0IsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLG9CQUFvQixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakgsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLE1BQU0sQ0FBQztJQUM5QixhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxTQUFTO0lBQ1QsUUFBUSxTQUFTLGVBQWUsQ0FBQyxJQUFJLEVBQUU7SUFDdkMsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsZ0JBQWdCLElBQUksV0FBVyxJQUFJLE9BQU8sT0FBTyxJQUFJLElBQUksWUFBWSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RixnQkFBZ0IsSUFBSSxXQUFXLElBQUksT0FBTyxNQUFNLElBQUksVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLFlBQVksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25JLGdCQUFnQixJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sSUFBSSxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksWUFBWSxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0ksZ0JBQWdCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDNUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFO0lBQy9CLG9CQUFvQixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELG9CQUFvQixJQUFJLGlCQUFpQixLQUFLLElBQUksSUFBSSxpQkFBaUIsS0FBSyxJQUFJLElBQUksb0JBQW9CLEtBQUssSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0gsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDMUIsZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUIsYUFBYTtJQUNiLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0QixTQUFTO0lBQ1QsUUFBUSxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUNsQyxRQUFRLElBQUksZ0NBQWdDLEdBQUcsRUFBRSxDQUFDO0lBQ2xELFFBQVEsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLFFBQVEsSUFBSSxZQUFZLENBQUM7SUFDekIsUUFBUSxTQUFTLFdBQVcsR0FBRztJQUMvQixZQUFZLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxFQUFFO0lBQzlDLGdCQUFnQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDM0MsZ0JBQWdCLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDcEMsZ0JBQWdCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVEsU0FBUyxXQUFXLEdBQUc7SUFDL0IsWUFBWSxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQzdCLFNBQVM7SUFDVCxRQUFRLFNBQVMsU0FBUyxHQUFHO0lBQzdCLFlBQVksV0FBVyxJQUFJLENBQUMsQ0FBQztJQUM3QixZQUFZLFdBQVcsRUFBRSxDQUFDO0lBQzFCLFNBQVM7SUFDVCxRQUFRLElBQUksb0JBQW9CLEdBQUcsV0FBVztJQUM5QyxZQUFZLFNBQVMsWUFBWSxDQUFDLE9BQU8sRUFBRTtJQUMzQyxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFnQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNuQyxnQkFBZ0IsSUFBSSxPQUFPLEVBQUU7SUFDN0Isb0JBQW9CLElBQUksT0FBTyxDQUFDO0lBQ2hDLG9CQUFvQixJQUFJLE1BQU0sQ0FBQztJQUMvQixvQkFBb0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsb0JBQW9CLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLG9CQUFvQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQyxvQkFBb0IsV0FBVyxFQUFFLENBQUM7SUFDbEMsb0JBQW9CLElBQUk7SUFDeEIsd0JBQXdCLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUMvQyw0QkFBNEIsSUFBSSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNO0lBQ2xFLGdDQUFnQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsZ0NBQWdDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDOUMsNkJBQTZCO0lBQzdCLHlCQUF5QixJQUFJLFNBQVMsR0FBRyxFQUFFO0lBQzNDLDRCQUE0QixJQUFJLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU07SUFDakUsZ0NBQWdDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxnQ0FBZ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUM3Qyw2QkFBNkI7SUFDN0IseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNsQyx3QkFBd0IsU0FBUyxFQUFFLENBQUM7SUFDcEMsd0JBQXdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsd0JBQXdCLE9BQU87SUFDL0IscUJBQXFCO0lBQ3JCLG9CQUFvQixTQUFTLEVBQUUsQ0FBQztJQUNoQyxvQkFBb0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLG9CQUFvQixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVksSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUNoRCxZQUFZLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxNQUFNLEVBQUU7SUFDOUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2hFLGdCQUFnQixJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDN0csZ0JBQWdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0lBQzVCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEtBQUssRUFBRTtJQUM1QyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQztJQUNoRSxnQkFBZ0IsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQzNHLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFO0lBQzVCLG9CQUFvQixJQUFJLElBQUksR0FBRyxLQUFLLElBQUksVUFBVSxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekgsb0JBQW9CLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsRUFBRSxXQUFXO0lBQzVELG9CQUFvQixNQUFNLENBQUMsWUFBWSxJQUFJLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRTtJQUNsRSx3QkFBd0IsSUFBSSxDQUFDLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDbEUsNEJBQTRCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCw0QkFBNEIsVUFBVSxFQUFFLFdBQVc7SUFDbkQsZ0NBQWdDLE1BQU0sR0FBRyxDQUFDO0lBQzFDLDZCQUE2QixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLDRCQUE0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0NBQWdDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoSix5QkFBeUI7SUFDekIscUJBQXFCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLGdCQUFnQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDO0lBQzVCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUNqRCxnQkFBZ0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7SUFDNUIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7SUFDekMsZ0JBQWdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakcsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtJQUNqRSxvQkFBb0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxvQkFBb0IsV0FBVyxFQUFFLENBQUM7SUFDbEMsb0JBQW9CLElBQUksS0FBSyxHQUFHLFNBQVMsWUFBWSxFQUFFLGFBQWEsRUFBRTtJQUN0RSx3QkFBd0IsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ2hFLDRCQUE0QixhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELHlCQUF5QixJQUFJLFNBQVMsR0FBRyxFQUFFO0lBQzNDLDRCQUE0QixhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELHlCQUF5QixFQUFFLENBQUM7SUFDNUIscUJBQXFCLENBQUM7SUFDdEIsb0JBQW9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzlELHdCQUF3QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDdkosd0JBQXdCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzlDLHdCQUF3QixJQUFJLFFBQVEsRUFBRSxJQUFJO0lBQzFDLDRCQUE0QixRQUFRLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0Rix5QkFBeUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUN0Qyw0QkFBNEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCw0QkFBNEIsU0FBUztJQUNyQyx5QkFBeUIsTUFBTSxJQUFJLFFBQVEsRUFBRTtJQUM3Qyw0QkFBNEIsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUMxQyxnQ0FBZ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsZ0NBQWdDLFNBQVM7SUFDekMsNkJBQTZCO0lBQzdCLDRCQUE0QixJQUFJO0lBQ2hDLGdDQUFnQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCw2QkFBNkIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMxQyxnQ0FBZ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxnQ0FBZ0MsU0FBUztJQUN6Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHdCQUF3QixJQUFJLFFBQVEsWUFBWSxZQUFZLEtBQUssUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDMUcsNEJBQTRCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakgsNEJBQTRCLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQseUJBQXlCLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsWUFBWSxZQUFZLEtBQUssUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdFIscUJBQXFCO0lBQ3JCLG9CQUFvQixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QyxvQkFBb0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxvQkFBb0IsU0FBUyxFQUFFLENBQUM7SUFDaEMsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDdkQsZ0JBQWdCLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxPQUFPLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQzVKLGdCQUFnQixJQUFJLE9BQU8sSUFBSSxVQUFVLElBQUksT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUNwSixnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFDL0MsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25DLG9CQUFvQixPQUFPLEVBQUUsT0FBTztJQUNwQyxvQkFBb0IsU0FBUyxFQUFFLFNBQVM7SUFDeEMsb0JBQW9CLE9BQU8sRUFBRSxPQUFPO0lBQ3BDLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsZ0JBQWdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxnQkFBZ0IsT0FBTyxPQUFPLENBQUM7SUFDL0IsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsT0FBTyxFQUFFO0lBQzdDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsU0FBUyxFQUFFO0lBQ2pELGdCQUFnQixJQUFJLFNBQVMsSUFBSSxVQUFVLElBQUksT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUMzSSxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ25ELG9CQUFvQixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDeEUsd0JBQXdCLE9BQU8sTUFBTSxDQUFDO0lBQ3RDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCLElBQUksU0FBUyxHQUFHLEVBQUU7SUFDbkMsb0JBQW9CLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUN4RSx3QkFBd0IsTUFBTSxHQUFHLENBQUM7SUFDbEMscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDakQsZ0JBQWdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUM7SUFDaEUsZ0JBQWdCLElBQUksT0FBTyxHQUFHLFVBQVUsRUFBRSxXQUFXO0lBQ3JELG9CQUFvQixNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUIsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLE1BQU0sRUFBRTtJQUNuRCxvQkFBb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLG9CQUFvQixPQUFPLE1BQU0sQ0FBQztJQUNsQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLFNBQVMsR0FBRyxXQUFXO0lBQzFDLGdCQUFnQixJQUFJLFdBQVcsSUFBSSxPQUFPLE9BQU8sRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDakcsZ0JBQWdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxhQUFhLENBQUM7SUFDZCxZQUFZLFlBQVksQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDbkQsZ0JBQWdCLE9BQU8sS0FBSyxZQUFZLFlBQVksR0FBRyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLFNBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtJQUNwSSxvQkFBb0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELGFBQWEsQ0FBQztJQUNkLFlBQVksWUFBWSxDQUFDLE1BQU0sR0FBRyxTQUFTLEtBQUssRUFBRTtJQUNsRCxnQkFBZ0IsT0FBTyxDQUFDLElBQUksWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxhQUFhLENBQUM7SUFDZCxZQUFZLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDdkQsZ0JBQWdCLE9BQU8sQ0FBQyxJQUFJLFlBQVksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsYUFBYSxDQUFDO0lBQ2QsWUFBWSxZQUFZLENBQUMsR0FBRyxHQUFHLFNBQVMsUUFBUSxFQUFFO0lBQ2xELGdCQUFnQixJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUMvQyxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFO0lBQzVCLG9CQUFvQixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLG9CQUFvQixPQUFPLE9BQU8sQ0FBQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7SUFDckUsb0JBQW9CLE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUM1RCx3QkFBd0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6Qyx3QkFBd0IsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLHFCQUFxQixJQUFJLFNBQVMsR0FBRyxFQUFFO0lBQ3ZDLHdCQUF3QixhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCLENBQUM7SUFDbEIsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzFELG9CQUFvQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0Msb0JBQW9CLElBQUksSUFBSSxZQUFZLFlBQVksRUFBRTtJQUN0RCx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0lBQzNDLDRCQUE0QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwRCw0QkFBNEIsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN2Qyw0QkFBNEIsU0FBUztJQUNyQyx5QkFBeUI7SUFDekIscUJBQXFCLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN2RCx3QkFBd0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMxQyx3QkFBd0IsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNuQyx3QkFBd0IsU0FBUztJQUNqQyxxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRSxpQkFBaUI7SUFDakIsZ0JBQWdCLENBQUMsS0FBSyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxnQkFBZ0IsT0FBTyxPQUFPLENBQUM7SUFDL0IsYUFBYSxDQUFDO0lBQ2QsWUFBWSxZQUFZLENBQUMsSUFBSSxHQUFHLFNBQVMsUUFBUSxFQUFFO0lBQ25ELGdCQUFnQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEMsZ0JBQWdCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN2QyxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDMUMsb0JBQW9CLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUN0RCx3QkFBd0IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELHdCQUF3QixlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQzlGLDRCQUE0QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlDLHlCQUF5QixFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25ELHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELGdCQUFnQixPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDeEUsb0JBQW9CLE9BQU8sTUFBTSxDQUFDO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxZQUFZLENBQUMsR0FBRyxHQUFHLFNBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUN2RCxnQkFBZ0IsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRCxhQUFhLENBQUM7SUFDZCxZQUFZLFlBQVksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLE9BQU8sRUFBRTtJQUMxRSxnQkFBZ0IsT0FBTyxTQUFTLE9BQU8sRUFBRTtJQUN6QyxvQkFBb0IsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLG9CQUFvQixPQUFPO0lBQzNCLHdCQUF3QixNQUFNLEVBQUUsV0FBVztJQUMzQyw0QkFBNEIsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxSCx5QkFBeUI7SUFDekIscUJBQXFCLENBQUM7SUFDdEIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDO0lBQ2QsWUFBWSxZQUFZLENBQUMsR0FBRyxHQUFHLFNBQVMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDL0QsZ0JBQWdCLElBQUksTUFBTSxJQUFJLFVBQVUsSUFBSSxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzlILGdCQUFnQixJQUFJLE1BQU0sQ0FBQztJQUMzQixnQkFBZ0IsV0FBVyxFQUFFLENBQUM7SUFDOUIsZ0JBQWdCLElBQUk7SUFDcEIsb0JBQW9CLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0QsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDOUIsb0JBQW9CLFNBQVMsRUFBRSxDQUFDO0lBQ2hDLG9CQUFvQixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsaUJBQWlCO0lBQ2pCLGdCQUFnQixTQUFTLEVBQUUsQ0FBQztJQUM1QixnQkFBZ0IsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELGFBQWEsQ0FBQztJQUNkLFlBQVksWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLE1BQU0sRUFBRTtJQUNsRCxnQkFBZ0IsT0FBTyxJQUFJLFlBQVksRUFBRSxTQUFTLE9BQU8sRUFBRTtJQUMzRCxvQkFBb0IsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUNyRCxnQkFBZ0IsT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEtBQUssWUFBWSxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUYsYUFBYSxDQUFDO0lBQ2QsWUFBWSxZQUFZLENBQUMsS0FBSyxHQUFHLFdBQVc7SUFDNUMsZ0JBQWdCLE9BQU8sU0FBUyxLQUFLLEVBQUU7SUFDdkMsb0JBQW9CLElBQUksT0FBTyxHQUFHLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxLQUFLLENBQUM7SUFDM0Usb0JBQW9CLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLG9CQUFvQixPQUFPLE9BQU8sQ0FBQztJQUNuQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxhQUFhLENBQUM7SUFDZCxZQUFZLE9BQU8sWUFBWSxDQUFDO0lBQ2hDLFNBQVMsRUFBRSxDQUFDO0lBQ1osUUFBUSxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDL0IsWUFBWSxPQUFPLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLFNBQVM7SUFDVCxRQUFRLElBQUksV0FBVyxHQUFHO0lBQzFCLFlBQVksTUFBTSxFQUFFLFFBQVE7SUFDNUIsWUFBWSxLQUFLLEVBQUUsT0FBTztJQUMxQixTQUFTLENBQUM7SUFDVixRQUFRLElBQUksbUJBQW1CLEdBQUcsa0NBQWtDLENBQUM7SUFDckUsUUFBUSxTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUU7SUFDdEMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLFlBQVksT0FBTyxRQUFRLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdEQsU0FBUztJQUNULFFBQVEsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFO0lBQ3RDLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QyxZQUFZLElBQUksR0FBRyxFQUFFLElBQUk7SUFDekIsZ0JBQWdCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEUsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNUIsU0FBUztJQUNULFFBQVEsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2hDLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUk7SUFDbEQsZ0JBQWdCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixTQUFTO0lBQ1QsUUFBUSxTQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtJQUN4QyxZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUIsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNUIsWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLFNBQVM7SUFDVCxRQUFRLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRTtJQUN0QyxZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0MsWUFBWSxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3hDLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDM0UsWUFBWSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzdDLFlBQVksSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDM0UsWUFBWSxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUUsT0FBTyxTQUFTLENBQUM7SUFDdkQsWUFBWSxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7SUFDdkMsZ0JBQWdCLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxnQkFBZ0IsT0FBTyxNQUFNLElBQUksaUJBQWlCLEVBQUUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQzVGLGFBQWE7SUFDYixZQUFZLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDckMsWUFBWSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuRSxZQUFZLE9BQU8sUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsU0FBUztJQUNULFFBQVEsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2hDLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QyxZQUFZLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxZQUFZLE9BQU8sTUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQy9HLFNBQVM7SUFDVCxRQUFRLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRTtJQUNuQyxZQUFZLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUMvQixnQkFBZ0IsSUFBSTtJQUNwQixvQkFBb0IsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEQsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUNoQyxnQkFBZ0IsSUFBSTtJQUNwQixvQkFBb0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRixvQkFBb0IsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEMsZ0JBQWdCLElBQUk7SUFDcEIsb0JBQW9CLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRSxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLGdCQUFnQixJQUFJO0lBQ3BCLG9CQUFvQixJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRixpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlCLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsZ0JBQWdCLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRSxnQkFBZ0IsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNUIsWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLFNBQVM7SUFDVCxRQUFRLFNBQVMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO0lBQ3ZDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDekYsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTO0lBQ1QsUUFBUSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDakQsWUFBWSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0MsWUFBWSxJQUFJLFdBQVcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsWUFBWSxPQUFPLFdBQVcsR0FBRyxXQUFXLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxFQUFFO0lBQy9FLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEMsZ0JBQWdCLElBQUk7SUFDcEIsb0JBQW9CLE1BQU0sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUk7SUFDaEQsd0JBQXdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELHdCQUF3QixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxxQkFBcUI7SUFDckIsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUNoQyxnQkFBZ0IsT0FBTyxNQUFNLENBQUM7SUFDOUIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxTQUFTO0lBQ1QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDaEMsWUFBWSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDNUIsWUFBWSxJQUFJLE1BQU0sQ0FBQztJQUN2QixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMxQixnQkFBZ0IsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUM3QixhQUFhO0lBQ2IsWUFBWSxJQUFJLEdBQUcsQ0FBQztJQUNwQixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzVCLFlBQVksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDO0lBQ3pDLFlBQVksSUFBSSxHQUFHLEVBQUU7SUFDckIsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDOUMsb0JBQW9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLG9CQUFvQixJQUFJO0lBQ3hCLHdCQUF3QixLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2xDLHdCQUF3QixTQUFTO0lBQ2pDLHFCQUFxQjtJQUNyQixvQkFBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxpQkFBaUI7SUFDakIsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDO0lBQzlCLGFBQWE7SUFDYixZQUFZLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDN0MsZ0JBQWdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLGdCQUFnQixJQUFJO0lBQ3BCLG9CQUFvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzlCLG9CQUFvQixPQUFPLE1BQU0sQ0FBQztJQUNsQyxpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxNQUFNLENBQUM7SUFDM0MsZ0JBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsYUFBYTtJQUNiLFlBQVksT0FBTyxNQUFNLENBQUM7SUFDMUIsU0FBUztJQUNULFFBQVEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7SUFDeEMsWUFBWSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDNUIsWUFBWSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdGLGdCQUFnQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsZ0JBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsZ0JBQWdCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pLLGFBQWE7SUFDYixZQUFZLE9BQU8sTUFBTSxDQUFDO0lBQzFCLFNBQVM7SUFDVCxRQUFRLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUM3QixZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0MsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzVDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzVCLFlBQVksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sR0FBRyxDQUFDO0lBQ3pELFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDbkYsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNUIsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNuRixhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixZQUFZLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckgsZ0JBQWdCLElBQUksS0FBSyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELGdCQUFnQixJQUFJO0lBQ3BCLG9CQUFvQixJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEMsZ0JBQWdCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLEtBQUssQ0FBQztJQUNuRSxhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVEsU0FBUyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUU7SUFDM0MsWUFBWSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsWUFBWSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN0RSxZQUFZLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLFlBQVksQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsWUFBWSxPQUFPLE1BQU0sQ0FBQztJQUMxQixTQUFTO0lBQ1QsUUFBUSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDL0IsUUFBUSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDOUIsUUFBUSxTQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO0lBQ2hELFlBQVksS0FBSyxDQUFDLEtBQUssU0FBUyxLQUFLLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLGFBQWE7SUFDYixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDMUIsZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUIsYUFBYTtJQUNiLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssbUJBQW1CLENBQUM7SUFDbkUsYUFBYTtJQUNiLFlBQVksSUFBSSxTQUFTLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUk7SUFDcEQsZ0JBQWdCLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzVCLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNUIsWUFBWSxJQUFJLFdBQVcsR0FBRyxTQUFTLFVBQVUsRUFBRSxJQUFJLEVBQUU7SUFDekQsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUk7SUFDaEUsb0JBQW9CLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsWUFBWSxJQUFJLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtJQUNwQyxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELGdCQUFnQixJQUFJLEtBQUssSUFBSSxTQUFTLEtBQUssRUFBRTtJQUM3QyxvQkFBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RCxvQkFBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxvQkFBb0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxvQkFBb0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLGVBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVGLHdCQUF3QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0Msd0JBQXdCLE1BQU0sTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUM5Ryx3QkFBd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRyxxQkFBcUI7SUFDckIsb0JBQW9CLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxhQUFhO0lBQ2IsWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLFNBQVM7SUFDVCxRQUFRLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUNsQyxZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0MsWUFBWSxPQUFPLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNwRixTQUFTO0lBQ1QsUUFBUSxTQUFTLFFBQVEsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO0lBQ3BELFlBQVksS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDbEUsZ0JBQWdCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxnQkFBZ0IsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakgsYUFBYTtJQUNiLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0QixTQUFTO0lBQ1QsUUFBUSxTQUFTLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtJQUN6QyxZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDN0MsWUFBWSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDN0IsWUFBWSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDN0IsWUFBWSxNQUFNLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLFlBQVksT0FBTyxRQUFRLENBQUM7SUFDNUIsU0FBUztJQUNULFFBQVEsU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtJQUM3QyxZQUFZLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDNUMsWUFBWSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVDLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztJQUN2RCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixZQUFZLElBQUksVUFBVSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELFlBQVksSUFBSSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsWUFBWSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxZQUFZLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxZQUFZLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxZQUFZLE9BQU8sT0FBTyxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQztJQUNuSixZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULFFBQVEsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtJQUM5QyxZQUFZLElBQUksUUFBUSxJQUFJLE9BQU8sT0FBTyxFQUFFO0lBQzVDLGdCQUFnQixJQUFJLFFBQVEsSUFBSSxPQUFPLE1BQU0sRUFBRSxPQUFPLEdBQUcsS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQztJQUM1RixnQkFBZ0IsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckQsYUFBYTtJQUNiLFlBQVksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLFVBQVUsRUFBRTtJQUMvVCxnQkFBZ0IsT0FBTyxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDakIsU0FBUztJQUNULFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDdkMsWUFBWSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzlHLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUM5RCxZQUFZLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDOUMsWUFBWSxLQUFLLENBQUMsS0FBSyxPQUFPLEtBQUssT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRCxZQUFZLElBQUksT0FBTyxDQUFDO0lBQ3hCLFlBQVksQ0FBQyxTQUFTLEtBQUssR0FBRztJQUM5QixnQkFBZ0IsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDekMsb0JBQW9CLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsb0JBQW9CLE9BQU8sUUFBUSxFQUFFLENBQUM7SUFDdEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07SUFDOUQsb0JBQW9CLE9BQU8sSUFBSSxLQUFLLENBQUM7SUFDckMsb0JBQW9CLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELGlCQUFpQjtJQUNqQixhQUFhLEVBQUUsQ0FBQztJQUNoQixZQUFZLE9BQU87SUFDbkIsZ0JBQWdCLE1BQU0sRUFBRSxXQUFXO0lBQ25DLG9CQUFvQixPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELGlCQUFpQjtJQUNqQixhQUFhLENBQUM7SUFDZCxTQUFTO0lBQ1QsUUFBUSxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDL0IsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDMUIsZ0JBQWdCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxhQUFhO0lBQ2IsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0UsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsYUFBYTtJQUNiLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsWUFBWSxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0UsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsYUFBYTtJQUNiLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDMUIsZ0JBQWdCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxhQUFhO0lBQ2IsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pELGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMxQixnQkFBZ0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFFLGFBQWE7SUFDYixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEQsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsYUFBYTtJQUNiLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxHQUFHLElBQUksb0JBQW9CLEtBQUssR0FBRyxDQUFDLG1DQUFtQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkcsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzFCLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFCLGFBQWE7SUFDYixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLElBQUksYUFBYSxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsSUFBSSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRixhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEIsU0FBUztJQUNULFFBQVEsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQ2xDLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzVCLFNBQVM7SUFDVCxRQUFRLFNBQVMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtJQUNwRCxZQUFZLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUk7SUFDNUQsZ0JBQWdCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEIsU0FBUztJQUNULFFBQVEsSUFBSSw4QkFBOEIsR0FBRyxXQUFXO0lBQ3hELFlBQVksU0FBUyxzQkFBc0IsR0FBRztJQUM5QyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNuQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN0QyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNuQyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDOUUsZ0JBQWdCLElBQUksV0FBVztJQUMvQixvQkFBb0IsSUFBSSxXQUFXLElBQUksT0FBTyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRSxvQkFBb0IsSUFBSSxLQUFLLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsb0JBQW9CLElBQUk7SUFDeEIsd0JBQXdCLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDO0lBQ3RELHdCQUF3QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDekMsd0JBQXdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0Msd0JBQXdCLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xFLHdCQUF3QixPQUFPLGVBQWUsS0FBSyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2xDLHdCQUF3QixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBRSxFQUFFLElBQUk7SUFDekIsb0JBQW9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7SUFDL0MsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUNoQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDL0IsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLGFBQWE7SUFDYixZQUFZLElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUMxRCxZQUFZLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxXQUFXO0lBQ3RELGdCQUFnQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLGdCQUFnQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN0RCxvQkFBb0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLG9CQUFvQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDbEUsd0JBQXdCLElBQUksT0FBTyxFQUFFLElBQUk7SUFDekMsNEJBQTRCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQseUJBQXlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUN4Qyx3QkFBd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsd0JBQXdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQ3JELGdCQUFnQixPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUU7SUFDOUMsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xFLGdCQUFnQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLGdCQUFnQixJQUFJLE9BQU8sRUFBRSxJQUFJO0lBQ2pDLG9CQUFvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUM5QixvQkFBb0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQkFBZ0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSTtJQUNyRCxvQkFBb0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QyxvQkFBb0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLG9CQUFvQixLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtJQUNwRyx3QkFBd0IsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUM3Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLG9CQUFvQixPQUFPO0lBQzNCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEMsZ0JBQWdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzdDLGdCQUFnQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JDLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLGdCQUFnQixJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO0lBQ2xDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLG9CQUFvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLGlCQUFpQixNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0MsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQ3ZDLGdCQUFnQixJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsRSxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMzQyxnQkFBZ0IsSUFBSSxPQUFPLEVBQUUsSUFBSTtJQUNqQyxvQkFBb0IsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUM5QixvQkFBb0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQkFBZ0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSTtJQUNyRCxvQkFBb0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxvQkFBb0IsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDekUsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUNoQyxnQkFBZ0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0MsZ0JBQWdCLElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxhQUFhLENBQUM7SUFDZCxZQUFZLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDMUMsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xFLGdCQUFnQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLGdCQUFnQixJQUFJLE9BQU8sRUFBRSxJQUFJO0lBQ2pDLG9CQUFvQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzlCLG9CQUFvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJO0lBQ3JELG9CQUFvQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLG9CQUFvQixLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEYsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUNoQyxnQkFBZ0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0MsZ0JBQWdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckMsZ0JBQWdCLElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4RCxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7SUFDbEMsb0JBQW9CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLG9CQUFvQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUN2QyxnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbEUsZ0JBQWdCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDM0MsZ0JBQWdCLElBQUksT0FBTyxFQUFFLElBQUk7SUFDakMsb0JBQW9CLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzlCLG9CQUFvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJO0lBQ3JELG9CQUFvQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLG9CQUFvQixPQUFPLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEMsZ0JBQWdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzdDLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDckMsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLGdCQUFnQixPQUFPLEtBQUssQ0FBQztJQUM3QixhQUFhLENBQUM7SUFDZCxZQUFZLE9BQU8sc0JBQXNCLENBQUM7SUFDMUMsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUNwQyxZQUFZLE9BQU8sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBQ2xHLGdCQUFnQixPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsU0FBUztJQUNULFFBQVEsU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUN2QyxZQUFZLE9BQU8sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDOUUsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLGdCQUFnQixPQUFPLENBQUMsQ0FBQztJQUN6QixhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLFNBQVM7SUFDVCxRQUFRLFNBQVMseUJBQXlCLEdBQUc7SUFDN0MsWUFBWSxJQUFJLFdBQVcsSUFBSSxPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRSxZQUFZLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRCxZQUFZLElBQUksVUFBVSxJQUFJLE9BQU8sS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEQsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRixnQkFBZ0IsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxQixhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDeEIsZ0JBQWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUIsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLFNBQVMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDMUQsWUFBWSxPQUFPLENBQUMsbUJBQW1CLEdBQUcseUJBQXlCLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDMUgsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDakMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxnQkFBZ0IsSUFBSSxRQUFRLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxnQkFBZ0IsS0FBSyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLGdCQUFnQixPQUFPLFFBQVEsQ0FBQztJQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxTQUFTO0lBQ1QsUUFBUSxTQUFTLCtCQUErQixDQUFDLEtBQUssRUFBRTtJQUN4RCxZQUFZLElBQUksTUFBTSxHQUFHLFVBQVUsSUFBSSxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRSxZQUFZLE9BQU8sQ0FBQywrQkFBK0IsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN0RSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQztJQUM5SCxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7SUFDdkIsZ0JBQWdCLElBQUksVUFBVSxJQUFJLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUMxSCxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsS0FBSyxNQUFNLEVBQUU7SUFDdkMsb0JBQW9CLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsb0JBQW9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLGlCQUFpQjtJQUNqQixnQkFBZ0IsU0FBUyxPQUFPLEdBQUc7SUFDbkMsb0JBQW9CLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEcsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUNuRSxvQkFBb0IsV0FBVyxFQUFFO0lBQ2pDLHdCQUF3QixLQUFLLEVBQUUsT0FBTztJQUN0Qyx3QkFBd0IsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN0Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4QyxxQkFBcUI7SUFDckIsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixnQkFBZ0IsT0FBTyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QixTQUFTO0lBQ1QsUUFBUSxTQUFTLGVBQWUsQ0FBQyxFQUFFLEVBQUU7SUFDckMsWUFBWSxPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQztJQUMzRSxTQUFTO0lBQ1QsUUFBUSxTQUFTLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFO0lBQzNDLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQy9CLGdCQUFnQixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMvQixhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1QixZQUFZLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDaEQsWUFBWSxPQUFPLEVBQUUsQ0FBQztJQUN0QixTQUFTO0lBQ1QsUUFBUSxTQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7SUFDbkMsWUFBWSxJQUFJLFVBQVUsSUFBSSxPQUFPLElBQUksRUFBRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQzNILGdCQUFnQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDakIsWUFBWSxJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRyxZQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNsRSxTQUFTO0lBQ1QsUUFBUSxTQUFTLFFBQVEsR0FBRztJQUM1QixZQUFZLElBQUksS0FBSyxHQUFHLGtCQUFrQixDQUFDO0lBQzNDLFlBQVksT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXO0lBQzFELGdCQUFnQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUksU0FBUztJQUNULFFBQVEsSUFBSSxTQUFTLENBQUM7SUFDdEIsUUFBUSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDckMsWUFBWSxJQUFJO0lBQ2hCLGdCQUFnQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2xGLG9CQUFvQixPQUFPLFVBQVUsSUFBSSxPQUFPLEdBQUcsR0FBRyxVQUFVLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDakYsd0JBQXdCLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSw4QkFBOEIsQ0FBQztJQUNwRix3QkFBd0IsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLElBQUksT0FBTyxHQUFHLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pJLHdCQUF3QixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELHdCQUF3QixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2xDLDRCQUE0QixHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ2hFLDRCQUE0QixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwRCx5QkFBeUI7SUFDekIsd0JBQXdCLE9BQU8sR0FBRyxDQUFDO0lBQ25DLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDMUIsZ0JBQWdCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztJQUM1RixhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVEsU0FBUyxjQUFjLEdBQUc7SUFDbEMsWUFBWSxPQUFPLEVBQUUsQ0FBQztJQUN0QixTQUFTO0lBQ1QsUUFBUSxJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUNuQyxRQUFRLElBQUksMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLFFBQVEsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUMxQyxZQUFZLEtBQUssQ0FBQyxLQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakQsWUFBWSxJQUFJLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLHFCQUFxQixJQUFJLHFCQUFxQixFQUFFLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ25LLFlBQVksSUFBSSxXQUFXLENBQUM7SUFDNUIsWUFBWSxJQUFJLFNBQVMsQ0FBQztJQUMxQixZQUFZLElBQUksWUFBWSxHQUFHLGtCQUFrQixDQUFDO0lBQ2xELFlBQVksa0JBQWtCLElBQUksQ0FBQyxDQUFDO0lBQ3BDLFlBQVksSUFBSSxnQkFBZ0IsR0FBRyxXQUFXO0lBQzlDLGdCQUFnQixLQUFLLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RJLGdCQUFnQixJQUFJLFlBQVksR0FBRywyQkFBMkIsRUFBRTtJQUNoRSxvQkFBb0IsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QyxvQkFBb0IsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQyxvQkFBb0IsWUFBWSxHQUFHLGtCQUFrQixDQUFDO0lBQ3RELG9CQUFvQixrQkFBa0IsSUFBSSxDQUFDLENBQUM7SUFDNUMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLEtBQUssQ0FBQztJQUMxQixnQkFBZ0IsS0FBSyxHQUFHLGFBQWEsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSw4QkFBOEIsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQ3ZLLGdCQUFnQixJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsZ0JBQWdCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxnQkFBZ0IsSUFBSSxXQUFXLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBRTtJQUMzRixvQkFBb0IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0Msb0JBQW9CLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLFdBQVcsRUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDMUQsZ0JBQWdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUQsZ0JBQWdCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRztJQUNsQyxvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsb0JBQW9CLEtBQUssRUFBRSxLQUFLO0lBQ2hDLGlCQUFpQixDQUFDO0lBQ2xCLGdCQUFnQixPQUFPLEtBQUssQ0FBQztJQUM3QixhQUFhLENBQUM7SUFDZCxZQUFZLGdCQUFnQixDQUFDLEtBQUssR0FBRyxXQUFXO0lBQ2hELGdCQUFnQixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25DLGdCQUFnQixTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLGFBQWEsQ0FBQztJQUNkLFlBQVksT0FBTyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQztJQUMvRyxTQUFTO0lBQ1QsUUFBUSxPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVc7SUFDbkMsWUFBWSwyQkFBMkIsR0FBRyxrQkFBa0IsQ0FBQztJQUM3RCxTQUFTLENBQUM7SUFDVixRQUFRLFNBQVMsY0FBYyxDQUFDLE1BQU0sRUFBRTtJQUN4QyxZQUFZLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMzQixZQUFZLFNBQVMsdUJBQXVCLEdBQUc7SUFDL0MsZ0JBQWdCLElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3pELGdCQUFnQixLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlJLGdCQUFnQixJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ2xFLG9CQUFvQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNELGlCQUFpQixFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVc7SUFDeEMsb0JBQW9CLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLGFBQWE7SUFDYixZQUFZLHVCQUF1QixDQUFDLEtBQUssR0FBRyxXQUFXO0lBQ3ZELGdCQUFnQixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzNCLGFBQWEsQ0FBQztJQUNkLFlBQVksT0FBTyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUM7SUFDM0csU0FBUztJQUNULFFBQVEsU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7SUFDcEQsWUFBWSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLFlBQVksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQUM7SUFDaEcsWUFBWSxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsWUFBWSxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25HLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxHQUFHLEVBQUU7SUFDbkMsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDOUIsWUFBWSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixZQUFZLE9BQU8sZUFBZSxFQUFFLFdBQVc7SUFDL0MsZ0JBQWdCLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDN0Isb0JBQW9CLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxvQkFBb0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxpQkFBaUI7SUFDakIsYUFBYSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwRCxTQUFTO0lBQ1QsUUFBUSxTQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVksS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxZQUFZLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxPQUFPLCtCQUErQixDQUFDO0lBQ25FLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsRixnQkFBZ0IsSUFBSSxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDdkQsZ0JBQWdCLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtJQUMxQyxvQkFBb0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDakQsb0JBQW9CLElBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3JELG9CQUFvQixJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNoSCxvQkFBb0IsSUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDNUMsb0JBQW9CLElBQUksT0FBTyxFQUFFLE9BQU8sT0FBTyxDQUFDO0lBQ2hELGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6SCxhQUFhLENBQUMsT0FBTyxNQUFNLEVBQUU7SUFDN0IsZ0JBQWdCLE9BQU8sa0NBQWtDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUYsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtJQUNqQyxZQUFZLE9BQU8sUUFBUSxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzSixTQUFTO0lBQ1QsUUFBUSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ3JDLFlBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEdBQUcsQ0FBQztJQUNwQyxZQUFZLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLFlBQVksS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0YsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTO0lBQ1QsUUFBUSxPQUFPLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDL0IsWUFBWSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELFlBQVksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzVCLFlBQVksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLFlBQVksT0FBTyxNQUFNLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtJQUNoQyxZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDNUMsWUFBWSxJQUFJLE9BQU8sQ0FBQztJQUN4QixZQUFZLENBQUMsU0FBUyxJQUFJLEdBQUc7SUFDN0IsZ0JBQWdCLE9BQU8sR0FBRyxVQUFVLEVBQUUsV0FBVztJQUNqRCxvQkFBb0IsTUFBTSxFQUFFLENBQUM7SUFDN0Isb0JBQW9CLElBQUksRUFBRSxDQUFDO0lBQzNCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksT0FBTztJQUNuQixnQkFBZ0IsTUFBTSxFQUFFLFdBQVc7SUFDbkMsb0JBQW9CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxpQkFBaUI7SUFDakIsYUFBYSxDQUFDO0lBQ2QsU0FBUztJQUNULFFBQVEsU0FBUyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7SUFDbEQsWUFBWSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDcEMsZ0JBQWdCLElBQUksUUFBUSxJQUFJLE9BQU8sR0FBRyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1RixhQUFhLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzFJLFlBQVksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzVDLGdCQUFnQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLGdCQUFnQixVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLGdCQUFnQixHQUFHLEVBQUUsV0FBVztJQUNoQyxvQkFBb0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsb0JBQW9CLElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3pDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLG9CQUFvQixPQUFPLEtBQUssQ0FBQztJQUNqQyxpQkFBaUI7SUFDakIsZ0JBQWdCLEdBQUcsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUNyQyxvQkFBb0IsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDckMsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULFFBQVEsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0lBQ2pDLFlBQVksT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxTQUFTO0lBQ1QsUUFBUSxTQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7SUFDckMsWUFBWSxPQUFPLFFBQVEsSUFBSSxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ILFlBQVksSUFBSSxJQUFJLENBQUM7SUFDckIsU0FBUztJQUNULFFBQVEsU0FBUyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQ3BDLFlBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hELFlBQVksSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUM5QyxZQUFZLElBQUksVUFBVSxJQUFJLE9BQU8sV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsWUFBWSxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ2xELFlBQVksT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlGLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0lBQ3hELFlBQVksS0FBSyxDQUFDLEtBQUssT0FBTyxLQUFLLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRCxZQUFZLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNyQyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRTtJQUN6QyxvQkFBb0IsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsV0FBVztJQUMxRCx3QkFBd0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0Usd0JBQXdCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVILHdCQUF3QixPQUFPLEtBQUssQ0FBQztJQUNyQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQixDQUFDO0lBQ2xCLGdCQUFnQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxnQkFBZ0IsT0FBTyxNQUFNLENBQUM7SUFDOUIsYUFBYTtJQUNiLFlBQVksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDckMsZ0JBQWdCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDM0Msb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sVUFBVSxDQUFDO0lBQ3JFLG9CQUFvQixjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxXQUFXO0lBQzdELHdCQUF3QixJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUMvRSx3QkFBd0IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEUsd0JBQXdCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUgsd0JBQXdCLE9BQU8sS0FBSyxDQUFDO0lBQ3JDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCLENBQUM7SUFDbEIsZ0JBQWdCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxnQkFBZ0IsT0FBTyxPQUFPLENBQUM7SUFDL0IsYUFBYTtJQUNiLFlBQVksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZELFNBQVM7SUFDVCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtJQUNsQyxZQUFZLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQztJQUNqQyxTQUFTO0lBQ1QsUUFBUSxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7SUFDcEMsWUFBWSxPQUFPLGlCQUFpQixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ2pELFlBQVksSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELFlBQVksSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDL0IsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNCLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUztJQUNULFFBQVEsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFO0lBQzlCLFlBQVksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzNCLFlBQVksSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0IsWUFBWSxJQUFJLFFBQVEsQ0FBQztJQUN6QixZQUFZLE9BQU87SUFDbkIsZ0JBQWdCLEdBQUcsRUFBRSxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLEVBQUU7SUFDbEMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekMsd0JBQXdCLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVztJQUNsRCw0QkFBNEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CLE9BQU8sSUFBSSxDQUFDO0lBQ2hDLGlCQUFpQjtJQUNqQixnQkFBZ0IsUUFBUSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQzNDLG9CQUFvQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDN0Usd0JBQXdCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUNuQyxvQkFBb0IsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNuQyxvQkFBb0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3JDLG9CQUFvQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsb0JBQW9CLE1BQU0sS0FBSyxDQUFDLE1BQU0sSUFBSTtJQUMxQyx3QkFBd0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELHdCQUF3QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0MscUJBQXFCO0lBQ3JCLG9CQUFvQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakYsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxRQUFRLFNBQVMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDM0MsWUFBWSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUM7SUFDdEYsWUFBWSxPQUFPLEtBQUssQ0FBQztJQUN6QixTQUFTO0lBQ1QsUUFBUSxJQUFJLG9CQUFvQixHQUFHLFNBQVMsTUFBTSxFQUFFO0lBQ3BELFlBQVksY0FBYyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxZQUFZLFNBQVMsZUFBZSxDQUFDLE9BQU8sRUFBRTtJQUM5QyxnQkFBZ0IsSUFBSSxNQUFNLENBQUM7SUFDM0IsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDN0YsZ0JBQWdCLFVBQVUsSUFBSSxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDdEcsb0JBQW9CLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsMkRBQTJELENBQUMsQ0FBQztJQUMvSCxvQkFBb0IsT0FBTyxJQUFJLENBQUM7SUFDaEMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pGLGdCQUFnQixPQUFPLE1BQU0sQ0FBQztJQUM5QixhQUFhO0lBQ2IsWUFBWSxPQUFPLGVBQWUsQ0FBQztJQUNuQyxTQUFTLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRCxRQUFRLFNBQVMsZUFBZSxHQUFHO0lBQ25DLFlBQVksT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ2hGLFNBQVM7SUFDVCxRQUFRLFNBQVMscUJBQXFCLEdBQUc7SUFDekMsWUFBWSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxLQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDbkYsU0FBUztJQUNULFFBQVEsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2hDLFlBQVksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RyxTQUFTO0lBQ1QsUUFBUSxPQUFPLEVBQUUsV0FBVztJQUM1QixZQUFZLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sRUFBRTtJQUMvRCxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUsSUFBSSxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLENBQUM7SUFDbkYsZ0JBQWdCLElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRSxXQUFXO0lBQ3ZELG9CQUFvQixJQUFJLGVBQWUsRUFBRSxJQUFJLHFCQUFxQixFQUFFLEVBQUU7SUFDdEUsd0JBQXdCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCx3QkFBd0IsT0FBTyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxxQkFBcUI7SUFDckIsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLFNBQVMsVUFBVSxDQUFDLFdBQVcsRUFBRTtJQUN6QyxZQUFZLE9BQU8sYUFBYSxDQUFDLFVBQVUsR0FBRyxXQUFXO0lBQ3pELGdCQUFnQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEMsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUM7SUFDaEQsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLE1BQU0sQ0FBQztJQUNuRSxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pILG9CQUFvQixJQUFJLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsSSxpQkFBaUI7SUFDakIsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDO0lBQzlCLGFBQWEsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDakMsU0FBUztJQUNULFFBQVEsU0FBUyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRTtJQUNuRCxZQUFZLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0MsWUFBWSxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUN0RSxnQkFBZ0IsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUM5RCxvQkFBb0IsT0FBTyxRQUFRLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDdkMsb0JBQW9CLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDO0lBQzlFLFNBQVM7SUFDVCxRQUFRLFNBQVMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUU7SUFDL0MsWUFBWSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLFNBQVM7SUFDVCxRQUFRLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtJQUNwQyxZQUFZLE9BQU8sT0FBTyxZQUFZLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ2pOLFNBQVM7SUFDVCxRQUFRLFNBQVMsY0FBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDekMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLFlBQVksT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsSUFBSSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQy9GLFNBQVM7SUFDVCxRQUFRLFNBQVMsWUFBWSxDQUFDLEVBQUUsRUFBRTtJQUNsQyxZQUFZLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDdkUsZ0JBQWdCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxnQkFBZ0IsSUFBSSxFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLGdCQUFnQixJQUFJLEVBQUUsRUFBRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUsRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzdILGdCQUFnQixJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsV0FBVztJQUN2RCxvQkFBb0IsSUFBSSxFQUFFLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2pELHdCQUF3QixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsd0JBQXdCLE9BQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxlQUFlLEVBQUUsRUFBRTtJQUMzQyx3QkFBd0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELHdCQUF3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlHLHFCQUFxQjtJQUNyQixpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4QixhQUFhLEVBQUUsQ0FBQztJQUNoQixTQUFTO0lBQ1QsUUFBUSxJQUFJLGtCQUFrQixHQUFHLFNBQVMsZ0JBQWdCLEVBQUU7SUFDNUQsWUFBWSxjQUFjLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDN0QsWUFBWSxTQUFTLGNBQWMsR0FBRztJQUN0QyxnQkFBZ0IsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN2RSxhQUFhO0lBQ2IsWUFBWSxPQUFPLGNBQWMsQ0FBQztJQUNsQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoQyxRQUFRLElBQUksc0JBQXNCLENBQUM7SUFDbkMsUUFBUSxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUU7SUFDdkMsWUFBWSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLElBQUksSUFBSSw4QkFBOEIsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDcEgsZ0JBQWdCLElBQUksUUFBUSxHQUFHLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxnQkFBZ0IsSUFBSSxRQUFRLEVBQUUsT0FBTyxRQUFRLENBQUM7SUFDOUMsYUFBYTtJQUNiLFlBQVksSUFBSSxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDOUUsZ0JBQWdCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsV0FBVztJQUMzRCxvQkFBb0IsQ0FBQyxTQUFTLEtBQUssRUFBRTtJQUNyQyx3QkFBd0IsQ0FBQyxXQUFXO0lBQ3BDLDRCQUE0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMzRSxnQ0FBZ0MsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsZ0NBQWdDLElBQUk7SUFDcEMsb0NBQW9DLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JFLGlDQUFpQyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEQsZ0NBQWdDLElBQUksTUFBTSxFQUFFO0lBQzVDLG9DQUFvQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RCxvQ0FBb0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3Qix5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUk7SUFDOUQsNEJBQTRCLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLDRCQUE0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELHlCQUF5QixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDeEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0Isb0JBQW9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQy9ELG9CQUFvQixLQUFLLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLEVBQUUsQ0FBQztJQUNoQixZQUFZLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsWUFBWSxPQUFPLE9BQU8sQ0FBQztJQUMzQixTQUFTO0lBQ1QsUUFBUSxTQUFTLGdCQUFnQixDQUFDLEtBQUssRUFBRTtJQUN6QyxZQUFZLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLFdBQVcsRUFBRTtJQUNyRSxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ25HLGdCQUFnQixPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDakQsYUFBYSxFQUFFLENBQUM7SUFDaEIsU0FBUztJQUNULFFBQVEsU0FBUyxVQUFVLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtJQUNoRCxZQUFZLEtBQUssQ0FBQyxLQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakQsWUFBWSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxZQUFZLElBQUksS0FBSyxHQUFHLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7SUFDMUQsZ0JBQWdCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEQsZ0JBQWdCLEtBQUssQ0FBQyxLQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckQsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsZ0JBQWdCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsZ0JBQWdCLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLGdCQUFnQixPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRSxnQkFBZ0IsT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsZ0JBQWdCLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakosb0JBQW9CLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxvQkFBb0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFO0lBQ25FLG9CQUFvQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxvQkFBb0IsRUFBRSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEgsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ2xDLG9CQUFvQixJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0lBQ3hJLG9CQUFvQixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDckQsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLE9BQU8sQ0FBQztJQUMvQixhQUFhLENBQUMsUUFBUSxFQUFFO0lBQ3hCLGdCQUFnQixVQUFVLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLG9CQUFvQixpQkFBaUIsRUFBRSxNQUFNO0lBQzdDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzVDLGdCQUFnQixLQUFLLEVBQUUsUUFBUSxDQUFDO0lBQ2hDLG9CQUFvQixlQUFlLEVBQUUsYUFBYTtJQUNsRCxvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO0lBQ3pCLGdCQUFnQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDbEMsZ0JBQWdCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztJQUNwQyxhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLFlBQVksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLFlBQVksY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLFlBQVksU0FBUyxJQUFJLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRTtJQUMzQyxnQkFBZ0IsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNuRCxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RCxnQkFBZ0IsSUFBSSxPQUFPLEVBQUUsT0FBTyxPQUFPLENBQUM7SUFDNUMsZ0JBQWdCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQztJQUM3RixZQUFZLE9BQU8sS0FBSyxDQUFDO0lBQ3pCLFNBQVM7SUFDVCxRQUFRLFNBQVMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDdkQsWUFBWSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELFlBQVksT0FBTztJQUNuQixnQkFBZ0IsTUFBTSxFQUFFLFdBQVc7SUFDbkMsb0JBQW9CLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxRQUFRLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRTtJQUN0QyxZQUFZLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRCxTQUFTO0lBQ1QsUUFBUSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7SUFDdEMsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLFNBQVM7SUFDVCxRQUFRLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRTtJQUN6QyxZQUFZLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JGLFNBQVM7SUFDVCxRQUFRLFNBQVMsZUFBZSxDQUFDLEVBQUUsRUFBRTtJQUNyQyxZQUFZLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25KLFNBQVM7SUFDVCxRQUFRLFNBQVMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQzlDLFlBQVksSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLFdBQVcsSUFBSSxXQUFXLEVBQUUsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLFlBQVksSUFBSSxZQUFZLEVBQUUsY0FBYyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLGNBQWMsR0FBRyxHQUFHLEdBQUcsY0FBYyxFQUFFLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUNyWCxZQUFZLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDOUMsWUFBWSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ2hELFlBQVksSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsWUFBWSxPQUFPLENBQUM7SUFDcEIsZ0JBQWdCLEtBQUssRUFBRSxZQUFZO0lBQ25DLGdCQUFnQixNQUFNLEVBQUUsYUFBYTtJQUNyQyxhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksSUFBSSxLQUFLLEdBQUcsV0FBVztJQUNuQyxnQkFBZ0IsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUUsRUFBRTtJQUM5QyxvQkFBb0IsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUN2QixvQkFBb0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUNsRCxvQkFBb0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUNwRCxvQkFBb0IsQ0FBQyxLQUFLLElBQUksUUFBUSxLQUFLLFlBQVksSUFBSSxNQUFNLElBQUksU0FBUyxLQUFLLGFBQWEsS0FBSyxPQUFPLENBQUM7SUFDN0csd0JBQXdCLEtBQUssRUFBRSxRQUFRO0lBQ3ZDLHdCQUF3QixNQUFNLEVBQUUsU0FBUztJQUN6QyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLG9CQUFvQixZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQzVDLG9CQUFvQixhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzlDLGlCQUFpQjtJQUNqQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksUUFBUSxDQUFDO0lBQ3pCLFlBQVksSUFBSSxPQUFPLENBQUM7SUFDeEIsWUFBWSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELFlBQVksSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsY0FBYyxFQUFFO0lBQy9DLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLGdCQUFnQixPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDN0QsYUFBYSxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLGdCQUFnQixFQUFFO0lBQ3hELGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFO0lBQ3pFLG9CQUFvQixVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLG9CQUFvQixTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLG9CQUFvQixPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLG9CQUFvQixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsZ0JBQWdCLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM3RCxhQUFhLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsWUFBWSxPQUFPO0lBQ25CLGdCQUFnQixNQUFNLEVBQUUsV0FBVztJQUNuQyxvQkFBb0IsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLG9CQUFvQixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsb0JBQW9CLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEUsb0JBQW9CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQyxpQkFBaUI7SUFDakIsYUFBYSxDQUFDO0lBQ2QsU0FBUztJQUNULFFBQVEsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFO0lBQzFDLFlBQVksTUFBTSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3JFLFlBQVksT0FBTyxxQkFBcUIsS0FBSyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEUsU0FBUztJQUNULFFBQVEsSUFBSSxhQUFhLEdBQUcsV0FBVyxJQUFJLE9BQU8sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzNGLFFBQVEsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUsV0FBVztJQUNuRCxZQUFZLElBQUksYUFBYSxFQUFFLE9BQU8sYUFBYSxDQUFDO0lBQ3BELFlBQVksSUFBSSxhQUFhLEdBQUcsV0FBVztJQUMzQyxnQkFBZ0IsSUFBSTtJQUNwQixvQkFBb0IsSUFBSSxLQUFLLEdBQUcsV0FBVztJQUMzQyx3QkFBd0IsSUFBSTtJQUM1Qiw0QkFBNEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCx5QkFBeUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUN0Qyw0QkFBNEIsT0FBTyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNuRCx5QkFBeUI7SUFDekIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixvQkFBb0IsSUFBSSxZQUFZLEdBQUcsaUNBQWlDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLG9CQUFvQixJQUFJLGNBQWMsR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLG9CQUFvQixJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU87SUFDaEQsb0JBQW9CLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDaEwsd0JBQXdCLElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLHdCQUF3QixJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxjQUFjLEVBQUUsT0FBTyxNQUFNLENBQUM7SUFDdkYscUJBQXFCO0lBQ3JCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEMsYUFBYSxFQUFFLEVBQUUsT0FBTyxhQUFhLENBQUM7SUFDdEMsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDaEUsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLElBQUksVUFBVSxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLFFBQVEsT0FBTyxFQUFFLFdBQVc7SUFDNUIsWUFBWSxJQUFJLE1BQU0sQ0FBQztJQUN2QixZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMxQixnQkFBZ0IsT0FBTyxVQUFVLENBQUM7SUFDbEMsYUFBYTtJQUNiLFlBQVksSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxZQUFZLElBQUksR0FBRyxJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMxRCxZQUFZLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDbkcsWUFBWSxHQUFHLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDN0IsWUFBWSxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RCxZQUFZLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxDQUFDO0lBQ1osUUFBUSxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDM0IsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFO0lBQ2pDLGdCQUFnQixJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQztJQUN2RCxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDckYsZ0JBQWdCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFCLFNBQVM7SUFDVCxRQUFRLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTtJQUM1QixZQUFZLE9BQU8sUUFBUSxJQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xJLFlBQVksSUFBSSxHQUFHLENBQUM7SUFDcEIsU0FBUztJQUNULFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDdkMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLFlBQVksSUFBSSxTQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFDckQsWUFBWSxPQUFPLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNGLFNBQVM7SUFDVCxRQUFRLElBQUksTUFBTSxHQUFHLFdBQVc7SUFDaEMsWUFBWSxPQUFPLEVBQUUsQ0FBQztJQUN0QixTQUFTLENBQUM7SUFDVixRQUFRLFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDNUMsWUFBWSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLFlBQVksS0FBSyxDQUFDLEtBQUssUUFBUSxLQUFLLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN2RCxZQUFZLE9BQU8sYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsR0FBRyxHQUFHLFdBQVc7SUFDdEUsZ0JBQWdCLElBQUksS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLGdCQUFnQixPQUFPO0lBQ3ZCLG9CQUFvQixHQUFHLEVBQUUsU0FBUyxRQUFRLEVBQUU7SUFDNUMsd0JBQXdCLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxxQkFBcUI7SUFDckIsb0JBQW9CLEdBQUcsRUFBRSxTQUFTLFFBQVEsRUFBRSxNQUFNLEVBQUU7SUFDcEQsd0JBQXdCLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ3pGLHFCQUFxQjtJQUNyQixvQkFBb0IsR0FBRyxFQUFFLFNBQVMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUNqRCx3QkFBd0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM5Qyx3QkFBd0IsT0FBTyxHQUFHLENBQUM7SUFDbkMscUJBQXFCO0lBQ3JCLG9CQUFvQixHQUFHLEVBQUUsU0FBUyxRQUFRLEVBQUU7SUFDNUMsd0JBQXdCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLHFCQUFxQjtJQUNyQixvQkFBb0IsUUFBUSxFQUFFLFNBQVMsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUN6RCx3QkFBd0IsT0FBTyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RSxxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssRUFBRSxXQUFXO0lBQ3RDLHdCQUF3QixLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDM0MscUJBQXFCO0lBQ3JCLG9CQUFvQixJQUFJLEVBQUUsV0FBVztJQUNyQyx3QkFBd0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixhQUFhLEVBQUUsQ0FBQztJQUNoQixTQUFTO0lBQ1QsUUFBUSxJQUFJLFFBQVEsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxRQUFRLFNBQVMsV0FBVyxHQUFHO0lBQy9CLFlBQVksSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QyxZQUFZLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLFFBQVEsQ0FBQztJQUM1RSxZQUFZLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMxQyxTQUFTO0lBQ1QsUUFBUSxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQzVDLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM5QyxZQUFZLEtBQUssQ0FBQyxLQUFLLFFBQVEsS0FBSyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDdkQsWUFBWSxPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFdBQVc7SUFDeEUsZ0JBQWdCLElBQUksUUFBUSxHQUFHLElBQUksOEJBQThCLENBQUM7SUFDbEUsZ0JBQWdCLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQzdDLG9CQUFvQixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVELGlCQUFpQixDQUFDO0lBQ2xCLGdCQUFnQixPQUFPO0lBQ3ZCLG9CQUFvQixHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDdkMsd0JBQXdCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxxQkFBcUI7SUFDckIsb0JBQW9CLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUU7SUFDL0Msd0JBQXdCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCx3QkFBd0IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0UscUJBQXFCO0lBQ3JCLG9CQUFvQixHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzVDLHdCQUF3QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pELHdCQUF3QixPQUFPLEdBQUcsQ0FBQztJQUNuQyxxQkFBcUI7SUFDckIsb0JBQW9CLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUN2Qyx3QkFBd0IsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQscUJBQXFCO0lBQ3JCLG9CQUFvQixRQUFRLEVBQUUsU0FBUyxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ3BELHdCQUF3QixPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixhQUFhLEVBQUUsQ0FBQztJQUNoQixTQUFTO0lBQ1QsUUFBUSxTQUFTLGFBQWEsR0FBRztJQUNqQyxZQUFZLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUUsU0FBUztJQUNULFFBQVEsU0FBUyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0lBQ2hELFlBQVksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxZQUFZLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RCxZQUFZLElBQUksZUFBZSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsWUFBWSxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUN2RCxnQkFBZ0IsTUFBTSxFQUFFLE1BQU07SUFDOUIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLElBQUksVUFBVSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQUMxRCxnQkFBZ0IsTUFBTSxFQUFFLE1BQU07SUFDOUIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLFlBQVksT0FBTyxVQUFVLENBQUM7SUFDOUIsU0FBUztJQUNULFFBQVEsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUN0QyxZQUFZLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRTtJQUMzRCxnQkFBZ0IsVUFBVSxFQUFFLGFBQWEsRUFBRTtJQUMzQyxhQUFhLEVBQUU7SUFDZixnQkFBZ0IsTUFBTSxFQUFFLEdBQUc7SUFDM0IsZ0JBQWdCLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQ3JDLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5RSxnQkFBZ0IsbUJBQW1CLENBQUMsR0FBRyxFQUFFO0lBQ3pDLG9CQUFvQixNQUFNLEVBQUUsTUFBTTtJQUNsQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25CLGdCQUFnQixPQUFPO0lBQ3ZCLG9CQUFvQixHQUFHLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsb0JBQW9CLFVBQVUsRUFBRSxVQUFVO0lBQzFDLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUNqRCxZQUFZLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDbEMsWUFBWSxPQUFPLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsV0FBVztJQUNyRixnQkFBZ0IsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFO0lBQ3JDLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssRUFBRTtJQUN6QyxvQkFBb0IsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzVDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsU0FBUztJQUNULFFBQVEsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFO0lBQ3RDLFlBQVksV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxTQUFTO0lBQ1QsUUFBUSxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRTtJQUN4QyxZQUFZLE9BQU8sUUFBUSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoRyxTQUFTO0lBQ1QsUUFBUSxTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDcEMsWUFBWSxPQUFPLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxXQUFXLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU8sR0FBRyxHQUFHLFVBQVUsR0FBRyxRQUFRLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxZQUFZLEtBQUssR0FBRyxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsaUJBQWlCLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLGVBQWUsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHLFFBQVEsSUFBSSxPQUFPLEdBQUcsR0FBRyxRQUFRLEdBQUcsUUFBUSxJQUFJLE9BQU8sR0FBRyxHQUFHLFFBQVEsR0FBRyxTQUFTLElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3BlLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDMUMsWUFBWSxPQUFPO0lBQ25CLGdCQUFnQixRQUFRLEVBQUUsSUFBSTtJQUM5QixnQkFBZ0IsT0FBTyxFQUFFLEdBQUc7SUFDNUIsYUFBYSxDQUFDO0lBQ2QsU0FBUztJQUNULFFBQVEsSUFBSSxXQUFXLENBQUM7SUFDeEIsUUFBUSxJQUFJLFVBQVUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxJQUFJLEVBQUU7SUFDMUcsWUFBWSxPQUFPLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFDMUMsZ0JBQWdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztJQUNyQyxnQkFBZ0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0lBQ2pDLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7SUFDL0IsZ0JBQWdCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtJQUMvQixhQUFhLENBQUMsQ0FBQztJQUNmLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDbEYsWUFBWSxPQUFPLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQzVDLFlBQVksT0FBTyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQzdDLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDOUMsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUM5QyxZQUFZLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQzlDLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDL0MsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUM1QyxZQUFZLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4QixRQUFRLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLFFBQVEsSUFBSSxhQUFhLENBQUM7SUFDMUIsUUFBUSxJQUFJLFlBQVksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLFdBQVc7SUFDdkUsWUFBWSxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7SUFDakcsU0FBUyxFQUFFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxLQUFLLEVBQUU7SUFDakQsWUFBWSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzFFLFlBQVksSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELFlBQVksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDOUIsWUFBWSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN4QyxZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3ZELFlBQVksT0FBTyxLQUFLLENBQUM7SUFDekIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxPQUFPLEdBQUcsV0FBVztJQUM5QyxZQUFZLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztJQUNoRyxTQUFTLEVBQUUsYUFBYSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUMvQyxZQUFZLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDOUMsWUFBWSxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLFNBQVMsRUFBRSxhQUFhLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQy9DLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDaEQsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTLEVBQUUsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUNoRCxZQUFZLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxhQUFhLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQ2hELFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDakQsWUFBWSxPQUFPLEdBQUcsQ0FBQztJQUN2QixTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUM5QyxZQUFZLE9BQU8sR0FBRyxDQUFDO0lBQ3ZCLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMxQixRQUFRLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLFFBQVEsSUFBSSxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sRUFBRTtJQUNwRCxZQUFZLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlGLFlBQVksSUFBSSxRQUFRLEdBQUcsV0FBVyxFQUFFLFdBQVc7SUFDbkQsZ0JBQWdCLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtJQUM3RCxvQkFBb0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLG9CQUFvQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELGlCQUFpQjtJQUNqQixhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEIsU0FBUyxFQUFFLENBQUM7SUFDWixRQUFRLFNBQVMsbUJBQW1CLEdBQUc7SUFDdkMsWUFBWSxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxZQUFZLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixHQUFHLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNILGdCQUFnQixJQUFJLEVBQUUsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxnQkFBZ0IsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUSxTQUFTLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUU7SUFDdkQsWUFBWSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxPQUFPLEdBQUcsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3BHLFlBQVksSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ25FLGdCQUFnQixJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RSxhQUFhLEVBQUUsQ0FBQztJQUNoQixZQUFZLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLE1BQU0sRUFBRTtJQUN0RSxnQkFBZ0IsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3hHLGdCQUFnQixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEYsYUFBYSxFQUFFLENBQUM7SUFDaEIsWUFBWSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsWUFBWSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsWUFBWSxPQUFPO0lBQ25CLGdCQUFnQixFQUFFLEVBQUUsRUFBRTtJQUN0QixnQkFBZ0IsT0FBTyxFQUFFLFdBQVc7SUFDcEMsb0JBQW9CLE9BQU8saUJBQWlCLENBQUM7SUFDN0MsaUJBQWlCO0lBQ2pCLGdCQUFnQixhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVc7SUFDMUQsb0JBQW9CLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUMxRCx3QkFBd0IsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7SUFDeEQsNEJBQTRCLElBQUksRUFBRSxJQUFJO0lBQ3RDLHlCQUF5QixDQUFDLENBQUM7SUFDM0IscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRTtJQUNuQixnQkFBZ0IsS0FBSyxFQUFFLFdBQVc7SUFDbEMsb0JBQW9CLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxpQkFBaUI7SUFDakIsZ0JBQWdCLE9BQU8sRUFBRSxXQUFXO0lBQ3BDLG9CQUFvQixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDMUQsd0JBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0lBQzVILHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixLQUFLLEVBQUUsV0FBVztJQUNsQyxvQkFBb0IsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQzFELHdCQUF3QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCLFFBQVEsRUFBRSxXQUFXO0lBQ3JDLG9CQUFvQixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDMUQsd0JBQXdCLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixXQUFXLEVBQUUsU0FBUyxJQUFJLEVBQUU7SUFDNUMsb0JBQW9CLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUMxRCx3QkFBd0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVGLHdCQUF3QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNQLHdCQUF3QixJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJO0lBQ25ELDRCQUE0QixJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDM0YsZ0NBQWdDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELGdDQUFnQyxPQUFPO0lBQ3ZDLDZCQUE2QjtJQUM3Qix5QkFBeUIsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLHdCQUF3QixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM1QyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxFQUFFLFNBQVMsSUFBSSxFQUFFO0lBQ3hDLG9CQUFvQixPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDMUQsd0JBQXdCLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCx3QkFBd0IsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDbEQsNEJBQTRCLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzdGLDRCQUE0QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMzSixnQ0FBZ0MsSUFBSSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekUsZ0NBQWdDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBSyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDOUcsNkJBQTZCO0lBQzdCLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLHdCQUF3QixJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUcsd0JBQXdCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUQsd0JBQXdCLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSx3QkFBd0IsaUJBQWlCLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxRQUFRLElBQUksa0JBQWtCLEdBQUcsV0FBVztJQUM1QyxZQUFZLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtJQUN4QyxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDbEcsZ0JBQWdCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDakMsZ0JBQWdCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsZ0JBQWdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvQyxnQkFBZ0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxnQkFBZ0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2xELGdCQUFnQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQztJQUNwRSxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtJQUMxRyxvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixnQkFBZ0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQzNDLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixpQkFBaUIsQ0FBQyxDQUFDO0lBQ25CLGFBQWE7SUFDYixZQUFZLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDL0MsWUFBWSxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVc7SUFDdEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztJQUNoRCxhQUFhLENBQUM7SUFDZCxZQUFZLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVztJQUN4QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkQsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVc7SUFDeEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLElBQUksRUFBRTtJQUMzRCxvQkFBb0IsT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN0RCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTLElBQUksRUFBRTtJQUNoRCxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDaEYsb0JBQW9CLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVc7SUFDeEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZELGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLElBQUksRUFBRTtJQUM1QyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDNUUsb0JBQW9CLE9BQU8sTUFBTSxDQUFDO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVc7SUFDdEMsZ0JBQWdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDdEUsb0JBQW9CLE9BQU8sTUFBTSxDQUFDO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVc7SUFDdEMsZ0JBQWdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQyxnQkFBZ0IsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BELGdCQUFnQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEQsZ0JBQWdCLElBQUksYUFBYSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUM5RCxvQkFBb0IsT0FBTyxFQUFFLGNBQWM7SUFDM0Msb0JBQW9CLElBQUksRUFBRSxjQUFjO0lBQ3hDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQ3pDLG9CQUFvQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzFDLG9CQUFvQixLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakUsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDbEcsb0JBQW9CLE9BQU8sTUFBTSxDQUFDO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVc7SUFDekMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hELGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLFNBQVMsR0FBRyxXQUFXO0lBQzFDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUNwRCxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN0QyxnQkFBZ0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDeEMsZ0JBQWdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BFLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO0lBQ3RGLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixvQkFBb0IsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7SUFDcEMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixnQkFBZ0IsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxhQUFhLENBQUM7SUFDZCxZQUFZLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVztJQUM1QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDaEQsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUN0RCxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLGdCQUFnQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3RDLGdCQUFnQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzVELG9CQUFvQixPQUFPLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3pHLHdCQUF3QixlQUFlLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFBRTtJQUMvRCx3QkFBd0IscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFO0lBQ3hFLDRCQUE0QixJQUFJLEVBQUUsSUFBSTtJQUN0Qyx5QkFBeUIsQ0FBQztJQUMxQixxQkFBcUIsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssRUFBRTtJQUM3Qyx3QkFBd0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsS0FBSyxLQUFLLENBQUMscUJBQXFCLENBQUM7SUFDMUYsd0JBQXdCLEtBQUssSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUN2RCw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMseUJBQXlCLENBQUMsQ0FBQztJQUMzQix3QkFBd0IsT0FBTyxLQUFLLENBQUM7SUFDckMscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXO0lBQ3ZDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO0lBQ2pELGFBQWEsQ0FBQztJQUNkLFlBQVksTUFBTSxDQUFDLGFBQWEsR0FBRyxXQUFXO0lBQzlDLGdCQUFnQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxhQUFhLENBQUM7SUFDZCxZQUFZLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVztJQUM1QyxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkYsYUFBYSxDQUFDO0lBQ2QsWUFBWSxNQUFNLENBQUMsU0FBUyxHQUFHLFdBQVc7SUFDMUMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzdDLGFBQWEsQ0FBQztJQUNkLFlBQVksV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUMvQyxnQkFBZ0IsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDM0UsYUFBYSxDQUFDO0lBQ2QsWUFBWSxXQUFXLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUN6RCxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN0QyxnQkFBZ0IsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUN0RCxvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixhQUFhLENBQUM7SUFDZCxZQUFZLFdBQVcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUU7SUFDeEUsZ0JBQWdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEMsZ0JBQWdCLG1CQUFtQixFQUFFLENBQUM7SUFDdEMsZ0JBQWdCLE9BQU8sV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDO0lBQ2xHLG9CQUFvQixnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDdEQsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxXQUFXLENBQUMsYUFBYSxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQ3RELGdCQUFnQixPQUFPLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLGFBQWEsQ0FBQztJQUNkLFlBQVksV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUU7SUFDN0QsZ0JBQWdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEMsZ0JBQWdCLG1CQUFtQixFQUFFLENBQUM7SUFDdEMsZ0JBQWdCLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMvRCxnQkFBZ0IsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLGdCQUFnQixPQUFPLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQztJQUM1RixvQkFBb0IsR0FBRyxFQUFFLFlBQVk7SUFDckMsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxPQUFPLFdBQVcsQ0FBQztJQUMvQixTQUFTLEVBQUUsQ0FBQztJQUNaLFFBQVEsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUMxRCxZQUFZLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxZQUFZLElBQUksa0JBQWtCLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkUsWUFBWSxJQUFJLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO0lBQ3JGLGdCQUFnQixHQUFHLEVBQUUsR0FBRztJQUN4QixnQkFBZ0IsSUFBSSxFQUFFLElBQUk7SUFDMUIsZ0JBQWdCLE1BQU0sRUFBRSxNQUFNO0lBQzlCLGdCQUFnQixNQUFNLEVBQUUsTUFBTTtJQUM5QixhQUFhLENBQUMsQ0FBQyxNQUFNO0lBQ3JCLGdCQUFnQixrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsZ0JBQWdCLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVc7SUFDekQsb0JBQW9CLE9BQU8sRUFBRSxDQUFDO0lBQzlCLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUc7SUFDMUIsb0JBQW9CLE1BQU0sRUFBRSxNQUFNO0lBQ2xDLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixvQkFBb0IsR0FBRyxFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLE1BQU0sRUFBRSxNQUFNO0lBQ2xDLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUSxTQUFTLFlBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFO0lBQzFDLFlBQVksSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELFlBQVksSUFBSSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxZQUFZLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVztJQUM1RCxnQkFBZ0IsT0FBTyxFQUFFLENBQUM7SUFDMUIsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELFNBQVM7SUFDVCxRQUFRLFNBQVMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUNsRixZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRztJQUN6QixnQkFBZ0IsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQzVCLGdCQUFnQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7SUFDaEMsYUFBYSxFQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLFdBQVc7SUFDM0csZ0JBQWdCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFO0lBQzlDLG9CQUFvQixNQUFNLEVBQUUsR0FBRztJQUMvQixpQkFBaUIsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUNwQyxvQkFBb0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4RixvQkFBb0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2RCxvQkFBb0IsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxvQkFBb0IsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLElBQUksR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEksb0JBQW9CLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekYsb0JBQW9CLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDaEUsd0JBQXdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcseUJBQXlCLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqUSx3QkFBd0IsSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtJQUNwSCw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDakQsNEJBQTRCLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxtREFBbUQsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvSix5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHFCQUFxQixFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDekMsd0JBQXdCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQztJQUN6Qyw0QkFBNEIsTUFBTSxFQUFFLE1BQU07SUFDMUMsNEJBQTRCLE1BQU0sRUFBRSxNQUFNO0lBQzFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxxQkFBcUIsSUFBSSxTQUFTLEdBQUcsRUFBRTtJQUN2Qyx3QkFBd0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUNwRSw0QkFBNEIsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRSx5QkFBeUIsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQzdDLDRCQUE0QixHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLElBQUksRUFBRTtJQUN0RyxnQ0FBZ0MsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRCxnQ0FBZ0MsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQzFFLG9DQUFvQyxPQUFPLFFBQVEsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsTUFBTSxHQUFHLFNBQVMsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxJQUFJLE9BQU8sR0FBRyxHQUFHLFNBQVMsR0FBRyxVQUFVLElBQUksT0FBTyxHQUFHLEdBQUcsZUFBZSxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbFUsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsNkJBQTZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsNEJBQTRCLE1BQU0sR0FBRyxDQUFDO0lBQ3RDLHlCQUF5QixFQUFFLENBQUM7SUFDNUIscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDL0Msd0JBQXdCLE9BQU87SUFDL0IsNEJBQTRCLE1BQU0sRUFBRSxNQUFNO0lBQzFDLDRCQUE0QixFQUFFLEVBQUUsRUFBRTtJQUNsQyw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMseUJBQXlCLENBQUM7SUFDMUIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMvQixZQUFZLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFLENBQUM7SUFDOUMsWUFBWSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLFlBQVksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUN2RCxZQUFZLFFBQVEsSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsSyxZQUFZLElBQUksa0JBQWtCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0lBQy9ELGdCQUFnQixTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELGdCQUFnQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQzlELG9CQUFvQixTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxNQUFNLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsWUFBWSxPQUFPLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRTtJQUMxRCxnQkFBZ0IsRUFBRSxFQUFFLEVBQUU7SUFDdEIsZ0JBQWdCLElBQUksRUFBRSxJQUFJO0lBQzFCLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDbEUsWUFBWSxJQUFJLFVBQVUsQ0FBQztJQUMzQixZQUFZLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0MsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFLFdBQVcsRUFBRTtJQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEtBQUssV0FBVyxLQUFLLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdFLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUNoRSxvQkFBb0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLG9CQUFvQixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO0lBQzNELG9CQUFvQixJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsb0JBQW9CLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDMUMsb0JBQW9CLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0Usb0JBQW9CLE9BQU8sVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ25FLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLE9BQU8sS0FBSyxDQUFDLEtBQUssTUFBTSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDaEUsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNuRSxnQkFBZ0IsT0FBTyxTQUFTLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDckUsb0JBQW9CLE9BQU8sYUFBYSxDQUFDLDRCQUE0QixFQUFFO0lBQ3ZFLHdCQUF3QixJQUFJLEVBQUUsMEJBQTBCLENBQUMsV0FBVyxFQUFFLE1BQU0sR0FBRyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDekcsNEJBQTRCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QseUJBQXlCLEdBQUcsR0FBRyxFQUFFO0lBQ2pDLDRCQUE0QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7SUFDdkMsNEJBQTRCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtJQUMzQyx5QkFBeUIsQ0FBQztJQUMxQixxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNqRCxvQkFBb0IsRUFBRSxFQUFFLEVBQUU7SUFDMUIsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3hELGdCQUFnQixPQUFPLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNqRixvQkFBb0IsRUFBRSxFQUFFLEVBQUU7SUFDMUIsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDakQsZ0JBQWdCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUN2SixvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMxQixhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDNUIsU0FBUztJQUNULFFBQVEsU0FBUyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7SUFDcEUsWUFBWSxJQUFJLFlBQVksQ0FBQztJQUM3QixZQUFZLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDbEMsWUFBWSxPQUFPLFNBQVMsR0FBRyxFQUFFLGFBQWEsRUFBRTtJQUNoRCxnQkFBZ0IsS0FBSyxDQUFDLEtBQUssYUFBYSxLQUFLLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ25GLGdCQUFnQixJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDcEYsb0JBQW9CLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDM0Qsb0JBQW9CLElBQUksSUFBSSxDQUFDO0lBQzdCLG9CQUFvQixJQUFJLEtBQUssQ0FBQztJQUM5QixvQkFBb0IsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUMvQyx3QkFBd0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDNUMsd0JBQXdCLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzVDLHFCQUFxQixNQUFNO0lBQzNCLHdCQUF3QixJQUFJLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELHdCQUF3QixLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEtBQUssQ0FBQztJQUM1QyxvQkFBb0IsSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRixvQkFBb0IsT0FBTyxZQUFZLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0UsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRSwwQkFBMEIsR0FBRyxTQUFTLGlCQUFpQixFQUFFO0lBQ3JHLGdCQUFnQixPQUFPLFNBQVMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFDdkQsb0JBQW9CLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLGFBQWEsRUFBRSxZQUFZLENBQUMscUJBQXFCLEdBQUcsU0FBUyxrQkFBa0IsRUFBRTtJQUNqRixnQkFBZ0IsT0FBTyxTQUFTLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM5RCxvQkFBb0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6RCxvQkFBb0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUMxQyxvQkFBb0IsSUFBSSx1QkFBdUIsR0FBRyxTQUFTLElBQUksRUFBRTtJQUNqRSx3QkFBd0IsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2RCx3QkFBd0IsU0FBUywwQkFBMEIsR0FBRztJQUM5RCw0QkFBNEIsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELDRCQUE0QixPQUFPLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDNUUsZ0NBQWdDLElBQUksRUFBRSxJQUFJO0lBQzFDLDZCQUE2QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ2pFLGdDQUFnQyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLGdDQUFnQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLDBCQUEwQixFQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0csb0NBQW9DLE1BQU0sRUFBRSxNQUFNO0lBQ2xELG9DQUFvQyxNQUFNLEVBQUUsU0FBUyxFQUFFO0lBQ3ZELGlDQUFpQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLGdDQUFnQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RSxnQ0FBZ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUU7SUFDMUYsb0NBQW9DLEVBQUUsRUFBRSxFQUFFO0lBQzFDLG9DQUFvQyxJQUFJLEVBQUUsSUFBSTtJQUM5QyxvQ0FBb0MsSUFBSSxFQUFFLEtBQUs7SUFDL0MsaUNBQWlDLEVBQUU7SUFDbkMsb0NBQW9DLE1BQU0sRUFBRSxNQUFNO0lBQ2xELG9DQUFvQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELGlDQUFpQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRTtJQUNuRSxvQ0FBb0MsRUFBRSxFQUFFLEVBQUU7SUFDMUMsb0NBQW9DLElBQUksRUFBRSxJQUFJO0lBQzlDLG9DQUFvQyxJQUFJLEVBQUUsS0FBSztJQUMvQyxpQ0FBaUMsRUFBRTtJQUNuQyxvQ0FBb0MsTUFBTSxFQUFFLE1BQU07SUFDbEQsb0NBQW9DLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckQsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDdkQsb0NBQW9DLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0QsaUNBQWlDLEVBQUUsQ0FBQztJQUNwQyw2QkFBNkIsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUNyRCxnQ0FBZ0MsTUFBTSxHQUFHLENBQUM7SUFDMUMsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyx5QkFBeUI7SUFDekIsd0JBQXdCLDBCQUEwQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbkUsd0JBQXdCLDBCQUEwQixDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDdkUsd0JBQXdCLDBCQUEwQixDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDdkUsd0JBQXdCLDBCQUEwQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDL0Qsd0JBQXdCLDBCQUEwQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbkUsd0JBQXdCLE9BQU8sMEJBQTBCLENBQUM7SUFDMUQscUJBQXFCLENBQUM7SUFDdEIsb0JBQW9CLElBQUksMEJBQTBCLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQztJQUMvRSxvQkFBb0IsMEJBQTBCLENBQUMsYUFBYSxHQUFHLHVCQUF1QixDQUFDO0lBQ3ZGLHdCQUF3QixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLHFCQUFxQixDQUFDLENBQUM7SUFDdkIsb0JBQW9CLE9BQU8sMEJBQTBCLENBQUM7SUFDdEQsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRTtJQUN0RCxvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixhQUFhLEVBQUUsWUFBWSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsZ0JBQWdCLEVBQUU7SUFDN0UsZ0JBQWdCLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFO0lBQ3hFLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixpQkFBaUIsQ0FBQyxDQUFDO0lBQ25CLGFBQWEsRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUM5QixTQUFTO0lBQ1QsUUFBUSxJQUFJLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztJQUN6QyxRQUFRLHVCQUF1QixDQUFDLHNCQUFzQixHQUFHLFNBQVMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRTtJQUNsRyxZQUFZLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM1RCxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsU0FBUyxDQUFDO0lBQ1YsUUFBUSx1QkFBdUIsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsRUFBRSxpQkFBaUIsRUFBRTtJQUNwRixZQUFZLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtJQUMvQixnQkFBZ0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxFQUFFLFNBQVMsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDaEcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUNqSSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO0lBQzdILFlBQVksSUFBSSxDQUFDLENBQUMsS0FBSyxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztJQUM3SixZQUFZLElBQUksYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDbkcsWUFBWSxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3pDLGdCQUFnQixNQUFNLEVBQUUsTUFBTTtJQUM5QixnQkFBZ0IsTUFBTSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxnQkFBZ0IsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QyxhQUFhLENBQUMsQ0FBQztJQUNmLFNBQVMsQ0FBQztJQUNWLFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7SUFDL0QsWUFBWSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2pELFlBQVksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RCxnQkFBZ0IsSUFBSSxZQUFZLEdBQUcsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxXQUFXO0lBQzNFLG9CQUFvQixPQUFPLEVBQUUsQ0FBQztJQUM5QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ2hFLGdCQUFnQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxnQkFBZ0IsWUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3pHLG9CQUFvQixJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakYsb0JBQW9CLElBQUksaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsc0JBQXNCLEdBQUcsWUFBWSxDQUFDLE1BQU0sSUFBSSxFQUFFO0lBQ3pJLG9CQUFvQixJQUFJLEdBQUc7SUFDM0Isd0JBQXdCLEVBQUUsRUFBRSxFQUFFO0lBQzlCLHdCQUF3QixJQUFJLEVBQUUsSUFBSTtJQUNsQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLG9CQUFvQixJQUFJLElBQUksQ0FBQztJQUM3QixvQkFBb0IsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQy9DLG9CQUFvQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUUsb0JBQW9CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNwQyxvQkFBb0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEUsd0JBQXdCLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCx3QkFBd0IsSUFBSTtJQUM1Qiw0QkFBNEIsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xHLHlCQUF5QixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ3RDLDRCQUE0QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDOUosd0JBQXdCLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUQscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0QyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDM0Qsb0JBQW9CLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQztJQUM5QyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxTQUFTO0lBQ1QsUUFBUSxTQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUMzQyxZQUFZLE9BQU8sV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELFNBQVM7SUFDVCxRQUFRLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFO0lBQzlDLFlBQVksV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELFNBQVM7SUFDVCxRQUFRLFNBQVMseUJBQXlCLENBQUMsSUFBSSxFQUFFO0lBQ2pELFlBQVksT0FBTyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsU0FBUztJQUNULFFBQVEsU0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7SUFDMUMsWUFBWSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZFLFlBQVksSUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxZQUFZLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hDLFlBQVksR0FBRyxLQUFLLE1BQU0sS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUMsWUFBWSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUNoRixZQUFZLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pGLGdCQUFnQixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsZ0JBQWdCLElBQUksWUFBWSxFQUFFO0lBQ2xDLG9CQUFvQixJQUFJLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0Usb0JBQW9CLElBQUksYUFBYSxFQUFFO0lBQ3ZDLHdCQUF3QixJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsd0JBQXdCLElBQUksZUFBZSxFQUFFO0lBQzdDLDRCQUE0QixJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxNQUFNLEVBQUU7SUFDckUsZ0NBQWdDLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVGLGdDQUFnQyxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvTCxvQ0FBb0MsSUFBSSxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO0lBQ3pJLG9DQUFvQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsT0FBTyxRQUFRLENBQUM7SUFDM0csaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3Qiw0QkFBNEIsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEYseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUM5RCxZQUFZLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0MsWUFBWSxJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUM3QyxnQkFBZ0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsTUFBTTtJQUMzQixnQkFBZ0IsTUFBTSxFQUFFLE1BQU07SUFDOUIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLElBQUksT0FBTyxHQUFHLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNoSyxZQUFZLFNBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3BELGdCQUFnQixPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3JFLG9CQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJO0lBQy9FLHdCQUF3QixPQUFPLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDaEUsNEJBQTRCLEVBQUUsRUFBRSxRQUFRLEVBQUU7SUFDMUMsNEJBQTRCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3JELDRCQUE0QixJQUFJLEVBQUUsNEJBQTRCO0lBQzlELDRCQUE0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDOUMsNEJBQTRCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtJQUM5Qyw0QkFBNEIsR0FBRyxFQUFFLEdBQUc7SUFDcEMsNEJBQTRCLElBQUksRUFBRSxJQUFJO0lBQ3RDLDRCQUE0QixLQUFLLEVBQUUsS0FBSztJQUN4Qyx5QkFBeUIsRUFBRTtJQUMzQiw0QkFBNEIsRUFBRSxFQUFFLEVBQUU7SUFDbEMsNEJBQTRCLElBQUksRUFBRSxJQUFJO0lBQ3RDLHlCQUF5QixDQUFDLENBQUM7SUFDM0IscUJBQXFCLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDbEMsd0JBQXdCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxTQUFTLEVBQUUsR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0kscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYTtJQUNiLFlBQVksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUM1RixnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSTtJQUMzRSxvQkFBb0IsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzVELHdCQUF3QixFQUFFLEVBQUUsUUFBUSxFQUFFO0lBQ3RDLHdCQUF3QixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNqRCx3QkFBd0IsSUFBSSxFQUFFLHVCQUF1QjtJQUNyRCx3QkFBd0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQzFDLHdCQUF3QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDMUMscUJBQXFCLEVBQUU7SUFDdkIsd0JBQXdCLEVBQUUsRUFBRSxFQUFFO0lBQzlCLHdCQUF3QixJQUFJLEVBQUUsSUFBSTtJQUNsQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzlCLG9CQUFvQixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BJLGlCQUFpQjtJQUNqQixhQUFhLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN0RCxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDck4sZ0JBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sR0FBRyx5QkFBeUIsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUosZ0JBQWdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN2QyxvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsb0JBQW9CLE1BQU0sRUFBRSxNQUFNO0lBQ2xDLG9CQUFvQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDdEMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxJQUFJLEVBQUU7SUFDckMsZ0JBQWdCLE9BQU8sWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxhQUFhLElBQUksU0FBUyxLQUFLLEVBQUU7SUFDakMsZ0JBQWdCLE9BQU8sWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDNUQsZ0JBQWdCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BGLGdCQUFnQixNQUFNLEdBQUcsQ0FBQztJQUMxQixhQUFhLEVBQUUsQ0FBQztJQUNoQixTQUFTO0lBQ1QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUNwRCxZQUFZLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUQsZ0JBQWdCLElBQUksT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDck8sZ0JBQWdCLElBQUk7SUFDcEIsb0JBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcseUJBQXlCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlKLG9CQUFvQixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUMvRyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUM5QixvQkFBb0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsaUJBQWlCO0lBQ2pCLGdCQUFnQixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUSxTQUFTLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUN6RCxZQUFZLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUQsZ0JBQWdCLElBQUksT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMU8sZ0JBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sR0FBRyx5QkFBeUIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU07SUFDN0osZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEosZ0JBQWdCLElBQUksT0FBTyxDQUFDO0lBQzVCLGdCQUFnQixJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUNoSCxnQkFBZ0Isc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELGdCQUFnQixPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxLQUFLLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdkksb0JBQW9CLE1BQU0sRUFBRSxNQUFNO0lBQ2xDLG9CQUFvQixNQUFNLEVBQUUsTUFBTTtJQUNsQyxvQkFBb0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0lBQ3RDLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLFNBQVMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUN0RCxZQUFZLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDakQsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLFlBQVksSUFBSTtJQUNoQixnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPO0lBQ3RFLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUMxQixnQkFBZ0IsT0FBTztJQUN2QixhQUFhO0lBQ2IsWUFBWSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdELFlBQVksSUFBSSxRQUFRLEdBQUcsU0FBUyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDbkUsZ0JBQWdCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkQsZ0JBQWdCLElBQUksYUFBYSxDQUFDO0lBQ2xDLGdCQUFnQixJQUFJO0lBQ3BCLG9CQUFvQixhQUFhLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDaEYsd0JBQXdCLEVBQUUsRUFBRSxFQUFFO0lBQzlCLHdCQUF3QixJQUFJLEVBQUUsSUFBSTtJQUNsQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQzlCLG9CQUFvQixPQUFPO0lBQzNCLGlCQUFpQjtJQUNqQixnQkFBZ0IsSUFBSSxhQUFhLElBQUksUUFBUSxJQUFJLE9BQU8sYUFBYSxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7SUFDakcsb0JBQW9CLElBQUksYUFBYSxHQUFHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztJQUM3RSxvQkFBb0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sYUFBYSxDQUFDO0lBQzNFLGlCQUFpQjtJQUNqQixhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRTtJQUN0QixnQkFBZ0IsSUFBSSxFQUFFLElBQUk7SUFDMUIsYUFBYSxDQUFDLENBQUM7SUFDZixZQUFZLElBQUksUUFBUSxFQUFFO0lBQzFCLGdCQUFnQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsZ0JBQWdCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hFLG9CQUFvQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsb0JBQW9CLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPO0lBQ2pFLG9CQUFvQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELG9CQUFvQixJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTztJQUNqRixvQkFBb0IsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztJQUNsRixvQkFBb0IsSUFBSTtJQUN4Qix3QkFBd0IsMkJBQTJCLEtBQUssT0FBTyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDOUcsNEJBQTRCLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLDRCQUE0QixJQUFJLEVBQUUsSUFBSTtJQUN0Qyx5QkFBeUIsQ0FBQyxHQUFHLDRCQUE0QixLQUFLLE9BQU8sQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsdUJBQXVCLEtBQUssT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0TSxxQkFBcUIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNsQyx3QkFBd0IsVUFBVSxFQUFFLFdBQVc7SUFDL0MsNEJBQTRCLE1BQU0sR0FBRyxDQUFDO0lBQ3RDLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0lBQy9DLFlBQVksSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELFlBQVksSUFBSSxVQUFVLElBQUksUUFBUSxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQ2hFLGdCQUFnQixPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2xDLGdCQUFnQixPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQzdCLGFBQWE7SUFDYixZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlELFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xELFlBQVksT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN6RCxZQUFZLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDckMsWUFBWSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3hDLFlBQVksSUFBSSxlQUFlLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0lBQy9FLGdCQUFnQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzlFLGdCQUFnQixJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZFLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDL0csZ0JBQWdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUN4QyxvQkFBb0IsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDakQsb0JBQW9CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzFILHdCQUF3QixJQUFJLEVBQUUsSUFBSTtJQUNsQyx3QkFBd0IsTUFBTSxFQUFFLE1BQU07SUFDdEMsd0JBQXdCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsb0JBQW9CLE9BQU87SUFDM0Isd0JBQXdCLE1BQU0sRUFBRSxXQUFXO0lBQzNDLDRCQUE0QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdILHlCQUF5QjtJQUN6QixxQkFBcUIsQ0FBQztJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUMzQyxvQkFBb0IsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDbEQsb0JBQW9CLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxNQUFNLEVBQUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZJLHdCQUF3QixJQUFJLEVBQUUsSUFBSTtJQUNsQyx3QkFBd0IsR0FBRyxFQUFFLEdBQUc7SUFDaEMsd0JBQXdCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsb0JBQW9CLE9BQU87SUFDM0Isd0JBQXdCLE1BQU0sRUFBRSxXQUFXO0lBQzNDLDRCQUE0QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9ILHlCQUF5QjtJQUN6QixxQkFBcUIsQ0FBQztJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDMUQsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLG9CQUFvQixHQUFHLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUQsZ0JBQWdCLE1BQU0sR0FBRyxNQUFNLElBQUksR0FBRyxDQUFDO0lBQ3ZDLGdCQUFnQixJQUFJLGdCQUFnQixFQUFFLE1BQU0sR0FBRyxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxPQUFPLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRSxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsc0NBQXNDLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25oQixnQkFBZ0IsSUFBSSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxXQUFXO0lBQy9FLG9CQUFvQixPQUFPLEVBQUUsQ0FBQztJQUM5QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixJQUFJLGVBQWUsR0FBRyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksR0FBRyxXQUFXO0lBQ3JGLG9CQUFvQixPQUFPLEVBQUUsQ0FBQztJQUM5QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsZ0JBQWdCLElBQUksY0FBYyxDQUFDO0lBQ25DLGdCQUFnQixJQUFJLGFBQWEsQ0FBQztJQUNsQyxnQkFBZ0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLEdBQUcsV0FBVztJQUN4SCxvQkFBb0IsT0FBTyxFQUFFLENBQUM7SUFDOUIsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHO0lBQzFDLG9CQUFvQixLQUFLLEVBQUUsTUFBTTtJQUNqQyxvQkFBb0IsUUFBUSxFQUFFLFFBQVE7SUFDdEMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzNELGdCQUFnQixPQUFPO0lBQ3ZCLG9CQUFvQixNQUFNLEVBQUUsV0FBVztJQUN2Qyx3QkFBd0IsT0FBTyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUQsd0JBQXdCLElBQUksYUFBYSxFQUFFO0lBQzNDLDRCQUE0QixjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsNEJBQTRCLGNBQWMsQ0FBQyxNQUFNLElBQUksT0FBTyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDN0YseUJBQXlCO0lBQ3pCLHdCQUF3QixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRix3QkFBd0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9GLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQztJQUNsQixhQUFhLENBQUM7SUFDZCxnQkFBZ0IsSUFBSSxFQUFFLElBQUk7SUFDMUIsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHO0lBQ3hCLGdCQUFnQixNQUFNLEVBQUUsTUFBTTtJQUM5QixhQUFhLEVBQUU7SUFDZixnQkFBZ0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO0lBQ3hDLGdCQUFnQixXQUFXLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxTQUFTLEdBQUcsRUFBRTtJQUNuRSxvQkFBb0IsTUFBTSxHQUFHLENBQUM7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQixNQUFNLEVBQUUsR0FBRztJQUMzQixnQkFBZ0IsTUFBTSxFQUFFLE1BQU0sSUFBSSxHQUFHO0lBQ3JDLGdCQUFnQixJQUFJLEVBQUUsSUFBSTtJQUMxQixhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksT0FBTztJQUNuQixnQkFBZ0IsTUFBTSxFQUFFLFdBQVc7SUFDbkMsb0JBQW9CLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM3QyxpQkFBaUI7SUFDakIsYUFBYSxDQUFDO0lBQ2QsU0FBUztJQUNULFFBQVEsSUFBSSxTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2hFLFlBQVksSUFBSSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsRUFBRSxNQUFNLElBQUksR0FBRyxDQUFDO0lBQ3hFLFlBQVksSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxZQUFZLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO0lBQ3RELFlBQVksSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxZQUFZLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDeEQsZ0JBQWdCLENBQUMsU0FBUyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtJQUM3QyxvQkFBb0IsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLG9CQUFvQixJQUFJLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGtDQUFrQyxDQUFDLENBQUM7SUFDalAsb0JBQW9CLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRywyQkFBMkIsQ0FBQyxDQUFDO0lBQ25ILGlCQUFpQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUMsZ0JBQWdCLElBQUksU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzVDLG9CQUFvQixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsb0JBQW9CLElBQUksWUFBWSxFQUFFLE9BQU8sWUFBWSxLQUFLLE1BQU0sQ0FBQztJQUNyRSxvQkFBb0IsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEQsb0JBQW9CLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNELG9CQUFvQixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RKLG9CQUFvQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlCLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDcEUsb0JBQW9CLEtBQUssQ0FBQyxLQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUQsb0JBQW9CLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDekQsb0JBQW9CLElBQUksT0FBTyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQ2hELHdCQUF3QixPQUFPLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFdBQVc7SUFDdEYsNEJBQTRCLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQztJQUM1RCx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLG9CQUFvQixDQUFDLENBQUMsS0FBSyxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxzQkFBc0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLG9CQUFvQixPQUFPLE9BQU8sQ0FBQztJQUNuQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckMsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQ3RDLGdCQUFnQixPQUFPLFNBQVMsR0FBRyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO0lBQ3ZFLG9CQUFvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pDLG9CQUFvQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ2hFLHdCQUF3QixPQUFPLFFBQVEsSUFBSSxPQUFPLFlBQVksR0FBRyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDckgsNEJBQTRCLE9BQU8sWUFBWSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDakUsZ0NBQWdDLElBQUksRUFBRSxJQUFJO0lBQzFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQ3JELGdDQUFnQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDcEQsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyx5QkFBeUIsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLGdCQUFnQixFQUFFO0lBQzdELDRCQUE0QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDOUssNEJBQTRCLE9BQU8sZ0JBQWdCLENBQUM7SUFDcEQseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDOUUsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsWUFBWSxFQUFFO0lBQzdDLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUM7SUFDMUMsZ0JBQWdCLElBQUksT0FBTyxHQUFHLGtCQUFrQixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDNUgsZ0JBQWdCLElBQUksT0FBTyxHQUFHLElBQUksb0JBQW9CLENBQUM7SUFDdkQsZ0JBQWdCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDbkQsZ0JBQWdCLElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDcEMsb0JBQW9CLElBQUksZ0JBQWdCLEdBQUc7SUFDM0Msd0JBQXdCLElBQUksRUFBRSxJQUFJO0lBQ2xDLHdCQUF3QixHQUFHLEVBQUUsR0FBRztJQUNoQyx3QkFBd0IsTUFBTSxFQUFFLE1BQU07SUFDdEMsd0JBQXdCLE9BQU8sRUFBRSxPQUFPO0lBQ3hDLHFCQUFxQixDQUFDO0lBQ3RCLG9CQUFvQixDQUFDLFNBQVMsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUM5Qyx3QkFBd0IsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxvQkFBb0IsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxXQUFXO0lBQy9GLHdCQUF3QixPQUFPLEVBQUUsQ0FBQztJQUNsQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLG9CQUFvQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLG9CQUFvQixPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVc7SUFDOUMsd0JBQXdCLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDeEMsNEJBQTRCLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyx3QkFBd0Isc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixvQkFBb0IsSUFBSSxlQUFlLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDeEQsd0JBQXdCLE9BQU8sV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLG9CQUFvQixJQUFJLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDMUQsb0JBQW9CLElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQztJQUNyRCxvQkFBb0IsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDO0lBQ3JELG9CQUFvQixJQUFJLFFBQVEsR0FBRyxZQUFZLEVBQUUsV0FBVztJQUM1RCx3QkFBd0IsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksR0FBRyxVQUFVLElBQUksZ0JBQWdCLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUssd0JBQXdCLElBQUksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hJLHdCQUF3QixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLHdCQUF3QixDQUFDLENBQUMsS0FBSyxVQUFVLEtBQUssVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLHdCQUF3QixPQUFPLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssVUFBVSxHQUFHLENBQUMsS0FBSyxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLFNBQVMsRUFBRSxHQUFHLE1BQU0sR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdWLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLG9CQUFvQixPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVc7SUFDaEQsd0JBQXdCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQyx3QkFBd0IsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ3JELG9CQUFvQixFQUFFLEVBQUUsUUFBUSxFQUFFO0lBQ2xDLG9CQUFvQixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM3QyxvQkFBb0IsSUFBSSxFQUFFLDJCQUEyQjtJQUNyRCxvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsb0JBQW9CLElBQUksRUFBRSxJQUFJO0lBQzlCLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixvQkFBb0IsYUFBYSxFQUFFLGFBQWE7SUFDaEQsaUJBQWlCLEVBQUU7SUFDbkIsb0JBQW9CLEVBQUUsRUFBRSxLQUFLO0lBQzdCLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3BDLG9CQUFvQixPQUFPLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3ZFLGlCQUFpQixJQUFJLFNBQVMsR0FBRyxFQUFFO0lBQ25DLG9CQUFvQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hJLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxFQUFFLENBQUM7SUFDaEIsU0FBUyxDQUFDO0lBQ1YsUUFBUSxTQUFTLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2xFLFlBQVksT0FBTyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUM5RCxnQkFBZ0IsRUFBRSxFQUFFLEtBQUs7SUFDekIsZ0JBQWdCLElBQUksRUFBRSxTQUFTO0lBQy9CLGFBQWEsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULFFBQVEsU0FBUyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtJQUNuRSxZQUFZLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7SUFDL0QsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLO0lBQ3pCLGdCQUFnQixJQUFJLEVBQUUsU0FBUztJQUMvQixhQUFhLENBQUMsQ0FBQztJQUNmLFNBQVM7SUFDVCxRQUFRLFNBQVMsbUJBQW1CLENBQUMsR0FBRyxFQUFFO0lBQzFDLFlBQVksT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQ3pELGdCQUFnQixJQUFJLEVBQUUsU0FBUztJQUMvQixhQUFhLENBQUMsQ0FBQztJQUNmLFNBQVM7SUFDVCxRQUFRLFNBQVMsb0JBQW9CLENBQUMsR0FBRyxFQUFFO0lBQzNDLFlBQVksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3QyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0lBQ3pHLFlBQVksR0FBRyxDQUFDLGVBQWUsS0FBSyxHQUFHLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlELFlBQVksT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3ZDLFNBQVM7SUFDVCxRQUFRLFNBQVMsY0FBYyxDQUFDLEdBQUcsRUFBRTtJQUNyQyxZQUFZLE9BQU87SUFDbkIsZ0JBQWdCLEdBQUcsRUFBRSxXQUFXO0lBQ2hDLG9CQUFvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDckMsb0JBQW9CLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDaEUsd0JBQXdCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDOUksd0JBQXdCLE9BQU8sR0FBRyxDQUFDO0lBQ25DLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxRQUFRLElBQUksU0FBUyxHQUFHO0lBQ3hCLFlBQVksTUFBTSxFQUFFLFFBQVE7SUFDNUIsWUFBWSxNQUFNLEVBQUUsUUFBUTtJQUM1QixZQUFZLFFBQVEsRUFBRSxVQUFVO0lBQ2hDLFlBQVksT0FBTyxFQUFFLFNBQVM7SUFDOUIsWUFBWSxNQUFNLEVBQUUsUUFBUTtJQUM1QixZQUFZLEtBQUssRUFBRSxPQUFPO0lBQzFCLFNBQVMsQ0FBQztJQUNWLFFBQVEsSUFBSSxrQkFBa0IsR0FBRztJQUNqQyxZQUFZLElBQUksRUFBRSxNQUFNO0lBQ3hCLFlBQVksTUFBTSxFQUFFLFFBQVE7SUFDNUIsWUFBWSxNQUFNLEVBQUUsUUFBUTtJQUM1QixTQUFTLENBQUM7SUFDVixRQUFRLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUNsQyxRQUFRLElBQUksS0FBSyxHQUFHO0lBQ3BCLFlBQVksTUFBTSxFQUFFLGFBQWE7SUFDakMsWUFBWSxRQUFRLEVBQUUsZUFBZTtJQUNyQyxZQUFZLE9BQU8sRUFBRSxjQUFjO0lBQ25DLFlBQVksS0FBSyxFQUFFLFlBQVk7SUFDL0IsWUFBWSxLQUFLLEVBQUUsWUFBWTtJQUMvQixZQUFZLE9BQU8sRUFBRSxjQUFjO0lBQ25DLFlBQVksS0FBSyxFQUFFLFlBQVk7SUFDL0IsWUFBWSxNQUFNLEVBQUUsYUFBYTtJQUNqQyxZQUFZLEtBQUssRUFBRSxZQUFZO0lBQy9CLFNBQVMsQ0FBQztJQUNWLFFBQVEsU0FBUyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0lBQzFFLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDNUQsWUFBWSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsWUFBWSxPQUFPLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRixnQkFBZ0IsS0FBSyxFQUFFLEtBQUs7SUFDNUIsZ0JBQWdCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztJQUNoQyxnQkFBZ0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO0lBQ3BDLGdCQUFnQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7SUFDcEMsZ0JBQWdCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztJQUN4QyxnQkFBZ0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO0lBQ3hDLGdCQUFnQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07SUFDdEMsZ0JBQWdCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztJQUM1QyxnQkFBZ0IsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlO0lBQ3hELGdCQUFnQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7SUFDbEMsZ0JBQWdCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtJQUNsQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdkIsU0FBUztJQUNULFFBQVEsU0FBUyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUU7SUFDbEQsWUFBWSxPQUFPLGFBQWEsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXO0lBQ25FLGdCQUFnQixJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRSxnQkFBZ0IsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BLLGdCQUFnQixJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMxRyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdEUsZ0JBQWdCLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2pGLGdCQUFnQixJQUFJO0lBQ3BCLG9CQUFvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUU7SUFDcEQsd0JBQXdCLElBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxFQUFFLE9BQU8sa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBQ3JILDRCQUE0QixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6Rix5QkFBeUIsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLHdCQUF3QixJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sRUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3Ryx3QkFBd0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzlFLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDOUIsb0JBQW9CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLEdBQUcsY0FBYyxHQUFHLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxSCxpQkFBaUI7SUFDakIsYUFBYSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNoQyxTQUFTO0lBQ1QsUUFBUSxTQUFTLGVBQWUsR0FBRztJQUNuQyxZQUFZLElBQUk7SUFDaEIsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzVCLFNBQVM7SUFDVCxRQUFRLFNBQVMsV0FBVyxHQUFHO0lBQy9CLFlBQVksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RCxnQkFBZ0IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxHQUFHO0lBQ2pDLFlBQVksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RCxnQkFBZ0IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7SUFDdkQsWUFBWSxPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ3hELGdCQUFnQixPQUFPLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5RSxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ2hGLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0lBQ2pELFlBQVksT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RCxnQkFBZ0IsT0FBTyxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xHLG9CQUFvQixLQUFLLEVBQUUsS0FBSztJQUNoQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQixhQUFhLEVBQUUsQ0FBQztJQUNoQixTQUFTO0lBQ1QsUUFBUSxTQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRTtJQUNoRSxZQUFZLEtBQUssQ0FBQyxLQUFLLFNBQVMsS0FBSyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckQsWUFBWSxLQUFLLENBQUMsS0FBSyxTQUFTLEtBQUssU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELFlBQVksSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3RVLFlBQVksSUFBSSxXQUFXLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQztJQUN2RCxZQUFZLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUNuQyxZQUFZLElBQUksS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLFlBQVksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQzNCLFlBQVksSUFBSSxhQUFhLEdBQUc7SUFDaEMsZ0JBQWdCLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRTtJQUMxRixZQUFZO0lBQ1osZ0JBQWdCLEVBQUUsRUFBRSxTQUFTLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDakQsb0JBQW9CLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RGLG9CQUFvQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLG9CQUFvQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxvQkFBb0IsT0FBTztJQUMzQix3QkFBd0IsTUFBTSxFQUFFLFdBQVc7SUFDM0MsNEJBQTRCLElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDNUMsZ0NBQWdDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxnQ0FBZ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIscUJBQXFCLENBQUM7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixJQUFJLEVBQUUsU0FBUyxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQ25ELG9CQUFvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxXQUFXO0lBQ2xFLHdCQUF3QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUMsd0JBQXdCLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsb0JBQW9CLE9BQU8sUUFBUSxDQUFDO0lBQ3BDLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxFQUFFLFNBQVMsU0FBUyxFQUFFO0lBQzdDLG9CQUFvQixLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUssb0JBQW9CLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxvQkFBb0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLG9CQUFvQixJQUFJLFdBQVcsRUFBRTtJQUNyQyx3QkFBd0IsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDbEQsNEJBQTRCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCw0QkFBNEIsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUMvRSxnQ0FBZ0MsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUNqQyx5QkFBeUIsQ0FBQztJQUMxQix3QkFBd0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RGLHFCQUFxQjtJQUNyQixvQkFBb0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xGLGlCQUFpQjtJQUNqQixnQkFBZ0IsV0FBVyxFQUFFLFNBQVMsU0FBUyxFQUFFO0lBQ2pELG9CQUFvQixJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BGLG9CQUFvQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsb0JBQW9CLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxSyxvQkFBb0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRixpQkFBaUI7SUFDakIsZ0JBQWdCLEtBQUssRUFBRSxXQUFXO0lBQ2xDLG9CQUFvQixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLGlCQUFpQjtJQUNqQixhQUFhLENBQUMsQ0FBQztJQUNmLFlBQVksSUFBSSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3BDLFlBQVksSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMvRCxZQUFZLElBQUksZUFBZSxDQUFDO0lBQ2hDLFlBQVksSUFBSSxxQkFBcUIsQ0FBQztJQUN0QyxZQUFZLElBQUksY0FBYyxDQUFDO0lBQy9CLFlBQVksSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUNwRCxZQUFZLElBQUkseUJBQXlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ3hFLFlBQVksSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUM5QyxZQUFZLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDOUMsWUFBWSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hELFlBQVksSUFBSSx1QkFBdUIsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDO0lBQ3BFLFlBQVksSUFBSSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0lBQ2xFLFlBQVksSUFBSSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzVELFlBQVksSUFBSSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3hELFlBQVksSUFBSSwwQkFBMEIsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUM7SUFDMUUsWUFBWSxJQUFJLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsWUFBWSxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzlDLFlBQVksSUFBSSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ2hFLFlBQVksSUFBSSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0lBQ2xFLFlBQVksSUFBSSx3QkFBd0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDdEUsWUFBWSxJQUFJLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RSxZQUFZLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxNQUFNLEVBQUU7SUFDcEQsZ0JBQWdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekcsb0JBQW9CLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxvQkFBb0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hKLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFdBQVc7SUFDOUMsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDNUQsb0JBQW9CLE9BQU8sd0JBQXdCLEdBQUcsd0JBQXdCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDakcsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0IsRUFBRTtJQUM5RCxnQkFBZ0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUM1RCxvQkFBb0IsT0FBTyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pLLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGNBQWMsR0FBRyxXQUFXO0lBQzVDLGdCQUFnQixPQUFPLHNCQUFzQixHQUFHLHNCQUFzQixFQUFFLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDaEgsb0JBQW9CLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEQsb0JBQW9CLElBQUksVUFBVSxFQUFFO0lBQ3BDLHdCQUF3QixJQUFJLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RSx3QkFBd0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQ25ELDRCQUE0QixPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0RCx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixPQUFPLFNBQVMsQ0FBQztJQUN6QyxxQkFBcUI7SUFDckIsb0JBQW9CLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztJQUNsRCx3QkFBd0IsSUFBSSxFQUFFLFNBQVM7SUFDdkMscUJBQXFCLENBQUMsQ0FBQztJQUN2QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxpQkFBaUIsR0FBRyxTQUFTLFNBQVMsRUFBRTtJQUN4RCxnQkFBZ0IsT0FBTyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUMvSCxvQkFBb0IsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRTtJQUNyRCxvQkFBb0IsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssZ0JBQWdCLEdBQUcsU0FBUyxPQUFPLEVBQUU7SUFDL0Ysd0JBQXdCLElBQUksVUFBVSxHQUFHLFNBQVMsT0FBTyxFQUFFO0lBQzNELDRCQUE0QixJQUFJLFVBQVUsR0FBRyxTQUFTLE9BQU8sRUFBRTtJQUMvRCxnQ0FBZ0MsTUFBTSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3pGLGdDQUFnQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLE9BQU8sQ0FBQztJQUM3RSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2Qyw0QkFBNEIsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUN4RSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyx3QkFBd0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDekYsd0JBQXdCLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUMvRyx3QkFBd0IsSUFBSSxRQUFRLEdBQUcsY0FBYyxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ25FLHdCQUF3QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLHdCQUF3QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RCx3QkFBd0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCx3QkFBd0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSx3QkFBd0IsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEUsd0JBQXdCLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0Qsd0JBQXdCLE9BQU8sWUFBWSxDQUFDO0lBQzVDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN6QyxvQkFBb0IsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxXQUFXLEdBQUcsU0FBUyxRQUFRLEVBQUU7SUFDakQsZ0JBQWdCLE9BQU8sbUJBQW1CLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDbEgsb0JBQW9CLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDL0MsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksSUFBSSxHQUFHLFdBQVc7SUFDbEMsZ0JBQWdCLE9BQU8sWUFBWSxHQUFHLFlBQVksRUFBRSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUNqRixvQkFBb0IsUUFBUSxFQUFFLGdCQUFnQixDQUFDO0lBQy9DLHdCQUF3QixPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLHFCQUFxQixDQUFDO0lBQ3RCLG9CQUFvQixXQUFXLEVBQUUscUJBQXFCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUk7SUFDN0csaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLElBQUksR0FBRyxXQUFXO0lBQ2xDLGdCQUFnQixPQUFPLFlBQVksR0FBRyxZQUFZLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFDakYsb0JBQW9CLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztJQUMvQyx3QkFBd0IsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNuQyxxQkFBcUIsQ0FBQztJQUN0QixvQkFBb0IsV0FBVyxFQUFFLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJO0lBQzdHLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxNQUFNLEdBQUcsV0FBVztJQUNwQyxnQkFBZ0IsT0FBTyxVQUFVLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3RELG9CQUFvQixLQUFLLEVBQUUsS0FBSztJQUNoQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6QixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksYUFBYSxHQUFHLFdBQVc7SUFDM0MsZ0JBQWdCLE9BQU8sVUFBVSxJQUFJLE9BQU8sVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNwRSxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsaUJBQWlCLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDaEMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGNBQWMsR0FBRyxXQUFXO0lBQzVDLGdCQUFnQixPQUFPLFdBQVcsSUFBSSxRQUFRLElBQUksT0FBTyxXQUFXLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEgsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFdBQVc7SUFDOUMsZ0JBQWdCLE9BQU8sV0FBVyxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDakcsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLFNBQVMsR0FBRyxTQUFTLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDcEQsZ0JBQWdCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDakQsZ0JBQWdCLE9BQU8saUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFO0lBQ3RFLG9CQUFvQixVQUFVLEVBQUUsVUFBVTtJQUMxQyxpQkFBaUIsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzFELG9CQUFvQixJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNyRix3QkFBd0IsVUFBVSxFQUFFLFFBQVEsQ0FBQztJQUM3Qyw0QkFBNEIsSUFBSSxFQUFFLFVBQVU7SUFDNUMsNEJBQTRCLEtBQUssRUFBRSxJQUFJO0lBQ3ZDLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDeEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksa0JBQWtCLEdBQUcsU0FBUyxPQUFPLEVBQUU7SUFDdkQsZ0JBQWdCLE9BQU8sMEJBQTBCLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDL0gsb0JBQW9CLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ3JGLHdCQUF3QixVQUFVLEVBQUUsUUFBUSxDQUFDO0lBQzdDLDRCQUE0QixJQUFJLEVBQUUsMEJBQTBCLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFJO0lBQzdGLDRCQUE0QixLQUFLLEVBQUUsYUFBYSxHQUFHLElBQUk7SUFDdkQseUJBQXlCLEVBQUUsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xELHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxhQUFhLEdBQUcsU0FBUyxPQUFPLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0lBQ2pGLGdCQUFnQixPQUFPLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUNwSixvQkFBb0IsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUNwRCx3QkFBd0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUN2Ryx3QkFBd0IsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDeEYsNEJBQTRCLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVztJQUN2RCxnQ0FBZ0MsT0FBTyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyw0QkFBNEIsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxvQkFBb0IsRUFBRTtJQUN6RyxnQ0FBZ0MsT0FBTyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlFLDZCQUE2QixFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ3BELGdDQUFnQyxPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDbEYsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksS0FBSyxHQUFHLFdBQVc7SUFDbkMsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDNUQsb0JBQW9CLElBQUksZUFBZSxFQUFFLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEosaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksWUFBWSxHQUFHLFNBQVMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO0lBQ3RFLGdCQUFnQixJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDbEQsb0JBQW9CLElBQUksTUFBTSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELG9CQUFvQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzFELG9CQUFvQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNqRCxvQkFBb0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQy9DLHdCQUF3QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixvQkFBb0IsT0FBTztJQUMzQix3QkFBd0IsSUFBSSxFQUFFLFFBQVE7SUFDdEMsd0JBQXdCLEdBQUcsRUFBRSxHQUFHO0lBQ2hDLHFCQUFxQixDQUFDO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssR0FBRztJQUNuRCxvQkFBb0IsSUFBSSxFQUFFLFFBQVE7SUFDbEMsaUJBQWlCLEdBQUc7SUFDcEIsb0JBQW9CLElBQUksRUFBRSxRQUFRO0lBQ2xDLG9CQUFvQixRQUFRLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxDQUFDO0lBQ3hELGlCQUFpQixDQUFDO0lBQ2xCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxTQUFTLEdBQUcsU0FBUyxZQUFZLEVBQUU7SUFDbkQsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDNUQsb0JBQW9CLGNBQWMsR0FBRyxZQUFZLENBQUM7SUFDbEQsb0JBQW9CLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxvQkFBb0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQy9DLHdCQUF3QixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZGLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksTUFBTSxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3pDLGdCQUFnQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9ELGdCQUFnQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzVELG9CQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7SUFDaEQsd0JBQXdCLEtBQUssRUFBRSxLQUFLO0lBQ3BDLHdCQUF3QixNQUFNLEVBQUUsTUFBTTtJQUN0QyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUN4QyxnQkFBZ0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUM1RCxvQkFBb0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUMxRCxvQkFBb0IsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDckMsb0JBQW9CLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNyRixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxLQUFLLEdBQUcsT0FBTyxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQy9DLGdCQUFnQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzVELG9CQUFvQixJQUFJLGFBQWEsRUFBRTtJQUN2Qyx3QkFBd0IsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU87SUFDN0Usd0JBQXdCLE9BQU8sYUFBYSxFQUFFLENBQUM7SUFDL0MscUJBQXFCO0lBQ3JCLG9CQUFvQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ2hFLHdCQUF3QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELHFCQUFxQixFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDekMsd0JBQXdCLE9BQU8sT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDN0UscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksSUFBSSxJQUFJLEdBQUcsU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQ2hELGdCQUFnQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzdFLGdCQUFnQixPQUFPLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFO0lBQzVELG9CQUFvQixRQUFRLEVBQUUsUUFBUTtJQUN0QyxvQkFBb0IsVUFBVSxFQUFFLFVBQVU7SUFDMUMsb0JBQW9CLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtJQUNoRCxpQkFBaUIsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzFELG9CQUFvQixJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO0lBQ3BELHdCQUF3QixJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUM5Rix3QkFBd0IsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQ3RFLDRCQUE0QixPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUMvRSxnQ0FBZ0MsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQzNELG9DQUFvQyxPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxpQ0FBaUMsRUFBRSxDQUFDO0lBQ3BDLGdDQUFnQyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVc7SUFDM0Qsb0NBQW9DLE9BQU8sU0FBUyxHQUFHLEVBQUU7SUFDekQsd0NBQXdDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLHFCQUFxQixHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsWUFBWSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5VCxxQ0FBcUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxpQ0FBaUMsRUFBRSxDQUFDO0lBQ3BDLGdDQUFnQyxPQUFPLEdBQUcsQ0FBQztJQUMzQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLHlCQUF5QixFQUFFLENBQUM7SUFDNUIscUJBQXFCO0lBQ3JCLG9CQUFvQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ2xGLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ3hDLG9CQUFvQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUM1Qyx3QkFBd0IsSUFBSSxFQUFFLFNBQVM7SUFDdkMscUJBQXFCLENBQUMsQ0FBQztJQUN2QixvQkFBb0IsT0FBTyxRQUFRLENBQUM7SUFDcEMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksY0FBYyxHQUFHLFdBQVc7SUFDNUMsZ0JBQWdCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDNUQsb0JBQW9CLElBQUksb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVztJQUNuRyx3QkFBd0IsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUNwRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDekIsb0JBQW9CLElBQUkseUJBQXlCLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0Ysb0JBQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckUsb0JBQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsb0JBQW9CLElBQUksc0JBQXNCLEVBQUUsT0FBTyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hGLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGdCQUFnQixHQUFHLFNBQVMsUUFBUSxFQUFFO0lBQ3RELGdCQUFnQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxnQkFBZ0IsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxFQUFFO0lBQ3BFLG9CQUFvQixJQUFJLFFBQVEsRUFBRTtJQUNsQyx3QkFBd0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYscUJBQXFCO0lBQ3JCLG9CQUFvQixPQUFPLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUM1RSx3QkFBd0IsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkQscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDdkQsd0JBQXdCLElBQUksY0FBYyxFQUFFO0lBQzVDLDRCQUE0QixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUN2Rix5QkFBeUI7SUFDekIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUIsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3JDLG9CQUFvQixPQUFPLE1BQU0sQ0FBQztJQUNsQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUU7SUFDeEMsZ0JBQWdCLE9BQU8sZUFBZSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUNyRyxvQkFBb0IsSUFBSSxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQzNELHdCQUF3QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELHdCQUF3QixXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELHdCQUF3QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvRCxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hDLFlBQVksSUFBSSxjQUFjLEdBQUcsU0FBUyxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQzNELGdCQUFnQixPQUFPLFFBQVEsQ0FBQztJQUNoQyxvQkFBb0IsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0lBQzlDLG9CQUFvQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87SUFDMUMsb0JBQW9CLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztJQUNsQyxvQkFBb0IsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO0lBQ2xDLG9CQUFvQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7SUFDdEMsb0JBQW9CLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztJQUN4RCxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsb0JBQW9CLEtBQUssRUFBRSxLQUFLO0lBQ2hDLG9CQUFvQixLQUFLLEVBQUUsS0FBSztJQUNoQyxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsb0JBQW9CLEdBQUcsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixVQUFVLEVBQUUsVUFBVTtJQUMxQyxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksU0FBUyxHQUFHLFNBQVMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFO0lBQy9ELGdCQUFnQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdELGdCQUFnQixPQUFPLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO0lBQ2hGLG9CQUFvQixPQUFPLEVBQUUsT0FBTztJQUNwQyxvQkFBb0IsR0FBRyxFQUFFLEdBQUc7SUFDNUIsaUJBQWlCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUMxRCxvQkFBb0IsSUFBSSxpQkFBaUIsRUFBRTtJQUMzQyx3QkFBd0IsSUFBSSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUUsd0JBQXdCLElBQUksZUFBZSxJQUFJLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxTQUFTLEdBQUcsRUFBRTtJQUM5Riw0QkFBNEIsSUFBSTtJQUNoQyxnQ0FBZ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEUsZ0NBQWdDLElBQUksYUFBYSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkYsNkJBQTZCLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtJQUM1Qyw0QkFBNEIsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0Qyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsRUFBRTtJQUM1Qyw0QkFBNEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQ3JHLDRCQUE0QixJQUFJLEVBQUUsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUU7SUFDdkUsZ0NBQWdDLE9BQU8sRUFBRSxPQUFPO0lBQ2hELGdDQUFnQyxHQUFHLEVBQUUsR0FBRztJQUN4QyxnQ0FBZ0MsR0FBRyxFQUFFLEdBQUc7SUFDeEMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQiw0QkFBNEIsSUFBSSxFQUFFLEVBQUU7SUFDcEMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLGFBQWEsS0FBSyxHQUFHLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO0lBQ2xLLGdDQUFnQyxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRTtJQUNuRCxvQ0FBb0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RSxvQ0FBb0MsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkgsb0NBQW9DLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3ZGLG9DQUFvQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hMLG9DQUFvQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNLLGlDQUFpQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxnQ0FBZ0MsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsSUFBSSxpQkFBaUIsRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxrQkFBa0IsSUFBSSxrQkFBa0IsRUFBRSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7SUFDN1YsZ0NBQWdDLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLEVBQUU7SUFDbkcsb0NBQW9DLElBQUksdUJBQXVCLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUssRUFBRTtJQUNyRyx3Q0FBd0MsTUFBTSxDQUFDO0lBQy9DLDRDQUE0QyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQy9FLDRDQUE0QyxNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xGLHlDQUF5QyxDQUFDLENBQUM7SUFDM0MscUNBQXFDLEdBQUc7SUFDeEMsd0NBQXdDLEtBQUssRUFBRSxLQUFLO0lBQ3BELHdDQUF3QyxNQUFNLEVBQUUsTUFBTTtJQUN0RCx3Q0FBd0MsR0FBRyxFQUFFLGVBQWU7SUFDNUQscUNBQXFDLENBQUMsQ0FBQztJQUN2QyxvQ0FBb0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdGLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxlQUFlLEdBQUcsU0FBUyxjQUFjLEVBQUUsS0FBSyxFQUFFO0lBQ2xFLGdCQUFnQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3SSxnQkFBZ0IsT0FBTyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUU7SUFDekYsb0JBQW9CLFVBQVUsRUFBRSxVQUFVO0lBQzFDLG9CQUFvQixtQkFBbUIsRUFBRSxtQkFBbUI7SUFDNUQsb0JBQW9CLE9BQU8sRUFBRSxPQUFPO0lBQ3BDLG9CQUFvQixHQUFHLEVBQUUsR0FBRztJQUM1QixpQkFBaUIsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUMvQyxvQkFBb0IsU0FBUyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUU7SUFDbkQsb0JBQW9CLEtBQUssRUFBRSxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0Qsb0JBQW9CLGNBQWMsRUFBRSxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQzFGLG9CQUFvQixhQUFhLEVBQUUsZ0JBQWdCLEVBQUU7SUFDckQsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDMUMsb0JBQW9CLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzdGLG9CQUFvQixJQUFJLGNBQWMsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUU7SUFDM0Usd0JBQXdCLE9BQU8sRUFBRSxPQUFPO0lBQ3hDLHdCQUF3QixHQUFHLEVBQUUsR0FBRztJQUNoQyx3QkFBd0IsU0FBUyxFQUFFLFNBQVM7SUFDNUMsd0JBQXdCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztJQUMzQyx3QkFBd0IsY0FBYyxFQUFFLE1BQU0sQ0FBQyxjQUFjO0lBQzdELHdCQUF3QixHQUFHLEVBQUUsUUFBUTtJQUNyQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCLG9CQUFvQixJQUFJLGNBQWMsRUFBRTtJQUN4Qyx3QkFBd0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCx3QkFBd0IsV0FBVyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRCx3QkFBd0IsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7SUFDMUUsNEJBQTRCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsNEJBQTRCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLDRCQUE0QixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUN2RCw0QkFBNEIsSUFBSSxRQUFRLENBQUM7SUFDekMsNEJBQTRCLElBQUksZ0JBQWdCLENBQUM7SUFDakQsNEJBQTRCLElBQUksbUJBQW1CLENBQUM7SUFDcEQsNEJBQTRCLElBQUksTUFBTSxHQUFHLFdBQVc7SUFDcEQsZ0NBQWdDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxnQ0FBZ0MsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqSSxnQ0FBZ0MsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5RCxnQ0FBZ0MsbUJBQW1CLElBQUksbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hILGdDQUFnQyxnQkFBZ0IsSUFBSSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRiw2QkFBNkIsQ0FBQztJQUM5Qiw0QkFBNEIsSUFBSSxhQUFhLEdBQUcsV0FBVztJQUMzRCxnQ0FBZ0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNoRCxvQ0FBb0MsT0FBTyxFQUFFLENBQUM7SUFDOUMsb0NBQW9DLE1BQU0sRUFBRSxDQUFDO0lBQzdDLGlDQUFpQztJQUNqQyw2QkFBNkIsQ0FBQztJQUM5Qiw0QkFBNEIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDMUQsZ0NBQWdDLGFBQWEsRUFBRSxDQUFDO0lBQ2hELGdDQUFnQyxPQUFPO0lBQ3ZDLG9DQUFvQyxNQUFNLEVBQUUsTUFBTTtJQUNsRCxpQ0FBaUMsQ0FBQztJQUNsQyw2QkFBNkI7SUFDN0IsNEJBQTRCLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pELGdDQUFnQyxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzVFLGdDQUFnQyxNQUFNLGVBQWUsSUFBSTtJQUN6RCxvQ0FBb0MsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXO0lBQ25HLHdDQUF3QyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLENBQUM7SUFDcEYscUNBQXFDLEVBQUUsQ0FBQztJQUN4QyxvQ0FBb0MsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUM5RSx3Q0FBd0MsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyRCxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ3ZDLG9DQUFvQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RSxvQ0FBb0MsZUFBZSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDcEYsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3Qiw0QkFBNEIsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEdBQUcsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUksNEJBQTRCLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3BFLDRCQUE0QixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLFFBQVEsRUFBRTtJQUN4RixnQ0FBZ0MsQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0gsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyw0QkFBNEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLDRCQUE0QixRQUFRLEdBQUcsWUFBWSxFQUFFLFdBQVc7SUFDaEUsZ0NBQWdDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUM1RSw2QkFBNkIsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNyQyw0QkFBNEIsT0FBTztJQUNuQyxnQ0FBZ0MsTUFBTSxFQUFFLE1BQU07SUFDOUMsNkJBQTZCLENBQUM7SUFDOUIseUJBQXlCLENBQUMsY0FBYyxHQUFHLFdBQVc7SUFDdEQsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztJQUNuRyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVc7SUFDbkQsNEJBQTRCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0QseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQ25ELDRCQUE0QixPQUFPLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRSx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixPQUFPLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RixxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUM7SUFDZCxZQUFZLElBQUksVUFBVSxHQUFHLFdBQVc7SUFDeEMsZ0JBQWdCLE9BQU87SUFDdkIsb0JBQW9CLEtBQUssRUFBRSxLQUFLO0lBQ2hDLG9CQUFvQixLQUFLLEVBQUUsS0FBSztJQUNoQyxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7SUFDaEMsb0JBQW9CLEtBQUssRUFBRSxLQUFLO0lBQ2hDLG9CQUFvQixNQUFNLEVBQUUsTUFBTTtJQUNsQyxvQkFBb0IsT0FBTyxFQUFFLE9BQU87SUFDcEMsb0JBQW9CLFdBQVcsRUFBRSxXQUFXO0lBQzVDLG9CQUFvQixJQUFJLEVBQUUsSUFBSTtJQUM5QixvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsaUJBQWlCLENBQUM7SUFDbEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLFFBQVEsR0FBRyxTQUFTLFFBQVEsRUFBRSxRQUFRLEVBQUU7SUFDeEQsZ0JBQWdCLEtBQUssQ0FBQyxLQUFLLFFBQVEsS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDM0MsZ0JBQWdCLENBQUMsU0FBUyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFO0lBQzFFLG9CQUFvQixLQUFLLENBQUMsS0FBSyxRQUFRLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0Qsb0JBQW9CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRSxvQkFBb0IsSUFBSSxTQUFTLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRixvQkFBb0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbEgsd0JBQXdCLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdFLHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3JDLG9CQUFvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlJLG9CQUFvQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyRSx3QkFBd0IsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELHdCQUF3QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsd0JBQXdCLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCx3QkFBd0IsSUFBSSxPQUFPLEVBQUU7SUFDckMsNEJBQTRCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDdEQsNEJBQTRCLElBQUksS0FBSyxFQUFFO0lBQ3ZDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pILGdDQUFnQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELDZCQUE2QjtJQUM3Qiw0QkFBNEIsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNwRSxnQ0FBZ0MsS0FBSyxFQUFFLEtBQUs7SUFDNUMsZ0NBQWdDLEtBQUssRUFBRSxLQUFLO0lBQzVDLGdDQUFnQyxLQUFLLEVBQUUsS0FBSztJQUM1QyxnQ0FBZ0MsS0FBSyxFQUFFLEtBQUs7SUFDNUMsZ0NBQWdDLEtBQUssRUFBRSxLQUFLO0lBQzVDLGdDQUFnQyxPQUFPLEVBQUUsT0FBTztJQUNoRCw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDaEMsNEJBQTRCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDN0YsZ0NBQWdDLEtBQUssRUFBRSxLQUFLO0lBQzVDLGdDQUFnQyxLQUFLLEVBQUUsS0FBSztJQUM1QyxnQ0FBZ0MsS0FBSyxFQUFFLEtBQUs7SUFDNUMsZ0NBQWdDLEtBQUssRUFBRSxLQUFLO0lBQzVDLGdDQUFnQyxLQUFLLEVBQUUsS0FBSztJQUM1QyxnQ0FBZ0MsT0FBTyxFQUFFLE9BQU87SUFDaEQsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLDRCQUE0QixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxPQUFPLEtBQUssT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxLQUFLLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDak4sNEJBQTRCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDaEQseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUYsb0JBQW9CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdHLHdCQUF3QixJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsd0JBQXdCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCx3QkFBd0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELHdCQUF3QixRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDaEgsNEJBQTRCLEtBQUssRUFBRSxNQUFNO0lBQ3pDLDRCQUE0QixLQUFLLEVBQUUsS0FBSztJQUN4Qyw0QkFBNEIsS0FBSyxFQUFFLEtBQUs7SUFDeEMsNEJBQTRCLEtBQUssRUFBRSxLQUFLO0lBQ3hDLDRCQUE0QixLQUFLLEVBQUUsS0FBSztJQUN4Qyw0QkFBNEIsS0FBSyxFQUFFLEtBQUs7SUFDeEMsNEJBQTRCLE9BQU8sRUFBRSxPQUFPO0lBQzVDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ25ILHdCQUF3QixJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsd0JBQXdCLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hKLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLFdBQVcsR0FBRyxTQUFTLFFBQVEsRUFBRTtJQUNqRCxnQkFBZ0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFnQixPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUNwRCxvQkFBb0IsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQy9DLG9CQUFvQixJQUFJLFFBQVEsR0FBRyxlQUFlLENBQUM7SUFDbkQsb0JBQW9CLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRSxPQUFPLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxVQUFVLEVBQUU7SUFDbEgsd0JBQXdCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDbEYsNEJBQTRCLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ3JGLGdDQUFnQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ3ZELDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsYUFBYSxDQUFDO0lBQ2QsWUFBWSxPQUFPO0lBQ25CLGdCQUFnQixJQUFJLEVBQUUsV0FBVztJQUNqQyxvQkFBb0IsQ0FBQyxXQUFXO0lBQ2hDLHdCQUF3QixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVztJQUMzRCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEQseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVc7SUFDNUQsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JELHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXO0lBQzdELDRCQUE0QixPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0RCx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVztJQUMxRCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkQseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVc7SUFDNUQsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JELHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXO0lBQzNELDRCQUE0QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRCx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVztJQUMxRCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkQseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsUUFBUSxFQUFFO0lBQ2xFLDRCQUE0QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxFQUFFO0lBQzdELDRCQUE0QixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUMxSCxnQ0FBZ0MsVUFBVSxFQUFFLFdBQVc7SUFDdkQsb0NBQW9DLE1BQU0sR0FBRyxDQUFDO0lBQzlDLGlDQUFpQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCLE1BQU0sRUFBRSxTQUFTLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQzdELG9CQUFvQixPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ2hFLHdCQUF3QixJQUFJLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUNuRSx3QkFBd0IsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4RCx3QkFBd0IsSUFBSSxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDM0Qsd0JBQXdCLENBQUMsU0FBUyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtJQUM3RCw0QkFBNEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO0lBQ25ELGdDQUFnQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDN0gsZ0NBQWdDLElBQUksTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQ3pELGdDQUFnQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNsTSxnQ0FBZ0MsSUFBSSxTQUFTLElBQUksUUFBUSxJQUFJLE9BQU8sU0FBUyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELEdBQUcsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekwsNkJBQTZCO0lBQzdCLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckQsd0JBQXdCLElBQUksZUFBZSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ25GLDRCQUE0QixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUUsT0FBTyxTQUFTLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDcEYsZ0NBQWdDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN2RCxnQ0FBZ0MsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekgsb0NBQW9DLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RSxvQ0FBb0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLG9DQUFvQyxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEgsaUNBQWlDO0lBQ2pDLGdDQUFnQyxJQUFJLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFO0lBQ3ZHLG9DQUFvQyxTQUFTLEVBQUU7SUFDL0Msd0NBQXdDLEtBQUssRUFBRSxhQUFhO0lBQzVELHdDQUF3QyxLQUFLLEVBQUUsS0FBSztJQUNwRCx3Q0FBd0MsS0FBSyxFQUFFLEtBQUs7SUFDcEQsd0NBQXdDLE9BQU8sRUFBRSxPQUFPO0lBQ3hELHdDQUF3QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDMUUsd0NBQXdDLGdCQUFnQixFQUFFLGdCQUFnQjtJQUMxRSxxQ0FBcUM7SUFDckMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDMUQsb0NBQW9DLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hFLG9DQUFvQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ2xFLHdDQUF3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRyxxQ0FBcUMsRUFBRSxDQUFDO0lBQ3hDLG9DQUFvQyxPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdFLGlDQUFpQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ3pELG9DQUFvQyxNQUFNLElBQUksS0FBSyxDQUFDLDhGQUE4RixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFLLGlDQUFpQyxFQUFFLENBQUM7SUFDcEMsZ0NBQWdDLHlCQUF5QixHQUFHLFdBQVc7SUFDdkUsb0NBQW9DLEtBQUssSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUosb0NBQW9DLE9BQU8scUJBQXFCLENBQUMsSUFBSSxFQUFFLFNBQVMsY0FBYyxFQUFFO0lBQ2hHLHdDQUF3QyxPQUFPLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVHLHFDQUFxQyxFQUFFLENBQUM7SUFDeEMsaUNBQWlDLENBQUM7SUFDbEMsZ0NBQWdDLHVCQUF1QixHQUFHLFdBQVc7SUFDckUsb0NBQW9DLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEssb0NBQW9DLE9BQU8scUJBQXFCLENBQUMsSUFBSSxFQUFFLFNBQVMsY0FBYyxFQUFFO0lBQ2hHLHdDQUF3QyxPQUFPLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRyxxQ0FBcUMsRUFBRSxDQUFDO0lBQ3hDLGlDQUFpQyxDQUFDO0lBQ2xDLGdDQUFnQyxZQUFZLEdBQUcsV0FBVztJQUMxRCxvQ0FBb0MsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsSyxvQ0FBb0MsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDaEcsd0NBQXdDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9GLHFDQUFxQyxFQUFFLENBQUM7SUFDeEMsaUNBQWlDLENBQUM7SUFDbEMsZ0NBQWdDLFlBQVksR0FBRyxXQUFXO0lBQzFELG9DQUFvQyxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xLLG9DQUFvQyxPQUFPLHFCQUFxQixDQUFDLElBQUksRUFBRSxTQUFTLGNBQWMsRUFBRTtJQUNoRyx3Q0FBd0MsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0YscUNBQXFDLEVBQUUsQ0FBQztJQUN4QyxpQ0FBaUMsQ0FBQztJQUNsQyxnQ0FBZ0Msc0JBQXNCLEdBQUcsV0FBVztJQUNwRSxvQ0FBb0MsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsSyxvQ0FBb0MsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDaEcsd0NBQXdDLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pHLHFDQUFxQyxFQUFFLENBQUM7SUFDeEMsaUNBQWlDLENBQUM7SUFDbEMsZ0NBQWdDLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7SUFDaEUsb0NBQW9DLHNCQUFzQixHQUFHLFdBQVc7SUFDeEUsd0NBQXdDLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEssd0NBQXdDLE9BQU8scUJBQXFCLENBQUMsSUFBSSxFQUFFLFNBQVMsY0FBYyxFQUFFO0lBQ3BHLDRDQUE0QyxPQUFPLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3Ryx5Q0FBeUMsRUFBRSxDQUFDO0lBQzVDLHFDQUFxQyxDQUFDO0lBQ3RDLG9DQUFvQyxpQkFBaUIsR0FBRyxXQUFXO0lBQ25FLHdDQUF3QyxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RLLHdDQUF3QyxPQUFPLHFCQUFxQixDQUFDLElBQUksRUFBRSxTQUFTLGNBQWMsRUFBRTtJQUNwRyw0Q0FBNEMsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEcseUNBQXlDLEVBQUUsQ0FBQztJQUM1QyxxQ0FBcUMsQ0FBQztJQUN0QyxvQ0FBb0MsMEJBQTBCLEdBQUcsV0FBVztJQUM1RSx3Q0FBd0MsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0Syx3Q0FBd0MsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDcEcsNENBQTRDLE9BQU8sY0FBYyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakgseUNBQXlDLEVBQUUsQ0FBQztJQUM1QyxxQ0FBcUMsQ0FBQztJQUN0QyxvQ0FBb0MsaUJBQWlCLEdBQUcsV0FBVztJQUNuRSx3Q0FBd0MsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0Syx3Q0FBd0MsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDcEcsNENBQTRDLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hHLHlDQUF5QyxFQUFFLENBQUM7SUFDNUMscUNBQXFDLENBQUM7SUFDdEMsb0NBQW9DLFlBQVksR0FBRyxXQUFXO0lBQzlELHdDQUF3QyxLQUFLLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlLLHdDQUF3QyxPQUFPLHFCQUFxQixDQUFDLElBQUksRUFBRSxTQUFTLGNBQWMsRUFBRTtJQUNwRyw0Q0FBNEMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkcseUNBQXlDLEVBQUUsQ0FBQztJQUM1QyxxQ0FBcUMsQ0FBQztJQUN0QyxvQ0FBb0MscUJBQXFCLEdBQUcsV0FBVztJQUN2RSx3Q0FBd0MsS0FBSyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5Syx3Q0FBd0MsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxjQUFjLEVBQUU7SUFDcEcsNENBQTRDLE9BQU8sY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVHLHlDQUF5QyxFQUFFLENBQUM7SUFDNUMscUNBQXFDLENBQUM7SUFDdEMsaUNBQWlDO0lBQ2pDLGdDQUFnQyxPQUFPLHFCQUFxQixDQUFDO0lBQzdELDZCQUE2QixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3RELHdCQUF3QixJQUFJLHFCQUFxQixHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQ3JFLHdCQUF3QixJQUFJLGVBQWUsR0FBRyxTQUFTLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDeEUsNEJBQTRCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUM1Qyw0QkFBNEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCw0QkFBNEIsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUNwRixnQ0FBZ0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELGdDQUFnQyxJQUFJLElBQUksRUFBRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ2pHLG9DQUFvQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0Qsb0NBQW9DLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDL0UsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDMUQsb0NBQW9DLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxPQUFPLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLElBQUksRUFBRTtJQUN0TCx3Q0FBd0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkYsd0NBQXdDLElBQUksTUFBTSxDQUFDO0lBQ25ELHdDQUF3QyxJQUFJLFNBQVMsSUFBSSxPQUFPLFVBQVUsRUFBRSxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBTyxVQUFVLEVBQUUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLE9BQU8sVUFBVSxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7SUFDblAsNENBQTRDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDN1QsZ0RBQWdELE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUM5RixvREFBb0QsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2RixvREFBb0QsS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2RixvREFBb0QsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUM1RixvREFBb0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUU7SUFDbFAsd0RBQXdELE9BQU8sUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDO0lBQ3RGLHFEQUFxRCxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwUSxvREFBb0QsT0FBTyxNQUFNLENBQUM7SUFDbEUsaURBQWlELENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLGdEQUFnRCxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM3SSxvREFBb0QsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JGLG9EQUFvRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLGlEQUFpRDtJQUNqRCxnREFBZ0QsT0FBTztJQUN2RCw2Q0FBNkM7SUFDN0MseUNBQXlDLE1BQU0sUUFBUSxJQUFJLE9BQU8sVUFBVSxLQUFLLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqSCx3Q0FBd0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNwRSxxQ0FBcUMsRUFBRSxDQUFDO0lBQ3hDLGlDQUFpQyxFQUFFLENBQUM7SUFDcEMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ2xELGdDQUFnQyxPQUFPLE1BQU0sQ0FBQztJQUM5Qyw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDakUsNEJBQTRCLE9BQU8sU0FBUyxHQUFHLEVBQUUsT0FBTyxFQUFFO0lBQzFELGdDQUFnQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNoRSxnQ0FBZ0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDOUQsZ0NBQWdDLElBQUksV0FBVyxDQUFDO0lBQ2hELGdDQUFnQyxJQUFJLFlBQVksQ0FBQztJQUNqRCxnQ0FBZ0MsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRSxnQ0FBZ0MsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxnQ0FBZ0MsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xHLGdDQUFnQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsZ0NBQWdDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RixnQ0FBZ0MsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixnQ0FBZ0MsV0FBVyxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQy9GLGdDQUFnQyxVQUFVLEtBQUssV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDN0YsZ0NBQWdDLE9BQU8sV0FBVyxDQUFDO0lBQ25ELDZCQUE2QixDQUFDLFNBQVMsR0FBRyxFQUFFO0lBQzVDLGdDQUFnQyxJQUFJLEVBQUUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7SUFDakgsZ0NBQWdDLElBQUksTUFBTSxDQUFDO0lBQzNDLGdDQUFnQyxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDNUYsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtJQUN6QyxnQ0FBZ0MsS0FBSyxFQUFFLEtBQUs7SUFDNUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQix5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHdCQUF3QixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSx3QkFBd0IsSUFBSSx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRix3QkFBd0IsSUFBSSxxQkFBcUIsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUNyRSx3QkFBd0IsSUFBSSxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLEVBQUU7SUFDcEcsNEJBQTRCLE9BQU8sU0FBUyxLQUFLLEVBQUU7SUFDbkQsZ0NBQWdDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU07SUFDMU0sZ0NBQWdDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRSxnQ0FBZ0MsT0FBTyxTQUFTLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNwRixvQ0FBb0MsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxVQUFVLEVBQUU7SUFDL0Ysd0NBQXdDLElBQUksS0FBSyxHQUFHLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekcsd0NBQXdDLElBQUksT0FBTyxHQUFHLFdBQVcsS0FBSyxTQUFTLEVBQUUsR0FBRztJQUNwRiw0Q0FBNEMsSUFBSSxFQUFFLEtBQUs7SUFDdkQsNENBQTRDLEdBQUcsRUFBRSxHQUFHO0lBQ3BELHlDQUF5QyxHQUFHO0lBQzVDLDRDQUE0QyxJQUFJLEVBQUUsS0FBSztJQUN2RCw0Q0FBNEMsS0FBSyxFQUFFLEtBQUs7SUFDeEQseUNBQXlDLENBQUM7SUFDMUMsd0NBQXdDLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDcEUsNENBQTRDLElBQUksTUFBTSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RGLDRDQUE0QyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzlFLDRDQUE0QyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0RSw0Q0FBNEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQ3ZFLGdEQUFnRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekUsNkNBQTZDLEVBQUUsQ0FBQztJQUNoRCx5Q0FBeUM7SUFDekMsd0NBQXdDLE9BQU8sT0FBTyxDQUFDO0lBQ3ZELHFDQUFxQyxFQUFFLENBQUM7SUFDeEMsaUNBQWlDLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxFQUFFO0lBQy9GLG9DQUFvQyxPQUFPO0lBQzNDLHdDQUF3QyxHQUFHLEVBQUUsR0FBRztJQUNoRCx3Q0FBd0MsT0FBTyxFQUFFLE9BQU87SUFDeEQsd0NBQXdDLEdBQUcsRUFBRSxHQUFHO0lBQ2hELHdDQUF3QyxPQUFPLEVBQUUsUUFBUTtJQUN6RCx3Q0FBd0MsV0FBVyxFQUFFLFdBQVc7SUFDaEUsd0NBQXdDLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3ZFLHdDQUF3QyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQztJQUMxRix3Q0FBd0MsS0FBSyxFQUFFLFFBQVE7SUFDdkQsd0NBQXdDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxRQUFRLEVBQUU7SUFDM0csNENBQTRDLElBQUksRUFBRSxTQUFTO0lBQzNELDRDQUE0QyxLQUFLLEVBQUUsS0FBSztJQUN4RCw0Q0FBNEMsVUFBVSxFQUFFLFdBQVc7SUFDbkUsZ0RBQWdELE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0UsNkNBQTZDO0lBQzdDLDRDQUE0QyxNQUFNLEVBQUUsTUFBTTtJQUMxRCw0Q0FBNEMsT0FBTyxFQUFFLE9BQU87SUFDNUQsNENBQTRDLElBQUksRUFBRSxJQUFJO0lBQ3RELDRDQUE0QyxJQUFJLEVBQUUsSUFBSTtJQUN0RCx5Q0FBeUMsRUFBRTtJQUMzQyxxQ0FBcUMsQ0FBQztJQUN0QyxvQ0FBb0MsSUFBSSxHQUFHLENBQUM7SUFDNUMsaUNBQWlDLEVBQUUsQ0FBQztJQUNwQyw2QkFBNkIsQ0FBQztJQUM5QixnQ0FBZ0MsUUFBUSxFQUFFLENBQUMsS0FBSyxHQUFHO0lBQ25ELG9DQUFvQyxRQUFRLEVBQUUsUUFBUTtJQUN0RCxvQ0FBb0MsV0FBVyxFQUFFLFdBQVc7SUFDNUQsb0NBQW9DLE1BQU0sRUFBRSxNQUFNO0lBQ2xELG9DQUFvQyxNQUFNLEVBQUUsTUFBTTtJQUNsRCxvQ0FBb0MsT0FBTyxFQUFFLE9BQU87SUFDcEQsb0NBQW9DLEdBQUcsRUFBRSxHQUFHO0lBQzVDLGlDQUFpQyxFQUFFLFFBQVE7SUFDM0MsZ0NBQWdDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztJQUM5RCxnQ0FBZ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0lBQ3BELGdDQUFnQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDcEQsZ0NBQWdDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztJQUN0RCxnQ0FBZ0MsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO0lBQzlDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsWUFBWSxFQUFFO0lBQzVELGdDQUFnQyxPQUFPLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BILDZCQUE2QixFQUFFLENBQUM7SUFDaEMsNEJBQTRCLElBQUksS0FBSyxDQUFDO0lBQ3RDLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFNBQVMsVUFBVSxFQUFFO0lBQ2pHLDRCQUE0QixPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUU7SUFDdEQsZ0NBQWdDLFVBQVUsRUFBRSxVQUFVO0lBQ3RELDZCQUE2QixDQUFDLENBQUM7SUFDL0IseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsSUFBSSx5QkFBeUIsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRix3QkFBd0IsSUFBSSxzQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFDL0UsNEJBQTRCLGNBQWMsRUFBRSx3QkFBd0I7SUFDcEUsNEJBQTRCLFVBQVUsRUFBRSxnQkFBZ0I7SUFDeEQsNEJBQTRCLG1CQUFtQixFQUFFLHlCQUF5QjtJQUMxRSx5QkFBeUIsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLE1BQU0sRUFBRTtJQUNsRCw0QkFBNEIsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMxRSxnQ0FBZ0MsT0FBTyxFQUFFLE9BQU87SUFDaEQsZ0NBQWdDLEdBQUcsRUFBRSxHQUFHO0lBQ3hDLGdDQUFnQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7SUFDN0QsZ0NBQWdDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxtQkFBbUI7SUFDL0UsNkJBQTZCLENBQUMsQ0FBQztJQUMvQix5QkFBeUIsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLGNBQWMsRUFBRTtJQUMzRCw0QkFBNEIsT0FBTyxjQUFjLENBQUM7SUFDbEQseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3BFLDRCQUE0QixVQUFVLEVBQUUsc0JBQXNCO0lBQzlELDRCQUE0QixVQUFVLEVBQUUsZ0JBQWdCO0lBQ3hELDRCQUE0QixRQUFRLEVBQUUscUJBQXFCO0lBQzNELHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ2xELDRCQUE0QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzNELDRCQUE0QixPQUFPLFVBQVUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUN6RSxnQ0FBZ0MsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO0lBQzdELGdDQUFnQyxRQUFRLEVBQUUsUUFBUTtJQUNsRCxnQ0FBZ0MsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO0lBQzdELDZCQUE2QixDQUFDLENBQUM7SUFDL0IseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsSUFBSSxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFDN0UsNEJBQTRCLFFBQVEsRUFBRSxXQUFXO0lBQ2pELDRCQUE0QixtQkFBbUIsRUFBRSx5QkFBeUI7SUFDMUUseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDbEQsNEJBQTRCLE9BQU8sYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZHLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLEVBQUU7SUFDbkYsNEJBQTRCLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDdkQsNEJBQTRCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3pFLDRCQUE0QixpQkFBaUIsRUFBRSxvQkFBb0I7SUFDbkUsNEJBQTRCLEtBQUssRUFBRSxlQUFlO0lBQ2xELHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ2xELDRCQUE0QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDdkUsZ0NBQWdDLE9BQU8sRUFBRSxPQUFPO0lBQ2hELGdDQUFnQyxHQUFHLEVBQUUsR0FBRztJQUN4Qyw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksb0JBQW9CLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQzdFLDRCQUE0QixRQUFRLEVBQUUsV0FBVztJQUNqRCw0QkFBNEIsVUFBVSxFQUFFLHNCQUFzQjtJQUM5RCx5QkFBeUIsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLE1BQU0sRUFBRTtJQUNsRCw0QkFBNEIsSUFBSSxVQUFVLEVBQUUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUYseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsSUFBSSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3ZFLDRCQUE0QixRQUFRLEVBQUUsV0FBVztJQUNqRCw0QkFBNEIsUUFBUSxFQUFFLGVBQWU7SUFDckQsNEJBQTRCLFVBQVUsRUFBRSxvQkFBb0I7SUFDNUQsNEJBQTRCLFNBQVMsRUFBRSxnQkFBZ0I7SUFDdkQseUJBQXlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDbEQsNEJBQTRCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hGLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksb0JBQW9CLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLFFBQVEsRUFBRTtJQUN4Riw0QkFBNEIsQ0FBQyxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0lBQ3ZFLGdDQUFnQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxnQ0FBZ0MsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXO0lBQzNELG9DQUFvQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsaUNBQWlDLEVBQUUsQ0FBQztJQUNwQyxnQ0FBZ0MsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDeEYsb0NBQW9DLE9BQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9ELGlDQUFpQyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxFQUFFO0lBQzdELG9DQUFvQyxPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pLLGlDQUFpQyxFQUFFLENBQUM7SUFDcEMsNkJBQTZCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3pFLDRCQUE0QixTQUFTLEVBQUUsc0JBQXNCO0lBQzdELDRCQUE0QixTQUFTLEVBQUUsZ0JBQWdCO0lBQ3ZELHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDNUMsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUseUJBQXlCLEVBQUUsQ0FBQztJQUM1Qix3QkFBd0IsSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQzFGLHdCQUF3QixJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUNoRiw0QkFBNEIsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RSxnQ0FBZ0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxnQ0FBZ0MsSUFBSSxPQUFPLEVBQUUsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM5Siw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLElBQUksaUJBQWlCLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXO0lBQzdFLDRCQUE0QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsd0JBQXdCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3pELDRCQUE0QixXQUFXLEVBQUUsV0FBVztJQUNwRCw0QkFBNEIsZUFBZSxFQUFFLGVBQWU7SUFDNUQsNEJBQTRCLGVBQWUsRUFBRSxlQUFlO0lBQzVELDRCQUE0Qix3QkFBd0IsRUFBRSx3QkFBd0I7SUFDOUUsNEJBQTRCLGdCQUFnQixFQUFFLGdCQUFnQjtJQUM5RCw0QkFBNEIseUJBQXlCLEVBQUUseUJBQXlCO0lBQ2hGLDRCQUE0QixzQkFBc0IsRUFBRSxzQkFBc0I7SUFDMUUsNEJBQTRCLFdBQVcsRUFBRSxXQUFXO0lBQ3BELDRCQUE0QixvQkFBb0IsRUFBRSxvQkFBb0I7SUFDdEUsNEJBQTRCLGVBQWUsRUFBRSxlQUFlO0lBQzVELDRCQUE0QixnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDOUQsNEJBQTRCLGNBQWMsRUFBRSxjQUFjO0lBQzFELDRCQUE0QixzQkFBc0IsRUFBRSxzQkFBc0I7SUFDMUUsNEJBQTRCLG9CQUFvQixFQUFFLG9CQUFvQjtJQUN0RSw0QkFBNEIsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQ3RFLDRCQUE0QixnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDOUQsNEJBQTRCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNoRSw0QkFBNEIsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ2hFLDRCQUE0QixpQkFBaUIsRUFBRSxpQkFBaUI7SUFDaEUsNEJBQTRCLGVBQWUsRUFBRSxlQUFlO0lBQzVELDRCQUE0QixxQkFBcUIsRUFBRSxxQkFBcUI7SUFDeEUseUJBQXlCLENBQUMsQ0FBQztJQUMzQixxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUM3Qyx3QkFBd0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVztJQUN6Ryw0QkFBNEIsTUFBTSxHQUFHLENBQUM7SUFDdEMseUJBQXlCLElBQUksV0FBVztJQUN4Qyw0QkFBNEIsTUFBTSxHQUFHLENBQUM7SUFDdEMseUJBQXlCLEVBQUUsQ0FBQztJQUM1QixxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxpQkFBaUI7SUFDakIsZ0JBQWdCLE9BQU8sRUFBRSxPQUFPO0lBQ2hDLGdCQUFnQixRQUFRLEVBQUUsUUFBUTtJQUNsQyxnQkFBZ0IsVUFBVSxFQUFFLFVBQVU7SUFDdEMsZ0JBQWdCLG9CQUFvQixFQUFFLFdBQVc7SUFDakQsb0JBQW9CLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDaEUsd0JBQXdCLE9BQU87SUFDL0IsNEJBQTRCLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNoRSw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMsNEJBQTRCLElBQUksRUFBRSxJQUFJO0lBQ3RDLDRCQUE0QixlQUFlLEVBQUUsZUFBZTtJQUM1RCw0QkFBNEIsY0FBYyxFQUFFLGNBQWM7SUFDMUQsNEJBQTRCLGNBQWMsRUFBRSxjQUFjO0lBQzFELDRCQUE0QixTQUFTLEVBQUUsU0FBUztJQUNoRCw0QkFBNEIsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ2xFLDRCQUE0QixTQUFTLEVBQUUsU0FBUztJQUNoRCw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMsNEJBQTRCLGFBQWEsRUFBRSxhQUFhO0lBQ3hELDRCQUE0QixXQUFXLEVBQUUsV0FBVztJQUNwRCx5QkFBeUIsQ0FBQztJQUMxQixxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQjtJQUNqQixhQUFhLENBQUM7SUFDZCxTQUFTO0lBQ1QsUUFBUSxJQUFJLEtBQUssR0FBRztJQUNwQixZQUFZLFFBQVEsRUFBRSxTQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxRCxnQkFBZ0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqRSxnQkFBZ0IsT0FBTyxTQUFTLGdCQUFnQixFQUFFO0lBQ2xELG9CQUFvQixjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDN0Qsb0JBQW9CLFNBQVMsTUFBTSxHQUFHO0lBQ3RDLHdCQUF3QixPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQy9FLHFCQUFxQjtJQUNyQixvQkFBb0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsRCxvQkFBb0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXO0lBQy9DLHdCQUF3QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLHFCQUFxQixDQUFDO0lBQ3RCLG9CQUFvQixNQUFNLENBQUMsaUJBQWlCLEdBQUcsV0FBVztJQUMxRCx3QkFBd0IsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCx3QkFBd0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEUsd0JBQXdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCx3QkFBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0Qyw0QkFBNEIsTUFBTSxFQUFFLE1BQU07SUFDMUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQixxQkFBcUIsQ0FBQztJQUN0QixvQkFBb0IsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFdBQVc7SUFDM0Qsd0JBQXdCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RJLHFCQUFxQixDQUFDO0lBQ3RCLG9CQUFvQixPQUFPLE1BQU0sQ0FBQztJQUNsQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsYUFBYTtJQUNiLFNBQVMsQ0FBQztJQUNWLFFBQVEsSUFBSSxHQUFHLEdBQUc7SUFDbEIsWUFBWSxRQUFRLEVBQUUsU0FBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDekQsZ0JBQWdCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDMUMsb0JBQW9CLE1BQU0sRUFBRSxTQUFTLGFBQWEsRUFBRTtJQUNwRCx3QkFBd0IsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQscUJBQXFCO0lBQ3JCLG9CQUFvQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLG9CQUFvQixPQUFPLEVBQUUsV0FBVztJQUN4Qyx3QkFBd0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUMxQyx3QkFBd0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RSx3QkFBd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssRUFBRTtJQUMzQix3QkFBd0IsTUFBTSxFQUFFO0lBQ2hDLDRCQUE0QixPQUFPLEVBQUUsV0FBVztJQUNoRCxnQ0FBZ0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RJLDZCQUE2QjtJQUM3Qiw0QkFBNEIsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsYUFBYTtJQUNiLFNBQVMsQ0FBQztJQUNWLFFBQVEsSUFBSSxPQUFPLEdBQUc7SUFDdEIsWUFBWSxRQUFRLEVBQUUsU0FBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDeEQsZ0JBQWdCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBQzFGLG9CQUFvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxpQkFBaUIsRUFBRSxHQUFHLFdBQVc7SUFDakMsb0JBQW9CLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNuQyxvQkFBb0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNoSixvQkFBb0IsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDdEMsb0JBQW9CLE9BQU87SUFDM0Isd0JBQXdCLEtBQUssRUFBRSxLQUFLO0lBQ3BDLHdCQUF3QixRQUFRLEVBQUUsR0FBRztJQUNyQyx3QkFBd0IsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDdkYsNEJBQTRCLFNBQVMsU0FBUyxHQUFHO0lBQ2pELGdDQUFnQyxJQUFJLFFBQVEsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxTQUFTLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSTtJQUNqSCxvQ0FBb0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BELGlDQUFpQyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDaEQsNkJBQTZCO0lBQzdCLDRCQUE0QixJQUFJLFFBQVEsR0FBRyxXQUFXO0lBQ3RELGdDQUFnQyxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxFQUFFO0lBQ25GLG9DQUFvQyxPQUFPLFVBQVUsSUFBSSxPQUFPLElBQUksR0FBRyxXQUFXO0lBQ2xGLHdDQUF3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRix3Q0FBd0MsU0FBUyxFQUFFLENBQUM7SUFDcEQsd0NBQXdDLE9BQU8sTUFBTSxDQUFDO0lBQ3RELHFDQUFxQyxHQUFHLElBQUksQ0FBQztJQUM3QyxpQ0FBaUMsRUFBRSxDQUFDO0lBQ3BDLDZCQUE2QixDQUFDO0lBQzlCLDRCQUE0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1RCw0QkFBNEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLDRCQUE0QixNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVc7SUFDdEQsZ0NBQWdDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEYsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyx5QkFBeUIsRUFBRTtJQUMzQixxQkFBcUIsQ0FBQztJQUN0QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWE7SUFDYixTQUFTLENBQUM7SUFDVixRQUFRLElBQUksUUFBUSxHQUFHO0lBQ3ZCLFlBQVksUUFBUSxFQUFFLFNBQVMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFELGdCQUFnQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pHLGdCQUFnQixJQUFJLFFBQVEsR0FBRyxTQUFTLFNBQVMsRUFBRTtJQUNuRCxvQkFBb0IsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRTtJQUNqSCx3QkFBd0IsT0FBTyxVQUFVLElBQUksT0FBTyxJQUFJLEdBQUcsV0FBVztJQUN0RSw0QkFBNEIsSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDckUsNEJBQTRCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUNsRSxnQ0FBZ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRSw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLHlCQUF5QixHQUFHLElBQUksQ0FBQztJQUNqQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGlCQUFpQixDQUFDO0lBQ2xCLGdCQUFnQixJQUFJLGlCQUFpQixHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUM1RCxvQkFBb0IsUUFBUSxFQUFFLEdBQUc7SUFDakMsb0JBQW9CLFFBQVEsRUFBRSxhQUFhO0lBQzNDLG9CQUFvQixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUU7SUFDdkMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekIsb0JBQW9CLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxVQUFVLEVBQUUsSUFBSSxFQUFFO0lBQ2xGLHdCQUF3QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUN6Qyx3QkFBd0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDckQsd0JBQXdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLHFCQUFxQixFQUFFO0lBQ3ZCLG9CQUFvQixRQUFRLEVBQUUsV0FBVztJQUN6Qyx3QkFBd0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDMUUsd0JBQXdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELHdCQUF3QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLHFCQUFxQjtJQUNyQixvQkFBb0IsU0FBUyxFQUFFLFdBQVc7SUFDMUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNqRSw0QkFBNEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQzdDLDRCQUE0QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDaEYsZ0NBQWdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsNkJBQTZCO0lBQzdCLDRCQUE0QixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakYsNEJBQTRCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDcEQsNEJBQTRCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsNEJBQTRCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixnQkFBZ0IsT0FBTyxRQUFRLENBQUM7SUFDaEMsb0JBQW9CLFlBQVksRUFBRSxFQUFFLGlCQUFpQixFQUFFO0lBQ3ZELG9CQUFvQixPQUFPLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtJQUNsRCxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QixvQkFBb0IsV0FBVyxFQUFFLFdBQVcsRUFBRTtJQUM5QyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25CLGFBQWE7SUFDYixTQUFTLENBQUM7SUFDVixRQUFRLFNBQVMsd0JBQXdCLENBQUMsSUFBSSxFQUFFO0lBQ2hELFlBQVksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUNwUCxZQUFZLElBQUksS0FBSyxJQUFJLGNBQWMsRUFBRTtJQUN6QyxnQkFBZ0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxnQkFBZ0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsZ0JBQWdCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsZ0JBQWdCLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLGdCQUFnQixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLDBHQUEwRyxHQUFHLEtBQUssR0FBRyw2QkFBNkIsR0FBRyxNQUFNLEdBQUcsbUNBQW1DLEdBQUcsR0FBRyxHQUFHLGdTQUFnUyxHQUFHLEdBQUcsR0FBRyx5RkFBeUYsR0FBRyxHQUFHLEdBQUcsNEVBQTRFLENBQUMsQ0FBQyxDQUFDO0lBQ252QixnQkFBZ0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxnQkFBZ0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxnQkFBZ0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxnQkFBZ0IsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0QsZ0JBQWdCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXO0lBQ3JELG9CQUFvQixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRSxvQkFBb0IsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRSxvQkFBb0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxvQkFBb0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsb0JBQW9CLFVBQVUsRUFBRSxXQUFXO0lBQzNDLHdCQUF3QixjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkQscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3hELG9CQUFvQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pFLG9CQUFvQixRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkYsb0JBQW9CLFFBQVEsSUFBSSxPQUFPLFNBQVMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMxRixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixPQUFPLEdBQUcsQ0FBQztJQUMzQixhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVEsU0FBUyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7SUFDaEQsWUFBWSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25ELFlBQVksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsWUFBWSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELFlBQVksSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxZQUFZLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLFlBQVksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsWUFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLFlBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxZQUFZLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsWUFBWSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsKzVCQUErNUIsQ0FBQyxDQUFDLENBQUM7SUFDbjlCLFlBQVksT0FBTyxJQUFJLENBQUM7SUFDeEIsU0FBUztJQUNULFFBQVEsSUFBSSxpQkFBaUIsR0FBRyxXQUFXO0lBQzNDLFlBQVksT0FBTyxhQUFhLENBQUM7SUFDakMsU0FBUyxDQUFDO0lBQ1YsUUFBUSxJQUFJLGtCQUFrQixHQUFHLFNBQVMsSUFBSSxFQUFFO0lBQ2hELFlBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLFNBQVMsQ0FBQztJQUNWLFFBQVEsSUFBSSxjQUFjLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFDdkMsUUFBUSxJQUFJLFNBQVMsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxRQUFRLFNBQVMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQzNDLFlBQVksSUFBSSxPQUFPLEdBQUcsU0FBUyxPQUFPLEVBQUU7SUFDNUMsZ0JBQWdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLGNBQWMsR0FBRyxFQUFFLEdBQUcsY0FBYyxFQUFFLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxtQkFBbUIsRUFBRSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsbUJBQW1CLEVBQUUscUJBQXFCLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxLQUFLLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxxQkFBcUIsRUFBRSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsbUJBQW1CLEVBQUUscUJBQXFCLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLEdBQUcsS0FBSyxDQUFDLEtBQUsscUJBQXFCLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsRUFBRSxxQkFBcUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUsscUJBQXFCLEdBQUcsd0JBQXdCLEdBQUcscUJBQXFCLEVBQUUscUJBQXFCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLLHFCQUFxQixHQUFHLHdCQUF3QixHQUFHLHFCQUFxQixFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixHQUFHLFdBQVc7SUFDN3VDLG9CQUFvQixPQUFPO0lBQzNCLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHFCQUFxQixDQUFDO0lBQ3RCLGlCQUFpQixHQUFHLGlCQUFpQixFQUFFLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxlQUFlLEdBQUc7SUFDL0csb0JBQW9CLElBQUksRUFBRSxhQUFhO0lBQ3ZDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQztJQUNwQyxnQkFBZ0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsZ0JBQWdCLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssaUJBQWlCLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixFQUFFLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLGtCQUFrQixHQUFHLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUM1TyxnQkFBZ0IsUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUU7SUFDeEMsb0JBQW9CLE1BQU0sRUFBRTtJQUM1Qix3QkFBd0IsSUFBSSxFQUFFLFFBQVE7SUFDdEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekMsd0JBQXdCLFFBQVEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUNsRCw0QkFBNEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNwRCw0QkFBNEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDaEosNEJBQTRCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2pELGdDQUFnQyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0YsZ0NBQWdDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3ZHLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsd0JBQXdCLFFBQVEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUNsRCw0QkFBNEIsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0IsT0FBTyxFQUFFO0lBQzdCLHdCQUF3QixJQUFJLEVBQUUsUUFBUTtJQUN0Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2QyxxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssRUFBRTtJQUMzQix3QkFBd0IsSUFBSSxFQUFFLFVBQVU7SUFDeEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLGFBQWEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUN2RCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQy9DLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CLEtBQUssRUFBRTtJQUMzQix3QkFBd0IsSUFBSSxFQUFFLFVBQVU7SUFDeEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLGFBQWEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUN2RCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQy9DLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CLE1BQU0sRUFBRTtJQUM1Qix3QkFBd0IsSUFBSSxFQUFFLFVBQVU7SUFDeEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLGFBQWEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUN2RCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hELHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CLEdBQUcsRUFBRTtJQUN6Qix3QkFBd0IsSUFBSSxFQUFFLFFBQVE7SUFDdEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLGFBQWEsRUFBRSxTQUFTLEtBQUssRUFBRTtJQUN2RCw0QkFBNEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdDLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CLFFBQVEsRUFBRTtJQUM5Qix3QkFBd0IsSUFBSSxFQUFFLFFBQVE7SUFDdEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMscUJBQXFCO0lBQ3JCLG9CQUFvQixTQUFTLEVBQUU7SUFDL0Isd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDdkQsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuRCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQixlQUFlLEVBQUU7SUFDckMsd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDdkQsNEJBQTRCLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUN6RCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQixJQUFJLEVBQUU7SUFDMUIsd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDeEQsNEJBQTRCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQixJQUFJLEVBQUU7SUFDMUIsd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsU0FBUyxNQUFNLEVBQUU7SUFDeEQsNEJBQTRCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9CQUFvQixTQUFTLEVBQUU7SUFDL0Isd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLHdCQUF3QixPQUFPLEVBQUUsaUJBQWlCO0lBQ2xELHdCQUF3QixRQUFRLEVBQUUsa0JBQWtCO0lBQ3BELHFCQUFxQjtJQUNyQixvQkFBb0IsVUFBVSxFQUFFO0lBQ2hDLHdCQUF3QixJQUFJLEVBQUUsVUFBVTtJQUN4Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2Qyx3QkFBd0IsT0FBTyxFQUFFLGlCQUFpQjtJQUNsRCx3QkFBd0IsUUFBUSxFQUFFLGtCQUFrQjtJQUNwRCxxQkFBcUI7SUFDckIsb0JBQW9CLFFBQVEsRUFBRTtJQUM5Qix3QkFBd0IsSUFBSSxFQUFFLFVBQVU7SUFDeEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLE9BQU8sRUFBRSxpQkFBaUI7SUFDbEQsd0JBQXdCLFFBQVEsRUFBRSxrQkFBa0I7SUFDcEQscUJBQXFCO0lBQ3JCLG9CQUFvQixPQUFPLEVBQUU7SUFDN0Isd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLHdCQUF3QixPQUFPLEVBQUUsaUJBQWlCO0lBQ2xELHdCQUF3QixRQUFRLEVBQUUsa0JBQWtCO0lBQ3BELHFCQUFxQjtJQUNyQixvQkFBb0IsU0FBUyxFQUFFO0lBQy9CLHdCQUF3QixJQUFJLEVBQUUsVUFBVTtJQUN4Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2Qyx3QkFBd0IsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6Qyx3QkFBd0IsT0FBTyxFQUFFLGlCQUFpQjtJQUNsRCx3QkFBd0IsUUFBUSxFQUFFLGtCQUFrQjtJQUNwRCxxQkFBcUI7SUFDckIsb0JBQW9CLFFBQVEsRUFBRTtJQUM5Qix3QkFBd0IsSUFBSSxFQUFFLFVBQVU7SUFDeEMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEMsd0JBQXdCLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkMsd0JBQXdCLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekMsd0JBQXdCLE9BQU8sRUFBRSxpQkFBaUI7SUFDbEQscUJBQXFCO0lBQ3JCLG9CQUFvQixPQUFPLEVBQUU7SUFDN0Isd0JBQXdCLElBQUksRUFBRSxVQUFVO0lBQ3hDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLHdCQUF3QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLHdCQUF3QixhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLHdCQUF3QixPQUFPLEVBQUUsaUJBQWlCO0lBQ2xELHFCQUFxQjtJQUNyQixvQkFBb0IsT0FBTyxFQUFFO0lBQzdCLHdCQUF3QixJQUFJLEVBQUUsVUFBVTtJQUN4Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2Qyx3QkFBd0IsYUFBYSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ3hELDRCQUE0QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbEQseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0IsT0FBTyxFQUFFO0lBQzdCLHdCQUF3QixJQUFJLEVBQUUsVUFBVTtJQUN4Qyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwQyx3QkFBd0IsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2Qyx3QkFBd0IsT0FBTyxFQUFFLGlCQUFpQjtJQUNsRCx3QkFBd0IsYUFBYSxFQUFFLFNBQVMsTUFBTSxFQUFFO0lBQ3hELDRCQUE0QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbEQseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixnQkFBZ0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUN2RixnQkFBZ0IsT0FBTztJQUN2QixvQkFBb0IsSUFBSSxFQUFFLElBQUk7SUFDOUIsb0JBQW9CLEdBQUcsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixHQUFHLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsb0JBQW9CLFNBQVMsRUFBRSxTQUFTO0lBQ3hDLG9CQUFvQixRQUFRLEVBQUUsUUFBUTtJQUN0QyxvQkFBb0IsVUFBVSxFQUFFO0lBQ2hDLHdCQUF3QixLQUFLLEVBQUUsS0FBSztJQUNwQyx3QkFBd0IsTUFBTSxFQUFFLE1BQU07SUFDdEMscUJBQXFCO0lBQ3JCLG9CQUFvQixVQUFVLEVBQUUsVUFBVTtJQUMxQyxvQkFBb0Isb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzlELG9CQUFvQixVQUFVLEVBQUUsVUFBVTtJQUMxQyxvQkFBb0IsY0FBYyxFQUFFLGNBQWM7SUFDbEQsb0JBQW9CLGlCQUFpQixFQUFFLGlCQUFpQjtJQUN4RCxvQkFBb0IsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ3hELG9CQUFvQixRQUFRLEVBQUUsUUFBUTtJQUN0QyxvQkFBb0IsTUFBTSxFQUFFLE1BQU07SUFDbEMsb0JBQW9CLFFBQVEsRUFBRSxRQUFRO0lBQ3RDLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixZQUFZLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDMUosWUFBWSxJQUFJLE1BQU0sR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hELFlBQVksSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLFlBQVksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQy9CLFlBQVksSUFBSSxPQUFPLEdBQUcsV0FBVztJQUNyQyxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDaEQsZ0JBQWdCLE9BQU8sT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdEcsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLGFBQWEsR0FBRyxPQUFPLEVBQUUsV0FBVztJQUNwRCxnQkFBZ0IsSUFBSSxPQUFPLEVBQUUsRUFBRTtJQUMvQixvQkFBb0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3ZDLHdCQUF3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsd0JBQXdCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxHQUFHLHNDQUFzQyxDQUFDLENBQUM7SUFDN0cscUJBQXFCO0lBQ3JCLG9CQUFvQixJQUFJLEtBQUssR0FBRyxTQUFTLE9BQU8sRUFBRTtJQUNsRCx3QkFBd0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUM7SUFDOUksd0JBQXdCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUNoRCx3QkFBd0IsSUFBSSxZQUFZLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDN0Qsd0JBQXdCLElBQUksS0FBSyxDQUFDO0lBQ2xDLHdCQUF3QixJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRix3QkFBd0IsSUFBSSxRQUFRLEtBQUssWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxHQUFHLFlBQVksQ0FBQyxPQUFPLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztJQUMvSyx3QkFBd0IsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUM1TCx3QkFBd0IsSUFBSSxxQkFBcUIsR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUNsRSw0QkFBNEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNoRCw0QkFBNEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLE9BQU8sWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRyw0QkFBNEIsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUNySSxnQ0FBZ0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxnQ0FBZ0MsT0FBTyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDeEQsb0NBQW9DLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsb0NBQW9DLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxvQ0FBb0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNoRSx3Q0FBd0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPO0lBQzVELHdDQUF3QyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLHFDQUFxQztJQUNyQyxvQ0FBb0MsT0FBTyxNQUFNLENBQUM7SUFDbEQsaUNBQWlDLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCw0QkFBNEIsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUM1RixnQ0FBZ0MsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNsRCxnQ0FBZ0MsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLGdDQUFnQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvRixnQ0FBZ0MsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsc0JBQXNCLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2SixvQ0FBb0MsSUFBSSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUUsb0NBQW9DLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzdELHdDQUF3QyxJQUFJLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRix3Q0FBd0MsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4SCxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3Qiw0QkFBNEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsQ0FBQztJQUNuRyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0Msd0JBQXdCLElBQUksTUFBTSxHQUFHLHdCQUF3QixDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1Ryx3QkFBd0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6Rix3QkFBd0IsSUFBSSxTQUFTLEdBQUcsV0FBVztJQUNuRCw0QkFBNEIsT0FBTyxxQkFBcUIsQ0FBQztJQUN6RCx5QkFBeUIsQ0FBQztJQUMxQix3QkFBd0IsSUFBSSxlQUFlLEdBQUcsV0FBVztJQUN6RCw0QkFBNEIsT0FBTyxZQUFZLENBQUM7SUFDaEQseUJBQXlCLENBQUM7SUFDMUIsd0JBQXdCLElBQUksT0FBTyxHQUFHLFNBQVMsT0FBTyxFQUFFO0lBQ3hELDRCQUE0QixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELHlCQUF5QixDQUFDO0lBQzFCLHdCQUF3QixJQUFJLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUNwRCw0QkFBNEIsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RSxnQ0FBZ0MsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekYsZ0NBQWdDLE1BQU0sR0FBRyxDQUFDO0lBQzFDLDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCLENBQUM7SUFDMUIsd0JBQXdCLElBQUksTUFBTSxHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ3JELDRCQUE0QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQy9ELGdDQUFnQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7SUFDbEQsZ0NBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtJQUNwRCw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9CLHlCQUF5QixDQUFDO0lBQzFCLHdCQUF3QixJQUFJLFFBQVEsR0FBRyxTQUFTLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQzVFLDRCQUE0QixLQUFLLENBQUMsS0FBSyxRQUFRLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsNEJBQTRCLElBQUksZUFBZSxHQUFHLFNBQVMscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtJQUM5SCxnQ0FBZ0MsS0FBSyxDQUFDLEtBQUssUUFBUSxLQUFLLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLGdDQUFnQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEQsZ0NBQWdDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pILG9DQUFvQyxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakUsb0NBQW9DLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxvQ0FBb0MsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMscUJBQXFCLENBQUMsRUFBRTtJQUMxSSx3Q0FBd0MsSUFBSSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlHLHdDQUF3QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzVELHdDQUF3QyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsSCxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLGdDQUFnQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNJLG9DQUFvQyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsb0NBQW9DLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUksaUNBQWlDO0lBQ2pDLGdDQUFnQyxPQUFPLE1BQU0sQ0FBQztJQUM5Qyw2QkFBNkIsQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUNqRixnQ0FBZ0MsSUFBSSxFQUFFLElBQUk7SUFDMUMsZ0NBQWdDLElBQUksRUFBRSxJQUFJO0lBQzFDLGdDQUFnQyxLQUFLLEVBQUUsS0FBSztJQUM1QyxnQ0FBZ0MsS0FBSyxFQUFFLFdBQVc7SUFDbEQsZ0NBQWdDLE9BQU8sRUFBRSxPQUFPO0lBQ2hELGdDQUFnQyxNQUFNLEVBQUUsTUFBTTtJQUM5QyxnQ0FBZ0MsT0FBTyxFQUFFLE9BQU87SUFDaEQsZ0NBQWdDLFNBQVMsRUFBRSxTQUFTO0lBQ3BELGdDQUFnQyxlQUFlLEVBQUUsZUFBZTtJQUNoRSxnQ0FBZ0MsR0FBRyxFQUFFLEdBQUc7SUFDeEMsNkJBQTZCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekMsNEJBQTRCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxHQUFHLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDN0YsNEJBQTRCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xILHlCQUF5QixDQUFDO0lBQzFCLHdCQUF3QixJQUFJLFdBQVcsR0FBRyxTQUFTLFFBQVEsRUFBRTtJQUM3RCw0QkFBNEIsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUN4RSxnQ0FBZ0MsT0FBTyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCLENBQUM7SUFDMUIsd0JBQXdCLE9BQU87SUFDL0IsNEJBQTRCLElBQUksRUFBRSxXQUFXO0lBQzdDLGdDQUFnQyxPQUFPLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQzVFLG9DQUFvQyxDQUFDLFNBQVMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFO0lBQzVFLHdDQUF3QyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEoscUNBQXFDLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUUsb0NBQW9DLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNFLG9DQUFvQyxDQUFDLFdBQVc7SUFDaEQsd0NBQXdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsV0FBVztJQUM1Riw0Q0FBNEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5RSx5Q0FBeUMsRUFBRSxDQUFDO0lBQzVDLHdDQUF3QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFdBQVc7SUFDdEYsNENBQTRDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUUseUNBQXlDLEVBQUUsQ0FBQztJQUM1Qyx3Q0FBd0MsYUFBYSxDQUFDLHFCQUFxQixHQUFHLFdBQVc7SUFDekYsNENBQTRDLGFBQWEsRUFBRSxDQUFDO0lBQzVELHlDQUF5QyxFQUFFLENBQUM7SUFDNUMscUNBQXFDLEVBQUUsQ0FBQztJQUN4QyxvQ0FBb0MsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZELHdDQUF3QyxXQUFXLEVBQUUsV0FBVztJQUNoRSx3Q0FBd0MsS0FBSyxFQUFFLGFBQWE7SUFDNUQscUNBQXFDLENBQUMsQ0FBQztJQUN2QyxpQ0FBaUMsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3JELG9DQUFvQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssaUJBQWlCLElBQUksaUJBQWlCO0lBQzNJLG9DQUFvQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxrQkFBa0IsSUFBSSxrQkFBa0I7SUFDeEksb0NBQW9DLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxPQUFPLEVBQUU7SUFDdk0sd0NBQXdDLE9BQU87SUFDL0MsNENBQTRDLEtBQUssRUFBRSxLQUFLO0lBQ3hELDRDQUE0QyxNQUFNLEVBQUUsTUFBTTtJQUMxRCw0Q0FBNEMsT0FBTyxFQUFFLE9BQU87SUFDNUQseUNBQXlDLENBQUM7SUFDMUMscUNBQXFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxLQUFLLEVBQUU7SUFDL0Qsd0NBQXdDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDaEgsd0NBQXdDLE9BQU8sS0FBSyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN4SSw0Q0FBNEMsTUFBTSxDQUFDO0lBQ25ELGdEQUFnRCxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ25GLGdEQUFnRCxNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RGLDZDQUE2QyxDQUFDLENBQUM7SUFDL0MseUNBQXlDLEdBQUc7SUFDNUMsNENBQTRDLEtBQUssRUFBRSxLQUFLO0lBQ3hELDRDQUE0QyxNQUFNLEVBQUUsTUFBTTtJQUMxRCx5Q0FBeUMsQ0FBQyxDQUFDO0lBQzNDLHFDQUFxQyxFQUFFLENBQUM7SUFDeEMsb0NBQW9DLElBQUksaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQztJQUNsSCxpQ0FBaUMsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUN6RCxvQ0FBb0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELGlDQUFpQyxFQUFFLENBQUM7SUFDcEMsNkJBQTZCO0lBQzdCLDRCQUE0QixRQUFRLEVBQUUsV0FBVztJQUNqRCxnQ0FBZ0MsSUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDeEQsZ0NBQWdDLFFBQVEsQ0FBQyxTQUFTLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDdkYsb0NBQW9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekUsb0NBQW9DLElBQUksS0FBSyxDQUFDO0lBQzlDLG9DQUFvQyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7SUFDckcsd0NBQXdDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxHQUFHLFNBQVMsRUFBRSxHQUFHLDJCQUEyQixDQUFDLENBQUM7SUFDOU0sd0NBQXdDLElBQUksTUFBTSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakcsd0NBQXdDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkcscUNBQXFDO0lBQ3JDLG9DQUFvQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4RixvQ0FBb0MsT0FBTyx3QkFBd0IsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUcsaUNBQWlDLENBQUMscUJBQXFCLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2hHLGdDQUFnQyxPQUFPLEtBQUssQ0FBQztJQUM3Qyw2QkFBNkI7SUFDN0IseUJBQXlCLENBQUM7SUFDMUIscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0Isb0JBQW9CLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxvQkFBb0IsT0FBTyxLQUFLLENBQUM7SUFDakMsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksSUFBSSxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQzVDLGdCQUFnQixJQUFJLFFBQVEsQ0FBQztJQUM3QixnQkFBZ0IsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3pDLG9CQUFvQixLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzlDLGlCQUFpQixDQUFDLEVBQUUsV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDaEYsZ0JBQWdCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDaEQsZ0JBQWdCLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVztJQUM3QyxvQkFBb0IsUUFBUSxJQUFJLFdBQVcsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEcsb0JBQW9CLElBQUksU0FBUyxFQUFFLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM3RSxpQkFBaUIsQ0FBQztJQUNsQixnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELGdCQUFnQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsZ0JBQWdCLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVGLGdCQUFnQixjQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsR0FBRyxFQUFFO0lBQ3ZELG9CQUFvQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDdEYsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsU0FBUyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUNuRSxvQkFBb0IsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVztJQUNoRSx3QkFBd0IsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUMxQyw0QkFBNEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9GLDRCQUE0QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLFdBQVc7SUFDeEUsZ0NBQWdDLE1BQU0sR0FBRyxDQUFDO0lBQzFDLDZCQUE2QixFQUFFLENBQUM7SUFDaEMseUJBQXlCO0lBQ3pCLHdCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMvRix3QkFBd0IsT0FBTyxTQUFTLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDeEQsNEJBQTRCLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVc7SUFDeEUsZ0NBQWdDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyRyxnQ0FBZ0MsSUFBSSxPQUFPLEVBQUU7SUFDN0Msb0NBQW9DLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNySixvQ0FBb0MsT0FBTyxPQUFPLENBQUM7SUFDbkQsaUNBQWlDO0lBQ2pDLGdDQUFnQyxPQUFPLGNBQWMsQ0FBQztJQUN0RCw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLFlBQVksRUFBRTtJQUNyRCx3QkFBd0IsU0FBUyxHQUFHLFNBQVMsT0FBTyxFQUFFLFNBQVMsRUFBRTtJQUNqRSw0QkFBNEIsSUFBSSxTQUFTLEVBQUU7SUFDM0MsZ0NBQWdDLElBQUksUUFBUSxJQUFJLE9BQU8sU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUNuSyxnQ0FBZ0MsT0FBTyxTQUFTLENBQUM7SUFDakQsNkJBQTZCO0lBQzdCLDRCQUE0QixJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sTUFBTSxDQUFDO0lBQ3pFLDRCQUE0QixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDOUYseUJBQXlCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELHdCQUF3QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RSxxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUM3Qyx3QkFBd0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXO0lBQ3BFLDRCQUE0QixNQUFNLEdBQUcsQ0FBQztJQUN0Qyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsaUJBQWlCLENBQUM7SUFDbEIsZ0JBQWdCLFFBQVEsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRTtJQUM3RCxvQkFBb0IsVUFBVSxFQUFFLFdBQVc7SUFDM0Msd0JBQXdCLE9BQU8sV0FBVyxDQUFDO0lBQzNDLHFCQUFxQjtJQUNyQixvQkFBb0IsS0FBSyxFQUFFLFNBQVMsS0FBSyxFQUFFO0lBQzNDLHdCQUF3QixJQUFJLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQztJQUN0Rix3QkFBd0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxjQUFjLEdBQUcsUUFBUSxHQUFHLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLHFCQUFxQjtJQUNyQixvQkFBb0IsTUFBTSxFQUFFLFNBQVMsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUN6RCx3QkFBd0IsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxxQkFBcUI7SUFDckIsb0JBQW9CLFFBQVEsRUFBRSxTQUFTLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQ25FLHdCQUF3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLHFCQUFxQjtJQUNyQixpQkFBaUIsQ0FBQyxDQUFDO0lBQ25CLGdCQUFnQixXQUFXLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxnQkFBZ0IsT0FBTyxRQUFRLENBQUM7SUFDaEMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxhQUFhLEVBQUUsQ0FBQztJQUM1QixZQUFZLENBQUMsV0FBVztJQUN4QixnQkFBZ0IsSUFBSSxxQkFBcUIsR0FBRyxLQUFLLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxHQUFHLFdBQVc7SUFDN0Ysb0JBQW9CLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixnQkFBZ0IsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLFNBQVMsSUFBSSxFQUFFO0lBQ3RGLG9CQUFvQixPQUFPO0lBQzNCLHdCQUF3QixNQUFNLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFGLHFCQUFxQixDQUFDO0lBQ3RCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsZ0JBQWdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsYUFBYSxFQUFFLENBQUM7SUFDaEIsWUFBWSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3hELFlBQVksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUgsWUFBWSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLFlBQVksT0FBTztJQUNuQixnQkFBZ0IsSUFBSSxFQUFFLElBQUk7SUFDMUIsZ0JBQWdCLFNBQVMsRUFBRSxTQUFTO0lBQ3BDLGdCQUFnQixNQUFNLEVBQUUsU0FBUyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBQ2xELG9CQUFvQixJQUFJLE9BQU8sR0FBRztJQUNsQyx3QkFBd0IsS0FBSyxFQUFFLEtBQUs7SUFDcEMsd0JBQXdCLE9BQU8sRUFBRSxPQUFPO0lBQ3hDLHdCQUF3QixHQUFHLEVBQUUsR0FBRztJQUNoQyx3QkFBd0IsUUFBUSxFQUFFLFFBQVE7SUFDMUMscUJBQXFCLENBQUM7SUFDdEIsb0JBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNwSCxvQkFBb0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEksb0JBQW9CLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELGlCQUFpQjtJQUNqQixnQkFBZ0IsT0FBTyxFQUFFLE9BQU87SUFDaEMsZ0JBQWdCLFdBQVcsRUFBRSxTQUFTLEdBQUcsRUFBRTtJQUMzQyxvQkFBb0IsT0FBTyxTQUFTLENBQUMsR0FBRyxFQUFFLHNCQUFzQixHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssRUFBRTtJQUMvRix3QkFBd0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVc7SUFDMUMsd0JBQXdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCLGFBQWEsRUFBRSxhQUFhO0lBQzVDLGFBQWEsQ0FBQztJQUNkLFNBQVM7SUFDVCxRQUFRLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUNqQyxZQUFZLENBQUMsV0FBVztJQUN4QixnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsV0FBVyxFQUFFO0lBQ3JELG9CQUFvQixnQkFBZ0IsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxvQkFBb0IsRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHO0lBQ2xDLHdCQUF3QixFQUFFLEVBQUUsS0FBSztJQUNqQyx3QkFBd0IsSUFBSSxFQUFFLFNBQVM7SUFDdkMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksU0FBUyxPQUFPLEVBQUU7SUFDeEksd0JBQXdCLE9BQU8sc0JBQXNCLENBQUMsT0FBTyxFQUFFO0lBQy9ELDRCQUE0QixFQUFFLEVBQUUsRUFBRTtJQUNsQyw0QkFBNEIsSUFBSSxFQUFFLElBQUk7SUFDdEMseUJBQXlCLENBQUMsQ0FBQztJQUMzQixxQkFBcUIsQ0FBQztJQUN0QixvQkFBb0IsQ0FBQyxTQUFTLEtBQUssRUFBRTtJQUNyQyx3QkFBd0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM3RCx3QkFBd0IsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixHQUFHLFdBQVc7SUFDbEYsNEJBQTRCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN4RixnQ0FBZ0MsQ0FBQyxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDeEQsb0NBQW9DLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekUsb0NBQW9DLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxXQUFXO0lBQ3pFLHdDQUF3QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDekYsd0NBQXdDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2SCx3Q0FBd0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5RCx3Q0FBd0MsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDbEYsd0NBQXdDLElBQUksTUFBTSxFQUFFO0lBQ3BELDRDQUE0QyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUNwSCw0Q0FBNEMsc0JBQXNCLENBQUM7SUFDbkUsZ0RBQWdELE1BQU0sRUFBRSxNQUFNO0lBQzlELGdEQUFnRCxNQUFNLEVBQUUsTUFBTTtJQUM5RCxnREFBZ0QsSUFBSSxFQUFFLElBQUk7SUFDMUQsNkNBQTZDLEVBQUU7SUFDL0MsZ0RBQWdELEVBQUUsRUFBRSxFQUFFO0lBQ3RELGdEQUFnRCxJQUFJLEVBQUUsSUFBSTtJQUMxRCw2Q0FBNkMsQ0FBQyxDQUFDO0lBQy9DLHlDQUF5QztJQUN6QyxxQ0FBcUMsRUFBRSxDQUFDO0lBQ3hDLGlDQUFpQyxDQUFDLEtBQUssRUFBRTtJQUN6QyxvQ0FBb0MsRUFBRSxFQUFFLEVBQUU7SUFDMUMsb0NBQW9DLElBQUksRUFBRSxJQUFJO0lBQzlDLGlDQUFpQyxDQUFDLENBQUM7SUFDbkMsNkJBQTZCLEVBQUUsQ0FBQztJQUNoQyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHFCQUFxQixDQUFDO0lBQ3RCLHdCQUF3QixFQUFFLEVBQUUsS0FBSztJQUNqQyx3QkFBd0IsSUFBSSxFQUFFLFNBQVM7SUFDdkMscUJBQXFCLENBQUMsQ0FBQztJQUN2QixvQkFBb0IsQ0FBQyxTQUFTLEtBQUssRUFBRTtJQUNyQyx3QkFBd0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM3RCx3QkFBd0IsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxXQUFXO0lBQzlGLDRCQUE0QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7SUFDakUsZ0NBQWdDLE1BQU0sRUFBRSxHQUFHO0lBQzNDLDZCQUE2QixHQUFHLFNBQVMsS0FBSyxFQUFFO0lBQ2hELGdDQUFnQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0lBQ2xFLG9DQUFvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDeEQsaUNBQWlDLENBQUMsQ0FBQztJQUNuQyxnQ0FBZ0MsT0FBTztJQUN2QyxvQ0FBb0MsVUFBVSxFQUFFLGFBQWEsRUFBRTtJQUMvRCxpQ0FBaUMsQ0FBQztJQUNsQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ2hDLDRCQUE0QixJQUFJLE1BQU0sR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUN2RCw0QkFBNEIsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFDdkQsZ0NBQWdDLElBQUksRUFBRSxJQUFJO0lBQzFDLDZCQUE2QixDQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3pELDRCQUE0QixPQUFPLFFBQVEsQ0FBQztJQUM1Qyx5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLHFCQUFxQixDQUFDO0lBQ3RCLHdCQUF3QixFQUFFLEVBQUUsS0FBSztJQUNqQyx3QkFBd0IsSUFBSSxFQUFFLFNBQVM7SUFDdkMscUJBQXFCLENBQUMsQ0FBQztJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCLElBQUksS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0lBQzVDLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksSUFBSSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsWUFBWSxJQUFJLElBQUksR0FBRyxTQUFTLEtBQUssRUFBRTtJQUN2QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDOUMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUMsYUFBYSxDQUFDO0lBQ2QsWUFBWSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVc7SUFDdEMsZ0JBQWdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLEdBQUcsRUFBRTtJQUM3QyxnQkFBZ0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLGFBQWEsQ0FBQztJQUNkLFlBQVksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVDLFlBQVksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLFlBQVksS0FBSyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RSxZQUFZLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLFNBQVM7SUFDVCxRQUFRLFNBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0lBQ3hDLFlBQVksSUFBSSxjQUFjLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxZQUFZLGNBQWMsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxZQUFZLE9BQU8sY0FBYyxDQUFDO0lBQ2xDLFNBQVM7SUFDVCxRQUFRLElBQUksVUFBVSxHQUFHLGlCQUFpQixDQUFDO0lBQzNDLFFBQVEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7SUFDeEMsWUFBWSxVQUFVLEVBQUUsQ0FBQztJQUN6QixZQUFZLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMxQyxZQUFZLENBQUMsV0FBVztJQUN4QixnQkFBZ0IsQ0FBQyxXQUFXO0lBQzVCLG9CQUFvQixJQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdFLG9CQUFvQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxzQkFBc0IsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JJLHdCQUF3QixJQUFJLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvRCx3QkFBd0IsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLHdCQUF3QixRQUFRLEtBQUssUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELHdCQUF3QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzRixnQkFBZ0IsSUFBSSxRQUFRLENBQUM7SUFDN0IsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JELGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFlBQVksT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLFNBQVM7SUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
