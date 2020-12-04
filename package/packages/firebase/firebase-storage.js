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
})(this, function (wt) {
  'use strict';
  try {
    (function () {
      function e(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
      }
      var s = e(wt),
        n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      function t(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function r(e, a, s, u) {
        return new (s = s || Promise)(function (r, t) {
          function n(e) {
            try {
              i(u.next(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            try {
              i(u.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function i(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(n, o);
          }
          i((u = u.apply(e, a || [])).next());
        });
      }
      function l(r, n) {
        var o,
          i,
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
              if (o) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((o = 1),
                    i &&
                      (a =
                        2 & t[0]
                          ? i.return
                          : t[0]
                          ? i.throw || ((a = i.return) && a.call(i), 0)
                          : i.next) &&
                      !(a = a.call(i, t[1])).done)
                  )
                    return a;
                  switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return s.label++, { value: t[1], done: !1 };
                    case 5:
                      s.label++, (i = t[1]), (t = [0]);
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
                  (t = [6, e]), (i = 0);
                } finally {
                  o = a = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, e]);
          };
        }
      }
      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), o = 0, t = 0; t < r; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            n[o] = i[a];
        return n;
      }
      var i,
        a = 'FirebaseError',
        u = (t(c, (i = Error)), c);
      function c(e, t, r) {
        t = i.call(this, t) || this;
        return (
          (t.code = e),
          (t.customData = r),
          (t.name = a),
          Object.setPrototypeOf(t, c.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(t, h.prototype.create),
          t
        );
      }
      var h =
        ((p.prototype.create = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          var n,
            o = t[0] || {},
            i = this.service + '/' + e,
            e = this.errors[e],
            e = e
              ? ((n = o),
                e.replace(f, function (e, t) {
                  var r = n[t];
                  return null != r ? String(r) : '<' + t + '?>';
                }))
              : 'Error',
            e = this.serviceName + ': ' + e + ' (' + i + ').';
          return new u(i, e, o);
        }),
        p);
      function p(e, t, r) {
        (this.service = e), (this.serviceName = t), (this.errors = r);
      }
      var f = /\{\$([^}]+)}/g,
        d =
          ((_.prototype.setInstantiationMode = function (e) {
            return (this.instantiationMode = e), this;
          }),
          (_.prototype.setMultipleInstances = function (e) {
            return (this.multipleInstances = e), this;
          }),
          (_.prototype.setServiceProps = function (e) {
            return (this.serviceProps = e), this;
          }),
          _);
      function _(e, t, r) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = r),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var v,
        b = 'firebasestorage.googleapis.com',
        m = 'storageBucket',
        y =
          (t(w, (v = u)),
          (w.prototype.codeEquals = function (e) {
            return T(e) === this.code;
          }),
          Object.defineProperty(w.prototype, 'message', {
            get: function () {
              return this.customData.serverResponse
                ? this.message + '\n' + this.customData.serverResponse
                : this.message;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(w.prototype, 'serverResponse', {
            get: function () {
              return this.customData.serverResponse;
            },
            set: function (e) {
              this.customData.serverResponse = e;
            },
            enumerable: !1,
            configurable: !0
          }),
          w);
      function w(e, t) {
        e =
          v.call(this, T(e), 'Firebase Storage: ' + t + ' (' + T(e) + ')') ||
          this;
        return (
          (e.customData = { serverResponse: null }),
          Object.setPrototypeOf(e, w.prototype),
          e
        );
      }
      var R = {
        UNKNOWN: 'unknown',
        OBJECT_NOT_FOUND: 'object-not-found',
        BUCKET_NOT_FOUND: 'bucket-not-found',
        PROJECT_NOT_FOUND: 'project-not-found',
        QUOTA_EXCEEDED: 'quota-exceeded',
        UNAUTHENTICATED: 'unauthenticated',
        UNAUTHORIZED: 'unauthorized',
        RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
        INVALID_CHECKSUM: 'invalid-checksum',
        CANCELED: 'canceled',
        INVALID_EVENT_NAME: 'invalid-event-name',
        INVALID_URL: 'invalid-url',
        INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
        NO_DEFAULT_BUCKET: 'no-default-bucket',
        CANNOT_SLICE_BLOB: 'cannot-slice-blob',
        SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
        NO_DOWNLOAD_URL: 'no-download-url',
        INVALID_ARGUMENT: 'invalid-argument',
        INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
        APP_DELETED: 'app-deleted',
        INVALID_ROOT_OPERATION: 'invalid-root-operation',
        INVALID_FORMAT: 'invalid-format',
        INTERNAL_ERROR: 'internal-error',
        UNSUPPORTED_ENVIRONMENT: 'unsupported-environment'
      };
      function T(e) {
        return 'storage/' + e;
      }
      function O() {
        return new y(
          R.UNKNOWN,
          'An unknown error occurred, please check the error payload for server response.'
        );
      }
      function E() {
        return new y(R.CANCELED, 'User canceled the upload/download.');
      }
      function k() {
        return new y(
          R.CANNOT_SLICE_BLOB,
          'Cannot slice blob for upload. Please retry the upload.'
        );
      }
      function U(e) {
        return new y(R.INVALID_ARGUMENT, e);
      }
      function P() {
        return new y(R.APP_DELETED, 'The Firebase app was deleted.');
      }
      function A(e) {
        return new y(
          R.INVALID_ROOT_OPERATION,
          "The operation '" +
            e +
            "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
        );
      }
      function x(e, t) {
        return new y(
          R.INVALID_FORMAT,
          "String does not match format '" + e + "': " + t
        );
      }
      function N(e) {
        throw new y(R.INTERNAL_ERROR, 'Internal error: ' + e);
      }
      var I = {
          RAW: 'raw',
          BASE64: 'base64',
          BASE64URL: 'base64url',
          DATA_URL: 'data_url'
        },
        S = function (e, t) {
          (this.data = e), (this.contentType = t || null);
        };
      function C(e, t) {
        switch (e) {
          case I.RAW:
            return new S(L(t));
          case I.BASE64:
          case I.BASE64URL:
            return new S(D(e, t));
          case I.DATA_URL:
            return new S(
              (function (e) {
                e = new j(e);
                return e.base64
                  ? D(I.BASE64, e.rest)
                  : (function (e) {
                      var t;
                      try {
                        t = decodeURIComponent(e);
                      } catch (e) {
                        throw x(I.DATA_URL, 'Malformed data URL.');
                      }
                      return L(t);
                    })(e.rest);
              })(t),
              new j(t).contentType
            );
        }
        throw O();
      }
      function L(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          n <= 127
            ? t.push(n)
            : n <= 2047
            ? t.push(192 | (n >> 6), 128 | (63 & n))
            : 55296 == (64512 & n)
            ? r < e.length - 1 && 56320 == (64512 & e.charCodeAt(r + 1))
              ? ((n = 65536 | ((1023 & n) << 10) | (1023 & e.charCodeAt(++r))),
                t.push(
                  240 | (n >> 18),
                  128 | ((n >> 12) & 63),
                  128 | ((n >> 6) & 63),
                  128 | (63 & n)
                ))
              : t.push(239, 191, 189)
            : 56320 == (64512 & n)
            ? t.push(239, 191, 189)
            : t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n));
        }
        return new Uint8Array(t);
      }
      function D(t, e) {
        switch (t) {
          case I.BASE64:
            var r = -1 !== e.indexOf('-'),
              n = -1 !== e.indexOf('_');
            if (r || n)
              throw x(
                t,
                "Invalid character '" +
                  (r ? '-' : '_') +
                  "' found: is it base64url encoded?"
              );
            break;
          case I.BASE64URL:
            (n = -1 !== e.indexOf('+')), (r = -1 !== e.indexOf('/'));
            if (n || r)
              throw x(
                t,
                "Invalid character '" +
                  (n ? '+' : '/') +
                  "' found: is it base64 encoded?"
              );
            e = e.replace(/-/g, '+').replace(/_/g, '/');
        }
        var o;
        try {
          o = atob(e);
        } catch (e) {
          throw x(t, 'Invalid character found');
        }
        for (var i = new Uint8Array(o.length), a = 0; a < o.length; a++)
          i[a] = o.charCodeAt(a);
        return i;
      }
      var j = function (e) {
        var t;
        if (
          ((this.base64 = !1),
          (this.contentType = null) === (t = e.match(/^data:([^,]+)?,/)))
        )
          throw x(
            I.DATA_URL,
            "Must be formatted 'data:[<mediatype>][;base64],<data>"
          );
        var r,
          n = t[1] || null;
        null != n &&
          ((this.base64 =
            ((r = ';base64'),
            (t = n).length >= r.length &&
              t.substring(t.length - r.length) === r)),
          (this.contentType = this.base64
            ? n.substring(0, n.length - ';base64'.length)
            : n)),
          (this.rest = e.substring(e.indexOf(',') + 1));
      };
      var M,
        B,
        q = { STATE_CHANGED: 'state_changed' },
        F = 'running',
        H = 'pausing',
        z = 'paused',
        G = 'success',
        V = 'canceling',
        X = 'canceled',
        W = 'error',
        K = {
          RUNNING: 'running',
          PAUSED: 'paused',
          SUCCESS: 'success',
          CANCELED: 'canceled',
          ERROR: 'error'
        };
      function Z(e) {
        switch (e) {
          case F:
          case H:
          case V:
            return K.RUNNING;
          case z:
            return K.PAUSED;
          case G:
            return K.SUCCESS;
          case X:
            return K.CANCELED;
          case W:
          default:
            return K.ERROR;
        }
      }
      ((B = M = M || {})[(B.NO_ERROR = 0)] = 'NO_ERROR'),
        (B[(B.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
        (B[(B.ABORT = 2)] = 'ABORT');
      var J =
        ((Y.prototype.send = function (e, t, r, n) {
          if (this.sent_) throw N('cannot .send() more than once');
          if (((this.sent_ = !0), this.xhr_.open(t, e, !0), void 0 !== n))
            for (var o in n)
              n.hasOwnProperty(o) &&
                this.xhr_.setRequestHeader(o, n[o].toString());
          return (
            void 0 !== r ? this.xhr_.send(r) : this.xhr_.send(),
            this.sendPromise_
          );
        }),
        (Y.prototype.getErrorCode = function () {
          if (!this.sent_) throw N('cannot .getErrorCode() before sending');
          return this.errorCode_;
        }),
        (Y.prototype.getStatus = function () {
          if (!this.sent_) throw N('cannot .getStatus() before sending');
          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        }),
        (Y.prototype.getResponseText = function () {
          if (!this.sent_) throw N('cannot .getResponseText() before sending');
          return this.xhr_.responseText;
        }),
        (Y.prototype.abort = function () {
          this.xhr_.abort();
        }),
        (Y.prototype.getResponseHeader = function (e) {
          return this.xhr_.getResponseHeader(e);
        }),
        (Y.prototype.addUploadProgressListener = function (e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.addEventListener('progress', e);
        }),
        (Y.prototype.removeUploadProgressListener = function (e) {
          null != this.xhr_.upload &&
            this.xhr_.upload.removeEventListener('progress', e);
        }),
        Y);
      function Y() {
        var t = this;
        (this.sent_ = !1),
          (this.xhr_ = new XMLHttpRequest()),
          (this.errorCode_ = M.NO_ERROR),
          (this.sendPromise_ = new Promise(function (e) {
            t.xhr_.addEventListener('abort', function () {
              (t.errorCode_ = M.ABORT), e(t);
            }),
              t.xhr_.addEventListener('error', function () {
                (t.errorCode_ = M.NETWORK_ERROR), e(t);
              }),
              t.xhr_.addEventListener('load', function () {
                e(t);
              });
          }));
      }
      var $ =
        ((Q.prototype.createXhrIo = function () {
          return new J();
        }),
        Q);
      function Q() {}
      function ee(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function te(e) {
        return re() && e instanceof Blob;
      }
      function re() {
        return 'undefined' != typeof Blob;
      }
      function ne(e, t, r, n) {
        if (n < t)
          throw new y(
            R.INVALID_ARGUMENT,
            "Invalid value for '" + e + "'. Expected " + t + ' or greater.'
          );
        if (r < n)
          throw new y(
            R.INVALID_ARGUMENT,
            "Invalid value for '" + e + "'. Expected " + r + ' or less.'
          );
      }
      function oe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r =
          'undefined' != typeof BlobBuilder
            ? BlobBuilder
            : 'undefined' != typeof WebKitBlobBuilder
            ? WebKitBlobBuilder
            : void 0;
        if (void 0 !== r) {
          for (var n = new r(), o = 0; o < e.length; o++) n.append(e[o]);
          return n.getBlob();
        }
        if (re()) return new Blob(e);
        throw new y(
          R.UNSUPPORTED_ENVIRONMENT,
          "This browser doesn't seem to support creating Blobs"
        );
      }
      var ie =
        ((ae.prototype.size = function () {
          return this.size_;
        }),
        (ae.prototype.type = function () {
          return this.type_;
        }),
        (ae.prototype.slice = function (e, t) {
          if (te(this.data_)) {
            var r = this.data_,
              n =
                ((o = e),
                (n = t),
                (r = r).webkitSlice
                  ? r.webkitSlice(o, n)
                  : r.mozSlice
                  ? r.mozSlice(o, n)
                  : r.slice
                  ? r.slice(o, n)
                  : null);
            return null === n ? null : new ae(n);
          }
          var o, n;
          return new ae(new Uint8Array(this.data_.buffer, e, t - e), !0);
        }),
        (ae.getBlob = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (re()) {
            var r = e.map(function (e) {
              return e instanceof ae ? e.data_ : e;
            });
            return new ae(oe.apply(null, r));
          }
          var r = e.map(function (e) {
              return ee(e) ? C(I.RAW, e).data : e.data_;
            }),
            n = 0;
          r.forEach(function (e) {
            n += e.byteLength;
          });
          var o = new Uint8Array(n),
            i = 0;
          return (
            r.forEach(function (e) {
              for (var t = 0; t < e.length; t++) o[i++] = e[t];
            }),
            new ae(o, !0)
          );
        }),
        (ae.prototype.uploadData = function () {
          return this.data_;
        }),
        ae);
      function ae(e, t) {
        var r = 0,
          n = '';
        te(e)
          ? ((r = (this.data_ = e).size), (n = e.type))
          : e instanceof ArrayBuffer
          ? (t
              ? (this.data_ = new Uint8Array(e))
              : ((this.data_ = new Uint8Array(e.byteLength)),
                this.data_.set(new Uint8Array(e))),
            (r = this.data_.length))
          : e instanceof Uint8Array &&
            (t
              ? (this.data_ = e)
              : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
            (r = e.length)),
          (this.size_ = r),
          (this.type_ = n);
      }
      var se =
        (Object.defineProperty(ue.prototype, 'path', {
          get: function () {
            return this.path_;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(ue.prototype, 'isRoot', {
          get: function () {
            return 0 === this.path.length;
          },
          enumerable: !1,
          configurable: !0
        }),
        (ue.prototype.fullServerUrl = function () {
          var e = encodeURIComponent;
          return '/b/' + e(this.bucket) + '/o/' + e(this.path);
        }),
        (ue.prototype.bucketOnlyServerUrl = function () {
          return '/b/' + encodeURIComponent(this.bucket) + '/o';
        }),
        (ue.makeFromBucketSpec = function (t) {
          var e, r;
          try {
            e = ue.makeFromUrl(t);
          } catch (e) {
            return new ue(t, '');
          }
          if ('' === e.path) return e;
          throw (
            ((r = t),
            new y(
              R.INVALID_DEFAULT_BUCKET,
              "Invalid default bucket '" + r + "'."
            ))
          );
        }),
        (ue.makeFromUrl = function (e) {
          var t = null,
            r = '([A-Za-z0-9.\\-_]+)';
          var n = new RegExp('^gs://' + r + '(/(.*))?$', 'i');
          function o(e) {
            e.path_ = decodeURIComponent(e.path);
          }
          for (
            var i = b.replace(/[.]/g, '\\.'),
              a = [
                {
                  regex: n,
                  indices: { bucket: 1, path: 3 },
                  postModify: function (e) {
                    '/' === e.path.charAt(e.path.length - 1) &&
                      (e.path_ = e.path_.slice(0, -1));
                  }
                },
                {
                  regex: new RegExp(
                    '^https?://' +
                      i +
                      '/v[A-Za-z0-9_]+/b/' +
                      r +
                      '/o(/([^?#]*).*)?$',
                    'i'
                  ),
                  indices: { bucket: 1, path: 3 },
                  postModify: o
                },
                {
                  regex: new RegExp(
                    '^https?://(?:storage.googleapis.com|storage.cloud.google.com)/' +
                      r +
                      '/([^?#]*)',
                    'i'
                  ),
                  indices: { bucket: 1, path: 2 },
                  postModify: o
                }
              ],
              s = 0;
            s < a.length;
            s++
          ) {
            var u = a[s],
              c = u.regex.exec(e);
            if (c) {
              t = new ue(c[u.indices.bucket], c[u.indices.path] || '');
              u.postModify(t);
              break;
            }
          }
          if (null == t)
            throw ((r = e), new y(R.INVALID_URL, "Invalid URL '" + r + "'."));
          return t;
        }),
        ue);
      function ue(e, t) {
        (this.bucket = e), (this.path_ = t);
      }
      function ce(e) {
        var t, r;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return null;
        }
        return 'object' != typeof (r = t) || Array.isArray(r) ? null : t;
      }
      function le(e) {
        var t = e.lastIndexOf('/', e.length - 2);
        return -1 === t ? e : e.slice(t + 1);
      }
      function he(e) {
        return 'https://' + b + '/v0' + e;
      }
      function pe(e) {
        var t,
          r = encodeURIComponent,
          n = '?';
        for (t in e) {
          e.hasOwnProperty(t) && (n = n + (r(t) + '=' + r(e[t])) + '&');
        }
        return (n = n.slice(0, -1));
      }
      function fe(e, t) {
        return t;
      }
      var de = function (e, t, r, n) {
          (this.server = e),
            (this.local = t || e),
            (this.writable = !!r),
            (this.xform = n || fe);
        },
        _e = null;
      function ge() {
        if (_e) return _e;
        var e = [];
        e.push(new de('bucket')),
          e.push(new de('generation')),
          e.push(new de('metageneration')),
          e.push(new de('name', 'fullPath', !0));
        var t = new de('name');
        (t.xform = function (e, t) {
          return !ee((t = t)) || t.length < 2 ? t : le(t);
        }),
          e.push(t);
        t = new de('size');
        return (
          (t.xform = function (e, t) {
            return void 0 !== t ? Number(t) : t;
          }),
          e.push(t),
          e.push(new de('timeCreated')),
          e.push(new de('updated')),
          e.push(new de('md5Hash', null, !0)),
          e.push(new de('cacheControl', null, !0)),
          e.push(new de('contentDisposition', null, !0)),
          e.push(new de('contentEncoding', null, !0)),
          e.push(new de('contentLanguage', null, !0)),
          e.push(new de('contentType', null, !0)),
          e.push(new de('metadata', 'customMetadata', !0)),
          (_e = e)
        );
      }
      function ve(r, n) {
        Object.defineProperty(r, 'ref', {
          get: function () {
            var e = r.bucket,
              t = r.fullPath,
              t = new se(e, t);
            return n.makeStorageReference(t);
          }
        });
      }
      function be(e, t, r) {
        t = ce(t);
        if (null === t) return null;
        return (function (e, t, r) {
          for (var n = { type: 'file' }, o = r.length, i = 0; i < o; i++) {
            var a = r[i];
            n[a.local] = a.xform(n, t[a.server]);
          }
          return ve(n, e), n;
        })(e, t, r);
      }
      function me(e, t) {
        for (var r = {}, n = t.length, o = 0; o < n; o++) {
          var i = t[o];
          i.writable && (r[i.server] = e[i.local]);
        }
        return JSON.stringify(r);
      }
      var ye = 'prefixes',
        we = 'items';
      function Re(e, t, r) {
        r = ce(r);
        if (null === r) return null;
        return (function (e, t, r) {
          var n = { prefixes: [], items: [], nextPageToken: r.nextPageToken };
          if (r[ye])
            for (var o = 0, i = r[ye]; o < i.length; o++) {
              var a = i[o].replace(/\/$/, ''),
                s = e.makeStorageReference(new se(t, a));
              n.prefixes.push(s);
            }
          if (r[we])
            for (var u = 0, c = r[we]; u < c.length; u++) {
              var l = c[u],
                s = e.makeStorageReference(new se(t, l.name));
              n.items.push(s);
            }
          return n;
        })(e, t, r);
      }
      var Te = function (e, t, r, n) {
        (this.url = e),
          (this.method = t),
          (this.handler = r),
          (this.timeout = n),
          (this.urlParams = {}),
          (this.headers = {}),
          (this.body = null),
          (this.errorHandler = null),
          (this.progressCallback = null),
          (this.successCodes = [200]),
          (this.additionalRetryCodes = []);
      };
      function Oe(e) {
        if (!e) throw O();
      }
      function Ee(r, n) {
        return function (e, t) {
          return Oe(null !== (t = be(r, t, n))), t;
        };
      }
      function ke(r, n) {
        return function (e, t) {
          return Oe(null !== (t = Re(r, n, t))), t;
        };
      }
      function Ue(n, o) {
        return function (e, t) {
          var r = be(n, t, o);
          return (
            Oe(null !== r),
            (function (n, e) {
              if (null === (e = ce(e))) return null;
              if (!ee(e.downloadTokens)) return null;
              if (0 === (e = e.downloadTokens).length) return null;
              var o = encodeURIComponent;
              return e.split(',').map(function (e) {
                var t = n.bucket,
                  r = n.fullPath;
                return (
                  he('/b/' + o(t) + '/o/' + o(r)) +
                  pe({ alt: 'media', token: e })
                );
              })[0];
            })(r, t)
          );
        };
      }
      function Pe(o) {
        return function (e, t) {
          var r,
            n =
              401 === e.getStatus()
                ? new y(
                    R.UNAUTHENTICATED,
                    'User is not authenticated, please authenticate using Firebase Authentication and try again.'
                  )
                : 402 === e.getStatus()
                ? ((r = o.bucket),
                  new y(
                    R.QUOTA_EXCEEDED,
                    "Quota for bucket '" +
                      r +
                      "' exceeded, please view quota on https://firebase.google.com/pricing/."
                  ))
                : 403 === e.getStatus()
                ? ((n = o.path),
                  new y(
                    R.UNAUTHORIZED,
                    "User does not have permission to access '" + n + "'."
                  ))
                : t;
          return (n.serverResponse = t.serverResponse), n;
        };
      }
      function Ae(n) {
        var o = Pe(n);
        return function (e, t) {
          var r = o(e, t);
          return (
            404 === e.getStatus() &&
              ((e = n.path),
              (r = new y(
                R.OBJECT_NOT_FOUND,
                "Object '" + e + "' does not exist."
              ))),
            (r.serverResponse = t.serverResponse),
            r
          );
        };
      }
      function xe(e, t, r) {
        var n = he(t.fullServerUrl()),
          o = e.maxOperationRetryTime,
          o = new Te(n, 'GET', Ee(e, r), o);
        return (o.errorHandler = Ae(t)), o;
      }
      function Ne(e, t, r) {
        r = Object.assign({}, r);
        return (
          (r.fullPath = e.path),
          (r.size = t.size()),
          r.contentType ||
            (r.contentType =
              ((e = t),
              ((t = null) && t.contentType) ||
                (e && e.type()) ||
                'application/octet-stream')),
          r
        );
      }
      function Ie(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = { 'X-Goog-Upload-Protocol': 'multipart' };
        var s = (function () {
          for (var e = '', t = 0; t < 2; t++)
            e += Math.random().toString().slice(2);
          return e;
        })();
        a['Content-Type'] = 'multipart/related; boundary=' + s;
        var u = Ne(t, n, o),
          o =
            '--' +
            s +
            '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
            me(u, r) +
            '\r\n--' +
            s +
            '\r\nContent-Type: ' +
            u.contentType +
            '\r\n\r\n',
          s = '\r\n--' + s + '--',
          n = ie.getBlob(o, n, s);
        if (null === n) throw k();
        (s = { name: u.fullPath }),
          (u = he(i)),
          (i = e.maxUploadRetryTime),
          (i = new Te(u, 'POST', Ee(e, r), i));
        return (
          (i.urlParams = s),
          (i.headers = a),
          (i.body = n.uploadData()),
          (i.errorHandler = Pe(t)),
          i
        );
      }
      var Se = function (e, t, r, n) {
        (this.current = e),
          (this.total = t),
          (this.finalized = !!r),
          (this.metadata = n || null);
      };
      function Ce(e, t) {
        var r = null;
        try {
          r = e.getResponseHeader('X-Goog-Upload-Status');
        } catch (e) {
          Oe(!1);
        }
        return Oe(!!r && -1 !== (t || ['active']).indexOf(r)), r;
      }
      function Le(e, t, r, n, o) {
        var i = t.bucketOnlyServerUrl(),
          a = Ne(t, n, o),
          o = { name: a.fullPath },
          i = he(i),
          n = {
            'X-Goog-Upload-Protocol': 'resumable',
            'X-Goog-Upload-Command': 'start',
            'X-Goog-Upload-Header-Content-Length': n.size(),
            'X-Goog-Upload-Header-Content-Type': a.contentType,
            'Content-Type': 'application/json; charset=utf-8'
          },
          r = me(a, r),
          e = e.maxUploadRetryTime;
        e = new Te(
          i,
          'POST',
          function (e) {
            var t;
            Ce(e);
            try {
              t = e.getResponseHeader('X-Goog-Upload-URL');
            } catch (e) {
              Oe(!1);
            }
            return Oe(ee(t)), t;
          },
          e
        );
        return (
          (e.urlParams = o),
          (e.headers = n),
          (e.body = r),
          (e.errorHandler = Pe(t)),
          e
        );
      }
      function De(e, t, r, o) {
        (e = e.maxUploadRetryTime),
          (e = new Te(
            r,
            'POST',
            function (e) {
              var t = Ce(e, ['active', 'final']),
                r = null;
              try {
                r = e.getResponseHeader('X-Goog-Upload-Size-Received');
              } catch (e) {
                Oe(!1);
              }
              r || Oe(!1);
              var n = Number(r);
              return Oe(!isNaN(n)), new Se(n, o.size(), 'final' === t);
            },
            e
          ));
        return (
          (e.headers = { 'X-Goog-Upload-Command': 'query' }),
          (e.errorHandler = Pe(t)),
          e
        );
      }
      function je(e, i, t, a, r, s, n, o) {
        var u = new Se(0, 0);
        if (
          (n
            ? ((u.current = n.current), (u.total = n.total))
            : ((u.current = 0), (u.total = a.size())),
          a.size() !== u.total)
        )
          throw new y(
            R.SERVER_FILE_WRONG_SIZE,
            'Server recorded incorrect upload file size, please retry the upload.'
          );
        var c = u.total - u.current,
          l = c;
        0 < r && (l = Math.min(l, r));
        (n = u.current),
          (r = n + l),
          (c = {
            'X-Goog-Upload-Command': l === c ? 'upload, finalize' : 'upload',
            'X-Goog-Upload-Offset': u.current
          }),
          (n = a.slice(n, r));
        if (null === n) throw k();
        (r = i.maxUploadRetryTime),
          (r = new Te(
            t,
            'POST',
            function (e, t) {
              var r = Ce(e, ['active', 'final']),
                n = u.current + l,
                o = a.size(),
                t = 'final' === r ? Ee(i, s)(e, t) : null;
              return new Se(n, o, 'final' === r, t);
            },
            r
          ));
        return (
          (r.headers = c),
          (r.body = n.uploadData()),
          (r.progressCallback = o || null),
          (r.errorHandler = Pe(e)),
          r
        );
      }
      var Me = function (e, t, r) {
          'function' == typeof e || null != t || null != r
            ? ((this.next = e), (this.error = t), (this.complete = r))
            : ((e = e),
              (this.next = e.next),
              (this.error = e.error),
              (this.complete = e.complete));
        },
        Be = function (e, t, r, n, o, i) {
          (this.bytesTransferred = e),
            (this.totalBytes = t),
            (this.state = r),
            (this.metadata = n),
            (this.task = o),
            (this.ref = i);
        };
      function qe(r) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          Promise.resolve().then(function () {
            return r.apply(void 0, e);
          });
        };
      }
      var Fe =
        ((He.prototype._makeProgressCallback = function () {
          var t = this,
            r = this._transferred;
          return function (e) {
            return t._updateProgress(r + e);
          };
        }),
        (He.prototype._shouldDoResumable = function (e) {
          return 262144 < e.size();
        }),
        (He.prototype._start = function () {
          this._state === F &&
            void 0 === this._request &&
            (this._resumable
              ? void 0 === this._uploadUrl
                ? this._createResumable()
                : this._needToFetchStatus
                ? this._fetchStatus()
                : this._needToFetchMetadata
                ? this._fetchMetadata()
                : this._continueUpload()
              : this._oneShotUpload());
        }),
        (He.prototype._resolveToken = function (t) {
          var r = this;
          this._ref.storage.getAuthToken().then(function (e) {
            switch (r._state) {
              case F:
                t(e);
                break;
              case V:
                r._transition(X);
                break;
              case H:
                r._transition(z);
            }
          });
        }),
        (He.prototype._createResumable = function () {
          var r = this;
          this._resolveToken(function (e) {
            var t = Le(
                r._ref.storage,
                r._ref._location,
                r._mappings,
                r._blob,
                r._metadata
              ),
              e = r._ref.storage.makeRequest(t, e);
            (r._request = e).getPromise().then(function (e) {
              (r._request = void 0),
                (r._uploadUrl = e),
                (r._needToFetchStatus = !1),
                r.completeTransitions_();
            }, r._errorHandler);
          });
        }),
        (He.prototype._fetchStatus = function () {
          var r = this,
            n = this._uploadUrl;
          this._resolveToken(function (e) {
            var t = De(r._ref.storage, r._ref._location, n, r._blob),
              e = r._ref.storage.makeRequest(t, e);
            (r._request = e).getPromise().then(function (e) {
              (r._request = void 0),
                r._updateProgress(e.current),
                (r._needToFetchStatus = !1),
                e.finalized && (r._needToFetchMetadata = !0),
                r.completeTransitions_();
            }, r._errorHandler);
          });
        }),
        (He.prototype._continueUpload = function () {
          var r = this,
            n = 262144 * this._chunkMultiplier,
            o = new Se(this._transferred, this._blob.size()),
            i = this._uploadUrl;
          this._resolveToken(function (e) {
            var t;
            try {
              t = je(
                r._ref._location,
                r._ref.storage,
                i,
                r._blob,
                n,
                r._mappings,
                o,
                r._makeProgressCallback()
              );
            } catch (e) {
              return (r._error = e), void r._transition(W);
            }
            e = r._ref.storage.makeRequest(t, e);
            (r._request = e).getPromise().then(function (e) {
              r._increaseMultiplier(),
                (r._request = void 0),
                r._updateProgress(e.current),
                e.finalized
                  ? ((r._metadata = e.metadata), r._transition(G))
                  : r.completeTransitions_();
            }, r._errorHandler);
          });
        }),
        (He.prototype._increaseMultiplier = function () {
          262144 * this._chunkMultiplier < 33554432 &&
            (this._chunkMultiplier *= 2);
        }),
        (He.prototype._fetchMetadata = function () {
          var r = this;
          this._resolveToken(function (e) {
            var t = xe(r._ref.storage, r._ref._location, r._mappings),
              e = r._ref.storage.makeRequest(t, e);
            (r._request = e).getPromise().then(function (e) {
              (r._request = void 0), (r._metadata = e), r._transition(G);
            }, r._metadataErrorHandler);
          });
        }),
        (He.prototype._oneShotUpload = function () {
          var r = this;
          this._resolveToken(function (e) {
            var t = Ie(
                r._ref.storage,
                r._ref._location,
                r._mappings,
                r._blob,
                r._metadata
              ),
              e = r._ref.storage.makeRequest(t, e);
            (r._request = e).getPromise().then(function (e) {
              (r._request = void 0),
                (r._metadata = e),
                r._updateProgress(r._blob.size()),
                r._transition(G);
            }, r._errorHandler);
          });
        }),
        (He.prototype._updateProgress = function (e) {
          var t = this._transferred;
          (this._transferred = e),
            this._transferred !== t && this._notifyObservers();
        }),
        (He.prototype._transition = function (e) {
          if (this._state !== e)
            switch (e) {
              case V:
              case H:
                (this._state = e),
                  void 0 !== this._request && this._request.cancel();
                break;
              case F:
                var t = this._state === z;
                (this._state = e),
                  t && (this._notifyObservers(), this._start());
                break;
              case z:
                (this._state = e), this._notifyObservers();
                break;
              case X:
                (this._error = E()), (this._state = e), this._notifyObservers();
                break;
              case W:
              case G:
                (this._state = e), this._notifyObservers();
            }
        }),
        (He.prototype.completeTransitions_ = function () {
          switch (this._state) {
            case H:
              this._transition(z);
              break;
            case V:
              this._transition(X);
              break;
            case F:
              this._start();
          }
        }),
        Object.defineProperty(He.prototype, 'snapshot', {
          get: function () {
            var e = Z(this._state);
            return new Be(
              this._transferred,
              this._blob.size(),
              e,
              this._metadata,
              this,
              this._ref
            );
          },
          enumerable: !1,
          configurable: !0
        }),
        (He.prototype.on = function (e, t, r, n) {
          var o = this,
            i = new Me(t, r, n);
          return (
            this._addObserver(i),
            function () {
              o._removeObserver(i);
            }
          );
        }),
        (He.prototype.then = function (e, t) {
          return this._promise.then(e, t);
        }),
        (He.prototype.catch = function (e) {
          return this.then(null, e);
        }),
        (He.prototype._addObserver = function (e) {
          this._observers.push(e), this._notifyObserver(e);
        }),
        (He.prototype._removeObserver = function (e) {
          e = this._observers.indexOf(e);
          -1 !== e && this._observers.splice(e, 1);
        }),
        (He.prototype._notifyObservers = function () {
          var t = this;
          this._finishPromise(),
            this._observers.slice().forEach(function (e) {
              t._notifyObserver(e);
            });
        }),
        (He.prototype._finishPromise = function () {
          if (void 0 !== this._resolve) {
            var e = !0;
            switch (Z(this._state)) {
              case K.SUCCESS:
                qe(this._resolve.bind(null, this.snapshot))();
                break;
              case K.CANCELED:
              case K.ERROR:
                qe(this._reject.bind(null, this._error))();
                break;
              default:
                e = !1;
            }
            e && ((this._resolve = void 0), (this._reject = void 0));
          }
        }),
        (He.prototype._notifyObserver = function (e) {
          switch (Z(this._state)) {
            case K.RUNNING:
            case K.PAUSED:
              e.next && qe(e.next.bind(e, this.snapshot))();
              break;
            case K.SUCCESS:
              e.complete && qe(e.complete.bind(e))();
              break;
            case K.CANCELED:
            case K.ERROR:
              e.error && qe(e.error.bind(e, this._error))();
              break;
            default:
              e.error && qe(e.error.bind(e, this._error))();
          }
        }),
        (He.prototype.resume = function () {
          var e = this._state === z || this._state === H;
          return e && this._transition(F), e;
        }),
        (He.prototype.pause = function () {
          var e = this._state === F;
          return e && this._transition(H), e;
        }),
        (He.prototype.cancel = function () {
          var e = this._state === F || this._state === H;
          return e && this._transition(V), e;
        }),
        He);
      function He(e, t, r) {
        var n = this;
        void 0 === r && (r = null),
          (this._transferred = 0),
          (this._needToFetchStatus = !1),
          (this._needToFetchMetadata = !1),
          (this._observers = []),
          (this._error = void 0),
          (this._uploadUrl = void 0),
          (this._request = void 0),
          (this._chunkMultiplier = 1),
          (this._resolve = void 0),
          (this._reject = void 0),
          (this._ref = e),
          (this._blob = t),
          (this._metadata = r),
          (this._mappings = ge()),
          (this._resumable = this._shouldDoResumable(this._blob)),
          (this._state = F),
          (this._errorHandler = function (e) {
            (n._request = void 0),
              (n._chunkMultiplier = 1),
              e.codeEquals(R.CANCELED)
                ? ((n._needToFetchStatus = !0), n.completeTransitions_())
                : ((n._error = e), n._transition(W));
          }),
          (this._metadataErrorHandler = function (e) {
            (n._request = void 0),
              e.codeEquals(R.CANCELED)
                ? n.completeTransitions_()
                : ((n._error = e), n._transition(W));
          }),
          (this._promise = new Promise(function (e, t) {
            (n._resolve = e), (n._reject = t), n._start();
          })),
          this._promise.then(null, function () {});
      }
      var ze =
        ((Ge.prototype.toString = function () {
          return 'gs://' + this._location.bucket + '/' + this._location.path;
        }),
        (Ge.prototype.newRef = function (e, t) {
          return new Ge(e, t);
        }),
        Object.defineProperty(Ge.prototype, 'root', {
          get: function () {
            var e = new se(this._location.bucket, '');
            return this.newRef(this._service, e);
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Ge.prototype, 'bucket', {
          get: function () {
            return this._location.bucket;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Ge.prototype, 'fullPath', {
          get: function () {
            return this._location.path;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Ge.prototype, 'name', {
          get: function () {
            return le(this._location.path);
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Ge.prototype, 'storage', {
          get: function () {
            return this._service;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(Ge.prototype, 'parent', {
          get: function () {
            var e = (function (e) {
              if (0 === e.length) return null;
              var t = e.lastIndexOf('/');
              return -1 === t ? '' : e.slice(0, t);
            })(this._location.path);
            if (null === e) return null;
            e = new se(this._location.bucket, e);
            return new Ge(this._service, e);
          },
          enumerable: !1,
          configurable: !0
        }),
        (Ge.prototype._throwIfRoot = function (e) {
          if ('' === this._location.path) throw A(e);
        }),
        Ge);
      function Ge(e, t) {
        (this._service = e),
          (this._location = t instanceof se ? t : se.makeFromUrl(t));
      }
      function Ve(e) {
        var t = { prefixes: [], items: [] };
        return (function n(o, i, a) {
          return r(this, void 0, void 0, function () {
            var t, r;
            return l(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Xe(o, { pageToken: a })];
                case 1:
                  return (
                    (t = e.sent()),
                    (r = i.prefixes).push.apply(r, t.prefixes),
                    (r = i.items).push.apply(r, t.items),
                    null == t.nextPageToken
                      ? [3, 3]
                      : [4, n(o, i, t.nextPageToken)]
                  );
                case 2:
                  e.sent(), (e.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        })(e, t).then(function () {
          return t;
        });
      }
      function Xe(u, c) {
        return r(this, void 0, void 0, function () {
          var a, s;
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  null != c &&
                    'number' == typeof c.maxResults &&
                    ne('options.maxResults', 1, 1e3, c.maxResults),
                  [4, u.storage.getAuthToken()]
                );
              case 1:
                return (
                  (a = e.sent()),
                  (s = c || {}),
                  (t = u.storage),
                  (r = u._location),
                  (n = '/'),
                  (o = s.pageToken),
                  (i = s.maxResults),
                  (e = {}),
                  r.isRoot ? (e.prefix = '') : (e.prefix = r.path + '/'),
                  n && 0 < n.length && (e.delimiter = n),
                  o && (e.pageToken = o),
                  i && (e.maxResults = i),
                  (o = he(r.bucketOnlyServerUrl())),
                  (i = t.maxOperationRetryTime),
                  ((i = new Te(o, 'GET', ke(t, r.bucket), i)).urlParams = e),
                  (i.errorHandler = Pe(r)),
                  [2, u.storage.makeRequest(i, a).getPromise()]
                );
            }
            var t, r, n, o, i;
          });
        });
      }
      function We(s, u) {
        return r(this, void 0, void 0, function () {
          var a;
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  s._throwIfRoot('updateMetadata'),
                  [4, s.storage.getAuthToken()]
                );
              case 1:
                return (
                  (a = e.sent()),
                  (t = s.storage),
                  (r = s._location),
                  (n = u),
                  (o = ge()),
                  (i = he(r.fullServerUrl())),
                  (e = me(n, o)),
                  (n = t.maxOperationRetryTime),
                  ((n = new Te(i, 'PATCH', Ee(t, o), n)).headers = {
                    'Content-Type': 'application/json; charset=utf-8'
                  }),
                  (n.body = e),
                  (n.errorHandler = Ae(r)),
                  [2, s.storage.makeRequest(n, a).getPromise()]
                );
            }
            var t, r, n, o, i;
          });
        });
      }
      function Ke(a) {
        return r(this, void 0, void 0, function () {
          var i;
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  a._throwIfRoot('getDownloadURL'),
                  [4, a.storage.getAuthToken()]
                );
              case 1:
                return (
                  (i = e.sent()),
                  (t = a.storage),
                  (r = a._location),
                  (n = ge()),
                  (o = he(r.fullServerUrl())),
                  (e = t.maxOperationRetryTime),
                  ((e = new Te(o, 'GET', Ue(t, n), e)).errorHandler = Ae(r)),
                  [
                    2,
                    a.storage
                      .makeRequest(e, i)
                      .getPromise()
                      .then(function (e) {
                        if (null === e)
                          throw new y(
                            R.NO_DOWNLOAD_URL,
                            'The given file does not have any download URLs.'
                          );
                        return e;
                      })
                  ]
                );
            }
            var t, r, n, o;
          });
        });
      }
      function Ze(o) {
        return r(this, void 0, void 0, function () {
          var n;
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  o._throwIfRoot('deleteObject'), [4, o.storage.getAuthToken()]
                );
              case 1:
                return (
                  (n = e.sent()),
                  (t = o.storage),
                  (r = o._location),
                  (e = he(r.fullServerUrl())),
                  (t = t.maxOperationRetryTime),
                  ((t = new Te(
                    e,
                    'DELETE',
                    function (e, t) {},
                    t
                  )).successCodes = [200, 204]),
                  (t.errorHandler = Ae(r)),
                  [2, o.storage.makeRequest(t, n).getPromise()]
                );
            }
            var t, r;
          });
        });
      }
      function Je(e, t) {
        var r,
          t =
            ((r = e._location.path),
            (t = (t = t)
              .split('/')
              .filter(function (e) {
                return 0 < e.length;
              })
              .join('/')),
            0 === r.length ? t : r + '/' + t),
          t = new se(e._location.bucket, t);
        return new ze(e.storage, t);
      }
      var Ye =
        (Object.defineProperty($e.prototype, 'bytesTransferred', {
          get: function () {
            return this._delegate.bytesTransferred;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty($e.prototype, 'metadata', {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty($e.prototype, 'state', {
          get: function () {
            return this._delegate.state;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty($e.prototype, 'totalBytes', {
          get: function () {
            return this._delegate.totalBytes;
          },
          enumerable: !1,
          configurable: !0
        }),
        $e);
      function $e(e, t, r) {
        (this._delegate = e), (this.task = t), (this.ref = r);
      }
      var Qe =
        (Object.defineProperty(et.prototype, 'snapshot', {
          get: function () {
            return this._snapshot;
          },
          enumerable: !1,
          configurable: !0
        }),
        (et.prototype.then = function (t, e) {
          var r = this;
          return this._delegate.then(function (e) {
            if (t) return t(new Ye(e, r, r._ref));
          }, e);
        }),
        (et.prototype.on = function (e, t, r, n) {
          var o = this,
            i = void 0;
          return (
            t &&
              (i =
                'function' == typeof t
                  ? function (e) {
                      return t(new Ye(e, o, o._ref));
                    }
                  : {
                      next: t.next
                        ? function (e) {
                            return t.next(new Ye(e, o, o._ref));
                          }
                        : void 0,
                      complete: t.complete || void 0,
                      error: t.error || void 0
                    }),
            this._delegate.on(e, i, r || void 0, n || void 0)
          );
        }),
        et);
      function et(e, t) {
        (this._delegate = e),
          (this._ref = t),
          (this.cancel = this._delegate.cancel.bind(this._delegate)),
          (this.catch = this._delegate.catch.bind(this._delegate)),
          (this.pause = this._delegate.pause.bind(this._delegate)),
          (this.resume = this._delegate.resume.bind(this._delegate)),
          (this._snapshot = new Ye(this._delegate.snapshot, this, this._ref));
      }
      var tt =
        (Object.defineProperty(rt.prototype, 'prefixes', {
          get: function () {
            var t = this;
            return this._delegate.prefixes.map(function (e) {
              return new nt(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(rt.prototype, 'items', {
          get: function () {
            var t = this;
            return this._delegate.items.map(function (e) {
              return new nt(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(rt.prototype, 'nextPageToken', {
          get: function () {
            return this._delegate.nextPageToken || null;
          },
          enumerable: !1,
          configurable: !0
        }),
        rt);
      function rt(e, t) {
        (this._delegate = e), (this._service = t);
      }
      var nt =
        (Object.defineProperty(ot.prototype, 'name', {
          get: function () {
            return this._delegate.name;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(ot.prototype, 'bucket', {
          get: function () {
            return this._delegate.bucket;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(ot.prototype, 'fullPath', {
          get: function () {
            return this._delegate.fullPath;
          },
          enumerable: !1,
          configurable: !0
        }),
        (ot.prototype.toString = function () {
          return this._delegate.toString();
        }),
        (ot.prototype.child = function (e) {
          return new ot(Je(this._delegate, e), this.storage);
        }),
        Object.defineProperty(ot.prototype, 'root', {
          get: function () {
            return new ot(this._delegate.root, this.storage);
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(ot.prototype, 'parent', {
          get: function () {
            var e = this._delegate.parent;
            return null == e ? null : new ot(e, this.storage);
          },
          enumerable: !1,
          configurable: !0
        }),
        (ot.prototype.put = function (e, t) {
          return (
            this._throwIfRoot('put'),
            new Qe(
              ((r = this._delegate),
              (e = e),
              void 0 === (t = t) && (t = null),
              r._throwIfRoot('uploadBytesResumable'),
              new Fe(r, new ie(e), t)),
              this
            )
          );
          var r;
        }),
        (ot.prototype.putString = function (e, t, r) {
          return (
            void 0 === t && (t = I.RAW),
            this._throwIfRoot('putString'),
            new Qe(
              ((n = this._delegate),
              (e = e),
              (r = r),
              void 0 === (t = t) && (t = I.RAW),
              n._throwIfRoot('putString'),
              (e = C(t, e)),
              null == (r = o({}, r)).contentType &&
                null != e.contentType &&
                (r.contentType = e.contentType),
              new Fe(n, new ie(e.data, !0), r)),
              this
            )
          );
          var n;
        }),
        (ot.prototype.listAll = function () {
          var t = this;
          return Ve(this._delegate).then(function (e) {
            return new tt(e, t.storage);
          });
        }),
        (ot.prototype.list = function (e) {
          var t = this;
          return Xe(this._delegate, e).then(function (e) {
            return new tt(e, t.storage);
          });
        }),
        (ot.prototype.getMetadata = function () {
          return (function (n) {
            return r(this, void 0, void 0, function () {
              var t, r;
              return l(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      n._throwIfRoot('getMetadata'),
                      [4, n.storage.getAuthToken()]
                    );
                  case 1:
                    return (
                      (t = e.sent()),
                      (r = xe(n.storage, n._location, ge())),
                      [2, n.storage.makeRequest(r, t).getPromise()]
                    );
                }
              });
            });
          })(this._delegate);
        }),
        (ot.prototype.updateMetadata = function (e) {
          return We(this._delegate, e);
        }),
        (ot.prototype.getDownloadURL = function () {
          return Ke(this._delegate);
        }),
        (ot.prototype.delete = function () {
          return this._throwIfRoot('delete'), Ze(this._delegate);
        }),
        (ot.prototype._throwIfRoot = function (e) {
          if ('' === this._delegate._location.path) throw A(e);
        }),
        ot);
      function ot(e, t) {
        (this._delegate = e), (this.storage = t);
      }
      var it =
        ((at.prototype.getPromise = function () {
          return this.promise_;
        }),
        (at.prototype.cancel = function (e) {}),
        at);
      function at(e) {
        this.promise_ = Promise.reject(e);
      }
      var st =
        ((ut.prototype.start_ = function () {
          var t,
            r,
            e,
            n,
            o,
            i,
            a,
            s,
            u,
            c = this;
          function l(e, t) {
            var r,
              n = c.resolve_,
              o = c.reject_,
              i = t.xhr;
            if (t.wasSuccessCode)
              try {
                var a = c.callback_(i, i.getResponseText());
                void 0 !== a ? n(a) : n();
              } catch (e) {
                o(e);
              }
            else
              null !== i
                ? (((r = O()).serverResponse = i.getResponseText()),
                  c.errorCallback_ ? o(c.errorCallback_(i, r)) : o(r))
                : t.canceled
                ? o((r = (c.appDelete_ ? P : E)()))
                : o(
                    (r = new y(
                      R.RETRY_LIMIT_EXCEEDED,
                      'Max retry time for operation exceeded, please try again.'
                    ))
                  );
          }
          function h() {
            return 2 === a;
          }
          function p() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            s || ((s = !0), r.apply(null, e));
          }
          function f(e) {
            o = setTimeout(function () {
              (o = null), t(d, h());
            }, e);
          }
          function d(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t[r - 1] = arguments[r];
            s ||
              (e || h() || i
                ? p.call.apply(p, g([null, e], t))
                : (n < 64 && (n *= 2),
                  f(1 === a ? ((a = 2), 0) : 1e3 * (n + Math.random()))));
          }
          function _(e) {
            u ||
              ((u = !0),
              s ||
                (null !== o
                  ? (e || (a = 2), clearTimeout(o), f(0))
                  : e || (a = 1)));
          }
          this.canceled_
            ? l(0, new ct(!1, null, !0))
            : (this.backoffId_ =
                ((t = function (n, e) {
                  function o(e) {
                    var t = e.loaded,
                      e = e.lengthComputable ? e.total : -1;
                    null !== c.progressCallback_ && c.progressCallback_(t, e);
                  }
                  e
                    ? n(!1, new ct(!1, null, !0))
                    : ((e = c.pool_.createXhrIo()),
                      (c.pendingXhr_ = e),
                      null !== c.progressCallback_ &&
                        e.addUploadProgressListener(o),
                      e
                        .send(c.url_, c.method_, c.body_, c.headers_)
                        .then(function (e) {
                          null !== c.progressCallback_ &&
                            e.removeUploadProgressListener(o),
                            (c.pendingXhr_ = null);
                          var t = e.getErrorCode() === M.NO_ERROR,
                            r = e.getStatus();
                          t && !c.isRetryStatusCode_(r)
                            ? ((r = -1 !== c.successCodes_.indexOf(r)),
                              n(!0, new ct(r, e)))
                            : ((e = e.getErrorCode() === M.ABORT),
                              n(!1, new ct(!1, null, e)));
                        }));
                }),
                (r = l),
                (e = this.timeout_),
                (o = null),
                (u = s = i = !(n = 1)),
                f((a = 0)),
                setTimeout(function () {
                  _((i = !0));
                }, e),
                _));
        }),
        (ut.prototype.getPromise = function () {
          return this.promise_;
        }),
        (ut.prototype.cancel = function (e) {
          (this.canceled_ = !0),
            (this.appDelete_ = e || !1),
            null !== this.backoffId_ && (0, this.backoffId_)(!1),
            null !== this.pendingXhr_ && this.pendingXhr_.abort();
        }),
        (ut.prototype.isRetryStatusCode_ = function (e) {
          var t = 500 <= e && e < 600,
            r = -1 !== [408, 429].indexOf(e),
            e = -1 !== this.additionalRetryCodes_.indexOf(e);
          return t || r || e;
        }),
        ut);
      function ut(e, t, r, n, o, i, a, s, u, c, l) {
        var h = this;
        (this.pendingXhr_ = null),
          (this.backoffId_ = null),
          (this.canceled_ = !1),
          (this.appDelete_ = !1),
          (this.url_ = e),
          (this.method_ = t),
          (this.headers_ = r),
          (this.body_ = n),
          (this.successCodes_ = o.slice()),
          (this.additionalRetryCodes_ = i.slice()),
          (this.callback_ = a),
          (this.errorCallback_ = s),
          (this.progressCallback_ = c),
          (this.timeout_ = u),
          (this.pool_ = l),
          (this.promise_ = new Promise(function (e, t) {
            (h.resolve_ = e), (h.reject_ = t), h.start_();
          }));
      }
      var ct = function (e, t, r) {
        (this.wasSuccessCode = e), (this.xhr = t), (this.canceled = !!r);
      };
      function lt(e, t, r, n) {
        var o = pe(e.urlParams),
          i = e.url + o,
          a = Object.assign({}, e.headers);
        return (
          (o = a),
          (t = t) && (o['X-Firebase-GMPID'] = t),
          (t = a),
          null !== (r = r) &&
            0 < r.length &&
            (t.Authorization = 'Firebase ' + r),
          (t = a),
          (r = void 0 !== s.default ? s.default.SDK_VERSION : 'AppManager'),
          (t['X-Firebase-Storage-Version'] = 'webjs/' + r),
          new st(
            i,
            e.method,
            a,
            e.body,
            e.successCodes,
            e.additionalRetryCodes,
            e.handler,
            e.errorHandler,
            e.timeout,
            e.progressCallback,
            n
          )
        );
      }
      function ht(e) {
        return /^[A-Za-z]+:\/\//.test(e);
      }
      function pt(e, t) {
        if (e instanceof dt) {
          var r = e;
          if (null == r._bucket)
            throw new y(
              R.NO_DEFAULT_BUCKET,
              "No default bucket found. Did you set the '" +
                m +
                "' property when initializing the app?"
            );
          r = new ze(r, r._bucket);
          return null != t ? pt(r, t) : r;
        }
        if (void 0 === t) return e;
        if (t.includes('..')) throw U('`path` param cannot contain ".."');
        return Je(e, t);
      }
      function ft(e, t) {
        if (t && ht(t)) {
          if (e instanceof dt) return new ze(e, t);
          throw U(
            'To use ref(service, url), the first argument must be a Storage instance.'
          );
        }
        return pt(e, t);
      }
      var dt =
        (Object.defineProperty(_t.prototype, 'maxUploadRetryTime', {
          get: function () {
            return this._maxUploadRetryTime;
          },
          set: function (e) {
            ne('time', 0, Number.POSITIVE_INFINITY, e),
              (this._maxUploadRetryTime = e);
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(_t.prototype, 'maxOperationRetryTime', {
          get: function () {
            return this._maxOperationRetryTime;
          },
          set: function (e) {
            ne('time', 0, Number.POSITIVE_INFINITY, e),
              (this._maxOperationRetryTime = e);
          },
          enumerable: !1,
          configurable: !0
        }),
        (_t.prototype.getAuthToken = function () {
          return r(this, void 0, void 0, function () {
            var t;
            return l(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = this._authProvider.getImmediate({ optional: !0 }))
                    ? [4, t.getToken()]
                    : [3, 2];
                case 1:
                  if (null !== (t = e.sent())) return [2, t.accessToken];
                  e.label = 2;
                case 2:
                  return [2, null];
              }
            });
          });
        }),
        (_t.prototype._delete = function () {
          return (
            (this._deleted = !0),
            this._requests.forEach(function (e) {
              return e.cancel();
            }),
            this._requests.clear(),
            Promise.resolve()
          );
        }),
        (_t.prototype.makeStorageReference = function (e) {
          return new ze(this, e);
        }),
        (_t.prototype.makeRequest = function (e, t) {
          var r = this;
          if (this._deleted) return new it(P());
          var n = lt(e, this._appId, t, this._pool);
          return (
            this._requests.add(n),
            n.getPromise().then(
              function () {
                return r._requests.delete(n);
              },
              function () {
                return r._requests.delete(n);
              }
            ),
            n
          );
        }),
        _t);
      function _t(e, t, r, n) {
        (this.app = e),
          (this._authProvider = t),
          (this._pool = r),
          (this._url = n),
          (this._bucket = null),
          (this._appId = null),
          (this._deleted = !1),
          (this._maxOperationRetryTime = 12e4),
          (this._maxUploadRetryTime = 6e5),
          (this._requests = new Set()),
          (this._bucket =
            null != n
              ? se.makeFromBucketSpec(n)
              : null == (n = null == (n = this.app.options) ? void 0 : n[m])
              ? null
              : se.makeFromBucketSpec(n));
      }
      var gt =
        (Object.defineProperty(vt.prototype, 'maxOperationRetryTime', {
          get: function () {
            return this._delegate.maxOperationRetryTime;
          },
          enumerable: !1,
          configurable: !0
        }),
        Object.defineProperty(vt.prototype, 'maxUploadRetryTime', {
          get: function () {
            return this._delegate.maxUploadRetryTime;
          },
          enumerable: !1,
          configurable: !0
        }),
        (vt.prototype.ref = function (e) {
          if (ht(e))
            throw U(
              'ref() expected a child path but got a URL, use refFromURL instead.'
            );
          return new nt(ft(this._delegate, e), this);
        }),
        (vt.prototype.refFromURL = function (e) {
          if (!ht(e))
            throw U(
              'refFromURL() expected a full URL but got a child path, use ref() instead.'
            );
          try {
            se.makeFromUrl(e);
          } catch (e) {
            throw U(
              'refFromUrl() expected a valid full URL but got an invalid one.'
            );
          }
          return new nt(ft(this._delegate, e), this);
        }),
        (vt.prototype.setMaxUploadRetryTime = function (e) {
          this._delegate.maxUploadRetryTime = e;
        }),
        (vt.prototype.setMaxOperationRetryTime = function (e) {
          this._delegate.maxOperationRetryTime = e;
        }),
        vt);
      function vt(e, t) {
        var r = this;
        (this.app = e),
          (this._delegate = t),
          (this.INTERNAL = {
            delete: function () {
              return r._delegate._delete();
            }
          });
      }
      var bt, mt;
      function yt(e, t) {
        var r = e.getProvider('app').getImmediate(),
          e = e.getProvider('auth-internal');
        return new gt(r, new dt(r, e, new $(), t));
      }
      (bt = s.default),
        (mt = {
          TaskState: K,
          TaskEvent: q,
          StringFormat: I,
          Storage: dt,
          Reference: nt
        }),
        bt.INTERNAL.registerComponent(
          new d('storage', yt, 'PUBLIC')
            .setServiceProps(mt)
            .setMultipleInstances(!0)
        ),
        bt.registerVersion('@firebase/storage', '0.4.2');
    }.apply(this, arguments));
  } catch (e) {
    throw (
      (console.error(e),
      new Error(
        'Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-storage.js.map
