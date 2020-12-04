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

!(function (n, o, i, t) {
  'use strict';
  function r(n, e) {
    return (
      (r = n),
      (t = e),
      new i.Observable(function (n) {
        return { unsubscribe: r.onSnapshot(t || {}, n) };
      })
    );
    var r, t;
  }
  function e(n, e) {
    return r(n, e);
  }
  function u(n, e) {
    return r(n, e);
  }
  function c(n) {
    return e(n);
  }
  function d(n, e) {
    var r;
    return o.__assign(
      o.__assign({}, n.data()),
      e ? (((r = {})[e] = n.id), r) : null
    );
  }
  var f = ['added', 'modified', 'removed'],
    a = function (i) {
      return t.filter(function (n) {
        for (var e = !1, r = 0; r < n.length; r++) {
          var t = n[r];
          if (i && 0 <= i.indexOf(t.type)) {
            e = !0;
            break;
          }
        }
        return e;
      });
    },
    s = t.filter(function (n) {
      return 0 < n.length;
    });
  function l(n, e, r) {
    for (var t = [], i = 3; i < arguments.length; i++) t[i - 3] = arguments[i];
    n = n.slice();
    return n.splice.apply(n, o.__spreadArrays([e, r], t)), n;
  }
  function p(e, n, r) {
    return (
      void 0 === r && (r = f),
      n.forEach(function (n) {
        -1 < r.indexOf(n.type) &&
          (e = (function (n, e) {
            switch (e.type) {
              case 'added':
                if (!n[e.newIndex] || !n[e.newIndex].doc.ref.isEqual(e.doc.ref))
                  return l(n, e.newIndex, 0, e);
                break;
              case 'modified':
                if (
                  null == n[e.oldIndex] ||
                  n[e.oldIndex].doc.ref.isEqual(e.doc.ref)
                ) {
                  if (e.oldIndex === e.newIndex) return l(n, e.newIndex, 1, e);
                  var r = n.slice();
                  return r.splice(e.oldIndex, 1), r.splice(e.newIndex, 0, e), r;
                }
                break;
              case 'removed':
                if (n[e.oldIndex] && n[e.oldIndex].doc.ref.isEqual(e.doc.ref))
                  return l(n, e.oldIndex, 1);
            }
            return n;
          })(e, n));
      }),
      e
    );
  }
  function x(n, e) {
    return (
      void 0 === e && (e = f),
      u(n).pipe(
        t.map(function (n) {
          return n.docChanges();
        }),
        a(e),
        s
      )
    );
  }
  function v(n) {
    return u(n).pipe(
      t.map(function (n) {
        return n.docs;
      })
    );
  }
  (n.auditTrail = function (n, e) {
    return x(n, e).pipe(
      t.scan(function (n, e) {
        return o.__spreadArrays(n, e);
      }, [])
    );
  }),
    (n.collection = v),
    (n.collectionChanges = x),
    (n.collectionData = function (n, e) {
      return v(n).pipe(
        t.map(function (n) {
          return n.map(function (n) {
            return d(n, e);
          });
        })
      );
    }),
    (n.doc = c),
    (n.docData = function (n, e) {
      return c(n).pipe(
        t.map(function (n) {
          return d(n, e);
        })
      );
    }),
    (n.fromCollectionRef = u),
    (n.fromDocRef = e),
    (n.fromRef = r),
    (n.snapToData = d),
    (n.sortedChanges = function (n, r) {
      return x(n, r).pipe(
        t.scan(function (n, e) {
          return p(n, e, r);
        }, []),
        t.distinctUntilChanged()
      );
    }),
    Object.defineProperty(n, '__esModule', { value: !0 });
})((this.rxfire = this.rxfire || {}), tslib, rxjs, rxjs.operators);
//# sourceMappingURL=rxfire-firestore.js.map
