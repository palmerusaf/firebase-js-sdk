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
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).firebase = t());
})(this, function () {
  'use strict';
  var n = function (e, t) {
    return (n =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
  };
  var a = function () {
    return (a =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
  function u(e, a, s, c) {
    return new (s = s || Promise)(function (n, t) {
      function r(e) {
        try {
          o(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function i(e) {
        try {
          o(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value) instanceof s
              ? t
              : new s(function (e) {
                  e(t);
                })
            ).then(r, i);
      }
      o((c = c.apply(e, a || [])).next());
    });
  }
  function l(n, r) {
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
          for (; s; )
            try {
              if (
                ((i = 1),
                o &&
                  (a =
                    2 & t[0]
                      ? o.return
                      : t[0]
                      ? o.throw || ((a = o.return) && a.call(o), 0)
                      : o.next) &&
                  !(a = a.call(o, t[1])).done)
              )
                return a;
              switch (((o = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                case 0:
                case 1:
                  a = t;
                  break;
                case 4:
                  return s.label++, { value: t[1], done: !1 };
                case 5:
                  s.label++, (o = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                    s.label = t[1];
                    break;
                  }
                  if (6 === t[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = t);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(t);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              t = r.call(n, s);
            } catch (e) {
              (t = [6, e]), (o = 0);
            } finally {
              i = a = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  function h(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          );
        }
      };
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  }
  function f(e, t) {
    var n = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function r() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e = e.concat(f(arguments[t]));
    return e;
  }
  function i() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    for (var r = Array(e), i = 0, t = 0; t < n; t++)
      for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
        r[i] = o[a];
    return r;
  }
  function d(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var n in t)
      t.hasOwnProperty(n) && '__proto__' !== n && (e[n] = d(e[n], t[n]));
    return e;
  }
  var o =
    ((e.prototype.wrapCallback = function (n) {
      var r = this;
      return function (e, t) {
        e ? r.reject(e) : r.resolve(t),
          'function' == typeof n &&
            (r.promise.catch(function () {}), 1 === n.length ? n(e) : n(e, t));
      };
    }),
    e);
  function e() {
    var n = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, t) {
        (n.resolve = e), (n.reject = t);
      }));
  }
  var s,
    t,
    c,
    p = 'FirebaseError',
    g =
      ((s = Error),
      n((t = v), (c = s)),
      (t.prototype =
        null === c ? Object.create(c) : ((m.prototype = c.prototype), new m())),
      v);
  function m() {
    this.constructor = t;
  }
  function v(e, t, n) {
    t = s.call(this, t) || this;
    return (
      (t.code = e),
      (t.customData = n),
      (t.name = p),
      Object.setPrototypeOf(t, v.prototype),
      Error.captureStackTrace && Error.captureStackTrace(t, y.prototype.create),
      t
    );
  }
  var y =
    ((b.prototype.create = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r,
        i = t[0] || {},
        o = this.service + '/' + e,
        e = this.errors[e],
        e = e
          ? ((r = i),
            e.replace(_, function (e, t) {
              var n = r[t];
              return null != n ? String(n) : '<' + t + '?>';
            }))
          : 'Error',
        e = this.serviceName + ': ' + e + ' (' + o + ').';
      return new g(o, e, i);
    }),
    b);
  function b(e, t, n) {
    (this.service = e), (this.serviceName = t), (this.errors = n);
  }
  var _ = /\{\$([^}]+)}/g;
  function w(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var I =
    ((E.prototype.setInstantiationMode = function (e) {
      return (this.instantiationMode = e), this;
    }),
    (E.prototype.setMultipleInstances = function (e) {
      return (this.multipleInstances = e), this;
    }),
    (E.prototype.setServiceProps = function (e) {
      return (this.serviceProps = e), this;
    }),
    E);
  function E(e, t, n) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = n),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY');
  }
  var S = '[DEFAULT]',
    T =
      ((A.prototype.get = function (e) {
        void 0 === e && (e = S);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var n = new o();
          this.instancesDeferred.set(t, n);
          try {
            var r = this.getOrInitializeService(t);
            r && n.resolve(r);
          } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (A.prototype.getImmediate = function (e) {
        var t = a({ identifier: S, optional: !1 }, e),
          e = t.identifier,
          n = t.optional,
          r = this.normalizeInstanceIdentifier(e);
        try {
          var i = this.getOrInitializeService(r);
          if (i) return i;
          if (n) return null;
          throw Error('Service ' + this.name + ' is not available');
        } catch (e) {
          if (n) return null;
          throw e;
        }
      }),
      (A.prototype.getComponent = function () {
        return this.component;
      }),
      (A.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name)
          throw Error(
            'Mismatching Component ' +
              e.name +
              ' for Provider ' +
              this.name +
              '.'
          );
        if (this.component)
          throw Error(
            'Component for ' + this.name + ' has already been provided'
          );
        if ('EAGER' === (this.component = e).instantiationMode)
          try {
            this.getOrInitializeService(S);
          } catch (e) {}
        try {
          for (
            var r = h(this.instancesDeferred.entries()), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = f(i.value, 2),
              a = o[0],
              s = o[1],
              c = this.normalizeInstanceIdentifier(a);
            try {
              var u = this.getOrInitializeService(c);
              s.resolve(u);
            } catch (e) {}
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (A.prototype.clearInstance = function (e) {
        void 0 === e && (e = S),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (A.prototype.delete = function () {
        return u(this, void 0, void 0, function () {
          var t;
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      r(
                        t
                          .filter(function (e) {
                            return 'INTERNAL' in e;
                          })
                          .map(function (e) {
                            return e.INTERNAL.delete();
                          }),
                        t
                          .filter(function (e) {
                            return '_delete' in e;
                          })
                          .map(function (e) {
                            return e._delete();
                          })
                      )
                    )
                  ]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (A.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (A.prototype.getOrInitializeService = function (e) {
        var t,
          n = this.instances.get(e);
        return (
          !n &&
            this.component &&
            ((n = this.component.instanceFactory(
              this.container,
              (t = e) === S ? void 0 : t
            )),
            this.instances.set(e, n)),
          n || null
        );
      }),
      (A.prototype.normalizeInstanceIdentifier = function (e) {
        return !this.component || this.component.multipleInstances ? e : S;
      }),
      A);
  function A(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map());
  }
  var N =
    ((O.prototype.addComponent = function (e) {
      var t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          'Component ' +
            e.name +
            ' has already been registered with ' +
            this.name
        );
      t.setComponent(e);
    }),
    (O.prototype.addOrOverwriteComponent = function (e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }),
    (O.prototype.getProvider = function (e) {
      if (this.providers.has(e)) return this.providers.get(e);
      var t = new T(e, this);
      return this.providers.set(e, t), t;
    }),
    (O.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }),
    O);
  function O(e) {
    (this.name = e), (this.providers = new Map());
  }
  function k() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    for (var r = Array(e), i = 0, t = 0; t < n; t++)
      for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
        r[i] = o[a];
    return r;
  }
  var P,
    C = [];
  ((ve = P = P || {})[(ve.DEBUG = 0)] = 'DEBUG'),
    (ve[(ve.VERBOSE = 1)] = 'VERBOSE'),
    (ve[(ve.INFO = 2)] = 'INFO'),
    (ve[(ve.WARN = 3)] = 'WARN'),
    (ve[(ve.ERROR = 4)] = 'ERROR'),
    (ve[(ve.SILENT = 5)] = 'SILENT');
  function D(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        o = j[t];
      if (!o)
        throw new Error(
          'Attempted to log a message with an invalid logType (value: ' +
            t +
            ')'
        );
      console[o].apply(console, k(['[' + i + ']  ' + e.name + ':'], n));
    }
  }
  var R = {
      debug: P.DEBUG,
      verbose: P.VERBOSE,
      info: P.INFO,
      warn: P.WARN,
      error: P.ERROR,
      silent: P.SILENT
    },
    L = P.INFO,
    j =
      (((U = {})[P.DEBUG] = 'log'),
      (U[P.VERBOSE] = 'log'),
      (U[P.INFO] = 'info'),
      (U[P.WARN] = 'warn'),
      (U[P.ERROR] = 'error'),
      U),
    M =
      (Object.defineProperty(B.prototype, 'logLevel', {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in P))
            throw new TypeError(
              'Invalid value "' + e + '" assigned to `logLevel`'
            );
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0
      }),
      (B.prototype.setLogLevel = function (e) {
        this._logLevel = 'string' == typeof e ? R[e] : e;
      }),
      Object.defineProperty(B.prototype, 'logHandler', {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if ('function' != typeof e)
            throw new TypeError(
              'Value assigned to `logHandler` must be a function'
            );
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(B.prototype, 'userLogHandler', {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }),
      (B.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, k([this, P.DEBUG], e)),
          this._logHandler.apply(this, k([this, P.DEBUG], e));
      }),
      (B.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, k([this, P.VERBOSE], e)),
          this._logHandler.apply(this, k([this, P.VERBOSE], e));
      }),
      (B.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, k([this, P.INFO], e)),
          this._logHandler.apply(this, k([this, P.INFO], e));
      }),
      (B.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, k([this, P.WARN], e)),
          this._logHandler.apply(this, k([this, P.WARN], e));
      }),
      (B.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, k([this, P.ERROR], e)),
          this._logHandler.apply(this, k([this, P.ERROR], e));
      }),
      B);
  function B(e) {
    (this.name = e),
      (this._logLevel = L),
      (this._logHandler = D),
      (this._userLogHandler = null),
      C.push(this);
  }
  function x(t) {
    C.forEach(function (e) {
      e.setLogLevel(t);
    });
  }
  var U =
      (((ve = {})['no-app'] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (ve['bad-app-name'] = "Illegal App name: '{$appName}"),
      (ve['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
      (ve['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
      (ve['invalid-app-argument'] =
        'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
      (ve['invalid-log-argument'] =
        'First argument to `onLog` must be null or a function.'),
      ve),
    F = new y('app', 'Firebase', U),
    q = '@firebase/app',
    V = '[DEFAULT]',
    H =
      (((ve = {})[q] = 'fire-core'),
      (ve['@firebase/analytics'] = 'fire-analytics'),
      (ve['@firebase/auth'] = 'fire-auth'),
      (ve['@firebase/database'] = 'fire-rtdb'),
      (ve['@firebase/functions'] = 'fire-fn'),
      (ve['@firebase/installations'] = 'fire-iid'),
      (ve['@firebase/messaging'] = 'fire-fcm'),
      (ve['@firebase/performance'] = 'fire-perf'),
      (ve['@firebase/remote-config'] = 'fire-rc'),
      (ve['@firebase/storage'] = 'fire-gcs'),
      (ve['@firebase/firestore'] = 'fire-fst'),
      (ve['fire-js'] = 'fire-js'),
      (ve['firebase-wrapper'] = 'fire-js-all'),
      ve),
    K =
      (Object.defineProperty($.prototype, 'automaticDataCollectionEnabled', {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty($.prototype, 'name', {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty($.prototype, 'options', {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !1,
        configurable: !0
      }),
      ($.prototype.delete = function () {
        var t = this;
        return new Promise(function (e) {
          t.checkDestroyed_(), e();
        })
          .then(function () {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function (e) {
                  return e.delete();
                })
              )
            );
          })
          .then(function () {
            t.isDeleted_ = !0;
          });
      }),
      ($.prototype._getService = function (e, t) {
        return (
          void 0 === t && (t = V),
          this.checkDestroyed_(),
          this.container.getProvider(e).getImmediate({ identifier: t })
        );
      }),
      ($.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw F.create('app-deleted', { appName: this.name_ });
      }),
      $);
  function $(e, t, n) {
    var r,
      i,
      o = this;
    (this.firebase_ = n),
      (this.isDeleted_ = !1),
      (this.INTERNAL = {}),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = d(void 0, e)),
      (this.container = new N(t.name)),
      this.container.addComponent(
        new I(
          'app',
          function () {
            return o;
          },
          'PUBLIC'
        )
      );
    try {
      for (
        var a = h(this.firebase_.INTERNAL.components.values()), s = a.next();
        !s.done;
        s = a.next()
      ) {
        var c = s.value;
        this.container.addComponent(c);
      }
    } catch (e) {
      r = { error: e };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  var z = '8.1.1',
    W = new M('@firebase/app');
  function G(c) {
    var u = {},
      l = new Map(),
      f = {
        __esModule: !0,
        initializeApp: function (e, t) {
          void 0 === t && (t = {});
          {
            ('object' == typeof t && null !== t) || (t = { name: t });
          }
          var n = t;
          void 0 === n.name && (n.name = V);
          t = n.name;
          if ('string' != typeof t || !t)
            throw F.create('bad-app-name', { appName: String(t) });
          if (w(u, t)) throw F.create('duplicate-app', { appName: t });
          n = new c(e, n, f);
          return (u[t] = n);
        },
        app: p,
        registerVersion: function (e, t, n) {
          var r = null !== (i = H[e]) && void 0 !== i ? i : e;
          n && (r += '-' + n);
          var i = r.match(/\s|\//),
            e = t.match(/\s|\//);
          if (i || e) {
            n = [
              'Unable to register library "' + r + '" with version "' + t + '":'
            ];
            return (
              i &&
                n.push(
                  'library name "' +
                    r +
                    '" contains illegal characters (whitespace or "/")'
                ),
              i && e && n.push('and'),
              e &&
                n.push(
                  'version name "' +
                    t +
                    '" contains illegal characters (whitespace or "/")'
                ),
              void W.warn(n.join(' '))
            );
          }
          o(
            new I(
              r + '-version',
              function () {
                return { library: r, version: t };
              },
              'VERSION'
            )
          );
        },
        setLogLevel: x,
        onLog: function (e, t) {
          if (null !== e && 'function' != typeof e)
            throw F.create('invalid-log-argument', { appName: name });
          !(function (a, t) {
            for (var e = 0, n = C; e < n.length; e++) {
              !(function (e) {
                var o = null;
                t && t.level && (o = R[t.level]),
                  (e.userLogHandler =
                    null === a
                      ? null
                      : function (e, t) {
                          for (var n = [], r = 2; r < arguments.length; r++)
                            n[r - 2] = arguments[r];
                          var i = n
                            .map(function (e) {
                              if (null == e) return null;
                              if ('string' == typeof e) return e;
                              if ('number' == typeof e || 'boolean' == typeof e)
                                return e.toString();
                              if (e instanceof Error) return e.message;
                              try {
                                return JSON.stringify(e);
                              } catch (e) {
                                return null;
                              }
                            })
                            .filter(function (e) {
                              return e;
                            })
                            .join(' ');
                          t >= (null != o ? o : e.logLevel) &&
                            a({
                              level: P[t].toLowerCase(),
                              message: i,
                              args: n,
                              type: e.name
                            });
                        });
              })(n[e]);
            }
          })(e, t);
        },
        apps: null,
        SDK_VERSION: z,
        INTERNAL: {
          registerComponent: o,
          removeApp: function (e) {
            delete u[e];
          },
          components: l,
          useAsService: function (e, t) {
            if ('serverAuth' === t) return null;
            return t;
          }
        }
      };
    function p(e) {
      if (!w(u, (e = e || V))) throw F.create('no-app', { appName: e });
      return u[e];
    }
    function o(n) {
      var t,
        e,
        r,
        i = n.name;
      if (l.has(i))
        return (
          W.debug(
            'There were multiple attempts to register component ' + i + '.'
          ),
          'PUBLIC' === n.type ? f[i] : null
        );
      l.set(i, n),
        'PUBLIC' === n.type &&
          ((r = function (e) {
            if ((void 0 === e && (e = p()), 'function' != typeof e[i]))
              throw F.create('invalid-app-argument', { appName: i });
            return e[i]();
          }),
          void 0 !== n.serviceProps && d(r, n.serviceProps),
          (f[i] = r),
          (c.prototype[i] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this._getService
              .bind(this, i)
              .apply(this, n.multipleInstances ? e : []);
          }));
      try {
        for (var o = h(Object.keys(u)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          u[s]._addComponent(n);
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          a && !a.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return 'PUBLIC' === n.type ? f[i] : null;
    }
    return (
      (f.default = f),
      Object.defineProperty(f, 'apps', {
        get: function () {
          return Object.keys(u).map(function (e) {
            return u[e];
          });
        }
      }),
      (p.App = c),
      f
    );
  }
  var J =
    ((Y.prototype.getPlatformInfoString = function () {
      return this.container
        .getProviders()
        .map(function (e) {
          if (
            (function (e) {
              e = e.getComponent();
              return 'VERSION' === (null == e ? void 0 : e.type);
            })(e)
          ) {
            e = e.getImmediate();
            return e.library + '/' + e.version;
          }
          return null;
        })
        .filter(function (e) {
          return e;
        })
        .join(' ');
    }),
    Y);
  function Y(e) {
    this.container = e;
  }
  var Z,
    Q,
    X = (function () {
      var e = G(K);
      e.SDK_VERSION = e.SDK_VERSION + '_LITE';
      var t = e.INTERNAL.registerComponent;
      return (
        (e.INTERNAL.registerComponent = function (e) {
          if (
            'PUBLIC' !== e.type ||
            'performance' === e.name ||
            'installations' === e.name
          )
            return t(e);
          throw Error(
            name + ' cannot register with the standalone perf instance'
          );
        }),
        e
      );
    })();
  function ee(n) {
    return new Promise(function (e, t) {
      (n.onsuccess = function () {
        e(n.result);
      }),
        (n.onerror = function () {
          t(n.error);
        });
    });
  }
  function te(n, r, i) {
    var o,
      e = new Promise(function (e, t) {
        ee((o = n[r].apply(n, i))).then(e, t);
      });
    return (e.request = o), e;
  }
  function ne(e, n, t) {
    t.forEach(function (t) {
      Object.defineProperty(e.prototype, t, {
        get: function () {
          return this[n][t];
        },
        set: function (e) {
          this[n][t] = e;
        }
      });
    });
  }
  function re(t, n, r, e) {
    e.forEach(function (e) {
      e in r.prototype &&
        (t.prototype[e] = function () {
          return te(this[n], e, arguments);
        });
    });
  }
  function ie(t, n, r, e) {
    e.forEach(function (e) {
      e in r.prototype &&
        (t.prototype[e] = function () {
          return this[n][e].apply(this[n], arguments);
        });
    });
  }
  function oe(e, r, t, n) {
    n.forEach(function (n) {
      n in t.prototype &&
        (e.prototype[n] = function () {
          return (
            (e = this[r]),
            (t = te(e, n, arguments)).then(function (e) {
              if (e) return new se(e, t.request);
            })
          );
          var e, t;
        });
    });
  }
  function ae(e) {
    this._index = e;
  }
  function se(e, t) {
    (this._cursor = e), (this._request = t);
  }
  function ce(e) {
    this._store = e;
  }
  function ue(n) {
    (this._tx = n),
      (this.complete = new Promise(function (e, t) {
        (n.oncomplete = function () {
          e();
        }),
          (n.onerror = function () {
            t(n.error);
          }),
          (n.onabort = function () {
            t(n.error);
          });
      }));
  }
  function le(e, t, n) {
    (this._db = e), (this.oldVersion = t), (this.transaction = new ue(n));
  }
  function fe(e) {
    this._db = e;
  }
  (Q = 'lite'),
    (Z = X).INTERNAL.registerComponent(
      new I(
        'platform-logger',
        function (e) {
          return new J(e);
        },
        'PRIVATE'
      )
    ),
    Z.registerVersion(q, '0.6.13', Q),
    Z.registerVersion('fire-js', ''),
    ne(ae, '_index', ['name', 'keyPath', 'multiEntry', 'unique']),
    re(ae, '_index', IDBIndex, [
      'get',
      'getKey',
      'getAll',
      'getAllKeys',
      'count'
    ]),
    oe(ae, '_index', IDBIndex, ['openCursor', 'openKeyCursor']),
    ne(se, '_cursor', ['direction', 'key', 'primaryKey', 'value']),
    re(se, '_cursor', IDBCursor, ['update', 'delete']),
    ['advance', 'continue', 'continuePrimaryKey'].forEach(function (n) {
      n in IDBCursor.prototype &&
        (se.prototype[n] = function () {
          var t = this,
            e = arguments;
          return Promise.resolve().then(function () {
            return (
              t._cursor[n].apply(t._cursor, e),
              ee(t._request).then(function (e) {
                if (e) return new se(e, t._request);
              })
            );
          });
        });
    }),
    (ce.prototype.createIndex = function () {
      return new ae(this._store.createIndex.apply(this._store, arguments));
    }),
    (ce.prototype.index = function () {
      return new ae(this._store.index.apply(this._store, arguments));
    }),
    ne(ce, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']),
    re(ce, '_store', IDBObjectStore, [
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
    oe(ce, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']),
    ie(ce, '_store', IDBObjectStore, ['deleteIndex']),
    (ue.prototype.objectStore = function () {
      return new ce(this._tx.objectStore.apply(this._tx, arguments));
    }),
    ne(ue, '_tx', ['objectStoreNames', 'mode']),
    ie(ue, '_tx', IDBTransaction, ['abort']),
    (le.prototype.createObjectStore = function () {
      return new ce(this._db.createObjectStore.apply(this._db, arguments));
    }),
    ne(le, '_db', ['name', 'version', 'objectStoreNames']),
    ie(le, '_db', IDBDatabase, ['deleteObjectStore', 'close']),
    (fe.prototype.transaction = function () {
      return new ue(this._db.transaction.apply(this._db, arguments));
    }),
    ne(fe, '_db', ['name', 'version', 'objectStoreNames']),
    ie(fe, '_db', IDBDatabase, ['close']),
    ['openCursor', 'openKeyCursor'].forEach(function (i) {
      [ce, ae].forEach(function (e) {
        i in e.prototype &&
          (e.prototype[i.replace('open', 'iterate')] = function () {
            var e = ((n = arguments), Array.prototype.slice.call(n)),
              t = e[e.length - 1],
              n = this._store || this._index,
              r = n[i].apply(n, e.slice(0, -1));
            r.onsuccess = function () {
              t(r.result);
            };
          });
      });
    }),
    [ae, ce].forEach(function (e) {
      e.prototype.getAll ||
        (e.prototype.getAll = function (e, n) {
          var r = this,
            i = [];
          return new Promise(function (t) {
            r.iterateCursor(e, function (e) {
              e
                ? (i.push(e.value),
                  void 0 === n || i.length != n ? e.continue() : t(i))
                : t(i);
            });
          });
        });
    });
  var pe = 1e4,
    he = 'w:0.4.19',
    de = 'FIS_v2',
    ge = 'https://firebaseinstallations.googleapis.com/v1',
    me = 36e5,
    ve =
      (((U = {})['missing-app-config-values'] =
        'Missing App configuration value: "{$valueName}"'),
      (U['not-registered'] = 'Firebase Installation is not registered.'),
      (U['installation-not-found'] = 'Firebase Installation not found.'),
      (U['request-failed'] =
        '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
      (U['app-offline'] = 'Could not process request. Application offline.'),
      (U['delete-pending-registration'] =
        "Can't delete installation while there is a pending registration request."),
      U),
    ye = new y('installations', 'Installations', ve);
  function be(e) {
    return e instanceof g && e.code.includes('request-failed');
  }
  function _e(e) {
    e = e.projectId;
    return ge + '/projects/' + e + '/installations';
  }
  function we(e) {
    return {
      token: e.token,
      requestStatus: 2,
      expiresIn: ((e = e.expiresIn), Number(e.replace('s', '000'))),
      creationTime: Date.now()
    };
  }
  function Ie(n, r) {
    return u(this, void 0, void 0, function () {
      var t;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, r.json()];
          case 1:
            return (
              (t = e.sent()),
              (t = t.error),
              [
                2,
                ye.create('request-failed', {
                  requestName: n,
                  serverCode: t.code,
                  serverMessage: t.message,
                  serverStatus: t.status
                })
              ]
            );
        }
      });
    });
  }
  function Ee(e) {
    e = e.apiKey;
    return new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-goog-api-key': e
    });
  }
  function Se(e, t) {
    (t = t.refreshToken), (e = Ee(e));
    return e.append('Authorization', de + ' ' + t), e;
  }
  function Te(n) {
    return u(this, void 0, void 0, function () {
      var t;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, n()];
          case 1:
            return 500 <= (t = e.sent()).status && t.status < 600
              ? [2, n()]
              : [2, t];
        }
      });
    });
  }
  function Ae(t) {
    return new Promise(function (e) {
      setTimeout(e, t);
    });
  }
  var Ne = /^[cdef][\w-]{21}$/,
    Oe = '';
  function ke() {
    try {
      var e = new Uint8Array(17);
      (self.crypto || self.msCrypto).getRandomValues(e),
        (e[0] = 112 + (e[0] % 16));
      e = (function (e) {
        return btoa(String.fromCharCode.apply(String, r(e)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
      })(e).substr(0, 22);
      return Ne.test(e) ? e : Oe;
    } catch (e) {
      return Oe;
    }
  }
  function Pe(e) {
    return e.appName + '!' + e.appId;
  }
  var Ce = new Map();
  function De(e, t) {
    e = Pe(e);
    Re(e, t),
      (function (e, t) {
        var n = je();
        n && n.postMessage({ key: e, fid: t });
        Me();
      })(e, t);
  }
  function Re(e, t) {
    var n,
      r,
      i = Ce.get(e);
    if (i)
      try {
        for (var o = h(i), a = o.next(); !a.done; a = o.next()) {
          (0, a.value)(t);
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          a && !a.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
  }
  var Le = null;
  function je() {
    return (
      !Le &&
        'BroadcastChannel' in self &&
        ((Le = new BroadcastChannel(
          '[Firebase] FID Change'
        )).onmessage = function (e) {
          Re(e.data.key, e.data.fid);
        }),
      Le
    );
  }
  function Me() {
    0 === Ce.size && Le && (Le.close(), (Le = null));
  }
  var Be,
    xe = 'firebase-installations-database',
    Ue = 1,
    Fe = 'firebase-installations-store',
    qe = null;
  function Ve() {
    var e, t, n;
    return (
      qe ||
        ((e = Ue),
        (t = function (e) {
          0 === e.oldVersion && e.createObjectStore(Fe);
        }),
        (n = (e = te(indexedDB, 'open', [xe, e])).request) &&
          (n.onupgradeneeded = function (e) {
            t && t(new le(n.result, e.oldVersion, n.transaction));
          }),
        (qe = e.then(function (e) {
          return new fe(e);
        }))),
      qe
    );
  }
  function He(o, a) {
    return u(this, void 0, void 0, function () {
      var t, n, r, i;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return (t = Pe(o)), [4, Ve()];
          case 1:
            return (
              (r = e.sent()),
              (n = r.transaction(Fe, 'readwrite')),
              [4, (r = n.objectStore(Fe)).get(t)]
            );
          case 2:
            return (i = e.sent()), [4, r.put(a, t)];
          case 3:
            return e.sent(), [4, n.complete];
          case 4:
            return e.sent(), (i && i.fid === a.fid) || De(o, a.fid), [2, a];
        }
      });
    });
  }
  function Ke(r) {
    return u(this, void 0, void 0, function () {
      var t, n;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return (t = Pe(r)), [4, Ve()];
          case 1:
            return (
              (n = e.sent()),
              [
                4,
                (n = n.transaction(Fe, 'readwrite')).objectStore(Fe).delete(t)
              ]
            );
          case 2:
            return e.sent(), [4, n.complete];
          case 3:
            return e.sent(), [2];
        }
      });
    });
  }
  function $e(a, s) {
    return u(this, void 0, void 0, function () {
      var t, n, r, i, o;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return (t = Pe(a)), [4, Ve()];
          case 1:
            return (
              (r = e.sent()),
              (n = r.transaction(Fe, 'readwrite')),
              [4, (r = n.objectStore(Fe)).get(t)]
            );
          case 2:
            return (
              (i = e.sent()), void 0 !== (o = s(i)) ? [3, 4] : [4, r.delete(t)]
            );
          case 3:
            return e.sent(), [3, 6];
          case 4:
            return [4, r.put(o, t)];
          case 5:
            e.sent(), (e.label = 6);
          case 6:
            return [4, n.complete];
          case 7:
            return (
              e.sent(), !o || (i && i.fid === o.fid) || De(a, o.fid), [2, o]
            );
        }
      });
    });
  }
  function ze(i) {
    return u(this, void 0, void 0, function () {
      var t, n, r;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return [
              4,
              $e(i, function (e) {
                (e = Ge(e || { fid: ke(), registrationStatus: 0 })),
                  (e = (function (e, t) {
                    {
                      if (0 !== t.registrationStatus)
                        return 1 === t.registrationStatus
                          ? {
                              installationEntry: t,
                              registrationPromise: (function (i) {
                                return u(this, void 0, void 0, function () {
                                  var t, n, r;
                                  return l(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        return [4, We(i)];
                                      case 1:
                                        (t = e.sent()), (e.label = 2);
                                      case 2:
                                        return 1 !== t.registrationStatus
                                          ? [3, 5]
                                          : [4, Ae(100)];
                                      case 3:
                                        return e.sent(), [4, We(i)];
                                      case 4:
                                        return (t = e.sent()), [3, 2];
                                      case 5:
                                        return 0 !== t.registrationStatus
                                          ? [3, 7]
                                          : [4, ze(i)];
                                      case 6:
                                        return (
                                          (r = e.sent()),
                                          (n = r.installationEntry),
                                          (r = r.registrationPromise)
                                            ? [2, r]
                                            : [2, n]
                                        );
                                      case 7:
                                        return [2, t];
                                    }
                                  });
                                });
                              })(e)
                            }
                          : { installationEntry: t };
                      if (!navigator.onLine) {
                        var n = Promise.reject(ye.create('app-offline'));
                        return { installationEntry: t, registrationPromise: n };
                      }
                      (t = {
                        fid: t.fid,
                        registrationStatus: 1,
                        registrationTime: Date.now()
                      }),
                        (e = (function (r, i) {
                          return u(this, void 0, void 0, function () {
                            var t, n;
                            return l(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return (
                                    e.trys.push([0, 2, , 7]),
                                    [
                                      4,
                                      (function (a, e) {
                                        var s = e.fid;
                                        return u(
                                          this,
                                          void 0,
                                          void 0,
                                          function () {
                                            var t, n, r, i, o;
                                            return l(this, function (e) {
                                              switch (e.label) {
                                                case 0:
                                                  return (
                                                    (t = _e(a)),
                                                    (n = Ee(a)),
                                                    (o = {
                                                      fid: s,
                                                      authVersion: de,
                                                      appId: a.appId,
                                                      sdkVersion: he
                                                    }),
                                                    (r = {
                                                      method: 'POST',
                                                      headers: n,
                                                      body: JSON.stringify(o)
                                                    }),
                                                    [
                                                      4,
                                                      Te(function () {
                                                        return fetch(t, r);
                                                      })
                                                    ]
                                                  );
                                                case 1:
                                                  return (i = e.sent()).ok
                                                    ? [4, i.json()]
                                                    : [3, 3];
                                                case 2:
                                                  return (
                                                    (o = e.sent()),
                                                    [
                                                      2,
                                                      {
                                                        fid: o.fid || s,
                                                        registrationStatus: 2,
                                                        refreshToken:
                                                          o.refreshToken,
                                                        authToken: we(
                                                          o.authToken
                                                        )
                                                      }
                                                    ]
                                                  );
                                                case 3:
                                                  return [
                                                    4,
                                                    Ie('Create Installation', i)
                                                  ];
                                                case 4:
                                                  throw e.sent();
                                              }
                                            });
                                          }
                                        );
                                      })(r, i)
                                    ]
                                  );
                                case 1:
                                  return (t = e.sent()), [2, He(r, t)];
                                case 2:
                                  return be((n = e.sent())) &&
                                    409 === n.customData.serverCode
                                    ? [4, Ke(r)]
                                    : [3, 4];
                                case 3:
                                  return e.sent(), [3, 6];
                                case 4:
                                  return [
                                    4,
                                    He(r, { fid: i.fid, registrationStatus: 0 })
                                  ];
                                case 5:
                                  e.sent(), (e.label = 6);
                                case 6:
                                  throw n;
                                case 7:
                                  return [2];
                              }
                            });
                          });
                        })(e, t));
                      return { installationEntry: t, registrationPromise: e };
                    }
                  })(i, e));
                return (t = e.registrationPromise), e.installationEntry;
              })
            ];
          case 1:
            return (n = e.sent()).fid !== Oe ? [3, 3] : ((r = {}), [4, t]);
          case 2:
            return [2, ((r.installationEntry = e.sent()), r)];
          case 3:
            return [2, { installationEntry: n, registrationPromise: t }];
        }
      });
    });
  }
  function We(e) {
    return $e(e, function (e) {
      if (!e) throw ye.create('installation-not-found');
      return Ge(e);
    });
  }
  function Ge(e) {
    return 1 === (t = e).registrationStatus &&
      t.registrationTime + pe < Date.now()
      ? { fid: e.fid, registrationStatus: 0 }
      : e;
    var t;
  }
  function Je(e, a) {
    var s = e.appConfig,
      c = e.platformLoggerProvider;
    return u(this, void 0, void 0, function () {
      var t, n, r, i, o;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (t = (function (e, t) {
                t = t.fid;
                return _e(e) + '/' + t + '/authTokens:generate';
              })(s, a)),
              (n = Se(s, a)),
              (o = c.getImmediate({ optional: !0 })) &&
                n.append('x-firebase-client', o.getPlatformInfoString()),
              (o = { installation: { sdkVersion: he } }),
              (r = { method: 'POST', headers: n, body: JSON.stringify(o) }),
              [
                4,
                Te(function () {
                  return fetch(t, r);
                })
              ]
            );
          case 1:
            return (i = e.sent()).ok ? [4, i.json()] : [3, 3];
          case 2:
            return (o = e.sent()), [2, we(o)];
          case 3:
            return [4, Ie('Generate Auth Token', i)];
          case 4:
            throw e.sent();
        }
      });
    });
  }
  function Ye(i, o) {
    return (
      void 0 === o && (o = !1),
      u(this, void 0, void 0, function () {
        var r, t, n;
        return l(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                $e(i.appConfig, function (e) {
                  if (!Qe(e)) throw ye.create('not-registered');
                  var t,
                    n = e.authToken;
                  if (
                    o ||
                    2 !== (t = n).requestStatus ||
                    (function (e) {
                      var t = Date.now();
                      return (
                        t < e.creationTime ||
                        e.creationTime + e.expiresIn < t + me
                      );
                    })(t)
                  ) {
                    if (1 === n.requestStatus)
                      return (
                        (r = (function (n, r) {
                          return u(this, void 0, void 0, function () {
                            var t;
                            return l(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, Ze(n.appConfig)];
                                case 1:
                                  (t = e.sent()), (e.label = 2);
                                case 2:
                                  return 1 !== t.authToken.requestStatus
                                    ? [3, 5]
                                    : [4, Ae(100)];
                                case 3:
                                  return e.sent(), [4, Ze(n.appConfig)];
                                case 4:
                                  return (t = e.sent()), [3, 2];
                                case 5:
                                  return 0 === (t = t.authToken).requestStatus
                                    ? [2, Ye(n, r)]
                                    : [2, t];
                              }
                            });
                          });
                        })(i, o)),
                        e
                      );
                    if (!navigator.onLine) throw ye.create('app-offline');
                    n =
                      ((t = e),
                      (n = { requestStatus: 1, requestTime: Date.now() }),
                      a(a({}, t), { authToken: n }));
                    return (
                      (r = (function (i, o) {
                        return u(this, void 0, void 0, function () {
                          var t, n, r;
                          return l(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([0, 3, , 8]), [4, Je(i, o)];
                              case 1:
                                return (
                                  (t = e.sent()),
                                  (r = a(a({}, o), { authToken: t })),
                                  [4, He(i.appConfig, r)]
                                );
                              case 2:
                                return e.sent(), [2, t];
                              case 3:
                                return !be((n = e.sent())) ||
                                  (401 !== n.customData.serverCode &&
                                    404 !== n.customData.serverCode)
                                  ? [3, 5]
                                  : [4, Ke(i.appConfig)];
                              case 4:
                                return e.sent(), [3, 7];
                              case 5:
                                return (
                                  (r = a(a({}, o), {
                                    authToken: { requestStatus: 0 }
                                  })),
                                  [4, He(i.appConfig, r)]
                                );
                              case 6:
                                e.sent(), (e.label = 7);
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
                  return e;
                })
              ];
            case 1:
              return (t = e.sent()), r ? [4, r] : [3, 3];
            case 2:
              return (n = e.sent()), [3, 4];
            case 3:
              (n = t.authToken), (e.label = 4);
            case 4:
              return [2, n];
          }
        });
      })
    );
  }
  function Ze(e) {
    return $e(e, function (e) {
      if (!Qe(e)) throw ye.create('not-registered');
      var t = e.authToken;
      return 1 === (t = t).requestStatus && t.requestTime + pe < Date.now()
        ? a(a({}, e), { authToken: { requestStatus: 0 } })
        : e;
    });
  }
  function Qe(e) {
    return void 0 !== e && 2 === e.registrationStatus;
  }
  function Xe(t, n) {
    return (
      void 0 === n && (n = !1),
      u(this, void 0, void 0, function () {
        return l(this, function (e) {
          switch (e.label) {
            case 0:
              return [
                4,
                (function (n) {
                  return u(this, void 0, void 0, function () {
                    var t;
                    return l(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, ze(n)];
                        case 1:
                          return (t = e.sent().registrationPromise)
                            ? [4, t]
                            : [3, 3];
                        case 2:
                          e.sent(), (e.label = 3);
                        case 3:
                          return [2];
                      }
                    });
                  });
                })(t.appConfig)
              ];
            case 1:
              return e.sent(), [4, Ye(t, n)];
            case 2:
              return [2, e.sent().token];
          }
        });
      })
    );
  }
  function et(i, o) {
    return u(this, void 0, void 0, function () {
      var t, n, r;
      return l(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (t = (function (e, t) {
                t = t.fid;
                return _e(e) + '/' + t;
              })(i, o)),
              (r = Se(i, o)),
              (n = { method: 'DELETE', headers: r }),
              [
                4,
                Te(function () {
                  return fetch(t, n);
                })
              ]
            );
          case 1:
            return (r = e.sent()).ok
              ? [3, 3]
              : [4, Ie('Delete Installation', r)];
          case 2:
            throw e.sent();
          case 3:
            return [2];
        }
      });
    });
  }
  function tt(e, r) {
    var i = e.appConfig;
    return (
      (function (e, t) {
        je();
        var n = Pe(e);
        (e = Ce.get(n)) || ((e = new Set()), Ce.set(n, e)), e.add(t);
      })(i, r),
      function () {
        var e, t, n;
        (t = r),
          (n = Pe((e = i))),
          (e = Ce.get(n)) && (e.delete(t), 0 === e.size && Ce.delete(n), Me());
      }
    );
  }
  function nt(e) {
    return ye.create('missing-app-config-values', { valueName: e });
  }
  (Be = X).INTERNAL.registerComponent(
    new I(
      'installations',
      function (e) {
        var t = e.getProvider('app').getImmediate(),
          n = {
            appConfig: (function (e) {
              var t, n;
              if (!e || !e.options) throw nt('App Configuration');
              if (!e.name) throw nt('App Name');
              try {
                for (
                  var r = h(['projectId', 'apiKey', 'appId']), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var o = i.value;
                  if (!e.options[o]) throw nt(o);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId
              };
            })(t),
            platformLoggerProvider: e.getProvider('platform-logger')
          };
        return {
          app: t,
          getId: function () {
            return (function (r) {
              return u(this, void 0, void 0, function () {
                var t, n;
                return l(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, ze(r.appConfig)];
                    case 1:
                      return (
                        (t = e.sent()),
                        (n = t.installationEntry),
                        (t.registrationPromise || Ye(r)).catch(console.error),
                        [2, n.fid]
                      );
                  }
                });
              });
            })(n);
          },
          getToken: function (e) {
            return Xe(n, e);
          },
          delete: function () {
            return (function (r) {
              return u(this, void 0, void 0, function () {
                var t, n;
                return l(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        $e((t = r.appConfig), function (e) {
                          if (!e || 0 !== e.registrationStatus) return e;
                        })
                      ];
                    case 1:
                      if (!(n = e.sent())) return [3, 6];
                      if (1 !== n.registrationStatus) return [3, 2];
                      throw ye.create('delete-pending-registration');
                    case 2:
                      if (2 !== n.registrationStatus) return [3, 6];
                      if (navigator.onLine) return [3, 3];
                      throw ye.create('app-offline');
                    case 3:
                      return [4, et(t, n)];
                    case 4:
                      return e.sent(), [4, Ke(t)];
                    case 5:
                      e.sent(), (e.label = 6);
                    case 6:
                      return [2];
                  }
                });
              });
            })(n);
          },
          onIdChange: function (e) {
            return tt(n, e);
          }
        };
      },
      'PUBLIC'
    )
  ),
    Be.registerVersion('@firebase/installations', '0.4.19');
  var rt,
    it,
    ot = '0.4.4',
    at = 'FB-PERF-TRACE-MEASURE',
    st = '@firebase/performance/config',
    ct = '@firebase/performance/configexpire',
    U = 'Performance',
    ve =
      (((ve = {})['trace started'] = 'Trace {$traceName} was started before.'),
      (ve['trace stopped'] = 'Trace {$traceName} is not running.'),
      (ve['nonpositive trace startTime'] =
        'Trace {$traceName} startTime should be positive.'),
      (ve['nonpositive trace duration'] =
        'Trace {$traceName} duration should be positive.'),
      (ve['no window'] = 'Window is not available.'),
      (ve['no app id'] = 'App id is not available.'),
      (ve['no project id'] = 'Project id is not available.'),
      (ve['no api key'] = 'Api key is not available.'),
      (ve['invalid cc log'] = 'Attempted to queue invalid cc event'),
      (ve['FB not default'] =
        'Performance can only start when Firebase app instance is the default one.'),
      (ve['RC response not ok'] = 'RC response is not ok'),
      (ve['invalid attribute name'] =
        'Attribute name {$attributeName} is invalid.'),
      (ve['invalid attribute value'] =
        'Attribute value {$attributeValue} is invalid.'),
      (ve['invalid custom metric name'] =
        'Custom metric name {$customMetricName} is invalid'),
      (ve['invalid String merger input'] =
        'Input for String merger is invalid, contact support team to resolve.'),
      ve),
    ut = new y('performance', U, ve),
    lt = new M(U);
  lt.logLevel = P.INFO;
  var ft,
    pt =
      ((ht.prototype.getUrl = function () {
        return this.windowLocation.href.split('?')[0];
      }),
      (ht.prototype.mark = function (e) {
        this.performance && this.performance.mark && this.performance.mark(e);
      }),
      (ht.prototype.measure = function (e, t, n) {
        this.performance &&
          this.performance.measure &&
          this.performance.measure(e, t, n);
      }),
      (ht.prototype.getEntriesByType = function (e) {
        return this.performance && this.performance.getEntriesByType
          ? this.performance.getEntriesByType(e)
          : [];
      }),
      (ht.prototype.getEntriesByName = function (e) {
        return this.performance && this.performance.getEntriesByName
          ? this.performance.getEntriesByName(e)
          : [];
      }),
      (ht.prototype.getTimeOrigin = function () {
        return (
          this.performance &&
          (this.performance.timeOrigin ||
            this.performance.timing.navigationStart)
        );
      }),
      (ht.prototype.requiredApisAvailable = function () {
        return fetch &&
          Promise &&
          this.navigator &&
          this.navigator.cookieEnabled
          ? ('indexedDB' in self && null != indexedDB) ||
              (lt.info('IndexedDB is not supported by current browswer'), !1)
          : (lt.info(
              'Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.'
            ),
            !1);
      }),
      (ht.prototype.setupObserver = function (e, i) {
        this.PerformanceObserver &&
          new this.PerformanceObserver(function (e) {
            for (var t = 0, n = e.getEntries(); t < n.length; t++) {
              var r = n[t];
              i(r);
            }
          }).observe({ entryTypes: [e] });
      }),
      (ht.getInstance = function () {
        return void 0 === rt && (rt = new ht(it)), rt;
      }),
      ht);
  function ht(e) {
    if (!(this.window = e)) throw ut.create('no window');
    (this.performance = e.performance),
      (this.PerformanceObserver = e.PerformanceObserver),
      (this.windowLocation = e.location),
      (this.navigator = e.navigator),
      (this.document = e.document),
      this.navigator &&
        this.navigator.cookieEnabled &&
        (this.localStorage = e.localStorage),
      e.perfMetrics &&
        e.perfMetrics.onFirstInputDelay &&
        (this.onFirstInputDelay = e.perfMetrics.onFirstInputDelay);
  }
  function dt(e, t) {
    var n = e.length - t.length;
    if (n < 0 || 1 < n) throw ut.create('invalid String merger input');
    for (var r = [], i = 0; i < e.length; i++)
      r.push(e.charAt(i)), t.length > i && r.push(t.charAt(i));
    return r.join('');
  }
  var gt,
    mt,
    vt =
      ((yt.prototype.getAppId = function () {
        var e =
          this.firebaseAppInstance &&
          this.firebaseAppInstance.options &&
          this.firebaseAppInstance.options.appId;
        if (!e) throw ut.create('no app id');
        return e;
      }),
      (yt.prototype.getProjectId = function () {
        var e =
          this.firebaseAppInstance &&
          this.firebaseAppInstance.options &&
          this.firebaseAppInstance.options.projectId;
        if (!e) throw ut.create('no project id');
        return e;
      }),
      (yt.prototype.getApiKey = function () {
        var e =
          this.firebaseAppInstance &&
          this.firebaseAppInstance.options &&
          this.firebaseAppInstance.options.apiKey;
        if (!e) throw ut.create('no api key');
        return e;
      }),
      (yt.prototype.getFlTransportFullUrl = function () {
        return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
      }),
      (yt.getInstance = function () {
        return void 0 === ft && (ft = new yt()), ft;
      }),
      yt);
  function yt() {
    (this.instrumentationEnabled = !0),
      (this.dataCollectionEnabled = !0),
      (this.loggingEnabled = !1),
      (this.tracesSamplingRate = 1),
      (this.networkRequestsSamplingRate = 1),
      (this.logEndPointUrl =
        'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'),
      (this.flTransportEndpointUrl = dt(
        'hts/frbslgigp.ogepscmv/ieo/eaylg',
        'tp:/ieaeogn-agolai.o/1frlglgc/o'
      )),
      (this.transportKey = dt('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV')),
      (this.logSource = 462),
      (this.logTraceAfterSampling = !1),
      (this.logNetworkAfterSampling = !1),
      (this.configTimeToLive = 12);
  }
  ((U = mt = mt || {})[(U.UNKNOWN = 0)] = 'UNKNOWN'),
    (U[(U.VISIBLE = 1)] = 'VISIBLE'),
    (U[(U.HIDDEN = 2)] = 'HIDDEN');
  var bt = ['firebase_', 'google_', 'ga_'],
    _t = new RegExp('^[a-zA-Z]\\w*$');
  function wt() {
    switch (pt.getInstance().document.visibilityState) {
      case 'visible':
        return mt.VISIBLE;
      case 'hidden':
        return mt.HIDDEN;
      default:
        return mt.UNKNOWN;
    }
  }
  var It = '0.0.1',
    Et = { loggingEnabled: !0 },
    St = 'FIREBASE_INSTALLATIONS_AUTH';
  function Tt(e) {
    var n,
      t = (function () {
        var e = pt.getInstance().localStorage;
        if (!e) return;
        var t = e.getItem(ct);
        if (
          !t ||
          !(function (e) {
            return Number(e) > Date.now();
          })(t)
        )
          return;
        var n = e.getItem(st);
        if (!n) return;
        try {
          return JSON.parse(n);
        } catch (e) {
          return;
        }
      })();
    return t
      ? (Nt(t), Promise.resolve())
      : ((n = e),
        (function () {
          var e = vt.getInstance().installationsService.getToken();
          return e.then(function (e) {}), e;
        })()
          .then(function (e) {
            var t =
                'https://firebaseremoteconfig.googleapis.com/v1/projects/' +
                vt.getInstance().getProjectId() +
                '/namespaces/fireperf:fetch?key=' +
                vt.getInstance().getApiKey(),
              e = new Request(t, {
                method: 'POST',
                headers: { Authorization: St + ' ' + e },
                body: JSON.stringify({
                  app_instance_id: n,
                  app_instance_id_token: e,
                  app_id: vt.getInstance().getAppId(),
                  app_version: ot,
                  sdk_version: It
                })
              });
            return fetch(e).then(function (e) {
              if (e.ok) return e.json();
              throw ut.create('RC response not ok');
            });
          })
          .catch(function () {
            lt.info(At);
          })
          .then(Nt)
          .then(
            function (e) {
              var t = pt.getInstance().localStorage;
              if (!e || !t) return;
              t.setItem(st, JSON.stringify(e)),
                t.setItem(
                  ct,
                  String(
                    Date.now() +
                      60 * vt.getInstance().configTimeToLive * 60 * 1e3
                  )
                );
            },
            function () {}
          ));
  }
  var At = 'Could not fetch config, will use default configs';
  function Nt(e) {
    if (!e) return e;
    var t = vt.getInstance(),
      n = e.entries || {};
    return (
      (t.loggingEnabled =
        void 0 !== n.fpr_enabled
          ? 'true' === String(n.fpr_enabled)
          : Et.loggingEnabled),
      n.fpr_log_source && (t.logSource = Number(n.fpr_log_source)),
      n.fpr_log_endpoint_url && (t.logEndPointUrl = n.fpr_log_endpoint_url),
      n.fpr_log_transport_key && (t.transportKey = n.fpr_log_transport_key),
      void 0 !== n.fpr_vc_network_request_sampling_rate &&
        (t.networkRequestsSamplingRate = Number(
          n.fpr_vc_network_request_sampling_rate
        )),
      void 0 !== n.fpr_vc_trace_sampling_rate &&
        (t.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate)),
      (t.logTraceAfterSampling = Ot(t.tracesSamplingRate)),
      (t.logNetworkAfterSampling = Ot(t.networkRequestsSamplingRate)),
      e
    );
  }
  function Ot(e) {
    return Math.random() <= e;
  }
  var kt,
    Pt = 1;
  function Ct() {
    return (
      (Pt = 2),
      (kt =
        kt ||
        (function () {
          var n = pt.getInstance().document;
          return new Promise(function (e) {
            var t;
            n && 'complete' !== n.readyState
              ? ((t = function () {
                  'complete' === n.readyState &&
                    (n.removeEventListener('readystatechange', t), e());
                }),
                n.addEventListener('readystatechange', t))
              : e();
          });
        })()
          .then(function () {
            return (
              (e = vt.getInstance().installationsService.getId()).then(
                function (e) {
                  gt = e;
                }
              ),
              e
            );
            var e;
          })
          .then(Tt)
          .then(Dt, Dt))
    );
  }
  function Dt() {
    Pt = 3;
  }
  var Rt,
    Lt = 1e4,
    jt = 5500,
    Mt = 3,
    Bt = Mt,
    xt = [],
    Ut = !1;
  function Ft(e) {
    setTimeout(function () {
      if (0 !== Bt)
        return xt.length
          ? void (function () {
              var e = i(xt);
              xt = [];
              var t = e.map(function (e) {
                return {
                  source_extension_json_proto3: e.message,
                  event_time_ms: String(e.eventTime)
                };
              });
              (function (e, r) {
                return (function (e) {
                  var t = vt.getInstance().getFlTransportFullUrl();
                  return fetch(t, { method: 'POST', body: JSON.stringify(e) });
                })(e)
                  .then(function (e) {
                    return (
                      e.ok || lt.info('Call to Firebase backend failed.'),
                      e.json()
                    );
                  })
                  .then(function (e) {
                    var t = Number(e.nextRequestWaitMillis),
                      n = Lt;
                    isNaN(t) || (n = Math.max(t, n));
                    e = e.logResponseDetails;
                    Array.isArray(e) &&
                      0 < e.length &&
                      'RETRY_REQUEST_LATER' === e[0].responseAction &&
                      ((xt = i(r, xt)),
                      lt.info('Retry transport request later.')),
                      (Bt = Mt),
                      Ft(n);
                  });
              })(
                {
                  request_time_ms: String(Date.now()),
                  client_info: { client_type: 1, js_client_info: {} },
                  log_source: vt.getInstance().logSource,
                  log_event: t
                },
                e
              ).catch(function () {
                (xt = i(e, xt)),
                  Bt--,
                  lt.info('Tries left: ' + Bt + '.'),
                  Ft(Lt);
              });
            })()
          : Ft(Lt);
    }, e);
  }
  function qt(n) {
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      !(function (e) {
        if (!e.eventTime || !e.message) throw ut.create('invalid cc log');
        xt = i(xt, [e]);
      })({ message: n.apply(void 0, e), eventTime: Date.now() });
    };
  }
  function Vt(e, t) {
    (Rt = Rt || qt($t))(e, t);
  }
  function Ht(e) {
    var t = vt.getInstance();
    (!t.instrumentationEnabled && e.isAuto) ||
      ((t.dataCollectionEnabled || e.isAuto) &&
        pt.getInstance().requiredApisAvailable() &&
        ((e.isAuto && wt() !== mt.VISIBLE) ||
          (3 === Pt
            ? Kt(e)
            : Ct().then(
                function () {
                  return Kt(e);
                },
                function () {
                  return Kt(e);
                }
              ))));
  }
  function Kt(e) {
    var t;
    !gt ||
      ((t = vt.getInstance()).loggingEnabled &&
        t.logTraceAfterSampling &&
        setTimeout(function () {
          return Vt(e, 1);
        }, 0));
  }
  function $t(e, t) {
    return (0 === t
      ? function (e) {
          (e = {
            url: e.url,
            http_method: e.httpMethod || 0,
            http_response_code: 200,
            response_payload_bytes: e.responsePayloadBytes,
            client_start_time_us: e.startTimeUs,
            time_to_response_initiated_us: e.timeToResponseInitiatedUs,
            time_to_response_completed_us: e.timeToResponseCompletedUs
          }),
            (e = { application_info: zt(), network_request_metric: e });
          return JSON.stringify(e);
        }
      : function (e) {
          var t = {
            name: e.name,
            is_auto: e.isAuto,
            client_start_time_us: e.startTimeUs,
            duration_us: e.durationUs
          };
          0 !== Object.keys(e.counters).length && (t.counters = e.counters);
          e = e.getAttributes();
          0 !== Object.keys(e).length && (t.custom_attributes = e);
          t = { application_info: zt(), trace_metric: t };
          return JSON.stringify(t);
        })(e);
  }
  function zt() {
    return {
      google_app_id: vt.getInstance().getAppId(),
      app_instance_id: gt,
      web_app_info: {
        sdk_version: ot,
        page_url: pt.getInstance().getUrl(),
        service_worker_status:
          'serviceWorker' in (e = pt.getInstance().navigator)
            ? e.serviceWorker.controller
              ? 2
              : 3
            : 1,
        visibility_state: wt(),
        effective_connection_type: (function () {
          var e = pt.getInstance().navigator.connection;
          switch (e && e.effectiveType) {
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
    var e;
  }
  var Wt = ['_fp', '_fcp', '_fid'];
  var Gt =
    ((Jt.prototype.start = function () {
      if (1 !== this.state)
        throw ut.create('trace started', { traceName: this.name });
      this.api.mark(this.traceStartMark), (this.state = 2);
    }),
    (Jt.prototype.stop = function () {
      if (2 !== this.state)
        throw ut.create('trace stopped', { traceName: this.name });
      (this.state = 3),
        this.api.mark(this.traceStopMark),
        this.api.measure(
          this.traceMeasure,
          this.traceStartMark,
          this.traceStopMark
        ),
        this.calculateTraceMetrics(),
        Ht(this);
    }),
    (Jt.prototype.record = function (e, t, n) {
      if (e <= 0)
        throw ut.create('nonpositive trace startTime', {
          traceName: this.name
        });
      if (t <= 0)
        throw ut.create('nonpositive trace duration', { traceName: this.name });
      if (
        ((this.durationUs = Math.floor(1e3 * t)),
        (this.startTimeUs = Math.floor(1e3 * e)),
        n && n.attributes && (this.customAttributes = a({}, n.attributes)),
        n && n.metrics)
      )
        for (var r = 0, i = Object.keys(n.metrics); r < i.length; r++) {
          var o = i[r];
          isNaN(Number(n.metrics[o])) ||
            (this.counters[o] = Number(Math.floor(n.metrics[o])));
        }
      Ht(this);
    }),
    (Jt.prototype.incrementMetric = function (e, t) {
      void 0 === t && (t = 1),
        void 0 === this.counters[e]
          ? this.putMetric(e, t)
          : this.putMetric(e, this.counters[e] + t);
    }),
    (Jt.prototype.putMetric = function (e, t) {
      if (
        ((n = e),
        (r = this.name),
        0 === n.length ||
          100 < n.length ||
          (!(r && r.startsWith('_wt_') && -1 < Wt.indexOf(n)) &&
            n.startsWith('_')))
      )
        throw ut.create('invalid custom metric name', { customMetricName: e });
      var n, r;
      this.counters[e] =
        ((e = t),
        (t = Math.floor(e)) < e &&
          lt.info(
            'Metric value should be an Integer, setting the value as : ' +
              t +
              '.'
          ),
        t);
    }),
    (Jt.prototype.getMetric = function (e) {
      return this.counters[e] || 0;
    }),
    (Jt.prototype.putAttribute = function (e, t) {
      var n,
        r,
        i =
          !(0 === (n = e).length || 40 < n.length) &&
          !bt.some(function (e) {
            return n.startsWith(e);
          }) &&
          !!n.match(_t),
        r = 0 !== (r = t).length && r.length <= 100;
      if (i && r) this.customAttributes[e] = t;
      else {
        if (!i) throw ut.create('invalid attribute name', { attributeName: e });
        if (!r)
          throw ut.create('invalid attribute value', { attributeValue: t });
      }
    }),
    (Jt.prototype.getAttribute = function (e) {
      return this.customAttributes[e];
    }),
    (Jt.prototype.removeAttribute = function (e) {
      void 0 !== this.customAttributes[e] && delete this.customAttributes[e];
    }),
    (Jt.prototype.getAttributes = function () {
      return a({}, this.customAttributes);
    }),
    (Jt.prototype.setStartTime = function (e) {
      this.startTimeUs = e;
    }),
    (Jt.prototype.setDuration = function (e) {
      this.durationUs = e;
    }),
    (Jt.prototype.calculateTraceMetrics = function () {
      var e = this.api.getEntriesByName(this.traceMeasure),
        e = e && e[0];
      e &&
        ((this.durationUs = Math.floor(1e3 * e.duration)),
        (this.startTimeUs = Math.floor(
          1e3 * (e.startTime + this.api.getTimeOrigin())
        )));
    }),
    (Jt.createOobTrace = function (e, t, n) {
      var r,
        i = pt.getInstance().getUrl();
      i &&
        ((r = new Jt('_wt_' + i, !0)),
        (i = Math.floor(1e3 * pt.getInstance().getTimeOrigin())),
        r.setStartTime(i),
        e &&
          e[0] &&
          (r.setDuration(Math.floor(1e3 * e[0].duration)),
          r.putMetric('domInteractive', Math.floor(1e3 * e[0].domInteractive)),
          r.putMetric(
            'domContentLoadedEventEnd',
            Math.floor(1e3 * e[0].domContentLoadedEventEnd)
          ),
          r.putMetric('loadEventEnd', Math.floor(1e3 * e[0].loadEventEnd))),
        t &&
          ((e = t.find(function (e) {
            return 'first-paint' === e.name;
          })) &&
            e.startTime &&
            r.putMetric('_fp', Math.floor(1e3 * e.startTime)),
          (t = t.find(function (e) {
            return 'first-contentful-paint' === e.name;
          })) &&
            t.startTime &&
            r.putMetric('_fcp', Math.floor(1e3 * t.startTime)),
          n && r.putMetric('_fid', Math.floor(1e3 * n))),
        Ht(r));
    }),
    (Jt.createUserTimingTrace = function (e) {
      Ht(new Jt(e, !1, e));
    }),
    Jt);
  function Jt(e, t, n) {
    void 0 === t && (t = !1),
      (this.name = e),
      (this.isAuto = t),
      (this.state = 1),
      (this.customAttributes = {}),
      (this.counters = {}),
      (this.api = pt.getInstance()),
      (this.randomId = Math.floor(1e6 * Math.random())),
      this.isAuto ||
        ((this.traceStartMark =
          'FB-PERF-TRACE-START-' + this.randomId + '-' + this.name),
        (this.traceStopMark =
          'FB-PERF-TRACE-STOP-' + this.randomId + '-' + this.name),
        (this.traceMeasure = n || at + '-' + this.randomId + '-' + this.name),
        n && this.calculateTraceMetrics());
  }
  function Yt(e) {
    var t,
      n,
      r,
      i = e;
    i &&
      void 0 !== i.responseStart &&
      ((n = pt.getInstance().getTimeOrigin()),
      (r = Math.floor(1e3 * (i.startTime + n))),
      (e = i.responseStart
        ? Math.floor(1e3 * (i.responseStart - i.startTime))
        : void 0),
      (n = Math.floor(1e3 * (i.responseEnd - i.startTime))),
      (i = {
        url: i.name && i.name.split('?')[0],
        responsePayloadBytes: i.transferSize,
        startTimeUs: r,
        timeToResponseInitiatedUs: e,
        timeToResponseCompletedUs: n
      }),
      (t = i),
      (r = vt.getInstance()).instrumentationEnabled &&
        ((e = t.url),
        (n = r.logEndPointUrl.split('?')[0]),
        (i = r.flTransportEndpointUrl.split('?')[0]),
        e !== n &&
          e !== i &&
          r.loggingEnabled &&
          r.logNetworkAfterSampling &&
          setTimeout(function () {
            return Vt(t, 0);
          }, 0)));
  }
  var Zt = 5e3;
  function Qt() {
    gt &&
      (setTimeout(function () {
        var e = pt.getInstance(),
          t = e.getEntriesByType('navigation'),
          n = e.getEntriesByType('paint');
        {
          var r;
          e.onFirstInputDelay
            ? ((r = setTimeout(function () {
                Gt.createOobTrace(t, n), (r = void 0);
              }, Zt)),
              e.onFirstInputDelay(function (e) {
                r && (clearTimeout(r), Gt.createOobTrace(t, n, e));
              }))
            : Gt.createOobTrace(t, n);
        }
      }, 0),
      setTimeout(function () {
        for (
          var e = pt.getInstance(),
            t = e.getEntriesByType('resource'),
            n = 0,
            r = t;
          n < r.length;
          n++
        ) {
          Yt(r[n]);
        }
        e.setupObserver('resource', Yt);
      }, 0),
      setTimeout(function () {
        for (
          var e = pt.getInstance(),
            t = e.getEntriesByType('measure'),
            n = 0,
            r = t;
          n < r.length;
          n++
        ) {
          Xt(r[n]);
        }
        e.setupObserver('measure', Xt);
      }, 0));
  }
  function Xt(e) {
    e = e.name;
    e.substring(0, at.length) !== at && Gt.createUserTimingTrace(e);
  }
  var en =
    ((tn.prototype.trace = function (e) {
      return new Gt(e);
    }),
    Object.defineProperty(tn.prototype, 'instrumentationEnabled', {
      get: function () {
        return vt.getInstance().instrumentationEnabled;
      },
      set: function (e) {
        vt.getInstance().instrumentationEnabled = e;
      },
      enumerable: !1,
      configurable: !0
    }),
    Object.defineProperty(tn.prototype, 'dataCollectionEnabled', {
      get: function () {
        return vt.getInstance().dataCollectionEnabled;
      },
      set: function (e) {
        vt.getInstance().dataCollectionEnabled = e;
      },
      enumerable: !1,
      configurable: !0
    }),
    tn);
  function tn(e) {
    (this.app = e),
      pt.getInstance().requiredApisAvailable() &&
        new Promise(function (e, t) {
          try {
            var n = !0,
              r = 'validate-browser-context-for-indexeddb-analytics-module',
              i = window.indexedDB.open(r);
            (i.onsuccess = function () {
              i.result.close(), n || window.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = function () {
                n = !1;
              }),
              (i.onerror = function () {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ''
                );
              });
          } catch (e) {
            t(e);
          }
        })
          .then(function (e) {
            e && (Ut || (Ft(jt), (Ut = !0)), Ct().then(Qt, Qt));
          })
          .catch(function (e) {
            lt.info("Environment doesn't support IndexedDB: " + e);
          });
  }
  var nn;
  function rn(e, t) {
    if ('[DEFAULT]' !== e.name) throw ut.create('FB not default');
    if ('undefined' == typeof window) throw ut.create('no window');
    return (
      (it = window),
      (vt.getInstance().firebaseAppInstance = e),
      (vt.getInstance().installationsService = t),
      new en(e)
    );
  }
  (nn = X).INTERNAL.registerComponent(
    new I(
      'performance',
      function (e) {
        var t = e.getProvider('app').getImmediate(),
          e = e.getProvider('installations').getImmediate();
        return rn(t, e);
      },
      'PUBLIC'
    )
  ),
    nn.registerVersion('@firebase/performance', '0.4.4');
  return X.registerVersion('firebase', '8.1.1', 'lite'), X;
});
//# sourceMappingURL=firebase-performance-standalone.js.map
