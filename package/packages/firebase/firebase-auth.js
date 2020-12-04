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
})(this, function (e) {
  'use strict';
  try {
    (function () {
      function t(t) {
        return t && 'object' == typeof t && 'default' in t ? t : { default: t };
      }
      var Zl = t(e);
      (function () {
        var t,
          o =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, n) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = n.value);
                };
        var u = (function (t) {
          t = [
            'object' == typeof window && window,
            'object' == typeof self && self,
            'object' == typeof global && global,
            t
          ];
          for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            if (n && n.Math == Math) return n;
          }
          return globalThis;
        })(this);
        function c(t) {
          var e,
            n,
            i =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              t[Symbol.iterator];
          return i
            ? i.call(t)
            : {
                next:
                  ((e = t),
                  (n = 0),
                  function () {
                    return n < e.length
                      ? { done: !1, value: e[n++] }
                      : { done: !0 };
                  })
              };
        }
        !(function (t, e) {
          if (e) {
            var n = u;
            t = t.split('.');
            for (var i = 0; i < t.length - 1; i++) {
              var r = t[i];
              r in n || (n[r] = {}), (n = n[r]);
            }
            (e = e((i = n[(t = t[t.length - 1])]))) != i &&
              null != e &&
              o(n, t, { configurable: !0, writable: !0, value: e });
          }
        })('Promise', function (t) {
          function a(t) {
            (this.b = 0), (this.c = void 0), (this.a = []);
            var e = this.f();
            try {
              t(e.resolve, e.reject);
            } catch (t) {
              e.reject(t);
            }
          }
          function e() {
            this.a = null;
          }
          function s(e) {
            return e instanceof a
              ? e
              : new a(function (t) {
                  t(e);
                });
          }
          if (t) return t;
          e.prototype.b = function (t) {
            var e;
            null == this.a &&
              ((this.a = []),
              (e = this).c(function () {
                e.g();
              })),
              this.a.push(t);
          };
          var n = u.setTimeout;
          (e.prototype.c = function (t) {
            n(t, 0);
          }),
            (e.prototype.g = function () {
              for (; this.a && this.a.length; ) {
                var t = this.a;
                this.a = [];
                for (var e = 0; e < t.length; ++e) {
                  var n = t[e];
                  t[e] = null;
                  try {
                    n();
                  } catch (t) {
                    this.f(t);
                  }
                }
              }
              this.a = null;
            }),
            (e.prototype.f = function (t) {
              this.c(function () {
                throw t;
              });
            }),
            (a.prototype.f = function () {
              function t(e) {
                return function (t) {
                  i || ((i = !0), e.call(n, t));
                };
              }
              var n = this,
                i = !1;
              return { resolve: t(this.v), reject: t(this.g) };
            }),
            (a.prototype.v = function (t) {
              if (t === this)
                this.g(new TypeError('A Promise cannot resolve to itself'));
              else if (t instanceof a) this.s(t);
              else {
                t: switch (typeof t) {
                  case 'object':
                    var e = null != t;
                    break t;
                  case 'function':
                    e = !0;
                    break t;
                  default:
                    e = !1;
                }
                e ? this.m(t) : this.h(t);
              }
            }),
            (a.prototype.m = function (t) {
              var e = void 0;
              try {
                e = t.then;
              } catch (t) {
                return void this.g(t);
              }
              'function' == typeof e ? this.u(e, t) : this.h(t);
            }),
            (a.prototype.g = function (t) {
              this.i(2, t);
            }),
            (a.prototype.h = function (t) {
              this.i(1, t);
            }),
            (a.prototype.i = function (t, e) {
              if (0 != this.b)
                throw Error(
                  'Cannot settle(' +
                    t +
                    ', ' +
                    e +
                    '): Promise already settled in state' +
                    this.b
                );
              (this.b = t), (this.c = e), this.l();
            }),
            (a.prototype.l = function () {
              if (null != this.a) {
                for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                this.a = null;
              }
            });
          var r = new e();
          return (
            (a.prototype.s = function (t) {
              var e = this.f();
              t.Pa(e.resolve, e.reject);
            }),
            (a.prototype.u = function (t, e) {
              var n = this.f();
              try {
                t.call(e, n.resolve, n.reject);
              } catch (t) {
                n.reject(t);
              }
            }),
            (a.prototype.then = function (t, e) {
              function n(e, t) {
                return 'function' == typeof e
                  ? function (t) {
                      try {
                        i(e(t));
                      } catch (t) {
                        r(t);
                      }
                    }
                  : t;
              }
              var i,
                r,
                o = new a(function (t, e) {
                  (i = t), (r = e);
                });
              return this.Pa(n(t, i), n(e, r)), o;
            }),
            (a.prototype.catch = function (t) {
              return this.then(void 0, t);
            }),
            (a.prototype.Pa = function (t, e) {
              function n() {
                switch (i.b) {
                  case 1:
                    t(i.c);
                    break;
                  case 2:
                    e(i.c);
                    break;
                  default:
                    throw Error('Unexpected state: ' + i.b);
                }
              }
              var i = this;
              null == this.a ? r.b(n) : this.a.push(n);
            }),
            (a.resolve = s),
            (a.reject = function (n) {
              return new a(function (t, e) {
                e(n);
              });
            }),
            (a.race = function (r) {
              return new a(function (t, e) {
                for (var n = c(r), i = n.next(); !i.done; i = n.next())
                  s(i.value).Pa(t, e);
              });
            }),
            (a.all = function (t) {
              var e = c(t),
                o = e.next();
              return o.done
                ? s([])
                : new a(function (n, t) {
                    for (
                      var i = [], r = 0;
                      i.push(void 0),
                        r++,
                        s(o.value).Pa(
                          (function (e) {
                            return function (t) {
                              (i[e] = t), 0 == --r && n(i);
                            };
                          })(i.length - 1),
                          t
                        ),
                        !(o = e.next()).done;

                    );
                  });
            }),
            a
          );
        });
        var h = h || {},
          l = this || self,
          e = /^[\w+/_-]+[=]{0,2}$/,
          s = null;
        function f(t) {
          return (t = t.querySelector && t.querySelector('script[nonce]')) &&
            (t = t.nonce || t.getAttribute('nonce')) &&
            e.test(t)
            ? t
            : '';
        }
        function a() {}
        function d(t) {
          var e = typeof t;
          return 'object' != e
            ? e
            : t
            ? Array.isArray(t)
              ? 'array'
              : e
            : 'null';
        }
        function p(t) {
          var e = d(t);
          return 'array' == e || ('object' == e && 'number' == typeof t.length);
        }
        function v(t) {
          return 'function' == d(t);
        }
        function m(t) {
          var e = typeof t;
          return ('object' == e && null != t) || 'function' == e;
        }
        var n = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
          i = 0;
        function r(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }
        function g(e, n, t) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              var t = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(t, i), e.apply(n, t);
            };
          }
          return function () {
            return e.apply(n, arguments);
          };
        }
        function b(t, e, n) {
          return (b =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? r
              : g).apply(null, arguments);
        }
        function y(e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = n.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }
        var w = Date.now;
        function I(t, e) {
          function n() {}
          (n.prototype = e.prototype),
            (t.$a = e.prototype),
            (t.prototype = new n()),
            (t.prototype.constructor = t);
        }
        function T(t) {
          return t;
        }
        function E(t, e, n) {
          (this.code = S + t),
            (this.message = e || N[t] || ''),
            (this.a = n || null);
        }
        function A(t) {
          var e = t && t.code;
          return e
            ? new E(e.substring(S.length), t.message, t.serverResponse)
            : null;
        }
        I(E, Error),
          (E.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            return this.a && (t.serverResponse = this.a), t;
          }),
          (E.prototype.toJSON = function () {
            return this.w();
          });
        var k,
          S = 'auth/',
          N = {
            'admin-restricted-operation':
              'This operation is restricted to administrators only.',
            'argument-error': '',
            'app-not-authorized':
              "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            'app-not-installed':
              'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
            'captcha-check-failed':
              'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
            'code-expired':
              'The SMS code has expired. Please re-send the verification code to try again.',
            'cordova-not-ready': 'Cordova framework is not ready.',
            'cors-unsupported': 'This browser is not supported.',
            'credential-already-in-use':
              'This credential is already associated with a different user account.',
            'custom-token-mismatch':
              'The custom token corresponds to a different audience.',
            'requires-recent-login':
              'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
            'dynamic-link-not-activated':
              'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
            'email-change-needs-verification':
              'Multi-factor users must always have a verified email.',
            'email-already-in-use':
              'The email address is already in use by another account.',
            'expired-action-code': 'The action code has expired. ',
            'cancelled-popup-request':
              'This operation has been cancelled due to another conflicting popup being opened.',
            'internal-error': 'An internal error has occurred.',
            'invalid-app-credential':
              'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
            'invalid-app-id':
              'The mobile app identifier is not registed for the current project.',
            'invalid-user-token':
              "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            'invalid-auth-event': 'An internal error has occurred.',
            'invalid-verification-code':
              'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
            'invalid-continue-uri':
              'The continue URL provided in the request is invalid.',
            'invalid-cordova-configuration':
              'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
            'invalid-custom-token':
              'The custom token format is incorrect. Please check the documentation.',
            'invalid-dynamic-link-domain':
              'The provided dynamic link domain is not configured or authorized for the current project.',
            'invalid-email': 'The email address is badly formatted.',
            'invalid-api-key':
              'Your API key is invalid, please check you have copied it correctly.',
            'invalid-cert-hash':
              'The SHA-1 certificate hash provided is invalid.',
            'invalid-credential':
              'The supplied auth credential is malformed or has expired.',
            'invalid-message-payload':
              'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-multi-factor-session':
              'The request does not contain a valid proof of first factor successful sign-in.',
            'invalid-oauth-provider':
              'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
            'invalid-oauth-client-id':
              'The OAuth client ID provided is either invalid or does not match the specified API key.',
            'unauthorized-domain':
              'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
            'invalid-action-code':
              'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
            'wrong-password':
              'The password is invalid or the user does not have a password.',
            'invalid-persistence-type':
              'The specified persistence type is invalid. It can only be local, session or none.',
            'invalid-phone-number':
              'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
            'invalid-provider-id': 'The specified provider ID is invalid.',
            'invalid-recipient-email':
              'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
            'invalid-sender':
              'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-verification-id':
              'The verification ID used to create the phone auth credential is invalid.',
            'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
            'multi-factor-info-not-found':
              'The user does not have a second factor matching the identifier provided.',
            'multi-factor-auth-required':
              'Proof of ownership of a second factor is required to complete sign-in.',
            'missing-android-pkg-name':
              'An Android Package Name must be provided if the Android App is required to be installed.',
            'auth-domain-config-required':
              'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
            'missing-app-credential':
              'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
            'missing-verification-code':
              'The phone auth credential was created with an empty SMS verification code.',
            'missing-continue-uri':
              'A continue URL must be provided in the request.',
            'missing-iframe-start': 'An internal error has occurred.',
            'missing-ios-bundle-id':
              'An iOS Bundle ID must be provided if an App Store ID is provided.',
            'missing-multi-factor-info':
              'No second factor identifier is provided.',
            'missing-multi-factor-session':
              'The request is missing proof of first factor successful sign-in.',
            'missing-or-invalid-nonce':
              'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
            'missing-phone-number':
              'To send verification codes, provide a phone number for the recipient.',
            'missing-verification-id':
              'The phone auth credential was created with an empty verification ID.',
            'app-deleted': 'This instance of FirebaseApp has been deleted.',
            'account-exists-with-different-credential':
              'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
            'network-request-failed':
              'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
            'no-auth-event': 'An internal error has occurred.',
            'no-such-provider':
              'User was not linked to an account with the given provider.',
            'null-user':
              'A null user object was provided as the argument for an operation which requires a non-null user object.',
            'operation-not-allowed':
              'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
            'operation-not-supported-in-this-environment':
              'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            'popup-blocked':
              'Unable to establish a connection with the popup. It may have been blocked by the browser.',
            'popup-closed-by-user':
              'The popup has been closed by the user before finalizing the operation.',
            'provider-already-linked':
              'User can only be linked to one identity for the given provider.',
            'quota-exceeded':
              "The project's quota for this operation has been exceeded.",
            'redirect-cancelled-by-user':
              'The redirect operation has been cancelled by the user before finalizing.',
            'redirect-operation-pending':
              'A redirect sign-in operation is already pending.',
            'rejected-credential':
              'The request contains malformed or mismatching credentials.',
            'second-factor-already-in-use':
              'The second factor is already enrolled on this account.',
            'maximum-second-factor-count-exceeded':
              'The maximum allowed number of second factors on a user has been exceeded.',
            'tenant-id-mismatch':
              "The provided tenant ID does not match the Auth instance's tenant ID",
            timeout: 'The operation has timed out.',
            'user-token-expired':
              "The user's credential is no longer valid. The user must sign in again.",
            'too-many-requests':
              'We have blocked all requests from this device due to unusual activity. Try again later.',
            'unauthorized-continue-uri':
              'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
            'unsupported-first-factor':
              'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
            'unsupported-persistence-type':
              'The current environment does not support the specified persistence type.',
            'unsupported-tenant-operation':
              'This operation is not supported in a multi-tenant context.',
            'unverified-email': 'The operation requires a verified email.',
            'user-cancelled':
              'The user did not grant your application the permissions it requested.',
            'user-not-found':
              'There is no user record corresponding to this identifier. The user may have been deleted.',
            'user-disabled':
              'The user account has been disabled by an administrator.',
            'user-mismatch':
              'The supplied credentials do not correspond to the previously signed in user.',
            'user-signed-out': '',
            'weak-password': 'The password must be 6 characters long or more.',
            'web-storage-unsupported':
              'This browser is not supported or 3rd party cookies and data may be disabled.'
          },
          _ = {
            kd: {
              Sa:
                'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Ya: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Va: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 'b'
            },
            rd: {
              Sa: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
              Ya: 'https://securetoken.googleapis.com/v1/token',
              Va: 'https://identitytoolkit.googleapis.com/v2/',
              id: 'p'
            },
            td: {
              Sa:
                'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Ya: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Va: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 's'
            },
            ud: {
              Sa:
                'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
              Ya: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
              Va: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 't'
            }
          };
        function O(t) {
          for (var e in _)
            if (_[e].id === t)
              return (
                (t = _[e]),
                {
                  firebaseEndpoint: t.Sa,
                  secureTokenEndpoint: t.Ya,
                  identityPlatformEndpoint: t.Va
                }
              );
          return null;
        }
        function C(t) {
          if (t)
            try {
              return t.$goog_Thenable;
            } catch (t) {
              return;
            }
        }
        function R(t) {
          var e;
          Error.captureStackTrace
            ? Error.captureStackTrace(this, R)
            : (e = Error().stack) && (this.stack = e),
            t && (this.message = String(t));
        }
        function D(t, e) {
          for (
            var n = '', i = (t = t.split('%s')).length - 1, r = 0;
            r < i;
            r++
          )
            n += t[r] + (r < e.length ? e[r] : '%s');
          R.call(this, n + t[i]);
        }
        function P(t) {
          throw new D(
            'Failure' + (t ? ': ' + t : ''),
            Array.prototype.slice.call(arguments, 1)
          );
        }
        function L(t, e) {
          (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
        }
        function x(t, e) {
          t.f(e), t.b < 100 && (t.b++, (e.next = t.a), (t.a = e));
        }
        function M() {
          this.b = this.a = null;
        }
        (k = O('__EID__') ? '__EID__' : void 0),
          I(R, Error),
          (R.prototype.name = 'CustomError'),
          I(D, R),
          (D.prototype.name = 'AssertionError'),
          (L.prototype.get = function () {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          });
        var j = new L(
          function () {
            return new U();
          },
          function (t) {
            t.reset();
          }
        );
        function U() {
          this.next = this.b = this.a = null;
        }
        (M.prototype.add = function (t, e) {
          var n = j.get();
          n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
        }),
          (U.prototype.set = function (t, e) {
            (this.a = t), (this.b = e), (this.next = null);
          }),
          (U.prototype.reset = function () {
            this.next = this.b = this.a = null;
          });
        var V = Array.prototype.indexOf
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
          F = Array.prototype.forEach
            ? function (t, e, n) {
                Array.prototype.forEach.call(t, e, n);
              }
            : function (t, e, n) {
                for (
                  var i = t.length,
                    r = 'string' == typeof t ? t.split('') : t,
                    o = 0;
                  o < i;
                  o++
                )
                  o in r && e.call(n, r[o], o, t);
              };
        var q = Array.prototype.filter
            ? function (t, e) {
                return Array.prototype.filter.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n,
                    i = t.length,
                    r = [],
                    o = 0,
                    a = 'string' == typeof t ? t.split('') : t,
                    s = 0;
                  s < i;
                  s++
                ) {
                  s in a &&
                    ((n = a[s]), e.call(void 0, n, s, t) && (r[o++] = n));
                }
                return r;
              },
          H = Array.prototype.map
            ? function (t, e) {
                return Array.prototype.map.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n = t.length,
                    i = Array(n),
                    r = 'string' == typeof t ? t.split('') : t,
                    o = 0;
                  o < n;
                  o++
                )
                  o in r && (i[o] = e.call(void 0, r[o], o, t));
                return i;
              },
          K = Array.prototype.some
            ? function (t, e) {
                return Array.prototype.some.call(t, e, void 0);
              }
            : function (t, e) {
                for (
                  var n = t.length,
                    i = 'string' == typeof t ? t.split('') : t,
                    r = 0;
                  r < n;
                  r++
                )
                  if (r in i && e.call(void 0, i[r], r, t)) return !0;
                return !1;
              };
        function G(t, e) {
          return 0 <= V(t, e);
        }
        function B(t, e) {
          var n;
          return (
            (n = 0 <= (e = V(t, e))) && Array.prototype.splice.call(t, e, 1), n
          );
        }
        function W(n, i) {
          !(function (t, e) {
            for (
              var n = 'string' == typeof t ? t.split('') : t, i = t.length - 1;
              0 <= i;
              --i
            )
              i in n && e.call(void 0, n[i], i, t);
          })(n, function (t, e) {
            i.call(void 0, t, e, n) &&
              1 == Array.prototype.splice.call(n, e, 1).length &&
              0;
          });
        }
        function X() {
          return Array.prototype.concat.apply([], arguments);
        }
        function J(t) {
          var e = t.length;
          if (0 < e) {
            for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
            return n;
          }
          return [];
        }
        var Y,
          z = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              },
          $ = /&/g,
          Z = /</g,
          Q = />/g,
          tt = /"/g,
          et = /'/g,
          nt = /\x00/g,
          it = /[\x00&<>"']/;
        function rt(t, e) {
          return -1 != t.indexOf(e);
        }
        function ot(t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        }
        t: {
          var at = l.navigator;
          if (at) {
            at = at.userAgent;
            if (at) {
              Y = at;
              break t;
            }
          }
          Y = '';
        }
        function st(t) {
          return rt(Y, t);
        }
        function ut(t, e) {
          for (var n in t) e.call(void 0, t[n], n, t);
        }
        function ct(t) {
          for (var e in t) return;
          return 1;
        }
        function ht(t) {
          var e,
            n = {};
          for (e in t) n[e] = t[e];
          return n;
        }
        var lt = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        );
        function ft(t) {
          for (var e, n, i = 1; i < arguments.length; i++) {
            for (e in (n = arguments[i])) t[e] = n[e];
            for (var r = 0; r < lt.length; r++)
              (e = lt[r]),
                Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
          }
        }
        function dt(t, e) {
          t: {
            try {
              var n = t && t.ownerDocument,
                n = n && (n.defaultView || n.parentWindow);
              if ((n = n || l).Element && n.Location) {
                var i = n;
                break t;
              }
            } catch (t) {}
            i = null;
          }
          if (
            i &&
            void 0 !== i[e] &&
            (!t ||
              (!(t instanceof i[e]) &&
                (t instanceof i.Location || t instanceof i.Element)))
          ) {
            if (m(t))
              try {
                var r =
                  t.constructor.displayName ||
                  t.constructor.name ||
                  Object.prototype.toString.call(t);
              } catch (t) {
                r = '<object could not be stringified>';
              }
            else
              r = void 0 === t ? 'undefined' : null === t ? 'null' : typeof t;
            P(
              'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
              e,
              r
            );
          }
        }
        function pt(t, e) {
          (this.a = (t === bt && e) || ''), (this.b = gt);
        }
        function vt(t) {
          return t instanceof pt && t.constructor === pt && t.b === gt
            ? t.a
            : (P("expected object of type Const, got '" + t + "'"),
              'type_error:Const');
        }
        (pt.prototype.sa = !0),
          (pt.prototype.ra = function () {
            return this.a;
          }),
          (pt.prototype.toString = function () {
            return 'Const{' + this.a + '}';
          });
        var mt,
          gt = {},
          bt = {};
        function yt() {
          if (void 0 === mt) {
            var t = null,
              e = l.trustedTypes;
            if (e && e.createPolicy) {
              try {
                t = e.createPolicy('goog#html', {
                  createHTML: T,
                  createScript: T,
                  createScriptURL: T
                });
              } catch (t) {
                l.console && l.console.error(t.message);
              }
              mt = t;
            } else mt = t;
          }
          return mt;
        }
        function wt(t, e) {
          this.a = e === kt ? t : '';
        }
        function It(t) {
          return t instanceof wt && t.constructor === wt
            ? t.a
            : (P(
                "expected object of type TrustedResourceUrl, got '" +
                  t +
                  "' of type " +
                  d(t)
              ),
              'type_error:TrustedResourceUrl');
        }
        function Tt(t, n) {
          var e,
            i = vt(t);
          if (!At.test(i))
            throw Error('Invalid TrustedResourceUrl format: ' + i);
          return (
            (t = i.replace(Et, function (t, e) {
              if (!Object.prototype.hasOwnProperty.call(n, e))
                throw Error(
                  'Found marker, "' +
                    e +
                    '", in format string, "' +
                    i +
                    '", but no valid label mapping found in args: ' +
                    JSON.stringify(n)
                );
              return (t = n[e]) instanceof pt
                ? vt(t)
                : encodeURIComponent(String(t));
            })),
            (e = t),
            (t = yt()),
            new wt((e = t ? t.createScriptURL(e) : e), kt)
          );
        }
        (wt.prototype.sa = !0),
          (wt.prototype.ra = function () {
            return this.a.toString();
          }),
          (wt.prototype.toString = function () {
            return 'TrustedResourceUrl{' + this.a + '}';
          });
        var Et = /%{(\w+)}/g,
          At = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
          kt = {};
        function St(t, e) {
          this.a = e === Pt ? t : '';
        }
        function Nt(t) {
          return t instanceof St && t.constructor === St
            ? t.a
            : (P(
                "expected object of type SafeUrl, got '" +
                  t +
                  "' of type " +
                  d(t)
              ),
              'type_error:SafeUrl');
        }
        (St.prototype.sa = !0),
          (St.prototype.ra = function () {
            return this.a.toString();
          }),
          (St.prototype.toString = function () {
            return 'SafeUrl{' + this.a + '}';
          });
        var _t = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
          Ot = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
          Ct = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        function Rt(t) {
          return t instanceof St
            ? t
            : ((t = 'object' == typeof t && t.sa ? t.ra() : String(t)),
              (t =
                Ct.test(t) ||
                ((e = (t = (t = String(t)).replace(/(%0A|%0D)/g, '')).match(
                  Ot
                )) &&
                  _t.test(e[1]))
                  ? new St(t, Pt)
                  : null));
          var e;
        }
        function Dt(t) {
          return t instanceof St
            ? t
            : ((t = 'object' == typeof t && t.sa ? t.ra() : String(t)),
              Ct.test(t) || (t = 'about:invalid#zClosurez'),
              new St(t, Pt));
        }
        var Pt = {},
          Lt = new St('about:invalid#zClosurez', Pt);
        function xt(t, e, n) {
          this.a = n === Mt ? t : '';
        }
        (xt.prototype.sa = !0),
          (xt.prototype.ra = function () {
            return this.a.toString();
          }),
          (xt.prototype.toString = function () {
            return 'SafeHtml{' + this.a + '}';
          });
        var Mt = {};
        function jt(t, e, n, i) {
          return (
            (t = t instanceof St ? t : Dt(t)),
            (e = e || l),
            (n = n instanceof pt ? vt(n) : n || ''),
            e.open(Nt(t), n, i, void 0)
          );
        }
        function Ut(t) {
          for (
            var e = t.split('%s'),
              n = '',
              i = Array.prototype.slice.call(arguments, 1);
            i.length && 1 < e.length;

          )
            n += e.shift() + i.shift();
          return n + e.join('%s');
        }
        function Vt(t) {
          return (
            it.test(t) &&
              (-1 != t.indexOf('&') && (t = t.replace($, '&amp;')),
              -1 != t.indexOf('<') && (t = t.replace(Z, '&lt;')),
              -1 != t.indexOf('>') && (t = t.replace(Q, '&gt;')),
              -1 != t.indexOf('"') && (t = t.replace(tt, '&quot;')),
              -1 != t.indexOf("'") && (t = t.replace(et, '&#39;')),
              -1 != t.indexOf('\0') && (t = t.replace(nt, '&#0;'))),
            t
          );
        }
        function Ft(t) {
          return Ft[' '](t), t;
        }
        Ft[' '] = a;
        var qt,
          Ht = st('Opera'),
          Kt = st('Trident') || st('MSIE'),
          Gt = st('Edge'),
          Bt = Gt || Kt,
          Wt =
            st('Gecko') &&
            !(rt(Y.toLowerCase(), 'webkit') && !st('Edge')) &&
            !(st('Trident') || st('MSIE')) &&
            !st('Edge'),
          Xt = rt(Y.toLowerCase(), 'webkit') && !st('Edge');
        function Jt() {
          var t = l.document;
          return t ? t.documentMode : void 0;
        }
        t: {
          var Yt = '',
            zt =
              ((zt = Y),
              Wt
                ? /rv:([^\);]+)(\)|;)/.exec(zt)
                : Gt
                ? /Edge\/([\d\.]+)/.exec(zt)
                : Kt
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(zt)
                : Xt
                ? /WebKit\/(\S+)/.exec(zt)
                : Ht
                ? /(?:Version)[ \/]?(\S+)/.exec(zt)
                : void 0);
          if ((zt && (Yt = zt ? zt[1] : ''), Kt)) {
            zt = Jt();
            if (null != zt && zt > parseFloat(Yt)) {
              qt = String(zt);
              break t;
            }
          }
          qt = Yt;
        }
        var $t = {};
        function Zt(s) {
          return (
            (t = s),
            (e = function () {
              for (
                var t = 0,
                  e = z(String(qt)).split('.'),
                  n = z(String(s)).split('.'),
                  i = Math.max(e.length, n.length),
                  r = 0;
                0 == t && r < i;
                r++
              ) {
                var o = e[r] || '',
                  a = n[r] || '';
                do {
                  if (
                    ((o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                    (a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                    0 == o[0].length && 0 == a[0].length)
                  )
                    break;
                  (t =
                    ot(
                      0 == o[1].length ? 0 : parseInt(o[1], 10),
                      0 == a[1].length ? 0 : parseInt(a[1], 10)
                    ) ||
                    ot(0 == o[2].length, 0 == a[2].length) ||
                    ot(o[2], a[2])),
                    (o = o[3]),
                    (a = a[3]);
                } while (0 == t);
              }
              return 0 <= t;
            }),
            (n = $t),
            Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
          );
          var t, e, n;
        }
        var Qt = l.document && Kt ? Jt() || parseInt(qt, 10) || void 0 : void 0;
        try {
          new self.OffscreenCanvas(0, 0).getContext('2d');
        } catch (t) {}
        var te = !Kt || 9 <= Number(Qt);
        function ee(t) {
          var e = document;
          return 'string' == typeof t ? e.getElementById(t) : t;
        }
        function ne(n, t) {
          ut(t, function (t, e) {
            t && 'object' == typeof t && t.sa && (t = t.ra()),
              'style' == e
                ? (n.style.cssText = t)
                : 'class' == e
                ? (n.className = t)
                : 'for' == e
                ? (n.htmlFor = t)
                : oe.hasOwnProperty(e)
                ? n.setAttribute(oe[e], t)
                : 0 == e.lastIndexOf('aria-', 0) ||
                  0 == e.lastIndexOf('data-', 0)
                ? n.setAttribute(e, t)
                : (n[e] = t);
          });
        }
        var ie,
          re,
          oe = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width'
          };
        function ae() {
          var t,
            e = arguments,
            n = document,
            i = String(e[0]),
            r = e[1];
          return (
            !te &&
              r &&
              (r.name || r.type) &&
              ((i = ['<', i]),
              r.name && i.push(' name="', Vt(r.name), '"'),
              r.type &&
                (i.push(' type="', Vt(r.type), '"'),
                ft((t = {}), r),
                delete t.type,
                (r = t)),
              i.push('>'),
              (i = i.join(''))),
            (i = se(n, i)),
            r &&
              ('string' == typeof r
                ? (i.className = r)
                : Array.isArray(r)
                ? (i.className = r.join(' '))
                : ne(i, r)),
            2 < e.length &&
              (function (e, n, t) {
                function i(t) {
                  t &&
                    n.appendChild(
                      'string' == typeof t ? e.createTextNode(t) : t
                    );
                }
                for (var r = 2; r < t.length; r++) {
                  var o = t[r];
                  if (!p(o) || (m(o) && 0 < o.nodeType)) i(o);
                  else {
                    t: {
                      if (o && 'number' == typeof o.length) {
                        if (m(o)) {
                          var a =
                            'function' == typeof o.item ||
                            'string' == typeof o.item;
                          break t;
                        }
                        if (v(o)) {
                          a = 'function' == typeof o.item;
                          break t;
                        }
                      }
                      a = !1;
                    }
                    F(a ? J(o) : o, i);
                  }
                }
              })(n, i, e),
            i
          );
        }
        function se(t, e) {
          return (
            (e = String(e)),
            'application/xhtml+xml' === t.contentType && (e = e.toLowerCase()),
            t.createElement(e)
          );
        }
        function ue(t) {
          l.setTimeout(function () {
            throw t;
          }, 0);
        }
        function ce(t, e) {
          re ||
            (function () {
              {
                var t;
                re =
                  l.Promise && l.Promise.resolve
                    ? ((t = l.Promise.resolve(void 0)),
                      function () {
                        t.then(fe);
                      })
                    : function () {
                        var t = fe;
                        !v(l.setImmediate) ||
                        (l.Window &&
                          l.Window.prototype &&
                          !st('Edge') &&
                          l.Window.prototype.setImmediate == l.setImmediate)
                          ? (ie =
                              ie ||
                              (function () {
                                var t = l.MessageChannel;
                                if (
                                  (void 0 === t &&
                                    'undefined' != typeof window &&
                                    window.postMessage &&
                                    window.addEventListener &&
                                    !st('Presto') &&
                                    (t = function () {
                                      var t = se(document, 'IFRAME');
                                      (t.style.display = 'none'),
                                        document.documentElement.appendChild(t);
                                      var e = t.contentWindow;
                                      (t = e.document).open(), t.close();
                                      var n = 'callImmediate' + Math.random(),
                                        i =
                                          'file:' == e.location.protocol
                                            ? '*'
                                            : e.location.protocol +
                                              '//' +
                                              e.location.host;
                                      (t = b(function (t) {
                                        ('*' != i && t.origin != i) ||
                                          t.data != n ||
                                          this.port1.onmessage();
                                      }, this)),
                                        e.addEventListener('message', t, !1),
                                        (this.port1 = {}),
                                        (this.port2 = {
                                          postMessage: function () {
                                            e.postMessage(n, i);
                                          }
                                        });
                                    }),
                                  void 0 === t || st('Trident') || st('MSIE'))
                                )
                                  return function (t) {
                                    l.setTimeout(t, 0);
                                  };
                                var e = new t(),
                                  n = {},
                                  i = n;
                                return (
                                  (e.port1.onmessage = function () {
                                    var t;
                                    void 0 !== n.next &&
                                      ((t = (n = n.next).Fb),
                                      (n.Fb = null),
                                      t());
                                  }),
                                  function (t) {
                                    (i.next = { Fb: t }),
                                      (i = i.next),
                                      e.port2.postMessage(0);
                                  }
                                );
                              })())(t)
                          : l.setImmediate(t);
                      };
              }
            })(),
            he || (re(), (he = !0)),
            le.add(t, e);
        }
        var he = !1,
          le = new M();
        function fe() {
          for (
            var t, e, n;
            (n = e = void 0),
              (n = null),
              (e = le).a &&
                ((n = e.a),
                (e.a = e.a.next),
                e.a || (e.b = null),
                (n.next = null)),
              (t = n);

          ) {
            try {
              t.a.call(t.b);
            } catch (t) {
              ue(t);
            }
            x(j, t);
          }
          he = !1;
        }
        function de(t, e) {
          if (
            ((this.a = pe),
            (this.i = void 0),
            (this.f = this.b = this.c = null),
            (this.g = this.h = !1),
            t != a)
          )
            try {
              var n = this;
              t.call(
                e,
                function (t) {
                  Se(n, ve, t);
                },
                function (t) {
                  if (!(t instanceof Pe))
                    try {
                      if (t instanceof Error) throw t;
                      throw Error('Promise rejected.');
                    } catch (t) {}
                  Se(n, me, t);
                }
              );
            } catch (t) {
              Se(this, me, t);
            }
        }
        var pe = 0,
          ve = 2,
          me = 3;
        function ge() {
          (this.next = this.f = this.b = this.g = this.a = null), (this.c = !1);
        }
        ge.prototype.reset = function () {
          (this.f = this.b = this.g = this.a = null), (this.c = !1);
        };
        var be = new L(
          function () {
            return new ge();
          },
          function (t) {
            t.reset();
          }
        );
        function ye(t, e, n) {
          var i = be.get();
          return (i.g = t), (i.b = e), (i.f = n), i;
        }
        function we(t) {
          if (t instanceof de) return t;
          var e = new de(a);
          return Se(e, ve, t), e;
        }
        function Ie(n) {
          return new de(function (t, e) {
            e(n);
          });
        }
        function Te(t, e, n) {
          Ne(t, e, n, null) || ce(y(e, t));
        }
        function Ee(n) {
          return new de(function (i) {
            var r = n.length,
              o = [];
            if (r)
              for (
                var t = function (t, e, n) {
                    r--,
                      (o[t] = e ? { Ob: !0, value: n } : { Ob: !1, reason: n }),
                      0 == r && i(o);
                  },
                  e = 0;
                e < n.length;
                e++
              )
                Te(n[e], y(t, e, !0), y(t, e, !1));
            else i(o);
          });
        }
        function Ae(t, e) {
          t.b || (t.a != ve && t.a != me) || _e(t),
            t.f ? (t.f.next = e) : (t.b = e),
            (t.f = e);
        }
        function ke(t, r, o, a) {
          var e = ye(null, null, null);
          return (
            (e.a = new de(function (n, i) {
              (e.g = r
                ? function (t) {
                    try {
                      var e = r.call(a, t);
                      n(e);
                    } catch (t) {
                      i(t);
                    }
                  }
                : n),
                (e.b = o
                  ? function (t) {
                      try {
                        var e = o.call(a, t);
                        void 0 === e && t instanceof Pe ? i(t) : n(e);
                      } catch (t) {
                        i(t);
                      }
                    }
                  : i);
            })),
            Ae((e.a.c = t), e),
            e.a
          );
        }
        function Se(t, e, n) {
          var i, r;
          t.a == pe &&
            (t === n &&
              ((e = me),
              (n = new TypeError('Promise cannot resolve to itself'))),
            (t.a = 1),
            Ne(n, t.Zc, t.$c, t) ||
              ((t.i = n),
              (t.a = e),
              (t.c = null),
              _e(t),
              e != me ||
                n instanceof Pe ||
                ((r = n),
                ((i = t).g = !0),
                ce(function () {
                  i.g && De.call(null, r);
                }))));
        }
        function Ne(t, e, n, i) {
          if (t instanceof de) return Ae(t, ye(e || a, n || null, i)), 1;
          if (C(t)) return t.then(e, n, i), 1;
          if (m(t))
            try {
              var r = t.then;
              if (v(r))
                return (
                  (function (t, e, n, i, r) {
                    function o(t) {
                      a || ((a = !0), i.call(r, t));
                    }
                    var a = !1;
                    try {
                      e.call(
                        t,
                        function (t) {
                          a || ((a = !0), n.call(r, t));
                        },
                        o
                      );
                    } catch (t) {
                      o(t);
                    }
                  })(t, r, e, n, i),
                  1
                );
            } catch (t) {
              return n.call(i, t), 1;
            }
        }
        function _e(t) {
          t.h || ((t.h = !0), ce(t.fc, t));
        }
        function Oe(t) {
          var e = null;
          return (
            t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
            t.b || (t.f = null),
            e
          );
        }
        function Ce(t, e, n, i) {
          if (n == me && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
          if (e.a) (e.a.c = null), Re(e, n, i);
          else
            try {
              e.c ? e.g.call(e.f) : Re(e, n, i);
            } catch (t) {
              De.call(null, t);
            }
          x(be, e);
        }
        function Re(t, e, n) {
          e == ve ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
        }
        (de.prototype.then = function (t, e, n) {
          return ke(this, v(t) ? t : null, v(e) ? e : null, n);
        }),
          (de.prototype.$goog_Thenable = !0),
          ((t = de.prototype).na = function (t, e) {
            return ((t = ye(t, t, e)).c = !0), Ae(this, t), this;
          }),
          (t.o = function (t, e) {
            return ke(this, null, t, e);
          }),
          (t.cancel = function (t) {
            var e;
            this.a == pe &&
              ((e = new Pe(t)),
              ce(function () {
                !(function t(e, n) {
                  if (e.a == pe)
                    if (e.c) {
                      var i = e.c;
                      if (i.b) {
                        for (
                          var r = 0, o = null, a = null, s = i.b;
                          s &&
                          (s.c || (r++, s.a == e && (o = s), !(o && 1 < r)));
                          s = s.next
                        )
                          o || (a = s);
                        o &&
                          (i.a == pe && 1 == r
                            ? t(i, n)
                            : (a
                                ? ((r = a).next == i.f && (i.f = r),
                                  (r.next = r.next.next))
                                : Oe(i),
                              Ce(i, o, me, n)));
                      }
                      e.c = null;
                    } else Se(e, me, n);
                })(this, e);
              }, this));
          }),
          (t.Zc = function (t) {
            (this.a = pe), Se(this, ve, t);
          }),
          (t.$c = function (t) {
            (this.a = pe), Se(this, me, t);
          }),
          (t.fc = function () {
            for (var t; (t = Oe(this)); ) Ce(this, t, this.a, this.i);
            this.h = !1;
          });
        var De = ue;
        function Pe(t) {
          R.call(this, t);
        }
        function Le() {
          (this.xa = this.xa), (this.oa = this.oa);
        }
        I(Pe, R);
        var xe = 0;
        function Me(t) {
          t.xa ||
            ((t.xa = !0), t.Da(), 0 == xe) ||
            ((t = t),
            (Object.prototype.hasOwnProperty.call(t, n) && t[n]) ||
              (t[n] = ++i));
        }
        (Le.prototype.xa = !(Pe.prototype.name = 'cancel')),
          (Le.prototype.Da = function () {
            if (this.oa) for (; this.oa.length; ) this.oa.shift()();
          });
        var je =
            Object.freeze ||
            function (t) {
              return t;
            },
          Ue = !Kt || 9 <= Number(Qt),
          Ve = Kt && !Zt('9'),
          Fe = (function () {
            if (!l.addEventListener || !Object.defineProperty) return !1;
            var t = !1,
              e = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                }
              });
            try {
              l.addEventListener('test', a, e),
                l.removeEventListener('test', a, e);
            } catch (t) {}
            return t;
          })();
        function qe(t, e) {
          (this.type = t),
            (this.b = this.target = e),
            (this.defaultPrevented = !1);
        }
        function He(t, e) {
          if (
            (qe.call(this, t ? t.type : ''),
            (this.relatedTarget = this.b = this.target = null),
            (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
            (this.key = ''),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ''),
            (this.a = null),
            t)
          ) {
            var n = (this.type = t.type),
              i =
                t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : null;
            if (
              ((this.target = t.target || t.srcElement),
              (this.b = e),
              (e = t.relatedTarget))
            ) {
              if (Wt) {
                t: {
                  try {
                    Ft(e.nodeName);
                    var r = !0;
                    break t;
                  } catch (t) {}
                  r = !1;
                }
                r || (e = null);
              }
            } else
              'mouseover' == n
                ? (e = t.fromElement)
                : 'mouseout' == n && (e = t.toElement);
            (this.relatedTarget = e),
              i
                ? ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
                  (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                  (this.screenX = i.screenX || 0),
                  (this.screenY = i.screenY || 0))
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
                  : Ke[t.pointerType] || ''),
              (this.a = t).defaultPrevented && this.preventDefault();
          }
        }
        (qe.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
          I(He, qe);
        var Ke = je({ 2: 'touch', 3: 'pen', 4: 'mouse' });
        (He.prototype.preventDefault = function () {
          He.$a.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault) t.preventDefault();
          else if (((t.returnValue = !1), Ve))
            try {
              (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                (t.keyCode = -1);
            } catch (t) {}
        }),
          (He.prototype.g = function () {
            return this.a;
          });
        var Ge = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
          Be = 0;
        function We(t, e, n, i, r) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = e),
            (this.type = n),
            (this.capture = !!i),
            (this.Ua = r),
            (this.key = ++Be),
            (this.va = this.Oa = !1);
        }
        function Xe(t) {
          (t.va = !0),
            (t.listener = null),
            (t.proxy = null),
            (t.src = null),
            (t.Ua = null);
        }
        function Je(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function Ye(t, e) {
          var n = e.type;
          n in t.a &&
            B(t.a[n], e) &&
            (Xe(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }
        function ze(t, e, n, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!o.va && o.listener == e && o.capture == !!n && o.Ua == i)
              return r;
          }
          return -1;
        }
        Je.prototype.add = function (t, e, n, i, r) {
          var o = t.toString();
          (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
          var a = ze(t, e, i, r);
          return (
            -1 < a
              ? ((e = t[a]), n || (e.Oa = !1))
              : (((e = new We(e, this.src, o, !!i, r)).Oa = n), t.push(e)),
            e
          );
        };
        var $e = 'closure_lm_' + ((1e6 * Math.random()) | 0),
          Ze = {};
        function Qe(t, e, n, i, r) {
          if (i && i.once) en(t, e, n, i, r);
          else if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) Qe(t, e[o], n, i, r);
          else
            (n = ln(n)),
              t && t[Ge]
                ? dn(t, e, n, m(i) ? !!i.capture : !!i, r)
                : tn(t, e, n, !1, i, r);
        }
        function tn(t, e, n, i, r, o) {
          if (!e) throw Error('Invalid event type');
          var a,
            s,
            u = m(r) ? !!r.capture : !!r,
            c = cn(t);
          if ((c || (t[$e] = c = new Je(t)), !(n = c.add(e, n, i, u, o)).proxy))
            if (
              ((a = un),
              (i = s = Ue
                ? function (t) {
                    return a.call(s.src, s.listener, t);
                  }
                : function (t) {
                    if (!(t = a.call(s.src, s.listener, t))) return t;
                  }),
              ((n.proxy = i).src = t),
              (i.listener = n),
              t.addEventListener)
            )
              Fe || (r = u),
                void 0 === r && (r = !1),
                t.addEventListener(e.toString(), i, r);
            else if (t.attachEvent) t.attachEvent(on(e.toString()), i);
            else {
              if (!t.addListener || !t.removeListener)
                throw Error(
                  'addEventListener and attachEvent are unavailable.'
                );
              t.addListener(i);
            }
        }
        function en(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) en(t, e[o], n, i, r);
          else
            (n = ln(n)),
              t && t[Ge]
                ? pn(t, e, n, m(i) ? !!i.capture : !!i, r)
                : tn(t, e, n, !0, i, r);
        }
        function nn(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) nn(t, e[o], n, i, r);
          else
            (i = m(i) ? !!i.capture : !!i),
              (n = ln(n)),
              t && t[Ge]
                ? ((t = t.v),
                  (e = String(e).toString()) in t.a &&
                    -1 < (n = ze((o = t.a[e]), n, i, r)) &&
                    (Xe(o[n]),
                    Array.prototype.splice.call(o, n, 1),
                    0 == o.length && (delete t.a[e], t.b--)))
                : (t = t && cn(t)) &&
                  ((e = t.a[e.toString()]),
                  (t = -1),
                  e && (t = ze(e, n, i, r)),
                  (n = -1 < t ? e[t] : null) && rn(n));
        }
        function rn(t) {
          var e, n, i;
          'number' != typeof t &&
            t &&
            !t.va &&
            ((e = t.src) && e[Ge]
              ? Ye(e.v, t)
              : ((n = t.type),
                (i = t.proxy),
                e.removeEventListener
                  ? e.removeEventListener(n, i, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(on(n), i)
                  : e.addListener && e.removeListener && e.removeListener(i),
                (n = cn(e))
                  ? (Ye(n, t), 0 == n.b && ((n.src = null), (e[$e] = null)))
                  : Xe(t)));
        }
        function on(t) {
          return t in Ze ? Ze[t] : (Ze[t] = 'on' + t);
        }
        function an(t, e, n, i) {
          var r = !0;
          if ((t = cn(t)) && (e = t.a[e.toString()]))
            for (e = e.concat(), t = 0; t < e.length; t++) {
              var o = e[t];
              o &&
                o.capture == n &&
                !o.va &&
                ((o = sn(o, i)), (r = r && !1 !== o));
            }
          return r;
        }
        function sn(t, e) {
          var n = t.listener,
            i = t.Ua || t.src;
          return t.Oa && rn(t), n.call(i, e);
        }
        function un(t, e) {
          if (t.va) return !0;
          if (Ue) return sn(t, new He(e, this));
          if (!e)
            t: {
              e = ['window', 'event'];
              for (var n = l, i = 0; i < e.length; i++)
                if (null == (n = n[e[i]])) {
                  e = null;
                  break t;
                }
              e = n;
            }
          if (
            ((e = new He((i = e), this)),
            (n = !0),
            !(i.keyCode < 0 || null != i.returnValue))
          ) {
            t: {
              var r = !1;
              if (0 == i.keyCode)
                try {
                  i.keyCode = -1;
                  break t;
                } catch (t) {
                  r = !0;
                }
              (!r && null != i.returnValue) || (i.returnValue = !0);
            }
            for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
              e.b = i[r];
              var o = an(i[r], t, !0, e),
                n = n && o;
            }
            for (r = 0; r < i.length; r++)
              (e.b = i[r]), (o = an(i[r], t, !1, e)), (n = n && o);
          }
          return n;
        }
        function cn(t) {
          return (t = t[$e]) instanceof Je ? t : null;
        }
        var hn = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
        function ln(e) {
          return v(e)
            ? e
            : (e[hn] ||
                (e[hn] = function (t) {
                  return e.handleEvent(t);
                }),
              e[hn]);
        }
        function fn() {
          Le.call(this), (this.v = new Je(this)), ((this.$b = this).fb = null);
        }
        function dn(t, e, n, i, r) {
          t.v.add(String(e), n, !1, i, r);
        }
        function pn(t, e, n, i, r) {
          t.v.add(String(e), n, !0, i, r);
        }
        function vn(t, e, n, i) {
          if (!(e = t.v.a[String(e)])) return !0;
          e = e.concat();
          for (var r = !0, o = 0; o < e.length; ++o) {
            var a,
              s,
              u = e[o];
            u &&
              !u.va &&
              u.capture == n &&
              ((a = u.listener),
              (s = u.Ua || u.src),
              u.Oa && Ye(t.v, u),
              (r = !1 !== a.call(s, i) && r));
          }
          return r && !i.defaultPrevented;
        }
        function mn(t, e, n) {
          if (v(t)) n && (t = b(t, n));
          else {
            if (!t || 'function' != typeof t.handleEvent)
              throw Error('Invalid listener argument');
            t = b(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0);
        }
        function gn(n) {
          var i = null;
          return new de(function (t, e) {
            -1 ==
              (i = mn(function () {
                t(void 0);
              }, n)) && e(Error('Failed to schedule timer.'));
          }).o(function (t) {
            throw (l.clearTimeout(i), t);
          });
        }
        function bn(t) {
          if (t.V && 'function' == typeof t.V) return t.V();
          if ('string' == typeof t) return t.split('');
          if (p(t)) {
            for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
            return e;
          }
          for (i in ((e = []), (n = 0), t)) e[n++] = t[i];
          return e;
        }
        function yn(t) {
          if (t.Y && 'function' == typeof t.Y) return t.Y();
          if (!t.V || 'function' != typeof t.V) {
            if (p(t) || 'string' == typeof t) {
              var e = [];
              t = t.length;
              for (var n = 0; n < t; n++) e.push(n);
              return e;
            }
            for (var i in ((e = []), (n = 0), t)) e[n++] = i;
            return e;
          }
        }
        function wn(t, e) {
          (this.b = {}), (this.a = []), (this.c = 0);
          var n = arguments.length;
          if (1 < n) {
            if (n % 2) throw Error('Uneven number of arguments');
            for (var i = 0; i < n; i += 2)
              this.set(arguments[i], arguments[i + 1]);
          } else if (t)
            if (t instanceof wn)
              for (n = t.Y(), i = 0; i < n.length; i++)
                this.set(n[i], t.get(n[i]));
            else for (i in t) this.set(i, t[i]);
        }
        function In(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length; ) {
              var i = t.a[e];
              Tn(t.b, i) && (t.a[n++] = i), e++;
            }
            t.a.length = n;
          }
          if (t.c != t.a.length) {
            for (var r = {}, n = (e = 0); e < t.a.length; )
              Tn(r, (i = t.a[e])) || (r[(t.a[n++] = i)] = 1), e++;
            t.a.length = n;
          }
        }
        function Tn(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        I(fn, Le),
          (fn.prototype[Ge] = !0),
          (fn.prototype.addEventListener = function (t, e, n, i) {
            Qe(this, t, e, n, i);
          }),
          (fn.prototype.removeEventListener = function (t, e, n, i) {
            nn(this, t, e, n, i);
          }),
          (fn.prototype.dispatchEvent = function (t) {
            var e,
              n = this.fb;
            if (n) for (e = []; n; n = n.fb) e.push(n);
            n = this.$b;
            var i = t.type || t;
            if (
              ('string' == typeof t
                ? (t = new qe(t, n))
                : t instanceof qe
                ? (t.target = t.target || n)
                : ((a = t), ft((t = new qe(i, n)), a)),
              (a = !0),
              e)
            )
              for (var r = e.length - 1; 0 <= r; r--)
                var o = (t.b = e[r]), a = vn(o, i, !0, t) && a;
            if (
              ((a = vn((o = t.b = n), i, !0, t) && a),
              (a = vn(o, i, !1, t) && a),
              e)
            )
              for (r = 0; r < e.length; r++)
                a = vn((o = t.b = e[r]), i, !1, t) && a;
            return a;
          }),
          (fn.prototype.Da = function () {
            if ((fn.$a.Da.call(this), this.v)) {
              var t,
                e = this.v;
              for (t in e.a) {
                for (var n = e.a[t], i = 0; i < n.length; i++) Xe(n[i]);
                delete e.a[t], e.b--;
              }
            }
            this.fb = null;
          }),
          ((t = wn.prototype).V = function () {
            In(this);
            for (var t = [], e = 0; e < this.a.length; e++)
              t.push(this.b[this.a[e]]);
            return t;
          }),
          (t.Y = function () {
            return In(this), this.a.concat();
          }),
          (t.clear = function () {
            (this.b = {}), (this.c = this.a.length = 0);
          }),
          (t.get = function (t, e) {
            return Tn(this.b, t) ? this.b[t] : e;
          }),
          (t.set = function (t, e) {
            Tn(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
          }),
          (t.forEach = function (t, e) {
            for (var n = this.Y(), i = 0; i < n.length; i++) {
              var r = n[i],
                o = this.get(r);
              t.call(e, o, r, this);
            }
          });
        var En = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function An(t, e) {
          var n;
          (this.a = this.l = this.f = ''),
            (this.g = null),
            (this.h = this.c = ''),
            (this.i = !1),
            t instanceof An
              ? ((this.i = void 0 !== e ? e : t.i),
                kn(this, t.f),
                (this.l = t.l),
                (this.a = t.a),
                Sn(this, t.g),
                (this.c = t.c),
                Nn(this, Wn(t.b)),
                (this.h = t.h))
              : t && (n = String(t).match(En))
              ? ((this.i = !!e),
                kn(this, n[1] || '', !0),
                (this.l = Dn(n[2] || '')),
                (this.a = Dn(n[3] || '', !0)),
                Sn(this, n[4]),
                (this.c = Dn(n[5] || '', !0)),
                Nn(this, n[6] || '', !0),
                (this.h = Dn(n[7] || '')))
              : ((this.i = !!e), (this.b = new Fn(null, this.i)));
        }
        function kn(t, e, n) {
          (t.f = n ? Dn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
        }
        function Sn(t, e) {
          if (e) {
            if (((e = Number(e)), isNaN(e) || e < 0))
              throw Error('Bad port number ' + e);
            t.g = e;
          } else t.g = null;
        }
        function Nn(t, e, n) {
          var i, r;
          e instanceof Fn
            ? ((t.b = e),
              (i = t.b),
              (r = t.i) &&
                !i.f &&
                (qn(i),
                (i.c = null),
                i.a.forEach(function (t, e) {
                  var n = e.toLowerCase();
                  e != n && (Kn(this, e), Bn(this, n, t));
                }, i)),
              (i.f = r))
            : (n || (e = Pn(e, Un)), (t.b = new Fn(e, t.i)));
        }
        function _n(t, e, n) {
          t.b.set(e, n);
        }
        function On(t, e) {
          return t.b.get(e);
        }
        function Cn(t) {
          return t instanceof An ? new An(t) : new An(t, void 0);
        }
        function Rn(t, e, n, i) {
          var r = new An(null, void 0);
          return (
            t && kn(r, t), e && (r.a = e), n && Sn(r, n), i && (r.c = i), r
          );
        }
        function Dn(t, e) {
          return t
            ? e
              ? decodeURI(t.replace(/%25/g, '%2525'))
              : decodeURIComponent(t)
            : '';
        }
        function Pn(t, e, n) {
          return 'string' == typeof t
            ? ((t = encodeURI(t).replace(e, Ln)),
              n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
              t)
            : null;
        }
        function Ln(t) {
          return (
            '%' +
            (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & t).toString(16)
          );
        }
        (An.prototype.toString = function () {
          var t = [],
            e = this.f;
          e && t.push(Pn(e, xn, !0), ':');
          var n = this.a;
          return (
            (!n && 'file' != e) ||
              (t.push('//'),
              (e = this.l) && t.push(Pn(e, xn, !0), '@'),
              t.push(
                encodeURIComponent(String(n)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  '%$1'
                )
              ),
              null != (n = this.g) && t.push(':', String(n))),
            (n = this.c) &&
              (this.a && '/' != n.charAt(0) && t.push('/'),
              t.push(Pn(n, '/' == n.charAt(0) ? jn : Mn, !0))),
            (n = this.b.toString()) && t.push('?', n),
            (n = this.h) && t.push('#', Pn(n, Vn)),
            t.join('')
          );
        }),
          (An.prototype.resolve = function (t) {
            var e = new An(this),
              n = !!t.f;
            n ? kn(e, t.f) : (n = !!t.l),
              n ? (e.l = t.l) : (n = !!t.a),
              n ? (e.a = t.a) : (n = null != t.g);
            var i,
              r = t.c;
            if (n) Sn(e, t.g);
            else if ((n = !!t.c)) {
              if (
                ('/' != r.charAt(0) &&
                  (this.a && !this.c
                    ? (r = '/' + r)
                    : -1 != (i = e.c.lastIndexOf('/')) &&
                      (r = e.c.substr(0, i + 1) + r)),
                '..' == (i = r) || '.' == i)
              )
                r = '';
              else if (rt(i, './') || rt(i, '/.')) {
                (r = 0 == i.lastIndexOf('/', 0)), (i = i.split('/'));
                for (var o = [], a = 0; a < i.length; ) {
                  var s = i[a++];
                  '.' == s
                    ? r && a == i.length && o.push('')
                    : '..' == s
                    ? ((1 < o.length || (1 == o.length && '' != o[0])) &&
                        o.pop(),
                      r && a == i.length && o.push(''))
                    : (o.push(s), (r = !0));
                }
                r = o.join('/');
              } else r = i;
            }
            return (
              n ? (e.c = r) : (n = '' !== t.b.toString()),
              n ? Nn(e, Wn(t.b)) : (n = !!t.h),
              n && (e.h = t.h),
              e
            );
          });
        var xn = /[#\/\?@]/g,
          Mn = /[#\?:]/g,
          jn = /[#\?]/g,
          Un = /[#\?@]/g,
          Vn = /#/g;
        function Fn(t, e) {
          (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
        }
        function qn(n) {
          n.a ||
            ((n.a = new wn()),
            (n.b = 0),
            n.c &&
              (function (t, e) {
                if (t) {
                  t = t.split('&');
                  for (var n = 0; n < t.length; n++) {
                    var i,
                      r = t[n].indexOf('='),
                      o = null;
                    0 <= r
                      ? ((i = t[n].substring(0, r)),
                        (o = t[n].substring(r + 1)))
                      : (i = t[n]),
                      e(i, o ? decodeURIComponent(o.replace(/\+/g, ' ')) : '');
                  }
                }
              })(n.c, function (t, e) {
                n.add(decodeURIComponent(t.replace(/\+/g, ' ')), e);
              }));
        }
        function Hn(t) {
          var e = yn(t);
          if (void 0 === e) throw Error('Keys are undefined');
          var n = new Fn(null, void 0);
          t = bn(t);
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = t[i];
            Array.isArray(o) ? Bn(n, r, o) : n.add(r, o);
          }
          return n;
        }
        function Kn(t, e) {
          qn(t),
            (e = Xn(t, e)),
            Tn(t.a.b, e) &&
              ((t.c = null),
              (t.b -= t.a.get(e).length),
              Tn((t = t.a).b, e) &&
                (delete t.b[e], t.c--, t.a.length > 2 * t.c && In(t)));
        }
        function Gn(t, e) {
          return qn(t), (e = Xn(t, e)), Tn(t.a.b, e);
        }
        function Bn(t, e, n) {
          Kn(t, e),
            0 < n.length &&
              ((t.c = null), t.a.set(Xn(t, e), J(n)), (t.b += n.length));
        }
        function Wn(t) {
          var e = new Fn();
          return (e.c = t.c), t.a && ((e.a = new wn(t.a)), (e.b = t.b)), e;
        }
        function Xn(t, e) {
          return (e = String(e)), t.f && (e = e.toLowerCase()), e;
        }
        function Jn(t) {
          var e = [];
          return (
            (function t(e, n, i) {
              if (null == n) i.push('null');
              else {
                if ('object' == typeof n) {
                  if (Array.isArray(n)) {
                    var r = n;
                    (n = r.length), i.push('[');
                    for (var o = '', a = 0; a < n; a++)
                      i.push(o), t(e, r[a], i), (o = ',');
                    return void i.push(']');
                  }
                  if (
                    !(
                      n instanceof String ||
                      n instanceof Number ||
                      n instanceof Boolean
                    )
                  ) {
                    for (r in (i.push('{'), (o = ''), n))
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        ((a = n[r]),
                        'function' != typeof a &&
                          (i.push(o),
                          Zn(r, i),
                          i.push(':'),
                          t(e, a, i),
                          (o = ',')));
                    return void i.push('}');
                  }
                  n = n.valueOf();
                }
                switch (typeof n) {
                  case 'string':
                    Zn(n, i);
                    break;
                  case 'number':
                    i.push(isFinite(n) && !isNaN(n) ? String(n) : 'null');
                    break;
                  case 'boolean':
                    i.push(String(n));
                    break;
                  case 'function':
                    i.push('null');
                    break;
                  default:
                    throw Error('Unknown type: ' + typeof n);
                }
              }
            })(new Yn(), t, e),
            e.join('')
          );
        }
        function Yn() {}
        ((t = Fn.prototype).add = function (t, e) {
          qn(this), (this.c = null), (t = Xn(this, t));
          var n = this.a.get(t);
          return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
        }),
          (t.clear = function () {
            (this.a = this.c = null), (this.b = 0);
          }),
          (t.forEach = function (n, i) {
            qn(this),
              this.a.forEach(function (t, e) {
                F(
                  t,
                  function (t) {
                    n.call(i, t, e, this);
                  },
                  this
                );
              }, this);
          }),
          (t.Y = function () {
            qn(this);
            for (
              var t = this.a.V(), e = this.a.Y(), n = [], i = 0;
              i < e.length;
              i++
            )
              for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
            return n;
          }),
          (t.V = function (t) {
            qn(this);
            var e = [];
            if ('string' == typeof t)
              Gn(this, t) && (e = X(e, this.a.get(Xn(this, t))));
            else {
              t = this.a.V();
              for (var n = 0; n < t.length; n++) e = X(e, t[n]);
            }
            return e;
          }),
          (t.set = function (t, e) {
            return (
              qn(this),
              (this.c = null),
              Gn(this, (t = Xn(this, t))) && (this.b -= this.a.get(t).length),
              this.a.set(t, [e]),
              (this.b += 1),
              this
            );
          }),
          (t.get = function (t, e) {
            return t && 0 < (t = this.V(t)).length ? String(t[0]) : e;
          }),
          (t.toString = function () {
            if (this.c) return this.c;
            if (!this.a) return '';
            for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++)
              for (
                var i = e[n],
                  r = encodeURIComponent(String(i)),
                  i = this.V(i),
                  o = 0;
                o < i.length;
                o++
              ) {
                var a = r;
                '' !== i[o] && (a += '=' + encodeURIComponent(String(i[o]))),
                  t.push(a);
              }
            return (this.c = t.join('&'));
          });
        var zn = {
            '"': '\\"',
            '\\': '\\\\',
            '/': '\\/',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\u000b'
          },
          $n = /\uffff/.test('\uffff')
            ? /[\\"\x00-\x1f\x7f-\uffff]/g
            : /[\\"\x00-\x1f\x7f-\xff]/g;
        function Zn(t, e) {
          e.push(
            '"',
            t.replace($n, function (t) {
              var e = zn[t];
              return (
                e ||
                  ((e =
                    '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                  (zn[t] = e)),
                e
              );
            }),
            '"'
          );
        }
        function Qn() {
          var t = bi();
          return (Kt && Qt && 11 == Qt) || /Edge\/\d+/.test(t);
        }
        function ti() {
          return (
            (l.window && l.window.location.href) ||
            (self && self.location && self.location.href) ||
            ''
          );
        }
        function ei(t, e) {
          e = e || l.window;
          var n = 'about:blank';
          t && (n = Nt(Rt(t) || Lt)), (e.location.href = n);
        }
        function ni(t) {
          return !!(
            (t = (t || bi()).toLowerCase()).match(/android/) ||
            t.match(/webos/) ||
            t.match(/iphone|ipad|ipod/) ||
            t.match(/blackberry/) ||
            t.match(/windows phone/) ||
            t.match(/iemobile/)
          );
        }
        function ii(t) {
          t = t || l.window;
          try {
            t.close();
          } catch (t) {}
        }
        function ri(t, e, n) {
          var i = Math.floor(1e9 * Math.random()).toString();
          (e = e || 500), (n = n || 600);
          var r = (window.screen.availHeight - n) / 2,
            o = (window.screen.availWidth - e) / 2;
          for (a in ((e = {
            width: e,
            height: n,
            top: 0 < r ? r : 0,
            left: 0 < o ? o : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
          }),
          (n = bi().toLowerCase()),
          i && ((e.target = i), rt(n, 'crios/') && (e.target = '_blank')),
          vi(bi()) == di &&
            ((t = t || 'http://localhost'), (e.scrollbars = !0)),
          (n = t || ''),
          (t = e) || (t = {}),
          (i = window),
          (e =
            n instanceof St
              ? n
              : Rt(void 0 !== n.href ? n.href : String(n)) || Lt),
          (n = t.target || n.target),
          (r = []),
          t))
            switch (a) {
              case 'width':
              case 'height':
              case 'top':
              case 'left':
                r.push(a + '=' + t[a]);
                break;
              case 'target':
              case 'noopener':
              case 'noreferrer':
                break;
              default:
                r.push(a + '=' + (t[a] ? 1 : 0));
            }
          var a = r.join(',');
          if (
            (((st('iPhone') && !st('iPod') && !st('iPad')) ||
              st('iPad') ||
              st('iPod')) &&
            i.navigator &&
            i.navigator.standalone &&
            n &&
            '_self' != n
              ? (dt((a = se(document, 'A')), 'HTMLAnchorElement'),
                (e = e instanceof St ? e : Dt(e)),
                (a.href = Nt(e)),
                a.setAttribute('target', n),
                t.noreferrer && a.setAttribute('rel', 'noreferrer'),
                (t = document.createEvent('MouseEvent')).initMouseEvent(
                  'click',
                  !0,
                  !0,
                  i,
                  1
                ),
                a.dispatchEvent(t),
                (a = {}))
              : t.noreferrer
              ? ((a = jt('', i, n, a)),
                (t = Nt(e)),
                a &&
                  (Bt && rt(t, ';') && (t = "'" + t.replace(/'/g, '%27') + "'"),
                  (a.opener = null),
                  (t =
                    '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                    Vt(t) +
                    '">'),
                  (t = new xt((t = (i = yt()) ? i.createHTML(t) : t), 0, Mt)),
                  (i = a.document)) &&
                  (i.write(
                    (o = t) instanceof xt && o.constructor === xt
                      ? o.a
                      : (P(
                          "expected object of type SafeHtml, got '" +
                            o +
                            "' of type " +
                            d(o)
                        ),
                        'type_error:SafeHtml')
                  ),
                  i.close()))
              : (a = jt(e, i, n, a)) && t.noopener && (a.opener = null),
            a)
          )
            try {
              a.focus();
            } catch (t) {}
          return a;
        }
        var oi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          ai = /^[^@]+@[^@]+$/;
        function si() {
          var e = null;
          return new de(function (t) {
            'complete' == l.document.readyState
              ? t()
              : ((e = function () {
                  t();
                }),
                en(window, 'load', e));
          }).o(function (t) {
            throw (nn(window, 'load', e), t);
          });
        }
        function ui(t) {
          return (
            (t = t || bi()),
            !(
              ('file:' !== Ei() && 'ionic:' !== Ei()) ||
              !t.toLowerCase().match(/iphone|ipad|ipod|android/)
            )
          );
        }
        function ci() {
          var t = l.window;
          try {
            return t && t != t.top;
          } catch (t) {
            return;
          }
        }
        function hi() {
          return (
            void 0 !== l.WorkerGlobalScope &&
            'function' == typeof l.importScripts
          );
        }
        function li() {
          return Zl.default.INTERNAL.hasOwnProperty('reactNative')
            ? 'ReactNative'
            : Zl.default.INTERNAL.hasOwnProperty('node')
            ? 'Node'
            : hi()
            ? 'Worker'
            : 'Browser';
        }
        function fi() {
          var t = li();
          return 'ReactNative' === t || 'Node' === t;
        }
        var di = 'Firefox',
          pi = 'Chrome';
        function vi(t) {
          var e = t.toLowerCase();
          return rt(e, 'opera/') || rt(e, 'opr/') || rt(e, 'opios/')
            ? 'Opera'
            : rt(e, 'iemobile')
            ? 'IEMobile'
            : rt(e, 'msie') || rt(e, 'trident/')
            ? 'IE'
            : rt(e, 'edge/')
            ? 'Edge'
            : rt(e, 'firefox/')
            ? di
            : rt(e, 'silk/')
            ? 'Silk'
            : rt(e, 'blackberry')
            ? 'Blackberry'
            : rt(e, 'webos')
            ? 'Webos'
            : !rt(e, 'safari/') ||
              rt(e, 'chrome/') ||
              rt(e, 'crios/') ||
              rt(e, 'android')
            ? (!rt(e, 'chrome/') && !rt(e, 'crios/')) || rt(e, 'edge/')
              ? rt(e, 'android')
                ? 'Android'
                : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                  2 == t.length
                ? t[1]
                : 'Other'
              : pi
            : 'Safari';
        }
        var mi = { ld: 'FirebaseCore-web', nd: 'FirebaseUI-web' };
        function gi(t, e) {
          e = e || [];
          var n,
            i = [],
            r = {};
          for (n in mi) r[mi[n]] = !0;
          for (n = 0; n < e.length; n++)
            void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
          return (
            i.sort(),
            (e = i).length || (e = ['FirebaseCore-web']),
            'Browser' === (i = li())
              ? (i = vi((r = bi())))
              : 'Worker' === i && (i = vi((r = bi())) + '-' + i),
            i + '/JsCore/' + t + '/' + e.join(',')
          );
        }
        function bi() {
          return (l.navigator && l.navigator.userAgent) || '';
        }
        function yi(t, e) {
          (t = t.split('.')), (e = e || l);
          for (
            var n = 0;
            n < t.length && 'object' == typeof e && null != e;
            n++
          )
            e = e[t[n]];
          return n != t.length && (e = void 0), e;
        }
        function wi() {
          try {
            var t = l.localStorage,
              e = _i();
            if (t)
              return t.setItem(e, '1'), t.removeItem(e), !Qn() || !!l.indexedDB;
          } catch (t) {
            return hi() && !!l.indexedDB;
          }
          return !1;
        }
        function Ii() {
          return (
            (Ti() || 'chrome-extension:' === Ei() || ui()) &&
            !fi() &&
            wi() &&
            !hi()
          );
        }
        function Ti() {
          return 'http:' === Ei() || 'https:' === Ei();
        }
        function Ei() {
          return (l.location && l.location.protocol) || null;
        }
        function Ai(t) {
          return !ni((t = t || bi())) && vi(t) != di;
        }
        function ki(t) {
          return void 0 === t ? null : Jn(t);
        }
        function Si(t) {
          var e,
            n = {};
          for (e in t)
            t.hasOwnProperty(e) &&
              null !== t[e] &&
              void 0 !== t[e] &&
              (n[e] = t[e]);
          return n;
        }
        function Ni(t) {
          if (null !== t) return JSON.parse(t);
        }
        function _i(t) {
          return t || Math.floor(1e9 * Math.random()).toString();
        }
        function Oi(t) {
          return (
            'Safari' != vi((t = t || bi())) &&
            !t.toLowerCase().match(/iphone|ipad|ipod/)
          );
        }
        function Ci() {
          var t = l.___jsl;
          if (t && t.H)
            for (var e in t.H)
              if (
                ((t.H[e].r = t.H[e].r || []),
                (t.H[e].L = t.H[e].L || []),
                (t.H[e].r = t.H[e].L.concat()),
                t.CP)
              )
                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
        }
        function Ri(t, e) {
          if (e < t) throw Error('Short delay should be less than long delay!');
          (this.a = t),
            (this.c = e),
            (t = bi()),
            (e = li()),
            (this.b = ni(t) || 'ReactNative' === e);
        }
        function Di() {
          var t = l.document;
          return (
            !t || void 0 === t.visibilityState || 'visible' == t.visibilityState
          );
        }
        function Pi(t) {
          'undefined' != typeof console &&
            'function' == typeof console.warn &&
            console.warn(t);
        }
        function Li(t) {
          try {
            var e = new Date(parseInt(t, 10));
            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
              return e.toUTCString();
          } catch (t) {}
          return null;
        }
        function xi() {
          return yi('fireauth.oauthhelper', l) || yi('fireauth.iframe', l);
        }
        Ri.prototype.get = function () {
          var t = l.navigator;
          return !t ||
            'boolean' != typeof t.onLine ||
            (!Ti() &&
              'chrome-extension:' !== Ei() &&
              void 0 === t.connection) ||
            t.onLine
            ? this.b
              ? this.c
              : this.a
            : Math.min(5e3, this.a);
        };
        var Mi,
          ji = {};
        function Ui(t) {
          ji[t] || ((ji[t] = !0), Pi(t));
        }
        try {
          var Vi = {};
          Object.defineProperty(Vi, 'abcd', {
            configurable: !0,
            enumerable: !0,
            value: 1
          }),
            Object.defineProperty(Vi, 'abcd', {
              configurable: !0,
              enumerable: !0,
              value: 2
            }),
            (Mi = 2 == Vi.abcd);
        } catch (t) {
          Mi = !1;
        }
        function Fi(t, e, n) {
          Mi
            ? Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n
              })
            : (t[e] = n);
        }
        function qi(t, e) {
          if (e) for (var n in e) e.hasOwnProperty(n) && Fi(t, n, e[n]);
        }
        function Hi(t) {
          var e = {};
          return qi(e, t), e;
        }
        function Ki(t) {
          var e = t;
          if ('object' == typeof t && null != t)
            for (var n in ((e = 'length' in t ? [] : {}), t))
              Fi(e, n, Ki(t[n]));
          return e;
        }
        function Gi(t) {
          var e = t && (t[Yi] ? 'phone' : null);
          if (!(e && t && t[Ji]))
            throw new E(
              'internal-error',
              'Internal assert: invalid MultiFactorInfo object'
            );
          Fi(this, 'uid', t[Ji]), Fi(this, 'displayName', t[Wi] || null);
          var n = null;
          t[Xi] && (n = new Date(t[Xi]).toUTCString()),
            Fi(this, 'enrollmentTime', n),
            Fi(this, 'factorId', e);
        }
        function Bi(t) {
          try {
            var e = new zi(t);
          } catch (t) {
            e = null;
          }
          return e;
        }
        Gi.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };
        var Wi = 'displayName',
          Xi = 'enrolledAt',
          Ji = 'mfaEnrollmentId',
          Yi = 'phoneInfo';
        function zi(t) {
          Gi.call(this, t), Fi(this, 'phoneNumber', t[Yi]);
        }
        function $i(t) {
          var e = {},
            n = t[er],
            i = t[ir],
            r = t[rr];
          if (
            ((t = Bi(t[nr])),
            !r ||
              (r != Qi && r != tr && !n) ||
              (r == tr && !i) ||
              (r == Zi && !t))
          )
            throw Error('Invalid checkActionCode response!');
          r == tr
            ? ((e[ar] = n || null), (e[ur] = n || null), (e[or] = i))
            : ((e[ar] = i || null), (e[ur] = i || null), (e[or] = n || null)),
            (e[sr] = t || null),
            Fi(this, hr, r),
            Fi(this, cr, Ki(e));
        }
        I(zi, Gi),
          (zi.prototype.w = function () {
            var t = zi.$a.w.call(this);
            return (t.phoneNumber = this.phoneNumber), t;
          });
        var Zi = 'REVERT_SECOND_FACTOR_ADDITION',
          Qi = 'EMAIL_SIGNIN',
          tr = 'VERIFY_AND_CHANGE_EMAIL',
          er = 'email',
          nr = 'mfaInfo',
          ir = 'newEmail',
          rr = 'requestType',
          or = 'email',
          ar = 'fromEmail',
          sr = 'multiFactorInfo',
          ur = 'previousEmail',
          cr = 'data',
          hr = 'operation';
        function lr(t) {
          var e = On((t = Cn(t)), fr) || null,
            n = On(t, dr) || null,
            i = ((i = On(t, mr) || null) && br[i]) || null;
          if (!e || !n || !i)
            throw new E(
              'argument-error',
              fr +
                ', ' +
                dr +
                'and ' +
                mr +
                ' are required in a valid action code URL.'
            );
          qi(this, {
            apiKey: e,
            operation: i,
            code: n,
            continueUrl: On(t, pr) || null,
            languageCode: On(t, vr) || null,
            tenantId: On(t, gr) || null
          });
        }
        var fr = 'apiKey',
          dr = 'oobCode',
          pr = 'continueUrl',
          vr = 'languageCode',
          mr = 'mode',
          gr = 'tenantId',
          br = {
            recoverEmail: 'RECOVER_EMAIL',
            resetPassword: 'PASSWORD_RESET',
            revertSecondFactorAddition: Zi,
            signIn: Qi,
            verifyAndChangeEmail: tr,
            verifyEmail: 'VERIFY_EMAIL'
          };
        function yr(t) {
          try {
            return new lr(t);
          } catch (t) {
            return null;
          }
        }
        function wr(t) {
          var e = t[kr];
          if (void 0 === e) throw new E('missing-continue-uri');
          if ('string' != typeof e || ('string' == typeof e && !e.length))
            throw new E('invalid-continue-uri');
          if (
            ((this.h = e),
            (this.b = this.a = null),
            (this.g = !1),
            (i = t[Ir]) && 'object' == typeof i)
          ) {
            e = i[_r];
            var n = i[Sr],
              i = i[Nr];
            if ('string' == typeof e && e.length) {
              if (((this.a = e), void 0 !== n && 'boolean' != typeof n))
                throw new E(
                  'argument-error',
                  Sr + ' property must be a boolean when specified.'
                );
              if (
                ((this.g = !!n),
                void 0 !== i &&
                  ('string' != typeof i || ('string' == typeof i && !i.length)))
              )
                throw new E(
                  'argument-error',
                  Nr + ' property must be a non empty string when specified.'
                );
              this.b = i || null;
            } else {
              if (void 0 !== e)
                throw new E(
                  'argument-error',
                  _r + ' property must be a non empty string when specified.'
                );
              if (void 0 !== n || void 0 !== i)
                throw new E('missing-android-pkg-name');
            }
          } else if (void 0 !== i)
            throw new E(
              'argument-error',
              Ir + ' property must be a non null object when specified.'
            );
          if (((this.f = null), (e = t[Ar]) && 'object' == typeof e)) {
            if ('string' == typeof (e = e[Or]) && e.length) this.f = e;
            else if (void 0 !== e)
              throw new E(
                'argument-error',
                Or + ' property must be a non empty string when specified.'
              );
          } else if (void 0 !== e)
            throw new E(
              'argument-error',
              Ar + ' property must be a non null object when specified.'
            );
          if (void 0 !== (e = t[Er]) && 'boolean' != typeof e)
            throw new E(
              'argument-error',
              Er + ' property must be a boolean when specified.'
            );
          if (
            ((this.c = !!e),
            void 0 !== (t = t[Tr]) &&
              ('string' != typeof t || ('string' == typeof t && !t.length)))
          )
            throw new E(
              'argument-error',
              Tr + ' property must be a non empty string when specified.'
            );
          this.i = t || null;
        }
        var Ir = 'android',
          Tr = 'dynamicLinkDomain',
          Er = 'handleCodeInApp',
          Ar = 'iOS',
          kr = 'url',
          Sr = 'installApp',
          Nr = 'minimumVersion',
          _r = 'packageName',
          Or = 'bundleId';
        function Cr(t) {
          var e,
            n = {};
          for (e in ((n.continueUrl = t.h),
          (n.canHandleCodeInApp = t.c),
          (n.androidPackageName = t.a) &&
            ((n.androidMinimumVersion = t.b), (n.androidInstallApp = t.g)),
          (n.iOSBundleId = t.f),
          (n.dynamicLinkDomain = t.i),
          n))
            null === n[e] && delete n[e];
          return n;
        }
        var Rr = null;
        function Dr(t) {
          var e = '';
          return (
            (function (i, t) {
              function e(t) {
                for (; r < i.length; ) {
                  var e = i.charAt(r++),
                    n = Rr[e];
                  if (null != n) return n;
                  if (!/^[\s\xa0]*$/.test(e))
                    throw Error('Unknown base64 encoding at char: ' + e);
                }
                return t;
              }
              !(function () {
                if (!Rr) {
                  Rr = {};
                  for (
                    var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                        ''
                      ),
                      e = ['+/=', '+/', '-_=', '-_.', '-_'],
                      n = 0;
                    n < 5;
                    n++
                  )
                    for (
                      var i = t.concat(e[n].split('')), r = 0;
                      r < i.length;
                      r++
                    ) {
                      var o = i[r];
                      void 0 === Rr[o] && (Rr[o] = r);
                    }
                }
              })();
              for (var r = 0; ; ) {
                var n = e(-1),
                  o = e(0),
                  a = e(64),
                  s = e(64);
                if (64 === s && -1 === n) break;
                t((n << 2) | (o >> 4)),
                  64 != a &&
                    (t(((o << 4) & 240) | (a >> 2)),
                    64 != s && t(((a << 6) & 192) | s));
              }
            })(t, function (t) {
              e += String.fromCharCode(t);
            }),
            e
          );
        }
        function Pr(t) {
          var e = xr(t);
          if (!(e && e.sub && e.iss && e.aud && e.exp))
            throw Error('Invalid JWT');
          (this.g = t),
            (this.c = e.exp),
            (this.h = e.sub),
            (this.a =
              e.provider_id ||
              (e.firebase && e.firebase.sign_in_provider) ||
              null),
            (this.f = (e.firebase && e.firebase.tenant) || null),
            (this.b = !!e.is_anonymous || 'anonymous' == this.a);
        }
        function Lr(t) {
          try {
            return new Pr(t);
          } catch (t) {
            return null;
          }
        }
        function xr(t) {
          if (!t) return null;
          if (3 != (t = t.split('.')).length) return null;
          for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
            t += '.';
          try {
            return JSON.parse(Dr(t));
          } catch (t) {}
          return null;
        }
        (Pr.prototype.S = function () {
          return this.f;
        }),
          (Pr.prototype.i = function () {
            return this.b;
          }),
          (Pr.prototype.toString = function () {
            return this.g;
          });
        var Mr = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
            ' '
          ),
          jr = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
          Ur = {
            md: { Ja: 'locale', ua: 700, ta: 600, fa: 'facebook.com', Wa: jr },
            od: { Ja: null, ua: 500, ta: 750, fa: 'github.com', Wa: jr },
            pd: { Ja: 'hl', ua: 515, ta: 680, fa: 'google.com', Wa: jr },
            vd: { Ja: 'lang', ua: 485, ta: 705, fa: 'twitter.com', Wa: Mr },
            jd: { Ja: 'locale', ua: 640, ta: 600, fa: 'apple.com', Wa: [] }
          };
        function Vr(t) {
          for (var e in Ur) if (Ur[e].fa == t) return Ur[e];
          return null;
        }
        function Fr(t) {
          var e = {};
          (e['facebook.com'] = Br),
            (e['google.com'] = Xr),
            (e['github.com'] = Wr),
            (e['twitter.com'] = Jr);
          var n = t && t[Hr];
          try {
            if (n) return new (e[n] ? e[n] : Gr)(t);
            if (void 0 !== t[qr]) return new Kr(t);
          } catch (t) {}
          return null;
        }
        var qr = 'idToken',
          Hr = 'providerId';
        function Kr(t) {
          var e,
            n = t[Hr];
          if ((n || !t[qr] || ((e = Lr(t[qr])) && e.a && (n = e.a)), !n))
            throw Error('Invalid additional user info!');
          ('anonymous' != n && 'custom' != n) || (n = null),
            (e = !1),
            void 0 !== t.isNewUser
              ? (e = !!t.isNewUser)
              : 'identitytoolkit#SignupNewUserResponse' === t.kind && (e = !0),
            Fi(this, 'providerId', n),
            Fi(this, 'isNewUser', e);
        }
        function Gr(t) {
          Kr.call(this, t),
            Fi(this, 'profile', Ki((t = Ni(t.rawUserInfo || '{}')) || {}));
        }
        function Br(t) {
          if ((Gr.call(this, t), 'facebook.com' != this.providerId))
            throw Error('Invalid provider ID!');
        }
        function Wr(t) {
          if ((Gr.call(this, t), 'github.com' != this.providerId))
            throw Error('Invalid provider ID!');
          Fi(this, 'username', (this.profile && this.profile.login) || null);
        }
        function Xr(t) {
          if ((Gr.call(this, t), 'google.com' != this.providerId))
            throw Error('Invalid provider ID!');
        }
        function Jr(t) {
          if ((Gr.call(this, t), 'twitter.com' != this.providerId))
            throw Error('Invalid provider ID!');
          Fi(this, 'username', t.screenName || null);
        }
        function Yr(t) {
          var e = On((i = Cn(t)), 'link'),
            n = On(Cn(e), 'link'),
            i = On(i, 'deep_link_id');
          return On(Cn(i), 'link') || i || n || e || t;
        }
        function zr(t, e) {
          if (!t && !e)
            throw new E(
              'internal-error',
              'Internal assert: no raw session string available'
            );
          if (t && e)
            throw new E(
              'internal-error',
              'Internal assert: unable to determine the session type'
            );
          (this.a = t || null),
            (this.b = e || null),
            (this.type = this.a ? $r : Zr);
        }
        I(Gr, Kr), I(Br, Gr), I(Wr, Gr), I(Xr, Gr), I(Jr, Gr);
        var $r = 'enroll',
          Zr = 'signin';
        function Qr() {}
        function to(t, n) {
          return t
            .then(function (t) {
              if (t[Ka]) {
                var e = Lr(t[Ka]);
                if (!e || n != e.h) throw new E('user-mismatch');
                return t;
              }
              throw new E('user-mismatch');
            })
            .o(function (t) {
              throw t && t.code && t.code == S + 'user-not-found'
                ? new E('user-mismatch')
                : t;
            });
        }
        function eo(t, e) {
          if (!e)
            throw new E('internal-error', 'failed to construct a credential');
          (this.a = e), Fi(this, 'providerId', t), Fi(this, 'signInMethod', t);
        }
        function no(t) {
          return { pendingToken: t.a, requestUri: 'http://localhost' };
        }
        function io(t) {
          if (
            t &&
            t.providerId &&
            t.signInMethod &&
            0 == t.providerId.indexOf('saml.') &&
            t.pendingToken
          )
            try {
              return new eo(t.providerId, t.pendingToken);
            } catch (t) {}
          return null;
        }
        function ro(t, e, n) {
          if (((this.a = null), e.idToken || e.accessToken))
            e.idToken && Fi(this, 'idToken', e.idToken),
              e.accessToken && Fi(this, 'accessToken', e.accessToken),
              e.nonce && !e.pendingToken && Fi(this, 'nonce', e.nonce),
              e.pendingToken && (this.a = e.pendingToken);
          else {
            if (!e.oauthToken || !e.oauthTokenSecret)
              throw new E('internal-error', 'failed to construct a credential');
            Fi(this, 'accessToken', e.oauthToken),
              Fi(this, 'secret', e.oauthTokenSecret);
          }
          Fi(this, 'providerId', t), Fi(this, 'signInMethod', n);
        }
        function oo(t) {
          var e = {};
          return (
            t.idToken && (e.id_token = t.idToken),
            t.accessToken && (e.access_token = t.accessToken),
            t.secret && (e.oauth_token_secret = t.secret),
            (e.providerId = t.providerId),
            t.nonce && !t.a && (e.nonce = t.nonce),
            (e = {
              postBody: Hn(e).toString(),
              requestUri: 'http://localhost'
            }),
            t.a && (delete e.postBody, (e.pendingToken = t.a)),
            e
          );
        }
        function ao(t) {
          if (t && t.providerId && t.signInMethod) {
            var e = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken
            };
            try {
              return new ro(t.providerId, e, t.signInMethod);
            } catch (t) {}
          }
          return null;
        }
        function so(t, e) {
          (this.Pc = e || []),
            qi(this, { providerId: t, isOAuthProvider: !0 }),
            (this.Hb = {}),
            (this.ob = (Vr(t) || {}).Ja || null),
            (this.nb = null);
        }
        function uo(t) {
          if ('string' != typeof t || 0 != t.indexOf('saml.'))
            throw new E(
              'argument-error',
              'SAML provider IDs must be prefixed with "saml."'
            );
          so.call(this, t, []);
        }
        function co(t) {
          so.call(this, t, jr), (this.a = []);
        }
        function ho() {
          co.call(this, 'facebook.com');
        }
        function lo(t) {
          if (!t)
            throw new E(
              'argument-error',
              'credential failed: expected 1 argument (the OAuth access token).'
            );
          var e = t;
          return (
            m(t) && (e = t.accessToken), new ho().credential({ accessToken: e })
          );
        }
        function fo() {
          co.call(this, 'github.com');
        }
        function po(t) {
          if (!t)
            throw new E(
              'argument-error',
              'credential failed: expected 1 argument (the OAuth access token).'
            );
          var e = t;
          return (
            m(t) && (e = t.accessToken), new fo().credential({ accessToken: e })
          );
        }
        function vo() {
          co.call(this, 'google.com'), this.Ca('profile');
        }
        function mo(t, e) {
          var n = t;
          return (
            m(t) && ((n = t.idToken), (e = t.accessToken)),
            new vo().credential({ idToken: n, accessToken: e })
          );
        }
        function go() {
          so.call(this, 'twitter.com', Mr);
        }
        function bo(t, e) {
          var n = t;
          if (
            (m(n) || (n = { oauthToken: t, oauthTokenSecret: e }),
            !n.oauthToken || !n.oauthTokenSecret)
          )
            throw new E(
              'argument-error',
              'credential failed: expected 2 arguments (the OAuth access token and secret).'
            );
          return new ro('twitter.com', n, 'twitter.com');
        }
        function yo(t, e, n) {
          (this.a = t),
            (this.f = e),
            Fi(this, 'providerId', 'password'),
            Fi(
              this,
              'signInMethod',
              n === Io.EMAIL_LINK_SIGN_IN_METHOD
                ? Io.EMAIL_LINK_SIGN_IN_METHOD
                : Io.EMAIL_PASSWORD_SIGN_IN_METHOD
            );
        }
        function wo(t) {
          return t && t.email && t.password
            ? new yo(t.email, t.password, t.signInMethod)
            : null;
        }
        function Io() {
          qi(this, { providerId: 'password', isOAuthProvider: !1 });
        }
        function To(t, e) {
          if (!(e = Eo(e)))
            throw new E('argument-error', 'Invalid email link!');
          return new yo(t, e.code, Io.EMAIL_LINK_SIGN_IN_METHOD);
        }
        function Eo(t) {
          return (t = yr((t = Yr(t)))) && t.operation === Qi ? t : null;
        }
        function Ao(t) {
          if (!((t.cb && t.bb) || (t.La && t.ea)))
            throw new E('internal-error');
          (this.a = t),
            Fi(this, 'providerId', 'phone'),
            (this.fa = 'phone'),
            Fi(this, 'signInMethod', 'phone');
        }
        function ko(e) {
          if (
            e &&
            'phone' === e.providerId &&
            ((e.verificationId && e.verificationCode) ||
              (e.temporaryProof && e.phoneNumber))
          ) {
            var n = {};
            return (
              F(
                [
                  'verificationId',
                  'verificationCode',
                  'temporaryProof',
                  'phoneNumber'
                ],
                function (t) {
                  e[t] && (n[t] = e[t]);
                }
              ),
              new Ao(n)
            );
          }
          return null;
        }
        function So(t) {
          return t.a.La && t.a.ea
            ? { temporaryProof: t.a.La, phoneNumber: t.a.ea }
            : { sessionInfo: t.a.cb, code: t.a.bb };
        }
        function No(t) {
          try {
            this.a = t || Zl.default.auth();
          } catch (t) {
            throw new E(
              'argument-error',
              'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
            );
          }
          qi(this, { providerId: 'phone', isOAuthProvider: !1 });
        }
        function _o(t, e) {
          if (!t) throw new E('missing-verification-id');
          if (!e) throw new E('missing-verification-code');
          return new Ao({ cb: t, bb: e });
        }
        function Oo(t) {
          if (t.temporaryProof && t.phoneNumber)
            return new Ao({ La: t.temporaryProof, ea: t.phoneNumber });
          var e = t && t.providerId;
          if (!e || 'password' === e) return null;
          var n = t && t.oauthAccessToken,
            i = t && t.oauthTokenSecret,
            r = t && t.nonce,
            o = t && t.oauthIdToken,
            a = t && t.pendingToken;
          try {
            switch (e) {
              case 'google.com':
                return mo(o, n);
              case 'facebook.com':
                return lo(n);
              case 'github.com':
                return po(n);
              case 'twitter.com':
                return bo(n, i);
              default:
                return n || i || o || a
                  ? a
                    ? 0 == e.indexOf('saml.')
                      ? new eo(e, a)
                      : new ro(
                          e,
                          {
                            pendingToken: a,
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthAccessToken
                          },
                          e
                        )
                    : new co(e).credential({
                        idToken: o,
                        accessToken: n,
                        rawNonce: r
                      })
                  : null;
            }
          } catch (t) {
            return null;
          }
        }
        function Co(t) {
          if (!t.isOAuthProvider) throw new E('invalid-oauth-provider');
        }
        function Ro(t, e, n, i, r, o, a) {
          if (
            ((this.c = t),
            (this.b = e || null),
            (this.g = n || null),
            (this.f = i || null),
            (this.i = o || null),
            (this.h = a || null),
            (this.a = r || null),
            !this.g && !this.a)
          )
            throw new E('invalid-auth-event');
          if (this.g && this.a) throw new E('invalid-auth-event');
          if (this.g && !this.f) throw new E('invalid-auth-event');
        }
        function Do(t) {
          return (t = t || {}).type
            ? new Ro(
                t.type,
                t.eventId,
                t.urlResponse,
                t.sessionId,
                t.error && A(t.error),
                t.postBody,
                t.tenantId
              )
            : null;
        }
        function Po() {
          (this.b = null), (this.a = []);
        }
        (zr.prototype.Ha = function () {
          return this.a ? we(this.a) : we(this.b);
        }),
          (zr.prototype.w = function () {
            return this.type == $r
              ? { multiFactorSession: { idToken: this.a } }
              : { multiFactorSession: { pendingCredential: this.b } };
          }),
          (Qr.prototype.ja = function () {}),
          (Qr.prototype.b = function () {}),
          (Qr.prototype.c = function () {}),
          (Qr.prototype.w = function () {}),
          (eo.prototype.ja = function (t) {
            return ls(t, no(this));
          }),
          (eo.prototype.b = function (t, e) {
            var n = no(this);
            return (n.idToken = e), fs(t, n);
          }),
          (eo.prototype.c = function (t, e) {
            return to(ds(t, no(this)), e);
          }),
          (eo.prototype.w = function () {
            return {
              providerId: this.providerId,
              signInMethod: this.signInMethod,
              pendingToken: this.a
            };
          }),
          (ro.prototype.ja = function (t) {
            return ls(t, oo(this));
          }),
          (ro.prototype.b = function (t, e) {
            var n = oo(this);
            return (n.idToken = e), fs(t, n);
          }),
          (ro.prototype.c = function (t, e) {
            return to(ds(t, oo(this)), e);
          }),
          (ro.prototype.w = function () {
            var t = {
              providerId: this.providerId,
              signInMethod: this.signInMethod
            };
            return (
              this.idToken && (t.oauthIdToken = this.idToken),
              this.accessToken && (t.oauthAccessToken = this.accessToken),
              this.secret && (t.oauthTokenSecret = this.secret),
              this.nonce && (t.nonce = this.nonce),
              this.a && (t.pendingToken = this.a),
              t
            );
          }),
          (so.prototype.Ka = function (t) {
            return (this.Hb = ht(t)), this;
          }),
          I(uo, so),
          I(co, so),
          (co.prototype.Ca = function (t) {
            return G(this.a, t) || this.a.push(t), this;
          }),
          (co.prototype.Pb = function () {
            return J(this.a);
          }),
          (co.prototype.credential = function (t, e) {
            e = m(t)
              ? {
                  idToken: t.idToken || null,
                  accessToken: t.accessToken || null,
                  nonce: t.rawNonce || null
                }
              : { idToken: t || null, accessToken: e || null };
            if (!e.idToken && !e.accessToken)
              throw new E(
                'argument-error',
                'credential failed: must provide the ID token and/or the access token.'
              );
            return new ro(this.providerId, e, this.providerId);
          }),
          I(ho, co),
          Fi(ho, 'PROVIDER_ID', 'facebook.com'),
          Fi(ho, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
          I(fo, co),
          Fi(fo, 'PROVIDER_ID', 'github.com'),
          Fi(fo, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
          I(vo, co),
          Fi(vo, 'PROVIDER_ID', 'google.com'),
          Fi(vo, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
          I(go, so),
          Fi(go, 'PROVIDER_ID', 'twitter.com'),
          Fi(go, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
          (yo.prototype.ja = function (t) {
            return this.signInMethod == Io.EMAIL_LINK_SIGN_IN_METHOD
              ? Js(t, Is, { email: this.a, oobCode: this.f })
              : Js(t, Ks, { email: this.a, password: this.f });
          }),
          (yo.prototype.b = function (t, e) {
            return this.signInMethod == Io.EMAIL_LINK_SIGN_IN_METHOD
              ? Js(t, Ts, { idToken: e, email: this.a, oobCode: this.f })
              : Js(t, xs, { idToken: e, email: this.a, password: this.f });
          }),
          (yo.prototype.c = function (t, e) {
            return to(this.ja(t), e);
          }),
          (yo.prototype.w = function () {
            return {
              email: this.a,
              password: this.f,
              signInMethod: this.signInMethod
            };
          }),
          qi(Io, { PROVIDER_ID: 'password' }),
          qi(Io, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' }),
          qi(Io, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' }),
          (Ao.prototype.ja = function (t) {
            return t.eb(So(this));
          }),
          (Ao.prototype.b = function (t, e) {
            var n = So(this);
            return (n.idToken = e), Js(t, Bs, n);
          }),
          (Ao.prototype.c = function (t, e) {
            var n = So(this);
            return (n.operation = 'REAUTH'), to((t = Js(t, Ws, n)), e);
          }),
          (Ao.prototype.w = function () {
            var t = { providerId: 'phone' };
            return (
              this.a.cb && (t.verificationId = this.a.cb),
              this.a.bb && (t.verificationCode = this.a.bb),
              this.a.La && (t.temporaryProof = this.a.La),
              this.a.ea && (t.phoneNumber = this.a.ea),
              t
            );
          }),
          (No.prototype.eb = function (i, r) {
            var o = this.a.a;
            return we(r.verify()).then(function (n) {
              if ('string' != typeof n)
                throw new E(
                  'argument-error',
                  'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
                );
              if ('recaptcha' !== r.type)
                throw new E(
                  'argument-error',
                  'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                );
              var t = m(i) ? i.session : null,
                e = m(i) ? i.phoneNumber : i,
                t =
                  t && t.type == $r
                    ? t.Ha().then(function (t) {
                        return Js(o, js, {
                          idToken: t,
                          phoneEnrollmentInfo: {
                            phoneNumber: e,
                            recaptchaToken: n
                          }
                        }).then(function (t) {
                          return t.phoneSessionInfo.sessionInfo;
                        });
                      })
                    : t && t.type == Zr
                    ? t.Ha().then(function (t) {
                        return (
                          (e = o),
                          (t = {
                            mfaPendingCredential: t,
                            mfaEnrollmentId:
                              (i.multiFactorHint && i.multiFactorHint.uid) ||
                              i.multiFactorUid,
                            phoneSignInInfo: { recaptchaToken: n }
                          }),
                          Js(e, Us, t).then(function (t) {
                            return t.phoneResponseInfo.sessionInfo;
                          })
                        );
                        var e;
                      })
                    : Js(o, Ps, { phoneNumber: e, recaptchaToken: n });
              return t.then(
                function (t) {
                  return 'function' == typeof r.reset && r.reset(), t;
                },
                function (t) {
                  throw ('function' == typeof r.reset && r.reset(), t);
                }
              );
            });
          }),
          qi(No, { PROVIDER_ID: 'phone' }),
          qi(No, { PHONE_SIGN_IN_METHOD: 'phone' }),
          (Ro.prototype.getUid = function () {
            var t = [];
            return (
              t.push(this.c),
              this.b && t.push(this.b),
              this.f && t.push(this.f),
              this.h && t.push(this.h),
              t.join('-')
            );
          }),
          (Ro.prototype.S = function () {
            return this.h;
          }),
          (Ro.prototype.w = function () {
            return {
              type: this.c,
              eventId: this.b,
              urlResponse: this.g,
              sessionId: this.f,
              postBody: this.i,
              tenantId: this.h,
              error: this.a && this.a.w()
            };
          });
        var Lo,
          xo = null;
        function Mo(t) {
          var e = 'unauthorized-domain',
            n = void 0,
            i = Cn(t);
          (t = i.a),
            'chrome-extension' == (i = i.f)
              ? (n = Ut(
                  'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : 'http' == i || 'https' == i
              ? (n = Ut(
                  'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : (e = 'operation-not-supported-in-this-environment'),
            E.call(this, e, n);
        }
        function jo(t, e, n) {
          E.call(this, t, n),
            (t = e || {}).Ib && Fi(this, 'email', t.Ib),
            t.ea && Fi(this, 'phoneNumber', t.ea),
            t.credential && Fi(this, 'credential', t.credential),
            t.Yb && Fi(this, 'tenantId', t.Yb);
        }
        function Uo(t) {
          if (t.code) {
            var e = t.code || '';
            0 == e.indexOf(S) && (e = e.substring(S.length));
            var n = { credential: Oo(t), Yb: t.tenantId };
            if (t.email) n.Ib = t.email;
            else if (t.phoneNumber) n.ea = t.phoneNumber;
            else if (!n.credential) return new E(e, t.message || void 0);
            return new jo(e, n, t.message);
          }
          return null;
        }
        function Vo() {}
        function Fo(t) {
          return t.c || (t.c = t.b());
        }
        function qo() {}
        function Ho(t) {
          if (
            t.f ||
            'undefined' != typeof XMLHttpRequest ||
            'undefined' == typeof ActiveXObject
          )
            return t.f;
          for (
            var e = [
                'MSXML2.XMLHTTP.6.0',
                'MSXML2.XMLHTTP.3.0',
                'MSXML2.XMLHTTP',
                'Microsoft.XMLHTTP'
              ],
              n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n];
            try {
              return new ActiveXObject(i), (t.f = i);
            } catch (t) {}
          }
          throw Error(
            'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
          );
        }
        function Ko() {}
        function Go() {
          (this.a = new XDomainRequest()),
            (this.readyState = 0),
            (this.onreadystatechange = null),
            (this.responseType = this.responseText = this.response = ''),
            (this.status = -1),
            (this.statusText = ''),
            (this.a.onload = b(this.pc, this)),
            (this.a.onerror = b(this.Rb, this)),
            (this.a.onprogress = b(this.qc, this)),
            (this.a.ontimeout = b(this.uc, this));
        }
        function Bo(t, e) {
          (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
        }
        function Wo(t, e, n) {
          this.reset(t, e, n, void 0, void 0);
        }
        function Xo(t) {
          (this.f = t), (this.b = this.c = this.a = null);
        }
        function Jo(t, e) {
          (this.name = t), (this.value = e);
        }
        I(Mo, E),
          I(jo, E),
          (jo.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            this.email && (t.email = this.email),
              this.phoneNumber && (t.phoneNumber = this.phoneNumber),
              this.tenantId && (t.tenantId = this.tenantId);
            var e = this.credential && this.credential.w();
            return e && ft(t, e), t;
          }),
          (jo.prototype.toJSON = function () {
            return this.w();
          }),
          (Vo.prototype.c = null),
          I(qo, Vo),
          (qo.prototype.a = function () {
            var t = Ho(this);
            return t ? new ActiveXObject(t) : new XMLHttpRequest();
          }),
          (qo.prototype.b = function () {
            var t = {};
            return Ho(this) && ((t[0] = !0), (t[1] = !0)), t;
          }),
          (Lo = new qo()),
          I(Ko, Vo),
          (Ko.prototype.a = function () {
            var t = new XMLHttpRequest();
            if ('withCredentials' in t) return t;
            if ('undefined' != typeof XDomainRequest) return new Go();
            throw Error('Unsupported browser');
          }),
          (Ko.prototype.b = function () {
            return {};
          }),
          ((t = Go.prototype).open = function (t, e, n) {
            if (null != n && !n)
              throw Error('Only async requests are supported.');
            this.a.open(t, e);
          }),
          (t.send = function (t) {
            if (t) {
              if ('string' != typeof t)
                throw Error('Only string data is supported');
              this.a.send(t);
            } else this.a.send();
          }),
          (t.abort = function () {
            this.a.abort();
          }),
          (t.setRequestHeader = function () {}),
          (t.getResponseHeader = function (t) {
            return 'content-type' == t.toLowerCase() ? this.a.contentType : '';
          }),
          (t.pc = function () {
            (this.status = 200),
              (this.response = this.responseText = this.a.responseText),
              Bo(this, 4);
          }),
          (t.Rb = function () {
            (this.status = 500),
              (this.response = this.responseText = ''),
              Bo(this, 4);
          }),
          (t.uc = function () {
            this.Rb();
          }),
          (t.qc = function () {
            (this.status = 200), Bo(this, 1);
          }),
          (t.getAllResponseHeaders = function () {
            return 'content-type: ' + this.a.contentType;
          }),
          (Wo.prototype.a = null),
          (Wo.prototype.reset = function (t, e, n, i, r) {
            delete this.a;
          }),
          (Jo.prototype.toString = function () {
            return this.name;
          });
        var Yo = new Jo('SEVERE', 1e3),
          zo = new Jo('WARNING', 900),
          $o = new Jo('CONFIG', 700),
          Zo = new Jo('FINE', 500);
        Xo.prototype.log = function (t, e, n) {
          if (
            t.value >=
            (function t(e) {
              return e.c
                ? e.c
                : e.a
                ? t(e.a)
                : (P('Root logger has no level set.'), null);
            })(this).value
          )
            for (
              v(e) && (e = e()),
                t = new Wo(t, String(e), this.f),
                n && (t.a = n),
                n = this;
              n;

            )
              n = n.a;
        };
        var Qo,
          ta = {},
          ea = null;
        function na(t) {
          var e, n, i;
          return (
            ea || ((ea = new Xo('')), ((ta[''] = ea).c = $o)),
            (e = ta[t]) ||
              ((e = new Xo(t)),
              (i = t.lastIndexOf('.')),
              (n = t.substr(i + 1)),
              (i = na(t.substr(0, i))).b || (i.b = {}),
              ((i.b[n] = e).a = i),
              (ta[t] = e)),
            e
          );
        }
        function ia(t, e) {
          t && t.log(Zo, e, void 0);
        }
        function ra(t) {
          this.f = t;
        }
        function oa(t) {
          fn.call(this),
            (this.u = t),
            (this.h = void 0),
            (this.readyState = aa),
            (this.status = 0),
            (this.responseType = this.responseText = this.response = this.statusText =
              ''),
            (this.onreadystatechange = null),
            (this.l = new Headers()),
            (this.b = null),
            (this.s = 'GET'),
            (this.f = ''),
            (this.a = !1),
            (this.i = na('goog.net.FetchXmlHttp')),
            (this.m = this.c = this.g = null);
        }
        I(ra, Vo),
          (ra.prototype.a = function () {
            return new oa(this.f);
          }),
          (ra.prototype.b =
            ((Qo = {}),
            function () {
              return Qo;
            })),
          I(oa, fn);
        var aa = 0;
        function sa(t) {
          t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t));
        }
        function ua(t) {
          (t.readyState = 4), (t.g = null), (t.c = null), (t.m = null), ca(t);
        }
        function ca(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }
        function ha(t) {
          fn.call(this),
            (this.headers = new wn()),
            (this.O = t || null),
            (this.c = !1),
            (this.A = this.a = null),
            (this.h = this.P = this.l = ''),
            (this.f = this.N = this.i = this.G = !1),
            (this.g = 0),
            (this.s = null),
            (this.m = la),
            (this.u = this.R = !1);
        }
        ((t = oa.prototype).open = function (t, e) {
          if (this.readyState != aa)
            throw (this.abort(), Error('Error reopening a connection'));
          (this.s = t), (this.f = e), (this.readyState = 1), ca(this);
        }),
          (t.send = function (t) {
            if (1 != this.readyState)
              throw (this.abort(), Error('need to call open() first. '));
            this.a = !0;
            var e = {
              headers: this.l,
              method: this.s,
              credentials: this.h,
              cache: void 0
            };
            t && (e.body = t),
              this.u
                .fetch(new Request(this.f, e))
                .then(this.tc.bind(this), this.Ta.bind(this));
          }),
          (t.abort = function () {
            (this.response = this.responseText = ''),
              (this.l = new Headers()),
              (this.status = 0),
              this.c && this.c.cancel('Request was aborted.'),
              1 <= this.readyState &&
                this.a &&
                4 != this.readyState &&
                ((this.a = !1), ua(this)),
              (this.readyState = aa);
          }),
          (t.tc = function (t) {
            this.a &&
              ((this.g = t),
              this.b ||
                ((this.status = this.g.status),
                (this.statusText = this.g.statusText),
                (this.b = t.headers),
                (this.readyState = 2),
                ca(this)),
              this.a &&
                ((this.readyState = 3),
                ca(this),
                this.a &&
                  ('arraybuffer' === this.responseType
                    ? t
                        .arrayBuffer()
                        .then(this.rc.bind(this), this.Ta.bind(this))
                    : void 0 !== l.ReadableStream && 'body' in t
                    ? ((this.response = this.responseText = ''),
                      (this.c = t.body.getReader()),
                      (this.m = new TextDecoder()),
                      sa(this))
                    : t.text().then(this.sc.bind(this), this.Ta.bind(this)))));
          }),
          (t.oc = function (t) {
            var e;
            this.a &&
              ((e = this.m.decode(t.value ? t.value : new Uint8Array(0), {
                stream: !t.done
              })) && (this.response = this.responseText += e),
              (t.done ? ua : ca)(this),
              3 == this.readyState && sa(this));
          }),
          (t.sc = function (t) {
            this.a && ((this.response = this.responseText = t), ua(this));
          }),
          (t.rc = function (t) {
            this.a && ((this.response = t), ua(this));
          }),
          (t.Ta = function (t) {
            var e = this.i;
            e &&
              e.log(
                zo,
                'Failed to fetch url ' + this.f,
                t instanceof Error ? t : Error(t)
              ),
              this.a && ua(this);
          }),
          (t.setRequestHeader = function (t, e) {
            this.l.append(t, e);
          }),
          (t.getResponseHeader = function (t) {
            return this.b
              ? this.b.get(t.toLowerCase()) || ''
              : ((t = this.i) &&
                  t.log(
                    zo,
                    'Attempting to get response header but no headers have been received for url: ' +
                      this.f,
                    void 0
                  ),
                '');
          }),
          (t.getAllResponseHeaders = function () {
            if (!this.b) {
              var t = this.i;
              return (
                t &&
                  t.log(
                    zo,
                    'Attempting to get all response headers but no headers have been received for url: ' +
                      this.f,
                    void 0
                  ),
                ''
              );
            }
            t = [];
            for (var e = this.b.entries(), n = e.next(); !n.done; )
              (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
            return t.join('\r\n');
          }),
          Object.defineProperty(oa.prototype, 'withCredentials', {
            get: function () {
              return 'include' === this.h;
            },
            set: function (t) {
              this.h = t ? 'include' : 'same-origin';
            }
          }),
          I(ha, fn);
        var la = '';
        ha.prototype.b = na('goog.net.XhrIo');
        var fa = /^https?$/i,
          da = ['POST', 'PUT'];
        function pa(e, t, n, i, r) {
          if (e.a)
            throw Error(
              '[goog.net.XhrIo] Object is active with another request=' +
                e.l +
                '; newUri=' +
                t
            );
          (n = n ? n.toUpperCase() : 'GET'),
            (e.l = t),
            (e.h = ''),
            (e.P = n),
            (e.G = !1),
            (e.c = !0),
            (e.a = (e.O ? e.O : Lo).a()),
            (e.A = e.O ? Fo(e.O) : Fo(Lo)),
            (e.a.onreadystatechange = b(e.Ub, e));
          try {
            ia(e.b, Ea(e, 'Opening Xhr')),
              (e.N = !0),
              e.a.open(n, String(t), !0),
              (e.N = !1);
          } catch (t) {
            return (
              ia(e.b, Ea(e, 'Error opening Xhr: ' + t.message)), void ma(e, t)
            );
          }
          t = i || '';
          var o,
            a = new wn(e.headers);
          r &&
            (function (t, e) {
              if (t.forEach && 'function' == typeof t.forEach)
                t.forEach(e, void 0);
              else if (p(t) || 'string' == typeof t) F(t, e, void 0);
              else
                for (var n = yn(t), i = bn(t), r = i.length, o = 0; o < r; o++)
                  e.call(void 0, i[o], n && n[o], t);
            })(r, function (t, e) {
              a.set(e, t);
            }),
            (r = (function (t) {
              t: {
                for (
                  var e = va,
                    n = t.length,
                    i = 'string' == typeof t ? t.split('') : t,
                    r = 0;
                  r < n;
                  r++
                )
                  if (r in i && e.call(void 0, i[r], r, t)) {
                    e = r;
                    break t;
                  }
                e = -1;
              }
              return e < 0 ? null : 'string' == typeof t ? t.charAt(e) : t[e];
            })(a.Y())),
            (i = l.FormData && t instanceof l.FormData),
            !G(da, n) ||
              r ||
              i ||
              a.set(
                'Content-Type',
                'application/x-www-form-urlencoded;charset=utf-8'
              ),
            a.forEach(function (t, e) {
              this.a.setRequestHeader(e, t);
            }, e),
            e.m && (e.a.responseType = e.m),
            'withCredentials' in e.a &&
              e.a.withCredentials !== e.R &&
              (e.a.withCredentials = e.R);
          try {
            wa(e),
              0 < e.g &&
                ((e.u =
                  ((o = e.a),
                  Kt &&
                    Zt(9) &&
                    'number' == typeof o.timeout &&
                    void 0 !== o.ontimeout)),
                ia(
                  e.b,
                  Ea(
                    e,
                    'Will abort after ' + e.g + 'ms if incomplete, xhr2 ' + e.u
                  )
                ),
                e.u
                  ? ((e.a.timeout = e.g), (e.a.ontimeout = b(e.Ma, e)))
                  : (e.s = mn(e.Ma, e.g, e))),
              ia(e.b, Ea(e, 'Sending request')),
              (e.i = !0),
              e.a.send(t),
              (e.i = !1);
          } catch (t) {
            ia(e.b, Ea(e, 'Send error: ' + t.message)), ma(e, t);
          }
        }
        function va(t) {
          return 'content-type' == t.toLowerCase();
        }
        function ma(t, e) {
          (t.c = !1),
            t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
            (t.h = e),
            ga(t),
            ya(t);
        }
        function ga(t) {
          t.G ||
            ((t.G = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'));
        }
        function ba(e) {
          if (e.c && void 0 !== h)
            if (e.A[1] && 4 == Ia(e) && 2 == Ta(e))
              ia(e.b, Ea(e, 'Local request error detected and ignored'));
            else if (e.i && 4 == Ia(e)) mn(e.Ub, 0, e);
            else if ((e.dispatchEvent('readystatechange'), 4 == Ia(e))) {
              ia(e.b, Ea(e, 'Request complete')), (e.c = !1);
              try {
                var t,
                  n,
                  i,
                  r,
                  o = Ta(e);
                t: switch (o) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var a = !0;
                    break t;
                  default:
                    a = !1;
                }
                if (
                  ((t = a) ||
                    ((n = 0 === o) &&
                      (!(r = String(e.l).match(En)[1] || null) &&
                        l.self &&
                        l.self.location &&
                        (r = (i = l.self.location.protocol).substr(
                          0,
                          i.length - 1
                        )),
                      (n = !fa.test(r ? r.toLowerCase() : ''))),
                    (t = n)),
                  t)
                )
                  e.dispatchEvent('complete'), e.dispatchEvent('success');
                else {
                  try {
                    var s = 2 < Ia(e) ? e.a.statusText : '';
                  } catch (t) {
                    ia(e.b, 'Can not get status: ' + t.message), (s = '');
                  }
                  (e.h = s + ' [' + Ta(e) + ']'), ga(e);
                }
              } finally {
                ya(e);
              }
            }
        }
        function ya(e, t) {
          if (e.a) {
            wa(e);
            var n = e.a,
              i = e.A[0] ? a : null;
            (e.a = null), (e.A = null), t || e.dispatchEvent('ready');
            try {
              n.onreadystatechange = i;
            } catch (t) {
              (e = e.b) &&
                e.log(
                  Yo,
                  'Problem encountered resetting onreadystatechange: ' +
                    t.message,
                  void 0
                );
            }
          }
        }
        function wa(t) {
          t.a && t.u && (t.a.ontimeout = null),
            t.s && (l.clearTimeout(t.s), (t.s = null));
        }
        function Ia(t) {
          return t.a ? t.a.readyState : 0;
        }
        function Ta(t) {
          try {
            return 2 < Ia(t) ? t.a.status : -1;
          } catch (t) {
            return -1;
          }
        }
        function Ea(t, e) {
          return e + ' [' + t.P + ' ' + t.l + ' ' + Ta(t) + ']';
        }
        function Aa(t) {
          var e = xa;
          (this.g = []),
            (this.u = e),
            (this.s = t || null),
            (this.f = this.a = !1),
            (this.c = void 0),
            (this.m = this.A = this.i = !1),
            (this.h = 0),
            (this.b = null),
            (this.l = 0);
        }
        function ka(t, e, n) {
          (t.a = !0), (t.c = n), (t.f = !e), Oa(t);
        }
        function Sa(t) {
          if (t.a) {
            if (!t.m) throw new Ca();
            t.m = !1;
          }
        }
        function Na(t, e, n, i) {
          t.g.push([e, n, i]), t.a && Oa(t);
        }
        function _a(t) {
          return K(t.g, function (t) {
            return v(t[1]);
          });
        }
        function Oa(e) {
          var n, i;
          e.h &&
            e.a &&
            _a(e) &&
            ((n = e.h),
            (i = Pa[n]) && (l.clearTimeout(i.a), delete Pa[n]),
            (e.h = 0)),
            e.b && (e.b.l--, delete e.b),
            (n = e.c);
          for (var t = (i = !1); e.g.length && !e.i; ) {
            var r = (a = e.g.shift())[0],
              o = a[1],
              a = a[2];
            if ((r = e.f ? o : r))
              try {
                var s = r.call(a || e.s, n);
                void 0 !== s &&
                  ((e.f = e.f && (s == n || s instanceof Error)),
                  (e.c = n = s)),
                  (C(n) ||
                    ('function' == typeof l.Promise &&
                      n instanceof l.Promise)) &&
                    ((t = !0), (e.i = !0));
              } catch (t) {
                (n = t), (e.f = !0), _a(e) || (i = !0);
              }
          }
          (e.c = n),
            t &&
              ((s = b(e.v, e, !0)),
              (t = b(e.v, e, !1)),
              n instanceof Aa ? (Na(n, s, t), (n.A = !0)) : n.then(s, t)),
            i && ((n = new Da(n)), (Pa[n.a] = n), (e.h = n.a));
        }
        function Ca() {
          R.call(this);
        }
        function Ra() {
          R.call(this);
        }
        function Da(t) {
          (this.a = l.setTimeout(b(this.c, this), 0)), (this.b = t);
        }
        ((t = ha.prototype).Ma = function () {
          void 0 !== h &&
            this.a &&
            ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
            ia(this.b, Ea(this, this.h)),
            this.dispatchEvent('timeout'),
            this.abort(8));
        }),
          (t.abort = function () {
            this.a &&
              this.c &&
              (ia(this.b, Ea(this, 'Aborting')),
              (this.c = !1),
              (this.f = !0),
              this.a.abort(),
              (this.f = !1),
              this.dispatchEvent('complete'),
              this.dispatchEvent('abort'),
              ya(this));
          }),
          (t.Da = function () {
            this.a &&
              (this.c &&
                ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
              ya(this, !0)),
              ha.$a.Da.call(this);
          }),
          (t.Ub = function () {
            this.xa || (this.N || this.i || this.f ? ba(this) : this.Ic());
          }),
          (t.Ic = function () {
            ba(this);
          }),
          (t.getResponse = function () {
            try {
              if (!this.a) return null;
              if ('response' in this.a) return this.a.response;
              switch (this.m) {
                case la:
                case 'text':
                  return this.a.responseText;
                case 'arraybuffer':
                  if ('mozResponseArrayBuffer' in this.a)
                    return this.a.mozResponseArrayBuffer;
              }
              var t = this.b;
              return (
                t &&
                  t.log(
                    Yo,
                    'Response type ' +
                      this.m +
                      ' is not supported on this browser',
                    void 0
                  ),
                null
              );
            } catch (t) {
              return ia(this.b, 'Can not get response: ' + t.message), null;
            }
          }),
          (Aa.prototype.cancel = function (t) {
            var e;
            this.a
              ? this.c instanceof Aa && this.c.cancel()
              : (this.b &&
                  ((e = this.b),
                  delete this.b,
                  t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())),
                this.u ? this.u.call(this.s, this) : (this.m = !0),
                this.a || ((t = new Ra()), Sa(this), ka(this, !1, t)));
          }),
          (Aa.prototype.v = function (t, e) {
            (this.i = !1), ka(this, t, e);
          }),
          (Aa.prototype.then = function (t, e, n) {
            var i,
              r,
              o = new de(function (t, e) {
                (i = t), (r = e);
              });
            return (
              Na(this, i, function (t) {
                t instanceof Ra ? o.cancel() : r(t);
              }),
              o.then(t, e, n)
            );
          }),
          (Aa.prototype.$goog_Thenable = !0),
          I(Ca, R),
          (Ca.prototype.message = 'Deferred has already fired'),
          (Ca.prototype.name = 'AlreadyCalledError'),
          I(Ra, R),
          (Ra.prototype.message = 'Deferred was canceled'),
          (Ra.prototype.name = 'CanceledError'),
          (Da.prototype.c = function () {
            throw (delete Pa[this.a], this.b);
          });
        var Pa = {};
        function La(t) {
          var e = document,
            n = It(t).toString(),
            i = se(document, 'SCRIPT'),
            r = { Vb: i, Ma: void 0 },
            o = new Aa(r),
            a = window.setTimeout(function () {
              Ma(i, !0);
              var t = new Va(Ua, 'Timeout reached for loading script ' + n);
              Sa(o), ka(o, !1, t);
            }, 5e3);
          return (
            (r.Ma = a),
            (i.onload = i.onreadystatechange = function () {
              (i.readyState &&
                'loaded' != i.readyState &&
                'complete' != i.readyState) ||
                (Ma(i, !1, a), Sa(o), ka(o, !0, null));
            }),
            (i.onerror = function () {
              Ma(i, !0, a);
              var t = new Va(ja, 'Error while loading script ' + n);
              Sa(o), ka(o, !1, t);
            }),
            ft((r = {}), { type: 'text/javascript', charset: 'UTF-8' }),
            ne(i, r),
            (r = t),
            dt((t = i), 'HTMLScriptElement'),
            (t.src = It(r)),
            (r =
              (r = t.ownerDocument && t.ownerDocument.defaultView) && r != l
                ? f(r.document)
                : (null === s && (s = f(l.document)), s)) &&
              t.setAttribute('nonce', r),
            ((e = ((r = e) || document).getElementsByTagName('HEAD')) &&
            0 != e.length
              ? e[0]
              : r.documentElement
            ).appendChild(i),
            o
          );
        }
        function xa() {
          var t;
          this &&
            this.Vb &&
            (t = this.Vb) &&
            'SCRIPT' == t.tagName &&
            Ma(t, !0, this.Ma);
        }
        function Ma(t, e, n) {
          null != n && l.clearTimeout(n),
            (t.onload = a),
            (t.onerror = a),
            (t.onreadystatechange = a),
            e &&
              window.setTimeout(function () {
                t && t.parentNode && t.parentNode.removeChild(t);
              }, 0);
        }
        var ja = 0,
          Ua = 1;
        function Va(t, e) {
          var n = 'Jsloader error (code #' + t + ')';
          e && (n += ': ' + e), R.call(this, n), (this.code = t);
        }
        function Fa(t) {
          this.f = t;
        }
        function qa(t, e, n) {
          if (
            ((this.c = t),
            (t = e || {}),
            (this.l =
              t.secureTokenEndpoint ||
              'https://securetoken.googleapis.com/v1/token'),
            (this.v = t.secureTokenTimeout || Ga),
            (this.g = ht(t.secureTokenHeaders || Ba)),
            (this.h =
              t.firebaseEndpoint ||
              'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
            (this.i =
              t.identityPlatformEndpoint ||
              'https://identitytoolkit.googleapis.com/v2/'),
            (this.m = t.firebaseTimeout || Wa),
            (this.a = ht(t.firebaseHeaders || Xa)),
            n &&
              ((this.a['X-Client-Version'] = n),
              (this.g['X-Client-Version'] = n)),
            (n = 'Node' == li()),
            !(n =
              l.XMLHttpRequest ||
              (n &&
                Zl.default.INTERNAL.node &&
                Zl.default.INTERNAL.node.XMLHttpRequest)) && !hi())
          )
            throw new E(
              'internal-error',
              'The XMLHttpRequest compatibility library was not found.'
            );
          (this.f = void 0),
            hi()
              ? (this.f = new ra(self))
              : fi()
              ? (this.f = new Fa(n))
              : (this.f = new Ko()),
            (this.b = null);
        }
        I(Va, R),
          I(Fa, Vo),
          (Fa.prototype.a = function () {
            return new this.f();
          }),
          (Fa.prototype.b = function () {
            return {};
          });
        var Ha,
          Ka = 'idToken',
          Ga = new Ri(3e4, 6e4),
          Ba = { 'Content-Type': 'application/x-www-form-urlencoded' },
          Wa = new Ri(3e4, 6e4),
          Xa = { 'Content-Type': 'application/json' };
        function Ja(t, e) {
          e ? (t.a['X-Firebase-Locale'] = e) : delete t.a['X-Firebase-Locale'];
        }
        function Ya(t, e) {
          e &&
            ((t.l = za('https://securetoken.googleapis.com/v1/token', e)),
            (t.h = za(
              'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
              e
            )),
            (t.i = za('https://identitytoolkit.googleapis.com/v2/', e)));
        }
        function za(t, e) {
          return (
            (t = Cn(t)),
            (e = Cn(e.url)),
            (t.c = t.a + t.c),
            kn(t, e.f),
            (t.a = e.a),
            Sn(t, e.g),
            t.toString()
          );
        }
        function $a(t, e) {
          e
            ? ((t.a['X-Client-Version'] = e), (t.g['X-Client-Version'] = e))
            : (delete t.a['X-Client-Version'], delete t.g['X-Client-Version']);
        }
        function Za(t, e, n, i, r, o, a) {
          var s;
          (t =
            (((s =
              vi((s = bi())) == pi &&
              (s = s.match(/\sChrome\/(\d+)/i)) &&
              2 == s.length
                ? parseInt(s[1], 10)
                : null) &&
              s < 30) ||
              (Kt && Qt && !(9 < Qt))) &&
            !hi()
              ? ((Ha =
                  Ha ||
                  new de(function (t, e) {
                    !(function (t, e) {
                      {
                        ((window.gapi || {}).client || {}).request
                          ? t()
                          : ((l[ts] = function () {
                              ((window.gapi || {}).client || {}).request
                                ? t()
                                : e(Error('CORS_UNSUPPORTED'));
                            }),
                            (function (t, e) {
                              Na(t, null, e, void 0);
                            })(La(Tt(Qa, { onload: ts })), function () {
                              e(Error('CORS_UNSUPPORTED'));
                            }));
                      }
                    })(t, e);
                  })),
                b(t.s, t))
              : b(t.u, t))(e, n, i, r, o, a);
        }
        (qa.prototype.S = function () {
          return this.b;
        }),
          (qa.prototype.u = function (t, n, e, i, r, o) {
            if (
              hi() &&
              (void 0 === l.fetch ||
                void 0 === l.Headers ||
                void 0 === l.Request)
            )
              throw new E(
                'operation-not-supported-in-this-environment',
                'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
              );
            var a,
              s = new ha(this.f);
            o &&
              ((s.g = Math.max(0, o)),
              (a = setTimeout(function () {
                s.dispatchEvent('timeout');
              }, o))),
              dn(s, 'complete', function () {
                a && clearTimeout(a);
                var e = null;
                try {
                  e =
                    JSON.parse(
                      (function (e) {
                        try {
                          return e.a ? e.a.responseText : '';
                        } catch (t) {
                          return (
                            ia(e.b, 'Can not get responseText: ' + t.message),
                            ''
                          );
                        }
                      })(this)
                    ) || null;
                } catch (t) {
                  e = null;
                }
                n && n(e);
              }),
              pn(s, 'ready', function () {
                a && clearTimeout(a), Me(this);
              }),
              pn(s, 'timeout', function () {
                a && clearTimeout(a), Me(this), n && n(null);
              }),
              pa(s, t, e, i, r);
          });
        var Qa = new pt(
            bt,
            'https://apis.google.com/js/client.js?onload=%{onload}'
          ),
          ts = '__fcb' + Math.floor(1e6 * Math.random()).toString();
        function es(t, e, n, i, r, o, a) {
          var s = Cn(e + n);
          _n(s, 'key', t.c), a && _n(s, 'cb', w().toString());
          var u = 'GET' == i;
          if (u) for (var c in r) r.hasOwnProperty(c) && _n(s, c, r[c]);
          return new de(function (e, n) {
            Za(
              t,
              s.toString(),
              function (t) {
                t
                  ? t.error
                    ? n(zs(t, o || {}))
                    : e(t)
                  : n(new E('network-request-failed'));
              },
              i,
              u ? void 0 : Jn(Si(r)),
              t.a,
              t.m.get()
            );
          });
        }
        function ns(t) {
          if ('string' != typeof (t = t.email) || !ai.test(t))
            throw new E('invalid-email');
        }
        function is(t) {
          'email' in t && ns(t);
        }
        function rs(t) {
          if (!t[Ka]) {
            if (t.mfaPendingCredential)
              throw new E('multi-factor-auth-required', null, ht(t));
            throw new E('internal-error');
          }
        }
        function os(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof)
              throw new E('internal-error');
          } else {
            if (!t.sessionInfo) throw new E('missing-verification-id');
            if (!t.code) throw new E('missing-verification-code');
          }
        }
        (qa.prototype.s = function (t, n, i, r, o) {
          var a = this;
          Ha.then(function () {
            window.gapi.client.setApiKey(a.c);
            var e = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null),
              window.gapi.client.request({
                path: t,
                method: i,
                body: r,
                headers: o,
                authType: 'none',
                callback: function (t) {
                  window.gapi.auth.setToken(e), n && n(t);
                }
              });
          }).o(function (t) {
            n &&
              n({ error: { message: (t && t.message) || 'CORS_UNSUPPORTED' } });
          });
        }),
          (qa.prototype.yb = function () {
            return Js(this, Ms, {});
          }),
          (qa.prototype.Ab = function (t, e) {
            return Js(this, Ls, { idToken: t, email: e });
          }),
          (qa.prototype.Bb = function (t, e) {
            return Js(this, xs, { idToken: t, password: e });
          });
        var as = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' };
        function ss(t) {
          if (!t.phoneVerificationInfo) throw new E('internal-error');
          if (!t.phoneVerificationInfo.sessionInfo)
            throw new E('missing-verification-id');
          if (!t.phoneVerificationInfo.code)
            throw new E('missing-verification-code');
        }
        function us(t) {
          if (!t.requestUri || (!t.sessionId && !t.postBody && !t.pendingToken))
            throw new E('internal-error');
        }
        function cs(t, e) {
          return (
            e.oauthIdToken &&
              e.providerId &&
              0 == e.providerId.indexOf('oidc.') &&
              !e.pendingToken &&
              (t.sessionId
                ? (e.nonce = t.sessionId)
                : t.postBody &&
                  Gn((t = new Fn(t.postBody)), 'nonce') &&
                  (e.nonce = t.get('nonce'))),
            e
          );
        }
        function hs(t) {
          var e = null;
          if (
            (t.needConfirmation
              ? ((t.code = 'account-exists-with-different-credential'),
                (e = Uo(t)))
              : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
              ? ((t.code = 'credential-already-in-use'), (e = Uo(t)))
              : 'EMAIL_EXISTS' == t.errorMessage
              ? ((t.code = 'email-already-in-use'), (e = Uo(t)))
              : t.errorMessage && (e = Ys(t.errorMessage)),
            e)
          )
            throw e;
          rs(t);
        }
        function ls(t, e) {
          return (e.returnIdpCredential = !0), Js(t, Vs, e);
        }
        function fs(t, e) {
          return (e.returnIdpCredential = !0), Js(t, qs, e);
        }
        function ds(t, e) {
          return (
            (e.returnIdpCredential = !0), (e.autoCreate = !1), Js(t, Fs, e)
          );
        }
        function ps(t) {
          if (!t.oobCode) throw new E('invalid-action-code');
        }
        ((t = qa.prototype).Cb = function (t, i) {
          var r = { idToken: t },
            o = [];
          return (
            ut(as, function (t, e) {
              var n = i[e];
              null === n ? o.push(t) : e in i && (r[e] = n);
            }),
            o.length && (r.deleteAttribute = o),
            Js(this, Ls, r)
          );
        }),
          (t.ub = function (t, e) {
            return (
              ft((t = { requestType: 'PASSWORD_RESET', email: t }), e),
              Js(this, Os, t)
            );
          }),
          (t.vb = function (t, e) {
            return (
              ft((t = { requestType: 'EMAIL_SIGNIN', email: t }), e),
              Js(this, Ss, t)
            );
          }),
          (t.tb = function (t, e) {
            return (
              ft((t = { requestType: 'VERIFY_EMAIL', idToken: t }), e),
              Js(this, Ns, t)
            );
          }),
          (t.Db = function (t, e, n) {
            return (
              ft(
                (t = {
                  requestType: 'VERIFY_AND_CHANGE_EMAIL',
                  idToken: t,
                  newEmail: e
                }),
                n
              ),
              Js(this, _s, t)
            );
          }),
          (t.eb = function (t) {
            return Js(this, Gs, t);
          }),
          (t.mb = function (t, e) {
            return Js(this, Ds, { oobCode: t, newPassword: e });
          }),
          (t.Qa = function (t) {
            return Js(this, ms, { oobCode: t });
          }),
          (t.ib = function (t) {
            return Js(this, vs, { oobCode: t });
          });
        var vs = { endpoint: 'setAccountInfo', B: ps, Z: 'email', C: !0 },
          ms = {
            endpoint: 'resetPassword',
            B: ps,
            F: function (t) {
              var e = t.requestType;
              if (
                !e ||
                (!t.email &&
                  'EMAIL_SIGNIN' != e &&
                  'VERIFY_AND_CHANGE_EMAIL' != e)
              )
                throw new E('internal-error');
            },
            C: !0
          },
          gs = {
            endpoint: 'signupNewUser',
            B: function (t) {
              if ((ns(t), !t.password)) throw new E('weak-password');
            },
            F: rs,
            U: !0,
            C: !0
          },
          bs = { endpoint: 'createAuthUri', C: !0 },
          ys = { endpoint: 'deleteAccount', M: ['idToken'] },
          ws = {
            endpoint: 'setAccountInfo',
            M: ['idToken', 'deleteProvider'],
            B: function (t) {
              if (!Array.isArray(t.deleteProvider))
                throw new E('internal-error');
            }
          },
          Is = {
            endpoint: 'emailLinkSignin',
            M: ['email', 'oobCode'],
            B: ns,
            F: rs,
            U: !0,
            C: !0
          },
          Ts = {
            endpoint: 'emailLinkSignin',
            M: ['idToken', 'email', 'oobCode'],
            B: ns,
            F: rs,
            U: !0
          },
          Es = {
            endpoint: 'accounts/mfaEnrollment:finalize',
            M: ['idToken', 'phoneVerificationInfo'],
            B: ss,
            F: rs,
            C: !0,
            Na: !0
          },
          As = {
            endpoint: 'accounts/mfaSignIn:finalize',
            M: ['mfaPendingCredential', 'phoneVerificationInfo'],
            B: ss,
            F: rs,
            C: !0,
            Na: !0
          },
          ks = { endpoint: 'getAccountInfo' },
          Ss = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            B: function (t) {
              if ('EMAIL_SIGNIN' != t.requestType)
                throw new E('internal-error');
              ns(t);
            },
            Z: 'email',
            C: !0
          },
          Ns = {
            endpoint: 'getOobConfirmationCode',
            M: ['idToken', 'requestType'],
            B: function (t) {
              if ('VERIFY_EMAIL' != t.requestType)
                throw new E('internal-error');
            },
            Z: 'email',
            C: !0
          },
          _s = {
            endpoint: 'getOobConfirmationCode',
            M: ['idToken', 'newEmail', 'requestType'],
            B: function (t) {
              if ('VERIFY_AND_CHANGE_EMAIL' != t.requestType)
                throw new E('internal-error');
            },
            Z: 'email',
            C: !0
          },
          Os = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            B: function (t) {
              if ('PASSWORD_RESET' != t.requestType)
                throw new E('internal-error');
              ns(t);
            },
            Z: 'email',
            C: !0
          },
          Cs = { kb: !0, endpoint: 'getProjectConfig', Tb: 'GET' },
          Rs = {
            kb: !0,
            endpoint: 'getRecaptchaParam',
            Tb: 'GET',
            F: function (t) {
              if (!t.recaptchaSiteKey) throw new E('internal-error');
            }
          },
          Ds = { endpoint: 'resetPassword', B: ps, Z: 'email', C: !0 },
          Ps = {
            endpoint: 'sendVerificationCode',
            M: ['phoneNumber', 'recaptchaToken'],
            Z: 'sessionInfo',
            C: !0
          },
          Ls = { endpoint: 'setAccountInfo', M: ['idToken'], B: is, U: !0 },
          xs = {
            endpoint: 'setAccountInfo',
            M: ['idToken'],
            B: function (t) {
              if ((is(t), !t.password)) throw new E('weak-password');
            },
            F: rs,
            U: !0
          },
          Ms = { endpoint: 'signupNewUser', F: rs, U: !0, C: !0 },
          js = {
            endpoint: 'accounts/mfaEnrollment:start',
            M: ['idToken', 'phoneEnrollmentInfo'],
            B: function (t) {
              if (!t.phoneEnrollmentInfo) throw new E('internal-error');
              if (!t.phoneEnrollmentInfo.phoneNumber)
                throw new E('missing-phone-number');
              if (!t.phoneEnrollmentInfo.recaptchaToken)
                throw new E('missing-app-credential');
            },
            F: function (t) {
              if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                throw new E('internal-error');
            },
            C: !0,
            Na: !0
          },
          Us = {
            endpoint: 'accounts/mfaSignIn:start',
            M: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
            B: function (t) {
              if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                throw new E('missing-app-credential');
            },
            F: function (t) {
              if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                throw new E('internal-error');
            },
            C: !0,
            Na: !0
          },
          Vs = {
            endpoint: 'verifyAssertion',
            B: us,
            Xa: cs,
            F: hs,
            U: !0,
            C: !0
          },
          Fs = {
            endpoint: 'verifyAssertion',
            B: us,
            Xa: cs,
            F: function (t) {
              if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
                throw new E('user-not-found');
              if (t.errorMessage) throw Ys(t.errorMessage);
              rs(t);
            },
            U: !0,
            C: !0
          },
          qs = {
            endpoint: 'verifyAssertion',
            B: function (t) {
              if ((us(t), !t.idToken)) throw new E('internal-error');
            },
            Xa: cs,
            F: hs,
            U: !0
          },
          Hs = {
            endpoint: 'verifyCustomToken',
            B: function (t) {
              if (!t.token) throw new E('invalid-custom-token');
            },
            F: rs,
            U: !0,
            C: !0
          },
          Ks = {
            endpoint: 'verifyPassword',
            B: function (t) {
              if ((ns(t), !t.password)) throw new E('wrong-password');
            },
            F: rs,
            U: !0,
            C: !0
          },
          Gs = { endpoint: 'verifyPhoneNumber', B: os, F: rs, C: !0 },
          Bs = {
            endpoint: 'verifyPhoneNumber',
            B: function (t) {
              if (!t.idToken) throw new E('internal-error');
              os(t);
            },
            F: function (t) {
              if (t.temporaryProof)
                throw ((t.code = 'credential-already-in-use'), Uo(t));
              rs(t);
            }
          },
          Ws = {
            Gb: { USER_NOT_FOUND: 'user-not-found' },
            endpoint: 'verifyPhoneNumber',
            B: os,
            F: rs,
            C: !0
          },
          Xs = {
            endpoint: 'accounts/mfaEnrollment:withdraw',
            M: ['idToken', 'mfaEnrollmentId'],
            F: function (t) {
              if (!!t[Ka] ^ !!t.refreshToken) throw new E('internal-error');
            },
            C: !0,
            Na: !0
          };
        function Js(t, e, n) {
          if (
            !(function (t, e) {
              if (!e || !e.length) return 1;
              if (t) {
                for (var n = 0; n < e.length; n++) {
                  var i = t[e[n]];
                  if (null == i || '' === i) return;
                }
                return 1;
              }
            })(n, e.M)
          )
            return Ie(new E('internal-error'));
          var i,
            r = !!e.Na,
            o = e.Tb || 'POST';
          return we(n)
            .then(e.B)
            .then(function () {
              return (
                e.U && (n.returnSecureToken = !0),
                e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                es(t, r ? t.i : t.h, e.endpoint, o, n, e.Gb, e.kb || !1)
              );
            })
            .then(function (t) {
              return (i = t), e.Xa ? e.Xa(n, i) : i;
            })
            .then(e.F)
            .then(function () {
              if (!e.Z) return i;
              if (!(e.Z in i)) throw new E('internal-error');
              return i[e.Z];
            });
        }
        function Ys(t) {
          return zs({
            error: { errors: [{ message: t }], code: 400, message: t }
          });
        }
        function zs(t, e) {
          var n,
            i =
              ((t.error && t.error.errors && t.error.errors[0]) || {}).reason ||
              '',
            r = {
              keyInvalid: 'invalid-api-key',
              ipRefererBlocked: 'app-not-authorized'
            };
          if ((i = r[i] ? new E(r[i]) : null)) return i;
          for (n in ((i = (t.error && t.error.message) || ''),
          ft(
            (r = {
              INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
              CREDENTIAL_MISMATCH: 'custom-token-mismatch',
              MISSING_CUSTOM_TOKEN: 'internal-error',
              INVALID_IDENTIFIER: 'invalid-email',
              MISSING_CONTINUE_URI: 'internal-error',
              INVALID_EMAIL: 'invalid-email',
              INVALID_PASSWORD: 'wrong-password',
              USER_DISABLED: 'user-disabled',
              MISSING_PASSWORD: 'internal-error',
              EMAIL_EXISTS: 'email-already-in-use',
              PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
              INVALID_IDP_RESPONSE: 'invalid-credential',
              INVALID_PENDING_TOKEN: 'invalid-credential',
              FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
              MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
              INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
              INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
              INVALID_SENDER: 'invalid-sender',
              EMAIL_NOT_FOUND: 'user-not-found',
              RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
              EXPIRED_OOB_CODE: 'expired-action-code',
              INVALID_OOB_CODE: 'invalid-action-code',
              MISSING_OOB_CODE: 'internal-error',
              INVALID_PROVIDER_ID: 'invalid-provider-id',
              CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
              INVALID_ID_TOKEN: 'invalid-user-token',
              TOKEN_EXPIRED: 'user-token-expired',
              USER_NOT_FOUND: 'user-token-expired',
              CORS_UNSUPPORTED: 'cors-unsupported',
              DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
              INVALID_APP_ID: 'invalid-app-id',
              TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
              WEAK_PASSWORD: 'weak-password',
              OPERATION_NOT_ALLOWED: 'operation-not-allowed',
              USER_CANCELLED: 'user-cancelled',
              CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
              INVALID_APP_CREDENTIAL: 'invalid-app-credential',
              INVALID_CODE: 'invalid-verification-code',
              INVALID_PHONE_NUMBER: 'invalid-phone-number',
              INVALID_SESSION_INFO: 'invalid-verification-id',
              INVALID_TEMPORARY_PROOF: 'invalid-credential',
              MISSING_APP_CREDENTIAL: 'missing-app-credential',
              MISSING_CODE: 'missing-verification-code',
              MISSING_PHONE_NUMBER: 'missing-phone-number',
              MISSING_SESSION_INFO: 'missing-verification-id',
              QUOTA_EXCEEDED: 'quota-exceeded',
              SESSION_EXPIRED: 'code-expired',
              REJECTED_CREDENTIAL: 'rejected-credential',
              INVALID_CONTINUE_URI: 'invalid-continue-uri',
              MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
              MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
              UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
              INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
              INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
              INVALID_CERT_HASH: 'invalid-cert-hash',
              UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
              INVALID_TENANT_ID: 'invalid-tenant-id',
              TENANT_ID_MISMATCH: 'tenant-id-mismatch',
              ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
              INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
              MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
              MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
              MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
              EMAIL_CHANGE_NEEDS_VERIFICATION:
                'email-change-needs-verification',
              SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
              SECOND_FACTOR_LIMIT_EXCEEDED:
                'maximum-second-factor-count-exceeded',
              UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
              UNVERIFIED_EMAIL: 'unverified-email'
            }),
            e || {}
          ),
          (e =
            (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
              ? e[1]
              : void 0),
          r))
            if (0 === i.indexOf(n)) return new E(r[n], e);
          return !e && t && (e = ki(t)), new E('internal-error', e);
        }
        function $s(t) {
          var o;
          (this.b = t),
            (this.a = null),
            (this.qb =
              ((o = this),
              (
                eu ||
                (eu = new de(function (t, e) {
                  function n() {
                    Ci(),
                      yi('gapi.load')('gapi.iframes', {
                        callback: t,
                        ontimeout: function () {
                          Ci(), e(Error('Network Error'));
                        },
                        timeout: Qs.get()
                      });
                  }
                  var i;
                  yi('gapi.iframes.Iframe')
                    ? t()
                    : yi('gapi.load')
                    ? n()
                    : ((i =
                        '__iframefcb' +
                        Math.floor(1e6 * Math.random()).toString()),
                      (l[i] = function () {
                        yi('gapi.load') ? n() : e(Error('Network Error'));
                      }),
                      we(La((i = Tt(Zs, { onload: i })))).o(function () {
                        e(Error('Network Error'));
                      }));
                }).o(function (t) {
                  throw ((eu = null), t);
                }))
              ).then(function () {
                return new de(function (i, r) {
                  yi('gapi.iframes.getContext')().open(
                    {
                      where: document.body,
                      url: o.b,
                      messageHandlersFilter: yi(
                        'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'
                      ),
                      attributes: {
                        style: {
                          position: 'absolute',
                          top: '-100px',
                          width: '1px',
                          height: '1px'
                        }
                      },
                      dontclear: !0
                    },
                    function (t) {
                      function e() {
                        clearTimeout(n), i();
                      }
                      (o.a = t), o.a.restyle({ setHideOnLeave: !1 });
                      var n = setTimeout(function () {
                        r(Error('Network Error'));
                      }, tu.get());
                      t.ping(e).then(e, function () {
                        r(Error('Network Error'));
                      });
                    }
                  );
                });
              })));
        }
        var Zs = new pt(
            bt,
            'https://apis.google.com/js/api.js?onload=%{onload}'
          ),
          Qs = new Ri(3e4, 6e4),
          tu = new Ri(5e3, 15e3),
          eu = null;
        function nu(t, e, n, i) {
          (this.l = t),
            (this.h = e),
            (this.i = n),
            (this.g = i),
            (this.f = null),
            (t = this.g
              ? Rn((t = Cn(this.g.url)).f, t.a, t.g, '/emulator/auth/iframe')
              : Rn('https', this.l, null, '/__/auth/iframe')),
            (this.a = t),
            _n(this.a, 'apiKey', this.h),
            _n(this.a, 'appName', this.i),
            (this.b = null),
            (this.c = []);
        }
        function iu(t, e, n, i, r, o) {
          (this.u = t),
            (this.s = e),
            (this.c = n),
            (this.v = i),
            (this.m = o),
            (this.i = this.g = this.l = null),
            (this.a = r),
            (this.h = this.f = null);
        }
        function ru(t) {
          try {
            return Zl.default.app(t).auth().Ga();
          } catch (t) {
            return [];
          }
        }
        function ou(t, e, n, i, r, o) {
          (this.s = t),
            (this.g = e),
            (this.b = n),
            (this.f = o),
            (this.c = i || null),
            (this.i = r || null),
            (this.l = this.u = this.A = null),
            (this.h = []),
            (this.v = this.a = null);
        }
        function au(t) {
          var s = ti();
          return Js(t, Cs, {})
            .then(function (t) {
              return t.authorizedDomains || [];
            })
            .then(function (t) {
              t: {
                for (var e = (n = Cn(s)).f, n = n.a, i = 0; i < t.length; i++) {
                  var r = t[i],
                    o = n,
                    a = e;
                  if (
                    (o =
                      0 == r.indexOf('chrome-extension://')
                        ? Cn(r).a == o && 'chrome-extension' == a
                        : ('http' == a || 'https' == a) &&
                          (oi.test(r)
                            ? o == r
                            : ((r = r.split('.').join('\\.')),
                              new RegExp(
                                '^(.+\\.' + r + '|' + r + ')$',
                                'i'
                              ).test(o))))
                  ) {
                    t = !0;
                    break t;
                  }
                }
                t = !1;
              }
              if (!t) throw new Mo(ti());
            });
        }
        function su(r) {
          return (
            r.v ||
              (r.v = si().then(function () {
                var t, e, n, i;
                r.u ||
                  ((t = r.c),
                  (e = r.i),
                  (n = ru(r.b)),
                  ((i = new nu(r.s, r.g, r.b, r.f)).f = t),
                  (i.b = e),
                  (i.c = J(n || [])),
                  (r.u = i.toString())),
                  (r.m = new $s(r.u)),
                  (function (i) {
                    if (!i.m) throw Error('IfcHandler must be initialized!');
                    !(function (t, e) {
                      t.qb.then(function () {
                        t.a.register(
                          'authEvent',
                          e,
                          yi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                        );
                      });
                    })(i.m, function (t) {
                      var e = {};
                      if (t && t.authEvent) {
                        var n = !1;
                        for (t = Do(t.authEvent), e = 0; e < i.h.length; e++)
                          n = i.h[e](t) || n;
                        return ((e = {}).status = n ? 'ACK' : 'ERROR'), we(e);
                      }
                      return (e.status = 'ERROR'), we(e);
                    });
                  })(r);
              })),
            r.v
          );
        }
        function uu(t) {
          return (
            t.l ||
              ((t.A = t.c ? gi(t.c, ru(t.b)) : null),
              (t.l = new qa(t.g, O(t.i), t.A)),
              t.f && Ya(t.l, t.f)),
            t.l
          );
        }
        function cu(t, e, n, i, r, o, a, s, u, c, h, l) {
          return (
            ((t = new iu(t, e, n, i, r, l)).l = o),
            (t.g = a),
            (t.i = s),
            (t.b = ht(u || null)),
            (t.f = c),
            t.xb(h).toString()
          );
        }
        function hu(t) {
          if (
            ((this.a =
              t ||
              (Zl.default.INTERNAL.reactNative &&
                Zl.default.INTERNAL.reactNative.AsyncStorage)),
            !this.a)
          )
            throw new E(
              'internal-error',
              'The React Native compatibility library was not found.'
            );
          this.type = 'asyncStorage';
        }
        function lu(t) {
          (this.b = t), (this.a = {}), (this.f = b(this.c, this));
        }
        (nu.prototype.toString = function () {
          return (
            this.f ? _n(this.a, 'v', this.f) : Kn(this.a.b, 'v'),
            this.b ? _n(this.a, 'eid', this.b) : Kn(this.a.b, 'eid'),
            this.c.length
              ? _n(this.a, 'fw', this.c.join(','))
              : Kn(this.a.b, 'fw'),
            this.a.toString()
          );
        }),
          (iu.prototype.xb = function (t) {
            return (this.h = t), this;
          }),
          (iu.prototype.toString = function () {
            var t;
            if (
              (_n(
                (t = this.m
                  ? Rn(
                      (t = Cn(this.m.url)).f,
                      t.a,
                      t.g,
                      '/emulator/auth/handler'
                    )
                  : Rn('https', this.u, null, '/__/auth/handler')),
                'apiKey',
                this.s
              ),
              _n(t, 'appName', this.c),
              _n(t, 'authType', this.v),
              this.a.isOAuthProvider)
            ) {
              var e,
                n = this.a;
              try {
                var i = Zl.default.app(this.c).auth().ka();
              } catch (t) {
                i = null;
              }
              for (e in ((n.nb = i),
              _n(t, 'providerId', this.a.providerId),
              (n = Si((i = this.a).Hb))))
                n[e] = n[e].toString();
              (e = i.Pc), (n = ht(n));
              for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o in n && delete n[o];
              }
              i.ob && i.nb && !n[i.ob] && (n[i.ob] = i.nb),
                ct(n) || _n(t, 'customParameters', ki(n));
            }
            if (
              ('function' == typeof this.a.Pb &&
                (i = this.a.Pb()).length &&
                _n(t, 'scopes', i.join(',')),
              this.l ? _n(t, 'redirectUrl', this.l) : Kn(t.b, 'redirectUrl'),
              this.g ? _n(t, 'eventId', this.g) : Kn(t.b, 'eventId'),
              this.i ? _n(t, 'v', this.i) : Kn(t.b, 'v'),
              this.b)
            )
              for (var a in this.b)
                this.b.hasOwnProperty(a) && !On(t, a) && _n(t, a, this.b[a]);
            return (
              this.h ? _n(t, 'tid', this.h) : Kn(t.b, 'tid'),
              this.f ? _n(t, 'eid', this.f) : Kn(t.b, 'eid'),
              (a = ru(this.c)).length && _n(t, 'fw', a.join(',')),
              t.toString()
            );
          }),
          ((t = ou.prototype).Nb = function (e, n, t) {
            var i = new E('popup-closed-by-user'),
              r = new E('web-storage-unsupported'),
              o = this,
              a = !1;
            return this.la()
              .then(function () {
                var t, i;
                (i = { type: 'webStorageSupport' }),
                  su((t = o))
                    .then(function () {
                      return (
                        (e = t.m),
                        (n = i),
                        e.qb.then(function () {
                          return new de(function (t) {
                            e.a.send(
                              n.type,
                              n,
                              t,
                              yi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
                            );
                          });
                        })
                      );
                      var e, n;
                    })
                    .then(function (t) {
                      if (t && t.length && void 0 !== t[0].webStorageSupport)
                        return t[0].webStorageSupport;
                      throw Error();
                    })
                    .then(function (t) {
                      t || (e && ii(e), n(r), (a = !0));
                    });
              })
              .o(function () {})
              .then(function () {
                if (!a)
                  return (
                    (n = e),
                    new de(function (e) {
                      return (function t() {
                        gn(2e3).then(function () {
                          return n && !n.closed ? t() : void e();
                        });
                      })();
                    })
                  );
                var n;
              })
              .then(function () {
                if (!a)
                  return gn(t).then(function () {
                    n(i);
                  });
              });
          }),
          (t.Wb = function () {
            var t = bi();
            return !Ai(t) && !Oi(t);
          }),
          (t.Sb = function () {
            return !1;
          }),
          (t.Lb = function (e, t, n, i, r, o, a, s) {
            if (!e) return Ie(new E('popup-blocked'));
            if (a && !Ai())
              return (
                this.la().o(function (t) {
                  ii(e), r(t);
                }),
                i(),
                we()
              );
            this.a || (this.a = au(uu(this)));
            var u = this;
            return this.a
              .then(function () {
                var t = u.la().o(function (t) {
                  throw (ii(e), r(t), t);
                });
                return i(), t;
              })
              .then(function () {
                Co(n),
                  a ||
                    ei(
                      cu(
                        u.s,
                        u.g,
                        u.b,
                        t,
                        n,
                        null,
                        o,
                        u.c,
                        void 0,
                        u.i,
                        s,
                        u.f
                      ),
                      e
                    );
              })
              .o(function (t) {
                throw (
                  ('auth/network-request-failed' == t.code && (u.a = null), t)
                );
              });
          }),
          (t.Mb = function (t, e, n, i) {
            this.a || (this.a = au(uu(this)));
            var r = this;
            return this.a
              .then(function () {
                Co(e),
                  ei(
                    cu(r.s, r.g, r.b, t, e, ti(), n, r.c, void 0, r.i, i, r.f)
                  );
              })
              .o(function (t) {
                throw (
                  ('auth/network-request-failed' == t.code && (r.a = null), t)
                );
              });
          }),
          (t.la = function () {
            var t = this;
            return su(this)
              .then(function () {
                return t.m.qb;
              })
              .o(function () {
                throw ((t.a = null), new E('network-request-failed'));
              });
          }),
          (t.Zb = function () {
            return !0;
          }),
          (t.Ea = function (t) {
            this.h.push(t);
          }),
          (t.Ra = function (e) {
            W(this.h, function (t) {
              return t == e;
            });
          }),
          ((t = hu.prototype).get = function (t) {
            return we(this.a.getItem(t)).then(function (t) {
              return t && Ni(t);
            });
          }),
          (t.set = function (t, e) {
            return we(this.a.setItem(t, ki(e)));
          }),
          (t.T = function (t) {
            return we(this.a.removeItem(t));
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var fu,
          du = [];
        function pu(t, e, n) {
          ct(t.a) && t.b.addEventListener('message', t.f),
            void 0 === t.a[e] && (t.a[e] = []),
            t.a[e].push(n);
        }
        function vu(t) {
          this.a = t;
        }
        function mu(t) {
          (this.c = t), (this.b = !1), (this.a = []);
        }
        function gu(i, t, e, n) {
          var r,
            o,
            a,
            s,
            u = e || {},
            c = null;
          if (i.b) return Ie(Error('connection_unavailable'));
          var h = n ? 800 : 50,
            l =
              'undefined' != typeof MessageChannel
                ? new MessageChannel()
                : null;
          return new de(function (e, n) {
            l
              ? ((r = Math.floor(Math.random() * Math.pow(10, 20)).toString()),
                l.port1.start(),
                (a = setTimeout(function () {
                  n(Error('unsupported_event'));
                }, h)),
                (c = {
                  messageChannel: l,
                  onMessage: (o = function (t) {
                    t.data.eventId === r &&
                      ('ack' === t.data.status
                        ? (clearTimeout(a),
                          (s = setTimeout(function () {
                            n(Error('timeout'));
                          }, 3e3)))
                        : 'done' === t.data.status
                        ? (clearTimeout(s),
                          void 0 !== t.data.response
                            ? e(t.data.response)
                            : n(Error('unknown_error')))
                        : (clearTimeout(a),
                          clearTimeout(s),
                          n(Error('invalid_response'))));
                  })
                }),
                i.a.push(c),
                l.port1.addEventListener('message', o),
                i.c.postMessage({ eventType: t, eventId: r, data: u }, [
                  l.port2
                ]))
              : n(Error('connection_unavailable'));
          })
            .then(function (t) {
              return bu(i, c), t;
            })
            .o(function (t) {
              throw (bu(i, c), t);
            });
        }
        function bu(t, e) {
          var n, i;
          e &&
            ((n = e.messageChannel),
            (i = e.onMessage),
            n && (n.port1.removeEventListener('message', i), n.port1.close()),
            W(t.a, function (t) {
              return t == e;
            }));
        }
        function yu() {
          if (!Eu()) throw new E('web-storage-unsupported');
          (this.c = {}),
            (this.a = []),
            (this.b = 0),
            (this.v = l.indexedDB),
            (this.type = 'indexedDB'),
            (this.g = this.m = this.f = this.l = null),
            (this.s = !1),
            (this.h = null);
          var t,
            e,
            n,
            i = this;
          hi() && self
            ? ((this.m =
                ((n = hi() ? self : null),
                F(du, function (t) {
                  t.b == n && (e = t);
                }),
                e || ((e = new lu(n)), du.push(e)),
                e)),
              pu(this.m, 'keyChanged', function (t, n) {
                return _u(i).then(function (e) {
                  return (
                    0 < e.length &&
                      F(i.a, function (t) {
                        t(e);
                      }),
                    { keyProcessed: G(e, n.key) }
                  );
                });
              }),
              pu(this.m, 'ping', function () {
                return we(['keyChanged']);
              }))
            : ((t = l.navigator) && t.serviceWorker
                ? we()
                    .then(function () {
                      return t.serviceWorker.ready;
                    })
                    .then(function (t) {
                      return t.active || null;
                    })
                    .o(function () {
                      return null;
                    })
                : we(null)
              ).then(function (t) {
                (i.h = t) &&
                  ((i.g = new mu(new vu(t))),
                  gu(i.g, 'ping', null, !0)
                    .then(function (t) {
                      t[0].fulfilled &&
                        G(t[0].value, 'keyChanged') &&
                        (i.s = !0);
                    })
                    .o(function () {}));
              });
        }
        function wu(r) {
          return new de(function (e, n) {
            var t = r.v.open('firebaseLocalStorageDb', 1);
            (t.onerror = function (t) {
              try {
                t.preventDefault();
              } catch (t) {}
              n(Error(t.target.error));
            }),
              (t.onupgradeneeded = function (t) {
                t = t.target.result;
                try {
                  t.createObjectStore('firebaseLocalStorage', {
                    keyPath: 'fbase_key'
                  });
                } catch (t) {
                  n(t);
                }
              }),
              (t.onsuccess = function (t) {
                var i;
                (t = t.target.result).objectStoreNames.contains(
                  'firebaseLocalStorage'
                )
                  ? e(t)
                  : ((i = r),
                    new de(function (t, e) {
                      var n = i.v.deleteDatabase('firebaseLocalStorageDb');
                      (n.onsuccess = function () {
                        t();
                      }),
                        (n.onerror = function (t) {
                          e(Error(t.target.error));
                        });
                    })
                      .then(function () {
                        return wu(r);
                      })
                      .then(function (t) {
                        e(t);
                      })
                      .o(function (t) {
                        n(t);
                      }));
              });
          });
        }
        function Iu(t) {
          return t.i || (t.i = wu(t)), t.i;
        }
        function Tu(r, t) {
          var o = 0;
          return new de(function e(n, i) {
            Iu(r)
              .then(t)
              .then(n)
              .o(function (t) {
                return 3 < ++o
                  ? void i(t)
                  : Iu(r)
                      .then(function (t) {
                        return t.close(), (r.i = void 0), e(n, i);
                      })
                      .o(function (t) {
                        i(t);
                      });
              });
          });
        }
        function Eu() {
          try {
            return l.indexedDB;
          } catch (t) {
            return;
          }
        }
        function Au(t) {
          return t.objectStore('firebaseLocalStorage');
        }
        function ku(t, e) {
          return t.transaction(
            ['firebaseLocalStorage'],
            e ? 'readwrite' : 'readonly'
          );
        }
        function Su(t) {
          return new de(function (e, n) {
            (t.onsuccess = function (t) {
              t && t.target ? e(t.target.result) : e();
            }),
              (t.onerror = function (t) {
                n(t.target.error);
              });
          });
        }
        function Nu(t, e) {
          return t.g &&
            t.h &&
            (((n = l.navigator) &&
              n.serviceWorker &&
              n.serviceWorker.controller) ||
              null) === t.h
            ? gu(t.g, 'keyChanged', { key: e }, t.s)
                .then(function () {})
                .o(function () {})
            : we();
          var n;
        }
        function _u(i) {
          return Iu(i)
            .then(function (t) {
              var r = Au(ku(t, !1));
              return r.getAll
                ? Su(r.getAll())
                : new de(function (e, n) {
                    var i = [],
                      t = r.openCursor();
                    (t.onsuccess = function (t) {
                      (t = t.target.result)
                        ? (i.push(t.value), t.continue())
                        : e(i);
                    }),
                      (t.onerror = function (t) {
                        n(t.target.error);
                      });
                  });
            })
            .then(function (t) {
              var e = {},
                n = [];
              if (0 == i.b) {
                for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                (n = (function t(e, n) {
                  var i,
                    r = [];
                  for (i in e)
                    i in n && typeof e[i] == typeof n[i]
                      ? 'object' == typeof e[i] && null != e[i] && null != n[i]
                        ? 0 < t(e[i], n[i]).length && r.push(i)
                        : e[i] !== n[i] && r.push(i)
                      : r.push(i);
                  for (i in n) i in e || r.push(i);
                  return r;
                })(i.c, e)),
                  (i.c = e);
              }
              return n;
            });
        }
        function Ou(t) {
          t.l && t.l.cancel('STOP_EVENT'),
            t.f && (clearTimeout(t.f), (t.f = null));
        }
        function Cu(t) {
          var i = this,
            r = null;
          (this.a = []),
            (this.type = 'indexedDB'),
            (this.c = t),
            (this.b = we()
              .then(function () {
                if (Eu()) {
                  var e = _i(),
                    n = '__sak' + e;
                  return (
                    (fu = fu || new yu()),
                    (r = fu)
                      .set(n, e)
                      .then(function () {
                        return r.get(n);
                      })
                      .then(function (t) {
                        if (t !== e) throw Error('indexedDB not supported!');
                        return r.T(n);
                      })
                      .then(function () {
                        return r;
                      })
                      .o(function () {
                        return i.c;
                      })
                  );
                }
                return i.c;
              })
              .then(function (t) {
                return (
                  (i.type = t.type),
                  t.ca(function (e) {
                    F(i.a, function (t) {
                      t(e);
                    });
                  }),
                  t
                );
              }));
        }
        function Ru() {
          (this.a = {}), (this.type = 'inMemory');
        }
        function Du() {
          if (
            !(function () {
              var t = 'Node' == li();
              if (
                !(t =
                  Pu() ||
                  (t &&
                    Zl.default.INTERNAL.node &&
                    Zl.default.INTERNAL.node.localStorage))
              )
                return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (t) {
                return !1;
              }
            })()
          ) {
            if ('Node' == li())
              throw new E(
                'internal-error',
                'The LocalStorage compatibility library was not found.'
              );
            throw new E('web-storage-unsupported');
          }
          (this.a = Pu() || Zl.default.INTERNAL.node.localStorage),
            (this.type = 'localStorage');
        }
        function Pu() {
          try {
            var t = l.localStorage,
              e = _i();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function Lu() {
          this.type = 'nullStorage';
        }
        function xu() {
          if (
            !(function () {
              var t = 'Node' == li();
              if (
                !(t =
                  Mu() ||
                  (t &&
                    Zl.default.INTERNAL.node &&
                    Zl.default.INTERNAL.node.sessionStorage))
              )
                return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (t) {
                return !1;
              }
            })()
          ) {
            if ('Node' == li())
              throw new E(
                'internal-error',
                'The SessionStorage compatibility library was not found.'
              );
            throw new E('web-storage-unsupported');
          }
          (this.a = Mu() || Zl.default.INTERNAL.node.sessionStorage),
            (this.type = 'sessionStorage');
        }
        function Mu() {
          try {
            var t = l.sessionStorage,
              e = _i();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function ju() {
          var t = {};
          (t.Browser = Fu),
            (t.Node = qu),
            (t.ReactNative = Hu),
            (t.Worker = Ku),
            (this.a = t[li()]);
        }
        (lu.prototype.c = function (n) {
          var e,
            i = n.data.eventType,
            r = n.data.eventId,
            t = this.a[i];
          t &&
            0 < t.length &&
            (n.ports[0].postMessage({
              status: 'ack',
              eventId: r,
              eventType: i,
              response: null
            }),
            (e = []),
            F(t, function (t) {
              e.push(
                we().then(function () {
                  return t(n.origin, n.data.data);
                })
              );
            }),
            Ee(e).then(function (t) {
              var e = [];
              F(t, function (t) {
                e.push({
                  fulfilled: t.Ob,
                  value: t.value,
                  reason: t.reason ? t.reason.message : void 0
                });
              }),
                F(e, function (t) {
                  for (var e in t) void 0 === t[e] && delete t[e];
                }),
                n.ports[0].postMessage({
                  status: 'done',
                  eventId: r,
                  eventType: i,
                  response: e
                });
            }));
        }),
          (vu.prototype.postMessage = function (t, e) {
            this.a.postMessage(t, e);
          }),
          (mu.prototype.close = function () {
            for (; 0 < this.a.length; ) bu(this, this.a[0]);
            this.b = !0;
          }),
          ((t = yu.prototype).set = function (i, r) {
            var o = this,
              a = !1;
            return Tu(this, function (t) {
              return Su((t = Au(ku(t, !0))).get(i));
            })
              .then(function (n) {
                return Tu(o, function (t) {
                  if (((t = Au(ku(t, !0))), n))
                    return (n.value = r), Su(t.put(n));
                  o.b++, (a = !0);
                  var e = {};
                  return (e.fbase_key = i), (e.value = r), Su(t.add(e));
                });
              })
              .then(function () {
                return (o.c[i] = r), Nu(o, i);
              })
              .na(function () {
                a && o.b--;
              });
          }),
          (t.get = function (e) {
            return Tu(this, function (t) {
              return Su(Au(ku(t, !1)).get(e));
            }).then(function (t) {
              return t && t.value;
            });
          }),
          (t.T = function (e) {
            var n = this,
              i = !1;
            return Tu(this, function (t) {
              return (i = !0), n.b++, Su(Au(ku(t, !0)).delete(e));
            })
              .then(function () {
                return delete n.c[e], Nu(n, e);
              })
              .na(function () {
                i && n.b--;
              });
          }),
          (t.ca = function (t) {
            var n;
            0 == this.a.length &&
              (Ou((n = this)),
              (function e() {
                n.f = setTimeout(function () {
                  n.l = _u(n)
                    .then(function (e) {
                      0 < e.length &&
                        F(n.a, function (t) {
                          t(e);
                        });
                    })
                    .then(function () {
                      e();
                    })
                    .o(function (t) {
                      'STOP_EVENT' != t.message && e();
                    });
                }, 800);
              })()),
              this.a.push(t);
          }),
          (t.ia = function (e) {
            W(this.a, function (t) {
              return t == e;
            }),
              0 == this.a.length && Ou(this);
          }),
          ((t = Cu.prototype).get = function (e) {
            return this.b.then(function (t) {
              return t.get(e);
            });
          }),
          (t.set = function (e, n) {
            return this.b.then(function (t) {
              return t.set(e, n);
            });
          }),
          (t.T = function (e) {
            return this.b.then(function (t) {
              return t.T(e);
            });
          }),
          (t.ca = function (t) {
            this.a.push(t);
          }),
          (t.ia = function (e) {
            W(this.a, function (t) {
              return t == e;
            });
          }),
          ((t = Ru.prototype).get = function (t) {
            return we(this.a[t]);
          }),
          (t.set = function (t, e) {
            return (this.a[t] = e), we();
          }),
          (t.T = function (t) {
            return delete this.a[t], we();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = Du.prototype).get = function (t) {
            var e = this;
            return we().then(function () {
              return Ni(e.a.getItem(t));
            });
          }),
          (t.set = function (e, n) {
            var i = this;
            return we().then(function () {
              var t = ki(n);
              null === t ? i.T(e) : i.a.setItem(e, t);
            });
          }),
          (t.T = function (t) {
            var e = this;
            return we().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ca = function (t) {
            l.window && Qe(l.window, 'storage', t);
          }),
          (t.ia = function (t) {
            l.window && nn(l.window, 'storage', t);
          }),
          ((t = Lu.prototype).get = function () {
            return we(null);
          }),
          (t.set = function () {
            return we();
          }),
          (t.T = function () {
            return we();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = xu.prototype).get = function (t) {
            var e = this;
            return we().then(function () {
              return Ni(e.a.getItem(t));
            });
          }),
          (t.set = function (e, n) {
            var i = this;
            return we().then(function () {
              var t = ki(n);
              null === t ? i.T(e) : i.a.setItem(e, t);
            });
          }),
          (t.T = function (t) {
            var e = this;
            return we().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var Uu,
          Vu,
          Fu = { D: Du, ab: xu },
          qu = { D: Du, ab: xu },
          Hu = { D: hu, ab: Lu },
          Ku = { D: Du, ab: Lu },
          Gu = { qd: 'local', NONE: 'none', sd: 'session' };
        function Bu() {
          var t = !(Oi(bi()) || !ci()),
            e = Ai(),
            n = wi();
          (this.v = t),
            (this.h = e),
            (this.l = n),
            (this.a = {}),
            (t = Uu = Uu || new ju());
          try {
            this.g =
              (!Qn() && xi()) || !l.indexedDB
                ? new t.a.D()
                : new Cu(new (hi() ? Ru : t.a.D)());
          } catch (t) {
            (this.g = new Ru()), (this.h = !0);
          }
          try {
            this.i = new t.a.ab();
          } catch (t) {
            this.i = new Ru();
          }
          (this.m = new Ru()), (this.f = b(this.Xb, this)), (this.b = {});
        }
        function Wu() {
          return (Vu = Vu || new Bu());
        }
        function Xu(t, e) {
          switch (e) {
            case 'session':
              return t.i;
            case 'none':
              return t.m;
            default:
              return t.g;
          }
        }
        function Ju(t, e) {
          return 'firebase:' + t.name + (e ? ':' + e : '');
        }
        function Yu(t, e, n) {
          return (
            (n = Ju(e, n)), 'local' == e.D && (t.b[n] = null), Xu(t, e.D).T(n)
          );
        }
        function zu(t) {
          t.c && (clearInterval(t.c), (t.c = null));
        }
        function $u(t) {
          (this.a = t), (this.b = Wu());
        }
        ((t = Bu.prototype).get = function (t, e) {
          return Xu(this, t.D).get(Ju(t, e));
        }),
          (t.set = function (e, t, n) {
            var i = Ju(e, n),
              r = this,
              o = Xu(this, e.D);
            return o
              .set(i, t)
              .then(function () {
                return o.get(i);
              })
              .then(function (t) {
                'local' == e.D && (r.b[i] = t);
              });
          }),
          (t.addListener = function (t, e, n) {
            var i;
            (t = Ju(t, e)),
              this.l && (this.b[t] = l.localStorage.getItem(t)),
              ct(this.a) &&
                (Xu(this, 'local').ca(this.f),
                this.h ||
                  ((Qn() || !xi()) && l.indexedDB) ||
                  !this.l ||
                  (zu((i = this)),
                  (i.c = setInterval(function () {
                    for (var t in i.a) {
                      var e = l.localStorage.getItem(t),
                        n = i.b[t];
                      e != n &&
                        ((i.b[t] = e),
                        (e = new He({
                          type: 'storage',
                          key: t,
                          target: window,
                          oldValue: n,
                          newValue: e,
                          a: !0
                        })),
                        i.Xb(e));
                    }
                  }, 1e3)))),
              this.a[t] || (this.a[t] = []),
              this.a[t].push(n);
          }),
          (t.removeListener = function (t, e, n) {
            (t = Ju(t, e)),
              this.a[t] &&
                (W(this.a[t], function (t) {
                  return t == n;
                }),
                0 == this.a[t].length && delete this.a[t]),
              ct(this.a) && (Xu(this, 'local').ia(this.f), zu(this));
          }),
          (t.Xb = function (t) {
            if (t && t.g) {
              var e = t.a.key;
              if (null == e)
                for (var n in this.a) {
                  var i = this.b[n];
                  void 0 === i && (i = null);
                  var r = l.localStorage.getItem(n);
                  r !== i && ((this.b[n] = r), this.lb(n));
                }
              else if (0 == e.indexOf('firebase:') && this.a[e]) {
                if (
                  (void 0 !== t.a.a ? Xu(this, 'local').ia(this.f) : zu(this),
                  this.v)
                )
                  if (
                    ((n = l.localStorage.getItem(e)), (i = t.a.newValue) !== n)
                  )
                    null !== i
                      ? l.localStorage.setItem(e, i)
                      : l.localStorage.removeItem(e);
                  else if (this.b[e] === i && void 0 === t.a.a) return;
                var o = this,
                  n = function () {
                    (void 0 === t.a.a &&
                      o.b[e] === l.localStorage.getItem(e)) ||
                      ((o.b[e] = l.localStorage.getItem(e)), o.lb(e));
                  };
                Kt &&
                Qt &&
                10 == Qt &&
                l.localStorage.getItem(e) !== t.a.newValue &&
                t.a.newValue !== t.a.oldValue
                  ? setTimeout(n, 10)
                  : n();
              }
            } else F(t, b(this.lb, this));
          }),
          (t.lb = function (t) {
            this.a[t] &&
              F(this.a[t], function (t) {
                t();
              });
          });
        var Zu,
          Qu = { name: 'authEvent', D: 'local' };
        function tc() {
          this.a = Wu();
        }
        function ec(t, e) {
          (this.b = nc),
            (this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
            (this.g = this.c = 0),
            (this.a = []),
            (this.i = t),
            (this.h = e),
            (this.l = l.Int32Array ? new Int32Array(64) : Array(64)),
            void 0 === Zu && (Zu = l.Int32Array ? new Int32Array(cc) : cc),
            this.reset();
        }
        I(ec, function () {
          this.b = -1;
        });
        for (var nc = 64, ic = nc - 1, rc = [], oc = 0; oc < ic; oc++)
          rc[oc] = 0;
        var ac = X(128, rc);
        function sc(t) {
          for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
            (n[i++] =
              (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
              (r = 4 * i);
          for (e = 16; e < 64; e++) {
            (r = 0 | n[e - 15]), (i = 0 | n[e - 2]);
            var o =
                ((0 | n[e - 16]) +
                  (((r >>> 7) | (r << 25)) ^
                    ((r >>> 18) | (r << 14)) ^
                    (r >>> 3))) |
                0,
              a =
                ((0 | n[e - 7]) +
                  (((i >>> 17) | (i << 15)) ^
                    ((i >>> 19) | (i << 13)) ^
                    (i >>> 10))) |
                0;
            n[e] = (o + a) | 0;
          }
          (i = 0 | t.a[0]), (r = 0 | t.a[1]);
          var s = 0 | t.a[2],
            u = 0 | t.a[3],
            c = 0 | t.a[4],
            h = 0 | t.a[5],
            l = 0 | t.a[6];
          for (o = 0 | t.a[7], e = 0; e < 64; e++) {
            var f =
              ((((i >>> 2) | (i << 30)) ^
                ((i >>> 13) | (i << 19)) ^
                ((i >>> 22) | (i << 10))) +
                ((i & r) ^ (i & s) ^ (r & s))) |
              0;
            (a =
              ((o =
                (o +
                  (((c >>> 6) | (c << 26)) ^
                    ((c >>> 11) | (c << 21)) ^
                    ((c >>> 25) | (c << 7)))) |
                0) +
                (((a = ((a = (c & h) ^ (~c & l)) + (0 | Zu[e])) | 0) +
                  (0 | n[e])) |
                  0)) |
              0),
              (o = l),
              (l = h),
              (h = c),
              (c = (u + a) | 0),
              (u = s),
              (s = r),
              (r = i),
              (i = (a + f) | 0);
          }
          (t.a[0] = (t.a[0] + i) | 0),
            (t.a[1] = (t.a[1] + r) | 0),
            (t.a[2] = (t.a[2] + s) | 0),
            (t.a[3] = (t.a[3] + u) | 0),
            (t.a[4] = (t.a[4] + c) | 0),
            (t.a[5] = (t.a[5] + h) | 0),
            (t.a[6] = (t.a[6] + l) | 0),
            (t.a[7] = (t.a[7] + o) | 0);
        }
        function uc(t, e, n) {
          void 0 === n && (n = e.length);
          var i = 0,
            r = t.c;
          if ('string' == typeof e)
            for (; i < n; )
              (t.f[r++] = e.charCodeAt(i++)), r == t.b && (sc(t), (r = 0));
          else {
            if (!p(e)) throw Error('message must be string or array');
            for (; i < n; ) {
              var o = e[i++];
              if (!('number' == typeof o && 0 <= o && o <= 255 && o == (0 | o)))
                throw Error('message must be a byte array');
              (t.f[r++] = o), r == t.b && (sc(t), (r = 0));
            }
          }
          (t.c = r), (t.g += n);
        }
        ec.prototype.reset = function () {
          (this.g = this.c = 0),
            (this.a = l.Int32Array ? new Int32Array(this.h) : J(this.h));
        };
        var cc = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
        function hc() {
          ec.call(this, 8, lc);
        }
        I(hc, ec);
        var lc = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ];
        function fc(t, e, n, i, r, o) {
          (this.m = t),
            (this.i = e),
            (this.l = n),
            (this.v = i || null),
            (this.u = r || null),
            (this.s = o),
            (this.h = e + ':' + n),
            (this.A = new tc()),
            (this.g = new $u(this.h)),
            (this.f = null),
            (this.b = []),
            (this.a = this.c = null);
        }
        function dc(t) {
          return new E('invalid-cordova-configuration', t);
        }
        function pc(t) {
          var e = new hc();
          uc(e, t), (t = []);
          var n = 8 * e.g;
          e.c < 56 ? uc(e, ac, 56 - e.c) : uc(e, ac, e.b - (e.c - 56));
          for (var i = 63; 56 <= i; i--) (e.f[i] = 255 & n), (n /= 256);
          for (sc(e), i = n = 0; i < e.i; i++)
            for (var r = 24; 0 <= r; r -= 8) t[n++] = (e.a[i] >> r) & 255;
          return H(t, function (t) {
            return 1 < (t = t.toString(16)).length ? t : '0' + t;
          }).join('');
        }
        function vc(t, e) {
          for (var n = 0; n < t.b.length; n++)
            try {
              t.b[n](e);
            } catch (t) {}
        }
        function mc(s) {
          return (
            s.f ||
              (s.f = s.la().then(function () {
                return new de(function (n) {
                  function e(i) {
                    (t = !0),
                      a && a.cancel(),
                      gc(r).then(function (t) {
                        var e,
                          n = o;
                        t &&
                          i &&
                          i.url &&
                          ((e = null),
                          -1 != (n = Yr(i.url)).indexOf('/__/auth/callback') &&
                            (e = (e =
                              'object' ==
                              typeof (e = Ni(
                                On((e = Cn(n)), 'firebaseError') || null
                              ))
                                ? A(e)
                                : null)
                              ? new Ro(t.c, t.b, null, null, e, null, t.S())
                              : new Ro(t.c, t.b, n, t.f, null, null, t.S())),
                          (n = e || o)),
                          vc(r, n);
                      });
                  }
                  var r, o, t, a, i;
                  s.Ea(function t(e) {
                    return n(e), s.Ra(t), !1;
                  }),
                    (r = s),
                    (o = new Ro(
                      'unknown',
                      null,
                      null,
                      null,
                      new E('no-auth-event')
                    )),
                    (t = !1),
                    (a = gn(500).then(function () {
                      return gc(r).then(function () {
                        t || vc(r, o);
                      });
                    })),
                    (i = l.handleOpenURL),
                    (l.handleOpenURL = function (t) {
                      if (
                        (0 ==
                          t
                            .toLowerCase()
                            .indexOf(
                              yi('BuildInfo.packageName', l).toLowerCase() +
                                '://'
                            ) && e({ url: t }),
                        'function' == typeof i)
                      )
                        try {
                          i(t);
                        } catch (t) {
                          console.error(t);
                        }
                    }),
                    (xo = xo || new Po()),
                    (function (t) {
                      var n = xo;
                      n.a.push(t),
                        n.b ||
                          ((n.b = function (t) {
                            for (var e = 0; e < n.a.length; e++) n.a[e](t);
                          }),
                          'function' ==
                            typeof (t = yi('universalLinks.subscribe', l)) &&
                            t(null, n.b));
                    })(e);
                });
              })),
            s.f
          );
        }
        function gc(e) {
          var t,
            n = null;
          return (t = e.g).b
            .get(Qu, t.a)
            .then(Do)
            .then(function (t) {
              return (n = t), Yu((t = e.g).b, Qu, t.a);
            })
            .then(function () {
              return n;
            });
        }
        function bc(t) {
          (this.a = t), (this.b = Wu());
        }
        ((t = fc.prototype).la = function () {
          return this.Ia
            ? this.Ia
            : (this.Ia = (ui(void 0)
                ? si().then(function () {
                    return new de(function (t, e) {
                      var n = l.document,
                        i = setTimeout(function () {
                          e(Error('Cordova framework is not ready.'));
                        }, 1e3);
                      n.addEventListener(
                        'deviceready',
                        function () {
                          clearTimeout(i), t();
                        },
                        !1
                      );
                    });
                  })
                : Ie(
                    Error('Cordova must run in an Android or iOS file scheme.')
                  )
              ).then(
                function () {
                  if ('function' != typeof yi('universalLinks.subscribe', l))
                    throw dc(
                      'cordova-universal-links-plugin-fix is not installed'
                    );
                  if (void 0 === yi('BuildInfo.packageName', l))
                    throw dc('cordova-plugin-buildinfo is not installed');
                  if (
                    'function' !=
                    typeof yi('cordova.plugins.browsertab.openUrl', l)
                  )
                    throw dc('cordova-plugin-browsertab is not installed');
                  if ('function' != typeof yi('cordova.InAppBrowser.open', l))
                    throw dc('cordova-plugin-inappbrowser is not installed');
                },
                function () {
                  throw new E('cordova-not-ready');
                }
              ));
        }),
          (t.Nb = function (t, e) {
            return (
              e(new E('operation-not-supported-in-this-environment')), we()
            );
          }),
          (t.Lb = function () {
            return Ie(new E('operation-not-supported-in-this-environment'));
          }),
          (t.Zb = function () {
            return !1;
          }),
          (t.Wb = function () {
            return !0;
          }),
          (t.Sb = function () {
            return !0;
          }),
          (t.Mb = function (t, e, n, i) {
            if (this.c) return Ie(new E('redirect-operation-pending'));
            var r = this,
              o = l.document,
              a = null,
              s = null,
              u = null,
              c = null;
            return (this.c = we()
              .then(function () {
                return Co(e), mc(r);
              })
              .then(function () {
                return (function (n, t, e, i, r) {
                  var o = (function () {
                      for (var t = 20, e = []; 0 < t; )
                        e.push(
                          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                            Math.floor(62 * Math.random())
                          )
                        ),
                          t--;
                      return e.join('');
                    })(),
                    a = new Ro(t, i, null, o, new E('no-auth-event'), null, r),
                    s = yi('BuildInfo.packageName', l);
                  if ('string' != typeof s)
                    throw new E('invalid-cordova-configuration');
                  var u = yi('BuildInfo.displayName', l),
                    c = {};
                  if (
                    bi()
                      .toLowerCase()
                      .match(/iphone|ipad|ipod/)
                  )
                    c.ibi = s;
                  else {
                    if (
                      !bi()
                        .toLowerCase()
                        .match(/android/)
                    )
                      return Ie(
                        new E('operation-not-supported-in-this-environment')
                      );
                    c.apn = s;
                  }
                  u && (c.appDisplayName = u), (o = pc(o)), (c.sessionId = o);
                  var h = cu(n.m, n.i, n.l, t, e, null, i, n.v, c, n.u, r, n.s);
                  return n
                    .la()
                    .then(function () {
                      var t = n.h;
                      return n.A.a.set(Qu, a.w(), t);
                    })
                    .then(function () {
                      var t = yi('cordova.plugins.browsertab.isAvailable', l);
                      if ('function' != typeof t)
                        throw new E('invalid-cordova-configuration');
                      var e = null;
                      t(function (t) {
                        if (t) {
                          if (
                            'function' !=
                            typeof (e = yi(
                              'cordova.plugins.browsertab.openUrl',
                              l
                            ))
                          )
                            throw new E('invalid-cordova-configuration');
                          e(h);
                        } else {
                          if (
                            'function' !=
                            typeof (e = yi('cordova.InAppBrowser.open', l))
                          )
                            throw new E('invalid-cordova-configuration');
                          (t = bi()),
                            (n.a = e(
                              h,
                              t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                ? '_blank'
                                : '_system',
                              'location=yes'
                            ));
                        }
                      });
                    });
                })(r, t, e, n, i);
              })
              .then(function () {
                return new de(function (e, t) {
                  (s = function () {
                    var t = yi('cordova.plugins.browsertab.close', l);
                    return (
                      e(),
                      'function' == typeof t && t(),
                      r.a &&
                        'function' == typeof r.a.close &&
                        (r.a.close(), (r.a = null)),
                      !1
                    );
                  }),
                    r.Ea(s),
                    (u = function () {
                      a =
                        a ||
                        gn(2e3).then(function () {
                          t(new E('redirect-cancelled-by-user'));
                        });
                    }),
                    (c = function () {
                      Di() && u();
                    }),
                    o.addEventListener('resume', u, !1),
                    bi()
                      .toLowerCase()
                      .match(/android/) ||
                      o.addEventListener('visibilitychange', c, !1);
                }).o(function (t) {
                  return gc(r).then(function () {
                    throw t;
                  });
                });
              })
              .na(function () {
                u && o.removeEventListener('resume', u, !1),
                  c && o.removeEventListener('visibilitychange', c, !1),
                  a && a.cancel(),
                  s && r.Ra(s),
                  (r.c = null);
              }));
          }),
          (t.Ea = function (e) {
            this.b.push(e),
              mc(this).o(function (t) {
                'auth/invalid-cordova-configuration' === t.code &&
                  ((t = new Ro(
                    'unknown',
                    null,
                    null,
                    null,
                    new E('no-auth-event')
                  )),
                  e(t));
              });
          }),
          (t.Ra = function (e) {
            W(this.b, function (t) {
              return t == e;
            });
          });
        var yc = { name: 'pendingRedirect', D: 'session' };
        function wc(t) {
          return Yu(t.b, yc, t.a);
        }
        function Ic(t, e, n, i) {
          (this.i = {}),
            (this.u = 0),
            (this.O = t),
            (this.m = e),
            (this.v = n),
            (this.G = i),
            (this.h = []),
            (this.f = !1),
            (this.l = b(this.s, this)),
            (this.b = new Mc()),
            (this.A = new qc()),
            (this.g = new bc(Lc(this.m, this.v))),
            (this.c = {}),
            (this.c.unknown = this.b),
            (this.c.signInViaRedirect = this.b),
            (this.c.linkViaRedirect = this.b),
            (this.c.reauthViaRedirect = this.b),
            (this.c.signInViaPopup = this.A),
            (this.c.linkViaPopup = this.A),
            (this.c.reauthViaPopup = this.A),
            (this.a = Tc(this.O, this.m, this.v, k, this.G));
        }
        function Tc(t, e, n, i, r) {
          var o = Zl.default.SDK_VERSION || null;
          return new (ui() ? fc : ou)(t, e, n, o, i, r);
        }
        function Ec(e) {
          e.f || ((e.f = !0), e.a.Ea(e.l));
          var n = e.a;
          return e.a.la().o(function (t) {
            throw (e.a == n && e.reset(), t);
          });
        }
        function Ac(n) {
          n.a.Wb() &&
            Ec(n).o(function (t) {
              var e = new Ro(
                'unknown',
                null,
                null,
                null,
                new E('operation-not-supported-in-this-environment')
              );
              Cc(t) && n.s(e);
            }),
            n.a.Sb() || jc(n.b);
        }
        function kc(n, t) {
          G(n.h, t) || n.h.push(t),
            n.f ||
              (t = n.g).b
                .get(yc, t.a)
                .then(function (t) {
                  return 'pending' == t;
                })
                .then(function (t) {
                  t
                    ? wc(n.g).then(function () {
                        Ec(n).o(function (t) {
                          var e = new Ro(
                            'unknown',
                            null,
                            null,
                            null,
                            new E('operation-not-supported-in-this-environment')
                          );
                          Cc(t) && n.s(e);
                        });
                      })
                    : Ac(n);
                })
                .o(function () {
                  Ac(n);
                });
        }
        function Sc(t, e) {
          W(t.h, function (t) {
            return t == e;
          });
        }
        (Ic.prototype.reset = function () {
          (this.f = !1),
            this.a.Ra(this.l),
            (this.a = Tc(this.O, this.m, this.v, null, this.G)),
            (this.i = {});
        }),
          (Ic.prototype.s = function (t) {
            if (!t) throw new E('invalid-auth-event');
            if (
              (6e5 <= w() - this.u && ((this.i = {}), (this.u = 0)),
              t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
            )
              return !1;
            for (var e = !1, n = 0; n < this.h.length; n++) {
              var i = this.h[n];
              if (i.Eb(t.c, t.b)) {
                (e = this.c[t.c]) &&
                  (e.h(t, i),
                  t &&
                    (t.f || t.b) &&
                    ((this.i[t.getUid()] = !0), (this.u = w()))),
                  (e = !0);
                break;
              }
            }
            return jc(this.b), e;
          });
        var Nc = new Ri(2e3, 1e4),
          _c = new Ri(3e4, 6e4);
        function Oc(t, e, n, i, r, o, a) {
          return t.a.Lb(
            e,
            n,
            i,
            function () {
              t.f || ((t.f = !0), t.a.Ea(t.l));
            },
            function () {
              t.reset();
            },
            r,
            o,
            a
          );
        }
        function Cc(t) {
          return !(!t || 'auth/cordova-not-ready' != t.code);
        }
        function Rc(e, t, n, i, r) {
          var o, a;
          return (a = e.g).b.set(yc, 'pending', a.a).then(function () {
            return e.a
              .Mb(t, n, i, r)
              .o(function (t) {
                if (Cc(t))
                  throw new E('operation-not-supported-in-this-environment');
                return (
                  (o = t),
                  wc(e.g).then(function () {
                    throw o;
                  })
                );
              })
              .then(function () {
                return e.a.Zb()
                  ? new de(function () {})
                  : wc(e.g)
                      .then(function () {
                        return e.qa();
                      })
                      .then(function () {})
                      .o(function () {});
              });
          });
        }
        function Dc(t, e, n, i, r) {
          return t.a.Nb(
            i,
            function (t) {
              e.ma(n, null, t, r);
            },
            Nc.get()
          );
        }
        Ic.prototype.qa = function () {
          return this.b.qa();
        };
        var Pc = {};
        function Lc(t, e, n) {
          return (t = t + ':' + e), n && (t = t + ':' + n.url), t;
        }
        function xc(t, e, n, i) {
          var r = Lc(e, n, i);
          return Pc[r] || (Pc[r] = new Ic(t, e, n, i)), Pc[r];
        }
        function Mc() {
          (this.b = null),
            (this.f = []),
            (this.c = []),
            (this.a = null),
            (this.i = this.g = !1);
        }
        function jc(t) {
          t.g || ((t.g = !0), Fc(t, !1, null, null));
        }
        function Uc(t) {
          t.g && !t.i && Fc(t, !1, null, null);
        }
        function Vc(t, e) {
          if (
            ((t.b = function () {
              return we(e);
            }),
            t.f.length)
          )
            for (var n = 0; n < t.f.length; n++) t.f[n](e);
        }
        function Fc(t, e, n, i) {
          e
            ? i
              ? (function (t, e) {
                  if (
                    ((t.b = function () {
                      return Ie(e);
                    }),
                    t.c.length)
                  )
                    for (var n = 0; n < t.c.length; n++) t.c[n](e);
                })(t, i)
              : Vc(t, n)
            : Vc(t, { user: null }),
            (t.f = []),
            (t.c = []);
        }
        function qc() {}
        function Hc() {
          (this.hb = !1),
            Object.defineProperty(this, 'appVerificationDisabled', {
              get: function () {
                return this.hb;
              },
              set: function (t) {
                this.hb = t;
              },
              enumerable: !1
            });
        }
        function Kc(t, e) {
          (this.a = e), Fi(this, 'verificationId', t);
        }
        function Gc(t, e, n, i) {
          return new No(t).eb(e, n).then(function (t) {
            return new Kc(t, i);
          });
        }
        function Bc(t) {
          var e = xr(t);
          if (!(e && e.exp && e.auth_time && e.iat))
            throw new E(
              'internal-error',
              'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
            );
          qi(this, {
            token: t,
            expirationTime: Li(1e3 * e.exp),
            authTime: Li(1e3 * e.auth_time),
            issuedAtTime: Li(1e3 * e.iat),
            signInProvider:
              e.firebase && e.firebase.sign_in_provider
                ? e.firebase.sign_in_provider
                : null,
            signInSecondFactor:
              e.firebase && e.firebase.sign_in_second_factor
                ? e.firebase.sign_in_second_factor
                : null,
            claims: e
          });
        }
        function Wc(t, e, n) {
          var i = e && e[Jc];
          if (!i)
            throw new E(
              'argument-error',
              'Internal assert: Invalid MultiFactorResolver'
            );
          (this.a = t),
            (this.f = ht(e)),
            (this.g = n),
            (this.c = new zr(null, i)),
            (this.b = []);
          var r = this;
          F(e[Xc] || [], function (t) {
            (t = Bi(t)) && r.b.push(t);
          }),
            Fi(this, 'auth', this.a),
            Fi(this, 'session', this.c),
            Fi(this, 'hints', this.b);
        }
        (Mc.prototype.reset = function () {
          (this.b = null), this.a && (this.a.cancel(), (this.a = null));
        }),
          (Mc.prototype.h = function (t, e) {
            var n, i, r, o;
            t
              ? (this.reset(),
                (this.g = !0),
                (n = t.c),
                (i = t.b),
                (r = t.a && 'auth/web-storage-unsupported' == t.a.code),
                (o =
                  t.a &&
                  'auth/operation-not-supported-in-this-environment' ==
                    t.a.code),
                (this.i = !(!r && !o)),
                'unknown' != n || r || o
                  ? t.a
                    ? (Fc(this, !0, null, t.a), we())
                    : e.Fa(n, i)
                    ? (function (e, t, n) {
                        n = n.Fa(t.c, t.b);
                        var i = t.g,
                          r = t.f,
                          o = t.i,
                          a = t.S(),
                          s = !!t.c.match(/Redirect$/);
                        n(i, r, a, o)
                          .then(function (t) {
                            Fc(e, s, t, null);
                          })
                          .o(function (t) {
                            Fc(e, s, null, t);
                          });
                      })(this, t, e)
                    : Ie(new E('invalid-auth-event'))
                  : (Fc(this, !1, null, null), we()))
              : Ie(new E('invalid-auth-event'));
          }),
          (Mc.prototype.qa = function () {
            var r = this;
            return new de(function (t, e) {
              var n, i;
              r.b
                ? r.b().then(t, e)
                : (r.f.push(t),
                  r.c.push(e),
                  (n = r),
                  (i = new E('timeout')),
                  n.a && n.a.cancel(),
                  (n.a = gn(_c.get()).then(function () {
                    n.b || ((n.g = !0), Fc(n, !0, null, i));
                  })));
            });
          }),
          (qc.prototype.h = function (t, e) {
            var n, i, r, o, a;
            t
              ? ((n = t.c),
                (i = t.b),
                t.a
                  ? (e.ma(t.c, null, t.a, t.b), we())
                  : e.Fa(n, i)
                  ? ((r = e),
                    (o = (t = t).b),
                    (a = t.c),
                    r
                      .Fa(a, o)(t.g, t.f, t.S(), t.i)
                      .then(function (t) {
                        r.ma(a, t, null, o);
                      })
                      .o(function (t) {
                        r.ma(a, null, t, o);
                      }))
                  : Ie(new E('invalid-auth-event')))
              : Ie(new E('invalid-auth-event'));
          }),
          (Kc.prototype.confirm = function (t) {
            return (t = _o(this.verificationId, t)), this.a(t);
          });
        var Xc = 'mfaInfo',
          Jc = 'mfaPendingCredential';
        function Yc(t, e, n, i) {
          E.call(this, 'multi-factor-auth-required', i, e),
            (this.b = new Wc(t, e, n)),
            Fi(this, 'resolver', this.b);
        }
        function zc(t, e, n) {
          if (
            t &&
            m(t.serverResponse) &&
            'auth/multi-factor-auth-required' === t.code
          )
            try {
              return new Yc(e, t.serverResponse, n, t.message);
            } catch (t) {}
          return null;
        }
        function $c() {}
        function Zc(t) {
          Fi(this, 'factorId', t.fa), (this.a = t);
        }
        function Qc(t) {
          if ((Zc.call(this, t), this.a.fa != No.PROVIDER_ID))
            throw new E(
              'argument-error',
              'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential'
            );
        }
        function th(t, e) {
          for (var n in (qe.call(this, t), e)) this[n] = e[n];
        }
        function eh(t, e) {
          (this.a = t),
            (this.b = []),
            (this.c = b(this.xc, this)),
            Qe(this.a, 'userReloaded', this.c);
          var i = [];
          e &&
            e.multiFactor &&
            e.multiFactor.enrolledFactors &&
            F(e.multiFactor.enrolledFactors, function (t) {
              var e = null,
                n = {};
              if (t) {
                t.uid && (n[Ji] = t.uid),
                  t.displayName && (n[Wi] = t.displayName),
                  t.enrollmentTime &&
                    (n[Xi] = new Date(t.enrollmentTime).toISOString()),
                  t.phoneNumber && (n[Yi] = t.phoneNumber);
                try {
                  e = new zi(n);
                } catch (t) {}
                t = e;
              } else t = null;
              t && i.push(t);
            }),
            nh(this, i);
        }
        function nh(t, e) {
          (t.b = e), Fi(t, 'enrolledFactors', e);
        }
        function ih(t, e, n) {
          if (
            ((this.h = t),
            (this.i = e),
            (this.g = n),
            (this.c = 3e4),
            (this.f = 96e4),
            (this.b = null),
            (this.a = this.c),
            this.f < this.c)
          )
            throw Error(
              'Proactive refresh lower bound greater than upper bound!'
            );
        }
        function rh(t, e) {
          return e
            ? ((t.a = t.c), t.g())
            : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e);
        }
        function oh(t) {
          (this.c = t), (this.b = this.a = null);
        }
        function ah(t) {
          return (t.b && 1e3 * t.b.c) || 0;
        }
        function sh(t, e) {
          var n = e.refreshToken;
          (t.b = Lr(e[Ka] || '')), (t.a = n);
        }
        function uh(e, t) {
          return (
            (i = e.c),
            (r = t),
            new de(function (e, n) {
              ('refresh_token' == r.grant_type && r.refresh_token) ||
              ('authorization_code' == r.grant_type && r.code)
                ? Za(
                    i,
                    i.l + '?key=' + encodeURIComponent(i.c),
                    function (t) {
                      t
                        ? t.error
                          ? n(zs(t))
                          : t.access_token && t.refresh_token
                          ? e(t)
                          : n(new E('internal-error'))
                        : n(new E('network-request-failed'));
                    },
                    'POST',
                    Hn(r).toString(),
                    i.g,
                    i.v.get()
                  )
                : n(new E('internal-error'));
            })
              .then(function (t) {
                return (
                  (e.b = Lr(t.access_token)),
                  (e.a = t.refresh_token),
                  { accessToken: e.b.toString(), refreshToken: e.a }
                );
              })
              .o(function (t) {
                throw ('auth/user-token-expired' == t.code && (e.a = null), t);
              })
          );
          var i, r;
        }
        function ch(t, e) {
          (this.a = t || null),
            (this.b = e || null),
            qi(this, {
              lastSignInTime: Li(e || null),
              creationTime: Li(t || null)
            });
        }
        function hh(t, e, n, i, r, o) {
          qi(this, {
            uid: t,
            displayName: i || null,
            photoURL: r || null,
            email: n || null,
            phoneNumber: o || null,
            providerId: e
          });
        }
        function lh(t, e, n) {
          (this.G = []),
            (this.l = t.apiKey),
            (this.m = t.appName),
            (this.s = t.authDomain || null);
          var i,
            r = Zl.default.SDK_VERSION ? gi(Zl.default.SDK_VERSION) : null;
          (this.a = new qa(this.l, O(k), r)),
            t.emulatorConfig && Ya(this.a, t.emulatorConfig),
            (this.b = new oh(this.a)),
            yh(this, e[Ka]),
            sh(this.b, e),
            Fi(this, 'refreshToken', this.b.a),
            Th(this, n || {}),
            fn.call(this),
            (this.P = !1),
            this.s && Ii() && (this.i = xc(this.s, this.l, this.m)),
            (this.R = []),
            (this.f = null),
            (this.u =
              ((i = this),
              new ih(
                function () {
                  return i.I(!0);
                },
                function (t) {
                  return !(!t || 'auth/network-request-failed' != t.code);
                },
                function () {
                  var t = ah(i.b) - w() - 3e5;
                  return 0 < t ? t : 0;
                }
              ))),
            (this.$ = b(this.gb, this));
          var o = this;
          (this.pa = null),
            (this.Ba = function (t) {
              o.wa(t.h);
            }),
            (this.ba = null),
            (this.za = function (t) {
              Ya(o.a, t.c);
            }),
            (this.W = null),
            (this.X = []),
            (this.Aa = function (t) {
              ph(o, t.f);
            }),
            (this.aa = null),
            (this.N = new eh(this, n)),
            Fi(this, 'multiFactor', this.N);
        }
        function fh(t, e) {
          t.ba && nn(t.ba, 'languageCodeChanged', t.Ba),
            (t.ba = e) && Qe(e, 'languageCodeChanged', t.Ba);
        }
        function dh(t, e) {
          t.W && nn(t.W, 'emulatorConfigChanged', t.za),
            (t.W = e) && Qe(e, 'emulatorConfigChanged', t.za);
        }
        function ph(t, e) {
          (t.X = e),
            $a(
              t.a,
              Zl.default.SDK_VERSION ? gi(Zl.default.SDK_VERSION, t.X) : null
            );
        }
        function vh(t, e) {
          t.aa && nn(t.aa, 'frameworkChanged', t.Aa),
            (t.aa = e) && Qe(e, 'frameworkChanged', t.Aa);
        }
        function mh(e) {
          try {
            return Zl.default.app(e.m).auth();
          } catch (t) {
            throw new E(
              'internal-error',
              "No firebase.auth.Auth instance is available for the Firebase App '" +
                e.m +
                "'!"
            );
          }
        }
        function gh(t) {
          t.A ||
            t.u.b ||
            (t.u.start(),
            nn(t, 'tokenChanged', t.$),
            Qe(t, 'tokenChanged', t.$));
        }
        function bh(t) {
          nn(t, 'tokenChanged', t.$), t.u.stop();
        }
        function yh(t, e) {
          (t.ya = e), Fi(t, '_lat', e);
        }
        function wh(t) {
          for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
          return Ee(e).then(function () {
            return t;
          });
        }
        function Ih(t) {
          t.i && !t.P && ((t.P = !0), kc(t.i, t));
        }
        function Th(t, e) {
          qi(t, {
            uid: e.uid,
            displayName: e.displayName || null,
            photoURL: e.photoURL || null,
            email: e.email || null,
            emailVerified: e.emailVerified || !1,
            phoneNumber: e.phoneNumber || null,
            isAnonymous: e.isAnonymous || !1,
            tenantId: e.tenantId || null,
            metadata: new ch(e.createdAt, e.lastLoginAt),
            providerData: []
          }),
            (t.a.b = t.tenantId);
        }
        function Eh() {}
        function Ah(t) {
          return we().then(function () {
            if (t.A) throw new E('app-deleted');
          });
        }
        function kh(t) {
          return H(t.providerData, function (t) {
            return t.providerId;
          });
        }
        function Sh(t, e) {
          e && (Nh(t, e.providerId), t.providerData.push(e));
        }
        function Nh(t, e) {
          W(t.providerData, function (t) {
            return t.providerId == e;
          });
        }
        function _h(t, e, n) {
          ('uid' != e || n) && t.hasOwnProperty(e) && Fi(t, e, n);
        }
        function Oh(e, t) {
          var n, i;
          e != t &&
            (qi(e, {
              uid: t.uid,
              displayName: t.displayName,
              photoURL: t.photoURL,
              email: t.email,
              emailVerified: t.emailVerified,
              phoneNumber: t.phoneNumber,
              isAnonymous: t.isAnonymous,
              tenantId: t.tenantId,
              providerData: []
            }),
            t.metadata
              ? Fi(e, 'metadata', new ch((i = t.metadata).a, i.b))
              : Fi(e, 'metadata', new ch()),
            F(t.providerData, function (t) {
              Sh(e, t);
            }),
            (n = e.b),
            (i = t.b),
            (n.b = i.b),
            (n.a = i.a),
            Fi(e, 'refreshToken', e.b.a),
            nh(e.N, t.N.b));
        }
        function Ch(r) {
          return r.I().then(function (t) {
            var e,
              n,
              i = r.isAnonymous;
            return (
              (n = t),
              Js((e = r).a, ks, { idToken: n })
                .then(b(e.Jc, e))
                .then(function () {
                  return i || _h(r, 'isAnonymous', !1), t;
                })
            );
          });
        }
        function Rh(t, e) {
          e[Ka] &&
            t.ya != e[Ka] &&
            (sh(t.b, e),
            t.dispatchEvent(new th('tokenChanged')),
            yh(t, e[Ka]),
            _h(t, 'refreshToken', t.b.a));
        }
        function Dh(t, e) {
          return Ch(t).then(function () {
            if (G(kh(t), e))
              return wh(t).then(function () {
                throw new E('provider-already-linked');
              });
          });
        }
        function Ph(t, e, n) {
          return Hi({
            user: t,
            credential: Oo(e),
            additionalUserInfo: (e = Fr(e)),
            operationType: n
          });
        }
        function Lh(t, e) {
          return (
            Rh(t, e),
            t.reload().then(function () {
              return t;
            })
          );
        }
        function xh(n, i, t, e, r) {
          if (!Ii())
            return Ie(new E('operation-not-supported-in-this-environment'));
          if (n.f && !r) return Ie(n.f);
          var o = Vr(t.providerId),
            a = _i(n.uid + ':::'),
            s = null;
          (!Ai() || ci()) &&
            n.s &&
            t.isOAuthProvider &&
            (s = cu(
              n.s,
              n.l,
              n.m,
              i,
              t,
              null,
              a,
              Zl.default.SDK_VERSION || null,
              null,
              null,
              n.tenantId
            ));
          var u = ri(s, o && o.ua, o && o.ta);
          return (
            (e = e()
              .then(function () {
                if ((jh(n), !r)) return n.I().then(function () {});
              })
              .then(function () {
                return Oc(n.i, u, i, t, a, !!s, n.tenantId);
              })
              .then(function () {
                return new de(function (t, e) {
                  n.ma(i, null, new E('cancelled-popup-request'), n.h || null),
                    (n.g = t),
                    (n.O = e),
                    (n.h = a),
                    (n.c = Dc(n.i, n, i, u, a));
                });
              })
              .then(function (t) {
                return u && ii(u), t ? Hi(t) : null;
              })
              .o(function (t) {
                throw (u && ii(u), t);
              })),
            Uh(n, e, r)
          );
        }
        function Mh(e, t, n, i, r) {
          if (!Ii())
            return Ie(new E('operation-not-supported-in-this-environment'));
          if (e.f && !r) return Ie(e.f);
          var o = null,
            a = _i(e.uid + ':::');
          return (
            (i = i()
              .then(function () {
                if ((jh(e), !r)) return e.I().then(function () {});
              })
              .then(function () {
                return (e.ga = a), wh(e);
              })
              .then(function (t) {
                return e.ha && (t = (t = e.ha).b.set(qh, e.w(), t.a)), t;
              })
              .then(function () {
                return Rc(e.i, t, n, a, e.tenantId);
              })
              .o(function (t) {
                if (((o = t), e.ha)) return Hh(e.ha);
                throw o;
              })
              .then(function () {
                if (o) throw o;
              })),
            Uh(e, i, r)
          );
        }
        function jh(t) {
          if (!t.i || !t.P) {
            if (t.i && !t.P) throw new E('internal-error');
            throw new E('auth-domain-config-required');
          }
        }
        function Uh(n, t, e) {
          var i,
            r =
              ((t = t),
              (e = e),
              (i = n).f && !e
                ? (t.cancel(), Ie(i.f))
                : t.o(function (t) {
                    throw (
                      (!t ||
                        ('auth/user-disabled' != t.code &&
                          'auth/user-token-expired' != t.code) ||
                        (i.f || i.dispatchEvent(new th('userInvalidated')),
                        (i.f = t)),
                      t)
                    );
                  }));
          return (
            n.G.push(r),
            r.na(function () {
              B(n.G, r);
            }),
            r.o(function (t) {
              var e = null;
              throw (
                (t &&
                  'auth/multi-factor-auth-required' === t.code &&
                  (e = zc(t.w(), mh(n), b(n.ic, n))),
                e || t)
              );
            })
          );
        }
        function Vh(t) {
          if (!t.apiKey) return null;
          var e = {
              apiKey: t.apiKey,
              authDomain: t.authDomain,
              appName: t.appName,
              emulatorConfig: t.emulatorConfig
            },
            n = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
          (n[Ka] = t.stsTokenManager.accessToken),
            (n.refreshToken = t.stsTokenManager.refreshToken || null);
          var i = new lh(e, n, t);
          return (
            t.providerData &&
              F(t.providerData, function (t) {
                t && Sh(i, Hi(t));
              }),
            t.redirectEventId && (i.ga = t.redirectEventId),
            i
          );
        }
        function Fh(t) {
          (this.a = t), (this.b = Wu());
        }
        (Wc.prototype.Qc = function (t) {
          var n = this;
          return t.rb(this.a.a, this.c).then(function (t) {
            var e = ht(n.f);
            return delete e[Xc], delete e[Jc], ft(e, t), n.g(e);
          });
        }),
          I(Yc, E),
          ($c.prototype.rb = function (t, e, n) {
            return e.type == $r
              ? ((o = this),
                (a = t),
                (s = n),
                e.Ha().then(function (t) {
                  return (
                    (t = { idToken: t }),
                    void 0 !== s && (t.displayName = s),
                    ft(t, { phoneVerificationInfo: So(o.a) }),
                    Js(a, Es, t)
                  );
                }))
              : ((i = this),
                (r = t),
                e.Ha().then(function (t) {
                  return (
                    ft((t = { mfaPendingCredential: t }), {
                      phoneVerificationInfo: So(i.a)
                    }),
                    Js(r, As, t)
                  );
                }));
            var i, r, o, a, s;
          }),
          I(Zc, $c),
          I(Qc, Zc),
          I(th, qe),
          ((t = eh.prototype).xc = function (t) {
            var e;
            nh(
              this,
              ((t = t.gd),
              (e = []),
              F(t.mfaInfo || [], function (t) {
                (t = Bi(t)) && e.push(t);
              }),
              e)
            );
          }),
          (t.Qb = function () {
            return this.a.I().then(function (t) {
              return new zr(t, null);
            });
          }),
          (t.ec = function (e, n) {
            var i = this,
              r = this.a.a;
            return this.Qb()
              .then(function (t) {
                return e.rb(r, t, n);
              })
              .then(function (t) {
                return Rh(i.a, t), i.a.reload();
              });
          }),
          (t.ad = function (t) {
            var n = this,
              i = 'string' == typeof t ? t : t.uid,
              e = this.a.a;
            return this.a
              .I()
              .then(function (t) {
                return Js(e, Xs, { idToken: t, mfaEnrollmentId: i });
              })
              .then(function (t) {
                var e = q(n.b, function (t) {
                  return t.uid != i;
                });
                return (
                  nh(n, e),
                  Rh(n.a, t),
                  n.a.reload().o(function (t) {
                    if ('auth/user-token-expired' != t.code) throw t;
                  })
                );
              });
          }),
          (t.w = function () {
            return {
              multiFactor: {
                enrolledFactors: H(this.b, function (t) {
                  return t.w();
                })
              }
            };
          }),
          (ih.prototype.start = function () {
            (this.a = this.c),
              (function e(n, t) {
                n.stop();
                n.b = gn(rh(n, t))
                  .then(function () {
                    return (
                      (e = l.document),
                      (n = null),
                      Di() || !e
                        ? we()
                        : new de(function (t) {
                            (n = function () {
                              Di() &&
                                (e.removeEventListener(
                                  'visibilitychange',
                                  n,
                                  !1
                                ),
                                t());
                            }),
                              e.addEventListener('visibilitychange', n, !1);
                          }).o(function (t) {
                            throw (
                              (e.removeEventListener('visibilitychange', n, !1),
                              t)
                            );
                          })
                    );
                    var e, n;
                  })
                  .then(function () {
                    return n.h();
                  })
                  .then(function () {
                    e(n, !0);
                  })
                  .o(function (t) {
                    n.i(t) && e(n, !1);
                  });
              })(this, !0);
          }),
          (ih.prototype.stop = function () {
            this.b && (this.b.cancel(), (this.b = null));
          }),
          (oh.prototype.w = function () {
            return {
              apiKey: this.c.c,
              refreshToken: this.a,
              accessToken: this.b && this.b.toString(),
              expirationTime: ah(this)
            };
          }),
          (oh.prototype.getToken = function (t) {
            return (
              (t = !!t),
              this.b && !this.a
                ? Ie(new E('user-token-expired'))
                : t || !this.b || w() > ah(this) - 3e4
                ? this.a
                  ? uh(this, {
                      grant_type: 'refresh_token',
                      refresh_token: this.a
                    })
                  : we(null)
                : we({ accessToken: this.b.toString(), refreshToken: this.a })
            );
          }),
          (ch.prototype.w = function () {
            return { lastLoginAt: this.b, createdAt: this.a };
          }),
          I(lh, fn),
          (lh.prototype.wa = function (t) {
            (this.pa = t), Ja(this.a, t);
          }),
          (lh.prototype.ka = function () {
            return this.pa;
          }),
          (lh.prototype.Ga = function () {
            return J(this.X);
          }),
          (lh.prototype.gb = function () {
            this.u.b && (this.u.stop(), this.u.start());
          }),
          Fi(lh.prototype, 'providerId', 'firebase'),
          ((t = lh.prototype).reload = function () {
            var t = this;
            return Uh(
              this,
              Ah(this).then(function () {
                return Ch(t)
                  .then(function () {
                    return wh(t);
                  })
                  .then(Eh);
              })
            );
          }),
          (t.nc = function (t) {
            return this.I(t).then(function (t) {
              return new Bc(t);
            });
          }),
          (t.I = function (t) {
            var e = this;
            return Uh(
              this,
              Ah(this)
                .then(function () {
                  return e.b.getToken(t);
                })
                .then(function (t) {
                  if (!t) throw new E('internal-error');
                  return (
                    t.accessToken != e.ya &&
                      (yh(e, t.accessToken),
                      e.dispatchEvent(new th('tokenChanged'))),
                    _h(e, 'refreshToken', t.refreshToken),
                    t.accessToken
                  );
                })
            );
          }),
          (t.Jc = function (t) {
            if (!(t = t.users) || !t.length) throw new E('internal-error');
            Th(this, {
              uid: (t = t[0]).localId,
              displayName: t.displayName,
              photoURL: t.photoUrl,
              email: t.email,
              emailVerified: !!t.emailVerified,
              phoneNumber: t.phoneNumber,
              lastLoginAt: t.lastLoginAt,
              createdAt: t.createdAt,
              tenantId: t.tenantId
            });
            for (
              var e,
                n =
                  (e = (e = t).providerUserInfo) && e.length
                    ? H(e, function (t) {
                        return new hh(
                          t.rawId,
                          t.providerId,
                          t.email,
                          t.displayName,
                          t.photoUrl,
                          t.phoneNumber
                        );
                      })
                    : [],
                i = 0;
              i < n.length;
              i++
            )
              Sh(this, n[i]);
            _h(
              this,
              'isAnonymous',
              !(
                (this.email && t.passwordHash) ||
                (this.providerData && this.providerData.length)
              )
            ),
              this.dispatchEvent(new th('userReloaded', { gd: t }));
          }),
          (t.Kc = function (t) {
            return (
              Ui(
                'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'
              ),
              this.sb(t)
            );
          }),
          (t.sb = function (t) {
            var e = this,
              n = null;
            return Uh(
              this,
              t
                .c(this.a, this.uid)
                .then(function (t) {
                  return (
                    Rh(e, t),
                    (n = Ph(e, t, 'reauthenticate')),
                    (e.f = null),
                    e.reload()
                  );
                })
                .then(function () {
                  return n;
                }),
              !0
            );
          }),
          (t.Bc = function (t) {
            return (
              Ui(
                'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'
              ),
              this.pb(t)
            );
          }),
          (t.pb = function (e) {
            var n = this,
              i = null;
            return Uh(
              this,
              Dh(this, e.providerId)
                .then(function () {
                  return n.I();
                })
                .then(function (t) {
                  return e.b(n.a, t);
                })
                .then(function (t) {
                  return (i = Ph(n, t, 'link')), Lh(n, t);
                })
                .then(function () {
                  return i;
                })
            );
          }),
          (t.Cc = function (t, e) {
            var n = this;
            return Uh(
              this,
              Dh(this, 'phone').then(function () {
                return Gc(mh(n), t, e, b(n.pb, n));
              })
            );
          }),
          (t.Lc = function (t, e) {
            var n = this;
            return Uh(
              this,
              we().then(function () {
                return Gc(mh(n), t, e, b(n.sb, n));
              }),
              !0
            );
          }),
          (t.Ab = function (e) {
            var n = this;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Ab(t, e);
                })
                .then(function (t) {
                  return Rh(n, t), n.reload();
                })
            );
          }),
          (t.dd = function (e) {
            var n = this;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return e.b(n.a, t);
                })
                .then(function (t) {
                  return Rh(n, t), n.reload();
                })
            );
          }),
          (t.Bb = function (e) {
            var n = this;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Bb(t, e);
                })
                .then(function (t) {
                  return Rh(n, t), n.reload();
                })
            );
          }),
          (t.Cb = function (e) {
            if (void 0 === e.displayName && void 0 === e.photoURL)
              return Ah(this);
            var n = this;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return n.a.Cb(t, {
                    displayName: e.displayName,
                    photoUrl: e.photoURL
                  });
                })
                .then(function (t) {
                  return (
                    Rh(n, t),
                    _h(n, 'displayName', t.displayName || null),
                    _h(n, 'photoURL', t.photoUrl || null),
                    F(n.providerData, function (t) {
                      'password' === t.providerId &&
                        (Fi(t, 'displayName', n.displayName),
                        Fi(t, 'photoURL', n.photoURL));
                    }),
                    wh(n)
                  );
                })
                .then(Eh)
            );
          }),
          (t.bd = function (e) {
            var n = this;
            return Uh(
              this,
              Ch(this).then(function (t) {
                return G(kh(n), e)
                  ? Js(n.a, ws, { idToken: t, deleteProvider: [e] }).then(
                      function (t) {
                        var e = {};
                        return (
                          F(t.providerUserInfo || [], function (t) {
                            e[t.providerId] = !0;
                          }),
                          F(kh(n), function (t) {
                            e[t] || Nh(n, t);
                          }),
                          e[No.PROVIDER_ID] || Fi(n, 'phoneNumber', null),
                          wh(n)
                        );
                      }
                    )
                  : wh(n).then(function () {
                      throw new E('no-such-provider');
                    });
              })
            );
          }),
          (t.delete = function () {
            var e = this;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return Js(e.a, ys, { idToken: t });
                })
                .then(function () {
                  e.dispatchEvent(new th('userDeleted'));
                })
            ).then(function () {
              for (var t = 0; t < e.G.length; t++) e.G[t].cancel('app-deleted');
              fh(e, null),
                dh(e, null),
                vh(e, null),
                (e.G = []),
                (e.A = !0),
                bh(e),
                Fi(e, 'refreshToken', null),
                e.i && Sc(e.i, e);
            });
          }),
          (t.Eb = function (t, e) {
            return !!(
              ('linkViaPopup' == t && (this.h || null) == e && this.g) ||
              ('reauthViaPopup' == t && (this.h || null) == e && this.g) ||
              ('linkViaRedirect' == t && (this.ga || null) == e) ||
              ('reauthViaRedirect' == t && (this.ga || null) == e)
            );
          }),
          (t.ma = function (t, e, n, i) {
            ('linkViaPopup' != t && 'reauthViaPopup' != t) ||
              i != (this.h || null) ||
              (n && this.O ? this.O(n) : e && !n && this.g && this.g(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.g,
              delete this.O);
          }),
          (t.Fa = function (t, e) {
            return 'linkViaPopup' == t && e == (this.h || null)
              ? b(this.Jb, this)
              : 'reauthViaPopup' == t && e == (this.h || null)
              ? b(this.Kb, this)
              : 'linkViaRedirect' == t && (this.ga || null) == e
              ? b(this.Jb, this)
              : 'reauthViaRedirect' == t && (this.ga || null) == e
              ? b(this.Kb, this)
              : null;
          }),
          (t.Dc = function (t) {
            var e = this;
            return xh(
              this,
              'linkViaPopup',
              t,
              function () {
                return Dh(e, t.providerId).then(function () {
                  return wh(e);
                });
              },
              !1
            );
          }),
          (t.Mc = function (t) {
            return xh(
              this,
              'reauthViaPopup',
              t,
              function () {
                return we();
              },
              !0
            );
          }),
          (t.Ec = function (t) {
            var e = this;
            return Mh(
              this,
              'linkViaRedirect',
              t,
              function () {
                return Dh(e, t.providerId);
              },
              !1
            );
          }),
          (t.Nc = function (t) {
            return Mh(
              this,
              'reauthViaRedirect',
              t,
              function () {
                return we();
              },
              !0
            );
          }),
          (t.Jb = function (e, n, t, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return (
              (t = this.I()
                .then(function (t) {
                  return fs(r.a, {
                    requestUri: e,
                    postBody: i,
                    sessionId: n,
                    idToken: t
                  });
                })
                .then(function (t) {
                  return (o = Ph(r, t, 'link')), Lh(r, t);
                })
                .then(function () {
                  return o;
                })),
              Uh(this, t)
            );
          }),
          (t.Kb = function (t, e, n, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return Uh(
              this,
              we()
                .then(function () {
                  return to(
                    ds(r.a, {
                      requestUri: t,
                      sessionId: e,
                      postBody: i,
                      tenantId: n
                    }),
                    r.uid
                  );
                })
                .then(function (t) {
                  return (
                    (o = Ph(r, t, 'reauthenticate')),
                    Rh(r, t),
                    (r.f = null),
                    r.reload()
                  );
                })
                .then(function () {
                  return o;
                }),
              !0
            );
          }),
          (t.tb = function (e) {
            var n = this,
              i = null;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return (i = t), void 0 === e || ct(e) ? {} : Cr(new wr(e));
                })
                .then(function (t) {
                  return n.a.tb(i, t);
                })
                .then(function (t) {
                  if (n.email != t) return n.reload();
                })
                .then(function () {})
            );
          }),
          (t.Db = function (e, n) {
            var i = this,
              r = null;
            return Uh(
              this,
              this.I()
                .then(function (t) {
                  return (r = t), void 0 === n || ct(n) ? {} : Cr(new wr(n));
                })
                .then(function (t) {
                  return i.a.Db(r, e, t);
                })
                .then(function (t) {
                  if (i.email != t) return i.reload();
                })
                .then(function () {})
            );
          }),
          (t.ic = function (t) {
            var e = null,
              n = this;
            return Uh(
              this,
              (t = to(we(t), n.uid)
                .then(function (t) {
                  return (
                    (e = Ph(n, t, 'reauthenticate')),
                    Rh(n, t),
                    (n.f = null),
                    n.reload()
                  );
                })
                .then(function () {
                  return e;
                })),
              !0
            );
          }),
          (t.toJSON = function () {
            return this.w();
          }),
          (t.w = function () {
            var e = {
              uid: this.uid,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              emailVerified: this.emailVerified,
              phoneNumber: this.phoneNumber,
              isAnonymous: this.isAnonymous,
              tenantId: this.tenantId,
              providerData: [],
              apiKey: this.l,
              appName: this.m,
              authDomain: this.s,
              stsTokenManager: this.b.w(),
              redirectEventId: this.ga || null
            };
            return (
              this.metadata && ft(e, this.metadata.w()),
              F(this.providerData, function (t) {
                e.providerData.push(
                  (function (t) {
                    var e,
                      n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    return n;
                  })(t)
                );
              }),
              ft(e, this.N.w()),
              e
            );
          });
        var qh = { name: 'redirectUser', D: 'session' };
        function Hh(t) {
          return Yu(t.b, qh, t.a);
        }
        function Kh(t) {
          var e, n, i, r;
          (this.a = t),
            (this.b = Wu()),
            (this.c = null),
            (this.f =
              ((n = Wh('local')),
              (i = Wh('session')),
              (r = Wh('none')),
              (function (n, i, r) {
                var o = Ju(i, r),
                  a = Xu(n, i.D);
                return n.get(i, r).then(function (t) {
                  var e = null;
                  try {
                    e = Ni(l.localStorage.getItem(o));
                  } catch (t) {}
                  if (e && !t)
                    return l.localStorage.removeItem(o), n.set(i, e, r);
                  e &&
                    t &&
                    'localStorage' != a.type &&
                    l.localStorage.removeItem(o);
                });
              })((e = this).b, n, e.a)
                .then(function () {
                  return e.b.get(i, e.a);
                })
                .then(function (t) {
                  return t
                    ? i
                    : e.b.get(r, e.a).then(function (t) {
                        return t
                          ? r
                          : e.b.get(n, e.a).then(function (t) {
                              return t
                                ? n
                                : e.b.get(Bh, e.a).then(function (t) {
                                    return t ? Wh(t) : n;
                                  });
                            });
                      });
                })
                .then(function (t) {
                  return (e.c = t), Gh(e, t.D);
                })
                .o(function () {
                  e.c || (e.c = n);
                }))),
            this.b.addListener(Wh('local'), this.a, b(this.g, this));
        }
        function Gh(t, e) {
          var n,
            s,
            i = [];
          for (n in Gu) Gu[n] !== e && i.push(Yu(t.b, Wh(Gu[n]), t.a));
          return (
            i.push(Yu(t.b, Bh, t.a)),
            (s = i),
            new de(function (n, e) {
              var i = s.length,
                r = [];
              if (i)
                for (
                  var t = function (t, e) {
                      i--, (r[t] = e), 0 == i && n(r);
                    },
                    o = function (t) {
                      e(t);
                    },
                    a = 0;
                  a < s.length;
                  a++
                )
                  Te(s[a], y(t, a), o);
              else n(r);
            })
          );
        }
        Kh.prototype.g = function () {
          var e = this,
            n = Wh('local');
          zh(this, function () {
            return we()
              .then(function () {
                return e.c && 'local' != e.c.D ? e.b.get(n, e.a) : null;
              })
              .then(function (t) {
                if (t)
                  return Gh(e, 'local').then(function () {
                    e.c = n;
                  });
              });
          });
        };
        var Bh = { name: 'persistence', D: 'session' };
        function Wh(t) {
          return { name: 'authUser', D: t };
        }
        function Xh(t, e) {
          return zh(t, function () {
            return t.b.set(t.c, e.w(), t.a);
          });
        }
        function Jh(t) {
          return zh(t, function () {
            return Yu(t.b, t.c, t.a);
          });
        }
        function Yh(t, e, n) {
          return zh(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return (
                t && e && (t.authDomain = e),
                t && n && (t.emulatorConfig = n),
                Vh(t || {})
              );
            });
          });
        }
        function zh(t, e) {
          return (t.f = t.f.then(e, e)), t.f;
        }
        function $h(t) {
          if (
            ((this.m = !1),
            Fi(this, 'settings', new Hc()),
            Fi(this, 'app', t),
            !al(this).options || !al(this).options.apiKey)
          )
            throw new E('invalid-api-key');
          var n, e, i, r, o, a;
          (t = Zl.default.SDK_VERSION ? gi(Zl.default.SDK_VERSION) : null),
            (this.a = new qa(
              al(this).options && al(this).options.apiKey,
              O(k),
              t
            )),
            (this.R = []),
            (this.u = []),
            (this.P = []),
            (this.ac = Zl.default.INTERNAL.createSubscribe(b(this.yc, this))),
            (this.X = void 0),
            (this.bc = Zl.default.INTERNAL.createSubscribe(b(this.zc, this))),
            rl(this, null),
            (this.l = new Kh(al(this).options.apiKey + ':' + al(this).name)),
            (this.G = new Fh(al(this).options.apiKey + ':' + al(this).name)),
            (this.$ = hl(
              this,
              ((e = al((n = this)).options.authDomain),
              (t = (function (e) {
                var t = (function (t, e) {
                  return t.b.get(qh, t.a).then(function (t) {
                    return t && e && (t.authDomain = e), Vh(t || {});
                  });
                })(e.G, al(e).options.authDomain).then(function (t) {
                  return (e.s = t) && (t.ha = e.G), Hh(e.G);
                });
                return hl(e, t);
              })(n)
                .then(function () {
                  return Yh(n.l, e, n.f);
                })
                .then(function (e) {
                  return e
                    ? ((e.ha = n.G),
                      n.s && (n.s.ga || null) == (e.ga || null)
                        ? e
                        : e
                            .reload()
                            .then(function () {
                              return Xh(n.l, e).then(function () {
                                return e;
                              });
                            })
                            .o(function (t) {
                              return 'auth/network-request-failed' == t.code
                                ? e
                                : Jh(n.l);
                            }))
                    : null;
                })
                .then(function (t) {
                  rl(n, t || null);
                })),
              hl(n, t))
            )),
            (this.i = hl(
              this,
              (i = this).$.then(function () {
                return nl(i);
              })
                .o(function () {})
                .then(function () {
                  if (!i.m) return i.pa();
                })
                .o(function () {})
                .then(function () {
                  var t;
                  i.m ||
                    ((i.ba = !0),
                    (t = i.l).b.addListener(Wh('local'), t.a, i.pa));
                })
            )),
            (this.ba = !1),
            (this.pa = b(this.Yc, this)),
            (this.Ba = b(this.da, this)),
            (this.ya = b(this.kc, this)),
            (this.za = b(this.vc, this)),
            (this.Aa = b(this.wc, this)),
            (this.b = null),
            (o = al((r = this)).options.authDomain),
            (a = al(r).options.apiKey),
            o &&
              Ii() &&
              (r.gb = r.$.then(function () {
                var t;
                if (!r.m)
                  return (
                    (r.b = xc(o, a, al(r).name, r.f)),
                    kc(r.b, r),
                    sl(r) && Ih(sl(r)),
                    r.s &&
                      (Ih(r.s),
                      (t = r.s).wa(r.ka()),
                      fh(t, r),
                      ph((t = r.s), r.N),
                      vh(t, r),
                      Ya((t = r.s).a, r.f),
                      dh(t, r),
                      (r.s = null)),
                    r.b
                  );
              })),
            (this.INTERNAL = {}),
            (this.INTERNAL.delete = b(this.delete, this)),
            (this.INTERNAL.logFramework = b(this.Fc, this)),
            (this.A = 0),
            fn.call(this),
            (t = this),
            Object.defineProperty(t, 'lc', {
              get: function () {
                return this.ka();
              },
              set: function (t) {
                this.wa(t);
              },
              enumerable: !1
            }),
            (t.aa = null),
            Object.defineProperty(t, 'ti', {
              get: function () {
                return this.S();
              },
              set: function (t) {
                this.xb(t);
              },
              enumerable: !1
            }),
            (t.W = null),
            (this.N = []),
            (this.f = null);
        }
        function Zh(t) {
          qe.call(this, 'languageCodeChanged'), (this.h = t);
        }
        function Qh(t) {
          qe.call(this, 'emulatorConfigChanged'), (this.c = t);
        }
        function tl(t) {
          qe.call(this, 'frameworkChanged'), (this.f = t);
        }
        function el(t) {
          return t.gb || Ie(new E('auth-domain-config-required'));
        }
        function nl(t) {
          if (!Ii())
            return Ie(new E('operation-not-supported-in-this-environment'));
          var e = el(t)
            .then(function () {
              return t.b.qa();
            })
            .then(function (t) {
              return t ? Hi(t) : null;
            });
          return hl(t, e);
        }
        function il(o, a) {
          var s = {};
          return (
            (s.apiKey = al(o).options.apiKey),
            (s.authDomain = al(o).options.authDomain),
            (s.appName = al(o).name),
            o.f && (s.emulatorConfig = o.f),
            o.$.then(function () {
              return (
                (t = s),
                (e = a),
                (n = o.G),
                (i = o.Ga()),
                (r = new lh(t, e)),
                n && (r.ha = n),
                i && ph(r, i),
                r.reload().then(function () {
                  return r;
                })
              );
              var t, e, n, i, r;
            })
              .then(function (t) {
                return (
                  sl(o) && t.uid == sl(o).uid
                    ? Oh(sl(o), t)
                    : (rl(o, t), Ih(t)),
                  o.da(t)
                );
              })
              .then(function () {
                cl(o);
              })
          );
        }
        function rl(t, e) {
          var n, i;
          sl(t) &&
            ((n = sl(t)),
            (i = t.Ba),
            W(n.R, function (t) {
              return t == i;
            }),
            nn(sl(t), 'tokenChanged', t.ya),
            nn(sl(t), 'userDeleted', t.za),
            nn(sl(t), 'userInvalidated', t.Aa),
            bh(sl(t))),
            e &&
              (e.R.push(t.Ba),
              Qe(e, 'tokenChanged', t.ya),
              Qe(e, 'userDeleted', t.za),
              Qe(e, 'userInvalidated', t.Aa),
              0 < t.A && gh(e)),
            Fi(t, 'currentUser', e),
            e &&
              (e.wa(t.ka()),
              fh(e, t),
              ph(e, t.N),
              vh(e, t),
              Ya(e.a, t.f),
              dh(e, t));
        }
        function ol(n, t) {
          var e = null,
            i = null;
          return hl(
            n,
            t
              .then(
                function (t) {
                  return (e = Oo(t)), (i = Fr(t)), il(n, t);
                },
                function (t) {
                  var e = null;
                  throw (
                    (t &&
                      'auth/multi-factor-auth-required' === t.code &&
                      (e = zc(t.w(), n, b(n.jc, n))),
                    e || t)
                  );
                }
              )
              .then(function () {
                return Hi({
                  user: sl(n),
                  credential: e,
                  additionalUserInfo: i,
                  operationType: 'signIn'
                });
              })
          );
        }
        function al(t) {
          return t.app;
        }
        function sl(t) {
          return t.currentUser;
        }
        function ul(t) {
          return (sl(t) && sl(t)._lat) || null;
        }
        function cl(t) {
          if (t.ba) {
            for (var e = 0; e < t.u.length; e++) t.u[e] && t.u[e](ul(t));
            if (t.X !== t.getUid() && t.P.length)
              for (t.X = t.getUid(), e = 0; e < t.P.length; e++)
                t.P[e] && t.P[e](ul(t));
          }
        }
        function hl(t, e) {
          return (
            t.R.push(e),
            e.na(function () {
              B(t.R, e);
            }),
            e
          );
        }
        function ll() {}
        function fl() {
          (this.a = {}), (this.b = 1e12);
        }
        (Kh.prototype.wb = function (e) {
          var n = null,
            i = this;
          return (
            (function (t) {
              var e = new E('invalid-persistence-type'),
                n = new E('unsupported-persistence-type');
              t: {
                for (i in Gu)
                  if (Gu[i] == t) {
                    var i = !0;
                    break t;
                  }
                i = !1;
              }
              if (!i || 'string' != typeof t) throw e;
              switch (li()) {
                case 'ReactNative':
                  if ('session' === t) throw n;
                  break;
                case 'Node':
                  if ('none' !== t) throw n;
                  break;
                case 'Worker':
                  if ('session' === t || (!Eu() && 'none' !== t)) throw n;
                  break;
                default:
                  if (!wi() && 'none' !== t) throw n;
              }
            })(e),
            zh(this, function () {
              return e != i.c.D
                ? i.b
                    .get(i.c, i.a)
                    .then(function (t) {
                      return (n = t), Gh(i, e);
                    })
                    .then(function () {
                      if (((i.c = Wh(e)), n)) return i.b.set(i.c, n, i.a);
                    })
                : we();
            })
          );
        }),
          I($h, fn),
          I(Zh, qe),
          I(Qh, qe),
          I(tl, qe),
          ((t = $h.prototype).wb = function (t) {
            return (t = this.l.wb(t)), hl(this, t);
          }),
          (t.wa = function (t) {
            this.aa === t ||
              this.m ||
              ((this.aa = t),
              Ja(this.a, this.aa),
              this.dispatchEvent(new Zh(this.ka())));
          }),
          (t.ka = function () {
            return this.aa;
          }),
          (t.ed = function () {
            var t = l.navigator;
            this.wa(
              (t &&
                ((t.languages && t.languages[0]) ||
                  t.language ||
                  t.userLanguage)) ||
                null
            );
          }),
          (t.fd = function (t) {
            if (!this.f) {
              if (!/^https?:\/\//.test(t))
                throw new E(
                  'argument-error',
                  'Emulator URL must start with a valid scheme (http:// or https://).'
                );
              Pi(
                'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
              ),
                l.document &&
                  si().then(function () {
                    var t = l.document.createElement('div');
                    (t.innerText =
                      'Running in emulator mode. Do not use with production credentials.'),
                      (t.style.position = 'fixed'),
                      (t.style.width = '100%'),
                      (t.style.backgroundColor = '#ffffff'),
                      (t.style.border = '.1em solid #000000'),
                      (t.style.color = '#ff0000'),
                      (t.style.bottom = '0px'),
                      (t.style.left = '0px'),
                      (t.style.margin = '0px'),
                      (t.style.zIndex = 1e4),
                      (t.style.textAlign = 'center'),
                      t.classList.add('firebase-emulator-warning'),
                      l.document.body.appendChild(t);
                  }),
                (this.f = { url: t }),
                (this.settings.hb = !0),
                Ya(this.a, this.f),
                this.dispatchEvent(new Qh(this.f));
            }
          }),
          (t.Fc = function (t) {
            this.N.push(t),
              $a(
                this.a,
                Zl.default.SDK_VERSION
                  ? gi(Zl.default.SDK_VERSION, this.N)
                  : null
              ),
              this.dispatchEvent(new tl(this.N));
          }),
          (t.Ga = function () {
            return J(this.N);
          }),
          (t.xb = function (t) {
            this.W === t || this.m || ((this.W = t), (this.a.b = this.W));
          }),
          (t.S = function () {
            return this.W;
          }),
          (t.toJSON = function () {
            return {
              apiKey: al(this).options.apiKey,
              authDomain: al(this).options.authDomain,
              appName: al(this).name,
              currentUser: sl(this) && sl(this).w()
            };
          }),
          (t.Eb = function (t, e) {
            switch (t) {
              case 'unknown':
              case 'signInViaRedirect':
                return !0;
              case 'signInViaPopup':
                return this.h == e && !!this.g;
              default:
                return !1;
            }
          }),
          (t.ma = function (t, e, n, i) {
            'signInViaPopup' == t &&
              this.h == i &&
              (n && this.O ? this.O(n) : e && !n && this.g && this.g(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.g,
              delete this.O);
          }),
          (t.Fa = function (t, e) {
            return 'signInViaRedirect' == t ||
              ('signInViaPopup' == t && this.h == e && this.g)
              ? b(this.hc, this)
              : null;
          }),
          (t.hc = function (t, e, n, i) {
            var r = this,
              o = { requestUri: t, postBody: i, sessionId: e, tenantId: n };
            return (
              this.c && (this.c.cancel(), (this.c = null)),
              r.$.then(function () {
                return ol(r, ls(r.a, o));
              })
            );
          }),
          (t.Wc = function (e) {
            if (!Ii())
              return Ie(new E('operation-not-supported-in-this-environment'));
            var n = this,
              t = Vr(e.providerId),
              i = _i(),
              r = null;
            (!Ai() || ci()) &&
              al(this).options.authDomain &&
              e.isOAuthProvider &&
              (r = cu(
                al(this).options.authDomain,
                al(this).options.apiKey,
                al(this).name,
                'signInViaPopup',
                e,
                null,
                i,
                Zl.default.SDK_VERSION || null,
                null,
                null,
                this.S(),
                this.f
              ));
            var o = ri(r, t && t.ua, t && t.ta);
            return hl(
              this,
              (t = el(this)
                .then(function (t) {
                  return Oc(t, o, 'signInViaPopup', e, i, !!r, n.S());
                })
                .then(function () {
                  return new de(function (t, e) {
                    n.ma(
                      'signInViaPopup',
                      null,
                      new E('cancelled-popup-request'),
                      n.h
                    ),
                      (n.g = t),
                      (n.O = e),
                      (n.h = i),
                      (n.c = Dc(n.b, n, 'signInViaPopup', o, i));
                  });
                })
                .then(function (t) {
                  return o && ii(o), t ? Hi(t) : null;
                })
                .o(function (t) {
                  throw (o && ii(o), t);
                }))
            );
          }),
          (t.Xc = function (t) {
            if (!Ii())
              return Ie(new E('operation-not-supported-in-this-environment'));
            var e = this;
            return hl(
              this,
              el(this)
                .then(function () {
                  return zh((t = e.l), function () {
                    return t.b.set(Bh, t.c.D, t.a);
                  });
                  var t;
                })
                .then(function () {
                  return Rc(e.b, 'signInViaRedirect', t, void 0, e.S());
                })
            );
          }),
          (t.qa = function () {
            var e = this;
            return nl(this)
              .then(function (t) {
                return e.b && Uc(e.b.b), t;
              })
              .o(function (t) {
                throw (e.b && Uc(e.b.b), t);
              });
          }),
          (t.cd = function (t) {
            if (!t) return Ie(new E('null-user'));
            if (this.W != t.tenantId) return Ie(new E('tenant-id-mismatch'));
            var e = this,
              n = {};
            (n.apiKey = al(this).options.apiKey),
              (n.authDomain = al(this).options.authDomain),
              (n.appName = al(this).name);
            var i,
              r,
              o,
              a,
              s,
              u =
                ((i = t),
                (r = n),
                (o = e.G),
                (a = e.Ga()),
                (s = i.b),
                ((n = {})[Ka] = s.b && s.b.toString()),
                (n.refreshToken = s.a),
                (r = new lh(
                  r || { apiKey: i.l, authDomain: i.s, appName: i.m },
                  n
                )),
                o && (r.ha = o),
                a && ph(r, a),
                Oh(r, i),
                r);
            return hl(
              this,
              this.i
                .then(function () {
                  if (al(e).options.apiKey != t.l) return u.reload();
                })
                .then(function () {
                  return sl(e) && t.uid == sl(e).uid
                    ? (Oh(sl(e), t), e.da(t))
                    : (rl(e, u), Ih(u), e.da(u));
                })
                .then(function () {
                  cl(e);
                })
            );
          }),
          (t.zb = function () {
            var t = this,
              e = this.i.then(function () {
                return (
                  t.b && Uc(t.b.b),
                  sl(t)
                    ? (rl(t, null),
                      Jh(t.l).then(function () {
                        cl(t);
                      }))
                    : we()
                );
              });
            return hl(this, e);
          }),
          (t.Yc = function () {
            var i = this;
            return Yh(this.l, al(this).options.authDomain).then(function (t) {
              if (!i.m) {
                var e, n;
                if (
                  ((n = sl(i) && t) &&
                    ((n = sl(i).uid),
                    (e = t.uid),
                    (n =
                      null != n &&
                      '' !== n &&
                      null != e &&
                      '' !== e &&
                      n == e)),
                  n)
                )
                  return Oh(sl(i), t), sl(i).I();
                (sl(i) || t) &&
                  (rl(i, t),
                  t && (Ih(t), (t.ha = i.G)),
                  i.b && kc(i.b, i),
                  cl(i));
              }
            });
          }),
          (t.da = function (t) {
            return Xh(this.l, t);
          }),
          (t.kc = function () {
            cl(this), this.da(sl(this));
          }),
          (t.vc = function () {
            this.zb();
          }),
          (t.wc = function () {
            this.zb();
          }),
          (t.jc = function (t) {
            var e = this;
            return this.i.then(function () {
              return ol(e, we(t));
            });
          }),
          (t.yc = function (t) {
            var e = this;
            this.addAuthTokenListener(function () {
              t.next(sl(e));
            });
          }),
          (t.zc = function (t) {
            var e,
              n,
              i = this;
            (n = function () {
              t.next(sl(i));
            }),
              (e = this).P.push(n),
              hl(
                e,
                e.i.then(function () {
                  !e.m &&
                    G(e.P, n) &&
                    e.X !== e.getUid() &&
                    ((e.X = e.getUid()), n(ul(e)));
                })
              );
          }),
          (t.Hc = function (t, e, n) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  'function' == typeof t
                    ? t(sl(i))
                    : 'function' == typeof t.next && t.next(sl(i));
                }),
              this.ac(t, e, n)
            );
          }),
          (t.Gc = function (t, e, n) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  (i.X = i.getUid()),
                    'function' == typeof t
                      ? t(sl(i))
                      : 'function' == typeof t.next && t.next(sl(i));
                }),
              this.bc(t, e, n)
            );
          }),
          (t.mc = function (t) {
            var e = this,
              n = this.i.then(function () {
                return sl(e)
                  ? sl(e)
                      .I(t)
                      .then(function (t) {
                        return { accessToken: t };
                      })
                  : null;
              });
            return hl(this, n);
          }),
          (t.Sc = function (t) {
            var n = this;
            return this.i
              .then(function () {
                return ol(n, Js(n.a, Hs, { token: t }));
              })
              .then(function (t) {
                var e = t.user;
                return _h(e, 'isAnonymous', !1), n.da(e), t;
              });
          }),
          (t.Tc = function (t, e) {
            var n = this;
            return this.i.then(function () {
              return ol(n, Js(n.a, Ks, { email: t, password: e }));
            });
          }),
          (t.dc = function (t, e) {
            var n = this;
            return this.i.then(function () {
              return ol(n, Js(n.a, gs, { email: t, password: e }));
            });
          }),
          (t.Za = function (t) {
            var e = this;
            return this.i.then(function () {
              return ol(e, t.ja(e.a));
            });
          }),
          (t.Rc = function (t) {
            return (
              Ui(
                'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'
              ),
              this.Za(t)
            );
          }),
          (t.yb = function () {
            var n = this;
            return this.i.then(function () {
              var t = sl(n);
              if (t && t.isAnonymous) {
                var e = Hi({ providerId: null, isNewUser: !1 });
                return Hi({
                  user: t,
                  credential: null,
                  additionalUserInfo: e,
                  operationType: 'signIn'
                });
              }
              return ol(n, n.a.yb()).then(function (t) {
                var e = t.user;
                return _h(e, 'isAnonymous', !0), n.da(e), t;
              });
            });
          }),
          (t.getUid = function () {
            return (sl(this) && sl(this).uid) || null;
          }),
          (t.cc = function (t) {
            this.addAuthTokenListener(t),
              this.A++,
              0 < this.A && sl(this) && gh(sl(this));
          }),
          (t.Oc = function (e) {
            var n = this;
            F(this.u, function (t) {
              t == e && n.A--;
            }),
              this.A < 0 && (this.A = 0),
              0 == this.A && sl(this) && bh(sl(this)),
              this.removeAuthTokenListener(e);
          }),
          (t.addAuthTokenListener = function (t) {
            var e = this;
            this.u.push(t),
              hl(
                this,
                this.i.then(function () {
                  e.m || (G(e.u, t) && t(ul(e)));
                })
              );
          }),
          (t.removeAuthTokenListener = function (e) {
            W(this.u, function (t) {
              return t == e;
            });
          }),
          (t.delete = function () {
            this.m = !0;
            for (var t = 0; t < this.R.length; t++)
              this.R[t].cancel('app-deleted');
            return (
              (this.R = []),
              this.l &&
                (t = this.l).b.removeListener(Wh('local'), t.a, this.pa),
              this.b && (Sc(this.b, this), Uc(this.b.b)),
              Promise.resolve()
            );
          }),
          (t.gc = function (t) {
            return hl(
              this,
              Js(this.a, bs, {
                identifier: t,
                continueUri: Ti() ? ti() : 'http://localhost'
              }).then(function (t) {
                return t.signinMethods || [];
              })
            );
          }),
          (t.Ac = function (t) {
            return !!Eo(t);
          }),
          (t.vb = function (e, n) {
            var i = this;
            return hl(
              this,
              we()
                .then(function () {
                  var t = new wr(n);
                  if (!t.c)
                    throw new E(
                      'argument-error',
                      Er + ' must be true when sending sign in link to email'
                    );
                  return Cr(t);
                })
                .then(function (t) {
                  return i.a.vb(e, t);
                })
                .then(function () {})
            );
          }),
          (t.hd = function (t) {
            return this.Qa(t).then(function (t) {
              return t.data.email;
            });
          }),
          (t.mb = function (t, e) {
            return hl(
              this,
              this.a.mb(t, e).then(function () {})
            );
          }),
          (t.Qa = function (t) {
            return hl(
              this,
              this.a.Qa(t).then(function (t) {
                return new $i(t);
              })
            );
          }),
          (t.ib = function (t) {
            return hl(
              this,
              this.a.ib(t).then(function () {})
            );
          }),
          (t.ub = function (e, t) {
            var n = this;
            return hl(
              this,
              we()
                .then(function () {
                  return void 0 === t || ct(t) ? {} : Cr(new wr(t));
                })
                .then(function (t) {
                  return n.a.ub(e, t);
                })
                .then(function () {})
            );
          }),
          (t.Vc = function (t, e) {
            return hl(this, Gc(this, t, e, b(this.Za, this)));
          }),
          (t.Uc = function (n, i) {
            var r = this;
            return hl(
              this,
              we().then(function () {
                var t = i || ti(),
                  e = To(n, t);
                if (!(t = Eo(t)))
                  throw new E('argument-error', 'Invalid email link!');
                if (t.tenantId !== r.S()) throw new E('tenant-id-mismatch');
                return r.Za(e);
              })
            );
          }),
          (ll.prototype.render = function () {}),
          (ll.prototype.reset = function () {}),
          (ll.prototype.getResponse = function () {}),
          (ll.prototype.execute = function () {});
        var dl = null;
        function pl(t, e) {
          return ((e = vl(e)) && t.a[e]) || null;
        }
        function vl(t) {
          return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
        }
        function ml(t, e) {
          (this.g = !1),
            (this.c = e),
            (this.a = this.b = null),
            (this.h = 'invisible' !== this.c.size),
            (this.f = ee(t));
          var n = this;
          (this.i = function () {
            n.execute();
          }),
            this.h ? this.execute() : Qe(this.f, 'click', this.i);
        }
        function gl(t) {
          if (t.g) throw Error('reCAPTCHA mock was already deleted!');
        }
        function bl() {}
        function yl() {}
        (fl.prototype.render = function (t, e) {
          return (this.a[this.b.toString()] = new ml(t, e)), this.b++;
        }),
          (fl.prototype.reset = function (t) {
            var e = pl(this, t);
            (t = vl(t)), e && t && (e.delete(), delete this.a[t]);
          }),
          (fl.prototype.getResponse = function (t) {
            return (t = pl(this, t)) ? t.getResponse() : null;
          }),
          (fl.prototype.execute = function (t) {
            (t = pl(this, t)) && t.execute();
          }),
          (ml.prototype.getResponse = function () {
            return gl(this), this.b;
          }),
          (ml.prototype.execute = function () {
            gl(this);
            var n = this;
            this.a ||
              (this.a = setTimeout(function () {
                n.b = (function () {
                  for (var t = 50, e = []; 0 < t; )
                    e.push(
                      '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                        Math.floor(62 * Math.random())
                      )
                    ),
                      t--;
                  return e.join('');
                })();
                var t = n.c.callback,
                  e = n.c['expired-callback'];
                if (t)
                  try {
                    t(n.b);
                  } catch (t) {}
                n.a = setTimeout(function () {
                  if (((n.a = null), (n.b = null), e))
                    try {
                      e();
                    } catch (t) {}
                  n.h && n.execute();
                }, 6e4);
              }, 500));
          }),
          (ml.prototype.delete = function () {
            gl(this),
              (this.g = !0),
              clearTimeout(this.a),
              (this.a = null),
              nn(this.f, 'click', this.i);
          }),
          Fi(bl, 'FACTOR_ID', 'phone'),
          (yl.prototype.g = function () {
            return we((dl = dl || new fl()));
          }),
          (yl.prototype.c = function () {});
        var wl = null;
        function Il() {
          (this.b = l.grecaptcha ? 1 / 0 : 0),
            (this.f = null),
            (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString());
        }
        var Tl = new pt(
            bt,
            'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'
          ),
          El = new Ri(3e4, 6e4);
        (Il.prototype.g = function (r) {
          var o = this;
          return new de(function (t, e) {
            var i = setTimeout(function () {
              e(new E('network-request-failed'));
            }, El.get());
            !l.grecaptcha || (r !== o.f && !o.b)
              ? ((l[o.a] = function () {
                  var n;
                  l.grecaptcha
                    ? ((o.f = r),
                      (n = l.grecaptcha.render),
                      (l.grecaptcha.render = function (t, e) {
                        return (t = n(t, e)), o.b++, t;
                      }),
                      clearTimeout(i),
                      t(l.grecaptcha))
                    : (clearTimeout(i), e(new E('internal-error'))),
                    delete l[o.a];
                }),
                we(La(Tt(Tl, { onload: o.a, hl: r || '' }))).o(function () {
                  clearTimeout(i),
                    e(
                      new E(
                        'internal-error',
                        'Unable to load external reCAPTCHA dependencies!'
                      )
                    );
                }))
              : (clearTimeout(i), t(l.grecaptcha));
          });
        }),
          (Il.prototype.c = function () {
            this.b--;
          });
        var Al = null;
        function kl(t, e, n, i, r, o, a) {
          if (
            (Fi(this, 'type', 'recaptcha'),
            (this.c = this.f = null),
            (this.A = !1),
            (this.m = e),
            (this.g = null),
            (a = a ? (wl = wl || new yl()) : (Al = Al || new Il())),
            (this.v = a),
            (this.a = n || { theme: 'light', type: 'image' }),
            (this.h = []),
            this.a[_l])
          )
            throw new E(
              'argument-error',
              'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
            );
          if (((this.i = 'invisible' === this.a[Ol]), !l.document))
            throw new E(
              'operation-not-supported-in-this-environment',
              'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
            );
          if (!ee(e) || (!this.i && ee(e).hasChildNodes()))
            throw new E(
              'argument-error',
              'reCAPTCHA container is either not found or already contains inner elements!'
            );
          (this.s = new qa(t, o || null, r || null)),
            (this.u =
              i ||
              function () {
                return null;
              });
          var s = this;
          this.l = [];
          var u = this.a[Sl];
          this.a[Sl] = function (t) {
            var e;
            Cl(s, t),
              'function' == typeof u
                ? u(t)
                : 'string' != typeof u ||
                  ('function' == typeof (e = yi(u, l)) && e(t));
          };
          var c = this.a[Nl];
          this.a[Nl] = function () {
            var t;
            Cl(s, null),
              'function' == typeof c
                ? c()
                : 'string' != typeof c ||
                  ('function' == typeof (t = yi(c, l)) && t());
          };
        }
        var Sl = 'callback',
          Nl = 'expired-callback',
          _l = 'sitekey',
          Ol = 'size';
        function Cl(t, e) {
          for (var n = 0; n < t.l.length; n++)
            try {
              t.l[n](e);
            } catch (t) {}
        }
        function Rl(t, e) {
          return (
            t.h.push(e),
            e.na(function () {
              B(t.h, e);
            }),
            e
          );
        }
        function Dl(t) {
          if (t.A)
            throw new E(
              'internal-error',
              'RecaptchaVerifier instance has been destroyed.'
            );
        }
        function Pl(t, e, n) {
          var i = !1;
          try {
            this.b = n || Zl.default.app();
          } catch (t) {
            throw new E(
              'argument-error',
              'No firebase.app.App instance is currently initialized.'
            );
          }
          if (!this.b.options || !this.b.options.apiKey)
            throw new E('invalid-api-key');
          n = this.b.options.apiKey;
          var r = this,
            o = null;
          try {
            o = this.b.auth().Ga();
          } catch (t) {}
          try {
            i = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (t) {}
          (o = Zl.default.SDK_VERSION ? gi(Zl.default.SDK_VERSION, o) : null),
            kl.call(
              this,
              n,
              t,
              e,
              function () {
                try {
                  var e = r.b.auth().ka();
                } catch (t) {
                  e = null;
                }
                return e;
              },
              o,
              O(k),
              i
            );
        }
        function Ll(t, e, n, i) {
          t: {
            n = Array.prototype.slice.call(n);
            for (var r = 0, o = !1, a = 0; a < e.length; a++)
              if (e[a].optional) o = !0;
              else {
                if (o)
                  throw new E(
                    'internal-error',
                    'Argument validator encountered a required argument after an optional argument.'
                  );
                r++;
              }
            if (((o = e.length), n.length < r || o < n.length))
              i =
                'Expected ' +
                (r == o
                  ? 1 == r
                    ? '1 argument'
                    : r + ' arguments'
                  : r + '-' + o + ' arguments') +
                ' but got ' +
                n.length +
                '.';
            else {
              for (r = 0; r < n.length; r++)
                if (
                  ((o = e[r].optional && void 0 === n[r]), !e[r].K(n[r]) && !o)
                ) {
                  if (((e = e[r]), r < 0 || r >= xl.length))
                    throw new E(
                      'internal-error',
                      'Argument validator received an unsupported number of arguments.'
                    );
                  (n = xl[r]),
                    (i =
                      (i ? '' : n + ' argument ') +
                      (e.name ? '"' + e.name + '" ' : '') +
                      'must be ' +
                      e.J +
                      '.');
                  break t;
                }
              i = null;
            }
          }
          if (i) throw new E('argument-error', t + ' failed: ' + i);
        }
        ((t = kl.prototype).Ia = function () {
          var e = this;
          return this.f
            ? this.f
            : (this.f = Rl(
                this,
                we()
                  .then(function () {
                    if (Ti() && !hi()) return si();
                    throw new E(
                      'operation-not-supported-in-this-environment',
                      'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                    );
                  })
                  .then(function () {
                    return e.v.g(e.u());
                  })
                  .then(function (t) {
                    return (e.g = t), Js(e.s, Rs, {});
                  })
                  .then(function (t) {
                    e.a[_l] = t.recaptchaSiteKey;
                  })
                  .o(function (t) {
                    throw ((e.f = null), t);
                  })
              ));
        }),
          (t.render = function () {
            Dl(this);
            var n = this;
            return Rl(
              this,
              this.Ia().then(function () {
                var t, e;
                return (
                  null === n.c &&
                    ((e = n.m),
                    n.i || ((t = ee(e)), (e = ae('DIV')), t.appendChild(e)),
                    (n.c = n.g.render(e, n.a))),
                  n.c
                );
              })
            );
          }),
          (t.verify = function () {
            Dl(this);
            var r = this;
            return Rl(
              this,
              this.render().then(function (e) {
                return new de(function (n) {
                  var i,
                    t = r.g.getResponse(e);
                  t
                    ? n(t)
                    : ((i = function (t) {
                        var e;
                        t &&
                          ((e = i),
                          W(r.l, function (t) {
                            return t == e;
                          }),
                          n(t));
                      }),
                      r.l.push(i),
                      r.i && r.g.execute(r.c));
                });
              })
            );
          }),
          (t.reset = function () {
            Dl(this), null !== this.c && this.g.reset(this.c);
          }),
          (t.clear = function () {
            Dl(this), (this.A = !0), this.v.c();
            for (var t, e = 0; e < this.h.length; e++)
              this.h[e].cancel(
                'RecaptchaVerifier instance has been destroyed.'
              );
            if (!this.i) {
              e = ee(this.m);
              for (; (t = e.firstChild); ) e.removeChild(t);
            }
          }),
          I(Pl, kl);
        var xl = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
          ' '
        );
        function Ml(t, e) {
          return {
            name: t || '',
            J: 'a valid string',
            optional: !!e,
            K: function (t) {
              return 'string' == typeof t;
            }
          };
        }
        function jl(t, e) {
          return {
            name: t || '',
            J: 'a boolean',
            optional: !!e,
            K: function (t) {
              return 'boolean' == typeof t;
            }
          };
        }
        function Ul(t, e) {
          return { name: t || '', J: 'a valid object', optional: !!e, K: m };
        }
        function Vl(t, e) {
          return {
            name: t || '',
            J: 'a function',
            optional: !!e,
            K: function (t) {
              return 'function' == typeof t;
            }
          };
        }
        function Fl(t, e) {
          return {
            name: t || '',
            J: 'null',
            optional: !!e,
            K: function (t) {
              return null === t;
            }
          };
        }
        function ql(n) {
          return {
            name: n ? n + 'Credential' : 'credential',
            J: n ? 'a valid ' + n + ' credential' : 'a valid credential',
            optional: !1,
            K: function (t) {
              if (!t) return !1;
              var e = !n || t.providerId === n;
              return !(!t.ja || !e);
            }
          };
        }
        function Hl() {
          return {
            name: 'multiFactorAssertion',
            J: 'a valid multiFactorAssertion',
            optional: !1,
            K: function (t) {
              return !!t && !!t.rb;
            }
          };
        }
        function Kl() {
          return {
            name: 'authProvider',
            J: 'a valid Auth provider',
            optional: !1,
            K: function (t) {
              return !!(
                t &&
                t.providerId &&
                t.hasOwnProperty &&
                t.hasOwnProperty('isOAuthProvider')
              );
            }
          };
        }
        function Gl(t, e) {
          return (
            m(t) &&
            'string' == typeof t.type &&
            t.type === e &&
            'function' == typeof t.Ha
          );
        }
        function Bl(t) {
          return m(t) && 'string' == typeof t.uid;
        }
        function Wl() {
          return {
            name: 'applicationVerifier',
            J: 'an implementation of firebase.auth.ApplicationVerifier',
            optional: !1,
            K: function (t) {
              return !(
                !t ||
                'string' != typeof t.type ||
                'function' != typeof t.verify
              );
            }
          };
        }
        function Xl(e, n, t, i) {
          return {
            name: t || '',
            J: e.J + ' or ' + n.J,
            optional: !!i,
            K: function (t) {
              return e.K(t) || n.K(t);
            }
          };
        }
        function Jl(t, e) {
          for (var n in e) {
            var i = e[n].name;
            t[i] = $l(i, t[n], e[n].j);
          }
        }
        function Yl(t, e) {
          for (var n in e) {
            var i = e[n].name;
            i !== n &&
              Object.defineProperty(t, i, {
                get: y(function (t) {
                  return this[t];
                }, n),
                set: y(
                  function (t, e, n, i) {
                    Ll(t, [n], [i], !0), (this[e] = i);
                  },
                  i,
                  n,
                  e[n].jb
                ),
                enumerable: !0
              });
          }
        }
        function zl(t, e, n, i) {
          t[e] = $l(e, n, i);
        }
        function $l(t, e, n) {
          function i() {
            var t = Array.prototype.slice.call(arguments);
            return Ll(o, n, t), e.apply(this, t);
          }
          if (!n) return e;
          var r,
            o = (t = (t = t).split('.'))[t.length - 1];
          for (r in e) i[r] = e[r];
          for (r in e.prototype) i.prototype[r] = e.prototype[r];
          return i;
        }
        Jl($h.prototype, {
          ib: { name: 'applyActionCode', j: [Ml('code')] },
          Qa: { name: 'checkActionCode', j: [Ml('code')] },
          mb: {
            name: 'confirmPasswordReset',
            j: [Ml('code'), Ml('newPassword')]
          },
          dc: {
            name: 'createUserWithEmailAndPassword',
            j: [Ml('email'), Ml('password')]
          },
          gc: { name: 'fetchSignInMethodsForEmail', j: [Ml('email')] },
          qa: { name: 'getRedirectResult', j: [] },
          Ac: { name: 'isSignInWithEmailLink', j: [Ml('emailLink')] },
          Gc: {
            name: 'onAuthStateChanged',
            j: [
              Xl(Ul(), Vl(), 'nextOrObserver'),
              Vl('opt_error', !0),
              Vl('opt_completed', !0)
            ]
          },
          Hc: {
            name: 'onIdTokenChanged',
            j: [
              Xl(Ul(), Vl(), 'nextOrObserver'),
              Vl('opt_error', !0),
              Vl('opt_completed', !0)
            ]
          },
          ub: {
            name: 'sendPasswordResetEmail',
            j: [
              Ml('email'),
              Xl(
                Ul('opt_actionCodeSettings', !0),
                Fl(null, !0),
                'opt_actionCodeSettings',
                !0
              )
            ]
          },
          vb: {
            name: 'sendSignInLinkToEmail',
            j: [Ml('email'), Ul('actionCodeSettings')]
          },
          wb: { name: 'setPersistence', j: [Ml('persistence')] },
          Rc: { name: 'signInAndRetrieveDataWithCredential', j: [ql()] },
          yb: { name: 'signInAnonymously', j: [] },
          Za: { name: 'signInWithCredential', j: [ql()] },
          Sc: { name: 'signInWithCustomToken', j: [Ml('token')] },
          Tc: {
            name: 'signInWithEmailAndPassword',
            j: [Ml('email'), Ml('password')]
          },
          Uc: {
            name: 'signInWithEmailLink',
            j: [Ml('email'), Ml('emailLink', !0)]
          },
          Vc: { name: 'signInWithPhoneNumber', j: [Ml('phoneNumber'), Wl()] },
          Wc: { name: 'signInWithPopup', j: [Kl()] },
          Xc: { name: 'signInWithRedirect', j: [Kl()] },
          cd: {
            name: 'updateCurrentUser',
            j: [
              Xl(
                {
                  name: 'user',
                  J: 'an instance of Firebase User',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t instanceof lh);
                  }
                },
                Fl(),
                'user'
              )
            ]
          },
          zb: { name: 'signOut', j: [] },
          toJSON: { name: 'toJSON', j: [Ml(null, !0)] },
          ed: { name: 'useDeviceLanguage', j: [] },
          fd: { name: 'useEmulator', j: [Ml('url')] },
          hd: { name: 'verifyPasswordResetCode', j: [Ml('code')] }
        }),
          Yl($h.prototype, {
            lc: { name: 'languageCode', jb: Xl(Ml(), Fl(), 'languageCode') },
            ti: { name: 'tenantId', jb: Xl(Ml(), Fl(), 'tenantId') }
          }),
          (($h.Persistence = Gu).LOCAL = 'local'),
          ($h.Persistence.SESSION = 'session'),
          ($h.Persistence.NONE = 'none'),
          Jl(lh.prototype, {
            delete: { name: 'delete', j: [] },
            nc: { name: 'getIdTokenResult', j: [jl('opt_forceRefresh', !0)] },
            I: { name: 'getIdToken', j: [jl('opt_forceRefresh', !0)] },
            Bc: { name: 'linkAndRetrieveDataWithCredential', j: [ql()] },
            pb: { name: 'linkWithCredential', j: [ql()] },
            Cc: { name: 'linkWithPhoneNumber', j: [Ml('phoneNumber'), Wl()] },
            Dc: { name: 'linkWithPopup', j: [Kl()] },
            Ec: { name: 'linkWithRedirect', j: [Kl()] },
            Kc: {
              name: 'reauthenticateAndRetrieveDataWithCredential',
              j: [ql()]
            },
            sb: { name: 'reauthenticateWithCredential', j: [ql()] },
            Lc: {
              name: 'reauthenticateWithPhoneNumber',
              j: [Ml('phoneNumber'), Wl()]
            },
            Mc: { name: 'reauthenticateWithPopup', j: [Kl()] },
            Nc: { name: 'reauthenticateWithRedirect', j: [Kl()] },
            reload: { name: 'reload', j: [] },
            tb: {
              name: 'sendEmailVerification',
              j: [
                Xl(
                  Ul('opt_actionCodeSettings', !0),
                  Fl(null, !0),
                  'opt_actionCodeSettings',
                  !0
                )
              ]
            },
            toJSON: { name: 'toJSON', j: [Ml(null, !0)] },
            bd: { name: 'unlink', j: [Ml('provider')] },
            Ab: { name: 'updateEmail', j: [Ml('email')] },
            Bb: { name: 'updatePassword', j: [Ml('password')] },
            dd: { name: 'updatePhoneNumber', j: [ql('phone')] },
            Cb: { name: 'updateProfile', j: [Ul('profile')] },
            Db: {
              name: 'verifyBeforeUpdateEmail',
              j: [
                Ml('email'),
                Xl(
                  Ul('opt_actionCodeSettings', !0),
                  Fl(null, !0),
                  'opt_actionCodeSettings',
                  !0
                )
              ]
            }
          }),
          Jl(fl.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' }
          }),
          Jl(ll.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' }
          }),
          Jl(de.prototype, {
            na: { name: 'finally' },
            o: { name: 'catch' },
            then: { name: 'then' }
          }),
          Yl(Hc.prototype, {
            appVerificationDisabled: {
              name: 'appVerificationDisabledForTesting',
              jb: jl('appVerificationDisabledForTesting')
            }
          }),
          Jl(Kc.prototype, {
            confirm: { name: 'confirm', j: [Ml('verificationCode')] }
          }),
          zl(
            Qr,
            'fromJSON',
            function (t) {
              t = 'string' == typeof t ? JSON.parse(t) : t;
              for (var e, n = [ao, wo, ko, io], i = 0; i < n.length; i++)
                if ((e = n[i](t))) return e;
              return null;
            },
            [Xl(Ml(), Ul(), 'json')]
          ),
          zl(
            Io,
            'credential',
            function (t, e) {
              return new yo(t, e);
            },
            [Ml('email'), Ml('password')]
          ),
          Jl(yo.prototype, { w: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(ho.prototype, {
            Ca: { name: 'addScope', j: [Ml('scope')] },
            Ka: {
              name: 'setCustomParameters',
              j: [Ul('customOAuthParameters')]
            }
          }),
          zl(ho, 'credential', lo, [Xl(Ml(), Ul(), 'token')]),
          zl(Io, 'credentialWithLink', To, [Ml('email'), Ml('emailLink')]),
          Jl(fo.prototype, {
            Ca: { name: 'addScope', j: [Ml('scope')] },
            Ka: {
              name: 'setCustomParameters',
              j: [Ul('customOAuthParameters')]
            }
          }),
          zl(fo, 'credential', po, [Xl(Ml(), Ul(), 'token')]),
          Jl(vo.prototype, {
            Ca: { name: 'addScope', j: [Ml('scope')] },
            Ka: {
              name: 'setCustomParameters',
              j: [Ul('customOAuthParameters')]
            }
          }),
          zl(vo, 'credential', mo, [
            Xl(Ml(), Xl(Ul(), Fl()), 'idToken'),
            Xl(Ml(), Fl(), 'accessToken', !0)
          ]),
          Jl(go.prototype, {
            Ka: {
              name: 'setCustomParameters',
              j: [Ul('customOAuthParameters')]
            }
          }),
          zl(go, 'credential', bo, [Xl(Ml(), Ul(), 'token'), Ml('secret', !0)]),
          Jl(co.prototype, {
            Ca: { name: 'addScope', j: [Ml('scope')] },
            credential: {
              name: 'credential',
              j: [
                Xl(Ml(), Xl(Ul(), Fl()), 'optionsOrIdToken'),
                Xl(Ml(), Fl(), 'accessToken', !0)
              ]
            },
            Ka: {
              name: 'setCustomParameters',
              j: [Ul('customOAuthParameters')]
            }
          }),
          Jl(ro.prototype, { w: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(eo.prototype, { w: { name: 'toJSON', j: [Ml(null, !0)] } }),
          zl(No, 'credential', _o, [
            Ml('verificationId'),
            Ml('verificationCode')
          ]),
          Jl(No.prototype, {
            eb: {
              name: 'verifyPhoneNumber',
              j: [
                Xl(
                  Ml(),
                  {
                    name: 'phoneInfoOptions',
                    J: 'valid phone info options',
                    optional: !1,
                    K: function (t) {
                      return (
                        !!t &&
                        (t.session && t.phoneNumber
                          ? Gl(t.session, $r) &&
                            'string' == typeof t.phoneNumber
                          : t.session && t.multiFactorHint
                          ? Gl(t.session, Zr) && Bl(t.multiFactorHint)
                          : t.session && t.multiFactorUid
                          ? Gl(t.session, Zr) &&
                            'string' == typeof t.multiFactorUid
                          : !!t.phoneNumber && 'string' == typeof t.phoneNumber)
                      );
                    }
                  },
                  'phoneInfoOptions'
                ),
                Wl()
              ]
            }
          }),
          Jl(Ao.prototype, { w: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(E.prototype, { toJSON: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(jo.prototype, { toJSON: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(Mo.prototype, { toJSON: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(Yc.prototype, { toJSON: { name: 'toJSON', j: [Ml(null, !0)] } }),
          Jl(Wc.prototype, { Qc: { name: 'resolveSignIn', j: [Hl()] } }),
          Jl(eh.prototype, {
            Qb: { name: 'getSession', j: [] },
            ec: { name: 'enroll', j: [Hl(), Ml('displayName', !0)] },
            ad: {
              name: 'unenroll',
              j: [
                Xl(
                  {
                    name: 'multiFactorInfo',
                    J: 'a valid multiFactorInfo',
                    optional: !1,
                    K: Bl
                  },
                  Ml(),
                  'multiFactorInfoIdentifier'
                )
              ]
            }
          }),
          Jl(Pl.prototype, {
            clear: { name: 'clear', j: [] },
            render: { name: 'render', j: [] },
            verify: { name: 'verify', j: [] }
          }),
          zl(lr, 'parseLink', yr, [Ml('link')]),
          zl(
            bl,
            'assertion',
            function (t) {
              return new Qc(t);
            },
            [ql('phone')]
          ),
          (function () {
            if (
              void 0 === Zl.default ||
              !Zl.default.INTERNAL ||
              !Zl.default.INTERNAL.registerComponent
            )
              throw Error(
                'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
              );
            var t = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: Qi,
                  PASSWORD_RESET: 'PASSWORD_RESET',
                  RECOVER_EMAIL: 'RECOVER_EMAIL',
                  REVERT_SECOND_FACTOR_ADDITION: Zi,
                  VERIFY_AND_CHANGE_EMAIL: tr,
                  VERIFY_EMAIL: 'VERIFY_EMAIL'
                }
              },
              Auth: $h,
              AuthCredential: Qr,
              Error: E
            };
            zl(t, 'EmailAuthProvider', Io, []),
              zl(t, 'FacebookAuthProvider', ho, []),
              zl(t, 'GithubAuthProvider', fo, []),
              zl(t, 'GoogleAuthProvider', vo, []),
              zl(t, 'TwitterAuthProvider', go, []),
              zl(t, 'OAuthProvider', co, [Ml('providerId')]),
              zl(t, 'SAMLAuthProvider', uo, [Ml('providerId')]),
              zl(t, 'PhoneAuthProvider', No, [
                {
                  name: 'auth',
                  J: 'an instance of Firebase Auth',
                  optional: !0,
                  K: function (t) {
                    return !!(t && t instanceof $h);
                  }
                }
              ]),
              zl(t, 'RecaptchaVerifier', Pl, [
                Xl(
                  Ml(),
                  {
                    name: '',
                    J: 'an HTML element',
                    optional: !1,
                    K: function (t) {
                      return !!(t && t instanceof Element);
                    }
                  },
                  'recaptchaContainer'
                ),
                Ul('recaptchaParameters', !0),
                {
                  name: 'app',
                  J: 'an instance of Firebase App',
                  optional: !0,
                  K: function (t) {
                    return !!(t && t instanceof Zl.default.app.App);
                  }
                }
              ]),
              zl(t, 'ActionCodeURL', lr, []),
              zl(t, 'PhoneMultiFactorGenerator', bl, []),
              Zl.default.INTERNAL.registerComponent({
                name: 'auth',
                instanceFactory: function (t) {
                  return new $h((t = t.getProvider('app').getImmediate()));
                },
                multipleInstances: !1,
                serviceProps: t,
                instantiationMode: 'LAZY',
                type: 'PUBLIC'
              }),
              Zl.default.INTERNAL.registerComponent({
                name: 'auth-internal',
                instanceFactory: function (t) {
                  return {
                    getUid: b(
                      (t = t.getProvider('auth').getImmediate()).getUid,
                      t
                    ),
                    getToken: b(t.mc, t),
                    addAuthTokenListener: b(t.cc, t),
                    removeAuthTokenListener: b(t.Oc, t)
                  };
                },
                multipleInstances: !1,
                instantiationMode: 'LAZY',
                type: 'PRIVATE'
              }),
              Zl.default.registerVersion('@firebase/auth', '0.15.2'),
              Zl.default.INTERNAL.extendNamespace({ User: lh });
          })();
      }.apply(
        'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : {}
      ));
    }.apply(this, arguments));
  } catch (t) {
    throw (
      (console.error(t),
      new Error(
        'Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.'
      ))
    );
  }
});
//# sourceMappingURL=firebase-auth.js.map
