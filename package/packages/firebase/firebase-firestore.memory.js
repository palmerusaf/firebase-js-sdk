/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(require('@firebase/app'))
    : 'function' == typeof define && define.amd
    ? define(['@firebase/app'], e)
    : e(
        (t = 'undefined' != typeof globalThis ? globalThis : t || self).firebase
      );
})(this, function (Kd) {
  'use strict';
  try {
    (function () {
      function t(t) {
        return t && 'object' == typeof t && 'default' in t ? t : { default: t };
      }
      var u,
        e = t(Kd);
      function s() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      ((_e = u = u || {})[(_e.DEBUG = 0)] = 'DEBUG'),
        (_e[(_e.VERBOSE = 1)] = 'VERBOSE'),
        (_e[(_e.INFO = 2)] = 'INFO'),
        (_e[(_e.WARN = 3)] = 'WARN'),
        (_e[(_e.ERROR = 4)] = 'ERROR'),
        (_e[(_e.SILENT = 5)] = 'SILENT');
      function n(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = a[e];
          if (!o)
            throw new Error(
              'Attempted to log a message with an invalid logType (value: ' +
                e +
                ')'
            );
          console[o].apply(console, s(['[' + i + ']  ' + t.name + ':'], n));
        }
      }
      var r = {
          debug: u.DEBUG,
          verbose: u.VERBOSE,
          info: u.INFO,
          warn: u.WARN,
          error: u.ERROR,
          silent: u.SILENT
        },
        i = u.INFO,
        a =
          (((Te = {})[u.DEBUG] = 'log'),
          (Te[u.VERBOSE] = 'log'),
          (Te[u.INFO] = 'info'),
          (Te[u.WARN] = 'warn'),
          (Te[u.ERROR] = 'error'),
          Te),
        o =
          (Object.defineProperty(c.prototype, 'logLevel', {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in u))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (c.prototype.setLogLevel = function (t) {
            this._logLevel = 'string' == typeof t ? r[t] : t;
          }),
          Object.defineProperty(c.prototype, 'logHandler', {
            get: function () {
              return this._logHandler;
            },
            set: function (t) {
              if ('function' != typeof t)
                throw new TypeError(
                  'Value assigned to `logHandler` must be a function'
                );
              this._logHandler = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(c.prototype, 'userLogHandler', {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (c.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, u.DEBUG], t)),
              this._logHandler.apply(this, s([this, u.DEBUG], t));
          }),
          (c.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, u.VERBOSE], t)),
              this._logHandler.apply(this, s([this, u.VERBOSE], t));
          }),
          (c.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, u.INFO], t)),
              this._logHandler.apply(this, s([this, u.INFO], t));
          }),
          (c.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, u.WARN], t)),
              this._logHandler.apply(this, s([this, u.WARN], t));
          }),
          (c.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, u.ERROR], t)),
              this._logHandler.apply(this, s([this, u.ERROR], t));
          }),
          c);
      function c(t) {
        (this.name = t),
          (this._logLevel = i),
          (this._logHandler = n),
          (this._userLogHandler = null);
      }
      var h = function (t, e) {
        return (h =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function f(t, e) {
        function n() {
          this.constructor = t;
        }
        h(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function y(t, s, u, a) {
        return new (u = u || Promise)(function (n, e) {
          function r(t) {
            try {
              o(a.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(a.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof u
                  ? e
                  : new u(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((a = a.apply(t, s || [])).next());
        });
      }
      function v(n, r) {
        var i,
          o,
          s,
          u = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          },
          t = { next: e(0), throw: e(1), return: e(2) };
        return (
          'function' == typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
        function e(e) {
          return function (t) {
            return (function (e) {
              if (i) throw new TypeError('Generator is already executing.');
              for (; u; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & e[0]
                          ? o.return
                          : e[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, e[1])).done)
                  )
                    return s;
                  switch (((o = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                    case 0:
                    case 1:
                      s = e;
                      break;
                    case 4:
                      return u.label++, { value: e[1], done: !1 };
                    case 5:
                      u.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                        u.label = e[1];
                        break;
                      }
                      if (6 === e[0] && u.label < s[1]) {
                        (u.label = s[1]), (s = e);
                        break;
                      }
                      if (s && u.label < s[2]) {
                        (u.label = s[2]), u.ops.push(e);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  e = r.call(n, u);
                } catch (t) {
                  (e = [6, t]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & e[0]) throw e[1];
              return { value: e[0] ? e[1] : void 0, done: !0 };
            })([e, t]);
          };
        }
      }
      function l() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      function p() {
        return 'undefined' != typeof navigator &&
          'string' == typeof navigator.userAgent
          ? navigator.userAgent
          : '';
      }
      var d,
        g = 'FirebaseError',
        m = (f(w, (d = Error)), w);
      function w(t, e, n) {
        e = d.call(this, e) || this;
        return (
          (e.code = t),
          (e.customData = n),
          (e.name = g),
          Object.setPrototypeOf(e, w.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(e, b.prototype.create),
          e
        );
      }
      var b =
        ((E.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r,
            i = e[0] || {},
            o = this.service + '/' + t,
            t = this.errors[t],
            t = t
              ? ((r = i),
                t.replace(_, function (t, e) {
                  var n = r[e];
                  return null != n ? String(n) : '<' + e + '?>';
                }))
              : 'Error',
            t = this.serviceName + ': ' + t + ' (' + o + ').';
          return new m(o, t, i);
        }),
        E);
      function E(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var _ = /\{\$([^}]+)}/g,
        T = function (t, e) {
          return (T =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        };
      function A(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            }
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }
      var I,
        N =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : {},
        L = {},
        O = N || self;
      function R() {}
      function D(t) {
        var e = typeof t;
        return (
          'array' ==
            (e =
              'object' != e
                ? e
                : t
                ? Array.isArray(t)
                  ? 'array'
                  : e
                : 'null') ||
          ('object' == e && 'number' == typeof t.length)
        );
      }
      function S(t) {
        var e = typeof t;
        return ('object' == e && null != t) || 'function' == e;
      }
      var k = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
        C = 0;
      function P(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function V(e, n, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(t, r), e.apply(n, t);
          };
        }
        return function () {
          return e.apply(n, arguments);
        };
      }
      function x(t, e, n) {
        return (x =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code')
            ? P
            : V).apply(null, arguments);
      }
      function U(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      function M() {
        return Date.now();
      }
      function j(t, o) {
        function e() {}
        (e.prototype = o.prototype),
          (t.X = o.prototype),
          (t.prototype = new e()),
          ((t.prototype.constructor = t).Kb = function (t, e, n) {
            for (
              var r = Array(arguments.length - 2), i = 2;
              i < arguments.length;
              i++
            )
              r[i - 2] = arguments[i];
            return o.prototype[e].apply(t, r);
          });
      }
      function q() {
        (this.j = this.j), (this.i = this.i);
      }
      (q.prototype.j = !1),
        (q.prototype.ja = function () {
          var t;
          !this.j &&
            ((this.j = !0), this.G(), 0) &&
            ((t = this),
            (Object.prototype.hasOwnProperty.call(t, k) && t[k]) ||
              (t[k] = ++C));
        }),
        (q.prototype.G = function () {
          if (this.i) for (; this.i.length; ) this.i.shift()();
        });
      var F = Array.prototype.indexOf
          ? function (t, e) {
              return Array.prototype.indexOf.call(t, e, void 0);
            }
          : function (t, e) {
              if ('string' == typeof t)
                return 'string' != typeof e || 1 != e.length
                  ? -1
                  : t.indexOf(e, 0);
              for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n;
              return -1;
            },
        B = Array.prototype.forEach
          ? function (t, e, n) {
              Array.prototype.forEach.call(t, e, n);
            }
          : function (t, e, n) {
              for (
                var r = t.length,
                  i = 'string' == typeof t ? t.split('') : t,
                  o = 0;
                o < r;
                o++
              )
                o in i && e.call(n, i[o], o, t);
            };
      function G() {
        return Array.prototype.concat.apply([], arguments);
      }
      function z(t) {
        var e = t.length;
        if (0 < e) {
          for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
          return n;
        }
        return [];
      }
      function H(t) {
        return /^[\s\xa0]*$/.test(t);
      }
      var K,
        W = String.prototype.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
            };
      function Y(t, e) {
        return -1 != t.indexOf(e);
      }
      function X(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      t: {
        var Q = O.navigator;
        if (Q) {
          Q = Q.userAgent;
          if (Q) {
            K = Q;
            break t;
          }
        }
        K = '';
      }
      function Z(t, e, n) {
        for (var r in t) e.call(n, t[r], r, t);
      }
      function J(t) {
        var e,
          n = {};
        for (e in t) n[e] = t[e];
        return n;
      }
      var $ = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
        ' '
      );
      function tt(t) {
        for (var e, n, r = 1; r < arguments.length; r++) {
          for (e in (n = arguments[r])) t[e] = n[e];
          for (var i = 0; i < $.length; i++)
            (e = $[i]),
              Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        }
      }
      function et(t) {
        return et[' '](t), t;
      }
      et[' '] = R;
      var nt,
        rt = Y(K, 'Opera'),
        it = Y(K, 'Trident') || Y(K, 'MSIE'),
        ot = Y(K, 'Edge'),
        st = ot || it,
        ut =
          Y(K, 'Gecko') &&
          !(Y(K.toLowerCase(), 'webkit') && !Y(K, 'Edge')) &&
          !(Y(K, 'Trident') || Y(K, 'MSIE')) &&
          !Y(K, 'Edge'),
        at = Y(K.toLowerCase(), 'webkit') && !Y(K, 'Edge');
      function ct() {
        var t = O.document;
        return t ? t.documentMode : void 0;
      }
      t: {
        var ht = '',
          ft =
            ((ft = K),
            ut
              ? /rv:([^\);]+)(\)|;)/.exec(ft)
              : ot
              ? /Edge\/([\d\.]+)/.exec(ft)
              : it
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ft)
              : at
              ? /WebKit\/(\S+)/.exec(ft)
              : rt
              ? /(?:Version)[ \/]?(\S+)/.exec(ft)
              : void 0);
        if ((ft && (ht = ft ? ft[1] : ''), it)) {
          ft = ct();
          if (null != ft && ft > parseFloat(ht)) {
            nt = String(ft);
            break t;
          }
        }
        nt = ht;
      }
      var lt = {};
      function pt(u) {
        return (
          (t = u),
          (e = function () {
            for (
              var t = 0,
                e = W(String(nt)).split('.'),
                n = W(String(u)).split('.'),
                r = Math.max(e.length, n.length),
                i = 0;
              0 == t && i < r;
              i++
            ) {
              var o = e[i] || '',
                s = n[i] || '';
              do {
                if (
                  ((o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                  0 == o[0].length && 0 == s[0].length)
                )
                  break;
                (t =
                  X(
                    0 == o[1].length ? 0 : parseInt(o[1], 10),
                    0 == s[1].length ? 0 : parseInt(s[1], 10)
                  ) ||
                  X(0 == o[2].length, 0 == s[2].length) ||
                  X(o[2], s[2])),
                  (o = o[3]),
                  (s = s[3]);
              } while (0 == t);
            }
            return 0 <= t;
          }),
          (n = lt),
          Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
        );
        var t, e, n;
      }
      var dt = O.document && it ? ct() || parseInt(nt, 10) || void 0 : void 0,
        yt = !it || 9 <= Number(dt),
        vt = it && !pt('9'),
        gt = (function () {
          if (!O.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, 'passive', {
              get: function () {
                t = !0;
              }
            });
          try {
            O.addEventListener('test', R, e),
              O.removeEventListener('test', R, e);
          } catch (t) {}
          return t;
        })();
      function mt(t, e) {
        (this.type = t),
          (this.a = this.target = e),
          (this.defaultPrevented = !1);
      }
      function wt(t, e) {
        if (
          (mt.call(this, t ? t.type : ''),
          (this.relatedTarget = this.a = this.target = null),
          (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
          (this.key = ''),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.pointerId = 0),
          (this.pointerType = ''),
          (this.c = null),
          t)
        ) {
          var n = (this.type = t.type),
            r =
              t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : null;
          if (
            ((this.target = t.target || t.srcElement),
            (this.a = e),
            (e = t.relatedTarget))
          ) {
            if (ut) {
              t: {
                try {
                  et(e.nodeName);
                  var i = !0;
                  break t;
                } catch (t) {}
                i = !1;
              }
              i || (e = null);
            }
          } else
            'mouseover' == n
              ? (e = t.fromElement)
              : 'mouseout' == n && (e = t.toElement);
          (this.relatedTarget = e),
            r
              ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                (this.screenX = r.screenX || 0),
                (this.screenY = r.screenY || 0))
              : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                (this.screenX = t.screenX || 0),
                (this.screenY = t.screenY || 0)),
            (this.button = t.button),
            (this.key = t.key || ''),
            (this.ctrlKey = t.ctrlKey),
            (this.altKey = t.altKey),
            (this.shiftKey = t.shiftKey),
            (this.metaKey = t.metaKey),
            (this.pointerId = t.pointerId || 0),
            (this.pointerType =
              'string' == typeof t.pointerType
                ? t.pointerType
                : bt[t.pointerType] || ''),
            (this.c = t).defaultPrevented && this.b();
        }
      }
      (mt.prototype.b = function () {
        this.defaultPrevented = !0;
      }),
        j(wt, mt);
      var bt = { 2: 'touch', 3: 'pen', 4: 'mouse' };
      wt.prototype.b = function () {
        wt.X.b.call(this);
        var t = this.c;
        if (t.preventDefault) t.preventDefault();
        else if (((t.returnValue = !1), vt))
          try {
            (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
              (t.keyCode = -1);
          } catch (t) {}
      };
      var Et = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
        _t = 0;
      function Tt(t, e, n, r, i) {
        (this.listener = t),
          (this.proxy = null),
          (this.src = e),
          (this.type = n),
          (this.capture = !!r),
          (this.ca = i),
          (this.key = ++_t),
          (this.Y = this.Z = !1);
      }
      function At(t) {
        (t.Y = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.ca = null);
      }
      function It(t) {
        (this.src = t), (this.a = {}), (this.b = 0);
      }
      function Nt(t, e) {
        var n,
          r,
          i,
          o = e.type;
        o in t.a &&
          ((n = t.a[o]),
          (i = 0 <= (r = F(n, e))) && Array.prototype.splice.call(n, r, 1),
          i && (At(e), 0 == t.a[o].length && (delete t.a[o], t.b--)));
      }
      function Lt(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r)
            return i;
        }
        return -1;
      }
      It.prototype.add = function (t, e, n, r, i) {
        var o = t.toString();
        (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
        var s = Lt(t, e, r, i);
        return (
          -1 < s
            ? ((e = t[s]), n || (e.Z = !1))
            : (((e = new Tt(e, this.src, o, !!r, i)).Z = n), t.push(e)),
          e
        );
      };
      var Ot = 'closure_lm_' + ((1e6 * Math.random()) | 0),
        Rt = {};
      function Dt(t, e, n, r, i) {
        if (r && r.once)
          return (function t(e, n, r, i, o) {
            if (Array.isArray(n)) {
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              return null;
            }
            r = Mt(r);
            return e && e[Et]
              ? e.wa(n, r, S(i) ? !!i.capture : !!i, o)
              : St(e, n, r, !0, i, o);
          })(t, e, n, r, i);
        if (Array.isArray(e)) {
          for (var o = 0; o < e.length; o++) Dt(t, e[o], n, r, i);
          return null;
        }
        return (
          (n = Mt(n)),
          t && t[Et]
            ? t.va(e, n, S(r) ? !!r.capture : !!r, i)
            : St(t, e, n, !1, r, i)
        );
      }
      function St(t, e, n, r, i, o) {
        if (!e) throw Error('Invalid event type');
        var s = S(i) ? !!i.capture : !!i;
        if (s && !yt) return null;
        var u,
          a,
          c = xt(t);
        if ((c || (t[Ot] = c = new It(t)), (n = c.add(e, n, r, s, o)).proxy))
          return n;
        if (
          ((u = Vt),
          (r = a = yt
            ? function (t) {
                return u.call(a.src, a.listener, t);
              }
            : function (t) {
                if (!(t = u.call(a.src, a.listener, t))) return t;
              }),
          ((n.proxy = r).src = t),
          (r.listener = n),
          t.addEventListener)
        )
          gt || (i = s),
            void 0 === i && (i = !1),
            t.addEventListener(e.toString(), r, i);
        else if (t.attachEvent) t.attachEvent(Ct(e.toString()), r);
        else {
          if (!t.addListener || !t.removeListener)
            throw Error('addEventListener and attachEvent are unavailable.');
          t.addListener(r);
        }
        return n;
      }
      function kt(t) {
        var e, n, r;
        'number' != typeof t &&
          t &&
          !t.Y &&
          ((e = t.src) && e[Et]
            ? Nt(e.c, t)
            : ((n = t.type),
              (r = t.proxy),
              e.removeEventListener
                ? e.removeEventListener(n, r, t.capture)
                : e.detachEvent
                ? e.detachEvent(Ct(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
              (n = xt(e))
                ? (Nt(n, t), 0 == n.b && ((n.src = null), (e[Ot] = null)))
                : At(t)));
      }
      function Ct(t) {
        return t in Rt ? Rt[t] : (Rt[t] = 'on' + t);
      }
      function Pt(t, e) {
        var n = t.listener,
          r = t.ca || t.src;
        return t.Z && kt(t), n.call(r, e);
      }
      function Vt(t, e) {
        if (t.Y) return !0;
        if (yt) return Pt(t, new wt(e, this));
        if (!e)
          t: {
            e = ['window', 'event'];
            for (var n = O, r = 0; r < e.length; r++)
              if (null == (n = n[e[r]])) {
                e = null;
                break t;
              }
            e = n;
          }
        return Pt(t, (e = new wt(e, this)));
      }
      function xt(t) {
        return (t = t[Ot]) instanceof It ? t : null;
      }
      var Ut = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
      function Mt(e) {
        return 'function' == typeof e
          ? e
          : (e[Ut] ||
              (e[Ut] = function (t) {
                return e.handleEvent(t);
              }),
            e[Ut]);
      }
      function jt() {
        q.call(this), (this.c = new It(this)), ((this.J = this).C = null);
      }
      function qt(t, e) {
        var n,
          r = t.C;
        if (r) for (n = []; r; r = r.C) n.push(r);
        if (
          ((t = t.J),
          (r = e.type || e),
          'string' == typeof e
            ? (e = new mt(e, t))
            : e instanceof mt
            ? (e.target = e.target || t)
            : ((s = e), tt((e = new mt(r, t)), s)),
          (s = !0),
          n)
        )
          for (var i = n.length - 1; 0 <= i; i--)
            var o = (e.a = n[i]), s = Ft(o, r, !0, e) && s;
        if (
          ((s = Ft((o = e.a = t), r, !0, e) && s),
          (s = Ft(o, r, !1, e) && s),
          n)
        )
          for (i = 0; i < n.length; i++)
            s = Ft((o = e.a = n[i]), r, !1, e) && s;
      }
      function Ft(t, e, n, r) {
        if (!(e = t.c.a[String(e)])) return !0;
        e = e.concat();
        for (var i = !0, o = 0; o < e.length; ++o) {
          var s,
            u,
            a = e[o];
          a &&
            !a.Y &&
            a.capture == n &&
            ((s = a.listener),
            (u = a.ca || a.src),
            a.Z && Nt(t.c, a),
            (i = !1 !== s.call(u, r) && i));
        }
        return i && !r.defaultPrevented;
      }
      j(jt, q),
        (jt.prototype[Et] = !0),
        ((I = jt.prototype).addEventListener = function (t, e, n, r) {
          Dt(this, t, e, n, r);
        }),
        (I.removeEventListener = function (t, e, n, r) {
          !(function t(e, n, r, i, o) {
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
            else
              (i = S(i) ? !!i.capture : !!i),
                (r = Mt(r)),
                e && e[Et]
                  ? ((e = e.c),
                    (n = String(n).toString()) in e.a &&
                      -1 < (r = Lt((s = e.a[n]), r, i, o)) &&
                      (At(s[r]),
                      Array.prototype.splice.call(s, r, 1),
                      0 == s.length && (delete e.a[n], e.b--)))
                  : (e = e && xt(e)) &&
                    ((n = e.a[n.toString()]),
                    (e = -1),
                    n && (e = Lt(n, r, i, o)),
                    (r = -1 < e ? n[e] : null) && kt(r));
          })(this, t, e, n, r);
        }),
        (I.G = function () {
          if ((jt.X.G.call(this), this.c)) {
            var t,
              e = this.c;
            for (t in e.a) {
              for (var n = e.a[t], r = 0; r < n.length; r++) At(n[r]);
              delete e.a[t], e.b--;
            }
          }
          this.C = null;
        }),
        (I.va = function (t, e, n, r) {
          return this.c.add(String(t), e, !1, n, r);
        }),
        (I.wa = function (t, e, n, r) {
          return this.c.add(String(t), e, !0, n, r);
        });
      var Bt = O.JSON.stringify;
      function Gt() {
        this.b = this.a = null;
      }
      var zt,
        Ht =
          ((Kt.prototype.get = function () {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          }),
          new Kt(
            function () {
              return new Wt();
            },
            function (t) {
              t.reset();
            }
          ));
      function Kt(t, e) {
        (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
      }
      function Wt() {
        this.next = this.b = this.a = null;
      }
      function Yt(t, e) {
        var n;
        zt ||
          ((n = O.Promise.resolve(void 0)),
          (zt = function () {
            n.then(Zt);
          })),
          Xt || (zt(), (Xt = !0)),
          Qt.add(t, e);
      }
      (Gt.prototype.add = function (t, e) {
        var n = Ht.get();
        n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
      }),
        (Wt.prototype.set = function (t, e) {
          (this.a = t), (this.b = e), (this.next = null);
        });
      var Xt = !(Wt.prototype.reset = function () {
          this.next = this.b = this.a = null;
        }),
        Qt = new Gt();
      function Zt() {
        for (
          var t, e;
          (n = e = void 0),
            (n = null),
            (e = Qt).a &&
              ((n = e.a),
              (e.a = e.a.next),
              e.a || (e.b = null),
              (n.next = null)),
            (t = n);

        ) {
          try {
            t.a.call(t.b);
          } catch (t) {
            !(function (t) {
              O.setTimeout(function () {
                throw t;
              }, 0);
            })(t);
          }
          var n = Ht;
          n.f(t), n.b < 100 && (n.b++, (t.next = n.a), (n.a = t));
        }
        Xt = !1;
      }
      function Jt(t, e) {
        jt.call(this),
          (this.b = t || 1),
          (this.a = e || O),
          (this.f = x(this.Za, this)),
          (this.g = M());
      }
      function $t(t) {
        (t.aa = !1), t.M && (t.a.clearTimeout(t.M), (t.M = null));
      }
      function te(t, e, n) {
        if ('function' == typeof t) n && (t = x(t, n));
        else {
          if (!t || 'function' != typeof t.handleEvent)
            throw Error('Invalid listener argument');
          t = x(t.handleEvent, t);
        }
        return 2147483647 < Number(e) ? -1 : O.setTimeout(t, e || 0);
      }
      j(Jt, jt),
        ((I = Jt.prototype).aa = !1),
        (I.M = null),
        (I.Za = function () {
          var t;
          this.aa &&
            (0 < (t = M() - this.g) && t < 0.8 * this.b
              ? (this.M = this.a.setTimeout(this.f, this.b - t))
              : (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
                qt(this, 'tick'),
                this.aa && ($t(this), this.start())));
        }),
        (I.start = function () {
          (this.aa = !0),
            this.M ||
              ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = M()));
        }),
        (I.G = function () {
          Jt.X.G.call(this), $t(this), delete this.a;
        });
      var ee,
        ne,
        re,
        ie =
          (T((ne = se), (re = ee = q)),
          (ne.prototype =
            null === re
              ? Object.create(re)
              : ((oe.prototype = re.prototype), new oe())),
          (se.prototype.f = function (t) {
            (this.b = arguments),
              this.a
                ? (this.c = !0)
                : (function t(e) {
                    e.a = te(function () {
                      (e.a = null), e.c && ((e.c = !1), t(e));
                    }, e.h);
                    var n = e.b;
                    (e.b = null), e.g.apply(null, n);
                  })(this);
          }),
          (se.prototype.G = function () {
            ee.prototype.G.call(this),
              this.a &&
                (O.clearTimeout(this.a),
                (this.a = null),
                (this.c = !1),
                (this.b = null));
          }),
          se);
      function oe() {
        this.constructor = ne;
      }
      function se(t, e) {
        var n = ee.call(this) || this;
        return (n.g = t), (n.h = e), (n.b = null), (n.c = !1), (n.a = null), n;
      }
      function ue(t) {
        q.call(this), (this.b = t), (this.a = {});
      }
      j(ue, q);
      var ae = [];
      function ce(t, e, n, r) {
        Array.isArray(n) || (n && (ae[0] = n.toString()), (n = ae));
        for (var i = 0; i < n.length; i++) {
          var o = Dt(e, n[i], r || t.handleEvent, !1, t.b || t);
          if (!o) break;
          t.a[o.key] = o;
        }
      }
      function he(t) {
        Z(
          t.a,
          function (t, e) {
            this.a.hasOwnProperty(e) && kt(t);
          },
          t
        ),
          (t.a = {});
      }
      function fe() {
        this.a = !0;
      }
      function le(t, e, n, r) {
        t.info(function () {
          return (
            'XMLHTTP TEXT (' +
            e +
            '): ' +
            (function (t, e) {
              if (!t.a) return e;
              if (!e) return null;
              try {
                var n = JSON.parse(e);
                if (n)
                  for (t = 0; t < n.length; t++)
                    if (Array.isArray(n[t])) {
                      var r = n[t];
                      if (!(r.length < 2)) {
                        var i = r[1];
                        if (Array.isArray(i) && !(i.length < 1)) {
                          r = i[0];
                          if ('noop' != r && 'stop' != r && 'close' != r)
                            for (var o = 1; o < i.length; o++) i[o] = '';
                        }
                      }
                    }
                return Bt(n);
              } catch (t) {
                return e;
              }
            })(t, n) +
            (r ? ' ' + r : '')
          );
        });
      }
      (ue.prototype.G = function () {
        ue.X.G.call(this), he(this);
      }),
        (ue.prototype.handleEvent = function () {
          throw Error('EventHandler.handleEvent not implemented');
        }),
        (fe.prototype.info = function () {});
      var pe = {},
        de = null;
      function ye() {
        return (de = de || new jt());
      }
      function ve(t) {
        mt.call(this, pe.Fa, t);
      }
      function ge(t) {
        var e = ye();
        qt(e, new ve(e));
      }
      function me(t, e) {
        mt.call(this, pe.STAT_EVENT, t), (this.stat = e);
      }
      function we(t) {
        var e = ye();
        qt(e, new me(e, t));
      }
      function be(t) {
        mt.call(this, pe.Ga, t);
      }
      function Ee(t, e) {
        if ('function' != typeof t)
          throw Error('Fn must not be null and must be a function');
        return O.setTimeout(function () {
          t();
        }, e);
      }
      (pe.Fa = 'serverreachability'),
        j(ve, mt),
        (pe.STAT_EVENT = 'statevent'),
        j(me, mt),
        (pe.Ga = 'timingevent'),
        j(be, mt);
      var _e = {
          NO_ERROR: 0,
          $a: 1,
          nb: 2,
          mb: 3,
          hb: 4,
          lb: 5,
          ob: 6,
          Da: 7,
          TIMEOUT: 8,
          rb: 9
        },
        Te = {
          fb: 'complete',
          Bb: 'success',
          Ea: 'error',
          Da: 'abort',
          tb: 'ready',
          ub: 'readystatechange',
          TIMEOUT: 'timeout',
          pb: 'incrementaldata',
          sb: 'progress',
          ib: 'downloadprogress',
          Jb: 'uploadprogress'
        };
      function Ae() {}
      function Ie(t) {
        var e;
        return (e = t.a) || (e = t.a = {}), e;
      }
      function Ne() {}
      Ae.prototype.a = null;
      var Le,
        N = { OPEN: 'a', eb: 'b', Ea: 'c', qb: 'd' };
      function Oe() {
        mt.call(this, 'd');
      }
      function Re() {
        mt.call(this, 'c');
      }
      function De() {}
      function Se(t, e, n, r) {
        (this.g = t),
          (this.c = e),
          (this.f = n),
          (this.S = r || 1),
          (this.J = new ue(this)),
          (this.P = ke),
          (t = st ? 125 : void 0),
          (this.R = new Jt(t)),
          (this.B = null),
          (this.b = !1),
          (this.j = this.l = this.i = this.H = this.u = this.T = this.o = null),
          (this.s = []),
          (this.a = null),
          (this.D = 0),
          (this.h = this.m = null),
          (this.N = -1),
          (this.A = !1),
          (this.O = 0),
          (this.F = null),
          (this.V = this.C = this.U = this.I = !1);
      }
      j(Oe, mt), j(Re, mt), j(De, Ae), (Le = new De());
      var ke = 45e3,
        Ce = {},
        Pe = {};
      function Ve(t, e, n) {
        (t.H = 1), (t.i = nn(Qe(e))), (t.j = n), (t.I = !0), xe(t, null);
      }
      function xe(t, e) {
        (t.u = M()), Me(t), (t.l = Qe(t.i));
        var s,
          u,
          a,
          c,
          h,
          f,
          n = t.l,
          r = t.S;
        Array.isArray(r) || (r = [String(r)]),
          vn(n.b, 't', r),
          (t.D = 0),
          (t.a = cr(t.g, t.g.C ? e : null)),
          0 < t.O && (t.F = new ie(x(t.Ca, t, t.a), t.O)),
          ce(t.J, t.a, 'readystatechange', t.Xa),
          (e = t.B ? J(t.B) : {}),
          t.j
            ? (t.m || (t.m = 'POST'),
              (e['Content-Type'] = 'application/x-www-form-urlencoded'),
              t.a.ba(t.l, t.m, t.j, e))
            : ((t.m = 'GET'), t.a.ba(t.l, t.m, null, e)),
          ge(1),
          (s = t.c),
          (u = t.m),
          (a = t.l),
          (c = t.f),
          (h = t.S),
          (f = t.j),
          s.info(function () {
            if (s.a)
              if (f)
                for (var t = '', e = f.split('&'), n = 0; n < e.length; n++) {
                  var r,
                    i,
                    o = e[n].split('=');
                  1 < o.length &&
                    ((r = o[0]),
                    (o = o[1]),
                    (t =
                      2 <= (i = r.split('_')).length && 'type' == i[1]
                        ? t + (r + '=') + o + '&'
                        : t + (r + '=redacted&')));
                }
              else t = null;
            else t = f;
            return (
              'XMLHTTP REQ (' +
              c +
              ') [attempt ' +
              h +
              ']: ' +
              u +
              '\n' +
              a +
              '\n' +
              t
            );
          });
      }
      function Ue(t, e, n) {
        for (var r, i, o, s = !0; !t.A && t.D < n.length; ) {
          var u =
            ((u = n),
            (o = i = void 0),
            (i = (r = t).D),
            -1 == (o = u.indexOf('\n', i))
              ? Pe
              : ((i = Number(u.substring(i, o))),
                isNaN(i)
                  ? Ce
                  : (o += 1) + i > u.length
                  ? Pe
                  : ((u = u.substr(o, i)), (r.D = o + i), u)));
          if (u == Pe) {
            4 == e && ((t.h = 4), we(14), (s = !1)),
              le(t.c, t.f, null, '[Incomplete Response]');
            break;
          }
          if (u == Ce) {
            (t.h = 4), we(15), le(t.c, t.f, n, '[Invalid Chunk]'), (s = !1);
            break;
          }
          le(t.c, t.f, u, null), Ge(t, u);
        }
        4 == e && 0 == n.length && ((t.h = 1), we(16), (s = !1)),
          (t.b = t.b && s),
          s
            ? 0 < n.length &&
              !t.V &&
              ((t.V = !0),
              (e = t.g).a == t &&
                e.U &&
                !e.F &&
                (e.c.info(
                  'Great, no buffering proxy detected. Bytes received: ' +
                    n.length
                ),
                er(e),
                (e.F = !0),
                we(11)))
            : (le(t.c, t.f, n, '[Invalid Chunked Response]'), Be(t), Fe(t));
      }
      function Me(t) {
        (t.T = M() + t.P), je(t, t.P);
      }
      function je(t, e) {
        if (null != t.o) throw Error('WatchDog timer not null');
        t.o = Ee(x(t.Va, t), e);
      }
      function qe(t) {
        t.o && (O.clearTimeout(t.o), (t.o = null));
      }
      function Fe(t) {
        0 == t.g.v || t.A || ir(t.g, t);
      }
      function Be(t) {
        qe(t);
        var e = t.F;
        e && 'function' == typeof e.ja && e.ja(),
          (t.F = null),
          $t(t.R),
          he(t.J),
          t.a && ((e = t.a), (t.a = null), e.abort(), e.ja());
      }
      function Ge(t, e) {
        try {
          var n,
            r,
            i,
            o,
            s,
            u = t.g;
          if (0 != u.v && (u.a == t || Tn(u.b, t)))
            if (((u.I = t.N), !t.C && Tn(u.b, t) && 3 == u.v)) {
              try {
                var a = u.ka.a.parse(e);
              } catch (t) {
                a = null;
              }
              if (Array.isArray(a) && 3 == a.length) {
                var c = a;
                if (0 == c[0]) {
                  t: if (!u.j) {
                    if (u.a) {
                      if (!(u.a.u + 3e3 < t.u)) break t;
                      rr(u), Kn(u);
                    }
                    tr(u), we(18);
                  }
                } else
                  (u.oa = c[1]),
                    0 < u.oa - u.P &&
                      c[2] < 37500 &&
                      u.H &&
                      0 == u.o &&
                      !u.m &&
                      (u.m = Ee(x(u.Sa, u), 6e3));
                if (_n(u.b) <= 1 && u.ea) {
                  try {
                    u.ea();
                  } catch (t) {}
                  u.ea = void 0;
                }
              } else sr(u, 11);
            } else if (((!t.C && u.a != t) || rr(u), !H(e)))
              for (e = a = u.ka.a.parse(e), a = 0; a < e.length; a++) {
                (c = e[a]),
                  (u.P = c[0]),
                  (c = c[1]),
                  2 == u.v
                    ? 'c' == c[0]
                      ? ((u.J = c[1]),
                        (u.ga = c[2]),
                        null != (r = c[3]) &&
                          ((u.ha = r), u.c.info('VER=' + u.ha)),
                        null != (o = c[4]) &&
                          ((u.pa = o), u.c.info('SVER=' + u.pa)),
                        null != (r = c[5]) &&
                          'number' == typeof r &&
                          0 < r &&
                          ((n = 1.5 * r),
                          (u.D = n),
                          u.c.info('backChannelRequestTimeoutMs_=' + n)),
                        (n = u),
                        (o = t.a) &&
                          (!(r = o.a
                            ? o.a.getResponseHeader('X-Client-Wire-Protocol')
                            : null) ||
                            (!(i = n.b).a &&
                              (Y(r, 'spdy') || Y(r, 'quic') || Y(r, 'h2')) &&
                              ((i.f = i.g),
                              (i.a = new Set()),
                              i.b && (An(i, i.b), (i.b = null)))),
                          !n.A ||
                            ((s = o.a
                              ? o.a.getResponseHeader('X-HTTP-Session-Id')
                              : null) &&
                              ((n.na = s), en(n.B, n.A, s)))),
                        (u.v = 3),
                        u.f && u.f.ta(),
                        u.U &&
                          ((u.N = M() - t.u),
                          u.c.info('Handshake RTT: ' + u.N + 'ms')),
                        (i = t),
                        ((n = u).la = ar(n, n.C ? n.ga : null, n.fa)),
                        i.C
                          ? (In(n.b, i),
                            (o = i),
                            (s = n.D) && o.setTimeout(s),
                            o.o && (qe(o), Me(o)),
                            (n.a = i))
                          : $n(n),
                        0 < u.g.length && Xn(u))
                      : ('stop' != c[0] && 'close' != c[0]) || sr(u, 7)
                    : 3 == u.v &&
                      ('stop' == c[0] || 'close' == c[0]
                        ? 'stop' == c[0]
                          ? sr(u, 7)
                          : Hn(u)
                        : 'noop' != c[0] && u.f && u.f.sa(c),
                      (u.o = 0));
              }
          ge(4);
        } catch (t) {}
      }
      function ze(t, e) {
        if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
        else if (D(t) || 'string' == typeof t) B(t, e, void 0);
        else {
          if (t.L && 'function' == typeof t.L) var n = t.L();
          else if (t.K && 'function' == typeof t.K) n = void 0;
          else if (D(t) || 'string' == typeof t) {
            n = [];
            for (var r = t.length, i = 0; i < r; i++) n.push(i);
          } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
          i = (r = (function (t) {
            if (t.K && 'function' == typeof t.K) return t.K();
            if ('string' == typeof t) return t.split('');
            if (D(t)) {
              for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
              return e;
            }
            for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
            return e;
          })(t)).length;
          for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
        }
      }
      function He(t, e) {
        (this.b = {}), (this.a = []), (this.c = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error('Uneven number of arguments');
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (t)
          if (t instanceof He)
            for (n = t.L(), r = 0; r < n.length; r++)
              this.set(n[r], t.get(n[r]));
          else for (r in t) this.set(r, t[r]);
      }
      function Ke(t) {
        if (t.c != t.a.length) {
          for (var e = 0, n = 0; e < t.a.length; ) {
            var r = t.a[e];
            We(t.b, r) && (t.a[n++] = r), e++;
          }
          t.a.length = n;
        }
        if (t.c != t.a.length) {
          for (var i = {}, n = (e = 0); e < t.a.length; )
            We(i, (r = t.a[e])) || (i[(t.a[n++] = r)] = 1), e++;
          t.a.length = n;
        }
      }
      function We(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      ((I = Se.prototype).setTimeout = function (t) {
        this.P = t;
      }),
        (I.Xa = function (t) {
          t = t.target;
          var e = this.F;
          e && 3 == Fn(t) ? e.f() : this.Ca(t);
        }),
        (I.Ca = function (t) {
          try {
            if (t == this.a)
              t: {
                var e = Fn(this.a),
                  n = this.a.ua(),
                  r = this.a.W();
                if (!(e < 3 || (3 == e && !st && !this.a.$()))) {
                  this.A || 4 != e || 7 == n || ge(8 == n || r <= 0 ? 3 : 2),
                    qe(this);
                  var i = this.a.W();
                  this.N = i;
                  n = this.a.$();
                  if (
                    ((this.b = 200 == i),
                    (r = this.c),
                    (u = this.m),
                    (a = this.l),
                    (c = this.f),
                    (h = this.S),
                    (f = e),
                    (l = i),
                    r.info(function () {
                      return (
                        'XMLHTTP RESP (' +
                        c +
                        ') [ attempt ' +
                        h +
                        ']: ' +
                        u +
                        '\n' +
                        a +
                        '\n' +
                        f +
                        ' ' +
                        l
                      );
                    }),
                    this.b)
                  ) {
                    if (this.U && !this.C) {
                      e: {
                        if (this.a) {
                          var o = this.a;
                          if (
                            (o = o.a
                              ? o.a.getResponseHeader('X-HTTP-Initial-Response')
                              : null) &&
                            !H(o)
                          ) {
                            var s = o;
                            break e;
                          }
                        }
                        s = null;
                      }
                      if (!s) {
                        (this.b = !1), (this.h = 3), we(12), Be(this), Fe(this);
                        break t;
                      }
                      le(
                        this.c,
                        this.f,
                        s,
                        'Initial handshake response via X-HTTP-Initial-Response'
                      ),
                        (this.C = !0),
                        Ge(this, s);
                    }
                    this.I
                      ? (Ue(this, e, n),
                        st &&
                          this.b &&
                          3 == e &&
                          (ce(this.J, this.R, 'tick', this.Wa), this.R.start()))
                      : (le(this.c, this.f, n, null), Ge(this, n)),
                      4 == e && Be(this),
                      this.b &&
                        !this.A &&
                        (4 == e ? ir(this.g, this) : ((this.b = !1), Me(this)));
                  } else
                    400 == i && 0 < n.indexOf('Unknown SID')
                      ? ((this.h = 3), we(12))
                      : ((this.h = 0), we(13)),
                      Be(this),
                      Fe(this);
                }
              }
          } catch (t) {}
          var u, a, c, h, f, l;
        }),
        (I.Wa = function () {
          var t, e;
          this.a &&
            ((t = Fn(this.a)),
            (e = this.a.$()),
            this.D < e.length &&
              (qe(this), Ue(this, t, e), this.b && 4 != t && Me(this)));
        }),
        (I.cancel = function () {
          (this.A = !0), Be(this);
        }),
        (I.Va = function () {
          this.o = null;
          var t,
            e,
            n = M();
          0 <= n - this.T
            ? ((t = this.c),
              (e = this.l),
              t.info(function () {
                return 'TIMEOUT: ' + e;
              }),
              2 != this.H && (ge(3), we(17)),
              Be(this),
              (this.h = 2),
              Fe(this))
            : je(this, this.T - n);
        }),
        ((I = He.prototype).K = function () {
          Ke(this);
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]]);
          return t;
        }),
        (I.L = function () {
          return Ke(this), this.a.concat();
        }),
        (I.get = function (t, e) {
          return We(this.b, t) ? this.b[t] : e;
        }),
        (I.set = function (t, e) {
          We(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
        }),
        (I.forEach = function (t, e) {
          for (var n = this.L(), r = 0; r < n.length; r++) {
            var i = n[r],
              o = this.get(i);
            t.call(e, o, i, this);
          }
        });
      var Ye = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function Xe(t, e) {
        var n;
        (this.c = this.j = this.f = ''),
          (this.h = null),
          (this.i = this.g = ''),
          (this.a = !1),
          t instanceof Xe
            ? ((this.a = void 0 !== e ? e : t.a),
              Ze(this, t.f),
              (this.j = t.j),
              Je(this, t.c),
              $e(this, t.h),
              (this.g = t.g),
              (e = t.b),
              ((n = new ln()).c = e.c),
              e.a && ((n.a = new He(e.a)), (n.b = e.b)),
              tn(this, n),
              (this.i = t.i))
            : t && (n = String(t).match(Ye))
            ? ((this.a = !!e),
              Ze(this, n[1] || '', !0),
              (this.j = rn(n[2] || '')),
              Je(this, n[3] || '', !0),
              $e(this, n[4]),
              (this.g = rn(n[5] || '', !0)),
              tn(this, n[6] || '', !0),
              (this.i = rn(n[7] || '')))
            : ((this.a = !!e), (this.b = new ln(null, this.a)));
      }
      function Qe(t) {
        return new Xe(t);
      }
      function Ze(t, e, n) {
        (t.f = n ? rn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
      }
      function Je(t, e, n) {
        t.c = n ? rn(e, !0) : e;
      }
      function $e(t, e) {
        if (e) {
          if (((e = Number(e)), isNaN(e) || e < 0))
            throw Error('Bad port number ' + e);
          t.h = e;
        } else t.h = null;
      }
      function tn(t, e, n) {
        var r, i;
        e instanceof ln
          ? ((t.b = e),
            (r = t.b),
            (i = t.a) &&
              !r.f &&
              (pn(r),
              (r.c = null),
              r.a.forEach(function (t, e) {
                var n = e.toLowerCase();
                e != n && (dn(this, e), vn(this, n, t));
              }, r)),
            (r.f = i))
          : (n || (e = on(e, hn)), (t.b = new ln(e, t.a)));
      }
      function en(t, e, n) {
        t.b.set(e, n);
      }
      function nn(t) {
        return (
          en(
            t,
            'zx',
            Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(Math.floor(2147483648 * Math.random()) ^ M()).toString(
                36
              )
          ),
          t
        );
      }
      function rn(t, e) {
        return t
          ? e
            ? decodeURI(t.replace(/%25/g, '%2525'))
            : decodeURIComponent(t)
          : '';
      }
      function on(t, e, n) {
        return 'string' == typeof t
          ? ((t = encodeURI(t).replace(e, sn)),
            n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            t)
          : null;
      }
      function sn(t) {
        return (
          '%' +
          (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & t).toString(16)
        );
      }
      Xe.prototype.toString = function () {
        var t = [],
          e = this.f;
        e && t.push(on(e, un, !0), ':');
        var n = this.c;
        return (
          (!n && 'file' != e) ||
            (t.push('//'),
            (e = this.j) && t.push(on(e, un, !0), '@'),
            t.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                '%$1'
              )
            ),
            null != (n = this.h) && t.push(':', String(n))),
          (n = this.g) &&
            (this.c && '/' != n.charAt(0) && t.push('/'),
            t.push(on(n, '/' == n.charAt(0) ? cn : an, !0))),
          (n = this.b.toString()) && t.push('?', n),
          (n = this.i) && t.push('#', on(n, fn)),
          t.join('')
        );
      };
      var un = /[#\/\?@]/g,
        an = /[#\?:]/g,
        cn = /[#\?]/g,
        hn = /[#\?@]/g,
        fn = /#/g;
      function ln(t, e) {
        (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
      }
      function pn(n) {
        n.a ||
          ((n.a = new He()),
          (n.b = 0),
          n.c &&
            (function (t, e) {
              if (t) {
                t = t.split('&');
                for (var n = 0; n < t.length; n++) {
                  var r,
                    i = t[n].indexOf('='),
                    o = null;
                  0 <= i
                    ? ((r = t[n].substring(0, i)), (o = t[n].substring(i + 1)))
                    : (r = t[n]),
                    e(r, o ? decodeURIComponent(o.replace(/\+/g, ' ')) : '');
                }
              }
            })(n.c, function (t, e) {
              n.add(decodeURIComponent(t.replace(/\+/g, ' ')), e);
            }));
      }
      function dn(t, e) {
        pn(t),
          (e = gn(t, e)),
          We(t.a.b, e) &&
            ((t.c = null),
            (t.b -= t.a.get(e).length),
            We((t = t.a).b, e) &&
              (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ke(t)));
      }
      function yn(t, e) {
        return pn(t), (e = gn(t, e)), We(t.a.b, e);
      }
      function vn(t, e, n) {
        dn(t, e),
          0 < n.length &&
            ((t.c = null), t.a.set(gn(t, e), z(n)), (t.b += n.length));
      }
      function gn(t, e) {
        return (e = String(e)), t.f && (e = e.toLowerCase()), e;
      }
      ((I = ln.prototype).add = function (t, e) {
        pn(this), (this.c = null), (t = gn(this, t));
        var n = this.a.get(t);
        return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
      }),
        (I.forEach = function (n, r) {
          pn(this),
            this.a.forEach(function (t, e) {
              B(
                t,
                function (t) {
                  n.call(r, t, e, this);
                },
                this
              );
            }, this);
        }),
        (I.L = function () {
          pn(this);
          for (
            var t = this.a.K(), e = this.a.L(), n = [], r = 0;
            r < e.length;
            r++
          )
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
          return n;
        }),
        (I.K = function (t) {
          pn(this);
          var e = [];
          if ('string' == typeof t)
            yn(this, t) && (e = G(e, this.a.get(gn(this, t))));
          else {
            t = this.a.K();
            for (var n = 0; n < t.length; n++) e = G(e, t[n]);
          }
          return e;
        }),
        (I.set = function (t, e) {
          return (
            pn(this),
            (this.c = null),
            yn(this, (t = gn(this, t))) && (this.b -= this.a.get(t).length),
            this.a.set(t, [e]),
            (this.b += 1),
            this
          );
        }),
        (I.get = function (t, e) {
          return t && 0 < (t = this.K(t)).length ? String(t[0]) : e;
        }),
        (I.toString = function () {
          if (this.c) return this.c;
          if (!this.a) return '';
          for (var t = [], e = this.a.L(), n = 0; n < e.length; n++)
            for (
              var r = e[n],
                i = encodeURIComponent(String(r)),
                r = this.K(r),
                o = 0;
              o < r.length;
              o++
            ) {
              var s = i;
              '' !== r[o] && (s += '=' + encodeURIComponent(String(r[o]))),
                t.push(s);
            }
          return (this.c = t.join('&'));
        });
      var mn = function (t, e) {
        (this.b = t), (this.a = e);
      };
      function wn(t) {
        (this.g = t || bn),
          (t = O.PerformanceNavigationTiming
            ? 0 < (t = O.performance.getEntriesByType('navigation')).length &&
              ('hq' == t[0].nextHopProtocol || 'h2' == t[0].nextHopProtocol)
            : !!(O.ia && O.ia.ya && O.ia.ya() && O.ia.ya().Lb)),
          (this.f = t ? this.g : 1),
          (this.a = null),
          1 < this.f && (this.a = new Set()),
          (this.b = null),
          (this.c = []);
      }
      var bn = 10;
      function En(t) {
        return t.b || (t.a && t.a.size >= t.f);
      }
      function _n(t) {
        return t.b ? 1 : t.a ? t.a.size : 0;
      }
      function Tn(t, e) {
        return t.b ? t.b == e : t.a && t.a.has(e);
      }
      function An(t, e) {
        t.a ? t.a.add(e) : (t.b = e);
      }
      function In(t, e) {
        t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
      }
      function Nn(t) {
        var e, n;
        if (null != t.b) return t.c.concat(t.b.s);
        if (null == t.a || 0 === t.a.size) return z(t.c);
        var r = t.c;
        try {
          for (var i = A(t.a.values()), o = i.next(); !o.done; o = i.next())
            var s = o.value, r = r.concat(s.s);
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      function Ln() {}
      function On() {
        this.a = new Ln();
      }
      function Rn(t, e, n, r, i) {
        try {
          (e.onload = null),
            (e.onerror = null),
            (e.onabort = null),
            (e.ontimeout = null),
            i(r);
        } catch (t) {}
      }
      (wn.prototype.cancel = function () {
        var e, t;
        if (((this.c = Nn(this)), this.b)) this.b.cancel(), (this.b = null);
        else if (this.a && 0 !== this.a.size) {
          try {
            for (
              var n = A(this.a.values()), r = n.next();
              !r.done;
              r = n.next()
            ) {
              r.value.cancel();
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          this.a.clear();
        }
      }),
        (Ln.prototype.stringify = function (t) {
          return O.JSON.stringify(t, void 0);
        }),
        (Ln.prototype.parse = function (t) {
          return O.JSON.parse(t, void 0);
        });
      var Dn = O.JSON.parse;
      function Sn(t) {
        jt.call(this),
          (this.headers = new He()),
          (this.H = t || null),
          (this.b = !1),
          (this.s = this.a = null),
          (this.B = ''),
          (this.h = 0),
          (this.f = ''),
          (this.g = this.A = this.l = this.u = !1),
          (this.o = 0),
          (this.m = null),
          (this.I = kn),
          (this.D = this.F = !1);
      }
      j(Sn, jt);
      var kn = '',
        Cn = /^https?$/i,
        Pn = ['POST', 'PUT'];
      function Vn(t) {
        return 'content-type' == t.toLowerCase();
      }
      function xn(t, e) {
        (t.b = !1),
          t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
          (t.f = e),
          (t.h = 5),
          Un(t),
          jn(t);
      }
      function Un(t) {
        t.u || ((t.u = !0), qt(t, 'complete'), qt(t, 'error'));
      }
      function Mn(t) {
        if (t.b && void 0 !== L && (!t.s[1] || 4 != Fn(t) || 2 != t.W()))
          if (t.l && 4 == Fn(t)) te(t.za, 0, t);
          else if ((qt(t, 'readystatechange'), 4 == Fn(t))) {
            t.b = !1;
            try {
              var e,
                n,
                r,
                i,
                o = t.W();
              t: switch (o) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var s = !0;
                  break t;
                default:
                  s = !1;
              }
              (e = s) ||
                ((n = 0 === o) &&
                  (!(i = String(t.B).match(Ye)[1] || null) &&
                    O.self &&
                    O.self.location &&
                    (i = (r = O.self.location.protocol).substr(
                      0,
                      r.length - 1
                    )),
                  (n = !Cn.test(i ? i.toLowerCase() : ''))),
                (e = n));
              if (e) qt(t, 'complete'), qt(t, 'success');
              else {
                t.h = 6;
                try {
                  var u = 2 < Fn(t) ? t.a.statusText : '';
                } catch (o) {
                  u = '';
                }
                (t.f = u + ' [' + t.W() + ']'), Un(t);
              }
            } finally {
              jn(t);
            }
          }
      }
      function jn(t, e) {
        if (t.a) {
          qn(t);
          var n = t.a,
            r = t.s[0] ? R : null;
          (t.a = null), (t.s = null), e || qt(t, 'ready');
          try {
            n.onreadystatechange = r;
          } catch (t) {}
        }
      }
      function qn(t) {
        t.a && t.D && (t.a.ontimeout = null),
          t.m && (O.clearTimeout(t.m), (t.m = null));
      }
      function Fn(t) {
        return t.a ? t.a.readyState : 0;
      }
      function Bn(t, e, n) {
        t: {
          for (r in n) {
            var r = !1;
            break t;
          }
          r = !0;
        }
        var i;
        r ||
          ((i = ''),
          Z(n, function (t, e) {
            (i += e), (i += ':'), (i += t), (i += '\r\n');
          }),
          (n = i),
          'string' == typeof t
            ? null != n && encodeURIComponent(String(n))
            : en(t, e, n));
      }
      function Gn(t, e, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[t]) || e
        );
      }
      function zn(t) {
        (this.pa = 0),
          (this.g = []),
          (this.c = new fe()),
          (this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null),
          (this.Oa = this.R = 0),
          (this.La = Gn('failFast', !1, t)),
          (this.H = this.m = this.j = this.h = this.f = null),
          (this.S = !0),
          (this.I = this.oa = this.P = -1),
          (this.T = this.o = this.u = 0),
          (this.Ha = Gn('baseRetryDelayMs', 5e3, t)),
          (this.Ra = Gn('retryDelaySeedMs', 1e4, t)),
          (this.Ma = Gn('forwardChannelMaxRetries', 2, t)),
          (this.ma = Gn('forwardChannelRequestTimeoutMs', 2e4, t)),
          (this.Na = (t && t.g) || void 0),
          (this.D = void 0),
          (this.C = (t && t.supportsCrossDomainXhr) || !1),
          (this.J = ''),
          (this.b = new wn(t && t.concurrentRequestLimit)),
          (this.ka = new On()),
          (this.da = (t && t.fastHandshake) || !1),
          (this.Ia = (t && t.b) || !1),
          t && t.f && (this.c.a = !1),
          t && t.forceLongPolling && (this.S = !1),
          (this.U = (!this.da && this.S && t && t.detectBufferingProxy) || !1),
          (this.ea = void 0),
          (this.N = 0),
          (this.F = !1),
          (this.s = null),
          (this.Ka = (t && t.c) || !1) &&
            this.c.info('Opt-in to enable Chrome Origin Trials.');
      }
      function Hn(t) {
        var e, n;
        Wn(t),
          3 == t.v &&
            ((e = t.R++),
            en((n = Qe(t.B)), 'SID', t.J),
            en(n, 'RID', e),
            en(n, 'TYPE', 'terminate'),
            Zn(t, n),
            ((e = new Se(t, t.c, e, void 0)).H = 2),
            (e.i = nn(Qe(n))),
            (n = !1),
            O.navigator &&
              O.navigator.sendBeacon &&
              (n = O.navigator.sendBeacon(e.i.toString(), '')),
            !n && O.Image && ((new Image().src = e.i), (n = !0)),
            n || ((e.a = cr(e.g, null)), e.a.ba(e.i)),
            (e.u = M()),
            Me(e)),
          ur(t);
      }
      function Kn(t) {
        t.a && (er(t), t.a.cancel(), (t.a = null));
      }
      function Wn(t) {
        Kn(t),
          t.j && (O.clearTimeout(t.j), (t.j = null)),
          rr(t),
          t.b.cancel(),
          t.h && ('number' == typeof t.h && O.clearTimeout(t.h), (t.h = null));
      }
      function Yn(t, e) {
        t.g.push(new mn(t.Oa++, e)), 3 == t.v && Xn(t);
      }
      function Xn(t) {
        En(t.b) || t.h || ((t.h = !0), Yt(t.Ba, t), (t.u = 0));
      }
      function Qn(t, e) {
        var n = e ? e.f : t.R++,
          r = Qe(t.B);
        en(r, 'SID', t.J),
          en(r, 'RID', n),
          en(r, 'AID', t.P),
          Zn(t, r),
          t.i && t.l && Bn(r, t.i, t.l),
          (n = new Se(t, t.c, n, t.u + 1)),
          null === t.i && (n.B = t.l),
          e && (t.g = e.s.concat(t.g)),
          (e = Jn(t, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * t.ma) + Math.round(0.5 * t.ma * Math.random())
          ),
          An(t.b, n),
          Ve(n, r, e);
      }
      function Zn(t, n) {
        t.f &&
          ze({}, function (t, e) {
            en(n, e, t);
          });
      }
      function Jn(t, e, n) {
        n = Math.min(t.g.length, n);
        var r = t.f ? x(t.f.Ja, t.f, t) : null;
        t: for (var i = t.g, o = -1; ; ) {
          var s = ['count=' + n];
          -1 == o
            ? 0 < n
              ? ((o = i[0].b), s.push('ofs=' + o))
              : (o = 0)
            : s.push('ofs=' + o);
          for (var u = !0, a = 0; a < n; a++) {
            var c = i[a].b,
              h = i[a].a;
            if ((c -= o) < 0) (o = Math.max(0, i[a].b - 100)), (u = !1);
            else
              try {
                !(function (t, r, e) {
                  var i = e || '';
                  try {
                    ze(t, function (t, e) {
                      var n = t;
                      S(t) && (n = Bt(t)),
                        r.push(i + e + '=' + encodeURIComponent(n));
                    });
                  } catch (t) {
                    throw (
                      (r.push(i + 'type=' + encodeURIComponent('_badmap')), t)
                    );
                  }
                })(h, s, 'req' + c + '_');
              } catch (t) {
                r && r(h);
              }
          }
          if (u) {
            r = s.join('&');
            break t;
          }
        }
        return (t = t.g.splice(0, n)), (e.s = t), r;
      }
      function $n(t) {
        t.a || t.j || ((t.T = 1), Yt(t.Aa, t), (t.o = 0));
      }
      function tr(t) {
        return (
          !(t.a || t.j || 3 <= t.o) &&
          (t.T++, (t.j = Ee(x(t.Aa, t), or(t, t.o))), t.o++, 1)
        );
      }
      function er(t) {
        null != t.s && (O.clearTimeout(t.s), (t.s = null));
      }
      function nr(t) {
        (t.a = new Se(t, t.c, 'rpc', t.T)),
          null === t.i && (t.a.B = t.l),
          (t.a.O = 0);
        var e = Qe(t.la);
        en(e, 'RID', 'rpc'),
          en(e, 'SID', t.J),
          en(e, 'CI', t.H ? '0' : '1'),
          en(e, 'AID', t.P),
          Zn(t, e),
          en(e, 'TYPE', 'xmlhttp'),
          t.i && t.l && Bn(e, t.i, t.l),
          t.D && t.a.setTimeout(t.D);
        var n = t.a;
        (t = t.ga),
          (n.H = 1),
          (n.i = nn(Qe(e))),
          (n.j = null),
          (n.I = !0),
          xe(n, t);
      }
      function rr(t) {
        null != t.m && (O.clearTimeout(t.m), (t.m = null));
      }
      function ir(t, e) {
        var n,
          r = null;
        if (t.a == e) {
          rr(t), er(t), (t.a = null);
          var i = 2;
        } else {
          if (!Tn(t.b, e)) return;
          (r = e.s), In(t.b, e), (i = 1);
        }
        if (((t.I = e.N), 0 != t.v))
          if (e.b) {
            1 == i
              ? ((r = e.j ? e.j.length : 0),
                (e = M() - e.u),
                (n = t.u),
                qt((i = ye()), new be(i)),
                Xn(t))
              : $n(t);
          } else if (
            3 == (n = e.h) ||
            (0 == n && 0 < t.I) ||
            !(
              (1 == i &&
                (function (t, e) {
                  if (!(_n(t.b) >= t.b.f - (t.h ? 1 : 0))) {
                    if (t.h) return (t.g = e.s.concat(t.g)), 1;
                    if (!(1 == t.v || 2 == t.v || t.u >= (t.La ? 0 : t.Ma)))
                      return (t.h = Ee(x(t.Ba, t, e), or(t, t.u))), t.u++, 1;
                  }
                })(t, e)) ||
              (2 == i && tr(t))
            )
          )
            switch (
              (r && 0 < r.length && ((e = t.b), (e.c = e.c.concat(r))), n)
            ) {
              case 1:
                sr(t, 5);
                break;
              case 4:
                sr(t, 10);
                break;
              case 3:
                sr(t, 6);
                break;
              default:
                sr(t, 2);
            }
      }
      function or(t, e) {
        var n = t.Ha + Math.floor(Math.random() * t.Ra);
        return t.f || (n *= 2), n * e;
      }
      function sr(t, e) {
        var n, r, i, o;
        t.c.info('Error code ' + e),
          2 == e
            ? ((r = null),
              t.f && (r = null),
              (o = x(t.Ya, t)),
              r ||
                ((r = new Xe('//www.google.com/images/cleardot.gif')),
                (O.location && 'http' == O.location.protocol) || Ze(r, 'https'),
                nn(r)),
              (n = r.toString()),
              (r = o),
              (o = new fe()),
              O.Image
                ? (((i = new Image()).onload = U(
                    Rn,
                    o,
                    i,
                    'TestLoadImage: loaded',
                    !0,
                    r
                  )),
                  (i.onerror = U(Rn, o, i, 'TestLoadImage: error', !1, r)),
                  (i.onabort = U(Rn, o, i, 'TestLoadImage: abort', !1, r)),
                  (i.ontimeout = U(Rn, o, i, 'TestLoadImage: timeout', !1, r)),
                  O.setTimeout(function () {
                    i.ontimeout && i.ontimeout();
                  }, 1e4),
                  (i.src = n))
                : r(!1))
            : we(2),
          (t.v = 0),
          t.f && t.f.ra(e),
          ur(t),
          Wn(t);
      }
      function ur(t) {
        (t.v = 0),
          (t.I = -1),
          t.f &&
            ((0 == Nn(t.b).length && 0 == t.g.length) ||
              ((t.b.c.length = 0), z(t.g), (t.g.length = 0)),
            t.f.qa());
      }
      function ar(t, e, n) {
        var r,
          i,
          o,
          s,
          u,
          a = (s = n) instanceof Xe ? Qe(s) : new Xe(s, void 0);
        return (
          '' != a.c
            ? (e && Je(a, e + '.' + a.c), $e(a, a.h))
            : ((u = O.location),
              (r = u.protocol),
              (i = e ? e + '.' + u.hostname : u.hostname),
              (o = +u.port),
              (s = n),
              (u = new Xe(null, void 0)),
              r && Ze(u, r),
              i && Je(u, i),
              o && $e(u, o),
              s && (u.g = s),
              (a = u)),
          t.V &&
            Z(t.V, function (t, e) {
              en(a, e, t);
            }),
          (e = t.A),
          (n = t.na),
          e && n && en(a, e, n),
          en(a, 'VER', t.ha),
          Zn(t, a),
          a
        );
      }
      function cr(t, e) {
        if (e && !t.C)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return ((e = new Sn(t.Na)).F = t.C), e;
      }
      function hr() {}
      function fr() {
        if (it && !(10 <= Number(dt)))
          throw Error('Environmental error: no available transport.');
      }
      function lr(t, e) {
        jt.call(this),
          (this.a = new zn(e)),
          (this.o = t),
          (this.b = (e && e.messageUrlParams) || null),
          (t = (e && e.messageHeaders) || null),
          e &&
            e.clientProtocolHeaderRequired &&
            (t
              ? (t['X-Client-Protocol'] = 'webchannel')
              : (t = { 'X-Client-Protocol': 'webchannel' })),
          (this.a.l = t),
          (t = (e && e.initMessageHeaders) || null),
          e &&
            e.messageContentType &&
            (t
              ? (t['X-WebChannel-Content-Type'] = e.messageContentType)
              : (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
          e &&
            e.a &&
            (t
              ? (t['X-WebChannel-Client-Profile'] = e.a)
              : (t = { 'X-WebChannel-Client-Profile': e.a })),
          (this.a.O = t),
          (t = e && e.httpHeadersOverwriteParam) && !H(t) && (this.a.i = t),
          (this.m = (e && e.supportsCrossDomainXhr) || !1),
          (this.l = (e && e.sendRawJson) || !1),
          (e = e && e.httpSessionIdParam) &&
            !H(e) &&
            ((this.a.A = e),
            null !== (t = this.b) &&
              e in t &&
              e in (t = this.b) &&
              delete t[e]),
          (this.f = new yr(this));
      }
      function pr(t) {
        Oe.call(this);
        var e = t.__sm__;
        if (e) {
          t: {
            for (var n in e) {
              t = n;
              break t;
            }
            t = void 0;
          }
          (this.c = t)
            ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
            : (this.data = e);
        } else this.data = t;
      }
      function dr() {
        Re.call(this), (this.status = 1);
      }
      function yr(t) {
        this.a = t;
      }
      ((I = Sn.prototype).ba = function (t, e, n, r) {
        if (this.a)
          throw Error(
            '[goog.net.XhrIo] Object is active with another request=' +
              this.B +
              '; newUri=' +
              t
          );
        (e = e ? e.toUpperCase() : 'GET'),
          (this.B = t),
          (this.f = ''),
          (this.h = 0),
          (this.u = !1),
          (this.b = !0),
          (this.a = new XMLHttpRequest()),
          (this.s = this.H ? Ie(this.H) : Ie(Le)),
          (this.a.onreadystatechange = x(this.za, this));
        try {
          (this.A = !0), this.a.open(e, String(t), !0), (this.A = !1);
        } catch (t) {
          return void xn(this, t);
        }
        t = n || '';
        var i,
          o = new He(this.headers);
        r &&
          ze(r, function (t, e) {
            o.set(e, t);
          }),
          (r = (function (t) {
            t: {
              for (
                var e = Vn,
                  n = t.length,
                  r = 'string' == typeof t ? t.split('') : t,
                  i = 0;
                i < n;
                i++
              )
                if (i in r && e.call(void 0, r[i], i, t)) {
                  e = i;
                  break t;
                }
              e = -1;
            }
            return e < 0 ? null : 'string' == typeof t ? t.charAt(e) : t[e];
          })(o.L())),
          (n = O.FormData && t instanceof O.FormData),
          0 <= F(Pn, e) &&
            !r &&
            !n &&
            o.set(
              'Content-Type',
              'application/x-www-form-urlencoded;charset=utf-8'
            ),
          o.forEach(function (t, e) {
            this.a.setRequestHeader(e, t);
          }, this),
          this.I && (this.a.responseType = this.I),
          'withCredentials' in this.a &&
            this.a.withCredentials !== this.F &&
            (this.a.withCredentials = this.F);
        try {
          qn(this),
            0 < this.o &&
              ((this.D =
                ((i = this.a),
                it &&
                  pt(9) &&
                  'number' == typeof i.timeout &&
                  void 0 !== i.ontimeout))
                ? ((this.a.timeout = this.o),
                  (this.a.ontimeout = x(this.xa, this)))
                : (this.m = te(this.xa, this.o, this))),
            (this.l = !0),
            this.a.send(t),
            (this.l = !1);
        } catch (t) {
          xn(this, t);
        }
      }),
        (I.xa = function () {
          void 0 !== L &&
            this.a &&
            ((this.f = 'Timed out after ' + this.o + 'ms, aborting'),
            (this.h = 8),
            qt(this, 'timeout'),
            this.abort(8));
        }),
        (I.abort = function (t) {
          this.a &&
            this.b &&
            ((this.b = !1),
            (this.g = !0),
            this.a.abort(),
            (this.g = !1),
            (this.h = t || 7),
            qt(this, 'complete'),
            qt(this, 'abort'),
            jn(this));
        }),
        (I.G = function () {
          this.a &&
            (this.b &&
              ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
            jn(this, !0)),
            Sn.X.G.call(this);
        }),
        (I.za = function () {
          this.j || (this.A || this.l || this.g ? Mn(this) : this.Ua());
        }),
        (I.Ua = function () {
          Mn(this);
        }),
        (I.W = function () {
          try {
            return 2 < Fn(this) ? this.a.status : -1;
          } catch (t) {
            return -1;
          }
        }),
        (I.$ = function () {
          try {
            return this.a ? this.a.responseText : '';
          } catch (t) {
            return '';
          }
        }),
        (I.Pa = function (t) {
          if (this.a) {
            var e = this.a.responseText;
            return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Dn(e);
          }
        }),
        (I.ua = function () {
          return this.h;
        }),
        (I.Qa = function () {
          return 'string' == typeof this.f ? this.f : String(this.f);
        }),
        ((I = zn.prototype).ha = 8),
        (I.v = 1),
        (I.Ba = function (t) {
          if (this.h)
            if (((this.h = null), 1 == this.v)) {
              if (!t) {
                (this.R = Math.floor(1e5 * Math.random())), (t = this.R++);
                var e,
                  n = new Se(this, this.c, t, void 0),
                  r = this.l;
                if (
                  (this.O && (r ? tt((r = J(r)), this.O) : (r = this.O)),
                  null === this.i && (n.B = r),
                  this.da)
                )
                  t: {
                    for (var i = (e = 0); i < this.g.length; i++) {
                      var o = this.g[i];
                      if (
                        ('__data__' in o.a &&
                        'string' == typeof (o = o.a.__data__)
                          ? (o = o.length)
                          : (o = void 0),
                        void 0 === o)
                      )
                        break;
                      if (4096 < (e += o)) {
                        e = i;
                        break t;
                      }
                      if (4096 === e || i === this.g.length - 1) {
                        e = i + 1;
                        break t;
                      }
                    }
                    e = 1e3;
                  }
                else e = 1e3;
                (e = Jn(this, n, e)),
                  en((i = Qe(this.B)), 'RID', t),
                  en(i, 'CVER', 22),
                  this.A && en(i, 'X-HTTP-Session-Id', this.A),
                  Zn(this, i),
                  this.i && r && Bn(i, this.i, r),
                  An(this.b, n),
                  this.Ia && en(i, 'TYPE', 'init'),
                  this.da
                    ? (en(i, '$req', e),
                      en(i, 'SID', 'null'),
                      (n.U = !0),
                      Ve(n, i, null))
                    : Ve(n, i, e),
                  (this.v = 2);
              }
            } else
              3 == this.v &&
                (t
                  ? Qn(this, t)
                  : 0 == this.g.length || En(this.b) || Qn(this));
        }),
        (I.Aa = function () {
          var t;
          (this.j = null),
            nr(this),
            this.U &&
              !(this.F || null == this.a || this.N <= 0) &&
              ((t = 2 * this.N),
              this.c.info('BP detection timer enabled: ' + t),
              (this.s = Ee(x(this.Ta, this), t)));
        }),
        (I.Ta = function () {
          this.s &&
            ((this.s = null),
            this.c.info('BP detection timeout reached.'),
            this.c.info('Buffering proxy detected and switch to long-polling!'),
            (this.H = !1),
            (this.F = !0),
            we(10),
            Kn(this),
            nr(this));
        }),
        (I.Sa = function () {
          null != this.m && ((this.m = null), Kn(this), tr(this), we(19));
        }),
        (I.Ya = function (t) {
          t
            ? (this.c.info('Successfully pinged google.com'), we(2))
            : (this.c.info('Failed to ping google.com'), we(1));
        }),
        ((I = hr.prototype).ta = function () {}),
        (I.sa = function () {}),
        (I.ra = function () {}),
        (I.qa = function () {}),
        (I.Ja = function () {}),
        (fr.prototype.a = function (t, e) {
          return new lr(t, e);
        }),
        j(lr, jt),
        (lr.prototype.g = function () {
          (this.a.f = this.f), this.m && (this.a.C = !0);
          var t = this.a,
            e = this.o,
            n = this.b || void 0;
          we(0),
            (t.fa = e),
            (t.V = n || {}),
            (t.H = t.S),
            (t.B = ar(t, null, t.fa)),
            Xn(t);
        }),
        (lr.prototype.close = function () {
          Hn(this.a);
        }),
        (lr.prototype.h = function (t) {
          var e;
          'string' == typeof t
            ? (((e = {}).__data__ = t), Yn(this.a, e))
            : this.l
            ? (((e = {}).__data__ = Bt(t)), Yn(this.a, e))
            : Yn(this.a, t);
        }),
        (lr.prototype.G = function () {
          (this.a.f = null),
            delete this.f,
            Hn(this.a),
            delete this.a,
            lr.X.G.call(this);
        }),
        j(pr, Oe),
        j(dr, Re),
        j(yr, hr),
        (yr.prototype.ta = function () {
          qt(this.a, 'a');
        }),
        (yr.prototype.sa = function (t) {
          qt(this.a, new pr(t));
        }),
        (yr.prototype.ra = function (t) {
          qt(this.a, new dr());
        }),
        (yr.prototype.qa = function () {
          qt(this.a, 'b');
        }),
        (fr.prototype.createWebChannel = fr.prototype.a),
        (lr.prototype.send = lr.prototype.h),
        (lr.prototype.open = lr.prototype.g),
        (_e.NO_ERROR = 0),
        (_e.TIMEOUT = 8),
        (_e.HTTP_ERROR = 6),
        (Te.COMPLETE = 'complete'),
        ((Ne.EventType = N).OPEN = 'a'),
        (N.CLOSE = 'b'),
        (N.ERROR = 'c'),
        (N.MESSAGE = 'd'),
        (jt.prototype.listen = jt.prototype.va),
        (Sn.prototype.listenOnce = Sn.prototype.wa),
        (Sn.prototype.getLastError = Sn.prototype.Qa),
        (Sn.prototype.getLastErrorCode = Sn.prototype.ua),
        (Sn.prototype.getStatus = Sn.prototype.W),
        (Sn.prototype.getResponseJson = Sn.prototype.Pa),
        (Sn.prototype.getResponseText = Sn.prototype.$),
        (Sn.prototype.send = Sn.prototype.ba);
      var vr,
        gr = ye,
        mr = _e,
        wr = Te,
        br = pe,
        Er = 10,
        _r = 11,
        Tr = Ne,
        Ar = Sn,
        Ir = {
          OK: 'ok',
          CANCELLED: 'cancelled',
          UNKNOWN: 'unknown',
          INVALID_ARGUMENT: 'invalid-argument',
          DEADLINE_EXCEEDED: 'deadline-exceeded',
          NOT_FOUND: 'not-found',
          ALREADY_EXISTS: 'already-exists',
          PERMISSION_DENIED: 'permission-denied',
          UNAUTHENTICATED: 'unauthenticated',
          RESOURCE_EXHAUSTED: 'resource-exhausted',
          FAILED_PRECONDITION: 'failed-precondition',
          ABORTED: 'aborted',
          OUT_OF_RANGE: 'out-of-range',
          UNIMPLEMENTED: 'unimplemented',
          INTERNAL: 'internal',
          UNAVAILABLE: 'unavailable',
          DATA_LOSS: 'data-loss'
        },
        Nr = (f(Or, (vr = Error)), Or),
        Lr = new o('@firebase/firestore');
      function Or(t, e) {
        var n = this;
        return (
          ((n = vr.call(this, e) || this).code = t),
          (n.message = e),
          (n.name = 'FirebaseError'),
          (n.toString = function () {
            return n.name + ': [code=' + n.code + ']: ' + n.message;
          }),
          n
        );
      }
      function Rr() {
        return Lr.logLevel;
      }
      function Dr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Lr.logLevel <= u.DEBUG &&
          ((e = n.map(Cr)),
          Lr.debug.apply(Lr, l(['Firestore (8.1.1): ' + t], e)));
      }
      function Sr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Lr.logLevel <= u.ERROR &&
          ((e = n.map(Cr)),
          Lr.error.apply(Lr, l(['Firestore (8.1.1): ' + t], e)));
      }
      function kr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        Lr.logLevel <= u.WARN &&
          ((e = n.map(Cr)),
          Lr.warn.apply(Lr, l(['Firestore (8.1.1): ' + t], e)));
      }
      function Cr(e) {
        if ('string' == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function Pr(t) {
        void 0 === t && (t = 'Unexpected state');
        t = 'FIRESTORE (8.1.1) INTERNAL ASSERTION FAILED: ' + t;
        throw (Sr(t), new Error(t));
      }
      function Vr(t) {
        t || Pr();
      }
      var xr =
        ((Ur.t = function () {
          for (
            var t =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              e = Math.floor(256 / t.length) * t.length,
              n = '';
            n.length < 20;

          )
            for (
              var r = (function (t) {
                  var e =
                      'undefined' != typeof self &&
                      (self.crypto || self.msCrypto),
                    n = new Uint8Array(t);
                  if (e && 'function' == typeof e.getRandomValues)
                    e.getRandomValues(n);
                  else
                    for (var r = 0; r < t; r++)
                      n[r] = Math.floor(256 * Math.random());
                  return n;
                })(40),
                i = 0;
              i < r.length;
              ++i
            )
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          return n;
        }),
        Ur);
      function Ur() {}
      function Mr(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      function jr(t, n, r) {
        return (
          t.length === n.length &&
          t.every(function (t, e) {
            return r(t, n[e]);
          })
        );
      }
      var qr =
        ((Fr.fromBase64String = function (t) {
          return new Fr(atob(t));
        }),
        (Fr.fromUint8Array = function (t) {
          return new Fr(
            (function (t) {
              for (var e = '', n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(t)
          );
        }),
        (Fr.prototype.toBase64 = function () {
          return (t = this.i), btoa(t);
          var t;
        }),
        (Fr.prototype.toUint8Array = function () {
          return (function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.i);
        }),
        (Fr.prototype.o = function () {
          return 2 * this.i.length;
        }),
        (Fr.prototype.u = function (t) {
          return Mr(this.i, t.i);
        }),
        (Fr.prototype.isEqual = function (t) {
          return this.i === t.i;
        }),
        Fr);
      function Fr(t) {
        this.i = t;
      }
      qr.h = new qr('');
      var Br =
          ((zr.fromBase64String = function (t) {
            try {
              return new zr(qr.fromBase64String(t));
            } catch (t) {
              throw new Nr(
                Ir.INVALID_ARGUMENT,
                'Failed to construct data from Base64 string: ' + t
              );
            }
          }),
          (zr.fromUint8Array = function (t) {
            return new zr(qr.fromUint8Array(t));
          }),
          (zr.prototype.toBase64 = function () {
            return this.l.toBase64();
          }),
          (zr.prototype.toUint8Array = function () {
            return this.l.toUint8Array();
          }),
          (zr.prototype.toString = function () {
            return 'Bytes(base64: ' + this.toBase64() + ')';
          }),
          (zr.prototype.isEqual = function (t) {
            return this.l.isEqual(t.l);
          }),
          zr),
        Gr = function (t) {
          this._ = t;
        };
      function zr(t) {
        this.l = t;
      }
      function Hr() {
        if ('undefined' == typeof Uint8Array)
          throw new Nr(
            Ir.UNIMPLEMENTED,
            'Uint8Arrays are not available in this environment.'
          );
      }
      function Kr() {
        if ('undefined' == typeof atob)
          throw new Nr(
            Ir.UNIMPLEMENTED,
            'Blobs are unavailable in Firestore in this environment.'
          );
      }
      var Wr,
        Yr =
          (f(ti, (Wr = Gr)),
          (ti.fromBase64String = function (t) {
            return Kr(), new ti(Br.fromBase64String(t));
          }),
          (ti.fromUint8Array = function (t) {
            return Hr(), new ti(Br.fromUint8Array(t));
          }),
          (ti.prototype.toBase64 = function () {
            return Kr(), this._.toBase64();
          }),
          (ti.prototype.toUint8Array = function () {
            return Hr(), this._.toUint8Array();
          }),
          (ti.prototype.isEqual = function (t) {
            return this._.isEqual(t._);
          }),
          (ti.prototype.toString = function () {
            return 'Blob(base64: ' + this.toBase64() + ')';
          }),
          ti),
        Xr = function (t, e, n, r, i, o) {
          (this.T = t),
            (this.persistenceKey = e),
            (this.host = n),
            (this.ssl = r),
            (this.forceLongPolling = i),
            (this.m = o);
        },
        Qr =
          (Object.defineProperty($r.prototype, 'I', {
            get: function () {
              return '(default)' === this.database;
            },
            enumerable: !1,
            configurable: !0
          }),
          ($r.prototype.isEqual = function (t) {
            return (
              t instanceof $r &&
              t.projectId === this.projectId &&
              t.database === this.database
            );
          }),
          $r),
        Zr =
          ((Jr.prototype.A = function () {
            return null != this.uid;
          }),
          (Jr.prototype.R = function () {
            return this.A() ? 'uid:' + this.uid : 'anonymous-user';
          }),
          (Jr.prototype.isEqual = function (t) {
            return t.uid === this.uid;
          }),
          Jr);
      function Jr(t) {
        this.uid = t;
      }
      function $r(t, e) {
        (this.projectId = t), (this.database = e || '(default)');
      }
      function ti() {
        return (null !== Wr && Wr.apply(this, arguments)) || this;
      }
      (Zr.UNAUTHENTICATED = new Zr(null)),
        (Zr.P = new Zr('google-credentials-uid')),
        (Zr.g = new Zr('first-party-uid'));
      function ei(t, e) {
        (this.user = e),
          (this.type = 'OAuth'),
          (this.V = {}),
          (this.V.Authorization = 'Bearer ' + t);
      }
      var ni,
        ri,
        ii =
          ((Ti.prototype.getToken = function () {
            return Promise.resolve(null);
          }),
          (Ti.prototype.v = function () {}),
          (Ti.prototype.S = function (t) {
            (this.p = t)(Zr.UNAUTHENTICATED);
          }),
          (Ti.prototype.D = function () {
            this.p = null;
          }),
          Ti),
        oi =
          ((_i.prototype.getToken = function () {
            var e = this,
              n = this.F,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth.getToken(t).then(function (t) {
                    return e.F !== n
                      ? (Dr(
                          'FirebaseCredentialsProvider',
                          'getToken aborted due to token change.'
                        ),
                        e.getToken())
                      : t
                      ? (Vr('string' == typeof t.accessToken),
                        new ei(t.accessToken, e.currentUser))
                      : null;
                  })
                : Promise.resolve(null)
            );
          }),
          (_i.prototype.v = function () {
            this.forceRefresh = !0;
          }),
          (_i.prototype.S = function (t) {
            (this.p = t), this.N && t(this.currentUser);
          }),
          (_i.prototype.D = function () {
            this.auth && this.auth.removeAuthTokenListener(this.C),
              (this.C = null),
              (this.p = null);
          }),
          (_i.prototype.O = function () {
            var t = this.auth && this.auth.getUid();
            return Vr(null === t || 'string' == typeof t), new Zr(t);
          }),
          _i),
        si =
          (Object.defineProperty(Ei.prototype, 'V', {
            get: function () {
              var t = { 'X-Goog-AuthUser': this.M },
                e = this.k.auth.getAuthHeaderValueForFirstParty([]);
              return e && (t.Authorization = e), t;
            },
            enumerable: !1,
            configurable: !0
          }),
          Ei),
        ui =
          ((bi.prototype.getToken = function () {
            return Promise.resolve(new si(this.k, this.M));
          }),
          (bi.prototype.S = function (t) {
            t(Zr.g);
          }),
          (bi.prototype.D = function () {}),
          (bi.prototype.v = function () {}),
          bi),
        ai =
          ((wi.now = function () {
            return wi.fromMillis(Date.now());
          }),
          (wi.fromDate = function (t) {
            return wi.fromMillis(t.getTime());
          }),
          (wi.fromMillis = function (t) {
            var e = Math.floor(t / 1e3);
            return new wi(e, 1e6 * (t - 1e3 * e));
          }),
          (wi.prototype.toDate = function () {
            return new Date(this.toMillis());
          }),
          (wi.prototype.toMillis = function () {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }),
          (wi.prototype.L = function (t) {
            return this.seconds === t.seconds
              ? Mr(this.nanoseconds, t.nanoseconds)
              : Mr(this.seconds, t.seconds);
          }),
          (wi.prototype.isEqual = function (t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }),
          (wi.prototype.toString = function () {
            return (
              'Timestamp(seconds=' +
              this.seconds +
              ', nanoseconds=' +
              this.nanoseconds +
              ')'
            );
          }),
          (wi.prototype.toJSON = function () {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }),
          (wi.prototype.valueOf = function () {
            var t = this.seconds - -62135596800;
            return (
              String(t).padStart(12, '0') +
              '.' +
              String(this.nanoseconds).padStart(9, '0')
            );
          }),
          wi),
        ci =
          ((mi.$ = function (t) {
            return new mi(t);
          }),
          (mi.min = function () {
            return new mi(new ai(0, 0));
          }),
          (mi.prototype.u = function (t) {
            return this.timestamp.L(t.timestamp);
          }),
          (mi.prototype.isEqual = function (t) {
            return this.timestamp.isEqual(t.timestamp);
          }),
          (mi.prototype.B = function () {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }),
          (mi.prototype.toString = function () {
            return 'SnapshotVersion(' + this.timestamp.toString() + ')';
          }),
          (mi.prototype.q = function () {
            return this.timestamp;
          }),
          mi),
        _e =
          (Object.defineProperty(gi.prototype, 'length', {
            get: function () {
              return this.U;
            },
            enumerable: !1,
            configurable: !0
          }),
          (gi.prototype.isEqual = function (t) {
            return 0 === gi.K(this, t);
          }),
          (gi.prototype.child = function (t) {
            var e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof gi
                ? t.forEach(function (t) {
                    e.push(t);
                  })
                : e.push(t),
              this.W(e)
            );
          }),
          (gi.prototype.limit = function () {
            return this.offset + this.length;
          }),
          (gi.prototype.j = function (t) {
            return (
              (t = void 0 === t ? 1 : t),
              this.W(this.segments, this.offset + t, this.length - t)
            );
          }),
          (gi.prototype.G = function () {
            return this.W(this.segments, this.offset, this.length - 1);
          }),
          (gi.prototype.H = function () {
            return this.segments[this.offset];
          }),
          (gi.prototype.J = function () {
            return this.get(this.length - 1);
          }),
          (gi.prototype.get = function (t) {
            return this.segments[this.offset + t];
          }),
          (gi.prototype.Y = function () {
            return 0 === this.length;
          }),
          (gi.prototype.X = function (t) {
            if (t.length < this.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (gi.prototype.Z = function (t) {
            if (this.length + 1 !== t.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (gi.prototype.forEach = function (t) {
            for (var e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }),
          (gi.prototype.tt = function () {
            return this.segments.slice(this.offset, this.limit());
          }),
          (gi.K = function (t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
              var i = t.get(r),
                o = e.get(r);
              if (i < o) return -1;
              if (o < i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }),
          gi),
        hi =
          (f(vi, (ri = _e)),
          (vi.prototype.W = function (t, e, n) {
            return new vi(t, e, n);
          }),
          (vi.prototype.et = function () {
            return this.tt().join('/');
          }),
          (vi.prototype.toString = function () {
            return this.et();
          }),
          (vi.nt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            for (var n = [], r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (0 <= o.indexOf('//'))
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid segment (' +
                    o +
                    '). Paths must not contain // in them.'
                );
              n.push.apply(
                n,
                o.split('/').filter(function (t) {
                  return 0 < t.length;
                })
              );
            }
            return new vi(n);
          }),
          (vi.st = function () {
            return new vi([]);
          }),
          vi),
        fi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        li =
          (f(yi, (ni = _e)),
          (yi.prototype.W = function (t, e, n) {
            return new yi(t, e, n);
          }),
          (yi.it = function (t) {
            return fi.test(t);
          }),
          (yi.prototype.et = function () {
            return this.tt()
              .map(function (t) {
                return (
                  (t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
                  yi.it(t) || (t = '`' + t + '`'),
                  t
                );
              })
              .join('.');
          }),
          (yi.prototype.toString = function () {
            return this.et();
          }),
          (yi.prototype.rt = function () {
            return 1 === this.length && '__name__' === this.get(0);
          }),
          (yi.ot = function () {
            return new yi(['__name__']);
          }),
          (yi.ct = function (t) {
            for (
              var e = [],
                n = '',
                r = 0,
                i = function () {
                  if (0 === n.length)
                    throw new Nr(
                      Ir.INVALID_ARGUMENT,
                      'Invalid field path (' +
                        t +
                        "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                    );
                  e.push(n), (n = '');
                },
                o = !1;
              r < t.length;

            ) {
              var s = t[r];
              if ('\\' === s) {
                if (r + 1 === t.length)
                  throw new Nr(
                    Ir.INVALID_ARGUMENT,
                    'Path has trailing escape character: ' + t
                  );
                var u = t[r + 1];
                if ('\\' !== u && '.' !== u && '`' !== u)
                  throw new Nr(
                    Ir.INVALID_ARGUMENT,
                    'Path has invalid escape sequence: ' + t
                  );
                (n += u), (r += 2);
              } else
                '`' === s ? (o = !o) : '.' !== s || o ? (n += s) : i(), r++;
            }
            if ((i(), o))
              throw new Nr(Ir.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
            return new yi(e);
          }),
          (yi.st = function () {
            return new yi([]);
          }),
          yi),
        pi =
          ((di.at = function (t) {
            return new di(hi.nt(t));
          }),
          (di.ut = function (t) {
            return new di(hi.nt(t).j(5));
          }),
          (di.prototype.ht = function (t) {
            return (
              2 <= this.path.length && this.path.get(this.path.length - 2) === t
            );
          }),
          (di.prototype.isEqual = function (t) {
            return null !== t && 0 === hi.K(this.path, t.path);
          }),
          (di.prototype.toString = function () {
            return this.path.toString();
          }),
          (di.K = function (t, e) {
            return hi.K(t.path, e.path);
          }),
          (di.lt = function (t) {
            return t.length % 2 == 0;
          }),
          (di._t = function (t) {
            return new di(new hi(t.slice()));
          }),
          di);
      function di(t) {
        this.path = t;
      }
      function yi() {
        return (null !== ni && ni.apply(this, arguments)) || this;
      }
      function vi() {
        return (null !== ri && ri.apply(this, arguments)) || this;
      }
      function gi(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Pr(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Pr(),
          (this.segments = t),
          (this.offset = e),
          (this.U = n);
      }
      function mi(t) {
        this.timestamp = t;
      }
      function wi(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e) < 0))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e
          );
        if (1e9 <= e)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e
          );
        if (t < -62135596800)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t
          );
        if (253402300800 <= t)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t
          );
      }
      function bi(t, e) {
        (this.k = t), (this.M = e);
      }
      function Ei(t, e) {
        (this.k = t),
          (this.M = e),
          (this.type = 'FirstParty'),
          (this.user = Zr.g);
      }
      function _i(t) {
        var e = this;
        (this.C = null),
          (this.currentUser = Zr.UNAUTHENTICATED),
          (this.N = !1),
          (this.F = 0),
          (this.p = null),
          (this.forceRefresh = !1),
          (this.C = function () {
            e.F++,
              (e.currentUser = e.O()),
              (e.N = !0),
              e.p && e.p(e.currentUser);
          }),
          (this.F = 0),
          (this.auth = t.getImmediate({ optional: !0 })),
          this.auth
            ? this.auth.addAuthTokenListener(this.C)
            : (this.C(null),
              t.get().then(
                function (t) {
                  (e.auth = t), e.C && e.auth.addAuthTokenListener(e.C);
                },
                function () {}
              ));
      }
      function Ti() {
        this.p = null;
      }
      function Ai(t) {
        return null == t;
      }
      function Ii(t) {
        return 0 === t && 1 / t == -1 / 0;
      }
      var Ni = function (t, e, n, r, i, o, s) {
        void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = null),
          void 0 === s && (s = null),
          (this.path = t),
          (this.collectionGroup = e),
          (this.orderBy = n),
          (this.filters = r),
          (this.limit = i),
          (this.startAt = o),
          (this.endAt = s),
          (this.ft = null);
      };
      function Li(t, e, n, r, i, o, s) {
        return (
          void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = null),
          void 0 === s && (s = null),
          new Ni(t, e, n, r, i, o, s)
        );
      }
      function Oi(t) {
        var e = t;
        return (
          null === e.ft &&
            ((t = e.path.et()),
            null !== e.collectionGroup && (t += '|cg:' + e.collectionGroup),
            (t += '|f:'),
            (t += e.filters
              .map(function (t) {
                return (t = t).field.et() + t.op.toString() + So(t.value);
              })
              .join(',')),
            (t += '|ob:'),
            (t += e.orderBy
              .map(function (t) {
                return (t = t).field.et() + t.dir;
              })
              .join(',')),
            Ai(e.limit) || ((t += '|l:'), (t += e.limit)),
            e.startAt && ((t += '|lb:'), (t += ia(e.startAt))),
            e.endAt && ((t += '|ub:'), (t += ia(e.endAt))),
            (e.ft = t)),
          e.ft
        );
      }
      function Ri(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (var n, r, i = 0; i < t.orderBy.length; i++)
          if (
            ((n = t.orderBy[i]),
            (r = e.orderBy[i]),
            n.dir !== r.dir || !n.field.isEqual(r.field))
          )
            return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (var o, s, u = 0; u < t.filters.length; u++)
          if (
            ((o = t.filters[u]),
            (s = e.filters[u]),
            o.op !== s.op || !o.field.isEqual(s.field) || !Lo(o.value, s.value))
          )
            return !1;
        return (
          t.collectionGroup === e.collectionGroup &&
          !!t.path.isEqual(e.path) &&
          !!sa(t.startAt, e.startAt) &&
          sa(t.endAt, e.endAt)
        );
      }
      function Di(t) {
        return (
          pi.lt(t.path) && null === t.collectionGroup && 0 === t.filters.length
        );
      }
      function Si(t) {
        this.count = t;
      }
      var ki,
        Ci =
          ((Pi.prototype.Et = function (t) {
            return new Pi(
              this.target,
              this.targetId,
              this.dt,
              t,
              this.wt,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken
            );
          }),
          (Pi.prototype.Tt = function (t, e) {
            return new Pi(
              this.target,
              this.targetId,
              this.dt,
              this.sequenceNumber,
              e,
              this.lastLimboFreeSnapshotVersion,
              t
            );
          }),
          (Pi.prototype.It = function (t) {
            return new Pi(
              this.target,
              this.targetId,
              this.dt,
              this.sequenceNumber,
              this.wt,
              t,
              this.resumeToken
            );
          }),
          Pi);
      function Pi(t, e, n, r, i, o, s) {
        void 0 === i && (i = ci.min()),
          void 0 === o && (o = ci.min()),
          void 0 === s && (s = qr.h),
          (this.target = t),
          (this.targetId = e),
          (this.dt = n),
          (this.sequenceNumber = r),
          (this.wt = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      function Vi(t) {
        switch (t) {
          case Ir.OK:
            return Pr(), 0;
          case Ir.CANCELLED:
          case Ir.UNKNOWN:
          case Ir.DEADLINE_EXCEEDED:
          case Ir.RESOURCE_EXHAUSTED:
          case Ir.INTERNAL:
          case Ir.UNAVAILABLE:
          case Ir.UNAUTHENTICATED:
            return;
          case Ir.INVALID_ARGUMENT:
          case Ir.NOT_FOUND:
          case Ir.ALREADY_EXISTS:
          case Ir.PERMISSION_DENIED:
          case Ir.FAILED_PRECONDITION:
          case Ir.ABORTED:
          case Ir.OUT_OF_RANGE:
          case Ir.UNIMPLEMENTED:
          case Ir.DATA_LOSS:
            return 1;
          default:
            return Pr(), 0;
        }
      }
      function xi(t) {
        if (void 0 === t) return Sr('GRPC error has no .code'), Ir.UNKNOWN;
        switch (t) {
          case ki.OK:
            return Ir.OK;
          case ki.CANCELLED:
            return Ir.CANCELLED;
          case ki.UNKNOWN:
            return Ir.UNKNOWN;
          case ki.DEADLINE_EXCEEDED:
            return Ir.DEADLINE_EXCEEDED;
          case ki.RESOURCE_EXHAUSTED:
            return Ir.RESOURCE_EXHAUSTED;
          case ki.INTERNAL:
            return Ir.INTERNAL;
          case ki.UNAVAILABLE:
            return Ir.UNAVAILABLE;
          case ki.UNAUTHENTICATED:
            return Ir.UNAUTHENTICATED;
          case ki.INVALID_ARGUMENT:
            return Ir.INVALID_ARGUMENT;
          case ki.NOT_FOUND:
            return Ir.NOT_FOUND;
          case ki.ALREADY_EXISTS:
            return Ir.ALREADY_EXISTS;
          case ki.PERMISSION_DENIED:
            return Ir.PERMISSION_DENIED;
          case ki.FAILED_PRECONDITION:
            return Ir.FAILED_PRECONDITION;
          case ki.ABORTED:
            return Ir.ABORTED;
          case ki.OUT_OF_RANGE:
            return Ir.OUT_OF_RANGE;
          case ki.UNIMPLEMENTED:
            return Ir.UNIMPLEMENTED;
          case ki.DATA_LOSS:
            return Ir.DATA_LOSS;
          default:
            return Pr();
        }
      }
      ((Te = ki = ki || {})[(Te.OK = 0)] = 'OK'),
        (Te[(Te.CANCELLED = 1)] = 'CANCELLED'),
        (Te[(Te.UNKNOWN = 2)] = 'UNKNOWN'),
        (Te[(Te.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
        (Te[(Te.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
        (Te[(Te.NOT_FOUND = 5)] = 'NOT_FOUND'),
        (Te[(Te.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
        (Te[(Te.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
        (Te[(Te.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
        (Te[(Te.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
        (Te[(Te.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
        (Te[(Te.ABORTED = 10)] = 'ABORTED'),
        (Te[(Te.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
        (Te[(Te.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
        (Te[(Te.INTERNAL = 13)] = 'INTERNAL'),
        (Te[(Te.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
        (Te[(Te.DATA_LOSS = 15)] = 'DATA_LOSS');
      var Ui =
          ((Bi.prototype.At = function (t, e) {
            return new Bi(
              this.K,
              this.root.At(t, e, this.K).copy(null, null, ji.Rt, null, null)
            );
          }),
          (Bi.prototype.remove = function (t) {
            return new Bi(
              this.K,
              this.root.remove(t, this.K).copy(null, null, ji.Rt, null, null)
            );
          }),
          (Bi.prototype.get = function (t) {
            for (var e = this.root; !e.Y(); ) {
              var n = this.K(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : 0 < n && (e = e.right);
            }
            return null;
          }),
          (Bi.prototype.indexOf = function (t) {
            for (var e = 0, n = this.root; !n.Y(); ) {
              var r = this.K(t, n.key);
              if (0 === r) return e + n.left.size;
              n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
            }
            return -1;
          }),
          (Bi.prototype.Y = function () {
            return this.root.Y();
          }),
          Object.defineProperty(Bi.prototype, 'size', {
            get: function () {
              return this.root.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Bi.prototype.Pt = function () {
            return this.root.Pt();
          }),
          (Bi.prototype.yt = function () {
            return this.root.yt();
          }),
          (Bi.prototype.gt = function (t) {
            return this.root.gt(t);
          }),
          (Bi.prototype.forEach = function (n) {
            this.gt(function (t, e) {
              return n(t, e), !1;
            });
          }),
          (Bi.prototype.toString = function () {
            var n = [];
            return (
              this.gt(function (t, e) {
                return n.push(t + ':' + e), !1;
              }),
              '{' + n.join(', ') + '}'
            );
          }),
          (Bi.prototype.Vt = function (t) {
            return this.root.Vt(t);
          }),
          (Bi.prototype.bt = function () {
            return new Mi(this.root, null, this.K, !1);
          }),
          (Bi.prototype.vt = function (t) {
            return new Mi(this.root, t, this.K, !1);
          }),
          (Bi.prototype.St = function () {
            return new Mi(this.root, null, this.K, !0);
          }),
          (Bi.prototype.Dt = function (t) {
            return new Mi(this.root, t, this.K, !0);
          }),
          Bi),
        Mi =
          ((Fi.prototype.Nt = function () {
            var t = this.xt.pop(),
              e = { key: t.key, value: t.value };
            if (this.Ct)
              for (t = t.left; !t.Y(); ) this.xt.push(t), (t = t.right);
            else for (t = t.right; !t.Y(); ) this.xt.push(t), (t = t.left);
            return e;
          }),
          (Fi.prototype.Ft = function () {
            return 0 < this.xt.length;
          }),
          (Fi.prototype.Ot = function () {
            if (0 === this.xt.length) return null;
            var t = this.xt[this.xt.length - 1];
            return { key: t.key, value: t.value };
          }),
          Fi),
        ji =
          ((qi.prototype.copy = function (t, e, n, r, i) {
            return new qi(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right
            );
          }),
          (qi.prototype.Y = function () {
            return !1;
          }),
          (qi.prototype.gt = function (t) {
            return (
              this.left.gt(t) || t(this.key, this.value) || this.right.gt(t)
            );
          }),
          (qi.prototype.Vt = function (t) {
            return (
              this.right.Vt(t) || t(this.key, this.value) || this.left.Vt(t)
            );
          }),
          (qi.prototype.min = function () {
            return this.left.Y() ? this : this.left.min();
          }),
          (qi.prototype.Pt = function () {
            return this.min().key;
          }),
          (qi.prototype.yt = function () {
            return this.right.Y() ? this.key : this.right.yt();
          }),
          (qi.prototype.At = function (t, e, n) {
            var r = this,
              i = n(t, r.key);
            return (r =
              i < 0
                ? r.copy(null, null, null, r.left.At(t, e, n), null)
                : 0 === i
                ? r.copy(null, e, null, null, null)
                : r.copy(null, null, null, null, r.right.At(t, e, n))).kt();
          }),
          (qi.prototype.Mt = function () {
            if (this.left.Y()) return qi.EMPTY;
            var t = this;
            return (
              t.left.Lt() || t.left.left.Lt() || (t = t.$t()),
              (t = t.copy(null, null, null, t.left.Mt(), null)).kt()
            );
          }),
          (qi.prototype.remove = function (t, e) {
            var n,
              r = this;
            if (e(t, r.key) < 0)
              r.left.Y() || r.left.Lt() || r.left.left.Lt() || (r = r.$t()),
                (r = r.copy(null, null, null, r.left.remove(t, e), null));
            else {
              if (
                (r.left.Lt() && (r = r.Bt()),
                r.right.Y() ||
                  r.right.Lt() ||
                  r.right.left.Lt() ||
                  (r = r.qt()),
                0 === e(t, r.key))
              ) {
                if (r.right.Y()) return qi.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.Mt()));
              }
              r = r.copy(null, null, null, null, r.right.remove(t, e));
            }
            return r.kt();
          }),
          (qi.prototype.Lt = function () {
            return this.color;
          }),
          (qi.prototype.kt = function () {
            var t = this;
            return (
              t.right.Lt() && !t.left.Lt() && (t = t.Ut()),
              t.left.Lt() && t.left.left.Lt() && (t = t.Bt()),
              t.left.Lt() && t.right.Lt() && (t = t.Qt()),
              t
            );
          }),
          (qi.prototype.$t = function () {
            var t = this.Qt();
            return (
              t.right.left.Lt() &&
                (t = (t = (t = t.copy(
                  null,
                  null,
                  null,
                  null,
                  t.right.Bt()
                )).Ut()).Qt()),
              t
            );
          }),
          (qi.prototype.qt = function () {
            var t = this.Qt();
            return t.left.left.Lt() && (t = (t = t.Bt()).Qt()), t;
          }),
          (qi.prototype.Ut = function () {
            var t = this.copy(null, null, qi.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }),
          (qi.prototype.Bt = function () {
            var t = this.copy(null, null, qi.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }),
          (qi.prototype.Qt = function () {
            var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
          }),
          (qi.prototype.Kt = function () {
            var t = this.Wt();
            return Math.pow(2, t) <= this.size + 1;
          }),
          (qi.prototype.Wt = function () {
            if (this.Lt() && this.left.Lt()) throw Pr();
            if (this.right.Lt()) throw Pr();
            var t = this.left.Wt();
            if (t !== this.right.Wt()) throw Pr();
            return t + (this.Lt() ? 0 : 1);
          }),
          qi);
      function qi(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : qi.RED),
          (this.left = null != r ? r : qi.EMPTY),
          (this.right = null != i ? i : qi.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      function Fi(t, e, n, r) {
        (this.Ct = r), (this.xt = []);
        for (var i = 1; !t.Y(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this.Ct ? t.left : t.right;
          else {
            if (0 === i) {
              this.xt.push(t);
              break;
            }
            this.xt.push(t), (t = this.Ct ? t.right : t.left);
          }
      }
      function Bi(t, e) {
        (this.K = t), (this.root = e || ji.EMPTY);
      }
      function Gi() {
        this.size = 0;
      }
      (ji.EMPTY = null),
        (ji.RED = !0),
        (ji.Rt = !1),
        (ji.EMPTY =
          (Object.defineProperty(Gi.prototype, 'key', {
            get: function () {
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Gi.prototype, 'value', {
            get: function () {
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Gi.prototype, 'color', {
            get: function () {
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Gi.prototype, 'left', {
            get: function () {
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Gi.prototype, 'right', {
            get: function () {
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          (Gi.prototype.copy = function (t, e, n, r, i) {
            return this;
          }),
          (Gi.prototype.At = function (t, e, n) {
            return new ji(t, e);
          }),
          (Gi.prototype.remove = function (t, e) {
            return this;
          }),
          (Gi.prototype.Y = function () {
            return !0;
          }),
          (Gi.prototype.gt = function (t) {
            return !1;
          }),
          (Gi.prototype.Vt = function (t) {
            return !1;
          }),
          (Gi.prototype.Pt = function () {
            return null;
          }),
          (Gi.prototype.yt = function () {
            return null;
          }),
          (Gi.prototype.Lt = function () {
            return !1;
          }),
          (Gi.prototype.Kt = function () {
            return !0;
          }),
          (Gi.prototype.Wt = function () {
            return 0;
          }),
          new Gi()));
      var zi =
          ((Yi.prototype.has = function (t) {
            return null !== this.data.get(t);
          }),
          (Yi.prototype.first = function () {
            return this.data.Pt();
          }),
          (Yi.prototype.last = function () {
            return this.data.yt();
          }),
          Object.defineProperty(Yi.prototype, 'size', {
            get: function () {
              return this.data.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Yi.prototype.indexOf = function (t) {
            return this.data.indexOf(t);
          }),
          (Yi.prototype.forEach = function (n) {
            this.data.gt(function (t, e) {
              return n(t), !1;
            });
          }),
          (Yi.prototype.jt = function (t, e) {
            for (var n = this.data.vt(t[0]); n.Ft(); ) {
              var r = n.Nt();
              if (0 <= this.K(r.key, t[1])) return;
              e(r.key);
            }
          }),
          (Yi.prototype.Gt = function (t, e) {
            for (
              var n = void 0 !== e ? this.data.vt(e) : this.data.bt();
              n.Ft();

            )
              if (!t(n.Nt().key)) return;
          }),
          (Yi.prototype.zt = function (t) {
            t = this.data.vt(t);
            return t.Ft() ? t.Nt().key : null;
          }),
          (Yi.prototype.bt = function () {
            return new Hi(this.data.bt());
          }),
          (Yi.prototype.vt = function (t) {
            return new Hi(this.data.vt(t));
          }),
          (Yi.prototype.add = function (t) {
            return this.copy(this.data.remove(t).At(t, !0));
          }),
          (Yi.prototype.delete = function (t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
          }),
          (Yi.prototype.Y = function () {
            return this.data.Y();
          }),
          (Yi.prototype.Ht = function (t) {
            var e = this;
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach(function (t) {
                e = e.add(t);
              }),
              e
            );
          }),
          (Yi.prototype.isEqual = function (t) {
            if (!(t instanceof Yi)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.data.bt(), n = t.data.bt(); e.Ft(); ) {
              var r = e.Nt().key,
                i = n.Nt().key;
              if (0 !== this.K(r, i)) return !1;
            }
            return !0;
          }),
          (Yi.prototype.tt = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (Yi.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                return e.push(t);
              }),
              'SortedSet(' + e.toString() + ')'
            );
          }),
          (Yi.prototype.copy = function (t) {
            var e = new Yi(this.K);
            return (e.data = t), e;
          }),
          Yi),
        Hi =
          ((Wi.prototype.Nt = function () {
            return this.Jt.Nt().key;
          }),
          (Wi.prototype.Ft = function () {
            return this.Jt.Ft();
          }),
          Wi),
        Ki = new Ui(pi.K);
      function Wi(t) {
        this.Jt = t;
      }
      function Yi(t) {
        (this.K = t), (this.data = new Ui(this.K));
      }
      var Xi = new Ui(pi.K);
      var Qi = new Ui(pi.K);
      var Zi = new zi(pi.K);
      function Ji() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = Zi, r = 0, i = t; r < i.length; r++)
          var o = i[r], n = n.add(o);
        return n;
      }
      var $i = new zi(Mr);
      var to =
          ((go.Zt = function (t) {
            return new go(t.K);
          }),
          (go.prototype.has = function (t) {
            return null != this.Yt.get(t);
          }),
          (go.prototype.get = function (t) {
            return this.Yt.get(t);
          }),
          (go.prototype.first = function () {
            return this.Xt.Pt();
          }),
          (go.prototype.last = function () {
            return this.Xt.yt();
          }),
          (go.prototype.Y = function () {
            return this.Xt.Y();
          }),
          (go.prototype.indexOf = function (t) {
            t = this.Yt.get(t);
            return t ? this.Xt.indexOf(t) : -1;
          }),
          Object.defineProperty(go.prototype, 'size', {
            get: function () {
              return this.Xt.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (go.prototype.forEach = function (n) {
            this.Xt.gt(function (t, e) {
              return n(t), !1;
            });
          }),
          (go.prototype.add = function (t) {
            var e = this.delete(t.key);
            return e.copy(e.Yt.At(t.key, t), e.Xt.At(t, null));
          }),
          (go.prototype.delete = function (t) {
            var e = this.get(t);
            return e ? this.copy(this.Yt.remove(t), this.Xt.remove(e)) : this;
          }),
          (go.prototype.isEqual = function (t) {
            if (!(t instanceof go)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.Xt.bt(), n = t.Xt.bt(); e.Ft(); ) {
              var r = e.Nt().key,
                i = n.Nt().key;
              if (!r.isEqual(i)) return !1;
            }
            return !0;
          }),
          (go.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t.toString());
              }),
              0 === e.length
                ? 'DocumentSet ()'
                : 'DocumentSet (\n  ' + e.join('  \n') + '\n)'
            );
          }),
          (go.prototype.copy = function (t, e) {
            var n = new go();
            return (n.K = this.K), (n.Yt = t), (n.Xt = e), n;
          }),
          go),
        eo =
          ((vo.prototype.track = function (t) {
            var e = t.doc.key,
              n = this.te.get(e);
            !n || (0 !== t.type && 3 === n.type)
              ? (this.te = this.te.At(e, t))
              : 3 === t.type && 1 !== n.type
              ? (this.te = this.te.At(e, { type: n.type, doc: t.doc }))
              : 2 === t.type && 2 === n.type
              ? (this.te = this.te.At(e, { type: 2, doc: t.doc }))
              : 2 === t.type && 0 === n.type
              ? (this.te = this.te.At(e, { type: 0, doc: t.doc }))
              : 1 === t.type && 0 === n.type
              ? (this.te = this.te.remove(e))
              : 1 === t.type && 2 === n.type
              ? (this.te = this.te.At(e, { type: 1, doc: n.doc }))
              : 0 === t.type && 1 === n.type
              ? (this.te = this.te.At(e, { type: 2, doc: t.doc }))
              : Pr();
          }),
          (vo.prototype.ee = function () {
            var n = [];
            return (
              this.te.gt(function (t, e) {
                n.push(e);
              }),
              n
            );
          }),
          vo),
        no =
          ((yo.oe = function (t, e, n, r) {
            var i = [];
            return (
              e.forEach(function (t) {
                i.push({ type: 0, doc: t });
              }),
              new yo(t, e, to.Zt(e), i, n, r, !0, !1)
            );
          }),
          Object.defineProperty(yo.prototype, 'hasPendingWrites', {
            get: function () {
              return !this.se.Y();
            },
            enumerable: !1,
            configurable: !0
          }),
          (yo.prototype.isEqual = function (t) {
            if (
              !(
                this.fromCache === t.fromCache &&
                this.ie === t.ie &&
                this.se.isEqual(t.se) &&
                Lu(this.query, t.query) &&
                this.docs.isEqual(t.docs) &&
                this.ne.isEqual(t.ne)
              )
            )
              return !1;
            var e = this.docChanges,
              n = t.docChanges;
            if (e.length !== n.length) return !1;
            for (var r = 0; r < e.length; r++)
              if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                return !1;
            return !0;
          }),
          yo),
        ro =
          ((po.le = function (t, e) {
            var n = new Map();
            return n.set(t, io._e(t, e)), new po(ci.min(), n, $i, Ki, Ji());
          }),
          po),
        io =
          ((lo._e = function (t, e) {
            return new lo(qr.h, e, Ji(), Ji(), Ji());
          }),
          lo),
        oo = function (t, e, n, r) {
          (this.Te = t),
            (this.removedTargetIds = e),
            (this.key = n),
            (this.me = r);
        },
        so = function (t, e) {
          (this.targetId = t), (this.Ie = e);
        },
        uo = function (t, e, n, r) {
          void 0 === n && (n = qr.h),
            void 0 === r && (r = null),
            (this.state = t),
            (this.targetIds = e),
            (this.resumeToken = n),
            (this.cause = r);
        },
        ao =
          (Object.defineProperty(fo.prototype, 'fe', {
            get: function () {
              return this.ye;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(fo.prototype, 'resumeToken', {
            get: function () {
              return this.Pe;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(fo.prototype, 'Ve', {
            get: function () {
              return 0 !== this.Ae;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(fo.prototype, 'pe', {
            get: function () {
              return this.ge;
            },
            enumerable: !1,
            configurable: !0
          }),
          (fo.prototype.be = function (t) {
            0 < t.o() && ((this.ge = !0), (this.Pe = t));
          }),
          (fo.prototype.ve = function () {
            var n = Ji(),
              r = Ji(),
              i = Ji();
            return (
              this.Re.forEach(function (t, e) {
                switch (e) {
                  case 0:
                    n = n.add(t);
                    break;
                  case 2:
                    r = r.add(t);
                    break;
                  case 1:
                    i = i.add(t);
                    break;
                  default:
                    Pr();
                }
              }),
              new io(this.Pe, this.ye, n, r, i)
            );
          }),
          (fo.prototype.Se = function () {
            (this.ge = !1), (this.Re = wo());
          }),
          (fo.prototype.De = function (t, e) {
            (this.ge = !0), (this.Re = this.Re.At(t, e));
          }),
          (fo.prototype.Ce = function (t) {
            (this.ge = !0), (this.Re = this.Re.remove(t));
          }),
          (fo.prototype.xe = function () {
            this.Ae += 1;
          }),
          (fo.prototype.Ne = function () {
            --this.Ae;
          }),
          (fo.prototype.Fe = function () {
            (this.ge = !0), (this.ye = !0);
          }),
          fo),
        co =
          ((ho.prototype.Be = function (t) {
            for (var e = 0, n = t.Te; e < n.length; e++) {
              var r = n[e];
              t.me instanceof fu
                ? this.qe(r, t.me)
                : t.me instanceof lu && this.Ue(r, t.key, t.me);
            }
            for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
              (r = o[i]), this.Ue(r, t.key, t.me);
          }),
          (ho.prototype.Qe = function (n) {
            var r = this;
            this.Ke(n, function (t) {
              var e = r.We(t);
              switch (n.state) {
                case 0:
                  r.je(t) && e.be(n.resumeToken);
                  break;
                case 1:
                  e.Ne(), e.Ve || e.Se(), e.be(n.resumeToken);
                  break;
                case 2:
                  e.Ne(), e.Ve || r.removeTarget(t);
                  break;
                case 3:
                  r.je(t) && (e.Fe(), e.be(n.resumeToken));
                  break;
                case 4:
                  r.je(t) && (r.Ge(t), e.be(n.resumeToken));
                  break;
                default:
                  Pr();
              }
            });
          }),
          (ho.prototype.Ke = function (t, n) {
            var r = this;
            0 < t.targetIds.length
              ? t.targetIds.forEach(n)
              : this.ke.forEach(function (t, e) {
                  r.je(e) && n(e);
                });
          }),
          (ho.prototype.ze = function (t) {
            var e = t.targetId,
              n = t.Ie.count,
              t = this.He(e);
            t &&
              (Di((t = t.target))
                ? 0 === n
                  ? ((t = new pi(t.path)), this.Ue(e, t, new lu(t, ci.min())))
                  : Vr(1 === n)
                : this.Je(e) !== n && (this.Ge(e), (this.$e = this.$e.add(e))));
          }),
          (ho.prototype.Ye = function (r) {
            var i = this,
              o = new Map();
            this.ke.forEach(function (t, e) {
              var n = i.He(e);
              n &&
                (t.fe &&
                  Di(n.target) &&
                  ((n = new pi(n.target.path)),
                  null !== i.Me.get(n) ||
                    i.Xe(e, n) ||
                    i.Ue(e, n, new lu(n, r))),
                t.pe && (o.set(e, t.ve()), t.Se()));
            });
            var s = Ji();
            this.Le.forEach(function (t, e) {
              var n = !0;
              e.Gt(function (t) {
                t = i.He(t);
                return !t || 2 === t.dt || (n = !1);
              }),
                n && (s = s.add(t));
            });
            var t = new ro(r, o, this.$e, this.Me, s);
            return (this.Me = Ki), (this.Le = mo()), (this.$e = new zi(Mr)), t;
          }),
          (ho.prototype.qe = function (t, e) {
            var n;
            this.je(t) &&
              ((n = this.Xe(t, e.key) ? 2 : 0),
              this.We(t).De(e.key, n),
              (this.Me = this.Me.At(e.key, e)),
              (this.Le = this.Le.At(e.key, this.Ze(e.key).add(t))));
          }),
          (ho.prototype.Ue = function (t, e, n) {
            var r;
            this.je(t) &&
              ((r = this.We(t)),
              this.Xe(t, e) ? r.De(e, 1) : r.Ce(e),
              (this.Le = this.Le.At(e, this.Ze(e).delete(t))),
              n && (this.Me = this.Me.At(e, n)));
          }),
          (ho.prototype.removeTarget = function (t) {
            this.ke.delete(t);
          }),
          (ho.prototype.Je = function (t) {
            var e = this.We(t).ve();
            return this.Oe.tn(t).size + e.de.size - e.Ee.size;
          }),
          (ho.prototype.xe = function (t) {
            this.We(t).xe();
          }),
          (ho.prototype.We = function (t) {
            var e = this.ke.get(t);
            return e || ((e = new ao()), this.ke.set(t, e)), e;
          }),
          (ho.prototype.Ze = function (t) {
            var e = this.Le.get(t);
            return e || ((e = new zi(Mr)), (this.Le = this.Le.At(t, e))), e;
          }),
          (ho.prototype.je = function (t) {
            var e = null !== this.He(t);
            return (
              e || Dr('WatchChangeAggregator', 'Detected inactive target', t), e
            );
          }),
          (ho.prototype.He = function (t) {
            var e = this.ke.get(t);
            return e && e.Ve ? null : this.Oe.en(t);
          }),
          (ho.prototype.Ge = function (e) {
            var n = this;
            this.ke.set(e, new ao()),
              this.Oe.tn(e).forEach(function (t) {
                n.Ue(e, t, null);
              });
          }),
          (ho.prototype.Xe = function (t, e) {
            return this.Oe.tn(t).has(e);
          }),
          ho);
      function ho(t) {
        (this.Oe = t),
          (this.ke = new Map()),
          (this.Me = Ki),
          (this.Le = mo()),
          (this.$e = new zi(Mr));
      }
      function fo() {
        (this.Ae = 0),
          (this.Re = wo()),
          (this.Pe = qr.h),
          (this.ye = !1),
          (this.ge = !0);
      }
      function lo(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.fe = e),
          (this.de = n),
          (this.we = r),
          (this.Ee = i);
      }
      function po(t, e, n, r, i) {
        (this.wt = t),
          (this.ce = e),
          (this.ae = n),
          (this.ue = r),
          (this.he = i);
      }
      function yo(t, e, n, r, i, o, s, u) {
        (this.query = t),
          (this.docs = e),
          (this.ne = n),
          (this.docChanges = r),
          (this.se = i),
          (this.fromCache = o),
          (this.ie = s),
          (this.re = u);
      }
      function vo() {
        this.te = new Ui(pi.K);
      }
      function go(n) {
        (this.K = n
          ? function (t, e) {
              return n(t, e) || pi.K(t.key, e.key);
            }
          : function (t, e) {
              return pi.K(t.key, e.key);
            }),
          (this.Yt = Xi),
          (this.Xt = new Ui(this.K));
      }
      function mo() {
        return new Ui(pi.K);
      }
      function wo() {
        return new Ui(pi.K);
      }
      function bo(t) {
        var e,
          n = 0;
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
        return n;
      }
      function Eo(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
      function _o(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      function To(t) {
        return (
          'server_timestamp' ===
          (null ===
            (t = (
              (null === (t = null == t ? void 0 : t.mapValue) || void 0 === t
                ? void 0
                : t.fields) || {}
            ).__type__) || void 0 === t
            ? void 0
            : t.stringValue)
        );
      }
      function Ao(t) {
        t = ko(t.mapValue.fields.__local_write_time__.timestampValue);
        return new ai(t.seconds, t.nanos);
      }
      var Io = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function No(t) {
        return 'nullValue' in t
          ? 0
          : 'booleanValue' in t
          ? 1
          : 'integerValue' in t || 'doubleValue' in t
          ? 2
          : 'timestampValue' in t
          ? 3
          : 'stringValue' in t
          ? 5
          : 'bytesValue' in t
          ? 6
          : 'referenceValue' in t
          ? 7
          : 'geoPointValue' in t
          ? 8
          : 'arrayValue' in t
          ? 9
          : 'mapValue' in t
          ? To(t)
            ? 4
            : 10
          : Pr();
      }
      function Lo(r, i) {
        var t,
          e = No(r);
        if (e !== No(i)) return !1;
        switch (e) {
          case 0:
            return !0;
          case 1:
            return r.booleanValue === i.booleanValue;
          case 4:
            return Ao(r).isEqual(Ao(i));
          case 3:
            return (function (t) {
              if (
                'string' == typeof r.timestampValue &&
                'string' == typeof t.timestampValue &&
                r.timestampValue.length === t.timestampValue.length
              )
                return r.timestampValue === t.timestampValue;
              var e = ko(r.timestampValue),
                t = ko(t.timestampValue);
              return e.seconds === t.seconds && e.nanos === t.nanos;
            })(i);
          case 5:
            return r.stringValue === i.stringValue;
          case 6:
            return (t = i), Po(r.bytesValue).isEqual(Po(t.bytesValue));
          case 7:
            return r.referenceValue === i.referenceValue;
          case 8:
            return (
              (e = i),
              Co((t = r).geoPointValue.latitude) ===
                Co(e.geoPointValue.latitude) &&
                Co(t.geoPointValue.longitude) === Co(e.geoPointValue.longitude)
            );
          case 2:
            return (function (t, e) {
              if ('integerValue' in t && 'integerValue' in e)
                return Co(t.integerValue) === Co(e.integerValue);
              if ('doubleValue' in t && 'doubleValue' in e) {
                (t = Co(t.doubleValue)), (e = Co(e.doubleValue));
                return t === e ? Ii(t) === Ii(e) : isNaN(t) && isNaN(e);
              }
              return !1;
            })(r, i);
          case 9:
            return jr(r.arrayValue.values || [], i.arrayValue.values || [], Lo);
          case 10:
            return (function () {
              var t,
                e = r.mapValue.fields || {},
                n = i.mapValue.fields || {};
              if (bo(e) !== bo(n)) return !1;
              for (t in e)
                if (e.hasOwnProperty(t) && (void 0 === n[t] || !Lo(e[t], n[t])))
                  return !1;
              return !0;
            })();
          default:
            return Pr();
        }
      }
      function Oo(t, e) {
        return (
          void 0 !==
          (t.values || []).find(function (t) {
            return Lo(t, e);
          })
        );
      }
      function Ro(t, e) {
        var n,
          r,
          i = No(t),
          o = No(e);
        if (i !== o) return Mr(i, o);
        switch (i) {
          case 0:
            return 0;
          case 1:
            return Mr(t.booleanValue, e.booleanValue);
          case 2:
            return (
              (n = e),
              (r = Co(t.integerValue || t.doubleValue)),
              (n = Co(n.integerValue || n.doubleValue)),
              r < n
                ? -1
                : n < r
                ? 1
                : r === n
                ? 0
                : isNaN(r)
                ? isNaN(n)
                  ? 0
                  : -1
                : 1
            );
          case 3:
            return Do(t.timestampValue, e.timestampValue);
          case 4:
            return Do(Ao(t), Ao(e));
          case 5:
            return Mr(t.stringValue, e.stringValue);
          case 6:
            return (function (t, e) {
              (t = Po(t)), (e = Po(e));
              return t.u(e);
            })(t.bytesValue, e.bytesValue);
          case 7:
            return (function (t, e) {
              for (
                var n = t.split('/'), r = e.split('/'), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = Mr(n[i], r[i]);
                if (0 !== o) return o;
              }
              return Mr(n.length, r.length);
            })(t.referenceValue, e.referenceValue);
          case 8:
            return (
              (i = t.geoPointValue),
              (r = e.geoPointValue),
              0 !== (n = Mr(Co(i.latitude), Co(r.latitude)))
                ? n
                : Mr(Co(i.longitude), Co(r.longitude))
            );
          case 9:
            return (function (t, e) {
              for (
                var n = t.values || [], r = e.values || [], i = 0;
                i < n.length && i < r.length;
                ++i
              ) {
                var o = Ro(n[i], r[i]);
                if (o) return o;
              }
              return Mr(n.length, r.length);
            })(t.arrayValue, e.arrayValue);
          case 10:
            return (function (t, e) {
              var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Mr(r[s], o[s]);
                if (0 !== u) return u;
                u = Ro(n[r[s]], i[o[s]]);
                if (0 !== u) return u;
              }
              return Mr(r.length, o.length);
            })(t.mapValue, e.mapValue);
          default:
            throw Pr();
        }
      }
      function Do(t, e) {
        if (
          'string' == typeof t &&
          'string' == typeof e &&
          t.length === e.length
        )
          return Mr(t, e);
        var n = ko(t),
          t = ko(e),
          e = Mr(n.seconds, t.seconds);
        return 0 !== e ? e : Mr(n.nanos, t.nanos);
      }
      function So(t) {
        return (function s(t) {
          return 'nullValue' in t
            ? 'null'
            : 'booleanValue' in t
            ? '' + t.booleanValue
            : 'integerValue' in t
            ? '' + t.integerValue
            : 'doubleValue' in t
            ? '' + t.doubleValue
            : 'timestampValue' in t
            ? (function (t) {
                var t = ko(t);
                return 'time(' + t.seconds + ',' + t.nanos + ')';
              })(t.timestampValue)
            : 'stringValue' in t
            ? t.stringValue
            : 'bytesValue' in t
            ? Po(t.bytesValue).toBase64()
            : 'referenceValue' in t
            ? ((e = t.referenceValue), pi.ut(e).toString())
            : 'geoPointValue' in t
            ? 'geo(' + (e = t.geoPointValue).latitude + ',' + e.longitude + ')'
            : 'arrayValue' in t
            ? (function (t) {
                for (
                  var e = '[', n = !0, r = 0, i = t.values || [];
                  r < i.length;
                  r++
                )
                  n ? (n = !1) : (e += ','), (e += s(i[r]));
                return e + ']';
              })(t.arrayValue)
            : 'mapValue' in t
            ? (function (t) {
                for (
                  var e = '{',
                    n = !0,
                    r = 0,
                    i = Object.keys(t.fields || {}).sort();
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  n ? (n = !1) : (e += ','), (e += o + ':' + s(t.fields[o]));
                }
                return e + '}';
              })(t.mapValue)
            : Pr();
          var e;
        })(t);
      }
      function ko(t) {
        if ((Vr(!!t), 'string' != typeof t))
          return { seconds: Co(t.seconds), nanos: Co(t.nanos) };
        var e = 0,
          n = Io.exec(t);
        Vr(!!n),
          n[1] &&
            ((n = ((n = n[1]) + '000000000').substr(0, 9)), (e = Number(n)));
        t = new Date(t);
        return { seconds: Math.floor(t.getTime() / 1e3), nanos: e };
      }
      function Co(t) {
        return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
      }
      function Po(t) {
        return 'string' == typeof t
          ? qr.fromBase64String(t)
          : qr.fromUint8Array(t);
      }
      function Vo(t, e) {
        return {
          referenceValue:
            'projects/' +
            t.projectId +
            '/databases/' +
            t.database +
            '/documents/' +
            e.path.et()
        };
      }
      function xo(t) {
        return t && 'integerValue' in t;
      }
      function Uo(t) {
        return !!t && 'arrayValue' in t;
      }
      function Mo(t) {
        return t && 'nullValue' in t;
      }
      function jo(t) {
        return t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
      }
      function qo(t) {
        return t && 'mapValue' in t;
      }
      var Fo = { asc: 'ASCENDING', desc: 'DESCENDING' },
        Bo = {
          '<': 'LESS_THAN',
          '<=': 'LESS_THAN_OR_EQUAL',
          '>': 'GREATER_THAN',
          '>=': 'GREATER_THAN_OR_EQUAL',
          '==': 'EQUAL',
          '!=': 'NOT_EQUAL',
          'array-contains': 'ARRAY_CONTAINS',
          in: 'IN',
          'not-in': 'NOT_IN',
          'array-contains-any': 'ARRAY_CONTAINS_ANY'
        },
        Go = function (t, e) {
          (this.T = t), (this.nn = e);
        };
      function zo(t) {
        return { integerValue: '' + t };
      }
      function Ho(t, e) {
        if (t.nn) {
          if (isNaN(e)) return { doubleValue: 'NaN' };
          if (e === 1 / 0) return { doubleValue: 'Infinity' };
          if (e === -1 / 0) return { doubleValue: '-Infinity' };
        }
        return { doubleValue: Ii(e) ? '-0' : e };
      }
      function Ko(t, e) {
        return 'number' == typeof (n = e) &&
          Number.isInteger(n) &&
          !Ii(n) &&
          n <= Number.MAX_SAFE_INTEGER &&
          n >= Number.MIN_SAFE_INTEGER
          ? zo(e)
          : Ho(t, e);
        var n;
      }
      function Wo(t, e) {
        return t.nn
          ? new Date(1e3 * e.seconds)
              .toISOString()
              .replace(/\.\d*/, '')
              .replace('Z', '') +
              '.' +
              ('000000000' + e.nanoseconds).slice(-9) +
              'Z'
          : { seconds: '' + e.seconds, nanos: e.nanoseconds };
      }
      function Yo(t, e) {
        return t.nn ? e.toBase64() : e.toUint8Array();
      }
      function Xo(t) {
        return Vr(!!t), ci.$(((t = ko(t)), new ai(t.seconds, t.nanos)));
      }
      function Qo(t, e) {
        return new hi(['projects', t.projectId, 'databases', t.database])
          .child('documents')
          .child(e)
          .et();
      }
      function Zo(t) {
        t = hi.nt(t);
        return Vr(ls(t)), t;
      }
      function Jo(t, e) {
        return Qo(t.T, e.path);
      }
      function $o(t, e) {
        e = Zo(e);
        if (e.get(1) !== t.T.projectId)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Tried to deserialize key from different project: ' +
              e.get(1) +
              ' vs ' +
              t.T.projectId
          );
        if (e.get(3) !== t.T.database)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Tried to deserialize key from different database: ' +
              e.get(3) +
              ' vs ' +
              t.T.database
          );
        return new pi(ns(e));
      }
      function ts(t, e) {
        return Qo(t.T, e);
      }
      function es(t) {
        return new hi([
          'projects',
          t.T.projectId,
          'databases',
          t.T.database
        ]).et();
      }
      function ns(t) {
        return Vr(4 < t.length && 'documents' === t.get(4)), t.j(5);
      }
      function rs(t, e, n) {
        return { name: Jo(t, e), fields: n.proto.mapValue.fields };
      }
      function is(t, e) {
        var n, r, i;
        if (e instanceof Gs) n = { update: rs(t, e.key, e.value) };
        else if (e instanceof tu) n = { delete: Jo(t, e.key) };
        else if (e instanceof zs)
          n = {
            update: rs(t, e.key, e.data),
            updateMask:
              ((i = e.sn),
              (r = []),
              i.fields.forEach(function (t) {
                return r.push(t.et());
              }),
              { fieldPaths: r })
          };
        else if (e instanceof Xs)
          n = {
            transform: {
              document: Jo(t, e.key),
              fieldTransforms: e.fieldTransforms.map(function (t) {
                var e = t.transform;
                if (e instanceof vs)
                  return {
                    fieldPath: t.field.et(),
                    setToServerValue: 'REQUEST_TIME'
                  };
                if (e instanceof gs)
                  return {
                    fieldPath: t.field.et(),
                    appendMissingElements: { values: e.elements }
                  };
                if (e instanceof _s)
                  return {
                    fieldPath: t.field.et(),
                    removeAllFromArray: { values: e.elements }
                  };
                if (e instanceof Ns)
                  return { fieldPath: t.field.et(), increment: e.rn };
                throw Pr();
              })
            }
          };
        else {
          if (!(e instanceof eu)) return Pr();
          n = { verify: Jo(t, e.key) };
        }
        return (
          e.cn.on ||
            (n.currentDocument =
              void 0 !== (i = e.cn).updateTime
                ? { updateTime: ((e = t), (t = i.updateTime), Wo(e, t.q())) }
                : void 0 !== i.exists
                ? { exists: i.exists }
                : Pr()),
          n
        );
      }
      function os(t, e) {
        var n = { structuredQuery: {} },
          r = e.path;
        null !== e.collectionGroup
          ? ((n.parent = ts(t, r)),
            (n.structuredQuery.from = [
              { collectionId: e.collectionGroup, allDescendants: !0 }
            ]))
          : ((n.parent = ts(t, r.G())),
            (n.structuredQuery.from = [{ collectionId: r.J() }]));
        r = (function (t) {
          if (0 !== t.length) {
            t = t.map(function (t) {
              if ('==' === t.op) {
                if (jo(t.value))
                  return { unaryFilter: { field: cs(t.field), op: 'IS_NAN' } };
                if (Mo(t.value))
                  return { unaryFilter: { field: cs(t.field), op: 'IS_NULL' } };
              } else if ('!=' === t.op) {
                if (jo(t.value))
                  return {
                    unaryFilter: { field: cs(t.field), op: 'IS_NOT_NAN' }
                  };
                if (Mo(t.value))
                  return {
                    unaryFilter: { field: cs(t.field), op: 'IS_NOT_NULL' }
                  };
              }
              return {
                fieldFilter: {
                  field: cs(t.field),
                  op: ((e = t.op), Bo[e]),
                  value: t.value
                }
              };
              var e;
            });
            return 1 === t.length
              ? t[0]
              : { compositeFilter: { op: 'AND', filters: t } };
          }
        })(e.filters);
        r && (n.structuredQuery.where = r);
        r = (function (t) {
          if (0 !== t.length)
            return t.map(function (t) {
              return {
                field: cs((t = t).field),
                direction: ((t = t.dir), Fo[t])
              };
            });
        })(e.orderBy);
        r && (n.structuredQuery.orderBy = r);
        (r = e.limit), (r = t.nn || Ai(r) ? r : { value: r });
        return (
          null !== r && (n.structuredQuery.limit = r),
          e.startAt && (n.structuredQuery.startAt = us(e.startAt)),
          e.endAt && (n.structuredQuery.endAt = us(e.endAt)),
          n
        );
      }
      function ss(t) {
        var e = 4 === (o = Zo(t.parent)).length ? hi.st() : ns(o),
          n = t.structuredQuery,
          r = n.from ? n.from.length : 0,
          i = null;
        0 < r &&
          (Vr(1 === r),
          (s = n.from[0]).allDescendants
            ? (i = s.collectionId)
            : (e = e.child(s.collectionId)));
        var o = [];
        n.where &&
          (o = (function e(t) {
            return t
              ? void 0 !== t.unaryFilter
                ? [fs(t)]
                : void 0 !== t.fieldFilter
                ? [
                    ((n = t),
                    Cu.create(
                      hs(n.fieldFilter.field),
                      (function () {
                        switch (n.fieldFilter.op) {
                          case 'EQUAL':
                            return '==';
                          case 'NOT_EQUAL':
                            return '!=';
                          case 'GREATER_THAN':
                            return '>';
                          case 'GREATER_THAN_OR_EQUAL':
                            return '>=';
                          case 'LESS_THAN':
                            return '<';
                          case 'LESS_THAN_OR_EQUAL':
                            return '<=';
                          case 'ARRAY_CONTAINS':
                            return 'array-contains';
                          case 'IN':
                            return 'in';
                          case 'NOT_IN':
                            return 'not-in';
                          case 'ARRAY_CONTAINS_ANY':
                            return 'array-contains-any';
                          case 'OPERATOR_UNSPECIFIED':
                          default:
                            return Pr();
                        }
                      })(),
                      n.fieldFilter.value
                    ))
                  ]
                : void 0 !== t.compositeFilter
                ? t.compositeFilter.filters
                    .map(function (t) {
                      return e(t);
                    })
                    .reduce(function (t, e) {
                      return t.concat(e);
                    })
                : Pr()
              : [];
            var n;
          })(n.where));
        t = [];
        n.orderBy &&
          (t = n.orderBy.map(function (t) {
            return new ua(
              hs((e = t).field),
              (function () {
                switch (e.direction) {
                  case 'ASCENDING':
                    return 'asc';
                  case 'DESCENDING':
                    return 'desc';
                  default:
                    return;
                }
              })()
            );
            var e;
          }));
        r = null;
        n.limit &&
          (r = Ai((u = 'object' == typeof (u = n.limit) ? u.value : u))
            ? null
            : u);
        var s = null;
        n.startAt && (s = as(n.startAt));
        var u = null;
        return n.endAt && (u = as(n.endAt)), new du(e, i, t, o, r, 'F', s, u);
      }
      function us(t) {
        return { before: t.before, values: t.position };
      }
      function as(t) {
        var e = !!t.before,
          t = t.values || [];
        return new $u(t, e);
      }
      function cs(t) {
        return { fieldPath: t.et() };
      }
      function hs(t) {
        return li.ct(t.fieldPath);
      }
      function fs(t) {
        switch (t.unaryFilter.op) {
          case 'IS_NAN':
            var e = hs(t.unaryFilter.field);
            return Cu.create(e, '==', { doubleValue: NaN });
          case 'IS_NULL':
            var n = hs(t.unaryFilter.field);
            return Cu.create(n, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            n = hs(t.unaryFilter.field);
            return Cu.create(n, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            t = hs(t.unaryFilter.field);
            return Cu.create(t, '!=', { nullValue: 'NULL_VALUE' });
          case 'OPERATOR_UNSPECIFIED':
          default:
            return Pr();
        }
      }
      function ls(t) {
        return (
          4 <= t.length && 'projects' === t.get(0) && 'databases' === t.get(2)
        );
      }
      o = function () {
        this.un = void 0;
      };
      function ps(t, e) {
        return t instanceof Ns
          ? xo((t = e)) || (t && 'doubleValue' in t)
            ? e
            : { integerValue: 0 }
          : null;
      }
      var ds,
        ys,
        vs = (f(ws, (ys = o)), ws),
        gs = (f(ms, (ds = o)), ms);
      function ms(t) {
        var e = this;
        return ((e = ds.call(this) || this).elements = t), e;
      }
      function ws() {
        return (null !== ys && ys.apply(this, arguments)) || this;
      }
      function bs(t, e) {
        for (var n = Rs(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n.some(function (t) {
              return Lo(t, e);
            }) || n.push(e);
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var Es,
        _s = (f(Ts, (Es = o)), Ts);
      function Ts(t) {
        var e = this;
        return ((e = Es.call(this) || this).elements = t), e;
      }
      function As(t, e) {
        for (var n = Rs(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n = n.filter(function (t) {
              return !Lo(t, e);
            });
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var Is,
        Ns = (f(Ls, (Is = o)), Ls);
      function Ls(t, e) {
        var n = this;
        return ((n = Is.call(this) || this).serializer = t), (n.rn = e), n;
      }
      function Os(t) {
        return Co(t.integerValue || t.doubleValue);
      }
      function Rs(t) {
        return Uo(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      function Ds(t, e) {
        (this.field = t), (this.transform = e);
      }
      var Ss =
        ((ks.prototype.hn = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++)
            if (n[e].X(t)) return !0;
          return !1;
        }),
        (ks.prototype.isEqual = function (t) {
          return jr(this.fields, t.fields, function (t, e) {
            return t.isEqual(e);
          });
        }),
        ks);
      function ks(t) {
        (this.fields = t).sort(li.K);
      }
      function Cs(t, e) {
        (this.version = t), (this.transformResults = e);
      }
      var Ps =
        ((Vs.an = function () {
          return new Vs();
        }),
        (Vs.exists = function (t) {
          return new Vs(void 0, t);
        }),
        (Vs.updateTime = function (t) {
          return new Vs(t);
        }),
        Object.defineProperty(Vs.prototype, 'on', {
          get: function () {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0
        }),
        (Vs.prototype.isEqual = function (t) {
          return (
            this.exists === t.exists &&
            (this.updateTime
              ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
              : !t.updateTime)
          );
        }),
        Vs);
      function Vs(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      function xs(t, e) {
        return void 0 !== t.updateTime
          ? e instanceof fu && e.version.isEqual(t.updateTime)
          : void 0 === t.exists || t.exists === e instanceof fu;
      }
      _e = function () {};
      function Us(t, e, n) {
        return t instanceof Gs
          ? new fu(t.key, n.version, t.value, { hasCommittedMutations: !0 })
          : t instanceof zs
          ? (function (t, e, n) {
              if (!xs(t.cn, e)) return new pu(t.key, n.version);
              e = Ws(t, e);
              return new fu(t.key, n.version, e, { hasCommittedMutations: !0 });
            })(t, e, n)
          : t instanceof Xs
          ? (function (t, e, n) {
              if ((Vr(null != n.transformResults), !xs(t.cn, e)))
                return new pu(t.key, n.version);
              var r = e,
                e = (function (t, e, n) {
                  var r = [];
                  Vr(t.length === n.length);
                  for (var i = 0; i < n.length; i++) {
                    var o = t[i],
                      s = o.transform,
                      u = null;
                    e instanceof fu && (u = e.field(o.field)),
                      r.push(
                        ((o = s),
                        (s = u),
                        (u = n[i]),
                        o instanceof gs
                          ? bs(o, s)
                          : o instanceof _s
                          ? As(o, s)
                          : u)
                      );
                  }
                  return r;
                })(t.fieldTransforms, e, n.transformResults),
                n = n.version,
                e = Zs(t, r.data(), e);
              return new fu(t.key, n, e, { hasCommittedMutations: !0 });
            })(t, e, n)
          : new lu(t.key, n.version, { hasCommittedMutations: !0 });
      }
      function Ms(t, e, n, r) {
        return t instanceof Gs
          ? (function (t, e) {
              if (!xs(t.cn, e)) return e;
              e = qs(e);
              return new fu(t.key, e, t.value, { ln: !0 });
            })(t, e)
          : t instanceof zs
          ? (function (t, e) {
              if (!xs(t.cn, e)) return e;
              var n = qs(e),
                e = Ws(t, e);
              return new fu(t.key, n, e, { ln: !0 });
            })(t, e)
          : t instanceof Xs
          ? (function (t, e, n, r) {
              if (!xs(t.cn, e)) return e;
              var i = e,
                r = (function (t, e, n, r) {
                  for (var i, o = [], s = 0, u = t; s < u.length; s++) {
                    var a = u[s],
                      c = a.transform,
                      h = null;
                    n instanceof fu && (h = n.field(a.field)),
                      null === h && r instanceof fu && (h = r.field(a.field)),
                      o.push(
                        ((i = h),
                        (a = e),
                        (h = void 0),
                        (c = c) instanceof vs
                          ? ((h = {
                              fields: {
                                __type__: { stringValue: 'server_timestamp' },
                                __local_write_time__: {
                                  timestampValue: {
                                    seconds: a.seconds,
                                    nanos: a.nanoseconds
                                  }
                                }
                              }
                            }),
                            i && (h.fields.__previous_value__ = i),
                            { mapValue: h })
                          : c instanceof gs
                          ? bs(c, i)
                          : c instanceof _s
                          ? As(c, i)
                          : ((c = ps((h = c), i)),
                            (i = Os(c) + Os(h.rn)),
                            xo(c) && xo(h.rn) ? zo(i) : Ho(h.serializer, i)))
                      );
                  }
                  return o;
                })(t.fieldTransforms, n, e, r),
                r = Zs(t, i.data(), r);
              return new fu(t.key, i.version, r, { ln: !0 });
            })(t, e, r, n)
          : ((e = e), xs((t = t).cn, e) ? new lu(t.key, ci.min()) : e);
      }
      function js(t, e) {
        return (
          t.type === e.type &&
          !!t.key.isEqual(e.key) &&
          !!t.cn.isEqual(e.cn) &&
          (0 === t.type
            ? t.value.isEqual(e.value)
            : 1 === t.type
            ? t.data.isEqual(e.data) && t.sn.isEqual(e.sn)
            : 2 !== t.type ||
              jr(t.fieldTransforms, t.fieldTransforms, function (t, e) {
                return (
                  (e = e),
                  (t = t).field.isEqual(e.field) &&
                    ((t = t.transform),
                    (e = e.transform),
                    (t instanceof gs && e instanceof gs) ||
                    (t instanceof _s && e instanceof _s)
                      ? jr(t.elements, e.elements, Lo)
                      : t instanceof Ns && e instanceof Ns
                      ? Lo(t.rn, e.rn)
                      : t instanceof vs && e instanceof vs)
                );
              }))
        );
      }
      function qs(t) {
        return t instanceof fu ? t.version : ci.min();
      }
      var Fs,
        Bs,
        Gs = (f(Ks, (Bs = _e)), Ks),
        zs = (f(Hs, (Fs = _e)), Hs);
      function Hs(t, e, n, r) {
        var i = this;
        return (
          ((i = Fs.call(this) || this).key = t),
          (i.data = e),
          (i.sn = n),
          (i.cn = r),
          (i.type = 1),
          i
        );
      }
      function Ks(t, e, n) {
        var r = this;
        return (
          ((r = Bs.call(this) || this).key = t),
          (r.value = e),
          (r.cn = n),
          (r.type = 0),
          r
        );
      }
      function Ws(t, e) {
        return (
          (n = t),
          (e = e instanceof fu ? e.data() : nu.empty()),
          (r = new ru(e)),
          n.sn.fields.forEach(function (t) {
            var e;
            t.Y() ||
              (null !== (e = n.data.field(t)) ? r.set(t, e) : r.delete(t));
          }),
          r._n()
        );
        var n, r;
      }
      var Ys,
        Xs = (f(Qs, (Ys = _e)), Qs);
      function Qs(t, e) {
        var n = this;
        return (
          ((n = Ys.call(this) || this).key = t),
          (n.fieldTransforms = e),
          (n.type = 2),
          (n.cn = Ps.exists(!0)),
          n
        );
      }
      function Zs(t, e, n) {
        for (var r = new ru(e), i = 0; i < t.fieldTransforms.length; i++) {
          var o = t.fieldTransforms[i];
          r.set(o.field, n[i]);
        }
        return r._n();
      }
      var Js,
        $s,
        tu = (f(uu, ($s = _e)), uu),
        eu = (f(su, (Js = _e)), su),
        nu =
          ((ou.empty = function () {
            return new ou({ mapValue: {} });
          }),
          (ou.prototype.field = function (t) {
            if (t.Y()) return this.proto;
            for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
              if (!e.mapValue.fields) return null;
              if (!qo((e = e.mapValue.fields[t.get(n)]))) return null;
            }
            return (e = (e.mapValue.fields || {})[t.J()]) || null;
          }),
          (ou.prototype.isEqual = function (t) {
            return Lo(this.proto, t.proto);
          }),
          ou),
        ru =
          ((iu.prototype.set = function (t, e) {
            return this.wn(t, e), this;
          }),
          (iu.prototype.delete = function (t) {
            return this.wn(t, null), this;
          }),
          (iu.prototype.wn = function (t, e) {
            for (var n = this.dn, r = 0; r < t.length - 1; ++r)
              var i = t.get(r),
                o = n.get(i),
                n =
                  (o instanceof Map ||
                    ((o =
                      o && 10 === No(o)
                        ? new Map(Object.entries(o.mapValue.fields || {}))
                        : new Map()),
                    n.set(i, o)),
                  o);
            n.set(t.J(), e);
          }),
          (iu.prototype._n = function () {
            var t = this.En(li.st(), this.dn);
            return null != t ? new nu(t) : this.fn;
          }),
          (iu.prototype.En = function (r, t) {
            var i = this,
              o = !1,
              e = this.fn.field(r),
              s = qo(e) ? Object.assign({}, e.mapValue.fields) : {};
            return (
              t.forEach(function (t, e) {
                var n;
                t instanceof Map
                  ? null != (n = i.En(r.child(e), t)) && ((s[e] = n), (o = !0))
                  : null !== t
                  ? ((s[e] = t), (o = !0))
                  : s.hasOwnProperty(e) && (delete s[e], (o = !0));
              }),
              o ? { mapValue: { fields: s } } : null
            );
          }),
          iu);
      function iu(t) {
        void 0 === t && (t = nu.empty()), (this.fn = t), (this.dn = new Map());
      }
      function ou(t) {
        this.proto = t;
      }
      function su(t, e) {
        var n = this;
        return (
          ((n = Js.call(this) || this).key = t), (n.cn = e), (n.type = 4), n
        );
      }
      function uu(t, e) {
        var n = this;
        return (
          ((n = $s.call(this) || this).key = t), (n.cn = e), (n.type = 3), n
        );
      }
      var au,
        cu,
        hu,
        Te = function (t, e) {
          (this.key = t), (this.version = e);
        },
        fu =
          (f(gu, (hu = Te)),
          (gu.prototype.field = function (t) {
            return this.Tn.field(t);
          }),
          (gu.prototype.data = function () {
            return this.Tn;
          }),
          (gu.prototype.mn = function () {
            return this.Tn.proto;
          }),
          (gu.prototype.isEqual = function (t) {
            return (
              t instanceof gu &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.ln === t.ln &&
              this.hasCommittedMutations === t.hasCommittedMutations &&
              this.Tn.isEqual(t.Tn)
            );
          }),
          (gu.prototype.toString = function () {
            return (
              'Document(' +
              this.key +
              ', ' +
              this.version +
              ', ' +
              this.Tn.toString() +
              ', {hasLocalMutations: ' +
              this.ln +
              '}), {hasCommittedMutations: ' +
              this.hasCommittedMutations +
              '})'
            );
          }),
          Object.defineProperty(gu.prototype, 'hasPendingWrites', {
            get: function () {
              return this.ln || this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0
          }),
          gu),
        lu =
          (f(vu, (cu = Te)),
          (vu.prototype.toString = function () {
            return 'NoDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(vu.prototype, 'hasPendingWrites', {
            get: function () {
              return this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0
          }),
          (vu.prototype.isEqual = function (t) {
            return (
              t instanceof vu &&
              t.hasCommittedMutations === this.hasCommittedMutations &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          vu),
        pu =
          (f(yu, (au = Te)),
          (yu.prototype.toString = function () {
            return 'UnknownDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(yu.prototype, 'hasPendingWrites', {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0
          }),
          (yu.prototype.isEqual = function (t) {
            return (
              t instanceof yu &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          yu),
        du = function (t, e, n, r, i, o, s, u) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = 'F'),
            void 0 === s && (s = null),
            void 0 === u && (u = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.In = n),
            (this.filters = r),
            (this.limit = i),
            (this.limitType = o),
            (this.startAt = s),
            (this.endAt = u),
            (this.An = null),
            (this.Rn = null),
            this.startAt,
            this.endAt;
        };
      function yu() {
        return (null !== au && au.apply(this, arguments)) || this;
      }
      function vu(t, e, n) {
        var r = this;
        return (
          ((r = cu.call(this, t, e) || this).hasCommittedMutations = !(
            !n || !n.hasCommittedMutations
          )),
          r
        );
      }
      function gu(t, e, n, r) {
        var i = this;
        return (
          ((i = hu.call(this, t, e) || this).Tn = n),
          (i.ln = !!r.ln),
          (i.hasCommittedMutations = !!r.hasCommittedMutations),
          i
        );
      }
      function mu(t) {
        return new du(t);
      }
      function wu(t) {
        return !Ai(t.limit) && 'F' === t.limitType;
      }
      function bu(t) {
        return !Ai(t.limit) && 'L' === t.limitType;
      }
      function Eu(t) {
        return 0 < t.In.length ? t.In[0].field : null;
      }
      function _u(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.Pn()) return r.field;
        }
        return null;
      }
      function Tu(t) {
        return null !== t.collectionGroup;
      }
      function Au(t) {
        var e = t;
        if (null === e.An) {
          e.An = [];
          var n = _u(e),
            t = Eu(e);
          if (null !== n && null === t)
            n.rt() || e.An.push(new ua(n)), e.An.push(new ua(li.ot(), 'asc'));
          else {
            for (var r = !1, i = 0, o = e.In; i < o.length; i++) {
              var s = o[i];
              e.An.push(s), s.field.rt() && (r = !0);
            }
            r ||
              ((n = 0 < e.In.length ? e.In[e.In.length - 1].dir : 'asc'),
              e.An.push(new ua(li.ot(), n)));
          }
        }
        return e.An;
      }
      function Iu(t) {
        var e = t;
        if (!e.Rn)
          if ('F' === e.limitType)
            e.Rn = Li(
              e.path,
              e.collectionGroup,
              Au(e),
              e.filters,
              e.limit,
              e.startAt,
              e.endAt
            );
          else {
            for (var n = [], r = 0, i = Au(e); r < i.length; r++) {
              var o = i[r],
                s = 'desc' === o.dir ? 'asc' : 'desc';
              n.push(new ua(o.field, s));
            }
            var u = e.endAt ? new $u(e.endAt.position, !e.endAt.before) : null,
              t = e.startAt
                ? new $u(e.startAt.position, !e.startAt.before)
                : null;
            e.Rn = Li(e.path, e.collectionGroup, n, e.filters, e.limit, u, t);
          }
        return e.Rn;
      }
      function Nu(t, e, n) {
        return new du(
          t.path,
          t.collectionGroup,
          t.In.slice(),
          t.filters.slice(),
          e,
          n,
          t.startAt,
          t.endAt
        );
      }
      function Lu(t, e) {
        return Ri(Iu(t), Iu(e)) && t.limitType === e.limitType;
      }
      function Ou(t) {
        return Oi(Iu(t)) + '|lt:' + t.limitType;
      }
      function Ru(t) {
        return (
          'Query(target=' +
          ((e = Iu(t)),
          (n = e.path.et()),
          null !== e.collectionGroup &&
            (n += ' collectionGroup=' + e.collectionGroup),
          0 < e.filters.length &&
            (n +=
              ', filters: [' +
              e.filters
                .map(function (t) {
                  return (t = t).field.et() + ' ' + t.op + ' ' + So(t.value);
                })
                .join(', ') +
              ']'),
          Ai(e.limit) || (n += ', limit: ' + e.limit),
          0 < e.orderBy.length &&
            (n +=
              ', orderBy: [' +
              e.orderBy
                .map(function (t) {
                  return (t = t).field.et() + ' (' + t.dir + ')';
                })
                .join(', ') +
              ']'),
          e.startAt && (n += ', startAt: ' + ia(e.startAt)),
          e.endAt && (n += ', endAt: ' + ia(e.endAt)),
          'Target(' + n + ')') +
          '; limitType=' +
          t.limitType +
          ')'
        );
        var e, n;
      }
      function Du(i, t) {
        return (
          (e = i),
          (n = t.key.path),
          (null !== e.collectionGroup
            ? t.key.ht(e.collectionGroup) && e.path.X(n)
            : pi.lt(e.path)
            ? e.path.isEqual(n)
            : e.path.Z(n)) &&
            (function (t) {
              for (var e = 0, n = i.In; e < n.length; e++) {
                var r = n[e];
                if (!r.field.rt() && null === t.field(r.field)) return;
              }
              return 1;
            })(t) &&
            (function (t) {
              for (var e = 0, n = i.filters; e < n.length; e++)
                if (!n[e].matches(t)) return;
              return 1;
            })(t) &&
            ((n = t),
            (!(t = i).startAt || oa(t.startAt, Au(t), n)) &&
              (!t.endAt || !oa(t.endAt, Au(t), n)))
        );
        var e, n;
      }
      function Su(u) {
        return function (t, e) {
          for (var n = !1, r = 0, i = Au(u); r < i.length; r++) {
            var o = i[r],
              s = (function (t, r, e) {
                e = t.field.rt()
                  ? pi.K(r.key, e.key)
                  : (function (t, e) {
                      var n = r.field(t),
                        t = e.field(t);
                      return null !== n && null !== t ? Ro(n, t) : Pr();
                    })(t.field, e);
                switch (t.dir) {
                  case 'asc':
                    return e;
                  case 'desc':
                    return -1 * e;
                  default:
                    return Pr();
                }
              })(o, t, e);
            if (0 !== s) return s;
            n = n || o.field.rt();
          }
          return 0;
        };
      }
      var ku,
        Cu =
          (f(Pu, (ku = function () {})),
          (Pu.create = function (t, e, n) {
            return t.rt()
              ? 'in' === e || 'not-in' === e
                ? this.yn(t, e, n)
                : new Mu(t, e, n)
              : 'array-contains' === e
              ? new Xu(t, n)
              : 'in' === e
              ? new Qu(t, n)
              : 'not-in' === e
              ? new Zu(t, n)
              : 'array-contains-any' === e
              ? new Ju(t, n)
              : new Pu(t, e, n);
          }),
          (Pu.yn = function (t, e, n) {
            return new ('in' === e ? ju : qu)(t, n);
          }),
          (Pu.prototype.matches = function (t) {
            t = t.field(this.field);
            return '!=' === this.op
              ? null !== t && this.gn(Ro(t, this.value))
              : null !== t &&
                  No(this.value) === No(t) &&
                  this.gn(Ro(t, this.value));
          }),
          (Pu.prototype.gn = function (t) {
            switch (this.op) {
              case '<':
                return t < 0;
              case '<=':
                return t <= 0;
              case '==':
                return 0 === t;
              case '!=':
                return 0 !== t;
              case '>':
                return 0 < t;
              case '>=':
                return 0 <= t;
              default:
                return Pr();
            }
          }),
          (Pu.prototype.Pn = function () {
            return 0 <= ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op);
          }),
          Pu);
      function Pu(t, e, n) {
        var r = this;
        return (
          ((r = ku.call(this) || this).field = t), (r.op = e), (r.value = n), r
        );
      }
      var Vu,
        xu,
        Uu,
        Mu =
          (f(Gu, (Uu = Cu)),
          (Gu.prototype.matches = function (t) {
            t = pi.K(t.key, this.key);
            return this.gn(t);
          }),
          Gu),
        ju =
          (f(Bu, (xu = Cu)),
          (Bu.prototype.matches = function (e) {
            return this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          Bu),
        qu =
          (f(Fu, (Vu = Cu)),
          (Fu.prototype.matches = function (e) {
            return !this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          Fu);
      function Fu(t, e) {
        var n = this;
        return ((n = Vu.call(this, t, 'not-in', e) || this).keys = zu(0, e)), n;
      }
      function Bu(t, e) {
        var n = this;
        return ((n = xu.call(this, t, 'in', e) || this).keys = zu(0, e)), n;
      }
      function Gu(t, e, n) {
        var r = this;
        return (
          ((r = Uu.call(this, t, e, n) || this).key = pi.ut(n.referenceValue)),
          r
        );
      }
      function zu(t, e) {
        return (
          (null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) ||
          []
        ).map(function (t) {
          return pi.ut(t.referenceValue);
        });
      }
      var Hu,
        Ku,
        Wu,
        Yu,
        Xu =
          (f(ra, (Yu = Cu)),
          (ra.prototype.matches = function (t) {
            t = t.field(this.field);
            return Uo(t) && Oo(t.arrayValue, this.value);
          }),
          ra),
        Qu =
          (f(na, (Wu = Cu)),
          (na.prototype.matches = function (t) {
            t = t.field(this.field);
            return null !== t && Oo(this.value.arrayValue, t);
          }),
          na),
        Zu =
          (f(ea, (Ku = Cu)),
          (ea.prototype.matches = function (t) {
            if (Oo(this.value.arrayValue, { nullValue: 'NULL_VALUE' }))
              return !1;
            t = t.field(this.field);
            return null !== t && !Oo(this.value.arrayValue, t);
          }),
          ea),
        Ju =
          (f(ta, (Hu = Cu)),
          (ta.prototype.matches = function (t) {
            var e = this,
              t = t.field(this.field);
            return (
              !(!Uo(t) || !t.arrayValue.values) &&
              t.arrayValue.values.some(function (t) {
                return Oo(e.value.arrayValue, t);
              })
            );
          }),
          ta),
        $u = function (t, e) {
          (this.position = t), (this.before = e);
        };
      function ta(t, e) {
        return Hu.call(this, t, 'array-contains-any', e) || this;
      }
      function ea(t, e) {
        return Ku.call(this, t, 'not-in', e) || this;
      }
      function na(t, e) {
        return Wu.call(this, t, 'in', e) || this;
      }
      function ra(t, e) {
        return Yu.call(this, t, 'array-contains', e) || this;
      }
      function ia(t) {
        return (t.before ? 'b' : 'a') + ':' + t.position.map(So).join(',');
      }
      function oa(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
            s = t.position[i],
            r = o.field.rt()
              ? pi.K(pi.ut(s.referenceValue), n.key)
              : Ro(s, n.field(o.field));
          if (('desc' === o.dir && (r *= -1), 0 !== r)) break;
        }
        return t.before ? r <= 0 : r < 0;
      }
      function sa(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length)
          return !1;
        for (var n = 0; n < t.position.length; n++)
          if (!Lo(t.position[n], e.position[n])) return !1;
        return !0;
      }
      var ua = function (t, e) {
        void 0 === e && (e = 'asc'), (this.field = t), (this.dir = e);
      };
      var aa =
          ((Ta.prototype.pn = function (t, e, n) {
            for (var r = n.bn, i = 0; i < this.mutations.length; i++) {
              var o = this.mutations[i];
              o.key.isEqual(t) && (e = Us(o, e, r[i]));
            }
            return e;
          }),
          (Ta.prototype.vn = function (t, e) {
            for (var n = 0, r = this.baseMutations; n < r.length; n++) {
              var i = r[n];
              i.key.isEqual(t) && (e = Ms(i, e, e, this.Vn));
            }
            for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
              var a = u[s];
              a.key.isEqual(t) && (e = Ms(a, e, o, this.Vn));
            }
            return e;
          }),
          (Ta.prototype.Sn = function (n) {
            var r = this,
              i = n;
            return (
              this.mutations.forEach(function (t) {
                var e = r.vn(t.key, n.get(t.key));
                e && (i = i.At(t.key, e));
              }),
              i
            );
          }),
          (Ta.prototype.keys = function () {
            return this.mutations.reduce(function (t, e) {
              return t.add(e.key);
            }, Ji());
          }),
          (Ta.prototype.isEqual = function (t) {
            return (
              this.batchId === t.batchId &&
              jr(this.mutations, t.mutations, js) &&
              jr(this.baseMutations, t.baseMutations, js)
            );
          }),
          Ta),
        ca =
          ((_a.from = function (t, e, n) {
            Vr(t.mutations.length === n.length);
            for (var r = Qi, i = t.mutations, o = 0; o < i.length; o++)
              r = r.At(i[o].key, n[o].version);
            return new _a(t, e, n, r);
          }),
          _a),
        ha =
          ((Ea.prototype.get = function (t) {
            var e = this.xn(t),
              e = this.Fn[e];
            if (void 0 !== e)
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                if (this.Nn(o, t)) return i;
              }
          }),
          (Ea.prototype.has = function (t) {
            return void 0 !== this.get(t);
          }),
          (Ea.prototype.set = function (t, e) {
            var n = this.xn(t),
              r = this.Fn[n];
            if (void 0 !== r) {
              for (var i = 0; i < r.length; i++)
                if (this.Nn(r[i][0], t)) return void (r[i] = [t, e]);
              r.push([t, e]);
            } else this.Fn[n] = [[t, e]];
          }),
          (Ea.prototype.delete = function (t) {
            var e = this.xn(t),
              n = this.Fn[e];
            if (void 0 === n) return !1;
            for (var r = 0; r < n.length; r++)
              if (this.Nn(n[r][0], t))
                return 1 === n.length ? delete this.Fn[e] : n.splice(r, 1), !0;
            return !1;
          }),
          (Ea.prototype.forEach = function (s) {
            Eo(this.Fn, function (t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                s(o, i);
              }
            });
          }),
          (Ea.prototype.Y = function () {
            return _o(this.Fn);
          }),
          Ea),
        fa =
          ((ba.prototype.catch = function (t) {
            return this.next(void 0, t);
          }),
          (ba.prototype.next = function (r, i) {
            var o = this;
            return (
              this.Ln && Pr(),
              (this.Ln = !0),
              this.Mn
                ? this.error
                  ? this.$n(i, this.error)
                  : this.Bn(r, this.result)
                : new ba(function (e, n) {
                    (o.On = function (t) {
                      o.Bn(r, t).next(e, n);
                    }),
                      (o.kn = function (t) {
                        o.$n(i, t).next(e, n);
                      });
                  })
            );
          }),
          (ba.prototype.qn = function () {
            var n = this;
            return new Promise(function (t, e) {
              n.next(t, e);
            });
          }),
          (ba.prototype.Un = function (t) {
            try {
              var e = t();
              return e instanceof ba ? e : ba.resolve(e);
            } catch (t) {
              return ba.reject(t);
            }
          }),
          (ba.prototype.Bn = function (t, e) {
            return t
              ? this.Un(function () {
                  return t(e);
                })
              : ba.resolve(e);
          }),
          (ba.prototype.$n = function (t, e) {
            return t
              ? this.Un(function () {
                  return t(e);
                })
              : ba.reject(e);
          }),
          (ba.resolve = function (n) {
            return new ba(function (t, e) {
              t(n);
            });
          }),
          (ba.reject = function (n) {
            return new ba(function (t, e) {
              e(n);
            });
          }),
          (ba.Qn = function (t) {
            return new ba(function (e, n) {
              var r = 0,
                i = 0,
                o = !1;
              t.forEach(function (t) {
                ++r,
                  t.next(
                    function () {
                      ++i, o && i === r && e();
                    },
                    function (t) {
                      return n(t);
                    }
                  );
              }),
                (o = !0),
                i === r && e();
            });
          }),
          (ba.Kn = function (t) {
            for (var n = ba.resolve(!1), e = 0, r = t; e < r.length; e++)
              !(function (e) {
                n = n.next(function (t) {
                  return t ? ba.resolve(t) : e();
                });
              })(r[e]);
            return n;
          }),
          (ba.forEach = function (t, n) {
            var r = this,
              i = [];
            return (
              t.forEach(function (t, e) {
                i.push(n.call(r, t, e));
              }),
              this.Qn(i)
            );
          }),
          ba),
        o =
          ((wa.prototype.Gn = function (t) {
            t = this.Wn.get(t);
            return t ? t.readTime : ci.min();
          }),
          (wa.prototype.zn = function (t, e) {
            this.Hn(), this.Wn.set(t.key, { Jn: t, readTime: e });
          }),
          (wa.prototype.Yn = function (t, e) {
            void 0 === e && (e = null),
              this.Hn(),
              this.Wn.set(t, { Jn: null, readTime: e });
          }),
          (wa.prototype.Xn = function (t, e) {
            this.Hn();
            var n = this.Wn.get(e);
            return void 0 !== n ? fa.resolve(n.Jn) : this.Zn(t, e);
          }),
          (wa.prototype.getEntries = function (t, e) {
            return this.ts(t, e);
          }),
          (wa.prototype.apply = function (t) {
            return this.Hn(), (this.jn = !0), this.es(t);
          }),
          (wa.prototype.Hn = function () {}),
          wa),
        _e =
          ((ma.prototype.ss = function (t) {
            this.ns.push(t);
          }),
          (ma.prototype.rs = function () {
            this.ns.forEach(function (t) {
              return t();
            });
          }),
          ma),
        la =
          ((ga.prototype.hs = function (e, n) {
            var r = this;
            return this.cs.ls(e, n).next(function (t) {
              return r._s(e, n, t);
            });
          }),
          (ga.prototype._s = function (t, r, i) {
            return this.os.Xn(t, r).next(function (t) {
              for (var e = 0, n = i; e < n.length; e++) t = n[e].vn(r, t);
              return t;
            });
          }),
          (ga.prototype.fs = function (t, e, i) {
            var o = Ki;
            return (
              e.forEach(function (t, e) {
                for (var n = 0, r = i; n < r.length; n++) e = r[n].vn(t, e);
                o = o.At(t, e);
              }),
              o
            );
          }),
          (ga.prototype.ds = function (e, t) {
            var n = this;
            return this.os.getEntries(e, t).next(function (t) {
              return n.ws(e, t);
            });
          }),
          (ga.prototype.ws = function (e, r) {
            var i = this;
            return this.cs.Es(e, r).next(function (t) {
              var t = i.fs(e, r, t),
                n = Ki;
              return (
                t.forEach(function (t, e) {
                  (e = e || new lu(t, ci.min())), (n = n.At(t, e));
                }),
                n
              );
            });
          }),
          (ga.prototype.Ts = function (t, e, n) {
            return (
              (r = e),
              pi.lt(r.path) &&
              null === r.collectionGroup &&
              0 === r.filters.length
                ? this.Is(t, e.path)
                : Tu(e)
                ? this.As(t, e, n)
                : this.Rs(t, e, n)
            );
            var r;
          }),
          (ga.prototype.Is = function (t, e) {
            return this.hs(t, new pi(e)).next(function (t) {
              var e = Xi;
              return t instanceof fu && (e = e.At(t.key, t)), e;
            });
          }),
          (ga.prototype.As = function (n, r, i) {
            var o = this,
              s = r.collectionGroup,
              u = Xi;
            return this.us.Ps(n, s).next(function (t) {
              return fa
                .forEach(t, function (t) {
                  var e,
                    e =
                      ((e = r),
                      (t = t.child(s)),
                      new du(
                        t,
                        null,
                        e.In.slice(),
                        e.filters.slice(),
                        e.limit,
                        e.limitType,
                        e.startAt,
                        e.endAt
                      ));
                  return o.Rs(n, e, i).next(function (t) {
                    t.forEach(function (t, e) {
                      u = u.At(t, e);
                    });
                  });
                })
                .next(function () {
                  return u;
                });
            });
          }),
          (ga.prototype.Rs = function (e, n, t) {
            var c,
              h,
              r = this;
            return this.os
              .Ts(e, n, t)
              .next(function (t) {
                return (c = t), r.cs.ys(e, n);
              })
              .next(function (t) {
                return (
                  (h = t),
                  r.gs(e, h, c).next(function (t) {
                    c = t;
                    for (var e = 0, n = h; e < n.length; e++)
                      for (
                        var r = n[e], i = 0, o = r.mutations;
                        i < o.length;
                        i++
                      ) {
                        var s = o[i],
                          u = s.key,
                          a = c.get(u),
                          a = Ms(s, a, a, r.Vn);
                        c = a instanceof fu ? c.At(u, a) : c.remove(u);
                      }
                  })
                );
              })
              .next(function () {
                return (
                  c.forEach(function (t, e) {
                    Du(n, e) || (c = c.remove(t));
                  }),
                  c
                );
              });
          }),
          (ga.prototype.gs = function (t, e, n) {
            for (var r = Ji(), i = 0, o = e; i < o.length; i++)
              for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                var a = u[s];
                a instanceof zs && null === n.get(a.key) && (r = r.add(a.key));
              }
            var c = n;
            return this.os.getEntries(t, r).next(function (t) {
              return (
                t.forEach(function (t, e) {
                  null !== e && e instanceof fu && (c = c.At(t, e));
                }),
                c
              );
            });
          }),
          ga),
        pa =
          ((va.bs = function (t, e) {
            for (
              var n = Ji(), r = Ji(), i = 0, o = e.docChanges;
              i < o.length;
              i++
            ) {
              var s = o[i];
              switch (s.type) {
                case 0:
                  n = n.add(s.doc.key);
                  break;
                case 1:
                  r = r.add(s.doc.key);
              }
            }
            return new va(t, e.fromCache, n, r);
          }),
          va),
        da =
          ((ya.prototype.Ss = function (t) {
            return (
              (this.previousValue = Math.max(t, this.previousValue)),
              this.previousValue
            );
          }),
          (ya.prototype.next = function () {
            var t = ++this.previousValue;
            return this.Ds && this.Ds(t), t;
          }),
          ya);
      function ya(t, e) {
        var n = this;
        (this.previousValue = t),
          e &&
            ((e.vs = function (t) {
              return n.Ss(t);
            }),
            (this.Ds = function (t) {
              return e.Cs(t);
            }));
      }
      function va(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.Vs = n), (this.ps = r);
      }
      function ga(t, e, n) {
        (this.os = t), (this.cs = e), (this.us = n);
      }
      function ma() {
        this.ns = [];
      }
      function wa() {
        (this.Wn = new ha(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
          (this.jn = !1);
      }
      function ba(t) {
        var e = this;
        (this.On = null),
          (this.kn = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.Mn = !1),
          (this.Ln = !1),
          t(
            function (t) {
              (e.Mn = !0), (e.result = t), e.On && e.On(t);
            },
            function (t) {
              (e.Mn = !0), (e.error = t), e.kn && e.kn(t);
            }
          );
      }
      function Ea(t, e) {
        (this.xn = t), (this.Nn = e), (this.Fn = {});
      }
      function _a(t, e, n, r) {
        (this.batch = t), (this.Dn = e), (this.bn = n), (this.Cn = r);
      }
      function Ta(t, e, n, r) {
        (this.batchId = t),
          (this.Vn = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      da.xs = -1;
      var Aa = function () {
          var n = this;
          this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          });
        },
        Ia =
          ((Na.prototype.reset = function () {
            this.Ls = 0;
          }),
          (Na.prototype.qs = function () {
            this.Ls = this.Ms;
          }),
          (Na.prototype.Us = function (t) {
            var e = this;
            this.cancel();
            var n = Math.floor(this.Ls + this.Qs()),
              r = Math.max(0, Date.now() - this.Bs),
              i = Math.max(0, n - r);
            0 < i &&
              Dr(
                'ExponentialBackoff',
                'Backing off for ' +
                  i +
                  ' ms (base delay: ' +
                  this.Ls +
                  ' ms, delay with jitter: ' +
                  n +
                  ' ms, last attempt: ' +
                  r +
                  ' ms ago)'
              ),
              (this.$s = this.Ns.Ks(this.Fs, i, function () {
                return (e.Bs = Date.now()), t();
              })),
              (this.Ls *= this.ks),
              this.Ls < this.Os && (this.Ls = this.Os),
              this.Ls > this.Ms && (this.Ls = this.Ms);
          }),
          (Na.prototype.Ws = function () {
            null !== this.$s && (this.$s.js(), (this.$s = null));
          }),
          (Na.prototype.cancel = function () {
            null !== this.$s && (this.$s.cancel(), (this.$s = null));
          }),
          (Na.prototype.Qs = function () {
            return (Math.random() - 0.5) * this.Ls;
          }),
          Na);
      function Na(t, e, n, r, i) {
        void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Ns = t),
          (this.Fs = e),
          (this.Os = n),
          (this.ks = r),
          (this.Ms = i),
          (this.Ls = 0),
          (this.$s = null),
          (this.Bs = Date.now()),
          this.reset();
      }
      function La(t) {
        return 'IndexedDbTransactionError' === t.name;
      }
      function Oa() {
        return 'undefined' != typeof document ? document : null;
      }
      var Ra =
          ((ka.Ai = function (t, e, n, r, i) {
            i = new ka(t, e, Date.now() + n, r, i);
            return i.start(n), i;
          }),
          (ka.prototype.start = function (t) {
            var e = this;
            this.Ri = setTimeout(function () {
              return e.Pi();
            }, t);
          }),
          (ka.prototype.js = function () {
            return this.Pi();
          }),
          (ka.prototype.cancel = function (t) {
            null !== this.Ri &&
              (this.clearTimeout(),
              this.Ii.reject(
                new Nr(
                  Ir.CANCELLED,
                  'Operation cancelled' + (t ? ': ' + t : '')
                )
              ));
          }),
          (ka.prototype.Pi = function () {
            var e = this;
            this.Ei.yi(function () {
              return null !== e.Ri
                ? (e.clearTimeout(),
                  e.op().then(function (t) {
                    return e.Ii.resolve(t);
                  }))
                : Promise.resolve();
            });
          }),
          (ka.prototype.clearTimeout = function () {
            null !== this.Ri &&
              (this.mi(this), clearTimeout(this.Ri), (this.Ri = null));
          }),
          ka),
        Da =
          (Object.defineProperty(Sa.prototype, 'Ni', {
            get: function () {
              return this.pi;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Sa.prototype.yi = function (t) {
            this.enqueue(t);
          }),
          (Sa.prototype.Fi = function (t) {
            this.Oi(), this.ki(t);
          }),
          (Sa.prototype.Mi = function () {
            var t;
            this.pi ||
              ((this.pi = !0),
              (t = Oa()) &&
                'function' == typeof t.removeEventListener &&
                t.removeEventListener('visibilitychange', this.xi));
          }),
          (Sa.prototype.enqueue = function (t) {
            return (
              this.Oi(), this.pi ? new Promise(function (t) {}) : this.ki(t)
            );
          }),
          (Sa.prototype.Li = function (t) {
            var e = this;
            this.yi(function () {
              return e.Vi.push(t), e.$i();
            });
          }),
          (Sa.prototype.$i = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (0 === this.Vi.length) return [3, 5];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.Vi[0]()];
                  case 2:
                    return t.sent(), this.Vi.shift(), this.Ci.reset(), [3, 4];
                  case 3:
                    if (!La((e = t.sent()))) throw e;
                    return (
                      Dr(
                        'AsyncQueue',
                        'Operation failed with retryable error: ' + e
                      ),
                      [3, 4]
                    );
                  case 4:
                    0 < this.Vi.length &&
                      this.Ci.Us(function () {
                        return n.$i();
                      }),
                      (t.label = 5);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (Sa.prototype.ki = function (t) {
            var r = this,
              e = this.gi.then(function () {
                return (
                  (r.Si = !0),
                  t()
                    .catch(function (t) {
                      throw (
                        ((r.vi = t),
                        (r.Si = !1),
                        Sr(
                          'INTERNAL UNHANDLED ERROR: ',
                          ((n = (e = t).message || ''),
                          e.stack &&
                            (n = e.stack.includes(e.message)
                              ? e.stack
                              : e.message + '\n' + e.stack),
                          n)
                        ),
                        t)
                      );
                      var e, n;
                    })
                    .then(function (t) {
                      return (r.Si = !1), t;
                    })
                );
              });
            return (this.gi = e);
          }),
          (Sa.prototype.Ks = function (t, e, n) {
            var r = this;
            this.Oi(), -1 < this.Di.indexOf(t) && (e = 0);
            n = Ra.Ai(this, t, e, n, function (t) {
              return r.Bi(t);
            });
            return this.bi.push(n), n;
          }),
          (Sa.prototype.Oi = function () {
            this.vi && Pr();
          }),
          (Sa.prototype.qi = function () {}),
          (Sa.prototype.Ui = function () {
            return y(this, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, (e = this.gi)];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    if (e !== this.gi) return [3, 0];
                    t.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (Sa.prototype.Qi = function (t) {
            for (var e = 0, n = this.bi; e < n.length; e++)
              if (n[e].Fs === t) return !0;
            return !1;
          }),
          (Sa.prototype.Ki = function (r) {
            var i = this;
            return this.Ui().then(function () {
              i.bi.sort(function (t, e) {
                return t.Ti - e.Ti;
              });
              for (var t = 0, e = i.bi; t < e.length; t++) {
                var n = e[t];
                if ((n.js(), 'all' !== r && n.Fs === r)) break;
              }
              return i.Ui();
            });
          }),
          (Sa.prototype.Wi = function (t) {
            this.Di.push(t);
          }),
          (Sa.prototype.Bi = function (t) {
            t = this.bi.indexOf(t);
            this.bi.splice(t, 1);
          }),
          Sa);
      function Sa() {
        var e = this;
        (this.gi = Promise.resolve()),
          (this.Vi = []),
          (this.pi = !1),
          (this.bi = []),
          (this.vi = null),
          (this.Si = !1),
          (this.Di = []),
          (this.Ci = new Ia(this, 'async_queue_retry')),
          (this.xi = function () {
            var t = Oa();
            t &&
              Dr(
                'AsyncQueue',
                'Visibility state changed to ' + t.visibilityState
              ),
              e.Ci.Ws();
          });
        var t = Oa();
        t &&
          'function' == typeof t.addEventListener &&
          t.addEventListener('visibilitychange', this.xi);
      }
      function ka(t, e, n, r, i) {
        (this.Ei = t),
          (this.Fs = e),
          (this.Ti = n),
          (this.op = r),
          (this.mi = i),
          (this.Ii = new Aa()),
          (this.then = this.Ii.promise.then.bind(this.Ii.promise)),
          this.Ii.promise.catch(function (t) {});
      }
      function Ca(t, e) {
        if ((Sr('AsyncQueue', e + ': ' + t), La(t)))
          return new Nr(Ir.UNAVAILABLE, e + ': ' + t);
        throw t;
      }
      function Pa(t) {
        this.Cr = t;
      }
      var Va =
        ((xa.prototype.pr = function (t) {
          this.br = t;
        }),
        (xa.prototype.Ts = function (e, r, i, o) {
          var s = this;
          return (0 === r.filters.length &&
            null === r.limit &&
            null == r.startAt &&
            null == r.endAt &&
            (0 === r.In.length || (1 === r.In.length && r.In[0].field.rt()))) ||
            i.isEqual(ci.min())
            ? this.vr(e, r)
            : this.br.ds(e, o).next(function (t) {
                var n = s.Sr(r, t);
                return (wu(r) || bu(r)) && s.Dr(r.limitType, n, o, i)
                  ? s.vr(e, r)
                  : (Rr() <= u.DEBUG &&
                      Dr(
                        'QueryEngine',
                        'Re-using previous result from %s to execute query: %s',
                        i.toString(),
                        Ru(r)
                      ),
                    s.br.Ts(e, r, i).next(function (e) {
                      return (
                        n.forEach(function (t) {
                          e = e.At(t.key, t);
                        }),
                        e
                      );
                    }));
              });
        }),
        (xa.prototype.Sr = function (n, t) {
          var r = new zi(Su(n));
          return (
            t.forEach(function (t, e) {
              e instanceof fu && Du(n, e) && (r = r.add(e));
            }),
            r
          );
        }),
        (xa.prototype.Dr = function (t, e, n, r) {
          if (n.size !== e.size) return !0;
          e = 'F' === t ? e.last() : e.first();
          return !!e && (e.hasPendingWrites || 0 < e.version.u(r));
        }),
        (xa.prototype.vr = function (t, e) {
          return (
            Rr() <= u.DEBUG &&
              Dr(
                'QueryEngine',
                'Using full collection scan to execute query:',
                Ru(e)
              ),
            this.br.Ts(t, e, ci.min())
          );
        }),
        xa);
      function xa() {}
      function Ua(t) {
        var e = ss({ parent: t.parent, structuredQuery: t.structuredQuery });
        return 'LAST' === t.limitType ? Nu(e, e.limit, 'L') : e;
      }
      var Ma =
          ((Ga.prototype.Lr = function (t, e) {
            return this.lo.add(e), fa.resolve();
          }),
          (Ga.prototype.Ps = function (t, e) {
            return fa.resolve(this.lo.getEntries(e));
          }),
          Ga),
        ja =
          ((Ba.prototype.add = function (t) {
            var e = t.J(),
              n = t.G(),
              r = this.index[e] || new zi(hi.K),
              t = !r.has(n);
            return (this.index[e] = r.add(n)), t;
          }),
          (Ba.prototype.has = function (t) {
            var e = t.J(),
              t = t.G(),
              e = this.index[e];
            return e && e.has(t);
          }),
          (Ba.prototype.getEntries = function (t) {
            return (this.index[t] || new zi(hi.K)).tt();
          }),
          Ba),
        qa =
          ((Fa.prototype.next = function () {
            return (this.mo += 2), this.mo;
          }),
          (Fa.Io = function () {
            return new Fa(0);
          }),
          (Fa.Ao = function () {
            return new Fa(-1);
          }),
          Fa);
      function Fa(t) {
        this.mo = t;
      }
      function Ba() {
        this.index = {};
      }
      function Ga() {
        this.lo = new ja();
      }
      function za(n, r) {
        void 0 === r && (r = 10240);
        var i = 0;
        return {
          read: function () {
            return y(this, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                return i < n.byteLength
                  ? ((e = { value: n.slice(i, i + r), done: !1 }),
                    [2, ((i += r), e)])
                  : [2, { done: !0 }];
              });
            });
          },
          cancel: function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return [2];
              });
            });
          },
          releaseLock: function () {}
        };
      }
      function Ha(t, e) {
        if (t instanceof Uint8Array) return za(t, e);
        if (t instanceof ArrayBuffer) return za(new Uint8Array(t), e);
        if (t instanceof ReadableStream) return t.getReader();
        throw new Error(
          'Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream'
        );
      }
      function Ka(t) {
        return new Go(t, !0);
      }
      var Wa =
          ((Ja.prototype.Mc = function () {
            return 'metadata' in this.payload;
          }),
          Ja),
        Ya =
          ((Za.qc = function (t, e) {
            return new Za(Ha(t, 10240), e);
          }),
          (Za.prototype.close = function () {
            return this.Lc.cancel();
          }),
          (Za.prototype.getMetadata = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return [2, this.metadata.promise];
              });
            });
          }),
          (Za.prototype.Uc = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.getMetadata()];
                  case 1:
                    return [2, (t.sent(), this.Bc())];
                }
              });
            });
          }),
          (Za.prototype.Bc = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Qc()];
                  case 1:
                    return null === (e = t.sent())
                      ? [2, null]
                      : ((r = this.$c.decode(e)),
                        (n = Number(r)),
                        isNaN(n) &&
                          this.Kc(
                            'length string (' + r + ') is not valid number'
                          ),
                        [4, this.Wc(n)]);
                  case 2:
                    return (
                      (r = t.sent()), [2, new Wa(JSON.parse(r), e.length + n)]
                    );
                }
              });
            });
          }),
          (Za.prototype.jc = function () {
            return this.buffer.findIndex(function (t) {
              return t === '{'.charCodeAt(0);
            });
          }),
          (Za.prototype.Qc = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.jc() < 0 ? [4, this.Gc()] : [3, 3];
                  case 1:
                    if (t.sent()) return [3, 3];
                    t.label = 2;
                  case 2:
                    return [3, 0];
                  case 3:
                    return 0 === this.buffer.length
                      ? [2, null]
                      : ((e = this.jc()) < 0 &&
                          this.Kc(
                            'Reached the end of bundle when a length string is expected.'
                          ),
                        (n = this.buffer.slice(0, e)),
                        [2, ((this.buffer = this.buffer.slice(e)), n)]);
                }
              });
            });
          }),
          (Za.prototype.Wc = function (n) {
            return y(this, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.buffer.length < n ? [4, this.Gc()] : [3, 3];
                  case 1:
                    t.sent() &&
                      this.Kc(
                        'Reached the end of bundle when more is expected.'
                      ),
                      (t.label = 2);
                  case 2:
                    return [3, 0];
                  case 3:
                    return (
                      (e = this.$c.decode(this.buffer.slice(0, n))),
                      [2, ((this.buffer = this.buffer.slice(n)), e)]
                    );
                }
              });
            });
          }),
          (Za.prototype.Kc = function (t) {
            throw (this.Lc.cancel(), new Error('Invalid bundle format: ' + t));
          }),
          (Za.prototype.Gc = function () {
            return y(this, void 0, void 0, function () {
              var e, n;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Lc.read()];
                  case 1:
                    return (
                      (e = t.sent()).done ||
                        ((n = new Uint8Array(
                          this.buffer.length + e.value.length
                        )).set(this.buffer),
                        n.set(e.value, this.buffer.length),
                        (this.buffer = n)),
                      [2, e.done]
                    );
                }
              });
            });
          }),
          Za),
        Xa =
          ((Qa.prototype.zc = function (t) {
            return $o(this.serializer, t);
          }),
          (Qa.prototype.Hc = function (t) {
            return t.metadata.exists
              ? ((e = this.serializer),
                (n = t.document),
                (r = $o(e, n.name)),
                (e = Xo(n.updateTime)),
                (n = new nu({ mapValue: { fields: n.fields } })),
                new fu(r, e, n, { hasCommittedMutations: !1 }))
              : new lu(this.zc(t.metadata.name), this.Jc(t.metadata.readTime));
            var e, n, r;
          }),
          (Qa.prototype.Jc = Xo),
          Qa);
      function Qa(t) {
        this.serializer = t;
      }
      function Za(t, e) {
        var n = this;
        (this.Lc = t),
          (this.serializer = e),
          (this.metadata = new Aa()),
          (this.buffer = new Uint8Array()),
          (this.$c = new TextDecoder('utf-8')),
          this.Bc().then(
            function (t) {
              t && t.Mc()
                ? n.metadata.resolve(t.payload.metadata)
                : n.metadata.reject(
                    new Error(
                      'The first element of the bundle is not a metadata, it is\n             ' +
                        JSON.stringify(null == t ? void 0 : t.payload)
                    )
                  );
            },
            function (t) {
              return n.metadata.reject(t);
            }
          );
      }
      function Ja(t, e) {
        (this.payload = t), (this.byteLength = e);
      }
      function $a(t) {
        return {
          taskState: 'Running',
          documentsLoaded: 0,
          bytesLoaded: 0,
          totalDocuments: t.totalDocuments,
          totalBytes: t.totalBytes
        };
      }
      function tc(t, e) {
        (this.progress = t), (this.Yc = e);
      }
      var ec =
          ((ic.prototype.ta = function (t) {
            this.progress.bytesLoaded += t.byteLength;
            var e = this.progress.documentsLoaded;
            return (
              t.payload.namedQuery
                ? this.queries.push(t.payload.namedQuery)
                : t.payload.documentMetadata
                ? (this.documents.push({
                    metadata: t.payload.documentMetadata
                  }),
                  t.payload.documentMetadata.exists || ++e)
                : t.payload.document &&
                  ((this.documents[this.documents.length - 1].document =
                    t.payload.document),
                  ++e),
              e !== this.progress.documentsLoaded
                ? ((this.progress.documentsLoaded = e),
                  Object.assign({}, this.progress))
                : null
            );
          }),
          (ic.prototype.ea = function (t) {
            for (
              var e = new Map(), n = new Xa(this.serializer), r = 0, i = t;
              r < i.length;
              r++
            ) {
              var o = i[r];
              if (o.metadata.queries)
                for (
                  var s = n.zc(o.metadata.name), u = 0, a = o.metadata.queries;
                  u < a.length;
                  u++
                ) {
                  var c = a[u],
                    h = (e.get(c) || Ji()).add(s);
                  e.set(c, h);
                }
            }
            return e;
          }),
          (ic.prototype.complete = function () {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      (function (l, p, d) {
                        return y(this, void 0, void 0, function () {
                          var n, e, r, i, o, s, u, a, c, h, f;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                for (
                                  e = new Xa((n = l).serializer),
                                    r = Ji(),
                                    i = Ki,
                                    o = Qi,
                                    s = 0,
                                    u = p;
                                  s < u.length;
                                  s++
                                )
                                  (a = u[s]),
                                    (c = e.zc(a.metadata.name)),
                                    a.document && (r = r.add(c)),
                                    (i = i.At(c, e.Hc(a))),
                                    (o = o.At(c, e.Jc(a.metadata.readTime)));
                                return (
                                  (h = n.na.oo({ co: !0 })),
                                  [
                                    4,
                                    hc(n, Iu(mu(hi.nt('__bundle__/docs/' + d))))
                                  ]
                                );
                              case 1:
                                return (
                                  (f = t.sent()),
                                  [
                                    2,
                                    n.persistence.runTransaction(
                                      'Apply bundle documents',
                                      'readwrite',
                                      function (e) {
                                        return cc(e, h, i, ci.min(), o)
                                          .next(function (t) {
                                            return h.apply(e), t;
                                          })
                                          .next(function (t) {
                                            return n.Zo.No(e, f.targetId)
                                              .next(function () {
                                                return n.Zo.ko(
                                                  e,
                                                  r,
                                                  f.targetId
                                                );
                                              })
                                              .next(function () {
                                                return n.sa.ws(e, t);
                                              });
                                          });
                                      }
                                    )
                                  ]
                                );
                            }
                          });
                        });
                      })(this.Zc, this.documents, this.Xc.id)
                    ];
                  case 1:
                    (e = t.sent()),
                      (n = this.ea(this.documents)),
                      (r = 0),
                      (i = this.queries),
                      (t.label = 2);
                  case 2:
                    return r < i.length
                      ? ((i = i[r]),
                        [
                          4,
                          (function (e, i, o) {
                            return (
                              void 0 === o && (o = Ji()),
                              y(this, void 0, void 0, function () {
                                var n, r;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [4, hc(e, Iu(Ua(i.bundledQuery)))];
                                    case 1:
                                      return (
                                        (n = t.sent()),
                                        [
                                          2,
                                          (r = e).persistence.runTransaction(
                                            'Save named query',
                                            'readwrite',
                                            function (t) {
                                              var e = Xo(i.readTime);
                                              if (0 <= n.wt.u(e))
                                                return r.tc.Eo(t, i);
                                              e = n.Tt(qr.h, e);
                                              return (
                                                (r.ra = r.ra.At(e.targetId, e)),
                                                r.Zo.Co(t, e)
                                                  .next(function () {
                                                    return r.Zo.No(
                                                      t,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r.Zo.ko(
                                                      t,
                                                      o,
                                                      n.targetId
                                                    );
                                                  })
                                                  .next(function () {
                                                    return r.tc.Eo(t, i);
                                                  })
                                              );
                                            }
                                          )
                                        ]
                                      );
                                  }
                                });
                              })
                            );
                          })(this.Zc, i, n.get(i.name))
                        ])
                      : [3, 5];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return r++, [3, 2];
                  case 5:
                    return [
                      2,
                      ((this.progress.taskState = 'Success'),
                      new tc(Object.assign({}, this.progress), e))
                    ];
                }
              });
            });
          }),
          ic),
        nc =
          ((rc.prototype.wr = function (e) {
            var n = this;
            return this.persistence.runTransaction(
              'Collect garbage',
              'readwrite-primary',
              function (t) {
                return e.yr(t, n.ra);
              }
            );
          }),
          rc);
      function rc(t, e, n, r) {
        (this.persistence = t),
          (this.ia = e),
          (this.serializer = r),
          (this.ra = new Ui(Mr)),
          (this.oa = new ha(Oi, Ri)),
          (this.ca = ci.min()),
          (this.cs = t.bc(n)),
          (this.na = t.Sc()),
          (this.Zo = t.vc()),
          (this.sa = new la(this.na, this.cs, this.persistence.Dc())),
          (this.tc = t.Cc()),
          this.ia.pr(this.sa);
      }
      function ic(t, e, n) {
        (this.Xc = t),
          (this.Zc = e),
          (this.serializer = n),
          (this.queries = []),
          (this.documents = []),
          (this.progress = $a(t));
      }
      function oc(i, o) {
        return y(this, void 0, void 0, function () {
          var e, n, m, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (n = (e = i).cs),
                  (m = e.sa),
                  [
                    4,
                    e.persistence.runTransaction(
                      'Handle user change',
                      'readonly',
                      function (v) {
                        var g;
                        return e.cs
                          .Qr(v)
                          .next(function (t) {
                            return (
                              (g = t),
                              (n = e.persistence.bc(o)),
                              (m = new la(e.na, n, e.persistence.Dc())),
                              n.Qr(v)
                            );
                          })
                          .next(function (t) {
                            for (
                              var e = [], n = [], r = Ji(), i = 0, o = g;
                              i < o.length;
                              i++
                            ) {
                              var s = o[i];
                              e.push(s.batchId);
                              for (
                                var u = 0, a = s.mutations;
                                u < a.length;
                                u++
                              )
                                var c = a[u], r = r.add(c.key);
                            }
                            for (var h = 0, f = t; h < f.length; h++) {
                              var l = f[h];
                              n.push(l.batchId);
                              for (
                                var p = 0, d = l.mutations;
                                p < d.length;
                                p++
                              ) {
                                var y = d[p];
                                r = r.add(y.key);
                              }
                            }
                            return m.ds(v, r).next(function (t) {
                              return { aa: t, ua: e, ha: n };
                            });
                          });
                      }
                    )
                  ]
                );
              case 1:
                return (
                  (r = t.sent()),
                  [2, ((e.cs = n), (e.sa = m), e.ia.pr(e.sa), r)]
                );
            }
          });
        });
      }
      function sc(t, h) {
        var f = t;
        return f.persistence.runTransaction(
          'Acknowledge batch',
          'readwrite-primary',
          function (t) {
            var e,
              r,
              i,
              o,
              s,
              n,
              u,
              a = h.batch.keys(),
              c = f.na.oo({ co: !0 });
            return (
              (e = f),
              (r = t),
              (o = c),
              (s = (i = h).batch),
              (n = s.keys()),
              (u = fa.resolve()),
              n.forEach(function (n) {
                u = u
                  .next(function () {
                    return o.Xn(r, n);
                  })
                  .next(function (t) {
                    var e = t,
                      t = i.Cn.get(n);
                    Vr(null !== t),
                      (!e || e.version.u(t) < 0) &&
                        (e = s.pn(n, e, i)) &&
                        o.zn(e, i.Dn);
                  });
              }),
              u
                .next(function () {
                  return e.cs.Wr(r, s);
                })
                .next(function () {
                  return c.apply(t);
                })
                .next(function () {
                  return f.cs.Hr(t);
                })
                .next(function () {
                  return f.sa.ds(t, a);
                })
            );
          }
        );
      }
      function uc(t) {
        var e = t;
        return e.persistence.runTransaction(
          'Get last remote snapshot version',
          'readonly',
          function (t) {
            return e.Zo.Vo(t);
          }
        );
      }
      function ac(t, r) {
        var a = t,
          c = r.wt,
          h = a.ra;
        return a.persistence
          .runTransaction('Apply remote event', 'readwrite-primary', function (
            s
          ) {
            var t = a.na.oo({ co: !0 });
            h = a.ra;
            var u = [];
            r.ce.forEach(function (t, e) {
              var n,
                r,
                i,
                o = h.get(e);
              o &&
                (u.push(
                  a.Zo.Lo(s, t.Ee, e).next(function () {
                    return a.Zo.ko(s, t.de, e);
                  })
                ),
                0 < (i = t.resumeToken).o() &&
                  ((n = o.Tt(i, c).Et(s.qo)),
                  (h = h.At(e, n)),
                  (r = o),
                  (i = t),
                  Vr(0 < (o = n).resumeToken.o()),
                  (0 === r.resumeToken.o() ||
                    3e8 <= o.wt.B() - r.wt.B() ||
                    0 < i.de.size + i.we.size + i.Ee.size) &&
                    u.push(a.Zo.Co(s, n))));
            });
            var e,
              n = Ki;
            return (
              r.ue.forEach(function (t, e) {
                r.he.has(t) && u.push(a.persistence.Nr.kc(s, t));
              }),
              u.push(
                cc(s, t, r.ue, c, void 0).next(function (t) {
                  n = t;
                })
              ),
              c.isEqual(ci.min()) ||
                ((e = a.Zo.Vo(s).next(function (t) {
                  return a.Zo.bo(s, s.qo, c);
                })),
                u.push(e)),
              fa
                .Qn(u)
                .next(function () {
                  return t.apply(s);
                })
                .next(function () {
                  return a.sa.ws(s, n);
                })
            );
          })
          .then(function (t) {
            return (a.ra = h), t;
          });
      }
      function cc(t, s, e, u, a) {
        var n = Ji();
        return (
          e.forEach(function (t) {
            return (n = n.add(t));
          }),
          s.getEntries(t, n).next(function (i) {
            var o = Ki;
            return (
              e.forEach(function (t, e) {
                var n = i.get(t),
                  r = (null == a ? void 0 : a.get(t)) || u;
                e instanceof lu && e.version.isEqual(ci.min())
                  ? (s.Yn(t, r), (o = o.At(t, e)))
                  : null == n ||
                    0 < e.version.u(n.version) ||
                    (0 === e.version.u(n.version) && n.hasPendingWrites)
                  ? (s.zn(e, r), (o = o.At(t, e)))
                  : Dr(
                      'LocalStore',
                      'Ignoring outdated watch update for ',
                      t,
                      '. Current version:',
                      n.version,
                      ' Watch version:',
                      e.version
                    );
              }),
              o
            );
          })
        );
      }
      function hc(t, r) {
        var i = t;
        return i.persistence
          .runTransaction('Allocate target', 'readwrite', function (e) {
            var n;
            return i.Zo.Oo(e, r).next(function (t) {
              return t
                ? ((n = t), fa.resolve(n))
                : i.Zo.Ro(e).next(function (t) {
                    return (
                      (n = new Ci(r, t, 0, e.qo)),
                      i.Zo.vo(e, n).next(function () {
                        return n;
                      })
                    );
                  });
            });
          })
          .then(function (t) {
            var e = i.ra.get(t.targetId);
            return (
              (null === e || 0 < t.wt.u(e.wt)) &&
                ((i.ra = i.ra.At(t.targetId, t)), i.oa.set(r, t.targetId)),
              t
            );
          });
      }
      function fc(i, o, s) {
        return y(this, void 0, void 0, function () {
          var e, n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = (e = i).ra.get(o)),
                  (r = s ? 'readwrite' : 'readwrite-primary'),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 4, , 5]),
                  s
                    ? [3, 3]
                    : [
                        4,
                        e.persistence.runTransaction(
                          'Release target',
                          r,
                          function (t) {
                            return e.persistence.Nr.removeTarget(t, n);
                          }
                        )
                      ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [3, 5];
              case 4:
                if (!La((r = t.sent()))) throw r;
                return (
                  Dr(
                    'LocalStore',
                    'Failed to update sequence numbers for target ' +
                      o +
                      ': ' +
                      r
                  ),
                  [3, 5]
                );
              case 5:
                return (e.ra = e.ra.remove(o)), e.oa.delete(n.target), [2];
            }
          });
        });
      }
      function lc(t, o, s) {
        var u = t,
          a = ci.min(),
          c = Ji();
        return u.persistence.runTransaction(
          'Execute query',
          'readonly',
          function (e) {
            return (
              (t = u),
              (n = e),
              (r = Iu(o)),
              (void 0 !== (t = (i = t).oa.get(r))
                ? fa.resolve(i.ra.get(t))
                : i.Zo.Oo(n, r)
              )
                .next(function (t) {
                  if (t)
                    return (
                      (a = t.lastLimboFreeSnapshotVersion),
                      u.Zo.Bo(e, t.targetId).next(function (t) {
                        c = t;
                      })
                    );
                })
                .next(function () {
                  return u.ia.Ts(e, o, s ? a : ci.min(), s ? c : Ji());
                })
                .next(function (t) {
                  return { documents: t, la: c };
                })
            );
            var t, n, r, i;
          }
        );
      }
      function pc(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            if (
              e.code !== Ir.FAILED_PRECONDITION ||
              'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.' !==
                e.message
            )
              throw e;
            return Dr('LocalStore', 'Unexpectedly lost primary lease'), [2];
          });
        });
      }
      function dc(t, e, n, r, i) {
        var o = this;
        (this.Zc = t),
          (this.eu = e),
          (this.Ei = n),
          (this.nu = {}),
          (this.su = []),
          (this.iu = new Map()),
          (this.ru = new Set()),
          (this.ou = []),
          (this.cu = i),
          this.cu.au(function (t) {
            n.yi(function () {
              return y(o, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return Vc(this)
                        ? (Dr(
                            'RemoteStore',
                            'Restarting streams for network reachability change.'
                          ),
                          [
                            4,
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).ru.add(4), [4, Oc(e)];
                                    case 1:
                                      return (
                                        t.sent(),
                                        e.uu.set('Unknown'),
                                        e.ru.delete(4),
                                        [4, Lc(e)]
                                      );
                                    case 2:
                                      return t.sent(), [2];
                                  }
                                });
                              });
                            })(this)
                          ])
                        : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (this.uu = new Ec(n, r));
      }
      var yc,
        vc,
        gc,
        Te =
          ((Nc.prototype.Ta = function () {
            return 1 === this.state || 2 === this.state || 4 === this.state;
          }),
          (Nc.prototype.ma = function () {
            return 2 === this.state;
          }),
          (Nc.prototype.start = function () {
            3 !== this.state ? this.auth() : this.Ia();
          }),
          (Nc.prototype.stop = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.Ta() ? [4, this.close(0)] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Nc.prototype.Aa = function () {
            (this.state = 0), this.Ci.reset();
          }),
          (Nc.prototype.Ra = function () {
            var t = this;
            this.ma() &&
              null === this.Ea &&
              (this.Ea = this.Ns.Ks(this._a, 6e4, function () {
                return t.Pa();
              }));
          }),
          (Nc.prototype.ya = function (t) {
            this.ga(), this.stream.send(t);
          }),
          (Nc.prototype.Pa = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return this.ma() ? [2, this.close(0)] : [2];
              });
            });
          }),
          (Nc.prototype.ga = function () {
            this.Ea && (this.Ea.cancel(), (this.Ea = null));
          }),
          (Nc.prototype.close = function (e, n) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.ga(),
                      this.Ci.cancel(),
                      this.wa++,
                      3 !== e
                        ? this.Ci.reset()
                        : n && n.code === Ir.RESOURCE_EXHAUSTED
                        ? (Sr(n.toString()),
                          Sr(
                            'Using maximum backoff delay to prevent overloading the backend.'
                          ),
                          this.Ci.qs())
                        : n && n.code === Ir.UNAUTHENTICATED && this.da.v(),
                      null !== this.stream &&
                        (this.Va(), this.stream.close(), (this.stream = null)),
                      (this.state = e),
                      [4, this.listener.pa(n)]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Nc.prototype.Va = function () {}),
          (Nc.prototype.auth = function () {
            var n = this;
            this.state = 1;
            var t = this.ba(this.wa),
              e = this.wa;
            this.da.getToken().then(
              function (t) {
                n.wa === e && n.va(t);
              },
              function (e) {
                t(function () {
                  var t = new Nr(
                    Ir.UNKNOWN,
                    'Fetching auth token failed: ' + e.message
                  );
                  return n.Sa(t);
                });
              }
            );
          }),
          (Nc.prototype.va = function (t) {
            var e = this,
              n = this.ba(this.wa);
            (this.stream = this.Da(t)),
              this.stream.Ca(function () {
                n(function () {
                  return (e.state = 2), e.listener.Ca();
                });
              }),
              this.stream.pa(function (t) {
                n(function () {
                  return e.Sa(t);
                });
              }),
              this.stream.onMessage(function (t) {
                n(function () {
                  return e.onMessage(t);
                });
              });
          }),
          (Nc.prototype.Ia = function () {
            var t = this;
            (this.state = 4),
              this.Ci.Us(function () {
                return y(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    return (this.state = 0), this.start(), [2];
                  });
                });
              });
          }),
          (Nc.prototype.Sa = function (t) {
            return (
              Dr('PersistentStream', 'close with error: ' + t),
              (this.stream = null),
              this.close(3, t)
            );
          }),
          (Nc.prototype.ba = function (e) {
            var n = this;
            return function (t) {
              n.Ns.yi(function () {
                return n.wa === e
                  ? t()
                  : (Dr(
                      'PersistentStream',
                      'stream callback skipped by getCloseGuardedDispatcher.'
                    ),
                    Promise.resolve());
              });
            };
          }),
          Nc),
        mc =
          (f(Ic, (gc = Te)),
          (Ic.prototype.Da = function (t) {
            return this.fa.xa('Listen', t);
          }),
          (Ic.prototype.onMessage = function (t) {
            this.Ci.reset();
            var e = (function (t, e) {
                if ('targetChange' in e) {
                  e.targetChange;
                  var n =
                      'NO_CHANGE' ===
                      (o = e.targetChange.targetChangeType || 'NO_CHANGE')
                        ? 0
                        : 'ADD' === o
                        ? 1
                        : 'REMOVE' === o
                        ? 2
                        : 'CURRENT' === o
                        ? 3
                        : 'RESET' === o
                        ? 4
                        : Pr(),
                    r = e.targetChange.targetIds || [],
                    i =
                      ((s = e.targetChange.resumeToken),
                      t.nn
                        ? (Vr(void 0 === s || 'string' == typeof s),
                          qr.fromBase64String(s || ''))
                        : (Vr(void 0 === s || s instanceof Uint8Array),
                          qr.fromUint8Array(s || new Uint8Array()))),
                    o =
                      (u = e.targetChange.cause) &&
                      ((a = void 0 === (c = u).code ? Ir.UNKNOWN : xi(c.code)),
                      new Nr(a, c.message || '')),
                    s = new uo(n, r, i, o || null);
                } else if ('documentChange' in e) {
                  e.documentChange,
                    (n = e.documentChange).document,
                    n.document.name,
                    n.document.updateTime,
                    (r = $o(t, n.document.name)),
                    (i = Xo(n.document.updateTime));
                  var u = new nu({ mapValue: { fields: n.document.fields } }),
                    a = ((o = new fu(r, i, u, {})), n.targetIds || []),
                    c = n.removedTargetIds || [];
                  s = new oo(a, c, o.key, o);
                } else if ('documentDelete' in e)
                  e.documentDelete,
                    (n = e.documentDelete).document,
                    (r = $o(t, n.document)),
                    (i = n.readTime ? Xo(n.readTime) : ci.min()),
                    (u = new lu(r, i)),
                    (o = n.removedTargetIds || []),
                    (s = new oo([], o, u.key, u));
                else if ('documentRemove' in e)
                  e.documentRemove,
                    (n = e.documentRemove).document,
                    (r = $o(t, n.document)),
                    (i = n.removedTargetIds || []),
                    (s = new oo([], i, r, null));
                else {
                  if (!('filter' in e)) return Pr();
                  e.filter;
                  e = e.filter;
                  e.targetId,
                    (n = e.count || 0),
                    (r = new Si(n)),
                    (i = e.targetId),
                    (s = new so(i, r));
                }
                return s;
              })(this.serializer, t),
              t = (function (t) {
                if (!('targetChange' in t)) return ci.min();
                t = t.targetChange;
                return (!t.targetIds || !t.targetIds.length) && t.readTime
                  ? Xo(t.readTime)
                  : ci.min();
              })(t);
            return this.listener.Na(e, t);
          }),
          (Ic.prototype.Fa = function (t) {
            var e,
              n,
              r,
              i = {};
            (i.database = es(this.serializer)),
              (i.addTarget =
                ((e = this.serializer),
                ((r = Di((r = (n = t).target))
                  ? { documents: { documents: [ts(e, r.path)] } }
                  : { query: os(e, r) }).targetId = n.targetId),
                0 < n.resumeToken.o()
                  ? (r.resumeToken = Yo(e, n.resumeToken))
                  : 0 < n.wt.u(ci.min()) && (r.readTime = Wo(e, n.wt.q())),
                r));
            var o,
              t =
                (this.serializer,
                (o = t),
                null ==
                (t = (function () {
                  switch (o.dt) {
                    case 0:
                      return null;
                    case 1:
                      return 'existence-filter-mismatch';
                    case 2:
                      return 'limbo-document';
                    default:
                      return Pr();
                  }
                })())
                  ? null
                  : { 'goog-listen-tags': t });
            t && (i.labels = t), this.ya(i);
          }),
          (Ic.prototype.Oa = function (t) {
            var e = {};
            (e.database = es(this.serializer)),
              (e.removeTarget = t),
              this.ya(e);
          }),
          Ic),
        wc =
          (f(Ac, (vc = Te)),
          Object.defineProperty(Ac.prototype, 'Ma', {
            get: function () {
              return this.ka;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ac.prototype.start = function () {
            (this.ka = !1),
              (this.lastStreamToken = void 0),
              vc.prototype.start.call(this);
          }),
          (Ac.prototype.Va = function () {
            this.ka && this.La([]);
          }),
          (Ac.prototype.Da = function (t) {
            return this.fa.xa('Write', t);
          }),
          (Ac.prototype.onMessage = function (t) {
            if (
              (Vr(!!t.streamToken),
              (this.lastStreamToken = t.streamToken),
              this.ka)
            ) {
              this.Ci.reset();
              var e =
                  ((n = t.writeResults),
                  (r = t.commitTime),
                  n && 0 < n.length
                    ? (Vr(void 0 !== r),
                      n.map(function (t) {
                        return (function (t, e) {
                          var n = t.updateTime ? Xo(t.updateTime) : Xo(e);
                          n.isEqual(ci.min()) && (n = Xo(e));
                          e = null;
                          return (
                            t.transformResults &&
                              0 < t.transformResults.length &&
                              (e = t.transformResults),
                            new Cs(n, e)
                          );
                        })(t, r);
                      }))
                    : []),
                n = Xo(t.commitTime);
              return this.listener.$a(n, e);
            }
            var n, r;
            return (
              Vr(!t.writeResults || 0 === t.writeResults.length),
              (this.ka = !0),
              this.listener.Ba()
            );
          }),
          (Ac.prototype.qa = function () {
            var t = {};
            (t.database = es(this.serializer)), this.ya(t);
          }),
          (Ac.prototype.La = function (t) {
            var e = this,
              t = {
                streamToken: this.lastStreamToken,
                writes: t.map(function (t) {
                  return is(e.serializer, t);
                })
              };
            this.ya(t);
          }),
          Ac),
        bc =
          (f(Tc, (yc = function () {})),
          (Tc.prototype.Qa = function () {
            if (this.Ua)
              throw new Nr(
                Ir.FAILED_PRECONDITION,
                'The client has already been terminated.'
              );
          }),
          (Tc.prototype.Ka = function (e, n, r) {
            var i = this;
            return (
              this.Qa(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.fa.Ka(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Ir.UNAUTHENTICATED && i.credentials.v(), t);
                })
            );
          }),
          (Tc.prototype.Wa = function (e, n, r) {
            var i = this;
            return (
              this.Qa(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.fa.Wa(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Ir.UNAUTHENTICATED && i.credentials.v(), t);
                })
            );
          }),
          (Tc.prototype.terminate = function () {
            this.Ua = !1;
          }),
          Tc),
        Ec =
          ((_c.prototype.Ja = function () {
            var t = this;
            0 === this.Ga &&
              (this.Ya('Unknown'),
              (this.za = this.Ei.Ks('online_state_timeout', 1e4, function () {
                return (
                  (t.za = null),
                  t.Xa("Backend didn't respond within 10 seconds."),
                  t.Ya('Offline'),
                  Promise.resolve()
                );
              })));
          }),
          (_c.prototype.Za = function (t) {
            'Online' === this.state
              ? this.Ya('Unknown')
              : (this.Ga++,
                1 <= this.Ga &&
                  (this.tu(),
                  this.Xa(
                    'Connection failed 1 times. Most recent error: ' +
                      t.toString()
                  ),
                  this.Ya('Offline')));
          }),
          (_c.prototype.set = function (t) {
            this.tu(),
              (this.Ga = 0),
              'Online' === t && (this.Ha = !1),
              this.Ya(t);
          }),
          (_c.prototype.Ya = function (t) {
            t !== this.state && ((this.state = t), this.ja(t));
          }),
          (_c.prototype.Xa = function (t) {
            t =
              'Could not reach Cloud Firestore backend. ' +
              t +
              '\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.';
            this.Ha ? (Sr(t), (this.Ha = !1)) : Dr('OnlineStateTracker', t);
          }),
          (_c.prototype.tu = function () {
            null !== this.za && (this.za.cancel(), (this.za = null));
          }),
          _c);
      function _c(t, e) {
        (this.Ei = t),
          (this.ja = e),
          (this.state = 'Unknown'),
          (this.Ga = 0),
          (this.za = null),
          (this.Ha = !0);
      }
      function Tc(t, e, n) {
        var r = this;
        return (
          ((r = yc.call(this) || this).credentials = t),
          (r.fa = e),
          (r.serializer = n),
          (r.Ua = !1),
          r
        );
      }
      function Ac(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            vc.call(
              this,
              t,
              'write_stream_connection_backoff',
              'write_stream_idle',
              e,
              n,
              i
            ) || this).serializer = r),
          (o.ka = !1),
          o
        );
      }
      function Ic(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            gc.call(
              this,
              t,
              'listen_stream_connection_backoff',
              'listen_stream_idle',
              e,
              n,
              i
            ) || this).serializer = r),
          o
        );
      }
      function Nc(t, e, n, r, i, o) {
        (this.Ns = t),
          (this._a = n),
          (this.fa = r),
          (this.da = i),
          (this.listener = o),
          (this.state = 0),
          (this.wa = 0),
          (this.Ea = null),
          (this.stream = null),
          (this.Ci = new Ia(t, e));
      }
      function Lc(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Vc(r)) return [3, 4];
                (e = 0), (n = r.ou), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function Oc(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (e = 0), (n = r.ou), (t.label = 1);
              case 1:
                return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }
      function Rc(t, e) {
        t.iu.has(e.targetId) ||
          (t.iu.set(e.targetId, e), Pc(t) ? Cc(t) : Gc(t).ma() && Sc(t, e));
      }
      function Dc(t, e) {
        var n = t,
          t = Gc(n);
        n.iu.delete(e),
          t.ma() && kc(n, e),
          0 === n.iu.size && (t.ma() ? t.Ra() : Vc(n) && n.uu.set('Unknown'));
      }
      function Sc(t, e) {
        t.hu.xe(e.targetId), Gc(t).Fa(e);
      }
      function kc(t, e) {
        t.hu.xe(e), Gc(t).Oa(e);
      }
      function Cc(e) {
        (e.hu = new co({
          tn: function (t) {
            return e.nu.tn(t);
          },
          en: function (t) {
            return e.iu.get(t) || null;
          }
        })),
          Gc(e).start(),
          e.uu.Ja();
      }
      function Pc(t) {
        return Vc(t) && !Gc(t).Ta() && 0 < t.iu.size;
      }
      function Vc(t) {
        return 0 === t.ru.size;
      }
      function xc(t) {
        t.hu = void 0;
      }
      function Uc(s, u, a) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  (s.uu.set('Online'),
                  !(u instanceof uo && 2 === u.state && u.cause))
                )
                  return [3, 6];
                t.label = 1;
              case 1:
                return (
                  t.trys.push([1, 3, , 5]),
                  [
                    4,
                    (function (o, s) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (e = s.cause),
                                (n = 0),
                                (r = s.targetIds),
                                (t.label = 1);
                            case 1:
                              return n < r.length
                                ? ((i = r[n]),
                                  o.iu.has(i) ? [4, o.nu.lu(i, e)] : [3, 3])
                                : [3, 5];
                            case 2:
                              t.sent(),
                                o.iu.delete(i),
                                o.hu.removeTarget(i),
                                (t.label = 3);
                            case 3:
                              t.label = 4;
                            case 4:
                              return n++, [3, 1];
                            case 5:
                              return [2];
                          }
                        });
                      });
                    })(s, u)
                  ]
                );
              case 2:
                return t.sent(), [3, 5];
              case 3:
                return (
                  (n = t.sent()),
                  Dr(
                    'RemoteStore',
                    'Failed to remove targets %s: %s ',
                    u.targetIds.join(','),
                    n
                  ),
                  [4, Mc(s, n)]
                );
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [3, 13];
              case 6:
                if (
                  (u instanceof oo
                    ? s.hu.Be(u)
                    : u instanceof so
                    ? s.hu.ze(u)
                    : s.hu.Qe(u),
                  a.isEqual(ci.min()))
                )
                  return [3, 13];
                t.label = 7;
              case 7:
                return t.trys.push([7, 11, , 13]), [4, uc(s.Zc)];
              case 8:
                return (
                  (o = t.sent()),
                  0 <= a.u(o)
                    ? [
                        4,
                        ((i = a),
                        (e = (r = s).hu.Ye(i)).ce.forEach(function (t, e) {
                          var n;
                          0 < t.resumeToken.o() &&
                            (n = r.iu.get(e)) &&
                            r.iu.set(e, n.Tt(t.resumeToken, i));
                        }),
                        e.ae.forEach(function (t) {
                          var e = r.iu.get(t);
                          e &&
                            (r.iu.set(t, e.Tt(qr.h, e.wt)),
                            kc(r, t),
                            (e = new Ci(e.target, t, 1, e.sequenceNumber)),
                            Sc(r, e));
                        }),
                        r.nu._u(e))
                      ]
                    : [3, 10]
                );
              case 9:
                t.sent(), (t.label = 10);
              case 10:
                return [3, 13];
              case 11:
                return (
                  Dr(
                    'RemoteStore',
                    'Failed to raise snapshot:',
                    (o = t.sent())
                  ),
                  [4, Mc(s, o)]
                );
              case 12:
                return t.sent(), [3, 13];
              case 13:
                return [2];
            }
            var r, i, e;
          });
        });
      }
      function Mc(n, r, i) {
        return y(this, void 0, void 0, function () {
          var e = this;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!La(r)) throw r;
                return n.ru.add(1), [4, Oc(n)];
              case 1:
                return (
                  t.sent(),
                  n.uu.set('Offline'),
                  (i =
                    i ||
                    function () {
                      return uc(n.Zc);
                    }),
                  n.Ei.Li(function () {
                    return y(e, void 0, void 0, function () {
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              Dr('RemoteStore', 'Retrying IndexedDB access'),
                              [4, i()]
                            );
                          case 1:
                            return t.sent(), n.ru.delete(1), [4, Lc(n)];
                          case 2:
                            return t.sent(), [2];
                        }
                      });
                    });
                  }),
                  [2]
                );
            }
          });
        });
      }
      function jc(e, n) {
        return n().catch(function (t) {
          return Mc(e, t, n);
        });
      }
      function qc(a) {
        return y(this, void 0, void 0, function () {
          var i, o, s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (o = zc((i = a))),
                  (s = 0 < i.su.length ? i.su[i.su.length - 1].batchId : -1),
                  (t.label = 1);
              case 1:
                if (!(Vc(i) && i.su.length < 10)) return [3, 7];
                t.label = 2;
              case 2:
                return (
                  t.trys.push([2, 4, , 6]),
                  [
                    4,
                    ((e = i.Zc),
                    (n = s),
                    (r = e).persistence.runTransaction(
                      'Get next mutation batch',
                      'readonly',
                      function (t) {
                        return void 0 === n && (n = -1), r.cs.qr(t, n);
                      }
                    ))
                  ]
                );
              case 3:
                return null === (u = t.sent())
                  ? (0 === i.su.length && o.Ra(), [3, 7])
                  : ((s = u.batchId),
                    (function (t, e) {
                      t.su.push(e);
                      t = zc(t);
                      t.ma() && t.Ma && t.La(e.mutations);
                    })(i, u),
                    [3, 6]);
              case 4:
                return (u = t.sent()), [4, Mc(i, u)];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [3, 1];
              case 7:
                return Fc(i) && Bc(i), [2];
            }
            var e, n, r;
          });
        });
      }
      function Fc(t) {
        return Vc(t) && !zc(t).Ta() && 0 < t.su.length;
      }
      function Bc(t) {
        zc(t).start();
      }
      function Gc(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.wu ||
            ((n.wu =
              ((t = n.eu),
              (e = n.Ei),
              (r = {
                Ca: function (n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return (
                        n.iu.forEach(function (t, e) {
                          Sc(n, t);
                        }),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                pa: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return (
                        xc(e),
                        Pc(e) ? (e.uu.Za(n), Cc(e)) : e.uu.set('Unknown'),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                Na: Uc.bind(null, n)
              }),
              t.Qa(),
              new mc(e, t.fa, t.credentials, t.serializer, r))),
            n.ou.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e
                        ? (n.wu.Aa(),
                          Pc(n) ? Cc(n) : n.uu.set('Unknown'),
                          [3, 3])
                        : [3, 1];
                    case 1:
                      return [4, n.wu.stop()];
                    case 2:
                      t.sent(), xc(n), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            })),
          n.wu
        );
      }
      function zc(n) {
        var t,
          e,
          r,
          i = this;
        return (
          n.Eu ||
            ((n.Eu =
              ((t = n.eu),
              (e = n.Ei),
              (r = {
                Ca: function (e) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      return zc(e).qa(), [2];
                    });
                  });
                }.bind(null, n),
                pa: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return n && zc(e).Ma
                            ? [
                                4,
                                (function (r, i) {
                                  return y(this, void 0, void 0, function () {
                                    var e, n;
                                    return v(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return Vi((n = i.code)) &&
                                            n !== Ir.ABORTED
                                            ? ((e = r.su.shift()),
                                              zc(r).Aa(),
                                              [
                                                4,
                                                jc(r, function () {
                                                  return r.nu.du(e.batchId, i);
                                                })
                                              ])
                                            : [3, 3];
                                        case 1:
                                          return t.sent(), [4, qc(r)];
                                        case 2:
                                          t.sent(), (t.label = 3);
                                        case 3:
                                          return [2];
                                      }
                                    });
                                  });
                                })(e, n)
                              ]
                            : [3, 2];
                        case 1:
                          t.sent(), (t.label = 2);
                        case 2:
                          return Fc(e) && Bc(e), [2];
                      }
                    });
                  });
                }.bind(null, n),
                Ba: function (o) {
                  return y(this, void 0, void 0, function () {
                    var e, n, r, i;
                    return v(this, function (t) {
                      for (e = zc(o), n = 0, r = o.su; n < r.length; n++)
                        (i = r[n]), e.La(i.mutations);
                      return [2];
                    });
                  });
                }.bind(null, n),
                $a: function (r, i, o) {
                  return y(this, void 0, void 0, function () {
                    var e, n;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            (e = r.su.shift()),
                            (n = ca.from(e, i, o)),
                            [
                              4,
                              jc(r, function () {
                                return r.nu.fu(n);
                              })
                            ]
                          );
                        case 1:
                          return t.sent(), [4, qc(r)];
                        case 2:
                          return t.sent(), [2];
                      }
                    });
                  });
                }.bind(null, n)
              }),
              t.Qa(),
              new wc(e, t.fa, t.credentials, t.serializer, r))),
            n.ou.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e ? (n.Eu.Aa(), [4, qc(n)]) : [3, 2];
                    case 1:
                      return t.sent(), [3, 4];
                    case 2:
                      return [4, n.Eu.stop()];
                    case 3:
                      t.sent(),
                        0 < n.su.length &&
                          (Dr(
                            'RemoteStore',
                            'Stopping write stream with ' +
                              n.su.length +
                              ' pending writes'
                          ),
                          (n.su = [])),
                        (t.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            })),
          n.Eu
        );
      }
      function Hc() {
        (this.queries = new ha(Ou, Lu)),
          (this.onlineState = 'Unknown'),
          (this.mu = new Set());
      }
      var Kc = function () {
        (this.Tu = void 0), (this.listeners = []);
      };
      function Wc(s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  ((e = s),
                  (n = u.query),
                  (r = !1),
                  (i = e.queries.get(n)) || ((r = !0), (i = new Kc())),
                  !r)
                )
                  return [3, 4];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), (o = i), [4, e.Iu(n)];
              case 2:
                return (o.Tu = t.sent()), [3, 4];
              case 3:
                return (
                  (o = t.sent()),
                  (o = Ca(
                    o,
                    "Initialization of query '" + Ru(u.query) + "' failed"
                  )),
                  [2, void u.onError(o)]
                );
              case 4:
                return (
                  e.queries.set(n, i),
                  i.listeners.push(u),
                  u.Au(e.onlineState),
                  i.Tu && u.Ru(i.Tu) && Xc(e),
                  [2]
                );
            }
          });
        });
      }
      function Yc(s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return v(this, function (t) {
            return (
              (e = s),
              (n = u.query),
              (r = !1),
              (i = e.queries.get(n)) &&
                0 <= (o = i.listeners.indexOf(u)) &&
                (i.listeners.splice(o, 1), (r = 0 === i.listeners.length)),
              r ? [2, (e.queries.delete(n), e.Pu(n))] : [2]
            );
          });
        });
      }
      function Xc(t) {
        t.mu.forEach(function (t) {
          t.next();
        });
      }
      var Qc =
          ((ph.prototype.Ru = function (t) {
            if (!this.options.includeMetadataChanges) {
              for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 !== i.type && e.push(i);
              }
              t = new no(t.query, t.docs, t.ne, e, t.se, t.fromCache, t.ie, !0);
            }
            var o = !1;
            return (
              this.gu
                ? this.pu(t) && (this.yu.next(t), (o = !0))
                : this.bu(t, this.onlineState) && (this.vu(t), (o = !0)),
              (this.Vu = t),
              o
            );
          }),
          (ph.prototype.onError = function (t) {
            this.yu.error(t);
          }),
          (ph.prototype.Au = function (t) {
            this.onlineState = t;
            var e = !1;
            return (
              this.Vu &&
                !this.gu &&
                this.bu(this.Vu, t) &&
                (this.vu(this.Vu), (e = !0)),
              e
            );
          }),
          (ph.prototype.bu = function (t, e) {
            if (!t.fromCache) return !0;
            var n = 'Offline' !== e;
            return !((this.options.Su && n) || (t.docs.Y() && 'Offline' !== e));
          }),
          (ph.prototype.pu = function (t) {
            if (0 < t.docChanges.length) return !0;
            var e = this.Vu && this.Vu.hasPendingWrites !== t.hasPendingWrites;
            return !(!t.ie && !e) && !0 === this.options.includeMetadataChanges;
          }),
          (ph.prototype.vu = function (t) {
            (t = no.oe(t.query, t.docs, t.se, t.fromCache)),
              (this.gu = !0),
              this.yu.next(t);
          }),
          ph),
        Zc =
          ((lh.prototype.Y = function () {
            return this.Du.Y();
          }),
          (lh.prototype.Mo = function (t, e) {
            e = new Jc(t, e);
            (this.Du = this.Du.add(e)), (this.xu = this.xu.add(e));
          }),
          (lh.prototype.Fu = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.Mo(t, e);
            });
          }),
          (lh.prototype.$o = function (t, e) {
            this.Ou(new Jc(t, e));
          }),
          (lh.prototype.ku = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.$o(t, e);
            });
          }),
          (lh.prototype.Mu = function (t) {
            var e = this,
              n = new pi(new hi([])),
              r = new Jc(n, t),
              t = new Jc(n, t + 1),
              i = [];
            return (
              this.xu.jt([r, t], function (t) {
                e.Ou(t), i.push(t.key);
              }),
              i
            );
          }),
          (lh.prototype.Lu = function () {
            var e = this;
            this.Du.forEach(function (t) {
              return e.Ou(t);
            });
          }),
          (lh.prototype.Ou = function (t) {
            (this.Du = this.Du.delete(t)), (this.xu = this.xu.delete(t));
          }),
          (lh.prototype.$u = function (t) {
            var e = new pi(new hi([])),
              n = new Jc(e, t),
              t = new Jc(e, t + 1),
              r = Ji();
            return (
              this.xu.jt([n, t], function (t) {
                r = r.add(t.key);
              }),
              r
            );
          }),
          (lh.prototype.Jr = function (t) {
            var e = new Jc(t, 0),
              e = this.Du.zt(e);
            return null !== e && t.isEqual(e.key);
          }),
          lh),
        Jc =
          ((fh.Cu = function (t, e) {
            return pi.K(t.key, e.key) || Mr(t.Bu, e.Bu);
          }),
          (fh.Nu = function (t, e) {
            return Mr(t.Bu, e.Bu) || pi.K(t.key, e.key);
          }),
          fh),
        $c =
          ((hh.prototype.Qu = function (t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
          }),
          (hh.prototype.Ku = function (t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
          }),
          (hh.prototype.Uu = function () {
            var t = {
              activeTargetIds: this.activeTargetIds.tt(),
              updateTimeMs: Date.now()
            };
            return JSON.stringify(t);
          }),
          hh),
        th =
          ((ch.prototype.lh = function (t) {}),
          (ch.prototype.fh = function (t, e, n) {}),
          (ch.prototype.wh = function (t) {
            return this.$h.Qu(t), this.Bh[t] || 'not-current';
          }),
          (ch.prototype.Ah = function (t, e, n) {
            this.Bh[t] = e;
          }),
          (ch.prototype.Th = function (t) {
            this.$h.Ku(t);
          }),
          (ch.prototype.mh = function (t) {
            return this.$h.activeTargetIds.has(t);
          }),
          (ch.prototype.Ih = function (t) {
            delete this.Bh[t];
          }),
          (ch.prototype.ah = function () {
            return this.$h.activeTargetIds;
          }),
          (ch.prototype.hh = function (t) {
            return this.$h.activeTargetIds.has(t);
          }),
          (ch.prototype.start = function () {
            return (this.$h = new $c()), Promise.resolve();
          }),
          (ch.prototype.Ph = function (t, e, n) {}),
          (ch.prototype.yh = function (t) {}),
          (ch.prototype.Ac = function () {}),
          (ch.prototype.Cs = function (t) {}),
          (ch.prototype.Vh = function () {}),
          ch),
        eh = function (t) {
          this.key = t;
        },
        nh = function (t) {
          this.key = t;
        },
        rh =
          (Object.defineProperty(ah.prototype, 'jh', {
            get: function () {
              return this.qh;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ah.prototype.Gh = function (t, e) {
            var s = this,
              u = e ? e.zh : new eo(),
              a = (e || this).Wh,
              c = (e || this).se,
              h = a,
              f = !1,
              l =
                wu(this.query) && a.size === this.query.limit ? a.last() : null,
              p =
                bu(this.query) && a.size === this.query.limit
                  ? a.first()
                  : null;
            if (
              (t.gt(function (t, e) {
                var n = a.get(t),
                  r =
                    (r = e instanceof fu ? e : null) &&
                    (Du(s.query, r) ? r : null),
                  i = !!n && s.se.has(n.key),
                  o =
                    !!r &&
                    (r.ln || (s.se.has(r.key) && r.hasCommittedMutations)),
                  e = !1;
                n && r
                  ? n.data().isEqual(r.data())
                    ? i !== o && (u.track({ type: 3, doc: r }), (e = !0))
                    : s.Hh(n, r) ||
                      (u.track({ type: 2, doc: r }),
                      (e = !0),
                      ((l && 0 < s.Kh(r, l)) || (p && s.Kh(r, p) < 0)) &&
                        (f = !0))
                  : !n && r
                  ? (u.track({ type: 0, doc: r }), (e = !0))
                  : n &&
                    !r &&
                    (u.track({ type: 1, doc: n }),
                    (e = !0),
                    (l || p) && (f = !0)),
                  e &&
                    (c = r
                      ? ((h = h.add(r)), o ? c.add(t) : c.delete(t))
                      : ((h = h.delete(t)), c.delete(t)));
              }),
              wu(this.query) || bu(this.query))
            )
              for (; h.size > this.query.limit; ) {
                var n = wu(this.query) ? h.last() : h.first(),
                  h = h.delete(n.key),
                  c = c.delete(n.key);
                u.track({ type: 1, doc: n });
              }
            return { Wh: h, zh: u, Dr: f, se: c };
          }),
          (ah.prototype.Hh = function (t, e) {
            return t.ln && e.hasCommittedMutations && !e.ln;
          }),
          (ah.prototype.es = function (t, e, n) {
            var o = this,
              r = this.Wh;
            (this.Wh = t.Wh), (this.se = t.se);
            var i = t.zh.ee();
            i.sort(function (t, e) {
              return (
                (r = t.type), (i = e.type), n(r) - n(i) || o.Kh(t.doc, e.doc)
              );
              function n(t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return Pr();
                }
              }
              var r, i;
            }),
              this.Jh(n);
            var s = e ? this.Yh() : [],
              n = 0 === this.Qh.size && this.fe ? 1 : 0,
              e = n !== this.Uh;
            return (
              (this.Uh = n),
              0 !== i.length || e
                ? {
                    snapshot: new no(
                      this.query,
                      t.Wh,
                      r,
                      i,
                      t.se,
                      0 == n,
                      e,
                      !1
                    ),
                    Xh: s
                  }
                : { Xh: s }
            );
          }),
          (ah.prototype.Au = function (t) {
            return this.fe && 'Offline' === t
              ? ((this.fe = !1),
                this.es({ Wh: this.Wh, zh: new eo(), se: this.se, Dr: !1 }, !1))
              : { Xh: [] };
          }),
          (ah.prototype.Zh = function (t) {
            return !this.qh.has(t) && !!this.Wh.has(t) && !this.Wh.get(t).ln;
          }),
          (ah.prototype.Jh = function (t) {
            var e = this;
            t &&
              (t.de.forEach(function (t) {
                return (e.qh = e.qh.add(t));
              }),
              t.we.forEach(function (t) {}),
              t.Ee.forEach(function (t) {
                return (e.qh = e.qh.delete(t));
              }),
              (this.fe = t.fe));
          }),
          (ah.prototype.Yh = function () {
            var e = this;
            if (!this.fe) return [];
            var n = this.Qh;
            (this.Qh = Ji()),
              this.Wh.forEach(function (t) {
                e.Zh(t.key) && (e.Qh = e.Qh.add(t.key));
              });
            var r = [];
            return (
              n.forEach(function (t) {
                e.Qh.has(t) || r.push(new nh(t));
              }),
              this.Qh.forEach(function (t) {
                n.has(t) || r.push(new eh(t));
              }),
              r
            );
          }),
          (ah.prototype.tl = function (t) {
            (this.qh = t.la), (this.Qh = Ji());
            t = this.Gh(t.documents);
            return this.es(t, !0);
          }),
          (ah.prototype.el = function () {
            return no.oe(this.query, this.Wh, this.se, 0 === this.Uh);
          }),
          ah),
        ih = function (t, e, n) {
          (this.query = t), (this.targetId = e), (this.view = n);
        },
        oh = function (t) {
          (this.key = t), (this.nl = !1);
        },
        sh =
          (Object.defineProperty(uh.prototype, 'ml', {
            get: function () {
              return !0 === this.Tl;
            },
            enumerable: !1,
            configurable: !0
          }),
          uh);
      function uh(t, e, n, r, i, o) {
        (this.Zc = t),
          (this.sl = e),
          (this.il = n),
          (this.rl = r),
          (this.currentUser = i),
          (this.ol = o),
          (this.cl = {}),
          (this.al = new ha(Ou, Lu)),
          (this.ul = new Map()),
          (this.hl = []),
          (this.ll = new Ui(pi.K)),
          (this._l = new Map()),
          (this.fl = new Zc()),
          (this.dl = {}),
          (this.wl = new Map()),
          (this.El = qa.Ao()),
          (this.onlineState = 'Unknown'),
          (this.Tl = void 0);
      }
      function ah(t, e) {
        (this.query = t),
          (this.qh = e),
          (this.Uh = null),
          (this.fe = !1),
          (this.Qh = Ji()),
          (this.se = Ji()),
          (this.Kh = Su(t)),
          (this.Wh = new to(this.Kh));
      }
      function ch() {
        (this.$h = new $c()),
          (this.Bh = {}),
          (this.ja = null),
          (this.vs = null);
      }
      function hh() {
        this.activeTargetIds = $i;
      }
      function fh(t, e) {
        (this.key = t), (this.Bu = e);
      }
      function lh() {
        (this.Du = new zi(Jc.Cu)), (this.xu = new zi(Jc.Nu));
      }
      function ph(t, e, n) {
        (this.query = t),
          (this.yu = e),
          (this.gu = !1),
          (this.Vu = null),
          (this.onlineState = 'Unknown'),
          (this.options = n || {});
      }
      function dh(u, a) {
        return y(this, void 0, void 0, function () {
          var n, r, i, o, s;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  ((e = u).sl.nu._u = vh.bind(null, e)),
                  (e.sl.nu.tn = function (t, e) {
                    var n = t,
                      t = n._l.get(e);
                    if (t && t.nl) return Ji().add(t.key);
                    var r = Ji(),
                      e = n.ul.get(e);
                    if (!e) return r;
                    for (var i = 0, o = e; i < o.length; i++) {
                      var s = o[i],
                        s = n.al.get(s);
                      r = r.Ht(s.view.jh);
                    }
                    return r;
                  }.bind(null, e)),
                  (e.sl.nu.lu = function (o, s, u) {
                    return y(this, void 0, void 0, function () {
                      var e, n, r, i;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              (e = o).rl.Ah(s, 'rejected', u),
                              (i = e._l.get(s)),
                              (n = i && i.key)
                                ? ((r = (r = new Ui(pi.K)).At(
                                    n,
                                    new lu(n, ci.min())
                                  )),
                                  (i = Ji().add(n)),
                                  (i = new ro(
                                    ci.min(),
                                    new Map(),
                                    new zi(Mr),
                                    r,
                                    i
                                  )),
                                  [4, vh(e, i)])
                                : [3, 2]
                            );
                          case 1:
                            return (
                              t.sent(),
                              (e.ll = e.ll.remove(n)),
                              e._l.delete(s),
                              Ah(e),
                              [3, 4]
                            );
                          case 2:
                            return [
                              4,
                              fc(e.Zc, s, !1)
                                .then(function () {
                                  return Eh(e, s, u);
                                })
                                .catch(pc)
                            ];
                          case 3:
                            t.sent(), (t.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    });
                  }.bind(null, e)),
                  (e.cl.Na = function (t, e) {
                    for (var n = t, r = !1, i = 0, o = e; i < o.length; i++) {
                      var s = o[i],
                        u = s.query,
                        u = n.queries.get(u);
                      if (u) {
                        for (var a = 0, c = u.listeners; a < c.length; a++)
                          c[a].Ru(s) && (r = !0);
                        u.Tu = s;
                      }
                    }
                    r && Xc(n);
                  }.bind(null, e.il)),
                  (e.cl.Al = function (t, e, n) {
                    var r = t;
                    if ((t = r.queries.get(e)))
                      for (var i = 0, o = t.listeners; i < o.length; i++)
                        o[i].onError(n);
                    r.queries.delete(e);
                  }.bind(null, e.il)),
                  (s = (n = e).al.get(a))
                    ? ((r = s.targetId), n.rl.wh(r), (i = s.view.el()), [3, 4])
                    : [3, 1]
                );
              case 1:
                return [4, hc(n.Zc, Iu(a))];
              case 2:
                return (
                  (o = t.sent()),
                  (s = n.rl.wh(o.targetId)),
                  (r = o.targetId),
                  [
                    4,
                    (function (i, o, s, u) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (i.Il = function (t, e, n) {
                                  return (function (r, i, o, s) {
                                    return y(this, void 0, void 0, function () {
                                      var e, n;
                                      return v(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (e = i.view.Gh(o)).Dr
                                              ? [
                                                  4,
                                                  lc(r.Zc, i.query, !1).then(
                                                    function (t) {
                                                      t = t.documents;
                                                      return i.view.Gh(t, e);
                                                    }
                                                  )
                                                ]
                                              : [3, 2];
                                          case 1:
                                            (e = t.sent()), (t.label = 2);
                                          case 2:
                                            return (
                                              (n = s && s.ce.get(i.targetId)),
                                              (n = i.view.es(e, r.ml, n)),
                                              [
                                                2,
                                                (Th(r, i.targetId, n.Xh),
                                                n.snapshot)
                                              ]
                                            );
                                        }
                                      });
                                    });
                                  })(i, t, e, n);
                                }),
                                [4, lc(i.Zc, o, !0)]
                              );
                            case 1:
                              return (
                                (n = t.sent()),
                                (r = new rh(o, n.la)),
                                (e = r.Gh(n.documents)),
                                (n = io._e(
                                  s,
                                  u && 'Offline' !== i.onlineState
                                )),
                                (n = r.es(e, i.ml, n)),
                                Th(i, s, n.Xh),
                                (r = new ih(o, s, r)),
                                [
                                  2,
                                  (i.al.set(o, r),
                                  i.ul.has(s)
                                    ? i.ul.get(s).push(o)
                                    : i.ul.set(s, [o]),
                                  n.snapshot)
                                ]
                              );
                          }
                        });
                      });
                    })(n, a, r, 'current' === s)
                  ]
                );
              case 3:
                (i = t.sent()), n.ml && Rc(n.sl, o), (t.label = 4);
              case 4:
                return [2, i];
            }
            var e;
          });
        });
      }
      function yh(l, p, d) {
        return y(this, void 0, void 0, function () {
          var s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                ((o = l).sl.nu.fu = function (i, o) {
                  return y(this, void 0, void 0, function () {
                    var e, n, r;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          (e = i), (n = o.batch.batchId), (t.label = 1);
                        case 1:
                          return t.trys.push([1, 4, , 6]), [4, sc(e.Zc, o)];
                        case 2:
                          return (
                            (r = t.sent()),
                            bh(e, n, null),
                            wh(e, n),
                            e.rl.fh(n, 'acknowledged'),
                            [4, Ih(e, r)]
                          );
                        case 3:
                          return t.sent(), [3, 6];
                        case 4:
                          return [4, pc(t.sent())];
                        case 5:
                          return t.sent(), [3, 6];
                        case 6:
                          return [2];
                      }
                    });
                  });
                }.bind(null, o)),
                  (o.sl.nu.du = function (s, u, a) {
                    return y(this, void 0, void 0, function () {
                      var n, o;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            (n = s), (t.label = 1);
                          case 1:
                            return (
                              t.trys.push([1, 4, , 6]),
                              [
                                4,
                                ((e = n.Zc),
                                (r = u),
                                (i = e).persistence.runTransaction(
                                  'Reject batch',
                                  'readwrite-primary',
                                  function (e) {
                                    var n;
                                    return i.cs
                                      .$r(e, r)
                                      .next(function (t) {
                                        return (
                                          Vr(null !== t),
                                          (n = t.keys()),
                                          i.cs.Wr(e, t)
                                        );
                                      })
                                      .next(function () {
                                        return i.cs.Hr(e);
                                      })
                                      .next(function () {
                                        return i.sa.ds(e, n);
                                      });
                                  }
                                ))
                              ]
                            );
                          case 2:
                            return (
                              (o = t.sent()),
                              bh(n, u, a),
                              wh(n, u),
                              n.rl.fh(u, 'rejected', a),
                              [4, Ih(n, o)]
                            );
                          case 3:
                            return t.sent(), [3, 6];
                          case 4:
                            return [4, pc(t.sent())];
                          case 5:
                            return t.sent(), [3, 6];
                          case 6:
                            return [2];
                        }
                        var e, r, i;
                      });
                    });
                  }.bind(null, o)),
                  (u = o),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 5, , 6]),
                  [
                    4,
                    ((r = u.Zc),
                    (a = p),
                    (h = r),
                    (f = ai.now()),
                    (i = a.reduce(function (t, e) {
                      return t.add(e.key);
                    }, Ji())),
                    h.persistence
                      .runTransaction(
                        'Locally write mutations',
                        'readwrite',
                        function (u) {
                          return h.sa.ds(u, i).next(function (t) {
                            c = t;
                            for (
                              var s, e = [], n = 0, r = a;
                              n < r.length;
                              n++
                            ) {
                              var i = r[n],
                                o =
                                  ((s = i),
                                  (o = c.get(i.key)),
                                  s instanceof Xs
                                    ? (function (t) {
                                        for (
                                          var e = null,
                                            n = 0,
                                            r = s.fieldTransforms;
                                          n < r.length;
                                          n++
                                        ) {
                                          var i = r[n],
                                            o =
                                              t instanceof fu
                                                ? t.field(i.field)
                                                : void 0,
                                            o = ps(i.transform, o || null);
                                          null != o &&
                                            (e = (null == e ? new ru() : e).set(
                                              i.field,
                                              o
                                            ));
                                        }
                                        return e ? e._n() : null;
                                      })(o)
                                    : null);
                              null != o &&
                                e.push(
                                  new zs(
                                    i.key,
                                    o,
                                    (function s(t) {
                                      var u = [];
                                      return (
                                        Eo(t.fields || {}, function (t, e) {
                                          var n = new li([t]);
                                          if (qo(e))
                                            if (
                                              0 ===
                                              (e = s(e.mapValue).fields).length
                                            )
                                              u.push(n);
                                            else
                                              for (
                                                var r = 0, i = e;
                                                r < i.length;
                                                r++
                                              ) {
                                                var o = i[r];
                                                u.push(n.child(o));
                                              }
                                          else u.push(n);
                                        }),
                                        new Ss(u)
                                      );
                                    })(o.proto.mapValue),
                                    Ps.exists(!0)
                                  )
                                );
                            }
                            return h.cs.Mr(u, f, e, a);
                          });
                        }
                      )
                      .then(function (t) {
                        var e = t.Sn(c);
                        return { batchId: t.batchId, Wn: e };
                      }))
                  ]
                );
              case 2:
                return (
                  (s = t.sent()),
                  u.rl.lh(s.batchId),
                  (e = u),
                  (n = s.batchId),
                  (o = d),
                  (r = (r = (r = e.dl[e.currentUser.R()]) || new Ui(Mr)).At(
                    n,
                    o
                  )),
                  (e.dl[e.currentUser.R()] = r),
                  [4, Ih(u, s.Wn)]
                );
              case 3:
                return t.sent(), [4, qc(u.sl)];
              case 4:
                return t.sent(), [3, 6];
              case 5:
                return (
                  (u = t.sent()),
                  (u = Ca(u, 'Failed to persist write')),
                  d.reject(u),
                  [3, 6]
                );
              case 6:
                return [2];
            }
            var e, n, r, a, c, h, f, i, o;
          });
        });
      }
      function vh(r, i) {
        return y(this, void 0, void 0, function () {
          var n, e;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = r), (t.label = 1);
              case 1:
                return t.trys.push([1, 4, , 6]), [4, ac(n.Zc, i)];
              case 2:
                return (
                  (e = t.sent()),
                  i.ce.forEach(function (t, e) {
                    e = n._l.get(e);
                    e &&
                      (Vr(t.de.size + t.we.size + t.Ee.size <= 1),
                      0 < t.de.size
                        ? (e.nl = !0)
                        : 0 < t.we.size
                        ? Vr(e.nl)
                        : 0 < t.Ee.size && (Vr(e.nl), (e.nl = !1)));
                  }),
                  [4, Ih(n, e, i)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, pc(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }
      function gh(t, n, e) {
        var r,
          t = t;
        ((t.ml && 0 === e) || (!t.ml && 1 === e)) &&
          ((r = []),
          t.al.forEach(function (t, e) {
            e = e.view.Au(n);
            e.snapshot && r.push(e.snapshot);
          }),
          (function (t, i) {
            t.onlineState = i;
            var o = !1;
            t.queries.forEach(function (t, e) {
              for (var n = 0, r = e.listeners; n < r.length; n++)
                r[n].Au(i) && (o = !0);
            }),
              o && Xc(t);
          })(t.il, n),
          r.length && t.cl.Na(r),
          (t.onlineState = n),
          t.ml && t.rl.yh(n));
      }
      function mh(o, s) {
        return y(this, void 0, void 0, function () {
          var n, r, i;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                Vc((n = o).sl) ||
                  Dr(
                    'SyncEngine',
                    "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                  ),
                  (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 3, , 4]),
                  [
                    4,
                    (e = n.Zc).persistence.runTransaction(
                      'Get highest unacknowledged batch id',
                      'readonly',
                      function (t) {
                        return e.cs.Ur(t);
                      }
                    )
                  ]
                );
              case 2:
                return -1 === (r = t.sent())
                  ? [2, void s.resolve()]
                  : ((i = n.wl.get(r) || []).push(s), n.wl.set(r, i), [3, 4]);
              case 3:
                return (
                  (i = t.sent()),
                  (i = Ca(
                    i,
                    'Initialization of waitForPendingWrites() operation failed'
                  )),
                  s.reject(i),
                  [3, 4]
                );
              case 4:
                return [2];
            }
            var e;
          });
        });
      }
      function wh(t, e) {
        (t.wl.get(e) || []).forEach(function (t) {
          t.resolve();
        }),
          t.wl.delete(e);
      }
      function bh(t, e, n) {
        var r = t,
          i = r.dl[r.currentUser.R()];
        i &&
          ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), (i = i.remove(e))),
          (r.dl[r.currentUser.R()] = i));
      }
      function Eh(e, t, n) {
        void 0 === n && (n = null), e.rl.Th(t);
        for (var r = 0, i = e.ul.get(t); r < i.length; r++) {
          var o = i[r];
          e.al.delete(o), n && e.cl.Al(o, n);
        }
        e.ul.delete(t),
          e.ml &&
            e.fl.Mu(t).forEach(function (t) {
              e.fl.Jr(t) || _h(e, t);
            });
      }
      function _h(t, e) {
        var n = t.ll.get(e);
        null !== n &&
          (Dc(t.sl, n), (t.ll = t.ll.remove(e)), t._l.delete(n), Ah(t));
      }
      function Th(t, e, n) {
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          o instanceof eh
            ? (t.fl.Mo(o.key, e),
              (function (t, e) {
                e = e.key;
                t.ll.get(e) ||
                  (Dr('SyncEngine', 'New document in limbo: ' + e),
                  t.hl.push(e),
                  Ah(t));
              })(t, o))
            : o instanceof nh
            ? (Dr('SyncEngine', 'Document no longer in limbo: ' + o.key),
              t.fl.$o(o.key, e),
              t.fl.Jr(o.key) || _h(t, o.key))
            : Pr();
        }
      }
      function Ah(t) {
        for (; 0 < t.hl.length && t.ll.size < t.ol; ) {
          var e = t.hl.shift(),
            n = t.El.next();
          t._l.set(n, new oh(e)),
            (t.ll = t.ll.At(e, n)),
            Rc(t.sl, new Ci(Iu(mu(e.path)), n, 2, da.xs));
        }
      }
      function Ih(e, s, u) {
        return y(this, void 0, void 0, function () {
          var n, r, i, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (r = []),
                  (i = []),
                  (o = []),
                  (n = e).al.Y()
                    ? [3, 3]
                    : (n.al.forEach(function (t, e) {
                        o.push(
                          n.Il(e, s, u).then(function (t) {
                            t &&
                              (n.ml &&
                                n.rl.Ah(
                                  e.targetId,
                                  t.fromCache ? 'not-current' : 'current'
                                ),
                              r.push(t),
                              (t = pa.bs(e.targetId, t)),
                              i.push(t));
                          })
                        );
                      }),
                      [4, Promise.all(o)])
                );
              case 1:
                return (
                  t.sent(),
                  n.cl.Na(r),
                  [
                    4,
                    (function (a, c) {
                      return y(this, void 0, void 0, function () {
                        var r, e, n, i, o, s, u;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              (r = a), (t.label = 1);
                            case 1:
                              return (
                                t.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  r.persistence.runTransaction(
                                    'notifyLocalViewChanges',
                                    'readwrite',
                                    function (n) {
                                      return fa.forEach(c, function (e) {
                                        return fa
                                          .forEach(e.Vs, function (t) {
                                            return r.persistence.Nr.Mo(
                                              n,
                                              e.targetId,
                                              t
                                            );
                                          })
                                          .next(function () {
                                            return fa.forEach(e.ps, function (
                                              t
                                            ) {
                                              return r.persistence.Nr.$o(
                                                n,
                                                e.targetId,
                                                t
                                              );
                                            });
                                          });
                                      });
                                    }
                                  )
                                ]
                              );
                            case 2:
                              return t.sent(), [3, 4];
                            case 3:
                              if (!La((e = t.sent()))) throw e;
                              return (
                                Dr(
                                  'LocalStore',
                                  'Failed to update sequence numbers: ' + e
                                ),
                                [3, 4]
                              );
                            case 4:
                              for (n = 0, i = c; n < i.length; n++)
                                (u = i[n]),
                                  (o = u.targetId),
                                  u.fromCache ||
                                    ((s = r.ra.get(o)),
                                    (u = s.wt),
                                    (u = s.It(u)),
                                    (r.ra = r.ra.At(o, u)));
                              return [2];
                          }
                        });
                      });
                    })(n.Zc, i)
                  ]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }
      function Nh(i, o) {
        return y(this, void 0, void 0, function () {
          var n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (n = i).currentUser.isEqual(o)
                  ? [3, 3]
                  : (Dr('SyncEngine', 'User change. New user:', o.R()),
                    [4, oc(n.Zc, o)]);
              case 1:
                return (
                  (r = t.sent()),
                  (n.currentUser = o),
                  (e = n).wl.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(
                        new Nr(
                          Ir.CANCELLED,
                          "'waitForPendingWrites' promise is rejected due to a user change."
                        )
                      );
                    });
                  }),
                  e.wl.clear(),
                  n.rl.Ph(o, r.ua, r.ha),
                  [4, Ih(n, r.aa)]
                );
              case 2:
                t.sent(), (t.label = 3);
              case 3:
                return [2];
            }
            var e;
          });
        });
      }
      function Lh(t, e, n) {
        var r = t;
        (function (l, p, d) {
          return y(this, void 0, void 0, function () {
            var u, a, c, h, f;
            return v(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 14, , 15]), [4, p.getMetadata()];
                case 1:
                  return (
                    (u = t.sent()),
                    [
                      4,
                      ((r = l.Zc),
                      (i = u),
                      (s = new Xa((o = r).serializer).Jc(i.createTime)),
                      o.persistence
                        .runTransaction('hasNewerBundle', 'readonly', function (
                          t
                        ) {
                          return o.tc._o(t, i.id);
                        })
                        .then(function (t) {
                          return !!t && 0 <= t.createTime.u(s);
                        }))
                    ]
                  );
                case 2:
                  return t.sent() ? [4, p.close()] : [3, 4];
                case 3:
                  return [
                    2,
                    (t.sent(),
                    void d.Rl({
                      taskState: 'Success',
                      documentsLoaded: u.totalDocuments,
                      bytesLoaded: u.totalBytes,
                      totalDocuments: u.totalDocuments,
                      totalBytes: u.totalBytes
                    }))
                  ];
                case 4:
                  return (
                    d.Pl($a(u)),
                    (a = new ec(u, l.Zc, p.serializer)),
                    [4, p.Uc()]
                  );
                case 5:
                  (c = t.sent()), (t.label = 6);
                case 6:
                  return c ? [4, a.ta(c)] : [3, 10];
                case 7:
                  return (h = t.sent()) && d.Pl(h), [4, p.Uc()];
                case 8:
                  (c = t.sent()), (t.label = 9);
                case 9:
                  return [3, 6];
                case 10:
                  return [4, a.complete()];
                case 11:
                  return (f = t.sent()), [4, Ih(l, f.Yc, void 0)];
                case 12:
                  return (
                    t.sent(),
                    [
                      4,
                      ((r = l.Zc),
                      (e = u),
                      (n = r).persistence.runTransaction(
                        'Save bundle',
                        'readwrite',
                        function (t) {
                          return n.tc.fo(t, e);
                        }
                      ))
                    ]
                  );
                case 13:
                  return t.sent(), d.Rl(f.progress), [3, 15];
                case 14:
                  return (
                    kr(
                      'SyncEngine',
                      'Loading bundle failed with ' + (f = t.sent())
                    ),
                    d.yl(f),
                    [3, 15]
                  );
                case 15:
                  return [2];
              }
              var e, n, r, i, o, s;
            });
          });
        })(r, e, n).then(function () {
          r.rl.Vh();
        });
      }
      var Oh,
        Rh,
        Dh,
        Sh =
          ((cf.prototype.kr = function (t) {
            return fa.resolve(0 === this.cs.length);
          }),
          (cf.prototype.Mr = function (t, e, n, r) {
            var i = this.gl;
            this.gl++, 0 < this.cs.length && this.cs[this.cs.length - 1];
            n = new aa(i, e, n, r);
            this.cs.push(n);
            for (var o = 0, s = r; o < s.length; o++) {
              var u = s[o];
              (this.Vl = this.Vl.add(new Jc(u.key, i))),
                this.us.Lr(t, u.key.path.G());
            }
            return fa.resolve(n);
          }),
          (cf.prototype.$r = function (t, e) {
            return fa.resolve(this.pl(e));
          }),
          (cf.prototype.qr = function (t, e) {
            (e += 1), (e = this.bl(e)), (e = e < 0 ? 0 : e);
            return fa.resolve(this.cs.length > e ? this.cs[e] : null);
          }),
          (cf.prototype.Ur = function () {
            return fa.resolve(0 === this.cs.length ? -1 : this.gl - 1);
          }),
          (cf.prototype.Qr = function (t) {
            return fa.resolve(this.cs.slice());
          }),
          (cf.prototype.ls = function (t, e) {
            var n = this,
              r = new Jc(e, 0),
              e = new Jc(e, Number.POSITIVE_INFINITY),
              i = [];
            return (
              this.Vl.jt([r, e], function (t) {
                t = n.pl(t.Bu);
                i.push(t);
              }),
              fa.resolve(i)
            );
          }),
          (cf.prototype.Es = function (t, e) {
            var n = this,
              r = new zi(Mr);
            return (
              e.forEach(function (t) {
                var e = new Jc(t, 0),
                  t = new Jc(t, Number.POSITIVE_INFINITY);
                n.Vl.jt([e, t], function (t) {
                  r = r.add(t.Bu);
                });
              }),
              fa.resolve(this.vl(r))
            );
          }),
          (cf.prototype.ys = function (t, e) {
            var n = e.path,
              r = n.length + 1,
              e = n;
            pi.lt(e) || (e = e.child(''));
            var e = new Jc(new pi(e), 0),
              i = new zi(Mr);
            return (
              this.Vl.Gt(function (t) {
                var e = t.key.path;
                return !!n.X(e) && (e.length === r && (i = i.add(t.Bu)), !0);
              }, e),
              fa.resolve(this.vl(i))
            );
          }),
          (cf.prototype.vl = function (t) {
            var e = this,
              n = [];
            return (
              t.forEach(function (t) {
                t = e.pl(t);
                null !== t && n.push(t);
              }),
              n
            );
          }),
          (cf.prototype.Wr = function (n, r) {
            var i = this;
            Vr(0 === this.Sl(r.batchId, 'removed')), this.cs.shift();
            var o = this.Vl;
            return fa
              .forEach(r.mutations, function (t) {
                var e = new Jc(t.key, r.batchId);
                return (o = o.delete(e)), i.Nr.zr(n, t.key);
              })
              .next(function () {
                i.Vl = o;
              });
          }),
          (cf.prototype.Gr = function (t) {}),
          (cf.prototype.Jr = function (t, e) {
            var n = new Jc(e, 0),
              n = this.Vl.zt(n);
            return fa.resolve(e.isEqual(n && n.key));
          }),
          (cf.prototype.Hr = function (t) {
            return this.cs.length, fa.resolve();
          }),
          (cf.prototype.Sl = function (t, e) {
            return this.bl(t);
          }),
          (cf.prototype.bl = function (t) {
            return 0 === this.cs.length ? 0 : t - this.cs[0].batchId;
          }),
          (cf.prototype.pl = function (t) {
            t = this.bl(t);
            return t < 0 || t >= this.cs.length ? null : this.cs[t];
          }),
          cf),
        kh =
          ((af.prototype.zn = function (t, e, n) {
            var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              i = this.Dl(e);
            return (
              (this.docs = this.docs.At(r, { Jn: e, size: i, readTime: n })),
              (this.size += i - o),
              this.us.Lr(t, r.path.G())
            );
          }),
          (af.prototype.Yn = function (t) {
            var e = this.docs.get(t);
            e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
          }),
          (af.prototype.Xn = function (t, e) {
            e = this.docs.get(e);
            return fa.resolve(e ? e.Jn : null);
          }),
          (af.prototype.getEntries = function (t, e) {
            var n = this,
              r = Ki;
            return (
              e.forEach(function (t) {
                var e = n.docs.get(t);
                r = r.At(t, e ? e.Jn : null);
              }),
              fa.resolve(r)
            );
          }),
          (af.prototype.Ts = function (t, e, n) {
            for (
              var r = Xi, i = new pi(e.path.child('')), o = this.docs.vt(i);
              o.Ft();

            ) {
              var s = o.Nt(),
                u = s.key,
                a = s.value,
                s = a.Jn,
                a = a.readTime;
              if (!e.path.X(u.path)) break;
              a.u(n) <= 0 ||
                (s instanceof fu && Du(e, s) && (r = r.At(s.key, s)));
            }
            return fa.resolve(r);
          }),
          (af.prototype.Cl = function (t, e) {
            return fa.forEach(this.docs, function (t) {
              return e(t);
            });
          }),
          (af.prototype.oo = function (t) {
            return new Ch(this);
          }),
          (af.prototype.ao = function (t) {
            return fa.resolve(this.size);
          }),
          af),
        Ch =
          (f(uf, (Dh = o)),
          (uf.prototype.es = function (n) {
            var r = this,
              i = [];
            return (
              this.Wn.forEach(function (t, e) {
                e && e.Jn ? i.push(r.uo.zn(n, e.Jn, r.Gn(t))) : r.uo.Yn(t);
              }),
              fa.Qn(i)
            );
          }),
          (uf.prototype.Zn = function (t, e) {
            return this.uo.Xn(t, e);
          }),
          (uf.prototype.ts = function (t, e) {
            return this.uo.getEntries(t, e);
          }),
          uf),
        Ph =
          ((sf.prototype.Ke = function (t, n) {
            return (
              this.xl.forEach(function (t, e) {
                return n(e);
              }),
              fa.resolve()
            );
          }),
          (sf.prototype.Vo = function (t) {
            return fa.resolve(this.lastRemoteSnapshotVersion);
          }),
          (sf.prototype.po = function (t) {
            return fa.resolve(this.Nl);
          }),
          (sf.prototype.Ro = function (t) {
            return (
              (this.highestTargetId = this.Ol.next()),
              fa.resolve(this.highestTargetId)
            );
          }),
          (sf.prototype.bo = function (t, e, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              e > this.Nl && (this.Nl = e),
              fa.resolve()
            );
          }),
          (sf.prototype.So = function (t) {
            this.xl.set(t.target, t);
            var e = t.targetId;
            e > this.highestTargetId &&
              ((this.Ol = new qa(e)), (this.highestTargetId = e)),
              t.sequenceNumber > this.Nl && (this.Nl = t.sequenceNumber);
          }),
          (sf.prototype.vo = function (t, e) {
            return this.So(e), (this.targetCount += 1), fa.resolve();
          }),
          (sf.prototype.Co = function (t, e) {
            return this.So(e), fa.resolve();
          }),
          (sf.prototype.xo = function (t, e) {
            return (
              this.xl.delete(e.target),
              this.Fl.Mu(e.targetId),
              --this.targetCount,
              fa.resolve()
            );
          }),
          (sf.prototype.Rr = function (n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return (
              this.xl.forEach(function (t, e) {
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (o.xl.delete(t), u.push(o.No(n, e.targetId)), s++);
              }),
              fa.Qn(u).next(function () {
                return s;
              })
            );
          }),
          (sf.prototype.Fo = function (t) {
            return fa.resolve(this.targetCount);
          }),
          (sf.prototype.Oo = function (t, e) {
            e = this.xl.get(e) || null;
            return fa.resolve(e);
          }),
          (sf.prototype.ko = function (t, e, n) {
            return this.Fl.Fu(e, n), fa.resolve();
          }),
          (sf.prototype.Lo = function (e, t, n) {
            this.Fl.ku(t, n);
            var r = this.persistence.Nr,
              i = [];
            return (
              r &&
                t.forEach(function (t) {
                  i.push(r.zr(e, t));
                }),
              fa.Qn(i)
            );
          }),
          (sf.prototype.No = function (t, e) {
            return this.Fl.Mu(e), fa.resolve();
          }),
          (sf.prototype.Bo = function (t, e) {
            e = this.Fl.$u(e);
            return fa.resolve(e);
          }),
          (sf.prototype.Jr = function (t, e) {
            return fa.resolve(this.Fl.Jr(e));
          }),
          sf),
        Vh =
          ((of.prototype._o = function (t, e) {
            return fa.resolve(this.kl.get(e));
          }),
          (of.prototype.fo = function (t, e) {
            return (
              this.kl.set(e.id, {
                id: e.id,
                version: e.version,
                createTime: Xo(e.createTime)
              }),
              fa.resolve()
            );
          }),
          (of.prototype.wo = function (t, e) {
            return fa.resolve(this.Ml.get(e));
          }),
          (of.prototype.Eo = function (t, e) {
            return (
              this.Ml.set(e.name, {
                name: (e = e).name,
                query: Ua(e.bundledQuery),
                readTime: Xo(e.readTime)
              }),
              fa.resolve()
            );
          }),
          of),
        xh =
          ((rf.prototype.start = function () {
            return Promise.resolve();
          }),
          (rf.prototype.Ac = function () {
            return (this.Wo = !1), Promise.resolve();
          }),
          Object.defineProperty(rf.prototype, 'dr', {
            get: function () {
              return this.Wo;
            },
            enumerable: !1,
            configurable: !0
          }),
          (rf.prototype.cc = function () {}),
          (rf.prototype.ac = function () {}),
          (rf.prototype.Dc = function () {
            return this.us;
          }),
          (rf.prototype.bc = function (t) {
            var e = this.Ll[t.R()];
            return (
              e || ((e = new Sh(this.us, this.Nr)), (this.Ll[t.R()] = e)), e
            );
          }),
          (rf.prototype.vc = function () {
            return this.Zo;
          }),
          (rf.prototype.Sc = function () {
            return this.os;
          }),
          (rf.prototype.Cc = function () {
            return this.tc;
          }),
          (rf.prototype.runTransaction = function (t, e, n) {
            var r = this;
            Dr('MemoryPersistence', 'Starting transaction:', t);
            var i = new Uh(this.Ko.next());
            return (
              this.Nr.Bl(),
              n(i)
                .next(function (t) {
                  return r.Nr.ql(i).next(function () {
                    return t;
                  });
                })
                .qn()
                .then(function (t) {
                  return i.rs(), t;
                })
            );
          }),
          (rf.prototype.Ul = function (e, n) {
            return fa.Kn(
              Object.values(this.Ll).map(function (t) {
                return function () {
                  return t.Jr(e, n);
                };
              })
            );
          }),
          rf),
        Uh = (f(nf, (Rh = _e)), nf),
        Mh =
          ((ef.Wl = function (t) {
            return new ef(t);
          }),
          Object.defineProperty(ef.prototype, 'jl', {
            get: function () {
              if (this.Kl) return this.Kl;
              throw Pr();
            },
            enumerable: !1,
            configurable: !0
          }),
          (ef.prototype.Mo = function (t, e, n) {
            return this.Ql.Mo(n, e), this.jl.delete(n.toString()), fa.resolve();
          }),
          (ef.prototype.$o = function (t, e, n) {
            return this.Ql.$o(n, e), this.jl.add(n.toString()), fa.resolve();
          }),
          (ef.prototype.zr = function (t, e) {
            return this.jl.add(e.toString()), fa.resolve();
          }),
          (ef.prototype.removeTarget = function (t, e) {
            var n = this;
            this.Ql.Mu(e.targetId).forEach(function (t) {
              return n.jl.add(t.toString());
            });
            var r = this.persistence.vc();
            return r
              .Bo(t, e.targetId)
              .next(function (t) {
                t.forEach(function (t) {
                  return n.jl.add(t.toString());
                });
              })
              .next(function () {
                return r.xo(t, e);
              });
          }),
          (ef.prototype.Bl = function () {
            this.Kl = new Set();
          }),
          (ef.prototype.ql = function (n) {
            var r = this,
              i = this.persistence.Sc().oo();
            return fa
              .forEach(this.jl, function (t) {
                var e = pi.at(t);
                return r.Gl(n, e).next(function (t) {
                  t || i.Yn(e);
                });
              })
              .next(function () {
                return (r.Kl = null), i.apply(n);
              });
          }),
          (ef.prototype.kc = function (t, e) {
            var n = this;
            return this.Gl(t, e).next(function (t) {
              t ? n.jl.delete(e.toString()) : n.jl.add(e.toString());
            });
          }),
          (ef.prototype.$l = function (t) {
            return 0;
          }),
          (ef.prototype.Gl = function (t, e) {
            var n = this;
            return fa.Kn([
              function () {
                return fa.resolve(n.Ql.Jr(e));
              },
              function () {
                return n.persistence.vc().Jr(t, e);
              },
              function () {
                return n.persistence.Ul(t, e);
              }
            ]);
          }),
          ef),
        jh =
          ((tf.prototype.Ca = function (t) {
            this.Jl = t;
          }),
          (tf.prototype.pa = function (t) {
            this.Yl = t;
          }),
          (tf.prototype.onMessage = function (t) {
            this.Xl = t;
          }),
          (tf.prototype.close = function () {
            this.Hl();
          }),
          (tf.prototype.send = function (t) {
            this.zl(t);
          }),
          (tf.prototype.Zl = function () {
            this.Jl();
          }),
          (tf.prototype.t_ = function (t) {
            this.Yl(t);
          }),
          (tf.prototype.e_ = function (t) {
            this.Xl(t);
          }),
          tf),
        qh = {
          BatchGetDocuments: 'batchGet',
          Commit: 'commit',
          RunQuery: 'runQuery'
        },
        Fh =
          (($h.prototype.Ka = function (e, t, n, r) {
            var i = this.r_(e, t);
            Dr('RestConnection', 'Sending: ', i, n);
            t = {};
            return (
              this.o_(t, r),
              this.c_(e, i, t, n).then(
                function (t) {
                  return Dr('RestConnection', 'Received: ', t), t;
                },
                function (t) {
                  throw (
                    (kr(
                      'RestConnection',
                      e + ' failed with error: ',
                      t,
                      'url: ',
                      i,
                      'request:',
                      n
                    ),
                    t)
                  );
                }
              )
            );
          }),
          ($h.prototype.Wa = function (t, e, n, r) {
            return this.Ka(t, e, n, r);
          }),
          ($h.prototype.o_ = function (t, e) {
            if (
              ((t['X-Goog-Api-Client'] = 'gl-js/ fire/8.1.1'),
              (t['Content-Type'] = 'text/plain'),
              e)
            )
              for (var n in e.V) e.V.hasOwnProperty(n) && (t[n] = e.V[n]);
          }),
          ($h.prototype.r_ = function (t, e) {
            t = qh[t];
            return this.s_ + '/v1/' + e + ':' + t;
          }),
          f(Jh, (Oh = $h)),
          (Jh.prototype.c_ = function (o, e, s, u) {
            return new Promise(function (n, r) {
              var i = new Ar();
              i.listenOnce(wr.COMPLETE, function () {
                try {
                  switch (i.getLastErrorCode()) {
                    case mr.NO_ERROR:
                      var t = i.getResponseJson();
                      Dr('Connection', 'XHR received:', JSON.stringify(t)),
                        n(t);
                      break;
                    case mr.TIMEOUT:
                      Dr('Connection', 'RPC "' + o + '" timed out'),
                        r(new Nr(Ir.DEADLINE_EXCEEDED, 'Request time out'));
                      break;
                    case mr.HTTP_ERROR:
                      var e = i.getStatus();
                      Dr(
                        'Connection',
                        'RPC "' + o + '" failed with status:',
                        e,
                        'response text:',
                        i.getResponseText()
                      ),
                        0 < e
                          ? (t = i.getResponseJson().error) &&
                            t.status &&
                            t.message
                            ? ((e = t.status.toLowerCase().replace(/_/g, '-')),
                              (e =
                                0 <= Object.values(Ir).indexOf(e)
                                  ? e
                                  : Ir.UNKNOWN),
                              r(new Nr(e, t.message)))
                            : r(
                                new Nr(
                                  Ir.UNKNOWN,
                                  'Server responded with status ' +
                                    i.getStatus()
                                )
                              )
                          : r(new Nr(Ir.UNAVAILABLE, 'Connection failed.'));
                      break;
                    default:
                      Pr();
                  }
                } finally {
                  Dr('Connection', 'RPC "' + o + '" completed.');
                }
              });
              var t = JSON.stringify(u);
              i.send(e, 'POST', t, s, 15);
            });
          }),
          (Jh.prototype.xa = function (t, e) {
            var n,
              r = [
                this.s_,
                '/',
                'google.firestore.v1.Firestore',
                '/',
                t,
                '/channel'
              ],
              i = new fr(),
              o = gr(),
              t = {
                httpSessionIdParam: 'gsessionid',
                initMessageHeaders: {},
                messageUrlParams: {
                  database:
                    'projects/' +
                    this.T.projectId +
                    '/databases/' +
                    this.T.database
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.m
              };
            this.o_(t.initMessageHeaders, e),
              ('undefined' != typeof window &&
                (window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  p()
                )) ||
                ('object' == typeof navigator &&
                  'ReactNative' === navigator.product) ||
                0 <= p().indexOf('Electron/') ||
                0 <= (n = p()).indexOf('MSIE ') ||
                0 <= n.indexOf('Trident/') ||
                0 <= p().indexOf('MSAppHost/') ||
                ('object' ==
                  typeof (n =
                    'object' == typeof chrome
                      ? chrome.runtime
                      : 'object' == typeof browser
                      ? browser.runtime
                      : void 0) &&
                  void 0 !== n.id) ||
                (t.httpHeadersOverwriteParam = '$httpHeaders');
            r = r.join('');
            Dr('Connection', 'Creating WebChannel: ' + r, t);
            var s = i.createWebChannel(r, t),
              u = !1,
              a = !1,
              c = new jh({
                zl: function (t) {
                  a
                    ? Dr(
                        'Connection',
                        'Not sending because WebChannel is closed:',
                        t
                      )
                    : (u ||
                        (Dr('Connection', 'Opening WebChannel transport.'),
                        s.open(),
                        (u = !0)),
                      Dr('Connection', 'WebChannel sending:', t),
                      s.send(t));
                },
                Hl: function () {
                  return s.close();
                }
              }),
              t = function (t, e, n) {
                t.listen(e, function (t) {
                  try {
                    n(t);
                  } catch (t) {
                    setTimeout(function () {
                      throw t;
                    }, 0);
                  }
                });
              };
            return (
              t(s, Tr.EventType.OPEN, function () {
                a || Dr('Connection', 'WebChannel transport opened.');
              }),
              t(s, Tr.EventType.CLOSE, function () {
                a ||
                  ((a = !0),
                  Dr('Connection', 'WebChannel transport closed'),
                  c.t_());
              }),
              t(s, Tr.EventType.ERROR, function (t) {
                a ||
                  ((a = !0),
                  kr('Connection', 'WebChannel transport errored:', t),
                  c.t_(
                    new Nr(
                      Ir.UNAVAILABLE,
                      'The operation could not be completed'
                    )
                  ));
              }),
              t(s, Tr.EventType.MESSAGE, function (t) {
                var e, n, r, i;
                a ||
                  (Vr(!!(e = t.data[0])),
                  (n =
                    e.error ||
                    (null === (i = e[0]) || void 0 === i ? void 0 : i.error))
                    ? (Dr('Connection', 'WebChannel received error:', n),
                      (r = n.status),
                      (t = (function () {
                        var t = ki[r];
                        if (void 0 !== t) return xi(t);
                      })()),
                      (i = n.message),
                      void 0 === t &&
                        ((t = Ir.INTERNAL),
                        (i =
                          'Unknown error status: ' +
                          r +
                          ' with message ' +
                          n.message)),
                      (a = !0),
                      c.t_(new Nr(t, i)),
                      s.close())
                    : (Dr('Connection', 'WebChannel received:', e), c.e_(e)));
              }),
              t(o, br.STAT_EVENT, function (t) {
                t.stat === Er
                  ? Dr('Connection', 'Detected buffering proxy')
                  : t.stat === _r &&
                    Dr('Connection', 'Detected no buffering proxy');
              }),
              setTimeout(function () {
                c.Zl();
              }, 0),
              c
            );
          }),
          Jh),
        Bh =
          ((Zh.prototype.au = function (t) {
            this.__.push(t);
          }),
          (Zh.prototype.Ac = function () {
            window.removeEventListener('online', this.a_),
              window.removeEventListener('offline', this.h_);
          }),
          (Zh.prototype.f_ = function () {
            window.addEventListener('online', this.a_),
              window.addEventListener('offline', this.h_);
          }),
          (Zh.prototype.u_ = function () {
            Dr(
              'ConnectivityMonitor',
              'Network connectivity changed: AVAILABLE'
            );
            for (var t = 0, e = this.__; t < e.length; t++) (0, e[t])(0);
          }),
          (Zh.prototype.l_ = function () {
            Dr(
              'ConnectivityMonitor',
              'Network connectivity changed: UNAVAILABLE'
            );
            for (var t = 0, e = this.__; t < e.length; t++) (0, e[t])(1);
          }),
          (Zh.Hs = function () {
            return (
              'undefined' != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }),
          Zh),
        Gh =
          ((Qh.prototype.au = function (t) {}),
          (Qh.prototype.Ac = function () {}),
          Qh),
        zh =
          ((Xh.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.serializer = Ka(e.n_.T)),
                      (this.rl = this.d_(e)),
                      (this.persistence = this.w_(e)),
                      [4, this.persistence.start()]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (this.E_ = this.T_(e)),
                      (this.Zc = this.m_(e)),
                      [2]
                    );
                }
              });
            });
          }),
          (Xh.prototype.T_ = function (t) {
            return null;
          }),
          (Xh.prototype.m_ = function (t) {
            return (
              (e = this.persistence),
              (n = new Va()),
              (r = t.I_),
              (t = this.serializer),
              new nc(e, n, r, t)
            );
            var e, n, r;
          }),
          (Xh.prototype.w_ = function (t) {
            return new xh(Mh.Wl, this.serializer);
          }),
          (Xh.prototype.d_ = function (t) {
            return new th();
          }),
          (Xh.prototype.terminate = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.E_ && this.E_.stop(), [4, this.rl.Ac()];
                  case 1:
                    return t.sent(), [4, this.persistence.Ac()];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          Xh),
        Hh =
          ((Yh.prototype.initialize = function (n, r) {
            return y(this, void 0, void 0, function () {
              var e = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.Zc
                      ? [3, 2]
                      : ((this.Zc = n.Zc),
                        (this.rl = n.rl),
                        (this.eu = this.R_(r)),
                        (this.sl = this.P_(r)),
                        (this.il = this.y_(r)),
                        (this.ju = this.g_(r, !n.synchronizeTabs)),
                        (this.rl.ja = function (t) {
                          return gh(e.ju, t, 1);
                        }),
                        (this.sl.nu.V_ = Nh.bind(null, this.ju)),
                        [
                          4,
                          (function (n, r) {
                            return y(this, void 0, void 0, function () {
                              var e;
                              return v(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return (
                                      (e = n),
                                      r ? (e.ru.delete(2), [4, Lc(e)]) : [3, 2]
                                    );
                                  case 1:
                                    return t.sent(), [3, 5];
                                  case 2:
                                    return r
                                      ? [3, 4]
                                      : (e.ru.add(2), [4, Oc(e)]);
                                  case 3:
                                    t.sent(),
                                      e.uu.set('Unknown'),
                                      (t.label = 4);
                                  case 4:
                                    t.label = 5;
                                  case 5:
                                    return [2];
                                }
                              });
                            });
                          })(this.sl, this.ju.ml)
                        ]);
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Yh.prototype.y_ = function (t) {
            return new Hc();
          }),
          (Yh.prototype.R_ = function (t) {
            var e = Ka(t.n_.T),
              n = ((n = t.n_), new Fh(n));
            return (t = t.credentials), new bc(t, n, e);
          }),
          (Yh.prototype.P_ = function (t) {
            var e = this,
              n = this.Zc,
              r = this.eu,
              i = t.Ei,
              o = function (t) {
                return gh(e.ju, t, 0);
              },
              t = new (Bh.Hs() ? Bh : Gh)();
            return new dc(n, r, i, o, t);
          }),
          (Yh.prototype.g_ = function (t, e) {
            return (function (t, e, n, r, i, o, s) {
              o = new sh(t, e, n, r, i, o);
              return s && (o.Tl = !0), o;
            })(this.Zc, this.sl, this.il, this.rl, t.I_, t.ol, e);
          }),
          (Yh.prototype.terminate = function () {
            return (function (n) {
              return y(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = n),
                        Dr('RemoteStore', 'RemoteStore shutting down.'),
                        e.ru.add(5),
                        [4, Oc(e)]
                      );
                    case 1:
                      return t.sent(), e.cu.Ac(), e.uu.set('Unknown'), [2];
                  }
                });
              });
            })(this.sl);
          }),
          Yh),
        Kh =
          ((Wh.prototype.next = function (t) {
            this.observer.next && this.p_(this.observer.next, t);
          }),
          (Wh.prototype.error = function (t) {
            this.observer.error
              ? this.p_(this.observer.error, t)
              : console.error('Uncaught Error in snapshot listener:', t);
          }),
          (Wh.prototype.b_ = function () {
            this.muted = !0;
          }),
          (Wh.prototype.p_ = function (t, e) {
            var n = this;
            this.muted ||
              setTimeout(function () {
                n.muted || t(e);
              }, 0);
          }),
          Wh);
      function Wh(t) {
        (this.observer = t), (this.muted = !1);
      }
      function Yh() {}
      function Xh() {
        this.synchronizeTabs = !1;
      }
      function Qh() {}
      function Zh() {
        var t = this;
        (this.a_ = function () {
          return t.u_();
        }),
          (this.h_ = function () {
            return t.l_();
          }),
          (this.__ = []),
          this.f_();
      }
      function Jh(t) {
        var e = this;
        return (
          ((e = Oh.call(this, t) || this).forceLongPolling =
            t.forceLongPolling),
          (e.m = t.m),
          e
        );
      }
      function $h(t) {
        (this.n_ = t), (this.T = t.T);
        var e = t.ssl ? 'https' : 'http';
        (this.s_ = e + '://' + t.host),
          (this.i_ =
            'projects/' +
            this.T.projectId +
            '/databases/' +
            this.T.database +
            '/documents');
      }
      function tf(t) {
        (this.zl = t.zl), (this.Hl = t.Hl);
      }
      function ef(t) {
        (this.persistence = t), (this.Ql = new Zc()), (this.Kl = null);
      }
      function nf(t) {
        var e = this;
        return ((e = Rh.call(this) || this).qo = t), e;
      }
      function rf(t, e) {
        var n = this;
        (this.Ll = {}),
          (this.Ko = new da(0)),
          (this.Wo = !1),
          (this.Wo = !0),
          (this.Nr = t(this)),
          (this.Zo = new Ph(this)),
          (this.us = new Ma()),
          (this.os =
            ((t = this.us),
            new kh(t, function (t) {
              return n.Nr.$l(t);
            }))),
          (this.serializer = new Pa(e)),
          (this.tc = new Vh(this.serializer));
      }
      function of(t) {
        (this.serializer = t), (this.kl = new Map()), (this.Ml = new Map());
      }
      function sf(t) {
        (this.persistence = t),
          (this.xl = new ha(Oi, Ri)),
          (this.lastRemoteSnapshotVersion = ci.min()),
          (this.highestTargetId = 0),
          (this.Nl = 0),
          (this.Fl = new Zc()),
          (this.targetCount = 0),
          (this.Ol = qa.Io());
      }
      function uf(t) {
        var e = this;
        return ((e = Dh.call(this) || this).uo = t), e;
      }
      function af(t, e) {
        (this.us = t),
          (this.Dl = e),
          (this.docs = new Ui(pi.K)),
          (this.size = 0);
      }
      function cf(t, e) {
        (this.us = t),
          (this.Nr = e),
          (this.cs = []),
          (this.gl = 1),
          (this.Vl = new zi(Jc.Cu));
      }
      function hf(t, e, n) {
        if (!n)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Function ' + t + '() cannot be called with an empty ' + e + '.'
          );
      }
      function ff(t, e) {
        if (void 0 === e) return { merge: !1 };
        if (void 0 !== e.mergeFields && void 0 !== e.merge)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Invalid options passed to function ' +
              t +
              '(): You cannot specify both "merge" and "mergeFields".'
          );
        return e;
      }
      function lf(t, e, n, r) {
        if (!0 === e && !0 === r)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            t + ' and ' + n + ' cannot be used together.'
          );
      }
      function pf(t) {
        if (!pi.lt(t))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Invalid document reference. Document references must have an even number of segments, but ' +
              t +
              ' has ' +
              t.length +
              '.'
          );
      }
      function df(t) {
        if (pi.lt(t))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Invalid collection reference. Collection references must have an odd number of segments, but ' +
              t +
              ' has ' +
              t.length +
              '.'
          );
      }
      function yf(e) {
        if (void 0 === e) return 'undefined';
        if (null === e) return 'null';
        if ('string' == typeof e)
          return (
            20 < e.length && (e = e.substring(0, 20) + '...'), JSON.stringify(e)
          );
        if ('number' == typeof e || 'boolean' == typeof e) return '' + e;
        if ('object' != typeof e)
          return 'function' == typeof e ? 'a function' : Pr();
        if (e instanceof Array) return 'an array';
        var t = (function () {
          if (e.constructor) {
            var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
            if (t && 1 < t.length) return t[1];
          }
          return null;
        })();
        return t ? 'a custom ' + t + ' object' : 'an object';
      }
      function vf(t, e) {
        if (('_delegate' in t && (t = t._), t instanceof e)) return t;
        if (e.name === t.constructor.name)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
          );
        t = yf(t);
        throw new Nr(
          Ir.INVALID_ARGUMENT,
          "Expected type '" + e.name + "', but it was: " + t
        );
      }
      function gf(t, e) {
        if (e <= 0)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires a positive number, but it was: ' +
              e +
              '.'
          );
      }
      var mf,
        wf = function (t) {
          this._methodName = t;
        },
        bf =
          (f(Ef, (mf = wf)),
          (Ef.prototype.v_ = function (t) {
            if (2 !== t.S_)
              throw 1 === t.S_
                ? t.D_(
                    this._methodName +
                      '() can only appear at the top level of your update data'
                  )
                : t.D_(
                    this._methodName +
                      '() cannot be used with set() unless you pass {merge:true}'
                  );
            return t.sn.push(t.path), null;
          }),
          (Ef.prototype.isEqual = function (t) {
            return t instanceof Ef;
          }),
          Ef);
      function Ef() {
        return (null !== mf && mf.apply(this, arguments)) || this;
      }
      function _f(t, e, n) {
        return new ap(
          { S_: 3, C_: e.settings.C_, methodName: t._methodName, x_: n },
          e.T,
          e.serializer,
          e.ignoreUndefinedProperties
        );
      }
      var Tf,
        Af,
        If,
        Nf,
        Lf,
        Of,
        Rf =
          (f(Qf, (Of = wf)),
          (Qf.prototype.v_ = function (t) {
            return new Ds(t.path, new vs());
          }),
          (Qf.prototype.isEqual = function (t) {
            return t instanceof Qf;
          }),
          Qf),
        Df =
          (f(Xf, (Lf = wf)),
          (Xf.prototype.v_ = function (t) {
            var e = _f(this, t, !0),
              n = this.N_.map(function (t) {
                return vp(t, e);
              }),
              n = new gs(n);
            return new Ds(t.path, n);
          }),
          (Xf.prototype.isEqual = function (t) {
            return this === t;
          }),
          Xf),
        Sf =
          (f(Yf, (Nf = wf)),
          (Yf.prototype.v_ = function (t) {
            var e = _f(this, t, !0),
              n = this.N_.map(function (t) {
                return vp(t, e);
              }),
              n = new _s(n);
            return new Ds(t.path, n);
          }),
          (Yf.prototype.isEqual = function (t) {
            return this === t;
          }),
          Yf),
        kf =
          (f(Wf, (If = wf)),
          (Wf.prototype.v_ = function (t) {
            var e = new Ns(t.serializer, Ko(t.serializer, this.F_));
            return new Ds(t.path, e);
          }),
          (Wf.prototype.isEqual = function (t) {
            return this === t;
          }),
          Wf),
        Cf =
          (Object.defineProperty(Kf.prototype, 'latitude', {
            get: function () {
              return this.O_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Kf.prototype, 'longitude', {
            get: function () {
              return this.k_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Kf.prototype.isEqual = function (t) {
            return this.O_ === t.O_ && this.k_ === t.k_;
          }),
          (Kf.prototype.toJSON = function () {
            return { latitude: this.O_, longitude: this.k_ };
          }),
          (Kf.prototype.L = function (t) {
            return Mr(this.O_, t.O_) || Mr(this.k_, t.k_);
          }),
          Kf),
        Pf = new Map(),
        Vf =
          ((Hf.prototype.isEqual = function (t) {
            return (
              this.host === t.host &&
              this.ssl === t.ssl &&
              this.credentials === t.credentials &&
              this.cacheSizeBytes === t.cacheSizeBytes &&
              this.experimentalForceLongPolling ===
                t.experimentalForceLongPolling &&
              this.experimentalAutoDetectLongPolling ===
                t.experimentalAutoDetectLongPolling &&
              this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
            );
          }),
          Hf),
        xf =
          (Object.defineProperty(zf.prototype, 'app', {
            get: function () {
              if (!this.Q_)
                throw new Nr(
                  Ir.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.Q_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(zf.prototype, 'K_', {
            get: function () {
              return this.B_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(zf.prototype, 'W_', {
            get: function () {
              return void 0 !== this.j_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (zf.prototype.G_ = function (t) {
            if (this.B_)
              throw new Nr(
                Ir.FAILED_PRECONDITION,
                'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
              );
            (this.L_ = new Vf(t)),
              void 0 !== t.credentials &&
                (this.U_ = (function (t) {
                  if (!t) return new ii();
                  switch (t.type) {
                    case 'gapi':
                      var e = t.client;
                      return (
                        Vr(
                          !(
                            'object' != typeof e ||
                            null === e ||
                            !e.auth ||
                            !e.auth.getAuthHeaderValueForFirstParty
                          )
                        ),
                        new ui(e, t.sessionIndex || '0')
                      );
                    case 'provider':
                      return t.client;
                    default:
                      throw new Nr(
                        Ir.INVALID_ARGUMENT,
                        'makeCredentialsProvider failed due to invalid credential type'
                      );
                  }
                })(t.credentials));
          }),
          (zf.prototype.z_ = function () {
            return this.L_;
          }),
          (zf.prototype.H_ = function () {
            return (this.B_ = !0), this.L_;
          }),
          (zf.prototype._delete = function () {
            return this.j_ || (this.j_ = this.J_()), this.j_;
          }),
          (zf.prototype.J_ = function () {
            return (
              (t = Pf.get(this)) &&
                (Dr('ComponentProvider', 'Removing Datastore'),
                Pf.delete(this),
                t.terminate()),
              Promise.resolve()
            );
            var t;
          }),
          zf),
        o =
          ((Gf.prototype.Y_ = function (t, e) {
            switch ((void 0 === e && (e = 'none'), No(t))) {
              case 0:
                return null;
              case 1:
                return t.booleanValue;
              case 2:
                return Co(t.integerValue || t.doubleValue);
              case 3:
                return this.X_(t.timestampValue);
              case 4:
                return this.Z_(t, e);
              case 5:
                return t.stringValue;
              case 6:
                return this.tf(Po(t.bytesValue));
              case 7:
                return this.ef(t.referenceValue);
              case 8:
                return this.nf(t.geoPointValue);
              case 9:
                return this.sf(t.arrayValue, e);
              case 10:
                return this.rf(t.mapValue, e);
              default:
                throw Pr();
            }
          }),
          (Gf.prototype.rf = function (t, n) {
            var r = this,
              i = {};
            return (
              Eo(t.fields || {}, function (t, e) {
                i[t] = r.Y_(e, n);
              }),
              i
            );
          }),
          (Gf.prototype.nf = function (t) {
            return new Cf(Co(t.latitude), Co(t.longitude));
          }),
          (Gf.prototype.sf = function (t, e) {
            var n = this;
            return (t.values || []).map(function (t) {
              return n.Y_(t, e);
            });
          }),
          (Gf.prototype.Z_ = function (t, e) {
            switch (e) {
              case 'previous':
                var n = (function t(e) {
                  e = e.mapValue.fields.__previous_value__;
                  return To(e) ? t(e) : e;
                })(t);
                return null == n ? null : this.Y_(n, e);
              case 'estimate':
                return this.X_(Ao(t));
              default:
                return null;
            }
          }),
          (Gf.prototype.X_ = function (t) {
            t = ko(t);
            return new ai(t.seconds, t.nanos);
          }),
          (Gf.prototype.cf = function (t, e) {
            var n = hi.nt(t);
            Vr(ls(n));
            (t = new Qr(n.get(1), n.get(3))), (n = new pi(n.j(5)));
            return (
              t.isEqual(e) ||
                Sr(
                  'Document ' +
                    n +
                    ' contains a document reference within a different database (' +
                    t.projectId +
                    '/' +
                    t.database +
                    ') which is not supported. It will be treated as a reference in the current database (' +
                    e.projectId +
                    '/' +
                    e.database +
                    ') instead.'
                ),
              n
            );
          }),
          Gf),
        Uf =
          (f(Bf, (Af = o)),
          (Bf.prototype.tf = function (t) {
            return new Yr(new Br(t));
          }),
          (Bf.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return sd.af(t, this.firestore, null);
          }),
          Bf),
        Mf =
          (Object.defineProperty(Ff.prototype, 'id', {
            get: function () {
              return this.lf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ff.prototype, 'ref', {
            get: function () {
              return new bl(this.uf, this.ff, this.lf);
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ff.prototype.exists = function () {
            return null !== this._f;
          }),
          (Ff.prototype.data = function () {
            if (this._f) {
              if (this.ff) {
                var t = new jf(this.uf, this.hf, this.lf, this._f, null);
                return this.ff.fromFirestore(t);
              }
              return this.hf.Y_(this._f.mn());
            }
          }),
          (Ff.prototype.get = function (t) {
            if (this._f) {
              t = this._f.data().field(Zf('DocumentSnapshot.get', t));
              if (null !== t) return this.hf.Y_(t);
            }
          }),
          Ff),
        jf =
          (f(qf, (Tf = Mf)),
          (qf.prototype.data = function () {
            return Tf.prototype.data.call(this);
          }),
          qf);
      function qf() {
        return (null !== Tf && Tf.apply(this, arguments)) || this;
      }
      function Ff(t, e, n, r, i) {
        (this.uf = t),
          (this.hf = e),
          (this.lf = n),
          (this._f = r),
          (this.ff = i);
      }
      function Bf(t) {
        var e = this;
        return ((e = Af.call(this) || this).firestore = t), e;
      }
      function Gf() {}
      function zf(t, e) {
        (this.M_ = '(lite)'),
          (this.L_ = new Vf({})),
          (this.B_ = !1),
          t instanceof Qr
            ? ((this.q_ = t), (this.U_ = new ii()))
            : ((this.Q_ = t),
              (this.q_ = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    'projectId'
                  ])
                )
                  throw new Nr(
                    Ir.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Qr(t.options.projectId);
              })(t)),
              (this.U_ = new oi(e)));
      }
      function Hf(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set"
            );
          (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
        } else
          (this.host = t.host),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e);
        if (
          ((this.credentials = t.credentials),
          (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = 41943040;
        else {
          if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              'cacheSizeBytes must be at least 1048576'
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
          lf(
            'experimentalForceLongPolling',
            t.experimentalForceLongPolling,
            'experimentalAutoDetectLongPolling',
            t.experimentalAutoDetectLongPolling
          );
      }
      function Kf(t, e) {
        if (!isFinite(t) || t < -90 || 90 < t)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Latitude must be a number between -90 and 90, but was: ' + t
          );
        if (!isFinite(e) || e < -180 || 180 < e)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Longitude must be a number between -180 and 180, but was: ' + e
          );
        (this.O_ = t), (this.k_ = e);
      }
      function Wf(t, e) {
        var n = this;
        return ((n = If.call(this, t) || this).F_ = e), n;
      }
      function Yf(t, e) {
        var n = this;
        return ((n = Nf.call(this, t) || this).N_ = e), n;
      }
      function Xf(t, e) {
        var n = this;
        return ((n = Lf.call(this, t) || this).N_ = e), n;
      }
      function Qf() {
        return (null !== Of && Of.apply(this, arguments)) || this;
      }
      function Zf(t, e) {
        return 'string' == typeof e ? _p(t, e) : (e instanceof Gr ? e._ : e).df;
      }
      var Jf,
        $f =
          ((nl.prototype.isEqual = function (t) {
            return this.df.isEqual(t.df);
          }),
          nl),
        tl =
          (f(el, (Jf = xf)),
          (el.prototype.J_ = function () {
            return this.Ef || td(this), this.Ef.terminate();
          }),
          el);
      function el(t, e) {
        var n = this;
        return (
          ((n = Jf.call(this, t, e) || this).wf = new Da()),
          (n.M_ = 'name' in t ? t.name : '[DEFAULT]'),
          n
        );
      }
      function nl() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              'Invalid field name at argument $(i + 1). Field names must not be empty.'
            );
        this.df = new li(t);
      }
      var rl,
        il,
        ol =
          (f(hl, (il = Mf)),
          (hl.prototype.exists = function () {
            return il.prototype.exists.call(this);
          }),
          (hl.prototype.data = function (t) {
            if ((void 0 === t && (t = {}), this._f)) {
              if (this.ff) {
                var e = new sl(
                  this.uf,
                  this.hf,
                  this.lf,
                  this._f,
                  this.metadata,
                  null
                );
                return this.ff.fromFirestore(e, t);
              }
              return this.hf.Y_(this._f.mn(), t.serverTimestamps);
            }
          }),
          (hl.prototype.get = function (t, e) {
            if ((void 0 === e && (e = {}), this._f)) {
              t = this._f.data().field(Zf('DocumentSnapshot.get', t));
              if (null !== t) return this.hf.Y_(t, e.serverTimestamps);
            }
          }),
          hl),
        sl =
          (f(cl, (rl = ol)),
          (cl.prototype.data = function (t) {
            return void 0 === t && (t = {}), rl.prototype.data.call(this, t);
          }),
          cl),
        ul =
          (Object.defineProperty(al.prototype, 'docs', {
            get: function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(al.prototype, 'size', {
            get: function () {
              return this.mf.docs.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(al.prototype, 'empty', {
            get: function () {
              return 0 === this.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (al.prototype.forEach = function (e, n) {
            var r = this;
            this.mf.docs.forEach(function (t) {
              e.call(
                n,
                new sl(
                  r.uf,
                  r.hf,
                  t.key,
                  t,
                  new wd(r.mf.se.has(t.key), r.mf.fromCache),
                  r.query.ff
                )
              );
            });
          }),
          (al.prototype.docChanges = function (t) {
            void 0 === t && (t = {});
            t = !!t.includeMetadataChanges;
            if (t && this.mf.re)
              throw new Nr(
                Ir.INVALID_ARGUMENT,
                'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
              );
            return (
              (this.If && this.Af === t) ||
                ((this.If = (function (i, e) {
                  if (i.mf.ne.Y()) {
                    var n = 0;
                    return i.mf.docChanges.map(function (t) {
                      var e = new sl(
                        i.uf,
                        i.hf,
                        t.doc.key,
                        t.doc,
                        new wd(i.mf.se.has(t.doc.key), i.mf.fromCache),
                        i.query.ff
                      );
                      return (
                        t.doc,
                        { type: 'added', doc: e, oldIndex: -1, newIndex: n++ }
                      );
                    });
                  }
                  var o = i.mf.ne;
                  return i.mf.docChanges
                    .filter(function (t) {
                      return e || 3 !== t.type;
                    })
                    .map(function (t) {
                      var e = new sl(
                          i.uf,
                          i.hf,
                          t.doc.key,
                          t.doc,
                          new wd(i.mf.se.has(t.doc.key), i.mf.fromCache),
                          i.query.ff
                        ),
                        n = -1,
                        r = -1;
                      return (
                        0 !== t.type &&
                          ((n = o.indexOf(t.doc.key)),
                          (o = o.delete(t.doc.key))),
                        1 !== t.type &&
                          (r = (o = o.add(t.doc)).indexOf(t.doc.key)),
                        {
                          type: (function (t) {
                            switch (t) {
                              case 0:
                                return 'added';
                              case 2:
                              case 3:
                                return 'modified';
                              case 1:
                                return 'removed';
                              default:
                                return Pr();
                            }
                          })(t.type),
                          doc: e,
                          oldIndex: n,
                          newIndex: r
                        }
                      );
                    });
                })(this, t)),
                (this.Af = t)),
              this.If
            );
          }),
          al);
      function al(t, e, n, r) {
        (this.uf = t),
          (this.hf = e),
          (this.mf = r),
          (this.metadata = new wd(r.hasPendingWrites, r.fromCache)),
          (this.query = n);
      }
      function cl() {
        return (null !== rl && rl.apply(this, arguments)) || this;
      }
      function hl(t, e, n, r, i, o) {
        var s = this;
        return (
          ((s = il.call(this, t, e, n, r, o) || this).uf = t),
          (s.Tf = t),
          (s.metadata = i),
          s
        );
      }
      function fl(t, e) {
        return t instanceof ol && e instanceof ol
          ? t.uf === e.uf &&
              t.lf.isEqual(e.lf) &&
              (null === t._f ? null === e._f : t._f.isEqual(e._f)) &&
              t.ff === e.ff
          : t instanceof ul &&
              e instanceof ul &&
              t.uf === e.uf &&
              tp(t.query, e.query) &&
              t.metadata.isEqual(e.metadata) &&
              t.mf.isEqual(e.mf);
      }
      function ll(i) {
        return (function () {
          if ('object' == typeof i && null !== i)
            for (
              var t = i, e = 0, n = ['next', 'error', 'complete'];
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r in t && 'function' == typeof t[r]) return 1;
            }
        })();
      }
      var pl,
        dl =
          (f(yl, (pl = o)),
          (yl.prototype.tf = function (t) {
            return new Br(t);
          }),
          (yl.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return new bl(this.firestore, null, t);
          }),
          yl);
      function yl(t) {
        var e = this;
        return ((e = pl.call(this) || this).firestore = t), e;
      }
      function vl(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++)
          r[i - 3] = arguments[i];
        t = vf(t, bl);
        var o = vf(t.firestore, tl),
          s = ep(o);
        return (
          e instanceof Gr && (e = e._),
          ml(
            o,
            ('string' == typeof e || e instanceof $f
              ? dp(s, 'updateDoc', t.lf, e, n, r)
              : pp(s, 'updateDoc', t.lf, e)
            ).Pf(t.lf, Ps.exists(!0))
          )
        );
      }
      function gl(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        e instanceof Gr && (e = e._);
        var r = { includeMetadataChanges: !1 },
          i = 0;
        'object' != typeof n[i] || ll(n[i]) || ((r = n[i]), i++);
        var o,
          s,
          u,
          a,
          c,
          h,
          f = { includeMetadataChanges: r.includeMetadataChanges };
        return (
          ll(n[i]) &&
            ((o = n[i]),
            (n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 1] =
              null === (r = o.error) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 2] =
              null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o))),
          e instanceof bl
            ? ((u = vf(e.firestore, tl)),
              (a = mu(e.lf.path)),
              (h = {
                next: function (t) {
                  n[i] && n[i](wl(u, e, t));
                },
                error: n[i + 1],
                complete: n[i + 2]
              }))
            : ((s = vf(e, El)),
              (u = vf(s.firestore, tl)),
              (a = s.Rf),
              (c = new dl(u)),
              (h = {
                next: function (t) {
                  n[i] && n[i](new ul(u, c, s, t));
                },
                error: n[i + 1],
                complete: n[i + 2]
              }),
              zl(e.Rf)),
          (function (n, t, e) {
            var r = this,
              i = new Kh(h),
              o = new Qc(t, i, e);
            return (
              n.Ei.yi(function () {
                return y(r, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = Wc), [4, Up(n)];
                      case 1:
                        return [2, e.apply(void 0, [t.sent(), o])];
                    }
                  });
                });
              }),
              function () {
                i.b_(),
                  n.Ei.yi(function () {
                    return y(r, void 0, void 0, function () {
                      var e;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (e = Yc), [4, Up(n)];
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), o])];
                        }
                      });
                    });
                  });
              }
            );
          })($p(u), a, f)
        );
      }
      function ml(t, e) {
        return (function (n, r) {
          var t = this,
            i = new Aa();
          return (
            n.Ei.yi(function () {
              return y(t, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = yh), [4, xp(n)];
                    case 1:
                      return [2, e.apply(void 0, [t.sent(), r, i])];
                  }
                });
              });
            }),
            i.promise
          );
        })($p(t), e);
      }
      function wl(t, e, n) {
        var r = n.docs.get(e.lf),
          i = new dl(t);
        return new ol(
          t,
          i,
          e.lf,
          r,
          new wd(n.hasPendingWrites, n.fromCache),
          e.ff
        );
      }
      var bl =
          (Object.defineProperty(Tl.prototype, 'yf', {
            get: function () {
              return this.lf.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Tl.prototype, 'id', {
            get: function () {
              return this.lf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Tl.prototype, 'path', {
            get: function () {
              return this.lf.path.et();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Tl.prototype, 'parent', {
            get: function () {
              return new Kl(this.firestore, this.ff, this.lf.path.G());
            },
            enumerable: !1,
            configurable: !0
          }),
          (Tl.prototype.withConverter = function (t) {
            return new Tl(this.firestore, t, this.lf);
          }),
          Tl),
        El =
          ((_l.prototype.withConverter = function (t) {
            return new _l(this.firestore, t, this.Rf);
          }),
          _l),
        _e = function () {};
      function _l(t, e, n) {
        (this.ff = e),
          (this.Rf = n),
          (this.type = 'query'),
          (this.firestore = t);
      }
      function Tl(t, e, n) {
        (this.ff = e),
          (this.lf = n),
          (this.type = 'document'),
          (this.firestore = t);
      }
      function Al(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
          t = i[r].gf(t);
        }
        return t;
      }
      var Il,
        Nl,
        Ll,
        Ol,
        Rl,
        Dl =
          (f(jl, (Rl = _e)),
          (jl.prototype.gf = function (t) {
            var e = ep(t.firestore),
              e = (function (t, e, n, r, i, o) {
                if (r.rt()) {
                  if ('array-contains' === i || 'array-contains-any' === i)
                    throw new Nr(
                      Ir.INVALID_ARGUMENT,
                      "Invalid Query. You can't perform '" +
                        i +
                        "' queries on FieldPath.documentId()."
                    );
                  if ('in' === i || 'not-in' === i) {
                    Bl(o, i);
                    for (var s = [], u = 0, a = o; u < a.length; u++) {
                      var c = a[u];
                      s.push(Fl(n, t, c));
                    }
                    h = { arrayValue: { values: s } };
                  } else h = Fl(n, t, o);
                } else
                  ('in' !== i &&
                    'not-in' !== i &&
                    'array-contains-any' !== i) ||
                    Bl(o, i),
                    (h = yp(e, 'where', o, 'in' === i || 'not-in' === i));
                var h = Cu.create(r, i, h);
                return (
                  (function (t, e) {
                    if (e.Pn()) {
                      var n = _u(t);
                      if (null !== n && !n.isEqual(e.field))
                        throw new Nr(
                          Ir.INVALID_ARGUMENT,
                          "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                            n.toString() +
                            "' and '" +
                            e.field.toString() +
                            "'"
                        );
                      n = Eu(t);
                      null !== n && Gl(0, e.field, n);
                    }
                    t = (function (t, e) {
                      for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (0 <= e.indexOf(i.op)) return i.op;
                      }
                      return null;
                    })(
                      t,
                      (function () {
                        switch (e.op) {
                          case '!=':
                            return ['!=', 'not-in'];
                          case 'array-contains':
                            return [
                              'array-contains',
                              'array-contains-any',
                              'not-in'
                            ];
                          case 'in':
                            return ['array-contains-any', 'in', 'not-in'];
                          case 'array-contains-any':
                            return [
                              'array-contains',
                              'array-contains-any',
                              'in',
                              'not-in'
                            ];
                          case 'not-in':
                            return [
                              'array-contains',
                              'array-contains-any',
                              'in',
                              'not-in',
                              '!='
                            ];
                          default:
                            return [];
                        }
                      })()
                    );
                    if (null !== t)
                      throw t === e.op
                        ? new Nr(
                            Ir.INVALID_ARGUMENT,
                            "Invalid query. You cannot use more than one '" +
                              e.op.toString() +
                              "' filter."
                          )
                        : new Nr(
                            Ir.INVALID_ARGUMENT,
                            "Invalid query. You cannot use '" +
                              e.op.toString() +
                              "' filters with '" +
                              t.toString() +
                              "' filters."
                          );
                  })(t, h),
                  h
                );
              })(t.Rf, e, t.firestore.q_, this.Vf, this.pf, this.bf);
            return new El(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = t.filters.concat([e])),
              new du(
                t.path,
                t.collectionGroup,
                t.In.slice(),
                e,
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          jl),
        Sl =
          (f(Ml, (Ol = _e)),
          (Ml.prototype.gf = function (t) {
            var e = (function (t, e, n) {
              if (null !== t.startAt)
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
                );
              if (null !== t.endAt)
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
                );
              var r = new ua(e, n);
              return (
                (e = r),
                null !== Eu((n = t)) ||
                  (null !== (t = _u(n)) && Gl(0, t, e.field)),
                r
              );
            })(t.Rf, this.Vf, this.vf);
            return new El(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = t.In.concat([e])),
              new du(
                t.path,
                t.collectionGroup,
                e,
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                t.endAt
              ))
            );
          }),
          Ml),
        kl =
          (f(Ul, (Ll = _e)),
          (Ul.prototype.gf = function (t) {
            return new El(t.firestore, t.ff, Nu(t.Rf, this.Sf, this.Df));
          }),
          Ul),
        Cl =
          (f(xl, (Nl = _e)),
          (xl.prototype.gf = function (t) {
            var e = ql(t, this.type, this.Cf, this.xf);
            return new El(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = e),
              new du(
                t.path,
                t.collectionGroup,
                t.In.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                e,
                t.endAt
              ))
            );
          }),
          xl),
        Pl =
          (f(Vl, (Il = _e)),
          (Vl.prototype.gf = function (t) {
            var e = ql(t, this.type, this.Cf, this.xf);
            return new El(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = e),
              new du(
                t.path,
                t.collectionGroup,
                t.In.slice(),
                t.filters.slice(),
                t.limit,
                t.limitType,
                t.startAt,
                e
              ))
            );
          }),
          Vl);
      function Vl(t, e, n) {
        var r = this;
        return (
          ((r = Il.call(this) || this).type = t), (r.Cf = e), (r.xf = n), r
        );
      }
      function xl(t, e, n) {
        var r = this;
        return (
          ((r = Nl.call(this) || this).type = t), (r.Cf = e), (r.xf = n), r
        );
      }
      function Ul(t, e, n) {
        var r = this;
        return (
          ((r = Ll.call(this) || this).type = t), (r.Sf = e), (r.Df = n), r
        );
      }
      function Ml(t, e) {
        var n = this;
        return (
          ((n = Ol.call(this) || this).Vf = t),
          (n.vf = e),
          (n.type = 'orderBy'),
          n
        );
      }
      function jl(t, e, n) {
        var r = this;
        return (
          ((r = Rl.call(this) || this).Vf = t),
          (r.pf = e),
          (r.bf = n),
          (r.type = 'where'),
          r
        );
      }
      function ql(t, c, e, n) {
        if ((e[0] instanceof Gr && (e[0] = e[0]._), e[0] instanceof Mf))
          return (function (t, e, n, r) {
            if (!n)
              throw new Nr(
                Ir.NOT_FOUND,
                "Can't use a DocumentSnapshot that doesn't exist for " +
                  c +
                  '().'
              );
            for (var i = [], o = 0, s = Au(t); o < s.length; o++) {
              var u = s[o];
              if (u.field.rt()) i.push(Vo(e, n.key));
              else {
                var a = n.field(u.field);
                if (To(a))
                  throw new Nr(
                    Ir.INVALID_ARGUMENT,
                    'Invalid query. You are trying to start or end a query using a document for which the field "' +
                      u.field +
                      '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                  );
                if (null === a) {
                  u = u.field.et();
                  throw new Nr(
                    Ir.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      u +
                      "' (used as the orderBy) does not exist."
                  );
                }
                i.push(a);
              }
            }
            return new $u(i, r);
          })(t.Rf, t.firestore.q_, e[0]._f, n);
        var r = ep(t.firestore);
        return (function (t, e, n, r, i, o) {
          var s = t.In;
          if (i.length > s.length)
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              'Too many arguments provided to ' +
                r +
                '(). The number of arguments must be less than or equal to the number of orderBy() clauses'
            );
          for (var u = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (s[a].field.rt()) {
              if ('string' != typeof c)
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid query. Expected a string for document ID in ' +
                    r +
                    '(), but got a ' +
                    typeof c
                );
              if (!Tu(t) && -1 !== c.indexOf('/'))
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ' +
                    r +
                    "() must be a plain document ID, but '" +
                    c +
                    "' contains a slash."
                );
              var h = t.path.child(hi.nt(c));
              if (!pi.lt(h))
                throw new Nr(
                  Ir.INVALID_ARGUMENT,
                  'Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ' +
                    r +
                    "() must result in a valid document path, but '" +
                    h +
                    "' is not because it contains an odd number of segments."
                );
              h = new pi(h);
              u.push(Vo(e, h));
            } else {
              c = yp(n, r, c);
              u.push(c);
            }
          }
          return new $u(u, o);
        })(t.Rf, t.firestore.q_, r, c, e, n);
      }
      function Fl(t, e, n) {
        if ((n instanceof Gr && (n = n._), 'string' == typeof n)) {
          if ('' === n)
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              'Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.'
            );
          if (!Tu(e) && -1 !== n.indexOf('/'))
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                n +
                "' contains a '/' character."
            );
          e = e.path.child(hi.nt(n));
          if (!pi.lt(e))
            throw new Nr(
              Ir.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                e +
                "' is not because it has an odd number of segments (" +
                e.length +
                ').'
            );
          return Vo(t, new pi(e));
        }
        if (n instanceof bl) return Vo(t, n.lf);
        throw new Nr(
          Ir.INVALID_ARGUMENT,
          'Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ' +
            yf(n) +
            '.'
        );
      }
      function Bl(t, e) {
        if (!Array.isArray(t) || 0 === t.length)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            "Invalid Query. A non-empty array is required for '" +
              e.toString() +
              "' filters."
          );
        if (10 < t.length)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters support a maximum of 10 elements in the value array."
          );
      }
      function Gl(t, e, n) {
        if (!n.isEqual(e))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
              e.toString() +
              "' and so you must also use '" +
              e.toString() +
              "' as your first argument to orderBy(), but your first orderBy() is on field '" +
              n.toString() +
              "' instead."
          );
      }
      function zl(t) {
        if (bu(t) && 0 === t.In.length)
          throw new Nr(
            Ir.UNIMPLEMENTED,
            'limitToLast() queries require specifying at least one orderBy() clause'
          );
      }
      var Hl,
        Kl =
          (f(Wl, (Hl = El)),
          Object.defineProperty(Wl.prototype, 'id', {
            get: function () {
              return this.Rf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Wl.prototype, 'path', {
            get: function () {
              return this.Rf.path.et();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Wl.prototype, 'parent', {
            get: function () {
              var t = this.yf.G();
              return t.Y() ? null : new bl(this.firestore, null, new pi(t));
            },
            enumerable: !1,
            configurable: !0
          }),
          (Wl.prototype.withConverter = function (t) {
            return new Wl(this.firestore, t, this.yf);
          }),
          Wl);
      function Wl(t, e, n) {
        var r = this;
        return (
          ((r = Hl.call(this, t, e, mu(n)) || this).firestore = t),
          (r.yf = n),
          (r.type = 'collection'),
          r
        );
      }
      function Yl(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Gr && (t = t._),
          hf('collection', 'path', e),
          t instanceof xf)
        )
          return df((n = hi.nt.apply(hi, l([e], r)))), new Kl(t, null, n);
        if (!(t instanceof bl || t instanceof Kl))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
          );
        return (
          df((n = hi.nt.apply(hi, l([t.path], r)).child(hi.nt(e)))),
          new Kl(t.firestore, null, n)
        );
      }
      function Xl(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Gr && (t = t._),
          1 === arguments.length && (e = xr.t()),
          hf('doc', 'path', e),
          t instanceof xf)
        )
          return (
            pf((n = hi.nt.apply(hi, l([e], r)))), new bl(t, null, new pi(n))
          );
        if (!(t instanceof bl || t instanceof Kl))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
          );
        return (
          pf((n = t.yf.child(hi.nt.apply(hi, l([e], r))))),
          new bl(t.firestore, t instanceof Kl ? t.ff : null, new pi(n))
        );
      }
      var Ql,
        Zl =
          (f(Jl, (Ql = o)),
          (Jl.prototype.tf = function (t) {
            return new Br(t);
          }),
          (Jl.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return new bl(this.firestore, null, t);
          }),
          Jl);
      function Jl(t) {
        var e = this;
        return ((e = Ql.call(this) || this).firestore = t), e;
      }
      function $l(t, e) {
        return (
          t instanceof Gr && (t = t._),
          e instanceof Gr && (e = e._),
          (t instanceof bl || t instanceof Kl) &&
            (e instanceof bl || e instanceof Kl) &&
            t.firestore === e.firestore &&
            t.path === e.path &&
            t.ff === e.ff
        );
      }
      function tp(t, e) {
        return (
          t instanceof Gr && (t = t._),
          e instanceof Gr && (e = e._),
          t instanceof El &&
            e instanceof El &&
            t.firestore === e.firestore &&
            Lu(t.Rf, e.Rf) &&
            t.ff === e.ff
        );
      }
      function ep(t) {
        var e = t.H_(),
          n = Ka(t.q_);
        return new cp(t.q_, !!e.ignoreUndefinedProperties, n);
      }
      var np = /^__.*__$/,
        rp =
          ((sp.prototype.Pf = function (t, e) {
            var n = [];
            return (
              null !== this.sn
                ? n.push(new zs(t, this.data, this.sn, e))
                : n.push(new Gs(t, this.data, e)),
              0 < this.fieldTransforms.length &&
                n.push(new Xs(t, this.fieldTransforms)),
              n
            );
          }),
          sp),
        ip =
          ((op.prototype.Pf = function (t, e) {
            e = [new zs(t, this.data, this.sn, e)];
            return (
              0 < this.fieldTransforms.length &&
                e.push(new Xs(t, this.fieldTransforms)),
              e
            );
          }),
          op);
      function op(t, e, n) {
        (this.data = t), (this.sn = e), (this.fieldTransforms = n);
      }
      function sp(t, e, n) {
        (this.data = t), (this.sn = e), (this.fieldTransforms = n);
      }
      function up(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return 1;
          case 3:
          case 4:
            return;
          default:
            throw Pr();
        }
      }
      var ap =
          (Object.defineProperty(fp.prototype, 'path', {
            get: function () {
              return this.settings.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(fp.prototype, 'S_', {
            get: function () {
              return this.settings.S_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (fp.prototype.Ff = function (t) {
            return new fp(
              Object.assign(Object.assign({}, this.settings), t),
              this.T,
              this.serializer,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.sn
            );
          }),
          (fp.prototype.Of = function (t) {
            var e =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              e = this.Ff({ path: e, x_: !1 });
            return e.kf(t), e;
          }),
          (fp.prototype.Mf = function (t) {
            var e,
              t =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              t = this.Ff({ path: t, x_: !1 });
            return t.Nf(), t;
          }),
          (fp.prototype.Lf = function (t) {
            return this.Ff({ path: void 0, x_: !0 });
          }),
          (fp.prototype.D_ = function (t) {
            return Tp(
              t,
              this.settings.methodName,
              this.settings.$f || !1,
              this.path,
              this.settings.C_
            );
          }),
          (fp.prototype.contains = function (e) {
            return (
              void 0 !==
                this.sn.find(function (t) {
                  return e.X(t);
                }) ||
              void 0 !==
                this.fieldTransforms.find(function (t) {
                  return e.X(t.field);
                })
            );
          }),
          (fp.prototype.Nf = function () {
            if (this.path)
              for (var t = 0; t < this.path.length; t++)
                this.kf(this.path.get(t));
          }),
          (fp.prototype.kf = function (t) {
            if (0 === t.length)
              throw this.D_('Document fields must not be empty');
            if (up(this.S_) && np.test(t))
              throw this.D_('Document fields cannot begin and end with "__"');
          }),
          fp),
        cp =
          ((hp.prototype.Bf = function (t, e, n, r) {
            return (
              void 0 === r && (r = !1),
              new ap(
                { S_: t, methodName: e, C_: n, path: li.st(), x_: !1, $f: r },
                this.T,
                this.serializer,
                this.ignoreUndefinedProperties
              )
            );
          }),
          hp);
      function hp(t, e, n) {
        (this.T = t),
          (this.ignoreUndefinedProperties = e),
          (this.serializer = n || Ka(t));
      }
      function fp(t, e, n, r, i, o) {
        (this.settings = t),
          (this.T = e),
          (this.serializer = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.Nf(),
          (this.fieldTransforms = i || []),
          (this.sn = o || []);
      }
      function lp(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var s = t.Bf(o.merge || o.mergeFields ? 2 : 0, e, n, i);
        wp('Data must be an object, but it was:', s, r);
        var u,
          a,
          r = gp(r, s);
        if (o.merge) (u = new Ss(s.sn)), (a = s.fieldTransforms);
        else if (o.mergeFields) {
          for (var c = [], h = 0, f = o.mergeFields; h < f.length; h++) {
            var l = bp(e, f[h], n);
            if (!s.contains(l))
              throw new Nr(
                Ir.INVALID_ARGUMENT,
                "Field '" +
                  l +
                  "' is specified in your field mask but missing from your input data."
              );
            Ap(c, l) || c.push(l);
          }
          (u = new Ss(c)),
            (a = s.fieldTransforms.filter(function (t) {
              return u.hn(t.field);
            }));
        } else (u = null), (a = s.fieldTransforms);
        return new rp(new nu(r), u, a);
      }
      function pp(t, r, i, e) {
        var o = t.Bf(1, r, i);
        wp('Data must be an object, but it was:', o, e);
        var s = [],
          u = new ru();
        Eo(e, function (t, e) {
          var n = _p(r, t, i);
          e instanceof Gr && (e = e._);
          t = o.Mf(n);
          e instanceof bf
            ? s.push(n)
            : null != (t = vp(e, t)) && (s.push(n), u.set(n, t));
        });
        e = new Ss(s);
        return new ip(u._n(), e, o.fieldTransforms);
      }
      function dp(t, e, n, r, i, o) {
        var s = t.Bf(1, e, n),
          u = [bp(e, r, n)],
          a = [i];
        if (o.length % 2 != 0)
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Function ' +
              e +
              '() needs to be called with an even number of arguments that alternate between field names and values.'
          );
        for (var c = 0; c < o.length; c += 2)
          u.push(bp(e, o[c])), a.push(o[c + 1]);
        for (var h, f, l, p = [], d = new ru(), y = u.length - 1; 0 <= y; --y) {
          Ap(p, u[y]) ||
            ((h = u[y]),
            (f = a[y]) instanceof Gr && (f = f._),
            (l = s.Mf(h)),
            f instanceof bf
              ? p.push(h)
              : null != (l = vp(f, l)) && (p.push(h), d.set(h, l)));
        }
        i = new Ss(p);
        return new ip(d._n(), i, s.fieldTransforms);
      }
      function yp(t, e, n, r) {
        return void 0 === r && (r = !1), vp(n, t.Bf(r ? 4 : 3, e));
      }
      function vp(s, t) {
        if ((s instanceof Gr && (s = s._), mp(s)))
          return wp('Unsupported field value:', t, s), gp(s, t);
        if (s instanceof wf)
          return (
            (function (t, e) {
              if (!up(e.S_))
                throw e.D_(
                  t._methodName + '() can only be used with update() and set()'
                );
              if (!e.path)
                throw e.D_(
                  t._methodName + '() is not currently supported inside arrays'
                );
              t = t.v_(e);
              t && e.fieldTransforms.push(t);
            })(s, t),
            null
          );
        if ((t.path && t.sn.push(t.path), s instanceof Array)) {
          if (t.settings.x_ && 4 !== t.S_)
            throw t.D_('Nested arrays are not supported');
          return (function (t) {
            for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
              var o = vp(i[r], t.Lf(n));
              null == o && (o = { nullValue: 'NULL_VALUE' }), e.push(o), n++;
            }
            return { arrayValue: { values: e } };
          })(t);
        }
        return (function (t, e) {
          if ((t instanceof Gr && (t = t._), null === t))
            return { nullValue: 'NULL_VALUE' };
          if ('number' == typeof t) return Ko(e.serializer, t);
          if ('boolean' == typeof t) return { booleanValue: t };
          if ('string' == typeof t) return { stringValue: t };
          if (t instanceof Date) {
            var n = ai.fromDate(t);
            return { timestampValue: Wo(e.serializer, n) };
          }
          if (t instanceof ai)
            return (
              (n = new ai(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
              { timestampValue: Wo(e.serializer, n) }
            );
          if (t instanceof Cf)
            return {
              geoPointValue: { latitude: t.latitude, longitude: t.longitude }
            };
          if (t instanceof Br) return { bytesValue: Yo(e.serializer, t.l) };
          if (t instanceof bl) {
            n = e.T;
            var r = t.firestore.q_;
            if (!r.isEqual(n))
              throw e.D_(
                'Document reference is for database ' +
                  r.projectId +
                  '/' +
                  r.database +
                  ' but should be for database ' +
                  n.projectId +
                  '/' +
                  n.database
              );
            return { referenceValue: Qo(t.firestore.q_ || e.T, t.lf.path) };
          }
          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.D_('Unsupported field value: ' + yf(t));
        })(s, t);
      }
      function gp(t, n) {
        var r = {};
        return (
          _o(t)
            ? n.path && 0 < n.path.length && n.sn.push(n.path)
            : Eo(t, function (t, e) {
                e = vp(e, n.Of(t));
                null != e && (r[t] = e);
              }),
          { mapValue: { fields: r } }
        );
      }
      function mp(t) {
        return !(
          'object' != typeof t ||
          null === t ||
          t instanceof Array ||
          t instanceof Date ||
          t instanceof ai ||
          t instanceof Cf ||
          t instanceof Br ||
          t instanceof bl ||
          t instanceof wf
        );
      }
      function wp(t, e, n) {
        if (
          !mp(n) ||
          'object' != typeof (r = n) ||
          null === r ||
          (Object.getPrototypeOf(r) !== Object.prototype &&
            null !== Object.getPrototypeOf(r))
        ) {
          n = yf(n);
          throw 'an object' === n
            ? e.D_(t + ' a custom object')
            : e.D_(t + ' ' + n);
        }
        var r;
      }
      function bp(t, e, n) {
        if ((e instanceof Gr && (e = e._), e instanceof $f)) return e.df;
        if ('string' == typeof e) return _p(t, e);
        throw Tp(
          'Field path arguments must be of type string or FieldPath.',
          t,
          !1,
          void 0,
          n
        );
      }
      var Ep = new RegExp('[~\\*/\\[\\]]');
      function _p(e, n, r) {
        if (0 <= n.search(Ep))
          throw Tp(
            'Invalid field path (' +
              n +
              "). Paths must not contain '~', '*', '/', '[', or ']'",
            e,
            !1,
            void 0,
            r
          );
        try {
          return new ($f.bind.apply($f, l([void 0], n.split('.'))))().df;
        } catch (t) {
          throw Tp(
            'Invalid field path (' +
              n +
              "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
            e,
            !1,
            void 0,
            r
          );
        }
      }
      function Tp(t, e, n, r, i) {
        var o = r && !r.Y(),
          s = void 0 !== i,
          e = 'Function ' + e + '() called with invalid data';
        n && (e += ' (via `toFirestore()`)');
        n = '';
        return (
          (o || s) &&
            ((n += ' (found'),
            o && (n += ' in field ' + r),
            s && (n += ' in document ' + i),
            (n += ')')),
          new Nr(Ir.INVALID_ARGUMENT, (e += '. ') + t + n)
        );
      }
      function Ap(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      var Ip =
          ((Dp.prototype.Wf = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.jf(), 0 < this.mutations.length))
                      throw new Nr(
                        Ir.INVALID_ARGUMENT,
                        'Firestore transactions require all reads to be executed before all writes.'
                      );
                    return [
                      4,
                      (function (s, u) {
                        return y(this, void 0, void 0, function () {
                          var n, e, r, i, o;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = es((n = s).serializer) + '/documents'),
                                  (r = {
                                    documents: u.map(function (t) {
                                      return Jo(n.serializer, t);
                                    })
                                  }),
                                  [4, n.Wa('BatchGetDocuments', e, r)]
                                );
                              case 1:
                                return (
                                  (r = t.sent()),
                                  (i = new Map()),
                                  r.forEach(function (t) {
                                    var e,
                                      t =
                                        ((e = n.serializer),
                                        'found' in (t = t)
                                          ? (function (t, e) {
                                              Vr(!!e.found),
                                                e.found.name,
                                                e.found.updateTime;
                                              var n = $o(t, e.found.name),
                                                t = Xo(e.found.updateTime),
                                                e = new nu({
                                                  mapValue: {
                                                    fields: e.found.fields
                                                  }
                                                });
                                              return new fu(n, t, e, {});
                                            })(e, t)
                                          : 'missing' in t
                                          ? (function (t, e) {
                                              Vr(!!e.missing), Vr(!!e.readTime);
                                              (t = $o(t, e.missing)),
                                                (e = Xo(e.readTime));
                                              return new lu(t, e);
                                            })(e, t)
                                          : Pr());
                                    i.set(t.key.toString(), t);
                                  }),
                                  (o = []),
                                  [
                                    2,
                                    (u.forEach(function (t) {
                                      t = i.get(t.toString());
                                      Vr(!!t), o.push(t);
                                    }),
                                    o)
                                  ]
                                );
                            }
                          });
                        });
                      })(this.eu, r)
                    ];
                  case 1:
                    return [
                      2,
                      ((e = t.sent()).forEach(function (t) {
                        t instanceof lu || t instanceof fu ? n.Gf(t) : Pr();
                      }),
                      e)
                    ];
                }
              });
            });
          }),
          (Dp.prototype.set = function (t, e) {
            this.write(e.Pf(t, this.cn(t))), this.Kf.add(t.toString());
          }),
          (Dp.prototype.update = function (t, e) {
            try {
              this.write(e.Pf(t, this.zf(t)));
            } catch (t) {
              this.Qf = t;
            }
            this.Kf.add(t.toString());
          }),
          (Dp.prototype.delete = function (t) {
            this.write([new tu(t, this.cn(t))]), this.Kf.add(t.toString());
          }),
          (Dp.prototype.commit = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.jf(), this.Qf)) throw this.Qf;
                    return (
                      (e = this.qf),
                      this.mutations.forEach(function (t) {
                        e.delete(t.key.toString());
                      }),
                      e.forEach(function (t, e) {
                        e = pi.at(e);
                        n.mutations.push(new eu(e, n.cn(e)));
                      }),
                      [
                        4,
                        (function (i, o) {
                          return y(this, void 0, void 0, function () {
                            var e, n, r;
                            return v(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (n = es((e = i).serializer) + '/documents'),
                                    (r = {
                                      writes: o.map(function (t) {
                                        return is(e.serializer, t);
                                      })
                                    }),
                                    [4, e.Ka('Commit', n, r)]
                                  );
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        })(this.eu, this.mutations)
                      ]
                    );
                  case 1:
                    return t.sent(), (this.Uf = !0), [2];
                }
              });
            });
          }),
          (Dp.prototype.Gf = function (t) {
            var e;
            if (t instanceof fu) e = t.version;
            else {
              if (!(t instanceof lu)) throw Pr();
              e = ci.min();
            }
            var n = this.qf.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new Nr(
                  Ir.ABORTED,
                  'Document version changed between two reads.'
                );
            } else this.qf.set(t.key.toString(), e);
          }),
          (Dp.prototype.cn = function (t) {
            var e = this.qf.get(t.toString());
            return !this.Kf.has(t.toString()) && e ? Ps.updateTime(e) : Ps.an();
          }),
          (Dp.prototype.zf = function (t) {
            var e = this.qf.get(t.toString());
            if (this.Kf.has(t.toString()) || !e) return Ps.exists(!0);
            if (e.isEqual(ci.min()))
              throw new Nr(
                Ir.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist."
              );
            return Ps.updateTime(e);
          }),
          (Dp.prototype.write = function (t) {
            this.jf(), (this.mutations = this.mutations.concat(t));
          }),
          (Dp.prototype.jf = function () {}),
          Dp),
        Np =
          ((Rp.prototype.run = function () {
            this.Jf();
          }),
          (Rp.prototype.Jf = function () {
            var t = this;
            this.Ci.Us(function () {
              return y(t, void 0, void 0, function () {
                var e,
                  n,
                  r = this;
                return v(this, function (t) {
                  return (
                    (e = new Ip(this.eu)),
                    (n = this.Yf(e)) &&
                      n
                        .then(function (t) {
                          r.Ei.yi(function () {
                            return e
                              .commit()
                              .then(function () {
                                r.Ii.resolve(t);
                              })
                              .catch(function (t) {
                                r.Xf(t);
                              });
                          });
                        })
                        .catch(function (t) {
                          r.Xf(t);
                        }),
                    [2]
                  );
                });
              });
            });
          }),
          (Rp.prototype.Yf = function (t) {
            try {
              var e = this.updateFunction(t);
              return !Ai(e) && e.catch && e.then
                ? e
                : (this.Ii.reject(
                    Error('Transaction callback must return a Promise')
                  ),
                  null);
            } catch (t) {
              return this.Ii.reject(t), null;
            }
          }),
          (Rp.prototype.Xf = function (t) {
            var e = this;
            0 < this.Hf && this.Zf(t)
              ? (--this.Hf,
                this.Ei.yi(function () {
                  return e.Jf(), Promise.resolve();
                }))
              : this.Ii.reject(t);
          }),
          (Rp.prototype.Zf = function (t) {
            if ('FirebaseError' !== t.name) return !1;
            t = t.code;
            return 'aborted' === t || 'failed-precondition' === t || !Vi(t);
          }),
          Rp),
        Lp =
          ((Op.prototype.getConfiguration = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.N.promise];
                  case 1:
                    return [
                      2,
                      (t.sent(),
                      {
                        Ei: this.Ei,
                        n_: this.n_,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        I_: this.user,
                        ol: 100
                      })
                    ];
                }
              });
            });
          }),
          (Op.prototype.ed = function (t) {
            var e = this;
            (this.td = t),
              this.N.promise.then(function () {
                return e.td(e.user);
              });
          }),
          (Op.prototype.nd = function () {
            if (this.Ei.Ni)
              throw new Nr(
                Ir.FAILED_PRECONDITION,
                'The client has already been terminated.'
              );
          }),
          (Op.prototype.terminate = function () {
            var t = this;
            this.Ei.Mi();
            var n = new Aa();
            return (
              this.Ei.Fi(function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 5, , 6]),
                          this.sd ? [4, this.sd.terminate()] : [3, 2]
                        );
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return this.rd ? [4, this.rd.terminate()] : [3, 4];
                      case 3:
                        t.sent(), (t.label = 4);
                      case 4:
                        return this.credentials.D(), n.resolve(), [3, 6];
                      case 5:
                        return (
                          (e = t.sent()),
                          (e = Ca(e, 'Failed to shutdown persistence')),
                          n.reject(e),
                          [3, 6]
                        );
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              n.promise
            );
          }),
          Op);
      function Op(t, e, n) {
        var r = this;
        (this.credentials = t),
          (this.Ei = e),
          (this.n_ = n),
          (this.user = Zr.UNAUTHENTICATED),
          (this.clientId = xr.t()),
          (this.td = function () {}),
          (this.N = new Aa()),
          this.credentials.S(function (t) {
            Dr('FirestoreClient', 'Received user=', t.uid),
              r.user.isEqual(t) || ((r.user = t), r.td(t)),
              r.N.resolve();
          });
      }
      function Rp(t, e, n, r) {
        (this.Ei = t),
          (this.eu = e),
          (this.updateFunction = n),
          (this.Ii = r),
          (this.Hf = 5),
          (this.Ci = new Ia(this.Ei, 'transaction_retry'));
      }
      function Dp(t) {
        (this.eu = t),
          (this.qf = new Map()),
          (this.mutations = []),
          (this.Uf = !1),
          (this.Qf = null),
          (this.Kf = new Set());
      }
      function Sp(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.rd
                  ? [3, 2]
                  : (Dr(
                      'FirestoreClient',
                      'Using default OfflineComponentProvider'
                    ),
                    [
                      4,
                      (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e,
                            n = this;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  r.Ei.qi(),
                                  Dr(
                                    'FirestoreClient',
                                    'Initializing OfflineComponentProvider'
                                  ),
                                  [4, r.getConfiguration()]
                                );
                              case 1:
                                return (e = t.sent()), [4, i.initialize(e)];
                              case 2:
                                return (
                                  t.sent(),
                                  r.ed(function (e) {
                                    return r.Ei.Li(function () {
                                      return y(n, void 0, void 0, function () {
                                        return v(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return [4, oc(i.Zc, e)];
                                            case 1:
                                              return t.sent(), [2];
                                          }
                                        });
                                      });
                                    });
                                  }),
                                  i.persistence.cc(function () {
                                    return r.terminate();
                                  }),
                                  (r.rd = i),
                                  [2]
                                );
                            }
                          });
                        });
                      })(e, new zh())
                    ]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.rd];
            }
          });
        });
      }
      function kp(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.sd
                  ? [3, 2]
                  : (Dr(
                      'FirestoreClient',
                      'Using default OnlineComponentProvider'
                    ),
                    [
                      4,
                      (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return r.Ei.qi(), [4, Sp(r)];
                              case 1:
                                return (
                                  (e = t.sent()),
                                  Dr(
                                    'FirestoreClient',
                                    'Initializing OnlineComponentProvider'
                                  ),
                                  [4, r.getConfiguration()]
                                );
                              case 2:
                                return (n = t.sent()), [4, i.initialize(e, n)];
                              case 3:
                                return (
                                  t.sent(),
                                  r.ed(function (t) {
                                    return r.Ei.Li(function () {
                                      return (function (r, i) {
                                        return y(
                                          this,
                                          void 0,
                                          void 0,
                                          function () {
                                            var e, n;
                                            return v(this, function (t) {
                                              switch (t.label) {
                                                case 0:
                                                  return (
                                                    (e = r).Ei.qi(),
                                                    Dr(
                                                      'RemoteStore',
                                                      'RemoteStore received new credentials'
                                                    ),
                                                    (n = Vc(e)),
                                                    e.ru.add(3),
                                                    [4, Oc(e)]
                                                  );
                                                case 1:
                                                  return (
                                                    t.sent(),
                                                    n && e.uu.set('Unknown'),
                                                    [4, e.nu.V_(i)]
                                                  );
                                                case 2:
                                                  return (
                                                    t.sent(),
                                                    e.ru.delete(3),
                                                    [4, Lc(e)]
                                                  );
                                                case 3:
                                                  return t.sent(), [2];
                                              }
                                            });
                                          }
                                        );
                                      })(i.sl, t);
                                    });
                                  }),
                                  (r.sd = i),
                                  [2]
                                );
                            }
                          });
                        });
                      })(e, new Hh())
                    ]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.sd];
            }
          });
        });
      }
      function Cp(t) {
        return Sp(t).then(function (t) {
          return t.persistence;
        });
      }
      function Pp(t) {
        return Sp(t).then(function (t) {
          return t.Zc;
        });
      }
      function Vp(t) {
        return kp(t).then(function (t) {
          return t.sl;
        });
      }
      function xp(t) {
        return kp(t).then(function (t) {
          return t.ju;
        });
      }
      function Up(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, kp(r)];
              case 1:
                return (
                  (e = t.sent()),
                  [
                    2,
                    (((n = e.il).Iu = dh.bind(null, e.ju)),
                    (n.Pu = function (i, o) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (n = (e = i).al.get(o)),
                                1 < (r = e.ul.get(n.targetId)).length
                                  ? [
                                      2,
                                      (e.ul.set(
                                        n.targetId,
                                        r.filter(function (t) {
                                          return !Lu(t, o);
                                        })
                                      ),
                                      void e.al.delete(o))
                                    ]
                                  : e.ml
                                  ? (e.rl.Th(n.targetId),
                                    e.rl.hh(n.targetId)
                                      ? [3, 2]
                                      : [
                                          4,
                                          fc(e.Zc, n.targetId, !1)
                                            .then(function () {
                                              e.rl.Ih(n.targetId),
                                                Dc(e.sl, n.targetId),
                                                Eh(e, n.targetId);
                                            })
                                            .catch(pc)
                                        ])
                                  : [3, 3]
                              );
                            case 1:
                              t.sent(), (t.label = 2);
                            case 2:
                              return [3, 5];
                            case 3:
                              return (
                                Eh(e, n.targetId), [4, fc(e.Zc, n.targetId, !0)]
                              );
                            case 4:
                              t.sent(), (t.label = 5);
                            case 5:
                              return [2];
                          }
                        });
                      });
                    }.bind(null, e.ju)),
                    n)
                  ]
                );
            }
          });
        });
      }
      function Mp(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new Aa();
        return (
          n.Ei.yi(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (n, r, i, o, s) {
                        var t = new Kh({
                            next: function (t) {
                              r.yi(function () {
                                return Yc(n, u);
                              });
                              var e = t.docs.has(i);
                              !e && t.fromCache
                                ? s.reject(
                                    new Nr(
                                      Ir.UNAVAILABLE,
                                      'Failed to get document because the client is offline.'
                                    )
                                  )
                                : e && t.fromCache && o && 'server' === o.source
                                ? s.reject(
                                    new Nr(
                                      Ir.UNAVAILABLE,
                                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                    )
                                  )
                                : s.resolve(t);
                            },
                            error: function (t) {
                              return s.reject(t);
                            }
                          }),
                          u = new Qc(mu(i.path), t, {
                            includeMetadataChanges: !0,
                            Su: !0
                          });
                        return Wc(n, u);
                      }),
                      [4, Up(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), n.Ei, r, i, o])];
                }
              });
            });
          }),
          o.promise
        );
      }
      function jp(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new Aa();
        return (
          n.Ei.yi(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (e, n, t, r, i) {
                        var o = new Kh({
                            next: function (t) {
                              n.yi(function () {
                                return Yc(e, s);
                              }),
                                t.fromCache && 'server' === r.source
                                  ? i.reject(
                                      new Nr(
                                        Ir.UNAVAILABLE,
                                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                      )
                                    )
                                  : i.resolve(t);
                            },
                            error: function (t) {
                              return i.reject(t);
                            }
                          }),
                          s = new Qc(t, o, {
                            includeMetadataChanges: !0,
                            Su: !0
                          });
                        return Wc(e, s);
                      }),
                      [4, Up(n)]
                    );
                  case 1:
                    return [2, e.apply(void 0, [t.sent(), n.Ei, r, i, o])];
                }
              });
            });
          }),
          o.promise
        );
      }
      var qp =
        ((Fp.prototype.set = function (t, e, n) {
          this.ld();
          (t = Bp(t, this.uf)),
            (e = Pd(t.ff, e, n)),
            (n = lp(this.hd, 'WriteBatch.set', t.lf, e, null !== t.ff, n));
          return (this.ad = this.ad.concat(n.Pf(t.lf, Ps.an()))), this;
        }),
        (Fp.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          this.ld();
          t = Bp(t, this.uf);
          return (
            e instanceof Gr && (e = e._),
            (e =
              'string' == typeof e || e instanceof $f
                ? dp(this.hd, 'WriteBatch.update', t.lf, e, n, r)
                : pp(this.hd, 'WriteBatch.update', t.lf, e)),
            (this.ad = this.ad.concat(e.Pf(t.lf, Ps.exists(!0)))),
            this
          );
        }),
        (Fp.prototype.delete = function (t) {
          this.ld();
          t = Bp(t, this.uf);
          return (this.ad = this.ad.concat(new tu(t.lf, Ps.an()))), this;
        }),
        (Fp.prototype.commit = function () {
          return (
            this.ld(),
            (this.ud = !0),
            0 < this.ad.length ? this.od(this.ad) : Promise.resolve()
          );
        }),
        (Fp.prototype.ld = function () {
          if (this.ud)
            throw new Nr(
              Ir.FAILED_PRECONDITION,
              'A write batch can no longer be used after commit() has been called.'
            );
        }),
        Fp);
      function Fp(t, e) {
        (this.uf = t),
          (this.od = e),
          (this.ad = []),
          (this.ud = !1),
          (this.hd = ep(t));
      }
      function Bp(t, e) {
        if ((t instanceof Gr && (t = t._), t.firestore !== e))
          throw new Nr(
            Ir.INVALID_ARGUMENT,
            'Provided document reference is from a different Firestore instance.'
          );
        return t;
      }
      var Gp,
        zp,
        Hp =
          ((Jp.prototype.get = function (t) {
            var e = this,
              n = Bp(t, this.uf),
              r = new Zl(this.uf);
            return this._d.Wf([n.lf]).then(function (t) {
              if (!t || 1 !== t.length) return Pr();
              t = t[0];
              if (t instanceof lu) return new Mf(e.uf, r, n.lf, null, n.ff);
              if (t instanceof fu) return new Mf(e.uf, r, t.key, t, n.ff);
              throw Pr();
            });
          }),
          (Jp.prototype.set = function (t, e, n) {
            (t = Bp(t, this.uf)),
              (e = Pd(t.ff, e, n)),
              (n = lp(this.hd, 'Transaction.set', t.lf, e, null !== t.ff, n));
            return this._d.set(t.lf, n), this;
          }),
          (Jp.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            t = Bp(t, this.uf);
            return (
              e instanceof Gr && (e = e._),
              (e =
                'string' == typeof e || e instanceof $f
                  ? dp(this.hd, 'Transaction.update', t.lf, e, n, r)
                  : pp(this.hd, 'Transaction.update', t.lf, e)),
              this._d.update(t.lf, e),
              this
            );
          }),
          (Jp.prototype.delete = function (t) {
            t = Bp(t, this.uf);
            return this._d.delete(t.lf), this;
          }),
          f(Zp, (zp = Jp)),
          (Zp.prototype.get = function (t) {
            var e = this,
              n = Bp(t, this.uf),
              r = new dl(this.uf);
            return zp.prototype.get.call(this, t).then(function (t) {
              return new ol(e.uf, r, n.lf, t._f, new wd(!1, !1), n.ff);
            });
          }),
          Zp),
        Kp =
          'You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.',
        Wp =
          ((Qp.prototype.enableIndexedDbPersistence = function (t, e) {
            throw new Nr(Ir.FAILED_PRECONDITION, Kp);
          }),
          (Qp.prototype.enableMultiTabIndexedDbPersistence = function (t) {
            throw new Nr(Ir.FAILED_PRECONDITION, Kp);
          }),
          (Qp.prototype.clearIndexedDbPersistence = function (t) {
            throw new Nr(Ir.FAILED_PRECONDITION, Kp);
          }),
          Qp),
        Yp =
          (f(Xp, (Gp = Gr)),
          Object.defineProperty(Xp.prototype, 'q_', {
            get: function () {
              return this._.q_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Xp.prototype.settings = function (t) {
            t.merge &&
              delete (t = Object.assign(Object.assign({}, this._.z_()), t))
                .merge,
              this._.G_(t);
          }),
          (Xp.prototype.useEmulator = function (t, e) {
            'firestore.googleapis.com' !== this._.z_().host &&
              kr(
                'Host has been set in both settings() and useEmulator(), emulator host will be used'
              ),
              this.settings({ host: t + ':' + e, ssl: !1, merge: !0 });
          }),
          (Xp.prototype.enableNetwork = function () {
            return (function (r) {
              var t = this;
              return r.Ei.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, Cp(r)];
                      case 1:
                        return (e = t.sent()), [4, Vp(r)];
                      case 2:
                        return (
                          (n = t.sent()),
                          [2, (e.ac(!0), (t = n).ru.delete(0), Lc(t))]
                        );
                    }
                  });
                });
              });
            })($p(vf(this._, tl)));
          }),
          (Xp.prototype.disableNetwork = function () {
            return (function (r) {
              var t = this;
              return r.Ei.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, Cp(r)];
                      case 1:
                        return (e = t.sent()), [4, Vp(r)];
                      case 2:
                        return (
                          (n = t.sent()),
                          [
                            2,
                            (e.ac(!1),
                            (function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = n).ru.add(0), [4, Oc(e)];
                                    case 1:
                                      return t.sent(), e.uu.set('Offline'), [2];
                                  }
                                });
                              });
                            })(n))
                          ]
                        );
                    }
                  });
                });
              });
            })($p(vf(this._, tl)));
          }),
          (Xp.prototype.enablePersistence = function (t) {
            var e = !1,
              n = !1;
            return (
              t &&
                lf(
                  'synchronizeTabs',
                  (e = !!t.synchronizeTabs),
                  'experimentalForceOwningTab',
                  (n = !!t.experimentalForceOwningTab)
                ),
              e
                ? this.fd.enableMultiTabIndexedDbPersistence(this)
                : this.fd.enableIndexedDbPersistence(this, n)
            );
          }),
          (Xp.prototype.clearPersistence = function () {
            return this.fd.clearIndexedDbPersistence(this);
          }),
          (Xp.prototype.terminate = function () {
            return (
              this.app._removeServiceInstance('firestore'),
              this.app._removeServiceInstance('firestore-exp'),
              this._._delete()
            );
          }),
          (Xp.prototype.waitForPendingWrites = function () {
            return (function (n) {
              var t = this,
                r = new Aa();
              return (
                n.Ei.yi(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (e = mh), [4, xp(n)];
                        case 1:
                          return [2, e.apply(void 0, [t.sent(), r])];
                      }
                    });
                  });
                }),
                r.promise
              );
            })($p(vf(this._, tl)));
          }),
          (Xp.prototype.onSnapshotsInSync = function (t) {
            return (
              (e = this._),
              (t = t),
              (function (n, t) {
                var e = this,
                  r = new Kh(t);
                return (
                  n.Ei.yi(function () {
                    return y(e, void 0, void 0, function () {
                      var e;
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              (e = function (t, e) {
                                t.mu.add(e), e.next();
                              }),
                              [4, Up(n)]
                            );
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), r])];
                        }
                      });
                    });
                  }),
                  function () {
                    r.b_(),
                      n.Ei.yi(function () {
                        return y(e, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (t, e) {
                                    t.mu.delete(e);
                                  }),
                                  [4, Up(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r])];
                            }
                          });
                        });
                      });
                  }
                );
              })($p(vf(e, tl)), ll(t) ? t : { next: t })
            );
            var e;
          }),
          Object.defineProperty(Xp.prototype, 'app', {
            get: function () {
              if (!this.dd)
                throw new Nr(
                  Ir.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.dd;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Xp.prototype.collection = function (t) {
            try {
              return new Id(this, Yl(this._, t));
            } catch (t) {
              throw hd(t, 'collection()', 'Firestore.collection()');
            }
          }),
          (Xp.prototype.doc = function (t) {
            try {
              return new sd(this, Xl(this._, t));
            } catch (t) {
              throw hd(t, 'doc()', 'Firestore.doc()');
            }
          }),
          (Xp.prototype.collectionGroup = function (t) {
            try {
              return new _d(
                this,
                (function (t, e) {
                  if (
                    ((t = vf(t, xf)),
                    hf('collectionGroup', 'collection id', e),
                    0 <= e.indexOf('/'))
                  )
                    throw new Nr(
                      Ir.INVALID_ARGUMENT,
                      "Invalid collection ID '" +
                        e +
                        "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                    );
                  return new El(t, null, ((e = e), new du(hi.st(), e)));
                })(this._, t)
              );
            } catch (t) {
              throw hd(t, 'collectionGroup()', 'Firestore.collectionGroup()');
            }
          }),
          (Xp.prototype.runTransaction = function (e) {
            var n,
              r = this;
            return (function (n, r) {
              var t = this,
                i = new Aa();
              return (
                n.Ei.yi(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            kp(n).then(function (t) {
                              return t.eu;
                            })
                          ];
                        case 1:
                          return (
                            (e = t.sent()), new Np(n.Ei, e, r, i).run(), [2]
                          );
                      }
                    });
                  });
                }),
                i.promise
              );
            })($p((n = this._)), function (t) {
              return (t = new Hp(n, t)), e(new id(r, t));
            });
          }),
          (Xp.prototype.batch = function () {
            var e = this;
            return (
              $p(this._),
              new od(
                new qp(this._, function (t) {
                  return ml(e._, t);
                })
              )
            );
          }),
          (Xp.prototype.loadBundle = function (t) {
            throw new Nr(
              Ir.FAILED_PRECONDITION,
              '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          (Xp.prototype.namedQuery = function (t) {
            throw new Nr(
              Ir.FAILED_PRECONDITION,
              '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          Xp);
      function Xp(t, e, n) {
        var r = this;
        return (
          ((r = Gp.call(this, e) || this).fd = n),
          (r.INTERNAL = {
            delete: function () {
              return r.terminate();
            }
          }),
          t instanceof Qr || (r.dd = t),
          r
        );
      }
      function Qp() {}
      function Zp(t, e) {
        var n = this;
        return ((n = zp.call(this, t, e) || this).uf = t), n;
      }
      function Jp(t, e) {
        (this.uf = t), (this._d = e), (this.hd = ep(t));
      }
      function $p(t) {
        return t.Ef || td(t), t.Ef.nd(), t.Ef;
      }
      function td(t) {
        var e,
          n,
          r = t.H_(),
          r =
            ((e = t.q_),
            (n = t.M_),
            new Xr(
              e,
              n,
              r.host,
              r.ssl,
              r.experimentalForceLongPolling,
              r.experimentalAutoDetectLongPolling
            ));
        t.Ef = new Lp(t.U_, t.wf, r);
      }
      var ed,
        nd,
        rd,
        id =
          (f(cd, (rd = Gr)),
          (cd.prototype.get = function (t) {
            var e = this,
              t = Cd(t);
            return this._.get(t).then(function (t) {
              return new bd(e.uf, t);
            });
          }),
          (cd.prototype.set = function (t, e, n) {
            t = Cd(t);
            return (
              n
                ? (ff('Transaction.set', n), this._.set(t, e, n))
                : this._.set(t, e),
              this
            );
          }),
          (cd.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = Cd(t);
            return (
              2 === arguments.length
                ? this._.update(o, e)
                : (t = this._).update.apply(t, l([o, e, n], r)),
              this
            );
          }),
          (cd.prototype.delete = function (t) {
            t = Cd(t);
            return this._.delete(t), this;
          }),
          cd),
        od =
          (f(ad, (nd = Gr)),
          (ad.prototype.set = function (t, e, n) {
            t = Cd(t);
            return (
              n
                ? (ff('WriteBatch.set', n), this._.set(t, e, n))
                : this._.set(t, e),
              this
            );
          }),
          (ad.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = Cd(t);
            return (
              2 === arguments.length
                ? this._.update(o, e)
                : (t = this._).update.apply(t, l([o, e, n], r)),
              this
            );
          }),
          (ad.prototype.delete = function (t) {
            t = Cd(t);
            return this._.delete(t), this;
          }),
          (ad.prototype.commit = function () {
            return this._.commit();
          }),
          ad),
        sd =
          (f(ud, (ed = Gr)),
          (ud.wd = function (t, e, n) {
            if (t.length % 2 != 0)
              throw new Nr(
                Ir.INVALID_ARGUMENT,
                'Invalid document reference. Document references must have an even number of segments, but ' +
                  t.et() +
                  ' has ' +
                  t.length
              );
            return new ud(e, new bl(e._, n, new pi(t)));
          }),
          (ud.af = function (t, e, n) {
            return new ud(e, new bl(e._, n, t));
          }),
          Object.defineProperty(ud.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ud.prototype, 'parent', {
            get: function () {
              return new Id(this.firestore, this._.parent);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ud.prototype, 'path', {
            get: function () {
              return this._.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ud.prototype.collection = function (t) {
            try {
              return new Id(this.firestore, Yl(this._, t));
            } catch (t) {
              throw hd(t, 'collection()', 'DocumentReference.collection()');
            }
          }),
          (ud.prototype.isEqual = function (t) {
            return (
              t instanceof Gr && (t = t._), t instanceof bl && $l(this._, t)
            );
          }),
          (ud.prototype.set = function (t, e) {
            e = ff('DocumentReference.set', e);
            try {
              return (function (t, e, n) {
                t = vf(t, bl);
                var r = vf(t.firestore, tl),
                  e = Pd(t.ff, e, n);
                return ml(
                  r,
                  lp(ep(r), 'setDoc', t.lf, e, null !== t.ff, n).Pf(
                    t.lf,
                    Ps.an()
                  )
                );
              })(this._, t, e);
            } catch (t) {
              throw hd(t, 'setDoc()', 'DocumentReference.set()');
            }
          }),
          (ud.prototype.update = function (t, e) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            try {
              return 1 === arguments.length
                ? vl(this._, t)
                : vl.apply(void 0, l([this._, t, e], n));
            } catch (t) {
              throw hd(t, 'updateDoc()', 'DocumentReference.update()');
            }
          }),
          (ud.prototype.delete = function () {
            return ml(vf((t = this._).firestore, tl), [new tu(t.lf, Ps.an())]);
            var t;
          }),
          (ud.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = fd(t),
              i = ld(t, function (t) {
                return new bd(
                  e.firestore,
                  new ol(e.firestore._, e.hf, t.lf, t._f, t.metadata, e._.ff)
                );
              });
            return gl(this._, r, i);
          }),
          (ud.prototype.get = function (t) {
            var e = this;
            return ('cache' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = vf(e, bl);
                  var n = vf(e.firestore, tl),
                    t = $p(n),
                    r = new dl(n);
                  return (function (n, r) {
                    var t = this,
                      i = new Aa();
                    return (
                      n.Ei.yi(function () {
                        return y(t, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (i, o, s) {
                                    return y(this, void 0, void 0, function () {
                                      var r;
                                      return v(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [
                                                4,
                                                ((e = o),
                                                (n = i).persistence.runTransaction(
                                                  'read document',
                                                  'readonly',
                                                  function (t) {
                                                    return n.sa.hs(t, e);
                                                  }
                                                ))
                                              ]
                                            );
                                          case 1:
                                            return (
                                              (r = t.sent()) instanceof fu
                                                ? s.resolve(r)
                                                : r instanceof lu
                                                ? s.resolve(null)
                                                : s.reject(
                                                    new Nr(
                                                      Ir.UNAVAILABLE,
                                                      "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                    )
                                                  ),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (r = t.sent()),
                                              (r = Ca(
                                                r,
                                                "Failed to get document '" +
                                                  o +
                                                  ' from cache'
                                              )),
                                              s.reject(r),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                        var e, n;
                                      });
                                    });
                                  }),
                                  [4, Pp(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r, i])];
                            }
                          });
                        });
                      }),
                      i.promise
                    );
                  })(t, e.lf).then(function (t) {
                    return new ol(
                      n,
                      r,
                      e.lf,
                      t,
                      new wd(t instanceof fu && t.ln, !0),
                      e.ff
                    );
                  });
                }
              : 'server' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = vf(e, bl);
                  var n = vf(e.firestore, tl);
                  return Mp($p(n), e.lf, { source: 'server' }).then(function (
                    t
                  ) {
                    return wl(n, e, t);
                  });
                }
              : function (e) {
                  e = vf(e, bl);
                  var n = vf(e.firestore, tl);
                  return Mp($p(n), e.lf).then(function (t) {
                    return wl(n, e, t);
                  });
                })(this._).then(function (t) {
              return new bd(
                e.firestore,
                new ol(e.firestore._, e.hf, t.lf, t._f, t.metadata, e._.ff)
              );
            });
          }),
          (ud.prototype.withConverter = function (t) {
            return new ud(this.firestore, this._.withConverter(t));
          }),
          ud);
      function ud(t, e) {
        var n = this;
        return (
          ((n = ed.call(this, e) || this).firestore = t), (n.hf = new Uf(t)), n
        );
      }
      function ad() {
        return (null !== nd && nd.apply(this, arguments)) || this;
      }
      function cd(t, e) {
        var n = this;
        return ((n = rd.call(this, e) || this).uf = t), n;
      }
      function hd(t, e, n) {
        return (t.message = t.message.replace(e, n)), t;
      }
      function fd(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var r = n[e];
          if ('object' == typeof r && !ll(r)) return r;
        }
        return {};
      }
      function ld(t, e) {
        var n;
        return {
          next: function (t) {
            n.next && n.next(e(t));
          },
          error:
            null ===
              (t = (n = ll(t[0])
                ? t[0]
                : ll(t[1])
                ? t[1]
                : 'function' == typeof t[0]
                ? { next: t[0], error: t[1], complete: t[2] }
                : { next: t[1], error: t[2], complete: t[3] }).error) ||
            void 0 === t
              ? void 0
              : t.bind(n),
          complete:
            null === (t = n.complete) || void 0 === t ? void 0 : t.bind(n)
        };
      }
      var pd,
        dd,
        yd,
        vd,
        gd,
        md,
        wd =
          ((kd.prototype.isEqual = function (t) {
            return (
              this.hasPendingWrites === t.hasPendingWrites &&
              this.fromCache === t.fromCache
            );
          }),
          kd),
        bd =
          (f(Sd, (md = Gr)),
          Object.defineProperty(Sd.prototype, 'ref', {
            get: function () {
              return new sd(this.uf, this._.ref);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Sd.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Sd.prototype, 'metadata', {
            get: function () {
              return this._.metadata;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Sd.prototype, 'exists', {
            get: function () {
              return this._.exists();
            },
            enumerable: !1,
            configurable: !0
          }),
          (Sd.prototype.data = function (t) {
            return this._.data(t);
          }),
          (Sd.prototype.get = function (t, e) {
            return this._.get(t, e);
          }),
          (Sd.prototype.isEqual = function (t) {
            return fl(this._, t._);
          }),
          Sd),
        Ed =
          (f(Dd, (gd = bd)),
          (Dd.prototype.data = function (t) {
            return this._.data(t);
          }),
          Dd),
        _d =
          (f(Rd, (vd = Gr)),
          (Rd.prototype.where = function (t, e, n) {
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  ((r = n), (i = e), (o = Zf('where', t)), new Dl(o, i, r))
                )
              );
            } catch (t) {
              throw hd(t, /(orderBy|where)\(\)/, 'Query.$1()');
            }
            var r, i, o;
          }),
          (Rd.prototype.orderBy = function (n, t) {
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  (function (t) {
                    void 0 === t && (t = 'asc');
                    var e = t,
                      t = Zf('orderBy', n);
                    return new Sl(t, e);
                  })(t)
                )
              );
            } catch (n) {
              throw hd(n, /(orderBy|where)\(\)/, 'Query.$1()');
            }
          }),
          (Rd.prototype.limit = function (t) {
            try {
              return new Rd(
                this.firestore,
                Al(this._, (gf('limit', (e = t)), new kl('limit', e, 'F')))
              );
            } catch (t) {
              throw hd(t, 'limit()', 'Query.limit()');
            }
            var e;
          }),
          (Rd.prototype.limitToLast = function (t) {
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  (gf('limitToLast', (e = t)), new kl('limitToLast', e, 'L'))
                )
              );
            } catch (t) {
              throw hd(t, 'limitToLast()', 'Query.limitToLast()');
            }
            var e;
          }),
          (Rd.prototype.startAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Cl('startAt', t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw hd(t, 'startAt()', 'Query.startAt()');
            }
          }),
          (Rd.prototype.startAfter = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Cl('startAfter', t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw hd(t, 'startAfter()', 'Query.startAfter()');
            }
          }),
          (Rd.prototype.endBefore = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Pl('endBefore', t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw hd(t, 'endBefore()', 'Query.endBefore()');
            }
          }),
          (Rd.prototype.endAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new Rd(
                this.firestore,
                Al(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new Pl('endAt', t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw hd(t, 'endAt()', 'Query.endAt()');
            }
          }),
          (Rd.prototype.isEqual = function (t) {
            return tp(this._, t._);
          }),
          (Rd.prototype.get = function (t) {
            var e = this;
            return ('cache' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = vf(e, El);
                  var n = vf(e.firestore, tl),
                    t = $p(n),
                    r = new dl(n);
                  return (function (n, r) {
                    var t = this,
                      i = new Aa();
                    return (
                      n.Ei.yi(function () {
                        return y(t, void 0, void 0, function () {
                          var e;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = function (r, i, o) {
                                    return y(this, void 0, void 0, function () {
                                      var e, n;
                                      return v(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return (
                                              t.trys.push([0, 2, , 3]),
                                              [4, lc(r, i, !0)]
                                            );
                                          case 1:
                                            return (
                                              (n = t.sent()),
                                              (e = new rh(i, n.la)),
                                              (n = e.Gh(n.documents)),
                                              (n = e.es(n, !1)),
                                              o.resolve(n.snapshot),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (n = t.sent()),
                                              (n = Ca(
                                                n,
                                                "Failed to execute query '" +
                                                  i +
                                                  ' against cache'
                                              )),
                                              o.reject(n),
                                              [3, 3]
                                            );
                                          case 3:
                                            return [2];
                                        }
                                      });
                                    });
                                  }),
                                  [4, Pp(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r, i])];
                            }
                          });
                        });
                      }),
                      i.promise
                    );
                  })(t, e.Rf).then(function (t) {
                    return new ul(n, r, e, t);
                  });
                }
              : 'server' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = vf(e, El);
                  var n = vf(e.firestore, tl),
                    t = $p(n),
                    r = new dl(n);
                  return jp(t, e.Rf, { source: 'server' }).then(function (t) {
                    return new ul(n, r, e, t);
                  });
                }
              : function (e) {
                  e = vf(e, El);
                  var n = vf(e.firestore, tl),
                    t = $p(n),
                    r = new dl(n);
                  return (
                    zl(e.Rf),
                    jp(t, e.Rf).then(function (t) {
                      return new ul(n, r, e, t);
                    })
                  );
                })(this._).then(function (t) {
              return new Ad(
                e.firestore,
                new ul(e.firestore._, e.hf, e._, t.mf)
              );
            });
          }),
          (Rd.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = fd(t),
              i = ld(t, function (t) {
                return new Ad(
                  e.firestore,
                  new ul(e.firestore._, e.hf, e._, t.mf)
                );
              });
            return gl(this._, r, i);
          }),
          (Rd.prototype.withConverter = function (t) {
            return new Rd(this.firestore, this._.withConverter(t));
          }),
          Rd),
        Td =
          (f(Od, (yd = Gr)),
          Object.defineProperty(Od.prototype, 'type', {
            get: function () {
              return this._.type;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Od.prototype, 'doc', {
            get: function () {
              return new Ed(this.uf, this._.doc);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Od.prototype, 'oldIndex', {
            get: function () {
              return this._.oldIndex;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Od.prototype, 'newIndex', {
            get: function () {
              return this._.newIndex;
            },
            enumerable: !1,
            configurable: !0
          }),
          Od),
        Ad =
          (f(Ld, (dd = Gr)),
          Object.defineProperty(Ld.prototype, 'query', {
            get: function () {
              return new _d(this.uf, this._.query);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ld.prototype, 'metadata', {
            get: function () {
              return this._.metadata;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ld.prototype, 'size', {
            get: function () {
              return this._.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ld.prototype, 'empty', {
            get: function () {
              return this._.empty;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ld.prototype, 'docs', {
            get: function () {
              var e = this;
              return this._.docs.map(function (t) {
                return new Ed(e.uf, t);
              });
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ld.prototype.docChanges = function (t) {
            var e = this;
            return this._.docChanges(t).map(function (t) {
              return new Td(e.uf, t);
            });
          }),
          (Ld.prototype.forEach = function (e, n) {
            var r = this;
            this._.forEach(function (t) {
              e.call(n, new Ed(r.uf, t));
            });
          }),
          (Ld.prototype.isEqual = function (t) {
            return fl(this._, t._);
          }),
          Ld),
        Id =
          (f(Nd, (pd = _d)),
          Object.defineProperty(Nd.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Nd.prototype, 'path', {
            get: function () {
              return this._.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Nd.prototype, 'parent', {
            get: function () {
              var t = this._.parent;
              return t ? new sd(this.firestore, t) : null;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Nd.prototype.doc = function (t) {
            try {
              return new sd(
                this.firestore,
                void 0 === t ? Xl(this._) : Xl(this._, t)
              );
            } catch (t) {
              throw hd(t, 'doc()', 'CollectionReference.doc()');
            }
          }),
          (Nd.prototype.add = function (t) {
            var e,
              n,
              r,
              i = this;
            return (
              (e = this._),
              (n = t),
              (t = vf(e.firestore, tl)),
              (r = Xl(e)),
              (n = Pd(e.ff, n)),
              ml(
                t,
                lp(ep(e.firestore), 'addDoc', r.lf, n, null !== e.ff, {}).Pf(
                  r.lf,
                  Ps.exists(!1)
                )
              )
                .then(function () {
                  return r;
                })
                .then(function (t) {
                  return new sd(i.firestore, t);
                })
            );
          }),
          (Nd.prototype.isEqual = function (t) {
            return $l(this._, t._);
          }),
          (Nd.prototype.withConverter = function (t) {
            return new Nd(this.firestore, this._.withConverter(t));
          }),
          Nd);
      function Nd(t, e) {
        var n = this;
        return ((n = pd.call(this, t, e) || this).firestore = t), (n._ = e), n;
      }
      function Ld(t, e) {
        var n = this;
        return ((n = dd.call(this, e) || this).uf = t), n;
      }
      function Od(t, e) {
        var n = this;
        return ((n = yd.call(this, e) || this).uf = t), n;
      }
      function Rd(t, e) {
        var n = this;
        return (
          ((n = vd.call(this, e) || this).firestore = t), (n.hf = new Uf(t)), n
        );
      }
      function Dd() {
        return (null !== gd && gd.apply(this, arguments)) || this;
      }
      function Sd(t, e) {
        var n = this;
        return ((n = md.call(this, e) || this).uf = t), n;
      }
      function kd(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      function Cd(t) {
        return t instanceof Gr && (t = t._), vf(t, bl);
      }
      function Pd(t, e, n) {
        return t
          ? n && (n.merge || n.mergeFields)
            ? t.toFirestore(e, n)
            : t.toFirestore(e)
          : e;
      }
      var Vd,
        xd,
        _e =
          (f(qd, (xd = Gr)),
          (qd.documentId = function () {
            return new qd(li.ot().et());
          }),
          (qd.prototype.isEqual = function (t) {
            return (
              t instanceof Gr && (t = t._),
              t instanceof $f && this._.df.isEqual(t.df)
            );
          }),
          qd),
        o =
          (f(jd, (Vd = Gr)),
          (jd.serverTimestamp = function () {
            var t = new Rf('serverTimestamp');
            return (t._methodName = 'FieldValue.serverTimestamp'), new jd(t);
          }),
          (jd.delete = function () {
            var t = new bf('deleteField');
            return (t._methodName = 'FieldValue.delete'), new jd(t);
          }),
          (jd.arrayUnion = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new Df('arrayUnion', t);
            }.apply(void 0, t);
            return (n._methodName = 'FieldValue.arrayUnion'), new jd(n);
          }),
          (jd.arrayRemove = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new Sf('arrayRemove', t);
            }.apply(void 0, t);
            return (n._methodName = 'FieldValue.arrayRemove'), new jd(n);
          }),
          (jd.increment = function (t) {
            t = new kf('increment', t);
            return (t._methodName = 'FieldValue.increment'), new jd(t);
          }),
          (jd.prototype.isEqual = function (t) {
            return this._.isEqual(t._);
          }),
          jd),
        Ud =
          ((Md.prototype.onProgress = function (t, e, n) {
            this.Ed = { next: t, error: e, complete: n };
          }),
          (Md.prototype.catch = function (t) {
            return this.Td.promise.catch(t);
          }),
          (Md.prototype.then = function (t, e) {
            return this.Td.promise.then(t, e);
          }),
          (Md.prototype.Rl = function (t) {
            this.Pl(t),
              this.Ed.complete && this.Ed.complete(),
              this.Td.resolve(t);
          }),
          (Md.prototype.yl = function (t) {
            (this.md.taskState = 'Error'),
              this.Ed.next && this.Ed.next(this.md),
              this.Ed.error && this.Ed.error(t),
              this.Td.reject(t);
          }),
          (Md.prototype.Pl = function (t) {
            (this.md = t), this.Ed.next && this.Ed.next(t);
          }),
          Md);
      function Md() {
        (this.Ed = {}),
          (this.Td = new Aa()),
          (this.md = {
            taskState: 'Running',
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
          });
      }
      function jd() {
        return (null !== Vd && Vd.apply(this, arguments)) || this;
      }
      function qd() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return xd.call(this, new ($f.bind.apply($f, l([void 0], t)))()) || this;
      }
      var Fd =
        ((Bd.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        (Bd.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        (Bd.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        Bd);
      function Bd(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var Gd,
        zd,
        Hd = {
          Firestore: Yp,
          GeoPoint: Cf,
          Timestamp: ai,
          Blob: Yr,
          Transaction: id,
          WriteBatch: od,
          DocumentReference: sd,
          DocumentSnapshot: bd,
          Query: _d,
          QueryDocumentSnapshot: Ed,
          QuerySnapshot: Ad,
          CollectionReference: Id,
          FieldPath: _e,
          FieldValue: o,
          setLogLevel: function (t) {
            Lr.setLogLevel(t);
          },
          CACHE_SIZE_UNLIMITED: -1
        };
      (Gd = e.default).INTERNAL.registerComponent(
        new Fd(
          'firestore',
          function (t) {
            var e = t.getProvider('app').getImmediate();
            return (
              (e = e),
              (t = t.getProvider('auth-internal')),
              new Yp(e, new tl(e, t), new Wp())
            );
          },
          'PUBLIC'
        ).setServiceProps(Object.assign({}, Hd))
      ),
        Gd.registerVersion('@firebase/firestore', '2.0.4'),
        ((zd = Yp).prototype.loadBundle = function (t) {
          return (
            (e = this),
            (o = t),
            (t = new Ud()),
            (function (n, t, r) {
              var e = this,
                i = (function (t, e) {
                  t = 'string' == typeof t ? new TextEncoder().encode(t) : t;
                  return new Ya(Ha(t), e);
                })(o, Ka(t));
              n.Ei.yi(function () {
                return y(e, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = Lh), [4, xp(n)];
                      case 1:
                        return e.apply(void 0, [t.sent(), i, r]), [2];
                    }
                  });
                });
              });
            })($p(e._), e.q_, t),
            t
          );
          var e, o;
        }),
        (zd.prototype.namedQuery = function (t) {
          return (
            (t = t),
            (function (n, r) {
              var t = this;
              return n.Ei.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (e = function (t, e) {
                            var n = t;
                            return n.persistence.runTransaction(
                              'Get named query',
                              'readonly',
                              function (t) {
                                return n.tc.wo(t, e);
                              }
                            );
                          }),
                          [4, Pp(n)]
                        );
                      case 1:
                        return [2, e.apply(void 0, [t.sent(), r])];
                    }
                  });
                });
              });
            })($p((e = this)._), t).then(function (t) {
              return t ? new _d(e, new El(e._, null, t.query)) : null;
            })
          );
          var e;
        });
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        'Cannot instantiate firebase-firestore.memory.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-firestore.memory.js.map
