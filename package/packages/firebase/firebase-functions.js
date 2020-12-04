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

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(require('@firebase/app'))
    : 'function' == typeof define && define.amd
    ? define(['@firebase/app'], t)
    : t(
        (e = 'undefined' != typeof globalThis ? globalThis : e || self).firebase
      );
})(this, function (j) {
  'use strict';
  try {
    (function () {
      function e(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
      }
      var t = e(j),
        r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        };
      function n(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function s(e, s, a, u) {
        return new (a = a || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            try {
              o(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    })
                ).then(r, i);
          }
          o((u = u.apply(e, s || [])).next());
        });
      }
      function h(n, r) {
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
          e = { next: t(0), throw: t(1), return: t(2) };
        return (
          'function' == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this;
            }),
          e
        );
        function t(t) {
          return function (e) {
            return (function (t) {
              if (i) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & t[0]
                          ? o.return
                          : t[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, t[1])).done)
                  )
                    return s;
                  switch (((o = 0), s && (t = [2 & t[0], s.value]), t[0])) {
                    case 0:
                    case 1:
                      s = t;
                      break;
                    case 4:
                      return a.label++, { value: t[1], done: !1 };
                    case 5:
                      a.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) {
                        a.label = t[1];
                        break;
                      }
                      if (6 === t[0] && a.label < s[1]) {
                        (a.label = s[1]), (s = t);
                        break;
                      }
                      if (s && a.label < s[2]) {
                        (a.label = s[2]), a.ops.push(t);
                        break;
                      }
                      s[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  t = r.call(n, a);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      var i,
        o = 'FirebaseError',
        a = (n(u, (i = Error)), u);
      function u(e, t, n) {
        t = i.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = n),
          (t.name = o),
          Object.setPrototypeOf(t, u.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, c.prototype.create),
          t
        );
      }
      var c =
        ((l.prototype.create = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r,
            i = t[0] || {},
            o = this.service + '/' + e,
            e = this.errors[e],
            e = e
              ? ((r = i),
                e.replace(f, function (e, t) {
                  var n = r[t];
                  return null != n ? String(n) : '<' + t + '?>';
                }))
              : 'Error',
            e = this.serviceName + ': ' + e + ' (' + o + ').';
          return new a(o, e, i);
        }),
        l);
      function l(e, t, n) {
        (this.service = e), (this.serviceName = t), (this.errors = n);
      }
      var f = /\{\$([^}]+)}/g,
        p =
          ((d.prototype.setInstantiationMode = function (e) {
            return (this.instantiationMode = e), this;
          }),
          (d.prototype.setMultipleInstances = function (e) {
            return (this.multipleInstances = e), this;
          }),
          (d.prototype.setServiceProps = function (e) {
            return (this.serviceProps = e), this;
          }),
          d);
      function d(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var v,
        y = {
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
        m = (n(g, (v = Error)), g);
      function g(e, t, n) {
        t = v.call(this, t) || this;
        return (
          Object.setPrototypeOf(t, g.prototype),
          (t.code = e),
          (t.details = n),
          t
        );
      }
      function b(e, t, n) {
        var r = (function (e) {
            if (200 <= e && e < 300) return 'ok';
            switch (e) {
              case 0:
                return 'internal';
              case 400:
                return 'invalid-argument';
              case 401:
                return 'unauthenticated';
              case 403:
                return 'permission-denied';
              case 404:
                return 'not-found';
              case 409:
                return 'aborted';
              case 429:
                return 'resource-exhausted';
              case 499:
                return 'cancelled';
              case 500:
                return 'internal';
              case 501:
                return 'unimplemented';
              case 503:
                return 'unavailable';
              case 504:
                return 'deadline-exceeded';
            }
            return 'unknown';
          })(e),
          i = r,
          o = void 0;
        try {
          var s = t && t.error;
          if (s) {
            var a = s.status;
            if ('string' == typeof a) {
              if (!y[a]) return new m('internal', 'internal');
              (r = y[a]), (i = a);
            }
            a = s.message;
            'string' == typeof a && (i = a),
              void 0 !== (o = s.details) && (o = n.decode(o));
          }
        } catch (e) {}
        return 'ok' === r ? null : new m(r, i, o);
      }
      var w =
        ((E.prototype.getAuthToken = function () {
          return s(this, void 0, void 0, function () {
            var t;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!this.auth) return [2, void 0];
                  e.label = 1;
                case 1:
                  return e.trys.push([1, 3, , 4]), [4, this.auth.getToken()];
                case 2:
                  return (t = e.sent()) ? [2, t.accessToken] : [2, void 0];
                case 3:
                  return e.sent(), [2, void 0];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (E.prototype.getInstanceIdToken = function () {
          return s(this, void 0, void 0, function () {
            return h(this, function (e) {
              if (
                !(
                  this.messaging &&
                  'Notification' in self &&
                  'granted' === Notification.permission
                )
              )
                return [2, void 0];
              try {
                return [2, this.messaging.getToken()];
              } catch (e) {
                return [2, void 0];
              }
              return [2];
            });
          });
        }),
        (E.prototype.getContext = function () {
          return s(this, void 0, void 0, function () {
            var t, n;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.getAuthToken()];
                case 1:
                  return (t = e.sent()), [4, this.getInstanceIdToken()];
                case 2:
                  return (
                    (n = e.sent()), [2, { authToken: t, instanceIdToken: n }]
                  );
              }
            });
          });
        }),
        E);
      function E(e, t) {
        var n = this;
        (this.auth = null),
          (this.messaging = null),
          (this.auth = e.getImmediate({ optional: !0 })),
          (this.messaging = t.getImmediate({ optional: !0 })),
          this.auth ||
            e.get().then(
              function (e) {
                return (n.auth = e);
              },
              function () {}
            ),
          this.messaging ||
            t.get().then(
              function (e) {
                return (n.messaging = e);
              },
              function () {}
            );
      }
      function N(e, t) {
        var n,
          r = {};
        for (n in e) e.hasOwnProperty(n) && (r[n] = t(e[n]));
        return r;
      }
      var I =
        ((T.prototype.encode = function (e) {
          var t = this;
          if (null == e) return null;
          if (
            (e instanceof Number && (e = e.valueOf()),
            'number' == typeof e && isFinite(e))
          )
            return e;
          if (!0 === e || !1 === e) return e;
          if ('[object String]' === Object.prototype.toString.call(e)) return e;
          if (Array.isArray(e))
            return e.map(function (e) {
              return t.encode(e);
            });
          if ('function' == typeof e || 'object' == typeof e)
            return N(e, function (e) {
              return t.encode(e);
            });
          throw new Error('Data cannot be encoded in JSON: ' + e);
        }),
        (T.prototype.decode = function (e) {
          var t = this;
          if (null == e) return e;
          if (e['@type'])
            switch (e['@type']) {
              case 'type.googleapis.com/google.protobuf.Int64Value':
              case 'type.googleapis.com/google.protobuf.UInt64Value':
                var n = Number(e.value);
                if (isNaN(n))
                  throw new Error('Data cannot be decoded from JSON: ' + e);
                return n;
              default:
                throw new Error('Data cannot be decoded from JSON: ' + e);
            }
          return Array.isArray(e)
            ? e.map(function (e) {
                return t.decode(e);
              })
            : 'function' == typeof e || 'object' == typeof e
            ? N(e, function (e) {
                return t.decode(e);
              })
            : e;
        }),
        T);
      function T() {}
      var O =
        (Object.defineProperty(A.prototype, 'app', {
          get: function () {
            return this.app_;
          },
          enumerable: !1,
          configurable: !0
        }),
        (A.prototype._url = function (e) {
          var t = this.app_.options.projectId;
          return null === this.emulatorOrigin
            ? null !== this.customDomain
              ? this.customDomain + '/' + e
              : 'https://' + this.region + '-' + t + '.cloudfunctions.net/' + e
            : this.emulatorOrigin + '/' + t + '/' + this.region + '/' + e;
        }),
        (A.prototype.useEmulator = function (e, t) {
          this.emulatorOrigin = 'http://' + e + ':' + t;
        }),
        (A.prototype.useFunctionsEmulator = function (e) {
          this.emulatorOrigin = e;
        }),
        (A.prototype.httpsCallable = function (t, n) {
          var r = this;
          return function (e) {
            return r.call(t, e, n || {});
          };
        }),
        (A.prototype.postJSON = function (r, i, o) {
          return s(this, void 0, void 0, function () {
            var t, n;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  (o['Content-Type'] = 'application/json'), (e.label = 1);
                case 1:
                  return (
                    e.trys.push([1, 3, , 4]),
                    [
                      4,
                      this.fetchImpl(r, {
                        method: 'POST',
                        body: JSON.stringify(i),
                        headers: o
                      })
                    ]
                  );
                case 2:
                  return (t = e.sent()), [3, 4];
                case 3:
                  return e.sent(), [2, { status: 0, json: null }];
                case 4:
                  (n = null), (e.label = 5);
                case 5:
                  return e.trys.push([5, 7, , 8]), [4, t.json()];
                case 6:
                  return (n = e.sent()), [3, 8];
                case 7:
                  return e.sent(), [3, 8];
                case 8:
                  return [2, { status: t.status, json: n }];
              }
            });
          });
        }),
        (A.prototype.call = function (c, l, f) {
          return s(this, void 0, void 0, function () {
            var i, o, s, a, u;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (i = this._url(c)),
                    (l = this.serializer.encode(l)),
                    (o = { data: l }),
                    (s = {}),
                    [4, this.contextProvider.getContext()]
                  );
                case 1:
                  return (
                    (a = e.sent()).authToken &&
                      (s.Authorization = 'Bearer ' + a.authToken),
                    a.instanceIdToken &&
                      (s['Firebase-Instance-ID-Token'] = a.instanceIdToken),
                    (u = f.timeout || 7e4),
                    (n = u),
                    (t = new Promise(function (e, t) {
                      r = setTimeout(function () {
                        t(new m('deadline-exceeded', 'deadline-exceeded'));
                      }, n);
                    })),
                    (u = (a = { timer: r, promise: t }).timer),
                    (a = a.promise),
                    [
                      4,
                      Promise.race([
                        S(u, this.postJSON(i, o, s)),
                        a,
                        S(u, this.cancelAllRequests)
                      ])
                    ]
                  );
                case 2:
                  if (!(a = e.sent()))
                    throw new m(
                      'cancelled',
                      'Firebase Functions instance was deleted.'
                    );
                  if ((u = b(a.status, a.json, this.serializer))) throw u;
                  if (!a.json)
                    throw new m(
                      'internal',
                      'Response is not valid JSON object.'
                    );
                  if (
                    (void 0 === (u = a.json.data) && (u = a.json.result),
                    void 0 === u)
                  )
                    throw new m('internal', 'Response is missing data field.');
                  return [2, { data: this.serializer.decode(u) }];
              }
              var n, r, t;
            });
          });
        }),
        A);
      function A(e, t, n, r, i) {
        var o = this;
        void 0 === r && (r = 'us-central1'),
          (this.app_ = e),
          (this.fetchImpl = i),
          (this.serializer = new I()),
          (this.emulatorOrigin = null),
          (this.INTERNAL = {
            delete: function () {
              return Promise.resolve(o.deleteService());
            }
          }),
          (this.contextProvider = new w(t, n)),
          (this.cancelAllRequests = new Promise(function (e) {
            o.deleteService = function () {
              return e();
            };
          }));
        try {
          var s = new URL(r);
          (this.customDomain = s.origin), (this.region = 'us-central1');
        } catch (e) {
          (this.customDomain = null), (this.region = r);
        }
      }
      function S(n, r) {
        return s(this, void 0, void 0, function () {
          var t;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, r];
              case 1:
                return (t = e.sent()), clearTimeout(n), [2, t];
            }
          });
        });
      }
      var D, k, P;
      (D = t.default),
        (k = fetch.bind(self)),
        (P = { Functions: O }),
        D.INTERNAL.registerComponent(
          new p(
            'functions',
            function (e, t) {
              var n = e.getProvider('app').getImmediate(),
                r = e.getProvider('auth-internal'),
                e = e.getProvider('messaging');
              return new O(n, r, e, t, k);
            },
            'PUBLIC'
          )
            .setServiceProps(P)
            .setMultipleInstances(!0)
        ),
        t.default.registerVersion('@firebase/functions', '0.6.1');
    }.apply(this, arguments));
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        'Cannot instantiate firebase-functions.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-functions.js.map
