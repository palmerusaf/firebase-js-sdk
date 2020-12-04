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
})(this, function (_g) {
  'use strict';
  try {
    (function () {
      function t(t) {
        return t && 'object' == typeof t && 'default' in t ? t : { default: t };
      }
      var l,
        e = t(_g);
      function s() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      ((Ie = l = l || {})[(Ie.DEBUG = 0)] = 'DEBUG'),
        (Ie[(Ie.VERBOSE = 1)] = 'VERBOSE'),
        (Ie[(Ie.INFO = 2)] = 'INFO'),
        (Ie[(Ie.WARN = 3)] = 'WARN'),
        (Ie[(Ie.ERROR = 4)] = 'ERROR'),
        (Ie[(Ie.SILENT = 5)] = 'SILENT');
      function n(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = u[e];
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
          debug: l.DEBUG,
          verbose: l.VERBOSE,
          info: l.INFO,
          warn: l.WARN,
          error: l.ERROR,
          silent: l.SILENT
        },
        i = l.INFO,
        u =
          (((Te = {})[l.DEBUG] = 'log'),
          (Te[l.VERBOSE] = 'log'),
          (Te[l.INFO] = 'info'),
          (Te[l.WARN] = 'warn'),
          (Te[l.ERROR] = 'error'),
          Te),
        o =
          (Object.defineProperty(a.prototype, 'logLevel', {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in l))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (a.prototype.setLogLevel = function (t) {
            this._logLevel = 'string' == typeof t ? r[t] : t;
          }),
          Object.defineProperty(a.prototype, 'logHandler', {
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
          Object.defineProperty(a.prototype, 'userLogHandler', {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (a.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.DEBUG], t)),
              this._logHandler.apply(this, s([this, l.DEBUG], t));
          }),
          (a.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.VERBOSE], t)),
              this._logHandler.apply(this, s([this, l.VERBOSE], t));
          }),
          (a.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.INFO], t)),
              this._logHandler.apply(this, s([this, l.INFO], t));
          }),
          (a.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.WARN], t)),
              this._logHandler.apply(this, s([this, l.WARN], t));
          }),
          (a.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, l.ERROR], t)),
              this._logHandler.apply(this, s([this, l.ERROR], t));
          }),
          a);
      function a(t) {
        (this.name = t),
          (this._logLevel = i),
          (this._logHandler = n),
          (this._userLogHandler = null);
      }
      var c = function (t, e) {
        return (c =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function h(t, e) {
        function n() {
          this.constructor = t;
        }
        c(t, e),
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
      function f() {
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
        m = (h(w, (d = Error)), w);
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
                t.replace(I, function (t, e) {
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
      var I = /\{\$([^}]+)}/g,
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
      function _(t) {
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
      var A,
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
        x = {},
        S = N || self;
      function D() {}
      function O(t) {
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
      function k(t) {
        var e = typeof t;
        return ('object' == e && null != t) || 'function' == e;
      }
      var L = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
        P = 0;
      function R(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function C(e, n, t) {
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
      function V(t, e, n) {
        return (V =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code')
            ? R
            : C).apply(null, arguments);
      }
      function M(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      function U() {
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
            (Object.prototype.hasOwnProperty.call(t, L) && t[L]) ||
              (t[L] = ++P));
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
      function z() {
        return Array.prototype.concat.apply([], arguments);
      }
      function G(t) {
        var e = t.length;
        if (0 < e) {
          for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
          return n;
        }
        return [];
      }
      function K(t) {
        return /^[\s\xa0]*$/.test(t);
      }
      var H,
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
        var Z = S.navigator;
        if (Z) {
          Z = Z.userAgent;
          if (Z) {
            H = Z;
            break t;
          }
        }
        H = '';
      }
      function Q(t, e, n) {
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
      et[' '] = D;
      var nt,
        rt = Y(H, 'Opera'),
        it = Y(H, 'Trident') || Y(H, 'MSIE'),
        ot = Y(H, 'Edge'),
        st = ot || it,
        ut =
          Y(H, 'Gecko') &&
          !(Y(H.toLowerCase(), 'webkit') && !Y(H, 'Edge')) &&
          !(Y(H, 'Trident') || Y(H, 'MSIE')) &&
          !Y(H, 'Edge'),
        at = Y(H.toLowerCase(), 'webkit') && !Y(H, 'Edge');
      function ct() {
        var t = S.document;
        return t ? t.documentMode : void 0;
      }
      t: {
        var ht = '',
          ft =
            ((ft = H),
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
      var dt = S.document && it ? ct() || parseInt(nt, 10) || void 0 : void 0,
        yt = !it || 9 <= Number(dt),
        vt = it && !pt('9'),
        gt = (function () {
          if (!S.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, 'passive', {
              get: function () {
                t = !0;
              }
            });
          try {
            S.addEventListener('test', D, e),
              S.removeEventListener('test', D, e);
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
        It = 0;
      function Tt(t, e, n, r, i) {
        (this.listener = t),
          (this.proxy = null),
          (this.src = e),
          (this.type = n),
          (this.capture = !!r),
          (this.ca = i),
          (this.key = ++It),
          (this.Y = this.Z = !1);
      }
      function _t(t) {
        (t.Y = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.ca = null);
      }
      function At(t) {
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
          i && (_t(e), 0 == t.a[o].length && (delete t.a[o], t.b--)));
      }
      function xt(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r)
            return i;
        }
        return -1;
      }
      At.prototype.add = function (t, e, n, r, i) {
        var o = t.toString();
        (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
        var s = xt(t, e, r, i);
        return (
          -1 < s
            ? ((e = t[s]), n || (e.Z = !1))
            : (((e = new Tt(e, this.src, o, !!r, i)).Z = n), t.push(e)),
          e
        );
      };
      var St = 'closure_lm_' + ((1e6 * Math.random()) | 0),
        Dt = {};
      function Ot(t, e, n, r, i) {
        if (r && r.once)
          return (function t(e, n, r, i, o) {
            if (Array.isArray(n)) {
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              return null;
            }
            r = Ut(r);
            return e && e[Et]
              ? e.wa(n, r, k(i) ? !!i.capture : !!i, o)
              : kt(e, n, r, !0, i, o);
          })(t, e, n, r, i);
        if (Array.isArray(e)) {
          for (var o = 0; o < e.length; o++) Ot(t, e[o], n, r, i);
          return null;
        }
        return (
          (n = Ut(n)),
          t && t[Et]
            ? t.va(e, n, k(r) ? !!r.capture : !!r, i)
            : kt(t, e, n, !1, r, i)
        );
      }
      function kt(t, e, n, r, i, o) {
        if (!e) throw Error('Invalid event type');
        var s = k(i) ? !!i.capture : !!i;
        if (s && !yt) return null;
        var u,
          a,
          c = Vt(t);
        if ((c || (t[St] = c = new At(t)), (n = c.add(e, n, r, s, o)).proxy))
          return n;
        if (
          ((u = Ct),
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
        else if (t.attachEvent) t.attachEvent(Pt(e.toString()), r);
        else {
          if (!t.addListener || !t.removeListener)
            throw Error('addEventListener and attachEvent are unavailable.');
          t.addListener(r);
        }
        return n;
      }
      function Lt(t) {
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
                ? e.detachEvent(Pt(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
              (n = Vt(e))
                ? (Nt(n, t), 0 == n.b && ((n.src = null), (e[St] = null)))
                : _t(t)));
      }
      function Pt(t) {
        return t in Dt ? Dt[t] : (Dt[t] = 'on' + t);
      }
      function Rt(t, e) {
        var n = t.listener,
          r = t.ca || t.src;
        return t.Z && Lt(t), n.call(r, e);
      }
      function Ct(t, e) {
        if (t.Y) return !0;
        if (yt) return Rt(t, new wt(e, this));
        if (!e)
          t: {
            e = ['window', 'event'];
            for (var n = S, r = 0; r < e.length; r++)
              if (null == (n = n[e[r]])) {
                e = null;
                break t;
              }
            e = n;
          }
        return Rt(t, (e = new wt(e, this)));
      }
      function Vt(t) {
        return (t = t[St]) instanceof At ? t : null;
      }
      var Mt = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
      function Ut(e) {
        return 'function' == typeof e
          ? e
          : (e[Mt] ||
              (e[Mt] = function (t) {
                return e.handleEvent(t);
              }),
            e[Mt]);
      }
      function jt() {
        q.call(this), (this.c = new At(this)), ((this.J = this).C = null);
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
        ((A = jt.prototype).addEventListener = function (t, e, n, r) {
          Ot(this, t, e, n, r);
        }),
        (A.removeEventListener = function (t, e, n, r) {
          !(function t(e, n, r, i, o) {
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
            else
              (i = k(i) ? !!i.capture : !!i),
                (r = Ut(r)),
                e && e[Et]
                  ? ((e = e.c),
                    (n = String(n).toString()) in e.a &&
                      -1 < (r = xt((s = e.a[n]), r, i, o)) &&
                      (_t(s[r]),
                      Array.prototype.splice.call(s, r, 1),
                      0 == s.length && (delete e.a[n], e.b--)))
                  : (e = e && Vt(e)) &&
                    ((n = e.a[n.toString()]),
                    (e = -1),
                    n && (e = xt(n, r, i, o)),
                    (r = -1 < e ? n[e] : null) && Lt(r));
          })(this, t, e, n, r);
        }),
        (A.G = function () {
          if ((jt.X.G.call(this), this.c)) {
            var t,
              e = this.c;
            for (t in e.a) {
              for (var n = e.a[t], r = 0; r < n.length; r++) _t(n[r]);
              delete e.a[t], e.b--;
            }
          }
          this.C = null;
        }),
        (A.va = function (t, e, n, r) {
          return this.c.add(String(t), e, !1, n, r);
        }),
        (A.wa = function (t, e, n, r) {
          return this.c.add(String(t), e, !0, n, r);
        });
      var Bt = S.JSON.stringify;
      function zt() {
        this.b = this.a = null;
      }
      var Gt,
        Kt =
          ((Ht.prototype.get = function () {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          }),
          new Ht(
            function () {
              return new Wt();
            },
            function (t) {
              t.reset();
            }
          ));
      function Ht(t, e) {
        (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
      }
      function Wt() {
        this.next = this.b = this.a = null;
      }
      function Yt(t, e) {
        var n;
        Gt ||
          ((n = S.Promise.resolve(void 0)),
          (Gt = function () {
            n.then(Qt);
          })),
          Xt || (Gt(), (Xt = !0)),
          Zt.add(t, e);
      }
      (zt.prototype.add = function (t, e) {
        var n = Kt.get();
        n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
      }),
        (Wt.prototype.set = function (t, e) {
          (this.a = t), (this.b = e), (this.next = null);
        });
      var Xt = !(Wt.prototype.reset = function () {
          this.next = this.b = this.a = null;
        }),
        Zt = new zt();
      function Qt() {
        for (
          var t, e;
          (n = e = void 0),
            (n = null),
            (e = Zt).a &&
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
              S.setTimeout(function () {
                throw t;
              }, 0);
            })(t);
          }
          var n = Kt;
          n.f(t), n.b < 100 && (n.b++, (t.next = n.a), (n.a = t));
        }
        Xt = !1;
      }
      function Jt(t, e) {
        jt.call(this),
          (this.b = t || 1),
          (this.a = e || S),
          (this.f = V(this.Za, this)),
          (this.g = U());
      }
      function $t(t) {
        (t.aa = !1), t.M && (t.a.clearTimeout(t.M), (t.M = null));
      }
      function te(t, e, n) {
        if ('function' == typeof t) n && (t = V(t, n));
        else {
          if (!t || 'function' != typeof t.handleEvent)
            throw Error('Invalid listener argument');
          t = V(t.handleEvent, t);
        }
        return 2147483647 < Number(e) ? -1 : S.setTimeout(t, e || 0);
      }
      j(Jt, jt),
        ((A = Jt.prototype).aa = !1),
        (A.M = null),
        (A.Za = function () {
          var t;
          this.aa &&
            (0 < (t = U() - this.g) && t < 0.8 * this.b
              ? (this.M = this.a.setTimeout(this.f, this.b - t))
              : (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
                qt(this, 'tick'),
                this.aa && ($t(this), this.start())));
        }),
        (A.start = function () {
          (this.aa = !0),
            this.M ||
              ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = U()));
        }),
        (A.G = function () {
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
                (S.clearTimeout(this.a),
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
          var o = Ot(e, n[i], r || t.handleEvent, !1, t.b || t);
          if (!o) break;
          t.a[o.key] = o;
        }
      }
      function he(t) {
        Q(
          t.a,
          function (t, e) {
            this.a.hasOwnProperty(e) && Lt(t);
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
        return S.setTimeout(function () {
          t();
        }, e);
      }
      (pe.Fa = 'serverreachability'),
        j(ve, mt),
        (pe.STAT_EVENT = 'statevent'),
        j(me, mt),
        (pe.Ga = 'timingevent'),
        j(be, mt);
      var Ie = {
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
      function _e() {}
      function Ae(t) {
        var e;
        return (e = t.a) || (e = t.a = {}), e;
      }
      function Ne() {}
      _e.prototype.a = null;
      var xe,
        N = { OPEN: 'a', eb: 'b', Ea: 'c', qb: 'd' };
      function Se() {
        mt.call(this, 'd');
      }
      function De() {
        mt.call(this, 'c');
      }
      function Oe() {}
      function ke(t, e, n, r) {
        (this.g = t),
          (this.c = e),
          (this.f = n),
          (this.S = r || 1),
          (this.J = new ue(this)),
          (this.P = Le),
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
      j(Se, mt), j(De, mt), j(Oe, _e), (xe = new Oe());
      var Le = 45e3,
        Pe = {},
        Re = {};
      function Ce(t, e, n) {
        (t.H = 1), (t.i = nn(Ze(e))), (t.j = n), (t.I = !0), Ve(t, null);
      }
      function Ve(t, e) {
        (t.u = U()), Ue(t), (t.l = Ze(t.i));
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
          0 < t.O && (t.F = new ie(V(t.Ca, t, t.a), t.O)),
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
      function Me(t, e, n) {
        for (var r, i, o, s = !0; !t.A && t.D < n.length; ) {
          var u =
            ((u = n),
            (o = i = void 0),
            (i = (r = t).D),
            -1 == (o = u.indexOf('\n', i))
              ? Re
              : ((i = Number(u.substring(i, o))),
                isNaN(i)
                  ? Pe
                  : (o += 1) + i > u.length
                  ? Re
                  : ((u = u.substr(o, i)), (r.D = o + i), u)));
          if (u == Re) {
            4 == e && ((t.h = 4), we(14), (s = !1)),
              le(t.c, t.f, null, '[Incomplete Response]');
            break;
          }
          if (u == Pe) {
            (t.h = 4), we(15), le(t.c, t.f, n, '[Invalid Chunk]'), (s = !1);
            break;
          }
          le(t.c, t.f, u, null), ze(t, u);
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
      function Ue(t) {
        (t.T = U() + t.P), je(t, t.P);
      }
      function je(t, e) {
        if (null != t.o) throw Error('WatchDog timer not null');
        t.o = Ee(V(t.Va, t), e);
      }
      function qe(t) {
        t.o && (S.clearTimeout(t.o), (t.o = null));
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
      function ze(t, e) {
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
                      rr(u), Hn(u);
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
                      (u.m = Ee(V(u.Sa, u), 6e3));
                if (In(u.b) <= 1 && u.ea) {
                  try {
                    u.ea();
                  } catch (t) {}
                  u.ea = void 0;
                }
              } else sr(u, 11);
            } else if (((!t.C && u.a != t) || rr(u), !K(e)))
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
                              i.b && (_n(i, i.b), (i.b = null)))),
                          !n.A ||
                            ((s = o.a
                              ? o.a.getResponseHeader('X-HTTP-Session-Id')
                              : null) &&
                              ((n.na = s), en(n.B, n.A, s)))),
                        (u.v = 3),
                        u.f && u.f.ta(),
                        u.U &&
                          ((u.N = U() - t.u),
                          u.c.info('Handshake RTT: ' + u.N + 'ms')),
                        (i = t),
                        ((n = u).la = ar(n, n.C ? n.ga : null, n.fa)),
                        i.C
                          ? (An(n.b, i),
                            (o = i),
                            (s = n.D) && o.setTimeout(s),
                            o.o && (qe(o), Ue(o)),
                            (n.a = i))
                          : $n(n),
                        0 < u.g.length && Xn(u))
                      : ('stop' != c[0] && 'close' != c[0]) || sr(u, 7)
                    : 3 == u.v &&
                      ('stop' == c[0] || 'close' == c[0]
                        ? 'stop' == c[0]
                          ? sr(u, 7)
                          : Kn(u)
                        : 'noop' != c[0] && u.f && u.f.sa(c),
                      (u.o = 0));
              }
          ge(4);
        } catch (t) {}
      }
      function Ge(t, e) {
        if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
        else if (O(t) || 'string' == typeof t) B(t, e, void 0);
        else {
          if (t.L && 'function' == typeof t.L) var n = t.L();
          else if (t.K && 'function' == typeof t.K) n = void 0;
          else if (O(t) || 'string' == typeof t) {
            n = [];
            for (var r = t.length, i = 0; i < r; i++) n.push(i);
          } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
          i = (r = (function (t) {
            if (t.K && 'function' == typeof t.K) return t.K();
            if ('string' == typeof t) return t.split('');
            if (O(t)) {
              for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
              return e;
            }
            for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
            return e;
          })(t)).length;
          for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
        }
      }
      function Ke(t, e) {
        (this.b = {}), (this.a = []), (this.c = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error('Uneven number of arguments');
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (t)
          if (t instanceof Ke)
            for (n = t.L(), r = 0; r < n.length; r++)
              this.set(n[r], t.get(n[r]));
          else for (r in t) this.set(r, t[r]);
      }
      function He(t) {
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
      ((A = ke.prototype).setTimeout = function (t) {
        this.P = t;
      }),
        (A.Xa = function (t) {
          t = t.target;
          var e = this.F;
          e && 3 == Fn(t) ? e.f() : this.Ca(t);
        }),
        (A.Ca = function (t) {
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
                            !K(o)
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
                        ze(this, s);
                    }
                    this.I
                      ? (Me(this, e, n),
                        st &&
                          this.b &&
                          3 == e &&
                          (ce(this.J, this.R, 'tick', this.Wa), this.R.start()))
                      : (le(this.c, this.f, n, null), ze(this, n)),
                      4 == e && Be(this),
                      this.b &&
                        !this.A &&
                        (4 == e ? ir(this.g, this) : ((this.b = !1), Ue(this)));
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
        (A.Wa = function () {
          var t, e;
          this.a &&
            ((t = Fn(this.a)),
            (e = this.a.$()),
            this.D < e.length &&
              (qe(this), Me(this, t, e), this.b && 4 != t && Ue(this)));
        }),
        (A.cancel = function () {
          (this.A = !0), Be(this);
        }),
        (A.Va = function () {
          this.o = null;
          var t,
            e,
            n = U();
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
        ((A = Ke.prototype).K = function () {
          He(this);
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]]);
          return t;
        }),
        (A.L = function () {
          return He(this), this.a.concat();
        }),
        (A.get = function (t, e) {
          return We(this.b, t) ? this.b[t] : e;
        }),
        (A.set = function (t, e) {
          We(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
        }),
        (A.forEach = function (t, e) {
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
              Qe(this, t.f),
              (this.j = t.j),
              Je(this, t.c),
              $e(this, t.h),
              (this.g = t.g),
              (e = t.b),
              ((n = new ln()).c = e.c),
              e.a && ((n.a = new Ke(e.a)), (n.b = e.b)),
              tn(this, n),
              (this.i = t.i))
            : t && (n = String(t).match(Ye))
            ? ((this.a = !!e),
              Qe(this, n[1] || '', !0),
              (this.j = rn(n[2] || '')),
              Je(this, n[3] || '', !0),
              $e(this, n[4]),
              (this.g = rn(n[5] || '', !0)),
              tn(this, n[6] || '', !0),
              (this.i = rn(n[7] || '')))
            : ((this.a = !!e), (this.b = new ln(null, this.a)));
      }
      function Ze(t) {
        return new Xe(t);
      }
      function Qe(t, e, n) {
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
              Math.abs(Math.floor(2147483648 * Math.random()) ^ U()).toString(
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
          ((n.a = new Ke()),
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
              (delete t.b[e], t.c--, t.a.length > 2 * t.c && He(t)));
      }
      function yn(t, e) {
        return pn(t), (e = gn(t, e)), We(t.a.b, e);
      }
      function vn(t, e, n) {
        dn(t, e),
          0 < n.length &&
            ((t.c = null), t.a.set(gn(t, e), G(n)), (t.b += n.length));
      }
      function gn(t, e) {
        return (e = String(e)), t.f && (e = e.toLowerCase()), e;
      }
      ((A = ln.prototype).add = function (t, e) {
        pn(this), (this.c = null), (t = gn(this, t));
        var n = this.a.get(t);
        return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
      }),
        (A.forEach = function (n, r) {
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
        (A.L = function () {
          pn(this);
          for (
            var t = this.a.K(), e = this.a.L(), n = [], r = 0;
            r < e.length;
            r++
          )
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
          return n;
        }),
        (A.K = function (t) {
          pn(this);
          var e = [];
          if ('string' == typeof t)
            yn(this, t) && (e = z(e, this.a.get(gn(this, t))));
          else {
            t = this.a.K();
            for (var n = 0; n < t.length; n++) e = z(e, t[n]);
          }
          return e;
        }),
        (A.set = function (t, e) {
          return (
            pn(this),
            (this.c = null),
            yn(this, (t = gn(this, t))) && (this.b -= this.a.get(t).length),
            this.a.set(t, [e]),
            (this.b += 1),
            this
          );
        }),
        (A.get = function (t, e) {
          return t && 0 < (t = this.K(t)).length ? String(t[0]) : e;
        }),
        (A.toString = function () {
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
          (t = S.PerformanceNavigationTiming
            ? 0 < (t = S.performance.getEntriesByType('navigation')).length &&
              ('hq' == t[0].nextHopProtocol || 'h2' == t[0].nextHopProtocol)
            : !!(S.ia && S.ia.ya && S.ia.ya() && S.ia.ya().Lb)),
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
      function In(t) {
        return t.b ? 1 : t.a ? t.a.size : 0;
      }
      function Tn(t, e) {
        return t.b ? t.b == e : t.a && t.a.has(e);
      }
      function _n(t, e) {
        t.a ? t.a.add(e) : (t.b = e);
      }
      function An(t, e) {
        t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
      }
      function Nn(t) {
        var e, n;
        if (null != t.b) return t.c.concat(t.b.s);
        if (null == t.a || 0 === t.a.size) return G(t.c);
        var r = t.c;
        try {
          for (var i = _(t.a.values()), o = i.next(); !o.done; o = i.next())
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
      function xn() {}
      function Sn() {
        this.a = new xn();
      }
      function Dn(t, e, n, r, i) {
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
              var n = _(this.a.values()), r = n.next();
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
        (xn.prototype.stringify = function (t) {
          return S.JSON.stringify(t, void 0);
        }),
        (xn.prototype.parse = function (t) {
          return S.JSON.parse(t, void 0);
        });
      var On = S.JSON.parse;
      function kn(t) {
        jt.call(this),
          (this.headers = new Ke()),
          (this.H = t || null),
          (this.b = !1),
          (this.s = this.a = null),
          (this.B = ''),
          (this.h = 0),
          (this.f = ''),
          (this.g = this.A = this.l = this.u = !1),
          (this.o = 0),
          (this.m = null),
          (this.I = Ln),
          (this.D = this.F = !1);
      }
      j(kn, jt);
      var Ln = '',
        Pn = /^https?$/i,
        Rn = ['POST', 'PUT'];
      function Cn(t) {
        return 'content-type' == t.toLowerCase();
      }
      function Vn(t, e) {
        (t.b = !1),
          t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
          (t.f = e),
          (t.h = 5),
          Mn(t),
          jn(t);
      }
      function Mn(t) {
        t.u || ((t.u = !0), qt(t, 'complete'), qt(t, 'error'));
      }
      function Un(t) {
        if (t.b && void 0 !== x && (!t.s[1] || 4 != Fn(t) || 2 != t.W()))
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
                    S.self &&
                    S.self.location &&
                    (i = (r = S.self.location.protocol).substr(
                      0,
                      r.length - 1
                    )),
                  (n = !Pn.test(i ? i.toLowerCase() : ''))),
                (e = n));
              if (e) qt(t, 'complete'), qt(t, 'success');
              else {
                t.h = 6;
                try {
                  var u = 2 < Fn(t) ? t.a.statusText : '';
                } catch (o) {
                  u = '';
                }
                (t.f = u + ' [' + t.W() + ']'), Mn(t);
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
            r = t.s[0] ? D : null;
          (t.a = null), (t.s = null), e || qt(t, 'ready');
          try {
            n.onreadystatechange = r;
          } catch (t) {}
        }
      }
      function qn(t) {
        t.a && t.D && (t.a.ontimeout = null),
          t.m && (S.clearTimeout(t.m), (t.m = null));
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
          Q(n, function (t, e) {
            (i += e), (i += ':'), (i += t), (i += '\r\n');
          }),
          (n = i),
          'string' == typeof t
            ? null != n && encodeURIComponent(String(n))
            : en(t, e, n));
      }
      function zn(t, e, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[t]) || e
        );
      }
      function Gn(t) {
        (this.pa = 0),
          (this.g = []),
          (this.c = new fe()),
          (this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null),
          (this.Oa = this.R = 0),
          (this.La = zn('failFast', !1, t)),
          (this.H = this.m = this.j = this.h = this.f = null),
          (this.S = !0),
          (this.I = this.oa = this.P = -1),
          (this.T = this.o = this.u = 0),
          (this.Ha = zn('baseRetryDelayMs', 5e3, t)),
          (this.Ra = zn('retryDelaySeedMs', 1e4, t)),
          (this.Ma = zn('forwardChannelMaxRetries', 2, t)),
          (this.ma = zn('forwardChannelRequestTimeoutMs', 2e4, t)),
          (this.Na = (t && t.g) || void 0),
          (this.D = void 0),
          (this.C = (t && t.supportsCrossDomainXhr) || !1),
          (this.J = ''),
          (this.b = new wn(t && t.concurrentRequestLimit)),
          (this.ka = new Sn()),
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
      function Kn(t) {
        var e, n;
        Wn(t),
          3 == t.v &&
            ((e = t.R++),
            en((n = Ze(t.B)), 'SID', t.J),
            en(n, 'RID', e),
            en(n, 'TYPE', 'terminate'),
            Qn(t, n),
            ((e = new ke(t, t.c, e, void 0)).H = 2),
            (e.i = nn(Ze(n))),
            (n = !1),
            S.navigator &&
              S.navigator.sendBeacon &&
              (n = S.navigator.sendBeacon(e.i.toString(), '')),
            !n && S.Image && ((new Image().src = e.i), (n = !0)),
            n || ((e.a = cr(e.g, null)), e.a.ba(e.i)),
            (e.u = U()),
            Ue(e)),
          ur(t);
      }
      function Hn(t) {
        t.a && (er(t), t.a.cancel(), (t.a = null));
      }
      function Wn(t) {
        Hn(t),
          t.j && (S.clearTimeout(t.j), (t.j = null)),
          rr(t),
          t.b.cancel(),
          t.h && ('number' == typeof t.h && S.clearTimeout(t.h), (t.h = null));
      }
      function Yn(t, e) {
        t.g.push(new mn(t.Oa++, e)), 3 == t.v && Xn(t);
      }
      function Xn(t) {
        En(t.b) || t.h || ((t.h = !0), Yt(t.Ba, t), (t.u = 0));
      }
      function Zn(t, e) {
        var n = e ? e.f : t.R++,
          r = Ze(t.B);
        en(r, 'SID', t.J),
          en(r, 'RID', n),
          en(r, 'AID', t.P),
          Qn(t, r),
          t.i && t.l && Bn(r, t.i, t.l),
          (n = new ke(t, t.c, n, t.u + 1)),
          null === t.i && (n.B = t.l),
          e && (t.g = e.s.concat(t.g)),
          (e = Jn(t, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * t.ma) + Math.round(0.5 * t.ma * Math.random())
          ),
          _n(t.b, n),
          Ce(n, r, e);
      }
      function Qn(t, n) {
        t.f &&
          Ge({}, function (t, e) {
            en(n, e, t);
          });
      }
      function Jn(t, e, n) {
        n = Math.min(t.g.length, n);
        var r = t.f ? V(t.f.Ja, t.f, t) : null;
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
                    Ge(t, function (t, e) {
                      var n = t;
                      k(t) && (n = Bt(t)),
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
          (t.T++, (t.j = Ee(V(t.Aa, t), or(t, t.o))), t.o++, 1)
        );
      }
      function er(t) {
        null != t.s && (S.clearTimeout(t.s), (t.s = null));
      }
      function nr(t) {
        (t.a = new ke(t, t.c, 'rpc', t.T)),
          null === t.i && (t.a.B = t.l),
          (t.a.O = 0);
        var e = Ze(t.la);
        en(e, 'RID', 'rpc'),
          en(e, 'SID', t.J),
          en(e, 'CI', t.H ? '0' : '1'),
          en(e, 'AID', t.P),
          Qn(t, e),
          en(e, 'TYPE', 'xmlhttp'),
          t.i && t.l && Bn(e, t.i, t.l),
          t.D && t.a.setTimeout(t.D);
        var n = t.a;
        (t = t.ga),
          (n.H = 1),
          (n.i = nn(Ze(e))),
          (n.j = null),
          (n.I = !0),
          Ve(n, t);
      }
      function rr(t) {
        null != t.m && (S.clearTimeout(t.m), (t.m = null));
      }
      function ir(t, e) {
        var n,
          r = null;
        if (t.a == e) {
          rr(t), er(t), (t.a = null);
          var i = 2;
        } else {
          if (!Tn(t.b, e)) return;
          (r = e.s), An(t.b, e), (i = 1);
        }
        if (((t.I = e.N), 0 != t.v))
          if (e.b) {
            1 == i
              ? ((r = e.j ? e.j.length : 0),
                (e = U() - e.u),
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
                  if (!(In(t.b) >= t.b.f - (t.h ? 1 : 0))) {
                    if (t.h) return (t.g = e.s.concat(t.g)), 1;
                    if (!(1 == t.v || 2 == t.v || t.u >= (t.La ? 0 : t.Ma)))
                      return (t.h = Ee(V(t.Ba, t, e), or(t, t.u))), t.u++, 1;
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
              (o = V(t.Ya, t)),
              r ||
                ((r = new Xe('//www.google.com/images/cleardot.gif')),
                (S.location && 'http' == S.location.protocol) || Qe(r, 'https'),
                nn(r)),
              (n = r.toString()),
              (r = o),
              (o = new fe()),
              S.Image
                ? (((i = new Image()).onload = M(
                    Dn,
                    o,
                    i,
                    'TestLoadImage: loaded',
                    !0,
                    r
                  )),
                  (i.onerror = M(Dn, o, i, 'TestLoadImage: error', !1, r)),
                  (i.onabort = M(Dn, o, i, 'TestLoadImage: abort', !1, r)),
                  (i.ontimeout = M(Dn, o, i, 'TestLoadImage: timeout', !1, r)),
                  S.setTimeout(function () {
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
              ((t.b.c.length = 0), G(t.g), (t.g.length = 0)),
            t.f.qa());
      }
      function ar(t, e, n) {
        var r,
          i,
          o,
          s,
          u,
          a = (s = n) instanceof Xe ? Ze(s) : new Xe(s, void 0);
        return (
          '' != a.c
            ? (e && Je(a, e + '.' + a.c), $e(a, a.h))
            : ((u = S.location),
              (r = u.protocol),
              (i = e ? e + '.' + u.hostname : u.hostname),
              (o = +u.port),
              (s = n),
              (u = new Xe(null, void 0)),
              r && Qe(u, r),
              i && Je(u, i),
              o && $e(u, o),
              s && (u.g = s),
              (a = u)),
          t.V &&
            Q(t.V, function (t, e) {
              en(a, e, t);
            }),
          (e = t.A),
          (n = t.na),
          e && n && en(a, e, n),
          en(a, 'VER', t.ha),
          Qn(t, a),
          a
        );
      }
      function cr(t, e) {
        if (e && !t.C)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return ((e = new kn(t.Na)).F = t.C), e;
      }
      function hr() {}
      function fr() {
        if (it && !(10 <= Number(dt)))
          throw Error('Environmental error: no available transport.');
      }
      function lr(t, e) {
        jt.call(this),
          (this.a = new Gn(e)),
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
          (t = e && e.httpHeadersOverwriteParam) && !K(t) && (this.a.i = t),
          (this.m = (e && e.supportsCrossDomainXhr) || !1),
          (this.l = (e && e.sendRawJson) || !1),
          (e = e && e.httpSessionIdParam) &&
            !K(e) &&
            ((this.a.A = e),
            null !== (t = this.b) &&
              e in t &&
              e in (t = this.b) &&
              delete t[e]),
          (this.f = new yr(this));
      }
      function pr(t) {
        Se.call(this);
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
        De.call(this), (this.status = 1);
      }
      function yr(t) {
        this.a = t;
      }
      ((A = kn.prototype).ba = function (t, e, n, r) {
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
          (this.s = this.H ? Ae(this.H) : Ae(xe)),
          (this.a.onreadystatechange = V(this.za, this));
        try {
          (this.A = !0), this.a.open(e, String(t), !0), (this.A = !1);
        } catch (t) {
          return void Vn(this, t);
        }
        t = n || '';
        var i,
          o = new Ke(this.headers);
        r &&
          Ge(r, function (t, e) {
            o.set(e, t);
          }),
          (r = (function (t) {
            t: {
              for (
                var e = Cn,
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
          (n = S.FormData && t instanceof S.FormData),
          0 <= F(Rn, e) &&
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
                  (this.a.ontimeout = V(this.xa, this)))
                : (this.m = te(this.xa, this.o, this))),
            (this.l = !0),
            this.a.send(t),
            (this.l = !1);
        } catch (t) {
          Vn(this, t);
        }
      }),
        (A.xa = function () {
          void 0 !== x &&
            this.a &&
            ((this.f = 'Timed out after ' + this.o + 'ms, aborting'),
            (this.h = 8),
            qt(this, 'timeout'),
            this.abort(8));
        }),
        (A.abort = function (t) {
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
        (A.G = function () {
          this.a &&
            (this.b &&
              ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
            jn(this, !0)),
            kn.X.G.call(this);
        }),
        (A.za = function () {
          this.j || (this.A || this.l || this.g ? Un(this) : this.Ua());
        }),
        (A.Ua = function () {
          Un(this);
        }),
        (A.W = function () {
          try {
            return 2 < Fn(this) ? this.a.status : -1;
          } catch (t) {
            return -1;
          }
        }),
        (A.$ = function () {
          try {
            return this.a ? this.a.responseText : '';
          } catch (t) {
            return '';
          }
        }),
        (A.Pa = function (t) {
          if (this.a) {
            var e = this.a.responseText;
            return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), On(e);
          }
        }),
        (A.ua = function () {
          return this.h;
        }),
        (A.Qa = function () {
          return 'string' == typeof this.f ? this.f : String(this.f);
        }),
        ((A = Gn.prototype).ha = 8),
        (A.v = 1),
        (A.Ba = function (t) {
          if (this.h)
            if (((this.h = null), 1 == this.v)) {
              if (!t) {
                (this.R = Math.floor(1e5 * Math.random())), (t = this.R++);
                var e,
                  n = new ke(this, this.c, t, void 0),
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
                  en((i = Ze(this.B)), 'RID', t),
                  en(i, 'CVER', 22),
                  this.A && en(i, 'X-HTTP-Session-Id', this.A),
                  Qn(this, i),
                  this.i && r && Bn(i, this.i, r),
                  _n(this.b, n),
                  this.Ia && en(i, 'TYPE', 'init'),
                  this.da
                    ? (en(i, '$req', e),
                      en(i, 'SID', 'null'),
                      (n.U = !0),
                      Ce(n, i, null))
                    : Ce(n, i, e),
                  (this.v = 2);
              }
            } else
              3 == this.v &&
                (t
                  ? Zn(this, t)
                  : 0 == this.g.length || En(this.b) || Zn(this));
        }),
        (A.Aa = function () {
          var t;
          (this.j = null),
            nr(this),
            this.U &&
              !(this.F || null == this.a || this.N <= 0) &&
              ((t = 2 * this.N),
              this.c.info('BP detection timer enabled: ' + t),
              (this.s = Ee(V(this.Ta, this), t)));
        }),
        (A.Ta = function () {
          this.s &&
            ((this.s = null),
            this.c.info('BP detection timeout reached.'),
            this.c.info('Buffering proxy detected and switch to long-polling!'),
            (this.H = !1),
            (this.F = !0),
            we(10),
            Hn(this),
            nr(this));
        }),
        (A.Sa = function () {
          null != this.m && ((this.m = null), Hn(this), tr(this), we(19));
        }),
        (A.Ya = function (t) {
          t
            ? (this.c.info('Successfully pinged google.com'), we(2))
            : (this.c.info('Failed to ping google.com'), we(1));
        }),
        ((A = hr.prototype).ta = function () {}),
        (A.sa = function () {}),
        (A.ra = function () {}),
        (A.qa = function () {}),
        (A.Ja = function () {}),
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
          Kn(this.a);
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
            Kn(this.a),
            delete this.a,
            lr.X.G.call(this);
        }),
        j(pr, Se),
        j(dr, De),
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
        (Ie.NO_ERROR = 0),
        (Ie.TIMEOUT = 8),
        (Ie.HTTP_ERROR = 6),
        (Te.COMPLETE = 'complete'),
        ((Ne.EventType = N).OPEN = 'a'),
        (N.CLOSE = 'b'),
        (N.ERROR = 'c'),
        (N.MESSAGE = 'd'),
        (jt.prototype.listen = jt.prototype.va),
        (kn.prototype.listenOnce = kn.prototype.wa),
        (kn.prototype.getLastError = kn.prototype.Qa),
        (kn.prototype.getLastErrorCode = kn.prototype.ua),
        (kn.prototype.getStatus = kn.prototype.W),
        (kn.prototype.getResponseJson = kn.prototype.Pa),
        (kn.prototype.getResponseText = kn.prototype.$),
        (kn.prototype.send = kn.prototype.ba);
      var vr,
        gr = ye,
        mr = Ie,
        wr = Te,
        br = pe,
        Er = 10,
        Ir = 11,
        Tr = Ne,
        _r = kn,
        Ar = {
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
        Nr = (h(Sr, (vr = Error)), Sr),
        xr = new o('@firebase/firestore');
      function Sr(t, e) {
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
      function Dr() {
        return xr.logLevel;
      }
      function Or(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        xr.logLevel <= l.DEBUG &&
          ((e = n.map(Pr)),
          xr.debug.apply(xr, f(['Firestore (8.1.1): ' + t], e)));
      }
      function kr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        xr.logLevel <= l.ERROR &&
          ((e = n.map(Pr)),
          xr.error.apply(xr, f(['Firestore (8.1.1): ' + t], e)));
      }
      function Lr(t) {
        for (var e, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        xr.logLevel <= l.WARN &&
          ((e = n.map(Pr)),
          xr.warn.apply(xr, f(['Firestore (8.1.1): ' + t], e)));
      }
      function Pr(e) {
        if ('string' == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function Rr(t) {
        void 0 === t && (t = 'Unexpected state');
        t = 'FIRESTORE (8.1.1) INTERNAL ASSERTION FAILED: ' + t;
        throw (kr(t), new Error(t));
      }
      function Cr(t) {
        t || Rr();
      }
      var Vr =
        ((Mr.t = function () {
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
        Mr);
      function Mr() {}
      function Ur(t, e) {
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
      function qr(t) {
        return t + '\0';
      }
      var Fr =
        ((Br.fromBase64String = function (t) {
          return new Br(atob(t));
        }),
        (Br.fromUint8Array = function (t) {
          return new Br(
            (function (t) {
              for (var e = '', n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(t)
          );
        }),
        (Br.prototype.toBase64 = function () {
          return (t = this.i), btoa(t);
          var t;
        }),
        (Br.prototype.toUint8Array = function () {
          return (function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.i);
        }),
        (Br.prototype.o = function () {
          return 2 * this.i.length;
        }),
        (Br.prototype.u = function (t) {
          return Ur(this.i, t.i);
        }),
        (Br.prototype.isEqual = function (t) {
          return this.i === t.i;
        }),
        Br);
      function Br(t) {
        this.i = t;
      }
      Fr.h = new Fr('');
      var zr =
          ((Kr.fromBase64String = function (t) {
            try {
              return new Kr(Fr.fromBase64String(t));
            } catch (t) {
              throw new Nr(
                Ar.INVALID_ARGUMENT,
                'Failed to construct data from Base64 string: ' + t
              );
            }
          }),
          (Kr.fromUint8Array = function (t) {
            return new Kr(Fr.fromUint8Array(t));
          }),
          (Kr.prototype.toBase64 = function () {
            return this.l.toBase64();
          }),
          (Kr.prototype.toUint8Array = function () {
            return this.l.toUint8Array();
          }),
          (Kr.prototype.toString = function () {
            return 'Bytes(base64: ' + this.toBase64() + ')';
          }),
          (Kr.prototype.isEqual = function (t) {
            return this.l.isEqual(t.l);
          }),
          Kr),
        Gr = function (t) {
          this._ = t;
        };
      function Kr(t) {
        this.l = t;
      }
      function Hr() {
        if ('undefined' == typeof Uint8Array)
          throw new Nr(
            Ar.UNIMPLEMENTED,
            'Uint8Arrays are not available in this environment.'
          );
      }
      function Wr() {
        if ('undefined' == typeof atob)
          throw new Nr(
            Ar.UNIMPLEMENTED,
            'Blobs are unavailable in Firestore in this environment.'
          );
      }
      var Yr,
        Xr =
          (h(ei, (Yr = Gr)),
          (ei.fromBase64String = function (t) {
            return Wr(), new ei(zr.fromBase64String(t));
          }),
          (ei.fromUint8Array = function (t) {
            return Hr(), new ei(zr.fromUint8Array(t));
          }),
          (ei.prototype.toBase64 = function () {
            return Wr(), this._.toBase64();
          }),
          (ei.prototype.toUint8Array = function () {
            return Hr(), this._.toUint8Array();
          }),
          (ei.prototype.isEqual = function (t) {
            return this._.isEqual(t._);
          }),
          (ei.prototype.toString = function () {
            return 'Blob(base64: ' + this.toBase64() + ')';
          }),
          ei),
        Zr = function (t, e, n, r, i, o) {
          (this.T = t),
            (this.persistenceKey = e),
            (this.host = n),
            (this.ssl = r),
            (this.forceLongPolling = i),
            (this.m = o);
        },
        Qr =
          (Object.defineProperty(ti.prototype, 'I', {
            get: function () {
              return '(default)' === this.database;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ti.prototype.isEqual = function (t) {
            return (
              t instanceof ti &&
              t.projectId === this.projectId &&
              t.database === this.database
            );
          }),
          ti),
        Jr =
          (($r.prototype.A = function () {
            return null != this.uid;
          }),
          ($r.prototype.R = function () {
            return this.A() ? 'uid:' + this.uid : 'anonymous-user';
          }),
          ($r.prototype.isEqual = function (t) {
            return t.uid === this.uid;
          }),
          $r);
      function $r(t) {
        this.uid = t;
      }
      function ti(t, e) {
        (this.projectId = t), (this.database = e || '(default)');
      }
      function ei() {
        return (null !== Yr && Yr.apply(this, arguments)) || this;
      }
      (Jr.UNAUTHENTICATED = new Jr(null)),
        (Jr.P = new Jr('google-credentials-uid')),
        (Jr.g = new Jr('first-party-uid'));
      function ni(t, e) {
        (this.user = e),
          (this.type = 'OAuth'),
          (this.V = {}),
          (this.V.Authorization = 'Bearer ' + t);
      }
      var ri,
        ii,
        oi =
          ((_i.prototype.getToken = function () {
            return Promise.resolve(null);
          }),
          (_i.prototype.v = function () {}),
          (_i.prototype.S = function (t) {
            (this.p = t)(Jr.UNAUTHENTICATED);
          }),
          (_i.prototype.D = function () {
            this.p = null;
          }),
          _i),
        si =
          ((Ti.prototype.getToken = function () {
            var e = this,
              n = this.F,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth.getToken(t).then(function (t) {
                    return e.F !== n
                      ? (Or(
                          'FirebaseCredentialsProvider',
                          'getToken aborted due to token change.'
                        ),
                        e.getToken())
                      : t
                      ? (Cr('string' == typeof t.accessToken),
                        new ni(t.accessToken, e.currentUser))
                      : null;
                  })
                : Promise.resolve(null)
            );
          }),
          (Ti.prototype.v = function () {
            this.forceRefresh = !0;
          }),
          (Ti.prototype.S = function (t) {
            (this.p = t), this.N && t(this.currentUser);
          }),
          (Ti.prototype.D = function () {
            this.auth && this.auth.removeAuthTokenListener(this.C),
              (this.C = null),
              (this.p = null);
          }),
          (Ti.prototype.O = function () {
            var t = this.auth && this.auth.getUid();
            return Cr(null === t || 'string' == typeof t), new Jr(t);
          }),
          Ti),
        ui =
          (Object.defineProperty(Ii.prototype, 'V', {
            get: function () {
              var t = { 'X-Goog-AuthUser': this.M },
                e = this.k.auth.getAuthHeaderValueForFirstParty([]);
              return e && (t.Authorization = e), t;
            },
            enumerable: !1,
            configurable: !0
          }),
          Ii),
        ai =
          ((Ei.prototype.getToken = function () {
            return Promise.resolve(new ui(this.k, this.M));
          }),
          (Ei.prototype.S = function (t) {
            t(Jr.g);
          }),
          (Ei.prototype.D = function () {}),
          (Ei.prototype.v = function () {}),
          Ei),
        ci =
          ((bi.now = function () {
            return bi.fromMillis(Date.now());
          }),
          (bi.fromDate = function (t) {
            return bi.fromMillis(t.getTime());
          }),
          (bi.fromMillis = function (t) {
            var e = Math.floor(t / 1e3);
            return new bi(e, 1e6 * (t - 1e3 * e));
          }),
          (bi.prototype.toDate = function () {
            return new Date(this.toMillis());
          }),
          (bi.prototype.toMillis = function () {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }),
          (bi.prototype.L = function (t) {
            return this.seconds === t.seconds
              ? Ur(this.nanoseconds, t.nanoseconds)
              : Ur(this.seconds, t.seconds);
          }),
          (bi.prototype.isEqual = function (t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }),
          (bi.prototype.toString = function () {
            return (
              'Timestamp(seconds=' +
              this.seconds +
              ', nanoseconds=' +
              this.nanoseconds +
              ')'
            );
          }),
          (bi.prototype.toJSON = function () {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }),
          (bi.prototype.valueOf = function () {
            var t = this.seconds - -62135596800;
            return (
              String(t).padStart(12, '0') +
              '.' +
              String(this.nanoseconds).padStart(9, '0')
            );
          }),
          bi),
        hi =
          ((wi.$ = function (t) {
            return new wi(t);
          }),
          (wi.min = function () {
            return new wi(new ci(0, 0));
          }),
          (wi.prototype.u = function (t) {
            return this.timestamp.L(t.timestamp);
          }),
          (wi.prototype.isEqual = function (t) {
            return this.timestamp.isEqual(t.timestamp);
          }),
          (wi.prototype.B = function () {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }),
          (wi.prototype.toString = function () {
            return 'SnapshotVersion(' + this.timestamp.toString() + ')';
          }),
          (wi.prototype.q = function () {
            return this.timestamp;
          }),
          wi),
        Ie =
          (Object.defineProperty(mi.prototype, 'length', {
            get: function () {
              return this.U;
            },
            enumerable: !1,
            configurable: !0
          }),
          (mi.prototype.isEqual = function (t) {
            return 0 === mi.K(this, t);
          }),
          (mi.prototype.child = function (t) {
            var e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof mi
                ? t.forEach(function (t) {
                    e.push(t);
                  })
                : e.push(t),
              this.W(e)
            );
          }),
          (mi.prototype.limit = function () {
            return this.offset + this.length;
          }),
          (mi.prototype.j = function (t) {
            return (
              (t = void 0 === t ? 1 : t),
              this.W(this.segments, this.offset + t, this.length - t)
            );
          }),
          (mi.prototype.G = function () {
            return this.W(this.segments, this.offset, this.length - 1);
          }),
          (mi.prototype.H = function () {
            return this.segments[this.offset];
          }),
          (mi.prototype.J = function () {
            return this.get(this.length - 1);
          }),
          (mi.prototype.get = function (t) {
            return this.segments[this.offset + t];
          }),
          (mi.prototype.Y = function () {
            return 0 === this.length;
          }),
          (mi.prototype.X = function (t) {
            if (t.length < this.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (mi.prototype.Z = function (t) {
            if (this.length + 1 !== t.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (mi.prototype.forEach = function (t) {
            for (var e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }),
          (mi.prototype.tt = function () {
            return this.segments.slice(this.offset, this.limit());
          }),
          (mi.K = function (t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
              var i = t.get(r),
                o = e.get(r);
              if (i < o) return -1;
              if (o < i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }),
          mi),
        fi =
          (h(gi, (ii = Ie)),
          (gi.prototype.W = function (t, e, n) {
            return new gi(t, e, n);
          }),
          (gi.prototype.et = function () {
            return this.tt().join('/');
          }),
          (gi.prototype.toString = function () {
            return this.et();
          }),
          (gi.nt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            for (var n = [], r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              if (0 <= o.indexOf('//'))
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
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
            return new gi(n);
          }),
          (gi.st = function () {
            return new gi([]);
          }),
          gi),
        li = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        pi =
          (h(vi, (ri = Ie)),
          (vi.prototype.W = function (t, e, n) {
            return new vi(t, e, n);
          }),
          (vi.it = function (t) {
            return li.test(t);
          }),
          (vi.prototype.et = function () {
            return this.tt()
              .map(function (t) {
                return (
                  (t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
                  vi.it(t) || (t = '`' + t + '`'),
                  t
                );
              })
              .join('.');
          }),
          (vi.prototype.toString = function () {
            return this.et();
          }),
          (vi.prototype.rt = function () {
            return 1 === this.length && '__name__' === this.get(0);
          }),
          (vi.ot = function () {
            return new vi(['__name__']);
          }),
          (vi.ct = function (t) {
            for (
              var e = [],
                n = '',
                r = 0,
                i = function () {
                  if (0 === n.length)
                    throw new Nr(
                      Ar.INVALID_ARGUMENT,
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
                    Ar.INVALID_ARGUMENT,
                    'Path has trailing escape character: ' + t
                  );
                var u = t[r + 1];
                if ('\\' !== u && '.' !== u && '`' !== u)
                  throw new Nr(
                    Ar.INVALID_ARGUMENT,
                    'Path has invalid escape sequence: ' + t
                  );
                (n += u), (r += 2);
              } else
                '`' === s ? (o = !o) : '.' !== s || o ? (n += s) : i(), r++;
            }
            if ((i(), o))
              throw new Nr(Ar.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
            return new vi(e);
          }),
          (vi.st = function () {
            return new vi([]);
          }),
          vi),
        di =
          ((yi.at = function (t) {
            return new yi(fi.nt(t));
          }),
          (yi.ut = function (t) {
            return new yi(fi.nt(t).j(5));
          }),
          (yi.prototype.ht = function (t) {
            return (
              2 <= this.path.length && this.path.get(this.path.length - 2) === t
            );
          }),
          (yi.prototype.isEqual = function (t) {
            return null !== t && 0 === fi.K(this.path, t.path);
          }),
          (yi.prototype.toString = function () {
            return this.path.toString();
          }),
          (yi.K = function (t, e) {
            return fi.K(t.path, e.path);
          }),
          (yi.lt = function (t) {
            return t.length % 2 == 0;
          }),
          (yi._t = function (t) {
            return new yi(new fi(t.slice()));
          }),
          yi);
      function yi(t) {
        this.path = t;
      }
      function vi() {
        return (null !== ri && ri.apply(this, arguments)) || this;
      }
      function gi() {
        return (null !== ii && ii.apply(this, arguments)) || this;
      }
      function mi(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Rr(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Rr(),
          (this.segments = t),
          (this.offset = e),
          (this.U = n);
      }
      function wi(t) {
        this.timestamp = t;
      }
      function bi(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e) < 0))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e
          );
        if (1e9 <= e)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e
          );
        if (t < -62135596800)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t
          );
        if (253402300800 <= t)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t
          );
      }
      function Ei(t, e) {
        (this.k = t), (this.M = e);
      }
      function Ii(t, e) {
        (this.k = t),
          (this.M = e),
          (this.type = 'FirstParty'),
          (this.user = Jr.g);
      }
      function Ti(t) {
        var e = this;
        (this.C = null),
          (this.currentUser = Jr.UNAUTHENTICATED),
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
      function _i() {
        this.p = null;
      }
      function Ai(t) {
        return null == t;
      }
      function Ni(t) {
        return 0 === t && 1 / t == -1 / 0;
      }
      function xi(t) {
        return (
          'number' == typeof t &&
          Number.isInteger(t) &&
          !Ni(t) &&
          t <= Number.MAX_SAFE_INTEGER &&
          t >= Number.MIN_SAFE_INTEGER
        );
      }
      var Si = function (t, e, n, r, i, o, s) {
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
      function Di(t, e, n, r, i, o, s) {
        return (
          void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = null),
          void 0 === s && (s = null),
          new Si(t, e, n, r, i, o, s)
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
                return (t = t).field.et() + t.op.toString() + Po(t.value);
              })
              .join(',')),
            (t += '|ob:'),
            (t += e.orderBy
              .map(function (t) {
                return (t = t).field.et() + t.dir;
              })
              .join(',')),
            Ai(e.limit) || ((t += '|l:'), (t += e.limit)),
            e.startAt && ((t += '|lb:'), (t += fa(e.startAt))),
            e.endAt && ((t += '|ub:'), (t += fa(e.endAt))),
            (e.ft = t)),
          e.ft
        );
      }
      function ki(t, e) {
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
            o.op !== s.op || !o.field.isEqual(s.field) || !Do(o.value, s.value))
          )
            return !1;
        return (
          t.collectionGroup === e.collectionGroup &&
          !!t.path.isEqual(e.path) &&
          !!pa(t.startAt, e.startAt) &&
          pa(t.endAt, e.endAt)
        );
      }
      function Li(t) {
        return (
          di.lt(t.path) && null === t.collectionGroup && 0 === t.filters.length
        );
      }
      function Pi(t) {
        this.count = t;
      }
      var Ri,
        Ci =
          ((Vi.prototype.Et = function (t) {
            return new Vi(
              this.target,
              this.targetId,
              this.dt,
              t,
              this.wt,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken
            );
          }),
          (Vi.prototype.Tt = function (t, e) {
            return new Vi(
              this.target,
              this.targetId,
              this.dt,
              this.sequenceNumber,
              e,
              this.lastLimboFreeSnapshotVersion,
              t
            );
          }),
          (Vi.prototype.It = function (t) {
            return new Vi(
              this.target,
              this.targetId,
              this.dt,
              this.sequenceNumber,
              this.wt,
              t,
              this.resumeToken
            );
          }),
          Vi);
      function Vi(t, e, n, r, i, o, s) {
        void 0 === i && (i = hi.min()),
          void 0 === o && (o = hi.min()),
          void 0 === s && (s = Fr.h),
          (this.target = t),
          (this.targetId = e),
          (this.dt = n),
          (this.sequenceNumber = r),
          (this.wt = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      function Mi(t) {
        switch (t) {
          case Ar.OK:
            return Rr(), 0;
          case Ar.CANCELLED:
          case Ar.UNKNOWN:
          case Ar.DEADLINE_EXCEEDED:
          case Ar.RESOURCE_EXHAUSTED:
          case Ar.INTERNAL:
          case Ar.UNAVAILABLE:
          case Ar.UNAUTHENTICATED:
            return;
          case Ar.INVALID_ARGUMENT:
          case Ar.NOT_FOUND:
          case Ar.ALREADY_EXISTS:
          case Ar.PERMISSION_DENIED:
          case Ar.FAILED_PRECONDITION:
          case Ar.ABORTED:
          case Ar.OUT_OF_RANGE:
          case Ar.UNIMPLEMENTED:
          case Ar.DATA_LOSS:
            return 1;
          default:
            return Rr(), 0;
        }
      }
      function Ui(t) {
        if (void 0 === t) return kr('GRPC error has no .code'), Ar.UNKNOWN;
        switch (t) {
          case Ri.OK:
            return Ar.OK;
          case Ri.CANCELLED:
            return Ar.CANCELLED;
          case Ri.UNKNOWN:
            return Ar.UNKNOWN;
          case Ri.DEADLINE_EXCEEDED:
            return Ar.DEADLINE_EXCEEDED;
          case Ri.RESOURCE_EXHAUSTED:
            return Ar.RESOURCE_EXHAUSTED;
          case Ri.INTERNAL:
            return Ar.INTERNAL;
          case Ri.UNAVAILABLE:
            return Ar.UNAVAILABLE;
          case Ri.UNAUTHENTICATED:
            return Ar.UNAUTHENTICATED;
          case Ri.INVALID_ARGUMENT:
            return Ar.INVALID_ARGUMENT;
          case Ri.NOT_FOUND:
            return Ar.NOT_FOUND;
          case Ri.ALREADY_EXISTS:
            return Ar.ALREADY_EXISTS;
          case Ri.PERMISSION_DENIED:
            return Ar.PERMISSION_DENIED;
          case Ri.FAILED_PRECONDITION:
            return Ar.FAILED_PRECONDITION;
          case Ri.ABORTED:
            return Ar.ABORTED;
          case Ri.OUT_OF_RANGE:
            return Ar.OUT_OF_RANGE;
          case Ri.UNIMPLEMENTED:
            return Ar.UNIMPLEMENTED;
          case Ri.DATA_LOSS:
            return Ar.DATA_LOSS;
          default:
            return Rr();
        }
      }
      ((Te = Ri = Ri || {})[(Te.OK = 0)] = 'OK'),
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
      var ji =
          ((Gi.prototype.At = function (t, e) {
            return new Gi(
              this.K,
              this.root.At(t, e, this.K).copy(null, null, Fi.Rt, null, null)
            );
          }),
          (Gi.prototype.remove = function (t) {
            return new Gi(
              this.K,
              this.root.remove(t, this.K).copy(null, null, Fi.Rt, null, null)
            );
          }),
          (Gi.prototype.get = function (t) {
            for (var e = this.root; !e.Y(); ) {
              var n = this.K(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : 0 < n && (e = e.right);
            }
            return null;
          }),
          (Gi.prototype.indexOf = function (t) {
            for (var e = 0, n = this.root; !n.Y(); ) {
              var r = this.K(t, n.key);
              if (0 === r) return e + n.left.size;
              n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
            }
            return -1;
          }),
          (Gi.prototype.Y = function () {
            return this.root.Y();
          }),
          Object.defineProperty(Gi.prototype, 'size', {
            get: function () {
              return this.root.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Gi.prototype.Pt = function () {
            return this.root.Pt();
          }),
          (Gi.prototype.yt = function () {
            return this.root.yt();
          }),
          (Gi.prototype.gt = function (t) {
            return this.root.gt(t);
          }),
          (Gi.prototype.forEach = function (n) {
            this.gt(function (t, e) {
              return n(t, e), !1;
            });
          }),
          (Gi.prototype.toString = function () {
            var n = [];
            return (
              this.gt(function (t, e) {
                return n.push(t + ':' + e), !1;
              }),
              '{' + n.join(', ') + '}'
            );
          }),
          (Gi.prototype.Vt = function (t) {
            return this.root.Vt(t);
          }),
          (Gi.prototype.bt = function () {
            return new qi(this.root, null, this.K, !1);
          }),
          (Gi.prototype.vt = function (t) {
            return new qi(this.root, t, this.K, !1);
          }),
          (Gi.prototype.St = function () {
            return new qi(this.root, null, this.K, !0);
          }),
          (Gi.prototype.Dt = function (t) {
            return new qi(this.root, t, this.K, !0);
          }),
          Gi),
        qi =
          ((zi.prototype.Nt = function () {
            var t = this.xt.pop(),
              e = { key: t.key, value: t.value };
            if (this.Ct)
              for (t = t.left; !t.Y(); ) this.xt.push(t), (t = t.right);
            else for (t = t.right; !t.Y(); ) this.xt.push(t), (t = t.left);
            return e;
          }),
          (zi.prototype.Ft = function () {
            return 0 < this.xt.length;
          }),
          (zi.prototype.Ot = function () {
            if (0 === this.xt.length) return null;
            var t = this.xt[this.xt.length - 1];
            return { key: t.key, value: t.value };
          }),
          zi),
        Fi =
          ((Bi.prototype.copy = function (t, e, n, r, i) {
            return new Bi(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right
            );
          }),
          (Bi.prototype.Y = function () {
            return !1;
          }),
          (Bi.prototype.gt = function (t) {
            return (
              this.left.gt(t) || t(this.key, this.value) || this.right.gt(t)
            );
          }),
          (Bi.prototype.Vt = function (t) {
            return (
              this.right.Vt(t) || t(this.key, this.value) || this.left.Vt(t)
            );
          }),
          (Bi.prototype.min = function () {
            return this.left.Y() ? this : this.left.min();
          }),
          (Bi.prototype.Pt = function () {
            return this.min().key;
          }),
          (Bi.prototype.yt = function () {
            return this.right.Y() ? this.key : this.right.yt();
          }),
          (Bi.prototype.At = function (t, e, n) {
            var r = this,
              i = n(t, r.key);
            return (r =
              i < 0
                ? r.copy(null, null, null, r.left.At(t, e, n), null)
                : 0 === i
                ? r.copy(null, e, null, null, null)
                : r.copy(null, null, null, null, r.right.At(t, e, n))).kt();
          }),
          (Bi.prototype.Mt = function () {
            if (this.left.Y()) return Bi.EMPTY;
            var t = this;
            return (
              t.left.Lt() || t.left.left.Lt() || (t = t.$t()),
              (t = t.copy(null, null, null, t.left.Mt(), null)).kt()
            );
          }),
          (Bi.prototype.remove = function (t, e) {
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
                if (r.right.Y()) return Bi.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.Mt()));
              }
              r = r.copy(null, null, null, null, r.right.remove(t, e));
            }
            return r.kt();
          }),
          (Bi.prototype.Lt = function () {
            return this.color;
          }),
          (Bi.prototype.kt = function () {
            var t = this;
            return (
              t.right.Lt() && !t.left.Lt() && (t = t.Ut()),
              t.left.Lt() && t.left.left.Lt() && (t = t.Bt()),
              t.left.Lt() && t.right.Lt() && (t = t.Qt()),
              t
            );
          }),
          (Bi.prototype.$t = function () {
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
          (Bi.prototype.qt = function () {
            var t = this.Qt();
            return t.left.left.Lt() && (t = (t = t.Bt()).Qt()), t;
          }),
          (Bi.prototype.Ut = function () {
            var t = this.copy(null, null, Bi.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }),
          (Bi.prototype.Bt = function () {
            var t = this.copy(null, null, Bi.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }),
          (Bi.prototype.Qt = function () {
            var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, t, e);
          }),
          (Bi.prototype.Kt = function () {
            var t = this.Wt();
            return Math.pow(2, t) <= this.size + 1;
          }),
          (Bi.prototype.Wt = function () {
            if (this.Lt() && this.left.Lt()) throw Rr();
            if (this.right.Lt()) throw Rr();
            var t = this.left.Wt();
            if (t !== this.right.Wt()) throw Rr();
            return t + (this.Lt() ? 0 : 1);
          }),
          Bi);
      function Bi(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : Bi.RED),
          (this.left = null != r ? r : Bi.EMPTY),
          (this.right = null != i ? i : Bi.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      function zi(t, e, n, r) {
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
      function Gi(t, e) {
        (this.K = t), (this.root = e || Fi.EMPTY);
      }
      function Ki() {
        this.size = 0;
      }
      (Fi.EMPTY = null),
        (Fi.RED = !0),
        (Fi.Rt = !1),
        (Fi.EMPTY =
          (Object.defineProperty(Ki.prototype, 'key', {
            get: function () {
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ki.prototype, 'value', {
            get: function () {
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ki.prototype, 'color', {
            get: function () {
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ki.prototype, 'left', {
            get: function () {
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ki.prototype, 'right', {
            get: function () {
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ki.prototype.copy = function (t, e, n, r, i) {
            return this;
          }),
          (Ki.prototype.At = function (t, e, n) {
            return new Fi(t, e);
          }),
          (Ki.prototype.remove = function (t, e) {
            return this;
          }),
          (Ki.prototype.Y = function () {
            return !0;
          }),
          (Ki.prototype.gt = function (t) {
            return !1;
          }),
          (Ki.prototype.Vt = function (t) {
            return !1;
          }),
          (Ki.prototype.Pt = function () {
            return null;
          }),
          (Ki.prototype.yt = function () {
            return null;
          }),
          (Ki.prototype.Lt = function () {
            return !1;
          }),
          (Ki.prototype.Kt = function () {
            return !0;
          }),
          (Ki.prototype.Wt = function () {
            return 0;
          }),
          new Ki()));
      var Hi =
          ((Zi.prototype.has = function (t) {
            return null !== this.data.get(t);
          }),
          (Zi.prototype.first = function () {
            return this.data.Pt();
          }),
          (Zi.prototype.last = function () {
            return this.data.yt();
          }),
          Object.defineProperty(Zi.prototype, 'size', {
            get: function () {
              return this.data.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Zi.prototype.indexOf = function (t) {
            return this.data.indexOf(t);
          }),
          (Zi.prototype.forEach = function (n) {
            this.data.gt(function (t, e) {
              return n(t), !1;
            });
          }),
          (Zi.prototype.jt = function (t, e) {
            for (var n = this.data.vt(t[0]); n.Ft(); ) {
              var r = n.Nt();
              if (0 <= this.K(r.key, t[1])) return;
              e(r.key);
            }
          }),
          (Zi.prototype.Gt = function (t, e) {
            for (
              var n = void 0 !== e ? this.data.vt(e) : this.data.bt();
              n.Ft();

            )
              if (!t(n.Nt().key)) return;
          }),
          (Zi.prototype.zt = function (t) {
            t = this.data.vt(t);
            return t.Ft() ? t.Nt().key : null;
          }),
          (Zi.prototype.bt = function () {
            return new Wi(this.data.bt());
          }),
          (Zi.prototype.vt = function (t) {
            return new Wi(this.data.vt(t));
          }),
          (Zi.prototype.add = function (t) {
            return this.copy(this.data.remove(t).At(t, !0));
          }),
          (Zi.prototype.delete = function (t) {
            return this.has(t) ? this.copy(this.data.remove(t)) : this;
          }),
          (Zi.prototype.Y = function () {
            return this.data.Y();
          }),
          (Zi.prototype.Ht = function (t) {
            var e = this;
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach(function (t) {
                e = e.add(t);
              }),
              e
            );
          }),
          (Zi.prototype.isEqual = function (t) {
            if (!(t instanceof Zi)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.data.bt(), n = t.data.bt(); e.Ft(); ) {
              var r = e.Nt().key,
                i = n.Nt().key;
              if (0 !== this.K(r, i)) return !1;
            }
            return !0;
          }),
          (Zi.prototype.tt = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              e
            );
          }),
          (Zi.prototype.toString = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                return e.push(t);
              }),
              'SortedSet(' + e.toString() + ')'
            );
          }),
          (Zi.prototype.copy = function (t) {
            var e = new Zi(this.K);
            return (e.data = t), e;
          }),
          Zi),
        Wi =
          ((Xi.prototype.Nt = function () {
            return this.Jt.Nt().key;
          }),
          (Xi.prototype.Ft = function () {
            return this.Jt.Ft();
          }),
          Xi),
        Yi = new ji(di.K);
      function Xi(t) {
        this.Jt = t;
      }
      function Zi(t) {
        (this.K = t), (this.data = new ji(this.K));
      }
      var Qi = new ji(di.K);
      var Ji = new ji(di.K);
      var $i = new Hi(di.K);
      function to() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = $i, r = 0, i = t; r < i.length; r++)
          var o = i[r], n = n.add(o);
        return n;
      }
      var eo = new Hi(Ur);
      var no =
          ((wo.Zt = function (t) {
            return new wo(t.K);
          }),
          (wo.prototype.has = function (t) {
            return null != this.Yt.get(t);
          }),
          (wo.prototype.get = function (t) {
            return this.Yt.get(t);
          }),
          (wo.prototype.first = function () {
            return this.Xt.Pt();
          }),
          (wo.prototype.last = function () {
            return this.Xt.yt();
          }),
          (wo.prototype.Y = function () {
            return this.Xt.Y();
          }),
          (wo.prototype.indexOf = function (t) {
            t = this.Yt.get(t);
            return t ? this.Xt.indexOf(t) : -1;
          }),
          Object.defineProperty(wo.prototype, 'size', {
            get: function () {
              return this.Xt.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (wo.prototype.forEach = function (n) {
            this.Xt.gt(function (t, e) {
              return n(t), !1;
            });
          }),
          (wo.prototype.add = function (t) {
            var e = this.delete(t.key);
            return e.copy(e.Yt.At(t.key, t), e.Xt.At(t, null));
          }),
          (wo.prototype.delete = function (t) {
            var e = this.get(t);
            return e ? this.copy(this.Yt.remove(t), this.Xt.remove(e)) : this;
          }),
          (wo.prototype.isEqual = function (t) {
            if (!(t instanceof wo)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.Xt.bt(), n = t.Xt.bt(); e.Ft(); ) {
              var r = e.Nt().key,
                i = n.Nt().key;
              if (!r.isEqual(i)) return !1;
            }
            return !0;
          }),
          (wo.prototype.toString = function () {
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
          (wo.prototype.copy = function (t, e) {
            var n = new wo();
            return (n.K = this.K), (n.Yt = t), (n.Xt = e), n;
          }),
          wo),
        ro =
          ((mo.prototype.track = function (t) {
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
              : Rr();
          }),
          (mo.prototype.ee = function () {
            var n = [];
            return (
              this.te.gt(function (t, e) {
                n.push(e);
              }),
              n
            );
          }),
          mo),
        io =
          ((go.oe = function (t, e, n, r) {
            var i = [];
            return (
              e.forEach(function (t) {
                i.push({ type: 0, doc: t });
              }),
              new go(t, e, no.Zt(e), i, n, r, !0, !1)
            );
          }),
          Object.defineProperty(go.prototype, 'hasPendingWrites', {
            get: function () {
              return !this.se.Y();
            },
            enumerable: !1,
            configurable: !0
          }),
          (go.prototype.isEqual = function (t) {
            if (
              !(
                this.fromCache === t.fromCache &&
                this.ie === t.ie &&
                this.se.isEqual(t.se) &&
                Ru(this.query, t.query) &&
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
          go),
        oo =
          ((vo.le = function (t, e) {
            var n = new Map();
            return n.set(t, so._e(t, e)), new vo(hi.min(), n, eo, Yi, to());
          }),
          vo),
        so =
          ((yo._e = function (t, e) {
            return new yo(Fr.h, e, to(), to(), to());
          }),
          yo),
        uo = function (t, e, n, r) {
          (this.Te = t),
            (this.removedTargetIds = e),
            (this.key = n),
            (this.me = r);
        },
        ao = function (t, e) {
          (this.targetId = t), (this.Ie = e);
        },
        co = function (t, e, n, r) {
          void 0 === n && (n = Fr.h),
            void 0 === r && (r = null),
            (this.state = t),
            (this.targetIds = e),
            (this.resumeToken = n),
            (this.cause = r);
        },
        ho =
          (Object.defineProperty(po.prototype, 'fe', {
            get: function () {
              return this.ye;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(po.prototype, 'resumeToken', {
            get: function () {
              return this.Pe;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(po.prototype, 'Ve', {
            get: function () {
              return 0 !== this.Ae;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(po.prototype, 'pe', {
            get: function () {
              return this.ge;
            },
            enumerable: !1,
            configurable: !0
          }),
          (po.prototype.be = function (t) {
            0 < t.o() && ((this.ge = !0), (this.Pe = t));
          }),
          (po.prototype.ve = function () {
            var n = to(),
              r = to(),
              i = to();
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
                    Rr();
                }
              }),
              new so(this.Pe, this.ye, n, r, i)
            );
          }),
          (po.prototype.Se = function () {
            (this.ge = !1), (this.Re = Eo());
          }),
          (po.prototype.De = function (t, e) {
            (this.ge = !0), (this.Re = this.Re.At(t, e));
          }),
          (po.prototype.Ce = function (t) {
            (this.ge = !0), (this.Re = this.Re.remove(t));
          }),
          (po.prototype.xe = function () {
            this.Ae += 1;
          }),
          (po.prototype.Ne = function () {
            --this.Ae;
          }),
          (po.prototype.Fe = function () {
            (this.ge = !0), (this.ye = !0);
          }),
          po),
        fo =
          ((lo.prototype.Be = function (t) {
            for (var e = 0, n = t.Te; e < n.length; e++) {
              var r = n[e];
              t.me instanceof gu
                ? this.qe(r, t.me)
                : t.me instanceof mu && this.Ue(r, t.key, t.me);
            }
            for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
              (r = o[i]), this.Ue(r, t.key, t.me);
          }),
          (lo.prototype.Qe = function (n) {
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
                  Rr();
              }
            });
          }),
          (lo.prototype.Ke = function (t, n) {
            var r = this;
            0 < t.targetIds.length
              ? t.targetIds.forEach(n)
              : this.ke.forEach(function (t, e) {
                  r.je(e) && n(e);
                });
          }),
          (lo.prototype.ze = function (t) {
            var e = t.targetId,
              n = t.Ie.count,
              t = this.He(e);
            t &&
              (Li((t = t.target))
                ? 0 === n
                  ? ((t = new di(t.path)), this.Ue(e, t, new mu(t, hi.min())))
                  : Cr(1 === n)
                : this.Je(e) !== n && (this.Ge(e), (this.$e = this.$e.add(e))));
          }),
          (lo.prototype.Ye = function (r) {
            var i = this,
              o = new Map();
            this.ke.forEach(function (t, e) {
              var n = i.He(e);
              n &&
                (t.fe &&
                  Li(n.target) &&
                  ((n = new di(n.target.path)),
                  null !== i.Me.get(n) ||
                    i.Xe(e, n) ||
                    i.Ue(e, n, new mu(n, r))),
                t.pe && (o.set(e, t.ve()), t.Se()));
            });
            var s = to();
            this.Le.forEach(function (t, e) {
              var n = !0;
              e.Gt(function (t) {
                t = i.He(t);
                return !t || 2 === t.dt || (n = !1);
              }),
                n && (s = s.add(t));
            });
            var t = new oo(r, o, this.$e, this.Me, s);
            return (this.Me = Yi), (this.Le = bo()), (this.$e = new Hi(Ur)), t;
          }),
          (lo.prototype.qe = function (t, e) {
            var n;
            this.je(t) &&
              ((n = this.Xe(t, e.key) ? 2 : 0),
              this.We(t).De(e.key, n),
              (this.Me = this.Me.At(e.key, e)),
              (this.Le = this.Le.At(e.key, this.Ze(e.key).add(t))));
          }),
          (lo.prototype.Ue = function (t, e, n) {
            var r;
            this.je(t) &&
              ((r = this.We(t)),
              this.Xe(t, e) ? r.De(e, 1) : r.Ce(e),
              (this.Le = this.Le.At(e, this.Ze(e).delete(t))),
              n && (this.Me = this.Me.At(e, n)));
          }),
          (lo.prototype.removeTarget = function (t) {
            this.ke.delete(t);
          }),
          (lo.prototype.Je = function (t) {
            var e = this.We(t).ve();
            return this.Oe.tn(t).size + e.de.size - e.Ee.size;
          }),
          (lo.prototype.xe = function (t) {
            this.We(t).xe();
          }),
          (lo.prototype.We = function (t) {
            var e = this.ke.get(t);
            return e || ((e = new ho()), this.ke.set(t, e)), e;
          }),
          (lo.prototype.Ze = function (t) {
            var e = this.Le.get(t);
            return e || ((e = new Hi(Ur)), (this.Le = this.Le.At(t, e))), e;
          }),
          (lo.prototype.je = function (t) {
            var e = null !== this.He(t);
            return (
              e || Or('WatchChangeAggregator', 'Detected inactive target', t), e
            );
          }),
          (lo.prototype.He = function (t) {
            var e = this.ke.get(t);
            return e && e.Ve ? null : this.Oe.en(t);
          }),
          (lo.prototype.Ge = function (e) {
            var n = this;
            this.ke.set(e, new ho()),
              this.Oe.tn(e).forEach(function (t) {
                n.Ue(e, t, null);
              });
          }),
          (lo.prototype.Xe = function (t, e) {
            return this.Oe.tn(t).has(e);
          }),
          lo);
      function lo(t) {
        (this.Oe = t),
          (this.ke = new Map()),
          (this.Me = Yi),
          (this.Le = bo()),
          (this.$e = new Hi(Ur));
      }
      function po() {
        (this.Ae = 0),
          (this.Re = Eo()),
          (this.Pe = Fr.h),
          (this.ye = !1),
          (this.ge = !0);
      }
      function yo(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.fe = e),
          (this.de = n),
          (this.we = r),
          (this.Ee = i);
      }
      function vo(t, e, n, r, i) {
        (this.wt = t),
          (this.ce = e),
          (this.ae = n),
          (this.ue = r),
          (this.he = i);
      }
      function go(t, e, n, r, i, o, s, u) {
        (this.query = t),
          (this.docs = e),
          (this.ne = n),
          (this.docChanges = r),
          (this.se = i),
          (this.fromCache = o),
          (this.ie = s),
          (this.re = u);
      }
      function mo() {
        this.te = new ji(di.K);
      }
      function wo(n) {
        (this.K = n
          ? function (t, e) {
              return n(t, e) || di.K(t.key, e.key);
            }
          : function (t, e) {
              return di.K(t.key, e.key);
            }),
          (this.Yt = Qi),
          (this.Xt = new ji(this.K));
      }
      function bo() {
        return new ji(di.K);
      }
      function Eo() {
        return new ji(di.K);
      }
      function Io(t) {
        var e,
          n = 0;
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
        return n;
      }
      function To(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
      function _o(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      function Ao(t) {
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
      function No(t) {
        t = Ro(t.mapValue.fields.__local_write_time__.timestampValue);
        return new ci(t.seconds, t.nanos);
      }
      var xo = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function So(t) {
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
          ? Ao(t)
            ? 4
            : 10
          : Rr();
      }
      function Do(r, i) {
        var t,
          e = So(r);
        if (e !== So(i)) return !1;
        switch (e) {
          case 0:
            return !0;
          case 1:
            return r.booleanValue === i.booleanValue;
          case 4:
            return No(r).isEqual(No(i));
          case 3:
            return (function (t) {
              if (
                'string' == typeof r.timestampValue &&
                'string' == typeof t.timestampValue &&
                r.timestampValue.length === t.timestampValue.length
              )
                return r.timestampValue === t.timestampValue;
              var e = Ro(r.timestampValue),
                t = Ro(t.timestampValue);
              return e.seconds === t.seconds && e.nanos === t.nanos;
            })(i);
          case 5:
            return r.stringValue === i.stringValue;
          case 6:
            return (t = i), Vo(r.bytesValue).isEqual(Vo(t.bytesValue));
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
                return t === e ? Ni(t) === Ni(e) : isNaN(t) && isNaN(e);
              }
              return !1;
            })(r, i);
          case 9:
            return jr(r.arrayValue.values || [], i.arrayValue.values || [], Do);
          case 10:
            return (function () {
              var t,
                e = r.mapValue.fields || {},
                n = i.mapValue.fields || {};
              if (Io(e) !== Io(n)) return !1;
              for (t in e)
                if (e.hasOwnProperty(t) && (void 0 === n[t] || !Do(e[t], n[t])))
                  return !1;
              return !0;
            })();
          default:
            return Rr();
        }
      }
      function Oo(t, e) {
        return (
          void 0 !==
          (t.values || []).find(function (t) {
            return Do(t, e);
          })
        );
      }
      function ko(t, e) {
        var n,
          r,
          i = So(t),
          o = So(e);
        if (i !== o) return Ur(i, o);
        switch (i) {
          case 0:
            return 0;
          case 1:
            return Ur(t.booleanValue, e.booleanValue);
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
            return Lo(t.timestampValue, e.timestampValue);
          case 4:
            return Lo(No(t), No(e));
          case 5:
            return Ur(t.stringValue, e.stringValue);
          case 6:
            return (function (t, e) {
              (t = Vo(t)), (e = Vo(e));
              return t.u(e);
            })(t.bytesValue, e.bytesValue);
          case 7:
            return (function (t, e) {
              for (
                var n = t.split('/'), r = e.split('/'), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = Ur(n[i], r[i]);
                if (0 !== o) return o;
              }
              return Ur(n.length, r.length);
            })(t.referenceValue, e.referenceValue);
          case 8:
            return (
              (i = t.geoPointValue),
              (r = e.geoPointValue),
              0 !== (n = Ur(Co(i.latitude), Co(r.latitude)))
                ? n
                : Ur(Co(i.longitude), Co(r.longitude))
            );
          case 9:
            return (function (t, e) {
              for (
                var n = t.values || [], r = e.values || [], i = 0;
                i < n.length && i < r.length;
                ++i
              ) {
                var o = ko(n[i], r[i]);
                if (o) return o;
              }
              return Ur(n.length, r.length);
            })(t.arrayValue, e.arrayValue);
          case 10:
            return (function (t, e) {
              var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Ur(r[s], o[s]);
                if (0 !== u) return u;
                u = ko(n[r[s]], i[o[s]]);
                if (0 !== u) return u;
              }
              return Ur(r.length, o.length);
            })(t.mapValue, e.mapValue);
          default:
            throw Rr();
        }
      }
      function Lo(t, e) {
        if (
          'string' == typeof t &&
          'string' == typeof e &&
          t.length === e.length
        )
          return Ur(t, e);
        var n = Ro(t),
          t = Ro(e),
          e = Ur(n.seconds, t.seconds);
        return 0 !== e ? e : Ur(n.nanos, t.nanos);
      }
      function Po(t) {
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
                var t = Ro(t);
                return 'time(' + t.seconds + ',' + t.nanos + ')';
              })(t.timestampValue)
            : 'stringValue' in t
            ? t.stringValue
            : 'bytesValue' in t
            ? Vo(t.bytesValue).toBase64()
            : 'referenceValue' in t
            ? ((e = t.referenceValue), di.ut(e).toString())
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
            : Rr();
          var e;
        })(t);
      }
      function Ro(t) {
        if ((Cr(!!t), 'string' != typeof t))
          return { seconds: Co(t.seconds), nanos: Co(t.nanos) };
        var e = 0,
          n = xo.exec(t);
        Cr(!!n),
          n[1] &&
            ((n = ((n = n[1]) + '000000000').substr(0, 9)), (e = Number(n)));
        t = new Date(t);
        return { seconds: Math.floor(t.getTime() / 1e3), nanos: e };
      }
      function Co(t) {
        return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
      }
      function Vo(t) {
        return 'string' == typeof t
          ? Fr.fromBase64String(t)
          : Fr.fromUint8Array(t);
      }
      function Mo(t, e) {
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
      function Uo(t) {
        return t && 'integerValue' in t;
      }
      function jo(t) {
        return !!t && 'arrayValue' in t;
      }
      function qo(t) {
        return t && 'nullValue' in t;
      }
      function Fo(t) {
        return t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
      }
      function Bo(t) {
        return t && 'mapValue' in t;
      }
      var zo = { asc: 'ASCENDING', desc: 'DESCENDING' },
        Go = {
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
        Ko = function (t, e) {
          (this.T = t), (this.nn = e);
        };
      function Ho(t) {
        return { integerValue: '' + t };
      }
      function Wo(t, e) {
        if (t.nn) {
          if (isNaN(e)) return { doubleValue: 'NaN' };
          if (e === 1 / 0) return { doubleValue: 'Infinity' };
          if (e === -1 / 0) return { doubleValue: '-Infinity' };
        }
        return { doubleValue: Ni(e) ? '-0' : e };
      }
      function Yo(t, e) {
        return xi(e) ? Ho(e) : Wo(t, e);
      }
      function Xo(t, e) {
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
      function Zo(t, e) {
        return t.nn ? e.toBase64() : e.toUint8Array();
      }
      function Qo(t) {
        return Cr(!!t), hi.$(((t = Ro(t)), new ci(t.seconds, t.nanos)));
      }
      function Jo(t, e) {
        return new fi(['projects', t.projectId, 'databases', t.database])
          .child('documents')
          .child(e)
          .et();
      }
      function $o(t) {
        t = fi.nt(t);
        return Cr(ms(t)), t;
      }
      function ts(t, e) {
        return Jo(t.T, e.path);
      }
      function es(t, e) {
        e = $o(e);
        if (e.get(1) !== t.T.projectId)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Tried to deserialize key from different project: ' +
              e.get(1) +
              ' vs ' +
              t.T.projectId
          );
        if (e.get(3) !== t.T.database)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Tried to deserialize key from different database: ' +
              e.get(3) +
              ' vs ' +
              t.T.database
          );
        return new di(os(e));
      }
      function ns(t, e) {
        return Jo(t.T, e);
      }
      function rs(t) {
        t = $o(t);
        return 4 === t.length ? fi.st() : os(t);
      }
      function is(t) {
        return new fi([
          'projects',
          t.T.projectId,
          'databases',
          t.T.database
        ]).et();
      }
      function os(t) {
        return Cr(4 < t.length && 'documents' === t.get(4)), t.j(5);
      }
      function ss(t, e, n) {
        return { name: ts(t, e), fields: n.proto.mapValue.fields };
      }
      function us(t, e, n) {
        var r = es(t, e.name),
          t = Qo(e.updateTime),
          e = new au({ mapValue: { fields: e.fields } });
        return new gu(r, t, e, { hasCommittedMutations: !!n });
      }
      function as(t, e) {
        var n, r, i;
        if (e instanceof Xs) n = { update: ss(t, e.key, e.value) };
        else if (e instanceof su) n = { delete: ts(t, e.key) };
        else if (e instanceof Zs)
          n = {
            update: ss(t, e.key, e.data),
            updateMask:
              ((i = e.sn),
              (r = []),
              i.fields.forEach(function (t) {
                return r.push(t.et());
              }),
              { fieldPaths: r })
          };
        else if (e instanceof eu)
          n = {
            transform: {
              document: ts(t, e.key),
              fieldTransforms: e.fieldTransforms.map(function (t) {
                var e = t.transform;
                if (e instanceof Is)
                  return {
                    fieldPath: t.field.et(),
                    setToServerValue: 'REQUEST_TIME'
                  };
                if (e instanceof Ts)
                  return {
                    fieldPath: t.field.et(),
                    appendMissingElements: { values: e.elements }
                  };
                if (e instanceof Ss)
                  return {
                    fieldPath: t.field.et(),
                    removeAllFromArray: { values: e.elements }
                  };
                if (e instanceof Ls)
                  return { fieldPath: t.field.et(), increment: e.rn };
                throw Rr();
              })
            }
          };
        else {
          if (!(e instanceof uu)) return Rr();
          n = { verify: ts(t, e.key) };
        }
        return (
          e.cn.on ||
            (n.currentDocument =
              void 0 !== (i = e.cn).updateTime
                ? { updateTime: ((e = t), (t = i.updateTime), Xo(e, t.q())) }
                : void 0 !== i.exists
                ? { exists: i.exists }
                : Rr()),
          n
        );
      }
      function cs(e, t) {
        var n = t.currentDocument
          ? void 0 !== (o = t.currentDocument).updateTime
            ? qs.updateTime(Qo(o.updateTime))
            : void 0 !== o.exists
            ? qs.exists(o.exists)
            : qs.an()
          : qs.an();
        if (t.update) {
          t.update.name;
          var r = es(e, t.update.name),
            i = new au({ mapValue: { fields: t.update.fields } });
          if (t.updateMask) {
            var o =
              ((o = t.updateMask.fieldPaths || []),
              new Vs(
                o.map(function (t) {
                  return pi.ct(t);
                })
              ));
            return new Zs(r, i, o, n);
          }
          return new Xs(r, i, n);
        }
        return t.delete
          ? ((r = es(e, t.delete)), new su(r, n))
          : t.transform
          ? ((r = es(e, t.transform.document)),
            (i = t.transform.fieldTransforms.map(function (t) {
              return (function (t, e) {
                var n,
                  r = null;
                'setToServerValue' in e
                  ? (Cr('REQUEST_TIME' === e.setToServerValue), (r = new Is()))
                  : 'appendMissingElements' in e
                  ? ((n = e.appendMissingElements.values || []),
                    (r = new Ts(n)))
                  : 'removeAllFromArray' in e
                  ? ((n = e.removeAllFromArray.values || []), (r = new Ss(n)))
                  : 'increment' in e
                  ? (r = new Ls(t, e.increment))
                  : Rr();
                e = pi.ct(e.fieldPath);
                return new Ms(e, r);
              })(e, t);
            })),
            Cr(!0 === n.exists),
            new eu(r, i))
          : t.verify
          ? ((r = es(e, t.verify)), new uu(r, n))
          : Rr();
      }
      function hs(t, e) {
        return { documents: [ns(t, e.path)] };
      }
      function fs(t, e) {
        var n = { structuredQuery: {} },
          r = e.path;
        null !== e.collectionGroup
          ? ((n.parent = ns(t, r)),
            (n.structuredQuery.from = [
              { collectionId: e.collectionGroup, allDescendants: !0 }
            ]))
          : ((n.parent = ns(t, r.G())),
            (n.structuredQuery.from = [{ collectionId: r.J() }]));
        r = (function (t) {
          if (0 !== t.length) {
            t = t.map(function (t) {
              if ('==' === t.op) {
                if (Fo(t.value))
                  return { unaryFilter: { field: ys(t.field), op: 'IS_NAN' } };
                if (qo(t.value))
                  return { unaryFilter: { field: ys(t.field), op: 'IS_NULL' } };
              } else if ('!=' === t.op) {
                if (Fo(t.value))
                  return {
                    unaryFilter: { field: ys(t.field), op: 'IS_NOT_NAN' }
                  };
                if (qo(t.value))
                  return {
                    unaryFilter: { field: ys(t.field), op: 'IS_NOT_NULL' }
                  };
              }
              return {
                fieldFilter: {
                  field: ys(t.field),
                  op: ((e = t.op), Go[e]),
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
                field: ys((t = t).field),
                direction: ((t = t.dir), zo[t])
              };
            });
        })(e.orderBy);
        r && (n.structuredQuery.orderBy = r);
        (r = e.limit), (r = t.nn || Ai(r) ? r : { value: r });
        return (
          null !== r && (n.structuredQuery.limit = r),
          e.startAt && (n.structuredQuery.startAt = ps(e.startAt)),
          e.endAt && (n.structuredQuery.endAt = ps(e.endAt)),
          n
        );
      }
      function ls(t) {
        var e = rs(t.parent),
          n = t.structuredQuery,
          r = n.from ? n.from.length : 0,
          i = null;
        0 < r &&
          (Cr(1 === r),
          (s = n.from[0]).allDescendants
            ? (i = s.collectionId)
            : (e = e.child(s.collectionId)));
        var o = [];
        n.where &&
          (o = (function e(t) {
            return t
              ? void 0 !== t.unaryFilter
                ? [gs(t)]
                : void 0 !== t.fieldFilter
                ? [
                    ((n = t),
                    qu.create(
                      vs(n.fieldFilter.field),
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
                            return Rr();
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
                : Rr()
              : [];
            var n;
          })(n.where));
        t = [];
        n.orderBy &&
          (t = n.orderBy.map(function (t) {
            return new da(
              vs((e = t).field),
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
        n.startAt && (s = ds(n.startAt));
        var u = null;
        return n.endAt && (u = ds(n.endAt)), _u(e, i, t, o, r, 'F', s, u);
      }
      function ps(t) {
        return { before: t.before, values: t.position };
      }
      function ds(t) {
        var e = !!t.before,
          t = t.values || [];
        return new sa(t, e);
      }
      function ys(t) {
        return { fieldPath: t.et() };
      }
      function vs(t) {
        return pi.ct(t.fieldPath);
      }
      function gs(t) {
        switch (t.unaryFilter.op) {
          case 'IS_NAN':
            var e = vs(t.unaryFilter.field);
            return qu.create(e, '==', { doubleValue: NaN });
          case 'IS_NULL':
            var n = vs(t.unaryFilter.field);
            return qu.create(n, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            n = vs(t.unaryFilter.field);
            return qu.create(n, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            t = vs(t.unaryFilter.field);
            return qu.create(t, '!=', { nullValue: 'NULL_VALUE' });
          case 'OPERATOR_UNSPECIFIED':
          default:
            return Rr();
        }
      }
      function ms(t) {
        return (
          4 <= t.length && 'projects' === t.get(0) && 'databases' === t.get(2)
        );
      }
      o = function () {
        this.un = void 0;
      };
      function ws(t, e) {
        return t instanceof Ls
          ? Uo((t = e)) || (t && 'doubleValue' in t)
            ? e
            : { integerValue: 0 }
          : null;
      }
      var bs,
        Es,
        Is = (h(As, (Es = o)), As),
        Ts = (h(_s, (bs = o)), _s);
      function _s(t) {
        var e = this;
        return ((e = bs.call(this) || this).elements = t), e;
      }
      function As() {
        return (null !== Es && Es.apply(this, arguments)) || this;
      }
      function Ns(t, e) {
        for (var n = Cs(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n.some(function (t) {
              return Do(t, e);
            }) || n.push(e);
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var xs,
        Ss = (h(Ds, (xs = o)), Ds);
      function Ds(t) {
        var e = this;
        return ((e = xs.call(this) || this).elements = t), e;
      }
      function Os(t, e) {
        for (var n = Cs(e), r = 0, i = t.elements; r < i.length; r++)
          !(function (e) {
            n = n.filter(function (t) {
              return !Do(t, e);
            });
          })(i[r]);
        return { arrayValue: { values: n } };
      }
      var ks,
        Ls = (h(Ps, (ks = o)), Ps);
      function Ps(t, e) {
        var n = this;
        return ((n = ks.call(this) || this).serializer = t), (n.rn = e), n;
      }
      function Rs(t) {
        return Co(t.integerValue || t.doubleValue);
      }
      function Cs(t) {
        return jo(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      var Vs =
          ((Us.prototype.hn = function (t) {
            for (var e = 0, n = this.fields; e < n.length; e++)
              if (n[e].X(t)) return !0;
            return !1;
          }),
          (Us.prototype.isEqual = function (t) {
            return jr(this.fields, t.fields, function (t, e) {
              return t.isEqual(e);
            });
          }),
          Us),
        Ms = function (t, e) {
          (this.field = t), (this.transform = e);
        };
      function Us(t) {
        (this.fields = t).sort(pi.K);
      }
      function js(t, e) {
        (this.version = t), (this.transformResults = e);
      }
      var qs =
        ((Fs.an = function () {
          return new Fs();
        }),
        (Fs.exists = function (t) {
          return new Fs(void 0, t);
        }),
        (Fs.updateTime = function (t) {
          return new Fs(t);
        }),
        Object.defineProperty(Fs.prototype, 'on', {
          get: function () {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0
        }),
        (Fs.prototype.isEqual = function (t) {
          return (
            this.exists === t.exists &&
            (this.updateTime
              ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
              : !t.updateTime)
          );
        }),
        Fs);
      function Fs(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      function Bs(t, e) {
        return void 0 !== t.updateTime
          ? e instanceof gu && e.version.isEqual(t.updateTime)
          : void 0 === t.exists || t.exists === e instanceof gu;
      }
      Ie = function () {};
      function zs(t, e, n) {
        return t instanceof Xs
          ? new gu(t.key, n.version, t.value, { hasCommittedMutations: !0 })
          : t instanceof Zs
          ? (function (t, e, n) {
              if (!Bs(t.cn, e)) return new wu(t.key, n.version);
              e = $s(t, e);
              return new gu(t.key, n.version, e, { hasCommittedMutations: !0 });
            })(t, e, n)
          : t instanceof eu
          ? (function (t, e, n) {
              if ((Cr(null != n.transformResults), !Bs(t.cn, e)))
                return new wu(t.key, n.version);
              var r = e,
                e = (function (t, e, n) {
                  var r = [];
                  Cr(t.length === n.length);
                  for (var i = 0; i < n.length; i++) {
                    var o = t[i],
                      s = o.transform,
                      u = null;
                    e instanceof gu && (u = e.field(o.field)),
                      r.push(
                        ((o = s),
                        (s = u),
                        (u = n[i]),
                        o instanceof Ts
                          ? Ns(o, s)
                          : o instanceof Ss
                          ? Os(o, s)
                          : u)
                      );
                  }
                  return r;
                })(t.fieldTransforms, e, n.transformResults),
                n = n.version,
                e = ru(t, r.data(), e);
              return new gu(t.key, n, e, { hasCommittedMutations: !0 });
            })(t, e, n)
          : new mu(t.key, n.version, { hasCommittedMutations: !0 });
      }
      function Gs(t, e, n, r) {
        return t instanceof Xs
          ? (function (t, e) {
              if (!Bs(t.cn, e)) return e;
              e = Hs(e);
              return new gu(t.key, e, t.value, { ln: !0 });
            })(t, e)
          : t instanceof Zs
          ? (function (t, e) {
              if (!Bs(t.cn, e)) return e;
              var n = Hs(e),
                e = $s(t, e);
              return new gu(t.key, n, e, { ln: !0 });
            })(t, e)
          : t instanceof eu
          ? (function (t, e, n, r) {
              if (!Bs(t.cn, e)) return e;
              var i = e,
                r = (function (t, e, n, r) {
                  for (var i, o = [], s = 0, u = t; s < u.length; s++) {
                    var a = u[s],
                      c = a.transform,
                      h = null;
                    n instanceof gu && (h = n.field(a.field)),
                      null === h && r instanceof gu && (h = r.field(a.field)),
                      o.push(
                        ((i = h),
                        (a = e),
                        (h = void 0),
                        (c = c) instanceof Is
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
                          : c instanceof Ts
                          ? Ns(c, i)
                          : c instanceof Ss
                          ? Os(c, i)
                          : ((c = ws((h = c), i)),
                            (i = Rs(c) + Rs(h.rn)),
                            Uo(c) && Uo(h.rn) ? Ho(i) : Wo(h.serializer, i)))
                      );
                  }
                  return o;
                })(t.fieldTransforms, n, e, r),
                r = ru(t, i.data(), r);
              return new gu(t.key, i.version, r, { ln: !0 });
            })(t, e, r, n)
          : ((e = e), Bs((t = t).cn, e) ? new mu(t.key, hi.min()) : e);
      }
      function Ks(t, e) {
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
                    (t instanceof Ts && e instanceof Ts) ||
                    (t instanceof Ss && e instanceof Ss)
                      ? jr(t.elements, e.elements, Do)
                      : t instanceof Ls && e instanceof Ls
                      ? Do(t.rn, e.rn)
                      : t instanceof Is && e instanceof Is)
                );
              }))
        );
      }
      function Hs(t) {
        return t instanceof gu ? t.version : hi.min();
      }
      var Ws,
        Ys,
        Xs = (h(Js, (Ys = Ie)), Js),
        Zs = (h(Qs, (Ws = Ie)), Qs);
      function Qs(t, e, n, r) {
        var i = this;
        return (
          ((i = Ws.call(this) || this).key = t),
          (i.data = e),
          (i.sn = n),
          (i.cn = r),
          (i.type = 1),
          i
        );
      }
      function Js(t, e, n) {
        var r = this;
        return (
          ((r = Ys.call(this) || this).key = t),
          (r.value = e),
          (r.cn = n),
          (r.type = 0),
          r
        );
      }
      function $s(t, e) {
        return (
          (n = t),
          (e = e instanceof gu ? e.data() : au.empty()),
          (r = new cu(e)),
          n.sn.fields.forEach(function (t) {
            var e;
            t.Y() ||
              (null !== (e = n.data.field(t)) ? r.set(t, e) : r.delete(t));
          }),
          r._n()
        );
        var n, r;
      }
      var tu,
        eu = (h(nu, (tu = Ie)), nu);
      function nu(t, e) {
        var n = this;
        return (
          ((n = tu.call(this) || this).key = t),
          (n.fieldTransforms = e),
          (n.type = 2),
          (n.cn = qs.exists(!0)),
          n
        );
      }
      function ru(t, e, n) {
        for (var r = new cu(e), i = 0; i < t.fieldTransforms.length; i++) {
          var o = t.fieldTransforms[i];
          r.set(o.field, n[i]);
        }
        return r._n();
      }
      var iu,
        ou,
        su = (h(pu, (ou = Ie)), pu),
        uu = (h(lu, (iu = Ie)), lu),
        au =
          ((fu.empty = function () {
            return new fu({ mapValue: {} });
          }),
          (fu.prototype.field = function (t) {
            if (t.Y()) return this.proto;
            for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
              if (!e.mapValue.fields) return null;
              if (!Bo((e = e.mapValue.fields[t.get(n)]))) return null;
            }
            return (e = (e.mapValue.fields || {})[t.J()]) || null;
          }),
          (fu.prototype.isEqual = function (t) {
            return Do(this.proto, t.proto);
          }),
          fu),
        cu =
          ((hu.prototype.set = function (t, e) {
            return this.wn(t, e), this;
          }),
          (hu.prototype.delete = function (t) {
            return this.wn(t, null), this;
          }),
          (hu.prototype.wn = function (t, e) {
            for (var n = this.dn, r = 0; r < t.length - 1; ++r)
              var i = t.get(r),
                o = n.get(i),
                n =
                  (o instanceof Map ||
                    ((o =
                      o && 10 === So(o)
                        ? new Map(Object.entries(o.mapValue.fields || {}))
                        : new Map()),
                    n.set(i, o)),
                  o);
            n.set(t.J(), e);
          }),
          (hu.prototype._n = function () {
            var t = this.En(pi.st(), this.dn);
            return null != t ? new au(t) : this.fn;
          }),
          (hu.prototype.En = function (r, t) {
            var i = this,
              o = !1,
              e = this.fn.field(r),
              s = Bo(e) ? Object.assign({}, e.mapValue.fields) : {};
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
          hu);
      function hu(t) {
        void 0 === t && (t = au.empty()), (this.fn = t), (this.dn = new Map());
      }
      function fu(t) {
        this.proto = t;
      }
      function lu(t, e) {
        var n = this;
        return (
          ((n = iu.call(this) || this).key = t), (n.cn = e), (n.type = 4), n
        );
      }
      function pu(t, e) {
        var n = this;
        return (
          ((n = ou.call(this) || this).key = t), (n.cn = e), (n.type = 3), n
        );
      }
      var du,
        yu,
        vu,
        Te = function (t, e) {
          (this.key = t), (this.version = e);
        },
        gu =
          (h(Tu, (vu = Te)),
          (Tu.prototype.field = function (t) {
            return this.Tn.field(t);
          }),
          (Tu.prototype.data = function () {
            return this.Tn;
          }),
          (Tu.prototype.mn = function () {
            return this.Tn.proto;
          }),
          (Tu.prototype.isEqual = function (t) {
            return (
              t instanceof Tu &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.ln === t.ln &&
              this.hasCommittedMutations === t.hasCommittedMutations &&
              this.Tn.isEqual(t.Tn)
            );
          }),
          (Tu.prototype.toString = function () {
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
          Object.defineProperty(Tu.prototype, 'hasPendingWrites', {
            get: function () {
              return this.ln || this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0
          }),
          Tu),
        mu =
          (h(Iu, (yu = Te)),
          (Iu.prototype.toString = function () {
            return 'NoDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(Iu.prototype, 'hasPendingWrites', {
            get: function () {
              return this.hasCommittedMutations;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Iu.prototype.isEqual = function (t) {
            return (
              t instanceof Iu &&
              t.hasCommittedMutations === this.hasCommittedMutations &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          Iu),
        wu =
          (h(Eu, (du = Te)),
          (Eu.prototype.toString = function () {
            return 'UnknownDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(Eu.prototype, 'hasPendingWrites', {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Eu.prototype.isEqual = function (t) {
            return (
              t instanceof Eu &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          Eu),
        bu = function (t, e, n, r, i, o, s, u) {
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
      function Eu() {
        return (null !== du && du.apply(this, arguments)) || this;
      }
      function Iu(t, e, n) {
        var r = this;
        return (
          ((r = yu.call(this, t, e) || this).hasCommittedMutations = !(
            !n || !n.hasCommittedMutations
          )),
          r
        );
      }
      function Tu(t, e, n, r) {
        var i = this;
        return (
          ((i = vu.call(this, t, e) || this).Tn = n),
          (i.ln = !!r.ln),
          (i.hasCommittedMutations = !!r.hasCommittedMutations),
          i
        );
      }
      function _u(t, e, n, r, i, o, s, u) {
        return new bu(t, e, n, r, i, o, s, u);
      }
      function Au(t) {
        return new bu(t);
      }
      function Nu(t) {
        return !Ai(t.limit) && 'F' === t.limitType;
      }
      function xu(t) {
        return !Ai(t.limit) && 'L' === t.limitType;
      }
      function Su(t) {
        return 0 < t.In.length ? t.In[0].field : null;
      }
      function Du(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.Pn()) return r.field;
        }
        return null;
      }
      function Ou(t) {
        return null !== t.collectionGroup;
      }
      function ku(t) {
        var e = t;
        if (null === e.An) {
          e.An = [];
          var n = Du(e),
            t = Su(e);
          if (null !== n && null === t)
            n.rt() || e.An.push(new da(n)), e.An.push(new da(pi.ot(), 'asc'));
          else {
            for (var r = !1, i = 0, o = e.In; i < o.length; i++) {
              var s = o[i];
              e.An.push(s), s.field.rt() && (r = !0);
            }
            r ||
              ((n = 0 < e.In.length ? e.In[e.In.length - 1].dir : 'asc'),
              e.An.push(new da(pi.ot(), n)));
          }
        }
        return e.An;
      }
      function Lu(t) {
        var e = t;
        if (!e.Rn)
          if ('F' === e.limitType)
            e.Rn = Di(
              e.path,
              e.collectionGroup,
              ku(e),
              e.filters,
              e.limit,
              e.startAt,
              e.endAt
            );
          else {
            for (var n = [], r = 0, i = ku(e); r < i.length; r++) {
              var o = i[r],
                s = 'desc' === o.dir ? 'asc' : 'desc';
              n.push(new da(o.field, s));
            }
            var u = e.endAt ? new sa(e.endAt.position, !e.endAt.before) : null,
              t = e.startAt
                ? new sa(e.startAt.position, !e.startAt.before)
                : null;
            e.Rn = Di(e.path, e.collectionGroup, n, e.filters, e.limit, u, t);
          }
        return e.Rn;
      }
      function Pu(t, e, n) {
        return new bu(
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
      function Ru(t, e) {
        return ki(Lu(t), Lu(e)) && t.limitType === e.limitType;
      }
      function Cu(t) {
        return Oi(Lu(t)) + '|lt:' + t.limitType;
      }
      function Vu(t) {
        return (
          'Query(target=' +
          ((e = Lu(t)),
          (n = e.path.et()),
          null !== e.collectionGroup &&
            (n += ' collectionGroup=' + e.collectionGroup),
          0 < e.filters.length &&
            (n +=
              ', filters: [' +
              e.filters
                .map(function (t) {
                  return (t = t).field.et() + ' ' + t.op + ' ' + Po(t.value);
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
          e.startAt && (n += ', startAt: ' + fa(e.startAt)),
          e.endAt && (n += ', endAt: ' + fa(e.endAt)),
          'Target(' + n + ')') +
          '; limitType=' +
          t.limitType +
          ')'
        );
        var e, n;
      }
      function Mu(i, t) {
        return (
          (e = i),
          (n = t.key.path),
          (null !== e.collectionGroup
            ? t.key.ht(e.collectionGroup) && e.path.X(n)
            : di.lt(e.path)
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
            (!(t = i).startAt || la(t.startAt, ku(t), n)) &&
              (!t.endAt || !la(t.endAt, ku(t), n)))
        );
        var e, n;
      }
      function Uu(u) {
        return function (t, e) {
          for (var n = !1, r = 0, i = ku(u); r < i.length; r++) {
            var o = i[r],
              s = (function (t, r, e) {
                e = t.field.rt()
                  ? di.K(r.key, e.key)
                  : (function (t, e) {
                      var n = r.field(t),
                        t = e.field(t);
                      return null !== n && null !== t ? ko(n, t) : Rr();
                    })(t.field, e);
                switch (t.dir) {
                  case 'asc':
                    return e;
                  case 'desc':
                    return -1 * e;
                  default:
                    return Rr();
                }
              })(o, t, e);
            if (0 !== s) return s;
            n = n || o.field.rt();
          }
          return 0;
        };
      }
      var ju,
        qu =
          (h(Fu, (ju = function () {})),
          (Fu.create = function (t, e, n) {
            return t.rt()
              ? 'in' === e || 'not-in' === e
                ? this.yn(t, e, n)
                : new Ku(t, e, n)
              : 'array-contains' === e
              ? new na(t, n)
              : 'in' === e
              ? new ra(t, n)
              : 'not-in' === e
              ? new ia(t, n)
              : 'array-contains-any' === e
              ? new oa(t, n)
              : new Fu(t, e, n);
          }),
          (Fu.yn = function (t, e, n) {
            return new ('in' === e ? Hu : Wu)(t, n);
          }),
          (Fu.prototype.matches = function (t) {
            t = t.field(this.field);
            return '!=' === this.op
              ? null !== t && this.gn(ko(t, this.value))
              : null !== t &&
                  So(this.value) === So(t) &&
                  this.gn(ko(t, this.value));
          }),
          (Fu.prototype.gn = function (t) {
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
                return Rr();
            }
          }),
          (Fu.prototype.Pn = function () {
            return 0 <= ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op);
          }),
          Fu);
      function Fu(t, e, n) {
        var r = this;
        return (
          ((r = ju.call(this) || this).field = t), (r.op = e), (r.value = n), r
        );
      }
      var Bu,
        zu,
        Gu,
        Ku =
          (h(Zu, (Gu = qu)),
          (Zu.prototype.matches = function (t) {
            t = di.K(t.key, this.key);
            return this.gn(t);
          }),
          Zu),
        Hu =
          (h(Xu, (zu = qu)),
          (Xu.prototype.matches = function (e) {
            return this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          Xu),
        Wu =
          (h(Yu, (Bu = qu)),
          (Yu.prototype.matches = function (e) {
            return !this.keys.some(function (t) {
              return t.isEqual(e.key);
            });
          }),
          Yu);
      function Yu(t, e) {
        var n = this;
        return ((n = Bu.call(this, t, 'not-in', e) || this).keys = Qu(0, e)), n;
      }
      function Xu(t, e) {
        var n = this;
        return ((n = zu.call(this, t, 'in', e) || this).keys = Qu(0, e)), n;
      }
      function Zu(t, e, n) {
        var r = this;
        return (
          ((r = Gu.call(this, t, e, n) || this).key = di.ut(n.referenceValue)),
          r
        );
      }
      function Qu(t, e) {
        return (
          (null === (e = e.arrayValue) || void 0 === e ? void 0 : e.values) ||
          []
        ).map(function (t) {
          return di.ut(t.referenceValue);
        });
      }
      var Ju,
        $u,
        ta,
        ea,
        na =
          (h(ha, (ea = qu)),
          (ha.prototype.matches = function (t) {
            t = t.field(this.field);
            return jo(t) && Oo(t.arrayValue, this.value);
          }),
          ha),
        ra =
          (h(ca, (ta = qu)),
          (ca.prototype.matches = function (t) {
            t = t.field(this.field);
            return null !== t && Oo(this.value.arrayValue, t);
          }),
          ca),
        ia =
          (h(aa, ($u = qu)),
          (aa.prototype.matches = function (t) {
            if (Oo(this.value.arrayValue, { nullValue: 'NULL_VALUE' }))
              return !1;
            t = t.field(this.field);
            return null !== t && !Oo(this.value.arrayValue, t);
          }),
          aa),
        oa =
          (h(ua, (Ju = qu)),
          (ua.prototype.matches = function (t) {
            var e = this,
              t = t.field(this.field);
            return (
              !(!jo(t) || !t.arrayValue.values) &&
              t.arrayValue.values.some(function (t) {
                return Oo(e.value.arrayValue, t);
              })
            );
          }),
          ua),
        sa = function (t, e) {
          (this.position = t), (this.before = e);
        };
      function ua(t, e) {
        return Ju.call(this, t, 'array-contains-any', e) || this;
      }
      function aa(t, e) {
        return $u.call(this, t, 'not-in', e) || this;
      }
      function ca(t, e) {
        return ta.call(this, t, 'in', e) || this;
      }
      function ha(t, e) {
        return ea.call(this, t, 'array-contains', e) || this;
      }
      function fa(t) {
        return (t.before ? 'b' : 'a') + ':' + t.position.map(Po).join(',');
      }
      function la(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
            s = t.position[i],
            r = o.field.rt()
              ? di.K(di.ut(s.referenceValue), n.key)
              : ko(s, n.field(o.field));
          if (('desc' === o.dir && (r *= -1), 0 !== r)) break;
        }
        return t.before ? r <= 0 : r < 0;
      }
      function pa(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length)
          return !1;
        for (var n = 0; n < t.position.length; n++)
          if (!Do(t.position[n], e.position[n])) return !1;
        return !0;
      }
      var da = function (t, e) {
        void 0 === e && (e = 'asc'), (this.field = t), (this.dir = e);
      };
      var ya =
          ((ka.prototype.pn = function (t, e, n) {
            for (var r = n.bn, i = 0; i < this.mutations.length; i++) {
              var o = this.mutations[i];
              o.key.isEqual(t) && (e = zs(o, e, r[i]));
            }
            return e;
          }),
          (ka.prototype.vn = function (t, e) {
            for (var n = 0, r = this.baseMutations; n < r.length; n++) {
              var i = r[n];
              i.key.isEqual(t) && (e = Gs(i, e, e, this.Vn));
            }
            for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
              var a = u[s];
              a.key.isEqual(t) && (e = Gs(a, e, o, this.Vn));
            }
            return e;
          }),
          (ka.prototype.Sn = function (n) {
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
          (ka.prototype.keys = function () {
            return this.mutations.reduce(function (t, e) {
              return t.add(e.key);
            }, to());
          }),
          (ka.prototype.isEqual = function (t) {
            return (
              this.batchId === t.batchId &&
              jr(this.mutations, t.mutations, Ks) &&
              jr(this.baseMutations, t.baseMutations, Ks)
            );
          }),
          ka),
        va =
          ((Oa.from = function (t, e, n) {
            Cr(t.mutations.length === n.length);
            for (var r = Ji, i = t.mutations, o = 0; o < i.length; o++)
              r = r.At(i[o].key, n[o].version);
            return new Oa(t, e, n, r);
          }),
          Oa),
        ga =
          ((Da.prototype.get = function (t) {
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
          (Da.prototype.has = function (t) {
            return void 0 !== this.get(t);
          }),
          (Da.prototype.set = function (t, e) {
            var n = this.xn(t),
              r = this.Fn[n];
            if (void 0 !== r) {
              for (var i = 0; i < r.length; i++)
                if (this.Nn(r[i][0], t)) return void (r[i] = [t, e]);
              r.push([t, e]);
            } else this.Fn[n] = [[t, e]];
          }),
          (Da.prototype.delete = function (t) {
            var e = this.xn(t),
              n = this.Fn[e];
            if (void 0 === n) return !1;
            for (var r = 0; r < n.length; r++)
              if (this.Nn(n[r][0], t))
                return 1 === n.length ? delete this.Fn[e] : n.splice(r, 1), !0;
            return !1;
          }),
          (Da.prototype.forEach = function (s) {
            To(this.Fn, function (t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  i = i[1];
                s(o, i);
              }
            });
          }),
          (Da.prototype.Y = function () {
            return _o(this.Fn);
          }),
          Da),
        ma =
          ((Sa.prototype.catch = function (t) {
            return this.next(void 0, t);
          }),
          (Sa.prototype.next = function (r, i) {
            var o = this;
            return (
              this.Ln && Rr(),
              (this.Ln = !0),
              this.Mn
                ? this.error
                  ? this.$n(i, this.error)
                  : this.Bn(r, this.result)
                : new Sa(function (e, n) {
                    (o.On = function (t) {
                      o.Bn(r, t).next(e, n);
                    }),
                      (o.kn = function (t) {
                        o.$n(i, t).next(e, n);
                      });
                  })
            );
          }),
          (Sa.prototype.qn = function () {
            var n = this;
            return new Promise(function (t, e) {
              n.next(t, e);
            });
          }),
          (Sa.prototype.Un = function (t) {
            try {
              var e = t();
              return e instanceof Sa ? e : Sa.resolve(e);
            } catch (t) {
              return Sa.reject(t);
            }
          }),
          (Sa.prototype.Bn = function (t, e) {
            return t
              ? this.Un(function () {
                  return t(e);
                })
              : Sa.resolve(e);
          }),
          (Sa.prototype.$n = function (t, e) {
            return t
              ? this.Un(function () {
                  return t(e);
                })
              : Sa.reject(e);
          }),
          (Sa.resolve = function (n) {
            return new Sa(function (t, e) {
              t(n);
            });
          }),
          (Sa.reject = function (n) {
            return new Sa(function (t, e) {
              e(n);
            });
          }),
          (Sa.Qn = function (t) {
            return new Sa(function (e, n) {
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
          (Sa.Kn = function (t) {
            for (var n = Sa.resolve(!1), e = 0, r = t; e < r.length; e++)
              !(function (e) {
                n = n.next(function (t) {
                  return t ? Sa.resolve(t) : e();
                });
              })(r[e]);
            return n;
          }),
          (Sa.forEach = function (t, n) {
            var r = this,
              i = [];
            return (
              t.forEach(function (t, e) {
                i.push(n.call(r, t, e));
              }),
              this.Qn(i)
            );
          }),
          Sa),
        o =
          ((xa.prototype.Gn = function (t) {
            t = this.Wn.get(t);
            return t ? t.readTime : hi.min();
          }),
          (xa.prototype.zn = function (t, e) {
            this.Hn(), this.Wn.set(t.key, { Jn: t, readTime: e });
          }),
          (xa.prototype.Yn = function (t, e) {
            void 0 === e && (e = null),
              this.Hn(),
              this.Wn.set(t, { Jn: null, readTime: e });
          }),
          (xa.prototype.Xn = function (t, e) {
            this.Hn();
            var n = this.Wn.get(e);
            return void 0 !== n ? ma.resolve(n.Jn) : this.Zn(t, e);
          }),
          (xa.prototype.getEntries = function (t, e) {
            return this.ts(t, e);
          }),
          (xa.prototype.apply = function (t) {
            return this.Hn(), (this.jn = !0), this.es(t);
          }),
          (xa.prototype.Hn = function () {}),
          xa),
        wa =
          'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.',
        Ie =
          ((Na.prototype.ss = function (t) {
            this.ns.push(t);
          }),
          (Na.prototype.rs = function () {
            this.ns.forEach(function (t) {
              return t();
            });
          }),
          Na),
        ba =
          ((Aa.prototype.hs = function (e, n) {
            var r = this;
            return this.cs.ls(e, n).next(function (t) {
              return r._s(e, n, t);
            });
          }),
          (Aa.prototype._s = function (t, r, i) {
            return this.os.Xn(t, r).next(function (t) {
              for (var e = 0, n = i; e < n.length; e++) t = n[e].vn(r, t);
              return t;
            });
          }),
          (Aa.prototype.fs = function (t, e, i) {
            var o = Yi;
            return (
              e.forEach(function (t, e) {
                for (var n = 0, r = i; n < r.length; n++) e = r[n].vn(t, e);
                o = o.At(t, e);
              }),
              o
            );
          }),
          (Aa.prototype.ds = function (e, t) {
            var n = this;
            return this.os.getEntries(e, t).next(function (t) {
              return n.ws(e, t);
            });
          }),
          (Aa.prototype.ws = function (e, r) {
            var i = this;
            return this.cs.Es(e, r).next(function (t) {
              var t = i.fs(e, r, t),
                n = Yi;
              return (
                t.forEach(function (t, e) {
                  (e = e || new mu(t, hi.min())), (n = n.At(t, e));
                }),
                n
              );
            });
          }),
          (Aa.prototype.Ts = function (t, e, n) {
            return (
              (r = e),
              di.lt(r.path) &&
              null === r.collectionGroup &&
              0 === r.filters.length
                ? this.Is(t, e.path)
                : Ou(e)
                ? this.As(t, e, n)
                : this.Rs(t, e, n)
            );
            var r;
          }),
          (Aa.prototype.Is = function (t, e) {
            return this.hs(t, new di(e)).next(function (t) {
              var e = Qi;
              return t instanceof gu && (e = e.At(t.key, t)), e;
            });
          }),
          (Aa.prototype.As = function (n, r, i) {
            var o = this,
              s = r.collectionGroup,
              u = Qi;
            return this.us.Ps(n, s).next(function (t) {
              return ma
                .forEach(t, function (t) {
                  var e,
                    e =
                      ((e = r),
                      (t = t.child(s)),
                      new bu(
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
          (Aa.prototype.Rs = function (e, n, t) {
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
                          a = Gs(s, a, a, r.Vn);
                        c = a instanceof gu ? c.At(u, a) : c.remove(u);
                      }
                  })
                );
              })
              .next(function () {
                return (
                  c.forEach(function (t, e) {
                    Mu(n, e) || (c = c.remove(t));
                  }),
                  c
                );
              });
          }),
          (Aa.prototype.gs = function (t, e, n) {
            for (var r = to(), i = 0, o = e; i < o.length; i++)
              for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                var a = u[s];
                a instanceof Zs && null === n.get(a.key) && (r = r.add(a.key));
              }
            var c = n;
            return this.os.getEntries(t, r).next(function (t) {
              return (
                t.forEach(function (t, e) {
                  null !== e && e instanceof gu && (c = c.At(t, e));
                }),
                c
              );
            });
          }),
          Aa),
        Ea =
          ((_a.bs = function (t, e) {
            for (
              var n = to(), r = to(), i = 0, o = e.docChanges;
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
            return new _a(t, e.fromCache, n, r);
          }),
          _a),
        Ia =
          ((Ta.prototype.Ss = function (t) {
            return (
              (this.previousValue = Math.max(t, this.previousValue)),
              this.previousValue
            );
          }),
          (Ta.prototype.next = function () {
            var t = ++this.previousValue;
            return this.Ds && this.Ds(t), t;
          }),
          Ta);
      function Ta(t, e) {
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
      function _a(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.Vs = n), (this.ps = r);
      }
      function Aa(t, e, n) {
        (this.os = t), (this.cs = e), (this.us = n);
      }
      function Na() {
        this.ns = [];
      }
      function xa() {
        (this.Wn = new ga(
          function (t) {
            return t.toString();
          },
          function (t, e) {
            return t.isEqual(e);
          }
        )),
          (this.jn = !1);
      }
      function Sa(t) {
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
      function Da(t, e) {
        (this.xn = t), (this.Nn = e), (this.Fn = {});
      }
      function Oa(t, e, n, r) {
        (this.batch = t), (this.Dn = e), (this.bn = n), (this.Cn = r);
      }
      function ka(t, e, n, r) {
        (this.batchId = t),
          (this.Vn = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      Ia.xs = -1;
      var La,
        Pa = function () {
          var n = this;
          this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          });
        },
        Ra =
          ((Fa.prototype.reset = function () {
            this.Ls = 0;
          }),
          (Fa.prototype.qs = function () {
            this.Ls = this.Ms;
          }),
          (Fa.prototype.Us = function (t) {
            var e = this;
            this.cancel();
            var n = Math.floor(this.Ls + this.Qs()),
              r = Math.max(0, Date.now() - this.Bs),
              i = Math.max(0, n - r);
            0 < i &&
              Or(
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
          (Fa.prototype.Ws = function () {
            null !== this.$s && (this.$s.js(), (this.$s = null));
          }),
          (Fa.prototype.cancel = function () {
            null !== this.$s && (this.$s.cancel(), (this.$s = null));
          }),
          (Fa.prototype.Qs = function () {
            return (Math.random() - 0.5) * this.Ls;
          }),
          Fa),
        Ca =
          ((qa.delete = function (t) {
            return (
              Or('SimpleDb', 'Removing database:', t),
              Wa(window.indexedDB.deleteDatabase(t)).qn()
            );
          }),
          (qa.Hs = function () {
            if ('undefined' == typeof indexedDB) return !1;
            if (qa.Js()) return !0;
            var t = p(),
              e = qa.zs(t),
              n = 0 < e && e < 10,
              e = qa.Ys(t),
              e = 0 < e && e < 4.5;
            return !(
              0 < t.indexOf('MSIE ') ||
              0 < t.indexOf('Trident/') ||
              0 < t.indexOf('Edge/') ||
              n ||
              e
            );
          }),
          (qa.Js = function () {
            var t;
            return (
              'undefined' != typeof process &&
              'YES' ===
                (null === (t = process.env) || void 0 === t ? void 0 : t.Xs)
            );
          }),
          (qa.Zs = function (t, e) {
            return t.store(e);
          }),
          (qa.zs = function (t) {
            (t = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i)),
              (t = t ? t[1].split('_').slice(0, 2).join('.') : '-1');
            return Number(t);
          }),
          (qa.Ys = function (t) {
            (t = t.match(/Android ([\d.]+)/i)),
              (t = t ? t[1].split('.').slice(0, 2).join('.') : '-1');
            return Number(t);
          }),
          (qa.prototype.ti = function (o) {
            return y(this, void 0, void 0, function () {
              var e,
                i = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.db
                      ? [3, 2]
                      : (Or('SimpleDb', 'Opening database:', this.name),
                        (e = this),
                        [
                          4,
                          new Promise(function (e, n) {
                            var r = indexedDB.open(i.name, i.version);
                            (r.onsuccess = function (t) {
                              t = t.target.result;
                              e(t);
                            }),
                              (r.onblocked = function () {
                                n(
                                  new Ma(
                                    o,
                                    'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
                                  )
                                );
                              }),
                              (r.onerror = function (t) {
                                t = t.target.error;
                                'VersionError' === t.name
                                  ? n(
                                      new Nr(
                                        Ar.FAILED_PRECONDITION,
                                        'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
                                      )
                                    )
                                  : n(new Ma(o, t));
                              }),
                              (r.onupgradeneeded = function (t) {
                                Or(
                                  'SimpleDb',
                                  'Database "' +
                                    i.name +
                                    '" requires upgrade from version:',
                                  t.oldVersion
                                );
                                var e = t.target.result;
                                i.Gs.createOrUpgrade(
                                  e,
                                  r.transaction,
                                  t.oldVersion,
                                  i.version
                                ).next(function () {
                                  Or(
                                    'SimpleDb',
                                    'Database upgrade to version ' +
                                      i.version +
                                      ' complete'
                                  );
                                });
                              });
                          })
                        ]);
                  case 1:
                    (e.db = t.sent()), (t.label = 2);
                  case 2:
                    return [
                      2,
                      (this.ei &&
                        (this.db.onversionchange = function (t) {
                          return i.ei(t);
                        }),
                      this.db)
                    ];
                }
              });
            });
          }),
          (qa.prototype.ni = function (e) {
            (this.ei = e),
              this.db &&
                (this.db.onversionchange = function (t) {
                  return e(t);
                });
          }),
          (qa.prototype.runTransaction = function (u, n, a, c) {
            return y(this, void 0, void 0, function () {
              var i, o, s, e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    (i = 'readonly' === n),
                      (o = 0),
                      (e = function () {
                        var e, n, r;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              ++o, (t.label = 1);
                            case 1:
                              return t.trys.push([1, 4, , 5]), [4, s.ti(u)];
                            case 2:
                              return (
                                (s.db = t.sent()),
                                (e = za.open(
                                  s.db,
                                  u,
                                  i ? 'readonly' : 'readwrite',
                                  a
                                )),
                                (n = c(e)
                                  .catch(function (t) {
                                    return e.abort(t), ma.reject(t);
                                  })
                                  .qn()),
                                (r = {}),
                                n.catch(function () {}),
                                [4, e.si]
                              );
                            case 3:
                              return [2, ((r.value = (t.sent(), n)), r)];
                            case 4:
                              return (
                                (n = t.sent()),
                                (r = 'FirebaseError' !== n.name && o < 3),
                                Or(
                                  'SimpleDb',
                                  'Transaction failed with error:',
                                  n.message,
                                  'Retrying:',
                                  r
                                ),
                                s.close(),
                                r ? [3, 5] : [2, { value: Promise.reject(n) }]
                              );
                            case 5:
                              return [2];
                          }
                        });
                      }),
                      (s = this),
                      (t.label = 1);
                  case 1:
                    return [5, e()];
                  case 2:
                    if ('object' == typeof (e = t.sent())) return [2, e.value];
                    t.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (qa.prototype.close = function () {
            this.db && this.db.close(), (this.db = void 0);
          }),
          qa),
        Va =
          (Object.defineProperty(ja.prototype, 'Mn', {
            get: function () {
              return this.ri;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ja.prototype, 'ci', {
            get: function () {
              return this.oi;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ja.prototype, 'cursor', {
            set: function (t) {
              this.ii = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ja.prototype.done = function () {
            this.ri = !0;
          }),
          (ja.prototype.ai = function (t) {
            this.oi = t;
          }),
          (ja.prototype.delete = function () {
            return Wa(this.ii.delete());
          }),
          ja),
        Ma = (h(Ua, (La = Nr)), Ua);
      function Ua(t, e) {
        var n = this;
        return (
          ((n =
            La.call(
              this,
              Ar.UNAVAILABLE,
              "IndexedDB transaction '" + t + "' failed: " + e
            ) || this).name = 'IndexedDbTransactionError'),
          n
        );
      }
      function ja(t) {
        (this.ii = t), (this.ri = !1), (this.oi = null);
      }
      function qa(t, e, n) {
        (this.name = t),
          (this.version = e),
          (this.Gs = n),
          12.2 === qa.zs(p()) &&
            kr(
              'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
            );
      }
      function Fa(t, e, n, r, i) {
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
      function Ba(t) {
        return 'IndexedDbTransactionError' === t.name;
      }
      var za =
          ((Ha.open = function (t, e, n, r) {
            try {
              return new Ha(e, t.transaction(r, n));
            } catch (t) {
              throw new Ma(e, t);
            }
          }),
          Object.defineProperty(Ha.prototype, 'si', {
            get: function () {
              return this.ui.promise;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ha.prototype.abort = function (t) {
            t && this.ui.reject(t),
              this.aborted ||
                (Or(
                  'SimpleDb',
                  'Aborting transaction:',
                  t ? t.message : 'Client-initiated abort'
                ),
                (this.aborted = !0),
                this.transaction.abort());
          }),
          (Ha.prototype.store = function (t) {
            t = this.transaction.objectStore(t);
            return new Ga(t);
          }),
          Ha),
        Ga =
          ((Ka.prototype.put = function (t, e) {
            t =
              void 0 !== e
                ? (Or('SimpleDb', 'PUT', this.store.name, t, e),
                  this.store.put(e, t))
                : (Or('SimpleDb', 'PUT', this.store.name, '<auto-key>', t),
                  this.store.put(t));
            return Wa(t);
          }),
          (Ka.prototype.add = function (t) {
            return (
              Or('SimpleDb', 'ADD', this.store.name, t, t),
              Wa(this.store.add(t))
            );
          }),
          (Ka.prototype.get = function (e) {
            var n = this;
            return Wa(this.store.get(e)).next(function (t) {
              return (
                void 0 === t && (t = null),
                Or('SimpleDb', 'GET', n.store.name, e, t),
                t
              );
            });
          }),
          (Ka.prototype.delete = function (t) {
            return (
              Or('SimpleDb', 'DELETE', this.store.name, t),
              Wa(this.store.delete(t))
            );
          }),
          (Ka.prototype.count = function () {
            return (
              Or('SimpleDb', 'COUNT', this.store.name), Wa(this.store.count())
            );
          }),
          (Ka.prototype.hi = function (t, e) {
            var e = this.cursor(this.options(t, e)),
              n = [];
            return this.li(e, function (t, e) {
              n.push(e);
            }).next(function () {
              return n;
            });
          }),
          (Ka.prototype._i = function (t, e) {
            Or('SimpleDb', 'DELETE ALL', this.store.name);
            e = this.options(t, e);
            e.fi = !1;
            e = this.cursor(e);
            return this.li(e, function (t, e, n) {
              return n.delete();
            });
          }),
          (Ka.prototype.di = function (t, e) {
            e ? (n = t) : ((n = {}), (e = t));
            var n = this.cursor(n);
            return this.li(n, e);
          }),
          (Ka.prototype.wi = function (r) {
            var t = this.cursor({});
            return new ma(function (n, e) {
              (t.onerror = function (t) {
                t = Xa(t.target.error);
                e(t);
              }),
                (t.onsuccess = function (t) {
                  var e = t.target.result;
                  e
                    ? r(e.primaryKey, e.value).next(function (t) {
                        t ? e.continue() : n();
                      })
                    : n();
                });
            });
          }),
          (Ka.prototype.li = function (t, i) {
            var o = [];
            return new ma(function (r, e) {
              (t.onerror = function (t) {
                e(t.target.error);
              }),
                (t.onsuccess = function (t) {
                  var e,
                    n = t.target.result;
                  n
                    ? ((e = new Va(n)),
                      (t = i(n.primaryKey, n.value, e)) instanceof ma &&
                        ((t = t.catch(function (t) {
                          return e.done(), ma.reject(t);
                        })),
                        o.push(t)),
                      e.Mn
                        ? r()
                        : null === e.ci
                        ? n.continue()
                        : n.continue(e.ci))
                    : r();
                });
            }).next(function () {
              return ma.Qn(o);
            });
          }),
          (Ka.prototype.options = function (t, e) {
            var n = void 0;
            return (
              void 0 !== t && ('string' == typeof t ? (n = t) : (e = t)),
              { index: n, range: e }
            );
          }),
          (Ka.prototype.cursor = function (t) {
            var e = 'next';
            if ((t.reverse && (e = 'prev'), t.index)) {
              var n = this.store.index(t.index);
              return t.fi
                ? n.openKeyCursor(t.range, e)
                : n.openCursor(t.range, e);
            }
            return this.store.openCursor(t.range, e);
          }),
          Ka);
      function Ka(t) {
        this.store = t;
      }
      function Ha(e, t) {
        var n = this;
        (this.action = e),
          (this.transaction = t),
          (this.aborted = !1),
          (this.ui = new Pa()),
          (this.transaction.oncomplete = function () {
            n.ui.resolve();
          }),
          (this.transaction.onabort = function () {
            t.error ? n.ui.reject(new Ma(e, t.error)) : n.ui.resolve();
          }),
          (this.transaction.onerror = function (t) {
            t = Xa(t.target.error);
            n.ui.reject(new Ma(e, t));
          });
      }
      function Wa(t) {
        return new ma(function (e, n) {
          (t.onsuccess = function (t) {
            t = t.target.result;
            e(t);
          }),
            (t.onerror = function (t) {
              t = Xa(t.target.error);
              n(t);
            });
        });
      }
      var Ya = !1;
      function Xa(t) {
        var e = Ca.zs(p());
        if (12.2 <= e && e < 13) {
          e =
            'An internal error was encountered in the Indexed Database server';
          if (0 <= t.message.indexOf(e)) {
            var n = new Nr(
              'internal',
              "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                e +
                "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
            );
            return (
              Ya ||
                ((Ya = !0),
                setTimeout(function () {
                  throw n;
                }, 0)),
              n
            );
          }
        }
        return t;
      }
      function Za() {
        return 'undefined' != typeof window ? window : null;
      }
      function Qa() {
        return 'undefined' != typeof document ? document : null;
      }
      var Ja =
          ((ec.Ai = function (t, e, n, r, i) {
            i = new ec(t, e, Date.now() + n, r, i);
            return i.start(n), i;
          }),
          (ec.prototype.start = function (t) {
            var e = this;
            this.Ri = setTimeout(function () {
              return e.Pi();
            }, t);
          }),
          (ec.prototype.js = function () {
            return this.Pi();
          }),
          (ec.prototype.cancel = function (t) {
            null !== this.Ri &&
              (this.clearTimeout(),
              this.Ii.reject(
                new Nr(
                  Ar.CANCELLED,
                  'Operation cancelled' + (t ? ': ' + t : '')
                )
              ));
          }),
          (ec.prototype.Pi = function () {
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
          (ec.prototype.clearTimeout = function () {
            null !== this.Ri &&
              (this.mi(this), clearTimeout(this.Ri), (this.Ri = null));
          }),
          ec),
        $a =
          (Object.defineProperty(tc.prototype, 'Ni', {
            get: function () {
              return this.pi;
            },
            enumerable: !1,
            configurable: !0
          }),
          (tc.prototype.yi = function (t) {
            this.enqueue(t);
          }),
          (tc.prototype.Fi = function (t) {
            this.Oi(), this.ki(t);
          }),
          (tc.prototype.Mi = function () {
            var t;
            this.pi ||
              ((this.pi = !0),
              (t = Qa()) &&
                'function' == typeof t.removeEventListener &&
                t.removeEventListener('visibilitychange', this.xi));
          }),
          (tc.prototype.enqueue = function (t) {
            return (
              this.Oi(), this.pi ? new Promise(function (t) {}) : this.ki(t)
            );
          }),
          (tc.prototype.Li = function (t) {
            var e = this;
            this.yi(function () {
              return e.Vi.push(t), e.$i();
            });
          }),
          (tc.prototype.$i = function () {
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
                    if (!Ba((e = t.sent()))) throw e;
                    return (
                      Or(
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
          (tc.prototype.ki = function (t) {
            var r = this,
              e = this.gi.then(function () {
                return (
                  (r.Si = !0),
                  t()
                    .catch(function (t) {
                      throw (
                        ((r.vi = t),
                        (r.Si = !1),
                        kr(
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
          (tc.prototype.Ks = function (t, e, n) {
            var r = this;
            this.Oi(), -1 < this.Di.indexOf(t) && (e = 0);
            n = Ja.Ai(this, t, e, n, function (t) {
              return r.Bi(t);
            });
            return this.bi.push(n), n;
          }),
          (tc.prototype.Oi = function () {
            this.vi && Rr();
          }),
          (tc.prototype.qi = function () {}),
          (tc.prototype.Ui = function () {
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
          (tc.prototype.Qi = function (t) {
            for (var e = 0, n = this.bi; e < n.length; e++)
              if (n[e].Fs === t) return !0;
            return !1;
          }),
          (tc.prototype.Ki = function (r) {
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
          (tc.prototype.Wi = function (t) {
            this.Di.push(t);
          }),
          (tc.prototype.Bi = function (t) {
            t = this.bi.indexOf(t);
            this.bi.splice(t, 1);
          }),
          tc);
      function tc() {
        var e = this;
        (this.gi = Promise.resolve()),
          (this.Vi = []),
          (this.pi = !1),
          (this.bi = []),
          (this.vi = null),
          (this.Si = !1),
          (this.Di = []),
          (this.Ci = new Ra(this, 'async_queue_retry')),
          (this.xi = function () {
            var t = Qa();
            t &&
              Or(
                'AsyncQueue',
                'Visibility state changed to ' + t.visibilityState
              ),
              e.Ci.Ws();
          });
        var t = Qa();
        t &&
          'function' == typeof t.addEventListener &&
          t.addEventListener('visibilitychange', this.xi);
      }
      function ec(t, e, n, r, i) {
        (this.Ei = t),
          (this.Fs = e),
          (this.Ti = n),
          (this.op = r),
          (this.mi = i),
          (this.Ii = new Pa()),
          (this.then = this.Ii.promise.then.bind(this.Ii.promise)),
          this.Ii.promise.catch(function (t) {});
      }
      function nc(t, e) {
        if ((kr('AsyncQueue', e + ': ' + t), Ba(t)))
          return new Nr(Ar.UNAVAILABLE, e + ': ' + t);
        throw t;
      }
      function rc(t, e) {
        var n = t[0],
          r = t[1],
          t = e[0],
          e = e[1],
          t = Ur(n, t);
        return 0 === t ? Ur(r, e) : t;
      }
      var ic =
          ((ac.prototype.zi = function () {
            return ++this.Gi;
          }),
          (ac.prototype.Hi = function (t) {
            var e = [t, this.zi()];
            this.buffer.size < this.ji
              ? (this.buffer = this.buffer.add(e))
              : rc(e, (t = this.buffer.last())) < 0 &&
                (this.buffer = this.buffer.delete(t).add(e));
          }),
          Object.defineProperty(ac.prototype, 'maxValue', {
            get: function () {
              return this.buffer.last()[0];
            },
            enumerable: !1,
            configurable: !0
          }),
          ac),
        oc = { Ji: !1, Yi: 0, Xi: 0, Zi: 0 },
        sc =
          ((uc.sr = function (t) {
            return new uc(t, uc.ir, uc.rr);
          }),
          uc);
      function uc(t, e, n) {
        (this.tr = t), (this.er = e), (this.nr = n);
      }
      function ac(t) {
        (this.ji = t), (this.buffer = new Hi(rc)), (this.Gi = 0);
      }
      (sc.ir = 10),
        (sc.rr = 1e3),
        (sc.cr = new sc(41943040, sc.ir, sc.rr)),
        (sc.ar = new sc(-1, 0, 0));
      var cc =
          ((dc.prototype.start = function (t) {
            -1 !== this.ur.params.tr && this._r(t);
          }),
          (dc.prototype.stop = function () {
            this.lr && (this.lr.cancel(), (this.lr = null));
          }),
          Object.defineProperty(dc.prototype, 'dr', {
            get: function () {
              return null !== this.lr;
            },
            enumerable: !1,
            configurable: !0
          }),
          (dc.prototype._r = function (n) {
            var t = this,
              e = this.hr ? 3e5 : 6e4;
            Or(
              'LruGarbageCollector',
              'Garbage collection scheduled in ' + e + 'ms'
            ),
              (this.lr = this.Ei.Ks('lru_garbage_collection', e, function () {
                return y(t, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        (this.lr = null), (this.hr = !0), (t.label = 1);
                      case 1:
                        return t.trys.push([1, 3, , 7]), [4, n.wr(this.ur)];
                      case 2:
                        return t.sent(), [3, 7];
                      case 3:
                        return Ba((e = t.sent()))
                          ? (Or(
                              'LruGarbageCollector',
                              'Ignoring IndexedDB error during garbage collection: ',
                              e
                            ),
                            [3, 6])
                          : [3, 4];
                      case 4:
                        return [4, vf(e)];
                      case 5:
                        t.sent(), (t.label = 6);
                      case 6:
                        return [3, 7];
                      case 7:
                        return [4, this._r(n)];
                      case 8:
                        return t.sent(), [2];
                    }
                  });
                });
              }));
          }),
          dc),
        hc =
          ((pc.prototype.Tr = function (t, e) {
            return this.Er.mr(t).next(function (t) {
              return Math.floor((e / 100) * t);
            });
          }),
          (pc.prototype.Ir = function (t, e) {
            var n = this;
            if (0 === e) return ma.resolve(Ia.xs);
            var r = new ic(e);
            return this.Er.Ke(t, function (t) {
              return r.Hi(t.sequenceNumber);
            })
              .next(function () {
                return n.Er.Ar(t, function (t) {
                  return r.Hi(t);
                });
              })
              .next(function () {
                return r.maxValue;
              });
          }),
          (pc.prototype.Rr = function (t, e, n) {
            return this.Er.Rr(t, e, n);
          }),
          (pc.prototype.Pr = function (t, e) {
            return this.Er.Pr(t, e);
          }),
          (pc.prototype.yr = function (e, n) {
            var r = this;
            return -1 === this.params.tr
              ? (Or(
                  'LruGarbageCollector',
                  'Garbage collection skipped; disabled'
                ),
                ma.resolve(oc))
              : this.gr(e).next(function (t) {
                  return t < r.params.tr
                    ? (Or(
                        'LruGarbageCollector',
                        'Garbage collection skipped; Cache size ' +
                          t +
                          ' is lower than threshold ' +
                          r.params.tr
                      ),
                      oc)
                    : r.Vr(e, n);
                });
          }),
          (pc.prototype.gr = function (t) {
            return this.Er.gr(t);
          }),
          (pc.prototype.Vr = function (e, n) {
            var r,
              i,
              o,
              s,
              u,
              a,
              c,
              h = this,
              f = Date.now();
            return this.Tr(e, this.params.er)
              .next(function (t) {
                return (
                  (i =
                    t > h.params.nr
                      ? (Or(
                          'LruGarbageCollector',
                          'Capping sequence numbers to collect down to the maximum of ' +
                            h.params.nr +
                            ' from ' +
                            t
                        ),
                        h.params.nr)
                      : t),
                  (s = Date.now()),
                  h.Ir(e, i)
                );
              })
              .next(function (t) {
                return (r = t), (u = Date.now()), h.Rr(e, r, n);
              })
              .next(function (t) {
                return (o = t), (a = Date.now()), h.Pr(e, r);
              })
              .next(function (t) {
                return (
                  (c = Date.now()),
                  Dr() <= l.DEBUG &&
                    Or(
                      'LruGarbageCollector',
                      'LRU Garbage Collection\n\tCounted targets in ' +
                        (s - f) +
                        'ms\n\tDetermined least recently used ' +
                        i +
                        ' in ' +
                        (u - s) +
                        'ms\n\tRemoved ' +
                        o +
                        ' targets in ' +
                        (a - u) +
                        'ms\n\tRemoved ' +
                        t +
                        ' documents in ' +
                        (c - a) +
                        'ms\nTotal Duration: ' +
                        (c - f) +
                        'ms'
                    ),
                  ma.resolve({ Ji: !0, Yi: i, Xi: o, Zi: t })
                );
              });
          }),
          pc),
        fc =
          ((lc.prototype.pr = function (t) {
            this.br = t;
          }),
          (lc.prototype.Ts = function (e, r, i, o) {
            var s = this;
            return (0 === r.filters.length &&
              null === r.limit &&
              null == r.startAt &&
              null == r.endAt &&
              (0 === r.In.length ||
                (1 === r.In.length && r.In[0].field.rt()))) ||
              i.isEqual(hi.min())
              ? this.vr(e, r)
              : this.br.ds(e, o).next(function (t) {
                  var n = s.Sr(r, t);
                  return (Nu(r) || xu(r)) && s.Dr(r.limitType, n, o, i)
                    ? s.vr(e, r)
                    : (Dr() <= l.DEBUG &&
                        Or(
                          'QueryEngine',
                          'Re-using previous result from %s to execute query: %s',
                          i.toString(),
                          Vu(r)
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
          (lc.prototype.Sr = function (n, t) {
            var r = new Hi(Uu(n));
            return (
              t.forEach(function (t, e) {
                e instanceof gu && Mu(n, e) && (r = r.add(e));
              }),
              r
            );
          }),
          (lc.prototype.Dr = function (t, e, n, r) {
            if (n.size !== e.size) return !0;
            e = 'F' === t ? e.last() : e.first();
            return !!e && (e.hasPendingWrites || 0 < e.version.u(r));
          }),
          (lc.prototype.vr = function (t, e) {
            return (
              Dr() <= l.DEBUG &&
                Or(
                  'QueryEngine',
                  'Using full collection scan to execute query:',
                  Vu(e)
                ),
              this.br.Ts(t, e, hi.min())
            );
          }),
          lc);
      function lc() {}
      function pc(t, e) {
        (this.Er = t), (this.params = e);
      }
      function dc(t, e) {
        (this.ur = t), (this.Ei = e), (this.hr = !1), (this.lr = null);
      }
      function yc(t) {
        for (var e = '', n = 0; n < t.length; n++)
          0 < e.length && (e = vc(e)),
            (e = (function (t, e) {
              for (var n = e, r = t.length, i = 0; i < r; i++) {
                var o = t.charAt(i);
                switch (o) {
                  case '\0':
                    n += '\x01\x10';
                    break;
                  case '\x01':
                    n += '\x01\x11';
                    break;
                  default:
                    n += o;
                }
              }
              return n;
            })(t.get(n), e));
        return vc(e);
      }
      function vc(t) {
        return t + '\x01\x01';
      }
      function gc(t) {
        var e = t.length;
        if ((Cr(2 <= e), 2 === e))
          return Cr('\x01' === t.charAt(0) && '\x01' === t.charAt(1)), fi.st();
        for (var n = e - 2, r = [], i = '', o = 0; o < e; ) {
          var s = t.indexOf('\x01', o);
          switch (((s < 0 || n < s) && Rr(), t.charAt(s + 1))) {
            case '\x01':
              var u = t.substring(o, s),
                a = void 0;
              0 === i.length ? (a = u) : ((a = i += u), (i = '')), r.push(a);
              break;
            case '\x10':
              (i += t.substring(o, s)), (i += '\0');
              break;
            case '\x11':
              i += t.substring(o, s + 1);
              break;
            default:
              Rr();
          }
          o = s + 2;
        }
        return new fi(r);
      }
      var mc = function (t) {
        this.Cr = t;
      };
      function wc(t, e) {
        if (e.document) return us(t.Cr, e.document, !!e.hasCommittedMutations);
        if (e.noDocument) {
          var n = di._t(e.noDocument.path),
            r = _c(e.noDocument.readTime);
          return new mu(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
          });
        }
        if (e.unknownDocument) {
          (n = di._t(e.unknownDocument.path)),
            (r = _c(e.unknownDocument.version));
          return new wu(n, r);
        }
        return Rr();
      }
      function bc(t, e, n) {
        var r = Ec(n),
          n = e.key.path.G().tt();
        if (e instanceof gu) {
          var i = {
              name: ts((o = t.Cr), (s = e).key),
              fields: s.mn().mapValue.fields,
              updateTime: Xo(o, s.version.q())
            },
            o = e.hasCommittedMutations;
          return new oh(null, null, i, o, r, n);
        }
        if (e instanceof mu) {
          var s = e.key.path.tt(),
            i = Tc(e.version),
            o = e.hasCommittedMutations;
          return new oh(null, new rh(s, i), null, o, r, n);
        }
        if (e instanceof wu) {
          (o = e.key.path.tt()), (e = Tc(e.version));
          return new oh(new ih(o, e), null, null, !0, r, n);
        }
        return Rr();
      }
      function Ec(t) {
        t = t.q();
        return [t.seconds, t.nanoseconds];
      }
      function Ic(t) {
        t = new ci(t[0], t[1]);
        return hi.$(t);
      }
      function Tc(t) {
        t = t.q();
        return new Yc(t.seconds, t.nanoseconds);
      }
      function _c(t) {
        t = new ci(t.seconds, t.nanoseconds);
        return hi.$(t);
      }
      function Ac(e, t) {
        var n = (t.baseMutations || []).map(function (t) {
            return cs(e.Cr, t);
          }),
          r = t.mutations.map(function (t) {
            return cs(e.Cr, t);
          }),
          i = ci.fromMillis(t.localWriteTimeMs);
        return new ya(t.batchId, i, n, r);
      }
      function Nc(t) {
        var e = _c(t.readTime),
          n =
            void 0 !== t.lastLimboFreeSnapshotVersion
              ? _c(t.lastLimboFreeSnapshotVersion)
              : hi.min(),
          r =
            void 0 !== t.query.documents
              ? (Cr(1 === (r = t.query).documents.length),
                Lu(Au(rs(r.documents[0]))))
              : Lu(ls(t.query));
        return new Ci(
          r,
          t.targetId,
          0,
          t.lastListenSequenceNumber,
          e,
          n,
          Fr.fromBase64String(t.resumeToken)
        );
      }
      function xc(t, e) {
        var n = Tc(e.wt),
          r = Tc(e.lastLimboFreeSnapshotVersion),
          i = (Li(e.target) ? hs : fs)(t.Cr, e.target),
          t = e.resumeToken.toBase64();
        return new uh(e.targetId, Oi(e.target), n, t, e.sequenceNumber, r, i);
      }
      function Sc(t) {
        var e = ls({ parent: t.parent, structuredQuery: t.structuredQuery });
        return 'LAST' === t.limitType ? Pu(e, e.limit, 'L') : e;
      }
      var Dc =
        ((Oc.Or = function (t, e, n, r) {
          return Cr('' !== t.uid), new Oc(t.A() ? t.uid : '', e, n, r);
        }),
        (Oc.prototype.kr = function (t) {
          var r = !0,
            e = IDBKeyRange.bound(
              [this.userId, Number.NEGATIVE_INFINITY],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return Pc(t)
            .di({ index: th.userMutationsIndex, range: e }, function (t, e, n) {
              (r = !1), n.done();
            })
            .next(function () {
              return r;
            });
        }),
        (Oc.prototype.Mr = function (d, y, v, g) {
          var m = this,
            w = Rc(d),
            b = Pc(d);
          return b.add({}).next(function (t) {
            Cr('number' == typeof t);
            for (
              var e,
                n,
                r,
                i,
                o,
                s = new ya(t, y, v, g),
                u =
                  ((e = m.serializer),
                  (n = m.userId),
                  (i = (r = s).baseMutations.map(function (t) {
                    return as(e.Cr, t);
                  })),
                  (o = r.mutations.map(function (t) {
                    return as(e.Cr, t);
                  })),
                  new th(n, r.batchId, r.Vn.toMillis(), i, o)),
                a = [],
                c = new Hi(function (t, e) {
                  return Ur(t.et(), e.et());
                }),
                h = 0,
                f = g;
              h < f.length;
              h++
            ) {
              var l = f[h],
                p = eh.key(m.userId, l.key.path, t),
                c = c.add(l.key.path.G());
              a.push(b.put(u)), a.push(w.put(p, eh.PLACEHOLDER));
            }
            return (
              c.forEach(function (t) {
                a.push(m.us.Lr(d, t));
              }),
              d.ss(function () {
                m.Fr[t] = s.keys();
              }),
              ma.Qn(a).next(function () {
                return s;
              })
            );
          });
        }),
        (Oc.prototype.$r = function (t, e) {
          var n = this;
          return Pc(t)
            .get(e)
            .next(function (t) {
              return t
                ? (Cr(t.userId === n.userId), Ac(n.serializer, t))
                : null;
            });
        }),
        (Oc.prototype.Br = function (t, e) {
          var n = this;
          return this.Fr[e]
            ? ma.resolve(this.Fr[e])
            : this.$r(t, e).next(function (t) {
                if (t) {
                  t = t.keys();
                  return (n.Fr[e] = t);
                }
                return null;
              });
        }),
        (Oc.prototype.qr = function (t, e) {
          var r = this,
            i = e + 1,
            e = IDBKeyRange.lowerBound([this.userId, i]),
            o = null;
          return Pc(t)
            .di({ index: th.userMutationsIndex, range: e }, function (t, e, n) {
              e.userId === r.userId &&
                (Cr(e.batchId >= i), (o = Ac(r.serializer, e))),
                n.done();
            })
            .next(function () {
              return o;
            });
        }),
        (Oc.prototype.Ur = function (t) {
          var e = IDBKeyRange.upperBound([
              this.userId,
              Number.POSITIVE_INFINITY
            ]),
            r = -1;
          return Pc(t)
            .di(
              { index: th.userMutationsIndex, range: e, reverse: !0 },
              function (t, e, n) {
                (r = e.batchId), n.done();
              }
            )
            .next(function () {
              return r;
            });
        }),
        (Oc.prototype.Qr = function (t) {
          var e = this,
            n = IDBKeyRange.bound(
              [this.userId, -1],
              [this.userId, Number.POSITIVE_INFINITY]
            );
          return Pc(t)
            .hi(th.userMutationsIndex, n)
            .next(function (t) {
              return t.map(function (t) {
                return Ac(e.serializer, t);
              });
            });
        }),
        (Oc.prototype.ls = function (o, s) {
          var u = this,
            t = eh.prefixForPath(this.userId, s.path),
            t = IDBKeyRange.lowerBound(t),
            a = [];
          return Rc(o)
            .di({ range: t }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = gc(i);
              if (r === u.userId && s.path.isEqual(i))
                return Pc(o)
                  .get(t)
                  .next(function (t) {
                    if (!t) throw Rr();
                    Cr(t.userId === u.userId), a.push(Ac(u.serializer, t));
                  });
              n.done();
            })
            .next(function () {
              return a;
            });
        }),
        (Oc.prototype.Es = function (e, t) {
          var s = this,
            u = new Hi(Ur),
            n = [];
          return (
            t.forEach(function (o) {
              var t = eh.prefixForPath(s.userId, o.path),
                t = IDBKeyRange.lowerBound(t),
                t = Rc(e).di({ range: t }, function (t, e, n) {
                  var r = t[0],
                    i = t[1],
                    t = t[2],
                    i = gc(i);
                  r === s.userId && o.path.isEqual(i)
                    ? (u = u.add(t))
                    : n.done();
                });
              n.push(t);
            }),
            ma.Qn(n).next(function () {
              return s.Kr(e, u);
            })
          );
        }),
        (Oc.prototype.ys = function (t, e) {
          var o = this,
            s = e.path,
            u = s.length + 1,
            e = eh.prefixForPath(this.userId, s),
            e = IDBKeyRange.lowerBound(e),
            a = new Hi(Ur);
          return Rc(t)
            .di({ range: e }, function (t, e, n) {
              var r = t[0],
                i = t[1],
                t = t[2],
                i = gc(i);
              r === o.userId && s.X(i)
                ? i.length === u && (a = a.add(t))
                : n.done();
            })
            .next(function () {
              return o.Kr(t, a);
            });
        }),
        (Oc.prototype.Kr = function (e, t) {
          var n = this,
            r = [],
            i = [];
          return (
            t.forEach(function (t) {
              i.push(
                Pc(e)
                  .get(t)
                  .next(function (t) {
                    if (null === t) throw Rr();
                    Cr(t.userId === n.userId), r.push(Ac(n.serializer, t));
                  })
              );
            }),
            ma.Qn(i).next(function () {
              return r;
            })
          );
        }),
        (Oc.prototype.Wr = function (e, n) {
          var r = this;
          return Lc(e.jr, this.userId, n).next(function (t) {
            return (
              e.ss(function () {
                r.Gr(n.batchId);
              }),
              ma.forEach(t, function (t) {
                return r.Nr.zr(e, t);
              })
            );
          });
        }),
        (Oc.prototype.Gr = function (t) {
          delete this.Fr[t];
        }),
        (Oc.prototype.Hr = function (e) {
          var i = this;
          return this.kr(e).next(function (t) {
            if (!t) return ma.resolve();
            var t = IDBKeyRange.lowerBound(eh.prefixForUser(i.userId)),
              r = [];
            return Rc(e)
              .di({ range: t }, function (t, e, n) {
                t[0] === i.userId ? ((t = gc(t[1])), r.push(t)) : n.done();
              })
              .next(function () {
                Cr(0 === r.length);
              });
          });
        }),
        (Oc.prototype.Jr = function (t, e) {
          return kc(t, this.userId, e);
        }),
        (Oc.prototype.Yr = function (t) {
          var e = this;
          return Cc(t)
            .get(this.userId)
            .next(function (t) {
              return t || new $c(e.userId, -1, '');
            });
        }),
        Oc);
      function Oc(t, e, n, r) {
        (this.userId = t),
          (this.serializer = e),
          (this.us = n),
          (this.Nr = r),
          (this.Fr = {});
      }
      function kc(t, o, e) {
        var e = eh.prefixForPath(o, e.path),
          s = e[1],
          e = IDBKeyRange.lowerBound(e),
          u = !1;
        return Rc(t)
          .di({ range: e, fi: !0 }, function (t, e, n) {
            var r = t[0],
              i = t[1];
            t[2], r === o && i === s && (u = !0), n.done();
          })
          .next(function () {
            return u;
          });
      }
      function Lc(t, e, n) {
        var r = t.store(th.store),
          i = t.store(eh.store),
          o = [],
          t = IDBKeyRange.only(n.batchId),
          s = 0,
          t = r.di({ range: t }, function (t, e, n) {
            return s++, n.delete();
          });
        o.push(
          t.next(function () {
            Cr(1 === s);
          })
        );
        for (var u = [], a = 0, c = n.mutations; a < c.length; a++) {
          var h = c[a],
            f = eh.key(e, h.key.path, n.batchId);
          o.push(i.delete(f)), u.push(h.key);
        }
        return ma.Qn(o).next(function () {
          return u;
        });
      }
      function Pc(t) {
        return Ph.Zs(t, th.store);
      }
      function Rc(t) {
        return Ph.Zs(t, eh.store);
      }
      function Cc(t) {
        return Ph.Zs(t, $c.store);
      }
      var Vc,
        Mc =
          ((qc.prototype.zn = function (t, e, n) {
            return Bc(t).put(zc(e), n);
          }),
          (qc.prototype.Yn = function (t, e) {
            (t = Bc(t)), (e = zc(e));
            return t.delete(e);
          }),
          (qc.prototype.updateMetadata = function (e, n) {
            var r = this;
            return this.getMetadata(e).next(function (t) {
              return (t.byteSize += n), r.Xr(e, t);
            });
          }),
          (qc.prototype.Xn = function (t, e) {
            var n = this;
            return Bc(t)
              .get(zc(e))
              .next(function (t) {
                return n.Zr(t);
              });
          }),
          (qc.prototype.eo = function (t, e) {
            var n = this;
            return Bc(t)
              .get(zc(e))
              .next(function (t) {
                var e = n.Zr(t);
                return e ? { Jn: e, size: Gc(t) } : null;
              });
          }),
          (qc.prototype.getEntries = function (t, e) {
            var n = this,
              r = Yi;
            return this.no(t, e, function (t, e) {
              e = n.Zr(e);
              r = r.At(t, e);
            }).next(function () {
              return r;
            });
          }),
          (qc.prototype.so = function (t, e) {
            var r = this,
              i = Yi,
              o = new ji(di.K);
            return this.no(t, e, function (t, e) {
              var n = r.Zr(e);
              o = n
                ? ((i = i.At(t, n)), o.At(t, Gc(e)))
                : ((i = i.At(t, null)), o.At(t, 0));
            }).next(function () {
              return { io: i, ro: o };
            });
          }),
          (qc.prototype.no = function (t, e, i) {
            if (e.Y()) return ma.resolve();
            var n = IDBKeyRange.bound(e.first().path.tt(), e.last().path.tt()),
              o = e.bt(),
              s = o.Nt();
            return Bc(t)
              .di({ range: n }, function (t, e, n) {
                for (var r = di._t(t); s && di.K(s, r) < 0; )
                  i(s, null), (s = o.Nt());
                s && s.isEqual(r) && (i(s, e), (s = o.Ft() ? o.Nt() : null)),
                  s ? n.ai(s.path.tt()) : n.done();
              })
              .next(function () {
                for (; s; ) i(s, null), (s = o.Ft() ? o.Nt() : null);
              });
          }),
          (qc.prototype.Ts = function (t, r, e) {
            var n,
              i = this,
              o = Qi,
              s = r.path.length + 1,
              u = {};
            return (
              e.isEqual(hi.min())
                ? ((n = r.path.tt()), (u.range = IDBKeyRange.lowerBound(n)))
                : ((n = r.path.tt()),
                  (e = Ec(e)),
                  (u.range = IDBKeyRange.lowerBound([n, e], !0)),
                  (u.index = oh.collectionReadTimeIndex)),
              Bc(t)
                .di(u, function (t, e, n) {
                  t.length === s &&
                    ((e = wc(i.serializer, e)),
                    r.path.X(e.key.path)
                      ? e instanceof gu && Mu(r, e) && (o = o.At(e.key, e))
                      : n.done());
                })
                .next(function () {
                  return o;
                })
            );
          }),
          (qc.prototype.oo = function (t) {
            return new Uc(this, !!t && t.co);
          }),
          (qc.prototype.ao = function (t) {
            return this.getMetadata(t).next(function (t) {
              return t.byteSize;
            });
          }),
          (qc.prototype.getMetadata = function (t) {
            return Fc(t)
              .get(sh.key)
              .next(function (t) {
                return Cr(!!t), t;
              });
          }),
          (qc.prototype.Xr = function (t, e) {
            return Fc(t).put(sh.key, e);
          }),
          (qc.prototype.Zr = function (t) {
            if (t) {
              t = wc(this.serializer, t);
              return t instanceof mu && t.version.isEqual(hi.min()) ? null : t;
            }
            return null;
          }),
          qc),
        Uc =
          (h(jc, (Vc = o)),
          (jc.prototype.es = function (i) {
            var o = this,
              s = [],
              u = 0,
              a = new Hi(function (t, e) {
                return Ur(t.et(), e.et());
              });
            return (
              this.Wn.forEach(function (t, e) {
                var n,
                  r = o.ho.get(t);
                e.Jn
                  ? ((n = bc(o.uo.serializer, e.Jn, o.Gn(t))),
                    (a = a.add(t.path.G())),
                    (e = Gc(n)),
                    (u += e - r),
                    s.push(o.uo.zn(i, t, n)))
                  : ((u -= r),
                    o.co
                      ? ((r = bc(
                          o.uo.serializer,
                          new mu(t, hi.min()),
                          o.Gn(t)
                        )),
                        s.push(o.uo.zn(i, t, r)))
                      : s.push(o.uo.Yn(i, t)));
              }),
              a.forEach(function (t) {
                s.push(o.uo.us.Lr(i, t));
              }),
              s.push(this.uo.updateMetadata(i, u)),
              ma.Qn(s)
            );
          }),
          (jc.prototype.Zn = function (t, e) {
            var n = this;
            return this.uo.eo(t, e).next(function (t) {
              return null === t
                ? (n.ho.set(e, 0), null)
                : (n.ho.set(e, t.size), t.Jn);
            });
          }),
          (jc.prototype.ts = function (t, e) {
            var n = this;
            return this.uo.so(t, e).next(function (t) {
              var e = t.io;
              return (
                t.ro.forEach(function (t, e) {
                  n.ho.set(t, e);
                }),
                e
              );
            });
          }),
          jc);
      function jc(t, e) {
        var n = this;
        return (
          ((n = Vc.call(this) || this).uo = t),
          (n.co = e),
          (n.ho = new ga(
            function (t) {
              return t.toString();
            },
            function (t, e) {
              return t.isEqual(e);
            }
          )),
          n
        );
      }
      function qc(t, e) {
        (this.serializer = t), (this.us = e);
      }
      function Fc(t) {
        return Ph.Zs(t, sh.store);
      }
      function Bc(t) {
        return Ph.Zs(t, oh.store);
      }
      function zc(t) {
        return t.path.tt();
      }
      function Gc(t) {
        var e;
        if (t.document) e = t.document;
        else if (t.unknownDocument) e = t.unknownDocument;
        else {
          if (!t.noDocument) throw Rr();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      var Kc =
          ((Jc.prototype.Lr = function (t, e) {
            return this.lo.add(e), ma.resolve();
          }),
          (Jc.prototype.Ps = function (t, e) {
            return ma.resolve(this.lo.getEntries(e));
          }),
          Jc),
        Hc =
          ((Qc.prototype.add = function (t) {
            var e = t.J(),
              n = t.G(),
              r = this.index[e] || new Hi(fi.K),
              t = !r.has(n);
            return (this.index[e] = r.add(n)), t;
          }),
          (Qc.prototype.has = function (t) {
            var e = t.J(),
              t = t.G(),
              e = this.index[e];
            return e && e.has(t);
          }),
          (Qc.prototype.getEntries = function (t) {
            return (this.index[t] || new Hi(fi.K)).tt();
          }),
          Qc),
        Wc =
          ((Zc.prototype.createOrUpgrade = function (e, n, t, r) {
            var i = this;
            Cr(t < r && 0 <= t && r <= 11);
            var o = new za('createOrUpgrade', n);
            t < 1 &&
              1 <= r &&
              (e.createObjectStore(Xc.store),
              (s = e).createObjectStore($c.store, { keyPath: $c.keyPath }),
              s
                .createObjectStore(th.store, {
                  keyPath: th.keyPath,
                  autoIncrement: !0
                })
                .createIndex(th.userMutationsIndex, th.userMutationsKeyPath, {
                  unique: !0
                }),
              s.createObjectStore(eh.store),
              fh(e),
              e.createObjectStore(oh.store));
            var s,
              u = ma.resolve();
            return (
              t < 3 &&
                3 <= r &&
                (0 !== t &&
                  ((s = e).deleteObjectStore(ah.store),
                  s.deleteObjectStore(uh.store),
                  s.deleteObjectStore(ch.store),
                  fh(e)),
                (u = u.next(function () {
                  return (
                    (t = o.store(ch.store)),
                    (e = new ch(0, 0, hi.min().q(), 0)),
                    t.put(ch.key, e)
                  );
                  var t, e;
                }))),
              t < 4 &&
                4 <= r &&
                (0 !== t &&
                  (u = u.next(function () {
                    return (
                      (n = e),
                      (r = o)
                        .store(th.store)
                        .hi()
                        .next(function (t) {
                          n.deleteObjectStore(th.store),
                            n
                              .createObjectStore(th.store, {
                                keyPath: th.keyPath,
                                autoIncrement: !0
                              })
                              .createIndex(
                                th.userMutationsIndex,
                                th.userMutationsKeyPath,
                                { unique: !0 }
                              );
                          var e = r.store(th.store),
                            t = t.map(function (t) {
                              return e.put(t);
                            });
                          return ma.Qn(t);
                        })
                    );
                    var n, r;
                  })),
                (u = u.next(function () {
                  e.createObjectStore(lh.store, { keyPath: lh.keyPath });
                }))),
              t < 5 &&
                5 <= r &&
                (u = u.next(function () {
                  return i.removeAcknowledgedMutations(o);
                })),
              t < 6 &&
                6 <= r &&
                (u = u.next(function () {
                  return e.createObjectStore(sh.store), i.addDocumentGlobal(o);
                })),
              t < 7 &&
                7 <= r &&
                (u = u.next(function () {
                  return i.ensureSequenceNumbers(o);
                })),
              t < 8 &&
                8 <= r &&
                (u = u.next(function () {
                  return i.createCollectionParentIndex(e, o);
                })),
              t < 9 &&
                9 <= r &&
                (u = u.next(function () {
                  var t;
                  (t = e).objectStoreNames.contains('remoteDocumentChanges') &&
                    t.deleteObjectStore('remoteDocumentChanges'),
                    (t = n.objectStore(oh.store)).createIndex(
                      oh.readTimeIndex,
                      oh.readTimeIndexPath,
                      { unique: !1 }
                    ),
                    t.createIndex(
                      oh.collectionReadTimeIndex,
                      oh.collectionReadTimeIndexPath,
                      { unique: !1 }
                    );
                })),
              t < 10 &&
                10 <= r &&
                (u = u.next(function () {
                  return i.rewriteCanonicalIds(o);
                })),
              t < 11 &&
                11 <= r &&
                (u = u.next(function () {
                  e.createObjectStore(ph.store, { keyPath: ph.keyPath }),
                    e.createObjectStore(dh.store, { keyPath: dh.keyPath });
                })),
              u
            );
          }),
          (Zc.prototype.addDocumentGlobal = function (e) {
            var n = 0;
            return e
              .store(oh.store)
              .di(function (t, e) {
                n += Gc(e);
              })
              .next(function () {
                var t = new sh(n);
                return e.store(sh.store).put(sh.key, t);
              });
          }),
          (Zc.prototype.removeAcknowledgedMutations = function (n) {
            var r = this,
              t = n.store($c.store),
              i = n.store(th.store);
            return t.hi().next(function (t) {
              return ma.forEach(t, function (e) {
                var t = IDBKeyRange.bound(
                  [e.userId, -1],
                  [e.userId, e.lastAcknowledgedBatchId]
                );
                return i.hi(th.userMutationsIndex, t).next(function (t) {
                  return ma.forEach(t, function (t) {
                    Cr(t.userId === e.userId);
                    t = Ac(r.serializer, t);
                    return Lc(n, e.userId, t).next(function () {});
                  });
                });
              });
            });
          }),
          (Zc.prototype.ensureSequenceNumbers = function (t) {
            var o = t.store(ah.store),
              e = t.store(oh.store);
            return t
              .store(ch.store)
              .get(ch.key)
              .next(function (r) {
                var i = [];
                return e
                  .di(function (t, e) {
                    var n = new fi(t),
                      t = [0, yc(n)];
                    i.push(
                      o.get(t).next(function (t) {
                        return t
                          ? ma.resolve()
                          : o.put(
                              new ah(0, yc(n), r.highestListenSequenceNumber)
                            );
                      })
                    );
                  })
                  .next(function () {
                    return ma.Qn(i);
                  });
              });
          }),
          (Zc.prototype.createCollectionParentIndex = function (t, e) {
            t.createObjectStore(hh.store, { keyPath: hh.keyPath });
            function r(t) {
              if (i.add(t)) {
                var e = t.J(),
                  t = t.G();
                return n.put({ collectionId: e, parent: yc(t) });
              }
            }
            var n = e.store(hh.store),
              i = new Hc();
            return e
              .store(oh.store)
              .di({ fi: !0 }, function (t, e) {
                t = new fi(t);
                return r(t.G());
              })
              .next(function () {
                return e.store(eh.store).di({ fi: !0 }, function (t, e) {
                  t[0];
                  var n = t[1],
                    n = (t[2], gc(n));
                  return r(n.G());
                });
              });
          }),
          (Zc.prototype.rewriteCanonicalIds = function (t) {
            var n = this,
              r = t.store(uh.store);
            return r.di(function (t, e) {
              (e = Nc(e)), (e = xc(n.serializer, e));
              return r.put(e);
            });
          }),
          Zc),
        Yc = function (t, e) {
          (this.seconds = t), (this.nanoseconds = e);
        },
        Xc = function (t, e, n) {
          (this.ownerId = t),
            (this.allowTabSynchronization = e),
            (this.leaseTimestampMs = n);
        };
      function Zc(t) {
        this.serializer = t;
      }
      function Qc() {
        this.index = {};
      }
      function Jc() {
        this.lo = new Hc();
      }
      (Xc.store = 'owner'), (Xc.key = 'owner');
      var $c = function (t, e, n) {
        (this.userId = t),
          (this.lastAcknowledgedBatchId = e),
          (this.lastStreamToken = n);
      };
      ($c.store = 'mutationQueues'), ($c.keyPath = 'userId');
      var th = function (t, e, n, r, i) {
        (this.userId = t),
          (this.batchId = e),
          (this.localWriteTimeMs = n),
          (this.baseMutations = r),
          (this.mutations = i);
      };
      (th.store = 'mutations'),
        (th.keyPath = 'batchId'),
        (th.userMutationsIndex = 'userMutationsIndex'),
        (th.userMutationsKeyPath = ['userId', 'batchId']);
      var eh =
        ((nh.prefixForUser = function (t) {
          return [t];
        }),
        (nh.prefixForPath = function (t, e) {
          return [t, yc(e)];
        }),
        (nh.key = function (t, e, n) {
          return [t, yc(e), n];
        }),
        nh);
      function nh() {}
      (eh.store = 'documentMutations'), (eh.PLACEHOLDER = new eh());
      var rh = function (t, e) {
          (this.path = t), (this.readTime = e);
        },
        ih = function (t, e) {
          (this.path = t), (this.version = e);
        },
        oh = function (t, e, n, r, i, o) {
          (this.unknownDocument = t),
            (this.noDocument = e),
            (this.document = n),
            (this.hasCommittedMutations = r),
            (this.readTime = i),
            (this.parentPath = o);
        };
      (oh.store = 'remoteDocuments'),
        (oh.readTimeIndex = 'readTimeIndex'),
        (oh.readTimeIndexPath = 'readTime'),
        (oh.collectionReadTimeIndex = 'collectionReadTimeIndex'),
        (oh.collectionReadTimeIndexPath = ['parentPath', 'readTime']);
      var sh = function (t) {
        this.byteSize = t;
      };
      (sh.store = 'remoteDocumentGlobal'), (sh.key = 'remoteDocumentGlobalKey');
      var uh = function (t, e, n, r, i, o, s) {
        (this.targetId = t),
          (this.canonicalId = e),
          (this.readTime = n),
          (this.resumeToken = r),
          (this.lastListenSequenceNumber = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.query = s);
      };
      (uh.store = 'targets'),
        (uh.keyPath = 'targetId'),
        (uh.queryTargetsIndexName = 'queryTargetsIndex'),
        (uh.queryTargetsKeyPath = ['canonicalId', 'targetId']);
      var ah = function (t, e, n) {
        (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
      };
      (ah.store = 'targetDocuments'),
        (ah.keyPath = ['targetId', 'path']),
        (ah.documentTargetsIndex = 'documentTargetsIndex'),
        (ah.documentTargetsKeyPath = ['path', 'targetId']);
      var ch = function (t, e, n, r) {
        (this.highestTargetId = t),
          (this.highestListenSequenceNumber = e),
          (this.lastRemoteSnapshotVersion = n),
          (this.targetCount = r);
      };
      (ch.key = 'targetGlobalKey'), (ch.store = 'targetGlobal');
      var hh = function (t, e) {
        (this.collectionId = t), (this.parent = e);
      };
      function fh(t) {
        t
          .createObjectStore(ah.store, { keyPath: ah.keyPath })
          .createIndex(ah.documentTargetsIndex, ah.documentTargetsKeyPath, {
            unique: !0
          }),
          t
            .createObjectStore(uh.store, { keyPath: uh.keyPath })
            .createIndex(uh.queryTargetsIndexName, uh.queryTargetsKeyPath, {
              unique: !0
            }),
          t.createObjectStore(ch.store);
      }
      (hh.store = 'collectionParents'),
        (hh.keyPath = ['collectionId', 'parent']);
      var lh = function (t, e, n, r) {
        (this.clientId = t),
          (this.updateTimeMs = e),
          (this.networkEnabled = n),
          (this.inForeground = r);
      };
      (lh.store = 'clientMetadata'), (lh.keyPath = 'clientId');
      var ph = function (t, e, n) {
        (this.bundleId = t), (this.createTime = e), (this.version = n);
      };
      (ph.store = 'bundles'), (ph.keyPath = 'bundleId');
      var dh = function (t, e, n) {
        (this.name = t), (this.readTime = e), (this.bundledQuery = n);
      };
      (dh.store = 'namedQueries'), (dh.keyPath = 'name');
      var yh = f(
          f(
            f(
              f(
                [
                  $c.store,
                  th.store,
                  eh.store,
                  oh.store,
                  uh.store,
                  Xc.store,
                  ch.store,
                  ah.store
                ],
                [lh.store]
              ),
              [sh.store]
            ),
            [hh.store]
          ),
          [ph.store, dh.store]
        ),
        vh =
          ((gh.prototype._o = function (t, e) {
            return mh(t)
              .get(e)
              .next(function (t) {
                if (t)
                  return {
                    id: (t = t).bundleId,
                    createTime: _c(t.createTime),
                    version: t.version
                  };
              });
          }),
          (gh.prototype.fo = function (t, e) {
            return mh(t).put({
              bundleId: (e = e).id,
              createTime: Tc(Qo(e.createTime)),
              version: e.version
            });
          }),
          (gh.prototype.wo = function (t, e) {
            return wh(t)
              .get(e)
              .next(function (t) {
                if (t)
                  return {
                    name: (t = t).name,
                    query: Sc(t.bundledQuery),
                    readTime: _c(t.readTime)
                  };
              });
          }),
          (gh.prototype.Eo = function (t, e) {
            return wh(t).put({
              name: (e = e).name,
              readTime: Tc(Qo(e.readTime)),
              bundledQuery: e.bundledQuery
            });
          }),
          gh);
      function gh(t) {
        this.serializer = t;
      }
      function mh(t) {
        return Ph.Zs(t, ph.store);
      }
      function wh(t) {
        return Ph.Zs(t, dh.store);
      }
      var bh =
        ((Eh.prototype.Lr = function (t, e) {
          var n = this;
          if (this.To.has(e)) return ma.resolve();
          var r = e.J(),
            i = e.G();
          t.ss(function () {
            n.To.add(e);
          });
          i = { collectionId: r, parent: yc(i) };
          return Ih(t).put(i);
        }),
        (Eh.prototype.Ps = function (t, i) {
          var o = [],
            e = IDBKeyRange.bound([i, ''], [qr(i), ''], !1, !0);
          return Ih(t)
            .hi(e)
            .next(function (t) {
              for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                if (r.collectionId !== i) break;
                o.push(gc(r.parent));
              }
              return o;
            });
        }),
        Eh);
      function Eh() {
        this.To = new Hc();
      }
      function Ih(t) {
        return Ph.Zs(t, hh.store);
      }
      var Th =
          ((Nh.prototype.next = function () {
            return (this.mo += 2), this.mo;
          }),
          (Nh.Io = function () {
            return new Nh(0);
          }),
          (Nh.Ao = function () {
            return new Nh(-1);
          }),
          Nh),
        _h =
          ((Ah.prototype.Ro = function (n) {
            var r = this;
            return this.Po(n).next(function (t) {
              var e = new Th(t.highestTargetId);
              return (
                (t.highestTargetId = e.next()),
                r.yo(n, t).next(function () {
                  return t.highestTargetId;
                })
              );
            });
          }),
          (Ah.prototype.Vo = function (t) {
            return this.Po(t).next(function (t) {
              return hi.$(
                new ci(
                  t.lastRemoteSnapshotVersion.seconds,
                  t.lastRemoteSnapshotVersion.nanoseconds
                )
              );
            });
          }),
          (Ah.prototype.po = function (t) {
            return this.Po(t).next(function (t) {
              return t.highestListenSequenceNumber;
            });
          }),
          (Ah.prototype.bo = function (e, n, r) {
            var i = this;
            return this.Po(e).next(function (t) {
              return (
                (t.highestListenSequenceNumber = n),
                r && (t.lastRemoteSnapshotVersion = r.q()),
                n > t.highestListenSequenceNumber &&
                  (t.highestListenSequenceNumber = n),
                i.yo(e, t)
              );
            });
          }),
          (Ah.prototype.vo = function (e, n) {
            var r = this;
            return this.So(e, n).next(function () {
              return r.Po(e).next(function (t) {
                return (t.targetCount += 1), r.Do(n, t), r.yo(e, t);
              });
            });
          }),
          (Ah.prototype.Co = function (t, e) {
            return this.So(t, e);
          }),
          (Ah.prototype.xo = function (e, t) {
            var n = this;
            return this.No(e, t.targetId)
              .next(function () {
                return xh(e).delete(t.targetId);
              })
              .next(function () {
                return n.Po(e);
              })
              .next(function (t) {
                return Cr(0 < t.targetCount), --t.targetCount, n.yo(e, t);
              });
          }),
          (Ah.prototype.Rr = function (n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return xh(n)
              .di(function (t, e) {
                e = Nc(e);
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (s++, u.push(o.xo(n, e)));
              })
              .next(function () {
                return ma.Qn(u);
              })
              .next(function () {
                return s;
              });
          }),
          (Ah.prototype.Ke = function (t, n) {
            return xh(t).di(function (t, e) {
              e = Nc(e);
              n(e);
            });
          }),
          (Ah.prototype.Po = function (t) {
            return Sh(t)
              .get(ch.key)
              .next(function (t) {
                return Cr(null !== t), t;
              });
          }),
          (Ah.prototype.yo = function (t, e) {
            return Sh(t).put(ch.key, e);
          }),
          (Ah.prototype.So = function (t, e) {
            return xh(t).put(xc(this.serializer, e));
          }),
          (Ah.prototype.Do = function (t, e) {
            var n = !1;
            return (
              t.targetId > e.highestTargetId &&
                ((e.highestTargetId = t.targetId), (n = !0)),
              t.sequenceNumber > e.highestListenSequenceNumber &&
                ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
              n
            );
          }),
          (Ah.prototype.Fo = function (t) {
            return this.Po(t).next(function (t) {
              return t.targetCount;
            });
          }),
          (Ah.prototype.Oo = function (t, r) {
            var e = Oi(r),
              e = IDBKeyRange.bound(
                [e, Number.NEGATIVE_INFINITY],
                [e, Number.POSITIVE_INFINITY]
              ),
              i = null;
            return xh(t)
              .di({ range: e, index: uh.queryTargetsIndexName }, function (
                t,
                e,
                n
              ) {
                e = Nc(e);
                ki(r, e.target) && ((i = e), n.done());
              })
              .next(function () {
                return i;
              });
          }),
          (Ah.prototype.ko = function (n, t, r) {
            var i = this,
              o = [],
              s = Dh(n);
            return (
              t.forEach(function (t) {
                var e = yc(t.path);
                o.push(s.put(new ah(r, e))), o.push(i.Nr.Mo(n, r, t));
              }),
              ma.Qn(o)
            );
          }),
          (Ah.prototype.Lo = function (n, t, r) {
            var i = this,
              o = Dh(n);
            return ma.forEach(t, function (t) {
              var e = yc(t.path);
              return ma.Qn([o.delete([r, e]), i.Nr.$o(n, r, t)]);
            });
          }),
          (Ah.prototype.No = function (t, e) {
            (t = Dh(t)), (e = IDBKeyRange.bound([e], [e + 1], !1, !0));
            return t.delete(e);
          }),
          (Ah.prototype.Bo = function (t, e) {
            var e = IDBKeyRange.bound([e], [e + 1], !1, !0),
              t = Dh(t),
              r = to();
            return t
              .di({ range: e, fi: !0 }, function (t, e, n) {
                (t = gc(t[1])), (t = new di(t));
                r = r.add(t);
              })
              .next(function () {
                return r;
              });
          }),
          (Ah.prototype.Jr = function (t, e) {
            var e = yc(e.path),
              e = IDBKeyRange.bound([e], [qr(e)], !1, !0),
              i = 0;
            return Dh(t)
              .di(
                { index: ah.documentTargetsIndex, fi: !0, range: e },
                function (t, e, n) {
                  var r = t[0];
                  t[1], 0 !== r && (i++, n.done());
                }
              )
              .next(function () {
                return 0 < i;
              });
          }),
          (Ah.prototype.en = function (t, e) {
            return xh(t)
              .get(e)
              .next(function (t) {
                return t ? Nc(t) : null;
              });
          }),
          Ah);
      function Ah(t, e) {
        (this.Nr = t), (this.serializer = e);
      }
      function Nh(t) {
        this.mo = t;
      }
      function xh(t) {
        return Ph.Zs(t, uh.store);
      }
      function Sh(t) {
        return Ph.Zs(t, ch.store);
      }
      function Dh(t) {
        return Ph.Zs(t, ah.store);
      }
      var Oh,
        kh =
          'Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.',
        Lh = (h(Ch, (Oh = Ie)), Ch),
        Ph =
          ((Rh.Zs = function (t, e) {
            if (t instanceof Lh) return Ca.Zs(t.jr, e);
            throw Rr();
          }),
          (Rh.prototype.start = function () {
            var e = this;
            return this.nc()
              .then(function () {
                if (!e.isPrimary && !e.allowTabSynchronization)
                  throw new Nr(Ar.FAILED_PRECONDITION, kh);
                return (
                  e.sc(),
                  e.ic(),
                  e.rc(),
                  e.runTransaction(
                    'getHighestListenSequenceNumber',
                    'readonly',
                    function (t) {
                      return e.Zo.po(t);
                    }
                  )
                );
              })
              .then(function (t) {
                e.Ko = new Ia(t, e.Uo);
              })
              .then(function () {
                e.Wo = !0;
              })
              .catch(function (t) {
                return e.Xo && e.Xo.close(), Promise.reject(t);
              });
          }),
          (Rh.prototype.oc = function (n) {
            var t = this;
            return (
              (this.Jo = function (e) {
                return y(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    return this.dr ? [2, n(e)] : [2];
                  });
                });
              }),
              n(this.isPrimary)
            );
          }),
          (Rh.prototype.cc = function (n) {
            var t = this;
            this.Xo.ni(function (e) {
              return y(t, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return null === e.newVersion ? [4, n()] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (Rh.prototype.ac = function (t) {
            var e = this;
            this.networkEnabled !== t &&
              ((this.networkEnabled = t),
              this.Ns.yi(function () {
                return y(e, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.dr ? [4, this.nc()] : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }));
          }),
          (Rh.prototype.nc = function () {
            var n = this;
            return this.runTransaction(
              'updateClientMetadataAndTryBecomePrimary',
              'readwrite',
              function (e) {
                return Mh(e)
                  .put(
                    new lh(
                      n.clientId,
                      Date.now(),
                      n.networkEnabled,
                      n.inForeground
                    )
                  )
                  .next(function () {
                    if (n.isPrimary)
                      return n.uc(e).next(function (t) {
                        t ||
                          ((n.isPrimary = !1),
                          n.Ns.Li(function () {
                            return n.Jo(!1);
                          }));
                      });
                  })
                  .next(function () {
                    return n.hc(e);
                  })
                  .next(function (t) {
                    return n.isPrimary && !t
                      ? n.lc(e).next(function () {
                          return !1;
                        })
                      : !!t &&
                          n._c(e).next(function () {
                            return !0;
                          });
                  });
              }
            )
              .catch(function (t) {
                if (Ba(t))
                  return (
                    Or(
                      'IndexedDbPersistence',
                      'Failed to extend owner lease: ',
                      t
                    ),
                    n.isPrimary
                  );
                if (!n.allowTabSynchronization) throw t;
                return (
                  Or(
                    'IndexedDbPersistence',
                    'Releasing owner lease after error during lease refresh',
                    t
                  ),
                  !1
                );
              })
              .then(function (t) {
                n.isPrimary !== t &&
                  n.Ns.Li(function () {
                    return n.Jo(t);
                  }),
                  (n.isPrimary = t);
              });
          }),
          (Rh.prototype.uc = function (t) {
            var e = this;
            return Vh(t)
              .get(Xc.key)
              .next(function (t) {
                return ma.resolve(e.fc(t));
              });
          }),
          (Rh.prototype.dc = function (t) {
            return Mh(t).delete(this.clientId);
          }),
          (Rh.prototype.wc = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.Ec(this.Ho, 18e5)
                      ? [3, 2]
                      : ((this.Ho = Date.now()),
                        [
                          4,
                          this.runTransaction(
                            'maybeGarbageCollectMultiClientState',
                            'readwrite-primary',
                            function (t) {
                              var r = Rh.Zs(t, lh.store);
                              return r.hi().next(function (t) {
                                var e = o.Tc(t, 18e5),
                                  n = t.filter(function (t) {
                                    return -1 === e.indexOf(t);
                                  });
                                return ma
                                  .forEach(n, function (t) {
                                    return r.delete(t.clientId);
                                  })
                                  .next(function () {
                                    return n;
                                  });
                              });
                            }
                          ).catch(function () {
                            return [];
                          })
                        ]);
                  case 1:
                    if (((e = t.sent()), this.ec))
                      for (n = 0, r = e; n < r.length; n++)
                        (i = r[n]), this.ec.removeItem(this.mc(i.clientId));
                    t.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Rh.prototype.rc = function () {
            var t = this;
            this.zo = this.Ns.Ks('client_metadata_refresh', 4e3, function () {
              return t
                .nc()
                .then(function () {
                  return t.wc();
                })
                .then(function () {
                  return t.rc();
                });
            });
          }),
          (Rh.prototype.fc = function (t) {
            return !!t && t.ownerId === this.clientId;
          }),
          (Rh.prototype.hc = function (e) {
            var r = this;
            return this.Qo
              ? ma.resolve(!0)
              : Vh(e)
                  .get(Xc.key)
                  .next(function (t) {
                    if (
                      null !== t &&
                      r.Ec(t.leaseTimestampMs, 5e3) &&
                      !r.Ic(t.ownerId)
                    ) {
                      if (r.fc(t) && r.networkEnabled) return !0;
                      if (!r.fc(t)) {
                        if (!t.allowTabSynchronization)
                          throw new Nr(Ar.FAILED_PRECONDITION, kh);
                        return !1;
                      }
                    }
                    return (
                      !(!r.networkEnabled || !r.inForeground) ||
                      Mh(e)
                        .hi()
                        .next(function (t) {
                          return (
                            void 0 ===
                            r.Tc(t, 5e3).find(function (t) {
                              if (r.clientId !== t.clientId) {
                                var e = !r.networkEnabled && t.networkEnabled,
                                  n = !r.inForeground && t.inForeground,
                                  t = r.networkEnabled === t.networkEnabled;
                                if (e || (n && t)) return !0;
                              }
                              return !1;
                            })
                          );
                        })
                    );
                  })
                  .next(function (t) {
                    return (
                      r.isPrimary !== t &&
                        Or(
                          'IndexedDbPersistence',
                          'Client ' +
                            (t ? 'is' : 'is not') +
                            ' eligible for a primary lease.'
                        ),
                      t
                    );
                  });
          }),
          (Rh.prototype.Ac = function () {
            return y(this, void 0, void 0, function () {
              var n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.Wo = !1),
                      this.Rc(),
                      this.zo && (this.zo.cancel(), (this.zo = null)),
                      this.Pc(),
                      this.yc(),
                      [
                        4,
                        this.Xo.runTransaction(
                          'shutdown',
                          'readwrite',
                          [Xc.store, lh.store],
                          function (t) {
                            var e = new Lh(t, Ia.xs);
                            return n.lc(e).next(function () {
                              return n.dc(e);
                            });
                          }
                        )
                      ]
                    );
                  case 1:
                    return t.sent(), this.Xo.close(), this.gc(), [2];
                }
              });
            });
          }),
          (Rh.prototype.Tc = function (t, e) {
            var n = this;
            return t.filter(function (t) {
              return n.Ec(t.updateTimeMs, e) && !n.Ic(t.clientId);
            });
          }),
          (Rh.prototype.Vc = function () {
            var e = this;
            return this.runTransaction(
              'getActiveClients',
              'readonly',
              function (t) {
                return Mh(t)
                  .hi()
                  .next(function (t) {
                    return e.Tc(t, 18e5).map(function (t) {
                      return t.clientId;
                    });
                  });
              }
            );
          }),
          Object.defineProperty(Rh.prototype, 'dr', {
            get: function () {
              return this.Wo;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Rh.prototype.bc = function (t) {
            return Dc.Or(t, this.serializer, this.us, this.Nr);
          }),
          (Rh.prototype.vc = function () {
            return this.Zo;
          }),
          (Rh.prototype.Sc = function () {
            return this.os;
          }),
          (Rh.prototype.Dc = function () {
            return this.us;
          }),
          (Rh.prototype.Cc = function () {
            return this.tc;
          }),
          (Rh.prototype.runTransaction = function (e, n, r) {
            var i = this;
            Or('IndexedDbPersistence', 'Starting transaction:', e);
            var o,
              t = 'readonly' === n ? 'readonly' : 'readwrite';
            return this.Xo.runTransaction(e, t, yh, function (t) {
              return (
                (o = new Lh(t, i.Ko ? i.Ko.next() : Ia.xs)),
                'readwrite-primary' === n
                  ? i
                      .uc(o)
                      .next(function (t) {
                        return !!t || i.hc(o);
                      })
                      .next(function (t) {
                        if (!t)
                          throw (
                            (kr(
                              "Failed to obtain primary lease for action '" +
                                e +
                                "'."
                            ),
                            (i.isPrimary = !1),
                            i.Ns.Li(function () {
                              return i.Jo(!1);
                            }),
                            new Nr(Ar.FAILED_PRECONDITION, wa))
                          );
                        return r(o);
                      })
                      .next(function (t) {
                        return i._c(o).next(function () {
                          return t;
                        });
                      })
                  : i.xc(o).next(function () {
                      return r(o);
                    })
              );
            }).then(function (t) {
              return o.rs(), t;
            });
          }),
          (Rh.prototype.xc = function (t) {
            var e = this;
            return Vh(t)
              .get(Xc.key)
              .next(function (t) {
                if (
                  null !== t &&
                  e.Ec(t.leaseTimestampMs, 5e3) &&
                  !e.Ic(t.ownerId) &&
                  !e.fc(t) &&
                  !(
                    e.Qo ||
                    (e.allowTabSynchronization && t.allowTabSynchronization)
                  )
                )
                  throw new Nr(Ar.FAILED_PRECONDITION, kh);
              });
          }),
          (Rh.prototype._c = function (t) {
            var e = new Xc(
              this.clientId,
              this.allowTabSynchronization,
              Date.now()
            );
            return Vh(t).put(Xc.key, e);
          }),
          (Rh.Hs = function () {
            return Ca.Hs();
          }),
          (Rh.prototype.lc = function (t) {
            var e = this,
              n = Vh(t);
            return n.get(Xc.key).next(function (t) {
              return e.fc(t)
                ? (Or('IndexedDbPersistence', 'Releasing primary lease.'),
                  n.delete(Xc.key))
                : ma.resolve();
            });
          }),
          (Rh.prototype.Ec = function (t, e) {
            var n = Date.now();
            return !(
              t < n - e ||
              (n < t &&
                (kr(
                  'Detected an update time that is in the future: ' +
                    t +
                    ' > ' +
                    n
                ),
                1))
            );
          }),
          (Rh.prototype.sc = function () {
            var t = this;
            null !== this.document &&
              'function' == typeof this.document.addEventListener &&
              ((this.Go = function () {
                t.Ns.yi(function () {
                  return (
                    (t.inForeground = 'visible' === t.document.visibilityState),
                    t.nc()
                  );
                });
              }),
              this.document.addEventListener('visibilitychange', this.Go),
              (this.inForeground =
                'visible' === this.document.visibilityState));
          }),
          (Rh.prototype.Pc = function () {
            this.Go &&
              (this.document.removeEventListener('visibilitychange', this.Go),
              (this.Go = null));
          }),
          (Rh.prototype.ic = function () {
            var t,
              e = this;
            'function' ==
              typeof (null === (t = this.window) || void 0 === t
                ? void 0
                : t.addEventListener) &&
              ((this.jo = function () {
                e.Rc(),
                  e.Ns.yi(function () {
                    return e.Ac();
                  });
              }),
              this.window.addEventListener('unload', this.jo));
          }),
          (Rh.prototype.yc = function () {
            this.jo &&
              (this.window.removeEventListener('unload', this.jo),
              (this.jo = null));
          }),
          (Rh.prototype.Ic = function (t) {
            try {
              var e =
                null !==
                (null === (e = this.ec) || void 0 === e
                  ? void 0
                  : e.getItem(this.mc(t)));
              return (
                Or(
                  'IndexedDbPersistence',
                  "Client '" +
                    t +
                    "' " +
                    (e ? 'is' : 'is not') +
                    ' zombied in LocalStorage'
                ),
                e
              );
            } catch (t) {
              return (
                kr(
                  'IndexedDbPersistence',
                  'Failed to get zombied client id.',
                  t
                ),
                !1
              );
            }
          }),
          (Rh.prototype.Rc = function () {
            if (this.ec)
              try {
                this.ec.setItem(this.mc(this.clientId), String(Date.now()));
              } catch (t) {
                kr('Failed to set zombie client id.', t);
              }
          }),
          (Rh.prototype.gc = function () {
            if (this.ec)
              try {
                this.ec.removeItem(this.mc(this.clientId));
              } catch (t) {}
          }),
          (Rh.prototype.mc = function (t) {
            return 'firestore_zombie_' + this.persistenceKey + '_' + t;
          }),
          Rh);
      function Rh(t, e, n, r, i, o, s, u, a, c) {
        if (
          ((this.allowTabSynchronization = t),
          (this.persistenceKey = e),
          (this.clientId = n),
          (this.Ns = i),
          (this.window = o),
          (this.document = s),
          (this.Uo = a),
          (this.Qo = c),
          (this.Ko = null),
          (this.Wo = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.jo = null),
          (this.inForeground = !1),
          (this.Go = null),
          (this.zo = null),
          (this.Ho = Number.NEGATIVE_INFINITY),
          (this.Jo = function (t) {
            return Promise.resolve();
          }),
          !Rh.Hs())
        )
          throw new Nr(
            Ar.UNIMPLEMENTED,
            'This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.'
          );
        (this.Nr = new Uh(this, r)),
          (this.Yo = e + 'main'),
          (this.serializer = new mc(u)),
          (this.Xo = new Ca(this.Yo, 11, new Wc(this.serializer))),
          (this.Zo = new _h(this.Nr, this.serializer)),
          (this.us = new bh()),
          (this.os = ((e = this.serializer), (u = this.us), new Mc(e, u))),
          (this.tc = new vh(this.serializer)),
          this.window && this.window.localStorage
            ? (this.ec = this.window.localStorage)
            : ((this.ec = null),
              !1 === c &&
                kr(
                  'IndexedDbPersistence',
                  'LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.'
                ));
      }
      function Ch(t, e) {
        var n = this;
        return ((n = Oh.call(this) || this).jr = t), (n.qo = e), n;
      }
      function Vh(t) {
        return Ph.Zs(t, Xc.store);
      }
      function Mh(t) {
        return Ph.Zs(t, lh.store);
      }
      var Uh =
        ((jh.prototype.mr = function (t) {
          var n = this.Nc(t);
          return this.db
            .vc()
            .Fo(t)
            .next(function (e) {
              return n.next(function (t) {
                return e + t;
              });
            });
        }),
        (jh.prototype.Nc = function (t) {
          var e = 0;
          return this.Ar(t, function (t) {
            e++;
          }).next(function () {
            return e;
          });
        }),
        (jh.prototype.Ke = function (t, e) {
          return this.db.vc().Ke(t, e);
        }),
        (jh.prototype.Ar = function (t, n) {
          return this.Fc(t, function (t, e) {
            return n(e);
          });
        }),
        (jh.prototype.Mo = function (t, e, n) {
          return qh(t, n);
        }),
        (jh.prototype.$o = function (t, e, n) {
          return qh(t, n);
        }),
        (jh.prototype.Rr = function (t, e, n) {
          return this.db.vc().Rr(t, e, n);
        }),
        (jh.prototype.zr = qh),
        (jh.prototype.Oc = function (t, e) {
          return (
            (r = e),
            (i = !1),
            Cc((n = t))
              .wi(function (t) {
                return kc(n, t, r).next(function (t) {
                  return t && (i = !0), ma.resolve(!t);
                });
              })
              .next(function () {
                return i;
              })
          );
          var n, r, i;
        }),
        (jh.prototype.Pr = function (n, r) {
          var i = this,
            o = this.db.Sc().oo(),
            s = [],
            u = 0;
          return this.Fc(n, function (e, t) {
            t <= r &&
              ((t = i.Oc(n, e).next(function (t) {
                if (!t)
                  return (
                    u++,
                    o.Xn(n, e).next(function () {
                      return o.Yn(e), Dh(n).delete([0, yc(e.path)]);
                    })
                  );
              })),
              s.push(t));
          })
            .next(function () {
              return ma.Qn(s);
            })
            .next(function () {
              return o.apply(n);
            })
            .next(function () {
              return u;
            });
        }),
        (jh.prototype.removeTarget = function (t, e) {
          e = e.Et(t.qo);
          return this.db.vc().Co(t, e);
        }),
        (jh.prototype.kc = qh),
        (jh.prototype.Fc = function (t, r) {
          var i,
            t = Dh(t),
            o = Ia.xs;
          return t
            .di({ index: ah.documentTargetsIndex }, function (t, e) {
              var n = t[0],
                t = (t[1], e.path),
                e = e.sequenceNumber;
              0 === n
                ? (o !== Ia.xs && r(new di(gc(i)), o), (o = e), (i = t))
                : (o = Ia.xs);
            })
            .next(function () {
              o !== Ia.xs && r(new di(gc(i)), o);
            });
        }),
        (jh.prototype.gr = function (t) {
          return this.db.Sc().ao(t);
        }),
        jh);
      function jh(t, e) {
        (this.db = t), (this.ur = new hc(this, e));
      }
      function qh(t, e) {
        return Dh(t).put(((t = t.qo), new ah(0, yc(e.path), t)));
      }
      function Fh(t, e) {
        var n = t.projectId;
        return t.I || (n += '.' + t.database), 'firestore/' + e + '/' + n + '/';
      }
      function Bh(n, r) {
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
      function zh(t, e) {
        if (t instanceof Uint8Array) return Bh(t, e);
        if (t instanceof ArrayBuffer) return Bh(new Uint8Array(t), e);
        if (t instanceof ReadableStream) return t.getReader();
        throw new Error(
          'Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream'
        );
      }
      function Gh(t) {
        return new Ko(t, !0);
      }
      var Kh =
          ((Zh.prototype.Mc = function () {
            return 'metadata' in this.payload;
          }),
          Zh),
        Hh =
          ((Xh.qc = function (t, e) {
            return new Xh(zh(t, 10240), e);
          }),
          (Xh.prototype.close = function () {
            return this.Lc.cancel();
          }),
          (Xh.prototype.getMetadata = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return [2, this.metadata.promise];
              });
            });
          }),
          (Xh.prototype.Uc = function () {
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
          (Xh.prototype.Bc = function () {
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
                      (r = t.sent()), [2, new Kh(JSON.parse(r), e.length + n)]
                    );
                }
              });
            });
          }),
          (Xh.prototype.jc = function () {
            return this.buffer.findIndex(function (t) {
              return t === '{'.charCodeAt(0);
            });
          }),
          (Xh.prototype.Qc = function () {
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
          (Xh.prototype.Wc = function (n) {
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
          (Xh.prototype.Kc = function (t) {
            throw (this.Lc.cancel(), new Error('Invalid bundle format: ' + t));
          }),
          (Xh.prototype.Gc = function () {
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
          Xh),
        Wh =
          ((Yh.prototype.zc = function (t) {
            return es(this.serializer, t);
          }),
          (Yh.prototype.Hc = function (t) {
            return t.metadata.exists
              ? us(this.serializer, t.document, !1)
              : new mu(this.zc(t.metadata.name), this.Jc(t.metadata.readTime));
          }),
          (Yh.prototype.Jc = Qo),
          Yh);
      function Yh(t) {
        this.serializer = t;
      }
      function Xh(t, e) {
        var n = this;
        (this.Lc = t),
          (this.serializer = e),
          (this.metadata = new Pa()),
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
      function Zh(t, e) {
        (this.payload = t), (this.byteLength = e);
      }
      function Qh(t) {
        return {
          taskState: 'Running',
          documentsLoaded: 0,
          bytesLoaded: 0,
          totalDocuments: t.totalDocuments,
          totalBytes: t.totalBytes
        };
      }
      function Jh(t, e) {
        (this.progress = t), (this.Yc = e);
      }
      var $h =
          ((nf.prototype.ta = function (t) {
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
          (nf.prototype.ea = function (t) {
            for (
              var e = new Map(), n = new Wh(this.serializer), r = 0, i = t;
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
                    h = (e.get(c) || to()).add(s);
                  e.set(c, h);
                }
            }
            return e;
          }),
          (nf.prototype.complete = function () {
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
                                  e = new Wh((n = l).serializer),
                                    r = to(),
                                    i = Yi,
                                    o = Ji,
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
                                    hf(n, Lu(Au(fi.nt('__bundle__/docs/' + d))))
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
                                        return cf(e, h, i, hi.min(), o)
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
                              void 0 === o && (o = to()),
                              y(this, void 0, void 0, function () {
                                var n, r;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [4, hf(e, Lu(Sc(i.bundledQuery)))];
                                    case 1:
                                      return (
                                        (n = t.sent()),
                                        [
                                          2,
                                          (r = e).persistence.runTransaction(
                                            'Save named query',
                                            'readwrite',
                                            function (t) {
                                              var e = Qo(i.readTime);
                                              if (0 <= n.wt.u(e))
                                                return r.tc.Eo(t, i);
                                              e = n.Tt(Fr.h, e);
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
                      new Jh(Object.assign({}, this.progress), e))
                    ];
                }
              });
            });
          }),
          nf),
        tf =
          ((ef.prototype.wr = function (e) {
            var n = this;
            return this.persistence.runTransaction(
              'Collect garbage',
              'readwrite-primary',
              function (t) {
                return e.yr(t, n.ra);
              }
            );
          }),
          ef);
      function ef(t, e, n, r) {
        (this.persistence = t),
          (this.ia = e),
          (this.serializer = r),
          (this.ra = new ji(Ur)),
          (this.oa = new ga(Oi, ki)),
          (this.ca = hi.min()),
          (this.cs = t.bc(n)),
          (this.na = t.Sc()),
          (this.Zo = t.vc()),
          (this.sa = new ba(this.na, this.cs, this.persistence.Dc())),
          (this.tc = t.Cc()),
          this.ia.pr(this.sa);
      }
      function nf(t, e, n) {
        (this.Xc = t),
          (this.Zc = e),
          (this.serializer = n),
          (this.queries = []),
          (this.documents = []),
          (this.progress = Qh(t));
      }
      function rf(t, e, n, r) {
        return new tf(t, e, n, r);
      }
      function of(i, o) {
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
                              (m = new ba(e.na, n, e.persistence.Dc())),
                              n.Qr(v)
                            );
                          })
                          .next(function (t) {
                            for (
                              var e = [], n = [], r = to(), i = 0, o = g;
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
      function sf(t, h) {
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
              (u = ma.resolve()),
              n.forEach(function (n) {
                u = u
                  .next(function () {
                    return o.Xn(r, n);
                  })
                  .next(function (t) {
                    var e = t,
                      t = i.Cn.get(n);
                    Cr(null !== t),
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
      function uf(t) {
        var e = t;
        return e.persistence.runTransaction(
          'Get last remote snapshot version',
          'readonly',
          function (t) {
            return e.Zo.Vo(t);
          }
        );
      }
      function af(t, r) {
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
                  Cr(0 < (o = n).resumeToken.o()),
                  (0 === r.resumeToken.o() ||
                    3e8 <= o.wt.B() - r.wt.B() ||
                    0 < i.de.size + i.we.size + i.Ee.size) &&
                    u.push(a.Zo.Co(s, n))));
            });
            var e,
              n = Yi;
            return (
              r.ue.forEach(function (t, e) {
                r.he.has(t) && u.push(a.persistence.Nr.kc(s, t));
              }),
              u.push(
                cf(s, t, r.ue, c, void 0).next(function (t) {
                  n = t;
                })
              ),
              c.isEqual(hi.min()) ||
                ((e = a.Zo.Vo(s).next(function (t) {
                  return a.Zo.bo(s, s.qo, c);
                })),
                u.push(e)),
              ma
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
      function cf(t, s, e, u, a) {
        var n = to();
        return (
          e.forEach(function (t) {
            return (n = n.add(t));
          }),
          s.getEntries(t, n).next(function (i) {
            var o = Yi;
            return (
              e.forEach(function (t, e) {
                var n = i.get(t),
                  r = (null == a ? void 0 : a.get(t)) || u;
                e instanceof mu && e.version.isEqual(hi.min())
                  ? (s.Yn(t, r), (o = o.At(t, e)))
                  : null == n ||
                    0 < e.version.u(n.version) ||
                    (0 === e.version.u(n.version) && n.hasPendingWrites)
                  ? (s.zn(e, r), (o = o.At(t, e)))
                  : Or(
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
      function hf(t, r) {
        var i = t;
        return i.persistence
          .runTransaction('Allocate target', 'readwrite', function (e) {
            var n;
            return i.Zo.Oo(e, r).next(function (t) {
              return t
                ? ((n = t), ma.resolve(n))
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
      function ff(i, o, s) {
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
                if (!Ba((r = t.sent()))) throw r;
                return (
                  Or(
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
      function lf(t, o, s) {
        var u = t,
          a = hi.min(),
          c = to();
        return u.persistence.runTransaction(
          'Execute query',
          'readonly',
          function (e) {
            return (
              (t = u),
              (n = e),
              (r = Lu(o)),
              (void 0 !== (t = (i = t).oa.get(r))
                ? ma.resolve(i.ra.get(t))
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
                  return u.ia.Ts(e, o, s ? a : hi.min(), s ? c : to());
                })
                .next(function (t) {
                  return { documents: t, la: c };
                })
            );
            var t, n, r, i;
          }
        );
      }
      function pf(t, e) {
        var n = t,
          r = n.Zo,
          t = n.ra.get(e);
        return t
          ? Promise.resolve(t.target)
          : n.persistence.runTransaction(
              'Get target data',
              'readonly',
              function (t) {
                return r.en(t, e).next(function (t) {
                  return t ? t.target : null;
                });
              }
            );
      }
      function df(t) {
        var s = t;
        return s.persistence
          .runTransaction('Get new document changes', 'readonly', function (t) {
            return (
              (e = s.na),
              (n = t),
              (t = s.ca),
              (r = e),
              (i = Yi),
              (o = Ec(t)),
              (t = Bc(n)),
              (n = IDBKeyRange.lowerBound(o, !0)),
              t
                .di({ index: oh.readTimeIndex, range: n }, function (t, e) {
                  var n = wc(r.serializer, e);
                  (i = i.At(n.key, n)), (o = e.readTime);
                })
                .next(function () {
                  return { Yc: i, readTime: Ic(o) };
                })
            );
            var e, n, r, i, o;
          })
          .then(function (t) {
            var e = t.Yc,
              t = t.readTime;
            return (s.ca = t), e;
          });
      }
      function yf(n) {
        return y(this, void 0, void 0, function () {
          var e;
          return v(this, function (t) {
            return [
              2,
              (e = n).persistence
                .runTransaction(
                  'Synchronize last document change read time',
                  'readonly',
                  function (t) {
                    return (
                      (t = Bc(t)),
                      (r = hi.min()),
                      t
                        .di({ index: oh.readTimeIndex, reverse: !0 }, function (
                          t,
                          e,
                          n
                        ) {
                          e.readTime && (r = Ic(e.readTime)), n.done();
                        })
                        .next(function () {
                          return r;
                        })
                    );
                    var r;
                  }
                )
                .then(function (t) {
                  e.ca = t;
                })
            ];
          });
        });
      }
      function vf(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            if (e.code !== Ar.FAILED_PRECONDITION || e.message !== wa) throw e;
            return Or('LocalStore', 'Unexpectedly lost primary lease'), [2];
          });
        });
      }
      function gf(t, e, n, r, i) {
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
                      return Uf(this)
                        ? (Or(
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
                                      return (e = n).ru.add(4), [4, kf(e)];
                                    case 1:
                                      return (
                                        t.sent(),
                                        e.uu.set('Unknown'),
                                        e.ru.delete(4),
                                        [4, Of(e)]
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
          (this.uu = new _f(n, r));
      }
      var mf,
        wf,
        bf,
        Te =
          ((Df.prototype.Ta = function () {
            return 1 === this.state || 2 === this.state || 4 === this.state;
          }),
          (Df.prototype.ma = function () {
            return 2 === this.state;
          }),
          (Df.prototype.start = function () {
            3 !== this.state ? this.auth() : this.Ia();
          }),
          (Df.prototype.stop = function () {
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
          (Df.prototype.Aa = function () {
            (this.state = 0), this.Ci.reset();
          }),
          (Df.prototype.Ra = function () {
            var t = this;
            this.ma() &&
              null === this.Ea &&
              (this.Ea = this.Ns.Ks(this._a, 6e4, function () {
                return t.Pa();
              }));
          }),
          (Df.prototype.ya = function (t) {
            this.ga(), this.stream.send(t);
          }),
          (Df.prototype.Pa = function () {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return this.ma() ? [2, this.close(0)] : [2];
              });
            });
          }),
          (Df.prototype.ga = function () {
            this.Ea && (this.Ea.cancel(), (this.Ea = null));
          }),
          (Df.prototype.close = function (e, n) {
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
                        : n && n.code === Ar.RESOURCE_EXHAUSTED
                        ? (kr(n.toString()),
                          kr(
                            'Using maximum backoff delay to prevent overloading the backend.'
                          ),
                          this.Ci.qs())
                        : n && n.code === Ar.UNAUTHENTICATED && this.da.v(),
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
          (Df.prototype.Va = function () {}),
          (Df.prototype.auth = function () {
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
                    Ar.UNKNOWN,
                    'Fetching auth token failed: ' + e.message
                  );
                  return n.Sa(t);
                });
              }
            );
          }),
          (Df.prototype.va = function (t) {
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
          (Df.prototype.Ia = function () {
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
          (Df.prototype.Sa = function (t) {
            return (
              Or('PersistentStream', 'close with error: ' + t),
              (this.stream = null),
              this.close(3, t)
            );
          }),
          (Df.prototype.ba = function (e) {
            var n = this;
            return function (t) {
              n.Ns.yi(function () {
                return n.wa === e
                  ? t()
                  : (Or(
                      'PersistentStream',
                      'stream callback skipped by getCloseGuardedDispatcher.'
                    ),
                    Promise.resolve());
              });
            };
          }),
          Df),
        Ef =
          (h(Sf, (bf = Te)),
          (Sf.prototype.Da = function (t) {
            return this.fa.xa('Listen', t);
          }),
          (Sf.prototype.onMessage = function (t) {
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
                        : Rr(),
                    r = e.targetChange.targetIds || [],
                    i =
                      ((s = e.targetChange.resumeToken),
                      t.nn
                        ? (Cr(void 0 === s || 'string' == typeof s),
                          Fr.fromBase64String(s || ''))
                        : (Cr(void 0 === s || s instanceof Uint8Array),
                          Fr.fromUint8Array(s || new Uint8Array()))),
                    o =
                      (u = e.targetChange.cause) &&
                      ((a = void 0 === (c = u).code ? Ar.UNKNOWN : Ui(c.code)),
                      new Nr(a, c.message || '')),
                    s = new co(n, r, i, o || null);
                } else if ('documentChange' in e) {
                  e.documentChange,
                    (n = e.documentChange).document,
                    n.document.name,
                    n.document.updateTime,
                    (r = es(t, n.document.name)),
                    (i = Qo(n.document.updateTime));
                  var u = new au({ mapValue: { fields: n.document.fields } }),
                    a = ((o = new gu(r, i, u, {})), n.targetIds || []),
                    c = n.removedTargetIds || [];
                  s = new uo(a, c, o.key, o);
                } else if ('documentDelete' in e)
                  e.documentDelete,
                    (n = e.documentDelete).document,
                    (r = es(t, n.document)),
                    (i = n.readTime ? Qo(n.readTime) : hi.min()),
                    (u = new mu(r, i)),
                    (o = n.removedTargetIds || []),
                    (s = new uo([], o, u.key, u));
                else if ('documentRemove' in e)
                  e.documentRemove,
                    (n = e.documentRemove).document,
                    (r = es(t, n.document)),
                    (i = n.removedTargetIds || []),
                    (s = new uo([], i, r, null));
                else {
                  if (!('filter' in e)) return Rr();
                  e.filter;
                  e = e.filter;
                  e.targetId,
                    (n = e.count || 0),
                    (r = new Pi(n)),
                    (i = e.targetId),
                    (s = new ao(i, r));
                }
                return s;
              })(this.serializer, t),
              t = (function (t) {
                if (!('targetChange' in t)) return hi.min();
                t = t.targetChange;
                return (!t.targetIds || !t.targetIds.length) && t.readTime
                  ? Qo(t.readTime)
                  : hi.min();
              })(t);
            return this.listener.Na(e, t);
          }),
          (Sf.prototype.Fa = function (t) {
            var e,
              n,
              r,
              i = {};
            (i.database = is(this.serializer)),
              (i.addTarget =
                ((e = this.serializer),
                ((r = Li((r = (n = t).target))
                  ? { documents: hs(e, r) }
                  : { query: fs(e, r) }).targetId = n.targetId),
                0 < n.resumeToken.o()
                  ? (r.resumeToken = Zo(e, n.resumeToken))
                  : 0 < n.wt.u(hi.min()) && (r.readTime = Xo(e, n.wt.q())),
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
                      return Rr();
                  }
                })())
                  ? null
                  : { 'goog-listen-tags': t });
            t && (i.labels = t), this.ya(i);
          }),
          (Sf.prototype.Oa = function (t) {
            var e = {};
            (e.database = is(this.serializer)),
              (e.removeTarget = t),
              this.ya(e);
          }),
          Sf),
        If =
          (h(xf, (wf = Te)),
          Object.defineProperty(xf.prototype, 'Ma', {
            get: function () {
              return this.ka;
            },
            enumerable: !1,
            configurable: !0
          }),
          (xf.prototype.start = function () {
            (this.ka = !1),
              (this.lastStreamToken = void 0),
              wf.prototype.start.call(this);
          }),
          (xf.prototype.Va = function () {
            this.ka && this.La([]);
          }),
          (xf.prototype.Da = function (t) {
            return this.fa.xa('Write', t);
          }),
          (xf.prototype.onMessage = function (t) {
            if (
              (Cr(!!t.streamToken),
              (this.lastStreamToken = t.streamToken),
              this.ka)
            ) {
              this.Ci.reset();
              var e =
                  ((n = t.writeResults),
                  (r = t.commitTime),
                  n && 0 < n.length
                    ? (Cr(void 0 !== r),
                      n.map(function (t) {
                        return (function (t, e) {
                          var n = t.updateTime ? Qo(t.updateTime) : Qo(e);
                          n.isEqual(hi.min()) && (n = Qo(e));
                          e = null;
                          return (
                            t.transformResults &&
                              0 < t.transformResults.length &&
                              (e = t.transformResults),
                            new js(n, e)
                          );
                        })(t, r);
                      }))
                    : []),
                n = Qo(t.commitTime);
              return this.listener.$a(n, e);
            }
            var n, r;
            return (
              Cr(!t.writeResults || 0 === t.writeResults.length),
              (this.ka = !0),
              this.listener.Ba()
            );
          }),
          (xf.prototype.qa = function () {
            var t = {};
            (t.database = is(this.serializer)), this.ya(t);
          }),
          (xf.prototype.La = function (t) {
            var e = this,
              t = {
                streamToken: this.lastStreamToken,
                writes: t.map(function (t) {
                  return as(e.serializer, t);
                })
              };
            this.ya(t);
          }),
          xf),
        Tf =
          (h(Nf, (mf = function () {})),
          (Nf.prototype.Qa = function () {
            if (this.Ua)
              throw new Nr(
                Ar.FAILED_PRECONDITION,
                'The client has already been terminated.'
              );
          }),
          (Nf.prototype.Ka = function (e, n, r) {
            var i = this;
            return (
              this.Qa(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.fa.Ka(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Ar.UNAUTHENTICATED && i.credentials.v(), t);
                })
            );
          }),
          (Nf.prototype.Wa = function (e, n, r) {
            var i = this;
            return (
              this.Qa(),
              this.credentials
                .getToken()
                .then(function (t) {
                  return i.fa.Wa(e, n, r, t);
                })
                .catch(function (t) {
                  throw (t.code === Ar.UNAUTHENTICATED && i.credentials.v(), t);
                })
            );
          }),
          (Nf.prototype.terminate = function () {
            this.Ua = !1;
          }),
          Nf),
        _f =
          ((Af.prototype.Ja = function () {
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
          (Af.prototype.Za = function (t) {
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
          (Af.prototype.set = function (t) {
            this.tu(),
              (this.Ga = 0),
              'Online' === t && (this.Ha = !1),
              this.Ya(t);
          }),
          (Af.prototype.Ya = function (t) {
            t !== this.state && ((this.state = t), this.ja(t));
          }),
          (Af.prototype.Xa = function (t) {
            t =
              'Could not reach Cloud Firestore backend. ' +
              t +
              '\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.';
            this.Ha ? (kr(t), (this.Ha = !1)) : Or('OnlineStateTracker', t);
          }),
          (Af.prototype.tu = function () {
            null !== this.za && (this.za.cancel(), (this.za = null));
          }),
          Af);
      function Af(t, e) {
        (this.Ei = t),
          (this.ja = e),
          (this.state = 'Unknown'),
          (this.Ga = 0),
          (this.za = null),
          (this.Ha = !0);
      }
      function Nf(t, e, n) {
        var r = this;
        return (
          ((r = mf.call(this) || this).credentials = t),
          (r.fa = e),
          (r.serializer = n),
          (r.Ua = !1),
          r
        );
      }
      function xf(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            wf.call(
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
      function Sf(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            bf.call(
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
      function Df(t, e, n, r, i, o) {
        (this.Ns = t),
          (this._a = n),
          (this.fa = r),
          (this.da = i),
          (this.listener = o),
          (this.state = 0),
          (this.wa = 0),
          (this.Ea = null),
          (this.stream = null),
          (this.Ci = new Ra(t, e));
      }
      function Of(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Uf(r)) return [3, 4];
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
      function kf(r) {
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
      function Lf(t, e) {
        t.iu.has(e.targetId) ||
          (t.iu.set(e.targetId, e), Mf(t) ? Vf(t) : Wf(t).ma() && Rf(t, e));
      }
      function Pf(t, e) {
        var n = t,
          t = Wf(n);
        n.iu.delete(e),
          t.ma() && Cf(n, e),
          0 === n.iu.size && (t.ma() ? t.Ra() : Uf(n) && n.uu.set('Unknown'));
      }
      function Rf(t, e) {
        t.hu.xe(e.targetId), Wf(t).Fa(e);
      }
      function Cf(t, e) {
        t.hu.xe(e), Wf(t).Oa(e);
      }
      function Vf(e) {
        (e.hu = new fo({
          tn: function (t) {
            return e.nu.tn(t);
          },
          en: function (t) {
            return e.iu.get(t) || null;
          }
        })),
          Wf(e).start(),
          e.uu.Ja();
      }
      function Mf(t) {
        return Uf(t) && !Wf(t).Ta() && 0 < t.iu.size;
      }
      function Uf(t) {
        return 0 === t.ru.size;
      }
      function jf(t) {
        t.hu = void 0;
      }
      function qf(s, u, a) {
        return y(this, void 0, void 0, function () {
          var n, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  (s.uu.set('Online'),
                  !(u instanceof co && 2 === u.state && u.cause))
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
                  Or(
                    'RemoteStore',
                    'Failed to remove targets %s: %s ',
                    u.targetIds.join(','),
                    n
                  ),
                  [4, Ff(s, n)]
                );
              case 4:
                return t.sent(), [3, 5];
              case 5:
                return [3, 13];
              case 6:
                if (
                  (u instanceof uo
                    ? s.hu.Be(u)
                    : u instanceof ao
                    ? s.hu.ze(u)
                    : s.hu.Qe(u),
                  a.isEqual(hi.min()))
                )
                  return [3, 13];
                t.label = 7;
              case 7:
                return t.trys.push([7, 11, , 13]), [4, uf(s.Zc)];
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
                            (r.iu.set(t, e.Tt(Fr.h, e.wt)),
                            Cf(r, t),
                            (e = new Ci(e.target, t, 1, e.sequenceNumber)),
                            Rf(r, e));
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
                  Or(
                    'RemoteStore',
                    'Failed to raise snapshot:',
                    (o = t.sent())
                  ),
                  [4, Ff(s, o)]
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
      function Ff(n, r, i) {
        return y(this, void 0, void 0, function () {
          var e = this;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (!Ba(r)) throw r;
                return n.ru.add(1), [4, kf(n)];
              case 1:
                return (
                  t.sent(),
                  n.uu.set('Offline'),
                  (i =
                    i ||
                    function () {
                      return uf(n.Zc);
                    }),
                  n.Ei.Li(function () {
                    return y(e, void 0, void 0, function () {
                      return v(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              Or('RemoteStore', 'Retrying IndexedDB access'),
                              [4, i()]
                            );
                          case 1:
                            return t.sent(), n.ru.delete(1), [4, Of(n)];
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
      function Bf(e, n) {
        return n().catch(function (t) {
          return Ff(e, t, n);
        });
      }
      function zf(a) {
        return y(this, void 0, void 0, function () {
          var i, o, s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (o = Yf((i = a))),
                  (s = 0 < i.su.length ? i.su[i.su.length - 1].batchId : -1),
                  (t.label = 1);
              case 1:
                if (!(Uf(i) && i.su.length < 10)) return [3, 7];
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
                      t = Yf(t);
                      t.ma() && t.Ma && t.La(e.mutations);
                    })(i, u),
                    [3, 6]);
              case 4:
                return (u = t.sent()), [4, Ff(i, u)];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [3, 1];
              case 7:
                return Gf(i) && Kf(i), [2];
            }
            var e, n, r;
          });
        });
      }
      function Gf(t) {
        return Uf(t) && !Yf(t).Ta() && 0 < t.su.length;
      }
      function Kf(t) {
        Yf(t).start();
      }
      function Hf(n, r) {
        return y(this, void 0, void 0, function () {
          var e;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = n), r ? (e.ru.delete(2), [4, Of(e)]) : [3, 2];
              case 1:
                return t.sent(), [3, 5];
              case 2:
                return r ? [3, 4] : (e.ru.add(2), [4, kf(e)]);
              case 3:
                t.sent(), e.uu.set('Unknown'), (t.label = 4);
              case 4:
                t.label = 5;
              case 5:
                return [2];
            }
          });
        });
      }
      function Wf(n) {
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
                          Rf(n, t);
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
                        jf(e),
                        Mf(e) ? (e.uu.Za(n), Vf(e)) : e.uu.set('Unknown'),
                        [2]
                      );
                    });
                  });
                }.bind(null, n),
                Na: qf.bind(null, n)
              }),
              t.Qa(),
              new Ef(e, t.fa, t.credentials, t.serializer, r))),
            n.ou.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e
                        ? (n.wu.Aa(),
                          Mf(n) ? Vf(n) : n.uu.set('Unknown'),
                          [3, 3])
                        : [3, 1];
                    case 1:
                      return [4, n.wu.stop()];
                    case 2:
                      t.sent(), jf(n), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            })),
          n.wu
        );
      }
      function Yf(n) {
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
                      return Yf(e).qa(), [2];
                    });
                  });
                }.bind(null, n),
                pa: function (e, n) {
                  return y(this, void 0, void 0, function () {
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return n && Yf(e).Ma
                            ? [
                                4,
                                (function (r, i) {
                                  return y(this, void 0, void 0, function () {
                                    var e, n;
                                    return v(this, function (t) {
                                      switch (t.label) {
                                        case 0:
                                          return Mi((n = i.code)) &&
                                            n !== Ar.ABORTED
                                            ? ((e = r.su.shift()),
                                              Yf(r).Aa(),
                                              [
                                                4,
                                                Bf(r, function () {
                                                  return r.nu.du(e.batchId, i);
                                                })
                                              ])
                                            : [3, 3];
                                        case 1:
                                          return t.sent(), [4, zf(r)];
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
                          return Gf(e) && Kf(e), [2];
                      }
                    });
                  });
                }.bind(null, n),
                Ba: function (o) {
                  return y(this, void 0, void 0, function () {
                    var e, n, r, i;
                    return v(this, function (t) {
                      for (e = Yf(o), n = 0, r = o.su; n < r.length; n++)
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
                            (n = va.from(e, i, o)),
                            [
                              4,
                              Bf(r, function () {
                                return r.nu.fu(n);
                              })
                            ]
                          );
                        case 1:
                          return t.sent(), [4, zf(r)];
                        case 2:
                          return t.sent(), [2];
                      }
                    });
                  });
                }.bind(null, n)
              }),
              t.Qa(),
              new If(e, t.fa, t.credentials, t.serializer, r))),
            n.ou.push(function (e) {
              return y(i, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e ? (n.Eu.Aa(), [4, zf(n)]) : [3, 2];
                    case 1:
                      return t.sent(), [3, 4];
                    case 2:
                      return [4, n.Eu.stop()];
                    case 3:
                      t.sent(),
                        0 < n.su.length &&
                          (Or(
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
      function Xf() {
        (this.queries = new ga(Cu, Ru)),
          (this.onlineState = 'Unknown'),
          (this.mu = new Set());
      }
      var Zf = function () {
        (this.Tu = void 0), (this.listeners = []);
      };
      function Qf(s, u) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  ((e = s),
                  (n = u.query),
                  (r = !1),
                  (i = e.queries.get(n)) || ((r = !0), (i = new Zf())),
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
                  (o = nc(
                    o,
                    "Initialization of query '" + Vu(u.query) + "' failed"
                  )),
                  [2, void u.onError(o)]
                );
              case 4:
                return (
                  e.queries.set(n, i),
                  i.listeners.push(u),
                  u.Au(e.onlineState),
                  i.Tu && u.Ru(i.Tu) && $f(e),
                  [2]
                );
            }
          });
        });
      }
      function Jf(s, u) {
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
      function $f(t) {
        t.mu.forEach(function (t) {
          t.next();
        });
      }
      var tl =
          ((ol.prototype.Ru = function (t) {
            if (!this.options.includeMetadataChanges) {
              for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 !== i.type && e.push(i);
              }
              t = new io(t.query, t.docs, t.ne, e, t.se, t.fromCache, t.ie, !0);
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
          (ol.prototype.onError = function (t) {
            this.yu.error(t);
          }),
          (ol.prototype.Au = function (t) {
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
          (ol.prototype.bu = function (t, e) {
            if (!t.fromCache) return !0;
            var n = 'Offline' !== e;
            return !((this.options.Su && n) || (t.docs.Y() && 'Offline' !== e));
          }),
          (ol.prototype.pu = function (t) {
            if (0 < t.docChanges.length) return !0;
            var e = this.Vu && this.Vu.hasPendingWrites !== t.hasPendingWrites;
            return !(!t.ie && !e) && !0 === this.options.includeMetadataChanges;
          }),
          (ol.prototype.vu = function (t) {
            (t = io.oe(t.query, t.docs, t.se, t.fromCache)),
              (this.gu = !0),
              this.yu.next(t);
          }),
          ol),
        el =
          ((il.prototype.Y = function () {
            return this.Du.Y();
          }),
          (il.prototype.Mo = function (t, e) {
            e = new nl(t, e);
            (this.Du = this.Du.add(e)), (this.xu = this.xu.add(e));
          }),
          (il.prototype.Fu = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.Mo(t, e);
            });
          }),
          (il.prototype.$o = function (t, e) {
            this.Ou(new nl(t, e));
          }),
          (il.prototype.ku = function (t, e) {
            var n = this;
            t.forEach(function (t) {
              return n.$o(t, e);
            });
          }),
          (il.prototype.Mu = function (t) {
            var e = this,
              n = new di(new fi([])),
              r = new nl(n, t),
              t = new nl(n, t + 1),
              i = [];
            return (
              this.xu.jt([r, t], function (t) {
                e.Ou(t), i.push(t.key);
              }),
              i
            );
          }),
          (il.prototype.Lu = function () {
            var e = this;
            this.Du.forEach(function (t) {
              return e.Ou(t);
            });
          }),
          (il.prototype.Ou = function (t) {
            (this.Du = this.Du.delete(t)), (this.xu = this.xu.delete(t));
          }),
          (il.prototype.$u = function (t) {
            var e = new di(new fi([])),
              n = new nl(e, t),
              t = new nl(e, t + 1),
              r = to();
            return (
              this.xu.jt([n, t], function (t) {
                r = r.add(t.key);
              }),
              r
            );
          }),
          (il.prototype.Jr = function (t) {
            var e = new nl(t, 0),
              e = this.Du.zt(e);
            return null !== e && t.isEqual(e.key);
          }),
          il),
        nl =
          ((rl.Cu = function (t, e) {
            return di.K(t.key, e.key) || Ur(t.Bu, e.Bu);
          }),
          (rl.Nu = function (t, e) {
            return Ur(t.Bu, e.Bu) || di.K(t.key, e.key);
          }),
          rl);
      function rl(t, e) {
        (this.key = t), (this.Bu = e);
      }
      function il() {
        (this.Du = new Hi(nl.Cu)), (this.xu = new Hi(nl.Nu));
      }
      function ol(t, e, n) {
        (this.query = t),
          (this.yu = e),
          (this.gu = !1),
          (this.Vu = null),
          (this.onlineState = 'Unknown'),
          (this.options = n || {});
      }
      function sl(t, e) {
        return 'firestore_clients_' + t + '_' + e;
      }
      function ul(t, e, n) {
        n = 'firestore_mutations_' + t + '_' + n;
        return e.A() && (n += '_' + e.uid), n;
      }
      function al(t, e) {
        return 'firestore_targets_' + t + '_' + e;
      }
      var cl =
          ((Ol.qu = function (t, e, n) {
            var r = JSON.parse(n),
              i =
                'object' == typeof r &&
                -1 !==
                  ['pending', 'acknowledged', 'rejected'].indexOf(r.state) &&
                (void 0 === r.error || 'object' == typeof r.error),
              o = void 0;
            return (
              i &&
                r.error &&
                (i =
                  'string' == typeof r.error.message &&
                  'string' == typeof r.error.code) &&
                (o = new Nr(r.error.code, r.error.message)),
              i
                ? new Ol(t, e, r.state, o)
                : (kr(
                    'SharedClientState',
                    "Failed to parse mutation state for ID '" + e + "': " + n
                  ),
                  null)
            );
          }),
          (Ol.prototype.Uu = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message
                }),
              JSON.stringify(t)
            );
          }),
          Ol),
        hl =
          ((Dl.qu = function (t, e) {
            var n = JSON.parse(e),
              r =
                'object' == typeof n &&
                -1 !==
                  ['not-current', 'current', 'rejected'].indexOf(n.state) &&
                (void 0 === n.error || 'object' == typeof n.error),
              i = void 0;
            return (
              r &&
                n.error &&
                (r =
                  'string' == typeof n.error.message &&
                  'string' == typeof n.error.code) &&
                (i = new Nr(n.error.code, n.error.message)),
              r
                ? new Dl(t, n.state, i)
                : (kr(
                    'SharedClientState',
                    "Failed to parse target state for ID '" + t + "': " + e
                  ),
                  null)
            );
          }),
          (Dl.prototype.Uu = function () {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message
                }),
              JSON.stringify(t)
            );
          }),
          Dl),
        fl =
          ((Sl.qu = function (t, e) {
            for (
              var n = JSON.parse(e),
                r = 'object' == typeof n && n.activeTargetIds instanceof Array,
                i = eo,
                o = 0;
              r && o < n.activeTargetIds.length;
              ++o
            )
              (r = xi(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
            return r
              ? new Sl(t, i)
              : (kr(
                  'SharedClientState',
                  "Failed to parse client data for instance '" + t + "': " + e
                ),
                null);
          }),
          Sl),
        ll =
          ((xl.qu = function (t) {
            var e = JSON.parse(t);
            return 'object' == typeof e &&
              -1 !== ['Unknown', 'Online', 'Offline'].indexOf(e.onlineState) &&
              'string' == typeof e.clientId
              ? new xl(e.clientId, e.onlineState)
              : (kr('SharedClientState', 'Failed to parse online state: ' + t),
                null);
          }),
          xl),
        pl =
          ((Nl.prototype.Qu = function (t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
          }),
          (Nl.prototype.Ku = function (t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
          }),
          (Nl.prototype.Uu = function () {
            var t = {
              activeTargetIds: this.activeTargetIds.tt(),
              updateTimeMs: Date.now()
            };
            return JSON.stringify(t);
          }),
          Nl),
        dl =
          ((Al.Hs = function (t) {
            return !(!t || !t.localStorage);
          }),
          (Al.prototype.start = function () {
            return y(this, void 0, void 0, function () {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                c,
                h,
                f = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.ju.Vc()];
                  case 1:
                    for (s = t.sent(), e = 0, n = s; e < n.length; e++)
                      (r = n[e]) !== this.Wu &&
                        (i = this.getItem(sl(this.persistenceKey, r))) &&
                        (o = fl.qu(r, i)) &&
                        (this.Hu = this.Hu.At(o.clientId, o));
                    for (
                      this.ih(),
                        (s = this.storage.getItem(this.nh)) &&
                          (u = this.rh(s)) &&
                          this.oh(u),
                        a = 0,
                        c = this.Ju;
                      a < c.length;
                      a++
                    )
                      (h = c[a]), this.zu(h);
                    return (
                      (this.Ju = []),
                      this.window.addEventListener('unload', function () {
                        return f.Ac();
                      }),
                      (this.dr = !0),
                      [2]
                    );
                }
              });
            });
          }),
          (Al.prototype.Cs = function (t) {
            this.setItem(this.Xu, JSON.stringify(t));
          }),
          (Al.prototype.ah = function () {
            return this.uh(this.Hu);
          }),
          (Al.prototype.hh = function (n) {
            var r = !1;
            return (
              this.Hu.forEach(function (t, e) {
                e.activeTargetIds.has(n) && (r = !0);
              }),
              r
            );
          }),
          (Al.prototype.lh = function (t) {
            this._h(t, 'pending');
          }),
          (Al.prototype.fh = function (t, e, n) {
            this._h(t, e, n), this.dh(t);
          }),
          (Al.prototype.wh = function (t) {
            var e,
              n = 'not-current';
            return (
              this.hh(t) &&
                (!(e = this.storage.getItem(al(this.persistenceKey, t))) ||
                  ((e = hl.qu(t, e)) && (n = e.state))),
              this.Eh.Qu(t),
              this.ih(),
              n
            );
          }),
          (Al.prototype.Th = function (t) {
            this.Eh.Ku(t), this.ih();
          }),
          (Al.prototype.mh = function (t) {
            return this.Eh.activeTargetIds.has(t);
          }),
          (Al.prototype.Ih = function (t) {
            this.removeItem(al(this.persistenceKey, t));
          }),
          (Al.prototype.Ah = function (t, e, n) {
            this.Rh(t, e, n);
          }),
          (Al.prototype.Ph = function (t, e, n) {
            var r = this;
            e.forEach(function (t) {
              r.dh(t);
            }),
              (this.currentUser = t),
              n.forEach(function (t) {
                r.lh(t);
              });
          }),
          (Al.prototype.yh = function (t) {
            this.gh(t);
          }),
          (Al.prototype.Vh = function () {
            this.ph();
          }),
          (Al.prototype.Ac = function () {
            this.dr &&
              (this.window.removeEventListener('storage', this.Gu),
              this.removeItem(this.Yu),
              (this.dr = !1));
          }),
          (Al.prototype.getItem = function (t) {
            var e = this.storage.getItem(t);
            return Or('SharedClientState', 'READ', t, e), e;
          }),
          (Al.prototype.setItem = function (t, e) {
            Or('SharedClientState', 'SET', t, e), this.storage.setItem(t, e);
          }),
          (Al.prototype.removeItem = function (t) {
            Or('SharedClientState', 'REMOVE', t), this.storage.removeItem(t);
          }),
          (Al.prototype.zu = function (t) {
            var e = this,
              o = t;
            if (o.storageArea === this.storage) {
              if (
                (Or('SharedClientState', 'EVENT', o.key, o.newValue),
                o.key === this.Yu)
              )
                return void kr(
                  'Received WebStorage notification for local change. Another client might have garbage-collected our state'
                );
              this.Ns.Li(function () {
                return y(e, void 0, void 0, function () {
                  var e, n, r, i;
                  return v(this, function (t) {
                    if (this.dr) {
                      if (null !== o.key)
                        if (this.Zu.test(o.key)) {
                          if (null == o.newValue)
                            return (e = this.bh(o.key)), [2, this.Sh(e, null)];
                          if ((e = this.Dh(o.key, o.newValue)))
                            return [2, this.Sh(e.clientId, e)];
                        } else if (this.th.test(o.key)) {
                          if (
                            null !== o.newValue &&
                            (n = this.Ch(o.key, o.newValue))
                          )
                            return [2, this.xh(n)];
                        } else if (this.eh.test(o.key)) {
                          if (
                            null !== o.newValue &&
                            (r = this.Nh(o.key, o.newValue))
                          )
                            return [2, this.Fh(r)];
                        } else if (o.key === this.nh) {
                          if (null !== o.newValue && (i = this.rh(o.newValue)))
                            return [2, this.oh(i)];
                        } else if (o.key === this.Xu)
                          (i = (function (t) {
                            var e = Ia.xs;
                            if (null != t)
                              try {
                                var n = JSON.parse(t);
                                Cr('number' == typeof n), (e = n);
                              } catch (t) {
                                kr(
                                  'SharedClientState',
                                  'Failed to read sequence number from WebStorage',
                                  t
                                );
                              }
                            return e;
                          })(o.newValue)) !== Ia.xs && this.vs(i);
                        else if (o.key === this.sh) return [2, this.ju.Oh()];
                    } else this.Ju.push(o);
                    return [2];
                  });
                });
              });
            }
          }),
          Object.defineProperty(Al.prototype, 'Eh', {
            get: function () {
              return this.Hu.get(this.Wu);
            },
            enumerable: !1,
            configurable: !0
          }),
          (Al.prototype.ih = function () {
            this.setItem(this.Yu, this.Eh.Uu());
          }),
          (Al.prototype._h = function (t, e, n) {
            (n = new cl(this.currentUser, t, e, n)),
              (t = ul(this.persistenceKey, this.currentUser, t));
            this.setItem(t, n.Uu());
          }),
          (Al.prototype.dh = function (t) {
            t = ul(this.persistenceKey, this.currentUser, t);
            this.removeItem(t);
          }),
          (Al.prototype.gh = function (t) {
            t = { clientId: this.Wu, onlineState: t };
            this.storage.setItem(this.nh, JSON.stringify(t));
          }),
          (Al.prototype.Rh = function (t, e, n) {
            var r = al(this.persistenceKey, t),
              n = new hl(t, e, n);
            this.setItem(r, n.Uu());
          }),
          (Al.prototype.ph = function () {
            this.setItem(this.sh, 'value-not-used');
          }),
          (Al.prototype.bh = function (t) {
            t = this.Zu.exec(t);
            return t ? t[1] : null;
          }),
          (Al.prototype.Dh = function (t, e) {
            t = this.bh(t);
            return fl.qu(t, e);
          }),
          (Al.prototype.Ch = function (t, e) {
            var n = this.th.exec(t),
              t = Number(n[1]),
              n = void 0 !== n[2] ? n[2] : null;
            return cl.qu(new Jr(n), t, e);
          }),
          (Al.prototype.Nh = function (t, e) {
            (t = this.eh.exec(t)), (t = Number(t[1]));
            return hl.qu(t, e);
          }),
          (Al.prototype.rh = function (t) {
            return ll.qu(t);
          }),
          (Al.prototype.xh = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                return e.user.uid === this.currentUser.uid
                  ? [2, this.ju.kh(e.batchId, e.state, e.error)]
                  : (Or(
                      'SharedClientState',
                      'Ignoring mutation for non-active user ' + e.user.uid
                    ),
                    [2]);
              });
            });
          }),
          (Al.prototype.Fh = function (t) {
            return this.ju.Mh(t.targetId, t.state, t.error);
          }),
          (Al.prototype.Sh = function (t, e) {
            var n = this,
              r = e ? this.Hu.At(t, e) : this.Hu.remove(t),
              i = this.uh(this.Hu),
              o = this.uh(r),
              s = [],
              u = [];
            return (
              o.forEach(function (t) {
                i.has(t) || s.push(t);
              }),
              i.forEach(function (t) {
                o.has(t) || u.push(t);
              }),
              this.ju.Lh(s, u).then(function () {
                n.Hu = r;
              })
            );
          }),
          (Al.prototype.oh = function (t) {
            this.Hu.get(t.clientId) && this.ja(t.onlineState);
          }),
          (Al.prototype.uh = function (t) {
            var n = eo;
            return (
              t.forEach(function (t, e) {
                n = n.Ht(e.activeTargetIds);
              }),
              n
            );
          }),
          Al),
        yl =
          ((_l.prototype.lh = function (t) {}),
          (_l.prototype.fh = function (t, e, n) {}),
          (_l.prototype.wh = function (t) {
            return this.$h.Qu(t), this.Bh[t] || 'not-current';
          }),
          (_l.prototype.Ah = function (t, e, n) {
            this.Bh[t] = e;
          }),
          (_l.prototype.Th = function (t) {
            this.$h.Ku(t);
          }),
          (_l.prototype.mh = function (t) {
            return this.$h.activeTargetIds.has(t);
          }),
          (_l.prototype.Ih = function (t) {
            delete this.Bh[t];
          }),
          (_l.prototype.ah = function () {
            return this.$h.activeTargetIds;
          }),
          (_l.prototype.hh = function (t) {
            return this.$h.activeTargetIds.has(t);
          }),
          (_l.prototype.start = function () {
            return (this.$h = new pl()), Promise.resolve();
          }),
          (_l.prototype.Ph = function (t, e, n) {}),
          (_l.prototype.yh = function (t) {}),
          (_l.prototype.Ac = function () {}),
          (_l.prototype.Cs = function (t) {}),
          (_l.prototype.Vh = function () {}),
          _l),
        vl = function (t) {
          this.key = t;
        },
        gl = function (t) {
          this.key = t;
        },
        ml =
          (Object.defineProperty(Tl.prototype, 'jh', {
            get: function () {
              return this.qh;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Tl.prototype.Gh = function (t, e) {
            var s = this,
              u = e ? e.zh : new ro(),
              a = (e || this).Wh,
              c = (e || this).se,
              h = a,
              f = !1,
              l =
                Nu(this.query) && a.size === this.query.limit ? a.last() : null,
              p =
                xu(this.query) && a.size === this.query.limit
                  ? a.first()
                  : null;
            if (
              (t.gt(function (t, e) {
                var n = a.get(t),
                  r =
                    (r = e instanceof gu ? e : null) &&
                    (Mu(s.query, r) ? r : null),
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
              Nu(this.query) || xu(this.query))
            )
              for (; h.size > this.query.limit; ) {
                var n = Nu(this.query) ? h.last() : h.first(),
                  h = h.delete(n.key),
                  c = c.delete(n.key);
                u.track({ type: 1, doc: n });
              }
            return { Wh: h, zh: u, Dr: f, se: c };
          }),
          (Tl.prototype.Hh = function (t, e) {
            return t.ln && e.hasCommittedMutations && !e.ln;
          }),
          (Tl.prototype.es = function (t, e, n) {
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
                    return Rr();
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
                    snapshot: new io(
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
          (Tl.prototype.Au = function (t) {
            return this.fe && 'Offline' === t
              ? ((this.fe = !1),
                this.es({ Wh: this.Wh, zh: new ro(), se: this.se, Dr: !1 }, !1))
              : { Xh: [] };
          }),
          (Tl.prototype.Zh = function (t) {
            return !this.qh.has(t) && !!this.Wh.has(t) && !this.Wh.get(t).ln;
          }),
          (Tl.prototype.Jh = function (t) {
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
          (Tl.prototype.Yh = function () {
            var e = this;
            if (!this.fe) return [];
            var n = this.Qh;
            (this.Qh = to()),
              this.Wh.forEach(function (t) {
                e.Zh(t.key) && (e.Qh = e.Qh.add(t.key));
              });
            var r = [];
            return (
              n.forEach(function (t) {
                e.Qh.has(t) || r.push(new gl(t));
              }),
              this.Qh.forEach(function (t) {
                n.has(t) || r.push(new vl(t));
              }),
              r
            );
          }),
          (Tl.prototype.tl = function (t) {
            (this.qh = t.la), (this.Qh = to());
            t = this.Gh(t.documents);
            return this.es(t, !0);
          }),
          (Tl.prototype.el = function () {
            return io.oe(this.query, this.Wh, this.se, 0 === this.Uh);
          }),
          Tl),
        wl = function (t, e, n) {
          (this.query = t), (this.targetId = e), (this.view = n);
        },
        bl = function (t) {
          (this.key = t), (this.nl = !1);
        },
        El =
          (Object.defineProperty(Il.prototype, 'ml', {
            get: function () {
              return !0 === this.Tl;
            },
            enumerable: !1,
            configurable: !0
          }),
          Il);
      function Il(t, e, n, r, i, o) {
        (this.Zc = t),
          (this.sl = e),
          (this.il = n),
          (this.rl = r),
          (this.currentUser = i),
          (this.ol = o),
          (this.cl = {}),
          (this.al = new ga(Cu, Ru)),
          (this.ul = new Map()),
          (this.hl = []),
          (this.ll = new ji(di.K)),
          (this._l = new Map()),
          (this.fl = new el()),
          (this.dl = {}),
          (this.wl = new Map()),
          (this.El = Th.Ao()),
          (this.onlineState = 'Unknown'),
          (this.Tl = void 0);
      }
      function Tl(t, e) {
        (this.query = t),
          (this.qh = e),
          (this.Uh = null),
          (this.fe = !1),
          (this.Qh = to()),
          (this.se = to()),
          (this.Kh = Uu(t)),
          (this.Wh = new no(this.Kh));
      }
      function _l() {
        (this.$h = new pl()),
          (this.Bh = {}),
          (this.ja = null),
          (this.vs = null);
      }
      function Al(t, e, n, r, i) {
        (this.window = t),
          (this.Ns = e),
          (this.persistenceKey = n),
          (this.Wu = r),
          (this.ju = null),
          (this.ja = null),
          (this.vs = null),
          (this.Gu = this.zu.bind(this)),
          (this.Hu = new ji(Ur)),
          (this.dr = !1),
          (this.Ju = []);
        n = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        (this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.Yu = sl(this.persistenceKey, this.Wu)),
          (this.Xu = 'firestore_sequence_number_' + this.persistenceKey),
          (this.Hu = this.Hu.At(this.Wu, new pl())),
          (this.Zu = new RegExp('^firestore_clients_' + n + '_([^_]*)$')),
          (this.th = new RegExp(
            '^firestore_mutations_' + n + '_(\\d+)(?:_(.*))?$'
          )),
          (this.eh = new RegExp('^firestore_targets_' + n + '_(\\d+)$')),
          (this.nh = 'firestore_online_state_' + this.persistenceKey),
          (this.sh = 'firestore_bundle_loaded_' + this.persistenceKey),
          this.window.addEventListener('storage', this.Gu);
      }
      function Nl() {
        this.activeTargetIds = eo;
      }
      function xl(t, e) {
        (this.clientId = t), (this.onlineState = e);
      }
      function Sl(t, e) {
        (this.clientId = t), (this.activeTargetIds = e);
      }
      function Dl(t, e, n) {
        (this.targetId = t), (this.state = e), (this.error = n);
      }
      function Ol(t, e, n, r) {
        (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
      }
      function kl(i, o, s, u) {
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
                                    lf(r.Zc, i.query, !1).then(function (t) {
                                      t = t.documents;
                                      return i.view.Gh(t, e);
                                    })
                                  ]
                                : [3, 2];
                            case 1:
                              (e = t.sent()), (t.label = 2);
                            case 2:
                              return (
                                (n = s && s.ce.get(i.targetId)),
                                (n = i.view.es(e, r.ml, n)),
                                [2, (Fl(r, i.targetId, n.Xh), n.snapshot)]
                              );
                          }
                        });
                      });
                    })(i, t, e, n);
                  }),
                  [4, lf(i.Zc, o, !0)]
                );
              case 1:
                return (
                  (n = t.sent()),
                  (r = new ml(o, n.la)),
                  (e = r.Gh(n.documents)),
                  (n = so._e(s, u && 'Offline' !== i.onlineState)),
                  (n = r.es(e, i.ml, n)),
                  Fl(i, s, n.Xh),
                  (r = new wl(o, s, r)),
                  [
                    2,
                    (i.al.set(o, r),
                    i.ul.has(s) ? i.ul.get(s).push(o) : i.ul.set(s, [o]),
                    n.snapshot)
                  ]
                );
            }
          });
        });
      }
      function Ll(l, p, d) {
        return y(this, void 0, void 0, function () {
          var s, u;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (u = Zl(l)), (t.label = 1);
              case 1:
                return (
                  t.trys.push([1, 5, , 6]),
                  [
                    4,
                    ((i = u.Zc),
                    (a = p),
                    (h = i),
                    (f = ci.now()),
                    (o = a.reduce(function (t, e) {
                      return t.add(e.key);
                    }, to())),
                    h.persistence
                      .runTransaction(
                        'Locally write mutations',
                        'readwrite',
                        function (u) {
                          return h.sa.ds(u, o).next(function (t) {
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
                                  s instanceof eu
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
                                              t instanceof gu
                                                ? t.field(i.field)
                                                : void 0,
                                            o = ws(i.transform, o || null);
                                          null != o &&
                                            (e = (null == e ? new cu() : e).set(
                                              i.field,
                                              o
                                            ));
                                        }
                                        return e ? e._n() : null;
                                      })(o)
                                    : null);
                              null != o &&
                                e.push(
                                  new Zs(
                                    i.key,
                                    o,
                                    (function s(t) {
                                      var u = [];
                                      return (
                                        To(t.fields || {}, function (t, e) {
                                          var n = new pi([t]);
                                          if (Bo(e))
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
                                        new Vs(u)
                                      );
                                    })(o.proto.mapValue),
                                    qs.exists(!0)
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
                  (r = d),
                  (i = (i = (i = e.dl[e.currentUser.R()]) || new ji(Ur)).At(
                    n,
                    r
                  )),
                  (e.dl[e.currentUser.R()] = i),
                  [4, zl(u, s.Wn)]
                );
              case 3:
                return t.sent(), [4, zf(u.sl)];
              case 4:
                return t.sent(), [3, 6];
              case 5:
                return (
                  (u = t.sent()),
                  (u = nc(u, 'Failed to persist write')),
                  d.reject(u),
                  [3, 6]
                );
              case 6:
                return [2];
            }
            var e, n, r, i, a, c, h, f, o;
          });
        });
      }
      function Pl(r, i) {
        return y(this, void 0, void 0, function () {
          var n, e;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (n = r), (t.label = 1);
              case 1:
                return t.trys.push([1, 4, , 6]), [4, af(n.Zc, i)];
              case 2:
                return (
                  (e = t.sent()),
                  i.ce.forEach(function (t, e) {
                    e = n._l.get(e);
                    e &&
                      (Cr(t.de.size + t.we.size + t.Ee.size <= 1),
                      0 < t.de.size
                        ? (e.nl = !0)
                        : 0 < t.we.size
                        ? Cr(e.nl)
                        : 0 < t.Ee.size && (Cr(e.nl), (e.nl = !1)));
                  }),
                  [4, zl(n, e, i)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, vf(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }
      function Rl(t, n, e) {
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
              o && $f(t);
          })(t.il, n),
          r.length && t.cl.Na(r),
          (t.onlineState = n),
          t.ml && t.rl.yh(n));
      }
      function Cl(s, u, a) {
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
                              Cr(null !== t), (n = t.keys()), i.cs.Wr(e, t)
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
                  Ul(n, u, a),
                  Ml(n, u),
                  n.rl.fh(u, 'rejected', a),
                  [4, zl(n, o)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, vf(t.sent())];
              case 5:
                return t.sent(), [3, 6];
              case 6:
                return [2];
            }
            var e, r, i;
          });
        });
      }
      function Vl(o, s) {
        return y(this, void 0, void 0, function () {
          var n, r, i;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                Uf((n = o).sl) ||
                  Or(
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
                  (i = nc(
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
      function Ml(t, e) {
        (t.wl.get(e) || []).forEach(function (t) {
          t.resolve();
        }),
          t.wl.delete(e);
      }
      function Ul(t, e, n) {
        var r = t,
          i = r.dl[r.currentUser.R()];
        i &&
          ((t = i.get(e)) && (n ? t.reject(n) : t.resolve(), (i = i.remove(e))),
          (r.dl[r.currentUser.R()] = i));
      }
      function jl(e, t, n) {
        void 0 === n && (n = null), e.rl.Th(t);
        for (var r = 0, i = e.ul.get(t); r < i.length; r++) {
          var o = i[r];
          e.al.delete(o), n && e.cl.Al(o, n);
        }
        e.ul.delete(t),
          e.ml &&
            e.fl.Mu(t).forEach(function (t) {
              e.fl.Jr(t) || ql(e, t);
            });
      }
      function ql(t, e) {
        var n = t.ll.get(e);
        null !== n &&
          (Pf(t.sl, n), (t.ll = t.ll.remove(e)), t._l.delete(n), Bl(t));
      }
      function Fl(t, e, n) {
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          o instanceof vl
            ? (t.fl.Mo(o.key, e),
              (function (t, e) {
                e = e.key;
                t.ll.get(e) ||
                  (Or('SyncEngine', 'New document in limbo: ' + e),
                  t.hl.push(e),
                  Bl(t));
              })(t, o))
            : o instanceof gl
            ? (Or('SyncEngine', 'Document no longer in limbo: ' + o.key),
              t.fl.$o(o.key, e),
              t.fl.Jr(o.key) || ql(t, o.key))
            : Rr();
        }
      }
      function Bl(t) {
        for (; 0 < t.hl.length && t.ll.size < t.ol; ) {
          var e = t.hl.shift(),
            n = t.El.next();
          t._l.set(n, new bl(e)),
            (t.ll = t.ll.At(e, n)),
            Lf(t.sl, new Ci(Lu(Au(e.path)), n, 2, Ia.xs));
        }
      }
      function zl(e, s, u) {
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
                              (t = Ea.bs(e.targetId, t)),
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
                                      return ma.forEach(c, function (e) {
                                        return ma
                                          .forEach(e.Vs, function (t) {
                                            return r.persistence.Nr.Mo(
                                              n,
                                              e.targetId,
                                              t
                                            );
                                          })
                                          .next(function () {
                                            return ma.forEach(e.ps, function (
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
                              if (!Ba((e = t.sent()))) throw e;
                              return (
                                Or(
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
      function Gl(i, o) {
        return y(this, void 0, void 0, function () {
          var n, r;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (n = i).currentUser.isEqual(o)
                  ? [3, 3]
                  : (Or('SyncEngine', 'User change. New user:', o.R()),
                    [4, of(n.Zc, o)]);
              case 1:
                return (
                  (r = t.sent()),
                  (n.currentUser = o),
                  (e = n).wl.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(
                        new Nr(
                          Ar.CANCELLED,
                          "'waitForPendingWrites' promise is rejected due to a user change."
                        )
                      );
                    });
                  }),
                  e.wl.clear(),
                  n.rl.Ph(o, r.ua, r.ha),
                  [4, zl(n, r.aa)]
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
      function Kl(u, a, c, h) {
        return y(this, void 0, void 0, function () {
          var o, s;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  ((e = (o = u).Zc),
                  (n = a),
                  (i = (r = e).cs),
                  r.persistence.runTransaction(
                    'Lookup mutation documents',
                    'readonly',
                    function (e) {
                      return i.Br(e, n).next(function (t) {
                        return t ? r.sa.ds(e, t) : ma.resolve(null);
                      });
                    }
                  ))
                ];
              case 1:
                return null === (s = t.sent())
                  ? [3, 6]
                  : 'pending' !== c
                  ? [3, 3]
                  : [4, zf(o.sl)];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                'acknowledged' === c || 'rejected' === c
                  ? (Ul(o, a, h || null), Ml(o, a), o.Zc.cs.Gr(a))
                  : Rr(),
                  (t.label = 4);
              case 4:
                return [4, zl(o, s)];
              case 5:
                return t.sent(), [3, 7];
              case 6:
                Or('SyncEngine', 'Cannot apply mutation batch with id: ' + a),
                  (t.label = 7);
              case 7:
                return [2];
            }
            var e, n, r, i;
          });
        });
      }
      function Hl(h, f) {
        return y(this, void 0, void 0, function () {
          var r, e, i, o, s, u, a, c;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  Xl((r = h)),
                  Zl(r),
                  !0 !== f || !0 === r.Tl
                    ? [3, 3]
                    : ((e = r.rl.ah()), [4, Wl(r, e.tt())])
                );
              case 1:
                return (i = t.sent()), (r.Tl = !0), [4, Hf(r.sl, !0)];
              case 2:
                for (t.sent(), o = 0, s = i; o < s.length; o++)
                  (u = s[o]), Lf(r.sl, u);
                return [3, 7];
              case 3:
                return !1 !== f || !1 === r.Tl
                  ? [3, 7]
                  : ((a = []),
                    (c = Promise.resolve()),
                    r.ul.forEach(function (t, e) {
                      r.rl.mh(e)
                        ? a.push(e)
                        : (c = c.then(function () {
                            return jl(r, e), ff(r.Zc, e, !0);
                          })),
                        Pf(r.sl, e);
                    }),
                    [4, c]);
              case 4:
                return t.sent(), [4, Wl(r, a)];
              case 5:
                return (
                  t.sent(),
                  (n = r)._l.forEach(function (t, e) {
                    Pf(n.sl, e);
                  }),
                  n.fl.Lu(),
                  (n._l = new Map()),
                  (n.ll = new ji(di.K)),
                  (r.Tl = !1),
                  [4, Hf(r.sl, !1)]
                );
              case 6:
                t.sent(), (t.label = 7);
              case 7:
                return [2];
            }
            var n;
          });
        });
      }
      function Wl(p, d) {
        return y(this, void 0, void 0, function () {
          var e, n, r, i, o, s, u, a, c, h, f, l;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                (e = p), (n = []), (r = []), (i = 0), (o = d), (t.label = 1);
              case 1:
                return i < o.length
                  ? ((s = o[i]),
                    (u = void 0),
                    (a = e.ul.get(s)) && 0 !== a.length
                      ? [4, hf(e.Zc, Lu(a[0]))]
                      : [3, 7])
                  : [3, 13];
              case 2:
                (u = t.sent()), (c = 0), (h = a), (t.label = 3);
              case 3:
                return c < h.length
                  ? ((f = h[c]),
                    (f = e.al.get(f)),
                    [
                      4,
                      (function (r, i) {
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, lf((e = r).Zc, i.query, !0)];
                              case 1:
                                return (
                                  (n = t.sent()),
                                  (n = i.view.tl(n)),
                                  [2, (e.ml && Fl(e, i.targetId, n.Xh), n)]
                                );
                            }
                          });
                        });
                      })(e, f)
                    ])
                  : [3, 6];
              case 4:
                (f = t.sent()).snapshot && r.push(f.snapshot), (t.label = 5);
              case 5:
                return c++, [3, 3];
              case 6:
                return [3, 11];
              case 7:
                return [4, pf(e.Zc, s)];
              case 8:
                return (l = t.sent()), [4, hf(e.Zc, l)];
              case 9:
                return (u = t.sent()), [4, kl(e, Yl(l), s, !1)];
              case 10:
                t.sent(), (t.label = 11);
              case 11:
                n.push(u), (t.label = 12);
              case 12:
                return i++, [3, 1];
              case 13:
                return [2, (e.cl.Na(r), n)];
            }
          });
        });
      }
      function Yl(t) {
        return _u(
          t.path,
          t.collectionGroup,
          t.orderBy,
          t.filters,
          t.limit,
          'F',
          t.startAt,
          t.endAt
        );
      }
      function Xl(t) {
        return (
          (t.sl.nu._u = Pl.bind(null, t)),
          (t.sl.nu.tn = function (t, e) {
            var n = t;
            if ((t = n._l.get(e)) && t.nl) return to().add(t.key);
            var r = to();
            if (!(e = n.ul.get(e))) return r;
            for (var i = 0, o = e; i < o.length; i++)
              var s = o[i], s = n.al.get(s), r = r.Ht(s.view.jh);
            return r;
          }.bind(null, t)),
          (t.sl.nu.lu = function (o, s, u) {
            return y(this, void 0, void 0, function () {
              var e, n, r, i;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = o).rl.Ah(s, 'rejected', u),
                      (i = e._l.get(s)),
                      (n = i && i.key)
                        ? ((r = (r = new ji(di.K)).At(n, new mu(n, hi.min()))),
                          (i = to().add(n)),
                          (i = new oo(hi.min(), new Map(), new Hi(Ur), r, i)),
                          [4, Pl(e, i)])
                        : [3, 2]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (e.ll = e.ll.remove(n)),
                      e._l.delete(s),
                      Bl(e),
                      [3, 4]
                    );
                  case 2:
                    return [
                      4,
                      ff(e.Zc, s, !1)
                        .then(function () {
                          return jl(e, s, u);
                        })
                        .catch(vf)
                    ];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.cl.Na = function (t, e) {
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
            r && $f(n);
          }.bind(null, t.il)),
          (t.cl.Al = function (t, e, n) {
            var r = t;
            if ((t = r.queries.get(e)))
              for (var i = 0, o = t.listeners; i < o.length; i++)
                o[i].onError(n);
            r.queries.delete(e);
          }.bind(null, t.il)),
          t
        );
      }
      function Zl(t) {
        return (
          (t.sl.nu.fu = function (i, o) {
            return y(this, void 0, void 0, function () {
              var e, n, r;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    (e = i), (n = o.batch.batchId), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, sf(e.Zc, o)];
                  case 2:
                    return (
                      (r = t.sent()),
                      Ul(e, n, null),
                      Ml(e, n),
                      e.rl.fh(n, 'acknowledged'),
                      [4, zl(e, r)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, vf(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }.bind(null, t)),
          (t.sl.nu.du = Cl.bind(null, t)),
          t
        );
      }
      function Ql(t, e, n) {
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
                      (s = new Wh((o = r).serializer).Jc(i.createTime)),
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
                    d.Pl(Qh(u)),
                    (a = new $h(u, l.Zc, p.serializer)),
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
                  return (f = t.sent()), [4, zl(l, f.Yc, void 0)];
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
                    Lr(
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
      var Jl,
        $l,
        tp,
        ep,
        np,
        rp =
          ((Up.prototype.kr = function (t) {
            return ma.resolve(0 === this.cs.length);
          }),
          (Up.prototype.Mr = function (t, e, n, r) {
            var i = this.gl;
            this.gl++, 0 < this.cs.length && this.cs[this.cs.length - 1];
            n = new ya(i, e, n, r);
            this.cs.push(n);
            for (var o = 0, s = r; o < s.length; o++) {
              var u = s[o];
              (this.Vl = this.Vl.add(new nl(u.key, i))),
                this.us.Lr(t, u.key.path.G());
            }
            return ma.resolve(n);
          }),
          (Up.prototype.$r = function (t, e) {
            return ma.resolve(this.pl(e));
          }),
          (Up.prototype.qr = function (t, e) {
            (e += 1), (e = this.bl(e)), (e = e < 0 ? 0 : e);
            return ma.resolve(this.cs.length > e ? this.cs[e] : null);
          }),
          (Up.prototype.Ur = function () {
            return ma.resolve(0 === this.cs.length ? -1 : this.gl - 1);
          }),
          (Up.prototype.Qr = function (t) {
            return ma.resolve(this.cs.slice());
          }),
          (Up.prototype.ls = function (t, e) {
            var n = this,
              r = new nl(e, 0),
              e = new nl(e, Number.POSITIVE_INFINITY),
              i = [];
            return (
              this.Vl.jt([r, e], function (t) {
                t = n.pl(t.Bu);
                i.push(t);
              }),
              ma.resolve(i)
            );
          }),
          (Up.prototype.Es = function (t, e) {
            var n = this,
              r = new Hi(Ur);
            return (
              e.forEach(function (t) {
                var e = new nl(t, 0),
                  t = new nl(t, Number.POSITIVE_INFINITY);
                n.Vl.jt([e, t], function (t) {
                  r = r.add(t.Bu);
                });
              }),
              ma.resolve(this.vl(r))
            );
          }),
          (Up.prototype.ys = function (t, e) {
            var n = e.path,
              r = n.length + 1,
              e = n;
            di.lt(e) || (e = e.child(''));
            var e = new nl(new di(e), 0),
              i = new Hi(Ur);
            return (
              this.Vl.Gt(function (t) {
                var e = t.key.path;
                return !!n.X(e) && (e.length === r && (i = i.add(t.Bu)), !0);
              }, e),
              ma.resolve(this.vl(i))
            );
          }),
          (Up.prototype.vl = function (t) {
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
          (Up.prototype.Wr = function (n, r) {
            var i = this;
            Cr(0 === this.Sl(r.batchId, 'removed')), this.cs.shift();
            var o = this.Vl;
            return ma
              .forEach(r.mutations, function (t) {
                var e = new nl(t.key, r.batchId);
                return (o = o.delete(e)), i.Nr.zr(n, t.key);
              })
              .next(function () {
                i.Vl = o;
              });
          }),
          (Up.prototype.Gr = function (t) {}),
          (Up.prototype.Jr = function (t, e) {
            var n = new nl(e, 0),
              n = this.Vl.zt(n);
            return ma.resolve(e.isEqual(n && n.key));
          }),
          (Up.prototype.Hr = function (t) {
            return this.cs.length, ma.resolve();
          }),
          (Up.prototype.Sl = function (t, e) {
            return this.bl(t);
          }),
          (Up.prototype.bl = function (t) {
            return 0 === this.cs.length ? 0 : t - this.cs[0].batchId;
          }),
          (Up.prototype.pl = function (t) {
            t = this.bl(t);
            return t < 0 || t >= this.cs.length ? null : this.cs[t];
          }),
          Up),
        ip =
          ((Mp.prototype.zn = function (t, e, n) {
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
          (Mp.prototype.Yn = function (t) {
            var e = this.docs.get(t);
            e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
          }),
          (Mp.prototype.Xn = function (t, e) {
            e = this.docs.get(e);
            return ma.resolve(e ? e.Jn : null);
          }),
          (Mp.prototype.getEntries = function (t, e) {
            var n = this,
              r = Yi;
            return (
              e.forEach(function (t) {
                var e = n.docs.get(t);
                r = r.At(t, e ? e.Jn : null);
              }),
              ma.resolve(r)
            );
          }),
          (Mp.prototype.Ts = function (t, e, n) {
            for (
              var r = Qi, i = new di(e.path.child('')), o = this.docs.vt(i);
              o.Ft();

            ) {
              var s = o.Nt(),
                u = s.key,
                a = s.value,
                s = a.Jn,
                a = a.readTime;
              if (!e.path.X(u.path)) break;
              a.u(n) <= 0 ||
                (s instanceof gu && Mu(e, s) && (r = r.At(s.key, s)));
            }
            return ma.resolve(r);
          }),
          (Mp.prototype.Cl = function (t, e) {
            return ma.forEach(this.docs, function (t) {
              return e(t);
            });
          }),
          (Mp.prototype.oo = function (t) {
            return new op(this);
          }),
          (Mp.prototype.ao = function (t) {
            return ma.resolve(this.size);
          }),
          Mp),
        op =
          (h(Vp, (np = o)),
          (Vp.prototype.es = function (n) {
            var r = this,
              i = [];
            return (
              this.Wn.forEach(function (t, e) {
                e && e.Jn ? i.push(r.uo.zn(n, e.Jn, r.Gn(t))) : r.uo.Yn(t);
              }),
              ma.Qn(i)
            );
          }),
          (Vp.prototype.Zn = function (t, e) {
            return this.uo.Xn(t, e);
          }),
          (Vp.prototype.ts = function (t, e) {
            return this.uo.getEntries(t, e);
          }),
          Vp),
        sp =
          ((Cp.prototype.Ke = function (t, n) {
            return (
              this.xl.forEach(function (t, e) {
                return n(e);
              }),
              ma.resolve()
            );
          }),
          (Cp.prototype.Vo = function (t) {
            return ma.resolve(this.lastRemoteSnapshotVersion);
          }),
          (Cp.prototype.po = function (t) {
            return ma.resolve(this.Nl);
          }),
          (Cp.prototype.Ro = function (t) {
            return (
              (this.highestTargetId = this.Ol.next()),
              ma.resolve(this.highestTargetId)
            );
          }),
          (Cp.prototype.bo = function (t, e, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              e > this.Nl && (this.Nl = e),
              ma.resolve()
            );
          }),
          (Cp.prototype.So = function (t) {
            this.xl.set(t.target, t);
            var e = t.targetId;
            e > this.highestTargetId &&
              ((this.Ol = new Th(e)), (this.highestTargetId = e)),
              t.sequenceNumber > this.Nl && (this.Nl = t.sequenceNumber);
          }),
          (Cp.prototype.vo = function (t, e) {
            return this.So(e), (this.targetCount += 1), ma.resolve();
          }),
          (Cp.prototype.Co = function (t, e) {
            return this.So(e), ma.resolve();
          }),
          (Cp.prototype.xo = function (t, e) {
            return (
              this.xl.delete(e.target),
              this.Fl.Mu(e.targetId),
              --this.targetCount,
              ma.resolve()
            );
          }),
          (Cp.prototype.Rr = function (n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return (
              this.xl.forEach(function (t, e) {
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (o.xl.delete(t), u.push(o.No(n, e.targetId)), s++);
              }),
              ma.Qn(u).next(function () {
                return s;
              })
            );
          }),
          (Cp.prototype.Fo = function (t) {
            return ma.resolve(this.targetCount);
          }),
          (Cp.prototype.Oo = function (t, e) {
            e = this.xl.get(e) || null;
            return ma.resolve(e);
          }),
          (Cp.prototype.ko = function (t, e, n) {
            return this.Fl.Fu(e, n), ma.resolve();
          }),
          (Cp.prototype.Lo = function (e, t, n) {
            this.Fl.ku(t, n);
            var r = this.persistence.Nr,
              i = [];
            return (
              r &&
                t.forEach(function (t) {
                  i.push(r.zr(e, t));
                }),
              ma.Qn(i)
            );
          }),
          (Cp.prototype.No = function (t, e) {
            return this.Fl.Mu(e), ma.resolve();
          }),
          (Cp.prototype.Bo = function (t, e) {
            e = this.Fl.$u(e);
            return ma.resolve(e);
          }),
          (Cp.prototype.Jr = function (t, e) {
            return ma.resolve(this.Fl.Jr(e));
          }),
          Cp),
        up =
          ((Rp.prototype._o = function (t, e) {
            return ma.resolve(this.kl.get(e));
          }),
          (Rp.prototype.fo = function (t, e) {
            return (
              this.kl.set(e.id, {
                id: e.id,
                version: e.version,
                createTime: Qo(e.createTime)
              }),
              ma.resolve()
            );
          }),
          (Rp.prototype.wo = function (t, e) {
            return ma.resolve(this.Ml.get(e));
          }),
          (Rp.prototype.Eo = function (t, e) {
            return (
              this.Ml.set(e.name, {
                name: (e = e).name,
                query: Sc(e.bundledQuery),
                readTime: Qo(e.readTime)
              }),
              ma.resolve()
            );
          }),
          Rp),
        ap =
          ((Pp.prototype.start = function () {
            return Promise.resolve();
          }),
          (Pp.prototype.Ac = function () {
            return (this.Wo = !1), Promise.resolve();
          }),
          Object.defineProperty(Pp.prototype, 'dr', {
            get: function () {
              return this.Wo;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Pp.prototype.cc = function () {}),
          (Pp.prototype.ac = function () {}),
          (Pp.prototype.Dc = function () {
            return this.us;
          }),
          (Pp.prototype.bc = function (t) {
            var e = this.Ll[t.R()];
            return (
              e || ((e = new rp(this.us, this.Nr)), (this.Ll[t.R()] = e)), e
            );
          }),
          (Pp.prototype.vc = function () {
            return this.Zo;
          }),
          (Pp.prototype.Sc = function () {
            return this.os;
          }),
          (Pp.prototype.Cc = function () {
            return this.tc;
          }),
          (Pp.prototype.runTransaction = function (t, e, n) {
            var r = this;
            Or('MemoryPersistence', 'Starting transaction:', t);
            var i = new cp(this.Ko.next());
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
          (Pp.prototype.Ul = function (e, n) {
            return ma.Kn(
              Object.values(this.Ll).map(function (t) {
                return function () {
                  return t.Jr(e, n);
                };
              })
            );
          }),
          Pp),
        cp = (h(Lp, (ep = Ie)), Lp),
        hp =
          ((kp.Wl = function (t) {
            return new kp(t);
          }),
          Object.defineProperty(kp.prototype, 'jl', {
            get: function () {
              if (this.Kl) return this.Kl;
              throw Rr();
            },
            enumerable: !1,
            configurable: !0
          }),
          (kp.prototype.Mo = function (t, e, n) {
            return this.Ql.Mo(n, e), this.jl.delete(n.toString()), ma.resolve();
          }),
          (kp.prototype.$o = function (t, e, n) {
            return this.Ql.$o(n, e), this.jl.add(n.toString()), ma.resolve();
          }),
          (kp.prototype.zr = function (t, e) {
            return this.jl.add(e.toString()), ma.resolve();
          }),
          (kp.prototype.removeTarget = function (t, e) {
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
          (kp.prototype.Bl = function () {
            this.Kl = new Set();
          }),
          (kp.prototype.ql = function (n) {
            var r = this,
              i = this.persistence.Sc().oo();
            return ma
              .forEach(this.jl, function (t) {
                var e = di.at(t);
                return r.Gl(n, e).next(function (t) {
                  t || i.Yn(e);
                });
              })
              .next(function () {
                return (r.Kl = null), i.apply(n);
              });
          }),
          (kp.prototype.kc = function (t, e) {
            var n = this;
            return this.Gl(t, e).next(function (t) {
              t ? n.jl.delete(e.toString()) : n.jl.add(e.toString());
            });
          }),
          (kp.prototype.$l = function (t) {
            return 0;
          }),
          (kp.prototype.Gl = function (t, e) {
            var n = this;
            return ma.Kn([
              function () {
                return ma.resolve(n.Ql.Jr(e));
              },
              function () {
                return n.persistence.vc().Jr(t, e);
              },
              function () {
                return n.persistence.Ul(t, e);
              }
            ]);
          }),
          kp),
        fp =
          ((Op.prototype.Ca = function (t) {
            this.Jl = t;
          }),
          (Op.prototype.pa = function (t) {
            this.Yl = t;
          }),
          (Op.prototype.onMessage = function (t) {
            this.Xl = t;
          }),
          (Op.prototype.close = function () {
            this.Hl();
          }),
          (Op.prototype.send = function (t) {
            this.zl(t);
          }),
          (Op.prototype.Zl = function () {
            this.Jl();
          }),
          (Op.prototype.t_ = function (t) {
            this.Yl(t);
          }),
          (Op.prototype.e_ = function (t) {
            this.Xl(t);
          }),
          Op),
        lp = {
          BatchGetDocuments: 'batchGet',
          Commit: 'commit',
          RunQuery: 'runQuery'
        },
        pp =
          ((Dp.prototype.Ka = function (e, t, n, r) {
            var i = this.r_(e, t);
            Or('RestConnection', 'Sending: ', i, n);
            t = {};
            return (
              this.o_(t, r),
              this.c_(e, i, t, n).then(
                function (t) {
                  return Or('RestConnection', 'Received: ', t), t;
                },
                function (t) {
                  throw (
                    (Lr(
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
          (Dp.prototype.Wa = function (t, e, n, r) {
            return this.Ka(t, e, n, r);
          }),
          (Dp.prototype.o_ = function (t, e) {
            if (
              ((t['X-Goog-Api-Client'] = 'gl-js/ fire/8.1.1'),
              (t['Content-Type'] = 'text/plain'),
              e)
            )
              for (var n in e.V) e.V.hasOwnProperty(n) && (t[n] = e.V[n]);
          }),
          (Dp.prototype.r_ = function (t, e) {
            t = lp[t];
            return this.s_ + '/v1/' + e + ':' + t;
          }),
          h(Sp, (tp = Dp)),
          (Sp.prototype.c_ = function (o, e, s, u) {
            return new Promise(function (n, r) {
              var i = new _r();
              i.listenOnce(wr.COMPLETE, function () {
                try {
                  switch (i.getLastErrorCode()) {
                    case mr.NO_ERROR:
                      var t = i.getResponseJson();
                      Or('Connection', 'XHR received:', JSON.stringify(t)),
                        n(t);
                      break;
                    case mr.TIMEOUT:
                      Or('Connection', 'RPC "' + o + '" timed out'),
                        r(new Nr(Ar.DEADLINE_EXCEEDED, 'Request time out'));
                      break;
                    case mr.HTTP_ERROR:
                      var e = i.getStatus();
                      Or(
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
                                0 <= Object.values(Ar).indexOf(e)
                                  ? e
                                  : Ar.UNKNOWN),
                              r(new Nr(e, t.message)))
                            : r(
                                new Nr(
                                  Ar.UNKNOWN,
                                  'Server responded with status ' +
                                    i.getStatus()
                                )
                              )
                          : r(new Nr(Ar.UNAVAILABLE, 'Connection failed.'));
                      break;
                    default:
                      Rr();
                  }
                } finally {
                  Or('Connection', 'RPC "' + o + '" completed.');
                }
              });
              var t = JSON.stringify(u);
              i.send(e, 'POST', t, s, 15);
            });
          }),
          (Sp.prototype.xa = function (t, e) {
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
            Or('Connection', 'Creating WebChannel: ' + r, t);
            var s = i.createWebChannel(r, t),
              u = !1,
              a = !1,
              c = new fp({
                zl: function (t) {
                  a
                    ? Or(
                        'Connection',
                        'Not sending because WebChannel is closed:',
                        t
                      )
                    : (u ||
                        (Or('Connection', 'Opening WebChannel transport.'),
                        s.open(),
                        (u = !0)),
                      Or('Connection', 'WebChannel sending:', t),
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
                a || Or('Connection', 'WebChannel transport opened.');
              }),
              t(s, Tr.EventType.CLOSE, function () {
                a ||
                  ((a = !0),
                  Or('Connection', 'WebChannel transport closed'),
                  c.t_());
              }),
              t(s, Tr.EventType.ERROR, function (t) {
                a ||
                  ((a = !0),
                  Lr('Connection', 'WebChannel transport errored:', t),
                  c.t_(
                    new Nr(
                      Ar.UNAVAILABLE,
                      'The operation could not be completed'
                    )
                  ));
              }),
              t(s, Tr.EventType.MESSAGE, function (t) {
                var e, n, r, i;
                a ||
                  (Cr(!!(e = t.data[0])),
                  (n =
                    e.error ||
                    (null === (i = e[0]) || void 0 === i ? void 0 : i.error))
                    ? (Or('Connection', 'WebChannel received error:', n),
                      (r = n.status),
                      (t = (function () {
                        var t = Ri[r];
                        if (void 0 !== t) return Ui(t);
                      })()),
                      (i = n.message),
                      void 0 === t &&
                        ((t = Ar.INTERNAL),
                        (i =
                          'Unknown error status: ' +
                          r +
                          ' with message ' +
                          n.message)),
                      (a = !0),
                      c.t_(new Nr(t, i)),
                      s.close())
                    : (Or('Connection', 'WebChannel received:', e), c.e_(e)));
              }),
              t(o, br.STAT_EVENT, function (t) {
                t.stat === Er
                  ? Or('Connection', 'Detected buffering proxy')
                  : t.stat === Ir &&
                    Or('Connection', 'Detected no buffering proxy');
              }),
              setTimeout(function () {
                c.Zl();
              }, 0),
              c
            );
          }),
          Sp),
        dp =
          ((xp.prototype.au = function (t) {
            this.__.push(t);
          }),
          (xp.prototype.Ac = function () {
            window.removeEventListener('online', this.a_),
              window.removeEventListener('offline', this.h_);
          }),
          (xp.prototype.f_ = function () {
            window.addEventListener('online', this.a_),
              window.addEventListener('offline', this.h_);
          }),
          (xp.prototype.u_ = function () {
            Or(
              'ConnectivityMonitor',
              'Network connectivity changed: AVAILABLE'
            );
            for (var t = 0, e = this.__; t < e.length; t++) (0, e[t])(0);
          }),
          (xp.prototype.l_ = function () {
            Or(
              'ConnectivityMonitor',
              'Network connectivity changed: UNAVAILABLE'
            );
            for (var t = 0, e = this.__; t < e.length; t++) (0, e[t])(1);
          }),
          (xp.Hs = function () {
            return (
              'undefined' != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }),
          xp),
        yp =
          ((Np.prototype.au = function (t) {}),
          (Np.prototype.Ac = function () {}),
          Np),
        vp =
          ((Ap.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.serializer = Gh(e.n_.T)),
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
          (Ap.prototype.T_ = function (t) {
            return null;
          }),
          (Ap.prototype.m_ = function (t) {
            return rf(this.persistence, new fc(), t.I_, this.serializer);
          }),
          (Ap.prototype.w_ = function (t) {
            return new ap(hp.Wl, this.serializer);
          }),
          (Ap.prototype.d_ = function (t) {
            return new yl();
          }),
          (Ap.prototype.terminate = function () {
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
          Ap),
        gp =
          (h(_p, ($l = vp)),
          (_p.prototype.initialize = function (e) {
            return y(this, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, $l.prototype.initialize.call(this, e)];
                  case 1:
                    return t.sent(), [4, yf(this.Zc)];
                  case 2:
                    return t.sent(), [4, this.A_.initialize(this, e)];
                  case 3:
                    return t.sent(), [4, Zl(this.A_.ju)];
                  case 4:
                    return t.sent(), [4, zf(this.A_.sl)];
                  case 5:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (_p.prototype.m_ = function (t) {
            return rf(this.persistence, new fc(), t.I_, this.serializer);
          }),
          (_p.prototype.T_ = function (t) {
            var e = this.persistence.Nr.ur;
            return new cc(e, t.Ei);
          }),
          (_p.prototype.w_ = function (t) {
            var e = Fh(t.n_.T, t.n_.persistenceKey),
              n =
                void 0 !== this.cacheSizeBytes
                  ? sc.sr(this.cacheSizeBytes)
                  : sc.cr;
            return new Ph(
              this.synchronizeTabs,
              e,
              t.clientId,
              n,
              t.Ei,
              Za(),
              Qa(),
              this.serializer,
              this.rl,
              !!this.forceOwnership
            );
          }),
          (_p.prototype.d_ = function (t) {
            return new yl();
          }),
          _p),
        mp =
          (h(Tp, (Jl = gp)),
          (Tp.prototype.initialize = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, Jl.prototype.initialize.call(this, r)];
                  case 1:
                    return (
                      t.sent(),
                      (e = this.A_.ju),
                      this.rl instanceof dl
                        ? ((this.rl.ju = {
                            kh: Kl.bind(null, e),
                            Mh: function (i, o, s, u) {
                              return y(this, void 0, void 0, function () {
                                var e, n, r;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (e = i).Tl
                                        ? (Or(
                                            'SyncEngine',
                                            'Ignoring unexpected query state notification.'
                                          ),
                                          [3, 8])
                                        : [3, 1];
                                    case 1:
                                      if (!e.ul.has(o)) return [3, 8];
                                      switch (s) {
                                        case 'current':
                                        case 'not-current':
                                          return [3, 2];
                                        case 'rejected':
                                          return [3, 5];
                                      }
                                      return [3, 7];
                                    case 2:
                                      return [4, df(e.Zc)];
                                    case 3:
                                      return (
                                        (n = t.sent()),
                                        (r = oo.le(o, 'current' === s)),
                                        [4, zl(e, n, r)]
                                      );
                                    case 4:
                                      return t.sent(), [3, 8];
                                    case 5:
                                      return [4, ff(e.Zc, o, !0)];
                                    case 6:
                                      return t.sent(), jl(e, o, u), [3, 8];
                                    case 7:
                                      Rr(), (t.label = 8);
                                    case 8:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            Lh: function (c, h, f) {
                              return y(this, void 0, void 0, function () {
                                var n, e, r, i, o, s, u, a;
                                return v(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      if (!(n = Xl(c)).Tl) return [3, 10];
                                      (e = 0), (r = h), (t.label = 1);
                                    case 1:
                                      return e < r.length
                                        ? ((r = r[e]),
                                          n.ul.has(r)
                                            ? (Or(
                                                'SyncEngine',
                                                'Adding an already active target ' +
                                                  r
                                              ),
                                              [3, 5])
                                            : [4, pf(n.Zc, r)])
                                        : [3, 6];
                                    case 2:
                                      return (i = t.sent()), [4, hf(n.Zc, i)];
                                    case 3:
                                      return (
                                        (o = t.sent()),
                                        [4, kl(n, Yl(i), o.targetId, !1)]
                                      );
                                    case 4:
                                      t.sent(), Lf(n.sl, o), (t.label = 5);
                                    case 5:
                                      return e++, [3, 1];
                                    case 6:
                                      (s = function (e) {
                                        return v(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return n.ul.has(e)
                                                ? [
                                                    4,
                                                    ff(n.Zc, e, !1)
                                                      .then(function () {
                                                        Pf(n.sl, e), jl(n, e);
                                                      })
                                                      .catch(vf)
                                                  ]
                                                : [3, 2];
                                            case 1:
                                              t.sent(), (t.label = 2);
                                            case 2:
                                              return [2];
                                          }
                                        });
                                      }),
                                        (u = 0),
                                        (a = f),
                                        (t.label = 7);
                                    case 7:
                                      return u < a.length
                                        ? ((a = a[u]), [5, s(a)])
                                        : [3, 10];
                                    case 8:
                                      t.sent(), (t.label = 9);
                                    case 9:
                                      return u++, [3, 7];
                                    case 10:
                                      return [2];
                                  }
                                });
                              });
                            }.bind(null, e),
                            Vc: function (t) {
                              return t.Zc.persistence.Vc();
                            }.bind(null, e),
                            Oh: function (n) {
                              return y(this, void 0, void 0, function () {
                                var e;
                                return v(this, function (t) {
                                  return [
                                    2,
                                    df((e = n).Zc).then(function (t) {
                                      return zl(e, t);
                                    })
                                  ];
                                });
                              });
                            }.bind(null, e)
                          }),
                          [4, this.rl.start()])
                        : [3, 3]
                    );
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [
                      4,
                      this.persistence.oc(function (e) {
                        return y(n, void 0, void 0, function () {
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, Hl(this.A_.ju, e)];
                              case 1:
                                return (
                                  t.sent(),
                                  this.E_ &&
                                    (e && !this.E_.dr
                                      ? this.E_.start(this.Zc)
                                      : e || this.E_.stop()),
                                  [2]
                                );
                            }
                          });
                        });
                      })
                    ];
                  case 4:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Tp.prototype.d_ = function (t) {
            var e = Za();
            if (!dl.Hs(e))
              throw new Nr(
                Ar.UNIMPLEMENTED,
                'IndexedDB persistence is only available on platforms that support LocalStorage.'
              );
            var n = Fh(t.n_.T, t.n_.persistenceKey);
            return new dl(e, t.Ei, n, t.clientId, t.I_);
          }),
          Tp),
        wp =
          ((Ip.prototype.initialize = function (n, r) {
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
                          return Rl(e.ju, t, 1);
                        }),
                        (this.sl.nu.V_ = Gl.bind(null, this.ju)),
                        [4, Hf(this.sl, this.ju.ml)]);
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Ip.prototype.y_ = function (t) {
            return new Xf();
          }),
          (Ip.prototype.R_ = function (t) {
            var e = Gh(t.n_.T),
              n = ((n = t.n_), new pp(n));
            return (t = t.credentials), new Tf(t, n, e);
          }),
          (Ip.prototype.P_ = function (t) {
            var e = this,
              n = this.Zc,
              r = this.eu,
              i = t.Ei,
              o = function (t) {
                return Rl(e.ju, t, 0);
              },
              t = new (dp.Hs() ? dp : yp)();
            return new gf(n, r, i, o, t);
          }),
          (Ip.prototype.g_ = function (t, e) {
            return (function (t, e, n, r, i, o, s) {
              o = new El(t, e, n, r, i, o);
              return s && (o.Tl = !0), o;
            })(this.Zc, this.sl, this.il, this.rl, t.I_, t.ol, e);
          }),
          (Ip.prototype.terminate = function () {
            return (function (n) {
              return y(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = n),
                        Or('RemoteStore', 'RemoteStore shutting down.'),
                        e.ru.add(5),
                        [4, kf(e)]
                      );
                    case 1:
                      return t.sent(), e.cu.Ac(), e.uu.set('Unknown'), [2];
                  }
                });
              });
            })(this.sl);
          }),
          Ip),
        bp =
          ((Ep.prototype.next = function (t) {
            this.observer.next && this.p_(this.observer.next, t);
          }),
          (Ep.prototype.error = function (t) {
            this.observer.error
              ? this.p_(this.observer.error, t)
              : console.error('Uncaught Error in snapshot listener:', t);
          }),
          (Ep.prototype.b_ = function () {
            this.muted = !0;
          }),
          (Ep.prototype.p_ = function (t, e) {
            var n = this;
            this.muted ||
              setTimeout(function () {
                n.muted || t(e);
              }, 0);
          }),
          Ep);
      function Ep(t) {
        (this.observer = t), (this.muted = !1);
      }
      function Ip() {}
      function Tp(t, e) {
        var n = this;
        return (
          ((n = Jl.call(this, t, e, !1) || this).A_ = t),
          (n.cacheSizeBytes = e),
          (n.synchronizeTabs = !0),
          n
        );
      }
      function _p(t, e, n) {
        var r = this;
        return (
          ((r = $l.call(this) || this).A_ = t),
          (r.cacheSizeBytes = e),
          (r.forceOwnership = n),
          (r.synchronizeTabs = !1),
          r
        );
      }
      function Ap() {
        this.synchronizeTabs = !1;
      }
      function Np() {}
      function xp() {
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
      function Sp(t) {
        var e = this;
        return (
          ((e = tp.call(this, t) || this).forceLongPolling =
            t.forceLongPolling),
          (e.m = t.m),
          e
        );
      }
      function Dp(t) {
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
      function Op(t) {
        (this.zl = t.zl), (this.Hl = t.Hl);
      }
      function kp(t) {
        (this.persistence = t), (this.Ql = new el()), (this.Kl = null);
      }
      function Lp(t) {
        var e = this;
        return ((e = ep.call(this) || this).qo = t), e;
      }
      function Pp(t, e) {
        var n = this;
        (this.Ll = {}),
          (this.Ko = new Ia(0)),
          (this.Wo = !1),
          (this.Wo = !0),
          (this.Nr = t(this)),
          (this.Zo = new sp(this)),
          (this.us = new Kc()),
          (this.os =
            ((t = this.us),
            new ip(t, function (t) {
              return n.Nr.$l(t);
            }))),
          (this.serializer = new mc(e)),
          (this.tc = new up(this.serializer));
      }
      function Rp(t) {
        (this.serializer = t), (this.kl = new Map()), (this.Ml = new Map());
      }
      function Cp(t) {
        (this.persistence = t),
          (this.xl = new ga(Oi, ki)),
          (this.lastRemoteSnapshotVersion = hi.min()),
          (this.highestTargetId = 0),
          (this.Nl = 0),
          (this.Fl = new el()),
          (this.targetCount = 0),
          (this.Ol = Th.Io());
      }
      function Vp(t) {
        var e = this;
        return ((e = np.call(this) || this).uo = t), e;
      }
      function Mp(t, e) {
        (this.us = t),
          (this.Dl = e),
          (this.docs = new ji(di.K)),
          (this.size = 0);
      }
      function Up(t, e) {
        (this.us = t),
          (this.Nr = e),
          (this.cs = []),
          (this.gl = 1),
          (this.Vl = new Hi(nl.Cu));
      }
      function jp(t, e, n) {
        if (!n)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Function ' + t + '() cannot be called with an empty ' + e + '.'
          );
      }
      function qp(t, e) {
        if (void 0 === e) return { merge: !1 };
        if (void 0 !== e.mergeFields && void 0 !== e.merge)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Invalid options passed to function ' +
              t +
              '(): You cannot specify both "merge" and "mergeFields".'
          );
        return e;
      }
      function Fp(t, e, n, r) {
        if (!0 === e && !0 === r)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            t + ' and ' + n + ' cannot be used together.'
          );
      }
      function Bp(t) {
        if (!di.lt(t))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Invalid document reference. Document references must have an even number of segments, but ' +
              t +
              ' has ' +
              t.length +
              '.'
          );
      }
      function zp(t) {
        if (di.lt(t))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Invalid collection reference. Collection references must have an odd number of segments, but ' +
              t +
              ' has ' +
              t.length +
              '.'
          );
      }
      function Gp(e) {
        if (void 0 === e) return 'undefined';
        if (null === e) return 'null';
        if ('string' == typeof e)
          return (
            20 < e.length && (e = e.substring(0, 20) + '...'), JSON.stringify(e)
          );
        if ('number' == typeof e || 'boolean' == typeof e) return '' + e;
        if ('object' != typeof e)
          return 'function' == typeof e ? 'a function' : Rr();
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
      function Kp(t, e) {
        if (('_delegate' in t && (t = t._), t instanceof e)) return t;
        if (e.name === t.constructor.name)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
          );
        t = Gp(t);
        throw new Nr(
          Ar.INVALID_ARGUMENT,
          "Expected type '" + e.name + "', but it was: " + t
        );
      }
      function Hp(t, e) {
        if (e <= 0)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires a positive number, but it was: ' +
              e +
              '.'
          );
      }
      var Wp,
        Yp = function (t) {
          this._methodName = t;
        },
        Xp =
          (h(Zp, (Wp = Yp)),
          (Zp.prototype.v_ = function (t) {
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
          (Zp.prototype.isEqual = function (t) {
            return t instanceof Zp;
          }),
          Zp);
      function Zp() {
        return (null !== Wp && Wp.apply(this, arguments)) || this;
      }
      function Qp(t, e, n) {
        return new jy(
          { S_: 3, C_: e.settings.C_, methodName: t._methodName, x_: n },
          e.T,
          e.serializer,
          e.ignoreUndefinedProperties
        );
      }
      var Jp,
        $p,
        td,
        ed,
        nd,
        rd,
        id =
          (h(Ad, (rd = Yp)),
          (Ad.prototype.v_ = function (t) {
            return new Ms(t.path, new Is());
          }),
          (Ad.prototype.isEqual = function (t) {
            return t instanceof Ad;
          }),
          Ad),
        od =
          (h(_d, (nd = Yp)),
          (_d.prototype.v_ = function (t) {
            var e = Qp(this, t, !0),
              n = this.N_.map(function (t) {
                return Wy(t, e);
              }),
              n = new Ts(n);
            return new Ms(t.path, n);
          }),
          (_d.prototype.isEqual = function (t) {
            return this === t;
          }),
          _d),
        sd =
          (h(Td, (ed = Yp)),
          (Td.prototype.v_ = function (t) {
            var e = Qp(this, t, !0),
              n = this.N_.map(function (t) {
                return Wy(t, e);
              }),
              n = new Ss(n);
            return new Ms(t.path, n);
          }),
          (Td.prototype.isEqual = function (t) {
            return this === t;
          }),
          Td),
        ud =
          (h(Id, (td = Yp)),
          (Id.prototype.v_ = function (t) {
            var e = new Ls(t.serializer, Yo(t.serializer, this.F_));
            return new Ms(t.path, e);
          }),
          (Id.prototype.isEqual = function (t) {
            return this === t;
          }),
          Id),
        ad =
          (Object.defineProperty(Ed.prototype, 'latitude', {
            get: function () {
              return this.O_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Ed.prototype, 'longitude', {
            get: function () {
              return this.k_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Ed.prototype.isEqual = function (t) {
            return this.O_ === t.O_ && this.k_ === t.k_;
          }),
          (Ed.prototype.toJSON = function () {
            return { latitude: this.O_, longitude: this.k_ };
          }),
          (Ed.prototype.L = function (t) {
            return Ur(this.O_, t.O_) || Ur(this.k_, t.k_);
          }),
          Ed),
        cd = new Map(),
        hd =
          ((bd.prototype.isEqual = function (t) {
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
          bd),
        fd =
          (Object.defineProperty(wd.prototype, 'app', {
            get: function () {
              if (!this.Q_)
                throw new Nr(
                  Ar.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.Q_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(wd.prototype, 'K_', {
            get: function () {
              return this.B_;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(wd.prototype, 'W_', {
            get: function () {
              return void 0 !== this.j_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (wd.prototype.G_ = function (t) {
            if (this.B_)
              throw new Nr(
                Ar.FAILED_PRECONDITION,
                'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
              );
            (this.L_ = new hd(t)),
              void 0 !== t.credentials &&
                (this.U_ = (function (t) {
                  if (!t) return new oi();
                  switch (t.type) {
                    case 'gapi':
                      var e = t.client;
                      return (
                        Cr(
                          !(
                            'object' != typeof e ||
                            null === e ||
                            !e.auth ||
                            !e.auth.getAuthHeaderValueForFirstParty
                          )
                        ),
                        new ai(e, t.sessionIndex || '0')
                      );
                    case 'provider':
                      return t.client;
                    default:
                      throw new Nr(
                        Ar.INVALID_ARGUMENT,
                        'makeCredentialsProvider failed due to invalid credential type'
                      );
                  }
                })(t.credentials));
          }),
          (wd.prototype.z_ = function () {
            return this.L_;
          }),
          (wd.prototype.H_ = function () {
            return (this.B_ = !0), this.L_;
          }),
          (wd.prototype._delete = function () {
            return this.j_ || (this.j_ = this.J_()), this.j_;
          }),
          (wd.prototype.J_ = function () {
            return (
              (t = cd.get(this)) &&
                (Or('ComponentProvider', 'Removing Datastore'),
                cd.delete(this),
                t.terminate()),
              Promise.resolve()
            );
            var t;
          }),
          wd),
        o =
          ((md.prototype.Y_ = function (t, e) {
            switch ((void 0 === e && (e = 'none'), So(t))) {
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
                return this.tf(Vo(t.bytesValue));
              case 7:
                return this.ef(t.referenceValue);
              case 8:
                return this.nf(t.geoPointValue);
              case 9:
                return this.sf(t.arrayValue, e);
              case 10:
                return this.rf(t.mapValue, e);
              default:
                throw Rr();
            }
          }),
          (md.prototype.rf = function (t, n) {
            var r = this,
              i = {};
            return (
              To(t.fields || {}, function (t, e) {
                i[t] = r.Y_(e, n);
              }),
              i
            );
          }),
          (md.prototype.nf = function (t) {
            return new ad(Co(t.latitude), Co(t.longitude));
          }),
          (md.prototype.sf = function (t, e) {
            var n = this;
            return (t.values || []).map(function (t) {
              return n.Y_(t, e);
            });
          }),
          (md.prototype.Z_ = function (t, e) {
            switch (e) {
              case 'previous':
                var n = (function t(e) {
                  e = e.mapValue.fields.__previous_value__;
                  return Ao(e) ? t(e) : e;
                })(t);
                return null == n ? null : this.Y_(n, e);
              case 'estimate':
                return this.X_(No(t));
              default:
                return null;
            }
          }),
          (md.prototype.X_ = function (t) {
            t = Ro(t);
            return new ci(t.seconds, t.nanos);
          }),
          (md.prototype.cf = function (t, e) {
            var n = fi.nt(t);
            Cr(ms(n));
            (t = new Qr(n.get(1), n.get(3))), (n = new di(n.j(5)));
            return (
              t.isEqual(e) ||
                kr(
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
          md),
        ld =
          (h(gd, ($p = o)),
          (gd.prototype.tf = function (t) {
            return new Xr(new zr(t));
          }),
          (gd.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return Uv.af(t, this.firestore, null);
          }),
          gd),
        pd =
          (Object.defineProperty(vd.prototype, 'id', {
            get: function () {
              return this.lf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(vd.prototype, 'ref', {
            get: function () {
              return new Qd(this.uf, this.ff, this.lf);
            },
            enumerable: !1,
            configurable: !0
          }),
          (vd.prototype.exists = function () {
            return null !== this._f;
          }),
          (vd.prototype.data = function () {
            if (this._f) {
              if (this.ff) {
                var t = new dd(this.uf, this.hf, this.lf, this._f, null);
                return this.ff.fromFirestore(t);
              }
              return this.hf.Y_(this._f.mn());
            }
          }),
          (vd.prototype.get = function (t) {
            if (this._f) {
              t = this._f.data().field(Nd('DocumentSnapshot.get', t));
              if (null !== t) return this.hf.Y_(t);
            }
          }),
          vd),
        dd =
          (h(yd, (Jp = pd)),
          (yd.prototype.data = function () {
            return Jp.prototype.data.call(this);
          }),
          yd);
      function yd() {
        return (null !== Jp && Jp.apply(this, arguments)) || this;
      }
      function vd(t, e, n, r, i) {
        (this.uf = t),
          (this.hf = e),
          (this.lf = n),
          (this._f = r),
          (this.ff = i);
      }
      function gd(t) {
        var e = this;
        return ((e = $p.call(this) || this).firestore = t), e;
      }
      function md() {}
      function wd(t, e) {
        (this.M_ = '(lite)'),
          (this.L_ = new hd({})),
          (this.B_ = !1),
          t instanceof Qr
            ? ((this.q_ = t), (this.U_ = new oi()))
            : ((this.Q_ = t),
              (this.q_ = (function (t) {
                if (
                  !Object.prototype.hasOwnProperty.apply(t.options, [
                    'projectId'
                  ])
                )
                  throw new Nr(
                    Ar.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Qr(t.options.projectId);
              })(t)),
              (this.U_ = new si(e)));
      }
      function bd(t) {
        var e;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Nr(
              Ar.INVALID_ARGUMENT,
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
              Ar.INVALID_ARGUMENT,
              'cacheSizeBytes must be at least 1048576'
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
          (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
          Fp(
            'experimentalForceLongPolling',
            t.experimentalForceLongPolling,
            'experimentalAutoDetectLongPolling',
            t.experimentalAutoDetectLongPolling
          );
      }
      function Ed(t, e) {
        if (!isFinite(t) || t < -90 || 90 < t)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Latitude must be a number between -90 and 90, but was: ' + t
          );
        if (!isFinite(e) || e < -180 || 180 < e)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Longitude must be a number between -180 and 180, but was: ' + e
          );
        (this.O_ = t), (this.k_ = e);
      }
      function Id(t, e) {
        var n = this;
        return ((n = td.call(this, t) || this).F_ = e), n;
      }
      function Td(t, e) {
        var n = this;
        return ((n = ed.call(this, t) || this).N_ = e), n;
      }
      function _d(t, e) {
        var n = this;
        return ((n = nd.call(this, t) || this).N_ = e), n;
      }
      function Ad() {
        return (null !== rd && rd.apply(this, arguments)) || this;
      }
      function Nd(t, e) {
        return 'string' == typeof e ? $y(t, e) : (e instanceof Gr ? e._ : e).df;
      }
      var xd,
        Sd =
          ((kd.prototype.isEqual = function (t) {
            return this.df.isEqual(t.df);
          }),
          kd),
        Dd =
          (h(Od, (xd = fd)),
          (Od.prototype.J_ = function () {
            return this.Ef || Lv(this), this.Ef.terminate();
          }),
          Od);
      function Od(t, e) {
        var n = this;
        return (
          ((n = xd.call(this, t, e) || this).wf = new $a()),
          (n.M_ = 'name' in t ? t.name : '[DEFAULT]'),
          n
        );
      }
      function kd() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n)
          if (0 === t[n].length)
            throw new Nr(
              Ar.INVALID_ARGUMENT,
              'Invalid field name at argument $(i + 1). Field names must not be empty.'
            );
        this.df = new pi(t);
      }
      function Ld(n, r, i) {
        var t = this,
          o = new Pa();
        return n.Ei.enqueue(function () {
          return y(t, void 0, void 0, function () {
            var e;
            return v(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 3, , 4]), [4, av(n, i)];
                case 1:
                  return t.sent(), [4, cv(n, r)];
                case 2:
                  return t.sent(), o.resolve(), [3, 4];
                case 3:
                  if (
                    !('FirebaseError' === (t = e = t.sent()).name
                      ? t.code === Ar.FAILED_PRECONDITION ||
                        t.code === Ar.UNIMPLEMENTED
                      : !(
                          'undefined' != typeof DOMException &&
                          t instanceof DOMException
                        ) ||
                        22 === t.code ||
                        20 === t.code ||
                        11 === t.code)
                  )
                    throw e;
                  return (
                    console.warn(
                      'Error enabling offline persistence. Falling back to persistence disabled: ' +
                        e
                    ),
                    o.reject(e),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }).then(function () {
          return o.promise;
        });
      }
      function Pd(t) {
        if (t.K_ || t.W_)
          throw new Nr(
            Ar.FAILED_PRECONDITION,
            'Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.'
          );
      }
      var Rd,
        Cd,
        Vd =
          (h(Fd, (Cd = pd)),
          (Fd.prototype.exists = function () {
            return Cd.prototype.exists.call(this);
          }),
          (Fd.prototype.data = function (t) {
            if ((void 0 === t && (t = {}), this._f)) {
              if (this.ff) {
                var e = new Md(
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
          (Fd.prototype.get = function (t, e) {
            if ((void 0 === e && (e = {}), this._f)) {
              t = this._f.data().field(Nd('DocumentSnapshot.get', t));
              if (null !== t) return this.hf.Y_(t, e.serverTimestamps);
            }
          }),
          Fd),
        Md =
          (h(qd, (Rd = Vd)),
          (qd.prototype.data = function (t) {
            return void 0 === t && (t = {}), Rd.prototype.data.call(this, t);
          }),
          qd),
        Ud =
          (Object.defineProperty(jd.prototype, 'docs', {
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
          Object.defineProperty(jd.prototype, 'size', {
            get: function () {
              return this.mf.docs.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(jd.prototype, 'empty', {
            get: function () {
              return 0 === this.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          (jd.prototype.forEach = function (e, n) {
            var r = this;
            this.mf.docs.forEach(function (t) {
              e.call(
                n,
                new Md(
                  r.uf,
                  r.hf,
                  t.key,
                  t,
                  new Qv(r.mf.se.has(t.key), r.mf.fromCache),
                  r.query.ff
                )
              );
            });
          }),
          (jd.prototype.docChanges = function (t) {
            void 0 === t && (t = {});
            t = !!t.includeMetadataChanges;
            if (t && this.mf.re)
              throw new Nr(
                Ar.INVALID_ARGUMENT,
                'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
              );
            return (
              (this.If && this.Af === t) ||
                ((this.If = (function (i, e) {
                  if (i.mf.ne.Y()) {
                    var n = 0;
                    return i.mf.docChanges.map(function (t) {
                      var e = new Md(
                        i.uf,
                        i.hf,
                        t.doc.key,
                        t.doc,
                        new Qv(i.mf.se.has(t.doc.key), i.mf.fromCache),
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
                      var e = new Md(
                          i.uf,
                          i.hf,
                          t.doc.key,
                          t.doc,
                          new Qv(i.mf.se.has(t.doc.key), i.mf.fromCache),
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
                                return Rr();
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
          jd);
      function jd(t, e, n, r) {
        (this.uf = t),
          (this.hf = e),
          (this.mf = r),
          (this.metadata = new Qv(r.hasPendingWrites, r.fromCache)),
          (this.query = n);
      }
      function qd() {
        return (null !== Rd && Rd.apply(this, arguments)) || this;
      }
      function Fd(t, e, n, r, i, o) {
        var s = this;
        return (
          ((s = Cd.call(this, t, e, n, r, o) || this).uf = t),
          (s.Tf = t),
          (s.metadata = i),
          s
        );
      }
      function Bd(t, e) {
        return t instanceof Vd && e instanceof Vd
          ? t.uf === e.uf &&
              t.lf.isEqual(e.lf) &&
              (null === t._f ? null === e._f : t._f.isEqual(e._f)) &&
              t.ff === e.ff
          : t instanceof Ud &&
              e instanceof Ud &&
              t.uf === e.uf &&
              ky(t.query, e.query) &&
              t.metadata.isEqual(e.metadata) &&
              t.mf.isEqual(e.mf);
      }
      function zd(i) {
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
      var Gd,
        Kd =
          (h(Hd, (Gd = o)),
          (Hd.prototype.tf = function (t) {
            return new zr(t);
          }),
          (Hd.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return new Qd(this.firestore, null, t);
          }),
          Hd);
      function Hd(t) {
        var e = this;
        return ((e = Gd.call(this) || this).firestore = t), e;
      }
      function Wd(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++)
          r[i - 3] = arguments[i];
        t = Kp(t, Qd);
        var o = Kp(t.firestore, Dd),
          s = Ly(o);
        return (
          e instanceof Gr && (e = e._),
          Xd(
            o,
            ('string' == typeof e || e instanceof Sd
              ? Ky(s, 'updateDoc', t.lf, e, n, r)
              : Gy(s, 'updateDoc', t.lf, e)
            ).Pf(t.lf, qs.exists(!0))
          )
        );
      }
      function Yd(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        e instanceof Gr && (e = e._);
        var r = { includeMetadataChanges: !1 },
          i = 0;
        'object' != typeof n[i] || zd(n[i]) || ((r = n[i]), i++);
        var o,
          s,
          u,
          a,
          c,
          h,
          f = { includeMetadataChanges: r.includeMetadataChanges };
        return (
          zd(n[i]) &&
            ((o = n[i]),
            (n[i] = null === (r = o.next) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 1] =
              null === (r = o.error) || void 0 === r ? void 0 : r.bind(o)),
            (n[i + 2] =
              null === (r = o.complete) || void 0 === r ? void 0 : r.bind(o))),
          e instanceof Qd
            ? ((u = Kp(e.firestore, Dd)),
              (a = Au(e.lf.path)),
              (h = {
                next: function (t) {
                  n[i] && n[i](Zd(u, e, t));
                },
                error: n[i + 1],
                complete: n[i + 2]
              }))
            : ((s = Kp(e, Jd)),
              (u = Kp(s.firestore, Dd)),
              (a = s.Rf),
              (c = new Kd(u)),
              (h = {
                next: function (t) {
                  n[i] && n[i](new Ud(u, c, s, t));
                },
                error: n[i + 1],
                complete: n[i + 2]
              }),
              Ey(e.Rf)),
          (function (n, t, e) {
            var r = this,
              i = new bp(h),
              o = new tl(t, i, e);
            return (
              n.Ei.yi(function () {
                return y(r, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = Qf), [4, vv(n)];
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
                            return (e = Jf), [4, vv(n)];
                          case 1:
                            return [2, e.apply(void 0, [t.sent(), o])];
                        }
                      });
                    });
                  });
              }
            );
          })(kv(u), a, f)
        );
      }
      function Xd(t, e) {
        return (function (n, r) {
          var t = this,
            i = new Pa();
          return (
            n.Ei.yi(function () {
              return y(t, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (e = Ll), [4, yv(n)];
                    case 1:
                      return [2, e.apply(void 0, [t.sent(), r, i])];
                  }
                });
              });
            }),
            i.promise
          );
        })(kv(t), e);
      }
      function Zd(t, e, n) {
        var r = n.docs.get(e.lf),
          i = new Kd(t);
        return new Vd(
          t,
          i,
          e.lf,
          r,
          new Qv(n.hasPendingWrites, n.fromCache),
          e.ff
        );
      }
      var Qd =
          (Object.defineProperty(ty.prototype, 'yf', {
            get: function () {
              return this.lf.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ty.prototype, 'id', {
            get: function () {
              return this.lf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ty.prototype, 'path', {
            get: function () {
              return this.lf.path.et();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ty.prototype, 'parent', {
            get: function () {
              return new Ty(this.firestore, this.ff, this.lf.path.G());
            },
            enumerable: !1,
            configurable: !0
          }),
          (ty.prototype.withConverter = function (t) {
            return new ty(this.firestore, t, this.lf);
          }),
          ty),
        Jd =
          (($d.prototype.withConverter = function (t) {
            return new $d(this.firestore, t, this.Rf);
          }),
          $d),
        Ie = function () {};
      function $d(t, e, n) {
        (this.ff = e),
          (this.Rf = n),
          (this.type = 'query'),
          (this.firestore = t);
      }
      function ty(t, e, n) {
        (this.ff = e),
          (this.lf = n),
          (this.type = 'document'),
          (this.firestore = t);
      }
      function ey(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
          t = i[r].gf(t);
        }
        return t;
      }
      var ny,
        ry,
        iy,
        oy,
        sy,
        uy =
          (h(vy, (sy = Ie)),
          (vy.prototype.gf = function (t) {
            var e = Ly(t.firestore),
              e = (function (t, e, n, r, i, o) {
                if (r.rt()) {
                  if ('array-contains' === i || 'array-contains-any' === i)
                    throw new Nr(
                      Ar.INVALID_ARGUMENT,
                      "Invalid Query. You can't perform '" +
                        i +
                        "' queries on FieldPath.documentId()."
                    );
                  if ('in' === i || 'not-in' === i) {
                    wy(o, i);
                    for (var s = [], u = 0, a = o; u < a.length; u++) {
                      var c = a[u];
                      s.push(my(n, t, c));
                    }
                    h = { arrayValue: { values: s } };
                  } else h = my(n, t, o);
                } else
                  ('in' !== i &&
                    'not-in' !== i &&
                    'array-contains-any' !== i) ||
                    wy(o, i),
                    (h = Hy(e, 'where', o, 'in' === i || 'not-in' === i));
                var h = qu.create(r, i, h);
                return (
                  (function (t, e) {
                    if (e.Pn()) {
                      var n = Du(t);
                      if (null !== n && !n.isEqual(e.field))
                        throw new Nr(
                          Ar.INVALID_ARGUMENT,
                          "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                            n.toString() +
                            "' and '" +
                            e.field.toString() +
                            "'"
                        );
                      n = Su(t);
                      null !== n && by(0, e.field, n);
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
                            Ar.INVALID_ARGUMENT,
                            "Invalid query. You cannot use more than one '" +
                              e.op.toString() +
                              "' filter."
                          )
                        : new Nr(
                            Ar.INVALID_ARGUMENT,
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
            return new Jd(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = t.filters.concat([e])),
              new bu(
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
          vy),
        ay =
          (h(yy, (oy = Ie)),
          (yy.prototype.gf = function (t) {
            var e = (function (t, e, n) {
              if (null !== t.startAt)
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
                  'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
                );
              if (null !== t.endAt)
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
                  'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
                );
              var r = new da(e, n);
              return (
                (e = r),
                null !== Su((n = t)) ||
                  (null !== (t = Du(n)) && by(0, t, e.field)),
                r
              );
            })(t.Rf, this.Vf, this.vf);
            return new Jd(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = t.In.concat([e])),
              new bu(
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
          yy),
        cy =
          (h(dy, (iy = Ie)),
          (dy.prototype.gf = function (t) {
            return new Jd(t.firestore, t.ff, Pu(t.Rf, this.Sf, this.Df));
          }),
          dy),
        hy =
          (h(py, (ry = Ie)),
          (py.prototype.gf = function (t) {
            var e = gy(t, this.type, this.Cf, this.xf);
            return new Jd(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = e),
              new bu(
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
          py),
        fy =
          (h(ly, (ny = Ie)),
          (ly.prototype.gf = function (t) {
            var e = gy(t, this.type, this.Cf, this.xf);
            return new Jd(
              t.firestore,
              t.ff,
              ((t = t.Rf),
              (e = e),
              new bu(
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
          ly);
      function ly(t, e, n) {
        var r = this;
        return (
          ((r = ny.call(this) || this).type = t), (r.Cf = e), (r.xf = n), r
        );
      }
      function py(t, e, n) {
        var r = this;
        return (
          ((r = ry.call(this) || this).type = t), (r.Cf = e), (r.xf = n), r
        );
      }
      function dy(t, e, n) {
        var r = this;
        return (
          ((r = iy.call(this) || this).type = t), (r.Sf = e), (r.Df = n), r
        );
      }
      function yy(t, e) {
        var n = this;
        return (
          ((n = oy.call(this) || this).Vf = t),
          (n.vf = e),
          (n.type = 'orderBy'),
          n
        );
      }
      function vy(t, e, n) {
        var r = this;
        return (
          ((r = sy.call(this) || this).Vf = t),
          (r.pf = e),
          (r.bf = n),
          (r.type = 'where'),
          r
        );
      }
      function gy(t, c, e, n) {
        if ((e[0] instanceof Gr && (e[0] = e[0]._), e[0] instanceof pd))
          return (function (t, e, n, r) {
            if (!n)
              throw new Nr(
                Ar.NOT_FOUND,
                "Can't use a DocumentSnapshot that doesn't exist for " +
                  c +
                  '().'
              );
            for (var i = [], o = 0, s = ku(t); o < s.length; o++) {
              var u = s[o];
              if (u.field.rt()) i.push(Mo(e, n.key));
              else {
                var a = n.field(u.field);
                if (Ao(a))
                  throw new Nr(
                    Ar.INVALID_ARGUMENT,
                    'Invalid query. You are trying to start or end a query using a document for which the field "' +
                      u.field +
                      '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                  );
                if (null === a) {
                  u = u.field.et();
                  throw new Nr(
                    Ar.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      u +
                      "' (used as the orderBy) does not exist."
                  );
                }
                i.push(a);
              }
            }
            return new sa(i, r);
          })(t.Rf, t.firestore.q_, e[0]._f, n);
        var r = Ly(t.firestore);
        return (function (t, e, n, r, i, o) {
          var s = t.In;
          if (i.length > s.length)
            throw new Nr(
              Ar.INVALID_ARGUMENT,
              'Too many arguments provided to ' +
                r +
                '(). The number of arguments must be less than or equal to the number of orderBy() clauses'
            );
          for (var u = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (s[a].field.rt()) {
              if ('string' != typeof c)
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
                  'Invalid query. Expected a string for document ID in ' +
                    r +
                    '(), but got a ' +
                    typeof c
                );
              if (!Ou(t) && -1 !== c.indexOf('/'))
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
                  'Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ' +
                    r +
                    "() must be a plain document ID, but '" +
                    c +
                    "' contains a slash."
                );
              var h = t.path.child(fi.nt(c));
              if (!di.lt(h))
                throw new Nr(
                  Ar.INVALID_ARGUMENT,
                  'Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ' +
                    r +
                    "() must result in a valid document path, but '" +
                    h +
                    "' is not because it contains an odd number of segments."
                );
              h = new di(h);
              u.push(Mo(e, h));
            } else {
              c = Hy(n, r, c);
              u.push(c);
            }
          }
          return new sa(u, o);
        })(t.Rf, t.firestore.q_, r, c, e, n);
      }
      function my(t, e, n) {
        if ((n instanceof Gr && (n = n._), 'string' == typeof n)) {
          if ('' === n)
            throw new Nr(
              Ar.INVALID_ARGUMENT,
              'Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.'
            );
          if (!Ou(e) && -1 !== n.indexOf('/'))
            throw new Nr(
              Ar.INVALID_ARGUMENT,
              "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                n +
                "' contains a '/' character."
            );
          e = e.path.child(fi.nt(n));
          if (!di.lt(e))
            throw new Nr(
              Ar.INVALID_ARGUMENT,
              "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                e +
                "' is not because it has an odd number of segments (" +
                e.length +
                ').'
            );
          return Mo(t, new di(e));
        }
        if (n instanceof Qd) return Mo(t, n.lf);
        throw new Nr(
          Ar.INVALID_ARGUMENT,
          'Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ' +
            Gp(n) +
            '.'
        );
      }
      function wy(t, e) {
        if (!Array.isArray(t) || 0 === t.length)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            "Invalid Query. A non-empty array is required for '" +
              e.toString() +
              "' filters."
          );
        if (10 < t.length)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            "Invalid Query. '" +
              e.toString() +
              "' filters support a maximum of 10 elements in the value array."
          );
      }
      function by(t, e, n) {
        if (!n.isEqual(e))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
              e.toString() +
              "' and so you must also use '" +
              e.toString() +
              "' as your first argument to orderBy(), but your first orderBy() is on field '" +
              n.toString() +
              "' instead."
          );
      }
      function Ey(t) {
        if (xu(t) && 0 === t.In.length)
          throw new Nr(
            Ar.UNIMPLEMENTED,
            'limitToLast() queries require specifying at least one orderBy() clause'
          );
      }
      var Iy,
        Ty =
          (h(_y, (Iy = Jd)),
          Object.defineProperty(_y.prototype, 'id', {
            get: function () {
              return this.Rf.path.J();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(_y.prototype, 'path', {
            get: function () {
              return this.Rf.path.et();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(_y.prototype, 'parent', {
            get: function () {
              var t = this.yf.G();
              return t.Y() ? null : new Qd(this.firestore, null, new di(t));
            },
            enumerable: !1,
            configurable: !0
          }),
          (_y.prototype.withConverter = function (t) {
            return new _y(this.firestore, t, this.yf);
          }),
          _y);
      function _y(t, e, n) {
        var r = this;
        return (
          ((r = Iy.call(this, t, e, Au(n)) || this).firestore = t),
          (r.yf = n),
          (r.type = 'collection'),
          r
        );
      }
      function Ay(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Gr && (t = t._),
          jp('collection', 'path', e),
          t instanceof fd)
        )
          return zp((n = fi.nt.apply(fi, f([e], r)))), new Ty(t, null, n);
        if (!(t instanceof Qd || t instanceof Ty))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
          );
        return (
          zp((n = fi.nt.apply(fi, f([t.path], r)).child(fi.nt(e)))),
          new Ty(t.firestore, null, n)
        );
      }
      function Ny(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++)
          r[i - 2] = arguments[i];
        if (
          (t instanceof Gr && (t = t._),
          1 === arguments.length && (e = Vr.t()),
          jp('doc', 'path', e),
          t instanceof fd)
        )
          return (
            Bp((n = fi.nt.apply(fi, f([e], r)))), new Qd(t, null, new di(n))
          );
        if (!(t instanceof Qd || t instanceof Ty))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
          );
        return (
          Bp((n = t.yf.child(fi.nt.apply(fi, f([e], r))))),
          new Qd(t.firestore, t instanceof Ty ? t.ff : null, new di(n))
        );
      }
      var xy,
        Sy =
          (h(Dy, (xy = o)),
          (Dy.prototype.tf = function (t) {
            return new zr(t);
          }),
          (Dy.prototype.ef = function (t) {
            t = this.cf(t, this.firestore.q_);
            return new Qd(this.firestore, null, t);
          }),
          Dy);
      function Dy(t) {
        var e = this;
        return ((e = xy.call(this) || this).firestore = t), e;
      }
      function Oy(t, e) {
        return (
          t instanceof Gr && (t = t._),
          e instanceof Gr && (e = e._),
          (t instanceof Qd || t instanceof Ty) &&
            (e instanceof Qd || e instanceof Ty) &&
            t.firestore === e.firestore &&
            t.path === e.path &&
            t.ff === e.ff
        );
      }
      function ky(t, e) {
        return (
          t instanceof Gr && (t = t._),
          e instanceof Gr && (e = e._),
          t instanceof Jd &&
            e instanceof Jd &&
            t.firestore === e.firestore &&
            Ru(t.Rf, e.Rf) &&
            t.ff === e.ff
        );
      }
      function Ly(t) {
        var e = t.H_(),
          n = Gh(t.q_);
        return new qy(t.q_, !!e.ignoreUndefinedProperties, n);
      }
      var Py = /^__.*__$/,
        Ry =
          ((My.prototype.Pf = function (t, e) {
            var n = [];
            return (
              null !== this.sn
                ? n.push(new Zs(t, this.data, this.sn, e))
                : n.push(new Xs(t, this.data, e)),
              0 < this.fieldTransforms.length &&
                n.push(new eu(t, this.fieldTransforms)),
              n
            );
          }),
          My),
        Cy =
          ((Vy.prototype.Pf = function (t, e) {
            e = [new Zs(t, this.data, this.sn, e)];
            return (
              0 < this.fieldTransforms.length &&
                e.push(new eu(t, this.fieldTransforms)),
              e
            );
          }),
          Vy);
      function Vy(t, e, n) {
        (this.data = t), (this.sn = e), (this.fieldTransforms = n);
      }
      function My(t, e, n) {
        (this.data = t), (this.sn = e), (this.fieldTransforms = n);
      }
      function Uy(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return 1;
          case 3:
          case 4:
            return;
          default:
            throw Rr();
        }
      }
      var jy =
          (Object.defineProperty(By.prototype, 'path', {
            get: function () {
              return this.settings.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(By.prototype, 'S_', {
            get: function () {
              return this.settings.S_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (By.prototype.Ff = function (t) {
            return new By(
              Object.assign(Object.assign({}, this.settings), t),
              this.T,
              this.serializer,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.sn
            );
          }),
          (By.prototype.Of = function (t) {
            var e =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              e = this.Ff({ path: e, x_: !1 });
            return e.kf(t), e;
          }),
          (By.prototype.Mf = function (t) {
            var e,
              t =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              t = this.Ff({ path: t, x_: !1 });
            return t.Nf(), t;
          }),
          (By.prototype.Lf = function (t) {
            return this.Ff({ path: void 0, x_: !0 });
          }),
          (By.prototype.D_ = function (t) {
            return tv(
              t,
              this.settings.methodName,
              this.settings.$f || !1,
              this.path,
              this.settings.C_
            );
          }),
          (By.prototype.contains = function (e) {
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
          (By.prototype.Nf = function () {
            if (this.path)
              for (var t = 0; t < this.path.length; t++)
                this.kf(this.path.get(t));
          }),
          (By.prototype.kf = function (t) {
            if (0 === t.length)
              throw this.D_('Document fields must not be empty');
            if (Uy(this.S_) && Py.test(t))
              throw this.D_('Document fields cannot begin and end with "__"');
          }),
          By),
        qy =
          ((Fy.prototype.Bf = function (t, e, n, r) {
            return (
              void 0 === r && (r = !1),
              new jy(
                { S_: t, methodName: e, C_: n, path: pi.st(), x_: !1, $f: r },
                this.T,
                this.serializer,
                this.ignoreUndefinedProperties
              )
            );
          }),
          Fy);
      function Fy(t, e, n) {
        (this.T = t),
          (this.ignoreUndefinedProperties = e),
          (this.serializer = n || Gh(t));
      }
      function By(t, e, n, r, i, o) {
        (this.settings = t),
          (this.T = e),
          (this.serializer = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.Nf(),
          (this.fieldTransforms = i || []),
          (this.sn = o || []);
      }
      function zy(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var s = t.Bf(o.merge || o.mergeFields ? 2 : 0, e, n, i);
        Zy('Data must be an object, but it was:', s, r);
        var u,
          a,
          r = Yy(r, s);
        if (o.merge) (u = new Vs(s.sn)), (a = s.fieldTransforms);
        else if (o.mergeFields) {
          for (var c = [], h = 0, f = o.mergeFields; h < f.length; h++) {
            var l = Qy(e, f[h], n);
            if (!s.contains(l))
              throw new Nr(
                Ar.INVALID_ARGUMENT,
                "Field '" +
                  l +
                  "' is specified in your field mask but missing from your input data."
              );
            ev(c, l) || c.push(l);
          }
          (u = new Vs(c)),
            (a = s.fieldTransforms.filter(function (t) {
              return u.hn(t.field);
            }));
        } else (u = null), (a = s.fieldTransforms);
        return new Ry(new au(r), u, a);
      }
      function Gy(t, r, i, e) {
        var o = t.Bf(1, r, i);
        Zy('Data must be an object, but it was:', o, e);
        var s = [],
          u = new cu();
        To(e, function (t, e) {
          var n = $y(r, t, i);
          e instanceof Gr && (e = e._);
          t = o.Mf(n);
          e instanceof Xp
            ? s.push(n)
            : null != (t = Wy(e, t)) && (s.push(n), u.set(n, t));
        });
        e = new Vs(s);
        return new Cy(u._n(), e, o.fieldTransforms);
      }
      function Ky(t, e, n, r, i, o) {
        var s = t.Bf(1, e, n),
          u = [Qy(e, r, n)],
          a = [i];
        if (o.length % 2 != 0)
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Function ' +
              e +
              '() needs to be called with an even number of arguments that alternate between field names and values.'
          );
        for (var c = 0; c < o.length; c += 2)
          u.push(Qy(e, o[c])), a.push(o[c + 1]);
        for (var h, f, l, p = [], d = new cu(), y = u.length - 1; 0 <= y; --y) {
          ev(p, u[y]) ||
            ((h = u[y]),
            (f = a[y]) instanceof Gr && (f = f._),
            (l = s.Mf(h)),
            f instanceof Xp
              ? p.push(h)
              : null != (l = Wy(f, l)) && (p.push(h), d.set(h, l)));
        }
        i = new Vs(p);
        return new Cy(d._n(), i, s.fieldTransforms);
      }
      function Hy(t, e, n, r) {
        return void 0 === r && (r = !1), Wy(n, t.Bf(r ? 4 : 3, e));
      }
      function Wy(s, t) {
        if ((s instanceof Gr && (s = s._), Xy(s)))
          return Zy('Unsupported field value:', t, s), Yy(s, t);
        if (s instanceof Yp)
          return (
            (function (t, e) {
              if (!Uy(e.S_))
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
              var o = Wy(i[r], t.Lf(n));
              null == o && (o = { nullValue: 'NULL_VALUE' }), e.push(o), n++;
            }
            return { arrayValue: { values: e } };
          })(t);
        }
        return (function (t, e) {
          if ((t instanceof Gr && (t = t._), null === t))
            return { nullValue: 'NULL_VALUE' };
          if ('number' == typeof t) return Yo(e.serializer, t);
          if ('boolean' == typeof t) return { booleanValue: t };
          if ('string' == typeof t) return { stringValue: t };
          if (t instanceof Date) {
            var n = ci.fromDate(t);
            return { timestampValue: Xo(e.serializer, n) };
          }
          if (t instanceof ci)
            return (
              (n = new ci(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
              { timestampValue: Xo(e.serializer, n) }
            );
          if (t instanceof ad)
            return {
              geoPointValue: { latitude: t.latitude, longitude: t.longitude }
            };
          if (t instanceof zr) return { bytesValue: Zo(e.serializer, t.l) };
          if (t instanceof Qd) {
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
            return { referenceValue: Jo(t.firestore.q_ || e.T, t.lf.path) };
          }
          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.D_('Unsupported field value: ' + Gp(t));
        })(s, t);
      }
      function Yy(t, n) {
        var r = {};
        return (
          _o(t)
            ? n.path && 0 < n.path.length && n.sn.push(n.path)
            : To(t, function (t, e) {
                e = Wy(e, n.Of(t));
                null != e && (r[t] = e);
              }),
          { mapValue: { fields: r } }
        );
      }
      function Xy(t) {
        return !(
          'object' != typeof t ||
          null === t ||
          t instanceof Array ||
          t instanceof Date ||
          t instanceof ci ||
          t instanceof ad ||
          t instanceof zr ||
          t instanceof Qd ||
          t instanceof Yp
        );
      }
      function Zy(t, e, n) {
        if (
          !Xy(n) ||
          'object' != typeof (r = n) ||
          null === r ||
          (Object.getPrototypeOf(r) !== Object.prototype &&
            null !== Object.getPrototypeOf(r))
        ) {
          n = Gp(n);
          throw 'an object' === n
            ? e.D_(t + ' a custom object')
            : e.D_(t + ' ' + n);
        }
        var r;
      }
      function Qy(t, e, n) {
        if ((e instanceof Gr && (e = e._), e instanceof Sd)) return e.df;
        if ('string' == typeof e) return $y(t, e);
        throw tv(
          'Field path arguments must be of type string or FieldPath.',
          t,
          !1,
          void 0,
          n
        );
      }
      var Jy = new RegExp('[~\\*/\\[\\]]');
      function $y(e, n, r) {
        if (0 <= n.search(Jy))
          throw tv(
            'Invalid field path (' +
              n +
              "). Paths must not contain '~', '*', '/', '[', or ']'",
            e,
            !1,
            void 0,
            r
          );
        try {
          return new (Sd.bind.apply(Sd, f([void 0], n.split('.'))))().df;
        } catch (t) {
          throw tv(
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
      function tv(t, e, n, r, i) {
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
          new Nr(Ar.INVALID_ARGUMENT, (e += '. ') + t + n)
        );
      }
      function ev(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      var nv =
          ((uv.prototype.Wf = function (r) {
            return y(this, void 0, void 0, function () {
              var e,
                n = this;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    if ((this.jf(), 0 < this.mutations.length))
                      throw new Nr(
                        Ar.INVALID_ARGUMENT,
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
                                  (e = is((n = s).serializer) + '/documents'),
                                  (r = {
                                    documents: u.map(function (t) {
                                      return ts(n.serializer, t);
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
                                              Cr(!!e.found),
                                                e.found.name,
                                                e.found.updateTime;
                                              var n = es(t, e.found.name),
                                                t = Qo(e.found.updateTime),
                                                e = new au({
                                                  mapValue: {
                                                    fields: e.found.fields
                                                  }
                                                });
                                              return new gu(n, t, e, {});
                                            })(e, t)
                                          : 'missing' in t
                                          ? (function (t, e) {
                                              Cr(!!e.missing), Cr(!!e.readTime);
                                              (t = es(t, e.missing)),
                                                (e = Qo(e.readTime));
                                              return new mu(t, e);
                                            })(e, t)
                                          : Rr());
                                    i.set(t.key.toString(), t);
                                  }),
                                  (o = []),
                                  [
                                    2,
                                    (u.forEach(function (t) {
                                      t = i.get(t.toString());
                                      Cr(!!t), o.push(t);
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
                        t instanceof mu || t instanceof gu ? n.Gf(t) : Rr();
                      }),
                      e)
                    ];
                }
              });
            });
          }),
          (uv.prototype.set = function (t, e) {
            this.write(e.Pf(t, this.cn(t))), this.Kf.add(t.toString());
          }),
          (uv.prototype.update = function (t, e) {
            try {
              this.write(e.Pf(t, this.zf(t)));
            } catch (t) {
              this.Qf = t;
            }
            this.Kf.add(t.toString());
          }),
          (uv.prototype.delete = function (t) {
            this.write([new su(t, this.cn(t))]), this.Kf.add(t.toString());
          }),
          (uv.prototype.commit = function () {
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
                        e = di.at(e);
                        n.mutations.push(new uu(e, n.cn(e)));
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
                                    (n = is((e = i).serializer) + '/documents'),
                                    (r = {
                                      writes: o.map(function (t) {
                                        return as(e.serializer, t);
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
          (uv.prototype.Gf = function (t) {
            var e;
            if (t instanceof gu) e = t.version;
            else {
              if (!(t instanceof mu)) throw Rr();
              e = hi.min();
            }
            var n = this.qf.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new Nr(
                  Ar.ABORTED,
                  'Document version changed between two reads.'
                );
            } else this.qf.set(t.key.toString(), e);
          }),
          (uv.prototype.cn = function (t) {
            var e = this.qf.get(t.toString());
            return !this.Kf.has(t.toString()) && e ? qs.updateTime(e) : qs.an();
          }),
          (uv.prototype.zf = function (t) {
            var e = this.qf.get(t.toString());
            if (this.Kf.has(t.toString()) || !e) return qs.exists(!0);
            if (e.isEqual(hi.min()))
              throw new Nr(
                Ar.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist."
              );
            return qs.updateTime(e);
          }),
          (uv.prototype.write = function (t) {
            this.jf(), (this.mutations = this.mutations.concat(t));
          }),
          (uv.prototype.jf = function () {}),
          uv),
        rv =
          ((sv.prototype.run = function () {
            this.Jf();
          }),
          (sv.prototype.Jf = function () {
            var t = this;
            this.Ci.Us(function () {
              return y(t, void 0, void 0, function () {
                var e,
                  n,
                  r = this;
                return v(this, function (t) {
                  return (
                    (e = new nv(this.eu)),
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
          (sv.prototype.Yf = function (t) {
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
          (sv.prototype.Xf = function (t) {
            var e = this;
            0 < this.Hf && this.Zf(t)
              ? (--this.Hf,
                this.Ei.yi(function () {
                  return e.Jf(), Promise.resolve();
                }))
              : this.Ii.reject(t);
          }),
          (sv.prototype.Zf = function (t) {
            if ('FirebaseError' !== t.name) return !1;
            t = t.code;
            return 'aborted' === t || 'failed-precondition' === t || !Mi(t);
          }),
          sv),
        iv =
          ((ov.prototype.getConfiguration = function () {
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
          (ov.prototype.ed = function (t) {
            var e = this;
            (this.td = t),
              this.N.promise.then(function () {
                return e.td(e.user);
              });
          }),
          (ov.prototype.nd = function () {
            if (this.Ei.Ni)
              throw new Nr(
                Ar.FAILED_PRECONDITION,
                'The client has already been terminated.'
              );
          }),
          (ov.prototype.terminate = function () {
            var t = this;
            this.Ei.Mi();
            var n = new Pa();
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
                          (e = nc(e, 'Failed to shutdown persistence')),
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
          ov);
      function ov(t, e, n) {
        var r = this;
        (this.credentials = t),
          (this.Ei = e),
          (this.n_ = n),
          (this.user = Jr.UNAUTHENTICATED),
          (this.clientId = Vr.t()),
          (this.td = function () {}),
          (this.N = new Pa()),
          this.credentials.S(function (t) {
            Or('FirestoreClient', 'Received user=', t.uid),
              r.user.isEqual(t) || ((r.user = t), r.td(t)),
              r.N.resolve();
          });
      }
      function sv(t, e, n, r) {
        (this.Ei = t),
          (this.eu = e),
          (this.updateFunction = n),
          (this.Ii = r),
          (this.Hf = 5),
          (this.Ci = new Ra(this.Ei, 'transaction_retry'));
      }
      function uv(t) {
        (this.eu = t),
          (this.qf = new Map()),
          (this.mutations = []),
          (this.Uf = !1),
          (this.Qf = null),
          (this.Kf = new Set());
      }
      function av(r, i) {
        return y(this, void 0, void 0, function () {
          var e,
            n = this;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  r.Ei.qi(),
                  Or(
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
                              return [4, of(i.Zc, e)];
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
      }
      function cv(r, i) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return r.Ei.qi(), [4, hv(r)];
              case 1:
                return (
                  (e = t.sent()),
                  Or('FirestoreClient', 'Initializing OnlineComponentProvider'),
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
                        return y(this, void 0, void 0, function () {
                          var e, n;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (e = r).Ei.qi(),
                                  Or(
                                    'RemoteStore',
                                    'RemoteStore received new credentials'
                                  ),
                                  (n = Uf(e)),
                                  e.ru.add(3),
                                  [4, kf(e)]
                                );
                              case 1:
                                return (
                                  t.sent(),
                                  n && e.uu.set('Unknown'),
                                  [4, e.nu.V_(i)]
                                );
                              case 2:
                                return t.sent(), e.ru.delete(3), [4, Of(e)];
                              case 3:
                                return t.sent(), [2];
                            }
                          });
                        });
                      })(i.sl, t);
                    });
                  }),
                  (r.sd = i),
                  [2]
                );
            }
          });
        });
      }
      function hv(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.rd
                  ? [3, 2]
                  : (Or(
                      'FirestoreClient',
                      'Using default OfflineComponentProvider'
                    ),
                    [4, av(e, new vp())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.rd];
            }
          });
        });
      }
      function fv(e) {
        return y(this, void 0, void 0, function () {
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return e.sd
                  ? [3, 2]
                  : (Or(
                      'FirestoreClient',
                      'Using default OnlineComponentProvider'
                    ),
                    [4, cv(e, new wp())]);
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [2, e.sd];
            }
          });
        });
      }
      function lv(t) {
        return hv(t).then(function (t) {
          return t.persistence;
        });
      }
      function pv(t) {
        return hv(t).then(function (t) {
          return t.Zc;
        });
      }
      function dv(t) {
        return fv(t).then(function (t) {
          return t.sl;
        });
      }
      function yv(t) {
        return fv(t).then(function (t) {
          return t.ju;
        });
      }
      function vv(r) {
        return y(this, void 0, void 0, function () {
          var e, n;
          return v(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, fv(r)];
              case 1:
                return (
                  (e = t.sent()),
                  [
                    2,
                    (((n = e.il).Iu = function (s, u) {
                      return y(this, void 0, void 0, function () {
                        var e, n, r, i, o;
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return (
                                (e = Xl(s)),
                                (o = e.al.get(u))
                                  ? ((n = o.targetId),
                                    e.rl.wh(n),
                                    (r = o.view.el()),
                                    [3, 4])
                                  : [3, 1]
                              );
                            case 1:
                              return [4, hf(e.Zc, Lu(u))];
                            case 2:
                              return (
                                (i = t.sent()),
                                (o = e.rl.wh(i.targetId)),
                                (n = i.targetId),
                                [4, kl(e, u, n, 'current' === o)]
                              );
                            case 3:
                              (r = t.sent()),
                                e.ml && Lf(e.sl, i),
                                (t.label = 4);
                            case 4:
                              return [2, r];
                          }
                        });
                      });
                    }.bind(null, e.ju)),
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
                                          return !Ru(t, o);
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
                                          ff(e.Zc, n.targetId, !1)
                                            .then(function () {
                                              e.rl.Ih(n.targetId),
                                                Pf(e.sl, n.targetId),
                                                jl(e, n.targetId);
                                            })
                                            .catch(vf)
                                        ])
                                  : [3, 3]
                              );
                            case 1:
                              t.sent(), (t.label = 2);
                            case 2:
                              return [3, 5];
                            case 3:
                              return (
                                jl(e, n.targetId), [4, ff(e.Zc, n.targetId, !0)]
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
      function gv(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new Pa();
        return (
          n.Ei.yi(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (n, r, i, o, s) {
                        var t = new bp({
                            next: function (t) {
                              r.yi(function () {
                                return Jf(n, u);
                              });
                              var e = t.docs.has(i);
                              !e && t.fromCache
                                ? s.reject(
                                    new Nr(
                                      Ar.UNAVAILABLE,
                                      'Failed to get document because the client is offline.'
                                    )
                                  )
                                : e && t.fromCache && o && 'server' === o.source
                                ? s.reject(
                                    new Nr(
                                      Ar.UNAVAILABLE,
                                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                    )
                                  )
                                : s.resolve(t);
                            },
                            error: function (t) {
                              return s.reject(t);
                            }
                          }),
                          u = new tl(Au(i.path), t, {
                            includeMetadataChanges: !0,
                            Su: !0
                          });
                        return Qf(n, u);
                      }),
                      [4, vv(n)]
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
      function mv(n, r, i) {
        var t = this;
        void 0 === i && (i = {});
        var o = new Pa();
        return (
          n.Ei.yi(function () {
            return y(t, void 0, void 0, function () {
              var e;
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = function (e, n, t, r, i) {
                        var o = new bp({
                            next: function (t) {
                              n.yi(function () {
                                return Jf(e, s);
                              }),
                                t.fromCache && 'server' === r.source
                                  ? i.reject(
                                      new Nr(
                                        Ar.UNAVAILABLE,
                                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                      )
                                    )
                                  : i.resolve(t);
                            },
                            error: function (t) {
                              return i.reject(t);
                            }
                          }),
                          s = new tl(t, o, {
                            includeMetadataChanges: !0,
                            Su: !0
                          });
                        return Qf(e, s);
                      }),
                      [4, vv(n)]
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
      var wv =
        ((bv.prototype.set = function (t, e, n) {
          this.ld();
          (t = Ev(t, this.uf)),
            (e = lg(t.ff, e, n)),
            (n = zy(this.hd, 'WriteBatch.set', t.lf, e, null !== t.ff, n));
          return (this.ad = this.ad.concat(n.Pf(t.lf, qs.an()))), this;
        }),
        (bv.prototype.update = function (t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          this.ld();
          t = Ev(t, this.uf);
          return (
            e instanceof Gr && (e = e._),
            (e =
              'string' == typeof e || e instanceof Sd
                ? Ky(this.hd, 'WriteBatch.update', t.lf, e, n, r)
                : Gy(this.hd, 'WriteBatch.update', t.lf, e)),
            (this.ad = this.ad.concat(e.Pf(t.lf, qs.exists(!0)))),
            this
          );
        }),
        (bv.prototype.delete = function (t) {
          this.ld();
          t = Ev(t, this.uf);
          return (this.ad = this.ad.concat(new su(t.lf, qs.an()))), this;
        }),
        (bv.prototype.commit = function () {
          return (
            this.ld(),
            (this.ud = !0),
            0 < this.ad.length ? this.od(this.ad) : Promise.resolve()
          );
        }),
        (bv.prototype.ld = function () {
          if (this.ud)
            throw new Nr(
              Ar.FAILED_PRECONDITION,
              'A write batch can no longer be used after commit() has been called.'
            );
        }),
        bv);
      function bv(t, e) {
        (this.uf = t),
          (this.od = e),
          (this.ad = []),
          (this.ud = !1),
          (this.hd = Ly(t));
      }
      function Ev(t, e) {
        if ((t instanceof Gr && (t = t._), t.firestore !== e))
          throw new Nr(
            Ar.INVALID_ARGUMENT,
            'Provided document reference is from a different Firestore instance.'
          );
        return t;
      }
      var Iv,
        Tv,
        _v =
          ((Ov.prototype.get = function (t) {
            var e = this,
              n = Ev(t, this.uf),
              r = new Sy(this.uf);
            return this._d.Wf([n.lf]).then(function (t) {
              if (!t || 1 !== t.length) return Rr();
              t = t[0];
              if (t instanceof mu) return new pd(e.uf, r, n.lf, null, n.ff);
              if (t instanceof gu) return new pd(e.uf, r, t.key, t, n.ff);
              throw Rr();
            });
          }),
          (Ov.prototype.set = function (t, e, n) {
            (t = Ev(t, this.uf)),
              (e = lg(t.ff, e, n)),
              (n = zy(this.hd, 'Transaction.set', t.lf, e, null !== t.ff, n));
            return this._d.set(t.lf, n), this;
          }),
          (Ov.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            t = Ev(t, this.uf);
            return (
              e instanceof Gr && (e = e._),
              (e =
                'string' == typeof e || e instanceof Sd
                  ? Ky(this.hd, 'Transaction.update', t.lf, e, n, r)
                  : Gy(this.hd, 'Transaction.update', t.lf, e)),
              this._d.update(t.lf, e),
              this
            );
          }),
          (Ov.prototype.delete = function (t) {
            t = Ev(t, this.uf);
            return this._d.delete(t.lf), this;
          }),
          h(Dv, (Tv = Ov)),
          (Dv.prototype.get = function (t) {
            var e = this,
              n = Ev(t, this.uf),
              r = new Kd(this.uf);
            return Tv.prototype.get.call(this, t).then(function (t) {
              return new Vd(e.uf, r, n.lf, t._f, new Qv(!1, !1), n.ff);
            });
          }),
          Dv),
        Av =
          ((Sv.prototype.enableIndexedDbPersistence = function (t, e) {
            return (function (t, e) {
              Pd((t = Kp(t, Dd)));
              var n = kv(t),
                r = t.H_(),
                t = new wp();
              return Ld(
                n,
                t,
                new gp(
                  t,
                  r.cacheSizeBytes,
                  null == e ? void 0 : e.forceOwnership
                )
              );
            })(t._, { forceOwnership: e });
          }),
          (Sv.prototype.enableMultiTabIndexedDbPersistence = function (t) {
            return (function (t) {
              Pd((t = Kp(t, Dd)));
              var e = kv(t),
                n = t.H_(),
                t = new wp();
              return Ld(e, t, new mp(t, n.cacheSizeBytes));
            })(t._);
          }),
          (Sv.prototype.clearIndexedDbPersistence = function (t) {
            return (function (n) {
              var t = this;
              if (n.K_ && !n.W_)
                throw new Nr(
                  Ar.FAILED_PRECONDITION,
                  'Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.'
                );
              var r = new Pa();
              return (
                n.wf.Fi(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            t.trys.push([0, 2, , 3]),
                            [
                              4,
                              (function (n) {
                                return y(this, void 0, void 0, function () {
                                  var e;
                                  return v(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return Ca.Hs()
                                          ? ((e = n + 'main'),
                                            [4, Ca.delete(e)])
                                          : [2, Promise.resolve()];
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                  });
                                });
                              })(Fh(n.q_, n.M_))
                            ]
                          );
                        case 1:
                          return t.sent(), r.resolve(), [3, 3];
                        case 2:
                          return (e = t.sent()), r.reject(e), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(t._);
          }),
          Sv),
        Nv =
          (h(xv, (Iv = Gr)),
          Object.defineProperty(xv.prototype, 'q_', {
            get: function () {
              return this._.q_;
            },
            enumerable: !1,
            configurable: !0
          }),
          (xv.prototype.settings = function (t) {
            t.merge &&
              delete (t = Object.assign(Object.assign({}, this._.z_()), t))
                .merge,
              this._.G_(t);
          }),
          (xv.prototype.useEmulator = function (t, e) {
            'firestore.googleapis.com' !== this._.z_().host &&
              Lr(
                'Host has been set in both settings() and useEmulator(), emulator host will be used'
              ),
              this.settings({ host: t + ':' + e, ssl: !1, merge: !0 });
          }),
          (xv.prototype.enableNetwork = function () {
            return (function (r) {
              var t = this;
              return r.Ei.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, lv(r)];
                      case 1:
                        return (e = t.sent()), [4, dv(r)];
                      case 2:
                        return (
                          (n = t.sent()),
                          [2, (e.ac(!0), (t = n).ru.delete(0), Of(t))]
                        );
                    }
                  });
                });
              });
            })(kv(Kp(this._, Dd)));
          }),
          (xv.prototype.disableNetwork = function () {
            return (function (r) {
              var t = this;
              return r.Ei.enqueue(function () {
                return y(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, lv(r)];
                      case 1:
                        return (e = t.sent()), [4, dv(r)];
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
                                      return (e = n).ru.add(0), [4, kf(e)];
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
            })(kv(Kp(this._, Dd)));
          }),
          (xv.prototype.enablePersistence = function (t) {
            var e = !1,
              n = !1;
            return (
              t &&
                Fp(
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
          (xv.prototype.clearPersistence = function () {
            return this.fd.clearIndexedDbPersistence(this);
          }),
          (xv.prototype.terminate = function () {
            return (
              this.app._removeServiceInstance('firestore'),
              this.app._removeServiceInstance('firestore-exp'),
              this._._delete()
            );
          }),
          (xv.prototype.waitForPendingWrites = function () {
            return (function (n) {
              var t = this,
                r = new Pa();
              return (
                n.Ei.yi(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (e = Vl), [4, yv(n)];
                        case 1:
                          return [2, e.apply(void 0, [t.sent(), r])];
                      }
                    });
                  });
                }),
                r.promise
              );
            })(kv(Kp(this._, Dd)));
          }),
          (xv.prototype.onSnapshotsInSync = function (t) {
            return (
              (e = this._),
              (t = t),
              (function (n, t) {
                var e = this,
                  r = new bp(t);
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
                              [4, vv(n)]
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
                                  [4, vv(n)]
                                );
                              case 1:
                                return [2, e.apply(void 0, [t.sent(), r])];
                            }
                          });
                        });
                      });
                  }
                );
              })(kv(Kp(e, Dd)), zd(t) ? t : { next: t })
            );
            var e;
          }),
          Object.defineProperty(xv.prototype, 'app', {
            get: function () {
              if (!this.dd)
                throw new Nr(
                  Ar.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                );
              return this.dd;
            },
            enumerable: !1,
            configurable: !0
          }),
          (xv.prototype.collection = function (t) {
            try {
              return new rg(this, Ay(this._, t));
            } catch (t) {
              throw Bv(t, 'collection()', 'Firestore.collection()');
            }
          }),
          (xv.prototype.doc = function (t) {
            try {
              return new Uv(this, Ny(this._, t));
            } catch (t) {
              throw Bv(t, 'doc()', 'Firestore.doc()');
            }
          }),
          (xv.prototype.collectionGroup = function (t) {
            try {
              return new tg(
                this,
                (function (t, e) {
                  if (
                    ((t = Kp(t, fd)),
                    jp('collectionGroup', 'collection id', e),
                    0 <= e.indexOf('/'))
                  )
                    throw new Nr(
                      Ar.INVALID_ARGUMENT,
                      "Invalid collection ID '" +
                        e +
                        "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                    );
                  return new Jd(t, null, ((e = e), new bu(fi.st(), e)));
                })(this._, t)
              );
            } catch (t) {
              throw Bv(t, 'collectionGroup()', 'Firestore.collectionGroup()');
            }
          }),
          (xv.prototype.runTransaction = function (e) {
            var n,
              r = this;
            return (function (n, r) {
              var t = this,
                i = new Pa();
              return (
                n.Ei.yi(function () {
                  return y(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            fv(n).then(function (t) {
                              return t.eu;
                            })
                          ];
                        case 1:
                          return (
                            (e = t.sent()), new rv(n.Ei, e, r, i).run(), [2]
                          );
                      }
                    });
                  });
                }),
                i.promise
              );
            })(kv((n = this._)), function (t) {
              return (t = new _v(n, t)), e(new Vv(r, t));
            });
          }),
          (xv.prototype.batch = function () {
            var e = this;
            return (
              kv(this._),
              new Mv(
                new wv(this._, function (t) {
                  return Xd(e._, t);
                })
              )
            );
          }),
          (xv.prototype.loadBundle = function (t) {
            throw new Nr(
              Ar.FAILED_PRECONDITION,
              '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          (xv.prototype.namedQuery = function (t) {
            throw new Nr(
              Ar.FAILED_PRECONDITION,
              '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
            );
          }),
          xv);
      function xv(t, e, n) {
        var r = this;
        return (
          ((r = Iv.call(this, e) || this).fd = n),
          (r.INTERNAL = {
            delete: function () {
              return r.terminate();
            }
          }),
          t instanceof Qr || (r.dd = t),
          r
        );
      }
      function Sv() {}
      function Dv(t, e) {
        var n = this;
        return ((n = Tv.call(this, t, e) || this).uf = t), n;
      }
      function Ov(t, e) {
        (this.uf = t), (this._d = e), (this.hd = Ly(t));
      }
      function kv(t) {
        return t.Ef || Lv(t), t.Ef.nd(), t.Ef;
      }
      function Lv(t) {
        var e,
          n,
          r = t.H_(),
          r =
            ((e = t.q_),
            (n = t.M_),
            new Zr(
              e,
              n,
              r.host,
              r.ssl,
              r.experimentalForceLongPolling,
              r.experimentalAutoDetectLongPolling
            ));
        t.Ef = new iv(t.U_, t.wf, r);
      }
      var Pv,
        Rv,
        Cv,
        Vv =
          (h(Fv, (Cv = Gr)),
          (Fv.prototype.get = function (t) {
            var e = this,
              t = fg(t);
            return this._.get(t).then(function (t) {
              return new Jv(e.uf, t);
            });
          }),
          (Fv.prototype.set = function (t, e, n) {
            t = fg(t);
            return (
              n
                ? (qp('Transaction.set', n), this._.set(t, e, n))
                : this._.set(t, e),
              this
            );
          }),
          (Fv.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = fg(t);
            return (
              2 === arguments.length
                ? this._.update(o, e)
                : (t = this._).update.apply(t, f([o, e, n], r)),
              this
            );
          }),
          (Fv.prototype.delete = function (t) {
            t = fg(t);
            return this._.delete(t), this;
          }),
          Fv),
        Mv =
          (h(qv, (Rv = Gr)),
          (qv.prototype.set = function (t, e, n) {
            t = fg(t);
            return (
              n
                ? (qp('WriteBatch.set', n), this._.set(t, e, n))
                : this._.set(t, e),
              this
            );
          }),
          (qv.prototype.update = function (t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++)
              r[i - 3] = arguments[i];
            var o = fg(t);
            return (
              2 === arguments.length
                ? this._.update(o, e)
                : (t = this._).update.apply(t, f([o, e, n], r)),
              this
            );
          }),
          (qv.prototype.delete = function (t) {
            t = fg(t);
            return this._.delete(t), this;
          }),
          (qv.prototype.commit = function () {
            return this._.commit();
          }),
          qv),
        Uv =
          (h(jv, (Pv = Gr)),
          (jv.wd = function (t, e, n) {
            if (t.length % 2 != 0)
              throw new Nr(
                Ar.INVALID_ARGUMENT,
                'Invalid document reference. Document references must have an even number of segments, but ' +
                  t.et() +
                  ' has ' +
                  t.length
              );
            return new jv(e, new Qd(e._, n, new di(t)));
          }),
          (jv.af = function (t, e, n) {
            return new jv(e, new Qd(e._, n, t));
          }),
          Object.defineProperty(jv.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(jv.prototype, 'parent', {
            get: function () {
              return new rg(this.firestore, this._.parent);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(jv.prototype, 'path', {
            get: function () {
              return this._.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          (jv.prototype.collection = function (t) {
            try {
              return new rg(this.firestore, Ay(this._, t));
            } catch (t) {
              throw Bv(t, 'collection()', 'DocumentReference.collection()');
            }
          }),
          (jv.prototype.isEqual = function (t) {
            return (
              t instanceof Gr && (t = t._), t instanceof Qd && Oy(this._, t)
            );
          }),
          (jv.prototype.set = function (t, e) {
            e = qp('DocumentReference.set', e);
            try {
              return (function (t, e, n) {
                t = Kp(t, Qd);
                var r = Kp(t.firestore, Dd),
                  e = lg(t.ff, e, n);
                return Xd(
                  r,
                  zy(Ly(r), 'setDoc', t.lf, e, null !== t.ff, n).Pf(
                    t.lf,
                    qs.an()
                  )
                );
              })(this._, t, e);
            } catch (t) {
              throw Bv(t, 'setDoc()', 'DocumentReference.set()');
            }
          }),
          (jv.prototype.update = function (t, e) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            try {
              return 1 === arguments.length
                ? Wd(this._, t)
                : Wd.apply(void 0, f([this._, t, e], n));
            } catch (t) {
              throw Bv(t, 'updateDoc()', 'DocumentReference.update()');
            }
          }),
          (jv.prototype.delete = function () {
            return Xd(Kp((t = this._).firestore, Dd), [new su(t.lf, qs.an())]);
            var t;
          }),
          (jv.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = zv(t),
              i = Gv(t, function (t) {
                return new Jv(
                  e.firestore,
                  new Vd(e.firestore._, e.hf, t.lf, t._f, t.metadata, e._.ff)
                );
              });
            return Yd(this._, r, i);
          }),
          (jv.prototype.get = function (t) {
            var e = this;
            return ('cache' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Kp(e, Qd);
                  var n = Kp(e.firestore, Dd),
                    t = kv(n),
                    r = new Kd(n);
                  return (function (n, r) {
                    var t = this,
                      i = new Pa();
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
                                              (r = t.sent()) instanceof gu
                                                ? s.resolve(r)
                                                : r instanceof mu
                                                ? s.resolve(null)
                                                : s.reject(
                                                    new Nr(
                                                      Ar.UNAVAILABLE,
                                                      "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                    )
                                                  ),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (r = t.sent()),
                                              (r = nc(
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
                                  [4, pv(n)]
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
                    return new Vd(
                      n,
                      r,
                      e.lf,
                      t,
                      new Qv(t instanceof gu && t.ln, !0),
                      e.ff
                    );
                  });
                }
              : 'server' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Kp(e, Qd);
                  var n = Kp(e.firestore, Dd);
                  return gv(kv(n), e.lf, { source: 'server' }).then(function (
                    t
                  ) {
                    return Zd(n, e, t);
                  });
                }
              : function (e) {
                  e = Kp(e, Qd);
                  var n = Kp(e.firestore, Dd);
                  return gv(kv(n), e.lf).then(function (t) {
                    return Zd(n, e, t);
                  });
                })(this._).then(function (t) {
              return new Jv(
                e.firestore,
                new Vd(e.firestore._, e.hf, t.lf, t._f, t.metadata, e._.ff)
              );
            });
          }),
          (jv.prototype.withConverter = function (t) {
            return new jv(this.firestore, this._.withConverter(t));
          }),
          jv);
      function jv(t, e) {
        var n = this;
        return (
          ((n = Pv.call(this, e) || this).firestore = t), (n.hf = new ld(t)), n
        );
      }
      function qv() {
        return (null !== Rv && Rv.apply(this, arguments)) || this;
      }
      function Fv(t, e) {
        var n = this;
        return ((n = Cv.call(this, e) || this).uf = t), n;
      }
      function Bv(t, e, n) {
        return (t.message = t.message.replace(e, n)), t;
      }
      function zv(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var r = n[e];
          if ('object' == typeof r && !zd(r)) return r;
        }
        return {};
      }
      function Gv(t, e) {
        var n;
        return {
          next: function (t) {
            n.next && n.next(e(t));
          },
          error:
            null ===
              (t = (n = zd(t[0])
                ? t[0]
                : zd(t[1])
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
      var Kv,
        Hv,
        Wv,
        Yv,
        Xv,
        Zv,
        Qv =
          ((hg.prototype.isEqual = function (t) {
            return (
              this.hasPendingWrites === t.hasPendingWrites &&
              this.fromCache === t.fromCache
            );
          }),
          hg),
        Jv =
          (h(cg, (Zv = Gr)),
          Object.defineProperty(cg.prototype, 'ref', {
            get: function () {
              return new Uv(this.uf, this._.ref);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(cg.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(cg.prototype, 'metadata', {
            get: function () {
              return this._.metadata;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(cg.prototype, 'exists', {
            get: function () {
              return this._.exists();
            },
            enumerable: !1,
            configurable: !0
          }),
          (cg.prototype.data = function (t) {
            return this._.data(t);
          }),
          (cg.prototype.get = function (t, e) {
            return this._.get(t, e);
          }),
          (cg.prototype.isEqual = function (t) {
            return Bd(this._, t._);
          }),
          cg),
        $v =
          (h(ag, (Xv = Jv)),
          (ag.prototype.data = function (t) {
            return this._.data(t);
          }),
          ag),
        tg =
          (h(ug, (Yv = Gr)),
          (ug.prototype.where = function (t, e, n) {
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  ((r = n), (i = e), (o = Nd('where', t)), new uy(o, i, r))
                )
              );
            } catch (t) {
              throw Bv(t, /(orderBy|where)\(\)/, 'Query.$1()');
            }
            var r, i, o;
          }),
          (ug.prototype.orderBy = function (n, t) {
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  (function (t) {
                    void 0 === t && (t = 'asc');
                    var e = t,
                      t = Nd('orderBy', n);
                    return new ay(t, e);
                  })(t)
                )
              );
            } catch (n) {
              throw Bv(n, /(orderBy|where)\(\)/, 'Query.$1()');
            }
          }),
          (ug.prototype.limit = function (t) {
            try {
              return new ug(
                this.firestore,
                ey(this._, (Hp('limit', (e = t)), new cy('limit', e, 'F')))
              );
            } catch (t) {
              throw Bv(t, 'limit()', 'Query.limit()');
            }
            var e;
          }),
          (ug.prototype.limitToLast = function (t) {
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  (Hp('limitToLast', (e = t)), new cy('limitToLast', e, 'L'))
                )
              );
            } catch (t) {
              throw Bv(t, 'limitToLast()', 'Query.limitToLast()');
            }
            var e;
          }),
          (ug.prototype.startAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new hy('startAt', t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Bv(t, 'startAt()', 'Query.startAt()');
            }
          }),
          (ug.prototype.startAfter = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new hy('startAfter', t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Bv(t, 'startAfter()', 'Query.startAfter()');
            }
          }),
          (ug.prototype.endBefore = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new fy('endBefore', t, !0);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Bv(t, 'endBefore()', 'Query.endBefore()');
            }
          }),
          (ug.prototype.endAt = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            try {
              return new ug(
                this.firestore,
                ey(
                  this._,
                  function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    return new fy('endAt', t, !1);
                  }.apply(void 0, t)
                )
              );
            } catch (t) {
              throw Bv(t, 'endAt()', 'Query.endAt()');
            }
          }),
          (ug.prototype.isEqual = function (t) {
            return ky(this._, t._);
          }),
          (ug.prototype.get = function (t) {
            var e = this;
            return ('cache' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Kp(e, Jd);
                  var n = Kp(e.firestore, Dd),
                    t = kv(n),
                    r = new Kd(n);
                  return (function (n, r) {
                    var t = this,
                      i = new Pa();
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
                                              [4, lf(r, i, !0)]
                                            );
                                          case 1:
                                            return (
                                              (n = t.sent()),
                                              (e = new ml(i, n.la)),
                                              (n = e.Gh(n.documents)),
                                              (n = e.es(n, !1)),
                                              o.resolve(n.snapshot),
                                              [3, 3]
                                            );
                                          case 2:
                                            return (
                                              (n = t.sent()),
                                              (n = nc(
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
                                  [4, pv(n)]
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
                    return new Ud(n, r, e, t);
                  });
                }
              : 'server' === (null == t ? void 0 : t.source)
              ? function (e) {
                  e = Kp(e, Jd);
                  var n = Kp(e.firestore, Dd),
                    t = kv(n),
                    r = new Kd(n);
                  return mv(t, e.Rf, { source: 'server' }).then(function (t) {
                    return new Ud(n, r, e, t);
                  });
                }
              : function (e) {
                  e = Kp(e, Jd);
                  var n = Kp(e.firestore, Dd),
                    t = kv(n),
                    r = new Kd(n);
                  return (
                    Ey(e.Rf),
                    mv(t, e.Rf).then(function (t) {
                      return new Ud(n, r, e, t);
                    })
                  );
                })(this._).then(function (t) {
              return new ng(
                e.firestore,
                new Ud(e.firestore._, e.hf, e._, t.mf)
              );
            });
          }),
          (ug.prototype.onSnapshot = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var r = zv(t),
              i = Gv(t, function (t) {
                return new ng(
                  e.firestore,
                  new Ud(e.firestore._, e.hf, e._, t.mf)
                );
              });
            return Yd(this._, r, i);
          }),
          (ug.prototype.withConverter = function (t) {
            return new ug(this.firestore, this._.withConverter(t));
          }),
          ug),
        eg =
          (h(sg, (Wv = Gr)),
          Object.defineProperty(sg.prototype, 'type', {
            get: function () {
              return this._.type;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(sg.prototype, 'doc', {
            get: function () {
              return new $v(this.uf, this._.doc);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(sg.prototype, 'oldIndex', {
            get: function () {
              return this._.oldIndex;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(sg.prototype, 'newIndex', {
            get: function () {
              return this._.newIndex;
            },
            enumerable: !1,
            configurable: !0
          }),
          sg),
        ng =
          (h(og, (Hv = Gr)),
          Object.defineProperty(og.prototype, 'query', {
            get: function () {
              return new tg(this.uf, this._.query);
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(og.prototype, 'metadata', {
            get: function () {
              return this._.metadata;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(og.prototype, 'size', {
            get: function () {
              return this._.size;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(og.prototype, 'empty', {
            get: function () {
              return this._.empty;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(og.prototype, 'docs', {
            get: function () {
              var e = this;
              return this._.docs.map(function (t) {
                return new $v(e.uf, t);
              });
            },
            enumerable: !1,
            configurable: !0
          }),
          (og.prototype.docChanges = function (t) {
            var e = this;
            return this._.docChanges(t).map(function (t) {
              return new eg(e.uf, t);
            });
          }),
          (og.prototype.forEach = function (e, n) {
            var r = this;
            this._.forEach(function (t) {
              e.call(n, new $v(r.uf, t));
            });
          }),
          (og.prototype.isEqual = function (t) {
            return Bd(this._, t._);
          }),
          og),
        rg =
          (h(ig, (Kv = tg)),
          Object.defineProperty(ig.prototype, 'id', {
            get: function () {
              return this._.id;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ig.prototype, 'path', {
            get: function () {
              return this._.path;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(ig.prototype, 'parent', {
            get: function () {
              var t = this._.parent;
              return t ? new Uv(this.firestore, t) : null;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ig.prototype.doc = function (t) {
            try {
              return new Uv(
                this.firestore,
                void 0 === t ? Ny(this._) : Ny(this._, t)
              );
            } catch (t) {
              throw Bv(t, 'doc()', 'CollectionReference.doc()');
            }
          }),
          (ig.prototype.add = function (t) {
            var e,
              n,
              r,
              i = this;
            return (
              (e = this._),
              (n = t),
              (t = Kp(e.firestore, Dd)),
              (r = Ny(e)),
              (n = lg(e.ff, n)),
              Xd(
                t,
                zy(Ly(e.firestore), 'addDoc', r.lf, n, null !== e.ff, {}).Pf(
                  r.lf,
                  qs.exists(!1)
                )
              )
                .then(function () {
                  return r;
                })
                .then(function (t) {
                  return new Uv(i.firestore, t);
                })
            );
          }),
          (ig.prototype.isEqual = function (t) {
            return Oy(this._, t._);
          }),
          (ig.prototype.withConverter = function (t) {
            return new ig(this.firestore, this._.withConverter(t));
          }),
          ig);
      function ig(t, e) {
        var n = this;
        return ((n = Kv.call(this, t, e) || this).firestore = t), (n._ = e), n;
      }
      function og(t, e) {
        var n = this;
        return ((n = Hv.call(this, e) || this).uf = t), n;
      }
      function sg(t, e) {
        var n = this;
        return ((n = Wv.call(this, e) || this).uf = t), n;
      }
      function ug(t, e) {
        var n = this;
        return (
          ((n = Yv.call(this, e) || this).firestore = t), (n.hf = new ld(t)), n
        );
      }
      function ag() {
        return (null !== Xv && Xv.apply(this, arguments)) || this;
      }
      function cg(t, e) {
        var n = this;
        return ((n = Zv.call(this, e) || this).uf = t), n;
      }
      function hg(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      function fg(t) {
        return t instanceof Gr && (t = t._), Kp(t, Qd);
      }
      function lg(t, e, n) {
        return t
          ? n && (n.merge || n.mergeFields)
            ? t.toFirestore(e, n)
            : t.toFirestore(e)
          : e;
      }
      var pg,
        dg,
        Ie =
          (h(mg, (dg = Gr)),
          (mg.documentId = function () {
            return new mg(pi.ot().et());
          }),
          (mg.prototype.isEqual = function (t) {
            return (
              t instanceof Gr && (t = t._),
              t instanceof Sd && this._.df.isEqual(t.df)
            );
          }),
          mg),
        o =
          (h(gg, (pg = Gr)),
          (gg.serverTimestamp = function () {
            var t = new id('serverTimestamp');
            return (t._methodName = 'FieldValue.serverTimestamp'), new gg(t);
          }),
          (gg.delete = function () {
            var t = new Xp('deleteField');
            return (t._methodName = 'FieldValue.delete'), new gg(t);
          }),
          (gg.arrayUnion = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new od('arrayUnion', t);
            }.apply(void 0, t);
            return (n._methodName = 'FieldValue.arrayUnion'), new gg(n);
          }),
          (gg.arrayRemove = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new sd('arrayRemove', t);
            }.apply(void 0, t);
            return (n._methodName = 'FieldValue.arrayRemove'), new gg(n);
          }),
          (gg.increment = function (t) {
            t = new ud('increment', t);
            return (t._methodName = 'FieldValue.increment'), new gg(t);
          }),
          (gg.prototype.isEqual = function (t) {
            return this._.isEqual(t._);
          }),
          gg),
        yg =
          ((vg.prototype.onProgress = function (t, e, n) {
            this.Ed = { next: t, error: e, complete: n };
          }),
          (vg.prototype.catch = function (t) {
            return this.Td.promise.catch(t);
          }),
          (vg.prototype.then = function (t, e) {
            return this.Td.promise.then(t, e);
          }),
          (vg.prototype.Rl = function (t) {
            this.Pl(t),
              this.Ed.complete && this.Ed.complete(),
              this.Td.resolve(t);
          }),
          (vg.prototype.yl = function (t) {
            (this.md.taskState = 'Error'),
              this.Ed.next && this.Ed.next(this.md),
              this.Ed.error && this.Ed.error(t),
              this.Td.reject(t);
          }),
          (vg.prototype.Pl = function (t) {
            (this.md = t), this.Ed.next && this.Ed.next(t);
          }),
          vg);
      function vg() {
        (this.Ed = {}),
          (this.Td = new Pa()),
          (this.md = {
            taskState: 'Running',
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
          });
      }
      function gg() {
        return (null !== pg && pg.apply(this, arguments)) || this;
      }
      function mg() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return dg.call(this, new (Sd.bind.apply(Sd, f([void 0], t)))()) || this;
      }
      var wg =
        ((bg.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        (bg.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        (bg.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        bg);
      function bg(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var Eg,
        Ig,
        Tg = {
          Firestore: Nv,
          GeoPoint: ad,
          Timestamp: ci,
          Blob: Xr,
          Transaction: Vv,
          WriteBatch: Mv,
          DocumentReference: Uv,
          DocumentSnapshot: Jv,
          Query: tg,
          QueryDocumentSnapshot: $v,
          QuerySnapshot: ng,
          CollectionReference: rg,
          FieldPath: Ie,
          FieldValue: o,
          setLogLevel: function (t) {
            xr.setLogLevel(t);
          },
          CACHE_SIZE_UNLIMITED: -1
        };
      (Eg = e.default).INTERNAL.registerComponent(
        new wg(
          'firestore',
          function (t) {
            var e = t.getProvider('app').getImmediate();
            return (
              (e = e),
              (t = t.getProvider('auth-internal')),
              new Nv(e, new Dd(e, t), new Av())
            );
          },
          'PUBLIC'
        ).setServiceProps(Object.assign({}, Tg))
      ),
        Eg.registerVersion('@firebase/firestore', '2.0.4'),
        ((Ig = Nv).prototype.loadBundle = function (t) {
          return (
            (e = this),
            (o = t),
            (t = new yg()),
            (function (n, t, r) {
              var e = this,
                i = (function (t, e) {
                  t = 'string' == typeof t ? new TextEncoder().encode(t) : t;
                  return new Hh(zh(t), e);
                })(o, Gh(t));
              n.Ei.yi(function () {
                return y(e, void 0, void 0, function () {
                  var e;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = Ql), [4, yv(n)];
                      case 1:
                        return e.apply(void 0, [t.sent(), i, r]), [2];
                    }
                  });
                });
              });
            })(kv(e._), e.q_, t),
            t
          );
          var e, o;
        }),
        (Ig.prototype.namedQuery = function (t) {
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
                          [4, pv(n)]
                        );
                      case 1:
                        return [2, e.apply(void 0, [t.sent(), r])];
                    }
                  });
                });
              });
            })(kv((e = this)._), t).then(function (t) {
              return t ? new tg(e, new Jd(e._, null, t.query)) : null;
            })
          );
          var e;
        });
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        'Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-firestore.js.map
