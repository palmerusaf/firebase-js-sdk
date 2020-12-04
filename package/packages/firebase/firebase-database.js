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
})(this, function (Zi) {
  'use strict';
  try {
    (function () {
      function t(t) {
        return t && 'object' == typeof t && 'default' in t ? t : { default: t };
      }
      var e = t(Zi),
        r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        };
      function n(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function i(t, s, a, h) {
        return new (a = a || Promise)(function (n, e) {
          function r(t) {
            try {
              o(h.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(h.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof a
                  ? e
                  : new a(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((h = h.apply(t, s || [])).next());
        });
      }
      function o(n, r) {
        var i,
          o,
          s,
          a = {
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
              for (; a; )
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
                      return a.label++, { value: e[1], done: !1 };
                    case 5:
                      a.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                        a.label = e[1];
                        break;
                      }
                      if (6 === e[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = e);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(e);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  e = r.call(n, a);
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
      function f(t) {
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
      function _(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          s = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(_(arguments[e]));
        return t;
      }
      function a(t) {
        for (var e = [], n = 0, r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);
          i < 128
            ? (e[n++] = i)
            : (i < 2048
                ? (e[n++] = (i >> 6) | 192)
                : (55296 == (64512 & i) &&
                  r + 1 < t.length &&
                  56320 == (64512 & t.charCodeAt(r + 1))
                    ? ((i =
                        65536 +
                        ((1023 & i) << 10) +
                        (1023 & t.charCodeAt(++r))),
                      (e[n++] = (i >> 18) | 240),
                      (e[n++] = ((i >> 12) & 63) | 128))
                    : (e[n++] = (i >> 12) | 224),
                  (e[n++] = ((i >> 6) & 63) | 128)),
              (e[n++] = (63 & i) | 128));
        }
        return e;
      }
      function h(t) {
        try {
          return p.decodeString(t, !0);
        } catch (t) {
          console.error('base64Decode failed: ', t);
        }
        return null;
      }
      var u = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: '${JSCORE_VERSION}'
        },
        y = function (t, e) {
          if (!t) throw c(e);
        },
        c = function (t) {
          return new Error(
            'Firebase Database (' +
              u.SDK_VERSION +
              ') INTERNAL ASSERT FAILED: ' +
              t
          );
        },
        p = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/=';
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.';
          },
          HAS_NATIVE_SUPPORT: 'function' == typeof atob,
          encodeByteArray: function (t, e) {
            if (!Array.isArray(t))
              throw Error('encodeByteArray takes an array as a parameter');
            this.init_();
            for (
              var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                i = 0;
              i < t.length;
              i += 3
            ) {
              var o = t[i],
                s = i + 1 < t.length,
                a = s ? t[i + 1] : 0,
                h = i + 2 < t.length,
                l = h ? t[i + 2] : 0,
                u = o >> 2,
                o = ((3 & o) << 4) | (a >> 4),
                a = ((15 & a) << 2) | (l >> 6),
                l = 63 & l;
              h || ((l = 64), s || (a = 64)), r.push(n[u], n[o], n[a], n[l]);
            }
            return r.join('');
          },
          encodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e
              ? btoa(t)
              : this.encodeByteArray(a(t), e);
          },
          decodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e
              ? atob(t)
              : (function (t) {
                  for (var e = [], n = 0, r = 0; n < t.length; ) {
                    var i,
                      o,
                      s,
                      a = t[n++];
                    a < 128
                      ? (e[r++] = String.fromCharCode(a))
                      : 191 < a && a < 224
                      ? ((o = t[n++]),
                        (e[r++] = String.fromCharCode(
                          ((31 & a) << 6) | (63 & o)
                        )))
                      : 239 < a && a < 365
                      ? ((i =
                          (((7 & a) << 18) |
                            ((63 & (o = t[n++])) << 12) |
                            ((63 & (s = t[n++])) << 6) |
                            (63 & t[n++])) -
                          65536),
                        (e[r++] = String.fromCharCode(55296 + (i >> 10))),
                        (e[r++] = String.fromCharCode(56320 + (1023 & i))))
                      : ((o = t[n++]),
                        (s = t[n++]),
                        (e[r++] = String.fromCharCode(
                          ((15 & a) << 12) | ((63 & o) << 6) | (63 & s)
                        )));
                  }
                  return e.join('');
                })(this.decodeStringToByteArray(t, e));
          },
          decodeStringToByteArray: function (t, e) {
            this.init_();
            for (
              var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                i = 0;
              i < t.length;

            ) {
              var o = n[t.charAt(i++)],
                s = i < t.length ? n[t.charAt(i)] : 0,
                a = ++i < t.length ? n[t.charAt(i)] : 64,
                h = ++i < t.length ? n[t.charAt(i)] : 64;
              if ((++i, null == o || null == s || null == a || null == h))
                throw Error();
              o = (o << 2) | (s >> 4);
              r.push(o),
                64 !== a &&
                  ((s = ((s << 4) & 240) | (a >> 2)),
                  r.push(s),
                  64 !== h && ((h = ((a << 6) & 192) | h), r.push(h)));
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var t = 0; t < this.ENCODED_VALS.length; t++)
                (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                  (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                  (this.byteToCharMapWebSafe_[
                    t
                  ] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                  (this.charToByteMapWebSafe_[
                    this.byteToCharMapWebSafe_[t]
                  ] = t) >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[
                      this.ENCODED_VALS_WEBSAFE.charAt(t)
                    ] = t),
                    (this.charToByteMapWebSafe_[
                      this.ENCODED_VALS.charAt(t)
                    ] = t));
            }
          }
        };
      function d(t) {
        return (function t(e, n) {
          if (!(n instanceof Object)) return n;
          switch (n.constructor) {
            case Date:
              var r = n;
              return new Date(r.getTime());
            case Object:
              void 0 === e && (e = {});
              break;
            case Array:
              e = [];
              break;
            default:
              return n;
          }
          for (var i in n)
            n.hasOwnProperty(i) && '__proto__' !== i && (e[i] = t(e[i], n[i]));
          return e;
        })(void 0, t);
      }
      var g =
        ((v.prototype.wrapCallback = function (n) {
          var r = this;
          return function (t, e) {
            t ? r.reject(t) : r.resolve(e),
              'function' == typeof n &&
                (r.promise.catch(function () {}),
                1 === n.length ? n(t) : n(t, e));
          };
        }),
        v);
      function v() {
        var n = this;
        (this.reject = function () {}),
          (this.resolve = function () {}),
          (this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          }));
      }
      function m() {
        return (
          'undefined' != typeof window &&
          (window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
            'undefined' != typeof navigator &&
              'string' == typeof navigator.userAgent
              ? navigator.userAgent
              : ''
          )
        );
      }
      function C() {
        return !0 === u.NODE_ADMIN;
      }
      var E,
        w = 'FirebaseError',
        b = (n(S, (E = Error)), S);
      function S(t, e, n) {
        e = E.call(this, e) || this;
        return (
          (e.code = t),
          (e.customData = n),
          (e.name = w),
          Object.setPrototypeOf(e, S.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(e, T.prototype.create),
          e
        );
      }
      var T =
        ((I.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r,
            i = e[0] || {},
            o = this.service + '/' + t,
            t = this.errors[t],
            t = t
              ? ((r = i),
                t.replace(N, function (t, e) {
                  var n = r[e];
                  return null != n ? String(n) : '<' + e + '?>';
                }))
              : 'Error',
            t = this.serviceName + ': ' + t + ' (' + o + ').';
          return new b(o, t, i);
        }),
        I);
      function I(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var N = /\{\$([^}]+)}/g;
      function R(t) {
        return JSON.parse(t);
      }
      function P(t) {
        return JSON.stringify(t);
      }
      function D(t) {
        var e = {},
          n = {},
          r = {},
          i = '';
        try {
          var o = t.split('.'),
            e = R(h(o[0]) || ''),
            n = R(h(o[1]) || ''),
            i = o[2],
            r = n.d || {};
          delete n.d;
        } catch (t) {}
        return { header: e, claims: n, data: r, signature: i };
      }
      function O(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      function x(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
      }
      function k(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      function A(t, e, n) {
        var r,
          i = {};
        for (r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            (i[r] = e.call(n, t[r], r, t));
        return i;
      }
      var F =
        ((L.prototype.reset = function () {
          (this.chain_[0] = 1732584193),
            (this.chain_[1] = 4023233417),
            (this.chain_[2] = 2562383102),
            (this.chain_[3] = 271733878),
            (this.chain_[4] = 3285377520),
            (this.inbuf_ = 0),
            (this.total_ = 0);
        }),
        (L.prototype.compress_ = function (t, e) {
          e = e || 0;
          var n = this.W_;
          if ('string' == typeof t)
            for (var r = 0; r < 16; r++)
              (n[r] =
                (t.charCodeAt(e) << 24) |
                (t.charCodeAt(e + 1) << 16) |
                (t.charCodeAt(e + 2) << 8) |
                t.charCodeAt(e + 3)),
                (e += 4);
          else
            for (r = 0; r < 16; r++)
              (n[r] =
                (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]),
                (e += 4);
          for (r = 16; r < 80; r++) {
            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
            n[r] = 4294967295 & ((i << 1) | (i >>> 31));
          }
          for (
            var o,
              s,
              a = this.chain_[0],
              h = this.chain_[1],
              l = this.chain_[2],
              u = this.chain_[3],
              c = this.chain_[4],
              r = 0;
            r < 80;
            r++
          ) {
            s =
              r < 40
                ? r < 20
                  ? ((o = u ^ (h & (l ^ u))), 1518500249)
                  : ((o = h ^ l ^ u), 1859775393)
                : r < 60
                ? ((o = (h & l) | (u & (h | l))), 2400959708)
                : ((o = h ^ l ^ u), 3395469782);
            (i = (((a << 5) | (a >>> 27)) + o + c + s + n[r]) & 4294967295),
              (c = u),
              (u = l),
              (l = 4294967295 & ((h << 30) | (h >>> 2))),
              (h = a),
              (a = i);
          }
          (this.chain_[0] = (this.chain_[0] + a) & 4294967295),
            (this.chain_[1] = (this.chain_[1] + h) & 4294967295),
            (this.chain_[2] = (this.chain_[2] + l) & 4294967295),
            (this.chain_[3] = (this.chain_[3] + u) & 4294967295),
            (this.chain_[4] = (this.chain_[4] + c) & 4294967295);
        }),
        (L.prototype.update = function (t, e) {
          if (null != t) {
            void 0 === e && (e = t.length);
            for (
              var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_;
              r < e;

            ) {
              if (0 === o)
                for (; r <= n; ) this.compress_(t, r), (r += this.blockSize);
              if ('string' == typeof t) {
                for (; r < e; )
                  if (((i[o] = t.charCodeAt(r)), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
              } else
                for (; r < e; )
                  if (((i[o] = t[r]), ++r, ++o === this.blockSize)) {
                    this.compress_(i), (o = 0);
                    break;
                  }
            }
            (this.inbuf_ = o), (this.total_ += e);
          }
        }),
        (L.prototype.digest = function () {
          var t = [],
            e = 8 * this.total_;
          this.inbuf_ < 56
            ? this.update(this.pad_, 56 - this.inbuf_)
            : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; 56 <= n; n--)
            (this.buf_[n] = 255 & e), (e /= 256);
          this.compress_(this.buf_);
          for (var r = 0, n = 0; n < 5; n++)
            for (var i = 24; 0 <= i; i -= 8)
              (t[r] = (this.chain_[n] >> i) & 255), ++r;
          return t;
        }),
        L);
      function L() {
        (this.chain_ = []),
          (this.buf_ = []),
          (this.W_ = []),
          (this.pad_ = []),
          (this.inbuf_ = 0),
          (this.total_ = 0),
          (this.blockSize = 64),
          (this.pad_[0] = 128);
        for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
        this.reset();
      }
      function M(t, e, n, r) {
        var i;
        if (
          (r < e
            ? (i = 'at least ' + e)
            : n < r && (i = 0 === n ? 'none' : 'no more than ' + n),
          i)
        )
          throw new Error(
            t +
              ' failed: Was called with ' +
              r +
              (1 === r ? ' argument.' : ' arguments.') +
              ' Expects ' +
              i +
              '.'
          );
      }
      function W(t, e, n) {
        var r = '';
        switch (e) {
          case 1:
            r = n ? 'first' : 'First';
            break;
          case 2:
            r = n ? 'second' : 'Second';
            break;
          case 3:
            r = n ? 'third' : 'Third';
            break;
          case 4:
            r = n ? 'fourth' : 'Fourth';
            break;
          default:
            throw new Error(
              'errorPrefix called with argumentNumber > 4.  Need to update it?'
            );
        }
        t += ' failed: ';
        return (t += r + ' argument ');
      }
      function q(t, e, n, r) {
        if ((!r || n) && 'function' != typeof n)
          throw new Error(W(t, e, r) + 'must be a valid function.');
      }
      function Q(t, e, n, r) {
        if ((!r || n) && ('object' != typeof n || null === n))
          throw new Error(W(t, e, r) + 'must be a valid context object.');
      }
      function U(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          var r = t.charCodeAt(n);
          r < 128
            ? e++
            : r < 2048
            ? (e += 2)
            : 55296 <= r && r <= 56319
            ? ((e += 4), n++)
            : (e += 3);
        }
        return e;
      }
      var V;
      function H() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
            r[i] = o[s];
        return r;
      }
      ((gt = V = V || {})[(gt.DEBUG = 0)] = 'DEBUG'),
        (gt[(gt.VERBOSE = 1)] = 'VERBOSE'),
        (gt[(gt.INFO = 2)] = 'INFO'),
        (gt[(gt.WARN = 3)] = 'WARN'),
        (gt[(gt.ERROR = 4)] = 'ERROR'),
        (gt[(gt.SILENT = 5)] = 'SILENT');
      function j(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = K[e];
          if (!o)
            throw new Error(
              'Attempted to log a message with an invalid logType (value: ' +
                e +
                ')'
            );
          console[o].apply(console, H(['[' + i + ']  ' + t.name + ':'], n));
        }
      }
      var B = {
          debug: V.DEBUG,
          verbose: V.VERBOSE,
          info: V.INFO,
          warn: V.WARN,
          error: V.ERROR,
          silent: V.SILENT
        },
        z = V.INFO,
        K =
          (((Ce = {})[V.DEBUG] = 'log'),
          (Ce[V.VERBOSE] = 'log'),
          (Ce[V.INFO] = 'info'),
          (Ce[V.WARN] = 'warn'),
          (Ce[V.ERROR] = 'error'),
          Ce),
        Y =
          (Object.defineProperty(G.prototype, 'logLevel', {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in V))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (G.prototype.setLogLevel = function (t) {
            this._logLevel = 'string' == typeof t ? B[t] : t;
          }),
          Object.defineProperty(G.prototype, 'logHandler', {
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
          Object.defineProperty(G.prototype, 'userLogHandler', {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (G.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, H([this, V.DEBUG], t)),
              this._logHandler.apply(this, H([this, V.DEBUG], t));
          }),
          (G.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, H([this, V.VERBOSE], t)),
              this._logHandler.apply(this, H([this, V.VERBOSE], t));
          }),
          (G.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, H([this, V.INFO], t)),
              this._logHandler.apply(this, H([this, V.INFO], t));
          }),
          (G.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, H([this, V.WARN], t)),
              this._logHandler.apply(this, H([this, V.WARN], t));
          }),
          (G.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, H([this, V.ERROR], t)),
              this._logHandler.apply(this, H([this, V.ERROR], t));
          }),
          G);
      function G(t) {
        (this.name = t),
          (this._logLevel = z),
          (this._logHandler = j),
          (this._userLogHandler = null);
      }
      var X =
        (($.prototype.setInstantiationMode = function (t) {
          return (this.instantiationMode = t), this;
        }),
        ($.prototype.setMultipleInstances = function (t) {
          return (this.multipleInstances = t), this;
        }),
        ($.prototype.setServiceProps = function (t) {
          return (this.serviceProps = t), this;
        }),
        $);
      function $(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var J = '[DEFAULT]',
        Z =
          ((tt.prototype.get = function (t) {
            void 0 === t && (t = J);
            var e = this.normalizeInstanceIdentifier(t);
            if (!this.instancesDeferred.has(e)) {
              var n = new g();
              this.instancesDeferred.set(e, n);
              try {
                var r = this.getOrInitializeService(e);
                r && n.resolve(r);
              } catch (t) {}
            }
            return this.instancesDeferred.get(e).promise;
          }),
          (tt.prototype.getImmediate = function (t) {
            var e = l({ identifier: J, optional: !1 }, t),
              t = e.identifier,
              n = e.optional,
              r = this.normalizeInstanceIdentifier(t);
            try {
              var i = this.getOrInitializeService(r);
              if (i) return i;
              if (n) return null;
              throw Error('Service ' + this.name + ' is not available');
            } catch (t) {
              if (n) return null;
              throw t;
            }
          }),
          (tt.prototype.getComponent = function () {
            return this.component;
          }),
          (tt.prototype.setComponent = function (t) {
            var e, n;
            if (t.name !== this.name)
              throw Error(
                'Mismatching Component ' +
                  t.name +
                  ' for Provider ' +
                  this.name +
                  '.'
              );
            if (this.component)
              throw Error(
                'Component for ' + this.name + ' has already been provided'
              );
            if ('EAGER' === (this.component = t).instantiationMode)
              try {
                this.getOrInitializeService(J);
              } catch (t) {}
            try {
              for (
                var r = f(this.instancesDeferred.entries()), i = r.next();
                !i.done;
                i = r.next()
              ) {
                var o = _(i.value, 2),
                  s = o[0],
                  a = o[1],
                  h = this.normalizeInstanceIdentifier(s);
                try {
                  var l = this.getOrInitializeService(h);
                  a.resolve(l);
                } catch (t) {}
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (tt.prototype.clearInstance = function (t) {
            void 0 === t && (t = J),
              this.instancesDeferred.delete(t),
              this.instances.delete(t);
          }),
          (tt.prototype.delete = function () {
            return i(this, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = Array.from(this.instances.values())),
                      [
                        4,
                        Promise.all(
                          s(
                            e
                              .filter(function (t) {
                                return 'INTERNAL' in t;
                              })
                              .map(function (t) {
                                return t.INTERNAL.delete();
                              }),
                            e
                              .filter(function (t) {
                                return '_delete' in t;
                              })
                              .map(function (t) {
                                return t._delete();
                              })
                          )
                        )
                      ]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (tt.prototype.isComponentSet = function () {
            return null != this.component;
          }),
          (tt.prototype.getOrInitializeService = function (t) {
            var e,
              n = this.instances.get(t);
            return (
              !n &&
                this.component &&
                ((n = this.component.instanceFactory(
                  this.container,
                  (e = t) === J ? void 0 : e
                )),
                this.instances.set(t, n)),
              n || null
            );
          }),
          (tt.prototype.normalizeInstanceIdentifier = function (t) {
            return !this.component || this.component.multipleInstances ? t : J;
          }),
          tt);
      function tt(t, e) {
        (this.name = t),
          (this.container = e),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map());
      }
      var et =
        ((nt.prototype.addComponent = function (t) {
          var e = this.getProvider(t.name);
          if (e.isComponentSet())
            throw new Error(
              'Component ' +
                t.name +
                ' has already been registered with ' +
                this.name
            );
          e.setComponent(t);
        }),
        (nt.prototype.addOrOverwriteComponent = function (t) {
          this.getProvider(t.name).isComponentSet() &&
            this.providers.delete(t.name),
            this.addComponent(t);
        }),
        (nt.prototype.getProvider = function (t) {
          if (this.providers.has(t)) return this.providers.get(t);
          var e = new Z(t, this);
          return this.providers.set(t, e), e;
        }),
        (nt.prototype.getProviders = function () {
          return Array.from(this.providers.values());
        }),
        nt);
      function nt(t) {
        (this.name = t), (this.providers = new Map());
      }
      var rt =
        ((it.prototype.set = function (t, e) {
          null == e
            ? this.domStorage_.removeItem(this.prefixedName_(t))
            : this.domStorage_.setItem(this.prefixedName_(t), P(e));
        }),
        (it.prototype.get = function (t) {
          t = this.domStorage_.getItem(this.prefixedName_(t));
          return null == t ? null : R(t);
        }),
        (it.prototype.remove = function (t) {
          this.domStorage_.removeItem(this.prefixedName_(t));
        }),
        (it.prototype.prefixedName_ = function (t) {
          return this.prefix_ + t;
        }),
        (it.prototype.toString = function () {
          return this.domStorage_.toString();
        }),
        it);
      function it(t) {
        (this.domStorage_ = t), (this.prefix_ = 'firebase:');
      }
      var ot =
        ((st.prototype.set = function (t, e) {
          null == e ? delete this.cache_[t] : (this.cache_[t] = e);
        }),
        (st.prototype.get = function (t) {
          return O(this.cache_, t) ? this.cache_[t] : null;
        }),
        (st.prototype.remove = function (t) {
          delete this.cache_[t];
        }),
        st);
      function st() {
        (this.cache_ = {}), (this.isInMemoryStorage = !0);
      }
      function at(t) {
        var e = (function (t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i,
              o = t.charCodeAt(r);
            55296 <= o &&
              o <= 56319 &&
              ((i = o - 55296),
              y(++r < t.length, 'Surrogate pair missing trail surrogate.'),
              (o = 65536 + (i << 10) + (t.charCodeAt(r) - 56320))),
              o < 128
                ? (e[n++] = o)
                : (o < 2048
                    ? (e[n++] = (o >> 6) | 192)
                    : (o < 65536
                        ? (e[n++] = (o >> 12) | 224)
                        : ((e[n++] = (o >> 18) | 240),
                          (e[n++] = ((o >> 12) & 63) | 128)),
                      (e[n++] = ((o >> 6) & 63) | 128)),
                  (e[n++] = (63 & o) | 128));
          }
          return e;
        })(t);
        return (t = new F()).update(e), (t = t.digest()), p.encodeByteArray(t);
      }
      function ht(t, e) {
        y(
          !e || !0 === t || !1 === t,
          "Can't turn on custom loggers persistently."
        ),
          !0 === t
            ? ((Ct.logLevel = V.VERBOSE),
              (bt = Ct.log.bind(Ct)),
              e && mt.set('logging_enabled', !0))
            : 'function' == typeof t
            ? (bt = t)
            : ((bt = null), mt.remove('logging_enabled'));
      }
      function lt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = 'FIREBASE INTERNAL ERROR: ' + wt.apply(void 0, s(t));
        Ct.error(n);
      }
      function ut() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = 'FIREBASE FATAL ERROR: ' + wt.apply(void 0, s(t));
        throw (Ct.error(n), new Error(n));
      }
      function ct() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = 'FIREBASE WARNING: ' + wt.apply(void 0, s(t));
        Ct.warn(n);
      }
      function pt(t) {
        return (
          'number' == typeof t &&
          (t != t ||
            t === Number.POSITIVE_INFINITY ||
            t === Number.NEGATIVE_INFINITY)
        );
      }
      function dt(t, e) {
        return t === e ? 0 : t < e ? -1 : 1;
      }
      function ft(t, e) {
        if (e && t in e) return e[t];
        throw new Error('Missing required key (' + t + ') in object: ' + P(e));
      }
      function _t(t, e) {
        var n = t.length;
        if (n <= e) return [t];
        for (var r = [], i = 0; i < n; i += e)
          n < i + e ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
        return r;
      }
      var yt,
        gt = function (t) {
          try {
            if ('undefined' != typeof window && void 0 !== window[t]) {
              var e = window[t];
              return (
                e.setItem('firebase:sentinel', 'cache'),
                e.removeItem('firebase:sentinel'),
                new rt(e)
              );
            }
          } catch (t) {}
          return new ot();
        },
        vt = gt('localStorage'),
        mt = gt('sessionStorage'),
        Ct = new Y('@firebase/database'),
        Et =
          ((yt = 1),
          function () {
            return yt++;
          }),
        wt = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          for (var n = '', r = 0; r < t.length; r++) {
            var i = t[r];
            Array.isArray(i) ||
            (i && 'object' == typeof i && 'number' == typeof i.length)
              ? (n += wt.apply(null, i))
              : (n += 'object' == typeof i ? P(i) : i),
              (n += ' ');
          }
          return n;
        },
        bt = null,
        St = !0,
        Tt = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          !0 === St &&
            ((St = !1),
            null === bt && !0 === mt.get('logging_enabled') && ht(!0)),
            bt && ((t = wt.apply(null, e)), bt(t));
        },
        It = function (n) {
          return function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            Tt.apply(void 0, s([n], t));
          };
        },
        Nt = '[MIN_NAME]',
        Rt = '[MAX_NAME]',
        Pt = function (t, e) {
          if (t === e) return 0;
          if (t === Nt || e === Rt) return -1;
          if (e === Nt || t === Rt) return 1;
          var n = Lt(t),
            r = Lt(e);
          return null !== n
            ? null !== r
              ? n - r == 0
                ? t.length - e.length
                : n - r
              : -1
            : null === r && t < e
            ? -1
            : 1;
        },
        Dt = function (t) {
          if ('object' != typeof t || null === t) return P(t);
          var e,
            n = [];
          for (e in t) n.push(e);
          n.sort();
          for (var r = '{', i = 0; i < n.length; i++)
            0 !== i && (r += ','),
              (r += P(n[i])),
              (r += ':'),
              (r += Dt(t[n[i]]));
          return (r += '}');
        };
      function Ot(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(n, t[n]);
      }
      function xt(t) {
        var e, n, r, i;
        y(!pt(t), 'Invalid JSON number'),
          0 === t
            ? (e = 1 / t == -1 / (r = n = 0) ? 1 : 0)
            : ((e = t < 0),
              (r =
                (t = Math.abs(t)) >= Math.pow(2, -1022)
                  ? ((n =
                      (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) +
                      1023),
                    Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52)))
                  : ((n = 0), Math.round(t / Math.pow(2, -1074)))));
        for (var o = [], s = 52; s; --s)
          o.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
        for (s = 11; s; --s) o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
        o.push(e ? 1 : 0), o.reverse();
        var a = o.join(''),
          h = '';
        for (s = 0; s < 64; s += 8) {
          var l = parseInt(a.substr(s, 8), 2).toString(16);
          1 === l.length && (l = '0' + l), (h += l);
        }
        return h.toLowerCase();
      }
      function kt(t) {
        try {
          t();
        } catch (e) {
          setTimeout(function () {
            var t = e.stack || '';
            throw (ct('Exception was thrown by user callback.', t), e);
          }, Math.floor(0));
        }
      }
      function At(t, e) {
        return (
          'object' == typeof (e = setTimeout(t, e)) && e.unref && e.unref(), e
        );
      }
      var Ft = new RegExp('^-?(0*)\\d{1,10}$'),
        Lt = function (t) {
          if (Ft.test(t)) {
            t = Number(t);
            if (-2147483648 <= t && t <= 2147483647) return t;
          }
          return null;
        },
        Mt =
          (Object.defineProperty(Wt, 'Empty', {
            get: function () {
              return new Wt('');
            },
            enumerable: !1,
            configurable: !0
          }),
          (Wt.prototype.getFront = function () {
            return this.pieceNum_ >= this.pieces_.length
              ? null
              : this.pieces_[this.pieceNum_];
          }),
          (Wt.prototype.getLength = function () {
            return this.pieces_.length - this.pieceNum_;
          }),
          (Wt.prototype.popFront = function () {
            var t = this.pieceNum_;
            return t < this.pieces_.length && t++, new Wt(this.pieces_, t);
          }),
          (Wt.prototype.getBack = function () {
            return this.pieceNum_ < this.pieces_.length
              ? this.pieces_[this.pieces_.length - 1]
              : null;
          }),
          (Wt.prototype.toString = function () {
            for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
              '' !== this.pieces_[e] && (t += '/' + this.pieces_[e]);
            return t || '/';
          }),
          (Wt.prototype.toUrlEncodedString = function () {
            for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
              '' !== this.pieces_[e] &&
                (t += '/' + encodeURIComponent(String(this.pieces_[e])));
            return t || '/';
          }),
          (Wt.prototype.slice = function (t) {
            return (
              void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t)
            );
          }),
          (Wt.prototype.parent = function () {
            if (this.pieceNum_ >= this.pieces_.length) return null;
            for (
              var t = [], e = this.pieceNum_;
              e < this.pieces_.length - 1;
              e++
            )
              t.push(this.pieces_[e]);
            return new Wt(t, 0);
          }),
          (Wt.prototype.child = function (t) {
            for (var e = [], n = this.pieceNum_; n < this.pieces_.length; n++)
              e.push(this.pieces_[n]);
            if (t instanceof Wt)
              for (n = t.pieceNum_; n < t.pieces_.length; n++)
                e.push(t.pieces_[n]);
            else
              for (var r = t.split('/'), n = 0; n < r.length; n++)
                0 < r[n].length && e.push(r[n]);
            return new Wt(e, 0);
          }),
          (Wt.prototype.isEmpty = function () {
            return this.pieceNum_ >= this.pieces_.length;
          }),
          (Wt.relativePath = function (t, e) {
            var n = t.getFront(),
              r = e.getFront();
            if (null === n) return e;
            if (n === r) return Wt.relativePath(t.popFront(), e.popFront());
            throw new Error(
              'INTERNAL ERROR: innerPath (' +
                e +
                ') is not within outerPath (' +
                t +
                ')'
            );
          }),
          (Wt.comparePaths = function (t, e) {
            for (
              var n = t.slice(), r = e.slice(), i = 0;
              i < n.length && i < r.length;
              i++
            ) {
              var o = Pt(n[i], r[i]);
              if (0 !== o) return o;
            }
            return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
          }),
          (Wt.prototype.equals = function (t) {
            if (this.getLength() !== t.getLength()) return !1;
            for (
              var e = this.pieceNum_, n = t.pieceNum_;
              e <= this.pieces_.length;
              e++, n++
            )
              if (this.pieces_[e] !== t.pieces_[n]) return !1;
            return !0;
          }),
          (Wt.prototype.contains = function (t) {
            var e = this.pieceNum_,
              n = t.pieceNum_;
            if (this.getLength() > t.getLength()) return !1;
            for (; e < this.pieces_.length; ) {
              if (this.pieces_[e] !== t.pieces_[n]) return !1;
              ++e, ++n;
            }
            return !0;
          }),
          Wt);
      function Wt(t, e) {
        if (void 0 === e) {
          this.pieces_ = t.split('/');
          for (var n = 0, r = 0; r < this.pieces_.length; r++)
            0 < this.pieces_[r].length &&
              ((this.pieces_[n] = this.pieces_[r]), n++);
          (this.pieces_.length = n), (this.pieceNum_ = 0);
        } else (this.pieces_ = t), (this.pieceNum_ = e);
      }
      var qt =
        (Object.defineProperty(Qt, 'MAX_PATH_DEPTH', {
          get: function () {
            return 32;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Qt, 'MAX_PATH_LENGTH_BYTES', {
          get: function () {
            return 768;
          },
          enumerable: !1,
          configurable: !0
        }),
        (Qt.prototype.push = function (t) {
          0 < this.parts_.length && (this.byteLength_ += 1),
            this.parts_.push(t),
            (this.byteLength_ += U(t)),
            this.checkValid_();
        }),
        (Qt.prototype.pop = function () {
          var t = this.parts_.pop();
          (this.byteLength_ -= U(t)),
            0 < this.parts_.length && --this.byteLength_;
        }),
        (Qt.prototype.checkValid_ = function () {
          if (this.byteLength_ > Qt.MAX_PATH_LENGTH_BYTES)
            throw new Error(
              this.errorPrefix_ +
                'has a key path longer than ' +
                Qt.MAX_PATH_LENGTH_BYTES +
                ' bytes (' +
                this.byteLength_ +
                ').'
            );
          if (this.parts_.length > Qt.MAX_PATH_DEPTH)
            throw new Error(
              this.errorPrefix_ +
                'path specified exceeds the maximum depth that can be written (' +
                Qt.MAX_PATH_DEPTH +
                ') or object contains a cycle ' +
                this.toErrorString()
            );
        }),
        (Qt.prototype.toErrorString = function () {
          return 0 === this.parts_.length
            ? ''
            : "in property '" + this.parts_.join('.') + "'";
        }),
        Qt);
      function Qt(t, e) {
        (this.errorPrefix_ = e),
          (this.parts_ = t.slice()),
          (this.byteLength_ = Math.max(1, this.parts_.length));
        for (var n = 0; n < this.parts_.length; n++)
          this.byteLength_ += U(this.parts_[n]);
        this.checkValid_();
      }
      var Ut = 'firebaseio.com',
        Vt = 'websocket',
        Ht = 'long_polling',
        jt =
          ((Bt.prototype.needsQueryParam = function () {
            return (
              this.host !== this.internalHost ||
              this.isCustomHost() ||
              this.includeNamespaceInQueryParams
            );
          }),
          (Bt.prototype.isCacheableHost = function () {
            return 's-' === this.internalHost.substr(0, 2);
          }),
          (Bt.prototype.isDemoHost = function () {
            return 'firebaseio-demo.com' === this.domain;
          }),
          (Bt.prototype.isCustomHost = function () {
            return (
              'firebaseio.com' !== this.domain &&
              'firebaseio-demo.com' !== this.domain
            );
          }),
          (Bt.prototype.updateHost = function (t) {
            t !== this.internalHost &&
              ((this.internalHost = t),
              this.isCacheableHost() &&
                vt.set('host:' + this.host, this.internalHost));
          }),
          (Bt.prototype.connectionURL = function (t, e) {
            var n;
            if (
              (y('string' == typeof t, 'typeof type must == string'),
              y('object' == typeof e, 'typeof params must == object'),
              t === Vt)
            )
              n =
                (this.secure ? 'wss://' : 'ws://') +
                this.internalHost +
                '/.ws?';
            else {
              if (t !== Ht) throw new Error('Unknown connection type: ' + t);
              n =
                (this.secure ? 'https://' : 'http://') +
                this.internalHost +
                '/.lp?';
            }
            this.needsQueryParam() && (e.ns = this.namespace);
            var r = [];
            return (
              Ot(e, function (t, e) {
                r.push(t + '=' + e);
              }),
              n + r.join('&')
            );
          }),
          (Bt.prototype.toString = function () {
            var t = this.toURLString();
            return (
              this.persistenceKey && (t += '<' + this.persistenceKey + '>'), t
            );
          }),
          (Bt.prototype.toURLString = function () {
            return (this.secure ? 'https://' : 'http://') + this.host;
          }),
          Bt);
      function Bt(t, e, n, r, i, o, s) {
        void 0 === i && (i = !1),
          void 0 === o && (o = ''),
          void 0 === s && (s = !1),
          (this.secure = e),
          (this.namespace = n),
          (this.webSocketOnly = r),
          (this.nodeAdmin = i),
          (this.persistenceKey = o),
          (this.includeNamespaceInQueryParams = s),
          (this.host = t.toLowerCase()),
          (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
          (this.internalHost = vt.get('host:' + t) || this.host);
      }
      function zt(t, e) {
        var n = ie(t),
          r = n.namespace;
        return (
          'firebase.com' === n.domain &&
            ut(
              n.host +
                ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
            ),
          (r && 'undefined' !== r) ||
            'localhost' === n.domain ||
            ut(
              'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
            ),
          n.secure ||
            ('undefined' != typeof window &&
              window.location &&
              window.location.protocol &&
              -1 !== window.location.protocol.indexOf('https:') &&
              ct(
                'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
              )),
          (t = 'ws' === n.scheme || 'wss' === n.scheme),
          {
            repoInfo: new jt(n.host, n.secure, r, e, t, '', r !== n.subdomain),
            path: new Mt(n.pathString)
          }
        );
      }
      function Kt(t) {
        return 'string' == typeof t && 0 !== t.length && !oe.test(t);
      }
      function Yt(t) {
        return 'string' == typeof t && 0 !== t.length && !se.test(t);
      }
      function Gt(t) {
        return (
          null === t ||
          'string' == typeof t ||
          ('number' == typeof t && !pt(t)) ||
          (t && 'object' == typeof t && O(t, '.sv'))
        );
      }
      function Xt(t, e, n, r, i) {
        (i && void 0 === n) || he(W(t, e, i), n, r);
      }
      function $t(t, e, n, r, i) {
        if (!i || void 0 !== n) {
          var o = W(t, e, i);
          if (!n || 'object' != typeof n || Array.isArray(n))
            throw new Error(
              o + ' must be an object containing the children to replace.'
            );
          var s = [];
          Ot(n, function (t, e) {
            t = new Mt(t);
            if ((he(o, e, r.child(t)), '.priority' === t.getBack() && !Gt(e)))
              throw new Error(
                o +
                  "contains an invalid value for '" +
                  t.toString() +
                  "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
              );
            s.push(t);
          }),
            (function (t, e) {
              for (var n, r = 0; r < e.length; r++)
                for (var i = (n = e[r]).slice(), o = 0; o < i.length; o++)
                  if (('.priority' !== i[o] || o !== i.length - 1) && !Kt(i[o]))
                    throw new Error(
                      t +
                        'contains an invalid key (' +
                        i[o] +
                        ') in path ' +
                        n.toString() +
                        '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                    );
              e.sort(Mt.comparePaths);
              var s = null;
              for (r = 0; r < e.length; r++) {
                if (((n = e[r]), null !== s && s.contains(n)))
                  throw new Error(
                    t +
                      'contains a path ' +
                      s.toString() +
                      ' that is ancestor of another path ' +
                      n.toString()
                  );
                s = n;
              }
            })(o, s);
        }
      }
      function Jt(t, e, n, r) {
        if (!r || void 0 !== n) {
          if (pt(n))
            throw new Error(
              W(t, e, r) +
                'is ' +
                n.toString() +
                ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
            );
          if (!Gt(n))
            throw new Error(
              W(t, e, r) +
                'must be a valid Firebase priority (a string, finite number, server value, or null).'
            );
        }
      }
      function Zt(t, e, n, r) {
        if (!r || void 0 !== n)
          switch (n) {
            case 'value':
            case 'child_added':
            case 'child_removed':
            case 'child_changed':
            case 'child_moved':
              break;
            default:
              throw new Error(
                W(t, e, r) +
                  'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
              );
          }
      }
      function te(t, e, n, r) {
        if (!((r && void 0 === n) || Kt(n)))
          throw new Error(
            W(t, e, r) +
              'was an invalid key = "' +
              n +
              '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
          );
      }
      function ee(t, e, n, r) {
        if (!((r && void 0 === n) || Yt(n)))
          throw new Error(
            W(t, e, r) +
              'was an invalid path = "' +
              n +
              '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
          );
      }
      function ne(t, e) {
        if ('.info' === e.getFront())
          throw new Error(t + " failed = Can't modify data under /.info/");
      }
      function re(t, e, n) {
        var r = n.path.toString();
        if (
          'string' != typeof n.repoInfo.host ||
          0 === n.repoInfo.host.length ||
          (!Kt(n.repoInfo.namespace) &&
            'localhost' !== n.repoInfo.host.split(':')[0]) ||
          (0 !== r.length &&
            ((r = (r = r) && r.replace(/^\/*\.info(\/|$)/, '/')), !Yt(r)))
        )
          throw new Error(
            W(t, e, !1) +
              'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
          );
      }
      var ie = function (t) {
          var e,
            n,
            r,
            i = '',
            o = '',
            s = '',
            a = '',
            h = '',
            l = !0,
            u = 'https',
            c = 443;
          return (
            'string' == typeof t &&
              (0 <= (r = t.indexOf('//')) &&
                ((u = t.substring(0, r - 1)), (t = t.substring(r + 2))),
              -1 === (e = t.indexOf('/')) && (e = t.length),
              -1 === (n = t.indexOf('?')) && (n = t.length),
              (i = t.substring(0, Math.min(e, n))),
              e < n &&
                (a = (function (t) {
                  for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
                    if (0 < n[r].length) {
                      var i = n[r];
                      try {
                        i = decodeURIComponent(i.replace(/\+/g, ' '));
                      } catch (t) {}
                      e += '/' + i;
                    }
                  return e;
                })(t.substring(e, n))),
              (n = (function (t) {
                var e,
                  n,
                  r = {};
                '?' === t.charAt(0) && (t = t.substring(1));
                try {
                  for (
                    var i = f(t.split('&')), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var s,
                      a = o.value;
                    0 !== a.length &&
                      (2 === (s = a.split('=')).length
                        ? (r[decodeURIComponent(s[0])] = decodeURIComponent(
                            s[1]
                          ))
                        : ct(
                            "Invalid query segment '" +
                              a +
                              "' in query '" +
                              t +
                              "'"
                          ));
                  }
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
              })(t.substring(Math.min(t.length, n)))),
              0 <= (r = i.indexOf(':'))
                ? ((l = 'https' === u || 'wss' === u),
                  (c = parseInt(i.substring(r + 1), 10)))
                : (r = i.length),
              'localhost' === (r = i.slice(0, r)).toLowerCase()
                ? (o = 'localhost')
                : r.split('.').length <= 2
                ? (o = r)
                : ((r = i.indexOf('.')),
                  (s = i.substring(0, r).toLowerCase()),
                  (o = i.substring(r + 1)),
                  (h = s)),
              'ns' in n && (h = n.ns)),
            {
              host: i,
              port: c,
              domain: o,
              subdomain: s,
              secure: l,
              scheme: u,
              pathString: a,
              namespace: h
            }
          );
        },
        oe = /[\[\].#$\/\u0000-\u001F\u007F]/,
        se = /[\[\].#$\u0000-\u001F\u007F]/,
        ae = 10485760,
        he = function (n, t, e) {
          var r = e instanceof Mt ? new qt(e, n) : e;
          if (void 0 === t)
            throw new Error(n + 'contains undefined ' + r.toErrorString());
          if ('function' == typeof t)
            throw new Error(
              n +
                'contains a function ' +
                r.toErrorString() +
                ' with contents = ' +
                t.toString()
            );
          if (pt(t))
            throw new Error(
              n + 'contains ' + t.toString() + ' ' + r.toErrorString()
            );
          if ('string' == typeof t && t.length > ae / 3 && U(t) > ae)
            throw new Error(
              n +
                'contains a string greater than ' +
                ae +
                ' utf8 bytes ' +
                r.toErrorString() +
                " ('" +
                t.substring(0, 50) +
                "...')"
            );
          if (t && 'object' == typeof t) {
            var i = !1,
              o = !1;
            if (
              (Ot(t, function (t, e) {
                if ('.value' === t) i = !0;
                else if ('.priority' !== t && '.sv' !== t && ((o = !0), !Kt(t)))
                  throw new Error(
                    n +
                      ' contains an invalid key (' +
                      t +
                      ') ' +
                      r.toErrorString() +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
                r.push(t), he(n, e, r), r.pop();
              }),
              i && o)
            )
              throw new Error(
                n +
                  ' contains ".value" child ' +
                  r.toErrorString() +
                  ' in addition to actual children.'
              );
          }
        },
        le =
          ((ue.prototype.cancel = function (t) {
            M('OnDisconnect.cancel', 0, 1, arguments.length),
              q('OnDisconnect.cancel', 1, t, !0);
            var e = new g();
            return (
              this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
              e.promise
            );
          }),
          (ue.prototype.remove = function (t) {
            M('OnDisconnect.remove', 0, 1, arguments.length),
              ne('OnDisconnect.remove', this.path_),
              q('OnDisconnect.remove', 1, t, !0);
            var e = new g();
            return (
              this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)),
              e.promise
            );
          }),
          (ue.prototype.set = function (t, e) {
            M('OnDisconnect.set', 1, 2, arguments.length),
              ne('OnDisconnect.set', this.path_),
              Xt('OnDisconnect.set', 1, t, this.path_, !1),
              q('OnDisconnect.set', 2, e, !0);
            var n = new g();
            return (
              this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)),
              n.promise
            );
          }),
          (ue.prototype.setWithPriority = function (t, e, n) {
            M('OnDisconnect.setWithPriority', 2, 3, arguments.length),
              ne('OnDisconnect.setWithPriority', this.path_),
              Xt('OnDisconnect.setWithPriority', 1, t, this.path_, !1),
              Jt('OnDisconnect.setWithPriority', 2, e, !1),
              q('OnDisconnect.setWithPriority', 3, n, !0);
            var r = new g();
            return (
              this.repo_.onDisconnectSetWithPriority(
                this.path_,
                t,
                e,
                r.wrapCallback(n)
              ),
              r.promise
            );
          }),
          (ue.prototype.update = function (t, e) {
            if (
              (M('OnDisconnect.update', 1, 2, arguments.length),
              ne('OnDisconnect.update', this.path_),
              Array.isArray(t))
            ) {
              for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
              (t = n),
                ct(
                  'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                );
            }
            $t('OnDisconnect.update', 1, t, this.path_, !1),
              q('OnDisconnect.update', 2, e, !0);
            var i = new g();
            return (
              this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)),
              i.promise
            );
          }),
          ue);
      function ue(t, e) {
        (this.repo_ = t), (this.path_ = e);
      }
      var ce =
        ((pe.prototype.toJSON = function () {
          return (
            M('TransactionResult.toJSON', 0, 1, arguments.length),
            { committed: this.committed, snapshot: this.snapshot.toJSON() }
          );
        }),
        pe);
      function pe(t, e) {
        (this.committed = t), (this.snapshot = e);
      }
      var de,
        fe,
        _e,
        ye =
          ((de =
            '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'),
          (fe = 0),
          (_e = []),
          function (t) {
            var e = t === fe;
            fe = t;
            for (var n = new Array(8), r = 7; 0 <= r; r--)
              (n[r] = de.charAt(t % 64)), (t = Math.floor(t / 64));
            y(0 === t, 'Cannot push at time == 0');
            var i = n.join('');
            if (e) {
              for (r = 11; 0 <= r && 63 === _e[r]; r--) _e[r] = 0;
              _e[r]++;
            } else
              for (r = 0; r < 12; r++) _e[r] = Math.floor(64 * Math.random());
            for (r = 0; r < 12; r++) i += de.charAt(_e[r]);
            return y(20 === i.length, 'nextPushId: Length should be 20.'), i;
          }),
        ge =
          ((ve.Wrap = function (t, e) {
            return new ve(t, e);
          }),
          ve);
      function ve(t, e) {
        (this.name = t), (this.node = e);
      }
      var me,
        Ce =
          ((Ee.prototype.getCompare = function () {
            return this.compare.bind(this);
          }),
          (Ee.prototype.indexedValueChanged = function (t, e) {
            (t = new ge(Nt, t)), (e = new ge(Nt, e));
            return 0 !== this.compare(t, e);
          }),
          (Ee.prototype.minPost = function () {
            return ge.MIN;
          }),
          Ee);
      function Ee() {}
      var we,
        gt =
          (n(be, (we = Ce)),
          Object.defineProperty(be, '__EMPTY_NODE', {
            get: function () {
              return me;
            },
            set: function (t) {
              me = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (be.prototype.compare = function (t, e) {
            return Pt(t.name, e.name);
          }),
          (be.prototype.isDefinedOn = function (t) {
            throw c('KeyIndex.isDefinedOn not expected to be called.');
          }),
          (be.prototype.indexedValueChanged = function (t, e) {
            return !1;
          }),
          (be.prototype.minPost = function () {
            return ge.MIN;
          }),
          (be.prototype.maxPost = function () {
            return new ge(Rt, me);
          }),
          (be.prototype.makePost = function (t, e) {
            return (
              y(
                'string' == typeof t,
                'KeyIndex indexValue must always be a string.'
              ),
              new ge(t, me)
            );
          }),
          (be.prototype.toString = function () {
            return '.key';
          }),
          be);
      function be() {
        return (null !== we && we.apply(this, arguments)) || this;
      }
      var Se,
        Te = new gt();
      function Ie(t) {
        return 'number' == typeof t ? 'number:' + xt(t) : 'string:' + t;
      }
      var Ne,
        Re,
        Pe,
        De,
        Oe = function (t) {
          var e;
          t.isLeafNode()
            ? ((e = t.val()),
              y(
                'string' == typeof e ||
                  'number' == typeof e ||
                  ('object' == typeof e && O(e, '.sv')),
                'Priority must be a string or number.'
              ))
            : y(t === Se || t.isEmpty(), 'priority of unexpected type.'),
            y(
              t === Se || t.getPriority().isEmpty(),
              "Priority nodes can't have a priority of their own."
            );
        },
        xe =
          (Object.defineProperty(ke, '__childrenNodeConstructor', {
            get: function () {
              return Ne;
            },
            set: function (t) {
              Ne = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (ke.prototype.isLeafNode = function () {
            return !0;
          }),
          (ke.prototype.getPriority = function () {
            return this.priorityNode_;
          }),
          (ke.prototype.updatePriority = function (t) {
            return new ke(this.value_, t);
          }),
          (ke.prototype.getImmediateChild = function (t) {
            return '.priority' === t
              ? this.priorityNode_
              : ke.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (ke.prototype.getChild = function (t) {
            return t.isEmpty()
              ? this
              : '.priority' === t.getFront()
              ? this.priorityNode_
              : ke.__childrenNodeConstructor.EMPTY_NODE;
          }),
          (ke.prototype.hasChild = function () {
            return !1;
          }),
          (ke.prototype.getPredecessorChildName = function (t, e) {
            return null;
          }),
          (ke.prototype.updateImmediateChild = function (t, e) {
            return '.priority' === t
              ? this.updatePriority(e)
              : e.isEmpty() && '.priority' !== t
              ? this
              : ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                  t,
                  e
                ).updatePriority(this.priorityNode_);
          }),
          (ke.prototype.updateChild = function (t, e) {
            var n = t.getFront();
            return null === n
              ? e
              : e.isEmpty() && '.priority' !== n
              ? this
              : (y(
                  '.priority' !== n || 1 === t.getLength(),
                  '.priority must be the last token in a path'
                ),
                this.updateImmediateChild(
                  n,
                  ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                    t.popFront(),
                    e
                  )
                ));
          }),
          (ke.prototype.isEmpty = function () {
            return !1;
          }),
          (ke.prototype.numChildren = function () {
            return 0;
          }),
          (ke.prototype.forEachChild = function (t, e) {
            return !1;
          }),
          (ke.prototype.val = function (t) {
            return t && !this.getPriority().isEmpty()
              ? {
                  '.value': this.getValue(),
                  '.priority': this.getPriority().val()
                }
              : this.getValue();
          }),
          (ke.prototype.hash = function () {
            var t, e;
            return (
              null === this.lazyHash_ &&
                ((t = ''),
                this.priorityNode_.isEmpty() ||
                  (t += 'priority:' + Ie(this.priorityNode_.val()) + ':'),
                (t += (e = typeof this.value_) + ':'),
                (t += 'number' == e ? xt(this.value_) : this.value_),
                (this.lazyHash_ = at(t))),
              this.lazyHash_
            );
          }),
          (ke.prototype.getValue = function () {
            return this.value_;
          }),
          (ke.prototype.compareTo = function (t) {
            return t === ke.__childrenNodeConstructor.EMPTY_NODE
              ? 1
              : t instanceof ke.__childrenNodeConstructor
              ? -1
              : (y(t.isLeafNode(), 'Unknown node type'),
                this.compareToLeafNode_(t));
          }),
          (ke.prototype.compareToLeafNode_ = function (t) {
            var e = typeof t.value_,
              n = typeof this.value_,
              r = ke.VALUE_TYPE_ORDER.indexOf(e),
              i = ke.VALUE_TYPE_ORDER.indexOf(n);
            return (
              y(0 <= r, 'Unknown leaf type: ' + e),
              y(0 <= i, 'Unknown leaf type: ' + n),
              r === i
                ? 'object' == n
                  ? 0
                  : this.value_ < t.value_
                  ? -1
                  : this.value_ === t.value_
                  ? 0
                  : 1
                : i - r
            );
          }),
          (ke.prototype.withIndex = function () {
            return this;
          }),
          (ke.prototype.isIndexed = function () {
            return !0;
          }),
          (ke.prototype.equals = function (t) {
            return (
              t === this ||
              (!!t.isLeafNode() &&
                this.value_ === t.value_ &&
                this.priorityNode_.equals(t.priorityNode_))
            );
          }),
          (ke.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
          ke);
      function ke(t, e) {
        void 0 === e && (e = ke.__childrenNodeConstructor.EMPTY_NODE),
          (this.value_ = t),
          (this.priorityNode_ = e),
          (this.lazyHash_ = null),
          y(
            void 0 !== this.value_ && null !== this.value_,
            "LeafNode shouldn't be created with null/undefined value."
          ),
          Oe(this.priorityNode_);
      }
      function Ae() {
        return (null !== De && De.apply(this, arguments)) || this;
      }
      var Fe = new (n(Ae, (De = Ce)),
        (Ae.prototype.compare = function (t, e) {
          var n = t.node.getPriority(),
            r = e.node.getPriority(),
            r = n.compareTo(r);
          return 0 === r ? Pt(t.name, e.name) : r;
        }),
        (Ae.prototype.isDefinedOn = function (t) {
          return !t.getPriority().isEmpty();
        }),
        (Ae.prototype.indexedValueChanged = function (t, e) {
          return !t.getPriority().equals(e.getPriority());
        }),
        (Ae.prototype.minPost = function () {
          return ge.MIN;
        }),
        (Ae.prototype.maxPost = function () {
          return new ge(Rt, new xe('[PRIORITY-POST]', Pe));
        }),
        (Ae.prototype.makePost = function (t, e) {
          t = Re(t);
          return new ge(e, new xe('[PRIORITY-POST]', t));
        }),
        (Ae.prototype.toString = function () {
          return '.priority';
        }),
        Ae)(),
        Le =
          ((Me.prototype.getNext = function () {
            if (0 === this.nodeStack_.length) return null;
            var t = this.nodeStack_.pop(),
              e = this.resultGenerator_
                ? this.resultGenerator_(t.key, t.value)
                : { key: t.key, value: t.value };
            if (this.isReverse_)
              for (t = t.left; !t.isEmpty(); )
                this.nodeStack_.push(t), (t = t.right);
            else
              for (t = t.right; !t.isEmpty(); )
                this.nodeStack_.push(t), (t = t.left);
            return e;
          }),
          (Me.prototype.hasNext = function () {
            return 0 < this.nodeStack_.length;
          }),
          (Me.prototype.peek = function () {
            if (0 === this.nodeStack_.length) return null;
            var t = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_
              ? this.resultGenerator_(t.key, t.value)
              : { key: t.key, value: t.value };
          }),
          Me);
      function Me(t, e, n, r, i) {
        void 0 === i && (i = null),
          (this.isReverse_ = r),
          (this.resultGenerator_ = i),
          (this.nodeStack_ = []);
        for (var o = 1; !t.isEmpty(); )
          if (((o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
            t = this.isReverse_ ? t.left : t.right;
          else {
            if (0 === o) {
              this.nodeStack_.push(t);
              break;
            }
            this.nodeStack_.push(t), (t = this.isReverse_ ? t.right : t.left);
          }
      }
      var We =
        ((qe.prototype.copy = function (t, e, n, r, i) {
          return new qe(
            null != t ? t : this.key,
            null != e ? e : this.value,
            null != n ? n : this.color,
            null != r ? r : this.left,
            null != i ? i : this.right
          );
        }),
        (qe.prototype.count = function () {
          return this.left.count() + 1 + this.right.count();
        }),
        (qe.prototype.isEmpty = function () {
          return !1;
        }),
        (qe.prototype.inorderTraversal = function (t) {
          return (
            this.left.inorderTraversal(t) ||
            !!t(this.key, this.value) ||
            this.right.inorderTraversal(t)
          );
        }),
        (qe.prototype.reverseTraversal = function (t) {
          return (
            this.right.reverseTraversal(t) ||
            t(this.key, this.value) ||
            this.left.reverseTraversal(t)
          );
        }),
        (qe.prototype.min_ = function () {
          return this.left.isEmpty() ? this : this.left.min_();
        }),
        (qe.prototype.minKey = function () {
          return this.min_().key;
        }),
        (qe.prototype.maxKey = function () {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }),
        (qe.prototype.insert = function (t, e, n) {
          var r = this,
            i = n(t, r.key);
          return (r =
            i < 0
              ? r.copy(null, null, null, r.left.insert(t, e, n), null)
              : 0 === i
              ? r.copy(null, e, null, null, null)
              : r.copy(
                  null,
                  null,
                  null,
                  null,
                  r.right.insert(t, e, n)
                )).fixUp_();
        }),
        (qe.prototype.removeMin_ = function () {
          if (this.left.isEmpty()) return Ue.EMPTY_NODE;
          var t = this;
          return (
            t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()),
            (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
          );
        }),
        (qe.prototype.remove = function (t, e) {
          var n,
            r = this;
          if (e(t, r.key) < 0)
            r.left.isEmpty() ||
              r.left.isRed_() ||
              r.left.left.isRed_() ||
              (r = r.moveRedLeft_()),
              (r = r.copy(null, null, null, r.left.remove(t, e), null));
          else {
            if (
              (r.left.isRed_() && (r = r.rotateRight_()),
              r.right.isEmpty() ||
                r.right.isRed_() ||
                r.right.left.isRed_() ||
                (r = r.moveRedRight_()),
              0 === e(t, r.key))
            ) {
              if (r.right.isEmpty()) return Ue.EMPTY_NODE;
              (n = r.right.min_()),
                (r = r.copy(n.key, n.value, null, null, r.right.removeMin_()));
            }
            r = r.copy(null, null, null, null, r.right.remove(t, e));
          }
          return r.fixUp_();
        }),
        (qe.prototype.isRed_ = function () {
          return this.color;
        }),
        (qe.prototype.fixUp_ = function () {
          var t = this;
          return (
            t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
            t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()),
            t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
            t
          );
        }),
        (qe.prototype.moveRedLeft_ = function () {
          var t = this.colorFlip_();
          return (
            t.right.left.isRed_() &&
              (t = (t = (t = t.copy(
                null,
                null,
                null,
                null,
                t.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()),
            t
          );
        }),
        (qe.prototype.moveRedRight_ = function () {
          var t = this.colorFlip_();
          return (
            t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t
          );
        }),
        (qe.prototype.rotateLeft_ = function () {
          var t = this.copy(null, null, qe.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, t, null);
        }),
        (qe.prototype.rotateRight_ = function () {
          var t = this.copy(null, null, qe.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, t);
        }),
        (qe.prototype.colorFlip_ = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }),
        (qe.prototype.checkMaxDepth_ = function () {
          var t = this.check_();
          return Math.pow(2, t) <= this.count() + 1;
        }),
        (qe.prototype.check_ = function () {
          if (this.isRed_() && this.left.isRed_())
            throw new Error(
              'Red node has red child(' + this.key + ',' + this.value + ')'
            );
          if (this.right.isRed_())
            throw new Error(
              'Right child of (' + this.key + ',' + this.value + ') is red'
            );
          var t = this.left.check_();
          if (t !== this.right.check_()) throw new Error('Black depths differ');
          return t + (this.isRed_() ? 0 : 1);
        }),
        (qe.RED = !0),
        (qe.BLACK = !1),
        qe);
      function qe(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : qe.RED),
          (this.left = null != r ? r : Ue.EMPTY_NODE),
          (this.right = null != i ? i : Ue.EMPTY_NODE);
      }
      (Qe.prototype.copy = function (t, e, n, r, i) {
        return this;
      }),
        (Qe.prototype.insert = function (t, e, n) {
          return new We(t, e, null);
        }),
        (Qe.prototype.remove = function (t, e) {
          return this;
        }),
        (Qe.prototype.count = function () {
          return 0;
        }),
        (Qe.prototype.isEmpty = function () {
          return !0;
        }),
        (Qe.prototype.inorderTraversal = function (t) {
          return !1;
        }),
        (Qe.prototype.reverseTraversal = function (t) {
          return !1;
        }),
        (Qe.prototype.minKey = function () {
          return null;
        }),
        (Qe.prototype.maxKey = function () {
          return null;
        }),
        (Qe.prototype.check_ = function () {
          return 0;
        }),
        (Qe.prototype.isRed_ = function () {
          return !1;
        }),
        (Y = Qe);
      function Qe() {}
      var Ue =
        ((Ve.prototype.insert = function (t, e) {
          return new Ve(
            this.comparator_,
            this.root_
              .insert(t, e, this.comparator_)
              .copy(null, null, We.BLACK, null, null)
          );
        }),
        (Ve.prototype.remove = function (t) {
          return new Ve(
            this.comparator_,
            this.root_
              .remove(t, this.comparator_)
              .copy(null, null, We.BLACK, null, null)
          );
        }),
        (Ve.prototype.get = function (t) {
          for (var e, n = this.root_; !n.isEmpty(); ) {
            if (0 === (e = this.comparator_(t, n.key))) return n.value;
            e < 0 ? (n = n.left) : 0 < e && (n = n.right);
          }
          return null;
        }),
        (Ve.prototype.getPredecessorKey = function (t) {
          for (var e, n = this.root_, r = null; !n.isEmpty(); ) {
            if (0 === (e = this.comparator_(t, n.key))) {
              if (n.left.isEmpty()) return r ? r.key : null;
              for (n = n.left; !n.right.isEmpty(); ) n = n.right;
              return n.key;
            }
            e < 0 ? (n = n.left) : 0 < e && (n = (r = n).right);
          }
          throw new Error(
            'Attempted to find predecessor key for a nonexistent key.  What gives?'
          );
        }),
        (Ve.prototype.isEmpty = function () {
          return this.root_.isEmpty();
        }),
        (Ve.prototype.count = function () {
          return this.root_.count();
        }),
        (Ve.prototype.minKey = function () {
          return this.root_.minKey();
        }),
        (Ve.prototype.maxKey = function () {
          return this.root_.maxKey();
        }),
        (Ve.prototype.inorderTraversal = function (t) {
          return this.root_.inorderTraversal(t);
        }),
        (Ve.prototype.reverseTraversal = function (t) {
          return this.root_.reverseTraversal(t);
        }),
        (Ve.prototype.getIterator = function (t) {
          return new Le(this.root_, null, this.comparator_, !1, t);
        }),
        (Ve.prototype.getIteratorFrom = function (t, e) {
          return new Le(this.root_, t, this.comparator_, !1, e);
        }),
        (Ve.prototype.getReverseIteratorFrom = function (t, e) {
          return new Le(this.root_, t, this.comparator_, !0, e);
        }),
        (Ve.prototype.getReverseIterator = function (t) {
          return new Le(this.root_, null, this.comparator_, !0, t);
        }),
        (Ve.EMPTY_NODE = new Y()),
        Ve);
      function Ve(t, e) {
        void 0 === e && (e = Ve.EMPTY_NODE),
          (this.comparator_ = t),
          (this.root_ = e);
      }
      var He = Math.log(2),
        je =
          ((Be.prototype.nextBitIsOne = function () {
            var t = !(this.bits_ & (1 << this.current_));
            return this.current_--, t;
          }),
          Be);
      function Be(t) {
        var e;
        (this.count = ((e = t + 1), parseInt(Math.log(e) / He, 10))),
          (this.current_ = this.count - 1);
        var n,
          r = ((n = this.count), parseInt(Array(n + 1).join('1'), 2));
        this.bits_ = (t + 1) & r;
      }
      var ze,
        Ke,
        Ye = function (l, t, u, e) {
          l.sort(t);
          var c = function (t, e) {
              var n = e - t;
              if (0 == n) return null;
              if (1 == n)
                return (
                  (r = l[t]),
                  (i = u ? u(r) : r),
                  new We(i, r.node, We.BLACK, null, null)
                );
              var n = parseInt(n / 2, 10) + t,
                t = c(t, n),
                e = c(n + 1, e),
                r = l[n],
                i = u ? u(r) : r;
              return new We(i, r.node, We.BLACK, t, e);
            },
            n = (function (t) {
              for (
                var e = null,
                  n = null,
                  i = l.length,
                  r = function (t, e) {
                    var n = i - t,
                      r = i;
                    i -= t;
                    (t = c(1 + n, r)), (r = l[n]), (n = u ? u(r) : r);
                    o(new We(n, r.node, e, null, t));
                  },
                  o = function (t) {
                    e = e ? (e.left = t) : (n = t);
                  },
                  s = 0;
                s < t.count;
                ++s
              ) {
                var a = t.nextBitIsOne(),
                  h = Math.pow(2, t.count - (s + 1));
                a ? r(h, We.BLACK) : (r(h, We.BLACK), r(h, We.RED));
              }
              return n;
            })(new je(l.length));
          return new Ue(e || t, n);
        },
        Ge = {},
        Xe =
          (Object.defineProperty($e, 'Default', {
            get: function () {
              return (
                y(Fe, 'ChildrenNode.ts has not been loaded'),
                (ze = ze || new $e({ '.priority': Ge }, { '.priority': Fe }))
              );
            },
            enumerable: !1,
            configurable: !0
          }),
          ($e.prototype.get = function (t) {
            var e = x(this.indexes_, t);
            if (!e) throw new Error('No index defined for ' + t);
            return e instanceof Ue ? e : null;
          }),
          ($e.prototype.hasIndex = function (t) {
            return O(this.indexSet_, t.toString());
          }),
          ($e.prototype.addIndex = function (t, e) {
            y(
              t !== Te,
              "KeyIndex always exists and isn't meant to be added to the IndexMap."
            );
            for (
              var n,
                r = [],
                i = !1,
                o = e.getIterator(ge.Wrap),
                s = o.getNext();
              s;

            )
              (i = i || t.isDefinedOn(s.node)), r.push(s), (s = o.getNext());
            n = i ? Ye(r, t.getCompare()) : Ge;
            var a = t.toString(),
              h = l({}, this.indexSet_);
            h[a] = t;
            e = l({}, this.indexes_);
            return (e[a] = n), new $e(e, h);
          }),
          ($e.prototype.addToIndexes = function (s, a) {
            var h = this;
            return new $e(
              A(this.indexes_, function (t, e) {
                var n = x(h.indexSet_, e);
                if ((y(n, 'Missing index implementation for ' + e), t === Ge)) {
                  if (n.isDefinedOn(s.node)) {
                    for (
                      var r = [], i = a.getIterator(ge.Wrap), o = i.getNext();
                      o;

                    )
                      o.name !== s.name && r.push(o), (o = i.getNext());
                    return r.push(s), Ye(r, n.getCompare());
                  }
                  return Ge;
                }
                n = a.get(s.name);
                return (
                  n && (t = t.remove(new ge(s.name, n))), t.insert(s, s.node)
                );
              }),
              this.indexSet_
            );
          }),
          ($e.prototype.removeFromIndexes = function (n, r) {
            return new $e(
              A(this.indexes_, function (t) {
                if (t === Ge) return t;
                var e = r.get(n.name);
                return e ? t.remove(new ge(n.name, e)) : t;
              }),
              this.indexSet_
            );
          }),
          $e);
      function $e(t, e) {
        (this.indexes_ = t), (this.indexSet_ = e);
      }
      function Je(t, e) {
        return Pt(t.name, e.name);
      }
      function Ze(t, e) {
        return Pt(t, e);
      }
      var tn,
        en =
          (Object.defineProperty(nn, 'EMPTY_NODE', {
            get: function () {
              return (Ke = Ke || new nn(new Ue(Ze), null, Xe.Default));
            },
            enumerable: !1,
            configurable: !0
          }),
          (nn.prototype.isLeafNode = function () {
            return !1;
          }),
          (nn.prototype.getPriority = function () {
            return this.priorityNode_ || Ke;
          }),
          (nn.prototype.updatePriority = function (t) {
            return this.children_.isEmpty()
              ? this
              : new nn(this.children_, t, this.indexMap_);
          }),
          (nn.prototype.getImmediateChild = function (t) {
            if ('.priority' === t) return this.getPriority();
            t = this.children_.get(t);
            return null === t ? Ke : t;
          }),
          (nn.prototype.getChild = function (t) {
            var e = t.getFront();
            return null === e
              ? this
              : this.getImmediateChild(e).getChild(t.popFront());
          }),
          (nn.prototype.hasChild = function (t) {
            return null !== this.children_.get(t);
          }),
          (nn.prototype.updateImmediateChild = function (t, e) {
            if (
              (y(e, 'We should always be passing snapshot nodes'),
              '.priority' === t)
            )
              return this.updatePriority(e);
            var n = new ge(t, e),
              r = void 0,
              i = void 0,
              i = e.isEmpty()
                ? ((r = this.children_.remove(t)),
                  this.indexMap_.removeFromIndexes(n, this.children_))
                : ((r = this.children_.insert(t, e)),
                  this.indexMap_.addToIndexes(n, this.children_)),
              n = r.isEmpty() ? Ke : this.priorityNode_;
            return new nn(r, n, i);
          }),
          (nn.prototype.updateChild = function (t, e) {
            var n = t.getFront();
            if (null === n) return e;
            y(
              '.priority' !== t.getFront() || 1 === t.getLength(),
              '.priority must be the last token in a path'
            );
            e = this.getImmediateChild(n).updateChild(t.popFront(), e);
            return this.updateImmediateChild(n, e);
          }),
          (nn.prototype.isEmpty = function () {
            return this.children_.isEmpty();
          }),
          (nn.prototype.numChildren = function () {
            return this.children_.count();
          }),
          (nn.prototype.val = function (n) {
            if (this.isEmpty()) return null;
            var r = {},
              i = 0,
              o = 0,
              s = !0;
            if (
              (this.forEachChild(Fe, function (t, e) {
                (r[t] = e.val(n)),
                  i++,
                  s && nn.INTEGER_REGEXP_.test(t)
                    ? (o = Math.max(o, Number(t)))
                    : (s = !1);
              }),
              !n && s && o < 2 * i)
            ) {
              var t,
                e = [];
              for (t in r) e[t] = r[t];
              return e;
            }
            return (
              n &&
                !this.getPriority().isEmpty() &&
                (r['.priority'] = this.getPriority().val()),
              r
            );
          }),
          (nn.prototype.hash = function () {
            var n;
            return (
              null === this.lazyHash_ &&
                ((n = ''),
                this.getPriority().isEmpty() ||
                  (n += 'priority:' + Ie(this.getPriority().val()) + ':'),
                this.forEachChild(Fe, function (t, e) {
                  e = e.hash();
                  '' !== e && (n += ':' + t + ':' + e);
                }),
                (this.lazyHash_ = '' === n ? '' : at(n))),
              this.lazyHash_
            );
          }),
          (nn.prototype.getPredecessorChildName = function (t, e, n) {
            n = this.resolveIndex_(n);
            if (n) {
              e = n.getPredecessorKey(new ge(t, e));
              return e ? e.name : null;
            }
            return this.children_.getPredecessorKey(t);
          }),
          (nn.prototype.getFirstChildName = function (t) {
            t = this.resolveIndex_(t);
            if (t) {
              t = t.minKey();
              return t && t.name;
            }
            return this.children_.minKey();
          }),
          (nn.prototype.getFirstChild = function (t) {
            t = this.getFirstChildName(t);
            return t ? new ge(t, this.children_.get(t)) : null;
          }),
          (nn.prototype.getLastChildName = function (t) {
            t = this.resolveIndex_(t);
            if (t) {
              t = t.maxKey();
              return t && t.name;
            }
            return this.children_.maxKey();
          }),
          (nn.prototype.getLastChild = function (t) {
            t = this.getLastChildName(t);
            return t ? new ge(t, this.children_.get(t)) : null;
          }),
          (nn.prototype.forEachChild = function (t, e) {
            t = this.resolveIndex_(t);
            return t
              ? t.inorderTraversal(function (t) {
                  return e(t.name, t.node);
                })
              : this.children_.inorderTraversal(e);
          }),
          (nn.prototype.getIterator = function (t) {
            return this.getIteratorFrom(t.minPost(), t);
          }),
          (nn.prototype.getIteratorFrom = function (t, e) {
            var n = this.resolveIndex_(e);
            if (n)
              return n.getIteratorFrom(t, function (t) {
                return t;
              });
            for (
              var r = this.children_.getIteratorFrom(t.name, ge.Wrap),
                i = r.peek();
              null != i && e.compare(i, t) < 0;

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (nn.prototype.getReverseIterator = function (t) {
            return this.getReverseIteratorFrom(t.maxPost(), t);
          }),
          (nn.prototype.getReverseIteratorFrom = function (t, e) {
            var n = this.resolveIndex_(e);
            if (n)
              return n.getReverseIteratorFrom(t, function (t) {
                return t;
              });
            for (
              var r = this.children_.getReverseIteratorFrom(t.name, ge.Wrap),
                i = r.peek();
              null != i && 0 < e.compare(i, t);

            )
              r.getNext(), (i = r.peek());
            return r;
          }),
          (nn.prototype.compareTo = function (t) {
            return this.isEmpty()
              ? t.isEmpty()
                ? 0
                : -1
              : t.isLeafNode() || t.isEmpty()
              ? 1
              : t === on
              ? -1
              : 0;
          }),
          (nn.prototype.withIndex = function (t) {
            if (t === Te || this.indexMap_.hasIndex(t)) return this;
            t = this.indexMap_.addIndex(t, this.children_);
            return new nn(this.children_, this.priorityNode_, t);
          }),
          (nn.prototype.isIndexed = function (t) {
            return t === Te || this.indexMap_.hasIndex(t);
          }),
          (nn.prototype.equals = function (t) {
            if (t === this) return !0;
            if (t.isLeafNode()) return !1;
            if (this.getPriority().equals(t.getPriority())) {
              if (this.children_.count() !== t.children_.count()) return !1;
              for (
                var e = this.getIterator(Fe),
                  n = t.getIterator(Fe),
                  r = e.getNext(),
                  i = n.getNext();
                r && i;

              ) {
                if (r.name !== i.name || !r.node.equals(i.node)) return !1;
                (r = e.getNext()), (i = n.getNext());
              }
              return null === r && null === i;
            }
            return !1;
          }),
          (nn.prototype.resolveIndex_ = function (t) {
            return t === Te ? null : this.indexMap_.get(t.toString());
          }),
          (nn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
          nn);
      function nn(t, e, n) {
        (this.children_ = t),
          (this.priorityNode_ = e),
          (this.indexMap_ = n),
          (this.lazyHash_ = null),
          this.priorityNode_ && Oe(this.priorityNode_),
          this.children_.isEmpty() &&
            y(
              !this.priorityNode_ || this.priorityNode_.isEmpty(),
              'An empty node cannot have a priority'
            );
      }
      function rn() {
        return tn.call(this, new Ue(Ze), en.EMPTY_NODE, Xe.Default) || this;
      }
      var on = new (n(rn, (tn = en)),
      (rn.prototype.compareTo = function (t) {
        return t === this ? 0 : 1;
      }),
      (rn.prototype.equals = function (t) {
        return t === this;
      }),
      (rn.prototype.getPriority = function () {
        return this;
      }),
      (rn.prototype.getImmediateChild = function (t) {
        return en.EMPTY_NODE;
      }),
      (rn.prototype.isEmpty = function () {
        return !1;
      }),
      rn)();
      Object.defineProperties(ge, {
        MIN: { value: new ge(Nt, en.EMPTY_NODE) },
        MAX: { value: new ge(Rt, on) }
      }),
        (gt.__EMPTY_NODE = en.EMPTY_NODE),
        (xe.__childrenNodeConstructor = en),
        (Se = on),
        (Pe = on);
      var sn,
        an = !0;
      function hn(n, t) {
        if ((void 0 === t && (t = null), null === n)) return en.EMPTY_NODE;
        if (
          ('object' == typeof n && '.priority' in n && (t = n['.priority']),
          y(
            null === t ||
              'string' == typeof t ||
              'number' == typeof t ||
              ('object' == typeof t && '.sv' in t),
            'Invalid priority type found: ' + typeof t
          ),
          'object' == typeof n &&
            '.value' in n &&
            null !== n['.value'] &&
            (n = n['.value']),
          'object' != typeof n || '.sv' in n)
        )
          return new xe(n, hn(t));
        if (n instanceof Array || !an) {
          var r = en.EMPTY_NODE;
          return (
            Ot(n, function (t, e) {
              O(n, t) &&
                '.' !== t.substring(0, 1) &&
                ((!(e = hn(e)).isLeafNode() && e.isEmpty()) ||
                  (r = r.updateImmediateChild(t, e)));
            }),
            r.updatePriority(hn(t))
          );
        }
        var i = [],
          o = !1;
        if (
          (Ot(n, function (t, e) {
            '.' !== t.substring(0, 1) &&
              ((e = hn(e)).isEmpty() ||
                ((o = o || !e.getPriority().isEmpty()), i.push(new ge(t, e))));
          }),
          0 === i.length)
        )
          return en.EMPTY_NODE;
        var e = Ye(
          i,
          Je,
          function (t) {
            return t.name;
          },
          Ze
        );
        if (o) {
          var s = Ye(i, Fe.getCompare());
          return new en(
            e,
            hn(t),
            new Xe({ '.priority': s }, { '.priority': Fe })
          );
        }
        return new en(e, hn(t), Xe.Default);
      }
      function ln() {
        return (null !== sn && sn.apply(this, arguments)) || this;
      }
      Re = hn;
      var un,
        cn = new (n(ln, (sn = Ce)),
        (ln.prototype.compare = function (t, e) {
          var n = t.node.compareTo(e.node);
          return 0 === n ? Pt(t.name, e.name) : n;
        }),
        (ln.prototype.isDefinedOn = function (t) {
          return !0;
        }),
        (ln.prototype.indexedValueChanged = function (t, e) {
          return !t.equals(e);
        }),
        (ln.prototype.minPost = function () {
          return ge.MIN;
        }),
        (ln.prototype.maxPost = function () {
          return ge.MAX;
        }),
        (ln.prototype.makePost = function (t, e) {
          t = hn(t);
          return new ge(e, t);
        }),
        (ln.prototype.toString = function () {
          return '.value';
        }),
        ln)(),
        pn =
          (n(dn, (un = Ce)),
          (dn.prototype.extractChild = function (t) {
            return t.getChild(this.indexPath_);
          }),
          (dn.prototype.isDefinedOn = function (t) {
            return !t.getChild(this.indexPath_).isEmpty();
          }),
          (dn.prototype.compare = function (t, e) {
            var n = this.extractChild(t.node),
              r = this.extractChild(e.node),
              r = n.compareTo(r);
            return 0 === r ? Pt(t.name, e.name) : r;
          }),
          (dn.prototype.makePost = function (t, e) {
            (t = hn(t)), (t = en.EMPTY_NODE.updateChild(this.indexPath_, t));
            return new ge(e, t);
          }),
          (dn.prototype.maxPost = function () {
            var t = en.EMPTY_NODE.updateChild(this.indexPath_, on);
            return new ge(Rt, t);
          }),
          (dn.prototype.toString = function () {
            return this.indexPath_.slice().join('/');
          }),
          dn);
      function dn(t) {
        var e = un.call(this) || this;
        return (
          (e.indexPath_ = t),
          y(
            !t.isEmpty() && '.priority' !== t.getFront(),
            "Can't create PathIndex with empty path or .priority key"
          ),
          e
        );
      }
      var fn =
        ((_n.prototype.val = function () {
          return (
            M('DataSnapshot.val', 0, 0, arguments.length), this.node_.val()
          );
        }),
        (_n.prototype.exportVal = function () {
          return (
            M('DataSnapshot.exportVal', 0, 0, arguments.length),
            this.node_.val(!0)
          );
        }),
        (_n.prototype.toJSON = function () {
          return (
            M('DataSnapshot.toJSON', 0, 1, arguments.length), this.exportVal()
          );
        }),
        (_n.prototype.exists = function () {
          return (
            M('DataSnapshot.exists', 0, 0, arguments.length),
            !this.node_.isEmpty()
          );
        }),
        (_n.prototype.child = function (t) {
          M('DataSnapshot.child', 0, 1, arguments.length),
            (t = String(t)),
            ee('DataSnapshot.child', 1, t, !1);
          var e = new Mt(t),
            t = this.ref_.child(e);
          return new _n(this.node_.getChild(e), t, Fe);
        }),
        (_n.prototype.hasChild = function (t) {
          M('DataSnapshot.hasChild', 1, 1, arguments.length),
            ee('DataSnapshot.hasChild', 1, t, !1);
          t = new Mt(t);
          return !this.node_.getChild(t).isEmpty();
        }),
        (_n.prototype.getPriority = function () {
          return (
            M('DataSnapshot.getPriority', 0, 0, arguments.length),
            this.node_.getPriority().val()
          );
        }),
        (_n.prototype.forEach = function (n) {
          var r = this;
          return (
            M('DataSnapshot.forEach', 1, 1, arguments.length),
            q('DataSnapshot.forEach', 1, n, !1),
            !this.node_.isLeafNode() &&
              !!this.node_.forEachChild(this.index_, function (t, e) {
                return n(new _n(e, r.ref_.child(t), Fe));
              })
          );
        }),
        (_n.prototype.hasChildren = function () {
          return (
            M('DataSnapshot.hasChildren', 0, 0, arguments.length),
            !this.node_.isLeafNode() && !this.node_.isEmpty()
          );
        }),
        Object.defineProperty(_n.prototype, 'key', {
          get: function () {
            return this.ref_.getKey();
          },
          enumerable: !1,
          configurable: !0
        }),
        (_n.prototype.numChildren = function () {
          return (
            M('DataSnapshot.numChildren', 0, 0, arguments.length),
            this.node_.numChildren()
          );
        }),
        (_n.prototype.getRef = function () {
          return M('DataSnapshot.ref', 0, 0, arguments.length), this.ref_;
        }),
        Object.defineProperty(_n.prototype, 'ref', {
          get: function () {
            return this.getRef();
          },
          enumerable: !1,
          configurable: !0
        }),
        _n);
      function _n(t, e, n) {
        (this.node_ = t), (this.ref_ = e), (this.index_ = n);
      }
      var yn =
        ((gn.prototype.getPath = function () {
          var t = this.snapshot.getRef();
          return ('value' === this.eventType ? t : t.getParent()).path;
        }),
        (gn.prototype.getEventType = function () {
          return this.eventType;
        }),
        (gn.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        }),
        (gn.prototype.toString = function () {
          return (
            this.getPath().toString() +
            ':' +
            this.eventType +
            ':' +
            P(this.snapshot.exportVal())
          );
        }),
        gn);
      function gn(t, e, n, r) {
        (this.eventType = t),
          (this.eventRegistration = e),
          (this.snapshot = n),
          (this.prevName = r);
      }
      var vn =
        ((mn.prototype.getPath = function () {
          return this.path;
        }),
        (mn.prototype.getEventType = function () {
          return 'cancel';
        }),
        (mn.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        }),
        (mn.prototype.toString = function () {
          return this.path.toString() + ':cancel';
        }),
        mn);
      function mn(t, e, n) {
        (this.eventRegistration = t), (this.error = e), (this.path = n);
      }
      var Cn =
        ((En.prototype.respondsTo = function (t) {
          return 'value' === t;
        }),
        (En.prototype.createEvent = function (t, e) {
          var n = e.getQueryParams().getIndex();
          return new yn('value', this, new fn(t.snapshotNode, e.getRef(), n));
        }),
        (En.prototype.getEventRunner = function (t) {
          var e = this.context_;
          if ('cancel' === t.getEventType()) {
            y(
              this.cancelCallback_,
              'Raising a cancel event on a listener with no cancel callback'
            );
            var n = this.cancelCallback_;
            return function () {
              n.call(e, t.error);
            };
          }
          var r = this.callback_;
          return function () {
            r.call(e, t.snapshot);
          };
        }),
        (En.prototype.createCancelEvent = function (t, e) {
          return this.cancelCallback_ ? new vn(this, t, e) : null;
        }),
        (En.prototype.matches = function (t) {
          return (
            t instanceof En &&
            (!t.callback_ ||
              !this.callback_ ||
              (t.callback_ === this.callback_ && t.context_ === this.context_))
          );
        }),
        (En.prototype.hasAnyCallback = function () {
          return null !== this.callback_;
        }),
        En);
      function En(t, e, n) {
        (this.callback_ = t), (this.cancelCallback_ = e), (this.context_ = n);
      }
      var wn,
        bn =
          ((Sn.prototype.respondsTo = function (t) {
            t =
              'children_removed' ===
              (t = 'children_added' === t ? 'child_added' : t)
                ? 'child_removed'
                : t;
            return O(this.callbacks_, t);
          }),
          (Sn.prototype.createCancelEvent = function (t, e) {
            return this.cancelCallback_ ? new vn(this, t, e) : null;
          }),
          (Sn.prototype.createEvent = function (t, e) {
            y(null != t.childName, 'Child events should have a childName.');
            var n = e.getRef().child(t.childName),
              e = e.getQueryParams().getIndex();
            return new yn(
              t.type,
              this,
              new fn(t.snapshotNode, n, e),
              t.prevName
            );
          }),
          (Sn.prototype.getEventRunner = function (t) {
            var e = this.context_;
            if ('cancel' === t.getEventType()) {
              y(
                this.cancelCallback_,
                'Raising a cancel event on a listener with no cancel callback'
              );
              var n = this.cancelCallback_;
              return function () {
                n.call(e, t.error);
              };
            }
            var r = this.callbacks_[t.eventType];
            return function () {
              r.call(e, t.snapshot, t.prevName);
            };
          }),
          (Sn.prototype.matches = function (e) {
            var n = this;
            if (e instanceof Sn) {
              if (!this.callbacks_ || !e.callbacks_) return !0;
              if (this.context_ === e.context_) {
                var t = Object.keys(e.callbacks_),
                  r = Object.keys(this.callbacks_),
                  i = t.length;
                if (i === r.length) {
                  if (1 !== i)
                    return r.every(function (t) {
                      return e.callbacks_[t] === n.callbacks_[t];
                    });
                  (t = t[0]), (r = r[0]);
                  return !(
                    r !== t ||
                    (e.callbacks_[t] &&
                      this.callbacks_[r] &&
                      e.callbacks_[t] !== this.callbacks_[r])
                  );
                }
              }
            }
            return !1;
          }),
          (Sn.prototype.hasAnyCallback = function () {
            return null !== this.callbacks_;
          }),
          Sn);
      function Sn(t, e, n) {
        (this.callbacks_ = t), (this.cancelCallback_ = e), (this.context_ = n);
      }
      var Tn =
        (Object.defineProperty(In, '__referenceConstructor', {
          get: function () {
            return y(wn, 'Reference.ts has not been loaded'), wn;
          },
          set: function (t) {
            wn = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        (In.validateQueryEndpoints_ = function (t) {
          var e = null,
            n = null;
          if (
            (t.hasStart() && (e = t.getIndexStartValue()),
            t.hasEnd() && (n = t.getIndexEndValue()),
            t.getIndex() === Te)
          ) {
            var r =
                'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
              i =
                'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.';
            if (t.hasStart()) {
              if (t.getIndexStartName() !== Nt) throw new Error(r);
              if ('string' != typeof e) throw new Error(i);
            }
            if (t.hasEnd()) {
              if (t.getIndexEndName() !== Rt) throw new Error(r);
              if ('string' != typeof n) throw new Error(i);
            }
          } else if (t.getIndex() === Fe) {
            if ((null != e && !Gt(e)) || (null != n && !Gt(n)))
              throw new Error(
                'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
              );
          } else if (
            (y(
              t.getIndex() instanceof pn || t.getIndex() === cn,
              'unknown index type.'
            ),
            (null != e && 'object' == typeof e) ||
              (null != n && 'object' == typeof n))
          )
            throw new Error(
              'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
            );
        }),
        (In.validateLimit_ = function (t) {
          if (
            t.hasStart() &&
            t.hasEnd() &&
            t.hasLimit() &&
            !t.hasAnchoredLimit()
          )
            throw new Error(
              "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
            );
        }),
        (In.prototype.validateNoPreviousOrderByCall_ = function (t) {
          if (!0 === this.orderByCalled_)
            throw new Error(t + ": You can't combine multiple orderBy calls.");
        }),
        (In.prototype.getQueryParams = function () {
          return this.queryParams_;
        }),
        (In.prototype.getRef = function () {
          return (
            M('Query.ref', 0, 0, arguments.length),
            new In.__referenceConstructor(this.repo, this.path)
          );
        }),
        (In.prototype.on = function (t, e, n, r) {
          M('Query.on', 2, 4, arguments.length),
            Zt('Query.on', 1, t, !1),
            q('Query.on', 2, e, !1);
          n = In.getCancelAndContextArgs_('Query.on', n, r);
          return (
            'value' === t
              ? this.onValueEvent(e, n.cancel, n.context)
              : (((r = {})[t] = e), this.onChildEvent(r, n.cancel, n.context)),
            e
          );
        }),
        (In.prototype.onValueEvent = function (t, e, n) {
          n = new Cn(t, e || null, n || null);
          this.repo.addEventCallbackForQuery(this, n);
        }),
        (In.prototype.onChildEvent = function (t, e, n) {
          n = new bn(t, e, n);
          this.repo.addEventCallbackForQuery(this, n);
        }),
        (In.prototype.off = function (t, e, n) {
          M('Query.off', 0, 3, arguments.length),
            Zt('Query.off', 1, t, !0),
            q('Query.off', 2, e, !0),
            Q('Query.off', 3, n, !0);
          var r = null,
            i = null;
          'value' === t
            ? (r = new Cn(e || null, null, n || null))
            : t && (e && ((i = {})[t] = e), (r = new bn(i, null, n || null))),
            this.repo.removeEventCallbackForQuery(this, r);
        }),
        (In.prototype.get = function () {
          return this.repo.getValue(this);
        }),
        (In.prototype.once = function (e, n, t, r) {
          var i = this;
          M('Query.once', 1, 4, arguments.length),
            Zt('Query.once', 1, e, !1),
            q('Query.once', 2, n, !0);
          var o = In.getCancelAndContextArgs_('Query.once', t, r),
            s = !0,
            a = new g();
          a.promise.catch(function () {});
          var h = function (t) {
            s &&
              ((s = !1), i.off(e, h), n && n.bind(o.context)(t), a.resolve(t));
          };
          return (
            this.on(e, h, function (t) {
              i.off(e, h), o.cancel && o.cancel.bind(o.context)(t), a.reject(t);
            }),
            a.promise
          );
        }),
        (In.prototype.limitToFirst = function (t) {
          if (
            (M('Query.limitToFirst', 1, 1, arguments.length),
            'number' != typeof t || Math.floor(t) !== t || t <= 0)
          )
            throw new Error(
              'Query.limitToFirst: First argument must be a positive integer.'
            );
          if (this.queryParams_.hasLimit())
            throw new Error(
              'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
            );
          return new In(
            this.repo,
            this.path,
            this.queryParams_.limitToFirst(t),
            this.orderByCalled_
          );
        }),
        (In.prototype.limitToLast = function (t) {
          if (
            (M('Query.limitToLast', 1, 1, arguments.length),
            'number' != typeof t || Math.floor(t) !== t || t <= 0)
          )
            throw new Error(
              'Query.limitToLast: First argument must be a positive integer.'
            );
          if (this.queryParams_.hasLimit())
            throw new Error(
              'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
            );
          return new In(
            this.repo,
            this.path,
            this.queryParams_.limitToLast(t),
            this.orderByCalled_
          );
        }),
        (In.prototype.orderByChild = function (t) {
          if ((M('Query.orderByChild', 1, 1, arguments.length), '$key' === t))
            throw new Error(
              'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
            );
          if ('$priority' === t)
            throw new Error(
              'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
            );
          if ('$value' === t)
            throw new Error(
              'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
            );
          ee('Query.orderByChild', 1, t, !1),
            this.validateNoPreviousOrderByCall_('Query.orderByChild');
          t = new Mt(t);
          if (t.isEmpty())
            throw new Error(
              'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
            );
          (t = new pn(t)), (t = this.queryParams_.orderBy(t));
          return (
            In.validateQueryEndpoints_(t), new In(this.repo, this.path, t, !0)
          );
        }),
        (In.prototype.orderByKey = function () {
          M('Query.orderByKey', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByKey');
          var t = this.queryParams_.orderBy(Te);
          return (
            In.validateQueryEndpoints_(t), new In(this.repo, this.path, t, !0)
          );
        }),
        (In.prototype.orderByPriority = function () {
          M('Query.orderByPriority', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByPriority');
          var t = this.queryParams_.orderBy(Fe);
          return (
            In.validateQueryEndpoints_(t), new In(this.repo, this.path, t, !0)
          );
        }),
        (In.prototype.orderByValue = function () {
          M('Query.orderByValue', 0, 0, arguments.length),
            this.validateNoPreviousOrderByCall_('Query.orderByValue');
          var t = this.queryParams_.orderBy(cn);
          return (
            In.validateQueryEndpoints_(t), new In(this.repo, this.path, t, !0)
          );
        }),
        (In.prototype.startAt = function (t, e) {
          void 0 === t && (t = null),
            M('Query.startAt', 0, 2, arguments.length),
            Xt('Query.startAt', 1, t, this.path, !0),
            te('Query.startAt', 2, e, !0);
          var n = this.queryParams_.startAt(t, e);
          if (
            (In.validateLimit_(n),
            In.validateQueryEndpoints_(n),
            this.queryParams_.hasStart())
          )
            throw new Error(
              'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
            );
          return (
            void 0 === t && (e = t = null),
            new In(this.repo, this.path, n, this.orderByCalled_)
          );
        }),
        (In.prototype.endAt = function (t, e) {
          void 0 === t && (t = null),
            M('Query.endAt', 0, 2, arguments.length),
            Xt('Query.endAt', 1, t, this.path, !0),
            te('Query.endAt', 2, e, !0);
          e = this.queryParams_.endAt(t, e);
          if (
            (In.validateLimit_(e),
            In.validateQueryEndpoints_(e),
            this.queryParams_.hasEnd())
          )
            throw new Error(
              'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
            );
          return new In(this.repo, this.path, e, this.orderByCalled_);
        }),
        (In.prototype.equalTo = function (t, e) {
          if (
            (M('Query.equalTo', 1, 2, arguments.length),
            Xt('Query.equalTo', 1, t, this.path, !1),
            te('Query.equalTo', 2, e, !0),
            this.queryParams_.hasStart())
          )
            throw new Error(
              'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
            );
          if (this.queryParams_.hasEnd())
            throw new Error(
              'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
            );
          return this.startAt(t, e).endAt(t, e);
        }),
        (In.prototype.toString = function () {
          return (
            M('Query.toString', 0, 0, arguments.length),
            this.repo.toString() + this.path.toUrlEncodedString()
          );
        }),
        (In.prototype.toJSON = function () {
          return M('Query.toJSON', 0, 1, arguments.length), this.toString();
        }),
        (In.prototype.queryObject = function () {
          return this.queryParams_.getQueryObject();
        }),
        (In.prototype.queryIdentifier = function () {
          var t = this.queryObject(),
            t = Dt(t);
          return '{}' === t ? 'default' : t;
        }),
        (In.prototype.isEqual = function (t) {
          if (
            (M('Query.isEqual', 1, 1, arguments.length), !(t instanceof In))
          ) {
            throw new Error(
              'Query.isEqual failed: First argument must be an instance of firebase.database.Query.'
            );
          }
          var e = this.repo === t.repo,
            n = this.path.equals(t.path),
            t = this.queryIdentifier() === t.queryIdentifier();
          return e && n && t;
        }),
        (In.getCancelAndContextArgs_ = function (t, e, n) {
          var r = { cancel: null, context: null };
          if (e && n)
            (r.cancel = e),
              q(t, 3, r.cancel, !0),
              (r.context = n),
              Q(t, 4, r.context, !0);
          else if (e)
            if ('object' == typeof e && null !== e) r.context = e;
            else {
              if ('function' != typeof e)
                throw new Error(
                  W(t, 3, !0) +
                    ' must either be a cancel callback or a context object.'
                );
              r.cancel = e;
            }
          return r;
        }),
        Object.defineProperty(In.prototype, 'ref', {
          get: function () {
            return this.getRef();
          },
          enumerable: !1,
          configurable: !0
        }),
        In);
      function In(t, e, n, r) {
        (this.repo = t),
          (this.path = e),
          (this.queryParams_ = n),
          (this.orderByCalled_ = r);
      }
      var Nn =
        ((Rn.prototype.getImmediateChild = function (t) {
          return new Rn(this.node_.getImmediateChild(t));
        }),
        (Rn.prototype.node = function () {
          return this.node_;
        }),
        Rn);
      function Rn(t) {
        this.node_ = t;
      }
      var Pn =
        ((Dn.prototype.getImmediateChild = function (t) {
          t = this.path_.child(t);
          return new Dn(this.syncTree_, t);
        }),
        (Dn.prototype.node = function () {
          return this.syncTree_.calcCompleteEventCache(this.path_);
        }),
        Dn);
      function Dn(t, e) {
        (this.syncTree_ = t), (this.path_ = e);
      }
      function On(t, e, n, r) {
        return Ln(e, new Pn(n, t), r);
      }
      function xn(t, e, n) {
        return Ln(t, new Nn(e), n);
      }
      var kn = function (t, e, n) {
          return t && 'object' == typeof t
            ? (y('.sv' in t, 'Unexpected leaf node or priority contents'),
              'string' == typeof t['.sv']
                ? An(t['.sv'], e, n)
                : 'object' == typeof t['.sv']
                ? Fn(t['.sv'], e)
                : void y(
                    !1,
                    'Unexpected server value: ' + JSON.stringify(t, null, 2)
                  ))
            : t;
        },
        An = function (t, e, n) {
          if ('timestamp' === t) return n.timestamp;
          y(!1, 'Unexpected server value: ' + t);
        },
        Fn = function (t, e, n) {
          t.hasOwnProperty('increment') ||
            y(!1, 'Unexpected server value: ' + JSON.stringify(t, null, 2));
          t = t.increment;
          'number' != typeof t && y(!1, 'Unexpected increment value: ' + t);
          e = e.node();
          if (
            (y(null != e, 'Expected ChildrenNode.EMPTY_NODE for nulls'),
            !e.isLeafNode())
          )
            return t;
          e = e.getValue();
          return 'number' != typeof e ? t : e + t;
        };
      function Ln(t, r, i) {
        var e = t.getPriority().val(),
          n = kn(e, r.getImmediateChild('.priority'), i);
        if (t.isLeafNode()) {
          var o = t,
            e = kn(o.getValue(), r, i);
          return e !== o.getValue() || n !== o.getPriority().val()
            ? new xe(e, hn(n))
            : t;
        }
        var t = t,
          s = t;
        return (
          n !== t.getPriority().val() && (s = s.updatePriority(new xe(n))),
          t.forEachChild(Fe, function (t, e) {
            var n = Ln(e, r.getImmediateChild(t), i);
            n !== e && (s = s.updateImmediateChild(t, n));
          }),
          s
        );
      }
      var Mn,
        Wn =
          ((qn.prototype.find = function (t) {
            if (null != this.value) return this.value.getChild(t);
            if (!t.isEmpty() && 0 < this.children.size) {
              var e = t.getFront();
              return (
                (t = t.popFront()),
                this.children.has(e) ? this.children.get(e).find(t) : null
              );
            }
            return null;
          }),
          (qn.prototype.remember = function (t, e) {
            var n;
            t.isEmpty()
              ? ((this.value = e), this.children.clear())
              : null !== this.value
              ? (this.value = this.value.updateChild(t, e))
              : ((n = t.getFront()),
                this.children.has(n) || this.children.set(n, new qn()),
                (n = this.children.get(n)),
                (t = t.popFront()),
                n.remember(t, e));
          }),
          (qn.prototype.forget = function (t) {
            if (t.isEmpty())
              return (this.value = null), this.children.clear(), !0;
            if (null !== this.value) {
              if (this.value.isLeafNode()) return !1;
              var e = this.value;
              this.value = null;
              var n = this;
              return (
                e.forEachChild(Fe, function (t, e) {
                  n.remember(new Mt(t), e);
                }),
                this.forget(t)
              );
            }
            if (0 < this.children.size) {
              e = t.getFront();
              return (
                (t = t.popFront()),
                this.children.has(e) &&
                  this.children.get(e).forget(t) &&
                  this.children.delete(e),
                0 === this.children.size
              );
            }
            return !0;
          }),
          (qn.prototype.forEachTree = function (n, r) {
            null !== this.value
              ? r(n, this.value)
              : this.forEachChild(function (t, e) {
                  t = new Mt(n.toString() + '/' + t);
                  e.forEachTree(t, r);
                });
          }),
          (qn.prototype.forEachChild = function (n) {
            this.children.forEach(function (t, e) {
              n(e, t);
            });
          }),
          qn);
      function qn() {
        (this.value = null), (this.children = new Map());
      }
      ((Ce = Mn = Mn || {})[(Ce.OVERWRITE = 0)] = 'OVERWRITE'),
        (Ce[(Ce.MERGE = 1)] = 'MERGE'),
        (Ce[(Ce.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
        (Ce[(Ce.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE');
      var Qn =
        ((Un.User = new Un(!0, !1, null, !1)),
        (Un.Server = new Un(!1, !0, null, !1)),
        (Un.forServerTaggedQuery = function (t) {
          return new Un(!1, !0, t, !0);
        }),
        Un);
      function Un(t, e, n, r) {
        (this.fromUser = t),
          (this.fromServer = e),
          (this.queryId = n),
          (this.tagged = r),
          y(!r || e, 'Tagged queries must be from server.');
      }
      var Vn,
        Hn =
          ((jn.prototype.operationForChild = function (t) {
            if (this.path.isEmpty()) {
              if (null != this.affectedTree.value)
                return (
                  y(
                    this.affectedTree.children.isEmpty(),
                    'affectedTree should not have overlapping affected paths.'
                  ),
                  this
                );
              var e = this.affectedTree.subtree(new Mt(t));
              return new jn(Mt.Empty, e, this.revert);
            }
            return (
              y(
                this.path.getFront() === t,
                'operationForChild called for unrelated child.'
              ),
              new jn(this.path.popFront(), this.affectedTree, this.revert)
            );
          }),
          jn);
      function jn(t, e, n) {
        (this.path = t),
          (this.affectedTree = e),
          (this.revert = n),
          (this.type = Mn.ACK_USER_WRITE),
          (this.source = Qn.User);
      }
      var Bn =
        ((zn.fromObject = function (t) {
          var n = zn.Empty;
          return (
            Ot(t, function (t, e) {
              n = n.set(new Mt(t), e);
            }),
            n
          );
        }),
        (zn.prototype.isEmpty = function () {
          return null === this.value && this.children.isEmpty();
        }),
        (zn.prototype.findRootMostMatchingPathAndValue = function (t, e) {
          if (null != this.value && e(this.value))
            return { path: Mt.Empty, value: this.value };
          if (t.isEmpty()) return null;
          var n = t.getFront(),
            r = this.children.get(n);
          if (null === r) return null;
          e = r.findRootMostMatchingPathAndValue(t.popFront(), e);
          return null == e
            ? null
            : { path: new Mt(n).child(e.path), value: e.value };
        }),
        (zn.prototype.findRootMostValueAndPath = function (t) {
          return this.findRootMostMatchingPathAndValue(t, function () {
            return !0;
          });
        }),
        (zn.prototype.subtree = function (t) {
          if (t.isEmpty()) return this;
          var e = t.getFront(),
            e = this.children.get(e);
          return null !== e ? e.subtree(t.popFront()) : zn.Empty;
        }),
        (zn.prototype.set = function (t, e) {
          if (t.isEmpty()) return new zn(e, this.children);
          var n = t.getFront(),
            e = (this.children.get(n) || zn.Empty).set(t.popFront(), e),
            e = this.children.insert(n, e);
          return new zn(this.value, e);
        }),
        (zn.prototype.remove = function (t) {
          if (t.isEmpty())
            return this.children.isEmpty()
              ? zn.Empty
              : new zn(null, this.children);
          var e = t.getFront(),
            n = this.children.get(e);
          if (n) {
            (n = n.remove(t.popFront())),
              (t = void 0),
              (t = n.isEmpty()
                ? this.children.remove(e)
                : this.children.insert(e, n));
            return null === this.value && t.isEmpty()
              ? zn.Empty
              : new zn(this.value, t);
          }
          return this;
        }),
        (zn.prototype.get = function (t) {
          if (t.isEmpty()) return this.value;
          var e = t.getFront(),
            e = this.children.get(e);
          return e ? e.get(t.popFront()) : null;
        }),
        (zn.prototype.setTree = function (t, e) {
          if (t.isEmpty()) return e;
          var n = t.getFront(),
            t = (this.children.get(n) || zn.Empty).setTree(t.popFront(), e),
            e = void 0,
            e = t.isEmpty()
              ? this.children.remove(n)
              : this.children.insert(n, t);
          return new zn(this.value, e);
        }),
        (zn.prototype.fold = function (t) {
          return this.fold_(Mt.Empty, t);
        }),
        (zn.prototype.fold_ = function (n, r) {
          var i = {};
          return (
            this.children.inorderTraversal(function (t, e) {
              i[t] = e.fold_(n.child(t), r);
            }),
            r(n, this.value, i)
          );
        }),
        (zn.prototype.findOnPath = function (t, e) {
          return this.findOnPath_(t, Mt.Empty, e);
        }),
        (zn.prototype.findOnPath_ = function (t, e, n) {
          var r = !!this.value && n(e, this.value);
          if (r) return r;
          if (t.isEmpty()) return null;
          var i = t.getFront(),
            r = this.children.get(i);
          return r ? r.findOnPath_(t.popFront(), e.child(i), n) : null;
        }),
        (zn.prototype.foreachOnPath = function (t, e) {
          return this.foreachOnPath_(t, Mt.Empty, e);
        }),
        (zn.prototype.foreachOnPath_ = function (t, e, n) {
          if (t.isEmpty()) return this;
          this.value && n(e, this.value);
          var r = t.getFront(),
            i = this.children.get(r);
          return i ? i.foreachOnPath_(t.popFront(), e.child(r), n) : zn.Empty;
        }),
        (zn.prototype.foreach = function (t) {
          this.foreach_(Mt.Empty, t);
        }),
        (zn.prototype.foreach_ = function (n, r) {
          this.children.inorderTraversal(function (t, e) {
            e.foreach_(n.child(t), r);
          }),
            this.value && r(n, this.value);
        }),
        (zn.prototype.foreachChild = function (n) {
          this.children.inorderTraversal(function (t, e) {
            e.value && n(t, e.value);
          });
        }),
        (zn.Empty = new zn(null)),
        zn);
      function zn(t, e) {
        void 0 === e && (e = Vn = Vn || new Ue(dt)),
          (this.value = t),
          (this.children = e);
      }
      var Kn =
        ((Yn.prototype.operationForChild = function (t) {
          return this.path.isEmpty()
            ? new Yn(this.source, Mt.Empty)
            : new Yn(this.source, this.path.popFront());
        }),
        Yn);
      function Yn(t, e) {
        (this.source = t), (this.path = e), (this.type = Mn.LISTEN_COMPLETE);
      }
      var Gn =
        ((Xn.prototype.operationForChild = function (t) {
          return this.path.isEmpty()
            ? new Xn(this.source, Mt.Empty, this.snap.getImmediateChild(t))
            : new Xn(this.source, this.path.popFront(), this.snap);
        }),
        Xn);
      function Xn(t, e, n) {
        (this.source = t),
          (this.path = e),
          (this.snap = n),
          (this.type = Mn.OVERWRITE);
      }
      var $n =
        ((Jn.prototype.operationForChild = function (t) {
          if (this.path.isEmpty()) {
            var e = this.children.subtree(new Mt(t));
            return e.isEmpty()
              ? null
              : e.value
              ? new Gn(this.source, Mt.Empty, e.value)
              : new Jn(this.source, Mt.Empty, e);
          }
          return (
            y(
              this.path.getFront() === t,
              "Can't get a merge for a child not on the path of the operation"
            ),
            new Jn(this.source, this.path.popFront(), this.children)
          );
        }),
        (Jn.prototype.toString = function () {
          return (
            'Operation(' +
            this.path +
            ': ' +
            this.source.toString() +
            ' merge: ' +
            this.children.toString() +
            ')'
          );
        }),
        Jn);
      function Jn(t, e, n) {
        (this.source = t),
          (this.path = e),
          (this.children = n),
          (this.type = Mn.MERGE);
      }
      var Zn =
        ((tr.prototype.isFullyInitialized = function () {
          return this.fullyInitialized_;
        }),
        (tr.prototype.isFiltered = function () {
          return this.filtered_;
        }),
        (tr.prototype.isCompleteForPath = function (t) {
          if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_;
          t = t.getFront();
          return this.isCompleteForChild(t);
        }),
        (tr.prototype.isCompleteForChild = function (t) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(t)
          );
        }),
        (tr.prototype.getNode = function () {
          return this.node_;
        }),
        tr);
      function tr(t, e, n) {
        (this.node_ = t), (this.fullyInitialized_ = e), (this.filtered_ = n);
      }
      var er =
        ((nr.prototype.updateEventSnap = function (t, e, n) {
          return new nr(new Zn(t, e, n), this.serverCache_);
        }),
        (nr.prototype.updateServerSnap = function (t, e, n) {
          return new nr(this.eventCache_, new Zn(t, e, n));
        }),
        (nr.prototype.getEventCache = function () {
          return this.eventCache_;
        }),
        (nr.prototype.getCompleteEventSnap = function () {
          return this.eventCache_.isFullyInitialized()
            ? this.eventCache_.getNode()
            : null;
        }),
        (nr.prototype.getServerCache = function () {
          return this.serverCache_;
        }),
        (nr.prototype.getCompleteServerSnap = function () {
          return this.serverCache_.isFullyInitialized()
            ? this.serverCache_.getNode()
            : null;
        }),
        (nr.Empty = new nr(
          new Zn(en.EMPTY_NODE, !1, !1),
          new Zn(en.EMPTY_NODE, !1, !1)
        )),
        nr);
      function nr(t, e) {
        (this.eventCache_ = t), (this.serverCache_ = e);
      }
      var rr =
        ((ir.valueChange = function (t) {
          return new ir(ir.VALUE, t);
        }),
        (ir.childAddedChange = function (t, e) {
          return new ir(ir.CHILD_ADDED, e, t);
        }),
        (ir.childRemovedChange = function (t, e) {
          return new ir(ir.CHILD_REMOVED, e, t);
        }),
        (ir.childChangedChange = function (t, e, n) {
          return new ir(ir.CHILD_CHANGED, e, t, n);
        }),
        (ir.childMovedChange = function (t, e) {
          return new ir(ir.CHILD_MOVED, e, t);
        }),
        (ir.CHILD_ADDED = 'child_added'),
        (ir.CHILD_REMOVED = 'child_removed'),
        (ir.CHILD_CHANGED = 'child_changed'),
        (ir.CHILD_MOVED = 'child_moved'),
        (ir.VALUE = 'value'),
        ir);
      function ir(t, e, n, r, i) {
        (this.type = t),
          (this.snapshotNode = e),
          (this.childName = n),
          (this.oldSnap = r),
          (this.prevName = i);
      }
      var or =
        ((sr.prototype.updateChild = function (t, e, n, r, i, o) {
          y(
            t.isIndexed(this.index_),
            'A node must be indexed if only a child is updated'
          );
          var s = t.getImmediateChild(e);
          return s.getChild(r).equals(n.getChild(r)) &&
            s.isEmpty() === n.isEmpty()
            ? t
            : (null != o &&
                (n.isEmpty()
                  ? t.hasChild(e)
                    ? o.trackChildChange(rr.childRemovedChange(e, s))
                    : y(
                        t.isLeafNode(),
                        'A child remove without an old child only makes sense on a leaf node'
                      )
                  : s.isEmpty()
                  ? o.trackChildChange(rr.childAddedChange(e, n))
                  : o.trackChildChange(rr.childChangedChange(e, n, s))),
              t.isLeafNode() && n.isEmpty()
                ? t
                : t.updateImmediateChild(e, n).withIndex(this.index_));
        }),
        (sr.prototype.updateFullNode = function (r, n, i) {
          return (
            null != i &&
              (r.isLeafNode() ||
                r.forEachChild(Fe, function (t, e) {
                  n.hasChild(t) ||
                    i.trackChildChange(rr.childRemovedChange(t, e));
                }),
              n.isLeafNode() ||
                n.forEachChild(Fe, function (t, e) {
                  var n;
                  r.hasChild(t)
                    ? (n = r.getImmediateChild(t)).equals(e) ||
                      i.trackChildChange(rr.childChangedChange(t, e, n))
                    : i.trackChildChange(rr.childAddedChange(t, e));
                })),
            n.withIndex(this.index_)
          );
        }),
        (sr.prototype.updatePriority = function (t, e) {
          return t.isEmpty() ? en.EMPTY_NODE : t.updatePriority(e);
        }),
        (sr.prototype.filtersNodes = function () {
          return !1;
        }),
        (sr.prototype.getIndexedFilter = function () {
          return this;
        }),
        (sr.prototype.getIndex = function () {
          return this.index_;
        }),
        sr);
      function sr(t) {
        this.index_ = t;
      }
      var ar =
        ((hr.prototype.trackChildChange = function (t) {
          var e = t.type,
            n = t.childName;
          y(
            e === rr.CHILD_ADDED ||
              e === rr.CHILD_CHANGED ||
              e === rr.CHILD_REMOVED,
            'Only child changes supported for tracking'
          ),
            y(
              '.priority' !== n,
              'Only non-priority child changes can be tracked.'
            );
          var r = this.changeMap.get(n);
          if (r) {
            var i = r.type;
            if (e === rr.CHILD_ADDED && i === rr.CHILD_REMOVED)
              this.changeMap.set(
                n,
                rr.childChangedChange(n, t.snapshotNode, r.snapshotNode)
              );
            else if (e === rr.CHILD_REMOVED && i === rr.CHILD_ADDED)
              this.changeMap.delete(n);
            else if (e === rr.CHILD_REMOVED && i === rr.CHILD_CHANGED)
              this.changeMap.set(n, rr.childRemovedChange(n, r.oldSnap));
            else if (e === rr.CHILD_CHANGED && i === rr.CHILD_ADDED)
              this.changeMap.set(n, rr.childAddedChange(n, t.snapshotNode));
            else {
              if (e !== rr.CHILD_CHANGED || i !== rr.CHILD_CHANGED)
                throw c(
                  'Illegal combination of changes: ' +
                    t +
                    ' occurred after ' +
                    r
                );
              this.changeMap.set(
                n,
                rr.childChangedChange(n, t.snapshotNode, r.oldSnap)
              );
            }
          } else this.changeMap.set(n, t);
        }),
        (hr.prototype.getChanges = function () {
          return Array.from(this.changeMap.values());
        }),
        hr);
      function hr() {
        this.changeMap = new Map();
      }
      function lr() {}
      var ur = new ((lr.prototype.getCompleteChild = function (t) {
          return null;
        }),
        (lr.prototype.getChildAfterChild = function (t, e, n) {
          return null;
        }),
        lr)(),
        cr =
          ((pr.prototype.getCompleteChild = function (t) {
            var e = this.viewCache_.getEventCache();
            if (e.isCompleteForChild(t))
              return e.getNode().getImmediateChild(t);
            e =
              null != this.optCompleteServerCache_
                ? new Zn(this.optCompleteServerCache_, !0, !1)
                : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(t, e);
          }),
          (pr.prototype.getChildAfterChild = function (t, e, n) {
            var r =
                null != this.optCompleteServerCache_
                  ? this.optCompleteServerCache_
                  : this.viewCache_.getCompleteServerSnap(),
              t = this.writes_.calcIndexedSlice(r, e, 1, n, t);
            return 0 === t.length ? null : t[0];
          }),
          pr);
      function pr(t, e, n) {
        void 0 === n && (n = null),
          (this.writes_ = t),
          (this.viewCache_ = e),
          (this.optCompleteServerCache_ = n);
      }
      var dr = function (t, e) {
          (this.viewCache = t), (this.changes = e);
        },
        fr =
          ((_r.prototype.assertIndexed = function (t) {
            y(
              t.getEventCache().getNode().isIndexed(this.filter_.getIndex()),
              'Event snap not indexed'
            ),
              y(
                t.getServerCache().getNode().isIndexed(this.filter_.getIndex()),
                'Server snap not indexed'
              );
          }),
          (_r.prototype.applyOperation = function (t, e, n, r) {
            var i = new ar();
            if (e.type === Mn.OVERWRITE)
              var o = e,
                s = o.source.fromUser
                  ? this.applyUserOverwrite_(t, o.path, o.snap, n, r, i)
                  : (y(o.source.fromServer, 'Unknown source.'),
                    (a =
                      o.source.tagged ||
                      (t.getServerCache().isFiltered() && !o.path.isEmpty())),
                    this.applyServerOverwrite_(t, o.path, o.snap, n, r, a, i));
            else if (e.type === Mn.MERGE) {
              o = e;
              s = o.source.fromUser
                ? this.applyUserMerge_(t, o.path, o.children, n, r, i)
                : (y(o.source.fromServer, 'Unknown source.'),
                  (a = o.source.tagged || t.getServerCache().isFiltered()),
                  this.applyServerMerge_(t, o.path, o.children, n, r, a, i));
            } else if (e.type === Mn.ACK_USER_WRITE) {
              var a = e;
              s = a.revert
                ? this.revertUserWrite_(t, a.path, n, r, i)
                : this.ackUserWrite_(t, a.path, a.affectedTree, n, r, i);
            } else {
              if (e.type !== Mn.LISTEN_COMPLETE)
                throw c('Unknown operation type: ' + e.type);
              s = this.listenComplete_(t, e.path, n, i);
            }
            i = i.getChanges();
            return _r.maybeAddValueEvent_(t, s, i), new dr(s, i);
          }),
          (_r.maybeAddValueEvent_ = function (t, e, n) {
            var r,
              i,
              o = e.getEventCache();
            o.isFullyInitialized() &&
              ((r = o.getNode().isLeafNode() || o.getNode().isEmpty()),
              (i = t.getCompleteEventSnap()),
              (0 < n.length ||
                !t.getEventCache().isFullyInitialized() ||
                (r && !o.getNode().equals(i)) ||
                !o.getNode().getPriority().equals(i.getPriority())) &&
                n.push(rr.valueChange(e.getCompleteEventSnap())));
          }),
          (_r.prototype.generateEventCacheAfterServerEvent_ = function (
            t,
            e,
            n,
            r,
            i
          ) {
            var o = t.getEventCache();
            if (null != n.shadowingWrite(e)) return t;
            var s,
              a,
              h,
              l,
              u = void 0,
              c = void 0;
            return (
              (u = e.isEmpty()
                ? (y(
                    t.getServerCache().isFullyInitialized(),
                    'If change path is empty, we must have complete server data'
                  ),
                  t.getServerCache().isFiltered()
                    ? ((s =
                        (s = t.getCompleteServerSnap()) instanceof en
                          ? s
                          : en.EMPTY_NODE),
                      (s = n.calcCompleteEventChildren(s)),
                      this.filter_.updateFullNode(
                        t.getEventCache().getNode(),
                        s,
                        i
                      ))
                    : ((a = n.calcCompleteEventCache(
                        t.getCompleteServerSnap()
                      )),
                      this.filter_.updateFullNode(
                        t.getEventCache().getNode(),
                        a,
                        i
                      )))
                : '.priority' === (a = e.getFront())
                ? (y(
                    1 === e.getLength(),
                    "Can't have a priority with additional path components"
                  ),
                  (h = o.getNode()),
                  (c = t.getServerCache().getNode()),
                  null != (l = n.calcEventCacheAfterServerOverwrite(e, h, c))
                    ? this.filter_.updatePriority(h, l)
                    : o.getNode())
                : ((h = e.popFront()),
                  (l = void 0),
                  null !=
                  (l = o.isCompleteForChild(a)
                    ? ((c = t.getServerCache().getNode()),
                      null !=
                      (c = n.calcEventCacheAfterServerOverwrite(
                        e,
                        o.getNode(),
                        c
                      ))
                        ? o.getNode().getImmediateChild(a).updateChild(h, c)
                        : o.getNode().getImmediateChild(a))
                    : n.calcCompleteChild(a, t.getServerCache()))
                    ? this.filter_.updateChild(o.getNode(), a, l, h, r, i)
                    : o.getNode())),
              t.updateEventSnap(
                u,
                o.isFullyInitialized() || e.isEmpty(),
                this.filter_.filtersNodes()
              )
            );
          }),
          (_r.prototype.applyServerOverwrite_ = function (t, e, n, r, i, o, s) {
            var a = t.getServerCache(),
              h = o ? this.filter_ : this.filter_.getIndexedFilter();
            if (e.isEmpty()) u = h.updateFullNode(a.getNode(), n, null);
            else if (h.filtersNodes() && !a.isFiltered())
              var l = a.getNode().updateChild(e, n),
                u = h.updateFullNode(a.getNode(), l, null);
            else {
              o = e.getFront();
              if (!a.isCompleteForPath(e) && 1 < e.getLength()) return t;
              (l = e.popFront()),
                (n = a.getNode().getImmediateChild(o).updateChild(l, n));
              u =
                '.priority' === o
                  ? h.updatePriority(a.getNode(), n)
                  : h.updateChild(a.getNode(), o, n, l, ur, null);
            }
            (h = t.updateServerSnap(
              u,
              a.isFullyInitialized() || e.isEmpty(),
              h.filtersNodes()
            )),
              (i = new cr(r, h, i));
            return this.generateEventCacheAfterServerEvent_(h, e, r, i, s);
          }),
          (_r.prototype.applyUserOverwrite_ = function (t, e, n, r, i, o) {
            var s,
              a,
              h = t.getEventCache(),
              l = new cr(r, t, i);
            return e.isEmpty()
              ? ((a = this.filter_.updateFullNode(
                  t.getEventCache().getNode(),
                  n,
                  o
                )),
                t.updateEventSnap(a, !0, this.filter_.filtersNodes()))
              : '.priority' === (s = e.getFront())
              ? ((a = this.filter_.updatePriority(
                  t.getEventCache().getNode(),
                  n
                )),
                t.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered()))
              : ((r = e.popFront()),
                (i = h.getNode().getImmediateChild(s)),
                (a = void 0),
                (a = r.isEmpty()
                  ? n
                  : null != (e = l.getCompleteChild(s))
                  ? '.priority' === r.getBack() &&
                    e.getChild(r.parent()).isEmpty()
                    ? e
                    : e.updateChild(r, n)
                  : en.EMPTY_NODE),
                i.equals(a)
                  ? t
                  : ((o = this.filter_.updateChild(h.getNode(), s, a, r, l, o)),
                    t.updateEventSnap(
                      o,
                      h.isFullyInitialized(),
                      this.filter_.filtersNodes()
                    )));
          }),
          (_r.cacheHasChild_ = function (t, e) {
            return t.getEventCache().isCompleteForChild(e);
          }),
          (_r.prototype.applyUserMerge_ = function (n, r, t, i, o, s) {
            var a = this,
              h = n;
            return (
              t.foreach(function (t, e) {
                t = r.child(t);
                _r.cacheHasChild_(n, t.getFront()) &&
                  (h = a.applyUserOverwrite_(h, t, e, i, o, s));
              }),
              t.foreach(function (t, e) {
                t = r.child(t);
                _r.cacheHasChild_(n, t.getFront()) ||
                  (h = a.applyUserOverwrite_(h, t, e, i, o, s));
              }),
              h
            );
          }),
          (_r.prototype.applyMerge_ = function (n, t) {
            return (
              t.foreach(function (t, e) {
                n = n.updateChild(t, e);
              }),
              n
            );
          }),
          (_r.prototype.applyServerMerge_ = function (r, t, e, i, o, s, a) {
            var h = this;
            if (
              r.getServerCache().getNode().isEmpty() &&
              !r.getServerCache().isFullyInitialized()
            )
              return r;
            var l = r,
              e = t.isEmpty() ? e : Bn.Empty.setTree(t, e),
              u = r.getServerCache().getNode();
            return (
              e.children.inorderTraversal(function (t, e) {
                var n;
                u.hasChild(t) &&
                  ((n = r.getServerCache().getNode().getImmediateChild(t)),
                  (e = h.applyMerge_(n, e)),
                  (l = h.applyServerOverwrite_(l, new Mt(t), e, i, o, s, a)));
              }),
              e.children.inorderTraversal(function (t, e) {
                var n =
                  !r.getServerCache().isCompleteForChild(t) && null == e.value;
                u.hasChild(t) ||
                  n ||
                  ((n = r.getServerCache().getNode().getImmediateChild(t)),
                  (e = h.applyMerge_(n, e)),
                  (l = h.applyServerOverwrite_(l, new Mt(t), e, i, o, s, a)));
              }),
              l
            );
          }),
          (_r.prototype.ackUserWrite_ = function (t, r, e, n, i, o) {
            if (null != n.shadowingWrite(r)) return t;
            var s = t.getServerCache().isFiltered(),
              a = t.getServerCache();
            if (null != e.value) {
              if (
                (r.isEmpty() && a.isFullyInitialized()) ||
                a.isCompleteForPath(r)
              )
                return this.applyServerOverwrite_(
                  t,
                  r,
                  a.getNode().getChild(r),
                  n,
                  i,
                  s,
                  o
                );
              if (r.isEmpty()) {
                var h = Bn.Empty;
                return (
                  a.getNode().forEachChild(Te, function (t, e) {
                    h = h.set(new Mt(t), e);
                  }),
                  this.applyServerMerge_(t, r, h, n, i, s, o)
                );
              }
              return t;
            }
            var l = Bn.Empty;
            return (
              e.foreach(function (t, e) {
                var n = r.child(t);
                a.isCompleteForPath(n) &&
                  (l = l.set(t, a.getNode().getChild(n)));
              }),
              this.applyServerMerge_(t, r, l, n, i, s, o)
            );
          }),
          (_r.prototype.listenComplete_ = function (t, e, n, r) {
            var i = t.getServerCache(),
              i = t.updateServerSnap(
                i.getNode(),
                i.isFullyInitialized() || e.isEmpty(),
                i.isFiltered()
              );
            return this.generateEventCacheAfterServerEvent_(i, e, n, ur, r);
          }),
          (_r.prototype.revertUserWrite_ = function (t, e, n, r, i) {
            var o;
            if (null != n.shadowingWrite(e)) return t;
            var s,
              a,
              h = new cr(n, t, r),
              l = t.getEventCache().getNode(),
              r = void 0;
            return (
              e.isEmpty() || '.priority' === e.getFront()
                ? ((a = void 0),
                  (a = t.getServerCache().isFullyInitialized()
                    ? n.calcCompleteEventCache(t.getCompleteServerSnap())
                    : ((s = t.getServerCache().getNode()),
                      y(
                        s instanceof en,
                        'serverChildren would be complete if leaf node'
                      ),
                      n.calcCompleteEventChildren(s))),
                  (r = this.filter_.updateFullNode(l, a, i)))
                : ((s = e.getFront()),
                  null == (a = n.calcCompleteChild(s, t.getServerCache())) &&
                    t.getServerCache().isCompleteForChild(s) &&
                    (a = l.getImmediateChild(s)),
                  (r =
                    null != a
                      ? this.filter_.updateChild(l, s, a, e.popFront(), h, i)
                      : t.getEventCache().getNode().hasChild(s)
                      ? this.filter_.updateChild(
                          l,
                          s,
                          en.EMPTY_NODE,
                          e.popFront(),
                          h,
                          i
                        )
                      : l).isEmpty() &&
                    t.getServerCache().isFullyInitialized() &&
                    (o = n.calcCompleteEventCache(
                      t.getCompleteServerSnap()
                    )).isLeafNode() &&
                    (r = this.filter_.updateFullNode(r, o, i))),
              (o =
                t.getServerCache().isFullyInitialized() ||
                null != n.shadowingWrite(Mt.Empty)),
              t.updateEventSnap(r, o, this.filter_.filtersNodes())
            );
          }),
          _r);
      function _r(t) {
        this.filter_ = t;
      }
      var yr =
        ((gr.prototype.generateEventsForChanges = function (t, e, n) {
          var r = this,
            i = [],
            o = [];
          return (
            t.forEach(function (t) {
              t.type === rr.CHILD_CHANGED &&
                r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                o.push(rr.childMovedChange(t.childName, t.snapshotNode));
            }),
            this.generateEventsForType_(i, rr.CHILD_REMOVED, t, n, e),
            this.generateEventsForType_(i, rr.CHILD_ADDED, t, n, e),
            this.generateEventsForType_(i, rr.CHILD_MOVED, o, n, e),
            this.generateEventsForType_(i, rr.CHILD_CHANGED, t, n, e),
            this.generateEventsForType_(i, rr.VALUE, t, n, e),
            i
          );
        }),
        (gr.prototype.generateEventsForType_ = function (r, e, t, i, o) {
          var s = this,
            t = t.filter(function (t) {
              return t.type === e;
            });
          t.sort(this.compareChanges_.bind(this)),
            t.forEach(function (e) {
              var n = s.materializeSingleChange_(e, o);
              i.forEach(function (t) {
                t.respondsTo(e.type) && r.push(t.createEvent(n, s.query_));
              });
            });
        }),
        (gr.prototype.materializeSingleChange_ = function (t, e) {
          return (
            'value' === t.type ||
              'child_removed' === t.type ||
              (t.prevName = e.getPredecessorChildName(
                t.childName,
                t.snapshotNode,
                this.index_
              )),
            t
          );
        }),
        (gr.prototype.compareChanges_ = function (t, e) {
          if (null == t.childName || null == e.childName)
            throw c('Should only compare child_ events.');
          (t = new ge(t.childName, t.snapshotNode)),
            (e = new ge(e.childName, e.snapshotNode));
          return this.index_.compare(t, e);
        }),
        gr);
      function gr(t) {
        (this.query_ = t),
          (this.index_ = this.query_.getQueryParams().getIndex());
      }
      var vr,
        mr =
          ((Cr.prototype.getQuery = function () {
            return this.query_;
          }),
          (Cr.prototype.getServerCache = function () {
            return this.viewCache_.getServerCache().getNode();
          }),
          (Cr.prototype.getCompleteServerCache = function (t) {
            var e = this.viewCache_.getCompleteServerSnap();
            return e &&
              (this.query_.getQueryParams().loadsAllData() ||
                (!t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()))
              ? e.getChild(t)
              : null;
          }),
          (Cr.prototype.isEmpty = function () {
            return 0 === this.eventRegistrations_.length;
          }),
          (Cr.prototype.addEventRegistration = function (t) {
            this.eventRegistrations_.push(t);
          }),
          (Cr.prototype.removeEventRegistration = function (t, e) {
            var n,
              r = [];
            if (
              (e &&
                (y(
                  null == t,
                  'A cancel should cancel all event registrations.'
                ),
                (n = this.query_.path),
                this.eventRegistrations_.forEach(function (t) {
                  t = t.createCancelEvent(e, n);
                  t && r.push(t);
                })),
              t)
            ) {
              for (
                var i = [], o = 0;
                o < this.eventRegistrations_.length;
                ++o
              ) {
                var s = this.eventRegistrations_[o];
                if (s.matches(t)) {
                  if (t.hasAnyCallback()) {
                    i = i.concat(this.eventRegistrations_.slice(o + 1));
                    break;
                  }
                } else i.push(s);
              }
              this.eventRegistrations_ = i;
            } else this.eventRegistrations_ = [];
            return r;
          }),
          (Cr.prototype.applyOperation = function (t, e, n) {
            t.type === Mn.MERGE &&
              null !== t.source.queryId &&
              (y(
                this.viewCache_.getCompleteServerSnap(),
                'We should always have a full cache before handling merges'
              ),
              y(
                this.viewCache_.getCompleteEventSnap(),
                'Missing event cache, even though we have a server cache'
              ));
            var r = this.viewCache_,
              n = this.processor_.applyOperation(r, t, e, n);
            return (
              this.processor_.assertIndexed(n.viewCache),
              y(
                n.viewCache.getServerCache().isFullyInitialized() ||
                  !r.getServerCache().isFullyInitialized(),
                'Once a server snap is complete, it should never go back'
              ),
              (this.viewCache_ = n.viewCache),
              this.generateEventsForChanges_(
                n.changes,
                n.viewCache.getEventCache().getNode(),
                null
              )
            );
          }),
          (Cr.prototype.getInitialEvents = function (t) {
            var e = this.viewCache_.getEventCache(),
              n = [];
            return (
              e.getNode().isLeafNode() ||
                e.getNode().forEachChild(Fe, function (t, e) {
                  n.push(rr.childAddedChange(t, e));
                }),
              e.isFullyInitialized() && n.push(rr.valueChange(e.getNode())),
              this.generateEventsForChanges_(n, e.getNode(), t)
            );
          }),
          (Cr.prototype.generateEventsForChanges_ = function (t, e, n) {
            n = n ? [n] : this.eventRegistrations_;
            return this.eventGenerator_.generateEventsForChanges(t, e, n);
          }),
          Cr);
      function Cr(t, e) {
        (this.query_ = t), (this.eventRegistrations_ = []);
        var n = this.query_.getQueryParams(),
          r = new or(n.getIndex()),
          i = n.getNodeFilter();
        this.processor_ = new fr(i);
        var o = e.getServerCache(),
          t = e.getEventCache(),
          n = r.updateFullNode(en.EMPTY_NODE, o.getNode(), null),
          e = i.updateFullNode(en.EMPTY_NODE, t.getNode(), null),
          r = new Zn(n, o.isFullyInitialized(), r.filtersNodes()),
          i = new Zn(e, t.isFullyInitialized(), i.filtersNodes());
        (this.viewCache_ = new er(i, r)),
          (this.eventGenerator_ = new yr(this.query_));
      }
      var Er =
        (Object.defineProperty(wr, '__referenceConstructor', {
          get: function () {
            return y(vr, 'Reference.ts has not been loaded'), vr;
          },
          set: function (t) {
            y(!vr, '__referenceConstructor has already been defined'), (vr = t);
          },
          enumerable: !1,
          configurable: !0
        }),
        (wr.prototype.isEmpty = function () {
          return 0 === this.views.size;
        }),
        (wr.prototype.applyOperation = function (t, e, n) {
          var r,
            i,
            o = t.source.queryId;
          if (null !== o) {
            var s = this.views.get(o);
            return (
              y(null != s, 'SyncTree gave us an op for an invalid query.'),
              s.applyOperation(t, e, n)
            );
          }
          var a = [];
          try {
            for (
              var h = f(this.views.values()), l = h.next();
              !l.done;
              l = h.next()
            )
              (s = l.value), (a = a.concat(s.applyOperation(t, e, n)));
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              l && !l.done && (i = h.return) && i.call(h);
            } finally {
              if (r) throw r.error;
            }
          }
          return a;
        }),
        (wr.prototype.addEventRegistration = function (t, e, n, r, i) {
          var o,
            s,
            a = t.queryIdentifier(),
            h = this.views.get(a);
          return (
            h ||
              ((s = !1),
              (s =
                !!(o = n.calcCompleteEventCache(i ? r : null)) ||
                ((o =
                  r instanceof en
                    ? n.calcCompleteEventChildren(r)
                    : en.EMPTY_NODE),
                !1)),
              (i = new er(new Zn(o, s, !1), new Zn(r, i, !1))),
              (h = new mr(t, i)),
              this.views.set(a, h)),
            h.addEventRegistration(e),
            h.getInitialEvents(e)
          );
        }),
        (wr.prototype.removeEventRegistration = function (t, e, n) {
          var r,
            i,
            o = t.queryIdentifier(),
            s = [],
            a = [],
            h = this.hasCompleteView();
          if ('default' === o)
            try {
              for (
                var l = f(this.views.entries()), u = l.next();
                !u.done;
                u = l.next()
              ) {
                var c = _(u.value, 2),
                  p = c[0],
                  d = c[1],
                  a = a.concat(d.removeEventRegistration(e, n));
                d.isEmpty() &&
                  (this.views.delete(p),
                  d.getQuery().getQueryParams().loadsAllData() ||
                    s.push(d.getQuery()));
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                u && !u.done && (i = l.return) && i.call(l);
              } finally {
                if (r) throw r.error;
              }
            }
          else
            (d = this.views.get(o)) &&
              ((a = a.concat(d.removeEventRegistration(e, n))),
              d.isEmpty() &&
                (this.views.delete(o),
                d.getQuery().getQueryParams().loadsAllData() ||
                  s.push(d.getQuery())));
          return (
            h &&
              !this.hasCompleteView() &&
              s.push(new wr.__referenceConstructor(t.repo, t.path)),
            { removed: s, events: a }
          );
        }),
        (wr.prototype.getQueryViews = function () {
          var e,
            t,
            n = [];
          try {
            for (
              var r = f(this.views.values()), i = r.next();
              !i.done;
              i = r.next()
            ) {
              var o = i.value;
              o.getQuery().getQueryParams().loadsAllData() || n.push(o);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (t = r.return) && t.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          return n;
        }),
        (wr.prototype.getCompleteServerCache = function (t) {
          var e,
            n,
            r = null;
          try {
            for (
              var i = f(this.views.values()), o = i.next();
              !o.done;
              o = i.next()
            )
              var s = o.value, r = r || s.getCompleteServerCache(t);
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
        }),
        (wr.prototype.viewForQuery = function (t) {
          if (t.getQueryParams().loadsAllData()) return this.getCompleteView();
          t = t.queryIdentifier();
          return this.views.get(t);
        }),
        (wr.prototype.viewExistsForQuery = function (t) {
          return null != this.viewForQuery(t);
        }),
        (wr.prototype.hasCompleteView = function () {
          return null != this.getCompleteView();
        }),
        (wr.prototype.getCompleteView = function () {
          var e, t;
          try {
            for (
              var n = f(this.views.values()), r = n.next();
              !r.done;
              r = n.next()
            ) {
              var i = r.value;
              if (i.getQuery().getQueryParams().loadsAllData()) return i;
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
          return null;
        }),
        wr);
      function wr() {
        this.views = new Map();
      }
      var br =
        ((Sr.prototype.addWrite = function (t, e) {
          if (t.isEmpty()) return new Sr(new Bn(e));
          var n = this.writeTree_.findRootMostValueAndPath(t);
          if (null != n) {
            var r = n.path,
              i = n.value,
              n = Mt.relativePath(r, t),
              i = i.updateChild(n, e);
            return new Sr(this.writeTree_.set(r, i));
          }
          e = new Bn(e);
          return new Sr(this.writeTree_.setTree(t, e));
        }),
        (Sr.prototype.addWrites = function (n, t) {
          var r = this;
          return (
            Ot(t, function (t, e) {
              r = r.addWrite(n.child(t), e);
            }),
            r
          );
        }),
        (Sr.prototype.removeWrite = function (t) {
          return t.isEmpty()
            ? Sr.Empty
            : new Sr(this.writeTree_.setTree(t, Bn.Empty));
        }),
        (Sr.prototype.hasCompleteWrite = function (t) {
          return null != this.getCompleteNode(t);
        }),
        (Sr.prototype.getCompleteNode = function (t) {
          var e = this.writeTree_.findRootMostValueAndPath(t);
          return null != e
            ? this.writeTree_.get(e.path).getChild(Mt.relativePath(e.path, t))
            : null;
        }),
        (Sr.prototype.getCompleteChildren = function () {
          var n = [],
            t = this.writeTree_.value;
          return (
            null != t
              ? t.isLeafNode() ||
                t.forEachChild(Fe, function (t, e) {
                  n.push(new ge(t, e));
                })
              : this.writeTree_.children.inorderTraversal(function (t, e) {
                  null != e.value && n.push(new ge(t, e.value));
                }),
            n
          );
        }),
        (Sr.prototype.childCompoundWrite = function (t) {
          if (t.isEmpty()) return this;
          var e = this.getCompleteNode(t);
          return new Sr(null != e ? new Bn(e) : this.writeTree_.subtree(t));
        }),
        (Sr.prototype.isEmpty = function () {
          return this.writeTree_.isEmpty();
        }),
        (Sr.prototype.apply = function (t) {
          return (function n(r, t, i) {
            {
              if (null != t.value) return i.updateChild(r, t.value);
              var o = null;
              return (
                t.children.inorderTraversal(function (t, e) {
                  '.priority' === t
                    ? (y(
                        null !== e.value,
                        'Priority writes must always be leaf nodes'
                      ),
                      (o = e.value))
                    : (i = n(r.child(t), e, i));
                }),
                i.getChild(r).isEmpty() ||
                  null === o ||
                  (i = i.updateChild(r.child('.priority'), o)),
                i
              );
            }
          })(Mt.Empty, this.writeTree_, t);
        }),
        (Sr.Empty = new Sr(new Bn(null))),
        Sr);
      function Sr(t) {
        this.writeTree_ = t;
      }
      var Tr =
        ((Ir.prototype.childWrites = function (t) {
          return new Nr(t, this);
        }),
        (Ir.prototype.addOverwrite = function (t, e, n, r) {
          y(
            n > this.lastWriteId_,
            'Stacking an older write on top of newer ones'
          ),
            void 0 === r && (r = !0),
            this.allWrites_.push({ path: t, snap: e, writeId: n, visible: r }),
            r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
            (this.lastWriteId_ = n);
        }),
        (Ir.prototype.addMerge = function (t, e, n) {
          y(
            n > this.lastWriteId_,
            'Stacking an older merge on top of newer ones'
          ),
            this.allWrites_.push({
              path: t,
              children: e,
              writeId: n,
              visible: !0
            }),
            (this.visibleWrites_ = this.visibleWrites_.addWrites(t, e)),
            (this.lastWriteId_ = n);
        }),
        (Ir.prototype.getWrite = function (t) {
          for (var e = 0; e < this.allWrites_.length; e++) {
            var n = this.allWrites_[e];
            if (n.writeId === t) return n;
          }
          return null;
        }),
        (Ir.prototype.removeWrite = function (e) {
          var n = this,
            t = this.allWrites_.findIndex(function (t) {
              return t.writeId === e;
            });
          y(0 <= t, 'removeWrite called with nonexistent writeId.');
          var r = this.allWrites_[t];
          this.allWrites_.splice(t, 1);
          for (
            var i = r.visible, o = !1, s = this.allWrites_.length - 1;
            i && 0 <= s;

          ) {
            var a = this.allWrites_[s];
            a.visible &&
              (t <= s && this.recordContainsPath_(a, r.path)
                ? (i = !1)
                : r.path.contains(a.path) && (o = !0)),
              s--;
          }
          return (
            !!i &&
            (o
              ? this.resetTree_()
              : r.snap
              ? (this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path))
              : Ot(r.children, function (t) {
                  n.visibleWrites_ = n.visibleWrites_.removeWrite(
                    r.path.child(t)
                  );
                }),
            !0)
          );
        }),
        (Ir.prototype.getCompleteWriteData = function (t) {
          return this.visibleWrites_.getCompleteNode(t);
        }),
        (Ir.prototype.calcCompleteEventCache = function (e, t, n, r) {
          if (n || r) {
            var i = this.visibleWrites_.childCompoundWrite(e);
            if (!r && i.isEmpty()) return t;
            if (r || null != t || i.hasCompleteWrite(Mt.Empty)) {
              var o = Ir.layerTree_(
                  this.allWrites_,
                  function (t) {
                    return (
                      (t.visible || r) &&
                      (!n || !~n.indexOf(t.writeId)) &&
                      (t.path.contains(e) || e.contains(t.path))
                    );
                  },
                  e
                ),
                s = t || en.EMPTY_NODE;
              return o.apply(s);
            }
            return null;
          }
          o = this.visibleWrites_.getCompleteNode(e);
          if (null != o) return o;
          o = this.visibleWrites_.childCompoundWrite(e);
          if (o.isEmpty()) return t;
          if (null != t || o.hasCompleteWrite(Mt.Empty)) {
            var s = t || en.EMPTY_NODE;
            return o.apply(s);
          }
          return null;
        }),
        (Ir.prototype.calcCompleteEventChildren = function (t, e) {
          var n = en.EMPTY_NODE,
            r = this.visibleWrites_.getCompleteNode(t);
          if (r)
            return (
              r.isLeafNode() ||
                r.forEachChild(Fe, function (t, e) {
                  n = n.updateImmediateChild(t, e);
                }),
              n
            );
          if (e) {
            var i = this.visibleWrites_.childCompoundWrite(t);
            return (
              e.forEachChild(Fe, function (t, e) {
                e = i.childCompoundWrite(new Mt(t)).apply(e);
                n = n.updateImmediateChild(t, e);
              }),
              i.getCompleteChildren().forEach(function (t) {
                n = n.updateImmediateChild(t.name, t.node);
              }),
              n
            );
          }
          return (
            this.visibleWrites_
              .childCompoundWrite(t)
              .getCompleteChildren()
              .forEach(function (t) {
                n = n.updateImmediateChild(t.name, t.node);
              }),
            n
          );
        }),
        (Ir.prototype.calcEventCacheAfterServerOverwrite = function (
          t,
          e,
          n,
          r
        ) {
          y(
            n || r,
            'Either existingEventSnap or existingServerSnap must exist'
          );
          t = t.child(e);
          if (this.visibleWrites_.hasCompleteWrite(t)) return null;
          t = this.visibleWrites_.childCompoundWrite(t);
          return t.isEmpty() ? r.getChild(e) : t.apply(r.getChild(e));
        }),
        (Ir.prototype.calcCompleteChild = function (t, e, n) {
          var r = t.child(e),
            t = this.visibleWrites_.getCompleteNode(r);
          return null != t
            ? t
            : n.isCompleteForChild(e)
            ? this.visibleWrites_
                .childCompoundWrite(r)
                .apply(n.getNode().getImmediateChild(e))
            : null;
        }),
        (Ir.prototype.shadowingWrite = function (t) {
          return this.visibleWrites_.getCompleteNode(t);
        }),
        (Ir.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
          var s,
            a = this.visibleWrites_.childCompoundWrite(t),
            t = a.getCompleteNode(Mt.Empty);
          if (null != t) s = t;
          else {
            if (null == e) return [];
            s = a.apply(e);
          }
          if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode()) return [];
          for (
            var h = [],
              l = o.getCompare(),
              u = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o),
              c = u.getNext();
            c && h.length < r;

          )
            0 !== l(c, n) && h.push(c), (c = u.getNext());
          return h;
        }),
        (Ir.prototype.recordContainsPath_ = function (t, e) {
          if (t.snap) return t.path.contains(e);
          for (var n in t.children)
            if (t.children.hasOwnProperty(n) && t.path.child(n).contains(e))
              return !0;
          return !1;
        }),
        (Ir.prototype.resetTree_ = function () {
          (this.visibleWrites_ = Ir.layerTree_(
            this.allWrites_,
            Ir.DefaultFilter_,
            Mt.Empty
          )),
            0 < this.allWrites_.length
              ? (this.lastWriteId_ = this.allWrites_[
                  this.allWrites_.length - 1
                ].writeId)
              : (this.lastWriteId_ = -1);
        }),
        (Ir.DefaultFilter_ = function (t) {
          return t.visible;
        }),
        (Ir.layerTree_ = function (t, e, n) {
          for (var r = br.Empty, i = 0; i < t.length; ++i) {
            var o = t[i];
            if (e(o)) {
              var s = o.path,
                a = void 0;
              if (o.snap)
                n.contains(s)
                  ? ((a = Mt.relativePath(n, s)), (r = r.addWrite(a, o.snap)))
                  : s.contains(n) &&
                    ((a = Mt.relativePath(s, n)),
                    (r = r.addWrite(Mt.Empty, o.snap.getChild(a))));
              else {
                if (!o.children)
                  throw c('WriteRecord should have .snap or .children');
                n.contains(s)
                  ? ((a = Mt.relativePath(n, s)),
                    (r = r.addWrites(a, o.children)))
                  : s.contains(n) &&
                    ((a = Mt.relativePath(s, n)).isEmpty()
                      ? (r = r.addWrites(Mt.Empty, o.children))
                      : (o = x(o.children, a.getFront())) &&
                        ((a = o.getChild(a.popFront())),
                        (r = r.addWrite(Mt.Empty, a))));
              }
            }
          }
          return r;
        }),
        Ir);
      function Ir() {
        (this.visibleWrites_ = br.Empty),
          (this.allWrites_ = []),
          (this.lastWriteId_ = -1);
      }
      var Nr =
        ((Rr.prototype.calcCompleteEventCache = function (t, e, n) {
          return this.writeTree_.calcCompleteEventCache(
            this.treePath_,
            t,
            e,
            n
          );
        }),
        (Rr.prototype.calcCompleteEventChildren = function (t) {
          return this.writeTree_.calcCompleteEventChildren(this.treePath_, t);
        }),
        (Rr.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n) {
          return this.writeTree_.calcEventCacheAfterServerOverwrite(
            this.treePath_,
            t,
            e,
            n
          );
        }),
        (Rr.prototype.shadowingWrite = function (t) {
          return this.writeTree_.shadowingWrite(this.treePath_.child(t));
        }),
        (Rr.prototype.calcIndexedSlice = function (t, e, n, r, i) {
          return this.writeTree_.calcIndexedSlice(
            this.treePath_,
            t,
            e,
            n,
            r,
            i
          );
        }),
        (Rr.prototype.calcCompleteChild = function (t, e) {
          return this.writeTree_.calcCompleteChild(this.treePath_, t, e);
        }),
        (Rr.prototype.child = function (t) {
          return new Rr(this.treePath_.child(t), this.writeTree_);
        }),
        Rr);
      function Rr(t, e) {
        (this.treePath_ = t), (this.writeTree_ = e);
      }
      var Pr =
        ((Dr.prototype.applyUserOverwrite = function (t, e, n, r) {
          return (
            this.pendingWriteTree_.addOverwrite(t, e, n, r),
            r ? this.applyOperationToSyncPoints_(new Gn(Qn.User, t, e)) : []
          );
        }),
        (Dr.prototype.applyUserMerge = function (t, e, n) {
          this.pendingWriteTree_.addMerge(t, e, n);
          e = Bn.fromObject(e);
          return this.applyOperationToSyncPoints_(new $n(Qn.User, t, e));
        }),
        (Dr.prototype.ackUserWrite = function (t, e) {
          void 0 === e && (e = !1);
          var n = this.pendingWriteTree_.getWrite(t);
          if (this.pendingWriteTree_.removeWrite(t)) {
            var r = Bn.Empty;
            return (
              null != n.snap
                ? (r = r.set(Mt.Empty, !0))
                : Ot(n.children, function (t, e) {
                    r = r.set(new Mt(t), e);
                  }),
              this.applyOperationToSyncPoints_(new Hn(n.path, r, e))
            );
          }
          return [];
        }),
        (Dr.prototype.applyServerOverwrite = function (t, e) {
          return this.applyOperationToSyncPoints_(new Gn(Qn.Server, t, e));
        }),
        (Dr.prototype.applyServerMerge = function (t, e) {
          e = Bn.fromObject(e);
          return this.applyOperationToSyncPoints_(new $n(Qn.Server, t, e));
        }),
        (Dr.prototype.applyListenComplete = function (t) {
          return this.applyOperationToSyncPoints_(new Kn(Qn.Server, t));
        }),
        (Dr.prototype.applyTaggedQueryOverwrite = function (t, e, n) {
          var r = this.queryKeyForTag_(n);
          if (null == r) return [];
          (n = Dr.parseQueryKey_(r)),
            (r = n.path),
            (n = n.queryId),
            (t = Mt.relativePath(r, t)),
            (e = new Gn(Qn.forServerTaggedQuery(n), t, e));
          return this.applyTaggedOperation_(r, e);
        }),
        (Dr.prototype.applyTaggedQueryMerge = function (t, e, n) {
          var r = this.queryKeyForTag_(n);
          if (r) {
            (n = Dr.parseQueryKey_(r)),
              (r = n.path),
              (n = n.queryId),
              (t = Mt.relativePath(r, t)),
              (e = Bn.fromObject(e)),
              (e = new $n(Qn.forServerTaggedQuery(n), t, e));
            return this.applyTaggedOperation_(r, e);
          }
          return [];
        }),
        (Dr.prototype.applyTaggedListenComplete = function (t, e) {
          var n = this.queryKeyForTag_(e);
          if (n) {
            (e = Dr.parseQueryKey_(n)),
              (n = e.path),
              (e = e.queryId),
              (t = Mt.relativePath(n, t)),
              (t = new Kn(Qn.forServerTaggedQuery(e), t));
            return this.applyTaggedOperation_(n, t);
          }
          return [];
        }),
        (Dr.prototype.addEventRegistration = function (t, e) {
          var n = t.path,
            r = null,
            i = !1;
          this.syncPointTree_.foreachOnPath(n, function (t, e) {
            t = Mt.relativePath(t, n);
            (r = r || e.getCompleteServerCache(t)),
              (i = i || e.hasCompleteView());
          });
          var o = this.syncPointTree_.get(n);
          o
            ? ((i = i || o.hasCompleteView()),
              (r = r || o.getCompleteServerCache(Mt.Empty)))
            : ((o = new Er()),
              (this.syncPointTree_ = this.syncPointTree_.set(n, o))),
            null != r
              ? (l = !0)
              : ((l = !1),
                (r = en.EMPTY_NODE),
                this.syncPointTree_.subtree(n).foreachChild(function (t, e) {
                  e = e.getCompleteServerCache(Mt.Empty);
                  e && (r = r.updateImmediateChild(t, e));
                }));
          var s,
            a = o.viewExistsForQuery(t);
          a ||
            t.getQueryParams().loadsAllData() ||
            ((h = Dr.makeQueryKey_(t)),
            y(
              !this.queryToTagMap.has(h),
              'View does not exist, but we have a tag'
            ),
            (s = Dr.getNextQueryTag_()),
            this.queryToTagMap.set(h, s),
            this.tagToQueryMap.set(s, h));
          var h = this.pendingWriteTree_.childWrites(n),
            l = o.addEventRegistration(t, e, h, r, l);
          return (
            a ||
              i ||
              ((o = o.viewForQuery(t)),
              (l = l.concat(this.setupListener_(t, o)))),
            l
          );
        }),
        (Dr.prototype.removeEventRegistration = function (t, e, n) {
          var r = this,
            i = t.path,
            o = this.syncPointTree_.get(i),
            s = [];
          if (
            o &&
            ('default' === t.queryIdentifier() || o.viewExistsForQuery(t))
          ) {
            var a = o.removeEventRegistration(t, e, n);
            o.isEmpty() &&
              (this.syncPointTree_ = this.syncPointTree_.remove(i));
            (e = a.removed),
              (s = a.events),
              (o =
                -1 !==
                e.findIndex(function (t) {
                  return t.getQueryParams().loadsAllData();
                })),
              (a = this.syncPointTree_.findOnPath(i, function (t, e) {
                return e.hasCompleteView();
              }));
            if (o && !a) {
              i = this.syncPointTree_.subtree(i);
              if (!i.isEmpty())
                for (
                  var h = this.collectDistinctViewsForSubTree_(i), l = 0;
                  l < h.length;
                  ++l
                ) {
                  var u = h[l],
                    c = u.getQuery(),
                    u = this.createListenerForView_(u);
                  this.listenProvider_.startListening(
                    Dr.queryForListening_(c),
                    this.tagForQuery_(c),
                    u.hashFn,
                    u.onComplete
                  );
                }
            }
            !a &&
              0 < e.length &&
              !n &&
              (o
                ? this.listenProvider_.stopListening(
                    Dr.queryForListening_(t),
                    null
                  )
                : e.forEach(function (t) {
                    var e = r.queryToTagMap.get(Dr.makeQueryKey_(t));
                    r.listenProvider_.stopListening(
                      Dr.queryForListening_(t),
                      e
                    );
                  })),
              this.removeTags_(e);
          }
          return s;
        }),
        (Dr.prototype.calcCompleteEventCache = function (n, t) {
          var e = this.pendingWriteTree_,
            r = this.syncPointTree_.findOnPath(n, function (t, e) {
              (t = Mt.relativePath(t, n)), (t = e.getCompleteServerCache(t));
              if (t) return t;
            });
          return e.calcCompleteEventCache(n, r, t, !0);
        }),
        (Dr.prototype.collectDistinctViewsForSubTree_ = function (t) {
          return t.fold(function (t, e, n) {
            if (e && e.hasCompleteView()) return [e.getCompleteView()];
            var r = [];
            return (
              e && (r = e.getQueryViews()),
              Ot(n, function (t, e) {
                r = r.concat(e);
              }),
              r
            );
          });
        }),
        (Dr.prototype.removeTags_ = function (t) {
          for (var e = 0; e < t.length; ++e) {
            var n,
              r = t[e];
            r.getQueryParams().loadsAllData() ||
              ((n = Dr.makeQueryKey_(r)),
              (r = this.queryToTagMap.get(n)),
              this.queryToTagMap.delete(n),
              this.tagToQueryMap.delete(r));
          }
        }),
        (Dr.queryForListening_ = function (t) {
          return t.getQueryParams().loadsAllData() &&
            !t.getQueryParams().isDefault()
            ? t.getRef()
            : t;
        }),
        (Dr.prototype.setupListener_ = function (t, e) {
          var n = t.path,
            r = this.tagForQuery_(t),
            e = this.createListenerForView_(e),
            e = this.listenProvider_.startListening(
              Dr.queryForListening_(t),
              r,
              e.hashFn,
              e.onComplete
            ),
            n = this.syncPointTree_.subtree(n);
          if (r)
            y(
              !n.value.hasCompleteView(),
              "If we're adding a query, it shouldn't be shadowed"
            );
          else
            for (
              var i = n.fold(function (t, e, n) {
                  if (!t.isEmpty() && e && e.hasCompleteView())
                    return [e.getCompleteView().getQuery()];
                  var r = [];
                  return (
                    e &&
                      (r = r.concat(
                        e.getQueryViews().map(function (t) {
                          return t.getQuery();
                        })
                      )),
                    Ot(n, function (t, e) {
                      r = r.concat(e);
                    }),
                    r
                  );
                }),
                o = 0;
              o < i.length;
              ++o
            ) {
              var s = i[o];
              this.listenProvider_.stopListening(
                Dr.queryForListening_(s),
                this.tagForQuery_(s)
              );
            }
          return e;
        }),
        (Dr.prototype.createListenerForView_ = function (t) {
          var e = this,
            n = t.getQuery(),
            r = this.tagForQuery_(n);
          return {
            hashFn: function () {
              return (t.getServerCache() || en.EMPTY_NODE).hash();
            },
            onComplete: function (t) {
              if ('ok' === t)
                return r
                  ? e.applyTaggedListenComplete(n.path, r)
                  : e.applyListenComplete(n.path);
              t = (function (t, e) {
                var n = 'Unknown Error';
                'too_big' === t
                  ? (n =
                      'The data requested exceeds the maximum size that can be accessed with a single request.')
                  : 'permission_denied' === t
                  ? (n =
                      "Client doesn't have permission to access the desired data.")
                  : 'unavailable' === t && (n = 'The service is unavailable');
                n = new Error(t + ' at ' + e.path.toString() + ': ' + n);
                return (n.code = t.toUpperCase()), n;
              })(t, n);
              return e.removeEventRegistration(n, null, t);
            }
          };
        }),
        (Dr.makeQueryKey_ = function (t) {
          return t.path.toString() + '$' + t.queryIdentifier();
        }),
        (Dr.parseQueryKey_ = function (t) {
          var e = t.indexOf('$');
          return (
            y(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
            { queryId: t.substr(e + 1), path: new Mt(t.substr(0, e)) }
          );
        }),
        (Dr.prototype.queryKeyForTag_ = function (t) {
          return this.tagToQueryMap.get(t);
        }),
        (Dr.prototype.tagForQuery_ = function (t) {
          t = Dr.makeQueryKey_(t);
          return this.queryToTagMap.get(t);
        }),
        (Dr.getNextQueryTag_ = function () {
          return Dr.nextQueryTag_++;
        }),
        (Dr.prototype.applyTaggedOperation_ = function (t, e) {
          var n = this.syncPointTree_.get(t);
          y(n, "Missing sync point for query tag that we're tracking");
          t = this.pendingWriteTree_.childWrites(t);
          return n.applyOperation(e, t, null);
        }),
        (Dr.prototype.applyOperationToSyncPoints_ = function (t) {
          return this.applyOperationHelper_(
            t,
            this.syncPointTree_,
            null,
            this.pendingWriteTree_.childWrites(Mt.Empty)
          );
        }),
        (Dr.prototype.applyOperationHelper_ = function (t, e, n, r) {
          if (t.path.isEmpty())
            return this.applyOperationDescendantsHelper_(t, e, n, r);
          var i = e.get(Mt.Empty);
          null == n && null != i && (n = i.getCompleteServerCache(Mt.Empty));
          var o = [],
            s = t.path.getFront(),
            a = t.operationForChild(s),
            h = e.children.get(s);
          return (
            h &&
              a &&
              ((e = n ? n.getImmediateChild(s) : null),
              (s = r.child(s)),
              (o = o.concat(this.applyOperationHelper_(a, h, e, s)))),
            i && (o = o.concat(i.applyOperation(t, r, n))),
            o
          );
        }),
        (Dr.prototype.applyOperationDescendantsHelper_ = function (i, t, o, s) {
          var a = this,
            e = t.get(Mt.Empty);
          null == o && null != e && (o = e.getCompleteServerCache(Mt.Empty));
          var h = [];
          return (
            t.children.inorderTraversal(function (t, e) {
              var n = o ? o.getImmediateChild(t) : null,
                r = s.child(t),
                t = i.operationForChild(t);
              t &&
                (h = h.concat(a.applyOperationDescendantsHelper_(t, e, n, r)));
            }),
            e && (h = h.concat(e.applyOperation(i, s, o))),
            h
          );
        }),
        (Dr.nextQueryTag_ = 1),
        Dr);
      function Dr(t) {
        (this.listenProvider_ = t),
          (this.syncPointTree_ = Bn.Empty),
          (this.pendingWriteTree_ = new Tr()),
          (this.tagToQueryMap = new Map()),
          (this.queryToTagMap = new Map());
      }
      var Or =
        ((xr.prototype.getNode = function (t) {
          return this.rootNode_.getChild(t);
        }),
        (xr.prototype.updateSnapshot = function (t, e) {
          this.rootNode_ = this.rootNode_.updateChild(t, e);
        }),
        xr);
      function xr() {
        this.rootNode_ = en.EMPTY_NODE;
      }
      var kr =
        ((Ar.prototype.incrementCounter = function (t, e) {
          void 0 === e && (e = 1),
            O(this.counters_, t) || (this.counters_[t] = 0),
            (this.counters_[t] += e);
        }),
        (Ar.prototype.get = function () {
          return d(this.counters_);
        }),
        Ar);
      function Ar() {
        this.counters_ = {};
      }
      var Fr =
        ((Lr.getCollection = function (t) {
          t = t.toString();
          return (
            this.collections_[t] || (this.collections_[t] = new kr()),
            this.collections_[t]
          );
        }),
        (Lr.getOrCreateReporter = function (t, e) {
          t = t.toString();
          return (
            this.reporters_[t] || (this.reporters_[t] = e()), this.reporters_[t]
          );
        }),
        (Lr.collections_ = {}),
        (Lr.reporters_ = {}),
        Lr);
      function Lr() {}
      var Mr =
        ((Wr.prototype.get = function () {
          var t = this.collection_.get(),
            n = l({}, t);
          return (
            this.last_ &&
              Ot(this.last_, function (t, e) {
                n[t] = n[t] - e;
              }),
            (this.last_ = t),
            n
          );
        }),
        Wr);
      function Wr(t) {
        (this.collection_ = t), (this.last_ = null);
      }
      var qr =
        ((Qr.prototype.includeStat = function (t) {
          this.statsToReport_[t] = !0;
        }),
        (Qr.prototype.reportStats_ = function () {
          var n = this,
            t = this.statsListener_.get(),
            r = {},
            i = !1;
          Ot(t, function (t, e) {
            0 < e && O(n.statsToReport_, t) && ((r[t] = e), (i = !0));
          }),
            i && this.server_.reportStats(r),
            At(
              this.reportStats_.bind(this),
              Math.floor(2 * Math.random() * 3e5)
            );
        }),
        Qr);
      function Qr(t, e) {
        (this.server_ = e),
          (this.statsToReport_ = {}),
          (this.statsListener_ = new Mr(t));
        t = 1e4 + 2e4 * Math.random();
        At(this.reportStats_.bind(this), Math.floor(t));
      }
      var Ur =
        ((Vr.prototype.queueEvents = function (t) {
          for (var e = null, n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.getPath();
            null === e ||
              i.equals(e.getPath()) ||
              (this.eventLists_.push(e), (e = null)),
              null === e && (e = new Hr(i)),
              e.add(r);
          }
          e && this.eventLists_.push(e);
        }),
        (Vr.prototype.raiseEventsAtPath = function (e, t) {
          this.queueEvents(t),
            this.raiseQueuedEventsMatchingPredicate_(function (t) {
              return t.equals(e);
            });
        }),
        (Vr.prototype.raiseEventsForChangedPath = function (e, t) {
          this.queueEvents(t),
            this.raiseQueuedEventsMatchingPredicate_(function (t) {
              return t.contains(e) || e.contains(t);
            });
        }),
        (Vr.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
          this.recursionDepth_++;
          for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
            var r = this.eventLists_[n];
            r &&
              (t(r.getPath())
                ? (this.eventLists_[n].raise(), (this.eventLists_[n] = null))
                : (e = !1));
          }
          e && (this.eventLists_ = []), this.recursionDepth_--;
        }),
        Vr);
      function Vr() {
        (this.eventLists_ = []), (this.recursionDepth_ = 0);
      }
      var Hr =
        ((jr.prototype.add = function (t) {
          this.events_.push(t);
        }),
        (jr.prototype.raise = function () {
          for (var t = 0; t < this.events_.length; t++) {
            var e,
              n = this.events_[t];
            null !== n &&
              ((this.events_[t] = null),
              (e = n.getEventRunner()),
              bt && Tt('event: ' + n.toString()),
              kt(e));
          }
        }),
        (jr.prototype.getPath = function () {
          return this.path_;
        }),
        jr);
      function jr(t) {
        (this.path_ = t), (this.events_ = []);
      }
      (Br.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        if (Array.isArray(this.listeners_[t]))
          for (var r = s(this.listeners_[t]), i = 0; i < r.length; i++)
            r[i].callback.apply(r[i].context, e);
      }),
        (Br.prototype.on = function (t, e, n) {
          this.validateEventType_(t),
            (this.listeners_[t] = this.listeners_[t] || []),
            this.listeners_[t].push({ callback: e, context: n });
          t = this.getInitialEvent(t);
          t && e.apply(n, t);
        }),
        (Br.prototype.off = function (t, e, n) {
          this.validateEventType_(t);
          for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
            if (r[i].callback === e && (!n || n === r[i].context))
              return void r.splice(i, 1);
        }),
        (Br.prototype.validateEventType_ = function (e) {
          y(
            this.allowedEvents_.find(function (t) {
              return t === e;
            }),
            'Unknown event: ' + e
          );
        }),
        (Ce = Br);
      function Br(t) {
        (this.allowedEvents_ = t),
          (this.listeners_ = {}),
          y(Array.isArray(t) && 0 < t.length, 'Requires a non-empty array');
      }
      var zr,
        Kr =
          (n(Yr, (zr = Ce)),
          (Yr.getInstance = function () {
            return new Yr();
          }),
          (Yr.prototype.getInitialEvent = function (t) {
            return (
              y('visible' === t, 'Unknown event type: ' + t), [this.visible_]
            );
          }),
          Yr);
      function Yr() {
        var e,
          t,
          n = zr.call(this, ['visible']) || this;
        return (
          'undefined' != typeof document &&
            void 0 !== document.addEventListener &&
            (void 0 !== document.hidden
              ? ((t = 'visibilitychange'), (e = 'hidden'))
              : void 0 !== document.mozHidden
              ? ((t = 'mozvisibilitychange'), (e = 'mozHidden'))
              : void 0 !== document.msHidden
              ? ((t = 'msvisibilitychange'), (e = 'msHidden'))
              : void 0 !== document.webkitHidden &&
                ((t = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
          (n.visible_ = !0),
          t &&
            document.addEventListener(
              t,
              function () {
                var t = !document[e];
                t !== n.visible_ && ((n.visible_ = t), n.trigger('visible', t));
              },
              !1
            ),
          n
        );
      }
      var Gr,
        Xr =
          (n($r, (Gr = Ce)),
          ($r.getInstance = function () {
            return new $r();
          }),
          ($r.prototype.getInitialEvent = function (t) {
            return (
              y('online' === t, 'Unknown event type: ' + t), [this.online_]
            );
          }),
          ($r.prototype.currentlyOnline = function () {
            return this.online_;
          }),
          $r);
      function $r() {
        var t = Gr.call(this, ['online']) || this;
        return (
          (t.online_ = !0),
          'undefined' == typeof window ||
            void 0 === window.addEventListener ||
            m() ||
            (window.addEventListener(
              'online',
              function () {
                t.online_ || ((t.online_ = !0), t.trigger('online', !0));
              },
              !1
            ),
            window.addEventListener(
              'offline',
              function () {
                t.online_ && ((t.online_ = !1), t.trigger('online', !1));
              },
              !1
            )),
          t
        );
      }
      var Jr =
        ((Zr.prototype.closeAfter = function (t, e) {
          (this.closeAfterResponse = t),
            (this.onClose = e),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null));
        }),
        (Zr.prototype.handleResponse = function (t, e) {
          var n = this;
          this.pendingResponses[t] = e;
          for (var r = this; this.pendingResponses[this.currentResponseNum]; ) {
            if (
              'break' ===
              (function () {
                var e = r.pendingResponses[r.currentResponseNum];
                delete r.pendingResponses[r.currentResponseNum];
                for (var t = 0; t < e.length; ++t)
                  !(function (t) {
                    e[t] &&
                      kt(function () {
                        n.onMessage_(e[t]);
                      });
                  })(t);
                if (r.currentResponseNum === r.closeAfterResponse)
                  return (
                    r.onClose && (r.onClose(), (r.onClose = null)), 'break'
                  );
                r.currentResponseNum++;
              })()
            )
              break;
          }
        }),
        Zr);
      function Zr(t) {
        (this.onMessage_ = t),
          (this.pendingResponses = []),
          (this.currentResponseNum = 0),
          (this.closeAfterResponse = -1),
          (this.onClose = null);
      }
      var ti = 'pLPCommand',
        ei = 'pRTLPCB',
        ni =
          ((ri.prototype.open = function (t, e) {
            var n,
              r,
              i,
              s = this;
            (this.curSegmentNum = 0),
              (this.onDisconnect_ = e),
              (this.myPacketOrderer = new Jr(t)),
              (this.isClosed_ = !1),
              (this.connectTimeoutTimer_ = setTimeout(function () {
                s.log_('Timed out trying to connect.'),
                  s.onClosed_(),
                  (s.connectTimeoutTimer_ = null);
              }, Math.floor(3e4))),
              (n = function () {
                var t;
                s.isClosed_ ||
                  ((s.scriptTagHolder = new ii(
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = _(t, 5),
                        r = n[0],
                        i = n[1],
                        o = n[2];
                      n[3], n[4];
                      if ((s.incrementIncomingBytes_(t), s.scriptTagHolder))
                        if (
                          (s.connectTimeoutTimer_ &&
                            (clearTimeout(s.connectTimeoutTimer_),
                            (s.connectTimeoutTimer_ = null)),
                          (s.everConnected_ = !0),
                          'start' === r)
                        )
                          (s.id = i), (s.password = o);
                        else {
                          if ('close' !== r)
                            throw new Error(
                              'Unrecognized command received: ' + r
                            );
                          i
                            ? ((s.scriptTagHolder.sendNewPolls = !1),
                              s.myPacketOrderer.closeAfter(i, function () {
                                s.onClosed_();
                              }))
                            : s.onClosed_();
                        }
                    },
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = _(t, 2),
                        r = n[0],
                        n = n[1];
                      s.incrementIncomingBytes_(t),
                        s.myPacketOrderer.handleResponse(r, n);
                    },
                    function () {
                      s.onClosed_();
                    },
                    s.urlFn
                  )),
                  ((t = { start: 't' }).ser = Math.floor(1e8 * Math.random())),
                  s.scriptTagHolder.uniqueCallbackIdentifier &&
                    (t.cb = s.scriptTagHolder.uniqueCallbackIdentifier),
                  (t.v = '5'),
                  s.transportSessionId && (t.s = s.transportSessionId),
                  s.lastSessionId && (t.ls = s.lastSessionId),
                  s.applicationId && (t.p = s.applicationId),
                  'undefined' != typeof location &&
                    location.href &&
                    -1 !== location.href.indexOf(Ut) &&
                    (t.r = 'f'),
                  (t = s.urlFn(t)),
                  s.log_('Connecting via long-poll to ' + t),
                  s.scriptTagHolder.addTag(t, function () {}));
              }),
              'complete' === document.readyState
                ? n()
                : ((r = !1),
                  (i = function () {
                    document.body
                      ? r || ((r = !0), n())
                      : setTimeout(i, Math.floor(10));
                  }),
                  document.addEventListener
                    ? (document.addEventListener('DOMContentLoaded', i, !1),
                      window.addEventListener('load', i, !1))
                    : document.attachEvent &&
                      (document.attachEvent('onreadystatechange', function () {
                        'complete' === document.readyState && i();
                      }),
                      window.attachEvent('onload', i)));
          }),
          (ri.prototype.start = function () {
            this.scriptTagHolder.startLongPoll(this.id, this.password),
              this.addDisconnectPingFrame(this.id, this.password);
          }),
          (ri.forceAllow = function () {
            ri.forceAllow_ = !0;
          }),
          (ri.forceDisallow = function () {
            ri.forceDisallow_ = !0;
          }),
          (ri.isAvailable = function () {
            return (
              !!ri.forceAllow_ ||
              !(
                ri.forceDisallow_ ||
                'undefined' == typeof document ||
                null == document.createElement ||
                ('object' == typeof window &&
                  window.chrome &&
                  window.chrome.extension &&
                  !/^chrome/.test(window.location.href)) ||
                ('object' == typeof Windows && 'object' == typeof Windows.UI)
              )
            );
          }),
          (ri.prototype.markConnectionHealthy = function () {}),
          (ri.prototype.shutdown_ = function () {
            (this.isClosed_ = !0),
              this.scriptTagHolder &&
                (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
              this.myDisconnFrame &&
                (document.body.removeChild(this.myDisconnFrame),
                (this.myDisconnFrame = null)),
              this.connectTimeoutTimer_ &&
                (clearTimeout(this.connectTimeoutTimer_),
                (this.connectTimeoutTimer_ = null));
          }),
          (ri.prototype.onClosed_ = function () {
            this.isClosed_ ||
              (this.log_('Longpoll is closing itself'),
              this.shutdown_(),
              this.onDisconnect_ &&
                (this.onDisconnect_(this.everConnected_),
                (this.onDisconnect_ = null)));
          }),
          (ri.prototype.close = function () {
            this.isClosed_ ||
              (this.log_('Longpoll is being closed.'), this.shutdown_());
          }),
          (ri.prototype.send = function (t) {
            t = P(t);
            (this.bytesSent += t.length),
              this.stats_.incrementCounter('bytes_sent', t.length);
            for (
              var t = (function (t) {
                  t = a(t);
                  return p.encodeByteArray(t, !0);
                })(t),
                e = _t(t, 1840),
                n = 0;
              n < e.length;
              n++
            )
              this.scriptTagHolder.enqueueSegment(
                this.curSegmentNum,
                e.length,
                e[n]
              ),
                this.curSegmentNum++;
          }),
          (ri.prototype.addDisconnectPingFrame = function (t, e) {
            this.myDisconnFrame = document.createElement('iframe');
            var n = { dframe: 't' };
            (n.id = t),
              (n.pw = e),
              (this.myDisconnFrame.src = this.urlFn(n)),
              (this.myDisconnFrame.style.display = 'none'),
              document.body.appendChild(this.myDisconnFrame);
          }),
          (ri.prototype.incrementIncomingBytes_ = function (t) {
            t = P(t).length;
            (this.bytesReceived += t),
              this.stats_.incrementCounter('bytes_received', t);
          }),
          ri);
      function ri(t, e, n, r, i) {
        (this.connId = t),
          (this.repoInfo = e),
          (this.applicationId = n),
          (this.transportSessionId = r),
          (this.lastSessionId = i),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.everConnected_ = !1),
          (this.log_ = It(t)),
          (this.stats_ = Fr.getCollection(e)),
          (this.urlFn = function (t) {
            return e.connectionURL(Ht, t);
          });
      }
      var ii =
        ((oi.createIFrame_ = function () {
          var e = document.createElement('iframe');
          if (((e.style.display = 'none'), !document.body))
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
          document.body.appendChild(e);
          try {
            e.contentWindow.document || Tt('No IE domain setting required');
          } catch (t) {
            var n = document.domain;
            e.src =
              "javascript:void((function(){document.open();document.domain='" +
              n +
              "';document.close();})())";
          }
          return (
            e.contentDocument
              ? (e.doc = e.contentDocument)
              : e.contentWindow
              ? (e.doc = e.contentWindow.document)
              : e.document && (e.doc = e.document),
            e
          );
        }),
        (oi.prototype.close = function () {
          var t = this;
          (this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.innerHTML = ''),
              setTimeout(function () {
                null !== t.myIFrame &&
                  (document.body.removeChild(t.myIFrame), (t.myIFrame = null));
              }, Math.floor(0)));
          var e = this.onDisconnect;
          e && ((this.onDisconnect = null), e());
        }),
        (oi.prototype.startLongPoll = function (t, e) {
          for (
            this.myID = t, this.myPW = e, this.alive = !0;
            this.newRequest_();

          );
        }),
        (oi.prototype.newRequest_ = function () {
          if (
            this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.size <
              (0 < this.pendingSegs.length ? 2 : 1)
          ) {
            this.currentSerial++;
            var t = {};
            (t.id = this.myID),
              (t.pw = this.myPW),
              (t.ser = this.currentSerial);
            for (
              var t = this.urlFn(t), e = '', n = 0;
              0 < this.pendingSegs.length;

            ) {
              if (!(this.pendingSegs[0].d.length + 30 + e.length <= 1870))
                break;
              var r = this.pendingSegs.shift(),
                e =
                  e +
                  '&seg' +
                  n +
                  '=' +
                  r.seg +
                  '&ts' +
                  n +
                  '=' +
                  r.ts +
                  '&d' +
                  n +
                  '=' +
                  r.d;
              n++;
            }
            return (t += e), this.addLongPollTag_(t, this.currentSerial), !0;
          }
          return !1;
        }),
        (oi.prototype.enqueueSegment = function (t, e, n) {
          this.pendingSegs.push({ seg: t, ts: e, d: n }),
            this.alive && this.newRequest_();
        }),
        (oi.prototype.addLongPollTag_ = function (t, e) {
          var n = this;
          this.outstandingRequests.add(e);
          function r() {
            n.outstandingRequests.delete(e), n.newRequest_();
          }
          var i = setTimeout(r, Math.floor(25e3));
          this.addTag(t, function () {
            clearTimeout(i), r();
          });
        }),
        (oi.prototype.addTag = function (t, n) {
          var r = this;
          setTimeout(function () {
            try {
              if (!r.sendNewPolls) return;
              var e = r.myIFrame.doc.createElement('script');
              (e.type = 'text/javascript'),
                (e.async = !0),
                (e.src = t),
                (e.onload = e.onreadystatechange = function () {
                  var t = e.readyState;
                  (t && 'loaded' !== t && 'complete' !== t) ||
                    ((e.onload = e.onreadystatechange = null),
                    e.parentNode && e.parentNode.removeChild(e),
                    n());
                }),
                (e.onerror = function () {
                  Tt('Long-poll script failed to load: ' + t),
                    (r.sendNewPolls = !1),
                    r.close();
                }),
                r.myIFrame.doc.body.appendChild(e);
            } catch (t) {}
          }, Math.floor(1));
        }),
        oi);
      function oi(t, e, n, r) {
        (this.onDisconnect = n),
          (this.urlFn = r),
          (this.outstandingRequests = new Set()),
          (this.pendingSegs = []),
          (this.currentSerial = Math.floor(1e8 * Math.random())),
          (this.sendNewPolls = !0),
          (this.uniqueCallbackIdentifier = Et()),
          (window[ti + this.uniqueCallbackIdentifier] = t),
          (window[ei + this.uniqueCallbackIdentifier] = e),
          (this.myIFrame = oi.createIFrame_());
        e = '';
        this.myIFrame.src &&
          'javascript:' === this.myIFrame.src.substr(0, 'javascript:'.length) &&
          (e = '<script>document.domain="' + document.domain + '";</script>');
        var i = '<html><body>' + e + '</body></html>';
        try {
          this.myIFrame.doc.open(),
            this.myIFrame.doc.write(i),
            this.myIFrame.doc.close();
        } catch (t) {
          Tt('frame writing exception'), t.stack && Tt(t.stack), Tt(t);
        }
      }
      var si = '';
      function ai(t) {
        si = t;
      }
      var hi = null;
      'undefined' != typeof MozWebSocket
        ? (hi = MozWebSocket)
        : 'undefined' != typeof WebSocket && (hi = WebSocket);
      var li =
        ((ui.connectionURL_ = function (t, e, n) {
          var r = { v: '5' };
          return (
            'undefined' != typeof location &&
              location.href &&
              -1 !== location.href.indexOf(Ut) &&
              (r.r = 'f'),
            e && (r.s = e),
            n && (r.ls = n),
            t.connectionURL(Vt, r)
          );
        }),
        (ui.prototype.open = function (e, t) {
          var n,
            r = this;
          (this.onDisconnect = t),
            (this.onMessage = e),
            this.log_('Websocket connecting to ' + this.connURL),
            (this.everConnected_ = !1),
            vt.set('previous_websocket_failure', !0);
          try {
            C() ||
              ((n = {
                headers: { 'X-Firebase-GMPID': this.applicationId || '' }
              }),
              (this.mySock = new hi(this.connURL, [], n)));
          } catch (t) {
            this.log_('Error instantiating WebSocket.');
            e = t.message || t.data;
            return e && this.log_(e), void this.onClosed_();
          }
          (this.mySock.onopen = function () {
            r.log_('Websocket connected.'), (r.everConnected_ = !0);
          }),
            (this.mySock.onclose = function () {
              r.log_('Websocket connection was disconnected.'),
                (r.mySock = null),
                r.onClosed_();
            }),
            (this.mySock.onmessage = function (t) {
              r.handleIncomingFrame(t);
            }),
            (this.mySock.onerror = function (t) {
              r.log_('WebSocket error.  Closing connection.');
              t = t.message || t.data;
              t && r.log_(t), r.onClosed_();
            });
        }),
        (ui.prototype.start = function () {}),
        (ui.forceDisallow = function () {
          ui.forceDisallow_ = !0;
        }),
        (ui.isAvailable = function () {
          var t,
            e = !1;
          return (
            'undefined' != typeof navigator &&
              navigator.userAgent &&
              (t = navigator.userAgent.match(
                /Android ([0-9]{0,}\.[0-9]{0,})/
              )) &&
              1 < t.length &&
              parseFloat(t[1]) < 4.4 &&
              (e = !0),
            !e && null !== hi && !ui.forceDisallow_
          );
        }),
        (ui.previouslyFailed = function () {
          return (
            vt.isInMemoryStorage || !0 === vt.get('previous_websocket_failure')
          );
        }),
        (ui.prototype.markConnectionHealthy = function () {
          vt.remove('previous_websocket_failure');
        }),
        (ui.prototype.appendFrame_ = function (t) {
          this.frames.push(t),
            this.frames.length === this.totalFrames &&
              ((t = this.frames.join('')),
              (this.frames = null),
              (t = R(t)),
              this.onMessage(t));
        }),
        (ui.prototype.handleNewFrameCount_ = function (t) {
          (this.totalFrames = t), (this.frames = []);
        }),
        (ui.prototype.extractFrameCount_ = function (t) {
          if (
            (y(null === this.frames, 'We already have a frame buffer'),
            t.length <= 6)
          ) {
            var e = Number(t);
            if (!isNaN(e)) return this.handleNewFrameCount_(e), null;
          }
          return this.handleNewFrameCount_(1), t;
        }),
        (ui.prototype.handleIncomingFrame = function (t) {
          null !== this.mySock &&
            ((t = t.data),
            (this.bytesReceived += t.length),
            this.stats_.incrementCounter('bytes_received', t.length),
            this.resetKeepAlive(),
            null !== this.frames
              ? this.appendFrame_(t)
              : null !== (t = this.extractFrameCount_(t)) &&
                this.appendFrame_(t));
        }),
        (ui.prototype.send = function (t) {
          this.resetKeepAlive();
          t = P(t);
          (this.bytesSent += t.length),
            this.stats_.incrementCounter('bytes_sent', t.length);
          var e = _t(t, 16384);
          1 < e.length && this.sendString_(String(e.length));
          for (var n = 0; n < e.length; n++) this.sendString_(e[n]);
        }),
        (ui.prototype.shutdown_ = function () {
          (this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null));
        }),
        (ui.prototype.onClosed_ = function () {
          this.isClosed_ ||
            (this.log_('WebSocket is closing itself'),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)));
        }),
        (ui.prototype.close = function () {
          this.isClosed_ ||
            (this.log_('WebSocket is being closed'), this.shutdown_());
        }),
        (ui.prototype.resetKeepAlive = function () {
          var t = this;
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(function () {
              t.mySock && t.sendString_('0'), t.resetKeepAlive();
            }, Math.floor(45e3)));
        }),
        (ui.prototype.sendString_ = function (t) {
          try {
            this.mySock.send(t);
          } catch (t) {
            this.log_(
              'Exception thrown from WebSocket.send():',
              t.message || t.data,
              'Closing connection.'
            ),
              setTimeout(this.onClosed_.bind(this), 0);
          }
        }),
        (ui.responsesRequiredToBeHealthy = 2),
        (ui.healthyTimeout = 3e4),
        ui);
      function ui(t, e, n, r, i) {
        (this.connId = t),
          (this.applicationId = n),
          (this.keepaliveTimer = null),
          (this.frames = null),
          (this.totalFrames = 0),
          (this.bytesSent = 0),
          (this.bytesReceived = 0),
          (this.log_ = It(this.connId)),
          (this.stats_ = Fr.getCollection(e)),
          (this.connURL = ui.connectionURL_(e, r, i)),
          (this.nodeAdmin = e.nodeAdmin);
      }
      var ci =
        (Object.defineProperty(pi, 'ALL_TRANSPORTS', {
          get: function () {
            return [ni, li];
          },
          enumerable: !1,
          configurable: !0
        }),
        (pi.prototype.initTransports_ = function (t) {
          var e,
            n,
            r = li && li.isAvailable(),
            i = r && !li.previouslyFailed();
          if (
            (t.webSocketOnly &&
              (r ||
                ct(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (i = !0)),
            i)
          )
            this.transports_ = [li];
          else {
            var o = (this.transports_ = []);
            try {
              for (
                var s = f(pi.ALL_TRANSPORTS), a = s.next();
                !a.done;
                a = s.next()
              ) {
                var h = a.value;
                h && h.isAvailable() && o.push(h);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (n = s.return) && n.call(s);
              } finally {
                if (e) throw e.error;
              }
            }
          }
        }),
        (pi.prototype.initialTransport = function () {
          if (0 < this.transports_.length) return this.transports_[0];
          throw new Error('No transports available');
        }),
        (pi.prototype.upgradeTransport = function () {
          return 1 < this.transports_.length ? this.transports_[1] : null;
        }),
        pi);
      function pi(t) {
        this.initTransports_(t);
      }
      var di =
        ((fi.prototype.start_ = function () {
          var t = this,
            e = this.transportManager_.initialTransport();
          (this.conn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            void 0,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
          (this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(function () {
              t.conn_ && t.conn_.open(n, r);
            }, Math.floor(0));
          e = e.healthyTimeout || 0;
          0 < e &&
            (this.healthyTimeout_ = At(function () {
              (t.healthyTimeout_ = null),
                t.isHealthy_ ||
                  (t.conn_ && 102400 < t.conn_.bytesReceived
                    ? (t.log_(
                        'Connection exceeded healthy timeout but has received ' +
                          t.conn_.bytesReceived +
                          ' bytes.  Marking connection healthy.'
                      ),
                      (t.isHealthy_ = !0),
                      t.conn_.markConnectionHealthy())
                    : t.conn_ && 10240 < t.conn_.bytesSent
                    ? t.log_(
                        'Connection exceeded healthy timeout but has sent ' +
                          t.conn_.bytesSent +
                          ' bytes.  Leaving connection alive.'
                      )
                    : (t.log_('Closing unhealthy connection after timeout.'),
                      t.close()));
            }, Math.floor(e)));
        }),
        (fi.prototype.nextTransportId_ = function () {
          return 'c:' + this.id + ':' + this.connectionCount++;
        }),
        (fi.prototype.disconnReceiver_ = function (e) {
          var n = this;
          return function (t) {
            e === n.conn_
              ? n.onConnectionLost_(t)
              : e === n.secondaryConn_
              ? (n.log_('Secondary connection lost.'),
                n.onSecondaryConnectionLost_())
              : n.log_('closing an old connection');
          };
        }),
        (fi.prototype.connReceiver_ = function (e) {
          var n = this;
          return function (t) {
            2 !== n.state_ &&
              (e === n.rx_
                ? n.onPrimaryMessageReceived_(t)
                : e === n.secondaryConn_
                ? n.onSecondaryMessageReceived_(t)
                : n.log_('message on old connection'));
          };
        }),
        (fi.prototype.sendRequest = function (t) {
          t = { t: 'd', d: t };
          this.sendData_(t);
        }),
        (fi.prototype.tryCleanupConnection = function () {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              'cleaning up and promoting a connection: ' +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null));
        }),
        (fi.prototype.onSecondaryControl_ = function (t) {
          't' in t &&
            ('a' === (t = t.t)
              ? this.upgradeIfSecondaryHealthy_()
              : 'r' === t
              ? (this.log_('Got a reset on secondary, closing it'),
                this.secondaryConn_.close(),
                (this.tx_ !== this.secondaryConn_ &&
                  this.rx_ !== this.secondaryConn_) ||
                  this.close())
              : 'o' === t &&
                (this.log_('got pong on secondary.'),
                this.secondaryResponsesRequired_--,
                this.upgradeIfSecondaryHealthy_()));
        }),
        (fi.prototype.onSecondaryMessageReceived_ = function (t) {
          var e = ft('t', t),
            t = ft('d', t);
          if ('c' === e) this.onSecondaryControl_(t);
          else {
            if ('d' !== e) throw new Error('Unknown protocol layer: ' + e);
            this.pendingDataMessages.push(t);
          }
        }),
        (fi.prototype.upgradeIfSecondaryHealthy_ = function () {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_('Secondary connection is healthy.'),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_('sending ping on secondary.'),
              this.secondaryConn_.send({ t: 'c', d: { t: 'p', d: {} } }));
        }),
        (fi.prototype.proceedWithUpgrade_ = function () {
          this.secondaryConn_.start(),
            this.log_('sending client ack on secondary'),
            this.secondaryConn_.send({ t: 'c', d: { t: 'a', d: {} } }),
            this.log_('Ending transmission on primary'),
            this.conn_.send({ t: 'c', d: { t: 'n', d: {} } }),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection();
        }),
        (fi.prototype.onPrimaryMessageReceived_ = function (t) {
          var e = ft('t', t),
            t = ft('d', t);
          'c' === e ? this.onControl_(t) : 'd' === e && this.onDataMessage_(t);
        }),
        (fi.prototype.onDataMessage_ = function (t) {
          this.onPrimaryResponse_(), this.onMessage_(t);
        }),
        (fi.prototype.onPrimaryResponse_ = function () {
          this.isHealthy_ ||
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_('Primary connection is healthy.'),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()));
        }),
        (fi.prototype.onControl_ = function (t) {
          var e = ft('t', t);
          if ('d' in t) {
            t = t.d;
            if ('h' === e) this.onHandshake_(t);
            else if ('n' === e) {
              this.log_('recvd end transmission on primary'),
                (this.rx_ = this.secondaryConn_);
              for (var n = 0; n < this.pendingDataMessages.length; ++n)
                this.onDataMessage_(this.pendingDataMessages[n]);
              (this.pendingDataMessages = []), this.tryCleanupConnection();
            } else
              's' === e
                ? this.onConnectionShutdown_(t)
                : 'r' === e
                ? this.onReset_(t)
                : 'e' === e
                ? lt('Server Error: ' + t)
                : 'o' === e
                ? (this.log_('got pong on primary.'),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : lt('Unknown control packet command: ' + e);
          }
        }),
        (fi.prototype.onHandshake_ = function (t) {
          var e = t.ts,
            n = t.v,
            r = t.h;
          (this.sessionId = t.s),
            this.repoInfo_.updateHost(r),
            0 === this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, e),
              '5' !== n && ct('Protocol version mismatch detected'),
              this.tryStartUpgrade_());
        }),
        (fi.prototype.tryStartUpgrade_ = function () {
          var t = this.transportManager_.upgradeTransport();
          t && this.startUpgrade_(t);
        }),
        (fi.prototype.startUpgrade_ = function (t) {
          var e = this;
          (this.secondaryConn_ = new t(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              t.responsesRequiredToBeHealthy || 0);
          var n = this.connReceiver_(this.secondaryConn_),
            t = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(n, t),
            At(function () {
              e.secondaryConn_ &&
                (e.log_('Timed out trying to upgrade.'),
                e.secondaryConn_.close());
            }, Math.floor(6e4));
        }),
        (fi.prototype.onReset_ = function (t) {
          this.log_('Reset packet received.  New host: ' + t),
            this.repoInfo_.updateHost(t),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_());
        }),
        (fi.prototype.onConnectionEstablished_ = function (t, e) {
          var n = this;
          this.log_('Realtime connection established.'),
            (this.conn_ = t),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_('Primary connection is healthy.'),
                (this.isHealthy_ = !0))
              : At(function () {
                  n.sendPingOnPrimaryIfNecessary_();
                }, Math.floor(5e3));
        }),
        (fi.prototype.sendPingOnPrimaryIfNecessary_ = function () {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_('sending ping on primary.'),
            this.sendData_({ t: 'c', d: { t: 'p', d: {} } }));
        }),
        (fi.prototype.onSecondaryConnectionLost_ = function () {
          var t = this.secondaryConn_;
          (this.secondaryConn_ = null),
            (this.tx_ !== t && this.rx_ !== t) || this.close();
        }),
        (fi.prototype.onConnectionLost_ = function (t) {
          (this.conn_ = null),
            t || 0 !== this.state_
              ? 1 === this.state_ && this.log_('Realtime connection lost.')
              : (this.log_('Realtime connection failed.'),
                this.repoInfo_.isCacheableHost() &&
                  (vt.remove('host:' + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close();
        }),
        (fi.prototype.onConnectionShutdown_ = function (t) {
          this.log_('Connection shutdown command received. Shutting down...'),
            this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close();
        }),
        (fi.prototype.sendData_ = function (t) {
          if (1 !== this.state_) throw 'Connection is not connected';
          this.tx_.send(t);
        }),
        (fi.prototype.close = function () {
          2 !== this.state_ &&
            (this.log_('Closing realtime connection.'),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)));
        }),
        (fi.prototype.closeConnections_ = function () {
          this.log_('Shutting down all connections'),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null));
        }),
        fi);
      function fi(t, e, n, r, i, o, s, a) {
        (this.id = t),
          (this.repoInfo_ = e),
          (this.applicationId_ = n),
          (this.onMessage_ = r),
          (this.onReady_ = i),
          (this.onDisconnect_ = o),
          (this.onKill_ = s),
          (this.lastSessionId = a),
          (this.connectionCount = 0),
          (this.pendingDataMessages = []),
          (this.state_ = 0),
          (this.log_ = It('c:' + this.id + ':')),
          (this.transportManager_ = new ci(e)),
          this.log_('Connection created'),
          this.start_();
      }
      (_i.prototype.put = function (t, e, n, r) {}),
        (_i.prototype.merge = function (t, e, n, r) {}),
        (_i.prototype.refreshAuthToken = function (t) {}),
        (_i.prototype.onDisconnectPut = function (t, e, n) {}),
        (_i.prototype.onDisconnectMerge = function (t, e, n) {}),
        (_i.prototype.onDisconnectCancel = function (t, e) {}),
        (_i.prototype.reportStats = function (t) {}),
        (Ce = _i);
      function _i() {}
      var yi,
        gi = 1e3,
        vi = 3e5,
        mi =
          (n(Ci, (yi = Ce)),
          (Ci.prototype.sendRequest = function (t, e, n) {
            var r = ++this.requestNumber_,
              e = { r: r, a: t, b: e };
            this.log_(P(e)),
              y(
                this.connected_,
                "sendRequest call when we're not connected not allowed."
              ),
              this.realtime_.sendRequest(e),
              n && (this.requestCBHash_[r] = n);
          }),
          (Ci.prototype.get = function (t) {
            var n = this,
              r = new g(),
              i = { p: t.path.toString(), q: t.queryObject() },
              e = {
                action: 'g',
                request: i,
                onComplete: function (t) {
                  var e = t.d;
                  'ok' === t.s
                    ? (n.onDataUpdate_(i.p, e, !1, null), r.resolve(e))
                    : r.reject(e);
                }
              };
            this.outstandingGets_.push(e), this.outstandingGetCount_++;
            var o = this.outstandingGets_.length - 1;
            return (
              this.connected_ ||
                setTimeout(function () {
                  var t = n.outstandingGets_[o];
                  void 0 !== t &&
                    e === t &&
                    (delete n.outstandingGets_[o],
                    n.outstandingGetCount_--,
                    0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                    n.log_('get ' + o + ' timed out on connection'),
                    r.reject(new Error('Client is offline.')));
                }, 3e3),
              this.connected_ && this.sendGet_(o),
              r.promise
            );
          }),
          (Ci.prototype.listen = function (t, e, n, r) {
            var i = t.queryIdentifier(),
              o = t.path.toString();
            this.log_('Listen called for ' + o + ' ' + i),
              this.listens.has(o) || this.listens.set(o, new Map()),
              y(
                t.getQueryParams().isDefault() ||
                  !t.getQueryParams().loadsAllData(),
                'listen() called for non-default but complete query'
              ),
              y(
                !this.listens.get(o).has(i),
                'listen() called twice for same path/queryId.'
              );
            n = { onComplete: r, hashFn: e, query: t, tag: n };
            this.listens.get(o).set(i, n),
              this.connected_ && this.sendListen_(n);
          }),
          (Ci.prototype.sendGet_ = function (e) {
            var n = this,
              r = this.outstandingGets_[e];
            this.sendRequest('g', r.request, function (t) {
              delete n.outstandingGets_[e],
                n.outstandingGetCount_--,
                0 === n.outstandingGetCount_ && (n.outstandingGets_ = []),
                r.onComplete && r.onComplete(t);
            });
          }),
          (Ci.prototype.sendListen_ = function (r) {
            var i = this,
              o = r.query,
              s = o.path.toString(),
              a = o.queryIdentifier();
            this.log_('Listen on ' + s + ' for ' + a);
            var t = { p: s };
            r.tag && ((t.q = o.queryObject()), (t.t = r.tag)),
              (t.h = r.hashFn()),
              this.sendRequest('q', t, function (t) {
                var e = t.d,
                  n = t.s;
                Ci.warnOnListenWarnings_(e, o),
                  (i.listens.get(s) && i.listens.get(s).get(a)) === r &&
                    (i.log_('listen response', t),
                    'ok' !== n && i.removeListen_(s, a),
                    r.onComplete && r.onComplete(n, e));
              });
          }),
          (Ci.warnOnListenWarnings_ = function (t, e) {
            t &&
              'object' == typeof t &&
              O(t, 'w') &&
              ((t = x(t, 'w')),
              Array.isArray(t) &&
                ~t.indexOf('no_index') &&
                ((t =
                  '".indexOn": "' +
                  e.getQueryParams().getIndex().toString() +
                  '"'),
                (e = e.path.toString()),
                ct(
                  'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                    t +
                    ' at ' +
                    e +
                    ' to your security rules for better performance.'
                )));
          }),
          (Ci.prototype.refreshAuthToken = function (t) {
            (this.authToken_ = t),
              this.log_('Auth token refreshed'),
              this.authToken_
                ? this.tryAuth()
                : this.connected_ &&
                  this.sendRequest('unauth', {}, function () {}),
              this.reduceReconnectDelayIfAdminCredential_(t);
          }),
          (Ci.prototype.reduceReconnectDelayIfAdminCredential_ = function (t) {
            ((t && 40 === t.length) ||
              (function (t) {
                t = D(t).claims;
                return 'object' == typeof t && !0 === t.admin;
              })(t)) &&
              (this.log_(
                'Admin auth credential detected.  Reducing max reconnect time.'
              ),
              (this.maxReconnectDelay_ = 3e4));
          }),
          (Ci.prototype.tryAuth = function () {
            var n,
              t,
              e,
              r = this;
            this.connected_ &&
              this.authToken_ &&
              ((t = (function (t) {
                t = D(t).claims;
                return !!t && 'object' == typeof t && t.hasOwnProperty('iat');
              })((n = this.authToken_))
                ? 'auth'
                : 'gauth'),
              (e = { cred: n }),
              null === this.authOverride_
                ? (e.noauth = !0)
                : 'object' == typeof this.authOverride_ &&
                  (e.authvar = this.authOverride_),
              this.sendRequest(t, e, function (t) {
                var e = t.s,
                  t = t.d || 'error';
                r.authToken_ === n &&
                  ('ok' === e
                    ? (r.invalidAuthTokenCount_ = 0)
                    : r.onAuthRevoked_(e, t));
              }));
          }),
          (Ci.prototype.unlisten = function (t, e) {
            var n = t.path.toString(),
              r = t.queryIdentifier();
            this.log_('Unlisten called for ' + n + ' ' + r),
              y(
                t.getQueryParams().isDefault() ||
                  !t.getQueryParams().loadsAllData(),
                'unlisten() called for non-default but complete query'
              ),
              this.removeListen_(n, r) &&
                this.connected_ &&
                this.sendUnlisten_(n, r, t.queryObject(), e);
          }),
          (Ci.prototype.sendUnlisten_ = function (t, e, n, r) {
            this.log_('Unlisten on ' + t + ' for ' + e);
            t = { p: t };
            r && ((t.q = n), (t.t = r)), this.sendRequest('n', t);
          }),
          (Ci.prototype.onDisconnectPut = function (t, e, n) {
            this.connected_
              ? this.sendOnDisconnect_('o', t, e, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: t,
                  action: 'o',
                  data: e,
                  onComplete: n
                });
          }),
          (Ci.prototype.onDisconnectMerge = function (t, e, n) {
            this.connected_
              ? this.sendOnDisconnect_('om', t, e, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: t,
                  action: 'om',
                  data: e,
                  onComplete: n
                });
          }),
          (Ci.prototype.onDisconnectCancel = function (t, e) {
            this.connected_
              ? this.sendOnDisconnect_('oc', t, null, e)
              : this.onDisconnectRequestQueue_.push({
                  pathString: t,
                  action: 'oc',
                  data: null,
                  onComplete: e
                });
          }),
          (Ci.prototype.sendOnDisconnect_ = function (t, e, n, r) {
            n = { p: e, d: n };
            this.log_('onDisconnect ' + t, n),
              this.sendRequest(t, n, function (t) {
                r &&
                  setTimeout(function () {
                    r(t.s, t.d);
                  }, Math.floor(0));
              });
          }),
          (Ci.prototype.put = function (t, e, n, r) {
            this.putInternal('p', t, e, n, r);
          }),
          (Ci.prototype.merge = function (t, e, n, r) {
            this.putInternal('m', t, e, n, r);
          }),
          (Ci.prototype.putInternal = function (t, e, n, r, i) {
            n = { p: e, d: n };
            void 0 !== i && (n.h = i),
              this.outstandingPuts_.push({
                action: t,
                request: n,
                onComplete: r
              }),
              this.outstandingPutCount_++;
            r = this.outstandingPuts_.length - 1;
            this.connected_
              ? this.sendPut_(r)
              : this.log_('Buffering put: ' + e);
          }),
          (Ci.prototype.sendPut_ = function (e) {
            var n = this,
              r = this.outstandingPuts_[e].action,
              t = this.outstandingPuts_[e].request,
              i = this.outstandingPuts_[e].onComplete;
            (this.outstandingPuts_[e].queued = this.connected_),
              this.sendRequest(r, t, function (t) {
                n.log_(r + ' response', t),
                  delete n.outstandingPuts_[e],
                  n.outstandingPutCount_--,
                  0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []),
                  i && i(t.s, t.d);
              });
          }),
          (Ci.prototype.reportStats = function (t) {
            var e = this;
            this.connected_ &&
              ((t = { c: t }),
              this.log_('reportStats', t),
              this.sendRequest('s', t, function (t) {
                'ok' !== t.s &&
                  ((t = t.d),
                  e.log_('reportStats', 'Error sending stats: ' + t));
              }));
          }),
          (Ci.prototype.onDataMessage_ = function (t) {
            if ('r' in t) {
              this.log_('from server: ' + P(t));
              var e = t.r,
                n = this.requestCBHash_[e];
              n && (delete this.requestCBHash_[e], n(t.b));
            } else {
              if ('error' in t)
                throw 'A server-side error has occurred: ' + t.error;
              'a' in t && this.onDataPush_(t.a, t.b);
            }
          }),
          (Ci.prototype.onDataPush_ = function (t, e) {
            this.log_('handleServerMessage', t, e),
              'd' === t
                ? this.onDataUpdate_(e.p, e.d, !1, e.t)
                : 'm' === t
                ? this.onDataUpdate_(e.p, e.d, !0, e.t)
                : 'c' === t
                ? this.onListenRevoked_(e.p, e.q)
                : 'ac' === t
                ? this.onAuthRevoked_(e.s, e.d)
                : 'sd' === t
                ? this.onSecurityDebugPacket_(e)
                : lt(
                    'Unrecognized action received from server: ' +
                      P(t) +
                      '\nAre you using the latest client?'
                  );
          }),
          (Ci.prototype.onReady_ = function (t, e) {
            this.log_('connection ready'),
              (this.connected_ = !0),
              (this.lastConnectionEstablishedTime_ = new Date().getTime()),
              this.handleTimestamp_(t),
              (this.lastSessionId = e),
              this.firstConnection_ && this.sendConnectStats_(),
              this.restoreState_(),
              (this.firstConnection_ = !1),
              this.onConnectStatus_(!0);
          }),
          (Ci.prototype.scheduleConnect_ = function (t) {
            var e = this;
            y(
              !this.realtime_,
              "Scheduling a connect when we're already connected/ing?"
            ),
              this.establishConnectionTimer_ &&
                clearTimeout(this.establishConnectionTimer_),
              (this.establishConnectionTimer_ = setTimeout(function () {
                (e.establishConnectionTimer_ = null), e.establishConnection_();
              }, Math.floor(t)));
          }),
          (Ci.prototype.onVisible_ = function (t) {
            t &&
              !this.visible_ &&
              this.reconnectDelay_ === this.maxReconnectDelay_ &&
              (this.log_('Window became visible.  Reducing delay.'),
              (this.reconnectDelay_ = gi),
              this.realtime_ || this.scheduleConnect_(0)),
              (this.visible_ = t);
          }),
          (Ci.prototype.onOnline_ = function (t) {
            t
              ? (this.log_('Browser went online.'),
                (this.reconnectDelay_ = gi),
                this.realtime_ || this.scheduleConnect_(0))
              : (this.log_('Browser went offline.  Killing connection.'),
                this.realtime_ && this.realtime_.close());
          }),
          (Ci.prototype.onRealtimeDisconnect_ = function () {
            var t;
            this.log_('data client disconnected'),
              (this.connected_ = !1),
              (this.realtime_ = null),
              this.cancelSentTransactions_(),
              (this.requestCBHash_ = {}),
              this.shouldReconnect_() &&
                (this.visible_
                  ? this.lastConnectionEstablishedTime_ &&
                    (3e4 <
                      new Date().getTime() -
                        this.lastConnectionEstablishedTime_ &&
                      (this.reconnectDelay_ = gi),
                    (this.lastConnectionEstablishedTime_ = null))
                  : (this.log_("Window isn't visible.  Delaying reconnect."),
                    (this.reconnectDelay_ = this.maxReconnectDelay_),
                    (this.lastConnectionAttemptTime_ = new Date().getTime())),
                (t = new Date().getTime() - this.lastConnectionAttemptTime_),
                (t = Math.max(0, this.reconnectDelay_ - t)),
                (t = Math.random() * t),
                this.log_('Trying to reconnect in ' + t + 'ms'),
                this.scheduleConnect_(t),
                (this.reconnectDelay_ = Math.min(
                  this.maxReconnectDelay_,
                  1.3 * this.reconnectDelay_
                ))),
              this.onConnectStatus_(!1);
          }),
          (Ci.prototype.establishConnection_ = function () {
            var e,
              n,
              r,
              i,
              o,
              s,
              a,
              h,
              l,
              t,
              u = this;
            this.shouldReconnect_() &&
              (this.log_('Making a connection attempt'),
              (this.lastConnectionAttemptTime_ = new Date().getTime()),
              (this.lastConnectionEstablishedTime_ = null),
              (e = this.onDataMessage_.bind(this)),
              (n = this.onReady_.bind(this)),
              (r = this.onRealtimeDisconnect_.bind(this)),
              (i = this.id + ':' + Ci.nextConnectionId_++),
              (s = (o = this).lastSessionId),
              (a = !1),
              (h = null),
              (l = function () {
                h ? h.close() : ((a = !0), r());
              }),
              (this.realtime_ = {
                close: l,
                sendRequest: function (t) {
                  y(
                    h,
                    "sendRequest call when we're not connected not allowed."
                  ),
                    h.sendRequest(t);
                }
              }),
              (t = this.forceTokenRefresh_),
              (this.forceTokenRefresh_ = !1),
              this.authTokenProvider_
                .getToken(t)
                .then(function (t) {
                  a
                    ? Tt('getToken() completed but was canceled')
                    : (Tt('getToken() completed. Creating connection.'),
                      (o.authToken_ = t && t.accessToken),
                      (h = new di(
                        i,
                        o.repoInfo_,
                        o.applicationId_,
                        e,
                        n,
                        r,
                        function (t) {
                          ct(t + ' (' + o.repoInfo_.toString() + ')'),
                            o.interrupt('server_kill');
                        },
                        s
                      )));
                })
                .then(null, function (t) {
                  o.log_('Failed to get token: ' + t),
                    a || (u.repoInfo_.nodeAdmin && ct(t), l());
                }));
          }),
          (Ci.prototype.interrupt = function (t) {
            Tt('Interrupting connection for reason: ' + t),
              (this.interruptReasons_[t] = !0),
              this.realtime_
                ? this.realtime_.close()
                : (this.establishConnectionTimer_ &&
                    (clearTimeout(this.establishConnectionTimer_),
                    (this.establishConnectionTimer_ = null)),
                  this.connected_ && this.onRealtimeDisconnect_());
          }),
          (Ci.prototype.resume = function (t) {
            Tt('Resuming connection for reason: ' + t),
              delete this.interruptReasons_[t],
              k(this.interruptReasons_) &&
                ((this.reconnectDelay_ = gi),
                this.realtime_ || this.scheduleConnect_(0));
          }),
          (Ci.prototype.handleTimestamp_ = function (t) {
            t -= new Date().getTime();
            this.onServerInfoUpdate_({ serverTimeOffset: t });
          }),
          (Ci.prototype.cancelSentTransactions_ = function () {
            for (var t = 0; t < this.outstandingPuts_.length; t++) {
              var e = this.outstandingPuts_[t];
              e &&
                'h' in e.request &&
                e.queued &&
                (e.onComplete && e.onComplete('disconnect'),
                delete this.outstandingPuts_[t],
                this.outstandingPutCount_--);
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
          }),
          (Ci.prototype.onListenRevoked_ = function (t, e) {
            (e = e
              ? e
                  .map(function (t) {
                    return Dt(t);
                  })
                  .join('$')
              : 'default'),
              (e = this.removeListen_(t, e));
            e && e.onComplete && e.onComplete('permission_denied');
          }),
          (Ci.prototype.removeListen_ = function (t, e) {
            var n,
              r = new Mt(t).toString();
            return (
              this.listens.has(r)
                ? ((n = (t = this.listens.get(r)).get(e)),
                  t.delete(e),
                  0 === t.size && this.listens.delete(r))
                : (n = void 0),
              n
            );
          }),
          (Ci.prototype.onAuthRevoked_ = function (t, e) {
            Tt('Auth token revoked: ' + t + '/' + e),
              (this.authToken_ = null),
              (this.forceTokenRefresh_ = !0),
              this.realtime_.close(),
              ('invalid_token' !== t && 'permission_denied' !== t) ||
                (this.invalidAuthTokenCount_++,
                3 <= this.invalidAuthTokenCount_ &&
                  ((this.reconnectDelay_ = 3e4),
                  this.authTokenProvider_.notifyForInvalidToken()));
          }),
          (Ci.prototype.onSecurityDebugPacket_ = function (t) {
            this.securityDebugCallback_
              ? this.securityDebugCallback_(t)
              : 'msg' in t &&
                console.log('FIREBASE: ' + t.msg.replace('\n', '\nFIREBASE: '));
          }),
          (Ci.prototype.restoreState_ = function () {
            var e, t, n, r;
            this.tryAuth();
            try {
              for (
                var i = f(this.listens.values()), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                try {
                  for (
                    var a = ((n = void 0), f(s.values())), h = a.next();
                    !h.done;
                    h = a.next()
                  ) {
                    var l = h.value;
                    this.sendListen_(l);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    h && !h.done && (r = a.return) && r.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            for (var u = 0; u < this.outstandingPuts_.length; u++)
              this.outstandingPuts_[u] && this.sendPut_(u);
            for (; this.onDisconnectRequestQueue_.length; ) {
              var c = this.onDisconnectRequestQueue_.shift();
              this.sendOnDisconnect_(
                c.action,
                c.pathString,
                c.data,
                c.onComplete
              );
            }
            for (u = 0; u < this.outstandingGets_.length; u++)
              this.outstandingGets_[u] && this.sendGet_(u);
          }),
          (Ci.prototype.sendConnectStats_ = function () {
            var t = {};
            (t['sdk.js.' + si.replace(/\./g, '-')] = 1),
              m()
                ? (t['framework.cordova'] = 1)
                : 'object' == typeof navigator &&
                  'ReactNative' === navigator.product &&
                  (t['framework.reactnative'] = 1),
              this.reportStats(t);
          }),
          (Ci.prototype.shouldReconnect_ = function () {
            var t = Xr.getInstance().currentlyOnline();
            return k(this.interruptReasons_) && t;
          }),
          (Ci.nextPersistentConnectionId_ = 0),
          (Ci.nextConnectionId_ = 0),
          Ci);
      function Ci(t, e, n, r, i, o, s) {
        var a = yi.call(this) || this;
        if (
          ((a.repoInfo_ = t),
          (a.applicationId_ = e),
          (a.onDataUpdate_ = n),
          (a.onConnectStatus_ = r),
          (a.onServerInfoUpdate_ = i),
          (a.authTokenProvider_ = o),
          (a.authOverride_ = s),
          (a.id = Ci.nextPersistentConnectionId_++),
          (a.log_ = It('p:' + a.id + ':')),
          (a.interruptReasons_ = {}),
          (a.listens = new Map()),
          (a.outstandingPuts_ = []),
          (a.outstandingGets_ = []),
          (a.outstandingPutCount_ = 0),
          (a.outstandingGetCount_ = 0),
          (a.onDisconnectRequestQueue_ = []),
          (a.connected_ = !1),
          (a.reconnectDelay_ = gi),
          (a.maxReconnectDelay_ = vi),
          (a.securityDebugCallback_ = null),
          (a.lastSessionId = null),
          (a.establishConnectionTimer_ = null),
          (a.visible_ = !1),
          (a.requestCBHash_ = {}),
          (a.requestNumber_ = 0),
          (a.realtime_ = null),
          (a.authToken_ = null),
          (a.forceTokenRefresh_ = !1),
          (a.invalidAuthTokenCount_ = 0),
          (a.firstConnection_ = !0),
          (a.lastConnectionAttemptTime_ = null),
          (a.lastConnectionEstablishedTime_ = null),
          s && !C())
        )
          throw new Error(
            'Auth override specified in options, but not supported on non Node.js platforms'
          );
        return (
          a.scheduleConnect_(0),
          Kr.getInstance().on('visible', a.onVisible_, a),
          -1 === t.host.indexOf('fblocal') &&
            Xr.getInstance().on('online', a.onOnline_, a),
          a
        );
      }
      var Ei,
        wi =
          (n(bi, (Ei = Ce)),
          (bi.prototype.reportStats = function (t) {
            throw new Error('Method not implemented.');
          }),
          (bi.getListenId_ = function (t, e) {
            return void 0 !== e
              ? 'tag$' + e
              : (y(
                  t.getQueryParams().isDefault(),
                  "should have a tag if it's not a default query."
                ),
                t.path.toString());
          }),
          (bi.prototype.listen = function (t, e, n, r) {
            var i = this,
              o = t.path.toString();
            this.log_('Listen called for ' + o + ' ' + t.queryIdentifier());
            var s = bi.getListenId_(t, n),
              a = {};
            this.listens_[s] = a;
            t = t.getQueryParams().toRestQueryStringParameters();
            this.restRequest_(o + '.json', t, function (t, e) {
              404 === t && (t = e = null),
                null === t && i.onDataUpdate_(o, e, !1, n),
                x(i.listens_, s) === a &&
                  r(
                    t
                      ? 401 === t
                        ? 'permission_denied'
                        : 'rest_error:' + t
                      : 'ok',
                    null
                  );
            });
          }),
          (bi.prototype.unlisten = function (t, e) {
            e = bi.getListenId_(t, e);
            delete this.listens_[e];
          }),
          (bi.prototype.get = function (t) {
            var n = this,
              e = t.getQueryParams().toRestQueryStringParameters(),
              r = t.path.toString(),
              i = new g();
            return (
              this.restRequest_(r + '.json', e, function (t, e) {
                404 === t && (t = e = null),
                  null === t
                    ? (n.onDataUpdate_(r, e, !1, null), i.resolve(e))
                    : i.reject(new Error(e));
              }),
              i.promise
            );
          }),
          (bi.prototype.refreshAuthToken = function (t) {}),
          (bi.prototype.restRequest_ = function (r, i, o) {
            var s = this;
            void 0 === i && (i = {}),
              (i.format = 'export'),
              this.authTokenProvider_.getToken(!1).then(function (t) {
                t = t && t.accessToken;
                t && (i.auth = t);
                var e =
                  (s.repoInfo_.secure ? 'https://' : 'http://') +
                  s.repoInfo_.host +
                  r +
                  '?ns=' +
                  s.repoInfo_.namespace +
                  (function (t) {
                    for (
                      var n = [], e = 0, r = Object.entries(t);
                      e < r.length;
                      e++
                    ) {
                      var i = r[e];
                      !(function (e, t) {
                        Array.isArray(t)
                          ? t.forEach(function (t) {
                              n.push(
                                encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t)
                              );
                            })
                          : n.push(
                              encodeURIComponent(e) +
                                '=' +
                                encodeURIComponent(t)
                            );
                      })(i[0], i[1]);
                    }
                    return n.length ? '&' + n.join('&') : '';
                  })(i);
                s.log_('Sending REST request for ' + e);
                var n = new XMLHttpRequest();
                (n.onreadystatechange = function () {
                  if (o && 4 === n.readyState) {
                    s.log_(
                      'REST Response for ' + e + ' received. status:',
                      n.status,
                      'response:',
                      n.responseText
                    );
                    var t = null;
                    if (200 <= n.status && n.status < 300) {
                      try {
                        t = R(n.responseText);
                      } catch (t) {
                        ct(
                          'Failed to parse JSON response for ' +
                            e +
                            ': ' +
                            n.responseText
                        );
                      }
                      o(null, t);
                    } else
                      401 !== n.status &&
                        404 !== n.status &&
                        ct(
                          'Got unsuccessful REST response for ' +
                            e +
                            ' Status: ' +
                            n.status
                        ),
                        o(n.status);
                    o = null;
                  }
                }),
                  n.open('GET', e, !0),
                  n.send();
              });
          }),
          bi);
      function bi(t, e, n) {
        var r = Ei.call(this) || this;
        return (
          (r.repoInfo_ = t),
          (r.onDataUpdate_ = e),
          (r.authTokenProvider_ = n),
          (r.log_ = It('p:rest:')),
          (r.listens_ = {}),
          r
        );
      }
      var Si = 'repo_interrupt',
        Ti =
          ((Ii.prototype.start = function () {
            var s = this;
            if (
              ((this.stats_ = Fr.getCollection(this.repoInfo_)),
              this.forceRestClient_ ||
                0 <=
                  (
                    ('object' == typeof window &&
                      window.navigator &&
                      window.navigator.userAgent) ||
                    ''
                  ).search(
                    /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                  ))
            )
              (this.server_ = new wi(
                this.repoInfo_,
                this.onDataUpdate_.bind(this),
                this.authTokenProvider_
              )),
                setTimeout(this.onConnectStatus_.bind(this, !0), 0);
            else {
              var t = this.app.options.databaseAuthVariableOverride;
              if (null != t) {
                if ('object' != typeof t)
                  throw new Error(
                    'Only objects are supported for option databaseAuthVariableOverride'
                  );
                try {
                  P(t);
                } catch (t) {
                  throw new Error('Invalid authOverride provided: ' + t);
                }
              }
              (this.persistentConnection_ = new mi(
                this.repoInfo_,
                this.app.options.appId,
                this.onDataUpdate_.bind(this),
                this.onConnectStatus_.bind(this),
                this.onServerInfoUpdate_.bind(this),
                this.authTokenProvider_,
                t
              )),
                (this.server_ = this.persistentConnection_);
            }
            this.authTokenProvider_.addTokenChangeListener(function (t) {
              s.server_.refreshAuthToken(t);
            }),
              (this.statsReporter_ = Fr.getOrCreateReporter(
                this.repoInfo_,
                function () {
                  return new qr(s.stats_, s.server_);
                }
              )),
              this.transactionsInit_(),
              (this.infoData_ = new Or()),
              (this.infoSyncTree_ = new Pr({
                startListening: function (t, e, n, r) {
                  var i = [],
                    o = s.infoData_.getNode(t.path);
                  return (
                    o.isEmpty() ||
                      ((i = s.infoSyncTree_.applyServerOverwrite(t.path, o)),
                      setTimeout(function () {
                        r('ok');
                      }, 0)),
                    i
                  );
                },
                stopListening: function () {}
              })),
              this.updateInfo_('connected', !1),
              (this.serverSyncTree_ = new Pr({
                startListening: function (n, t, e, r) {
                  return (
                    s.server_.listen(n, e, t, function (t, e) {
                      e = r(t, e);
                      s.eventQueue_.raiseEventsForChangedPath(n.path, e);
                    }),
                    []
                  );
                },
                stopListening: function (t, e) {
                  s.server_.unlisten(t, e);
                }
              }));
          }),
          (Ii.prototype.toString = function () {
            return (
              (this.repoInfo_.secure ? 'https://' : 'http://') +
              this.repoInfo_.host
            );
          }),
          (Ii.prototype.name = function () {
            return this.repoInfo_.namespace;
          }),
          (Ii.prototype.serverTime = function () {
            var t =
              this.infoData_.getNode(new Mt('.info/serverTimeOffset')).val() ||
              0;
            return new Date().getTime() + t;
          }),
          (Ii.prototype.generateServerValues = function () {
            return (
              ((t = (t = { timestamp: this.serverTime() }) || {}).timestamp =
                t.timestamp || new Date().getTime()),
              t
            );
            var t;
          }),
          (Ii.prototype.onDataUpdate_ = function (t, e, n, r) {
            this.dataUpdateCount++;
            var i = new Mt(t);
            e = this.interceptServerDataCallback_
              ? this.interceptServerDataCallback_(t, e)
              : e;
            var o,
              s = [],
              t = i;
            0 <
              (s = r
                ? n
                  ? ((o = A(e, function (t) {
                      return hn(t);
                    })),
                    this.serverSyncTree_.applyTaggedQueryMerge(i, o, r))
                  : ((o = hn(e)),
                    this.serverSyncTree_.applyTaggedQueryOverwrite(i, o, r))
                : n
                ? ((n = A(e, function (t) {
                    return hn(t);
                  })),
                  this.serverSyncTree_.applyServerMerge(i, n))
                : ((e = hn(e)),
                  this.serverSyncTree_.applyServerOverwrite(i, e))).length &&
              (t = this.rerunTransactions_(i)),
              this.eventQueue_.raiseEventsForChangedPath(t, s);
          }),
          (Ii.prototype.interceptServerData_ = function (t) {
            this.interceptServerDataCallback_ = t;
          }),
          (Ii.prototype.onConnectStatus_ = function (t) {
            this.updateInfo_('connected', t),
              !1 === t && this.runOnDisconnectEvents_();
          }),
          (Ii.prototype.onServerInfoUpdate_ = function (t) {
            var n = this;
            Ot(t, function (t, e) {
              n.updateInfo_(t, e);
            });
          }),
          (Ii.prototype.updateInfo_ = function (t, e) {
            (t = new Mt('/.info/' + t)), (e = hn(e));
            this.infoData_.updateSnapshot(t, e);
            e = this.infoSyncTree_.applyServerOverwrite(t, e);
            this.eventQueue_.raiseEventsForChangedPath(t, e);
          }),
          (Ii.prototype.getNextWriteId_ = function () {
            return this.nextWriteId_++;
          }),
          (Ii.prototype.getValue = function (n) {
            var r = this;
            return this.server_.get(n).then(
              function (t) {
                var e = hn(t),
                  t = r.serverSyncTree_.applyServerOverwrite(n.path, e);
                return (
                  r.eventQueue_.raiseEventsAtPath(n.path, t),
                  Promise.resolve(
                    new fn(e, n.getRef(), n.getQueryParams().getIndex())
                  )
                );
              },
              function (t) {
                r.log_(
                  'get for query ' +
                    P(n) +
                    ' falling back to cache after error: ' +
                    t
                );
                var e = r.serverSyncTree_.calcCompleteEventCache(n.path);
                return e.isEmpty()
                  ? Promise.reject(new Error(t))
                  : Promise.resolve(
                      new fn(e, n.getRef(), n.getQueryParams().getIndex())
                    );
              }
            );
          }),
          (Ii.prototype.setWithPriority = function (r, t, e, i) {
            var o = this;
            this.log_('set', { path: r.toString(), value: t, priority: e });
            var n = this.generateServerValues(),
              t = hn(t, e),
              e = this.serverSyncTree_.calcCompleteEventCache(r),
              n = xn(t, e, n),
              s = this.getNextWriteId_(),
              n = this.serverSyncTree_.applyUserOverwrite(r, n, s, !0);
            this.eventQueue_.queueEvents(n),
              this.server_.put(r.toString(), t.val(!0), function (t, e) {
                var n = 'ok' === t;
                n || ct('set at ' + r + ' failed: ' + t);
                n = o.serverSyncTree_.ackUserWrite(s, !n);
                o.eventQueue_.raiseEventsForChangedPath(r, n),
                  o.callOnCompleteCallback(i, t, e);
              });
            t = this.abortTransactions_(r);
            this.rerunTransactions_(t),
              this.eventQueue_.raiseEventsForChangedPath(t, []);
          }),
          (Ii.prototype.update = function (i, t, o) {
            var s = this;
            this.log_('update', { path: i.toString(), value: t });
            var a,
              e,
              n = !0,
              r = this.generateServerValues(),
              h = {};
            Ot(t, function (t, e) {
              (n = !1), (h[t] = On(i.child(t), hn(e), s.serverSyncTree_, r));
            }),
              n
                ? (Tt("update() called with empty data.  Don't do anything."),
                  this.callOnCompleteCallback(o, 'ok'))
                : ((a = this.getNextWriteId_()),
                  (e = this.serverSyncTree_.applyUserMerge(i, h, a)),
                  this.eventQueue_.queueEvents(e),
                  this.server_.merge(i.toString(), t, function (t, e) {
                    var n = 'ok' === t;
                    n || ct('update at ' + i + ' failed: ' + t);
                    var r = s.serverSyncTree_.ackUserWrite(a, !n),
                      n = 0 < r.length ? s.rerunTransactions_(i) : i;
                    s.eventQueue_.raiseEventsForChangedPath(n, r),
                      s.callOnCompleteCallback(o, t, e);
                  }),
                  Ot(t, function (t) {
                    t = s.abortTransactions_(i.child(t));
                    s.rerunTransactions_(t);
                  }),
                  this.eventQueue_.raiseEventsForChangedPath(i, []));
          }),
          (Ii.prototype.runOnDisconnectEvents_ = function () {
            var n = this;
            this.log_('onDisconnectEvents');
            var r = this.generateServerValues(),
              i = new Wn();
            this.onDisconnect_.forEachTree(Mt.Empty, function (t, e) {
              e = On(t, e, n.serverSyncTree_, r);
              i.remember(t, e);
            });
            var o = [];
            i.forEachTree(Mt.Empty, function (t, e) {
              o = o.concat(n.serverSyncTree_.applyServerOverwrite(t, e));
              t = n.abortTransactions_(t);
              n.rerunTransactions_(t);
            }),
              (this.onDisconnect_ = new Wn()),
              this.eventQueue_.raiseEventsForChangedPath(Mt.Empty, o);
          }),
          (Ii.prototype.onDisconnectCancel = function (n, r) {
            var i = this;
            this.server_.onDisconnectCancel(n.toString(), function (t, e) {
              'ok' === t && i.onDisconnect_.forget(n),
                i.callOnCompleteCallback(r, t, e);
            });
          }),
          (Ii.prototype.onDisconnectSet = function (n, t, r) {
            var i = this,
              o = hn(t);
            this.server_.onDisconnectPut(n.toString(), o.val(!0), function (
              t,
              e
            ) {
              'ok' === t && i.onDisconnect_.remember(n, o),
                i.callOnCompleteCallback(r, t, e);
            });
          }),
          (Ii.prototype.onDisconnectSetWithPriority = function (n, t, e, r) {
            var i = this,
              o = hn(t, e);
            this.server_.onDisconnectPut(n.toString(), o.val(!0), function (
              t,
              e
            ) {
              'ok' === t && i.onDisconnect_.remember(n, o),
                i.callOnCompleteCallback(r, t, e);
            });
          }),
          (Ii.prototype.onDisconnectUpdate = function (n, r, i) {
            var o = this;
            if (k(r))
              return (
                Tt(
                  "onDisconnect().update() called with empty data.  Don't do anything."
                ),
                void this.callOnCompleteCallback(i, 'ok')
              );
            this.server_.onDisconnectMerge(n.toString(), r, function (t, e) {
              'ok' === t &&
                Ot(r, function (t, e) {
                  e = hn(e);
                  o.onDisconnect_.remember(n.child(t), e);
                }),
                o.callOnCompleteCallback(i, t, e);
            });
          }),
          (Ii.prototype.addEventCallbackForQuery = function (t, e) {
            e = ('.info' === t.path.getFront()
              ? this.infoSyncTree_
              : this.serverSyncTree_
            ).addEventRegistration(t, e);
            this.eventQueue_.raiseEventsAtPath(t.path, e);
          }),
          (Ii.prototype.removeEventCallbackForQuery = function (t, e) {
            e = ('.info' === t.path.getFront()
              ? this.infoSyncTree_
              : this.serverSyncTree_
            ).removeEventRegistration(t, e);
            this.eventQueue_.raiseEventsAtPath(t.path, e);
          }),
          (Ii.prototype.interrupt = function () {
            this.persistentConnection_ &&
              this.persistentConnection_.interrupt(Si);
          }),
          (Ii.prototype.resume = function () {
            this.persistentConnection_ && this.persistentConnection_.resume(Si);
          }),
          (Ii.prototype.stats = function (t) {
            var i;
            void 0 === t && (t = !1),
              'undefined' != typeof console &&
                ((t = t
                  ? (this.statsListener_ ||
                      (this.statsListener_ = new Mr(this.stats_)),
                    this.statsListener_.get())
                  : this.stats_.get()),
                (i = Object.keys(t).reduce(function (t, e) {
                  return Math.max(e.length, t);
                }, 0)),
                Ot(t, function (t, e) {
                  for (var n = t, r = t.length; r < i + 2; r++) n += ' ';
                  console.log(n + e);
                }));
          }),
          (Ii.prototype.statsIncrementCounter = function (t) {
            this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t);
          }),
          (Ii.prototype.log_ = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = '';
            this.persistentConnection_ &&
              (n = this.persistentConnection_.id + ':'),
              Tt.apply(void 0, s([n], t));
          }),
          (Ii.prototype.callOnCompleteCallback = function (n, r, i) {
            n &&
              kt(function () {
                var t, e;
                'ok' === r
                  ? n(null)
                  : ((e = t = (r || 'error').toUpperCase()),
                    i && (e += ': ' + i),
                    ((e = new Error(e)).code = t),
                    n(e));
              });
          }),
          Object.defineProperty(Ii.prototype, 'database', {
            get: function () {
              return this.__database || (this.__database = new Ki(this));
            },
            enumerable: !1,
            configurable: !0
          }),
          Ii);
      function Ii(t, e, n, r) {
        (this.repoInfo_ = t),
          (this.forceRestClient_ = e),
          (this.app = n),
          (this.authTokenProvider_ = r),
          (this.dataUpdateCount = 0),
          (this.statsListener_ = null),
          (this.eventQueue_ = new Ur()),
          (this.nextWriteId_ = 1),
          (this.interceptServerDataCallback_ = null),
          (this.onDisconnect_ = new Wn()),
          (this.persistentConnection_ = null),
          (this.key = this.repoInfo_.toURLString());
      }
      var Ni =
        ((Ri.prototype.getStartPost = function () {
          return this.startPost_;
        }),
        (Ri.prototype.getEndPost = function () {
          return this.endPost_;
        }),
        (Ri.prototype.matches = function (t) {
          return (
            this.index_.compare(this.getStartPost(), t) <= 0 &&
            this.index_.compare(t, this.getEndPost()) <= 0
          );
        }),
        (Ri.prototype.updateChild = function (t, e, n, r, i, o) {
          return (
            this.matches(new ge(e, n)) || (n = en.EMPTY_NODE),
            this.indexedFilter_.updateChild(t, e, n, r, i, o)
          );
        }),
        (Ri.prototype.updateFullNode = function (t, e, n) {
          e.isLeafNode() && (e = en.EMPTY_NODE);
          var r = (r = e.withIndex(this.index_)).updatePriority(en.EMPTY_NODE),
            i = this;
          return (
            e.forEachChild(Fe, function (t, e) {
              i.matches(new ge(t, e)) ||
                (r = r.updateImmediateChild(t, en.EMPTY_NODE));
            }),
            this.indexedFilter_.updateFullNode(t, r, n)
          );
        }),
        (Ri.prototype.updatePriority = function (t, e) {
          return t;
        }),
        (Ri.prototype.filtersNodes = function () {
          return !0;
        }),
        (Ri.prototype.getIndexedFilter = function () {
          return this.indexedFilter_;
        }),
        (Ri.prototype.getIndex = function () {
          return this.index_;
        }),
        (Ri.getStartPost_ = function (t) {
          if (t.hasStart()) {
            var e = t.getIndexStartName();
            return t.getIndex().makePost(t.getIndexStartValue(), e);
          }
          return t.getIndex().minPost();
        }),
        (Ri.getEndPost_ = function (t) {
          if (t.hasEnd()) {
            var e = t.getIndexEndName();
            return t.getIndex().makePost(t.getIndexEndValue(), e);
          }
          return t.getIndex().maxPost();
        }),
        Ri);
      function Ri(t) {
        (this.indexedFilter_ = new or(t.getIndex())),
          (this.index_ = t.getIndex()),
          (this.startPost_ = Ri.getStartPost_(t)),
          (this.endPost_ = Ri.getEndPost_(t));
      }
      var Pi =
        ((Di.prototype.updateChild = function (t, e, n, r, i, o) {
          return (
            this.rangedFilter_.matches(new ge(e, n)) || (n = en.EMPTY_NODE),
            t.getImmediateChild(e).equals(n)
              ? t
              : t.numChildren() < this.limit_
              ? this.rangedFilter_
                  .getIndexedFilter()
                  .updateChild(t, e, n, r, i, o)
              : this.fullLimitUpdateChild_(t, e, n, i, o)
          );
        }),
        (Di.prototype.updateFullNode = function (t, e, n) {
          var r;
          if (e.isLeafNode() || e.isEmpty())
            r = en.EMPTY_NODE.withIndex(this.index_);
          else if (
            2 * this.limit_ < e.numChildren() &&
            e.isIndexed(this.index_)
          ) {
            r = en.EMPTY_NODE.withIndex(this.index_);
            var i = void 0;
            i = this.reverse_
              ? e.getReverseIteratorFrom(
                  this.rangedFilter_.getEndPost(),
                  this.index_
                )
              : e.getIteratorFrom(
                  this.rangedFilter_.getStartPost(),
                  this.index_
                );
            for (var o = 0; i.hasNext() && o < this.limit_; ) {
              var s = i.getNext();
              if (
                !(this.reverse_
                  ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <=
                    0
                  : this.index_.compare(s, this.rangedFilter_.getEndPost()) <=
                    0)
              )
                break;
              (r = r.updateImmediateChild(s.name, s.node)), o++;
            }
          } else {
            r = (r = e.withIndex(this.index_)).updatePriority(en.EMPTY_NODE);
            var a,
              h = void 0,
              l = void 0,
              u = void 0,
              i = void 0;
            u = this.reverse_
              ? ((i = r.getReverseIterator(this.index_)),
                (h = this.rangedFilter_.getEndPost()),
                (l = this.rangedFilter_.getStartPost()),
                (a = this.index_.getCompare()),
                function (t, e) {
                  return a(e, t);
                })
              : ((i = r.getIterator(this.index_)),
                (h = this.rangedFilter_.getStartPost()),
                (l = this.rangedFilter_.getEndPost()),
                this.index_.getCompare());
            for (var o = 0, c = !1; i.hasNext(); ) {
              s = i.getNext();
              !c && u(h, s) <= 0 && (c = !0),
                c && o < this.limit_ && u(s, l) <= 0
                  ? o++
                  : (r = r.updateImmediateChild(s.name, en.EMPTY_NODE));
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n);
        }),
        (Di.prototype.updatePriority = function (t, e) {
          return t;
        }),
        (Di.prototype.filtersNodes = function () {
          return !0;
        }),
        (Di.prototype.getIndexedFilter = function () {
          return this.rangedFilter_.getIndexedFilter();
        }),
        (Di.prototype.getIndex = function () {
          return this.index_;
        }),
        (Di.prototype.fullLimitUpdateChild_ = function (t, e, n, r, i) {
          var o, s;
          s = this.reverse_
            ? ((o = this.index_.getCompare()),
              function (t, e) {
                return o(e, t);
              })
            : this.index_.getCompare();
          var a = t;
          y(a.numChildren() === this.limit_, '');
          var h = new ge(e, n),
            l = this.reverse_
              ? a.getFirstChild(this.index_)
              : a.getLastChild(this.index_),
            u = this.rangedFilter_.matches(h);
          if (a.hasChild(e)) {
            for (
              var c = a.getImmediateChild(e),
                p = r.getChildAfterChild(this.index_, l, this.reverse_);
              null != p && (p.name === e || a.hasChild(p.name));

            )
              p = r.getChildAfterChild(this.index_, p, this.reverse_);
            var d = null == p ? 1 : s(p, h);
            if (u && !n.isEmpty() && 0 <= d)
              return (
                null != i && i.trackChildChange(rr.childChangedChange(e, n, c)),
                a.updateImmediateChild(e, n)
              );
            null != i && i.trackChildChange(rr.childRemovedChange(e, c));
            c = a.updateImmediateChild(e, en.EMPTY_NODE);
            return null != p && this.rangedFilter_.matches(p)
              ? (null != i &&
                  i.trackChildChange(rr.childAddedChange(p.name, p.node)),
                c.updateImmediateChild(p.name, p.node))
              : c;
          }
          return !n.isEmpty() && u && 0 <= s(l, h)
            ? (null != i &&
                (i.trackChildChange(rr.childRemovedChange(l.name, l.node)),
                i.trackChildChange(rr.childAddedChange(e, n))),
              a
                .updateImmediateChild(e, n)
                .updateImmediateChild(l.name, en.EMPTY_NODE))
            : t;
        }),
        Di);
      function Di(t) {
        (this.rangedFilter_ = new Ni(t)),
          (this.index_ = t.getIndex()),
          (this.limit_ = t.getLimit()),
          (this.reverse_ = !t.isViewFromLeft());
      }
      var Oi =
        ((xi.prototype.hasStart = function () {
          return this.startSet_;
        }),
        (xi.prototype.isViewFromLeft = function () {
          return '' === this.viewFrom_
            ? this.startSet_
            : this.viewFrom_ === xi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
        }),
        (xi.prototype.getIndexStartValue = function () {
          return (
            y(this.startSet_, 'Only valid if start has been set'),
            this.indexStartValue_
          );
        }),
        (xi.prototype.getIndexStartName = function () {
          return (
            y(this.startSet_, 'Only valid if start has been set'),
            this.startNameSet_ ? this.indexStartName_ : Nt
          );
        }),
        (xi.prototype.hasEnd = function () {
          return this.endSet_;
        }),
        (xi.prototype.getIndexEndValue = function () {
          return (
            y(this.endSet_, 'Only valid if end has been set'),
            this.indexEndValue_
          );
        }),
        (xi.prototype.getIndexEndName = function () {
          return (
            y(this.endSet_, 'Only valid if end has been set'),
            this.endNameSet_ ? this.indexEndName_ : Rt
          );
        }),
        (xi.prototype.hasLimit = function () {
          return this.limitSet_;
        }),
        (xi.prototype.hasAnchoredLimit = function () {
          return this.limitSet_ && '' !== this.viewFrom_;
        }),
        (xi.prototype.getLimit = function () {
          return (
            y(this.limitSet_, 'Only valid if limit has been set'), this.limit_
          );
        }),
        (xi.prototype.getIndex = function () {
          return this.index_;
        }),
        (xi.prototype.copy_ = function () {
          var t = new xi();
          return (
            (t.limitSet_ = this.limitSet_),
            (t.limit_ = this.limit_),
            (t.startSet_ = this.startSet_),
            (t.indexStartValue_ = this.indexStartValue_),
            (t.startNameSet_ = this.startNameSet_),
            (t.indexStartName_ = this.indexStartName_),
            (t.endSet_ = this.endSet_),
            (t.indexEndValue_ = this.indexEndValue_),
            (t.endNameSet_ = this.endNameSet_),
            (t.indexEndName_ = this.indexEndName_),
            (t.index_ = this.index_),
            (t.viewFrom_ = this.viewFrom_),
            t
          );
        }),
        (xi.prototype.limit = function (t) {
          var e = this.copy_();
          return (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ''), e;
        }),
        (xi.prototype.limitToFirst = function (t) {
          var e = this.copy_();
          return (
            (e.limitSet_ = !0),
            (e.limit_ = t),
            (e.viewFrom_ = xi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
            e
          );
        }),
        (xi.prototype.limitToLast = function (t) {
          var e = this.copy_();
          return (
            (e.limitSet_ = !0),
            (e.limit_ = t),
            (e.viewFrom_ = xi.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
            e
          );
        }),
        (xi.prototype.startAt = function (t, e) {
          var n = this.copy_();
          return (
            (n.startSet_ = !0),
            void 0 === t && (t = null),
            (n.indexStartValue_ = t),
            null != e
              ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
              : ((n.startNameSet_ = !1), (n.indexStartName_ = '')),
            n
          );
        }),
        (xi.prototype.endAt = function (t, e) {
          var n = this.copy_();
          return (
            (n.endSet_ = !0),
            void 0 === t && (t = null),
            (n.indexEndValue_ = t),
            void 0 !== e
              ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
              : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
            n
          );
        }),
        (xi.prototype.orderBy = function (t) {
          var e = this.copy_();
          return (e.index_ = t), e;
        }),
        (xi.prototype.getQueryObject = function () {
          var t,
            e = xi.WIRE_PROTOCOL_CONSTANTS_,
            n = {};
          return (
            this.startSet_ &&
              ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
              this.startNameSet_ &&
                (n[e.INDEX_START_NAME] = this.indexStartName_)),
            this.endSet_ &&
              ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
              this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)),
            this.limitSet_ &&
              ((n[e.LIMIT] = this.limit_),
              '' === (t = this.viewFrom_) &&
                (t = this.isViewFromLeft()
                  ? e.VIEW_FROM_LEFT
                  : e.VIEW_FROM_RIGHT),
              (n[e.VIEW_FROM] = t)),
            this.index_ !== Fe && (n[e.INDEX] = this.index_.toString()),
            n
          );
        }),
        (xi.prototype.loadsAllData = function () {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }),
        (xi.prototype.isDefault = function () {
          return this.loadsAllData() && this.index_ === Fe;
        }),
        (xi.prototype.getNodeFilter = function () {
          return this.loadsAllData()
            ? new or(this.getIndex())
            : new (this.hasLimit() ? Pi : Ni)(this);
        }),
        (xi.prototype.toRestQueryStringParameters = function () {
          var t,
            e = xi.REST_QUERY_CONSTANTS_,
            n = {};
          return (
            this.isDefault() ||
              ((t =
                this.index_ === Fe
                  ? e.PRIORITY_INDEX
                  : this.index_ === cn
                  ? e.VALUE_INDEX
                  : this.index_ === Te
                  ? e.KEY_INDEX
                  : (y(this.index_ instanceof pn, 'Unrecognized index type!'),
                    this.index_.toString())),
              (n[e.ORDER_BY] = P(t)),
              this.startSet_ &&
                ((n[e.START_AT] = P(this.indexStartValue_)),
                this.startNameSet_ &&
                  (n[e.START_AT] += ',' + P(this.indexStartName_))),
              this.endSet_ &&
                ((n[e.END_AT] = P(this.indexEndValue_)),
                this.endNameSet_ &&
                  (n[e.END_AT] += ',' + P(this.indexEndName_))),
              this.limitSet_ &&
                (this.isViewFromLeft()
                  ? (n[e.LIMIT_TO_FIRST] = this.limit_)
                  : (n[e.LIMIT_TO_LAST] = this.limit_))),
            n
          );
        }),
        (xi.WIRE_PROTOCOL_CONSTANTS_ = {
          INDEX_START_VALUE: 'sp',
          INDEX_START_NAME: 'sn',
          INDEX_END_VALUE: 'ep',
          INDEX_END_NAME: 'en',
          LIMIT: 'l',
          VIEW_FROM: 'vf',
          VIEW_FROM_LEFT: 'l',
          VIEW_FROM_RIGHT: 'r',
          INDEX: 'i'
        }),
        (xi.REST_QUERY_CONSTANTS_ = {
          ORDER_BY: 'orderBy',
          PRIORITY_INDEX: '$priority',
          VALUE_INDEX: '$value',
          KEY_INDEX: '$key',
          START_AT: 'startAt',
          END_AT: 'endAt',
          LIMIT_TO_FIRST: 'limitToFirst',
          LIMIT_TO_LAST: 'limitToLast'
        }),
        (xi.DEFAULT = new xi()),
        xi);
      function xi() {
        (this.limitSet_ = !1),
          (this.startSet_ = !1),
          (this.startNameSet_ = !1),
          (this.endSet_ = !1),
          (this.endNameSet_ = !1),
          (this.limit_ = 0),
          (this.viewFrom_ = ''),
          (this.indexStartValue_ = null),
          (this.indexStartName_ = ''),
          (this.indexEndValue_ = null),
          (this.indexEndName_ = ''),
          (this.index_ = Fe);
      }
      var ki,
        Ai =
          (n(Fi, (ki = Tn)),
          (Fi.prototype.getKey = function () {
            return (
              M('Reference.key', 0, 0, arguments.length),
              this.path.isEmpty() ? null : this.path.getBack()
            );
          }),
          (Fi.prototype.child = function (t) {
            var e, n, r, i;
            return (
              M('Reference.child', 1, 1, arguments.length),
              'number' == typeof t
                ? (t = String(t))
                : t instanceof Mt ||
                  (null === this.path.getFront()
                    ? ((e = 'Reference.child'),
                      (i = !(n = 1)),
                      (r = (r = t) && r.replace(/^\/*\.info(\/|$)/, '/')),
                      ee(e, n, r, i))
                    : ee('Reference.child', 1, t, !1)),
              new Fi(this.repo, this.path.child(t))
            );
          }),
          (Fi.prototype.getParent = function () {
            M('Reference.parent', 0, 0, arguments.length);
            var t = this.path.parent();
            return null === t ? null : new Fi(this.repo, t);
          }),
          (Fi.prototype.getRoot = function () {
            M('Reference.root', 0, 0, arguments.length);
            for (var t = this; null !== t.getParent(); ) t = t.getParent();
            return t;
          }),
          (Fi.prototype.databaseProp = function () {
            return this.repo.database;
          }),
          (Fi.prototype.set = function (t, e) {
            M('Reference.set', 1, 2, arguments.length),
              ne('Reference.set', this.path),
              Xt('Reference.set', 1, t, this.path, !1),
              q('Reference.set', 2, e, !0);
            var n = new g();
            return (
              this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)),
              n.promise
            );
          }),
          (Fi.prototype.update = function (t, e) {
            if (
              (M('Reference.update', 1, 2, arguments.length),
              ne('Reference.update', this.path),
              Array.isArray(t))
            ) {
              for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r];
              (t = n),
                ct(
                  'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                );
            }
            $t('Reference.update', 1, t, this.path, !1),
              q('Reference.update', 2, e, !0);
            var i = new g();
            return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise;
          }),
          (Fi.prototype.setWithPriority = function (t, e, n) {
            if (
              (M('Reference.setWithPriority', 2, 3, arguments.length),
              ne('Reference.setWithPriority', this.path),
              Xt('Reference.setWithPriority', 1, t, this.path, !1),
              Jt('Reference.setWithPriority', 2, e, !1),
              q('Reference.setWithPriority', 3, n, !0),
              '.length' === this.getKey() || '.keys' === this.getKey())
            )
              throw (
                'Reference.setWithPriority failed: ' +
                this.getKey() +
                ' is a read-only object.'
              );
            var r = new g();
            return (
              this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)),
              r.promise
            );
          }),
          (Fi.prototype.remove = function (t) {
            return (
              M('Reference.remove', 0, 1, arguments.length),
              ne('Reference.remove', this.path),
              q('Reference.remove', 1, t, !0),
              this.set(null, t)
            );
          }),
          (Fi.prototype.transaction = function (t, r, e) {
            if (
              (M('Reference.transaction', 1, 3, arguments.length),
              ne('Reference.transaction', this.path),
              q('Reference.transaction', 1, t, !1),
              q('Reference.transaction', 2, r, !0),
              (function (t, e, n, r) {
                if ((!r || void 0 !== n) && 'boolean' != typeof n)
                  throw new Error(W(t, e, r) + 'must be a boolean.');
              })('Reference.transaction', 3, e, !0),
              '.length' === this.getKey() || '.keys' === this.getKey())
            )
              throw (
                'Reference.transaction failed: ' +
                this.getKey() +
                ' is a read-only object.'
              );
            void 0 === e && (e = !0);
            var i = new g();
            'function' == typeof r && i.promise.catch(function () {});
            return (
              this.repo.startTransaction(
                this.path,
                t,
                function (t, e, n) {
                  t ? i.reject(t) : i.resolve(new ce(e, n)),
                    'function' == typeof r && r(t, e, n);
                },
                e
              ),
              i.promise
            );
          }),
          (Fi.prototype.setPriority = function (t, e) {
            M('Reference.setPriority', 1, 2, arguments.length),
              ne('Reference.setPriority', this.path),
              Jt('Reference.setPriority', 1, t, !1),
              q('Reference.setPriority', 2, e, !0);
            var n = new g();
            return (
              this.repo.setWithPriority(
                this.path.child('.priority'),
                t,
                null,
                n.wrapCallback(e)
              ),
              n.promise
            );
          }),
          (Fi.prototype.push = function (t, e) {
            M('Reference.push', 0, 2, arguments.length),
              ne('Reference.push', this.path),
              Xt('Reference.push', 1, t, this.path, !0),
              q('Reference.push', 2, e, !0);
            var n = this.repo.serverTime(),
              r = ye(n),
              n = this.child(r),
              i = this.child(r),
              t =
                null != t
                  ? n.set(t, e).then(function () {
                      return i;
                    })
                  : Promise.resolve(i);
            return (
              (n.then = t.then.bind(t)),
              (n.catch = t.then.bind(t, void 0)),
              'function' == typeof e && t.catch(function () {}),
              n
            );
          }),
          (Fi.prototype.onDisconnect = function () {
            return (
              ne('Reference.onDisconnect', this.path),
              new le(this.repo, this.path)
            );
          }),
          Object.defineProperty(Fi.prototype, 'database', {
            get: function () {
              return this.databaseProp();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Fi.prototype, 'key', {
            get: function () {
              return this.getKey();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Fi.prototype, 'parent', {
            get: function () {
              return this.getParent();
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(Fi.prototype, 'root', {
            get: function () {
              return this.getRoot();
            },
            enumerable: !1,
            configurable: !0
          }),
          Fi);
      function Fi(t, e) {
        if (!(t instanceof Ti))
          throw new Error(
            'new Reference() no longer supported - use app.database().'
          );
        return ki.call(this, t, e, Oi.DEFAULT, !1) || this;
      }
      (Tn.__referenceConstructor = Ai), (Er.__referenceConstructor = Ai);
      var Li,
        Mi = function () {
          (this.children = {}), (this.childCount = 0), (this.value = null);
        },
        Wi =
          ((qi.prototype.subTree = function (t) {
            for (
              var e = t instanceof Mt ? t : new Mt(t),
                n = this,
                r = e.getFront();
              null !== r;

            )
              (n = new qi(r, n, x(n.node_.children, r) || new Mi())),
                (r = (e = e.popFront()).getFront());
            return n;
          }),
          (qi.prototype.getValue = function () {
            return this.node_.value;
          }),
          (qi.prototype.setValue = function (t) {
            y(void 0 !== t, 'Cannot set value to undefined'),
              (this.node_.value = t),
              this.updateParents_();
          }),
          (qi.prototype.clear = function () {
            (this.node_.value = null),
              (this.node_.children = {}),
              (this.node_.childCount = 0),
              this.updateParents_();
          }),
          (qi.prototype.hasChildren = function () {
            return 0 < this.node_.childCount;
          }),
          (qi.prototype.isEmpty = function () {
            return null === this.getValue() && !this.hasChildren();
          }),
          (qi.prototype.forEachChild = function (n) {
            var r = this;
            Ot(this.node_.children, function (t, e) {
              n(new qi(t, r, e));
            });
          }),
          (qi.prototype.forEachDescendant = function (e, t, n) {
            t && !n && e(this),
              this.forEachChild(function (t) {
                t.forEachDescendant(e, !0, n);
              }),
              t && n && e(this);
          }),
          (qi.prototype.forEachAncestor = function (t, e) {
            for (var n = e ? this : this.parent(); null !== n; ) {
              if (t(n)) return !0;
              n = n.parent();
            }
            return !1;
          }),
          (qi.prototype.forEachImmediateDescendantWithValue = function (e) {
            this.forEachChild(function (t) {
              null !== t.getValue()
                ? e(t)
                : t.forEachImmediateDescendantWithValue(e);
            });
          }),
          (qi.prototype.path = function () {
            return new Mt(
              null === this.parent_
                ? this.name_
                : this.parent_.path() + '/' + this.name_
            );
          }),
          (qi.prototype.name = function () {
            return this.name_;
          }),
          (qi.prototype.parent = function () {
            return this.parent_;
          }),
          (qi.prototype.updateParents_ = function () {
            null !== this.parent_ &&
              this.parent_.updateChild_(this.name_, this);
          }),
          (qi.prototype.updateChild_ = function (t, e) {
            var n = e.isEmpty(),
              r = O(this.node_.children, t);
            n && r
              ? (delete this.node_.children[t],
                this.node_.childCount--,
                this.updateParents_())
              : n ||
                r ||
                ((this.node_.children[t] = e.node_),
                this.node_.childCount++,
                this.updateParents_());
          }),
          qi);
      function qi(t, e, n) {
        void 0 === t && (t = ''),
          void 0 === e && (e = null),
          void 0 === n && (n = new Mi()),
          (this.name_ = t),
          (this.parent_ = e),
          (this.node_ = n);
      }
      ((Ce = Li = Li || {})[(Ce.RUN = 0)] = 'RUN'),
        (Ce[(Ce.SENT = 1)] = 'SENT'),
        (Ce[(Ce.COMPLETED = 2)] = 'COMPLETED'),
        (Ce[(Ce.SENT_NEEDS_ABORT = 3)] = 'SENT_NEEDS_ABORT'),
        (Ce[(Ce.NEEDS_ABORT = 4)] = 'NEEDS_ABORT'),
        (Ti.MAX_TRANSACTION_RETRIES_ = 25),
        (Ti.prototype.transactionsInit_ = function () {
          this.transactionQueueTree_ = new Wi();
        }),
        (Ti.prototype.startTransaction = function (t, e, n, r) {
          this.log_('transaction on ' + t);
          function i() {}
          var o = new Ai(this, t);
          o.on('value', i);
          var s = {
              path: t,
              update: e,
              onComplete: n,
              status: null,
              order: Et(),
              applyLocally: r,
              retryCount: 0,
              unwatcher: function () {
                o.off('value', i);
              },
              abortReason: null,
              currentWriteId: null,
              currentInputSnapshot: null,
              currentOutputSnapshotRaw: null,
              currentOutputSnapshotResolved: null
            },
            e = this.getLatestState_(t);
          s.currentInputSnapshot = e;
          var a,
            n = s.update(e.val());
          void 0 === n
            ? (s.unwatcher(),
              (s.currentOutputSnapshotRaw = null),
              (s.currentOutputSnapshotResolved = null),
              s.onComplete &&
                ((a = new fn(s.currentInputSnapshot, new Ai(this, s.path), Fe)),
                s.onComplete(null, !1, a)))
            : (he('transaction failed: Data returned ', n, s.path),
              (s.status = Li.RUN),
              (a =
                (r = this.transactionQueueTree_.subTree(t)).getValue() ||
                []).push(s),
              r.setValue(a),
              (r = void 0),
              'object' == typeof n && null !== n && O(n, '.priority')
                ? ((r = x(n, '.priority')),
                  y(
                    Gt(r),
                    'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
                  ))
                : (r = (
                    this.serverSyncTree_.calcCompleteEventCache(t) ||
                    en.EMPTY_NODE
                  )
                    .getPriority()
                    .val()),
              (a = this.generateServerValues()),
              (r = hn(n, r)),
              (a = xn(r, e, a)),
              (s.currentOutputSnapshotRaw = r),
              (s.currentOutputSnapshotResolved = a),
              (s.currentWriteId = this.getNextWriteId_()),
              (s = this.serverSyncTree_.applyUserOverwrite(
                t,
                a,
                s.currentWriteId,
                s.applyLocally
              )),
              this.eventQueue_.raiseEventsForChangedPath(t, s),
              this.sendReadyTransactions_());
        }),
        (Ti.prototype.getLatestState_ = function (t, e) {
          return (
            this.serverSyncTree_.calcCompleteEventCache(t, e) || en.EMPTY_NODE
          );
        }),
        (Ti.prototype.sendReadyTransactions_ = function (t) {
          var e,
            n = this;
          void 0 === t && (t = this.transactionQueueTree_),
            t || this.pruneCompletedTransactionsBelowNode_(t),
            null !== t.getValue()
              ? ((e = this.buildTransactionQueue_(t)),
                y(0 < e.length, 'Sending zero length transaction queue'),
                e.every(function (t) {
                  return t.status === Li.RUN;
                }) && this.sendTransactionQueue_(t.path(), e))
              : t.hasChildren() &&
                t.forEachChild(function (t) {
                  n.sendReadyTransactions_(t);
                });
        }),
        (Ti.prototype.sendTransactionQueue_ = function (s, a) {
          for (
            var h = this,
              t = a.map(function (t) {
                return t.currentWriteId;
              }),
              e = this.getLatestState_(s, t),
              n = e,
              t = e.hash(),
              r = 0;
            r < a.length;
            r++
          ) {
            var i = a[r];
            y(
              i.status === Li.RUN,
              'tryToSendTransactionQueue_: items in queue should all be run.'
            ),
              (i.status = Li.SENT),
              i.retryCount++;
            var o = Mt.relativePath(s, i.path),
              n = n.updateChild(o, i.currentOutputSnapshotRaw);
          }
          var e = n.val(!0),
            l = s;
          this.server_.put(
            l.toString(),
            e,
            function (t) {
              h.log_('transaction put response', {
                path: l.toString(),
                status: t
              });
              var e = [];
              if ('ok' === t) {
                for (var n, r, i = [], o = 0; o < a.length; o++) {
                  (a[o].status = Li.COMPLETED),
                    (e = e.concat(
                      h.serverSyncTree_.ackUserWrite(a[o].currentWriteId)
                    )),
                    a[o].onComplete &&
                      ((n = a[o].currentOutputSnapshotResolved),
                      (r = new Ai(h, a[o].path)),
                      (r = new fn(n, r, Fe)),
                      i.push(a[o].onComplete.bind(null, null, !0, r))),
                    a[o].unwatcher();
                }
                h.pruneCompletedTransactionsBelowNode_(
                  h.transactionQueueTree_.subTree(s)
                ),
                  h.sendReadyTransactions_(),
                  h.eventQueue_.raiseEventsForChangedPath(s, e);
                for (o = 0; o < i.length; o++) kt(i[o]);
              } else {
                if ('datastale' === t)
                  for (o = 0; o < a.length; o++)
                    a[o].status === Li.SENT_NEEDS_ABORT
                      ? (a[o].status = Li.NEEDS_ABORT)
                      : (a[o].status = Li.RUN);
                else {
                  ct('transaction at ' + l.toString() + ' failed: ' + t);
                  for (o = 0; o < a.length; o++)
                    (a[o].status = Li.NEEDS_ABORT), (a[o].abortReason = t);
                }
                h.rerunTransactions_(s);
              }
            },
            t
          );
        }),
        (Ti.prototype.rerunTransactions_ = function (t) {
          var e = this.getAncestorTransactionNode_(t),
            t = e.path(),
            e = this.buildTransactionQueue_(e);
          return this.rerunTransactionQueue_(e, t), t;
        }),
        (Ti.prototype.rerunTransactionQueue_ = function (t, e) {
          if (0 !== t.length) {
            for (
              var n = [],
                r = [],
                i = t
                  .filter(function (t) {
                    return t.status === Li.RUN;
                  })
                  .map(function (t) {
                    return t.currentWriteId;
                  }),
                o = 0;
              o < t.length;
              o++
            ) {
              var s,
                a,
                h,
                l = t[o],
                u = Mt.relativePath(e, l.path),
                c = !1,
                p = void 0;
              y(
                null !== u,
                'rerunTransactionsUnderNode_: relativePath should not be null.'
              ),
                l.status === Li.NEEDS_ABORT
                  ? ((c = !0),
                    (p = l.abortReason),
                    (r = r.concat(
                      this.serverSyncTree_.ackUserWrite(l.currentWriteId, !0)
                    )))
                  : l.status === Li.RUN &&
                    (r =
                      l.retryCount >= Ti.MAX_TRANSACTION_RETRIES_
                        ? ((c = !0),
                          (p = 'maxretry'),
                          r.concat(
                            this.serverSyncTree_.ackUserWrite(
                              l.currentWriteId,
                              !0
                            )
                          ))
                        : ((s = this.getLatestState_(l.path, i)),
                          (l.currentInputSnapshot = s),
                          void 0 !== (h = t[o].update(s.val()))
                            ? (he(
                                'transaction failed: Data returned ',
                                h,
                                l.path
                              ),
                              (a = hn(h)),
                              ('object' == typeof h &&
                                null != h &&
                                O(h, '.priority')) ||
                                (a = a.updatePriority(s.getPriority())),
                              (u = l.currentWriteId),
                              (h = this.generateServerValues()),
                              (h = xn(a, s, h)),
                              (l.currentOutputSnapshotRaw = a),
                              (l.currentOutputSnapshotResolved = h),
                              (l.currentWriteId = this.getNextWriteId_()),
                              i.splice(i.indexOf(u), 1),
                              (r = r.concat(
                                this.serverSyncTree_.applyUserOverwrite(
                                  l.path,
                                  h,
                                  l.currentWriteId,
                                  l.applyLocally
                                )
                              )).concat(
                                this.serverSyncTree_.ackUserWrite(u, !0)
                              ))
                            : ((c = !0),
                              (p = 'nodata'),
                              r.concat(
                                this.serverSyncTree_.ackUserWrite(
                                  l.currentWriteId,
                                  !0
                                )
                              )))),
                this.eventQueue_.raiseEventsForChangedPath(e, r),
                (r = []),
                c &&
                  ((t[o].status = Li.COMPLETED),
                  (l = t[o].unwatcher),
                  setTimeout(l, Math.floor(0)),
                  t[o].onComplete &&
                    ('nodata' === p
                      ? ((c = new Ai(this, t[o].path)),
                        (l = t[o].currentInputSnapshot),
                        (c = new fn(l, c, Fe)),
                        n.push(t[o].onComplete.bind(null, null, !1, c)))
                      : n.push(
                          t[o].onComplete.bind(null, new Error(p), !1, null)
                        )));
            }
            this.pruneCompletedTransactionsBelowNode_(
              this.transactionQueueTree_
            );
            for (o = 0; o < n.length; o++) kt(n[o]);
            this.sendReadyTransactions_();
          }
        }),
        (Ti.prototype.getAncestorTransactionNode_ = function (t) {
          for (
            var e = this.transactionQueueTree_, n = t.getFront();
            null !== n && null === e.getValue();

          )
            (e = e.subTree(n)), (n = (t = t.popFront()).getFront());
          return e;
        }),
        (Ti.prototype.buildTransactionQueue_ = function (t) {
          var e = [];
          return (
            this.aggregateTransactionQueuesForNode_(t, e),
            e.sort(function (t, e) {
              return t.order - e.order;
            }),
            e
          );
        }),
        (Ti.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
          var n = this,
            r = t.getValue();
          if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i]);
          t.forEachChild(function (t) {
            n.aggregateTransactionQueuesForNode_(t, e);
          });
        }),
        (Ti.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
          var e = this,
            n = t.getValue();
          if (n) {
            for (var r = 0, i = 0; i < n.length; i++)
              n[i].status !== Li.COMPLETED && ((n[r] = n[i]), r++);
            (n.length = r), t.setValue(0 < n.length ? n : null);
          }
          t.forEachChild(function (t) {
            e.pruneCompletedTransactionsBelowNode_(t);
          });
        }),
        (Ti.prototype.abortTransactions_ = function (t) {
          var e = this,
            n = this.getAncestorTransactionNode_(t).path(),
            t = this.transactionQueueTree_.subTree(t);
          return (
            t.forEachAncestor(function (t) {
              e.abortTransactionsOnNode_(t);
            }),
            this.abortTransactionsOnNode_(t),
            t.forEachDescendant(function (t) {
              e.abortTransactionsOnNode_(t);
            }),
            n
          );
        }),
        (Ti.prototype.abortTransactionsOnNode_ = function (t) {
          var e = t.getValue();
          if (null !== e) {
            for (var n = [], r = [], i = -1, o = 0; o < e.length; o++) {
              e[o].status === Li.SENT_NEEDS_ABORT ||
                (e[o].status === Li.SENT
                  ? (y(
                      i === o - 1,
                      'All SENT items should be at beginning of queue.'
                    ),
                    (e[(i = o)].status = Li.SENT_NEEDS_ABORT),
                    (e[o].abortReason = 'set'))
                  : (y(
                      e[o].status === Li.RUN,
                      'Unexpected transaction status in abort'
                    ),
                    e[o].unwatcher(),
                    (r = r.concat(
                      this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)
                    )),
                    e[o].onComplete &&
                      n.push(
                        e[o].onComplete.bind(null, new Error('set'), !1, null)
                      )));
            }
            -1 === i ? t.setValue(null) : (e.length = i + 1),
              this.eventQueue_.raiseEventsForChangedPath(t.path(), r);
            for (o = 0; o < n.length; o++) kt(n[o]);
          }
        });
      var Qi =
        ((Ui.prototype.getToken = function (t) {
          return this.auth_
            ? this.auth_.getToken(t).catch(function (t) {
                return t && 'auth/token-not-initialized' === t.code
                  ? (Tt(
                      'Got auth/token-not-initialized error.  Treating as null token.'
                    ),
                    null)
                  : Promise.reject(t);
              })
            : Promise.resolve(null);
        }),
        (Ui.prototype.addTokenChangeListener = function (e) {
          this.auth_
            ? this.auth_.addAuthTokenListener(e)
            : (setTimeout(function () {
                return e(null);
              }, 0),
              this.authProvider_.get().then(function (t) {
                return t.addAuthTokenListener(e);
              }));
        }),
        (Ui.prototype.removeTokenChangeListener = function (e) {
          this.authProvider_.get().then(function (t) {
            return t.removeAuthTokenListener(e);
          });
        }),
        (Ui.prototype.notifyForInvalidToken = function () {
          var t =
            'Provided authentication credentials for the app named "' +
            this.app_.name +
            '" are invalid. This usually indicates your app was not initialized correctly. ';
          'credential' in this.app_.options
            ? (t +=
                'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : 'serviceAccount' in this.app_.options
            ? (t +=
                'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : (t +=
                'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
            ct(t);
        }),
        Ui);
      function Ui(t, e) {
        var n = this;
        (this.app_ = t),
          (this.authProvider_ = e),
          (this.auth_ = null),
          (this.auth_ = e.getImmediate({ optional: !0 })),
          this.auth_ ||
            e.get().then(function (t) {
              return (n.auth_ = t);
            });
      }
      var Vi =
        ((Hi.prototype.getToken = function (t) {
          return Promise.resolve({ accessToken: Hi.EMULATOR_AUTH_TOKEN });
        }),
        (Hi.prototype.addTokenChangeListener = function (t) {
          t(Hi.EMULATOR_AUTH_TOKEN);
        }),
        (Hi.prototype.removeTokenChangeListener = function (t) {}),
        (Hi.prototype.notifyForInvalidToken = function () {}),
        (Hi.EMULATOR_AUTH_TOKEN = 'owner'),
        Hi);
      function Hi() {}
      var ji,
        Bi =
          ((zi.getInstance = function () {
            return (ji = ji || new zi());
          }),
          (zi.prototype.interrupt = function () {
            var e, t, n, r;
            try {
              for (
                var i = f(Object.keys(this.repos_)), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                try {
                  for (
                    var a = ((n = void 0), f(Object.keys(this.repos_[s]))),
                      h = a.next();
                    !h.done;
                    h = a.next()
                  ) {
                    var l = h.value;
                    this.repos_[s][l].interrupt();
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    h && !h.done && (r = a.return) && r.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (zi.prototype.resume = function () {
            var e, t, n, r;
            try {
              for (
                var i = f(Object.keys(this.repos_)), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                try {
                  for (
                    var a = ((n = void 0), f(Object.keys(this.repos_[s]))),
                      h = a.next();
                    !h.done;
                    h = a.next()
                  ) {
                    var l = h.value;
                    this.repos_[s][l].resume();
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    h && !h.done && (r = a.return) && r.call(a);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (zi.prototype.applyEmulatorSettings = function (t, e, n) {
            (t.repoInfo_ = new jt(
              e + ':' + n,
              !1,
              t.repoInfo_.namespace,
              t.repoInfo_.webSocketOnly,
              t.repoInfo_.nodeAdmin,
              t.repoInfo_.persistenceKey,
              t.repoInfo_.includeNamespaceInQueryParams
            )),
              t.repoInfo_.nodeAdmin && (t.authTokenProvider_ = new Vi());
          }),
          (zi.prototype.databaseFromApp = function (t, e, n, r) {
            var i = n || t.options.databaseURL;
            void 0 === i &&
              (t.options.projectId ||
                ut(
                  "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
                ),
              Tt('Using default host for project ', t.options.projectId),
              (i = t.options.projectId + '-default-rtdb.firebaseio.com'));
            var o,
              s = zt(i, r),
              a = s.repoInfo,
              n = void 0;
            'undefined' != typeof process &&
              (n = process.env.FIREBASE_DATABASE_EMULATOR_HOST),
              n
                ? ((o = !0),
                  (i = 'http://' + n + '?ns=' + a.namespace),
                  (a = (s = zt(i, r)).repoInfo))
                : (o = !s.repoInfo.secure);
            e = r && o ? new Vi() : new Qi(t, e);
            return (
              re('Invalid Firebase Database URL', 1, s),
              s.path.isEmpty() ||
                ut(
                  'Database URL must point to the root of a Firebase Database (not including a child path).'
                ),
              this.createRepo(a, t, e).database
            );
          }),
          (zi.prototype.deleteRepo = function (t) {
            var e = x(this.repos_, t.app.name);
            (e && x(e, t.key) === t) ||
              ut(
                'Database ' +
                  t.app.name +
                  '(' +
                  t.repoInfo_ +
                  ') has already been deleted.'
              ),
              t.interrupt(),
              delete e[t.key];
          }),
          (zi.prototype.createRepo = function (t, e, n) {
            var r = x(this.repos_, e.name);
            r || ((r = {}), (this.repos_[e.name] = r));
            var i = x(r, t.toURLString());
            return (
              i &&
                ut(
                  'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
                ),
              (i = new Ti(t, this.useRestClient_, e, n)),
              (r[t.toURLString()] = i)
            );
          }),
          (zi.prototype.forceRestClient = function (t) {
            this.useRestClient_ = t;
          }),
          zi);
      function zi() {
        (this.repos_ = {}), (this.useRestClient_ = !1);
      }
      var Ki =
        (Object.defineProperty(Yi.prototype, 'repo_', {
          get: function () {
            return (
              this.instanceStarted_ ||
                (this.repoInternal_.start(), (this.instanceStarted_ = !0)),
              this.repoInternal_
            );
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Yi.prototype, 'root_', {
          get: function () {
            return (
              this.rootInternal_ ||
                (this.rootInternal_ = new Ai(this.repo_, Mt.Empty)),
              this.rootInternal_
            );
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Yi.prototype, 'app', {
          get: function () {
            return this.repo_.app;
          },
          enumerable: !1,
          configurable: !0
        }),
        (Yi.prototype.useEmulator = function (t, e) {
          this.checkDeleted_('useEmulator'),
            this.instanceStarted_
              ? ut(
                  'Cannot call useEmulator() after instance has already been initialized.'
                )
              : Bi.getInstance().applyEmulatorSettings(
                  this.repoInternal_,
                  t,
                  e
                );
        }),
        (Yi.prototype.ref = function (t) {
          return (
            this.checkDeleted_('ref'),
            M('database.ref', 0, 1, arguments.length),
            t instanceof Ai
              ? this.refFromURL(t.toString())
              : void 0 !== t
              ? this.root_.child(t)
              : this.root_
          );
        }),
        (Yi.prototype.refFromURL = function (t) {
          var e = 'database.refFromURL';
          this.checkDeleted_(e), M(e, 1, 1, arguments.length);
          var n = zt(t, this.repo_.repoInfo_.nodeAdmin);
          re(e, 1, n);
          t = n.repoInfo;
          return (
            t.isCustomHost() ||
              t.host === this.repo_.repoInfo_.host ||
              ut(
                e +
                  ': Host name does not match the current database: (found ' +
                  t.host +
                  ' but expected ' +
                  this.repo_.repoInfo_.host +
                  ')'
              ),
            this.ref(n.path.toString())
          );
        }),
        (Yi.prototype.checkDeleted_ = function (t) {
          null === this.repoInternal_ &&
            ut('Cannot call ' + t + ' on a deleted database.');
        }),
        (Yi.prototype.goOffline = function () {
          M('database.goOffline', 0, 0, arguments.length),
            this.checkDeleted_('goOffline'),
            this.repo_.interrupt();
        }),
        (Yi.prototype.goOnline = function () {
          M('database.goOnline', 0, 0, arguments.length),
            this.checkDeleted_('goOnline'),
            this.repo_.resume();
        }),
        (Yi.ServerValue = {
          TIMESTAMP: { '.sv': 'timestamp' },
          increment: function (t) {
            return { '.sv': { increment: t } };
          }
        }),
        Yi);
      function Yi(t) {
        var e = this;
        (this.repoInternal_ = t),
          (this.instanceStarted_ = !1),
          (this.INTERNAL = {
            delete: function () {
              return i(e, void 0, void 0, function () {
                return o(this, function (t) {
                  return (
                    this.checkDeleted_('delete'),
                    Bi.getInstance().deleteRepo(this.repo_),
                    (this.repoInternal_ = null),
                    (this.rootInternal_ = null),
                    [2]
                  );
                });
              });
            }
          }),
          t instanceof Ti ||
            ut(
              "Don't call new Database() directly - please use firebase.database()."
            );
      }
      var Gi = Object.freeze({
          __proto__: null,
          forceLongPolling: function () {
            li.forceDisallow(), ni.forceAllow();
          },
          forceWebSockets: function () {
            ni.forceDisallow();
          },
          isWebSocketsAvailable: function () {
            return li.isAvailable();
          },
          setSecurityDebugCallback: function (t, e) {
            t.repo.persistentConnection_.securityDebugCallback_ = e;
          },
          stats: function (t, e) {
            t.repo.stats(e);
          },
          statsIncrementCounter: function (t, e) {
            t.repo.statsIncrementCounter(e);
          },
          dataUpdateCount: function (t) {
            return t.repo.dataUpdateCount;
          },
          interceptServerData: function (t, e) {
            return t.repo.interceptServerData_(e);
          },
          initStandalone: function (t) {
            var e = t.app,
              n = t.url,
              r = t.version,
              i = t.customAuthImpl,
              o = t.namespace,
              t = void 0 !== (t = t.nodeAdmin) && t;
            return (
              ai(r),
              (r = new Z(
                'auth-internal',
                new et('database-standalone')
              )).setComponent(
                new X(
                  'auth-internal',
                  function () {
                    return i;
                  },
                  'PRIVATE'
                )
              ),
              {
                instance: Bi.getInstance().databaseFromApp(e, r, n, t),
                namespace: o
              }
            );
          }
        }),
        Ce = mi;
      (mi.prototype.simpleListen = function (t, e) {
        this.sendRequest('q', { p: t }, e);
      }),
        (mi.prototype.echo = function (t, e) {
          this.sendRequest('echo', { d: t }, e);
        });
      var Xi,
        $i = Object.freeze({
          __proto__: null,
          DataConnection: Ce,
          RealTimeConnection: di,
          hijackHash: function (i) {
            var o = mi.prototype.put;
            return (
              (mi.prototype.put = function (t, e, n, r) {
                void 0 !== r && (r = i()), o.call(this, t, e, n, r);
              }),
              function () {
                mi.prototype.put = o;
              }
            );
          },
          ConnectionTarget: jt,
          queryIdentifier: function (t) {
            return t.queryIdentifier();
          },
          forceRestClient: function (t) {
            Bi.getInstance().forceRestClient(t);
          }
        }),
        Ji = Ki.ServerValue;
      ai((Xi = e.default).SDK_VERSION),
        Xi.INTERNAL.registerComponent(
          new X(
            'database',
            function (t, e) {
              var n = t.getProvider('app').getImmediate(),
                t = t.getProvider('auth-internal');
              return Bi.getInstance().databaseFromApp(n, t, e);
            },
            'PUBLIC'
          )
            .setServiceProps({
              Reference: Ai,
              Query: Tn,
              Database: Ki,
              DataSnapshot: fn,
              enableLogging: ht,
              INTERNAL: Gi,
              ServerValue: Ji,
              TEST_ACCESS: $i
            })
            .setMultipleInstances(!0)
        ),
        Xi.registerVersion('@firebase/database', '0.8.1');
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        'Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-database.js.map
