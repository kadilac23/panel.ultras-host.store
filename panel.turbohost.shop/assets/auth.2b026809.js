(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        154: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            }));
            var n = r(2);
            const o = () => Object(n.useStoreActions)((e => e.flashes)),
                a = e => {
                    const {
                        addFlash: t,
                        clearFlashes: r,
                        clearAndAddHttpError: n
                    } = o();
                    return {
                        addError: (r, n) => t({
                            key: e,
                            message: r,
                            title: n,
                            type: "error"
                        }),
                        clearFlashes: () => r(e),
                        clearAndAddHttpError: t => n({
                            key: e,
                            error: t
                        })
                    }
                };
            t.a = o
        },
        158: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return u
            }));
            var n = r(10),
                o = r.n(n),
                a = r(1);

            function i() {
                const e = o()(["\n    // Reset to normal styling.\n    resize: none;\n    ", ";\n    ", ";\n    ", ";\n\n    & + .input-help {\n        ", ";\n        ", ";\n    }\n\n    &:required,\n    &:invalid {\n        ", ";\n    }\n\n    &:not(:disabled):not(:read-only):focus {\n        ", ";\n        ", ";\n    }\n\n    &:disabled {\n        ", ";\n    }\n\n    ", ";\n    ", ";\n"]);
                return i = function() {
                    return e
                }, e
            }

            function c() {
                const e = o()(["\n    ", ";\n    color-adjust: exact;\n    background-origin: border-box;\n    transition: all 75ms linear, box-shadow 25ms linear;\n\n    &:checked {\n        ", ";\n        background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n        background-color: currentColor;\n        background-size: 100% 100%;\n    }\n\n    &:focus {\n        ", ";\n        box-shadow: 0 0 0 1px rgba(9, 103, 210, 0.25);\n    }\n"]);
                return c = function() {
                    return e
                }, e
            }

            function s() {
                const e = o()(["\n    ", ";\n    &:focus {\n        ", "\n    }\n\n    &:disabled {\n        ", ";\n    }\n"]);
                return s = function() {
                    return e
                }, e
            }
            const l = Object(a.b)(s(), {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
                    "--tw-border-opacity": "1",
                    borderColor: "hsla(210, 16%, 82%, var(--tw-border-opacity))",
                    "--tw-text-opacity": "1",
                    color: "hsla(209, 20%, 25%, var(--tw-text-opacity))"
                }, {
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(96, 165, 250, var(--tw-border-opacity))"
                }, {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(214, 15%, 91%, var(--tw-bg-opacity))",
                    "--tw-border-opacity": "1",
                    borderColor: "hsla(210, 16%, 82%, var(--tw-border-opacity))"
                }),
                d = Object(a.b)(c(), {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(211, 12%, 43%, var(--tw-bg-opacity))",
                    cursor: "pointer",
                    appearance: "none",
                    display: "inline-block",
                    verticalAlign: "middle",
                    userSelect: "none",
                    flexShrink: "0",
                    width: "1rem",
                    height: "1rem",
                    "--tw-text-opacity": "1",
                    color: "rgba(96, 165, 250, var(--tw-text-opacity))",
                    borderWidth: "1px",
                    "--tw-border-opacity": "1",
                    borderColor: "hsla(211, 13%, 65%, var(--tw-border-opacity))",
                    borderRadius: "0.125rem"
                }, {
                    borderColor: "rgba(0, 0, 0, 0)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }, {
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(147, 197, 253, var(--tw-border-opacity))"
                }),
                p = Object(a.b)(i(), {
                    appearance: "none",
                    outline: "2px solid transparent",
                    outlineOffset: "2px",
                    width: "100%",
                    minWidth: "0px"
                }, {
                    padding: "0.75rem",
                    borderWidth: "2px",
                    borderRadius: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    transitionProperty: "all",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "150ms"
                }, {
                    "--tw-bg-opacity": "1",
                    backgroundColor: "hsla(209, 14%, 37%, var(--tw-bg-opacity))",
                    "--tw-border-opacity": "1",
                    borderColor: "hsla(211, 12%, 43%, var(--tw-border-opacity))",
                    ":hover": {
                        "--tw-border-opacity": "1",
                        borderColor: "hsla(211, 10%, 53%, var(--tw-border-opacity))"
                    },
                    "--tw-text-opacity": "1",
                    color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
                    "--tw-shadow": "0 0 #0000",
                    boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                    ":focus": {
                        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                        boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"
                    }
                }, {
                    marginTop: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem"
                }, (e => e.hasError ? {
                    "--tw-text-opacity": "1",
                    color: "rgba(254, 202, 202, var(--tw-text-opacity))"
                } : {
                    "--tw-text-opacity": "1",
                    color: "hsla(210, 16%, 82%, var(--tw-text-opacity))"
                }), {
                    "--tw-shadow": "0 0 #0000",
                    boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
                }, {
                    "--tw-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(147, 197, 253, var(--tw-border-opacity))",
                    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                    "--tw-ring-opacity": "0.5",
                    "--tw-ring-color": "rgba(96, 165, 250, var(--tw-ring-opacity))"
                }, (e => e.hasError && {
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(252, 165, 165, var(--tw-border-opacity))",
                    "--tw-ring-opacity": "1",
                    "--tw-ring-color": "rgba(254, 202, 202, var(--tw-ring-opacity))"
                }), {
                    opacity: "0.75"
                }, (e => e.isLight && l), (e => e.hasError && {
                    "--tw-text-opacity": "1",
                    color: "rgba(254, 226, 226, var(--tw-text-opacity))",
                    "--tw-border-opacity": "1",
                    borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
                    ":hover": {
                        "--tw-border-opacity": "1",
                        borderColor: "rgba(252, 165, 165, var(--tw-border-opacity))"
                    }
                })),
                m = a.c.input.withConfig({
                    displayName: "Input",
                    componentId: "sc-19rce1w-0"
                })(["&:not([type='checkbox']):not([type='radio']){", ";}&[type='checkbox'],&[type='radio']{", ";&[type='radio']{", ";}}"], p, d, {
                    borderRadius: "9999px"
                }),
                u = a.c.textarea.withConfig({
                    displayName: "Input__Textarea",
                    componentId: "sc-19rce1w-1"
                })(["", ""], p);
            t.b = m
        },
        159: function(e, t, r) {
            "use strict";
            var n = r(19),
                o = r.n(n),
                a = r(7),
                i = r.n(a),
                c = r(0),
                s = r.n(c),
                l = r(156),
                d = r(158),
                p = r(171);
            const m = Object(c.forwardRef)(((e, t) => {
                let {
                    id: r,
                    name: n,
                    light: a = !1,
                    label: c,
                    description: m,
                    validate: u
                } = e, h = i()(e, ["id", "name", "light", "label", "description", "validate"]);
                return s.a.createElement(l.a, {
                    innerRef: t,
                    name: n,
                    validate: u
                }, (e => {
                    let {
                        field: t,
                        form: {
                            errors: n,
                            touched: i
                        }
                    } = e;
                    return s.a.createElement("div", null, c && s.a.createElement(p.a, {
                        htmlFor: r,
                        isLight: a
                    }, c), s.a.createElement(d.b, o()({
                        id: r
                    }, t, h, {
                        isLight: a,
                        hasError: !(!i[t.name] || !n[t.name])
                    })), i[t.name] && n[t.name] ? s.a.createElement("p", {
                        className: "input-help error"
                    }, n[t.name].charAt(0).toUpperCase() + n[t.name].slice(1)) : m ? s.a.createElement("p", {
                        className: "input-help"
                    }, m) : null)
                }))
            }));
            m.displayName = "Field", t.a = m
        },
        171: function(e, t, r) {
            "use strict";
            const n = r(1).c.label.withConfig({
                displayName: "Label",
                componentId: "sc-g780ms-0"
            })(["", ";", ";"], {
                display: "block",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                textTransform: "uppercase",
                "--tw-text-opacity": "1",
                color: "hsla(210, 16%, 82%, var(--tw-text-opacity))",
                marginBottom: "0.25rem",
                "@media (min-width: 640px)": {
                    marginBottom: "0.5rem"
                }
            }, (e => e.isLight && {
                "--tw-text-opacity": "1",
                color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
            }));
            t.a = n
        },
        271: function(e, t, r) {
            (function(t) {
                var n;
                n = function(e) {
                    return function(e) {
                        var t = {};

                        function r(n) {
                            if (t[n]) return t[n].exports;
                            var o = t[n] = {
                                i: n,
                                l: !1,
                                exports: {}
                            };
                            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
                        }
                        return r.m = e, r.c = t, r.d = function(e, t, n) {
                            r.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: n
                            })
                        }, r.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, r.t = function(e, t) {
                            if (1 & t && (e = r(e)), 8 & t) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var n = Object.create(null);
                            if (r.r(n), Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    value: e
                                }), 2 & t && "string" != typeof e)
                                for (var o in e) r.d(n, o, function(t) {
                                    return e[t]
                                }.bind(null, o));
                            return n
                        }, r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return r.d(t, "a", t), t
                        }, r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, r.p = "", r(r.s = 1)
                    }([function(t, r) {
                        t.exports = e
                    }, function(e, t, r) {
                        "use strict";
                        r.r(t);
                        var n = r(0),
                            o = r.n(n);

                        function a(e) {
                            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }, a(e)
                        }

                        function i(e) {
                            return i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }, i(e)
                        }

                        function c(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }

                        function s(e, t) {
                            return s = Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            }, s(e, t)
                        }

                        function l(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }
                        var d = /(http|https):\/\/(www)?.+\/recaptcha/,
                            p = function(e) {
                                function t(e) {
                                    var r, n, s;
                                    return function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), n = this, s = i(t).call(this, e), r = !s || "object" !== a(s) && "function" != typeof s ? c(n) : s, l(c(r), "container", null), l(c(r), "_isAvailable", (function() {
                                        return Boolean(window && window.grecaptcha && window.grecaptcha.ready)
                                    })), l(c(r), "_inject", (function() {
                                        if (r.props.inject && (a = d, !Array.from(document.scripts).reduce((function(e, t) {
                                                return e || a.test(t.src)
                                            }), !1))) {
                                            var e = r.props.hl ? "&hl=".concat(r.props.hl) : "",
                                                t = "".concat("https://recaptcha.net/recaptcha/api.js", "?render=explicit").concat(e);
                                            n = t, (o = document.createElement("script")).async = !0, o.defer = !0, o.src = n, document.head && document.head.appendChild(o)
                                        }
                                        var n, o, a
                                    })), l(c(r), "_prepare", (function() {
                                        var e = r.props,
                                            t = e.explicit,
                                            n = e.onLoad;
                                        window.grecaptcha.ready((function() {
                                            r.setState({
                                                ready: !0
                                            }, (function() {
                                                t || r.renderExplicitly(), n && n()
                                            }))
                                        }))
                                    })), l(c(r), "_renderRecaptcha", (function(e, t) {
                                        return window.grecaptcha.render(e, t)
                                    })), l(c(r), "_resetRecaptcha", (function() {
                                        return window.grecaptcha.reset(r.state.instanceId)
                                    })), l(c(r), "_executeRecaptcha", (function() {
                                        return window.grecaptcha.execute(r.state.instanceId)
                                    })), l(c(r), "_getResponseRecaptcha", (function() {
                                        return window.grecaptcha.getResponse(r.state.instanceId)
                                    })), l(c(r), "_stopTimer", (function() {
                                        r.state.timer && clearInterval(r.state.timer)
                                    })), l(c(r), "componentDidMount", (function() {
                                        if (r._inject(), r._isAvailable()) r._prepare();
                                        else {
                                            var e = setInterval((function() {
                                                r._isAvailable() && (r._prepare(), r._stopTimer())
                                            }), 500);
                                            r.setState({
                                                timer: e
                                            })
                                        }
                                    })), l(c(r), "shouldComponentUpdate", (function(e) {
                                        return r.props.className !== e.className || !r.state.rendered
                                    })), l(c(r), "componentWillUnmount", (function() {
                                        r._stopTimer(), r.state.rendered && r._resetRecaptcha()
                                    })), l(c(r), "renderExplicitly", (function() {
                                        return new Promise((function(e, t) {
                                            if (r.state.rendered) return t(new Error("This recaptcha instance has been already rendered."));
                                            if (!r.state.ready || !r.container) return t(new Error("Recaptcha is not ready for rendering yet."));
                                            var n = r._renderRecaptcha(r.container, {
                                                sitekey: r.props.sitekey,
                                                theme: r.props.theme,
                                                size: r.props.size,
                                                badge: r.state.invisible ? r.props.badge : null,
                                                tabindex: r.props.tabindex,
                                                callback: r.props.onVerify,
                                                "expired-callback": r.props.onExpire,
                                                "error-callback": r.props.onError,
                                                isolated: r.state.invisible ? r.props.isolated : null,
                                                hl: r.state.invisible ? null : r.props.hl
                                            });
                                            r.setState({
                                                instanceId: n,
                                                rendered: !0
                                            }, (function() {
                                                r.props.onRender && r.props.onRender(), e()
                                            }))
                                        }))
                                    })), l(c(r), "reset", (function() {
                                        return new Promise((function(e, t) {
                                            if (r.state.rendered) return r._resetRecaptcha(), e();
                                            t(new Error("This recaptcha instance did not render yet."))
                                        }))
                                    })), l(c(r), "execute", (function() {
                                        return new Promise((function(e, t) {
                                            return r.state.invisible ? (r.state.rendered && (r._executeRecaptcha(), e()), t(new Error("This recaptcha instance did not render yet."))) : t(new Error("Manual execution is only available for invisible size."))
                                        }))
                                    })), l(c(r), "getResponse", (function() {
                                        return new Promise((function(e, t) {
                                            if (r.state.rendered) return e(r._getResponseRecaptcha());
                                            t(new Error("This recaptcha instance did not render yet."))
                                        }))
                                    })), l(c(r), "render", (function() {
                                        var e = o.a.createElement("div", {
                                            id: r.props.id,
                                            className: r.props.className,
                                            ref: function(e) {
                                                return r.container = e
                                            }
                                        });
                                        return r.props.children ? r.props.children({
                                            renderExplicitly: r.renderExplicitly,
                                            reset: r.reset,
                                            execute: r.execute,
                                            getResponse: r.getResponse,
                                            recaptchaComponent: e
                                        }) : e
                                    })), r.state = {
                                        instanceId: null,
                                        ready: !1,
                                        rendered: !1,
                                        invisible: "invisible" === r.props.size,
                                        timer: null
                                    }, r
                                }
                                return function(e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), t && s(e, t)
                                }(t, e), t
                            }(n.Component);
                        l(p, "defaultProps", {
                            id: "",
                            className: "g-recaptcha",
                            theme: "light",
                            size: "normal",
                            badge: "bottomright",
                            tabindex: 0,
                            explicit: !1,
                            inject: !0,
                            isolated: !1,
                            hl: ""
                        }), t.default = p
                    }]).default
                }, e.exports = n(r(0))
            }).call(this, r(20))
        },
        410: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(0),
                o = r.n(n),
                a = r(28),
                i = r(5),
                c = r.n(i),
                s = r(1),
                l = r(17),
                d = r(19),
                p = r.n(d),
                m = r(7),
                u = r.n(m),
                h = r(10),
                w = r.n(h),
                g = r(156),
                b = r(62),
                f = r(54);

            function y() {
                const e = w()(["\n        ", "\n        max-width: 700px;\n    "]);
                return y = function() {
                    return e
                }, e
            }

            function v() {
                const e = w()(["\n        ", "\n    "]);
                return v = function() {
                    return e
                }, e
            }

            function x() {
                const e = w()(["\n        ", "\n    "]);
                return x = function() {
                    return e
                }, e
            }

            function _() {
                const e = w()(["\n        ", "\n    "]);
                return _ = function() {
                    return e
                }, e
            }
            const C = s.c.div.withConfig({
                displayName: "LoginFormContainer__Container",
                componentId: "sc-cyh04c-0"
            })(["", ";", ";", ";", ";"], Object(b.a)("sm")(_(), {
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto"
            }), Object(b.a)("md")(x(), {
                padding: "2.5rem"
            }), Object(b.a)("lg")(v(), {
                width: "60%"
            }), Object(b.a)("xl")(y(), {
                width: "100%"
            }));
            var E = Object(n.forwardRef)(((e, t) => {
                    let {
                        title: r
                    } = e, n = u()(e, ["title"]);
                    return o.a.createElement(C, null, r && o.a.createElement(O, {
                        $_css: {
                            fontSize: "1.875rem",
                            lineHeight: "2.25rem",
                            textAlign: "center",
                            "--tw-text-opacity": "1",
                            color: "hsla(214, 15%, 91%, var(--tw-text-opacity))",
                            fontWeight: "500",
                            paddingTop: "1rem",
                            paddingBottom: "1rem"
                        }
                    }, r), o.a.createElement(j, {
                        $_css2: {
                            marginBottom: "0.5rem",
                            paddingLeft: "0.25rem",
                            paddingRight: "0.25rem"
                        }
                    }), o.a.createElement(g.b, p()({}, n, {
                        ref: t
                    }), o.a.createElement(S, {
                        $_css3: {
                            width: "100%",
                            "--tw-bg-opacity": "1",
                            backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
                            "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                            borderRadius: "0.5rem",
                            padding: "1.5rem",
                            marginLeft: "0.25rem",
                            marginRight: "0.25rem",
                            "@media (min-width: 768px)": {
                                display: "flex",
                                paddingLeft: "0px"
                            }
                        }
                    }, o.a.createElement(k, {
                        $_css4: {
                            flex: "none",
                            userSelect: "none",
                            marginBottom: "1.5rem",
                            alignSelf: "center",
                            "@media (min-width: 768px)": {
                                marginBottom: "0px"
                            }
                        }
                    }, o.a.createElement(L, {
                        src: "/assets/svgs/pterodactyl.svg",
                        $_css5: {
                            display: "block",
                            width: "12rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                            "@media (min-width: 768px)": {
                                width: "16rem"
                            }
                        }
                    })), o.a.createElement(P, {
                        $_css6: {
                            flex: "1 1 0%"
                        }
                    }, n.children))), o.a.createElement(R, {
                        $_css7: {
                            textAlign: "center",
                            "--tw-text-opacity": "1",
                            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            marginTop: "1rem"
                        }
                    }, "© 2015 - ", (new Date).getFullYear(), " ", o.a.createElement(I, {
                        rel: "noopener nofollow noreferrer",
                        href: "https://pterodactyl.io",
                        target: "_blank",
                        $_css8: {
                            textDecoration: "none",
                            "--tw-text-opacity": "1",
                            color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                            ":hover": {
                                "--tw-text-opacity": "1",
                                color: "hsla(211, 13%, 65%, var(--tw-text-opacity))"
                            }
                        }
                    }, "Pterodactyl Software")))
                })),
                O = Object(s.c)("h2").withConfig({
                    displayName: "LoginFormContainer___StyledH",
                    componentId: "sc-cyh04c-1"
                })(["", ""], (e => e.$_css)),
                j = Object(s.c)(f.a).withConfig({
                    displayName: "LoginFormContainer___StyledFlashMessageRender",
                    componentId: "sc-cyh04c-2"
                })(["", ""], (e => e.$_css2)),
                S = Object(s.c)("div").withConfig({
                    displayName: "LoginFormContainer___StyledDiv",
                    componentId: "sc-cyh04c-3"
                })(["", ""], (e => e.$_css3)),
                k = Object(s.c)("div").withConfig({
                    displayName: "LoginFormContainer___StyledDiv2",
                    componentId: "sc-cyh04c-4"
                })(["", ""], (e => e.$_css4)),
                L = Object(s.c)("img").withConfig({
                    displayName: "LoginFormContainer___StyledImg",
                    componentId: "sc-cyh04c-5"
                })(["", ""], (e => e.$_css5)),
                P = Object(s.c)("div").withConfig({
                    displayName: "LoginFormContainer___StyledDiv3",
                    componentId: "sc-cyh04c-6"
                })(["", ""], (e => e.$_css6)),
                R = Object(s.c)("p").withConfig({
                    displayName: "LoginFormContainer___StyledP",
                    componentId: "sc-cyh04c-7"
                })(["", ""], (e => e.$_css7)),
                I = Object(s.c)("a").withConfig({
                    displayName: "LoginFormContainer___StyledA",
                    componentId: "sc-cyh04c-8"
                })(["", ""], (e => e.$_css8)),
                N = r(2),
                T = r(164),
                F = r(159),
                A = r(55),
                D = r(271),
                z = r.n(D),
                H = r(154);

            function $(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach((function(t) {
                        c()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var M = e => {
                    let {
                        history: t
                    } = e;
                    const r = Object(n.useRef)(null),
                        [a, i] = Object(n.useState)(""),
                        {
                            clearFlashes: c,
                            clearAndAddHttpError: s
                        } = Object(H.a)(),
                        {
                            enabled: d,
                            siteKey: p
                        } = Object(N.useStoreState)((e => e.settings.data.recaptcha));
                    Object(n.useEffect)((() => {
                        c()
                    }), []);
                    return o.a.createElement(g.c, {
                        onSubmit: (e, n) => {
                            let {
                                setSubmitting: o
                            } = n;
                            c(), !d || a ? (e => {
                                let {
                                    username: t,
                                    password: r,
                                    recaptchaData: n
                                } = e;
                                return new Promise(((e, o) => {
                                    l.a.get("/sanctum/csrf-cookie").then((() => l.a.post("/auth/login", {
                                        user: t,
                                        password: r,
                                        "g-recaptcha-response": n
                                    }))).then((t => t.data instanceof Object ? e({
                                        complete: t.data.data.complete,
                                        intended: t.data.data.intended || void 0,
                                        confirmationToken: t.data.data.confirmation_token || void 0
                                    }) : o(new Error("An error occurred while processing the login request.")))).catch(o)
                                }))
                            })(q(q({}, e), {}, {
                                recaptchaData: a
                            })).then((e => {
                                e.complete ? window.location = e.intended || "/" : t.replace("/auth/login/checkpoint", {
                                    token: e.confirmationToken
                                })
                            })).catch((e => {
                                console.error(e), i(""), r.current && r.current.reset(), o(!1), s({
                                    error: e
                                })
                            })) : r.current.execute().catch((e => {
                                console.error(e), o(!1), s({
                                    error: e
                                })
                            }))
                        },
                        initialValues: {
                            username: "",
                            password: ""
                        },
                        validationSchema: Object(T.d)().shape({
                            username: Object(T.f)().required("A username or email must be provided."),
                            password: Object(T.f)().required("Please enter your account password.")
                        })
                    }, (e => {
                        let {
                            isSubmitting: t,
                            setSubmitting: n,
                            submitForm: a
                        } = e;
                        return o.a.createElement(B, {
                            title: "Login to Continue"
                        }, o.a.createElement(F.a, {
                            light: !0,
                            type: "text",
                            label: "Username or Email",
                            name: "username",
                            disabled: t
                        }), o.a.createElement(V, null, o.a.createElement(F.a, {
                            light: !0,
                            type: "password",
                            label: "Password",
                            name: "password",
                            disabled: t
                        })), o.a.createElement(U, null, o.a.createElement(A.a, {
                            type: "submit",
                            size: "xlarge",
                            isLoading: t,
                            disabled: t
                        }, "Login")), d && o.a.createElement(z.a, {
                            ref: r,
                            size: "invisible",
                            sitekey: p || "_invalid_key",
                            onVerify: e => {
                                i(e), a()
                            },
                            onExpire: () => {
                                n(!1), i("")
                            }
                        }), o.a.createElement(W, null, o.a.createElement(Y, {
                            to: "/auth/password"
                        }, "Forgot password?")))
                    }))
                },
                B = Object(s.c)(E).withConfig({
                    displayName: "LoginContainer___StyledLoginFormContainer",
                    componentId: "sc-qtrnpk-0"
                })({
                    width: "100%",
                    display: "flex"
                }),
                V = Object(s.c)("div").withConfig({
                    displayName: "LoginContainer___StyledDiv",
                    componentId: "sc-qtrnpk-1"
                })({
                    marginTop: "1.5rem"
                }),
                U = Object(s.c)("div").withConfig({
                    displayName: "LoginContainer___StyledDiv2",
                    componentId: "sc-qtrnpk-2"
                })({
                    marginTop: "1.5rem"
                }),
                W = Object(s.c)("div").withConfig({
                    displayName: "LoginContainer___StyledDiv3",
                    componentId: "sc-qtrnpk-3"
                })({
                    marginTop: "1.5rem",
                    textAlign: "center"
                }),
                Y = Object(s.c)(a.a).withConfig({
                    displayName: "LoginContainer___StyledLink",
                    componentId: "sc-qtrnpk-4"
                })({
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                    letterSpacing: "0.025em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "hsla(209, 14%, 37%, var(--tw-text-opacity))"
                    }
                }),
                J = () => {
                    const e = Object(n.useRef)(null),
                        [t, r] = Object(n.useState)(""),
                        {
                            clearFlashes: o,
                            addFlash: a
                        } = Object(H.a)(),
                        {
                            enabled: i,
                            siteKey: c
                        } = Object(N.useStoreState)((e => e.settings.data.recaptcha));
                    Object(n.useEffect)((() => {
                        o()
                    }), []);
                    return n.createElement(g.c, {
                        onSubmit: (n, c) => {
                            let {
                                email: s
                            } = n, {
                                setSubmitting: d,
                                resetForm: p
                            } = c;
                            o(), !i || t ? ((e, t) => new Promise(((r, n) => {
                                l.a.post("/auth/password", {
                                    email: e,
                                    "g-recaptcha-response": t
                                }).then((e => r(e.data.status || ""))).catch(n)
                            })))(s, t).then((e => {
                                p(), a({
                                    type: "success",
                                    title: "Success",
                                    message: e
                                })
                            })).catch((e => {
                                console.error(e), a({
                                    type: "error",
                                    title: "Error",
                                    message: Object(l.c)(e)
                                })
                            })).then((() => {
                                r(""), e.current && e.current.reset(), d(!1)
                            })) : e.current.execute().catch((e => {
                                console.error(e), d(!1), a({
                                    type: "error",
                                    title: "Error",
                                    message: Object(l.c)(e)
                                })
                            }))
                        },
                        initialValues: {
                            email: ""
                        },
                        validationSchema: Object(T.d)().shape({
                            email: Object(T.f)().email("A valid email address must be provided to continue.").required("A valid email address must be provided to continue.")
                        })
                    }, (t => {
                        let {
                            isSubmitting: o,
                            setSubmitting: a,
                            submitForm: s
                        } = t;
                        return n.createElement(K, {
                            title: "Request Password Reset"
                        }, n.createElement(F.a, {
                            light: !0,
                            label: "Email",
                            description: "Enter your account email address to receive instructions on resetting your password.",
                            name: "email",
                            type: "email"
                        }), n.createElement(G, null, n.createElement(A.a, {
                            type: "submit",
                            size: "xlarge",
                            disabled: o,
                            isLoading: o
                        }, "Send Email")), i && n.createElement(z.a, {
                            ref: e,
                            size: "invisible",
                            sitekey: c || "_invalid_key",
                            onVerify: e => {
                                r(e), s()
                            },
                            onExpire: () => {
                                a(!1), r("")
                            }
                        }), n.createElement(Q, null, n.createElement(X, {
                            to: "/auth/login"
                        }, "Return to Login")))
                    }))
                },
                K = Object(s.c)(E).withConfig({
                    displayName: "ForgotPasswordContainer___StyledLoginFormContainer",
                    componentId: "sc-1crept1-0"
                })({
                    width: "100%",
                    display: "flex"
                }),
                G = Object(s.c)("div").withConfig({
                    displayName: "ForgotPasswordContainer___StyledDiv",
                    componentId: "sc-1crept1-1"
                })({
                    marginTop: "1.5rem"
                }),
                Q = Object(s.c)("div").withConfig({
                    displayName: "ForgotPasswordContainer___StyledDiv2",
                    componentId: "sc-1crept1-2"
                })({
                    marginTop: "1.5rem",
                    textAlign: "center"
                }),
                X = Object(s.c)(a.a).withConfig({
                    displayName: "ForgotPasswordContainer___StyledLink",
                    componentId: "sc-1crept1-3"
                })({
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                    letterSpacing: "0.025em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
                    }
                }),
                Z = r(158),
                ee = e => {
                    let {
                        match: t,
                        location: r
                    } = e;
                    const [a, i] = Object(n.useState)(""), {
                        clearFlashes: c,
                        addFlash: s
                    } = Object(N.useStoreActions)((e => e.flashes)), d = new URLSearchParams(r.search);
                    0 === a.length && d.get("email") && i(d.get("email") || "");
                    return o.a.createElement(g.c, {
                        onSubmit: (e, r) => {
                            let {
                                password: n,
                                passwordConfirmation: o
                            } = e, {
                                setSubmitting: i
                            } = r;
                            c(), ((e, t) => new Promise(((r, n) => {
                                l.a.post("/auth/password/reset", {
                                    email: e,
                                    token: t.token,
                                    password: t.password,
                                    password_confirmation: t.passwordConfirmation
                                }).then((e => r({
                                    redirectTo: e.data.redirect_to,
                                    sendToLogin: e.data.send_to_login
                                }))).catch(n)
                            })))(a, {
                                token: t.params.token,
                                password: n,
                                passwordConfirmation: o
                            }).then((() => {
                                window.location = "/"
                            })).catch((e => {
                                console.error(e), i(!1), s({
                                    type: "error",
                                    title: "Error",
                                    message: Object(l.c)(e)
                                })
                            }))
                        },
                        initialValues: {
                            password: "",
                            passwordConfirmation: ""
                        },
                        validationSchema: Object(T.d)().shape({
                            password: Object(T.f)().required("A new password is required.").min(8, "Your new password should be at least 8 characters in length."),
                            passwordConfirmation: Object(T.f)().required("Your new password does not match.").oneOf([Object(T.e)("password"), null], "Your new password does not match.")
                        })
                    }, (e => {
                        let {
                            isSubmitting: t
                        } = e;
                        return o.a.createElement(te, {
                            title: "Reset Password"
                        }, o.a.createElement("div", null, o.a.createElement("label", null, "Email"), o.a.createElement(Z.b, {
                            value: a,
                            isLight: !0,
                            disabled: !0
                        })), o.a.createElement(re, null, o.a.createElement(F.a, {
                            light: !0,
                            label: "New Password",
                            name: "password",
                            type: "password",
                            description: "Passwords must be at least 8 characters in length."
                        })), o.a.createElement(ne, null, o.a.createElement(F.a, {
                            light: !0,
                            label: "Confirm New Password",
                            name: "passwordConfirmation",
                            type: "password"
                        })), o.a.createElement(oe, null, o.a.createElement(A.a, {
                            size: "xlarge",
                            type: "submit",
                            disabled: t,
                            isLoading: t
                        }, "Reset Password")), o.a.createElement(ae, null, o.a.createElement(ie, {
                            to: "/auth/login"
                        }, "Return to Login")))
                    }))
                },
                te = Object(s.c)(E).withConfig({
                    displayName: "ResetPasswordContainer___StyledLoginFormContainer",
                    componentId: "sc-1gvxg4x-0"
                })({
                    width: "100%",
                    display: "flex"
                }),
                re = Object(s.c)("div").withConfig({
                    displayName: "ResetPasswordContainer___StyledDiv",
                    componentId: "sc-1gvxg4x-1"
                })({
                    marginTop: "1.5rem"
                }),
                ne = Object(s.c)("div").withConfig({
                    displayName: "ResetPasswordContainer___StyledDiv2",
                    componentId: "sc-1gvxg4x-2"
                })({
                    marginTop: "1.5rem"
                }),
                oe = Object(s.c)("div").withConfig({
                    displayName: "ResetPasswordContainer___StyledDiv3",
                    componentId: "sc-1gvxg4x-3"
                })({
                    marginTop: "1.5rem"
                }),
                ae = Object(s.c)("div").withConfig({
                    displayName: "ResetPasswordContainer___StyledDiv4",
                    componentId: "sc-1gvxg4x-4"
                })({
                    marginTop: "1.5rem",
                    textAlign: "center"
                }),
                ie = Object(s.c)(a.a).withConfig({
                    displayName: "ResetPasswordContainer___StyledLink",
                    componentId: "sc-1gvxg4x-5"
                })({
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                    letterSpacing: "0.025em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "hsla(209, 14%, 37%, var(--tw-text-opacity))"
                    }
                });
            const ce = Object(g.f)({
                handleSubmit: (e, t) => {
                    var r;
                    let {
                        code: n,
                        recoveryCode: o
                    } = e, {
                        setSubmitting: a,
                        props: {
                            clearAndAddHttpError: i,
                            location: c
                        }
                    } = t;
                    ((e, t, r) => new Promise(((n, o) => {
                        l.a.post("/auth/login/checkpoint", {
                            confirmation_token: e,
                            authentication_code: t,
                            recovery_token: r && r.length > 0 ? r : void 0
                        }).then((e => n({
                            complete: e.data.data.complete,
                            intended: e.data.data.intended || void 0
                        }))).catch(o)
                    })))((null === (r = c.state) || void 0 === r ? void 0 : r.token) || "", n, o).then((e => {
                        e.complete ? window.location = e.intended || "/" : a(!1)
                    })).catch((e => {
                        console.error(e), a(!1), i({
                            error: e
                        })
                    }))
                },
                mapPropsToValues: () => ({
                    code: "",
                    recoveryCode: ""
                })
            })((() => {
                const {
                    isSubmitting: e,
                    setFieldValue: t
                } = Object(g.e)(), [r, a] = Object(n.useState)(!1);
                return o.a.createElement(le, {
                    title: "Device Checkpoint"
                }, o.a.createElement(de, null, o.a.createElement(F.a, {
                    light: !0,
                    name: r ? "recoveryCode" : "code",
                    title: r ? "Recovery Code" : "Authentication Code",
                    description: r ? "Enter one of the recovery codes generated when you setup 2-Factor authentication on this account in order to continue." : "Enter the two-factor token generated by your device.",
                    type: "text",
                    autoComplete: "one-time-code",
                    autoFocus: !0
                })), o.a.createElement(pe, null, o.a.createElement(A.a, {
                    size: "xlarge",
                    type: "submit",
                    disabled: e,
                    isLoading: e
                }, "Continue")), o.a.createElement(me, null, o.a.createElement(ue, {
                    onClick: () => {
                        t("code", ""), t("recoveryCode", ""), a((e => !e))
                    }
                }, r ? "I Have My Device" : "I've Lost My Device")), o.a.createElement(he, null, o.a.createElement(we, {
                    to: "/auth/login"
                }, "Return to Login")))
            }));
            var se = e => {
                    var t;
                    let {
                        history: r,
                        location: n
                    } = e, a = u()(e, ["history", "location"]);
                    const {
                        clearAndAddHttpError: i
                    } = Object(H.a)();
                    return (null === (t = n.state) || void 0 === t ? void 0 : t.token) ? o.a.createElement(ce, p()({
                        clearAndAddHttpError: i,
                        history: r,
                        location: n
                    }, a)) : (r.replace("/auth/login"), null)
                },
                le = Object(s.c)(E).withConfig({
                    displayName: "LoginCheckpointContainer___StyledLoginFormContainer",
                    componentId: "sc-1a62wwr-0"
                })({
                    width: "100%",
                    display: "flex"
                }),
                de = Object(s.c)("div").withConfig({
                    displayName: "LoginCheckpointContainer___StyledDiv",
                    componentId: "sc-1a62wwr-1"
                })({
                    marginTop: "1.5rem"
                }),
                pe = Object(s.c)("div").withConfig({
                    displayName: "LoginCheckpointContainer___StyledDiv2",
                    componentId: "sc-1a62wwr-2"
                })({
                    marginTop: "1.5rem"
                }),
                me = Object(s.c)("div").withConfig({
                    displayName: "LoginCheckpointContainer___StyledDiv3",
                    componentId: "sc-1a62wwr-3"
                })({
                    marginTop: "1.5rem",
                    textAlign: "center"
                }),
                ue = Object(s.c)("span").withConfig({
                    displayName: "LoginCheckpointContainer___StyledSpan",
                    componentId: "sc-1a62wwr-4"
                })({
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                    letterSpacing: "0.025em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
                    }
                }),
                he = Object(s.c)("div").withConfig({
                    displayName: "LoginCheckpointContainer___StyledDiv4",
                    componentId: "sc-1a62wwr-5"
                })({
                    marginTop: "1.5rem",
                    textAlign: "center"
                }),
                we = Object(s.c)(a.a).withConfig({
                    displayName: "LoginCheckpointContainer___StyledLink",
                    componentId: "sc-1a62wwr-6"
                })({
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    "--tw-text-opacity": "1",
                    color: "hsla(211, 12%, 43%, var(--tw-text-opacity))",
                    letterSpacing: "0.025em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    ":hover": {
                        "--tw-text-opacity": "1",
                        color: "hsla(209, 18%, 30%, var(--tw-text-opacity))"
                    }
                }),
                ge = r(57),
                be = r(15);
            t.default = () => {
                const e = Object(be.g)(),
                    t = Object(be.h)(),
                    {
                        path: r
                    } = Object(a.i)();
                return o.a.createElement("div", {
                    className: "pt-8 xl:pt-32"
                }, o.a.createElement(a.e, {
                    location: t
                }, o.a.createElement(a.c, {
                    path: "".concat(r, "/login"),
                    component: M,
                    exact: !0
                }), o.a.createElement(a.c, {
                    path: "".concat(r, "/login/checkpoint"),
                    component: se
                }), o.a.createElement(a.c, {
                    path: "".concat(r, "/password"),
                    component: J,
                    exact: !0
                }), o.a.createElement(a.c, {
                    path: "".concat(r, "/password/reset/:token"),
                    component: ee
                }), o.a.createElement(a.c, {
                    path: "".concat(r, "/checkpoint")
                }), o.a.createElement(a.c, {
                    path: "*"
                }, o.a.createElement(ge.a, {
                    onBack: () => e.push("/auth/login")
                }))))
            }
        }
    }
]);