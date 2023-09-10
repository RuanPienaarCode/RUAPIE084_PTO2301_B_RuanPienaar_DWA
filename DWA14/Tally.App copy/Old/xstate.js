!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = 'undefined' != typeof globalThis ? globalThis : t || self).XState = {}));
})(this, function (t) {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e,
    n,
    i = function () {
      return (i =
        Object.assign ||
        function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++) for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
  function r(t, e) {
    var n = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
        e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
    }
    return n;
  }
  function o(t) {
    var e = 'function' == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      i = 0;
    if (n) return n.call(t);
    if (t && 'number' == typeof t.length)
      return {
        next: function () {
          return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
        },
      };
    throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  }
  function a(t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var i,
      r,
      o = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; ) a.push(i.value);
    } catch (t) {
      r = { error: t };
    } finally {
      try {
        i && !i.done && (n = o.return) && n.call(o);
      } finally {
        if (r) throw r.error;
      }
    }
    return a;
  }
  function s(t, e, n) {
    if (n || 2 === arguments.length)
      for (var i, r = 0, o = e.length; r < o; r++) (!i && r in e) || (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
    return t.concat(i || Array.prototype.slice.call(e));
  }
  (t.ActionTypes = void 0),
    ((e = t.ActionTypes || (t.ActionTypes = {})).Start = 'xstate.start'),
    (e.Stop = 'xstate.stop'),
    (e.Raise = 'xstate.raise'),
    (e.Send = 'xstate.send'),
    (e.Cancel = 'xstate.cancel'),
    (e.NullEvent = ''),
    (e.Assign = 'xstate.assign'),
    (e.After = 'xstate.after'),
    (e.DoneState = 'done.state'),
    (e.DoneInvoke = 'done.invoke'),
    (e.Log = 'xstate.log'),
    (e.Init = 'xstate.init'),
    (e.Invoke = 'xstate.invoke'),
    (e.ErrorExecution = 'error.execution'),
    (e.ErrorCommunication = 'error.communication'),
    (e.ErrorPlatform = 'error.platform'),
    (e.ErrorCustom = 'xstate.error'),
    (e.Update = 'xstate.update'),
    (e.Pure = 'xstate.pure'),
    (e.Choose = 'xstate.choose'),
    (t.SpecialTargets = void 0),
    ((n = t.SpecialTargets || (t.SpecialTargets = {})).Parent = '#_parent'),
    (n.Internal = '#_internal');
  var c,
    u = t.ActionTypes.Start,
    h = t.ActionTypes.Stop,
    f = t.ActionTypes.Raise,
    l = t.ActionTypes.Send,
    d = t.ActionTypes.Cancel,
    p = t.ActionTypes.NullEvent,
    v = t.ActionTypes.Assign,
    y = t.ActionTypes.After,
    g = t.ActionTypes.DoneState,
    m = t.ActionTypes.Log,
    x = t.ActionTypes.Init,
    S = t.ActionTypes.Invoke,
    b = t.ActionTypes.ErrorExecution,
    w = t.ActionTypes.ErrorPlatform,
    _ = t.ActionTypes.ErrorCustom,
    E = t.ActionTypes.Update,
    T = t.ActionTypes.Choose,
    A = t.ActionTypes.Pure,
    O = Object.freeze({
      __proto__: null,
      start: u,
      stop: h,
      raise: f,
      send: l,
      cancel: d,
      nullEvent: p,
      assign: v,
      after: y,
      doneState: g,
      log: m,
      init: x,
      invoke: S,
      errorExecution: b,
      errorPlatform: w,
      error: _,
      update: E,
      choose: T,
      pure: A,
    }),
    k = {};
  function j(t, e, n) {
    void 0 === n && (n = '.');
    var i = P(t, n),
      r = P(e, n);
    return Q(r)
      ? !!Q(i) && r === i
      : Q(i)
      ? i in r
      : Object.keys(i).every(function (t) {
          return t in r && j(i[t], r[t]);
        });
  }
  function N(t) {
    try {
      return Q(t) || 'number' == typeof t ? ''.concat(t) : t.type;
    } catch (t) {
      throw new Error('Events must be strings or objects with a string event.type property.');
    }
  }
  function I(t, e) {
    try {
      return X(t) ? t : t.toString().split(e);
    } catch (e) {
      throw new Error("'".concat(t, "' is not a valid state path."));
    }
  }
  function P(t, e) {
    return 'object' == typeof (n = t) && 'value' in n && 'context' in n && 'event' in n && '_event' in n
      ? t.value
      : X(t)
      ? C(t)
      : 'string' != typeof t
      ? t
      : C(I(t, e));
    var n;
  }
  function C(t) {
    if (1 === t.length) return t[0];
    for (var e = {}, n = e, i = 0; i < t.length - 1; i++) i === t.length - 2 ? (n[t[i]] = t[i + 1]) : ((n[t[i]] = {}), (n = n[t[i]]));
    return e;
  }
  function L(t, e) {
    for (var n = {}, i = Object.keys(t), r = 0; r < i.length; r++) {
      var o = i[r];
      n[o] = e(t[o], o, t, r);
    }
    return n;
  }
  function V(t, e, n) {
    var i,
      r,
      a = {};
    try {
      for (var s = o(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          h = t[u];
        n(h) && (a[u] = e(h, u, t));
      }
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        c && !c.done && (r = s.return) && r.call(s);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  var D = function (t) {
    return function (e) {
      var n,
        i,
        r = e;
      try {
        for (var a = o(t), s = a.next(); !s.done; s = a.next()) {
          r = r[s.value];
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return r;
    };
  };
  function R(t) {
    return t
      ? Q(t)
        ? [[t]]
        : M(
            Object.keys(t).map(function (e) {
              var n = t[e];
              return 'string' == typeof n || (n && Object.keys(n).length)
                ? R(t[e]).map(function (t) {
                    return [e].concat(t);
                  })
                : [[e]];
            })
          )
      : [[]];
  }
  function M(t) {
    var e;
    return (e = []).concat.apply(e, s([], a(t), !1));
  }
  function z(t) {
    return X(t) ? t : [t];
  }
  function B(t) {
    return void 0 === t ? [] : z(t);
  }
  function U(t, e, n) {
    var i, r;
    if ($(t)) return t(e, n.data);
    var a = {};
    try {
      for (var s = o(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          h = t[u];
        $(h) ? (a[u] = h(e, n.data)) : (a[u] = h);
      }
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        c && !c.done && (r = s.return) && r.call(s);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function F(t) {
    return t instanceof Promise || !(null === t || (!$(t) && 'object' != typeof t) || !$(t.then));
  }
  function J(t, e) {
    return L(t.states, function (t, n) {
      if (t) {
        var i = (Q(e) ? void 0 : e[n]) || (t ? t.current : void 0);
        if (i) return { current: i, states: J(t, i) };
      }
    });
  }
  function q(t, e, n, i) {
    return t
      ? n.reduce(function (t, n) {
          var r,
            a,
            s = n.assignment,
            c = { state: i, action: n, _event: e },
            u = {};
          if ($(s)) u = s(t, e.data, c);
          else
            try {
              for (var h = o(Object.keys(s)), f = h.next(); !f.done; f = h.next()) {
                var l = f.value,
                  d = s[l];
                u[l] = $(d) ? d(t, e.data, c) : d;
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                f && !f.done && (a = h.return) && a.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
          return Object.assign({}, t, u);
        }, t)
      : t;
  }
  function X(t) {
    return Array.isArray(t);
  }
  function $(t) {
    return 'function' == typeof t;
  }
  function Q(t) {
    return 'string' == typeof t;
  }
  function H(t, e) {
    if (t) return Q(t) ? { type: 'xstate.guard', name: t, predicate: e ? e[t] : void 0 } : $(t) ? { type: 'xstate.guard', name: t.name, predicate: t } : t;
  }
  var G = (function () {
    return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
  })();
  function K(t) {
    return !!t && '__xstatenode' in t;
  }
  ((c = {})[G] = function () {
    return this;
  }),
    (c[Symbol.observable] = function () {
      return this;
    });
  var W = (function () {
    var t = 0;
    return function () {
      return (++t).toString(16);
    };
  })();
  function Y(t, e) {
    return Q(t) || 'number' == typeof t ? i({ type: t }, e) : t;
  }
  function Z(t, e) {
    if (!Q(t) && '$$type' in t && 'scxml' === t.$$type) return t;
    var n = Y(t);
    return i({ name: n.type, data: n, $$type: 'scxml', type: 'external' }, e);
  }
  function tt(t, e) {
    return z(e).map(function (e) {
      return void 0 === e || 'string' == typeof e || K(e) ? { target: e, event: t } : i(i({}, e), { event: t });
    });
  }
  function et(t, e, n, i, r) {
    var o = t.options.guards,
      a = { state: r, cond: e, _event: i };
    if ('xstate.guard' === e.type) return ((null == o ? void 0 : o[e.name]) || e.predicate)(n, i.data, a);
    var s = null == o ? void 0 : o[e.type];
    if (!s) throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(t.id, "'."));
    return s(n, i.data, a);
  }
  function nt(t) {
    return 'string' == typeof t ? { type: t } : t;
  }
  function it(t, e, n) {
    var i = function () {},
      r = 'object' == typeof t,
      o = r ? t : null;
    return { next: ((r ? t.next : t) || i).bind(o), error: ((r ? t.error : e) || i).bind(o), complete: ((r ? t.complete : n) || i).bind(o) };
  }
  function rt(t, e) {
    return ''.concat(t, ':invocation[').concat(e, ']');
  }
  function ot(e) {
    return (e.type === f || (e.type === l && e.to === t.SpecialTargets.Internal)) && 'number' != typeof e.delay;
  }
  var at = Z({ type: x });
  function st(t, e) {
    return (e && e[t]) || void 0;
  }
  function ct(t, e) {
    var n;
    if (Q(t) || 'number' == typeof t) n = $((r = st(t, e))) ? { type: t, exec: r } : r || { type: t, exec: void 0 };
    else if ($(t)) n = { type: t.name || t.toString(), exec: t };
    else {
      var r;
      if ($((r = st(t.type, e)))) n = i(i({}, t), { exec: r });
      else if (r) {
        var o = r.type || t.type;
        n = i(i(i({}, r), t), { type: o });
      } else n = t;
    }
    return n;
  }
  var ut = function (t, e) {
    return t
      ? (X(t) ? t : [t]).map(function (t) {
          return ct(t, e);
        })
      : [];
  };
  function ht(t) {
    var e = ct(t);
    return i(i({ id: Q(t) ? t : e.id }, e), { type: e.type });
  }
  function ft(t, e) {
    return { type: f, event: 'function' == typeof t ? t : Y(t), delay: e ? e.delay : void 0, id: null == e ? void 0 : e.id };
  }
  function lt(t, e, n, r) {
    var o,
      a = { _event: n },
      s = Z($(t.event) ? t.event(e, n.data, a) : t.event);
    if (Q(t.delay)) {
      var c = r && r[t.delay];
      o = $(c) ? c(e, n.data, a) : c;
    } else o = $(t.delay) ? t.delay(e, n.data, a) : t.delay;
    return i(i({}, t), { type: f, _event: s, delay: o });
  }
  function dt(t, e) {
    return { to: e ? e.to : void 0, type: l, event: $(t) ? t : Y(t), delay: e ? e.delay : void 0, id: e && void 0 !== e.id ? e.id : $(t) ? t.name : N(t) };
  }
  function pt(t, e, n, r) {
    var o,
      a = { _event: n },
      s = Z($(t.event) ? t.event(e, n.data, a) : t.event);
    if (Q(t.delay)) {
      var c = r && r[t.delay];
      o = $(c) ? c(e, n.data, a) : c;
    } else o = $(t.delay) ? t.delay(e, n.data, a) : t.delay;
    var u = $(t.to) ? t.to(e, n.data, a) : t.to;
    return i(i({}, t), { to: u, _event: s, event: s.data, delay: o });
  }
  function vt(e, n) {
    return dt(e, i(i({}, n), { to: t.SpecialTargets.Parent }));
  }
  function yt(t, e, n) {
    return dt(e, i(i({}, n), { to: t }));
  }
  function gt() {
    return vt(E);
  }
  var mt = function (t, e) {
    return { context: t, event: e };
  };
  function xt(t, e) {
    return void 0 === t && (t = mt), { type: m, label: e, expr: t };
  }
  var St = function (t, e, n) {
      return i(i({}, t), { value: Q(t.expr) ? t.expr : t.expr(e, n.data, { _event: n }) });
    },
    bt = function (t) {
      return { type: d, sendId: t };
    };
  function wt(e) {
    var n = ht(e);
    return { type: t.ActionTypes.Start, activity: n, exec: void 0 };
  }
  function _t(e) {
    var n = $(e) ? e : ht(e);
    return { type: t.ActionTypes.Stop, activity: n, exec: void 0 };
  }
  function Et(e, n, i) {
    var r = $(e.activity) ? e.activity(n, i.data) : e.activity,
      o = 'string' == typeof r ? { id: r } : r;
    return { type: t.ActionTypes.Stop, activity: o };
  }
  var Tt = function (t) {
    return { type: v, assignment: t };
  };
  function At(e, n) {
    var i = n ? '#'.concat(n) : '';
    return ''.concat(t.ActionTypes.After, '(').concat(e, ')').concat(i);
  }
  function Ot(e, n) {
    var i = ''.concat(t.ActionTypes.DoneState, '.').concat(e),
      r = {
        type: i,
        data: n,
        toString: function () {
          return i;
        },
      };
    return r;
  }
  function kt(e, n) {
    var i = ''.concat(t.ActionTypes.DoneInvoke, '.').concat(e),
      r = {
        type: i,
        data: n,
        toString: function () {
          return i;
        },
      };
    return r;
  }
  function jt(e, n) {
    var i = ''.concat(t.ActionTypes.ErrorPlatform, '.').concat(e),
      r = {
        type: i,
        data: n,
        toString: function () {
          return i;
        },
      };
    return r;
  }
  function Nt(e) {
    return { type: t.ActionTypes.Pure, get: e };
  }
  function It(t, e) {
    return dt(
      function (t, e) {
        return e;
      },
      i(i({}, e), { to: t })
    );
  }
  function Pt(e) {
    return { type: t.ActionTypes.Choose, conds: e };
  }
  function Ct(e, n, r, c, u, d, p) {
    void 0 === p && (p = !1);
    var y = p
        ? []
        : (function (t) {
            var e,
              n,
              i = [];
            try {
              for (var r = o(t), a = r.next(); !a.done; a = r.next())
                for (var s = a.value, c = 0; c < s.actions.length; ) s.actions[c].type !== v ? c++ : (i.push(s.actions[c]), s.actions.splice(c, 1));
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            return i;
          })(u),
      g = y.length ? q(r, c, y, n) : r,
      x = p ? [r] : void 0,
      S = [];
    function b(o, u) {
      var y;
      switch (u.type) {
        case f:
          var b = lt(u, g, c, e.options.delays);
          return d && 'number' == typeof b.delay && d(b, g, c), b;
        case l:
          var w = pt(u, g, c, e.options.delays);
          return d && w.to !== t.SpecialTargets.Internal && ('entry' === o ? S.push(w) : d(w, g, c)), w;
        case m:
          var _ = St(u, g, c);
          return null == d || d(_, g, c), _;
        case T:
          if (
            !(j =
              null ===
                (y = u.conds.find(function (t) {
                  var i = H(t.cond, e.options.guards);
                  return !i || et(e, i, g, c, d ? void 0 : n);
                })) || void 0 === y
                ? void 0
                : y.actions)
          )
            return [];
          var E = a(Ct(e, n, g, c, [{ type: o, actions: ut(B(j), e.options.actions) }], d, p), 2),
            O = E[0],
            k = E[1];
          return (g = k), null == x || x.push(g), O;
        case A:
          var j;
          if (!(j = u.get(g, c.data))) return [];
          var N = a(Ct(e, n, g, c, [{ type: o, actions: ut(B(j), e.options.actions) }], d, p), 2),
            I = N[0],
            P = N[1];
          return (g = P), null == x || x.push(g), I;
        case h:
          _ = Et(u, g, c);
          return null == d || d(_, r, c), _;
        case v:
          (g = q(g, c, [u], d ? void 0 : n)), null == x || x.push(g);
          break;
        default:
          var C = ct(u, e.options.actions),
            L = C.exec;
          if (d) d(C, g, c);
          else if (L && x) {
            var V = x.length - 1;
            C = i(i({}, C), {
              exec: function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                L.apply(void 0, s([x[V]], a(e), !1));
              },
            });
          }
          return C;
      }
    }
    return [
      M(
        u.map(function (t) {
          var e,
            n,
            i = [];
          try {
            for (var r = o(t.actions), a = r.next(); !a.done; a = r.next()) {
              var s = a.value,
                u = b(t.type, s);
              u && (i = i.concat(u));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          return (
            S.forEach(function (t) {
              d(t, g, c);
            }),
            (S.length = 0),
            i
          );
        })
      ),
      g,
    ];
  }
  var Lt = Object.freeze({
      __proto__: null,
      actionTypes: O,
      initEvent: at,
      getActionFunction: st,
      toActionObject: ct,
      toActionObjects: ut,
      toActivityDefinition: ht,
      raise: ft,
      resolveRaise: lt,
      send: dt,
      resolveSend: pt,
      sendParent: vt,
      sendTo: yt,
      sendUpdate: gt,
      respond: function (t, e) {
        return dt(
          t,
          i(i({}, e), {
            to: function (t, e, n) {
              return n._event.origin;
            },
          })
        );
      },
      log: xt,
      resolveLog: St,
      cancel: bt,
      start: wt,
      stop: _t,
      resolveStop: Et,
      assign: Tt,
      isActionObject: function (t) {
        return 'object' == typeof t && 'type' in t;
      },
      after: At,
      done: Ot,
      doneInvoke: kt,
      error: jt,
      pure: Nt,
      forwardTo: It,
      escalate: function (e, n) {
        return vt(
          function (t, n, i) {
            return { type: _, data: $(e) ? e(t, n, i) : e };
          },
          i(i({}, n), { to: t.SpecialTargets.Parent })
        );
      },
      choose: Pt,
      resolveActions: Ct,
    }),
    Vt = [],
    Dt = function (t, e) {
      Vt.push(t);
      var n = e(t);
      return Vt.pop(), n;
    };
  function Rt(t) {
    var e;
    return (
      ((e = {
        id: t,
        send: function () {},
        subscribe: function () {
          return { unsubscribe: function () {} };
        },
        getSnapshot: function () {},
        toJSON: function () {
          return { id: t };
        },
      })[G] = function () {
        return this;
      }),
      e
    );
  }
  function Mt(t, e, n) {
    var i = Rt(e);
    if (((i.deferred = !0), K(t))) {
      var r = (i.state = Dt(void 0, function () {
        return (n ? t.withContext(n) : t).initialState;
      }));
      i.getSnapshot = function () {
        return r;
      };
    }
    return i;
  }
  function zt(t) {
    var e;
    return i(
      (((e = {
        subscribe: function () {
          return { unsubscribe: function () {} };
        },
        id: 'anonymous',
        getSnapshot: function () {},
      })[G] = function () {
        return this;
      }),
      e),
      t
    );
  }
  var Bt = function (t) {
    return 'atomic' === t.type || 'final' === t.type;
  };
  function Ut(t) {
    return Object.keys(t.states).map(function (e) {
      return t.states[e];
    });
  }
  function Ft(t) {
    return Ut(t).filter(function (t) {
      return 'history' !== t.type;
    });
  }
  function Jt(t) {
    var e = [t];
    return Bt(t) ? e : e.concat(M(Ft(t).map(Jt)));
  }
  function qt(t, e) {
    var n,
      i,
      r,
      a,
      s,
      c,
      u,
      h,
      f = Xt(new Set(t)),
      l = new Set(e);
    try {
      for (var d = o(l), p = d.next(); !p.done; p = d.next()) for (var v = (E = p.value).parent; v && !l.has(v); ) l.add(v), (v = v.parent);
    } catch (t) {
      n = { error: t };
    } finally {
      try {
        p && !p.done && (i = d.return) && i.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    var y = Xt(l);
    try {
      for (var g = o(l), m = g.next(); !m.done; m = g.next()) {
        if ('compound' !== (E = m.value).type || (y.get(E) && y.get(E).length)) {
          if ('parallel' === E.type)
            try {
              for (var x = ((s = void 0), o(Ft(E))), S = x.next(); !S.done; S = x.next()) {
                var b = S.value;
                l.has(b) ||
                  (l.add(b),
                  f.get(b)
                    ? f.get(b).forEach(function (t) {
                        return l.add(t);
                      })
                    : b.initialStateNodes.forEach(function (t) {
                        return l.add(t);
                      }));
              }
            } catch (t) {
              s = { error: t };
            } finally {
              try {
                S && !S.done && (c = x.return) && c.call(x);
              } finally {
                if (s) throw s.error;
              }
            }
        } else
          f.get(E)
            ? f.get(E).forEach(function (t) {
                return l.add(t);
              })
            : E.initialStateNodes.forEach(function (t) {
                return l.add(t);
              });
      }
    } catch (t) {
      r = { error: t };
    } finally {
      try {
        m && !m.done && (a = g.return) && a.call(g);
      } finally {
        if (r) throw r.error;
      }
    }
    try {
      for (var w = o(l), _ = w.next(); !_.done; _ = w.next()) {
        var E;
        for (v = (E = _.value).parent; v && !l.has(v); ) l.add(v), (v = v.parent);
      }
    } catch (t) {
      u = { error: t };
    } finally {
      try {
        _ && !_.done && (h = w.return) && h.call(w);
      } finally {
        if (u) throw u.error;
      }
    }
    return l;
  }
  function Xt(t) {
    var e,
      n,
      i = new Map();
    try {
      for (var r = o(t), a = r.next(); !a.done; a = r.next()) {
        var s = a.value;
        i.has(s) || i.set(s, []), s.parent && (i.has(s.parent) || i.set(s.parent, []), i.get(s.parent).push(s));
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        a && !a.done && (n = r.return) && n.call(r);
      } finally {
        if (e) throw e.error;
      }
    }
    return i;
  }
  function $t(t, e) {
    return (function t(e, n) {
      var i = n.get(e);
      if (!i) return {};
      if ('compound' === e.type) {
        var r = i[0];
        if (!r) return {};
        if (Bt(r)) return r.key;
      }
      var o = {};
      return (
        i.forEach(function (e) {
          o[e.key] = t(e, n);
        }),
        o
      );
    })(t, Xt(qt([t], e)));
  }
  function Qt(t, e) {
    return Array.isArray(t)
      ? t.some(function (t) {
          return t === e;
        })
      : t instanceof Set && t.has(e);
  }
  function Ht(t, e) {
    return 'compound' === e.type
      ? Ft(e).some(function (e) {
          return 'final' === e.type && Qt(t, e);
        })
      : 'parallel' === e.type &&
          Ft(e).every(function (e) {
            return Ht(t, e);
          });
  }
  function Gt(t) {
    return new Set(
      M(
        t.map(function (t) {
          return t.tags;
        })
      )
    );
  }
  var Kt = (function () {
      function t(t) {
        var e,
          n,
          i = this;
        (this.actions = []),
          (this.activities = k),
          (this.meta = {}),
          (this.events = []),
          (this.value = t.value),
          (this.context = t.context),
          (this._event = t._event),
          (this._sessionid = t._sessionid),
          (this.event = this._event.data),
          (this.historyValue = t.historyValue),
          (this.history = t.history),
          (this.actions = t.actions || []),
          (this.activities = t.activities || k),
          (this.meta =
            (void 0 === (n = t.configuration) && (n = []),
            n.reduce(function (t, e) {
              return void 0 !== e.meta && (t[e.id] = e.meta), t;
            }, {}))),
          (this.events = t.events || []),
          (this.matches = this.matches.bind(this)),
          (this.toStrings = this.toStrings.bind(this)),
          (this.configuration = t.configuration),
          (this.transitions = t.transitions),
          (this.children = t.children),
          (this.done = !!t.done),
          (this.tags = null !== (e = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) && void 0 !== e ? e : new Set()),
          (this.machine = t.machine),
          Object.defineProperty(this, 'nextEvents', {
            get: function () {
              return (function (t) {
                return s(
                  [],
                  a(
                    new Set(
                      M(
                        s(
                          [],
                          a(
                            t.map(function (t) {
                              return t.ownEvents;
                            })
                          ),
                          !1
                        )
                      )
                    )
                  ),
                  !1
                );
              })(i.configuration);
            },
          });
      }
      return (
        (t.from = function (e, n) {
          return e instanceof t
            ? e.context !== n
              ? new t({
                  value: e.value,
                  context: n,
                  _event: e._event,
                  _sessionid: null,
                  historyValue: e.historyValue,
                  history: e.history,
                  actions: [],
                  activities: e.activities,
                  meta: {},
                  events: [],
                  configuration: [],
                  transitions: [],
                  children: {},
                })
              : e
            : new t({
                value: e,
                context: n,
                _event: at,
                _sessionid: null,
                historyValue: void 0,
                history: void 0,
                actions: [],
                activities: void 0,
                meta: void 0,
                events: [],
                configuration: [],
                transitions: [],
                children: {},
              });
        }),
        (t.create = function (e) {
          return new t(e);
        }),
        (t.inert = function (e, n) {
          if (e instanceof t) {
            if (!e.actions.length) return e;
            var i = at;
            return new t({
              value: e.value,
              context: n,
              _event: i,
              _sessionid: null,
              historyValue: e.historyValue,
              history: e.history,
              activities: e.activities,
              configuration: e.configuration,
              transitions: [],
              children: {},
            });
          }
          return t.from(e, n);
        }),
        (t.prototype.toStrings = function (t, e) {
          var n = this;
          if ((void 0 === t && (t = this.value), void 0 === e && (e = '.'), Q(t))) return [t];
          var i = Object.keys(t);
          return i.concat.apply(
            i,
            s(
              [],
              a(
                i.map(function (i) {
                  return n.toStrings(t[i], e).map(function (t) {
                    return i + e + t;
                  });
                })
              ),
              !1
            )
          );
        }),
        (t.prototype.toJSON = function () {
          var t = this;
          t.configuration, t.transitions;
          var e = t.tags;
          t.machine;
          var n = r(t, ['configuration', 'transitions', 'tags', 'machine']);
          return i(i({}, n), { tags: Array.from(e) });
        }),
        (t.prototype.matches = function (t) {
          return j(t, this.value);
        }),
        (t.prototype.hasTag = function (t) {
          return this.tags.has(t);
        }),
        (t.prototype.can = function (t) {
          var e;
          this.machine;
          var n = null === (e = this.machine) || void 0 === e ? void 0 : e.getTransitionData(this, t);
          return (
            !!(null == n ? void 0 : n.transitions.length) &&
            n.transitions.some(function (t) {
              return void 0 !== t.target || t.actions.length;
            })
          );
        }),
        t
      );
    })(),
    Wt = { deferEvents: !1 },
    Yt = (function () {
      function t(t) {
        (this.processingEvent = !1), (this.queue = []), (this.initialized = !1), (this.options = i(i({}, Wt), t));
      }
      return (
        (t.prototype.initialize = function (t) {
          if (((this.initialized = !0), t)) {
            if (!this.options.deferEvents) return void this.schedule(t);
            this.process(t);
          }
          this.flushEvents();
        }),
        (t.prototype.schedule = function (t) {
          if (this.initialized && !this.processingEvent) {
            if (0 !== this.queue.length) throw new Error('Event queue should be empty when it is not processing events');
            this.process(t), this.flushEvents();
          } else this.queue.push(t);
        }),
        (t.prototype.clear = function () {
          this.queue = [];
        }),
        (t.prototype.flushEvents = function () {
          for (var t = this.queue.shift(); t; ) this.process(t), (t = this.queue.shift());
        }),
        (t.prototype.process = function (t) {
          this.processingEvent = !0;
          try {
            t();
          } catch (t) {
            throw (this.clear(), t);
          } finally {
            this.processingEvent = !1;
          }
        }),
        t
      );
    })(),
    Zt = new Map(),
    te = 0,
    ee = function () {
      return 'x:'.concat(te++);
    },
    ne = function (t, e) {
      return Zt.set(t, e), t;
    },
    ie = function (t) {
      return Zt.get(t);
    },
    re = function (t) {
      Zt.delete(t);
    };
  function oe() {
    return 'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : void 0;
  }
  function ae(t) {
    if (oe()) {
      var e = (function () {
        var t = oe();
        if (t && '__xstate__' in t) return t.__xstate__;
      })();
      e && e.register(t);
    }
  }
  function se(t, e) {
    void 0 === e && (e = {});
    var n = t.initialState,
      i = new Set(),
      r = [],
      o = !1,
      a = zt({
        id: e.id,
        send: function (e) {
          r.push(e),
            (function () {
              if (!o) {
                for (o = !0; r.length > 0; ) {
                  var e = r.shift();
                  (n = t.transition(n, e, s)),
                    i.forEach(function (t) {
                      return t.next(n);
                    });
                }
                o = !1;
              }
            })();
        },
        getSnapshot: function () {
          return n;
        },
        subscribe: function (t, e, r) {
          var o = it(t, e, r);
          return (
            i.add(o),
            o.next(n),
            {
              unsubscribe: function () {
                i.delete(o);
              },
            }
          );
        },
      }),
      s = { parent: e.parent, self: a, id: e.id || 'anonymous', observers: i };
    return (n = t.start ? t.start(s) : n), a;
  }
  var ce,
    ue = { sync: !1, autoForward: !1 };
  (t.InterpreterStatus = void 0),
    ((ce = t.InterpreterStatus || (t.InterpreterStatus = {}))[(ce.NotStarted = 0)] = 'NotStarted'),
    (ce[(ce.Running = 1)] = 'Running'),
    (ce[(ce.Stopped = 2)] = 'Stopped');
  var he = (function () {
    function e(n, r) {
      void 0 === r && (r = e.defaultOptions);
      var o = this;
      (this.machine = n),
        (this.delayedEventsMap = {}),
        (this.listeners = new Set()),
        (this.contextListeners = new Set()),
        (this.stopListeners = new Set()),
        (this.doneListeners = new Set()),
        (this.eventListeners = new Set()),
        (this.sendListeners = new Set()),
        (this.initialized = !1),
        (this.status = t.InterpreterStatus.NotStarted),
        (this.children = new Map()),
        (this.forwardTo = new Set()),
        (this._outgoingQueue = []),
        (this.init = this.start),
        (this.send = function (e, n) {
          if (X(e)) return o.batch(e), o.state;
          var i = Z(Y(e, n));
          if (o.status === t.InterpreterStatus.Stopped) return o.state;
          if (o.status !== t.InterpreterStatus.Running && !o.options.deferEvents)
            throw new Error(
              'Event "'
                .concat(i.name, '" was sent to uninitialized service "')
                .concat(o.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ')
                .concat(JSON.stringify(i.data))
            );
          return (
            o.scheduler.schedule(function () {
              o.forward(i);
              var t = o._nextState(i);
              o.update(t, i);
            }),
            o._state
          );
        }),
        (this.sendTo = function (e, n, r) {
          var a,
            s = o.parent && (n === t.SpecialTargets.Parent || o.parent.id === n),
            c = s ? o.parent : Q(n) ? (n === t.SpecialTargets.Internal ? o : o.children.get(n) || ie(n)) : (a = n) && 'function' == typeof a.send ? n : void 0;
          if (c)
            if ('machine' in c) {
              if (o.status !== t.InterpreterStatus.Stopped || o.parent !== c || o.state.done) {
                var u = i(i({}, e), { name: e.name === _ ? ''.concat(jt(o.id)) : e.name, origin: o.sessionId });
                !r && o.machine.config.predictableActionArguments ? o._outgoingQueue.push([c, u]) : c.send(u);
              }
            } else !r && o.machine.config.predictableActionArguments ? o._outgoingQueue.push([c, e.data]) : c.send(e.data);
          else if (!s) throw new Error("Unable to send event to child '".concat(n, "' from service '").concat(o.id, "'."));
        }),
        (this._exec = function (e, n, i, r) {
          void 0 === r && (r = o.machine.options.actions);
          var a = e.exec || st(e.type, r),
            s = $(a) ? a : a ? a.exec : e.exec;
          if (s)
            try {
              return s(n, i.data, o.machine.config.predictableActionArguments ? { action: e, _event: i } : { action: e, state: o.state, _event: i });
            } catch (t) {
              throw (o.parent && o.parent.send({ type: 'xstate.error', data: t }), t);
            }
          switch (e.type) {
            case f:
              var c = e;
              o.defer(c);
              break;
            case l:
              var p = e;
              if ('number' == typeof p.delay) return void o.defer(p);
              p.to ? o.sendTo(p._event, p.to, i === at) : o.send(p._event);
              break;
            case d:
              o.cancel(e.sendId);
              break;
            case u:
              if (o.status !== t.InterpreterStatus.Running) return;
              var v = e.activity;
              if (!o.machine.config.predictableActionArguments && !o.state.activities[v.id || v.type]) break;
              if (v.type === t.ActionTypes.Invoke) {
                var y = nt(v.src),
                  g = o.machine.options.services ? o.machine.options.services[y.type] : void 0,
                  x = v.id,
                  S = v.data,
                  b = 'autoForward' in v ? v.autoForward : !!v.forward;
                if (!g) return;
                var w = S ? U(S, n, i) : void 0;
                if ('string' == typeof g) return;
                var _ = $(g) ? g(n, i.data, { data: w, src: y, meta: v.meta }) : g;
                if (!_) return;
                var E = void 0;
                K(_) && ((_ = w ? _.withContext(w) : _), (E = { autoForward: b })), o.spawn(_, x, E);
              } else o.spawnActivity(v);
              break;
            case h:
              o.stopChild(e.activity.id);
              break;
            case m:
              var T = e,
                A = T.label,
                O = T.value;
              A ? o.logger(A, O) : o.logger(O);
          }
        });
      var a = i(i({}, e.defaultOptions), r),
        s = a.clock,
        c = a.logger,
        p = a.parent,
        v = a.id,
        y = void 0 !== v ? v : n.id;
      (this.id = y),
        (this.logger = c),
        (this.clock = s),
        (this.parent = p),
        (this.options = a),
        (this.scheduler = new Yt({ deferEvents: this.options.deferEvents })),
        (this.sessionId = ee());
    }
    return (
      Object.defineProperty(e.prototype, 'initialState', {
        get: function () {
          var t = this;
          return this._initialState
            ? this._initialState
            : Dt(this, function () {
                return (t._initialState = t.machine.initialState), t._initialState;
              });
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'state', {
        get: function () {
          return this._state;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.execute = function (t, e) {
        var n, i;
        try {
          for (var r = o(t.actions), a = r.next(); !a.done; a = r.next()) {
            var s = a.value;
            this.exec(s, t, e);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (i = r.return) && i.call(r);
          } finally {
            if (n) throw n.error;
          }
        }
      }),
      (e.prototype.update = function (t, e) {
        var n,
          i,
          r,
          a,
          s,
          c,
          u,
          h,
          f = this;
        if (((t._sessionid = this.sessionId), (this._state = t), (this.machine.config.predictableActionArguments && e !== at) || !this.options.execute))
          for (var l = void 0; (l = this._outgoingQueue.shift()); ) l[0].send(l[1]);
        else this.execute(this.state);
        if (
          (this.children.forEach(function (t) {
            f.state.children[t.id] = t;
          }),
          this.devTools && this.devTools.send(e.data, t),
          t.event)
        )
          try {
            for (var d = o(this.eventListeners), p = d.next(); !p.done; p = d.next()) {
              (0, p.value)(t.event);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              p && !p.done && (i = d.return) && i.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
        try {
          for (var v = o(this.listeners), y = v.next(); !y.done; y = v.next()) {
            (0, y.value)(t, t.event);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            y && !y.done && (a = v.return) && a.call(v);
          } finally {
            if (r) throw r.error;
          }
        }
        try {
          for (var g = o(this.contextListeners), m = g.next(); !m.done; m = g.next()) {
            (0, m.value)(this.state.context, this.state.history ? this.state.history.context : void 0);
          }
        } catch (t) {
          s = { error: t };
        } finally {
          try {
            m && !m.done && (c = g.return) && c.call(g);
          } finally {
            if (s) throw s.error;
          }
        }
        if (this.state.done) {
          var x = t.configuration.find(function (t) {
              return 'final' === t.type && t.parent === f.machine;
            }),
            S = x && x.doneData ? U(x.doneData, t.context, e) : void 0;
          this._doneEvent = kt(this.id, S);
          try {
            for (var b = o(this.doneListeners), w = b.next(); !w.done; w = b.next()) {
              (0, w.value)(this._doneEvent);
            }
          } catch (t) {
            u = { error: t };
          } finally {
            try {
              w && !w.done && (h = b.return) && h.call(b);
            } finally {
              if (u) throw u.error;
            }
          }
          this._stop(), this._stopChildren(), re(this.sessionId);
        }
      }),
      (e.prototype.onTransition = function (e) {
        return this.listeners.add(e), this.status === t.InterpreterStatus.Running && e(this.state, this.state.event), this;
      }),
      (e.prototype.subscribe = function (e, n, i) {
        var r = this,
          o = it(e, n, i);
        this.listeners.add(o.next), this.status !== t.InterpreterStatus.NotStarted && o.next(this.state);
        var a = function () {
          r.doneListeners.delete(a), r.stopListeners.delete(a), o.complete();
        };
        return (
          this.status === t.InterpreterStatus.Stopped ? o.complete() : (this.onDone(a), this.onStop(a)),
          {
            unsubscribe: function () {
              r.listeners.delete(o.next), r.doneListeners.delete(a), r.stopListeners.delete(a);
            },
          }
        );
      }),
      (e.prototype.onEvent = function (t) {
        return this.eventListeners.add(t), this;
      }),
      (e.prototype.onSend = function (t) {
        return this.sendListeners.add(t), this;
      }),
      (e.prototype.onChange = function (t) {
        return this.contextListeners.add(t), this;
      }),
      (e.prototype.onStop = function (t) {
        return this.stopListeners.add(t), this;
      }),
      (e.prototype.onDone = function (e) {
        return this.status === t.InterpreterStatus.Stopped && this._doneEvent ? e(this._doneEvent) : this.doneListeners.add(e), this;
      }),
      (e.prototype.off = function (t) {
        return (
          this.listeners.delete(t),
          this.eventListeners.delete(t),
          this.sendListeners.delete(t),
          this.stopListeners.delete(t),
          this.doneListeners.delete(t),
          this.contextListeners.delete(t),
          this
        );
      }),
      (e.prototype.start = function (e) {
        var n = this;
        if (this.status === t.InterpreterStatus.Running) return this;
        this.machine._init(), ne(this.sessionId, this), (this.initialized = !0), (this.status = t.InterpreterStatus.Running);
        var i =
          void 0 === e
            ? this.initialState
            : Dt(this, function () {
                return 'object' == typeof (t = e) && null !== t && 'value' in t && '_event' in t
                  ? n.machine.resolveState(e)
                  : n.machine.resolveState(Kt.from(e, n.machine.context));
                var t;
              });
        return (
          this.options.devTools && this.attachDev(),
          this.scheduler.initialize(function () {
            n.update(i, at);
          }),
          this
        );
      }),
      (e.prototype._stopChildren = function () {
        this.children.forEach(function (t) {
          $(t.stop) && t.stop();
        }),
          this.children.clear();
      }),
      (e.prototype._stop = function () {
        var e, n, i, r, a, s, c, u, h, f;
        try {
          for (var l = o(this.listeners), d = l.next(); !d.done; d = l.next()) {
            var p = d.value;
            this.listeners.delete(p);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            d && !d.done && (n = l.return) && n.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        try {
          for (var v = o(this.stopListeners), y = v.next(); !y.done; y = v.next()) {
            (p = y.value)(), this.stopListeners.delete(p);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            y && !y.done && (r = v.return) && r.call(v);
          } finally {
            if (i) throw i.error;
          }
        }
        try {
          for (var g = o(this.contextListeners), m = g.next(); !m.done; m = g.next()) {
            p = m.value;
            this.contextListeners.delete(p);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            m && !m.done && (s = g.return) && s.call(g);
          } finally {
            if (a) throw a.error;
          }
        }
        try {
          for (var x = o(this.doneListeners), S = x.next(); !S.done; S = x.next()) {
            p = S.value;
            this.doneListeners.delete(p);
          }
        } catch (t) {
          c = { error: t };
        } finally {
          try {
            S && !S.done && (u = x.return) && u.call(x);
          } finally {
            if (c) throw c.error;
          }
        }
        if (!this.initialized) return this;
        (this.initialized = !1), (this.status = t.InterpreterStatus.Stopped), (this._initialState = void 0);
        try {
          for (var b = o(Object.keys(this.delayedEventsMap)), w = b.next(); !w.done; w = b.next()) {
            var _ = w.value;
            this.clock.clearTimeout(this.delayedEventsMap[_]);
          }
        } catch (t) {
          h = { error: t };
        } finally {
          try {
            w && !w.done && (f = b.return) && f.call(b);
          } finally {
            if (h) throw h.error;
          }
        }
        this.scheduler.clear(), (this.scheduler = new Yt({ deferEvents: this.options.deferEvents }));
      }),
      (e.prototype.stop = function () {
        var t = this,
          e = this.scheduler;
        return (
          this._stop(),
          e.schedule(function () {
            var e = Z({ type: 'xstate.stop' }),
              n = Dt(t, function () {
                var n = M(
                    s([], a(t.state.configuration), !1)
                      .sort(function (t, e) {
                        return e.order - t.order;
                      })
                      .map(function (e) {
                        return ut(e.onExit, t.machine.options.actions);
                      })
                  ),
                  i = a(
                    Ct(
                      t.machine,
                      t.state,
                      t.state.context,
                      e,
                      [{ type: 'exit', actions: n }],
                      t.machine.config.predictableActionArguments ? t._exec : void 0,
                      t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder
                    ),
                    2
                  ),
                  r = i[0],
                  o = i[1],
                  c = new Kt({
                    value: t.state.value,
                    context: o,
                    _event: e,
                    _sessionid: t.sessionId,
                    historyValue: void 0,
                    history: t.state,
                    actions: r.filter(function (t) {
                      return !ot(t);
                    }),
                    activities: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                    done: t.state.done,
                    tags: t.state.tags,
                    machine: t.machine,
                  });
                return (c.changed = !0), c;
              });
            t.update(n, e), t._stopChildren(), re(t.sessionId);
          }),
          this
        );
      }),
      (e.prototype.batch = function (e) {
        var n = this;
        if (this.status === t.InterpreterStatus.NotStarted && this.options.deferEvents);
        else if (this.status !== t.InterpreterStatus.Running)
          throw new Error(
            ''
              .concat(e.length, ' event(s) were sent to uninitialized service "')
              .concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
          );
        if (e.length) {
          var r = !!this.machine.config.predictableActionArguments && this._exec;
          this.scheduler.schedule(function () {
            var t,
              c,
              u = n.state,
              h = !1,
              f = [],
              l = function (t) {
                var e = Z(t);
                n.forward(e),
                  (u = Dt(n, function () {
                    return n.machine.transition(u, e, void 0, r || void 0);
                  })),
                  f.push.apply(
                    f,
                    s(
                      [],
                      a(
                        n.machine.config.predictableActionArguments
                          ? u.actions
                          : u.actions.map(function (t) {
                              return (function (t, e) {
                                var n = t.exec;
                                return i(i({}, t), {
                                  exec:
                                    void 0 !== n
                                      ? function () {
                                          return n(e.context, e.event, { action: t, state: e, _event: e._event });
                                        }
                                      : void 0,
                                });
                              })(t, u);
                            })
                      ),
                      !1
                    )
                  ),
                  (h = h || !!u.changed);
              };
            try {
              for (var d = o(e), p = d.next(); !p.done; p = d.next()) {
                l(p.value);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                p && !p.done && (c = d.return) && c.call(d);
              } finally {
                if (t) throw t.error;
              }
            }
            (u.changed = h), (u.actions = f), n.update(u, Z(e[e.length - 1]));
          });
        }
      }),
      (e.prototype.sender = function (t) {
        return this.send.bind(this, t);
      }),
      (e.prototype._nextState = function (t, e) {
        var n = this;
        void 0 === e && (e = !!this.machine.config.predictableActionArguments && this._exec);
        var i = Z(t);
        if (
          0 === i.name.indexOf(w) &&
          !this.state.nextEvents.some(function (t) {
            return 0 === t.indexOf(w);
          })
        )
          throw i.data.data;
        return Dt(this, function () {
          return n.machine.transition(n.state, i, void 0, e || void 0);
        });
      }),
      (e.prototype.nextState = function (t) {
        return this._nextState(t, !1);
      }),
      (e.prototype.forward = function (t) {
        var e, n;
        try {
          for (var i = o(this.forwardTo), r = i.next(); !r.done; r = i.next()) {
            var a = r.value,
              s = this.children.get(a);
            if (!s) throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
            s.send(t);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (e.prototype.defer = function (t) {
        var e = this,
          n = this.clock.setTimeout(function () {
            'to' in t && t.to ? e.sendTo(t._event, t.to, !0) : e.send(t._event);
          }, t.delay);
        t.id && (this.delayedEventsMap[t.id] = n);
      }),
      (e.prototype.cancel = function (t) {
        this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
      }),
      (e.prototype.exec = function (t, e, n) {
        void 0 === n && (n = this.machine.options.actions), this._exec(t, e.context, e._event, n);
      }),
      (e.prototype.removeChild = function (t) {
        var e;
        this.children.delete(t), this.forwardTo.delete(t), null === (e = this.state) || void 0 === e || delete e.children[t];
      }),
      (e.prototype.stopChild = function (t) {
        var e = this.children.get(t);
        e && (this.removeChild(t), $(e.stop) && e.stop());
      }),
      (e.prototype.spawn = function (e, n, r) {
        if (this.status !== t.InterpreterStatus.Running) return Mt(e, n);
        if (F(e)) return this.spawnPromise(Promise.resolve(e), n);
        if ($(e)) return this.spawnCallback(e, n);
        if (
          (function (t) {
            try {
              return 'function' == typeof t.send;
            } catch (t) {
              return !1;
            }
          })((a = e)) &&
          'id' in a
        )
          return this.spawnActor(e, n);
        if (
          (function (t) {
            try {
              return 'subscribe' in t && $(t.subscribe);
            } catch (t) {
              return !1;
            }
          })(e)
        )
          return this.spawnObservable(e, n);
        if (K(e)) return this.spawnMachine(e, i(i({}, r), { id: n }));
        if (null !== (o = e) && 'object' == typeof o && 'transition' in o && 'function' == typeof o.transition) return this.spawnBehavior(e, n);
        throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof e, '".'));
        var o, a;
      }),
      (e.prototype.spawnMachine = function (t, n) {
        var r = this;
        void 0 === n && (n = {});
        var o = new e(t, i(i({}, this.options), { parent: this, id: n.id || t.id })),
          a = i(i({}, ue), n);
        a.sync &&
          o.onTransition(function (t) {
            r.send(E, { state: t, id: o.id });
          });
        var s = o;
        return (
          this.children.set(o.id, s),
          a.autoForward && this.forwardTo.add(o.id),
          o
            .onDone(function (t) {
              r.removeChild(o.id), r.send(Z(t, { origin: o.id }));
            })
            .start(),
          s
        );
      }),
      (e.prototype.spawnBehavior = function (t, e) {
        var n = se(t, { id: e, parent: this });
        return this.children.set(e, n), n;
      }),
      (e.prototype.spawnPromise = function (t, e) {
        var n,
          i,
          r = this,
          o = !1;
        t.then(
          function (t) {
            o || ((i = t), r.removeChild(e), r.send(Z(kt(e, t), { origin: e })));
          },
          function (t) {
            if (!o) {
              r.removeChild(e);
              var n = jt(e, t);
              try {
                r.send(Z(n, { origin: e }));
              } catch (t) {
                r.devTools && r.devTools.send(n, r.state), r.machine.strict && r.stop();
              }
            }
          }
        );
        var a =
          (((n = {
            id: e,
            send: function () {},
            subscribe: function (e, n, i) {
              var r = it(e, n, i),
                o = !1;
              return (
                t.then(
                  function (t) {
                    o || (r.next(t), o || r.complete());
                  },
                  function (t) {
                    o || r.error(t);
                  }
                ),
                {
                  unsubscribe: function () {
                    return (o = !0);
                  },
                }
              );
            },
            stop: function () {
              o = !0;
            },
            toJSON: function () {
              return { id: e };
            },
            getSnapshot: function () {
              return i;
            },
          })[G] = function () {
            return this;
          }),
          n);
        return this.children.set(e, a), a;
      }),
      (e.prototype.spawnCallback = function (t, e) {
        var n,
          i,
          r,
          o = this,
          a = !1,
          s = new Set(),
          c = new Set();
        try {
          r = t(
            function (t) {
              (i = t),
                c.forEach(function (e) {
                  return e(t);
                }),
                a || o.send(Z(t, { origin: e }));
            },
            function (t) {
              s.add(t);
            }
          );
        } catch (t) {
          this.send(jt(e, t));
        }
        if (F(r)) return this.spawnPromise(r, e);
        var u =
          (((n = {
            id: e,
            send: function (t) {
              return s.forEach(function (e) {
                return e(t);
              });
            },
            subscribe: function (t) {
              var e = it(t);
              return (
                c.add(e.next),
                {
                  unsubscribe: function () {
                    c.delete(e.next);
                  },
                }
              );
            },
            stop: function () {
              (a = !0), $(r) && r();
            },
            toJSON: function () {
              return { id: e };
            },
            getSnapshot: function () {
              return i;
            },
          })[G] = function () {
            return this;
          }),
          n);
        return this.children.set(e, u), u;
      }),
      (e.prototype.spawnObservable = function (t, e) {
        var n,
          i,
          r = this,
          o = t.subscribe(
            function (t) {
              (i = t), r.send(Z(t, { origin: e }));
            },
            function (t) {
              r.removeChild(e), r.send(Z(jt(e, t), { origin: e }));
            },
            function () {
              r.removeChild(e), r.send(Z(kt(e), { origin: e }));
            }
          ),
          a =
            (((n = {
              id: e,
              send: function () {},
              subscribe: function (e, n, i) {
                return t.subscribe(e, n, i);
              },
              stop: function () {
                return o.unsubscribe();
              },
              getSnapshot: function () {
                return i;
              },
              toJSON: function () {
                return { id: e };
              },
            })[G] = function () {
              return this;
            }),
            n);
        return this.children.set(e, a), a;
      }),
      (e.prototype.spawnActor = function (t, e) {
        return this.children.set(e, t), t;
      }),
      (e.prototype.spawnActivity = function (t) {
        var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
        if (e) {
          var n = e(this.state.context, t);
          this.spawnEffect(t.id, n);
        }
      }),
      (e.prototype.spawnEffect = function (t, e) {
        var n;
        this.children.set(
          t,
          (((n = {
            id: t,
            send: function () {},
            subscribe: function () {
              return { unsubscribe: function () {} };
            },
            stop: e || void 0,
            getSnapshot: function () {},
            toJSON: function () {
              return { id: t };
            },
          })[G] = function () {
            return this;
          }),
          n)
        );
      }),
      (e.prototype.attachDev = function () {
        var t = oe();
        if (this.options.devTools && t) {
          if (t.__REDUX_DEVTOOLS_EXTENSION__) {
            var e = 'object' == typeof this.options.devTools ? this.options.devTools : void 0;
            (this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(
              i(
                i(
                  {
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function (t) {
                      return { value: t.value, context: t.context, actions: t.actions };
                    },
                  },
                  e
                ),
                { features: i({ jump: !1, skip: !1 }, e ? e.features : void 0) }
              ),
              this.machine
            )),
              this.devTools.init(this.state);
          }
          ae(this);
        }
      }),
      (e.prototype.toJSON = function () {
        return { id: this.id };
      }),
      (e.prototype[G] = function () {
        return this;
      }),
      (e.prototype.getSnapshot = function () {
        return this.status === t.InterpreterStatus.NotStarted ? this.initialState : this._state;
      }),
      (e.defaultOptions = {
        execute: !0,
        deferEvents: !0,
        clock: {
          setTimeout: function (t, e) {
            return setTimeout(t, e);
          },
          clearTimeout: function (t) {
            return clearTimeout(t);
          },
        },
        logger: console.log.bind(console),
        devTools: !1,
      }),
      (e.interpret = fe),
      e
    );
  })();
  function fe(t, e) {
    return new he(t, e);
  }
  function le(t) {
    if ('string' == typeof t) {
      var e = {
        type: t,
        toString: function () {
          return t;
        },
      };
      return e;
    }
    return t;
  }
  function de(t) {
    return i(i({ type: S }, t), {
      toJSON: function () {
        t.onDone, t.onError;
        var e = r(t, ['onDone', 'onError']);
        return i(i({}, e), { type: S, src: le(t.src) });
      },
    });
  }
  var pe = {},
    ve = function (t) {
      return '#' === t[0];
    },
    ye = (function () {
      function t(e, n, r, c) {
        void 0 === r && (r = 'context' in e ? e.context : void 0);
        var u,
          h = this;
        (this.config = e),
          (this._context = r),
          (this.order = -1),
          (this.__xstatenode = !0),
          (this.__cache = {
            events: void 0,
            relativeValue: new Map(),
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0,
          }),
          (this.idMap = {}),
          (this.tags = []),
          (this.options = Object.assign({ actions: {}, guards: {}, services: {}, activities: {}, delays: {} }, n)),
          (this.parent = null == c ? void 0 : c.parent),
          (this.key = this.config.key || (null == c ? void 0 : c.key) || this.config.id || '(machine)'),
          (this.machine = this.parent ? this.parent.machine : this),
          (this.path = this.parent ? this.parent.path.concat(this.key) : []),
          (this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : '.')),
          (this.id = this.config.id || s([this.machine.key], a(this.path), !1).join(this.delimiter)),
          (this.version = this.parent ? this.parent.version : this.config.version),
          (this.type =
            this.config.type ||
            (this.config.parallel
              ? 'parallel'
              : this.config.states && Object.keys(this.config.states).length
              ? 'compound'
              : this.config.history
              ? 'history'
              : 'atomic')),
          (this.schema = this.parent ? this.machine.schema : null !== (u = this.config.schema) && void 0 !== u ? u : {}),
          (this.description = this.config.description),
          (this.initial = this.config.initial),
          (this.states = this.config.states
            ? L(this.config.states, function (e, n) {
                var r,
                  o = new t(e, {}, void 0, { parent: h, key: n });
                return Object.assign(h.idMap, i((((r = {})[o.id] = o), r), o.idMap)), o;
              })
            : pe);
        var f = 0;
        !(function t(e) {
          var n, i;
          e.order = f++;
          try {
            for (var r = o(Ut(e)), a = r.next(); !a.done; a = r.next()) {
              t(a.value);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (i = r.return) && i.call(r);
            } finally {
              if (n) throw n.error;
            }
          }
        })(this),
          (this.history = !0 === this.config.history ? 'shallow' : this.config.history || !1),
          (this._transient =
            !!this.config.always ||
            (!!this.config.on &&
              (Array.isArray(this.config.on)
                ? this.config.on.some(function (t) {
                    return '' === t.event;
                  })
                : '' in this.config.on))),
          (this.strict = !!this.config.strict),
          (this.onEntry = B(this.config.entry || this.config.onEntry).map(function (t) {
            return ct(t);
          })),
          (this.onExit = B(this.config.exit || this.config.onExit).map(function (t) {
            return ct(t);
          })),
          (this.meta = this.config.meta),
          (this.doneData = 'final' === this.type ? this.config.data : void 0),
          (this.invoke = B(this.config.invoke).map(function (t, e) {
            var n, r;
            if (K(t)) {
              var o = rt(h.id, e);
              return (h.machine.options.services = i((((n = {})[o] = t), n), h.machine.options.services)), de({ src: o, id: o });
            }
            if (Q(t.src)) {
              o = t.id || rt(h.id, e);
              return de(i(i({}, t), { id: o, src: t.src }));
            }
            if (K(t.src) || $(t.src)) {
              o = t.id || rt(h.id, e);
              return (h.machine.options.services = i((((r = {})[o] = t.src), r), h.machine.options.services)), de(i(i({ id: o }, t), { src: o }));
            }
            var a = t.src;
            return de(i(i({ id: rt(h.id, e) }, t), { src: a }));
          })),
          (this.activities = B(this.config.activities)
            .concat(this.invoke)
            .map(function (t) {
              return ht(t);
            })),
          (this.transition = this.transition.bind(this)),
          (this.tags = B(this.config.tags));
      }
      return (
        (t.prototype._init = function () {
          this.__cache.transitions ||
            Jt(this).forEach(function (t) {
              return t.on;
            });
        }),
        (t.prototype.withConfig = function (e, n) {
          var r = this.options,
            o = r.actions,
            a = r.activities,
            s = r.guards,
            c = r.services,
            u = r.delays;
          return new t(
            this.config,
            {
              actions: i(i({}, o), e.actions),
              activities: i(i({}, a), e.activities),
              guards: i(i({}, s), e.guards),
              services: i(i({}, c), e.services),
              delays: i(i({}, u), e.delays),
            },
            null != n ? n : this.context
          );
        }),
        (t.prototype.withContext = function (e) {
          return new t(this.config, this.options, e);
        }),
        Object.defineProperty(t.prototype, 'context', {
          get: function () {
            return $(this._context) ? this._context() : this._context;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'definition', {
          get: function () {
            return {
              id: this.id,
              key: this.key,
              version: this.version,
              context: this.context,
              type: this.type,
              initial: this.initial,
              history: this.history,
              states: L(this.states, function (t) {
                return t.definition;
              }),
              on: this.on,
              transitions: this.transitions,
              entry: this.onEntry,
              exit: this.onExit,
              activities: this.activities || [],
              meta: this.meta,
              order: this.order || -1,
              data: this.doneData,
              invoke: this.invoke,
              description: this.description,
              tags: this.tags,
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toJSON = function () {
          return this.definition;
        }),
        Object.defineProperty(t.prototype, 'on', {
          get: function () {
            if (this.__cache.on) return this.__cache.on;
            var t = this.transitions;
            return (this.__cache.on = t.reduce(function (t, e) {
              return (t[e.eventType] = t[e.eventType] || []), t[e.eventType].push(e), t;
            }, {}));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'after', {
          get: function () {
            return this.__cache.delayedTransitions || ((this.__cache.delayedTransitions = this.getDelayedTransitions()), this.__cache.delayedTransitions);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'transitions', {
          get: function () {
            return this.__cache.transitions || ((this.__cache.transitions = this.formatTransitions()), this.__cache.transitions);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getCandidates = function (t) {
          if (this.__cache.candidates[t]) return this.__cache.candidates[t];
          var e = '' === t,
            n = this.transitions.filter(function (n) {
              var i = n.eventType === t;
              return e ? i : i || '*' === n.eventType;
            });
          return (this.__cache.candidates[t] = n), n;
        }),
        (t.prototype.getDelayedTransitions = function () {
          var t = this,
            e = this.config.after;
          if (!e) return [];
          var n = function (e, n) {
            var i = At($(e) ? ''.concat(t.id, ':delay[').concat(n, ']') : e, t.id);
            return t.onEntry.push(dt(i, { delay: e })), t.onExit.push(bt(i)), i;
          };
          return (
            X(e)
              ? e.map(function (t, e) {
                  var r = n(t.delay, e);
                  return i(i({}, t), { event: r });
                })
              : M(
                  Object.keys(e).map(function (t, r) {
                    var o = e[t],
                      a = Q(o) ? { target: o } : o,
                      s = isNaN(+t) ? t : +t,
                      c = n(s, r);
                    return B(a).map(function (t) {
                      return i(i({}, t), { event: c, delay: s });
                    });
                  })
                )
          ).map(function (e) {
            var n = e.delay;
            return i(i({}, t.formatTransition(e)), { delay: n });
          });
        }),
        (t.prototype.getStateNodes = function (t) {
          var e,
            n = this;
          if (!t) return [];
          var i = t instanceof Kt ? t.value : P(t, this.delimiter);
          if (Q(i)) {
            var r = this.getStateNode(i).initial;
            return void 0 !== r ? this.getStateNodes((((e = {})[i] = r), e)) : [this, this.states[i]];
          }
          var o = Object.keys(i),
            c = [this];
          return (
            c.push.apply(
              c,
              s(
                [],
                a(
                  M(
                    o.map(function (t) {
                      return n.getStateNode(t).getStateNodes(i[t]);
                    })
                  )
                ),
                !1
              )
            ),
            c
          );
        }),
        (t.prototype.handles = function (t) {
          var e = N(t);
          return this.events.includes(e);
        }),
        (t.prototype.resolveState = function (t) {
          var e = t instanceof Kt ? t : Kt.create(t),
            n = Array.from(qt([], this.getStateNodes(e.value)));
          return new Kt(i(i({}, e), { value: this.resolve(e.value), configuration: n, done: Ht(n, this), tags: Gt(n), machine: this.machine }));
        }),
        (t.prototype.transitionLeafNode = function (t, e, n) {
          var i = this.getStateNode(t).next(e, n);
          return i && i.transitions.length ? i : this.next(e, n);
        }),
        (t.prototype.transitionCompoundNode = function (t, e, n) {
          var i = Object.keys(t),
            r = this.getStateNode(i[0])._transition(t[i[0]], e, n);
          return r && r.transitions.length ? r : this.next(e, n);
        }),
        (t.prototype.transitionParallelNode = function (t, e, n) {
          var i,
            r,
            a = {};
          try {
            for (var s = o(Object.keys(t)), c = s.next(); !c.done; c = s.next()) {
              var u = c.value,
                h = t[u];
              if (h) {
                var f = this.getStateNode(u)._transition(h, e, n);
                f && (a[u] = f);
              }
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              c && !c.done && (r = s.return) && r.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          var l = Object.keys(a).map(function (t) {
              return a[t];
            }),
            d = M(
              l.map(function (t) {
                return t.transitions;
              })
            );
          if (
            !l.some(function (t) {
              return t.transitions.length > 0;
            })
          )
            return this.next(e, n);
          var p = M(
            Object.keys(a).map(function (t) {
              return a[t].configuration;
            })
          );
          return {
            transitions: d,
            exitSet: M(
              l.map(function (t) {
                return t.exitSet;
              })
            ),
            configuration: p,
            source: e,
            actions: M(
              Object.keys(a).map(function (t) {
                return a[t].actions;
              })
            ),
          };
        }),
        (t.prototype._transition = function (t, e, n) {
          return Q(t)
            ? this.transitionLeafNode(t, e, n)
            : 1 === Object.keys(t).length
            ? this.transitionCompoundNode(t, e, n)
            : this.transitionParallelNode(t, e, n);
        }),
        (t.prototype.getTransitionData = function (t, e) {
          return this._transition(t.value, t, Z(e));
        }),
        (t.prototype.next = function (t, e) {
          var n,
            i,
            r,
            c = this,
            u = e.name,
            h = [],
            f = [];
          try {
            for (var l = o(this.getCandidates(u)), d = l.next(); !d.done; d = l.next()) {
              var p = d.value,
                v = p.cond,
                y = p.in,
                g = t.context,
                m =
                  !y ||
                  (Q(y) && ve(y) ? t.matches(P(this.getStateNodeById(y).path, this.delimiter)) : j(P(y, this.delimiter), D(this.path.slice(0, -2))(t.value))),
                x = !1;
              try {
                x = !v || et(this.machine, v, g, e, t);
              } catch (t) {
                throw new Error(
                  "Unable to evaluate guard '"
                    .concat(v.name || v.type, "' in transition for event '")
                    .concat(u, "' in state node '")
                    .concat(this.id, "':\n")
                    .concat(t.message)
                );
              }
              if (x && m) {
                void 0 !== p.target && (f = p.target), h.push.apply(h, s([], a(p.actions), !1)), (r = p);
                break;
              }
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              d && !d.done && (i = l.return) && i.call(l);
            } finally {
              if (n) throw n.error;
            }
          }
          if (r) {
            if (!f.length) return { transitions: [r], exitSet: [], configuration: t.value ? [this] : [], source: t, actions: h };
            var S = M(
              f.map(function (e) {
                return c.getRelativeStateNodes(e, t.historyValue);
              })
            );
            return {
              transitions: [r],
              exitSet: !!r.internal
                ? []
                : M(
                    f.map(function (t) {
                      return c.getPotentiallyReenteringNodes(t);
                    })
                  ),
              configuration: S,
              source: t,
              actions: h,
            };
          }
        }),
        (t.prototype.getPotentiallyReenteringNodes = function (t) {
          if (this.order < t.order) return [this];
          for (var e = [], n = this, i = t; n && n !== i; ) e.push(n), (n = n.parent);
          return n !== i ? [] : (e.push(i), e);
        }),
        (t.prototype.getActions = function (t, e, n, i, r, c, u) {
          var h,
            f,
            l,
            d,
            p = this,
            v = c ? qt([], this.getStateNodes(c.value)) : [],
            y = new Set();
          try {
            for (
              var g = o(
                  Array.from(t).sort(function (t, e) {
                    return t.order - e.order;
                  })
                ),
                m = g.next();
              !m.done;
              m = g.next()
            ) {
              (!Qt(v, (b = m.value)) || Qt(n.exitSet, b) || (b.parent && y.has(b.parent))) && y.add(b);
            }
          } catch (t) {
            h = { error: t };
          } finally {
            try {
              m && !m.done && (f = g.return) && f.call(g);
            } finally {
              if (h) throw h.error;
            }
          }
          try {
            for (var x = o(v), S = x.next(); !S.done; S = x.next()) {
              var b;
              (Qt(t, (b = S.value)) && !Qt(n.exitSet, b.parent)) || n.exitSet.push(b);
            }
          } catch (t) {
            l = { error: t };
          } finally {
            try {
              S && !S.done && (d = x.return) && d.call(x);
            } finally {
              if (l) throw l.error;
            }
          }
          n.exitSet.sort(function (t, e) {
            return e.order - t.order;
          });
          var w = Array.from(y).sort(function (t, e) {
              return t.order - e.order;
            }),
            _ = new Set(n.exitSet),
            E = M(
              w.map(function (t) {
                var e = [];
                if ('final' !== t.type) return e;
                var o = t.parent;
                if (!o.parent) return e;
                e.push(Ot(t.id, t.doneData), Ot(o.id, t.doneData ? U(t.doneData, i, r) : void 0));
                var a = o.parent;
                return (
                  'parallel' === a.type &&
                    Ft(a).every(function (t) {
                      return Ht(n.configuration, t);
                    }) &&
                    e.push(Ot(a.id)),
                  e
                );
              })
            ),
            T = w
              .map(function (t) {
                var e = t.onEntry,
                  n = t.activities.map(function (t) {
                    return wt(t);
                  });
                return { type: 'entry', actions: ut(u ? s(s([], a(e), !1), a(n), !1) : s(s([], a(n), !1), a(e), !1), p.machine.options.actions) };
              })
              .concat({
                type: 'state_done',
                actions: E.map(function (t) {
                  return ft(t);
                }),
              }),
            A = Array.from(_)
              .map(function (t) {
                return {
                  type: 'exit',
                  actions: ut(
                    s(
                      s([], a(t.onExit), !1),
                      a(
                        t.activities.map(function (t) {
                          return _t(t);
                        })
                      ),
                      !1
                    ),
                    p.machine.options.actions
                  ),
                };
              })
              .concat({ type: 'transition', actions: ut(n.actions, this.machine.options.actions) })
              .concat(T);
          if (e) {
            var O = ut(
              M(
                s([], a(t), !1)
                  .sort(function (t, e) {
                    return e.order - t.order;
                  })
                  .map(function (t) {
                    return t.onExit;
                  })
              ),
              this.machine.options.actions
            ).filter(function (t) {
              return !ot(t);
            });
            return A.concat({ type: 'stop', actions: O });
          }
          return A;
        }),
        (t.prototype.transition = function (t, e, n, i) {
          void 0 === t && (t = this.initialState);
          var r,
            o,
            c = Z(e);
          if (t instanceof Kt) r = void 0 === n ? t : this.resolveState(Kt.from(t, n));
          else {
            var u = Q(t) ? this.resolve(C(this.getResolvedPath(t))) : this.resolve(t),
              h = null != n ? n : this.machine.context;
            r = this.resolveState(Kt.from(u, h));
          }
          if (this.strict && !this.events.includes(c.name) && ((o = c.name), !/^(done|error)\./.test(o)))
            throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(c.name, "'"));
          var f = this._transition(r.value, r, c) || { transitions: [], configuration: [], exitSet: [], source: r, actions: [] },
            l = qt([], this.getStateNodes(r.value)),
            d = f.configuration.length ? qt(l, f.configuration) : l;
          return (f.configuration = s([], a(d), !1)), this.resolveTransition(f, r, r.context, i, c);
        }),
        (t.prototype.resolveRaisedTransition = function (t, e, n, i) {
          var r,
            o = t.actions;
          return ((t = this.transition(t, e, void 0, i))._event = n), (t.event = n.data), (r = t.actions).unshift.apply(r, s([], a(o), !1)), t;
        }),
        (t.prototype.resolveTransition = function (t, e, n, r, s) {
          var c,
            f,
            l,
            d,
            v = this;
          void 0 === s && (s = at);
          var y = t.configuration,
            g = !e || t.transitions.length > 0,
            m = g ? t.configuration : e ? e.configuration : [],
            x = Ht(m, this),
            b = g ? $t(this.machine, y) : void 0,
            w = e ? (e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0) : void 0,
            _ = this.getActions(new Set(m), x, t, n, s, e, r),
            T = e ? i({}, e.activities) : {};
          try {
            for (var A = o(_), O = A.next(); !O.done; O = A.next()) {
              var k = O.value;
              try {
                for (var j = ((l = void 0), o(k.actions)), N = j.next(); !N.done; N = j.next()) {
                  var I = N.value;
                  I.type === u ? (T[I.activity.id || I.activity.type] = I) : I.type === h && (T[I.activity.id || I.activity.type] = !1);
                }
              } catch (t) {
                l = { error: t };
              } finally {
                try {
                  N && !N.done && (d = j.return) && d.call(j);
                } finally {
                  if (l) throw l.error;
                }
              }
            }
          } catch (t) {
            c = { error: t };
          } finally {
            try {
              O && !O.done && (f = A.return) && f.call(A);
            } finally {
              if (c) throw c.error;
            }
          }
          var P,
            C,
            L = a(Ct(this, e, n, s, _, r, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2),
            V = L[0],
            D = L[1],
            R = a(
              (function (t, e) {
                var n,
                  i,
                  r = a([[], []], 2),
                  s = r[0],
                  c = r[1];
                try {
                  for (var u = o(t), h = u.next(); !h.done; h = u.next()) {
                    var f = h.value;
                    e(f) ? s.push(f) : c.push(f);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    h && !h.done && (i = u.return) && i.call(u);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return [s, c];
              })(V, ot),
              2
            ),
            M = R[0],
            z = R[1],
            B = V.filter(function (t) {
              var e;
              return t.type === u && (null === (e = t.activity) || void 0 === e ? void 0 : e.type) === S;
            }).reduce(
              function (t, e) {
                return (
                  (t[e.activity.id] = (function (t, e, n, i) {
                    var r,
                      o = nt(t.src),
                      a = null === (r = null == e ? void 0 : e.options.services) || void 0 === r ? void 0 : r[o.type],
                      s = t.data ? U(t.data, n, i) : void 0,
                      c = a ? Mt(a, t.id, s) : Rt(t.id);
                    return (c.meta = t), c;
                  })(e.activity, v.machine, D, s)),
                  t
                );
              },
              e ? i({}, e.children) : {}
            ),
            F = new Kt({
              value: b || e.value,
              context: D,
              _event: s,
              _sessionid: e ? e._sessionid : null,
              historyValue: b ? (w ? ((P = w), (C = b), { current: C, states: J(P, C) }) : void 0) : e ? e.historyValue : void 0,
              history: !b || t.source ? e : void 0,
              actions: b ? z : [],
              activities: b ? T : e ? e.activities : {},
              events: [],
              configuration: m,
              transitions: t.transitions,
              children: B,
              done: x,
              tags: Gt(m),
              machine: this,
            }),
            q = n !== D;
          F.changed = s.name === E || q;
          var X = F.history;
          X && delete X.history;
          var $ =
            !x &&
            (this._transient ||
              y.some(function (t) {
                return t._transient;
              }));
          if (!(g || ($ && '' !== s.name))) return F;
          var H = F;
          if (!x)
            for ($ && (H = this.resolveRaisedTransition(H, { type: p }, s, r)); M.length; ) {
              var G = M.shift();
              H = this.resolveRaisedTransition(H, G._event, s, r);
            }
          var K =
            H.changed ||
            (X
              ? !!H.actions.length ||
                q ||
                typeof X.value != typeof H.value ||
                !(function t(e, n) {
                  if (e === n) return !0;
                  if (void 0 === e || void 0 === n) return !1;
                  if (Q(e) || Q(n)) return e === n;
                  var i = Object.keys(e),
                    r = Object.keys(n);
                  return (
                    i.length === r.length &&
                    i.every(function (i) {
                      return t(e[i], n[i]);
                    })
                  );
                })(H.value, X.value)
              : void 0);
          return (H.changed = K), (H.history = X), H;
        }),
        (t.prototype.getStateNode = function (t) {
          if (ve(t)) return this.machine.getStateNodeById(t);
          if (!this.states) throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
          var e = this.states[t];
          if (!e) throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
          return e;
        }),
        (t.prototype.getStateNodeById = function (t) {
          var e = ve(t) ? t.slice('#'.length) : t;
          if (e === this.id) return this;
          var n = this.machine.idMap[e];
          if (!n) throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
          return n;
        }),
        (t.prototype.getStateNodeByPath = function (t) {
          if ('string' == typeof t && ve(t))
            try {
              return this.getStateNodeById(t.slice(1));
            } catch (t) {}
          for (var e = I(t, this.delimiter).slice(), n = this; e.length; ) {
            var i = e.shift();
            if (!i.length) break;
            n = n.getStateNode(i);
          }
          return n;
        }),
        (t.prototype.resolve = function (t) {
          var e,
            n = this;
          if (!t) return this.initialStateValue || pe;
          switch (this.type) {
            case 'parallel':
              return L(this.initialStateValue, function (e, i) {
                return e ? n.getStateNode(i).resolve(t[i] || e) : pe;
              });
            case 'compound':
              if (Q(t)) {
                var i = this.getStateNode(t);
                return 'parallel' === i.type || 'compound' === i.type ? (((e = {})[t] = i.initialStateValue), e) : t;
              }
              return Object.keys(t).length
                ? L(t, function (t, e) {
                    return t ? n.getStateNode(e).resolve(t) : pe;
                  })
                : this.initialStateValue || {};
            default:
              return t || pe;
          }
        }),
        (t.prototype.getResolvedPath = function (t) {
          if (ve(t)) {
            var e = this.machine.idMap[t.slice('#'.length)];
            if (!e) throw new Error("Unable to find state node '".concat(t, "'"));
            return e.path;
          }
          return I(t, this.delimiter);
        }),
        Object.defineProperty(t.prototype, 'initialStateValue', {
          get: function () {
            var t, e;
            if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
            if ('parallel' === this.type)
              e = V(
                this.states,
                function (t) {
                  return t.initialStateValue || pe;
                },
                function (t) {
                  return !('history' === t.type);
                }
              );
            else if (void 0 !== this.initial) {
              if (!this.states[this.initial]) throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
              e = Bt(this.states[this.initial]) ? this.initial : (((t = {})[this.initial] = this.states[this.initial].initialStateValue), t);
            } else e = {};
            return (this.__cache.initialStateValue = e), this.__cache.initialStateValue;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getInitialState = function (t, e) {
          this._init();
          var n = this.getStateNodes(t);
          return this.resolveTransition(
            { configuration: n, exitSet: [], transitions: [], source: void 0, actions: [] },
            void 0,
            null != e ? e : this.machine.context,
            void 0
          );
        }),
        Object.defineProperty(t.prototype, 'initialState', {
          get: function () {
            var t = this.initialStateValue;
            if (!t) throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            return this.getInitialState(t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'target', {
          get: function () {
            var t;
            if ('history' === this.type) {
              var e = this.config;
              t = Q(e.target) && ve(e.target) ? C(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target;
            }
            return t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getRelativeStateNodes = function (t, e, n) {
          return void 0 === n && (n = !0), n ? ('history' === t.type ? t.resolveHistory(e) : t.initialStateNodes) : [t];
        }),
        Object.defineProperty(t.prototype, 'initialStateNodes', {
          get: function () {
            var t = this;
            return Bt(this)
              ? [this]
              : 'compound' !== this.type || this.initial
              ? M(
                  R(this.initialStateValue).map(function (e) {
                    return t.getFromRelativePath(e);
                  })
                )
              : [this];
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getFromRelativePath = function (t) {
          if (!t.length) return [this];
          var e = a(t),
            n = e[0],
            i = e.slice(1);
          if (!this.states) throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
          var r = this.getStateNode(n);
          if ('history' === r.type) return r.resolveHistory();
          if (!this.states[n]) throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
          return this.states[n].getFromRelativePath(i);
        }),
        (t.prototype.historyValue = function (t) {
          if (Object.keys(this.states).length)
            return {
              current: t || this.initialStateValue,
              states: V(
                this.states,
                function (e, n) {
                  if (!t) return e.historyValue();
                  var i = Q(t) ? void 0 : t[n];
                  return e.historyValue(i || e.initialStateValue);
                },
                function (t) {
                  return !t.history;
                }
              ),
            };
        }),
        (t.prototype.resolveHistory = function (t) {
          var e = this;
          if ('history' !== this.type) return [this];
          var n = this.parent;
          if (!t) {
            var i = this.target;
            return i
              ? M(
                  R(i).map(function (t) {
                    return n.getFromRelativePath(t);
                  })
                )
              : n.initialStateNodes;
          }
          var r,
            a,
            s = ((r = n.path),
            (a = 'states'),
            function (t) {
              var e,
                n,
                i = t;
              try {
                for (var s = o(r), c = s.next(); !c.done; c = s.next()) {
                  var u = c.value;
                  i = i[a][u];
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (n = s.return) && n.call(s);
                } finally {
                  if (e) throw e.error;
                }
              }
              return i;
            })(t).current;
          return Q(s)
            ? [n.getStateNode(s)]
            : M(
                R(s).map(function (t) {
                  return 'deep' === e.history ? n.getFromRelativePath(t) : [n.states[t[0]]];
                })
              );
        }),
        Object.defineProperty(t.prototype, 'stateIds', {
          get: function () {
            var t = this,
              e = M(
                Object.keys(this.states).map(function (e) {
                  return t.states[e].stateIds;
                })
              );
            return [this.id].concat(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'events', {
          get: function () {
            var t, e, n, i;
            if (this.__cache.events) return this.__cache.events;
            var r = this.states,
              a = new Set(this.ownEvents);
            if (r)
              try {
                for (var s = o(Object.keys(r)), c = s.next(); !c.done; c = s.next()) {
                  var u = r[c.value];
                  if (u.states)
                    try {
                      for (var h = ((n = void 0), o(u.events)), f = h.next(); !f.done; f = h.next()) {
                        var l = f.value;
                        a.add(''.concat(l));
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        f && !f.done && (i = h.return) && i.call(h);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  c && !c.done && (e = s.return) && e.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
            return (this.__cache.events = Array.from(a));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'ownEvents', {
          get: function () {
            var t = new Set(
              this.transitions
                .filter(function (t) {
                  return !(!t.target && !t.actions.length && t.internal);
                })
                .map(function (t) {
                  return t.eventType;
                })
            );
            return Array.from(t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.resolveTarget = function (t) {
          var e = this;
          if (void 0 !== t)
            return t.map(function (t) {
              if (!Q(t)) return t;
              var n = t[0] === e.delimiter;
              if (n && !e.parent) return e.getStateNodeByPath(t.slice(1));
              var i = n ? e.key + t : t;
              if (!e.parent) return e.getStateNodeByPath(i);
              try {
                return e.parent.getStateNodeByPath(i);
              } catch (t) {
                throw new Error("Invalid transition definition for state node '".concat(e.id, "':\n").concat(t.message));
              }
            });
        }),
        (t.prototype.formatTransition = function (t) {
          var e = this,
            n = (function (t) {
              if (void 0 !== t && '' !== t) return B(t);
            })(t.target),
            r =
              'internal' in t
                ? t.internal
                : !n ||
                  n.some(function (t) {
                    return Q(t) && t[0] === e.delimiter;
                  }),
            o = this.machine.options.guards,
            a = this.resolveTarget(n),
            s = i(i({}, t), {
              actions: ut(B(t.actions)),
              cond: H(t.cond, o),
              target: a,
              source: this,
              internal: r,
              eventType: t.event,
              toJSON: function () {
                return i(i({}, s), {
                  target: s.target
                    ? s.target.map(function (t) {
                        return '#'.concat(t.id);
                      })
                    : void 0,
                  source: '#'.concat(e.id),
                });
              },
            });
          return s;
        }),
        (t.prototype.formatTransitions = function () {
          var t,
            e,
            n,
            i = this;
          if (this.config.on)
            if (Array.isArray(this.config.on)) n = this.config.on;
            else {
              var c = this.config.on,
                u = c['*'],
                h = void 0 === u ? [] : u,
                f = r(c, ['*']);
              n = M(
                Object.keys(f)
                  .map(function (t) {
                    return tt(t, f[t]);
                  })
                  .concat(tt('*', h))
              );
            }
          else n = [];
          var l = this.config.always ? tt('', this.config.always) : [],
            d = this.config.onDone ? tt(String(Ot(this.id)), this.config.onDone) : [],
            p = M(
              this.invoke.map(function (t) {
                var e = [];
                return (
                  t.onDone && e.push.apply(e, s([], a(tt(String(kt(t.id)), t.onDone)), !1)),
                  t.onError && e.push.apply(e, s([], a(tt(String(jt(t.id)), t.onError)), !1)),
                  e
                );
              })
            ),
            v = this.after,
            y = M(
              s(s(s(s([], a(d), !1), a(p), !1), a(n), !1), a(l), !1).map(function (t) {
                return B(t).map(function (t) {
                  return i.formatTransition(t);
                });
              })
            );
          try {
            for (var g = o(v), m = g.next(); !m.done; m = g.next()) {
              var x = m.value;
              y.push(x);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              m && !m.done && (e = g.return) && e.call(g);
            } finally {
              if (t) throw t.error;
            }
          }
          return y;
        }),
        t
      );
    })();
  function ge(t) {
    return t;
  }
  var me = ge,
    xe = Tt,
    Se = bt,
    be = dt,
    we = yt,
    _e = vt,
    Ee = gt,
    Te = It,
    Ae = kt,
    Oe = ft,
    ke = xt,
    je = Nt,
    Ne = Pt,
    Ie = _t;
  (t.Interpreter = he),
    (t.Machine = function (t, e, n) {
      return void 0 === n && (n = t.context), new ye(t, e, n);
    }),
    (t.State = Kt),
    (t.StateNode = ye),
    (t.actions = Lt),
    (t.assign = xe),
    (t.cancel = Se),
    (t.choose = Ne),
    (t.createMachine = function (t, e) {
      return new ye(t, e);
    }),
    (t.createSchema = ge),
    (t.doneInvoke = Ae),
    (t.forwardTo = Te),
    (t.interpret = fe),
    (t.log = ke),
    (t.mapState = function (t, e) {
      var n, i, r;
      try {
        for (var a = o(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          j(c, e) && (!r || e.length > r.length) && (r = c);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return t[r];
    }),
    (t.matchState = function (t, e, n) {
      var i,
        r,
        s = Kt.from(t, t instanceof Kt ? t.context : void 0);
      try {
        for (var c = o(e), u = c.next(); !u.done; u = c.next()) {
          var h = a(u.value, 2),
            f = h[0],
            l = h[1];
          if (s.matches(f)) return l(s);
        }
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          u && !u.done && (r = c.return) && r.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      return n(s);
    }),
    (t.matchesState = j),
    (t.pure = je),
    (t.raise = Oe),
    (t.send = be),
    (t.sendParent = _e),
    (t.sendTo = we),
    (t.sendUpdate = Ee),
    (t.spawn = function (t, e) {
      var n = (function (t) {
        return Q(t) ? i(i({}, ue), { name: t }) : i(i(i({}, ue), { name: W() }), t);
      })(e);
      return (function (e) {
        return e ? e.spawn(t, n.name, n) : Mt(t, n.name);
      })(Vt[Vt.length - 1]);
    }),
    (t.spawnBehavior = se),
    (t.stop = Ie),
    (t.t = me),
    (t.toActorRef = zt),
    (t.toEventObject = Y),
    (t.toObserver = it),
    (t.toSCXMLEvent = Z),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
