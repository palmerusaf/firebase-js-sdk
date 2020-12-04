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
  var r = function (e, t) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      })(e, t);
  };
  var o = function () {
    return (o =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
  function e(e, a, s, l) {
    return new (s = s || Promise)(function (r, t) {
      function n(e) {
        try {
          o(l.next(e));
        } catch (e) {
          t(e);
        }
      }
      function i(e) {
        try {
          o(l.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value) instanceof s
              ? t
              : new s(function (e) {
                  e(t);
                })
            ).then(n, i);
      }
      o((l = l.apply(e, a || [])).next());
    });
  }
  function n(r, n) {
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
              t = n.call(r, s);
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
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
          );
        }
      };
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
    );
  }
  function u(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(n = o.next()).done; )
        a.push(n.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
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
    for (var r in t)
      t.hasOwnProperty(r) && '__proto__' !== r && (e[r] = d(e[r], t[r]));
    return e;
  }
  var i =
    ((t.prototype.wrapCallback = function (r) {
      var n = this;
      return function (e, t) {
        e ? n.reject(e) : n.resolve(t),
          'function' == typeof r &&
            (n.promise.catch(function () {}), 1 === r.length ? r(e) : r(e, t));
      };
    }),
    t);
  function t() {
    var r = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, t) {
        (r.resolve = e), (r.reject = t);
      }));
  }
  var a,
    s,
    l,
    c = 'FirebaseError',
    p =
      ((a = Error),
      r((s = v), (l = a)),
      (s.prototype =
        null === l ? Object.create(l) : ((f.prototype = l.prototype), new f())),
      v);
  function f() {
    this.constructor = s;
  }
  function v(e, t, r) {
    t = a.call(this, t) || this;
    return (
      (t.code = e),
      (t.customData = r),
      (t.name = c),
      Object.setPrototypeOf(t, v.prototype),
      Error.captureStackTrace && Error.captureStackTrace(t, m.prototype.create),
      t
    );
  }
  var m =
    ((y.prototype.create = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n,
        i = t[0] || {},
        o = this.service + '/' + e,
        e = this.errors[e],
        e = e
          ? ((n = i),
            e.replace(g, function (e, t) {
              var r = n[t];
              return null != r ? String(r) : '<' + t + '?>';
            }))
          : 'Error',
        e = this.serviceName + ': ' + e + ' (' + o + ').';
      return new p(o, e, i);
    }),
    y);
  function y(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  var g = /\{\$([^}]+)}/g;
  function b(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function w(e, t) {
    t = new E(e, t);
    return t.subscribe.bind(t);
  }
  var E =
    ((O.prototype.next = function (t) {
      this.forEachObserver(function (e) {
        e.next(t);
      });
    }),
    (O.prototype.error = function (t) {
      this.forEachObserver(function (e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (O.prototype.complete = function () {
      this.forEachObserver(function (e) {
        e.complete();
      }),
        this.close();
    }),
    (O.prototype.subscribe = function (e, t, r) {
      var n,
        i = this;
      if (void 0 === e && void 0 === t && void 0 === r)
        throw new Error('Missing Observer.');
      void 0 ===
        (n = (function (e, t) {
          if ('object' != typeof e || null === e) return !1;
          for (var r = 0, n = t; r < n.length; r++) {
            var i = n[r];
            if (i in e && 'function' == typeof e[i]) return !0;
          }
          return !1;
        })(e, ['next', 'error', 'complete'])
          ? e
          : { next: e, error: t, complete: r }).next && (n.next = _),
        void 0 === n.error && (n.error = _),
        void 0 === n.complete && (n.complete = _);
      r = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(function () {
            try {
              i.finalError ? n.error(i.finalError) : n.complete();
            } catch (e) {}
          }),
        this.observers.push(n),
        r
      );
    }),
    (O.prototype.unsubscribeOne = function (e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        --this.observerCount,
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (O.prototype.forEachObserver = function (e) {
      if (!this.finalized)
        for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }),
    (O.prototype.sendOne = function (e, t) {
      var r = this;
      this.task.then(function () {
        if (void 0 !== r.observers && void 0 !== r.observers[e])
          try {
            t(r.observers[e]);
          } catch (e) {
            'undefined' != typeof console && console.error && console.error(e);
          }
      });
    }),
    (O.prototype.close = function (e) {
      var t = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(function () {
          (t.observers = void 0), (t.onNoObservers = void 0);
        }));
    }),
    O);
  function O(e, t) {
    var r = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(function () {
          e(r);
        })
        .catch(function (e) {
          r.error(e);
        });
  }
  function _() {}
  var I =
    ((N.prototype.setInstantiationMode = function (e) {
      return (this.instantiationMode = e), this;
    }),
    (N.prototype.setMultipleInstances = function (e) {
      return (this.multipleInstances = e), this;
    }),
    (N.prototype.setServiceProps = function (e) {
      return (this.serviceProps = e), this;
    }),
    N);
  function N(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY');
  }
  var L = '[DEFAULT]',
    S =
      ((R.prototype.get = function (e) {
        void 0 === e && (e = L);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var r = new i();
          this.instancesDeferred.set(t, r);
          try {
            var n = this.getOrInitializeService(t);
            n && r.resolve(n);
          } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (R.prototype.getImmediate = function (e) {
        var t = o({ identifier: L, optional: !1 }, e),
          e = t.identifier,
          r = t.optional,
          n = this.normalizeInstanceIdentifier(e);
        try {
          var i = this.getOrInitializeService(n);
          if (i) return i;
          if (r) return null;
          throw Error('Service ' + this.name + ' is not available');
        } catch (e) {
          if (r) return null;
          throw e;
        }
      }),
      (R.prototype.getComponent = function () {
        return this.component;
      }),
      (R.prototype.setComponent = function (e) {
        var t, r;
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
            this.getOrInitializeService(L);
          } catch (e) {}
        try {
          for (
            var n = h(this.instancesDeferred.entries()), i = n.next();
            !i.done;
            i = n.next()
          ) {
            var o = u(i.value, 2),
              a = o[0],
              s = o[1],
              l = this.normalizeInstanceIdentifier(a);
            try {
              var c = this.getOrInitializeService(l);
              s.resolve(c);
            } catch (e) {}
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (R.prototype.clearInstance = function (e) {
        void 0 === e && (e = L),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (R.prototype.delete = function () {
        return e(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      (function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e = e.concat(u(arguments[t]));
                        return e;
                      })(
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
      (R.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (R.prototype.getOrInitializeService = function (e) {
        var t,
          r = this.instances.get(e);
        return (
          !r &&
            this.component &&
            ((r = this.component.instanceFactory(
              this.container,
              (t = e) === L ? void 0 : t
            )),
            this.instances.set(e, r)),
          r || null
        );
      }),
      (R.prototype.normalizeInstanceIdentifier = function (e) {
        return !this.component || this.component.multipleInstances ? e : L;
      }),
      R);
  function R(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map());
  }
  var P =
    ((A.prototype.addComponent = function (e) {
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
    (A.prototype.addOrOverwriteComponent = function (e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }),
    (A.prototype.getProvider = function (e) {
      if (this.providers.has(e)) return this.providers.get(e);
      var t = new S(e, this);
      return this.providers.set(e, t), t;
    }),
    (A.prototype.getProviders = function () {
      return Array.from(this.providers.values());
    }),
    A);
  function A(e) {
    (this.name = e), (this.providers = new Map());
  }
  function C() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
      e += arguments[t].length;
    for (var n = Array(e), i = 0, t = 0; t < r; t++)
      for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
        n[i] = o[a];
    return n;
  }
  var j,
    D = [];
  ((H = j = j || {})[(H.DEBUG = 0)] = 'DEBUG'),
    (H[(H.VERBOSE = 1)] = 'VERBOSE'),
    (H[(H.INFO = 2)] = 'INFO'),
    (H[(H.WARN = 3)] = 'WARN'),
    (H[(H.ERROR = 4)] = 'ERROR'),
    (H[(H.SILENT = 5)] = 'SILENT');
  function F(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        o = x[t];
      if (!o)
        throw new Error(
          'Attempted to log a message with an invalid logType (value: ' +
            t +
            ')'
        );
      console[o].apply(console, C(['[' + i + ']  ' + e.name + ':'], r));
    }
  }
  var k = {
      debug: j.DEBUG,
      verbose: j.VERBOSE,
      info: j.INFO,
      warn: j.WARN,
      error: j.ERROR,
      silent: j.SILENT
    },
    T = j.INFO,
    x =
      (((V = {})[j.DEBUG] = 'log'),
      (V[j.VERBOSE] = 'log'),
      (V[j.INFO] = 'info'),
      (V[j.WARN] = 'warn'),
      (V[j.ERROR] = 'error'),
      V),
    H =
      (Object.defineProperty(z.prototype, 'logLevel', {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in j))
            throw new TypeError(
              'Invalid value "' + e + '" assigned to `logLevel`'
            );
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0
      }),
      (z.prototype.setLogLevel = function (e) {
        this._logLevel = 'string' == typeof e ? k[e] : e;
      }),
      Object.defineProperty(z.prototype, 'logHandler', {
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
      Object.defineProperty(z.prototype, 'userLogHandler', {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }),
      (z.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, C([this, j.DEBUG], e)),
          this._logHandler.apply(this, C([this, j.DEBUG], e));
      }),
      (z.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, C([this, j.VERBOSE], e)),
          this._logHandler.apply(this, C([this, j.VERBOSE], e));
      }),
      (z.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, C([this, j.INFO], e)),
          this._logHandler.apply(this, C([this, j.INFO], e));
      }),
      (z.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, C([this, j.WARN], e)),
          this._logHandler.apply(this, C([this, j.WARN], e));
      }),
      (z.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, C([this, j.ERROR], e)),
          this._logHandler.apply(this, C([this, j.ERROR], e));
      }),
      z);
  function z(e) {
    (this.name = e),
      (this._logLevel = T),
      (this._logHandler = F),
      (this._userLogHandler = null),
      D.push(this);
  }
  function B(t) {
    D.forEach(function (e) {
      e.setLogLevel(t);
    });
  }
  var V =
      (((V = {})['no-app'] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (V['bad-app-name'] = "Illegal App name: '{$appName}"),
      (V['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
      (V['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
      (V['invalid-app-argument'] =
        'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
      (V['invalid-log-argument'] =
        'First argument to `onLog` must be null or a function.'),
      V),
    U = new m('app', 'Firebase', V),
    M = '@firebase/app',
    W = '[DEFAULT]',
    G =
      (((V = {})[M] = 'fire-core'),
      (V['@firebase/analytics'] = 'fire-analytics'),
      (V['@firebase/auth'] = 'fire-auth'),
      (V['@firebase/database'] = 'fire-rtdb'),
      (V['@firebase/functions'] = 'fire-fn'),
      (V['@firebase/installations'] = 'fire-iid'),
      (V['@firebase/messaging'] = 'fire-fcm'),
      (V['@firebase/performance'] = 'fire-perf'),
      (V['@firebase/remote-config'] = 'fire-rc'),
      (V['@firebase/storage'] = 'fire-gcs'),
      (V['@firebase/firestore'] = 'fire-fst'),
      (V['fire-js'] = 'fire-js'),
      (V['firebase-wrapper'] = 'fire-js-all'),
      V),
    $ = new H('@firebase/app'),
    Y =
      (Object.defineProperty(K.prototype, 'automaticDataCollectionEnabled', {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(K.prototype, 'name', {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(K.prototype, 'options', {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !1,
        configurable: !0
      }),
      (K.prototype.delete = function () {
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
      (K.prototype._getService = function (e, t) {
        return (
          void 0 === t && (t = W),
          this.checkDestroyed_(),
          this.container.getProvider(e).getImmediate({ identifier: t })
        );
      }),
      (K.prototype._removeServiceInstance = function (e, t) {
        void 0 === t && (t = W), this.container.getProvider(e).clearInstance(t);
      }),
      (K.prototype._addComponent = function (t) {
        try {
          this.container.addComponent(t);
        } catch (e) {
          $.debug(
            'Component ' +
              t.name +
              ' failed to register with FirebaseApp ' +
              this.name,
            e
          );
        }
      }),
      (K.prototype._addOrOverwriteComponent = function (e) {
        this.container.addOrOverwriteComponent(e);
      }),
      (K.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw U.create('app-deleted', { appName: this.name_ });
      }),
      K);
  function K(e, t, r) {
    var n,
      i,
      o = this;
    (this.firebase_ = r),
      (this.isDeleted_ = !1),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = d(void 0, e)),
      (this.container = new P(t.name)),
      this._addComponent(
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
        var l = s.value;
        this._addComponent(l);
      }
    } catch (e) {
      n = { error: e };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  (Y.prototype.name && Y.prototype.options) ||
    Y.prototype.delete ||
    console.log('dc');
  var J = '8.1.1';
  function Z(l) {
    var c = {},
      u = new Map(),
      p = {
        __esModule: !0,
        initializeApp: function (e, t) {
          void 0 === t && (t = {});
          {
            ('object' == typeof t && null !== t) || (t = { name: t });
          }
          var r = t;
          void 0 === r.name && (r.name = W);
          t = r.name;
          if ('string' != typeof t || !t)
            throw U.create('bad-app-name', { appName: String(t) });
          if (b(c, t)) throw U.create('duplicate-app', { appName: t });
          r = new l(e, r, p);
          return (c[t] = r);
        },
        app: f,
        registerVersion: function (e, t, r) {
          var n = null !== (i = G[e]) && void 0 !== i ? i : e;
          r && (n += '-' + r);
          var i = n.match(/\s|\//),
            e = t.match(/\s|\//);
          if (i || e) {
            r = [
              'Unable to register library "' + n + '" with version "' + t + '":'
            ];
            return (
              i &&
                r.push(
                  'library name "' +
                    n +
                    '" contains illegal characters (whitespace or "/")'
                ),
              i && e && r.push('and'),
              e &&
                r.push(
                  'version name "' +
                    t +
                    '" contains illegal characters (whitespace or "/")'
                ),
              void $.warn(r.join(' '))
            );
          }
          o(
            new I(
              n + '-version',
              function () {
                return { library: n, version: t };
              },
              'VERSION'
            )
          );
        },
        setLogLevel: B,
        onLog: function (e, t) {
          if (null !== e && 'function' != typeof e)
            throw U.create('invalid-log-argument', { appName: name });
          !(function (a, t) {
            for (var e = 0, r = D; e < r.length; e++) {
              !(function (e) {
                var o = null;
                t && t.level && (o = k[t.level]),
                  (e.userLogHandler =
                    null === a
                      ? null
                      : function (e, t) {
                          for (var r = [], n = 2; n < arguments.length; n++)
                            r[n - 2] = arguments[n];
                          var i = r
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
                              level: j[t].toLowerCase(),
                              message: i,
                              args: r,
                              type: e.name
                            });
                        });
              })(r[e]);
            }
          })(e, t);
        },
        apps: null,
        SDK_VERSION: J,
        INTERNAL: {
          registerComponent: o,
          removeApp: function (e) {
            delete c[e];
          },
          components: u,
          useAsService: function (e, t) {
            if ('serverAuth' === t) return null;
            return t;
          }
        }
      };
    function f(e) {
      if (!b(c, (e = e || W))) throw U.create('no-app', { appName: e });
      return c[e];
    }
    function o(r) {
      var t,
        e,
        n,
        i = r.name;
      if (u.has(i))
        return (
          $.debug(
            'There were multiple attempts to register component ' + i + '.'
          ),
          'PUBLIC' === r.type ? p[i] : null
        );
      u.set(i, r),
        'PUBLIC' === r.type &&
          ((n = function (e) {
            if ((void 0 === e && (e = f()), 'function' != typeof e[i]))
              throw U.create('invalid-app-argument', { appName: i });
            return e[i]();
          }),
          void 0 !== r.serviceProps && d(n, r.serviceProps),
          (p[i] = n),
          (l.prototype[i] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this._getService
              .bind(this, i)
              .apply(this, r.multipleInstances ? e : []);
          }));
      try {
        for (var o = h(Object.keys(c)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          c[s]._addComponent(r);
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
      return 'PUBLIC' === r.type ? p[i] : null;
    }
    return (
      (p.default = p),
      Object.defineProperty(p, 'apps', {
        get: function () {
          return Object.keys(c).map(function (e) {
            return c[e];
          });
        }
      }),
      (f.App = l),
      p
    );
  }
  var V = (function e() {
      var t = Z(Y);
      return (
        (t.INTERNAL = o(o({}, t.INTERNAL), {
          createFirebaseNamespace: e,
          extendNamespace: function (e) {
            d(t, e);
          },
          createSubscribe: w,
          ErrorFactory: m,
          deepExtend: d
        })),
        t
      );
    })(),
    q =
      ((Q.prototype.getPlatformInfoString = function () {
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
      Q);
  function Q(e) {
    this.container = e;
  }
  'object' == typeof self &&
    self.self === self &&
    void 0 !== self.firebase &&
    ($.warn(
      '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
    ),
    (H = self.firebase.SDK_VERSION) &&
      0 <= H.indexOf('LITE') &&
      $.warn(
        '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
      ));
  var X = V.initializeApp;
  V.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      (function () {
        try {
          return (
            '[object process]' ===
            Object.prototype.toString.call(global.process)
          );
        } catch (e) {
          return;
        }
      })() &&
        $.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '
        ),
      X.apply(void 0, e)
    );
  };
  var ee,
    te,
    re = V;
  (ee = re).INTERNAL.registerComponent(
    new I(
      'platform-logger',
      function (e) {
        return new q(e);
      },
      'PRIVATE'
    )
  ),
    ee.registerVersion(M, '0.6.13', te),
    ee.registerVersion('fire-js', '');
  return re.registerVersion('firebase', '8.1.1', 'app'), re;
});
//# sourceMappingURL=firebase-app.js.map
