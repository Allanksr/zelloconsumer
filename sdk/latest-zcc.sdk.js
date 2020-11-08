! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Sdk = e() : (t.ZCC = t.ZCC || {}, t.ZCC.Sdk = e())
}(window, function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 44)
    }([function(t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function u() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : u
            } catch (t) {
                r = u
            }
        }();
        var a, s = [],
            f = !1,
            l = -1;

        function p() {
            f && a && (f = !1, a.length ? s = a.concat(s) : l = -1, s.length && d())
        }

        function d() {
            if (!f) {
                var t = c(p);
                f = !0;
                for (var e = s.length; e;) {
                    for (a = s, s = []; ++l < e;) a && a[l].run();
                    l = -1, e = s.length
                }
                a = null, f = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function y(t, e) {
            this.fun = t, this.array = e
        }

        function h() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new y(t, e)), 1 !== s.length || f || c(d)
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            ERROR_NOT_ENOUGH_PARAMS: "Not enough parameters",
            ERROR_INVALID_SERVER_PROTOCOL: "Invalid server protocol, use ws:// or wss://",
            ERROR_UNSUPPORTED: "Your browser does not support all required APIs.\nRead more here https://github.com/zelloptt/zello-channel-api",
            ERROR_RECORDING_NO_HTTPS: "Recording will work over https:// loaded pages only",
            ERROR_WIDGET_ELEMENT_NOT_FOUND: "DOM element for widget is not found",
            ERROR_INVALID_DECODER: "Invalid incoming message decoder. Should implement ZCC.Decoder interface",
            ERROR_INVALID_PLAYER: "Invalid incoming message player. Should implement ZCC.Player interface",
            ERROR_INVALID_RECORDER: "Invalid outgoing message recorder. Should implement ZCC.Recorder interface",
            ERROR_INVALID_ENCODER: "Invalid outgoing message encoder. Should implement ZCC.Encoder interface",
            ERROR_SESSION_FAIL_CONNECT: "Failed to connect",
            ERROR_INVALID_IMAGE_WIDTH_OR_HEIGHT: "Invalid image width or height",
            ERROR_FAILED_TO_SEND_IMAGE: "Failed to send image",
            ERROR_IMAGE_NOT_READY_TO_BE_SENT: "Image is not ready to be sent",
            ERROR_NO_CAMERA_AVAILABLE: "No camera available",
            ERROR_TYPE_UNKNOWN_SERVER_ERROR: "Unknown server error",
            ERROR_TYPE_CONFIGURATION: "configuration",
            EVENT_ERROR: "error",
            EVENT_CONNECT: "connect",
            EVENT_CLOSE: "close",
            EVENT_LOGON: "logon",
            EVENT_STATUS: "status",
            EVENT_START_STREAM: "start_stream",
            EVENT_STOP_STREAM: "stop_stream",
            EVENT_SESSION_START_CONNECT: "session_start_connect",
            EVENT_SESSION_CONNECT: "session_connect",
            EVENT_SESSION_FAIL_CONNECT: "session_fail_connect",
            EVENT_SESSION_CONNECTION_LOST: "session_connection_lost",
            EVENT_SESSION_DISCONNECT: "session_disconnect",
            EVENT_INCOMING_VOICE_WILL_START: "incoming_voice_will_start",
            EVENT_INCOMING_VOICE_DID_START: "incoming_voice_did_start",
            EVENT_INCOMING_VOICE_DID_STOP: "incoming_voice_did_stop",
            EVENT_INCOMING_VOICE_DATA: "incoming_voice_data",
            EVENT_INCOMING_VOICE_DATA_DECODED: "incoming_voice_data_decoded",
            EVENT_INCOMING_IMAGE_DATA: "incoming_image_data",
            EVENT_DATA: "data",
            EVENT_DATA_ENCODED: "data_encoded",
            EVENT_RECORDER_READY: "recorder_ready",
            EVENT_WIDGET_OPEN_BUTTON_CLICK: "widget_open_button_click",
            EVENT_WIDGET_MUTE: "widget_mute",
            EVENT_WIDGET_UNMUTE: "widget_unmute",
            EVENT_WIDGET_SPEAKING_USERNAME_CLICK: "speaking_username_click",
            EVENT_INCOMING_TEXT_MESSAGE: "incoming_text_message",
            EVENT_INCOMING_LOCATION: "incoming_location",
            EVENT_INCOMING_IMAGE: "incoming_image",
            EVENT_IMAGE_DATA: "image_data",
            EVENT_THUMBNAIL_DATA: "thumbnail_data",
            EVENT_IMAGE_PREVIEW_DATA: "image_preview_data",
            EVENT_THUMBNAIL_PREVIEW_DATA: "thumbnail_preview_data",
            MAX_OUTGOING_IMAGE_SCALE_PX: 1280,
            OUTGOING_IMAGE_THUMBNAIL_SCALE_PX: 90,
            SN_STATUS_SUCCESS: "success",
            SN_STATUS_ONLINE: "online",
            SN_STATUS_OFFLINE: "offline",
            MESSAGE_TYPE_AUDIO: 1,
            MESSAGE_TYPE_IMAGE: 2,
            MESSAGE_TYPE_JSON: 123,
            IMAGE_TYPE_FULL: 1,
            IMAGE_TYPE_THUMBNAIL: 2
        }
    }, , , function(t, e) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(t, e) {
            t.super_ = e;
            var n = function() {};
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    }, function(t, e, n) {
        (function(t, r) {
            var o = /%[sdj%]/g;
            e.format = function(t) {
                if (!m(t)) {
                    for (var e = [], n = 0; n < arguments.length; n++) e.push(c(arguments[n]));
                    return e.join(" ")
                }
                n = 1;
                for (var r = arguments, i = r.length, u = String(t).replace(o, function(t) {
                        if ("%%" === t) return "%";
                        if (n >= i) return t;
                        switch (t) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                                default:
                                    return t
                        }
                    }), a = r[n]; n < i; a = r[++n]) h(a) || !_(a) ? u += " " + a : u += " " + c(a);
                return u
            }, e.deprecate = function(n, o) {
                if (g(t.process)) return function() {
                    return e.deprecate(n, o).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return n;
                var i = !1;
                return function() {
                    if (!i) {
                        if (r.throwDeprecation) throw new Error(o);
                        r.traceDeprecation ? console.trace(o) : console.error(o), i = !0
                    }
                    return n.apply(this, arguments)
                }
            };
            var i, u = {};

            function c(t, n) {
                var r = {
                    seen: [],
                    stylize: s
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), y(n) ? r.showHidden = n : n && e._extend(r, n), g(r.showHidden) && (r.showHidden = !1), g(r.depth) && (r.depth = 2), g(r.colors) && (r.colors = !1), g(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = a), f(r, t, r.depth)
            }

            function a(t, e) {
                var n = c.styles[e];
                return n ? "[" + c.colors[n][0] + "m" + t + "[" + c.colors[n][1] + "m" : t
            }

            function s(t, e) {
                return t
            }

            function f(t, n, r) {
                if (t.customInspect && n && w(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var o = n.inspect(r, t);
                    return m(o) || (o = f(t, o, r)), o
                }
                var i = function(t, e) {
                    if (g(e)) return t.stylize("undefined", "undefined");
                    if (m(e)) {
                        var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return t.stylize(n, "string")
                    }
                    return v(e) ? t.stylize("" + e, "number") : y(e) ? t.stylize("" + e, "boolean") : h(e) ? t.stylize("null", "null") : void 0
                }(t, n);
                if (i) return i;
                var u = Object.keys(n),
                    c = function(t) {
                        var e = {};
                        return u.forEach(function(t, n) {
                            e[t] = !0
                        }), e
                    }();
                if (t.showHidden && (u = Object.getOwnPropertyNames(n)), O(n) && (u.indexOf("message") >= 0 || u.indexOf("description") >= 0)) return l(n);
                if (0 === u.length) {
                    if (w(n)) {
                        var a = n.name ? ": " + n.name : "";
                        return t.stylize("[Function" + a + "]", "special")
                    }
                    if (E(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (T(n)) return t.stylize(Date.prototype.toString.call(n), "date");
                    if (O(n)) return l(n)
                }
                var s, _ = "",
                    b = !1,
                    N = ["{", "}"];
                return d(n) && (b = !0, N = ["[", "]"]), w(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), E(n) && (_ = " " + RegExp.prototype.toString.call(n)), T(n) && (_ = " " + Date.prototype.toUTCString.call(n)), O(n) && (_ = " " + l(n)), 0 !== u.length || b && 0 != n.length ? r < 0 ? E(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(n), s = b ? function(t, e, n, r, o) {
                    for (var i = [], u = 0, c = e.length; u < c; ++u) I(e, String(u)) ? i.push(p(t, e, n, r, String(u), !0)) : i.push("");
                    return o.forEach(function(o) {
                        o.match(/^\d+$/) || i.push(p(t, e, n, r, o, !0))
                    }), i
                }(t, n, r, c, u) : u.map(function(e) {
                    return p(t, n, r, c, e, b)
                }), t.seen.pop(), function(t, e, n) {
                    return t.reduce(function(t, e) {
                        return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0) > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
                }(s, _, N)) : N[0] + _ + N[1]
            }

            function l(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function p(t, e, n, r, o, i) {
                var u, c, a;
                if ((a = Object.getOwnPropertyDescriptor(e, o) || {
                        value: e[o]
                    }).get ? c = a.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : a.set && (c = t.stylize("[Setter]", "special")), I(r, o) || (u = "[" + o + "]"), c || (t.seen.indexOf(a.value) < 0 ? (c = h(n) ? f(t, a.value, null) : f(t, a.value, n - 1)).indexOf("\n") > -1 && (c = i ? c.split("\n").map(function(t) {
                        return "  " + t
                    }).join("\n").substr(2) : "\n" + c.split("\n").map(function(t) {
                        return "   " + t
                    }).join("\n")) : c = t.stylize("[Circular]", "special")), g(u)) {
                    if (i && o.match(/^\d+$/)) return c;
                    (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u = u.substr(1, u.length - 2), u = t.stylize(u, "name")) : (u = u.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u = t.stylize(u, "string"))
                }
                return u + ": " + c
            }

            function d(t) {
                return Array.isArray(t)
            }

            function y(t) {
                return "boolean" == typeof t
            }

            function h(t) {
                return null === t
            }

            function v(t) {
                return "number" == typeof t
            }

            function m(t) {
                return "string" == typeof t
            }

            function g(t) {
                return void 0 === t
            }

            function E(t) {
                return _(t) && "[object RegExp]" === b(t)
            }

            function _(t) {
                return "object" == typeof t && null !== t
            }

            function T(t) {
                return _(t) && "[object Date]" === b(t)
            }

            function O(t) {
                return _(t) && ("[object Error]" === b(t) || t instanceof Error)
            }

            function w(t) {
                return "function" == typeof t
            }

            function b(t) {
                return Object.prototype.toString.call(t)
            }

            function N(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10)
            }
            e.debuglog = function(t) {
                if (g(i) && (i = r.env.NODE_DEBUG || ""), t = t.toUpperCase(), !u[t])
                    if (new RegExp("\\b" + t + "\\b", "i").test(i)) {
                        var n = r.pid;
                        u[t] = function() {
                            var r = e.format.apply(e, arguments);
                            console.error("%s %d: %s", t, n, r)
                        }
                    } else u[t] = function() {};
                return u[t]
            }, e.inspect = c, c.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, c.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.isArray = d, e.isBoolean = y, e.isNull = h, e.isNullOrUndefined = function(t) {
                return null == t
            }, e.isNumber = v, e.isString = m, e.isSymbol = function(t) {
                return "symbol" == typeof t
            }, e.isUndefined = g, e.isRegExp = E, e.isObject = _, e.isDate = T, e.isError = O, e.isFunction = w, e.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }, e.isBuffer = n(6);
            var S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function I(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            e.log = function() {
                var t, n;
                console.log("%s - %s", (n = [N((t = new Date).getHours()), N(t.getMinutes()), N(t.getSeconds())].join(":"), [t.getDate(), S[t.getMonth()], n].join(" ")), e.format.apply(e, arguments))
            }, e.inherits = n(5), e._extend = function(t, e) {
                if (!e || !_(e)) return t;
                for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
                return t
            }
        }).call(this, n(1), n(0))
    }, function(t, e, n) {
        "use strict";
        (function(e) {
            function r(t, e) {
                if (t === e) return 0;
                for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (t[o] !== e[o]) {
                        n = t[o], r = e[o];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }

            function o(t) {
                return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(t) : !(null == t || !t._isBuffer)
            }
            var i = n(7),
                u = Object.prototype.hasOwnProperty,
                c = Array.prototype.slice,
                a = "foo" === function() {}.name;

            function s(t) {
                return Object.prototype.toString.call(t)
            }

            function f(t) {
                return !o(t) && "function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : !!t && (t instanceof DataView || !!(t.buffer && t.buffer instanceof ArrayBuffer)))
            }
            var l = t.exports = m,
                p = /\s*function\s+([^\(\s]*)\s*/;

            function d(t) {
                if (i.isFunction(t)) {
                    if (a) return t.name;
                    var e = t.toString().match(p);
                    return e && e[1]
                }
            }

            function y(t, e) {
                return "string" == typeof t ? t.length < e ? t : t.slice(0, e) : t
            }

            function h(t) {
                if (a || !i.isFunction(t)) return i.inspect(t);
                var e = d(t);
                return "[Function" + (e ? ": " + e : "") + "]"
            }

            function v(t, e, n, r, o) {
                throw new l.AssertionError({
                    message: n,
                    actual: t,
                    expected: e,
                    operator: r,
                    stackStartFunction: o
                })
            }

            function m(t, e) {
                t || v(t, !0, e, "==", l.ok)
            }

            function g(t, e, n, u) {
                if (t === e) return !0;
                if (o(t) && o(e)) return 0 === r(t, e);
                if (i.isDate(t) && i.isDate(e)) return t.getTime() === e.getTime();
                if (i.isRegExp(t) && i.isRegExp(e)) return t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase;
                if (null !== t && "object" == typeof t || null !== e && "object" == typeof e) {
                    if (f(t) && f(e) && s(t) === s(e) && !(t instanceof Float32Array || t instanceof Float64Array)) return 0 === r(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
                    if (o(t) !== o(e)) return !1;
                    var a = (u = u || {
                        actual: [],
                        expected: []
                    }).actual.indexOf(t);
                    return -1 !== a && a === u.expected.indexOf(e) || (u.actual.push(t), u.expected.push(e), function(t, e, n, r) {
                        if (null === t || void 0 === t || null === e || void 0 === e) return !1;
                        if (i.isPrimitive(t) || i.isPrimitive(e)) return t === e;
                        if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
                        var o = E(t),
                            u = E(e);
                        if (o && !u || !o && u) return !1;
                        if (o) return g(t = c.call(t), e = c.call(e), n);
                        var a, s, f = O(t),
                            l = O(e);
                        if (f.length !== l.length) return !1;
                        for (f.sort(), l.sort(), s = f.length - 1; s >= 0; s--)
                            if (f[s] !== l[s]) return !1;
                        for (s = f.length - 1; s >= 0; s--)
                            if (!g(t[a = f[s]], e[a], n, r)) return !1;
                        return !0
                    }(t, e, n, u))
                }
                return n ? t === e : t == e
            }

            function E(t) {
                return "[object Arguments]" == Object.prototype.toString.call(t)
            }

            function _(t, e) {
                if (!t || !e) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(t);
                try {
                    if (t instanceof e) return !0
                } catch (t) {}
                return !Error.isPrototypeOf(e) && !0 === e.call({}, t)
            }

            function T(t, e, n, r) {
                var o;
                if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
                "string" == typeof n && (r = n, n = null), o = function(t) {
                    var e;
                    try {
                        t()
                    } catch (t) {
                        e = t
                    }
                    return e
                }(e), r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."), t && !o && v(o, n, "Missing expected exception" + r);
                var u = "string" == typeof r,
                    c = !t && i.isError(o),
                    a = !t && o && !n;
                if ((c && u && _(o, n) || a) && v(o, n, "Got unwanted exception" + r), t && o && n && !_(o, n) || !t && o) throw o
            }
            l.AssertionError = function(t) {
                var e;
                this.name = "AssertionError", this.actual = t.actual, this.expected = t.expected, this.operator = t.operator, t.message ? (this.message = t.message, this.generatedMessage = !1) : (this.message = y(h((e = this).actual), 128) + " " + e.operator + " " + y(h(e.expected), 128), this.generatedMessage = !0);
                var n = t.stackStartFunction || v;
                if (Error.captureStackTrace) Error.captureStackTrace(this, n);
                else {
                    var r = new Error;
                    if (r.stack) {
                        var o = r.stack,
                            i = d(n),
                            u = o.indexOf("\n" + i);
                        if (u >= 0) {
                            var c = o.indexOf("\n", u + 1);
                            o = o.substring(c + 1)
                        }
                        this.stack = o
                    }
                }
            }, i.inherits(l.AssertionError, Error), l.fail = v, l.ok = m, l.equal = function(t, e, n) {
                t != e && v(t, e, n, "==", l.equal)
            }, l.notEqual = function(t, e, n) {
                t == e && v(t, e, n, "!=", l.notEqual)
            }, l.deepEqual = function(t, e, n) {
                g(t, e, !1) || v(t, e, n, "deepEqual", l.deepEqual)
            }, l.deepStrictEqual = function(t, e, n) {
                g(t, e, !0) || v(t, e, n, "deepStrictEqual", l.deepStrictEqual)
            }, l.notDeepEqual = function(t, e, n) {
                g(t, e, !1) && v(t, e, n, "notDeepEqual", l.notDeepEqual)
            }, l.notDeepStrictEqual = function t(e, n, r) {
                g(e, n, !0) && v(e, n, r, "notDeepStrictEqual", t)
            }, l.strictEqual = function(t, e, n) {
                t !== e && v(t, e, n, "===", l.strictEqual)
            }, l.notStrictEqual = function(t, e, n) {
                t === e && v(t, e, n, "!==", l.notStrictEqual)
            }, l.throws = function(t, e, n) {
                T(!0, t, e, n)
            }, l.doesNotThrow = function(t, e, n) {
                T(!1, t, e, n)
            }, l.ifError = function(t) {
                if (t) throw t
            };
            var O = Object.keys || function(t) {
                var e = [];
                for (var n in t) u.call(t, n) && e.push(n);
                return e
            }
        }).call(this, n(1))
    }, function(t, e, n) {
        ! function(n) {
            "use strict";

            function r(t, e) {
                e instanceof Object || (e = {});
                var n = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/gi;
                return !1 === e.paddingRequired && (n = /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/gi), n.test(t)
            }
            void 0 !== t && t.exports && (e = t.exports = r), e.isBase64 = r
        }()
    }, function(t, e) {
        t.exports = function(t) {
            return atob(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = n(9),
            i = n(8);

        function u(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e.buffer
        }
        t.exports = function(t) {
            return i("string" == typeof t, "Argument should be a string"), /^data\:/i.test(t) ? function(t) {
                var e = (t = t.replace(/\r?\n/g, "")).indexOf(",");
                if (-1 === e || e <= 4) throw new TypeError("malformed data-URI");
                for (var n = t.substring(5, e).split(";"), o = !1, i = "US-ASCII", c = 0; c < n.length; c++) "base64" == n[c] ? o = !0 : 0 == n[c].indexOf("charset=") && (i = n[c].substring(8));
                var a = unescape(t.substring(e + 1));
                o && (a = r(a));
                var s = u(a);
                return s.type = n[0] || "text/plain", s.charset = i, s
            }(t) : (o(t) && (t = r(t)), u(t))
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {
            libraryName: "ZCC"
        }
    }, function(t, e, n) {
        "use strict";
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = n(12),
            i = n(11),
            u = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return r(t, null, [{
                    key: "getLoadedLibrary",
                    value: function() {
                        return !!window && window[o.libraryName]
                    }
                }, {
                    key: "strToCamelCase",
                    value: function(t) {
                        return t.split(/[-_]/).map(function(t, e) {
                            return 0 === e ? t.toLowerCase() : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
                        }).join("")
                    }
                }, {
                    key: "getDurationDisplay",
                    value: function(t) {
                        var e = Math.floor(t / 36e5),
                            n = Math.floor(t / 6e4 % 60),
                            r = Math.floor(t / 1e3 % 60),
                            o = Math.round(t % 1e3 / 100);
                        return o >= 10 && (o = 9), e > 0 && e < 10 && (e = "0" + e), n > 0 && n < 10 && (n = "0" + n), r > 0 && r < 10 && (r = "0" + r), e ? e + ":" + n + ":" + r + "." + o : n ? n + ":" + r + "." + o : r ? "00:" + r + "." + o : "00:00." + o
                    }
                }, {
                    key: "buildBinaryPacket",
                    value: function(e, n, r, o) {
                        var i = new ArrayBuffer(9),
                            u = new DataView(i);
                        return u.setInt8(0, e), u.setInt32(1, n, !1), u.setInt32(5, r, !1), new Uint8Array(t.arrayBufferConcat(i, o))
                    }
                }, {
                    key: "buildCodecHeader",
                    value: function(t, e, n) {
                        var r = new ArrayBuffer(4),
                            o = new DataView(r);
                        return o.setUint16(0, t, !0), o.setUint8(2, e), o.setUint8(3, n), btoa(String.fromCharCode.apply(null, new Uint8Array(r)))
                    }
                }, {
                    key: "arrayBufferConcat",
                    value: function() {
                        var t = 0,
                            e = null;
                        for (var n in arguments) t += (e = arguments[n]).byteLength;
                        var r = new Uint8Array(t),
                            o = 0;
                        for (var i in arguments) e = arguments[i], r.set(new Uint8Array(e), o), o += e.byteLength;
                        return r.buffer
                    }
                }, {
                    key: "parseCodedHeader",
                    value: function(t) {
                        var e = new DataView(i("data:text/plain;base64," + t));
                        return {
                            rate: e.getUint16(0, !0),
                            framesPerPacket: e.getUint8(2),
                            frameSize: e.getUint8(3)
                        }
                    }
                }, {
                    key: "isFunction",
                    value: function(e) {
                        return t.instanceOf(e, Function)
                    }
                }, {
                    key: "isArray",
                    value: function(e) {
                        return t.instanceOf(e, Array)
                    }
                }, {
                    key: "instanceOf",
                    value: function(t, e) {
                        return t instanceof e
                    }
                }, {
                    key: "parseIncomingBinaryMessage",
                    value: function(t) {
                        var e = new DataView(t.slice(0, 9));
                        return {
                            messageType: e.getUint8(0),
                            messageData: new Uint8Array(t.slice(9)),
                            messageId: e.getUint32(1, !1),
                            packetId: e.getUint32(5, !1)
                        }
                    }
                }]), t
            }();
        t.exports = u
    }, , function(t, e, n) {
        (function(t, e) {
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, o, i, u, c, a = 1,
                        s = {},
                        f = !1,
                        l = t.document,
                        p = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            y(t)
                        })
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? (u = "setImmediate$" + Math.random() + "$", c = function(e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(u) && y(+e.data.slice(u.length))
                    }, t.addEventListener ? t.addEventListener("message", c, !1) : t.attachEvent("onmessage", c), r = function(e) {
                        t.postMessage(u + e, "*")
                    }) : t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) {
                        y(t.data)
                    }, r = function(t) {
                        i.port2.postMessage(t)
                    }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, r = function(t) {
                        var e = l.createElement("script");
                        e.onreadystatechange = function() {
                            y(t), e.onreadystatechange = null, o.removeChild(e), e = null
                        }, o.appendChild(e)
                    }) : r = function(t) {
                        setTimeout(y, 0, t)
                    }, p.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var o = {
                            callback: t,
                            args: e
                        };
                        return s[a] = o, r(a), a++
                    }, p.clearImmediate = d
                }

                function d(t) {
                    delete s[t]
                }

                function y(t) {
                    if (f) setTimeout(y, 0, t);
                    else {
                        var e = s[t];
                        if (e) {
                            f = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                d(t), f = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n(1), n(0))
    }, function(t, e, n) {
        (function(t) {
            var r = void 0 !== t && t || "undefined" != typeof self && self || window,
                o = Function.prototype.apply;

            function i(t, e) {
                this._id = t, this._clearFn = e
            }
            e.setTimeout = function() {
                return new i(o.call(setTimeout, r, arguments), clearTimeout)
            }, e.setInterval = function() {
                return new i(o.call(setInterval, r, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close()
            }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, n(15), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n(1))
    }, function(t, e, n) {
        (function(e, n) {
            ! function(e) {
                "use strict";
                "function" == typeof bootstrap ? bootstrap("promise", e) : t.exports = e()
            }(function() {
                "use strict";
                var t = !1;
                try {
                    throw new Error
                } catch (e) {
                    t = !!e.stack
                }
                var r, o = w(),
                    i = function() {},
                    u = function() {
                        var t = {
                                task: void 0,
                                next: null
                            },
                            r = t,
                            o = !1,
                            i = void 0,
                            c = !1,
                            a = [];

                        function s() {
                            for (var e, n; t.next;) e = (t = t.next).task, t.task = void 0, (n = t.domain) && (t.domain = void 0, n.enter()), f(e, n);
                            for (; a.length;) f(e = a.pop());
                            o = !1
                        }

                        function f(t, e) {
                            try {
                                t()
                            } catch (t) {
                                if (c) throw e && e.exit(), setTimeout(s, 0), e && e.enter(), t;
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                            e && e.exit()
                        }
                        if (u = function(t) {
                                r = r.next = {
                                    task: t,
                                    domain: c && e.domain,
                                    next: null
                                }, o || (o = !0, i())
                            }, "object" == typeof e && "[object process]" === e.toString() && e.nextTick) c = !0, i = function() {
                            e.nextTick(s)
                        };
                        else if ("function" == typeof n) i = "undefined" != typeof window ? n.bind(window, s) : function() {
                            n(s)
                        };
                        else if ("undefined" != typeof MessageChannel) {
                            var l = new MessageChannel;
                            l.port1.onmessage = function() {
                                i = p, l.port1.onmessage = s, s()
                            };
                            var p = function() {
                                l.port2.postMessage(0)
                            };
                            i = function() {
                                setTimeout(s, 0), p()
                            }
                        } else i = function() {
                            setTimeout(s, 0)
                        };
                        return u.runAfter = function(t) {
                            a.push(t), o || (o = !0, i())
                        }, u
                    }(),
                    c = Function.call;

                function a(t) {
                    return function() {
                        return c.apply(t, arguments)
                    }
                }
                var s, f = a(Array.prototype.slice),
                    l = a(Array.prototype.reduce || function(t, e) {
                        var n = 0,
                            r = this.length;
                        if (1 === arguments.length)
                            for (;;) {
                                if (n in this) {
                                    e = this[n++];
                                    break
                                }
                                if (++n >= r) throw new TypeError
                            }
                        for (; n < r; n++) n in this && (e = t(e, this[n], n));
                        return e
                    }),
                    p = a(Array.prototype.indexOf || function(t) {
                        for (var e = 0; e < this.length; e++)
                            if (this[e] === t) return e;
                        return -1
                    }),
                    d = a(Array.prototype.map || function(t, e) {
                        var n = this,
                            r = [];
                        return l(n, function(o, i, u) {
                            r.push(t.call(e, i, u, n))
                        }, void 0), r
                    }),
                    y = Object.create || function(t) {
                        function e() {}
                        return e.prototype = t, new e
                    },
                    h = Object.defineProperty || function(t, e, n) {
                        return t[e] = n.value, t
                    },
                    v = a(Object.prototype.hasOwnProperty),
                    m = Object.keys || function(t) {
                        var e = [];
                        for (var n in t) v(t, n) && e.push(n);
                        return e
                    },
                    g = a(Object.prototype.toString);
                s = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
                    this.value = t
                };
                var E = "From previous event:";

                function _(e, n) {
                    if (t && n.stack && "object" == typeof e && null !== e && e.stack) {
                        for (var r = [], o = n; o; o = o.source) o.stack && (!e.__minimumStackCounter__ || e.__minimumStackCounter__ > o.stackCounter) && (h(e, "__minimumStackCounter__", {
                            value: o.stackCounter,
                            configurable: !0
                        }), r.unshift(o.stack));
                        r.unshift(e.stack);
                        var i = function(t) {
                            for (var e = t.split("\n"), n = [], r = 0; r < e.length; ++r) {
                                var o = e[r];
                                !O(o) && -1 === (i = o).indexOf("(module.js:") && -1 === i.indexOf("(node.js:") && o && n.push(o)
                            }
                            var i;
                            return n.join("\n")
                        }(r.join("\n" + E + "\n"));
                        h(e, "stack", {
                            value: i,
                            configurable: !0
                        })
                    }
                }

                function T(t) {
                    var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
                    if (e) return [e[1], Number(e[2])];
                    var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
                    if (n) return [n[1], Number(n[2])];
                    var r = /.*@(.+):(\d+)$/.exec(t);
                    return r ? [r[1], Number(r[2])] : void 0
                }

                function O(t) {
                    var e = T(t);
                    if (!e) return !1;
                    var n = e[0],
                        i = e[1];
                    return n === r && i >= o && i <= Y
                }

                function w() {
                    if (t) try {
                        throw new Error
                    } catch (t) {
                        var e = t.stack.split("\n"),
                            n = T(e[0].indexOf("@") > 0 ? e[1] : e[2]);
                        if (!n) return;
                        return r = n[0], n[1]
                    }
                }

                function b(t) {
                    return t instanceof R ? t : C(t) ? (e = t, n = S(), b.nextTick(function() {
                        try {
                            e.then(n.resolve, n.reject, n.notify)
                        } catch (t) {
                            n.reject(t)
                        }
                    }), n.promise) : B(t);
                    var e, n
                }
                b.resolve = b, b.nextTick = u, b.longStackSupport = !1;
                var N = 1;

                function S() {
                    var e, n = [],
                        r = [],
                        o = y(S.prototype),
                        i = y(R.prototype);
                    if (i.promiseDispatch = function(t, o, i) {
                            var u = f(arguments);
                            n ? (n.push(u), "when" === o && i[1] && r.push(i[1])) : b.nextTick(function() {
                                e.promiseDispatch.apply(e, u)
                            })
                        }, i.valueOf = function() {
                            if (n) return i;
                            var t = j(e);
                            return x(t) && (e = t), t
                        }, i.inspect = function() {
                            return e ? e.inspect() : {
                                state: "pending"
                            }
                        }, b.longStackSupport && t) try {
                        throw new Error
                    } catch (t) {
                        i.stack = t.stack.substring(t.stack.indexOf("\n") + 1), i.stackCounter = N++
                    }

                    function u(o) {
                        e = o, b.longStackSupport && t && (i.source = o), l(n, function(t, e) {
                            b.nextTick(function() {
                                o.promiseDispatch.apply(o, e)
                            })
                        }, void 0), n = void 0, r = void 0
                    }
                    return o.promise = i, o.resolve = function(t) {
                        e || u(b(t))
                    }, o.fulfill = function(t) {
                        e || u(B(t))
                    }, o.reject = function(t) {
                        e || u(F(t))
                    }, o.notify = function(t) {
                        e || l(r, function(e, n) {
                            b.nextTick(function() {
                                n(t)
                            })
                        }, void 0)
                    }, o
                }

                function I(t) {
                    if ("function" != typeof t) throw new TypeError("resolver must be a function.");
                    var e = S();
                    try {
                        t(e.resolve, e.reject, e.notify)
                    } catch (t) {
                        e.reject(t)
                    }
                    return e.promise
                }

                function A(t) {
                    return I(function(e, n) {
                        for (var r = 0, o = t.length; r < o; r++) b(t[r]).then(e, n)
                    })
                }

                function R(t, e, n) {
                    void 0 === e && (e = function(t) {
                        return F(new Error("Promise does not support operation: " + t))
                    }), void 0 === n && (n = function() {
                        return {
                            state: "unknown"
                        }
                    });
                    var r = y(R.prototype);
                    if (r.promiseDispatch = function(n, o, i) {
                            var u;
                            try {
                                u = t[o] ? t[o].apply(r, i) : e.call(r, o, i)
                            } catch (t) {
                                u = F(t)
                            }
                            n && n(u)
                        }, r.inspect = n, n) {
                        var o = n();
                        "rejected" === o.state && (r.exception = o.reason), r.valueOf = function() {
                            var t = n();
                            return "pending" === t.state || "rejected" === t.state ? r : t.value
                        }
                    }
                    return r
                }

                function k(t, e, n, r) {
                    return b(t).then(e, n, r)
                }

                function j(t) {
                    if (x(t)) {
                        var e = t.inspect();
                        if ("fulfilled" === e.state) return e.value
                    }
                    return t
                }

                function x(t) {
                    return t instanceof R
                }

                function C(t) {
                    return (e = t) === Object(e) && "function" == typeof t.then;
                    var e
                }
                "object" == typeof e && e && e.env && e.env.Q_DEBUG && (b.longStackSupport = !0), b.defer = S, S.prototype.makeNodeResolver = function() {
                    var t = this;
                    return function(e, n) {
                        e ? t.reject(e) : arguments.length > 2 ? t.resolve(f(arguments, 1)) : t.resolve(n)
                    }
                }, b.Promise = I, b.promise = I, I.race = A, I.all = Z, I.reject = F, I.resolve = b, b.passByCopy = function(t) {
                    return t
                }, R.prototype.passByCopy = function() {
                    return this
                }, b.join = function(t, e) {
                    return b(t).join(e)
                }, R.prototype.join = function(t) {
                    return b([this, t]).spread(function(t, e) {
                        if (t === e) return t;
                        throw new Error("Q can't join: not the same: " + t + " " + e)
                    })
                }, b.race = A, R.prototype.race = function() {
                    return this.then(b.race)
                }, b.makePromise = R, R.prototype.toString = function() {
                    return "[object Promise]"
                }, R.prototype.then = function(t, e, n) {
                    var r = this,
                        o = S(),
                        i = !1;
                    return b.nextTick(function() {
                        r.promiseDispatch(function(e) {
                            i || (i = !0, o.resolve(function(e) {
                                try {
                                    return "function" == typeof t ? t(e) : e
                                } catch (t) {
                                    return F(t)
                                }
                            }(e)))
                        }, "when", [function(t) {
                            i || (i = !0, o.resolve(function(t) {
                                if ("function" == typeof e) {
                                    _(t, r);
                                    try {
                                        return e(t)
                                    } catch (t) {
                                        return F(t)
                                    }
                                }
                                return F(t)
                            }(t)))
                        }])
                    }), r.promiseDispatch(void 0, "when", [void 0, function(t) {
                        var e, r = !1;
                        try {
                            e = function(t) {
                                return "function" == typeof n ? n(t) : t
                            }(t)
                        } catch (t) {
                            if (r = !0, !b.onerror) throw t;
                            b.onerror(t)
                        }
                        r || o.notify(e)
                    }]), o.promise
                }, b.tap = function(t, e) {
                    return b(t).tap(e)
                }, R.prototype.tap = function(t) {
                    return t = b(t), this.then(function(e) {
                        return t.fcall(e).thenResolve(e)
                    })
                }, b.when = k, R.prototype.thenResolve = function(t) {
                    return this.then(function() {
                        return t
                    })
                }, b.thenResolve = function(t, e) {
                    return b(t).thenResolve(e)
                }, R.prototype.thenReject = function(t) {
                    return this.then(function() {
                        throw t
                    })
                }, b.thenReject = function(t, e) {
                    return b(t).thenReject(e)
                }, b.nearer = j, b.isPromise = x, b.isPromiseAlike = C, b.isPending = function(t) {
                    return x(t) && "pending" === t.inspect().state
                }, R.prototype.isPending = function() {
                    return "pending" === this.inspect().state
                }, b.isFulfilled = function(t) {
                    return !x(t) || "fulfilled" === t.inspect().state
                }, R.prototype.isFulfilled = function() {
                    return "fulfilled" === this.inspect().state
                }, b.isRejected = function(t) {
                    return x(t) && "rejected" === t.inspect().state
                }, R.prototype.isRejected = function() {
                    return "rejected" === this.inspect().state
                };
                var D, M, P, U = [],
                    V = [],
                    L = [],
                    G = !0;

                function z() {
                    U.length = 0, V.length = 0, G || (G = !0)
                }

                function F(t) {
                    var n = R({
                        when: function(n) {
                            return n && function(t) {
                                if (G) {
                                    var n = p(V, t); - 1 !== n && ("object" == typeof e && "function" == typeof e.emit && b.nextTick.runAfter(function() {
                                        var r = p(L, t); - 1 !== r && (e.emit("rejectionHandled", U[n], t), L.splice(r, 1))
                                    }), V.splice(n, 1), U.splice(n, 1))
                                }
                            }(this), n ? n(t) : this
                        }
                    }, function() {
                        return this
                    }, function() {
                        return {
                            state: "rejected",
                            reason: t
                        }
                    });
                    return function(t, n) {
                        G && ("object" == typeof e && "function" == typeof e.emit && b.nextTick.runAfter(function() {
                            -1 !== p(V, t) && (e.emit("unhandledRejection", n, t), L.push(t))
                        }), V.push(t), n && void 0 !== n.stack ? U.push(n.stack) : U.push("(no stack) " + n))
                    }(n, t), n
                }

                function B(t) {
                    return R({
                        when: function() {
                            return t
                        },
                        get: function(e) {
                            return t[e]
                        },
                        set: function(e, n) {
                            t[e] = n
                        },
                        delete: function(e) {
                            delete t[e]
                        },
                        post: function(e, n) {
                            return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                        },
                        apply: function(e, n) {
                            return t.apply(e, n)
                        },
                        keys: function() {
                            return m(t)
                        }
                    }, void 0, function() {
                        return {
                            state: "fulfilled",
                            value: t
                        }
                    })
                }

                function q(t, e, n) {
                    return b(t).spread(e, n)
                }

                function H(t, e, n) {
                    return b(t).dispatch(e, n)
                }

                function Z(t) {
                    return k(t, function(t) {
                        var e = 0,
                            n = S();
                        return l(t, function(r, o, i) {
                            var u;
                            x(o) && "fulfilled" === (u = o.inspect()).state ? t[i] = u.value : (++e, k(o, function(r) {
                                t[i] = r, 0 == --e && n.resolve(t)
                            }, n.reject, function(t) {
                                n.notify({
                                    index: i,
                                    value: t
                                })
                            }))
                        }, void 0), 0 === e && n.resolve(t), n.promise
                    })
                }

                function $(t) {
                    if (0 === t.length) return b.resolve();
                    var e = b.defer(),
                        n = 0;
                    return l(t, function(r, o, i) {
                        var u = t[i];
                        n++, k(u, function(t) {
                            e.resolve(t)
                        }, function(t) {
                            if (0 == --n) {
                                var r = t || new Error("" + t);
                                r.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + r.message, e.reject(r)
                            }
                        }, function(t) {
                            e.notify({
                                index: i,
                                value: t
                            })
                        })
                    }, void 0), e.promise
                }

                function W(t) {
                    return k(t, function(t) {
                        return t = d(t, b), k(Z(d(t, function(t) {
                            return k(t, i, i)
                        })), function() {
                            return t
                        })
                    })
                }
                b.resetUnhandledRejections = z, b.getUnhandledReasons = function() {
                    return U.slice()
                }, b.stopUnhandledRejectionTracking = function() {
                    z(), G = !1
                }, z(), b.reject = F, b.fulfill = B, b.master = function(t) {
                    return R({
                        isDef: function() {}
                    }, function(e, n) {
                        return H(t, e, n)
                    }, function() {
                        return b(t).inspect()
                    })
                }, b.spread = q, R.prototype.spread = function(t, e) {
                    return this.all().then(function(e) {
                        return t.apply(void 0, e)
                    }, e)
                }, b.async = function(t) {
                    return function() {
                        function e(t, e) {
                            var i;
                            if ("undefined" == typeof StopIteration) {
                                try {
                                    i = n[t](e)
                                } catch (t) {
                                    return F(t)
                                }
                                return i.done ? b(i.value) : k(i.value, r, o)
                            }
                            try {
                                i = n[t](e)
                            } catch (t) {
                                return function(t) {
                                    return "[object StopIteration]" === g(t) || t instanceof s
                                }(t) ? b(t.value) : F(t)
                            }
                            return k(i, r, o)
                        }
                        var n = t.apply(this, arguments),
                            r = e.bind(e, "next"),
                            o = e.bind(e, "throw");
                        return r()
                    }
                }, b.spawn = function(t) {
                    b.done(b.async(t)())
                }, b.return = function(t) {
                    throw new s(t)
                }, b.promised = function(t) {
                    return function() {
                        return q([this, Z(arguments)], function(e, n) {
                            return t.apply(e, n)
                        })
                    }
                }, b.dispatch = H, R.prototype.dispatch = function(t, e) {
                    var n = this,
                        r = S();
                    return b.nextTick(function() {
                        n.promiseDispatch(r.resolve, t, e)
                    }), r.promise
                }, b.get = function(t, e) {
                    return b(t).dispatch("get", [e])
                }, R.prototype.get = function(t) {
                    return this.dispatch("get", [t])
                }, b.set = function(t, e, n) {
                    return b(t).dispatch("set", [e, n])
                }, R.prototype.set = function(t, e) {
                    return this.dispatch("set", [t, e])
                }, b.del = b.delete = function(t, e) {
                    return b(t).dispatch("delete", [e])
                }, R.prototype.del = R.prototype.delete = function(t) {
                    return this.dispatch("delete", [t])
                }, b.mapply = b.post = function(t, e, n) {
                    return b(t).dispatch("post", [e, n])
                }, R.prototype.mapply = R.prototype.post = function(t, e) {
                    return this.dispatch("post", [t, e])
                }, b.send = b.mcall = b.invoke = function(t, e) {
                    return b(t).dispatch("post", [e, f(arguments, 2)])
                }, R.prototype.send = R.prototype.mcall = R.prototype.invoke = function(t) {
                    return this.dispatch("post", [t, f(arguments, 1)])
                }, b.fapply = function(t, e) {
                    return b(t).dispatch("apply", [void 0, e])
                }, R.prototype.fapply = function(t) {
                    return this.dispatch("apply", [void 0, t])
                }, b.try = b.fcall = function(t) {
                    return b(t).dispatch("apply", [void 0, f(arguments, 1)])
                }, R.prototype.fcall = function() {
                    return this.dispatch("apply", [void 0, f(arguments)])
                }, b.fbind = function(t) {
                    var e = b(t),
                        n = f(arguments, 1);
                    return function() {
                        return e.dispatch("apply", [this, n.concat(f(arguments))])
                    }
                }, R.prototype.fbind = function() {
                    var t = this,
                        e = f(arguments);
                    return function() {
                        return t.dispatch("apply", [this, e.concat(f(arguments))])
                    }
                }, b.keys = function(t) {
                    return b(t).dispatch("keys", [])
                }, R.prototype.keys = function() {
                    return this.dispatch("keys", [])
                }, b.all = Z, R.prototype.all = function() {
                    return Z(this)
                }, b.any = $, R.prototype.any = function() {
                    return $(this)
                }, b.allResolved = (D = W, M = "allResolved", P = "allSettled", function() {
                    return "undefined" != typeof console && "function" == typeof console.warn && console.warn(M + " is deprecated, use " + P + " instead.", new Error("").stack), D.apply(D, arguments)
                }), R.prototype.allResolved = function() {
                    return W(this)
                }, b.allSettled = function(t) {
                    return b(t).allSettled()
                }, R.prototype.allSettled = function() {
                    return this.then(function(t) {
                        return Z(d(t, function(t) {
                            function e() {
                                return t.inspect()
                            }
                            return (t = b(t)).then(e, e)
                        }))
                    })
                }, b.fail = b.catch = function(t, e) {
                    return b(t).then(void 0, e)
                }, R.prototype.fail = R.prototype.catch = function(t) {
                    return this.then(void 0, t)
                }, b.progress = function(t, e) {
                    return b(t).then(void 0, void 0, e)
                }, R.prototype.progress = function(t) {
                    return this.then(void 0, void 0, t)
                }, b.fin = b.finally = function(t, e) {
                    return b(t).finally(e)
                }, R.prototype.fin = R.prototype.finally = function(t) {
                    if (!t || "function" != typeof t.apply) throw new Error("Q can't apply finally callback");
                    return t = b(t), this.then(function(e) {
                        return t.fcall().then(function() {
                            return e
                        })
                    }, function(e) {
                        return t.fcall().then(function() {
                            throw e
                        })
                    })
                }, b.done = function(t, e, n, r) {
                    return b(t).done(e, n, r)
                }, R.prototype.done = function(t, n, r) {
                    var o = function(t) {
                            b.nextTick(function() {
                                if (_(t, i), !b.onerror) throw t;
                                b.onerror(t)
                            })
                        },
                        i = t || n || r ? this.then(t, n, r) : this;
                    "object" == typeof e && e && e.domain && (o = e.domain.bind(o)), i.then(void 0, o)
                }, b.timeout = function(t, e, n) {
                    return b(t).timeout(e, n)
                }, R.prototype.timeout = function(t, e) {
                    var n = S(),
                        r = setTimeout(function() {
                            e && "string" != typeof e || ((e = new Error(e || "Timed out after " + t + " ms")).code = "ETIMEDOUT"), n.reject(e)
                        }, t);
                    return this.then(function(t) {
                        clearTimeout(r), n.resolve(t)
                    }, function(t) {
                        clearTimeout(r), n.reject(t)
                    }, n.notify), n.promise
                }, b.delay = function(t, e) {
                    return void 0 === e && (e = t, t = void 0), b(t).delay(e)
                }, R.prototype.delay = function(t) {
                    return this.then(function(e) {
                        var n = S();
                        return setTimeout(function() {
                            n.resolve(e)
                        }, t), n.promise
                    })
                }, b.nfapply = function(t, e) {
                    return b(t).nfapply(e)
                }, R.prototype.nfapply = function(t) {
                    var e = S(),
                        n = f(t);
                    return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
                }, b.nfcall = function(t) {
                    var e = f(arguments, 1);
                    return b(t).nfapply(e)
                }, R.prototype.nfcall = function() {
                    var t = f(arguments),
                        e = S();
                    return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
                }, b.nfbind = b.denodeify = function(t) {
                    if (void 0 === t) throw new Error("Q can't wrap an undefined function");
                    var e = f(arguments, 1);
                    return function() {
                        var n = e.concat(f(arguments)),
                            r = S();
                        return n.push(r.makeNodeResolver()), b(t).fapply(n).fail(r.reject), r.promise
                    }
                }, R.prototype.nfbind = R.prototype.denodeify = function() {
                    var t = f(arguments);
                    return t.unshift(this), b.denodeify.apply(void 0, t)
                }, b.nbind = function(t, e) {
                    var n = f(arguments, 2);
                    return function() {
                        var r = n.concat(f(arguments)),
                            o = S();
                        return r.push(o.makeNodeResolver()), b(function() {
                            return t.apply(e, arguments)
                        }).fapply(r).fail(o.reject), o.promise
                    }
                }, R.prototype.nbind = function() {
                    var t = f(arguments, 0);
                    return t.unshift(this), b.nbind.apply(void 0, t)
                }, b.nmapply = b.npost = function(t, e, n) {
                    return b(t).npost(e, n)
                }, R.prototype.nmapply = R.prototype.npost = function(t, e) {
                    var n = f(e || []),
                        r = S();
                    return n.push(r.makeNodeResolver()), this.dispatch("post", [t, n]).fail(r.reject), r.promise
                }, b.nsend = b.nmcall = b.ninvoke = function(t, e) {
                    var n = f(arguments, 2),
                        r = S();
                    return n.push(r.makeNodeResolver()), b(t).dispatch("post", [e, n]).fail(r.reject), r.promise
                }, R.prototype.nsend = R.prototype.nmcall = R.prototype.ninvoke = function(t) {
                    var e = f(arguments, 1),
                        n = S();
                    return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
                }, b.nodeify = function(t, e) {
                    return b(t).nodeify(e)
                }, R.prototype.nodeify = function(t) {
                    if (!t) return this;
                    this.then(function(e) {
                        b.nextTick(function() {
                            t(null, e)
                        })
                    }, function(e) {
                        b.nextTick(function() {
                            t(e)
                        })
                    })
                }, b.noConflict = function() {
                    throw new Error("Q.noConflict only works when Q is used as a global")
                };
                var Y = w();
                return b
            })
        }).call(this, n(0), n(16).setImmediate)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var r, o, i;
        i = function() {
            var t, e, n = document,
                r = n.getElementsByTagName("head")[0],
                o = !1,
                i = "push",
                u = "readyState",
                c = "onreadystatechange",
                a = {},
                s = {},
                f = {},
                l = {};

            function p(t, e) {
                for (var n = 0, r = t.length; n < r; ++n)
                    if (!e(t[n])) return o;
                return 1
            }

            function d(t, e) {
                p(t, function(t) {
                    return !e(t)
                })
            }

            function y(e, n, r) {
                e = e[i] ? e : [e];
                var o = n && n.call,
                    u = o ? n : r,
                    c = o ? e.join("") : n,
                    v = e.length;

                function m(t) {
                    return t.call ? t() : a[t]
                }

                function g() {
                    if (!--v)
                        for (var t in a[c] = 1, u && u(), f) p(t.split("|"), m) && !d(f[t], m) && (f[t] = [])
                }
                return setTimeout(function() {
                    d(e, function e(n, r) {
                        return null === n ? g() : (r || /^https?:\/\//.test(n) || !t || (n = -1 === n.indexOf(".js") ? t + n + ".js" : t + n), l[n] ? (c && (s[c] = 1), 2 == l[n] ? g() : setTimeout(function() {
                            e(n, !0)
                        }, 0)) : (l[n] = 1, c && (s[c] = 1), void h(n, g)))
                    })
                }, 0), y
            }

            function h(t, o) {
                var i, a = n.createElement("script");
                a.onload = a.onerror = a[c] = function() {
                    a[u] && !/^c|loade/.test(a[u]) || i || (a.onload = a[c] = null, i = 1, l[t] = 2, o())
                }, a.async = 1, a.src = e ? t + (-1 === t.indexOf("?") ? "?" : "&") + e : t, r.insertBefore(a, r.lastChild)
            }
            return y.get = h, y.order = function(t, e, n) {
                ! function r(o) {
                    o = t.shift(), t.length ? y(o, r) : y(o, e, n)
                }()
            }, y.path = function(e) {
                t = e
            }, y.urlArgs = function(t) {
                e = t
            }, y.ready = function(t, e, n) {
                var r, o = [];
                return !d(t = t[i] ? t : [t], function(t) {
                    a[t] || o[i](t)
                }) && p(t, function(t) {
                    return a[t]
                }) ? e() : (r = t.join("|"), f[r] = f[r] || [], f[r][i](e), n && n(o)), y
            }, y.done = function(t) {
                y([null], t)
            }, y
        }, void 0 !== t && t.exports ? t.exports = i() : void 0 === (o = "function" == typeof(r = i) ? r.call(e, n, e, t) : r) || (t.exports = o)
    }, function(t, e, n) {
        "use strict";
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = n(17),
            i = n(43),
            u = n(2),
            c = n(13),
            a = null,
            s = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return r(t, null, [{
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        t.checkBrowserCompatibility();
                        var r = o.defer(),
                            u = t.getMyUrl();
                        t.initOptions = Object.assign({
                            player: !0,
                            decoder: !0,
                            recorder: !0,
                            encoder: !0,
                            widget: !1
                        }, e);
                        var a = [u + "zcc.session.js", u + "zcc.constants.js", u + "zcc.incomingimage.js", u + "zcc.outgoingimage.js", u + "zcc.incomingmessage.js", u + "zcc.outgoingmessage.js"],
                            s = !1;
                        return t.initOptions.player && !c.isFunction(t.initOptions.player) && (a.push(u + "zcc.player.js"), s = !0), t.initOptions.decoder && !c.isFunction(t.initOptions.decoder) && a.push(u + "zcc.decoder.js"), t.initOptions.recorder && !c.isFunction(t.initOptions.recorder) && a.push(u + "zcc.recorder.js"), t.initOptions.encoder && !c.isFunction(t.initOptions.encoder) && a.push(u + "zcc.encoder.js"), t.initOptions.widget && a.push(u + "zcc.widget.js"), i(a, "bundle"), i.ready("bundle", function() {
                            "function" == typeof n && n.apply(n), s && t.initDefaultPlayer(), r.resolve()
                        }), r.promise
                    }
                }, {
                    key: "initDefaultPlayer",
                    value: function() {
                        var t = c.getLoadedLibrary();
                        t.IncomingMessage.PersistentPlayer = new t.Player({
                            encoding: "32bitFloat",
                            sampleRate: 48e3
                        })
                    }
                }, {
                    key: "getMyUrl",
                    value: function() {
                        if (a) return a;
                        for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                            var n = t[e].getAttribute("src");
                            if (n && n.match(/zcc.sdk\.js$/)) return a = n.replace(/zcc.sdk.js$/, "")
                        }
                        return !1
                    }
                }, {
                    key: "isHttps",
                    value: function() {
                        return window.location.protocol.match(/https/)
                    }
                }, {
                    key: "checkBrowserCompatibility",
                    value: function() {
                        if ("function" != typeof window.WebSocket || "function" != typeof window.Blob || "function" != typeof window.Worker || "function" != typeof JSON.stringify || "function" != typeof JSON.parse || "function" != typeof Object.assign) throw new Error(u.ERROR_UNSUPPORTED)
                    }
                }]), t
            }();
        t.exports = s
    }])
});