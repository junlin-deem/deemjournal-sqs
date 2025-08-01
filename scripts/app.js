!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var s = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          i.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 26));
})([
  function (t, e, i) {
    "use strict";
    (function (t, n) {
      i.d(e, "k", function () {
        return s;
      }),
        i.d(e, "l", function () {
          return r;
        }),
        i.d(e, "i", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return l;
        }),
        i.d(e, "b", function () {
          return u;
        }),
        i.d(e, "c", function () {
          return h;
        }),
        i.d(e, "d", function () {
          return c;
        }),
        i.d(e, "e", function () {
          return f;
        }),
        i.d(e, "f", function () {
          return d;
        }),
        i.d(e, "g", function () {
          return p;
        }),
        i.d(e, "h", function () {
          return _;
        }),
        i.d(e, "j", function () {
          return m;
        });
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
      const s =
          "undefined" != typeof window
            ? window
            : void 0 !== t && t.exports && void 0 !== n
            ? n
            : {},
        r = (function (t, e) {
          var i = {},
            n = t.document,
            s = (t.GreenSockGlobals = t.GreenSockGlobals || t);
          if (s.TweenLite) return s.TweenLite;
          var r,
            a,
            o,
            l,
            u,
            h = function (t) {
              var e,
                i = t.split("."),
                n = s;
              for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
              return n;
            },
            c = h("com.greensock"),
            f = function (t) {
              var e,
                i = [],
                n = t.length;
              for (e = 0; e !== n; i.push(t[e++]));
              return i;
            },
            d = function () {},
            p = (function () {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function (i) {
                return (
                  null != i &&
                  (i instanceof Array ||
                    ("object" == typeof i && !!i.push && t.call(i) === e))
                );
              };
            })(),
            _ = {},
            m = function (t, e, n, r) {
              (this.sc = _[t] ? _[t].sc : []),
                (_[t] = this),
                (this.gsClass = null),
                (this.func = n);
              var a = [];
              (this.check = function (o) {
                for (var l, u, c, f, d = e.length, p = d; --d > -1; )
                  (l = _[e[d]] || new m(e[d], [])).gsClass
                    ? ((a[d] = l.gsClass), p--)
                    : o && l.sc.push(this);
                if (0 === p && n)
                  for (
                    c = (u = ("com.greensock." + t).split(".")).pop(),
                      f = h(u.join("."))[c] = this.gsClass = n.apply(n, a),
                      r && (s[c] = i[c] = f),
                      d = 0;
                    d < this.sc.length;
                    d++
                  )
                    this.sc[d].check();
              }),
                this.check(!0);
            },
            v = (t._gsDefine = function (t, e, i, n) {
              return new m(t, e, i, n);
            }),
            g = (c._class = function (t, e, i) {
              return (
                (e = e || function () {}),
                v(
                  t,
                  [],
                  function () {
                    return e;
                  },
                  i
                ),
                e
              );
            });
          v.globals = s;
          var y = [0, 0, 1, 1],
            b = g(
              "easing.Ease",
              function (t, e, i, n) {
                (this._func = t),
                  (this._type = i || 0),
                  (this._power = n || 0),
                  (this._params = e ? y.concat(e) : y);
              },
              !0
            ),
            w = (b.map = {}),
            T = (b.register = function (t, e, i, n) {
              for (
                var s,
                  r,
                  a,
                  o,
                  l = e.split(","),
                  u = l.length,
                  h = (i || "easeIn,easeOut,easeInOut").split(",");
                --u > -1;

              )
                for (
                  r = l[u],
                    s = n ? g("easing." + r, null, !0) : c.easing[r] || {},
                    a = h.length;
                  --a > -1;

                )
                  (o = h[a]),
                    (w[r + "." + o] =
                      w[o + r] =
                      s[o] =
                        t.getRatio ? t : t[o] || new t());
            });
          for (
            (o = b.prototype)._calcEnd = !1,
              o.getRatio = function (t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  );
                var e = this._type,
                  i = this._power,
                  n =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t);
                return (
                  1 === i
                    ? (n *= n)
                    : 2 === i
                    ? (n *= n * n)
                    : 3 === i
                    ? (n *= n * n * n)
                    : 4 === i && (n *= n * n * n * n),
                  1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
                );
              },
              a = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                .length;
            --a > -1;

          )
            (o = r[a] + ",Power" + a),
              T(new b(null, null, 1, a), o, "easeOut", !0),
              T(
                new b(null, null, 2, a),
                o,
                "easeIn" + (0 === a ? ",easeNone" : "")
              ),
              T(new b(null, null, 3, a), o, "easeInOut");
          (w.linear = c.easing.Linear.easeIn),
            (w.swing = c.easing.Quad.easeInOut);
          var x = g("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((o = x.prototype).addEventListener = function (t, e, i, n, s) {
            s = s || 0;
            var r,
              a,
              o = this._listeners[t],
              h = 0;
            for (
              this !== l || u || l.wake(),
                null == o && (this._listeners[t] = o = []),
                a = o.length;
              --a > -1;

            )
              (r = o[a]).c === e && r.s === i
                ? o.splice(a, 1)
                : 0 === h && r.pr < s && (h = a + 1);
            o.splice(h, 0, { c: e, s: i, up: n, pr: s });
          }),
            (o.removeEventListener = function (t, e) {
              var i,
                n = this._listeners[t];
              if (n)
                for (i = n.length; --i > -1; )
                  if (n[i].c === e) return void n.splice(i, 1);
            }),
            (o.dispatchEvent = function (t) {
              var e,
                i,
                n,
                s = this._listeners[t];
              if (s)
                for (
                  (e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (n = s[e]) &&
                    (n.up
                      ? n.c.call(n.s || i, { type: t, target: i })
                      : n.c.call(n.s || i));
            });
          var k = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            C =
              Date.now ||
              function () {
                return new Date().getTime();
              },
            S = C();
          for (a = (r = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !k; )
            (k = t[r[a] + "RequestAnimationFrame"]),
              (P =
                t[r[a] + "CancelAnimationFrame"] ||
                t[r[a] + "CancelRequestAnimationFrame"]);
          g("Ticker", function (t, e) {
            var i,
              s,
              r,
              a,
              o,
              h = this,
              c = C(),
              f = !(!1 === e || !k) && "auto",
              p = 500,
              _ = 33,
              m = function (t) {
                var e,
                  n,
                  l = C() - S;
                l > p && (c += l - _),
                  (S += l),
                  (h.time = (S - c) / 1e3),
                  (e = h.time - o),
                  (!i || e > 0 || !0 === t) &&
                    (h.frame++, (o += e + (e >= a ? 0.004 : a - e)), (n = !0)),
                  !0 !== t && (r = s(m)),
                  n && h.dispatchEvent("tick");
              };
            x.call(h),
              (h.time = h.frame = 0),
              (h.tick = function () {
                m(!0);
              }),
              (h.lagSmoothing = function (t, e) {
                if (!arguments.length) return p < 1e10;
                (p = t || 1e10), (_ = Math.min(e, p, 0));
              }),
              (h.sleep = function () {
                null != r &&
                  (f && P ? P(r) : clearTimeout(r),
                  (s = d),
                  (r = null),
                  h === l && (u = !1));
              }),
              (h.wake = function (t) {
                null !== r
                  ? h.sleep()
                  : t
                  ? (c += -S + (S = C()))
                  : h.frame > 10 && (S = C() - p + 5),
                  (s =
                    0 === i
                      ? d
                      : f && k
                      ? k
                      : function (t) {
                          return setTimeout(t, (1e3 * (o - h.time) + 1) | 0);
                        }),
                  h === l && (u = !0),
                  m(2);
              }),
              (h.fps = function (t) {
                if (!arguments.length) return i;
                (a = 1 / ((i = t) || 60)), (o = this.time + a), h.wake();
              }),
              (h.useRAF = function (t) {
                if (!arguments.length) return f;
                h.sleep(), (f = t), h.fps(i);
              }),
              h.fps(t),
              setTimeout(function () {
                "auto" === f &&
                  h.frame < 5 &&
                  "hidden" !== (n || {}).visibilityState &&
                  h.useRAF(!1);
              }, 1500);
          }),
            ((o = c.Ticker.prototype =
              new c.events.EventDispatcher()).constructor = c.Ticker);
          var O = g("core.Animation", function (t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !0 === e.immediateRender),
              (this.data = e.data),
              (this._reversed = !0 === e.reversed),
              W)
            ) {
              u || l.wake();
              var i = this.vars.useFrames ? V : W;
              i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
          });
          (l = O.ticker = new c.Ticker()),
            ((o = O.prototype)._dirty = o._gc = o._initted = o._paused = !1),
            (o._totalTime = o._time = 0),
            (o._rawPrevTime = -1),
            (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
            (o._paused = !1);
          var M = function () {
            u &&
              C() - S > 2e3 &&
              ("hidden" !== (n || {}).visibilityState || !l.lagSmoothing()) &&
              l.wake();
            var t = setTimeout(M, 2e3);
            t.unref && t.unref();
          };
          M(),
            (o.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (o.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (o.resume = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!1);
            }),
            (o.seek = function (t, e) {
              return this.totalTime(Number(t), !1 !== e);
            }),
            (o.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (o.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (o.render = function (t, e, i) {}),
            (o.invalidate = function () {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              );
            }),
            (o.isActive = function () {
              var t,
                e = this._timeline,
                i = this._startTime;
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-7)
              );
            }),
            (o._enabled = function (t, e) {
              return (
                u || l.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              );
            }),
            (o._kill = function (t, e) {
              return this._enabled(!1, !1);
            }),
            (o.kill = function (t, e) {
              return this._kill(t, e), this;
            }),
            (o._uncache = function (t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline);
              return this;
            }),
            (o._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i;
            }),
            (o._callback = function (t) {
              var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                s = e[t + "Scope"] || e.callbackScope || this;
              switch (n ? n.length : 0) {
                case 0:
                  i.call(s);
                  break;
                case 1:
                  i.call(s, n[0]);
                  break;
                case 2:
                  i.call(s, n[0], n[1]);
                  break;
                default:
                  i.apply(s, n);
              }
            }),
            (o.eventCallback = function (t, e, i, n) {
              if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e
                  ? delete s[t]
                  : ((s[t] = e),
                    (s[t + "Params"] =
                      p(i) && -1 !== i.join("").indexOf("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (s[t + "Scope"] = n)),
                  "onUpdate" === t && (this._onUpdate = e);
              }
              return this;
            }),
            (o.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (o.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration);
            }),
            (o.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              );
            }),
            (o.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time;
            }),
            (o.totalTime = function (t, e, i) {
              if ((u || l.wake(), !arguments.length)) return this._totalTime;
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration();
                  var n = this._totalDuration,
                    s = this._timeline;
                  if (
                    (t > n && !i && (t = n),
                    (this._startTime =
                      (this._paused ? this._pauseTime : s._time) -
                      (this._reversed ? n - t : t) / this._timeScale),
                    s._dirty || this._uncache(!1),
                    s._timeline)
                  )
                    for (; s._timeline; )
                      s._timeline._time !==
                        (s._startTime + s._totalTime) / s._timeScale &&
                        s.totalTime(s._totalTime, !0),
                        (s = s._timeline);
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (D.length && $(), this.render(t, e, !1), D.length && $());
              }
              return this;
            }),
            (o.progress = o.totalProgress =
              function (t, e) {
                var i = this.duration();
                return arguments.length
                  ? this.totalTime(i * t, e)
                  : i
                  ? this._time / i
                  : this.ratio;
              }),
            (o.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime;
            }),
            (o.endTime = function (t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              );
            }),
            (o.timeScale = function (t) {
              if (!arguments.length) return this._timeScale;
              var e, i;
              for (
                t = t || 1e-10,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline);
              return this;
            }),
            (o.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed;
            }),
            (o.paused = function (t) {
              if (!arguments.length) return this._paused;
              var e,
                i,
                n = this._timeline;
              return (
                t != this._paused &&
                  n &&
                  (u || t || l.wake(),
                  (i = (e = n.rawTime()) - this._pauseTime),
                  !t &&
                    n.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = n.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              );
            });
          var j = g("core.SimpleTimeline", function (t) {
            O.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((o = j.prototype = new O()).constructor = j),
            (o.kill()._gc = !1),
            (o._first = o._last = o._recent = null),
            (o._sortChildren = !1),
            (o.add = o.insert =
              function (t, e, i, n) {
                var s, r;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (s = this._last),
                  this._sortChildren)
                )
                  for (r = t._startTime; s && s._startTime > r; ) s = s._prev;
                return (
                  s
                    ? ((t._next = s._next), (s._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = s),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                );
              }),
            (o._remove = function (t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              );
            }),
            (o.render = function (t, e, i) {
              var n,
                s = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                (n = s._next),
                  (s._active || (t >= s._startTime && !s._paused && !s._gc)) &&
                    (s._reversed
                      ? s.render(
                          (s._dirty ? s.totalDuration() : s._totalDuration) -
                            (t - s._startTime) * s._timeScale,
                          e,
                          i
                        )
                      : s.render((t - s._startTime) * s._timeScale, e, i)),
                  (s = n);
            }),
            (o.rawTime = function () {
              return u || l.wake(), this._totalTime;
            });
          var R = g(
              "TweenLite",
              function (e, i, n) {
                if (
                  (O.call(this, i, n),
                  (this.render = R.prototype.render),
                  null == e)
                )
                  throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                var s,
                  r,
                  a,
                  o =
                    e.jquery ||
                    (e.length &&
                      e !== t &&
                      e[0] &&
                      (e[0] === t ||
                        (e[0].nodeType && e[0].style && !e.nodeType))),
                  l = this.vars.overwrite;
                if (
                  ((this._overwrite = l =
                    null == l
                      ? U[R.defaultOverwrite]
                      : "number" == typeof l
                      ? l >> 0
                      : U[l]),
                  (o || e instanceof Array || (e.push && p(e))) &&
                    "number" != typeof e[0])
                )
                  for (
                    this._targets = a = f(e),
                      this._propLookup = [],
                      this._siblings = [],
                      s = 0;
                    s < a.length;
                    s++
                  )
                    (r = a[s])
                      ? "string" != typeof r
                        ? r.length &&
                          r !== t &&
                          r[0] &&
                          (r[0] === t ||
                            (r[0].nodeType && r[0].style && !r.nodeType))
                          ? (a.splice(s--, 1),
                            (this._targets = a = a.concat(f(r))))
                          : ((this._siblings[s] = G(r, this, !1)),
                            1 === l &&
                              this._siblings[s].length > 1 &&
                              Z(r, this, null, 1, this._siblings[s]))
                        : "string" == typeof (r = a[s--] = R.selector(r)) &&
                          a.splice(s + 1, 1)
                      : a.splice(s--, 1);
                else
                  (this._propLookup = {}),
                    (this._siblings = G(e, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      Z(e, this, null, 1, this._siblings);
                (this.vars.immediateRender ||
                  (0 === i &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-10),
                  this.render(Math.min(0, -this._delay)));
              },
              !0
            ),
            E = function (e) {
              return (
                e &&
                e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
              );
            };
          ((o = R.prototype = new O()).constructor = R),
            (o.kill()._gc = !1),
            (o.ratio = 0),
            (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
            (o._notifyPluginsOfEnabled = o._lazy = !1),
            (R.version = "2.0.1"),
            (R.defaultEase = o._ease = new b(null, null, 1, 1)),
            (R.defaultOverwrite = "auto"),
            (R.ticker = l),
            (R.autoSleep = 120),
            (R.lagSmoothing = function (t, e) {
              l.lagSmoothing(t, e);
            }),
            (R.selector =
              t.$ ||
              t.jQuery ||
              function (e) {
                var i = t.$ || t.jQuery;
                return i
                  ? ((R.selector = i), i(e))
                  : (n || (n = t.document),
                    n
                      ? n.querySelectorAll
                        ? n.querySelectorAll(e)
                        : n.getElementById(
                            "#" === e.charAt(0) ? e.substr(1) : e
                          )
                      : e);
              });
          var D = [],
            A = {},
            I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            z = /[\+-]=-?[\.\d]/,
            L = function (t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next);
            },
            q = function (t, e, i, n) {
              var s,
                r,
                a,
                o,
                l,
                u,
                h,
                c = [],
                f = 0,
                d = "",
                p = 0;
              for (
                c.start = t,
                  c.end = e,
                  t = c[0] = t + "",
                  e = c[1] = e + "",
                  i && (i(c), (t = c[0]), (e = c[1])),
                  c.length = 0,
                  s = t.match(I) || [],
                  r = e.match(I) || [],
                  n &&
                    ((n._next = null),
                    (n.blob = 1),
                    (c._firstPT = c._applyPT = n)),
                  l = r.length,
                  o = 0;
                o < l;
                o++
              )
                (h = r[o]),
                  (d += (u = e.substr(f, e.indexOf(h, f) - f)) || !o ? u : ","),
                  (f += u.length),
                  p ? (p = (p + 1) % 5) : "rgba(" === u.substr(-5) && (p = 1),
                  h === s[o] || s.length <= o
                    ? (d += h)
                    : (d && (c.push(d), (d = "")),
                      (a = parseFloat(s[o])),
                      c.push(a),
                      (c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: a,
                        c:
                          ("=" === h.charAt(1)
                            ? parseInt(h.charAt(0) + "1", 10) *
                              parseFloat(h.substr(2))
                            : parseFloat(h) - a) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : 0,
                      })),
                  (f += h.length);
              return (
                (d += e.substr(f)) && c.push(d),
                (c.setRatio = L),
                z.test(e) && (c.end = null),
                c
              );
            },
            N = function (t, e, i, n, s, r, a, o, l) {
              "function" == typeof n && (n = n(l || 0, t));
              var u = typeof t[e],
                h =
                  "function" !== u
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                c = "get" !== i ? i : h ? (a ? t[h](a) : t[h]()) : t[e],
                f = "string" == typeof n && "=" === n.charAt(1),
                d = {
                  t: t,
                  p: e,
                  s: c,
                  f: "function" === u,
                  pg: 0,
                  n: s || e,
                  m: r ? ("function" == typeof r ? r : Math.round) : 0,
                  pr: 0,
                  c: f
                    ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
                    : parseFloat(n) - c || 0,
                };
              if (
                (("number" != typeof c || ("number" != typeof n && !f)) &&
                  (a ||
                  isNaN(c) ||
                  (!f && isNaN(n)) ||
                  "boolean" == typeof c ||
                  "boolean" == typeof n
                    ? ((d.fp = a),
                      (d = {
                        t: q(
                          c,
                          f
                            ? parseFloat(d.s) +
                                d.c +
                                (d.s + "").replace(/[0-9\-\.]/g, "")
                            : n,
                          o || R.defaultStringFilter,
                          d
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((d.s = parseFloat(c)),
                      f || (d.c = parseFloat(n) - d.s || 0))),
                d.c)
              )
                return (
                  (d._next = this._firstPT) && (d._next._prev = d),
                  (this._firstPT = d),
                  d
                );
            },
            F = (R._internals = {
              isArray: p,
              isSelector: E,
              lazyTweens: D,
              blobDif: q,
            }),
            B = (R._plugins = {}),
            H = (F.tweenLookup = {}),
            Y = 0,
            X = (F.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
            }),
            U = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0,
            },
            V = (O._rootFramesTimeline = new j()),
            W = (O._rootTimeline = new j()),
            J = 30,
            $ = (F.lazyRender = function () {
              var t,
                e = D.length;
              for (A = {}; --e > -1; )
                (t = D[e]) &&
                  !1 !== t._lazy &&
                  (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
              D.length = 0;
            });
          (W._startTime = l.time),
            (V._startTime = l.frame),
            (W._active = V._active = !0),
            setTimeout($, 1),
            (O._updateRoot = R.render =
              function () {
                var t, e, i;
                if (
                  (D.length && $(),
                  W.render((l.time - W._startTime) * W._timeScale, !1, !1),
                  V.render((l.frame - V._startTime) * V._timeScale, !1, !1),
                  D.length && $(),
                  l.frame >= J)
                ) {
                  for (i in ((J = l.frame + (parseInt(R.autoSleep, 10) || 120)),
                  H)) {
                    for (t = (e = H[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i];
                  }
                  if (
                    (!(i = W._first) || i._paused) &&
                    R.autoSleep &&
                    !V._first &&
                    1 === l._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next;
                    i || l.sleep();
                  }
                }
              }),
            l.addEventListener("tick", O._updateRoot);
          var G = function (t, e, i) {
              var n,
                s,
                r = t._gsTweenID;
              if (
                (H[r || (t._gsTweenID = r = "t" + Y++)] ||
                  (H[r] = { target: t, tweens: [] }),
                e && (((n = H[r].tweens)[(s = n.length)] = e), i))
              )
                for (; --s > -1; ) n[s] === e && n.splice(s, 1);
              return H[r].tweens;
            },
            Q = function (t, e, i, n) {
              var s,
                r,
                a = t.vars.onOverwrite;
              return (
                a && (s = a(t, e, i, n)),
                (a = R.onOverwrite) && (r = a(t, e, i, n)),
                !1 !== s && !1 !== r
              );
            },
            Z = function (t, e, i, n, s) {
              var r, a, o, l;
              if (1 === n || n >= 4) {
                for (l = s.length, r = 0; r < l; r++)
                  if ((o = s[r]) !== e)
                    o._gc || (o._kill(null, t, e) && (a = !0));
                  else if (5 === n) break;
                return a;
              }
              var u,
                h = e._startTime + 1e-10,
                c = [],
                f = 0,
                d = 0 === e._duration;
              for (r = s.length; --r > -1; )
                (o = s[r]) === e ||
                  o._gc ||
                  o._paused ||
                  (o._timeline !== e._timeline
                    ? ((u = u || K(e, 0, d)), 0 === K(o, u, d) && (c[f++] = o))
                    : o._startTime <= h &&
                      o._startTime + o.totalDuration() / o._timeScale > h &&
                      (((d || !o._initted) && h - o._startTime <= 2e-10) ||
                        (c[f++] = o)));
              for (r = f; --r > -1; )
                if (
                  ((o = c[r]),
                  2 === n && o._kill(i, t, e) && (a = !0),
                  2 !== n || (!o._firstPT && o._initted))
                ) {
                  if (2 !== n && !Q(o, e)) continue;
                  o._enabled(!1, !1) && (a = !0);
                }
              return a;
            },
            K = function (t, e, i) {
              for (
                var n = t._timeline, s = n._timeScale, r = t._startTime;
                n._timeline;

              ) {
                if (((r += n._startTime), (s *= n._timeScale), n._paused))
                  return -100;
                n = n._timeline;
              }
              return (r /= s) > e
                ? r - e
                : (i && r === e) || (!t._initted && r - e < 2e-10)
                ? 1e-10
                : (r += t.totalDuration() / t._timeScale / s) > e + 1e-10
                ? 0
                : r - e - 1e-10;
            };
          (o._init = function () {
            var t,
              e,
              i,
              n,
              s,
              r,
              a = this.vars,
              o = this._overwrittenProps,
              l = this._duration,
              u = !!a.immediateRender,
              h = a.ease;
            if (a.startAt) {
              for (n in (this._startAt &&
                (this._startAt.render(-1, !0), this._startAt.kill()),
              (s = {}),
              a.startAt))
                s[n] = a.startAt[n];
              if (
                ((s.data = "isStart"),
                (s.overwrite = !1),
                (s.immediateRender = !0),
                (s.lazy = u && !1 !== a.lazy),
                (s.startAt = s.delay = null),
                (s.onUpdate = a.onUpdate),
                (s.onUpdateParams = a.onUpdateParams),
                (s.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                (this._startAt = R.to(this.target || {}, 0, s)),
                u)
              )
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return;
            } else if (a.runBackwards && 0 !== l)
              if (this._startAt)
                this._startAt.render(-1, !0),
                  this._startAt.kill(),
                  (this._startAt = null);
              else {
                for (n in (0 !== this._time && (u = !1), (i = {}), a))
                  (X[n] && "autoCSS" !== n) || (i[n] = a[n]);
                if (
                  ((i.overwrite = 0),
                  (i.data = "isFromStart"),
                  (i.lazy = u && !1 !== a.lazy),
                  (i.immediateRender = u),
                  (this._startAt = R.to(this.target, 0, i)),
                  u)
                ) {
                  if (0 === this._time) return;
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null);
              }
            if (
              ((this._ease = h =
                h
                  ? h instanceof b
                    ? h
                    : "function" == typeof h
                    ? new b(h, a.easeParams)
                    : w[h] || R.defaultEase
                  : R.defaultEase),
              a.easeParams instanceof Array &&
                h.config &&
                (this._ease = h.config.apply(h, a.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (r = this._targets.length, t = 0; t < r; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  o ? o[t] : null,
                  t
                ) && (e = !0);
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                o,
                0
              );
            if (
              (e && R._onPluginEvent("_onInitAllProps", this),
              o &&
                (this._firstPT ||
                  ("function" != typeof this.target && this._enabled(!1, !1))),
              a.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = a.onUpdate), (this._initted = !0);
          }),
            (o._initProps = function (e, i, n, s, r) {
              var a, o, l, u, h, c;
              if (null == e) return !1;
              for (a in (A[e._gsTweenID] && $(),
              this.vars.css ||
                (e.style &&
                  e !== t &&
                  e.nodeType &&
                  B.css &&
                  !1 !== this.vars.autoCSS &&
                  (function (t, e) {
                    var i,
                      n = {};
                    for (i in t)
                      X[i] ||
                        (i in e &&
                          "transform" !== i &&
                          "x" !== i &&
                          "y" !== i &&
                          "width" !== i &&
                          "height" !== i &&
                          "className" !== i &&
                          "border" !== i) ||
                        !(!B[i] || (B[i] && B[i]._autoCSS)) ||
                        ((n[i] = t[i]), delete t[i]);
                    t.css = n;
                  })(this.vars, e)),
              this.vars))
                if (((c = this.vars[a]), X[a]))
                  c &&
                    (c instanceof Array || (c.push && p(c))) &&
                    -1 !== c.join("").indexOf("{self}") &&
                    (this.vars[a] = c = this._swapSelfInParams(c, this));
                else if (
                  B[a] &&
                  (u = new B[a]())._onInitTween(e, this.vars[a], this, r)
                ) {
                  for (
                    this._firstPT = h =
                      {
                        _next: this._firstPT,
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: a,
                        pg: 1,
                        pr: u._priority,
                        m: 0,
                      },
                      o = u._overwriteProps.length;
                    --o > -1;

                  )
                    i[u._overwriteProps[o]] = this._firstPT;
                  (u._priority || u._onInitAllProps) && (l = !0),
                    (u._onDisable || u._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    h._next && (h._next._prev = h);
                } else
                  i[a] = N.call(
                    this,
                    e,
                    a,
                    "get",
                    c,
                    a,
                    0,
                    null,
                    this.vars.stringFilter,
                    r
                  );
              return s && this._kill(s, e)
                ? this._initProps(e, i, n, s, r)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  n.length > 1 &&
                  Z(e, this, i, this._overwrite, n)
                ? (this._kill(i, e), this._initProps(e, i, n, s, r))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (A[e._gsTweenID] = !0),
                  l);
            }),
            (o.render = function (t, e, i) {
              var n,
                s,
                r,
                a,
                o = this._time,
                l = this._duration,
                u = this._rawPrevTime;
              if (t >= l - 1e-7 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((n = !0),
                    (s = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (u < 0 ||
                      (t <= 0 && t >= -1e-7) ||
                      (1e-10 === u && "isPause" !== this.data)) &&
                      u !== t &&
                      ((i = !0), u > 1e-10 && (s = "onReverseComplete")),
                    (this._rawPrevTime = a = !e || t || u === t ? t : 1e-10));
              else if (t < 1e-7)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== o || (0 === l && u > 0)) &&
                    ((s = "onReverseComplete"), (n = this._reversed)),
                  t < 0 &&
                    ((this._active = !1),
                    0 === l &&
                      (this._initted || !this.vars.lazy || i) &&
                      (u >= 0 &&
                        (1e-10 !== u || "isPause" !== this.data) &&
                        (i = !0),
                      (this._rawPrevTime = a =
                        !e || t || u === t ? t : 1e-10))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0);
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var h = t / l,
                  c = this._easeType,
                  f = this._easePower;
                (1 === c || (3 === c && h >= 0.5)) && (h = 1 - h),
                  3 === c && (h *= 2),
                  1 === f
                    ? (h *= h)
                    : 2 === f
                    ? (h *= h * h)
                    : 3 === f
                    ? (h *= h * h * h)
                    : 4 === f && (h *= h * h * h * h),
                  (this.ratio =
                    1 === c
                      ? 1 - h
                      : 2 === c
                      ? h
                      : t / l < 0.5
                      ? h / 2
                      : 1 - h / 2);
              } else this.ratio = this._ease.getRatio(t / l);
              if (this._time !== o || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return;
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = o),
                      (this._rawPrevTime = u),
                      D.push(this),
                      void (this._lazy = [t, e])
                    );
                  this._time && !n
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : n &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ));
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== o &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === o &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : s || (s = "_dummyGS")),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback("onStart"))),
                    r = this._firstPT;
                  r;

                )
                  r.f
                    ? r.t[r.p](r.c * this.ratio + r.s)
                    : (r.t[r.p] = r.c * this.ratio + r.s),
                    (r = r._next);
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== o || n || i) &&
                      this._callback("onUpdate"))),
                  s &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      n &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[s] && this._callback(s),
                      0 === l &&
                        1e-10 === this._rawPrevTime &&
                        1e-10 !== a &&
                        (this._rawPrevTime = 0)));
              }
            }),
            (o._kill = function (t, e, i) {
              if (
                ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1);
              e =
                "string" != typeof e
                  ? e || this._targets || this.target
                  : R.selector(e) || e;
              var n,
                s,
                r,
                a,
                o,
                l,
                u,
                h,
                c,
                f =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline;
              if ((p(e) || E(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                  this._kill(t, e[n], i) && (l = !0);
              else {
                if (this._targets) {
                  for (n = this._targets.length; --n > -1; )
                    if (e === this._targets[n]) {
                      (o = this._propLookup[n] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (s = this._overwrittenProps[n] =
                          t ? this._overwrittenProps[n] || {} : "all");
                      break;
                    }
                } else {
                  if (e !== this.target) return !1;
                  (o = this._propLookup),
                    (s = this._overwrittenProps =
                      t ? this._overwrittenProps || {} : "all");
                }
                if (o) {
                  if (
                    ((u = t || o),
                    (h =
                      t !== s &&
                      "all" !== s &&
                      t !== o &&
                      ("object" != typeof t || !t._tempKill)),
                    i && (R.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (r in u) o[r] && (c || (c = []), c.push(r));
                    if ((c || !t) && !Q(this, i, e, c)) return !1;
                  }
                  for (r in u)
                    (a = o[r]) &&
                      (f && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                      a.pg && a.t._kill(u) && (l = !0),
                      (a.pg && 0 !== a.t._overwriteProps.length) ||
                        (a._prev
                          ? (a._prev._next = a._next)
                          : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        (a._next = a._prev = null)),
                      delete o[r]),
                      h && (s[r] = 1);
                  !this._firstPT && this._initted && this._enabled(!1, !1);
                }
              }
              return l;
            }),
            (o.invalidate = function () {
              return (
                this._notifyPluginsOfEnabled &&
                  R._onPluginEvent("_onDisable", this),
                (this._firstPT =
                  this._overwrittenProps =
                  this._startAt =
                  this._onUpdate =
                    null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                O.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-10),
                  this.render(Math.min(0, -this._delay))),
                this
              );
            }),
            (o._enabled = function (t, e) {
              if ((u || l.wake(), t && this._gc)) {
                var i,
                  n = this._targets;
                if (n)
                  for (i = n.length; --i > -1; )
                    this._siblings[i] = G(n[i], this, !0);
                else this._siblings = G(this.target, this, !0);
              }
              return (
                O.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              );
            }),
            (R.to = function (t, e, i) {
              return new R(t, e, i);
            }),
            (R.from = function (t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new R(t, e, i)
              );
            }),
            (R.fromTo = function (t, e, i, n) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                new R(t, e, n)
              );
            }),
            (R.delayedCall = function (t, e, i, n, s) {
              return new R(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0,
              });
            }),
            (R.set = function (t, e) {
              return new R(t, 0, e);
            }),
            (R.getTweensOf = function (t, e) {
              if (null == t) return [];
              var i, n, s, r;
              if (
                ((t = "string" != typeof t ? t : R.selector(t) || t),
                (p(t) || E(t)) && "number" != typeof t[0])
              ) {
                for (i = t.length, n = []; --i > -1; )
                  n = n.concat(R.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                  for (r = n[i], s = i; --s > -1; )
                    r === n[s] && n.splice(i, 1);
              } else if (t._gsTweenID)
                for (i = (n = G(t).concat()).length; --i > -1; )
                  (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
              return n || [];
            }),
            (R.killTweensOf = R.killDelayedCallsTo =
              function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var n = R.getTweensOf(t, e), s = n.length; --s > -1; )
                  n[s]._kill(i, t);
              });
          var tt = g(
            "plugins.TweenPlugin",
            function (t, e) {
              (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = tt.prototype);
            },
            !0
          );
          if (
            ((o = tt.prototype),
            (tt.version = "1.19.0"),
            (tt.API = 2),
            (o._firstPT = null),
            (o._addTween = N),
            (o.setRatio = L),
            (o._kill = function (t) {
              var e,
                i = this._overwriteProps,
                n = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; n; )
                null != t[n.n] &&
                  (n._next && (n._next._prev = n._prev),
                  n._prev
                    ? ((n._prev._next = n._next), (n._prev = null))
                    : this._firstPT === n && (this._firstPT = n._next)),
                  (n = n._next);
              return !1;
            }),
            (o._mod = o._roundProps =
              function (t) {
                for (var e, i = this._firstPT; i; )
                  (e =
                    t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + "_").join("")])) &&
                    "function" == typeof e &&
                    (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                    (i = i._next);
              }),
            (R._onPluginEvent = function (t, e) {
              var i,
                n,
                s,
                r,
                a,
                o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o; ) {
                  for (a = o._next, n = s; n && n.pr > o.pr; ) n = n._next;
                  (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (s = o),
                    (o._next = n) ? (n._prev = o) : (r = o),
                    (o = a);
                }
                o = e._firstPT = s;
              }
              for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                  (o = o._next);
              return i;
            }),
            (tt.activate = function (t) {
              for (var e = t.length; --e > -1; )
                t[e].API === tt.API && (B[new t[e]()._propName] = t[e]);
              return !0;
            }),
            (v.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e,
                i = t.propName,
                n = t.priority || 0,
                s = t.overwriteProps,
                r = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps",
                },
                a = g(
                  "plugins." +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    "Plugin",
                  function () {
                    tt.call(this, i, n), (this._overwriteProps = s || []);
                  },
                  !0 === t.global
                ),
                o = (a.prototype = new tt(i));
              for (e in ((o.constructor = a), (a.API = t.API), r))
                "function" == typeof t[e] && (o[r[e]] = t[e]);
              return (a.version = t.version), tt.activate([a]), a;
            }),
            (r = t._gsQueue))
          ) {
            for (a = 0; a < r.length; a++) r[a]();
            for (o in _)
              _[o].func ||
                t.console.log("GSAP encountered missing dependency: " + o);
          }
          return (u = !1), R;
        })(s),
        a = s.com.greensock,
        o = a.core.SimpleTimeline,
        l = a.core.Animation,
        u = s.Ease,
        h = s.Linear,
        c = h,
        f = s.Power1,
        d = s.Power2,
        p = s.Power3,
        _ = s.Power4,
        m = s.TweenPlugin;
      a.events.EventDispatcher;
    }).call(this, i(92)(t), i(9));
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.emitter =
        e.cache =
        e.log =
        e.env =
        e.config =
        e.util =
        e.dom =
        e.detect =
          void 0);
    var n = c(i(17)),
      s = c(i(8)),
      r = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(18)),
      a = c(i(10)),
      o = c(i(19)),
      l = c(i(11)),
      u = c(i(61)),
      h = c(i(62));
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (e.detect = n.default),
      (e.dom = s.default),
      (e.util = r),
      (e.config = a.default),
      (e.env = o.default),
      (e.log = l.default),
      (e.cache = u.default),
      (e.emitter = h.default);
  },
  function (t, e, i) {
    var n = i(3),
      s = [],
      r = function (t, e) {
        if (
          ((this._hobo = n.version),
          (this._context = e && e.nodeType && 1 === e.nodeType ? e : document),
          t === window || t === document || (t.nodeType && 1 === t.nodeType))
        )
          (this._selector = ""), (t = [t]);
        else if ("string" == typeof t)
          if (((t = n.trimString(t)), n.rTag.test(t))) {
            t = t.replace(n.rDocType, "");
            var i = document.createElement("hobo");
            (i.innerHTML = t), (t = n.makeArray(i.children)), (i = null);
          } else
            (this._selector = t),
              (t = n.makeArray(this._context.querySelectorAll(t)));
        else
          void 0 !== t.length && ((this._selector = ""), (t = n.makeArray(t)));
        (this._events = {}), (this.length = t.length);
        for (var s = this.length; s--; ) this[s] = t[s];
        this.forEach(n.makeData);
      };
    (r.prototype.splice = s.splice),
      (r.prototype.each = s.forEach),
      (r.prototype.forEach = s.forEach),
      (r.prototype.push = s.push),
      (r.prototype.map = s.map),
      (t.exports = r);
  },
  function (t, e) {
    var i = /^data-/,
      n = /\D/g,
      s = /-([\da-z])/gi,
      r = /^\[|\{/,
      a = /^\s+|\s+$/g,
      o = function (t) {
        return t.replace(s, function (t, e) {
          return e.toUpperCase();
        });
      },
      l = function (t, e) {
        var i,
          n,
          s,
          r = [];
        for (s in t)
          t.hasOwnProperty(s) &&
            ((i = e ? e + "[" + s + "]" : s),
            (n = t[s]),
            Array.isArray(n)
              ? n.forEach(function (t) {
                  r.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(t));
                })
              : "object" == typeof n
              ? r.push(l(n, i))
              : r.push(encodeURIComponent(i) + "=" + encodeURIComponent(n)));
        return r.join("&");
      },
      u = function (t) {
        if (r.test(t))
          try {
            t = JSON.parse(t);
          } catch (t) {
            throw t;
          }
        return t;
      },
      h = function (t) {
        for (var e = t.attributes.length; e--; )
          if (i.test(t.attributes[e].name)) {
            var n = o(t.attributes[e].name.replace(i, ""));
            t.hoboDataMap[n] = u(t.attributes[e].value);
          }
      },
      c = function (t) {
        for (var e in t.dataset)
          t.dataset.hasOwnProperty(e) && (t.hoboDataMap[e] = u(t.dataset[e]));
      };
    t.exports = {
      version: "0.3.15",
      rData: i,
      rDigit: n,
      rTag: /^</,
      rJson: r,
      rDocType: /^<\!DOCTYPE\shtml>/i,
      rFront2Back: a,
      trimString: function (t) {
        return t.replace(a, "");
      },
      camelCase: o,
      makeId: function () {
        return "hobo" + ("0.3.15" + Math.random()).replace(n, "");
      },
      makeArray: function (t) {
        return [].slice.call(t);
      },
      makeData: function (t) {
        t.hoboDataMap || (t.hoboDataMap = {}),
          t.dataset ? c(t) : t.attributes && h(t);
      },
      storeData: function (t, e) {
        var i, n;
        for (n in t)
          t.hasOwnProperty(n) && ((i = o(n)), (e.hoboDataMap[i] = t[n]));
      },
      retrieveData: function (t, e) {
        var i = null;
        return (
          (t = o(t)),
          e.hoboDataMap && e.hoboDataMap[t] && (i = e.hoboDataMap[t]),
          i
        );
      },
      mergeData: function (t, e) {
        for (var i in e.hoboDataMap)
          e.hoboDataMap.hasOwnProperty(i) && !t[i] && (t[i] = e.hoboDataMap[i]);
      },
      removeData: function (t, e) {
        (t = o(t)),
          e.hoboDataMap && e.hoboDataMap[t] && delete e.hoboDataMap[t];
      },
      serializeData: l,
      getClass: function (t) {
        return t.getAttribute("class") || "";
      },
      setClass: function (t, e) {
        t.setAttribute("class", e);
      },
    };
  },
  function (t, e, i) {
    (function (e) {
      t.exports = e.hobo = i(30);
    }).call(this, i(9));
  },
  function (t, e, i) {
    /*!
     *
     * Use native element selector matching
     *
     * @matchElement
     * @author: kitajchuk
     *
     */
    t.exports = (function () {
      var t = function (e, i, n) {
        var s = e.matches
          ? "matches"
          : e.webkitMatchesSelector
          ? "webkitMatchesSelector"
          : e.mozMatchesSelector
          ? "mozMatchesSelector"
          : e.msMatchesSelector
          ? "msMatchesSelector"
          : e.oMatchesSelector
          ? "oMatchesSelector"
          : null;
        return s && e[s].call(e, i)
          ? e
          : n && e !== document.documentElement && e.parentNode
          ? t(e.parentNode, i, n)
          : null;
      };
      return t;
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Event / Animation cycle manager
     *
     * @Controller
     * @author: kitajchuk
     *
     *
     */
    t.exports = (function () {
      var t = window.requestAnimationFrame,
        e = window.cancelAnimationFrame,
        i = function () {
          return this.init.apply(this, arguments);
        };
      return (
        (i.prototype = {
          constructor: i,
          init: function () {
            (this._handlers = {}),
              (this._uid = 0),
              (this._started = !1),
              (this._paused = !1),
              (this._cycle = null);
          },
          go: function (e) {
            if (this._started && this._cycle) return this;
            this._started = !0;
            var i = this,
              n = function () {
                (i._cycle = t(n)), i._started && "function" == typeof e && e();
              };
            n();
          },
          pause: function () {
            return (this._paused = !0), this;
          },
          play: function () {
            return (this._paused = !1), this;
          },
          stop: function () {
            return (
              e(this._cycle),
              (this._paused = !1),
              (this._started = !1),
              (this._cycle = null),
              this
            );
          },
          on: function (t, e) {
            var i = t.split(" ");
            e._jsControllerID = this.getUID();
            for (var n = i.length; n--; )
              "function" == typeof e &&
                (this._handlers[i[n]] || (this._handlers[i[n]] = []),
                this._handlers[i[n]].push(e));
            return this;
          },
          off: function (t, e) {
            return this._handlers[t]
              ? (e ? this._off(t, e) : this._offed(t), this)
              : this;
          },
          fire: function (t) {
            if (!this._handlers[t]) return this;
            for (
              var e = [].slice.call(arguments, 1), i = this._handlers[t].length;
              i--;

            )
              this._handlers[t][i].apply(this, e);
            return this;
          },
          getUID: function () {
            return (this._uid = this._uid + 1), this._uid;
          },
          _off: function (t, e) {
            for (var i = 0, n = this._handlers[t].length; i < n; i++)
              if (e._jsControllerID === this._handlers[t][i]._jsControllerID) {
                this._handlers[t].splice(i, 1);
                break;
              }
          },
          _offed: function (t) {
            for (var e = this._handlers[t].length; e--; )
              this._handlers[t][e] = null;
            delete this._handlers[t];
          },
        }),
        i
      );
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(11));
    var r = null,
      a = !1,
      o = {},
      l = window.sessionStorage,
      u = (function () {
        function t(e) {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            r || ((r = this), (this._opts = e), this._init()),
            r
          );
        }
        return (
          n(t, [
            {
              key: "_init",
              value: function () {
                a ||
                  ((a = !0),
                  this.flush(),
                  (0, s.default)("[Cache Store initialized]", this));
              },
            },
            {
              key: "flush",
              value: function () {
                (o = {}), this.save();
              },
            },
            {
              key: "save",
              value: function () {
                this._opts.enableStorage && t.isStorageSupported
                  ? l.setItem("deem-cache", JSON.stringify(o))
                  : (0, s.default)("[Cache Store::Not using SessionStorage]");
              },
            },
            {
              key: "slug",
              value: function (t) {
                return (t = t
                  .replace(/^\/|\/$/g, "")
                  .replace(/\/|\?|&|=|\s/g, "-")
                  .toLowerCase());
              },
            },
            {
              key: "set",
              value: function (t, e) {
                (t = this.slug(t)), (o[t] = e), this.save();
              },
            },
            {
              key: "get",
              value: function (t) {
                return (t = t && this.slug(t)) ? this.getValue(o[t]) : o;
              },
            },
            {
              key: "getValue",
              value: function (t) {
                return t;
              },
            },
            {
              key: "remove",
              value: function (t) {
                delete o[t];
              },
            },
          ]),
          t
        );
      })();
    (u.crumb = (function () {
      var t = RegExp("(^|; )" + encodeURIComponent("crumb") + "=([^;]*)").exec(
        document.cookie
      );
      return t ? t[2] : null;
    })()),
      (u.ss_cvr = (function () {
        var t = RegExp(
          "(^|; )" + encodeURIComponent("ss_cvr") + "=([^;]*)"
        ).exec(document.cookie);
        return t ? t[2] : null;
      })()),
      (u.isStorageSupported = (function () {
        var t = !0;
        try {
          l.setItem("deem-test", 1), l.removeItem("deem-test");
        } catch (e) {
          t = !1;
        }
        return t;
      })()),
      (e.default = u);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(i(4)),
      s = r(i(10));
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var a = {
      doc: (0, n.default)(document),
      html: (0, n.default)(document.documentElement),
      body: (0, n.default)(document.body),
      main: (0, n.default)(s.default.mainSelector),
    };
    e.default = a;
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = {
      homepage: "home",
      defaultEasing: (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(59)).default.easeInOutCubic,
      defaultDuration: 500,
      defaultVideoChannel: "vid",
      defaultAudioChannel: "bgm",
      mainSelector: ".js-main",
      introSelector: ".js-intro",
      naviSelector: ".js-navi",
      lazyImageSelector: ".js-lazy-image",
      mobileImageSelector: ".js-lazy-image[data-mobile]",
      mobileMediaHack: 640,
      lazyAnimSelector: ".js-lazy-anim",
      lazyImageAttr: "data-img-src",
      imageLoaderAttr: "data-imageloader",
    };
    e.default = n;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(19));
    e.default = function () {
      for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      if (n.default.isDev() && "console" in window) {
        var s = "log";
        "function" == typeof console[e[0]] &&
          ((s = e[0]), (e = e.slice(1, e.length))),
          window.console[s](e);
      }
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = l(i(4)),
      s = l(i(63)),
      r = l(i(20)),
      a = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      o = l(i(25));
    function l(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var u = {
      init: function () {
        var t = this;
        (this.element = a.dom.body.find(".js-router").detach()),
          (this.animDuration = 500),
          (this.controllers = new r.default({
            el: a.dom.main,
            cb: function () {
              t.topper();
            },
          })),
          a.emitter.on("app--intro", function () {}),
          (this.state = { now: null, future: null }),
          this.element[0].classList.contains("cart") &&
            (a.dom.html.addClass("is-cart-page"),
            a.dom.body.find("a").addClass("js-router--ignore")),
          this.bindEmpty(),
          a.log("[Router initialized]", this);
      },
      load: function () {
        var t = this;
        return new Promise(function (e, i) {
          (t._resolve = e),
            (t._reject = i),
            (t.controller = new s.default({
              transitionTime: t.animDuration,
              routerOptions: { async: !0 },
            })),
            t.controller.setConfig(["/", ":view", ":view/:uid"]),
            t.controller.on(
              "page-controller-router-transition-out",
              t.changePageOut.bind(t)
            ),
            t.controller.on(
              "page-controller-router-refresh-document",
              t.changeContent.bind(t)
            ),
            t.controller.on(
              "page-controller-router-transition-in",
              t.changePageIn.bind(t)
            ),
            t.controller.on("page-controller-initialized-page", function (e) {
              t.initPage(e);
            }),
            t.controller.initPage();
        });
      },
      bindEmpty: function () {
        a.dom.body.on("click", "[href^='#']", function (t) {
          return t.preventDefault();
        });
      },
      initPage: function (t) {
        var e = this;
        this.setDoc(t),
          this.setState("now", t),
          this.setState("future", null),
          this.setClass(),
          o.default.setActive(this.state.now.view),
          this.topper(),
          this.controllers.exec(),
          o.default.doResize(),
          setTimeout(function () {
            e._resolve();
          }, 1e3);
      },
      parseDoc: function (t) {
        var e = document.createElement("html"),
          i = null;
        return (
          (e.innerHTML = t),
          (i = (e = (0, n.default)(e)).find(".js-router")),
          this.parseConfig(i),
          this.parseLayout(i),
          { doc: e, virtual: i, html: i[0].innerHTML, data: i.data() }
        );
      },
      parseConfig: function (t) {
        t.find(".js-sqs-config-style").remove(),
          t.find(".js-sqs-config-image").remove();
      },
      parseLayout: function (t) {
        var e = t.find("article[data-item-id]");
        if (e.length) {
          var i = e.find(".sqs-layout > .row > .sqs-col-12"),
            n = e.find(".sqs-layout > .row > .sqs-col-6").parent();
          n.length && i.length && (n.detach(), i.prepend(n));
        }
      },
      setDoc: function (t) {
        this.doc = this.parseDoc(t.response);
      },
      setState: function (t, e) {
        this.state[t] = {
          raw: (e && e) || null,
          uid: (e && e.request.params.uid) || null,
          view: e ? e.request.params.view || a.config.homepage : null,
          cat: (e && e.request.query.category) || null,
          tag: (e && e.request.query.tag) || null,
        };
      },
      setClass: function () {
        this.state.future.view &&
          a.dom.html.addClass("is-" + this.state.future.view + "-page"),
          this.state.future.uid && a.dom.html.addClass("is-uid-page"),
          this.state.future.cat && a.dom.html.addClass("is-cat-page"),
          this.state.future.tag && a.dom.html.addClass("is-tag-page");
      },
      unsetClass: function () {
        this.state.now.view !== this.state.future.view &&
          a.dom.html.removeClass("is-" + this.state.now.view + "-page"),
          this.state.now.uid &&
            !this.state.future.uid &&
            a.dom.html.removeClass("is-uid-page"),
          this.state.now.cat &&
            !this.state.future.cat &&
            a.dom.html.removeClass("is-cat-page"),
          this.state.now.tag &&
            !this.state.future.tag &&
            a.dom.html.removeClass("is-tag-page"),
          a.dom.html.removeClass("is-cart-page");
      },
      changePageOut: function (t) {
        a.dom.html.addClass("is-tranny"),
          this.setState("future", t),
          this.unsetClass(),
          this.setClass(),
          o.default.setActive(this.state.future.view),
          o.default.closeAll();
      },
      changeContent: function (t) {
        this.controllers.destroy(),
          this.setDoc(t),
          this.setState("now", t),
          (a.dom.main[0].innerHTML = this.doc.html),
          this.topper(),
          this.controllers.exec(),
          o.default.doResize(),
          a.emitter.fire("app--tracker", this.doc);
      },
      changePageIn: function () {
        setTimeout(function () {
          o.default.doResize(), a.dom.html.removeClass("is-tranny");
        }, this.animDuration);
      },
      route: function (t) {
        this.controller.getRouter().trigger(t);
      },
      push: function (t, e) {
        this.controller.routeSilently(t, e || a.util.noop);
      },
      topper: function () {
        window.scrollTo(0, 0);
      },
    };
    e.default = u;
  },
  function (t, e, i) {
    /*!
     *
     * Parse query string into object literal representation
     *
     * @compat: jQuery, Ender, Zepto
     * @author: @kitajchuk
     *
     *
     */
    t.exports = (function () {
      var t = function (t) {
        var e = decodeURIComponent(t).match(/[#|?].*$/g),
          i = {};
        if (e)
          for (
            var n = (e = (e = e[0].replace(/^\?|^#|^\/|\/$|\[|\]/g, "")).split(
              "&"
            )).length;
            n--;

          ) {
            var s = e[n].split("="),
              r = s[0],
              a = s[1];
            i[r]
              ? ("[object Array]" !== {}.toString.call(i[r]) && (i[r] = [i[r]]),
                i[r].push(a))
              : (i[r] = a);
          }
        return i;
      };
      return "undefined" != typeof $ && ($.paramalama = t), t;
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(18)),
      r = o(i(11)),
      a = o(i(6));
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var l = (function (t) {
      function e(t) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var i = (function (t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        return (
          (i.$preload = s.getElementsInView(t)),
          (i.$lazyload = t.not(i.$preload)),
          (i.loaders = {}),
          i.$preload.length
            ? i.handleLoading(i.$preload, "preload", s.noop)
            : setTimeout(function () {
                i.fire("preloaded");
              }, 0),
          i.$lazyload.length &&
            i.handleLoading(i.$lazyload, "lazyload", s.isElementLoadable),
          i
        );
      }
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, a.default),
        n(e, [
          {
            key: "handleLoading",
            value: function (t, e, i) {
              var n = this;
              (0, r.default)("ImageController " + e + " queue:", t.length);
              var a = 0;
              (this.loaders[e] = s.loadImages(t, i)),
                this.loaders[e].on("load", function (i) {
                  a++, n.fire(e, { done: a, total: t.length, element: i });
                }),
                this.loaders[e].on("done", function () {
                  (0, r.default)("ImageController " + e + "ed:", t.length),
                    n.fire(e + "ed");
                });
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = null;
              for (t in this.loaders)
                this.loaders.hasOwnProperty(t) &&
                  (this.loaders[t].stop(),
                  (this.loaders[t] = null),
                  delete this.loaders[t]);
            },
          },
        ]),
        e
      );
    })();
    e.default = l;
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--play" x="0px" y="0px" viewBox="0 0 25 29" style="enable-background:new 0 0 25 29;"><path d="M23.9,12.7L3.7,0.5C3.3,0.3,3,0.2,2.6,0.2c-1.1,0-2,0.9-2,2l0,24.5c0,0.4,0.1,0.7,0.3,1c0.6,0.9,1.8,1.2,2.7,0.7l20.2-12.2c0.3-0.2,0.5-0.4,0.7-0.7C25.1,14.5,24.8,13.3,23.9,12.7z"></path></svg>';
  },
  function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0);
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
     **/ n.k._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function () {
        var t = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          e = function (t, e, i) {
            var n,
              s,
              r = t.cycle;
            for (n in r)
              (s = r[n]),
                (t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length]);
            delete t.cycle;
          },
          i = function (t, e, s) {
            n.l.call(this, t, e, s),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._repeat && this._uncache(!0),
              (this.render = i.prototype.render);
          },
          s = n.l._internals,
          r = s.isSelector,
          a = s.isArray,
          o = (i.prototype = n.l.to({}, 0.1, {})),
          l = [];
        (i.version = "2.0.1"),
          (o.constructor = i),
          (o.kill()._gc = !1),
          (i.killTweensOf = i.killDelayedCallsTo = n.l.killTweensOf),
          (i.getTweensOf = n.l.getTweensOf),
          (i.lagSmoothing = n.l.lagSmoothing),
          (i.ticker = n.l.ticker),
          (i.render = n.l.render),
          (o.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._yoyoEase = null),
              this._uncache(!0),
              n.l.prototype.invalidate.call(this)
            );
          }),
          (o.updateTo = function (t, e) {
            var i,
              s = this.ratio,
              r = this.vars.immediateRender || t.immediateRender;
            for (i in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[i] = t[i];
            if (this._initted || r)
              if (e) (this._initted = !1), r && this.render(0, !0, !0);
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  n.l._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var a = this._totalTime;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(a, !0, !1);
              } else if (
                ((this._initted = !1), this._init(), this._time > 0 || r)
              )
                for (var o, l = 1 / (1 - s), u = this._firstPT; u; )
                  (o = u.s + u.c), (u.c *= l), (u.s = o - u.c), (u = u._next);
            return this;
          }),
          (o.render = function (t, e, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var r,
              a,
              o,
              l,
              u,
              h,
              c,
              f,
              d,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              _ = this._time,
              m = this._totalTime,
              v = this._cycle,
              g = this._duration,
              y = this._rawPrevTime;
            if (
              (t >= p - 1e-7 && t >= 0
                ? ((this._totalTime = p),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = g),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((r = !0),
                    (a = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === g &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (y < 0 ||
                      (t <= 0 && t >= -1e-7) ||
                      (1e-10 === y && "isPause" !== this.data)) &&
                      y !== t &&
                      ((i = !0), y > 1e-10 && (a = "onReverseComplete")),
                    (this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)))
                : t < 1e-7
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== m || (0 === g && y > 0)) &&
                    ((a = "onReverseComplete"), (r = this._reversed)),
                  t < 0 &&
                    ((this._active = !1),
                    0 === g &&
                      (this._initted || !this.vars.lazy || i) &&
                      (y >= 0 && (i = !0),
                      (this._rawPrevTime = f =
                        !e || t || y === t ? t : 1e-10))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((l = g + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      m <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      ((this._time = g - this._time),
                      (d = this._yoyoEase || this.vars.yoyoEase) &&
                        (this._yoyoEase ||
                          (!0 !== d || this._initted
                            ? (this._yoyoEase = d =
                                !0 === d
                                  ? this._ease
                                  : d instanceof n.b
                                  ? d
                                  : n.b.map[d])
                            : ((d = this.vars.ease),
                              (this._yoyoEase = d =
                                d
                                  ? d instanceof n.b
                                    ? d
                                    : "function" == typeof d
                                    ? new n.b(d, this.vars.easeParams)
                                    : n.b.map[d] || n.l.defaultEase
                                  : n.l.defaultEase))),
                        (this.ratio = d
                          ? 1 - d.getRatio((g - this._time) / g)
                          : 0))),
                    this._time > g
                      ? (this._time = g)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType && !d
                    ? ((u = this._time / g),
                      (h = this._easeType),
                      (c = this._easePower),
                      (1 === h || (3 === h && u >= 0.5)) && (u = 1 - u),
                      3 === h && (u *= 2),
                      1 === c
                        ? (u *= u)
                        : 2 === c
                        ? (u *= u * u)
                        : 3 === c
                        ? (u *= u * u * u)
                        : 4 === c && (u *= u * u * u * u),
                      1 === h
                        ? (this.ratio = 1 - u)
                        : 2 === h
                        ? (this.ratio = u)
                        : this._time / g < 0.5
                        ? (this.ratio = u / 2)
                        : (this.ratio = 1 - u / 2))
                    : d || (this.ratio = this._ease.getRatio(this._time / g))),
              _ !== this._time || i || v !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (
                  !i &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = _),
                    (this._totalTime = m),
                    (this._rawPrevTime = y),
                    (this._cycle = v),
                    s.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  );
                !this._time || r || d
                  ? r &&
                    this._ease._calcEnd &&
                    !d &&
                    (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  : (this.ratio = this._ease.getRatio(this._time / g));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== _ &&
                      t >= 0 &&
                      (this._active = !0)),
                  0 === m &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, !0, i)
                        : a || (a = "_dummyGS")),
                    this.vars.onStart &&
                      ((0 === this._totalTime && 0 !== g) ||
                        e ||
                        this._callback("onStart"))),
                  o = this._firstPT;
                o;

              )
                o.f
                  ? o.t[o.p](o.c * this.ratio + o.s)
                  : (o.t[o.p] = o.c * this.ratio + o.s),
                  (o = o._next);
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                e ||
                  ((this._totalTime !== m || a) && this._callback("onUpdate"))),
                this._cycle !== v &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat"))),
                a &&
                  ((this._gc && !i) ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, !0, i),
                    r &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[a] && this._callback(a),
                    0 === g &&
                      1e-10 === this._rawPrevTime &&
                      1e-10 !== f &&
                      (this._rawPrevTime = 0)));
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (i.to = function (t, e, n) {
            return new i(t, e, n);
          }),
          (i.from = function (t, e, n) {
            return (
              (n.runBackwards = !0),
              (n.immediateRender = 0 != n.immediateRender),
              new i(t, e, n)
            );
          }),
          (i.fromTo = function (t, e, n, s) {
            return (
              (s.startAt = n),
              (s.immediateRender =
                0 != s.immediateRender && 0 != n.immediateRender),
              new i(t, e, s)
            );
          }),
          (i.staggerTo = i.allTo =
            function (s, o, u, h, c, f, d) {
              h = h || 0;
              var p,
                _,
                m,
                v,
                g = 0,
                y = [],
                b = function () {
                  u.onComplete &&
                    u.onComplete.apply(u.onCompleteScope || this, arguments),
                    c.apply(d || u.callbackScope || this, f || l);
                },
                w = u.cycle,
                T = u.startAt && u.startAt.cycle;
              for (
                a(s) ||
                  ("string" == typeof s && (s = n.l.selector(s) || s),
                  r(s) && (s = t(s))),
                  s = s || [],
                  h < 0 && ((s = t(s)).reverse(), (h *= -1)),
                  p = s.length - 1,
                  m = 0;
                m <= p;
                m++
              ) {
                for (v in ((_ = {}), u)) _[v] = u[v];
                if (
                  (w &&
                    (e(_, s, m),
                    null != _.duration &&
                      ((o = _.duration), delete _.duration)),
                  T)
                ) {
                  for (v in ((T = _.startAt = {}), u.startAt))
                    T[v] = u.startAt[v];
                  e(_.startAt, s, m);
                }
                (_.delay = g + (_.delay || 0)),
                  m === p && c && (_.onComplete = b),
                  (y[m] = new i(s[m], o, _)),
                  (g += h);
              }
              return y;
            }),
          (i.staggerFrom = i.allFrom =
            function (t, e, n, s, r, a, o) {
              return (
                (n.runBackwards = !0),
                (n.immediateRender = 0 != n.immediateRender),
                i.staggerTo(t, e, n, s, r, a, o)
              );
            }),
          (i.staggerFromTo = i.allFromTo =
            function (t, e, n, s, r, a, o, l) {
              return (
                (s.startAt = n),
                (s.immediateRender =
                  0 != s.immediateRender && 0 != n.immediateRender),
                i.staggerTo(t, e, s, r, a, o, l)
              );
            }),
          (i.delayedCall = function (t, e, n, s, r) {
            return new i(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: n,
              callbackScope: s,
              onReverseComplete: e,
              onReverseCompleteParams: n,
              immediateRender: !1,
              useFrames: r,
              overwrite: 0,
            });
          }),
          (i.set = function (t, e) {
            return new i(t, 0, e);
          }),
          (i.isTweening = function (t) {
            return n.l.getTweensOf(t, !0).length > 0;
          });
        var u = function (t, e) {
            for (var i = [], s = 0, r = t._first; r; )
              r instanceof n.l
                ? (i[s++] = r)
                : (e && (i[s++] = r), (s = (i = i.concat(u(r, e))).length)),
                (r = r._next);
            return i;
          },
          h = (i.getAllTweens = function (t) {
            return u(n.a._rootTimeline, t).concat(
              u(n.a._rootFramesTimeline, t)
            );
          });
        (i.killAll = function (t, e, i, s) {
          null == e && (e = !0), null == i && (i = !0);
          var r,
            a,
            o,
            l = h(0 != s),
            u = l.length,
            c = e && i && s;
          for (o = 0; o < u; o++)
            (a = l[o]),
              (c ||
                a instanceof n.i ||
                ((r = a.target === a.vars.onComplete) && i) ||
                (e && !r)) &&
                (t
                  ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                  : a._enabled(!1, !1));
        }),
          (i.killChildTweensOf = function (e, o) {
            if (null != e) {
              var l,
                u,
                h,
                c,
                f,
                d = s.tweenLookup;
              if (
                ("string" == typeof e && (e = n.l.selector(e) || e),
                r(e) && (e = t(e)),
                a(e))
              )
                for (c = e.length; --c > -1; ) i.killChildTweensOf(e[c], o);
              else {
                for (h in ((l = []), d))
                  for (u = d[h].target.parentNode; u; )
                    u === e && (l = l.concat(d[h].tweens)), (u = u.parentNode);
                for (f = l.length, c = 0; c < f; c++)
                  o && l[c].totalTime(l[c].totalDuration()),
                    l[c]._enabled(!1, !1);
              }
            }
          });
        var c = function (t, e, i, s) {
          (e = !1 !== e), (i = !1 !== i);
          for (
            var r, a, o = h((s = !1 !== s)), l = e && i && s, u = o.length;
            --u > -1;

          )
            (a = o[u]),
              (l ||
                a instanceof n.i ||
                ((r = a.target === a.vars.onComplete) && i) ||
                (e && !r)) &&
                a.paused(t);
        };
        return (
          (i.pauseAll = function (t, e, i) {
            c(!0, t, e, i);
          }),
          (i.resumeAll = function (t, e, i) {
            c(!1, t, e, i);
          }),
          (i.globalTimeScale = function (t) {
            var e = n.a._rootTimeline,
              i = n.l.ticker.time;
            return arguments.length
              ? ((t = t || 1e-10),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e = n.a._rootFramesTimeline),
                (i = n.l.ticker.frame),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e._timeScale = n.a._rootTimeline._timeScale = t),
                t)
              : e._timeScale;
          }),
          (o.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (o.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (o.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (o.duration = function (t) {
            return arguments.length
              ? n.a.prototype.duration.call(this, t)
              : this._duration;
          }),
          (o.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (o.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          i
        );
      },
      !0
    );
    const s = n.k.TweenMax;
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
    n.k._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function () {
        var t,
          e,
          i,
          s,
          r = function () {
            n.j.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = r.prototype.setRatio);
          },
          a = n.k._gsDefine.globals,
          o = {},
          l = (r.prototype = new n.j("css"));
        (l.constructor = r),
          (r.version = "1.20.5"),
          (r.API = 2),
          (r.defaultTransformPerspective = 0),
          (r.defaultSkewType = "compensated"),
          (r.defaultSmoothOrigin = !0),
          (l = "px"),
          (r.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: "",
          });
        var u,
          h,
          c,
          f,
          d,
          p,
          _,
          m,
          v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          T = /opacity *= *([^)]*)/i,
          x = /opacity:([^;]*)/i,
          k = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          C = /([A-Z])/g,
          S = /-([a-z])/gi,
          O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          M = function (t, e) {
            return e.toUpperCase();
          },
          j = /(?:Left|Right|Width)/i,
          R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          D = /,(?=[^\)]*(?:\(|$))/gi,
          A = /[\s,\(]/i,
          I = Math.PI / 180,
          z = 180 / Math.PI,
          L = {},
          q = { style: {} },
          N = n.k.document || {
            createElement: function () {
              return q;
            },
          },
          F = function (t, e) {
            return N.createElementNS
              ? N.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
              : N.createElement(t);
          },
          B = F("div"),
          H = F("img"),
          Y = (r._internals = { _specialProps: o }),
          X = (n.k.navigator || {}).userAgent || "",
          U = (function () {
            var t = X.indexOf("Android"),
              e = F("a");
            return (
              (c =
                -1 !== X.indexOf("Safari") &&
                -1 === X.indexOf("Chrome") &&
                (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3)),
              (d = c && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6),
              (f = -1 !== X.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) &&
                (p = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          V = function (t) {
            return T.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          W = function (t) {
            n.k.console && console.log(t);
          },
          J = "",
          $ = "",
          G = function (t, e) {
            var i,
              n,
              s = (e = e || B).style;
            if (void 0 !== s[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5;
              --n > -1 && void 0 === s[i[n] + t];

            );
            return n >= 0
              ? ((J = "-" + ($ = 3 === n ? "ms" : i[n]).toLowerCase() + "-"),
                $ + t)
              : null;
          },
          Q = (
            "undefined" != typeof window
              ? window
              : N.defaultView || { getComputedStyle: function () {} }
          ).getComputedStyle,
          Z = (r.getStyle = function (t, e, i, n, s) {
            var r;
            return U || "opacity" !== e
              ? (!n && t.style[e]
                  ? (r = t.style[e])
                  : (i = i || Q(t))
                  ? (r =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(C, "-$1").toLowerCase()))
                  : t.currentStyle && (r = t.currentStyle[e]),
                null == s ||
                (r && "none" !== r && "auto" !== r && "auto auto" !== r)
                  ? r
                  : s)
              : V(t);
          }),
          K = (Y.convertToPixels = function (t, e, i, s, a) {
            if ("px" === s || (!s && "lineHeight" !== e)) return i;
            if ("auto" === s || !i) return 0;
            var o,
              l,
              u,
              h = j.test(e),
              c = t,
              f = B.style,
              d = i < 0,
              p = 1 === i;
            if ((d && (i = -i), p && (i *= 100), "lineHeight" !== e || s))
              if ("%" === s && -1 !== e.indexOf("border"))
                o = (i / 100) * (h ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((f.cssText =
                    "border:0 solid red;position:" +
                    Z(t, "position") +
                    ";line-height:0;"),
                  "%" !== s &&
                    c.appendChild &&
                    "v" !== s.charAt(0) &&
                    "rem" !== s)
                )
                  f[h ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                else {
                  if (
                    ((c = t.parentNode || N.body),
                    -1 !== Z(c, "display").indexOf("flex") &&
                      (f.position = "absolute"),
                    (l = c._gsCache),
                    (u = n.l.ticker.frame),
                    l && h && l.time === u)
                  )
                    return (l.width * i) / 100;
                  f[h ? "width" : "height"] = i + s;
                }
                c.appendChild(B),
                  (o = parseFloat(B[h ? "offsetWidth" : "offsetHeight"])),
                  c.removeChild(B),
                  h &&
                    "%" === s &&
                    !1 !== r.cacheWidths &&
                    (((l = c._gsCache = c._gsCache || {}).time = u),
                    (l.width = (o / i) * 100)),
                  0 !== o || a || (o = K(t, e, i, s, !0));
              }
            else
              (l = Q(t).lineHeight),
                (t.style.lineHeight = i),
                (o = parseFloat(Q(t).lineHeight)),
                (t.style.lineHeight = l);
            return p && (o /= 100), d ? -o : o;
          }),
          tt = (Y.calculateOffset = function (t, e, i) {
            if ("absolute" !== Z(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              s = Z(t, "margin" + n, i);
            return (
              t["offset" + n] - (K(t, e, parseFloat(s), s.replace(w, "")) || 0)
            );
          }),
          et = function (t, e) {
            var i,
              n,
              s,
              r = {};
            if ((e = e || Q(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (s = e[i]).indexOf("-transform") && Ot !== s) ||
                    (r[s.replace(S, M)] = e.getPropertyValue(s));
              else
                for (i in e)
                  (-1 !== i.indexOf("Transform") && St !== i) || (r[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === r[i] &&
                  (r[i.replace(S, M)] = e[i]);
            return (
              U || (r.opacity = V(t)),
              (n = Bt(t, e, !1)),
              (r.rotation = n.rotation),
              (r.skewX = n.skewX),
              (r.scaleX = n.scaleX),
              (r.scaleY = n.scaleY),
              (r.x = n.x),
              (r.y = n.y),
              jt &&
                ((r.z = n.z),
                (r.rotationX = n.rotationX),
                (r.rotationY = n.rotationY),
                (r.scaleZ = n.scaleZ)),
              r.filters && delete r.filters,
              r
            );
          },
          it = function (t, e, i, n, s) {
            var r,
              a,
              o,
              l = {},
              u = t.style;
            for (a in i)
              "cssText" !== a &&
                "length" !== a &&
                isNaN(a) &&
                (e[a] !== (r = i[a]) || (s && s[a])) &&
                -1 === a.indexOf("Origin") &&
                (("number" != typeof r && "string" != typeof r) ||
                  ((l[a] =
                    "auto" !== r || ("left" !== a && "top" !== a)
                      ? ("" !== r && "auto" !== r && "none" !== r) ||
                        "string" != typeof e[a] ||
                        "" === e[a].replace(b, "")
                        ? r
                        : 0
                      : tt(t, a)),
                  void 0 !== u[a] && (o = new vt(u, a, u[a], o))));
            if (n) for (a in n) "className" !== a && (l[a] = n[a]);
            return { difs: l, firstMPT: o };
          },
          nt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          rt = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || Q(t))[e] || 0;
            if (t.getCTM && qt(t)) return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              s = nt[e],
              r = s.length;
            for (i = i || Q(t, null); --r > -1; )
              (n -= parseFloat(Z(t, "padding" + s[r], i, !0)) || 0),
                (n -= parseFloat(Z(t, "border" + s[r] + "Width", i, !0)) || 0);
            return n;
          },
          at = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              n = t.split(" "),
              s =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : n[0],
              r =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : n[1];
            if (n.length > 3 && !e) {
              for (
                n = t.split(", ").join(",").split(","), t = [], i = 0;
                i < n.length;
                i++
              )
                t.push(at(n[i]));
              return t.join(",");
            }
            return (
              null == r
                ? (r = "center" === s ? "50%" : "0")
                : "center" === r && (r = "50%"),
              ("center" === s ||
                (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                (s = "50%"),
              (t = s + " " + r + (n.length > 2 ? " " + n[2] : "")),
              e &&
                ((e.oxp = -1 !== s.indexOf("%")),
                (e.oyp = -1 !== r.indexOf("%")),
                (e.oxr = "=" === s.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(s.replace(b, ""))),
                (e.oy = parseFloat(r.replace(b, ""))),
                (e.v = t)),
              e || t
            );
          },
          ot = function (t, e) {
            return (
              "function" == typeof t && (t = t(m, _)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          lt = function (t, e) {
            return (
              "function" == typeof t && (t = t(m, _)),
              null == t
                ? e
                : "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          ut = function (t, e, i, n) {
            var s, r, a, o, l;
            return (
              "function" == typeof t && (t = t(m, _)),
              null == t
                ? (o = e)
                : "number" == typeof t
                ? (o = t)
                : ((s = 360),
                  (r = t.split("_")),
                  (a =
                    ((l = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(r[0].substr(2))
                      : parseFloat(r[0])) *
                      (-1 === t.indexOf("rad") ? 1 : z) -
                    (l ? 0 : e)),
                  r.length &&
                    (n && (n[i] = e + a),
                    -1 !== t.indexOf("short") &&
                      (a %= s) !== a % (s / 2) &&
                      (a = a < 0 ? a + s : a - s),
                    -1 !== t.indexOf("_cw") && a < 0
                      ? (a = ((a + 9999999999 * s) % s) - ((a / s) | 0) * s)
                      : -1 !== t.indexOf("ccw") &&
                        a > 0 &&
                        (a = ((a - 9999999999 * s) % s) - ((a / s) | 0) * s)),
                  (o = e + a)),
              o < 1e-6 && o > -1e-6 && (o = 0),
              o
            );
          },
          ht = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ct = function (t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            );
          },
          ft = (r.parseColor = function (t, e) {
            var i, n, s, r, a, o, l, u, h, c, f;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ht[t])
                )
                  i = ht[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    (t =
                      "#" +
                      (n = t.charAt(1)) +
                      n +
                      (s = t.charAt(2)) +
                      s +
                      (r = t.charAt(3)) +
                      r),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t,
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = f = t.match(v)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(g);
                  } else
                    (a = (Number(i[0]) % 360) / 360),
                      (o = Number(i[1]) / 100),
                      (n =
                        2 * (l = Number(i[2]) / 100) -
                        (s = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = ct(a + 1 / 3, n, s)),
                      (i[1] = ct(a, n, s)),
                      (i[2] = ct(a - 1 / 3, n, s));
                else i = t.match(v) || ht.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ht.black;
            return (
              e &&
                !f &&
                ((n = i[0] / 255),
                (s = i[1] / 255),
                (r = i[2] / 255),
                (l = ((u = Math.max(n, s, r)) + (h = Math.min(n, s, r))) / 2),
                u === h
                  ? (a = o = 0)
                  : ((c = u - h),
                    (o = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
                    (a =
                      u === n
                        ? (s - r) / c + (s < r ? 6 : 0)
                        : u === s
                        ? (r - n) / c + 2
                        : (n - s) / c + 4),
                    (a *= 60)),
                (i[0] = (a + 0.5) | 0),
                (i[1] = (100 * o + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          dt = function (t, e) {
            var i,
              n,
              s,
              r = t.match(pt) || [],
              a = 0,
              o = "";
            if (!r.length) return t;
            for (i = 0; i < r.length; i++)
              (n = r[i]),
                (a += (s = t.substr(a, t.indexOf(n, a) - a)).length + n.length),
                3 === (n = ft(n, e)).length && n.push(1),
                (o +=
                  s +
                  (e
                    ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
                    : "rgba(" + n.join(",")) +
                  ")");
            return o + t.substr(a);
          },
          pt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in ht) pt += "|" + l + "\\b";
        (pt = new RegExp(pt + ")", "gi")),
          (r.colorStringFilter = function (t) {
            var e,
              i = t[0] + " " + t[1];
            pt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = dt(t[0], e)),
              (t[1] = dt(t[1], e))),
              (pt.lastIndex = 0);
          }),
          n.l.defaultStringFilter ||
            (n.l.defaultStringFilter = r.colorStringFilter);
        var _t = function (t, e, i, n) {
            if (null == t)
              return function (t) {
                return t;
              };
            var s,
              r = e ? (t.match(pt) || [""])[0] : "",
              a = t.split(r).join("").match(y) || [],
              o = t.substr(0, t.indexOf(a[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              u = -1 !== t.indexOf(" ") ? " " : ",",
              h = a.length,
              c = h > 0 ? a[0].replace(v, "") : "";
            return h
              ? (s = e
                  ? function (t) {
                      var e, f, d, p;
                      if ("number" == typeof t) t += c;
                      else if (n && D.test(t)) {
                        for (
                          p = t.replace(D, "|").split("|"), d = 0;
                          d < p.length;
                          d++
                        )
                          p[d] = s(p[d]);
                        return p.join(",");
                      }
                      if (
                        ((e = (t.match(pt) || [r])[0]),
                        (d = (f = t.split(e).join("").match(y) || []).length),
                        h > d--)
                      )
                        for (; ++d < h; )
                          f[d] = i ? f[((d - 1) / 2) | 0] : a[d];
                      return (
                        o +
                        f.join(u) +
                        u +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, r, f;
                      if ("number" == typeof t) t += c;
                      else if (n && D.test(t)) {
                        for (
                          r = t.replace(D, "|").split("|"), f = 0;
                          f < r.length;
                          f++
                        )
                          r[f] = s(r[f]);
                        return r.join(",");
                      }
                      if (((f = (e = t.match(y) || []).length), h > f--))
                        for (; ++f < h; )
                          e[f] = i ? e[((f - 1) / 2) | 0] : a[f];
                      return o + e.join(u) + l;
                    })
              : function (t) {
                  return t;
                };
          },
          mt = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, n, s, r, a, o) {
                var l,
                  u = (i + "").split(" ");
                for (o = {}, l = 0; l < 4; l++)
                  o[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                return s.parse(e, o, r, a);
              }
            );
          },
          vt =
            ((Y._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT;
                l;

              )
                (e = o[l.v]),
                  l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (a.autoRotate &&
                  (a.autoRotate.rotation = a.mod
                    ? a.mod.call(this._tween, o.rotation, this.t, this._tween)
                    : o.rotation),
                1 === t || 0 === t)
              )
                for (l = a.firstMPT, r = 1 === t ? "e" : "b"; l; ) {
                  if ((i = l.t).type) {
                    if (1 === i.type) {
                      for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                        s += i["xn" + n] + i["xs" + (n + 1)];
                      i[r] = s;
                    }
                  } else i[r] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, n, s) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = s),
                n && ((n._prev = this), (this._next = n));
            }),
          gt =
            ((Y._parseToProxy = function (t, e, i, n, s, r) {
              var a,
                o,
                l,
                u,
                h,
                c = n,
                f = {},
                d = {},
                p = i._transform,
                _ = L;
              for (
                i._transform = null,
                  L = e,
                  n = h = i.parse(t, e, n, s),
                  L = _,
                  r &&
                    ((i._transform = p),
                    c && ((c._prev = null), c._prev && (c._prev._next = null)));
                n && n !== c;

              ) {
                if (
                  n.type <= 1 &&
                  ((d[(o = n.p)] = n.s + n.c),
                  (f[o] = n.s),
                  r || ((u = new vt(n, "s", o, u, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (a = n.l; --a > 0; )
                    (l = "xn" + a),
                      (d[(o = n.p + "_" + l)] = n.data[l]),
                      (f[o] = n[l]),
                      r || (u = new vt(n, l, o, u, n.rxp[l]));
                n = n._next;
              }
              return { proxy: f, end: d, firstMPT: u, pt: h };
            }),
            (Y.CSSPropTween = function (e, i, n, r, a, o, l, u, h, c, f) {
              (this.t = e),
                (this.p = i),
                (this.s = n),
                (this.c = r),
                (this.n = l || i),
                e instanceof gt || s.push(this.n),
                (this.r = u ? ("function" == typeof u ? u : Math.round) : u),
                (this.type = o || 0),
                h && ((this.pr = h), (t = !0)),
                (this.b = void 0 === c ? n : c),
                (this.e = void 0 === f ? n + r : f),
                a && ((this._next = a), (a._prev = this));
            })),
          yt = function (t, e, i, n, s, r) {
            var a = new gt(t, e, i, n - i, s, -1, r);
            return (a.b = i), (a.e = a.xs0 = n), a;
          },
          bt = (r.parseComplex = function (t, e, i, n, s, a, o, l, h, c) {
            (i = i || a || ""),
              "function" == typeof n && (n = n(m, _)),
              (o = new gt(t, e, 0, 0, o, c ? 2 : 1, null, !1, l, i, n)),
              (n += ""),
              s &&
                pt.test(n + i) &&
                ((n = [i, n]), r.colorStringFilter(n), (i = n[0]), (n = n[1]));
            var f,
              d,
              p,
              y,
              b,
              w,
              T,
              x,
              k,
              P,
              C,
              S,
              O,
              M = i.split(", ").join(",").split(" "),
              j = n.split(", ").join(",").split(" "),
              R = M.length,
              E = !1 !== u;
            for (
              (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                  ? ((M = M.join(" ").replace(D, ", ").split(" ")),
                    (j = j.join(" ").replace(D, ", ").split(" ")))
                  : ((M = M.join(" ").split(",").join(", ").split(" ")),
                    (j = j.join(" ").split(",").join(", ").split(" "))),
                (R = M.length)),
                R !== j.length && (R = (M = (a || "").split(" ")).length),
                o.plugin = h,
                o.setRatio = c,
                pt.lastIndex = 0,
                f = 0;
              f < R;
              f++
            )
              if (((y = M[f]), (b = j[f] + ""), (x = parseFloat(y)) || 0 === x))
                o.appendXtra(
                  "",
                  x,
                  ot(b, x),
                  b.replace(g, ""),
                  !(!E || -1 === b.indexOf("px")) && Math.round,
                  !0
                );
              else if (s && pt.test(y))
                (S = ")" + ((S = b.indexOf(")") + 1) ? b.substr(S) : "")),
                  (O = -1 !== b.indexOf("hsl") && U),
                  (P = b),
                  (y = ft(y, O)),
                  (b = ft(b, O)),
                  (k = y.length + b.length > 6) && !U && 0 === b[3]
                    ? ((o["xs" + o.l] += o.l ? " transparent" : "transparent"),
                      (o.e = o.e.split(j[f]).join("transparent")))
                    : (U || (k = !1),
                      O
                        ? o
                            .appendXtra(
                              P.substr(0, P.indexOf("hsl")) +
                                (k ? "hsla(" : "hsl("),
                              y[0],
                              ot(b[0], y[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", y[1], ot(b[1], y[1]), "%,", !1)
                            .appendXtra(
                              "",
                              y[2],
                              ot(b[2], y[2]),
                              k ? "%," : "%" + S,
                              !1
                            )
                        : o
                            .appendXtra(
                              P.substr(0, P.indexOf("rgb")) +
                                (k ? "rgba(" : "rgb("),
                              y[0],
                              b[0] - y[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", y[1], b[1] - y[1], ",", Math.round)
                            .appendXtra(
                              "",
                              y[2],
                              b[2] - y[2],
                              k ? "," : S,
                              Math.round
                            ),
                      k &&
                        ((y = y.length < 4 ? 1 : y[3]),
                        o.appendXtra(
                          "",
                          y,
                          (b.length < 4 ? 1 : b[3]) - y,
                          S,
                          !1
                        ))),
                  (pt.lastIndex = 0);
              else if ((w = y.match(v))) {
                if (!(T = b.match(g)) || T.length !== w.length) return o;
                for (p = 0, d = 0; d < w.length; d++)
                  (C = w[d]),
                    (P = y.indexOf(C, p)),
                    o.appendXtra(
                      y.substr(p, P - p),
                      Number(C),
                      ot(T[d], C),
                      "",
                      !(!E || "px" !== y.substr(P + C.length, 2)) && Math.round,
                      0 === d
                    ),
                    (p = P + C.length);
                o["xs" + o.l] += y.substr(p);
              } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + b : b;
            if (-1 !== n.indexOf("=") && o.data) {
              for (S = o.xs0 + o.data.s, f = 1; f < o.l; f++)
                S += o["xs" + f] + o.data["xn" + f];
              o.e = S + o["xs" + f];
            }
            return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
          }),
          wt = 9;
        for ((l = gt.prototype).l = l.pr = 0; --wt > 0; )
          (l["xn" + wt] = 0), (l["xs" + wt] = "");
        (l.xs0 = ""),
          (l._next =
            l._prev =
            l.xfirst =
            l.data =
            l.plugin =
            l.setRatio =
            l.rxp =
              null),
          (l.appendXtra = function (t, e, i, n, s, r) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += r && (o || a["xs" + o]) ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = n || ""),
                  o > 0
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = s),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new gt(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          s,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = s),
                      a))
                : ((a["xs" + o] += e + (n || "")), a)
            );
          });
        var Tt = function (t, e) {
            (e = e || {}),
              (this.p = (e.prefix && G(t)) || t),
              (o[t] = o[this.p] = this),
              (this.format =
                e.formatter ||
                _t(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          xt = (Y._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var n,
              s = t.split(","),
              r = e.defaultValue;
            for (i = i || [r], n = 0; n < s.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || r),
                new Tt(s[n], e);
          }),
          kt = (Y._registerPluginProp = function (t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              xt(t, {
                parser: function (t, i, n, s, r, l, u) {
                  var h = a.com.greensock.plugins[e];
                  return h
                    ? (h._cssRegister(), o[n].parse(t, i, n, s, r, l, u))
                    : (W("Error: " + e + " js file not loaded."), r);
                },
              });
            }
          });
        ((l = Tt.prototype).parseComplex = function (t, e, i, n, s, r) {
          var a,
            o,
            l,
            u,
            h,
            c,
            f = this.keyword;
          if (
            (this.multi &&
              (D.test(i) || D.test(e)
                ? ((o = e.replace(D, "|").split("|")),
                  (l = i.replace(D, "|").split("|")))
                : f && ((o = [e]), (l = [i]))),
            l)
          ) {
            for (
              u = l.length > o.length ? l.length : o.length, a = 0;
              a < u;
              a++
            )
              (e = o[a] = o[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                f &&
                  (h = e.indexOf(f)) !== (c = i.indexOf(f)) &&
                  (-1 === c
                    ? (o[a] = o[a].split(f).join(""))
                    : -1 === h && (o[a] += " " + f));
            (e = o.join(", ")), (i = l.join(", "));
          }
          return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r);
        }),
          (l.parse = function (t, e, n, s, r, a, o) {
            return this.parseComplex(
              t.style,
              this.format(Z(t, this.p, i, !1, this.dflt)),
              this.format(e),
              r,
              a
            );
          }),
          (r.registerSpecialProp = function (t, e, i) {
            xt(t, {
              parser: function (t, n, s, r, a, o, l) {
                var u = new gt(t, s, 0, 0, a, 2, s, !1, i);
                return (u.plugin = o), (u.setRatio = e(t, n, r._tween, s)), u;
              },
              priority: i,
            });
          }),
          (r.useSVGTransformAttr = !0);
        var Pt,
          Ct =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          St = G("transform"),
          Ot = J + "transform",
          Mt = G("transformOrigin"),
          jt = null !== G("perspective"),
          Rt = (Y.Transform = function () {
            (this.perspective = parseFloat(r.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === r.defaultForce3D || !jt) &&
                (r.defaultForce3D || "auto"));
          }),
          Et = n.k.SVGElement,
          Dt = function (t, e, i) {
            var n,
              s = N.createElementNS("http://www.w3.org/2000/svg", t),
              r = /([a-z])([A-Z])/g;
            for (n in i)
              s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s), s;
          },
          At = N.documentElement || {},
          It = (function () {
            var t,
              e,
              i,
              s = p || (/Android/i.test(X) && !n.k.chrome);
            return (
              N.createElementNS &&
                !s &&
                ((t = Dt("svg", At)),
                (i = (e = Dt("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100,
                })).getBoundingClientRect().width),
                (e.style[Mt] = "50% 50%"),
                (e.style[St] = "scaleX(0.5)"),
                (s = i === e.getBoundingClientRect().width && !(f && jt)),
                At.removeChild(t)),
              s
            );
          })(),
          zt = function (t, e, i, n, s, a) {
            var o,
              l,
              u,
              h,
              c,
              f,
              d,
              p,
              _,
              m,
              v,
              g,
              y,
              b,
              w = t._gsTransform,
              T = Ft(t, !0);
            w && ((y = w.xOrigin), (b = w.yOrigin)),
              (!n || (o = n.split(" ")).length < 2) &&
                (0 === (d = t.getBBox()).x &&
                  0 === d.y &&
                  d.width + d.height === 0 &&
                  (d = {
                    x:
                      parseFloat(
                        t.hasAttribute("x")
                          ? t.getAttribute("x")
                          : t.hasAttribute("cx")
                          ? t.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute("y")
                          ? t.getAttribute("y")
                          : t.hasAttribute("cy")
                          ? t.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (o = [
                  (-1 !== (e = at(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * d.width
                    : parseFloat(e[0])) + d.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * d.height
                    : parseFloat(e[1])) + d.y,
                ])),
              (i.xOrigin = h = parseFloat(o[0])),
              (i.yOrigin = c = parseFloat(o[1])),
              n &&
                T !== Nt &&
                ((f = T[0]),
                (d = T[1]),
                (p = T[2]),
                (_ = T[3]),
                (m = T[4]),
                (v = T[5]),
                (g = f * _ - d * p) &&
                  ((l = h * (_ / g) + c * (-p / g) + (p * v - _ * m) / g),
                  (u = h * (-d / g) + c * (f / g) - (f * v - d * m) / g),
                  (h = i.xOrigin = o[0] = l),
                  (c = i.yOrigin = o[1] = u))),
              w &&
                (a &&
                  ((i.xOffset = w.xOffset), (i.yOffset = w.yOffset), (w = i)),
                s || (!1 !== s && !1 !== r.defaultSmoothOrigin)
                  ? ((l = h - y),
                    (u = c - b),
                    (w.xOffset += l * T[0] + u * T[2] - l),
                    (w.yOffset += l * T[1] + u * T[3] - u))
                  : (w.xOffset = w.yOffset = 0)),
              a || t.setAttribute("data-svg-origin", o.join(" "));
          },
          Lt = function (t) {
            var e,
              i = F(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              n = this.parentNode,
              s = this.nextSibling,
              r = this.style.cssText;
            if (
              (At.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Lt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              s ? n.insertBefore(this, s) : n.appendChild(this),
              At.removeChild(i),
              (this.style.cssText = r),
              e
            );
          },
          qt = function (t) {
            return !(
              !Et ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function (t) {
                try {
                  return t.getBBox();
                } catch (e) {
                  return Lt.call(t, !0);
                }
              })(t)
            );
          },
          Nt = [1, 0, 0, 1, 0, 0],
          Ft = function (t, e) {
            var i,
              n,
              s,
              r,
              a,
              o,
              l = t._gsTransform || new Rt(),
              u = t.style;
            if (
              (St
                ? (n = Z(t, Ot, null, !0))
                : t.currentStyle &&
                  (n =
                    (n = t.currentStyle.filter.match(R)) && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          l.x || 0,
                          l.y || 0,
                        ].join(",")
                      : ""),
              (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
              !St ||
                (!(o = !Q(t) || "none" === Q(t).display) && t.parentNode) ||
                (o && ((r = u.display), (u.display = "block")),
                t.parentNode || ((a = 1), At.appendChild(t)),
                (i =
                  !(n = Z(t, Ot, null, !0)) ||
                  "none" === n ||
                  "matrix(1, 0, 0, 1, 0, 0)" === n),
                r ? (u.display = r) : o && Ut(u, "display"),
                a && At.removeChild(t)),
              (l.svg || (t.getCTM && qt(t))) &&
                (i &&
                  -1 !== (u[St] + "").indexOf("matrix") &&
                  ((n = u[St]), (i = 0)),
                (s = t.getAttribute("transform")),
                i &&
                  s &&
                  ((n =
                    "matrix(" +
                    (s = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    s.b +
                    "," +
                    s.c +
                    "," +
                    s.d +
                    "," +
                    s.e +
                    "," +
                    s.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Nt;
            for (s = (n || "").match(v) || [], wt = s.length; --wt > -1; )
              (r = Number(s[wt])),
                (s[wt] = (a = r - (r |= 0))
                  ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + r
                  : r);
            return e && s.length > 6
              ? [s[0], s[1], s[4], s[5], s[12], s[13]]
              : s;
          },
          Bt = (Y.getTransform = function (t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var a,
              o,
              l,
              u,
              h,
              c,
              f = (i && t._gsTransform) || new Rt(),
              d = f.scaleX < 0,
              p =
                (jt &&
                  (parseFloat(Z(t, Mt, e, !1, "0 0 0").split(" ")[2]) ||
                    f.zOrigin)) ||
                0,
              _ = parseFloat(r.defaultTransformPerspective) || 0;
            if (
              ((f.svg = !(!t.getCTM || !qt(t))),
              f.svg &&
                (zt(
                  t,
                  Z(t, Mt, e, !1, "50% 50%") + "",
                  f,
                  t.getAttribute("data-svg-origin")
                ),
                (Pt = r.useSVGTransformAttr || It)),
              (a = Ft(t)) !== Nt)
            ) {
              if (16 === a.length) {
                var m,
                  v,
                  g,
                  y,
                  b,
                  w = a[0],
                  T = a[1],
                  x = a[2],
                  k = a[3],
                  P = a[4],
                  C = a[5],
                  S = a[6],
                  O = a[7],
                  M = a[8],
                  j = a[9],
                  R = a[10],
                  E = a[12],
                  D = a[13],
                  A = a[14],
                  I = a[11],
                  L = Math.atan2(S, R);
                f.zOrigin &&
                  ((E = M * (A = -f.zOrigin) - a[12]),
                  (D = j * A - a[13]),
                  (A = R * A + f.zOrigin - a[14])),
                  (f.rotationX = L * z),
                  L &&
                    ((m = P * (y = Math.cos(-L)) + M * (b = Math.sin(-L))),
                    (v = C * y + j * b),
                    (g = S * y + R * b),
                    (M = P * -b + M * y),
                    (j = C * -b + j * y),
                    (R = S * -b + R * y),
                    (I = O * -b + I * y),
                    (P = m),
                    (C = v),
                    (S = g)),
                  (L = Math.atan2(-x, R)),
                  (f.rotationY = L * z),
                  L &&
                    ((v = T * (y = Math.cos(-L)) - j * (b = Math.sin(-L))),
                    (g = x * y - R * b),
                    (j = T * b + j * y),
                    (R = x * b + R * y),
                    (I = k * b + I * y),
                    (w = m = w * y - M * b),
                    (T = v),
                    (x = g)),
                  (L = Math.atan2(T, w)),
                  (f.rotation = L * z),
                  L &&
                    ((m = w * (y = Math.cos(L)) + T * (b = Math.sin(L))),
                    (v = P * y + C * b),
                    (g = M * y + j * b),
                    (T = T * y - w * b),
                    (C = C * y - P * b),
                    (j = j * y - M * b),
                    (w = m),
                    (P = v),
                    (M = g)),
                  f.rotationX &&
                    Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 &&
                    ((f.rotationX = f.rotation = 0),
                    (f.rotationY = 180 - f.rotationY)),
                  (L = Math.atan2(P, C)),
                  (f.scaleX =
                    ((1e5 * Math.sqrt(w * w + T * T + x * x) + 0.5) | 0) / 1e5),
                  (f.scaleY =
                    ((1e5 * Math.sqrt(C * C + S * S) + 0.5) | 0) / 1e5),
                  (f.scaleZ =
                    ((1e5 * Math.sqrt(M * M + j * j + R * R) + 0.5) | 0) / 1e5),
                  (w /= f.scaleX),
                  (P /= f.scaleY),
                  (T /= f.scaleX),
                  (C /= f.scaleY),
                  Math.abs(L) > 2e-5
                    ? ((f.skewX = L * z),
                      (P = 0),
                      "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(L)))
                    : (f.skewX = 0),
                  (f.perspective = I ? 1 / (I < 0 ? -I : I) : 0),
                  (f.x = E),
                  (f.y = D),
                  (f.z = A),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * P)),
                    (f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * C)));
              } else if (
                !jt ||
                s ||
                !a.length ||
                f.x !== a[4] ||
                f.y !== a[5] ||
                (!f.rotationX && !f.rotationY)
              ) {
                var q = a.length >= 6,
                  N = q ? a[0] : 1,
                  F = a[1] || 0,
                  B = a[2] || 0,
                  H = q ? a[3] : 1;
                (f.x = a[4] || 0),
                  (f.y = a[5] || 0),
                  (l = Math.sqrt(N * N + F * F)),
                  (u = Math.sqrt(H * H + B * B)),
                  (h = N || F ? Math.atan2(F, N) * z : f.rotation || 0),
                  (c = B || H ? Math.atan2(B, H) * z + h : f.skewX || 0),
                  (f.scaleX = l),
                  (f.scaleY = u),
                  (f.rotation = h),
                  (f.skewX = c),
                  jt &&
                    ((f.rotationX = f.rotationY = f.z = 0),
                    (f.perspective = _),
                    (f.scaleZ = 1)),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * N + f.yOrigin * B)),
                    (f.y -= f.yOrigin - (f.xOrigin * F + f.yOrigin * H)));
              }
              for (o in (Math.abs(f.skewX) > 90 &&
                Math.abs(f.skewX) < 270 &&
                (d
                  ? ((f.scaleX *= -1),
                    (f.skewX += f.rotation <= 0 ? 180 : -180),
                    (f.rotation += f.rotation <= 0 ? 180 : -180))
                  : ((f.scaleY *= -1), (f.skewX += f.skewX <= 0 ? 180 : -180))),
              (f.zOrigin = p),
              f))
                f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0);
            }
            return (
              i &&
                ((t._gsTransform = f),
                f.svg &&
                  (Pt && t.style[St]
                    ? n.l.delayedCall(0.001, function () {
                        Ut(t.style, St);
                      })
                    : !Pt &&
                      t.getAttribute("transform") &&
                      n.l.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      }))),
              f
            );
          }),
          Ht = function (t) {
            var e,
              i,
              n = this.data,
              s = -n.rotation * I,
              r = s + n.skewX * I,
              a = ((Math.cos(s) * n.scaleX * 1e5) | 0) / 1e5,
              o = ((Math.sin(s) * n.scaleX * 1e5) | 0) / 1e5,
              l = ((Math.sin(r) * -n.scaleY * 1e5) | 0) / 1e5,
              u = ((Math.cos(r) * n.scaleY * 1e5) | 0) / 1e5,
              h = this.t.style,
              c = this.t.currentStyle;
            if (c) {
              (i = o), (o = -l), (l = -i), (e = c.filter), (h.filter = "");
              var f,
                d,
                _ = this.t.offsetWidth,
                m = this.t.offsetHeight,
                v = "absolute" !== c.position,
                g =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  a +
                  ", M12=" +
                  o +
                  ", M21=" +
                  l +
                  ", M22=" +
                  u,
                y = n.x + (_ * n.xPercent) / 100,
                b = n.y + (m * n.yPercent) / 100;
              if (
                (null != n.ox &&
                  ((y +=
                    (f = (n.oxp ? _ * n.ox * 0.01 : n.ox) - _ / 2) -
                    (f * a +
                      (d = (n.oyp ? m * n.oy * 0.01 : n.oy) - m / 2) * o)),
                  (b += d - (f * l + d * u))),
                (g += v
                  ? ", Dx=" +
                    ((f = _ / 2) - (f * a + (d = m / 2) * o) + y) +
                    ", Dy=" +
                    (d - (f * l + d * u) + b) +
                    ")"
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (h.filter = e.replace(E, g))
                  : (h.filter = g + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === a &&
                    0 === o &&
                    0 === l &&
                    1 === u &&
                    ((v && -1 === g.indexOf("Dx=0, Dy=0")) ||
                      (T.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        h.removeAttribute("filter")))),
                !v)
              ) {
                var x,
                  k,
                  P,
                  C = p < 8 ? 1 : -1;
                for (
                  f = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (_ - ((a < 0 ? -a : a) * _ + (o < 0 ? -o : o) * m)) / 2 +
                        y
                    ),
                    n.ieOffsetY = Math.round(
                      (m - ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * _)) / 2 +
                        b
                    ),
                    wt = 0;
                  wt < 4;
                  wt++
                )
                  (P =
                    (i =
                      -1 !== (x = c[(k = st[wt])]).indexOf("px")
                        ? parseFloat(x)
                        : K(this.t, k, parseFloat(x), x.replace(w, "")) ||
                          0) !== n[k]
                      ? wt < 2
                        ? -n.ieOffsetX
                        : -n.ieOffsetY
                      : wt < 2
                      ? f - n.ieOffsetX
                      : d - n.ieOffsetY),
                    (h[k] =
                      (n[k] = Math.round(
                        i - P * (0 === wt || 2 === wt ? 1 : C)
                      )) + "px");
              }
            }
          },
          Yt =
            (Y.set3DTransformRatio =
            Y.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  s,
                  r,
                  a,
                  o,
                  l,
                  u,
                  h,
                  c,
                  d,
                  p,
                  _,
                  m,
                  v,
                  g,
                  y,
                  b,
                  w,
                  T,
                  x = this.data,
                  k = this.t.style,
                  P = x.rotation,
                  C = x.rotationX,
                  S = x.rotationY,
                  O = x.scaleX,
                  M = x.scaleY,
                  j = x.scaleZ,
                  R = x.x,
                  E = x.y,
                  D = x.z,
                  A = x.svg,
                  z = x.perspective,
                  L = x.force3D,
                  q = x.skewY,
                  N = x.skewX;
                if (
                  (q && ((N += q), (P += q)),
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== L ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      L) ||
                    D ||
                    z ||
                    S ||
                    C ||
                    1 !== j
                  ) ||
                    (Pt && A) ||
                    !jt)
                )
                  P || N || A
                    ? ((P *= I),
                      (w = N * I),
                      (T = 1e5),
                      (i = Math.cos(P) * O),
                      (r = Math.sin(P) * O),
                      (n = Math.sin(P - w) * -M),
                      (a = Math.cos(P - w) * M),
                      w &&
                        "simple" === x.skewType &&
                        ((e = Math.tan(w - q * I)),
                        (n *= e = Math.sqrt(1 + e * e)),
                        (a *= e),
                        q &&
                          ((e = Math.tan(q * I)),
                          (i *= e = Math.sqrt(1 + e * e)),
                          (r *= e))),
                      A &&
                        ((R +=
                          x.xOrigin -
                          (x.xOrigin * i + x.yOrigin * n) +
                          x.xOffset),
                        (E +=
                          x.yOrigin -
                          (x.xOrigin * r + x.yOrigin * a) +
                          x.yOffset),
                        Pt &&
                          (x.xPercent || x.yPercent) &&
                          ((m = this.t.getBBox()),
                          (R += 0.01 * x.xPercent * m.width),
                          (E += 0.01 * x.yPercent * m.height)),
                        R < (m = 1e-6) && R > -m && (R = 0),
                        E < m && E > -m && (E = 0)),
                      (b =
                        ((i * T) | 0) / T +
                        "," +
                        ((r * T) | 0) / T +
                        "," +
                        ((n * T) | 0) / T +
                        "," +
                        ((a * T) | 0) / T +
                        "," +
                        R +
                        "," +
                        E +
                        ")"),
                      A && Pt
                        ? this.t.setAttribute("transform", "matrix(" + b)
                        : (k[St] =
                            (x.xPercent || x.yPercent
                              ? "translate(" +
                                x.xPercent +
                                "%," +
                                x.yPercent +
                                "%) matrix("
                              : "matrix(") + b))
                    : (k[St] =
                        (x.xPercent || x.yPercent
                          ? "translate(" +
                            x.xPercent +
                            "%," +
                            x.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        O +
                        ",0,0," +
                        M +
                        "," +
                        R +
                        "," +
                        E +
                        ")");
                else {
                  if (
                    (f &&
                      (O < (m = 1e-4) && O > -m && (O = j = 2e-5),
                      M < m && M > -m && (M = j = 2e-5),
                      !z || x.z || x.rotationX || x.rotationY || (z = 0)),
                    P || N)
                  )
                    (P *= I),
                      (v = i = Math.cos(P)),
                      (g = r = Math.sin(P)),
                      N &&
                        ((P -= N * I),
                        (v = Math.cos(P)),
                        (g = Math.sin(P)),
                        "simple" === x.skewType &&
                          ((e = Math.tan((N - q) * I)),
                          (v *= e = Math.sqrt(1 + e * e)),
                          (g *= e),
                          x.skewY &&
                            ((e = Math.tan(q * I)),
                            (i *= e = Math.sqrt(1 + e * e)),
                            (r *= e)))),
                      (n = -g),
                      (a = v);
                  else {
                    if (!(S || C || 1 !== j || z || A))
                      return void (k[St] =
                        (x.xPercent || x.yPercent
                          ? "translate(" +
                            x.xPercent +
                            "%," +
                            x.yPercent +
                            "%) translate3d("
                          : "translate3d(") +
                        R +
                        "px," +
                        E +
                        "px," +
                        D +
                        "px)" +
                        (1 !== O || 1 !== M
                          ? " scale(" + O + "," + M + ")"
                          : ""));
                    (i = a = 1), (n = r = 0);
                  }
                  (h = 1),
                    (s = o = l = u = c = d = 0),
                    (p = z ? -1 / z : 0),
                    (_ = x.zOrigin),
                    (m = 1e-6),
                    ",",
                    "0",
                    (P = S * I) &&
                      ((v = Math.cos(P)),
                      (l = -(g = Math.sin(P))),
                      (c = p * -g),
                      (s = i * g),
                      (o = r * g),
                      (h = v),
                      (p *= v),
                      (i *= v),
                      (r *= v)),
                    (P = C * I) &&
                      ((e = n * (v = Math.cos(P)) + s * (g = Math.sin(P))),
                      (y = a * v + o * g),
                      (u = h * g),
                      (d = p * g),
                      (s = n * -g + s * v),
                      (o = a * -g + o * v),
                      (h *= v),
                      (p *= v),
                      (n = e),
                      (a = y)),
                    1 !== j && ((s *= j), (o *= j), (h *= j), (p *= j)),
                    1 !== M && ((n *= M), (a *= M), (u *= M), (d *= M)),
                    1 !== O && ((i *= O), (r *= O), (l *= O), (c *= O)),
                    (_ || A) &&
                      (_ && ((R += s * -_), (E += o * -_), (D += h * -_ + _)),
                      A &&
                        ((R +=
                          x.xOrigin -
                          (x.xOrigin * i + x.yOrigin * n) +
                          x.xOffset),
                        (E +=
                          x.yOrigin -
                          (x.xOrigin * r + x.yOrigin * a) +
                          x.yOffset)),
                      R < m && R > -m && (R = "0"),
                      E < m && E > -m && (E = "0"),
                      D < m && D > -m && (D = 0)),
                    (b =
                      x.xPercent || x.yPercent
                        ? "translate(" +
                          x.xPercent +
                          "%," +
                          x.yPercent +
                          "%) matrix3d("
                        : "matrix3d("),
                    (b +=
                      (i < m && i > -m ? "0" : i) +
                      "," +
                      (r < m && r > -m ? "0" : r) +
                      "," +
                      (l < m && l > -m ? "0" : l)),
                    (b +=
                      "," +
                      (c < m && c > -m ? "0" : c) +
                      "," +
                      (n < m && n > -m ? "0" : n) +
                      "," +
                      (a < m && a > -m ? "0" : a)),
                    C || S || 1 !== j
                      ? ((b +=
                          "," +
                          (u < m && u > -m ? "0" : u) +
                          "," +
                          (d < m && d > -m ? "0" : d) +
                          "," +
                          (s < m && s > -m ? "0" : s)),
                        (b +=
                          "," +
                          (o < m && o > -m ? "0" : o) +
                          "," +
                          (h < m && h > -m ? "0" : h) +
                          "," +
                          (p < m && p > -m ? "0" : p) +
                          ","))
                      : (b += ",0,0,0,0,1,0,"),
                    (b +=
                      R + "," + E + "," + D + "," + (z ? 1 + -D / z : 1) + ")"),
                    (k[St] = b);
                }
              });
        ((l = Rt.prototype).x =
          l.y =
          l.z =
          l.skewX =
          l.skewY =
          l.rotation =
          l.rotationX =
          l.rotationY =
          l.zOrigin =
          l.xPercent =
          l.yPercent =
          l.xOffset =
          l.yOffset =
            0),
          (l.scaleX = l.scaleY = l.scaleZ = 1),
          xt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, n, s, a, o, l) {
                if (s._lastParsedTransform === l) return a;
                s._lastParsedTransform = l;
                var u,
                  h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[n] && ((u = l[n]), (l[n] = e)),
                  h && (l.scale = h(m, t));
                var c,
                  f,
                  d,
                  p,
                  v,
                  g,
                  y,
                  b,
                  w,
                  T = t._gsTransform,
                  x = t.style,
                  k = Ct.length,
                  P = l,
                  C = {},
                  S = Bt(t, i, !0, P.parseTransform),
                  O =
                    P.transform &&
                    ("function" == typeof P.transform
                      ? P.transform(m, _)
                      : P.transform);
                if (
                  ((S.skewType = P.skewType || S.skewType || r.defaultSkewType),
                  (s._transform = S),
                  O && "string" == typeof O && St)
                )
                  ((f = B.style)[St] = O),
                    (f.display = "block"),
                    (f.position = "absolute"),
                    -1 !== O.indexOf("%") &&
                      ((f.width = Z(t, "width")), (f.height = Z(t, "height"))),
                    N.body.appendChild(B),
                    (c = Bt(B, null, !1)),
                    "simple" === S.skewType &&
                      (c.scaleY *= Math.cos(c.skewX * I)),
                    S.svg &&
                      ((g = S.xOrigin),
                      (y = S.yOrigin),
                      (c.x -= S.xOffset),
                      (c.y -= S.yOffset),
                      (P.transformOrigin || P.svgOrigin) &&
                        ((O = {}),
                        zt(
                          t,
                          at(P.transformOrigin),
                          O,
                          P.svgOrigin,
                          P.smoothOrigin,
                          !0
                        ),
                        (g = O.xOrigin),
                        (y = O.yOrigin),
                        (c.x -= O.xOffset - S.xOffset),
                        (c.y -= O.yOffset - S.yOffset)),
                      (g || y) &&
                        ((b = Ft(B, !0)),
                        (c.x -= g - (g * b[0] + y * b[2])),
                        (c.y -= y - (g * b[1] + y * b[3])))),
                    N.body.removeChild(B),
                    c.perspective || (c.perspective = S.perspective),
                    null != P.xPercent &&
                      (c.xPercent = lt(P.xPercent, S.xPercent)),
                    null != P.yPercent &&
                      (c.yPercent = lt(P.yPercent, S.yPercent));
                else if ("object" == typeof P) {
                  if (
                    ((c = {
                      scaleX: lt(
                        null != P.scaleX ? P.scaleX : P.scale,
                        S.scaleX
                      ),
                      scaleY: lt(
                        null != P.scaleY ? P.scaleY : P.scale,
                        S.scaleY
                      ),
                      scaleZ: lt(P.scaleZ, S.scaleZ),
                      x: lt(P.x, S.x),
                      y: lt(P.y, S.y),
                      z: lt(P.z, S.z),
                      xPercent: lt(P.xPercent, S.xPercent),
                      yPercent: lt(P.yPercent, S.yPercent),
                      perspective: lt(P.transformPerspective, S.perspective),
                    }),
                    null != (v = P.directionalRotation))
                  )
                    if ("object" == typeof v) for (f in v) P[f] = v[f];
                    else P.rotation = v;
                  "string" == typeof P.x &&
                    -1 !== P.x.indexOf("%") &&
                    ((c.x = 0), (c.xPercent = lt(P.x, S.xPercent))),
                    "string" == typeof P.y &&
                      -1 !== P.y.indexOf("%") &&
                      ((c.y = 0), (c.yPercent = lt(P.y, S.yPercent))),
                    (c.rotation = ut(
                      "rotation" in P
                        ? P.rotation
                        : "shortRotation" in P
                        ? P.shortRotation + "_short"
                        : "rotationZ" in P
                        ? P.rotationZ
                        : S.rotation,
                      S.rotation,
                      "rotation",
                      C
                    )),
                    jt &&
                      ((c.rotationX = ut(
                        "rotationX" in P
                          ? P.rotationX
                          : "shortRotationX" in P
                          ? P.shortRotationX + "_short"
                          : S.rotationX || 0,
                        S.rotationX,
                        "rotationX",
                        C
                      )),
                      (c.rotationY = ut(
                        "rotationY" in P
                          ? P.rotationY
                          : "shortRotationY" in P
                          ? P.shortRotationY + "_short"
                          : S.rotationY || 0,
                        S.rotationY,
                        "rotationY",
                        C
                      ))),
                    (c.skewX = ut(P.skewX, S.skewX)),
                    (c.skewY = ut(P.skewY, S.skewY));
                }
                for (
                  jt &&
                    null != P.force3D &&
                    ((S.force3D = P.force3D), (p = !0)),
                    (d =
                      S.force3D ||
                      S.z ||
                      S.rotationX ||
                      S.rotationY ||
                      c.z ||
                      c.rotationX ||
                      c.rotationY ||
                      c.perspective) ||
                      null == P.scale ||
                      (c.scaleZ = 1);
                  --k > -1;

                )
                  ((O = c[(w = Ct[k])] - S[w]) > 1e-6 ||
                    O < -1e-6 ||
                    null != P[w] ||
                    null != L[w]) &&
                    ((p = !0),
                    (a = new gt(S, w, S[w], O, a)),
                    w in C && (a.e = C[w]),
                    (a.xs0 = 0),
                    (a.plugin = o),
                    s._overwriteProps.push(a.n));
                return (
                  (O = P.transformOrigin),
                  S.svg &&
                    (O || P.svgOrigin) &&
                    ((g = S.xOffset),
                    (y = S.yOffset),
                    zt(t, at(O), c, P.svgOrigin, P.smoothOrigin),
                    (a = yt(
                      S,
                      "xOrigin",
                      (T ? S : c).xOrigin,
                      c.xOrigin,
                      a,
                      "transformOrigin"
                    )),
                    (a = yt(
                      S,
                      "yOrigin",
                      (T ? S : c).yOrigin,
                      c.yOrigin,
                      a,
                      "transformOrigin"
                    )),
                    (g === S.xOffset && y === S.yOffset) ||
                      ((a = yt(
                        S,
                        "xOffset",
                        T ? g : S.xOffset,
                        S.xOffset,
                        a,
                        "transformOrigin"
                      )),
                      (a = yt(
                        S,
                        "yOffset",
                        T ? y : S.yOffset,
                        S.yOffset,
                        a,
                        "transformOrigin"
                      ))),
                    (O = "0px 0px")),
                  (O || (jt && d && S.zOrigin)) &&
                    (St
                      ? ((p = !0),
                        (w = Mt),
                        (O = (O || Z(t, w, i, !1, "50% 50%")) + ""),
                        ((a = new gt(x, w, 0, 0, a, -1, "transformOrigin")).b =
                          x[w]),
                        (a.plugin = o),
                        jt
                          ? ((f = S.zOrigin),
                            (O = O.split(" ")),
                            (S.zOrigin =
                              (O.length > 2 && (0 === f || "0px" !== O[2])
                                ? parseFloat(O[2])
                                : f) || 0),
                            (a.xs0 = a.e =
                              O[0] + " " + (O[1] || "50%") + " 0px"),
                            ((a = new gt(S, "zOrigin", 0, 0, a, -1, a.n)).b =
                              f),
                            (a.xs0 = a.e = S.zOrigin))
                          : (a.xs0 = a.e = O))
                      : at(O + "", S)),
                  p &&
                    (s._transformType =
                      (S.svg && Pt) || (!d && 3 !== this._transformType)
                        ? 2
                        : 3),
                  u && (l[n] = u),
                  h && (l.scale = h),
                  a
                );
              },
              prefix: !0,
            }
          ),
          xt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          xt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, n, s, r, a, o) {
              n = this.format(n);
              var l,
                u,
                h,
                c,
                f,
                d,
                p,
                _,
                m,
                v,
                g,
                y,
                b,
                w,
                T,
                x,
                k = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  v = parseFloat(t.offsetHeight),
                  l = n.split(" "),
                  u = 0;
                u < k.length;
                u++
              )
                this.p.indexOf("border") && (k[u] = G(k[u])),
                  -1 !== (f = c = Z(t, k[u], i, !1, "0px")).indexOf(" ") &&
                    ((f = (c = f.split(" "))[0]), (c = c[1])),
                  (d = h = l[u]),
                  (p = parseFloat(f)),
                  (y = f.substr((p + "").length)),
                  (b = "=" === d.charAt(1))
                    ? ((_ = parseInt(d.charAt(0) + "1", 10)),
                      (d = d.substr(2)),
                      (_ *= parseFloat(d)),
                      (g = d.substr((_ + "").length - (_ < 0 ? 1 : 0)) || ""))
                    : ((_ = parseFloat(d)), (g = d.substr((_ + "").length))),
                  "" === g && (g = e[s] || y),
                  g !== y &&
                    ((w = K(t, "borderLeft", p, y)),
                    (T = K(t, "borderTop", p, y)),
                    "%" === g
                      ? ((f = (w / m) * 100 + "%"), (c = (T / v) * 100 + "%"))
                      : "em" === g
                      ? ((f = w / (x = K(t, "borderLeft", 1, "em")) + "em"),
                        (c = T / x + "em"))
                      : ((f = w + "px"), (c = T + "px")),
                    b &&
                      ((d = parseFloat(f) + _ + g),
                      (h = parseFloat(c) + _ + g))),
                  (a = bt(P, k[u], f + " " + c, d + " " + h, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: _t("0px 0px 0px 0px", !1, !0),
          }),
          xt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, n, s, r, a) {
                return bt(
                  t.style,
                  n,
                  this.format(Z(t, n, i, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  r
                );
              },
              prefix: !0,
              formatter: _t("0px 0px", !1, !0),
            }
          ),
          xt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, n, s, r, a) {
              var o,
                l,
                u,
                h,
                c,
                f,
                d = "background-position",
                _ = i || Q(t, null),
                m = this.format(
                  (_
                    ? p
                      ? _.getPropertyValue(d + "-x") +
                        " " +
                        _.getPropertyValue(d + "-y")
                      : _.getPropertyValue(d)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                v = this.format(e);
              if (
                (-1 !== m.indexOf("%")) != (-1 !== v.indexOf("%")) &&
                v.split(",").length < 2 &&
                (f = Z(t, "backgroundImage").replace(O, "")) &&
                "none" !== f
              ) {
                for (
                  o = m.split(" "),
                    l = v.split(" "),
                    H.setAttribute("src", f),
                    u = 2;
                  --u > -1;

                )
                  (h = -1 !== (m = o[u]).indexOf("%")) !==
                    (-1 !== l[u].indexOf("%")) &&
                    ((c =
                      0 === u
                        ? t.offsetWidth - H.width
                        : t.offsetHeight - H.height),
                    (o[u] = h
                      ? (parseFloat(m) / 100) * c + "px"
                      : (parseFloat(m) / c) * 100 + "%"));
                m = o.join(" ");
              }
              return this.parseComplex(t.style, m, v, r, a);
            },
            formatter: at,
          }),
          xt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : at(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          xt("perspective", { defaultValue: "0px", prefix: !0 }),
          xt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          xt("transformStyle", { prefix: !0 }),
          xt("backfaceVisibility", { prefix: !0 }),
          xt("userSelect", { prefix: !0 }),
          xt("margin", {
            parser: mt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          xt("padding", {
            parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          xt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, n, s, r, a) {
              var o, l, u;
              return (
                p < 9
                  ? ((l = t.currentStyle),
                    (u = p < 8 ? " " : ","),
                    (o =
                      "rect(" +
                      l.clipTop +
                      u +
                      l.clipRight +
                      u +
                      l.clipBottom +
                      u +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(u)))
                  : ((o = this.format(Z(t, this.p, i, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, o, e, r, a)
              );
            },
          }),
          xt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          xt("autoRound,strictUnits", {
            parser: function (t, e, i, n, s) {
              return s;
            },
          }),
          xt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, n, s, r, a) {
              var o = Z(t, "borderTopWidth", i, !1, "0px"),
                l = this.format(e).split(" "),
                u = l[0].replace(w, "");
              return (
                "px" !== u &&
                  (o = parseFloat(o) / K(t, "borderTopWidth", 1, u) + u),
                this.parseComplex(
                  t.style,
                  this.format(
                    o +
                      " " +
                      Z(t, "borderTopStyle", i, !1, "solid") +
                      " " +
                      Z(t, "borderTopColor", i, !1, "#000")
                  ),
                  l.join(" "),
                  r,
                  a
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(pt) || ["#000"])[0]
              );
            },
          }),
          xt("borderWidth", {
            parser: mt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          xt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, s, r) {
              var a = t.style,
                o = "cssFloat" in a ? "cssFloat" : "styleFloat";
              return new gt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e);
            },
          });
        var Xt = function (t) {
          var e,
            i = this.t,
            n = i.filter || Z(this.data, "filter") || "",
            s = (this.s + this.c * t) | 0;
          100 === s &&
            (-1 === n.indexOf("atrix(") &&
            -1 === n.indexOf("radient(") &&
            -1 === n.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !Z(this.data, "filter")))
              : ((i.filter = n.replace(k, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
              -1 === n.indexOf("pacity")
                ? (0 === s && this.xn1) ||
                  (i.filter = n + " alpha(opacity=" + s + ")")
                : (i.filter = n.replace(T, "opacity=" + s)));
        };
        xt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, n, s, r, a) {
            var o = parseFloat(Z(t, "opacity", i, !1, "1")),
              l = t.style,
              u = "autoAlpha" === n;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              u &&
                1 === o &&
                "hidden" === Z(t, "visibility", i) &&
                0 !== e &&
                (o = 0),
              U
                ? (r = new gt(l, "opacity", o, e - o, r))
                : (((r = new gt(l, "opacity", 100 * o, 100 * (e - o), r)).xn1 =
                    u ? 1 : 0),
                  (l.zoom = 1),
                  (r.type = 2),
                  (r.b = "alpha(opacity=" + r.s + ")"),
                  (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                  (r.data = t),
                  (r.plugin = a),
                  (r.setRatio = Xt)),
              u &&
                (((r = new gt(
                  l,
                  "visibility",
                  0,
                  0,
                  r,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                s._overwriteProps.push(r.n),
                s._overwriteProps.push(n)),
              r
            );
          },
        });
        var Ut = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  t.removeProperty(e.replace(C, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Vt = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Ut(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        xt("className", {
          parser: function (e, n, s, r, a, o, l) {
            var u,
              h,
              c,
              f,
              d,
              p = e.getAttribute("class") || "",
              _ = e.style.cssText;
            if (
              (((a = r._classNamePT = new gt(e, s, 0, 0, a, 2)).setRatio = Vt),
              (a.pr = -11),
              (t = !0),
              (a.b = p),
              (h = et(e, i)),
              (c = e._gsClassPT))
            ) {
              for (f = {}, d = c.data; d; ) (f[d.p] = 1), (d = d._next);
              c.setRatio(1);
            }
            return (
              (e._gsClassPT = a),
              (a.e =
                "=" !== n.charAt(1)
                  ? n
                  : p.replace(
                      new RegExp("(?:\\s|^)" + n.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === n.charAt(0) ? " " + n.substr(2) : "")),
              e.setAttribute("class", a.e),
              (u = it(e, h, et(e), l, f)),
              e.setAttribute("class", p),
              (a.data = u.firstMPT),
              (e.style.cssText = _),
              (a = a.xfirst = r.parse(e, u.difs, a, o))
            );
          },
        });
        var Wt = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              s,
              r,
              a = this.t.style,
              l = o.transform.parse;
            if ("all" === this.e) (a.cssText = ""), (s = !0);
            else
              for (
                n = (e = this.e.split(" ").join("").split(",")).length;
                --n > -1;

              )
                (i = e[n]),
                  o[i] &&
                    (o[i].parse === l
                      ? (s = !0)
                      : (i = "transformOrigin" === i ? Mt : o[i].p)),
                  Ut(a, i);
            s &&
              (Ut(a, St),
              (r = this.t._gsTransform) &&
                (r.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          xt("clearProps", {
            parser: function (e, i, n, s, r) {
              return (
                ((r = new gt(e, n, 0, 0, r, 2)).setRatio = Wt),
                (r.e = i),
                (r.pr = -10),
                (r.data = s._tween),
                (t = !0),
                r
              );
            },
          }),
            l = "bezier,throwProps,physicsProps,physics2D".split(","),
            wt = l.length;
          wt--;

        )
          kt(l[wt]);
        ((l = r.prototype)._firstPT =
          l._lastParsedTransform =
          l._transform =
            null),
          (l._onInitTween = function (n, a, l, f) {
            if (!n.nodeType) return !1;
            (this._target = _ = n),
              (this._tween = l),
              (this._vars = a),
              (m = f),
              (u = a.autoRound),
              (t = !1),
              (e = a.suffixMap || r.suffixMap),
              (i = Q(n, "")),
              (s = this._overwriteProps);
            var p,
              v,
              g,
              y,
              b,
              w,
              T,
              k,
              P,
              C = n.style;
            if (
              (h &&
                "" === C.zIndex &&
                (("auto" !== (p = Z(n, "zIndex", i)) && "" !== p) ||
                  this._addLazySet(C, "zIndex", 0)),
              "string" == typeof a &&
                ((y = C.cssText),
                (p = et(n, i)),
                (C.cssText = y + ";" + a),
                (p = it(n, p, et(n)).difs),
                !U && x.test(a) && (p.opacity = parseFloat(RegExp.$1)),
                (a = p),
                (C.cssText = y)),
              a.className
                ? (this._firstPT = v =
                    o.className.parse(
                      n,
                      a.className,
                      "className",
                      this,
                      null,
                      null,
                      a
                    ))
                : (this._firstPT = v = this.parse(n, a, null)),
              this._transformType)
            ) {
              for (
                P = 3 === this._transformType,
                  St
                    ? c &&
                      ((h = !0),
                      "" === C.zIndex &&
                        (("auto" !== (T = Z(n, "zIndex", i)) && "" !== T) ||
                          this._addLazySet(C, "zIndex", 0)),
                      d &&
                        this._addLazySet(
                          C,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (P ? "visible" : "hidden")
                        ))
                    : (C.zoom = 1),
                  g = v;
                g && g._next;

              )
                g = g._next;
              (k = new gt(n, "transform", 0, 0, null, 2)),
                this._linkCSSP(k, null, g),
                (k.setRatio = St ? Yt : Ht),
                (k.data = this._transform || Bt(n, i, !0)),
                (k.tween = l),
                (k.pr = -1),
                s.pop();
            }
            if (t) {
              for (; v; ) {
                for (w = v._next, g = y; g && g.pr > v.pr; ) g = g._next;
                (v._prev = g ? g._prev : b) ? (v._prev._next = v) : (y = v),
                  (v._next = g) ? (g._prev = v) : (b = v),
                  (v = w);
              }
              this._firstPT = y;
            }
            return !0;
          }),
          (l.parse = function (t, n, s, r) {
            var a,
              l,
              h,
              c,
              f,
              d,
              p,
              v,
              g,
              y,
              b = t.style;
            for (a in n) {
              if (
                ("function" == typeof (d = n[a]) && (d = d(m, _)), (l = o[a]))
              )
                s = l.parse(t, d, a, this, s, r, n);
              else {
                if ("--" === a.substr(0, 2)) {
                  this._tween._propLookup[a] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    Q(t).getPropertyValue(a) + "",
                    d + "",
                    a,
                    !1,
                    a
                  );
                  continue;
                }
                (f = Z(t, a, i) + ""),
                  (g = "string" == typeof d),
                  "color" === a ||
                  "fill" === a ||
                  "stroke" === a ||
                  -1 !== a.indexOf("Color") ||
                  (g && P.test(d))
                    ? (g ||
                        (d =
                          ((d = ft(d)).length > 3 ? "rgba(" : "rgb(") +
                          d.join(",") +
                          ")"),
                      (s = bt(b, a, f, d, !0, "transparent", s, 0, r)))
                    : g && A.test(d)
                    ? (s = bt(b, a, f, d, !0, null, s, 0, r))
                    : ((p =
                        (h = parseFloat(f)) || 0 === h
                          ? f.substr((h + "").length)
                          : ""),
                      ("" !== f && "auto" !== f) ||
                        ("width" === a || "height" === a
                          ? ((h = rt(t, a, i)), (p = "px"))
                          : "left" === a || "top" === a
                          ? ((h = tt(t, a, i)), (p = "px"))
                          : ((h = "opacity" !== a ? 0 : 1), (p = ""))),
                      (y = g && "=" === d.charAt(1))
                        ? ((c = parseInt(d.charAt(0) + "1", 10)),
                          (d = d.substr(2)),
                          (c *= parseFloat(d)),
                          (v = d.replace(w, "")))
                        : ((c = parseFloat(d)),
                          (v = g ? d.replace(w, "") : "")),
                      "" === v && (v = a in e ? e[a] : p),
                      (d = c || 0 === c ? (y ? c + h : c) + v : n[a]),
                      p !== v &&
                        (("" === v && "lineHeight" !== a) ||
                          ((c || 0 === c) &&
                            h &&
                            ((h = K(t, a, h, p)),
                            "%" === v
                              ? ((h /= K(t, a, 100, "%") / 100),
                                !0 !== n.strictUnits && (f = h + "%"))
                              : "em" === v ||
                                "rem" === v ||
                                "vw" === v ||
                                "vh" === v
                              ? (h /= K(t, a, 1, v))
                              : "px" !== v && ((c = K(t, a, c, v)), (v = "px")),
                            y && (c || 0 === c) && (d = c + h + v)))),
                      y && (c += h),
                      (!h && 0 !== h) || (!c && 0 !== c)
                        ? void 0 !== b[a] &&
                          (d || (d + "" != "NaN" && null != d))
                          ? ((s = new gt(
                              b,
                              a,
                              c || h || 0,
                              0,
                              s,
                              -1,
                              a,
                              !1,
                              0,
                              f,
                              d
                            )).xs0 =
                              "none" !== d ||
                              ("display" !== a && -1 === a.indexOf("Style"))
                                ? d
                                : f)
                          : W("invalid " + a + " tween value: " + n[a])
                        : ((s = new gt(
                            b,
                            a,
                            h,
                            c - h,
                            s,
                            0,
                            a,
                            !1 !== u && ("px" === v || "zIndex" === a),
                            0,
                            f,
                            d
                          )).xs0 = v));
              }
              r && s && !s.plugin && (s.plugin = r);
            }
            return s;
          }),
          (l.setRatio = function (t) {
            var e,
              i,
              n,
              s = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; s; ) {
                  if (
                    ((e = s.c * t + s.s),
                    s.r ? (e = s.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                    s.type)
                  )
                    if (1 === s.type)
                      if (2 === (n = s.l))
                        s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                      else if (3 === n)
                        s.t[s.p] =
                          s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                      else if (4 === n)
                        s.t[s.p] =
                          s.xs0 +
                          e +
                          s.xs1 +
                          s.xn1 +
                          s.xs2 +
                          s.xn2 +
                          s.xs3 +
                          s.xn3 +
                          s.xs4;
                      else if (5 === n)
                        s.t[s.p] =
                          s.xs0 +
                          e +
                          s.xs1 +
                          s.xn1 +
                          s.xs2 +
                          s.xn2 +
                          s.xs3 +
                          s.xn3 +
                          s.xs4 +
                          s.xn4 +
                          s.xs5;
                      else {
                        for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++)
                          i += s["xn" + n] + s["xs" + (n + 1)];
                        s.t[s.p] = i;
                      }
                    else
                      -1 === s.type
                        ? (s.t[s.p] = s.xs0)
                        : s.setRatio && s.setRatio(t);
                  else s.t[s.p] = e + s.xs0;
                  s = s._next;
                }
              else
                for (; s; )
                  2 !== s.type ? (s.t[s.p] = s.b) : s.setRatio(t),
                    (s = s._next);
            else
              for (; s; ) {
                if (2 !== s.type)
                  if (s.r && -1 !== s.type)
                    if (((e = s.r(s.s + s.c)), s.type)) {
                      if (1 === s.type) {
                        for (
                          n = s.l, i = s.xs0 + e + s.xs1, n = 1;
                          n < s.l;
                          n++
                        )
                          i += s["xn" + n] + s["xs" + (n + 1)];
                        s.t[s.p] = i;
                      }
                    } else s.t[s.p] = e + s.xs0;
                  else s.t[s.p] = s.e;
                else s.setRatio(t);
                s = s._next;
              }
          }),
          (l._enableTransforms = function (t) {
            (this._transform = this._transform || Bt(this._target, i, !0)),
              (this._transformType =
                (this._transform.svg && Pt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Jt = function (t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (l._addLazySet = function (t, e, i) {
          var n = (this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = Jt), (n.data = this);
        }),
          (l._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (l._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (l._kill = function (t) {
            var e,
              i,
              s,
              r = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((r = {}), t)) r[i] = t[i];
              (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((s = e.xfirst) && s._prev
                  ? this._linkCSSP(s._prev, e._next, s._prev._prev)
                  : s === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, s._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return n.j.prototype._kill.call(this, r);
          });
        var $t = function (t, e, i) {
          var n, s, r, a;
          if (t.slice) for (s = t.length; --s > -1; ) $t(t[s], e, i);
          else
            for (s = (n = t.childNodes).length; --s > -1; )
              (a = (r = n[s]).type),
                r.style && (e.push(et(r)), i && i.push(r)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !r.childNodes.length ||
                  $t(r, e, i);
        };
        return (
          (r.cascadeTo = function (t, e, i) {
            var s,
              r,
              a,
              o,
              l = n.l.to(t, e, i),
              u = [l],
              h = [],
              c = [],
              f = [],
              d = n.l._internals.reservedProps;
            for (
              t = l._targets || l.target,
                $t(t, h, f),
                l.render(e, !0, !0),
                $t(t, c),
                l.render(0, !0, !0),
                l._enabled(!0),
                s = f.length;
              --s > -1;

            )
              if ((r = it(f[s], h[s], c[s])).firstMPT) {
                for (a in ((r = r.difs), i)) d[a] && (r[a] = i[a]);
                for (a in ((o = {}), r)) o[a] = h[s][a];
                u.push(n.l.fromTo(f[s], e, o, r));
              }
            return u;
          }),
          n.j.activate([r]),
          r
        );
      },
      !0
    );
    const r = n.k.CSSPlugin,
      a = n.k._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (t, e, i, n) {
          var s, r;
          if ("function" != typeof t.setAttribute) return !1;
          for (s in e)
            "function" == typeof (r = e[s]) && (r = r(n, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(s) + "",
                r + "",
                s,
                !1,
                s
              ),
              this._overwriteProps.push(s);
          return !0;
        },
      }),
      o = n.k._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (t, e, i) {
          return (this._tween = i), !0;
        },
      }),
      l = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (i) {
          return ((Math.round(i / t) * t * e) | 0) / e;
        };
      },
      u = function (t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
      },
      h = o.prototype;
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
     */ (h._onInitAllProps = function () {
      var t,
        e,
        i,
        n,
        s = this._tween,
        r = s.vars.roundProps,
        a = {},
        o = s._propLookup.roundProps;
      if ("object" != typeof r || r.push)
        for (
          "string" == typeof r && (r = r.split(",")), i = r.length;
          --i > -1;

        )
          a[r[i]] = Math.round;
      else for (n in r) a[n] = l(r[n]);
      for (n in a)
        for (t = s._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(a)
              : t.n === n &&
                (2 === t.f && t.t
                  ? u(t.t._firstPT, a[n])
                  : (this._add(t.t, n, t.s, t.c, a[n]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : s._firstPT === t && (s._firstPT = e),
                    (t._next = t._prev = null),
                    (s._propLookup[n] = o))),
            (t = e);
      return !1;
    }),
      (h._add = function (t, e, i, n, s) {
        this._addTween(t, e, i, i + n, e, s || Math.round),
          this._overwriteProps.push(e);
      });
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
    const c = n.k._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (t, e, i, n) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var s,
          r,
          a,
          o,
          l,
          u,
          h = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (s in e)
          "useRadians" !== s &&
            ("function" == typeof (o = e[s]) && (o = o(n, t)),
            (r = (u = (o + "").split("_"))[0]),
            (a = parseFloat(
              "function" != typeof t[s]
                ? t[s]
                : t[
                    s.indexOf("set") ||
                    "function" != typeof t["get" + s.substr(3)]
                      ? s
                      : "get" + s.substr(3)
                  ]()
            )),
            (l =
              (o = this.finals[s] =
                "string" == typeof r && "=" === r.charAt(1)
                  ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))
                  : Number(r) || 0) - a),
            u.length &&
              (-1 !== (r = u.join("_")).indexOf("short") &&
                (l %= h) !== l % (h / 2) &&
                (l = l < 0 ? l + h : l - h),
              -1 !== r.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * h) % h) - ((l / h) | 0) * h)
                : -1 !== r.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * h) % h) - ((l / h) | 0) * h)),
            (l > 1e-6 || l < -1e-6) &&
              (this._addTween(t, s, a, a + l, s),
              this._overwriteProps.push(s)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    });
    (c._autoCSS = !0),
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
      n.k._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function () {
          var t = function (t) {
              n.i.call(this, t),
                (this._labels = {}),
                (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate);
              var e,
                i,
                s = this.vars;
              for (i in s)
                (e = s[i]),
                  r(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (s[i] = this._swapSelfInParams(e));
              r(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger);
            },
            e = n.l._internals,
            i = (t._internals = {}),
            s = e.isSelector,
            r = e.isArray,
            a = e.lazyTweens,
            o = e.lazyRender,
            l = n.k._gsDefine.globals,
            u = function (t) {
              var e,
                i = {};
              for (e in t) i[e] = t[e];
              return i;
            },
            h = function (t, e, i) {
              var n,
                s,
                r = t.cycle;
              for (n in r)
                (s = r[n]),
                  (t[n] =
                    "function" == typeof s ? s(i, e[i]) : s[i % s.length]);
              delete t.cycle;
            },
            c = (i.pauseCallback = function () {}),
            f = function (t) {
              var e,
                i = [],
                n = t.length;
              for (e = 0; e !== n; i.push(t[e++]));
              return i;
            },
            d = (t.prototype = new n.i());
          return (
            (t.version = "2.0.1"),
            (d.constructor = t),
            (d.kill()._gc = d._forcingPlayhead = d._hasPause = !1),
            (d.to = function (t, e, i, s) {
              var r = (i.repeat && l.TweenMax) || n.l;
              return e ? this.add(new r(t, e, i), s) : this.set(t, i, s);
            }),
            (d.from = function (t, e, i, s) {
              return this.add(
                ((i.repeat && l.TweenMax) || n.l).from(t, e, i),
                s
              );
            }),
            (d.fromTo = function (t, e, i, s, r) {
              var a = (s.repeat && l.TweenMax) || n.l;
              return e ? this.add(a.fromTo(t, e, i, s), r) : this.set(t, s, r);
            }),
            (d.staggerTo = function (e, i, r, a, o, l, c, d) {
              var p,
                _,
                m = new t({
                  onComplete: l,
                  onCompleteParams: c,
                  callbackScope: d,
                  smoothChildTiming: this.smoothChildTiming,
                }),
                v = r.cycle;
              for (
                "string" == typeof e && (e = n.l.selector(e) || e),
                  s((e = e || [])) && (e = f(e)),
                  (a = a || 0) < 0 && ((e = f(e)).reverse(), (a *= -1)),
                  _ = 0;
                _ < e.length;
                _++
              )
                (p = u(r)).startAt &&
                  ((p.startAt = u(p.startAt)),
                  p.startAt.cycle && h(p.startAt, e, _)),
                  v &&
                    (h(p, e, _),
                    null != p.duration &&
                      ((i = p.duration), delete p.duration)),
                  m.to(e[_], i, p, _ * a);
              return this.add(m, o);
            }),
            (d.staggerFrom = function (t, e, i, n, s, r, a, o) {
              return (
                (i.immediateRender = 0 != i.immediateRender),
                (i.runBackwards = !0),
                this.staggerTo(t, e, i, n, s, r, a, o)
              );
            }),
            (d.staggerFromTo = function (t, e, i, n, s, r, a, o, l) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                this.staggerTo(t, e, n, s, r, a, o, l)
              );
            }),
            (d.call = function (t, e, i, s) {
              return this.add(n.l.delayedCall(0, t, e, i), s);
            }),
            (d.set = function (t, e, i) {
              return (
                (i = this._parseTimeOrLabel(i, 0, !0)),
                null == e.immediateRender &&
                  (e.immediateRender = i === this._time && !this._paused),
                this.add(new n.l(t, 0, e), i)
              );
            }),
            (t.exportRoot = function (e, i) {
              null == (e = e || {}).smoothChildTiming &&
                (e.smoothChildTiming = !0);
              var s,
                r,
                a,
                o,
                l = new t(e),
                u = l._timeline;
              for (
                null == i && (i = !0),
                  u._remove(l, !0),
                  l._startTime = 0,
                  l._rawPrevTime = l._time = l._totalTime = u._time,
                  a = u._first;
                a;

              )
                (o = a._next),
                  (i && a instanceof n.l && a.target === a.vars.onComplete) ||
                    ((r = a._startTime - a._delay) < 0 && (s = 1), l.add(a, r)),
                  (a = o);
              return u.add(l, 0), s && l.totalDuration(), l;
            }),
            (d.add = function (e, i, s, a) {
              var o, l, u, h, c, f;
              if (
                ("number" != typeof i &&
                  (i = this._parseTimeOrLabel(i, 0, !0, e)),
                !(e instanceof n.a))
              ) {
                if (e instanceof Array || (e && e.push && r(e))) {
                  for (
                    s = s || "normal", a = a || 0, o = i, l = e.length, u = 0;
                    u < l;
                    u++
                  )
                    r((h = e[u])) && (h = new t({ tweens: h })),
                      this.add(h, o),
                      "string" != typeof h &&
                        "function" != typeof h &&
                        ("sequence" === s
                          ? (o =
                              h._startTime + h.totalDuration() / h._timeScale)
                          : "start" === s && (h._startTime -= h.delay())),
                      (o += a);
                  return this._uncache(!0);
                }
                if ("string" == typeof e) return this.addLabel(e, i);
                if ("function" != typeof e)
                  throw (
                    "Cannot add " +
                    e +
                    " into the timeline; it is not a tween, timeline, function, or string."
                  );
                e = n.l.delayedCall(0, e);
              }
              if (
                (n.i.prototype.add.call(this, e, i),
                e._time &&
                  e.render(
                    (this.rawTime() - e._startTime) * e._timeScale,
                    !1,
                    !1
                  ),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (f = (c = this).rawTime() > e._startTime; c._timeline; )
                  f && c._timeline.smoothChildTiming
                    ? c.totalTime(c._totalTime, !0)
                    : c._gc && c._enabled(!0, !1),
                    (c = c._timeline);
              return this;
            }),
            (d.remove = function (t) {
              if (t instanceof n.a) {
                this._remove(t, !1);
                var e = (t._timeline = t.vars.useFrames
                  ? n.a._rootFramesTimeline
                  : n.a._rootTimeline);
                return (
                  (t._startTime =
                    (t._paused ? t._pauseTime : e._time) -
                    (t._reversed
                      ? t.totalDuration() - t._totalTime
                      : t._totalTime) /
                      t._timeScale),
                  this
                );
              }
              if (t instanceof Array || (t && t.push && r(t))) {
                for (var i = t.length; --i > -1; ) this.remove(t[i]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (d._remove = function (t, e) {
              return (
                n.i.prototype._remove.call(this, t, e),
                this._last
                  ? this._time > this.duration() &&
                    ((this._time = this._duration),
                    (this._totalTime = this._totalDuration))
                  : (this._time =
                      this._totalTime =
                      this._duration =
                      this._totalDuration =
                        0),
                this
              );
            }),
            (d.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (d.insert = d.insertMultiple =
              function (t, e, i, n) {
                return this.add(t, e || 0, i, n);
              }),
            (d.appendMultiple = function (t, e, i, n) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
            }),
            (d.addLabel = function (t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (d.addPause = function (t, e, i, s) {
              var r = n.l.delayedCall(0, c, i, s || this);
              return (
                (r.vars.onComplete = r.vars.onReverseComplete = e),
                (r.data = "isPause"),
                (this._hasPause = !0),
                this.add(r, t)
              );
            }),
            (d.removeLabel = function (t) {
              return delete this._labels[t], this;
            }),
            (d.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (d._parseTimeOrLabel = function (t, e, i, s) {
              var a, o;
              if (s instanceof n.a && s.timeline === this) this.remove(s);
              else if (s && (s instanceof Array || (s.push && r(s))))
                for (o = s.length; --o > -1; )
                  s[o] instanceof n.a &&
                    s[o].timeline === this &&
                    this.remove(s[o]);
              if (
                ((a =
                  "number" != typeof t || e
                    ? this.duration() > 99999999999
                      ? this.recent().endTime(!1)
                      : this._duration
                    : 0),
                "string" == typeof e)
              )
                return this._parseTimeOrLabel(
                  e,
                  i && "number" == typeof t && null == this._labels[e]
                    ? t - a
                    : 0,
                  i
                );
              if (
                ((e = e || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = a);
              else {
                if (-1 === (o = t.indexOf("=")))
                  return null == this._labels[t]
                    ? i
                      ? (this._labels[t] = a + e)
                      : e
                    : this._labels[t] + e;
                (e =
                  parseInt(t.charAt(o - 1) + "1", 10) *
                  Number(t.substr(o + 1))),
                  (t =
                    o > 1
                      ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i)
                      : a);
              }
              return Number(t) + e;
            }),
            (d.seek = function (t, e) {
              return this.totalTime(
                "number" == typeof t ? t : this._parseTimeOrLabel(t),
                !1 !== e
              );
            }),
            (d.stop = function () {
              return this.paused(!0);
            }),
            (d.gotoAndPlay = function (t, e) {
              return this.play(t, e);
            }),
            (d.gotoAndStop = function (t, e) {
              return this.pause(t, e);
            }),
            (d.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var n,
                s,
                r,
                l,
                u,
                h,
                c,
                f = this._time,
                d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._startTime,
                _ = this._timeScale,
                m = this._paused;
              if (
                (f !== this._time && (t += this._time - f),
                t >= d - 1e-7 && t >= 0)
              )
                (this._totalTime = this._time = d),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((s = !0),
                    (l = "onComplete"),
                    (u = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      ((t <= 0 && t >= -1e-7) ||
                        this._rawPrevTime < 0 ||
                        1e-10 === this._rawPrevTime) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((u = !0),
                      this._rawPrevTime > 1e-10 && (l = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : 1e-10),
                  (t = d + 1e-4);
              else if (t < 1e-7)
                if (
                  ((this._totalTime = this._time = 0),
                  (0 !== f ||
                    (0 === this._duration &&
                      1e-10 !== this._rawPrevTime &&
                      (this._rawPrevTime > 0 ||
                        (t < 0 && this._rawPrevTime >= 0)))) &&
                    ((l = "onReverseComplete"), (s = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((u = s = !0), (l = "onReverseComplete"))
                      : this._rawPrevTime >= 0 && this._first && (u = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !e || t || this._rawPrevTime === t
                        ? t
                        : 1e-10),
                    0 === t && s)
                  )
                    for (n = this._first; n && 0 === n._startTime; )
                      n._duration || (s = !1), (n = n._next);
                  (t = 0), this._initted || (u = !0);
                }
              else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                  if (t >= f)
                    for (n = this._first; n && n._startTime <= t && !h; )
                      n._duration ||
                        "isPause" !== n.data ||
                        n.ratio ||
                        (0 === n._startTime && 0 === this._rawPrevTime) ||
                        (h = n),
                        (n = n._next);
                  else
                    for (n = this._last; n && n._startTime >= t && !h; )
                      n._duration ||
                        ("isPause" === n.data && n._rawPrevTime > 0 && (h = n)),
                        (n = n._prev);
                  h &&
                    ((this._time = t = h._startTime),
                    (this._totalTime =
                      t +
                      this._cycle * (this._totalDuration + this._repeatDelay)));
                }
                this._totalTime = this._time = this._rawPrevTime = t;
              }
              if ((this._time !== f && this._first) || i || u || h) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== f &&
                      t > 0 &&
                      (this._active = !0)),
                  0 === f &&
                    this.vars.onStart &&
                    ((0 === this._time && this._duration) ||
                      e ||
                      this._callback("onStart")),
                  (c = this._time) >= f)
                )
                  for (
                    n = this._first;
                    n &&
                    ((r = n._next), c === this._time && (!this._paused || m));

                  )
                    (n._active ||
                      (n._startTime <= c && !n._paused && !n._gc)) &&
                      (h === n && this.pause(),
                      n._reversed
                        ? n.render(
                            (n._dirty ? n.totalDuration() : n._totalDuration) -
                              (t - n._startTime) * n._timeScale,
                            e,
                            i
                          )
                        : n.render((t - n._startTime) * n._timeScale, e, i)),
                      (n = r);
                else
                  for (
                    n = this._last;
                    n &&
                    ((r = n._prev), c === this._time && (!this._paused || m));

                  ) {
                    if (
                      n._active ||
                      (n._startTime <= f && !n._paused && !n._gc)
                    ) {
                      if (h === n) {
                        for (h = n._prev; h && h.endTime() > this._time; )
                          h.render(
                            h._reversed
                              ? h.totalDuration() -
                                  (t - h._startTime) * h._timeScale
                              : (t - h._startTime) * h._timeScale,
                            e,
                            i
                          ),
                            (h = h._prev);
                        (h = null), this.pause();
                      }
                      n._reversed
                        ? n.render(
                            (n._dirty ? n.totalDuration() : n._totalDuration) -
                              (t - n._startTime) * n._timeScale,
                            e,
                            i
                          )
                        : n.render((t - n._startTime) * n._timeScale, e, i);
                    }
                    n = r;
                  }
                this._onUpdate &&
                  (e || (a.length && o(), this._callback("onUpdate"))),
                  l &&
                    (this._gc ||
                      (p !== this._startTime && _ === this._timeScale) ||
                      ((0 === this._time || d >= this.totalDuration()) &&
                        (s &&
                          (a.length && o(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[l] && this._callback(l))));
              }
            }),
            (d._hasPausedChild = function () {
              for (var e = this._first; e; ) {
                if (e._paused || (e instanceof t && e._hasPausedChild()))
                  return !0;
                e = e._next;
              }
              return !1;
            }),
            (d.getChildren = function (t, e, i, s) {
              s = s || -9999999999;
              for (var r = [], a = this._first, o = 0; a; )
                a._startTime < s ||
                  (a instanceof n.l
                    ? !1 !== e && (r[o++] = a)
                    : (!1 !== i && (r[o++] = a),
                      !1 !== t &&
                        (o = (r = r.concat(a.getChildren(!0, e, i))).length))),
                  (a = a._next);
              return r;
            }),
            (d.getTweensOf = function (t, e) {
              var i,
                s,
                r = this._gc,
                a = [],
                o = 0;
              for (
                r && this._enabled(!0, !0), s = (i = n.l.getTweensOf(t)).length;
                --s > -1;

              )
                (i[s].timeline === this || (e && this._contains(i[s]))) &&
                  (a[o++] = i[s]);
              return r && this._enabled(!1, !0), a;
            }),
            (d.recent = function () {
              return this._recent;
            }),
            (d._contains = function (t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (d.shiftChildren = function (t, e, i) {
              i = i || 0;
              for (var n, s = this._first, r = this._labels; s; )
                s._startTime >= i && (s._startTime += t), (s = s._next);
              if (e) for (n in r) r[n] >= i && (r[n] += t);
              return this._uncache(!0);
            }),
            (d._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (
                var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                  n = i.length,
                  s = !1;
                --n > -1;

              )
                i[n]._kill(t, e) && (s = !0);
              return s;
            }),
            (d.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                i = e.length;
              for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (d.invalidate = function () {
              for (var t = this._first; t; ) t.invalidate(), (t = t._next);
              return n.a.prototype.invalidate.call(this);
            }),
            (d._enabled = function (t, e) {
              if (t === this._gc)
                for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
              return n.i.prototype._enabled.call(this, t, e);
            }),
            (d.totalTime = function (t, e, i) {
              this._forcingPlayhead = !0;
              var s = n.a.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), s;
            }),
            (d.duration = function (t) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== t &&
                    this.timeScale(this._duration / t),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (d.totalDuration = function (t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var e, i, n = 0, s = this._last, r = 999999999999; s; )
                    (e = s._prev),
                      s._dirty && s.totalDuration(),
                      s._startTime > r &&
                      this._sortChildren &&
                      !s._paused &&
                      !this._calculatingDuration
                        ? ((this._calculatingDuration = 1),
                          this.add(s, s._startTime - s._delay),
                          (this._calculatingDuration = 0))
                        : (r = s._startTime),
                      s._startTime < 0 &&
                        !s._paused &&
                        ((n -= s._startTime),
                        this._timeline.smoothChildTiming &&
                          ((this._startTime += s._startTime / this._timeScale),
                          (this._time -= s._startTime),
                          (this._totalTime -= s._startTime),
                          (this._rawPrevTime -= s._startTime)),
                        this.shiftChildren(-s._startTime, !1, -9999999999),
                        (r = 0)),
                      (i = s._startTime + s._totalDuration / s._timeScale) >
                        n && (n = i),
                      (s = e);
                  (this._duration = this._totalDuration = n),
                    (this._dirty = !1);
                }
                return this._totalDuration;
              }
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            }),
            (d.paused = function (t) {
              if (!t)
                for (var e = this._first, i = this._time; e; )
                  e._startTime === i &&
                    "isPause" === e.data &&
                    (e._rawPrevTime = 0),
                    (e = e._next);
              return n.a.prototype.paused.apply(this, arguments);
            }),
            (d.usesFrames = function () {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === n.a._rootFramesTimeline;
            }),
            (d.rawTime = function (t) {
              return t &&
                (this._paused ||
                  (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                ? this._totalTime % (this._duration + this._repeatDelay)
                : this._paused
                ? this._totalTime
                : (this._timeline.rawTime(t) - this._startTime) *
                  this._timeScale;
            }),
            t
          );
        },
        !0
      );
    const f = n.k.TimelineLite;
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
     */ n.k._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function () {
        var t = function (t) {
            f.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          e = n.l._internals,
          i = e.lazyTweens,
          s = e.lazyRender,
          r = n.k._gsDefine.globals,
          a = new n.b(null, null, 1, 0),
          o = (t.prototype = new f());
        return (
          (o.constructor = t),
          (o.kill()._gc = !1),
          (t.version = "2.0.1"),
          (o.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              f.prototype.invalidate.call(this)
            );
          }),
          (o.addCallback = function (t, e, i, s) {
            return this.add(n.l.delayedCall(0, t, i, s), e);
          }),
          (o.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    s = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this;
          }),
          (o.removePause = function (t) {
            return this.removeCallback(f._internals.pauseCallback, t);
          }),
          (o.tweenTo = function (t, e) {
            e = e || {};
            var i,
              s,
              o,
              l = {
                ease: a,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              u = (e.repeat && r.TweenMax) || n.l;
            for (s in e) l[s] = e[s];
            return (
              (l.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(l.time) - this._time) / this._timeScale ||
                0.001),
              (o = new u(this, i, l)),
              (l.onStart = function () {
                o.target.paused(!0),
                  o.vars.time === o.target.time() ||
                    i !== o.duration() ||
                    o.isFromTo ||
                    o
                      .duration(
                        Math.abs(o.vars.time - o.target.time()) /
                          o.target._timeScale
                      )
                      .render(o.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || o,
                      e.onStartParams || []
                    );
              }),
              o
            );
          }),
          (o.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var n = this.tweenTo(e, i);
            return (
              (n.isFromTo = 1),
              n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (o.render = function (t, e, n) {
            this._gc && this._enabled(!0, !1);
            var r,
              a,
              o,
              l,
              u,
              h,
              c,
              f,
              d = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              _ = this._duration,
              m = this._totalTime,
              v = this._startTime,
              g = this._timeScale,
              y = this._rawPrevTime,
              b = this._paused,
              w = this._cycle;
            if (
              (d !== this._time && (t += this._time - d),
              t >= p - 1e-7 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((a = !0),
                  (l = "onComplete"),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-7) || y < 0 || 1e-10 === y) &&
                    y !== t &&
                    this._first &&
                    ((u = !0), y > 1e-10 && (l = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-10),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = _), (t = _ + 1e-4));
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== d ||
                  (0 === _ &&
                    1e-10 !== y &&
                    (y > 0 || (t < 0 && y >= 0)) &&
                    !this._locked)) &&
                  ((l = "onReverseComplete"), (a = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = a = !0), (l = "onReverseComplete"))
                    : y >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    _ || !e || t || this._rawPrevTime === t ? t : 1e-10),
                  0 === t && a)
                )
                  for (r = this._first; r && 0 === r._startTime; )
                    r._duration || (a = !1), (r = r._next);
                (t = 0), this._initted || (u = !0);
              }
            else if (
              (0 === _ && y < 0 && (u = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((h = _ + this._repeatDelay),
                  (this._cycle = (this._totalTime / h) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / h &&
                    m <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * h),
                  this._yoyo &&
                    0 != (1 & this._cycle) &&
                    (this._time = _ - this._time),
                  this._time > _
                    ? ((this._time = _), (t = _ + 1e-4))
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if ((t = this._time) >= d || (this._repeat && w !== this._cycle))
                for (r = this._first; r && r._startTime <= t && !c; )
                  r._duration ||
                    "isPause" !== r.data ||
                    r.ratio ||
                    (0 === r._startTime && 0 === this._rawPrevTime) ||
                    (c = r),
                    (r = r._next);
              else
                for (r = this._last; r && r._startTime >= t && !c; )
                  r._duration ||
                    ("isPause" === r.data && r._rawPrevTime > 0 && (c = r)),
                    (r = r._prev);
              c &&
                c._startTime < _ &&
                ((this._time = t = c._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== w && !this._locked) {
              var T = this._yoyo && 0 != (1 & w),
                x = T === (this._yoyo && 0 != (1 & this._cycle)),
                k = this._totalTime,
                P = this._cycle,
                C = this._rawPrevTime,
                S = this._time;
              if (
                ((this._totalTime = w * _),
                this._cycle < w ? (T = !T) : (this._totalTime += _),
                (this._time = d),
                (this._rawPrevTime = 0 === _ ? y - 1e-4 : y),
                (this._cycle = w),
                (this._locked = !0),
                (d = T ? 0 : _),
                this.render(d, e, 0 === _),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = P),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                d !== this._time)
              )
                return;
              if (
                (x &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (d = T ? _ + 1e-4 : -1e-4),
                  this.render(d, !0, !1)),
                (this._locked = !1),
                this._paused && !b)
              )
                return;
              (this._time = S),
                (this._totalTime = k),
                (this._cycle = P),
                (this._rawPrevTime = C);
            }
            if ((this._time !== d && this._first) || n || u || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== m &&
                    t > 0 &&
                    (this._active = !0)),
                0 === m &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                (f = this._time) >= d)
              )
                for (
                  r = this._first;
                  r &&
                  ((o = r._next), f === this._time && (!this._paused || b));

                )
                  (r._active ||
                    (r._startTime <= this._time && !r._paused && !r._gc)) &&
                    (c === r && this.pause(),
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          n
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, n)),
                    (r = o);
              else
                for (
                  r = this._last;
                  r &&
                  ((o = r._prev), f === this._time && (!this._paused || b));

                ) {
                  if (
                    r._active ||
                    (r._startTime <= d && !r._paused && !r._gc)
                  ) {
                    if (c === r) {
                      for (c = r._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          n
                        ),
                          (c = c._prev);
                      (c = null), this.pause();
                    }
                    r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          n
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, n);
                  }
                  r = o;
                }
              this._onUpdate &&
                (e || (i.length && s(), this._callback("onUpdate"))),
                l &&
                  (this._locked ||
                    this._gc ||
                    (v !== this._startTime && g === this._timeScale) ||
                    ((0 === this._time || p >= this.totalDuration()) &&
                      (a &&
                        (i.length && s(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))));
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (o.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n,
              s,
              r = [],
              a = this.getChildren(t, e, i),
              o = 0,
              l = a.length;
            for (n = 0; n < l; n++) (s = a[n]).isActive() && (r[o++] = s);
            return r;
          }),
          (o.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              n = i.length;
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (o.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (o.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (o.invalidate = function () {
            return (this._locked = !1), f.prototype.invalidate.call(this);
          }),
          (o.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (o.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (o.totalDuration = function (t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (f.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (o.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (o.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          t
        );
      },
      !0
    );
    const d = n.k.TimelineMax;
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
     **/ var p = 180 / Math.PI,
      _ = [],
      m = [],
      v = [],
      g = {},
      y = n.k._gsDefine.globals,
      b = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6),
          t === e && (e = t + (i - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.d = n),
          (this.da = n - t),
          (this.ca = i - t),
          (this.ba = e - t);
      },
      w = function (t, e, i, n) {
        var s = { a: t },
          r = {},
          a = {},
          o = { c: n },
          l = (t + e) / 2,
          u = (e + i) / 2,
          h = (i + n) / 2,
          c = (l + u) / 2,
          f = (u + h) / 2,
          d = (f - c) / 8;
        return (
          (s.b = l + (t - l) / 4),
          (r.b = c + d),
          (s.c = r.a = (s.b + r.b) / 2),
          (r.c = a.a = (c + f) / 2),
          (a.b = f - d),
          (o.b = h + (n - h) / 4),
          (a.c = o.a = (a.b + o.b) / 2),
          [s, r, a, o]
        );
      },
      T = function (t, e, i, n, s) {
        var r,
          a,
          o,
          l,
          u,
          h,
          c,
          f,
          d,
          p,
          g,
          y,
          b,
          T = t.length - 1,
          x = 0,
          k = t[0].a;
        for (r = 0; r < T; r++)
          (a = (u = t[x]).a),
            (o = u.d),
            (l = t[x + 1].d),
            s
              ? ((g = _[r]),
                (b = (((y = m[r]) + g) * e * 0.25) / (n ? 0.5 : v[r] || 0.5)),
                (f =
                  o -
                  ((h = o - (o - a) * (n ? 0.5 * e : 0 !== g ? b / g : 0)) +
                    ((((c = o + (l - o) * (n ? 0.5 * e : 0 !== y ? b / y : 0)) -
                      h) *
                      ((3 * g) / (g + y) + 0.5)) /
                      4 || 0))))
              : (f =
                  o -
                  ((h = o - (o - a) * e * 0.5) + (c = o + (l - o) * e * 0.5)) /
                    2),
            (h += f),
            (c += f),
            (u.c = d = h),
            (u.b = 0 !== r ? k : (k = u.a + 0.6 * (u.c - u.a))),
            (u.da = o - a),
            (u.ca = d - a),
            (u.ba = k - a),
            i
              ? ((p = w(a, k, d, o)),
                t.splice(x, 1, p[0], p[1], p[2], p[3]),
                (x += 4))
              : x++,
            (k = c);
        ((u = t[x]).b = k),
          (u.c = k + 0.4 * (u.d - k)),
          (u.da = u.d - u.a),
          (u.ca = u.c - u.a),
          (u.ba = k - u.a),
          i &&
            ((p = w(u.a, k, u.c, u.d)), t.splice(x, 1, p[0], p[1], p[2], p[3]));
      },
      x = function (t, e, i, n) {
        var s,
          r,
          a,
          o,
          l,
          u,
          h = [];
        if (n)
          for (r = (t = [n].concat(t)).length; --r > -1; )
            "string" == typeof (u = t[r][e]) &&
              "=" === u.charAt(1) &&
              (t[r][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
        if ((s = t.length - 2) < 0)
          return (h[0] = new b(t[0][e], 0, 0, t[0][e])), h;
        for (r = 0; r < s; r++)
          (a = t[r][e]),
            (o = t[r + 1][e]),
            (h[r] = new b(a, 0, 0, o)),
            i &&
              ((l = t[r + 2][e]),
              (_[r] = (_[r] || 0) + (o - a) * (o - a)),
              (m[r] = (m[r] || 0) + (l - o) * (l - o)));
        return (h[r] = new b(t[r][e], 0, 0, t[r + 1][e])), h;
      },
      k = function (t, e, i, n, s, r) {
        var a,
          o,
          l,
          u,
          h,
          c,
          f,
          d,
          p = {},
          y = [],
          b = r || t[0];
        for (o in ((s =
          "string" == typeof s
            ? "," + s + ","
            : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == e && (e = 1),
        t[0]))
          y.push(o);
        if (t.length > 1) {
          for (d = t[t.length - 1], f = !0, a = y.length; --a > -1; )
            if (((o = y[a]), Math.abs(b[o] - d[o]) > 0.05)) {
              f = !1;
              break;
            }
          f &&
            ((t = t.concat()),
            r && t.unshift(r),
            t.push(t[1]),
            (r = t[t.length - 3]));
        }
        for (_.length = m.length = v.length = 0, a = y.length; --a > -1; )
          (o = y[a]),
            (g[o] = -1 !== s.indexOf("," + o + ",")),
            (p[o] = x(t, o, g[o], r));
        for (a = _.length; --a > -1; )
          (_[a] = Math.sqrt(_[a])), (m[a] = Math.sqrt(m[a]));
        if (!n) {
          for (a = y.length; --a > -1; )
            if (g[o])
              for (c = (l = p[y[a]]).length - 1, u = 0; u < c; u++)
                (h = l[u + 1].da / m[u] + l[u].da / _[u] || 0),
                  (v[u] = (v[u] || 0) + h * h);
          for (a = v.length; --a > -1; ) v[a] = Math.sqrt(v[a]);
        }
        for (a = y.length, u = i ? 4 : 1; --a > -1; )
          (l = p[(o = y[a])]),
            T(l, e, i, n, g[o]),
            f && (l.splice(0, u), l.splice(l.length - u, u));
        return p;
      },
      P = function (t, e, i) {
        for (
          var n, s, r, a, o, l, u, h, c, f, d, p = 1 / i, _ = t.length;
          --_ > -1;

        )
          for (
            r = (f = t[_]).a,
              a = f.d - r,
              o = f.c - r,
              l = f.b - r,
              n = s = 0,
              h = 1;
            h <= i;
            h++
          )
            (n =
              s -
              (s =
                ((u = p * h) * u * a + 3 * (c = 1 - u) * (u * o + c * l)) * u)),
              (e[(d = _ * i + h - 1)] = (e[d] || 0) + n * n);
      },
      C = n.k._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function (t, e, i) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var n,
            s,
            r,
            a,
            o,
            l = e.values || [],
            u = {},
            h = l[0],
            c = e.autoRotate || i.vars.orientToBezier;
          for (n in ((this._autoRotate = c
            ? c instanceof Array
              ? c
              : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]]
            : null),
          h))
            this._props.push(n);
          for (r = this._props.length; --r > -1; )
            (n = this._props[r]),
              this._overwriteProps.push(n),
              (s = this._func[n] = "function" == typeof t[n]),
              (u[n] = s
                ? t[
                    n.indexOf("set") ||
                    "function" != typeof t["get" + n.substr(3)]
                      ? n
                      : "get" + n.substr(3)
                  ]()
                : parseFloat(t[n])),
              o || (u[n] !== l[0][n] && (o = u));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? k(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    o
                  )
                : (function (t, e, i) {
                    var n,
                      s,
                      r,
                      a,
                      o,
                      l,
                      u,
                      h,
                      c,
                      f,
                      d,
                      p = {},
                      _ = "cubic" === (e = e || "soft") ? 3 : 2,
                      m = "soft" === e,
                      v = [];
                    if (
                      (m && i && (t = [i].concat(t)),
                      null == t || t.length < _ + 1)
                    )
                      throw "invalid Bezier data";
                    for (c in t[0]) v.push(c);
                    for (l = v.length; --l > -1; ) {
                      for (
                        p[(c = v[l])] = o = [], f = 0, h = t.length, u = 0;
                        u < h;
                        u++
                      )
                        (n =
                          null == i
                            ? t[u][c]
                            : "string" == typeof (d = t[u][c]) &&
                              "=" === d.charAt(1)
                            ? i[c] + Number(d.charAt(0) + d.substr(2))
                            : Number(d)),
                          m &&
                            u > 1 &&
                            u < h - 1 &&
                            (o[f++] = (n + o[f - 2]) / 2),
                          (o[f++] = n);
                      for (h = f - _ + 1, f = 0, u = 0; u < h; u += _)
                        (n = o[u]),
                          (s = o[u + 1]),
                          (r = o[u + 2]),
                          (a = 2 === _ ? 0 : o[u + 3]),
                          (o[f++] = d =
                            3 === _
                              ? new b(n, s, r, a)
                              : new b(n, (2 * s + n) / 3, (2 * s + r) / 3, r));
                      o.length = f;
                    }
                    return p;
                  })(l, e.type, u)),
            (this._segCount = this._beziers[n].length),
            this._timeRes)
          ) {
            var f = (function (t, e) {
              var i,
                n,
                s,
                r,
                a = [],
                o = [],
                l = 0,
                u = 0,
                h = (e = e >> 0 || 6) - 1,
                c = [],
                f = [];
              for (i in t) P(t[i], a, e);
              for (s = a.length, n = 0; n < s; n++)
                (l += Math.sqrt(a[n])),
                  (f[(r = n % e)] = l),
                  r === h &&
                    ((u += l),
                    (c[(r = (n / e) >> 0)] = f),
                    (o[r] = u),
                    (l = 0),
                    (f = []));
              return { length: u, lengths: o, segments: c };
            })(this._beziers, this._timeRes);
            (this._length = f.length),
              (this._lengths = f.lengths),
              (this._segments = f.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((c = this._autoRotate))
            for (
              this._initialRotations = [],
                c[0] instanceof Array || (this._autoRotate = c = [c]),
                r = c.length;
              --r > -1;

            ) {
              for (a = 0; a < 3; a++)
                (n = c[r][a]),
                  (this._func[n] =
                    "function" == typeof t[n] &&
                    t[
                      n.indexOf("set") ||
                      "function" != typeof t["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]);
              (n = c[r][2]),
                (this._initialRotations[r] =
                  (this._func[n]
                    ? this._func[n].call(this._target)
                    : this._target[n]) || 0),
                this._overwriteProps.push(n);
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (t) {
          var e,
            i,
            n,
            s,
            r,
            a,
            o,
            l,
            u,
            h,
            c = this._segCount,
            f = this._func,
            d = this._target,
            _ = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((u = this._lengths),
              (h = this._curSeg),
              (t *= this._length),
              (n = this._li),
              t > this._l2 && n < c - 1)
            ) {
              for (l = c - 1; n < l && (this._l2 = u[++n]) <= t; );
              (this._l1 = u[n - 1]),
                (this._li = n),
                (this._curSeg = h = this._segments[n]),
                (this._s2 = h[(this._s1 = this._si = 0)]);
            } else if (t < this._l1 && n > 0) {
              for (; n > 0 && (this._l1 = u[--n]) >= t; );
              0 === n && t < this._l1 ? (this._l1 = 0) : n++,
                (this._l2 = u[n]),
                (this._li = n),
                (this._curSeg = h = this._segments[n]),
                (this._s1 = h[(this._si = h.length - 1) - 1] || 0),
                (this._s2 = h[this._si]);
            }
            if (
              ((e = n),
              (t -= this._l1),
              (n = this._si),
              t > this._s2 && n < h.length - 1)
            ) {
              for (l = h.length - 1; n < l && (this._s2 = h[++n]) <= t; );
              (this._s1 = h[n - 1]), (this._si = n);
            } else if (t < this._s1 && n > 0) {
              for (; n > 0 && (this._s1 = h[--n]) >= t; );
              0 === n && t < this._s1 ? (this._s1 = 0) : n++,
                (this._s2 = h[n]),
                (this._si = n);
            }
            a = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
          } else
            a =
              (t - (e = t < 0 ? 0 : t >= 1 ? c - 1 : (c * t) >> 0) * (1 / c)) *
              c;
          for (i = 1 - a, n = this._props.length; --n > -1; )
            (s = this._props[n]),
              (o =
                (a * a * (r = this._beziers[s][e]).da +
                  3 * i * (a * r.ca + i * r.ba)) *
                  a +
                r.a),
              this._mod[s] && (o = this._mod[s](o, d)),
              f[s] ? d[s](o) : (d[s] = o);
          if (this._autoRotate) {
            var m,
              v,
              g,
              y,
              b,
              w,
              T,
              x = this._autoRotate;
            for (n = x.length; --n > -1; )
              (s = x[n][2]),
                (w = x[n][3] || 0),
                (T = !0 === x[n][4] ? 1 : p),
                (r = this._beziers[x[n][0]]),
                (m = this._beziers[x[n][1]]),
                r &&
                  m &&
                  ((r = r[e]),
                  (m = m[e]),
                  (v = r.a + (r.b - r.a) * a),
                  (v += ((y = r.b + (r.c - r.b) * a) - v) * a),
                  (y += (r.c + (r.d - r.c) * a - y) * a),
                  (g = m.a + (m.b - m.a) * a),
                  (g += ((b = m.b + (m.c - m.b) * a) - g) * a),
                  (b += (m.c + (m.d - m.c) * a - b) * a),
                  (o = _
                    ? Math.atan2(b - g, y - v) * T + w
                    : this._initialRotations[n]),
                  this._mod[s] && (o = this._mod[s](o, d)),
                  f[s] ? d[s](o) : (d[s] = o));
          }
        },
      }),
      S = C.prototype;
    (C.bezierThrough = k),
      (C.cubicToQuadratic = w),
      (C._autoCSS = !0),
      (C.quadraticToCubic = function (t, e, i) {
        return new b(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (C._cssRegister = function () {
        var t = y.CSSPlugin;
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            n = e._setPluginRatio,
            s = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function (t, e, r, a, o, l) {
              e instanceof Array && (e = { values: e }), (l = new C());
              var u,
                h,
                c,
                f = e.values,
                d = f.length - 1,
                p = [],
                _ = {};
              if (d < 0) return o;
              for (u = 0; u <= d; u++)
                (c = i(t, f[u], a, o, l, d !== u)), (p[u] = c.end);
              for (h in e) _[h] = e[h];
              return (
                (_.values = p),
                ((o = new s(t, "bezier", 0, 0, c.pt, 2)).data = c),
                (o.plugin = l),
                (o.setRatio = n),
                0 === _.autoRotate && (_.autoRotate = !0),
                !_.autoRotate ||
                  _.autoRotate instanceof Array ||
                  ((u = !0 === _.autoRotate ? 0 : Number(_.autoRotate)),
                  (_.autoRotate =
                    null != c.end.left
                      ? [["left", "top", "rotation", u, !1]]
                      : null != c.end.x && [["x", "y", "rotation", u, !1]])),
                _.autoRotate &&
                  (a._transform || a._enableTransforms(!1),
                  (c.autoRotate = a._target._gsTransform),
                  (c.proxy.rotation = c.autoRotate.rotation || 0),
                  a._overwriteProps.push("rotation")),
                l._onInitTween(c.proxy, _, a._tween),
                o
              );
            },
          });
        }
      }),
      (S._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
          (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
      }),
      (S._kill = function (t) {
        var e,
          i,
          n = this._props;
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], i = n.length;
              --i > -1;

            )
              n[i] === e && n.splice(i, 1);
        if ((n = this._autoRotate))
          for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t);
      }),
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
      n.k._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function () {
          var t,
            e,
            i,
            s,
            r = n.k.GreenSockGlobals || n.k,
            a = r.com.greensock,
            o = 2 * Math.PI,
            l = Math.PI / 2,
            u = a._class,
            h = function (t, e) {
              var i = u("easing." + t, function () {}, !0),
                s = (i.prototype = new n.b());
              return (s.constructor = i), (s.getRatio = e), i;
            },
            c = n.b.register || function () {},
            f = function (t, e, i, n, s) {
              var r = u(
                "easing." + t,
                { easeOut: new e(), easeIn: new i(), easeInOut: new n() },
                !0
              );
              return c(r, t), r;
            },
            d = function (t, e, i) {
              (this.t = t),
                (this.v = e),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t));
            },
            p = function (t, e) {
              var i = u(
                  "easing." + t,
                  function (t) {
                    (this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                s = (i.prototype = new n.b());
              return (
                (s.constructor = i),
                (s.getRatio = e),
                (s.config = function (t) {
                  return new i(t);
                }),
                i
              );
            },
            _ = f(
              "Back",
              p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              p("BackInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            m = u(
              "easing.SlowMo",
              function (t, e, i) {
                (e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === i);
              },
              !0
            ),
            v = (m.prototype = new n.b());
          return (
            (v.constructor = m),
            (v.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p;
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (m.ease = new m(0.7, 0.7)),
            (v.config = m.config =
              function (t, e, i) {
                return new m(t, e, i);
              }),
            ((v = (t = u(
              "easing.SteppedEase",
              function (t, e) {
                (t = t || 1),
                  (this._p1 = 1 / t),
                  (this._p2 = t + (e ? 0 : 1)),
                  (this._p3 = e ? 1 : 0);
              },
              !0
            )).prototype =
              new n.b()).constructor = t),
            (v.getRatio = function (t) {
              return (
                t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                (((this._p2 * t) | 0) + this._p3) * this._p1
              );
            }),
            (v.config = t.config =
              function (e, i) {
                return new t(e, i);
              }),
            ((v = (e = u(
              "easing.ExpoScaleEase",
              function (t, e, i) {
                (this._p1 = Math.log(e / t)),
                  (this._p2 = e - t),
                  (this._p3 = t),
                  (this._ease = i);
              },
              !0
            )).prototype =
              new n.b()).constructor = e),
            (v.getRatio = function (t) {
              return (
                this._ease && (t = this._ease.getRatio(t)),
                (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
              );
            }),
            (v.config = e.config =
              function (t, i, n) {
                return new e(t, i, n);
              }),
            ((v = (i = u(
              "easing.RoughEase",
              function (t) {
                for (
                  var e,
                    i,
                    s,
                    r,
                    a,
                    o,
                    l = (t = t || {}).taper || "none",
                    u = [],
                    h = 0,
                    c = 0 | (t.points || 20),
                    f = c,
                    p = !1 !== t.randomize,
                    _ = !0 === t.clamp,
                    m = t.template instanceof n.b ? t.template : null,
                    v = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --f > -1;

                )
                  (e = p ? Math.random() : (1 / c) * f),
                    (i = m ? m.getRatio(e) : e),
                    (s =
                      "none" === l
                        ? v
                        : "out" === l
                        ? (r = 1 - e) * r * v
                        : "in" === l
                        ? e * e * v
                        : e < 0.5
                        ? (r = 2 * e) * r * 0.5 * v
                        : (r = 2 * (1 - e)) * r * 0.5 * v),
                    p
                      ? (i += Math.random() * s - 0.5 * s)
                      : f % 2
                      ? (i += 0.5 * s)
                      : (i -= 0.5 * s),
                    _ && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                    (u[h++] = { x: e, y: i });
                for (
                  u.sort(function (t, e) {
                    return t.x - e.x;
                  }),
                    o = new d(1, 1, null),
                    f = c;
                  --f > -1;

                )
                  (a = u[f]), (o = new d(a.x, a.y, o));
                this._prev = new d(0, 0, 0 !== o.t ? o : o.next);
              },
              !0
            )).prototype =
              new n.b()).constructor = i),
            (v.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
            }),
            (v.config = function (t) {
              return new i(t);
            }),
            (i.ease = new i()),
            f(
              "Bounce",
              h("BounceOut", function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              h("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              h("BounceInOut", function (t) {
                var e = t < 0.5;
                return (
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? (t *= 7.5625 * t)
                    : (t =
                        t < 2 / 2.75
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            f(
              "Circ",
              h("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              h("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              h("CircInOut", function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            f(
              "Elastic",
              (s = function (t, e, i) {
                var s = u(
                    "easing." + t,
                    function (t, e) {
                      (this._p1 = t >= 1 ? t : 1),
                        (this._p2 = (e || i) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = o / this._p2);
                    },
                    !0
                  ),
                  r = (s.prototype = new n.b());
                return (
                  (r.constructor = s),
                  (r.getRatio = e),
                  (r.config = function (t, e) {
                    return new s(t, e);
                  }),
                  s
                );
              })(
                "ElasticOut",
                function (t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  );
                },
                0.3
              ),
              s(
                "ElasticIn",
                function (t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  );
                },
                0.3
              ),
              s(
                "ElasticInOut",
                function (t) {
                  return (t *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        0.5 +
                        1;
                },
                0.45
              )
            ),
            f(
              "Expo",
              h("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              h("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              h("ExpoInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            f(
              "Sine",
              h("SineOut", function (t) {
                return Math.sin(t * l);
              }),
              h("SineIn", function (t) {
                return 1 - Math.cos(t * l);
              }),
              h("SineInOut", function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            u(
              "easing.EaseLookup",
              {
                find: function (t) {
                  return n.b.map[t];
                },
              },
              !0
            ),
            c(r.SlowMo, "SlowMo", "ease,"),
            c(i, "RoughEase", "ease,"),
            c(t, "SteppedEase", "ease,"),
            _
          );
        },
        !0
      );
    const O = n.k.Back,
      M = n.k.Elastic,
      j = n.k.Bounce,
      R = n.k.RoughEase,
      E = n.k.SlowMo,
      D = n.k.SteppedEase,
      A = n.k.Circ,
      I = n.k.Expo,
      z = n.k.Sine,
      L = n.k.ExpoScaleEase;
    i.d(e, "TweenMax", function () {
      return q;
    }),
      i.d(e, "default", function () {
        return q;
      }),
      i.d(e, "TweenLite", function () {
        return n.l;
      }),
      i.d(e, "TimelineLite", function () {
        return f;
      }),
      i.d(e, "TimelineMax", function () {
        return d;
      }),
      i.d(e, "CSSPlugin", function () {
        return r;
      }),
      i.d(e, "AttrPlugin", function () {
        return a;
      }),
      i.d(e, "BezierPlugin", function () {
        return C;
      }),
      i.d(e, "DirectionalRotationPlugin", function () {
        return c;
      }),
      i.d(e, "RoundPropsPlugin", function () {
        return o;
      }),
      i.d(e, "TweenPlugin", function () {
        return n.j;
      }),
      i.d(e, "Ease", function () {
        return n.b;
      }),
      i.d(e, "Power0", function () {
        return n.d;
      }),
      i.d(e, "Power1", function () {
        return n.e;
      }),
      i.d(e, "Power2", function () {
        return n.f;
      }),
      i.d(e, "Power3", function () {
        return n.g;
      }),
      i.d(e, "Power4", function () {
        return n.h;
      }),
      i.d(e, "Linear", function () {
        return n.c;
      }),
      i.d(e, "Back", function () {
        return O;
      }),
      i.d(e, "Elastic", function () {
        return M;
      }),
      i.d(e, "Bounce", function () {
        return j;
      }),
      i.d(e, "RoughEase", function () {
        return R;
      }),
      i.d(e, "SlowMo", function () {
        return E;
      }),
      i.d(e, "SteppedEase", function () {
        return D;
      }),
      i.d(e, "Circ", function () {
        return A;
      }),
      i.d(e, "Expo", function () {
        return I;
      }),
      i.d(e, "Sine", function () {
        return z;
      }),
      i.d(e, "ExpoScaleEase", function () {
        return L;
      });
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
    const q = s;
    q._autoActivated = [f, d, r, a, C, o, c, O, M, j, R, E, D, A, I, z, L];
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(8));
    var s = ["Webkit", "Moz", "ms"],
      r = {
        init: function () {
          (this._isTouch =
            "ontouchstart" in window || "DocumentTouch" in window),
            (this._isMobile =
              /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(
                window.navigator.userAgent
              )),
            (this._prefix = this.getPrefix()),
            this._isTouch
              ? n.default.html.addClass("is-touchable")
              : n.default.html.addClass("is-hoverable");
        },
        getPrefix: function () {
          var t = s.length;
          if (null === document.body.style.transform)
            for (; t--; )
              if (document.body.style[s[t] + "Transform"]) return s[t];
          return "";
        },
        getPrefixed: function (t) {
          var e = t[0].toUpperCase() + t.slice(1);
          return this._prefix ? this._prefix + e : t;
        },
        isMobile: function () {
          return this._isMobile;
        },
        isTouch: function () {
          return this._isTouch;
        },
        isDevice: function () {
          return this._isTouch && this._isMobile;
        },
      };
    e.default = r;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getDefaultHammerOptions =
        e.getElementDuration =
        e.getElementsInView =
        e.isElementVisible =
        e.isElementLoadable =
        e.rectsCollide =
        e.translate3d =
        e.formatTime =
        e.loadImages =
        e.shuffle =
        e.noop =
        e.px =
          void 0);
    var n = l(i(4)),
      s = l(i(60)),
      r = l(i(8)),
      a = l(i(10)),
      o = l(i(17));
    function l(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var u = function (t) {
        var e = !1;
        t && (e = t.getBoundingClientRect().top < 2 * window.innerHeight);
        return e;
      },
      h = function (t) {
        var e = !1;
        if (t) {
          var i = t.getBoundingClientRect();
          e = i.top < window.innerHeight && i.bottom > 0;
        }
        return e;
      },
      c = function (t, e) {
        for (var i = Math.max.apply(null, t), n = t.length; n--; )
          t[n] >= e && t[n] < i && (i = t[n]);
        return i;
      },
      f = function (t) {
        var e = t.split("x");
        return { width: parseInt(e[0], 10), height: parseInt(e[1], 10) };
      };
    (e.px = function (t) {
      return t + "px";
    }),
      (e.noop = function () {
        return !0;
      }),
      (e.shuffle = function (t) {
        for (var e = t.length - 1, i = 0, n = t[e]; e > 0; e--)
          (i = Math.floor(Math.random() * (e + 1))),
            (n = t[e]),
            (t[e] = t[i]),
            (t[i] = n);
        return t;
      }),
      (e.loadImages = function (t, e) {
        return (
          (e = e || u),
          (t = t || r.default.main.find(a.default.lazyImageSelector)).forEach(
            function (e, i) {
              var n = t.eq(i),
                s = n.data();
              s.originalSize &&
                (function (t, e) {
                  var i = f(e.originalSize),
                    n = (i.height / i.width) * 100;
                  n > 100
                    ? t
                        .addClass("image--tall")
                        .closest(".js-media")
                        .addClass("media--tall")
                    : n >= 75
                    ? t.addClass("image--box")
                    : t.addClass("image--wide"),
                    (t[0].style.paddingBottom = n + "%");
                })(n, s),
                s.variants &&
                  (function (t, e) {
                    var i = e.variants.split(",").map(function (t) {
                        return parseInt(t, 10);
                      }),
                      n = e.imgSrc.replace(/\?(.*)$/, ""),
                      s =
                        t[0].clientWidth ||
                        t[0].parentNode.clientWidth ||
                        window.innerWidth,
                      r = c(i, s);
                    window.devicePixelRatio > 1 &&
                      (i.splice(i.indexOf(r), 1), (r = c(i, r))),
                      t.attr(a.default.lazyImageAttr, n + "?format=" + r + "w");
                  })(n, s);
            }
          ),
          new s.default({
            elements: t,
            property: a.default.lazyImageAttr,
            executor: e,
          }).on("load", function (t) {
            t.style.paddingBottom = "0";
          })
        );
      }),
      (e.formatTime = function (t) {
        var e = parseInt(t / 6e4, 10),
          i = parseInt(t / 1e3, 10) % 60;
        return i < 10 && (i = "0" + i), e + ":" + i;
      }),
      (e.translate3d = function (t, e, i, n) {
        t.style[o.default.getPrefixed("transform")] =
          "translate3d( " + e + ", " + i + ", " + n + " )";
      }),
      (e.rectsCollide = function (t, e) {
        var i = !1;
        return (
          t.x < e.x + e.width &&
            t.x + t.width > e.x &&
            t.y < e.y + e.height &&
            t.height + t.y > e.y &&
            (i = !0),
          i
        );
      }),
      (e.isElementLoadable = u),
      (e.isElementVisible = h),
      (e.getElementsInView = function (t) {
        for (var e = t.length, i = (0, n.default)([]); e--; )
          h(t[e]) && i.push(t[e]);
        return i;
      }),
      (e.getElementDuration = function (t, e) {
        var i = 0,
          n = null,
          s = 1e3;
        return (
          (e = e || "transition"),
          t &&
            ((s =
              -1 ===
              (n =
                getComputedStyle(t)[
                  o.default.getPrefixed(e + "-duration")
                ]).indexOf("ms")
                ? 1e3
                : 1),
            (i = parseFloat(n) * s)),
          i
        );
      }),
      (e.getDefaultHammerOptions = function () {
        return o.default.isDevice()
          ? {}
          : {
              cssProps: {
                contentZoomingString: !1,
                tapHighlightColorString: !1,
                touchCalloutString: !1,
                touchSelectString: !1,
                userDragString: !1,
                userSelectString: !1,
              },
            };
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = "development",
      s = "production",
      r = {
        DEV: n,
        PROD: s,
        ENV: /^localhost|squarespace|^[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/g.test(
          document.domain
        )
          ? n
          : s,
        isDev: function () {
          return this.ENV === n;
        },
        isProd: function () {
          return this.ENV === s;
        },
        isConfig: function () {
          return -1 !== window.parent.location.pathname.indexOf("/config");
        },
      };
    e.default = r;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = g(i(68)),
      a = g(i(14)),
      o = g(i(69)),
      l = g(i(22)),
      u = g(i(74)),
      h = g(i(80)),
      c = g(i(82)),
      f = g(i(87)),
      d = g(i(89)),
      p = g(i(91)),
      _ = g(i(93)),
      m = g(i(98)),
      v = g(i(100));
    function g(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var y = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e.el),
          (this.callback = e.cb),
          (this.controllers = []),
          (this.resizeBounce = 300);
      }
      return (
        n(t, [
          {
            key: "push",
            value: function (t, e, i, n) {
              this.controllers.push({
                id: t,
                elements: e,
                instance: null,
                Controller: i,
                component: n,
              });
            },
          },
          {
            key: "init",
            value: function () {
              this.controllers.forEach(function (t) {
                t.elements.length &&
                  (t.instance = new t.Controller(t.elements, t.component));
              });
            },
          },
          {
            key: "kill",
            value: function () {
              this.controllers.forEach(function (t) {
                t.instance && t.instance.destroy();
              }),
                (this.controllers = []);
            },
          },
          {
            key: "exec",
            value: function () {
              var t = this;
              (this.controllers = []),
                this.push(
                  "cover",
                  this.element.find(".js-cover"),
                  r.default,
                  v.default
                ),
                this.push(
                  "issue",
                  this.element.find(".js-issue"),
                  r.default,
                  m.default
                ),
                this.push(
                  "newsletter",
                  this.element.find(".js-newsletter"),
                  r.default,
                  o.default
                ),
                this.push(
                  "search",
                  this.element.find(".js-search"),
                  r.default,
                  l.default
                ),
                this.push(
                  "audio",
                  this.element.find(".js-audio"),
                  r.default,
                  c.default
                ),
                this.push(
                  "story",
                  this.element.find(".js-story"),
                  r.default,
                  f.default
                ),
                this.push(
                  "cta",
                  this.element.find(".js-button_"),
                  r.default,
                  d.default
                ),
                this.push(
                  "slider",
                  this.element.find(".js-slider"),
                  r.default,
                  p.default
                ),
                this.push(
                  "commerce",
                  this.element.find(".js-shop, .js-product, #sqs-cart-root"),
                  r.default,
                  _.default
                ),
                this.push(
                  "video",
                  this.element.find(".sqs-block-video"),
                  r.default,
                  u.default
                ),
                this.push(
                  "annotation",
                  this.element.find(
                    ".sqs-layout > .sqs-row > .col > .sqs-row > .col:nth-child(1) > .sqs-block-html:nth-child(1) > .sqs-block-content > blockquote:nth-child(1)"
                  ),
                  r.default,
                  h.default
                ),
                (this.images = this.element.find(s.config.lazyImageSelector)),
                (this.imageController = new a.default(this.images)),
                this.imageController.on("preloaded", function () {
                  t.init(), t.callback && t.callback();
                });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.imageController && this.imageController.destroy(),
                this.kill();
            },
          },
        ]),
        t
      );
    })();
    e.default = y;
  },
  function (t, e, i) {
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
    t.exports = function (t, e, i) {
      var n = null;
      return function () {
        var s = arguments,
          r = this;
        n ? clearTimeout(n) : i && t.apply(r, s),
          (n = setTimeout(function () {
            i || t.apply(r, s), (n = null);
          }, e || 100));
      };
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = f(i(4)),
      a = f(i(72)),
      o = f(i(73)),
      l = f(i(23)),
      u = f(i(7)),
      h = f(i(21)),
      c = f(i(14));
    function f(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var d = s.dom.body.find(".js-search-block").detach().find("script"),
      p = JSON.parse(d[0].textContent),
      _ = (function () {
        function t(e, i) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.element = e),
            (this.parent = this.element.parent()),
            (this.elemData = i),
            (this.blockJson = p),
            this.element.data("instance", this),
            (this.placeholders = {
              default: "Start typing to search",
              mobile: "Search",
            }),
            (this.data = {}),
            (this.ajax = null),
            (this.waiting = 300),
            (this.isFetch = !1),
            (this.isTag = !1),
            this.load().then(function () {
              n.bind(), n.elemData.results && n.bindResults();
            });
        }
        return (
          n(t, [
            {
              key: "load",
              value: function () {
                var t = this;
                return new Promise(function (e) {
                  (t.element[0].innerHTML = (0, a.default)(t)),
                    (t.search = t.element.find(".js-search-field")),
                    (t.button = t.element.find(".js-search-btn")),
                    t.doResize(),
                    t.fetchTags(),
                    e();
                });
              },
            },
            {
              key: "bind",
              value: function () {
                var t = this;
                this.button.on("click", function () {
                  t.clear(), t.isTag && t.clearTagged();
                }),
                  this.search.on("keyup", function () {
                    t.search[0].value
                      ? (t.button.addClass("is-active"),
                        t.parent.addClass("is-keytext"))
                      : (t.button.removeClass("is-active"),
                        t.parent.removeClass("is-keytext"));
                  }),
                  (this.__appResize = this.doResize.bind(this)),
                  s.emitter.on("app--resize", this.__appResize);
              },
            },
            {
              key: "bindResults",
              value: function () {
                var t = this;
                (this.results = this.parent.find(this.elemData.results)),
                  (this.loader = this.results.find(".js-search-loader")),
                  (this.display = this.results.find(".js-search-display")),
                  this.button.on("click", function () {
                    t.emptyResults();
                  }),
                  this.search.on(
                    "keyup",
                    (0, h.default)(function () {
                      t.isFetch
                        ? (t.ajax.abort(), (t.isFetch = !1), t.fetch())
                        : !t.isFetch && t.search[0].value && t.fetch();
                    }, this.waiting)
                  );
              },
            },
            {
              key: "bindTags",
              value: function () {
                var t = this;
                this.tagsEl.on("click", ".js-tag", function (e) {
                  var i = (0, r.default)(e.target).data();
                  t.clear(),
                    (t.search[0].placeholder = i.tag),
                    t.search[0].blur(),
                    (t.search[0].disabled = !0),
                    t.search.addClass("is-tagged"),
                    t.fetchTag(i.tag),
                    t.parent.addClass("is-tagged"),
                    t.button.addClass("is-active"),
                    (t.isTag = !0);
                });
              },
            },
            {
              key: "doResize",
              value: function () {
                window.innerWidth <= s.config.mobileMediaHack
                  ? (this.search[0].placeholder = this.placeholders.mobile)
                  : (this.search[0].placeholder = this.placeholders.default);
              },
            },
            {
              key: "emptyResults",
              value: function () {
                this.display.find(".js-search-grid").removeClass("is-active"),
                  (this.display[0].innerHTML = "");
              },
            },
            {
              key: "displayResults",
              value: function (t) {
                var e = this;
                (this.display[0].innerHTML = (0, l.default)(
                  t || { items: [] }
                )),
                  (this.imageController = new c.default(
                    this.display.find(s.config.lazyImageSelector)
                  )),
                  this.imageController.on("preloaded", function () {
                    e.display.find(".js-search-grid").addClass("is-active");
                  });
              },
            },
            {
              key: "reset",
              value: function () {
                this.search[0].blur(),
                  (this.search[0].value = ""),
                  this.clearTagged(),
                  this.emptyResults(),
                  this.button.removeClass("is-active"),
                  this.loader.removeClass("is-active"),
                  this.tags.removeClass("is-active");
              },
            },
            {
              key: "clear",
              value: function () {
                (this.search[0].value = ""),
                  this.search[0].focus(),
                  this.button.removeClass("is-active"),
                  this.parent.removeClass("is-keytext"),
                  this.search.removeClass("is-tagged"),
                  this.parent.removeClass("is-tagged");
              },
            },
            {
              key: "clearTagged",
              value: function () {
                (this.isTag = !1),
                  (this.search[0].disabled = !1),
                  this.search.removeClass("is-tagged"),
                  this.parent.removeClass("is-tagged"),
                  this.doResize();
              },
            },
            {
              key: "fetchTags",
              value: function () {
                var t = this;
                return new Promise(function (e, i) {
                  r.default
                    .ajax({
                      url: "/stories/",
                      method: "GET",
                      dataType: "json",
                      data: { format: "json" },
                    })
                    .then(function (i) {
                      e(i),
                        (t.filters = t.parent.find(".js-search-filters")),
                        (t.filters[0].innerHTML = (0, o.default)(i)),
                        (t.tagsEl = t.filters.find(".js-tags")),
                        (t.tags = t.filters.find(".js-tag")),
                        t.bindTags();
                    })
                    .catch(function (t) {
                      i(t);
                    });
                });
              },
            },
            {
              key: "fetchTag",
              value: function (t) {
                var e = this;
                return (
                  (this.isFetch = !0),
                  this.loader.addClass("is-active"),
                  this.emptyResults(),
                  new Promise(function (i, n) {
                    r.default
                      .ajax({
                        url: "/stories/",
                        method: "GET",
                        dataType: "json",
                        data: { format: "json", tag: t },
                      })
                      .then(function (t) {
                        i(), e.handle(t);
                      })
                      .catch(function (t) {
                        n(), e.handle(t);
                      });
                  })
                );
              },
            },
            {
              key: "fetchQuery",
              value: function (t) {
                return r.default.ajax({
                  url: "/api/search/GeneralSearch",
                  method: "GET",
                  headers: { "Content-Type": "application/json;charset=UTF-8" },
                  dataType: "json",
                  data: {
                    crumb: u.default.crumb,
                    q: t,
                    p: 0,
                    size: 12,
                    f_collectionId: this.blockJson.collectionId,
                  },
                });
              },
            },
            {
              key: "handle",
              value: function (t) {
                (this.isFetch = !1),
                  this.loader.removeClass("is-active"),
                  t.serviceError
                    ? this.displayResults(null)
                    : this.displayResults(t);
              },
            },
            {
              key: "fetch",
              value: function () {
                var t = this;
                (this.isFetch = !0),
                  this.loader.addClass("is-active"),
                  this.emptyResults(),
                  (this.ajax = this.fetchQuery(this.search[0].value)),
                  this.ajax
                    .then(function (e) {
                      t.handle(e);
                    })
                    .catch(function (e) {
                      t.handle(e);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                s.emitter.off("app--resize", this.__appResize),
                  this.imageController && this.imageController.destroy();
              },
            },
          ]),
          t
        );
      })();
    e.default = _;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e = t.items || [];
        return e.length
          ? '<div class="grid js-search-grid">' +
              e
                .map(function (t) {
                  return (
                    '\n            <div class="grid__item js-lazy-anim">\n                <a class="grid__link grid__anim" href="' +
                    (t.itemUrl || t.fullUrl) +
                    '">\n                    <img class="grid__image image js-lazy-image" data-img-src="' +
                    (t.imageUrl || t.assetUrl) +
                    '" data-variants="100w,300w,500w,750w,1000w,1500w,2500w" />\n                    <div class="grid__info">\n                        <div class="grid__title">' +
                    t.title +
                    (t.customContent && t.customContent.ctaTextValue
                      ? ", <span>" + t.customContent.ctaTextValue + "</span>"
                      : "") +
                    "</div>\n                    </div>\n                </a>\n            </div>\n        "
                  );
                })
                .join("") +
              "</div>"
          : '<div class="grid js-search-grid"><div class="grid__item"><p class="-grey">no results</p></div></div>';
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1));
    var r = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.wrapper = this.element.find(".js-stack-wrap")),
          (this.data = this.element.data()),
          this.element.length && this.bind();
      }
      return (
        n(t, [
          {
            key: "doScroll",
            value: function () {
              var t = this.element[0].getBoundingClientRect(),
                e = window.innerHeight / 3,
                i = window.innerHeight - e;
              t.y <= i
                ? (this.element.addClass("is-stack-active"),
                  s.dom.html.addClass("is-stack is-stack--" + this.data.id),
                  this.wrapper.addClass("is-active"))
                : (this.element.removeClass("is-stack-active"),
                  s.dom.html.removeClass("is-stack is-stack--" + this.data.id),
                  this.wrapper.removeClass("is-active"));
            },
          },
          {
            key: "bind",
            value: function () {
              var t = this;
              (this.__appScroll = this.doScroll.bind(this)),
                setTimeout(function () {
                  s.emitter.on("app--scroll", t.__appScroll);
                }, 1e3);
            },
          },
          {
            key: "destroy",
            value: function () {
              s.emitter.off("app--scroll", this.__appScroll);
            },
          },
        ]),
        t
      );
    })();
    e.default = r;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      s = l(i(4)),
      r = i(16),
      a = l(i(22)),
      o = l(i(101));
    function l(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var u = {
      init: function () {
        (this.time = 500),
          (this.halfTime = this.time / 2),
          (this.isOpen = !1),
          (this.isSearch = !1),
          (this.nav = n.dom.body.find(".js-navi")),
          (this.navItems = this.nav.find(".js-navi-a")),
          (this.navTrigger = n.dom.body.find(".js-navi-meni")),
          (this.menu = n.dom.body.find(".js-meni")),
          (this.menuItems = this.menu.find(".js-meni-a")),
          (this.menuAnims = this.menu.find(
            ".js-meni-search, .js-meni-a, .js-meni-footer"
          )),
          (this.menuSearch = this.menu.find(".js-meni-search")),
          (this.menuClose = this.menu.find(".js-meni-close")),
          (this.search = this.menu.find(".js-search")),
          (this.filters = this.menu.find(".js-search-filters")),
          (this.main = n.dom.main),
          (this.header = n.dom.body.find(".js-header")),
          (this.searchComponent = new a.default(
            this.search,
            this.search.data()
          )),
          this.bind(),
          this.animMenuItems(0),
          this.animMenuSearch(0),
          this.animMenuClose(0);
      },
      bind: function () {
        var t = this;
        this.navTrigger.on("click", function () {
          t.toggleMenu();
        }),
          this.menuSearch.on("click", function () {
            t.toggleSearch();
          }),
          this.menuClose.on("click", function () {
            t.closeSearch();
          }),
          (this.swipe = new o.default(
            this.menu[0],
            n.util.getDefaultHammerOptions()
          )),
          this.swipe.on("tap", this.onTap.bind(this)),
          this.swipe.on("swipe", this.onSwipe.bind(this)),
          n.emitter.on("app--resize", this.doResize.bind(this)),
          n.emitter.on("app--scrollup", this.onScrollUp.bind(this)),
          n.emitter.on("app--scrolldown", this.onScrollDown.bind(this));
      },
      isNonInteractionTap: function (t) {
        return !(
          t.is(".js-navi-meni") ||
          t.is(".js-meni-a") ||
          t.is(".js-meni-search") ||
          t.is(".js-meni-ext") ||
          t.is(".js-meni-close")
        );
      },
      handleHamEvent: function (t) {
        var e = (0, s.default)(t.target);
        this.isOpen &&
          !this.isSearch &&
          this.isNonInteractionTap(e) &&
          (t.srcEvent.preventDefault(),
          t.srcEvent.stopPropagation(),
          t.srcEvent.stopImmediatePropagation(),
          this.closeMenu());
      },
      doResize: function () {
        var t = this.header[0].getBoundingClientRect(),
          e = n.dom.main.find(".js-paddy");
        (this.main[0].style.paddingTop = t.height + "px"),
          e.length && (e[0].style.paddingTop = t.height + "px");
      },
      onTap: function (t) {
        this.handleHamEvent(t);
      },
      onSwipe: function (t) {
        t.direction === o.default.DIRECTION_RIGHT && this.handleHamEvent(t);
      },
      onScrollUp: function (t) {
        this.handleScroll(t);
      },
      onScrollDown: function (t) {
        this.handleScroll(t);
      },
      handleScroll: function (t) {
        t > 0
          ? n.dom.html.addClass("is-header-small")
          : n.dom.html.removeClass("is-header-small");
      },
      animMenuItems: function (t) {
        this.tweenMenu = new r.TweenLite.to(
          this.menuAnims,
          this.halfTime / 1e3,
          {
            opacity: t,
            y: t ? 0 : 16,
            ease: r.Power3.ease,
            delay: t ? this.halfTime / 1e3 : 0,
          }
        );
      },
      animMenuSearch: function (t) {
        this.tweenSearch = new r.TweenLite.to(
          [this.search[0], this.filters[0]],
          this.halfTime / 1e3,
          {
            opacity: t,
            y: t ? 0 : 16,
            ease: r.Power3.ease,
            delay: t ? this.time / 1e3 : 0,
          }
        );
      },
      animMenuClose: function (t) {
        this.tweenClose = new r.TweenLite.to(
          this.menuClose[0],
          this.halfTime / 1e3,
          {
            opacity: t,
            y: t ? 0 : 16,
            ease: r.Power3.ease,
            delay: t ? this.time / 1e3 : 0,
          }
        );
      },
      show: function () {
        var t = this;
        return new Promise(function (e) {
          (t.menu[0].style.display = "block"),
            setTimeout(function () {
              e();
            }, 100);
        });
      },
      hide: function () {
        var t = this;
        setTimeout(function () {
          t.menu[0].style.display = "none";
        }, 100);
      },
      openMenu: function () {
        var t = this;
        return new Promise(function (e) {
          (t.isOpen = !0),
            t.show().then(function () {
              t.menu.addClass("is-active"),
                n.dom.html.addClass("is-menu-open"),
                t.animMenuItems(1),
                setTimeout(function () {
                  t.menu.addClass("is-static"), e();
                }, t.time);
            });
        });
      },
      closeMenu: function () {
        var t = this;
        return new Promise(function (e) {
          (t.isOpen = !1),
            t.menu.removeClass("is-static"),
            t.menu.addClass("is-closing"),
            n.dom.html.removeClass("is-menu-open"),
            t.animMenuItems(0),
            setTimeout(function () {
              t.menu.removeClass("is-static is-active is-closing"),
                t.hide(),
                e();
            }, t.time);
        });
      },
      openSearch: function () {
        var t = this;
        return new Promise(function (e) {
          (t.isSearch = !0),
            t.menu.addClass("is-search"),
            n.dom.html.addClass("is-menu-search"),
            t.searchComponent.clear(),
            t.animMenuSearch(1),
            t.animMenuItems(0),
            t.animMenuClose(1),
            setTimeout(function () {
              e();
            }, t.time);
        });
      },
      closeSearch: function () {
        var t = this;
        return new Promise(function (e) {
          (t.isSearch = !1),
            t.menu.removeClass("is-search"),
            n.dom.html.removeClass("is-menu-search"),
            t.searchComponent.reset(),
            t.animMenuSearch(0),
            t.animMenuItems(1),
            t.animMenuClose(0),
            setTimeout(function () {
              e();
            }, t.time);
        });
      },
      closeAll: function () {
        this.isSearch
          ? (this.closeSearch(), this.closeMenu())
          : this.closeMenu();
      },
      setActive: function (t) {
        this.navItems.removeClass("is-active"),
          this.navItems.filter(".js-navi--" + t).addClass("is-active"),
          this.menuItems.removeClass("is-active"),
          this.menuItems.filter(".js-meni--" + t).addClass("is-active");
      },
      toggleMenu: function () {
        this.isOpen ? this.closeMenu() : this.openMenu();
      },
      toggleSearch: function () {
        this.isSearch ? this.closeSearch() : this.openSearch();
      },
    };
    e.default = u;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = c(i(27)),
      r = c(i(28)),
      a = c(i(29)),
      o = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      l = c(i(12)),
      u = c(i(102)),
      h = c(i(25));
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    i(103);
    var f = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.metrics = new a.default()),
          (this.core = o),
          (this.intro = u.default),
          (this.navi = h.default),
          (this.router = l.default),
          (this.resizer = new s.default()),
          (this.scroller = new r.default()),
          (this.scrollBounce = 300),
          (this.scrollTimeout = null),
          this.init();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.core.detect.init(),
                this.intro.init(),
                this.navi.init(),
                this.router.init(),
                this.router
                  .load()
                  .then(function () {
                    t.bind(), t.intro.teardown();
                  })
                  .catch(function (e) {
                    t.core.log("warn", e);
                  });
            },
          },
          {
            key: "bind",
            value: function () {
              var t = this;
              this.resizer.on("resize", function () {
                o.emitter.fire("app--resize");
              }),
                this.scroller.on("scroll", function () {
                  o.emitter.fire("app--scroll", t.scroller.getScrollY()),
                    o.dom.html.addClass("is-scrolling"),
                    clearTimeout(t.scrollTimeout),
                    (t.scrollTimeout = setTimeout(function () {
                      o.dom.html.removeClass("is-scrolling");
                    }, t.scrollBounce));
                }),
                this.scroller.on("scrollup", function () {
                  o.dom.html
                    .removeClass("is-scroll-down")
                    .addClass("is-scroll-up"),
                    o.emitter.fire("app--scrollup", t.scroller.getScrollY());
                }),
                this.scroller.on("scrolldown", function () {
                  t.scroller.getScrollY() > 0 &&
                    (o.dom.html
                      .removeClass("is-scroll-up")
                      .addClass("is-scroll-down"),
                    o.emitter.fire("app--scrolldown", t.scroller.getScrollY()));
                }),
                window.Y.Global.on("tweak:change", function () {
                  window.location.reload();
                }),
                window.Y.Global.on("tweak:reset", function () {
                  window.location.reload();
                });
            },
          },
        ]),
        t
      );
    })();
    (window.app = new f()), (e.default = window.app);
  },
  function (t, e, i) {
    /*!
     *
     * Window resize / orientationchange event controller
     *
     * @ResizeController
     * @author: kitajchuk
     *
     *
     */
    t.exports = (function () {
      var t = i(6),
        e = function () {
          t.call(this),
            (this.currentView = this.getViewport()),
            (this.hasOrientation = "orientation" in window),
            this.start();
        };
      return (
        ((e.prototype = Object.create(t.prototype)).start = function () {
          var t = this;
          this.go(function () {
            var e = t.getViewport(),
              i =
                (e.width === t.currentView.width &&
                  (e.height, t.currentView.height),
                e.width !== t.currentView.width ||
                  e.height !== t.currentView.height),
              n =
                e.width > t.currentView.width ||
                e.height > t.currentView.height,
              s =
                e.width < t.currentView.width ||
                e.height < t.currentView.height,
              r = e.width !== t.currentView.width,
              a = e.height !== t.currentView.height,
              o = e.orient !== t.currentView.orient,
              l = e.orient !== t.currentView.orient && 90 !== e.orient,
              u = e.orient !== t.currentView.orient && 90 === e.orient;
            i && t.fire("resize"),
              s ? t.fire("resizedown") : n && t.fire("resizeup"),
              r ? t.fire("resizewidth") : a && t.fire("resizeheight"),
              o && t.fire("orientationchange"),
              l
                ? t.fire("orientationportrait")
                : u && t.fire("orientationlandscape"),
              (t.currentView = e);
          });
        }),
        (e.prototype.destroy = function () {
          this.stop();
        }),
        (e.prototype.getViewport = function () {
          return {
            width: window.innerWidth,
            height: window.innerHeight,
            orient: this.hasOrientation ? Math.abs(window.orientation) : null,
          };
        }),
        (e.prototype.isPortrait = function () {
          var t = this.getViewport().orient;
          return null !== t && 90 !== t;
        }),
        (e.prototype.isLandscape = function () {
          var t = this.getViewport().orient;
          return null !== t && 90 === t;
        }),
        e
      );
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Window scroll event controller
     *
     * @ScrollController
     * @author: kitajchuk
     *
     *
     */
    t.exports = (function () {
      var t = i(6),
        e = function (e) {
          t.call(this),
            (this.element = e || window),
            (this.current = null),
            (this.isWindow = this.element === window),
            this.start();
        };
      return (
        ((e.prototype = Object.create(t.prototype)).start = function () {
          var t = this;
          this.go(function () {
            var e = t.getScrollY(),
              i = (t.current, e !== t.current),
              n = e < t.current,
              s = e > t.current,
              r = e !== t.current && t.isScrollMax(),
              a = e !== t.current && t.isScrollMin();
            i && t.fire("scroll"),
              s ? t.fire("scrolldown") : n && t.fire("scrollup"),
              r ? t.fire("scrollmax") : a && t.fire("scrollmin"),
              (t.current = e);
          });
        }),
        (e.prototype.destroy = function () {
          this.stop();
        }),
        (e.prototype.getScrollY = function () {
          return this.isWindow ? window.scrollY : this.element.scrollTop;
        }),
        (e.prototype.getScrollMax = function () {
          return (
            (this.isWindow
              ? Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight,
                  document.body.offsetHeight,
                  document.documentElement.offsetHeight,
                  document.documentElement.clientHeight
                )
              : Math.max(
                  this.element.scrollHeight,
                  this.element.offsetHeight,
                  this.element.clientHeight
                )) - window.innerHeight
          );
        }),
        (e.prototype.isScrollMax = function () {
          return this.getScrollY() >= this.getScrollMax();
        }),
        (e.prototype.isScrollMin = function () {
          return this.getScrollY() <= 0;
        }),
        e
      );
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = o(i(4)),
      a = o(i(7));
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var l = null,
      u = (function () {
        function t() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            l ||
              (s.emitter.on("app--tracker", this.pushTrack.bind(this)),
              s.log("Metrics initialized"),
              (l = this)),
            l
          );
        }
        return (
          n(t, [
            {
              key: "pushTrack",
              value: function (t) {
                var e = t.data.itemTitle || t.data.collectionTitle,
                  i = t.data.websiteId,
                  n = t.data.itemId
                    ? { itemId: t.data.itemId }
                    : { collectionId: t.data.collectionId };
                this.recordHit(i, n, e)
                  .then(function (t) {
                    s.log("RecordHit", t);
                  })
                  .catch(function (t) {
                    s.log("warn", t);
                  }),
                  window.ga &&
                    window.ga("send", "pageview", window.location.href),
                  this.setDocumentTitle(e);
              },
            },
            {
              key: "setDocumentTitle",
              value: function (t) {
                document.title = t;
              },
            },
            {
              key: "recordHit",
              value: function (t, e, i) {
                var n = {
                  url: window.location.pathname,
                  queryString: window.location.search,
                  userAgent: window.navigator.userAgent,
                  referrer: "",
                  localStorageSupported: a.default.isStorageSupported,
                  viewportInnerHeight: window.innerHeight,
                  viewportInnerWidth: window.innerWidth,
                  screenHeight: window.screen.height,
                  screenWidth: window.screen.width,
                  title: i,
                  websiteId: t,
                  templateId: t,
                  website_locale: "en-US",
                  clientDate: Date.now(),
                };
                return (
                  e.itemId
                    ? (n.itemId = e.itemId)
                    : (n.collectionId = e.collectionId),
                  r.default.ajax({
                    url: "/api/census/RecordHit?crumb=" + a.default.crumb,
                    method: "POST",
                    data: {
                      event: 1,
                      data: JSON.stringify(n),
                      ss_cvr: a.default.ss_cvr,
                    },
                    dataType: "json",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                  })
                );
              },
            },
          ]),
          t
        );
      })();
    e.default = u;
  },
  function (t, e, i) {
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
    t.exports = (function () {
      var t = i(2),
        e = i(3);
      return (
        (t.prototype.on = i(31)),
        (t.prototype.off = i(32)),
        (t.prototype.data = i(33)),
        (t.prototype.find = i(34)),
        (t.prototype.addClass = i(35)),
        (t.prototype.removeClass = i(36)),
        (t.prototype.is = i(37)),
        (t.prototype.eq = i(38)),
        (t.prototype.not = i(39)),
        (t.prototype.one = i(40)),
        (t.prototype.next = i(41)),
        (t.prototype.prev = i(42)),
        (t.prototype.attr = i(43)),
        (t.prototype.last = i(44)),
        (t.prototype.first = i(45)),
        (t.prototype.index = i(46)),
        (t.prototype.parent = i(47)),
        (t.prototype.filter = i(48)),
        (t.prototype.detach = i(49)),
        (t.prototype.append = i(50)),
        (t.prototype.remove = i(51)),
        (t.prototype.trigger = i(52)),
        (t.prototype.prepend = i(53)),
        (t.prototype.closest = i(54)),
        (t.prototype.children = i(55)),
        (t.prototype.removeAttr = i(56)),
        (t.prototype.toggleClass = i(57)),
        (hobo = function (e, i) {
          return new t(e, i);
        }),
        (hobo.ajax = i(58)),
        (hobo.utils = e),
        hobo
      );
    })();
  },
  function (t, e, i) {
    var n = i(5),
      s = i(3);
    t.exports = function (t, e, i) {
      var r = this;
      return (
        i || ((i = e), (e = this._selector)),
        t.split(" ").forEach(function (t) {
          r._events[t] || (r._events[t] = {}),
            r.forEach(function (a) {
              (function (t, e, i, r) {
                var a = s.makeId() + "EVENT",
                  o = e,
                  l = function (t) {
                    var s = i ? n(t.target, i, !0) : this;
                    if ("mouseenter" === e || "mouseleave" === e) {
                      var a = "mouseenter" === e ? t.fromElement : t.toElement;
                      s && a !== s && !s.contains(a) && r.call(s, t);
                    } else s && r.call(s, t);
                  };
                "mouseenter" === e
                  ? (o = "mouseover")
                  : "mouseleave" === e && (o = "mouseout"),
                  (this._events[e][a] = {
                    id: a,
                    type: o,
                    node: t,
                    handler: l,
                    callback: r,
                  }),
                  t.addEventListener(o, l, !1);
              }).call(r, a, t, e, i);
            });
        }),
        this
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var i = this;
      return (
        (t ? t.split(" ") : [null]).forEach(function (t) {
          i.forEach(function (n) {
            null === t
              ? function (t) {
                  var e, i, n;
                  for (e in this._events)
                    if (this._events.hasOwnProperty(e))
                      for (n in this._events[e])
                        this._events[e].hasOwnProperty(n) &&
                          (i = this._events[e][n]).node === t &&
                          (t.removeEventListener(i.type, i.handler, !1),
                          delete this._events[e][n]);
                }.call(i, n)
              : function (t, e, i) {
                  var n, s;
                  if (i)
                    for (s in this._events[e])
                      this._events[e].hasOwnProperty(s) &&
                        (n = this._events[e][s]).node === t &&
                        n.callback === i &&
                        (t.removeEventListener(n.type, n.handler, !1),
                        delete this._events[e][s]);
                  else
                    for (s in this._events[e])
                      this._events[e].hasOwnProperty(s) &&
                        (n = this._events[e][s]).node === t &&
                        (t.removeEventListener(n.type, n.handler, !1),
                        delete this._events[e][s]);
                }.call(i, n, t, e);
          });
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(3);
    t.exports = function (t, e) {
      var i = this,
        s = null;
      return (
        "object" == typeof t
          ? ((s = t),
            this.forEach(function (t) {
              n.storeData(s, t);
            }))
          : e
          ? (((s = {})[t] = e),
            this.forEach(function (t) {
              n.storeData(s, t);
            }))
          : t
          ? (this.forEach(function (e) {
              null === s && (s = n.retrieveData(t, e));
            }),
            (i = s))
          : ((s = {}),
            this.forEach(function (t) {
              n.mergeData(s, t);
            }),
            (i = s)),
        i
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(3);
    t.exports = function (t) {
      var e = this;
      return (
        this.length > 1
          ? ((e = []),
            this.forEach(function (i) {
              e = e.concat(s.makeArray(i.querySelectorAll(t)));
            }),
            (e = new n(e, null)))
          : (e = new n(this.length ? t : [], this.length ? this[0] : null)),
        e
      );
    };
  },
  function (t, e, i) {
    var n = i(3);
    t.exports = function (t) {
      return (
        this.forEach(function (e) {
          var i = t.split(" "),
            s = n.getClass(e).split(" ");
          i.forEach(function (t) {
            -1 === s.indexOf(t) && s.push(t);
          }),
            n.setClass(e, n.trimString(s.join(" ")));
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(3);
    t.exports = function (t) {
      return (
        this.forEach(function (e) {
          if (void 0 === t) n.setClass(e, "");
          else {
            var i = t.split(" "),
              s = n.getClass(e).split(" ");
            i.forEach(function (t) {
              -1 !== s.indexOf(t) && s.splice(s.indexOf(t), 1);
            }),
              n.setClass(e, n.trimString(s.join(" ")));
          }
        }),
        this
      );
    };
  },
  function (t, e, i) {
    i(2);
    var n = i(5);
    t.exports = function (t) {
      return !!n(this[0], t);
    };
  },
  function (t, e, i) {
    var n = i(2);
    t.exports = function (t) {
      return t < this.length ? new n(this[t], this._context) : this;
    };
  },
  function (t, e, i) {
    var n = i(5),
      s = i(2);
    t.exports = function (t) {
      var e = new s([], this._context);
      return (
        t instanceof s
          ? this.forEach(function (i) {
              var n = !0;
              t.forEach(function (t) {
                i === t && (n = !1);
              }),
                n && e.push(i);
            })
          : this.forEach(function (i, s) {
              "function" == typeof t
                ? t(s, i) && e.push(i)
                : n(i, t) || e.push(i);
            }),
        e
      );
    };
  },
  function (t, e, i) {
    i(5), i(3);
    t.exports = function (t, e, i) {
      var n = this;
      return (
        i || ((i = e), (e = this._selector)),
        this.on(t, e, function e(s) {
          i.call(this, s), n.off(t, e);
        })
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      var e = [];
      return (
        this.forEach(function (i) {
          for (var n = i.nextSibling; n && 1 !== n.nodeType; )
            n = n.nextSibling;
          n && (!t || (t && s(n, t))) && e.push(n);
        }),
        new n(e, this._context)
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      var e = [];
      return (
        this.forEach(function (i) {
          for (var n = i.previousSibling; n && 1 !== n.nodeType; )
            n = n.previousSibling;
          n && (!t || (t && s(n, t))) && e.push(n);
        }),
        new n(e, this._context)
      );
    };
  },
  function (t, e, i) {
    var n = i(3),
      s = function (t, e, i) {
        if ((t.setAttribute(e, i), n.rData.test(e))) {
          var s = {};
          (s[e.replace(n.rData, "")] = i), n.storeData(s, t);
        }
      };
    t.exports = function (t, e) {
      var i = this;
      if ("object" == typeof t)
        for (var n in t)
          this.forEach(function (e) {
            s(e, n, t[n]);
          });
      else
        void 0 !== e
          ? this.forEach(function (i) {
              s(i, t, e);
            })
          : (i = this[0].getAttribute(t));
      return i;
    };
  },
  function (t, e, i) {
    var n = i(2);
    t.exports = function () {
      return new n(this[this.length - 1], this._context);
    };
  },
  function (t, e, i) {
    var n = i(2);
    t.exports = function () {
      return new n(this[0], this._context);
    };
  },
  function (t, e) {
    t.exports = function () {
      return [].indexOf.call(this[0].parentNode.children, this[0]);
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      var e = [];
      return (
        this.forEach(function (i) {
          (!t || (t && s(i.parentNode, t))) && e.push(i.parentNode);
        }),
        new n(e, null)
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      var e = [];
      return (
        this.forEach(function (i) {
          s(i, t) && e.push(i);
        }),
        new n(e, null)
      );
    };
  },
  function (t, e) {
    t.exports = function () {
      return (
        this.forEach(function (t) {
          t.parentNode && t.parentNode.removeChild(t);
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(2);
    t.exports = function (t) {
      return (
        "string" == typeof t && (t = new n(t)),
        this.forEach(function (e) {
          t instanceof n || (t.length && "function" == typeof t.forEach)
            ? t.forEach(function (t) {
                t.nodeType && 1 === t.nodeType && e.appendChild(t);
              })
            : t.nodeType && e.appendChild(t);
        }),
        this
      );
    };
  },
  function (t, e) {
    t.exports = function () {
      return (
        this.off(),
        this.forEach(function (t) {
          delete t.hoboDataMap, t.parentNode && t.parentNode.removeChild(t);
        }),
        this
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e,
        i,
        n = this;
      return (
        this.forEach(function (s) {
          for (i in n._events[t])
            n._events[t].hasOwnProperty(i) &&
              (e = n._events[t][i]).node === s &&
              ((e = document.createEvent("Events")).initEvent(t, !0, !1),
              s.dispatchEvent(e));
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(2);
    t.exports = function (t) {
      return (
        "string" == typeof t && (t = new n(t)),
        this.forEach(function (e) {
          t instanceof n || (t.length && "function" == typeof t.forEach)
            ? t.forEach(function (t) {
                t.nodeType &&
                  1 === t.nodeType &&
                  e.insertBefore(t, e.firstChild);
              })
            : t.nodeType && e.insertBefore(t, e.firstChild);
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      var e = [];
      return (
        this.forEach(function (i) {
          var n = s(i, t, !0);
          n && e.push(n);
        }),
        new n(e, null)
      );
    };
  },
  function (t, e, i) {
    var n = i(2);
    i(3);
    t.exports = function () {
      var t,
        e,
        i = [];
      return (
        this.forEach(function (n) {
          for (e = 0, t = n.children.length; e < t; e++) i.push(n.children[e]);
        }),
        new n(i, this._context)
      );
    };
  },
  function (t, e, i) {
    var n = i(3);
    t.exports = function (t) {
      return (
        this.forEach(function (e) {
          e.removeAttribute(t),
            n.rData.test(t) && n.removeData(t.replace(n.rData, ""), e);
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(2),
      s = i(5);
    t.exports = function (t) {
      return (
        (t = t.split(" ")),
        this.forEach(function (e) {
          t.forEach(function (t) {
            s(e, "." + t)
              ? new n(e, null).removeClass(t)
              : new n(e, null).addClass(t);
          });
        }),
        this
      );
    };
  },
  function (t, e, i) {
    var n = i(3),
      s = function () {
        var t = this;
        this._promise = new Promise(function (e, i) {
          (t._resolve = e), (t._reject = i);
        });
      };
    (s.prototype.then = function (t) {
      return (this._then = t), this;
    }),
      (s.prototype.catch = function (t) {
        return (this._catch = t), this;
      }),
      (s.prototype.resolve = function (t) {
        return this._then && (this._then(t), this._resolve(t)), this;
      }),
      (s.prototype.reject = function (t) {
        return this._catch && (this._catch(t), this._reject(t)), this;
      }),
      (s.prototype.abort = function () {
        return (
          this._xhr &&
            (this._reject("Rejecting on XMLHttpRequest.abort()"),
            this._xhr.abort()),
          this
        );
      }),
      (t.exports = function (t) {
        var e = t.data || null,
          i = t.dataType || "html",
          r = (t.method || "GET").toUpperCase(),
          a = t.url || window.location.href,
          o = t.headers || null,
          l = t.payload || null,
          u = new s();
        !e ||
          (FormData && e instanceof FormData) ||
          (e = n.serializeData(t.data)),
          l && "string" != typeof l && (l = JSON.stringify(l)),
          "GET" === r && e && (a += "?" + e);
        var h = function (t) {
          if ("json" === i)
            try {
              t = JSON.parse(t);
            } catch (e) {
              u.reject(t);
            }
          u.resolve(t);
        };
        if ("jsonp" === i) {
          var c = n.makeId() + "JSONP",
            f = t.jsonp || "callback",
            d = document.createElement("script");
          (d.src = a + (/\?/.test(a) ? "&" : "?") + f + "=" + c),
            (window[c] = function (t) {
              document.getElementsByTagName("head")[0].removeChild(d),
                (d = null),
                delete window[c],
                h(t);
            }),
            document.getElementsByTagName("head")[0].appendChild(d);
        } else {
          var p = new XMLHttpRequest();
          if ((p.open(r, a, !0), o))
            for (var _ in o) o.hasOwnProperty(_) && p.setRequestHeader(_, o[_]);
          (p.onreadystatechange = function (t) {
            4 === this.readyState &&
              (/^20/.test(this.status)
                ? h(this.responseText)
                : u.reject(this.responseText));
          }),
            p.send(e || l),
            (u._xhr = p);
        }
        return u;
      });
  },
  function (t, e, i) {
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
    t.exports = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return (1 - Math.cos(t * Math.PI)) / 2;
      },
      easeInQuad: function (t) {
        return t * t;
      },
      easeOutQuad: function (t) {
        return t * (2 - t);
      },
      easeInOutQuad: function (t) {
        return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
      },
      easeInCubic: function (t) {
        return t * t * t;
      },
      easeOutCubic: function (t) {
        return --t * t * t + 1;
      },
      easeInOutCubic: function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart: function (t) {
        return t * t * t * t;
      },
      easeOutQuart: function (t) {
        return 1 - --t * t * t * t;
      },
      easeInOutQuart: function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      easeInQuint: function (t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function (t) {
        return 1 + --t * t * t * t * t;
      },
      easeInOutQuint: function (t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
    };
  },
  function (t, e, i) {
    /*!
     *
     * Handle lazy-loading images with contextual load conditions.
     *
     * @ImageLoader
     * @author: kitajchuk
     *
     *
     */
    t.exports = (function () {
      var t = i(6),
        e = function (e) {
          if (!e)
            throw new Error("ImageLoader Class requires options to be passed");
          if (
            (t.call(this),
            (this._executor =
              e.executor ||
              function (t) {
                return t;
              }),
            (this._elements = e.elements),
            (this._property = e.property || "data-src"),
            (this._loadType = e.loadType || "async"),
            (this._numLoaded = 0),
            (this._num2Load = this._elements ? this._elements.length : 0),
            (this._transitionDelay = e.transitionDelay || 0),
            (this._transitionDuration = e.transitionDuration || 400),
            (this._resolved = !1),
            !this._elements.length)
          )
            return this;
          "async" === this._loadType ? this.initAsync() : this.initSync();
        };
      return (
        ((e.prototype = Object.create(t.prototype)).initAsync = function () {
          var t = this;
          this.go(function () {
            t._resolved ? t.stop() : t.handle();
          });
        }),
        (e.prototype.initSync = function () {
          var t = this;
          !(function e() {
            var i = t._elements[t._numLoaded];
            t._numLoaded++,
              t.load(i, function (i) {
                i || t._resolved || e();
              });
          })();
        }),
        (e.prototype.load = function (t, e) {
          var i = this,
            n = null,
            s = null,
            r = "IMG" === t.nodeName,
            a = t.getAttribute(this._property);
          return (
            t.setAttribute("data-imageloader", !0),
            (n = r ? t : new Image()),
            (s = setTimeout(function () {
              clearTimeout(s),
                (n.onload = function () {
                  i.fire("load", t),
                    r ||
                      ((t.style.backgroundImage = "url(" + a + ")"),
                      (n = null)),
                    (s = setTimeout(function () {
                      clearTimeout(s),
                        i._numLoaded !== i._num2Load || i._resolved
                          ? "function" == typeof e && e(!1)
                          : i._resolve(!0);
                    }, i._transitionDuration));
                }),
                (n.onerror = function () {
                  i.fire("error", t),
                    i._numLoaded !== i._num2Load || i._resolved
                      ? "function" == typeof e && e(!0)
                      : i._resolve(!0);
                }),
                (n.src = a);
            }, this._transitionDelay)),
            this
          );
        }),
        (e.prototype.handle = function () {
          for (var t = this.getNotLoaded(), e = 0, i = t.length; e < i; e++)
            this._executor(t[e]) && (this._numLoaded++, this.load(t[e]));
        }),
        (e.prototype.getNotLoaded = function () {
          for (var t = [], e = 0, i = this._elements.length; e < i; e++)
            this._elements[e].getAttribute("data-imageloader") ||
              t.push(this._elements[e]);
          return t;
        }),
        (e.prototype._resolve = function () {
          (this._resolved = !0), this.fire("done");
        }),
        e
      );
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(7));
    e.default = new n.default({ enableStorage: !1 });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = new ((function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(6)).default)();
    e.default = n;
  },
  function (t, e, i) {
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
    t.exports = (function () {
      var t = i(64),
        e = i(6),
        n = null,
        s = [],
        r = [],
        a = { active: [], inactive: [] },
        o = !1,
        l = null,
        u = null,
        h = !0,
        c = null,
        f = null,
        d = !1,
        p = !1,
        _ = null,
        m = !1,
        v = null,
        g = function (t, e) {
          p || v.fire("page-controller-" + t, e);
        },
        y = function (t) {
          return "function" == typeof t;
        },
        b = function () {
          if (!p)
            for (var t = a.active.length; t--; )
              y(a.active[t].onload) && a.active[t].onload();
        },
        w = function (t) {
          var e,
            i = t.uri;
          for (e in t.query) i += "-" + e + "-" + t.query[e];
          for (e in t.params) i += "-" + e + "-" + t.params[e];
          return i;
        },
        T = function () {
          if (!p) {
            (a.active = []), (a.inactive = []);
            for (var t = r.length; t--; ) {
              var e = r[t];
              y(e.isActive) &&
                (e.isActive() ? a.active.push(e) : a.inactive.push(e));
            }
            g("router-synced-modules", a);
          }
        },
        x = function (t) {
          m ||
            ((m = !0),
            v.go(function () {
              Date.now() - l >= v._options.transitionTime && (v.stop(), C(t));
            }));
        },
        k = function (t) {
          m ||
            (P(t.request),
            setTimeout(function () {
              C(t);
            }, v._options.transitionTime));
        },
        P = function (t) {
          if (!m) {
            var e = f === w(t);
            if (e) return g("router-samepage", { request: t }), void (d = !0);
            (l = Date.now()), h || g("router-transition-out", { request: t });
          }
        },
        C = function (t) {
          if (d) return (d = !1), void (m = !1);
          var e = {
            response: t.response.responseText,
            request: t.request,
            status: t.status,
          };
          (u = e.request.uri),
            (c = e.request.query),
            (f = w(e.request)),
            h
              ? ((h = !1), (m = !1), T(), b(), g("initialized-page", e))
              : setTimeout(function () {
                  T(),
                    (function () {
                      if (!p)
                        for (var t = a.active.length; t--; )
                          y(a.active[t].unload) && a.active[t].unload();
                    })(),
                    g("router-refresh-document", e),
                    T(),
                    b(),
                    g("router-transition-in", e),
                    (m = !1),
                    p && ((p = !1), y(_) && (_(e), (_ = null)));
                }, v._options.transitionTime);
        },
        S = function (t) {
          if (
            !v &&
            ((v = this),
            (this._options = {
              transitionTime: 0,
              routerOptions: { pushStateOptions: {} },
            }),
            (t = t || {}).transitionTime &&
              (this._options.transitionTime = t.transitionTime),
            t.routerOptions)
          )
            for (var e in t.routerOptions)
              this._options.routerOptions[e] = t.routerOptions[e];
          return v;
        };
      return (
        ((S.prototype = new e()).initPage = function () {
          if (
            !o &&
            ((o = !0),
            (n = new t(this._options.routerOptions))._matcher.parse(
              window.location.href,
              s
            ).matched)
          ) {
            n.bind();
            for (var e = s.length; e--; ) n.get(s[e], x);
            n.on("preget", P),
              n.on("popget", k),
              (function (t) {
                for (var e = r.length; e--; )
                  !r[e].__initialized &&
                    y(r[e].init) &&
                    ((r[e].__initialized = !0), r[e].init());
              })();
          }
        }),
        (S.prototype.routeSilently = function (t, e) {
          (p = !0), (_ = e), n.trigger(t);
        }),
        (S.prototype.setConfig = function (t) {
          s = t;
        }),
        (S.prototype.setModules = function (t) {
          if (t) for (var e = t.length; e--; ) this.addModule(t[e]);
        }),
        (S.prototype.addModule = function (t) {
          if (
            !(
              -1 === r.indexOf(t) &&
              y(t.isActive) &&
              y(t.onload) &&
              y(t.unload)
            )
          )
            throw new Error(
              "PageController ERROR - All registered modules require isActive, onload and unload methods."
            );
          r.push(t);
        }),
        (S.prototype.getModules = function () {
          return r;
        }),
        (S.prototype.getConfig = function () {
          return s;
        }),
        (S.prototype.getRouter = function () {
          return n;
        }),
        (S.prototype.getPusher = function () {
          return n._pusher;
        }),
        (S.prototype.getMatcher = function () {
          return n._matcher;
        }),
        (S.prototype.getRoute = function () {
          return u;
        }),
        (S.prototype.getQuery = function () {
          return c;
        }),
        S
      );
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Handles basic get routing
     *
     * @Router
     * @author: kitajchuk
     *
     */
    t.exports = (function () {
      var t,
        e = i(65),
        n = i(66),
        s = i(67),
        r = function () {
          return this.init.apply(this, arguments);
        };
      return (
        (r.prototype = {
          constructor: r,
          _rHTTPs: /^http[s]?:\/\/.*?\//,
          _rFiles:
            /\.(jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3)$/gi,
          _rDomain: new RegExp(document.domain),
          _isRouting: !1,
          init: function (t) {
            for (var i in ((this._options = {
              async: !0,
              proxy: !1,
              caching: !0,
              handle404: !0,
              handle500: !0,
              pushStateOptions: {},
            }),
            (t = t || {})))
              this._options[i] = t[i];
            (this._matcher = new n()),
              (this._pusher = new e(this._options.pushStateOptions)),
              (this._callbacks = {}),
              (this._responses = {}),
              (this._uid = 0),
              (this._ready = !1);
          },
          bind: function () {
            var t = this,
              e = window.location.href.replace(window.location.hash, "");
            document.addEventListener(
              "click",
              function (e) {
                t._handleClick(this, e);
              },
              !1
            ),
              this._pusher.on("popstate", function (e, i) {
                t._handlePopstate(e, i);
              }),
              this._options.async && this._options.handle404
                ? this._route(e, function (e, i) {
                    t._ready = !0;
                  })
                : setTimeout(function () {
                    var i = {
                      status: 200,
                      responseText: new XMLSerializer().serializeToString(
                        document
                      ),
                    };
                    t._fire("get", e, i, i.status),
                      t._cache(e, i),
                      (t._ready = !0);
                  }, 200);
          },
          on: function (t, e) {
            this._bind(t, e);
          },
          off: function (t, e) {
            this._unbind(t, e);
          },
          trigger: function (e) {
            t || (t = document.createElement("a")),
              (t.href = e),
              this._handleClick(t, { target: t });
          },
          get: function (t, e) {
            this._matcher.config([t]),
              e._routerRoutes
                ? e._routerRoutes.push(t)
                : (e._routerRoutes = [t]),
              1 === e._routerRoutes.length && this._bind("get", e);
          },
          getRouteForUrl: function (t) {
            return this._matcher._cleanRoute(t);
          },
          getRouteDataForUrl: function (t) {
            return this._matcher.parse(t, this._matcher.getRoutes()).params;
          },
          getUID: function () {
            return (this._uid = this._uid + 1), this._uid;
          },
          _preventDefault: function (t) {
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
          },
          _handleClick: function (t, e) {
            var i = s(t, "a", !0) || s(e.target, "a", !0),
              n = i && this._matcher.test(i.href),
              r = i && this._rDomain.test(i.href),
              a = i && this._options.proxy && this._options.proxy.domain,
              o = i && -1 !== i.href.indexOf("#"),
              l = i && -1 !== i.className.indexOf("js-router--ignore"),
              u = i && e.metaKey,
              h = i && "_blank" === i.target,
              c = i && r && i.href.match(this._rFiles);
            ((n && r) || a) &&
              (o ||
                l ||
                u ||
                h ||
                c ||
                (this._preventDefault(e),
                this._isRouting || this._route(i.href)));
          },
          _handlePopstate: function (t, e) {
            if (this._ready) {
              for (var i = this._callbacks.get.length; i--; ) {
                var n = this._matcher.parse(
                  t,
                  this._callbacks.get[i]._routerRoutes
                );
                if (n.matched) break;
              }
              (data = {
                route: this._matcher._cleanRoute(t),
                response: this._responses[t],
                request: n,
                status: this._responses[t].status,
              }),
                this._fire("popget", t, data);
            } else this._ready = !0;
          },
          _route: function (t, e) {
            var i = this,
              n = { request: t, original: t };
            (this._isRouting = !0),
              this._matchUrl(n.original),
              this._options.proxy &&
                this._options.proxy.domain &&
                (n.request =
                  this._options.proxy.domain +
                  "/" +
                  n.request.replace(this._rHTTPs, "")),
              this._getUrl(n, function (t, s) {
                (i._isRouting = !1),
                  i._pusher.push(n.original),
                  i._fire("get", n.original, t, s),
                  "function" == typeof e && e(t, s);
              });
          },
          _matchUrl: function (t) {
            if (this._ready)
              for (var e = this._callbacks.get.length; e--; ) {
                var i = this._matcher.parse(
                  t,
                  this._callbacks.get[e]._routerRoutes
                );
                if (i.matched) {
                  this._fire("preget", t, i);
                  break;
                }
              }
          },
          _getUrl: function (t, e) {
            var i = function (i, n) {
                try {
                  s._cache(t.original, i), "function" == typeof e && e(i, n);
                } catch (t) {}
              },
              n = null,
              s = this;
            this._responses[t.original]
              ? i(
                  this._responses[t.original],
                  this._responses[t.original].status
                )
              : this._options.async
              ? ((n = new XMLHttpRequest()).open("GET", t.request, !0),
                (n.onreadystatechange = function (t) {
                  4 === this.readyState &&
                    (200 === this.status
                      ? i(this, 200)
                      : 404 === this.status && s._options.handle404
                      ? i(this, 404)
                      : 500 === this.status &&
                        s._options.handle500 &&
                        i(this, 500));
                }),
                n.send())
              : i({ responseText: "" }, 200);
          },
          _cache: function (t, e) {
            this._options.caching &&
              !this._responses[t] &&
              (this._responses[t] = e);
          },
          _bind: function (t, e) {
            "function" == typeof e &&
              (this._callbacks[t] || (this._callbacks[t] = []),
              (e._jsRouterID = this.getUID()),
              this._callbacks[t].push(e));
          },
          _unbind: function (t, e) {
            if (!this._callbacks[t]) return this;
            if (e) {
              for (var i = 0, n = this._callbacks[t].length; i < n; i++)
                if (e._jsRouterID === this._callbacks[t][i]._jsRouterID) {
                  this._callbacks[t].splice(i, 1);
                  break;
                }
            } else {
              for (var s = this._callbacks[t].length; s--; )
                this._callbacks[t][s] = null;
              delete this._callbacks[t];
            }
          },
          _fire: function (t, e, i, n) {
            var s;
            if ("get" === t)
              for (s = this._callbacks[t].length; s--; ) {
                var r = this._matcher.parse(
                  e,
                  this._callbacks[t][s]._routerRoutes
                );
                r.matched &&
                  this._callbacks[t][s].call(this, {
                    route: this._matcher._cleanRoute(e),
                    response: i,
                    request: r,
                    status: n,
                  });
              }
            else if (this._callbacks[t])
              for (s = this._callbacks[t].length; s--; )
                this._callbacks[t][s].call(this, i);
          },
        }),
        r
      );
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Handles history pushstate/popstate with async option
     * If history is not supported, falls back to hashbang!
     *
     * @PushState
     * @author: kitajchuk
     *
     */
    t.exports = (function () {
      var t = function () {
        return this.init.apply(this, arguments);
      };
      return (
        (t.prototype = {
          constructor: t,
          _pushable: "history" in window && "pushState" in window.history,
          _hashable: "onhashchange" in window,
          init: function (t) {
            (this._initUrl = window.location.href.replace(
              window.location.hash,
              ""
            )),
              (this._options = t || {}),
              (this._enabled = !1),
              (this._ishashpushed = !1),
              (this._uid = 0),
              (this._states = {}),
              (this._callbacks = {}),
              (this._states[this._initUrl] = { uid: this.getUID() }),
              this._stateEnable();
          },
          on: function (t, e) {
            "function" == typeof e &&
              (this._callbacks[t] || (this._callbacks[t] = []),
              (e._pushstateID = this.getUID()),
              (e._pushstateType = t),
              this._callbacks[t].push(e));
          },
          off: function (t, e) {
            if (this._callbacks[t])
              for (var i = this._callbacks[t].length; i--; )
                if (this._callbacks[t][i]._pushstateID === e._pushstateID) {
                  this._callbacks[t].splice(i, 1);
                  break;
                }
          },
          push: function (t) {
            t !== window.location.href &&
              (this._push(t), (this._states[t] = { uid: this.getUID() }));
          },
          goBack: function () {
            window.history.back(), this._fire("backstate");
          },
          goForward: function () {
            window.history.forward(), this._fire("forwardstate");
          },
          getUID: function () {
            return (this._uid = this._uid + 1), this._uid;
          },
          _push: function (t) {
            if (this._pushable && !this._options.forceHash)
              window.history.pushState(this._states[t], "", t);
            else {
              var e = t.replace(window.location.origin, "");
              e === window.location.pathname && (e = "/"),
                (this._ishashpushed = !0),
                (window.location.hash = e);
            }
          },
          _fire: function (t, e) {
            if (this._callbacks[t])
              for (var i = this._callbacks[t].length; i--; )
                this._callbacks[t][i].apply(this, [].slice.call(arguments, 1));
          },
          _stateEnable: function () {
            if (this._enabled) return this;
            var t = this,
              e = function () {
                var e = window.location.href;
                t._options.forceHash &&
                  ((e = (e = e.replace(window.location.hash, "")).replace(
                    window.location.pathname,
                    ""
                  )),
                  -1 !== ["#/", "#", ""].indexOf(window.location.hash)
                    ? (e += window.location.pathname)
                    : (e += window.location.hash.replace("#", ""))),
                  t._fire("popstate", e, t._states[e]);
              };
            (this._enabled = !0),
              this._pushable && !this._options.forceHash
                ? window.addEventListener(
                    "popstate",
                    function (t) {
                      e();
                    },
                    !1
                  )
                : this._hashable &&
                  (this._push(this._initUrl),
                  window.addEventListener(
                    "hashchange",
                    function (i) {
                      t._ishashpushed ? (t._ishashpushed = !1) : e();
                    },
                    !1
                  ));
          },
        }),
        t
      );
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Handles wildcard route matching against urls with !num and !slug condition testing
     *
     * @MatchRoute
     * @author: kitajchuk
     *
     */
    t.exports = (function () {
      var t = i(13),
        e = function () {
          return this.init.apply(this, arguments);
        };
      return (
        (e.prototype = {
          constructor: e,
          _rHTTPs: /^http[s]?:\/\/.*?\//,
          _rTrails: /^\/|\/$/g,
          _rHashQuery: /#.*$|\?.*$/g,
          _rWild: /^:/,
          _wilders: { num: /^[0-9]+$/, slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/ },
          init: function (t) {
            this._routes = t ? this._cleanRoutes(t) : [];
          },
          getRoutes: function () {
            return this._routes;
          },
          config: function (t) {
            return (
              (t = "string" == typeof t ? [t] : t),
              (this._routes = this._routes.concat(this._cleanRoutes(t))),
              this
            );
          },
          test: function (t) {
            return this.parse(t, this._routes).matched;
          },
          params: function (t) {
            return this.parse(t, this._routes).params;
          },
          compare: function (t, e) {
            return this.parse(e, [t]);
          },
          parse: function (e, i) {
            for (
              var n,
                s,
                r,
                a,
                o,
                l,
                u,
                h,
                c = this._cleanRoute(e),
                f = c.split("/"),
                d = f.length,
                p = i.length,
                _ = 0;
              _ < p;
              _++
            ) {
              if (
                ((s = "*" === i[_]),
                (h = {
                  matched: !1,
                  route: null,
                  uri: [],
                  params: {},
                  query: t(e),
                }),
                (o = i[_].split("/")),
                "/" === c && "/" === i[_])
              ) {
                (h.matched = !0), (h.route = i[_]), (h.uri = "/");
                break;
              }
              if (o.length === f.length || s) {
                n = 0;
                for (var m = 0; m < d; m++)
                  this._rWild.test(o[m])
                    ? ((a = (r = o[m].split("!"))[0]),
                      (u = r[1])
                        ? (this._wilders[u] && (l = this._wilders[u]),
                          l &&
                            l.test(f[m]) &&
                            (n++,
                            (h.params[a.replace(this._rWild, "")] = f[m]),
                            h.uri.push(f[m])))
                        : (n++,
                          (h.params[a.replace(this._rWild, "")] = f[m]),
                          h.uri.push(f[m])))
                    : f[m] === o[m] && (n++, h.uri.push(f[m]));
                if (n === f.length || s) {
                  (h.matched = !0),
                    (h.route = i[_]),
                    (h.uri = s ? c : h.uri.join("/"));
                  break;
                }
              }
            }
            return h;
          },
          _cleanRoute: function (t) {
            return (
              "/" !== t &&
                (t = (t = (t = (t = t.replace(this._rHTTPs, "")).replace(
                  this._rTrails,
                  ""
                )).replace(this._rHashQuery, "")).replace(this._rTrails, "")),
              "" === t && (t = "/"),
              t
            );
          },
          _cleanRoutes: function (t) {
            for (var e = t.length; e--; ) t[e] = this._cleanRoute(t[e]);
            return t;
          },
        }),
        e
      );
    })();
  },
  function (t, e, i) {
    /*!
     *
     * Use native element selector matching
     *
     * @matchElement
     * @author: kitajchuk
     *
     */
    t.exports = (function () {
      var t = function (e, i, n) {
        var s = e.matches
          ? "matches"
          : e.webkitMatchesSelector
          ? "webkitMatchesSelector"
          : e.mozMatchesSelector
          ? "mozMatchesSelector"
          : e.msMatchesSelector
          ? "msMatchesSelector"
          : e.oMatchesSelector
          ? "oMatchesSelector"
          : null;
        return s && e[s].call(e, i)
          ? e
          : n && e !== document.documentElement && e.parentNode
          ? t(e.parentNode, i, n)
          : null;
      };
      return t;
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
      };
    })();
    var s = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.elements = e),
          (this.component = i),
          (this.instances = []),
          this.init();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.elements.forEach(function (e, i) {
                var n = t.elements.eq(i),
                  s = n.data();
                t.instances.push(new t.component(n, s, i));
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.instances.forEach(function (t) {
                t.destroy(), (t = null);
              });
            },
          },
        ]),
        t
      );
    })();
    e.default = s;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      s = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      r = u(i(4)),
      a = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      o = u(i(70)),
      l = u(i(21));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var h = (function () {
      function t(e) {
        var i = this;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.script = this.element.find("script").detach()),
          (this.blockJson = JSON.parse(this.script[0].textContent)),
          (this.pageId = "5cafe53bb208fcfd8dc661dd"),
          (this.data = {}),
          (this.waiting = 300),
          (this.validators = {
            email:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }),
          this.load().then(function () {
            i.bind();
          });
      }
      return (
        s(t, [
          {
            key: "load",
            value: function () {
              var t = this;
              return new Promise(function (e) {
                (t.element[0].innerHTML = (0, o.default)(t)),
                  (t.field = t.element.find(".js-newsletter-field")),
                  (t.button = t.element.find(".js-newsletter-btn")),
                  e();
              });
            },
          },
          {
            key: "bind",
            value: function () {
              var t = this;
              this.button.on("click", function () {
                t.validators.email.test(t.field[0].value)
                  ? (t.gather(), t.send())
                  : (t.alert = new window.Y.Squarespace.Widgets.Alert({
                      "strings.title": "Deem Journal",
                      "strings.message":
                        "Please fill out a valid and complete Email Address.",
                    }));
              }),
                this.field.on(
                  "keyup",
                  (0, l.default)(function () {
                    t.field[0].value
                      ? t.validators.email.test(t.field[0].value)
                        ? (t.field.removeClass("is-invalid"),
                          t.element.addClass("is-valid"))
                        : (t.field.addClass("is-invalid"),
                          t.element.removeClass("is-valid"))
                      : (t.field.removeClass("is-invalid"),
                        t.element.removeClass("is-valid"));
                  }, this.waiting)
                );
            },
          },
          {
            key: "clear",
            value: function () {
              (this.data = {}),
                this.field.removeClass("is-error"),
                (this.field[0].value = "");
            },
          },
          {
            key: "reset",
            value: function () {
              this.element.removeClass("is-success is-sending");
            },
          },
          {
            key: "getKey",
            value: function () {
              return r.default.ajax({
                url: "/api/form/FormSubmissionKey",
                method: "POST",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                dataType: "json",
              });
            },
          },
          {
            key: "sendForm",
            value: function (t) {
              return r.default.ajax({
                url: "/api/form/SaveFormSubmission",
                method: "POST",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                dataType: "html",
                payload: {
                  collectionId: "",
                  contentSource: "c",
                  form: JSON.stringify(this.data),
                  formId: this.blockJson.formId,
                  key: t,
                  objectName: this.blockJson.objectName,
                  pageId: this.pageId,
                  pagePath: window.location.pathname,
                  pageTitle: document.title,
                },
              });
            },
          },
          {
            key: "gather",
            value: function () {
              (this.data = {}),
                (this.data[this.field[0].name] = this.field[0].value);
            },
          },
          {
            key: "handle",
            value: function (t) {
              this.element.removeClass("is-sending");
              try {
                t = JSON.parse(t);
              } catch (t) {
                a.log("warn", t);
              }
              if ("object" === (void 0 === t ? "undefined" : n(t)) && t.errors)
                for (var e in t.errors)
                  t.errors.hasOwnProperty(e) && this.field.addClass("is-error");
              else this.element.addClass("is-success");
            },
          },
          {
            key: "send",
            value: function () {
              var t = this;
              this.field.removeClass("is-error"),
                this.element.addClass("is-sending"),
                this.getKey()
                  .then(function (e) {
                    t.sendForm(e.key)
                      .then(function (e) {
                        t.handle(e);
                      })
                      .catch(function (e) {
                        t.handle(e);
                      });
                  })
                  .catch(function () {});
            },
          },
          { key: "destroy", value: function () {} },
        ]),
        t
      );
    })();
    e.default = h;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(4));
    e.default = function (t) {
      var e = t.blockJson,
        s = i(71),
        r = (0, n.default)(e.description.html),
        a = e.form.parsedFields.find(function (t) {
          return "email" === t.type;
        });
      return (
        '\n        <div class="newsletter__label">\n            <h5>' +
        e.title +
        '</h5>\n        </div>\n        <div class="newsletter__form -exp">\n            <div class="newsletter__entry">\n                <input type="email" class="newsletter__input inp js-newsletter-field" name="' +
        a.id +
        '" placeholder="' +
        r[0].innerText +
        '" />\n                <button class="newsletter__btn js-newsletter-btn btn">\n                    ' +
        s +
        '\n                </button>\n            </div>\n            <div class="newsletter__loading">\n                <div class="lds-ellipsis"><div></div></div>\n            </div>\n            <div class="newsletter__success">\n                <p>' +
        e.form.parsedSubmissionMessage.html +
        "</p>\n            </div>\n        </div>\n    "
      );
    };
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--right" x="0px" y="0px" viewBox="0 0 28 23" style="enable-background:new 0 0 28 23;"><path d="M27.5,10.4C27.5,10.4,27.5,10.4,27.5,10.4l-9.9-9.9c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l7.4,7.4H1.5C0.7,10,0,10.7,0,11.5S0.7,13,1.5,13h21.4l-7.4,7.4c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0l9.9-9.9c0,0,0-0.1,0.1-0.1c0.3-0.3,0.4-0.6,0.4-1C28,11.1,27.8,10.7,27.5,10.4z"></path></svg>';
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        return '\n        <div class="search__form">\n            <div class="search__entry">\n                <input type="text" class="search__input inp js-search-field" name="q" placeholder="Start typing to search" />\n                <button class="search__btn js-search-btn btn">Clear</button>\n            </div>\n        </div>\n    ';
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        return (
          '<div class="tags js-tags"><div class="tags__label h6">Browse by tag:</div>' +
          t.collection.tags
            .map(function (t) {
              return (
                '<div class="tags__tag h6"><span class="js-tag" data-tag="' +
                t +
                '">' +
                t +
                "</span></div>"
              );
            })
            .join("") +
          "</div>"
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = a(i(75)),
      r = a(i(77));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var o = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          "vimeo" === i.blockJson.resolvedBy
            ? (this.instance = new s.default(e, i))
            : "youtube" === i.blockJson.resolvedBy &&
              (this.instance = new r.default(e, i));
      }
      return (
        n(t, [
          {
            key: "destroy",
            value: function () {
              this.instance.destroy();
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(76));
    var a = {};
    window.addEventListener(
      "message",
      function (t) {
        try {
          if ("string" == typeof t.data) {
            var e = JSON.parse(t.data),
              i = a[e.player_id];
            i &&
              (function (t, e) {
                var i = t.player_id && t.player_id === e.id;
                "ready" === t.event && i
                  ? (e.postEmbed("addEventListener", "play"),
                    e.postEmbed("addEventListener", "pause"),
                    e.postEmbed("addEventListener", "finish"))
                  : "play" === t.event && i
                  ? ((e.isPlaying = !0), e.element.addClass("is-embed-playing"))
                  : "pause" === t.event && i
                  ? ((e.isPlaying = !1), t.data && e.setMetadata(t.data))
                  : "finish" === t.event &&
                    i &&
                    ((e.isPlaying = !1),
                    e.element.removeClass("is-embed-playing"));
              })(e, i);
          }
        } catch (t) {
          console.log("window.onmessage:error", t);
        }
      },
      !1
    );
    var o = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.content = this.element.find(".sqs-block-content")),
          (this.data = i),
          (this.isPlaying = !1),
          this.bind(),
          this.load(),
          this.push();
      }
      return (
        n(t, [
          {
            key: "push",
            value: function () {
              a[this.id] || (a[this.id] = this);
            },
          },
          {
            key: "load",
            value: function () {
              (this.image = this.element.find("img")),
                (this.data.imageJson = this.image.data()),
                (this.content[0].innerHTML = (0, r.default)(
                  this.data.blockJson,
                  this.data.imageJson
                )),
                (this.iframe = this.element.find(".js-embed-iframe")),
                (this.metadata = this.element.find(".js-embed-metadata")),
                (this.id = this.iframe[0].id),
                (this.iframe[0].src = this.iframe.data().src),
                s.util.loadImages(
                  this.element.find(s.config.lazyImageSelector),
                  s.util.noop
                );
            },
          },
          {
            key: "bind",
            value: function () {
              var t = this;
              this.element.on("click", ".js-embed-playbtn", function () {
                t.isPlaying || t.play();
              }),
                this.element
                  .on("mouseenter", ".js-embed-playbtn", function () {
                    t.element.addClass("is-play-button");
                  })
                  .on("mouseleave", ".js-embed-playbtn", function () {
                    t.element.removeClass("is-play-button");
                  });
            },
          },
          {
            key: "setMetadata",
            value: function (t) {
              var e = s.util.formatTime(1e3 * t.duration);
              this.metadata[0].innerHTML = e;
            },
          },
          {
            key: "postEmbed",
            value: function (t, e) {
              var i = { method: t };
              e && (i.value = e);
              var n = JSON.stringify(i);
              this.iframe[0].contentWindow.postMessage(n, "*");
            },
          },
          {
            key: "play",
            value: function () {
              this.postEmbed("play", "true"),
                (this.isPlaying = !0),
                this.element.addClass("is-embed-playing");
            },
          },
          {
            key: "destroy",
            value: function () {
              a = {};
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e) {
        var n = t.url
            .replace(/\?.*?$/, "")
            .split("/")
            .pop(),
          s =
            "https://player.vimeo.com/video/" +
            n +
            ("?&wmode=opaque&api=1&loop=0&autoplay=1&player_id=" + n),
          r = t.width && t.height ? t.width : 16,
          a = t.height && t.width ? t.height : 9,
          o = (a / r) * 100,
          l = r + "x" + a,
          u = i(15);
        return (
          '\n        <div class="embed js-embed">\n            <div class="embed__aspect" style="padding-bottom:' +
          o +
          '%;">\n                <iframe id="' +
          n +
          '" class="embed__element js-embed-iframe js-media-node" data-src="' +
          s +
          '" data-original="' +
          l +
          '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n                ' +
          (t.customThumb
            ? '\n                    <div class="embed__poster embed__overlay js-embed-poster js-lazy-image -cover -text--center" data-img-src="' +
              e.src +
              '?format=original">\n                        <div class="embed__playbtn js-embed-playbtn">\n                            ' +
              u +
              '\n                        </div>\n                        <div class="embed__metadata js-embed-metadata h6"></div>\n                    </div>\n                '
            : "") +
          "\n            </div>\n            " +
          (t.description && "caption-hidden" !== t.layout
            ? '\n                <div class="_cap">\n                    <div class="m">' +
              t.description.html +
              "</div>\n                </div>\n            "
            : "") +
          "\n        </div>\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = u(i(78)),
      r = u(i(13)),
      a = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      o = u(i(79)),
      l = u(i(6));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var h = !1,
      c = (function () {
        function t(e, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.element = e),
            (this.content = this.element.find(".sqs-block-content")),
            (this.data = i),
            (this.isPlaying = !1),
            (this.params = (0, r.default)(this.data.blockJson.url)),
            (this.id = this.params.v),
            (this.buffer = new l.default()),
            this.load(),
            this.bind();
        }
        return (
          n(t, [
            {
              key: "load",
              value: function () {
                (this.image = this.element.find("img")),
                  (this.data.imageJson = this.image.data()),
                  (this.content[0].innerHTML = (0, o.default)(
                    this.data.blockJson,
                    this.data.imageJson
                  )),
                  (this.iframe = this.element.find(".js-embed-iframe")),
                  this.youtubeLoad(),
                  a.util.loadImages(
                    this.element.find(a.config.lazyImageSelector),
                    a.util.noop
                  );
              },
            },
            {
              key: "bind",
              value: function () {
                var t = this;
                this.element.on("click", ".js-embed-playbtn", function () {
                  t.isPlaying || t.play();
                });
              },
            },
            {
              key: "play",
              value: function () {
                var t = this;
                this.buffer.go(function () {
                  t.youtubePlayer &&
                    t.youtubePlayer.playVideo &&
                    (t.buffer.stop(), t.youtubePlayer.playVideo());
                });
              },
            },
            {
              key: "pause",
              value: function () {
                this.youtubePlayer.pauseVideo();
              },
            },
            {
              key: "bufferOnReady",
              value: function () {
                var t = this;
                this.buffer.go(function () {
                  window.YT && !h && (t.buffer.stop(), t.youtubeOnReady());
                });
              },
            },
            {
              key: "youtubeOnReady",
              value: function () {
                var t = this,
                  e = {
                    disablekb: 1,
                    controls: 1,
                    iv_load_policy: 3,
                    loop: 0,
                    modestbranding: 1,
                    playsinline: 0,
                    rel: 0,
                    showinfo: 0,
                    wmode: "opaque",
                    autoplay: 0,
                  };
                this.data.minimal && ((e.playsinline = 1), (e.controls = 0)),
                  (this.youtubePlayer = new window.YT.Player(this.iframe[0], {
                    height: this.data.blockJson.height || 9,
                    width: this.data.blockJson.width || 16,
                    videoId: this.id,
                    playerVars: e,
                    events: {
                      onReady: function () {},
                      onStateChange: function (e) {
                        e.data === window.YT.PlayerState.PLAYING
                          ? ((t.isPlaying = !0),
                            t.element.addClass("is-embed-playing"))
                          : e.data === window.YT.PlayerState.PAUSED
                          ? (t.isPlaying = !1)
                          : e.data === window.YT.PlayerState.ENDED &&
                            ((t.isPlaying = !1),
                            t.element.removeClass("is-embed-playing"));
                      },
                    },
                  }));
              },
            },
            {
              key: "youtubeLoad",
              value: function () {
                var t = this;
                window.YT || h
                  ? h
                    ? this.bufferOnReady()
                    : this.youtubeOnReady()
                  : ((h = !0),
                    (window.onYouTubeIframeAPIReady = function () {
                      (h = !1),
                        delete window.onYouTubeIframeAPIReady,
                        t.youtubeOnReady();
                    }),
                    (0, s.default)("https://www.youtube.com/iframe_api"));
              },
            },
            {
              key: "destroy",
              value: function () {
                this.buffer.stop();
              },
            },
          ]),
          t
        );
      })();
    e.default = c;
  },
  function (t, e, i) {
    (function (e) {
      /*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
      !(function (e) {
        t.exports = function (t, i) {
          "use strict";
          var n = e.document.getElementsByTagName("script")[0],
            s = e.document.createElement("script");
          return (
            (s.src = t),
            (s.async = !0),
            n.parentNode.insertBefore(s, n),
            i && "function" == typeof i && (s.onload = i),
            s
          );
        };
      })(void 0 !== e ? e : this);
    }).call(this, i(9));
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(13));
    e.default = function (t, e) {
      var s = (0, n.default)(t.url).v,
        r = ((t.height || 9) / (t.width || 16)) * 100,
        a = i(15);
      return (
        '\n        <div class="embed js-embed">\n            <div class="embed__aspect" style="padding-bottom:' +
        r +
        '%;">\n                <div id="' +
        s +
        '" class="embed__element js-embed-iframe"></div>\n                ' +
        (t.customThumb
          ? '\n                    <div class="embed__poster embed__overlay js-embed-poster js-lazy-image -cover -text--center" data-img-src="' +
            e.src +
            '?format=original">\n                        <div class="embed__playbtn js-embed-playbtn">\n                            ' +
            a +
            "\n                        </div>\n                    </div>\n                "
          : "") +
        "\n            </div>\n            " +
        (t.description && "caption-hidden" !== t.layout
          ? '\n                <div class="_cap">\n                    <div class="m">' +
            t.description.html +
            "</div>\n                </div>\n            "
          : "") +
        "\n        </div>\n    "
      );
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(81));
    var r = (function () {
      function t(e, i, n) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.annotation = e),
          (this.parent = this.annotation.closest(".sqs-row")),
          (this.text = this.parent.find(
            ".col:nth-child(2) .sqs-block-content"
          )),
          (this.media = this.parent.find(".js-media")),
          (this.prevSpace = this.parent.prev(".sqs-block-spacer")),
          (this.nextSpace = this.parent.next(".sqs-block-spacer")),
          (this.prevText = this.prevSpace.prev(".sqs-block-html")),
          (this.nextText = this.nextSpace.next(".sqs-block-html")),
          (this.data = i),
          (this.i = n),
          this.init();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              (this.parent[0].innerHTML = (0, s.default)(this)),
                this.prevText.length &&
                  !this.media.length &&
                  this.prevSpace.addClass("spacer-text"),
                this.nextText.length &&
                  !this.media.length &&
                  this.nextSpace.addClass("spacer-text");
            },
          },
          { key: "destroy", value: function () {} },
        ]),
        t
      );
    })();
    e.default = r;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        return (
          '\n        <div class="annotation annotation--' +
          (t.media.length ? "media" : "text") +
          " annotation--" +
          t.i +
          '">\n            <div class="annotation__wrap">\n                <div class="annotation__note">\n                    ' +
          t.annotation[0].outerHTML +
          "\n                </div>\n                " +
          (t.media.length
            ? '\n                    <div class="annotation__media">\n                        ' +
              t.media[0].outerHTML +
              "\n                    </div>\n                "
            : '\n                    <div class="annotation__text">\n                        ' +
              t.text[0].innerHTML +
              "\n                    </div>\n                ") +
          "\n            </div>\n        </div>\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(83));
    var a = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.script = this.element.find("script").detach()),
          (this.parsed = JSON.parse(this.script[0].textContent)),
          (this.dropout = s.dom.body.find(".js-summary-v2")),
          (this.data = { blockJson: this.parsed }),
          (this.isPlaying = !1),
          this.init(),
          this.bind();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              (this.element[0].innerHTML = (0, r.default)(this)),
                (this.global = this.element.find(".js-audio-global")),
                (this.audioStatus = this.element.find(".js-audio-status")),
                (this.audioState = this.element.find(".js-audio-state")),
                (this.audioPlayback = this.element.find(".js-audio-pp")),
                (this.audioSkipBackward = this.element.find(
                  ".js-audio-skipbackward"
                )),
                (this.audioSkipForward = this.element.find(
                  ".js-audio-skipforward"
                )),
                (this.audioNode = this.element.find(".js-audio-node")),
                (this.audioNode[0].src = this.data.blockJson.audioAssetUrl),
                this.audioStatus.forEach(function (e, i) {
                  t.audioStatus[i].innerHTML = s.util.formatTime(
                    t.data.blockJson.audioAssetDuration
                  );
                });
            },
          },
          {
            key: "doScroll",
            value: function () {
              if (
                (this.element[0].getBoundingClientRect().bottom < 0
                  ? this.element.addClass("is-audio-offscreen")
                  : this.element.removeClass("is-audio-offscreen"),
                this.dropout.length)
              ) {
                var t = this.dropout[0].getBoundingClientRect(),
                  e = this.global[0].getBoundingClientRect();
                t.y < e.y
                  ? this.element.addClass("is-audio-collider")
                  : this.element.removeClass("is-audio-collider");
              }
            },
          },
          {
            key: "bind",
            value: function () {
              var t = this;
              (this.__appScroll = this.doScroll.bind(this)),
                s.emitter.on("app--scroll", this.__appScroll),
                this.audioPlayback.on("click", function () {
                  t.togglePP();
                }),
                this.audioNode.on("ended", function () {
                  t.pause(),
                    (t.audioNode[0].currentTime = 0),
                    t.audioStatus.forEach(function (e, i) {
                      t.audioStatus[i].innerHTML = s.util.formatTime(
                        t.data.blockJson.audioAssetDuration
                      );
                    });
                }),
                this.audioNode.on("timeupdate", function () {
                  t.audioStatus.forEach(function (e, i) {
                    t.audioStatus[i].innerHTML = s.util.formatTime(
                      1e3 * t.audioNode[0].currentTime
                    );
                  });
                }),
                this.audioSkipForward.on("click", function () {
                  t.audioNode[0].pause(),
                    (t.audioNode[0].currentTime =
                      t.audioNode[0].currentTime + 15),
                    t.audioNode[0].play();
                }),
                this.audioSkipBackward.on("click", function () {
                  t.audioNode[0].pause(),
                    (t.audioNode[0].currentTime =
                      t.audioNode[0].currentTime - 15 || 0),
                    t.audioNode[0].play();
                });
            },
          },
          {
            key: "play",
            value: function () {
              var t = this;
              (this.isPlaying = !0),
                this.element.addClass("is-audio-playing has-audio-played"),
                this.audioNode[0].play(),
                this.audioState.forEach(function (e, i) {
                  t.audioState[i].style.width =
                    e.getBoundingClientRect().width + "px";
                });
            },
          },
          {
            key: "pause",
            value: function () {
              var t = this;
              (this.isPlaying = !1),
                this.element.removeClass("is-audio-playing"),
                this.audioNode[0].pause(),
                this.audioState.forEach(function (e, i) {
                  t.audioState[i].style.width =
                    e.getBoundingClientRect().width + "px";
                });
            },
          },
          {
            key: "togglePP",
            value: function () {
              this.isPlaying ? this.pause() : this.play();
            },
          },
          {
            key: "destroy",
            value: function () {
              s.emitter.off("app--scroll", this.__appScroll);
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        var t = i(15),
          e = i(84);
        return (
          '\n        <div class="_audio__station">\n            <div class="_audio__controls _audio__controls--onboard js-audio-pp">\n                <div class="_audio__pp">\n                    ' +
          t +
          "\n                    " +
          e +
          '\n                </div>\n                <div class="_audio__state js-audio-state h6">\n                    <span>Listen</span>\n                    <span>Playing</span>\n                </div>\n            </div>\n            <div class="_audio__ellapsed h6">\n                <span class="js-audio-status">0:00</span>\n            </div>\n        </div>\n        <div class="_audio__global js-audio-global">\n            <div class="_audio__controls _audio__controls--utility">\n                <div class="_audio__skip js-audio-skipbackward">\n                    ' +
          i(85) +
          '\n                </div>\n                <div class="_audio__pp js-audio-pp">\n                    ' +
          t +
          "\n                    " +
          e +
          '\n                </div>\n                <div class="_audio__skip js-audio-skipforward">\n                    ' +
          i(86) +
          '\n                </div>\n            </div>\n            <div class="_audio__controls _audio__controls--onboard js-audio-pp">\n                <div class="_audio__pp">\n                    ' +
          t +
          "\n                    " +
          e +
          '\n                </div>\n                <div class="_audio__state js-audio-state h6">\n                    <span>Listen</span>\n                    <span>Playing</span>\n                </div>\n            </div>\n            <div class="_audio__ellapsed h6">\n                <span class="js-audio-status">0:00</span>\n            </div>\n        </div>\n        <audio class="_audio__node js-audio-node"></audio>\n    '
        );
      });
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--pause" x="0px" y="0px" viewBox="0 0 22 30" style="enable-background:new 0 0 22 30;"><path d="M5.6,0H2C0.9,0,0,0.9,0,2v25.1c0,1.1,0.9,2,2,2h3.6c1.1,0,2-0.9,2-2V2C7.6,0.9,6.7,0,5.6,0z"></path><path d="M19.5,0h-3.6c-1.1,0-2,0.9-2,2v25.1c0,1.1,0.9,2,2,2h3.6c1.1,0,2-0.9,2-2V2C21.5,0.9,20.6,0,19.5,0z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--skipbackward" x="0px" y="0px" viewBox="0 0 28 33" style="enable-background:new 0 0 28 33;"><path d="M14,4.3h-1.2l2.1-2.2c0.4-0.5,0.4-1.2,0-1.7c-0.5-0.6-1.3-0.6-1.8-0.2L8.8,4.6c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.8,0.4,1l4.2,4.3c0,0,0,0,0.1,0.1c0.5,0.5,1.4,0.5,1.9-0.1c0.5-0.5,0.5-1.4-0.1-1.9L12.9,7H14c6.3,0,11.4,5.1,11.4,11.5c0,6.3-5.1,11.5-11.4,11.5S2.6,24.7,2.6,18.4c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3c0,7.8,6.3,14.1,14,14.1c7.7,0,14-6.3,14-14.1S21.7,4.3,14,4.3z"></path></svg>';
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--skipforward" x="0px" y="0px" viewBox="0 0 28 33" style="enable-background:new 0 0 28 33;"><path d="M26.7,17.1c-0.7,0-1.3,0.6-1.3,1.3c0,6.3-5.1,11.5-11.4,11.5c-6.3,0-11.4-5.1-11.4-11.5C2.6,12.1,7.7,7,14,7h1.1L13.1,9c-0.5,0.5-0.6,1.3-0.1,1.9c0.5,0.5,1.3,0.6,1.9,0.1c0,0,0,0,0.1-0.1l4.2-4.3c0.3-0.3,0.4-0.6,0.4-1c0-0.4-0.1-0.8-0.4-1l-4.2-4.3c-0.6-0.5-1.4-0.4-1.8,0.2c-0.4,0.5-0.4,1.2,0,1.7l2.1,2.2H14c-7.7,0-14,6.3-14,14.1s6.3,14.1,14,14.1c7.7,0,14-6.3,14-14.1C28,17.7,27.4,17.1,26.7,17.1z"></path></svg>';
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = u(i(4)),
      a = u(i(23)),
      o = u(i(88)),
      l = u(i(14));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var h = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.coverRow = this.element.find(
            ".sqs-layout > .sqs-row > .col > .sqs-row:first-child"
          )),
          (this.bolders = this.element.find(
            ".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > p"
          )),
          (this.numerics = this.element.find(
            ".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > p > em"
          )),
          (this.listings = this.element.find(
            ".sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > ul, .sqs-layout > .sqs-row > .col .sqs-block-html .sqs-block-content > ol"
          )),
          (this.summary = this.element.find(".js-summary-v2")),
          (this.capillary = this.element.find(
            ".sqs-layout > .sqs-row > .col .sqs-block-gallery + .sqs-block-html > .sqs-block-content > blockquote:first-child "
          )),
          (this.tagcloud = this.element.find(".js-tagcloud")),
          (this.data = i),
          this.init();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              this.coverRow.length && this.initCover(),
                this.bolders.length && this.initBolders(),
                this.numerics.length && this.initNumerics(),
                this.listings.length && this.initListings(),
                this.capillary.length && this.initCapillaries(),
                this.summary.length &&
                  this.summary
                    .find(".js-summary-v2-item--" + this.data.itemId)
                    .remove(),
                this.tagcloud.length && this.initTagcloud();
            },
          },
          {
            key: "initCover",
            value: function () {
              this.coverRow
                .find(".col > .sqs-block-html")
                .parent()
                .addClass("text-col"),
                this.coverRow
                  .find(".col > .sqs-block-image")
                  .parent()
                  .addClass("image-col");
            },
          },
          {
            key: "initBolders",
            value: function () {
              var t = this;
              this.bolders.forEach(function (e, i) {
                var n = t.bolders.eq(i),
                  s = n.find("strong");
                !n.find("em").length && s.length && n.addClass("p--boldline");
              });
            },
          },
          {
            key: "initNumerics",
            value: function () {
              var t = this;
              this.numerics.forEach(function (e, i) {
                var n = t.numerics.eq(i),
                  s = parseInt(e.innerText, 10);
                Number.isInteger(s) && n.addClass("ss");
              });
            },
          },
          {
            key: "initListings",
            value: function () {
              var t = this;
              this.listings.forEach(function (e, i) {
                var n = t.listings.eq(i).prev("p");
                n.length && n.addClass("p--listings");
              });
            },
          },
          {
            key: "initCapillaries",
            value: function () {
              var t = this;
              this.capillary.forEach(function (e, i) {
                t.capillary
                  .eq(i)
                  .closest(".sqs-block-html")
                  .prev(".sqs-block-gallery")
                  .addClass("is-capillary")
                  .find(".sqs-block-content")
                  .append(e);
              });
            },
          },
          {
            key: "initTagcloud",
            value: function () {
              var t = this;
              (this.tagcloudQuery = this.tagcloud.next(".js-tagcloud-query")),
                (this.tagcloudLabel =
                  this.tagcloudQuery.find(".js-tagcloud-field")),
                (this.tagcloudLoader = this.tagcloudQuery.find(
                  ".js-tagcloud-loader"
                )),
                (this.tagcloudDisplay = this.tagcloudQuery.find(
                  ".js-tagcloud-display"
                )),
                (this.tagcloudClose =
                  this.tagcloudQuery.find(".js-tagcloud-close")),
                (this.tags = this.data.tags.split(",")),
                (this.tagcloud[0].innerHTML = (0, o.default)(this)),
                this.tagcloud.on("click", ".js-tagcloud-link", function (e) {
                  var i = (0, r.default)(e.target),
                    n = (i.is(".js-tagcloud-link") ? i : i.parent()).data();
                  t.tagcloudQuery.addClass("is-active"),
                    t.tagcloudLoader.addClass("is-active"),
                    (t.tagcloudLabel[0].placeholder = n.tag),
                    (t.tagcloudLabel[0].disabled = !0),
                    t.fetchStories(n.tag).then(t.handleStories.bind(t));
                }),
                this.tagcloudClose.on("click", function () {
                  t.tagcloudQuery.removeClass("is-active"),
                    setTimeout(
                      t.handleTimeout.bind(t),
                      s.config.defaultDuration
                    );
                });
            },
          },
          {
            key: "handleTimeout",
            value: function () {
              (this.tagcloudLabel[0].placeholder = ""),
                (this.tagcloudDisplay[0].innerHTML = ""),
                this.imageController.destroy(),
                (this.imageController = null);
            },
          },
          {
            key: "handleStories",
            value: function (t) {
              var e = this;
              this.tagcloudLoader.removeClass("is-active"),
                (this.tagcloudDisplay[0].innerHTML = (0, a.default)(t)),
                (this.imageController = new l.default(
                  this.tagcloudDisplay.find(s.config.lazyImageSelector)
                )),
                this.imageController.on("preloaded", function () {
                  e.tagcloudDisplay
                    .find(".js-search-grid")
                    .addClass("is-active");
                });
            },
          },
          {
            key: "fetchStories",
            value: function (t) {
              return new Promise(function (e, i) {
                r.default
                  .ajax({
                    url: "/stories/",
                    method: "GET",
                    dataType: "json",
                    data: { format: "json", tag: t },
                  })
                  .then(function (t) {
                    e(t);
                  })
                  .catch(function (t) {
                    i(t);
                  });
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.imageController && this.imageController.destroy();
            },
          },
        ]),
        t
      );
    })();
    e.default = h;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        return (
          '\n        <div class="tagcloud__label h6">Tags:</div>\n        <div class="tagcloud__list h6">\n            ' +
          t.tags
            .map(function (t) {
              return (
                '<a class="tagcloud__link js-tagcloud-link" href="#" data-tag="' +
                t +
                '"><span>' +
                t +
                "</span></a><br />"
              );
            })
            .join("") +
          "\n        </div>\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(90));
    var a = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.cta = e),
          (this.parent = this.cta.closest(".sqs-row")),
          (this.text = this.parent.find(".sqs-block-content > p")),
          (this.dropout = s.dom.body.find(".js-summary-v2")),
          this.init(),
          this.bind();
      }
      return (
        n(t, [
          {
            key: "doScroll",
            value: function () {
              if (
                (this.parent[0].getBoundingClientRect().bottom < 0
                  ? this.parent.addClass("is-cta-offscreen")
                  : this.parent.removeClass("is-cta-offscreen"),
                this.dropout.length)
              ) {
                var t = this.dropout[0].getBoundingClientRect(),
                  e = this.cta[0].getBoundingClientRect();
                t.y < e.y
                  ? this.parent.addClass("is-cta-collider")
                  : this.parent.removeClass("is-cta-collider");
              }
            },
          },
          {
            key: "bind",
            value: function () {
              (this.__appScroll = this.doScroll.bind(this)),
                s.emitter.on("app--scroll", this.__appScroll);
            },
          },
          {
            key: "init",
            value: function () {
              (this.parent[0].innerHTML = (0, r.default)(this)),
                (this.cta = this.parent.find(".js-cta"));
            },
          },
          {
            key: "destroy",
            value: function () {
              s.emitter.off("app--scroll", this.__appScroll);
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        return (
          '\n        <div class="cta cta--static">\n            <div class="cta__wrap">\n                <div class="cta__button">\n                    ' +
          t.cta[0].outerHTML +
          '\n                </div>\n                <div class="cta__text">\n                    ' +
          t.text[0].outerHTML +
          '\n                </div>\n            </div>\n        </div>\n        <div class="cta cta--global">\n            <div class="cta__wrap">\n                <div class="cta__button js-cta">\n                    ' +
          t.cta[0].outerHTML +
          '\n                </div>\n                <div class="cta__text">\n                    ' +
          t.text[0].outerHTML +
          "\n                </div>\n            </div>\n        </div>\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(4)),
      r = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      a = i(16);
    var o = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.belt = this.element.find(".js-slider-belt")),
          (this.items = this.element.find(".js-slider-item")),
          (this.length = this.items.length),
          (this.data = i),
          (this.time = 500),
          (this.index = 0),
          this.init(),
          this.bind();
      }
      return (
        n(t, [
          {
            key: "bind",
            value: function () {
              var t = this;
              this.element.on("click", ".js-slider-item", function (e) {
                var i = (0, s.default)(e.target);
                t.evaluate(i);
              }),
                r.emitter.on("resize", function () {
                  t.evaluate(t.items.eq(t.index));
                });
            },
          },
          {
            key: "evaluate",
            value: function (t) {
              var e = t.index(),
                i = t[0].getBoundingClientRect(),
                n = parseFloat(window.getComputedStyle(t[0])["margin-left"]),
                s = 0 === e,
                r = e === this.length - 1,
                a = 0,
                o = 0;
              this.items.forEach(function (t, i) {
                if (i <= e) {
                  var n = t.getBoundingClientRect(),
                    s = parseFloat(window.getComputedStyle(t)["margin-left"]);
                  o += n.width + s;
                }
              }),
                s ||
                  (r
                    ? ((a += -o), (a += window.innerWidth - n))
                    : ((a += -o),
                      (a += window.innerWidth / 2),
                      (a += i.width / 2))),
                (this.index = e),
                this.move(a);
            },
          },
          {
            key: "move",
            value: function (t) {
              this.tween = new a.TweenLite.to(this.belt[0], this.time / 1e3, {
                x: t,
                ease: a.Power3.easeOut,
              });
            },
          },
          { key: "init", value: function () {} },
          {
            key: "destroy",
            value: function () {
              this.resizer && this.resizer.destroy();
            },
          },
        ]),
        t
      );
    })();
    e.default = o;
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      s = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      r = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      a = d(i(4)),
      o = d(i(94)),
      l = d(i(96)),
      u = d(i(97)),
      h = d(i(20)),
      c = d(i(7)),
      f = d(i(24));
    function d(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var p = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.script = this.element.find("script").detach()),
          (this.parsed = this.script.length
            ? JSON.parse(this.script[0].textContent)
            : {}),
          (this.shop = this.element.is(".js-shop") ? this.element : []),
          (this.product = this.element.is(".js-product") ? this.element : []),
          (this.cart = this.element.is("#sqs-cart-root") ? this.element : []),
          (this.view = this.shop.length ? l.default : u.default),
          (this.data = this.shop.length
            ? { items: this.parsed }
            : { item: this.parsed }),
          (this.cartBox = (0, a.default)(".absolute-cart-box")),
          this.init(),
          this.exec(),
          this.bind();
      }
      return (
        s(t, [
          {
            key: "bind",
            value: function () {
              var t = this;
              this.element.on("click", ".js-button_", function () {
                var e = {
                  sku: t.data.item.structuredContent.variants[0].sku,
                  itemId: t.data.item.id,
                  quantity: 1,
                  additionalFields: null,
                };
                t.addCart(e, function () {
                  window.Y.Squarespace.Commerce.isExpressCheckout()
                    ? window.Y.Squarespace.Commerce.goToCheckoutPage()
                    : t.goToCartPage();
                });
              });
            },
          },
          {
            key: "bindCart",
            value: function () {
              var t = this;
              this.cart.on(
                "click",
                ".js-cart-qty-min, .js-cart-qty-add",
                function (e) {
                  var i = (0, a.default)(e.target),
                    n = i.closest(".js-cart-entry"),
                    s = i.is(".js-cart-qty-min")
                      ? i.next(".js-cart-qty-val")
                      : i.prev(".js-cart-qty-val"),
                    r = n.find(".js-cart-price"),
                    o = t.cart.find(".js-cart-subtotal"),
                    l = n.data(),
                    u = t.shopJSON.items.find(function (t) {
                      return t.id === l.itemId;
                    }),
                    h = i.is(".js-cart-qty-min") ? -1 : 1,
                    c = parseInt(s[0].innerText, 10);
                  (c += h),
                    (s[0].innerText = c),
                    (r[0].innerText = window.Y.Squarespace.Commerce.moneyString(
                      u.structuredContent.variants[0].price * c
                    )),
                    t.qtyCart(c, l.entryId).then(function (t) {
                      (o[0].innerText =
                        window.Y.Squarespace.Commerce.moneyString(
                          t.subtotal.value
                        )),
                        0 === c && n.remove();
                    });
                }
              ),
                this.cart.on("click", ".js-cart-checkout", function () {
                  window.Y.Squarespace.Commerce.goToCheckoutPage();
                });
            },
          },
          {
            key: "exec",
            value: function () {
              (this.controllers = new h.default({ el: this.element })),
                this.controllers.exec();
            },
          },
          {
            key: "init",
            value: function () {
              var t = this;
              this.cart.length
                ? (window.Squarespace.initializeCartPage(window.Y),
                  this.fetchShop().then(function (e) {
                    (t.shopJSON = e),
                      (t.cartJSON = t.data.item.cart),
                      t.fetchCart().then(function (e) {
                        (t.cart[0].innerHTML = (0, o.default)(
                          t.shopJSON,
                          t.cartJSON,
                          e
                        )),
                          r.util.loadImages(
                            t.cart.find(r.config.lazyImageSelector),
                            r.util.noop
                          ),
                          t.bindCart();
                      });
                  }))
                : (window.Squarespace.initializeCommerce(window.Y),
                  (this.element[0].innerHTML = this.view(this)),
                  (this.stack = new f.default(this.element.find(".js-stack"))));
            },
          },
          {
            key: "goToCartPage",
            value: function () {
              window.location.href =
                window.location.protocol +
                "//" +
                window.location.host +
                "/cart/";
            },
          },
          {
            key: "fetchShop",
            value: function () {
              return new Promise(function (t, e) {
                a.default
                  .ajax({
                    url: "/shop/",
                    method: "GET",
                    dataType: "json",
                    data: { format: "json" },
                  })
                  .then(function (e) {
                    t(e);
                  })
                  .catch(function (t) {
                    e(t);
                  });
              });
            },
          },
          {
            key: "fetchCart",
            value: function () {
              return a.default.ajax({
                url: "/api/commerce/shopping-cart/?crumb=" + c.default.crumb,
                method: "GET",
                dataType: "json",
              });
            },
          },
          {
            key: "addCart",
            value: function (t, e) {
              var i = this;
              a.default
                .ajax({
                  url:
                    "/api/commerce/shopping-cart/entries/?crumb=" +
                    c.default.crumb,
                  payload: t,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  dataType: "json",
                })
                .then(function (n) {
                  n.crumbFail
                    ? ((c.default.crumb = n.crumb),
                      r.log("warn", "Crumb fail. Trying again."),
                      i.addCart(t, e))
                    : e && e(n);
                })
                .catch(function (t) {
                  try {
                    t = JSON.parse(t);
                  } catch (t) {
                    r.log("warn", t);
                  }
                  "object" === (void 0 === t ? "undefined" : n(t)) &&
                    t.message &&
                    (i.alert = new window.Y.Squarespace.Widgets.Alert({
                      "strings.title": "Deem Journal",
                      "strings.message": t.message,
                    }));
                });
            },
          },
          {
            key: "qtyCart",
            value: function (t, e) {
              return a.default.ajax({
                url:
                  "/api/commerce/cart/items/" + e + "?crumb=" + c.default.crumb,
                payload: { quantity: t },
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                dataType: "json",
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.controllers.destroy(), this.stack && this.stack.destroy();
            },
          },
        ]),
        t
      );
    })();
    e.default = p;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e, n) {
        var s = i(95);
        return (
          '\n        <div class="cart">\n            ' +
          (n.message
            ? "\n                <p>" + n.message + "</p>\n            "
            : '\n                <div class="cart__tabular">\n                    <div>ITEM</div>\n                    <div>QTY</div>\n                    <div>PRICE</div>\n                </div>\n                ' +
              e.items
                .map(function (e) {
                  var i = t.items.find(function (t) {
                    return t.id === e.productId;
                  });
                  return (
                    '\n                        <div class="cart__entry js-cart-entry" data-item-id="' +
                    e.productId +
                    '" data-entry-id="' +
                    e.id +
                    '">\n                            <div class="cart__item">\n                                <div class="cart__thumb">\n                                    <div class="media js-media">\n                                        <div class="media__wrap">\n                                            <img class="media__node image js-lazy-image" data-img-src="' +
                    i.assetUrl +
                    '" data-variants="' +
                    i.systemDataVariants +
                    '" data-original-size="' +
                    i.originalSize +
                    '" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="cart__desc">\n                                    <div class="cart__title">' +
                    e.productName +
                    '</div>\n                                    <div class="cart__attrs">\n                                        ' +
                    (function (t) {
                      var e = [];
                      for (var i in t.structuredContent.variants[0].attributes)
                        t.structuredContent.variants[0].attributes.hasOwnProperty(
                          i
                        ) &&
                          e.push(
                            '<div class="m">' +
                              t.structuredContent.variants[0].attributes[i] +
                              "</div>"
                          );
                      return e.join("");
                    })(i) +
                    '\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="cart__qty js-cart-qty">\n                                <div class="min js-cart-qty-min">' +
                    s +
                    '</div>\n                                <div class="h6 js-cart-qty-val">' +
                    e.quantity +
                    '</div>\n                                <div class="add js-cart-qty-add">' +
                    s +
                    '</div>\n                            </div>\n                            <div class="cart__price">\n                                <h6 class="js-cart-price">' +
                    window.Y.Squarespace.Commerce.moneyString(
                      e.itemTotal.value
                    ) +
                    "</h6>\n                            </div>\n                        </div>\n                    "
                  );
                })
                .join("") +
              '\n                <div class="cart__subtotal">\n                    <div class="_button js-cart-checkout">Checkout</div>\n                    <h6>Subtotal <span class="js-cart-subtotal">' +
              window.Y.Squarespace.Commerce.moneyString(e.subtotal.value) +
              "</span></h6>\n                </div>\n            ") +
          "\n        </div>\n    "
        );
      });
  },
  function (t, e) {
    t.exports =
      '<svg class="_svg _svg--down" x="0px" y="0px" viewBox="0 0 23 13" style="enable-background:new 0 0 23 13;"><path d="M22.5,0.5c-0.6-0.6-1.5-0.6-2.1,0l-8.9,8.9L2.6,0.5C2-0.1,1.1-0.1,0.5,0.5c-0.6,0.6-0.6,1.5,0,2.1l9.9,9.9c0.4,0.4,1.1,0.5,1.7,0.3c0.2-0.1,0.4-0.2,0.6-0.3l9.9-9.9C23.1,2,23.1,1,22.5,0.5z"></path></svg>';
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e = t.data.items.filter(function (t) {
            return !t.isSubscribable;
          }),
          i = t.data.items.find(function (t) {
            return t.isSubscribable;
          });
        return (
          "\n        " +
          (e.length >= 3
            ? '<div class="grid js-shop-grid">' +
              e
                .map(function (t) {
                  return (
                    '\n                <div class="grid__item">\n                    <a class="grid__link" href="' +
                    t.fullUrl +
                    '">\n                        <img class="grid__image image js-lazy-image" data-img-src="' +
                    t.assetUrl +
                    '" data-variants="' +
                    t.systemDataVariants +
                    '" data-original-size="' +
                    t.originalSize +
                    '" />\n                        <div class="grid__info">\n                            <div class="grid__title">\n                                ' +
                    t.title +
                    ", <span>$" +
                    t.structuredContent.variants[0].priceMoney.value.split(
                      "."
                    )[0] +
                    "</span>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            "
                  );
                })
                .join("") +
              "</div>"
            : "" +
              e
                .map(function (t) {
                  return (
                    '\n                <div class="stack stack--one">\n                    <div class="stack__wrap">\n                        <img class="stack__image js-lazy-image" data-img-src="' +
                    t.assetUrl +
                    '" data-variants="' +
                    t.systemDataVariants +
                    '" data-original-size="' +
                    t.originalSize +
                    '" />\n                        <div class="stack__info">\n                            <h4 class="issue__title">' +
                    t.title +
                    '</h4>\n                            <div class="issue__desc">\n                                <a class="issue__button _button" href="' +
                    t.fullUrl +
                    '">' +
                    t.structuredContent.customAddButtonText +
                    "</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            "
                  );
                })
                .join("")) +
          "\n        " +
          (i
            ? '\n            <div class="stack stack--sub js-stack" data-id="' +
              i.id +
              '">\n                <div class="stack__wrap js-stack-wrap">\n                    <img class="stack__image js-lazy-image" data-img-src="' +
              i.assetUrl +
              '" data-variants="' +
              i.systemDataVariants +
              '" data-original-size="' +
              i.originalSize +
              '" />\n                    <div class="stack__info">\n                        <h4 class="issue__title">' +
              i.title +
              '</h4>\n                        <h6 class="issue__desc">' +
              i.excerpt +
              '</h6>\n                        <a class="issue__button _button _button--lit" href="' +
              i.fullUrl +
              '">' +
              i.structuredContent.customAddButtonText +
              "</a>\n                    </div>\n                </div>\n            </div>\n        "
            : '\n            <div class="stack stack--sub js-stack" data-id="sub">\n                <div class="stack__wrap js-stack-wrap"></div>\n            </div>\n        ') +
          "\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i(12));
    e.default = function (t) {
      var e = t.data.item,
        i = 0 === e.structuredContent.variants[0].qtyInStock,
        s = n.default.element.is(".activate-live-shop");
      return (
        '\n        <div class="p1 ' +
        (i ? "is-out-of-stock" : "") +
        '">\n            <div class="text-col">\n                <div class="p1__title">\n                    <h4>' +
        e.title +
        '</h4>\n                </div>\n                <div class="p1__button sqs-row">\n                    ' +
        (s
          ? '<div class="_button js-button_" data-block-json="">' +
            e.structuredContent.customAddButtonText +
            "</div>"
          : '<div class="_button js-button_" style="pointer-events:none;" data-block-json="">Coming soon</div>') +
        '\n                    <div class="sqs-block-content">\n                        ' +
        (s
          ? '<p class="h6">$' +
            e.structuredContent.variants[0].priceMoney.value +
            "</p>"
          : "<p></p>") +
        "\n                    </div>\n                </div>\n                " +
        (s
          ? '\n                    <div class="p1__attributes">\n                        ' +
            (function () {
              var t = [];
              for (var i in e.structuredContent.variants[0].attributes)
                e.structuredContent.variants[0].attributes.hasOwnProperty(i) &&
                  t.push(
                    "<h6>" +
                      e.structuredContent.variants[0].attributes[i] +
                      "</h6>"
                  );
              return t.join("");
            })() +
            "\n                    </div>\n                "
          : "") +
        '\n            </div>\n            <div class="image-col">\n                <div class="media js-media">\n                    <div class="media__wrap">\n                        <img class="media__node image js-lazy-image" data-img-src="' +
        e.assetUrl +
        '" data-variants="' +
        e.systemDataVariants +
        '" data-original-size="' +
        e.originalSize +
        '" />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <article data-item-id="' +
        e.id +
        '" class="story story--shop js-story">\n            <div class="story__blocks">\n                ' +
        e.body +
        "\n            </div>\n        </div>\n    "
      );
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = o(i(99)),
      a = o(i(24));
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var l = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.script = this.element.find("script").detach()),
          (this.blockJson = JSON.parse(this.script[0].textContent)),
          this.init();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              (this.element[0].innerHTML = (0, r.default)(this)),
                (this.stack = new a.default(this.element.find(".js-stack"))),
                s.util.loadImages(
                  this.element.find(s.config.lazyImageSelector),
                  s.util.noop
                );
            },
          },
          {
            key: "destroy",
            value: function () {
              this.stack && this.stack.destroy();
            },
          },
        ]),
        t
      );
    })();
    e.default = l;
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t) {
        var e = t.blockJson.product,
          i = e.items[1] || e.items[0];
        return (
          '\n        <div class="stack stack--sub js-stack" data-id="' +
          e.id +
          '" id="stack-' +
          e.id +
          '">\n            <div class="stack__wrap js-stack-wrap">\n                <img class="stack__image js-lazy-image" data-img-src="' +
          i.assetUrl +
          '" data-variants="' +
          i.systemDataVariants +
          '" data-original-size="' +
          i.originalSize +
          '" />\n                <div class="stack__info">\n                    <h4 class="issue__title">' +
          e.title +
          '</h4>\n                    <h6 class="issue__desc">' +
          e.excerpt +
          '</h6>\n                    <a class="issue__button _button" href="' +
          e.fullUrl +
          '">' +
          e.structuredContent.customAddButtonText +
          "</a>\n                </div>\n            </div>\n        </div>\n    "
        );
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      s = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      r = i(16);
    var a = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.element = e),
          (this.data = i),
          (this.header = s.dom.body.find(".js-header")),
          (this.style = this.element.find(".js-colorway-style")),
          (this.image = this.element.find(".js-lazy-cover-image")),
          (this.fixer = this.element.find(".js-cover-fixer")),
          (this.hover = this.element.find(".js-cover-hover")),
          (this.parent = this.element.parent()),
          (this.mission = this.parent.find(
            ".js-cover + .sqs-layout .sqs-block-html"
          )),
          (this.summary = this.parent.find(
            ".js-cover + .sqs-layout + .sqs-layout .sqs-block-summary-v2"
          )),
          (this.tween = {}),
          (this.mobileMediaHack = 812),
          this.init(),
          this.bind();
      }
      return (
        n(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              s.dom.html.addClass("is-coverpage"),
                s.util
                  .loadImages(this.image, s.util.noop)
                  .on("done", function () {
                    t.element.addClass("is-loaded"),
                      s.dom.html.removeClass("is-site-intro");
                  });
            },
          },
          {
            key: "bind",
            value: function () {
              (this.__appScroll = this.doScroll.bind(this)),
                (this.__appResize = this.doScroll.bind(this)),
                s.emitter.on("app--scroll", this.__appScroll),
                s.emitter.on("app--resize", this.__appResize),
                this.doScroll();
            },
          },
          {
            key: "doScroll",
            value: function () {
              var t = this.element[0].getBoundingClientRect(),
                e = this.header[0].getBoundingClientRect(),
                i = window.innerHeight / 3,
                n = window.innerHeight - i;
              (s.util.rectsCollide(t, e) &&
              window.innerWidth > this.mobileMediaHack
                ? s.dom.html.addClass(
                    "is-coverpage--collider is-coverpage--" + this.data.id
                  )
                : s.dom.html.removeClass(
                    "is-coverpage--collider is-coverpage--" + this.data.id
                  ),
              this.fixer.length && s.util.isElementVisible(this.element[0])
                ? this.tweenFixer(t)
                : this.tweenFixer({ y: 0 }),
              this.hover.length && s.util.isElementVisible(this.element[0])
                ? this.tweenHover(t)
                : this.tweenHover({ y: 0 }),
              this.mission.length) &&
                this.mission[0].getBoundingClientRect().y <= n &&
                this.mission.addClass("is-active");
              this.summary.length &&
                this.summary[0].getBoundingClientRect().y <= n &&
                this.summary.addClass("is-active");
            },
          },
          {
            key: "tweenFixer",
            value: function (t) {
              this.tween.fixer && this.tween.fixer.kill();
              var e = 1.25 * t.y;
              this.tween.fixer = new r.TweenLite.to(this.fixer[0], 0.05, {
                y: Math.max(-window.innerHeight, e),
                ease: r.Power3.ease,
              });
            },
          },
          {
            key: "tweenHover",
            value: function (t) {
              this.tween.hover && this.tween.hover.kill();
              var e = 0.25 * t.y;
              this.tween.hover = new r.TweenLite.to(this.hover[0], 0.05, {
                y: Math.max(-window.innerHeight, e),
                opacity: 1 - Math.max(0, Math.abs((t.y / 1e3) * 2)),
                ease: r.Power3.ease,
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              this.tween.fixer && this.tween.fixer.kill(),
                this.tween.hover && this.tween.hover.kill(),
                s.emitter.off("app--scroll", this.__appScroll),
                s.emitter.off("app--resize", this.__appResize),
                this.style.remove(),
                s.dom.html.removeClass(
                  "is-coverpage is-coverpage--collider is-coverpage--" +
                    this.data.id
                );
            },
          },
        ]),
        t
      );
    })();
    e.default = a;
  },
  function (t, e, i) {
    var n;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */
    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */
    !(function (s, r, a, o) {
      "use strict";
      var l,
        u = ["", "webkit", "Moz", "MS", "ms", "o"],
        h = r.createElement("div"),
        c = "function",
        f = Math.round,
        d = Math.abs,
        p = Date.now;
      function _(t, e, i) {
        return setTimeout(T(t, i), e);
      }
      function m(t, e, i) {
        return !!Array.isArray(t) && (v(t, i[e], i), !0);
      }
      function v(t, e, i) {
        var n;
        if (t)
          if (t.forEach) t.forEach(e, i);
          else if (t.length !== o)
            for (n = 0; n < t.length; ) e.call(i, t[n], n, t), n++;
          else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
      }
      function g(t, e, i) {
        var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
        return function () {
          var e = new Error("get-stack-trace"),
            i =
              e && e.stack
                ? e.stack
                    .replace(/^[^\(]+?[\n$]/gm, "")
                    .replace(/^\s+at\s+/gm, "")
                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                : "Unknown Stack Trace",
            r = s.console && (s.console.warn || s.console.log);
          return r && r.call(s.console, n, i), t.apply(this, arguments);
        };
      }
      l =
        "function" != typeof Object.assign
          ? function (t) {
              if (t === o || null === t)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (n !== o && null !== n)
                  for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s]);
              }
              return e;
            }
          : Object.assign;
      var y = g(
          function (t, e, i) {
            for (var n = Object.keys(e), s = 0; s < n.length; )
              (!i || (i && t[n[s]] === o)) && (t[n[s]] = e[n[s]]), s++;
            return t;
          },
          "extend",
          "Use `assign`."
        ),
        b = g(
          function (t, e) {
            return y(t, e, !0);
          },
          "merge",
          "Use `assign`."
        );
      function w(t, e, i) {
        var n,
          s = e.prototype;
        ((n = t.prototype = Object.create(s)).constructor = t),
          (n._super = s),
          i && l(n, i);
      }
      function T(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      function x(t, e) {
        return typeof t == c ? t.apply((e && e[0]) || o, e) : t;
      }
      function k(t, e) {
        return t === o ? e : t;
      }
      function P(t, e, i) {
        v(M(e), function (e) {
          t.addEventListener(e, i, !1);
        });
      }
      function C(t, e, i) {
        v(M(e), function (e) {
          t.removeEventListener(e, i, !1);
        });
      }
      function S(t, e) {
        for (; t; ) {
          if (t == e) return !0;
          t = t.parentNode;
        }
        return !1;
      }
      function O(t, e) {
        return t.indexOf(e) > -1;
      }
      function M(t) {
        return t.trim().split(/\s+/g);
      }
      function j(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
          if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
          n++;
        }
        return -1;
      }
      function R(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function E(t, e, i) {
        for (var n = [], s = [], r = 0; r < t.length; ) {
          var a = e ? t[r][e] : t[r];
          j(s, a) < 0 && n.push(t[r]), (s[r] = a), r++;
        }
        return (
          i &&
            (n = e
              ? n.sort(function (t, i) {
                  return t[e] > i[e];
                })
              : n.sort()),
          n
        );
      }
      function D(t, e) {
        for (
          var i, n, s = e[0].toUpperCase() + e.slice(1), r = 0;
          r < u.length;

        ) {
          if ((n = (i = u[r]) ? i + s : e) in t) return n;
          r++;
        }
        return o;
      }
      var A = 1;
      function I(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || s;
      }
      var z = "ontouchstart" in s,
        L = D(s, "PointerEvent") !== o,
        q =
          z &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        N = 25,
        F = 1,
        B = 2,
        H = 4,
        Y = 8,
        X = 1,
        U = 2,
        V = 4,
        W = 8,
        J = 16,
        $ = U | V,
        G = W | J,
        Q = $ | G,
        Z = ["x", "y"],
        K = ["clientX", "clientY"];
      function tt(t, e) {
        var i = this;
        (this.manager = t),
          (this.callback = e),
          (this.element = t.element),
          (this.target = t.options.inputTarget),
          (this.domHandler = function (e) {
            x(t.options.enable, [t]) && i.handler(e);
          }),
          this.init();
      }
      function et(t, e, i) {
        var n = i.pointers.length,
          s = i.changedPointers.length,
          r = e & F && n - s == 0,
          a = e & (H | Y) && n - s == 0;
        (i.isFirst = !!r),
          (i.isFinal = !!a),
          r && (t.session = {}),
          (i.eventType = e),
          (function (t, e) {
            var i = t.session,
              n = e.pointers,
              s = n.length;
            i.firstInput || (i.firstInput = it(e));
            s > 1 && !i.firstMultiple
              ? (i.firstMultiple = it(e))
              : 1 === s && (i.firstMultiple = !1);
            var r = i.firstInput,
              a = i.firstMultiple,
              l = a ? a.center : r.center,
              u = (e.center = nt(n));
            (e.timeStamp = p()),
              (e.deltaTime = e.timeStamp - r.timeStamp),
              (e.angle = ot(l, u)),
              (e.distance = at(l, u)),
              (function (t, e) {
                var i = e.center,
                  n = t.offsetDelta || {},
                  s = t.prevDelta || {},
                  r = t.prevInput || {};
                (e.eventType !== F && r.eventType !== H) ||
                  ((s = t.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
                  (n = t.offsetDelta = { x: i.x, y: i.y }));
                (e.deltaX = s.x + (i.x - n.x)), (e.deltaY = s.y + (i.y - n.y));
              })(i, e),
              (e.offsetDirection = rt(e.deltaX, e.deltaY));
            var h = st(e.deltaTime, e.deltaX, e.deltaY);
            (e.overallVelocityX = h.x),
              (e.overallVelocityY = h.y),
              (e.overallVelocity = d(h.x) > d(h.y) ? h.x : h.y),
              (e.scale = a
                ? (function (t, e) {
                    return at(e[0], e[1], K) / at(t[0], t[1], K);
                  })(a.pointers, n)
                : 1),
              (e.rotation = a
                ? (function (t, e) {
                    return ot(e[1], e[0], K) + ot(t[1], t[0], K);
                  })(a.pointers, n)
                : 0),
              (e.maxPointers = i.prevInput
                ? e.pointers.length > i.prevInput.maxPointers
                  ? e.pointers.length
                  : i.prevInput.maxPointers
                : e.pointers.length),
              (function (t, e) {
                var i,
                  n,
                  s,
                  r,
                  a = t.lastInterval || e,
                  l = e.timeStamp - a.timeStamp;
                if (e.eventType != Y && (l > N || a.velocity === o)) {
                  var u = e.deltaX - a.deltaX,
                    h = e.deltaY - a.deltaY,
                    c = st(l, u, h);
                  (n = c.x),
                    (s = c.y),
                    (i = d(c.x) > d(c.y) ? c.x : c.y),
                    (r = rt(u, h)),
                    (t.lastInterval = e);
                } else
                  (i = a.velocity),
                    (n = a.velocityX),
                    (s = a.velocityY),
                    (r = a.direction);
                (e.velocity = i),
                  (e.velocityX = n),
                  (e.velocityY = s),
                  (e.direction = r);
              })(i, e);
            var c = t.element;
            S(e.srcEvent.target, c) && (c = e.srcEvent.target);
            e.target = c;
          })(t, i),
          t.emit("hammer.input", i),
          t.recognize(i),
          (t.session.prevInput = i);
      }
      function it(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
          (e[i] = {
            clientX: f(t.pointers[i].clientX),
            clientY: f(t.pointers[i].clientY),
          }),
            i++;
        return {
          timeStamp: p(),
          pointers: e,
          center: nt(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY,
        };
      }
      function nt(t) {
        var e = t.length;
        if (1 === e) return { x: f(t[0].clientX), y: f(t[0].clientY) };
        for (var i = 0, n = 0, s = 0; s < e; )
          (i += t[s].clientX), (n += t[s].clientY), s++;
        return { x: f(i / e), y: f(n / e) };
      }
      function st(t, e, i) {
        return { x: e / t || 0, y: i / t || 0 };
      }
      function rt(t, e) {
        return t === e ? X : d(t) >= d(e) ? (t < 0 ? U : V) : e < 0 ? W : J;
      }
      function at(t, e, i) {
        i || (i = Z);
        var n = e[i[0]] - t[i[0]],
          s = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + s * s);
      }
      function ot(t, e, i) {
        i || (i = Z);
        var n = e[i[0]] - t[i[0]],
          s = e[i[1]] - t[i[1]];
        return (180 * Math.atan2(s, n)) / Math.PI;
      }
      tt.prototype = {
        handler: function () {},
        init: function () {
          this.evEl && P(this.element, this.evEl, this.domHandler),
            this.evTarget && P(this.target, this.evTarget, this.domHandler),
            this.evWin && P(I(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
          this.evEl && C(this.element, this.evEl, this.domHandler),
            this.evTarget && C(this.target, this.evTarget, this.domHandler),
            this.evWin && C(I(this.element), this.evWin, this.domHandler);
        },
      };
      var lt = { mousedown: F, mousemove: B, mouseup: H },
        ut = "mousedown",
        ht = "mousemove mouseup";
      function ct() {
        (this.evEl = ut),
          (this.evWin = ht),
          (this.pressed = !1),
          tt.apply(this, arguments);
      }
      w(ct, tt, {
        handler: function (t) {
          var e = lt[t.type];
          e & F && 0 === t.button && (this.pressed = !0),
            e & B && 1 !== t.which && (e = H),
            this.pressed &&
              (e & H && (this.pressed = !1),
              this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: "mouse",
                srcEvent: t,
              }));
        },
      });
      var ft = {
          pointerdown: F,
          pointermove: B,
          pointerup: H,
          pointercancel: Y,
          pointerout: Y,
        },
        dt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
        pt = "pointerdown",
        _t = "pointermove pointerup pointercancel";
      function mt() {
        (this.evEl = pt),
          (this.evWin = _t),
          tt.apply(this, arguments),
          (this.store = this.manager.session.pointerEvents = []);
      }
      s.MSPointerEvent &&
        !s.PointerEvent &&
        ((pt = "MSPointerDown"),
        (_t = "MSPointerMove MSPointerUp MSPointerCancel")),
        w(mt, tt, {
          handler: function (t) {
            var e = this.store,
              i = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              s = ft[n],
              r = dt[t.pointerType] || t.pointerType,
              a = "touch" == r,
              o = j(e, t.pointerId, "pointerId");
            s & F && (0 === t.button || a)
              ? o < 0 && (e.push(t), (o = e.length - 1))
              : s & (H | Y) && (i = !0),
              o < 0 ||
                ((e[o] = t),
                this.callback(this.manager, s, {
                  pointers: e,
                  changedPointers: [t],
                  pointerType: r,
                  srcEvent: t,
                }),
                i && e.splice(o, 1));
          },
        });
      var vt = { touchstart: F, touchmove: B, touchend: H, touchcancel: Y },
        gt = "touchstart",
        yt = "touchstart touchmove touchend touchcancel";
      function bt() {
        (this.evTarget = gt),
          (this.evWin = yt),
          (this.started = !1),
          tt.apply(this, arguments);
      }
      w(bt, tt, {
        handler: function (t) {
          var e = vt[t.type];
          if ((e === F && (this.started = !0), this.started)) {
            var i = function (t, e) {
              var i = R(t.touches),
                n = R(t.changedTouches);
              e & (H | Y) && (i = E(i.concat(n), "identifier", !0));
              return [i, n];
            }.call(this, t, e);
            e & (H | Y) &&
              i[0].length - i[1].length == 0 &&
              (this.started = !1),
              this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: "touch",
                srcEvent: t,
              });
          }
        },
      });
      var wt = { touchstart: F, touchmove: B, touchend: H, touchcancel: Y },
        Tt = "touchstart touchmove touchend touchcancel";
      function xt() {
        (this.evTarget = Tt), (this.targetIds = {}), tt.apply(this, arguments);
      }
      w(xt, tt, {
        handler: function (t) {
          var e = wt[t.type],
            i = function (t, e) {
              var i = R(t.touches),
                n = this.targetIds;
              if (e & (F | B) && 1 === i.length)
                return (n[i[0].identifier] = !0), [i, i];
              var s,
                r,
                a = R(t.changedTouches),
                o = [],
                l = this.target;
              if (
                ((r = i.filter(function (t) {
                  return S(t.target, l);
                })),
                e === F)
              )
                for (s = 0; s < r.length; ) (n[r[s].identifier] = !0), s++;
              s = 0;
              for (; s < a.length; )
                n[a[s].identifier] && o.push(a[s]),
                  e & (H | Y) && delete n[a[s].identifier],
                  s++;
              if (!o.length) return;
              return [E(r.concat(o), "identifier", !0), o];
            }.call(this, t, e);
          i &&
            this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: "touch",
              srcEvent: t,
            });
        },
      });
      var kt = 2500,
        Pt = 25;
      function Ct() {
        tt.apply(this, arguments);
        var t = T(this.handler, this);
        (this.touch = new xt(this.manager, t)),
          (this.mouse = new ct(this.manager, t)),
          (this.primaryTouch = null),
          (this.lastTouches = []);
      }
      function St(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var i = { x: e.clientX, y: e.clientY };
          this.lastTouches.push(i);
          var n = this.lastTouches;
          setTimeout(function () {
            var t = n.indexOf(i);
            t > -1 && n.splice(t, 1);
          }, kt);
        }
      }
      w(Ct, tt, {
        handler: function (t, e, i) {
          var n = "touch" == i.pointerType,
            s = "mouse" == i.pointerType;
          if (
            !(
              s &&
              i.sourceCapabilities &&
              i.sourceCapabilities.firesTouchEvents
            )
          ) {
            if (n)
              (function (t, e) {
                t & F
                  ? ((this.primaryTouch = e.changedPointers[0].identifier),
                    St.call(this, e))
                  : t & (H | Y) && St.call(this, e);
              }).call(this, e, i);
            else if (
              s &&
              function (t) {
                for (
                  var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0;
                  n < this.lastTouches.length;
                  n++
                ) {
                  var s = this.lastTouches[n],
                    r = Math.abs(e - s.x),
                    a = Math.abs(i - s.y);
                  if (r <= Pt && a <= Pt) return !0;
                }
                return !1;
              }.call(this, i)
            )
              return;
            this.callback(t, e, i);
          }
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
      var Ot = D(h.style, "touchAction"),
        Mt = Ot !== o,
        jt = "auto",
        Rt = "manipulation",
        Et = "none",
        Dt = "pan-x",
        At = "pan-y",
        It = (function () {
          if (!Mt) return !1;
          var t = {},
            e = s.CSS && s.CSS.supports;
          return (
            [
              "auto",
              "manipulation",
              "pan-y",
              "pan-x",
              "pan-x pan-y",
              "none",
            ].forEach(function (i) {
              t[i] = !e || s.CSS.supports("touch-action", i);
            }),
            t
          );
        })();
      function zt(t, e) {
        (this.manager = t), this.set(e);
      }
      zt.prototype = {
        set: function (t) {
          "compute" == t && (t = this.compute()),
            Mt &&
              this.manager.element.style &&
              It[t] &&
              (this.manager.element.style[Ot] = t),
            (this.actions = t.toLowerCase().trim());
        },
        update: function () {
          this.set(this.manager.options.touchAction);
        },
        compute: function () {
          var t = [];
          return (
            v(this.manager.recognizers, function (e) {
              x(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
            }),
            (function (t) {
              if (O(t, Et)) return Et;
              var e = O(t, Dt),
                i = O(t, At);
              if (e && i) return Et;
              if (e || i) return e ? Dt : At;
              if (O(t, Rt)) return Rt;
              return jt;
            })(t.join(" "))
          );
        },
        preventDefaults: function (t) {
          var e = t.srcEvent,
            i = t.offsetDirection;
          if (this.manager.session.prevented) e.preventDefault();
          else {
            var n = this.actions,
              s = O(n, Et) && !It[Et],
              r = O(n, At) && !It[At],
              a = O(n, Dt) && !It[Dt];
            if (s) {
              var o = 1 === t.pointers.length,
                l = t.distance < 2,
                u = t.deltaTime < 250;
              if (o && l && u) return;
            }
            if (!a || !r)
              return s || (r && i & $) || (a && i & G)
                ? this.preventSrc(e)
                : void 0;
          }
        },
        preventSrc: function (t) {
          (this.manager.session.prevented = !0), t.preventDefault();
        },
      };
      var Lt = 1,
        qt = 2,
        Nt = 4,
        Ft = 8,
        Bt = Ft,
        Ht = 16;
      function Yt(t) {
        (this.options = l({}, this.defaults, t || {})),
          (this.id = A++),
          (this.manager = null),
          (this.options.enable = k(this.options.enable, !0)),
          (this.state = Lt),
          (this.simultaneous = {}),
          (this.requireFail = []);
      }
      function Xt(t) {
        return t & Ht
          ? "cancel"
          : t & Ft
          ? "end"
          : t & Nt
          ? "move"
          : t & qt
          ? "start"
          : "";
      }
      function Ut(t) {
        return t == J
          ? "down"
          : t == W
          ? "up"
          : t == U
          ? "left"
          : t == V
          ? "right"
          : "";
      }
      function Vt(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t;
      }
      function Wt() {
        Yt.apply(this, arguments);
      }
      function Jt() {
        Wt.apply(this, arguments), (this.pX = null), (this.pY = null);
      }
      function $t() {
        Wt.apply(this, arguments);
      }
      function Gt() {
        Yt.apply(this, arguments), (this._timer = null), (this._input = null);
      }
      function Qt() {
        Wt.apply(this, arguments);
      }
      function Zt() {
        Wt.apply(this, arguments);
      }
      function Kt() {
        Yt.apply(this, arguments),
          (this.pTime = !1),
          (this.pCenter = !1),
          (this._timer = null),
          (this._input = null),
          (this.count = 0);
      }
      function te(t, e) {
        return (
          ((e = e || {}).recognizers = k(e.recognizers, te.defaults.preset)),
          new ee(t, e)
        );
      }
      (Yt.prototype = {
        defaults: {},
        set: function (t) {
          return (
            l(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
          );
        },
        recognizeWith: function (t) {
          if (m(t, "recognizeWith", this)) return this;
          var e = this.simultaneous;
          return (
            e[(t = Vt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)),
            this
          );
        },
        dropRecognizeWith: function (t) {
          return m(t, "dropRecognizeWith", this)
            ? this
            : ((t = Vt(t, this)), delete this.simultaneous[t.id], this);
        },
        requireFailure: function (t) {
          if (m(t, "requireFailure", this)) return this;
          var e = this.requireFail;
          return (
            -1 === j(e, (t = Vt(t, this))) &&
              (e.push(t), t.requireFailure(this)),
            this
          );
        },
        dropRequireFailure: function (t) {
          if (m(t, "dropRequireFailure", this)) return this;
          t = Vt(t, this);
          var e = j(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this;
        },
        hasRequireFailures: function () {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function (t) {
          return !!this.simultaneous[t.id];
        },
        emit: function (t) {
          var e = this,
            i = this.state;
          function n(i) {
            e.manager.emit(i, t);
          }
          i < Ft && n(e.options.event + Xt(i)),
            n(e.options.event),
            t.additionalEvent && n(t.additionalEvent),
            i >= Ft && n(e.options.event + Xt(i));
        },
        tryEmit: function (t) {
          if (this.canEmit()) return this.emit(t);
          this.state = 32;
        },
        canEmit: function () {
          for (var t = 0; t < this.requireFail.length; ) {
            if (!(this.requireFail[t].state & (32 | Lt))) return !1;
            t++;
          }
          return !0;
        },
        recognize: function (t) {
          var e = l({}, t);
          if (!x(this.options.enable, [this, e]))
            return this.reset(), void (this.state = 32);
          this.state & (Bt | Ht | 32) && (this.state = Lt),
            (this.state = this.process(e)),
            this.state & (qt | Nt | Ft | Ht) && this.tryEmit(e);
        },
        process: function (t) {},
        getTouchAction: function () {},
        reset: function () {},
      }),
        w(Wt, Yt, {
          defaults: { pointers: 1 },
          attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e;
          },
          process: function (t) {
            var e = this.state,
              i = t.eventType,
              n = e & (qt | Nt),
              s = this.attrTest(t);
            return n && (i & Y || !s)
              ? e | Ht
              : n || s
              ? i & H
                ? e | Ft
                : e & qt
                ? e | Nt
                : qt
              : 32;
          },
        }),
        w(Jt, Wt, {
          defaults: { event: "pan", threshold: 10, pointers: 1, direction: Q },
          getTouchAction: function () {
            var t = this.options.direction,
              e = [];
            return t & $ && e.push(At), t & G && e.push(Dt), e;
          },
          directionTest: function (t) {
            var e = this.options,
              i = !0,
              n = t.distance,
              s = t.direction,
              r = t.deltaX,
              a = t.deltaY;
            return (
              s & e.direction ||
                (e.direction & $
                  ? ((s = 0 === r ? X : r < 0 ? U : V),
                    (i = r != this.pX),
                    (n = Math.abs(t.deltaX)))
                  : ((s = 0 === a ? X : a < 0 ? W : J),
                    (i = a != this.pY),
                    (n = Math.abs(t.deltaY)))),
              (t.direction = s),
              i && n > e.threshold && s & e.direction
            );
          },
          attrTest: function (t) {
            return (
              Wt.prototype.attrTest.call(this, t) &&
              (this.state & qt || (!(this.state & qt) && this.directionTest(t)))
            );
          },
          emit: function (t) {
            (this.pX = t.deltaX), (this.pY = t.deltaY);
            var e = Ut(t.direction);
            e && (t.additionalEvent = this.options.event + e),
              this._super.emit.call(this, t);
          },
        }),
        w($t, Wt, {
          defaults: { event: "pinch", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [Et];
          },
          attrTest: function (t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.scale - 1) > this.options.threshold ||
                this.state & qt)
            );
          },
          emit: function (t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e;
            }
            this._super.emit.call(this, t);
          },
        }),
        w(Gt, Yt, {
          defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function () {
            return [jt];
          },
          process: function (t) {
            var e = this.options,
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              s = t.deltaTime > e.time;
            if (((this._input = t), !n || !i || (t.eventType & (H | Y) && !s)))
              this.reset();
            else if (t.eventType & F)
              this.reset(),
                (this._timer = _(
                  function () {
                    (this.state = Bt), this.tryEmit();
                  },
                  e.time,
                  this
                ));
            else if (t.eventType & H) return Bt;
            return 32;
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function (t) {
            this.state === Bt &&
              (t && t.eventType & H
                ? this.manager.emit(this.options.event + "up", t)
                : ((this._input.timeStamp = p()),
                  this.manager.emit(this.options.event, this._input)));
          },
        }),
        w(Qt, Wt, {
          defaults: { event: "rotate", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return [Et];
          },
          attrTest: function (t) {
            return (
              this._super.attrTest.call(this, t) &&
              (Math.abs(t.rotation) > this.options.threshold || this.state & qt)
            );
          },
        }),
        w(Zt, Wt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: $ | G,
            pointers: 1,
          },
          getTouchAction: function () {
            return Jt.prototype.getTouchAction.call(this);
          },
          attrTest: function (t) {
            var e,
              i = this.options.direction;
            return (
              i & ($ | G)
                ? (e = t.overallVelocity)
                : i & $
                ? (e = t.overallVelocityX)
                : i & G && (e = t.overallVelocityY),
              this._super.attrTest.call(this, t) &&
                i & t.offsetDirection &&
                t.distance > this.options.threshold &&
                t.maxPointers == this.options.pointers &&
                d(e) > this.options.velocity &&
                t.eventType & H
            );
          },
          emit: function (t) {
            var e = Ut(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
              this.manager.emit(this.options.event, t);
          },
        }),
        w(Kt, Yt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10,
          },
          getTouchAction: function () {
            return [Rt];
          },
          process: function (t) {
            var e = this.options,
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              s = t.deltaTime < e.time;
            if ((this.reset(), t.eventType & F && 0 === this.count))
              return this.failTimeout();
            if (n && s && i) {
              if (t.eventType != H) return this.failTimeout();
              var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                a =
                  !this.pCenter || at(this.pCenter, t.center) < e.posThreshold;
              if (
                ((this.pTime = t.timeStamp),
                (this.pCenter = t.center),
                a && r ? (this.count += 1) : (this.count = 1),
                (this._input = t),
                0 === this.count % e.taps)
              )
                return this.hasRequireFailures()
                  ? ((this._timer = _(
                      function () {
                        (this.state = Bt), this.tryEmit();
                      },
                      e.interval,
                      this
                    )),
                    qt)
                  : Bt;
            }
            return 32;
          },
          failTimeout: function () {
            return (
              (this._timer = _(
                function () {
                  this.state = 32;
                },
                this.options.interval,
                this
              )),
              32
            );
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function () {
            this.state == Bt &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input));
          },
        }),
        (te.VERSION = "2.0.7"),
        (te.defaults = {
          domEvents: !1,
          touchAction: "compute",
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Qt, { enable: !1 }],
            [$t, { enable: !1 }, ["rotate"]],
            [Zt, { direction: $ }],
            [Jt, { direction: $ }, ["swipe"]],
            [Kt],
            [Kt, { event: "doubletap", taps: 2 }, ["tap"]],
            [Gt],
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
          },
        });
      function ee(t, e) {
        (this.options = l({}, te.defaults, e || {})),
          (this.options.inputTarget = this.options.inputTarget || t),
          (this.handlers = {}),
          (this.session = {}),
          (this.recognizers = []),
          (this.oldCssProps = {}),
          (this.element = t),
          (this.input = (function (t) {
            var e = t.options.inputClass;
            return new (e || (L ? mt : q ? xt : z ? Ct : ct))(t, et);
          })(this)),
          (this.touchAction = new zt(this, this.options.touchAction)),
          ie(this, !0),
          v(
            this.options.recognizers,
            function (t) {
              var e = this.add(new t[0](t[1]));
              t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
            },
            this
          );
      }
      function ie(t, e) {
        var i,
          n = t.element;
        n.style &&
          (v(t.options.cssProps, function (s, r) {
            (i = D(n.style, r)),
              e
                ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = s))
                : (n.style[i] = t.oldCssProps[i] || "");
          }),
          e || (t.oldCssProps = {}));
      }
      (ee.prototype = {
        set: function (t) {
          return (
            l(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget &&
              (this.input.destroy(),
              (this.input.target = t.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function (t) {
          this.session.stopped = t ? 2 : 1;
        },
        recognize: function (t) {
          var e = this.session;
          if (!e.stopped) {
            var i;
            this.touchAction.preventDefaults(t);
            var n = this.recognizers,
              s = e.curRecognizer;
            (!s || (s && s.state & Bt)) && (s = e.curRecognizer = null);
            for (var r = 0; r < n.length; )
              (i = n[r]),
                2 === e.stopped || (s && i != s && !i.canRecognizeWith(s))
                  ? i.reset()
                  : i.recognize(t),
                !s && i.state & (qt | Nt | Ft) && (s = e.curRecognizer = i),
                r++;
          }
        },
        get: function (t) {
          if (t instanceof Yt) return t;
          for (var e = this.recognizers, i = 0; i < e.length; i++)
            if (e[i].options.event == t) return e[i];
          return null;
        },
        add: function (t) {
          if (m(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return (
            e && this.remove(e),
            this.recognizers.push(t),
            (t.manager = this),
            this.touchAction.update(),
            t
          );
        },
        remove: function (t) {
          if (m(t, "remove", this)) return this;
          if ((t = this.get(t))) {
            var e = this.recognizers,
              i = j(e, t);
            -1 !== i && (e.splice(i, 1), this.touchAction.update());
          }
          return this;
        },
        on: function (t, e) {
          if (t !== o && e !== o) {
            var i = this.handlers;
            return (
              v(M(t), function (t) {
                (i[t] = i[t] || []), i[t].push(e);
              }),
              this
            );
          }
        },
        off: function (t, e) {
          if (t !== o) {
            var i = this.handlers;
            return (
              v(M(t), function (t) {
                e ? i[t] && i[t].splice(j(i[t], e), 1) : delete i[t];
              }),
              this
            );
          }
        },
        emit: function (t, e) {
          this.options.domEvents &&
            (function (t, e) {
              var i = r.createEvent("Event");
              i.initEvent(t, !0, !0),
                (i.gesture = e),
                e.target.dispatchEvent(i);
            })(t, e);
          var i = this.handlers[t] && this.handlers[t].slice();
          if (i && i.length) {
            (e.type = t),
              (e.preventDefault = function () {
                e.srcEvent.preventDefault();
              });
            for (var n = 0; n < i.length; ) i[n](e), n++;
          }
        },
        destroy: function () {
          this.element && ie(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        },
      }),
        l(te, {
          INPUT_START: F,
          INPUT_MOVE: B,
          INPUT_END: H,
          INPUT_CANCEL: Y,
          STATE_POSSIBLE: Lt,
          STATE_BEGAN: qt,
          STATE_CHANGED: Nt,
          STATE_ENDED: Ft,
          STATE_RECOGNIZED: Bt,
          STATE_CANCELLED: Ht,
          STATE_FAILED: 32,
          DIRECTION_NONE: X,
          DIRECTION_LEFT: U,
          DIRECTION_RIGHT: V,
          DIRECTION_UP: W,
          DIRECTION_DOWN: J,
          DIRECTION_HORIZONTAL: $,
          DIRECTION_VERTICAL: G,
          DIRECTION_ALL: Q,
          Manager: ee,
          Input: tt,
          TouchAction: zt,
          TouchInput: xt,
          MouseInput: ct,
          PointerEventInput: mt,
          TouchMouseInput: Ct,
          SingleTouchInput: bt,
          Recognizer: Yt,
          AttrRecognizer: Wt,
          Tap: Kt,
          Pan: Jt,
          Swipe: Zt,
          Pinch: $t,
          Rotate: Qt,
          Press: Gt,
          on: P,
          off: C,
          each: v,
          merge: b,
          extend: y,
          assign: l,
          inherit: w,
          bindFn: T,
          prefixed: D,
        }),
        ((void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer =
          te),
        (n = function () {
          return te;
        }.call(e, i, e, t)) === o || (t.exports = n);
    })(window, document);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      })(i(1)),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i(12));
    var r = {
      init: function () {
        this.element = n.dom.body.find(".js-intro");
      },
      teardown: function () {
        var t = this;
        this.element.removeClass("is-active"),
          n.emitter.fire("app--intro"),
          s.default.state.now.view !== n.config.homepage &&
            n.dom.html.removeClass("is-site-intro"),
          setTimeout(function () {
            t.element[0].style.display = "none";
          }, 500);
      },
    };
    e.default = r;
  },
  function (t, e, i) {
    t.exports = i.p + "../styles/screen.css";
  },
]);
//# sourceMappingURL=app.js.map
