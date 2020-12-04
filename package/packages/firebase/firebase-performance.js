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
})(this, function (je) {
  'use strict';
  try {
    (function () {
      function t(t) {
        return t && 'object' == typeof t && 'default' in t ? t : { default: t };
      }
      var e = t(je),
        n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        };
      var a = function () {
        return (a =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function c(t, a, s, u) {
        return new (s = s || Promise)(function (n, e) {
          function r(t) {
            try {
              o(u.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(u.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof s
                  ? e
                  : new s(function (t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((u = u.apply(t, a || [])).next());
        });
      }
      function f(n, r) {
        var i,
          o,
          a,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
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
              for (; s; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (a =
                        2 & e[0]
                          ? o.return
                          : e[0]
                          ? o.throw || ((a = o.return) && a.call(o), 0)
                          : o.next) &&
                      !(a = a.call(o, e[1])).done)
                  )
                    return a;
                  switch (((o = 0), a && (e = [2 & e[0], a.value]), e[0])) {
                    case 0:
                    case 1:
                      a = e;
                      break;
                    case 4:
                      return s.label++, { value: e[1], done: !1 };
                    case 5:
                      s.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                        s.label = e[1];
                        break;
                      }
                      if (6 === e[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = e);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(e);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  e = r.call(n, s);
                } catch (t) {
                  (e = [6, t]), (o = 0);
                } finally {
                  i = a = 0;
                }
              if (5 & e[0]) throw e[1];
              return { value: e[0] ? e[1] : void 0, done: !0 };
            })([e, t]);
          };
        }
      }
      function s(t) {
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
      function r() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(
            (function (t, e) {
              var n = 'function' == typeof Symbol && t[Symbol.iterator];
              if (!n) return t;
              var r,
                i,
                o = n.call(t),
                a = [];
              try {
                for (; (void 0 === e || 0 < e--) && !(r = o.next()).done; )
                  a.push(r.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  r && !r.done && (n = o.return) && n.call(o);
                } finally {
                  if (i) throw i.error;
                }
              }
              return a;
            })(arguments[e])
          );
        return t;
      }
      function i() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      var o,
        u,
        l,
        p = 'FirebaseError',
        h =
          ((o = Error),
          n((u = g), (l = o)),
          (u.prototype =
            null === l
              ? Object.create(l)
              : ((d.prototype = l.prototype), new d())),
          g);
      function d() {
        this.constructor = u;
      }
      function g(t, e, n) {
        e = o.call(this, e) || this;
        return (
          (e.code = t),
          (e.customData = n),
          (e.name = p),
          Object.setPrototypeOf(e, g.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(e, v.prototype.create),
          e
        );
      }
      var v =
        ((m.prototype.create = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r,
            i = e[0] || {},
            o = this.service + '/' + t,
            t = this.errors[t],
            t = t
              ? ((r = i),
                t.replace(y, function (t, e) {
                  var n = r[e];
                  return null != n ? String(n) : '<' + e + '?>';
                }))
              : 'Error',
            t = this.serviceName + ': ' + t + ' (' + o + ').';
          return new h(o, t, i);
        }),
        m);
      function m(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var y = /\{\$([^}]+)}/g,
        b =
          ((_.prototype.setInstantiationMode = function (t) {
            return (this.instantiationMode = t), this;
          }),
          (_.prototype.setMultipleInstances = function (t) {
            return (this.multipleInstances = t), this;
          }),
          (_.prototype.setServiceProps = function (t) {
            return (this.serviceProps = t), this;
          }),
          _);
      function _(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      function w(n) {
        return new Promise(function (t, e) {
          (n.onsuccess = function () {
            t(n.result);
          }),
            (n.onerror = function () {
              e(n.error);
            });
        });
      }
      function I(n, r, i) {
        var o,
          t = new Promise(function (t, e) {
            w((o = n[r].apply(n, i))).then(t, e);
          });
        return (t.request = o), t;
      }
      function S(t, n, e) {
        e.forEach(function (e) {
          Object.defineProperty(t.prototype, e, {
            get: function () {
              return this[n][e];
            },
            set: function (t) {
              this[n][e] = t;
            }
          });
        });
      }
      function T(e, n, r, t) {
        t.forEach(function (t) {
          t in r.prototype &&
            (e.prototype[t] = function () {
              return I(this[n], t, arguments);
            });
        });
      }
      function E(e, n, r, t) {
        t.forEach(function (t) {
          t in r.prototype &&
            (e.prototype[t] = function () {
              return this[n][t].apply(this[n], arguments);
            });
        });
      }
      function A(t, r, e, n) {
        n.forEach(function (n) {
          n in e.prototype &&
            (t.prototype[n] = function () {
              return (
                (t = this[r]),
                (e = I(t, n, arguments)).then(function (t) {
                  if (t) return new k(t, e.request);
                })
              );
              var t, e;
            });
        });
      }
      function N(t) {
        this._index = t;
      }
      function k(t, e) {
        (this._cursor = t), (this._request = e);
      }
      function O(t) {
        this._store = t;
      }
      function P(n) {
        (this._tx = n),
          (this.complete = new Promise(function (t, e) {
            (n.oncomplete = function () {
              t();
            }),
              (n.onerror = function () {
                e(n.error);
              }),
              (n.onabort = function () {
                e(n.error);
              });
          }));
      }
      function R(t, e, n) {
        (this._db = t), (this.oldVersion = e), (this.transaction = new P(n));
      }
      function M(t) {
        this._db = t;
      }
      S(N, '_index', ['name', 'keyPath', 'multiEntry', 'unique']),
        T(N, '_index', IDBIndex, [
          'get',
          'getKey',
          'getAll',
          'getAllKeys',
          'count'
        ]),
        A(N, '_index', IDBIndex, ['openCursor', 'openKeyCursor']),
        S(k, '_cursor', ['direction', 'key', 'primaryKey', 'value']),
        T(k, '_cursor', IDBCursor, ['update', 'delete']),
        ['advance', 'continue', 'continuePrimaryKey'].forEach(function (n) {
          n in IDBCursor.prototype &&
            (k.prototype[n] = function () {
              var e = this,
                t = arguments;
              return Promise.resolve().then(function () {
                return (
                  e._cursor[n].apply(e._cursor, t),
                  w(e._request).then(function (t) {
                    if (t) return new k(t, e._request);
                  })
                );
              });
            });
        }),
        (O.prototype.createIndex = function () {
          return new N(this._store.createIndex.apply(this._store, arguments));
        }),
        (O.prototype.index = function () {
          return new N(this._store.index.apply(this._store, arguments));
        }),
        S(O, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']),
        T(O, '_store', IDBObjectStore, [
          'put',
          'add',
          'delete',
          'clear',
          'get',
          'getAll',
          'getKey',
          'getAllKeys',
          'count'
        ]),
        A(O, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']),
        E(O, '_store', IDBObjectStore, ['deleteIndex']),
        (P.prototype.objectStore = function () {
          return new O(this._tx.objectStore.apply(this._tx, arguments));
        }),
        S(P, '_tx', ['objectStoreNames', 'mode']),
        E(P, '_tx', IDBTransaction, ['abort']),
        (R.prototype.createObjectStore = function () {
          return new O(this._db.createObjectStore.apply(this._db, arguments));
        }),
        S(R, '_db', ['name', 'version', 'objectStoreNames']),
        E(R, '_db', IDBDatabase, ['deleteObjectStore', 'close']),
        (M.prototype.transaction = function () {
          return new P(this._db.transaction.apply(this._db, arguments));
        }),
        S(M, '_db', ['name', 'version', 'objectStoreNames']),
        E(M, '_db', IDBDatabase, ['close']),
        ['openCursor', 'openKeyCursor'].forEach(function (i) {
          [O, N].forEach(function (t) {
            i in t.prototype &&
              (t.prototype[i.replace('open', 'iterate')] = function () {
                var t = ((n = arguments), Array.prototype.slice.call(n)),
                  e = t[t.length - 1],
                  n = this._store || this._index,
                  r = n[i].apply(n, t.slice(0, -1));
                r.onsuccess = function () {
                  e(r.result);
                };
              });
          });
        }),
        [N, O].forEach(function (t) {
          t.prototype.getAll ||
            (t.prototype.getAll = function (t, n) {
              var r = this,
                i = [];
              return new Promise(function (e) {
                r.iterateCursor(t, function (t) {
                  t
                    ? (i.push(t.value),
                      void 0 === n || i.length != n ? t.continue() : e(i))
                    : e(i);
                });
              });
            });
        });
      var C = '0.4.19',
        D = 1e4,
        j = 'w:' + C,
        B = 'FIS_v2',
        L = 'https://firebaseinstallations.googleapis.com/v1',
        x = 36e5,
        U =
          (((Ut = {})['missing-app-config-values'] =
            'Missing App configuration value: "{$valueName}"'),
          (Ut['not-registered'] = 'Firebase Installation is not registered.'),
          (Ut['installation-not-found'] = 'Firebase Installation not found.'),
          (Ut['request-failed'] =
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
          (Ut['app-offline'] =
            'Could not process request. Application offline.'),
          (Ut['delete-pending-registration'] =
            "Can't delete installation while there is a pending registration request."),
          Ut),
        q = new v('installations', 'Installations', U);
      function F(t) {
        return t instanceof h && t.code.includes('request-failed');
      }
      function H(t) {
        t = t.projectId;
        return L + '/projects/' + t + '/installations';
      }
      function V(t) {
        return {
          token: t.token,
          requestStatus: 2,
          expiresIn: ((t = t.expiresIn), Number(t.replace('s', '000'))),
          creationTime: Date.now()
        };
      }
      function K(n, r) {
        return c(this, void 0, void 0, function () {
          var e;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, r.json()];
              case 1:
                return (
                  (e = t.sent()),
                  (e = e.error),
                  [
                    2,
                    q.create('request-failed', {
                      requestName: n,
                      serverCode: e.code,
                      serverMessage: e.message,
                      serverStatus: e.status
                    })
                  ]
                );
            }
          });
        });
      }
      function W(t) {
        t = t.apiKey;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': t
        });
      }
      function $(t, e) {
        (e = e.refreshToken), (t = W(t));
        return t.append('Authorization', B + ' ' + e), t;
      }
      function G(n) {
        return c(this, void 0, void 0, function () {
          var e;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, n()];
              case 1:
                return 500 <= (e = t.sent()).status && e.status < 600
                  ? [2, n()]
                  : [2, e];
            }
          });
        });
      }
      function J(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      var z = /^[cdef][\w-]{21}$/,
        Y = '';
      function Z() {
        try {
          var t = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(t),
            (t[0] = 112 + (t[0] % 16));
          t = (function (t) {
            return btoa(String.fromCharCode.apply(String, r(t)))
              .replace(/\+/g, '-')
              .replace(/\//g, '_');
          })(t).substr(0, 22);
          return z.test(t) ? t : Y;
        } catch (t) {
          return Y;
        }
      }
      function Q(t) {
        return t.appName + '!' + t.appId;
      }
      var X = new Map();
      function tt(t, e) {
        t = Q(t);
        et(t, e),
          (function (t, e) {
            var n = rt();
            n && n.postMessage({ key: t, fid: e });
            it();
          })(t, e);
      }
      function et(t, e) {
        var n,
          r,
          i = X.get(t);
        if (i)
          try {
            for (var o = s(i), a = o.next(); !a.done; a = o.next()) {
              (0, a.value)(e);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }
      var nt = null;
      function rt() {
        return (
          !nt &&
            'BroadcastChannel' in self &&
            ((nt = new BroadcastChannel(
              '[Firebase] FID Change'
            )).onmessage = function (t) {
              et(t.data.key, t.data.fid);
            }),
          nt
        );
      }
      function it() {
        0 === X.size && nt && (nt.close(), (nt = null));
      }
      var ot,
        at,
        st = 'firebase-installations-database',
        ut = 1,
        ct = 'firebase-installations-store',
        ft = null;
      function lt() {
        var t, e, n;
        return (
          ft ||
            ((t = ut),
            (e = function (t) {
              0 === t.oldVersion && t.createObjectStore(ct);
            }),
            (n = (t = I(indexedDB, 'open', [st, t])).request) &&
              (n.onupgradeneeded = function (t) {
                e && e(new R(n.result, t.oldVersion, n.transaction));
              }),
            (ft = t.then(function (t) {
              return new M(t);
            }))),
          ft
        );
      }
      function pt(o, a) {
        return c(this, void 0, void 0, function () {
          var e, n, r, i;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = Q(o)), [4, lt()];
              case 1:
                return (
                  (r = t.sent()),
                  (n = r.transaction(ct, 'readwrite')),
                  [4, (r = n.objectStore(ct)).get(e)]
                );
              case 2:
                return (i = t.sent()), [4, r.put(a, e)];
              case 3:
                return t.sent(), [4, n.complete];
              case 4:
                return t.sent(), (i && i.fid === a.fid) || tt(o, a.fid), [2, a];
            }
          });
        });
      }
      function ht(r) {
        return c(this, void 0, void 0, function () {
          var e, n;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = Q(r)), [4, lt()];
              case 1:
                return (
                  (n = t.sent()),
                  [
                    4,
                    (n = n.transaction(ct, 'readwrite'))
                      .objectStore(ct)
                      .delete(e)
                  ]
                );
              case 2:
                return t.sent(), [4, n.complete];
              case 3:
                return t.sent(), [2];
            }
          });
        });
      }
      function dt(a, s) {
        return c(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = Q(a)), [4, lt()];
              case 1:
                return (
                  (r = t.sent()),
                  (n = r.transaction(ct, 'readwrite')),
                  [4, (r = n.objectStore(ct)).get(e)]
                );
              case 2:
                return (
                  (i = t.sent()),
                  void 0 !== (o = s(i)) ? [3, 4] : [4, r.delete(e)]
                );
              case 3:
                return t.sent(), [3, 6];
              case 4:
                return [4, r.put(o, e)];
              case 5:
                t.sent(), (t.label = 6);
              case 6:
                return [4, n.complete];
              case 7:
                return (
                  t.sent(), !o || (i && i.fid === o.fid) || tt(a, o.fid), [2, o]
                );
            }
          });
        });
      }
      function gt(i) {
        return c(this, void 0, void 0, function () {
          var e, n, r;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  dt(i, function (t) {
                    (t = mt(t || { fid: Z(), registrationStatus: 0 })),
                      (t = (function (t, e) {
                        {
                          if (0 !== e.registrationStatus)
                            return 1 === e.registrationStatus
                              ? {
                                  installationEntry: e,
                                  registrationPromise: (function (i) {
                                    return c(this, void 0, void 0, function () {
                                      var e, n, r;
                                      return f(this, function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return [4, vt(i)];
                                          case 1:
                                            (e = t.sent()), (t.label = 2);
                                          case 2:
                                            return 1 !== e.registrationStatus
                                              ? [3, 5]
                                              : [4, J(100)];
                                          case 3:
                                            return t.sent(), [4, vt(i)];
                                          case 4:
                                            return (e = t.sent()), [3, 2];
                                          case 5:
                                            return 0 !== e.registrationStatus
                                              ? [3, 7]
                                              : [4, gt(i)];
                                          case 6:
                                            return (
                                              (r = t.sent()),
                                              (n = r.installationEntry),
                                              (r = r.registrationPromise)
                                                ? [2, r]
                                                : [2, n]
                                            );
                                          case 7:
                                            return [2, e];
                                        }
                                      });
                                    });
                                  })(t)
                                }
                              : { installationEntry: e };
                          if (!navigator.onLine) {
                            var n = Promise.reject(q.create('app-offline'));
                            return {
                              installationEntry: e,
                              registrationPromise: n
                            };
                          }
                          (e = {
                            fid: e.fid,
                            registrationStatus: 1,
                            registrationTime: Date.now()
                          }),
                            (t = (function (r, i) {
                              return c(this, void 0, void 0, function () {
                                var e, n;
                                return f(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return (
                                        t.trys.push([0, 2, , 7]),
                                        [
                                          4,
                                          (function (a, t) {
                                            var s = t.fid;
                                            return c(
                                              this,
                                              void 0,
                                              void 0,
                                              function () {
                                                var e, n, r, i, o;
                                                return f(this, function (t) {
                                                  switch (t.label) {
                                                    case 0:
                                                      return (
                                                        (e = H(a)),
                                                        (n = W(a)),
                                                        (o = {
                                                          fid: s,
                                                          authVersion: B,
                                                          appId: a.appId,
                                                          sdkVersion: j
                                                        }),
                                                        (r = {
                                                          method: 'POST',
                                                          headers: n,
                                                          body: JSON.stringify(
                                                            o
                                                          )
                                                        }),
                                                        [
                                                          4,
                                                          G(function () {
                                                            return fetch(e, r);
                                                          })
                                                        ]
                                                      );
                                                    case 1:
                                                      return (i = t.sent()).ok
                                                        ? [4, i.json()]
                                                        : [3, 3];
                                                    case 2:
                                                      return (
                                                        (o = t.sent()),
                                                        [
                                                          2,
                                                          {
                                                            fid: o.fid || s,
                                                            registrationStatus: 2,
                                                            refreshToken:
                                                              o.refreshToken,
                                                            authToken: V(
                                                              o.authToken
                                                            )
                                                          }
                                                        ]
                                                      );
                                                    case 3:
                                                      return [
                                                        4,
                                                        K(
                                                          'Create Installation',
                                                          i
                                                        )
                                                      ];
                                                    case 4:
                                                      throw t.sent();
                                                  }
                                                });
                                              }
                                            );
                                          })(r, i)
                                        ]
                                      );
                                    case 1:
                                      return (e = t.sent()), [2, pt(r, e)];
                                    case 2:
                                      return F((n = t.sent())) &&
                                        409 === n.customData.serverCode
                                        ? [4, ht(r)]
                                        : [3, 4];
                                    case 3:
                                      return t.sent(), [3, 6];
                                    case 4:
                                      return [
                                        4,
                                        pt(r, {
                                          fid: i.fid,
                                          registrationStatus: 0
                                        })
                                      ];
                                    case 5:
                                      t.sent(), (t.label = 6);
                                    case 6:
                                      throw n;
                                    case 7:
                                      return [2];
                                  }
                                });
                              });
                            })(t, e));
                          return {
                            installationEntry: e,
                            registrationPromise: t
                          };
                        }
                      })(i, t));
                    return (e = t.registrationPromise), t.installationEntry;
                  })
                ];
              case 1:
                return (n = t.sent()).fid !== Y ? [3, 3] : ((r = {}), [4, e]);
              case 2:
                return [2, ((r.installationEntry = t.sent()), r)];
              case 3:
                return [2, { installationEntry: n, registrationPromise: e }];
            }
          });
        });
      }
      function vt(t) {
        return dt(t, function (t) {
          if (!t) throw q.create('installation-not-found');
          return mt(t);
        });
      }
      function mt(t) {
        return 1 === (e = t).registrationStatus &&
          e.registrationTime + D < Date.now()
          ? { fid: t.fid, registrationStatus: 0 }
          : t;
        var e;
      }
      function yt(t, a) {
        var s = t.appConfig,
          u = t.platformLoggerProvider;
        return c(this, void 0, void 0, function () {
          var e, n, r, i, o;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = (function (t, e) {
                    e = e.fid;
                    return H(t) + '/' + e + '/authTokens:generate';
                  })(s, a)),
                  (n = $(s, a)),
                  (o = u.getImmediate({ optional: !0 })) &&
                    n.append('x-firebase-client', o.getPlatformInfoString()),
                  (o = { installation: { sdkVersion: j } }),
                  (r = { method: 'POST', headers: n, body: JSON.stringify(o) }),
                  [
                    4,
                    G(function () {
                      return fetch(e, r);
                    })
                  ]
                );
              case 1:
                return (i = t.sent()).ok ? [4, i.json()] : [3, 3];
              case 2:
                return (o = t.sent()), [2, V(o)];
              case 3:
                return [4, K('Generate Auth Token', i)];
              case 4:
                throw t.sent();
            }
          });
        });
      }
      function bt(i, o) {
        return (
          void 0 === o && (o = !1),
          c(this, void 0, void 0, function () {
            var r, e, n;
            return f(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    dt(i.appConfig, function (t) {
                      if (!wt(t)) throw q.create('not-registered');
                      var e,
                        n = t.authToken;
                      if (
                        o ||
                        2 !== (e = n).requestStatus ||
                        (function (t) {
                          var e = Date.now();
                          return (
                            e < t.creationTime ||
                            t.creationTime + t.expiresIn < e + x
                          );
                        })(e)
                      ) {
                        if (1 === n.requestStatus)
                          return (
                            (r = (function (n, r) {
                              return c(this, void 0, void 0, function () {
                                var e;
                                return f(this, function (t) {
                                  switch (t.label) {
                                    case 0:
                                      return [4, _t(n.appConfig)];
                                    case 1:
                                      (e = t.sent()), (t.label = 2);
                                    case 2:
                                      return 1 !== e.authToken.requestStatus
                                        ? [3, 5]
                                        : [4, J(100)];
                                    case 3:
                                      return t.sent(), [4, _t(n.appConfig)];
                                    case 4:
                                      return (e = t.sent()), [3, 2];
                                    case 5:
                                      return 0 ===
                                        (e = e.authToken).requestStatus
                                        ? [2, bt(n, r)]
                                        : [2, e];
                                  }
                                });
                              });
                            })(i, o)),
                            t
                          );
                        if (!navigator.onLine) throw q.create('app-offline');
                        n =
                          ((e = t),
                          (n = { requestStatus: 1, requestTime: Date.now() }),
                          a(a({}, e), { authToken: n }));
                        return (
                          (r = (function (i, o) {
                            return c(this, void 0, void 0, function () {
                              var e, n, r;
                              return f(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return (
                                      t.trys.push([0, 3, , 8]), [4, yt(i, o)]
                                    );
                                  case 1:
                                    return (
                                      (e = t.sent()),
                                      (r = a(a({}, o), { authToken: e })),
                                      [4, pt(i.appConfig, r)]
                                    );
                                  case 2:
                                    return t.sent(), [2, e];
                                  case 3:
                                    return !F((n = t.sent())) ||
                                      (401 !== n.customData.serverCode &&
                                        404 !== n.customData.serverCode)
                                      ? [3, 5]
                                      : [4, ht(i.appConfig)];
                                  case 4:
                                    return t.sent(), [3, 7];
                                  case 5:
                                    return (
                                      (r = a(a({}, o), {
                                        authToken: { requestStatus: 0 }
                                      })),
                                      [4, pt(i.appConfig, r)]
                                    );
                                  case 6:
                                    t.sent(), (t.label = 7);
                                  case 7:
                                    throw n;
                                  case 8:
                                    return [2];
                                }
                              });
                            });
                          })(i, n)),
                          n
                        );
                      }
                      return t;
                    })
                  ];
                case 1:
                  return (e = t.sent()), r ? [4, r] : [3, 3];
                case 2:
                  return (n = t.sent()), [3, 4];
                case 3:
                  (n = e.authToken), (t.label = 4);
                case 4:
                  return [2, n];
              }
            });
          })
        );
      }
      function _t(t) {
        return dt(t, function (t) {
          if (!wt(t)) throw q.create('not-registered');
          var e = t.authToken;
          return 1 === (e = e).requestStatus && e.requestTime + D < Date.now()
            ? a(a({}, t), { authToken: { requestStatus: 0 } })
            : t;
        });
      }
      function wt(t) {
        return void 0 !== t && 2 === t.registrationStatus;
      }
      function It(e, n) {
        return (
          void 0 === n && (n = !1),
          c(this, void 0, void 0, function () {
            return f(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    (function (n) {
                      return c(this, void 0, void 0, function () {
                        var e;
                        return f(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [4, gt(n)];
                            case 1:
                              return (e = t.sent().registrationPromise)
                                ? [4, e]
                                : [3, 3];
                            case 2:
                              t.sent(), (t.label = 3);
                            case 3:
                              return [2];
                          }
                        });
                      });
                    })(e.appConfig)
                  ];
                case 1:
                  return t.sent(), [4, bt(e, n)];
                case 2:
                  return [2, t.sent().token];
              }
            });
          })
        );
      }
      function St(i, o) {
        return c(this, void 0, void 0, function () {
          var e, n, r;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = (function (t, e) {
                    e = e.fid;
                    return H(t) + '/' + e;
                  })(i, o)),
                  (r = $(i, o)),
                  (n = { method: 'DELETE', headers: r }),
                  [
                    4,
                    G(function () {
                      return fetch(e, n);
                    })
                  ]
                );
              case 1:
                return (r = t.sent()).ok
                  ? [3, 3]
                  : [4, K('Delete Installation', r)];
              case 2:
                throw t.sent();
              case 3:
                return [2];
            }
          });
        });
      }
      function Tt(t, r) {
        var i = t.appConfig;
        return (
          (function (t, e) {
            rt();
            var n = Q(t);
            (t = X.get(n)) || ((t = new Set()), X.set(n, t)), t.add(e);
          })(i, r),
          function () {
            var t, e, n;
            (e = r),
              (n = Q((t = i))),
              (t = X.get(n)) &&
                (t.delete(e), 0 === t.size && X.delete(n), it());
          }
        );
      }
      function Et(t) {
        return q.create('missing-app-config-values', { valueName: t });
      }
      function At() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        for (var r = Array(t), i = 0, e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      (ot = e.default).INTERNAL.registerComponent(
        new b(
          'installations',
          function (t) {
            var e = t.getProvider('app').getImmediate(),
              n = {
                appConfig: (function (t) {
                  var e, n;
                  if (!t || !t.options) throw Et('App Configuration');
                  if (!t.name) throw Et('App Name');
                  try {
                    for (
                      var r = s(['projectId', 'apiKey', 'appId']), i = r.next();
                      !i.done;
                      i = r.next()
                    ) {
                      var o = i.value;
                      if (!t.options[o]) throw Et(o);
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
                  return {
                    appName: t.name,
                    projectId: t.options.projectId,
                    apiKey: t.options.apiKey,
                    appId: t.options.appId
                  };
                })(e),
                platformLoggerProvider: t.getProvider('platform-logger')
              };
            return {
              app: e,
              getId: function () {
                return (function (r) {
                  return c(this, void 0, void 0, function () {
                    var e, n;
                    return f(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, gt(r.appConfig)];
                        case 1:
                          return (
                            (e = t.sent()),
                            (n = e.installationEntry),
                            (e.registrationPromise || bt(r)).catch(
                              console.error
                            ),
                            [2, n.fid]
                          );
                      }
                    });
                  });
                })(n);
              },
              getToken: function (t) {
                return It(n, t);
              },
              delete: function () {
                return (function (r) {
                  return c(this, void 0, void 0, function () {
                    var e, n;
                    return f(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            dt((e = r.appConfig), function (t) {
                              if (!t || 0 !== t.registrationStatus) return t;
                            })
                          ];
                        case 1:
                          if (!(n = t.sent())) return [3, 6];
                          if (1 !== n.registrationStatus) return [3, 2];
                          throw q.create('delete-pending-registration');
                        case 2:
                          if (2 !== n.registrationStatus) return [3, 6];
                          if (navigator.onLine) return [3, 3];
                          throw q.create('app-offline');
                        case 3:
                          return [4, St(e, n)];
                        case 4:
                          return t.sent(), [4, ht(e)];
                        case 5:
                          t.sent(), (t.label = 6);
                        case 6:
                          return [2];
                      }
                    });
                  });
                })(n);
              },
              onIdChange: function (t) {
                return Tt(n, t);
              }
            };
          },
          'PUBLIC'
        )
      ),
        ot.registerVersion('@firebase/installations', C),
        ((xt = at = at || {})[(xt.DEBUG = 0)] = 'DEBUG'),
        (xt[(xt.VERBOSE = 1)] = 'VERBOSE'),
        (xt[(xt.INFO = 2)] = 'INFO'),
        (xt[(xt.WARN = 3)] = 'WARN'),
        (xt[(xt.ERROR = 4)] = 'ERROR'),
        (xt[(xt.SILENT = 5)] = 'SILENT');
      function Nt(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = Pt[e];
          if (!o)
            throw new Error(
              'Attempted to log a message with an invalid logType (value: ' +
                e +
                ')'
            );
          console[o].apply(console, At(['[' + i + ']  ' + t.name + ':'], n));
        }
      }
      var kt = {
          debug: at.DEBUG,
          verbose: at.VERBOSE,
          info: at.INFO,
          warn: at.WARN,
          error: at.ERROR,
          silent: at.SILENT
        },
        Ot = at.INFO,
        Pt =
          (((Ut = {})[at.DEBUG] = 'log'),
          (Ut[at.VERBOSE] = 'log'),
          (Ut[at.INFO] = 'info'),
          (Ut[at.WARN] = 'warn'),
          (Ut[at.ERROR] = 'error'),
          Ut),
        U =
          (Object.defineProperty(Rt.prototype, 'logLevel', {
            get: function () {
              return this._logLevel;
            },
            set: function (t) {
              if (!(t in at))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`'
                );
              this._logLevel = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Rt.prototype.setLogLevel = function (t) {
            this._logLevel = 'string' == typeof t ? kt[t] : t;
          }),
          Object.defineProperty(Rt.prototype, 'logHandler', {
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
          Object.defineProperty(Rt.prototype, 'userLogHandler', {
            get: function () {
              return this._userLogHandler;
            },
            set: function (t) {
              this._userLogHandler = t;
            },
            enumerable: !1,
            configurable: !0
          }),
          (Rt.prototype.debug = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, At([this, at.DEBUG], t)),
              this._logHandler.apply(this, At([this, at.DEBUG], t));
          }),
          (Rt.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, At([this, at.VERBOSE], t)),
              this._logHandler.apply(this, At([this, at.VERBOSE], t));
          }),
          (Rt.prototype.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, At([this, at.INFO], t)),
              this._logHandler.apply(this, At([this, at.INFO], t));
          }),
          (Rt.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, At([this, at.WARN], t)),
              this._logHandler.apply(this, At([this, at.WARN], t));
          }),
          (Rt.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, At([this, at.ERROR], t)),
              this._logHandler.apply(this, At([this, at.ERROR], t));
          }),
          Rt);
      function Rt(t) {
        (this.name = t),
          (this._logLevel = Ot),
          (this._logHandler = Nt),
          (this._userLogHandler = null);
      }
      var Mt,
        Ct,
        Dt = '0.4.4',
        jt = 'FB-PERF-TRACE-MEASURE',
        Bt = '@firebase/performance/config',
        Lt = '@firebase/performance/configexpire',
        xt = 'Performance',
        Ut =
          (((Ut = {})['trace started'] =
            'Trace {$traceName} was started before.'),
          (Ut['trace stopped'] = 'Trace {$traceName} is not running.'),
          (Ut['nonpositive trace startTime'] =
            'Trace {$traceName} startTime should be positive.'),
          (Ut['nonpositive trace duration'] =
            'Trace {$traceName} duration should be positive.'),
          (Ut['no window'] = 'Window is not available.'),
          (Ut['no app id'] = 'App id is not available.'),
          (Ut['no project id'] = 'Project id is not available.'),
          (Ut['no api key'] = 'Api key is not available.'),
          (Ut['invalid cc log'] = 'Attempted to queue invalid cc event'),
          (Ut['FB not default'] =
            'Performance can only start when Firebase app instance is the default one.'),
          (Ut['RC response not ok'] = 'RC response is not ok'),
          (Ut['invalid attribute name'] =
            'Attribute name {$attributeName} is invalid.'),
          (Ut['invalid attribute value'] =
            'Attribute value {$attributeValue} is invalid.'),
          (Ut['invalid custom metric name'] =
            'Custom metric name {$customMetricName} is invalid'),
          (Ut['invalid String merger input'] =
            'Input for String merger is invalid, contact support team to resolve.'),
          Ut),
        qt = new v('performance', xt, Ut),
        Ft = new U(xt);
      Ft.logLevel = at.INFO;
      var Ht,
        Vt =
          ((Kt.prototype.getUrl = function () {
            return this.windowLocation.href.split('?')[0];
          }),
          (Kt.prototype.mark = function (t) {
            this.performance &&
              this.performance.mark &&
              this.performance.mark(t);
          }),
          (Kt.prototype.measure = function (t, e, n) {
            this.performance &&
              this.performance.measure &&
              this.performance.measure(t, e, n);
          }),
          (Kt.prototype.getEntriesByType = function (t) {
            return this.performance && this.performance.getEntriesByType
              ? this.performance.getEntriesByType(t)
              : [];
          }),
          (Kt.prototype.getEntriesByName = function (t) {
            return this.performance && this.performance.getEntriesByName
              ? this.performance.getEntriesByName(t)
              : [];
          }),
          (Kt.prototype.getTimeOrigin = function () {
            return (
              this.performance &&
              (this.performance.timeOrigin ||
                this.performance.timing.navigationStart)
            );
          }),
          (Kt.prototype.requiredApisAvailable = function () {
            return fetch &&
              Promise &&
              this.navigator &&
              this.navigator.cookieEnabled
              ? ('indexedDB' in self && null != indexedDB) ||
                  (Ft.info('IndexedDB is not supported by current browswer'),
                  !1)
              : (Ft.info(
                  'Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.'
                ),
                !1);
          }),
          (Kt.prototype.setupObserver = function (t, i) {
            this.PerformanceObserver &&
              new this.PerformanceObserver(function (t) {
                for (var e = 0, n = t.getEntries(); e < n.length; e++) {
                  var r = n[e];
                  i(r);
                }
              }).observe({ entryTypes: [t] });
          }),
          (Kt.getInstance = function () {
            return void 0 === Mt && (Mt = new Kt(Ct)), Mt;
          }),
          Kt);
      function Kt(t) {
        if (!(this.window = t)) throw qt.create('no window');
        (this.performance = t.performance),
          (this.PerformanceObserver = t.PerformanceObserver),
          (this.windowLocation = t.location),
          (this.navigator = t.navigator),
          (this.document = t.document),
          this.navigator &&
            this.navigator.cookieEnabled &&
            (this.localStorage = t.localStorage),
          t.perfMetrics &&
            t.perfMetrics.onFirstInputDelay &&
            (this.onFirstInputDelay = t.perfMetrics.onFirstInputDelay);
      }
      function Wt(t, e) {
        var n = t.length - e.length;
        if (n < 0 || 1 < n) throw qt.create('invalid String merger input');
        for (var r = [], i = 0; i < t.length; i++)
          r.push(t.charAt(i)), e.length > i && r.push(e.charAt(i));
        return r.join('');
      }
      var $t,
        Gt,
        Jt =
          ((zt.prototype.getAppId = function () {
            var t =
              this.firebaseAppInstance &&
              this.firebaseAppInstance.options &&
              this.firebaseAppInstance.options.appId;
            if (!t) throw qt.create('no app id');
            return t;
          }),
          (zt.prototype.getProjectId = function () {
            var t =
              this.firebaseAppInstance &&
              this.firebaseAppInstance.options &&
              this.firebaseAppInstance.options.projectId;
            if (!t) throw qt.create('no project id');
            return t;
          }),
          (zt.prototype.getApiKey = function () {
            var t =
              this.firebaseAppInstance &&
              this.firebaseAppInstance.options &&
              this.firebaseAppInstance.options.apiKey;
            if (!t) throw qt.create('no api key');
            return t;
          }),
          (zt.prototype.getFlTransportFullUrl = function () {
            return this.flTransportEndpointUrl.concat(
              '?key=',
              this.transportKey
            );
          }),
          (zt.getInstance = function () {
            return void 0 === Ht && (Ht = new zt()), Ht;
          }),
          zt);
      function zt() {
        (this.instrumentationEnabled = !0),
          (this.dataCollectionEnabled = !0),
          (this.loggingEnabled = !1),
          (this.tracesSamplingRate = 1),
          (this.networkRequestsSamplingRate = 1),
          (this.logEndPointUrl =
            'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'),
          (this.flTransportEndpointUrl = Wt(
            'hts/frbslgigp.ogepscmv/ieo/eaylg',
            'tp:/ieaeogn-agolai.o/1frlglgc/o'
          )),
          (this.transportKey = Wt(
            'AzSC8r6ReiGqFMyfvgow',
            'Iayx0u-XT3vksVM-pIV'
          )),
          (this.logSource = 462),
          (this.logTraceAfterSampling = !1),
          (this.logNetworkAfterSampling = !1),
          (this.configTimeToLive = 12);
      }
      ((xt = Gt = Gt || {})[(xt.UNKNOWN = 0)] = 'UNKNOWN'),
        (xt[(xt.VISIBLE = 1)] = 'VISIBLE'),
        (xt[(xt.HIDDEN = 2)] = 'HIDDEN');
      var Yt = ['firebase_', 'google_', 'ga_'],
        Zt = new RegExp('^[a-zA-Z]\\w*$');
      function Qt() {
        switch (Vt.getInstance().document.visibilityState) {
          case 'visible':
            return Gt.VISIBLE;
          case 'hidden':
            return Gt.HIDDEN;
          default:
            return Gt.UNKNOWN;
        }
      }
      var Xt = '0.0.1',
        te = { loggingEnabled: !0 },
        ee = 'FIREBASE_INSTALLATIONS_AUTH';
      function ne(t) {
        var n,
          e = (function () {
            var t = Vt.getInstance().localStorage;
            if (!t) return;
            var e = t.getItem(Lt);
            if (
              !e ||
              !(function (t) {
                return Number(t) > Date.now();
              })(e)
            )
              return;
            var n = t.getItem(Bt);
            if (!n) return;
            try {
              return JSON.parse(n);
            } catch (t) {
              return;
            }
          })();
        return e
          ? (ie(e), Promise.resolve())
          : ((n = t),
            (function () {
              var t = Jt.getInstance().installationsService.getToken();
              return t.then(function (t) {}), t;
            })()
              .then(function (t) {
                var e =
                    'https://firebaseremoteconfig.googleapis.com/v1/projects/' +
                    Jt.getInstance().getProjectId() +
                    '/namespaces/fireperf:fetch?key=' +
                    Jt.getInstance().getApiKey(),
                  t = new Request(e, {
                    method: 'POST',
                    headers: { Authorization: ee + ' ' + t },
                    body: JSON.stringify({
                      app_instance_id: n,
                      app_instance_id_token: t,
                      app_id: Jt.getInstance().getAppId(),
                      app_version: Dt,
                      sdk_version: Xt
                    })
                  });
                return fetch(t).then(function (t) {
                  if (t.ok) return t.json();
                  throw qt.create('RC response not ok');
                });
              })
              .catch(function () {
                Ft.info(re);
              })
              .then(ie)
              .then(
                function (t) {
                  var e = Vt.getInstance().localStorage;
                  if (!t || !e) return;
                  e.setItem(Bt, JSON.stringify(t)),
                    e.setItem(
                      Lt,
                      String(
                        Date.now() +
                          60 * Jt.getInstance().configTimeToLive * 60 * 1e3
                      )
                    );
                },
                function () {}
              ));
      }
      var re = 'Could not fetch config, will use default configs';
      function ie(t) {
        if (!t) return t;
        var e = Jt.getInstance(),
          n = t.entries || {};
        return (
          (e.loggingEnabled =
            void 0 !== n.fpr_enabled
              ? 'true' === String(n.fpr_enabled)
              : te.loggingEnabled),
          n.fpr_log_source && (e.logSource = Number(n.fpr_log_source)),
          n.fpr_log_endpoint_url && (e.logEndPointUrl = n.fpr_log_endpoint_url),
          n.fpr_log_transport_key && (e.transportKey = n.fpr_log_transport_key),
          void 0 !== n.fpr_vc_network_request_sampling_rate &&
            (e.networkRequestsSamplingRate = Number(
              n.fpr_vc_network_request_sampling_rate
            )),
          void 0 !== n.fpr_vc_trace_sampling_rate &&
            (e.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate)),
          (e.logTraceAfterSampling = oe(e.tracesSamplingRate)),
          (e.logNetworkAfterSampling = oe(e.networkRequestsSamplingRate)),
          t
        );
      }
      function oe(t) {
        return Math.random() <= t;
      }
      var ae,
        se = 1;
      function ue() {
        return (
          (se = 2),
          (ae =
            ae ||
            (function () {
              var n = Vt.getInstance().document;
              return new Promise(function (t) {
                var e;
                n && 'complete' !== n.readyState
                  ? ((e = function () {
                      'complete' === n.readyState &&
                        (n.removeEventListener('readystatechange', e), t());
                    }),
                    n.addEventListener('readystatechange', e))
                  : t();
              });
            })()
              .then(function () {
                return (
                  (t = Jt.getInstance().installationsService.getId()).then(
                    function (t) {
                      $t = t;
                    }
                  ),
                  t
                );
                var t;
              })
              .then(ne)
              .then(ce, ce))
        );
      }
      function ce() {
        se = 3;
      }
      var fe,
        le = 1e4,
        pe = 5500,
        he = 3,
        de = he,
        ge = [],
        ve = !1;
      function me(t) {
        setTimeout(function () {
          if (0 !== de)
            return ge.length
              ? void (function () {
                  var t = i(ge);
                  ge = [];
                  var e = t.map(function (t) {
                    return {
                      source_extension_json_proto3: t.message,
                      event_time_ms: String(t.eventTime)
                    };
                  });
                  (function (t, r) {
                    return (function (t) {
                      var e = Jt.getInstance().getFlTransportFullUrl();
                      return fetch(e, {
                        method: 'POST',
                        body: JSON.stringify(t)
                      });
                    })(t)
                      .then(function (t) {
                        return (
                          t.ok || Ft.info('Call to Firebase backend failed.'),
                          t.json()
                        );
                      })
                      .then(function (t) {
                        var e = Number(t.nextRequestWaitMillis),
                          n = le;
                        isNaN(e) || (n = Math.max(e, n));
                        t = t.logResponseDetails;
                        Array.isArray(t) &&
                          0 < t.length &&
                          'RETRY_REQUEST_LATER' === t[0].responseAction &&
                          ((ge = i(r, ge)),
                          Ft.info('Retry transport request later.')),
                          (de = he),
                          me(n);
                      });
                  })(
                    {
                      request_time_ms: String(Date.now()),
                      client_info: { client_type: 1, js_client_info: {} },
                      log_source: Jt.getInstance().logSource,
                      log_event: e
                    },
                    t
                  ).catch(function () {
                    (ge = i(t, ge)),
                      de--,
                      Ft.info('Tries left: ' + de + '.'),
                      me(le);
                  });
                })()
              : me(le);
        }, t);
      }
      function ye(n) {
        return function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          !(function (t) {
            if (!t.eventTime || !t.message) throw qt.create('invalid cc log');
            ge = i(ge, [t]);
          })({ message: n.apply(void 0, t), eventTime: Date.now() });
        };
      }
      function be(t, e) {
        (fe = fe || ye(Ie))(t, e);
      }
      function _e(t) {
        var e = Jt.getInstance();
        (!e.instrumentationEnabled && t.isAuto) ||
          ((e.dataCollectionEnabled || t.isAuto) &&
            Vt.getInstance().requiredApisAvailable() &&
            ((t.isAuto && Qt() !== Gt.VISIBLE) ||
              (3 === se
                ? we(t)
                : ue().then(
                    function () {
                      return we(t);
                    },
                    function () {
                      return we(t);
                    }
                  ))));
      }
      function we(t) {
        var e;
        !$t ||
          ((e = Jt.getInstance()).loggingEnabled &&
            e.logTraceAfterSampling &&
            setTimeout(function () {
              return be(t, 1);
            }, 0));
      }
      function Ie(t, e) {
        return (0 === e
          ? function (t) {
              (t = {
                url: t.url,
                http_method: t.httpMethod || 0,
                http_response_code: 200,
                response_payload_bytes: t.responsePayloadBytes,
                client_start_time_us: t.startTimeUs,
                time_to_response_initiated_us: t.timeToResponseInitiatedUs,
                time_to_response_completed_us: t.timeToResponseCompletedUs
              }),
                (t = { application_info: Se(), network_request_metric: t });
              return JSON.stringify(t);
            }
          : function (t) {
              var e = {
                name: t.name,
                is_auto: t.isAuto,
                client_start_time_us: t.startTimeUs,
                duration_us: t.durationUs
              };
              0 !== Object.keys(t.counters).length && (e.counters = t.counters);
              t = t.getAttributes();
              0 !== Object.keys(t).length && (e.custom_attributes = t);
              e = { application_info: Se(), trace_metric: e };
              return JSON.stringify(e);
            })(t);
      }
      function Se() {
        return {
          google_app_id: Jt.getInstance().getAppId(),
          app_instance_id: $t,
          web_app_info: {
            sdk_version: Dt,
            page_url: Vt.getInstance().getUrl(),
            service_worker_status:
              'serviceWorker' in (t = Vt.getInstance().navigator)
                ? t.serviceWorker.controller
                  ? 2
                  : 3
                : 1,
            visibility_state: Qt(),
            effective_connection_type: (function () {
              var t = Vt.getInstance().navigator.connection;
              switch (t && t.effectiveType) {
                case 'slow-2g':
                  return 1;
                case '2g':
                  return 2;
                case '3g':
                  return 3;
                case '4g':
                  return 4;
                default:
                  return 0;
              }
            })()
          },
          application_process_state: 0
        };
        var t;
      }
      var Te = ['_fp', '_fcp', '_fid'];
      var Ee =
        ((Ae.prototype.start = function () {
          if (1 !== this.state)
            throw qt.create('trace started', { traceName: this.name });
          this.api.mark(this.traceStartMark), (this.state = 2);
        }),
        (Ae.prototype.stop = function () {
          if (2 !== this.state)
            throw qt.create('trace stopped', { traceName: this.name });
          (this.state = 3),
            this.api.mark(this.traceStopMark),
            this.api.measure(
              this.traceMeasure,
              this.traceStartMark,
              this.traceStopMark
            ),
            this.calculateTraceMetrics(),
            _e(this);
        }),
        (Ae.prototype.record = function (t, e, n) {
          if (t <= 0)
            throw qt.create('nonpositive trace startTime', {
              traceName: this.name
            });
          if (e <= 0)
            throw qt.create('nonpositive trace duration', {
              traceName: this.name
            });
          if (
            ((this.durationUs = Math.floor(1e3 * e)),
            (this.startTimeUs = Math.floor(1e3 * t)),
            n && n.attributes && (this.customAttributes = a({}, n.attributes)),
            n && n.metrics)
          )
            for (var r = 0, i = Object.keys(n.metrics); r < i.length; r++) {
              var o = i[r];
              isNaN(Number(n.metrics[o])) ||
                (this.counters[o] = Number(Math.floor(n.metrics[o])));
            }
          _e(this);
        }),
        (Ae.prototype.incrementMetric = function (t, e) {
          void 0 === e && (e = 1),
            void 0 === this.counters[t]
              ? this.putMetric(t, e)
              : this.putMetric(t, this.counters[t] + e);
        }),
        (Ae.prototype.putMetric = function (t, e) {
          if (
            ((n = t),
            (r = this.name),
            0 === n.length ||
              100 < n.length ||
              (!(r && r.startsWith('_wt_') && -1 < Te.indexOf(n)) &&
                n.startsWith('_')))
          )
            throw qt.create('invalid custom metric name', {
              customMetricName: t
            });
          var n, r;
          this.counters[t] =
            ((t = e),
            (e = Math.floor(t)) < t &&
              Ft.info(
                'Metric value should be an Integer, setting the value as : ' +
                  e +
                  '.'
              ),
            e);
        }),
        (Ae.prototype.getMetric = function (t) {
          return this.counters[t] || 0;
        }),
        (Ae.prototype.putAttribute = function (t, e) {
          var n,
            r,
            i =
              !(0 === (n = t).length || 40 < n.length) &&
              !Yt.some(function (t) {
                return n.startsWith(t);
              }) &&
              !!n.match(Zt),
            r = 0 !== (r = e).length && r.length <= 100;
          if (i && r) this.customAttributes[t] = e;
          else {
            if (!i)
              throw qt.create('invalid attribute name', { attributeName: t });
            if (!r)
              throw qt.create('invalid attribute value', { attributeValue: e });
          }
        }),
        (Ae.prototype.getAttribute = function (t) {
          return this.customAttributes[t];
        }),
        (Ae.prototype.removeAttribute = function (t) {
          void 0 !== this.customAttributes[t] &&
            delete this.customAttributes[t];
        }),
        (Ae.prototype.getAttributes = function () {
          return a({}, this.customAttributes);
        }),
        (Ae.prototype.setStartTime = function (t) {
          this.startTimeUs = t;
        }),
        (Ae.prototype.setDuration = function (t) {
          this.durationUs = t;
        }),
        (Ae.prototype.calculateTraceMetrics = function () {
          var t = this.api.getEntriesByName(this.traceMeasure),
            t = t && t[0];
          t &&
            ((this.durationUs = Math.floor(1e3 * t.duration)),
            (this.startTimeUs = Math.floor(
              1e3 * (t.startTime + this.api.getTimeOrigin())
            )));
        }),
        (Ae.createOobTrace = function (t, e, n) {
          var r,
            i = Vt.getInstance().getUrl();
          i &&
            ((r = new Ae('_wt_' + i, !0)),
            (i = Math.floor(1e3 * Vt.getInstance().getTimeOrigin())),
            r.setStartTime(i),
            t &&
              t[0] &&
              (r.setDuration(Math.floor(1e3 * t[0].duration)),
              r.putMetric(
                'domInteractive',
                Math.floor(1e3 * t[0].domInteractive)
              ),
              r.putMetric(
                'domContentLoadedEventEnd',
                Math.floor(1e3 * t[0].domContentLoadedEventEnd)
              ),
              r.putMetric('loadEventEnd', Math.floor(1e3 * t[0].loadEventEnd))),
            e &&
              ((t = e.find(function (t) {
                return 'first-paint' === t.name;
              })) &&
                t.startTime &&
                r.putMetric('_fp', Math.floor(1e3 * t.startTime)),
              (e = e.find(function (t) {
                return 'first-contentful-paint' === t.name;
              })) &&
                e.startTime &&
                r.putMetric('_fcp', Math.floor(1e3 * e.startTime)),
              n && r.putMetric('_fid', Math.floor(1e3 * n))),
            _e(r));
        }),
        (Ae.createUserTimingTrace = function (t) {
          _e(new Ae(t, !1, t));
        }),
        Ae);
      function Ae(t, e, n) {
        void 0 === e && (e = !1),
          (this.name = t),
          (this.isAuto = e),
          (this.state = 1),
          (this.customAttributes = {}),
          (this.counters = {}),
          (this.api = Vt.getInstance()),
          (this.randomId = Math.floor(1e6 * Math.random())),
          this.isAuto ||
            ((this.traceStartMark =
              'FB-PERF-TRACE-START-' + this.randomId + '-' + this.name),
            (this.traceStopMark =
              'FB-PERF-TRACE-STOP-' + this.randomId + '-' + this.name),
            (this.traceMeasure =
              n || jt + '-' + this.randomId + '-' + this.name),
            n && this.calculateTraceMetrics());
      }
      function Ne(t) {
        var e,
          n,
          r,
          i = t;
        i &&
          void 0 !== i.responseStart &&
          ((n = Vt.getInstance().getTimeOrigin()),
          (r = Math.floor(1e3 * (i.startTime + n))),
          (t = i.responseStart
            ? Math.floor(1e3 * (i.responseStart - i.startTime))
            : void 0),
          (n = Math.floor(1e3 * (i.responseEnd - i.startTime))),
          (i = {
            url: i.name && i.name.split('?')[0],
            responsePayloadBytes: i.transferSize,
            startTimeUs: r,
            timeToResponseInitiatedUs: t,
            timeToResponseCompletedUs: n
          }),
          (e = i),
          (r = Jt.getInstance()).instrumentationEnabled &&
            ((t = e.url),
            (n = r.logEndPointUrl.split('?')[0]),
            (i = r.flTransportEndpointUrl.split('?')[0]),
            t !== n &&
              t !== i &&
              r.loggingEnabled &&
              r.logNetworkAfterSampling &&
              setTimeout(function () {
                return be(e, 0);
              }, 0)));
      }
      var ke = 5e3;
      function Oe() {
        $t &&
          (setTimeout(function () {
            var t = Vt.getInstance(),
              e = t.getEntriesByType('navigation'),
              n = t.getEntriesByType('paint');
            {
              var r;
              t.onFirstInputDelay
                ? ((r = setTimeout(function () {
                    Ee.createOobTrace(e, n), (r = void 0);
                  }, ke)),
                  t.onFirstInputDelay(function (t) {
                    r && (clearTimeout(r), Ee.createOobTrace(e, n, t));
                  }))
                : Ee.createOobTrace(e, n);
            }
          }, 0),
          setTimeout(function () {
            for (
              var t = Vt.getInstance(),
                e = t.getEntriesByType('resource'),
                n = 0,
                r = e;
              n < r.length;
              n++
            ) {
              Ne(r[n]);
            }
            t.setupObserver('resource', Ne);
          }, 0),
          setTimeout(function () {
            for (
              var t = Vt.getInstance(),
                e = t.getEntriesByType('measure'),
                n = 0,
                r = e;
              n < r.length;
              n++
            ) {
              Pe(r[n]);
            }
            t.setupObserver('measure', Pe);
          }, 0));
      }
      function Pe(t) {
        t = t.name;
        t.substring(0, jt.length) !== jt && Ee.createUserTimingTrace(t);
      }
      var Re =
        ((Me.prototype.trace = function (t) {
          return new Ee(t);
        }),
        Object.defineProperty(Me.prototype, 'instrumentationEnabled', {
          get: function () {
            return Jt.getInstance().instrumentationEnabled;
          },
          set: function (t) {
            Jt.getInstance().instrumentationEnabled = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Me.prototype, 'dataCollectionEnabled', {
          get: function () {
            return Jt.getInstance().dataCollectionEnabled;
          },
          set: function (t) {
            Jt.getInstance().dataCollectionEnabled = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        Me);
      function Me(t) {
        (this.app = t),
          Vt.getInstance().requiredApisAvailable() &&
            new Promise(function (t, e) {
              try {
                var n = !0,
                  r = 'validate-browser-context-for-indexeddb-analytics-module',
                  i = window.indexedDB.open(r);
                (i.onsuccess = function () {
                  i.result.close(),
                    n || window.indexedDB.deleteDatabase(r),
                    t(!0);
                }),
                  (i.onupgradeneeded = function () {
                    n = !1;
                  }),
                  (i.onerror = function () {
                    var t;
                    e(
                      (null === (t = i.error) || void 0 === t
                        ? void 0
                        : t.message) || ''
                    );
                  });
              } catch (t) {
                e(t);
              }
            })
              .then(function (t) {
                t && (ve || (me(pe), (ve = !0)), ue().then(Oe, Oe));
              })
              .catch(function (t) {
                Ft.info("Environment doesn't support IndexedDB: " + t);
              });
      }
      var Ce;
      function De(t, e) {
        if ('[DEFAULT]' !== t.name) throw qt.create('FB not default');
        if ('undefined' == typeof window) throw qt.create('no window');
        return (
          (Ct = window),
          (Jt.getInstance().firebaseAppInstance = t),
          (Jt.getInstance().installationsService = e),
          new Re(t)
        );
      }
      (Ce = e.default).INTERNAL.registerComponent(
        new b(
          'performance',
          function (t) {
            var e = t.getProvider('app').getImmediate(),
              t = t.getProvider('installations').getImmediate();
            return De(e, t);
          },
          'PUBLIC'
        )
      ),
        Ce.registerVersion('@firebase/performance', '0.4.4');
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        'Cannot instantiate firebase-performance.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-performance.js.map
